package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type User struct {
	OutputPort port.UserOutputPort
	UserRepo   port.UserRepository
}

// SignUp ユーザ新規登録機能
func (u *User) SignUp(c *gin.Context) {
	err := u.UserRepo.SignUp(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderOK()
}

// GetProfile repository ユーザログイン機能を呼び出す。結果をOutputportに渡す。
func (u User) GetProfile(c *gin.Context) {
	user, err := u.UserRepo.GetProfile(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderProfile(user)
}

// Follow 成功：200, 失敗：400
func (u User) Follow(c *gin.Context) {
	err := u.UserRepo.Follow(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderOK()
}

// Unfollow 成功：200, 失敗：400
func (u User) Unfollow(c *gin.Context) {
	err := u.UserRepo.Unfollow(c)
	if err != nil {
		u.OutputPort.RenderError(err)
		return
	}
	u.OutputPort.RenderOK()
}

func NewUserInport(o port.UserOutputPort, u port.UserRepository) port.UserInputPort {
	return &User{
		OutputPort: o,
		UserRepo:   u,
	}
}
