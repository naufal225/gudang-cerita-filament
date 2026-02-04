package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	AppEnv    string
	AppPort   string
	DBHost    string
	DBPort    string
	DBName    string
	DBUser    string
	DBPass    string
	DBSSLMode string
	JWTSecret string
}

func Load() *Config {
	err := godotenv.Load();
	if err != nil {
		log.Println("File .env tidak ditemukan");
	}

	return &Config{
		AppEnv: getEnv("APP_ENV", "development"),
		AppPort: getEnv("APP_PORT", "8080"),
		DBHost: getEnv("DB_HOST", "postgres"),
		DBPort: getEnv("DB_PORT", "5432"),
		DBName: getEnv("DB_NAME", "lks-kab"),
		DBUser: getEnv("DB_USER", "postgres"),
		DBPass: getEnv("DB_PASS", "nma225"),
		DBSSLMode: getEnv("DB_SSLMode", "disable"),
		JWTSecret: getEnv("JWT_SECRET", "jewete secrithhshsfdhh2323929hfhhf 238293bfb"),
	}
}

func getEnv(key, fallback string) string {
	if val, ok := os.LookupEnv(key); ok {
		return val;
	}

	return fallback;
}
