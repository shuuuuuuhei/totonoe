package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Facility struct {
	OutputPort   port.FacilityOutputPort
	FacilityRepo port.FacilityRepository
}

//
func NewFacilityInputPort(o port.FacilityOutputPort, r port.FacilityRepository) port.FacilityInputPort {
	return &Facility{
		OutputPort:   o,
		FacilityRepo: r,
	}
}

func (f Facility) GetFacilityByID(c *gin.Context) {
	facility, err := f.FacilityRepo.GetFacilityByID(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderFacility(facility)
}

func (f Facility) GetFacilitiesBySaunaOption(c *gin.Context) {
	panic("not implemented") // TODO: Implement
}
