const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const userRoute = require('./routes/userRoute');
const profileRoutes = require('./routes/profileRoutes');
const courseRoute = require('./routes/courseRoute');
const flowRoute = require('./routes/flowRoute');

// Just want the passport setup to run ONCE
require('./controllers/passport-setup');
// set up enviromental variables
require('dotenv').config();

// Create app
const app = express();

// Preventing cors error
app.use(cors());

// set up session cookies (10 DAYS)
app.use(
  cookieSession({
    maxAge : 10 * 24 * 60 * 60 * 1000,
    keys   : [ process.env.COOKIE_KEY ]
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
  mongoose.connect(db).then(() => {});
} catch (error) {
  console.log('Cannot connect to DB', error);
}

// set up routes
app.use('/auth', authRoutes);
app.use('/user', userRoute);
app.use('/profile', profileRoutes);
app.use('/course', courseRoute);
app.use('/flow', flowRoute);

// Serve app if in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
