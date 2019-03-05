const StreamZip = require('node-stream-zip')
const cheerio = require('cheerio')

const path = require('path')
const glob = require("glob")

const url = require('url');
const Json2csvParser = require('json2csv').Parser;
const fs = require('fs');

let fields = [
  'url',
  'protocol',
  'host',
  'pathname',
  'search',
  'hash',
  'ext',
  'filename'
]
const json2csvParser = new Json2csvParser({ fields });

let zipPath = './archive-prasing/archives/**/*.zip'

let extractProtocol = function (link) {
  let urlObject = url.parse(link)
  let protocol = urlObject.protocol
  if (protocol !== null 
          && protocol.endsWith('')) {
    protocol = protocol.slice(0, -1)
  }
  return protocol
}

let extractExt = function (link) {
  let urlObject = url.parse(link)
  let ext = null
  if (urlObject.pathname !== null 
          && urlObject.pathname.lastIndexOf('.') > -1) {
    ext = urlObject.pathname.slice(urlObject.pathname.lastIndexOf('.') + 1, urlObject.pathname.length)
    if (ext.indexOf('/') > -1
            || ext.indexOf("'") > -1
            || ext.indexOf(';') > -1
            || ext.indexOf(':') > -1) {
      ext = null
    }
  }
  return ext
}

let extractLinkMedata = function (link) {
  let urlObject = url.parse(link)
  
  let protocol = extractProtocol(link)
  let ext = extractExt(link)
  
  return {
    url: link,
    protocol: protocol,
    host: urlObject.host,
    pathname: urlObject.pathname,
    search: urlObject.search,
    hash: urlObject.hash,
    ext: ext
  }
}

let parsingATag = function ($) {
  let links = []
  $('article a[href]').each(function (i, ele) {
    //console.log(ele)
    let link = $(this).attr('href')
    links.push(extractLinkMedata(link))
  })
  return links
}

let parsingImgTag = function ($) {
  let links = []
  $('article img[src]').each(function (i, ele) {
    //console.log(ele)
    let link = $(this).attr('src')
    links.push(extractLinkMedata(link))
  })
  return links
}

let saveCSV = function (filename, list) {
  let csv = json2csvParser.parse(list);
  //console.log(csv);
  
  fs.writeFileSync('./archive-prasing/output/' + filename, csv)
}

let saveExtCSV = function (lists) {
  let extList = []
  lists.forEach(list => {
    list.forEach(urlObject => {
      let ext = urlObject.ext
      if (ext === null || ext.trim() === '') {
        return
      }
      if (extList.indexOf(ext) === -1) {
        extList.push(ext)
      }
    })
  })
  
  extList.sort
  fs.writeFileSync('./archive-prasing/output/ext-list.txt', extList.join('\n'))
}

main = function () {
  let fullHrefList = []
  let fullSrcList = []
  
  let filePathList = glob.sync(zipPath)
  let loop = (i) => {
    if (i < filePathList.length) {
      let filepath = filePathList[i]
      let filename = path.basename(filepath)
      const zip = new StreamZip({
        file: filepath,
        storeEntries: true
      });

      zip.on('ready', () => {
        let data = zip.entryDataSync('article.html');
        let $ = cheerio.load('<article>' + data.toString() + '</article>')
        let hrefList = parsingATag($)
        hrefList.map(item => item['filename'] = filename)
        fullHrefList = fullHrefList.concat(hrefList)
        let srcList = parsingImgTag($, filename)
        srcList.map(item => item['filename'] = filename)
        fullSrcList = fullSrcList.concat(srcList)
        //console.log(links)
        zip.close();
        
        i++
        loop(i)
      });
    } else {
      saveCSV('href-list.csv', fullHrefList)
      saveCSV('src-list.csv', fullSrcList)
      saveExtCSV([fullHrefList, fullSrcList])
    }
  }
  loop(0)
  
  
            
          
  
}

main()

  