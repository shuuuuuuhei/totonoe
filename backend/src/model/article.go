package model

import (
	"time"

	"gorm.io/gorm"
)

// Article 記事モデル
type Article struct {
	gorm.Model
	ID      uint32 `gorm:"primryKey"`
	Title   string `gorm:"primryKey"`
	Content string `gorm:"serializer:json"`
	UserID  string `gorm:"primryKey;foreignKey:UserID"`
	// SaunaID     string `gorm:"primryKey;serializer:json;foreignKey:SaunaID"`
	AricleLikes []ArticleLike
	Comments    []Comment
	CreatedAt   time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt   time.Time `gorm:"serializer:json;autoUpdateTime"`
}
