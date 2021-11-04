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
  const newFlow = new Flow({
    name         : req.query.name,
    elements     : req.query.elements,
    userGoogleID : req.query.googleId,
    major        : req.query.major
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
  Flow.updateOne({_id:req.query.id},{$set:JSON.parse(req.query.changes)}).then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = { getFlowInfo, createNewFlow, updateFlow };
