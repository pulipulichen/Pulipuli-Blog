/*1551359715,,JIT Construction: v4806240,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function _(a,b,c,d,e){var f=window.console;f&&Math.floor(new Date().getTime()/1e3)-b>7*24*60*60&&f.warn("The Facebook JSSDK is more than 7 days old.");if(window[c])return;if(!window.JSON)return;var g=window[c]={__buffer:{replay:function(){var a=this,b=function(d){var b=window[c];a.calls[d][0].split(".").forEach(function(a){return b=b[a]});b.apply(null,a.calls[d][1])};for(var d=0;d<this.calls.length;d++)b(d);this.calls=[]},calls:[],opts:null},getUserID:function(){return""},getAuthResponse:function(){return null},getAccessToken:function(){return null},init:function(a){g.__buffer.opts=a}};for(var b=0;b<d.length;b++){f=d[b];if(f in g)continue;var h=f.split("."),i=h.pop(),j=g;for(var k=0;k<h.length;k++)j=j[h[k]]||(j[h[k]]={});j[i]=function(a){if(a==="init")return;return function(){g.__buffer.calls.push([a,Array.prototype.slice.call(arguments)])}}(f)}k=a;h=/Chrome\/(\d+)/.exec(navigator.userAgent);h&&Number(h[1])>=55&&"assign"in Object&&"findIndex"in[]&&(k+="&ua=modern_es6");j=document.createElement("script");j.src=k;j.async=!0;e&&(j.crossOrigin="anonymous");i=document.getElementsByTagName("script")[0];i.parentNode&&i.parentNode.insertBefore(j,i)})("https:\/\/connect.facebook.net\/en_US\/all.js?hash=c24a3668728a59a4eebd6931668369c5", 1551359715, "FB", ["AppEvents.EventNames","AppEvents.ParameterNames","AppEvents.activateApp","AppEvents.clearAppVersion","AppEvents.clearUserID","AppEvents.getAppVersion","AppEvents.getUserID","AppEvents.logEvent","AppEvents.logPageView","AppEvents.logPurchase","AppEvents.setAppVersion","AppEvents.setUserID","AppEvents.updateUserProperties","Canvas.Plugin.showPluginElement","Canvas.Plugin.hidePluginElement","Canvas.Prefetcher.addStaticResource","Canvas.Prefetcher.setCollectionMode","Canvas.getPageInfo","Canvas.scrollTo","Canvas.setAutoGrow","Canvas.setDoneLoading","Canvas.setSize","Canvas.setUrlHandler","Canvas.startTimer","Canvas.stopTimer","Event.subscribe","Event.unsubscribe","XFBML.parse","addFriend","api","getAccessToken","getAuthResponse","getLoginStatus","getUserID","init","login","logout","publish","share","ui"], false);

// --------------
// 20181226 FB粉專
// $(function () {
//     _load_fan_page()
// });

// var _load_fan_page = function () {
//   $('.widget.HTML.fb-fan-page .widget-content').html('<iframe src="//www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpulipuli.blogspot&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&lazy=true&hide_cover=false&show_facepile=false&&appId=391880581194257" width="350" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>');
// }

// -----------------
// @Pulipuli Chen 20240810-0535 
// 實際上這一串不使用

$(() => {
  // let done = false
  let onScrollEvent = function() {
    const fbFanPage = document.querySelector('.fb-fan-page');
    const rect = fbFanPage.getBoundingClientRect();

    // 如果元素在視窗內可見，則執行 console.log('ok')
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        // console.log('ok');
        let iframeCode = '<iframe src="//www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpulipuli.blogspot&tabs=timeline&width=350&height=500&small_header=true&adapt_container_width=true&lazy=true&hide_cover=false&show_facepile=false&&appId=391880581194257" width="350" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>'
        $('.widget.HTML.fb-fan-page .widget-content').html(iframeCode);
        window.removeEventListener('scroll', onScrollEvent)
        console.log('done')
    }
  }

  window.addEventListener('scroll', onScrollEvent);
})
