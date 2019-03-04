lscacheHelper = {
  expiredMinute: 60 * 24,
  getJSONLock: false,
  getJSON: function (url, callback, expiredMinute) {
    if (this.getJSONLock === true) {
      setTimeout(() => {
        this.get(url, callback, expiredMinute)
      }, 500)
      return
    }
    
    if (typeof(expiredMinute) !== 'number') {
      expiredMinute = this.expiredMinute
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
      this.getJSONLock = true
      $.getJSON(url, (data) => {
        this.getJSONLock = false
        //if (data.indexOf('a(') > -1) {
        //  data = data.slice(data.indexOf('a(') + 2, data.length - 2)
        //}
        lscache.set(lscacheKey, data, expiredMinute)
        if (typeof(callback) === 'function') {
          callback(data)
        }
      })
    }
  }
}