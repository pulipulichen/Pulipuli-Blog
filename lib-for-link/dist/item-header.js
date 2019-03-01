/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js":
/*!*********************************************************************************!*\
  !*** ./lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// jQuery OwlCarousel Modified For Blogger By themexpose

// http://www.owlgraphic.com/owlcarousel/
// http://ar-themes.blogspot.com/
// Copyright (c) 2013 Bartosz Wojciechowski
// Licensed under MIT

"function" !== typeof Object.create && (Object.create = function(f) {
    function g() {}
    g.prototype = f;
    return new g
});
(function(f, g, k) {
    var l = {
        init: function(a, b) {
            this.$elem = f(b);
            this.options = f.extend({}, f.fn.owlCarousel.options, this.$elem.data(), a);
            this.userOptions = a;
            this.loadContent()
        },
        loadContent: function() {
            function a(a) {
                var d, e = "";
                if ("function" === typeof b.options.jsonSuccess) b.options.jsonSuccess.apply(this, [a]);
                else {
                    for (d in a.owl) a.owl.hasOwnProperty(d) && (e += a.owl[d].item);
                    b.$elem.html(e)
                }
                b.logIn()
            }
            var b = this,
                e;
            "function" === typeof b.options.beforeInit && b.options.beforeInit.apply(this, [b.$elem]);
            "string" === typeof b.options.jsonPath ?
                (e = b.options.jsonPath, f.getJSON(e, a)) : b.logIn()
        },
        logIn: function() {
            this.$elem.data("owl-originalStyles", this.$elem.attr("style"));
            this.$elem.data("owl-originalClasses", this.$elem.attr("class"));
            this.$elem.css({
                opacity: 0
            });
            this.orignalItems = this.options.items;
            this.checkBrowser();
            this.wrapperWidth = 0;
            this.checkVisible = null;
            this.setVars()
        },
        setVars: function() {
            if (0 === this.$elem.children().length) return !1;
            this.baseClass();
            this.eventTypes();
            this.$userItems = this.$elem.children();
            this.itemsAmount = this.$userItems.length;
            this.wrapItems();
            this.$owlItems = this.$elem.find(".owl-item");
            this.$owlWrapper = this.$elem.find(".owl-wrapper");
            this.playDirection = "next";
            this.prevItem = 0;
            this.prevArr = [0];
            this.currentItem = 0;
            this.customEvents();
            this.onStartup()
        },
        onStartup: function() {
            this.updateItems();
            this.calculateAll();
            this.buildControls();
            this.updateControls();
            this.response();
            this.moveEvents();
            this.stopOnHover();
            this.owlStatus();
            !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
            !0 === this.options.autoPlay &&
                (this.options.autoPlay = 5E3);
            this.play();
            this.$elem.find(".owl-wrapper").css("display", "block");
            this.$elem.is(":visible") ? this.$elem.css("opacity", 1) : this.watchVisibility();
            this.onstartup = !1;
            this.eachMoveUpdate();
            "function" === typeof this.options.afterInit && this.options.afterInit.apply(this, [this.$elem]);
        },
        eachMoveUpdate: function() {
            !0 === this.options.lazyLoad && this.lazyLoad();
            !0 === this.options.autoHeight && this.autoHeight();
            this.onVisibleItems();
            "function" === typeof this.options.afterAction && this.options.afterAction.apply(this,
                [this.$elem])
        },
        updateVars: function() {
            "function" === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [this.$elem]);
            this.watchVisibility();
            this.updateItems();
            this.calculateAll();
            this.updatePosition();
            this.updateControls();
            this.eachMoveUpdate();
            "function" === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [this.$elem])
        },
        reload: function() {
            var a = this;
            g.setTimeout(function() {
                a.updateVars()
            }, 0)
        },
        watchVisibility: function() {
            var a = this;
            if (!1 === a.$elem.is(":visible")) a.$elem.css({
                    opacity: 0
                }),
                g.clearInterval(a.autoPlayInterval), g.clearInterval(a.checkVisible);
            else return !1;
            a.checkVisible = g.setInterval(function() {
                a.$elem.is(":visible") && (a.reload(), a.$elem.animate({
                    opacity: 1
                }, 200), g.clearInterval(a.checkVisible))
            }, 500)
        },
        wrapItems: function() {
            this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
            _puli_related_post_render(this.$userItems);
            this.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">');
            this.wrapperOuter = this.$elem.find(".owl-wrapper-outer");
            this.$elem.css("display", "block")
        },
        baseClass: function() {
            var a = this.$elem.hasClass(this.options.baseClass),
                b = this.$elem.hasClass(this.options.theme);
            a || this.$elem.addClass(this.options.baseClass);
            b || this.$elem.addClass(this.options.theme)
        },
        updateItems: function() {
            var a, b;
            if (!1 === this.options.responsive) return !1;
            if (!0 === this.options.singleItem) return this.options.items = this.orignalItems = 1, this.options.itemsCustom = !1, this.options.itemsDesktop = !1, this.options.itemsDesktopSmall = !1, this.options.itemsTablet = !1, this.options.itemsTabletSmall = !1, this.options.itemsMobile = !1;
            a = f(this.options.responsiveBaseWidth).width();
            a > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
            if (!1 !== this.options.itemsCustom)
                for (this.options.itemsCustom.sort(function(a, b) {
                        return a[0] - b[0]
                    }), b = 0; b < this.options.itemsCustom.length; b += 1) this.options.itemsCustom[b][0] <= a && (this.options.items = this.options.itemsCustom[b][1]);
            else a <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
                a <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]), a <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]), a <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]), a <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1]);
            this.options.items > this.itemsAmount &&
                !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
        },
        response: function() {
            var a = this,
                b, e;
            if (!0 !== a.options.responsive) return !1;
            e = f(g).width();
            a.resizer = function() {
                f(g).width() !== e && (!1 !== a.options.autoPlay && g.clearInterval(a.autoPlayInterval), g.clearTimeout(b), b = g.setTimeout(function() {
                    e = f(g).width();
                    a.updateVars()
                }, a.options.responsiveRefreshRate))
            };
            f(g).resize(a.resizer)
        },
        updatePosition: function() {
            this.jumpTo(this.currentItem);
            !1 !== this.options.autoPlay && this.checkAp()
        },
        appendItemsSizes: function() {
            var a =
                this,
                b = 0,
                e = a.itemsAmount - a.options.items;
            a.$owlItems.each(function(c) {
                var d = f(this);
                d.css({
                    width: a.itemWidth
                }).data("owl-item", Number(c));
                if (0 === c % a.options.items || c === e) c > e || (b += 1);
                d.data("owl-roundPages", b)
            })
        },
        appendWrapperSizes: function() {
            this.$owlWrapper.css({
                width: this.$owlItems.length * this.itemWidth * 2,
                left: 0
            });
            this.appendItemsSizes()
        },
        calculateAll: function() {
            this.calculateWidth();
            this.appendWrapperSizes();
            this.loops();
            this.max()
        },
        calculateWidth: function() {
            this.itemWidth = Math.round(this.$elem.width() /
                this.options.items)
        },
        max: function() {
            var a = -1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
            this.options.items > this.itemsAmount ? this.maximumPixels = a = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = a);
            return a
        },
        min: function() {
            return 0
        },
        loops: function() {
            var a = 0,
                b = 0,
                e, c;
            this.positionsInArray = [0];
            this.pagesInArray = [];
            for (e = 0; e < this.itemsAmount; e += 1) b += this.itemWidth, this.positionsInArray.push(-b), !0 === this.options.scrollPerPage && (c = f(this.$owlItems[e]),
                c = c.data("owl-roundPages"), c !== a && (this.pagesInArray[a] = this.positionsInArray[e], a = c))
        },
        buildControls: function() {
            if (!0 === this.options.navigation || !0 === this.options.pagination) this.owlControls = f('<div class="owl-controls"/>').toggleClass("clickable", !this.browser.isTouch).appendTo(this.$elem);
            !0 === this.options.pagination && this.buildPagination();
            !0 === this.options.navigation && this.buildButtons()
        },
        buildButtons: function() {
            var a = this,
                b = f('<div class="owl-buttons"/>');
            a.owlControls.append(b);
            a.buttonPrev =
                f("<div/>", {
                    "class": "owl-prev",
                    html: a.options.navigationText[0] || ""
                });
            a.buttonNext = f("<div/>", {
                "class": "owl-next",
                html: a.options.navigationText[1] || ""
            });
            b.append(a.buttonPrev).append(a.buttonNext);
            b.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(a) {
                a.preventDefault()
            });
            b.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(b) {
                b.preventDefault();
                f(this).hasClass("owl-next") ? a.next() : a.prev()
            })
        },
        buildPagination: function() {
            var a = this;
            a.paginationWrapper =
                f('<div class="owl-pagination"/>');
            a.owlControls.append(a.paginationWrapper);
            a.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(b) {
                b.preventDefault();
                Number(f(this).data("owl-page")) !== a.currentItem && a.goTo(Number(f(this).data("owl-page")), !0)
            })
        },
        updatePagination: function() {
            var a, b, e, c, d, g;
            if (!1 === this.options.pagination) return !1;
            this.paginationWrapper.html("");
            a = 0;
            b = this.itemsAmount - this.itemsAmount % this.options.items;
            for (c = 0; c < this.itemsAmount; c += 1) 0 === c % this.options.items &&
                (a += 1, b === c && (e = this.itemsAmount - this.options.items), d = f("<div/>", {
                    "class": "owl-page"
                }), g = f("<span></span>", {
                    text: !0 === this.options.paginationNumbers ? a : "",
                    "class": !0 === this.options.paginationNumbers ? "owl-numbers" : ""
                }), d.append(g), d.data("owl-page", b === c ? e : c), d.data("owl-roundPages", a), this.paginationWrapper.append(d));
            this.checkPagination()
        },
        checkPagination: function() {
            var a = this;
            if (!1 === a.options.pagination) return !1;
            a.paginationWrapper.find(".owl-page").each(function() {
                f(this).data("owl-roundPages") ===
                    f(a.$owlItems[a.currentItem]).data("owl-roundPages") && (a.paginationWrapper.find(".owl-page").removeClass("active"), f(this).addClass("active"))
            })
        },
        checkNavigation: function() {
            if (!1 === this.options.navigation) return !1;
            !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.addClass("disabled")) : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass("disabled"), this.buttonNext.removeClass("disabled")) : this.currentItem ===
                this.maximumItem ? (this.buttonPrev.removeClass("disabled"), this.buttonNext.addClass("disabled")) : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass("disabled"), this.buttonNext.removeClass("disabled")))
        },
        updateControls: function() {
            this.updatePagination();
            this.checkNavigation();
            this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide() : this.owlControls.show())
        },
        destroyControls: function() {
            this.owlControls && this.owlControls.remove()
        },
        next: function(a) {
            if ($(".owl-wrapper-outer").hasClass("stop-play")) {
                return;
            };
            if (this.isTransition) return !1;
            this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
            if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 2 : 0))
                if (!0 === this.options.rewindNav) this.currentItem = 0, a = "rewind";
                else return this.currentItem = this.maximumItem, !1;
            this.goTo(this.currentItem, a)
        },
        prev: function(a) {
            if (this.isTransition) return !1;
            this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ?
                this.options.items : 1);
            if (0 > this.currentItem)
                if (!0 === this.options.rewindNav) this.currentItem = this.maximumItem, a = "rewind";
                else return this.currentItem = 0, !1;
            this.goTo(this.currentItem, a)
        },
        goTo: function(a, b, e) {
            var c = this;
            if (c.isTransition) return !1;
            "function" === typeof c.options.beforeMove && c.options.beforeMove.apply(this, [c.$elem]);
            a >= c.maximumItem ? a = c.maximumItem : 0 >= a && (a = 0);
            c.currentItem = c.owl.currentItem = a;
            if (!1 !== c.options.transitionStyle && "drag" !== e && 1 === c.options.items && !0 === c.browser.support3d) return c.swapSpeed(0),
                !0 === c.browser.support3d ? c.transition3d(c.positionsInArray[a]) : c.css2slide(c.positionsInArray[a], 1), c.afterGo(), c.singleItemTransition(), !1;
            a = c.positionsInArray[a];
            !0 === c.browser.support3d ? (c.isCss3Finish = !1, !0 === b ? (c.swapSpeed("paginationSpeed"), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.paginationSpeed)) : "rewind" === b ? (c.swapSpeed(c.options.rewindSpeed), g.setTimeout(function() {
                c.isCss3Finish = !0
            }, c.options.rewindSpeed)) : (c.swapSpeed("slideSpeed"), g.setTimeout(function() {
                    c.isCss3Finish = !0
                },
                c.options.slideSpeed)), c.transition3d(a)) : !0 === b ? c.css2slide(a, c.options.paginationSpeed) : "rewind" === b ? c.css2slide(a, c.options.rewindSpeed) : c.css2slide(a, c.options.slideSpeed);
            c.afterGo()
        },
        jumpTo: function(a) {
            "function" === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [this.$elem]);
            a >= this.maximumItem || -1 === a ? a = this.maximumItem : 0 >= a && (a = 0);
            this.swapSpeed(0);
            !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[a]) : this.css2slide(this.positionsInArray[a], 1);
            this.currentItem =
                this.owl.currentItem = a;
            this.afterGo()
        },
        afterGo: function() {
            this.prevArr.push(this.currentItem);
            this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
            this.prevArr.shift(0);
            this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
            "function" === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [this.$elem])
        },
        stop: function() {
            this.apStatus = "stop";
            g.clearInterval(this.autoPlayInterval)
        },
        checkAp: function() {
            "stop" !== this.apStatus && this.play()
        },
        play: function() {
            var a = this;
            a.apStatus = "play";
            if (!1 === a.options.autoPlay) return !1;
            g.clearInterval(a.autoPlayInterval);
            a.autoPlayInterval = g.setInterval(function() {
                a.next(!0)
            }, a.options.autoPlay)
        },
        swapSpeed: function(a) {
            "slideSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed)) : "paginationSpeed" === a ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed)) : "string" !== typeof a && this.$owlWrapper.css(this.addCssSpeed(a))
        },
        addCssSpeed: function(a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        },
        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                transition: ""
            }
        },
        doTranslate: function(a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" +
                    a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        },
        transition3d: function(a) {
            this.$owlWrapper.css(this.doTranslate(a))
        },
        css2move: function(a) {
            this.$owlWrapper.css({
                left: a
            })
        },
        css2slide: function(a, b) {
            var e = this;
            e.isCssFinish = !1;
            e.$owlWrapper.stop(!0, !0).animate({
                left: a
            }, {
                duration: b || e.options.slideSpeed,
                complete: function() {
                    e.isCssFinish = !0
                }
            })
        },
        checkBrowser: function() {
            var a = k.createElement("div");
            a.style.cssText = "  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)";
            a = a.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
            this.browser = {
                support3d: null !== a && 1 === a.length,
                isTouch: "ontouchstart" in g || g.navigator.msMaxTouchPoints
            }
        },
        moveEvents: function() {
            if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) this.gestures(), this.disabledEvents()
        },
        eventTypes: function() {
            var a = ["s", "e", "x"];
            this.ev_types = {};
            !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] :
                !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? a = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (a = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]);
            this.ev_types.start = a[0];
            this.ev_types.move = a[1];
            this.ev_types.end = a[2]
        },
        disabledEvents: function() {
            this.$elem.on("dragstart.owl", function(a) {
                a.preventDefault()
            });
            this.$elem.on("mousedown.disableTextSelect", function(a) {
                return f(a.target).is("input, textarea, select, option")
            })
        },
        gestures: function() {
            function a(a) {
                if (void 0 !== a.touches) return {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                };
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX) return {
                        x: a.pageX,
                        y: a.pageY
                    };
                    if (void 0 === a.pageX) return {
                        x: a.clientX,
                        y: a.clientY
                    }
                }
            }

            function b(a) {
                "on" === a ? (f(k).on(d.ev_types.move, e), f(k).on(d.ev_types.end, c)) : "off" === a && (f(k).off(d.ev_types.move), f(k).off(d.ev_types.end))
            }

            function e(b) {
                b = b.originalEvent || b || g.event;
                d.newPosX = a(b).x - h.offsetX;
                d.newPosY = a(b).y - h.offsetY;
                d.newRelativeX = d.newPosX - h.relativePos;
                "function" === typeof d.options.startDragging && !0 !== h.dragging && 0 !== d.newRelativeX && (h.dragging = !0, d.options.startDragging.apply(d, [d.$elem]));
                (8 < d.newRelativeX || -8 > d.newRelativeX) && !0 === d.browser.isTouch && (void 0 !== b.preventDefault ? b.preventDefault() : b.returnValue = !1, h.sliding = !0);
                (10 < d.newPosY || -10 > d.newPosY) && !1 === h.sliding && f(k).off("touchmove.owl");
                d.newPosX = Math.max(Math.min(d.newPosX, d.newRelativeX / 5), d.maximumPixels + d.newRelativeX / 5);
                !0 === d.browser.support3d ? d.transition3d(d.newPosX) : d.css2move(d.newPosX)
            }

            function c(a) {
                a = a.originalEvent || a || g.event;
                var c;
                a.target = a.target || a.srcElement;
                h.dragging = !1;
                !0 !== d.browser.isTouch && d.$owlWrapper.removeClass("grabbing");
                d.dragDirection = 0 > d.newRelativeX ? d.owl.dragDirection = "left" : d.owl.dragDirection = "right";
                0 !== d.newRelativeX && (c = d.getNewPosition(), d.goTo(c, !1, "drag"), h.targetElement === a.target && !0 !== d.browser.isTouch && (f(a.target).on("click.disable", function(a) {
                        a.stopImmediatePropagation();
                        a.stopPropagation();
                        a.preventDefault();
                        f(a.target).off("click.disable")
                    }),
                    a = f._data(a.target, "events").click, c = a.pop(), a.splice(0, 0, c)));
                b("off")
            }
            var d = this,
                h = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };
            d.isCssFinish = !0;
            d.$elem.on(d.ev_types.start, ".owl-wrapper", function(c) {
                c = c.originalEvent || c || g.event;
                var e;
                if (3 === c.which) return !1;
                if (!(d.itemsAmount <= d.options.items)) {
                    if (!1 === d.isCssFinish && !d.options.dragBeforeAnimFinish || !1 === d.isCss3Finish && !d.options.dragBeforeAnimFinish) return !1;
                    !1 !== d.options.autoPlay && g.clearInterval(d.autoPlayInterval);
                    !0 === d.browser.isTouch || d.$owlWrapper.hasClass("grabbing") || d.$owlWrapper.addClass("grabbing");
                    d.newPosX = 0;
                    d.newRelativeX = 0;
                    f(this).css(d.removeTransition());
                    e = f(this).position();
                    h.relativePos = e.left;
                    h.offsetX = a(c).x - e.left;
                    h.offsetY = a(c).y - e.top;
                    b("on");
                    h.sliding = !1;
                    h.targetElement = c.target || c.srcElement
                }
            })
        },
        getNewPosition: function() {
            var a = this.closestItem();
            a > this.maximumItem ? a = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem =
                a = 0);
            return a
        },
        closestItem: function() {
            var a = this,
                b = !0 === a.options.scrollPerPage ? a.pagesInArray : a.positionsInArray,
                e = a.newPosX,
                c = null;
            f.each(b, function(d, g) {
                e - a.itemWidth / 20 > b[d + 1] && e - a.itemWidth / 20 < g && "left" === a.moveDirection() ? (c = g, a.currentItem = !0 === a.options.scrollPerPage ? f.inArray(c, a.positionsInArray) : d) : e + a.itemWidth / 20 < g && e + a.itemWidth / 20 > (b[d + 1] || b[d] - a.itemWidth) && "right" === a.moveDirection() && (!0 === a.options.scrollPerPage ? (c = b[d + 1] || b[b.length - 1], a.currentItem = f.inArray(c, a.positionsInArray)) :
                    (c = b[d + 1], a.currentItem = d + 1))
            });
            return a.currentItem
        },
        moveDirection: function() {
            var a;
            0 > this.newRelativeX ? (a = "right", this.playDirection = "next") : (a = "left", this.playDirection = "prev");
            return a
        },
        customEvents: function() {
            var a = this;
            a.$elem.on("owl.next", function() {
                a.next()
            });
            a.$elem.on("owl.prev", function() {
                a.prev()
            });
            a.$elem.on("owl.play", function(b, e) {
                a.options.autoPlay = e;
                a.play();
                a.hoverStatus = "play"
            });
            a.$elem.on("owl.stop", function() {
                a.stop();
                a.hoverStatus = "stop"
            });
            a.$elem.on("owl.goTo", function(b, e) {
                a.goTo(e)
            });
            a.$elem.on("owl.jumpTo", function(b, e) {
                a.jumpTo(e)
            })
        },
        stopOnHover: function() {
            var a = this;
            !0 === a.options.stopOnHover && !0 !== a.browser.isTouch && !1 !== a.options.autoPlay && (a.$elem.on("mouseover", function() {
                a.stop()
            }), a.$elem.on("mouseout", function() {
                "stop" !== a.hoverStatus && a.play()
            }))
        },
        lazyLoad: function() {
            var a, b, e, c, d;
            if (!1 === this.options.lazyLoad) return !1;
            for (a = 0; a < this.itemsAmount; a += 1) b = f(this.$owlItems[a]), "loaded" !== b.data("owl-loaded") && (e = b.data("owl-item"), c = b.find(".lazyOwl"), "string" !== typeof c.data("src") ?
                b.data("owl-loaded", "loaded") : (void 0 === b.data("owl-loaded") && (c.hide(), b.addClass("loading").data("owl-loaded", "checked")), (d = !0 === this.options.lazyFollow ? e >= this.currentItem : !0) && e < this.currentItem + this.options.items && c.length && this.lazyPreload(b, c)))
        },
        lazyPreload: function(a, b) {
            function e() {
                a.data("owl-loaded", "loaded").removeClass("loading");
                b.removeAttr("data-src");
                "fade" === d.options.lazyEffect ? b.fadeIn(400) : b.show();
                "function" === typeof d.options.afterLazyLoad && d.options.afterLazyLoad.apply(this,
                    [d.$elem])
            }

            function c() {
                f += 1;
                d.completeImg(b.get(0)) || !0 === k ? e() : 100 >= f ? g.setTimeout(c, 100) : e()
            }
            var d = this,
                f = 0,
                k;
            "DIV" === b.prop("tagName") ? (b.css("background-image", "url(" + b.data("src") + ")"), k = !0) : b[0].src = b.data("src");
            c()
        },
        autoHeight: function() {
            function a() {
                var a = f(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", a + "px");
                e.wrapperOuter.hasClass("autoHeight") || g.setTimeout(function() {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function b() {
                d += 1;
                e.completeImg(c.get(0)) ? a() : 100 >= d ? g.setTimeout(b,
                    100) : e.wrapperOuter.css("height", "")
            }
            var e = this,
                c = f(e.$owlItems[e.currentItem]).find("img"),
                d;
            void 0 !== c.get(0) ? (d = 0, b()) : a()
        },
        completeImg: function(a) {
            return !a.complete || "undefined" !== typeof a.naturalWidth && 0 === a.naturalWidth ? !1 : !0
        },
        onVisibleItems: function() {
            var a;
            !0 === this.options.addClassActive && this.$owlItems.removeClass("active");
            this.visibleItems = [];
            for (a = this.currentItem; a < this.currentItem + this.options.items; a += 1) this.visibleItems.push(a), !0 === this.options.addClassActive && f(this.$owlItems[a]).addClass("active");
            this.owl.visibleItems = this.visibleItems
        },
        transitionTypes: function(a) {
            this.outClass = "owl-" + a + "-out";
            this.inClass = "owl-" + a + "-in"
        },
        singleItemTransition: function() {
            var a = this,
                b = a.outClass,
                e = a.inClass,
                c = a.$owlItems.eq(a.currentItem),
                d = a.$owlItems.eq(a.prevItem),
                f = Math.abs(a.positionsInArray[a.currentItem]) + a.positionsInArray[a.prevItem],
                g = Math.abs(a.positionsInArray[a.currentItem]) + a.itemWidth / 2;
            a.isTransition = !0;
            a.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": g + "px",
                "-moz-perspective-origin": g +
                    "px",
                "perspective-origin": g + "px"
            });
            d.css({
                position: "relative",
                left: f + "px"
            }).addClass(b).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endPrev = !0;
                d.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(d, b)
            });
            c.addClass(e).on("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend", function() {
                a.endCurrent = !0;
                c.off("webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend");
                a.clearTransStyle(c, e)
            })
        },
        clearTransStyle: function(a,
            b) {
            a.css({
                position: "",
                left: ""
            }).removeClass(b);
            this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass("owl-origin"), this.isTransition = this.endCurrent = this.endPrev = !1)
        },
        owlStatus: function() {
            this.owl = {
                userOptions: this.userOptions,
                baseElement: this.$elem,
                userItems: this.$userItems,
                owlItems: this.$owlItems,
                currentItem: this.currentItem,
                prevItem: this.prevItem,
                visibleItems: this.visibleItems,
                isTouch: this.browser.isTouch,
                browser: this.browser,
                dragDirection: this.dragDirection
            }
        },
        clearEvents: function() {
            this.$elem.off(".owl owl mousedown.disableTextSelect");
            f(k).off(".owl owl");
            f(g).off("resize", this.resizer)
        },
        unWrap: function() {
            0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
            this.clearEvents();
            this.$elem.attr("style", this.$elem.data("owl-originalStyles") || "").attr("class", this.$elem.data("owl-originalClasses"))
        },
        destroy: function() {
            this.stop();
            g.clearInterval(this.checkVisible);
            this.unWrap();
            this.$elem.removeData()
        },
        reinit: function(a) {
            a = f.extend({}, this.userOptions,
                a);
            this.unWrap();
            this.init(a, this.$elem)
        },
        addItem: function(a, b) {
            var e;
            if (!a) return !1;
            if (0 === this.$elem.children().length) return this.$elem.append(a), this.setVars(), !1;
            this.unWrap();
            e = void 0 === b || -1 === b ? -1 : b;
            e >= this.$userItems.length || -1 === e ? this.$userItems.eq(-1).after(a) : this.$userItems.eq(e).before(a);
            this.setVars()
        },
        removeItem: function(a) {
            if (0 === this.$elem.children().length) return !1;
            a = void 0 === a || -1 === a ? -1 : a;
            this.unWrap();
            this.$userItems.eq(a).remove();
            this.setVars()
        }
    };
    f.fn.owlCarousel = function(a) {
        return this.each(function() {
            if (!0 ===
                f(this).data("owl-init")) return !1;
            f(this).data("owl-init", !0);
            var b = Object.create(l);
            b.init(a, this);
            f.data(this, "owlCarousel", b)
        })
    };
    f.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1E3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: g,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
})(jQuery, window, document);

// 後來用printRelatedLabels_thumbs取代，不使用這個
//var _0x13d6=["\x6C\x20\x31\x30\x28\x65\x29\x7B\x6B\x28\x34\x20\x74\x3D\x30\x3B\x74\x3C\x65\x2E\x41\x2E\x4D\x2E\x32\x3B\x74\x2B\x2B\x29\x7B\x34\x20\x6E\x3D\x65\x2E\x41\x2E\x4D\x5B\x74\x5D\x3B\x33\x5B\x39\x5D\x3D\x6E\x2E\x70\x2E\x24\x74\x3B\x5A\x7B\x38\x5B\x39\x5D\x3D\x6E\x2E\x59\x24\x58\x2E\x54\x7D\x31\x31\x28\x72\x29\x7B\x73\x3D\x6E\x2E\x31\x6D\x2E\x24\x74\x3B\x61\x3D\x73\x2E\x78\x28\x22\x3C\x79\x22\x29\x3B\x62\x3D\x73\x2E\x78\x28\x27\x49\x3D\x22\x27\x2C\x61\x29\x3B\x63\x3D\x73\x2E\x78\x28\x27\x22\x27\x2C\x62\x2B\x35\x29\x3B\x64\x3D\x73\x2E\x31\x75\x28\x62\x2B\x35\x2C\x63\x2D\x62\x2D\x35\x29\x3B\x36\x28\x61\x21\x3D\x2D\x31\x26\x26\x62\x21\x3D\x2D\x31\x26\x26\x63\x21\x3D\x2D\x31\x26\x26\x64\x21\x3D\x22\x22\x29\x7B\x38\x5B\x39\x5D\x3D\x64\x7D\x6D\x7B\x36\x28\x45\x20\x42\x21\x3D\x3D\x22\x4B\x22\x29\x38\x5B\x39\x5D\x3D\x42\x3B\x6D\x20\x38\x5B\x39\x5D\x3D\x22\x22\x7D\x7D\x36\x28\x33\x5B\x39\x5D\x2E\x32\x3E\x43\x29\x33\x5B\x39\x5D\x3D\x33\x5B\x39\x5D\x2E\x31\x76\x28\x30\x2C\x43\x29\x2B\x22\x2E\x2E\x2E\x22\x3B\x6B\x28\x34\x20\x69\x3D\x30\x3B\x69\x3C\x6E\x2E\x76\x2E\x32\x3B\x69\x2B\x2B\x29\x7B\x36\x28\x6E\x2E\x76\x5B\x69\x5D\x2E\x31\x74\x3D\x3D\x22\x31\x73\x22\x29\x7B\x37\x5B\x39\x5D\x3D\x6E\x2E\x76\x5B\x69\x5D\x2E\x6F\x3B\x39\x2B\x2B\x7D\x7D\x7D\x7D\x6C\x20\x31\x34\x28\x29\x7B\x34\x20\x65\x3D\x77\x20\x75\x28\x30\x29\x3B\x34\x20\x74\x3D\x77\x20\x75\x28\x30\x29\x3B\x34\x20\x6E\x3D\x77\x20\x75\x28\x30\x29\x3B\x6B\x28\x34\x20\x72\x3D\x30\x3B\x72\x3C\x37\x2E\x32\x3B\x72\x2B\x2B\x29\x7B\x36\x28\x21\x4E\x28\x65\x2C\x37\x5B\x72\x5D\x29\x29\x7B\x65\x2E\x32\x2B\x3D\x31\x3B\x65\x5B\x65\x2E\x32\x2D\x31\x5D\x3D\x37\x5B\x72\x5D\x3B\x74\x2E\x32\x2B\x3D\x31\x3B\x6E\x2E\x32\x2B\x3D\x31\x3B\x74\x5B\x74\x2E\x32\x2D\x31\x5D\x3D\x33\x5B\x72\x5D\x3B\x6E\x5B\x6E\x2E\x32\x2D\x31\x5D\x3D\x38\x5B\x72\x5D\x7D\x7D\x33\x3D\x74\x3B\x37\x3D\x65\x3B\x38\x3D\x6E\x7D\x6C\x20\x4E\x28\x65\x2C\x74\x29\x7B\x6B\x28\x34\x20\x6E\x3D\x30\x3B\x6E\x3C\x65\x2E\x32\x3B\x6E\x2B\x2B\x29\x36\x28\x65\x5B\x6E\x5D\x3D\x3D\x74\x29\x4F\x20\x55\x3B\x4F\x20\x31\x64\x7D\x6C\x20\x53\x28\x65\x29\x7B\x34\x20\x74\x3B\x36\x28\x45\x20\x51\x21\x3D\x3D\x22\x4B\x22\x29\x74\x3D\x51\x3B\x6D\x20\x74\x3D\x22\x22\x3B\x6B\x28\x34\x20\x6E\x3D\x30\x3B\x6E\x3C\x37\x2E\x32\x3B\x6E\x2B\x2B\x29\x7B\x36\x28\x37\x5B\x6E\x5D\x3D\x3D\x65\x7C\x7C\x21\x33\x5B\x6E\x5D\x29\x7B\x37\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x33\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x38\x2E\x68\x28\x6E\x2C\x31\x29\x3B\x6E\x2D\x2D\x7D\x7D\x34\x20\x72\x3D\x50\x2E\x56\x28\x28\x33\x2E\x32\x2D\x31\x29\x2A\x50\x2E\x57\x28\x29\x29\x3B\x34\x20\x6E\x3D\x30\x3B\x36\x28\x33\x2E\x32\x3E\x30\x29\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x70\x22\x3E\x3C\x4C\x3E\x27\x2B\x31\x32\x2B\x22\x3C\x2F\x4C\x3E\x3C\x2F\x6A\x3E\x22\x29\x3B\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x31\x33\x20\x7A\x2D\x31\x35\x20\x7A\x2D\x31\x36\x22\x20\x31\x37\x3D\x22\x7A\x2D\x31\x38\x22\x2F\x3E\x27\x29\x3B\x31\x39\x28\x6E\x3C\x33\x2E\x32\x26\x26\x6E\x3C\x31\x61\x26\x26\x6E\x3C\x31\x62\x29\x7B\x66\x2E\x67\x28\x27\x3C\x6A\x20\x71\x3D\x22\x31\x63\x2D\x79\x22\x3E\x3C\x61\x20\x27\x29\x3B\x36\x28\x6E\x21\x3D\x30\x29\x66\x2E\x67\x28\x22\x22\x29\x3B\x6D\x20\x66\x2E\x67\x28\x27\x22\x27\x29\x3B\x66\x2E\x67\x28\x27\x20\x6F\x3D\x22\x27\x2B\x37\x5B\x72\x5D\x2B\x27\x22\x20\x70\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x3E\x3C\x79\x20\x52\x3D\x22\x31\x65\x3A\x31\x66\x3B\x31\x67\x3A\x31\x68\x3B\x22\x20\x31\x69\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x20\x70\x3D\x22\x27\x2B\x33\x5B\x72\x5D\x2B\x27\x22\x20\x49\x3D\x22\x27\x2B\x38\x5B\x72\x5D\x2E\x31\x6A\x28\x22\x2F\x31\x6B\x2D\x63\x2F\x22\x2C\x22\x2F\x31\x6C\x2D\x63\x2F\x22\x29\x2B\x27\x22\x2F\x3E\x3C\x2F\x61\x3E\x3C\x2F\x6A\x3E\x27\x29\x3B\x6E\x2B\x2B\x3B\x36\x28\x72\x3C\x33\x2E\x32\x2D\x31\x29\x7B\x72\x2B\x2B\x7D\x6D\x7B\x72\x3D\x30\x7D\x7D\x66\x2E\x67\x28\x22\x3C\x2F\x6A\x3E\x22\x29\x3B\x37\x2E\x68\x28\x30\x2C\x37\x2E\x32\x29\x3B\x38\x2E\x68\x28\x30\x2C\x38\x2E\x32\x29\x3B\x33\x2E\x68\x28\x30\x2C\x33\x2E\x32\x29\x7D\x4A\x2E\x31\x6E\x3D\x6C\x28\x29\x7B\x34\x20\x65\x3D\x66\x2E\x31\x6F\x28\x22\x31\x70\x22\x29\x3B\x36\x28\x65\x3D\x3D\x31\x71\x29\x7B\x4A\x2E\x31\x72\x2E\x6F\x3D\x22\x48\x3A\x2F\x2F\x47\x2E\x46\x2E\x44\x2F\x22\x7D\x65\x2E\x31\x77\x28\x22\x6F\x22\x2C\x22\x48\x3A\x2F\x2F\x47\x2E\x46\x2E\x44\x2F\x22\x29\x3B\x65\x2E\x31\x78\x3D\x22\x31\x79\x22\x7D","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x72\x65\x6C\x61\x74\x65\x64\x54\x69\x74\x6C\x65\x73\x7C\x76\x61\x72\x7C\x7C\x69\x66\x7C\x72\x65\x6C\x61\x74\x65\x64\x55\x72\x6C\x73\x7C\x74\x68\x75\x6D\x62\x75\x72\x6C\x7C\x72\x65\x6C\x61\x74\x65\x64\x54\x69\x74\x6C\x65\x73\x4E\x75\x6D\x7C\x7C\x7C\x7C\x7C\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x77\x72\x69\x74\x65\x7C\x73\x70\x6C\x69\x63\x65\x7C\x7C\x64\x69\x76\x7C\x66\x6F\x72\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x65\x6C\x73\x65\x7C\x7C\x68\x72\x65\x66\x7C\x74\x69\x74\x6C\x65\x7C\x63\x6C\x61\x73\x73\x7C\x7C\x7C\x7C\x41\x72\x72\x61\x79\x7C\x6C\x69\x6E\x6B\x7C\x6E\x65\x77\x7C\x69\x6E\x64\x65\x78\x4F\x66\x7C\x69\x6D\x67\x7C\x6F\x77\x6C\x7C\x66\x65\x65\x64\x7C\x64\x65\x66\x61\x75\x6C\x74\x6E\x6F\x69\x6D\x61\x67\x65\x7C\x36\x30\x7C\x63\x6F\x6D\x7C\x74\x79\x70\x65\x6F\x66\x7C\x74\x68\x65\x6D\x65\x78\x70\x6F\x73\x65\x7C\x77\x77\x77\x7C\x68\x74\x74\x70\x7C\x73\x72\x63\x7C\x77\x69\x6E\x64\x6F\x77\x7C\x75\x6E\x64\x65\x66\x69\x6E\x65\x64\x7C\x68\x34\x7C\x65\x6E\x74\x72\x79\x7C\x63\x6F\x6E\x74\x61\x69\x6E\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x72\x65\x74\x75\x72\x6E\x7C\x4D\x61\x74\x68\x7C\x73\x70\x6C\x69\x74\x74\x65\x72\x63\x6F\x6C\x6F\x72\x7C\x73\x74\x79\x6C\x65\x7C\x70\x72\x69\x6E\x74\x52\x65\x6C\x61\x74\x65\x64\x4C\x61\x62\x65\x6C\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x75\x72\x6C\x7C\x74\x72\x75\x65\x7C\x66\x6C\x6F\x6F\x72\x7C\x72\x61\x6E\x64\x6F\x6D\x7C\x74\x68\x75\x6D\x62\x6E\x61\x69\x6C\x7C\x6D\x65\x64\x69\x61\x7C\x74\x72\x79\x7C\x72\x65\x6C\x61\x74\x65\x64\x5F\x72\x65\x73\x75\x6C\x74\x73\x5F\x6C\x61\x62\x65\x6C\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x63\x61\x74\x63\x68\x7C\x72\x65\x6C\x61\x74\x65\x64\x70\x6F\x73\x74\x73\x74\x69\x74\x6C\x65\x7C\x63\x61\x72\x6F\x75\x73\x65\x6C\x5F\x72\x65\x6C\x61\x74\x65\x64\x7C\x72\x65\x6D\x6F\x76\x65\x52\x65\x6C\x61\x74\x65\x64\x44\x75\x70\x6C\x69\x63\x61\x74\x65\x73\x5F\x74\x68\x75\x6D\x62\x73\x7C\x63\x61\x72\x6F\x75\x73\x65\x6C\x7C\x74\x68\x65\x6D\x65\x7C\x69\x64\x7C\x64\x65\x6D\x6F\x7C\x77\x68\x69\x6C\x65\x7C\x32\x30\x7C\x6D\x61\x78\x72\x65\x73\x75\x6C\x74\x73\x7C\x69\x74\x65\x6D\x7C\x66\x61\x6C\x73\x65\x7C\x77\x69\x64\x74\x68\x7C\x32\x34\x30\x70\x78\x7C\x68\x65\x69\x67\x68\x74\x7C\x31\x36\x30\x70\x78\x7C\x61\x6C\x74\x7C\x72\x65\x70\x6C\x61\x63\x65\x7C\x73\x37\x32\x7C\x73\x32\x39\x30\x7C\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x6F\x6E\x6C\x6F\x61\x64\x7C\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64\x7C\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x7C\x6E\x75\x6C\x6C\x7C\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x7C\x61\x6C\x74\x65\x72\x6E\x61\x74\x65\x7C\x72\x65\x6C\x7C\x73\x75\x62\x73\x74\x72\x7C\x73\x75\x62\x73\x74\x72\x69\x6E\x67\x7C\x73\x65\x74\x41\x74\x74\x72\x69\x62\x75\x74\x65\x7C\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C\x7C\x54\x68\x65\x6D\x65\x58\x70\x6F\x73\x65","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function (_0x571ex1,_0x571ex2,_0x571ex3,_0x571ex4,_0x571ex5,_0x571ex6){_0x571ex5=function (_0x571ex3){return (_0x571ex3<_0x571ex2?_0x13d6[4]:_0x571ex5(parseInt(_0x571ex3/_0x571ex2)))+((_0x571ex3=_0x571ex3%_0x571ex2)>35?String[_0x13d6[5]](_0x571ex3+29):_0x571ex3.toString(36));} ;if(!_0x13d6[4][_0x13d6[6]](/^/,String)){while(_0x571ex3--){_0x571ex6[_0x571ex5(_0x571ex3)]=_0x571ex4[_0x571ex3]||_0x571ex5(_0x571ex3);} ;_0x571ex4=[function (_0x571ex5){return _0x571ex6[_0x571ex5];} ];_0x571ex5=function (){return _0x13d6[7];} ;_0x571ex3=1;} ;while(_0x571ex3--){if(_0x571ex4[_0x571ex3]){_0x571ex1=_0x571ex1[_0x13d6[6]]( new RegExp(_0x13d6[8]+_0x571ex5(_0x571ex3)+_0x13d6[8],_0x13d6[9]),_0x571ex4[_0x571ex3]);} ;} ;return _0x571ex1;} (_0x13d6[0],62,97,_0x13d6[3][_0x13d6[2]](_0x13d6[1]),0,{}));


/***/ }),

