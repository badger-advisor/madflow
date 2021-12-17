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
    const flows = await Flow.find({ googleId });
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
      // console.log('updateFlowElements broke');
    });
};

const createNewFlow = async (req, res) => {
  const { name, elements, googleId, major } = req.body;
  // object to insert
  const flow = new Flow({ name, elements, googleId, major });

  try {
    const findDup = await Flow.find({ googleId, name });
    // search for dups for the same person
    if (findDup.length > 0) throw 'duplicate flow';

    // Insert new flow
    const newFlow = await flow.save();
    res.json({ flow: newFlow });
  } catch (err) {
    console.log(err);
    res.status(400).send(new Error('Insert flow broke'));
  }
};

const removeFlow = async (req, res) => {
  const { id } = req.query;
  // console.log(`inside controller: ${id}`);

  Flow.findOneAndDelete({ _id: id })
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(404).send({ error: 'Removing flow broke!' });
    });
};

const updateFlow = async (req, res) => {
  const { id, changes } = req.body;

  Flow.updateOne({ _id: id }, { $set: changes })
    .then(result => {
      res.json(result);
      // console.log(result);
    })
    .catch(err => {
      res.status(400).send({ error: 'Updating flow name broke' });
      // console.log(err);
      // console.log('updateFlow broke');
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
