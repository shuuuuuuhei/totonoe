package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type City struct {
	OutputPort port.CityOutputPort
	Repo       port.CityRepository
}

// GetCityByPrefectureIDCityName 市区町村情報を取得。取得できない場合はエラーを返す。
func (c *City) GetCityByPrefectureIDCityName(ctx *gin.Context) {
	city, err := c.Repo.GetCityByPrefectureIDCityName(ctx)

	if err != nil {
		c.OutputPort.RenderError(err)
		return
	}

	c.OutputPort.RenderCity(city)
}

// GetCitiesByPrefectureID 市区町村リストを取得
func (c *City) GetCitiesByPrefectureID(ctx *gin.Context) {
	cities, err := c.Repo.GetCitiesByPrefectureID(ctx)
	if err != nil {
		c.OutputPort.RenderError(err)
		return
	}
	c.OutputPort.RenderCities(cities)
}

func NewCityInputPort(o port.CityOutputPort, r port.CityRepository) port.CityInputport {
	return &City{
		OutputPort: o,
		Repo:       r,
	}
}
