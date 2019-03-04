lscacheHelper = {
  expiredMinute: 10,
  getLock: false,
  get: function (url, callback) {
    if (this.getLock === true) {
      setTimeout(() => {
        this.get(url, callback)
      }, 500)
      return
    }
    
    let getHeader = 'getHeader-'
    let lscacheKey = getHeader + url
    let data = lscache.get(lscacheKey)
    if (data !== null) {
      if (typeof(callback) === 'function') {
        callback(data)
      }
    }
    else {
      /*
      if (url.indexOf('callback=?') > -1) {
        url = url.split('callback=?').join('callback=a')
      }
      */
      this.getLock = true
      $.getJSON(url, (data) => {
        this.getLock = false
        //if (data.indexOf('a(') > -1) {
        //  data = data.slice(data.indexOf('a(') + 2, data.length - 2)
        //}
        lscache.set(lscacheKey, data, this.expiredMinute)
        if (typeof(callback) === 'function') {
          callback(data)
        }
      })
    }
  }
}