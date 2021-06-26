const express = require('express')
const manejousuarios = require('../libapp/manejousuarios')
const jwtutil = require('../libapp/jwtutil')

const login = express.Router()

login.route('/loginWeb')
    .post((req, res) => {
        let {usuario, password} = req.body
        res.trace.push('usuario:' + usuario)
        res.trace.push('password:' + password)
        manejousuarios.verificarUsuario(usuario, password, (err) => {
            if (err) {
                res.status(401).send('No autorizado')
                return
            }

            res
            .status(200)
            .send({token: jwtutil.generarToken(usuario)})
        })
    })

login.route('/loginAPI')
    .post((req, res) => {

    })



module.exports = login;