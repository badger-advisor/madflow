const Flow = require('../models/flowModel');

const getFlowInfo = async (req, res) => {
  const flowName = req.params.name;

  try {
    const flow = await Flow.findOne({ flowName });
    res.json(flow);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getFlowInfo };
