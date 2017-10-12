const zlib = require('zlib');
const fs = require('fs');
const gzip = zlib.createGzip();

const inp = fs.createReadStream('test.png');
let out = fs.createWriteStream('test.png.gz');

inp.pipe(gzip).pipe(out);
