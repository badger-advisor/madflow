const express = require('express');
const router = express.Router();

const { getFlowInfo, createNewFlow } = require('../controllers/flowController');

router.get('/:id', getFlowInfo);
router.post('/:id', createNewFlow);

module.exports = router;
