package common

import (
	"net/smtp"
)

type Mail struct {
	From     string
	UserName string
	Password string
	To       string
	Sub      string
	Message  string
}

func (m Mail) body() string {
	return "To: " + m.To + "\r\n" +
		"Subject: " + m.Sub + "\r\n\r\n" +
		m.Message + "\r\n"
}

/*
	メール送信処理
*/
func (m Mail) SendMailToUser() error {
	smtpSvr := "smtp.gmail.com:587"
	auth := smtp.PlainAuth("", m.UserName, m.Password, "smtp.gmail.com")
	if err := smtp.SendMail(smtpSvr, auth, m.From, []string{m.To}, []byte(m.body())); err != nil {
		return err
	}
	return nil
}
