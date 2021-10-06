const crypto = require('crypto');



function genPassword(password) {
    let salt = crypto.randomBytes(32).toString('hex'); //seasoning recipe
    let genHash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    console.log(salt)
    console.log(genHash)
    return {
        salt: salt,
        hash: genHash
    }
}

function validatesPassword(password, hash, salt) {
    const hashVerify = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return hash === hashVerify;
}

module.exports.validatesPassword = validatesPassword;
module.exports.genPassword = genPassword;