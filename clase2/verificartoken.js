require('dotenv').config()
const redis = require('redis')

console.log(process.env.IP_REDIS)

const client = redis.createClient({
    host: process.env.IP_REDIS,
    port : 6379
})


client.on('error', (error)=>{ console.log(error) })

const NOMBRE_USUARIO = '123456789'

client.get(NOMBRE_USUARIO, (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
    client.quit(()=>{})
})

