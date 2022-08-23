package server

import (
	"time"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"

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
	articleController := controller.Article{
		InputFactory:      interactor.NewArticleInputPort,
		OutputFactory:     presenter.NewArticleOutputport,
		RepositoryFactory: gateway.NewArticleRepository,
		Conn:              r.DB.Connection,
	}

	userController := controller.User{
		InputFactory:      interactor.NewUserInport,
		OutputFactory:     presenter.NewUserOutputPort,
		RepositoryFactory: gateway.NewUserRepository,
		Conn:              r.DB.Connection,
	}

	commentController := controller.Comment{
		InputFactory:      interactor.NewCommentInputport,
		OutputFactory:     presenter.NewCommentOutputPort,
		RepositoryFactory: gateway.NewCommentRepository,
		Conn:              r.DB.Connection,
	}

	prefectureController := controller.Prefecture{
		InputFactory:      interactor.NewPrefectureInputPort,
		OutputFactory:     presenter.NewPrefectureOutputPort,
		RepositoryFactory: gateway.NewPrefectureRepository,
		Conn:              r.DB.Connection,
	}

	facilityController := controller.Facility{
		InputFactory:  interactor.NewFacilityInputPort,
		OutputFactory: presenter.NewFacilityOutputPort,
		FacilityRepo:  gateway.NewFacilityRepository,
		Conn:          r.DB.Connection,
	}

	cityController := controller.City{
		InputFactory:  interactor.NewCityInputPort,
		OutputFactory: presenter.NewCityOutputPort,
		RepoFactory: gateway.NewCityRepository,
		Conn:       r.DB.Connection,
	}

	r.Gin.Use(corsMiddleware())

	store := cookie.NewStore([]byte("secret"))
	r.Gin.Use(sessions.Sessions("auth-session", store))

	r.Gin.GET("/articles", articleController.GetArticlesOrderByDate)

	// 都道府県取得
	r.Gin.GET("/prefecture", prefectureController.GetAllPrefecture)

	// 市町村取得
	r.Gin.GET("/prefecture/:prefectureID/cities", cityController.GetCitiesByPrefectureID)

	// 施設取得
	r.Gin.GET("/facility/:facilityID", facilityController.GetFacilityByID)

	// 記事取得
	r.Gin.GET("/facilities/:facilityID/articles", articleController.GetArticleByFacilityID)

	/**
	@description All Auth Route
	*/
	r.Gin.Use(corsMiddleware(), adapter.Wrap(jwtMiddleware.CheckJWT))

	// 記事
	r.Gin.GET("/users/:userID/articles/", articleController.GetArticlesByUserID)
	r.Gin.GET("/articles/:articleID", articleController.GetArticleByID)
	r.Gin.POST("/articles/new", articleController.CreateArticle)
	r.Gin.POST("/articles/:articleID/like", articleController.LikeArticle)
	r.Gin.DELETE("/articles/:articleID/like", articleController.DeleteLikedArtile)
	// ↓まだ試してない
	r.Gin.DELETE("/articles/:articleID", articleController.DeleteArticleByID)
	r.Gin.PUT("/articles", articleController.UpdateArticleByID)

	// ユーザー
	r.Gin.POST("/profile", userController.GetProfile)
	r.Gin.POST("/follow", userController.Follow)
	r.Gin.POST("/unfollow", userController.Unfollow)

	// 記事コメント
	r.Gin.GET("/articles/:articleID/comments", commentController.GetAllCommentsByArticleID)
	r.Gin.GET("/articles/:articleID/comments/:commentID", commentController.GetCommentsByArticleID)
	r.Gin.POST("/articles/:articleID/comments/new", commentController.CreateComment)
	r.Gin.DELETE("/articles/:articleID/comment/new", commentController.DeleteComment)

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
			"User-ID",
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
