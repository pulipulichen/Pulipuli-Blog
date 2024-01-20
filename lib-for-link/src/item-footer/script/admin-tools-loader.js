/* global articleDownload */

let loadAdminToolsIsLoaded = false
let loadAdminTools = function (callback) {
  console.log({loadAdminToolsIsLoaded})

  //console.log(loadAdminToolsIsLoaded)
  if (loadAdminToolsIsLoaded === true) {
    if (typeof(callback) === "function") {
      callback()
    }
  }
  else {
    //let adminToolURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    let adminToolURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/admin-tools.js'
    
    if ($('script[src$="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js"]').length === 0) {
      // 嘗試找尋另一種的讀取方法
      let baseScriptTag = $('script[src$="/lib-for-link/dist/global-header.js"]:first')
      let src = baseScriptTag.attr('src')
      
      adminToolURL = src.slice(0, src.lastIndexOf('/dist/')) + '/dist/admin-tools.js'
    }
    
    //console.log(adminToolURL)
    
    $.getScript('//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/docxtemplater/docxtemplater.min.js', () => {
      $.getScript(adminToolURL, () => {
        loadAdminToolsIsLoaded = true
        loadAdminTools(callback)
      })
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
    //console.log('aaa')
    // console.log('Ready to load Admin Tools')

    loadAdminTools(() => {
      // console.log('Ready to download Article')

      articleDownload.downloadArticle()
    })
  })
  
  if (location.href.endsWith('downloadArticle=true')) {
    setTimeout(() => {
      $('#main .entry-content .blog-admin .download-article-button:visible').click()
    }, 1000)
  }
})