function setupAdsense() {
  setTimeout(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    }
    catch (e) {
      console.error(e)
      setupAdsense()
    }
  }, 3000)
}