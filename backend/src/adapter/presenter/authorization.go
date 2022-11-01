package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Authorization struct {
	c *gin.Context
}

// RenderApplyingUserList implements port.AuthorizationOutputPort
func (a *Authorization) RenderApplyingUserList(applyingUserList *[]ValueObject.ApplyingUser) {
	a.c.JSON(200, applyingUserList)
}

// RenderAuthorization implements port.AuthorizationOutputPort
func (a *Authorization) RenderAuthorization(authorization *Domain.Authorization) {
	a.c.JSON(200, authorization)
}

// RenderError implements port.AuthorizationOutputPort
func (a *Authorization) RenderError(e error) {
	a.c.JSON(500, e)
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
