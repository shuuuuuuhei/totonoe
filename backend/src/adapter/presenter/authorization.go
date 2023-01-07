package presenter

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Authorization struct {
	c *gin.Context
}

// RenderApplyiedUserList implements port.AuthorizationOutputPort
func (a *Authorization) RenderApplyiedAuthorizationList(appliedAuthorizationList *[]ValueObject.AppliedAuthorization) {
	a.c.JSON(200, appliedAuthorizationList)
}

// RenderApplyingAuthorizationList implements port.AuthorizationOutputPort
func (a *Authorization) RenderApplyingAuthorizationList(applyingAuthorizationList *[]ValueObject.ApplyingAuthorization) {
	a.c.JSON(200, applyingAuthorizationList)
}

// RenderAuthorization implements port.AuthorizationOutputPort
func (a *Authorization) RenderAuthorization(authorization *Domain.Authorization) {
	a.c.JSON(200, authorization)
}

// RenderError implements port.AuthorizationOutputPort
func (a *Authorization) RenderError(err error) {
	fmt.Println(err)
	a.c.JSON(500, err)
}

// RenderOK implements port.AuthorizationOutputPort
func (a *Authorization) RenderOK() {
	a.c.JSON(200, nil)
}

func NewAuthorizationOutputPort(conn *gin.Context) port.AuthorizationOutputPort {
	return &Authorization{
		c: conn,
	}
}
