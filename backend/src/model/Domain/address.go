package Domain

type Address struct {
	ID           uint32  `gorm:"primaryKey" json:"id,omitempty"`
	FacilityID   uint32  `gorm:"primaryKey" json:"facility_id,omitempty"`
	CityID       uint32  `gorm:"primaryKey" json:"city_id,omitempty"`
	PrefectureID uint32  `gorm:"primaryKey" json:"prefecture_id,omitempty"`
	StreetName   string  `gorm:"not null" json:"street_name,omitempty"`
	Latitude     float64 `gorm:"type:decimal not null" json:"latitude,omitempty"`
	Longitude    float64 `gorm:"type:decimal not null" json:"longitude,omitempty"`
}
