const MongoInterface = require('../lib/MongoInterface')
const uuid = require('uuid').v4
const sha2 = require('sha256')

function crearUsuario(usuario, password, onFinish) {
    let salt = uuid()
    let cryptPass = sha2([password, salt].join(''))

    let objIns = {
        idUsario : uuid(),
        usuario,
        salt,
        cryptPass
    }

    console.log(JSON.stringify(objIns))
    MongoInterface.insert(
        'arquitectura',
        'usuarios',
        objIns,
        onFinish)
}

function verificarUsuario(usuario, password, onFinish) {
    MongoInterface.query(
        'arquitectura',
        'usuarios',
        {usuario},
        (err, data) => {
            if (err) {
                onFinish(err)
                return
            }
            if (data.length === 0) {
                onFinish(new Error('Usuario inexistente'))
                return
            }

            console.log(data)

            let datoPersistido = data[0]

            let cryptPass = sha2([password,
                datoPersistido.salt].join(''))

            console.log(cryptPass)
            console.log(datoPersistido.cryptPass)

            if (cryptPass !== datoPersistido.cryptPass) {
                onFinish(new Error('Usuario inexistente'))
                return
            }

            onFinish()
        }
    )
}

module.exports = {
    crearUsuario,
    verificarUsuario
}