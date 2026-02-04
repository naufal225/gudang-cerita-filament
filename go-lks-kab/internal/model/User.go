package model

import "time"

type User struct {
	IDUser   uint   `json:"id_user" gorm:"primaryKey;column:id_user;autoIncrement"`
	TipeUser string `json:"tipe_user" gorm:"type:varchar(50);column:tipe_user;not null"`
	Nama     string `json:"nama" gorm:"type:varchar(50);column:nama;not null"`
	Alamat   string `json:"alamat" gorm:"type:varchar(150);column:alamat;not null"`
	Username string `json:"username" gorm:"type:varchar(50);column:username;unique;not null"`
	Telepon  string `json:"telepon" gorm:"type:varchar(50);column:telepon;unique;not null"`

	Password string `json:"-" gorm:"type:varchar(255);column:password;not null"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`

	Transaksi []Transaksi `json:"-" gorm:"foreignKey:IDUser"`
}
