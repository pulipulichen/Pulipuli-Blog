# Pulipuli-Blog
擺放blog.pulipuli.info各種資料的儲存庫

https://pulipulichen.github.io/Pulipuli-Blog/

https://github.com/pulipulichen/Pulipuli-Blog/issues

# 如何修改測試內容

1. 用Live Server開啟
2. 確認 http://127.0.0.1:5501/lib-for-link/dist/admin-tools.js 可以連線
3. `~/telebit http 5501` sweet-pug-22.telebit.io
4. 確認 https://sweet-pug-22.telebit.io/lib-for-link/dist/admin-tools.js 可以連線

# 已知錯誤訊息

## 20230621-2358 來自FB
````
Error with Permissions-Policy header: Unrecognized feature: 'ambient-light-sensor'.
Error with Permissions-Policy header: Unrecognized feature: 'bluetooth'.
````

# Reference
- Semantic UI: https://semantic-ui.com/collections/grid.html
- Semantic UI icon: https://semantic-ui.com/elements/icon.html

## package.json
https://ithelp.ithome.com.tw/articles/10158140
````
npm init
````

## 安裝套件的方法
````
npm-link-save [package-name] --save-dev
````

盡可能降低連線數
http://blog.pulipuli.info/2007/05/blog-post_7346.html

# Selenium
https://seleniumhq.github.io/selenium/docs/api/javascript/index.html
https://www.cnblogs.com/fnng/p/5854875.html

Selenium的運作需要driver，我這邊只測試Chrome，請下載最新版，有不同的平台
http://chromedriver.storage.googleapis.com/index.html?path=73.0.3683.20/

## Windows平台
解壓縮後放到node.js安裝環境，例如：
C:\Program Files\nodejs

## Linux平台
解壓縮放到以下路徑，需要有root權限
/usr/bin/
還要記得打開所有的執行權限
確認指令列可以直接執行 `chromedriver` 即可

https://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/until.html#titleIs

## 建立測試案例
使用Chrome瀏覽器的Selenium IDE編輯器來建立案例吧
如果案例裡面有需要等待的AJAX，請使用 `pause` 指令來等待

Font Awesome icon: https://fontawesome.com/icons?d=gallery&m=free

----

# Blogger

- pageType: index, archive, item
- Blog draft image link parser: https://pulipulichen.github.io/Pulipuli-Blog/user-js-css/blog-draft-image-parser/

-----

# 自動轉發

Private document:
https://docs.google.com/document/d/1lkQwKG22HN9OlRztyRUPI6WplEOEn427fnw7nk0DRCQ/edit

