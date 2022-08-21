package gateway

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Prefecture struct {
	conn *gorm.DB
}

func NewPrefectureRepository(c *gorm.DB) port.PrefectureRepository {
	return &Prefecture{
		conn: c,
	}
}
func (p Prefecture) GetAllPrefecture(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error) {
	conn := p.conn

	allPrefectures := []ValueObject.PrefectureVO{}

	if err := conn.Debug().Table("prefecture").
		Select("*").
		Scan(&allPrefectures).Error; err != nil {
		return nil, err
	}

	return &allPrefectures, nil
}

func (p Prefecture) GetPrefectureByCity(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error) {
	conn := p.conn

	prefectures := []ValueObject.PrefectureVO{}

	if err := conn.Debug().Table("prefecture").
		Select("*").
		Joins("LEFT JOIN city ON ").
		Scan(&prefectures).Error; err != nil {
		return nil, err
	}

	return &prefectures, nil
}

func (p Prefecture) GetPrefectureByID(ctx *gin.Context) (*ValueObject.PrefectureVO, error) {
	panic("not implemented") // TODO: Implement
}

func (p Prefecture) GetPrefectureByName(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error) {
	panic("not implemented") // TODO: Implement
}
