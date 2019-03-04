ArchiveListUtils = {
  openListYear: function () {
    console.log('openListYear')
    //$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) a.toggle:eq(0)").trigger("click")
    let li = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)")
    let zippy = $("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)")
    li.addClass("expanded").removeClass('collapsed')
    zippy.addClass('toggle-open').text('▼ ')
  },
  openListMonth: function () {
    console.log('openListMonth')
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
  pageTool.find('.open-list.year').click(() => {
    ArchiveListUtils.displayConfiguration()
  })
  pageTool.find('.open-list.year').click(() => {
    ArchiveListUtils.startDownload()
  })
})