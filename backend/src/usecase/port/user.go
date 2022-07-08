package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model"
)

// UserInputPort 入力部
type UserInputPort interface {
	GetProfile(c *gin.Context)
	Follow(c *gin.Context)
	Unfollow(c *gin.Context)
}

// UserOutputPort ResponseWriter
type UserOutputPort interface {
	RenderOK()
	RenderError(error)
	RenderProfile(*model.Profile)
}

// UserRepository 実装部
type UserRepository interface {
	GetProfile(c *gin.Context) (*model.Profile, error)
	Follow(c *gin.Context) error
	Unfollow(c *gin.Context) error
	SignUp(c *gin.Context) (*model.User, error)
}
