package ValueObject

import "time"

type FacilityVO struct {
	ID             uint32    `json:"id,omitempty"`
	Name           string    `json:"name,omitempty"`
	Address        string    `json:"address,omitempty"`
	Tel            string    `json:"tel,omitempty"`
	EigyoStart     time.Time `json:"eigyo_start,omitempty"`
	EigyoEnd       time.Time `json:"eigyo_end,omitempty"`
	Price          uint32    `json:"price,omitempty"`
	LoggingKb      string    `json:"logging_kb,omitempty"`
	RestaurantKb   string    `json:"restaurant_kb,omitempty"`
	WorkingSpaceKb string    `json:"working_space_kb,omitempty"`
	BooksKb        string    `json:"books_kb,omitempty"`
	HeatWaveKb     string    `json:"heat_wave_kb,omitempty"`
	AirBathKb      string    `json:"air_bath_kb,omitempty"`
	BreakSpaceKb   string    `json:"break_space_kb,omitempty"`
	Saunas         []Sauna   `json:"saunas,omitempty"`
}
