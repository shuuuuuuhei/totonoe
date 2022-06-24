package main

import (
	"main.go/infra/database"
	"main.go/infra/server"
)

func main() {
	db := database.NewDB()
	r := server.Init(db)
	r.Run()
}
