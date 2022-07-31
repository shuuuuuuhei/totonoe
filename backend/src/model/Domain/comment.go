package Domain

import (
	"time"
)

// Comment コメントモデル
type Comment struct {
	ID        uint32    `gorm:"primaryKey;"`
	UserID    string    `gorm:"primaryKey;"`
	ArticleID uint32    `gorm:"primaryKey;"`
	Content   string    `gorm:"not null"`
	CreatedAt time.Time `gorm:";autoCreateTime"`
	UpdatedAt time.Time `gorm:";autoUpdateTime"`
}
