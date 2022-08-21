package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type Prefecture struct {
	InputFactory      func(port.PrefectureOutputPort, port.PrefectureRepository) port.PrefectureInputPort
	OutputFactory     func(*gin.Context) port.PrefectureOutputPort
	RepositoryFactory func(*gorm.DB) port.PrefectureRepository
	Conn              *gorm.DB
}

func (p Prefecture) GetAllPrefecture(c *gin.Context) {
	inputport := p.newInputPort(c)
	inputport.GetAllPrefecture(c)
}

func (p *Prefecture) newInputPort(ctx *gin.Context) port.PrefectureInputPort {
	output := p.OutputFactory(ctx)
	repository := p.RepositoryFactory(p.Conn)
	inputport := p.InputFactory(output, repository)
	return inputport
}
