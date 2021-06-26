const jwt = require('jsonwebtoken')
const jwtdecode = require('jwt-decode')
const SECRET = 'AzksyqlaiekspwkjscTF2233kalzaskeft'

let hora = () => Math.floor(new Date() / 1000)

function generarToken(usuario) {
    let payload = {
        sub: usuario,
        roles: ["ADMIN", "USER"]
    }
    let token = jwt.sign(payload, SECRET, {expiresIn: '300s'})

    return token
}

function verificarToken(token) {
    let objData = null

    console.log(jwtdecode(token))

    try {
        console.log(token)
        objData = jwt.verify(token, SECRET)
    }
    catch (err) {
        console.log(err)
        return {
            valido: false
        }
    }

    let objRet = {}
    objRet.valido = true
    objRet.vencido = (objData.exp < hora())
    objRet.roles = objData.roles

    return objRet
}

module.exports = {
    generarToken,
    verificarToken
}