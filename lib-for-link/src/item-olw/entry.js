var glob = require("glob");
const path = require('path')

function getFilelist (dir) {
  let filelist = glob.sync(path.relative(dir, '**/*.css'))
      .concat(glob.sync(path.relative(dir, '**/*.js')))
      .concat(glob.sync(path.relative(dir, '**/*.less')))
      .filter((file) => {
        return (!file.endsWith('entry.js') && !file.endsWith('.mocha-test.js'))
      })
  return filelist
}
console.log(getFilelist('./'))