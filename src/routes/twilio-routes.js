const router = require('express').Router();
const twilioController = require('../controllers/twilio-controller');

module.exports = function() {
  router.route('/received')
    .post(twilioController.postReceived);

  return router;
};