/***/ "./lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js":
/*!*****************************************************************************************!*\
  !*** ./lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

related_results_labels_thumbs = function (e) {
  for (var t = 0; t < e.feed.entry.length; t++) {
    var n = e.feed.entry[t];
    relatedTitles[relatedTitlesNum] = n.title.$t;
    try {
      thumburl[relatedTitlesNum] = n.media$thumbnail.url
    } catch (r) {
      s = n.content.$t;
      a = s.indexOf("<img");
      b = s.indexOf('src="', a);
      c = s.indexOf('"', b + 5);
      d = s.substr(b + 5, c - b - 5);
      if (a != -1 && b != -1 && c != -1 && d != "") {
        thumburl[relatedTitlesNum] = d
      } else {
        if (typeof defaultnoimage !== "undefined") {
          thumburl[relatedTitlesNum] = defaultnoimage;
        }
        else {
          thumburl[relatedTitlesNum] = ""
        }
      }
    }
    if (relatedTitles[relatedTitlesNum].length > 60) {
      relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
    }
    for (var i = 0; i < n.link.length; i++) {
      if (n.link[i].rel == "alternate") {
        relatedUrls[relatedTitlesNum] = n.link[i].href;
        relatedTitlesNum++
      }
    }
  }
}

removeRelatedDuplicates_thumbs = function () {
  var e = new Array(0);
  var t = new Array(0);
  var n = new Array(0);
  for (var r = 0; r < relatedUrls.length; r++) {
    if (!contains_thumbs(e, relatedUrls[r])) {
      e.length += 1;
      e[e.length - 1] = relatedUrls[r];
      t.length += 1;
      n.length += 1;
      t[t.length - 1] = relatedTitles[r];
      n[n.length - 1] = thumburl[r]
    }
  }
  relatedTitles = t;
  relatedUrls = e;
  thumburl = n
}

contains_thumbs = function (e, t) {
  for (var n = 0; n < e.length; n++) {
    if (e[n] == t) {
      return true;
    }
  }
  return false
}

printRelatedLabels_thumbs = function (e) {
  //console.log(e)

  var t;
  if (typeof splittercolor !== "undefined") {
    t = splittercolor;
  } else {
    t = "";
  }
  for (var n = 0; n < relatedUrls.length; n++) {
    if (relatedUrls[n] == e || !relatedTitles[n]) {
      relatedUrls.splice(n, 1);
      relatedTitles.splice(n, 1);
      thumburl.splice(n, 1);
      n--
    }
  }
  var r = Math.floor((relatedTitles.length - 1) * Math.random());
  var n = 0;
  var c = $('<div></div>').appendTo($('.related-posts:first'))
  if (relatedTitles.length > 0) {
    //document.write('<div class="title"><h4>' + relatedpoststitle + "</h4></div>");
    c.append($('<div class="title"><h4>' + relatedpoststitle + '</h4></div>'))
  }
  //document.write('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>');
  var owl = $('<div class="carousel_related owl-carousel owl-theme" id="owl-demo"/>').appendTo(c)

  while (n < relatedTitles.length && n < 20 && n < maxresults) {
    //document.write('<div class="item-img"><a ');
    var aTag = '<div class="item-img"><a '
    if (n != 0) {
      //document.write("");
    } else {
      //document.write('"');
      aTag += '"'
    }
    //document.write(' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img style="width:240px;height:160px;" alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>');
    aTag += ' href="' + relatedUrls[r] + '" title="' + relatedTitles[r] + '"><img style="width:240px;height:160px;" alt="' + relatedTitles[r] + '" title="' + relatedTitles[r] + '" src="' + thumburl[r].replace("/s72-c/", "/s290-c/") + '"/></a></div>'
    n++;
    if (r < relatedTitles.length - 1) {
      r++
    } else {
      r = 0
    }
    owl.append($(aTag))
  }
  //document.write("</div>");
  relatedUrls.splice(0, relatedUrls.length);
  thumburl.splice(0, thumburl.length);
  relatedTitles.splice(0, relatedTitles.length)
}

/*
 window.onload = function() {
 var e = document.getElementById("mycontent");
 if (e == null) {
 window.location.href = "http://www.themexpose.com/"
 }
 e.setAttribute("href", "http://www.themexpose.com/");
 e.innerHTML = "ThemeXpose"
 }
 */

