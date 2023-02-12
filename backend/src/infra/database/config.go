package database

import "os"

//Config DB型宣言
type Config struct {
	DB struct {
		Production struct {
			Host     string
			Username string
			Password string
			DBName   string
		}
		Test struct {
			Host     string
			Username string
			Password string
			DBName   string
		}
	}
	Routing struct {
		Port string
	}
}

// NewConfig DB接続設定
func NewConfig() *Config {
	c := Config{}

	c.DB.Production.Host = os.Getenv("DB_HOST")
	c.DB.Production.Username = os.Getenv("DB_USER_NAME")
	c.DB.Production.Password = os.Getenv("DB_PASSWORD")
	c.DB.Production.DBName = os.Getenv("DB_NAME")
	c.Routing.Port = os.Getenv("DB_PORT")
	return &c
}
