// function isSamePageWithoutHash(ignoreHash = true) {
//   // console.log([window.location.href, document.referrer])
//   try {
//     const currentUrl = new URL(window.location.href);
//     const referrerUrl = new URL(document.referrer);

//     if (ignoreHash) {
//       currentUrl.hash = '';
//       referrerUrl.hash = '';
//     }

//     return currentUrl.href === referrerUrl.href;
//   }
//   catch (e) {
//     return false
//   }
// }

module.exports = function () {
  // console.log(performance.navigation.type)
  if (performance.navigation.type === 2 || performance.navigation.type === 1) {
    return false
  }
  // if (isSamePageWithoutHash()) {
  //   return false
  // }

  // 取得網址中的 hash 值
  const hash = window.location.hash.substring(1); // 去除 # 號

  // 如果有 hash 值
  // console.log(hash)
  if (hash && hash.startsWith('postcata_')) {
      // 尋找對應 id 的元素
      const element = document.getElementById(hash);

      // 如果找到元素
      if (element) {
          // 計算目標滾動位置 (top - 2rem)
          // const targetPosition = element.offsetTop - 1 * parseFloat(getComputedStyle(document.documentElement).fontSize);
          // const targetPosition = element.offsetTop;
          // const targetPosition = element.offsetTop + 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
          const targetPosition = element.offsetTop + 100

          // 滾動到目標位置
          // $(() => {
            // setTimeout(() => {
              window.scrollTo({
                top: targetPosition,
                // behavior: 'smooth' // 平滑滾動效果
              });
            // }, 9500)
          // })
            
      }
  }
}

