var express = require('express');
var router = express.Router();

var twilioController = require('../controllers/twilio-controller');

module.exports = function() {
  router.route('/received')
    .post(twilioController.postReceived);

  return router;
};
