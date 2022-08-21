package ValueObject

// Sauna サウナモデル
type Sauna struct {
	ID           uint32 `json:"id,omitempty"`
	FacilityVOID uint32 `json:"facility_id,omitempty"`
	SaunaType    string `json:"sauna_type,omitempty"`
	Temperature  uint   `json:"temperature,omitempty"`
	Capacity     uint   `json:"capacity,omitempty"`
	RouryuKB     string `json:"rouryu_kb,omitempty"`
	SaunaMatKB   string `json:"sauna_mat_kb,omitempty"`
	TvKB         string `json:"tv_kb,omitempty"`
	BgmKB        string `json:"bgm_kb,omitempty"`
}
