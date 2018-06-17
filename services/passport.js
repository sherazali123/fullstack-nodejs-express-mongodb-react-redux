const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// serialize user to help passport to set cookie on client
passport.serializeUser((user, done) => {
  // user serialized user as mongo id instead of googleId as
  // this may include other oauths as well like linkedIn, Facebook
  done(null, user.id);
});
// deserialize user from the id (serialized user)
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

// passport library know how to authenticate user but we need to tell or
// register new style of strategy which is google-oauth20 in our case
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        // user already exists with the given profile id from google
        // tell client that it's done without any error as param of done callback
        return done(null, existingUser);
      }
      // user doesn't exists, make new one!
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
