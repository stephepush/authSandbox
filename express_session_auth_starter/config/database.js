const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'hello',
    database: 'es_starter'
}); //maybe should be const options

const connection = pool;



class User {
    constructor(username, hash, salt) {
        //this.user_id = user_id;
        this.username = username;
        this.hash = hash;
        this.salt = salt;
    }

    static findOne(username) {
        return connection.execute(
            "SELECT * FROM users WHERE username = ?", [username]
        )
    };

    save() {
        /*         return connection.execute(
                    "INSERT INTO users (username, hash, salt) VALUES (?, ?, ?)", [this.username, this.hash, this.salt] //do i need to use 'this'?
                ) */
        try {
            return connection.execute(
                "INSERT INTO users (username, hash, salt) VALUES (?, ?, ?)", [this.username, this.hash, this.salt] //do i need to use 'this'?,
            ).catch(e => {
                console.log('error', e);
            });
        } catch (e) {
            console.log('error', e);
        }
    }
}


/* module.exports = {
    connection: connection,
    User: User,
    pool: pool
}; */

module.exports.connection = connection;
module.exports.pool = pool;
/*pool and connection are kinda sorta redundant but why not?*/
module.exports.User = User;