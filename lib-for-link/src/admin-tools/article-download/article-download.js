require('./jszip.js')
require('./jszip-utils.js')
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
  parseImageList: function (article) {
    let imageList = {}
    let filenameList = []
    
    let imgUrlPatterns = [
      '.googleusercontent.com/',
      '.bp.blogspot.com/'
    ]
    
    let pushImageList = function (link) {
      // https://lh3.googleusercontent.com/-quhLaYWL29s/WCsAVr6SwpI/AAAAAAAC9iI/F62sfdA4C90/image_thumb%25255B4%25255D.png?imgmax=800
      // http://2.bp.blogspot.com/-L-p05d-w9LA/XHbAUssrMPI/AAAAAAAED78/31DtDe9q6JcGr77dvTTUOna6huIYwbvEgCK4BGAYYCw/s0/%25E7%25B0%25A1%25E5%25A0%25B11.png
      if (typeof(imageList[link]) === 'string') {
        // 表示已經加入了
        return
      }
      
      let filename = link
      filename = filename.slice(filename.lastIndexOf('/')+1, filename.length)
      if (filename.lastIndexOf("?") > -1) {
        filename = filename.slice(0, filename.lastIndexOf("?"))
      }
      
      // unescape
      while (filename !== unescape(filename)) {
        filename = unescape(filename)
      }
      
      if (!filename.endsWith('.jpg')
              && !filename.endsWith('.png')
              && !filename.endsWith('.gif')) {
        filename = filename + '.png'
      }
      
      if (filenameList.indexOf(filename) > -1) {
        let count = 0
        let filenameHeader = filename.slice(0, filename.lastIndexOf('.'))
        let filenameFooter = filename.slice(filename.lastIndexOf('.'), filename.length)
        let tempFilename = filenameHeader + '-' + count + filenameFooter
        while (filenameList.indexOf(tempFilename) > -1) {
          count++
          tempFilename = filenameHeader + '-' + count + filenameFooter
        }
        filename = tempFilename
      }
      
      filenameList.push(filename)
      imageList[link] = filename
    }
    
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.href)
      })

      article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.src)
      })
    })
    
    //console.log(filenameList.length)
    //console.log(filenameList)
    return imageList
  },
  getImageFromList: function (imageList, callback) {
    let linkList = []
    let linkFileList = {}
    
    for (let link in imageList) {
      linkList.push(link)
      linkFileList[link] = {
        'filename': imageList[link]
      }
    }
    
    let loop = (i) => {
      if (i < linkList.length) {
        let link = linkList[i]
        JSZipUtils.getBinaryContent(link, (err, data) => {
          if (err) {
            throw err; // or handle the error
          }
          linkFileList[link].data = data
          i++
          loop(i)
        });
      }
      else {
        if (typeof(callback) === "function") {
          callback(linkFileList)
        }
      }
    }
    loop(0)
  },
  replaceArticleLink: function (article, imageList) {
    for (let link in imageList) {
      let filename = 'img/' + imageList[link]
      //console.log(filename)
      
      article.find('a[href="' + link + '"]').each((i, ele) => {
        ele.href = filename
      })

      article.find('img[src="' + link + '"]').each((i, ele) => {
        ele.src = filename
      })
    }
    
    return article
  },
  downloadZIP: function (filename, zip) {
    zip.generateAsync({type: "blob"})
            .then((content) => {
              // see FileSaver.js
              saveAs(content, filename + ".zip");
            });
  },
  downloadArticle: function () {
    //console.log('downloadArticle')
    //console.log(JSZip)
    //console.log(this.getMetadata())
    
    let filename = this.getArticleFilename()
    var zip = new JSZip();
    
    let article = this.getRenderedPost()
    let imageList = this.parseImageList(article)
    
    article = this.replaceArticleLink(article, imageList)
    this.getImageFromList(imageList,(linkFileList) => {
      let articleHTML = this.beautifyHTML(article.html())
      zip.file("article.html", articleHTML);
      
      let img = zip.folder("img");
      for (let link in linkFileList) {
        let item = linkFileList[link]
        img.file(item.filename, item.data, {binary:true});
      }
      
      // --------------------------
      
      let metadata = this.getMetadata()
      metadata = JSON.stringify(metadata, null, 2)
      zip.file("metadata.json", metadata);

      // 下載comments的json
      let commentJSONLink = $('.comment-form-tool a.feed.json').attr('href')
      commentJSONLink = commentJSONLink + '-in-script&callback=?'
      $.getJSON(commentJSONLink, (commentJSON) => {
        commentJSON = JSON.stringify(commentJSON, null, 2)
        zip.file("comments.json", commentJSON);

        this.downloadZIP(filename, zip)
      })
      
    })
    //console.log(imageList)
    
    // loading a file and add it in a zip file
    /*
    JSZipUtils.getBinaryContent("https://lh3.googleusercontent.com/-u-i8xAlRMUw/XDXF1ELCZ-I/AAAAAAAD-oE/1I3wbxMnkC01ZvX07hpLTiZUpdPRPh9gQCHMYCw/%252111_thumb%255B1%255D?imgmax=800", function (err, data) {
       if(err) {
          throw err; // or handle the error
       }
       var zip = new JSZip();
       zip.file("picture.png", data, {binary:true});
       zip.generateAsync({type:"blob"})
      .then((content) => {
          // see FileSaver.js
          saveAs(content,"a.zip");
      });
    });
    */
    
    /*
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
    
    
    */
  }
}

