

BLOG_STATISTIC = {
  api: 'https://script.google.com/macros/s/AKfycbwFLapgBzxxt6qKsj73wey_Uh-Q_-XvTNJSpXLgQmvKoGJxboAnfSQX3y2tJqimUsteIQ/exec',
  log: function (element, target, url, title) {
    let apiURL = this.api + '?type=' + target + '&url=' + encodeURIComponent(url)
    // await fetch(apiURL)
    setTimeout(async () => {
      await fetch(apiURL, { mode: 'no-cors' })
    }, 0)

    if (target === 'share_web_share_api') {
      this.openWebShareAPI(url, title)
    }

    this.addCount(element)
  },
  addCount (element) {
    // console.log(element)
    let shareContainer = $(element).parents('.share-story:first')
    if (shareContainer.length === 0) {
      // console.log(element)
      // console.log('shareContainer.length')
      return false
    }

    let shareCount = shareContainer.find('.share-count[post-url]:first')
    if (shareCount.length === 0) {
      // console.log(shareContainer)
      // window.S = shareContainer
      // console.log('shareCount.length')
      return false
    }

    let count = shareCount.text().trim()
    if (count === '') {
      count = 0
    }
    count = Number(count) + 1

    this.setShareCount(shareCount, count)
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
  getCount () {
    let shareCountList = $('#content .share-count[post-url]')
    let viewCountList = $('#content .view-count[post-url]')

    let postURLList = []
    for (let i = 0; i < shareCountList.length; i++) {
      postURLList.push(shareCountList.eq(i).attr('post-url'))
    }

    let body = {}
    body.postURLList = postURLList

    if ($('script[src$="/item-footer.js"]').length === 1) {
      body.view = location.href
    }

    // console.log(postURLList)
    // Make a POST request
    fetch(this.api, {
      redirect: "follow",
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response data
        console.log(data);
        this.setShareCounts(shareCountList, data)
        this.setViewCounts(viewCountList, data)
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  },
  setShareCounts: function(shareCountList, data) {
    for (let i = 0; i < shareCountList.length; i++) {
      let item = shareCountList.eq(i)
      let url = item.attr('post-url')
      let count = data[url][1]
      if (count && count !== 0) {
        this.setShareCount(item, count)
      }
    }
  },
  setShareCount: function(item, count) {
    item.text(count)
    item.addClass('show')
    item.parents('li.web-share-api:first').addClass('show-share-count')
  },
  setViewCounts: function(viewCountList, data) {
    for (let i = 0; i < viewCountList.length; i++) {
      let item = viewCountList.eq(i)
      let url = item.attr('post-url')
      let count = data[url][0]
      if (count && count !== 0) {
        this.setViewCount(item, count)
      }
    }
  },
  setViewCount: function(item, count) {
    item.text(count)
    item.addClass('show')
    item.parents('li.view-count:first').addClass('show-view-count')
  }
}

$(() => {
  BLOG_STATISTIC.getCount()
})