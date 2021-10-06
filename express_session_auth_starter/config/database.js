const mysql2 = require('mysql2/promise');

const pool = {
        host: 'localhost',
        port: 3306,
        user: 'admin',
        password: 'hello',
        database: 'es_starter'
    } //maybe should be const options

const connection = mysql2.createPool(pool);


class User {
    constructor(user_id, username, hash, salt) {
        this.user_id = user_id;
        this.username = username;
        this.hash = hash;
        this.salt = salt;
    }

    static findOne(username) {
        return connection.execute(
            "SELECT * FROM users WHERE username = ?", [username]
        )
    };
}


module.exports = {
    connection: connection,
    User: User
};