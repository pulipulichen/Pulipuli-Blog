const path = require('path')
const glob = require("glob")

glob.sync(path.join('./lib-for-link/src/**/*.selenium-test.js'))
        .forEach(filename => {
          //console.log('Selenium test: ' + filename)
          require("./" + filename)
        })