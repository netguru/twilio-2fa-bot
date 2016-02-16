const express = require('express');
const router = express.Router();

const twilioController = require('../controllers/twilio-controller');

module.exports = function() {
  router.route('/received')
    .post(twilioController.postReceived);

  return router;
};
