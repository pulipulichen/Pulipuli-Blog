require('./jszip.js')
//require('./beautify.js')
//require('./beautify-css.js')
require('./beautify-html.js')

articleDownload = {
  getRenderedPost: function () {
    let article = $('#main .post .entry-content > article').clone()
    
    // 移除標題 & meta
    article.find("h1:first").remove()
    
    // 移除lightbox
    article.find('.lightbox-group').each((i, ele) => {
      $(ele).removeClass('lightbox-group')
              .removeAttr('data-lightbox')
    })
    
    // 移除目錄
    article.find('.puli-utils-append').remove()
    
    // 把圖片的網址從https改成 //
    let linkRemoveHttpHeader = (link) => {
      if (link.startsWith('http://')) {
        link = link.slice(5, link.length)
      }
      else if (link.startsWith('https://')) {
        link = link.slice(6, link.length)
      }
      return link
    }
    
    /*
    let imgUrlPatterns = [
      '.googleusercontent.com/',
      '.bp.blogspot.com/'
    ]
    
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        ele.href = linkRemoveHttpHeader(ele.href)
        $(ele).removeAttr('target')
      })

      article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        ele.src = linkRemoveHttpHeader(ele.src)
      })
    })
    */
      
    
    return article
  },
  copyToClip: function (str) {
    let listener = function (e) {
      e.clipboardData.setData("text/html", str)
      e.clipboardData.setData("text/plain", str)
      e.preventDefault();
    }
    document.addEventListener("copy", listener)
    document.execCommand("copy")
    document.removeEventListener("copy", listener)
  },
  copyHTML: function () {
    //console.log(beautify(data, { indent_size:2 }));
    //console.log(js_beautify);
    //console.log(html_beautify);
    //return
    
    let article = this.getRenderedPost()
    let html = article.html()
    html = html_beautify(html, {
      "indent_size": 2,
      "indent_char": " ",
      "indent_with_tabs": false,
    })
    console.log(html);
    this.copyToClip(html)
  },
  downloadArticle: function () {
    //console.log('downloadArticle')
    //console.log(JSZip)
  }
}

