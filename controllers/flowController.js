const Flow = require('../models/flowModel');

const getFlowInfo = async (req, res) => {
  const flowID = req.params.id;

  try {
    const flow = await Flow.findById(flowID);
    res.json(flow);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getFlowInfo };
