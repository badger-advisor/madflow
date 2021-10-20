const mongoose = require('mongoose');

const nodeSchema = new mongoose.Schema({
  courseID : {
    type      : String,
    required  : true,
    lowercase : true
  },
  position : {
    x : { type: Number, default: 0 },
    y : { type: Number, default: 0 }
  }
});

const Node = mongoose.model('Node', nodeSchema);
module.exports = Node;
