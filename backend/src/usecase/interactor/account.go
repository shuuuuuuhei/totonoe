package interactor

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
	"main.go/usecase/port"
)

type AccountInputPort struct {
	OutputPort port.AccountOutputPort
	Repository port.AccountRepository
}

type tx struct {
	db *gorm.DB
}

// NewAccount implements port.AccountInputPort
func (a *AccountInputPort) NewAccount(ctx *gin.Context) {
	err := a.Repository.NewAccount(ctx)

	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}

	return
}

// DeleteAccount implements port.AccountInputPort
func (a *AccountInputPort) DeleteAccount(ctx *gin.Context) {
	err := a.Repository.DeleteAccount(ctx)

	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}

	return
}

func NewAccountInputPort(o port.AccountOutputPort, r port.AccountRepository) port.AccountInputPort {
	return &AccountInputPort{
		OutputPort: o,
		Repository: r,
	}
}
