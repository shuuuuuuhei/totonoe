package port

import (
	"github.com/gin-gonic/gin"

	"main.go/domain/model"
)

// ArticleInputPort 入力インタフェース
type ArticleInputPort interface {
	GetArticleByID(ctx *gin.Context, articleID string)
	CreateArticle(ctx *gin.Context)
	UpdateArticleByID(ctx *gin.Context)
}

// ArticleOutputPort 出力インタフェース
type ArticleOutputPort interface {
	RenderArticle(*model.Article)
	RenderError(error)
}

// ArticleRepository ロジックインタフェース
type ArticleRepository interface {
	GetArticleByID(ctx *gin.Context, articleID string) (*model.Article, error)
	CreateArticle(ctx *gin.Context) (string, error)
	UpdateArticleByID(ctx *gin.Context) (*model.Article, error)
}