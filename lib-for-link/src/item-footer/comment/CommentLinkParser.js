
// ------------------------------
// 20170309 留言網址變連結
let replaceURLtoLink = () => {
  $('#comment-holder .comment-content').html(function (i, inputText) {
    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
  });
}

let parseImgur = () => {
  $('#comment-holder .comment-content a[href$=".png"],'
            + '#comment-holder .comment-content a[href$=".gif"],'
            + '#comment-holder .comment-content a[href$=".jpg"],'
            + '#comment-holder .comment-content a[href^="http://imgur.com/"]:not([href^="http://imgur.com/upload"]),'
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]:not([href^="https://imgur.com/upload"])').each(function (i, aNode) {
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
          return true
        }

        url = url + '.jpg'
      }

      //console.log(url)
      $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
    })
    
    // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
}

let parseYouTube = () => {
  $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="https://youtu.be/"],'
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function (i, aNode) {
      let url = aNode.href

      // 取得id
      if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
        url = url.slice(url.indexOf('?v=') + 3)
      } else if (url.indexOf('//youtu.be/') > 0) {
        url = url.slice(url.indexOf('.be/') + 4)
      }

      //console.log(url)
      $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')
    })
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

var _setup_comment_to_link = function () {
  var _len = $("#comment-holder").length;
  if (_len === 0) {
    setTimeout(_setup_comment_to_link, 1000);
  } else {
    replaceURLtoLink()
    parseImgur()
    parseYouTube()
    parseStreamable()
  }
};

$(function () {
  _setup_comment_to_link();
});