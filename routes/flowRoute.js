const express = require('express');
const router = express.Router();

const { getFlowInfo, createNewFlow, updateFlow } = require('../controllers/flowController');

router.get('/:id', getFlowInfo);
router.post('/newFlow:id', createNewFlow);
router.post('/update', updateFlow);

module.exports = router;
