package Domain

// UserRelationShip ユーザ関連モデル
type UserRelationShip struct {
	UserID      string `gorm:"primaryKey"`
	FollowingID string `gorm:"primaryKey"`
}
