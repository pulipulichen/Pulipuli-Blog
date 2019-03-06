
// ----------------------------------
// 20160522 Relate post的功能

let displayComment = function () {
  var items = getBloggerVariable('post-commentJso');
  var msgs = getBloggerVariable('post-commentMsgs');
  var config = getBloggerVariable('post-commentConfig');
  
  var cursor = null;
  if (items && items.length > 0) {
    cursor = parseInt(items[items.length - 1].timestamp) + 1;
  }

  var bodyFromEntry = function (entry) {
    if (entry.gd$extendedProperty) {
      for (var k in entry.gd$extendedProperty) {
        if (entry.gd$extendedProperty[k].name === 'blogger.contentRemoved') {
          return '<span class="deleted-comment">' + entry.content.$t + '</span>';
        }
      }
    }
    return entry.content.$t;
  }

  var parse = function (data) {
    cursor = null;
    var comments = [];
    if (data && data.feed && data.feed.entry) {
      for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
        var comment = {};
        // comment ID, parsed out of the original id format
        var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
        comment.id = id ? id[2] : null;
        comment.body = bodyFromEntry(entry);
        comment.timestamp = Date.parse(entry.published.$t) + '';
        if (entry.author && entry.author.constructor === Array) {
          var auth = entry.author[0];
          if (auth) {
            comment.author = {
              name: (auth.name ? auth.name.$t : undefined),
              profileUrl: (auth.uri ? auth.uri.$t : undefined),
              avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
            };
          }
        }
        if (entry.link) {
          if (entry.link[2]) {
            comment.link = comment.permalink = entry.link[2].href;
          }
          if (entry.link[3]) {
            var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
            if (pid && pid[1]) {
              comment.parentId = pid[1];
            }
          }
        }
        comment.deleteclass = 'item-control blog-admin';
        if (entry.gd$extendedProperty) {
          for (var k in entry.gd$extendedProperty) {
            if (entry.gd$extendedProperty[k].name === 'blogger.itemClass') {
              comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
            }
          }
        }
        comments.push(comment);
      }
    }
    return comments;
  };

  /**
   * @author Pulipuli Chen 20190306
   * 完全不知道下面這個要幹嘛，先全部移除掉
   */
  /*
  var paginator = function (callback) {
    if (hasMore()) {
      var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
      if (cursor) {
        url += '&published-min=' + new Date(cursor).toISOString();
      }
      window.bloggercomments = function (data) {
        var parsed = parse(data);
        cursor = parsed.length < 50 ? null
                : parseInt(parsed[parsed.length - 1].timestamp) + 1;
        callback(parsed);
        window.bloggercomments = null;
      };
      url += '&callback=bloggercomments';
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      document.getElementsByTagName('head')[0].appendChild(script);
    }
  };
  var hasMore = function () {
    return !!cursor;
  };
  var getMeta = function (key, comment) {
    if ('iswriter' === key) {
      var matches = !!comment.author
              && comment.author.name === config.authorName
              && comment.author.profileUrl === config.authorUrl;
      return matches ? 'true' : '';
    } else if ('deletelink' === key) {
      return config.baseUri + '/delete-comment.g?blogID='
              + config.blogId + '&postID=' + comment.id;
    } else if ('deleteclass' === key) {
      return comment.deleteclass;
    }
    return '';
  };

  var replybox = null;
  var replyUrlParts = null;
  var replyParent = undefined;

  var onReply = function (commentId, domId) {
    if (replybox === null) {
      // lazily cache replybox, and adjust to suit this style:
      replybox = document.getElementById('comment-editor');
      if (replybox !== null) {
        replybox.height = '210px';
        replybox.style.display = 'block';
        replyUrlParts = replybox.src.split('#');
      }
    }
    if (replybox && (commentId !== replyParent)) {
      document.getElementById(domId).insertBefore(replybox, null);
      replybox.src = replyUrlParts[0]
              + (commentId ? '&parentID=' + commentId : '')
              + '#' + replyUrlParts[1];
      replyParent = commentId;
    }
  };

  var hash = (window.location.hash || '#').substring(1);
  var startThread, targetComment;
  if (/^comment-form_/.test(hash)) {
    startThread = hash.substring('comment-form_'.length);
  } else if (/^c[0-9]+$/.test(hash)) {
    targetComment = hash.substring(1);
  }

  // Configure commenting API:
  var configJso = {
    'maxDepth': config.maxThreadDepth
  };
  var provider = {
    'id': config.postId,
    'data': items,
    //'loadNext': paginator,
    'hasMore': hasMore,
    'getMeta': getMeta,
    'onReply': onReply,
    'rendered': true,
    'initComment': targetComment,
    'initReplyThread': startThread,
    'config': configJso,
    'messages': msgs
  };

  
  var render = function () {
    if (goog && goog.comments) {
      var holder = document.getElementById('comment-holder');
      goog.comments.render(holder, provider);
    }

    var _div = $(".comment-replies ol li.comment span.comment-actions");
    for (var _i = 0; _i < _div.length; _i++) {
      _div.eq(_i).append(_reply_link.clone(true));
    }
    //console.log(_div.length);
  };

  // render now, or queue to render when library loads:
  if (goog && goog.comments) {
    render();
  } else {
    goog = goog || {};
    goog.comments = goog.comments || {};
    goog.comments.loadQueue = goog.comments.loadQueue || [];
    goog.comments.loadQueue.push(render);
  }
  */

};

let addSubCommentReplyLink = () => {
  
  // 為每個回覆的留言後面加上回覆的連結
  var _reply_link = $('<a kind="i" href="javascript:void(0);" target="_self" o="r">回覆</a>').click(function () {
    $(this).parents(".comment-replies").prev().find('a[o="r"]:first').click();
    var _top = $("#comment-editor:first").offset().top - $("#masthead .container:first").height();
    window.scrollTo(0, _top);
  });
  var _div = $(".comment-replies ol li.comment span.comment-actions");
  for (var _i = 0; _i < _div.length; _i++) {
    _div.eq(_i).prepend(_reply_link.clone(true));
  }
}

$(() => {
  displayComment()
  addSubCommentReplyLink()
  //console.log("aaa")
})