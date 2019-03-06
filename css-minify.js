module.exports = function (css) {
  return false
  //return css
  //console.log('CSS MINIFY')
  
  // Here we can change the original css
  var T = css.replace(/(\n|\r|\	|\f|\v)+/g,''); // Remove line breaks, tabs etc.
  T = T.replace(/\/\*.+?\*\//g, ''); // Remove comments.
  T = T.replace(/ +/g,' '); // Remove redundant whitespace.
  T = T.replace(/ *{ */g,'{'); // Remove spaces around {
  T = T.replace(/ *} */g,'}'); // Remove spaces around }
  T = T.replace(/ *: */g,':'); // Remove spaces around :
  T = T.replace(/ *; */g,';'); // Remove spaces around ;
  return T
}