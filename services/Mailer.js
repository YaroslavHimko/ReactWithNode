const keys = require("../config/keys");
const nodemailer = require('nodemailer');



class Mailer {
  constructor({ subject, recipients }, content) {

    this.transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: keys.emailFromAddress,
          pass: keys.emailPassword
        }
      });

    this.data = {
      from: "yaroslav.himko8@gmail.com",
      to: recipients,
      subject: subject,
      html: content,
    };
  }

  async send(){
    const response = this.transporter.sendMail(this.data, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      return response;
  }
}

module.exports = Mailer;
