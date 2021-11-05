const express = require('express');
const router = express.Router();

const {
  getFlowInfo,
  createNewFlow,
  updateFlowElements,
  updateFlow,
  removeFlow
} = require('../controllers/flowController');

router.get('/getFlow', getFlowInfo);

router.post('/newFlow', createNewFlow);
router.post('/update', updateFlow);
router.post('/updateElements', updateFlowElements);

router.delete('/removeFlow', removeFlow);

module.exports = router;
