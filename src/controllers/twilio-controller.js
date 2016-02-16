const postNotification = require('../integrations/slack').postNotification;
const TwilioMessage = require('../models/twilio-message');

module.exports = {
  postReceived: function(req, res) {
    const sms = req.body;
    const smsContent = sms.Body;
    const smsSender = sms.From;

    const twilioMessage = new TwilioMessage;
    twilioMessage.content = smsContent;
    twilioMessage.sender = smsSender;

    twilioMessage.save((err) => {
      if (err) console.error('Twilio Message create error!');

      postNotification(`New Twilio message from ${smsSender}`);
      res.status(204).send();
    });
  }
};
