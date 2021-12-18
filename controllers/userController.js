const User = require('../models/userModel');
const Flow = require('../models/flowModel');

/**
 * Remove the user plus all flows associated
 */
const deleteUser = async (req, res) => {
  const { googleId } = req.query;

  try {
    // remove all flows
    await Flow.deleteMany({ googleId });

    // remove user
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
