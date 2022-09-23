package Domain

import (
	"time"
)

// Facility サウナモデル
type Facility struct {
	ID              uint32      `gorm:"primaryKey" json:"id,omitempty"`
	Name            string      `gorm:"not null" json:"name,omitempty"`
	Address         Address     `json:"address,omitempty"`
	Tel             string      `json:"tel,omitempty"`
	EigyoStart      string      `json:"eigyo_start,omitempty"`
	EigyoEnd        string      `json:"eigyo_end,omitempty"`
	Price           uint32      `json:"price,omitempty"`
	WaterServerFlg  string      `gorm:"type:varchar(2)" json:"water_server_flg,omitempty"`
	LodgingFlg      string      `gorm:"type:varchar(2)" json:"lodging_flg,omitempty"`
	RestaurantFlg   string      `gorm:"type:varchar(2)" json:"restaurant_flg,omitempty"`
	WorkingSpaceFlg string      `gorm:"type:varchar(2)" json:"working_space_flg,omitempty"`
	BooksFlg        string      `gorm:"type:varchar(2)" json:"books_flg,omitempty"`
	HeatWaveFlg     string      `gorm:"type:varchar(2)" json:"heat_wave_flg,omitempty"`
	AirBathFlg      string      `gorm:"type:varchar(2)" json:"air_bath_flg,omitempty"`
	BreakSpaceFlg   string      `gorm:"type:varchar(2)" json:"break_space_flg,omitempty"`
	Saunas          []Sauna     `json:"saunas,omitempty"`
	WaterBaths      []WaterBath `json:"water_baths,omitempty"`
	Articles        []Article   `json:"articles,omitempty"`
	CreatedAt       time.Time   `gorm:"autoCreateTime" json:"created_at,omitempty"`
	UpdatedAt       time.Time   `gorm:"autoUpdateTime" json:"updated_at,omitempty"`
}
