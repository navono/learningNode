const http = require('http');
const queryString = require('querystring');

const server = http.createServer().listen(8214);

server.on('request', (request, response) => {
  if (request.method == 'POST') {
    let body = '';

    request.on('data', data => {
      body += data;
    });

    request.on('end', _ => {
      const post = queryString.parse(body);
      console.log(post);

      response.writeHead(200, {'Content-Type': 'text/plain'});
      response.end('Hello World frome Server\n');
    });
  }
});

console.log('server listening on 8214');