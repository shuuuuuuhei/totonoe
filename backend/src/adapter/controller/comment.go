package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

// Comment コメントコントローラー
type Comment struct {
	InputFactory      func(o port.CommentOutputPort, r port.CommentRepository) port.CommentInputPort
	OutputFactory     func(*gin.Context) port.CommentOutputPort
	RepositoryFactory func(*gorm.DB) port.CommentRepository
	Conn              *gorm.DB
}

// GetAllCommentsByArticleID 全コメント取得
func (c *Comment) GetAllCommentsByArticleID(ctx *gin.Context) {
	inputport := c.newInputPort(ctx)
	inputport.GetAllCommentByArticleID(ctx)
}

// CreateComment コメント作成
func (c *Comment) CreateComment(ctx *gin.Context) {
	inputport := c.newInputPort(ctx)
	inputport.CreateComment(ctx)
}

// DeleteComment コメント削除
func (c *Comment) DeleteComment(ctx *gin.Context) {
	inputport := c.newInputPort(ctx)
	inputport.DeleteComment(ctx)
}

// GetCommentsByArticleID コメント1件取得
func (c *Comment) GetCommentsByArticleID(ctx *gin.Context) {
	inputport := c.newInputPort(ctx)
	inputport.GetCommentsByArticleID(ctx)
}

func (c *Comment) newInputPort(ctx *gin.Context) port.CommentInputPort {
	output := c.OutputFactory(ctx)
	repository := c.RepositoryFactory(c.Conn)
	inputport := c.InputFactory(output, repository)
	return inputport
}
