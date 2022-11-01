package interactor

import (
	"github.com/gin-gonic/gin"
	"main.go/usecase/port"
)

type Authorization struct {
	Outputport port.AuthorizationOutputPort
	Repository port.AuthorizationRepository
}

// GetApplyingAuthorization implements port.AuthorizationInputPort
func (a *Authorization) GetApplyingAuthorization(c *gin.Context) {
	applyingAuthorizationList, err := a.Repository.GetApplyingAuthorization(c)

	if err != nil {
		a.Outputport.RenderError(err)
		return
	}

	a.Outputport.RenderApplyingUserList(applyingAuthorizationList)
}

// GetAuthorization 権限情報取得
func (a *Authorization) GetAuthorization(c *gin.Context) {
	authorization, err := a.Repository.GetAuthorization(c)

	if err != nil {
		a.Outputport.RenderError(err)
		return
	}

	// 権限情報がない場合は値を設定せず200成功レスポンスを行う
	if authorization == nil {
		a.Outputport.RenderOK()
		return
	}

	// 権限情報を返す
	a.Outputport.RenderAuthorization(authorization)
}

// ApplySubmitFacilityAuth implements port.AuthorizationInputPort
func (a *Authorization) ApplySubmitFacilityAuth(c *gin.Context) {
	err := a.Repository.ApplySubmitFacilityAuth(c)
	if err != nil {
		a.Outputport.RenderError(err)
		return
	}
	a.Outputport.RenderOK()
}

// CertificationAuth implements port.AuthorizationInputPort
func (a *Authorization) CertificationAuth(c *gin.Context) {
	err := a.Repository.CertificationAuth(c)
	if err != nil {
		a.Outputport.RenderError(err)
		return
	}
	a.Outputport.RenderOK()
}

func NewAuthorizationInputPort(o port.AuthorizationOutputPort, repo port.AuthorizationRepository) port.AuthorizationInputPort {
	return &Authorization{
		Outputport: o,
		Repository: repo,
	}
}
