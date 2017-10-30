/* eslint-disable no-console, no-unused-vars*/
const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
  console.log(`Message: ${msg} from ${rinfo.address}: ${rinfo.port}`);
});

server.bind(6666);


/* eslint-enable no-console, no-unused-vars */