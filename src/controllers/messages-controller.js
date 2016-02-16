const TwilioMessage = require('../models/twilio-message');
const moment = require('moment');

module.exports = {
  get(req, res) {
    TwilioMessage.find({}).lean().exec(function(err, results) {
      const messages = results.map((item) => {
        const msg = Object.assign({}, item);
        msg.createdAt = moment(item.createdAt).format('DD/MM/YY hh:mm:ss');
        return msg;
      });
      res.render('messages', {
        messages,
      });
    });
  },

  authMiddleware(req, res, next) {
    if (!req.user) {
      res.redirect('/');
    } else {
      return next();
    }
  }
};
