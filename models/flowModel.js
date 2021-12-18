const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  name         : {
    type     : String,
    required : [ true, 'A flow must have a name' ],
    unique   : false
  },

  elements     : {
    type   : Array,
    unique : false
  },

  googleId     : {
    type     : String,
    required : [ true, 'A flow must have a user associated with it' ],
    unique   : false
  },

  major        : {
    type     : String,
    required : [ true, 'Each flow must have a major specified' ],
    unique   : false
  },

  createdAt    : {
    type    : Date,
    default : Date.now,
    unique  : false
  },

  lastModified : {
    type    : Date,
    default : Date.now,
    unique  : false
  }
});

const Flow = mongoose.model('Flow', flowSchema);

module.exports = Flow;
