
// -------------------
$(function ($) {
  var aboveHeight = $('#leader-wrapper').outerHeight();
  $(window).scroll(function () {
    if ($(window).scrollTop() > aboveHeight) {
      $('body').addClass('fixed-nav')
      $('#masthead').addClass('fixed-nav')
              //.next().css('padding-top', '5px');

    } else {
      $('body').removeClass('fixed-nav')
      $('#masthead').removeClass('fixed-nav')
              //.next().css('padding-top', '0');
    }
  });
});
