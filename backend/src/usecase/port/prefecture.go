package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

type PrefectureInputPort interface {
	GetAllPrefecture(ctx *gin.Context)
	GetPrefectureByCity(ctx *gin.Context)
	GetPrefectureByID(ctx *gin.Context)
	GetPrefectureByName(ctx *gin.Context)
}

type PrefectureOutputPort interface {
	RenderPrefecture(*ValueObject.PrefectureVO)
	RenderPrefectures(*[]ValueObject.PrefectureVO)
	RenderError(error)
}

type PrefectureRepository interface {
	GetAllPrefecture(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error)
	GetPrefectureByCity(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error)
	GetPrefectureByID(ctx *gin.Context) (*ValueObject.PrefectureVO, error)
	GetPrefectureByName(ctx *gin.Context) (*[]ValueObject.PrefectureVO, error)
}
