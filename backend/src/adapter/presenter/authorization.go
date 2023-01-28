package presenter

import (
	"fmt"
	"net/http"

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
	a.c.JSON(http.StatusOK, appliedAuthorizationList)
}

// RenderApplyingAuthorizationList implements port.AuthorizationOutputPort
func (a *Authorization) RenderApplyingAuthorizationList(applyingAuthorizationList *[]ValueObject.ApplyingAuthorization) {
	a.c.JSON(http.StatusOK, applyingAuthorizationList)
}

// RenderAuthorization implements port.AuthorizationOutputPort
func (a *Authorization) RenderAuthorization(authorization *Domain.Authorization) {
	a.c.JSON(http.StatusOK, authorization)
}

// RenderError エラーによってコードを変更する
func (a *Authorization) RenderError(err error) {
	errCode, errMessage := toHTTPResponse(err)
	a.c.JSON(errCode, gin.H{"msg": errMessage})
	fmt.Printf("エラーコード：%d, メッセージ：%s", errCode, errMessage)
}

// RenderOK implements port.AuthorizationOutputPort
func (a *Authorization) RenderOK() {
	a.c.JSON(http.StatusOK, nil)
}

func NewAuthorizationOutputPort(conn *gin.Context) port.AuthorizationOutputPort {
	return &Authorization{
		c: conn,
	}
}
