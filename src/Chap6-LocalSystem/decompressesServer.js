const http = require('http');
const zlib = require('zlib');
const fs = require('fs');
/* eslint-disable no-console */

const server = http.createServer().listen(8124);
server.on('request', (req, res) => {
  if (req.method == 'POST') {
    let chunks = [];

    req.on('data', chunk => {
      chunks.push(chunk);
    });

    req.on('end', () => {
      let buf = Buffer.concat(chunks);
      zlib.unzip(buf, (err, result) => {
        if (err) {
          res.writeHead(500);
          res.end();
          return console.log(`error ${err}`);
        }

        const timestamp = Date.now();
        const filename = './done' + timestamp + '.jpg';
        fs.createWriteStream(filename).write(result);
      });
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Received and undecompressed file\n');
    });
  }
});

console.log('Server listening on 8124');
