
/* global PULI_UTILS */

/**
 * Table of Content
 * for Pulipuli.blogspot.tw
 * 布丁式自動標題產生器
 * 
 * 如果要停止功能，請加入<span class="disable-post-catalog"></span>
 * @author Pulipuli Chen
 * @version 20130304
 */
PULI_UTILS.post.toc = function (cata_container, heading) {
  var i, top;
  let cateID = 'postcata' + PULI_UTILS.create_page_id()
  let isCached = false
  
  let cachedHTML = localStorage.getItem(cateID)
  if (cachedHTML !== null) {
    isCached = true
  }

  //if (PULI_UTILS.is_blogger_fullpage() === false) {
  //	return;
  //}

  //PULI_UTILS.log('post.toc', '1');

  $(function () {	//頁面讀取完之後，再進行讀取
  
    //取得divID所在的所有的heading
    
    /**
     * 修復 #77的問題
     * https://github.com/pulipulichen/Pulipuli-Blog/issues/77
     * @author Pulipuli Chen 20190521
     * @returns {Array}
     */
    var postBody = $("#main article.article:first");

    /**
     * 如果已經有cata-title元素，則不使用本功能
     */
    if (postBody.find('.cate-title').length > 0) {
      return;
    }
    
    let headingTag = ['h4', 'h5']
    if (postBody.find("h2").length > 0) {
      headingTag = ['h2', 'h3']
      postBody.addClass('heading-h2-h3')
    }
    else {
      postBody.addClass('heading-h4-h5')
    }
    //console.log(headingTag)
    
    if (typeof heading === "undefined") {
      heading = headingTag[0];
    }

    //PULI_UTILS.log('post.toc', '2');
    var firstHeading = $('div.entry-content:first > article > ' + heading + ':first');
    cleanFirstHeading(firstHeading)

    if (isCached === false 
            && typeof cata_container === "undefined") {

      //先檢查是否有取消目錄的功能
      if ($('div.entry-content .disable-post-catalog').length > 0) {
        return;
      }

      

      //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

      if (firstHeading.length === 0) {
        return;
      }

      cata_container = $('<span></span>')
              .addClass("puli-utils-append")
              .hide()
              .insertBefore(firstHeading)
      cata_container.attr('id', cateID)
    }
    else {
      //console.log(cachedHTML)
      //console.log(firstHeading.length)
      cata_container = $(cachedHTML).insertBefore(firstHeading)
    }

    //get cataSlt ID
    //var cata = jQuery(cata_container)
    var prefix = cateID

    //postBody.css("border", "1px solid red");


    //PULI_UTILS.log('post.toc', '3');

    var headingAry = getHeadingAry(postBody, headingTag, firstHeading)

    var cataTitleID = prefix + "cataTitle";
    var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');
    var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '" title="Go to top">'
            + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'
            + '</a>');

    var ulObj
    if (isCached === false) {
      ulObj = jQuery("<ul></ul>")
              .addClass("puli-toc")
              .addClass("puli-utils-append")
    }

    //在每個Heading後面加入錨點
    //console.log(headingAry)
    for (i = 0; i < headingAry.length; i++) {
      var hdObj = headingAry[i];

      var title = hdObj.text();
      var anchorID = prefix + "_anchor" + i;

      var anc = jQuery('<a class="heading-anchor puli-utils-append" id="' + anchorID + '" name="' + anchorID + '" />');
      hdObj.prepend(anc);
      
      /**
       * @author Pulipuli Chen 20190929
       * 與此同時，也在每個Heading前面加上錨點
       */
      let permanentLink = jQuery(`<a class="heading-permanent-link puli-utils-append" href="#' + anchorID + '" title="Copy link">
        <i aria-hidden="true" class="fa fa-link" title="Copy link"></i>
      </a>`);
      hdObj.prepend(permanentLink);
      
      permanentLink.click(function (event) {
        
        /*
        let url = location.href
        if (url.indexOf('#') > 0) {
          url = url.slice(0, url.indexOf('#'))
        }
        */
        url = this.href
        
        var textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        textArea.style.position = 'absolute'
        textArea.style.top = top + 'px'
        
        textArea.focus();
        textArea.select();

        try {
          var successful = document.execCommand('copy');
          var msg = successful ? 'successful' : 'unsuccessful';
          //console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
          console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
        
        event.preventDefault()
        event.stopPropagation()
        return false
      })

      hdObj.prepend(goCata.clone());

      var tagName = hdObj.prop('tagName');
      if (tagName === undefined) {
        tagName = hdObj.attr('tagName');
      }
      if (typeof (tagName) === "string") {
        tagName = tagName.toLowerCase();
      }
      
      // -----------------------------------

      if (isCached === false) {
        var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

        if (tagName === headingTag[0]) {
          ulObj.append(hd);
        } else if (tagName === headingTag[1]) {

          var lastHd = ulObj.children('li:last');

          if (lastHd.length === 0) {
            lastHd = $('<li></li>').appendTo(ulObj);
          }

          var lastUl = lastHd.children("ul:last");

          if (lastUl.length === 0) {
            lastUl = $('<ul></ul>').appendTo(lastHd);
          }
          lastUl.append(hd);
        }
      }
      //ulObj.append(hd);
    }

    //PULI_UTILS.log('post.toc', '5');

    /**
     * 顯示目錄
     */
    //console.log(headingAry.length)
    if (isCached === false) {
      if (headingAry.length > 1) {
        cata_container.append(cataTitle)
                .append(ulObj)
                .slideDown();

        cata_container.prepend('<hr class="puli-utils-append" />');
        cata_container.append('<hr class="puli-utils-append" />');
      }
    }
    else {
      cata_container.slideDown();
    }
    
    if (isCached === false) {
      let html = cata_container.prop('outerHTML')
      html = html.replace('overflow: hidden;', '')
      cata_container.find('.puli-toc').dblclick(() => {
        localStorage.removeItem(cateID)
      })
      //console.log(html)
      
      localStorage.setItem(cateID, html)
    }
  
  });	//$(function () {

  //PULI_UTILS.log('post.toc', '6');
  
};

