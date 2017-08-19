const timer = setTimeout(name => {
  console.log('Hello ' + name);
}, 30000, 'ping');

const interval = setInterval(function(name) {
  console.log('Hello ' + name);
  }, 3000, 'Ping');

timer.unref();

console.log('waiting on first interval...');