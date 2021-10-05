const express = require('express');
const session = require('express-session');
const mysql2 = require('mysql2');
const MySQLStore = require('express-mysql-session')(session);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

//mysql db credentials
const options = {
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'hello',
    database: 'session_test'
}


const connection = mysql2.createPool(options).promise();
const sessionStore = new MySQLStore({}, connection);
//^ if you're wondering what connection refers to, look at line 20

//express-session session options
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}))

app.get('/', (req, res, next) => {
    console.log(req.session)
    if (req.session.viewCount) {
        req.session.viewCount = req.session.viewCount + 1;
    } else {
        req.session.viewCount = 1;
    }

    res.send(`<h1>You have visited this page ${req.session.viewCount} times.</h1>`)
});

app.listen(3000)