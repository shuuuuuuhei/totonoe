package repository

import (
	"main.go/domain/model"
)

// ArticleRepository model interface
type ArticleRepository interface {
	Create(artcile *model.Article) (*model.Article, error)
	FindByID(id int) (*model.Article, error)
	Update(article *model.Article) (*model.Article, error)
	Delete(article *model.Article) error
}