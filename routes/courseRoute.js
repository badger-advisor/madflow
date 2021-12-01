const express = require('express');
const router = express.Router();

const {
  getCourseInfo,
  getAllCourses,
  nukeCourse,
  insertAllCourses
} = require('../controllers/courseController');

router.get('/getCourse', getCourseInfo);
router.get('/all', getAllCourses);
router.get('/nuke', nukeCourse);
router.get('/insertCourses', insertAllCourses);

module.exports = router;
