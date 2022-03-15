const express = require('express');
const router = express.Router();

const { deleteUser, currentUser } = require('../controllers/userController');

router.delete('/deleteUser', deleteUser);
router.get('/current', currentUser);

module.exports = router;
