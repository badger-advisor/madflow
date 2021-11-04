const express = require('express');
const router = express.Router();

const { getFlowInfo, createNewFlow, updateFlowElements } = require('../controllers/flowController');

router.get('/:id', getFlowInfo);
router.post('/:id', createNewFlow);

router.post('/updateElements', updateFlowElements);

module.exports = router;
