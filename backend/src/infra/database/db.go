package database

import (
	"strconv"
	"fmt"
	"log"
	"os"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
	"main.go/domain/model"
)

// DB 型宣言
type DB struct {
	Host       string
	UserName   string
	Password   string
	DBName     string
	Connection *gorm.DB
}

// NewDB DB設定を受け取り、DB接続を組立てる
func NewDB() *DB {
	c := NewConfig()
	return newDB(&DB{
		Host:     c.DB.Production.Host,
		UserName: c.DB.Production.Username,
		Password: c.DB.Production.Password,
		DBName:   c.DB.Production.DBName,
	})
}

func newDB(d *DB) *DB {
	dsn := d.UserName + "://" + d.Password + "@" + d.Host + "/" + d.DBName + "?sslmode=disable"
	newLogger := createNewLogger()
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
		Logger: logger.Default.LogMode(logger.Silent),
	})
	if err != nil {
		panic(err.Error())
	}
	db.Session(&gorm.Session{Logger: newLogger})
	d.Connection = db
	return d
}

func createNewLogger() logger.Interface {
	return (logger.New(
		log.New(os.Stdout, "\r\n", log.LstdFlags), // io writer
		logger.Config{
			SlowThreshold:             time.Second,   // Slow SQL threshold
			LogLevel:                  logger.Info, // Log level
			IgnoreRecordNotFoundError: true,          // Ignore ErrRecordNotFound error for logger
			Colorful:                  false,         // Disable color
		},
	))
}

// DBMigrate DBマイグレーションを行う
func (d *DB) DBMigrate() {
	err := d.Connection.Migrator().DropTable(model.User{}, model.Profile{}, model.Article{}, model.Sauna{}, model.UserRelationShips{}, model.Comment{}, model.ArticleLike{})
	fmt.Println("delete: ", err)
	err = d.Connection.AutoMigrate(model.User{}, model.Profile{}, model.Article{}, model.Sauna{}, model.UserRelationShips{}, model.Comment{}, model.ArticleLike{})
	fmt.Println("migrate: ",err)
}

// CreateData サンプルデータ作成
func (d *DB) CreateData() {
	for i := 1; i <= 10; i++ {
		user := model.User{}
		user.UserID = strconv.Itoa(i)
		user.Email = "aaa@test.com"
		user.Name = "test"
		user.Profile.UserID = user.UserID
		d.Connection.Create(&user)
	}
}