package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type City struct {
	InputFactory  func(port.CityOutputPort, port.CityRepository) port.CityInputport
	OutputFactory func(*gin.Context) port.CityOutputPort
	RepoFactory   func(*gorm.DB) port.CityRepository
	Conn          *gorm.DB
}

func (c *City) GetCitiesByPrefectureID(ctx *gin.Context) {
	inputPort := c.newInputPort(ctx)
	inputPort.GetCitiesByPrefectureID(ctx)
}

func (c *City) GetCityIDByPrefectureIDCityName(ctx *gin.Context) {
	inputPort := c.newInputPort(ctx)
	inputPort.GetCityByPrefectureIDCityName(ctx)
}

func (c City) newInputPort(ctx *gin.Context) port.CityInputport {
	output := c.OutputFactory(ctx)
	repository := c.RepoFactory(c.Conn)
	inputport := c.InputFactory(output, repository)
	return inputport
}
