package port

import (
	"github.com/gin-gonic/gin"
	"main.go/domain/model"
)

// UserInputPort 入力部
type UserInputPort interface {
	GetProfile(c *gin.Context)
}

// UserOutputPort ResponseWriter
type UserOutputPort interface {
	RenderError(error)
	RenderProfile(*model.User)
}

// UserRepository 実装部
type UserRepository interface {
	GetProfile(c *gin.Context) (*model.Profile, error)
	SignUp(c *gin.Context) (*model.User, error)
}
