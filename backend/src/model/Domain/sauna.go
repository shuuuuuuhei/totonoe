package Domain

type Sauna struct {
	ID         uint32 `gorm:"primaryKey"`
	FacilityID uint32 `gorm:"primaryKey"`
}
