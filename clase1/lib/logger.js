const log4js = require('log4js')

log4js.configure({
    appenders: {
        archivo: { type: 'file', filename: '/var/log/clasearch' },
        consola: { type: 'stdout' }
    },
    categories : { default: {
        appenders: ['archivo', 'consola'], level: 'trace'
    }}
})

module.exports = z => log4js.getLogger(z)
