package gateway

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"net/url"
	"os"
	"strconv"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
	"googlemaps.github.io/maps"
	"gorm.io/gorm"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	conn *gorm.DB
}

// GetFacilitiesBySaunaOption implements port.FacilityRepository
func (*Facility) GetFacilitiesBySaunaOption(*gin.Context) (*[]ValueObject.FacilityVO, error) {
	panic("unimplemented")
}

type facilityParams struct {
	UserID   string          `json:"user_id"`
	Facility Domain.Facility `json:"facility"`
}

type mapInfo struct {
	LatLngLiteral struct {
		Lat float64 `json:"lat"`
		Lng float64 `json:"lng"`
	} `json:"latlng_literal"`
	Name string `json:"name"`
}

type mapInfoListParams struct {
	MapInfoList []mapInfo `json:"map_info_list,omitempty"`
}

// 経度緯度初期値(設定なし)
const (
	DEFAULT_LATLNG = 0
)

// GetFacilityNameByID 施設IDから施設名を取得
func (f *Facility) GetFacilityNameByID(c *gin.Context) (*ValueObject.FacilityVO, error) {
	conn := f.conn
	facilityID := c.Param("facilityID")

	facility := ValueObject.FacilityVO{}

	if err := conn.Debug().Table("facility").
		Select("facility.id,facility.name").
		Where("facility.id=?", facilityID).
		First(&facility).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("サウナ情報が見つかりませんでした。")
		}
		return nil, fmt.Errorf("サウナ名取得に失敗しました。")
	}
	return &facility, nil
}

// GetFacilitiesByMapInfomation マップ情報から登録されている施設の基本情報を返す
func (f *Facility) GetFacilitiesByMapInfomation(c *gin.Context) (*[]ValueObject.FacilityVO, error) {
	conn := f.conn

	params := mapInfoListParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	facilities := []ValueObject.FacilityVO{}
	for i := 0; i < len(params.MapInfoList); i++ {
		facility := ValueObject.FacilityVO{}
		if err := conn.Debug().Table("facility").
			Select("facility.id, facility.name, address.latitude, address.longitude, count(article.id) as article_count").
			Joins("left join address on address.facility_id = facility.id").Joins("left join article on article.facility_id = facility.id").
			Where("address.Latitude=? and address.Longitude=?", params.MapInfoList[i].LatLngLiteral.Lat, params.MapInfoList[i].LatLngLiteral.Lng).Group("facility.id, facility.name, address.latitude, address.longitude").
			First(&facility).Error; err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				// 施設情報が登録されていなければマップ情報のみ代入を行い、リストに追加する。次ループ処理を行う。
				fmt.Println("施設情報が見つかりませんでした。 user_id =", params.MapInfoList[i].Name)

				facilities = append(facilities, ValueObject.FacilityVO{
					Name:      params.MapInfoList[i].Name,
					Latitude:  params.MapInfoList[i].LatLngLiteral.Lat,
					Longitude: params.MapInfoList[i].LatLngLiteral.Lng,
				})
				continue
			}
			log.Println(err)
			return nil, errors.New("Internal Server Error. 施設情報取得に失敗しました。")
		}
		facility.Latitude = params.MapInfoList[i].LatLngLiteral.Lat
		facility.Longitude = params.MapInfoList[i].LatLngLiteral.Lng
		facilities = append(facilities, facility)
	}
	return &facilities, nil
}

