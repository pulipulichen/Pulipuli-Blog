// average.js 
// 取得陣列的平均值
module.exports = function average(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum / array.length
}
// max.js
// 取得陣列中的最大值
module.exports = function max(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    max = array[i] > max ? array[i] : max
  }
  return max
}
// min.js
// 取得陣列中的最小值
module.exports = function min(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    min = array[i] < min ? array[i] : min
  }
  return min
}