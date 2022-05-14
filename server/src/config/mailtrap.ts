import nodemailer from "nodemailer";

export default nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "e510718913d7af",
    pass: "348655c89d648a",
  },
});
