const express = require('express');
const router = express.Router();

const {
  getFlowInfo,
  createNewFlow,
  updateFlowElements,
  removeFlow
} = require('../controllers/flowController');

router.get('/:id', getFlowInfo);
// router.post('/:id', createNewFlow);

router.post('/updateElements', updateFlowElements);
router.delete('/:id', removeFlow);

module.exports = router;
