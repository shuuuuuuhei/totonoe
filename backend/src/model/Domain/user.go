package Domain

import (
	"time"
)

// User ユーザモデル
type User struct {
	ID            string        `gorm:"type:varchar(100);primaryKey" json:"id,omitempty"`
	Name          string        `gorm:"not null" json:"name,omitempty"`
	Email         string        `gorm:"not null" json:"email,omitempty"`
	Introduction  string        `gorm:"type:varchar(100);" json:"introduction,omitempty"`
	FamilyName    string        `json:"family_name,omitempty"`
	LastName      string        `json:"last_name,omitempty"`
	Articles      []Article     `json:"articles,omitempty"`
	ArticleLikes  []ArticleLike `json:"article_likes,omitempty"`
	Following     []*User       `gorm:"many2many:user_relation_ship" json:"following,omitempty"`
	Authorization Authorization `json:"authorization,omitempty"`
	CreatedAt     time.Time     `gorm:"autoCreateTime" json:"created_at,omitempty"`
	UpdatedAt     time.Time     `gorm:"autoUpdateTime" json:"updated_at,omitempty"`
}
