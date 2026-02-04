package model

import "time"

type Barang struct {
	IDBarang   uint   `json:"id_barang" gorm:"primaryKey;column:id_barang;autoInrement"`
	KodeBarang string `json:"kode_barang" gorm:"type:varchar(50);column:kode_barang;unique;not null"`
	NamaBarang string `json:"nama_barang" gorm:"type:varchar(50);column:nama_barang;not null"`

	// Gunakan *time.Time (time dengan pointer) agar bisa bernilai null di database

	ExpiredDate *time.Time `json:"expired_date" gorm:"type:date;column:expired_date;"`

	// big int dengan int64 untuk nilai angka yang besar

	JumlahBarang int64  `json:"jumlah_barang" gorm:"column:jumlah_barang;default:0"`
	Satuan       string `json:"satuan" gorm:"type:varchar(50);column:satuan;not null"`
	HargaSatuan  int64  `json:"harga_satuan" gorm:"column:harga_satuan;default:0"`

	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
	
	Transaksi []Transaksi `json:"-" gorm:"foreignKey:IDBarang"`
}
