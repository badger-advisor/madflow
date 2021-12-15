const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseNumber  : {
    type   : String,
    unique : true
  },

  info          : {
    courseName  : { type: String },
    description : { type: String },
    credits     : { type: String },
    lastTaught  : { type: String },
    repeatable  : { type: Boolean },
    designation : { type: Object },
    standing    : { type: String }
  },

  prerequisites : {
    courseList : { type: Array },
    text       : { type: String },
    logic      : { type: String }
  }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
