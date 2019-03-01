/*
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
*/

(function () {
  var cx = '017270649262638447003:o6vaq9on3vs';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = '//cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
  
  
  //initSearchInput()
  /*
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  */
  
  $(() => {
    //console.log($('.gcse-placeholder').length)
    $('.gcse-placeholder').submit(function () {
      return menu_search_submit(this);
    })
    
    $('.srch_btn').click(() => {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder:first').submit()
    })
    
    $('.gcse-placeholder-dropdown').submit(function () {
      return menu_search_submit(this);
    })
    $('.srch_btn-dropdown').click(() => {
      //$('input.gsc-search-button').click()
      $('.gcse-placeholder-dropdown').submit()
    })
    
    var testSearch = () => {
      $('.gcse-placeholder:first input').val('test')
      setTimeout(() => {
        $('.gcse-placeholder:first').submit()
      }, 1000)
    }
    //testSearch()
    
    var testSearchDropdown = () => {
      $('.gcse-placeholder-dropdown input').val('test')
      setTimeout(() => {
        $('.gcse-placeholder-dropdown').submit()
      }, 1000)
    }
    testSearchDropdown()
  })
    
  
  /*
  var timer = setInterval(() => {
    if ($('#gsc-i-id1').length > 0) {
      $('#gsc-i-id1').attr('placeholder', 'Search')
      $('.navbar-inner .search-bar').addClass('visible')
      clearInterval(timer)
    }
  }, 500)
  */
})();

/**
 * 幫search button做調整
 * @author Pulipuli Chen 20190228
 */
/*
$(function () {
    $("#srch_btn").click(function () {
        $("#masthead input.gsc-search-button").click();
    });
});
*/

var menu_search_submit = function (_form) {
  let _query
  if (typeof(_form['q']) !== "undefined") {
    _query = _form.q.value
  }
  else if (typeof(_form['search']) !== "undefined") {
    _query = _form.search.value
  }
  else {
    //console.log('找不到')
    return false
  }
  
  _query = _query.trim()
  if (_query === '') {
    return false
  }
  
  
  ga("send", "event", "search", _query, 1);
  //console.log("送出GA事件 search");

  $(".gcse input.gsc-input").val(_query)
  $(".gcse .gsc-search-button").click()
  //console.log(['query', _query])
  return false;
};
