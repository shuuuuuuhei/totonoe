package main

import (
	"main.go/infra"
)

func main() {
	db := infra.NewDB()
	r := infra.Init(db)
	r.Run()
}
