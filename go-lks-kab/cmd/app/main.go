package main

import (
	"fmt"

	"github.com/naufal225/go-lks-kab/internal/config"
	"github.com/naufal225/go-lks-kab/internal/db"
)

func main() {
	cfg := config.Load();
	dbConn := db.Connect(cfg);

	fmt.Println("Berhasil menjalankan aplikais di ", cfg.AppPort, " database: ", dbConn);

}