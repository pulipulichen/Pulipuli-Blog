$(() => {
  $('.post-variables:first').each((i, span) => {
    //console.log(i)
    let postVariable = $(span).find('.post-variable')
    // console.log(postVariable)

    let postTitle = postVariable.data('post-title')
    if (postTitle.indexOf(' / ') > -1) {
      postTitle = postTitle.substring(0, postTitle.indexOf(' / ')).trim()
    }
    $(`meata[name="citation_title"]`).attr('content', postTitle)

    $(`meata[name="citation_author"]`).attr('content', postVariable.data('post-author'))

    $(`meata[name="citation_date"]`).attr('content', reformatDate(postVariable.data('post-timestamp')))

  })
})

function reformatDate(dateString) {
  const months = {
    '1月': '1',
    '2月': '2',
    '3月': '3',
    '4月': '4',
    '5月': '5',
    '6月': '6',
    '7月': '7',
    '8月': '8',
    '9月': '9',
    '10月': '10',
    '11月': '11',
    '12月': '12'
  };

  const dateParts = dateString.split(' ');
  const month = months[dateParts[0]];
  const day = parseInt(dateParts[1], 10);
  const year = dateParts[2];

  return `${year}年${month}月${day}日`;
}