/***/ }),

/***/ "./lib-for-link/src/item-header/modules/related-posts/related-posts.js":
/*!*****************************************************************************!*\
  !*** ./lib-for-link/src/item-header/modules/related-posts/related-posts.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

maxresults = 10
splittercolor = ''
relatedpoststitle = 'Related Posts'
      
pulipuli_related_results_labels_thumbs = function (e) {
    //console.log(e);
    if (typeof(e.feed.entry) === "undefined") {
        if ($(".related-posts").hasClass("has-item") === false) {
            $(".related-posts").hide();
        }
        return;
    }
    else {
        $(".related-posts").addClass("has-item");
        $(".related-posts").show();
    }

    for (var t = 0; t < e.feed.entry.length; t++) {
        var n = e.feed.entry[t];
        relatedTitles[relatedTitlesNum] = n.title.$t;
        try {
            thumburl[relatedTitlesNum] = n.media$thumbnail.url;
        } catch (r) {
            var s = n.content.$t;
            var a = s.indexOf("<img");
            var b = s.indexOf('src="', a);
            var c = s.indexOf('"', b + 5);
            var d = s.substr(b + 5, c - b - 5);
            if (a !== -1 && b !== -1 && c !== -1 && d !== "") {
                thumburl[relatedTitlesNum] = d;
            } else {
                if (typeof defaultnoimage !== "undefined")
                    thumburl[relatedTitlesNum] = defaultnoimage;
                else
                    thumburl[relatedTitlesNum] = "";
            }
        }
        //if (relatedTitles[relatedTitlesNum].length > 60) {
        //    relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 60) + "...";
        //}
        for (var i = 0; i < n.link.length; i++) {
            if (n.link[i].rel === "alternate") {
                relatedUrls[relatedTitlesNum] = n.link[i].href;
                relatedTitlesNum++;
            }
        }
    }
}

_puli_related_post_render = function (_owl_items) {
    //console.log($(_owl_items[0]).html());
    for (var _i = 0; _i < _owl_items.length; _i++) {
        var _item = $(_owl_items[_i]);
        var _a = _item.find("a:first");
        var _title = _a.attr("title");
        _a.prepend('<div class="related-post-title">' + _title + '</div>');
    }
    
    $(function () {
        var _stop_play = "stop-play";
        $(".owl-wrapper-outer").hover(function () {
            $(this).addClass(_stop_play);
        }, function () {
            $(this).removeClass(_stop_play);
        });
    });
};


// --------------------

relatedTitles = new Array;
relatedTitlesNum = 0;
relatedUrls = new Array;
thumburl = new Array;

$(function() {
  let postUrl = getBloggerVariable('data-post-url')
  if (typeof(postUrl) === 'undefined') {
    return
  }
  
  removeRelatedDuplicates_thumbs();
  printRelatedLabels_thumbs(postUrl);
  
  $("#owl-demo").owlCarousel({
    autoPlay: 5000,
    items : 3,
    itemsDesktop : [1200,3],
    itemsDesktopSmall : [980,2],
    itemsMobile : [480,1]
  })
});

// ----------------------------------------



/***/ }),

