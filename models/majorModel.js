const mongoose = require('mongoose');

const majorSchema = new mongoose.Schema({
  name    : {
    type     : String,
    required : [ true, 'A major must have a name' ],
    unique   : true
  },

  courses : Array
});

<<<<<<< HEAD:server/models/majorModel.js
const Major = mongoose.model('major', majorSchema);
=======
const Major = mongoose.model('Major', majorSchema);
>>>>>>> db3eda66535c88d0ce76e45f0ba12dc1b65facfe:models/majorModel.js

module.exports = Major;
