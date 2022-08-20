package Domain

import (
	"time"
)

// Facility サウナモデル
type Facility struct {
	ID             uint32 `gorm:"primaryKey"`
	Name           string `gorm:"not null"`
	Address        Address
	Tel            string
	EigyoStart     time.Time
	EigyoEnd       time.Time
	Price          uint32
	LoggingKb      string `gorm:"type:varchar(2)"`
	RestaurantKb   string `gorm:"type:varchar(2)"`
	WorkingSpaceKb string `gorm:"type:varchar(2)"`
	BooksKb        string `gorm:"type:varchar(2)"`
	HeatWaveKb     string `gorm:"type:varchar(2)"`
	AirBathKb      string `gorm:"type:varchar(2)"`
	BreakSpaceKb   string `gorm:"type:varchar(2)"`
	Saunas         []Sauna
	Articles       []Article
	CreatedAt      time.Time `gorm:"autoCreateTime"`
	UpdatedAt      time.Time `gorm:"autoUpdateTime"`
}
