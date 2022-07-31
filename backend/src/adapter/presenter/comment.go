package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Comment struct {
	ctx *gin.Context
}

// NewCommentOutputPort NewCommentPresenter
func NewCommentOutputPort(c *gin.Context) port.CommentOutputPort {
	return &Comment{
		ctx: c,
	}
}

func (c Comment) RenderOK() {
	c.ctx.JSON(200, nil)
}

func (c Comment) RenderErr(err error) {
	c.ctx.JSON(500, err)
}

func (c Comment) RenderComments(comments *[]ValueObject.CommentVO) {
	c.ctx.JSON(200, comments)
}

func (c Comment) RenderComment(comment *ValueObject.CommentVO) {
	c.ctx.JSON(200, comment)
}
