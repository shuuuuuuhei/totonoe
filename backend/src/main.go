package main

import (
	"main.go/infra/database"
	"main.go/infra/server"
)

func main() {
	db := database.NewDB()
	// db.DBMigrate()
	// db.CreateData()
	r := server.Init(db)
	r.Run()
}
