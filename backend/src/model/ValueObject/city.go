package ValueObject

type CityVO struct {
	ID           uint32 `json:"id,omitempty"`
	PrefectureID uint32 `json:"prefecture_id,omitempty"`
	Name         string `json:"name,omitempty"`
	Yomi         string `json:"yomi,omitempty"`
	Latitude     string `json:"latitude,omitempty"`
	Longitude    string `json:"longitude,omitempty"`
}
