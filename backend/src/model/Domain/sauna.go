package Domain

type Sauna struct {
	ID          uint32 `gorm:"primaryKey"`
	FacilityID  uint32 `gorm:"primaryKey"`
	SaunaType   string `gorm:"not null"`
	Temperature uint
	Capacity    uint
	RouryuKB    string `gorm:"type:varchar(2)"`
	SaunaMatKB  string `gorm:"type:varchar(2)"`
	TvKB        string `gorm:"type:varchar(2)"`
	BgmKB       string `gorm:"type:varchar(2)"`
}
