const logger = require('../../lib/logger')('ejemplo');
const { RTMClient, LogLevel } = require('@slack/rtm-api');

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

const token = 'xoxb-2153110014865-2177927982481-r7Q9r9nTe39Z7rzFET4EpGC6'; // Log4SlackClassic (formato clásico para usar RTM - Real Time Messaging)
// const token = process.env.SLACK_BOT_TOKEN; // Éste sería el sitio bueno

const rtm = new RTMClient(token, {
  logLevel: LogLevel.DEBUG
});

const reply = rtm.sendMessage('hola');

(async () => {
  await rtm.start();
})();
