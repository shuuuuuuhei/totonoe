package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
)

type AuthorizationInputPort interface {
	ApplySubmitFacilityAuth(c *gin.Context)
	CertificationAuth(c *gin.Context)
	GetAuthorization(c *gin.Context)
}

type AuthorizationOutputPort interface {
	RenderOK()
	RenderError(e error)
	RenderAuthorization(*Domain.Authorization)
}

type AuthorizationRepository interface {
	ApplySubmitFacilityAuth(c *gin.Context) error
	CertificationAuth(c *gin.Context) error
	GetAuthorization(c *gin.Context) (*Domain.Authorization, error)
}
