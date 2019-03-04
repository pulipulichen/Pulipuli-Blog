// --------------
// 20160625 隨機文章
$(function () {
  _load_random_posts();

  $('.widget.HTML.random > a.button').click(_load_random_posts)
});

var _load_random_posts = function () {
  var _ul = $("#random_posts");
  _ul.empty();

  var randomposts_number = 5;
  var randomposts_chars = 110;
  var randomposts_details = true;
  var randomposts_comments = '留言';
  var randomposts_commentsd = '';
  var randomposts_current = [];
  var total_randomposts = 0;
  
  var randomposts_current = new Array(randomposts_number);
  /*
  var randomposts_current = lscache.get('randomPostIds')
  if (randomposts_current === null) {
    randomposts_current = new Array(randomposts_number)
    lscache.set('randomPostIds', randomposts_current, 5)
  }
  */
  //console.log(randomposts_current)

  let randomposts = function (json) {
    total_randomposts = json.feed.openSearch$totalResults.$t;
    //console.log({'total_randomposts': total_randomposts})
  };
  //document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts\"><\/script>');

  /**
   * 取得隨機篇數的語法
   * 這邊改成每5分鐘再更換，不然太頻繁更換很麻煩
   * @author Pulipuli Chen 20190304
   */
  var getvalue = function () {
    randomposts_current = lscache.get('randomPostIds')
    if (randomposts_current !== null) {
      return
    }
    randomposts_current = new Array(randomposts_number)
    
    for (var i = 0; i < randomposts_number; i++) {
      var found = false;
      var rndValue = get_random();
      for (var j = 0; j < randomposts_current.length; j++) {
        if (randomposts_current[j] === rndValue) {
          found = true;
          break
        }
      }
      ;
      if (found) {
        i--;
      } else {
        randomposts_current[i] = rndValue;
      }
    }
    
    lscache.set('randomPostIds', randomposts_current, 5)
  };

  var get_random = function () {
    var ranNum = 1 + Math.round(Math.random() * (total_randomposts - 1));
    return ranNum;
  };

  var random_posts = function (json) {
    //for (var i = 0; i < randomposts_number; i++) {
      var entry = json.feed.entry[0];
      //console.log(entry)
      if (entry === undefined) {
        entry = json.feed.entry[i + ''];
      }
      //console.log(entry.title)
      //console.log(entry.title['$t'])
      //console.log(entry.title.$t)
      var randompoststitle = entry.title.$t;

      if (randompoststitle.length > 40) {
        randompoststitle = randompoststitle.substr(0, 40) + "...";
      }
      // 20160625 最新標題，把/之前的文字加上粗體
      if (randompoststitle.indexOf(" / ") > 0) {
        var _slash_pos = randompoststitle.indexOf(" / ");
        randompoststitle = "<strong>" + randompoststitle.substr(0, _slash_pos) + "</strong>" + randompoststitle.substr(_slash_pos);
      } else {
        randompoststitle = "<strong>" + randompoststitle + "</strong>";
      }

      if ('content' in entry) {
        var randompostsnippet = entry.content.$t;
      } else {
        if ('summary' in entry) {
          var randompostsnippet = entry.summary.$t;
        } else {
          var randompostsnippet = "";
        }
      }
      ;
      randompostsnippet = randompostsnippet.replace(/<[^>]*>/g, "");
      if (randompostsnippet.length < randomposts_chars) {
        var randomposts_snippet = randompostsnippet;
      } else {
        randompostsnippet = randompostsnippet.substring(0, randomposts_chars);
        var whitespace = randompostsnippet.lastIndexOf(" ");
        randomposts_snippet = randompostsnippet.substring(0, whitespace) + "&#133;";
      }
      ;
      for (var j = 0; j < entry.link.length; j++) {
        if ('thr$total' in entry && entry.thr$total.$t > 0) {
          var randomposts_commentsnum = entry.thr$total.$t + ' ' + randomposts_comments;
        } else {
          randomposts_commentsnum = randomposts_commentsd;
        }
        ;
        if (entry.link[j].rel === 'alternate') {
          var randompostsurl = entry.link[j].href;
          var randomposts_date = entry.published.$t;
          if ('media$thumbnail' in entry) {
            var randompoststhumb = entry.media$thumbnail.url;
          } else {
            randompoststhumb = "http://3.bp.blogspot.com/-5SoVe1K6JSk/Utl0OOmucAI/AAAAAAAAF6E/hQghgD_EJdQ/s1600/no_thumb.png";
          }
        }
      }
      ;
      var _li = '';
      //document.write('<li>');
      _li = _li + '<dd>';
      _li = _li + '<a href="' + randompostsurl + '" rel="nofollow" title="' + randomposts_snippet + '">';
      //document.write('<a href="' + randompostsurl + '" rel="nofollow"><img alt="' + randompoststitle + '" src="' + randompoststhumb + '"/></a>');
      _li = _li + '<img alt="' + randompoststitle + '" src="' + randompoststhumb + '"/>';
      //document.write('<div><a href="' + randompostsurl + '" rel="nofollow">' + randompoststitle + '</a></div>');

      _li = _li + randompoststitle;

      if (randomposts_details === true) {
        //document.write('<span><div  class="random-info">' + randomposts_date.substring(8, 10) + '.' + randomposts_date.substring(5, 7) + '.' + randomposts_date.substring(0, 4) + ' - ' + randomposts_commentsnum) + '</div></span>'

        _li = _li + '<span><div  class="random-info">('
                + randomposts_date.substring(0, 4)
                + '-' + randomposts_date.substring(8, 10)
                + '-' + randomposts_date.substring(5, 7)

                + ') ' + randomposts_commentsnum
                + '</span>';
      }
      ;
      //document.write('<br/><div class="random-summary">' + randomposts_snippet + '</div><div style="clear:both"></div></li>')
      //_li = _li + '<br/><div class="random-summary">' + randomposts_snippet + '</div>';
      _li = _li + '<div style="clear:both"></div>';
      _li = _li + '</a>' + '</dd>';
      _ul.append(_li);
    //}
  };
  
  let url = "/feeds/posts/default?alt=json-in-script&max-results=0&callback=?"
  let callback = function (data) {
    randomposts(data)
    //console.log(data)
    
    getvalue();
    //for (var i = 0; i < randomposts_number; i++) {
    //document.write('<script type=\"text/javascript\" src=\"/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts\"><\/script>')
    //$.getScript('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[i] + '&max-results=1&callback=random_posts');
    //};

    var _loop = function (_i) {
      //console.log([_i, randomposts_number]);
      //console.log(_i)
      if (_i < randomposts_current.length) {
        //console.log('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=random_posts');
        
        //$.getScript('/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=random_posts');
        let url = '/feeds/posts/default?alt=json-in-script&start-index=' + randomposts_current[_i] + '&max-results=1&callback=?'
        //console.log(url)
        lscacheHelper.getJSON(url, (data) => {
          //console.log(data)
          random_posts(data)
        })
        _i++
        //console.log(_i)
        _loop(_i)
      }
    }
    _loop(0)
  }

  //console.log("/feeds/posts/default?alt=json-in-script&max-results=0&callback=randomposts");
  //$.getScript(url, callback);
  //console.log(url)
  lscacheHelper.getJSON(url, callback, 60 * 24 * 30)
};