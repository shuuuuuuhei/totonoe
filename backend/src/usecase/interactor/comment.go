package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Comment struct {
	Outputport port.CommentOutputPort
	Repository port.CommentRepository
}

// NewCommentInputport インストラクタ
func NewCommentInputport(o port.CommentOutputPort, r port.CommentRepository) port.CommentInputPort {
	return &Comment{
		Outputport: o,
		Repository: r,
	}
}

func (c Comment) CreateComment(ctx *gin.Context) {
	comment, err := c.Repository.CreateComment(ctx)

	if err != nil {
		c.Outputport.RenderErr(err)
	}
	c.Outputport.RenderComment(comment)
}

func (c Comment) GetAllCommentByArticleID(ctx *gin.Context) {
	comments, err := c.Repository.GetAllCommentsByArticleID(ctx)

	if err != nil {
		c.Outputport.RenderErr(err)
	}

	c.Outputport.RenderComments(comments)
}

func (c Comment) GetCommentsByArticleID(ctx *gin.Context) {
	comments, err := c.Repository.GetCommentsByArticleID(ctx)

	if err != nil {
		c.Outputport.RenderErr(err)
	}

	c.Outputport.RenderComments(comments)
}

func (c Comment) DeleteComment(ctx *gin.Context) {
	err := c.Repository.DeleteComment(ctx)

	if err != nil {
		c.Outputport.RenderErr(err)
	}

	c.Outputport.RenderOK()
}
