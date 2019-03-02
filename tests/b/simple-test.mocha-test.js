var expect = require('chai').expect;  // 這是斷言函式庫
var path = require('path');
var scriptName = path.basename(__filename);
scriptName = scriptName.slice(0, scriptName.lastIndexOf('.mocha-test.js'))
require('./' + scriptName)

describe(scriptName, function() {
  it('should pass', function() {
    expect(a()).to.be.false;
  });
});
