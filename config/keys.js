const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const dbURI = (module.exports = {
  google : {
    clientID     : '496579389191-gdm0p4livmc7bgt6msv1g053gjp8it89.apps.googleusercontent.com',
    clientSecret : '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'
  }
});
