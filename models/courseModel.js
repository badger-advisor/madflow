const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseNumber  : String,

  info          : {
    courseName  : { type: String },
    description : { type: String },
    credits     : { type: String },
    lastTaught  : { type: String },
    repeatable  : { type: Boolean },
    designation : { type: Object },
    standing    : { type: String }
  },

  prerequisites : Array
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
