package helpers

import (
	"github.com/gin-gonic/gin"
	"main.go/schemas"
)

// APIResponse レスポンスJSONをステータスコードに従って組み立てる
func APIResponse(c *gin.Context, Message string, StatusCode int, Method string, Data interface{}) {

	jsonResponse := schemas.ShemaResponses{
		StatusCode: StatusCode,
		Mehod:      Method,
		Message:    Message,
		Data:       Data,
	}

	// 失敗
	if jsonResponse.StatusCode >= 400 {
		c.AbortWithStatusJSON(StatusCode, jsonResponse)
		return
	}

	// 成功
	c.JSON(StatusCode, jsonResponse)
}
