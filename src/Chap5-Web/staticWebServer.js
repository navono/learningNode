const http = require('http'),
  url = require('url'),
  fs = require('fs'),
  mime = require('mime'),
  path = require('path'),
  base = 'D:\\Sourcecode\\JavaScriptGitRepo\\learningNode\\src\\Chap5-Web\\html';

/* eslint-disable no-alert, no-console */
http.createServer((req, res) => {
  const pathname = path.normalize(`${base}/${req.url}`);
  console.log(pathname);

  // content type
  const type = mime.getType(pathname);
  res.setHeader('Content-type', type);

  fs.stat(pathname, (err, stats) => {
    console.log(stats);
    if (err) {
      console.log(err);
      res.writeHead(400);
      res.write('Resource missing 404\n');
      res.end();
    } else {
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
    }
  });
}).listen(8989);

console.log('Server web running at 8989');


/* eslint-enable no-alert, no-console */