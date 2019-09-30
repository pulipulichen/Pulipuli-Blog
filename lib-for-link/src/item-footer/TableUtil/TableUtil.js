/* global CopyPasteHelper */

/*
import html2canvas from "./../vandors/html2canvas/html2canvas.js"
console.log(html2canvas)
window.html2canvas = html2canvas
*/
import domToImage from "./../vandors/dom-to-image/dom-to-image.js"
console.log(domToImage)

let TableUtil = {
  init: function () {
    let tables = $('.entry-content article > table')
    
    //console.log(tables.length)
    tables.each((i, table) => {
      let $table = $(table)
      this.addLabel($table)
      this.setupCanvas(table)
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
  setupCanvas: function (table) {
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
          $img.addClass('table-snap')
                  .attr('title', 'Open table in new window')
                  .insertAfter(table)
          $img.click(function () {
            let $table = $(this).prev()
            _this.popupTable($table)
          })
          $(table).addClass('table-snap-inited')
          table.style.minWidth = 'auto'
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
    
    /*
    html2canvas(table).then(canvas => {
      //document.body.appendChild(canvas)
      let $canvas = $(canvas)
      $canvas.addClass('table-canvas')
      
      $canvas.insertAfter(table)
    });
    */
   /*
    let render_html_to_canvas = function (html, ctx, x, y, width, height) {
        var xml = html_to_xml(html);
        xml = xml.replace(/\#/g, '%23');
        var data = "data:image/svg+xml;charset=utf-8,"+'<svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'">' +
                            '<foreignObject width="100%" height="100%">' +
                            xml+
                            '</foreignObject>' +
                            '</svg>';

        var img = new Image();
        img.onload = function () {
            ctx.drawImage(img, x, y);
        }
        img.src = data;
    }

    let html_to_xml = function (html) {
        var doc = document.implementation.createHTMLDocument('');
        doc.write(html);

        // You must manually set the xmlns if you intend to immediately serialize     
        // the HTML document to a string as opposed to appending it to a
        // <foreignObject> in the DOM
        doc.documentElement.setAttribute('xmlns', doc.documentElement.namespaceURI);

        // Get well-formed markup
        html = (new XMLSerializer).serializeToString(doc.body);
        return html;
    }
    
    let canvas 
    render_html_to_canvas(table.outerHTML, )
    */
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