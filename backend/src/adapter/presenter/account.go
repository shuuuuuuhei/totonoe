package presenter

import (
	"fmt"

	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Account struct {
	c *gin.Context
}

// RenderError implements port.AccountOutputPort
func (a *Account) RenderError(err error) {
	fmt.Println(err)
	a.c.JSON(500, err)
}

// RenderOK implements port.AccountOutputPort
func (a *Account) RenderOK(c *gin.Context) {
	a.c.JSON(200, nil)
}

// 出力に関するアダプター
func NewAccountOutputport(c *gin.Context) port.AccountOutputPort {
	return &Account{
		c: c,
	}
}
