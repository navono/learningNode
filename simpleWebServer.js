const http = require('http');
const server = http.createServer().listen(8214);

server.on('request', (request, response) => {
  // console.log(request.headers);
  // console.log(request.rawHeaders);

  console.log(request.headers.host);
  console.log(request.rawHeaders[0] + ' is ' + request.rawHeaders[1]);
  
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
});

console.log('server listening on 8214');