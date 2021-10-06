//Todo



function genPassword(password) {
    var salt = crypto.randomBytes(32).toString('hex'); //seasoning recipe
    var genHash = crypto.pbjdf2Sync(password, salt, 10000, 64, sha512)
        .toString('hex');

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