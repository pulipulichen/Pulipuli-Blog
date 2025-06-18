
// ------------------------------
// 20170309 留言網址變連結
let replaceURLtoLink = () => {
  //console.trace('誰讀取了 replaceURLtoLink')
  $('#comment-holder .comment-content:not(.replaced-url-to-link)').html(function (i, inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/\(\)%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|\(\)])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="https://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    $(this).addClass('replaced-url-to-link')

    //console.log(inputText, replacedText)
    return replacedText;
  });
}

let parseImgur = () => {
  $('#comment-holder .comment-content a[href$=".png"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".gif"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".jpg"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".jpeg"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".PNG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".GIF"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".JPG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href$=".JPEG"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href^="https://blogger.googleusercontent.com/img/a/"]:not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href^="http://imgur.com/"]:not([href^="http://imgur.com/upload"]):not(.parsed-imgur),'
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]:not([href^="https://imgur.com/upload"]):not(.parsed-imgur)').each(function (i, aNode) {
      let url = aNode.href

      if (url.indexOf('://imgur.com/') > 0) {
        if (url === 'http://imgur.com/'
                || url === 'https://imgur.com/') {
          return false
        }
        if (url.indexOf(',') > 0) {
          url = url.slice(0, url.indexOf(','))
        }

        if (url.indexOf('//imgur.com/a/') > 0) {
          //url = url.split('//imgur.com/a/').join('//imgur.com/')
          url = url.slice(url.indexOf('/a/') + 3)
          $(aNode).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/' + url + '">'
                  + '<a href="//imgur.com/' + url + '"></a>'
                  + '</blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>')
          $(aNode).addClass('parsed-imgur')
          return true
        }

        url = url + '.jpg'
      }
      
      //console.log(url)
      $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
      $(aNode).addClass('parsed-imgur')
    })
    
    // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
}

let parseYouTube = () => {
  $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="https://youtu.be/"]:not(.parsed-youtube),'
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]:not(.parsed-youtube)').each(function (i, aNode) {
      let url = aNode.href

      // 取得id
      // if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
      //   url = url.slice(url.indexOf('?v=') + 3)
      // } else if (url.indexOf('//youtu.be/') > 0) {
      //   url = url.slice(url.indexOf('.be/') + 4)
      // }
      let id = youtube_parser(url)

      //console.log(url)
      $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + id + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')
      $(aNode).addClass('parsed-youtube')
    })
}

function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

// 20170309 留言網址變連結
let anonymousToImage = () => {
  //console.trace('誰讀取了 replaceURLtoLink')
  $('.avatar-image-container > img[src="//resources.blogblog.com/img/blank.gif"]').each(function (i, ele) {
    ele = $(ele)
    ele.after(`<img src="//3.bp.blogspot.com/-LjxZkakL_Us/XZNckMvlIXI/AAAAAAAEYoI/r6OlfDjQdTIOowbxJ74KPlgAoDt8HufcgCK4BGAYYCw/s48/gnome_stock_person.png" class="anonymous-avatar" />`)
    ele.remove()
  });
}

/**
 * @author Pulipuli Chen 20190929
 * https://streamable.com
 * 
https://www.youtube.com/watch?v=XF4-5qOA1tY

https://streamable.com/h9hif

<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;"><iframe src="https://streamable.com/s/h9hif/qdchgw" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe></div>
 */
let parseStreamable = () => {
  
  $('#comment-holder .comment-content a[href^="https://streamable.com/"]').each(function (i, aNode) {
      let url = aNode.href
      if (typeof(url) !== 'string') {
        return false
      }

      // 取得id
      let id = url.slice(url.lastIndexOf('/') + 1)

      //console.log(url)
      $(aNode).before(`<div style="width:100%;height:0px;position:relative;padding-bottom:56.250%;">
        <iframe src="https://streamable.com/s/${id}" frameborder="0" width="100%" height="100%" allowfullscreen style="width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"></iframe>
      </div>`)
    })
}

let commentInited = false
var _setup_comment_to_link = function () {
  if (commentInited === true) {
    return false
  }
  
  var _len = $("#comment-holder").length;
  if (_len === 0) {
    setTimeout(_setup_comment_to_link, 1000);
  } else {
    replaceURLtoLink()
    parseImgur()
    parseYouTube()
    parseStreamable()
    anonymousToImage()
    commentInited = true
  }
};

$(function () {
  _setup_comment_to_link();
});

//console.trace('是誰讀取CommentLinkParser.js')