const crypto = require('crypto');
const hash = crypto.createHash('sha256');
const fs = require('fs');
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');

const myData = {
    firstName: 'Stephen',
    lastName: 'Peters',
    socialSecurityNumber: `Nope, don't put personal info in
        a digitally signed message. This form of cryptography 
        doesn't hide data!`
};

//String version of data that can be hashed
const myDataString = JSON.stringify(myData);

//Sets value on the hash object
hash.update(myDataString);

//converts to hexadecimal
const hashedData = hash.digest('hex');

//const senderPrivateKey = fs.readFileSync(__dirname + 'id_rsa_priv.pem', 'utf8');
const senderPrivateKey = fs.readFileSync(homedir + '/Documents/id_rsa_priv.pem', 'utf8');

const signedMessage = encrypt.encryptWithPrivateKey(senderPrivateKey, hashedData);