ArchiveListUtils = {
  openListYear: function (callback) {
    console.log('openListYear')
    //$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) a.toggle:eq(0)").trigger("click")
    let li = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)")
    let zippy = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)")
    li.addClass("expanded").removeClass('collapsed')
    zippy.addClass('toggle-open').text('▼ ')
    
    if (typeof(callback) === 'function') {
      callback()
    }
  },
  openListMonth: function (callback) {
    //console.log('openListMonth')
    
    //let li = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate > ul.hierarchy > li.archivedate.collapsed")
    //console.log(111)
    this.openListYear(() => {
      //console.log(document.querySelectorAll("ul > li > ul > li.archivedate.collapsed > a.toggle").length)
      // 請溫柔地開它
      let aList = document.querySelectorAll("ul > li > ul > li.archivedate.collapsed > a.toggle")
      let loop = (i) => {
        if (i < aList.length) {
          aList[i].click()
          $(() => {
            setTimeout(() => {
              i++
              loop(i)
            }, 1000)
          })
        }
        else {
          if (typeof(callback) === "function") {
            callback()
          }
        }
      }
      loop(0)
    })
  },
  displayConfiguration: function () {
    console.log('displayConfiguration')
  },
  startDownload: function () {
    console.log('startDownload')
  }
}

$(() => {
  let pageTool = $('#ArchiveList > .page-tool')
  pageTool.find('.open-list.year').click(() => {
    ArchiveListUtils.openListYear()
  })
  pageTool.find('.open-list.month').click(() => {
    ArchiveListUtils.openListMonth()
  })
  pageTool.find('.setup-checkbox').click(() => {
    ArchiveListUtils.displayConfiguration()
  })
  pageTool.find('.start-download').click(() => {
    ArchiveListUtils.startDownload()
  })
})