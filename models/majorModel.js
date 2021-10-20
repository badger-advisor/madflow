const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
  name    : {
    type     : String,
    required : [ true, 'A major must have a name' ],
    unique   : true
  },

  courses : Array
});

const Major = mongoose.model('user', majorSchema);

module.exports(Major);
