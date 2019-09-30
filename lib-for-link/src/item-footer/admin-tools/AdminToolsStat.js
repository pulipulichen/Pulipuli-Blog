let AdminToolsStat = {
  init: function () {
    let statContainer = $('.entry-content article:first .meta1 .article-stats-container:visible:first')
    
    if (statContainer.length === 0) {
      return false
    }
    
    statContainer.append(`<i class="fa fa-safari" aria-hidden="true"></i>`)
    
    let list = []
    
    let append = () => {
      let listString = list.join(', ')
      statContainer.append(`<span>${listString}</span>`)
    }
    
    this.countChar((count) => {
      if (typeof(count) === 'number' && count > 0) {
        list.push(count)
      }
      
      this.countImage((count) => {
        if (typeof(count) === 'number' && count > 0) {
          list.push(count)
        }
        
        this.countTable((count) => {
          if (typeof(count) === 'number' && count > 0) {
            list.push(count)
          }
          
          this.countIframe((count) => {
            if (typeof(count) === 'number' && count > 0) {
              list.push(count)
            }
            append()
          })
        })
      })
    })
  },
  countChar: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    article = article.clone()
    article.children('h1:first').remove()
    let articleText = article.text()
    
    // 我想要把中文跟英文斷開來... 算了，先不要這樣做吧，這樣太拖慢網頁速度了
    let count = articleText.replace(/ /g, '').length
    if (count > 1) {
      count = `${count} Characters`
    }
    else if (count === 1) {
      count = `${count} Character`
    }
    callback(count)
  },
  countImage: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('a[href] > img[src]').length
    if (count > 1) {
      count = `${count} Images`
    }
    else if (count === 1) {
      count = `${count} Image`
    }
    callback(count)
  },
  countTable: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('table').length
    if (count > 1) {
      count = `${count} Tables`
    }
    else if (count === 1) {
      count = `${count} Table`
    }
    callback(count)
  },
  countIframe: function (callback) {
    if (typeof(callback) !== 'function') {
      callback()
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      callback()
      return false
    }
    
    let count = article.find('iframe').length
    if (count > 1) {
      count = `${count} Embed Iframes`
    }
    else if (count === 1) {
      count = `${count} Embed Iframe`
    }
    callback(count)
  }
}

$(() => {
  setTimeout(() => {
    AdminToolsStat.init()
  }, 3000)
})