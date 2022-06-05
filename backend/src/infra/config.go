package infra

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

	c.DB.Production.Host = "localhost"
	c.DB.Production.Username = "postgres"
	c.DB.Production.Password = "postgres"
	c.DB.Production.DBName = "totonoe"
	c.Routing.Port = ":8080"
	return &c
}
