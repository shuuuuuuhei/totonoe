package Domain

type WaterBath struct {
	ID          uint32 `gorm:"primaryKey" json:"id,omitempty"`
	FacilityID  uint32 `gorm:"primaryKey" json:"facility_id,omitempty"`
	Temperature int    `json:"temperature,omitempty"`
	Capacity    uint   `json:"capacity,omitempty"`
}
