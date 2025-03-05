/**
 * @author Pulipuli Chen 20190301
 * 會先執行initRecent
 */
var initRecent = function () {
  var pHP = puliHandlePost()
  pHP.bloggerName = "pulipuli"
  pHP.postshow = 10
  pHP.titlelen = ""
  pHP.layout = decodeURI('%3Ca%20class=%22date%22%20href=%22%25LINK%25%22%3E%25Y%25-%25M%25-%25D%25%20%3Ci%20aria-hidden=%22true%22%20class=%22fa%20fa-link%22%3E%3C/i%3E%3C/a%3E%20%25title%25')
  pHP.tagname = ""
  pHP.callback = initComment
  pHP.load("puliHandlePostNode")
}

/**
 * @author Pulipuli Chen 20190301
 * 必須要先執行完initRecent才會執行它
 */
var initComment = function () {
  pHC = puliHandleComments()
  pHC.bloggerName = "pulipuli"
  pHC.postshow = 10
  pHC.titlelen = "20"
  pHC.layout = decodeURI('%3Ca%20class=%22date%22%20href=%22%25LINK%25%22%3E%25Y%25-%25M%25-%25D%25%20%3Ci%20aria-hidden=%22true%22%20class=%22fa%20fa-link%22%3E%3C/i%3E%3C/a%3E%3Cstrong%20class=%22name%22%3E%25authorname%25%3C/strong%3E:%3Cbr%20/%3E%25comment%25')
  pHC.load("puliCommentsNode")
}

initRecent()


