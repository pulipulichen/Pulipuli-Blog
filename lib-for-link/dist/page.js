!function(l){function e(e){for(var t,n,i=e[0],o=e[1],r=e[2],c=0,a=[];c<i.length;c++)n=i[c],p[n]&&a.push(p[n][0]),p[n]=0;for(t in o)Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);for(h&&h(e);a.length;)a.shift()();return f.push.apply(f,r||[]),s()}function s(){for(var e,t=0;t<f.length;t++){for(var n=f[t],i=!0,o=1;o<n.length;o++){var r=n[o];0!==p[r]&&(i=!1)}i&&(f.splice(t--,1),e=c(c.s=n[0]))}return e}var n={},p={6:0},f=[];function c(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=l,c.c=n,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var t=window.webpackJsonp=window.webpackJsonp||[],i=t.push.bind(t);t.push=e,t=t.slice();for(var o=0;o<t.length;o++)e(t[o]);var h=i;f.push([121,0]),s()}({121:function(e,t,n){n(122),e.exports=n(123)},122:function(e,t){ArchiveListUtils={openListYear:function(e){console.log("openListYear");var t=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)"),n=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)");t.addClass("expanded").removeClass("collapsed"),n.addClass("toggle-open").text("▼ "),"function"==typeof e&&e()},openListMonth:function(i){this.openListYear(function(){var n=document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle");!function e(t){t<n.length?(n[t].click(),$(function(){setTimeout(function(){e(++t)},500)})):"function"==typeof i&&i()}(0)})},displayConfiguration:function(){console.log("displayConfiguration");var o="archivesCheckboxStatus";this.openListYear(function(){var c=function(){if("year"===$(this).attr("data-folder-type")){$(this).parent().find("ul > li > .download-checkbox").prop("checked",this.checked)}else{var e=$(this).parent().parent().parent(),t=e.children(".download-checkbox"),n=!0;e.find("ul.hierarchy > li > .download-checkbox").each(function(e,t){!1===t.checked&&(n=!1)}),t.prop("checked",n)}var i={};$("#BlogArchive1_ArchiveList input.download-checkbox").each(function(e,t){i[t.id]=t.checked}),lscache.set(o,i)};$("#BlogArchive1_ArchiveList a.toggle").each(function(e,t){var n,i="month";if("BlogArchive1_ArchiveList"===$(t).parent().parent().parent().attr("id")&&(i="year"),"year"===i)n="d_"+$(t).parent().children("a.post-count-link").text().trim();else{var o=$(t).parent().children("a.post-count-link").attr("href").split("/");n="d_"+o[o.length-3]+"_"+o[o.length-2]}var r=$('<input type="checkbox" checked="checked" class="download-checkbox" />').attr("id",n).attr("data-folder-type",i).change(c);$(t).before(r).parent().addClass("init-download-checkbox")});var e=lscache.get(o);if(e)for(var t in e)$("#"+t).prop("checked",e[t])})},loopOpenItem:function(a,e){!function o(r){if(r<a.length){var c=3;!function t(){var n=window.open(a[r]),i=300;!function e(){if(!1===n.closed&&0<i)setTimeout(function(){i--,e()},1e3);else{if(0===i){if(n.close(),0<--c)return void t();console.log(["DOWNLOAD ERROR",a[r]])}setTimeout(function(){o(++r)},3e3)}}()}()}else"function"==typeof e&&e()}(0)},startDownload:function(o){var r=this,c=$('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked');!function e(t){if(t<c.length){var n=c.eq(t).parent();if(n.hasClass("collapsed"))n.children("a.toggle")[0].click(),setTimeout(function(){e(t)},1e3);else{var i=[];n.find("ul.posts > li > a").each(function(e,t){i.push(t.href+"?downloadArticle=true")}),r.loopOpenItem(i,function(){c.eq(t).prop("checked",!1).change(),e(++t)})}}else"function"==typeof o&&o()}(0)}},$(function(){var e=$("#ArchiveList > .page-tool");e.find(".open-list.year").click(function(){ArchiveListUtils.openListYear()}),e.find(".open-list.month").click(function(){ArchiveListUtils.openListMonth()}),e.find(".setup-checkbox").click(function(){ArchiveListUtils.displayConfiguration()}).click(),e.find(".start-download").click(function(){ArchiveListUtils.startDownload()})})},123:function(e,t,n){var i=n(124);"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(1)(i,o);i.locals&&(e.exports=i.locals)},124:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"#content.main{display:none}#main{margin-top:30px}#ArchiveList>#BlogArchive1_ArchiveList ul.hierarchy>li.archivedate{padding-left:0;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList ul.posts>li{padding-left:.75rem;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList input.download-checkbox{width:16px;height:16px;margin-top:-2px}#main .page-tool{font-size:14px;user-select:none}#main .page-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;margin-right:.5rem;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none}",""])}});