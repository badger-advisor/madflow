const User = require('../models/userModel');

const signIn = async (req, res) => {
  User.findOne({ googleId: req.body.id }).then(currentUser => {
    if (currentUser) {
      // already have this user
      console.log('user is: ', currentUser);
      res.json({ user: currentUser });
    } else {
      // if not, create user in our db
      console.log('user does not exist');
      res.json({ user: '' });
    }
  });
};

const signOut = async (req, res) => {
  // signOut logic
};

const signUp = async (req, res) => {
  // signUp logic
  new User({
    googleId       : req.body.id,
    name           : req.body.displayName,
    email          : req.body.email,
    profilePicture : req.body.profilePicture,
    flows          : [],
    majors         : []
    // thumbnail : profile._json.image.url
  })
    .save()
    .then(newUser => {
      console.log('created new user: ', newUser);
      res.json({ user: newUser });
    })
    .catch(error => {
      console.log('cannot create user', error);
      res.json({ user: '' });
    });
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
