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
    let label = $(`<span class="label">
            <i aria-hidden="true" class="fa fa-copy"></i>
            ${className}
        </span>`).insertBefore(_code)

    label.click(function () {
      //console.log('click')
      let code = $(this).parent().clone()

      code.find('.label:first').remove()

      let codeString = code.text()
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