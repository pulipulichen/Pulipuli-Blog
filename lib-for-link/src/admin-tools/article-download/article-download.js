require('./jszip.js')
//require('./beautify.js')
//require('./beautify-css.js')
require('./beautify-html.js')
require('./FileSaver.js')

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
  beautifyHTML: function (html) {
    return html_beautify(html, {
      "indent_size": 2,
      "indent_char": " ",
      "indent_with_tabs": false,
    })
  },
  copyHTML: function () {
    //console.log(beautify(data, { indent_size:2 }));
    //console.log(js_beautify);
    //console.log(html_beautify);
    //return
    
    let article = this.getRenderedPost()
    let html = this.beautifyHTML(article.html())
    
    //console.log(html);
    this.copyToClip(html)
  },
  
  getArticleFilename: function () {
    let pathname = location.pathname
    pathname = pathname.slice(1, pathname.length)
    pathname = pathname.split("/").join("-")
    
    // 移除最後的html
    if (pathname.endsWith(".html")) {
      pathname = pathname.slice(0, pathname.length - 5)
    }
    return pathname
  },
  getMetadata: function () {
    let metadata = {}
    
    let h1 = $('article > h1').clone()
    h1.find('div.meta1').remove()
    metadata.title = h1.text().trim()
    
    let articleDate = $('article .meta1 .timestamp').text().trim().split('/')
    metadata.date = {
      year: parseInt(articleDate[2].trim(), 10),
      month: parseInt(articleDate[0].trim(), 10),
      day: parseInt(articleDate[1].trim(), 10)
    }
    
    metadata.labels = []
    $('article .meta1 .label-info > a').each((i, ele) => {
      metadata.labels.push(ele.innerHTML.trim())
    })
    
    let commentCount = $('article .meta1 .comment-count').text().trim()
    commentCount = commentCount.slice(0, commentCount.indexOf(' '))
    commentCount = parseInt(commentCount, 10)
    metadata.commentCount = commentCount
    
    let shareCount = $('.addthis-smartlayers .at-custom-sidebar-count').text()
    shareCount = parseInt(shareCount, 10)
    metadata.shareCount = shareCount
    
    return metadata
  },
  getComments: function () {
    let comments = []
    
    return comments
  },
  downloadArticle: function () {
    //console.log('downloadArticle')
    //console.log(JSZip)
    console.log(this.getMetadata())
    let filename = this.getArticleFilename()
    var zip = new JSZip();
    
    let downloadZip = function () {
      //var img = zip.folder("images");
      //img.file("smile.gif", imgData, {base64: true});
      zip.generateAsync({type:"blob"})
      .then((content) => {
          // see FileSaver.js
          saveAs(content,filename + ".zip");
      });
      //let article = this.getRenderedPost()
    } 
    
    let metadata = this.getMetadata()
    metadata = JSON.stringify(metadata, null, 2)
    zip.file("metadata.json", metadata);
    
    // 下載comments的json
    let commentJSONLink = $('.comment-form-tool a.feed.json').attr('href')
    commentJSONLink = commentJSONLink + '-in-script&callback=?'
    $.getJSON(commentJSONLink, function (commentJSON) {
      commentJSON = JSON.stringify(commentJSON, null, 2)
      zip.file("comments.json", commentJSON);
      
      downloadZip() // 最後下載檔案
    })
  }
}

