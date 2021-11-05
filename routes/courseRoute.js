const express = require('express');
const router = express.Router();

const { getCourseInfo } = require('../controllers/courseController');

router.get('/getCourse', getCourseInfo);

module.exports = router;
