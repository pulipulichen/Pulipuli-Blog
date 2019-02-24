const {exec} = require('child_process')
//exec('postcss 0_header/2_style.css > 0_header/2_style.min.css')

const path = require('path')
const fs = require('fs')

function getComponentsList (mainDirectory) {
  var list = []
  
  //joining path of directory 
  const directoryPath = path.join(__dirname, mainDirectory);
  //passsing directoryPath and callback function
  var subDirectoies = fs.readdirSync(directoryPath)
 
  //listing all files using forEach
  subDirectoies.forEach(function (subDirectory) {
    // Do whatever you want to do with the file
    var subDirectoryPath = path.join(__dirname, 'components', subDirectory);
    //passsing directoryPath and callback function
    var files = fs.readdirSync(subDirectoryPath)
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      //console.log(path.join('components', subDirectory, file));
      list.push(path.join('components', subDirectory, file))
    });
  });
  return list
}

var list = getComponentsList('template-builder/components')
list.forEach(file => {
  if (file.endsWith('.css') && !file.endsWith('.min.css')) {
    var input = file
    var output = file.slice(0, -4) + '.min.css'
    //console.log(output)
    exec('postcss ' + input + ' > ' + output)
  }
})