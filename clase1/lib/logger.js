const log4js = require('log4js')
require('dotenv').config();
// const token = require('../config/tokens').log4slackToken // Cogemos el token a través de `dotenv`

log4js.configure({
    appenders: {
        archivo: { type: 'file', filename: '/var/log/clasearch' },
        consola: { type: 'stdout' },
        alerts: {
            type: '@log4js-node/slack',
            token: process.env.LOG_FOR_SLACK_TOKEN,
            channel_id: 'logger-slack',
            username: 'log4slack'
        }
    },
    categories : { default: {
        appenders: ['archivo', 'consola', 'alerts'], level: 'trace'
    }}
})

module.exports = z => log4js.getLogger(z)
