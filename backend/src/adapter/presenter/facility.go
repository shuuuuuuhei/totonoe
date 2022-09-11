package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	c *gin.Context
}

func NewFacilityOutputPort(c *gin.Context) port.FacilityOutputPort {
	return &Facility{
		c: c,
	}
}

// RenderOK implements port.FacilityOutputPort
func (f Facility) RenderOK() {
	f.c.JSON(200, nil)
}

func (f Facility) RenderError(err error) {
	f.c.JSON(500, err)
}

// RenderFacilities implements port.FacilityOutputPort
func (f Facility) RenderFacilities(facilities *[]ValueObject.FacilityVO) {
	f.c.JSON(200, facilities)
}

// RenderFacility implements port.FacilityOutputPort
func (f Facility) RenderFacility(facility *ValueObject.FacilityVO) {
	f.c.JSON(200, facility)
}
