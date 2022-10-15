package ValueObject

import (
	"time"
)

// Profile プロフィールモデル(DB同様)
type ProfileVO struct {
	ID             string    `json:"id,omitempty"`
	Name           string    `json:"name,omitempty"`
	Introduction   string    `json:"introduction,omitempty"`
	CreatedAt      time.Time `json:"created_at,omitempty"`
	UpdatedAt      time.Time `json:"updated_at,omitempty"`
	FollowingCount int8      `json:"following_count,omitempty"`
	FollowedCount  int8      `json:"followed_count,omitempty"`
	IsFollowing    bool      `json:"is_following,omitempty"`
	IsMe           bool      `json:"is_me,omitempty"`
}
