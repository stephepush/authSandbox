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

const sessionStore = new MySQLStore({}, connection)

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