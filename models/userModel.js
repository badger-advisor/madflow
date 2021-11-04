const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  googleId       : {
    type     : String,
    required : [ true, 'A user must have a google ID' ]
  },
  name           : {
    type     : String,
    required : [ true, 'A user must have a name' ]
  },

  email          : {
    type     : String,
    required : [ false, 'A user must have an email' ]
  },

  profilePicture : {
    type     : String,
    required : [ false, 'A user must have an email' ]
  },

  flows          : Array,

  majors         : Array
});

const User = mongoose.model('User', userSchema);

module.exports = User;
