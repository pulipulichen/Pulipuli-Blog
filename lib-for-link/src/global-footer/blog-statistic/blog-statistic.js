

BLOG_STATISTIC = {
  api: 'https://script.google.com/macros/s/AKfycbzxTzGVCUpv0EfWNYkvcvf3hiEfKYP_r56LmQs1zpvWbOD98ZuH2TEKphaEWPvulMwZkw/exec',
  log: function (element, target, url, title) {
    // let originalURL = url
    url = this.filterURL(url)
    let fullURL = 'https://blog.pulipuli.info' + url
    let apiURL = this.api + '?type=' + target + '&url=' + encodeURIComponent(url)
    // await fetch(apiURL)
    setTimeout(async () => {
      await fetch(apiURL, { mode: 'no-cors' })
    }, 0)

    if (target === 'share_web_share_api') {
      this.openWebShareAPI(fullURL, title)
    }

    gtag('event', 'share', {
      target,
      url: fullURL,
    });

    this.addCount(element)
  },
  logAskMe(url) {
    url = this.filterURL(url)
    gtag('event', 'ask_me', {
      url: 'https://blog.pulipuli.info' + url,
    });
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

      // https://www.addtoany.com/share#url=https%3A%2F%2Fshubo.io%2F
      window.open(`https://www.addtoany.com/share#url=${encodeURIComponent(url)}`, '_blank')
    }
  },
  filterURL (url) {
    // let queryPos = url.indexOf('?')
    // if (queryPos > -1) {
    //   url = url.slice(0, queryPos)
    // }

    // let hashPos = url.indexOf('#')
    // if (hashPos > -1) {
    //   url = url.slice(0, hashPos)
    // }
    // return url

    try {
      url = new URL(url);
      return url.pathname;
    }
    catch (e) {
      console.error('Error url: ' + url)
      return url
    }
  },
  getCount () {
    let shareCountList = $('#content .share-count[post-url]')
    let viewCountList = $('#content .view-count[post-url]')

    let postURLList = []
    for (let i = 0; i < shareCountList.length; i++) {
      let url = shareCountList.eq(i).attr('post-url')
      url = this.filterURL(url)
      
      if (postURLList.indexOf(url) === -1) {
        postURLList.push(url)
      }
      
    }

    let body = {}
    body.postURLList = postURLList

    if ($('script[src$="/item-footer.js"]').length === 1) {
      body.view = this.filterURL(location.href)
      body.uuid = this.generateDeviceUUID()
    }

    // console.log(body)
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
        // console.log(data);
        if (data.status && data.status === 'error') {
          console.error(data)
          return false
        }

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
      url = this.filterURL(url)

      if (!data[url]) {
        continue
      }

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
      url = this.filterURL(url)

      if (!data[url]) {
        continue
      }

      let count = data[url][0]
      let time = data[url][2]
      // let time = 2
      if (count && count !== 0) {
        this.setViewCount(item, count, time)
      }
    }
  },
  setViewCount: function(item, count, time) {
    item.text(count)
    item.addClass('show')
    let viewCountContainer = item.parents('li.view-count:first')
    viewCountContainer.addClass('show-view-count')

    if (time) {
      viewCountContainer.find('.view-time').addClass('show-view-time')
        .find('.hour').text(time)
    }
  },
  generateDeviceUUID() {
    var uuid = localStorage.getItem('deviceUUID');
    if (!uuid) {
      uuid = this.generateRandomUUID();
      localStorage.setItem('deviceUUID', uuid);
    }
    return uuid;
  },
  generateRandomUUID() {
    // Implement your own UUID generation logic here
    // This is just a basic example, you may use a more robust UUID library
  
    var randomUUID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  
    return randomUUID;
  }
}

$(() => {
  BLOG_STATISTIC.getCount()
})