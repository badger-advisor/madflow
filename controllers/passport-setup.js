const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

// set up enviromental variables
require('dotenv').config({ path: './.env' });

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL  : '/auth/google/redirect',
      clientID     : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET,
      proxy        : true
    },
    async (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our own db
      const existingUser = await User.findOne({ googleId: profile.id });

      // already have this user
      if (existingUser) {
        return done(null, existingUser);
      }

      // if not, create user in our db
      const newUser = await User({
        googleId       : profile.id,
        name           : profile.displayName,
        email          : profile.emails[0].value,
        profilePicture : profile.photos[0].value
      }).save();
      done(null, newUser);
    }
  )
);
