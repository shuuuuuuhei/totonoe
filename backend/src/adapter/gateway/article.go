package gateway

import (
	"context"
	"database/sql"
	"errors"
	"fmt"
	"log"

	"gorm.io/gorm"
	"main.go/domain/model"
	"main.go/usecase/port"
)

// ArticleRepository 型宣言
type ArticleRepository struct {
	conn *gorm.DB
}

// NewArticleRepository はArticleRepositoryを生成
func NewArticleRepository(conn *gorm.DB) port.ArticleRepository {
	return &ArticleRepository{
		conn: conn,
	}
}

// GetArticleByID はDBからデータを取得
func (a *ArticleRepository) GetArticleByID(ctx context.Context, articleID string) (*model.Article, error) {
	conn := a.GetDBConn()
	article := model.Article{}

	conn.First(&article)

	if err := conn.First(&article).Error; err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("User Not Found. ArticleID = %s", articleID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/GetUserByID")
	}
	return &article, nil
}

// GetDBConn はDB接続を確立
func (a *ArticleRepository) GetDBConn() *gorm.DB {
	return a.conn
}
