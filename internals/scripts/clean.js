require('shelljs/global');
const addCheckMark = require('./helpers/checkmark.js');

if (!which('git')) {
  echo('Sorry, this script requires git');
  exit(1);
}

process.stdout.write('Cleanup started...');

addCheckMark();

echo('\nCleanup done. Happy Coding!!!');
