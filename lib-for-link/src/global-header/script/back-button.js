// ----------------------------------
// 20160522 回到上一頁的功能：如果上一頁不是布丁布丁吃什麼，那就隱藏

var _header_back_button_click = function () {

  var _back_type = "back";

  if (typeof (document.referrer) !== "string") {
    _back_type = "index";
  } else {
    var _needle = [
      "http://blog.pulipuli.info/",
      "http://pulipuli.info/",
      "http://pulipuli.blogspot.com/",
      "http://pulipuli.blogspot.tw/"
    ];

    var _result = false;
    for (var _i = 0; _i < _needle.length; _i++) {
      var _n = _needle[_i];
      if (document.referrer.substr(0, _n.length) === _n) {
        _result = true;
        break;
      }
    }

    if (_result === false) {
      _back_type = "index";
    }
  }

  if (_back_type === "back") {
    if (history.back() === undefined) {
      location.href = "/";
    }
  } else {
    location.href = "/";
  }
};

$(function () {
  $('#masthead header .back-button').click(_header_back_button_click)
})
