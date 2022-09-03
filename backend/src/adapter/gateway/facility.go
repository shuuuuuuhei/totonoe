package gateway

import (
	"encoding/json"

	"github.com/gin-gonic/gin"
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

// GetFacilities implements port.FacilityRepository
func (f *Facility) GetFacilities(c *gin.Context) (*[]ValueObject.FacilityVO, error) {
	conn := f.conn

	facilities := []ValueObject.FacilityVO{}
	query := conn.Debug().Table("facility").
		Select("facility.id,facility.name,prefecture.name || city.name || address.street_name AS address,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.lodging_flg,facility.restaurant_flg,facility.working_space_flg,facility.books_flg,facility.heat_wave_flg,facility.air_bath_flg,facility.break_space_flg, sauna.sauna_type, sauna.temperature, sauna.capacity, sauna.rouryu_flg, sauna.sauna_mat_flg, sauna.tv_flg, sauna.bgm_flg").
		Joins("left join sauna on sauna.facility_id = facility.id").
		Joins("left join address on address.facility_id = facility.id").
		Joins("left join prefecture on prefecture.id = address.prefecture_id").
		Joins("left join city on city.id = address.city_id")

	query.Scan(&facilities)

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
