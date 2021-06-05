const asyncForLoop = require('./lib/asyncforloop')

asyncForLoop(1000000, (nro, next, abort)=>{
    console.log('ingreso al bloque async: ' + nro)
    next()
}, err => {
    if (err) {
        console.log('Termino con error')
        console.log(err)
        siguiente()
        return
    }
    console.log('Termino naturalmente')
    siguiente()
})

function siguiente() {
    console.log('Siguiente....')
}