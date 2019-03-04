ArchiveListUtils = {
  openListYear: function () {
    console.log('openListYear')
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
  let pageTool = $('#ArchiveList > page-tool')
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