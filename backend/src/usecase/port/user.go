package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

// UserInputPort 入力部
type UserInputPort interface {
	GetProfile(c *gin.Context)
	Follow(c *gin.Context)
	Unfollow(c *gin.Context)
	UpdateProfile(c *gin.Context)
}

// UserOutputPort ResponseWriter
type UserOutputPort interface {
	RenderOK()
	RenderError(error)
	RenderProfile(*ValueObject.ProfileVO)
}

// UserRepository 実装部
type UserRepository interface {
	GetProfile(c *gin.Context) (*ValueObject.ProfileVO, error)
	Follow(c *gin.Context) error
	Unfollow(c *gin.Context) error
	UpdateProfile(c *gin.Context) error
}
