// 布丁式Blogger留言板
// @param {Object} config 設定
jQuery.puliGuestBook({
    blogID: "16607461",    //blog的ID
    postID: "113544406852218769",    //post的ID
    url: "/2005/12/blogger_113544406852218769.html#comment-editor",    //訂閱張貼意見的網址，或是文章ID:115667103250300740
    //css: "//pulipulichen.github.io/Pulipuli-Blog/lib-for-link/modules/puliGuestBook/puliGuestBook.css",    //CSS樣式表
    container: ".puliGuestBook",    //顯示留言的元素
    listNumber: 20,    //顯示留言數量。超過此數量時，會顯示「閱讀全部留言」的連結。
    adminName: 'Pulipuli Chen',    //Blog主人的名字
    adminPhoto: '//1.bp.blogspot.com/_yr4MQB4zDus/SZ4Mb30N0aI/AAAAAAAAFUg/3OGhwhzBUOg/S45/',    //部落格主人的照片
    anonymous: '匿名',    //匿名者的名字
    readMore: '閱讀全部留言',    //閱讀全部留言連結的名稱
    write: '撰寫留言',    //撰寫留言連結的名稱
    reload: '重新讀取',    //重新讀取連結的名稱
    addLink: "/2005/12/blogger_113544406852218769.html#comment-editor", //撰寫留言的按鈕連結
    disableBottomButtons: true
});