package model

import (
	"time"

	"gorm.io/gorm"
)

// ArticleLike 記事お気に入りモデル
type ArticleLike struct {
	gorm.Model
	ID        uint32    `gorm:"primryKey"`
	UserID    string    `gorm:"primryKey;foreignKey:UserID"`
	ArticleID uint32    `gorm:"primryKey;foreignKey:ArticleID"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}
