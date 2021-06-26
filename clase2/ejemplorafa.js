const express = require('express');
const { SHA256 } = require('sha2');
const app = express();
const port = 3000;
const salt = '7591e9da-4ed4-4ec8-8759-73571e066ce4'

app.get('/', (req, res) => {
  const auth = req.header('Authorization');

  if (!auth) {
    res.send('Not ok');

    return;
  }

  const authData = auth.replace('Basic ', '');
  const buff = new Buffer.from(authData, 'base64');
  const [user, ...passwordArray] = buff.toString('ascii').split(':');
  const password = passwordArray.join(':');
  const salt = '4491fe6c-f47a-41b3-9f5d-077190d211b9';
  const passwordAndSalt = SHA256(password+salt);
  const hexData = new Buffer.from(passwordAndSalt, 'ascii').toString('hex');




  res.send(`
${authData} converted from Base64 to ASCII is User="${user}" Password="${password}"
Password+Salt="${passwordAndSalt}"
Password+Salt (hex)="${hexData}"
`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
