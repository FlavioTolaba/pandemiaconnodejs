const fs = require('fs')
const logger = require('./lib/logger')('promisegenerica')
const _ = require('underscore')

function crearPrommesa(fn) {
    return new Promise((resolve, reject)=>{
        fn((err, res) => {
            if (err) {
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

;(async function() {
    for (let z of _.range(10)) {
        try {
            let fn = _.partial(fs.appendFile, '/var/log/curry', 'datos', 'utf8')
            await crearPrommesa(fn)
        }
        catch (err) {
            logger.error(err)
        }
    }
})()

