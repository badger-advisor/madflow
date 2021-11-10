const User = require('../models/userModel');

const deleteUser = async (req, res) => {
  const { googleId } = req.body;

  try {
    const user = await User.findOneAndDelete({ googleId });
    res.json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const currentUser = async (req, res) => {
  res.send(req.user);
};

module.exports = {
  deleteUser,
  currentUser
};
