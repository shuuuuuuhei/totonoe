package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Prefecture struct {
	OutputPort     port.PrefectureOutputPort
	PrefectureRepo port.PrefectureRepository
}

func NewPrefectureInputPort(o port.PrefectureOutputPort, r port.PrefectureRepository) port.PrefectureInputPort {
	return &Prefecture{
		OutputPort:     o,
		PrefectureRepo: r,
	}
}

func (p Prefecture) GetAllPrefecture(ctx *gin.Context) {
	prefectures, err := p.PrefectureRepo.GetAllPrefecture(ctx)
	if err != nil {
		p.OutputPort.RenderError(err)
	}
	p.OutputPort.RenderPrefectures(prefectures)
}

func (p Prefecture) GetPrefectureByCity(ctx *gin.Context) {
	prefectures, err := p.PrefectureRepo.GetPrefectureByCity(ctx)
	if err != nil {
		p.OutputPort.RenderError(err)
	}
	p.OutputPort.RenderPrefectures(prefectures)
}

func (p Prefecture) GetPrefectureByID(ctx *gin.Context) {
	prefecture, err := p.PrefectureRepo.GetPrefectureByID(ctx)
	if err != nil {
		p.OutputPort.RenderError(err)
	}
	p.OutputPort.RenderPrefecture(prefecture)
}

func (p Prefecture) GetPrefectureByName(ctx *gin.Context) {
	prefecture, err := p.PrefectureRepo.GetPrefectureByID(ctx)
	if err != nil {
		p.OutputPort.RenderError(err)
	}
	p.OutputPort.RenderPrefecture(prefecture)
}
