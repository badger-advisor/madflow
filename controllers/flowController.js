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

const updateFlowElements = async (req,res) => {
  console.log(req.query.elements);
    Flow.updateOne({_ids:req.query.id},{$set:{elements:JSON.parse(req.query.elements)}}).then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
}

module.exports = { getFlowInfo, updateFlowElements };
