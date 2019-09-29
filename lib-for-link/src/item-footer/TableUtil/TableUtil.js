/* global CopyPasteHelper */

TableUtil = {
  init: function () {
    let tables = $('.entry-content article > table')
    
    //console.log(tables.length)
    tables.each((i, table) => {
      let $table = $(table)
      
      let label = $(`<div class="table-label">
        <i aria-hidden="true" class="fa fa-copy" title="Copy table"></i>
        COPY
      </div>`).insertBefore($table)
      
      label.click(function () {
        let table = $(this).next()
        let html = table.prop('outerHTML')
        
        //console.log(html)
        CopyPasteHelper.copyRichFormat(html)
      })
    })
  }
}

$(() => {
  TableUtil.init()
})