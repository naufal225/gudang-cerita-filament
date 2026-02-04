package model

type Pelanggan struct {
	IDPelanggan uint   `json:"id_pelanggan" gorm:"column:id_pelanggan;primaryKey;autoIncrement"`
	Nama        string `json:"nama" gorm:"type:varchar(50);column:nama;not null"`
	Telepon     string `json:"telepon" gorm:"type:varchar(50);column:telepon;unique;not null"`

	Transaksi []Transaksi `json:"-" gorm:"foreignKey:IDPelanggan"`
}
