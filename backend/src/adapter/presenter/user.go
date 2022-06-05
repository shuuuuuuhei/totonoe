package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/domain/model"

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

// RenderUser 200 Userを返す
func (u *User) RenderUser(user *model.User) {
	u.c.JSON(200, user)
}
