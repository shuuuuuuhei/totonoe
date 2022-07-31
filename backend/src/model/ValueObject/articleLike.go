package ValueObject

import (
	"time"
)

// ArticleLike 記事お気に入りモデル
type ArticleLikeVO struct {
	ID        string    `json:"id,omitempty"`
	ArticleID uint32    `json:"article_id,omitempty"`
	UserID    string    `json:"user_id,omitempty"`
	CreatedAt time.Time `json:"created_at,omitempty"`
}
