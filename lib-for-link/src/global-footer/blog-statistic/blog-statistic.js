

BLOG_STATISTIC = {
  api: 'https://script.google.com/macros/s/AKfycbwFLapgBzxxt6qKsj73wey_Uh-Q_-XvTNJSpXLgQmvKoGJxboAnfSQX3y2tJqimUsteIQ/exec',
  log: function (target, url, title) {
    let apiURL = this.api + '?type=' + target + '&url=' + encodeURIComponent(url)
    // await fetch(apiURL)
    setTimeout(async () => {
      await fetch(apiURL, { mode: 'no-cors' })
    }, 0)

    if (target === 'share_web_share_api') {
      this.openWebShareAPI(url, title)
    }
  },
  openWebShareAPI (url, title) {
    if (navigator.share) {
      // Content to share
      var shareData = {
        title,
        text: title,
        url
      };
    
      // Share content
      navigator.share(shareData)
        .then(function() {
          console.log('Content shared successfully');
        })
        .catch(function(error) {
          console.error('Error sharing content:', error);
        });
    } else {
      console.log('Web Share API is not supported');
    }
  },
  getShareCount: async function () {
    let shareCountList = $('#content .share-count[post-url]')

    let postURLList = []
    for (let i = 0; i < shareCountList.length; i++) {
      postURLList.push(shareCountList.eq(i).attr('post-url'))
    }

    // console.log(postURLList)
    // Make a POST request
    fetch(this.api, {
      method: 'POST',
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Access-Control-Allow-Origin': '*',
      //   'Access-Control-Allow-Methods': 'GET, POST',
      //   'Access-Control-Allow-Headers': 'Content-Type'
      // },
      body: JSON.stringify({postURLList}),
      mode: 'cors'
    })
      .then(response => response.text())
      .then(data => {
        // Handle the response data
        console.log('[' + data + ']');
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    // const obj = { key: "value" };
    // const res = await axios.post(this.api, obj);
    // console.log(res);
  }
}

$(() => {
  BLOG_STATISTIC.getShareCount()
})