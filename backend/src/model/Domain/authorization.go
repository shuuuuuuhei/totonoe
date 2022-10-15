package Domain

import "time"

type Authorization struct {
	ID             string    `gorm:"primaryKey" json:"id,omitempty"`
	UserID         string    `json:"user_id,omitempty"`
	AuthKB         string    `json:"auth_kb,omitempty"`
	RequestStateKB string    `json:"request_state_kb,omitempty"`
	RequestDate    time.Time `json:"request_date,omitempty"`
	AppliedDate    time.Time `json:"applied_date,omitempty"`
	CreatedAt      time.Time `gorm:"autoCreateTime" json:"created_at,omitempty"`
	UpdatedAt      time.Time `gorm:"autoUpdateTime;datetime(0)" json:"updated_at,omitempty"`
}
