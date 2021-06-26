const jwtutil = require('../libapp/jwtutil')


let desautorizar = (res) => res.status(401).send('no autorizado')

function seguridadMiddleware(req, res, next) {
    let excluidos = ['/loginWeb',
    '/loginAPI',
    '/crearUsuario'].includes(req.url)

    if (excluidos) {
        next()
        return
    }

    if (!req.headers?.authorization) {
        return desautorizar(res)
    }

    let token = req.headers.authorization.replace('Bearer ','')

    let objResp = jwtutil.verificarToken(token)

    console.log(objResp)

    if (!objResp.valido) {
        return desautorizar(res)
    }

    next()
}

module.exports = () => seguridadMiddleware;