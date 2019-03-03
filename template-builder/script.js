var app = {
  el: '#app',
  data: {
    codeForBlogger: '',
    codeForOLW: 'Open Live Writer Template Code (now loading...)',
    useLocalhost: true,
    localhostURL: 'http://pc.pulipuli.info/public/Pulipuli-Blog/'
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
    cleanCss: function(T) {
      T = T.replace(/(\n|\r|\	|\f|\v)+/g,''); // Remove line breaks, tabs etc.
      T = T.replace(/\/\*.+?\*\//g,''); // Remove comments.
      T = T.replace(/ +/g,' '); // Remove redundant whitespace.
      T = T.replace(/ *{ */g,'{'); // Remove spaces around {
      T = T.replace(/ *} */g,'}'); // Remove spaces around }
      T = T.replace(/ *: */g,':'); // Remove spaces around :
      T = T.replace(/ *; */g,';'); // Remove spaces around ;
      return T
    },
    loadTemplate: function () {
      fetch('components/main-template.html')
        .then(res => res.text())
        .then(mainTemplate => {
        //console.log(mainTemplate)
        mainTemplate = mainTemplate.trim()
        //this.codeForBlogger = mainTemplate.trim()

        var replaceList = [
          '0_header/1_style.css',
          //'0_header/2_style.min.css',
          //'0_header/3_custom_style.min.css',
          '0_header/4_facebook_code.html',
          '0_header/5_env_variables.html',
          '1_menu/1_menu.html',
          '1_menu/2_search.html',
          '2_sidebar/1_sidebar.html',
          '3_footer/1_col.html',
          '3_footer/2_col.html',
          '3_footer/3_col.html',
          '3_footer/4_copyright.html',
          '3_footer/4_goto.html',
          '3_footer/4_management.html',
          '3_footer/8_include.html',
          '3_footer/9_include_item.html',
          '4_content/archives.html',
          '4_content/author.html',
          '4_content/backlinks.html',
          '4_content/comment_form_tool.html',
          '4_content/comments.html',
          '4_content/labels.html',
          '4_content/share.html',
          '4_content/related_posts.html',
          '5_footer_bar/1_col.html',
          '5_footer_bar/2_col.html',
          '5_footer_bar/3_col.html',
          '6_includable/main.html',
          '6_includable/postQuickEdit.html',
          '6_includable/shareButtons.html',
          '6_includable/status-message.html',
          '6_includable/threaded_comment_js.html',
          '6_includable/threaded_comments.html'
        ] // var replaceList = [

        var loop = (i) => {
          if (i < replaceList.length) {
            var filename = replaceList[i]
            //console.log(filename)
            fetch('components/' + filename)
              .then(res => res.text())
              .then(text => {
                if (filename.endsWith(".css")) {
                  text = this.cleanCss(text)
                }
                
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
                      .join(this.localhostURL)
            }
            
            // 移除多餘的空行
            mainTemplate = mainTemplate.split("\n").map((item, index, array) => {
              if (item.trim() === "") {
                return ''
              }
              else {
                return item + '\n'
              }
            }).join("").trim()

            this.codeForBlogger = mainTemplate
            $('.copy-button:first').focus()
          }
        }
        loop(0)

      })  // $.get('main-template.html', (mainTemplate) => {
    }
  }
}
new Vue(app)