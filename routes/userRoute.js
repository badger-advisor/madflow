const express = require('express');
const router = express.Router();

const { deleteUser, currentUser } = require('../controllers/userController');

router.post('/deleteUser', deleteUser);
router.get('/current', currentUser);

module.exports = router;
