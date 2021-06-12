import express from 'express';
import { stringify } from 'querystring';
import { base64ToStr, strToBase64 } from './utils/base64';

const app = express();

app.get('/', (req, res) => {
  const auth = req.header('Authorization');
  if (!auth) {
    res.send('no ok');
    return;
  }
  console.log(strToBase64('fab:rizio'));

  const str = base64ToStr(auth.replace('Basic ', ''));

  const [usuario, ...passwordArray] = str.split(':');
  const password = passwordArray.join(':');

  console.log('usuario:', usuario);
  console.log('password:', password);
  res.send('ok');
});

app.listen(3000, () => console.log('server running'));
