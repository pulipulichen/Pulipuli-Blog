var pHP = puliHandlePost();
pHP.bloggerName = "pulipuli";
pHP.postshow = 10;
pHP.titlelen = "";
pHP.layout = decodeURI("%25title%25%20(%25Y%25-%25M%25-%25D%25%20)");
pHP.tagname = "";
pHP.callback = function () {
    var pHC = puliHandleComments();
    pHC.bloggerName = "pulipuli";
    pHC.postshow = 10;
    pHC.titlelen = "20";
    pHC.layout = decodeURI("%3Cstrong%3E%25authorname%25%3C/strong%3E(%25Y%25-%25M%25-%25D%25)%3Cbr%20/%3E%25comment%25");
    pHC.load("puliCommentsNode");
};
pHP.load("puliHandlePostNode");