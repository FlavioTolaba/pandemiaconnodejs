const { WebClient } = require('@slack/web-api');
const token = require('./config/tokens').log4slackToken
const web = new WebClient(token);
const conversationId = 'logger-slack';

(async () => {
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Mensaje de prueba' });

  console.log('Message sent: ', res.ts);
})();
