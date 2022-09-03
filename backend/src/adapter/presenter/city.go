package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type City struct {
	c *gin.Context
}

// RenderCities implements port.CityOutputPort
func (c *City) RenderCities(city *[]ValueObject.CityVO) {
	c.c.JSON(200, city)
}

// RenderError implements port.CityOutputPort
func (c *City) RenderError(err error) {
	c.c.JSON(500, err)
}

func NewCityOutputPort(c *gin.Context) port.CityOutputPort {
	return &City{
		c: c,
	}
}
