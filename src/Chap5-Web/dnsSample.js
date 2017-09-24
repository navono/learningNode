const dns = require('dns');

/* eslint-disable no-console */
dns.lookup('codingwith.me', (err, address, family) => {
  console.log('address: %j family: IPV%s', address, family);
});

dns.resolve('codingwith.me', 'CNAME', (err, addresses) => {
  if (err) {
    console.log(err);
  }

  console.log(addresses);
});


dns.lookup('oreilly.com', {all: true}, (err, family) => {
  if (err) {
    return console.log(err);
  }

  console.log(family);
});

/* eslint-enable no-console */
