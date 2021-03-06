var path = require('path');
var scriptName = path.basename(__filename);
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  console.log('Start Seleninium test: ' + scriptName)
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://blog.pulipuli.info');
    await driver.findElement(By.css('.entry-title:first-of-type')).click();
    await driver.wait(until.titleContains('- 布丁布丁吃什麼'), 1000);
  } 
  catch (e) {
    console.log('[ERROR]' + scriptName)
    console.log(e)
  } 
  finally {
    await driver.quit();
  }
})();