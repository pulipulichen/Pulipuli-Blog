var app = {
  el: '#app',
  data: {
    codeForBlogger: 'codeForBlogger',
    codeForOLW: 'codeForOLW',
  },
  methods: {
    copyCode: function (event) {
      //console.log(event)
      var btn = $(event.srcElement)
      var textarea = btn.parents('.column:first').find('textarea')
      this.copyToClip(textarea.val())
      
    },
    copyToClip: function (str) {
      var listener = function (e) {
        e.clipboardData.setData("text/html", str)
        e.clipboardData.setData("text/plain", str)
        e.preventDefault();
      }
      document.addEventListener("copy", listener)
      document.execCommand("copy")
      document.removeEventListener("copy", listener)
    }
  }
}
new Vue(app)