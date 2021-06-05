const fs = require('fs')
const logger = require('./lib/logger')('promsesas')
const _ = require('underscore')

function crearPrommesa() {
    logger.info('creando promesa')
    return new Promise((resolve, reject)=>{
        logger.info('entra de inmediato')
        let nombreArchivo = '/var/log/archivito'
        let data = new Date().toString() + '\n'
        fs.appendFile(nombreArchivo, data, 'utf8', (err, res) => {
            if (err) {
                logger.error(err)
                reject(err)
                return
            }
            resolve(res)
        })
    })
}

;(async function() {
    for (let z of _.range(10)) {
        await crearPrommesa()
    }
})()
