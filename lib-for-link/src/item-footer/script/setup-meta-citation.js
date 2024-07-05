$(() => {
  // let postVariable = $('.post-variables:first .post-variable')
  
  // let postTitle = postVariable.data('post-title')
  // if (postTitle.indexOf(' / ') > -1) {
  //   postTitle = postTitle.substring(0, postTitle.indexOf(' / ')).trim()
  // }
  // $(`meta[name="citation_title"]`).attr('content', postTitle)

  // $(`meta[name="citation_author"]`).attr('content', postVariable.data('post-author'))

  // $(`meta[name="citation_publication_date"]`).attr('content', reformatDate(postVariable.data('post-timestamp')))

  let dateHeader = $(`h2.date-header`)
  if (dateHeader.length > 0) {
    dateHeader.after(`<time datetime="${dateHeader.text().trim()}" />`)
  }

  // citation_keywords
  let labels = $('.post-labels > a')
  if (labels.length > 0) {
    let content = []
    for (let i = 0; i < labels.length; i++) {
      content.push(labels.eq(i).text().trim())
    }
    $(`<meta name="keywords" content="${content}" />`).appendTo($('head'))
  }
})

// function reformatDate(dateString) {
//   const months = {
//     '1月': '1',
//     '2月': '2',
//     '3月': '3',
//     '4月': '4',
//     '5月': '5',
//     '6月': '6',
//     '7月': '7',
//     '8月': '8',
//     '9月': '9',
//     '10月': '10',
//     '11月': '11',
//     '12月': '12'
//   };

//   const dateParts = dateString.split(' ');
//   const month = months[dateParts[0]];
//   const day = parseInt(dateParts[1], 10);
//   const year = dateParts[2];

//   return `${year}年${month}月${day}日`;
// }