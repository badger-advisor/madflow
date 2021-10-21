const router = require('express').Router();
const passport = require('passport');

const User = require('../models/userModel');

router.get('/', (req, res) => {
  var user = new User({
    name   : 'jastes',
    email  : 'jastest@123.com',
    flows  : [],
    majors : []
  });
  user.save(function(err, user) {
    if (err) return console.error(err);
    console.log(user.name + ' saved to bookstore collection.');
  });
});

module.exports = router;
