package schemas

// ShemaResponses レスポンス型定義
type ShemaResponses struct {
	StatusCode int         `json:"statusCode"`
	Mehod      string      `json:"method"`
	Message    string      `json:"message"`
	Data       interface{} `json:"data"`
}