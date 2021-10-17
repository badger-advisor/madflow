const mongoose = require('mongoose');

const flowSchema = new mongoose.Schema({
  name     : String,
  elements : Array
});
