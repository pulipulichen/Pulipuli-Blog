setTimeout(function () {
  if (!window.PULI_BLOG_INITED) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/loadRemote.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
  }
}, 0)