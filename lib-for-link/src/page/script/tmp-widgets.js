(function() {
    var aa = "&action="
      , ba = ".wikipedia.org"
      , ca = "CSSStyleDeclaration"
      , da = "Clobbering detected"
      , ea = "Edge"
      , fa = "Element"
      , ha = "GET"
      , ia = "SCRIPT"
      , ja = "SPAN"
      , ka = "STYLE"
      , la = "SW_READER_LIST_"
      , ma = "SW_READER_LIST_CLOSED_"
      , na = "Share this post"
      , oa = "_blank"
      , qa = "about:invalid#zClosurez"
      , ra = "about:invalid#zSoyz"
      , sa = "absolute"
      , ta = "attributes"
      , ua = "block"
      , va = "blog.gPlusViewType"
      , wa = "chooseWidget"
      , xa = "click"
      , ya = "collapsed"
      , za = "collapsed-backlink"
      , Aa = "collapsible"
      , Ba = "comment-editor"
      , Ca = "complete"
      , Da = "configure"
      , Ea = "contact-form-email"
      , Fa = "contact-form-email-message"
      , Ga = "contact-form-error-message"
      , Ha = "contact-form-error-message-with-border"
      , Ia = "contact-form-name"
      , Ja = "contact-form-submit"
      , Ka = "contact-form-success-message"
      , La = "contact-form-success-message-with-border"
      , Ma = "content"
      , Na = "data-height"
      , Oa = "data-sanitizer-"
      , Pa = "data-viewurl"
      , Qa = "displayModeFull"
      , Ra = "displayModeLayout"
      , Sa = "displayModeNone"
      , g = "div"
      , Ta = "dropdown-toggle"
      , Ua = "error"
      , Va = "expanded"
      , Wa = "expanded-backlink"
      , Xa = "followers-grid"
      , k = "function"
      , Ya = "getAttribute"
      , Za = "getElementsByTagName"
      , $a = "getPropertyValue"
      , ab = "hasAttribute"
      , bb = "hidden"
      , cb = "https://"
      , db = "inline"
      , eb = "layout-widget-description"
      , fb = "layout-widget-title"
      , gb = "max-height: 0;"
      , hb = "msMatchesSelector"
      , l = "none"
      , ib = "number"
      , jb = "object"
      , kb = "ready"
      , lb = "removeAttribute"
      , nb = "rotate(-45deg)"
      , ob = "setAttribute"
      , pb = "status-message"
      , qb = "status-message-inner"
      , rb = "string"
      , sb = "style"
      , tb = "success"
      , ub = "text/javascript"
      , vb = "thread-collapsed"
      , wb = "thread-expanded"
      , xb = "toggle"
      , yb = "visible"
      , zb = "wikipedia-search-input"
      , Ab = "wikipedia-search-more"
      , Bb = "wikipedia-search-results"
      , Cb = "wikipedia-search-results-header";
    function Db() {
        return function() {}
    }
    function m(a) {
        return function() {
            return this[a]
        }
    }
    function Eb(a) {
        return function() {
            return a
        }
    }
    var p;
    function Fb(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var Gb = typeof Object.defineProperties == k ? Object.defineProperty : function(a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value)
    }
      , Hb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
    function Ib(a, b) {
        if (b) {
            var c = Hb;
            a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                e in c || (c[e] = {});
                c = c[e]
            }
            a = a[a.length - 1];
            d = c[a];
            b = b(d);
            b != d && null != b && Gb(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    Ib("String.prototype.endsWith", function(a) {
        return a ? a : function(a, c) {
            if (null == this)
                throw new TypeError("The 'this' value for String.prototype.endsWith must not be null or undefined");
            if (a instanceof RegExp)
                throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression");
            var b = this + "";
            a += "";
            void 0 === c && (c = b.length);
            c = Math.max(0, Math.min(c | 0, b.length));
            for (var e = a.length; 0 < e && 0 < c; )
                if (b[--c] != a[--e])
                    return !1;
            return 0 >= e
        }
    });
    Ib("Array.from", function(a) {
        return a ? a : function(a, c, d) {
            c = null != c ? c : function(a) {
                return a
            }
            ;
            var b = []
              , f = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (typeof f == k) {
                a = f.call(a);
                for (var h = 0; !(f = a.next()).done; )
                    b.push(c.call(d, f.value, h++))
            } else
                for (f = a.length,
                h = 0; h < f; h++)
                    b.push(c.call(d, a[h], h));
            return b
        }
    });
    function Jb(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    Ib("WeakMap", function(a) {
        function b(a) {
            this.ea = (h += Math.random() + 1).toString();
            if (a) {
                var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
                for (a = b ? b.call(a) : {
                    next: Fb(a)
                }; !(b = a.next()).done; )
                    b = b.value,
                    this.set(b[0], b[1])
            }
        }
        function c() {}
        function d(a) {
            Jb(a, f) || Gb(a, f, {
                value: new c
            })
        }
        function e(a) {
            var b = Object[a];
            b && (Object[a] = function(a) {
                if (a instanceof c)
                    return a;
                d(a);
                return b(a)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var b = Object.seal({})
                  , c = Object.seal({})
                  , d = new a([[b, 2], [c, 3]]);
                if (2 != d.get(b) || 3 != d.get(c))
                    return !1;
                d["delete"](b);
                d.set(c, 4);
                return !d.has(b) && 4 == d.get(c)
            } catch (O) {
                return !1
            }
        }())
            return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var h = 0;
        b.prototype.set = function(a, b) {
            d(a);
            if (!Jb(a, f))
                throw Error("WeakMap key fail: " + a);
            a[f][this.ea] = b;
            return this
        }
        ;
        b.prototype.get = function(a) {
            return Jb(a, f) ? a[f][this.ea] : void 0
        }
        ;
        b.prototype.has = function(a) {
            return Jb(a, f) && Jb(a[f], this.ea)
        }
        ;
        b.prototype["delete"] = function(a) {
            return Jb(a, f) && Jb(a[f], this.ea) ? delete a[f][this.ea] : !1
        }
        ;
        return b
    });
    window.jstiming && window.jstiming.load.tick("widgetJsStart");
    function Kb() {
        window.jstiming.load.tick("ol")
    }
    function Lb(a, b) {
        a.addEventListener ? a.addEventListener("load", b, !1) : a.attachEvent("onload", b)
    }
    function Mb(a, b) {
        return a.className && -1 != a.className.indexOf(b) ? a : a.parentNode ? Mb(a.parentNode, b) : null
    }
    function Nb() {
        window.jstiming.load.tick("prt");
        window.tickAboveFold && window.tickAboveFold(this)
    }
    window.BLOG_attachCsiOnload = function(a, b) {
        if (window.jstiming) {
            window.jstiming.load.tick("widgetJsEnd");
            window.jstiming.load.tick("prt");
            window.jstiming.load.name = a + "blogspot";
            a = document.getElementsByTagName("img");
            for (var c = 0; c < a.length; c++)
                a[c].complete ? null != Mb(a[c], "post") && Nb.apply(a[c]) : null != Mb(a[c], "post") && Lb(a[c], Nb);
            Lb(window, Kb);
            a = function() {
                for (var a = {}, c = window.blogger_blog_id, f = ["google_blogger_adsense_experiment_id", "blogger_csi_e", "blogger_templates_experiment_id", "blogger_active_experiments"], h = [], n = f.length, q = 0; q < n; q++) {
                    var w = f[q];
                    w in window && h.push(window[w])
                }
                c && (a.blogId = c);
                0 < h.length && (a.e = h.join(","));
                c = ("https:" == document.location.protocol ? "https:" : "http:") + "//csi.gstatic.com/csi";
                window.jstiming.report(window.jstiming.load, a, b || c)
            }
            ;
            window.addEventListener ? window.addEventListener("beforeunload", a, !1) : window.attachEvent("onbeforeunload", a)
        }
    }
    ;
    var Ob = Ob || {}
      , r = this;
    function t(a) {
        return void 0 !== a
    }
    function u(a) {
        return typeof a == rb
    }
    var Pb = /^[\w+/_-]+[=]{0,2}$/
      , Qb = null;
    function Rb() {}
    function Sb(a) {
        a.Lb = void 0;
        a.Ha = function() {
            return a.Lb ? a.Lb : a.Lb = new a
        }
    }
    function Tb(a) {
        var b = typeof a;
        if (b == jb)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return jb;
                if ("[object Array]" == c || typeof a.length == ib && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return k
            } else
                return "null";
        else if (b == k && "undefined" == typeof a.call)
            return jb;
        return b
    }
    function v(a) {
        return "array" == Tb(a)
    }
    function Ub(a) {
        var b = Tb(a);
        return "array" == b || b == jb && typeof a.length == ib
    }
    function Vb(a) {
        return Tb(a) == k
    }
    function Wb(a) {
        var b = typeof a;
        return b == jb && null != a || b == k
    }
    var Xb = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , Yb = 0;
    function Zb(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function $b(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function x(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? x = Zb : x = $b;
        return x.apply(null, arguments)
    }
    function ac(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var bc = Date.now || function() {
        return +new Date
    }
    ;
    function y(a, b) {
        a = a.split(".");
        var c = r;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            !a.length && t(b) ? c[d] = b : c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {}
    }
    function z(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.mi = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)
                d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    }
    ;function cc(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, cc);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    z(cc, Error);
    cc.prototype.name = "CustomError";
    var dc;
    function ec(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++)
            c += a[e] + (e < b.length ? b[e] : "%s");
        cc.call(this, c + a[d])
    }
    z(ec, cc);
    ec.prototype.name = "AssertionError";
    var fc = Array.prototype.indexOf ? function(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    }
    : function(a, b) {
        if (u(a))
            return u(b) && 1 == b.length ? a.indexOf(b, 0) : -1;
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , A = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = u(a) ? a.split("") : a, f = 0; f < d; f++)
            f in e && b.call(c, e[f], f, a)
    }
      , gc = Array.prototype.filter ? function(a, b) {
        return Array.prototype.filter.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = [], e = 0, f = u(a) ? a.split("") : a, h = 0; h < c; h++)
            if (h in f) {
                var n = f[h];
                b.call(void 0, n, h, a) && (d[e++] = n)
            }
        return d
    }
      , hc = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    }
    : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = u(a) ? a.split("") : a, h = 0; h < d; h++)
            h in f && (e[h] = b.call(c, f[h], h, a));
        return e
    }
      , ic = Array.prototype.some ? function(a, b) {
        return Array.prototype.some.call(a, b, void 0)
    }
    : function(a, b) {
        for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    ;
    function jc(a) {
        a: {
            var b = kc;
            for (var c = a.length, d = u(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : u(a) ? a.charAt(b) : a[b]
    }
    function lc(a, b) {
        return 0 <= fc(a, b)
    }
    function mc(a) {
        if (!v(a))
            for (var b = a.length - 1; 0 <= b; b--)
                delete a[b];
        a.length = 0
    }
    function nc(a, b) {
        b = fc(a, b);
        var c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }
    function oc(a) {
        return Array.prototype.concat.apply([], arguments)
    }
    function pc(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    function qc(a, b, c, d) {
        Array.prototype.splice.apply(a, rc(arguments, 1))
    }
    function rc(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function sc(a) {
        if (!arguments.length)
            return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++)
            arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++)
                e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    }
    function tc(a, b) {
        return oc.apply([], hc(a, b, void 0))
    }
    ;function uc(a) {
        a = a.className;
        return u(a) && a.match(/\S+/g) || []
    }
    function vc(a, b) {
        var c = uc(a);
        wc(c, rc(arguments, 1));
        a.className = c.join(" ")
    }
    function xc(a, b) {
        var c = uc(a);
        c = yc(c, rc(arguments, 1));
        a.className = c.join(" ")
    }
    function wc(a, b) {
        for (var c = 0; c < b.length; c++)
            lc(a, b[c]) || a.push(b[c])
    }
    function yc(a, b) {
        return gc(a, function(a) {
            return !lc(b, a)
        })
    }
    function zc(a, b, c) {
        for (var d = uc(a), e = !1, f = 0; f < d.length; f++)
            d[f] == b && (qc(d, f--, 1),
            e = !0);
        e && (d.push(c),
        a.className = d.join(" "))
    }
    function B(a, b) {
        return lc(uc(a), b)
    }
    ;function Ac() {
        return function(a) {
            return 500 <= Bc(a) ? (a.responseText.length ? document.body.innerHTML = a.responseText : window.alert(LayoutsMessages.SERVER_ERROR),
            !1) : !0
        }
    }
    ;function Cc(a, b) {
        var c = C
          , d = a.ownerDocument;
        b = b._GetHelper();
        var e = b._GetData()
          , f = c._GetAllData();
        a = Dc(d, a, g, "widget-wrap1");
        a = Dc(d, a, g, "widget-wrap2");
        a = Dc(d, a, g, "widget-wrap3");
        var h = Dc(d, a, g, "widget-content");
        if (a = e.version && 1 < e.version)
            h.className += " visibility",
            Dc(d, h, g, "layout-widget-state " + (e.isVisible ? yb : "not-visible")).setAttribute("title", e.visibilityTooltipMessage);
        var n = Dc(d, h, g, "layout-title");
        if (e[fb]) {
            var q = Dc(d, h, g, eb);
            q.appendChild(d.createTextNode(e[fb]));
            q.setAttribute("title", e[eb])
        }
        n.appendChild(d.createTextNode(e["layout-title"]));
        e = Dc(d, h, "a", "editlink");
        var w = b._GenerateWidgetMetadata();
        e.setAttribute("href", w.quickEditUrl);
        e.target = wa;
        e.onclick = function() {
            return c._PopupConfig(d.getElementById(w.instanceId))
        }
        ;
        a && (e.className += " icon");
        e.appendChild(d.createTextNode(f.messages.edit || "Edit"))
    }
    function Dc(a, b, c, d) {
        a = a.createElement(c);
        a.className = d;
        b.appendChild(a);
        return a
    }
    ;function Ec(a, b) {
        return 0 == a.lastIndexOf(b, 0)
    }
    var D = String.prototype.trim ? function(a) {
        return a.trim()
    }
    : function(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    ;
    function Fc(a, b) {
        if (b)
            a = a.replace(Gc, "&amp;").replace(Hc, "&lt;").replace(Ic, "&gt;").replace(Jc, "&quot;").replace(Kc, "&#39;").replace(Lc, "&#0;");
        else {
            if (!Mc.test(a))
                return a;
            -1 != a.indexOf("&") && (a = a.replace(Gc, "&amp;"));
            -1 != a.indexOf("<") && (a = a.replace(Hc, "&lt;"));
            -1 != a.indexOf(">") && (a = a.replace(Ic, "&gt;"));
            -1 != a.indexOf('"') && (a = a.replace(Jc, "&quot;"));
            -1 != a.indexOf("'") && (a = a.replace(Kc, "&#39;"));
            -1 != a.indexOf("\x00") && (a = a.replace(Lc, "&#0;"))
        }
        return a
    }
    var Gc = /&/g
      , Hc = /</g
      , Ic = />/g
      , Jc = /"/g
      , Kc = /'/g
      , Lc = /\x00/g
      , Mc = /[\x00&<>"']/;
    function Nc(a) {
        return -1 != Oc.toLowerCase().indexOf(a.toLowerCase())
    }
    function Pc(a, b) {
        var c = 0;
        a = D(String(a)).split(".");
        b = D(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || ""
              , h = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                if (0 == f[0].length && 0 == h[0].length)
                    break;
                c = Qc(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Qc(0 == f[2].length, 0 == h[2].length) || Qc(f[2], h[2]);
                f = f[3];
                h = h[3]
            } while (0 == c)
        }
        return c
    }
    function Qc(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var Oc;
    a: {
        var Rc = r.navigator;
        if (Rc) {
            var Sc = Rc.userAgent;
            if (Sc) {
                Oc = Sc;
                break a
            }
        }
        Oc = ""
    }
    function G(a) {
        return -1 != Oc.indexOf(a)
    }
    ;function Tc(a, b, c) {
        for (var d in a)
            b.call(c, a[d], d, a)
    }
    function Uc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = a[d];
        return b
    }
    function Vc(a) {
        var b = [], c = 0, d;
        for (d in a)
            b[c++] = d;
        return b
    }
    function Wc(a, b) {
        for (var c in a)
            if (a[c] == b)
                return !0;
        return !1
    }
    function Xc(a) {
        for (var b in a)
            return !1;
        return !0
    }
    function Yc(a) {
        var b = {}, c;
        for (c in a)
            b[c] = a[c];
        return b
    }
    var Zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    function $c(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d)
                a[c] = d[c];
            for (var f = 0; f < Zc.length; f++)
                c = Zc[f],
                Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }
    ;function ad() {
        return G("Firefox") || G("FxiOS")
    }
    function bd() {
        return G("Safari") && !(cd() || G("Coast") || G("Opera") || G(ea) || ad() || G("Silk") || G("Android"))
    }
    function cd() {
        return (G("Chrome") || G("CriOS")) && !G(ea)
    }
    function dd() {
        return G("Android") && !(cd() || ad() || G("Opera") || G("Silk"))
    }
    ;function ed(a) {
        return a = Fc(a, void 0)
    }
    function fd(a) {
        for (var b = 0; 2 > b; b++) {
            var c = "\"'".charAt(b);
            if (a.charAt(0) == c && a.charAt(a.length - 1) == c)
                return a.substring(1, a.length - 1)
        }
        return a
    }
    var gd = String.prototype.repeat ? function(a, b) {
        return a.repeat(b)
    }
    : function(a, b) {
        return Array(b + 1).join(a)
    }
    ;
    function hd(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }
    function id(a) {
        var b = u(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])","g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    }
    ;function jd() {
        return G("iPhone") && !G("iPod") && !G("iPad")
    }
    ;function kd(a) {
        kd[" "](a);
        return a
    }
    kd[" "] = Rb;
    function ld(a, b) {
        var c = H.Ff;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    }
    ;var H = {
        mb: !1,
        lb: !1,
        Sb: !1,
        Wb: !1,
        ob: !1,
        pb: !1,
        Zc: !1
    };
    H.La = H.mb || H.lb || H.Sb || H.ob || H.Wb || H.pb;
    H.kf = function() {
        return Oc
    }
    ;
    H.Gb = function() {
        return r.navigator || null
    }
    ;
    H.ni = function() {
        return H.Gb()
    }
    ;
    H.Ma = H.La ? H.pb : G("Opera");
    H.R = H.La ? H.mb : G("Trident") || G("MSIE");
    H.Ra = H.La ? H.lb : G(ea);
    H.Wh = H.Ra || H.R;
    H.qb = H.La ? H.Sb : G("Gecko") && !(Nc("WebKit") && !G(ea)) && !(G("Trident") || G("MSIE")) && !G(ea);
    H.va = H.La ? H.Wb || H.ob : Nc("WebKit") && !G(ea);
    H.Df = function() {
        return H.va && G("Mobile")
    }
    ;
    H.fi = H.ob || H.Df();
    H.Bd = H.va;
    H.Rd = function() {
        var a = H.Gb();
        return a && a.platform || ""
    }
    ;
    H.ji = H.Rd();
    H.Ub = !1;
    H.Xb = !1;
    H.Tb = !1;
    H.Yb = !1;
    H.Ka = !1;
    H.Ba = !1;
    H.Aa = !1;
    H.nb = !1;
    H.ad = !1;
    H.$c = !1;
    H.la = H.Ub || H.Xb || H.Tb || H.Yb || H.Ka || H.Ba || H.Aa || H.nb;
    H.ei = H.la ? H.Ub : G("Macintosh");
    H.ki = H.la ? H.Xb : G("Windows");
    H.Cf = function() {
        return G("Linux") || G("CrOS")
    }
    ;
    H.bi = H.la ? H.Tb : H.Cf();
    H.Gf = function() {
        var a = H.Gb();
        return !!a && -1 != (a.appVersion || "").indexOf("X11")
    }
    ;
    H.li = H.la ? H.Yb : H.Gf();
    H.Yc = H.la ? H.Ka : G("Android");
    H.td = H.la ? H.Ba : jd();
    H.sd = H.la ? H.Aa : G("iPad");
    H.$h = H.la ? H.nb : G("iPod");
    H.Zh = H.la ? H.Ba || H.Aa || H.nb : jd() || G("iPad") || G("iPod");
    H.ai = H.la ? H.ad : Nc("KaiOS");
    H.Yh = H.la ? H.$c : Nc("GAFP");
    H.Sd = function() {
        var a = ""
          , b = H.mf();
        b && (a = b ? b[1] : "");
        return H.R && (b = H.tc(),
        null != b && b > parseFloat(a)) ? String(b) : a
    }
    ;
    H.mf = function() {
        var a = H.kf();
        if (H.qb)
            return /rv:([^\);]+)(\)|;)/.exec(a);
        if (H.Ra)
            return /Edge\/([\d\.]+)/.exec(a);
        if (H.R)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (H.va)
            return /WebKit\/(\S+)/.exec(a);
        if (H.Ma)
            return /(?:Version)[ \/]?(\S+)/.exec(a)
    }
    ;
    H.tc = function() {
        var a = r.document;
        return a ? a.documentMode : void 0
    }
    ;
    H.VERSION = H.Sd();
    H.compare = function(a, b) {
        return Pc(a, b)
    }
    ;
    H.Ff = {};
    H.oa = function(a) {
        return H.Zc || ld(a, function() {
            return 0 <= Pc(H.VERSION, a)
        })
    }
    ;
    H.ri = H.oa;
    H.ib = function(a) {
        return Number(H.fd) >= a
    }
    ;
    H.oi = H.ib;
    var md;
    var nd = r.document;
    md = nd && H.R ? H.tc() || ("CSS1Compat" == nd.compatMode ? parseInt(H.VERSION, 10) : 5) : void 0;
    H.fd = md;
    var od = !H.R || H.ib(9)
      , pd = H.R && !H.oa("9")
      , qd = H.R || H.Ma || H.va
      , rd = H.R;
    function sd(a) {
        return function() {
            return a
        }
    }
    function td() {
        return null
    }
    function ud(a) {
        return a
    }
    ;function vd(a, b) {
        this.C = a === wd && b || "";
        this.D = xd
    }
    vd.prototype.ra = !0;
    vd.prototype.na = m("C");
    vd.prototype.toString = function() {
        return "Const{" + this.C + "}"
    }
    ;
    function yd(a) {
        return a instanceof vd && a.constructor === vd && a.D === xd ? a.C : "type_error:Const"
    }
    var xd = {}
      , wd = {};
    function zd() {
        this.D = "";
        this.F = Ad
    }
    zd.prototype.ra = !0;
    zd.prototype.na = m("D");
    zd.prototype.Kb = !0;
    zd.prototype.C = Eb(1);
    function Bd(a) {
        if (a instanceof zd && a.constructor === zd && a.F === Ad)
            return a.D;
        Tb(a);
        return "type_error:TrustedResourceUrl"
    }
    var Cd = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Ad = {};
    function Dd(a) {
        var b = new zd;
        b.D = a;
        return b
    }
    function Ed(a, b, c) {
        if (null == c)
            return b;
        if (u(c))
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c) {
            var e = c[d];
            e = v(e) ? e : [e];
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                null != h && (b || (b = a),
                b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
            }
        }
        return b
    }
    ;function Fd() {
        this.D = "";
        this.F = Gd
    }
    Fd.prototype.ra = !0;
    Fd.prototype.na = m("D");
    Fd.prototype.Kb = !0;
    Fd.prototype.C = Eb(1);
    function Hd(a) {
        if (a instanceof Fd && a.constructor === Fd && a.F === Gd)
            return a.D;
        Tb(a);
        return "type_error:SafeUrl"
    }
    var Id = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
    function Jd(a) {
        if (a instanceof Fd)
            return a;
        a = typeof a == jb && a.ra ? a.na() : String(a);
        Id.test(a) || (a = qa);
        return Kd(a)
    }
    var Gd = {};
    function Kd(a) {
        var b = new Fd;
        b.D = a;
        return b
    }
    Kd("about:blank");
    function Ld() {
        this.C = "";
        this.D = Md
    }
    Ld.prototype.ra = !0;
    var Md = {};
    Ld.prototype.na = m("C");
    function Nd(a) {
        if (a instanceof Ld && a.constructor === Ld && a.D === Md)
            return a.C;
        Tb(a);
        return "type_error:SafeStyle"
    }
    function Od(a) {
        var b = new Ld;
        b.C = a;
        return b
    }
    var Pd = Od("");
    function Qd(a) {
        if (a instanceof Fd)
            return 'url("' + Hd(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof vd)
            a = yd(a);
        else {
            a = String(a);
            var b = a.replace(Rd, "$1").replace(Rd, "$1").replace(Sd, "url");
            if (Td.test(b)) {
                if (b = !Ud.test(a)) {
                    for (var c = b = !0, d = 0; d < a.length; d++) {
                        var e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && Vd(a)
                }
                a = b ? Wd(a) : "zClosurez"
            } else
                a = "zClosurez"
        }
        if (/[{;}]/.test(a))
            throw new ec("Value does not allow [{;}], got: %s.",[a]);
        return a
    }
    function Vd(a) {
        for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if ("]" == e) {
                if (b)
                    return !1;
                b = !0
            } else if ("[" == e) {
                if (!b)
                    return !1;
                b = !1
            } else if (!b && !c.test(e))
                return !1
        }
        return b
    }
    var Td = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/
      , Sd = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g
      , Rd = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g
      , Ud = /\/\*/;
    function Wd(a) {
        return a.replace(Sd, function(a, c, d, e) {
            var b = "";
            d = d.replace(/^(['"])(.*)\1$/, function(a, c, d) {
                b = c;
                return d
            });
            a = Jd(d).na();
            return c + b + a + b + e
        })
    }
    ;function Xd() {
        this.C = "";
        this.D = Yd
    }
    Xd.prototype.ra = !0;
    var Yd = {};
    function Zd(a, b) {
        if (-1 != a.indexOf("<"))
            throw Error("Selector does not allow '<', got: " + a);
        var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
        if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c))
            throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
        a: {
            for (var d = {
                "(": ")",
                "[": "]"
            }, e = [], f = 0; f < c.length; f++) {
                var h = c[f];
                if (d[h])
                    e.push(d[h]);
                else if (Wc(d, h) && e.pop() != h) {
                    c = !1;
                    break a
                }
            }
            c = 0 == e.length
        }
        if (!c)
            throw Error("() and [] in selector must be balanced, got: " + a);
        if (!(b instanceof Ld)) {
            c = "";
            for (var n in b) {
                if (!/^[-_a-zA-Z0-9]+$/.test(n))
                    throw Error("Name allows only [-_a-zA-Z0-9], got: " + n);
                d = b[n];
                null != d && (d = v(d) ? hc(d, Qd).join(" ") : Qd(d),
                c += n + ":" + d + ";")
            }
            b = c ? Od(c) : Pd
        }
        a = a + "{" + Nd(b).replace(/</g, "\\3C ") + "}";
        return $d(a)
    }
    function ae(a) {
        function b(a) {
            v(a) ? A(a, b) : c += be(a)
        }
        var c = "";
        A(arguments, b);
        return $d(c)
    }
    Xd.prototype.na = m("C");
    function be(a) {
        if (a instanceof Xd && a.constructor === Xd && a.D === Yd)
            return a.C;
        Tb(a);
        return "type_error:SafeStyleSheet"
    }
    function $d(a) {
        var b = new Xd;
        b.C = a;
        return b
    }
    var ce = $d("");
    function de() {
        this.D = "";
        this.G = ee;
        this.F = null
    }
    de.prototype.Kb = !0;
    de.prototype.C = m("F");
    de.prototype.ra = !0;
    de.prototype.na = m("D");
    function fe(a) {
        if (a instanceof de && a.constructor === de && a.G === ee)
            return a.D;
        Tb(a);
        return "type_error:SafeHtml"
    }
    function ge(a) {
        if (a instanceof de)
            return a;
        var b = typeof a == jb
          , c = null;
        b && a.Kb && (c = a.C());
        a = Fc(b && a.ra ? a.na() : String(a));
        return he(a, c)
    }
    function ie(a) {
        function b(a) {
            v(a) ? A(a, b) : (a = ge(a),
            d += fe(a),
            a = a.C(),
            0 == c ? c = a : 0 != a && c != a && (c = null))
        }
        var c = 0
          , d = "";
        A(arguments, b);
        return he(d, c)
    }
    var ee = {};
    function he(a, b) {
        var c = new de;
        c.D = a;
        c.F = b;
        return c
    }
    he("<!DOCTYPE html>", 0);
    he("", 0);
    var je = he("<br>", 0);
    var ke = function(a) {
        var b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }(function() {
        var a = document.createElement(g);
        a.innerHTML = "<div><div></div></div>";
        var b = a.firstChild.firstChild;
        a.innerHTML = "";
        return !b.parentElement
    });
    function le(a, b) {
        if (ke())
            for (; a.lastChild; )
                a.removeChild(a.lastChild);
        a.innerHTML = b
    }
    function me(a, b) {
        a.src = Bd(b);
        if (null === Qb)
            b: {
                b = r.document;
                if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && Pb.test(b)) {
                    Qb = b;
                    break b
                }
                Qb = ""
            }
        b = Qb;
        b && a.setAttribute("nonce", b)
    }
    function ne(a) {
        var b = window.location;
        a instanceof Fd || a instanceof Fd || (a = typeof a == jb && a.ra ? a.na() : String(a),
        Id.test(a) || (a = qa),
        a = Kd(a));
        b.href = Hd(a)
    }
    ;function oe(a, b) {
        this.x = t(a) ? a : 0;
        this.y = t(b) ? b : 0
    }
    oe.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    }
    ;
    oe.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    }
    ;
    function pe(a, b) {
        this.width = a;
        this.height = b
    }
    pe.prototype.ja = function() {
        return !(this.width * this.height)
    }
    ;
    pe.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    }
    ;
    pe.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    }
    ;
    function I(a) {
        return u(a) ? document.getElementById(a) : a
    }
    function qe(a, b) {
        var c = b || document;
        return c.querySelectorAll && c.querySelector ? c.querySelectorAll("." + a) : re(document, "*", a, b)
    }
    function K(a, b) {
        var c = b || document;
        if (c.getElementsByClassName)
            a = c.getElementsByClassName(a)[0];
        else {
            c = document;
            var d = b || c;
            a = d.querySelectorAll && d.querySelector && a ? d.querySelector(a ? "." + a : "") : re(c, "*", a, b)[0] || null
        }
        return a || null
    }
    function re(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c))
            return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, h; h = a[f]; f++)
                    b == h.nodeName && (d[e++] = h);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; h = a[f]; f++)
                b = h.className,
                typeof b.split == k && lc(b.split(/\s+/), c) && (d[e++] = h);
            d.length = e;
            return d
        }
        return a
    }
    function se(a, b) {
        Tc(b, function(b, d) {
            b && typeof b == jb && b.ra && (b = b.na());
            d == sb ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : te.hasOwnProperty(d) ? a.setAttribute(te[d], b) : Ec(d, "aria-") || Ec(d, "data-") ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var te = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };
    function ue(a, b, c) {
        return ve(document, arguments)
    }
    function ve(a, b) {
        var c = String(b[0])
          , d = b[1];
        if (!od && d && (d.name || d.type)) {
            c = ["<", c];
            d.name && c.push(' name="', ed(d.name), '"');
            if (d.type) {
                c.push(' type="', ed(d.type), '"');
                var e = {};
                $c(e, d);
                delete e.type;
                d = e
            }
            c.push(">");
            c = c.join("")
        }
        c = a.createElement(c);
        d && (u(d) ? c.className = d : v(d) ? c.className = d.join(" ") : se(c, d));
        2 < b.length && we(a, c, b);
        return c
    }
    function we(a, b, c) {
        function d(c) {
            c && b.appendChild(u(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !Ub(f) || Wb(f) && 0 < f.nodeType ? d(f) : A(xe(f) ? pc(f) : f, d)
        }
    }
    function ye(a) {
        for (var b; b = a.firstChild; )
            a.removeChild(b)
    }
    function ze(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    }
    function Ae(a) {
        var b;
        if (qd && !(H.R && H.oa("9") && !H.oa("10") && r.SVGElement && a instanceof r.SVGElement) && (b = a.parentElement))
            return b;
        b = a.parentNode;
        return Wb(b) && 1 == b.nodeType ? b : null
    }
    function Be(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    function Ce(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    function De(a, b) {
        if ("textContent"in a)
            a.textContent = b;
        else if (3 == a.nodeType)
            a.data = String(b);
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
            for (; a.lastChild != a.firstChild; )
                a.removeChild(a.lastChild);
            a.firstChild.data = String(b)
        } else
            ye(a),
            a.appendChild(Ce(a).createTextNode(String(b)))
    }
    var Ee = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    }
      , Fe = {
        IMG: " ",
        BR: "\n"
    };
    function Ge(a, b, c) {
        if (!(a.nodeName in Ee))
            if (3 == a.nodeType)
                c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Fe)
                b.push(Fe[a.nodeName]);
            else
                for (a = a.firstChild; a; )
                    Ge(a, b, c),
                    a = a.nextSibling
    }
    function xe(a) {
        if (a && typeof a.length == ib) {
            if (Wb(a))
                return typeof a.item == k || typeof a.item == rb;
            if (Vb(a))
                return typeof a.item == k
        }
        return !1
    }
    function He(a, b, c, d) {
        if (!b && !c)
            return null;
        var e = b ? String(b).toUpperCase() : null;
        return Ie(a, function(a) {
            return (!e || a.nodeName == e) && (!c || u(a.className) && lc(a.className.split(/\s+/), c))
        }, d)
    }
    function Ie(a, b, c) {
        for (var d = 0; a && (null == c || d <= c); ) {
            if (b(a))
                return a;
            a = a.parentNode;
            d++
        }
        return null
    }
    function Je() {
        this.D = r.document || document
    }
    Je.prototype.Oa = function() {
        return u(void 0) ? this.D.getElementById(void 0) : void 0
    }
    ;
    Je.prototype.C = function(a, b, c) {
        return ve(this.D, arguments)
    }
    ;
    Je.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    }
    ;
    function Ke() {
        this.J = this.J;
        this.Z = this.Z
    }
    Ke.prototype.J = !1;
    Ke.prototype.wa = function() {
        this.J || (this.J = !0,
        this.aa())
    }
    ;
    Ke.prototype.aa = function() {
        if (this.Z)
            for (; this.Z.length; )
                this.Z.shift()()
    }
    ;
    var Le = !H.R || H.ib(9)
      , Me = H.R && !H.oa("9")
      , Ne = function() {
        if (!r.addEventListener || !Object.defineProperty)
            return !1;
        var a = !1
          , b = Object.defineProperty({}, "passive", {
            get: function() {
                a = !0
            }
        });
        try {
            r.addEventListener("test", Rb, b),
            r.removeEventListener("test", Rb, b)
        } catch (c) {}
        return a
    }();
    function Oe(a, b) {
        this.type = a;
        this.currentTarget = this.target = b;
        this.defaultPrevented = this.xa = !1;
        this.Vc = !0
    }
    Oe.prototype.stopPropagation = function() {
        this.xa = !0
    }
    ;
    Oe.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Vc = !1
    }
    ;
    function Pe(a, b) {
        Oe.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.clientY = this.clientX = 0;
        this.key = "";
        this.keyCode = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.C = null;
        if (a) {
            var c = this.type = a.type
              , d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
            this.target = a.target || a.srcElement;
            this.currentTarget = b;
            if (b = a.relatedTarget) {
                if (H.qb) {
                    a: {
                        try {
                            kd(b.nodeName);
                            var e = !0;
                            break a
                        } catch (f) {}
                        e = !1
                    }
                    e || (b = null)
                }
            } else
                "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
            this.relatedTarget = b;
            d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX,
            this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX,
            this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY);
            this.keyCode = a.keyCode || 0;
            this.key = a.key || "";
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.C = a;
            a.defaultPrevented && this.preventDefault()
        }
    }
    z(Pe, Oe);
    Pe.prototype.stopPropagation = function() {
        Pe.O.stopPropagation.call(this);
        this.C.stopPropagation ? this.C.stopPropagation() : this.C.cancelBubble = !0
    }
    ;
    Pe.prototype.preventDefault = function() {
        Pe.O.preventDefault.call(this);
        var a = this.C;
        if (a.preventDefault)
            a.preventDefault();
        else if (a.returnValue = !1,
        Me)
            try {
                if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
                    a.keyCode = -1
            } catch (b) {}
    }
    ;
    var Qe = "closure_listenable_" + (1E6 * Math.random() | 0);
    function Re(a) {
        return !(!a || !a[Qe])
    }
    var Se = 0;
    function Te(a, b, c, d, e) {
        this.listener = a;
        this.C = null;
        this.src = b;
        this.type = c;
        this.capture = !!d;
        this.hb = e;
        this.key = ++Se;
        this.Ia = this.$a = !1
    }
    function Ue(a) {
        a.Ia = !0;
        a.listener = null;
        a.C = null;
        a.src = null;
        a.hb = null
    }
    ;function Ve(a) {
        this.src = a;
        this.C = {};
        this.D = 0
    }
    Ve.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.C[f];
        a || (a = this.C[f] = [],
        this.D++);
        var h = We(a, b, d, e);
        -1 < h ? (b = a[h],
        c || (b.$a = !1)) : (b = new Te(b,this.src,f,!!d,e),
        b.$a = c,
        a.push(b));
        return b
    }
    ;
    function Xe(a, b) {
        var c = b.type;
        if (!(c in a.C))
            return !1;
        var d = nc(a.C[c], b);
        d && (Ue(b),
        0 == a.C[c].length && (delete a.C[c],
        a.D--));
        return d
    }
    function Ye(a) {
        var b = 0, c;
        for (c in a.C) {
            for (var d = a.C[c], e = 0; e < d.length; e++)
                ++b,
                Ue(d[e]);
            delete a.C[c];
            a.D--
        }
    }
    function Ze(a, b, c, d, e) {
        a = a.C[b.toString()];
        b = -1;
        a && (b = We(a, c, d, e));
        return -1 < b ? a[b] : null
    }
    function We(a, b, c, d) {
        for (var e = 0; e < a.length; ++e) {
            var f = a[e];
            if (!f.Ia && f.listener == b && f.capture == !!c && f.hb == d)
                return e
        }
        return -1
    }
    ;var $e = "closure_lm_" + (1E6 * Math.random() | 0)
      , af = {}
      , bf = 0;
    function L(a, b, c, d, e) {
        if (d && d.once)
            return ef(a, b, c, d, e);
        if (v(b)) {
            for (var f = 0; f < b.length; f++)
                L(a, b[f], c, d, e);
            return null
        }
        c = ff(c);
        return Re(a) ? a.ha.add(String(b), c, !1, Wb(d) ? !!d.capture : !!d, e) : gf(a, b, c, !1, d, e)
    }
    function gf(a, b, c, d, e, f) {
        if (!b)
            throw Error("Invalid event type");
        var h = Wb(e) ? !!e.capture : !!e
          , n = hf(a);
        n || (a[$e] = n = new Ve(a));
        c = n.add(b, c, d, h, f);
        if (c.C)
            return c;
        d = jf();
        c.C = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener)
            Ne || (e = h),
            void 0 === e && (e = !1),
            a.addEventListener(b.toString(), d, e);
        else if (a.attachEvent)
            a.attachEvent(kf(b.toString()), d);
        else if (a.addListener && a.removeListener)
            a.addListener(d);
        else
            throw Error("addEventListener and attachEvent are unavailable.");
        bf++;
        return c
    }
    function jf() {
        var a = lf
          , b = Le ? function(c) {
            return a.call(b.src, b.listener, c)
        }
        : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c)
                return c
        }
        ;
        return b
    }
    function ef(a, b, c, d, e) {
        if (v(b)) {
            for (var f = 0; f < b.length; f++)
                ef(a, b[f], c, d, e);
            return null
        }
        c = ff(c);
        return Re(a) ? a.ha.add(String(b), c, !0, Wb(d) ? !!d.capture : !!d, e) : gf(a, b, c, !0, d, e)
    }
    function mf(a, b, c, d, e) {
        if (v(b))
            for (var f = 0; f < b.length; f++)
                mf(a, b[f], c, d, e);
        else
            d = Wb(d) ? !!d.capture : !!d,
            c = ff(c),
            Re(a) ? (a = a.ha,
            b = String(b).toString(),
            b in a.C && (f = a.C[b],
            c = We(f, c, d, e),
            -1 < c && (Ue(f[c]),
            Array.prototype.splice.call(f, c, 1),
            0 == f.length && (delete a.C[b],
            a.D--)))) : a && (a = hf(a)) && (c = Ze(a, b, c, d, e)) && nf(c)
    }
    function nf(a) {
        if (typeof a == ib || !a || a.Ia)
            return !1;
        var b = a.src;
        if (Re(b))
            return Xe(b.ha, a);
        var c = a.type
          , d = a.C;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(kf(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        bf--;
        (c = hf(b)) ? (Xe(c, a),
        0 == c.D && (c.src = null,
        b[$e] = null)) : Ue(a);
        return !0
    }
    function of(a) {
        if (a)
            if (Re(a))
                a.ha && Ye(a.ha);
            else if (a = hf(a)) {
                var b = 0, c;
                for (c in a.C)
                    for (var d = a.C[c].concat(), e = 0; e < d.length; ++e)
                        nf(d[e]) && ++b
            }
    }
    function kf(a) {
        return a in af ? af[a] : af[a] = "on" + a
    }
    function pf(a, b, c, d) {
        var e = !0;
        if (a = hf(a))
            if (b = a.C[b.toString()])
                for (b = b.concat(),
                a = 0; a < b.length; a++) {
                    var f = b[a];
                    f && f.capture == c && !f.Ia && (f = qf(f, d),
                    e = e && !1 !== f)
                }
        return e
    }
    function qf(a, b) {
        var c = a.listener
          , d = a.hb || a.src;
        a.$a && nf(a);
        return c.call(d, b)
    }
    function lf(a, b) {
        if (a.Ia)
            return !0;
        if (!Le) {
            if (!b)
                a: {
                    b = ["window", "event"];
                    for (var c = r, d = 0; d < b.length; d++)
                        if (c = c[b[d]],
                        null == c) {
                            b = null;
                            break a
                        }
                    b = c
                }
            d = b;
            b = new Pe(d,this);
            c = !0;
            if (!(0 > d.keyCode || void 0 != d.returnValue)) {
                a: {
                    var e = !1;
                    if (0 == d.keyCode)
                        try {
                            d.keyCode = -1;
                            break a
                        } catch (h) {
                            e = !0
                        }
                    if (e || void 0 == d.returnValue)
                        d.returnValue = !0
                }
                d = [];
                for (e = b.currentTarget; e; e = e.parentNode)
                    d.push(e);
                a = a.type;
                for (e = d.length - 1; !b.xa && 0 <= e; e--) {
                    b.currentTarget = d[e];
                    var f = pf(d[e], a, !0, b);
                    c = c && f
                }
                for (e = 0; !b.xa && e < d.length; e++)
                    b.currentTarget = d[e],
                    f = pf(d[e], a, !1, b),
                    c = c && f
            }
            return c
        }
        return qf(a, new Pe(b,this))
    }
    function hf(a) {
        a = a[$e];
        return a instanceof Ve ? a : null
    }
    var rf = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    function ff(a) {
        if (Vb(a))
            return a;
        a[rf] || (a[rf] = function(b) {
            return a.handleEvent(b)
        }
        );
        return a[rf]
    }
    ;function sf(a, b) {
        this.F = a;
        this.G = b;
        this.D = 0;
        this.C = null
    }
    sf.prototype.get = function() {
        if (0 < this.D) {
            this.D--;
            var a = this.C;
            this.C = a.next;
            a.next = null
        } else
            a = this.F();
        return a
    }
    ;
    function tf(a, b) {
        a.G(b);
        100 > a.D && (a.D++,
        b.next = a.C,
        a.C = b)
    }
    ;function uf(a) {
        r.setTimeout(function() {
            throw a;
        }, 0)
    }
    var vf;
    function wf() {
        var a = r.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !G("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = l;
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow;
            a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host;
            a = x(function(a) {
                if (("*" == d || a.origin == d) && a.data == c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, d)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !G("Trident") && !G("MSIE")) {
            var b = new a
              , c = {}
              , d = c;
            b.port1.onmessage = function() {
                if (t(c.next)) {
                    c = c.next;
                    var a = c.dc;
                    c.dc = null;
                    a()
                }
            }
            ;
            return function(a) {
                d.next = {
                    dc: a
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange"in document.createElement(ia) ? function(a) {
            var b = document.createElement(ia);
            b.onreadystatechange = function() {
                b.onreadystatechange = null;
                b.parentNode.removeChild(b);
                b = null;
                a();
                a = null
            }
            ;
            document.documentElement.appendChild(b)
        }
        : function(a) {
            r.setTimeout(a, 0)
        }
    }
    ;function xf() {
        this.D = this.C = null
    }
    var zf = new sf(function() {
        return new yf
    }
    ,function(a) {
        a.reset()
    }
    );
    xf.prototype.add = function(a, b) {
        var c = zf.get();
        c.set(a, b);
        this.D ? this.D.next = c : this.C = c;
        this.D = c
    }
    ;
    function Af() {
        var a = Bf
          , b = null;
        a.C && (b = a.C,
        a.C = a.C.next,
        a.C || (a.D = null),
        b.next = null);
        return b
    }
    function yf() {
        this.next = this.D = this.C = null
    }
    yf.prototype.set = function(a, b) {
        this.C = a;
        this.D = b;
        this.next = null
    }
    ;
    yf.prototype.reset = function() {
        this.next = this.D = this.C = null
    }
    ;
    function Cf(a, b) {
        Df || Ef();
        Ff || (Df(),
        Ff = !0);
        Bf.add(a, b)
    }
    var Df;
    function Ef() {
        if (r.Promise && r.Promise.resolve) {
            var a = r.Promise.resolve(void 0);
            Df = function() {
                a.then(Gf)
            }
        } else
            Df = function() {
                var a = Gf;
                !Vb(r.setImmediate) || r.Window && r.Window.prototype && !G(ea) && r.Window.prototype.setImmediate == r.setImmediate ? (vf || (vf = wf()),
                vf(a)) : r.setImmediate(a)
            }
    }
    var Ff = !1
      , Bf = new xf;
    function Gf() {
        for (var a; a = Af(); ) {
            try {
                a.C.call(a.D)
            } catch (b) {
                uf(b)
            }
            tf(zf, a)
        }
        Ff = !1
    }
    ;function M() {
        Ke.call(this);
        this.ha = new Ve(this);
        this.Ta = this;
        this.$ = null
    }
    z(M, Ke);
    M.prototype[Qe] = !0;
    M.prototype.Nb = function(a) {
        this.$ = a
    }
    ;
    M.prototype.addEventListener = function(a, b, c, d) {
        L(this, a, b, c, d)
    }
    ;
    M.prototype.removeEventListener = function(a, b, c, d) {
        mf(this, a, b, c, d)
    }
    ;
    function N(a, b) {
        var c = a.$;
        if (c) {
            var d = [];
            for (var e = 1; c; c = c.$)
                d.push(c),
                ++e
        }
        a = a.Ta;
        c = b.type || b;
        u(b) ? b = new Oe(b,a) : b instanceof Oe ? b.target = b.target || a : (e = b,
        b = new Oe(c,a),
        $c(b, e));
        e = !0;
        if (d)
            for (var f = d.length - 1; !b.xa && 0 <= f; f--) {
                var h = b.currentTarget = d[f];
                e = Hf(h, c, !0, b) && e
            }
        b.xa || (h = b.currentTarget = a,
        e = Hf(h, c, !0, b) && e,
        b.xa || (e = Hf(h, c, !1, b) && e));
        if (d)
            for (f = 0; !b.xa && f < d.length; f++)
                h = b.currentTarget = d[f],
                e = Hf(h, c, !1, b) && e
    }
    M.prototype.aa = function() {
        M.O.aa.call(this);
        this.ha && Ye(this.ha);
        this.$ = null
    }
    ;
    function Hf(a, b, c, d) {
        b = a.ha.C[String(b)];
        if (!b)
            return !0;
        b = b.concat();
        for (var e = !0, f = 0; f < b.length; ++f) {
            var h = b[f];
            if (h && !h.Ia && h.capture == c) {
                var n = h.listener
                  , q = h.hb || h.src;
                h.$a && Xe(a.ha, h);
                e = !1 !== n.call(q, d) && e
            }
        }
        return e && 0 != d.Vc
    }
    ;function If(a) {
        Jf();
        return Dd(a)
    }
    var Jf = Rb;
    function Kf(a) {
        if (!a)
            return !1;
        try {
            return !!a.$goog_Thenable
        } catch (b) {
            return !1
        }
    }
    ;function Lf(a) {
        this.C = 0;
        this.L = void 0;
        this.G = this.D = this.F = null;
        this.J = this.K = !1;
        if (a != Rb)
            try {
                var b = this;
                a.call(void 0, function(a) {
                    Mf(b, 2, a)
                }, function(a) {
                    Mf(b, 3, a)
                })
            } catch (c) {
                Mf(this, 3, c)
            }
    }
    function Nf() {
        this.next = this.F = this.D = this.G = this.C = null;
        this.J = !1
    }
    Nf.prototype.reset = function() {
        this.F = this.D = this.G = this.C = null;
        this.J = !1
    }
    ;
    var Of = new sf(function() {
        return new Nf
    }
    ,function(a) {
        a.reset()
    }
    );
    function Pf(a, b, c) {
        var d = Of.get();
        d.G = a;
        d.D = b;
        d.F = c;
        return d
    }
    Lf.prototype.then = function(a, b, c) {
        return Qf(this, Vb(a) ? a : null, Vb(b) ? b : null, c)
    }
    ;
    Lf.prototype.$goog_Thenable = !0;
    Lf.prototype.cancel = function(a) {
        0 == this.C && Cf(function() {
            var b = new Rf(a);
            Sf(this, b)
        }, this)
    }
    ;
    function Sf(a, b) {
        if (0 == a.C)
            if (a.F) {
                var c = a.F;
                if (c.D) {
                    for (var d = 0, e = null, f = null, h = c.D; h && (h.J || (d++,
                    h.C == a && (e = h),
                    !(e && 1 < d))); h = h.next)
                        e || (f = h);
                    e && (0 == c.C && 1 == d ? Sf(c, b) : (f ? (d = f,
                    d.next == c.G && (c.G = d),
                    d.next = d.next.next) : Tf(c),
                    Uf(c, e, 3, b)))
                }
                a.F = null
            } else
                Mf(a, 3, b)
    }
    function Vf(a, b) {
        a.D || 2 != a.C && 3 != a.C || Wf(a);
        a.G ? a.G.next = b : a.D = b;
        a.G = b
    }
    function Qf(a, b, c, d) {
        var e = Pf(null, null, null);
        e.C = new Lf(function(a, h) {
            e.G = b ? function(c) {
                try {
                    var e = b.call(d, c);
                    a(e)
                } catch (w) {
                    h(w)
                }
            }
            : a;
            e.D = c ? function(b) {
                try {
                    var e = c.call(d, b);
                    !t(e) && b instanceof Rf ? h(b) : a(e)
                } catch (w) {
                    h(w)
                }
            }
            : h
        }
        );
        e.C.F = a;
        Vf(a, e);
        return e.C
    }
    Lf.prototype.N = function(a) {
        this.C = 0;
        Mf(this, 2, a)
    }
    ;
    Lf.prototype.T = function(a) {
        this.C = 0;
        Mf(this, 3, a)
    }
    ;
    function Mf(a, b, c) {
        if (0 == a.C) {
            a === c && (b = 3,
            c = new TypeError("Promise cannot resolve to itself"));
            a.C = 1;
            a: {
                var d = c
                  , e = a.N
                  , f = a.T;
                if (d instanceof Lf) {
                    Vf(d, Pf(e || Rb, f || null, a));
                    var h = !0
                } else if (Kf(d))
                    d.then(e, f, a),
                    h = !0;
                else {
                    if (Wb(d))
                        try {
                            var n = d.then;
                            if (Vb(n)) {
                                Xf(d, n, e, f, a);
                                h = !0;
                                break a
                            }
                        } catch (q) {
                            f.call(a, q);
                            h = !0;
                            break a
                        }
                    h = !1
                }
            }
            h || (a.L = c,
            a.C = b,
            a.F = null,
            Wf(a),
            3 != b || c instanceof Rf || Yf(a, c))
        }
    }
    function Xf(a, b, c, d, e) {
        function f(a) {
            n || (n = !0,
            d.call(e, a))
        }
        function h(a) {
            n || (n = !0,
            c.call(e, a))
        }
        var n = !1;
        try {
            b.call(a, h, f)
        } catch (q) {
            f(q)
        }
    }
    function Wf(a) {
        a.K || (a.K = !0,
        Cf(a.M, a))
    }
    function Tf(a) {
        var b = null;
        a.D && (b = a.D,
        a.D = b.next,
        b.next = null);
        a.D || (a.G = null);
        return b
    }
    Lf.prototype.M = function() {
        for (var a; a = Tf(this); )
            Uf(this, a, this.C, this.L);
        this.K = !1
    }
    ;
    function Uf(a, b, c, d) {
        if (3 == c && b.D && !b.J)
            for (; a && a.J; a = a.F)
                a.J = !1;
        if (b.C)
            b.C.F = null,
            Zf(b, c, d);
        else
            try {
                b.J ? b.G.call(b.F) : Zf(b, c, d)
            } catch (e) {
                $f.call(null, e)
            }
        tf(Of, b)
    }
    function Zf(a, b, c) {
        2 == b ? a.G.call(a.F, c) : a.D && a.D.call(a.F, c)
    }
    function Yf(a, b) {
        a.J = !0;
        Cf(function() {
            a.J && $f.call(null, b)
        })
    }
    var $f = uf;
    function Rf(a) {
        cc.call(this, a)
    }
    z(Rf, cc);
    Rf.prototype.name = "cancel";
    function ag(a, b) {
        M.call(this);
        this.D = a || 1;
        this.C = b || r;
        this.F = x(this.Oh, this);
        this.G = bc()
    }
    z(ag, M);
    p = ag.prototype;
    p.fb = !1;
    p.qa = null;
    p.Oh = function() {
        if (this.fb) {
            var a = bc() - this.G;
            0 < a && a < .8 * this.D ? this.qa = this.C.setTimeout(this.F, this.D - a) : (this.qa && (this.C.clearTimeout(this.qa),
            this.qa = null),
            N(this, "tick"),
            this.fb && (bg(this),
            this.start()))
        }
    }
    ;
    p.start = function() {
        this.fb = !0;
        this.qa || (this.qa = this.C.setTimeout(this.F, this.D),
        this.G = bc())
    }
    ;
    function bg(a) {
        a.fb = !1;
        a.qa && (a.C.clearTimeout(a.qa),
        a.qa = null)
    }
    p.aa = function() {
        ag.O.aa.call(this);
        bg(this);
        delete this.C
    }
    ;
    function cg(a, b, c) {
        if (Vb(a))
            c && (a = x(a, c));
        else if (a && typeof a.handleEvent == k)
            a = x(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : r.setTimeout(a, b || 0)
    }
    ;function dg() {
        this.K = {};
        this.C = {};
        this.F = {};
        this.G = null;
        this.D = []
    }
    Sb(dg);
    function eg(a) {
        var b = dg.Ha()
          , c = b.K
          , d = b.C;
        d.lightbox ? a(d.lightbox[1]) : c.lightbox ? c.lightbox.push([1, a]) : (c.lightbox = [[1, a]],
        u(b.G) ? fg(b, "lightbox") : b.D.push("lightbox"))
    }
    function gg() {
        return function() {
            var a = arguments;
            eg(function(b) {
                b.apply(null, a)
            })
        }
    }
    dg.prototype.J = function(a, b) {
        return a + "_" + b + ".js"
    }
    ;
    function hg(a) {
        eval(a)
    }
    function ig(a, b, c) {
        y("__gjsload__", hg);
        a.G = b.replace(/\.js$/, "");
        c && (a.J = c);
        A(a.D, function(a) {
            fg(this, a)
        }, a);
        mc(a.D)
    }
    function fg(a, b) {
        cg(function() {
            if (!this.C[b]) {
                var a = this.J(this.G, b)
                  , d = Wc(this.F, a);
                this.F[b] = a;
                d || (d = ue(ia, {
                    type: ub
                }),
                me(d, If(a)),
                document.body.appendChild(d))
            }
        }, 0, a)
    }
    ;function jg(a) {
        Ke.call(this);
        this.D = a;
        this.C = {}
    }
    z(jg, Ke);
    var kg = [];
    function lg(a, b, c, d) {
        v(c) || (c && (kg[0] = c.toString()),
        c = kg);
        for (var e = 0; e < c.length; e++) {
            var f = L(b, c[e], d || a.handleEvent, !1, a.D || a);
            if (!f)
                break;
            a.C[f.key] = f
        }
    }
    function mg(a, b, c, d, e, f) {
        if (v(c))
            for (var h = 0; h < c.length; h++)
                mg(a, b, c[h], d, e, f);
        else
            d = d || a.handleEvent,
            e = Wb(e) ? !!e.capture : !!e,
            f = f || a.D || a,
            d = ff(d),
            e = !!e,
            c = Re(b) ? Ze(b.ha, String(c), d, e, f) : b ? (b = hf(b)) ? Ze(b, c, d, e, f) : null : null,
            c && (nf(c),
            delete a.C[c.key])
    }
    function ng(a) {
        Tc(a.C, function(a, c) {
            this.C.hasOwnProperty(c) && nf(a)
        }, a);
        a.C = {}
    }
    jg.prototype.aa = function() {
        jg.O.aa.call(this);
        ng(this)
    }
    ;
    jg.prototype.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    }
    ;
    function og(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }
    function pg(a) {
        a = String(a);
        if (og(a))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    ;function qg() {}
    qg.prototype.C = null;
    function rg(a) {
        var b;
        (b = a.C) || (b = {},
        sg(a) && (b[0] = !0,
        b[1] = !0),
        b = a.C = b);
        return b
    }
    ;var tg;
    function ug() {}
    z(ug, qg);
    function vg(a) {
        return (a = sg(a)) ? new ActiveXObject(a) : new XMLHttpRequest
    }
    function sg(a) {
        if (!a.D && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
            for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                var d = b[c];
                try {
                    return new ActiveXObject(d),
                    a.D = d
                } catch (e) {}
            }
            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
        }
        return a.D
    }
    tg = new ug;
    function wg(a, b) {
        this.D = {};
        this.C = [];
        this.F = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2)
                this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof wg)
                for (c = a.ia(),
                d = 0; d < c.length; d++)
                    this.set(c[d], a.get(c[d]));
            else
                for (d in a)
                    this.set(d, a[d])
    }
    p = wg.prototype;
    p.X = m("F");
    p.ca = function() {
        xg(this);
        for (var a = [], b = 0; b < this.C.length; b++)
            a.push(this.D[this.C[b]]);
        return a
    }
    ;
    p.ia = function() {
        xg(this);
        return this.C.concat()
    }
    ;
    p.ja = function() {
        return 0 == this.F
    }
    ;
    function yg(a, b) {
        return zg(a.D, b) ? (delete a.D[b],
        a.F--,
        a.C.length > 2 * a.F && xg(a),
        !0) : !1
    }
    function xg(a) {
        if (a.F != a.C.length) {
            for (var b = 0, c = 0; b < a.C.length; ) {
                var d = a.C[b];
                zg(a.D, d) && (a.C[c++] = d);
                b++
            }
            a.C.length = c
        }
        if (a.F != a.C.length) {
            var e = {};
            for (c = b = 0; b < a.C.length; )
                d = a.C[b],
                zg(e, d) || (a.C[c++] = d,
                e[d] = 1),
                b++;
            a.C.length = c
        }
    }
    p.get = function(a, b) {
        return zg(this.D, a) ? this.D[a] : b
    }
    ;
    p.set = function(a, b) {
        zg(this.D, a) || (this.F++,
        this.C.push(a));
        this.D[a] = b
    }
    ;
    p.forEach = function(a, b) {
        for (var c = this.ia(), d = 0; d < c.length; d++) {
            var e = c[d]
              , f = this.get(e);
            a.call(b, f, e, this)
        }
    }
    ;
    function zg(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function Ag(a) {
        if (a.ca && typeof a.ca == k)
            return a.ca();
        if (u(a))
            return a.split("");
        if (Ub(a)) {
            for (var b = [], c = a.length, d = 0; d < c; d++)
                b.push(a[d]);
            return b
        }
        return Uc(a)
    }
    function Bg(a, b) {
        if (a.forEach && typeof a.forEach == k)
            a.forEach(b, void 0);
        else if (Ub(a) || u(a))
            A(a, b, void 0);
        else {
            if (a.ia && typeof a.ia == k)
                var c = a.ia();
            else if (a.ca && typeof a.ca == k)
                c = void 0;
            else if (Ub(a) || u(a)) {
                c = [];
                for (var d = a.length, e = 0; e < d; e++)
                    c.push(e)
            } else
                c = Vc(a);
            d = Ag(a);
            e = d.length;
            for (var f = 0; f < e; f++)
                b.call(void 0, d[f], c && c[f], a)
        }
    }
    ;var Cg = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
    function Dg(a, b) {
        if (a) {
            a = a.split("&");
            for (var c = 0; c < a.length; c++) {
                var d = a[c].indexOf("=")
                  , e = null;
                if (0 <= d) {
                    var f = a[c].substring(0, d);
                    e = a[c].substring(d + 1)
                } else
                    f = a[c];
                b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
            }
        }
    }
    ;function Eg(a) {
        M.call(this);
        this.headers = new wg;
        this.fa = a || null;
        this.D = !1;
        this.da = this.C = null;
        this.Fa = "";
        this.K = 0;
        this.G = this.Ea = this.T = this.ma = !1;
        this.N = 0;
        this.W = null;
        this.M = "";
        this.za = this.L = !1
    }
    z(Eg, M);
    var Fg = /^https?$/i
      , Gg = ["POST", "PUT"]
      , Hg = [];
    function Ig(a, b, c, d) {
        var e = new Eg;
        Hg.push(e);
        b && e.ha.add(Ca, b, !1, void 0, void 0);
        e.ha.add(kb, e.Nd, !0, void 0, void 0);
        Jg(e, a, c, d, void 0)
    }
    p = Eg.prototype;
    p.Nd = function() {
        this.wa();
        nc(Hg, this)
    }
    ;
    p.xc = m("M");
    p.Ec = m("L");
    function Jg(a, b, c, d, e) {
        if (a.C)
            throw Error("[goog.net.XhrIo] Object is active with another request=" + a.Fa + "; newUri=" + b);
        c = c ? c.toUpperCase() : ha;
        a.Fa = b;
        a.K = 0;
        a.ma = !1;
        a.D = !0;
        a.C = a.fa ? vg(a.fa) : vg(tg);
        a.da = a.fa ? rg(a.fa) : rg(tg);
        a.C.onreadystatechange = x(a.Hc, a);
        try {
            a.Ea = !0,
            a.C.open(c, String(b), !0),
            a.Ea = !1
        } catch (h) {
            Kg(a);
            return
        }
        b = d || "";
        var f = new wg(a.headers);
        e && Bg(e, function(a, b) {
            f.set(b, a)
        });
        e = jc(f.ia());
        d = r.FormData && b instanceof r.FormData;
        !lc(Gg, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.C.setRequestHeader(b, a)
        }, a);
        a.M && (a.C.responseType = a.M);
        "withCredentials"in a.C && a.C.withCredentials !== a.L && (a.C.withCredentials = a.L);
        try {
            Lg(a),
            0 < a.N && (a.za = Mg(a.C),
            a.za ? (a.C.timeout = a.N,
            a.C.ontimeout = x(a.ua, a)) : a.W = cg(a.ua, a.N, a)),
            a.T = !0,
            a.C.send(b),
            a.T = !1
        } catch (h) {
            Kg(a)
        }
    }
    function Mg(a) {
        return H.R && H.oa(9) && typeof a.timeout == ib && t(a.ontimeout)
    }
    function kc(a) {
        return "content-type" == a.toLowerCase()
    }
    p.ua = function() {
        "undefined" != typeof Ob && this.C && (this.K = 8,
        N(this, "timeout"),
        this.abort(8))
    }
    ;
    function Kg(a) {
        a.D = !1;
        a.C && (a.G = !0,
        a.C.abort(),
        a.G = !1);
        a.K = 5;
        Ng(a);
        Og(a)
    }
    function Ng(a) {
        a.ma || (a.ma = !0,
        N(a, Ca),
        N(a, Ua))
    }
    p.abort = function(a) {
        this.C && this.D && (this.D = !1,
        this.G = !0,
        this.C.abort(),
        this.G = !1,
        this.K = a || 7,
        N(this, Ca),
        N(this, "abort"),
        Og(this))
    }
    ;
    p.aa = function() {
        this.C && (this.D && (this.D = !1,
        this.G = !0,
        this.C.abort(),
        this.G = !1),
        Og(this, !0));
        Eg.O.aa.call(this)
    }
    ;
    p.Hc = function() {
        this.J || (this.Ea || this.T || this.G ? Pg(this) : this.Tf())
    }
    ;
    p.Tf = function() {
        Pg(this)
    }
    ;
    function Pg(a) {
        if (a.D && "undefined" != typeof Ob && (!a.da[1] || 4 != (a.C ? a.C.readyState : 0) || 2 != Qg(a)))
            if (a.T && 4 == (a.C ? a.C.readyState : 0))
                cg(a.Hc, 0, a);
            else if (N(a, "readystatechange"),
            4 == (a.C ? a.C.readyState : 0)) {
                a.D = !1;
                try {
                    Rg(a) ? (N(a, Ca),
                    N(a, tb)) : (a.K = 6,
                    Ng(a))
                } finally {
                    Og(a)
                }
            }
    }
    function Og(a, b) {
        if (a.C) {
            Lg(a);
            var c = a.C
              , d = a.da[0] ? Rb : null;
            a.C = null;
            a.da = null;
            b || N(a, kb);
            try {
                c.onreadystatechange = d
            } catch (e) {}
        }
    }
    function Lg(a) {
        a.C && a.za && (a.C.ontimeout = null);
        a.W && (r.clearTimeout(a.W),
        a.W = null)
    }
    function Rg(a) {
        var b = Qg(a);
        a: switch (b) {
        case 200:
        case 201:
        case 202:
        case 204:
        case 206:
        case 304:
        case 1223:
            var c = !0;
            break a;
        default:
            c = !1
        }
        if (!c) {
            if (b = 0 === b)
                a = String(a.Fa).match(Cg)[1] || null,
                !a && r.self && r.self.location && (a = r.self.location.protocol,
                a = a.substr(0, a.length - 1)),
                b = !Fg.test(a ? a.toLowerCase() : "");
            c = b
        }
        return c
    }
    function Qg(a) {
        try {
            return 2 < (a.C ? a.C.readyState : 0) ? a.C.status : -1
        } catch (b) {
            return -1
        }
    }
    function Sg(a) {
        try {
            return a.C ? a.C.responseText : ""
        } catch (b) {
            return ""
        }
    }
    ;function Tg() {
        this.D = [];
        this.C = []
    }
    function Ug(a) {
        0 == a.D.length && (a.D = a.C,
        a.D.reverse(),
        a.C = []);
        return a.D.pop()
    }
    Tg.prototype.X = function() {
        return this.D.length + this.C.length
    }
    ;
    Tg.prototype.ja = function() {
        return 0 == this.D.length && 0 == this.C.length
    }
    ;
    Tg.prototype.ca = function() {
        for (var a = [], b = this.D.length - 1; 0 <= b; --b)
            a.push(this.D[b]);
        var c = this.C.length;
        for (b = 0; b < c; ++b)
            a.push(this.C[b]);
        return a
    }
    ;
    function Vg() {
        this.C = new wg
    }
    function Wg(a) {
        var b = typeof a;
        return b == jb && a || b == k ? "o" + (a[Xb] || (a[Xb] = ++Yb)) : b.substr(0, 1) + a
    }
    Vg.prototype.X = function() {
        return this.C.X()
    }
    ;
    Vg.prototype.add = function(a) {
        this.C.set(Wg(a), a)
    }
    ;
    Vg.prototype.ja = function() {
        return this.C.ja()
    }
    ;
    Vg.prototype.ca = function() {
        return this.C.ca()
    }
    ;
    function Xg(a, b) {
        Ke.call(this);
        this.M = a || 0;
        this.F = b || 10;
        if (this.M > this.F)
            throw Error("[goog.structs.Pool] Min can not be greater than max");
        this.C = new Tg;
        this.D = new Vg;
        this.delay = 0;
        this.K = null;
        this.Ua()
    }
    z(Xg, Ke);
    p = Xg.prototype;
    p.cb = function() {
        var a = bc();
        if (!(null != this.K && a - this.K < this.delay)) {
            for (var b; 0 < this.C.X() && (b = Ug(this.C),
            !this.Mb(b)); )
                this.Ua();
            !b && this.X() < this.F && (b = this.Db());
            b && (this.K = a,
            this.D.add(b));
            return b
        }
    }
    ;
    function Yg(a, b) {
        yg(a.D.C, Wg(b)) && a.rb(b)
    }
    p.rb = function(a) {
        yg(this.D.C, Wg(a));
        this.Mb(a) && this.X() < this.F ? this.C.C.push(a) : Zg(a)
    }
    ;
    p.Ua = function() {
        for (var a = this.C; this.X() < this.M; ) {
            var b = this.Db();
            a.C.push(b)
        }
        for (; this.X() > this.F && 0 < this.C.X(); )
            Zg(Ug(a))
    }
    ;
    p.Db = function() {
        return {}
    }
    ;
    function Zg(a) {
        if (typeof a.wa == k)
            a.wa();
        else
            for (var b in a)
                a[b] = null
    }
    p.Mb = function(a) {
        return typeof a.Md == k ? a.Md() : !0
    }
    ;
    p.X = function() {
        return this.C.X() + this.D.X()
    }
    ;
    p.ja = function() {
        return this.C.ja() && this.D.ja()
    }
    ;
    p.aa = function() {
        Xg.O.aa.call(this);
        if (0 < this.D.X())
            throw Error("[goog.structs.Pool] Objects not released");
        delete this.D;
        for (var a = this.C; !a.ja(); )
            Zg(Ug(a));
        delete this.C
    }
    ;
    function $g(a, b) {
        this.C = a;
        this.D = b
    }
    ;function ah(a) {
        this.C = [];
        if (a)
            a: {
                if (a instanceof ah) {
                    var b = a.ia();
                    a = a.ca();
                    if (0 >= this.X()) {
                        for (var c = this.C, d = 0; d < b.length; d++)
                            c.push(new $g(b[d],a[d]));
                        break a
                    }
                } else
                    b = Vc(a),
                    a = Uc(a);
                for (d = 0; d < b.length; d++)
                    bh(this, b[d], a[d])
            }
    }
    function bh(a, b, c) {
        var d = a.C;
        d.push(new $g(b,c));
        b = d.length - 1;
        a = a.C;
        for (c = a[b]; 0 < b; )
            if (d = b - 1 >> 1,
            a[d].C > c.C)
                a[b] = a[d],
                b = d;
            else
                break;
        a[b] = c
    }
    ah.prototype.ca = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].D);
        return b
    }
    ;
    ah.prototype.ia = function() {
        for (var a = this.C, b = [], c = a.length, d = 0; d < c; d++)
            b.push(a[d].C);
        return b
    }
    ;
    ah.prototype.X = function() {
        return this.C.length
    }
    ;
    ah.prototype.ja = function() {
        return 0 == this.C.length
    }
    ;
    function ch() {
        ah.call(this)
    }
    z(ch, ah);
    function dh(a, b) {
        this.L = void 0;
        this.G = new ch;
        Xg.call(this, a, b)
    }
    z(dh, Xg);
    p = dh.prototype;
    p.cb = function(a, b) {
        if (!a)
            return (a = dh.O.cb.call(this)) && this.delay && (this.L = r.setTimeout(x(this.gb, this), this.delay)),
            a;
        bh(this.G, t(b) ? b : 100, a);
        this.gb()
    }
    ;
    p.gb = function() {
        for (var a = this.G; 0 < a.X(); ) {
            var b = this.cb();
            if (b) {
                var c = a
                  , d = c.C
                  , e = d.length;
                var f = d[0];
                if (0 >= e)
                    f = void 0;
                else {
                    if (1 == e)
                        mc(d);
                    else {
                        d[0] = d.pop();
                        d = 0;
                        c = c.C;
                        e = c.length;
                        for (var h = c[d]; d < e >> 1; ) {
                            var n = 2 * d + 1
                              , q = 2 * d + 2;
                            n = q < e && c[q].C < c[n].C ? q : n;
                            if (c[n].C > h.C)
                                break;
                            c[d] = c[n];
                            d = n
                        }
                        c[d] = h
                    }
                    f = f.D
                }
                f.apply(this, [b])
            } else
                break
        }
    }
    ;
    p.rb = function(a) {
        dh.O.rb.call(this, a);
        this.gb()
    }
    ;
    p.Ua = function() {
        dh.O.Ua.call(this);
        this.gb()
    }
    ;
    p.aa = function() {
        dh.O.aa.call(this);
        r.clearTimeout(this.L);
        mc(this.G.C);
        this.G = null
    }
    ;
    function eh(a, b, c, d) {
        this.N = a;
        this.T = !!d;
        dh.call(this, b, c)
    }
    z(eh, dh);
    eh.prototype.Db = function() {
        var a = new Eg
          , b = this.N;
        b && b.forEach(function(b, d) {
            a.headers.set(d, b)
        });
        this.T && (a.L = !0);
        return a
    }
    ;
    eh.prototype.Mb = function(a) {
        return !a.J && !a.C
    }
    ;
    function fh(a, b, c, d, e, f) {
        M.call(this);
        this.G = t(a) ? a : 1;
        this.K = t(e) ? Math.max(0, e) : 0;
        this.L = !!f;
        this.D = new eh(b,c,d,f);
        this.C = new wg;
        this.F = new jg(this)
    }
    z(fh, M);
    var gh = [kb, Ca, tb, Ua, "abort", "timeout"];
    function hh(a, b, c, d, e, f) {
        if (a.C.get(b))
            throw Error("[goog.net.XhrManager] ID in use");
        c = new ih(c,x(a.N, a, b),d,e,f,t(void 0) ? void 0 : a.G,t(void 0) ? void 0 : a.L);
        a.C.set(b, c);
        b = x(a.M, a, b);
        a.D.cb(b, null)
    }
    fh.prototype.abort = function(a, b) {
        var c = this.C.get(a);
        if (c) {
            var d = c.kb;
            c.Zb = !0;
            b && (d && (mg(this.F, d, gh, c.Pb),
            ef(d, kb, function() {
                Yg(this.D, d)
            }, !1, this)),
            yg(this.C, a));
            d && d.abort()
        }
    }
    ;
    fh.prototype.M = function(a, b) {
        var c = this.C.get(a);
        c && !c.kb ? (lg(this.F, b, gh, c.Pb),
        b.N = Math.max(0, this.K),
        b.M = c.xc(),
        b.L = c.Ec(),
        c.kb = b,
        N(this, new jh(kb,this,a,b)),
        kh(this, a, b),
        c.Zb && b.abort()) : Yg(this.D, b)
    }
    ;
    fh.prototype.N = function(a, b) {
        var c = b.target;
        switch (b.type) {
        case kb:
            kh(this, a, c);
            break;
        case Ca:
            a: {
                var d = this.C.get(a);
                if (7 == c.K || Rg(c) || d.Xa > d.Ib)
                    if (N(this, new jh(Ca,this,a,c)),
                    d && (d.gc = !0,
                    d.fc)) {
                        a = d.fc.call(c, b);
                        break a
                    }
                a = null
            }
            return a;
        case tb:
            N(this, new jh(tb,this,a,c));
            break;
        case "timeout":
        case Ua:
            b = this.C.get(a);
            b.Xa > b.Ib && N(this, new jh(Ua,this,a,c));
            break;
        case "abort":
            N(this, new jh("abort",this,a,c))
        }
        return null
    }
    ;
    function kh(a, b, c) {
        var d = a.C.get(b);
        !d || d.gc || d.Xa > d.Ib ? (d && (mg(a.F, c, gh, d.Pb),
        yg(a.C, b)),
        Yg(a.D, c)) : (d.Xa++,
        Jg(c, d.xf, d.Pf, d.bb(), d.wf))
    }
    fh.prototype.aa = function() {
        fh.O.aa.call(this);
        this.D.wa();
        this.D = null;
        this.F.wa();
        this.F = null;
        var a = this.C;
        a.D = {};
        a.C.length = 0;
        a.F = 0;
        this.C = null
    }
    ;
    function jh(a, b, c, d) {
        Oe.call(this, a, b);
        this.id = c;
        this.kb = d
    }
    z(jh, Oe);
    function ih(a, b, c, d, e, f, h) {
        this.xf = a;
        this.Pf = c || ha;
        this.C = d;
        this.wf = null;
        this.Ib = t(f) ? f : 1;
        this.Xa = 0;
        this.Zb = this.gc = !1;
        this.Pb = b;
        this.fc = e;
        this.D = !!h;
        this.kb = null
    }
    ih.prototype.bb = m("C");
    ih.prototype.Ec = m("D");
    ih.prototype.xc = Eb("");
    function lh(a, b, c, d, e) {
        this.D = a;
        this.J = b;
        this.C = c || null;
        this.data = d || null;
        if (e) {
            if (this.F = e,
            "displayModeSnippet" != e && e != Qa && e != Ra && e != Sa)
                throw "bad display mode: " + e;
        } else
            this.F = Sa;
        this.G = !1
    }
    lh.prototype.K = m("D");
    function mh(a) {
        this.G = !0;
        this.V = a;
        this.D = null
    }
    function P(a, b) {
        return document.getElementById(a.V.D + "_" + b)
    }
    function nh(a, b) {
        a = P(a, b);
        if (!a)
            throw "did not find element for id " + b;
        return a
    }
    mh.prototype.Y = function() {
        return this.V.data
    }
    ;
    mh.prototype.F = function() {
        var a = {};
        a.type = this.D.Sa();
        a.instanceId = this.V.D;
        a.sectionId = this.V.J;
        a.actionUrl = C.Z;
        a.quickEditUrl = C.kc + "&widgetType=" + this.D.Sa() + "&widgetId=" + this.V.D + "&sectionId=" + this.V.J + aa + C.ma;
        return a
    }
    ;
    function oh(a, b, c, d, e) {
        c = c || {};
        window.__wavt && (c.xssi_token = window.__wavt);
        C.ud(b, c, a.V.D, a.D.Sa(), d, e)
    }
    function Bc(a) {
        var b = -1;
        try {
            b = a.status
        } catch (c) {}
        return b
    }
    function C() {}
    C.Sf = function(a, b, c) {
        C.D = {};
        C.kc = a;
        C.Z = b;
        C.ii = c;
        C.F = {};
        C.L = new fh;
        C.mc = 0;
        C.W = 0;
        L(C.L, kb, function() {
            C.W++
        });
        L(C.L, Ca, function() {
            C.W--
        })
    }
    ;
    C.ld = function() {
        var a = C.zf();
        document.body.appendChild(a)
    }
    ;
    C.kd = function(a) {
        C.ld();
        if (window.parent == window) {
            var b = "Preview";
            a && (b = a);
            a = C.yf(b);
            document.body.appendChild(a[0]);
            document.body.appendChild(a[1])
        }
    }
    ;
    C.Jh = wa;
    C.Td = wa;
    C.ma = "editWidget";
    C.Jf = function() {
        return C.Z
    }
    ;
    C.hd = function(a, b) {
        C.$ = a;
        C.vd = b
    }
    ;
    C.Of = function() {
        return C.$
    }
    ;
    C.jd = function(a) {
        C.wd = a
    }
    ;
    C.Fa = function() {
        return C.wd
    }
    ;
    C.ed = function(a) {
        C.F = a
    }
    ;
    C.If = function() {
        var a = {}, b;
        for (b in C.F) {
            var c = C.F[b];
            a[c.name] = c.data
        }
        c = {};
        for (b in C.D)
            c[b] = C.D[b].H.Y();
        a.widgets = c;
        return a
    }
    ;
    C.za = function(a, b) {
        var c = new mh(b);
        a = new window[a](c);
        c.D = a;
        C.D[b.D] = a;
        C.fa(a);
        return a
    }
    ;
    C.Th = function(a, b) {
        a = C.za(a, b);
        a.H.V.G = !0;
        return a
    }
    ;
    C.fa = function(a) {
        var b = a.H;
        b.V.F != Sa && (b.V.F == Qa && a.ga(),
        a.H.G = !1)
    }
    ;
    C.G = function(a) {
        return C.D ? C.D[a] : null
    }
    ;
    C.T = function(a, b, c, d, e) {
        var f = "";
        d && (f = "&widgetId=" + d);
        a = C.kc + aa + a + "&sectionId=" + b + "&widgetType=" + c + f;
        if (window.name == e)
            return window.location.replace(a),
            window.focus(),
            window;
        e = window.open(a, e, "width=570,height=600,left=75,top=20,resizable=yes,scrollbars=yes");
        e.focus();
        return e
    }
    ;
    C.Rh = function(a) {
        var b = a.getAttribute("id")
          , c = C.G(b);
        if (c) {
            var d = c.H.C;
            if (null != d && !d.closed)
                return d.focus(),
                !1
        }
        d = "config" + b;
        a = C.T(C.ma, a.parentNode.getAttribute("id"), a.getAttribute("widgetType"), b, d);
        c && (c.H.C = a);
        return !1
    }
    ;
    C.Sh = function(a) {
        C.T(C.Td, a.parentNode.getAttribute("id"), a.getAttribute("widgetType"), a.getAttribute("id"), C.Jh);
        return !1
    }
    ;
    C.Hf = function(a, b, c) {
        C.C(c, c.LayoutsMessages.DELETING);
        C.Za("delete", {}, a, b)
    }
    ;
    C.Uh = function(a, b) {
        var c = window;
        a.sectionid = document.getElementById("sectionId").value;
        C.C(c, c.LayoutsMessages.SAVING);
        C.Za("addnew", a, "", b)
    }
    ;
    C.bd = function(a, b, c) {
        b = C.G(b);
        b.H.V.G ? C.Uh(a, c) : (c = b.H,
        b = window,
        C.C(b, b.LayoutsMessages.SAVING),
        oh(c, Da, a))
    }
    ;
    C.ud = function(a, b, c, d, e, f) {
        C.Ta(C.Z, a, b, c, d, e, f)
    }
    ;
    C.Za = function(a, b, c, d) {
        C.$ && (b.security_token = C.vd,
        C.Ta(C.$, a, b, c, d, void 0))
    }
    ;
    C.Ta = function(a, b, c, d, e, f, h) {
        function n() {
            w(this.C) && window.eval(Sg(this))
        }
        b = ["action=" + encodeURIComponent(b), "widgetId=" + encodeURIComponent(d), "widgetType=" + encodeURIComponent(e), "responseType=js"];
        for (var q in c)
            if (typeof c[q] == jb)
                for (d = c[q],
                e = 0; e < d.length; ++e)
                    b.push(encodeURIComponent(q) + "=" + encodeURIComponent(d[e]));
            else
                b.push(encodeURIComponent(q) + "=" + encodeURIComponent(c[q]));
        var w = f || Ac();
        h == ha ? (a = 0 <= a.indexOf("?") ? a + "&" : a + "?",
        hh(C.L, "" + C.mc++, a + b.join("&"), ha, void 0, n)) : hh(C.L, "" + C.mc++, a, "POST", b.join("&"), n)
    }
    ;
    C.cd = function(a, b) {
        a && (a = C.G(a)) && (a.H.C = b)
    }
    ;
    C.J = function(a, b) {
        0 == C.W ? a.setTimeout(function() {
            a.close()
        }, b) : a.setTimeout(function() {
            C.J(a, b)
        }, 200)
    }
    ;
    C.Ih = function(a, b) {
        a && (C.J(a, 100),
        C.rd(a, b))
    }
    ;
    C.rd = function(a, b) {
        if (a) {
            var c = a.document.getElementById(qb);
            c && (c = c.innerHTML);
            c && a && a.opener.parent && a.opener.parent.editor && a.opener.parent.editor.SetSaveMessage(c, b)
        }
    }
    ;
    C.ka = function(a, b, c) {
        a = C.D[a];
        if (null != c.errors) {
            var d = a ? a.H.C : null;
            d || (d = window);
            C.C(d, c.errors);
            a && a.Ca ? a.Ca(b, c, d) : C.Ca(c, d)
        } else
            a.ka(b, c)
    }
    ;
    C.Ca = function(a, b) {
        a = a["error-details"];
        for (var c in a)
            ph(c, a[c], b.document)
    }
    ;
    function qh(a, b) {
        C.C(a.C, b[pb]);
        C.Ea(a.V.D, "_OnWidgetConfigured", function(a) {
            window.opener._WidgetManager._OnWidgetConfigured(a, b)
        })
    }
    C.Lh = function(a, b) {
        window.parent && window.parent.editor && b ? C.Nh(a, b) : window.location.replace(window.location.href)
    }
    ;
    C.Nh = function(a, b) {
        var c = C.G(a);
        c.H.V.data = b.data;
        a = document.getElementById(a);
        ye(a);
        Cc(a, c);
        c.H.C = null
    }
    ;
    C.Rf = function(a, b, c) {
        var d = c[pb];
        if (null != c.errors)
            C.C(window, c.errors),
            C.Ca(c, window);
        else if ("addnew" == b) {
            if (C.M(window)) {
                if (window.opener && window.opener.parent)
                    var e = window.opener.parent;
                e && e.editor && e.editor.HandleAddNewWidget(c)
            }
            C.C(window, d);
            null == window.opener ? ne("/rearrange?blogID=" + c.blogID) : e && e._WidgetManager ? e._WidgetManager._KillPopupDelay(window) : C.J(window, 100)
        } else
            c = C.D[a],
            "delete" == b && (C.C(c.H.C, d),
            C.Ea(a, "_OnWidgetDeleted"))
    }
    ;
    C.Qh = function(a) {
        var b = C.G(a);
        b && (b.H.V.F == Ra ? top.editor.HandleDeleteWidget(b.H.V.C) : (b = b.H.V.C,
        b.parentNode.removeChild(b)),
        delete C.D[a])
    }
    ;
    C.Ea = function(a, b, c) {
        if (C.M(window)) {
            var d = window.opener;
            c || (c = d._WidgetManager[b]);
            c(a);
            d._WidgetManager ? d._WidgetManager._KillPopupDelay(window, a) : C.J(window, 100)
        } else
            a = C.Fa() + "?widgetId=" + a,
            a += "&func=" + encodeURIComponent(b),
            window.location.replace(a)
    }
    ;
    C.M = function(a) {
        var b = !1;
        try {
            if (a.opener) {
                var c = "X" + a.opener.document.domain;
                c && "X" != c && (b = !0)
            }
        } catch (d) {}
        return b
    }
    ;
    C.jc = "status-msg-yellow-on-white";
    C.C = function(a, b) {
        a || (a = self);
        var c = a.document.getElementById(qb);
        c && (c.innerHTML = b);
        (a = a.document.getElementById(pb)) && vc(a, C.jc)
    }
    ;
    C.di = function(a) {
        a || (a = self);
        (a = a.document.getElementById(pb)) && xc(a, C.jc)
    }
    ;
    C.gi = function(a) {
        a && 0 < a.length && "http" != a.substring(0, 4) && (a = "http://" + a);
        return a
    }
    ;
    C.K = function(a, b) {
        if (B(a, b))
            return a;
        if (a)
            for (var c = a.childNodes.length, d = 0; d < c; d++) {
                var e = C.K(a.childNodes.item(d), b);
                if (e)
                    return e
            }
        return null
    }
    ;
    C.zf = function() {
        var a = window.document.createElement(g);
        a.className = "blogger-clickTrap singleton-element";
        a.style.position = "fixed";
        a.style.top = "0";
        a.style.left = "0";
        a.style.width = "100%";
        a.style.height = "100%";
        H.R && !H.oa(7) && (a.style.height = "expression(this.parentNode.clientHeight)");
        a.style.zIndex = "1000";
        a.style.cursor = "default";
        a.onclick = C.N;
        a.onmousedown = C.N;
        a.onmouseup = C.N;
        a.style.background = "white";
        a.style.filter = "alpha(opacity=1)";
        a.style.opacity = ".01";
        a.innerHTML = "&nbsp;";
        return a
    }
    ;
    C.yf = function(a) {
        var b = window.document
          , c = C.da(b, a);
        a = C.da(b, a);
        c.style.backgroundColor = "#000";
        c.style.border = "1px solid #aaa";
        H.R && (c.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678) alpha(opacity=50)');
        c.style.opacity = ".5";
        a.style.border = "1px solid transparent";
        c.style.zIndex = 1200;
        a.style.zIndex = 1200;
        return [c, a]
    }
    ;
    C.da = function(a, b) {
        a = a.createElement(g);
        a.style.position = sa;
        a.style.top = "75px";
        a.style.left = "-225px";
        a.style.width = "600px";
        a.style.height = "28px";
        a.style.margin = "0";
        a.style.padding = "10px";
        a.style.fontSize = "24px";
        a.style.textAlign = "center";
        a.style.color = "#fff";
        a.style.fontFamily = '"trebuchet ms",verdana,arial,sans-serif';
        H.R && (a.style.top = "-140px",
        a.style.left = "-140px",
        a.style.filter = ' progid:DXImageTransform.Microsoft.Matrix(sizingMethod="auto expand", M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)');
        a.style.MozTransform = nb;
        a.style.MozTransformOrigin = "50% 0";
        a.style.WebkitTransform = nb;
        a.style.WebkitTransformOrigin = "50% 0";
        a.innerHTML = b;
        a.className = "singleton-element";
        return a
    }
    ;
    C.hi = function(a) {
        for (var b in C.F) {
            var c = C.F[b];
            if (c && "features" == c.name)
                return "true" == c.data[a]
        }
        return !1
    }
    ;
    C.N = function(a) {
        a || (a = window.event);
        a && (a.cancelBubble = !0,
        a.stopPropagation && a.stopPropagation());
        return !1
    }
    ;
    function rh(a) {
        if (a)
            if ("checkbox" == a.type) {
                if (a.checked)
                    return a.value
            } else {
                if (null == a.type) {
                    for (var b = [], c = 0; c < a.length; c++)
                        a[c].checked && (b[b.length] = a[c].value);
                    switch (b.length) {
                    case 0:
                        return;
                    case 1:
                        return b[0];
                    default:
                        return b
                    }
                }
                return a.value
            }
    }
    function sh(a, b) {
        b || (b = document);
        return b.getElementById("errormessage_" + a)
    }
    function ph(a, b, c) {
        if (a = sh(a, c))
            a.innerHTML = b,
            a.className = "errorbox-bad errormsg"
    }
    function th() {
        this.C = [];
        for (var a = 0; a < C.F.length; ++a)
            this.C[this.C.length] = C.F[a]
    }
    function uh(a, b) {
        null == b && (b = "");
        for (var c = a.C.length - 1; 0 <= c; --c)
            if (a.C[c].name == b)
                return a.C[c].data;
        return null
    }
    th.prototype.Y = function(a) {
        var b = uh(this, a);
        if (null !== b)
            return b;
        var c = a.split(".");
        if (1 == c.length)
            return b = uh(this, ""),
            b[a];
        b = uh(this, c[0]);
        a = 0;
        for (b ? a = 1 : b = uh(this, ""); a < c.length; a++) {
            if (null == b)
                return null;
            b = b[c[a]]
        }
        return b
    }
    ;
    function Q(a, b) {
        this.Ph = a;
        this.H = b
    }
    p = Q.prototype;
    p.Sa = m("Ph");
    p.od = m("H");
    p.ka = function(a, b) {
        a == Da && qh(this.H, b)
    }
    ;
    p.Ca = function(a, b, c) {
        C.Ca(b, c)
    }
    ;
    p.ga = Db();
    y("_WidgetManager", C);
    C._Init = C.Sf;
    C._SetPageActionUrl = C.hd;
    C._GetPageActionUrl = C.Of;
    C._SetWidgetRefreshUrl = C.jd;
    C._GetWidgetRefreshUrl = C.Fa;
    C._GetCallbackUrl = C.Jf;
    C._DeleteWidgetFromPage = C.Hf;
    C._DisplayWidget = C.fa;
    C._GetWidget = C.G;
    C._HandleControllerResult = C.ka;
    C._HandlePageActionResult = C.Rf;
    C._IsOpenerReachable = C.M;
    C._SetConfigWin = C.cd;
    C._SetDataContext = C.ed;
    C._SetupPreview = C.kd;
    C._RegisterWidget = C.za;
    C._RegisterNewWidget = C.Th;
    C._PopupPaneFromParams = C.T;
    C._PopupConfig = C.Rh;
    C._PopupToolbox = C.Sh;
    C._KillPopupDelay = C.Ih;
    C._OnWidgetConfigured = C.Lh;
    C._OnWidgetDeleted = C.Qh;
    y("_WidgetInfo", lh);
    lh.prototype._getInstanceId = lh.prototype.K;
    Q.prototype._GetHelper = Q.prototype.od;
    mh.prototype._GetData = mh.prototype.Y;
    mh.prototype._GenerateWidgetMetadata = mh.prototype.F;
    C._GetAllData = C.If;
    y("widget_module_provide", function(a, b, c) {
        var d = dg.Ha()
          , e = d.C
          , f = d.K;
        e[a] || (e[a] = {});
        if (c)
            e[a][b] = c;
        else if (f[a]) {
            for (b = 0; b < f[a].length; ++b)
                (0,
                f[a][b][1])(e[a][f[a][b][0]]);
            delete f[a];
            delete d.F[a]
        }
    });
    function vh(a) {
        Q.call(this, "AdSense", a);
        this.H = a
    }
    z(vh, Q);
    y("_AdSenseView", vh);
    H.product = {};
    H.product.Rb = !1;
    H.product.Ba = !1;
    H.product.Aa = !1;
    H.product.Ka = !1;
    H.product.Qb = !1;
    H.product.Vb = !1;
    H.product.Da = H.mb || H.lb || H.pb || H.product.Rb || H.product.Ba || H.product.Aa || H.product.Ka || H.product.Qb || H.product.Vb;
    H.product.Ma = H.Ma;
    H.product.R = H.R;
    H.product.Ra = H.Ra;
    H.product.Xh = H.product.Da ? H.product.Rb : ad();
    H.product.Bf = function() {
        return jd() || G("iPod")
    }
    ;
    H.product.td = H.product.Da ? H.product.Ba : H.product.Bf();
    H.product.sd = H.product.Da ? H.product.Aa : G("iPad");
    H.product.Yc = H.product.Da ? H.product.Ka : dd();
    H.product.Vh = H.product.Da ? H.product.Qb : cd();
    H.product.Ef = function() {
        return bd() && !(jd() || G("iPad") || G("iPod"))
    }
    ;
    H.product.Bd = H.product.Da ? H.product.Vb : H.product.Ef();
    var wh = {};
    function xh(a) {
        if (H.product.R && !H.oa(9))
            return [0, 0, 0, 0];
        var b = wh.hasOwnProperty(a) ? wh[a] : null;
        if (b)
            return b;
        65536 < Object.keys(wh).length && (wh = {});
        var c = [0, 0, 0, 0];
        b = yh(a, /\\[0-9A-Fa-f]{6}\s?/g);
        b = yh(b, /\\[0-9A-Fa-f]{1,5}\s/g);
        b = yh(b, /\\./g);
        b = b.replace(/:not\(([^\)]*)\)/g, "     $1 ");
        b = b.replace(/{[^]*/gm, "");
        b = zh(b, c, /(\[[^\]]+\])/g, 2);
        b = zh(b, c, /(#[^\#\s\+>~\.\[:]+)/g, 1);
        b = zh(b, c, /(\.[^\s\+>~\.\[:]+)/g, 2);
        b = zh(b, c, /(::[^\s\+>~\.\[:]+|:first-line|:first-letter|:before|:after)/gi, 3);
        b = zh(b, c, /(:[\w-]+\([^\)]*\))/gi, 2);
        b = zh(b, c, /(:[^\s\+>~\.\[:]+)/g, 2);
        b = b.replace(/[\*\s\+>~]/g, " ");
        b = b.replace(/[#\.]/g, " ");
        zh(b, c, /([^\s\+>~\.\[:]+)/g, 3);
        b = c;
        return wh[a] = b
    }
    function zh(a, b, c, d) {
        return a.replace(c, function(a) {
            b[d] += 1;
            return Array(a.length + 1).join(" ")
        })
    }
    function yh(a, b) {
        return a.replace(b, function(a) {
            return Array(a.length + 1).join("A")
        })
    }
    ;var Ah = {
        "* ARIA-CHECKED": !0,
        "* ARIA-COLCOUNT": !0,
        "* ARIA-COLINDEX": !0,
        "* ARIA-DESCRIBEDBY": !0,
        "* ARIA-DISABLED": !0,
        "* ARIA-LABEL": !0,
        "* ARIA-LABELLEDBY": !0,
        "* ARIA-READONLY": !0,
        "* ARIA-REQUIRED": !0,
        "* ARIA-ROWCOUNT": !0,
        "* ARIA-ROWINDEX": !0,
        "* ARIA-SELECTED": !0,
        "* ABBR": !0,
        "* ACCEPT": !0,
        "* ACCESSKEY": !0,
        "* ALIGN": !0,
        "* ALT": !0,
        "* AUTOCOMPLETE": !0,
        "* AXIS": !0,
        "* BGCOLOR": !0,
        "* BORDER": !0,
        "* CELLPADDING": !0,
        "* CELLSPACING": !0,
        "* CHAROFF": !0,
        "* CHAR": !0,
        "* CHECKED": !0,
        "* CLEAR": !0,
        "* COLOR": !0,
        "* COLSPAN": !0,
        "* COLS": !0,
        "* COMPACT": !0,
        "* COORDS": !0,
        "* DATETIME": !0,
        "* DIR": !0,
        "* DISABLED": !0,
        "* ENCTYPE": !0,
        "* FACE": !0,
        "* FRAME": !0,
        "* HEIGHT": !0,
        "* HREFLANG": !0,
        "* HSPACE": !0,
        "* ISMAP": !0,
        "* LABEL": !0,
        "* LANG": !0,
        "* MAX": !0,
        "* MAXLENGTH": !0,
        "* METHOD": !0,
        "* MULTIPLE": !0,
        "* NOHREF": !0,
        "* NOSHADE": !0,
        "* NOWRAP": !0,
        "* OPEN": !0,
        "* READONLY": !0,
        "* REQUIRED": !0,
        "* REL": !0,
        "* REV": !0,
        "* ROLE": !0,
        "* ROWSPAN": !0,
        "* ROWS": !0,
        "* RULES": !0,
        "* SCOPE": !0,
        "* SELECTED": !0,
        "* SHAPE": !0,
        "* SIZE": !0,
        "* SPAN": !0,
        "* START": !0,
        "* SUMMARY": !0,
        "* TABINDEX": !0,
        "* TITLE": !0,
        "* TYPE": !0,
        "* VALIGN": !0,
        "* VALUE": !0,
        "* VSPACE": !0,
        "* WIDTH": !0
    }
      , Bh = {
        "* USEMAP": !0,
        "* ACTION": !0,
        "* CITE": !0,
        "* HREF": !0,
        "* LONGDESC": !0,
        "* SRC": !0,
        "LINK HREF": !0,
        "* FOR": !0,
        "* HEADERS": !0,
        "* NAME": !0,
        "A TARGET": !0,
        "* CLASS": !0,
        "* ID": !0,
        "* STYLE": !0
    };
    var Ch = {
        rgb: !0,
        rgba: !0,
        alpha: !0,
        rect: !0,
        image: !0,
        "linear-gradient": !0,
        "radial-gradient": !0,
        "repeating-linear-gradient": !0,
        "repeating-radial-gradient": !0,
        "cubic-bezier": !0,
        matrix: !0,
        perspective: !0,
        rotate: !0,
        rotate3d: !0,
        rotatex: !0,
        rotatey: !0,
        steps: !0,
        rotatez: !0,
        scale: !0,
        scale3d: !0,
        scalex: !0,
        scaley: !0,
        scalez: !0,
        skew: !0,
        skewx: !0,
        skewy: !0,
        translate: !0,
        translate3d: !0,
        translatex: !0,
        translatey: !0,
        translatez: !0
    }
      , Dh = /[\n\f\r"'()*<>]/g
      , Eh = {
        "\n": "%0a",
        "\f": "%0c",
        "\r": "%0d",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "*": "%2a",
        "<": "%3c",
        ">": "%3e"
    };
    function Fh(a) {
        return Eh[a]
    }
    function Gh(a, b, c) {
        b = D(b);
        if ("" == b)
            return null;
        var d = String(b.substr(0, 4)).toLowerCase();
        if (0 == ("url(" < d ? -1 : "url(" == d ? 0 : 1))
            return !b.endsWith(")") || 1 < (b ? b.split("(").length - 1 : 0) || 1 < (b ? b.split(")").length - 1 : 0) || !c ? b = null : b = c ? (b = c(fd(b.substring(4, b.length - 1)), a)) && Hd(b) != qa ? 'url("' + Hd(b).replace(Dh, Fh) + '")' : null : null,
            b;
        if (0 < b.indexOf("(")) {
            if (/"|'/.test(b))
                return null;
            for (a = /([\-\w]+)\(/g; c = a.exec(b); )
                if (!(c[1]in Ch))
                    return null
        }
        return b
    }
    ;function Hh(a, b) {
        a = r[a];
        return a && a.prototype ? (b = Object.getOwnPropertyDescriptor(a.prototype, b)) && b.get || null : null
    }
    function Ih(a, b) {
        return (a = r[a]) && a.prototype && a.prototype[b] || null
    }
    var Jh = Hh(fa, ta) || Hh("Node", ta)
      , Kh = Ih(fa, ab)
      , Lh = Ih(fa, Ya)
      , Mh = Ih(fa, ob)
      , Nh = Ih(fa, lb)
      , Oh = Ih(fa, Za)
      , Ph = Ih(fa, "matches") || Ih(fa, hb)
      , Qh = Hh("Node", "nodeName")
      , Rh = Hh("Node", "nodeType")
      , Sh = Hh("Node", "parentNode")
      , Th = Hh("HTMLElement", sb) || Hh(fa, sb)
      , Uh = Hh("HTMLStyleElement", "sheet")
      , Vh = Ih(ca, $a)
      , Wh = Ih(ca, "setProperty");
    function Xh(a, b, c, d) {
        if (a)
            return a.apply(b);
        a = b[c];
        if (!d(a))
            throw Error(da);
        return a
    }
    function Yh(a, b, c, d) {
        if (a)
            return a.apply(b, d);
        if (H.product.R && 10 > document.documentMode) {
            if (!b[c].call)
                throw Error("IE Clobbering detected");
        } else if (typeof b[c] != k)
            throw Error(da);
        return b[c].apply(b, d)
    }
    function Zh(a) {
        return Xh(Jh, a, ta, function(a) {
            return a instanceof NamedNodeMap
        })
    }
    function $h(a, b, c) {
        try {
            Yh(Mh, a, ob, [b, c])
        } catch (d) {
            if (-1 == d.message.indexOf("A security problem occurred"))
                throw d;
        }
    }
    function ai(a) {
        return Xh(Th, a, sb, function(a) {
            return a instanceof CSSStyleDeclaration
        })
    }
    function bi(a) {
        return Xh(Uh, a, "sheet", function(a) {
            return a instanceof CSSStyleSheet
        })
    }
    function ci(a) {
        return Xh(Qh, a, "nodeName", function(a) {
            return typeof a == rb
        })
    }
    function di(a) {
        return Xh(Rh, a, "nodeType", function(a) {
            return typeof a == ib
        })
    }
    function ei(a) {
        return Xh(Sh, a, "parentNode", function(a) {
            return !(a && typeof a.name == rb && a.name && "parentnode" == a.name.toLowerCase())
        })
    }
    function fi(a, b) {
        return Yh(Vh, a, a.getPropertyValue ? $a : Ya, [b]) || ""
    }
    function gi(a, b, c) {
        Yh(Wh, a, a.setProperty ? "setProperty" : ob, [b, c])
    }
    ;var hi = H.R && 10 > document.documentMode ? null : /\s*([^\s'",]+[^'",]*(('([^'\r\n\f\\]|\\[^])*')|("([^"\r\n\f\\]|\\[^])*")|[^'",])*)/g
      , ii = {
        "-webkit-border-horizontal-spacing": !0,
        "-webkit-border-vertical-spacing": !0
    };
    function ji(a, b, c) {
        var d = [];
        a = ki(pc(a.cssRules));
        A(a, function(a) {
            if (b && !/[a-zA-Z][\w-:\.]*/.test(b))
                throw Error("Invalid container id");
            if (!(b && H.product.R && 10 == document.documentMode && /\\['"]/.test(a.selectorText))) {
                var e = b ? a.selectorText.replace(hi, "#" + b + " $1") : a.selectorText;
                d.push(Zd(e, li(a.style, c)))
            }
        });
        return ae(d)
    }
    function ki(a) {
        return gc(a, function(a) {
            return a instanceof CSSStyleRule || a.type == CSSRule.STYLE_RULE
        })
    }
    function mi(a, b, c) {
        a = ni("<style>" + a + "</style>");
        return null == a ? ce : ji(a.sheet, void 0 != b ? b : null, c)
    }
    function ni(a) {
        return H.R && !H.oa(10) || typeof r.DOMParser != k ? null : (new DOMParser).parseFromString("<html><head></head><body>" + a + "</body></html>", "text/html").body.children[0]
    }
    function li(a, b) {
        if (!a)
            return Pd;
        var c = document.createElement(g).style
          , d = oi(a);
        A(d, function(d) {
            var e = H.va && d in ii ? d : d.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/i, "");
            Ec(e, "--") || Ec(e, "var") || (d = fi(a, d),
            d = Gh(e, d, b),
            null != d && gi(c, e, d))
        });
        return Od(c.cssText || "")
    }
    function pi(a) {
        var b = Array.from(Yh(Oh, a, Za, [ka]))
          , c = tc(b, function(a) {
            return pc(bi(a).cssRules)
        });
        c = ki(c);
        c.sort(function(a, b) {
            a = xh(a.selectorText);
            a: {
                b = xh(b.selectorText);
                for (var c = Math.min(a.length, b.length), d = 0; d < c; d++) {
                    var e = a[d];
                    var f = b[d];
                    e = e > f ? 1 : e < f ? -1 : 0;
                    if (0 != e) {
                        a = e;
                        break a
                    }
                }
                a = a.length;
                b = b.length;
                a = a > b ? 1 : a < b ? -1 : 0
            }
            return -a
        });
        a = document.createTreeWalker(a, NodeFilter.SHOW_ELEMENT, null, !1);
        for (var d; d = a.nextNode(); )
            A(c, function(a) {
                Yh(Ph, d, d.matches ? "matches" : hb, [a.selectorText]) && a.style && qi(d, a.style)
            });
        A(b, ze)
    }
    function qi(a, b) {
        var c = oi(a.style)
          , d = oi(b);
        A(d, function(d) {
            if (!(0 <= c.indexOf(d))) {
                var e = fi(b, d);
                gi(a.style, d, e)
            }
        })
    }
    function oi(a) {
        Ub(a) ? a = pc(a) : (a = Vc(a),
        nc(a, "cssText"));
        return a
    }
    ;var ri = "undefined" != typeof WeakMap && -1 != WeakMap.toString().indexOf("[native code]")
      , si = 0;
    function ti() {
        this.F = [];
        this.D = [];
        this.C = "data-elementweakmap-index-" + si++
    }
    ti.prototype.set = function(a, b) {
        if (Yh(Kh, a, ab, [this.C])) {
            var c = parseInt(Yh(Lh, a, Ya, [this.C]) || null, 10);
            this.D[c] = b
        } else
            c = this.D.push(b) - 1,
            $h(a, this.C, c.toString()),
            this.F.push(a);
        return this
    }
    ;
    ti.prototype.get = function(a) {
        if (Yh(Kh, a, ab, [this.C]))
            return a = parseInt(Yh(Lh, a, Ya, [this.C]) || null, 10),
            this.D[a]
    }
    ;
    ti.prototype.clear = function() {
        this.F.forEach(function(a) {
            Yh(Nh, a, lb, [this.C])
        }, this);
        this.F = [];
        this.D = []
    }
    ;
    var ui = !H.R || H.ib(10);
    function vi() {}
    ;var wi = {
        APPLET: !0,
        AUDIO: !0,
        BASE: !0,
        BGSOUND: !0,
        EMBED: !0,
        FORM: !0,
        IFRAME: !0,
        ISINDEX: !0,
        KEYGEN: !0,
        LAYER: !0,
        LINK: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        SVG: !0,
        STYLE: !0,
        TEMPLATE: !0,
        VIDEO: !0
    };
    var xi = {
        A: !0,
        ABBR: !0,
        ACRONYM: !0,
        ADDRESS: !0,
        AREA: !0,
        ARTICLE: !0,
        ASIDE: !0,
        B: !0,
        BDI: !0,
        BDO: !0,
        BIG: !0,
        BLOCKQUOTE: !0,
        BR: !0,
        BUTTON: !0,
        CAPTION: !0,
        CENTER: !0,
        CITE: !0,
        CODE: !0,
        COL: !0,
        COLGROUP: !0,
        DATA: !0,
        DATALIST: !0,
        DD: !0,
        DEL: !0,
        DETAILS: !0,
        DFN: !0,
        DIALOG: !0,
        DIR: !0,
        DIV: !0,
        DL: !0,
        DT: !0,
        EM: !0,
        FIELDSET: !0,
        FIGCAPTION: !0,
        FIGURE: !0,
        FONT: !0,
        FOOTER: !0,
        FORM: !0,
        H1: !0,
        H2: !0,
        H3: !0,
        H4: !0,
        H5: !0,
        H6: !0,
        HEADER: !0,
        HGROUP: !0,
        HR: !0,
        I: !0,
        IMG: !0,
        INPUT: !0,
        INS: !0,
        KBD: !0,
        LABEL: !0,
        LEGEND: !0,
        LI: !0,
        MAIN: !0,
        MAP: !0,
        MARK: !0,
        MENU: !0,
        METER: !0,
        NAV: !0,
        NOSCRIPT: !0,
        OL: !0,
        OPTGROUP: !0,
        OPTION: !0,
        OUTPUT: !0,
        P: !0,
        PRE: !0,
        PROGRESS: !0,
        Q: !0,
        S: !0,
        SAMP: !0,
        SECTION: !0,
        SELECT: !0,
        SMALL: !0,
        SOURCE: !0,
        SPAN: !0,
        STRIKE: !0,
        STRONG: !0,
        STYLE: !0,
        SUB: !0,
        SUMMARY: !0,
        SUP: !0,
        TABLE: !0,
        TBODY: !0,
        TD: !0,
        TEXTAREA: !0,
        TFOOT: !0,
        TH: !0,
        THEAD: !0,
        TIME: !0,
        TR: !0,
        TT: !0,
        U: !0,
        UL: !0,
        VAR: !0,
        WBR: !0
    };
    function yi(a) {
        a = a || new zi;
        Ai(a);
        this.C = Yc(a.C);
        this.G = Yc(a.da);
        this.J = Yc(a.G);
        this.M = a.$;
        A(a.T, function(a) {
            if (!Ec(a, "data-"))
                throw new ec('Only "data-" attributes allowed, got: %s.',[a]);
            if (Ec(a, Oa))
                throw new ec('Attributes with "%s" prefix are not allowed, got: %s.',[Oa, a]);
            this.C["* " + a.toUpperCase()] = Bi
        }, this);
        this.L = a.F;
        this.F = a.W;
        this.D = null;
        this.K = a.Z
    }
    z(yi, vi);
    function Ci(a) {
        return function(b, c) {
            return (b = a(D(b), c)) && Hd(b) != qa ? Hd(b) : null
        }
    }
    function zi() {
        this.C = {};
        A([Ah, Bh], function(a) {
            A(Vc(a), function(a) {
                this.C[a] = Bi
            }, this)
        }, this);
        this.D = {};
        this.T = [];
        this.da = Yc(wi);
        this.G = Yc(xi);
        this.$ = !1;
        this.N = Jd;
        this.M = this.J = this.K = this.F = td;
        this.W = null;
        this.L = this.Z = !1
    }
    function Di() {
        var a = new zi;
        a.G = {
            SPAN: !0
        };
        A("a b br em i strong".split(" "), function(a) {
            a = a.toUpperCase();
            if (xi[a])
                this.G[a] = !0;
            else
                throw Error("Only whitelisted tags can be allowed. See goog.html.sanitizer.TagWhitelist.");
        }, a);
        return a
    }
    function Fi(a, b) {
        return function(c, d, e, f) {
            c = a(c, d, e, f);
            return null == c ? null : b(c, d, e, f)
        }
    }
    function Gi(a, b, c, d) {
        a[c] && !b[c] && (a[c] = Fi(a[c], d))
    }
    function Ai(a) {
        if (a.L)
            throw Error("HtmlSanitizer.Builder.build() can only be used once.");
        Gi(a.C, a.D, "* USEMAP", Hi);
        var b = Ci(a.N);
        A(["* ACTION", "* CITE", "* HREF"], function(a) {
            Gi(this.C, this.D, a, b)
        }, a);
        var c = Ci(a.F);
        A(["* LONGDESC", "* SRC", "LINK HREF"], function(a) {
            Gi(this.C, this.D, a, c)
        }, a);
        A(["* FOR", "* HEADERS", "* NAME"], function(a) {
            Gi(this.C, this.D, a, ac(Ii, this.K))
        }, a);
        Gi(a.C, a.D, "A TARGET", ac(Ji, [oa, "_self"]));
        Gi(a.C, a.D, "* CLASS", ac(Ki, a.J));
        Gi(a.C, a.D, "* ID", ac(Li, a.J));
        Gi(a.C, a.D, "* STYLE", ac(a.M, c));
        a.L = !0
    }
    function Mi(a, b) {
        a || (a = "*");
        return (a + " " + b).toUpperCase()
    }
    function Ni(a, b, c, d) {
        if (!d.Eb)
            return null;
        b = Nd(li(d.Eb, function(b, d) {
            c.Pd = d;
            b = a(b, c);
            var e;
            null == b ? e = null : e = Kd(b);
            return e
        }));
        return "" == b ? null : b
    }
    function Bi(a) {
        return D(a)
    }
    function Ji(a, b) {
        b = D(b);
        return lc(a, b.toLowerCase()) ? b : null
    }
    function Hi(a) {
        return (a = D(a)) && "#" == a.charAt(0) ? a : null
    }
    function Ii(a, b, c) {
        return a(D(b), c)
    }
    function Ki(a, b, c) {
        b = b.split(/(?:\s+)/);
        for (var d = [], e = 0; e < b.length; e++) {
            var f = a(b[e], c);
            f && d.push(f)
        }
        return 0 == d.length ? null : d.join(" ")
    }
    function Li(a, b, c) {
        return a(D(b), c)
    }
    function Oi(a, b) {
        var c = !(ka in a.G) && ka in a.J;
        c = "*" == a.F && c ? "sanitizer-" + (Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ bc()).toString(36)) : a.F;
        a.D = c;
        if (ui) {
            c = b;
            if (ui) {
                b = document.createElement(ja);
                a.D && "*" == a.F && (b.id = a.D);
                a.K && (c = ni("<div>" + c + "</div>"),
                pi(c),
                c = c.innerHTML);
                var d = document.createElement("template");
                if (Ma in d)
                    d.innerHTML = c,
                    d = d.content;
                else {
                    var e = document.implementation.createHTMLDocument("x");
                    d = e.body;
                    e.body.innerHTML = c
                }
                c = document.createTreeWalker(d, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, null, !1);
                for (d = ri ? new WeakMap : new ti; e = c.nextNode(); ) {
                    c: {
                        var f = a;
                        var h = e;
                        switch (di(h)) {
                        case 3:
                            f = Pi(f, h);
                            break c;
                        case 1:
                            if ("TEMPLATE" == ci(h).toUpperCase())
                                f = null;
                            else {
                                var n = ci(h).toUpperCase();
                                if (n in f.G)
                                    var q = null;
                                else
                                    f.J[n] ? q = document.createElement(n) : (q = document.createElement(ja),
                                    f.M && $h(q, "data-sanitizer-original-tag", n.toLowerCase()));
                                if (q) {
                                    var w = q
                                      , O = Zh(h);
                                    if (null != O)
                                        for (var F = 0; n = O[F]; F++)
                                            if (n.specified) {
                                                var E = f;
                                                var J = h
                                                  , pa = n
                                                  , mb = pa.name;
                                                if (Ec(mb, Oa))
                                                    E = null;
                                                else {
                                                    var Ei = ci(J);
                                                    pa = pa.value;
                                                    var cf = {
                                                        tagName: D(Ei).toLowerCase(),
                                                        attributeName: D(mb).toLowerCase()
                                                    }
                                                      , df = {
                                                        Eb: void 0
                                                    };
                                                    cf.attributeName == sb && (df.Eb = ai(J));
                                                    J = Mi(Ei, mb);
                                                    J in E.C ? (E = E.C[J],
                                                    E = E(pa, cf, df)) : (mb = Mi(null, mb),
                                                    mb in E.C ? (E = E.C[mb],
                                                    E = E(pa, cf, df)) : E = null)
                                                }
                                                null === E || $h(w, n.name, E)
                                            }
                                    f = q
                                } else
                                    f = null
                            }
                            break c;
                        default:
                            f = null
                        }
                    }
                    if (f) {
                        if (1 == di(f) && d.set(e, f),
                        e = ei(e),
                        h = !1,
                        e)
                            n = di(e),
                            q = ci(e).toLowerCase(),
                            w = ei(e),
                            11 != n || w ? "body" == q && w && (n = ei(w)) && !ei(n) && (h = !0) : h = !0,
                            n = null,
                            h || !e ? n = b : 1 == di(e) && (n = d.get(e)),
                            n.content && (n = n.content),
                            n.appendChild(f)
                    } else
                        ye(e)
                }
                d.clear && d.clear();
                a = b
            } else
                a = document.createElement(ja);
            0 < Zh(a).length && (b = document.createElement(ja),
            b.appendChild(a),
            a = b);
            a = (new XMLSerializer).serializeToString(a);
            a = a.slice(a.indexOf(">") + 1, a.lastIndexOf("</"))
        } else
            a = "";
        return he(a, null)
    }
    function Pi(a, b) {
        var c = b.data;
        (b = ei(b)) && ci(b).toLowerCase() == sb && !(ka in a.G) && ka in a.J && (c = be(mi(c, a.D, x(function(a, b) {
            return this.L(a, {
                Pd: b
            })
        }, a))));
        return document.createTextNode(c)
    }
    ;function Qi(a, b, c) {
        if (u(b))
            (b = Ri(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d]
                  , f = Ri(c, d);
                f && (c.style[f] = e)
            }
    }
    var Si = {};
    function Ri(a, b) {
        var c = Si[b];
        if (!c) {
            var d = hd(b);
            c = d;
            void 0 === a.style[d] && (d = (H.va ? "Webkit" : H.qb ? "Moz" : H.R ? "ms" : H.Ma ? "O" : null) + id(d),
            void 0 !== a.style[d] && (c = d));
            Si[b] = c
        }
        return c
    }
    function Ti(a, b) {
        var c = Ce(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }
    function Ui(a, b) {
        return Ti(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }
    function Vi(a) {
        try {
            var b = a.getBoundingClientRect()
        } catch (c) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
        H.R && a.ownerDocument.body && (a = a.ownerDocument,
        b.left -= a.documentElement.clientLeft + a.body.clientLeft,
        b.top -= a.documentElement.clientTop + a.body.clientTop);
        return b
    }
    function Wi(a) {
        var b = a.offsetWidth
          , c = a.offsetHeight
          , d = H.va && !b && !c;
        return t(b) && !d || !a.getBoundingClientRect ? new pe(b,c) : (a = Vi(a),
        new pe(a.right - a.left,a.bottom - a.top))
    }
    function Xi(a, b) {
        if (/^\d+px?$/.test(b))
            return parseInt(b, 10);
        var c = a.style.left
          , d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }
    function Yi(a) {
        var b = Ce(a)
          , c = "";
        if (b.body.createTextRange && Be(b, a)) {
            b = b.body.createTextRange();
            b.moveToElementText(a);
            try {
                c = b.queryCommandValue("FontName")
            } catch (d) {
                c = ""
            }
        }
        c || (c = Ui(a, "fontFamily"));
        a = c.split(",");
        1 < a.length && (c = a[0]);
        return fd(c)
    }
    var Zi = /[^\d]+$/
      , $i = {
        cm: 1,
        "in": 1,
        mm: 1,
        pc: 1,
        pt: 1
    }
      , aj = {
        em: 1,
        ex: 1
    };
    function bj(a) {
        var b = Ui(a, "fontSize");
        var c = (c = b.match(Zi)) && c[0] || null;
        if (b && "px" == c)
            return parseInt(b, 10);
        if (H.R) {
            if (String(c)in $i)
                return Xi(a, b);
            if (a.parentNode && 1 == a.parentNode.nodeType && String(c)in aj)
                return a = a.parentNode,
                c = Ui(a, "fontSize"),
                Xi(a, b == c ? "1em" : b)
        }
        c = ue(ja, {
            style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
        });
        a.appendChild(c);
        b = c.offsetHeight;
        ze(c);
        return b
    }
    ;var cj = document.createElement("DIV");
    cj.id = cj[Xb] || (cj[Xb] = ++Yb);
    function dj(a) {
        var b = new yi(new zi);
        return Oi(b, a)
    }
    ;function ej(a) {
        Q.call(this, "BlogArchive", a);
        this.C = a.V
    }
    z(ej, Q);
    var fj = "&#9658;&nbsp;";
    p = ej.prototype;
    p.ka = function(a, b) {
        if (a == Da)
            qh(this.H, b);
        else if ("getTitles" == a) {
            a: {
                a = b.path;
                var c = this.C.C.getElementsByTagName("A");
                for (e in c) {
                    var d = c[e];
                    if (d.href == a) {
                        var e = He(d, "li", "archivedate");
                        break a
                    }
                }
                e = void 0
            }
            a = K("posts", e);
            (c = He(e, g, Aa)) && se(c, {
                style: "",
                "data-height": ""
            });
            ye(a);
            for (c = 0; c < b.posts.length; c++) {
                d = b.posts[c];
                var f = document.createElement("li");
                f.innerHTML = "<a href=" + d.url + ">" + d.title + "</a>";
                a.appendChild(f)
            }
            gj(this, e);
            hj(this, e)
        } else
            ej.O.ka.call(this, a, b)
    }
    ;
    p.ga = function() {
        if (P(this.H, "ArchiveList")) {
            var a = re(document, "a", xb, this.C.C);
            1 > a.length && (a = re(document, "li", xb, this.C.C));
            if (0 < a.length && a[0].currentStyle)
                var b = a[0].parentNode.currentStyle.color;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                0 < re(document, g, Aa, d).length ? (d.onclick = this.Cd.bind(this),
                gj(this, d)) : d.onclick = this.Dd.bind(this);
                b && (d.style.color = b)
            }
            if (d = P(this.H, "ArchiveMenu")) {
                for (c = 1; c < d.options.length; c++)
                    if (a = d.options[c].value,
                    a == window.location.href || null != window.location.href.match(a)) {
                        d.selectedIndex = c;
                        break
                    }
                d.onchange = this.qd.bind(this)
            } else
                for (a = re(document, g, Ta, this.C.C),
                c = 0; c < a.length; c++)
                    d = a[c],
                    d.addEventListener(xa, this.Hd.bind(this), !1),
                    d.addEventListener(xa, this.Ad.bind(this), !1);
            "rtl" == this.H.Y().languageDirection && (fj = "&#9668;&nbsp;")
        }
    }
    ;
    p.qd = function() {
        var a = P(this.H, "ArchiveMenu");
        a && "" != a.value && (window.location.href = a.value)
    }
    ;
    p.Dd = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        b && !B(b, xb) && (b = b.parentNode);
        a = C.K(b, "zippy");
        b = b.parentNode;
        if (B(b, Va))
            return zc(b, Va, ya),
            b = dj(fj),
            le(a, fe(b)),
            xc(a, "toggle-open"),
            !1;
        zc(b, ya, Va);
        var c = dj("&#9660;&nbsp;");
        le(a, fe(c));
        vc(a, "toggle-open");
        ij(this, b);
        return !1
    }
    ;
    p.Hd = function(a) {
        a = a || window.event;
        a = a.currentTarget || a.srcElement;
        (a = B(a, Ta) ? a : He(a, g, Ta)) && (a = K("menu", a)) && (B(a, "open") ? xc(a, "open") : vc(a, "open"))
    }
    ;
    p.Ad = function(a) {
        a = a || window.event;
        var b = a.currentTarget || a.srcElement;
        if (b = B(b, "ripple") ? b : He(b, g, "ripple")) {
            var c = K("splash", b);
            if (!c) {
                c = document.createElement("span");
                vc(c, "splash");
                var d = document.createElement(g);
                vc(d, "splash-wrapper");
                d.appendChild(c);
                b.insertBefore(d, b.firstChild)
            }
            xc(c, "animate");
            d = b.offsetWidth;
            var e = getComputedStyle(b);
            d += parseInt(e.marginLeft) + parseInt(e.marginRight);
            d = Math.max(d, jj(b));
            se(c, {
                style: "height: " + d + "px; width: " + d + "px; left: " + (a.pageX - b.offsetLeft - d / 2) + "px; top: " + (a.pageY - b.offsetTop - d / 2) + "px;"
            });
            vc(c, "animate")
        }
    }
    ;
    p.Cd = function(a) {
        a = a || window.event;
        if (!a.currentTarget || a.currentTarget == a.srcElement || "A" != a.srcElement.tagName) {
            var b = a.currentTarget || a.srcElement;
            b && !B(b, xb) && (b = b.parentNode);
            a.stopPropagation();
            a = B(b, "archivedate") ? b : b.parentNode;
            B(a, Va) ? (kj(this, a),
            zc(a, Va, ya)) : (ij(this, a),
            hj(this, a),
            zc(a, ya, Va))
        }
    }
    ;
    function ij(a, b) {
        var c = b.getElementsByTagName("UL");
        0 < c.length && !B(c[0], "posts") ? c = !1 : (c = C.K(b, "post-count"),
        c = parseInt(c.innerHTML.match(/\d+/), 10),
        c = b.getElementsByTagName("LI").length < c);
        if (c) {
            var d = K(Aa, b);
            c = K("posts", b);
            c || (c = document.createElement("UL"),
            d ? d.appendChild(c) : b.appendChild(c),
            vc(c, "posts"));
            d && se(d, {
                style: "",
                "data-height": ""
            });
            (d = He(b, g, Aa)) && se(d, {
                style: "",
                "data-height": ""
            });
            d = document.createElement("LI");
            d.innerHTML = a.H.Y().loadingMessage || "Loading...";
            c.appendChild(d);
            oh(a.H, "getTitles", {
                path: C.K(b, "post-count-link").href
            }, null, ha)
        }
    }
    function hj(a, b) {
        var c = K(Aa, b);
        c.getAttribute(Na) || gj(a, b);
        var d = (a = c.getAttribute(Na) || jj(c)) ? a + "px" : l;
        window.setTimeout(function() {
            se(c, {
                style: "max-height: " + d + ";"
            })
        }, 10)
    }
    function kj(a, b) {
        var c = K(Aa, b);
        c.getAttribute(Na) || gj(a, b);
        window.setTimeout(function() {
            se(c, {
                style: gb
            })
        }, 10)
    }
    function gj(a, b) {
        var c = K(Aa, b);
        se(c, {
            style: "max-height: none;"
        });
        for (var d = 0, e = re(document, g, Aa, c), f = 0; f < e.length; f++) {
            var h = e[f]
              , n = He(h, "li", xb);
            if (B(n, ya)) {
                var q = h.getAttribute(Na);
                q || (gj(a, n),
                q = h.getAttribute(Na));
                d += parseInt(q)
            }
        }
        a = d + jj(c);
        c.setAttribute(Na, a);
        c.setAttribute(sb, "max-height: " + a + "px;");
        B(b, ya) && c.setAttribute(sb, gb)
    }
    function jj(a) {
        var b = a.offsetHeight;
        a = getComputedStyle(a);
        return b += parseInt(a.marginTop) + parseInt(a.marginBottom)
    }
    y("_BlogArchiveView", ej);
    function lj(a) {
        Q.call(this, lj.C, a)
    }
    z(lj, Q);
    lj.C = "Attribution";
    y("_AttributionView", lj);
    function mj(a, b) {
        this.G = this.M = this.F = "";
        this.K = null;
        this.L = this.J = "";
        this.D = !1;
        if (a instanceof mj) {
            this.D = t(b) ? b : a.D;
            nj(this, a.F);
            this.M = a.M;
            this.G = a.G;
            oj(this, a.K);
            pj(this, a.J);
            b = a.C;
            var c = new qj;
            c.F = b.F;
            b.C && (c.C = new wg(b.C),
            c.D = b.D);
            rj(this, c);
            this.L = a.L
        } else
            a && (c = String(a).match(Cg)) ? (this.D = !!b,
            nj(this, c[1] || "", !0),
            this.M = sj(c[2] || ""),
            this.G = sj(c[3] || "", !0),
            oj(this, c[4]),
            pj(this, c[5] || "", !0),
            rj(this, c[6] || "", !0),
            this.L = sj(c[7] || "")) : (this.D = !!b,
            this.C = new qj(null,this.D))
    }
    mj.prototype.toString = function() {
        var a = []
          , b = this.F;
        b && a.push(tj(b, uj, !0), ":");
        var c = this.G;
        if (c || "file" == b)
            a.push("//"),
            (b = this.M) && a.push(tj(b, uj, !0), "@"),
            a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
            c = this.K,
            null != c && a.push(":", String(c));
        if (c = this.J)
            this.G && "/" != c.charAt(0) && a.push("/"),
            a.push(tj(c, "/" == c.charAt(0) ? vj : wj, !0));
        (c = this.C.toString()) && a.push("?", c);
        (c = this.L) && a.push("#", tj(c, xj));
        return a.join("")
    }
    ;
    function nj(a, b, c) {
        a.F = c ? sj(b, !0) : b;
        a.F && (a.F = a.F.replace(/:$/, ""));
        return a
    }
    function oj(a, b) {
        if (b) {
            b = Number(b);
            if (isNaN(b) || 0 > b)
                throw Error("Bad port number " + b);
            a.K = b
        } else
            a.K = null
    }
    function pj(a, b, c) {
        a.J = c ? sj(b, !0) : b;
        return a
    }
    function rj(a, b, c) {
        b instanceof qj ? (a.C = b,
        yj(a.C, a.D)) : (c || (b = tj(b, zj)),
        a.C = new qj(b,a.D))
    }
    function Aj(a, b, c) {
        a.C.set(b, c);
        return a
    }
    function Bj(a, b) {
        return a instanceof mj ? new mj(a) : new mj(a,b)
    }
    function sj(a, b) {
        return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""
    }
    function tj(a, b, c) {
        return u(a) ? (a = encodeURI(a).replace(b, Cj),
        c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
        a) : null
    }
    function Cj(a) {
        a = a.charCodeAt(0);
        return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
    }
    var uj = /[#\/\?@]/g
      , wj = /[#\?:]/g
      , vj = /[#\?]/g
      , zj = /[#\?@]/g
      , xj = /#/g;
    function qj(a, b) {
        this.D = this.C = null;
        this.F = a || null;
        this.G = !!b
    }
    function Dj(a) {
        a.C || (a.C = new wg,
        a.D = 0,
        a.F && Dg(a.F, function(b, c) {
            a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
        }))
    }
    p = qj.prototype;
    p.X = function() {
        Dj(this);
        return this.D
    }
    ;
    p.add = function(a, b) {
        Dj(this);
        this.F = null;
        a = Ej(this, a);
        var c = this.C.get(a);
        c || this.C.set(a, c = []);
        c.push(b);
        this.D = this.D + 1;
        return this
    }
    ;
    function Fj(a, b) {
        Dj(a);
        b = Ej(a, b);
        zg(a.C.D, b) && (a.F = null,
        a.D = a.D - a.C.get(b).length,
        yg(a.C, b))
    }
    p.ja = function() {
        Dj(this);
        return 0 == this.D
    }
    ;
    function Gj(a, b) {
        Dj(a);
        b = Ej(a, b);
        return zg(a.C.D, b)
    }
    p.forEach = function(a, b) {
        Dj(this);
        this.C.forEach(function(c, d) {
            A(c, function(c) {
                a.call(b, c, d, this)
            }, this)
        }, this)
    }
    ;
    p.ia = function() {
        Dj(this);
        for (var a = this.C.ca(), b = this.C.ia(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++)
                c.push(b[d]);
        return c
    }
    ;
    p.ca = function(a) {
        Dj(this);
        var b = [];
        if (u(a))
            Gj(this, a) && (b = oc(b, this.C.get(Ej(this, a))));
        else {
            a = this.C.ca();
            for (var c = 0; c < a.length; c++)
                b = oc(b, a[c])
        }
        return b
    }
    ;
    p.set = function(a, b) {
        Dj(this);
        this.F = null;
        a = Ej(this, a);
        Gj(this, a) && (this.D = this.D - this.C.get(a).length);
        this.C.set(a, [b]);
        this.D = this.D + 1;
        return this
    }
    ;
    p.get = function(a, b) {
        if (!a)
            return b;
        a = this.ca(a);
        return 0 < a.length ? String(a[0]) : b
    }
    ;
    p.toString = function() {
        if (this.F)
            return this.F;
        if (!this.C)
            return "";
        for (var a = [], b = this.C.ia(), c = 0; c < b.length; c++) {
            var d = b[c]
              , e = encodeURIComponent(String(d));
            d = this.ca(d);
            for (var f = 0; f < d.length; f++) {
                var h = e;
                "" !== d[f] && (h += "=" + encodeURIComponent(String(d[f])));
                a.push(h)
            }
        }
        return this.F = a.join("&")
    }
    ;
    function Ej(a, b) {
        b = String(b);
        a.G && (b = b.toLowerCase());
        return b
    }
    function yj(a, b) {
        b && !a.G && (Dj(a),
        a.F = null,
        a.C.forEach(function(a, b) {
            var c = b.toLowerCase();
            b != c && (Fj(this, b),
            Fj(this, c),
            0 < a.length && (this.F = null,
            this.C.set(Ej(this, c), pc(a)),
            this.D = this.D + a.length))
        }, a));
        a.G = b
    }
    ;var Hj = {}
      , Ij = {}
      , Jj = {}
      , Kj = {};
    function Lj() {
        throw Error("Do not instantiate directly");
    }
    Lj.prototype.Cb = null;
    Lj.prototype.bb = m(Ma);
    Lj.prototype.toString = m(Ma);
    function Mj() {
        Lj.call(this)
    }
    z(Mj, Lj);
    Mj.prototype.Na = Hj;
    function Nj(a, b) {
        return null != a && a.Na === b
    }
    ;function Oj(a) {
        if (null != a)
            switch (a.Cb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
            }
        return null
    }
    function Pj(a) {
        return Nj(a, Hj) ? a : a instanceof de ? Qj(fe(a), a.C()) : Qj(ed(String(String(a))), Oj(a))
    }
    var Qj = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            a = new b(String(a));
            void 0 !== d && (a.Cb = d);
            return a
        }
    }(Mj);
    function Rj(a) {
        return Nj(a, Hj) ? String(String(a.bb()).replace(Sj, "").replace(Tj, "&lt;")).replace(Uj, Vj) : ed(String(a))
    }
    function Wj(a) {
        Nj(a, Ij) || Nj(a, Jj) ? a = Xj(a) : a instanceof Fd ? a = Xj(Hd(a)) : a instanceof zd ? a = Xj(Bd(a)) : (a = String(a),
        a = Yj.test(a) ? a.replace(Zj, ak) : ra);
        return a
    }
    var bk = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\x0B": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };
    function Vj(a) {
        return bk[a]
    }
    var ck = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\x0B": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };
    function ak(a) {
        return ck[a]
    }
    var Uj = /[\x00\x22\x27\x3c\x3e]/g
      , Zj = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g
      , Yj = /^(?![^#?]*\/(?:\.|%2E){2}(?:[\/?#]|$))(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i
      , dk = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i;
    function Xj(a) {
        return String(a).replace(Zj, ak)
    }
    var Sj = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g
      , Tj = /</g;
    function ek(a, b, c) {
        b = c || b;
        c = a.hc;
        var d = a.Gc
          , e = a.ec;
        a = a.depth;
        var f = e.extraIconClass
          , h = '<li class="comment" id="c' + Rj(e.id) + '"><div class="avatar-image-container"><img src="'
          , n = e.authorAvatarSrc;
        Nj(n, Ij) || Nj(n, Jj) ? n = Xj(n) : n instanceof Fd ? n = Xj(Hd(n)) : n instanceof zd ? n = Xj(Bd(n)) : (n = String(n),
        n = dk.test(n) ? n.replace(Zj, ak) : ra);
        f = h + Rj(n) + '" alt=""/></div><div class="comment-block"><div class="comment-header"><cite class="user">' + (e.authorUrl ? '<a href="' + Rj(Wj(e.authorUrl)) + '" rel="nofollow">' + Pj(e.author) + "</a>" : Pj(e.author)) + '</cite><span class="icon user ' + Rj(null != f ? f : "") + '"></span><span class="datetime secondary-text"><a rel="nofollow" href="' + Rj(Wj(e.url)) + '">' + Pj(e.timestamp) + '</a></span></div><p class="comment-content">' + Pj(e.body) + '</p><span class="comment-actions secondary-text">' + (a < c.maxDepth ? '<a class="comment-reply" target="_self" data-comment-id="' + Rj(e.id) + '">' + Pj(d.reply) + "</a>" : "") + '<span class="item-control blog-admin ' + Rj(e.adminClass) + '"><a target="_self" href="' + Rj(Wj(e.deleteUrl)) + '">' + Pj(d["delete"]) + '</a></span></span></div><div class="comment-replies">';
        h = e.replies;
        h = null != h ? h : [];
        f += '<div id="c' + Rj(e.id) + '-rt" class="comment-thread inline-thread' + (0 == h.length ? " hidden" : "") + '"><span class="thread-toggle thread-expanded"><span class="thread-arrow"></span><span class="thread-count"><a target="_self">' + Pj(d.replies) + '</a></span></span><ol id="c' + Rj(e.id) + '-ra" class="thread-chrome thread-expanded"><div>';
        n = h.length;
        for (var q = 0; q < n; q++)
            f += ek({
                hc: c,
                Gc: d,
                ec: h[q],
                depth: a ? a + 1 : 1
            }, b);
        f += '</div><div id="c' + Rj(e.id) + '-continue" class="continue"><a class="comment-reply" target="_self" data-comment-id="' + Rj(e.id) + '">' + Pj(d.reply) + '</a></div></ol></div></div><div class="comment-replybox-single" id="c' + Rj(e.id) + '-ce"></div></li>';
        return Qj(f)
    }
    ;function fk() {}
    Sb(fk);
    fk.prototype.C = 0;
    function gk(a) {
        M.call(this);
        this.fa = a || dc || (dc = new Je);
        this.ea = null;
        this.ta = !1;
        this.C = null;
        this.D = void 0;
        this.M = this.N = this.F = null
    }
    z(gk, M);
    p = gk.prototype;
    p.Af = fk.Ha();
    p.Oa = m("C");
    function hk(a) {
        a.D || (a.D = new jg(a));
        return a.D
    }
    p.Nb = function(a) {
        if (this.F && this.F != a)
            throw Error("Method not supported");
        gk.O.Nb.call(this, a)
    }
    ;
    p.Fc = function() {
        this.C = this.fa.D.createElement("DIV")
    }
    ;
    p.render = function(a) {
        if (this.ta)
            throw Error("Component already rendered");
        this.C || this.Fc();
        a ? a.insertBefore(this.C, null) : this.fa.D.body.appendChild(this.C);
        this.F && !this.F.ta || this.ab()
    }
    ;
    p.ab = function() {
        this.ta = !0;
        ik(this, function(a) {
            !a.ta && a.Oa() && a.ab()
        })
    }
    ;
    function jk(a) {
        ik(a, function(a) {
            a.ta && jk(a)
        });
        a.D && ng(a.D);
        a.ta = !1
    }
    p.aa = function() {
        this.ta && jk(this);
        this.D && (this.D.wa(),
        delete this.D);
        ik(this, function(a) {
            a.wa()
        });
        this.C && ze(this.C);
        this.F = this.C = this.M = this.N = null;
        gk.O.aa.call(this)
    }
    ;
    function ik(a, b) {
        a.N && A(a.N, b, void 0)
    }
    p.removeChild = function(a, b) {
        if (a) {
            var c = u(a) ? a : a.ea || (a.ea = ":" + (a.Af.C++).toString(36));
            this.M && c ? (a = this.M,
            a = (null !== a && c in a ? a[c] : void 0) || null) : a = null;
            if (c && a) {
                var d = this.M;
                c in d && delete d[c];
                nc(this.N, a);
                b && (jk(a),
                a.C && ze(a.C));
                b = a;
                if (null == b)
                    throw Error("Unable to set parent component");
                b.F = null;
                gk.O.Nb.call(b, null)
            }
        }
        if (!a)
            throw Error("Child is not in parent component");
        return a
    }
    ;
    function kk(a, b, c, d, e) {
        gk.call(this, e);
        this.L = d || window;
        this.ma = a;
        this.W = b;
        this.da = {};
        this.T = this.G = null;
        this.K = {};
        c || (this.K.GOOGLEPLUS = {
            Pa: "Google+",
            Ya: this.Kd
        });
        this.K.EMAIL = {
            Pa: "Email",
            Ya: this.Id
        };
        this.K.FACEBOOK = {
            Pa: "Facebook",
            Ya: this.Jd
        };
        this.K.TWITTER = {
            Pa: "Twitter",
            Ya: this.Ld
        }
    }
    z(kk, gk);
    p = kk.prototype;
    p.Fc = function() {
        var a = this.fa
          , b = a.C("DIV", {
            style: "position:absolute;width:100%;left:0;top:0;height:100%;z-index:100;",
            "class": "mobile-share-panel-outer"
        });
        this.G = a.C("DIV", {
            style: "position:absolute;;width:230px;height:200px;",
            "class": "mobile-share-panel-inner"
        });
        b.appendChild(this.G);
        var c = a.C("DIV", {
            "class": "mobile-share-panel-title"
        });
        c.innerText = na;
        c.textContent = na;
        this.G.appendChild(c);
        this.T = a.C("A", {
            href: "javascript:void(0)",
            "class": "mobile-share-panel-button-close"
        });
        this.T.innerHTML = "&times;";
        c.appendChild(this.T);
        for (var d in this.K) {
            c = a.C("A", {
                target: oa,
                display: ua,
                "class": "mobile-share-panel-button mobile-share-panel-button-" + d.toLowerCase()
            });
            var e = a.C(ja)
              , f = this.K[d];
            e.innerText = f.Pa;
            e.textContent = f.Pa;
            c.href = f.Ya.call(this);
            c.appendChild(e);
            this.G.appendChild(c);
            this.da[d] = c
        }
        this.C = b
    }
    ;
    p.ab = function() {
        kk.O.ab.call(this);
        for (var a in this.da) {
            var b = this.da[a];
            b && lg(hk(this), b, xa, this.Bb)
        }
        lg(hk(this), this.T, xa, this.Bb);
        a = this.Oa();
        lg(hk(this), a, xa, this.Bb);
        this.$b();
        lg(hk(this), this.L, "scroll", this.$b)
    }
    ;
    p.$b = function() {
        var a = this.L.innerHeight
          , b = this.L.innerWidth
          , c = this.L.pageYOffset
          , d = this.L.pageXOffset
          , e = 0;
        200 < a && (e = (a - 200) / 2);
        Qi(this.G, "top", e + c + "px");
        a = 0;
        230 < b && (a = (b - 230) / 2);
        Qi(this.G, "left", a + d + "px")
    }
    ;
    p.Ld = function() {
        return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(this.ma + ": " + this.W)
    }
    ;
    p.Jd = function() {
        return "https://m.facebook.com/sharer.php?u=" + encodeURIComponent(this.W) + "&t=" + encodeURIComponent(this.ma)
    }
    ;
    p.Id = function() {
        return "mailto:?subject=" + encodeURIComponent(this.ma) + "&body=" + encodeURIComponent(this.W)
    }
    ;
    p.Kd = function() {
        return "https://plus.google.com/share?source=blogger:mobile:share&url=" + encodeURIComponent(this.W)
    }
    ;
    p.Bb = function() {
        var a = this.Oa();
        a && (a.style.display = l)
    }
    ;
    var lk = /^((http(s)?):)?\/\/((((lh[3-6](-tt|-d[a-g,z])?\.((ggpht)|(googleusercontent)|(google)))|(([1-4]\.bp\.blogspot)|(bp[0-3]\.blogger))|((((cp|ci|gp)[3-6])|(ap[1-2]))\.(ggpht|googleusercontent))|(gm[1-4]\.ggpht)|(((yt[3-4])|(sp[1-3]))\.(ggpht|googleusercontent)))\.com)|(dp[3-6]\.googleusercontent\.cn)|(lh[3-6]\.(googleadsserving\.cn|xn--9kr7l\.com))|(photos\-image\-(dev|qa)(-auth)?\.corp\.google\.com)|((dev|dev2|dev3|qa|qa2|qa3|qa-red|qa-blue|canary)[-.]lighthouse\.sandbox\.google\.com\/image)|(image\-(dev|qa)\-lighthouse(-auth)?\.sandbox\.google\.com(\/image)?))\//i
      , mk = /^(https?:)?\/\/sp[1-4]\.((ggpht)|(googleusercontent))\.com\//i
      , nk = /^(https?:)?\/\/(qa(-red|-blue)?|dev2?|image-dev)(-|\.)lighthouse(-auth)?\.sandbox\.google\.com\//i
      , ok = /^(https?:)?\/\/lighthouse-(qa(-red|-blue)?|dev2)\.corp\.google\.com\//i;
    function pk(a) {
        return lk.test(a) || mk.test(a) || nk.test(a) || ok.test(a)
    }
    ;function qk() {}
    var rk = typeof Uint8Array == k;
    function sk(a, b) {
        a.J = null;
        b || (b = []);
        a.W = void 0;
        a.F = -1;
        a.C = b;
        a: {
            if (b = a.C.length) {
                --b;
                var c = a.C[b];
                if (!(null === c || typeof c != jb || v(c) || rk && c instanceof Uint8Array)) {
                    a.G = b - a.F;
                    a.D = c;
                    break a
                }
            }
            a.G = Number.MAX_VALUE
        }
        a.$ = {}
    }
    var tk = [];
    function R(a, b) {
        if (b < a.G) {
            b += a.F;
            var c = a.C[b];
            return c === tk ? a.C[b] = [] : c
        }
        if (a.D)
            return c = a.D[b],
            c === tk ? a.D[b] = [] : c
    }
    function uk(a, b) {
        a = R(a, b);
        return null == a ? a : +a
    }
    function S(a, b) {
        a = R(a, b);
        return null == a ? !1 : a
    }
    function T(a, b, c) {
        if (b < a.G)
            a.C[b + a.F] = c;
        else {
            var d = a.G + a.F;
            a.C[d] || (a.D = a.C[d] = {});
            a.D[b] = c
        }
    }
    function vk(a) {
        if (a.J)
            for (var b in a.J) {
                var c = a.J[b];
                if (v(c))
                    for (var d = 0; d < c.length; d++)
                        c[d] && vk(c[d]);
                else
                    c && vk(c)
            }
    }
    qk.prototype.toString = function() {
        vk(this);
        return this.C.toString()
    }
    ;
    function wk(a) {
        sk(this, a)
    }
    z(wk, qk);
    p = wk.prototype;
    p.eb = function() {
        return R(this, 1)
    }
    ;
    p.Pc = function(a) {
        T(this, 1, a)
    }
    ;
    p.Hb = function() {
        return R(this, 12)
    }
    ;
    p.Uc = function(a) {
        T(this, 12, a)
    }
    ;
    p.Fb = function() {
        return R(this, 13)
    }
    ;
    p.Lc = function(a) {
        T(this, 13, a)
    }
    ;
    p.Ye = function() {
        return R(this, 33)
    }
    ;
    p.nh = function(a) {
        T(this, 33, a)
    }
    ;
    p.rc = function() {
        return S(this, 2)
    }
    ;
    p.Kc = function(a) {
        T(this, 2, a)
    }
    ;
    p.qc = function() {
        return R(this, 51)
    }
    ;
    p.Jc = function(a) {
        T(this, 51, a)
    }
    ;
    p.vc = function() {
        return R(this, 32)
    }
    ;
    p.Nc = function(a) {
        T(this, 32, a)
    }
    ;
    p.zc = function() {
        return S(this, 19)
    }
    ;
    p.Rc = function(a) {
        T(this, 19, a)
    }
    ;
    p.Ac = function() {
        return S(this, 52)
    }
    ;
    p.Sc = function(a) {
        T(this, 52, a)
    }
    ;
    p.Bc = function() {
        return S(this, 67)
    }
    ;
    p.Tc = function(a) {
        T(this, 67, a)
    }
    ;
    p.be = function() {
        return R(this, 80)
    }
    ;
    p.kg = function(a) {
        T(this, 80, a)
    }
    ;
    p.oc = function() {
        return S(this, 20)
    }
    ;
    p.Ic = function(a) {
        T(this, 20, a)
    }
    ;
    p.wc = function() {
        return R(this, 60)
    }
    ;
    p.Oc = function(a) {
        T(this, 60, a)
    }
    ;
    p.ce = function() {
        return S(this, 3)
    }
    ;
    p.lg = function(a) {
        T(this, 3, a)
    }
    ;
    p.uc = function() {
        return S(this, 4)
    }
    ;
    p.Mc = function(a) {
        T(this, 4, a)
    }
    ;
    p.ve = function() {
        return R(this, 65)
    }
    ;
    p.Jg = function(a) {
        T(this, 65, a)
    }
    ;
    p.ge = function() {
        return R(this, 94)
    }
    ;
    p.tg = function(a) {
        T(this, 94, a)
    }
    ;
    p.ff = function() {
        return R(this, 9)
    }
    ;
    p.vh = function(a) {
        T(this, 9, a)
    }
    ;
    p.gf = function() {
        return R(this, 10)
    }
    ;
    p.wh = function(a) {
        T(this, 10, a)
    }
    ;
    p.hf = function() {
        return R(this, 11)
    }
    ;
    p.xh = function(a) {
        T(this, 11, a)
    }
    ;
    p.cf = function() {
        return S(this, 14)
    }
    ;
    p.th = function(a) {
        T(this, 14, a)
    }
    ;
    p.ke = function() {
        return S(this, 34)
    }
    ;
    p.xg = function(a) {
        T(this, 34, a)
    }
    ;
    p.ef = function() {
        return S(this, 72)
    }
    ;
    p.uh = function(a) {
        T(this, 72, a)
    }
    ;
    p.fe = function() {
        return R(this, 15)
    }
    ;
    p.qg = function(a) {
        T(this, 15, a)
    }
    ;
    p.qe = function() {
        return R(this, 16)
    }
    ;
    p.Dg = function(a) {
        T(this, 16, a)
    }
    ;
    p.ue = function() {
        return R(this, 17)
    }
    ;
    p.Ig = function(a) {
        T(this, 17, a)
    }
    ;
    p.Cc = function() {
        return R(this, 18)
    }
    ;
    p.zh = function(a) {
        T(this, 18, a)
    }
    ;
    p.Dc = function() {
        return R(this, 45)
    }
    ;
    p.Ah = function(a) {
        T(this, 45, a)
    }
    ;
    p.re = function() {
        return R(this, 22)
    }
    ;
    p.Fg = function(a) {
        T(this, 22, a)
    }
    ;
    p.se = function() {
        return R(this, 54)
    }
    ;
    p.Gg = function(a) {
        T(this, 54, a)
    }
    ;
    p.$e = function() {
        return R(this, 82)
    }
    ;
    p.ph = function(a) {
        T(this, 82, a)
    }
    ;
    p.Ke = function() {
        return R(this, 83)
    }
    ;
    p.Yg = function(a) {
        T(this, 83, a)
    }
    ;
    p.af = function() {
        return R(this, 93)
    }
    ;
    p.qh = function(a) {
        T(this, 93, a)
    }
    ;
    p.Ze = function() {
        return R(this, 95)
    }
    ;
    p.oh = function(a) {
        T(this, 95, a)
    }
    ;
    p.ee = function() {
        return R(this, 21)
    }
    ;
    p.og = function(a) {
        T(this, 21, a)
    }
    ;
    p.$d = function() {
        return S(this, 23)
    }
    ;
    p.ig = function(a) {
        T(this, 23, a)
    }
    ;
    p.jf = function() {
        return R(this, 24)
    }
    ;
    p.yh = function(a) {
        T(this, 24, a)
    }
    ;
    p.nf = function() {
        return R(this, 36)
    }
    ;
    p.Bh = function(a) {
        T(this, 36, a)
    }
    ;
    p.yc = function() {
        return S(this, 6)
    }
    ;
    p.Qc = function(a) {
        T(this, 6, a)
    }
    ;
    p.We = function() {
        return R(this, 26)
    }
    ;
    p.lh = function(a) {
        T(this, 26, a)
    }
    ;
    p.ne = function() {
        return R(this, 30)
    }
    ;
    p.Ag = function(a) {
        T(this, 30, a)
    }
    ;
    p.qf = function() {
        return R(this, 31)
    }
    ;
    p.Ch = function(a) {
        T(this, 31, a)
    }
    ;
    p.Ge = function() {
        return R(this, 27)
    }
    ;
    p.Ug = function(a) {
        T(this, 27, a)
    }
    ;
    p.Ne = function() {
        return R(this, 28)
    }
    ;
    p.ah = function(a) {
        T(this, 28, a)
    }
    ;
    p.Re = function() {
        return R(this, 57)
    }
    ;
    p.gh = function(a) {
        T(this, 57, a)
    }
    ;
    p.Se = function() {
        return R(this, 58)
    }
    ;
    p.hh = function(a) {
        T(this, 58, a)
    }
    ;
    p.Pe = function() {
        return R(this, 59)
    }
    ;
    p.dh = function(a) {
        T(this, 59, a)
    }
    ;
    p.Te = function() {
        return S(this, 35)
    }
    ;
    p.ih = function(a) {
        T(this, 35, a)
    }
    ;
    p.Ue = function() {
        return S(this, 41)
    }
    ;
    p.jh = function(a) {
        T(this, 41, a)
    }
    ;
    p.Oe = function() {
        return S(this, 64)
    }
    ;
    p.bh = function(a) {
        T(this, 64, a)
    }
    ;
    p.Fe = function() {
        return S(this, 48)
    }
    ;
    p.Tg = function(a) {
        T(this, 48, a)
    }
    ;
    p.Qe = function() {
        return S(this, 49)
    }
    ;
    p.eh = function(a) {
        T(this, 49, a)
    }
    ;
    p.we = function() {
        return R(this, 97)
    }
    ;
    p.Kg = function(a) {
        T(this, 97, a)
    }
    ;
    p.Ce = function() {
        return S(this, 37)
    }
    ;
    p.Qg = function(a) {
        T(this, 37, a)
    }
    ;
    p.Zd = function() {
        return R(this, 38)
    }
    ;
    p.hg = function(a) {
        T(this, 38, a)
    }
    ;
    p.Yd = function() {
        return R(this, 86)
    }
    ;
    p.gg = function(a) {
        T(this, 86, a)
    }
    ;
    p.Xd = function() {
        return R(this, 39)
    }
    ;
    p.eg = function(a) {
        T(this, 39, a)
    }
    ;
    p.Vd = function() {
        return R(this, 87)
    }
    ;
    p.cg = function(a) {
        T(this, 87, a)
    }
    ;
    p.He = function() {
        return R(this, 88)
    }
    ;
    p.Vg = function(a) {
        T(this, 88, a)
    }
    ;
    p.bf = function() {
        return R(this, 89)
    }
    ;
    p.sh = function(a) {
        T(this, 89, a)
    }
    ;
    p.De = function() {
        return R(this, 40)
    }
    ;
    p.Rg = function(a) {
        T(this, 40, a)
    }
    ;
    p.ie = function() {
        return R(this, 42)
    }
    ;
    p.vg = function(a) {
        T(this, 42, a)
    }
    ;
    p.he = function() {
        return R(this, 43)
    }
    ;
    p.ug = function(a) {
        T(this, 43, a)
    }
    ;
    p.Me = function() {
        return R(this, 44)
    }
    ;
    p.$g = function(a) {
        T(this, 44, a)
    }
    ;
    p.Le = function() {
        return R(this, 62)
    }
    ;
    p.Zg = function(a) {
        T(this, 62, a)
    }
    ;
    p.Ee = function() {
        return R(this, 46)
    }
    ;
    p.Sg = function(a) {
        T(this, 46, a)
    }
    ;
    p.Je = function() {
        return R(this, 61)
    }
    ;
    p.Xg = function(a) {
        T(this, 61, a)
    }
    ;
    p.le = function() {
        return R(this, 50)
    }
    ;
    p.yg = function(a) {
        T(this, 50, a)
    }
    ;
    p.Be = function() {
        return R(this, 53)
    }
    ;
    p.Pg = function(a) {
        T(this, 53, a)
    }
    ;
    p.Ae = function() {
        return R(this, 55)
    }
    ;
    p.Og = function(a) {
        T(this, 55, a)
    }
    ;
    p.Xe = function() {
        return R(this, 56)
    }
    ;
    p.mh = function(a) {
        T(this, 56, a)
    }
    ;
    p.sf = function() {
        return R(this, 63)
    }
    ;
    p.Eh = function(a) {
        T(this, 63, a)
    }
    ;
    p.uf = function() {
        return R(this, 81)
    }
    ;
    p.Gh = function(a) {
        T(this, 81, a)
    }
    ;
    p.de = function() {
        return R(this, 90)
    }
    ;
    p.mg = function(a) {
        T(this, 90, a)
    }
    ;
    p.rf = function() {
        return R(this, 68)
    }
    ;
    p.Dh = function(a) {
        T(this, 68, a)
    }
    ;
    p.tf = function() {
        return R(this, 69)
    }
    ;
    p.Fh = function(a) {
        T(this, 69, a)
    }
    ;
    p.xe = function() {
        return R(this, 66)
    }
    ;
    p.Lg = function(a) {
        T(this, 66, a)
    }
    ;
    p.pe = function() {
        return R(this, 70)
    }
    ;
    p.Cg = function(a) {
        T(this, 70, a)
    }
    ;
    p.te = function() {
        return R(this, 71)
    }
    ;
    p.Hg = function(a) {
        T(this, 71, a)
    }
    ;
    p.ye = function() {
        return R(this, 73)
    }
    ;
    p.Mg = function(a) {
        T(this, 73, a)
    }
    ;
    p.je = function() {
        return R(this, 84)
    }
    ;
    p.wg = function(a) {
        T(this, 84, a)
    }
    ;
    p.ze = function() {
        return R(this, 91)
    }
    ;
    p.Ng = function(a) {
        T(this, 91, a)
    }
    ;
    p.oe = function() {
        return R(this, 96)
    }
    ;
    p.Bg = function(a) {
        T(this, 96, a)
    }
    ;
    p.Ud = function() {
        return R(this, 74)
    }
    ;
    p.bg = function(a) {
        T(this, 74, a)
    }
    ;
    p.ag = function() {
        return R(this, 75)
    }
    ;
    p.Eg = function(a) {
        T(this, 75, a)
    }
    ;
    p.Ie = function() {
        return uk(this, 76)
    }
    ;
    p.Wg = function(a) {
        T(this, 76, a)
    }
    ;
    p.vf = function() {
        return uk(this, 77)
    }
    ;
    p.Hh = function(a) {
        T(this, 77, a)
    }
    ;
    p.Ve = function() {
        return uk(this, 78)
    }
    ;
    p.kh = function(a) {
        T(this, 78, a)
    }
    ;
    p.me = function() {
        return uk(this, 79)
    }
    ;
    p.zg = function(a) {
        T(this, 79, a)
    }
    ;
    p.Wd = function() {
        return R(this, 85)
    }
    ;
    p.dg = function(a) {
        T(this, 85, a)
    }
    ;
    p.ae = function() {
        return R(this, 92)
    }
    ;
    p.jg = function(a) {
        T(this, 92, a)
    }
    ;
    function U() {
        sk(this, void 0)
    }
    z(U, wk);
    U.prototype.T = function(a) {
        this.K = a
    }
    ;
    U.prototype.M = m("K");
    U.prototype.Z = function(a) {
        this.L = a
    }
    ;
    U.prototype.N = m("L");
    function xk() {
        this.D = void 0;
        this.C = {}
    }
    p = xk.prototype;
    p.set = function(a, b) {
        yk(this, a, b, !1)
    }
    ;
    p.add = function(a, b) {
        yk(this, a, b, !0)
    }
    ;
    function yk(a, b, c, d) {
        for (var e = 0; e < b.length; e++) {
            var f = b.charAt(e);
            a.C[f] || (a.C[f] = new xk);
            a = a.C[f]
        }
        if (d && void 0 !== a.D)
            throw Error('The collection already contains the key "' + b + '"');
        a.D = c
    }
    function zk(a, b) {
        for (var c = 0; c < b.length; c++)
            if (a = a.C[b.charAt(c)],
            !a)
                return;
        return a
    }
    p.get = function(a) {
        return (a = zk(this, a)) ? a.D : void 0
    }
    ;
    p.ca = function() {
        var a = [];
        Ak(this, a);
        return a
    }
    ;
    function Ak(a, b) {
        void 0 !== a.D && b.push(a.D);
        for (var c in a.C)
            Ak(a.C[c], b)
    }
    p.ia = function(a) {
        var b = [];
        if (a) {
            for (var c = this, d = 0; d < a.length; d++) {
                var e = a.charAt(d);
                if (!c.C[e])
                    return [];
                c = c.C[e]
            }
            Bk(c, a, b)
        } else
            Bk(this, "", b);
        return b
    }
    ;
    function Bk(a, b, c) {
        void 0 !== a.D && c.push(b);
        for (var d in a.C)
            Bk(a.C[d], b + d, c)
    }
    p.X = function() {
        var a = this.ca();
        if (a.X && typeof a.X == k)
            a = a.X();
        else if (Ub(a) || u(a))
            a = a.length;
        else {
            var b = 0, c;
            for (c in a)
                b++;
            a = b
        }
        return a
    }
    ;
    p.ja = function() {
        return void 0 === this.D && Xc(this.C)
    }
    ;
    function Ck() {
        if (!Dk) {
            var a = Dk = new xk, b;
            for (b in Ek)
                a.add(b, Ek[b])
        }
    }
    var Dk;
    function V(a, b) {
        this.C = a;
        this.D = b
    }
    var Ek = {
        a: new V([3, 0],[U.prototype.og, U.prototype.mh]),
        al: new V([3],[U.prototype.bg]),
        b: new V([3, 0],[U.prototype.ig, U.prototype.hg]),
        ba: new V([0],[U.prototype.dg]),
        bc: new V([0],[U.prototype.cg]),
        br: new V([0],[U.prototype.gg]),
        c: new V([3, 0],[U.prototype.Kc, U.prototype.eg]),
        cc: new V([3],[U.prototype.Jc]),
        ci: new V([3],[U.prototype.Nc]),
        cp: new V([0],[U.prototype.jg]),
        cv: new V([0],[U.prototype.tg]),
        d: new V([3],[U.prototype.lg]),
        df: new V([3],[U.prototype.kg]),
        dv: new V([3],[U.prototype.mg]),
        e: new V([0],[U.prototype.qg]),
        f: new V([4],[U.prototype.Dg]),
        fg: new V([3],[U.prototype.xg]),
        fh: new V([3],[U.prototype.Ag]),
        fm: new V([3],[U.prototype.wg]),
        fo: new V([2],[U.prototype.zg]),
        ft: new V([3],[U.prototype.yg]),
        fv: new V([3],[U.prototype.Ch]),
        g: new V([3],[U.prototype.th]),
        gd: new V([3],[U.prototype.Yg]),
        h: new V([3, 0],[U.prototype.Mc, U.prototype.Lc]),
        i: new V([3],[U.prototype.Fg]),
        ic: new V([0],[U.prototype.Hg]),
        id: new V([3],[U.prototype.Cg]),
        il: new V([3],[U.prototype.Bg]),
        ip: new V([3],[U.prototype.Gg]),
        iv: new V([0],[U.prototype.Eg]),
        j: new V([1],[U.prototype.T]),
        k: new V([3, 0],[U.prototype.Ig, U.prototype.vg]),
        l: new V([0],[U.prototype.$g]),
        lf: new V([3],[U.prototype.Jg]),
        lo: new V([3],[U.prototype.Kg]),
        m: new V([0],[U.prototype.Eh]),
        md: new V([3],[U.prototype.Ng]),
        mm: new V([4],[U.prototype.Gh]),
        mo: new V([3],[U.prototype.Mg]),
        mv: new V([3],[U.prototype.Lg]),
        n: new V([3],[U.prototype.Ic]),
        nc: new V([3],[U.prototype.Og]),
        nd: new V([3],[U.prototype.Pg]),
        ng: new V([3],[U.prototype.oh]),
        no: new V([3],[U.prototype.Qg]),
        ns: new V([3],[U.prototype.Rg]),
        nt0: new V([4],[U.prototype.Bh]),
        nu: new V([3],[U.prototype.Sg]),
        nw: new V([3],[U.prototype.Tg]),
        o: new V([1, 3],[U.prototype.Z, U.prototype.Ug]),
        p: new V([3, 0],[U.prototype.Rc, U.prototype.ug]),
        pa: new V([3],[U.prototype.Xg]),
        pc: new V([0],[U.prototype.Vg]),
        pd: new V([3],[U.prototype.Oc]),
        pf: new V([3],[U.prototype.Tc]),
        pg: new V([3],[U.prototype.uh]),
        pi: new V([2],[U.prototype.Wg]),
        pp: new V([3],[U.prototype.Sc]),
        q: new V([4],[U.prototype.ah]),
        r: new V([3, 0],[U.prototype.Qc, U.prototype.lh]),
        rg: new V([3],[U.prototype.dh]),
        rh: new V([3],[U.prototype.eh]),
        rj: new V([3],[U.prototype.gh]),
        ro: new V([2],[U.prototype.kh]),
        rp: new V([3],[U.prototype.hh]),
        rw: new V([3],[U.prototype.ih]),
        rwa: new V([3],[U.prototype.bh]),
        rwu: new V([3],[U.prototype.jh]),
        s: new V([3, 0],[U.prototype.nh, U.prototype.Pc]),
        sc: new V([0],[U.prototype.sh]),
        sg: new V([3],[U.prototype.ph]),
        sm: new V([3],[U.prototype.qh]),
        t: new V([4],[U.prototype.yh]),
        u: new V([3],[U.prototype.zh]),
        ut: new V([3],[U.prototype.Ah]),
        v: new V([0],[U.prototype.Zg]),
        vb: new V([0],[U.prototype.Dh]),
        vl: new V([0],[U.prototype.Fh]),
        w: new V([0],[U.prototype.Uc]),
        x: new V([0],[U.prototype.vh]),
        y: new V([0],[U.prototype.wh]),
        ya: new V([2],[U.prototype.Hh]),
        z: new V([0],[U.prototype.xh])
    };
    function Fk(a, b) {
        var c = new U
          , d = new U;
        if ("" != b) {
            b = b.split("-");
            for (var e = 0; e < b.length; e++) {
                var f = b[e];
                if (0 != f.length) {
                    var h = f
                      , n = !1
                      , q = h;
                    var w = h.substring(0, 1);
                    w != w.toLowerCase() && (n = !0,
                    q = h.substring(0, 1).toLowerCase() + h.substring(1));
                    var O = Dk;
                    for (w = 1; w <= q.length; ++w) {
                        var F = O
                          , E = q.substring(0, w);
                        if (0 == E.length ? F.ja() : !zk(F, E))
                            break
                    }
                    w = 1 == w ? null : (q = O.get(q.substring(0, w - 1))) ? {
                        Uf: h.substring(0, w - 1),
                        value: h.substring(w - 1),
                        Mh: n,
                        attributes: q
                    } : null;
                    if (w) {
                        h = [];
                        n = [];
                        q = !1;
                        for (O = 0; O < w.attributes.C.length; O++) {
                            F = w.attributes.C[O];
                            var J = w.value;
                            E = e;
                            if (w.Mh && 1 == F)
                                for (var pa = J.length; 12 > pa && E < b.length - 1; )
                                    J += "-" + b[E + 1],
                                    pa = J.length,
                                    ++E;
                            else if (2 == F)
                                for (; E < b.length - 1 && b[E + 1].match(/^[\d\.]/); )
                                    J += "-" + b[E + 1],
                                    ++E;
                            pa = w.attributes.D[O];
                            J = Gk(a, F)(w.Uf, J, c, d, pa);
                            if (null === J) {
                                q = !0;
                                e = E;
                                break
                            } else
                                h.push(F),
                                n.push(J)
                        }
                        if (!q)
                            for (w = 0; w < n.length; w++)
                                q = h[w],
                                J = n[w],
                                Hk(a, q)(f, J)
                    }
                }
            }
        }
        return new Ik(c,d)
    }
    function Jk(a, b, c, d, e) {
        e.apply(c, [b]);
        a = a.substring(0, 1);
        e.apply(d, [a == a.toUpperCase()])
    }
    p = Ck.prototype;
    p.Xf = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        isFinite(b) && (b = String(b));
        b = u(b) ? /^\s*-?0x/i.test(b) ? parseInt(b, 16) : parseInt(b, 10) : NaN;
        if (isNaN(b))
            return 1;
        Jk(a, b, c, d, e);
        return null
    }
    ;
    p.Mf = Db();
    p.Wf = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        var f = Number(b);
        b = 0 == f && /^[\s\xa0]*$/.test(b) ? NaN : f;
        if (isNaN(b))
            return 1;
        Jk(a, b, c, d, e);
        return null
    }
    ;
    p.Lf = Db();
    p.Vf = function(a, b, c, d, e) {
        if ("" != b)
            return 2;
        Jk(a, !0, c, d, e);
        return null
    }
    ;
    p.Kf = Db();
    p.Yf = function(a, b, c, d, e) {
        if ("" == b)
            return 0;
        Jk(a, b, c, d, e);
        return null
    }
    ;
    p.Nf = Db();
    function Gk(a, b) {
        switch (b) {
        case 0:
            return x(a.Xf, a);
        case 2:
            return x(a.Wf, a);
        case 3:
            return x(a.Vf, a);
        case 4:
        case 1:
            return x(a.Yf, a);
        default:
            return Db()
        }
    }
    function Hk(a, b) {
        switch (b) {
        case 0:
            return x(a.Mf, a);
        case 2:
            return x(a.Lf, a);
        case 3:
            return x(a.Kf, a);
        case 4:
        case 1:
            return x(a.Nf, a);
        default:
            return Db()
        }
    }
    function Ik(a, b) {
        this.C = a;
        this.D = b
    }
    ;function Kk(a, b) {
        null != a && this.D.apply(this, arguments)
    }
    Kk.prototype.C = "";
    Kk.prototype.set = function(a) {
        this.C = "" + a
    }
    ;
    Kk.prototype.D = function(a, b, c) {
        this.C += String(a);
        if (null != b)
            for (var d = 1; d < arguments.length; d++)
                this.C += arguments[d];
        return this
    }
    ;
    Kk.prototype.toString = m("C");
    function Lk(a) {
        this.G = null;
        this.F = [];
        this.D = null;
        Mk(this, a)
    }
    function Nk(a) {
        null == a.G && (a.G = new Ck);
        return a.G
    }
    function Mk(a, b) {
        a.D = b ? u(b) ? Fk(Nk(a), b) : b : Fk(Nk(a), "")
    }
    function Ok(a, b, c, d) {
        b || typeof b == ib && 0 == b || (b = void 0);
        var e = a.D.C;
        a = a.D.D;
        var f = c.call(e);
        b != f && (void 0 != f && c.call(a),
        d.call(e, b))
    }
    p = Lk.prototype;
    p.ub = function(a) {
        Ok(this, a, U.prototype.rc, U.prototype.Kc);
        return this
    }
    ;
    p.tb = function(a) {
        Ok(this, a, U.prototype.qc, U.prototype.Jc);
        return this
    }
    ;
    p.wb = function(a) {
        Ok(this, a, U.prototype.vc, U.prototype.Nc);
        return this
    }
    ;
    p.Va = function(a) {
        Ok(this, a, U.prototype.Fb, U.prototype.Lc);
        return this
    }
    ;
    p.sb = function(a) {
        Ok(this, a, U.prototype.oc, U.prototype.Ic);
        return this
    }
    ;
    p.yb = function(a) {
        Ok(this, a, U.prototype.zc, U.prototype.Rc);
        return this
    }
    ;
    p.xb = function(a) {
        Ok(this, a, U.prototype.wc, U.prototype.Oc);
        return this
    }
    ;
    p.Ab = function(a) {
        Ok(this, a, U.prototype.Bc, U.prototype.Tc);
        return this
    }
    ;
    p.zb = function(a) {
        Ok(this, a, U.prototype.Ac, U.prototype.Sc);
        return this
    }
    ;
    p.Ga = function(a) {
        Ok(this, a, U.prototype.eb, U.prototype.Pc);
        return this
    }
    ;
    p.Wa = function(a) {
        Ok(this, a, U.prototype.Hb, U.prototype.Uc);
        return this
    }
    ;
    function Pk(a) {
        Mk(a, "");
        return a
    }
    p.sa = function() {
        this.F.length = 0;
        W(this, "s", U.prototype.eb);
        W(this, "w", U.prototype.Hb);
        X(this, "c", U.prototype.rc);
        W(this, "c", U.prototype.Xd, 16, 6);
        X(this, "d", U.prototype.ce);
        W(this, "h", U.prototype.Fb);
        X(this, "s", U.prototype.Ye);
        X(this, "h", U.prototype.uc);
        X(this, "p", U.prototype.zc);
        X(this, "pa", U.prototype.Je);
        X(this, "pd", U.prototype.wc);
        X(this, "pp", U.prototype.Ac);
        X(this, "pf", U.prototype.Bc);
        W(this, "p", U.prototype.he);
        X(this, "n", U.prototype.oc);
        W(this, "r", U.prototype.We);
        X(this, "r", U.prototype.yc);
        X(this, "fh", U.prototype.ne);
        X(this, "fv", U.prototype.qf);
        X(this, "cc", U.prototype.qc);
        X(this, "ci", U.prototype.vc);
        X(this, "o", U.prototype.Ge);
        Qk(this, "o", U.prototype.N);
        Qk(this, "j", U.prototype.M);
        W(this, "x", U.prototype.ff);
        W(this, "y", U.prototype.gf);
        W(this, "z", U.prototype.hf);
        X(this, "g", U.prototype.cf);
        X(this, "fg", U.prototype.ke);
        X(this, "ft", U.prototype.le);
        W(this, "e", U.prototype.fe);
        Qk(this, "f", U.prototype.qe);
        X(this, "k", U.prototype.ue);
        W(this, "k", U.prototype.ie);
        X(this, "u", U.prototype.Cc);
        X(this, "ut", U.prototype.Dc);
        X(this, "i", U.prototype.re);
        X(this, "ip", U.prototype.se);
        X(this, "a", U.prototype.ee);
        W(this, "a", U.prototype.Xe);
        W(this, "m", U.prototype.sf);
        W(this, "vb", U.prototype.rf);
        W(this, "vl", U.prototype.tf);
        X(this, "lf", U.prototype.ve);
        X(this, "mv", U.prototype.xe);
        X(this, "id", U.prototype.pe);
        W(this, "ic", U.prototype.te);
        X(this, "b", U.prototype.$d);
        W(this, "b", U.prototype.Zd);
        Qk(this, "t", U.prototype.jf);
        Qk(this, "nt0", U.prototype.nf);
        X(this, "rw", U.prototype.Te);
        X(this, "rwu", U.prototype.Ue);
        X(this, "rwa", U.prototype.Oe);
        X(this, "nw", U.prototype.Fe);
        X(this, "rh", U.prototype.Qe);
        X(this, "nc", U.prototype.Ae);
        X(this, "nd", U.prototype.Be);
        X(this, "no", U.prototype.Ce);
        Qk(this, "q", U.prototype.Ne);
        X(this, "ns", U.prototype.De);
        W(this, "l", U.prototype.Me);
        W(this, "v", U.prototype.Le);
        X(this, "nu", U.prototype.Ee);
        X(this, "rj", U.prototype.Re);
        X(this, "rp", U.prototype.Se);
        X(this, "rg", U.prototype.Pe);
        X(this, "pg", U.prototype.ef);
        X(this, "mo", U.prototype.ye);
        X(this, "al", U.prototype.Ud);
        W(this, "iv", U.prototype.ag);
        W(this, "pi", U.prototype.Ie);
        W(this, "ya", U.prototype.vf);
        W(this, "ro", U.prototype.Ve);
        W(this, "fo", U.prototype.me);
        X(this, "df", U.prototype.be);
        Qk(this, "mm", U.prototype.uf);
        X(this, "sg", U.prototype.$e);
        X(this, "gd", U.prototype.Ke);
        X(this, "fm", U.prototype.je);
        W(this, "ba", U.prototype.Wd);
        W(this, "br", U.prototype.Yd);
        W(this, "bc", U.prototype.Vd, 16, 6);
        W(this, "pc", U.prototype.He, 16, 6);
        W(this, "sc", U.prototype.bf, 16, 6);
        X(this, "dv", U.prototype.de);
        X(this, "md", U.prototype.ze);
        W(this, "cp", U.prototype.ae);
        X(this, "sm", U.prototype.af);
        W(this, "cv", U.prototype.ge);
        X(this, "ng", U.prototype.Ze);
        X(this, "il", U.prototype.oe);
        X(this, "lo", U.prototype.we);
        return this.F.join("-")
    }
    ;
    function Rk(a, b) {
        if (void 0 == b)
            return "";
        a = b - a.length;
        return 0 >= a ? "" : gd("0", a)
    }
    function W(a, b, c, d, e) {
        var f = c.call(a.D.C);
        if (void 0 != f && null != f) {
            d = void 0 == d || 10 != d && 16 != d ? 10 : d;
            f = f.toString(d);
            var h = new Kk;
            h.D(16 == d ? "0x" : "");
            h.D(Rk(f, e));
            h.D(f);
            Sk(a, b, h.toString(), c)
        }
    }
    function X(a, b, c) {
        c.call(a.D.C) && Sk(a, b, "", c)
    }
    function Qk(a, b, c) {
        var d = c.call(a.D.C);
        d && Sk(a, b, d, c)
    }
    function Sk(a, b, c, d) {
        d.call(a.D.D) && (b = b.substring(0, 1).toUpperCase() + b.substring(1));
        a.F.push(b + c)
    }
    ;function Y(a) {
        Lk.call(this, a)
    }
    z(Y, Lk);
    p = Y.prototype;
    p.ub = function(a) {
        a && Tk(this);
        return Y.O.ub.call(this, a)
    }
    ;
    p.Va = function(a) {
        null != a && this.Ga();
        return Y.O.Va.call(this, a)
    }
    ;
    p.wb = function(a) {
        a && Tk(this);
        return Y.O.wb.call(this, a)
    }
    ;
    p.tb = function(a) {
        a && Tk(this);
        return Y.O.tb.call(this, a)
    }
    ;
    p.Ga = function(a) {
        Wb(a) && (a = Math.max(a.width, a.height));
        null != a && (this.Wa(),
        this.Va());
        return Y.O.Ga.call(this, a)
    }
    ;
    p.yb = function(a) {
        a && Tk(this);
        return Y.O.yb.call(this, a)
    }
    ;
    p.zb = function(a) {
        a && Tk(this);
        return Y.O.zb.call(this, a)
    }
    ;
    p.Ab = function(a) {
        a && Tk(this);
        return Y.O.Ab.call(this, a)
    }
    ;
    p.sb = function(a) {
        a && Tk(this);
        return Y.O.sb.call(this, a)
    }
    ;
    p.xb = function(a) {
        a && Tk(this);
        return Y.O.xb.call(this, a)
    }
    ;
    p.Wa = function(a) {
        null != a && this.Ga();
        return Y.O.Wa.call(this, a)
    }
    ;
    function Tk(a) {
        a.sb();
        a.tb();
        a.ub();
        a.wb();
        a.xb();
        a.yb();
        a.zb();
        a.Ab()
    }
    p.sa = function() {
        var a = this.D.C;
        a.Cc() || a.Dc() ? a.eb() || this.Ga(0) : (a = this.D.C,
        a.eb() || a.Hb() || a.Fb() || (this.Ga(),
        this.Va(),
        this.Wa(),
        Tk(this)));
        return Y.O.sa.call(this)
    }
    ;
    var Uk = /^[^\/]*\/\//;
    function Vk(a) {
        this.G = a;
        this.J = "";
        (a = this.G.match(Uk)) && a[0] ? (this.J = a[0],
        a = this.J.match(/\w+/) ? this.G : "http://" + this.G.substring(this.J.length)) : a = "http://" + this.G;
        this.D = Bj(a, !0);
        this.K = !0;
        this.$ = !1
    }
    function Wk(a, b) {
        a.F = a.F ? a.F + ("/" + b) : b
    }
    function Xk(a) {
        if (void 0 == a.C) {
            a.F = null;
            a.C = a.D.J.substring(1).split("/");
            var b = a.C.length;
            2 < b && "u" == a.C[0] && (Wk(a, a.C[0] + "/" + a.C[1]),
            a.C.shift(),
            a.C.shift(),
            b -= 2);
            if (0 == b || 4 == b || 7 < b)
                return a.K = !1,
                a.C;
            if (2 == b)
                Wk(a, a.C[0]);
            else if ("image" == a.C[0])
                Wk(a, a.C[0]);
            else if (7 == b || 3 == b)
                return a.K = !1,
                a.C;
            if (3 >= b) {
                a.$ = !0;
                3 == b && (Wk(a, a.C[1]),
                a.C.shift(),
                --b);
                --b;
                var c = a.C[b]
                  , d = c.indexOf("=");
                -1 != d && (a.C[b] = c.substr(0, d),
                a.C.push(c.substr(d + 1)))
            }
        }
        return a.C
    }
    function Yk(a) {
        Xk(a);
        return a.$
    }
    function Zk(a) {
        Xk(a);
        void 0 == a.F && (a.F = null);
        return a.F
    }
    function $k(a) {
        switch (Xk(a).length) {
        case 7:
            return !0;
        case 6:
            return null == Zk(a);
        case 5:
            return !1;
        case 3:
            return !0;
        case 2:
            return null == Zk(a);
        case 1:
            return !1;
        default:
            return !1
        }
    }
    function al(a, b) {
        if (Yk(a))
            a: {
                var c = null != Zk(a) ? 1 : 0;
                switch (b) {
                case 6:
                    b = 0 + c;
                    break;
                case 4:
                    if (!$k(a)) {
                        a = null;
                        break a
                    }
                    b = 1 + c;
                    break;
                default:
                    a = null;
                    break a
                }
                a = Xk(a)[b]
            }
        else
            a: {
                c = null != Zk(a) ? 1 : 0;
                switch (b) {
                case 0:
                    b = 0 + c;
                    break;
                case 1:
                    b = 1 + c;
                    break;
                case 2:
                    b = 2 + c;
                    break;
                case 3:
                    b = 3 + c;
                    break;
                case 4:
                    if (!$k(a)) {
                        a = null;
                        break a
                    }
                    b = 4 + c;
                    break;
                case 5:
                    b = $k(a) ? 1 : 0;
                    b = 4 + c + b;
                    break;
                default:
                    a = null;
                    break a
                }
                a = Xk(a)[b]
            }
        return a
    }
    function bl(a) {
        void 0 == a.Z && (a.Z = al(a, 0));
        return a.Z
    }
    function cl(a) {
        void 0 == a.da && (a.da = al(a, 1));
        return a.da
    }
    function dl(a) {
        void 0 == a.N && (a.N = al(a, 2));
        return a.N
    }
    function el(a) {
        void 0 == a.fa && (a.fa = al(a, 3));
        return a.fa
    }
    function fl(a) {
        void 0 == a.W && (a.W = al(a, 4));
        return a.W
    }
    function gl(a) {
        void 0 == a.M && (a.M = al(a, 5));
        return a.M
    }
    ;function hl() {}
    function il(a) {
        Vk.call(this, a)
    }
    z(il, Vk);
    function jl(a) {
        this.C = null;
        a instanceof il || (void 0 == kl && (kl = new hl),
        a = new il(a.toString()));
        a = this.C = a;
        if (void 0 == a.L) {
            var b = fl(a);
            b || (b = "");
            a.L = Fk(new Ck, b)
        }
        Lk.call(this, a.L);
        this.L = this.C.J;
        a = this.C;
        b = a.D.K;
        this.K = a.D.G + (b ? ":" + b : "");
        this.J = this.C.D.C.toString()
    }
    var kl;
    z(jl, Y);
    function ll(a) {
        a.J = "";
        return a
    }
    jl.prototype.sa = function() {
        var a = this.C;
        Xk(a);
        if (!a.K)
            return this.C.G;
        a = jl.O.sa.call(this);
        var b = [];
        null != Zk(this.C) && b.push(Zk(this.C));
        if (Yk(this.C)) {
            var c = this.C;
            void 0 == c.T && (c.T = al(c, 6));
            b.push(c.T + (a ? "=" + a : ""))
        } else
            b.push(bl(this.C)),
            b.push(cl(this.C)),
            b.push(dl(this.C)),
            b.push(el(this.C)),
            a && b.push(a),
            b.push(gl(this.C));
        return this.L + this.K + "/" + b.join("/") + (this.J ? "?" + this.J : "")
    }
    ;
    function ml() {
        this.F = null;
        this.C = {};
        this.D = !1
    }
    Sb(ml);
    ml.prototype.J = function(a, b, c) {
        c.ctrlKey || c.altKey || c.shiftKey || c.metaKey || (a = this.C[a]) && 0 < a.length && (nl(this),
        gg()(a, b),
        c.preventDefault())
    }
    ;
    ml.prototype.K = function() {
        nl(this);
        eg(Rb)
    }
    ;
    function nl(a) {
        a.D || (document.body.appendChild(ue("LINK", {
            type: "text/css",
            rel: "stylesheet",
            href: a.G
        })),
        a.D = !0)
    }
    ;function ol() {
        this.D = {};
        this.C = 0;
        this.J = [];
        this.F = [];
        var a = this;
        this.K = function() {
            pl(a)
        }
    }
    function ql(a) {
        for (var b = a.D, c = re(document, "img", "delayLoad", void 0), d = 0; d < c.length; d++)
            if (c[d].style.display == l && (c[d].style.display = ""),
            5 > d) {
                var e = c[d];
                "" != e.longDesc && (e.src = e.longDesc)
            } else
                e = c[d].id,
                "" == e && (e = "av-delay-tempId-" + d),
                b[e] = {
                    lc: c[d],
                    key: e
                },
                a.C++;
        0 != a.C && (a.M = L(window, "scroll", a.K),
        a.L = L(window, "resize", a.K),
        rl(a))
    }
    function pl(a) {
        a.G && window.clearTimeout(a.G);
        a.G = window.setTimeout(function() {
            a.G = null;
            rl(a)
        }, 100)
    }
    function rl(a) {
        if (!(0 > a.C))
            if (0 == a.C)
                nf(a.M),
                nf(a.L),
                a.C = -1;
            else {
                var b = !1, c;
                for (c in a.D) {
                    a: {
                        var d = a;
                        var e = a.D[c]
                          , f = window.document;
                        f = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        f = (new pe(f.clientWidth,f.clientHeight)).height;
                        var h = e.lc;
                        1 == h.nodeType ? (h = Vi(h),
                        h = new oe(h.left,h.top)) : (h = h.changedTouches ? h.changedTouches[0] : h,
                        h = new oe(h.clientX,h.clientY));
                        h = h.y;
                        if (0 <= h && h <= f)
                            d.J.push(e);
                        else if (0 < h && h < Math.round(2.25 * f))
                            d.F.push(e);
                        else if (0 > h && h > Math.round(-1.25 * f))
                            d.F.push(e);
                        else {
                            d = !1;
                            break a
                        }
                        d = !0
                    }
                    d && (b = !0)
                }
                if (b) {
                    b = a.J.concat(a.F);
                    for (c = 0; c < b.length; c++)
                        d = b[c].lc,
                        "" != d.longDesc && (d.src = d.longDesc),
                        a.C--,
                        delete a.D[b[c].key];
                    a.J = [];
                    a.F = []
                }
            }
    }
    ;var sl = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
    };
    function tl(a) {
        var b = {};
        a = String(a);
        var c = "#" == a.charAt(0) ? a : "#" + a;
        if (ul.test(c)) {
            a = c;
            if (!ul.test(a))
                throw Error("'" + a + "' is not a valid hex color");
            4 == a.length && (a = a.replace(vl, "#$1$1$2$2$3$3"));
            b.Jb = a.toLowerCase();
            b.type = "hex";
            return b
        }
        a: {
            var d = a.match(wl);
            if (d) {
                c = Number(d[1]);
                var e = Number(d[2]);
                d = Number(d[3]);
                if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                    c = [c, e, d];
                    break a
                }
            }
            c = []
        }
        if (c.length) {
            a = c[0];
            e = c[1];
            c = c[2];
            a = Number(a);
            e = Number(e);
            c = Number(c);
            if (a != (a & 255) || e != (e & 255) || c != (c & 255))
                throw Error('"(' + a + "," + e + "," + c + '") is not a valid RGB color');
            c |= a << 16 | e << 8;
            a = 16 > a ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16);
            b.Jb = a;
            b.type = "rgb";
            return b
        }
        if (sl && (c = sl[a.toLowerCase()]))
            return b.Jb = c,
            b.type = "named",
            b;
        throw Error(a + " is not a valid color string");
    }
    var vl = /#(.)(.)(.)/
      , ul = /^#(?:[0-9a-f]{3}){1,2}$/i
      , wl = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    var xl = !H.product.R && !bd();
    function yl(a) {
        if (/-[a-z]/.test("commentId"))
            return null;
        if (xl && a.dataset) {
            if (dd() && !("commentId"in a.dataset))
                return null;
            a = a.dataset.commentId;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "commentId".replace(/([A-Z])/g, "-$1").toLowerCase())
    }
    ;var zl = {};
    function Al(a) {
        Q.call(this, "Blog", a);
        this.C = a.V;
        this.K = new yi(Di());
        if (this.C.data) {
            a = new th;
            this.L = this.C.data.showBacklinks;
            this.M = a.Y(va);
            this.J = a.Y("blog.canonicalUrl");
            this.N = a.Y("blog.url");
            if (this.C.data.lightboxEnabled) {
                var b = this.C.data.lightboxModuleUrl
                  , c = this.C.data.lightboxCssUrl
                  , d = ml.Ha()
                  , e = sd(b);
                ig(dg.Ha(), b, e);
                d.G = c;
                b = re(document, "DIV", "post-body", this.C.C);
                for (c = 0; c < b.length; c++) {
                    e = "fakeId" + Bl++;
                    d = ml.Ha();
                    for (var f = re(document, "IMG", void 0, b[c]), h = f.length, n = [], q = 0; q < h; q++) {
                        var w = f[q].src
                          , O = null
                          , F = He(f[q], "A");
                        if (F) {
                            F = F.href;
                            var E = F;
                            var J = w;
                            pk(E) && pk(J) ? (E = new il(E ? Pk(ll(new jl(E))).sa() : ""),
                            J = new il(J ? Pk(ll(new jl(J))).sa() : ""),
                            J = E.D.J == J.D.J) : J = !1;
                            if (J) {
                                if (F != w && (O = w),
                                w = F,
                                F = fl(new il(w)))
                                    F = Fk(new Ck, F),
                                    F = new Y(F),
                                    Ok(F, void 0, U.prototype.uc, U.prototype.Mc),
                                    Ok(F, void 0, U.prototype.yc, U.prototype.Qc),
                                    F = F.sa(),
                                    w = new jl(w),
                                    Mk(w, F),
                                    w = w.sa()
                            } else if (F != w)
                                continue;
                            n.push({
                                imageUrl: w,
                                thumbnailUrl: O
                            });
                            L(f[q], xa, x(d.J, d, e, n.length - 1))
                        }
                    }
                    0 < n.length && (d.C[e] = n,
                    d.F || (d.F = L(window, "load", d.K, !1, d)))
                }
            }
            this.C.data.mobile && (this.F = new kk(a.Y("blog.pageTitle"),this.J,!!a.Y("blog.sharing.disableGooglePlus")));
            this.G = this.D = null
        }
    }
    z(Al, Q);
    p = Al.prototype;
    p.ka = function(a, b) {
        if ("backlinks" == a) {
            this.L = !1;
            if (a = P(this.H, "backlinks-container"))
                b = dj(b),
                le(a, fe(b));
            b = re(document, "span", "backlink-toggle-zippy", this.C.C);
            for (a = 0; a < b.length; a++)
                b[a].onclick = this.Ed.bind(this);
            b = P(this.H, "backlinks-create-link");
            null != b && (b.onclick = this.dd.bind(this, b.href))
        } else if ("getComments" == a) {
            if (b.comments && b.messages) {
                a = b.comments;
                for (var c = b.config, d = 0; d < a.length; d++)
                    a: {
                        var e = b
                          , f = a[d];
                        if (!document.getElementById("c" + f.id)) {
                            f.author = Oi(this.K, f.author);
                            f.body = Oi(this.K, f.body);
                            var h = 1;
                            if (f.inReplyTo) {
                                var n = document.getElementById("c" + f.inReplyTo);
                                if (n) {
                                    var q;
                                    h = n;
                                    for (q = []; h; )
                                        B(h, "comment") && q.push(h),
                                        h = Ae(h);
                                    h = q.length + 1;
                                    q.length + 1 > e.config.maxDepth && ((n = He(n.parentNode, null, "comment", void 0)) ? (h--,
                                    f.inReplyTo = n.id.slice(1)) : h = 1)
                                }
                            }
                            n = document.getElementById("c" + f.inReplyTo + "-ra");
                            if (!n && (n = document.getElementById("top-ra"),
                            !n))
                                break a;
                            h = {
                                hc: e.config,
                                Gc: e.messages,
                                ec: f,
                                depth: h
                            };
                            q = ek;
                            e = dc || (dc = new Je);
                            h = q(h || zl, void 0, void 0);
                            Wb(h) && h instanceof Lj && h.Na !== Hj && h.Na === Kj && ed(h.bb());
                            if (h.Na === Kj)
                                h = ge(h.toString());
                            else {
                                if (h.Na !== Hj)
                                    throw Error("Sanitized content was not of kind TEXT or HTML.");
                                h = he(h.toString(), h.Cb || null)
                            }
                            e = e.D;
                            q = h;
                            h = e.createElement("DIV");
                            rd ? (q = ie(je, q),
                            le(h, fe(q)),
                            h.removeChild(h.firstChild)) : le(h, fe(q));
                            if (1 == h.childNodes.length)
                                e = h.removeChild(h.firstChild);
                            else
                                for (e = e.createDocumentFragment(); h.firstChild; )
                                    e.appendChild(h.firstChild);
                            Cl(this, e);
                            n.appendChild(e);
                            f.inReplyTo && (f = document.getElementById("c" + f.inReplyTo + "-rt")) && xc(f, bb)
                        }
                    }
                a.length < c.commentsPerPage ? (this.D = null,
                vc(K("loadmore", this.C.C), bb)) : this.D = a[a.length - 1].timestampAbs + 1
            }
        } else
            Al.O.ka.call(this, a, b)
    }
    ;
    p.Gd = function(a) {
        var b = null
          , c = null;
        a = He(a.currentTarget, null, "thread-toggle", void 0);
        B(a, wb) ? (b = vb,
        c = wb) : (b = wb,
        c = vb);
        A(qe(c, Ae(a)), function(a) {
            zc(a, c, b)
        })
    }
    ;
    p.zd = function(a) {
        a = yl(a.currentTarget);
        Dl(this, a || void 0)
    }
    ;
    function Dl(a, b) {
        var c = document.getElementById(Ba);
        if (c) {
            var d = Bj(c.src)
              , e = b ? "c" + b : "top"
              , f = document.getElementById(e + "-ce");
            f && f !== Ae(c) && (c.height = "250px",
            c.style.display = ua,
            c.src = "",
            f.appendChild(c),
            b ? d.C.set("parentID", b) : Fj(d.C, "parentID"),
            c.src = d.toString());
            A(qe("continue", a.C.C), function(a) {
                xc(a, bb)
            });
            (a = document.getElementById(e + "-continue")) && vc(a, bb)
        }
    }
    p.yd = function() {
        this.G && this.D && oh(this.H, "getComments", {
            postId: this.G,
            publishedMin: this.D
        }, function(a) {
            return 500 > Bc(a)
        }, ha)
    }
    ;
    p.Ed = function(a) {
        a = a || window.event;
        for (a = (a.srcElement || a.target).parentNode; a && !B(a, "backlink-control"); )
            a = a.parentNode;
        a && (B(a, Wa) ? (xc(a, Wa),
        vc(a, za)) : (vc(a, Wa),
        xc(a, za)))
    }
    ;
    p.ga = function() {
        var a = document.getElementById(this.C.D);
        this.L && oh(this.H, "backlinks", {
            postID: this.C.data.postId
        }, function(a) {
            500 <= Bc(a) ? (window.console && console.log && (a = a.responseText.match(/bX-\w*/)[0],
            console.log("Error loading backlinks: " + a)),
            a = !1) : a = !0;
            return a
        }, ha);
        if (this.C.data.mobile) {
            var b = I(Ba);
            El() ? b && (b.style.display = ua) : b && (b.style.display = l);
            b = P(this.H, "comment-editor-toggle-link");
            null != b && (b.onclick = this.Fd);
            (b = I("mobile-share-button")) && this.F && (b.onclick = x(this.Qf, this))
        }
        this.T = new ol;
        ql(this.T);
        var c = K("cmt_iframe_holder", a);
        if (c && window.gapi && gapi.comments && gapi.comments.render) {
            var d = this.C.data.iframeCommentsId;
            c.id = d;
            var e = this.C.data.legacyCommentModerationUrl
              , f = this.C.data.viewType
              , h = Fl(this.N)
              , n = nj(Bj(this.J), "http").toString();
            window.setTimeout(function() {
                if (Ui(c, "display") != l)
                    var a = Wi(c);
                else {
                    a = c.style;
                    var b = a.display
                      , O = a.visibility
                      , F = a.position;
                    a.visibility = bb;
                    a.position = sa;
                    a.display = db;
                    var E = Wi(c);
                    a.display = b;
                    a.position = F;
                    a.visibility = O;
                    a = E
                }
                gapi.comments.render(d, {
                    href: h,
                    query: n,
                    first_party_property: "BLOGGER",
                    legacy_comment_moderation_url: e,
                    view_type: f,
                    width: a.width
                })
            }, 10)
        }
        a && Gl(a, this.M);
        Hl(this)
    }
    ;
    function Hl(a) {
        Cl(a, a.C.C);
        var b = K("loadmore", a.C.C);
        if (b) {
            b.onclick = a.yd.bind(a);
            if (xl && b.dataset)
                var c = b.dataset;
            else {
                c = {};
                for (var d = b.attributes, e = 0; e < d.length; ++e) {
                    var f = d[e];
                    if (Ec(f.name, "data-")) {
                        var h = hd(f.name.substr(5));
                        c[h] = f.value
                    }
                }
            }
            c.publishedMin && c.postId && (a.D = parseInt(c.publishedMin, 10) + 1,
            a.G = c.postId,
            xc(b, bb))
        }
        Dl(a)
    }
    function Cl(a, b) {
        A(qe("thread-toggle", b), function(a) {
            a.onclick = this.Gd.bind(this);
            A((a || document).getElementsByTagName("A"), function(a) {
                a.href = "javascript:;"
            })
        }, a);
        A(qe("comment-reply", b), function(a) {
            a.onclick = this.zd.bind(this);
            a.href = "javascript:;"
        }, a)
    }
    function Gl(a, b) {
        var c = qe("cmt_count_iframe_holder", a);
        c && window.gapi && gapi.commentcount && gapi.commentcount.render && window.setTimeout(function() {
            for (var a = 0; a < c.length; a++) {
                var e = c[a]
                  , f = "_id_" + a + Math.random() * Math.pow(10, 17);
                e.id = f;
                var h = e.getAttribute("data-url")
                  , n = e.getAttribute("data-post-url")
                  , q = e.getAttribute("data-count")
                  , w = Yi(e)
                  , O = bj(e)
                  , F = Il(e);
                e.style.position = sa;
                e.style.left = "-10000px";
                gapi.commentcount.render(f, {
                    linkify: !0,
                    href: n,
                    query: h,
                    onclick: ac(function(a) {
                        ne(a + "#gpluscomments")
                    }, n),
                    onready: ac(function(a) {
                        a.style.verticalAlign = "text-top";
                        a.style.position = "";
                        a.style.left = ""
                    }, e),
                    preexisting_count: q,
                    view_type: b,
                    "font-family": w,
                    "font-size": O + "px",
                    color: F
                })
            }
        }, 10)
    }
    function Fl(a) {
        a = Bj(a);
        Fj(a.C, "m");
        return a.toString()
    }
    function Il(a) {
        a = Ti(a, "color") || (a.currentStyle ? a.currentStyle.color : null) || a.style && a.style.color;
        return tl(a).Jb
    }
    p.Qf = function() {
        if (this.F.ta) {
            var a = this.F.Oa();
            a && (a.style.display = "")
        } else
            this.F.render()
    }
    ;
    function El() {
        var a = window.location.href.split("#");
        return a[a.length - 1] && "comment-form" == a[a.length - 1]
    }
    p.Fd = function() {
        var a = I(Ba);
        a && (a.style.display = a.style.display == l ? ua : l);
        return !1
    }
    ;
    p.dd = function(a) {
        var b = "";
        document.selection ? b = document.selection.createRange().text : window.getSelection ? b = window.getSelection() : document.getSelection && (b = document.getSelection());
        window.open(a + "?t=" + encodeURIComponent(b) + "&u=" + encodeURIComponent(window.location.href) + "&n=" + encodeURIComponent(document.title), "bloggerForm", "scrollbars=no,width=475,height=300,top=175,left=75,status=yes,resizable=yes");
        return !1
    }
    ;
    var Bl = 0;
    y("_BlogView", Al);
    function Jl(a) {
        Q.call(this, "BlogList", a)
    }
    z(Jl, Q);
    p = Jl.prototype;
    p.Ob = null;
    p.jb = null;
    p.ga = function() {
        var a = this.H.Y();
        this.Ob = a.totalItems;
        this.jb = a.numItemsToShow;
        0 != this.jb && this.Ob > this.jb && (nh(this.H, "show-all").onclick = this.Xc.bind(this),
        nh(this.H, "show-n").onclick = this.Xc.bind(this));
        L(window, "load", this.xd)
    }
    ;
    p.Xc = function() {
        var a = P(this.H, "blogs");
        if (null != a) {
            a = a.getElementsByTagName("li");
            for (var b = this.jb; b < this.Ob; b++) {
                var c = a[b];
                c.style.display = c.style.display == l ? ua : l
            }
            a = nh(this.H, "show-all");
            a.style.display = a.style.display == l ? db : l;
            a = nh(this.H, "show-n");
            a.style.display = a.style.display == l ? db : l
        }
    }
    ;
    p.xd = function() {
        for (var a = 0, b = document.images.length; a < b; a++) {
            var c = document.images[a]
              , d = null;
            if (d = c.getAttribute("data-lateloadsrc"))
                L(c, Ua, function() {
                    this.style.visibility = bb
                }),
                c.src = d
        }
    }
    ;
    y("_BlogListView", Jl);
    function Kl(a) {
        Q.call(this, "BlogSearch", a)
    }
    z(Kl, Q);
    y("_BlogSearchView", Kl);
    var Ll = /^[+a-zA-Z0-9_.!#$%&'*\/=?^`{|}~-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9]{2,63}$/;
    function Ml(a) {
        Q.call(this, "ContactForm", a);
        this.C = a.V;
        this.F = this.C.data
    }
    z(Ml, Q);
    y("_ContactFormView", Ml);
    Ml.prototype.ga = function() {
        var a = I(P(this.H, Ja));
        if (a) {
            var b = this;
            a.onclick = function() {
                Nl(b) && Ol(b)
            }
        }
    }
    ;
    function Nl(a) {
        I(P(a.H, Ga)).className = Ga;
        I(P(a.H, Ga)).innerHTML = "";
        I(P(a.H, Ka)).className = Ka;
        I(P(a.H, Ka)).innerHTML = "";
        var b = document.createElement("img");
        b.src = "https://resources.blogblog.com/img/widgets/icon_contactform_cross.gif";
        b.className = "contact-form-cross";
        b.onclick = function() {
            I(P(a.H, Ga)).className = Ga;
            I(P(a.H, Ga)).innerHTML = ""
        }
        ;
        if (!Ll.test(D(I(P(a.H, Ea)).value)))
            return I(P(a.H, Ga)).className = Ha,
            I(P(a.H, Ga)).innerHTML = a.F.contactFormInvalidEmailMsg,
            I(P(a.H, Ga)).appendChild(b),
            !1;
        var c = I(P(a.H, Fa)).value;
        return null == c || "" == D(c) ? (I(P(a.H, Ga)).className = Ha,
        I(P(a.H, Ga)).innerHTML = a.F.contactFormEmptyMessageMsg,
        I(P(a.H, Ga)).appendChild(b),
        !1) : !0
    }
    function Ol(a) {
        I(P(a.H, Ja)).className = "contact-form-button contact-form-button-submit disabled";
        I(P(a.H, Ja)).disabled = !0;
        I(P(a.H, Ka)).className = La;
        I(P(a.H, Ka)).innerHTML = a.F.contactFormMessageSendingMsg;
        var b = encodeURIComponent(D(I(P(a.H, Ia)).value))
          , c = encodeURIComponent(D(I(P(a.H, Ea)).value))
          , d = encodeURIComponent(D(I(P(a.H, Fa)).value))
          , e = encodeURIComponent(a.F.blogId);
        b = ["name=" + b, "email=" + c, "message=" + d, "blogID=" + e];
        c = a.F.submitUrl;
        if (window.XDomainRequest && H.R && !H.oa("10")) {
            var f = new XDomainRequest;
            f.onload = function() {
                var b = eval("(" + f.responseText + ")");
                b = eval(b.details.emailSentStatus);
                Pl(a, b)
            }
            ;
            f.open("post", c, !0);
            f.send(b.join("&"))
        } else
            Ig(c, a.Za.bind(a), "POST", b.join("&"))
    }
    Ml.prototype.Za = function(a) {
        a = a.target;
        var b = eval("(" + Sg(a) + ")");
        b = eval(b.details.emailSentStatus);
        Pl(this, Rg(a) && b)
    }
    ;
    function Pl(a, b) {
        I(P(a.H, Ka)).className = La;
        b ? (I(P(a.H, Ia)).value = "",
        I(P(a.H, Ea)).value = "",
        I(P(a.H, Fa)).value = "",
        I(P(a.H, Ka)).innerHTML = a.F.contactFormMessageSentMsg) : I(P(a.H, Ka)).innerHTML = a.F.contactFormMessageNotSentMsg;
        setTimeout(function() {
            I(P(a.H, Ka)).className = Ka;
            I(P(a.H, Ka)).innerHTML = "";
            I(P(a.H, Ja)).className = "contact-form-button contact-form-button-submit";
            I(P(a.H, Ja)).removeAttribute("disabled")
        }, 3E3)
    }
    ;function Ql(a) {
        Q.call(this, "Example", a)
    }
    z(Ql, Q);
    y("_ExampleView", Ql);
    function Rl(a) {
        Q.call(this, "FeaturedPost", a);
        this.C = a.V;
        this.C.data && (this.D = (new th).Y(va))
    }
    z(Rl, Q);
    Rl.prototype.ga = function() {
        var a = document.getElementById(this.C.D);
        a && Gl(a, this.D)
    }
    ;
    y("_FeaturedPostView", Rl);
    /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
    function Sl(a) {
        var b = Tl;
        this.J = [];
        this.$ = b;
        this.Z = a || null;
        this.G = this.C = !1;
        this.F = void 0;
        this.N = this.W = this.L = !1;
        this.K = 0;
        this.D = null;
        this.M = 0
    }
    Sl.prototype.cancel = function(a) {
        if (this.C)
            this.F instanceof Sl && this.F.cancel();
        else {
            if (this.D) {
                var b = this.D;
                delete this.D;
                a ? b.cancel(a) : (b.M--,
                0 >= b.M && b.cancel())
            }
            this.$ ? this.$.call(this.Z, this) : this.N = !0;
            this.C || (a = new Ul(this),
            Vl(this),
            Wl(this, !1, a))
        }
    }
    ;
    Sl.prototype.T = function(a, b) {
        this.L = !1;
        Wl(this, a, b)
    }
    ;
    function Wl(a, b, c) {
        a.C = !0;
        a.F = c;
        a.G = !b;
        Xl(a)
    }
    function Vl(a) {
        if (a.C) {
            if (!a.N)
                throw new Yl(a);
            a.N = !1
        }
    }
    function Zl(a, b, c, d) {
        a.J.push([b, c, d]);
        a.C && Xl(a)
    }
    Sl.prototype.then = function(a, b, c) {
        var d, e, f = new Lf(function(a, b) {
            d = a;
            e = b
        }
        );
        Zl(this, d, function(a) {
            a instanceof Ul ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    }
    ;
    Sl.prototype.$goog_Thenable = !0;
    function $l(a) {
        return ic(a.J, function(a) {
            return Vb(a[1])
        })
    }
    function Xl(a) {
        if (a.K && a.C && $l(a)) {
            var b = a.K
              , c = am[b];
            c && (r.clearTimeout(c.ea),
            delete am[b]);
            a.K = 0
        }
        a.D && (a.D.M--,
        delete a.D);
        b = a.F;
        for (var d = c = !1; a.J.length && !a.L; ) {
            var e = a.J.shift()
              , f = e[0]
              , h = e[1];
            e = e[2];
            if (f = a.G ? h : f)
                try {
                    var n = f.call(e || a.Z, b);
                    t(n) && (a.G = a.G && (n == b || n instanceof Error),
                    a.F = b = n);
                    if (Kf(b) || typeof r.Promise === k && b instanceof r.Promise)
                        d = !0,
                        a.L = !0
                } catch (q) {
                    b = q,
                    a.G = !0,
                    $l(a) || (c = !0)
                }
        }
        a.F = b;
        d && (n = x(a.T, a, !0),
        d = x(a.T, a, !1),
        b instanceof Sl ? (Zl(b, n, d),
        b.W = !0) : b.then(n, d));
        c && (b = new bm(b),
        am[b.ea] = b,
        a.K = b.ea)
    }
    function Yl() {
        cc.call(this)
    }
    z(Yl, cc);
    Yl.prototype.message = "Deferred has already fired";
    Yl.prototype.name = "AlreadyCalledError";
    function Ul() {
        cc.call(this)
    }
    z(Ul, cc);
    Ul.prototype.message = "Deferred was canceled";
    Ul.prototype.name = "CanceledError";
    function bm(a) {
        this.ea = r.setTimeout(x(this.D, this), 0);
        this.C = a
    }
    bm.prototype.D = function() {
        delete am[this.ea];
        throw this.C;
    }
    ;
    var am = {};
    function cm(a, b) {
        var c = b || {};
        b = c.document || document;
        var d = Bd(a)
          , e = document.createElement(ia)
          , f = {
            Wc: e,
            ua: void 0
        }
          , h = new Sl(f)
          , n = null
          , q = null != c.timeout ? c.timeout : 5E3;
        0 < q && (n = window.setTimeout(function() {
            dm(e, !0);
            var a = new em(1,"Timeout reached for loading script " + d);
            Vl(h);
            Wl(h, !1, a)
        }, q),
        f.ua = n);
        e.onload = e.onreadystatechange = function() {
            e.readyState && "loaded" != e.readyState && e.readyState != Ca || (dm(e, c.Od || !1, n),
            Vl(h),
            Wl(h, !0, null))
        }
        ;
        e.onerror = function() {
            dm(e, !0, n);
            var a = new em(0,"Error while loading script " + d);
            Vl(h);
            Wl(h, !1, a)
        }
        ;
        f = c.attributes || {};
        $c(f, {
            type: ub,
            charset: "UTF-8"
        });
        se(e, f);
        me(e, a);
        fm(b).appendChild(e);
        return h
    }
    function fm(a) {
        var b = (a || document).getElementsByTagName("HEAD");
        return b && 0 != b.length ? b[0] : a.documentElement
    }
    function Tl() {
        if (this && this.Wc) {
            var a = this.Wc;
            a && a.tagName == ia && dm(a, !0, this.ua)
        }
    }
    function dm(a, b, c) {
        null != c && r.clearTimeout(c);
        a.onload = Rb;
        a.onerror = Rb;
        a.onreadystatechange = Rb;
        b && window.setTimeout(function() {
            ze(a)
        }, 0)
    }
    function em(a, b) {
        a = "Jsloader error (code #" + a + ")";
        b && (a += ": " + b);
        cc.call(this, a)
    }
    z(em, cc);
    function gm(a) {
        this.C = a;
        this.ua = 5E3
    }
    var hm = 0;
    function im(a, b, c, d) {
        b = b ? Yc(b) : {};
        var e = "_" + (hm++).toString(36) + bc().toString(36)
          , f = "_callbacks___" + e;
        c && (r[f] = jm(e, c),
        b.callback = f);
        c = {
            timeout: a.ua,
            Od: !0
        };
        a = Bd(a.C);
        a = Cd.exec(a);
        f = a[3] || "";
        a = Dd(a[1] + Ed("?", a[2] || "", b) + Ed("#", f, void 0));
        c = cm(a, c);
        Zl(c, null, km(e, b, d), void 0)
    }
    gm.prototype.cancel = function(a) {
        a && (a.Qd && a.Qd.cancel(),
        a.ea && lm(a.ea, !1))
    }
    ;
    function km(a, b, c) {
        return function() {
            lm(a, !1);
            c && c(b)
        }
    }
    function jm(a, b) {
        return function(c) {
            lm(a, !0);
            b.apply(void 0, arguments)
        }
    }
    function lm(a, b) {
        a = "_callbacks___" + a;
        if (r[a])
            if (b)
                try {
                    delete r[a]
                } catch (c) {
                    r[a] = void 0
                }
            else
                r[a] = Rb
    }
    ;function mm(a) {
        Q.call(this, "Feed", a)
    }
    z(mm, Q);
    mm.prototype.ka = function(a, b) {
        "getFeed" == a ? (this.C.F = b,
        nm(this.C)) : mm.O.ka.call(this, a, b)
    }
    ;
    mm.prototype.ga = function() {
        if (this.D = P(this.H, "feedItemListDisplay")) {
            var a = this.H.Y();
            this.C = new om(a.feedUrl,this.D,{
                numItemsShow: a.numItemsShow,
                showItemAuthor: a.showItemAuthor,
                showItemDate: a.showItemDate,
                linkTarget: a.openLinksInNewWindow ? oa : "_self",
                useFeedWidgetServ: "true" === a.useFeedWidgetServ
            });
            "true" === a.useFeedWidgetServ ? oh(this.H, "getFeed", null, null, ha) : nm(this.C)
        }
    }
    ;
    var pm = {
        moduleTitle: null,
        feedUrl: function(a) {
            a = a.replace(/^\s+/, "").replace(/\s+$/, "");
            if (0 == a.length)
                return LayoutsMessages.FIELD_CANNOT_BE_BLANK
        },
        numItemsShow: function(a, b) {
            return function(c) {
                c = parseInt(c, 10);
                if (isNaN(c))
                    return LayoutsMessages.MUST_SPECIFY_A_NUMBER;
                if (c < a)
                    return LayoutsMessages.NUMBER_TOO_SMALL + " " + a;
                if (c > b)
                    return LayoutsMessages.NUMBER_TOO_LARGE + " " + b
            }
        }(1, 5),
        showItemDate: null,
        showItemAuthor: null,
        securityToken: null,
        openLinksInNewWindow: null
    };
    function om(a, b, c) {
        this.L = a;
        this.D = b;
        this.C = c
    }
    var qm = Dd(yd(new vd(wd,"//ajax.googleapis.com/ajax/services/feed/load")));
    function nm(a) {
        if (a.C.useFeedWidgetServ)
            "ok" == a.F.status ? rm(a, a.F.feed) : sm(a);
        else {
            var b = new gm(qm);
            b.ua = -1;
            im(b, {
                q: a.L,
                num: a.C.numItemsShow,
                output: "json",
                v: "1.0"
            }, x(a.G, a))
        }
    }
    om.prototype.G = function(a) {
        200 == a.responseStatus ? rm(this, a.responseData.feed) : sm(this)
    }
    ;
    function rm(a, b) {
        ye(a.D);
        var c = document.createElement("ul");
        a.D.appendChild(c);
        for (var d = Math.min(b.entries.length, a.C.numItemsShow), e = 0; e < d; e++) {
            var f = b.entries[e]
              , h = document.createElement("li");
            c.appendChild(h);
            var n;
            (n = a.C.previewMode) || (n = (new mj(f.link)).F,
            n = !("" == n || "http" == n || "https" == n));
            n = n ? ue("A", {
                href: "javascript:void(0);"
            }, f.title) : ue("A", {
                href: f.link
            }, f.title);
            n.target = a.C.linkTarget;
            h.appendChild(ue(ja, {
                "class": "item-title"
            }, n));
            a.C.showItemDate && (n = ue(ja, {
                "class": "item-date"
            }, "\u00a0-\u00a0" + (new Date(f.publishedDate)).toLocaleDateString()),
            h.appendChild(n));
            a.C.showItemAuthor && (f = ue(ja, {
                "class": "item-author"
            }, "\u00a0-\u00a0" + f.author),
            h.appendChild(f))
        }
        a.J && a.J(b)
    }
    function sm(a) {
        ye(a.D);
        a.D.appendChild(ue(ja, null, "Error loading feed."));
        a.K && a.K()
    }
    y("_FeedView", mm);
    mm._setConfigurationOptions = function() {
        var a;
        pm.security_token = null;
        pm.visible = null;
        a || (a = "config");
        var b = document.forms[a].widgetId.value
          , c = document.forms[a].widgetType.value;
        a = document.forms[a];
        var d = !0, e = {}, f;
        for (f in pm) {
            var h = rh(a[f]);
            if (t(h)) {
                var n = pm[f]
                  , q = sh(f);
                q && (ye(q),
                q.className = "errorbox-good");
                n && (n = n(h)) && (ph(f, n),
                d = !1);
                e[f] = h
            }
        }
        d && C.bd(e, b, c)
    }
    ;
    function tm(a) {
        Q.call(this, tm.C, a)
    }
    z(tm, Q);
    tm.C = "FollowByEmail";
    y("_FollowByEmailView", tm);
    function um(a) {
        Q.call(this, "Followers", a);
        this.C = a.V
    }
    z(um, Q);
    function vm(a) {
        window.open(a, oa, "height=600, width=640, toolbar=no, menubar=no, scrollbars=yes, resizable=yes, location=no, directories=no, status=no")
    }
    um.prototype.ka = function(a, b) {
        "getFacepile" == a ? (wm(this, b),
        xm(this),
        ym(this, b)) : um.O.ka.call(this, a, b)
    }
    ;
    um.prototype.ga = function() {
        Xc(this.C.data) || (xm(this),
        ym(this, this.C.data))
    }
    ;
    function wm(a, b) {
        a = sc(b.followers, re(document, "a", "follower-link", K(Xa, a.C.C)));
        for (b = 0; b < a.length; b++) {
            var c = a[b][0]
              , d = a[b][1];
            d.setAttribute(Pa, c.viewUrl);
            d.onclick = Eb(!1);
            d = K("follower-thumbnail", d);
            d.setAttribute("src", c.thumbnailUrl);
            d.setAttribute("title", c.displayName)
        }
    }
    function xm(a) {
        var b = K(Xa, a.C.C);
        if (b) {
            b = re(document, "a", "follower-link", b);
            for (var c = 0; c < b.length; c++) {
                var d = b[c];
                d.getAttribute(Pa) && (d.onclick = x(vm, a, d.getAttribute(Pa)))
            }
        }
    }
    function ym(a, b) {
        var c = K("followers-next-link", a.C.C);
        c && (b.nextTimestamp ? (c.style.display = db,
        c = K("next-page-link", c),
        c.href = "#",
        c.onclick = Eb(!1),
        of(c),
        L(c, xa, x(um.prototype.D, a, b.nextTimestamp))) : c.style.display = l)
    }
    um.prototype.D = function(a) {
        oh(this.H, "getFacepile", {
            fcMT: a
        }, null, ha)
    }
    ;
    y("_FollowersView", um);
    function zm(a) {
        Q.call(this, zm.C, a)
    }
    z(zm, Q);
    zm.C = "Header";
    y("_HeaderView", zm);
    function Am(a, b) {
        Q.call(this, b, a)
    }
    z(Am, Q);
    function Bm(a) {
        Q.call(this, "Text", a)
    }
    z(Bm, Am);
    function Cm(a) {
        Q.call(this, "HTML", a)
    }
    z(Cm, Am);
    y("_TextView", Bm);
    y("_HTMLView", Cm);
    function Dm(a) {
        Q.call(this, "Image", a);
        this.C = a.V
    }
    z(Dm, Q);
    Dm.prototype.ga = function() {
        if (1 == this.C.data.resize) {
            var a = P(this.H, "img")
              , b = this.C.C;
            if (a && b) {
                if (document.defaultView)
                    b = parseInt(document.defaultView.getComputedStyle(b, null).width, 10);
                else if (b.currentStyle)
                    a.style.display = l,
                    b = b.offsetWidth,
                    a.style.display = "";
                else
                    return;
                a.width > b && (a.height = Math.round(b / a.width * a.height),
                a.width = b);
                a.style.visibility = yb
            }
        }
    }
    ;
    y("_ImageView", Dm);
    function Em(a) {
        Q.call(this, "Label", a)
    }
    z(Em, Q);
    y("_LabelView", Em);
    function Fm(a) {
        Q.call(this, "TextList", a)
    }
    z(Fm, Q);
    y("_TextListView", Fm);
    function Gm(a) {
        Q.call(this, "LinkList", a)
    }
    z(Gm, Q);
    y("_LinkListView", Gm);
    function Hm(a) {
        Q.call(this, "BloggerButton", a)
    }
    z(Hm, Q);
    y("_BloggerButtonView", Hm);
    function Im(a) {
        Q.call(this, "Navbar", a)
    }
    z(Im, Q);
    y("_NavbarView", Im);
    function Jm(a) {
        Q.call(this, "PageList", a)
    }
    z(Jm, Q);
    Jm.prototype.Sa = Eb("PageList");
    Jm.prototype.ga = function() {
        if (0 != this.H.Y().mobile) {
            var a = P(this.H, "select");
            a && (a.onchange = function(a) {
                a = a || window.event;
                a = a.target || a.srcElement;
                if (a = a.options[a.selectedIndex].value)
                    window.location = a
            }
            )
        }
    }
    ;
    var _PageListView = Jm;
    y("_PageListView", Jm);
    function Km(a) {
        Q.call(this, Km.C, a)
    }
    z(Km, Q);
    Km.C = "PlusBadge";
    y("_PlusBadgeView", Km);
    function Lm(a) {
        Q.call(this, Lm.C, a)
    }
    z(Lm, Q);
    Lm.C = "PlusFollowers";
    y("_PlusFollowersView", Lm);
    function Mm(a) {
        Q.call(this, Mm.C, a)
    }
    z(Mm, Q);
    Mm.C = "PlusOne";
    y("_PlusOneView", Mm);
    function Nm(a) {
        Q.call(this, "Poll", a);
        this.F = this.D = this.C = null;
        if (a = this.H.Y())
            this.C = "poll-widget" + a.pollid,
            this.D = a.iframeurl,
            this.F = L(window, "message", this.G, !1, this),
            a = document.getElementsByName(this.C)[0],
            void 0 != a && (a.src.src = Bd(this.D))
    }
    z(Nm, Q);
    Nm.prototype.G = function(a) {
        var b = document.getElementsByName(this.C)[0];
        void 0 != b && (a = a.C,
        a.source === b.contentWindow && Ec(this.D, a.origin) && (a = a.data,
        typeof a != ib || 0 > a || (b.height = a + "px",
        nf(this.F))))
    }
    ;
    y("_PollView", Nm);
    function Om(a) {
        Q.call(this, "PopularPosts", a)
    }
    z(Om, Q);
    y("_PopularPostsView", Om);
    function Pm(a) {
        Q.call(this, "Profile", a);
        this.C = a.V
    }
    z(Pm, Q);
    Pm.prototype.ga = function() {
        this.C && this.C.C && 0 == this.H.Y().isDisplayable && (this.C.C.style.display = l)
    }
    ;
    y("_ProfileView", Pm);
    function Qm(a) {
        Q.call(this, "RecentPosts", a)
    }
    z(Qm, Q);
    y("_RecentPostsView", Qm);
    function Rm(a) {
        Q.call(this, "ReportAbuse", a)
    }
    z(Rm, Q);
    y("_ReportAbuseView", Rm);
    function Sm(a) {
        Q.call(this, Sm.C, a)
    }
    z(Sm, Q);
    Sm.C = "Sharing";
    y("_SharingView", Sm);
    function Tm(a) {
        Q.call(this, "Stats", a)
    }
    z(Tm, Q);
    Tm.prototype.ga = function() {
        null != P(this.H, "totalCount") && Ig(this.H.Y().statsUrl, x(this.G, this))
    }
    ;
    Tm.prototype.G = function(a) {
        a = a.target;
        if (Rg(a)) {
            if (a.C)
                b: {
                    a = a.C.responseText;
                    if (r.JSON)
                        try {
                            var b = r.JSON.parse(a);
                            break b
                        } catch (n) {}
                    b = pg(a)
                }
            else
                b = void 0;
            a = this.H.Y();
            var c = P(this.H, "totalCount");
            if (null != c) {
                if (a.showGraphicalCounter) {
                    this.F = b.total;
                    for (var d = "" + b.total, e = 0; e < d.length; e++)
                        c.appendChild(ue(ja, {
                            "class": "digit stage-0"
                        }, ue("STRONG", null, document.createTextNode(String(d.charAt(e)))), ue(ja, {
                            "class": "blind-plate"
                        })));
                    a.showAnimatedCounter && (this.D = new ag(b.nextTickMs),
                    L(this.D, "tick", x(this.J, this, c)),
                    this.D.start())
                } else {
                    d = b.total;
                    if (isNaN(d) || 0 > d)
                        d = "NaN";
                    else {
                        d = d.toString();
                        e = [];
                        for (var f = 0, h = d.length; f < h; f++)
                            0 < f && 0 == f % 3 && e.push(","),
                            e.push(d.charAt(h - 1 - f));
                        d = e.reverse().join("")
                    }
                    De(c, d)
                }
                a.showSparkline && (nh(this.H, "sparkline").src = b.sparklineUrl);
                nh(this.H, Ma).style.display = ""
            }
        }
    }
    ;
    Tm.prototype.J = function(a) {
        if (Um(this.F + 1) > Um(this.F))
            of(this.D),
            bg(this.D);
        else {
            this.F++;
            for (var b = "" + this.F, c = 0; c < b.length; c++) {
                var d = a.childNodes[c]
                  , e = b.charAt(c);
                var f = d.firstChild;
                if (pd && null !== f && "innerText"in f)
                    f = f.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                else {
                    var h = [];
                    Ge(f, h, !0);
                    f = h.join("")
                }
                f = f.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                f = f.replace(/\u200B/g, "");
                pd || (f = f.replace(/ +/g, " "));
                " " != f && (f = f.replace(/^\s*/, ""));
                f != e && (De(d.firstChild, e),
                cg(x(this.C, this, d, 1), 50),
                cg(x(this.C, this, d, 2), 100),
                cg(x(this.C, this, d, 3), 150),
                cg(x(this.C, this, d, 0), 200))
            }
        }
    }
    ;
    function Um(a) {
        return 0 == a ? 1 : Math.floor(Math.log(a) / Math.LN10) + 1
    }
    Tm.prototype.C = function(a, b) {
        var c = "stage-" + (0 != b ? b - 1 : 3);
        b = "stage-" + b;
        var d = uc(a);
        u(c) ? nc(d, c) : v(c) && (d = yc(d, c));
        u(b) && !lc(d, b) ? d.push(b) : v(b) && wc(d, b);
        a.className = d.join(" ")
    }
    ;
    y("_StatsView", Tm);
    function Vm(a) {
        Q.call(this, "Subscribe", a)
    }
    z(Vm, Q);
    var Wm = null
      , Xm = null;
    function Ym(a, b) {
        a.style.zIndex = 1 == b ? "20" : ""
    }
    function Zm(a, b) {
        return a ? a.className && -1 != a.className.search(b) ? a : Zm(a.parentNode, b) : null
    }
    function $m(a, b) {
        Ym(a.parentNode, b);
        if (H.R) {
            var c = Zm(a, "section");
            c && (c.parentNode.className && -1 != c.parentNode.className.search("columns-cell") && Ym(c.parentNode.parentNode.parentNode.parentNode, b),
            Ym(c, b));
            (a = Zm(a, "widget Subscribe")) && Ym(a.parentNode.parentNode, b)
        }
    }
    y("_SubscribeView", Vm);
    y("_SW_toggleReaderList", function(a, b) {
        var c = document.getElementById(la + b)
          , d = document.getElementById(ma + b);
        a || (a = window.event);
        a.cancelBubble = !0;
        a.stopPropagation && a.stopPropagation();
        var e = document.onclick;
        null != Wm && Wm != c && ($m(Wm, !1),
        Wm.style.display = l,
        Xm.style.visibility = yb);
        c.style.display == l ? ($m(c, !0),
        c.style.display = "",
        Wm = c,
        Xm = d,
        d.style.visibility = bb,
        document.onclick = function() {
            c.style.display = l;
            $m(c, !1);
            d.style.visibility = yb;
            e && (document.onclick = e)
        }
        ) : (c.style.display = l,
        $m(c, !1),
        d.style.visibility = yb,
        e && (document.onclick = e));
        return !1
    });
    y("_SW_hideReaderList", function(a) {
        var b = document.getElementById(la + a);
        a = document.getElementById(ma + a);
        b.style.display = l;
        $m(b, !1);
        a.style.visibility = yb
    });
    function an(a) {
        Q.call(this, an.C, a)
    }
    z(an, Q);
    an.C = "Translate";
    y("_TranslateView", an);
    function Z(a) {
        Q.call(this, Z.C, a)
    }
    z(Z, Q);
    Z.C = "Wikipedia";
    y("_WikipediaView", Z);
    Z.G = 5;
    Z.D = "";
    Z.F = "en";
    p = Z.prototype;
    p.Qa = !1;
    p.Ja = !1;
    p.ga = function() {
        var a = P(this.H, "wikipedia-search-form");
        if (a) {
            Z.D = this.H.V.data.language || "en";
            var b = this;
            L(a, "submit", function(a) {
                Z.prototype.Ja || (Z.prototype.Ja = !0,
                bn(b));
                a.preventDefault()
            })
        }
    }
    ;
    function bn(a) {
        ye(I(P(a.H, Bb)));
        ye(I(P(a.H, Ab)));
        var b = D(I(P(a.H, zb)).value);
        b ? (b = Aj(Aj(Aj(pj(new mj(cb + (a.Qa && Z.F || Z.D) + ba), "/w/api.php"), "action", "opensearch"), "search", b), "format", "json"),
        im(new gm(If(b.toString())), {
            callback: "?"
        }, x(a.$f, a), x(a.Zf, a))) : (I(P(a.H, Cb)).style.display = l,
        I(P(a.H, Bb)).innerHTML = a.H.V.data.enterTextMsg,
        Z.prototype.Ja = !1)
    }
    p.$f = function(a) {
        var b = P(this.H, Cb)
          , c = P(this.H, Bb)
          , d = D(I(P(this.H, zb)).value)
          , e = [];
        a = a[1];
        var f = a.length;
        if (0 == f)
            b = I(b),
            b.style.display = ua,
            I(c).innerHTML = this.H.V.data.noResultsFoundMsg,
            Z.prototype.Ja = !1;
        else {
            for (var h = 0; h < f; h++)
                e.push('<div id="wikipedia-search-result-link"><a target="_blank" href=' + (cb + (this.Qa && Z.F || Z.D) + ".wikipedia.org/wiki/" + a[h].replace(/ /g, "_")) + ">" + a[h] + "</a></div>");
            if (f > Z.G) {
                for (h = 0; h < Z.G; h++)
                    I(c).innerHTML += e[h];
                I(P(this.H, Ab)).style.display = ua;
                d = '<a target="_blank" href=' + Aj(Aj(Aj(Aj(pj(new mj(cb + (this.Qa && Z.F || Z.D) + ba), "/w/index.php"), "title", "Special:Search"), "profile", "default"), "search", d), "fulltext", "Search") + ">" + this.H.V.data.moreMsg + "</a>";
                c = I(P(this.H, Ab));
                e = new zi;
                e.M = Ni;
                e.K = ud;
                e.J = ud;
                e.F = Jd;
                e.N = Jd;
                e = new yi(e);
                d = Oi(e, d);
                le(c, fe(d))
            } else
                for (h = 0; h < f; h++)
                    I(c).innerHTML += e[h];
            b = I(b);
            b.style.display = ua;
            this.Qa = Z.prototype.Ja = !1
        }
    }
    ;
    p.Zf = function() {
        "en" != Z.D ? (this.Qa = !0,
        bn(this)) : (I(P(this.H, Cb)).style.display = l,
        I(P(this.H, Bb)).innerHTML = this.H.V.data.fetchingErrorMsg,
        Z.prototype.Ja = !1)
    }
    ;
    if (window.jstiming) {
        window.jstiming.ac = {};
        window.jstiming.Kh = 1;
        var cn = function(a, b, c) {
            var d = a.t[b]
              , e = a.t.start;
            if (d && (e || c))
                return d = a.t[b][0],
                void 0 != c ? e = c : e = e[0],
                Math.round(d - e)
        }
          , dn = function(a, b, c) {
            var d = "";
            window.jstiming.srt && (d += "&srt=" + window.jstiming.srt,
            delete window.jstiming.srt);
            window.jstiming.pt && (d += "&tbsrt=" + window.jstiming.pt,
            delete window.jstiming.pt);
            try {
                window.external && window.external.tran ? d += "&tran=" + window.external.tran : window.gtbExternal && window.gtbExternal.tran ? d += "&tran=" + window.gtbExternal.tran() : window.chrome && window.chrome.csi && (d += "&tran=" + window.chrome.csi().tran)
            } catch (F) {}
            var e = window.chrome;
            if (e && (e = e.loadTimes)) {
                e().wasFetchedViaSpdy && (d += "&p=s");
                if (e().wasNpnNegotiated) {
                    d += "&npn=1";
                    var f = e().npnNegotiatedProtocol;
                    f && (d += "&npnv=" + (encodeURIComponent || escape)(f))
                }
                e().wasAlternateProtocolAvailable && (d += "&apa=1")
            }
            var h = a.t
              , n = h.start;
            e = [];
            f = [];
            for (var q in h)
                if ("start" != q && 0 != q.indexOf("_")) {
                    var w = h[q][1];
                    w ? h[w] && f.push(q + "." + cn(a, q, h[w][0])) : n && e.push(q + "." + cn(a, q))
                }
            delete h.start;
            if (b)
                for (var O in b)
                    d += "&" + O + "=" + b[O];
            (b = c) || (b = "https:" == document.location.protocol ? "https://csi.gstatic.com/csi" : "http://csi.gstatic.com/csi");
            return [b, "?v=3", "&s=" + (window.jstiming.sn || "blogger") + aa, a.name, f.length ? "&it=" + f.join(",") : "", d, "&rt=", e.join(",")].join("")
        }
          , en = function(a, b, c) {
            a = dn(a, b, c);
            if (!a)
                return "";
            b = new Image;
            var d = window.jstiming.Kh++;
            window.jstiming.ac[d] = b;
            b.onload = b.onerror = function() {
                window.jstiming && delete window.jstiming.ac[d]
            }
            ;
            b.src = a;
            b = null;
            return a
        };
        window.jstiming.report = function(a, b, c) {
            var d = document.visibilityState
              , e = "visibilitychange";
            d || (d = document.webkitVisibilityState,
            e = "webkitvisibilitychange");
            if ("prerender" == d) {
                var f = !1
                  , h = function() {
                    if (!f) {
                        b ? b.prerender = "1" : b = {
                            prerender: "1"
                        };
                        if ("prerender" == (document.visibilityState || document.webkitVisibilityState))
                            var d = !1;
                        else
                            en(a, b, c),
                            d = !0;
                        d && (f = !0,
                        document.removeEventListener(e, h, !1))
                    }
                };
                document.addEventListener(e, h, !1);
                return ""
            }
            return en(a, b, c)
        }
    }
    ;
}
).call(this);
