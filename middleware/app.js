const express = require('express');

const app = express();

app.use(middleware1) /*middleware1 becomes a middleware of the global scope*/
app.use(middleware2)

function middleware1(req, res, next) {
    console.log('I am middleware1');
    next();
}

function middleware2(req, res, next) {
    console.log('I am middleware2');
    next();
}


function standardExpressCallback(requestObject, responseObject, nextMiddleware) {
    console.log('I am the standard Express function')
    responseObject.send('<h1>Hello World</h1>')
}

app.get('/', standardExpressCallback);

app.listen(3000);