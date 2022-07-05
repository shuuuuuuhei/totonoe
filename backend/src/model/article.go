package model

import (
	"time"

	"gorm.io/gorm"
)

// Article 記事モデル
type Article struct {
	gorm.Model
	ID           uint32 `gorm:"primryKey"`
	Title        string `gorm:"primryKey"`
	Content      string `gorm:"primryKey"`
	UserID       string `gorm:"primryKey;foreignKey:UserID"`
	SaunaID      uint32 `gorm:"foreignKey:SaunaID"`
	UserName     string `gorm:"->" json:"user_name"`
	SaunaName    string `gorm:"->" json:"sauna_name"`
	LikeCount    int8   `gorm:"->" json:"like_count"`
	CommentCount int8   `gorm:"->" json:"comment_count"`
	Comments     []Comment
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime;datetime(0)"`
}
