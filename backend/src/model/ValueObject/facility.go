package ValueObject

import "github.com/shopspring/decimal"

type FacilityVO struct {
	ID              uint32          `json:"id,omitempty"`
	Name            string          `json:"name,omitempty"`
	Address         string          `json:"address,omitempty"`
	Tel             string          `json:"tel,omitempty"`
	EigyoStart      string          `json:"eigyo_start,omitempty"`
	EigyoEnd        string          `json:"eigyo_end,omitempty"`
	Price           uint32          `json:"price,omitempty"`
	LoggingFlg      string          `json:"logging_flg,omitempty"`
	RestaurantFlg   string          `json:"restaurant_flg,omitempty"`
	WorkingSpaceFlg string          `json:"working_space_flg,omitempty"`
	BooksFlg        string          `json:"books_flg,omitempty"`
	HeatWaveFlg     string          `json:"heat_wave_flg,omitempty"`
	AirBathFlg      string          `json:"air_bath_flg,omitempty"`
	BreakSpaceFlg   string          `json:"break_space_flg,omitempty"`
	Saunas          []Sauna         `json:"saunas,omitempty"`
	Latitude        decimal.Decimal `json:"latitude,omitempty"`
	Longitude       decimal.Decimal `json:"longitude,omitempty"`
}
