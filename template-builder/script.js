var app = {
  el: '#app',
  data: {
    codeForBlogger: 'Blogger Template Code (now loading...)',
    codeForOLW: 'Open Live Writer Template Code (now loading...)',
    useLocalhost: false
  },
  created: function () {
    this.loadTemplate()
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
    },
    loadTemplate: function () {
        fetch('main-template.html')
        .then(res => res.text())
        .then(mainTemplate => {
        //console.log(mainTemplate)
        mainTemplate = mainTemplate.trim()
        //this.codeForBlogger = mainTemplate.trim()

        var replaceList = [
          '0_header/1_style.min.css',
          '0_header/2_style.min.css',
          '0_header/3_custom_style.min.css',
          '0_header/4_facebook_code.html',
          '1_menu/1_menu.html',
          '1_menu/2_search.html',
          '1_menu/2_search.html',
          '2_sidebar/1_sidebar.html',
          '3_footer/1_col.html',
          '3_footer/2_col.html',
          '3_footer/3_col.html',
          '3_footer/4_management.html',
          '3_footer/9_include.html',
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
            //console.log(filename)
            fetch('components/' + filename)
              .then(res => res.text())
              .then(text => {
                mainTemplate = mainTemplate.split('<p:include>' + filename + '</p:include>').join(text.trim())
                i++
                loop(i)
            })
          }
          else {
            // 加入年份
            var year = (new Date()).getFullYear()
            mainTemplate = mainTemplate.replace('<p:year />', year);

            // 移除註解
            //mainTemplate = mainTemplate.replace(/ *\<p:comment>[^<\/p:comment>]*\<\/p:comment> */g, "");
            mainTemplate = mainTemplate.replace(/<!--.*?-->/sg, "")
            // /\s*\(.*?\)\s*/g
            // /* Related Posts */

            /*
            var template = document.createElement('template');
            template.innerHTML = mainTemplate;
            mainTemplate = template.innerHTML;
            console.log(mainTemplate)
            */
            if (mainTemplate.indexOf("<p:include>") > -1) {
              alert("<p:include> error")
            }

            if (this.useLocalhost === true) {
              mainTemplate = mainTemplate.split('//pulipulichen.github.io/Pulipuli-Blog/')
                      .join('http://localhost/nodejs-projects/Pulipuli-Blog/')
            }

            this.codeForBlogger = mainTemplate
          }
        }
        loop(0)

      })  // $.get('main-template.html', (mainTemplate) => {
    }
  }
}
new Vue(app)