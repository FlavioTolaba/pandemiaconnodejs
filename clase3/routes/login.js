const express = require('express')
const manejousuarios = require('../libapp/manejousuarios')

const login = express.Router()

login.route('/loginWeb')
    .post((req, res) => {
        let {usuario, password} = req.body
        res.trace.push('usuario:' + usuario)
        res.trace.push('password:' + password)
        manejousuarios.verificarUsuario(usuario, password, (err) => {
            console.log(err)
            res.evaluarError(err, 200)
        })
    })

login.route('/loginAPI')
    .post((req, res) => {

    })



module.exports = login;