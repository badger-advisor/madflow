const express = require('express');
const router = express.Router();

const { getFlowInfo } = require('../controllers/flowController');

router.get('/:id', getFlowInfo);

module.exports = router;
