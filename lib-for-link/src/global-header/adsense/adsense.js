function setupAdsense() {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  catch (e) {
    console.error(e)
    // setTimeout(() => {
    //   setupAdsense()
    // }, 3000)
  }
}

setTimeout(() => {
  let ins = $('ins.adsbygoogle')
  ins.addClass('show')

  let count = ins.length
  setTimeout(() => {
    for (let i = 0; i < count; i++) {
      setupAdsense()
    }
  }, 500)
}, 3000)