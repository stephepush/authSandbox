const express = require('express');

const app = express();

//order of middleware execution demostrated:
//app.use(middleware2) 

function errorHandler(err, req, res, next) {
    res.json({ err: err });
}

function middleware1(req, res, next) {
    req.customProperty = 100;
    next();
}

function middleware2(req, res, next) {
    console.log(`The custom property value is: ${req.customProperty}`);
    req.customProperty = 600
    next();
}

/* function middleware3(req, res, next) {
    console.log('I am middleware3');
    next();
} */

/* function standardExpressCallback(requestObject, responseObject, nextMiddleware) {
    console.log('I am the standard Express function')
    responseObject.send('<h1>Hello World</h1>')
} */

app.use(middleware1)
app.use(middleware2)

/* function errorHandler (err, req, res, next) {
    if (err.status === )
} */

app.get('/', (req, res, next) => {
    res.send(`<h1>The value is: ${req.customProperty} </h1>`)
});


app.use(errorHandler)
    /*
        Place errorhandler middleware after all other middleware
        If there are any errors in any of the routes, 
        it will be passed to the final errorhandler middleware
    */
app.listen(3000);