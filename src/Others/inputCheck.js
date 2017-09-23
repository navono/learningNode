'use strict';

const util = require('util');
const eventEmitter = require('events').EventEmitter;
const fs = require('fs');

class InputChecker {
  constructor(name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream(`./${file}.txt`,
      {'flags': 'a',
      'encoding': 'utf8',
      'mode': 0o666});      
  }

  check(input) {
    let command = input.trim().substr(0, 3);

    if (command == 'wr:') {
      this.emit('write', input.substr(3, input.length));
    } else if (command == 'en:') {
      this.emit('end');
    } else {
      this.emit('echo', input);
    }
  }
}

util.inherits(InputChecker, eventEmitter);

// testing new object and event handling
let ic = new InputChecker('Ping','output');
ic.on('write', function(data) {
  this.writeStream.write(data, 'utf8');
});
ic.on('echo', function(data) {
  process.stdout.write(ic.name + ' wrote ' + data);
});
ic.on('end', function() {
  process.exit();
});
// capture input after setting encoding
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
  let input = process.stdin.read();
  if (input !== null)
    ic.check(input);
});