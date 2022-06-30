package model

import "time"

// UserRelationShips ユーザ関係テーブル
type UserRelationShips struct {
	ID          uint32    `gorm:"primryKey;serializer:json"`
	FollowingID string    `gorm:"primryKey;serializer:json"`
	FollowedID  string    `gorm:"primryKey;serializer:json"`
	CreatedAt   time.Time `gorm:"serializer:json;autoCreateTime"`
	UpdatedAt   time.Time `gorm:"serializer:json;autoUpdateTime"`
}
