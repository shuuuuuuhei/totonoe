package gateway

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"github.com/shopspring/decimal"
	"gorm.io/gorm"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	conn *gorm.DB
}

type facilityParams struct {
	UserID   string          `json:"user_id"`
	Facility Domain.Facility `json:"facility"`
}

type mapInfo struct {
	LatLngLiteral struct {
		Lat decimal.Decimal `json:"lat"`
		Lng decimal.Decimal `json:"lng"`
	} `json:"latlng_literal"`
	Name string `json:"name"`
}

type mapInfoListParams struct {
	MapInfoList []mapInfo `json:"map_info_list,omitempty"`
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
			Select("facility.id, facility.name, address.latitude, address.longitude").
			Joins("left join address on address.facility_id = facility.id").
			Where("address.Latitude=? and address.Longitude=?", params.MapInfoList[i].LatLngLiteral.Lat, params.MapInfoList[i].LatLngLiteral.Lng).First(&facility).Error; err != nil {
			if errors.Is(err, gorm.ErrRecordNotFound) {
				// 施設情報が登録されていなければマップ情報のみ代入を行い、リストに追加する。次ループ処理を行う。
				fmt.Println("施設情報が見つかりませんでした。 user_id =", params.MapInfoList[i].Name)
				facilities = append(facilities, ValueObject.FacilityVO{Name: params.MapInfoList[i].Name, Latitude: params.MapInfoList[i].LatLngLiteral.Lat, Longitude: params.MapInfoList[i].LatLngLiteral.Lng})
				continue
			}
			log.Println(err)
			return nil, errors.New("Internal Server Error. 施設情報取得に失敗しました。")
		}
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

	query := conn.Where("")

	if requestPrams.Get("area") != "" {
		// エリア情報の指定があればエリアの条件を付与する
		query = query.Where("f.address like ?", "%"+requestPrams.Get("area")+"%")
	}
	
	if requestPrams.Get("facilityName") != "" {
		// 施設名の指定があれば施設名の条件を付与する
		query = query.Where("f.name like ?", "%"+requestPrams.Get("facilityName")+"%")
	}

	query.Debug().
		Table("(?) as f", conn.Table("facility").
			Select("facility.id,facility.name,prefecture.name || city.name AS address,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.lodging_flg,facility.restaurant_flg,facility.working_space_flg,facility.books_flg,facility.heat_wave_flg,facility.air_bath_flg,facility.break_space_flg").
			Joins("left join address on address.facility_id = facility.id").
			Joins("left join prefecture on prefecture.id = address.prefecture_id").
			Joins("left join city on city.id = address.city_id")).
			Scan(&facilities)

	return &facilities, nil
}

// CreateFacility implements port.FacilityRepository
func (f *Facility) CreateFacility(c *gin.Context) error {
	conn := f.conn
	params := facilityParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	if err := conn.Debug().Create(&params.Facility).Error; err != nil {
		return err
	}

	return nil
}

// GetFacilitiesBySaunaOption implements port.FacilityRepository
func (*Facility) GetFacilitiesBySaunaOption(*gin.Context) (*[]ValueObject.FacilityVO, error) {
	panic("unimplemented")
}

// GetFacilityByID implements port.FacilityRepository
func (f *Facility) GetFacilityByID(c *gin.Context) (*ValueObject.FacilityVO, error) {
	conn := f.conn
	facilityID := c.Param("facilityID")

	facility := ValueObject.FacilityVO{}

	query := conn.Debug().Table("facility").
		Select("facility.id,facility.name,prefecture.name || city.name || address.street_name AS address,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.lodging_flg,facility.restaurant_flg,facility.working_space_flg,facility.books_flg,facility.heat_wave_flg,facility.air_bath_flg,facility.break_space_flg, sauna.sauna_type, sauna.temperature, sauna.capacity, sauna.rouryu_flg, sauna.sauna_mat_flg, sauna.tv_flg, sauna.bgm_flg").
		Joins("left join sauna on sauna.facility_id = facility.id").
		Joins("left join address on address.facility_id = facility.id").
		Joins("left join prefecture on prefecture.id = address.prefecture_id").
		Joins("left join city on city.id = address.city_id").
		Where("facility.id=?", facilityID)

	query.Scan(&facility)

	rows, err := query.Rows()
	if err != nil {
		return nil, err
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

func NewFacilityRepository(c *gorm.DB) port.FacilityRepository {
	return &Facility{
		conn: c,
	}
}
