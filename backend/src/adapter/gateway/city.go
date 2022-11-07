package gateway

import (
	"errors"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type City struct {
	conn *gorm.DB
}

// GetCityIDByPrefectureIDCityName 都道府県IDと市区町村名から市区町村IDを取得
func (c *City) GetCityByPrefectureIDCityName(ctx *gin.Context) (*ValueObject.CityVO, error) {
	conn := c.conn

	prefectureID := ctx.Param("prefectureID")
	cityName := ctx.Param("cityName")

	city := ValueObject.CityVO{}
	if err := conn.Debug().Table("prefecture").Select("city.id, city.name").
		Joins("inner join city on city.prefecture_id = prefecture.id").
		Where("city.name=? and prefecture.id=?", cityName, prefectureID).
		First(&city).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("市区町村情報が登録されていません")
		}
		return nil, err
	}

	return &city, nil
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
