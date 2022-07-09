package gateway

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"log"

	"main.go/adapter/gateway/common"

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
	SaunaID uint32 `json:"sauna_id"`
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

// GetArticlesByUserID ユーザIDから記事一覧を取得
func (a *ArticleRepository) GetArticlesByUserID(c *gin.Context) (*[]model.Article, error) {
	conn := a.GetDBConn()

	articles := []model.Article{}
	userID := c.Param("userID")

	if err := common.CheckUserByID(userID, conn); err != nil {
		return nil, err
	}

	if err := conn.Debug().Table("article").
		Select(`article.*,"user".name AS user_name, sauna.name AS sauna_name, count(article_like.id) AS like_count, count(comment.id) AS comment_count`).
		Joins(`left join  "user" on "user".id = article.user_id`).
		Joins("left join sauna on sauna.id = article.sauna_id").
		Joins("left join article_like on article_like.article_id = article.id").
		Joins("left join comment on comment.article_id = article.id").
		Where("article.user_id = ?", userID).Group(`article.id, "user".name, sauna.name`).
		Scan(&articles).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("記事が見つかりませんでした。)")
			return nil, nil
		}
		return nil, err
	}
	return &articles, nil
}

// CreateArticle Articleを作成&登録
func (a *ArticleRepository) CreateArticle(c *gin.Context) (*model.Article, error) {
	conn := a.GetDBConn()
	params := params{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return nil, err
	}

	// サウナ存在チェック
	if err := common.CheckSaunaByID(params.SaunaID, conn); err != nil {
		return nil, err
	}

	article := params.Article
	article.UserID = params.UserID
	article.SaunaID = params.SaunaID

	err := conn.Transaction(func(tx *gorm.DB) error {
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

// GetArticlesOrderByDate 最新の記事取得
func (a *ArticleRepository) GetArticlesOrderByDate(ctx *gin.Context) (*[]model.Article, error) {
	conn := a.GetDBConn()

	articles := []model.Article{}

	if err := conn.Debug().Limit(10).Order("created_at DESC").Find(&articles).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("記事が見つかりませんでした。)")
			return nil, nil
		}
		return nil, err
	}
	return &articles, nil
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
