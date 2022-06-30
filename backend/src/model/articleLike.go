package model

import (
	"time"

	"gorm.io/gorm"
)

// ArticleLike 記事お気に入りモデル
type ArticleLike struct {
	gorm.Model
	ID        uint32    `gorm:"primryKey;serializer:json"`
	UserID    string    `gorm:"primryKey;serializer:json;foreignKey:UserID"`
	ArticleID uint32    `gorm:"primryKey;serializer:json;foreignKey:ArticleID"`
	CreatedAt time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt time.Time `gorm:"serializer:json;autoUpdateTime"`
}
