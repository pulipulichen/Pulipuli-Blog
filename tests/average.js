const should = require('should')
const average = require('../lib/average')
var expect = require('chai').expect;  // 這是斷言函式庫

describe('#average', () => {
  // 測試算出來的平均是不是 2.5
  it('should return the average of array', done => {
    var avg = 2.7
    avg.should.equal(2.5)
    done()
  })
})