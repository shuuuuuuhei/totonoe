package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
)

type FacilityInputPort interface {
	GetFacilityByID(*gin.Context)
	GetFacilitiesBySaunaOption(*gin.Context)
	CreateFacility(*gin.Context)
	GetFacilities(*gin.Context)
	GetFacilitiesByMapInfomation(*gin.Context)
	GetFacilityNameByID(*gin.Context)
}

type FacilityOutputPort interface {
	RenderOK()
	RenderError(error)
	RenderFacility(*ValueObject.FacilityVO)
	RenderFacilities(*[]ValueObject.FacilityVO)
	RenderPostFacility(*Domain.Facility)
}

type FacilityRepository interface {
	GetFacilityByID(*gin.Context) (*ValueObject.FacilityVO, error)
	GetFacilitiesBySaunaOption(*gin.Context) (*[]ValueObject.FacilityVO, error)
	CreateFacility(*gin.Context) (*Domain.Facility, error)
	GetFacilities(*gin.Context) (*[]ValueObject.FacilityVO, error)
	GetFacilitiesByMapInfomation(*gin.Context) (*[]ValueObject.FacilityVO, error)
	GetFacilityNameByID(*gin.Context) (*ValueObject.FacilityVO, error)
}
