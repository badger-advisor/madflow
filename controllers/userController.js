const User = require('../models/userModel');

const signIn = async (req, res) => {
  const users = await User.find();
};

const signOut = async (req, res) => {
  // signOut logic
};

const signUp = async (req, res) => {
  // signUp logic
};

/**
 * Simply a test request. !! WORKS
 * Call by sending post request to http://locathost:8080/user/testUser
 */
const insertTestUser = async (req, res) => {
  const testUser = new User({
    name   : 'Testing async again again',
    email  : 'new2@gmail.com',
    flows  : [ '44', 'xx' ],
    majors : [ 'ME' ]
  });

  try {
    const user = await testUser.save();

    res.status(201).json({
      status : 'success',
      data   : user
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  signIn,
  signOut,
  signUp,
  insertTestUser
  // otherFunction
};
