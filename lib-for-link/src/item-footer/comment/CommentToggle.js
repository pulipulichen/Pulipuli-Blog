$(() => {
  let comments = $('#comments')
  $('.toggle-comment-display').click((event) => {
    event.stopPropagation()
    event.preventDefault()
    comments.toggleClass('hide-comments')
  })
})

import './CommentToggle.less'