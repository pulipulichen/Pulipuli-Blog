/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */


// -----------------------------
// 20170309 我要發問
$(function () {
  var _setup_iframe_anchor = function () {
    var _len1 = $("#comment-holder iframe:last").length;
    var _len2 = $(".comment-form > iframe:last").length;
    if (_len1 === 0 && _len2 === 0) {
      //console.log("iframe not found");
      setTimeout(_setup_iframe_anchor, 1000);
    } else {
      var _iframe = $("#comment-holder iframe:last");
      if (_len1 === 0 && _len2 > 0) {
        _iframe = $(".comment-form > iframe:last");
      }
      //console.log([_len1, _len2]);
      _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');

      var _needle = "#comment-form-iframe";
      var _href = location.href;
      if (_href.substr(_href.length - _needle.length) === _needle) {
        var _top = _iframe.offset().top - 50;
        $(window).scrollTop(_top);
      }
    }
  };
  _setup_iframe_anchor();
});
