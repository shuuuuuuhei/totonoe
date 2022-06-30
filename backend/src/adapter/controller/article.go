package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

// Article ArticleControllerの型宣言
type Article struct {
	OutputFactory     func(c *gin.Context) port.ArticleOutputPort
	InputFactory      func(o port.ArticleOutputPort, a port.ArticleRepository) port.ArticleInputPort
	RepositoryFactory func(c *gorm.DB) port.ArticleRepository
	Conn              *gorm.DB
}

// GetArticleByID は，httpを受け取り，portを組み立てて，inputPort.GetArticleByIDを呼び出す
// 入力に関するアダプター
func (article *Article) GetArticleByID(c *gin.Context) {
	inputPort := article.newInputport(c)
	inputPort.GetArticleByID(c)
}

// CreateArticle portを組み立てinputport.CreateArticleを呼び出す
func (article *Article) CreateArticle(c *gin.Context) {
	inputPort := article.newInputport(c)
	inputPort.CreateArticle(c)
}

// UpdateArticleByID IDを取得してArticleを更新
func (article *Article) UpdateArticleByID(c *gin.Context) {
	inputPort := article.newInputport(c)
	inputPort.UpdateArticleByID(c)
}

// DeleteArticleByID IDを取得してArticleを削除
func (article *Article) DeleteArticleByID(c *gin.Context) {
	inputPort := article.newInputport(c)
	inputPort.DeleteArticleByID(c)
}

func 

func (article *Article) newInputport(c *gin.Context) port.ArticleInputPort {
	outputPort := article.OutputFactory(c)
	respository := article.RepositoryFactory(article.Conn)
	inputPort := article.InputFactory(outputPort, respository)

	return inputPort
}
