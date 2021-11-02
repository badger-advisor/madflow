const Flow = require('../models/flowModel');

const getFlowInfo = async (req, res) => {
  const flowID = req.params.flowID;

  try {
    const flow = await Flow.findById(flowID);
    res.json(flow);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createNewFlow = async (req, res) => {
  userID = req.params.userID;
  flowName = req.params.flowName;
  elements = req.params.elements;
  major = req.params.major;
  const newFlow = new Flow({
    name         : flowName,
    elements     : elements,
    userGoogleID : userID,
    major        : major
  });

  try {
    const flow = await newFlow.save();

    res.status(201).json({
      status : 'success',
      data   : flow
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = { getFlowInfo, createNewFlow };
