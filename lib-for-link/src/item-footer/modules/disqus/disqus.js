/**
 * config
 * @author Pulipuli Chen 20190301
 * @type String
 */
disqus_shortname = 'pulipuli'

$(function () {
  var disqus_url = disqus_blogger_current_url;

    (function () {
        "use strict";
        $.getScript('//pulipuli.disqus.com/embed.js');
    })();
});