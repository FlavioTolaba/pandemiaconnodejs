const express = require('express')

const librosRouter = express.Router()

librosRouter.route('/libros')
    .get((req, res) => {
        res
        .status(200)
        .send(JSON.stringify(['Cien años de soledad', 'Beggining node']))
    })
    .post((req, res) => {
        res.datosError = {
            status : 500,
            mensaje : 'Se produjo un error en el post libros'
        }
        throw new Error(res.datosError)
    })

module.exports = librosRouter