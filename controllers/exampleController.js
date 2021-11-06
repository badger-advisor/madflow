const User = require('../models/userModel');

const someFunction = async (req, res) => {
  const users = await User.find();
};

module.exports = {
  someFunction
  // otherFunction
};
