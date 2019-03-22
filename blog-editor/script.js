let summernoteConfig = {
  height: 'calc(100vh - 60px)',                 // set editor height
  minHeight: 'calc(100vh - 60px)',             // set minimum height of editor
  maxHeight: null,             // set maximum height of editor
  focus: true,                  // set focus to editable area after initializing summernote
  disableResizeEditor: true,
}

$(document).ready(function() {
  $('#summernote').summernote(summernoteConfig);
});