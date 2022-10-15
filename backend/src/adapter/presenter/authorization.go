package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Authorization struct {
	c *gin.Context
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
