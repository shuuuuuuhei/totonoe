package model

import (
	"time"

	"gorm.io/gorm"
)

// User ユーザモデル
type User struct {
	gorm.Model
	ID          string `gorm:"type:varchar(100);primryKey"`
	Name        string `gorm:"primryKey"`
	Email       string `gorm:"primryKey"`
	Articles    []Article
	Profile     Profile
	AricleLikes []ArticleLike
	CreatedAt   time.Time `gorm:"autoCreateTime"`
	UpdatedAt   time.Time `gorm:"autoUpdateTime"`
}