// GetFacilities サウナ施設条件検索を行う
func (f *Facility) GetFacilities(c *gin.Context) (*[]ValueObject.FacilityVO, error) {
	conn := f.conn

	facilities := []ValueObject.FacilityVO{}
	requestPrams := c.Request.URL.Query()
	fmt.Println(requestPrams)

	// リクエストパラメータからWhere句を作成する
	getFacilityQuery := createFacilityWhereQuery(conn, requestPrams)

	// リクエストパラメータからページンング処理を行う
	getFacilityQuery = createPagingLimitQuery(getFacilityQuery, requestPrams)

	// 施設情報取得
	getFacilityQuery.Debug().Table("facility").
		Select("count(facility.id) over() as full_count, facility.id,facility.name,prefecture.name || city.name AS address,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.lodging_flg,facility.restaurant_flg,facility.working_space_flg,facility.books_flg,facility.heat_wave_flg,facility.air_bath_flg,facility.break_space_flg, facility.water_server_flg").
		Joins("left join address on address.facility_id = facility.id").
		Joins("left join prefecture on prefecture.id = address.prefecture_id").
		Joins("left join city on city.id = address.city_id").Scan(&facilities)

	return &facilities, nil
}

// CreateFacility 施設登録処理
func (f *Facility) CreateFacility(c *gin.Context) (*Domain.Facility, error) {
	conn := f.conn
	params := facilityParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	err := conn.Debug().Transaction(func(tx *gorm.DB) error {

		// 経度緯度情報がなければ住所情報から経度緯度情報を取得する
		if params.Facility.Address.Latitude == DEFAULT_LATLNG || params.Facility.Address.Longitude == DEFAULT_LATLNG {

			// 経度緯度取得
			if err := getLatLng(c, conn, &params); err != nil {
				return err
			}

		}

		// 施設登録処理ar
		if err := tx.Create(&params.Facility).Error; err != nil {
			return err
		}
		return nil
	})

	if err != nil {
		return nil, err
	}

	return &params.Facility, nil
}

// 住所から経度緯度情報取得
func getLatLng(c *gin.Context, conn *gorm.DB, params *facilityParams) error {
	// 住所を受け取る
	addressStr := getAddress(conn, params.Facility.Address)

	if addressStr == "" {
		return fmt.Errorf("住所名称が取得できませんでした。")
	}
	err := godotenv.Load(".env")

	if err != nil {
		return fmt.Errorf("GoogleAPIキーが取得できませんでした")
	}

	// GoogleMapsAPIキーを取得
	client, err := maps.NewClient(maps.WithAPIKey(os.Getenv("GOOGLE_MAPS_API_KEY")))

	if err != nil {
		return fmt.Errorf("GoogleMapsApiキーが不正です" + err.Error())
	}

	request := &maps.GeocodingRequest{
		Address: addressStr,
	}

	results, err := client.Geocode(c, request)

	if err != nil {
		return err
	}

	latlng := results[0].Geometry.Location

	fmt.Println(latlng.Lat)
	fmt.Println(latlng.Lng)

	params.Facility.Address.Latitude = latlng.Lat
	params.Facility.Address.Longitude = latlng.Lng

	return nil
}

// getAddress 住所正式名称を取得
func getAddress(conn *gorm.DB, address Domain.Address) string {

	cityNameWithPrefecture := ""
	// 市区町村を取得
	conn.Debug().Table("prefecture").Select("prefecture.name || city.name as cityNameWithPrefecture").
		Joins("inner join city on city.prefecture_id = prefecture.id").
		Where("prefecture.id=? and city.id=?", address.PrefectureID, address.CityID).
		Scan(&cityNameWithPrefecture)

	// 取得した市区町村と番地を結合する
	addressStr := cityNameWithPrefecture + address.StreetName
	return addressStr
}

