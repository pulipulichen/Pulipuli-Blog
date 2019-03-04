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
      let aList = document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle")
      let loop = (i) => {
        if (i < aList.length) {
          aList[i].click()
          $(() => {
            setTimeout(() => {
              i++
              loop(i)
            }, 500)
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
    
    this.openListYear(() => {
      let checkboxChange = function () {
        // 要先確認自己是位於那個階層
        let folderType = 'month'
        if ($(this).parent().parent().parent().attr('id') === 'BlogArchive1_ArchiveList') {
          folderType = 'year'
        }
        
        
        if (folderType === 'year') {
          // 強迫它底下的所有checkbox都check
          //console.log(this.checked)
          //console.log($(this).find('.download-checkbox').length)
          /*
          let checked = 'checked'
          if (this.checked === false) {
            checked = false
          } 
          */
          let checkboxList = $(this).parent().find('ul > li > .download-checkbox')
          //console.log(checkboxList.length)
          //console.log(checked)
          checkboxList.prop('checked', this.checked)
        }
        else {
          // 檢查上面一層底下的所有狀態，有跟自己不一樣的就移除上層的打勾
          let yearLi = $(this).parent().parent().parent()
          //console.log(yearLi.prop('className'))
          let yearCheckbox = yearLi.children('.download-checkbox')
          
          let yearChecked = true
          yearLi.find('ul.hierarchy > li > .download-checkbox').each((i, input) => {
            if (input.checked === false) {
              yearChecked = false
            }
          })
          yearCheckbox.prop('checked', yearChecked)
        }
      }
      
      $('#BlogArchive1_ArchiveList a.toggle').each((i, a) => {
        let checkbox = $('<input type="checkbox" checked="checked" class="download-checkbox" />').change(checkboxChange)
        $(a).before(checkbox)
                .parent().addClass('init-download-checkbox')
      })
    }) 
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
  }).click()
  pageTool.find('.start-download').click(() => {
    ArchiveListUtils.startDownload()
  })
})