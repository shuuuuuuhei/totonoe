package server

import (
	"encoding/json"
	"time"

	jwtmiddleware "github.com/auth0/go-jwt-middleware/v2"
	"github.com/auth0/go-jwt-middleware/v2/validator"
	adapter "github.com/gwatts/gin-adapter"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"main.go/adapter/controller"
	"main.go/adapter/gateway"
	"main.go/adapter/presenter"
	"main.go/infra/database"
	"main.go/middleware"
	"main.go/usecase/interactor"
)

// Routing DB, Gin, Port の設定を書き込む型
type Routing struct {
	DB   *database.DB
	Gin  *gin.Engine
	Port string
}

var jwtMiddleware = middleware.EnsureValidToken()

var handlerWithJWT = gin.HandlerFunc(func(c *gin.Context) {
	claims := c.Value(jwtmiddleware.ContextKey{}).(*validator.ValidatedClaims)

	payload, err := json.Marshal(claims)
	if err != nil {
		c.AbortWithError(500, err)
		return
	}

	c.Writer.Header().Set("Content-Type", "application/json")
	c.Writer.Write(payload)
})

// Init DB初期設定
func Init(db *database.DB) *Routing {
	r := &Routing{
		DB:   db,
		Gin:  gin.Default(),
		Port: ":4000",
	}
	r.setRouting()
	return r
}

// Run サーバ処理開始
func (r *Routing) Run() {
	r.Gin.Run(r.Port)
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
	r.Gin.Use(corsMiddleware(), adapter.Wrap(jwtMiddleware.CheckJWT))

	/**
	@description All Auth Route
	*/
	r.Gin.POST("/profile", userController.GetProfile)
	r.Gin.GET("/articles/:userID", articleControler.GetArticlesByUserID)
	r.Gin.POST("/articles/new", articleControler.CreateArticle)
	r.Gin.DELETE("/articles/:articleID", articleControler.DeleteArticleByID)
	// ↓まだ試してない
	r.Gin.PUT("/articles", articleControler.UpdateArticleByID)
}

// corsMiddleware CORSの設定
func corsMiddleware() gin.HandlerFunc {
	return (cors.New(cors.Config{
		// アクセス許可するオリジン
		AllowOrigins: []string{
			"http://localhost:3000",
		},
		// アクセス許可するHTTPメソッド
		AllowMethods: []string{
			"POST",
			"GET",
			"PUT",
			"DELETE",
			"OPTION",
		},
		// 許可するHTTPリクエストヘッダ
		AllowHeaders: []string{
			"Access-Control-Allow-Credentials",
			"Access-Control-Allow-Headers",
			"Access-Control-Allow-Origin",
			"Content-Type",
			"Content-Length",
			"Accept-Encoding",
			"Authorization",
		},
		// cookieなどの情報を必要とするかどうか
		AllowCredentials: false,
		// preflightリクエストの結果をキャッシュする時間
		MaxAge: 24 * time.Hour,
	}))
}

func checkJWT() gin.HandlerFunc {
	return func(c *gin.Context) {
		jwtMid := *jwtMiddleware
		if err := jwtMid.CheckJWT; err != nil {
			c.AbortWithStatus(401)
		}

	}
}
