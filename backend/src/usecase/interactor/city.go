package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type City struct {
	OutputPort port.CityOutputPort
	Repo       port.CityRepository
}

// GetCitiesByPrefectureID implements port.CityInputport
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
