package Domain

import (
	"time"
)

// User ユーザモデル
type User struct {
	ID           string `gorm:"type:varchar(100);primaryKey"`
	Name         string `gorm:"not null"`
	Email        string `gorm:"not null"`
	Articles     []Article
	Profile      Profile
	ArticleLikes []ArticleLike
	Following    []*User   `gorm:"many2many:user_relation_ship"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}
