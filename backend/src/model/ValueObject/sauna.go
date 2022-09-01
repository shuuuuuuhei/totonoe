package ValueObject

// Sauna サウナモデル
type Sauna struct {
	ID           uint32 `json:"id,omitempty"`
	FacilityVOID uint32 `json:"facility_id,omitempty"`
	SaunaType    string `json:"sauna_type,omitempty"`
	Temperature  uint   `json:"temperature,omitempty"`
	Capacity     uint   `json:"capacity,omitempty"`
	RouryuFlg     string `json:"rouryu_flg,omitempty"`
	SaunaMatFlg   string `json:"sauna_mat_flg,omitempty"`
	TvFlg         string `json:"tv_flg,omitempty"`
	BgmFlg        string `json:"bgm_flg,omitempty"`
}
