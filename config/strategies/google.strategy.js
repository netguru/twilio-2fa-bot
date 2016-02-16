const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../../src/models/user-model');

module.exports = function () {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_APP_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: `${process.env.DOMAIN}/auth/google/callback`,
      },
      function (req, accessToken, refreshToken, profile, done) {
        const query = {
            'google.id': profile.id
        };

        User.findOne(query, function (error, user) {
          if (user) {
            done(null, user);
          } else {
            const userObject = new User;
            userObject.email = profile.emails[0].value;
            userObject.displayName = profile.displayName;
            userObject.google = {};
            userObject.google.id = profile.id;
            userObject.google.token = accessToken;
            userObject.save(() => {
              done(null, userObject);
            });
          }
        })
      }
  ));
};
