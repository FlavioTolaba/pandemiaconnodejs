const logger = require('../../lib/logger')('ejemplo');
const { WebClient } = require('@slack/web-api');
const token = require('./config').log4slackToken

logger.info('*****************************');
logger.info('I N I C I A   P R O G R A M A');
logger.info('*****************************');
logger.trace('traceador');
logger.debug('debug');
logger.info('log de info');
logger.warn('esto es un warning');
logger.error('esto es cuando ocurre un error');
logger.fatal('esto es cuando se esta por abortar un proceso');

const web = new WebClient(token);
const conversationId = 'logger-slack';

(async () => {
  const res = await web.chat.postMessage({ channel: conversationId, text: 'Hello there' });

  console.log('Message sent: ', res.ts);
})();
