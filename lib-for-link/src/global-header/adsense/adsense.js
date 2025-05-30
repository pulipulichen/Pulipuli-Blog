function setupAdsense() {
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  catch (e) {
    console.error(e)
    setTimeout(() => {
      setupAdsense()
    }, 3000)
  }
}

setTimeout(() => {
  let ins = $('ins.adsbygoogle')
  ins.addClass('show')

  let count = ins.length
  for (let i = 0; i < count; i++) {
    setupAdsense()
  }
}, 3000)