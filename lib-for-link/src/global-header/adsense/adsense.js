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

window.addEventListener('load', function () {
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
})

// function loadAdWhenVisible(insSelector) {
//   const ad = document.querySelector(insSelector);
//   if (!ad) return;

//   $(ad).addClass('show')
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         (adsbygoogle = window.adsbygoogle || []).push({});
//         observer.disconnect();
//       }
//     });
//   });

//   observer.observe(ad);
// }
// loadAdWhenVisible(".adsbygoogle");