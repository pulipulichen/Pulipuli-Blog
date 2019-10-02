/* global CopyPasteHelper */

import domToImage from "./../vandors/dom-to-image/dom-to-image.js"
//console.log(domToImage)

let TableUtil = {
  init: function () {
    let tables = $('.entry-content article > table')
    
    //console.log(tables.length)
    tables.each((i, table) => {
      let $table = $(table)
      this.addLabel($table)
      this.setupThumbnail(table)
    })
  },
  addLabel: function ($table) {
    let container = $(`<div class="table-labels puli-utils-append"></div>`)
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

    let _this = this
    openLabel.click(function () {
      let table = $(this).parent().next()
      _this.popupTable(table)
    })
  },
  popupTable: function (table) {
    let win = window.open('', '_blank')
    //let win = window.open(`data:text/html;charset=utf8,<html><head><link href='//lh3.googleusercontent.com/-EJjh-ZlKl64/VvtjyofcjNI/AAAAAAACuME/hYJhk_ZuORs/s0/pulipuli192x192.jpg' rel='icon' sizes='192x192'/></head><body></body></html>`);
    win.document.title = 'Table: ' + document.title

    //WIN = win

    let cssURL = '//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/table-popup.css'
    if ($('script[src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/dist/item-footer.js"]').length === 0) {
      cssURL = 'http://pc.pulipuli.info/public/Pulipuli-Blog/lib-for-link/static/table-popup.css'
    }

    win.document.body.innerHTML = table.prop('outerHTML')
      + `<link href='${cssURL}' rel='stylesheet' type='text/css'/>`
  },
  setupThumbnail: function (table) {
    //console.log(domToImage.toSvg(table))
    let _this = this
    
    table.style.minWidth = '800px'
    table.border = 0
    domToImage.toSvg(table)
      .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          //document.body.appendChild(img);
          let $img = $(img)
          $img.addClass('table-thumbnail')
                  .addClass('puli-utils-append')
                  .attr('title', 'Open table in new window')
                  .insertAfter(table)
          $img.click(function () {
            let $table = $(this).prev()
            _this.popupTable($table)
          })
          $(table).addClass('table-thumbnail-ready')
          table.style.minWidth = 'auto'
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  },
}

$(() => {
  TableUtil.init()
})