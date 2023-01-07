package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/Domain"
	"main.go/model/ValueObject"
)

type AuthorizationInputPort interface {
	NewInitialAuth(c *gin.Context)
	ApplySubmitFacilityAuth(c *gin.Context)
	CertificationAuth(c *gin.Context)
	GetAuthorization(c *gin.Context)
	GetApplyingAuthorization(c *gin.Context)
	GetAppliedAuthorization(c *gin.Context)
}

type AuthorizationOutputPort interface {
	RenderOK()
	RenderError(e error)
	RenderAuthorization(*Domain.Authorization)
	RenderApplyingAuthorizationList(*[]ValueObject.ApplyingAuthorization)
	RenderApplyiedAuthorizationList(*[]ValueObject.AppliedAuthorization)
}

type AuthorizationRepository interface {
	NewInitialAuth(c *gin.Context) error
	ApplySubmitFacilityAuth(c *gin.Context) error
	CertificationAuth(c *gin.Context) error
	GetAuthorization(c *gin.Context) (*Domain.Authorization, error)
	GetApplyingAuthorization(c *gin.Context) (*[]ValueObject.ApplyingAuthorization, error)
	GetAppliedAuthorization(c *gin.Context) (*[]ValueObject.AppliedAuthorization, error)
}
