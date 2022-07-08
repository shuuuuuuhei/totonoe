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
func (a *Article) GetArticleByID(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.GetArticleByID(c)
}

// CreateArticle portを組み立てinputport.CreateArticleを呼び出す
func (a *Article) CreateArticle(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.CreateArticle(c)
}

// UpdateArticleByID IDを取得してArticleを更新
func (a *Article) UpdateArticleByID(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.UpdateArticleByID(c)
}

// DeleteArticleByID IDを取得してArticleを削除
func (a *Article) DeleteArticleByID(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.DeleteArticleByID(c)
}

// GetArticlesByUserID ユーザIDから記事一覧を取得
func (a *Article) GetArticlesByUserID(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.GetArticlesByUserID(c)
}

func (a *Article) GetArticlesOrderByDate(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.GetArticlesOrderByDate(c)
}

func (a *Article) newInputport(c *gin.Context) port.ArticleInputPort {
	outputPort := a.OutputFactory(c)
	respository := a.RepositoryFactory(a.Conn)
	inputPort := a.InputFactory(outputPort, respository)

	return inputPort
}
