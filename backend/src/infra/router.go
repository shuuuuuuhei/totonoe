package infra

import (
	"github.com/gin-gonic/gin"
	"main.go/adapter/controller"
	"main.go/adapter/gateway"
	"main.go/adapter/presenter"
	"main.go/usecase/interactor"
)

// Routing DB, Gin, Port の設定を書き込む型
type Routing struct {
	DB   *DB
	Gin  *gin.Engine
	Port string
}

// Init DB初期設定
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

	userController := controller.User{
		OutputFactory:     presenter.NewUserOutputPort,
		InputFactory:      interactor.NewUserInport,
		RepositoryFactory: gateway.NewUserRepository,
		Conn:              r.DB.Connection,
	}

	r.Gin.GET("/articles/:articleID", articleControler.GetArticleByID)
	r.Gin.POST("/articles/new", articleControler.CreateArticle)
	r.Gin.DELETE("articles/:articleID", articleControler.DeleteArticleByID)
	// ↓まだ試してない
	r.Gin.PUT("/articles", articleControler.UpdateArticleByID)

	r.Gin.POST("/login", userController.Login)
	r.Gin.POST("/signup", userController.SignUp)
}

// Run サーバ処理開始
func (r *Routing) Run() {
	r.Gin.Run(r.Port)
}
