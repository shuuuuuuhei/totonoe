package Domain

import (
	"time"
)

// ArticleLike 記事お気に入りモデル
type ArticleLike struct {
	ID        string    `gorm:"primaryKey"`
	ArticleID uint32    `gorm:"primaryKey"`
	UserID    string    `gorm:"primaryKey"`
	CreatedAt time.Time `gorm:"autoCreateTime"`
}
