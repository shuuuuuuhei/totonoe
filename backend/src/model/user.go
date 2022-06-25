package model

import (
	"time"

	"gorm.io/gorm"
)

// User ユーザモデル
type User struct {
	gorm.Model
	UserID      string `gorm:"primryKey;serializer:json"`
	Name        string `gorm:"primryKey;serializer:json"`
	Email       string `gorm:"primryKey;serializer:json"`
	Articles    []Article
	Profile     Profile
	AricleLikes []ArticleLike
	CreatedAt   time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt   time.Time `gorm:"serializer:json;autoUpdateTime"`
}
