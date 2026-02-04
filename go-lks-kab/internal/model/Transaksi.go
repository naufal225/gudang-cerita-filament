package model

import "time"

type Transaksi struct {
	IDTransaksi uint `json:"id_transaksi" gorm:"column:id_transaksi;primaryKey;autoIncrement"`

	IDUser      uint `json:"id_user" gorm:"column:id_user;not null;index"`
	IDPelanggan uint `json:"id_pelanggan" gorm:"column:id_pelanggan;not null;index"`
	IDBarang    uint `json:"id_barang" gorm:"column:id_barang;not null;index"`

	NoTransaksi  string     `json:"no_transaksi" gorm:"type:varchar(50);column:no_transaksi;unique;not null"`
	TglTransaksi *time.Time `json:"tgl_transaksi" grom:"type:datetime;column:tgl_transaksi"`
	NamaKasir    string     `json:"nama_kasir" gorm:"type:varchar(50);column:nama_kasir"`
	TotalBayar   int64      `json:"total_bayar" gorm:"column:total_bayar"`

	User User `json:"-" gorm:"foreignKey:IDUser"`
	Pelanggan Pelanggan `json:"-" gorm:"foreignKey:IDPelanggan"`
	Barang Barang `json:"-" gorm:"foreignKey:IDBarang"`
}
