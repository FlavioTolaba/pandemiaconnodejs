const express = require("express");
const app = express();

const port = process.env.APP_PORT || 3001;

app.post('/login', (req, res) => {

    let autorization = req.headers.authorization.split(' ')[1]

    const credentials = Buffer.from(autorization, 'base64').toString('ascii');

    res.send(credentials)
})


app.listen(port, () => console.log("server corriendo en " + port));
