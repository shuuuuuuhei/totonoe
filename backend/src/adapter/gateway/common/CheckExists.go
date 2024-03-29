package common

import (
	"errors"
	"fmt"
	"log"

	"main.go/model/Domain"

	"gorm.io/gorm"
)

// UndeleteFlg 未削除フラグ(0)
const UndeleteFlg = 0

// CheckUserByID ユーザ存在チェック
func CheckUserByID(userID string, conn *gorm.DB) error {
	user := Domain.User{}

	if userID == "" {
		return nil
	}

	if err := conn.Debug().Where("id = ? and delete_flg=?", userID, UndeleteFlg).First(&user).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("ユーザが見つかりませんでした。ID = %s", userID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/common/CreateArticle")
	}
	return nil
}

// CheckFacilityByID サウナ存在チェック
func CheckFacilityByID(facilityID uint32, conn *gorm.DB) error {
	facility := Domain.Facility{}

	if err := conn.Where("id = ?", facilityID).First(&facility).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("サウナが見つかりませんでした = %d", facilityID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/common/CheckSaunaByID")
	}
	return nil
}

// CheckArticleByID 記事存在チェック
func CheckArticleByID(articleID string, conn *gorm.DB) error {
	article := Domain.Article{}

	if err := conn.Where("id = ?", articleID).First(&article).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("記事が見つかりませんでした = %s", articleID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/common/CheckArticleByID")
	}
	return nil
}

// CheckCommentByID コメント存在チェック
func CheckCommentByID(commentID string, conn *gorm.DB) error {
	comment := Domain.Comment{}

	if err := conn.Where("id = ?", commentID).First(&comment).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return fmt.Errorf("コメントが見つかりませんでした = %s", commentID)
		}
		log.Println(err)
		return errors.New("Internal Server Error. adapter/common/CheckCommentByID")
	}
	return nil
}
