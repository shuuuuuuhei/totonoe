package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

// Article 返り値とリポジトリ
type Article struct {
	OutputPort  port.ArticleOutputPort
	ArticleRepo port.ArticleRepository
}

//NewArticleInputPort  port作成
func NewArticleInputPort(outputPort port.ArticleOutputPort, articleRepository port.ArticleRepository) port.ArticleInputPort {
	return &Article{
		OutputPort:  outputPort,
		ArticleRepo: articleRepository,
	}
}

// GetArticleByID は ArticleRepositoryに宣言されているGetArticleByIDを呼び出しArticleを受け取りOutputPortに結果を渡す
func (a *Article) GetArticleByID(ctx *gin.Context) {
	article, err := a.ArticleRepo.GetArticleByID(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticle(article)
}

// CreateArticle Articlを作成する。Err or nilを返す
func (a *Article) CreateArticle(ctx *gin.Context) {
	article, err := a.ArticleRepo.CreateArticle(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticle(article)
	return
}

// UpdateArticleByID ArticleRepositoryに登録されているUpdateArticleByIDを呼び出してArticleを更新してOutputPortに結果を渡す
func (a *Article) UpdateArticleByID(ctx *gin.Context) {
	article, err := a.ArticleRepo.UpdateArticleByID(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticle(article)
}

// DeleteArticleByID 成功：200、失敗：エラーを返す
func (a *Article) DeleteArticleByID(c *gin.Context) {
	err := a.ArticleRepo.DeleteArticleByID(c)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(c)
}
