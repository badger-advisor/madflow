const express = require('express');
const router = express.Router();

const {
  getFlowInfo,
  createNewFlow,
  updateFlowElements,
  removeFlow
} = require('../controllers/flowController');

router.get('/getFlow', getFlowInfo);
// router.post('/:id', createNewFlow);
router.post('/newFlow', createNewFlow);

router.post('/updateElements', updateFlowElements);
router.delete('/removeFlow', removeFlow);

module.exports = router;
