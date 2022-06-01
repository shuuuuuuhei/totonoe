package controller

import (
	"gorm.io/gorm"
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
	"net/http"
)

type Article struct {
	OutputFactory func(w http.ResponseWriter) port.ArticleOutputPort
	InputFactory func(o port.ArticleOutputPort, a port.ArticleRepository) port.ArticleInputPort
	RepositoryFactory func(c *gorm.DB) port.ArticleRepository
	Conn *gorm.DB
}

// GetArticleByID は，httpを受け取り，portを組み立てて，inputPort.GetArticleByIDを呼び出します．
// 入力に関するアダプター
func (article *Article) GetArticleByID(c *gin.Context) {
	articlID := c.Param("articleID")
	outputPort := article.OutputFactory(c.Writer)
	respository := article.RepositoryFactory(article.Conn)
	inputPort := article.InputFactory(outputPort, respository)
	inputPort.GetArticleByID(c, articlID)
}