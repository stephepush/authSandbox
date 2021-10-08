const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const connection = require('./database');
const { User } = require('./database')
const validatesPassword = require('../lib/passwordUtils').validatesPassword;

const customFields = {
    /*Changes what field attributes passport looks for*/
    usernameFIeld: 'uname',
    passwordField: 'pw'
}

/*the following function is a es6/promisified twist of 
whats found in the passport documentation
its promisified and modularized to make the code easier
to read*/
const verifyCallback = (username, password, done) => {
    //console.log(username);
    /*User.findOne references static class method in
            database.js*/
    User.findOne(username)
        .then((dbRes) => {
            console.log(dbRes[0][0]);
            let user = dbRes[0][0];
            if (!user) { return done(null, false) }
            //no error, but also no user
            console.log(
                `user: ${user.username}
                password: ${password},
                hash: ${user.hash}, 
                salt: ${user.salt}`)
            const isValid = validatesPassword(password, user.hash, user.salt)
                //^comparing user entered password to hash and salt

            if (isValid) {
                return done(null, user);
                //sucessfully authenticates
            } else {
                return done(null, false)
                    //unsuccesfully authenticated, don't allow
            }
        })
        .catch((err) => {
            done(err)
        });
}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((userId, done) => {
    User.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
})