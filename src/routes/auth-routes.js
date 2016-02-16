const router = require('express').Router();
const passport = require('passport');

module.exports = function() {
  const authenticateConfig = {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  };
  if (process.env.EMAIL_DOMAIN_RESTRICTION) {
    authenticateConfig.hd = process.env.EMAIL_DOMAIN_RESTRICTION;
  }

  router.route('/google/callback')
    .get(passport.authenticate('google', {
      successRedirect: '/messages',
      failure: '/'
    }));

  router.route('/google')
    .get(passport.authenticate('google', authenticateConfig));

  return router;
};
