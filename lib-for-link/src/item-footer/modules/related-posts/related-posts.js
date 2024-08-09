require('./related-posts.less')
require('./jQueryOwlCarousel.js')
require('./printRelatedLabels_thumbs.js')

maxresults = 10
splittercolor = ''
//relatedpoststitle = 'Related Posts'

let pulipuli_related_results_labels_thumbs = function (e) {
  //console.log(e);
  /*
  if (typeof (e.feed.entry) === "undefined") {
    if ($(".related-posts").hasClass("has-item") === false) {
      $(".related-posts").hide();
    }
    return;
  } else {
    $(".related-posts").addClass("has-item");
    $(".related-posts").show();
  }
  */

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

let loadLabelsRelatedPosts = (callback) => {
  let labelList = getBloggerPostsVariable('data-label-name')[0]
  //console.log(labelList)
  
  let maxResults = 6
  if (labelList.length === 1) {
    maxResults = 10
  }
  //console.log(labelList.length)
  //console.log(labelList)
  let loop = (i) => {
    if (i < labelList.length) {
      let label = encodeURIComponent(labelList[i])
      //console.log(label)

      if (typeof (label) !== 'string'
              || label.trim() === '') {
        i++
        loop(i)
        return
      }
      // <script src='/feeds/posts/default/-/Software/GoogleDoc?alt=json-in-script&callback=pulipuli_related_results_labels_thumbs&max-results=6' type='text/javascript'></script>
      let url = '/feeds/posts/default/-/' + label + '?alt=json-in-script&max-results=' + maxResults + '&callback=?'
      //console.log(url)
      lscacheHelper.getJSON(url, (data) => {
        //$.getJSON(url, (data) => {
        //console.log(data)
        pulipuli_related_results_labels_thumbs(data)
        i++
        loop(i)
      })
    } else {
      if (typeof (callback) === 'function') {
        callback()
      }
    }
  }
  loop(0)
}

// --------------------

relatedTitles = []
relatedTitlesNum = 0;
relatedUrls = []
thumburl = []

$(function () {
  let postUrl = getBloggerPostsVariable('data-post-url')[0]
  if (typeof (postUrl) === 'undefined') {
    return
  }


  loadLabelsRelatedPosts(() => {
    removeRelatedDuplicates_thumbs();
    //console.log('printRelatedLabels_thumbs')
    printRelatedLabels_thumbs(postUrl);

    $(".related-posts #owl-demo").owlCarousel({
      autoPlay: 5000,
      items: 4,
      itemsDesktop: [1200, 3],
      //itemsDesktopSmall: [979, 3],
      itemsTablet: [940, 2],
      //itemsTabletSmall: [979, 3],
      itemsMobile: [340, 1]
    })
  })
});

// ----------------------------------------
