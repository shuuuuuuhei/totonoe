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

func (f Facility) GetFacilityNameyID(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilityNameByID(c)
}

func (f Facility) GetFacilityByID(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilityByID(c)
}

func (f Facility) CreateFacility(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.CreateFacility(c)
}

func (f Facility) GetFacilities(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilities(c)
}

func (f Facility) GetFacilitiesByMapInfo(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilitiesByMapInfomation(c)
}

func (f Facility) GetFacilitiesWithFilter(c *gin.Context) {
	inputport := f.newInputPort(c)
	inputport.GetFacilitiesWithFilter(c)
}

func (f Facility) newInputPort(c *gin.Context) port.FacilityInputPort {
	output := f.OutputFactory(c)
	repository := f.FacilityRepo(f.Conn)
	inputport := f.InputFactory(output, repository)
	return inputport
}
