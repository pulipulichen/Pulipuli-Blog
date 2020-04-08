var vm = new Vue({
  el: '#app',
  data: {
    //rawHTML: ''
    rawHTML: `<a href="http://4.bp.blogspot.com/-ACQnPYRKEs0/Xo3DijLSUiI/AAAAAAAEjl4/uPoisTw4bZAXzMIL4dwT3swUTPuSsmlGQCK4BGAYYCw/s1600/2020-04-08_202715.png" imageanchor="1"><img border="0" height="240" src="https://4.bp.blogspot.com/-ACQnPYRKEs0/Xo3DijLSUiI/AAAAAAAEjl4/uPoisTw4bZAXzMIL4dwT3swUTPuSsmlGQCK4BGAYYCw/s320/2020-04-08_202715.png" width="320" /></a><a href="http://3.bp.blogspot.com/-U5ZR-dVNmWs/Xo3DizEAWNI/AAAAAAAEjl8/VOiLuZ66MlQuqX0vydj71rtG99FXBQh5ACK4BGAYYCw/s1600/2020-04-08_202611.png" imageanchor="1"><img border="0" height="240" src="https://3.bp.blogspot.com/-U5ZR-dVNmWs/Xo3DizEAWNI/AAAAAAAEjl8/VOiLuZ66MlQuqX0vydj71rtG99FXBQh5ACK4BGAYYCw/s320/2020-04-08_202611.png" width="320" /></a><a href="http://2.bp.blogspot.com/-cujovm3JDjg/Xo3DiV1NkdI/AAAAAAAEjl0/4s__0yA_4ns1LTKaSQQGWFouV6SjHBXIACK4BGAYYCw/s1600/2020-04-08_202646.png" imageanchor="1"><img border="0" height="295" src="https://2.bp.blogspot.com/-cujovm3JDjg/Xo3DiV1NkdI/AAAAAAAEjl0/4s__0yA_4ns1LTKaSQQGWFouV6SjHBXIACK4BGAYYCw/s320/2020-04-08_202646.png" width="320" /></a>`
  },
  computed: {
    links: function () {
      let parts = this.rawHTML.split('<a href="')
      //console.log(parts)
      let links = []
      let filenames = []
      let filenamesMapping = {}
      for (let i = 1; i < parts.length; i++) {
        let link = parts[i].slice(0, parts[i].indexOf('"'))
        //links.push(link)
        let filename = this.filename(link)
        if (typeof(filenamesMapping[filename]) === 'string') {
          filename = filename + '_'
        }
        
        filenames.push(filename)
        filenamesMapping[filename] = link
        
      }
      filenames.sort()
      
      filenames.forEach(function (filename) {
        links.push(filenamesMapping[filename])
      })
      
      return links
    },
    outputLinks: function () {
      return this.links.join('\n\n')
    }
  },
  methods: {
    filename: function (link) {
      if (link.indexOf('/') === -1) {
        return link
      }
      return link.slice(link.lastIndexOf('/') + 1)
    }
  }
});