package presenter

import (
	"github.com/gin-gonic/gin"

	"main.go/model"
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
	u.c.JSON(500, err)
}

// RenderProfile 200 Userを返す
func (u *User) RenderProfile(user *model.Profile) {
	u.c.JSON(200, user)
}
