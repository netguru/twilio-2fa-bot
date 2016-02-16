const express = require('express');
const passport = require('passport');
const router = express.Router();

module.exports = function() {
  router.route('/google/callback')
    .get(passport.authenticate('google', {
      successRedirect: '/messages',
      failure: '/'
    }));

  router.route('/google')
    .get(passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ],
      hd: 'netguru.pl',
    }));

  return router;
};
