(function () {
  var loadScript = function (url, callback) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    script.onload = function () {
      if (callback) {
        callback()
      }
    }
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
  console.log('現在載入遠端資源')
  var scriptsList = [
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/vendors.js',
    
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-header.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/page.js',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/global-footer.js',
  ]
  
  var loop = function (i) {
    if (i < scriptsList.length) {
      loadScript(scriptsList[i], function () {
        i++
        loop(i)
      })
    }
  }
  loop(0)
  /*
  var styleList = [
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/lightbox2-lokeshdhakar/css/lightbox.min.css',
    '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/item/src/modules/highlight/default.min.css'
  ]
  
  styleList.forEach(function (url) {
    loadStyle(url)
  })
  */
})()

