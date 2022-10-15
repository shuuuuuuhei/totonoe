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

type User struct {
	conn *gorm.DB
}

// Params クライアントパラメータ
type userParams struct {
	UserID      string `json:"user_id"`
	Name        string `json:"name"`
	Email       string `json:"email"`
	FollowingID string `json:"following_id"`
}

const (
	// get profile
	PARAMS_TYPE1 = "1"
	// sign up
	SIGN_UP = "2"
)

func NewUserRepository(conn *gorm.DB) port.UserRepository {
	return &User{
		conn: conn,
	}
}

// GetProfile メールアドレスからユーザを検索し、パスワード照合を行う
func (u *User) GetProfile(c *gin.Context) (*ValueObject.ProfileVO, error) {
	conn := u.conn
	var params userParams
	json.NewDecoder(c.Request.Body).Decode(&params)
	token := c.Request.Header.Get("User-ID")
	if token == "" {
		return nil, errors.New("認証情報がありません")
	}

	profile := ValueObject.ProfileVO{}

	if err := conn.Debug().Table(`"user"`).
		Select(`"user".id, "user"."name", "user".introduction, count(tbl_following.user_id) AS following_count, count(tbl_followed.following_id) AS followed_count`).
		Joins(`left join user_relation_ship tbl_following on tbl_following.user_id = "user".id`).
		Joins(`left join user_relation_ship tbl_followed on tbl_followed.following_id = "user".id`).
		Where(`"user".id = ?`, params.UserID).
		Group(`"user".id, "user"."name", "user".introduction`).
		Scan(&profile).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("プロフィールが見つかりませんでした。 user_id = %s", params.UserID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/Login")
	}

	// Me?
	profile.IsMe = common.IsMe(profile.ID, token)

	// フォローチェック
	if !profile.IsMe {
		var count int64
		if err := conn.Debug().Table(`"user_relation_ship"`).
			Select(`"Count(1) AS count"`).
			Where(`user_relation_ship.user_id = ? AND user_relation_ship.following_id = ?`, token, params.UserID).
			Count(&count).Error; err != nil {
			return nil, errors.New("Internal Server Error. adapter/gateway/Login")
		}

		if count > 0 {
			profile.IsFollowing = true
		}
	}
	return &profile, nil
}

// Follow ユーザIDを取得してユーザをフォローする
func (u *User) Follow(c *gin.Context) error {
	conn := u.conn
	var params userParams
	json.NewDecoder(c.Request.Body).Decode(&params)

	// ログインユーザチェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}

	// フォロー対象のユーザチェック
	if err := common.CheckUserByID(params.FollowingID, conn); err != nil {
		return err
	}

	relation := Domain.UserRelationShip{
		UserID:      params.UserID,
		FollowingID: params.FollowingID,
	}

	if err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Create(&relation).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("フォローに失敗しました。")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/Follow")
		}
		return nil
	}); err != nil {
		return err
	}

	// 登録成功
	return nil
}

// Unfollow ユーザIDを取得してユーザをフォローする
func (u *User) Unfollow(c *gin.Context) error {
	conn := u.conn
	var params userParams
	json.NewDecoder(c.Request.Body).Decode(&params)

	// ログインユーザチェック
	if err := common.CheckUserByID(params.UserID, conn); err != nil {
		return err
	}

	// フォロー中のユーザチェック
	if err := common.CheckUserByID(params.FollowingID, conn); err != nil {
		return err
	}

	if err := conn.Transaction(func(tx *gorm.DB) error {
		if err := tx.Where("user_id=? AND following_id=?", params.UserID, params.FollowingID).Delete(&Domain.UserRelationShip{}).Error; err != nil {
			if err == sql.ErrNoRows {
				return fmt.Errorf("アンフォローに失敗しました。")
			}
			log.Println(err)
			return errors.New("Internal Server Error. adapter/gateway/Unfollow")
		}
		return nil
	}); err != nil {
		return err
	}

	// 登録成功
	return nil
}

// ユーザ情報をDBに登録する
func (u *User) SignUp(c *gin.Context) error {
	conn := u.conn
	var params userParams
	var isExists bool
	json.NewDecoder(c.Request.Body).Decode(&params)

	// リクエスト情報から登録ユーザを作成
	user, err := newUserByParams(params)
	if err != nil {
		return fmt.Errorf("パラメータに不備がありました。パラメータ：%w", err)
	}

	// ユーザが登録済かどうかチェックを行う
	if err = conn.Table("user").Select("count(*) > 0").Where("id=?", user.ID).Find(&isExists).Error; err != nil {
		return err
	}

	if isExists {
		return fmt.Errorf("ユーザIDが登録済みです。%s", user.ID)
	}

	// ユーザ登録
	if err = conn.Debug().Create(&user).Error; err != nil {
		return err
	}

	return nil
}

func newUserByParams(p userParams) (*Domain.User, error) {

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
func checkParams(p userParams) error {

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
