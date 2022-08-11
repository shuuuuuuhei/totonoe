package common

import (
	"errors"
	"fmt"
	"log"
	"main.go/model/Domain"

	"gorm.io/gorm"
)

// CheckUserAuthorize ユーザが権限を持っているかどうか
func CheckUserAuthorize(userID string, conn *gorm.DB) error {

	user := Domain.User{}

	if err := conn.Where("id = ?", userID).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("ユーザが見つかりませんでした。ID = %s", userID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/common/CheckUserAuthorize")
	}

	return nil
}

// ログインユーザかどうかのチェック
func IsMe(userID string, logginedID string) bool {
	return userID == logginedID
}