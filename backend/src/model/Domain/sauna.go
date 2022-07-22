package Domain

import (
	"time"
)

// Sauna サウナモデル
type Sauna struct {
	ID        uint32 `gorm:"primaryKey"`
	Name      string `gorm:"not null"`
	AddressID string `gorm:"not null"`
	Articles  []Article
	CreatedAt time.Time `gorm:"autoCreateTime"`
	UpdatedAt time.Time `gorm:"autoUpdateTime"`
}
