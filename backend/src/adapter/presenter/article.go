package presenter

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"

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
func (a *Article) RenderArticle(article *ValueObject.ArticleVO) {
	a.c.JSON(http.StatusOK, article)
}

// RenderArticles はArticlesを返す
func (a *Article) RenderArticles(articles *[]ValueObject.ArticleVO) {
	a.c.JSON(http.StatusOK, articles)
}

// RenderError はErrorを返す
func (a *Article) RenderError(err error) {
	errCode, errMessage := toHTTPResponse(err)
	a.c.JSON(errCode, gin.H{"msg": errMessage})
	fmt.Printf("エラーコード：%d, メッセージ：%s", errCode, errMessage)
}

// RenderOK レスポンス200のみ返す
func (a *Article) RenderOK(c *gin.Context) {
	a.c.JSON(http.StatusOK, nil)
}
