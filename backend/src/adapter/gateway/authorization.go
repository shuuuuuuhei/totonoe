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
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Authorization struct {
	conn *gorm.DB
}

type authorizationParams struct {
	UserID string `json:"user_id,omitempty"`
	AuthKB string `json:"auth_kb,omitempty"`
}

type certificationParams struct {
	AdminUserID     string   `json:"admin_user_id,omitempty"`
	AuthorizeIDList []uint32 `json:"authorize_id_list,omitempty"`
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

	// 一般ユーザー
	GENERAL_AUTH_KB = "0"

	// 施設投稿可能ユーザー
	FACILITY_POST_AUTH_KB = "1"

	// 管理者
	ADMIN_AUTH_KB = "999"
)

// GetApplyingAuthorization 申請中情報取得
func (a *Authorization) GetApplyingAuthorization(c *gin.Context) (*[]ValueObject.ApplyingAuthorization, error) {
	conn := a.conn

	params := authorizationParams{}

	//　パラメータ取得
	json.NewDecoder(c.Request.Body).Decode(&params)

	// 管理者ユーザーかどうかチェックを行う
	if err := isAdminUser(params.UserID, conn); err != nil {
		return nil, err
	}

	applyingAuthorizationList := []ValueObject.ApplyingAuthorization{}

	if err := conn.Debug().
		Table("authorization").
		Select(`"authorization".id, "authorization".user_id, "authorization".auth_kb, to_char("authorization".request_date, 'YYYY-MM-DD') as request_date, "user".name as user_name`).
		Joins(`left join "user" on "user".id = "authorization".user_id`).
		Where(`"authorization".auth_kb=? and "authorization".request_state_kb=?`, GENERAL_AUTH_KB, INITIAL_AUTH_STATE).Order(`"authorization".request_date, "user".name`).
		Scan(&applyingAuthorizationList).Error; err != nil {
		return nil, err
	}

	return &applyingAuthorizationList, nil
}

// 管理者ユーザーかチェックを行う。管理者ユーザでなければエラーを返す。
func isAdminUser(userID string, conn *gorm.DB) error {

	authorization := Domain.Authorization{
		UserID: userID,
		AuthKB: ADMIN_AUTH_KB,
	}

	if err := conn.Debug().First(&authorization).Error; err != nil {
		// 管理者ユーザーではない場合はerrを返す。
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("管理者ユーザーでアクセスしてください")
		}
		return err
	}
	return nil
}

// GetAppliedAuthorization 承認済権限取得
func (a *Authorization) GetAppliedAuthorization(c *gin.Context) (*[]ValueObject.AppliedAuthorization, error) {

	conn := a.conn
	params := authorizationParams{}

	//　パラメータ取得
	json.NewDecoder(c.Request.Body).Decode(&params)

	// 管理者ユーザーかどうかチェックを行う
	if err := isAdminUser(params.UserID, conn); err != nil {
		return nil, err
	}

	appliedAuthorizationList := []ValueObject.AppliedAuthorization{}

	// 投稿可能権限を取得する
	if err := conn.Debug().
		Table("authorization").
		Select(`"authorization".id, "authorization".user_id, "authorization".auth_kb, to_char("authorization".applied_date, 'YYYY-MM-DD') as applied_date, "user".name as user_name`).
		Joins(`left join "user" on "user".id = "authorization".user_id`).
		Where(`"authorization".auth_kb=? and "authorization".request_state_kb=?`, FACILITY_POST_AUTH_KB, AUTHORIZED_STATE).
		Order(`"authorization".applied_date, "user".name`).
		Scan(&appliedAuthorizationList).Error; err != nil {
		return nil, err
	}

	return &appliedAuthorizationList, nil

}

// GetAuthorization 権限情報取得処理
func (a *Authorization) GetAuthorization(c *gin.Context) (*Domain.Authorization, error) {

	conn := a.conn

	params := authorizationParams{}

	// パラメータ取得
	json.NewDecoder(c.Request.Body).Decode(&params)

	if err := checkAuthParams(conn, params); err != nil {
		return nil, err
	}

	authorization := Domain.Authorization{}
	authorization.UserID = params.UserID

	if err := conn.Debug().First(&authorization).Error; err != nil {
		// 権限情報を登録していない場合はnilで返す。
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, nil
		}
		return nil, err
	}

	return &authorization, nil
}

/*
	ApplySubmitFacilityAuth 施設登録権限の申請を登録する
*/
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
			UserID:         params.UserID,
			AuthKB:         params.AuthKB,
			RequestStateKB: INITIAL_AUTH_STATE,
			RequestDate:    time.Now(),
		}

		// ユーザ権限テーブル新規登録
		if err := tx.Debug().Create(&authorization).Error; err != nil {
			return err
		}

		// 申請者にメールを送信する。
		// if err := sendMailOfApplied(params.UserID, tx); err != nil {
		// return err
		// }

		// 管理者にメールを送信する。
		// if err := sendMailToAdministrator(authorization, tx); err != nil {
		// return err
		// }
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

	// ユーザ情報取得
	user := Domain.User{}
	if err := conn.Debug().Table("user").Select(`"user".email, "user"."name"`).Where("id=?", userID).Find(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("送信するメールアドレスが登録されていません。")
		}
		return err
	}

	// メールを送信する
	message := ""

	// 送信メールの設定を行う
	mail := &common.Mail{
		From:     user.Email,
		UserName: user.Name,
		Password: "test",
		To:       "test",
		Sub:      "test",
		Message:  message,
	}

	// ユーザにメールを送信する
	if err := mail.SendMailToUser(); err != nil {
		return err
	}

	// 送信成功
	return nil
}

// パラメータチェック処理
func checkAuthParams(conn *gorm.DB, params authorizationParams) error {

	// ユーザIDが空の場合はエラーを返す
	if params.UserID == "" {
		return fmt.Errorf("ユーザIDを指定してください")
	}

	// ユーザIDチェック処理
	err := common.CheckUserByID(params.UserID, conn)
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

	// 取得した権限テーブルIDリスト分、申請状態の更新を行う
	for index := 0; index < len(params.AuthorizeIDList); index++ {

		authorization := Domain.Authorization{
			ID: params.AuthorizeIDList[index],
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
			// 施設投稿可能権限の設定を行う
			authorization.AuthKB = FACILITY_POST_AUTH_KB
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
		// if err := sendMailOfCertificated(authorization, conn); err != nil {
		// 	return err
		// }
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

	// メールの設定を行う
	mail := &common.Mail{
		From:     "",
		UserName: "",
		Password: "",
		To:       "",
		Sub:      "",
		Message:  "",
	}

	// メール送信処理
	if err := mail.SendMailToUser(); err != nil {
		return err
	}
	return nil
}

/*
	申請承認処理パラメータチェック処理
*/
func checkCertificationParams(conn *gorm.DB, params certificationParams) error {
	if params.AdminUserID == "" {
		return fmt.Errorf("管理者ユーザIDが不足しています")
	}

	if err := isAdminUser(params.AdminUserID, conn); err != nil {
		return err
	}

	return nil
}

func NewAuthorizationRepository(c *gorm.DB) port.AuthorizationRepository {
	return &Authorization{
		conn: c,
	}
}
