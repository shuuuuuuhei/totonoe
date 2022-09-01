package Domain

type Sauna struct {
	ID          uint32 `gorm:"primaryKey" json:"id,omitempty"`
	FacilityID  uint32 `gorm:"primaryKey" json:"facility_id,omitempty"`
	SaunaType   uint   `gorm:"not null" json:"sauna_type,omitempty"`
	Temperature int    `json:"temperature,omitempty"`
	Capacity    uint   `json:"capacity,omitempty"`
	RouryuFlg   string `gorm:"type:varchar(2)" json:"rouryu_flg,omitempty"`
	SaunaMatFlg string `gorm:"type:varchar(2)" json:"sauna_mat_flg,omitempty"`
	TvFlg       string `gorm:"type:varchar(2)" json:"tv_flg,omitempty"`
	BgmFlg      string `gorm:"type:varchar(2)" json:"bgm_flg,omitempty"`
}
