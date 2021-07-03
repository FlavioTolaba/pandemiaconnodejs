const mysql = require('mysql2');
const uuid = require('uuid').v4;
const express = require('express')
const http = require('http')

const app = express()
app.use(express.json())

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json')

    const connection = mysql.createConnection({
        host     : '167.71.60.132',
        user     : 'root',
        password : 'admin',
        database : 'clase4'
    });

    connection.connect((err)=>{
        if (err) {
            return;
        }
        let strInsert = ['INSERT ids (unid) values ', "('", uuid(), "');"].join('');
        console.log(strInsert);
        connection.query(strInsert, function (error, results, fields) {
            connection.end();
            response
                .status(200)
                .end()
        });
    });
})

app.listen(3000, (err) => {
    console.log(['escuchando el puerto', 3000].join(': '))
})