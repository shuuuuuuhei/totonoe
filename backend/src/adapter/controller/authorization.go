package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type Authorization struct {
	InputPortFactory  func(o port.AuthorizationOutputPort, r port.AuthorizationRepository) port.AuthorizationInputPort
	OutputPortFactory func(c *gin.Context) port.AuthorizationOutputPort
	RepositoryFactory func(conn *gorm.DB) port.AuthorizationRepository
	Conn              *gorm.DB
}

func (a *Authorization) ApplySubmitFacilityAuth(c *gin.Context) {
	inputPort := a.newInputPort(c)
	inputPort.ApplySubmitFacilityAuth(c)
}

func (a *Authorization) CertificationAuth(c *gin.Context) {
	inputPort := a.newInputPort(c)
	inputPort.CertificationAuth(c)
}

func (a *Authorization) GetAuthorization(c *gin.Context) {
	inputPort := a.newInputPort(c)
	inputPort.GetAuthorization(c)
}

func (a *Authorization) GetApplyingAuthorization(c *gin.Context) {
	inputPort := a.newInputPort(c)
	inputPort.GetApplyingAuthorization(c)
}

func (a Authorization) newInputPort(c *gin.Context) port.AuthorizationInputPort {
	output := a.OutputPortFactory(c)
	repository := a.RepositoryFactory(a.Conn)
	inputport := a.InputPortFactory(output, repository)
	return inputport
}
