const mongoose = require('mongoose');

module.exports = function() {
  mongoose.connect('mongodb://localhost/twilio-2fa-bot');
};
