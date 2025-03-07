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

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)
    [0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  
  
  //initSearchInput()
  /*
  $('#searchform').submit(function () {
    return menu_search_submit(this);
  })
  */
  
  $(() => {
    //console.log($('.gcse-placeholder').length)
    $('.gcse-placeholder').submit(function () {
      // return menu_search_submit(this);
      perform_felo_search()
    })
    
    $('.srch_btn').click(() => {
      //$('input.gsc-search-button').click()
      // $('.gcse-placeholder:first').submit()
      return menu_search_submit($('.gcse-placeholder')[0]);
    })

    $('.felo-search').click(() => {
      perform_felo_search()
    })
    
    $('.gcse-placeholder-dropdown').submit(function () {
      // return menu_search_submit(this);
      perform_felo_search()
    })
    
    $('.srch_btn-dropdown').click(() => {
      //$('input.gsc-search-button').click()
      // $('.gcse-placeholder-dropdown').submit()
      return menu_search_submit($('.gcse-placeholder-dropdown')[0]);
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
    //testSearchDropdown()
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

let perform_felo_search = function () {
  let search
  if ($('.gcse-placeholder:visible input').length > 0) {
    search = $('.gcse-placeholder input').val().trim()
  }
  else {
    search = $('.gcse-placeholder-dropdown input').val().trim()
  }
  // console.log({search})

  if (search.length > 0) {
    var encodedText = encodeURIComponent(search + ' site:blog.pulipuli.info');
    window.open(`https://felo.ai/search?q=${encodedText}&mode=verbose&invite=B84K3x3wo0Xr0`, '_query_' + encodedText)
  }
}