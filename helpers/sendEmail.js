require("dotenv").config();
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);

const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;
const mg = mailgun.client({
  username: "api",
  key: MAILGUN_API_KEY,
});

const sendEmail = async (data) => {
  const email = { ...data, from: "oksana@gmail.com" };
  await mg.messages.create(MAILGUN_DOMAIN, email);
};

module.exports = sendEmail;
