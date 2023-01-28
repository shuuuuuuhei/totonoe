package presenter

import (
	"fmt"
	"net/http"

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
	c.ctx.JSON(http.StatusOK, nil)
}

func (c Comment) RenderErr(err error) {
	errCode, errMessage := toHTTPResponse(err)
	c.ctx.JSON(errCode, gin.H{"msg": errMessage})
	fmt.Printf("エラーコード：%d, メッセージ：%s", errCode, errMessage)
}

func (c Comment) RenderComments(comments *[]ValueObject.CommentVO) {
	c.ctx.JSON(http.StatusOK, comments)
}

func (c Comment) RenderComment(comment *ValueObject.CommentVO) {
	c.ctx.JSON(http.StatusOK, comment)
}
