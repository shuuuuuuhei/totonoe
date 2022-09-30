package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Facility struct {
	OutputPort   port.FacilityOutputPort
	FacilityRepo port.FacilityRepository
}

// GetFacilityNameByID implements port.FacilityInputPort
func (f *Facility) GetFacilityNameByID(c *gin.Context) {
	facility, err := f.FacilityRepo.GetFacilityNameByID(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderFacility(facility)
}

// GetFacilitiesByMapInfomation マップ情報を受け取り、該当する施設情報を返す
func (f *Facility) GetFacilitiesByMapInfomation(c *gin.Context) {
	facilities, err := f.FacilityRepo.GetFacilitiesByMapInfomation(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderFacilities(facilities)
}

// GetFacilities
func (f *Facility) GetFacilities(c *gin.Context) {
	facilities, err := f.FacilityRepo.GetFacilities(c)
	if err != nil {
		f.OutputPort.RenderError(err)
		return
	}
	f.OutputPort.RenderFacilities(facilities)
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
