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

// CreateArticle Articleを作成する。Err or nilを返す
func (a *Article) CreateArticle(ctx *gin.Context) {
	err := a.ArticleRepo.CreateArticle(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(ctx)
}

// UpdateArticleByID ArticleRepositoryに登録されているUpdateArticleByIDを呼び出してArticleを更新してOutputPortに結果を渡す
func (a *Article) UpdateArticleByID(ctx *gin.Context) {
	err := a.ArticleRepo.UpdateArticleByID(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(ctx)
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

// GetArticlesByUserID 成功：Articles、失敗:エラーを返す
func (a *Article) GetArticlesByUserID(c *gin.Context) {
	articles, err := a.ArticleRepo.GetArticlesByUserID(c)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticles(articles)
}

// GetArticlesOrderByDate 成功：Articles、失敗エラーを返す
func (a *Article) GetArticlesOrderByDate(ctx *gin.Context) {
	articles, err := a.ArticleRepo.GetArticlesOrderByDate(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticles(articles)
}

// LikeArticle 成功：200、失敗エラーを返す
func (a *Article) LikeArticle(ctx *gin.Context) {
	err := a.ArticleRepo.LikeArticle(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(ctx)
}

// UnLikedArticle 成功：200、失敗エラーを返す
func (a *Article) UnLikedArticle(ctx *gin.Context) {
	err := a.ArticleRepo.UnLikedArticle(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(ctx)
}

// GetArticleByFacilityID 成功：Articles、失敗:エラーを返す
func (a *Article) GetArticleByFacilityID(ctx *gin.Context) {
	articles, err := a.ArticleRepo.GetArticleByFacilityID(ctx)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderArticles(articles)
}
