$(() => {
  $('#masthead .btn-navbar').click(() => {
    $('#masthead .nav-collapse').toggleClass('collapse')
  })
  
  let testOpen = () => {
    $('#masthead .btn-navbar').click()
  }
  testOpen()  
})

