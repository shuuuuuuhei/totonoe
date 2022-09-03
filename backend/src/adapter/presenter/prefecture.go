package presenter

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type Prefecture struct {
	ctx *gin.Context
}

func NewPrefectureOutputPort(c *gin.Context) port.PrefectureOutputPort {
	return &Prefecture{
		ctx: c,
	}
}

func (p Prefecture) RenderPrefecture(_ *ValueObject.PrefectureVO) {
	panic("not implemented") // TODO: Implement
}

func (p Prefecture) RenderPrefectures(*[]ValueObject.PrefectureVO) {
	panic("not implemented") // TODO: Implement
}

func (p Prefecture) RenderError(error) {
	panic("not implemented") // TODO: Implement
}
