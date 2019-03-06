/*
 * var x=&quot;<data:post.title/>&quot;
 ,y=&quot;<data:post.url/>&quot;
 ,z=&quot;<data:post.author/>&quot;
 ,t=&quot;<data:post.timestamp/>&quot;
 ,u=&quot;<data:post.numComments/>&quot;;
 rm2(&quot;p<data:post.id/>&quot;,&quot;<data:post.url/>&quot;);
 */

let rm2 = function (postId, postTitle, postUrl, postAuthor, postTimestamp, postNumComments) {
  //let postId = getBloggerPostsVariable('data-post-id')[0]

  //postUrl = postUrl + '#more'

  var _id = postId;
  var _labels = $("#lp" + postId).clone().show().html();
  var postElement = document.getElementById('p' + postId);
  if (!postElement) {
    return
  }
  let imgtag = '';
  let ifrtag = '';
  let ifrsrc = '';
  let ifrtb = -1;
  let img = postElement.getElementsByTagName('img');
  let ifr = postElement.getElementsByTagName('iframe');
  for (var i = 0; i < ifr['length']; i++) {
    ifrsrc = ifr[i]['src'];
    if (ifrsrc['indexOf']('//www.youtube.com/embed/') != -1) {
      ifrtb = i;
      break
    } else {
      if (ifrsrc['indexOf']('//player.vimeo.com/video/') != -1) {
        ifrtb = i;
        break
      } else {
        if (ifrsrc['indexOf']('//www.dailymotion.com/embed/video/') != -1) {
          ifrtb = i;
          break
        } else {
          if (ifrsrc['indexOf']('//w.soundcloud.com/player/') != -1) {
            ifrtb = i;
            break
          }
        }
      }
    }
  }

  if (ifrtb !== -1) {
    ifrtag = '<div class="entry-video"><iframe width="840" height="472" src=""'
            + ifrsrc
            + '?vq=medium&rel=0" frameborder="0" allowfullscreen></iframe></div>'
    //$(ifrtag).prependTo($(postElement))
    
    $(postElement).find('.entry-image').html(ifrtag)
  } else {
    /*
     if (img.length >= 1) {
     imgtag = '<div class="entry-image"><a href="'
     + postUrl
     + '"><img class="thumb" src="'
     + img[0]['src']
     + '" /></a></div>'
     } 
     else {
     imgtag = '<div class="entry-image no-image">'
     + '<a href="' + postUrl + '">'
     //+ '<img class="thumb" src="//lh4.googleusercontent.com/-G9M2DTCTUwM/Tlh-2pwtc5I/AAAAAAAABKM/kCJg-Kf3W2M/no_image_yet.jpg" />'
     +'</a>' 
     + '</div>'
     }
     //console.log(imgtag)
     //$(imgtag).prependTo($(postElement))
     console.log(img[0]['src'])
     $(postElement).find('.entry-image .thumb').attr(img[0]['src'])
     */
    //let imageUrl = $(postElement).find('.entry-content img:first').parent().attr('href')
    let imageUrl = $(postElement).find('.entry-content img:first').attr('src')
    //$(postElement).find('.entry-image .thumb').attr('src', imageUrl)
    if (imageUrl !== undefined) {
      $(postElement).find('.entry-image').css('background-image', 'url(' + imageUrl + ')')
    } else {
      $(postElement).find('.entry-image').hide()
    }
  }
  /*
   postElement['innerHTML'] = ifrtag
   + imgtag
   + '<div class="entry-container"><div class="entry-content"><div class="foundation"> '
   + '<div class="post-avatar"></div>'
   + ' <div class="avatar-name">' + postAuthor + '</div>'
   + '<div class="meta">'
   + '<p><small> <span class="post-timestamp">'
   + '<i class="fa fa-clock-o"></i>' + postTimestamp + '</span>' 
   
   + '<span class="comment-number"><i class="fa fa-comments"></i> '
   + '<a href="' + postUrl + '#comments-anchor">' + postNumComments + ' Comments</a>'
   + '</span>'
   + _labels
   + '</small></p>'
   //+ '<p><small>' + _labels  + '</small></p>'
   + '</div></div>'
   + '<h1 class="entry-title">'
   + ' <a href="' + postUrl + '">' + postTitle + ' </a> </h1> '
   + '<p>'
   //+ stripTags2(postElement.innerHTML, 60)
   //  .replace(/<\/p>(?!.*?<\/p>)/, ' <a class="more" href="' + postUrl + '">(more...)</a>' + '</p>')
   + postElement.innerHTML
   + ' <a class="more" href="' + postUrl + '">(more...)</a>' + '</p>';
   */
  //after_rm2(_id);
}

let stripTags2 = function (a) {
  return a.replace(/<img[^>]*>/ig, '');
}

let after_rm2 = function (_id) {
  var _img_div = jQuery("#" + _id + " div.entry-image:first");
  //console.log(_img_div.length);
  var _img_src = _img_div.find('img.thumb:first').attr('src');
  //console.log(_img_src)
  _img_div.css('background-image', 'url("' + _img_src + '")');
  _img_div.attr('data-bg-src', _img_src)
}

$(() => {
  // 好像真的不用做這些，我可以直接修改耶

  $('.post-variables').each((i, span) => {
    let postVariables = $(span).find('.post-variable')
    rm2(postVariables.attr('data-post-id')
            , postVariables.attr('data-post-title')
            , postVariables.attr('data-post-url')
            , postVariables.attr('data-post-author')
            , postVariables.attr('data-post-timestamp')
            , postVariables.attr('data-post-numComments'))
  })
})