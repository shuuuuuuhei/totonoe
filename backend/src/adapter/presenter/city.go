package presenter

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
	"main.go/usecase/port"
)

type City struct {
	c *gin.Context
}

// RenderCity 市区町村情報をレスポンスする
func (c *City) RenderCity(city *ValueObject.CityVO) {
	c.c.JSON(http.StatusOK, city)
}

// RenderCities 市区町村リストをレスポンスする
func (c *City) RenderCities(city *[]ValueObject.CityVO) {
	c.c.JSON(http.StatusOK, city)
}

// RenderError エラーをレスポンスする
func (c *City) RenderError(err error) {
	fmt.Println(err)
	c.c.JSON(500, err)
}

func NewCityOutputPort(c *gin.Context) port.CityOutputPort {
	return &City{
		c: c,
	}
}
