package ValueObject

// UserRelationShip ユーザ関連モデル
type UserRelationShip struct {
	UserID      string `json:"user_id,omitempty"`
	FollowingID string `json:"following_id,omitempty"`
}
