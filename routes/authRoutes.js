// const db = require('../models');
const router = require('express').Router();
const passport = require('passport');


// const User = db.User;

// auth login
router.get('/login', (req, res) => {
  res.json({ user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// auth with google+
router.get(
  '/google',
  passport.authenticate('google', {
    scope : [ 'profile' ,'email']
  })

);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google', {
        failureRedirect: "/",
        successRedirect: "http://localhost:3000/dashboard",
    }), (req, res) => {
      res.json({ user: req.user });
});

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.redirect('/auth/login');
  } else {
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.json({ user: req.User });
});

module.exports = router;
