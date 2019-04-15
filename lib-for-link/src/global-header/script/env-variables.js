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
    if (value === undefined) {
      return
    }
    else if (value === 'null') {
      return null
    }
    else if (value.startsWith('{') && value.endsWith('}')) {
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
    ele = $('.post-variable')
  }
  else if (key.startsWith('data-label-')) {
    ele = $('.label-variable')
  }
  
  if (ele.length === 1 && !key.startsWith('data-label-')) {
    let value = ele.attr(key)
    value = valueProcess(value)
    return value
  }
  else {
    let output = []
    ele.each((i, item) => {
      let value = $(item).attr(key)
      //console.log([key, value])
      value = valueProcess(value)
      output.push(value)
    })
    return output
  }
}

/**
 * @author Pulipuli Chen 20190307 
 * @param {String} key
 * @returns {Array|getBloggerPostVariable.output}
 */
getBloggerPostsVariable = function (key) {
  if (key.startsWith('data-') === false) {
    key = 'data-' + key
  }
  
  let valueProcess = (value) => {
    if (value === undefined) {
      return
    }
    else if (value === 'null') {
      return null
    }
    else if (value.startsWith('{') && value.endsWith('}')) {
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
  
  let output = []
  $('.post-variables').each((i, postVariables) => {
    let ele
    if (key.startsWith('data-post-')) {
      ele = $(postVariables).find('.post-variable')
    } else if (key.startsWith('data-label-')) {
      ele = $(postVariables).find('.label-variable')
    }

    if (ele.length === 1 && !key.startsWith('data-label-')) {
      let value = ele.attr(key)
      value = valueProcess(value)
      output.push(value)
      //return value
    } else {
      let postOutput = []
      ele.each((i, item) => {
        let value = $(item).attr(key)
        //console.log([key, value])
        value = valueProcess(value)
        postOutput.push(value)
      })
      output.push(postOutput)
    }
  })  // $('.post-variables').each((i, postVariables) => {
  return output
  /*
  let ele
  if (key.startsWith('data-post-')) {
    ele = $('.post-variable')
  } else if (key.startsWith('data-label-')) {
    ele = $('.label-variable')
  }

  if (ele.length === 1 && !key.startsWith('data-label-')) {
    let value = ele.attr(key)
    value = valueProcess(value)
    return value
  } else {
    let output = []
    ele.each((i, item) => {
      let value = $(item).attr(key)
      //console.log([key, value])
      value = valueProcess(value)
      output.push(value)
    })
    return output
  }
  */
}

isAdmin = function () {
  return ($(".admin-variable:visible").length === 1)
}