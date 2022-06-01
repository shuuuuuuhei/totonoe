package port

import (
	"main.go/domain/model"
	"context"
)

type ArticleInputPort interface {
	GetArticleByID(ctx context.Context, articleID string)
}

type ArticleOutputPort interface {
	Render(*model.Article)
	RenderError(error)
}

type ArticleRepository interface {
	GetArticleByID(ctx context.Context, articleID string) (*model.Article, error)
}