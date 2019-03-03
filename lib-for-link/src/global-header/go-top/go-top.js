
//---------------------------------------

$('.go-top').click(function(){
  $('.st-content').animate({scrollTop:0},'slow');
  $('html, body').animate({scrollTop:0},'slow');
  return false;
});