const log4js = require('log4js')
const token = require('../config/tokens').log4slackToken

log4js.configure({
    appenders: {
        archivo: { type: 'file', filename: '/var/log/clasearch' },
        consola: { type: 'stdout' },
        alerts: {
            type: '@log4js-node/slack',
            token,
            channel_id: 'logger-slack',
            username: 'log4slack'
        }
    },
    categories : { default: {
        appenders: ['archivo', 'consola', 'alerts'], level: 'trace'
    }}
})

module.exports = z => log4js.getLogger(z)
