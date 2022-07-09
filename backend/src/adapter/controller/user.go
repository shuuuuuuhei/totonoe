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

// GetProfile Profileを取得する
func (u *User) GetProfile(c *gin.Context) {
	inputport := u.newInputport(c)
	inputport.GetProfile(c)
}

// Follow ユーザフォロー機能
func (u *User) Follow(c *gin.Context) {
	inputport := u.newInputport(c)
	inputport.Follow(c)
}

// Unfollow ユーザフォロー機能
func (u *User) Unfollow(c *gin.Context) {
	inputport := u.newInputport(c)
	inputport.Unfollow(c)
}

func (u *User) newInputport(c *gin.Context) port.UserInputPort {
	outputport := u.OutputFactory(c)
	repository := u.RepositoryFactory(u.Conn)
	inpoutport := u.InputFactory(outputport, repository)
	return inpoutport
}
