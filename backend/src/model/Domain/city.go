package Domain

type City struct {
	ID           uint32 `gorm:"primaryKey" json:"id,omitempty"`
	PrefectureID uint32 `gorm:"primaryKey" json:"prefecture_id,omitempty"`
	Name         string `gorm:"type:varchar(100);not null" json:"name,omitempty"`
	Yomi         string `gorm:"not null" json:"yomi,omitempty"`
}
