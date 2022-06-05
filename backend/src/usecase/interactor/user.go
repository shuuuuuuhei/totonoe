package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type User struct {
	OutputPort port.UserOutputPort
	UserRepo   port.UserRepository
}

func NewUserInport(o port.UserOutputPort, u port.UserRepository) port.UserInputPort {
	return &User{
		OutputPort: o,
		UserRepo:   u,
	}
}

// Login repositry ユーザログイン機能を呼び出す。結果をOutputportに渡す。
func (u User) Login(c *gin.Context) {
	user, err := u.UserRepo.Login(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderUser(user)
	return
}

// SignUp サインアップ機能を呼びだす。
func (u User) SignUp(c *gin.Context) {
	user, err := u.UserRepo.SignUp(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderUser(user)
	return
}