package Domain

import (
	"time"
)

// Article 記事モデル
type Article struct {
	ID           uint32 `gorm:"primaryKey" json:"id"`
	FacilityID   uint32 `gorm:"not null" json:"sauna_id"`
	UserID       string `gorm:"not null" json:"user_id"`
	Title        string `gorm:"not null" json:"title"`
	Content      string `gorm:"not null" json:"content"`
	ArticleLikes []ArticleLike
	Comments     []Comment
	CreatedAt    time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime;datetime(0)"`
}
