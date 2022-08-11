package gateway

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/pkg/errors"
	"gorm.io/gorm"
	"log"
	"main.go/adapter/gateway/common"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

// Comment CommentRepository
type Comment struct {
	conn *gorm.DB
}

type CommentParams struct {
	ID        string
	UserID    string `json:"user_id,omitempty"`
	Content   string `json:"content,omitempty"`
	ArticleID string `json:"article_id,omitempty"`
}

// &NewCommentRepository NewCommentRepository
func NewCommentRepository(c *gorm.DB) port.CommentRepository {
	return &Comment{
		conn: c,
	}
}

func (c Comment) GetAllCommentsByArticleID(ctx *gin.Context) (*[]ValueObject.CommentVO, error) {
	conn := c.conn

	articleID := ctx.Param("articleID")

	// 記事存在チェック
	if err := common.CheckArticleByID(articleID, conn); err != nil {
		return nil, err
	}

	comments := []ValueObject.CommentVO{}

	if err := conn.Debug().
		Table("comment").
		Select(`comment.*, "user".name AS "user_name"`).
		Joins(`left join "user" on "user".id = comment.user_id`).
		Where("article_id=?", articleID).
		Scan(&comments).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("コメントが見つかりませんでした。)")
			return nil, nil
		}
		return nil, err
	}

	return &comments, nil
}

// 使うかわからん
func (c Comment) GetCommentsByArticleID(ctx *gin.Context) (*[]ValueObject.CommentVO, error) {
	conn := c.conn

	articleID := ctx.Param("articleID")

	if err := common.CheckArticleByID(articleID, conn); err != nil {
		return nil, err
	}

	return nil, nil
}

func (c Comment) CreateComment(ctx *gin.Context) (*ValueObject.CommentVO, error) {
	conn := c.conn

	params := CommentParams{}
	json.NewDecoder(ctx.Request.Body).Decode(&params)
	params.ArticleID = ctx.Param("articleID")
	if err := common.CheckArticleByID(params.ArticleID, conn); err != nil {
		return nil, err
	}

	comment := Domain.Comment{
		ArticleID: common.ConvertUInt(params.ArticleID),
		UserID:    params.UserID,
		Content:   params.Content,
	}

	err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&comment).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("Can't create Comment")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/CreateComment")
		}
		return nil
	})

	if err != nil {
		return nil, err
	}

	var newComment ValueObject.CommentVO
	if err := conn.Debug().
		Table("comment").
		Select(`comment.*, "user".name AS "user_name"`).
		Joins(`left join "user" on "user".id = comment.user_id`).
		Where("comment.id=?", comment.ID).
		Scan(&newComment).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			log.Println("コメントが見つかりませんでした。)")
			return nil, err
		}
		return nil, err
	}

	return &newComment, nil
}

func (c Comment) DeleteComment(ctx *gin.Context) error {
	conn := c.conn

	params := CommentParams{}
	json.NewDecoder(ctx.Request.Body).Decode(&params)

	// コメント存在チェック
	if err := common.CheckCommentByID(params.ID, conn); err != nil {
		return err
	}

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}

	err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Where("id = ? AND user_id = ?", params.ID, params.UserID).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("Can't delete Comment")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/DeleteComment")
		}
		return nil
	})

	if err != nil {
		return err
	}

	return nil
}
