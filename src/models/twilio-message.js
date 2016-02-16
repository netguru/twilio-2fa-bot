const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TwilioMessageSchema = Schema({
  content: {
      type: String
  },
  sender: {
      type: String
  },
}, { timestamps: true });

module.exports = mongoose.model('TwilioMessage', TwilioMessageSchema);
