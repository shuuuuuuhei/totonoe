package presenter

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Account struct {
	c *gin.Context
}

// RenderAccountInfo implements port.AccountOutputPort
func (a *Account) RenderAccountInfo(c *gin.Context, accountInfo *ValueObject.AccountVO) {
	a.c.JSON(http.StatusOK, accountInfo)
}

// RenderError implements port.AccountOutputPort
func (a *Account) RenderError(err error) {
	fmt.Println(err)
	a.c.JSON(toHTTPStatusCode(err), gin.H{"msg": err.Error()})
}

// RenderOK implements port.AccountOutputPort
func (a *Account) RenderOK(c *gin.Context) {
	a.c.JSON(http.StatusOK, nil)
}

// 出力に関するアダプター
func NewAccountOutputport(c *gin.Context) port.AccountOutputPort {
	return &Account{
		c: c,
	}
}
