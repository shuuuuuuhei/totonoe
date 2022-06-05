package gateway

import (
	"database/sql"
	"errors"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
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
func (a *ArticleRepository) GetArticleByID(ctx *gin.Context, articleID string) (*model.Article, error) {
	conn := a.GetDBConn()
	article := model.Article{}

	if err := conn.First(&article, articleID).Error; err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("User Not Found. ArticleID = %s", articleID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/GetUserByID")
	}
	return &article, nil
}

// CreateArticle Articleを作成&登録
func (a *ArticleRepository) CreateArticle(ctx *gin.Context) (string, error) {
	conn := a.GetDBConn()
	article := model.Article{
		Title:   "test",
		Content: "This is test",
	}
	conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&article).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("Can't create Article")
			}
			log.Println(err)
			return err
		}
		return nil
	})
	return "ok", nil
}

// UpdateArticleByID update article by articleID
func (a *ArticleRepository) UpdateArticleByID(c *gin.Context) (*model.Article, error) {
	conn := a.GetDBConn()
	article := newArticleFromForm(c)
	if err := conn.Model(&article).Where("id = ?", article.ID).Update("title", "content").Error; err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("can not update an article")
		}
		log.Println(err)
		return nil, err
	}

	return article, nil
}

// DeleteArticleByID コンテキストを受け取り、IDからArticleを削除する
func (a *ArticleRepository) DeleteArticleByID(c *gin.Context) error {
	conn := a.GetDBConn()
	articleID := c.Param("articleID")

	result := conn.Where("id = ?", articleID).Delete(&model.Article{ID: articleID})

	// エラー
	if result.Error != nil {
		return result.Error
	}

	// 削除レコードなし
	if result.RowsAffected < 1 {
		return fmt.Errorf("削除対象の記事が見つかりませんでした。ID = %s", articleID)
	}

	// 正常時
	return nil
}

// GetDBConn はDB接続を確立
func (a *ArticleRepository) GetDBConn() *gorm.DB {
	return a.conn
}

// context.form からFormに入力された値を受け取る
func newArticleFromForm(c *gin.Context) *model.Article {
	id := c.Param("artileID")
	title := c.PostForm("title")
	content := c.PostForm("content")

	return &model.Article{
		ID:      id,
		Content: content,
		Title:   title,
	}
}
