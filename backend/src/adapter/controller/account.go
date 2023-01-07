package controller

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type Account struct {
	InputPortFactory  func(o port.AccountOutputPort, a port.AccountRepository) port.AccountInputPort
	OutputPortFactory func(c *gin.Context) port.AccountOutputPort
	RepositoryFactory func(c *gorm.DB) port.AccountRepository
	Conn              *gorm.DB
}

func (a *Account) DeleteAccount(c *gin.Context) {
	inputPort := a.newInputport(c)
	inputPort.DeleteAccount(c)
}

func (a *Account) newInputport(c *gin.Context) port.AccountInputPort {
	outputPort := a.OutputPortFactory(c)
	repository := a.RepositoryFactory(a.Conn)
	inputPort := a.InputPortFactory(outputPort, repository)

	return inputPort
}
