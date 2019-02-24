var app = {
  el: '#app',
  data: {
    codeForBlogger: 'codeForBlogger',
    codeForOLW: 'codeForOLW',
  },
  created: function () {
    $.get('main-template.html', (mainTemplate) => {
      mainTemplate = mainTemplate.trim()
      //this.codeForBlogger = mainTemplate.trim()
      
      var replaceList = [
        '0_header/1_style.css',
        '0_header/2_style.css',
        '0_header/3_custom_style.css',
        '0_header/4_facebook_code.html',
        '1_menu/1_menu.html',
        '1_menu/2_search.html',
        '1_menu/2_search.html',
        '2_sidebar/1_sidebar.html',
        '3_footer/1_col.html',
        '3_footer/2_col.html',
        '3_footer/3_col.html',
        '3_footer/4_management.html',
        '4_content/archives.html',
        '4_content/author.html',
        '4_content/backlinks.html',
        '4_content/comment_form_tool.html',
        '4_content/comments.html',
        '4_content/labels.html',
        '4_content/share.html',
        '5_footer_bar/1_col.html',
        '5_footer_bar/2_col.html',
        '5_footer_bar/3_col.html'
      ] // var replaceList = [
      
      var loop = (i) => {
        if (i < replaceList.length) {
          var filename = replaceList[i]
          console.log(filename)
          $.get(filename, (text) => {
            mainTemplate = mainTemplate.replace('<p:include>' + filename + '</p:include>', text.trim())
            i++
            loop(i)
          })
        }
        else {
          this.codeForBlogger = mainTemplate.trim()
        }
      }
      loop(0)
      
    })  // $.get('main-template.html', (mainTemplate) => {
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