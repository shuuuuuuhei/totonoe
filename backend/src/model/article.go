package model

import (
	"time"

	"gorm.io/gorm"
)

// Article 記事モデル
type Article struct {
	gorm.Model
	ID          uint32   `gorm:"primryKey;serializer:json"`
	Title       string `gorm:"primryKey;serializer:json"`
	Content     string `gorm:"serializer:json"`
	UserID      string `gorm:"primryKey;serializer:json;foreignKey:UserID"`
	SaunaID     string `gorm:"primryKey;serializer:json;foreignKey:SaunaID"`
	AricleLikes []ArticleLike
	Comments    []Comment
	CreatedAt   time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt   time.Time `gorm:"serializer:json;autoUpdateTime"`
}