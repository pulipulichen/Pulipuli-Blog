// -----------------------------------------
// 這一段請固定
var expect = require('chai').expect;  // 這是斷言函式庫
var path = require('path');
var scriptName = path.basename(__filename);
scriptName = scriptName.slice(0, scriptName.lastIndexOf('.mocha-test.js'))
require('./' + scriptName)
// -----------------------------------------

// 固定的開頭
describe(scriptName, function() {
// 固定的開頭  

  // 以下才是測試的開始
  it('should pass 可以測試嗎', function() {
    expect(a()).to.be.true;
  });


// 固定的結尾
}); //describe(scriptName, function() {
// 固定的結尾