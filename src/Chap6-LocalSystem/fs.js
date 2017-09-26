const fs = require('fs');
const util = require('util');
const Mode = require('stat-mode');
/* eslint-disable no-console */


fs.stat('./os.js', (err, stats) => {
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


// 可以用fd（file descriptor）来操作文件
fs.open('./new.txt', 'a+', 0x666, (err, fd) => {
  if (err) return console.error(err);
  fs.write(fd, 'First line', 'utf-8', (err, written, str) => {
    if (err) return console.error(err);
    let buf = new Buffer(written);
    fs.read(fd, buf, 0, written, 0, (err, bytes, buffer) => {
      if (err) return console.error(err);
      console.log(buf.toString('utf-8'));
    });
  });
});


/* eslint-enable no-console */
