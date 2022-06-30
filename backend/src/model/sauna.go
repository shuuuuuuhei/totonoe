package model

import (
	"time"

	"gorm.io/gorm"
)

// Sauna サウナモデル
type Sauna struct {
	gorm.Model
	ID        uint32 `gorm:"primryKey;serializer:json"`
	Name      string `gorm:"primryKey;serializer:json"`
	AdressID  string `gorm:"primryKey;serializer:json"`
	Articles  []Article
	CreatedAt time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt time.Time `gorm:"serializer:json;autoUpdateTime"`
}
