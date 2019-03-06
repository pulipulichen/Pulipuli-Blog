/**
 * @author Pulipuli Chen 20190301 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerVariable = function (key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key
  }
  
  let valueProcess = (value) => {
    if (value === 'null') {
      return null
    } else if (value.startsWith('{') && value.endsWith('}')) {
      try {
        value = JSON.parse(value)
      }
      catch (e) { }
      return value
    }
    else {
      return value
    }
  }
  
  let ele
  if (key.startsWith('data-blog-')) {
    ele = $('.blog-variables')
  }
  else if (key.startsWith('data-post-')) {
    ele = $('.post-variables')
  }
  
  if (ele.length === 1) {
    let value = ele.attr(key)
    value = valueProcess(value)
    return value
  }
  else {
    let output = []
    ele.each((i, item) => {
      let value = item[key]
      value = valueProcess(value)
      output.push(value)
    })
    return output
  }
}