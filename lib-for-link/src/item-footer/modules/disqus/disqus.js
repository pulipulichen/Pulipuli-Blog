/**
 * disqus主要檔案
 * @author Pulipuli Chen 20190301
 * @type String
 */
disqus_shortname = 'pulipuli'

disqus_blogger_current_url = getBloggerVariable('data-blog-canonicalUrl')
if (!disqus_blogger_current_url.length) {
  disqus_blogger_current_url = getBloggerVariable('data-blog-url')
}
disqus_blogger_homepage_url = getBloggerVariable('data-blog-homepageUrl')
disqus_blogger_canonical_homepage_url = getBloggerVariable('data-blog-canonicalHomepageUrl')

$(function () {
  disqus_url = disqus_blogger_current_url;
  
  /**
   * 莫名其妙...移除了也能夠正常運作，為什麼呢？
   * @author Pulipuli Chen 20190301
   */
  /*
  (function () {
      "use strict";
      //$.getScript('//pulipuli.disqus.com/embed.js');
      //disqus_embed()
  })();
  */
});