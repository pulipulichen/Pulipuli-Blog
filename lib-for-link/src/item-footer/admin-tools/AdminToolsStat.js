let AdminToolsStat = {
  init: function () {
    let statContainer = $('.entry-content article:first .meta1 .article-stats-container:visible:first')
    
    if (statContainer.length === 0) {
      return false
    }
    
    statContainer.append(`<i class="fa fa-safari" aria-hidden="true"></i>`)
    
    let list = []
    
    this.countChar((charCount) => {
      if (charCount > 1) {
        list.push(`${charCount} Characters`)
      }
      else if (charCount === 1) {
        list.push(`${charCount} Character`)
      }
      
      //statContainer.append(`/`)
      
      this.countImage((count) => {
        if (count > 1) {
          list.push(`${count} Images`)
        }
        else if (count === 1) {
          list.push(`${count} Image`)
        }
        
        let listString = list.join(', ')
        statContainer.append(`<span>${listString}</span>`)
      })
    })
  },
  countChar: function (callback) {
    if (typeof(callback) !== 'function') {
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      return false
    }
    
    article = article.clone()
    article.children('h1:first').remove()
    let articleText = article.text()
    
    // 我想要把中文跟英文斷開來... 算了，先不要這樣做吧，這樣太拖慢網頁速度了
    callback(articleText.replace(/ /g, '').length)
  },
  countImage: function (callback) {
    if (typeof(callback) !== 'function') {
      return false
    }
    
    let article = $('.entry-content article:visible:first')
    
    if (article.length === 0) {
      return false
    }
    
    // 我想要把中文跟英文斷開來
    callback(article.find('a[href] > img[src]').length)
  }
}

$(() => {
  setTimeout(() => {
    AdminToolsStat.init()
  }, 3000)
})