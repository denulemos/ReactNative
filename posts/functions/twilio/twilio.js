const twilio = require('twilio');
//Se utilizan variables de entorno https://www.twilio.com/console 
//Sin configurar para GIT
var accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
 
const client = twilio(accountSid, authToken, { 
    lazyLoading: true 
});

module.exports = client;