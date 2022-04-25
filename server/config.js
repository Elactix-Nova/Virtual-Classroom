module.exports = {
  port: process.env.PORT || 3000,
  twilio: {
    accountSid: process.env.ACCOUNT_SID,
    apiKey: process.env.API_KEY_SID,
    apiSecret: process.env.API_KEY_SECRET,
  },
};
