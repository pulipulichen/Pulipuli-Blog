let summernoteConfig = {
  height: 'calc(100vh - 60px)',                 // set editor height
  minHeight: 'calc(100vh - 60px)',             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor
  focus: true,                  // set focus to editable area after initializing summernote
  disableResizeEditor: true,
  callbacks: {
    onImageUpload: function(files) {
      // upload image to server and create imgNode...
      //$summernote.summernote('insertNode', imgNode);
      //console.log(files)
      FileSystemHelper.copyFiles(files, function (urlList) {
        let imgUrl = urlList[0]
        let imgNode = $(`<img src="${imgUrl}" />`)[0]
        $summernote.summernote('insertNode', imgNode);
      })
    }
  }
}

$(document).ready(function() {
  $summernote = $('#summernote')
  $summernote.summernote(summernoteConfig);
});