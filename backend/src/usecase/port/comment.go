package port

import (
	"github.com/gin-gonic/gin"

	"main.go/model/ValueObject"
)

// CommentInputPort コメント入力部
type CommentInputPort interface {
	CreateComment(ctx *gin.Context)
	GetAllCommentByArticleID(ctx *gin.Context)
	GetCommentsByArticleID(ctx *gin.Context)
	DeleteComment(ctx *gin.Context)
}

// CommentOutputPort コメント出力部
type CommentOutputPort interface {
	RenderOK()
	RenderErr(err error)
	RenderComments(comment *[]ValueObject.CommentVO)
	RenderComment(comment *ValueObject.CommentVO)
}

// CommentRepository コメントリポジトリ部
type CommentRepository interface {
	GetAllCommentsByArticleID(ctx *gin.Context) (*[]ValueObject.CommentVO, error)
	GetCommentsByArticleID(ctx *gin.Context) (*[]ValueObject.CommentVO, error)
	CreateComment(ctx *gin.Context) (*ValueObject.CommentVO, error)
	DeleteComment(ctx *gin.Context) error
}
