package ValueObject

import "time"

type Authorization struct {
	UserID         string    `json:"user_id,omitempty"`
	UserName       string    `json:"user_name,omitempty"`
	AuthKB         string    `json:"auth_kb,omitempty"`
	RequestStateKB string    `json:"request_state_kb,omitempty"`
	RequestDate    time.Time `json:"request_date,omitempty"`
	AppliedDate    time.Time `json:"applied_date,omitempty"`
}

// 申請中ユーザー
type ApplyingAuthorization struct {
	ID             uint32 `json:"id,omitempty"`
	UserID         string `json:"user_id,omitempty"`
	UserName       string `json:"user_name,omitempty"`
	AuthKB         string `json:"auth_kb,omitempty"`
	RequestStateKB string `json:"request_state_kb,omitempty"`
	RequestDate    string `json:"request_date,omitempty"`
}

// 権限承認済ユーザー
type AppliedAuthorization struct {
	ID          uint32 `json:"id,omitempty"`
	UserID      string `json:"user_id,omitempty"`
	UserName    string `json:"user_name,omitempty"`
	AuthKB      string `json:"auth_kb,omitempty"`
	AppliedDate string `json:"applied_date,omitempty"`
	RequestDate string `json:"request_date,omitempty"`
}
