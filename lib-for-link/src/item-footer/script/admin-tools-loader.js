let loadAdminToolsIsLoaded = false
let loadAdminTools = function (callback) {
  //console.log(loadAdminToolsIsLoaded)
  if (loadAdminToolsIsLoaded === true) {
    if (typeof(callback) === "function") {
      callback()
    }
  }
  else {
    let adminToolURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    //let adminToolURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    $.getScript(adminToolURL, () => {
      loadAdminToolsIsLoaded = true
      loadAdminTools(callback)
    })
  }
}

$(() => {
  
  $('#main .entry-content .blog-admin .copy-html-button').click(function () {
    loadAdminTools(() => {
      articleDownload.copyHTML()
    })
  })
  
  $('#main .entry-content .blog-admin .download-article-button').click(function () {
    loadAdminTools(() => {
      articleDownload.downloadArticle()
    })
  })
  
  if (location.href.endsWith('downloadArticle=true')) {
    setTimeout(() => {
      $('#main .entry-content .blog-admin .download-article-button:visible').click()
    }, 1000)
  }
})