package infra

import (
	"github.com/gin-gonic/gin"
	"main.go/adapter/controller"
	"main.go/adapter/gateway"
	"main.go/adapter/presenter"
	"main.go/usecase/interactor"
)

type Routing struct {
	DB   *DB
	Gin  *gin.Engine
	Port string
}

func Init(db *DB) *Routing {
	r := &Routing{
		DB:   db,
		Gin:  gin.Default(),
		Port: ":4000",
	}
	r.setRouting()
	return r
}

func (r *Routing) setRouting() {
	articleControler := controller.Article{
		OutputFactory:     presenter.NewArticleOutputport,
		InputFactory:      interactor.NewArticleInputPort,
		RepositoryFactory: gateway.NewArticleRepository,
		Conn:              r.DB.Connection,
	}

	r.Gin.GET("/article", articleControler.GetArticleByID)
}

func (r *Routing) Run() {
	r.Gin.Run(r.Port)
}
