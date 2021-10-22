const express = require('express');
const router = express.Router();

const { getCourseInfo } = require('../controllers/courseController');

router.get('/:courseNumber', getCourseInfo);

module.exports = router;
