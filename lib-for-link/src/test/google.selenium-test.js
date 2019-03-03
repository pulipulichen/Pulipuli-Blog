var path = require('path');
var scriptName = path.basename(__filename);
const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com/ncr');
    await driver.findElement(By.name('q')).sendKeys('布丁布丁吃什麼', Key.RETURN);
    await driver.wait(until.titleIs('布丁布丁吃什麼 - Google Search'), 1000);
  } 
  catch (e) {
    console.log('[ERROR]' + scriptName)
    console.log(e)
  } 
  finally {
    await driver.quit();
  }
})();