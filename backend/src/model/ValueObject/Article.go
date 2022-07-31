package ValueObject

import (
	"time"
)

type ArticleVO struct {
	ID           uint32    `json:"id,omitempty"`
	SaunaID      uint32    `json:"sauna_id,omitempty"`
	UserID       string    `json:"user_id,omitempty"`
	Title        string    `json:"title,omitempty"`
	Content      string    `json:"content,omitempty"`
	CreatedAt    time.Time `json:"created_at,omitempty"`
	UpdatedAt    time.Time `json:"updated_at,omitempty"`
	UserName     string    `json:"user_name,omitempty"`
	SaunaName    string    `json:"sauna_name,omitempty"`
	LikeCount    int8      `json:"like_count,omitempty"`
	IsLiked      bool      `json:"is_liked,omitempty"`
	CommentCount int8      `json:"comment_count,omitempty"`
}
