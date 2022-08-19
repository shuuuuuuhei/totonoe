package gateway

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"main.go/model/Domain"
	"main.go/model/ValueObject"

	"main.go/adapter/gateway/common"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"

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

type articleParams struct {
	UserID  string `json:"user_id"`
	Article Domain.Article
	SaunaID uint32 `json:"sauna_id"`
}

// GetArticleByID はDBからデータを取得
func (a *ArticleRepository) GetArticleByID(c *gin.Context) (*ValueObject.ArticleVO, error) {
	conn := a.conn
	article := ValueObject.ArticleVO{}
	articleID := c.Param("articleID")
	loginUserID := c.Request.Header.Get("User-ID")

	if err := common.CheckUserByID(loginUserID, conn); err != nil {
		return nil, err
	}

	if err := conn.Debug().Table("article").
		Select(`article.*,"user".name AS user_name, sauna.name AS sauna_name, count(likes_count.id) AS like_count,  case when liked.id is null  then false else true end AS is_liked, count(comment.id) AS comment_count`).
		Joins(`left join "user" on "user".id = article.user_id`).
		Joins("left join sauna on sauna.id = article.sauna_id").
		Joins("left join article_like likes_count on likes_count.article_id = article.id").
		Joins("left join article_like liked on liked.article_id = article.id AND liked.user_id=?", loginUserID).
		Joins("left join comment on comment.article_id = article.id").
		Where("article.id=?", articleID).
		Group(`article.id, "user".name, sauna.name, liked.id`).
		Scan(&article).Error; err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("User Not Found. ArticleID = %s", articleID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/GetUserByID")
	}
	return &article, nil
}

// GetArticlesByUserID ユーザIDから記事一覧を取得
func (a *ArticleRepository) GetArticlesByUserID(c *gin.Context) (*[]ValueObject.ArticleVO, error) {
	conn := a.conn

	articles := []ValueObject.ArticleVO{}

	userID := c.Param("userID")
	
	if err := common.CheckUserByID(userID, conn); err != nil {
		return nil, err
	}

	loginUserID := c.Request.Header.Get("User-ID")

	if err := common.CheckUserByID(loginUserID, conn); err != nil {
		return nil, err
	}

	if err := conn.Debug().Table("article").
		Select(`article.*,"user".name AS user_name, sauna.name AS sauna_name, count(likes_count.id) AS like_count,  case when liked.id is null  then false else true end AS is_liked, count(comment.id) AS comment_count`).
		Joins(`left join  "user" on "user".id = article.user_id`).
		Joins("left join sauna on sauna.id = article.sauna_id").
		Joins("left join article_like likes_count on likes_count.article_id = article.id").
		Joins("left join article_like liked on liked.article_id = article.id AND liked.user_id=?", loginUserID).
		Joins("left join comment on comment.article_id = article.id").
		Where("article.user_id = ?", userID).
		Group(`article.id, "user".name, sauna.name, liked.id`).
		Scan(&articles).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("記事が見つかりませんでした。)")
			return nil, nil
		}
	}
	return &articles, nil
}

// CreateArticle Articleを作成&登録
func (a *ArticleRepository) CreateArticle(c *gin.Context) error {
	conn := a.conn
	params := articleParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}
	// サウナ存在チェック
	if err := common.CheckSaunaByID(params.SaunaID, conn); err != nil {
		return err
	}

	article := params.Article
	article.UserID = params.UserID
	article.FacilityID = params.SaunaID

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
		return err
	}

	// 登録成功
	return nil
}

// GetArticlesOrderByDate 最新の記事取得
func (a *ArticleRepository) GetArticlesOrderByDate(ctx *gin.Context) (*[]ValueObject.ArticleVO, error) {
	conn := a.conn

	articles := []ValueObject.ArticleVO{}

	if err := conn.Debug().
		Table("article").
		Limit(10).
		Order("created_at DESC").
		Find(&articles).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("記事が見つかりませんでした。)")
			return nil, nil
		}
		return nil, err
	}
	return &articles, nil
}

// LikeArticle 記事にいいねを登録する
func (a *ArticleRepository) LikeArticle(c *gin.Context) error {
	conn := a.conn

	articleID := c.Param("articleID")
	params := articleParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	// 記事存在チェック
	if err := common.CheckArticleByID(articleID, conn); err != nil {
		return err
	}

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}
	newArticleLike := Domain.ArticleLike{
		UserID:    params.UserID,
		ArticleID: common.ConvertUInt(articleID),
	}

	if err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&newArticleLike).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("いいねが登録できませんでした：DBエラー")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/CreateArticle")
		}
		return nil
	}); err != nil {
		return err
	}

	return nil
}

// UnLikedArticle 記事のいいねを解除する
func (a *ArticleRepository) UnLikedArticle(c *gin.Context) error {
	conn := a.conn

	articleID := c.Param("articleID")
	params := articleParams{}
	json.NewDecoder(c.Request.Body).Decode(&params)

	// 記事存在チェック
	if err := common.CheckArticleByID(articleID, conn); err != nil {
		return err
	}

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}

	liked := Domain.ArticleLike{
		UserID:    params.UserID,
		ArticleID: common.ConvertUInt(articleID),
	}

	if err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Delete(&liked).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("いいねを解除できませんでした。：DBエラー")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/UnLikedArticle")
		}
		return nil
	}); err != nil {
		return err
	}

	return nil
}

// UpdateArticleByID update article by articleID
func (a *ArticleRepository) UpdateArticleByID(c *gin.Context) error {
	conn := a.conn
	article := newArticleFromForm(c)
	if err := conn.Model(&article).Where("id = ?", article.ID).Update("title", "content").Error; err != nil {
		if err == sql.ErrNoRows {
			return fmt.Errorf("can not update an article")
		}
		log.Println(err)
		return err
	}

	return nil
}

// DeleteArticleByID コンテキストを受け取り、IDからArticleを削除する
func (a *ArticleRepository) DeleteArticleByID(c *gin.Context) error {
	//conn := a.conn

	// result := conn.Where("id = ?", articleID).Delete(&ValueObject.ArticleVO{ID: })

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

// context.form からFormに入力された値を受け取る
func newArticleFromForm(c *gin.Context) *Domain.Article {
	title := c.PostForm("title")
	content := c.PostForm("content")

	return &Domain.Article{
		Content: content,
		Title:   title,
	}
}
