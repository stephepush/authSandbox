const express = require('express');
const session = require('express-session');


var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res, next) => {
    res.send('<h1>Hello Word (Sessions)</h1>')
});

app.listen(3000)