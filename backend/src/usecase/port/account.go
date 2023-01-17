package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

// AccountOutputPort 出力インタフェース
type AccountInputPort interface {
	NewAccount(ctx *gin.Context)
	DeleteAccount(ctx *gin.Context)
	GetAccount(ctx *gin.Context)
}

// AccountOutputPort 出力インタフェース
type AccountOutputPort interface {
	RenderError(error)
	RenderOK(c *gin.Context)
	RenderAccountInfo(c *gin.Context, account *ValueObject.AccountVO)
}

// ArticleRepository ロジックインタフェース
type AccountRepository interface {
	NewAccount(ctx *gin.Context) error
	DeleteAccount(ctx *gin.Context) error
	GetAccount(ctx *gin.Context) (*ValueObject.AccountVO, error)
}
