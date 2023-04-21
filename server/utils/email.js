import nodemailer from 'nodemailer';
import ejs from 'ejs';
import { htmlToText } from 'html-to-text';
import path from 'path';
const __dirname = path.resolve();

// new Email(user,url).sendWelcome();

class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name?.split(' ')[0] || 'user';
    this.url = url;
    this.from = `tour-drive : <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      // sendgrid
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      });
    }

    // for development environment
    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }
  // Send the actual Email
  async send(template, subject) {
    // 1) Render HTML based on a pug template
    const html = await ejs.renderFile(
      `${__dirname}/views/emails/${template}.ejs`,
      {
        name: this.firstName,
        email: this.to,
        btnUrl: this.url,
        password: 'test1234',
        url: this.url,
        subject,
      }
    );

    // 2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html,
      text: htmlToText(html, { wordwrap: null }),
    };

    // 3) Create a transport and send email

    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcomeEmail', 'Welcome to TourDrive Family');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token. (Valid only for 10 minutes)'
    );
  }
}

export { Email };
