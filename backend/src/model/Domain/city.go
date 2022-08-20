package Domain

type City struct {
	ID           uint32 `gorm:"primaryKey"`
	PrefectureID uint32 `gorm:"primaryKey"`
	Name         string `gorm:"type:varchar(100);not null"`
	Yomi         string `gorm:"not null"`
	Latitude     string `gorm:"not null"`
	Longitude    string `gorm:"not null"`
}
