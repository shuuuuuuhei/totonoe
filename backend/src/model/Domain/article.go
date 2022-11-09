package Domain

import (
	"time"

	"github.com/shopspring/decimal"
)

// Article 記事モデル
type Article struct {
	ID            uint32              `gorm:"primaryKey" json:"id"`
	FacilityID    uint32              `gorm:"not null" json:"sauna_id"`
	UserID        string              `gorm:"not null" json:"user_id"`
	Content       string              `gorm:"not null" json:"content"`
	TotonoiScore  decimal.NullDecimal `gorm:"type:decimal" json:"totonoi_score,omitempty"`
	RelaxScore    decimal.NullDecimal `gorm:"type:decimal" json:"relax_score,omitempty"`
	PriceScore    decimal.NullDecimal `gorm:"type:decimal" json:"price_score,omitempty"`
	ServiceScore  decimal.NullDecimal `gorm:"type:decimal" json:"service_score,omitempty"`
	AmbienceScore decimal.NullDecimal `gorm:"type:decimal" json:"ambience_score,omitempty"`
	AdmissionDate time.Time           `json:"admission_date,omitempty"`
	ArticleLikes  []ArticleLike
	Comments      []Comment
	CreatedAt     time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt     time.Time `gorm:"autoUpdateTime;datetime(0)"`
}
