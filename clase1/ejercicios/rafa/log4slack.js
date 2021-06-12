const logger = require('../../lib/logger')('ejemplo');
const { WebClient } = require('@slack/web-api');

logger.info('*****************************');
logger.info('I N I C I A   P R O G R A M A');
logger.info('*****************************');
logger.trace('traceador');
logger.debug('debug');
logger.info('log de info');
logger.warn('esto es un warning');
logger.error('esto es cuando ocurre un error');
logger.fatal('esto es cuando se esta por abortar un proceso');


// Pongo los tokens aquí pero no es su sitio
const token = 'xoxb-2153110014865-2165534037395-ya6nyjvRYcikandsAHCxajrA';
// const token = process.env.SLACK_BOT_TOKEN; // Éste sería el sitio bueno

const web = new WebClient(token);
const conversationId = 'logger-slack';

(async () => {
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there' });

  console.log('Message sent: ', res.ts);
})();
