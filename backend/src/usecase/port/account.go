package port

import (
	"github.com/gin-gonic/gin"
)

// AccountOutputPort 出力インタフェース
type AccountInputPort interface {
	DeleteAccount(ctx *gin.Context)
}

// AccountOutputPort 出力インタフェース
type AccountOutputPort interface {
	RenderError(error)
	RenderOK(c *gin.Context)
}

// ArticleRepository ロジックインタフェース
type AccountRepository interface {
	DeleteAccount(ctx *gin.Context) error
}
