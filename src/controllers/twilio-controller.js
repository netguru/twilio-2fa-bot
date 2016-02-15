const Slack = require('slack-node');

const token = process.env.SLACK_TOKEN || '';
const slackChannel = process.env.SLACK_CHANNEL || '#general';

const slackClient = new Slack(token);

module.exports = {
  postReceived: function(req, res) {
    const sms = req.body;
    const smsContent = sms.Body;
    const smsSender = sms.From;

    slackClient.api('chat.postMessage', {
      text: `Twilio message: ${smsContent} -- from ${smsSender}`,
      channel: slackChannel,
    }, function(err, response) {
      if (err) {
        console.error(err);
      }
    });

    res.status(204).send();
  }
};
