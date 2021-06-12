const {SHA256, SHA384} = require('sha2');

const pass = process.argv[2];
const salt = '4491fe6c-f47a-41b3-9f5d-077190d211b9'

const guardar = SHA256(pass+salt)
const hexdata = new Buffer(guardar, 'ascii').toString('hex');

console.log(hexdata)

