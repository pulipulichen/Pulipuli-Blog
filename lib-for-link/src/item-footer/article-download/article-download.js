articleDownload = {
  copyHTML: function () {
    console.log('copyHTML')
  },
  downloadArticle: function () {
    console.log('downloadArticle')
    console.log(JSZip)
  }
}

$(() => {
  $('#main .entry-content .blog-admin .copy-html-button').click(articleDownload.copyHTML)
  $('#main .entry-content .blog-admin .download-article-button').click(articleDownload.downloadArticle)
})