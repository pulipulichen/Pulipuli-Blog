/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */

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

    //if (PULI_UTILS.is_blogger_fullpage() === false) {
    //	return;
    //}

    //PULI_UTILS.log('post.toc', '1');

    $(function () {	//頁面讀取完之後，再進行讀取

        if (typeof heading === "undefined") {
            heading = "h4";
        }

        //PULI_UTILS.log('post.toc', '2');

        if (typeof cata_container === "undefined") {

            //先檢查是否有取消目錄的功能
            if ($('div.entry-content .disable-post-catalog').length > 0) {
                return;
            }

            var firstHeading = $('div.entry-content:first > article > ' + heading + ':first');

            //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

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
            }
            else {
                var div = firstHeading.prevAll("div:first");
                hr = div.children(':last').filter('hr');
                if (hr.length > 0) {
                    hr.remove();
                    /*console.log("有 div > hr");*/
                }
                else {
                    var p = firstHeading.prevAll("p:first");
                    //p.css("border", "1px solid red");
                    //console.log([p.length, p.html()]);
                    hr = p.children().filter('hr');
                    if (hr.length > 0) {
                        hr.remove();
                        /*console.log("有 p > hr");*/
                    }
                    else {
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

            cata_container = $('<span></span>')
                    .addClass("puli-utils-append")
                    .hide()
                    .insertBefore(firstHeading);
            cata_container.attr('id', 'postcata' + PULI_UTILS.create_page_id());
        }

        //get cataSlt ID
        var cata = jQuery(cata_container);
        var prefix = cata.attr("id");

        //取得divID所在的所有的heading
        var postBody = jQuery(cata_container).parents("article:first");
        //postBody.css("border", "1px solid red");

        if (postBody.find('.cate-title').length > 0) {
            return;
        }

        //PULI_UTILS.log('post.toc', '3');

        var headingAry = postBody.find("h4,h5");
        var headingTop = [];
        var topId = {};
        for (i = 0; i < headingAry.length; i++) {
            heading = headingAry.eq(i);
            top = heading.offset().top;
            topId[top] = heading;
            headingTop.push(top);
        }
        
        if (headingTop.length === 1) {
            hr = firstHeading.prevAll().filter('hr');
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
        for (i = 0; i < headingTop.length; i++) {
            top = headingTop[i];
            heading = topId[top];
            headingAry.push(heading);
        }

        //PULI_UTILS.log('post.toc', '4');

        //headingAry.css("border", "1px solid red");

        var cataTitleID = prefix + "cataTitle";
        var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');

        var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '">'
        + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'
        + '</a>');

        var ulObj = jQuery("<ul></ul>")
                .addClass("puli-toc")
                .addClass("puli-utils-append")

        //在每個Heading後面加入錨點
        for (i = 0; i < headingAry.length; i++) {
            var hdObj = headingAry[i];

            var title = hdObj.text();
            var anchorID = prefix + "_anchor" + i;

            var anc = jQuery('<a class="heading-anchor puli-utils-append" id="' + anchorID + '" name="' + anchorID + '" />');
            hdObj.prepend(anc);

            hdObj.prepend(goCata.clone());

            var tagName = hdObj.prop('tagName');
            if (tagName === undefined) {
                tagName = hdObj.attr('tagName');
            }
            if (typeof (tagName) === "string") {
                tagName = tagName.toLowerCase();
            }

            var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

            if (tagName === 'h4') {
                ulObj.append(hd);
            }
            else if (tagName === 'h5') {

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
            //ulObj.append(hd);
        }

        //PULI_UTILS.log('post.toc', '5');

        /**
         * 顯示目錄
         */
        //console.log(headingAry.length);
        if (headingAry.length > 1) {

            cata_container.append(cataTitle)
                    .append(ulObj)
                    .slideDown();

            cata_container.prepend('<hr class="puli-utils-append" />');
            cata_container.append('<hr class="puli-utils-append" />');
        }

    });	//$(function () {

    //PULI_UTILS.log('post.toc', '6');

};

$(function () {
    PULI_UTILS.post.toc();
});

// -----------------------------
// 20170309 我要發問
$(function () {
    var _setup_iframe_anchor = function () {
        var _len1 = $("#comment-holder iframe:last").length;
        var _len2 = $(".comment-form > iframe:last").length;
        if (_len1 === 0 && _len2 === 0) {
            //console.log("iframe not found");
            setTimeout(_setup_iframe_anchor, 1000);
        }
        else {
            var _iframe = $("#comment-holder iframe:last");
            if (_len1 === 0 && _len2 > 0) {
                _iframe = $(".comment-form > iframe:last");
            }
            //console.log([_len1, _len2]);
            _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');
            
            var _needle = "#comment-form-iframe";
            var _href = location.href;
            if (_href.substr(_href.length-_needle.length) === _needle) {
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
        }
        else {
            $('#comment-holder .comment-content').html(function(i, inputText) {
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
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(i, aNode) {
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
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(i, aNode) {
             let url = aNode.href
             
             // 取得id
             if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
               url = url.slice(url.indexOf('?v=') + 3)
             }
             else if (url.indexOf('//youtu.be/') > 0) {
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