/***/ "./lib-for-link/src/item-header/script/script-item.js":
/*!************************************************************!*\
  !*** ./lib-for-link/src/item-header/script/script-item.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @author Pulipuli Chen 20190228
 * puli-utils-append 
 * 這個class name會被移除
 */

/**
 * Table of Content
 * for Pulipuli.blogspot.tw
 * 布丁式自動標題產生器
 * 
 * 如果要停止功能，請加入<span class="disable-post-catalog"></span>
 * @author Pulipuli Chen
 * @version 20130304
 */
PULI_UTILS.post.toc = function (cata_container, heading) {
    var i, top;

    //if (PULI_UTILS.is_blogger_fullpage() === false) {
    //	return;
    //}

    //PULI_UTILS.log('post.toc', '1');

    $(function () {	//頁面讀取完之後，再進行讀取

        if (typeof heading === "undefined") {
            heading = "h4";
        }

        //PULI_UTILS.log('post.toc', '2');

        if (typeof cata_container === "undefined") {

            //先檢查是否有取消目錄的功能
            if ($('div.entry-content .disable-post-catalog').length > 0) {
                return;
            }

            var firstHeading = $('div.entry-content:first > article > ' + heading + ':first');

            //PULI_UTILS.log('post.toc 2-1 firstHeading.length:', firstHeading.length );

            if (firstHeading.length === 0) {
                return;
            }

            //如果firstHeading之前有<font size="3"></font>，則移除之
            var font = firstHeading.prev().filter('font');
            if (font.length > 0) {
                font.remove();
            }

            //如果firstHeading之前有hr，則移除之
            var hr = firstHeading.prev().filter('hr');
            if (hr.length > 0) {
                hr.remove();
                /*console.log("有<hr />");*/
            }
            else {
                var div = firstHeading.prevAll("div:first");
                hr = div.children(':last').filter('hr');
                if (hr.length > 0) {
                    hr.remove();
                    /*console.log("有 div > hr");*/
                }
                else {
                    var p = firstHeading.prevAll("p:first");
                    //p.css("border", "1px solid red");
                    //console.log([p.length, p.html()]);
                    hr = p.children().filter('hr');
                    if (hr.length > 0) {
                        hr.remove();
                        /*console.log("有 p > hr");*/
                    }
                    else {
                        hr = p.prev().filter("hr");
                        if (hr.length > 0) {
                            hr.remove();
                        }
                        //console.log(["p裡面找不到", p.length, p.children().length, p.html() ]);
                    }
                    if ($.trim(p.html()) === "") {
                        p.remove();
                        //console.log('p 也移除囉');
                    }
                }
            }

            //var p = firstHeading.prevAll("p:first");
            //console.log(firstHeading.html());
            //console.log(p.children().length);
            //if (p.length > 0) {
            //	p.remove();
            //}

            cata_container = $('<span></span>')
                    .addClass("puli-utils-append")
                    .hide()
                    .insertBefore(firstHeading);
            cata_container.attr('id', 'postcata' + PULI_UTILS.create_page_id());
        }

        //get cataSlt ID
        var cata = jQuery(cata_container);
        var prefix = cata.attr("id");

        //取得divID所在的所有的heading
        var postBody = jQuery(cata_container).parents("article:first");
        //postBody.css("border", "1px solid red");

        if (postBody.find('.cate-title').length > 0) {
            return;
        }

        //PULI_UTILS.log('post.toc', '3');

        var headingAry = postBody.find("h4,h5");
        var headingTop = [];
        var topId = {};
        for (i = 0; i < headingAry.length; i++) {
            heading = headingAry.eq(i);
            top = heading.offset().top;
            topId[top] = heading;
            headingTop.push(top);
        }
        
        if (headingTop.length === 1) {
            hr = firstHeading.prevAll().filter('hr');
            if (hr.length === 0) {
                firstHeading.before("<hr />");
            }
            return;
        }

        //然後將headingTop排序
        headingTop.sort(function (a, b) {
            return a - b;
        });

        //重新輸入headingAry
        headingAry = [];
        for (i = 0; i < headingTop.length; i++) {
            top = headingTop[i];
            heading = topId[top];
            headingAry.push(heading);
        }

        //PULI_UTILS.log('post.toc', '4');

        //headingAry.css("border", "1px solid red");

        var cataTitleID = prefix + "cataTitle";
        var cataTitle = jQuery('<a class="puli-utils-append" name="' + cataTitleID + '" id="' + cataTitleID + '" />');

        var goCata = jQuery('<a class="puli-utils-append heading-button" href="#' + cataTitleID + '">'
        + '<i class="fa fa-chevron-circle-up" aria-hidden="true"></i>'
        + '</a>');

        var ulObj = jQuery("<ul></ul>")
                .addClass("puli-toc")
                .addClass("puli-utils-append")

        //在每個Heading後面加入錨點
        for (i = 0; i < headingAry.length; i++) {
            var hdObj = headingAry[i];

            var title = hdObj.text();
            var anchorID = prefix + "_anchor" + i;

            var anc = jQuery('<a class="heading-anchor puli-utils-append" id="' + anchorID + '" name="' + anchorID + '" />');
            hdObj.prepend(anc);

            hdObj.prepend(goCata.clone());

            var tagName = hdObj.prop('tagName');
            if (tagName === undefined) {
                tagName = hdObj.attr('tagName');
            }
            if (typeof (tagName) === "string") {
                tagName = tagName.toLowerCase();
            }

            var hd = jQuery("<li><a href='#" + anchorID + "'>" + title + "</a></li>");

            if (tagName === 'h4') {
                ulObj.append(hd);
            }
            else if (tagName === 'h5') {

                var lastHd = ulObj.children('li:last');

                if (lastHd.length === 0) {
                    lastHd = $('<li></li>').appendTo(ulObj);
                }

                var lastUl = lastHd.children("ul:last");

                if (lastUl.length === 0) {
                    lastUl = $('<ul></ul>').appendTo(lastHd);
                }
                lastUl.append(hd);
            }
            //ulObj.append(hd);
        }

        //PULI_UTILS.log('post.toc', '5');

        /**
         * 顯示目錄
         */
        //console.log(headingAry.length);
        if (headingAry.length > 1) {

            cata_container.append(cataTitle)
                    .append(ulObj)
                    .slideDown();

            cata_container.prepend('<hr class="puli-utils-append" />');
            cata_container.append('<hr class="puli-utils-append" />');
        }

    });	//$(function () {

    //PULI_UTILS.log('post.toc', '6');

};