// GetFacilityByID implements port.FacilityRepository
func (f *Facility) GetFacilityByID(c *gin.Context) (*ValueObject.FacilityVO, error) {
	conn := f.conn
	facilityID := c.Param("facilityID")

	facility := ValueObject.FacilityVO{}

	query := conn.Debug().Table("facility").
		Select("facility.id,facility.name,prefecture.name || city.name || address.street_name AS address,address.latitude,address.longitude,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.lodging_flg,facility.restaurant_flg,facility.working_space_flg,facility.books_flg,facility.heat_wave_flg,facility.air_bath_flg,facility.break_space_flg, sauna.sauna_type, sauna.temperature, sauna.capacity, sauna.rouryu_flg, sauna.sauna_mat_flg, sauna.tv_flg, sauna.bgm_flg").
		Joins("left join sauna on sauna.facility_id = facility.id").
		Joins("left join address on address.facility_id = facility.id").
		Joins("left join prefecture on prefecture.id = address.prefecture_id").
		Joins("left join city on city.id = address.city_id").
		Where("facility.id=?", facilityID)

	query.Scan(&facility)

	rows, err := query.Rows()
	if err != nil {
		return nil, fmt.Errorf("サウナ情報が見つかりませんでした。")
	}

	for rows.Next() {
		sauna := ValueObject.Sauna{}

		err := query.ScanRows(rows, &sauna)
		if err != nil {
			return nil, err
		}
		facility.Saunas = append(facility.Saunas, sauna)
	}
	return &facility, nil
}

// createPagingLimitQuery ページングの条件を付与する
func createPagingLimitQuery(conn *gorm.DB, requestPrams url.Values) *gorm.DB {

	// ページング処理
	if requestPrams.Get("page") != "" {
		// 1ページに表示する件数
		rowCountPerPage := 20
		targetPageCount, err := strconv.Atoi(requestPrams.Get("page"))

		if err != nil {
			return conn
		}

		startRowCount := rowCountPerPage * (targetPageCount - 1)

		conn.Limit(rowCountPerPage)
		conn.Offset(startRowCount)
	}
	return conn
}

// createOptionWhereQuery 施設オプション追加検索の条件を作成
func createOptionWhereQuery(conn *gorm.DB, requestPrams url.Values) *gorm.DB {
	query := conn.Where("")

	if requestPrams.Has("lodging_flg") {
		query = query.Where("f.address like ?", "%"+requestPrams.Get("area")+"%")
	}

	return query
}

// createFacilityWhereQuery 施設検索で使用するWhere句の条件を作成
func createFacilityWhereQuery(conn *gorm.DB, requestPrams url.Values) *gorm.DB {

	query := conn.Where("")

	// エリア情報の指定があればエリアの条件を付与する
	if requestPrams.Get("area") != "" {
		query = query.Where("prefecture.name || city.name like ?", "%"+requestPrams.Get("area")+"%")
	}

	// 施設名の指定があれば施設名の条件を付与する
	if requestPrams.Get("facilityName") != "" {
		query = query.Where("facility.name like ?", "%"+requestPrams.Get("facilityName")+"%")
	}

	// 値段の指定があれば施設名の条件を付与する
	if requestPrams.Get("price_start") != "" {
		query = query.Where("facility.price >= ?", requestPrams.Get("price_start"))
	}

	// 値段の指定があれば施設名の条件を付与する
	if requestPrams.Get("price_end") != "" {
		query = query.Where("facility.price <= ?", requestPrams.Get("price_end"))
	}

	// 各施設オプションの指定があれば件を付与する
	if requestPrams.Has("restaurant_flg") {
		query = query.Where("facility.restaurant_flg = ?", requestPrams.Get("restaurant_flg"))
	}
	if requestPrams.Has("working_space_flg") {
		query = query.Where("facility.working_space_flg = ?", requestPrams.Get("working_space_flg"))
	}
	if requestPrams.Has("air_bath_flg") {
		query = query.Where("facility.air_bath_flg = ?", requestPrams.Get("air_bath_flg"))
	}
	if requestPrams.Has("water_server_flg") {
		query = query.Where("facility.water_server_flg = ?", requestPrams.Get("water_server_flg"))
	}
	if requestPrams.Has("books_flg") {
		query = query.Where("facility.books_flg = ?", requestPrams.Get("books_flg"))
	}

	if requestPrams.Has("heat_wave_flg") {
		query = query.Where("facility.heat_wave_flg = ?", requestPrams.Get("heat_wave_flg"))
	}
	return query
}

func NewFacilityRepository(c *gorm.DB) port.FacilityRepository {
	return &Facility{
		conn: c,
	}
}
