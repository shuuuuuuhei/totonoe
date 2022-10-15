package gateway

import (
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

type Authorization struct {
	conn *gorm.DB
}

type authorizationParams struct {
	userID string
	authKB string
}

type certificationParams struct {
	userID      string
	authorizeID string
}

const (
	/*
		申請状態
	*/

	// 申請中
	INITIAL_AUTH_STATE = "1"

	// 権限承認済
	AUTHORIZED_STATE = "2"

	// 申請却下
	UNAUTHORIZE_STATE = "3"

	/*
		Auth区分値
	*/

	// 管理者
	AUTH_KB = "999"
)

// ApplySubmitFacilityAuth 施設登録権限の申請を登録する
func (a *Authorization) ApplySubmitFacilityAuth(c *gin.Context) error {

	conn := a.conn

	params := authorizationParams{}

	//　パラメータ取得
	json.NewDecoder(c.Request.Body).Decode(&params)

	// パラメータチェック
	if err := checkAuthParams(conn, params); err != nil {
		return err
	}

	// 権限申請データ作成
	// トランザクション開始
	err := conn.Debug().Transaction(func(tx *gorm.DB) error {

		// ユーザ権限テーブル項目
		authorization := Domain.Authorization{
			UserID:         params.userID,
			AuthKB:         params.authKB,
			RequestStateKB: INITIAL_AUTH_STATE,
			RequestDate:    time.Now(),
		}

		// ユーザ権限テーブル新規登録
		if err := tx.Debug().Create(&authorization).Error; err != nil {
			return err
		}

		// 申請者にメールを送信する。
		if err := sendMailOfApplied(params.userID, tx); err != nil {
			return err
		}

		// 管理者にメールを送信する。
		if err := sendMailToAdministrator(authorization, tx); err != nil {
			return err
		}
		return nil
	})

	if err != nil {
		return err
	}

	// 成功 トランザクションコミット
	return nil
}

// 管理者に申請情報を通知する
func sendMailToAdministrator(authorization Domain.Authorization, conn *gorm.DB) error {

	return nil
}

// ユーザIDからメールアドレスを取得して申請完了メールを送信する
func sendMailOfApplied(userID string, conn *gorm.DB) error {
	if userID == "" {
		return fmt.Errorf("ユーザIDがありません")
	}

	sendEmail := Domain.User{}
	if err := conn.Debug().Table("user").Select(`"user".address, "user"."name"`).Where("user_id=?", userID).Find(&sendEmail).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("送信するメールアドレスが登録されていません。")
		}
		return err
	}

	// メールを送信する。
	//message := ""

	// 送信成功
	return nil
}

// パラメータチェック処理
func checkAuthParams(conn *gorm.DB, params authorizationParams) error {

	// ユーザIDチェック処理
	err := common.CheckUserByID(params.userID, conn)
	if err != nil {
		return err
	}

	// 正常終了
	return nil
}

/*
	CertificationAuth 施設登録権限申請承認処理
*/
func (a *Authorization) CertificationAuth(c *gin.Context) error {
	conn := a.conn

	params := certificationParams{}

	//　パラメータ取得
	json.NewDecoder(c.Request.Body).Decode(&params)

	// パラメータチェック
	if err := checkCertificationParams(conn, params); err != nil {
		return err
	}

	authorization := Domain.Authorization{
		ID: params.authorizeID,
	}

	// 権限申請データ取得
	if err := conn.Debug().First(&authorization).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("権限申請データが見つかりませんでした")
		}
		return err
	}

	// 権限申請状態を更新する
	if err := conn.Debug().Transaction(func(tx *gorm.DB) error {
		authorization.RequestStateKB = AUTHORIZED_STATE
		authorization.AppliedDate = time.Now()
		if err := tx.Debug().Save(&authorization).Error; err != nil {
			return err
		}

		return nil
	}); err != nil {
		return err
	}

	// 施設投稿権限付与完了メールを送信する
	if err := sendMailOfCertificated(authorization, conn); err != nil {
		return err
	}

	return nil
}

// 権限付与完了をメールでユーザに通知する
func sendMailOfCertificated(authorization Domain.Authorization, conn *gorm.DB) error {

	// ユーザ情報を取得
	user := Domain.User{
		ID: authorization.UserID,
	}

	if err := conn.Debug().First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("ユーザ情報がありません")
		}
		return err
	}

	// email := user.Email
	// メールアドレスに申請承認済メールを送信する
	return nil
}

func checkCertificationParams(conn *gorm.DB, params certificationParams) error {
	if params.userID == "" {
		return fmt.Errorf("管理者ユーザIDが不足しています")
	}

	isAdministrator := false

	// 管理者権限チェックを行う
	if err := conn.Table("user").
		Select("count(*) > 0").
		Joins(`left join authorization on authorization.user_id = "user".id`).
		Where(`"user".id=? AND authorization.auth_kb=?`, params.userID, AUTH_KB).
		Find(&isAdministrator).Error; err != nil {
		return err
	}

	if !isAdministrator {
		return fmt.Errorf("管理者権限がありません")
	}

	return nil
}

func NewAuthorizationRepository(c *gorm.DB) port.AuthorizationRepository {
	return &Authorization{
		conn: c,
	}
}
