(function () {
  var loadScript = function (url) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
  }
  
  var loadStyle = function (url) {
    // <link href="bootstrap.css" rel="stylesheet" media="screen">
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    document.getElementsByTagName('head')[0].appendChild(link)
  }
  
  // ------------------------------------
  /*
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/related-posts/related-posts.js" type="text/javascript"></script>

<link href='//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/css/lightbox.min.css' rel='stylesheet' type='text/css'/>
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/js/lightbox.min.js" type="text/javascript" ></script>
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/init.js" type="text/javascript" ></script>

<link href='//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/default.min.css' rel='stylesheet' type='text/css'/>
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/highlight.min.js" type="text/javascript"></script>
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/init.js" type="text/javascript"></script>
  
  
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/page.js" type="text/javascript"></script>
  <script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/page.js" type="text/javascript"></script>
  
  <script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/vendors.js" type="text/javascript"></script>
<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-header.js" type="text/javascript"></script>

<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-header.js" type="text/javascript"></script>
  <script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-header.js" type="text/javascript"></script>
  <script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-footer.js" async="async" type="text/javascript"></script>
 <script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js" async="async" type="text/javascript"></script>

   */
  [
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-footer.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/related-posts/related-posts.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/js/lightbox.min.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/init.js',

    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/highlight.min.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/init.js',

    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/page.js',

    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/vendors.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-header.js',

    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-header.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-footer.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js'

  ].forEach(function (url) {
    loadScript(url)
  })
  
  [
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/css/lightbox.min.css',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/default.min.css'
  ].forEach(function (url) {
    loadStyle(url)
  })
  
})()

