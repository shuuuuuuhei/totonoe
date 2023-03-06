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

type profileUpdateParams struct {
	UserID       string `json:"user_id"`
	FamilyName   string `json:"family_name"`
	LastName     string `json:"last_name"`
	Introduction string `json:"introduction"`
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

// UpdateProfile プロフィール更新処理
func (u *User) UpdateProfile(c *gin.Context) error {
	conn := u.conn

	updateProfileParams := profileUpdateParams{}

	token := c.Request.Header.Get("User-ID")
	if token == "" {
		return errors.New("認証情報がありません")
	}

	json.NewDecoder(c.Request.Body).Decode(&updateProfileParams)

	if err := conn.Debug().Transaction(func(tx *gorm.DB) error {
		user := Domain.User{
			ID: updateProfileParams.UserID,
		}

		// プロフィール情報更新処理
		if err := tx.Debug().Model(&user).
			Updates(Domain.User{
				FamilyName:   updateProfileParams.FamilyName,
				LastName:     updateProfileParams.LastName,
				Introduction: updateProfileParams.Introduction,
			}).Error; err != nil {
			return err
		}

		return nil
	}); err != nil {
		return err
	}
	return nil
}

// GetProfile プロフィール取得
func (u *User) GetProfile(c *gin.Context) (*ValueObject.ProfileVO, error) {
	conn := u.conn
	var params userParams
	json.NewDecoder(c.Request.Body).Decode(&params)
	myUserID := c.Request.Header.Get("User-ID")
	if myUserID == "" {
		return nil, errors.New("認証情報がありません")
	}

	profile := ValueObject.ProfileVO{}

	if err := conn.Debug().Table(`"user"`).
		Select(`"user".id, "user"."name", "user".introduction, "user".family_name, "user".last_name, count(tbl_following.user_id) AS following_count, count(tbl_followed.following_id) AS followed_count`).
		Joins(`left join user_relation_ship tbl_following on tbl_following.user_id = "user".id`).
		Joins(`left join user_relation_ship tbl_followed on tbl_followed.following_id = "user".id`).
		Where(`"user".id = ?`, params.UserID).
		Group(`"user".id, "user"."name", "user".introduction`).
		Scan(&profile).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("プロフィールが見つかりませんでした。 user_id = %s", params.UserID)
		}
		return nil, errors.New("Internal Server Error. /User/GetProfile")
	}

	// Me?
	profile.IsMe = common.IsMe(profile.ID, myUserID)

	// フォローチェック
	if !profile.IsMe {
		profile.IsFollowing = isFollowUser(conn, myUserID, params.UserID)
	}

	if profile.FollowingCount > 0 {
		followingList, err := getFollowingUser(conn, params.UserID)
		if err != nil {
			return nil, errors.New("Internal Server Error." + conn.Error.Error())
		}

		profile.FollowingList = followingList
	}

	if profile.FollowedCount > 0 {
		followerList, err := getFollowerUser(conn, params.UserID)
		if err != nil {
			return nil, errors.New("Internal Server Error." + conn.Error.Error())
		}

		profile.FollowerList = followerList
	}

	return &profile, nil
}

// getFollowerUser フォロワーユーザーを取得する
func getFollowerUser(conn *gorm.DB, userID string) ([]ValueObject.Follower, error) {
	followerUserList := []ValueObject.Follower{}

	if err := conn.Debug().Table("user_relation_ship follower_tbl").
		Select(`follower_tbl.user_id as user_id, "user".name`).
		Joins(`inner join "user" on "user".id = follower_tbl.user_id`).
		Where("following_id = ?", userID).
		Scan(&followerUserList).
		Error; err != nil {
		return nil, fmt.Errorf("フォロワーの取得に失敗")
	}

	// 取得したフォロワーユーザーを返却する
	return followerUserList, nil
}

// getFollowingUser フォロー中のユーザーを取得する
func getFollowingUser(conn *gorm.DB, userID string) ([]ValueObject.Following, error) {
	followingUserList := []ValueObject.Following{}

	if err := conn.Debug().Table("user_relation_ship following_tbl").
		Select(`following_tbl.following_id as user_id, "user".name`).
		Joins(`inner join "user" on "user".id = following_tbl.following_id`).
		Where("user_id = ?", userID).
		Scan(&followingUserList).
		Error; err != nil {
		return nil, fmt.Errorf("フォローユーザーの取得に失敗")
	}

	// 取得したフォロー中ユーザーを返却する
	return followingUserList, nil
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
		if err := tx.Debug().Create(&relation).Error; err != nil {
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

// isFollowUser フォロー中判定
func isFollowUser(conn *gorm.DB, myUserID string, followingUserID string) bool {
	var count int64
	if err := conn.Debug().Table(`"user_relation_ship"`).
		Select(`"Count(1) AS count"`).
		Where(`user_relation_ship.user_id = ? AND user_relation_ship.following_id = ?`, myUserID, followingUserID).
		Count(&count).Error; err != nil {
		return false
	}

	if count > 0 {
		return true
	} else {
		return false
	}
}
