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