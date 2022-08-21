package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

type FacilityInputPort interface {
	GetFacilityByID(*gin.Context)
	GetFacilitiesBySaunaOption(*gin.Context)
}

type FacilityOutputPort interface {
	RenderOK()
	RenderError(error)
	RenderFacility(*ValueObject.FacilityVO)
	RenderFacilities([]*ValueObject.FacilityVO)
}

type FacilityRepository interface {
	GetFacilityByID(*gin.Context) (*ValueObject.FacilityVO, error)
	GetFacilitiesBySaunaOption(*gin.Context) ([]*ValueObject.FacilityVO, error)
}
