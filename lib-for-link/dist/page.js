!function(l){function e(e){for(var t,n,o=e[0],i=e[1],c=e[2],r=0,a=[];r<o.length;r++)n=o[r],p[n]&&a.push(p[n][0]),p[n]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(l[t]=i[t]);for(u&&u(e);a.length;)a.shift()();return d.push.apply(d,c||[]),s()}function s(){for(var e,t=0;t<d.length;t++){for(var n=d[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==p[c]&&(o=!1)}o&&(d.splice(t--,1),e=r(r.s=n[0]))}return e}var n={},p={6:0},d=[];function r(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=l,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=(t=window.webpackJsonp=window.webpackJsonp||[]).push.bind(t);t.push=e;for(var t=t.slice(),o=0;o<t.length;o++)e(t[o]);var u=i;d.push([154,0]),s()}({154:function(e,t,n){n(155),n(156),e.exports=n(157)},155:function(e,t){ArchiveListUtils={openListYear:function(e){console.log("openListYear");var t=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded)"),n=$("#BlogArchive1_ArchiveList > ul.hierarchy > li.archivedate:not(.expanded) > a.toggle > .zippy:not(.toggle-open)");t.addClass("expanded").removeClass("collapsed"),n.addClass("toggle-open").text("▼ "),"function"==typeof e&&e()},openListMonth:function(o){this.openListYear(function(){var n=document.querySelectorAll("#BlogArchive1_ArchiveList > ul > li > ul > li.archivedate.collapsed > a.toggle");(function e(t){t<n.length?(n[t].click(),$(function(){setTimeout(function(){e(++t)},500)})):"function"==typeof o&&o()})(0)})},displayConfiguration:function(){var c="archivesCheckboxStatus";this.openListYear(function(){function i(){"year"===$(this).attr("data-folder-type")?$(this).parent().find("ul > li > .download-checkbox").prop("checked",this.checked):(t=(e=$(this).parent().parent().parent()).children(".download-checkbox"),n=!0,e.find("ul.hierarchy > li > .download-checkbox").each(function(e,t){!1===t.checked&&(n=!1)}),t.prop("checked",n));var e,t,n,o={};$("#BlogArchive1_ArchiveList input.download-checkbox").each(function(e,t){o[t.id]=t.checked}),lscache.set(c,o)}$("#BlogArchive1_ArchiveList a.toggle").each(function(e,t){if($(t).parent().hasClass("init-download-checkbox"))return!1;var n="month",o=(o="year"===(n="BlogArchive1_ArchiveList"===$(t).parent().parent().parent().attr("id")?"year":n)?"d_"+$(t).parent().children("a.post-count-link").text().trim():"d_"+(o=$(t).parent().children("a.post-count-link").attr("href").split("/"))[o.length-3]+"_"+o[o.length-2],$('<input type="checkbox" checked="checked" class="download-checkbox" />').attr("id",o).attr("data-folder-type",n).change(i));$(t).before(o).parent().addClass("init-download-checkbox")});var e=lscache.get(c);if(e)for(var t in e)$("#"+t).prop("checked",e[t])})},loopOpenItem:function(a,e){(function i(c){var r;c<a.length?(r=3,function t(){var n=window.open(a[c]),o=300;(function e(){if(!1===n.closed&&0<o)setTimeout(function(){o--,e()},1e3);else{if(0===o){if(n.close(),0<--r)return void t();console.log(["DOWNLOAD ERROR",a[c]])}setTimeout(function(){i(++c)},3e3)}})()}()):"function"==typeof e&&e()})(0)},startDownload:function(i){var c=this,r=$('#BlogArchive1_ArchiveList input.download-checkbox[data-folder-type="month"]:checked');(function e(t){var n,o;t<r.length?(n=r.eq(t).parent()).hasClass("collapsed")?(n.children("a.toggle")[0].click(),setTimeout(function(){e(t)},1e3)):(o=[],n.find("ul.posts > li > a").each(function(e,t){o.push(t.href+"?downloadArticle=true")}),c.loopOpenItem(o,function(){r.eq(t).prop("checked",!1).change(),e(++t)})):"function"==typeof i&&i()})(0)}},$(function(){var e=$("#ArchiveList > .page-tool");e.find(".open-list.year").click(function(){ArchiveListUtils.openListYear()}),e.find(".open-list.month").click(function(){ArchiveListUtils.openListMonth()}),e.find(".setup-checkbox").click(function(){ArchiveListUtils.displayConfiguration()}).click(),e.find(".start-download").click(function(){ArchiveListUtils.startDownload()}),$("#labelsTool > .page-tool").find(".copy-labels").click(function(){LabelsUtils.copyLabels()})})},156:function(e,t){LabelsUtils={copyLabels:function(){var n=[],e=($(".list-label-widget-content li a").each(function(e,t){n.push(t.innerText.trim())}),n.sort(),n.join("\n"));this.copyPlainText(e)},copyPlainText:function(e){var t=document.getElementById("puliClipboardInput");null===t&&((t=document.createElement("textarea")).id="puliClipboardInput",document.body.appendChild(t)),t.value=e,t.style="display: block; position: absolute; top: -1000px; left: -1000px;",t.select(),document.execCommand("copy"),t.style="display: none"}},$(function(){$("#labelsTool > .page-tool").find(".copy-labels").click(function(){LabelsUtils.copyLabels()})})},157:function(e,t,n){var o=n(158),i=("string"==typeof o&&(o=[[e.i,o,""]]),{hmr:!0});i.transform=void 0,i.insertInto=void 0,n(1)(o,i);o.locals&&(e.exports=o.locals)},158:function(e,t,n){(e.exports=n(0)(!1)).push([e.i,"#content.main{display:none}#main{margin-top:30px}#ArchiveList>#BlogArchive1_ArchiveList ul.hierarchy>li.archivedate{padding-left:0;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList ul.posts>li{padding-left:.75rem;margin-left:1rem!important}#ArchiveList>#BlogArchive1_ArchiveList input.download-checkbox{width:16px;height:16px;margin-top:-2px}#main .page-tool{font-size:14px;user-select:none}#main .page-tool a button{background-color:#f8f8f8;background-image:-webkit-linear-gradient(top,#f8f8f8,#f1f1f1);border:1px solid #c6c6c6;color:#222;-webkit-transition:all;-webkit-box-shadow:0 1px 1px rgba(0,0,0,.1);font-weight:700;margin-right:.5rem;font-family:arial,sans-serif;font-size:11px;height:27px;padding-bottom:0;text-align:center;text-shadow:0 1px rgba(0,0,0,.1);vertical-align:top;-webkit-appearance:none;box-sizing:border-box;user-select:none}",""])}});