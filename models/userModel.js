const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name   : {
    type     : String,
    required : [ true, 'A user must have a name' ]
  },

  email  : {
    type     : String,
    required : [ true, 'A user must have an email' ],
    unique   : true
  },

  flows  : Array,

  majors : Array
});

const User = mongoose.model('User', userSchema);

module.exports(User);
