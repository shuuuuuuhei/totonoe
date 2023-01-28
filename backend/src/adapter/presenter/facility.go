package presenter

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Facility struct {
	c *gin.Context
}

// RenderPostFacility implements port.FacilityOutputPort
func (f *Facility) RenderPostFacility(postFacility *Domain.Facility) {
	f.c.JSON(http.StatusOK, postFacility)
}

// RenderOK implements port.FacilityOutputPort
func (f Facility) RenderOK() {
	f.c.JSON(http.StatusOK, nil)
}

func (f Facility) RenderError(err error) {
	errCode, errMessage := toHTTPResponse(err)
	f.c.JSON(errCode, gin.H{"msg": errMessage})
	fmt.Printf("エラーコード：%d, メッセージ：%s", errCode, errMessage)
}

// RenderFacilities implements port.FacilityOutputPort
func (f Facility) RenderFacilities(facilities *[]ValueObject.FacilityVO) {
	f.c.JSON(http.StatusOK, facilities)
}

// RenderFacility implements port.FacilityOutputPort
func (f Facility) RenderFacility(facility *ValueObject.FacilityVO) {
	f.c.JSON(http.StatusOK, facility)
}

func NewFacilityOutputPort(c *gin.Context) port.FacilityOutputPort {
	return &Facility{
		c: c,
	}
}
