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

const updateFlowElements = async (req, res) => {
  const { id, elements } = req.body;

  Flow.updateOne({ _ids: id }, { $set: { elements } })
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      res.status(404).json({ message: err.message });
      console.log('updateFlowElements broke');
    });
};

const createNewFlow = async (req, res) => {
  const newFlow = new Flow({
    name         : req.body.name,
    elements     : req.body.elements,
    userGoogleID : req.body.googleId,
    major        : req.body.major
  })
    .save()
    .then(newFlow => {
      console.log('created new flow: ', newFlow);
      res.json({ flow: newFlow });
    })
    .catch(error => {
      console.log('cannot create flow', error);
      res.json({ flow: '' });
    });
};

const updateFlow = async (req, res) => {
  const { id, changes } = req.body;

  Flow.updateOne({ _id: id }, { $set: changes })
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      res.json(err);
      console.log('updateFlow broke');
    });
};

module.exports = { getFlowInfo, createNewFlow, updateFlowElements, updateFlow };
