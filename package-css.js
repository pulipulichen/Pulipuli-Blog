const fs = require('fs')

const enableEntryKey = [
  'global-header',
  'global-footer',
  'item-header',
  'item-footer',
  'item-owl'
]

let css = ''
enableEntryKey.forEach(filename => {
  css = css + '\n/* ' + filename + '*/\n' 
          + fs.readFileSync('./lib-for-link/dist/' + filename + '.css', 'utf8') + '\n'
})

fs.writeFileSync('./lib-for-link/dist/bundle.css', css, 'utf8')

// console.log(webpageConfig.entry)
// 把entry都列出來，