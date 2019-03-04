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
  it('設置', function() {
    let result = lscache.set("test", true, 10)
    expect(result).to.be.true
  })
  
  it('取得', function() {
    let result = lscache.get("test")
    expect(result).to.be.true
  })
  


// 固定的結尾
}); //describe(scriptName, function() {
// 固定的結尾