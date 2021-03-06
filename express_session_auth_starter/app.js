const express = require('express');
const session = require('express-session');
const passport = require('passport');
const crypto = require('crypto')
const routes = require('./routes');
const connection = require('./config/database').connection

const MySQLStore = require('express-mysql-session')(session);

require('./config/passport');
//console.log(connection)
//console.log(User)

/**
 * -------------- GENERAL SETUP ----------------
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


/**
 * -------------- SESSION SETUP ----------------
 */
/*the values connection holds are promisified in the config/database.js file*/
const sessionStore = new MySQLStore({}, connection)

app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 //equals one day
    }
}))

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */


app.use(passport.initialize());
//refreshes on every route change so things don';t get stale
app.use(passport.session())

app.use((req, res, next) => {
        console.log(req.session);
        console.log(req.user);
        next();
    })
    /**
     * -------------- ROUTES ----------------
     */
app.use(routes);

/**
 * -------------- SERVER ----------------
 */
app.listen(3000);