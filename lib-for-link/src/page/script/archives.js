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
    //console.log('displayConfiguration')
    let cacheKey = 'archivesCheckboxStatus'
    
    this.openListYear(() => {
      
      // -------------------------------
      
      let checkboxChange = function () {
        // 要先確認自己是位於那個階層
        let folderType = $(this).attr('data-folder-type')
        //console.log(folderType)
        
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
        
        // -------------------------------------
        // 儲存狀態
        let data = {}
        $('#BlogArchive1_ArchiveList input.download-checkbox').each((i, input) => {
          data[input.id] = input.checked
        })
        lscache.set(cacheKey, data)
      }
      
      // -------------------------------------
      
      $('#BlogArchive1_ArchiveList a.toggle').each((i, a) => {
        //console.log($(a).parent().hasClass('init-download-checkbox'))
        if ($(a).parent().hasClass('init-download-checkbox')) {
          return false
        }
        
        // 查看一下現在的狀態，然後加上年月好嗎
        let folderType = 'month'
        if ($(a).parent().parent().parent().attr('id') === 'BlogArchive1_ArchiveList') {
          folderType = 'year'
        }
        
        let value
        if (folderType === 'year') {
          value = 'd_' + $(a).parent().children('a.post-count-link').text().trim()
        }
        else {
          let link = $(a).parent().children('a.post-count-link').attr('href')
          let linkParts = link.split('/')
          value = 'd_' + linkParts[(linkParts.length - 3)] + '_' + linkParts[(linkParts.length - 2)]
        }
        
        let checkbox = $('<input type="checkbox" checked="checked" class="download-checkbox" />')
                .attr('id', value)
                .attr('data-folder-type', folderType)
                .change(checkboxChange)
        $(a).before(checkbox)
                .parent().addClass('init-download-checkbox')
      })
      
      // --------------------------------
      // 讀取狀態
      let data = lscache.get(cacheKey)
      if (data) {
        for (let id in data) {
          $('#' + id).prop('checked', data[id])
        }
      }
    }) 
  },
  
  // ------------------------------------------------------------------
  loopOpenItem: function (linkList, callback) {
    let loop = (i) => {
      if (i < linkList.length) {
        let openRetryCount = 3
        let openWindow = () => {
          let win = window.open(linkList[i])

          // 這邊要等待它關閉
          let waitCount = 60 * 5
          let checkWinClosed = () => {
            if (win.closed === false && waitCount > 0) {
              setTimeout(() => {
                waitCount--
                checkWinClosed()
              }, 1000)
            }
            else {
              if (waitCount === 0) {
                // 五分鐘都沒關閉，一定有問題
                win.close()
                
                openRetryCount--
                if (openRetryCount > 0) {
                  openWindow()
                  return
                }
                console.log(['DOWNLOAD ERROR', linkList[i]])
              }

              setTimeout(() => {
                i++
                loop(i)
              }, 3000)
            }
          }
          checkWinClosed()
        }
        
        openWindow()
      }
      else {
        if (typeof(callback) === 'function') {
          callback()
        }
      }
    }
    loop(0)
    
    
  },
  startDownload: function (callback) {
    //console.log('startDownload')
    
    let checkedList = $('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked')
    let loopChecklist = (i) => {
      if (i < checkedList.length) {
        let li = checkedList.eq(i).parent()
        if (li.hasClass('collapsed')) {
          // 要先點開
          li.children('a.toggle')[0].click()
          setTimeout(() => {
            loopChecklist(i)
          }, 1000)
        }
        else {
          // 已經點開了
          let linkList = []
          li.find('ul.posts > li > a').each((i, ele) => {
            linkList.push(ele.href + '?downloadArticle=true')
          })
          
          // 那我們逐一點開吧
          this.loopOpenItem(linkList, () => {
            checkedList.eq(i).prop('checked', false).change()
            i++
            loopChecklist(i)
          })
        }
        
      }
      else {
        if (typeof(callback) === 'function') {
          callback()
        }
      }
    }
    loopChecklist(0)
  }
}

// --------------------------------------

$(() => {
  let archiveTool = $('#ArchiveList > .page-tool')
  archiveTool.find('.open-list.year').click(() => {
    ArchiveListUtils.openListYear()
  })
  archiveTool.find('.open-list.month').click(() => {
    ArchiveListUtils.openListMonth()
  })
  archiveTool.find('.setup-checkbox').click(() => {
    ArchiveListUtils.displayConfiguration()
  }).click()
  archiveTool.find('.start-download').click(() => {
    ArchiveListUtils.startDownload()
  })
  
  let labelsTool = $('#labelsTool > .page-tool')
  labelsTool.find('.copy-labels').click(() => {
    LabelsUtils.copyLabels()
  })
})