package presenter

import (
	"errors"
	"net/http"

	"gorm.io/gorm"
)

// toHTTPStatusCode　エラーコード生成
func toHTTPStatusCode(err error) int {

	// レコードが見つからなかったケース
	if errors.Is(err, gorm.ErrRecordNotFound) {
		return http.StatusNotFound
	}

	return http.StatusInternalServerError
}
