package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

// ArticleInputPort 入力インタフェース
type ArticleInputPort interface {
	GetArticleByID(ctx *gin.Context)
	CreateArticle(ctx *gin.Context)
	UpdateArticleByID(ctx *gin.Context)
	DeleteArticleByID(ctx *gin.Context)
	GetArticlesByUserID(ctx *gin.Context)
	GetArticlesOrderByDate(ctx *gin.Context)
	LikeArticle(ctx *gin.Context)
	UnLikedArticle(ctx *gin.Context)
	GetArticleByFacilityID(ctx *gin.Context)
}

// ArticleOutputPort 出力インタフェース
type ArticleOutputPort interface {
	RenderArticle(*ValueObject.ArticleVO)
	RenderArticles(*[]ValueObject.ArticleVO)
	RenderError(error)
	RenderOK(c *gin.Context)
}

// ArticleRepository ロジックインタフェース
type ArticleRepository interface {
	GetArticleByID(ctx *gin.Context) (*ValueObject.ArticleVO, error)
	CreateArticle(ctx *gin.Context) error
	UpdateArticleByID(ctx *gin.Context) error
	DeleteArticleByID(ctx *gin.Context) error
	GetArticlesByUserID(ctx *gin.Context) (*[]ValueObject.ArticleVO, error)
	GetArticlesOrderByDate(ctx *gin.Context) (*[]ValueObject.ArticleVO, error)
	LikeArticle(ctx *gin.Context) error
	UnLikedArticle(ctx *gin.Context) error
	GetArticleByFacilityID(ctx *gin.Context) (*[]ValueObject.ArticleVO, error)
}
