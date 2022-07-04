const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projetpweb'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
})
connection.end();





/*
app.get('/messages', (req, res) => {
    const messages = ["My very", "First", "Message"];
    res.send(messages);
});

app.listen(port, () => console.log('app running'));
*/
