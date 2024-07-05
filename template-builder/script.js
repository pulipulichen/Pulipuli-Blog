/* global fetch */

var app = {
  el: '#app',
  data: {
    codeForBlogger: '',
    codeForOLW: 'Open Live Writer Template Code (now loading...)',
    hostType: 'github',
    pulipuliURL: 'http://pc.pulipuli.info/public/Pulipuli-Blog/',
    localhostURL: 'http://localhost:8383/Pulipuli-Blog/',
    telebitURL: '//sweet-pug-22.telebit.io/',
  },
  mounted: function () {
    let keys = ['hostType', 'telebitURL']

    keys.forEach(key => {
      if (localStorage.getItem(key)) {
        try {
          this[key] = localStorage.getItem(key)
        } catch(e) {
          console.log(e)
          localStorage.removeItem(key);
        }
      }
    })
  },
  created: function () {
    this.loadTemplate()
  },
  watch: {
    telebitURL () {
      localStorage.setItem('telebitURL', this.telebitURL)
    }
  },
  methods: {
    copyCode: function () {
      //console.log(event)
      //var btn = $(event.srcElement)
      //var textarea = btn.parents('.column:first').find('textarea')
      //this.copyToClip(textarea.val())
      this.copyToClip(this.codeForBlogger)
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
      $(() => {
        localStorage['hostType'] = this.hostType
      })
      
      this.codeForBlogger = ''
      fetch('components/main-template.html')
        .then(res => res.text())
        .then(mainTemplate => {
        //console.log(mainTemplate)
        mainTemplate = mainTemplate.trim()
        //this.codeForBlogger = mainTemplate.trim()

        var replaceList = [
          '0_header/0_google_analytics.html',
          '0_header/0_manifest.html',
          '0_header/1_style.css',
          //'0_header/2_style.min.css',
          //'0_header/3_custom_style.min.css',
          '0_header/4_facebook_code.html',
          '0_header/5_env_variables.html',
          '0_header/6_meta_citation_blog.html',
          '0_header/7_meta_citation_post.html',
          '0_header/9_ad_header.html',

          '1_menu/1_menu.html',
          '1_menu/2_search.html',

          '2_sidebar/1_sidebar.html',
          '2_sidebar/2_ad_after_sidebar.html',

          '3_footer/1_col.html',
          '3_footer/2_col.html',
          '3_footer/3_col.html',
          '3_footer/4_copyright.html',
          '3_footer/4_goto.html',
          '3_footer/4_management.html',
          '3_footer/8_include.html',
          '3_footer/9_include_item.html',
          '3_footer/10_ad_before_footer.html',
          
          '4_content/author.html',
          '4_content/zotero.html',
          '4_content/backlinks.html',
          '4_content/comment_form_tool.html',
          '4_content/comments.html',
          
          '4_content/share_about.html',
          '4_content/share_buttons.html',

          '4_content/related_posts.html',
          '4_content/entry-index.html',
          '4_content/entry-item.html',
          '4_content/1_ad_before_blog.html',
          '4_content/5_ad_before_comment.html',
          '4_content/9_ad_before_blog.html',
          
          
          '4_page/social-media.html',
          '4_page/statistics.html',
          '4_page/labels.html',
          '4_page/archives.html',
          '4_page/page-as-item.html',
          '4_page/page-as-article.html',

          
          '5_footer_bar/1_col.html',
          '5_footer_bar/2_col.html',
          '5_footer_bar/3_col.html',
          '6_includable/main.html',
          '6_includable/postQuickEdit.html',
          '6_includable/shareButtons.html',
          '6_includable/status-message.html',
          '6_includable/threaded_comment_js.html',
          '6_includable/threaded_comments.html',
          '6_includable/check-localhost.html'
        ] // var replaceList = [

        let round = 0
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
            round++
            if (round < 2) {
              return loop(0)
            }

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

            if (this.hostType === 'pulipuli') {
              mainTemplate = mainTemplate.split('//pulipulichen.github.io/Pulipuli-Blog/')
                      .join(this.pulipuliURL)
              
              mainTemplate = mainTemplate.split('<p:localhost-redirect />')
                      .join('<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/redirect.min.js"></script>')
              
              mainTemplate = mainTemplate.split('<p:check-localhost-index />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-item />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-page />')
                      .join('')
            }
            else if (this.hostType === 'localhost') {
              mainTemplate = mainTemplate.split('//pulipulichen.github.io/Pulipuli-Blog/')
                      .join(this.localhostURL)
              
              mainTemplate = mainTemplate.split('<p:localhost-redirect />')
                      .join('<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/redirect.min.js"></script>')
              
              /**
               * 20210406 為什麼要做這件事情？我不懂，還是拿掉吧
               */
              /*
              mainTemplate = mainTemplate.split('<p:check-localhost-index />')
                      .join('<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/check-localhost/check-localhost-index.min.js"></script>')
              mainTemplate = mainTemplate.split('<p:check-localhost-item />')
                      .join('<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/check-localhost/check-localhost-item.min.js"></script>')
              mainTemplate = mainTemplate.split('<p:check-localhost-page />')
                      .join('<script src="//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/static/check-localhost/check-localhost-page.min.js"></script>')
               */
              mainTemplate = mainTemplate.split('<p:check-localhost-index />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-item />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-page />')
                      .join('')
            }
            else if (this.hostType === 'telebit') {
              mainTemplate = mainTemplate.split('//pulipulichen.github.io/Pulipuli-Blog/')
                      .join(this.telebitURL)

              mainTemplate = mainTemplate.split('<p:check-localhost-index />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-item />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-page />')
                      .join('')
            }
            else {
              mainTemplate = mainTemplate.split('<p:localhost-redirect />')
                      .join('')
              
              mainTemplate = mainTemplate.split('<p:check-localhost-index />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-item />')
                      .join('')
              mainTemplate = mainTemplate.split('<p:check-localhost-page />')
                      .join('')
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

            // 避免Live Server多加程式碼 20230621-2354 
            if (mainTemplate.endsWith('</script></body>\n</html>')) {
              mainTemplate = mainTemplate.substring(0, mainTemplate.lastIndexOf('<script type="text/javascript">')) + 
                '</body></html>'
            }

            // 避免Live Server多加程式碼 20230621-2354 
            if (mainTemplate.endsWith('</script>\n</body>\n</html>')) {
              mainTemplate = mainTemplate.substring(0, mainTemplate.lastIndexOf('<script>')) +
                '</body></html>'
            }

            // 移除註解 20230622-0017 
            mainTemplate = mainTemplate.replace(/<!--[\s\S]*?-->/g, '')

            this.codeForBlogger = mainTemplate
            $('.copy-button:first').focus()
          }
        }
        loop(0)

      })  // $.get('main-template.html', (mainTemplate) => {
    },
    openBloggerTemplateLink: function () {
      this.copyCode()
      let url = "https://www.blogger.com/blogger.g?blogID=16607461#templatehtml/src=sidebar"
      let name = "bloggerTemplateLink"
      window.open(url, name)
    }
  } // methods: {
}
new Vue(app)