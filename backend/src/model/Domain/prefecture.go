package Domain

type Prefecture struct {
	ID     uint32 `gorm:"primaryKey;"`
	Name   string `gorm:"not null;"`
	Cities []City
}
