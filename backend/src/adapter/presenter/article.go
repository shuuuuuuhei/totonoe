package presenter

import (
	"main.go/domain/model"
	"fmt"
	"main.go/usecase/port"
	"net/http"
)

// Article は型宣言
type Article struct{
	w http.ResponseWriter
}

// NewArticleOutputport output portを生成
// usercase.UserOutputPortを実装している
// 出力に関するアダプター
func NewArticleOutputport(w http.ResponseWriter) port.ArticleOutputPort {
	return &Article {
		w: w,
	}
}

// Render はArticle.Nameを出力する
func (a *Article) Render(article *model.Article) {
	a.w.WriteHeader(http.StatusOK)
	fmt.Fprint(a.w, article.Title)	
}

// RenderError はErrorを出力する
func (a *Article) RenderError(err error) {
	a.w.WriteHeader(http.StatusInternalServerError)
	fmt.Fprint(a.w, err)
}