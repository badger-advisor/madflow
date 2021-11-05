const express = require('express');
const router = express.Router();

const { signIn, signUp, signOut, insertTestUser, deleteUser } = require('../controllers/userController');

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/testUser', insertTestUser);
router.post('/deleteUser', deleteUser);

module.exports = router;
