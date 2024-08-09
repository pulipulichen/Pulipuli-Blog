
let cleanFirstHeading = function (firstHeading) {
  if (firstHeading.length === 0) {
    return;
  }

  //如果firstHeading之前有<font size="3"></font>，則移除之
  var font = firstHeading.prev().filter('font');
  if (font.length > 0) {
    font.remove();
  }

  //如果firstHeading之前有hr，則移除之
  var hr = firstHeading.prev().filter('hr');
  if (hr.length > 0) {
    hr.remove();
    /*console.log("有<hr />");*/
  } else {
    var div = firstHeading.prevAll("div:first");
    hr = div.children(':last').filter('hr');
    if (hr.length > 0) {
      hr.remove();
      /*console.log("有 div > hr");*/
    } else {
      var p = firstHeading.prevAll("p:first");
      //p.css("border", "1px solid red");
      //console.log([p.length, p.html()]);
      hr = p.children().filter('hr');
      if (hr.length > 0) {
        hr.remove();
        /*console.log("有 p > hr");*/
      } else {
        hr = p.prev().filter("hr");
        if (hr.length > 0) {
          hr.remove();
        }
        //console.log(["p裡面找不到", p.length, p.children().length, p.html() ]);
      }
      if ($.trim(p.html()) === "") {
        p.remove();
        //console.log('p 也移除囉');
      }
    }
  }
  //var p = firstHeading.prevAll("p:first");
  //console.log(firstHeading.html());
  //console.log(p.children().length);
  //if (p.length > 0) {
  //	p.remove();
  //}
} // let cleanFirstHeading = function (firstHeading) {

module.exports = cleanFirstHeading