package presenter

import (
	"net/http"

	"gorm.io/gorm"
)

// toHTTPResponse　エラーコードとメッセージを生成
func toHTTPResponse(err error) (int, string) {

	switch err.Error() {
	case "403":
		// 権限がなかったケース
		return http.StatusForbidden, "Forbin"
	case gorm.ErrRecordNotFound.Error():
		// レコードが見つからなかったケース
		return http.StatusNotFound, "Not Found"
	default:
		return http.StatusInternalServerError, err.Error()
	}
}
