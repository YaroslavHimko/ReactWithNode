// prod.js - production keys here
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  mailerKey: process.env.MAILER_KEY,
  emailFromAddress: process.env.EMAIL_FROM_ADDRESS,
  emailPassword: process.env.EMAIL_PASSWORD,
  redirectDomain: process.env.REDIRECT_DOMAIN
};
