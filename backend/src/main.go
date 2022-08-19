package main

import (
	"main.go/infra/database"
)

func main() {
	db := database.NewDB()
	db.DBMigrate()
	db.CreateData()
	// r := server.Init(db)
	// r.Run()
}
