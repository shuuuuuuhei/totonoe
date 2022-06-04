package model

import (
	"time"
)

type Article struct {
	ID        string
	Title     string
	Content   string
	UserID    string
	UserName  string
	CreatedAt time.Time
}
