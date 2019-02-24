const {exec} = require('child_process')
//exec('postcss 0_header/2_style.css > 0_header/2_style.min.css')

const path = require('path')
const fs = require('fs')

function getComponentsList (directory) {
  var list = []
  
  var subDirectoryPath = path.join(__dirname, directory);
  //passsing directoryPath and callback function
  var files = fs.readdirSync(subDirectoryPath)
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    //console.log(path.join('components', subDirectory, file));
    list.push(path.join(directory, file))
  });
  return list
}

var list = getComponentsList('template-builder/components/0_header')
        .concat(getComponentsList('lib-for-link/style'))
list.forEach(file => {
  if (file.endsWith('.css') && !file.endsWith('.min.css')) {
    var input = file
    var output = file.slice(0, -4) + '.min.css'
    //console.log(output)
    exec('postcss ' + input + ' > ' + output)
  }
})