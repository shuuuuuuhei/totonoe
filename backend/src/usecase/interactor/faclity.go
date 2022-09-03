package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	OutputPort   port.FacilityOutputPort
	FacilityRepo port.FacilityRepository
}

// GetFacilities implements port.FacilityInputPort
func (*Facility) GetFacilities(*gin.Context) (*[]ValueObject.FacilityVO, error) {
	panic("unimplemented")
}

// CreateFacility
func (f *Facility) CreateFacility(c *gin.Context) {
	err := f.FacilityRepo.CreateFacility(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderOK()
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
	facilities, err := f.FacilityRepo.GetFacilities(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderFacilities(facilities)
}

func NewFacilityInputPort(o port.FacilityOutputPort, r port.FacilityRepository) port.FacilityInputPort {
	return &Facility{
		OutputPort:   o,
		FacilityRepo: r,
	}
}
