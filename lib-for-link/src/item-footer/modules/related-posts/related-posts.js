require('./related-posts.less')
require('./jQueryOwlCarousel.js')
require('./printRelatedLabels_thumbs.js')

maxresults = 10
splittercolor = ''
relatedpoststitle = 'Related Posts'

let pulipuli_related_results_labels_thumbs = function (e) {
    //console.log(e);
    if (typeof(e.feed.entry) === "undefined") {
        if ($(".related-posts").hasClass("has-item") === false) {
            $(".related-posts").hide();
        }
        return;
    }
    else {
        $(".related-posts").addClass("has-item");
        $(".related-posts").show();
    }

    for (var t = 0; t < e.feed.entry.length; t++) {
        var n = e.feed.entry[t];
        relatedTitles[relatedTitlesNum] = n.title.$t;
        try {
            thumburl[relatedTitlesNum] = n.media$thumbnail.url;
        } catch (r) {
            var s = n.content.$t;
            var a = s.indexOf("<img");
            var b = s.indexOf('src="', a);
            var c = s.indexOf('"', b + 5);
            var d = s.substr(b + 5, c - b - 5);
            if (a !== -1 && b !== -1 && c !== -1 && d !== "") {
                thumburl[relatedTitlesNum] = d;
            } else {
                if (typeof defaultnoimage !== "undefined")
                    thumburl[relatedTitlesNum] = defaultnoimage;
                else
                    thumburl[relatedTitlesNum] = "";
            }
        }
        //if (relatedTitles[relatedTitlesNum].length > 60) {
        //    relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
        //}
        for (var i = 0; i < n.link.length; i++) {
            if (n.link[i].rel === "alternate") {
                relatedUrls[relatedTitlesNum] = n.link[i].href;
                relatedTitlesNum++;
            }
        }
    }
}

_puli_related_post_render = function (_owl_items) {
    //console.log($(_owl_items[0]).html());
    for (var _i = 0; _i < _owl_items.length; _i++) {
        var _item = $(_owl_items[_i]);
        var _a = _item.find("a:first");
        var _title = _a.attr("title");
        _a.prepend('<div class="related-post-title">' + _title + '</div>');
    }
    
    $(function () {
        var _stop_play = "stop-play";
        $(".owl-wrapper-outer").hover(function () {
            $(this).addClass(_stop_play);
        }, function () {
            $(this).removeClass(_stop_play);
        });
    });
};

let loadLabelsRelatedPosts = (callback) => {
  let labelList = getBloggerVariable('data-label-name')
  //console.log(labelList)
  let loop = (i) => {
    if (i < labelList.length) {
      // <script src='/feeds/posts/default/-/Software/GoogleDoc?alt=json-in-script&callback=pulipuli_related_results_labels_thumbs&max-results=6' type='text/javascript'></script>
      let url = '/feeds/posts/default/-/' + labelList[i] + '?alt=json-in-script&max-results=6&callback=?'
      lscacheHelper.getJSON(url, (data) => {
        pulipuli_related_results_labels_thumbs(data)
        i++
        loop(i)
      })
    }
    else {
      if (typeof(callback) === 'function') {
        callback()
      }
    }
  }
  loop(0)
} 

// --------------------

relatedTitles = new Array;
relatedTitlesNum = 0;
relatedUrls = new Array;
thumburl = new Array;

$(function() {
  let postUrl = getBloggerVariable('data-post-url')
  if (typeof(postUrl) === 'undefined') {
    return
  }
  
  
  loadLabelsRelatedPosts(() => {
    removeRelatedDuplicates_thumbs();
    printRelatedLabels_thumbs(postUrl);

    $("#owl-demo").owlCarousel({
      autoPlay: 5000,
      items : 3,
      itemsDesktop : [1200,3],
      itemsDesktopSmall : [980,2],
      itemsMobile : [480,1]
    })
  })
});

// ----------------------------------------
