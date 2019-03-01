/**
 * @author Pulipuli Chen 20190301 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerVariable = function (key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key
  }
  let ele
  if (key.startsWith('data-blog-')) {
    ele = $('.blog-variables')
  }
  else if (key.startsWith('data-post-')) {
    ele = $('.post-variables')
  }
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