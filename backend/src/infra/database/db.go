package database

import (
	"database/sql"
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"main.go/model/Domain"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
	"gorm.io/gorm/schema"
)

// DB 型宣言
type DB struct {
	Host       string
	UserName   string
	Password   string
	DBName     string
	Port       string
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
		Port:     c.Routing.Port,
	})
}

func newDB(d *DB) *DB {
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=disable", d.Host, d.UserName, d.Password, d.DBName, d.Port)
	fmt.Println(dsn)
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
	err := d.Connection.Migrator().DropTable(Domain.User{}, Domain.Article{}, Domain.Facility{}, Domain.Comment{}, Domain.ArticleLike{}, Domain.UserRelationShip{}, Domain.Sauna{}, Domain.WaterBath{}, Domain.Address{}, Domain.Authorization{})
	fmt.Println("delete: ", err)
	err = d.Connection.AutoMigrate(Domain.Facility{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.User{})
	fmt.Println("migrate: ", err)
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Article{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Comment{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.ArticleLike{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Address{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.City{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Prefecture{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Sauna{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.WaterBath{})
	fmt.Println("migrate: ", err)
	err = d.Connection.AutoMigrate(Domain.Authorization{})
	fmt.Println("migrate: ", err)
	fmt.Println("----db migrate done----")
}

// CreateData サンプルデータ作成
func (d *DB) CreateData() {
	fmt.Println("----start create db----")

	user := Domain.User{}
	user.Email = "aaa@test.com"
	user.Name = "test"
	user.ID = "103026814924860204848"
	user.Introduction = "サウナは月20回いきます！"
	if err := d.Connection.Create(&user).Error; err != nil {
		fmt.Println(err)
		return
	}

	authorization := Domain.Authorization{
		ID:             0,
		UserID:         user.ID,
		AuthKB:         "999",
		RequestStateKB: "0",
		RequestDate: sql.NullTime{
			Time:  time.Now(),
			Valid: false,
		},
		AppliedDate: sql.NullTime{
			Time:  time.Now(),
			Valid: false,
		},
		CreatedAt: time.Time{},
		UpdatedAt: time.Time{},
	}

	if err := d.Connection.Create(&authorization).Error; err != nil {
		fmt.Println(err)
		return
	}

	for i := 0; i < 100; i++ {
		user := Domain.User{}
		user.Email = "aaa@test.com"
		user.Name = "test" + strconv.Itoa(i)
		user.ID = strconv.Itoa(i)
		user.Introduction = "サウナは月20回いきます！"
		if err := d.Connection.Create(&user).Error; err != nil {
			fmt.Println(err)
			return
		}

		authorization := Domain.Authorization{
			UserID:         user.ID,
			AuthKB:         "0",
			RequestStateKB: "1",
			RequestDate: sql.NullTime{
				Time:  time.Now(),
				Valid: true,
			},
			AppliedDate: sql.NullTime{
				Time:  time.Time{},
				Valid: false,
			},
			CreatedAt: time.Time{},
			UpdatedAt: time.Time{},
		}

		if err := d.Connection.Create(&authorization).Error; err != nil {
			fmt.Println(err)
			return
		}
	}

	cityList := []Domain.City{}
	d.Connection.Debug().Table("prefecture").Select("prefecture.id AS prefecture_id, city.id AS ID").Joins("left join city on city.prefecture_id = prefecture.id").Scan(&cityList)

	for i := 0; i < len(cityList); i++ {
		facility := Domain.Facility{
			Name:            "test",
			Tel:             "0000-1234-67890",
			Price:           1000,
			LodgingFlg:      "1",
			RestaurantFlg:   "0",
			WorkingSpaceFlg: "1",
			BooksFlg:        "1",
			HeatWaveFlg:     "1",
			AirBathFlg:      "1",
			BreakSpaceFlg:   "0",
			WaterServerFlg:  "1",
		}
		if err := d.Connection.Create(&facility).Error; err != nil {
			fmt.Println(err)
			return
		}

		address := Domain.Address{
			FacilityID:   uint32(i + 1),
			CityID:       cityList[i].ID,
			PrefectureID: cityList[i].PrefectureID,
			StreetName:   "3-50-11",
		}
		if err := d.Connection.Create(&address).Error; err != nil {
			fmt.Println(err)
			return
		}

		for i := 0; i < 3; i++ {
			sauna := Domain.Sauna{}
			waterBath := Domain.WaterBath{}
			sauna.FacilityID = facility.ID
			sauna.Capacity = uint(i) * 10
			sauna.Temperature = i * 40
			sauna.SaunaType = 4
			waterBath.FacilityID = facility.ID
			waterBath.Capacity = uint(i) * 5
			waterBath.Temperature = i * 3
			sauna.BgmFlg = "0"
			sauna.RouryuFlg = "1"
			sauna.SaunaMatFlg = "1"
			sauna.TvFlg = "1"
			if err := d.Connection.Create(&sauna).Error; err != nil {
				fmt.Println(err)
				return
			}
			if err := d.Connection.Create(&waterBath).Error; err != nil {
				fmt.Println(err)
				return
			}
		}
	}

	tmpUser := Domain.User{}
	tmpUser.ID = "test"
	tmpUser.Email = "bbb@test.com"
	tmpUser.Name = "test_2"
	tmpUser.Introduction = "サウナは週4で通います！"
	if err := d.Connection.Create(&tmpUser).Error; err != nil {
		fmt.Println(err)
		return
	}

	if err := d.Connection.Create(&Domain.UserRelationShip{UserID: user.ID, FollowingID: tmpUser.ID}).Error; err != nil {
		fmt.Println(err)
		return
	}

	for i := 0; i < 10; i++ {
		article := Domain.Article{}
		article.Content = "content_" + strconv.Itoa(i)
		article.FacilityID = 1
		article.UserID = user.ID
		article.AdmissionDate = time.Date(2022, 5, 20, 23, 59, 59, 0, time.UTC)
		if err := d.Connection.Create(&article).Error; err != nil {
			fmt.Println(err)
			return
		}
		likes := Domain.ArticleLike{}
		likes.ArticleID = article.ID
		likes.UserID = tmpUser.ID
		if err := d.Connection.Create(&likes).Error; err != nil {
			fmt.Println(err)
			return
		}

		comment := Domain.Comment{}
		comment.ArticleID = article.ID
		comment.Content = "comment_" + strconv.Itoa(i)
		comment.UserID = user.ID
		if err := d.Connection.Create(&comment).Error; err != nil {
			fmt.Println(err)
			return
		}

	}
	for i := 0; i < 10; i++ {
		article := Domain.Article{}
		article.Content = "content2_" + strconv.Itoa(i)
		article.FacilityID = 1
		article.UserID = tmpUser.ID
		article.AdmissionDate = time.Now()
		if err := d.Connection.Create(&article).Error; err != nil {
			fmt.Println(err)
			return
		}
		likes := Domain.ArticleLike{}
		likes.ArticleID = article.ID
		likes.UserID = user.ID
		if err := d.Connection.Create(&likes).Error; err != nil {
			fmt.Println(err)
			return
		}

		for i := 0; i < 10; i++ {
			comment := Domain.Comment{}
			comment.ArticleID = article.ID
			comment.Content = "comment_" + strconv.Itoa(i)
			comment.UserID = user.ID
			if err := d.Connection.Create(&comment).Error; err != nil {
				fmt.Println(err)
				return
			}
		}
	}
	fmt.Println("Create Data")
}
