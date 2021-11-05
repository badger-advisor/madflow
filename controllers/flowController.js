const Flow = require('../models/flowModel');

const getFlowInfo = async (req, res) => {
  const { id } = req.body;

  try {
    const flow = await Flow.findById(id);
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
  const { name, elements, userGoogleID, major } = req.body;
  const newFlow = new Flow({
    name         : name,
    elements     : elements,
    userGoogleID : userGoogleID,
    major        : major
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

const removeFlow = async (req, res) => {
  const { id } = req.body;
  Flow.findOneAndDelete({ _id: id })
    .then(result => {
      res.json(result);
      console.log(result);
    })
    .catch(err => {
      res.status(404).json({ message: err.message });
      console.log('removeflow broke');
    });
};
module.exports = { getFlowInfo, createNewFlow, updateFlowElements, removeFlow };
