const spawn = require('child_process').spawn;
const program = require('commander');
/* eslint-disable no-console */


program.version('0.0.1')
  .option('-s, --source [file name]', 'Source graphic file name')
  .option('-f --file [file name]', 'Resulting file name')
  .parse(process.argv);

if ((program.source === undefined) || (program.file === undefined)) {
  console.error('source and file must be provided');
  process.exit();
}

const photo = program.source;
const file = program.file;

// conversion array
const opts = [
  photo,
  '-bordercolor', 'snow',
  '-border', '20',
  '-background','gray60',
  '-background', 'none',
  '-rotate', '6',
  '-background', 'black',
  '(', '+clone', '-shadow', '60x8+8+8', ')',
  '+swap',
  '-background', 'none',
  '-thumbnail', '240x240',
  '-flatten',
  file];

const im = spawn('convert', opts);
im.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
});

im.on('close', code => {
  console.log(`child process exited with code ${code}`);
});


/* eslint-enable no-console */