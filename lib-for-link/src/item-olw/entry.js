var fs = require("fs");
var path = require("path");

function visit_dir(dir, list) {
  if (list === undefined) {
    list = []
  }
  let files = fs.readdirSync(dir)
  // Print folder name
  //console.log("\n[" + dir + "]");
  files.forEach(function (file) {
    file_full_path = path.join(dir, file);
    (function (file_full_path) {
      // Get file stat
      let stats = fs.statSync(file_full_path)
      if (stats.isDirectory()) {
        list = visit_dir(file_full_path, list);
      } else {
        // Print file name
        console.log(path.join(dir, file));
        list.push(path.join(dir, file))
      }
    })(file_full_path);
  });
  return list
}

let list = visit_dir('./');
console.log(list)

list.forEach(function (file) {
  import './' + file
})