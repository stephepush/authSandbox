const base64 = require('base64url');

const headerObj = {
    alg: 'RS256',
    type: 'JWT'
}

const payloadObj = {
    sub: '1234567890',
    name: 'John Doe',
    admin: true,
    iat: 1516239022
}

const headerObjString = JSON.stringify(headerObj);
const payloadObjString = JSON.stringify(payloadObj);

const base64UrlHeader = base64(headerObjString);
const base64UrlPayload = base64(payloadObjString);

console.log(base64UrlHeader);
console.log(base64UrlPayload)

/* const JWT = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.NHVaYe26MbtOYhSKkoKYdFVomg4i8ZJd8_-RU8VNbftc4TSMb4bXP3l3YlNWACwyXPGffz5aXHc6lty1Y2t4SWRqGteragsVdZufDn5BlnJl9pdR_kdVFUsra2rWKEofkZeIC4yWytE58sMIihvo9H1ScmmVwBcQP6XETqYd0aSHp1gOa9RdUPDvoXQ5oqygTqVtxaDr6wUFKrKItgBMzWIdNZ6y7O9E0DhEPTbE9rfBo6KTFsHAZnMg4k68CDp2woYIaXbmYTWcvbzIuHO7_37GT79XdIwkm95QJ7hYC9RiwrV7mesbY4PAahERJawntho0my942XheVLmGwLMBkQ';

const jwtParts = JWT.split('.');

console.log(jwtParts);

const headerInBase64UrlFormat = jwtParts[0];
const payloadInBase64UrlFormat = jwtParts[1];
const signatureInBase64UrlFormat = jwtParts[2];

const decodedHeader = base64url.decode(headerInBase64UrlFormat);
const decodedPayload = base64url.decode(payloadInBase64UrlFormat);
const decodedSignature = base64url.decode(signatureInBase64UrlFormat);

console.log(decodedHeader)
console.log(decodedPayload)
console.log(decodedSignature) */