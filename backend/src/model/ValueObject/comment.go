package ValueObject

import "time"

// Comment コメントモデル
type CommentVO struct {
	ID        uint32    `json:"id,omitempty"`
	UserID    string    `json:"user_id,omitempty"`
	UserName  string    `json:"user_name,omitempty"`
	ArticleID uint32    `json:"article_id,omitempty"`
	Content   string    `json:"content,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
	UpdatedAt time.Time `json:"updated_at,omitempty"`
}
