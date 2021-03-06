const fs = require('fs');
const homedir = require('os').homedir();
const encrypt = require('./encrypt');
const decrypt = require('./decrypt');

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

//Stores a Buffer object
const encryptedMessage = encrypt.encryptWithPublicKey(publicKey, 'Super secret message')

//Cracking the code is just gibberish
console.log(encryptedMessage.toString());

//const privateKey = fs.readFileSync(__dirname + 'id_rsa_priv.pem', 'utf8');
const privateKey = fs.readFileSync(homedir + '/Documents/id_rsa_priv.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPrivateKey(privateKey, encryptedMessage);

console.log(decryptedMessage.toString());