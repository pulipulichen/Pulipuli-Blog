
var initSearchInput = () => {
  $("#s.search_input").blur(function () {
    if (this.value.trim() === '') {
      this.value = this.defaultValue;
    }
  }).focus(function () {
    if (this.value === this.defaultValue) {
      this.value = ''
    }
  })
}

(function () {
  var cx = '017270649262638447003:o6vaq9on3vs';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
  
  $('#gsce_submit').click(() => {
    $('input.gsc-search-button').click()
  })
  
  initSearchInput()
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  
  var timer = setInterval(() => {
    if ($('#gsc-i-id1').length > 0) {
      $('#gsc-i-id1').attr('placeholder', 'Search')
      $('.navbar-inner .search-bar').addClass('visible')
      clearInterval(timer)
    }
  }, 500)
})();

/**
 * 幫search button做調整
 * @author Pulipuli Chen 20190228
 */
$(function () {
    $("#srch_btn").click(function () {
        $("#masthead input.gsc-search-button").click();
    });
});

var menu_search_submit = function (_form) {
    var _query = _form.q.value;
    ga("send", "event", "search", _query, 1);
    //console.log("送出GA事件 search");
    
    $("#masthead input.gsc-input").val(_query).attr('placeholder', '')
    $("#masthead input.gsc-search-button").click();
    return false;
};
