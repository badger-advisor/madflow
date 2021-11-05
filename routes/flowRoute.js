const express = require('express');
const router = express.Router();
const {
  getFlowInfo,
  createNewFlow,
  updateFlowElements,
  updateFlow
} = require('../controllers/flowController');

router.get('/:id', getFlowInfo);
router.post('/newFlow', createNewFlow);
router.post('/update', updateFlow);
router.post('/updateElements', updateFlowElements);

module.exports = router;
