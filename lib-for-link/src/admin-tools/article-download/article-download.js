import './lib/jszip.js'
import './lib/jszip-utils.js'
//require('./beautify.js')
//require('./beautify-css.js')
import './lib/beautify-html.js'
import './lib/FileSaver.js'
import api from '@fortawesome/fontawesome'
// import JSZipUtils from './lib/jszip-utils.js'
import url from 'url'

import './lib/docxtemplater.min.js'

/*!

JSZipUtils - A collection of cross-browser utilities to go along with JSZip.
<http://stuk.github.io/jszip-utils>

(c) 2014 Stuart Knightley, David Duponchel
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip-utils/master/LICENSE.markdown.

*/
let JSZipUtils
!function(e){
  false && "object" == false && typeof exports 
    ? module.exports=e() 
    : false && "function"==typeof define && define.amd 
      ? define(e) 
      : "undefined"!=typeof window 
        ? window.JSZipUtils=e() 
        : "undefined"!=typeof global 
          ? global.JSZipUtils=e() 
          : "undefined"!=typeof self&&(self.JSZipUtils=e())
        }(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

JSZipUtils = {};
// just use the responseText with xhr1, response with xhr2.
// The transformation doesn't throw away high-order byte (with responseText)
// because JSZip handles that case. If not used with JSZip, you may need to
// do it, see https://developer.mozilla.org/En/Using_XMLHttpRequest#Handling_binary_data
JSZipUtils._getBinaryFromXHR = function (xhr) {
    // for xhr.responseText, the 0xFF mask is applied by JSZip
    return xhr.response || xhr.responseText;
};

// taken from jQuery
function createStandardXHR() {
    try {
        return new window.XMLHttpRequest();
    } catch( e ) {}
}

function createActiveXHR() {
    try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch( e ) {}
}

// Create the request object
var createXHR = window.ActiveXObject ?
    /* Microsoft failed to properly
     * implement the XMLHttpRequest in IE7 (can't request local files),
     * so we use the ActiveXObject when it is available
     * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
     * we need a fallback.
     */
    function() {
    return createStandardXHR() || createActiveXHR();
} :
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;



JSZipUtils.getBinaryContent = function(path, callback) {
    /*
     * Here is the tricky part : getting the data.
     * In firefox/chrome/opera/... setting the mimeType to 'text/plain; charset=x-user-defined'
     * is enough, the result is in the standard xhr.responseText.
     * cf https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Receiving_binary_data_in_older_browsers
     * In IE <= 9, we must use (the IE only) attribute responseBody
     * (for binary data, its content is different from responseText).
     * In IE 10, the 'charset=x-user-defined' trick doesn't work, only the
     * responseType will work :
     * http://msdn.microsoft.com/en-us/library/ie/hh673569%28v=vs.85%29.aspx#Binary_Object_upload_and_download
     *
     * I'd like to use jQuery to avoid this XHR madness, but it doesn't support
     * the responseType attribute : http://bugs.jquery.com/ticket/11461
     */
    try {

        var xhr = createXHR();

        xhr.open('GET', path, true);

        // recent browsers
        if ("responseType" in xhr) {
            xhr.responseType = "arraybuffer";
        }

        // older browser
        if(xhr.overrideMimeType) {
            xhr.overrideMimeType("text/plain; charset=x-user-defined");
        }

        xhr.onreadystatechange = function(evt) {
            var file, err;
            // use `xhr` and not `this`... thanks IE
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 0) {
                    file = null;
                    err = null;
                    try {
                        file = JSZipUtils._getBinaryFromXHR(xhr);
                    } catch(e) {
                        err = new Error(e);
                    }
                    callback(err, file);
                } else {
                    callback(new Error("Ajax error for " + path + " : " + this.status + " " + this.statusText), null);
                }
            }
        };

        xhr.send();

    } catch (e) {
        callback(new Error(e), null);
    }
};

// enforcing Stuk's coding style
// vim: set shiftwidth=4 softtabstop=4:

},{}]},{},[1])
(1)
});
;

