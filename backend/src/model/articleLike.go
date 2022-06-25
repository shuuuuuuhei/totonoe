package model

import (
	"time"

	"gorm.io/gorm"
)

// ArticleLike 記事お気に入りモデル
type ArticleLike struct {
	gorm.Model
	LikeID    string    `gorm:"primryKey;serializer:json"`
	UserID    string    `gorm:"primryKey;serializer:json;foreignKey:UserID"`
	ArticleID string    `gorm:"primryKey;serializer:json;foreignKey:ArticleID"`
	CreatedAt time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt time.Time `gorm:"serializer:json;autoUpdateTime"`
}