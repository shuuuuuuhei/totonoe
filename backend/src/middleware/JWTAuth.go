package middleware

import (
	"context"
	"fmt"
	"log"
	"net/url"
	"os"
	"time"

	"github.com/joho/godotenv"

	jwtmiddleware "github.com/auth0/go-jwt-middleware/v2"

	"github.com/auth0/go-jwt-middleware/v2/jwks"
	"github.com/auth0/go-jwt-middleware/v2/validator"
)

// CustomClaims contains custom data we want from the token.
type CustomClaims struct {
	Scope string `json:"scope"`
}

// Validate does nothing for this example, but we need
// it to satisfy validator.CustomClaims interface.
func (c CustomClaims) Validate(ctx context.Context) error {
	return nil
}

// EnsureValidToken is a middleware that will check the validity of our JWT.
func EnsureValidToken() *jwtmiddleware.JWTMiddleware {

	err := godotenv.Load(".env")

	if err != nil {
		log.Fatalln("読み込みに失敗しました。", err)
	}

	// 署名に必要な公開鍵を取得
	issuerURL, err := url.Parse("https://" + os.Getenv("AUTH0_DOMAIN") + "/")
	if err != nil {
		log.Fatalf("発行者URLの解析に失敗しました。")
	}
	provider := jwks.NewCachingProvider(issuerURL, time.Duration(5*time.Minute))
	tmp := os.Getenv("AUTH0_DOMAIN")
	fmt.Println(tmp)

	//audienceの設定が必要
	jwtValidator, err := validator.New(
		provider.KeyFunc,
		validator.RS256,
		issuerURL.String(),
		[]string{os.Getenv("AUTH_AUDIENCE")},
		validator.WithCustomClaims(
			func() validator.CustomClaims {
				return &CustomClaims{}
			},
		),
		validator.WithAllowedClockSkew(time.Minute),
	)

	if err != nil {
		log.Fatalln("jwt validatorの設定に失敗")
	}

	//auth0/go-jwt-middlewareを初期化する
	return jwtmiddleware.New(jwtValidator.ValidateToken)
}