let getHeadingAry = function (postBody, headingTag, firstHeading) {
  let top;
  
  var headingAry = postBody.find(headingTag.join(','))
  
  var headingTop = [];
  var topId = {};
  for (let i = 0; i < headingAry.length; i++) {
    let heading = headingAry.eq(i);
    top = heading.offset().top;
    topId[top] = heading;
    headingTop.push(top);
  }

  if (headingTop.length === 1) {
    let hr = firstHeading.prevAll().filter('hr');
    if (hr.length === 0) {
      firstHeading.before("<hr />");
    }
    return;
  }

  //然後將headingTop排序
  headingTop.sort(function (a, b) {
    return a - b;
  });

  //重新輸入headingAry
  headingAry = [];
  for (let i = 0; i < headingTop.length; i++) {
    top = headingTop[i];
    heading = topId[top];
    headingAry.push(heading);
  }
  
  return headingAry
}

let cleanFirstHeading = function (firstHeading) {
  if (firstHeading.length === 0) {
    return;
  }

  //如果firstHeading之前有<font size="3"></font>，則移除之
  var font = firstHeading.prev().filter('font');
  if (font.length > 0) {
    font.remove();
  }

  //如果firstHeading之前有hr，則移除之
  var hr = firstHeading.prev().filter('hr');
  if (hr.length > 0) {
    hr.remove();
    /*console.log("有<hr />");*/
  } else {
    var div = firstHeading.prevAll("div:first");
    hr = div.children(':last').filter('hr');
    if (hr.length > 0) {
      hr.remove();
      /*console.log("有 div > hr");*/
    } else {
      var p = firstHeading.prevAll("p:first");
      //p.css("border", "1px solid red");
      //console.log([p.length, p.html()]);
      hr = p.children().filter('hr');
      if (hr.length > 0) {
        hr.remove();
        /*console.log("有 p > hr");*/
      } else {
        hr = p.prev().filter("hr");
        if (hr.length > 0) {
          hr.remove();
        }
        //console.log(["p裡面找不到", p.length, p.children().length, p.html() ]);
      }
      if ($.trim(p.html()) === "") {
        p.remove();
        //console.log('p 也移除囉');
      }
    }
  }

  //var p = firstHeading.prevAll("p:first");
  //console.log(firstHeading.html());
  //console.log(p.children().length);
  //if (p.length > 0) {
  //	p.remove();
  //}
}

$(function () {
  PULI_UTILS.post.toc();
});