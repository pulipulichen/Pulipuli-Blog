$(() => {
  $('body').append(`<div class="cookie-banner">
  <button type="button" class="button">
    <i aria-hidden="true" class="fa fa-check"></i>
    OK
  </button>
  <div class="description">
    <div class="header">This blog use cookies</div>
    <div class="content">
      We use cookie to offer you a better experience and analyze site traffic. By using this blog you agree to our 
      <a href="/p/cookie-policy.html" target="cookie-policy">Cookie Policy</a>.
    </div>
  </div>
</div>`)
})