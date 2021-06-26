const express = require('express')
const manejousuarios = require('../libapp/manejousuarios')

const crearUsuario = express.Router()

crearUsuario.route('/crearUsuario')
    .post((req, res) => {
        let {usuario, password} = req.body
        res.trace.push('usuario:' + usuario)
        res.trace.push('password:' + password)
        manejousuarios.crearUsuario(usuario, password, (err) => {
            console.log(err)
            res.evaluarError(err, 201)
        })
    })

module.exports = crearUsuario

