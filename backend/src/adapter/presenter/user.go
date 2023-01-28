package presenter

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"

	"main.go/usecase/port"
)

type User struct {
	c *gin.Context
}

func NewUserOutputPort(c *gin.Context) port.UserOutputPort {
	return &User{
		c: c,
	}
}

// RenderError 500 エラーを返す
func (u *User) RenderError(err error) {
	errCode, errMessage := toHTTPResponse(err)
	u.c.JSON(errCode, gin.H{"msg": errMessage})
	fmt.Printf("エラーコード：%d, メッセージ：%s", errCode, errMessage)
}

// RenderOK 200 のみ返す
func (u *User) RenderOK() {
	u.c.JSON(http.StatusOK, nil)
}

// RenderProfile 200 Userを返す
func (u *User) RenderProfile(user *ValueObject.ProfileVO) {
	u.c.JSON(http.StatusOK, user)
}
