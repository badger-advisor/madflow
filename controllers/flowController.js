const Flow = require('../models/flowModel');

const getFlowInfo = async (req, res) => {
  const { flowID } = req.query;

  try {
    const flow = await Flow.findById(flowID);
    res.json(flow);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getAllUserFlows = async (req, res) => {
  const { googleId } = req.query;

  try {
    const flows = await Flow.find({ googleId: googleId });
    res.json({ flows });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateFlowElements = async (req, res) => {
  const { id, elements } = req.body;

  Flow.updateOne({ _id: id }, { $set: { elements } })
    .then(result => {
      res.json(result);
      // console.log('modified:', id);
    })
    .catch(err => {
      res.status(404).json({ message: err.message });
      console.log('updateFlowElements broke');
    });
};

const createNewFlow = async (req, res) => {
  const { name, elements, googleId, major } = req.body;

  const newFlow = new Flow({
    name,
    elements,
    googleId,
    major
  })
    .save()
    .then(newFlow => {
      // console.log('created new flow: ', newFlow);
      res.json({ flow: newFlow });
    })
    .catch(error => {
      // console.log('cannot create flow', error);
      res.json({ flow: '' });
    });
};

const removeFlow = async (req, res) => {
  const { id } = req.query;
  // console.log(`inside controller: ${id}`);

  Flow.findOneAndDelete({ _id: id })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).json({ message: err.message });
      console.log('removeflow broke');
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
      console.log(err);
      console.log('updateFlow broke');
    });
};

module.exports = {
  getFlowInfo,
  getAllUserFlows,
  createNewFlow,
  updateFlowElements,
  removeFlow,
  updateFlow
};
