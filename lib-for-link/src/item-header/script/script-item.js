/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */


// -----------------------------
// 20170309 我要發問
$(function () {
  var _setup_iframe_anchor = function () {
    var _len1 = $("#comment-holder iframe:last").length;
    var _len2 = $(".comment-form > iframe:last").length;
    if (_len1 === 0 && _len2 === 0) {
      //console.log("iframe not found");
      setTimeout(_setup_iframe_anchor, 1000);
    } else {
      var _iframe = $("#comment-holder iframe:last");
      if (_len1 === 0 && _len2 > 0) {
        _iframe = $(".comment-form > iframe:last");
      }
      //console.log([_len1, _len2]);
      _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');

      var _needle = "#comment-form-iframe";
      var _href = location.href;
      if (_href.substr(_href.length - _needle.length) === _needle) {
        var _top = _iframe.offset().top - 50;
        $(window).scrollTop(_top);
      }
    }
  };
  _setup_iframe_anchor();
});

// ------------------------------
// 20170309 留言網址變連結
$(function () {
  var _setup_comment_to_link = function () {
    var _len = $("#comment-holder").length;
    if (_len === 0) {
      setTimeout(_setup_comment_to_link, 1000);
    } else {
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

      $('#comment-holder .comment-content a[href$=".png"],'
              + '#comment-holder .comment-content a[href$=".gif"],'
              + '#comment-holder .comment-content a[href$=".jpg"],'
              + '#comment-holder .comment-content a[href^="http://imgur.com/"],'
              + '#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function (i, aNode) {
        let url = aNode.href

        if (url.indexOf('://imgur.com/') > 0) {
          if (url === 'http://imgur.com/'
                  || url === 'https://imgur.com/') {
            return
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
            return
          }

          url = url + '.jpg'
        }

        //console.log(url)
        $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
      })

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

      // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
    }
  };
  _setup_comment_to_link();
});