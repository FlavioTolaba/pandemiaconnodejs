const logger = require('../../lib/logger')('ejemplo');
const { RTMClient, LogLevel } = require('@slack/rtm-api');
const token = require('./config').log4slackclassicToken

logger.info('*****************************');
logger.info('I N I C I A   P R O G R A M A');
logger.info('*****************************');
logger.trace('traceador');
logger.debug('debug');
logger.info('log de info');
logger.warn('esto es un warning');
logger.error('esto es cuando ocurre un error');
logger.fatal('esto es cuando se esta por abortar un proceso');

const rtm = new RTMClient(token, {
  logLevel: LogLevel.DEBUG
});

const reply = rtm.sendMessage('hola');

(async () => {
  await rtm.start();
})();
