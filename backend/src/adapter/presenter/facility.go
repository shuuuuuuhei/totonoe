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

func (f Facility) RenderError(_ error) {
	panic("not implemented") // TODO: Implement
}

// RenderFacilities implements port.FacilityOutputPort
func (f Facility) RenderFacilities(*[]ValueObject.FacilityVO) {
	panic("unimplemented")
}

// RenderFacility implements port.FacilityOutputPort
func (f Facility) RenderFacility(facility *ValueObject.FacilityVO) {
	f.c.JSON(200, facility)
}
