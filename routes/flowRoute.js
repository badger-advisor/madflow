const express = require('express');
const router = express.Router();

const { getFlowInfo, updateFlowElements } = require('../controllers/flowController');

router.get('/:id', getFlowInfo);

router.post('/updateElements', updateFlowElements);

module.exports = router;
