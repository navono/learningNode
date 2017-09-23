const http = require('http'),
  url = require('url'),
  fs = require('fs'),
  mime = require('mime'),
  path = require('path'),
  base = `${__dirname}\\html`;

/* eslint-disable no-alert, no-console */
http.createServer((req, res) => {
  const pathname = path.normalize(`${base}\\${req.url}`);
  fs.stat(pathname, (err, stats) => {
    if (err) {
      console.log(err);
      res.writeHead(400);
      res.write('Resource missing 404\n');
      res.end();
    } else if (stats.isFile()) {
      // content type
      const type = mime.getType(pathname);
      res.setHeader('Content-type', type);

      // create and pipe readable stream
      const file = fs.createReadStream(pathname);
      file.on('open', () => {
        // 200 status - found, no erros
        res.statusCode = 200;
        file.pipe(res);
      });

      file.on('error', err => {
        res.writeHead(403);
        res.write('file missing, or permission problem');
        console.log(err);
      });
    } else {
      // directory
      res.writeHead(403);
      res.write('Directory access is forbidden');
      res.end();
    }
  });
}).listen(8989);

console.log('Server web running at 8989');


/* eslint-enable no-alert, no-console */