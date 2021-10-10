const fs = require('fs');
const encrypt = require('./encrypt');

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

//Stores a Buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret message')

//Cracking the code is just gibberish
console.log(encryptedMessage.toString());