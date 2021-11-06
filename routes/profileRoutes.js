const router = require('express').Router();

const authCheck = (req, res, next) => {
  if (!req.user) {
    console.log(`error checking profile`);
    console.log(req);
    res.redirect('/auth/login');
  } else {
    console.log(`user exists`);
    next();
  }
};

router.get('/', authCheck, (req, res) => {
  res.send(JSON.stringify({ user: req.user }));
  //res.json({ user: req.user });
});

module.exports = router;
