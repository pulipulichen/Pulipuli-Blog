/**
 * @author Pulipuli Chen 20190301 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerPostVariable = function (key) {
  if (key.startsWith('data-')) {
    key = 'data-' + key
  }
  
  var ele = $('post-variables')
  if (ele.length === 1) {
    return ele.attr(key)
  }
  else {
    let output = []
    ele.each((i, item) => {
      output.push(item[key])
    })
    return output
  }
}