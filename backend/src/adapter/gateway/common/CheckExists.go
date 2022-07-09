package common

import (
	"errors"
	"fmt"
	"log"

	"gorm.io/gorm"
	"main.go/model"
)

// CheckUserByID ユーザ存在チェック
func CheckUserByID(userID string, conn *gorm.DB) error {
	user := model.User{}

	if err := conn.Where("id = ?", userID).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("ユーザが見つかりませんでした。ID = %s", userID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/gateway/CreateArticle")
	}
	return nil
}

// CheckSaunaByID サウナ存在チェック
func CheckSaunaByID(saunaID uint32, conn *gorm.DB) error {
	sauna := model.Sauna{}

	if err := conn.Where("id = ?", saunaID).First(&sauna).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("サウナが見つかりませんでした = %s", saunaID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/gateway/CreateArticle")
	}
	return nil
}
