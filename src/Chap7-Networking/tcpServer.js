/* eslint-disable no-console, no-unused-vars*/

const net = require('net');
const PORT = 6666;

let server = net.createServer(conn => {
  console.log('connected');

  conn.on('data', data => {
    console.log(`${data} from ${conn.remoteAddress} ${conn.remotePort}`);
    conn.write(`Repeating: ${data}`);
  });

  conn.on('close', () => {
    console.log('client closed connection');
  });

  conn.on('error', err => {
    console.log(`client error: ${err}`);
  });
}).listen(PORT);

server.on('listening', () => {
  console.log(`listening on ${PORT}`);
});

server.on('error', err => {
  if (err.code == 'EADDRINUSE') {
    console.warn('Address is use, retrying...');
    setTimeout(function() {
      server.close();
      server.listen(PORT);
    }, 1000);
  } else {
    console.error(err);
  }
});

/* eslint-enable no-console, no-unused-vars */