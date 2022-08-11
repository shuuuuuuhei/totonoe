package common

import (
	"main.go/model/Domain"
	"main.go/model/ValueObject"
	"strconv"
)

// ConvertUInt stringからuint32に変換する
func ConvertUInt(s string) uint32 {
	iNum, _ := strconv.Atoi(s)

	return uint32(iNum)
}

// ConvertCommnetVO ドメインモデルからVOモデルに変換する
func ConvertCommnetVO(c Domain.Comment) *ValueObject.CommentVO {
	return &ValueObject.CommentVO{
		ID:        c.ID,
		ArticleID: c.ArticleID,
		UserID:    c.UserID,
		Content:   c.Content,
		CreatedAt: c.CreatedAt,
		UpdatedAt: c.UpdatedAt,
	}
}
