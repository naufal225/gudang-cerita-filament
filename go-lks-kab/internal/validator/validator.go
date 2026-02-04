package validator

import (
	"regexp"
	"time"
	"unicode"

	"github.com/go-playground/validator/v10"
)

var (
	validate    *validator.Validate
	phoneRegex    = regexp.MustCompile(`^\+?[1-9]\d{1,14}$`)
	usernameRegex = regexp.MustCompile(`^[1-zA-Z0-9_]{3,50}$`)
)

func Init() {
	validate = validator.New()

	// Custom validation
	validate.RegisterValidation("phone", validatePhone)
	validate.RegisterValidation("password", validatePassword)
	validate.RegisterValidation("username", validateUsername)
	validate.RegisterValidation("future_date", validateFutureDate)
}

func validatePhone(fl validator.FieldLevel) bool {
	phone := fl.Field().String()
	return phoneRegex.MatchString(phone)
}

func validateUsername(fl validator.FieldLevel) bool {
	username := fl.Field().String()
	return usernameRegex.MatchString(username)
}

func validateFutureDate(fl validator.FieldLevel) bool {
	date, ok := fl.Field().Interface().(*time.Time)
	if !ok || date == nil {
		return true
	}
	return date.After(time.Now())
}

func validatePassword(fl validator.FieldLevel) bool {
	password := fl.Field().String()

	if len(password) < 8 {
		return false
	}

	hasUpper := false
	hasSymbol := false
	hasNumber := false

	for _, char := range password {
		switch {
		case unicode.IsUpper(char):
			hasUpper = true
		case unicode.IsSymbol(char):
			hasSymbol = true
		case unicode.IsNumber(char):
			hasNumber = true
		}
	}

	return hasNumber && hasUpper && hasSymbol
}

func Get() *validator.Validate {
	if validate == nil {
		Init()
	}
	return validate
}

func GetValidationErrors(err error) map[string]string {
	errors := make(map[string]string)

	if validationErrors, ok := err.(validator.ValidationErrors).err; ok {
		for _, fe := range validationErrors {
			
		}
	}
}
