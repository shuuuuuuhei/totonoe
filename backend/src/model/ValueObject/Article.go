package ValueObject

import (
	"time"

	"github.com/shopspring/decimal"
)

type ArticleVO struct {
	ID            uint32              `json:"id,omitempty"`
	Content       string              `json:"content,omitempty"`
	CreatedAt     time.Time           `json:"created_at,omitempty"`
	UpdatedAt     time.Time           `json:"updated_at,omitempty"`
	FacilityID    uint32              `json:"facility_id,omitempty"`
	PrefectureID    uint32            `json:"prefecture_id,omitempty"`
	FacilityName  string              `json:"facility_name,omitempty"`
	UserID        string              `json:"user_id,omitempty"`
	UserName      string              `json:"user_name,omitempty"`
	LikeCount     int8                `json:"like_count,omitempty"`
	IsLiked       bool                `json:"is_liked,omitempty"`
	CommentCount  int8                `json:"comment_count,omitempty"`
	AdmissionDate time.Time           `json:"admission_date,omitempty"`
	TotonoiScore  decimal.NullDecimal `gorm:"type:decimal" json:"totonoi_score,omitempty"`
	RelaxScore    decimal.NullDecimal `gorm:"type:decimal" json:"relax_score,omitempty"`
	PriceScore    decimal.NullDecimal `gorm:"type:decimal" json:"price_score,omitempty"`
	ServiceScore  decimal.NullDecimal `gorm:"type:decimal" json:"service_score,omitempty"`
	AmbienceScore decimal.NullDecimal `gorm:"type:decimal" json:"ambience_score,omitempty"`
}
