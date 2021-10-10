const crypto = require('crypto');
const fs = require('fs')

function genKeyPair() {
    //Function to create public and private keys
    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 4096, //bits: standard for RSA Keys
        publicKeyEncoding: {
            type: 'pkcs1', // Public key cryptography Standards 1
            format: 'pem' // Most common formatting choice
        },
        privateKeyEncoding: {
            type: 'pkcs1', // Again, Public Key Cryptography Standards 1
            format: 'pem'
        }
    })

}