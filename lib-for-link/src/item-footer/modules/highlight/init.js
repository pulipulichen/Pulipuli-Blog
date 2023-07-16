/* global CopyPasteHelper, hljs */

/**
 * 語法標亮
 * @author https://highlightjs.org/usage/ 20160928
 */
$(function () {
  $("article code[class]").each(function (_i, _code) {
    //console.log(_code.className)
    let className = _code.className
    
    _code = $(_code);
    if (_code.parent().filter("pre").length === 0) {
      _code.wrap("<pre></pre>");
    }

    if (typeof (className) === 'string') {
      className = className.split(' ')
              .filter(c => {
                return (c !== 'hljs')
              })
              .join('')
    }
    let label = $(`<span class="code-label puli-utils-append" title="Copy code">
            <span>${className}</span>
            <i aria-hidden="true" class="fa fa-copy"></i>
        </span>`).insertBefore(_code)

    label.click(function () {
      //console.log('click')
      let code = $(this).parent().clone()

      if (code.find('.hljs').length > 0) {
        code = code.find('.hljs:first')
      }
      code.find('.code-label:first').remove()

      let children = code.children()
      if (children.length === 1 && children[0].tagName.toLowerCase() === 'code') {
        code = code.children().eq(0)
      }

      let codeString = code.html()
      codeString = codeString.replace(/\&nbsp\;/g, ' ')
          .replace(/<br>/g, '\n')
      //console.log(codeString)
      CopyPasteHelper.copyPlainText(codeString)
    })
  });

  /*
   $("head").append($("<link />").attr({
   rel: "stylesheet",
   type: "text/css",
   href: "//pulipulichen.github.io/blogger/blogger/lib/highlight/default.min.css"
   //media: "screen"
   }));
   
   $.getScript("//pulipulichen.github.io/blogger/blogger/lib/highlight/highlight.min.js", function () {
   hljs.initHighlightingOnLoad();
   });
   */

  hljs.initHighlightingOnLoad();
});