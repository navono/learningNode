const fs = require('fs');
const util = require('util');
const Mode = require('stat-mode');
/* eslint-disable no-console */


fs.chmod('./new.txt', 666, err => {
  if (err) {
    console.error(err);
  }

  fs.stat('./new.txt', (err, stats) => {
    if (err) return console.log(err);
  
    // 返回的一些状态基本是不可读的，因此需要借助 stat-mode 模块
    // console.log(util.inspect(stats));
  
    // get permissions
    const mode = new Mode(stats);
    console.log(mode.toString());
    console.log(`Group execute ${mode.group.execute}`);
    console.log(`Others write ${mode.others.write}`);
    console.log(`Owner execute ${mode.owner.read}`);
  });

  fs.open('./new.txt', 'r+', (err, fd) => {
    if (err) return console.error(err);
  
    let writable = fs.createWriteStream(null, 
      {fd: fd, start: 10, defaultEncoding: 'utf-8'});
    writable.write(' inserting this text');
  });
});


let readable = 
  fs.createReadStream('./working.txt').setEncoding('utf-8');

let data = '';
readable.on('data', chunk => {
  data += chunk;
});

readable.on('end', () => {
  console.log(data);
});



/* eslint-enable no-console */
