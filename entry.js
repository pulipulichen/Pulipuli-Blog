var glob = require("glob");
const path = require('path')

function getFilelist (dir) {
  console.log(path.resolve(dir, '**/*.css'))
  let filelist = glob.sync(path.resolve(dir, '**/*.css'))
      .concat(glob.sync(path.resolve(dir, '**/*.js')))
      .concat(glob.sync(path.resolve(dir, '**/*.less')))
      .filter((file) => {
        return (!file.endsWith('entry.js') && !file.endsWith('.mocha-test.js'))
      })
  return filelist
}
console.log(getFilelist('./lib-for-link/src/item-olw/'))