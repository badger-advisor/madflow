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

const updateFlowElements = async (req,res) => {
  console.log(req.query.elements);
    Flow.updateOne({_ids:req.query.id},{$set:{elements:JSON.parse(req.query.elements)}}).then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = { getFlowInfo,  };

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

module.exports = { getFlowInfo, createNewFlow, updateFlowElements };
