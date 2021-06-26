const express = require('express')
const librosRouter = require('./routes/librosRouter')
const crearUsuario = require('./routes/crearUsuario')
const login = require('./routes/login')
const seguridadMiddleware = require('./middleware/seguridadMiddleware')

let app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.trace = []
    res.dump = () => {
        res.status(200).send(res.trace)
    }
    res.evaluarError = (err, statusOk) => {
        if (err) {
            res.status(500).send('hubo un error')
            return;
        }
        res.send(statusOk).end()
    }
    next()
})

app.use(seguridadMiddleware())

app.use('/', librosRouter)
app.use('/', crearUsuario)
app.use('/', login)

//// Routers

app.use((err, req, res, next)=>{
    res
    .status(500)
    .send(JSON.stringify(res.datosError))
})

app.use('/', (req, res) => {
    res
        .status(404)
        .send(JSON.stringify({message: 'service not found'}))
})

app.listen(3000, ()=>{
    console.log('listening...')
})