package model

import (
	"time"

	"gorm.io/gorm"
)

// Sauna サウナモデル
type Sauna struct {
	gorm.Model
	ID        uint32 `gorm:"primryKey"`
	Name      string `gorm:"primryKey"`
	AdressID  string `gorm:"primryKey"`
	Articles  []Article
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}
