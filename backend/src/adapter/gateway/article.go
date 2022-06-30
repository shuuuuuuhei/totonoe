package gateway

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model"
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

type params struct {
	UserID  string `json:"user_id"`
	Article model.Article
}

// GetArticleByID はDBからデータを取得
func (a *ArticleRepository) GetArticleByID(c *gin.Context) (*model.Article, error) {
	conn := a.GetDBConn()
	article := model.Article{}
	articleID := c.PostForm("articleID")

	if err := conn.First(&article).Error; err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("User Not Found. ArticleID = %s", articleID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/GetUserByID")
	}
	return &article, nil
}

// CreateArticle Articleを作成&登録
func (a *ArticleRepository) CreateArticle(c *gin.Context) (*model.Article, error) {
	conn := a.GetDBConn()
	params := params{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	// ユーザ存在チェック
	err := CheckUserByID(params.UserID, conn)
	if err != nil {
		return nil, err
	}

	article := params.Article
	article.UserID = params.UserID

	err = conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&article).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("Can't create Article")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/CreateArticle")
		}
		return nil
	})

	if err != nil {
		return nil, err
	}

	// 登録成功
	return &article, nil
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
	//conn := a.GetDBConn()

	// result := conn.Where("id = ?", articleID).Delete(&model.Article{ID: })

	// // エラー
	// if result.Error != nil {
	// 	return result.Error
	// }

	// // 削除レコードなし
	// if result.RowsAffected < 1 {
	// 	return fmt.Errorf("削除対象の記事が見つかりませんでした。ID = %s", articleID)
	// }

	// 正常時
	return nil
}

// GetDBConn はDB接続を確立
func (a *ArticleRepository) GetDBConn() *gorm.DB {
	return a.conn
}

// context.form からFormに入力された値を受け取る
func newArticleFromForm(c *gin.Context) *model.Article {
	title := c.PostForm("title")
	content := c.PostForm("content")

	return &model.Article{
		Content: content,
		Title:   title,
	}
}

// CheckUserByID ユーザ存在チェック
func CheckUserByID(userID string, conn *gorm.DB) error {
	user := model.User{}

	if err := conn.Where("id = ?", userID).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("ユーザが見つかりませんでした。ID = %s", userID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/gateway/CreateArticle")
	}
	return nil
}
