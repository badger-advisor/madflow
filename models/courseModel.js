const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseInfo    : {
    type     : String,
    required : [ true, 'A course must have info' ],
    unique   : true
  },
  prerequisites : Array
});

const Course = mongoose.model('user', courseSchema);

module.exports(Course);
