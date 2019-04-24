
// -------------------
$(function ($) {
  //var aboveHeight = $('#masthead > .container').outerHeight();
  let aboveHeight = 80
  let windowScroll = function () {
    if ($(window).scrollTop() > aboveHeight) {
      $('body').addClass('fixed-nav')
      $('#masthead').addClass('fixed-nav')
              //.next().css('padding-top', '5px');

    } else {
      $('body').removeClass('fixed-nav')
      $('#masthead').removeClass('fixed-nav')
              //.next().css('padding-top', '0');
    }
  }
  $(window).scroll(windowScroll);
  windowScroll()
});
