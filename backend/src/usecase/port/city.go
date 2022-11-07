package port

import (
	"github.com/gin-gonic/gin"
	"main.go/model/ValueObject"
)

type CityInputport interface {
	GetCitiesByPrefectureID(*gin.Context)
	GetCityByPrefectureIDCityName(*gin.Context)
}

type CityOutputPort interface {
	RenderCities(*[]ValueObject.CityVO)
	RenderCity(*ValueObject.CityVO)
	RenderError(error)
}

type CityRepository interface {
	GetCitiesByPrefectureID(*gin.Context) (*[]ValueObject.CityVO, error)
	GetCityByPrefectureIDCityName(*gin.Context) (*ValueObject.CityVO, error)
}