$(function () {
    PULI_UTILS.post.toc();
});

// -----------------------------
// 20170309 我要發問
$(function () {
    var _setup_iframe_anchor = function () {
        var _len1 = $("#comment-holder iframe:last").length;
        var _len2 = $(".comment-form > iframe:last").length;
        if (_len1 === 0 && _len2 === 0) {
            //console.log("iframe not found");
            setTimeout(_setup_iframe_anchor, 1000);
        }
        else {
            var _iframe = $("#comment-holder iframe:last");
            if (_len1 === 0 && _len2 > 0) {
                _iframe = $(".comment-form > iframe:last");
            }
            //console.log([_len1, _len2]);
            _iframe.before('<a name="comment-form-iframe" id="comment-form-iframe"></a>');
            
            var _needle = "#comment-form-iframe";
            var _href = location.href;
            if (_href.substr(_href.length-_needle.length) === _needle) {
                var _top = _iframe.offset().top - 50;
                $(window).scrollTop(_top);
            }
        }
    };
    _setup_iframe_anchor();
});

// ------------------------------
// 20170309 留言網址變連結
$(function () {
    var _setup_comment_to_link = function () {
        var _len = $("#comment-holder").length;
        if (_len === 0) {
            setTimeout(_setup_comment_to_link, 1000);
        }
        else {
            $('#comment-holder .comment-content').html(function(i, inputText) {
                var replacedText, replacePattern1, replacePattern2, replacePattern3;

                //URLs starting with http://, https://, or ftp://
                replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
                replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

                //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
                replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
                replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

                //Change email addresses to mailto:: links.
                replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
                replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

                return replacedText;
           });
           
           $('#comment-holder .comment-content a[href$=".png"],'
            + '#comment-holder .comment-content a[href$=".gif"],'
            + '#comment-holder .comment-content a[href$=".jpg"],'
            + '#comment-holder .comment-content a[href^="http://imgur.com/"],'
            + '#comment-holder .comment-content a[href^="https://imgur.com/"]').each(function(i, aNode) {
             let url = aNode.href
             
             if (url.indexOf('://imgur.com/') > 0) {
               if (url === 'http://imgur.com/'
                     || url === 'https://imgur.com/') {
                return
               }
               if (url.indexOf(',') > 0) {
                 url = url.slice(0, url.indexOf(','))
               }
               
               if (url.indexOf('//imgur.com/a/') > 0) {
                 //url = url.split('//imgur.com/a/').join('//imgur.com/')
                 url = url.slice(url.indexOf('/a/') + 3)
                 $(aNode).html('<blockquote class="imgur-embed-pub" lang="en" data-id="a/' + url + '">'
                  + '<a href="//imgur.com/' + url + '"></a>'
                  + '</blockquote><script async src="//s.imgur.com/min/embed.js" charset="utf-8"></script>')
                 return
               }
               
               url = url + '.jpg'
             }
     
             //console.log(url)
             $(aNode).html('<img src="' + url + '" border="0" class="comment-image" />')
           })
           
           $('#comment-holder .comment-content a[href^="https://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="http://www.youtube.com/watch?v="],'
            + '#comment-holder .comment-content a[href^="https://youtu.be/"],'
            + '#comment-holder .comment-content a[href^="http://youtu.be/"]').each(function(i, aNode) {
             let url = aNode.href
             
             // 取得id
             if (url.indexOf('//www.youtube.com/watch?v=') > 0) {
               url = url.slice(url.indexOf('?v=') + 3)
             }
             else if (url.indexOf('//youtu.be/') > 0) {
               url = url.slice(url.indexOf('.be/') + 4)
             }
     
             //console.log(url)
             $(aNode).before('<iframe width="560" height="315" src="https://www.youtube.com/embed/' + url + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen class="youtube-embed"></iframe>')
           })
           
           // http://imgur.com/GX5p4sk,gcsV3HI,UyWWPGZ#2
        }
    };
    _setup_comment_to_link();
});

/***/ }),

