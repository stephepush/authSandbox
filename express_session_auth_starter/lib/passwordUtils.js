const crypto = require('crypto');



function genPassword(password) {
    let salt = crypto.randomBytes(32).toString('hex'); //seasoning recipe
    let genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');

    console.log("genHash = " + genHash)
    console.log('\n')
    console.log("salt = " + salt)

    return {
        salt: salt,
        hash: genHash
    }
}

function validatesPassword(password, hash, salt) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    console.log(hash)
    console.log('\n')
    console.log(hashVerify)
    return hash === hashVerify;
}

module.exports.validatesPassword = validatesPassword;
module.exports.genPassword = genPassword;