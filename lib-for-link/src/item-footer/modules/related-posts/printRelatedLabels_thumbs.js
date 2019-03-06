related_results_labels_thumbs = function (e) {
  for (var t = 0; t < e.feed.entry.length; t++) {
    var n = e.feed.entry[t];
    relatedTitles[relatedTitlesNum] = n.title.$t;
    try {
      thumburl[relatedTitlesNum] = n.media$thumbnail.url
    } catch (r) {
      s = n.content.$t;
      a = s.indexOf("<img");
      b = s.indexOf('src="', a);
      c = s.indexOf('"', b + 5);
      d = s.substr(b + 5, c - b - 5);
      if (a != -1 && b != -1 && c != -1 && d != "") {
        thumburl[relatedTitlesNum] = d
      } else {
        if (typeof defaultnoimage !== "undefined") {
          thumburl[relatedTitlesNum] = defaultnoimage;
        }
        else {
          thumburl[relatedTitlesNum] = ""
        }
      }
    }
    if (relatedTitles[relatedTitlesNum].length > 60) {
      relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
    }
    for (var i = 0; i < n.link.length; i++) {
      if (n.link[i].rel == "alternate") {
        relatedUrls[relatedTitlesNum] = n.link[i].href;
        relatedTitlesNum++
      }
    }
  }
}

removeRelatedDuplicates_thumbs = function () {
  var e = new Array(0);
  var t = new Array(0);
  var n = new Array(0);
  for (var r = 0; r < relatedUrls.length; r++) {
    if (!contains_thumbs(e, relatedUrls[r])) {
      e.length += 1;
      e[e.length - 1] = relatedUrls[r];
      t.length += 1;
      n.length += 1;
      t[t.length - 1] = relatedTitles[r];
      n[n.length - 1] = thumburl[r]
    }
  }
  relatedTitles = t;
  relatedUrls = e;
  thumburl = n
}

contains_thumbs = function (e, t) {
  for (var n = 0; n < e.length; n++) {
    if (e[n] === t) {
      return true;
    }
  }
  return false
}

printRelatedLabels_thumbs = function (e) {
  //console.log(e)

  var t;
  if (typeof splittercolor !== "undefined") {
    t = splittercolor;
  } else {
    t = "";
  }
  for (var n = 0; n < relatedUrls.length; n++) {
    if (relatedUrls[n] == e || !relatedTitles[n]) {
      relatedUrls.splice(n, 1);
      relatedTitles.splice(n, 1);
      thumburl.splice(n, 1);
      n--
    }
  }
  var r = Math.floor((relatedTitles.length - 1) * Math.random());
  var n = 0;
  var c = $('<div></div>').appendTo($('.related-posts:first'))
  /*
  if (relatedTitles.length > 0) {
    //document.write('<div class="title"><h4>' + relatedpoststitle + "</h4></div>");
    c.append($('<div class="title"><h4>' + relatedpoststitle + '</h4></div>'))
  }
  */
  //document.write('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>');
  //var owl = $('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>').appendTo(c)
  var owl = $('.related-posts:first #owl-demo')
  //console.log(relatedTitles)
  if (relatedTitles.length > 0) {
    $('.related-posts.hidden').removeClass('hidden')
  }

  while (n < relatedTitles.length && n < 20 && n < maxresults) {
    //document.write('<div class="item-img"><a ');
    var aTag = '<div class="item-img"><a '
    if (n !== 0) {
      //document.write("");
    } else {
      //document.write('"');
      aTag += '"'
    }
    //document.write(' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img style="width:240px;height:160px;" alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>');
    aTag += ' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>'
    n++;
    if (r < relatedTitles.length - 1) {
      r++
    } else {
      r = 0
    }
    owl.append($(aTag))
  }
  //document.write("</div>");
  relatedUrls.splice(0, relatedUrls.length);
  thumburl.splice(0, thumburl.length);
  relatedTitles.splice(0, relatedTitles.length)
}

/*
 window.onload = function() {
 var e = document.getElementById("mycontent");
 if (e == null) {
 window.location.href = "http://www.themexpose.com/"
 }
 e.setAttribute("href", "http://www.themexpose.com/");
 e.innerHTML = "ThemeXpose"
 }
 */