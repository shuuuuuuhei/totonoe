package presenter

import (
	"github.com/gin-gonic/gin"

	"main.go/model"
	"main.go/usecase/port"
)

// Article は型宣言
type Article struct {
	c *gin.Context
}

// NewArticleOutputport output portを生成
// usercase.UserOutputPortを実装している
// 出力に関するアダプター
func NewArticleOutputport(c *gin.Context) port.ArticleOutputPort {
	return &Article{
		c: c,
	}
}

// RenderArticle はArticleを返す
func (a *Article) RenderArticle(article *model.Article) {
	a.c.JSON(200, article)
}

// RenderArticles はArticlesを返す
func (a *Article) RenderArticles(articles *[]model.Article) {
	a.c.JSON(200, articles)
}

// RenderError はErrorを返す
func (a *Article) RenderError(err error) {
	a.c.JSON(500, err)
}

// RenderOK レスポンス200のみ返す
func (a *Article) RenderOK(c *gin.Context) {
	a.c.JSON(200, nil)
}
