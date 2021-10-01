const express = require('express');

const app = express();


app.use(middleware2) //order of middleware execution demostrated
app.use(middleware1)

function middleware1(req, res, next) {
    console.log('I am middleware1');
    next();
}

function middleware2(req, res, next) {
    console.log('I am middleware2');
    next();
}

function middleware3(req, res, next) {
    console.log('I am middleware3');
    next();
}

/* function standardExpressCallback(requestObject, responseObject, nextMiddleware) {
    console.log('I am the standard Express function')
    responseObject.send('<h1>Hello World</h1>')
} */

app.get('/', middleware3, (requestObject, responseObject, nextMiddleware) => {
    console.log('I am the standard Express function')
    responseObject.send('<h1>Hello World</h1>')
});

app.listen(3000);