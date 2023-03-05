package ValueObject

type Following struct {
	UserID      string `json:"user_id,omitempty"`
	Name        string `json:"name,omitempty"`
	ProfileVOID string `json:"profile_void,omitempty"`
}

type Follower struct {
	UserID      string `json:"user_id,omitempty"`
	Name        string `json:"name,omitempty"`
	ProfileVOID string `json:"profile_void,omitempty"`
}
