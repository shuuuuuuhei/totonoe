package gateway

import (
	"errors"
	"fmt"
	"log"

	"main.go/crypto"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/domain/model"
	"main.go/usecase/port"
)

type User struct {
	conn *gorm.DB
}

func NewUserRepository(conn *gorm.DB) port.UserRepository {
	return &User{
		conn: conn,
	}
}

// Login メールアドレスからユーザを検索し、パスワード照合を行う
func (u *User) Login(c *gin.Context) (*model.User, error) {
	conn := u.conn
	//email := c.Param("email")
	email := "emailtest"
	//password := c.Param("password")
	password := "passwordtest"
	user := model.User{}

	if err := conn.Where("email = ?", email).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, fmt.Errorf("ユーザが見つかりませんでした。 email = %s", email)
		}
		log.Println(err)
		return nil, errors.New("Internal Server Error. adapter/gateway/Login")
	}

	err := crypto.CompareHashAndPassword(user.Password, password)
	if err != nil {
		return nil, errors.New("パスワードが一致しませんでした。")
	}

	return &user, nil
}

func (u *User) SignUp(c *gin.Context) (*model.User, error) {
	conn := u.conn
	user, err := newUser(c)
	if err != nil {
		return nil, err
	}

	if err := conn.Select("email", "name", "password").Create(&user).Error; err != nil {
		return nil, err
	}

	return user, nil
}

func newUser(c *gin.Context) (*model.User, error) {
	//email := c.PostForm("email")
	email := "emailtest"
	//userName := c.PostForm("name")
	userName := "userNametest"
	//password, err := crypto.PasswordEncrypt(c.PostForm("password"))
	password, err := crypto.PasswordEncrypt("passwordtest")
	if err != nil {
		return nil, errors.New("パスワードハッシュの生成に失敗しました")
	}
	return &model.User{Email: email, Name: userName, Password: password}, nil
}
