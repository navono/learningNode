/* eslint-disable no-console, no-unused-vars*/

const net = require('net');
const fs = require('fs');

const unixsocket = '/somepath/nodesocket';

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
}).listen(unixsocket);

server.on('listening', () => {
  console.log(`listening on ${unixsocket}`);
});

server.on('error', err => {
  if (err.code == 'EADDRINUSE') {
    console.warn('Address is use, retrying...');
    fs.unlink(unixsocket, () => {
      server.listen(unixsocket);
    });
  } else {
    console.error(err);
  }
});

process.on('uncaughtException', err => {
  console.log(err);
});

/* eslint-enable no-console, no-unused-vars */