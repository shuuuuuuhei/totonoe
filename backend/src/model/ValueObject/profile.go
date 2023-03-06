package ValueObject

import (
	"time"
)

// ProfileVO プロフィールモデル(DB同様)
type ProfileVO struct {
	ID             string      `json:"id,omitempty"`
	Name           string      `json:"name,omitempty"`
	FamilyName     string      `json:"family_name,omitempty"`
	LastName       string      `json:"last_name,omitempty"`
	Introduction   string      `json:"introduction,omitempty"`
	CreatedAt      time.Time   `json:"created_at,omitempty"`
	UpdatedAt      time.Time   `json:"updated_at,omitempty"`
	FollowingCount int8        `json:"following_count,omitempty"`
	FollowedCount  int8        `json:"followed_count,omitempty"`
	IsFollowing    bool        `json:"is_following,omitempty"`
	IsMe           bool        `json:"is_me,omitempty"`
	FollowingList  []Following `json:"following_list,omitempty"`
	FollowerList   []Follower  `json:"follower_list,omitempty"`
}
