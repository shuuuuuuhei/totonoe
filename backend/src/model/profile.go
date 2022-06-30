package model

import (
	"time"

	"gorm.io/gorm"
)

// Profile プロフィールモデル(DB同様)
type Profile struct {
	gorm.Model
	ID           uint32 `gorm:"primryKey"`
	NickName     string `gorm:"primryKey"`
	Introduction string	`gorm:"primryKey"`
	UserID       string	`gorm:"primryKey"`
	CreatedAt    time.Time `gorm:"autoCreateTime"`
	UpdatedAt    time.Time `gorm:"autoUpdateTime"`
}
