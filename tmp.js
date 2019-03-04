const path = require('path')
var glob = require("glob")

/**
 * 列出檔案清單
 * @author Pulipuli Chen 20190303
 **/
function getFilelist (dir) {
  let filelist = glob.sync(path.join(dir, '**/*.css'))
      .concat(glob.sync(path.join(dir, '**/*.js')))
      .concat(glob.sync(path.join(dir, '**/*.less')))
      .filter((file) => {
        return (!file.endsWith('entry.js') 
          && !file.endsWith('.mocha-test.js')
          && (file.indexOf('/tmp/') === -1)
          && (file.indexOf('/ignore/') === -1))
      })
      .map((item) => './' + item)
  return filelist
}

console.log(getFilelist('./lib-for-link/src/page/'))
