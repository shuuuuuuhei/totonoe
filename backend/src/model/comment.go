package model

import (
	"time"

	"gorm.io/gorm"
)

// Comment コメントモデル
type Comment struct {
	gorm.Model
	ID        uint32    `gorm:"primryKey;serializer:json"`
	UserID    string    `gorm:"primryKey;serializer:json;foreignKey:UserID"`
	ArticleID uint32    `gorm:"primryKey;serializer:json;foreignKey:ArticleID"`
	Content   string    `gorm:"primryKey;serializer:json"`
	CreatedAt time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt time.Time `gorm:"serializer:json;autoUpdateTime"`
}
