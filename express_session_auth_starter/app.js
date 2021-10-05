const express = require('express');
const session = require('express-session');
const passport = require('passport')
    //const crypto = require('crypto')
const routes = require('./routes');
const { connection } = require('./config/database')

const MySQLStore = require('express-mysql-session')(session);

//require('./config/passport)
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
app.use(passport.session())
    /**
     * -------------- ROUTES ----------------
     */
app.use(routes);

/**
 * -------------- SERVER ----------------
 */
app.listen(3000);