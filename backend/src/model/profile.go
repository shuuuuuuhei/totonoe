package model

import (
	"time"

	"gorm.io/gorm"
)

// Profile プロフィールモデル(DB同様)
type Profile struct {
	gorm.Model
	ID           uint32 `gorm:"primryKey;serializer:json"`
	NickName     string `gorm:"primryKey;serializer:json"`
	Introduction string `gorm:"serializer:json"`
	UserID       string
	CreatedAt    time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt    time.Time `gorm:"serializer:json;autoUpdateTime"`
}
