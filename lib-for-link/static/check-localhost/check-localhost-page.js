setTimeout(function () {
  if (!window.PULI_BLOG_INITED) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/check-localhost/load-remote-page.min.js';
    document.getElementsByTagName('head')[0].appendChild(script);
    
    console.log('Load GitHub resources')
  }
}, 0)