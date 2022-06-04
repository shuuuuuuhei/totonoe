package port

import (
	"github.com/gin-gonic/gin"
	"main.go/domain/model"
)

// UserInputPort 入力部
type UserInputPort interface {
	Login(c *gin.Context)
	SignUp(c *gin.Context)
}

// UserOutputPort ResponseWriter
type UserOutputPort interface {
	RenderError(error)
	RenderUser(*model.User)
}

// UserRepository 実装部
type UserRepository interface {
	Login(c *gin.Context) (*model.User, error)
	SignUp(c *gin.Context) (*model.User, error)
}
