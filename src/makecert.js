const fs = require('fs');
const forge = require('node-forge');
const createServerCertificate = require('./cert');

const serverCrt = createServerCertificate('waimai.meituan.com');

try {
    fs.mkdirSync('./cert');
} catch (e) {}
fs.writeFileSync('./cert/key.pem', forge.pki.privateKeyToPem(serverCrt.key));
fs.writeFileSync('./cert/cert.pem', forge.pki.certificateToPem(serverCrt.cert));
