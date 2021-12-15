const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  name         : {
    type     : String,
    required : [ true, 'A flow must have a name' ]
  },

  elements     : Array,
  googleId     : {
    type     : String,
    required : [ true, 'A flow must have a user associated with it' ]
  },
  major        : {
    type     : String,
    required : [ true, 'Each flow must have a major specified' ]
  },
  createdAt    : {
    type    : Date,
    default : Date.now
  },
  lastModified : {
    type    : Date,
    default : Date.now
  }
});

const Flow = mongoose.model('Flow', flowSchema);

module.exports = Flow;
