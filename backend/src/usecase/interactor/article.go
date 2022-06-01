package interactor

import (
	"main.go/usecase/port"
	"context"
)

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

// GetArticleByID は ArticleRepositoryに宣言されているGetArticleByIDを呼び出し、その結果を
func (a *Article) GetArticleByID(ctx context.Context, articleID string) {
	article, err := a.ArticleRepo.GetArticleByID(ctx, articleID)
	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.Render(article)
}