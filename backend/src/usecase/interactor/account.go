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

// GetAccount implements port.AccountInputPort
func (a *AccountInputPort) GetAccount(ctx *gin.Context) {
	accountInfo, err := a.Repository.GetAccount(ctx)

	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderAccountInfo(ctx, accountInfo)
	return
}

// NewAccount implements port.AccountInputPort
func (a *AccountInputPort) NewAccount(ctx *gin.Context) {
	err := a.Repository.NewAccount(ctx)

	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}

	a.OutputPort.RenderOK(ctx)
	return
}

// DeleteAccount implements port.AccountInputPort
func (a *AccountInputPort) DeleteAccount(ctx *gin.Context) {
	err := a.Repository.DeleteAccount(ctx)

	if err != nil {
		a.OutputPort.RenderError(err)
		return
	}
	a.OutputPort.RenderOK(ctx)
	return
}

func NewAccountInputPort(o port.AccountOutputPort, r port.AccountRepository) port.AccountInputPort {
	return &AccountInputPort{
		OutputPort: o,
		Repository: r,
	}
}
