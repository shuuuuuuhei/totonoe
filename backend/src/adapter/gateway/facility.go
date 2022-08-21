package gateway

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	conn *gorm.DB
}

func NewFacilityRepository(c *gorm.DB) port.FacilityRepository {
	return &Facility{
		conn: c,
	}
}

// GetFacilitiesBySaunaOption implements port.FacilityRepository
func (*Facility) GetFacilitiesBySaunaOption(*gin.Context) ([]*ValueObject.FacilityVO, error) {
	panic("unimplemented")
}

// GetFacilityByID implements port.FacilityRepository
func (f Facility) GetFacilityByID(c *gin.Context) (*ValueObject.FacilityVO, error) {
	conn := f.conn
	facilityID := c.Param("facilityID")

	facility := ValueObject.FacilityVO{}

	query := conn.Debug().Table("facility").
		Select("facility.id,facility.name,prefecture.name || city.name || address.street_name AS address,facility.tel,facility.eigyo_start,facility.eigyo_end,facility.price,facility.logging_kb,facility.restaurant_kb,facility.working_space_kb,facility.books_kb,facility.heat_wave_kb,facility.air_bath_kb,facility.break_space_kb, sauna.sauna_type, sauna.temperature, sauna.capacity, sauna.rouryu_kb, sauna.sauna_mat_kb, sauna.tv_kb, sauna.bgm_kb").
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
