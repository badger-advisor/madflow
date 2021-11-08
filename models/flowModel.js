const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  name     : {
    type     : String,
    required : [ true, 'A flow must have a name' ],
    unique   : true
  },
  // Since elements will have a bunch of different things in it
  // using type Array will initialize an array of [Mixed] types
  elements : Array,
  googleId : {
    type     : String,
    required : [ true, 'A flow must have a user associated with it' ]
  },
  major    : {
    type     : String,
    required : [ true, 'Each flow must have a major specified' ]
  }
});

const Flow = mongoose.model('Flow', flowSchema);

module.exports = Flow;
