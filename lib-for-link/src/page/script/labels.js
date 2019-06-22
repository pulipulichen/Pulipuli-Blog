
LabelsUtils = {
  copyLabels: function () {
    //console.log('copyLabels')
    
    let list = []
    $('.list-label-widget-content li a').each((i, aTag) => {
      list.push(aTag.innerText.trim())
    })
    
    list.sort()
    
    //console.log(list)
    let listString = list.join("\n")
    this.copyPlainText(listString)
  },
  copyPlainText: function (text) {
    var copyTextInput = document.getElementById("puliClipboardInput")
    if (copyTextInput === null) {
      var copyTextInput = document.createElement("textarea")
      copyTextInput.id = "puliClipboardInput"
      //copyTextInput.type = "text"
      document.body.appendChild(copyTextInput)
    }

    copyTextInput.value = text

    copyTextInput.style = "display: block; position: absolute; top: -1000px; left: -1000px;"
    /* Select the text field */
    copyTextInput.select();

    /* Copy the text inside the text field */
    document.execCommand("copy");

    copyTextInput.style = "display: none"
  },
}

// --------------------------------------

$(() => {
  let labelsTool = $('#labelsTool > .page-tool')
  labelsTool.find('.copy-labels').click(() => {
    LabelsUtils.copyLabels()
  })
})