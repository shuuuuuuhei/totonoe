package gateway

import (
	"errors"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type City struct {
	conn *gorm.DB
}

// GetCitiesByPrefectureID implements port.CityRepository
func (c *City) GetCitiesByPrefectureID(ctx *gin.Context) (*[]ValueObject.CityVO, error) {
	conn := c.conn

	prefectureID := ctx.Param("prefectureID")

	cities := []ValueObject.CityVO{}

	if err := conn.Debug().Table("city").
		Select("city.id, city.prefecture_id, city.name").
		Where("prefecture_id=?", prefectureID).
		Scan(&cities).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("コメントが見つかりませんでした。)")
			return nil, err
		}
		return nil, err
	}
	return &cities, nil
}

func NewCityRepository(c *gorm.DB) port.CityRepository {
	return &City{
		conn: c,
	}
}
