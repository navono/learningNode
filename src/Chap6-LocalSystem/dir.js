const fs = require('fs');
const path = require('path');
/* eslint-disable no-console */


fs.readdir('./', (err, files) => {
  for (let file of files) {
    console.log(file);
    if (path.extname(file) == '.gz') {
      fs.unlink(`./${file}`);
    }
  }
});


/* eslint-enable no-console */
