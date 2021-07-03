const crontab = require('node-crontab')

let job = crontab.scheduleJob("*/1 10-11 * * 6", () => {
    console.log('arrancar el proceso: ' + Date.now())
})