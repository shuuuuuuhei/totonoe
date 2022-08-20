package Domain

type Address struct {
	ID           uint32 `gorm:"primaryKey"`
	FacilityID   uint32 `gorm:"primaryKey"`
	CityID       uint32 `gorm:"primaryKey"`
	PrefectureID uint32 `gorm:"primaryKey"`
	StreetName   string `gorm:"not null"`
}
