const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/userModel');

// set up enviromental variables
require('dotenv').config({ path: './.env' });

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  console.log(id);
  User.findOne({ googleId: id }).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL  : 'http://localhost:8080/auth/google/redirect',
      clientID     : process.env.GOOGLE_CLIENT_ID,
      clientSecret : process.env.GOOGLE_CLIENT_SECRET
    },
    (accessToken, refreshToken, profile, done) => {
      // check if user already exists in our own db
      User.findOne({ googleId: profile.id }).then(currentUser => {
        if (currentUser) {
          // already have this user
          console.log('user is: ', currentUser);
          done(null, currentUser);
        } else {
          // if not, create user in our db
          console.log('user is: ', profile);
          new User({
            googleId       : profile.id,
            name           : profile.displayName,
            email          : profile.emails[0].value,
            profilePicture : profile.photos[0].value,
            flows          : [],
            majors         : []
            // thumbnail : profile._json.image.url
          })
            .save()
            .then(newUser => {
              console.log('created new user: ', newUser);
              done(null, newUser);
            })
            .catch(error => {
              console.log('cannot create user', error);
            });
        }
      });
    }
  )
);
