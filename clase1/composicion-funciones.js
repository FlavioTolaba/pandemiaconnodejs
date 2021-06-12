/*
Se requiere una funcion que acepte dos parametros
una funcion de logger y un array 
y que se llame al logger por cada item del array
*/

const logger = require('./lib/logger')('composicion');

function logArray(logger, array) {
  for (item of array) {
    logger(`${item}`);
  }
}

logger.info('hola');
const info = z => logger.info(z);
logArray(console.log, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
logArray(info, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);

