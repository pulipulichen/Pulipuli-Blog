if (location.href.startsWith("https://")) {
  location.href = 'http://' + location.href.slice(8, location.href.length)
}
else {
  console.error('[WARNING] Blog using localhost resources now.')
}