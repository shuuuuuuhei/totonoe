package Domain

import (
	"time"

	"gorm.io/gorm"
)

// Profile プロフィールモデル(DB同様)
type Profile struct {
	gorm.Model
	ID           uint32    `gorm:"primaryKey"`
	UserID       string    `gorm:"primaryKey"`
	NickName     string    `gorm:"not null"`
	Introduction string    `gorm:"not null"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}
