const mysql2 = require('mysql2');

const pool = {
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'hello',
        database: 'es_starter'
    } //maybe should be const options

class User {
    constructor(user_id, username, hash, salt) {
        this.user_id = user_id;
        this.username = username;
        this.hash = hash;
        this.salt = salt;
    }
}


module.exports = {
    promisePool: pool.promise(),
    User: User
};