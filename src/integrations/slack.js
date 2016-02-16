const Slack = require('slack-node');

const token = process.env.SLACK_TOKEN || '';
const slackChannel = process.env.SLACK_CHANNEL || '';

const slackClient = new Slack(token);

module.exports = {
  postNotification(msg) {
    slackClient.api('chat.postMessage', {
      text: msg,
      channel: slackChannel,
    }, function(err, response) {
      if (err) {
        console.error(err);
      }
    });
  },
};

