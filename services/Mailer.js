const keys = require("../config/keys");
const nodemailer = require("nodemailer");
const mailgun = require("nodemailer-mailgun-transport");

class Mailer {
  constructor({ subject, recipients }, content) {
    const auth = {
      auth: {
        api_key: keys.mailgunApiKey,
        domain: keys.mailgunDomain,
      },
    };
    this.transporter = nodemailer.createTransport(mailgun(auth));

    this.data = {
      from: keys.emailFromAddress,
      to: this.formatRecipients(recipients),
      subject: subject,
      html: content,
    };
  }

  async send() {
    const response = this.transporter.sendMail(this.data, function (
      error
    ) {
      if (error) {
        console.log(error);
      }
    });
    return response;
  }

  formatRecipients(recipients) {
    return recipients.map(({ email }) => {
      return email;
    });
  }
}

module.exports = Mailer;