/***/ "./lib-for-link/src/item-header/style-print/style-print.css":
/*!******************************************************************!*\
  !*** ./lib-for-link/src/item-header/style-print/style-print.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style-print.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/article-meta.css":
/*!*************************************************************!*\
  !*** ./lib-for-link/src/item-header/style/article-meta.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./article-meta.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/backlinks.css":
/*!**********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/backlinks.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./backlinks.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/comment.css":
/*!********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/comment.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./comment.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/go-top.css":
/*!*******************************************************!*\
  !*** ./lib-for-link/src/item-header/style/go-top.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./go-top.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/image.css":
/*!******************************************************!*\
  !*** ./lib-for-link/src/item-header/style/image.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./image.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./lib-for-link/src/item-header/style/style-item.css":
/*!***********************************************************!*\
  !*** ./lib-for-link/src/item-header/style/style-item.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!./style-item.css */ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style-print/style-print.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n/******************************************/\n@media print {\n    #masthead {\n        border-bottom: 1px solid gray;\n        position: static !important;\n    }\n    \n    #masthead.fixed-nav {\n        position: static !important;\n        height: 82px;\n    }\n    \n    #masthead.fixed-nav.fixed-nav h1 {\n        line-height: 30px;\n        margin-top: 10px;\n        font-size: 30px;\n    }\n    \n    #masthead .gcse,\n    #masthead .btn-navbar,\n    #masthead #menu-primary {\n        display:none;\n    }\n    \n    #masthead #header-inner {\n        width: 100% !important;\n        padding-left: 0;\n    }\n    #masthead .titlewrapper {\n        float: left;\n    }\n    #masthead .title a {\n        text-decoration: none;\n    }\n    \n    #masthead .title a:after {\n        content: \"\";\n    }\n    \n    #masthead .descriptionwrapper {\n        width: max-content;\n        /*padding-top: 20px;*/\n        padding-left: 18em;\n        padding-top: 5px;\n    }\n    \n    #masthead.fixed-nav.affix #header-inner .descriptionwrapper {\n        display: block;\n    }\n    \n    #masthead .descriptionwrapper:after {\n        content:attr(url);\n        display:block;\n        text-decoration: underline;\n    }\n    \n    #masthead .description {\n        margin-bottom: 0;\n    }\n    \n    /****************/\n    \n    .row {\n        margin-left: 0;\n    }\n    \n    #content {\n        margin-left:0;\n    }\n    \n    #content-wrapper {\n        padding-top: 0;\n    }\n    \n    /*****************/\n    \n    #main .read-more,\n    #main .share-story-container,\n    #main a[name=\"more\"],\n    #main .related_posts,\n    #main .blogger-comment-from-post,\n    #main #backlinks-container {\n        display: none;\n    }\n    \n    #main .post a[href]:after{\n        content:\" (\" attr(href) \") \";\n        font-size:0.8em;\n        font-weight:normal;\n        text-decoration: underline !important;\n    }\n    \n    #main .post .entry-content .meta1 a:after,\n    #main .post .entry-content a[href$=\".png\"]:after,\n    #main #comments a[href]:after,\n    #main .post a[href=\"javascript:void(0)\"]:after,\n    #main .post a[href^=\"#\"]:after,\n    #main .post a.toggle:after,\n    #main .post #ArchiveList a.post-count-link:after {\n        content: \"\";\n    }\n    \n    #main .post a[href^=\"#\"] {\n        display: none;\n    }\n    \n    #main .post .puli-toc a[href^=\"#\"] {\n        display: inline;\n    }\n    \n    \n    #main #comments h4:after {\n        border-top-width: 0;\n    }\n    \n    #main .post:last-of-type {\n        margin-bottom: 0;\n    }\n    \n    #main .post h4,\n    #main .post h5,\n    #main .post h6 {\n        page-break-before: avoid;\n    }\n    \n    #main .post table {\n        page-break-inside: avoid;\n    }\n    \n    #main .post .entry-content {\n        padding-left:0;\n        padding-right:0;\n    }\n    \n    #main .entry-meta {\n        display: none;\n    }\n    \n    #main #comments {\n        border-bottom-width: 0;\n    }\n        \n    /*********************/\n    #sidebar {\n        margin-left: 0;\n    }\n    \n    #sidebar .about-me img[align=\"right\"] {\n        float:left;\n        margin-left: 0;\n        margin-right: 0.5em;\n        \n    }\n    \n    #sidebar .about-me .widget-content {\n        margin-top: 0.5em;\n    }\n    #sidebar .about-me .about-link,\n    #sidebar .about-me .email-subscribe {\n        display: none;\n    }\n    \n    #sidebar .about-me a:after {\n        content: \"\";\n    }\n    \n    #sidebar .about-me .social-media div {\n        text-align: left;\n        padding-right:0 !important;\n        padding-left:0 !important;\n        margin-bottom: 0 !important;\n    }\n    \n    #sidebar .about-me .social-media div .social-button-wrapper {\n        display: block;\n        text-align: left;\n    }\n    #sidebar .about-me .social-media div .social-button-wrapper a {\n        display: inline;\n    }\n    \n    #sidebar .about-me .social-media div .social-button.google-plus,\n    #sidebar .about-me .social-media div .social-button.plurk,\n    #sidebar .about-me .social-media div .social-button.linkedin,\n    #sidebar .about-me .social-media div .social-button.twitter,\n    #sidebar .about-me .social-media div .social-button.github,\n    #sidebar .about-me .social-media div .social-button.android,\n    #sidebar .about-me .social-media div .social-button.chrome,\n    #sidebar .about-me .social-media div .social-button.rss {\n        display: none;\n    }\n    \n    #sidebar .about-me .social-media div a:after {\n        content: \" \" attr(title) \": \" attr(href) \"\";\n        margin-left: 1em;\n    }\n    \n    #sidebar .about-me .social-media div a.email:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"] {\n        text-decoration: none;\n    }\n    \n    #sidebar .popular-posts a[rel=\"bookmark\"]:after {\n        content: attr(href);\n        text-decoration: underline;\n        display: block;\n    }\n    \n    #sidebar .guestbook a[href]:after,\n    #sidebar .new a[href]:after,\n    #sidebar .comments a[href]:after {\n        content: \"\";\n    }\n    \n    #sidebar .guestbook,\n    #sidebar .comments,\n    #sidebar .new,\n    #sidebar .PopularPosts {\n        display: none;\n    }\n    \n    #sidebar .widget {\n        page-break-inside: avoid;\n    }\n    \n    /**********************************/\n    #content-wrapper {\n        margin-bottom: 0;\n    }\n    \n    .site-footer #footer-body,\n    .site-footer .management,\n    .site-footer .go-top,\n    .site-footer .container {\n        display: none;\n    }\n    \n    .site-footer a:after {\n        content: \"\";\n    }\n    \n    /*************************************/\n    #footer .container {\n        padding: 0;\n    }\n    #footer p {\n        text-align: center;\n        width: 100%;\n    }\n    \n    #footer p a:after {\n        content: \" \" attr(href) \"\";\n    }\n    \n    #footer .themexpose {\n        display: none;\n    }\n    \n    /*****************************/\n    a.quickedit {\n        display: none;\n    }\n    \n    a:after {\n        white-space:nowrap;\n    }\n    \n    body > .sumome-share-client-wrapper {\n        display: none;\n    }\n}   /* @media print { */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/article-meta.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#main .entry-content article .meta1 .item-control a {\n  margin-right: 0.5rem;\n  white-space: nowrap;\n  cursor: pointer;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/backlinks.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#backlinks-container h4 {\n  float: left;\n  line-height: 1rem;\n  margin-right: 25px;\n  cursor: default;\n}\n\n#backlinks-container h4:after {\n  bottom: 10px;\n  left: inherit;\n  right: -20px;\n}\n\n#backlinks-container a[href] {\n  line-height: 2.4rem;\n}\n\n#backlinks-container p {\n  margin-bottom: 0;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/comment.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#comment-editor {\n  width: 100%;\n  height: 210px;\n  border-width: 0;\n}\n\n#comment-editor.hide {\n  display: none;\n}\n\n#comments-block img.favicon {\n  height: 16px;\n  width: 16px;\n  margin-bottom:-2px;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/go-top.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/*****************************/\n/* 20170312 GO to comment */\n#footer .go-top .goto-comment {\n    display: block !important;\n    margin-top: 0.5em;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.css":
/*!********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/image.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/**\r\n * @author Pulipuli Chen 20190301\r\n * 修正圖片寬度的問題\r\n */\r\n#main article img {\r\n  max-width: calc(100% - 2rem);\r\n}\r\n\r\n@media (max-width: 460px) {\r\n  #main article img {\r\n    max-width: 100%;\r\n    margin-left: -1rem;\r\n  }\r\n  #main article > p > a[href] {\r\n    display: block;\r\n    text-align: center;\r\n  }\r\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./lib-for-link/src/item-header/style/style-item.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n#main .entry-content > article > p:first-of-type > a[href$=\".png\"]:first-of-type,\n#main .entry-content > article > p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n#main .entry-content > article > p:first-of-type > a[href$=\".gif\"]:first-of-type,\n#main .entry-content > article > p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type\n#main .entry-content > article > p:first-of-type > a[href$=\"-no\"]:first-of-type,\n#main .entry-content > article > p:first-of-type > a[href$=\".png?puli_gphoto=1\"]:first-of-type {\n    margin-left: -2em;\n    display: block;\n    text-align:center;\n}\n\n@media (min-width: 767px) {\n    #main .entry-content > article > p:first-of-type > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p:first-of-type > a[href|=\"https://lh3.googleusercontent.com/\"]:first-of-type\n    #main .entry-content > article > p:first-of-type > a[href$=\"-no\"]:first-of-type {\n        margin-left: -2em;\n        margin-right: 2em;\n    }\n}\n\n#main .entry-content, \n#main .entry-content li {\n    word-wrap: break-word;\n}\n\n#main .entry-content > article code {\n    display: block;\n}\n\n/************************************/\n\n@media (min-width:767px) {\n    #side-bar {\n        /*display: none;*/\n        width: 100%;\n    }\n    \n    #sidebar > div.widget {\n        float: left;\n        width: calc(33% - 0.6em);\n        margin-right: 1.2em;\n    }\n    \n    #sidebar > div.widget .widget-content {\n        min-height: 360px;\n        max-height: 360px;\n        overflow-y: auto;\n        margin-bottom: 0;\n    }\n    \n    .sidebar .widget {\n        margin-bottom: 0;\n    }\n    \n    #sidebar > div.widget:nth-of-type(4) {\n        margin-right: 0;\n    }\n    \n    #sidebar > div.widget.random {\n        margin-right: 0 !important;\n        clear: none;\n    }\n    \n    #sidebar > .comments,\n    #sidebar > .guestbook,\n    #sidebar > .new {\n        display: none;\n    }\n    \n    #content {\n        width: 100% !important;\n        max-width: 1170px;\n    }\n    \n    .popular-posts {\n        padding-bottom: 0;\n    }\n}\n\n@media (min-width:767px) and (max-width: 979px) {\n    #side-bar {\n        margin-left: 0 !important;\n    }\n    \n    #sidebar > div.widget,\n    #sidebar > div.widget:nth-of-type(4) {\n        width: calc(50% - 0.5em);\n        margin-right: 1em;\n    }\n    \n    #sidebar > div.widget:nth-of-type(2), \n    #sidebar > div.widget:nth-of-type(5) {\n        margin-right: 0;\n        clear: none;\n    }\n    \n    #sidebar > div.widget.random {\n        margin-right: 0 !important;\n        clear: none;\n    }\n    \n    #sidebar > div.widget:nth-of-type(1), \n    #sidebar > div.widget:nth-of-type(4) {\n        clear: both;\n        margin-bottom: 1em;\n    }\n    \n    #sidebar > .comments {\n        display: block;\n    }\n}\n\n#side-bar {\n    margin-left: 30px;\n}\n\n@media (min-width: 767px) {\n    #side-bar {\n        max-width: 1170px;\n    }\n}\n\n@media (max-width: 1200px) {\n    #side-bar {\n        margin-left: 20px;\n    }\n}\n\n@media (min-width: 979px) and (max-width: 1200px) {\n    #sidebar > div.widget {\n        width: calc(33% - 0.5em);\n        margin-right: 1em;\n    }\n}\n\nbody .addthis-smartlayers {\n    display: block !important;\n}\n\n.at4-thankyou-background .at4lb-inner {\n    display: none !important;\n}\n\n\n/*************************************/\n\n@media (min-width:767px) {\n    #main .author-meta {\n        max-width: calc(100% - 300px);\n    }\n    \n}\n\n#main .post-iframe {\n    height: 90vh;\n}\n\n#main .entry-meta .creative-commons,\n#main .entry-meta .introduction {\n    font-size: 0.8em;\n    line-height: 1.5em;\n    margin-left: 74px;\n}\n#main .entry-meta .bl_popover {\n    display: inline-block;\n    margin-left: 1em;\n}\n\n#main .entry-meta .creative-commons img {\n    border-width: 0;\n    /*float:left;*/\n    margin-right: 0;\n    padding-top: 0;\n}\n\n#main .entry-meta img.avatar-author {\n    float:left;\n    margin-top: 8px;\n}\n\n#main .entry-meta h4 {\n    line-height: 1em;\n}\n\n#main .entry-meta .creative-commons .title,\n#main .entry-meta .creative-commons .author {\n    text-decoration: underline;\n    color: #BD8242;\n    font-weight: bold;\n}\n\n@media (max-width: 460px) {\n    #footer .management {\n        margin-bottom: 70px;\n    }\n    \n    body > .sumome-stylebufferbottom-shim {\n        display: none;\n    }\n    \n    #main .post h4 {\n        font-size: 1.3rem;\n        line-height: 1.5rem;\n    }\n    \n    #main .post h5,\n    #main .post h6 {\n        font-size: 1rem;\n        line-height: 1.5rem;\n    }\n    \n    .entry-content > article > p {\n        text-indent: 1em;\n    }\n    \n    .entry-content > article > p:not(:first-of-type) > a.lightbox-group {\n        display: inline-block;\n        text-indent: -1em;\n        text-align: center;\n        width: 100%;\n    }\n    \n    /*#main .entry-content > article > p > a[href$=\".png\"]:first-of-type img {\n        max-height: 300px;\n    }*/\n    \n    .entry-content ul, .entry-content li {\n        margin-top: 0em !important; \n        margin-bottom: 0em !important; \n    }\n    \n}\n/**************************/\n@media (max-width: 767px) {\n    #main .entry-container .entry-content {\n        padding-bottom: 5px;\n        padding-top: 1em;\n    }\n    \n    #main .entry-meta {\n        border-top-width: 1px;\n    }\n    \n    #main .entry-content > article > p > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\"-no\"]:first-of-type{\n        margin-left: -2em;\n        /*width: 100%;\n        height: auto;*/\n        /*max-height: 200px;*/\n        display: block;\n        text-align:center;\n    }\n    \n    #main .entry-content a[href$=\".png\"]:first-of-type img,\n    #main .entry-content a[href$=\".jpg\"]:first-of-type img,\n    #main .entry-content a[href$=\".gif\"]:first-of-type img,\n    #main .entry-content a[href$=\"-no\"]:first-of-type img{\n        width: 80%;\n        height: auto;\n        /*max-height: 500px;*/\n    }\n    \n    #main .entry-meta .author-meta {\n        padding-left:0;\n        text-align: center;\n        /*display: none;*/\n    }\n    #main .entry-meta .avatar-author,\n    #main .entry-meta .bl_popover {\n        display: none;\n    }\n    \n    #main .entry-meta .avatar-author {\n        display: block;\n        margin-top: 10px;\n    }\n    \n    #main .entry-meta .creative-commons {\n        margin-left: 0 !important;\n        line-height: 1.5em !important;\n    }\n    #main .entry-meta .creative-commons a.img {\n        display: block;\n        margin-top: 1.5em;\n    }\n    #main .entry-meta .creative-commons img {\n        float: none;\n        margin-left: 0;\n    }\n    \n    .entry-meta img {\n        margin-right:0;\n    }\n    \n    .entry-meta .author-meta h4:after {\n        content: attr(data-content);\n        display:block;\n        font-weight: normal;\n        line-height: 1.5em;\n    }\n    \n    .entry-meta .popover {\n        display:none !important;\n    }\n    \n    .entry-meta {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n    \n    .share-story-container ul {\n        margin-top:0;\n    }\n    \n    #side-bar {\n        margin-left:0;\n    }\n    \n    /* 20161118 */\n    .entry-meta .author-meta {\n        margin-bottom: 5px;\n    }\n}\n\n/*********************************/\n\n.related-posts .item-img > a > img {\n    max-width: 240px;\n    width: 100% !important;\n    height: auto !important;\n}\n\n.related-posts .item-img {\n    max-height: 160px;\n    overflow: hidden;\n}\n\n.related-posts .related-post-title {\n    overflow-x: hidden;\n    white-space: nowrap;\n    background-color: black;\n    color: white;\n    padding-left: 10px;\n}\n\n/*************************************/\n/* 20160528 最矮留言高度 */\n#main div.comments#disqus_thread {\n    min-height: 380px;\n}\n\n#main div.comments#comments {\n    min-height: 378px;\n}\n\n/*************************************/\n/* 20160926 修正code標籤 */\n#main .entry-content > article p > code {\n    text-indent: 0;\n}\n\n#main .entry-content > article pre {\n    font-size: 1em;\n}\n\n#main .entry-content > article code {\n    font-size: 0.8em;\n    line-height: 1.15em;\n}\n\n/************************************/\n/* 20161113 puli toc */\n.entry-content .puli-toc {\n    /*border: 3px solid #CE8A42;*/\n    padding: 0.5em;\n    background-color: #2d2d2d;\n    color: white !important;\n    display: inline-block;\n}\n\n.entry-content .puli-toc li,\n.entry-content .puli-toc a {\n    color: white !important;\n}\n\n/* ******************************* */\n/* 2016/11/15 */\n@media (max-width: 460px) {\n    #masthead #header {\n        max-width: calc(100% - 130px);\n    }\n    \n    #main .entry-content a[href$=\".png\"]:first-of-type img,\n    #main .entry-content a[href$=\".jpg\"]:first-of-type img,\n    #main .entry-content a[href$=\".gif\"]:first-of-type img,\n    #main .entry-content a[href$=\"-no\"]:first-of-type img{\n        width: 100%;\n        /*max-height: 500px;*/\n    }\n    \n    #main .entry-content > article > p > a[href$=\".png\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\".jpg\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\".gif\"]:first-of-type,\n    #main .entry-content > article > p > a[href$=\"-no\"]:first-of-type{\n        margin-left: 0em;\n        text-indent: -0.5em;\n    }\n    \n    .entry-content,\n    .entry-content li {\n        line-height: 150%;\n    }\n    \n    .entry-content article h1 div.meta1 p small span {\n        white-space: nowrap;\n    }\n    \n    #comment-holder li.comment div.avatar-image-container {\n        position: relative;\n        z-index: 1;\n        margin: 10px;\n    }\n    \n    #comment-holder li.comment div.comment-block {\n        margin-left: 0;\n    }\n    \n    #comment-holder li.comment div.comment-block > * {\n        margin-left: 60px;\n    }\n    \n    #comment-holder li.comment div.comment-replies {\n        margin-left: 0;\n    }\n    \n    /* 20161117 */\n    #main .post h1 .meta1 {\n        line-height: 1rem;\n    }\n}\n\n#comment-holder li.comment div.avatar-image-container img[src=\"//img1.blogblog.com/img/blank.gif\"] {\n    /*Gender_Neutral_User-48*/\n    background-image: url(http://pulipulichen.github.io/blogger/blogger/img/no-such-user.png);\n    background-size: cover;\n}\n\n/****************************/\n/* 20161118 */\n.entry-meta.clearfix .share-story-container .share-story.about {\n    display: block;\n}\n\n.entry-meta.clearfix .share-story-container .share-story.about li a  {\n    display: block;\n}\n\n@media (max-width: 767px) {\n    .entry-meta.clearfix .share-story-container .share-story.about li a  {\n        line-height: 50px;\n        padding: 0;\n        margin-bottom: 10px;\n    }\n}\n\n@media (min-width: 767px) {\n    .pull-right.share-story-container {\n        margin-top: 0;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li {\n        width: auto;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a {\n        background-color: #D6D7D6;\n        border-radius: 6px;\n        line-height: 32px;\n        padding: 0 10px;\n        margin-top: 5px;\n        font-size: 0.8em;\n    }\n    \n    .entry-meta.clearfix .share-story-container .share-story.about li a:hover {\n        color:white;\n        background-color: #333;\n    }\n}\n\n\n.author-meta .popover {\n    font-weight: normal;\n    font-size: 0.8rem;\n}\n\n/******************************/\n/* 20170309 上傳圖片 */\n.imgur-btn button {\n    background-color: #f8f8f8;\n    background-image: -webkit-linear-gradient(top,#f8f8f8,#f1f1f1);\n    border: 1px solid #c6c6c6;\n    color: #222;\n    -webkit-transition: all;\n    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.1);\n    font-weight: bold;\n    margin: 0 8px 6px 0;\n    font-family: arial,sans-serif;\n    font-size: 11px;\n    height: 27px;\n    padding-bottom: 0;\n    text-align: center;\n    text-shadow: 0 1px rgba(0,0,0,.1);\n    vertical-align: top;\n    -webkit-appearance: none;\n    box-sizing: border-box;\n    user-select: none;\n    margin-left: 0.5em;\n}\n\n.comment-form-tool {\n    font-size: 14px;\n    user-select: none;\n}\n\n\n/*****************************/\n/* 20170916 修正Google投影片iframe的問題 */\n@media (max-width: 1200px) {\n    iframe[src^=\"https://docs.google.com/presentation/d/e/\"] {\n        /* https://docs.google.com/presentation/d/e/2PACX-1vQmg24W4Vqv_NCw2Q2Ke34RVL6uIOKcyJ_DZYjA1Yih05ZWArEctxd3AzteV1tvHQiRyZ-JhADzH3aW/embed?start=false&loop=false&delayms=3000  */\n        width: 100%;\n        height: calc(100vw * 0.7);\n    }\n}   /* @media (max-widt@media (max-width: 1200px) {*/\n\n/*****************************/\n/* 20181021 留言裡面的圖片 */\n/* https://blog.pulipuli.info/2017/10/k-determin-optimal-number-of-clusters.html */\n#comment-holder .comment-content img.comment-image {\n  display: block;\n}\n\n#comment-holder .comment-content iframe.youtube-embed {\n  max-width: 100%;\n  display: block;\n}\n\n#main .entry-content a[href$=\"-no\"] img {\n    box-shadow: 4px 4px 2px grey;\n    margin-right: 5px;\n    margin-bottom: 5px;\n}\n\n#main .entry-content p:first-of-type a[href$=\"-no\"] img:first-of-type {\n    box-shadow: 0px 0px 0px grey;\n    margin-right: auto;\n    margin-bottom: auto;\n    margin-left: -1rem;\n}\n\n/* ------------------------- */\n#main article .cata-title {\n  width: 75%;\n}\n\n#main article .heading-button {\n  margin:0;\n  padding:0;\n  text-decoration:none;\n  font-size:smaller;\n  font-weight:normal;\n  float:right;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 2:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./lib-for-link/src/item-header/style/article-meta.css ./lib-for-link/src/item-header/style/comment.css ./lib-for-link/src/item-header/style/go-top.css ./lib-for-link/src/item-header/style/image.css ./lib-for-link/src/item-header/style/backlinks.css ./lib-for-link/src/item-header/style/style-item.css ./lib-for-link/src/item-header/script/script-item.js ./lib-for-link/src/item-header/modules/related-posts/related-posts.js ./lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js ./lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js ./lib-for-link/src/item-header/style-print/style-print.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./lib-for-link/src/item-header/style/article-meta.css */"./lib-for-link/src/item-header/style/article-meta.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/comment.css */"./lib-for-link/src/item-header/style/comment.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/go-top.css */"./lib-for-link/src/item-header/style/go-top.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/image.css */"./lib-for-link/src/item-header/style/image.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/backlinks.css */"./lib-for-link/src/item-header/style/backlinks.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/style/style-item.css */"./lib-for-link/src/item-header/style/style-item.css");
__webpack_require__(/*! ./lib-for-link/src/item-header/script/script-item.js */"./lib-for-link/src/item-header/script/script-item.js");
__webpack_require__(/*! ./lib-for-link/src/item-header/modules/related-posts/related-posts.js */"./lib-for-link/src/item-header/modules/related-posts/related-posts.js");
__webpack_require__(/*! ./lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js */"./lib-for-link/src/item-header/modules/related-posts/jQueryOwlCarousel.js");
__webpack_require__(/*! ./lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js */"./lib-for-link/src/item-header/modules/related-posts/printRelatedLabels_thumbs.js");
module.exports = __webpack_require__(/*! ./lib-for-link/src/item-header/style-print/style-print.css */"./lib-for-link/src/item-header/style-print/style-print.css");


/***/ })

/******/ });
//# sourceMappingURL=item-header.js.map