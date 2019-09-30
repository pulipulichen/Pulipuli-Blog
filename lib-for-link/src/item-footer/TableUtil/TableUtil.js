/* global CopyPasteHelper */

let TableUtil = {
  init: function () {
    let tables = $('.entry-content article > table')
    
    //console.log(tables.length)
    tables.each((i, table) => {
      let $table = $(table)
      this.addLabel($table)
      //this.setupPannable($table)
    })
    /*
    this.detectPannalbe()
    $(window).resize(() => {
      this.detectPannalbe()
    })
    */
  },
  addLabel: function ($table) {
    let container = $(`<div class="table-labels"></div>`)
      .insertBefore($table)
    
    let copyLabel = $(`<div class="table-label">
      <i aria-hidden="true" class="fa fa-copy" title="Copy table"></i>
      COPY
    </div>`).appendTo(container)

    copyLabel.click(function () {
      let table = $(this).parent().next()
      //let html = table.prop('outerHTML')

      //console.log(html)
      CopyPasteHelper.copyRichFormat(table)
    })
    
    let openLabel = $(`<div class="table-label">
      <i aria-hidden="true" class="fa fa fa-external-link" title="Open table in new window"></i>
      POPUP
    </div>`).appendTo(container)

    openLabel.click(function () {
      let table = $(this).parent().next()
      let win = window.open('', '_blank')
      //let win = window.open(`data:text/html;charset=utf8,<html><head><link href='//lh3.googleusercontent.com/-EJjh-ZlKl64/VvtjyofcjNI/AAAAAAACuME/hYJhk_ZuORs/s0/pulipuli192x192.jpg' rel='icon' sizes='192x192'/></head><body></body></html>`);
      win.document.title = 'Table: ' + document.title
      
      WIN = win
      
      let cssURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/table-popup.css'
      if ($('script[src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js"]').length === 0) {
        cssURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/static/table-popup.css'
      }

      win.document.body.innerHTML = table.prop('outerHTML')
        + `<link href='${cssURL}' rel='stylesheet' type='text/css'/>`

      $(win.document.head).append(`<link href='//blog.pulipuli.info/favicon.ico' rel='icon' type='image/x-icon'/>`)
    })
  },
  setupPannable: function ($table) {
    
    let container = $(`<div class="table-container"></div>`)
            .insertBefore($table)

    $table.appendTo(container)
    /*
     $.panzoom($table[0], {
     smoothScroll: false,
     maxZoom: 1,
     minZoom: 1,
     beforeWheel: function(e) {
     // allow wheel-zoom only if altKey is down. Otherwise - ignore
     var shouldIgnore = !e.altKey;
     return shouldIgnore;
     }
     })
     */
    $table.panzoom({
      //disablePan: true,
      contain: true,
      disableYAxis: true,
      cursor: "w-resize"
    })
  },
  $body: null,
  lastDisablePanConfig: null,
  detectPannalbe: function () {
    return
    if (this.$body === null) {
      this.$body = $('body')
    }
    
    let isDisablePan = (this.$body.width() > 480)
    if (this.lastDisablePanConfig === null) {
      this.lastDisablePanConfig = isDisablePan
    }
    else if (this.lastDisablePanConfig === isDisablePan) {
      return this
    }
    
    
    let tables = $('.entry-content article > table')
    console.log(isDisablePan)
    if (isDisablePan === true) {
      tables.panzoom('enable')
    }
    else {
      tables.panzoom('disable')
    }
    this.lastDisablePanConfig = isDisablePan
    return this
  }
}

$(() => {
  TableUtil.init()
})