package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/usecase/port"
)

type Authorization struct {
	c *gin.Context
}

// RenderAuthorization implements port.AuthorizationOutputPort
func (a *Authorization) RenderAuthorization(authorization *Domain.Authorization) {
	a.c.JSON(200, authorization)
}

// RenderError implements port.AuthorizationOutputPort
func (*Authorization) RenderError(e error) {
	panic("unimplemented")
}

// RenderOK implements port.AuthorizationOutputPort
func (*Authorization) RenderOK() {
	panic("unimplemented")
}

func NewAuthorizationOutputPort(conn *gin.Context) port.AuthorizationOutputPort {
	return &Authorization{
		c: conn,
	}
}
