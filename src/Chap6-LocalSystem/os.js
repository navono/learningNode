const os = require('os');
/* eslint-disable no-console */


console.log(`Using end of line ${os.EOL} to insert a new line`);
console.log(os.endianness());
console.log(os.tmpdir());
console.log(os.homedir());

console.log(os.freemem());
console.log(os.loadavg());
console.log(os.totalmem());


/* eslint-enable no-console */
