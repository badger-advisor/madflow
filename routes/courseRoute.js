const express = require('express');
const router = express.Router();

const { getCourseInfo, getAllCourses } = require('../controllers/courseController');

router.get('/getCourse', getCourseInfo);
router.get('/all', getAllCourses);

module.exports = router;
