package model

import (
	"time"

	"gorm.io/gorm"
)

// Comment コメントモデル
type Comment struct {
	gorm.Model
	CommentID string    `gorm:"primryKey;serializer:json"`
	UserID    string    `gorm:"primryKey;serializer:json;foreignKey:UserID"`
	ArticleID string    `gorm:"primryKey;serializer:json;foreignKey:ArticleID"`
	Content   string    `gorm:"primryKey;serializer:json"`
	CreatedAt time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt time.Time `gorm:"serializer:json;autoUpdateTime"`
}
