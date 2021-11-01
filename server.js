const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');
const flowRoute = require('./routes/flowRoute');
// const profileRoutes = require('./routes/profileRoutes');
// const insertUserRoutes = require('./routes/insertUserRoute');
const passportSetup = require('./config/passport-setup');

// set up enviromental variables
require('dotenv').config();
var cors = require('cors');
const corsOptions = {
  origin                             : 'http://localhost:8080',
  'Access-Control-Allow-Credentials' : true, //access-control-allow-credentials:true
  'Access-Control-Allow-Origin'      : '*', // update to match the domain you will make the request from
  'Access-Control-Allow-Headers'     : 'Origin, X-Requested-With, Content-Type, Accept',
  optionSuccessStatus                : 200
};

const app = express();

//! Don't know what this does either
// app.use(cors());

// set up session cookies
app.use(
  cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys   : [ 'key1' ] //! no idea how this works
    // keys   : [ keys.session.cookieKey ]
  })
);

// To Parse incoming requesrts with JSON payloads
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongodb
const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
try {
  mongoose.connect(db).then(() => console.log('DB connection successful!'));
} catch (error) {
  console.log('Cannot connect to DB', error);
}

// set up routes
app.use('/auth', authRoutes);
app.use('/user', userRoute);
app.use('/flow', flowRoute);
app.use(cors());
// app.use('/profile', profileRoutes);
// app.use('/insertUser', insertUserRoutes);

// create home route
app.get('/', (req, res) => {
  if (req.user) {
    res.json({ user: req.user });
  } else {
    const googleSignIn = "<a href='/auth/google'>Google</a>";
    res.send(`Welcome to MadFlow, please sign in, or sign up: ${googleSignIn}`);
  }
});

// Start server, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
});
