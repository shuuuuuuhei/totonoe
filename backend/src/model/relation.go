package model

// UserRelationShip ユーザ関連モデル
type UserRelationShip struct {
	UserID      string `gorm:"foreignKey:UserID"`
	FollowingID string `gorm:"foreignKey:FollowingID"`
}
