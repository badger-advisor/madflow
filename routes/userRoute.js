const express = require('express');
const router = express.Router();

const { signIn, signUp, signOut, insertTestUser } = require('../controllers/userController');

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/testUser', insertTestUser);

module.exports = router;
