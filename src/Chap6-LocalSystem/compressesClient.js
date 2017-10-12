const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
/* eslint-disable no-console */

const gzip = zlib.createGzip();

const options = {
  hostname: 'localhost',
  port: 8124,
  method: 'POST',
  headers: {
    'Content-Type': 'application/javascript',
    'Content-Encoding': 'gzip,deflate'
  }
};

const req = http.request(options, res => {
  res.setEncoding('utf-8');
  let data = '';
  
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(data));
});

req.on('error', e => {
  console.log(`problem with request: ${e.message}`);
});

// stream gzipped file to server
const readable = fs.createReadStream('E:\\images\\Dragon.jpg');
readable.pipe(gzip).pipe(req);
