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

// GetProfile repositry ユーザログイン機能を呼び出す。結果をOutputportに渡す。
func (u User) GetProfile(c *gin.Context) {
	user, err := u.UserRepo.GetProfile(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderProfile(user)
	return
}
