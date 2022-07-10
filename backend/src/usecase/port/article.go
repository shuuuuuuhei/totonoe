package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model"
)

// ArticleInputPort 入力インタフェース
type ArticleInputPort interface {
	GetArticleByID(ctx *gin.Context)
	CreateArticle(ctx *gin.Context)
	UpdateArticleByID(ctx *gin.Context)
	DeleteArticleByID(ctx *gin.Context)
	GetArticlesByUserID(ctx *gin.Context)
	GetArticlesOrderByDate(ctx *gin.Context)
}

// ArticleOutputPort 出力インタフェース
type ArticleOutputPort interface {
	RenderArticle(*model.Article)
	RenderArticles(*[]model.Article)
	RenderError(error)
	RenderOK(c *gin.Context)
}

// ArticleRepository ロジックインタフェース
type ArticleRepository interface {
	GetArticleByID(ctx *gin.Context) (*model.Article, error)
	CreateArticle(ctx *gin.Context) (*model.Article, error)
	UpdateArticleByID(ctx *gin.Context) (*model.Article, error)
	DeleteArticleByID(ctx *gin.Context) error
	GetArticlesByUserID(ctx *gin.Context) (*[]model.Article, error)
	GetArticlesOrderByDate(ctx *gin.Context) (*[]model.Article, error)
}