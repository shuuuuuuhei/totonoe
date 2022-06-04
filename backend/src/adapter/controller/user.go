package controller

import (
	"github.com/gin-gonic/gin"

	"gorm.io/gorm"
	"main.go/usecase/port"
)

// User 各ポートの宣言
type User struct {
	OutputFactory     func(c *gin.Context) port.UserOutputPort
	InputFactory      func(o port.UserOutputPort, u port.UserRepository) port.UserInputPort
	RepositoryFactory func(c *gorm.DB) port.UserRepository
	Conn              *gorm.DB
}

// Login ログイン処理を呼び出す
func (u *User) Login(c *gin.Context) {
	inputport := u.newInputport(c)
	inputport.Login(c)
}

// SignUp ユーザ登録処理を呼び出す
func (u *User) SignUp(c *gin.Context) {
	inputport := u.newInputport(c)
	inputport.SignUp(c)
}

func (u *User) newInputport(c *gin.Context) port.UserInputPort {
	outputport := u.OutputFactory(c)
	repository := u.RepositoryFactory(u.Conn)
	inpoutport := u.InputFactory(outputport, repository)
	return inpoutport
}
