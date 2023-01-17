package ValueObject

import "time"

type AccountVO struct {
	ID           string    `json:"id,omitempty"`
	Name         string    `json:"name,omitempty"`
	Introduction string    `json:"introduction,omitempty"`
	CreatedAt    time.Time `json:"created_at,omitempty"`
}
