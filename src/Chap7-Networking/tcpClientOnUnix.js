/* eslint-disable no-console, no-unused-vars*/
const net = require('net');
const client = new net.Socket();
client.setEncoding('utf-8');

const unixsocket = '/somepath/nodesocket';

client.connect(unixsocket, () => {
  console.log('connected to server');
  client.write('Who needs a browser to communicate?');
});

process.stdin.on('data', data => {
  client.write(data);
});

client.on('data', data => {
  console.log(data);
});

client.on('close', () => {
  console.log('connection is closed');
});


/* eslint-enable no-console, no-unused-vars */