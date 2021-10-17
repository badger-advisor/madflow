const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name     : {
    type     : String,
    required : [ true, 'A flow must have a name' ],
    unique   : true
  },

  email : {
    type     : String,
    required : [ true, 'A flow must have a name' ],
    unique   : true
  }
  flows : Array,
  majors    : Array
});

const Flow = mongoose.model('user', userSchema);

module.exports(Flow);
