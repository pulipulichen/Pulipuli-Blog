function setupAdsense() {
  try {
    $('ins.adsbygoogle > div').each((i, ele) => {
      let $ele = $(ele)
      if ($ele.height() === 0) {
        $ele.remove()
      }
    })

    (adsbygoogle = window.adsbygoogle || []).push({});
  }
  catch (e) {
    console.error(e)
    setTimeout(() => {
      setupAdsense()
    }, 3000)
  }
}

$(() => {
  setTimeout(() => {
    let ins = $('ins.adsbygoogle')
    ins.addClass('show')

    let count = ins.length
    setTimeout(() => {
      for (let i = 0; i < count; i++) {
        setupAdsense()
      }
    }, 500)
  }, 0)
})

// function loadAdWhenVisible(insSelector) {
//   const ad = document.querySelectorAll(insSelector);
//   if (!ad) return;

//   // $(ad).addClass('show')
  
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       console.log(entry.isIntersecting)
//       if (entry.isIntersecting) {
//         (adsbygoogle = window.adsbygoogle || []).push({});
//         observer.disconnect();
//       }
//     });
//   });

//   for (let i = 0; i < ad.length; i++) {
//     observer.observe(ad[i]);
//   }
// }

// $(() => {
//   let ins = $('ins.adsbygoogle')
//   ins.addClass('show')
//   loadAdWhenVisible("ins.adsbygoogle");
// })
