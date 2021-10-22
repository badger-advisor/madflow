const Course = require('../models/courseModel');

const getCourseInfo = async (req, res) => {
  const courseNumber = req.params.courseNumber;

  try {
    const course = await Course.findOne({ courseNumber });
    res.json(course);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getCourseInfo };
