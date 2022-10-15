package port

import "github.com/gin-gonic/gin"

type AuthorizationInputPort interface {
	ApplySubmitFacilityAuth(c *gin.Context)
	CertificationAuth(c *gin.Context)
}

type AuthorizationOutputPort interface {
	RenderOK()
	RenderError(e error)
}

type AuthorizationRepository interface {
	ApplySubmitFacilityAuth(c *gin.Context) error
	CertificationAuth(c *gin.Context) error
}
