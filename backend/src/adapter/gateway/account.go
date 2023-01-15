package gateway

import (
	"database/sql"
	"encoding/json"
	"errors"
	"fmt"
	"time"

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
	UserID string `json:"user_id"`
	Name   string `json:"name"`
	Email  string `json:"email"`
}

// NewAccount アカウント登録処理
func (a *Account) NewAccount(ctx *gin.Context) error {
	conn := a.conn
	var params accountParams
	json.NewDecoder(ctx.Request.Body).Decode(&params)

	// トランザクション開始
	err := conn.Transaction(func(tx *gorm.DB) error {

		// ユーザー情報登録処理
		if err := newUser(params, tx); err != nil {
			return err
		}

		// 権限情報登録処理
		if err := newAuthorization(params, tx); err != nil {
			return err
		}

		return nil
	})
	if err != nil {
		return fmt.Errorf("アカウント作成に失敗しました。エラー：" + err.Error())
	}

	// アカウント作成に成功
	return nil
}

// DeleteAccount アカウント情報削除処理
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
		if err := tx.Debug().Where("user_id=?", params.UserID).
			Delete(&Domain.Article{}).Error; err != nil {
			return err
		}

		// ユーザー情報(削除フラグと削除日を更新して論理削除する)
		if err := tx.Debug().Where("id=?", params.UserID).Updates(Domain.User{DeleteFlg: 1, DeletedAt: sql.NullTime{Time: time.Now(), Valid: true}}).Error; err != nil {
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

// 権限情報登録処理
func newAuthorization(params accountParams, tx *gorm.DB) error {

	// 権限初期データ作成
	newAuthorization := Domain.Authorization{
		UserID: params.UserID,
		AuthKB: GENERAL_AUTH_KB,
		RequestDate: sql.NullTime{
			Time:  time.Time{},
			Valid: false,
		},
		AppliedDate: sql.NullTime{
			Time:  time.Time{},
			Valid: false,
		},
	}

	// 権限登録処理
	if err := tx.Debug().Create(&newAuthorization).Error; err != nil {
		return fmt.Errorf("権限情報登録に失敗しました。ユーザーID：" + newAuthorization.UserID)
	}

	// 初期権限登録成功
	return nil
}

// ユーザー登録処理
func newUser(params accountParams, tx *gorm.DB) error {

	// 存在フラグ
	var isExists bool

	// リクエスト情報から登録ユーザを作成
	user, err := newUserByParams(params)

	if err != nil {
		return fmt.Errorf("パラメータに不備がありました。パラメータ：%w", err)
	}

	// ユーザが登録済かどうかチェックを行う
	if err = tx.Table("user").Select("count(*) > 0").Where("id=?", user.ID).Find(&isExists).Error; err != nil {
		return err
	}

	if isExists {
		return fmt.Errorf("ユーザIDが登録済みです。%s", user.ID)
	}

	// ユーザ登録
	if err = tx.Debug().Create(&user).Error; err != nil {
		return err
	}

	//　ユーザー情報登録成功
	return nil
}

// ユーザー登録パラメーター作成
func newUserByParams(p accountParams) (*Domain.User, error) {

	//params check
	err := checkParams(p)

	if err != nil {
		return nil, err
	}

	return &Domain.User{
		ID:    p.UserID,
		Name:  p.Name,
		Email: p.Email,
	}, nil
}

// パラメータ存在チェック
func checkParams(p accountParams) error {

	if p.UserID == "" {
		return errors.New("ID(パラメータ)がありません")
	}
	if p.Name == "" {
		return errors.New("Name(パラメータ)がありません")
	}
	if p.Email == "" {
		return errors.New("Email(パラメータ)がありません")
	}

	return nil
}