let extractExt = function (link) {
  let urlObject = new URL(link)
  let ext = null
  if (urlObject.pathname !== null 
          && urlObject.pathname.lastIndexOf('.') > -1) {
    ext = urlObject.pathname.slice(urlObject.pathname.lastIndexOf('.') + 1, urlObject.pathname.length)
    if (ext.indexOf('/') > -1
            || ext.indexOf("'") > -1
            || ext.indexOf(';') > -1
            || ext.indexOf(':') > -1) {
      ext = null
    }
  }
  return ext
}

let articleDownload = {
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
    
    let imgUrlPatterns = [
      '.googleusercontent.com/',
      '.bp.blogspot.com/'
    ]
    
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        //console.log(ele.href)
        ele.href = linkRemoveHttpHeader(ele.href)
        $(ele).removeAttr('target')
      })

      article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        //console.log(ele.src)
        ele.src = linkRemoveHttpHeader(ele.src)
      })
    })
    
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
    
    article = article.clone()
    
    let hosts = [
      '.ggpht.com/',
      '.blogspot.com/'
    ]
    
    hosts.forEach(host => {
      
      article.find(`a[href*="${host}"]`).each((i, ele) => {
        let value = ele.href
        if (value.startsWith('http://') 
                || value.startsWith('https://')) {
          value = value.slice(value.indexOf('://') + 1)
          ele.href = value
        }
      })
    })

    article.find(`img[src]`).each((i, ele) => {
      let value = ele.src
      if (value.startsWith('http://') 
              || value.startsWith('https://')) {
        value = value.slice(value.indexOf('://') + 1)
        ele.src = value
      }
    })
    
    article.find(`a[href*="http://pulipuli.blogspot.com/"],a[href*="https://pulipuli.blogspot.com/"]`).each((i, ele) => {
      let value = ele.href
      value = value.slice(value.indexOf('.com/') + 4)
      ele.href = value
    })
    
    article.find(`a[href*="http://pulipuli.blogspot.tw/"],a[href*="https://pulipuli.blogspot.tw/"]`).each((i, ele) => {
      let value = ele.href
      value = value.slice(value.indexOf('.tw/') + 3)
      ele.href = value
    })
    
    article.find(`a[href*="http://blog.pulipuli.info/"],a[href*="https://blog.pulipuli.info/"]`).each((i, ele) => {
      let value = ele.href
      value = value.slice(value.indexOf('.info/') + 5)
      ele.href = value
    })
    
    
    if (location.href.endsWith('/p/publications.html')) {
      article = this.copyHTMLinPublications(article)
    }
    
    let html = this.beautifyHTML(article.html())
    
    html = this.copyHTMLMore(html)
    
    //html = html.replace(`<a name="more"></a>`, `<a name="more"></a><!-- more --><hr />`)
    
    //console.log(html);
    this.copyToClip(html)
  },
  
  copyHTMLMore (html) {
    
    if (html.indexOf(`<a name="more"></a>
<hr>`) > -1) {
      html = html.replace(`<a name="more"></a>`, `<a name="more"></a><!--more-->`)
    }
    else if (html.indexOf(`<a name="more"></a>`) > -1) {
      html = html.replace(`<a name="more"></a>`, `<a name="more"></a><!--more-->
<hr />`)
    }
    
    return html
  },
  
  copyHTMLinPublications (article) {
    article.find('li').each((i, ele) => {
      let html = ele.innerHTML
      
      html = html.split('&nbsp;').join(' ')
      
      let pos = html.lastIndexOf('(相關記事：')
      if (pos > -1) {
        html = html.slice(0, pos)
      }
      ele.innerHTML = html.trim()
    })
    
    return article
  },
  
  getArticleFilename: function () {
    let articleDate = $('article .meta1 .timestamp').text().trim().split('/')
    if (articleDate.length === 1) {
      articleDate = articleDate[0]

      let parts = []
      articleDate = articleDate.split('月').map(p => p.trim())
      parts[0] = articleDate[0]
      articleDate = articleDate[1].split(', ').map(p => p.trim())
      parts[1] = articleDate[0]
      parts[2] = articleDate[1]
      articleDate = parts
    }
    let date = {
      year: parseInt(articleDate[2].trim(), 10),
      month: parseInt(articleDate[0].trim(), 10),
      day: parseInt(articleDate[1].trim(), 10)
    }
    
    let paddingZero = (n) => {
      if (n < 10) {
        return '0' + n
      }
      else {
        return n
      }
    }
    
    let pathname = location.pathname
    pathname = pathname.slice(1, pathname.length)
    let filename = pathname.split("/")
    filename = date.year 
            + '-' 
            + paddingZero(date.month)
            + '-' 
            + paddingZero(date.day)
            + '_' 
            +  filename[(filename.length - 1)]
    
    // 移除最後的html
    if (filename.endsWith(".html")) {
      filename = filename.slice(0, filename.length - 5)
    }
    
    filename = 'post-' + filename
    
    return filename
  },
  getMetadata: function () {
    let metadata = {}
    
    let h1 = $('article > h1').clone()
    h1.find('div.meta1').remove()
    metadata.title = h1.text().trim()
    
    let articleDate = $('article .meta1 .timestamp').text().trim().split('/')
    if (articleDate.length === 1) {
      articleDate = articleDate[0]

      let parts = []
      articleDate = articleDate.split('月').map(p => p.trim())
      parts[0] = articleDate[0]
      articleDate = articleDate[1].split(', ').map(p => p.trim())
      parts[1] = articleDate[0]
      parts[2] = articleDate[1]
      articleDate = parts
    }
    metadata.date = {
      year: parseInt(articleDate[2].trim(), 10),
      month: parseInt(articleDate[0].trim(), 10),
      day: parseInt(articleDate[1].trim(), 10)
    }
    
    metadata.labelsList = []
    $('article .meta1 .label-info > a').each((i, ele) => {
      metadata.labelsList.push(ele.innerHTML.trim())
    })
    metadata.labels = metadata.labelsList.join(', ')
    
    let commentCount = $('article .meta1 .comment-count').text().trim()
    commentCount = commentCount.slice(0, commentCount.indexOf(' '))
    commentCount = parseInt(commentCount, 10)
    metadata.commentCount = commentCount
    
    // let shareCount = $('.addthis-smartlayers .at-custom-sidebar-count').text()
    // shareCount = parseInt(shareCount, 10)
    // 20230621-2323 因為AddThis關閉了，所以此數字降為0
    let shareCount = 0
    metadata.shareCount = shareCount
    
    metadata.editURL = $('article h1 .meta1 .edit-url').attr('href')
    
    metadata.publicURL = location.href
    if (metadata.publicURL.indexOf('#') > -1) {
      metadata.publicURL = metadata.publicURL.slice(0, metadata.publicURL.indexOf('#'))
    }
    if (metadata.publicURL.indexOf('?') > -1) {
      metadata.publicURL = metadata.publicURL.slice(0, metadata.publicURL.indexOf('?'))
    }
    
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
      '.bp.blogspot.com/',
      '.google.com/puddingchen.35/'
    ]
    let allowExtList = [
      'apk',
      'arff',
      'au3',
      'bat',
      'conf',
      'csl',
      'css',
      'csv',
      'doc',
      'docx',
      'emf',
      'exe',
      'fdf',
      'gif',
      'ico',
      'ini',
      'java',
      'jpe',
      'jpg',
      'JPG',
      'js',
      'lrc',
      'mas',
      'model',
      'ods',
      'odt',
      'pdf',
      'png',
      'ppt',
      'pptx',
      'py',
      'r',
      'R',
      'reg',
      'sav',
      'sh',
      'sql',
      'ssa',
      'svg',
      'swf',
      'tmpl',
      'ttf',
      'txt',
      'wav',
      'xls',
      'xlsx',
      'xml',
      'yaml'
    ]
    
    let pushImageList = function (link) {
      // console.log(link)
      if (link.indexOf('/blob/') > -1
              || link.indexOf('skydrive.live.com/') > -1
              || link.indexOf('/pudding.miroko.tw/') > -1
              || link.indexOf('/www.mediafire.com/') > -1
              || link.indexOf('/yandex.com/') > -1
              || link.indexOf('.flashmirrors.com') > -1
              || link.indexOf('/puddingchen.35.googlepages.com/') > -1) {
        return false
      }
      
      // console.log(link, 1)
      let ext = extractExt(link)
      if (allowExtList.indexOf(ext) === -1 && link.startsWith('https://blogger.googleusercontent.com/img/a/') === false) {
        return false
      }
      
      // console.log(link, imageList[link], 2)
      // https://lh3.googleusercontent.com/-quhLaYWL29s/WCsAVr6SwpI/AAAAAAAC9iI/F62sfdA4C90/image_thumb%25255B4%25255D.png?imgmax=800
      // http://2.bp.blogspot.com/-L-p05d-w9LA/XHbAUssrMPI/AAAAAAAED78/31DtDe9q6JcGr77dvTTUOna6huIYwbvEgCK4BGAYYCw/s0/%25E7%25B0%25A1%25E5%25A0%25B11.png
      if (typeof(imageList[link]) === 'string') {
        // 表示已經加入了
        return false
      }
// 
      // console.log(link, 3)
      
      let filename = link
      filename = filename.slice(filename.lastIndexOf('/')+1, filename.length)
      if (filename.lastIndexOf("?") > -1) {
        filename = filename.slice(0, filename.lastIndexOf("?"))
      }
      
      // console.log(link, filename, 4)
      // unescape
      /*
      while (filename !== unescape(filename)) {
        filename = unescape(filename)
      }
      */
      while (filename !== decodeURIComponent(filename)) {
        filename = decodeURIComponent(filename)
      }
      
      // console.log(link, filename, 5)
      /*
      if (!filename.endsWith('.jpg')
              && !filename.endsWith('.png')
              && !filename.endsWith('.gif')) {
        // 我覺得這個可能用不到
        filename = filename + '.png'
      }
      */
      
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

      // console.log(link, filename, 6)
      
      filenameList.push(filename)
      imageList[link] = filename
      
      // console.log(link, filename, 7)
      return filename
    } // let pushImageList = function (link) {
    
    /*
    imgUrlPatterns.forEach((pattern) => {
      article.find('a[href*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.href)
      })

      article.find('img[src*="' + pattern + '"]').each((i, ele) => {
        pushImageList(ele.src)
      })
    })
    */
    article.find('a[href]').each((i, ele) => {
      pushImageList(ele.href)
      //ele.href = 'assets/' + pushImageList(ele.href)
    })

    article.find('img[src]').each((i, ele) => {
      pushImageList(ele.src)
      //ele.src = 'assets/' + pushImageList(ele.src)
    })
    
    //console.log(filenameList.length)
    //console.log(filenameList)
    // console.log(imageList)
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
        
        if (link.startsWith('https://blogger.googleusercontent.com/img/a/')) {
          let apiURL = `https://script.google.com/macros/s/AKfycbx2QQwxVGAVSAUedIeWBmFkauLqSyxv6LFCbAePgozGFmucM71Hcqlq6wDZ1Yt-retl/exec`
          let requestURL = apiURL + '?url=' + encodeURIComponent(link)

          $.getJSON(requestURL, async (result) => {
            let {output} = result
            let blob = await (await fetch(output)).blob()

            linkFileList[link].data = blob

            i++
            loop(i)
          })
        }
        else {
          JSZipUtils.getBinaryContent(link, (err, data) => {
            if (err) {
              //throw err; // or handle the error
              // 下載不到檔案的話
              delete linkFileList[link]
            }
            else {
              linkFileList[link].data = data
            }
            
            i++
            loop(i)
          });
        }
          
      }
      else {
        if (typeof(callback) === "function") {
          callback(linkFileList)
        }
      }
    }
    loop(0)
  },
  replaceArticleLink: function (article, linkFileList) {
    for (let link in linkFileList) {
      let filename = 'assets/' + linkFileList[link].filename
      //console.log(filename)
      
      this.replaceArticleSingleLink(article, link, filename)
      
      if (link.startsWith('http://') || link.startsWith('https://')) {
        let altLink = link.slice(link.indexOf('//'))
        this.replaceArticleSingleLink(article, altLink, filename)
      }
    }
    
    return article
  },
  replaceArticleSingleLink: function (article, link, filename) {
    article.find('a[href="' + link + '"]').each((i, ele) => {
      ele.href = filename
    })

    article.find('img[src="' + link + '"]').each((i, ele) => {
      ele.src = filename
    })
  },
  downloadZIP: function (filename, zip, callback) {
    zip.generateAsync({type: "blob"})
            .then((content) => {
              // see FileSaver.js
              let filesaver = saveAs(content, filename + ".zip");
              setTimeout(() => {
                if (typeof(callback) === 'function') {
                  callback()
                }
              }, 3000)
            });
  },
  downloadArticle: function () {
    //console.log('downloadArticle')
    //console.log(JSZip)
    //console.log(this.getMetadata())
    
    // 20240120-2229 
    // 因為沒有AddThis了。所以這些功能都要關掉。
    // if ($('.addthis-smartlayers .at-custom-sidebar-count:visible').length === 0) {
    //   setTimeout(() => {
    //     this.downloadArticle()
    //   }, 3000)
    //   return false
    // }
    
    // console.log(`downloadArticle`, 1)

    let filename = this.getArticleFilename()
    var zip = new JSZip();
    
    let article = this.getRenderedPost()
    let imageList = this.parseImageList(article)

    // console.log(`downloadArticle`, 2)
    
    this.getImageFromList(imageList,(linkFileList) => {
      // console.log({linkFileList})
      // console.log({imageList})

      article = this.replaceArticleLink(article, linkFileList)
      let articleHTML = this.beautifyHTML(article.html())
      
      let mainFolder = zip.folder(filename)
      mainFolder.file("article.html", articleHTML);
      
      let assets = null;
      for (let link in linkFileList) {
        if (assets === null) {
          assets = mainFolder.folder("assets")
        }
        let item = linkFileList[link]
        assets.file(item.filename, item.data, {binary:true});
      }
      
      // --------------------------
      
      let metadata = this.getMetadata()
      metadata = JSON.stringify(metadata, null, 2)
      mainFolder.file("metadata.json", metadata);

      // 下載comments的json
      //let commentJSONLink = $('.comment-form-tool a.feed.json').attr('href')
      let commentJSONLink = $('.comment-form-tool .comment-tools-select option[value="open-comment-feed-json"]').attr('data-url')
      
      commentJSONLink = commentJSONLink + '-in-script&callback=?'

      // console.log({commentJSONLink})

      $.getJSON(commentJSONLink, (commentJSON) => {
        commentJSON = JSON.stringify(commentJSON, null, 2)
        mainFolder.file("comments.json", commentJSON);

        // console.log({commentJSON})

        this.downloadZIP(filename, zip, () => {
          this.downloadArticleDocx()

          if (location.href.endsWith('downloadArticle=true')) {
            window.close()
          }
        })
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
  },
  downloadArticleDocx: function () {
    var doc = new Docxtemplater();
    doc.loadZip(new JSZip(template));

    // Compile the template with the data
    var data = {
      text: 'Hello, world'
    };
    doc.setData(data);
    doc.render();

    // Generate the DOCX file
    var generatedDoc = doc.getZip().generate({
      type: 'blob',
      mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });

    // Download the file as "test.docx"
    saveAs(generatedDoc, 'test.docx');
  }
}

if (typeof(window) === 'object') {
  window['articleDownload'] = articleDownload
}

export default articleDownload