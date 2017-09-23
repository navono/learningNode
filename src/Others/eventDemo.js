const eventEmitter = require('events').EventEmitter;

let counter = 0;
const em = new eventEmitter();

setInterval(_ => {
  em.emit('timed', counter++)
}, 2000);

em.on('timed', data => {
  console.log('timed ' + data);
})