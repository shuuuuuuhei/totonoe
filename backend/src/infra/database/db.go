package database

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
	"main.go/model"
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
			SlowThreshold:             time.Second, // Slow SQL threshold
			LogLevel:                  logger.Info, // Log level
			IgnoreRecordNotFoundError: true,        // Ignore ErrRecordNotFound error for logger
			Colorful:                  false,       // Disable color
		},
	))
}

// DBMigrate DBマイグレーションを行う
func (d *DB) DBMigrate() {
	err := d.Connection.Migrator().DropTable(model.User{}, model.Profile{}, model.Article{}, model.Sauna{}, model.Comment{}, model.ArticleLike{}, model.UserRelationShip{})
	fmt.Println("delete: ", err)
	err = d.Connection.AutoMigrate(model.User{}, model.Profile{}, model.Article{}, model.Sauna{}, model.Comment{}, model.ArticleLike{})
	fmt.Println("migrate: ", err)
}

// CreateData サンプルデータ作成
func (d *DB) CreateData() {
	fmt.Println("----start create db----")
	user := model.User{}
	user.Email = "aaa@test.com"
	user.Name = "test"
	user.ID = "103026814924860204848"
	if err := d.Connection.Create(&user).Error; err != nil {
		fmt.Println(err)
		return
	}

	profile := model.Profile{}
	profile.NickName = "test"
	profile.Introduction = "こんちは"
	profile.UserID = user.ID
	if err := d.Connection.Create(&profile).Error; err != nil {
		fmt.Println(err)
		return
	}

	sauna := model.Sauna{Name: "test"}

	if err := d.Connection.Create(&sauna).Error; err != nil {
		fmt.Println(err)
		return
	}

	tmpUser := model.User{}
	tmpUser.ID = "test"
	tmpUser.Email = "bbb@test.com"
	tmpUser.Name = "test_2"
	if err := d.Connection.Create(&tmpUser).Error; err != nil {
		fmt.Println(err)
		return
	}

	if err := d.Connection.Create(&model.UserRelationShip{UserID: user.ID, FollowingID: tmpUser.ID}).Error; err != nil {
		fmt.Println(err)
		return
	}

	for i := 0; i < 10; i++ {
		article := model.Article{}
		article.Title = "test_" + strconv.Itoa(i)
		article.Content = "content_" + strconv.Itoa(i)
		article.SaunaID = sauna.ID
		article.UserID = user.ID
		if err := d.Connection.Create(&article).Error; err != nil {
			fmt.Println(err)
			return
		}
		likes := model.ArticleLike{}
		likes.ArticleID = article.ID
		likes.UserID = tmpUser.ID
		if err := d.Connection.Create(&likes).Error; err != nil {
			fmt.Println(err)
			return
		}
	}
	fmt.Println("Create Data")
}
