const crypto = require('crypto');
const fs = require('fs');
const decrypt = require('./decrypt');
const homedir = require('os').homedir();

//This is the data sent from the sender
const receivedData = require('./signMessage').packageOfDataToSend;

const hash = crypto.createHash(receivedData.algorithm);

const publicKey = fs.readFileSync(__dirname + '/id_rsa_pub.pem', 'utf8');

const decryptedMessage = decrypt.decryptWithPublicKey(publicKey, receivedData.signedAndEncryptedData);

const decryptedMessageHex = decryptedMessage.toString();

const originalHash = hash.update(JSON.stringify(receivedData.oringalData));

const originalHexHash = hash.digest('hex');

if (originalHash === decryptedMessageHex) {
    console.log('Success! The data has not been tampered with and the sender is valid.')
} else {
    console.log('Uh oh... Someone is trying to manipulate the data or someone else knows the private key')
}