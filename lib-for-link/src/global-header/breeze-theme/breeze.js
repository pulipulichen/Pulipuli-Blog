rm2 = function (postId, _url) {
  //let postId = getBloggerPostsVariable('data-post-id')[0]
  
    var _id = postId;
    var _labels = $("#l" + postId).clone().show().html();
    var postElement = document.getElementById(postId);
    imgtag='';
    ifrtag='';
    ifrsrc='';
    ifrtb=-1;
    img=postElement.getElementsByTagName('img');
    ifr=postElement.getElementsByTagName('iframe');
    for ( var i=0;i<ifr['length'];i++) { 
        ifrsrc=ifr[i]['src'];
        if (ifrsrc['indexOf']('//www.youtube.com/embed/')!=-1) {
            ifrtb=i;
            break
        }
        else {
            if (ifrsrc['indexOf']('//player.vimeo.com/video/')!=-1) {
                ifrtb=i;
                break
            }
            else {
                if (ifrsrc['indexOf']('//www.dailymotion.com/embed/video/')!=-1) { 
                    ifrtb=i;
                    break
                }
                else { 
                    if(ifrsrc['indexOf']('//w.soundcloud.com/player/')!=-1){ 
                        ifrtb=i;
                        break
                    }
                }
            }
        }
    };
    if (ifrtb!=-1) {
        ifrtag= '<div class="entry-video"><iframe width="840" height="472" src=""' 
                + ifrsrc
                + '?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>'
    }
    else { 
        if(img['length'] >= 1) {
            imgtag = '<div class="entry-image"><a href="'
                    + y 
                    + '"><img class="thumb" src="'
                    + img[0]['src']
                    + '" /></a></div>'
        }
        else {
            imgtag = '<div class="entry-image no-image"><a href="'
                    + y
                    + '"><img class="thumb" src="//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg" /></a></div>'
        }
    }
    postElement['innerHTML'] = ifrtag 
            + imgtag 
            + '<div class="entry-container"><div class="entry-content"><div class="foundation"> <div class="post-avatar"></div> <div class="avatar-name">' 
            + z 
            + '</div>' 
            + '<div class="meta">'
            + '<p><small> <span>'
              + '<i class="fa fa-clock-o"></i>' + t + '</span>' + _labels + '<span><i class="fa fa-comments"></i> ' 
              + '<a href="' + _url + '#comments-anchor">' + u + ' Comments</a>' 
            + '</span></small></p></div></div>' 
            + '<h1 class="entry-title">'
            + ' <a href="' + y + '">' + x + ' </a> </h1> <p>' 
            + stripTags2(postElement.innerHTML,60).replace(/<\/p>(?!.*?<\/p>)/, ' <a class="more" href="' + _url + '">(more...)</a>' + '</p>');
    after_rm2(_id);
}

stripTags2 = function (a,_0x17a4x3) {
  return a.replace(/<img[^>]*>/ig,'');
}

after_rm2 = function (_id) {
    var _img_div = jQuery("#" + _id + " div.entry-image:first");
    //console.log(_img_div.length);
    var _img_src = _img_div.find('img.thumb:first').attr('src');
    //console.log(_img_src)
    _img_div.css('background-image', 'url("' + _img_src + '")');
    _img_div.attr('data-bg-src', _img_src)
}
