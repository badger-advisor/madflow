const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseInfo    : {
    type     : String,
    required : [ true, 'A course must have info' ],
    unique   : true
  },
  prerequisites : Array
});

<<<<<<< HEAD:server/models/courseModel.js
const Course = mongoose.model('course', courseSchema);
=======
const Course = mongoose.model('Course', courseSchema);
>>>>>>> db3eda66535c88d0ce76e45f0ba12dc1b65facfe:models/courseModel.js

module.exports = Course;
