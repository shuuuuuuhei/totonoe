package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type Facility struct {
	InputFactory  func(o port.FacilityOutputPort, r port.FacilityRepository) port.FacilityInputPort
	OutputFactory func(*gin.Context) port.FacilityOutputPort
	FacilityRepo  func(*gorm.DB) port.FacilityRepository
	Conn          *gorm.DB
}

func (f Facility) GetFacilityByID(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilityByID(c)
}

func (f Facility) newInputPort(c *gin.Context) port.FacilityInputPort{
	output := f.OutputFactory(c)
	repository := f.FacilityRepo(f.Conn)
	inputport := f.InputFactory(output, repository)
	return inputport
}