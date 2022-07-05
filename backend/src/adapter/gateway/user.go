package gateway

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/model"
	"main.go/usecase/port"
)

type User struct {
	conn *gorm.DB
}

// Params クライアントパラメータ
type Params struct {
	ID       string `json:"id"`
	UserID   string `json:"user_id"`
	Email    string `json:"email"`
	NickName string `json:"nickname"`
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
func (u *User) GetProfile(c *gin.Context) (*model.Profile, error) {
	conn := u.conn
	var params Params
	json.NewDecoder(c.Request.Body).Decode(&params)

	profile := model.Profile{}

	if err := conn.Debug().Table(`"profile"`).
		Select(`"profile".*, count(tbl_following.user_id) AS following_count, count(tbl_followed.following_id) AS followed_count`).
		Joins(`left join user_relation_ship tbl_following on tbl_following.user_id = profile.user_id`).
		Joins(`left join user_relation_ship tbl_followed on tbl_followed.following_id = profile.user_id`).
		Where(`profile.user_id = ?`, params.UserID).
		Group(`profile.id`).
		Scan(&profile).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("プロフィールが見つかりませんでした。 user_id = %s", params.ID)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/Login")
	}

	return &profile, nil
}

func (u *User) SignUp(c *gin.Context) (*model.User, error) {
	conn := u.conn
	var params Params
	json.NewDecoder(c.Request.Body).Decode(&params)

	user, err := newUserByParams(params)

	if err != nil {
		return nil, fmt.Errorf("パラメータに不備がありました。パラメータ：%w", err)
	}

	if err = conn.Select("user_id", "email", "name").Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

func newUserByParams(p Params) (*model.User, error) {

	//params check
	err := checkParams(p)

	if err != nil {
		return nil, err
	}

	return &model.User{
		ID:    p.ID,
		Name:  p.NickName,
		Email: p.Email,
	}, nil
}

// タイプ別パラメータ存在チェック
func checkParams(p Params) error {

	// switch p.ParamsType {
	// case SIGN_UP:
	// 	if p.ID == "" {
	// 		return errors.New("ID(パラメータ)がありません")
	// 	}
	// 	if p.Name == "" {
	// 		return errors.New("Name(パラメータ)がありません")
	// 	}
	// 	if p.Email == "" {
	// 		return errors.New("Email(パラメータ)がありません")
	// 	}
	// }
	return nil
}
