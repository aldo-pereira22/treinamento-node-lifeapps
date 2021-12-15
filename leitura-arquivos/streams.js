const fs = require('fs')
const zlib = require('zlib')


// fd.createReadStream('')
// const caminho = fs.createReadStream('teste.csv')

fs.createReadStream('teste.csv')
    .pipe(zlib.createGzip())
    .pipe(console.log)