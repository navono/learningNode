/* eslint-disable no-console, no-unused-vars*/
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

process.stdin.on('data', data => {
  console.log(data.toString('utf-8'));
  client.send(data, 0, data.length, 6666, '',
    (err, bytes) => {
      if (err) {
        console.error(`error: ${err}`);
      } else {
        console.log('successful');
      }
    });
});


/* eslint-enable no-console, no-unused-vars */