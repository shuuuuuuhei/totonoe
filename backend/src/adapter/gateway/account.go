package gateway

import (
	"encoding/json"
	"fmt"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/adapter/gateway/common"
	"main.go/model/Domain"
	"main.go/usecase/port"
)

type Account struct {
	conn *gorm.DB
}

type accountParams struct {
	UserID string `json:"user_id,omitempty"`
}

// DeleteAccount アカウント情報を全て削除する
func (a *Account) DeleteAccount(ctx *gin.Context) error {
	conn := a.conn
	var params accountParams
	json.NewDecoder(ctx.Request.Body).Decode(&params)

	// ユーザ存在チェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}

	// トランザクション開始
	err := conn.Transaction(func(tx *gorm.DB) error {

		// 権限情報
		if err := tx.Debug().Where("user_id=?", params.UserID).Delete(&Domain.Authorization{}).Error; err != nil {
			return err
		}

		// フォロー情報
		if err := tx.Debug().Where("user_id=? or following_id=?", params.UserID, params.UserID).Delete(&Domain.UserRelationShip{}).Error; err != nil {
			return err
		}

		// 記事_コメント情報(ユーザーのコメント情報とユーザーが投稿した記事に紐づくコメント情報を削除)
		if err := tx.Debug().Where("user_id=?", params.UserID).Or("exists(select * from article where article.id = comment.article_id and article.user_id=?)", params.UserID).
			Delete(&Domain.Comment{}).Error; err != nil {
			return err
		}

		// 記事_いいね情報(ユーザーのいいね情報とユーザーが投稿した記事に紐づくいいね情報を削除)
		if err := tx.Debug().Where("user_id=?", params.UserID).Or("exists(select * from article where article.id = article_like.article_id and article.user_id=?)", params.UserID).
			Delete(&Domain.ArticleLike{}).Error; err != nil {
			return err
		}

		// 記事情報
		if err := tx.Debug().Where("user_id=?", params.UserID).Delete(&Domain.ArticleLike{}).Error; err != nil {
			return err
		}

		// ユーザー情報
		if err := tx.Debug().Where("id=?", params.UserID).Delete(&Domain.User{}).Error; err != nil {
			return err
		}

		return nil
	})
	if err != nil {
		return fmt.Errorf("アカウント削除に失敗しました。エラー：" + err.Error())
	}

	// アカウント削除に成功
	return nil
}

func NewAccountRepository(c *gorm.DB) port.AccountRepository {
	return &Account{
		conn: c,
	}
}
