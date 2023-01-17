package Domain

import (
	"database/sql"
	"time"
)

type Authorization struct {
	ID             uint32       `gorm:"primaryKey" json:"id,omitempty"`
	UserID         string       `gorm:"primaryKey" json:"user_id,omitempty"`
	AuthKB         string       `json:"auth_kb,omitempty"`
	RequestStateKB string       `json:"request_state_kb,omitempty"`
	RequestDate    sql.NullTime `json:"request_date,omitempty"`
	AppliedDate    sql.NullTime `json:"applied_date,omitempty"`
	CreatedAt      time.Time    `gorm:"autoCreateTime" json:"created_at,omitempty"`
	UpdatedAt      time.Time    `gorm:"autoUpdateTime;datetime(0)" json:"updated_at,omitempty"`
}
