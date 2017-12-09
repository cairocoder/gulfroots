if (function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function i(e, t) {
        t = t || ie;
        var i = t.createElement("script");
        i.text = e,
        t.head.appendChild(i).parentNode.removeChild(i)
    }
    function n(e) {
        var t = !!e && "length"in e && e.length
          , i = me.type(e);
        return "function" !== i && !me.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function a(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function r(e, t, i) {
        return me.isFunction(t) ? me.grep(e, function(e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? me.grep(e, function(e) {
            return e === t !== i
        }) : "string" != typeof t ? me.grep(e, function(e) {
            return se.call(t, e) > -1 !== i
        }) : Te.test(t) ? me.filter(t, e, i) : (t = me.filter(t, e),
        me.grep(e, function(e) {
            return se.call(t, e) > -1 !== i && 1 === e.nodeType
        }))
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function s(e) {
        var t = {};
        return me.each(e.match(ze) || [], function(e, i) {
            t[i] = !0
        }),
        t
    }
    function l(e) {
        return e
    }
    function c(e) {
        throw e
    }
    function u(e, t, i, n) {
        var a;
        try {
            e && me.isFunction(a = e.promise) ? a.call(e).done(t).fail(i) : e && me.isFunction(a = e.then) ? a.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    function d() {
        ie.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        me.ready()
    }
    function p() {
        this.expando = me.expando + p.uid++
    }
    function h(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Oe.test(e) ? JSON.parse(e) : e)
    }
    function f(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace($e, "-$&").toLowerCase(),
            "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = h(i)
                } catch (e) {}
                Ae.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function m(e, t, i, n) {
        var a, r = 1, o = 20, s = n ? function() {
            return n.cur()
        }
        : function() {
            return me.css(e, t, "")
        }
        , l = s(), c = i && i[3] || (me.cssNumber[t] ? "" : "px"), u = (me.cssNumber[t] || "px" !== c && +l) && Ne.exec(me.css(e, t));
        if (u && u[3] !== c) {
            c = c || u[3],
            i = i || [],
            u = +l || 1;
            do {
                r = r || ".5",
                u /= r,
                me.style(e, t, u + c)
            } while (r !== (r = s() / l) && 1 !== r && --o)
        }
        return i && (u = +u || +l || 0,
        a = i[1] ? u + (i[1] + 1) * i[2] : +i[2],
        n && (n.unit = c,
        n.start = u,
        n.end = a)),
        a
    }
    function g(e) {
        var t, i = e.ownerDocument, n = e.nodeName, a = We[n];
        return a || (t = i.body.appendChild(i.createElement(n)),
        a = me.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === a && (a = "block"),
        We[n] = a,
        a)
    }
    function v(e, t) {
        for (var i, n, a = [], r = 0, o = e.length; r < o; r++)
            n = e[r],
            n.style && (i = n.style.display,
            t ? ("none" === i && (a[r] = De.get(n, "display") || null,
            a[r] || (n.style.display = "")),
            "" === n.style.display && je(n) && (a[r] = g(n))) : "none" !== i && (a[r] = "none",
            De.set(n, "display", i)));
        for (r = 0; r < o; r++)
            null != a[r] && (e[r].style.display = a[r]);
        return e
    }
    function y(e, t) {
        var i;
        return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && a(e, t) ? me.merge([e], i) : i
    }
    function w(e, t) {
        for (var i = 0, n = e.length; i < n; i++)
            De.set(e[i], "globalEval", !t || De.get(t[i], "globalEval"))
    }
    function b(e, t, i, n, a) {
        for (var r, o, s, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === me.type(r))
                    me.merge(p, r.nodeType ? [r] : r);
                else if (Ye.test(r)) {
                    for (o = o || d.appendChild(t.createElement("div")),
                    s = (Fe.exec(r) || ["", ""])[1].toLowerCase(),
                    l = _e[s] || _e._default,
                    o.innerHTML = l[1] + me.htmlPrefilter(r) + l[2],
                    u = l[0]; u--; )
                        o = o.lastChild;
                    me.merge(p, o.childNodes),
                    o = d.firstChild,
                    o.textContent = ""
                } else
                    p.push(t.createTextNode(r));
        for (d.textContent = "",
        h = 0; r = p[h++]; )
            if (n && me.inArray(r, n) > -1)
                a && a.push(r);
            else if (c = me.contains(r.ownerDocument, r),
            o = y(d.appendChild(r), "script"),
            c && w(o),
            i)
                for (u = 0; r = o[u++]; )
                    Xe.test(r.type || "") && i.push(r);
        return d
    }
    function x() {
        return !0
    }
    function T() {
        return !1
    }
    function C() {
        try {
            return ie.activeElement
        } catch (e) {}
    }
    function S(e, t, i, n, a, r) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i,
            i = void 0);
            for (s in t)
                S(e, s, i, n, t[s], r);
            return e
        }
        if (null == n && null == a ? (a = i,
        n = i = void 0) : null == a && ("string" == typeof i ? (a = n,
        n = void 0) : (a = n,
        n = i,
        i = void 0)),
        !1 === a)
            a = T;
        else if (!a)
            return e;
        return 1 === r && (o = a,
        a = function(e) {
            return me().off(e),
            o.apply(this, arguments)
        }
        ,
        a.guid = o.guid || (o.guid = me.guid++)),
        e.each(function() {
            me.event.add(this, t, a, n, i)
        })
    }
    function k(e, t) {
        return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? me(">tbody", e)[0] || e : e
    }
    function E(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function z(e) {
        var t = Je.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function M(e, t) {
        var i, n, a, r, o, s, l, c;
        if (1 === t.nodeType) {
            if (De.hasData(e) && (r = De.access(e),
            o = De.set(t, r),
            c = r.events)) {
                delete o.handle,
                o.events = {};
                for (a in c)
                    for (i = 0,
                    n = c[a].length; i < n; i++)
                        me.event.add(t, a, c[a][i])
            }
            Ae.hasData(e) && (s = Ae.access(e),
            l = me.extend({}, s),
            Ae.set(t, l))
        }
    }
    function P(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Be.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }
    function L(e, t, n, a) {
        t = re.apply([], t);
        var r, o, s, l, c, u, d = 0, p = e.length, h = p - 1, f = t[0], m = me.isFunction(f);
        if (m || p > 1 && "string" == typeof f && !he.checkClone && Ke.test(f))
            return e.each(function(i) {
                var r = e.eq(i);
                m && (t[0] = f.call(this, i, r.html())),
                L(r, t, n, a)
            });
        if (p && (r = b(t, e[0].ownerDocument, !1, e, a),
        o = r.firstChild,
        1 === r.childNodes.length && (r = o),
        o || a)) {
            for (s = me.map(y(r, "script"), E),
            l = s.length; d < p; d++)
                c = r,
                d !== h && (c = me.clone(c, !0, !0),
                l && me.merge(s, y(c, "script"))),
                n.call(e[d], c, d);
            if (l)
                for (u = s[s.length - 1].ownerDocument,
                me.map(s, z),
                d = 0; d < l; d++)
                    c = s[d],
                    Xe.test(c.type || "") && !De.access(c, "globalEval") && me.contains(u, c) && (c.src ? me._evalUrl && me._evalUrl(c.src) : i(c.textContent.replace(et, ""), u))
        }
        return e
    }
    function I(e, t, i) {
        for (var n, a = t ? me.filter(t, e) : e, r = 0; null != (n = a[r]); r++)
            i || 1 !== n.nodeType || me.cleanData(y(n)),
            n.parentNode && (i && me.contains(n.ownerDocument, n) && w(y(n, "script")),
            n.parentNode.removeChild(n));
        return e
    }
    function D(e, t, i) {
        var n, a, r, o, s = e.style;
        return i = i || nt(e),
        i && (o = i.getPropertyValue(t) || i[t],
        "" !== o || me.contains(e.ownerDocument, e) || (o = me.style(e, t)),
        !he.pixelMarginRight() && it.test(o) && tt.test(t) && (n = s.width,
        a = s.minWidth,
        r = s.maxWidth,
        s.minWidth = s.maxWidth = s.width = o,
        o = i.width,
        s.width = n,
        s.minWidth = a,
        s.maxWidth = r)),
        void 0 !== o ? o + "" : o
    }
    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function O(e) {
        if (e in ct)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = lt.length; i--; )
            if ((e = lt[i] + t)in ct)
                return e
    }
    function $(e) {
        var t = me.cssProps[e];
        return t || (t = me.cssProps[e] = O(e) || e),
        t
    }
    function H(e, t, i) {
        var n = Ne.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function N(e, t, i, n, a) {
        var r, o = 0;
        for (r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0; r < 4; r += 2)
            "margin" === i && (o += me.css(e, i + qe[r], !0, a)),
            n ? ("content" === i && (o -= me.css(e, "padding" + qe[r], !0, a)),
            "margin" !== i && (o -= me.css(e, "border" + qe[r] + "Width", !0, a))) : (o += me.css(e, "padding" + qe[r], !0, a),
            "padding" !== i && (o += me.css(e, "border" + qe[r] + "Width", !0, a)));
        return o
    }
    function q(e, t, i) {
        var n, a = nt(e), r = D(e, t, a), o = "border-box" === me.css(e, "boxSizing", !1, a);
        return it.test(r) ? r : (n = o && (he.boxSizingReliable() || r === e.style[t]),
        "auto" === r && (r = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (r = parseFloat(r) || 0) + N(e, t, i || (o ? "border" : "content"), n, a) + "px")
    }
    function j(e, t, i, n, a) {
        return new j.prototype.init(e,t,i,n,a)
    }
    function R() {
        dt && (!1 === ie.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(R) : e.setTimeout(R, me.fx.interval),
        me.fx.tick())
    }
    function W() {
        return e.setTimeout(function() {
            ut = void 0
        }),
        ut = me.now()
    }
    function B(e, t) {
        var i, n = 0, a = {
            height: e
        };
        for (t = t ? 1 : 0; n < 4; n += 2 - t)
            i = qe[n],
            a["margin" + i] = a["padding" + i] = e;
        return t && (a.opacity = a.width = e),
        a
    }
    function F(e, t, i) {
        for (var n, a = (Y.tweeners[t] || []).concat(Y.tweeners["*"]), r = 0, o = a.length; r < o; r++)
            if (n = a[r].call(i, t, e))
                return n
    }
    function X(e, t, i) {
        var n, a, r, o, s, l, c, u, d = "width"in t || "height"in t, p = this, h = {}, f = e.style, m = e.nodeType && je(e), g = De.get(e, "fxshow");
        i.queue || (o = me._queueHooks(e, "fx"),
        null == o.unqueued && (o.unqueued = 0,
        s = o.empty.fire,
        o.empty.fire = function() {
            o.unqueued || s()
        }
        ),
        o.unqueued++,
        p.always(function() {
            p.always(function() {
                o.unqueued--,
                me.queue(e, "fx").length || o.empty.fire()
            })
        }));
        for (n in t)
            if (a = t[n],
            pt.test(a)) {
                if (delete t[n],
                r = r || "toggle" === a,
                a === (m ? "hide" : "show")) {
                    if ("show" !== a || !g || void 0 === g[n])
                        continue;
                    m = !0
                }
                h[n] = g && g[n] || me.style(e, n)
            }
        if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(h)) {
            d && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
            c = g && g.display,
            null == c && (c = De.get(e, "display")),
            u = me.css(e, "display"),
            "none" === u && (c ? u = c : (v([e], !0),
            c = e.style.display || c,
            u = me.css(e, "display"),
            v([e]))),
            ("inline" === u || "inline-block" === u && null != c) && "none" === me.css(e, "float") && (l || (p.done(function() {
                f.display = c
            }),
            null == c && (u = f.display,
            c = "none" === u ? "" : u)),
            f.display = "inline-block")),
            i.overflow && (f.overflow = "hidden",
            p.always(function() {
                f.overflow = i.overflow[0],
                f.overflowX = i.overflow[1],
                f.overflowY = i.overflow[2]
            })),
            l = !1;
            for (n in h)
                l || (g ? "hidden"in g && (m = g.hidden) : g = De.access(e, "fxshow", {
                    display: c
                }),
                r && (g.hidden = !m),
                m && v([e], !0),
                p.done(function() {
                    m || v([e]),
                    De.remove(e, "fxshow");
                    for (n in h)
                        me.style(e, n, h[n])
                })),
                l = F(m ? g[n] : 0, n, p),
                n in g || (g[n] = l.start,
                m && (l.end = l.start,
                l.start = 0))
        }
    }
    function _(e, t) {
        var i, n, a, r, o;
        for (i in e)
            if (n = me.camelCase(i),
            a = t[n],
            r = e[i],
            Array.isArray(r) && (a = r[1],
            r = e[i] = r[0]),
            i !== n && (e[n] = r,
            delete e[i]),
            (o = me.cssHooks[n]) && "expand"in o) {
                r = o.expand(r),
                delete e[n];
                for (i in r)
                    i in e || (e[i] = r[i],
                    t[i] = a)
            } else
                t[n] = a
    }
    function Y(e, t, i) {
        var n, a, r = 0, o = Y.prefilters.length, s = me.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (a)
                return !1;
            for (var t = ut || W(), i = Math.max(0, c.startTime + c.duration - t), n = i / c.duration || 0, r = 1 - n, o = 0, l = c.tweens.length; o < l; o++)
                c.tweens[o].run(r);
            return s.notifyWith(e, [c, r, i]),
            r < 1 && l ? i : (l || s.notifyWith(e, [c, 1, 0]),
            s.resolveWith(e, [c]),
            !1)
        }, c = s.promise({
            elem: e,
            props: me.extend({}, t),
            opts: me.extend(!0, {
                specialEasing: {},
                easing: me.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: ut || W(),
            duration: i.duration,
            tweens: [],
            createTween: function(t, i) {
                var n = me.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n),
                n
            },
            stop: function(t) {
                var i = 0
                  , n = t ? c.tweens.length : 0;
                if (a)
                    return this;
                for (a = !0; i < n; i++)
                    c.tweens[i].run(1);
                return t ? (s.notifyWith(e, [c, 1, 0]),
                s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (_(u, c.opts.specialEasing); r < o; r++)
            if (n = Y.prefilters[r].call(c, e, u, c.opts))
                return me.isFunction(n.stop) && (me._queueHooks(c.elem, c.opts.queue).stop = me.proxy(n.stop, n)),
                n;
        return me.map(u, F, c),
        me.isFunction(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        me.fx.timer(me.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    function V(e) {
        return (e.match(ze) || []).join(" ")
    }
    function G(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Q(e, t, i, n) {
        var a;
        if (Array.isArray(t))
            me.each(t, function(t, a) {
                i || Tt.test(e) ? n(e, a) : Q(e + "[" + ("object" == typeof a && null != a ? t : "") + "]", a, i, n)
            });
        else if (i || "object" !== me.type(t))
            n(e, t);
        else
            for (a in t)
                Q(e + "[" + a + "]", t[a], i, n)
    }
    function U(e) {
        return function(t, i) {
            "string" != typeof t && (i = t,
            t = "*");
            var n, a = 0, r = t.toLowerCase().match(ze) || [];
            if (me.isFunction(i))
                for (; n = r[a++]; )
                    "+" === n[0] ? (n = n.slice(1) || "*",
                    (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function Z(e, t, i, n) {
        function a(s) {
            var l;
            return r[s] = !0,
            me.each(e[s] || [], function(e, s) {
                var c = s(t, i, n);
                return "string" != typeof c || o || r[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                a(c),
                !1)
            }),
            l
        }
        var r = {}
          , o = e === Pt;
        return a(t.dataTypes[0]) || !r["*"] && a("*")
    }
    function K(e, t) {
        var i, n, a = me.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((a[i] ? e : n || (n = {}))[i] = t[i]);
        return n && me.extend(!0, e, n),
        e
    }
    function J(e, t, i) {
        for (var n, a, r, o, s = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (a in s)
                if (s[a] && s[a].test(n)) {
                    l.unshift(a);
                    break
                }
        if (l[0]in i)
            r = l[0];
        else {
            for (a in i) {
                if (!l[0] || e.converters[a + " " + l[0]]) {
                    r = a;
                    break
                }
                o || (o = a)
            }
            r = r || o
        }
        if (r)
            return r !== l[0] && l.unshift(r),
            i[r]
    }
    function ee(e, t, i, n) {
        var a, r, o, s, l, c = {}, u = e.dataTypes.slice();
        if (u[1])
            for (o in e.converters)
                c[o.toLowerCase()] = e.converters[o];
        for (r = u.shift(); r; )
            if (e.responseFields[r] && (i[e.responseFields[r]] = t),
            !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = r,
            r = u.shift())
                if ("*" === r)
                    r = l;
                else if ("*" !== l && l !== r) {
                    if (!(o = c[l + " " + r] || c["* " + r]))
                        for (a in c)
                            if (s = a.split(" "),
                            s[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                                !0 === o ? o = c[a] : !0 !== c[a] && (r = s[0],
                                u.unshift(s[1]));
                                break
                            }
                    if (!0 !== o)
                        if (o && e.throws)
                            t = o(t);
                        else
                            try {
                                t = o(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: o ? e : "No conversion from " + l + " to " + r
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var te = []
      , ie = e.document
      , ne = Object.getPrototypeOf
      , ae = te.slice
      , re = te.concat
      , oe = te.push
      , se = te.indexOf
      , le = {}
      , ce = le.toString
      , ue = le.hasOwnProperty
      , de = ue.toString
      , pe = de.call(Object)
      , he = {}
      , fe = "3.2.1"
      , me = function(e, t) {
        return new me.fn.init(e,t)
    }
      , ge = function(e, t) {
        return t.toUpperCase()
    };
    me.fn = me.prototype = {
        jquery: fe,
        constructor: me,
        length: 0,
        toArray: function() {
            return ae.call(this)
        },
        get: function(e) {
            return null == e ? ae.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = me.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return me.each(this, e)
        },
        map: function(e) {
            return this.pushStack(me.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(ae.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: oe,
        sort: te.sort,
        splice: te.splice
    },
    me.extend = me.fn.extend = function() {
        var e, t, i, n, a, r, o = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o,
        o = arguments[s] || {},
        s++),
        "object" == typeof o || me.isFunction(o) || (o = {}),
        s === l && (o = this,
        s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e)
                    i = o[t],
                    n = e[t],
                    o !== n && (c && n && (me.isPlainObject(n) || (a = Array.isArray(n))) ? (a ? (a = !1,
                    r = i && Array.isArray(i) ? i : []) : r = i && me.isPlainObject(i) ? i : {},
                    o[t] = me.extend(c, r, n)) : void 0 !== n && (o[t] = n));
        return o
    }
    ,
    me.extend({
        expando: "jQuery" + (fe + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === me.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = me.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, i;
            return !(!e || "[object Object]" !== ce.call(e) || (t = ne(e)) && ("function" != typeof (i = ue.call(t, "constructor") && t.constructor) || de.call(i) !== pe))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ce.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            i(e)
        },
        camelCase: function(e) {
            return e.replace(/^-ms-/, "ms-").replace(/-([a-z])/g, ge)
        },
        each: function(e, t) {
            var i, a = 0;
            if (n(e))
                for (i = e.length; a < i && !1 !== t.call(e[a], a, e[a]); a++)
                    ;
            else
                for (a in e)
                    if (!1 === t.call(e[a], a, e[a]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? me.merge(i, "string" == typeof e ? [e] : e) : oe.call(i, e)),
            i
        },
        inArray: function(e, t, i) {
            return null == t ? -1 : se.call(t, e, i)
        },
        merge: function(e, t) {
            for (var i = +t.length, n = 0, a = e.length; n < i; n++)
                e[a++] = t[n];
            return e.length = a,
            e
        },
        grep: function(e, t, i) {
            for (var n = [], a = 0, r = e.length, o = !i; a < r; a++)
                !t(e[a], a) !== o && n.push(e[a]);
            return n
        },
        map: function(e, t, i) {
            var a, r, o = 0, s = [];
            if (n(e))
                for (a = e.length; o < a; o++)
                    null != (r = t(e[o], o, i)) && s.push(r);
            else
                for (o in e)
                    null != (r = t(e[o], o, i)) && s.push(r);
            return re.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var i, n, a;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            me.isFunction(e))
                return n = ae.call(arguments, 2),
                a = function() {
                    return e.apply(t || this, n.concat(ae.call(arguments)))
                }
                ,
                a.guid = e.guid = e.guid || me.guid++,
                a
        },
        now: Date.now,
        support: he
    }),
    "function" == typeof Symbol && (me.fn[Symbol.iterator] = te[Symbol.iterator]),
    me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ve = function(e) {
        function t(e, t, i, n) {
            var a, r, o, s, l, u, p, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (i = i || [],
            "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return i;
            if (!n && ((t ? t.ownerDocument || t : j) !== I && L(t),
            t = t || I,
            A)) {
                if (11 !== f && (l = me.exec(e)))
                    if (a = l[1]) {
                        if (9 === f) {
                            if (!(o = t.getElementById(a)))
                                return i;
                            if (o.id === a)
                                return i.push(o),
                                i
                        } else if (h && (o = h.getElementById(a)) && N(t, o) && o.id === a)
                            return i.push(o),
                            i
                    } else {
                        if (l[2])
                            return U.apply(i, t.getElementsByTagName(e)),
                            i;
                        if ((a = l[3]) && b.getElementsByClassName && t.getElementsByClassName)
                            return U.apply(i, t.getElementsByClassName(a)),
                            i
                    }
                if (b.qsa && !X[e + " "] && (!O || !O.test(e))) {
                    if (1 !== f)
                        h = t,
                        p = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, be) : t.setAttribute("id", s = q),
                        u = S(e),
                        r = u.length; r--; )
                            u[r] = "#" + s + " " + d(u[r]);
                        p = u.join(","),
                        h = ge.test(e) && c(t.parentNode) || t
                    }
                    if (p)
                        try {
                            return U.apply(i, h.querySelectorAll(p)),
                            i
                        } catch (e) {} finally {
                            s === q && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(re, "$1"), t, i, n)
        }
        function i() {
            function e(i, n) {
                return t.push(i + " ") > x.cacheLength && delete e[t.shift()],
                e[i + " "] = n
            }
            var t = [];
            return e
        }
        function n(e) {
            return e[q] = !0,
            e
        }
        function a(e) {
            var t = I.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function r(e, t) {
            for (var i = e.split("|"), n = i.length; n--; )
                x.attrHandle[i[n]] = t
        }
        function o(e, t) {
            var i = t && e
              , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling; )
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Te(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return n(function(t) {
                return t = +t,
                n(function(i, n) {
                    for (var a, r = e([], i.length, t), o = r.length; o--; )
                        i[a = r[o]] && (i[a] = !(n[a] = i[a]))
                })
            })
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function u() {}
        function d(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++)
                n += e[t].value;
            return n
        }
        function p(e, t, i) {
            var n = t.dir
              , a = t.next
              , r = a || n
              , o = i && "parentNode" === r
              , s = W++;
            return t.first ? function(t, i, a) {
                for (; t = t[n]; )
                    if (1 === t.nodeType || o)
                        return e(t, i, a);
                return !1
            }
            : function(t, i, l) {
                var c, u, d, p = [R, s];
                if (l) {
                    for (; t = t[n]; )
                        if ((1 === t.nodeType || o) && e(t, i, l))
                            return !0
                } else
                    for (; t = t[n]; )
                        if (1 === t.nodeType || o)
                            if (d = t[q] || (t[q] = {}),
                            u = d[t.uniqueID] || (d[t.uniqueID] = {}),
                            a && a === t.nodeName.toLowerCase())
                                t = t[n] || t;
                            else {
                                if ((c = u[r]) && c[0] === R && c[1] === s)
                                    return p[2] = c[2];
                                if (u[r] = p,
                                p[2] = e(t, i, l))
                                    return !0
                            }
                return !1
            }
        }
        function h(e) {
            return e.length > 1 ? function(t, i, n) {
                for (var a = e.length; a--; )
                    if (!e[a](t, i, n))
                        return !1;
                return !0
            }
            : e[0]
        }
        function f(e, i, n) {
            for (var a = 0, r = i.length; a < r; a++)
                t(e, i[a], n);
            return n
        }
        function m(e, t, i, n, a) {
            for (var r, o = [], s = 0, l = e.length, c = null != t; s < l; s++)
                (r = e[s]) && (i && !i(r, n, a) || (o.push(r),
                c && t.push(s)));
            return o
        }
        function g(e, t, i, a, r, o) {
            return a && !a[q] && (a = g(a)),
            r && !r[q] && (r = g(r, o)),
            n(function(n, o, s, l) {
                var c, u, d, p = [], h = [], g = o.length, v = n || f(t || "*", s.nodeType ? [s] : s, []), y = !e || !n && t ? v : m(v, p, e, s, l), w = i ? r || (n ? e : g || a) ? [] : o : y;
                if (i && i(y, w, s, l),
                a)
                    for (c = m(w, h),
                    a(c, [], s, l),
                    u = c.length; u--; )
                        (d = c[u]) && (w[h[u]] = !(y[h[u]] = d));
                if (n) {
                    if (r || e) {
                        if (r) {
                            for (c = [],
                            u = w.length; u--; )
                                (d = w[u]) && c.push(y[u] = d);
                            r(null, w = [], c, l)
                        }
                        for (u = w.length; u--; )
                            (d = w[u]) && (c = r ? K(n, d) : p[u]) > -1 && (n[c] = !(o[c] = d))
                    }
                } else
                    w = m(w === o ? w.splice(g, w.length) : w),
                    r ? r(null, o, w, l) : U.apply(o, w)
            })
        }
        function v(e) {
            for (var t, i, n, a = e.length, r = x.relative[e[0].type], o = r || x.relative[" "], s = r ? 1 : 0, l = p(function(e) {
                return e === t
            }, o, !0), c = p(function(e) {
                return K(t, e) > -1
            }, o, !0), u = [function(e, i, n) {
                var a = !r && (n || i !== z) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                return t = null,
                a
            }
            ]; s < a; s++)
                if (i = x.relative[e[s].type])
                    u = [p(h(u), i)];
                else {
                    if (i = x.filter[e[s].type].apply(null, e[s].matches),
                    i[q]) {
                        for (n = ++s; n < a && !x.relative[e[n].type]; n++)
                            ;
                        return g(s > 1 && h(u), s > 1 && d(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(re, "$1"), i, s < n && v(e.slice(s, n)), n < a && v(e = e.slice(n)), n < a && d(e))
                    }
                    u.push(i)
                }
            return h(u)
        }
        function y(e, i) {
            var a = i.length > 0
              , r = e.length > 0
              , o = function(n, o, s, l, c) {
                var u, d, p, h = 0, f = "0", g = n && [], v = [], y = z, w = n || r && x.find.TAG("*", c), b = R += null == y ? 1 : Math.random() || .1, T = w.length;
                for (c && (z = o === I || o || c); f !== T && null != (u = w[f]); f++) {
                    if (r && u) {
                        for (d = 0,
                        o || u.ownerDocument === I || (L(u),
                        s = !A); p = e[d++]; )
                            if (p(u, o || I, s)) {
                                l.push(u);
                                break
                            }
                        c && (R = b)
                    }
                    a && ((u = !p && u) && h--,
                    n && g.push(u))
                }
                if (h += f,
                a && f !== h) {
                    for (d = 0; p = i[d++]; )
                        p(g, v, o, s);
                    if (n) {
                        if (h > 0)
                            for (; f--; )
                                g[f] || v[f] || (v[f] = G.call(l));
                        v = m(v)
                    }
                    U.apply(l, v),
                    c && !n && v.length > 0 && h + i.length > 1 && t.uniqueSort(l)
                }
                return c && (R = b,
                z = y),
                g
            };
            return a ? n(o) : o
        }
        var w, b, x, T, C, S, k, E, z, M, P, L, I, D, A, O, $, H, N, q = "sizzle" + 1 * new Date, j = e.document, R = 0, W = 0, B = i(), F = i(), X = i(), _ = function(e, t) {
            return e === t && (P = !0),
            0
        }, Y = {}.hasOwnProperty, V = [], G = V.pop, Q = V.push, U = V.push, Z = V.slice, K = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ie = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ne = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", ae = new RegExp(ee + "+","g"), re = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), oe = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(ne), ue = new RegExp("^" + te + "$"), de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + ne),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + J + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, he = /^h\d$/i, fe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), ye = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, be = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, xe = function() {
            L()
        }, Te = p(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            U.apply(V = Z.call(j.childNodes), j.childNodes),
            V[j.childNodes.length].nodeType
        } catch (e) {
            U = {
                apply: V.length ? function(e, t) {
                    Q.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var i = e.length, n = 0; e[i++] = t[n++]; )
                        ;
                    e.length = i - 1
                }
            }
        }
        b = t.support = {},
        C = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        L = t.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : j;
            return n !== I && 9 === n.nodeType && n.documentElement ? (I = n,
            D = I.documentElement,
            A = !C(I),
            j !== I && (i = I.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xe, !1) : i.attachEvent && i.attachEvent("onunload", xe)),
            b.attributes = a(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            b.getElementsByTagName = a(function(e) {
                return e.appendChild(I.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            b.getElementsByClassName = fe.test(I.getElementsByClassName),
            b.getById = a(function(e) {
                return D.appendChild(e).id = q,
                !I.getElementsByName || !I.getElementsByName(q).length
            }),
            b.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var t = e.replace(ve, ye);
                return function(e) {
                    var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return i && i.value === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && A) {
                    var i, n, a, r = t.getElementById(e);
                    if (r) {
                        if ((i = r.getAttributeNode("id")) && i.value === e)
                            return [r];
                        for (a = t.getElementsByName(e),
                        n = 0; r = a[n++]; )
                            if ((i = r.getAttributeNode("id")) && i.value === e)
                                return [r]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var i, n = [], a = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; i = r[a++]; )
                        1 === i.nodeType && n.push(i);
                    return n
                }
                return r
            }
            ,
            x.find.CLASS = b.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && A)
                    return t.getElementsByClassName(e)
            }
            ,
            $ = [],
            O = [],
            (b.qsa = fe.test(I.querySelectorAll)) && (a(function(e) {
                D.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || O.push("\\[" + ee + "*(?:value|" + J + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || O.push("~="),
                e.querySelectorAll(":checked").length || O.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
            }),
            a(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && O.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && O.push(":enabled", ":disabled"),
                D.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })),
            (b.matchesSelector = fe.test(H = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && a(function(e) {
                b.disconnectedMatch = H.call(e, "*"),
                H.call(e, "[s!='']:x"),
                $.push("!=", ne)
            }),
            O = O.length && new RegExp(O.join("|")),
            $ = $.length && new RegExp($.join("|")),
            t = fe.test(D.compareDocumentPosition),
            N = t || fe.test(D.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e
                  , n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            _ = t ? function(e, t) {
                if (e === t)
                    return P = !0,
                    0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & i || !b.sortDetached && t.compareDocumentPosition(e) === i ? e === I || e.ownerDocument === j && N(j, e) ? -1 : t === I || t.ownerDocument === j && N(j, t) ? 1 : M ? K(M, e) - K(M, t) : 0 : 4 & i ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return P = !0,
                    0;
                var i, n = 0, a = e.parentNode, r = t.parentNode, s = [e], l = [t];
                if (!a || !r)
                    return e === I ? -1 : t === I ? 1 : a ? -1 : r ? 1 : M ? K(M, e) - K(M, t) : 0;
                if (a === r)
                    return o(e, t);
                for (i = e; i = i.parentNode; )
                    s.unshift(i);
                for (i = t; i = i.parentNode; )
                    l.unshift(i);
                for (; s[n] === l[n]; )
                    n++;
                return n ? o(s[n], l[n]) : s[n] === j ? -1 : l[n] === j ? 1 : 0
            }
            ,
            I) : I
        }
        ,
        t.matches = function(e, i) {
            return t(e, null, null, i)
        }
        ,
        t.matchesSelector = function(e, i) {
            if ((e.ownerDocument || e) !== I && L(e),
            i = i.replace(le, "='$1']"),
            b.matchesSelector && A && !X[i + " "] && (!$ || !$.test(i)) && (!O || !O.test(i)))
                try {
                    var n = H.call(e, i);
                    if (n || b.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return n
                } catch (e) {}
            return t(i, I, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && L(e),
            N(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && L(e);
            var i = x.attrHandle[t.toLowerCase()]
              , n = i && Y.call(x.attrHandle, t.toLowerCase()) ? i(e, t, !A) : void 0;
            return void 0 !== n ? n : b.attributes || !A ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(we, be)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, i = [], n = 0, a = 0;
            if (P = !b.detectDuplicates,
            M = !b.sortStable && e.slice(0),
            e.sort(_),
            P) {
                for (; t = e[a++]; )
                    t === e[a] && (n = i.push(a));
                for (; n--; )
                    e.splice(i[n], 1)
            }
            return M = null,
            e
        }
        ,
        T = t.getText = function(e) {
            var t, i = "", n = 0, a = e.nodeType;
            if (a) {
                if (1 === a || 9 === a || 11 === a) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        i += T(e)
                } else if (3 === a || 4 === a)
                    return e.nodeValue
            } else
                for (; t = e[n++]; )
                    i += T(t);
            return i
        }
        ,
        x = t.selectors = {
            cacheLength: 50,
            createPseudo: n,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, ye),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ve, ye),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ce.test(i) && (t = S(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                    e[2] = i.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = B[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && B(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, i, n) {
                    return function(a) {
                        var r = t.attr(a, e);
                        return null == r ? "!=" === i : !i || (r += "",
                        "=" === i ? r === n : "!=" === i ? r !== n : "^=" === i ? n && 0 === r.indexOf(n) : "*=" === i ? n && r.indexOf(n) > -1 : "$=" === i ? n && r.slice(-n.length) === n : "~=" === i ? (" " + r.replace(ae, " ") + " ").indexOf(n) > -1 : "|=" === i && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(e, t, i, n, a) {
                    var r = "nth" !== e.slice(0, 3)
                      , o = "last" !== e.slice(-4)
                      , s = "of-type" === t;
                    return 1 === n && 0 === a ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, i, l) {
                        var c, u, d, p, h, f, m = r !== o ? "nextSibling" : "previousSibling", g = t.parentNode, v = s && t.nodeName.toLowerCase(), y = !l && !s, w = !1;
                        if (g) {
                            if (r) {
                                for (; m; ) {
                                    for (p = t; p = p[m]; )
                                        if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType)
                                            return !1;
                                    f = m = "only" === e && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [o ? g.firstChild : g.lastChild],
                            o && y) {
                                for (p = g,
                                d = p[q] || (p[q] = {}),
                                u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                c = u[e] || [],
                                h = c[0] === R && c[1],
                                w = h && c[2],
                                p = h && g.childNodes[h]; p = ++h && p && p[m] || (w = h = 0) || f.pop(); )
                                    if (1 === p.nodeType && ++w && p === t) {
                                        u[e] = [R, h, w];
                                        break
                                    }
                            } else if (y && (p = t,
                            d = p[q] || (p[q] = {}),
                            u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                            c = u[e] || [],
                            h = c[0] === R && c[1],
                            w = h),
                            !1 === w)
                                for (; (p = ++h && p && p[m] || (w = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++w || (y && (d = p[q] || (p[q] = {}),
                                u = d[p.uniqueID] || (d[p.uniqueID] = {}),
                                u[e] = [R, w]),
                                p !== t)); )
                                    ;
                            return (w -= a) === n || w % n == 0 && w / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, i) {
                    var a, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return r[q] ? r(i) : r.length > 1 ? (a = [e, e, "", i],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function(e, t) {
                        for (var n, a = r(e, i), o = a.length; o--; )
                            n = K(e, a[o]),
                            e[n] = !(t[n] = a[o])
                    }) : function(e) {
                        return r(e, 0, a)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: n(function(e) {
                    var t = []
                      , i = []
                      , a = k(e.replace(re, "$1"));
                    return a[q] ? n(function(e, t, i, n) {
                        for (var r, o = a(e, null, n, []), s = e.length; s--; )
                            (r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function(e, n, r) {
                        return t[0] = e,
                        a(t, null, r, i),
                        t[0] = null,
                        !i.pop()
                    }
                }),
                has: n(function(e) {
                    return function(i) {
                        return t(e, i).length > 0
                    }
                }),
                contains: n(function(e) {
                    return e = e.replace(ve, ye),
                    function(t) {
                        return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                    }
                }),
                lang: n(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ve, ye).toLowerCase(),
                    function(t) {
                        var i;
                        do {
                            if (i = A ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === D
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: s(!1),
                disabled: s(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return he.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: l(function(e, t) {
                    for (var i = 0; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var i = 1; i < t; i += 2)
                        e.push(i);
                    return e
                }),
                lt: l(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; --n >= 0; )
                        e.push(n);
                    return e
                }),
                gt: l(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; )
                        e.push(n);
                    return e
                })
            }
        },
        x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = function(e) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && t.type === e
                }
            }(w);
        return u.prototype = x.filters = x.pseudos,
        x.setFilters = new u,
        S = t.tokenize = function(e, i) {
            var n, a, r, o, s, l, c, u = F[e + " "];
            if (u)
                return i ? 0 : u.slice(0);
            for (s = e,
            l = [],
            c = x.preFilter; s; ) {
                n && !(a = oe.exec(s)) || (a && (s = s.slice(a[0].length) || s),
                l.push(r = [])),
                n = !1,
                (a = se.exec(s)) && (n = a.shift(),
                r.push({
                    value: n,
                    type: a[0].replace(re, " ")
                }),
                s = s.slice(n.length));
                for (o in x.filter)
                    !(a = de[o].exec(s)) || c[o] && !(a = c[o](a)) || (n = a.shift(),
                    r.push({
                        value: n,
                        type: o,
                        matches: a
                    }),
                    s = s.slice(n.length));
                if (!n)
                    break
            }
            return i ? s.length : s ? t.error(e) : F(e, l).slice(0)
        }
        ,
        k = t.compile = function(e, t) {
            var i, n = [], a = [], r = X[e + " "];
            if (!r) {
                for (t || (t = S(e)),
                i = t.length; i--; )
                    r = v(t[i]),
                    r[q] ? n.push(r) : a.push(r);
                r = X(e, y(a, n)),
                r.selector = e
            }
            return r
        }
        ,
        E = t.select = function(e, t, i, n) {
            var a, r, o, s, l, u = "function" == typeof e && e, p = !n && S(e = u.selector || e);
            if (i = i || [],
            1 === p.length) {
                if (r = p[0] = p[0].slice(0),
                r.length > 2 && "ID" === (o = r[0]).type && 9 === t.nodeType && A && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(o.matches[0].replace(ve, ye), t) || [])[0]))
                        return i;
                    u && (t = t.parentNode),
                    e = e.slice(r.shift().value.length)
                }
                for (a = de.needsContext.test(e) ? 0 : r.length; a-- && (o = r[a],
                !x.relative[s = o.type]); )
                    if ((l = x.find[s]) && (n = l(o.matches[0].replace(ve, ye), ge.test(r[0].type) && c(t.parentNode) || t))) {
                        if (r.splice(a, 1),
                        !(e = n.length && d(r)))
                            return U.apply(i, n),
                            i;
                        break
                    }
            }
            return (u || k(e, p))(n, t, !A, i, !t || ge.test(e) && c(t.parentNode) || t),
            i
        }
        ,
        b.sortStable = q.split("").sort(_).join("") === q,
        b.detectDuplicates = !!P,
        L(),
        b.sortDetached = a(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
        }),
        a(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || r("type|href|height|width", function(e, t, i) {
            if (!i)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && a(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || r("value", function(e, t, i) {
            if (!i && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        a(function(e) {
            return null == e.getAttribute("disabled")
        }) || r(J, function(e, t, i) {
            var n;
            if (!i)
                return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }),
        t
    }(e);
    me.find = ve,
    me.expr = ve.selectors,
    me.expr[":"] = me.expr.pseudos,
    me.uniqueSort = me.unique = ve.uniqueSort,
    me.text = ve.getText,
    me.isXMLDoc = ve.isXML,
    me.contains = ve.contains,
    me.escapeSelector = ve.escape;
    var ye = function(e, t, i) {
        for (var n = [], a = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (a && me(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
      , we = function(e, t) {
        for (var i = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && i.push(e);
        return i
    }
      , be = me.expr.match.needsContext
      , xe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , Te = /^.[^:#\[\.,]*$/;
    me.filter = function(e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
        1 === t.length && 1 === n.nodeType ? me.find.matchesSelector(n, e) ? [n] : [] : me.find.matches(e, me.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    me.fn.extend({
        find: function(e) {
            var t, i, n = this.length, a = this;
            if ("string" != typeof e)
                return this.pushStack(me(e).filter(function() {
                    for (t = 0; t < n; t++)
                        if (me.contains(a[t], this))
                            return !0
                }));
            for (i = this.pushStack([]),
            t = 0; t < n; t++)
                me.find(e, a[t], i);
            return n > 1 ? me.uniqueSort(i) : i
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && be.test(e) ? me(e) : e || [], !1).length
        }
    });
    var Ce, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (me.fn.init = function(e, t, i) {
        var n, a;
        if (!e)
            return this;
        if (i = i || Ce,
        "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof me ? t[0] : t,
                me.merge(this, me.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ie, !0)),
                xe.test(n[1]) && me.isPlainObject(t))
                    for (n in t)
                        me.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return a = ie.getElementById(n[2]),
            a && (this[0] = a,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : me.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(me) : me.makeArray(e, this)
    }
    ).prototype = me.fn,
    Ce = me(ie);
    var ke = /^(?:parents|prev(?:Until|All))/
      , Ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    me.fn.extend({
        has: function(e) {
            var t = me(e, this)
              , i = t.length;
            return this.filter(function() {
                for (var e = 0; e < i; e++)
                    if (me.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var i, n = 0, a = this.length, r = [], o = "string" != typeof e && me(e);
            if (!be.test(e))
                for (; n < a; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && me.find.matchesSelector(i, e))) {
                            r.push(i);
                            break
                        }
            return this.pushStack(r.length > 1 ? me.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(me(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    me.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ye(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return ye(e, "parentNode", i)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return ye(e, "nextSibling")
        },
        prevAll: function(e) {
            return ye(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return ye(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return ye(e, "previousSibling", i)
        },
        siblings: function(e) {
            return we((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return we(e.firstChild)
        },
        contents: function(e) {
            return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e),
            me.merge([], e.childNodes))
        }
    }, function(e, t) {
        me.fn[e] = function(i, n) {
            var a = me.map(this, t, i);
            return "Until" !== e.slice(-5) && (n = i),
            n && "string" == typeof n && (a = me.filter(n, a)),
            this.length > 1 && (Ee[e] || me.uniqueSort(a),
            ke.test(e) && a.reverse()),
            this.pushStack(a)
        }
    });
    var ze = /[^\x20\t\r\n\f]+/g;
    me.Callbacks = function(e) {
        e = "string" == typeof e ? s(e) : me.extend({}, e);
        var t, i, n, a, r = [], o = [], l = -1, c = function() {
            for (a = a || e.once,
            n = t = !0; o.length; l = -1)
                for (i = o.shift(); ++l < r.length; )
                    !1 === r[l].apply(i[0], i[1]) && e.stopOnFalse && (l = r.length,
                    i = !1);
            e.memory || (i = !1),
            t = !1,
            a && (r = i ? [] : "")
        }, u = {
            add: function() {
                return r && (i && !t && (l = r.length - 1,
                o.push(i)),
                function t(i) {
                    me.each(i, function(i, n) {
                        me.isFunction(n) ? e.unique && u.has(n) || r.push(n) : n && n.length && "string" !== me.type(n) && t(n)
                    })
                }(arguments),
                i && !t && c()),
                this
            },
            remove: function() {
                return me.each(arguments, function(e, t) {
                    for (var i; (i = me.inArray(t, r, i)) > -1; )
                        r.splice(i, 1),
                        i <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? me.inArray(e, r) > -1 : r.length > 0
            },
            empty: function() {
                return r && (r = []),
                this
            },
            disable: function() {
                return a = o = [],
                r = i = "",
                this
            },
            disabled: function() {
                return !r
            },
            lock: function() {
                return a = o = [],
                i || t || (r = i = ""),
                this
            },
            locked: function() {
                return !!a
            },
            fireWith: function(e, i) {
                return a || (i = i || [],
                i = [e, i.slice ? i.slice() : i],
                o.push(i),
                t || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!n
            }
        };
        return u
    }
    ,
    me.extend({
        Deferred: function(t) {
            var i = [["notify", "progress", me.Callbacks("memory"), me.Callbacks("memory"), 2], ["resolve", "done", me.Callbacks("once memory"), me.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", me.Callbacks("once memory"), me.Callbacks("once memory"), 1, "rejected"]]
              , n = "pending"
              , a = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return a.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return me.Deferred(function(t) {
                        me.each(i, function(i, n) {
                            var a = me.isFunction(e[n[4]]) && e[n[4]];
                            r[n[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && me.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, n, a) {
                    function r(t, i, n, a) {
                        return function() {
                            var s = this
                              , u = arguments
                              , d = function() {
                                var e, d;
                                if (!(t < o)) {
                                    if ((e = n.apply(s, u)) === i.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    me.isFunction(d) ? a ? d.call(e, r(o, i, l, a), r(o, i, c, a)) : (o++,
                                    d.call(e, r(o, i, l, a), r(o, i, c, a), r(o, i, l, i.notifyWith))) : (n !== l && (s = void 0,
                                    u = [e]),
                                    (a || i.resolveWith)(s, u))
                                }
                            }
                              , p = a ? d : function() {
                                try {
                                    d()
                                } catch (e) {
                                    me.Deferred.exceptionHook && me.Deferred.exceptionHook(e, p.stackTrace),
                                    t + 1 >= o && (n !== c && (s = void 0,
                                    u = [e]),
                                    i.rejectWith(s, u))
                                }
                            }
                            ;
                            t ? p() : (me.Deferred.getStackHook && (p.stackTrace = me.Deferred.getStackHook()),
                            e.setTimeout(p))
                        }
                    }
                    var o = 0;
                    return me.Deferred(function(e) {
                        i[0][3].add(r(0, e, me.isFunction(a) ? a : l, e.notifyWith)),
                        i[1][3].add(r(0, e, me.isFunction(t) ? t : l)),
                        i[2][3].add(r(0, e, me.isFunction(n) ? n : c))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? me.extend(e, a) : a
                }
            }
              , r = {};
            return me.each(i, function(e, t) {
                var o = t[2]
                  , s = t[5];
                a[t[1]] = o.add,
                s && o.add(function() {
                    n = s
                }, i[3 - e][2].disable, i[0][2].lock),
                o.add(t[3].fire),
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? void 0 : this, arguments),
                    this
                }
                ,
                r[t[0] + "With"] = o.fireWith
            }),
            a.promise(r),
            t && t.call(r, r),
            r
        },
        when: function(e) {
            var t = arguments.length
              , i = t
              , n = Array(i)
              , a = ae.call(arguments)
              , r = me.Deferred()
              , o = function(e) {
                return function(i) {
                    n[e] = this,
                    a[e] = arguments.length > 1 ? ae.call(arguments) : i,
                    --t || r.resolveWith(n, a)
                }
            };
            if (t <= 1 && (u(e, r.done(o(i)).resolve, r.reject, !t),
            "pending" === r.state() || me.isFunction(a[i] && a[i].then)))
                return r.then();
            for (; i--; )
                u(a[i], o(i), r.reject);
            return r.promise()
        }
    });
    var Me = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    me.Deferred.exceptionHook = function(t, i) {
        e.console && e.console.warn && t && Me.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
    ,
    me.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var Pe = me.Deferred();
    me.fn.ready = function(e) {
        return Pe.then(e).catch(function(e) {
            me.readyException(e)
        }),
        this
    }
    ,
    me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --me.readyWait : me.isReady) || (me.isReady = !0,
            !0 !== e && --me.readyWait > 0 || Pe.resolveWith(ie, [me]))
        }
    }),
    me.ready.then = Pe.then,
    "complete" === ie.readyState || "loading" !== ie.readyState && !ie.documentElement.doScroll ? e.setTimeout(me.ready) : (ie.addEventListener("DOMContentLoaded", d),
    e.addEventListener("load", d));
    var Le = function(e, t, i, n, a, r, o) {
        var s = 0
          , l = e.length
          , c = null == i;
        if ("object" === me.type(i)) {
            a = !0;
            for (s in i)
                Le(e, t, s, i[s], !0, r, o)
        } else if (void 0 !== n && (a = !0,
        me.isFunction(n) || (o = !0),
        c && (o ? (t.call(e, n),
        t = null) : (c = t,
        t = function(e, t, i) {
            return c.call(me(e), i)
        }
        )),
        t))
            for (; s < l; s++)
                t(e[s], i, o ? n : n.call(e[s], s, t(e[s], i)));
        return a ? e : c ? t.call(e) : l ? t(e[0], i) : r
    }
      , Ie = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    p.uid = 1,
    p.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, i) {
            var n, a = this.cache(e);
            if ("string" == typeof t)
                a[me.camelCase(t)] = i;
            else
                for (n in t)
                    a[me.camelCase(n)] = t[n];
            return a
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][me.camelCase(t)]
        },
        access: function(e, t, i) {
            return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
            void 0 !== i ? i : t)
        },
        remove: function(e, t) {
            var i, n = e[this.expando];
            if (void 0 !== n) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(me.camelCase) : (t = me.camelCase(t),
                    t = t in n ? [t] : t.match(ze) || []),
                    i = t.length;
                    for (; i--; )
                        delete n[t[i]]
                }
                (void 0 === t || me.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !me.isEmptyObject(t)
        }
    };
    var De = new p
      , Ae = new p
      , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , $e = /[A-Z]/g;
    me.extend({
        hasData: function(e) {
            return Ae.hasData(e) || De.hasData(e)
        },
        data: function(e, t, i) {
            return Ae.access(e, t, i)
        },
        removeData: function(e, t) {
            Ae.remove(e, t)
        },
        _data: function(e, t, i) {
            return De.access(e, t, i)
        },
        _removeData: function(e, t) {
            De.remove(e, t)
        }
    }),
    me.fn.extend({
        data: function(e, t) {
            var i, n, a, r = this[0], o = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (a = Ae.get(r),
                1 === r.nodeType && !De.get(r, "hasDataAttrs"))) {
                    for (i = o.length; i--; )
                        o[i] && (n = o[i].name,
                        0 === n.indexOf("data-") && (n = me.camelCase(n.slice(5)),
                        f(r, n, a[n])));
                    De.set(r, "hasDataAttrs", !0)
                }
                return a
            }
            return "object" == typeof e ? this.each(function() {
                Ae.set(this, e)
            }) : Le(this, function(t) {
                var i;
                if (r && void 0 === t) {
                    if (void 0 !== (i = Ae.get(r, e)))
                        return i;
                    if (void 0 !== (i = f(r, e)))
                        return i
                } else
                    this.each(function() {
                        Ae.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ae.remove(this, e)
            })
        }
    }),
    me.extend({
        queue: function(e, t, i) {
            var n;
            if (e)
                return t = (t || "fx") + "queue",
                n = De.get(e, t),
                i && (!n || Array.isArray(i) ? n = De.access(e, t, me.makeArray(i)) : n.push(i)),
                n || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = me.queue(e, t)
              , n = i.length
              , a = i.shift()
              , r = me._queueHooks(e, t)
              , o = function() {
                me.dequeue(e, t)
            };
            "inprogress" === a && (a = i.shift(),
            n--),
            a && ("fx" === t && i.unshift("inprogress"),
            delete r.stop,
            a.call(e, o, r)),
            !n && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return De.get(e, i) || De.access(e, i, {
                empty: me.Callbacks("once memory").add(function() {
                    De.remove(e, [t + "queue", i])
                })
            })
        }
    }),
    me.fn.extend({
        queue: function(e, t) {
            var i = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            i--),
            arguments.length < i ? me.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var i = me.queue(this, e, t);
                me._queueHooks(this, e),
                "fx" === e && "inprogress" !== i[0] && me.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                me.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var i, n = 1, a = me.Deferred(), r = this, o = this.length, s = function() {
                --n || a.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; o--; )
                (i = De.get(r[o], e + "queueHooks")) && i.empty && (n++,
                i.empty.add(s));
            return s(),
            a.promise(t)
        }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , Ne = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$","i")
      , qe = ["Top", "Right", "Bottom", "Left"]
      , je = function(e, t) {
        return e = t || e,
        "none" === e.style.display || "" === e.style.display && me.contains(e.ownerDocument, e) && "none" === me.css(e, "display")
    }
      , Re = function(e, t, i, n) {
        var a, r, o = {};
        for (r in t)
            o[r] = e.style[r],
            e.style[r] = t[r];
        a = i.apply(e, n || []);
        for (r in t)
            e.style[r] = o[r];
        return a
    }
      , We = {};
    me.fn.extend({
        show: function() {
            return v(this, !0)
        },
        hide: function() {
            return v(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                je(this) ? me(this).show() : me(this).hide()
            })
        }
    });
    var Be = /^(?:checkbox|radio)$/i
      , Fe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Xe = /^$|\/(?:java|ecma)script/i
      , _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    _e.optgroup = _e.option,
    _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
    _e.th = _e.td;
    var Ye = /<|&#?\w+;/;
    !function() {
        var e = ie.createDocumentFragment()
          , t = e.appendChild(ie.createElement("div"))
          , i = ie.createElement("input");
        i.setAttribute("type", "radio"),
        i.setAttribute("checked", "checked"),
        i.setAttribute("name", "t"),
        t.appendChild(i),
        he.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        he.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ve = ie.documentElement
      , Ge = /^key/
      , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ue = /^([^.]*)(?:\.(.+)|)/;
    me.event = {
        global: {},
        add: function(e, t, i, n, a) {
            var r, o, s, l, c, u, d, p, h, f, m, g = De.get(e);
            if (g)
                for (i.handler && (r = i,
                i = r.handler,
                a = r.selector),
                a && me.find.matchesSelector(Ve, a),
                i.guid || (i.guid = me.guid++),
                (l = g.events) || (l = g.events = {}),
                (o = g.handle) || (o = g.handle = function(t) {
                    return void 0 !== me && me.event.triggered !== t.type ? me.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                t = (t || "").match(ze) || [""],
                c = t.length; c--; )
                    s = Ue.exec(t[c]) || [],
                    h = m = s[1],
                    f = (s[2] || "").split(".").sort(),
                    h && (d = me.event.special[h] || {},
                    h = (a ? d.delegateType : d.bindType) || h,
                    d = me.event.special[h] || {},
                    u = me.extend({
                        type: h,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: a,
                        needsContext: a && me.expr.match.needsContext.test(a),
                        namespace: f.join(".")
                    }, r),
                    (p = l[h]) || (p = l[h] = [],
                    p.delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, n, f, o) || e.addEventListener && e.addEventListener(h, o)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = i.guid)),
                    a ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                    me.event.global[h] = !0)
        },
        remove: function(e, t, i, n, a) {
            var r, o, s, l, c, u, d, p, h, f, m, g = De.hasData(e) && De.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(ze) || [""],
                c = t.length; c--; )
                    if (s = Ue.exec(t[c]) || [],
                    h = m = s[1],
                    f = (s[2] || "").split(".").sort(),
                    h) {
                        for (d = me.event.special[h] || {},
                        h = (n ? d.delegateType : d.bindType) || h,
                        p = l[h] || [],
                        s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = r = p.length; r--; )
                            u = p[r],
                            !a && m !== u.origType || i && i.guid !== u.guid || s && !s.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1),
                            u.selector && p.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        o && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || me.removeEvent(e, h, g.handle),
                        delete l[h])
                    } else
                        for (h in l)
                            me.event.remove(e, h + t[c], i, n, !0);
                me.isEmptyObject(l) && De.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, i, n, a, r, o, s = me.event.fix(e), l = new Array(arguments.length), c = (De.get(this, "events") || {})[s.type] || [], u = me.event.special[s.type] || {};
            for (l[0] = s,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (s.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                for (o = me.event.handlers.call(this, s, c),
                t = 0; (a = o[t++]) && !s.isPropagationStopped(); )
                    for (s.currentTarget = a.elem,
                    i = 0; (r = a.handlers[i++]) && !s.isImmediatePropagationStopped(); )
                        s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r,
                        s.data = r.data,
                        void 0 !== (n = ((me.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l)) && !1 === (s.result = n) && (s.preventDefault(),
                        s.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, s),
                s.result
            }
        },
        handlers: function(e, t) {
            var i, n, a, r, o, s = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [],
                        o = {},
                        i = 0; i < l; i++)
                            n = t[i],
                            a = n.selector + " ",
                            void 0 === o[a] && (o[a] = n.needsContext ? me(a, this).index(c) > -1 : me.find(a, this, null, [c]).length),
                            o[a] && r.push(n);
                        r.length && s.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this,
            l < t.length && s.push({
                elem: c,
                handlers: t.slice(l)
            }),
            s
        },
        addProp: function(e, t) {
            Object.defineProperty(me.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: me.isFunction(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[me.expando] ? e : new me.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== C() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === C() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && a(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return a(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    me.removeEvent = function(e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i)
    }
    ,
    me.Event = function(e, t) {
        return this instanceof me.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? x : T,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && me.extend(this, t),
        this.timeStamp = e && e.timeStamp || me.now(),
        void (this[me.expando] = !0)) : new me.Event(e,t)
    }
    ,
    me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = x,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = x,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = x,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    me.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, me.event.addProp),
    me.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this, a = e.relatedTarget, r = e.handleObj;
                return a && (a === n || me.contains(n, a)) || (e.type = r.origType,
                i = r.handler.apply(this, arguments),
                e.type = t),
                i
            }
        }
    }),
    me.fn.extend({
        on: function(e, t, i, n) {
            return S(this, e, t, i, n)
        },
        one: function(e, t, i, n) {
            return S(this, e, t, i, n, 1)
        },
        off: function(e, t, i) {
            var n, a;
            if (e && e.preventDefault && e.handleObj)
                return n = e.handleObj,
                me(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                this;
            if ("object" == typeof e) {
                for (a in e)
                    this.off(a, t, e[a]);
                return this
            }
            return !1 !== t && "function" != typeof t || (i = t,
            t = void 0),
            !1 === i && (i = T),
            this.each(function() {
                me.event.remove(this, e, i, t)
            })
        }
    });
    var Ze = /<script|<style|<link/i
      , Ke = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Je = /^true\/(.*)/
      , et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
        htmlPrefilter: function(e) {
            return e.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, "<$1></$2>")
        },
        clone: function(e, t, i) {
            var n, a, r, o, s = e.cloneNode(!0), l = me.contains(e.ownerDocument, e);
            if (!(he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || me.isXMLDoc(e)))
                for (o = y(s),
                r = y(e),
                n = 0,
                a = r.length; n < a; n++)
                    P(r[n], o[n]);
            if (t)
                if (i)
                    for (r = r || y(e),
                    o = o || y(s),
                    n = 0,
                    a = r.length; n < a; n++)
                        M(r[n], o[n]);
                else
                    M(e, s);
            return o = y(s, "script"),
            o.length > 0 && w(o, !l && y(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, i, n, a = me.event.special, r = 0; void 0 !== (i = e[r]); r++)
                if (Ie(i)) {
                    if (t = i[De.expando]) {
                        if (t.events)
                            for (n in t.events)
                                a[n] ? me.event.remove(i, n) : me.removeEvent(i, n, t.handle);
                        i[De.expando] = void 0
                    }
                    i[Ae.expando] && (i[Ae.expando] = void 0)
                }
        }
    }),
    me.fn.extend({
        detach: function(e) {
            return I(this, e, !0)
        },
        remove: function(e) {
            return I(this, e)
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? me.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    k(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = k(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (me.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return me.clone(this, e, t)
            })
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}
                  , i = 0
                  , n = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ze.test(e) && !_e[(Fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = me.htmlPrefilter(e);
                    try {
                        for (; i < n; i++)
                            t = this[i] || {},
                            1 === t.nodeType && (me.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return L(this, arguments, function(t) {
                var i = this.parentNode;
                me.inArray(this, e) < 0 && (me.cleanData(y(this)),
                i && i.replaceChild(t, this))
            }, e)
        }
    }),
    me.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        me.fn[e] = function(e) {
            for (var i, n = [], a = me(e), r = a.length - 1, o = 0; o <= r; o++)
                i = o === r ? this : this.clone(!0),
                me(a[o])[t](i),
                oe.apply(n, i.get());
            return this.pushStack(n)
        }
    });
    var tt = /^margin/
      , it = new RegExp("^(" + He + ")(?!px)[a-z%]+$","i")
      , nt = function(t) {
        var i = t.ownerDocument.defaultView;
        return i && i.opener || (i = e),
        i.getComputedStyle(t)
    };
    !function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                s.innerHTML = "",
                Ve.appendChild(o);
                var t = e.getComputedStyle(s);
                i = "1%" !== t.top,
                r = "2px" === t.marginLeft,
                n = "4px" === t.width,
                s.style.marginRight = "50%",
                a = "4px" === t.marginRight,
                Ve.removeChild(o),
                s = null
            }
        }
        var i, n, a, r, o = ie.createElement("div"), s = ie.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
        s.cloneNode(!0).style.backgroundClip = "",
        he.clearCloneStyle = "content-box" === s.style.backgroundClip,
        o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        o.appendChild(s),
        me.extend(he, {
            pixelPosition: function() {
                return t(),
                i
            },
            boxSizingReliable: function() {
                return t(),
                n
            },
            pixelMarginRight: function() {
                return t(),
                a
            },
            reliableMarginLeft: function() {
                return t(),
                r
            }
        }))
    }();
    var at = /^(none|table(?!-c[ea]).+)/
      , rt = /^--/
      , ot = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , st = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , lt = ["Webkit", "Moz", "ms"]
      , ct = ie.createElement("div").style;
    me.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = D(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var a, r, o, s = me.camelCase(t), l = rt.test(t), c = e.style;
                return l || (t = $(s)),
                o = me.cssHooks[t] || me.cssHooks[s],
                void 0 === i ? o && "get"in o && void 0 !== (a = o.get(e, !1, n)) ? a : c[t] : (r = typeof i,
                "string" === r && (a = Ne.exec(i)) && a[1] && (i = m(e, t, a),
                r = "number"),
                void (null != i && i === i && ("number" === r && (i += a && a[3] || (me.cssNumber[s] ? "" : "px")),
                he.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                o && "set"in o && void 0 === (i = o.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))))
            }
        },
        css: function(e, t, i, n) {
            var a, r, o, s = me.camelCase(t);
            return rt.test(t) || (t = $(s)),
            o = me.cssHooks[t] || me.cssHooks[s],
            o && "get"in o && (a = o.get(e, !0, i)),
            void 0 === a && (a = D(e, t, n)),
            "normal" === a && t in st && (a = st[t]),
            "" === i || i ? (r = parseFloat(a),
            !0 === i || isFinite(r) ? r || 0 : a) : a
        }
    }),
    me.each(["height", "width"], function(e, t) {
        me.cssHooks[t] = {
            get: function(e, i, n) {
                if (i)
                    return !at.test(me.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, n) : Re(e, ot, function() {
                        return q(e, t, n)
                    })
            },
            set: function(e, i, n) {
                var a, r = n && nt(e), o = n && N(e, t, n, "border-box" === me.css(e, "boxSizing", !1, r), r);
                return o && (a = Ne.exec(i)) && "px" !== (a[3] || "px") && (e.style[t] = i,
                i = me.css(e, t)),
                H(e, i, o)
            }
        }
    }),
    me.cssHooks.marginLeft = A(he.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Re(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    me.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        me.cssHooks[e + t] = {
            expand: function(i) {
                for (var n = 0, a = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++)
                    a[e + qe[n] + t] = r[n] || r[n - 2] || r[0];
                return a
            }
        },
        tt.test(e) || (me.cssHooks[e + t].set = H)
    }),
    me.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, i) {
                var n, a, r = {}, o = 0;
                if (Array.isArray(t)) {
                    for (n = nt(e),
                    a = t.length; o < a; o++)
                        r[t[o]] = me.css(e, t[o], !1, n);
                    return r
                }
                return void 0 !== i ? me.style(e, t, i) : me.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    me.Tween = j,
    j.prototype = {
        constructor: j,
        init: function(e, t, i, n, a, r) {
            this.elem = e,
            this.prop = i,
            this.easing = a || me.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = n,
            this.unit = r || (me.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = j.propHooks[this.prop];
            return e && e.get ? e.get(this) : j.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = j.propHooks[this.prop];
            return this.options.duration ? this.pos = t = me.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : j.propHooks._default.set(this),
            this
        }
    },
    j.prototype.init.prototype = j.prototype,
    j.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = me.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                me.fx.step[e.prop] ? me.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[me.cssProps[e.prop]] && !me.cssHooks[e.prop] ? e.elem[e.prop] = e.now : me.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    j.propHooks.scrollTop = j.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    me.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    me.fx = j.prototype.init,
    me.fx.step = {};
    var ut, dt, pt = /^(?:toggle|show|hide)$/, ht = /queueHooks$/;
    me.Animation = me.extend(Y, {
        tweeners: {
            "*": [function(e, t) {
                var i = this.createTween(e, t);
                return m(i.elem, e, Ne.exec(t), i),
                i
            }
            ]
        },
        tweener: function(e, t) {
            me.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(ze);
            for (var i, n = 0, a = e.length; n < a; n++)
                i = e[n],
                Y.tweeners[i] = Y.tweeners[i] || [],
                Y.tweeners[i].unshift(t)
        },
        prefilters: [X],
        prefilter: function(e, t) {
            t ? Y.prefilters.unshift(e) : Y.prefilters.push(e)
        }
    }),
    me.speed = function(e, t, i) {
        var n = e && "object" == typeof e ? me.extend({}, e) : {
            complete: i || !i && t || me.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !me.isFunction(t) && t
        };
        return me.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in me.fx.speeds ? n.duration = me.fx.speeds[n.duration] : n.duration = me.fx.speeds._default),
        null != n.queue && !0 !== n.queue || (n.queue = "fx"),
        n.old = n.complete,
        n.complete = function() {
            me.isFunction(n.old) && n.old.call(this),
            n.queue && me.dequeue(this, n.queue)
        }
        ,
        n
    }
    ,
    me.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(je).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var a = me.isEmptyObject(e)
              , r = me.speed(t, i, n)
              , o = function() {
                var t = Y(this, me.extend({}, e), r);
                (a || De.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            a || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
        },
        stop: function(e, t, i) {
            var n = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , a = null != e && e + "queueHooks"
                  , r = me.timers
                  , o = De.get(this);
                if (a)
                    o[a] && o[a].stop && n(o[a]);
                else
                    for (a in o)
                        o[a] && o[a].stop && ht.test(a) && n(o[a]);
                for (a = r.length; a--; )
                    r[a].elem !== this || null != e && r[a].queue !== e || (r[a].anim.stop(i),
                    t = !1,
                    r.splice(a, 1));
                !t && i || me.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, i = De.get(this), n = i[e + "queue"], a = i[e + "queueHooks"], r = me.timers, o = n ? n.length : 0;
                for (i.finish = !0,
                me.queue(this, e, []),
                a && a.stop && a.stop.call(this, !0),
                t = r.length; t--; )
                    r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0),
                    r.splice(t, 1));
                for (t = 0; t < o; t++)
                    n[t] && n[t].finish && n[t].finish.call(this);
                delete i.finish
            })
        }
    }),
    me.each(["toggle", "show", "hide"], function(e, t) {
        var i = me.fn[t];
        me.fn[t] = function(e, n, a) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(B(t, !0), e, n, a)
        }
    }),
    me.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        me.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    }),
    me.timers = [],
    me.fx.tick = function() {
        var e, t = 0, i = me.timers;
        for (ut = me.now(); t < i.length; t++)
            (e = i[t])() || i[t] !== e || i.splice(t--, 1);
        i.length || me.fx.stop(),
        ut = void 0
    }
    ,
    me.fx.timer = function(e) {
        me.timers.push(e),
        me.fx.start()
    }
    ,
    me.fx.interval = 13,
    me.fx.start = function() {
        dt || (dt = !0,
        R())
    }
    ,
    me.fx.stop = function() {
        dt = null
    }
    ,
    me.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    me.fn.delay = function(t, i) {
        return t = me.fx ? me.fx.speeds[t] || t : t,
        i = i || "fx",
        this.queue(i, function(i, n) {
            var a = e.setTimeout(i, t);
            n.stop = function() {
                e.clearTimeout(a)
            }
        })
    }
    ,
    function() {
        var e = ie.createElement("input")
          , t = ie.createElement("select")
          , i = t.appendChild(ie.createElement("option"));
        e.type = "checkbox",
        he.checkOn = "" !== e.value,
        he.optSelected = i.selected,
        e = ie.createElement("input"),
        e.value = "t",
        e.type = "radio",
        he.radioValue = "t" === e.value
    }();
    var ft, mt = me.expr.attrHandle;
    me.fn.extend({
        attr: function(e, t) {
            return Le(this, me.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                me.removeAttr(this, e)
            })
        }
    }),
    me.extend({
        attr: function(e, t, i) {
            var n, a, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return void 0 === e.getAttribute ? me.prop(e, t, i) : (1 === r && me.isXMLDoc(e) || (a = me.attrHooks[t.toLowerCase()] || (me.expr.match.bool.test(t) ? ft : void 0)),
                void 0 !== i ? null === i ? void me.removeAttr(e, t) : a && "set"in a && void 0 !== (n = a.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                i) : a && "get"in a && null !== (n = a.get(e, t)) ? n : (n = me.find.attr(e, t),
                null == n ? void 0 : n))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && a(e, "input")) {
                        var i = e.value;
                        return e.setAttribute("type", t),
                        i && (e.value = i),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var i, n = 0, a = t && t.match(ze);
            if (a && 1 === e.nodeType)
                for (; i = a[n++]; )
                    e.removeAttribute(i)
        }
    }),
    ft = {
        set: function(e, t, i) {
            return !1 === t ? me.removeAttr(e, i) : e.setAttribute(i, i),
            i
        }
    },
    me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var i = mt[t] || me.find.attr;
        mt[t] = function(e, t, n) {
            var a, r, o = t.toLowerCase();
            return n || (r = mt[o],
            mt[o] = a,
            a = null != i(e, t, n) ? o : null,
            mt[o] = r),
            a
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , vt = /^(?:a|area)$/i;
    me.fn.extend({
        prop: function(e, t) {
            return Le(this, me.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[me.propFix[e] || e]
            })
        }
    }),
    me.extend({
        prop: function(e, t, i) {
            var n, a, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r)
                return 1 === r && me.isXMLDoc(e) || (t = me.propFix[t] || t,
                a = me.propHooks[t]),
                void 0 !== i ? a && "set"in a && void 0 !== (n = a.set(e, i, t)) ? n : e[t] = i : a && "get"in a && null !== (n = a.get(e, t)) ? n : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = me.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    he.optSelected || (me.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    me.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        me.propFix[this.toLowerCase()] = this
    }),
    me.fn.extend({
        addClass: function(e) {
            var t, i, n, a, r, o, s, l = 0;
            if (me.isFunction(e))
                return this.each(function(t) {
                    me(this).addClass(e.call(this, t, G(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(ze) || []; i = this[l++]; )
                    if (a = G(i),
                    n = 1 === i.nodeType && " " + V(a) + " ") {
                        for (o = 0; r = t[o++]; )
                            n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                        s = V(n),
                        a !== s && i.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, a, r, o, s, l = 0;
            if (me.isFunction(e))
                return this.each(function(t) {
                    me(this).removeClass(e.call(this, t, G(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(ze) || []; i = this[l++]; )
                    if (a = G(i),
                    n = 1 === i.nodeType && " " + V(a) + " ") {
                        for (o = 0; r = t[o++]; )
                            for (; n.indexOf(" " + r + " ") > -1; )
                                n = n.replace(" " + r + " ", " ");
                        s = V(n),
                        a !== s && i.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : me.isFunction(e) ? this.each(function(i) {
                me(this).toggleClass(e.call(this, i, G(this), t), t)
            }) : this.each(function() {
                var t, n, a, r;
                if ("string" === i)
                    for (n = 0,
                    a = me(this),
                    r = e.match(ze) || []; t = r[n++]; )
                        a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                else
                    void 0 !== e && "boolean" !== i || (t = G(this),
                    t && De.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : De.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, i, n = 0;
            for (t = " " + e + " "; i = this[n++]; )
                if (1 === i.nodeType && (" " + V(G(i)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    me.fn.extend({
        val: function(e) {
            var t, i, n, a = this[0];
            return arguments.length ? (n = me.isFunction(e),
            this.each(function(i) {
                var a;
                1 === this.nodeType && (a = n ? e.call(this, i, me(this).val()) : e,
                null == a ? a = "" : "number" == typeof a ? a += "" : Array.isArray(a) && (a = me.map(a, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = me.valHooks[this.type] || me.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, a, "value") || (this.value = a))
            })) : a ? (t = me.valHooks[a.type] || me.valHooks[a.nodeName.toLowerCase()],
            t && "get"in t && void 0 !== (i = t.get(a, "value")) ? i : (i = a.value,
            "string" == typeof i ? i.replace(/\r/g, "") : null == i ? "" : i)) : void 0
        }
    }),
    me.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = me.find.attr(e, "value");
                    return null != t ? t : V(me.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, i, n, r = e.options, o = e.selectedIndex, s = "select-one" === e.type, l = s ? null : [], c = s ? o + 1 : r.length;
                    for (n = o < 0 ? c : s ? o : 0; n < c; n++)
                        if (i = r[n],
                        (i.selected || n === o) && !i.disabled && (!i.parentNode.disabled || !a(i.parentNode, "optgroup"))) {
                            if (t = me(i).val(),
                            s)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var i, n, a = e.options, r = me.makeArray(t), o = a.length; o--; )
                        n = a[o],
                        (n.selected = me.inArray(me.valHooks.option.get(n), r) > -1) && (i = !0);
                    return i || (e.selectedIndex = -1),
                    r
                }
            }
        }
    }),
    me.each(["radio", "checkbox"], function() {
        me.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = me.inArray(me(e).val(), t) > -1
            }
        },
        he.checkOn || (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var yt = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
        trigger: function(t, i, n, a) {
            var r, o, s, l, c, u, d, p = [n || ie], h = ue.call(t, "type") ? t.type : t, f = ue.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = n = n || ie,
            3 !== n.nodeType && 8 !== n.nodeType && !yt.test(h + me.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."),
            h = f.shift(),
            f.sort()),
            c = h.indexOf(":") < 0 && "on" + h,
            t = t[me.expando] ? t : new me.Event(h,"object" == typeof t && t),
            t.isTrigger = a ? 2 : 3,
            t.namespace = f.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = n),
            i = null == i ? [t] : me.makeArray(i, [t]),
            d = me.event.special[h] || {},
            a || !d.trigger || !1 !== d.trigger.apply(n, i))) {
                if (!a && !d.noBubble && !me.isWindow(n)) {
                    for (l = d.delegateType || h,
                    yt.test(l + h) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                        s = o;
                    s === (n.ownerDocument || ie) && p.push(s.defaultView || s.parentWindow || e)
                }
                for (r = 0; (o = p[r++]) && !t.isPropagationStopped(); )
                    t.type = r > 1 ? l : d.bindType || h,
                    u = (De.get(o, "events") || {})[t.type] && De.get(o, "handle"),
                    u && u.apply(o, i),
                    (u = c && o[c]) && u.apply && Ie(o) && (t.result = u.apply(o, i),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                a || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), i) || !Ie(n) || c && me.isFunction(n[h]) && !me.isWindow(n) && (s = n[c],
                s && (n[c] = null),
                me.event.triggered = h,
                n[h](),
                me.event.triggered = void 0,
                s && (n[c] = s)),
                t.result
            }
        },
        simulate: function(e, t, i) {
            var n = me.extend(new me.Event, i, {
                type: e,
                isSimulated: !0
            });
            me.event.trigger(n, null, t)
        }
    }),
    me.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                me.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i)
                return me.event.trigger(e, t, i, !0)
        }
    }),
    me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        me.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    }),
    me.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    he.focusin = "onfocusin"in e,
    he.focusin || me.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var i = function(e) {
            me.event.simulate(t, e.target, me.event.fix(e))
        };
        me.event.special[t] = {
            setup: function() {
                var n = this.ownerDocument || this
                  , a = De.access(n, t);
                a || n.addEventListener(e, i, !0),
                De.access(n, t, (a || 0) + 1)
            },
            teardown: function() {
                var n = this.ownerDocument || this
                  , a = De.access(n, t) - 1;
                a ? De.access(n, t, a) : (n.removeEventListener(e, i, !0),
                De.remove(n, t))
            }
        }
    });
    var wt = e.location
      , bt = me.now()
      , xt = /\?/;
    me.parseXML = function(t) {
        var i;
        if (!t || "string" != typeof t)
            return null;
        try {
            i = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            i = void 0
        }
        return i && !i.getElementsByTagName("parsererror").length || me.error("Invalid XML: " + t),
        i
    }
    ;
    var Tt = /\[\]$/
      , Ct = /^(?:submit|button|image|reset|file)$/i
      , St = /^(?:input|select|textarea|keygen)/i;
    me.param = function(e, t) {
        var i, n = [], a = function(e, t) {
            var i = me.isFunction(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !me.isPlainObject(e))
            me.each(e, function() {
                a(this.name, this.value)
            });
        else
            for (i in e)
                Q(i, e[i], t, a);
        return n.join("&")
    }
    ,
    me.fn.extend({
        serialize: function() {
            return me.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = me.prop(this, "elements");
                return e ? me.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !me(this).is(":disabled") && St.test(this.nodeName) && !Ct.test(e) && (this.checked || !Be.test(e))
            }).map(function(e, t) {
                var i = me(this).val();
                return null == i ? null : Array.isArray(i) ? me.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(/\r?\n/g, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(/\r?\n/g, "\r\n")
                }
            }).get()
        }
    });
    var kt = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , zt = /^(?:GET|HEAD)$/
      , Mt = {}
      , Pt = {}
      , Lt = "*/".concat("*")
      , It = ie.createElement("a");
    It.href = wt.href,
    me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: wt.href,
            type: "GET",
            isLocal: Et.test(wt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": me.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? K(K(e, me.ajaxSettings), t) : K(me.ajaxSettings, e)
        },
        ajaxPrefilter: U(Mt),
        ajaxTransport: U(Pt),
        ajax: function(t, i) {
            function n(t, i, n, s) {
                var c, p, h, b, x, T = i;
                u || (u = !0,
                l && e.clearTimeout(l),
                a = void 0,
                o = s || "",
                C.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                n && (b = J(f, C, n)),
                b = ee(f, b, C, c),
                c ? (f.ifModified && (x = C.getResponseHeader("Last-Modified"),
                x && (me.lastModified[r] = x),
                (x = C.getResponseHeader("etag")) && (me.etag[r] = x)),
                204 === t || "HEAD" === f.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state,
                p = b.data,
                h = b.error,
                c = !h)) : (h = T,
                !t && T || (T = "error",
                t < 0 && (t = 0))),
                C.status = t,
                C.statusText = (i || T) + "",
                c ? v.resolveWith(m, [p, T, C]) : v.rejectWith(m, [C, T, h]),
                C.statusCode(w),
                w = void 0,
                d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : h]),
                y.fireWith(m, [C, T]),
                d && (g.trigger("ajaxComplete", [C, f]),
                --me.active || me.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t,
            t = void 0),
            i = i || {};
            var a, r, o, s, l, c, u, d, p, h, f = me.ajaxSetup({}, i), m = f.context || f, g = f.context && (m.nodeType || m.jquery) ? me(m) : me.event, v = me.Deferred(), y = me.Callbacks("once memory"), w = f.statusCode || {}, b = {}, x = {}, T = "canceled", C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!s)
                            for (s = {}; t = kt.exec(o); )
                                s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? o : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    b[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (f.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            C.always(e[C.status]);
                        else
                            for (t in e)
                                w[t] = [w[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || T;
                    return a && a.abort(t),
                    n(0, t),
                    this
                }
            };
            if (v.promise(C),
            f.url = ((t || f.url || wt.href) + "").replace(/^\/\//, wt.protocol + "//"),
            f.type = i.method || i.type || f.method || f.type,
            f.dataTypes = (f.dataType || "*").toLowerCase().match(ze) || [""],
            null == f.crossDomain) {
                c = ie.createElement("a");
                try {
                    c.href = f.url,
                    c.href = c.href,
                    f.crossDomain = It.protocol + "//" + It.host != c.protocol + "//" + c.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = me.param(f.data, f.traditional)),
            Z(Mt, f, i, C),
            u)
                return C;
            d = me.event && f.global,
            d && 0 == me.active++ && me.event.trigger("ajaxStart"),
            f.type = f.type.toUpperCase(),
            f.hasContent = !zt.test(f.type),
            r = f.url.replace(/#.*$/, ""),
            f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(/%20/g, "+")) : (h = f.url.slice(r.length),
            f.data && (r += (xt.test(r) ? "&" : "?") + f.data,
            delete f.data),
            !1 === f.cache && (r = r.replace(/([?&])_=[^&]*/, "$1"),
            h = (xt.test(r) ? "&" : "?") + "_=" + bt++ + h),
            f.url = r + h),
            f.ifModified && (me.lastModified[r] && C.setRequestHeader("If-Modified-Since", me.lastModified[r]),
            me.etag[r] && C.setRequestHeader("If-None-Match", me.etag[r])),
            (f.data && f.hasContent && !1 !== f.contentType || i.contentType) && C.setRequestHeader("Content-Type", f.contentType),
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : f.accepts["*"]);
            for (p in f.headers)
                C.setRequestHeader(p, f.headers[p]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || u))
                return C.abort();
            if (T = "abort",
            y.add(f.complete),
            C.done(f.success),
            C.fail(f.error),
            a = Z(Pt, f, i, C)) {
                if (C.readyState = 1,
                d && g.trigger("ajaxSend", [C, f]),
                u)
                    return C;
                f.async && f.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, f.timeout));
                try {
                    u = !1,
                    a.send(b, n)
                } catch (e) {
                    if (u)
                        throw e;
                    n(-1, e)
                }
            } else
                n(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, i) {
            return me.get(e, t, i, "json")
        },
        getScript: function(e, t) {
            return me.get(e, void 0, t, "script")
        }
    }),
    me.each(["get", "post"], function(e, t) {
        me[t] = function(e, i, n, a) {
            return me.isFunction(i) && (a = a || n,
            n = i,
            i = void 0),
            me.ajax(me.extend({
                url: e,
                type: t,
                dataType: a,
                data: i,
                success: n
            }, me.isPlainObject(e) && e))
        }
    }),
    me._evalUrl = function(e) {
        return me.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    me.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (me.isFunction(e) && (e = e.call(this[0])),
            t = me(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return me.isFunction(e) ? this.each(function(t) {
                me(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = me(this)
                  , i = t.contents();
                i.length ? i.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = me.isFunction(e);
            return this.each(function(i) {
                me(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                me(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    me.expr.pseudos.hidden = function(e) {
        return !me.expr.pseudos.visible(e)
    }
    ,
    me.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    me.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Dt = {
        0: 200,
        1223: 204
    }
      , At = me.ajaxSettings.xhr();
    he.cors = !!At && "withCredentials"in At,
    he.ajax = At = !!At,
    me.ajaxTransport(function(t) {
        var i, n;
        if (he.cors || At && !t.crossDomain)
            return {
                send: function(a, r) {
                    var o, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || a["X-Requested-With"] || (a["X-Requested-With"] = "XMLHttpRequest");
                    for (o in a)
                        s.setRequestHeader(o, a[o]);
                    i = function(e) {
                        return function() {
                            i && (i = n = s.onload = s.onerror = s.onabort = s.onreadystatechange = null,
                            "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? r(0, "error") : r(s.status, s.statusText) : r(Dt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                                binary: s.response
                            } : {
                                text: s.responseText
                            }, s.getAllResponseHeaders()))
                        }
                    }
                    ,
                    s.onload = i(),
                    n = s.onerror = i("error"),
                    void 0 !== s.onabort ? s.onabort = n : s.onreadystatechange = function() {
                        4 === s.readyState && e.setTimeout(function() {
                            i && n()
                        })
                    }
                    ,
                    i = i("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (i)
                            throw e
                    }
                },
                abort: function() {
                    i && i()
                }
            }
    }),
    me.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    me.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return me.globalEval(e),
                e
            }
        }
    }),
    me.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    me.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, i;
            return {
                send: function(n, a) {
                    t = me("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", i = function(e) {
                        t.remove(),
                        i = null,
                        e && a("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    ie.head.appendChild(t[0])
                },
                abort: function() {
                    i && i()
                }
            }
        }
    });
    var Ot = []
      , $t = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ot.pop() || me.expando + "_" + bt++;
            return this[e] = !0,
            e
        }
    }),
    me.ajaxPrefilter("json jsonp", function(t, i, n) {
        var a, r, o, s = !1 !== t.jsonp && ($t.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $t.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0])
            return a = t.jsonpCallback = me.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            s ? t[s] = t[s].replace($t, "$1" + a) : !1 !== t.jsonp && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + a),
            t.converters["script json"] = function() {
                return o || me.error(a + " was not called"),
                o[0]
            }
            ,
            t.dataTypes[0] = "json",
            r = e[a],
            e[a] = function() {
                o = arguments
            }
            ,
            n.always(function() {
                void 0 === r ? me(e).removeProp(a) : e[a] = r,
                t[a] && (t.jsonpCallback = i.jsonpCallback,
                Ot.push(a)),
                o && me.isFunction(r) && r(o[0]),
                o = r = void 0
            }),
            "script"
    }),
    he.createHTMLDocument = function() {
        var e = ie.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    me.parseHTML = function(e, t, i) {
        if ("string" != typeof e)
            return [];
        "boolean" == typeof t && (i = t,
        t = !1);
        var n, a, r;
        return t || (he.createHTMLDocument ? (t = ie.implementation.createHTMLDocument(""),
        n = t.createElement("base"),
        n.href = ie.location.href,
        t.head.appendChild(n)) : t = ie),
        a = xe.exec(e),
        r = !i && [],
        a ? [t.createElement(a[1])] : (a = b([e], t, r),
        r && r.length && me(r).remove(),
        me.merge([], a.childNodes))
    }
    ,
    me.fn.load = function(e, t, i) {
        var n, a, r, o = this, s = e.indexOf(" ");
        return s > -1 && (n = V(e.slice(s)),
        e = e.slice(0, s)),
        me.isFunction(t) ? (i = t,
        t = void 0) : t && "object" == typeof t && (a = "POST"),
        o.length > 0 && me.ajax({
            url: e,
            type: a || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
            o.html(n ? me("<div>").append(me.parseHTML(e)).find(n) : e)
        }).always(i && function(e, t) {
            o.each(function() {
                i.apply(this, r || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    me.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        me.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    me.expr.pseudos.animated = function(e) {
        return me.grep(me.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    me.offset = {
        setOffset: function(e, t, i) {
            var n, a, r, o, s, l, c, u = me.css(e, "position"), d = me(e), p = {};
            "static" === u && (e.style.position = "relative"),
            s = d.offset(),
            r = me.css(e, "top"),
            l = me.css(e, "left"),
            c = ("absolute" === u || "fixed" === u) && (r + l).indexOf("auto") > -1,
            c ? (n = d.position(),
            o = n.top,
            a = n.left) : (o = parseFloat(r) || 0,
            a = parseFloat(l) || 0),
            me.isFunction(t) && (t = t.call(e, i, me.extend({}, s))),
            null != t.top && (p.top = t.top - s.top + o),
            null != t.left && (p.left = t.left - s.left + a),
            "using"in t ? t.using.call(e, p) : d.css(p)
        }
    },
    me.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    me.offset.setOffset(this, e, t)
                });
            var t, i, n, a, r = this[0];
            return r ? r.getClientRects().length ? (n = r.getBoundingClientRect(),
            t = r.ownerDocument,
            i = t.documentElement,
            a = t.defaultView,
            {
                top: n.top + a.pageYOffset - i.clientTop,
                left: n.left + a.pageXOffset - i.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, i = this[0], n = {
                    top: 0,
                    left: 0
                };
                return "fixed" === me.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                a(e[0], "html") || (n = e.offset()),
                n = {
                    top: n.top + me.css(e[0], "borderTopWidth", !0),
                    left: n.left + me.css(e[0], "borderLeftWidth", !0)
                }),
                {
                    top: t.top - n.top - me.css(i, "marginTop", !0),
                    left: t.left - n.left - me.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === me.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ve
            })
        }
    }),
    me.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var i = "pageYOffset" === t;
        me.fn[e] = function(n) {
            return Le(this, function(e, n, a) {
                var r;
                return me.isWindow(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                void 0 === a ? r ? r[t] : e[n] : void (r ? r.scrollTo(i ? r.pageXOffset : a, i ? a : r.pageYOffset) : e[n] = a)
            }, e, n, arguments.length)
        }
    }),
    me.each(["top", "left"], function(e, t) {
        me.cssHooks[t] = A(he.pixelPosition, function(e, i) {
            if (i)
                return i = D(e, t),
                it.test(i) ? me(e).position()[t] + "px" : i
        })
    }),
    me.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        me.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(i, n) {
            me.fn[n] = function(a, r) {
                var o = arguments.length && (i || "boolean" != typeof a)
                  , s = i || (!0 === a || !0 === r ? "margin" : "border");
                return Le(this, function(t, i, a) {
                    var r;
                    return me.isWindow(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === a ? me.css(t, i, s) : me.style(t, i, a, s)
                }, t, o ? a : void 0, o)
            }
        })
    }),
    me.fn.extend({
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    }),
    me.holdReady = function(e) {
        e ? me.readyWait++ : me.ready(!0)
    }
    ,
    me.isArray = Array.isArray,
    me.parseJSON = JSON.parse,
    me.nodeName = a,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return me
    });
    var Ht = e.jQuery
      , Nt = e.$;
    return me.noConflict = function(t) {
        return e.$ === me && (e.$ = Nt),
        t && e.jQuery === me && (e.jQuery = Ht),
        me
    }
    ,
    t || (e.jQuery = e.$ = me),
    me
}),
void 0 === jQuery) {
    var jQuery;
    jQuery = "function" == typeof require ? $ = require("jquery") : $
}
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, i, n, a) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, a)
    },
    easeInQuad: function(e, t, i, n, a) {
        return n * (t /= a) * t + i
    },
    easeOutQuad: function(e, t, i, n, a) {
        return -n * (t /= a) * (t - 2) + i
    },
    easeInOutQuad: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function(e, t, i, n, a) {
        return n * (t /= a) * t * t + i
    },
    easeOutCubic: function(e, t, i, n, a) {
        return n * ((t = t / a - 1) * t * t + 1) + i
    },
    easeInOutCubic: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function(e, t, i, n, a) {
        return n * (t /= a) * t * t * t + i
    },
    easeOutQuart: function(e, t, i, n, a) {
        return -n * ((t = t / a - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function(e, t, i, n, a) {
        return n * (t /= a) * t * t * t * t + i
    },
    easeOutQuint: function(e, t, i, n, a) {
        return n * ((t = t / a - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function(e, t, i, n, a) {
        return -n * Math.cos(t / a * (Math.PI / 2)) + n + i
    },
    easeOutSine: function(e, t, i, n, a) {
        return n * Math.sin(t / a * (Math.PI / 2)) + i
    },
    easeInOutSine: function(e, t, i, n, a) {
        return -n / 2 * (Math.cos(Math.PI * t / a) - 1) + i
    },
    easeInExpo: function(e, t, i, n, a) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / a - 1)) + i
    },
    easeOutExpo: function(e, t, i, n, a) {
        return t == a ? i + n : n * (1 - Math.pow(2, -10 * t / a)) + i
    },
    easeInOutExpo: function(e, t, i, n, a) {
        return 0 == t ? i : t == a ? i + n : (t /= a / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (2 - Math.pow(2, -10 * --t)) + i
    },
    easeInCirc: function(e, t, i, n, a) {
        return -n * (Math.sqrt(1 - (t /= a) * t) - 1) + i
    },
    easeOutCirc: function(e, t, i, n, a) {
        return n * Math.sqrt(1 - (t = t / a - 1) * t) + i
    },
    easeInOutCirc: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function(e, t, i, n, a) {
        var r = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (1 == (t /= a))
            return i + n;
        if (o || (o = .3 * a),
        s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else
            var r = o / (2 * Math.PI) * Math.asin(n / s);
        return -s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) + i
    },
    easeOutElastic: function(e, t, i, n, a) {
        var r = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (1 == (t /= a))
            return i + n;
        if (o || (o = .3 * a),
        s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else
            var r = o / (2 * Math.PI) * Math.asin(n / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * a - r) * (2 * Math.PI) / o) + n + i
    },
    easeInOutElastic: function(e, t, i, n, a) {
        var r = 1.70158
          , o = 0
          , s = n;
        if (0 == t)
            return i;
        if (2 == (t /= a / 2))
            return i + n;
        if (o || (o = a * (.3 * 1.5)),
        s < Math.abs(n)) {
            s = n;
            var r = o / 4
        } else
            var r = o / (2 * Math.PI) * Math.asin(n / s);
        return t < 1 ? s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) * -.5 + i : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - r) * (2 * Math.PI) / o) * .5 + n + i
    },
    easeInBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158),
        n * (t /= a) * t * ((r + 1) * t - r) + i
    },
    easeOutBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158),
        n * ((t = t / a - 1) * t * ((r + 1) * t + r) + 1) + i
    },
    easeInOutBack: function(e, t, i, n, a, r) {
        return void 0 == r && (r = 1.70158),
        (t /= a / 2) < 1 ? n / 2 * (t * t * ((1 + (r *= 1.525)) * t - r)) + i : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + i
    },
    easeInBounce: function(e, t, i, n, a) {
        return n - jQuery.easing.easeOutBounce(e, a - t, 0, n, a) + i
    },
    easeOutBounce: function(e, t, i, n, a) {
        return (t /= a) < 1 / 2.75 ? n * (7.5625 * t * t) + i : t < 2 / 2.75 ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : t < 2.5 / 2.75 ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function(e, t, i, n, a) {
        return t < a / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, a) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, n, a) + .5 * n + i
    }
}),
jQuery.extend(jQuery.easing, {
    easeInOutMaterial: function(e, t, i, n, a) {
        return (t /= a / 2) < 1 ? n / 2 * t * t + i : n / 4 * ((t -= 2) * t * t + 2) + i
    }
}),
jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (function(e) {
    function t(e) {
        var t = e.length
          , n = i.type(e);
        return "function" !== n && !i.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }
    if (!e.jQuery) {
        var i = function(e, t) {
            return new i.fn.init(e,t)
        };
        i.isWindow = function(e) {
            return null != e && e == e.window
        }
        ,
        i.type = function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? a[o.call(e)] || "object" : typeof e
        }
        ,
        i.isArray = Array.isArray || function(e) {
            return "array" === i.type(e)
        }
        ,
        i.isPlainObject = function(e) {
            var t;
            if (!e || "object" !== i.type(e) || e.nodeType || i.isWindow(e))
                return !1;
            try {
                if (e.constructor && !r.call(e, "constructor") && !r.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (e) {
                return !1
            }
            for (t in e)
                ;
            return void 0 === t || r.call(e, t)
        }
        ,
        i.each = function(e, i, n) {
            var a = 0
              , r = e.length
              , o = t(e);
            if (n) {
                if (o)
                    for (; r > a && !1 !== i.apply(e[a], n); a++)
                        ;
                else
                    for (a in e)
                        if (!1 === i.apply(e[a], n))
                            break
            } else if (o)
                for (; r > a && !1 !== i.call(e[a], a, e[a]); a++)
                    ;
            else
                for (a in e)
                    if (!1 === i.call(e[a], a, e[a]))
                        break;
            return e
        }
        ,
        i.data = function(e, t, a) {
            if (void 0 === a) {
                var r = e[i.expando]
                  , o = r && n[r];
                if (void 0 === t)
                    return o;
                if (o && t in o)
                    return o[t]
            } else if (void 0 !== t) {
                var r = e[i.expando] || (e[i.expando] = ++i.uuid);
                return n[r] = n[r] || {},
                n[r][t] = a,
                a
            }
        }
        ,
        i.removeData = function(e, t) {
            var a = e[i.expando]
              , r = a && n[a];
            r && i.each(t, function(e, t) {
                delete r[t]
            })
        }
        ,
        i.extend = function() {
            var e, t, n, a, r, o, s = arguments[0] || {}, l = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof s && (u = s,
            s = arguments[l] || {},
            l++),
            "object" != typeof s && "function" !== i.type(s) && (s = {}),
            l === c && (s = this,
            l--); c > l; l++)
                if (null != (r = arguments[l]))
                    for (a in r)
                        e = s[a],
                        n = r[a],
                        s !== n && (u && n && (i.isPlainObject(n) || (t = i.isArray(n))) ? (t ? (t = !1,
                        o = e && i.isArray(e) ? e : []) : o = e && i.isPlainObject(e) ? e : {},
                        s[a] = i.extend(u, o, n)) : void 0 !== n && (s[a] = n));
            return s
        }
        ,
        i.queue = function(e, n, a) {
            if (e) {
                n = (n || "fx") + "queue";
                var r = i.data(e, n);
                return a ? (!r || i.isArray(a) ? r = i.data(e, n, function(e, i) {
                    var n = i || [];
                    return null != e && (t(Object(e)) ? function(e, t) {
                        for (var i = +t.length, n = 0, a = e.length; i > n; )
                            e[a++] = t[n++];
                        if (i !== i)
                            for (; void 0 !== t[n]; )
                                e[a++] = t[n++];
                        e.length = a
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)),
                    n
                }(a)) : r.push(a),
                r) : r || []
            }
        }
        ,
        i.dequeue = function(e, t) {
            i.each(e.nodeType ? [e] : e, function(e, n) {
                t = t || "fx";
                var a = i.queue(n, t)
                  , r = a.shift();
                "inprogress" === r && (r = a.shift()),
                r && ("fx" === t && a.unshift("inprogress"),
                r.call(n, function() {
                    i.dequeue(n, t)
                }))
            })
        }
        ,
        i.fn = i.prototype = {
            init: function(e) {
                if (e.nodeType)
                    return this[0] = e,
                    this;
                throw new Error("Not a DOM node.")
            },
            offset: function() {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
                    top: 0,
                    left: 0
                };
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            },
            position: function() {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
                        e = e.offsetParent;
                    return e || document
                }
                var t = this[0]
                  , e = e.apply(t)
                  , n = this.offset()
                  , a = /^(?:body|html)$/i.test(e.nodeName) ? {
                    top: 0,
                    left: 0
                } : i(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0,
                n.left -= parseFloat(t.style.marginLeft) || 0,
                e.style && (a.top += parseFloat(e.style.borderTopWidth) || 0,
                a.left += parseFloat(e.style.borderLeftWidth) || 0),
                {
                    top: n.top - a.top,
                    left: n.left - a.left
                }
            }
        };
        var n = {};
        i.expando = "velocity" + (new Date).getTime(),
        i.uuid = 0;
        for (var a = {}, r = a.hasOwnProperty, o = a.toString, s = "Boolean Number String Function Array Date RegExp Object Error".split(" "), l = 0; l < s.length; l++)
            a["[object " + s[l] + "]"] = s[l].toLowerCase();
        i.fn.init.prototype = i.fn,
        e.Velocity = {
            Utilities: i
        }
    }
}(window),
function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function() {
    return function(e, t, i, n) {
        function a(e) {
            for (var t = -1, i = e ? e.length : 0, n = []; ++t < i; ) {
                var a = e[t];
                a && n.push(a)
            }
            return n
        }
        function r(e) {
            return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]),
            e
        }
        function o(e) {
            var t = p.data(e, "velocity");
            return null === t ? n : t
        }
        function s(e) {
            return function(t) {
                return Math.round(t * e) * (1 / e)
            }
        }
        function l(e, i, n, a) {
            function r(e, t) {
                return 1 - 3 * t + 3 * e
            }
            function o(e, t) {
                return 3 * t - 6 * e
            }
            function s(e) {
                return 3 * e
            }
            function l(e, t, i) {
                return ((r(t, i) * e + o(t, i)) * e + s(t)) * e
            }
            function c(e, t, i) {
                return 3 * r(t, i) * e * e + 2 * o(t, i) * e + s(t)
            }
            function u(t, i) {
                for (var a = 0; m > a; ++a) {
                    var r = c(i, e, n);
                    if (0 === r)
                        return i;
                    i -= (l(i, e, n) - t) / r
                }
                return i
            }
            function d() {
                for (var t = 0; w > t; ++t)
                    C[t] = l(t * b, e, n)
            }
            function p(t, i, a) {
                var r, o, s = 0;
                do {
                    o = i + (a - i) / 2,
                    r = l(o, e, n) - t,
                    r > 0 ? a = o : i = o
                } while (Math.abs(r) > v && ++s < y);return o
            }
            function h(t) {
                for (var i = 0, a = 1, r = w - 1; a != r && C[a] <= t; ++a)
                    i += b;
                --a;
                var o = (t - C[a]) / (C[a + 1] - C[a])
                  , s = i + o * b
                  , l = c(s, e, n);
                return l >= g ? u(t, s) : 0 == l ? s : p(t, i, i + b)
            }
            function f() {
                S = !0,
                (e != i || n != a) && d()
            }
            var m = 4
              , g = .001
              , v = 1e-7
              , y = 10
              , w = 11
              , b = 1 / (w - 1)
              , x = "Float32Array"in t;
            if (4 !== arguments.length)
                return !1;
            for (var T = 0; 4 > T; ++T)
                if ("number" != typeof arguments[T] || isNaN(arguments[T]) || !isFinite(arguments[T]))
                    return !1;
            e = Math.min(e, 1),
            n = Math.min(n, 1),
            e = Math.max(e, 0),
            n = Math.max(n, 0);
            var C = x ? new Float32Array(w) : new Array(w)
              , S = !1
              , k = function(t) {
                return S || f(),
                e === i && n === a ? t : 0 === t ? 0 : 1 === t ? 1 : l(h(t), i, a)
            };
            k.getControlPoints = function() {
                return [{
                    x: e,
                    y: i
                }, {
                    x: n,
                    y: a
                }]
            }
            ;
            var E = "generateBezier(" + [e, i, n, a] + ")";
            return k.toString = function() {
                return E
            }
            ,
            k
        }
        function c(e, t) {
            var i = e;
            return m.isString(e) ? w.Easings[e] || (i = !1) : i = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? b.apply(null, e.concat([t])) : !(!m.isArray(e) || 4 !== e.length) && l.apply(null, e),
            !1 === i && (i = w.Easings[w.defaults.easing] ? w.defaults.easing : y),
            i
        }
        function u(e) {
            if (e) {
                var t = (new Date).getTime()
                  , i = w.State.calls.length;
                i > 1e4 && (w.State.calls = a(w.State.calls));
                for (var r = 0; i > r; r++)
                    if (w.State.calls[r]) {
                        var s = w.State.calls[r]
                          , l = s[0]
                          , c = s[2]
                          , h = s[3]
                          , f = !!h
                          , g = null;
                        h || (h = w.State.calls[r][3] = t - 16);
                        for (var v = Math.min((t - h) / c.duration, 1), y = 0, b = l.length; b > y; y++) {
                            var T = l[y]
                              , S = T.element;
                            if (o(S)) {
                                var k = !1;
                                if (c.display !== n && null !== c.display && "none" !== c.display) {
                                    if ("flex" === c.display) {
                                        var E = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                        p.each(E, function(e, t) {
                                            x.setPropertyValue(S, "display", t)
                                        })
                                    }
                                    x.setPropertyValue(S, "display", c.display)
                                }
                                c.visibility !== n && "hidden" !== c.visibility && x.setPropertyValue(S, "visibility", c.visibility);
                                for (var z in T)
                                    if ("element" !== z) {
                                        var M, P = T[z], L = m.isString(P.easing) ? w.Easings[P.easing] : P.easing;
                                        if (1 === v)
                                            M = P.endValue;
                                        else {
                                            var I = P.endValue - P.startValue;
                                            if (M = P.startValue + I * L(v, c, I),
                                            !f && M === P.currentValue)
                                                continue
                                        }
                                        if (P.currentValue = M,
                                        "tween" === z)
                                            g = M;
                                        else {
                                            if (x.Hooks.registered[z]) {
                                                var D = x.Hooks.getRoot(z)
                                                  , A = o(S).rootPropertyValueCache[D];
                                                A && (P.rootPropertyValue = A)
                                            }
                                            var O = x.setPropertyValue(S, z, P.currentValue + (0 === parseFloat(M) ? "" : P.unitType), P.rootPropertyValue, P.scrollData);
                                            x.Hooks.registered[z] && (o(S).rootPropertyValueCache[D] = x.Normalizations.registered[D] ? x.Normalizations.registered[D]("extract", null, O[1]) : O[1]),
                                            "transform" === O[0] && (k = !0)
                                        }
                                    }
                                c.mobileHA && o(S).transformCache.translate3d === n && (o(S).transformCache.translate3d = "(0px, 0px, 0px)",
                                k = !0),
                                k && x.flushTransformCache(S)
                            }
                        }
                        c.display !== n && "none" !== c.display && (w.State.calls[r][2].display = !1),
                        c.visibility !== n && "hidden" !== c.visibility && (w.State.calls[r][2].visibility = !1),
                        c.progress && c.progress.call(s[1], s[1], v, Math.max(0, h + c.duration - t), h, g),
                        1 === v && d(r)
                    }
            }
            w.State.isTicking && C(u)
        }
        function d(e, t) {
            if (!w.State.calls[e])
                return !1;
            for (var i = w.State.calls[e][0], a = w.State.calls[e][1], r = w.State.calls[e][2], s = w.State.calls[e][4], l = !1, c = 0, u = i.length; u > c; c++) {
                var d = i[c].element;
                if (t || r.loop || ("none" === r.display && x.setPropertyValue(d, "display", r.display),
                "hidden" === r.visibility && x.setPropertyValue(d, "visibility", r.visibility)),
                !0 !== r.loop && (p.queue(d)[1] === n || !/\.velocityQueueEntryFlag/i.test(p.queue(d)[1])) && o(d)) {
                    o(d).isAnimating = !1,
                    o(d).rootPropertyValueCache = {};
                    var h = !1;
                    p.each(x.Lists.transforms3D, function(e, t) {
                        var i = /^scale/.test(t) ? 1 : 0
                          , a = o(d).transformCache[t];
                        o(d).transformCache[t] !== n && new RegExp("^\\(" + i + "[^.]").test(a) && (h = !0,
                        delete o(d).transformCache[t])
                    }),
                    r.mobileHA && (h = !0,
                    delete o(d).transformCache.translate3d),
                    h && x.flushTransformCache(d),
                    x.Values.removeClass(d, "velocity-animating")
                }
                if (!t && r.complete && !r.loop && c === u - 1)
                    try {
                        r.complete.call(a, a)
                    } catch (e) {
                        setTimeout(function() {
                            throw e
                        }, 1)
                    }
                s && !0 !== r.loop && s(a),
                o(d) && !0 === r.loop && !t && (p.each(o(d).tweensContainer, function(e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0,
                    t.startValue = 360),
                    /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0,
                    t.startValue = 100)
                }),
                w(d, "reverse", {
                    loop: !0,
                    delay: r.delay
                })),
                !1 !== r.queue && p.dequeue(d, r.queue)
            }
            w.State.calls[e] = !1;
            for (var f = 0, m = w.State.calls.length; m > f; f++)
                if (!1 !== w.State.calls[f]) {
                    l = !0;
                    break
                }
            !1 === l && (w.State.isTicking = !1,
            delete w.State.calls,
            w.State.calls = [])
        }
        var p, h = function() {
            if (i.documentMode)
                return i.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = i.createElement("div");
                if (t.innerHTML = "\x3c!--[if IE " + e + "]><span></span><![endif]--\x3e",
                t.getElementsByTagName("span").length)
                    return t = null,
                    e
            }
            return n
        }(), f = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
                var i, n = (new Date).getTime();
                return i = Math.max(0, 16 - (n - e)),
                e = n + i,
                setTimeout(function() {
                    t(n + i)
                }, i)
            }
        }(), m = {
            isString: function(e) {
                return "string" == typeof e
            },
            isArray: Array.isArray || function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            ,
            isFunction: function(e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            },
            isNode: function(e) {
                return e && e.nodeType
            },
            isNodeList: function(e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            },
            isWrapped: function(e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            },
            isSVG: function(e) {
                return t.SVGElement && e instanceof t.SVGElement
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            }
        }, g = !1;
        if (e.fn && e.fn.jquery ? (p = e,
        g = !0) : p = t.Velocity.Utilities,
        8 >= h && !g)
            throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= h)
            return void (jQuery.fn.velocity = jQuery.fn.animate);
        var v = 400
          , y = "swing"
          , w = {
            State: {
                isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                isAndroid: /Android/i.test(navigator.userAgent),
                isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
                isChrome: t.chrome,
                isFirefox: /Firefox/i.test(navigator.userAgent),
                prefixElement: i.createElement("div"),
                prefixMatches: {},
                scrollAnchor: null,
                scrollPropertyLeft: null,
                scrollPropertyTop: null,
                isTicking: !1,
                calls: []
            },
            CSS: {},
            Utilities: p,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: v,
                easing: y,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function(e) {
                p.data(e, "velocity", {
                    isSVG: m.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {
                major: 1,
                minor: 2,
                patch: 2
            },
            debug: !1
        };
        t.pageYOffset !== n ? (w.State.scrollAnchor = t,
        w.State.scrollPropertyLeft = "pageXOffset",
        w.State.scrollPropertyTop = "pageYOffset") : (w.State.scrollAnchor = i.documentElement || i.body.parentNode || i.body,
        w.State.scrollPropertyLeft = "scrollLeft",
        w.State.scrollPropertyTop = "scrollTop");
        var b = function() {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }
            function t(t, i, n) {
                var a = {
                    x: t.x + n.dx * i,
                    v: t.v + n.dv * i,
                    tension: t.tension,
                    friction: t.friction
                };
                return {
                    dx: a.v,
                    dv: e(a)
                }
            }
            function i(i, n) {
                var a = {
                    dx: i.v,
                    dv: e(i)
                }
                  , r = t(i, .5 * n, a)
                  , o = t(i, .5 * n, r)
                  , s = t(i, n, o)
                  , l = 1 / 6 * (a.dx + 2 * (r.dx + o.dx) + s.dx)
                  , c = 1 / 6 * (a.dv + 2 * (r.dv + o.dv) + s.dv);
                return i.x = i.x + l * n,
                i.v = i.v + c * n,
                i
            }
            return function e(t, n, a) {
                var r, o, s, l = {
                    x: -1,
                    v: 0,
                    tension: null,
                    friction: null
                }, c = [0], u = 0;
                for (t = parseFloat(t) || 500,
                n = parseFloat(n) || 20,
                a = a || null,
                l.tension = t,
                l.friction = n,
                r = null !== a,
                r ? (u = e(t, n),
                o = u / a * .016) : o = .016; s = i(s || l, o),
                c.push(1 + s.x),
                u += 16,
                Math.abs(s.x) > 1e-4 && Math.abs(s.v) > 1e-4; )
                    ;
                return r ? function(e) {
                    return c[e * (c.length - 1) | 0]
                }
                : u
            }
        }();
        w.Easings = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            spring: function(e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        },
        p.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
            w.Easings[t[0]] = l.apply(null, t[1])
        });
        var x = w.CSS = {
            RegEx: {
                isHex: /^#([A-f\d]{3}){1,2}$/i,
                valueUnwrap: /^[A-z]+\((.*)\)$/i,
                wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
                valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
            },
            Lists: {
                colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
                transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
                transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
            },
            Hooks: {
                templates: {
                    textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
                    boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
                    clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
                    backgroundPosition: ["X Y", "0% 0%"],
                    transformOrigin: ["X Y Z", "50% 50% 0px"],
                    perspectiveOrigin: ["X Y", "50% 50%"]
                },
                registered: {},
                register: function() {
                    for (var e = 0; e < x.Lists.colors.length; e++) {
                        var t = "color" === x.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        x.Hooks.templates[x.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var i, n, a;
                    if (h)
                        for (i in x.Hooks.templates) {
                            n = x.Hooks.templates[i],
                            a = n[0].split(" ");
                            var r = n[1].match(x.RegEx.valueSplit);
                            "Color" === a[0] && (a.push(a.shift()),
                            r.push(r.shift()),
                            x.Hooks.templates[i] = [a.join(" "), r.join(" ")])
                        }
                    for (i in x.Hooks.templates) {
                        n = x.Hooks.templates[i],
                        a = n[0].split(" ");
                        for (var e in a) {
                            var o = i + a[e]
                              , s = e;
                            x.Hooks.registered[o] = [i, s]
                        }
                    }
                },
                getRoot: function(e) {
                    var t = x.Hooks.registered[e];
                    return t ? t[0] : e
                },
                cleanRootPropertyValue: function(e, t) {
                    return x.RegEx.valueUnwrap.test(t) && (t = t.match(x.RegEx.valueUnwrap)[1]),
                    x.Values.isCSSNullValue(t) && (t = x.Hooks.templates[e][1]),
                    t
                },
                extractValue: function(e, t) {
                    var i = x.Hooks.registered[e];
                    if (i) {
                        var n = i[0]
                          , a = i[1];
                        return t = x.Hooks.cleanRootPropertyValue(n, t),
                        t.toString().match(x.RegEx.valueSplit)[a]
                    }
                    return t
                },
                injectValue: function(e, t, i) {
                    var n = x.Hooks.registered[e];
                    if (n) {
                        var a, r = n[0], o = n[1];
                        return i = x.Hooks.cleanRootPropertyValue(r, i),
                        a = i.toString().match(x.RegEx.valueSplit),
                        a[o] = t,
                        a.join(" ")
                    }
                    return i
                }
            },
            Normalizations: {
                registered: {
                    clip: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return "clip";
                        case "extract":
                            var n;
                            return x.RegEx.wrappedValueAlreadyExtracted.test(i) ? n = i : (n = i.toString().match(x.RegEx.valueUnwrap),
                            n = n ? n[1].replace(/,(\s+)?/g, " ") : i),
                            n;
                        case "inject":
                            return "rect(" + i + ")"
                        }
                    },
                    blur: function(e, t, i) {
                        switch (e) {
                        case "name":
                            return w.State.isFirefox ? "filter" : "-webkit-filter";
                        case "extract":
                            var n = parseFloat(i);
                            if (!n && 0 !== n) {
                                var a = i.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                n = a ? a[1] : 0
                            }
                            return n;
                        case "inject":
                            return parseFloat(i) ? "blur(" + i + ")" : "none"
                        }
                    },
                    opacity: function(e, t, i) {
                        if (8 >= h)
                            switch (e) {
                            case "name":
                                return "filter";
                            case "extract":
                                var n = i.toString().match(/alpha\(opacity=(.*)\)/i);
                                return i = n ? n[1] / 100 : 1;
                            case "inject":
                                return t.style.zoom = 1,
                                parseFloat(i) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(i), 10) + ")"
                            }
                        else
                            switch (e) {
                            case "name":
                                return "opacity";
                            case "extract":
                            case "inject":
                                return i
                            }
                    }
                },
                register: function() {
                    9 >= h || w.State.isGingerbread || (x.Lists.transformsBase = x.Lists.transformsBase.concat(x.Lists.transforms3D));
                    for (var e = 0; e < x.Lists.transformsBase.length; e++)
                        !function() {
                            var t = x.Lists.transformsBase[e];
                            x.Normalizations.registered[t] = function(e, i, a) {
                                switch (e) {
                                case "name":
                                    return "transform";
                                case "extract":
                                    return o(i) === n || o(i).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : o(i).transformCache[t].replace(/[()]/g, "");
                                case "inject":
                                    var r = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                    case "translate":
                                        r = !/(%|px|em|rem|vw|vh|\d)$/i.test(a);
                                        break;
                                    case "scal":
                                    case "scale":
                                        w.State.isAndroid && o(i).transformCache[t] === n && 1 > a && (a = 1),
                                        r = !/(\d)$/i.test(a);
                                        break;
                                    case "skew":
                                        r = !/(deg|\d)$/i.test(a);
                                        break;
                                    case "rotate":
                                        r = !/(deg|\d)$/i.test(a)
                                    }
                                    return r || (o(i).transformCache[t] = "(" + a + ")"),
                                    o(i).transformCache[t]
                                }
                            }
                        }();
                    for (var e = 0; e < x.Lists.colors.length; e++)
                        !function() {
                            var t = x.Lists.colors[e];
                            x.Normalizations.registered[t] = function(e, i, a) {
                                switch (e) {
                                case "name":
                                    return t;
                                case "extract":
                                    var r;
                                    if (x.RegEx.wrappedValueAlreadyExtracted.test(a))
                                        r = a;
                                    else {
                                        var o, s = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(a) ? o = s[a] !== n ? s[a] : s.black : x.RegEx.isHex.test(a) ? o = "rgb(" + x.Values.hexToRgb(a).join(" ") + ")" : /^rgba?\(/i.test(a) || (o = s.black),
                                        r = (o || a).toString().match(x.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= h || 3 !== r.split(" ").length || (r += " 1"),
                                    r;
                                case "inject":
                                    return 8 >= h ? 4 === a.split(" ").length && (a = a.split(/\s+/).slice(0, 3).join(" ")) : 3 === a.split(" ").length && (a += " 1"),
                                    (8 >= h ? "rgb" : "rgba") + "(" + a.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                                }
                            }
                        }()
                }
            },
            Names: {
                camelCase: function(e) {
                    return e.replace(/-(\w)/g, function(e, t) {
                        return t.toUpperCase()
                    })
                },
                SVGAttribute: function(e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (h || w.State.isAndroid && !w.State.isChrome) && (t += "|transform"),
                    new RegExp("^(" + t + ")$","i").test(e)
                },
                prefixCheck: function(e) {
                    if (w.State.prefixMatches[e])
                        return [w.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], i = 0, n = t.length; n > i; i++) {
                        var a;
                        if (a = 0 === i ? e : t[i] + e.replace(/^\w/, function(e) {
                            return e.toUpperCase()
                        }),
                        m.isString(w.State.prefixElement.style[a]))
                            return w.State.prefixMatches[e] = a,
                            [a, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function(e) {
                    var t, i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                        return t + t + i + i + n + n
                    }),
                    t = i.exec(e),
                    t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                },
                isCSSNullValue: function(e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                },
                getUnitType: function(e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                },
                getDisplayType: function(e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                },
                addClass: function(e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                },
                removeClass: function(e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)","gi"), " ")
                }
            },
            getPropertyValue: function(e, i, a, r) {
                function s(e, i) {
                    function a() {
                        c && x.setPropertyValue(e, "display", "none")
                    }
                    var l = 0;
                    if (8 >= h)
                        l = p.css(e, i);
                    else {
                        var c = !1;
                        if (/^(width|height)$/.test(i) && 0 === x.getPropertyValue(e, "display") && (c = !0,
                        x.setPropertyValue(e, "display", x.Values.getDisplayType(e))),
                        !r) {
                            if ("height" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetHeight - (parseFloat(x.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingBottom")) || 0);
                                return a(),
                                u
                            }
                            if ("width" === i && "border-box" !== x.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var d = e.offsetWidth - (parseFloat(x.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(x.getPropertyValue(e, "paddingRight")) || 0);
                                return a(),
                                d
                            }
                        }
                        var f;
                        f = o(e) === n ? t.getComputedStyle(e, null) : o(e).computedStyle ? o(e).computedStyle : o(e).computedStyle = t.getComputedStyle(e, null),
                        "borderColor" === i && (i = "borderTopColor"),
                        l = 9 === h && "filter" === i ? f.getPropertyValue(i) : f[i],
                        ("" === l || null === l) && (l = e.style[i]),
                        a()
                    }
                    if ("auto" === l && /^(top|right|bottom|left)$/i.test(i)) {
                        var m = s(e, "position");
                        ("fixed" === m || "absolute" === m && /top|left/i.test(i)) && (l = p(e).position()[i] + "px")
                    }
                    return l
                }
                var l;
                if (x.Hooks.registered[i]) {
                    var c = i
                      , u = x.Hooks.getRoot(c);
                    a === n && (a = x.getPropertyValue(e, x.Names.prefixCheck(u)[0])),
                    x.Normalizations.registered[u] && (a = x.Normalizations.registered[u]("extract", e, a)),
                    l = x.Hooks.extractValue(c, a)
                } else if (x.Normalizations.registered[i]) {
                    var d, f;
                    d = x.Normalizations.registered[i]("name", e),
                    "transform" !== d && (f = s(e, x.Names.prefixCheck(d)[0]),
                    x.Values.isCSSNullValue(f) && x.Hooks.templates[i] && (f = x.Hooks.templates[i][1])),
                    l = x.Normalizations.registered[i]("extract", e, f)
                }
                if (!/^[\d-]/.test(l))
                    if (o(e) && o(e).isSVG && x.Names.SVGAttribute(i))
                        if (/^(height|width)$/i.test(i))
                            try {
                                l = e.getBBox()[i]
                            } catch (e) {
                                l = 0
                            }
                        else
                            l = e.getAttribute(i);
                    else
                        l = s(e, x.Names.prefixCheck(i)[0]);
                return x.Values.isCSSNullValue(l) && (l = 0),
                w.debug >= 2 && console.log("Get " + i + ": " + l),
                l
            },
            setPropertyValue: function(e, i, n, a, r) {
                var s = i;
                if ("scroll" === i)
                    r.container ? r.container["scroll" + r.direction] = n : "Left" === r.direction ? t.scrollTo(n, r.alternateValue) : t.scrollTo(r.alternateValue, n);
                else if (x.Normalizations.registered[i] && "transform" === x.Normalizations.registered[i]("name", e))
                    x.Normalizations.registered[i]("inject", e, n),
                    s = "transform",
                    n = o(e).transformCache[i];
                else {
                    if (x.Hooks.registered[i]) {
                        var l = i
                          , c = x.Hooks.getRoot(i);
                        a = a || x.getPropertyValue(e, c),
                        n = x.Hooks.injectValue(l, n, a),
                        i = c
                    }
                    if (x.Normalizations.registered[i] && (n = x.Normalizations.registered[i]("inject", e, n),
                    i = x.Normalizations.registered[i]("name", e)),
                    s = x.Names.prefixCheck(i)[0],
                    8 >= h)
                        try {
                            e.style[s] = n
                        } catch (e) {
                            w.debug && console.log("Browser does not support [" + n + "] for [" + s + "]")
                        }
                    else
                        o(e) && o(e).isSVG && x.Names.SVGAttribute(i) ? e.setAttribute(i, n) : e.style[s] = n;
                    w.debug >= 2 && console.log("Set " + i + " (" + s + "): " + n)
                }
                return [s, n]
            },
            flushTransformCache: function(e) {
                function t(t) {
                    return parseFloat(x.getPropertyValue(e, t))
                }
                var i = "";
                if ((h || w.State.isAndroid && !w.State.isChrome) && o(e).isSVG) {
                    var n = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    p.each(o(e).transformCache, function(e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"),
                        n[e] && (i += e + "(" + n[e].join(" ") + ") ",
                        delete n[e])
                    })
                } else {
                    var a, r;
                    p.each(o(e).transformCache, function(t) {
                        return a = o(e).transformCache[t],
                        "transformPerspective" === t ? (r = a,
                        !0) : (9 === h && "rotateZ" === t && (t = "rotate"),
                        void (i += t + a + " "))
                    }),
                    r && (i = "perspective" + r + " " + i)
                }
                x.setPropertyValue(e, "transform", i)
            }
        };
        x.Hooks.register(),
        x.Normalizations.register(),
        w.hook = function(e, t, i) {
            var a = n;
            return e = r(e),
            p.each(e, function(e, r) {
                if (o(r) === n && w.init(r),
                i === n)
                    a === n && (a = w.CSS.getPropertyValue(r, t));
                else {
                    var s = w.CSS.setPropertyValue(r, t, i);
                    "transform" === s[0] && w.CSS.flushTransformCache(r),
                    a = s
                }
            }),
            a
        }
        ;
        var T = function() {
            function e() {
                return s ? z.promise || null : l
            }
            function a() {
                function e(e) {
                    function d(e, t) {
                        var i = n
                          , a = n
                          , o = n;
                        return m.isArray(e) ? (i = e[0],
                        !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || x.RegEx.isHex.test(e[1]) ? o = e[1] : (m.isString(e[1]) && !x.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (a = t ? e[1] : c(e[1], s.duration),
                        e[2] !== n && (o = e[2]))) : i = e,
                        t || (a = a || s.easing),
                        m.isFunction(i) && (i = i.call(r, S, C)),
                        m.isFunction(o) && (o = o.call(r, S, C)),
                        [i || 0, a, o]
                    }
                    function h(e, t) {
                        var i, n;
                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                            return i = e,
                            ""
                        }),
                        i || (i = x.Values.getUnitType(e)),
                        [n, i]
                    }
                    if (s.begin && 0 === S)
                        try {
                            s.begin.call(f, f)
                        } catch (e) {
                            setTimeout(function() {
                                throw e
                            }, 1)
                        }
                    if ("scroll" === M) {
                        var v, b, T, k = /^x$/i.test(s.axis) ? "Left" : "Top", E = parseFloat(s.offset) || 0;
                        s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container,
                        v = s.container["scroll" + k],
                        T = v + p(r).position()[k.toLowerCase()] + E) : s.container = null : (v = w.State.scrollAnchor[w.State["scrollProperty" + k]],
                        b = w.State.scrollAnchor[w.State["scrollProperty" + ("Left" === k ? "Top" : "Left")]],
                        T = p(r).offset()[k.toLowerCase()] + E),
                        l = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: v,
                                currentValue: v,
                                endValue: T,
                                unitType: "",
                                easing: s.easing,
                                scrollData: {
                                    container: s.container,
                                    direction: k,
                                    alternateValue: b
                                }
                            },
                            element: r
                        },
                        w.debug && console.log("tweensContainer (scroll): ", l.scroll, r)
                    } else if ("reverse" === M) {
                        if (!o(r).tweensContainer)
                            return void p.dequeue(r, s.queue);
                        "none" === o(r).opts.display && (o(r).opts.display = "auto"),
                        "hidden" === o(r).opts.visibility && (o(r).opts.visibility = "visible"),
                        o(r).opts.loop = !1,
                        o(r).opts.begin = null,
                        o(r).opts.complete = null,
                        y.easing || delete s.easing,
                        y.duration || delete s.duration,
                        s = p.extend({}, o(r).opts, s);
                        var P = p.extend(!0, {}, o(r).tweensContainer);
                        for (var L in P)
                            if ("element" !== L) {
                                var I = P[L].startValue;
                                P[L].startValue = P[L].currentValue = P[L].endValue,
                                P[L].endValue = I,
                                m.isEmptyObject(y) || (P[L].easing = s.easing),
                                w.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(P[L]), r)
                            }
                        l = P
                    } else if ("start" === M) {
                        var P;
                        o(r).tweensContainer && !0 === o(r).isAnimating && (P = o(r).tweensContainer),
                        p.each(g, function(e, t) {
                            if (RegExp("^" + x.Lists.colors.join("$|^") + "$").test(e)) {
                                var i = d(t, !0)
                                  , a = i[0]
                                  , r = i[1]
                                  , o = i[2];
                                if (x.RegEx.isHex.test(a)) {
                                    for (var s = ["Red", "Green", "Blue"], l = x.Values.hexToRgb(a), c = o ? x.Values.hexToRgb(o) : n, u = 0; u < s.length; u++) {
                                        var p = [l[u]];
                                        r && p.push(r),
                                        c !== n && p.push(c[u]),
                                        g[e + s[u]] = p
                                    }
                                    delete g[e]
                                }
                            }
                        });
                        for (var D in g) {
                            var A = d(g[D])
                              , H = A[0]
                              , N = A[1]
                              , q = A[2];
                            D = x.Names.camelCase(D);
                            var j = x.Hooks.getRoot(D)
                              , R = !1;
                            if (o(r).isSVG || "tween" === j || !1 !== x.Names.prefixCheck(j)[1] || x.Normalizations.registered[j] !== n) {
                                (s.display !== n && null !== s.display && "none" !== s.display || s.visibility !== n && "hidden" !== s.visibility) && /opacity|filter/.test(D) && !q && 0 !== H && (q = 0),
                                s._cacheValues && P && P[D] ? (q === n && (q = P[D].endValue + P[D].unitType),
                                R = o(r).rootPropertyValueCache[j]) : x.Hooks.registered[D] ? q === n ? (R = x.getPropertyValue(r, j),
                                q = x.getPropertyValue(r, D, R)) : R = x.Hooks.templates[j][1] : q === n && (q = x.getPropertyValue(r, D));
                                var W, B, F, X = !1;
                                if (W = h(D, q),
                                q = W[0],
                                F = W[1],
                                W = h(D, H),
                                H = W[0].replace(/^([+-\/*])=/, function(e, t) {
                                    return X = t,
                                    ""
                                }),
                                B = W[1],
                                q = parseFloat(q) || 0,
                                H = parseFloat(H) || 0,
                                "%" === B && (/^(fontSize|lineHeight)$/.test(D) ? (H /= 100,
                                B = "em") : /^scale/.test(D) ? (H /= 100,
                                B = "") : /(Red|Green|Blue)$/i.test(D) && (H = H / 100 * 255,
                                B = "")),
                                /[\/*]/.test(X))
                                    B = F;
                                else if (F !== B && 0 !== q)
                                    if (0 === H)
                                        B = F;
                                    else {
                                        a = a || function() {
                                            var e = {
                                                myParent: r.parentNode || i.body,
                                                position: x.getPropertyValue(r, "position"),
                                                fontSize: x.getPropertyValue(r, "fontSize")
                                            }
                                              , n = e.position === O.lastPosition && e.myParent === O.lastParent
                                              , a = e.fontSize === O.lastFontSize;
                                            O.lastParent = e.myParent,
                                            O.lastPosition = e.position,
                                            O.lastFontSize = e.fontSize;
                                            var s = 100
                                              , l = {};
                                            if (a && n)
                                                l.emToPx = O.lastEmToPx,
                                                l.percentToPxWidth = O.lastPercentToPxWidth,
                                                l.percentToPxHeight = O.lastPercentToPxHeight;
                                            else {
                                                var c = o(r).isSVG ? i.createElementNS("http://www.w3.org/2000/svg", "rect") : i.createElement("div");
                                                w.init(c),
                                                e.myParent.appendChild(c),
                                                p.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                                                    w.CSS.setPropertyValue(c, t, "hidden")
                                                }),
                                                w.CSS.setPropertyValue(c, "position", e.position),
                                                w.CSS.setPropertyValue(c, "fontSize", e.fontSize),
                                                w.CSS.setPropertyValue(c, "boxSizing", "content-box"),
                                                p.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                                                    w.CSS.setPropertyValue(c, t, s + "%")
                                                }),
                                                w.CSS.setPropertyValue(c, "paddingLeft", s + "em"),
                                                l.percentToPxWidth = O.lastPercentToPxWidth = (parseFloat(x.getPropertyValue(c, "width", null, !0)) || 1) / s,
                                                l.percentToPxHeight = O.lastPercentToPxHeight = (parseFloat(x.getPropertyValue(c, "height", null, !0)) || 1) / s,
                                                l.emToPx = O.lastEmToPx = (parseFloat(x.getPropertyValue(c, "paddingLeft")) || 1) / s,
                                                e.myParent.removeChild(c)
                                            }
                                            return null === O.remToPx && (O.remToPx = parseFloat(x.getPropertyValue(i.body, "fontSize")) || 16),
                                            null === O.vwToPx && (O.vwToPx = parseFloat(t.innerWidth) / 100,
                                            O.vhToPx = parseFloat(t.innerHeight) / 100),
                                            l.remToPx = O.remToPx,
                                            l.vwToPx = O.vwToPx,
                                            l.vhToPx = O.vhToPx,
                                            w.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), r),
                                            l
                                        }();
                                        var _ = /margin|padding|left|right|width|text|word|letter/i.test(D) || /X$/.test(D) || "x" === D ? "x" : "y";
                                        switch (F) {
                                        case "%":
                                            q *= "x" === _ ? a.percentToPxWidth : a.percentToPxHeight;
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            q *= a[F + "ToPx"]
                                        }
                                        switch (B) {
                                        case "%":
                                            q *= 1 / ("x" === _ ? a.percentToPxWidth : a.percentToPxHeight);
                                            break;
                                        case "px":
                                            break;
                                        default:
                                            q *= 1 / a[B + "ToPx"]
                                        }
                                    }
                                switch (X) {
                                case "+":
                                    H = q + H;
                                    break;
                                case "-":
                                    H = q - H;
                                    break;
                                case "*":
                                    H *= q;
                                    break;
                                case "/":
                                    H = q / H
                                }
                                l[D] = {
                                    rootPropertyValue: R,
                                    startValue: q,
                                    currentValue: q,
                                    endValue: H,
                                    unitType: B,
                                    easing: N
                                },
                                w.debug && console.log("tweensContainer (" + D + "): " + JSON.stringify(l[D]), r)
                            } else
                                w.debug && console.log("Skipping [" + j + "] due to a lack of browser support.")
                        }
                        l.element = r
                    }
                    l.element && (x.Values.addClass(r, "velocity-animating"),
                    $.push(l),
                    "" === s.queue && (o(r).tweensContainer = l,
                    o(r).opts = s),
                    o(r).isAnimating = !0,
                    S === C - 1 ? (w.State.calls.push([$, f, s, null, z.resolver]),
                    !1 === w.State.isTicking && (w.State.isTicking = !0,
                    u())) : S++)
                }
                var a, r = this, s = p.extend({}, w.defaults, y), l = {};
                switch (o(r) === n && w.init(r),
                parseFloat(s.delay) && !1 !== s.queue && p.queue(r, s.queue, function(e) {
                    w.velocityQueueEntryFlag = !0,
                    o(r).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(s.delay)),
                        next: e
                    }
                }),
                s.duration.toString().toLowerCase()) {
                case "fast":
                    s.duration = 200;
                    break;
                case "normal":
                    s.duration = v;
                    break;
                case "slow":
                    s.duration = 600;
                    break;
                default:
                    s.duration = parseFloat(s.duration) || 1
                }
                !1 !== w.mock && (!0 === w.mock ? s.duration = s.delay = 1 : (s.duration *= parseFloat(w.mock) || 1,
                s.delay *= parseFloat(w.mock) || 1)),
                s.easing = c(s.easing, s.duration),
                s.begin && !m.isFunction(s.begin) && (s.begin = null),
                s.progress && !m.isFunction(s.progress) && (s.progress = null),
                s.complete && !m.isFunction(s.complete) && (s.complete = null),
                s.display !== n && null !== s.display && (s.display = s.display.toString().toLowerCase(),
                "auto" === s.display && (s.display = w.CSS.Values.getDisplayType(r))),
                s.visibility !== n && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()),
                s.mobileHA = s.mobileHA && w.State.isMobile && !w.State.isGingerbread,
                !1 === s.queue ? s.delay ? setTimeout(e, s.delay) : e() : p.queue(r, s.queue, function(t, i) {
                    return !0 === i ? (z.promise && z.resolver(f),
                    !0) : (w.velocityQueueEntryFlag = !0,
                    void e(t))
                }),
                "" !== s.queue && "fx" !== s.queue || "inprogress" === p.queue(r)[0] || p.dequeue(r)
            }
            var s, l, h, f, g, y, b = arguments[0] && (arguments[0].p || p.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
            if (m.isWrapped(this) ? (s = !1,
            h = 0,
            f = this,
            l = this) : (s = !0,
            h = 1,
            f = b ? arguments[0].elements || arguments[0].e : arguments[0]),
            f = r(f)) {
                b ? (g = arguments[0].properties || arguments[0].p,
                y = arguments[0].options || arguments[0].o) : (g = arguments[h],
                y = arguments[h + 1]);
                var C = f.length
                  , S = 0;
                if (!/^(stop|finish)$/i.test(g) && !p.isPlainObject(y)) {
                    var k = h + 1;
                    y = {};
                    for (var E = k; E < arguments.length; E++)
                        m.isArray(arguments[E]) || !/^(fast|normal|slow)$/i.test(arguments[E]) && !/^\d/.test(arguments[E]) ? m.isString(arguments[E]) || m.isArray(arguments[E]) ? y.easing = arguments[E] : m.isFunction(arguments[E]) && (y.complete = arguments[E]) : y.duration = arguments[E]
                }
                var z = {
                    promise: null,
                    resolver: null,
                    rejecter: null
                };
                s && w.Promise && (z.promise = new w.Promise(function(e, t) {
                    z.resolver = e,
                    z.rejecter = t
                }
                ));
                var M;
                switch (g) {
                case "scroll":
                    M = "scroll";
                    break;
                case "reverse":
                    M = "reverse";
                    break;
                case "finish":
                case "stop":
                    p.each(f, function(e, t) {
                        o(t) && o(t).delayTimer && (clearTimeout(o(t).delayTimer.setTimeout),
                        o(t).delayTimer.next && o(t).delayTimer.next(),
                        delete o(t).delayTimer)
                    });
                    var P = [];
                    return p.each(w.State.calls, function(e, t) {
                        t && p.each(t[1], function(i, a) {
                            var r = y === n ? "" : y;
                            return !0 !== r && t[2].queue !== r && (y !== n || !1 !== t[2].queue) || void p.each(f, function(i, n) {
                                n === a && ((!0 === y || m.isString(y)) && (p.each(p.queue(n, m.isString(y) ? y : ""), function(e, t) {
                                    m.isFunction(t) && t(null, !0)
                                }),
                                p.queue(n, m.isString(y) ? y : "", [])),
                                "stop" === g ? (o(n) && o(n).tweensContainer && !1 !== r && p.each(o(n).tweensContainer, function(e, t) {
                                    t.endValue = t.currentValue
                                }),
                                P.push(e)) : "finish" === g && (t[2].duration = 1))
                            })
                        })
                    }),
                    "stop" === g && (p.each(P, function(e, t) {
                        d(t, !0)
                    }),
                    z.promise && z.resolver(f)),
                    e();
                default:
                    if (!p.isPlainObject(g) || m.isEmptyObject(g)) {
                        if (m.isString(g) && w.Redirects[g]) {
                            var L = p.extend({}, y)
                              , I = L.duration
                              , D = L.delay || 0;
                            return !0 === L.backwards && (f = p.extend(!0, [], f).reverse()),
                            p.each(f, function(e, t) {
                                parseFloat(L.stagger) ? L.delay = D + parseFloat(L.stagger) * e : m.isFunction(L.stagger) && (L.delay = D + L.stagger.call(t, e, C)),
                                L.drag && (L.duration = parseFloat(I) || (/^(callout|transition)/.test(g) ? 1e3 : v),
                                L.duration = Math.max(L.duration * (L.backwards ? 1 - e / C : (e + 1) / C), .75 * L.duration, 200)),
                                w.Redirects[g].call(t, t, L || {}, e, C, f, z.promise ? z : n)
                            }),
                            e()
                        }
                        var A = "Velocity: First argument (" + g + ") was not a property map, a known action, or a registered redirect. Aborting.";
                        return z.promise ? z.rejecter(new Error(A)) : console.log(A),
                        e()
                    }
                    M = "start"
                }
                var O = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }
                  , $ = [];
                p.each(f, function(e, t) {
                    m.isNode(t) && a.call(t)
                });
                var H, L = p.extend({}, w.defaults, y);
                if (L.loop = parseInt(L.loop),
                H = 2 * L.loop - 1,
                L.loop)
                    for (var N = 0; H > N; N++) {
                        var q = {
                            delay: L.delay,
                            progress: L.progress
                        };
                        N === H - 1 && (q.display = L.display,
                        q.visibility = L.visibility,
                        q.complete = L.complete),
                        T(f, "reverse", q)
                    }
                return e()
            }
        };
        w = p.extend(T, w),
        w.animate = T;
        var C = t.requestAnimationFrame || f;
        return w.State.isMobile || i.hidden === n || i.addEventListener("visibilitychange", function() {
            i.hidden ? (C = function(e) {
                return setTimeout(function() {
                    e(!0)
                }, 16)
            }
            ,
            u()) : C = t.requestAnimationFrame || f
        }),
        e.Velocity = w,
        e !== t && (e.fn.velocity = T,
        e.fn.velocity.defaults = w.defaults),
        p.each(["Down", "Up"], function(e, t) {
            w.Redirects["slide" + t] = function(e, i, a, r, o, s) {
                var l = p.extend({}, i)
                  , c = l.begin
                  , u = l.complete
                  , d = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }
                  , h = {};
                l.display === n && (l.display = "Down" === t ? "inline" === w.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"),
                l.begin = function() {
                    c && c.call(o, o);
                    for (var i in d) {
                        h[i] = e.style[i];
                        var n = w.CSS.getPropertyValue(e, i);
                        d[i] = "Down" === t ? [n, 0] : [0, n]
                    }
                    h.overflow = e.style.overflow,
                    e.style.overflow = "hidden"
                }
                ,
                l.complete = function() {
                    for (var t in h)
                        e.style[t] = h[t];
                    u && u.call(o, o),
                    s && s.resolver(o)
                }
                ,
                w(e, d, l)
            }
        }),
        p.each(["In", "Out"], function(e, t) {
            w.Redirects["fade" + t] = function(e, i, a, r, o, s) {
                var l = p.extend({}, i)
                  , c = {
                    opacity: "In" === t ? 1 : 0
                }
                  , u = l.complete;
                l.complete = a !== r - 1 ? l.begin = null : function() {
                    u && u.call(o, o),
                    s && s.resolver(o)
                }
                ,
                l.display === n && (l.display = "In" === t ? "auto" : "none"),
                w(this, c, l)
            }
        }),
        w
    }(window.jQuery || window.Zepto || window, window, document)
})),
function(e, t, i, n) {
    "use strict";
    function a(e, t, i) {
        return setTimeout(u(e, i), t)
    }
    function r(e, t, i) {
        return !!Array.isArray(e) && (o(e, i[t], i),
        !0)
    }
    function o(e, t, i) {
        var a;
        if (e)
            if (e.forEach)
                e.forEach(t, i);
            else if (e.length !== n)
                for (a = 0; a < e.length; )
                    t.call(i, e[a], a, e),
                    a++;
            else
                for (a in e)
                    e.hasOwnProperty(a) && t.call(i, e[a], a, e)
    }
    function s(e, t, i) {
        for (var a = Object.keys(t), r = 0; r < a.length; )
            (!i || i && e[a[r]] === n) && (e[a[r]] = t[a[r]]),
            r++;
        return e
    }
    function l(e, t) {
        return s(e, t, !0)
    }
    function c(e, t, i) {
        var n, a = t.prototype;
        n = e.prototype = Object.create(a),
        n.constructor = e,
        n._super = a,
        i && s(n, i)
    }
    function u(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }
    function d(e, t) {
        return typeof e == ue ? e.apply(t ? t[0] || n : n, t) : e
    }
    function p(e, t) {
        return e === n ? t : e
    }
    function h(e, t, i) {
        o(v(t), function(t) {
            e.addEventListener(t, i, !1)
        })
    }
    function f(e, t, i) {
        o(v(t), function(t) {
            e.removeEventListener(t, i, !1)
        })
    }
    function m(e, t) {
        for (; e; ) {
            if (e == t)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function g(e, t) {
        return e.indexOf(t) > -1
    }
    function v(e) {
        return e.trim().split(/\s+/g)
    }
    function y(e, t, i) {
        if (e.indexOf && !i)
            return e.indexOf(t);
        for (var n = 0; n < e.length; ) {
            if (i && e[n][i] == t || !i && e[n] === t)
                return n;
            n++
        }
        return -1
    }
    function w(e) {
        return Array.prototype.slice.call(e, 0)
    }
    function b(e, t, i) {
        for (var n = [], a = [], r = 0; r < e.length; ) {
            var o = t ? e[r][t] : e[r];
            y(a, o) < 0 && n.push(e[r]),
            a[r] = o,
            r++
        }
        return i && (n = t ? n.sort(function(e, i) {
            return e[t] > i[t]
        }) : n.sort()),
        n
    }
    function x(e, t) {
        for (var i, a, r = t[0].toUpperCase() + t.slice(1), o = 0; o < le.length; ) {
            if (i = le[o],
            (a = i ? i + r : t)in e)
                return a;
            o++
        }
        return n
    }
    function T() {
        return fe++
    }
    function C(e) {
        var t = e.ownerDocument;
        return t.defaultView || t.parentWindow
    }
    function S(e, t) {
        var i = this;
        this.manager = e,
        this.callback = t,
        this.element = e.element,
        this.target = e.options.inputTarget,
        this.domHandler = function(t) {
            d(e.options.enable, [e]) && i.handler(t)
        }
        ,
        this.init()
    }
    function k(e) {
        var t = e.options.inputClass;
        return new (t || (ve ? j : ye ? B : ge ? X : q))(e,E)
    }
    function E(e, t, i) {
        var n = i.pointers.length
          , a = i.changedPointers.length
          , r = t & Te && 0 == n - a
          , o = t & (Se | ke) && 0 == n - a;
        i.isFirst = !!r,
        i.isFinal = !!o,
        r && (e.session = {}),
        i.eventType = t,
        z(e, i),
        e.emit("hammer.input", i),
        e.recognize(i),
        e.session.prevInput = i
    }
    function z(e, t) {
        var i = e.session
          , n = t.pointers
          , a = n.length;
        i.firstInput || (i.firstInput = L(t)),
        a > 1 && !i.firstMultiple ? i.firstMultiple = L(t) : 1 === a && (i.firstMultiple = !1);
        var r = i.firstInput
          , o = i.firstMultiple
          , s = o ? o.center : r.center
          , l = t.center = I(n);
        t.timeStamp = he(),
        t.deltaTime = t.timeStamp - r.timeStamp,
        t.angle = $(s, l),
        t.distance = O(s, l),
        M(i, t),
        t.offsetDirection = A(t.deltaX, t.deltaY),
        t.scale = o ? N(o.pointers, n) : 1,
        t.rotation = o ? H(o.pointers, n) : 0,
        P(i, t);
        var c = e.element;
        m(t.srcEvent.target, c) && (c = t.srcEvent.target),
        t.target = c
    }
    function M(e, t) {
        var i = t.center
          , n = e.offsetDelta || {}
          , a = e.prevDelta || {}
          , r = e.prevInput || {};
        (t.eventType === Te || r.eventType === Se) && (a = e.prevDelta = {
            x: r.deltaX || 0,
            y: r.deltaY || 0
        },
        n = e.offsetDelta = {
            x: i.x,
            y: i.y
        }),
        t.deltaX = a.x + (i.x - n.x),
        t.deltaY = a.y + (i.y - n.y)
    }
    function P(e, t) {
        var i, a, r, o, s = e.lastInterval || t, l = t.timeStamp - s.timeStamp;
        if (t.eventType != ke && (l > xe || s.velocity === n)) {
            var c = s.deltaX - t.deltaX
              , u = s.deltaY - t.deltaY
              , d = D(l, c, u);
            a = d.x,
            r = d.y,
            i = pe(d.x) > pe(d.y) ? d.x : d.y,
            o = A(c, u),
            e.lastInterval = t
        } else
            i = s.velocity,
            a = s.velocityX,
            r = s.velocityY,
            o = s.direction;
        t.velocity = i,
        t.velocityX = a,
        t.velocityY = r,
        t.direction = o
    }
    function L(e) {
        for (var t = [], i = 0; i < e.pointers.length; )
            t[i] = {
                clientX: de(e.pointers[i].clientX),
                clientY: de(e.pointers[i].clientY)
            },
            i++;
        return {
            timeStamp: he(),
            pointers: t,
            center: I(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }
    function I(e) {
        var t = e.length;
        if (1 === t)
            return {
                x: de(e[0].clientX),
                y: de(e[0].clientY)
            };
        for (var i = 0, n = 0, a = 0; t > a; )
            i += e[a].clientX,
            n += e[a].clientY,
            a++;
        return {
            x: de(i / t),
            y: de(n / t)
        }
    }
    function D(e, t, i) {
        return {
            x: t / e || 0,
            y: i / e || 0
        }
    }
    function A(e, t) {
        return e === t ? Ee : pe(e) >= pe(t) ? e > 0 ? ze : Me : t > 0 ? Pe : Le
    }
    function O(e, t, i) {
        i || (i = Oe);
        var n = t[i[0]] - e[i[0]]
          , a = t[i[1]] - e[i[1]];
        return Math.sqrt(n * n + a * a)
    }
    function $(e, t, i) {
        i || (i = Oe);
        var n = t[i[0]] - e[i[0]]
          , a = t[i[1]] - e[i[1]];
        return 180 * Math.atan2(a, n) / Math.PI
    }
    function H(e, t) {
        return $(t[1], t[0], $e) - $(e[1], e[0], $e)
    }
    function N(e, t) {
        return O(t[0], t[1], $e) / O(e[0], e[1], $e)
    }
    function q() {
        this.evEl = Ne,
        this.evWin = qe,
        this.allow = !0,
        this.pressed = !1,
        S.apply(this, arguments)
    }
    function j() {
        this.evEl = We,
        this.evWin = Be,
        S.apply(this, arguments),
        this.store = this.manager.session.pointerEvents = []
    }
    function R() {
        this.evTarget = Xe,
        this.evWin = _e,
        this.started = !1,
        S.apply(this, arguments)
    }
    function W(e, t) {
        var i = w(e.touches)
          , n = w(e.changedTouches);
        return t & (Se | ke) && (i = b(i.concat(n), "identifier", !0)),
        [i, n]
    }
    function B() {
        this.evTarget = Ve,
        this.targetIds = {},
        S.apply(this, arguments)
    }
    function F(e, t) {
        var i = w(e.touches)
          , n = this.targetIds;
        if (t & (Te | Ce) && 1 === i.length)
            return n[i[0].identifier] = !0,
            [i, i];
        var a, r, o = w(e.changedTouches), s = [], l = this.target;
        if (r = i.filter(function(e) {
            return m(e.target, l)
        }),
        t === Te)
            for (a = 0; a < r.length; )
                n[r[a].identifier] = !0,
                a++;
        for (a = 0; a < o.length; )
            n[o[a].identifier] && s.push(o[a]),
            t & (Se | ke) && delete n[o[a].identifier],
            a++;
        return s.length ? [b(r.concat(s), "identifier", !0), s] : void 0
    }
    function X() {
        S.apply(this, arguments);
        var e = u(this.handler, this);
        this.touch = new B(this.manager,e),
        this.mouse = new q(this.manager,e)
    }
    function _(e, t) {
        this.manager = e,
        this.set(t)
    }
    function Y(e) {
        if (g(e, Je))
            return Je;
        var t = g(e, et)
          , i = g(e, tt);
        return t && i ? et + " " + tt : t || i ? t ? et : tt : g(e, Ke) ? Ke : Ze
    }
    function V(e) {
        this.id = T(),
        this.manager = null,
        this.options = l(e || {}, this.defaults),
        this.options.enable = p(this.options.enable, !0),
        this.state = it,
        this.simultaneous = {},
        this.requireFail = []
    }
    function G(e) {
        return e & st ? "cancel" : e & rt ? "end" : e & at ? "move" : e & nt ? "start" : ""
    }
    function Q(e) {
        return e == Le ? "down" : e == Pe ? "up" : e == ze ? "left" : e == Me ? "right" : ""
    }
    function U(e, t) {
        var i = t.manager;
        return i ? i.get(e) : e
    }
    function Z() {
        V.apply(this, arguments)
    }
    function K() {
        Z.apply(this, arguments),
        this.pX = null,
        this.pY = null
    }
    function J() {
        Z.apply(this, arguments)
    }
    function ee() {
        V.apply(this, arguments),
        this._timer = null,
        this._input = null
    }
    function te() {
        Z.apply(this, arguments)
    }
    function ie() {
        Z.apply(this, arguments)
    }
    function ne() {
        V.apply(this, arguments),
        this.pTime = !1,
        this.pCenter = !1,
        this._timer = null,
        this._input = null,
        this.count = 0
    }
    function ae(e, t) {
        return t = t || {},
        t.recognizers = p(t.recognizers, ae.defaults.preset),
        new re(e,t)
    }
    function re(e, t) {
        t = t || {},
        this.options = l(t, ae.defaults),
        this.options.inputTarget = this.options.inputTarget || e,
        this.handlers = {},
        this.session = {},
        this.recognizers = [],
        this.element = e,
        this.input = k(this),
        this.touchAction = new _(this,this.options.touchAction),
        oe(this, !0),
        o(t.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]),
            e[3] && t.requireFailure(e[3])
        }, this)
    }
    function oe(e, t) {
        var i = e.element;
        o(e.options.cssProps, function(e, n) {
            i.style[x(i.style, n)] = t ? e : ""
        })
    }
    function se(e, i) {
        var n = t.createEvent("Event");
        n.initEvent(e, !0, !0),
        n.gesture = i,
        i.target.dispatchEvent(n)
    }
    var le = ["", "webkit", "moz", "MS", "ms", "o"]
      , ce = t.createElement("div")
      , ue = "function"
      , de = Math.round
      , pe = Math.abs
      , he = Date.now
      , fe = 1
      , me = /mobile|tablet|ip(ad|hone|od)|android/i
      , ge = "ontouchstart"in e
      , ve = x(e, "PointerEvent") !== n
      , ye = ge && me.test(navigator.userAgent)
      , we = "touch"
      , be = "mouse"
      , xe = 25
      , Te = 1
      , Ce = 2
      , Se = 4
      , ke = 8
      , Ee = 1
      , ze = 2
      , Me = 4
      , Pe = 8
      , Le = 16
      , Ie = ze | Me
      , De = Pe | Le
      , Ae = Ie | De
      , Oe = ["x", "y"]
      , $e = ["clientX", "clientY"];
    S.prototype = {
        handler: function() {},
        init: function() {
            this.evEl && h(this.element, this.evEl, this.domHandler),
            this.evTarget && h(this.target, this.evTarget, this.domHandler),
            this.evWin && h(C(this.element), this.evWin, this.domHandler)
        },
        destroy: function() {
            this.evEl && f(this.element, this.evEl, this.domHandler),
            this.evTarget && f(this.target, this.evTarget, this.domHandler),
            this.evWin && f(C(this.element), this.evWin, this.domHandler)
        }
    };
    var He = {
        mousedown: Te,
        mousemove: Ce,
        mouseup: Se
    }
      , Ne = "mousedown"
      , qe = "mousemove mouseup";
    c(q, S, {
        handler: function(e) {
            var t = He[e.type];
            t & Te && 0 === e.button && (this.pressed = !0),
            t & Ce && 1 !== e.which && (t = Se),
            this.pressed && this.allow && (t & Se && (this.pressed = !1),
            this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: be,
                srcEvent: e
            }))
        }
    });
    var je = {
        pointerdown: Te,
        pointermove: Ce,
        pointerup: Se,
        pointercancel: ke,
        pointerout: ke
    }
      , Re = {
        2: we,
        3: "pen",
        4: be,
        5: "kinect"
    }
      , We = "pointerdown"
      , Be = "pointermove pointerup pointercancel";
    e.MSPointerEvent && (We = "MSPointerDown",
    Be = "MSPointerMove MSPointerUp MSPointerCancel"),
    c(j, S, {
        handler: function(e) {
            var t = this.store
              , i = !1
              , n = e.type.toLowerCase().replace("ms", "")
              , a = je[n]
              , r = Re[e.pointerType] || e.pointerType
              , o = r == we
              , s = y(t, e.pointerId, "pointerId");
            a & Te && (0 === e.button || o) ? 0 > s && (t.push(e),
            s = t.length - 1) : a & (Se | ke) && (i = !0),
            0 > s || (t[s] = e,
            this.callback(this.manager, a, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }),
            i && t.splice(s, 1))
        }
    });
    var Fe = {
        touchstart: Te,
        touchmove: Ce,
        touchend: Se,
        touchcancel: ke
    }
      , Xe = "touchstart"
      , _e = "touchstart touchmove touchend touchcancel";
    c(R, S, {
        handler: function(e) {
            var t = Fe[e.type];
            if (t === Te && (this.started = !0),
            this.started) {
                var i = W.call(this, e, t);
                t & (Se | ke) && 0 == i[0].length - i[1].length && (this.started = !1),
                this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: we,
                    srcEvent: e
                })
            }
        }
    });
    var Ye = {
        touchstart: Te,
        touchmove: Ce,
        touchend: Se,
        touchcancel: ke
    }
      , Ve = "touchstart touchmove touchend touchcancel";
    c(B, S, {
        handler: function(e) {
            var t = Ye[e.type]
              , i = F.call(this, e, t);
            i && this.callback(this.manager, t, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: we,
                srcEvent: e
            })
        }
    }),
    c(X, S, {
        handler: function(e, t, i) {
            var n = i.pointerType == we
              , a = i.pointerType == be;
            if (n)
                this.mouse.allow = !1;
            else if (a && !this.mouse.allow)
                return;
            t & (Se | ke) && (this.mouse.allow = !0),
            this.callback(e, t, i)
        },
        destroy: function() {
            this.touch.destroy(),
            this.mouse.destroy()
        }
    });
    var Ge = x(ce.style, "touchAction")
      , Qe = Ge !== n
      , Ue = "compute"
      , Ze = "auto"
      , Ke = "manipulation"
      , Je = "none"
      , et = "pan-x"
      , tt = "pan-y";
    _.prototype = {
        set: function(e) {
            e == Ue && (e = this.compute()),
            Qe && (this.manager.element.style[Ge] = e),
            this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var e = [];
            return o(this.manager.recognizers, function(t) {
                d(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
            }),
            Y(e.join(" "))
        },
        preventDefaults: function(e) {
            if (!Qe) {
                var t = e.srcEvent
                  , i = e.offsetDirection;
                if (this.manager.session.prevented)
                    return void t.preventDefault();
                var n = this.actions
                  , a = g(n, Je)
                  , r = g(n, tt)
                  , o = g(n, et);
                return a || r && i & Ie || o && i & De ? this.preventSrc(t) : void 0
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0,
            e.preventDefault()
        }
    };
    var it = 1
      , nt = 2
      , at = 4
      , rt = 8
      , ot = rt
      , st = 16;
    V.prototype = {
        defaults: {},
        set: function(e) {
            return s(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
        },
        recognizeWith: function(e) {
            if (r(e, "recognizeWith", this))
                return this;
            var t = this.simultaneous;
            return e = U(e, this),
            t[e.id] || (t[e.id] = e,
            e.recognizeWith(this)),
            this
        },
        dropRecognizeWith: function(e) {
            return r(e, "dropRecognizeWith", this) ? this : (e = U(e, this),
            delete this.simultaneous[e.id],
            this)
        },
        requireFailure: function(e) {
            if (r(e, "requireFailure", this))
                return this;
            var t = this.requireFail;
            return e = U(e, this),
            -1 === y(t, e) && (t.push(e),
            e.requireFailure(this)),
            this
        },
        dropRequireFailure: function(e) {
            if (r(e, "dropRequireFailure", this))
                return this;
            e = U(e, this);
            var t = y(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1),
            this
        },
        hasRequireFailures: function() {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(e) {
            function t(t) {
                i.manager.emit(i.options.event + (t ? G(n) : ""), e)
            }
            var i = this
              , n = this.state;
            rt > n && t(!0),
            t(),
            n >= rt && t(!0)
        },
        tryEmit: function(e) {
            return this.canEmit() ? this.emit(e) : void (this.state = 32)
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; ) {
                if (!(this.requireFail[e].state & (32 | it)))
                    return !1;
                e++
            }
            return !0
        },
        recognize: function(e) {
            var t = s({}, e);
            return d(this.options.enable, [this, t]) ? (this.state & (ot | st | 32) && (this.state = it),
            this.state = this.process(t),
            void (this.state & (nt | at | rt | st) && this.tryEmit(t))) : (this.reset(),
            void (this.state = 32))
        },
        process: function() {},
        getTouchAction: function() {},
        reset: function() {}
    },
    c(Z, V, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state
              , i = e.eventType
              , n = t & (nt | at)
              , a = this.attrTest(e);
            return n && (i & ke || !a) ? t | st : n || a ? i & Se ? t | rt : t & nt ? t | at : nt : 32
        }
    }),
    c(K, Z, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Ae
        },
        getTouchAction: function() {
            var e = this.options.direction
              , t = [];
            return e & Ie && t.push(tt),
            e & De && t.push(et),
            t
        },
        directionTest: function(e) {
            var t = this.options
              , i = !0
              , n = e.distance
              , a = e.direction
              , r = e.deltaX
              , o = e.deltaY;
            return a & t.direction || (t.direction & Ie ? (a = 0 === r ? Ee : 0 > r ? ze : Me,
            i = r != this.pX,
            n = Math.abs(e.deltaX)) : (a = 0 === o ? Ee : 0 > o ? Pe : Le,
            i = o != this.pY,
            n = Math.abs(e.deltaY))),
            e.direction = a,
            i && n > t.threshold && a & t.direction
        },
        attrTest: function(e) {
            return Z.prototype.attrTest.call(this, e) && (this.state & nt || !(this.state & nt) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX,
            this.pY = e.deltaY;
            var t = Q(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this._super.emit.call(this, e)
        }
    }),
    c(J, Z, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Je]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & nt)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e),
            1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }),
    c(ee, V, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return [Ze]
        },
        process: function(e) {
            var t = this.options
              , i = e.pointers.length === t.pointers
              , n = e.distance < t.threshold
              , r = e.deltaTime > t.time;
            if (this._input = e,
            !n || !i || e.eventType & (Se | ke) && !r)
                this.reset();
            else if (e.eventType & Te)
                this.reset(),
                this._timer = a(function() {
                    this.state = ot,
                    this.tryEmit()
                }, t.time, this);
            else if (e.eventType & Se)
                return ot;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === ot && (e && e.eventType & Se ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = he(),
            this.manager.emit(this.options.event, this._input)))
        }
    }),
    c(te, Z, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [Je]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & nt)
        }
    }),
    c(ie, Z, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: Ie | De,
            pointers: 1
        },
        getTouchAction: function() {
            return K.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, i = this.options.direction;
            return i & (Ie | De) ? t = e.velocity : i & Ie ? t = e.velocityX : i & De && (t = e.velocityY),
            this._super.attrTest.call(this, e) && i & e.direction && e.distance > this.options.threshold && pe(t) > this.options.velocity && e.eventType & Se
        },
        emit: function(e) {
            var t = Q(e.direction);
            t && this.manager.emit(this.options.event + t, e),
            this.manager.emit(this.options.event, e)
        }
    }),
    c(ne, V, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [Ke]
        },
        process: function(e) {
            var t = this.options
              , i = e.pointers.length === t.pointers
              , n = e.distance < t.threshold
              , r = e.deltaTime < t.time;
            if (this.reset(),
            e.eventType & Te && 0 === this.count)
                return this.failTimeout();
            if (n && r && i) {
                if (e.eventType != Se)
                    return this.failTimeout();
                var o = !this.pTime || e.timeStamp - this.pTime < t.interval
                  , s = !this.pCenter || O(this.pCenter, e.center) < t.posThreshold;
                this.pTime = e.timeStamp,
                this.pCenter = e.center,
                s && o ? this.count += 1 : this.count = 1,
                this._input = e;
                if (0 === this.count % t.taps)
                    return this.hasRequireFailures() ? (this._timer = a(function() {
                        this.state = ot,
                        this.tryEmit()
                    }, t.interval, this),
                    nt) : ot
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = a(function() {
                this.state = 32
            }, this.options.interval, this),
            32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == ot && (this._input.tapCount = this.count,
            this.manager.emit(this.options.event, this._input))
        }
    }),
    ae.VERSION = "2.0.4",
    ae.defaults = {
        domEvents: !1,
        touchAction: Ue,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [[te, {
            enable: !1
        }], [J, {
            enable: !1
        }, ["rotate"]], [ie, {
            direction: Ie
        }], [K, {
            direction: Ie
        }, ["swipe"]], [ne], [ne, {
            event: "doubletap",
            taps: 2
        }, ["tap"]], [ee]],
        cssProps: {
            userSelect: "default",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    re.prototype = {
        set: function(e) {
            return s(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget && (this.input.destroy(),
            this.input.target = e.inputTarget,
            this.input.init()),
            this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                this.touchAction.preventDefaults(e);
                var i, n = this.recognizers, a = t.curRecognizer;
                (!a || a && a.state & ot) && (a = t.curRecognizer = null);
                for (var r = 0; r < n.length; )
                    i = n[r],
                    2 === t.stopped || a && i != a && !i.canRecognizeWith(a) ? i.reset() : i.recognize(e),
                    !a && i.state & (nt | at | rt) && (a = t.curRecognizer = i),
                    r++
            }
        },
        get: function(e) {
            if (e instanceof V)
                return e;
            for (var t = this.recognizers, i = 0; i < t.length; i++)
                if (t[i].options.event == e)
                    return t[i];
            return null
        },
        add: function(e) {
            if (r(e, "add", this))
                return this;
            var t = this.get(e.options.event);
            return t && this.remove(t),
            this.recognizers.push(e),
            e.manager = this,
            this.touchAction.update(),
            e
        },
        remove: function(e) {
            if (r(e, "remove", this))
                return this;
            var t = this.recognizers;
            return e = this.get(e),
            t.splice(y(t, e), 1),
            this.touchAction.update(),
            this
        },
        on: function(e, t) {
            var i = this.handlers;
            return o(v(e), function(e) {
                i[e] = i[e] || [],
                i[e].push(t)
            }),
            this
        },
        off: function(e, t) {
            var i = this.handlers;
            return o(v(e), function(e) {
                t ? i[e].splice(y(i[e], t), 1) : delete i[e]
            }),
            this
        },
        emit: function(e, t) {
            this.options.domEvents && se(e, t);
            var i = this.handlers[e] && this.handlers[e].slice();
            if (i && i.length) {
                t.type = e,
                t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                }
                ;
                for (var n = 0; n < i.length; )
                    i[n](t),
                    n++
            }
        },
        destroy: function() {
            this.element && oe(this, !1),
            this.handlers = {},
            this.session = {},
            this.input.destroy(),
            this.element = null
        }
    },
    s(ae, {
        INPUT_START: Te,
        INPUT_MOVE: Ce,
        INPUT_END: Se,
        INPUT_CANCEL: ke,
        STATE_POSSIBLE: it,
        STATE_BEGAN: nt,
        STATE_CHANGED: at,
        STATE_ENDED: rt,
        STATE_RECOGNIZED: ot,
        STATE_CANCELLED: st,
        STATE_FAILED: 32,
        DIRECTION_NONE: Ee,
        DIRECTION_LEFT: ze,
        DIRECTION_RIGHT: Me,
        DIRECTION_UP: Pe,
        DIRECTION_DOWN: Le,
        DIRECTION_HORIZONTAL: Ie,
        DIRECTION_VERTICAL: De,
        DIRECTION_ALL: Ae,
        Manager: re,
        Input: S,
        TouchAction: _,
        TouchInput: B,
        MouseInput: q,
        PointerEventInput: j,
        TouchMouseInput: X,
        SingleTouchInput: R,
        Recognizer: V,
        AttrRecognizer: Z,
        Tap: ne,
        Pan: K,
        Swipe: ie,
        Pinch: J,
        Rotate: te,
        Press: ee,
        on: h,
        off: f,
        each: o,
        merge: l,
        extend: s,
        inherit: c,
        bindFn: u,
        prefixed: x
    }),
    typeof define == ue && define.amd ? define(function() {
        return ae
    }) : "undefined" != typeof module && module.exports ? module.exports = ae : e.Hammer = ae
}(window, document),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(e, t) {
    function i(i, n) {
        var a = e(i);
        a.data("hammer") || a.data("hammer", new t(a[0],n))
    }
    e.fn.hammer = function(e) {
        return this.each(function() {
            i(this, e)
        })
    }
    ,
    t.Manager.prototype.emit = function(t) {
        return function(i, n) {
            t.call(this, i, n),
            e(this.element).trigger({
                type: i,
                gesture: n
            })
        }
    }(t.Manager.prototype.emit)
}),
function(e) {
    e.Package ? Materialize = {} : e.Materialize = {}
}(window),
function(e) {
    for (var t = 0, i = ["webkit", "moz"], n = e.requestAnimationFrame, a = e.cancelAnimationFrame, r = i.length; --r >= 0 && !n; )
        n = e[i[r] + "RequestAnimationFrame"],
        a = e[i[r] + "CancelRequestAnimationFrame"];
    n && a || (n = function(e) {
        var i = +Date.now()
          , n = Math.max(t + 16, i);
        return setTimeout(function() {
            e(t = n)
        }, n - i)
    }
    ,
    a = clearTimeout),
    e.requestAnimationFrame = n,
    e.cancelAnimationFrame = a
}(window),
Materialize.objectSelectorString = function(e) {
    return ((e.prop("tagName") || "") + (e.attr("id") || "") + (e.attr("class") || "")).replace(/\s/g, "")
}
,
Materialize.guid = function() {
    function e() {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }
    return function() {
        return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
    }
}(),
Materialize.escapeHash = function(e) {
    return e.replace(/(:|\.|\[|\]|,|=)/g, "\\$1")
}
,
Materialize.elementOrParentIsFixed = function(e) {
    var t = $(e)
      , i = t.add(t.parents())
      , n = !1;
    return i.each(function() {
        if ("fixed" === $(this).css("position"))
            return n = !0,
            !1
    }),
    n
}
;
var getTime = Date.now || function() {
    return (new Date).getTime()
}
;
Materialize.throttle = function(e, t, i) {
    var n, a, r, o = null, s = 0;
    i || (i = {});
    var l = function() {
        s = !1 === i.leading ? 0 : getTime(),
        o = null,
        r = e.apply(n, a),
        n = a = null
    };
    return function() {
        var c = getTime();
        s || !1 !== i.leading || (s = c);
        var u = t - (c - s);
        return n = this,
        a = arguments,
        u <= 0 ? (clearTimeout(o),
        o = null,
        s = c,
        r = e.apply(n, a),
        n = a = null) : o || !1 === i.trailing || (o = setTimeout(l, u)),
        r
    }
}
;
var Vel;
Vel = jQuery ? jQuery.Velocity : $ ? $.Velocity : Velocity,
function(e) {
    e.fn.collapsible = function(t, i) {
        var n = {
            accordion: void 0,
            onOpen: void 0,
            onClose: void 0
        }
          , a = t;
        return t = e.extend(n, t),
        this.each(function() {
            function n(t) {
                p = d.find("> li > .collapsible-header"),
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }),
                p.not(t).removeClass("active").parent().removeClass("active"),
                p.not(t).parent().children(".collapsible-body").stop(!0, !1).each(function() {
                    e(this).is(":visible") && e(this).slideUp({
                        duration: 350,
                        easing: "easeOutQuart",
                        queue: !1,
                        complete: function() {
                            e(this).css("height", ""),
                            s(e(this).siblings(".collapsible-header"))
                        }
                    })
                })
            }
            function r(t) {
                t.hasClass("active") ? t.parent().addClass("active") : t.parent().removeClass("active"),
                t.parent().hasClass("active") ? t.siblings(".collapsible-body").stop(!0, !1).slideDown({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                }) : t.siblings(".collapsible-body").stop(!0, !1).slideUp({
                    duration: 350,
                    easing: "easeOutQuart",
                    queue: !1,
                    complete: function() {
                        e(this).css("height", "")
                    }
                })
            }
            function o(e, i) {
                i || e.toggleClass("active"),
                t.accordion || "accordion" === h || void 0 === h ? n(e) : r(e),
                s(e)
            }
            function s(e) {
                e.hasClass("active") ? "function" == typeof t.onOpen && t.onOpen.call(this, e.parent()) : "function" == typeof t.onClose && t.onClose.call(this, e.parent())
            }
            function l(e) {
                return c(e).length > 0
            }
            function c(e) {
                return e.closest("li > .collapsible-header")
            }
            function u() {
                d.off("click.collapse", "> li > .collapsible-header")
            }
            var d = e(this)
              , p = e(this).find("> li > .collapsible-header")
              , h = d.data("collapsible");
            if ("destroy" === a)
                return void u();
            if (i >= 0 && i < p.length) {
                var f = p.eq(i);
                return void (f.length && ("open" === a || "close" === a && f.hasClass("active")) && o(f))
            }
            u(),
            d.on("click.collapse", "> li > .collapsible-header", function(t) {
                var i = e(t.target);
                l(i) && (i = c(i)),
                o(i)
            }),
            t.accordion || "accordion" === h || void 0 === h ? o(p.filter(".active").first(), !0) : p.filter(".active").each(function() {
                o(e(this), !0)
            })
        })
    }
    ,
    e(document).ready(function() {
        e(".collapsible").collapsible()
    })
}(jQuery),
function(e) {
    e.fn.scrollTo = function(t) {
        return e(this).scrollTop(e(this).scrollTop() - e(this).offset().top + e(t).offset().top),
        this
    }
    ,
    e.fn.dropdown = function(t) {
        var i = {
            inDuration: 300,
            outDuration: 225,
            constrainWidth: !0,
            hover: !1,
            gutter: 0,
            belowOrigin: !1,
            alignment: "left",
            stopPropagation: !1
        };
        return "open" === t ? (this.each(function() {
            e(this).trigger("open")
        }),
        !1) : "close" === t ? (this.each(function() {
            e(this).trigger("close")
        }),
        !1) : void this.each(function() {
            function n() {
                void 0 !== o.data("induration") && (s.inDuration = o.data("induration")),
                void 0 !== o.data("outduration") && (s.outDuration = o.data("outduration")),
                void 0 !== o.data("constrainwidth") && (s.constrainWidth = o.data("constrainwidth")),
                void 0 !== o.data("hover") && (s.hover = o.data("hover")),
                void 0 !== o.data("gutter") && (s.gutter = o.data("gutter")),
                void 0 !== o.data("beloworigin") && (s.belowOrigin = o.data("beloworigin")),
                void 0 !== o.data("alignment") && (s.alignment = o.data("alignment")),
                void 0 !== o.data("stoppropagation") && (s.stopPropagation = o.data("stoppropagation"))
            }
            function a(t) {
                "focus" === t && (l = !0),
                n(),
                c.addClass("active"),
                o.addClass("active"),
                !0 === s.constrainWidth ? c.css("width", o.outerWidth()) : c.css("white-space", "nowrap");
                var i = window.innerHeight
                  , a = o.innerHeight()
                  , u = o.offset().left
                  , d = o.offset().top - e(window).scrollTop()
                  , p = s.alignment
                  , h = 0
                  , f = 0
                  , m = 0;
                !0 === s.belowOrigin && (m = a);
                var g = 0
                  , v = 0
                  , y = o.parent();
                if (y.is("body") || (y[0].scrollHeight > y[0].clientHeight && (g = y[0].scrollTop),
                y[0].scrollWidth > y[0].clientWidth && (v = y[0].scrollLeft)),
                u + c.innerWidth() > e(window).width() ? p = "right" : u - c.innerWidth() + o.innerWidth() < 0 && (p = "left"),
                d + c.innerHeight() > i)
                    if (d + a - c.innerHeight() < 0) {
                        var w = i - d - m;
                        c.css("max-height", w)
                    } else
                        m || (m += a),
                        m -= c.innerHeight();
                if ("left" === p)
                    h = s.gutter,
                    f = o.position().left + h;
                else if ("right" === p) {
                    var b = o.position().left + o.outerWidth() - c.outerWidth();
                    h = -s.gutter,
                    f = b + h
                }
                c.css({
                    position: "absolute",
                    top: o.position().top + m + g,
                    left: f + v
                }),
                c.stop(!0, !0).css("opacity", 0).slideDown({
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutCubic",
                    complete: function() {
                        e(this).css("height", "")
                    }
                }).animate({
                    opacity: 1
                }, {
                    queue: !1,
                    duration: s.inDuration,
                    easing: "easeOutSine"
                }),
                setTimeout(function() {
                    e(document).bind("click." + c.attr("id"), function(t) {
                        r(),
                        e(document).unbind("click." + c.attr("id"))
                    })
                }, 0)
            }
            function r() {
                l = !1,
                c.fadeOut(s.outDuration),
                c.removeClass("active"),
                o.removeClass("active"),
                e(document).unbind("click." + c.attr("id")),
                setTimeout(function() {
                    c.css("max-height", "")
                }, s.outDuration)
            }
            var o = e(this)
              , s = e.extend({}, i, t)
              , l = !1
              , c = e("#" + o.attr("data-activates"));
            if (n(),
            o.after(c),
            s.hover) {
                var u = !1;
                o.unbind("click." + o.attr("id")),
                o.on("mouseenter", function(e) {
                    !1 === u && (a(),
                    u = !0)
                }),
                o.on("mouseleave", function(t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-content").is(c) || (c.stop(!0, !0),
                    r(),
                    u = !1)
                }),
                c.on("mouseleave", function(t) {
                    var i = t.toElement || t.relatedTarget;
                    e(i).closest(".dropdown-button").is(o) || (c.stop(!0, !0),
                    r(),
                    u = !1)
                })
            } else
                o.unbind("click." + o.attr("id")),
                o.bind("click." + o.attr("id"), function(t) {
                    l || (o[0] != t.currentTarget || o.hasClass("active") || 0 !== e(t.target).closest(".dropdown-content").length ? o.hasClass("active") && (r(),
                    e(document).unbind("click." + c.attr("id"))) : (t.preventDefault(),
                    s.stopPropagation && t.stopPropagation(),
                    a("click")))
                });
            o.on("open", function(e, t) {
                a(t)
            }),
            o.on("close", r)
        })
    }
    ,
    e(document).ready(function() {
        e(".dropdown-button").dropdown()
    })
}(jQuery),
function(e) {
    var t = 0
      , i = 0
      , n = function() {
        return "materialize-modal-overlay-" + ++i
    }
      , a = {
        init: function(i) {
            var a = {
                opacity: .5,
                inDuration: 350,
                outDuration: 250,
                ready: void 0,
                complete: void 0,
                dismissible: !0,
                startingTop: "4%",
                endingTop: "10%"
            };
            return i = e.extend(a, i),
            this.each(function() {
                var a = e(this)
                  , r = e(this).attr("id") || "#" + e(this).data("target")
                  , o = function() {
                    var n = a.data("overlay-id")
                      , r = e("#" + n);
                    a.removeClass("open"),
                    e("body").css({
                        overflow: "",
                        width: ""
                    }),
                    a.find(".modal-close").off("click.close"),
                    e(document).off("keyup.modal" + n),
                    r.velocity({
                        opacity: 0
                    }, {
                        duration: i.outDuration,
                        queue: !1,
                        ease: "easeOutQuart"
                    });
                    var o = {
                        duration: i.outDuration,
                        queue: !1,
                        ease: "easeOutCubic",
                        complete: function() {
                            e(this).css({
                                display: "none"
                            }),
                            "function" == typeof i.complete && i.complete.call(this, a),
                            r.remove(),
                            t--
                        }
                    };
                    a.hasClass("bottom-sheet") ? a.velocity({
                        bottom: "-100%",
                        opacity: 0
                    }, o) : a.velocity({
                        top: i.startingTop,
                        opacity: 0,
                        scaleX: .7
                    }, o)
                }
                  , s = function(r) {
                    var s = e("body")
                      , l = s.innerWidth();
                    if (s.css("overflow", "hidden"),
                    s.width(l),
                    !a.hasClass("open")) {
                        var c = n()
                          , u = e('<div class="modal-overlay"></div>');
                        lStack = ++t,
                        u.attr("id", c).css("z-index", 1e3 + 2 * lStack),
                        a.data("overlay-id", c).css("z-index", 1e3 + 2 * lStack + 1),
                        a.addClass("open"),
                        e("body").append(u),
                        i.dismissible && (u.click(function() {
                            o()
                        }),
                        e(document).on("keyup.modal" + c, function(e) {
                            27 === e.keyCode && o()
                        })),
                        a.find(".modal-close").on("click.close", function(e) {
                            o()
                        }),
                        u.css({
                            display: "block",
                            opacity: 0
                        }),
                        a.css({
                            display: "block",
                            opacity: 0
                        }),
                        u.velocity({
                            opacity: i.opacity
                        }, {
                            duration: i.inDuration,
                            queue: !1,
                            ease: "easeOutCubic"
                        }),
                        a.data("associated-overlay", u[0]);
                        var d = {
                            duration: i.inDuration,
                            queue: !1,
                            ease: "easeOutCubic",
                            complete: function() {
                                "function" == typeof i.ready && i.ready.call(this, a, r)
                            }
                        };
                        a.hasClass("bottom-sheet") ? a.velocity({
                            bottom: "0",
                            opacity: 1
                        }, d) : (e.Velocity.hook(a, "scaleX", .7),
                        a.css({
                            top: i.startingTop
                        }),
                        a.velocity({
                            top: i.endingTop,
                            opacity: 1,
                            scaleX: "1"
                        }, d))
                    }
                };
                e(document).off("click.modalTrigger", 'a[href="#' + r + '"], [data-target="' + r + '"]'),
                e(this).off("openModal"),
                e(this).off("closeModal"),
                e(document).on("click.modalTrigger", 'a[href="#' + r + '"], [data-target="' + r + '"]', function(t) {
                    i.startingTop = (e(this).offset().top - e(window).scrollTop()) / 1.15,
                    s(e(this)),
                    t.preventDefault()
                }),
                e(this).on("openModal", function() {
                    e(this).attr("href") || e(this).data("target");
                    s()
                }),
                e(this).on("closeModal", function() {
                    o()
                })
            })
        },
        open: function() {
            e(this).trigger("openModal")
        },
        close: function() {
            e(this).trigger("closeModal")
        }
    };
    e.fn.modal = function(t) {
        return a[t] ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.modal") : a.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e.fn.materialbox = function() {
        return this.each(function() {
            function t() {
                r = !1;
                var t = s.parent(".material-placeholder")
                  , n = (window.innerWidth,
                window.innerHeight,
                s.data("width"))
                  , l = s.data("height");
                s.velocity("stop", !0),
                e("#materialbox-overlay").velocity("stop", !0),
                e(".materialbox-caption").velocity("stop", !0),
                e("#materialbox-overlay").velocity({
                    opacity: 0
                }, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        a = !1,
                        e(this).remove()
                    }
                }),
                s.velocity({
                    width: n,
                    height: l,
                    left: 0,
                    top: 0
                }, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        t.css({
                            height: "",
                            width: "",
                            position: "",
                            top: "",
                            left: ""
                        }),
                        s.removeAttr("style"),
                        s.attr("style", c),
                        s.removeClass("active"),
                        r = !0,
                        i && i.css("overflow", "")
                    }
                }),
                e(".materialbox-caption").velocity({
                    opacity: 0
                }, {
                    duration: o,
                    queue: !1,
                    easing: "easeOutQuad",
                    complete: function() {
                        e(this).remove()
                    }
                })
            }
            if (!e(this).hasClass("initialized")) {
                e(this).addClass("initialized");
                var i, n, a = !1, r = !0, o = 200, s = e(this), l = e("<div></div>").addClass("material-placeholder"), c = s.attr("style");
                s.wrap(l),
                s.on("click", function() {
                    var o = s.parent(".material-placeholder")
                      , l = window.innerWidth
                      , c = window.innerHeight
                      , u = s.width()
                      , d = s.height();
                    if (!1 === r)
                        return t(),
                        !1;
                    if (a && !0 === r)
                        return t(),
                        !1;
                    r = !1,
                    s.addClass("active"),
                    a = !0,
                    o.css({
                        width: o[0].getBoundingClientRect().width,
                        height: o[0].getBoundingClientRect().height,
                        position: "relative",
                        top: 0,
                        left: 0
                    }),
                    i = void 0,
                    n = o[0].parentNode;
                    for (; null !== n && !e(n).is(document); ) {
                        var p = e(n);
                        "visible" !== p.css("overflow") && (p.css("overflow", "visible"),
                        i = void 0 === i ? p : i.add(p)),
                        n = n.parentNode
                    }
                    s.css({
                        position: "absolute",
                        "z-index": 1e3,
                        "will-change": "left, top, width, height"
                    }).data("width", u).data("height", d);
                    var h = e('<div id="materialbox-overlay"></div>').css({
                        opacity: 0
                    }).click(function() {
                        !0 === r && t()
                    });
                    s.before(h);
                    var f = h[0].getBoundingClientRect();
                    if (h.css({
                        width: l,
                        height: c,
                        left: -1 * f.left,
                        top: -1 * f.top
                    }),
                    h.velocity({
                        opacity: 1
                    }, {
                        duration: 275,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    "" !== s.data("caption")) {
                        var m = e('<div class="materialbox-caption"></div>');
                        m.text(s.data("caption")),
                        e("body").append(m),
                        m.css({
                            display: "inline"
                        }),
                        m.velocity({
                            opacity: 1
                        }, {
                            duration: 275,
                            queue: !1,
                            easing: "easeOutQuad"
                        })
                    }
                    var g = 0
                      , v = u / l
                      , y = d / c
                      , w = 0
                      , b = 0;
                    v > y ? (g = d / u,
                    w = .9 * l,
                    b = .9 * l * g) : (g = u / d,
                    w = .9 * c * g,
                    b = .9 * c),
                    s.hasClass("responsive-img") ? s.velocity({
                        "max-width": w,
                        width: u
                    }, {
                        duration: 0,
                        queue: !1,
                        complete: function() {
                            s.css({
                                left: 0,
                                top: 0
                            }).velocity({
                                height: b,
                                width: w,
                                left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - w / 2,
                                top: e(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - b / 2
                            }, {
                                duration: 275,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    r = !0
                                }
                            })
                        }
                    }) : s.css("left", 0).css("top", 0).velocity({
                        height: b,
                        width: w,
                        left: e(document).scrollLeft() + l / 2 - s.parent(".material-placeholder").offset().left - w / 2,
                        top: e(document).scrollTop() + c / 2 - s.parent(".material-placeholder").offset().top - b / 2
                    }, {
                        duration: 275,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            r = !0
                        }
                    })
                }),
                e(window).scroll(function() {
                    a && t()
                }),
                e(document).keyup(function(e) {
                    27 === e.keyCode && !0 === r && a && t()
                })
            }
        })
    }
    ,
    e(document).ready(function() {
        e(".materialboxed").materialbox()
    })
}(jQuery),
function(e) {
    e.fn.parallax = function() {
        var t = e(window).width();
        return this.each(function(i) {
            function n(i) {
                var n;
                n = t < 601 ? a.height() > 0 ? a.height() : a.children("img").height() : a.height() > 0 ? a.height() : 500;
                var r = a.children("img").first()
                  , o = r.height()
                  , s = o - n
                  , l = a.offset().top + n
                  , c = a.offset().top
                  , u = e(window).scrollTop()
                  , d = window.innerHeight
                  , p = u + d
                  , h = (p - c) / (n + d)
                  , f = Math.round(s * h);
                i && r.css("display", "block"),
                l > u && c < u + d && r.css("transform", "translate3D(-50%," + f + "px, 0)")
            }
            var a = e(this);
            a.addClass("parallax"),
            a.children("img").one("load", function() {
                n(!0)
            }).each(function() {
                this.complete && e(this).trigger("load")
            }),
            e(window).scroll(function() {
                t = e(window).width(),
                n(!1)
            }),
            e(window).resize(function() {
                t = e(window).width(),
                n(!1)
            })
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var i = {
                onShow: null,
                swipeable: !1,
                responsiveThreshold: 1 / 0
            };
            t = e.extend(i, t);
            var n = Materialize.objectSelectorString(e(this));
            return this.each(function(i) {
                var a, r, o, s, l, c = n + i, u = e(this), d = e(window).width(), p = u.find("li.tab a"), h = u.width(), f = e(), m = Math.max(h, u[0].scrollWidth) / p.length, g = prev_index = 0, v = !1, y = function(e) {
                    return Math.ceil(h - e.position().left - e.outerWidth() - u.scrollLeft())
                }, w = function(e) {
                    return Math.floor(e.position().left + u.scrollLeft())
                }, b = function(e) {
                    g - e >= 0 ? (s.velocity({
                        right: y(a)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    s.velocity({
                        left: w(a)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    })) : (s.velocity({
                        left: w(a)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    s.velocity({
                        right: y(a)
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        delay: 90
                    }))
                };
                t.swipeable && d > t.responsiveThreshold && (t.swipeable = !1),
                a = e(p.filter('[href="' + location.hash + '"]')),
                0 === a.length && (a = e(this).find("li.tab a.active").first()),
                0 === a.length && (a = e(this).find("li.tab a").first()),
                a.addClass("active"),
                g = p.index(a),
                g < 0 && (g = 0),
                void 0 !== a[0] && (r = e(a[0].hash),
                r.addClass("active")),
                u.find(".indicator").length || u.append('<div class="indicator"></div>'),
                s = u.find(".indicator"),
                u.append(s),
                u.is(":visible") && setTimeout(function() {
                    s.css({
                        right: y(a)
                    }),
                    s.css({
                        left: w(a)
                    })
                }, 0),
                e(window).off("resize.tabs-" + c).on("resize.tabs-" + c, function() {
                    h = u.width(),
                    m = Math.max(h, u[0].scrollWidth) / p.length,
                    g < 0 && (g = 0),
                    0 !== m && 0 !== h && (s.css({
                        right: y(a)
                    }),
                    s.css({
                        left: w(a)
                    }))
                }),
                t.swipeable ? (p.each(function() {
                    var t = e(Materialize.escapeHash(this.hash));
                    t.addClass("carousel-item"),
                    f = f.add(t)
                }),
                o = f.wrapAll('<div class="tabs-content carousel"></div>'),
                f.css("display", ""),
                e(".tabs-content.carousel").carousel({
                    fullWidth: !0,
                    noWrap: !0,
                    onCycleTo: function(e) {
                        if (!v) {
                            var t = g;
                            g = o.index(e),
                            a = p.eq(g),
                            b(t)
                        }
                    }
                })) : p.not(a).each(function() {
                    e(Materialize.escapeHash(this.hash)).hide()
                }),
                u.off("click.tabs").on("click.tabs", "a", function(i) {
                    if (e(this).parent().hasClass("disabled"))
                        return void i.preventDefault();
                    if (!e(this).attr("target")) {
                        v = !0,
                        h = u.width(),
                        m = Math.max(h, u[0].scrollWidth) / p.length,
                        a.removeClass("active");
                        var n = r;
                        a = e(this),
                        r = e(Materialize.escapeHash(this.hash)),
                        p = u.find("li.tab a");
                        a.position();
                        a.addClass("active"),
                        prev_index = g,
                        g = p.index(e(this)),
                        g < 0 && (g = 0),
                        t.swipeable ? f.length && f.carousel("set", g) : (void 0 !== r && (r.show(),
                        r.addClass("active"),
                        "function" == typeof t.onShow && t.onShow.call(this, r)),
                        void 0 === n || n.is(r) || (n.hide(),
                        n.removeClass("active"))),
                        l = setTimeout(function() {
                            v = !1
                        }, 300),
                        b(prev_index),
                        i.preventDefault()
                    }
                })
            })
        },
        select_tab: function(e) {
            this.find('a[href="#' + e + '"]').trigger("click")
        }
    };
    e.fn.tabs = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tabs") : t.init.apply(this, arguments)
    }
    ,
    e(document).ready(function() {
        e("ul.tabs").tabs()
    })
}(jQuery),
function(e) {
    e.fn.tooltip = function(i) {
        var n = {
            delay: 350,
            tooltip: "",
            position: "bottom",
            html: !1
        };
        return "remove" === i ? (this.each(function() {
            e("#" + e(this).attr("data-tooltip-id")).remove(),
            e(this).off("mouseenter.tooltip mouseleave.tooltip")
        }),
        !1) : (i = e.extend(n, i),
        this.each(function() {
            var n = Materialize.guid()
              , a = e(this);
            a.attr("data-tooltip-id") && e("#" + a.attr("data-tooltip-id")).remove(),
            a.attr("data-tooltip-id", n);
            var r, o, s, l, c, u, d = function() {
                r = a.attr("data-html") ? "true" === a.attr("data-html") : i.html,
                o = a.attr("data-delay"),
                o = void 0 === o || "" === o ? i.delay : o,
                s = a.attr("data-position"),
                s = void 0 === s || "" === s ? i.position : s,
                l = a.attr("data-tooltip"),
                l = void 0 === l || "" === l ? i.tooltip : l
            };
            d();
            c = function() {
                var t = e('<div class="material-tooltip"></div>');
                return l = r ? e("<span></span>").html(l) : e("<span></span>").text(l),
                t.append(l).appendTo(e("body")).attr("id", n),
                u = e('<div class="backdrop"></div>'),
                u.appendTo(t),
                t
            }(),
            a.off("mouseenter.tooltip mouseleave.tooltip");
            var p, h = !1;
            a.on({
                "mouseenter.tooltip": function(e) {
                    var i = function() {
                        d(),
                        h = !0,
                        c.velocity("stop"),
                        u.velocity("stop"),
                        c.css({
                            visibility: "visible",
                            left: "0px",
                            top: "0px"
                        });
                        var e, i, n, r = a.outerWidth(), o = a.outerHeight(), l = c.outerHeight(), p = c.outerWidth(), f = "0px", m = "0px", g = u[0].offsetWidth, v = u[0].offsetHeight, y = 8, w = 8, b = 0;
                        "top" === s ? (e = a.offset().top - l - 5,
                        i = a.offset().left + r / 2 - p / 2,
                        n = t(i, e, p, l),
                        f = "-10px",
                        u.css({
                            bottom: 0,
                            left: 0,
                            borderRadius: "14px 14px 0 0",
                            transformOrigin: "50% 100%",
                            marginTop: l,
                            marginLeft: p / 2 - g / 2
                        })) : "left" === s ? (e = a.offset().top + o / 2 - l / 2,
                        i = a.offset().left - p - 5,
                        n = t(i, e, p, l),
                        m = "-10px",
                        u.css({
                            top: "-7px",
                            right: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "14px 0 0 14px",
                            transformOrigin: "95% 50%",
                            marginTop: l / 2,
                            marginLeft: p
                        })) : "right" === s ? (e = a.offset().top + o / 2 - l / 2,
                        i = a.offset().left + r + 5,
                        n = t(i, e, p, l),
                        m = "+10px",
                        u.css({
                            top: "-7px",
                            left: 0,
                            width: "14px",
                            height: "14px",
                            borderRadius: "0 14px 14px 0",
                            transformOrigin: "5% 50%",
                            marginTop: l / 2,
                            marginLeft: "0px"
                        })) : (e = a.offset().top + a.outerHeight() + 5,
                        i = a.offset().left + r / 2 - p / 2,
                        n = t(i, e, p, l),
                        f = "+10px",
                        u.css({
                            top: 0,
                            left: 0,
                            marginLeft: p / 2 - g / 2
                        })),
                        c.css({
                            top: n.y,
                            left: n.x
                        }),
                        y = Math.SQRT2 * p / parseInt(g),
                        w = Math.SQRT2 * l / parseInt(v),
                        b = Math.max(y, w),
                        c.velocity({
                            translateY: f,
                            translateX: m
                        }, {
                            duration: 350,
                            queue: !1
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            delay: 50,
                            queue: !1
                        }),
                        u.css({
                            visibility: "visible"
                        }).velocity({
                            opacity: 1
                        }, {
                            duration: 55,
                            delay: 0,
                            queue: !1
                        }).velocity({
                            scaleX: b,
                            scaleY: b
                        }, {
                            duration: 300,
                            delay: 0,
                            queue: !1,
                            easing: "easeInOutQuad"
                        })
                    };
                    p = setTimeout(i, o)
                },
                "mouseleave.tooltip": function() {
                    h = !1,
                    clearTimeout(p),
                    setTimeout(function() {
                        !0 !== h && (c.velocity({
                            opacity: 0,
                            translateY: 0,
                            translateX: 0
                        }, {
                            duration: 225,
                            queue: !1
                        }),
                        u.velocity({
                            opacity: 0,
                            scaleX: 1,
                            scaleY: 1
                        }, {
                            duration: 225,
                            queue: !1,
                            complete: function() {
                                u.css({
                                    visibility: "hidden"
                                }),
                                c.css({
                                    visibility: "hidden"
                                }),
                                h = !1
                            }
                        }))
                    }, 225)
                }
            })
        }))
    }
    ;
    var t = function(t, i, n, a) {
        var r = t
          , o = i;
        return r < 0 ? r = 4 : r + n > window.innerWidth && (r -= r + n - window.innerWidth),
        o < 0 ? o = 4 : o + a > window.innerHeight + e(window).scrollTop && (o -= o + a - window.innerHeight),
        {
            x: r,
            y: o
        }
    };
    e(document).ready(function() {
        e(".tooltipped").tooltip()
    })
}(jQuery),
function(e) {
    "use strict";
    function t(e) {
        return null !== e && e === e.window
    }
    function i(e) {
        return t(e) ? e : 9 === e.nodeType && e.defaultView
    }
    function n(e) {
        var t, n, a = {
            top: 0,
            left: 0
        }, r = e && e.ownerDocument;
        return t = r.documentElement,
        void 0 !== e.getBoundingClientRect && (a = e.getBoundingClientRect()),
        n = i(r),
        {
            top: a.top + n.pageYOffset - t.clientTop,
            left: a.left + n.pageXOffset - t.clientLeft
        }
    }
    function a(e) {
        var t = "";
        for (var i in e)
            e.hasOwnProperty(i) && (t += i + ":" + e[i] + ";");
        return t
    }
    function r(e) {
        if (!1 === u.allowEvent(e))
            return null;
        for (var t = null, i = e.target || e.srcElement; null !== i.parentElement; ) {
            if (!(i instanceof SVGElement || -1 === i.className.indexOf("waves-effect"))) {
                t = i;
                break
            }
            if (i.classList.contains("waves-effect")) {
                t = i;
                break
            }
            i = i.parentElement
        }
        return t
    }
    function o(t) {
        var i = r(t);
        null !== i && (c.show(t, i),
        "ontouchstart"in e && (i.addEventListener("touchend", c.hide, !1),
        i.addEventListener("touchcancel", c.hide, !1)),
        i.addEventListener("mouseup", c.hide, !1),
        i.addEventListener("mouseleave", c.hide, !1))
    }
    var s = s || {}
      , l = document.querySelectorAll.bind(document)
      , c = {
        duration: 750,
        show: function(e, t) {
            if (2 === e.button)
                return !1;
            var i = t || this
              , r = document.createElement("div");
            r.className = "waves-ripple",
            i.appendChild(r);
            var o = n(i)
              , s = e.pageY - o.top
              , l = e.pageX - o.left
              , u = "scale(" + i.clientWidth / 100 * 10 + ")";
            "touches"in e && (s = e.touches[0].pageY - o.top,
            l = e.touches[0].pageX - o.left),
            r.setAttribute("data-hold", Date.now()),
            r.setAttribute("data-scale", u),
            r.setAttribute("data-x", l),
            r.setAttribute("data-y", s);
            var d = {
                top: s + "px",
                left: l + "px"
            };
            r.className = r.className + " waves-notransition",
            r.setAttribute("style", a(d)),
            r.className = r.className.replace("waves-notransition", ""),
            d["-webkit-transform"] = u,
            d["-moz-transform"] = u,
            d["-ms-transform"] = u,
            d["-o-transform"] = u,
            d.transform = u,
            d.opacity = "1",
            d["-webkit-transition-duration"] = c.duration + "ms",
            d["-moz-transition-duration"] = c.duration + "ms",
            d["-o-transition-duration"] = c.duration + "ms",
            d["transition-duration"] = c.duration + "ms",
            d["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            d["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            r.setAttribute("style", a(d))
        },
        hide: function(e) {
            u.touchup(e);
            var t = this
              , i = (t.clientWidth,
            null)
              , n = t.getElementsByClassName("waves-ripple");
            if (!(n.length > 0))
                return !1;
            i = n[n.length - 1];
            var r = i.getAttribute("data-x")
              , o = i.getAttribute("data-y")
              , s = i.getAttribute("data-scale")
              , l = Date.now() - Number(i.getAttribute("data-hold"))
              , d = 350 - l;
            d < 0 && (d = 0),
            setTimeout(function() {
                var e = {
                    top: o + "px",
                    left: r + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c.duration + "ms",
                    "-moz-transition-duration": c.duration + "ms",
                    "-o-transition-duration": c.duration + "ms",
                    "transition-duration": c.duration + "ms",
                    "-webkit-transform": s,
                    "-moz-transform": s,
                    "-ms-transform": s,
                    "-o-transform": s,
                    transform: s
                };
                i.setAttribute("style", a(e)),
                setTimeout(function() {
                    try {
                        t.removeChild(i)
                    } catch (e) {
                        return !1
                    }
                }, c.duration)
            }, d)
        },
        wrapInput: function(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if ("input" === i.tagName.toLowerCase()) {
                    var n = i.parentNode;
                    if ("i" === n.tagName.toLowerCase() && -1 !== n.className.indexOf("waves-effect"))
                        continue;
                    var a = document.createElement("i");
                    a.className = i.className + " waves-input-wrapper";
                    var r = i.getAttribute("style");
                    r || (r = ""),
                    a.setAttribute("style", r),
                    i.className = "waves-button-input",
                    i.removeAttribute("style"),
                    n.replaceChild(a, i),
                    a.appendChild(i)
                }
            }
        }
    }
      , u = {
        touches: 0,
        allowEvent: function(e) {
            var t = !0;
            return "touchstart" === e.type ? u.touches += 1 : "touchend" === e.type || "touchcancel" === e.type ? setTimeout(function() {
                u.touches > 0 && (u.touches -= 1)
            }, 500) : "mousedown" === e.type && u.touches > 0 && (t = !1),
            t
        },
        touchup: function(e) {
            u.allowEvent(e)
        }
    };
    s.displayEffect = function(t) {
        t = t || {},
        "duration"in t && (c.duration = t.duration),
        c.wrapInput(l(".waves-effect")),
        "ontouchstart"in e && document.body.addEventListener("touchstart", o, !1),
        document.body.addEventListener("mousedown", o, !1)
    }
    ,
    s.attach = function(t) {
        "input" === t.tagName.toLowerCase() && (c.wrapInput([t]),
        t = t.parentElement),
        "ontouchstart"in e && t.addEventListener("touchstart", o, !1),
        t.addEventListener("mousedown", o, !1)
    }
    ,
    e.Waves = s,
    document.addEventListener("DOMContentLoaded", function() {
        s.displayEffect()
    }, !1)
}(window),
Materialize.toast = function(e, t, i, n) {
    i = i || "";
    var a = document.getElementById("toast-container");
    null === a && (a = document.createElement("div"),
    a.id = "toast-container",
    document.body.appendChild(a));
    var r = function(e) {
        var t = document.createElement("div");
        if (t.classList.add("toast"),
        i)
            for (var a = i.split(" "), r = 0, o = a.length; r < o; r++)
                t.classList.add(a[r]);
        ("object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) ? t.appendChild(e) : e instanceof jQuery ? t.appendChild(e[0]) : t.innerHTML = e;
        var s = new Hammer(t,{
            prevent_default: !1
        });
        return s.on("pan", function(e) {
            var i = e.deltaX;
            t.classList.contains("panning") || t.classList.add("panning");
            var n = 1 - Math.abs(i / 80);
            n < 0 && (n = 0),
            Vel(t, {
                left: i,
                opacity: n
            }, {
                duration: 50,
                queue: !1,
                easing: "easeOutQuad"
            })
        }),
        s.on("panend", function(e) {
            var i = e.deltaX;
            Math.abs(i) > 80 ? Vel(t, {
                marginTop: "-40px"
            }, {
                duration: 375,
                easing: "easeOutExpo",
                queue: !1,
                complete: function() {
                    "function" == typeof n && n(),
                    t.parentNode.removeChild(t)
                }
            }) : (t.classList.remove("panning"),
            Vel(t, {
                left: 0,
                opacity: 1
            }, {
                duration: 300,
                easing: "easeOutExpo",
                queue: !1
            }))
        }),
        t
    }(e);
    e && a.appendChild(r),
    r.style.opacity = 0,
    Vel(r, {
        translateY: "-35px",
        opacity: 1
    }, {
        duration: 300,
        easing: "easeOutCubic",
        queue: !1
    });
    var o, s = t;
    null != s && (o = setInterval(function() {
        null === r.parentNode && window.clearInterval(o),
        r.classList.contains("panning") || (s -= 20),
        s <= 0 && (Vel(r, {
            opacity: 0,
            marginTop: "-40px"
        }, {
            duration: 375,
            easing: "easeOutExpo",
            queue: !1,
            complete: function() {
                "function" == typeof n && n(),
                this[0].parentNode.removeChild(this[0])
            }
        }),
        window.clearInterval(o))
    }, 20))
}
,
function(e) {
    var t = {
        init: function(t) {
            var i = {
                menuWidth: 300,
                edge: "left",
                closeOnClick: !1,
                draggable: !0
            };
            t = e.extend(i, t),
            e(this).each(function() {
                var i = e(this)
                  , n = i.attr("data-activates")
                  , a = e("#" + n);
                300 != t.menuWidth && a.css("width", t.menuWidth);
                var r = e('.drag-target[data-sidenav="' + n + '"]');
                t.draggable ? (r.length && r.remove(),
                r = e('<div class="drag-target"></div>').attr("data-sidenav", n),
                e("body").append(r)) : r = e(),
                "left" == t.edge ? (a.css("transform", "translateX(-100%)"),
                r.css({
                    left: 0
                })) : (a.addClass("right-aligned").css("transform", "translateX(100%)"),
                r.css({
                    right: 0
                })),
                a.hasClass("fixed") && window.innerWidth > 992 && a.css("transform", "translateX(0)"),
                a.hasClass("fixed") && e(window).resize(function() {
                    window.innerWidth > 992 ? 0 !== e("#sidenav-overlay").length && l ? o(!0) : a.css("transform", "translateX(0%)") : !1 === l && ("left" === t.edge ? a.css("transform", "translateX(-100%)") : a.css("transform", "translateX(100%)"))
                }),
                !0 === t.closeOnClick && a.on("click.itemclick", "a:not(.collapsible-header)", function() {
                    o()
                });
                var o = function(i) {
                    s = !1,
                    l = !1,
                    e("body").css({
                        overflow: "",
                        width: ""
                    }),
                    e("#sidenav-overlay").velocity({
                        opacity: 0
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            e(this).remove()
                        }
                    }),
                    "left" === t.edge ? (r.css({
                        width: "",
                        right: "",
                        left: "0"
                    }),
                    a.velocity({
                        translateX: "-100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === i && (a.removeAttr("style"),
                            a.css("width", t.menuWidth))
                        }
                    })) : (r.css({
                        width: "",
                        right: "0",
                        left: ""
                    }),
                    a.velocity({
                        translateX: "100%"
                    }, {
                        duration: 200,
                        queue: !1,
                        easing: "easeOutCubic",
                        complete: function() {
                            !0 === i && (a.removeAttr("style"),
                            a.css("width", t.menuWidth))
                        }
                    }))
                }
                  , s = !1
                  , l = !1;
                t.draggable && (r.on("click", function() {
                    l && o()
                }),
                r.hammer({
                    prevent_default: !1
                }).bind("pan", function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        var n = (i.gesture.direction,
                        i.gesture.center.x)
                          , r = (i.gesture.center.y,
                        i.gesture.velocityX,
                        e("body"))
                          , s = e("#sidenav-overlay")
                          , c = r.innerWidth();
                        if (r.css("overflow", "hidden"),
                        r.width(c),
                        0 === s.length && (s = e('<div id="sidenav-overlay"></div>'),
                        s.css("opacity", 0).click(function() {
                            o()
                        }),
                        e("body").append(s)),
                        "left" === t.edge && (n > t.menuWidth ? n = t.menuWidth : n < 0 && (n = 0)),
                        "left" === t.edge)
                            n < t.menuWidth / 2 ? l = !1 : n >= t.menuWidth / 2 && (l = !0),
                            a.css("transform", "translateX(" + (n - t.menuWidth) + "px)");
                        else {
                            n < window.innerWidth - t.menuWidth / 2 ? l = !0 : n >= window.innerWidth - t.menuWidth / 2 && (l = !1);
                            var u = n - t.menuWidth / 2;
                            u < 0 && (u = 0),
                            a.css("transform", "translateX(" + u + "px)")
                        }
                        var d;
                        "left" === t.edge ? (d = n / t.menuWidth,
                        s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (d = Math.abs((n - window.innerWidth) / t.menuWidth),
                        s.velocity({
                            opacity: d
                        }, {
                            duration: 10,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(i) {
                    if ("touch" == i.gesture.pointerType) {
                        var n = e("#sidenav-overlay")
                          , o = i.gesture.velocityX
                          , c = i.gesture.center.x
                          , u = c - t.menuWidth
                          , d = c - t.menuWidth / 2;
                        u > 0 && (u = 0),
                        d < 0 && (d = 0),
                        s = !1,
                        "left" === t.edge ? l && o <= .3 || o < -.5 ? (0 !== u && a.velocity({
                            translateX: [0, u]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        r.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        l = !0) : (!l || o > .3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        a.velocity({
                            translateX: [-1 * t.menuWidth - 10, u]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        r.css({
                            width: "10px",
                            right: "",
                            left: 0
                        })) : l && o >= -.3 || o > .5 ? (0 !== d && a.velocity({
                            translateX: [0, d]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        r.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        l = !0) : (!l || o < -.3) && (e("body").css({
                            overflow: "",
                            width: ""
                        }),
                        a.velocity({
                            translateX: [t.menuWidth + 10, d]
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        n.velocity({
                            opacity: 0
                        }, {
                            duration: 200,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                e(this).remove()
                            }
                        }),
                        r.css({
                            width: "10px",
                            right: 0,
                            left: ""
                        }))
                    }
                })),
                i.off("click.sidenav").on("click.sidenav", function() {
                    if (!0 === l)
                        l = !1,
                        s = !1,
                        o();
                    else {
                        var i = e("body")
                          , n = e('<div id="sidenav-overlay"></div>')
                          , c = i.innerWidth();
                        i.css("overflow", "hidden"),
                        i.width(c),
                        e("body").append(r),
                        "left" === t.edge ? (r.css({
                            width: "50%",
                            right: 0,
                            left: ""
                        }),
                        a.velocity({
                            translateX: [0, -1 * t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })) : (r.css({
                            width: "50%",
                            right: "",
                            left: 0
                        }),
                        a.velocity({
                            translateX: [0, t.menuWidth]
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        n.css("opacity", 0).click(function() {
                            l = !1,
                            s = !1,
                            o(),
                            n.velocity({
                                opacity: 0
                            }, {
                                duration: 300,
                                queue: !1,
                                easing: "easeOutQuad",
                                complete: function() {
                                    e(this).remove()
                                }
                            })
                        }),
                        e("body").append(n),
                        n.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                l = !0,
                                s = !1
                            }
                        })
                    }
                    return !1
                })
            })
        },
        destroy: function() {
            var t = e("#sidenav-overlay")
              , i = e('.drag-target[data-sidenav="' + e(this).attr("data-activates") + '"]');
            t.trigger("click"),
            i.remove(),
            e(this).off("click"),
            t.remove()
        },
        show: function() {
            this.trigger("click")
        },
        hide: function() {
            e("#sidenav-overlay").trigger("click")
        }
    };
    e.fn.sideNav = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.sideNav") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    function t(t, i, n, a) {
        var o = e();
        return e.each(r, function(e, r) {
            if (r.height() > 0) {
                var s = r.offset().top
                  , l = r.offset().left
                  , c = l + r.width()
                  , u = s + r.height();
                !(l > i || c < a || s > n || u < t) && o.push(r)
            }
        }),
        o
    }
    function i(i) {
        ++l;
        var n = a.scrollTop()
          , r = a.scrollLeft()
          , s = r + a.width()
          , u = n + a.height()
          , d = t(n + c.top + i || 200, s + c.right, u + c.bottom, r + c.left);
        e.each(d, function(e, t) {
            "number" != typeof t.data("scrollSpy:ticks") && t.triggerHandler("scrollSpy:enter"),
            t.data("scrollSpy:ticks", l)
        }),
        e.each(o, function(e, t) {
            var i = t.data("scrollSpy:ticks");
            "number" == typeof i && i !== l && (t.triggerHandler("scrollSpy:exit"),
            t.data("scrollSpy:ticks", null))
        }),
        o = d
    }
    function n() {
        a.trigger("scrollSpy:winSize")
    }
    var a = e(window)
      , r = []
      , o = []
      , s = !1
      , l = 0
      , c = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    e.scrollSpy = function(t, n) {
        var o = {
            throttle: 100,
            scrollOffset: 200
        };
        n = e.extend(o, n);
        var l = [];
        t = e(t),
        t.each(function(t, i) {
            r.push(e(i)),
            e(i).data("scrollSpy:id", t),
            e('a[href="#' + e(i).attr("id") + '"]').click(function(t) {
                t.preventDefault();
                var i = e(Materialize.escapeHash(this.hash)).offset().top + 1;
                e("html, body").animate({
                    scrollTop: i - n.scrollOffset
                }, {
                    duration: 400,
                    queue: !1,
                    easing: "easeOutCubic"
                })
            })
        }),
        c.top = n.offsetTop || 0,
        c.right = n.offsetRight || 0,
        c.bottom = n.offsetBottom || 0,
        c.left = n.offsetLeft || 0;
        var u = Materialize.throttle(function() {
            i(n.scrollOffset)
        }, n.throttle || 100)
          , d = function() {
            e(document).ready(u)
        };
        return s || (a.on("scroll", d),
        a.on("resize", d),
        s = !0),
        setTimeout(d, 0),
        t.on("scrollSpy:enter", function() {
            l = e.grep(l, function(e) {
                return 0 != e.height()
            });
            var t = e(this);
            l[0] ? (e('a[href="#' + l[0].attr("id") + '"]').removeClass("active"),
            t.data("scrollSpy:id") < l[0].data("scrollSpy:id") ? l.unshift(e(this)) : l.push(e(this))) : l.push(e(this)),
            e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
        }),
        t.on("scrollSpy:exit", function() {
            if (l = e.grep(l, function(e) {
                return 0 != e.height()
            }),
            l[0]) {
                e('a[href="#' + l[0].attr("id") + '"]').removeClass("active");
                var t = e(this);
                l = e.grep(l, function(e) {
                    return e.attr("id") != t.attr("id")
                }),
                l[0] && e('a[href="#' + l[0].attr("id") + '"]').addClass("active")
            }
        }),
        t
    }
    ,
    e.winSizeSpy = function(t) {
        return e.winSizeSpy = function() {
            return a
        }
        ,
        t = t || {
            throttle: 100
        },
        a.on("resize", Materialize.throttle(n, t.throttle || 100))
    }
    ,
    e.fn.scrollSpy = function(t) {
        return e.scrollSpy(e(this), t)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        function t(t) {
            var i = t.css("font-family")
              , a = t.css("font-size")
              , r = t.css("line-height");
            a && n.css("font-size", a),
            i && n.css("font-family", i),
            r && n.css("line-height", r),
            "off" === t.attr("wrap") && n.css("overflow-wrap", "normal").css("white-space", "pre"),
            n.text(t.val() + "\n");
            var o = n.html().replace(/\n/g, "<br>");
            n.html(o),
            t.is(":visible") ? n.css("width", t.width()) : n.css("width", e(window).width() / 2),
            t.data("original-height") <= n.height() ? t.css("height", n.height()) : t.val().length < t.data("previous-length") && t.css("height", t.data("original-height")),
            t.data("previous-length", t.val().length)
        }
        Materialize.updateTextFields = function() {
            e("input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea").each(function(t, i) {
                var n = e(this);
                e(i).val().length > 0 || i.autofocus || void 0 !== n.attr("placeholder") ? n.siblings("label").addClass("active") : e(i)[0].validity ? n.siblings("label").toggleClass("active", !0 === e(i)[0].validity.badInput) : n.siblings("label").removeClass("active")
            })
        }
        ;
        var i = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea";
        e(document).on("change", i, function() {
            0 === e(this).val().length && void 0 === e(this).attr("placeholder") || e(this).siblings("label").addClass("active"),
            validate_field(e(this))
        }),
        e(document).ready(function() {
            Materialize.updateTextFields()
        }),
        e(document).on("reset", function(t) {
            var n = e(t.target);
            n.is("form") && (n.find(i).removeClass("valid").removeClass("invalid"),
            n.find(i).each(function() {
                "" === e(this).attr("value") && e(this).siblings("label").removeClass("active")
            }),
            n.find("select.initialized").each(function() {
                var e = n.find("option[selected]").text();
                n.siblings("input.select-dropdown").val(e)
            }))
        }),
        e(document).on("focus", i, function() {
            e(this).siblings("label, .prefix").addClass("active")
        }),
        e(document).on("blur", i, function() {
            var t = e(this)
              , i = ".prefix";
            0 === t.val().length && !0 !== t[0].validity.badInput && void 0 === t.attr("placeholder") && (i += ", label"),
            t.siblings(i).removeClass("active"),
            validate_field(t)
        }),
        window.validate_field = function(e) {
            var t = void 0 !== e.attr("data-length")
              , i = parseInt(e.attr("data-length"))
              , n = e.val().length;
            0 === e.val().length && !1 === e[0].validity.badInput ? e.hasClass("validate") && (e.removeClass("valid"),
            e.removeClass("invalid")) : e.hasClass("validate") && (e.is(":valid") && t && n <= i || e.is(":valid") && !t ? (e.removeClass("invalid"),
            e.addClass("valid")) : (e.removeClass("valid"),
            e.addClass("invalid")))
        }
        ;
        e(document).on("keyup.radio", "input[type=radio], input[type=checkbox]", function(t) {
            if (9 === t.which) {
                e(this).addClass("tabbed");
                return void e(this).one("blur", function(t) {
                    e(this).removeClass("tabbed")
                })
            }
        });
        var n = e(".hiddendiv").first();
        n.length || (n = e('<div class="hiddendiv common"></div>'),
        e("body").append(n));
        e(".materialize-textarea").each(function() {
            var t = e(this);
            t.data("original-height", t.height()),
            t.data("previous-length", t.val().length)
        }),
        e("body").on("keyup keydown autoresize", ".materialize-textarea", function() {
            t(e(this))
        }),
        e(document).on("change", '.file-field input[type="file"]', function() {
            for (var t = e(this).closest(".file-field"), i = t.find("input.file-path"), n = e(this)[0].files, a = [], r = 0; r < n.length; r++)
                a.push(n[r].name);
            i.val(a.join(", ")),
            i.trigger("change")
        });
        var a = "input[type=range]"
          , r = !1;
        e(a).each(function() {
            var t = e('<span class="thumb"><span class="value"></span></span>');
            e(this).after(t)
        });
        var o = function(e) {
            var t = parseInt(e.parent().css("padding-left"))
              , i = -7 + t + "px";
            e.velocity({
                height: "30px",
                width: "30px",
                top: "-30px",
                marginLeft: i
            }, {
                duration: 300,
                easing: "easeOutExpo"
            })
        }
          , s = function(e) {
            var t = e.width() - 15
              , i = parseFloat(e.attr("max"))
              , n = parseFloat(e.attr("min"));
            return (parseFloat(e.val()) - n) / (i - n) * t
        };
        e(document).on("change", a, function(t) {
            var i = e(this).siblings(".thumb");
            i.find(".value").html(e(this).val()),
            i.hasClass("active") || o(i);
            var n = s(e(this));
            i.addClass("active").css("left", n)
        }),
        e(document).on("mousedown touchstart", a, function(t) {
            var i = e(this).siblings(".thumb");
            if (i.length <= 0 && (i = e('<span class="thumb"><span class="value"></span></span>'),
            e(this).after(i)),
            i.find(".value").html(e(this).val()),
            r = !0,
            e(this).addClass("active"),
            i.hasClass("active") || o(i),
            "input" !== t.type) {
                var n = s(e(this));
                i.addClass("active").css("left", n)
            }
        }),
        e(document).on("mouseup touchend", ".range-field", function() {
            r = !1,
            e(this).removeClass("active")
        }),
        e(document).on("input mousemove touchmove", ".range-field", function(t) {
            var i = e(this).children(".thumb")
              , n = e(this).find(a);
            if (r) {
                i.hasClass("active") || o(i);
                var l = s(n);
                i.addClass("active").css("left", l),
                i.find(".value").html(i.siblings(a).val())
            }
        }),
        e(document).on("mouseout touchleave", ".range-field", function() {
            if (!r) {
                var t = e(this).children(".thumb")
                  , i = parseInt(e(this).css("padding-left"))
                  , n = 7 + i + "px";
                t.hasClass("active") && t.velocity({
                    height: "0",
                    width: "0",
                    top: "10px",
                    marginLeft: n
                }, {
                    duration: 100
                }),
                t.removeClass("active")
            }
        }),
        e.fn.autocomplete = function(t) {
            var i = {
                data: {},
                limit: 1 / 0,
                onAutocomplete: null,
                minLength: 1
            };
            return t = e.extend(i, t),
            this.each(function() {
                var i, n = e(this), a = t.data, r = 0, o = -1, s = n.closest(".input-field");
                if (!e.isEmptyObject(a)) {
                    var l, c = e('<ul class="autocomplete-content dropdown-content"></ul>');
                    s.length ? (l = s.children(".autocomplete-content.dropdown-content").first(),
                    l.length || s.append(c)) : (l = n.next(".autocomplete-content.dropdown-content"),
                    l.length || n.after(c)),
                    l.length && (c = l);
                    var u = function(e, t) {
                        var i = t.find("img")
                          , n = t.text().toLowerCase().indexOf("" + e.toLowerCase())
                          , a = n + e.length - 1
                          , r = t.text().slice(0, n)
                          , o = t.text().slice(n, a + 1)
                          , s = t.text().slice(a + 1);
                        t.html("<span>" + r + "<span class='highlight'>" + o + "</span>" + s + "</span>"),
                        i.length && t.prepend(i)
                    }
                      , d = function() {
                        o = -1,
                        c.find(".active").removeClass("active")
                    }
                      , p = function() {
                        c.empty(),
                        d(),
                        i = void 0
                    };
                    n.off("blur.autocomplete").on("blur.autocomplete", function() {
                        p()
                    }),
                    n.off("keyup.autocomplete focus.autocomplete").on("keyup.autocomplete focus.autocomplete", function(o) {
                        r = 0;
                        var s = n.val().toLowerCase();
                        if (13 !== o.which && 38 !== o.which && 40 !== o.which) {
                            if (i !== s && (p(),
                            s.length >= t.minLength))
                                for (var l in a)
                                    if (a.hasOwnProperty(l) && -1 !== l.toLowerCase().indexOf(s) && l.toLowerCase() !== s) {
                                        if (r >= t.limit)
                                            break;
                                        var d = e("<li></li>");
                                        a[l] ? d.append('<img src="' + a[l] + '" class="right circle"><span>' + l + "</span>") : d.append("<span>" + l + "</span>"),
                                        c.append(d),
                                        u(s, d),
                                        r++
                                    }
                            i = s
                        }
                    }),
                    n.off("keydown.autocomplete").on("keydown.autocomplete", function(e) {
                        var t, i = e.which, n = c.children("li").length, a = c.children(".active").first();
                        if (13 === i && o >= 0)
                            return t = c.children("li").eq(o),
                            void (t.length && (t.trigger("mousedown.autocomplete"),
                            e.preventDefault()));
                        38 !== i && 40 !== i || (e.preventDefault(),
                        38 === i && o > 0 && o--,
                        40 === i && o < n - 1 && o++,
                        a.removeClass("active"),
                        o >= 0 && c.children("li").eq(o).addClass("active"))
                    }),
                    c.on("mousedown.autocomplete touchstart.autocomplete", "li", function() {
                        var i = e(this).text().trim();
                        n.val(i),
                        n.trigger("change"),
                        p(),
                        "function" == typeof t.onAutocomplete && t.onAutocomplete.call(this, i)
                    })
                }
            })
        }
    }),
    e.fn.material_select = function(t) {
        function i(e, t, i) {
            var a = e.indexOf(t)
              , r = -1 === a;
            return r ? e.push(t) : e.splice(a, 1),
            i.siblings("ul.dropdown-content").find("li:not(.optgroup)").eq(t).toggleClass("active"),
            i.find("option").eq(t).prop("selected", r),
            n(e, i),
            r
        }
        function n(e, t) {
            for (var i = "", n = 0, a = e.length; n < a; n++) {
                var r = t.find("option").eq(e[n]).text();
                i += 0 === n ? r : ", " + r
            }
            "" === i && (i = t.find("option:disabled").eq(0).text()),
            t.siblings("input.select-dropdown").val(i)
        }
        e(this).each(function() {
            var n = e(this);
            if (!n.hasClass("browser-default")) {
                var a = !!n.attr("multiple")
                  , r = n.data("select-id");
                if (r && (n.parent().find("span.caret").remove(),
                n.parent().find("input").remove(),
                n.unwrap(),
                e("ul#select-options-" + r).remove()),
                "destroy" === t)
                    return void n.data("select-id", null).removeClass("initialized");
                var o = Materialize.guid();
                n.data("select-id", o);
                var s = e('<div class="select-wrapper"></div>');
                s.addClass(n.attr("class"));
                var l = e('<ul id="select-options-' + o + '" class="dropdown-content select-dropdown ' + (a ? "multiple-select-dropdown" : "") + '"></ul>')
                  , c = n.children("option, optgroup")
                  , u = []
                  , d = !1
                  , p = n.find("option:selected").html() || n.find("option:first").html() || ""
                  , h = function(t, i, n) {
                    var r = i.is(":disabled") ? "disabled " : ""
                      , o = "optgroup-option" === n ? "optgroup-option " : ""
                      , s = a ? '<input type="checkbox"' + r + "/><label></label>" : ""
                      , c = i.data("icon")
                      , u = i.attr("class");
                    if (c) {
                        var d = "";
                        return u && (d = ' class="' + u + '"'),
                        l.append(e('<li class="' + r + o + '"><img alt="" src="' + c + '"' + d + "><span>" + s + i.html() + "</span></li>")),
                        !0
                    }
                    l.append(e('<li class="' + r + o + '"><span>' + s + i.html() + "</span></li>"))
                };
                c.length && c.each(function() {
                    if (e(this).is("option"))
                        a ? h(0, e(this), "multiple") : h(0, e(this));
                    else if (e(this).is("optgroup")) {
                        var t = e(this).children("option");
                        l.append(e('<li class="optgroup"><span>' + e(this).attr("label") + "</span></li>")),
                        t.each(function() {
                            h(0, e(this), "optgroup-option")
                        })
                    }
                }),
                l.find("li:not(.optgroup)").each(function(r) {
                    e(this).click(function(o) {
                        if (!e(this).hasClass("disabled") && !e(this).hasClass("optgroup")) {
                            var s = !0;
                            a ? (e('input[type="checkbox"]', this).prop("checked", function(e, t) {
                                return !t
                            }),
                            s = i(u, r, n),
                            g.trigger("focus")) : (l.find("li").removeClass("active"),
                            e(this).toggleClass("active"),
                            g.val(e(this).text())),
                            v(l, e(this)),
                            n.find("option").eq(r).prop("selected", s),
                            n.trigger("change"),
                            void 0 !== t && t()
                        }
                        o.stopPropagation()
                    })
                }),
                n.wrap(s);
                var f = e('<span class="caret">&#9660;</span>');
                n.is(":disabled") && f.addClass("disabled");
                var m = p.replace(/"/g, "&quot;")
                  , g = e('<input type="text" class="select-dropdown" readonly="true" ' + (n.is(":disabled") ? "disabled" : "") + ' data-activates="select-options-' + o + '" value="' + m + '"/>');
                n.before(g),
                g.before(f),
                g.after(l),
                n.is(":disabled") || g.dropdown({
                    hover: !1
                }),
                n.attr("tabindex") && e(g[0]).attr("tabindex", n.attr("tabindex")),
                n.addClass("initialized"),
                g.on({
                    focus: function() {
                        if (e("ul.select-dropdown").not(l[0]).is(":visible") && e("input.select-dropdown").trigger("close"),
                        !l.is(":visible")) {
                            e(this).trigger("open", ["focus"]);
                            var t = e(this).val();
                            a && t.indexOf(",") >= 0 && (t = t.split(",")[0]);
                            var i = l.find("li").filter(function() {
                                return e(this).text().toLowerCase() === t.toLowerCase()
                            })[0];
                            v(l, i, !0)
                        }
                    },
                    click: function(e) {
                        e.stopPropagation()
                    }
                }),
                g.on("blur", function() {
                    a || e(this).trigger("close"),
                    l.find("li.selected").removeClass("selected")
                }),
                l.hover(function() {
                    d = !0
                }, function() {
                    d = !1
                }),
                e(window).on({
                    click: function() {
                        a && (d || g.trigger("close"))
                    }
                }),
                a && n.find("option:selected:not(:disabled)").each(function() {
                    var t = e(this).index();
                    i(u, t, n),
                    l.find("li").eq(t).find(":checkbox").prop("checked", !0)
                });
                var v = function(t, i, n) {
                    if (i) {
                        t.find("li.selected").removeClass("selected");
                        var r = e(i);
                        r.addClass("selected"),
                        a && !n || l.scrollTo(r)
                    }
                }
                  , y = []
                  , w = function(t) {
                    if (9 == t.which)
                        return void g.trigger("close");
                    if (40 == t.which && !l.is(":visible"))
                        return void g.trigger("open");
                    if (13 != t.which || l.is(":visible")) {
                        t.preventDefault();
                        var i = String.fromCharCode(t.which).toLowerCase()
                          , n = [9, 13, 27, 38, 40];
                        if (i && -1 === n.indexOf(t.which)) {
                            y.push(i);
                            var r = y.join("")
                              , o = l.find("li").filter(function() {
                                return 0 === e(this).text().toLowerCase().indexOf(r)
                            })[0];
                            o && v(l, o)
                        }
                        if (13 == t.which) {
                            var s = l.find("li.selected:not(.disabled)")[0];
                            s && (e(s).trigger("click"),
                            a || g.trigger("close"))
                        }
                        40 == t.which && (o = l.find("li.selected").length ? l.find("li.selected").next("li:not(.disabled)")[0] : l.find("li:not(.disabled)")[0],
                        v(l, o)),
                        27 == t.which && g.trigger("close"),
                        38 == t.which && (o = l.find("li.selected").prev("li:not(.disabled)")[0]) && v(l, o),
                        setTimeout(function() {
                            y = []
                        }, 1e3)
                    }
                };
                g.on("keydown", w)
            }
        })
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var i = {
                indicators: !0,
                height: 400,
                transition: 500,
                interval: 6e3
            };
            return t = e.extend(i, t),
            this.each(function() {
                function i(e, t) {
                    e.hasClass("center-align") ? e.velocity({
                        opacity: 0,
                        translateY: -100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("right-align") ? e.velocity({
                        opacity: 0,
                        translateX: 100
                    }, {
                        duration: t,
                        queue: !1
                    }) : e.hasClass("left-align") && e.velocity({
                        opacity: 0,
                        translateX: -100
                    }, {
                        duration: t,
                        queue: !1
                    })
                }
                function n(e) {
                    e >= c.length ? e = 0 : e < 0 && (e = c.length - 1),
                    (u = l.find(".active").index()) != e && (a = c.eq(u),
                    $caption = a.find(".caption"),
                    a.removeClass("active"),
                    a.velocity({
                        opacity: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            c.not(".active").velocity({
                                opacity: 0,
                                translateX: 0,
                                translateY: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    }),
                    i($caption, t.transition),
                    t.indicators && r.eq(u).removeClass("active"),
                    c.eq(e).velocity({
                        opacity: 1
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    c.eq(e).find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        delay: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    c.eq(e).addClass("active"),
                    t.indicators && r.eq(e).addClass("active"))
                }
                var a, r, o, s = e(this), l = s.find("ul.slides").first(), c = l.find("> li"), u = l.find(".active").index();
                -1 != u && (a = c.eq(u)),
                s.hasClass("fullscreen") || (t.indicators ? s.height(t.height + 40) : s.height(t.height),
                l.height(t.height)),
                c.find(".caption").each(function() {
                    i(e(this), 0)
                }),
                c.find("img").each(function() {
                    var t = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
                    e(this).attr("src") !== t && (e(this).css("background-image", "url(" + e(this).attr("src") + ")"),
                    e(this).attr("src", t))
                }),
                t.indicators && (r = e('<ul class="indicators"></ul>'),
                c.each(function(i) {
                    var a = e('<li class="indicator-item"></li>');
                    a.click(function() {
                        n(l.parent().find(e(this)).index()),
                        clearInterval(o),
                        o = setInterval(function() {
                            u = l.find(".active").index(),
                            c.length == u + 1 ? u = 0 : u += 1,
                            n(u)
                        }, t.transition + t.interval)
                    }),
                    r.append(a)
                }),
                s.append(r),
                r = s.find("ul.indicators").find("li.indicator-item")),
                a ? a.show() : (c.first().addClass("active").velocity({
                    opacity: 1
                }, {
                    duration: t.transition,
                    queue: !1,
                    easing: "easeOutQuad"
                }),
                u = 0,
                a = c.eq(u),
                t.indicators && r.eq(u).addClass("active")),
                a.find("img").each(function() {
                    a.find(".caption").velocity({
                        opacity: 1,
                        translateX: 0,
                        translateY: 0
                    }, {
                        duration: t.transition,
                        queue: !1,
                        easing: "easeOutQuad"
                    })
                }),
                o = setInterval(function() {
                    u = l.find(".active").index(),
                    n(u + 1)
                }, t.transition + t.interval);
                var d = !1
                  , p = !1
                  , h = !1;
                s.hammer({
                    prevent_default: !1
                }).bind("pan", function(e) {
                    if ("touch" === e.gesture.pointerType) {
                        clearInterval(o);
                        var t = e.gesture.direction
                          , i = e.gesture.deltaX
                          , n = e.gesture.velocityX
                          , a = e.gesture.velocityY;
                        $curr_slide = l.find(".active"),
                        Math.abs(n) > Math.abs(a) && $curr_slide.velocity({
                            translateX: i
                        }, {
                            duration: 50,
                            queue: !1,
                            easing: "easeOutQuad"
                        }),
                        4 === t && (i > s.innerWidth() / 2 || n < -.65) ? h = !0 : 2 === t && (i < -1 * s.innerWidth() / 2 || n > .65) && (p = !0);
                        var r;
                        p && (r = $curr_slide.next(),
                        0 === r.length && (r = c.first()),
                        r.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        })),
                        h && (r = $curr_slide.prev(),
                        0 === r.length && (r = c.last()),
                        r.velocity({
                            opacity: 1
                        }, {
                            duration: 300,
                            queue: !1,
                            easing: "easeOutQuad"
                        }))
                    }
                }).bind("panend", function(e) {
                    "touch" === e.gesture.pointerType && ($curr_slide = l.find(".active"),
                    d = !1,
                    curr_index = l.find(".active").index(),
                    !h && !p || c.length <= 1 ? $curr_slide.velocity({
                        translateX: 0
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad"
                    }) : p ? (n(curr_index + 1),
                    $curr_slide.velocity({
                        translateX: -1 * s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })) : h && (n(curr_index - 1),
                    $curr_slide.velocity({
                        translateX: s.innerWidth()
                    }, {
                        duration: 300,
                        queue: !1,
                        easing: "easeOutQuad",
                        complete: function() {
                            $curr_slide.velocity({
                                opacity: 0,
                                translateX: 0
                            }, {
                                duration: 0,
                                queue: !1
                            })
                        }
                    })),
                    p = !1,
                    h = !1,
                    clearInterval(o),
                    o = setInterval(function() {
                        u = l.find(".active").index(),
                        c.length == u + 1 ? u = 0 : u += 1,
                        n(u)
                    }, t.transition + t.interval))
                }),
                s.on("sliderPause", function() {
                    clearInterval(o)
                }),
                s.on("sliderStart", function() {
                    clearInterval(o),
                    o = setInterval(function() {
                        u = l.find(".active").index(),
                        c.length == u + 1 ? u = 0 : u += 1,
                        n(u)
                    }, t.transition + t.interval)
                }),
                s.on("sliderNext", function() {
                    u = l.find(".active").index(),
                    n(u + 1)
                }),
                s.on("sliderPrev", function() {
                    u = l.find(".active").index(),
                    n(u - 1)
                })
            })
        },
        pause: function() {
            e(this).trigger("sliderPause")
        },
        start: function() {
            e(this).trigger("sliderStart")
        },
        next: function() {
            e(this).trigger("sliderNext")
        },
        prev: function() {
            e(this).trigger("sliderPrev")
        }
    };
    e.fn.slider = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.tooltip") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e(document).on("click.card", ".card", function(t) {
            e(this).find("> .card-reveal").length && (e(t.target).is(e(".card-reveal .card-title")) || e(t.target).is(e(".card-reveal .card-title i")) ? e(this).find(".card-reveal").velocity({
                translateY: 0
            }, {
                duration: 225,
                queue: !1,
                easing: "easeInOutQuad",
                complete: function() {
                    e(this).css({
                        display: "none"
                    })
                }
            }) : (e(t.target).is(e(".card .activator")) || e(t.target).is(e(".card .activator i"))) && (e(t.target).closest(".card").css("overflow", "hidden"),
            e(this).find(".card-reveal").css({
                display: "block"
            }).velocity("stop", !1).velocity({
                translateY: "-100%"
            }, {
                duration: 300,
                queue: !1,
                easing: "easeInOutQuad"
            })))
        })
    })
}(jQuery),
function(e) {
    var t = {
        data: [],
        placeholder: "",
        secondaryPlaceholder: "",
        autocompleteOptions: {}
    };
    e(document).ready(function() {
        e(document).on("click", ".chip .close", function(t) {
            e(this).closest(".chips").attr("data-initialized") || e(this).closest(".chip").remove()
        })
    }),
    e.fn.material_chip = function(i) {
        var n = this;
        if (this.$el = e(this),
        this.$document = e(document),
        this.SELS = {
            CHIPS: ".chips",
            CHIP: ".chip",
            INPUT: "input",
            DELETE: ".material-icons",
            SELECTED_CHIP: ".selected"
        },
        "data" === i)
            return this.$el.data("chips");
        var a = e.extend({}, t, i);
        n.hasAutocomplete = !e.isEmptyObject(a.autocompleteOptions.data),
        this.init = function() {
            var t = 0;
            n.$el.each(function() {
                var i = e(this)
                  , r = Materialize.guid();
                n.chipId = r,
                a.data && a.data instanceof Array || (a.data = []),
                i.data("chips", a.data),
                i.attr("data-index", t),
                i.attr("data-initialized", !0),
                i.hasClass(n.SELS.CHIPS) || i.addClass("chips"),
                n.chips(i, r),
                t++
            })
        }
        ,
        this.handleEvents = function() {
            var t = n.SELS;
            n.$document.off("click.chips-focus", t.CHIPS).on("click.chips-focus", t.CHIPS, function(i) {
                e(i.target).find(t.INPUT).focus()
            }),
            n.$document.off("click.chips-select", t.CHIP).on("click.chips-select", t.CHIP, function(i) {
                var a = e(i.target);
                if (a.length) {
                    var r = a.hasClass("selected")
                      , o = a.closest(t.CHIPS);
                    e(t.CHIP).removeClass("selected"),
                    r || n.selectChip(a.index(), o)
                }
            }),
            n.$document.off("keydown.chips").on("keydown.chips", function(i) {
                if (!e(i.target).is("input, textarea")) {
                    var a, r = n.$document.find(t.CHIP + t.SELECTED_CHIP), o = r.closest(t.CHIPS), s = r.siblings(t.CHIP).length;
                    if (r.length)
                        if (8 === i.which || 46 === i.which) {
                            i.preventDefault(),
                            a = r.index(),
                            n.deleteChip(a, o);
                            var l = null;
                            a + 1 < s ? l = a : a !== s && a + 1 !== s || (l = s - 1),
                            l < 0 && (l = null),
                            null !== l && n.selectChip(l, o),
                            s || o.find("input").focus()
                        } else if (37 === i.which) {
                            if ((a = r.index() - 1) < 0)
                                return;
                            e(t.CHIP).removeClass("selected"),
                            n.selectChip(a, o)
                        } else if (39 === i.which) {
                            if (a = r.index() + 1,
                            e(t.CHIP).removeClass("selected"),
                            a > s)
                                return void o.find("input").focus();
                            n.selectChip(a, o)
                        }
                }
            }),
            n.$document.off("focusin.chips", t.CHIPS + " " + t.INPUT).on("focusin.chips", t.CHIPS + " " + t.INPUT, function(i) {
                var n = e(i.target).closest(t.CHIPS);
                n.addClass("focus"),
                n.siblings("label, .prefix").addClass("active"),
                e(t.CHIP).removeClass("selected")
            }),
            n.$document.off("focusout.chips", t.CHIPS + " " + t.INPUT).on("focusout.chips", t.CHIPS + " " + t.INPUT, function(i) {
                var n = e(i.target).closest(t.CHIPS);
                n.removeClass("focus"),
                n.data("chips").length || n.siblings("label").removeClass("active"),
                n.siblings(".prefix").removeClass("active")
            }),
            n.$document.off("keydown.chips-add", t.CHIPS + " " + t.INPUT).on("keydown.chips-add", t.CHIPS + " " + t.INPUT, function(i) {
                var a = e(i.target)
                  , r = a.closest(t.CHIPS)
                  , o = r.children(t.CHIP).length;
                if (13 === i.which) {
                    if (n.hasAutocomplete && r.find(".autocomplete-content.dropdown-content").length && r.find(".autocomplete-content.dropdown-content").children().length)
                        return;
                    return i.preventDefault(),
                    n.addChip({
                        tag: a.val()
                    }, r),
                    void a.val("")
                }
                if ((8 === i.keyCode || 37 === i.keyCode) && "" === a.val() && o)
                    return i.preventDefault(),
                    n.selectChip(o - 1, r),
                    void a.blur()
            }),
            n.$document.off("click.chips-delete", t.CHIPS + " " + t.DELETE).on("click.chips-delete", t.CHIPS + " " + t.DELETE, function(i) {
                var a = e(i.target)
                  , r = a.closest(t.CHIPS)
                  , o = a.closest(t.CHIP);
                i.stopPropagation(),
                n.deleteChip(o.index(), r),
                r.find("input").focus()
            })
        }
        ,
        this.chips = function(t, i) {
            t.empty(),
            t.data("chips").forEach(function(e) {
                t.append(n.renderChip(e))
            }),
            t.append(e('<input id="' + i + '" class="input" placeholder="">')),
            n.setPlaceholder(t);
            var r = t.next("label");
            r.length && (r.attr("for", i),
            t.data("chips").length && r.addClass("active"));
            var o = e("#" + i);
            n.hasAutocomplete && (a.autocompleteOptions.onAutocomplete = function(e) {
                n.addChip({
                    tag: e
                }, t),
                o.val(""),
                o.focus()
            }
            ,
            o.autocomplete(a.autocompleteOptions))
        }
        ,
        this.renderChip = function(t) {
            if (t.tag) {
                var i = e('<div class="chip"></div>');
                return i.text(t.tag),
                i.append(e('<i class="material-icons close">close</i>')),
                i
            }
        }
        ,
        this.setPlaceholder = function(e) {
            e.data("chips").length && a.placeholder ? e.find("input").prop("placeholder", a.placeholder) : !e.data("chips").length && a.secondaryPlaceholder && e.find("input").prop("placeholder", a.secondaryPlaceholder)
        }
        ,
        this.isValid = function(e, t) {
            for (var i = e.data("chips"), n = !1, a = 0; a < i.length; a++)
                if (i[a].tag === t.tag)
                    return void (n = !0);
            return "" !== t.tag && !n
        }
        ,
        this.addChip = function(e, t) {
            if (n.isValid(t, e)) {
                for (var i = n.renderChip(e), a = [], r = t.data("chips"), o = 0; o < r.length; o++)
                    a.push(r[o]);
                a.push(e),
                t.data("chips", a),
                i.insertBefore(t.find("input")),
                t.trigger("chip.add", e),
                n.setPlaceholder(t)
            }
        }
        ,
        this.deleteChip = function(e, t) {
            var i = t.data("chips")[e];
            t.find(".chip").eq(e).remove();
            for (var a = [], r = t.data("chips"), o = 0; o < r.length; o++)
                o !== e && a.push(r[o]);
            t.data("chips", a),
            t.trigger("chip.delete", i),
            n.setPlaceholder(t)
        }
        ,
        this.selectChip = function(e, t) {
            var i = t.find(".chip").eq(e);
            i && !1 === i.hasClass("selected") && (i.addClass("selected"),
            t.trigger("chip.select", t.data("chips")[e]))
        }
        ,
        this.getChipsElement = function(e, t) {
            return t.eq(e)
        }
        ,
        this.init(),
        this.handleEvents()
    }
}(jQuery),
function(e) {
    e.fn.pushpin = function(t) {
        var i = {
            top: 0,
            bottom: 1 / 0,
            offset: 0
        };
        return "remove" === t ? (this.each(function() {
            (id = e(this).data("pushpin-id")) && (e(window).off("scroll." + id),
            e(this).removeData("pushpin-id").removeClass("pin-top pinned pin-bottom").removeAttr("style"))
        }),
        !1) : (t = e.extend(i, t),
        $index = 0,
        this.each(function() {
            function i(e) {
                e.removeClass("pin-top"),
                e.removeClass("pinned"),
                e.removeClass("pin-bottom")
            }
            function n(n, a) {
                n.each(function() {
                    t.top <= a && t.bottom >= a && !e(this).hasClass("pinned") && (i(e(this)),
                    e(this).css("top", t.offset),
                    e(this).addClass("pinned")),
                    a < t.top && !e(this).hasClass("pin-top") && (i(e(this)),
                    e(this).css("top", 0),
                    e(this).addClass("pin-top")),
                    a > t.bottom && !e(this).hasClass("pin-bottom") && (i(e(this)),
                    e(this).addClass("pin-bottom"),
                    e(this).css("top", t.bottom - o))
                })
            }
            var a = Materialize.guid()
              , r = e(this)
              , o = e(this).offset().top;
            e(this).data("pushpin-id", a),
            n(r, e(window).scrollTop()),
            e(window).on("scroll." + a, function() {
                var i = e(window).scrollTop() + t.offset;
                n(r, i)
            })
        }))
    }
}(jQuery),
function(e) {
    e(document).ready(function() {
        e.fn.reverse = [].reverse,
        e(document).on("mouseenter.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(i) {
            var n = e(this);
            t(n)
        }),
        e(document).on("mouseleave.fixedActionBtn", ".fixed-action-btn:not(.click-to-toggle):not(.toolbar)", function(t) {
            var n = e(this);
            i(n)
        }),
        e(document).on("click.fabClickToggle", ".fixed-action-btn.click-to-toggle > a", function(n) {
            var a = e(this)
              , r = a.parent();
            r.hasClass("active") ? i(r) : t(r)
        }),
        e(document).on("click.fabToolbar", ".fixed-action-btn.toolbar > a", function(t) {
            var i = e(this)
              , a = i.parent();
            n(a)
        })
    }),
    e.fn.extend({
        openFAB: function() {
            t(e(this))
        },
        closeFAB: function() {
            i(e(this))
        },
        openToolbar: function() {
            n(e(this))
        },
        closeToolbar: function() {
            a(e(this))
        }
    });
    var t = function(t) {
        var i = t;
        if (!1 === i.hasClass("active")) {
            var n, a, r = i.hasClass("horizontal");
            !0 === r ? a = 40 : n = 40,
            i.addClass("active"),
            i.find("ul .btn-floating").velocity({
                scaleY: ".4",
                scaleX: ".4",
                translateY: n + "px",
                translateX: a + "px"
            }, {
                duration: 0
            });
            var o = 0;
            i.find("ul .btn-floating").reverse().each(function() {
                e(this).velocity({
                    opacity: "1",
                    scaleX: "1",
                    scaleY: "1",
                    translateY: "0",
                    translateX: "0"
                }, {
                    duration: 80,
                    delay: o
                }),
                o += 40
            })
        }
    }
      , i = function(e) {
        var t, i, n = e, a = n.hasClass("horizontal");
        !0 === a ? i = 40 : t = 40,
        n.removeClass("active");
        n.find("ul .btn-floating").velocity("stop", !0),
        n.find("ul .btn-floating").velocity({
            opacity: "0",
            scaleX: ".4",
            scaleY: ".4",
            translateY: t + "px",
            translateX: i + "px"
        }, {
            duration: 80
        })
    }
      , n = function(t) {
        if ("true" !== t.attr("data-open")) {
            var i, n, r, o = window.innerWidth, s = window.innerHeight, l = t[0].getBoundingClientRect(), c = t.find("> a").first(), u = t.find("> ul").first(), d = e('<div class="fab-backdrop"></div>'), p = c.css("background-color");
            c.append(d),
            i = l.left - o / 2 + l.width / 2,
            n = s - l.bottom,
            r = o / d.width(),
            t.attr("data-origin-bottom", l.bottom),
            t.attr("data-origin-left", l.left),
            t.attr("data-origin-width", l.width),
            t.addClass("active"),
            t.attr("data-open", !0),
            t.css({
                "text-align": "center",
                width: "100%",
                bottom: 0,
                left: 0,
                transform: "translateX(" + i + "px)",
                transition: "none"
            }),
            c.css({
                transform: "translateY(" + -n + "px)",
                transition: "none"
            }),
            d.css({
                "background-color": p
            }),
            setTimeout(function() {
                t.css({
                    transform: "",
                    transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                }),
                c.css({
                    overflow: "visible",
                    transform: "",
                    transition: "transform .2s"
                }),
                setTimeout(function() {
                    t.css({
                        overflow: "hidden",
                        "background-color": p
                    }),
                    d.css({
                        transform: "scale(" + r + ")",
                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    }),
                    u.find("> li > a").css({
                        opacity: 1
                    }),
                    e(window).on("scroll.fabToolbarClose", function() {
                        a(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose")
                    }),
                    e(document).on("click.fabToolbarClose", function(i) {
                        e(i.target).closest(u).length || (a(t),
                        e(window).off("scroll.fabToolbarClose"),
                        e(document).off("click.fabToolbarClose"))
                    })
                }, 100)
            }, 0)
        }
    }
      , a = function(e) {
        if ("true" === e.attr("data-open")) {
            var t, i, n = window.innerWidth, a = window.innerHeight, r = e.attr("data-origin-width"), o = e.attr("data-origin-bottom"), s = e.attr("data-origin-left"), l = e.find("> .btn-floating").first(), c = e.find("> ul").first(), u = e.find(".fab-backdrop"), d = l.css("background-color");
            t = s - n / 2 + r / 2,
            i = a - o,
            n / u.width(),
            e.removeClass("active"),
            e.attr("data-open", !1),
            e.css({
                "background-color": "transparent",
                transition: "none"
            }),
            l.css({
                transition: "none"
            }),
            u.css({
                transform: "scale(0)",
                "background-color": d
            }),
            c.find("> li > a").css({
                opacity: ""
            }),
            setTimeout(function() {
                u.remove(),
                e.css({
                    "text-align": "",
                    width: "",
                    bottom: "",
                    left: "",
                    overflow: "",
                    "background-color": "",
                    transform: "translate3d(" + -t + "px,0,0)"
                }),
                l.css({
                    overflow: "",
                    transform: "translate3d(0," + i + "px,0)"
                }),
                setTimeout(function() {
                    e.css({
                        transform: "translate3d(0,0,0)",
                        transition: "transform .2s"
                    }),
                    l.css({
                        transform: "translate3d(0,0,0)",
                        transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                    })
                }, 20)
            }, 200)
        }
    }
}(jQuery),
function(e) {
    Materialize.fadeInImage = function(t) {
        var i;
        if ("string" == typeof t)
            i = e(t);
        else {
            if ("object" != typeof t)
                return;
            i = t
        }
        i.css({
            opacity: 0
        }),
        e(i).velocity({
            opacity: 1
        }, {
            duration: 650,
            queue: !1,
            easing: "easeOutSine"
        }),
        e(i).velocity({
            opacity: 1
        }, {
            duration: 1300,
            queue: !1,
            easing: "swing",
            step: function(t, i) {
                i.start = 100;
                var n = t / 100
                  , a = 150 - (100 - t) / 1.75;
                a < 100 && (a = 100),
                t >= 0 && e(this).css({
                    "-webkit-filter": "grayscale(" + n + ")brightness(" + a + "%)",
                    filter: "grayscale(" + n + ")brightness(" + a + "%)"
                })
            }
        })
    }
    ,
    Materialize.showStaggeredList = function(t) {
        var i;
        if ("string" == typeof t)
            i = e(t);
        else {
            if ("object" != typeof t)
                return;
            i = t
        }
        var n = 0;
        i.find("li").velocity({
            translateX: "-100px"
        }, {
            duration: 0
        }),
        i.find("li").each(function() {
            e(this).velocity({
                opacity: "1",
                translateX: "0"
            }, {
                duration: 800,
                delay: n,
                easing: [60, 10]
            }),
            n += 120
        })
    }
    ,
    e(document).ready(function() {
        var t = !1
          , i = !1;
        e(".dismissable").each(function() {
            e(this).hammer({
                prevent_default: !1
            }).bind("pan", function(n) {
                if ("touch" === n.gesture.pointerType) {
                    var a = e(this)
                      , r = n.gesture.direction
                      , o = n.gesture.deltaX
                      , s = n.gesture.velocityX;
                    a.velocity({
                        translateX: o
                    }, {
                        duration: 50,
                        queue: !1,
                        easing: "easeOutQuad"
                    }),
                    4 === r && (o > a.innerWidth() / 2 || s < -.75) && (t = !0),
                    2 === r && (o < -1 * a.innerWidth() / 2 || s > .75) && (i = !0)
                }
            }).bind("panend", function(n) {
                if (Math.abs(n.gesture.deltaX) < e(this).innerWidth() / 2 && (i = !1,
                t = !1),
                "touch" === n.gesture.pointerType) {
                    var a = e(this);
                    if (t || i) {
                        var r;
                        r = t ? a.innerWidth() : -1 * a.innerWidth(),
                        a.velocity({
                            translateX: r
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad",
                            complete: function() {
                                a.css("border", "none"),
                                a.velocity({
                                    height: 0,
                                    padding: 0
                                }, {
                                    duration: 200,
                                    queue: !1,
                                    easing: "easeOutQuad",
                                    complete: function() {
                                        a.remove()
                                    }
                                })
                            }
                        })
                    } else
                        a.velocity({
                            translateX: 0
                        }, {
                            duration: 100,
                            queue: !1,
                            easing: "easeOutQuad"
                        });
                    t = !1,
                    i = !1
                }
            })
        })
    })
}(jQuery),
function(e) {
    var t = !1;
    Materialize.scrollFire = function(e) {
        var i = function() {
            for (var t = window.pageYOffset + window.innerHeight, i = 0; i < e.length; i++) {
                var n = e[i]
                  , a = n.selector
                  , r = n.offset
                  , o = n.callback
                  , s = document.querySelector(a);
                if (null !== s) {
                    if (t > s.getBoundingClientRect().top + window.pageYOffset + r && !0 !== n.done) {
                        if ("function" == typeof o)
                            o.call(this, s);
                        else if ("string" == typeof o) {
                            var l = new Function(o);
                            l(s)
                        }
                        n.done = !0
                    }
                }
            }
        }
          , n = Materialize.throttle(function() {
            i()
        }, e.throttle || 100);
        t || (window.addEventListener("scroll", n),
        window.addEventListener("resize", n),
        t = !0),
        setTimeout(n, 0)
    }
}(),
function(e) {
    "function" == typeof define && define.amd ? define("picker", ["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : this.Picker = e(jQuery)
}(function(e) {
    function t(r, o, l, d) {
        function p() {
            return t._.node("div", t._.node("div", t._.node("div", t._.node("div", S.component.nodes(w.open), x.box), x.wrap), x.frame), x.holder)
        }
        function h() {
            T.data(o, S).addClass(x.input).attr("tabindex", -1).val(T.data("value") ? S.get("select", b.format) : r.value),
            b.editable || T.on("focus." + w.id + " click." + w.id, function(e) {
                e.preventDefault(),
                S.$root.eq(0).focus()
            }).on("keydown." + w.id, g),
            a(r, {
                haspopup: !0,
                expanded: !1,
                readonly: !1,
                owns: r.id + "_root"
            })
        }
        function f() {
            S.$root.on({
                keydown: g,
                focusin: function(e) {
                    S.$root.removeClass(x.focused),
                    e.stopPropagation()
                },
                "mousedown click": function(t) {
                    var i = t.target;
                    i != S.$root.children()[0] && (t.stopPropagation(),
                    "mousedown" != t.type || e(i).is("input, select, textarea, button, option") || (t.preventDefault(),
                    S.$root.eq(0).focus()))
                }
            }).on({
                focus: function() {
                    T.addClass(x.target)
                },
                blur: function() {
                    T.removeClass(x.target)
                }
            }).on("focus.toOpen", v).on("click", "[data-pick], [data-nav], [data-clear], [data-close]", function() {
                var t = e(this)
                  , i = t.data()
                  , n = t.hasClass(x.navDisabled) || t.hasClass(x.disabled)
                  , a = s();
                a = a && (a.type || a.href),
                (n || a && !e.contains(S.$root[0], a)) && S.$root.eq(0).focus(),
                !n && i.nav ? S.set("highlight", S.component.item.highlight, {
                    nav: i.nav
                }) : !n && "pick"in i ? S.set("select", i.pick) : i.clear ? S.clear().close(!0) : i.close && S.close(!0)
            }),
            a(S.$root[0], "hidden", !0)
        }
        function m() {
            var t;
            !0 === b.hiddenName ? (t = r.name,
            r.name = "") : (t = ["string" == typeof b.hiddenPrefix ? b.hiddenPrefix : "", "string" == typeof b.hiddenSuffix ? b.hiddenSuffix : "_submit"],
            t = t[0] + r.name + t[1]),
            S._hidden = e('<input type=hidden name="' + t + '"' + (T.data("value") || r.value ? ' value="' + S.get("select", b.formatSubmit) + '"' : "") + ">")[0],
            T.on("change." + w.id, function() {
                S._hidden.value = r.value ? S.get("select", b.formatSubmit) : ""
            }),
            b.container ? e(b.container).append(S._hidden) : T.after(S._hidden)
        }
        function g(e) {
            var t = e.keyCode
              , i = /^(8|46)$/.test(t);
            if (27 == t)
                return S.close(),
                !1;
            (32 == t || i || !w.open && S.component.key[t]) && (e.preventDefault(),
            e.stopPropagation(),
            i ? S.clear().close() : S.open())
        }
        function v(e) {
            e.stopPropagation(),
            "focus" == e.type && S.$root.addClass(x.focused),
            S.open()
        }
        if (!r)
            return t;
        var y = !1
          , w = {
            id: r.id || "P" + Math.abs(~~(Math.random() * new Date))
        }
          , b = l ? e.extend(!0, {}, l.defaults, d) : d || {}
          , x = e.extend({}, t.klasses(), b.klass)
          , T = e(r)
          , C = function() {
            return this.start()
        }
          , S = C.prototype = {
            constructor: C,
            $node: T,
            start: function() {
                return w && w.start ? S : (w.methods = {},
                w.start = !0,
                w.open = !1,
                w.type = r.type,
                r.autofocus = r == s(),
                r.readOnly = !b.editable,
                r.id = r.id || w.id,
                "text" != r.type && (r.type = "text"),
                S.component = new l(S,b),
                S.$root = e(t._.node("div", p(), x.picker, 'id="' + r.id + '_root" tabindex="0"')),
                f(),
                b.formatSubmit && m(),
                h(),
                b.container ? e(b.container).append(S.$root) : T.after(S.$root),
                S.on({
                    start: S.component.onStart,
                    render: S.component.onRender,
                    stop: S.component.onStop,
                    open: S.component.onOpen,
                    close: S.component.onClose,
                    set: S.component.onSet
                }).on({
                    start: b.onStart,
                    render: b.onRender,
                    stop: b.onStop,
                    open: b.onOpen,
                    close: b.onClose,
                    set: b.onSet
                }),
                y = i(S.$root.children()[0]),
                r.autofocus && S.open(),
                S.trigger("start").trigger("render"))
            },
            render: function(e) {
                return e ? S.$root.html(p()) : S.$root.find("." + x.box).html(S.component.nodes(w.open)),
                S.trigger("render")
            },
            stop: function() {
                return w.start ? (S.close(),
                S._hidden && S._hidden.parentNode.removeChild(S._hidden),
                S.$root.remove(),
                T.removeClass(x.input).removeData(o),
                setTimeout(function() {
                    T.off("." + w.id)
                }, 0),
                r.type = w.type,
                r.readOnly = !1,
                S.trigger("stop"),
                w.methods = {},
                w.start = !1,
                S) : S
            },
            open: function(i) {
                return w.open ? S : (T.addClass(x.active),
                a(r, "expanded", !0),
                setTimeout(function() {
                    S.$root.addClass(x.opened),
                    a(S.$root[0], "hidden", !1)
                }, 0),
                !1 !== i && (w.open = !0,
                y && u.css("overflow", "hidden").css("padding-right", "+=" + n()),
                S.$root.eq(0).focus(),
                c.on("click." + w.id + " focusin." + w.id, function(e) {
                    var t = e.target;
                    t != r && t != document && 3 != e.which && S.close(t === S.$root.children()[0])
                }).on("keydown." + w.id, function(i) {
                    var n = i.keyCode
                      , a = S.component.key[n]
                      , r = i.target;
                    27 == n ? S.close(!0) : r != S.$root[0] || !a && 13 != n ? e.contains(S.$root[0], r) && 13 == n && (i.preventDefault(),
                    r.click()) : (i.preventDefault(),
                    a ? t._.trigger(S.component.key.go, S, [t._.trigger(a)]) : S.$root.find("." + x.highlighted).hasClass(x.disabled) || S.set("select", S.component.item.highlight).close())
                })),
                S.trigger("open"))
            },
            close: function(e) {
                return e && (S.$root.off("focus.toOpen").eq(0).focus(),
                setTimeout(function() {
                    S.$root.on("focus.toOpen", v)
                }, 0)),
                T.removeClass(x.active),
                a(r, "expanded", !1),
                setTimeout(function() {
                    S.$root.removeClass(x.opened + " " + x.focused),
                    a(S.$root[0], "hidden", !0)
                }, 0),
                w.open ? (w.open = !1,
                y && u.css("overflow", "").css("padding-right", "-=" + n()),
                c.off("." + w.id),
                S.trigger("close")) : S
            },
            clear: function(e) {
                return S.set("clear", null, e)
            },
            set: function(t, i, n) {
                var a, r, o = e.isPlainObject(t), s = o ? t : {};
                if (n = o && e.isPlainObject(i) ? i : n || {},
                t) {
                    o || (s[t] = i);
                    for (a in s)
                        r = s[a],
                        a in S.component.item && (void 0 === r && (r = null),
                        S.component.set(a, r, n)),
                        "select" != a && "clear" != a || T.val("clear" == a ? "" : S.get(a, b.format)).trigger("change");
                    S.render()
                }
                return n.muted ? S : S.trigger("set", s)
            },
            get: function(e, i) {
                if (e = e || "value",
                null != w[e])
                    return w[e];
                if ("valueSubmit" == e) {
                    if (S._hidden)
                        return S._hidden.value;
                    e = "value"
                }
                if ("value" == e)
                    return r.value;
                if (e in S.component.item) {
                    if ("string" == typeof i) {
                        var n = S.component.get(e);
                        return n ? t._.trigger(S.component.formats.toString, S.component, [i, n]) : ""
                    }
                    return S.component.get(e)
                }
            },
            on: function(t, i, n) {
                var a, r, o = e.isPlainObject(t), s = o ? t : {};
                if (t) {
                    o || (s[t] = i);
                    for (a in s)
                        r = s[a],
                        n && (a = "_" + a),
                        w.methods[a] = w.methods[a] || [],
                        w.methods[a].push(r)
                }
                return S
            },
            off: function() {
                var e, t, i = arguments;
                for (e = 0,
                namesCount = i.length; e < namesCount; e += 1)
                    (t = i[e])in w.methods && delete w.methods[t];
                return S
            },
            trigger: function(e, i) {
                var n = function(e) {
                    var n = w.methods[e];
                    n && n.map(function(e) {
                        t._.trigger(e, S, [i])
                    })
                };
                return n("_" + e),
                n(e),
                S
            }
        };
        return new C
    }
    function i(e) {
        var t;
        return e.currentStyle ? t = e.currentStyle.position : window.getComputedStyle && (t = getComputedStyle(e).position),
        "fixed" == t
    }
    function n() {
        if (u.height() <= l.height())
            return 0;
        var t = e('<div style="visibility:hidden;width:100px" />').appendTo("body")
          , i = t[0].offsetWidth;
        t.css("overflow", "scroll");
        var n = e('<div style="width:100%" />').appendTo(t)
          , a = n[0].offsetWidth;
        return t.remove(),
        i - a
    }
    function a(t, i, n) {
        if (e.isPlainObject(i))
            for (var a in i)
                r(t, a, i[a]);
        else
            r(t, i, n)
    }
    function r(e, t, i) {
        e.setAttribute(("role" == t ? "" : "aria-") + t, i)
    }
    function o(t, i) {
        e.isPlainObject(t) || (t = {
            attribute: i
        }),
        i = "";
        for (var n in t) {
            var a = ("role" == n ? "" : "aria-") + n;
            i += null == t[n] ? "" : a + '="' + t[n] + '"'
        }
        return i
    }
    function s() {
        try {
            return document.activeElement
        } catch (e) {}
    }
    var l = e(window)
      , c = e(document)
      , u = e(document.documentElement);
    return t.klasses = function(e) {
        return e = e || "picker",
        {
            picker: e,
            opened: e + "--opened",
            focused: e + "--focused",
            input: e + "__input",
            active: e + "__input--active",
            target: e + "__input--target",
            holder: e + "__holder",
            frame: e + "__frame",
            wrap: e + "__wrap",
            box: e + "__box"
        }
    }
    ,
    t._ = {
        group: function(e) {
            for (var i, n = "", a = t._.trigger(e.min, e); a <= t._.trigger(e.max, e, [a]); a += e.i)
                i = t._.trigger(e.item, e, [a]),
                n += t._.node(e.node, i[0], i[1], i[2]);
            return n
        },
        node: function(t, i, n, a) {
            return i ? (i = e.isArray(i) ? i.join("") : i,
            n = n ? ' class="' + n + '"' : "",
            a = a ? " " + a : "",
            "<" + t + n + a + ">" + i + "</" + t + ">") : ""
        },
        lead: function(e) {
            return (e < 10 ? "0" : "") + e
        },
        trigger: function(e, t, i) {
            return "function" == typeof e ? e.apply(t, i || []) : e
        },
        digits: function(e) {
            return /\d/.test(e[1]) ? 2 : 1
        },
        isDate: function(e) {
            return {}.toString.call(e).indexOf("Date") > -1 && this.isInteger(e.getDate())
        },
        isInteger: function(e) {
            return {}.toString.call(e).indexOf("Number") > -1 && e % 1 == 0
        },
        ariaAttr: o
    },
    t.extend = function(i, n) {
        e.fn[i] = function(a, r) {
            var o = this.data(i);
            return "picker" == a ? o : o && "string" == typeof a ? t._.trigger(o[a], o, [r]) : this.each(function() {
                e(this).data(i) || new t(this,i,n,a)
            })
        }
        ,
        e.fn[i].defaults = n.defaults
    }
    ,
    t
}),
function(e) {
    "function" == typeof define && define.amd ? define(["picker", "jquery"], e) : "object" == typeof exports ? module.exports = e(require("./picker.js"), require("jquery")) : e(Picker, jQuery)
}(function(e, t) {
    function i(e, t) {
        var i = this
          , n = e.$node[0]
          , a = n.value
          , r = e.$node.data("value")
          , o = r || a
          , s = r ? t.formatSubmit : t.format
          , l = function() {
            return n.currentStyle ? "rtl" == n.currentStyle.direction : "rtl" == getComputedStyle(e.$root[0]).direction
        };
        i.settings = t,
        i.$node = e.$node,
        i.queue = {
            min: "measure create",
            max: "measure create",
            now: "now create",
            select: "parse create validate",
            highlight: "parse navigate create validate",
            view: "parse create validate viewset",
            disable: "deactivate",
            enable: "activate"
        },
        i.item = {},
        i.item.clear = null,
        i.item.disable = (t.disable || []).slice(0),
        i.item.enable = -function(e) {
            return !0 === e[0] ? e.shift() : -1
        }(i.item.disable),
        i.set("min", t.min).set("max", t.max).set("now"),
        o ? i.set("select", o, {
            format: s
        }) : i.set("select", null).set("highlight", i.item.now),
        i.key = {
            40: 7,
            38: -7,
            39: function() {
                return l() ? -1 : 1
            },
            37: function() {
                return l() ? 1 : -1
            },
            go: function(e) {
                var t = i.item.highlight
                  , n = new Date(t.year,t.month,t.date + e);
                i.set("highlight", n, {
                    interval: e
                }),
                this.render()
            }
        },
        e.on("render", function() {
            e.$root.find("." + t.klass.selectMonth).on("change", function() {
                var i = this.value;
                i && (e.set("highlight", [e.get("view").year, i, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectMonth).trigger("focus"))
            }),
            e.$root.find("." + t.klass.selectYear).on("change", function() {
                var i = this.value;
                i && (e.set("highlight", [i, e.get("view").month, e.get("highlight").date]),
                e.$root.find("." + t.klass.selectYear).trigger("focus"))
            })
        }, 1).on("open", function() {
            var n = "";
            i.disabled(i.get("now")) && (n = ":not(." + t.klass.buttonToday + ")"),
            e.$root.find("button" + n + ", select").attr("disabled", !1)
        }, 1).on("close", function() {
            e.$root.find("button, select").attr("disabled", !0)
        }, 1)
    }
    var n = e._;
    i.prototype.set = function(e, t, i) {
        var n = this
          , a = n.item;
        return null === t ? ("clear" == e && (e = "select"),
        a[e] = t,
        n) : (a["enable" == e ? "disable" : "flip" == e ? "enable" : e] = n.queue[e].split(" ").map(function(a) {
            return t = n[a](e, t, i)
        }).pop(),
        "select" == e ? n.set("highlight", a.select, i) : "highlight" == e ? n.set("view", a.highlight, i) : e.match(/^(flip|min|max|disable|enable)$/) && (a.select && n.disabled(a.select) && n.set("select", a.select, i),
        a.highlight && n.disabled(a.highlight) && n.set("highlight", a.highlight, i)),
        n)
    }
    ,
    i.prototype.get = function(e) {
        return this.item[e]
    }
    ,
    i.prototype.create = function(e, i, a) {
        var r, o = this;
        return i = void 0 === i ? e : i,
        i == -1 / 0 || i == 1 / 0 ? r = i : t.isPlainObject(i) && n.isInteger(i.pick) ? i = i.obj : t.isArray(i) ? (i = new Date(i[0],i[1],i[2]),
        i = n.isDate(i) ? i : o.create().obj) : i = n.isInteger(i) || n.isDate(i) ? o.normalize(new Date(i), a) : o.now(e, i, a),
        {
            year: r || i.getFullYear(),
            month: r || i.getMonth(),
            date: r || i.getDate(),
            day: r || i.getDay(),
            obj: r || i,
            pick: r || i.getTime()
        }
    }
    ,
    i.prototype.createRange = function(e, i) {
        var a = this
          , r = function(e) {
            return !0 === e || t.isArray(e) || n.isDate(e) ? a.create(e) : e
        };
        return n.isInteger(e) || (e = r(e)),
        n.isInteger(i) || (i = r(i)),
        n.isInteger(e) && t.isPlainObject(i) ? e = [i.year, i.month, i.date + e] : n.isInteger(i) && t.isPlainObject(e) && (i = [e.year, e.month, e.date + i]),
        {
            from: r(e),
            to: r(i)
        }
    }
    ,
    i.prototype.withinRange = function(e, t) {
        return e = this.createRange(e.from, e.to),
        t.pick >= e.from.pick && t.pick <= e.to.pick
    }
    ,
    i.prototype.overlapRanges = function(e, t) {
        var i = this;
        return e = i.createRange(e.from, e.to),
        t = i.createRange(t.from, t.to),
        i.withinRange(e, t.from) || i.withinRange(e, t.to) || i.withinRange(t, e.from) || i.withinRange(t, e.to)
    }
    ,
    i.prototype.now = function(e, t, i) {
        return t = new Date,
        i && i.rel && t.setDate(t.getDate() + i.rel),
        this.normalize(t, i)
    }
    ,
    i.prototype.navigate = function(e, i, n) {
        var a, r, o, s, l = t.isArray(i), c = t.isPlainObject(i), u = this.item.view;
        if (l || c) {
            for (c ? (r = i.year,
            o = i.month,
            s = i.date) : (r = +i[0],
            o = +i[1],
            s = +i[2]),
            n && n.nav && u && u.month !== o && (r = u.year,
            o = u.month),
            a = new Date(r,o + (n && n.nav ? n.nav : 0),1),
            r = a.getFullYear(),
            o = a.getMonth(); new Date(r,o,s).getMonth() !== o; )
                s -= 1;
            i = [r, o, s]
        }
        return i
    }
    ,
    i.prototype.normalize = function(e) {
        return e.setHours(0, 0, 0, 0),
        e
    }
    ,
    i.prototype.measure = function(e, t) {
        var i = this;
        return t ? "string" == typeof t ? t = i.parse(e, t) : n.isInteger(t) && (t = i.now(e, t, {
            rel: t
        })) : t = "min" == e ? -1 / 0 : 1 / 0,
        t
    }
    ,
    i.prototype.viewset = function(e, t) {
        return this.create([t.year, t.month, 1])
    }
    ,
    i.prototype.validate = function(e, i, a) {
        var r, o, s, l, c = this, u = i, d = a && a.interval ? a.interval : 1, p = -1 === c.item.enable, h = c.item.min, f = c.item.max, m = p && c.item.disable.filter(function(e) {
            if (t.isArray(e)) {
                var a = c.create(e).pick;
                a < i.pick ? r = !0 : a > i.pick && (o = !0)
            }
            return n.isInteger(e)
        }).length;
        if ((!a || !a.nav) && (!p && c.disabled(i) || p && c.disabled(i) && (m || r || o) || !p && (i.pick <= h.pick || i.pick >= f.pick)))
            for (p && !m && (!o && d > 0 || !r && d < 0) && (d *= -1); c.disabled(i) && (Math.abs(d) > 1 && (i.month < u.month || i.month > u.month) && (i = u,
            d = d > 0 ? 1 : -1),
            i.pick <= h.pick ? (s = !0,
            d = 1,
            i = c.create([h.year, h.month, h.date + (i.pick === h.pick ? 0 : -1)])) : i.pick >= f.pick && (l = !0,
            d = -1,
            i = c.create([f.year, f.month, f.date + (i.pick === f.pick ? 0 : 1)])),
            !s || !l); )
                i = c.create([i.year, i.month, i.date + d]);
        return i
    }
    ,
    i.prototype.disabled = function(e) {
        var i = this
          , a = i.item.disable.filter(function(a) {
            return n.isInteger(a) ? e.day === (i.settings.firstDay ? a : a - 1) % 7 : t.isArray(a) || n.isDate(a) ? e.pick === i.create(a).pick : t.isPlainObject(a) ? i.withinRange(a, e) : void 0
        });
        return a = a.length && !a.filter(function(e) {
            return t.isArray(e) && "inverted" == e[3] || t.isPlainObject(e) && e.inverted
        }).length,
        -1 === i.item.enable ? !a : a || e.pick < i.item.min.pick || e.pick > i.item.max.pick
    }
    ,
    i.prototype.parse = function(e, t, i) {
        var a = this
          , r = {};
        return t && "string" == typeof t ? (i && i.format || (i = i || {},
        i.format = a.settings.format),
        a.formats.toArray(i.format).map(function(e) {
            var i = a.formats[e]
              , o = i ? n.trigger(i, a, [t, r]) : e.replace(/^!/, "").length;
            i && (r[e] = t.substr(0, o)),
            t = t.substr(o)
        }),
        [r.yyyy || r.yy, +(r.mm || r.m) - 1, r.dd || r.d]) : t
    }
    ,
    i.prototype.formats = function() {
        function e(e, t, i) {
            var n = e.match(/\w+/)[0];
            return i.mm || i.m || (i.m = t.indexOf(n) + 1),
            n.length
        }
        function t(e) {
            return e.match(/\w+/)[0].length
        }
        return {
            d: function(e, t) {
                return e ? n.digits(e) : t.date
            },
            dd: function(e, t) {
                return e ? 2 : n.lead(t.date)
            },
            ddd: function(e, i) {
                return e ? t(e) : this.settings.weekdaysShort[i.day]
            },
            dddd: function(e, i) {
                return e ? t(e) : this.settings.weekdaysFull[i.day]
            },
            m: function(e, t) {
                return e ? n.digits(e) : t.month + 1
            },
            mm: function(e, t) {
                return e ? 2 : n.lead(t.month + 1)
            },
            mmm: function(t, i) {
                var n = this.settings.monthsShort;
                return t ? e(t, n, i) : n[i.month]
            },
            mmmm: function(t, i) {
                var n = this.settings.monthsFull;
                return t ? e(t, n, i) : n[i.month]
            },
            yy: function(e, t) {
                return e ? 2 : ("" + t.year).slice(2)
            },
            yyyy: function(e, t) {
                return e ? 4 : t.year
            },
            toArray: function(e) {
                return e.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g)
            },
            toString: function(e, t) {
                var i = this;
                return i.formats.toArray(e).map(function(e) {
                    return n.trigger(i.formats[e], i, [0, t]) || e.replace(/^!/, "")
                }).join("")
            }
        }
    }(),
    i.prototype.isDateExact = function(e, i) {
        var a = this;
        return n.isInteger(e) && n.isInteger(i) || "boolean" == typeof e && "boolean" == typeof i ? e === i : (n.isDate(e) || t.isArray(e)) && (n.isDate(i) || t.isArray(i)) ? a.create(e).pick === a.create(i).pick : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && (a.isDateExact(e.from, i.from) && a.isDateExact(e.to, i.to))
    }
    ,
    i.prototype.isDateOverlap = function(e, i) {
        var a = this
          , r = a.settings.firstDay ? 1 : 0;
        return n.isInteger(e) && (n.isDate(i) || t.isArray(i)) ? (e = e % 7 + r) === a.create(i).day + 1 : n.isInteger(i) && (n.isDate(e) || t.isArray(e)) ? (i = i % 7 + r) === a.create(e).day + 1 : !(!t.isPlainObject(e) || !t.isPlainObject(i)) && a.overlapRanges(e, i)
    }
    ,
    i.prototype.flipEnable = function(e) {
        var t = this.item;
        t.enable = e || (-1 == t.enable ? 1 : -1)
    }
    ,
    i.prototype.deactivate = function(e, i) {
        var a = this
          , r = a.item.disable.slice(0);
        return "flip" == i ? a.flipEnable() : !1 === i ? (a.flipEnable(1),
        r = []) : !0 === i ? (a.flipEnable(-1),
        r = []) : i.map(function(e) {
            for (var i, o = 0; o < r.length; o += 1)
                if (a.isDateExact(e, r[o])) {
                    i = !0;
                    break
                }
            i || (n.isInteger(e) || n.isDate(e) || t.isArray(e) || t.isPlainObject(e) && e.from && e.to) && r.push(e)
        }),
        r
    }
    ,
    i.prototype.activate = function(e, i) {
        var a = this
          , r = a.item.disable
          , o = r.length;
        return "flip" == i ? a.flipEnable() : !0 === i ? (a.flipEnable(1),
        r = []) : !1 === i ? (a.flipEnable(-1),
        r = []) : i.map(function(e) {
            var i, s, l, c;
            for (l = 0; l < o; l += 1) {
                if (s = r[l],
                a.isDateExact(s, e)) {
                    i = r[l] = null,
                    c = !0;
                    break
                }
                if (a.isDateOverlap(s, e)) {
                    t.isPlainObject(e) ? (e.inverted = !0,
                    i = e) : t.isArray(e) ? (i = e,
                    i[3] || i.push("inverted")) : n.isDate(e) && (i = [e.getFullYear(), e.getMonth(), e.getDate(), "inverted"]);
                    break
                }
            }
            if (i)
                for (l = 0; l < o; l += 1)
                    if (a.isDateExact(r[l], e)) {
                        r[l] = null;
                        break
                    }
            if (c)
                for (l = 0; l < o; l += 1)
                    if (a.isDateOverlap(r[l], e)) {
                        r[l] = null;
                        break
                    }
            i && r.push(i)
        }),
        r.filter(function(e) {
            return null != e
        })
    }
    ,
    i.prototype.nodes = function(e) {
        var t = this
          , i = t.settings
          , a = t.item
          , r = a.now
          , o = a.select
          , s = a.highlight
          , l = a.view
          , c = a.disable
          , u = a.min
          , d = a.max
          , p = function(e, t) {
            return i.firstDay && (e.push(e.shift()),
            t.push(t.shift())),
            n.node("thead", n.node("tr", n.group({
                min: 0,
                max: 6,
                i: 1,
                node: "th",
                item: function(n) {
                    return [e[n], i.klass.weekdays, 'scope=col title="' + t[n] + '"']
                }
            })))
        }((i.showWeekdaysFull ? i.weekdaysFull : i.weekdaysLetter).slice(0), i.weekdaysFull.slice(0))
          , h = function(e) {
            return n.node("div", " ", i.klass["nav" + (e ? "Next" : "Prev")] + (e && l.year >= d.year && l.month >= d.month || !e && l.year <= u.year && l.month <= u.month ? " " + i.klass.navDisabled : ""), "data-nav=" + (e || -1) + " " + n.ariaAttr({
                role: "button",
                controls: t.$node[0].id + "_table"
            }) + ' title="' + (e ? i.labelMonthNext : i.labelMonthPrev) + '"')
        }
          , f = function(a) {
            var r = i.showMonthsShort ? i.monthsShort : i.monthsFull;
            return "short_months" == a && (r = i.monthsShort),
            i.selectMonths && void 0 == a ? n.node("select", n.group({
                min: 0,
                max: 11,
                i: 1,
                node: "option",
                item: function(e) {
                    return [r[e], 0, "value=" + e + (l.month == e ? " selected" : "") + (l.year == u.year && e < u.month || l.year == d.year && e > d.month ? " disabled" : "")]
                }
            }), i.klass.selectMonth + " browser-default", (e ? "" : "disabled") + " " + n.ariaAttr({
                controls: t.$node[0].id + "_table"
            }) + ' title="' + i.labelMonthSelect + '"') : "short_months" == a ? null != o ? n.node("div", r[o.month]) : n.node("div", r[l.month]) : n.node("div", r[l.month], i.klass.month)
        }
          , m = function(a) {
            var r = l.year
              , o = !0 === i.selectYears ? 5 : ~~(i.selectYears / 2);
            if (o) {
                var s = u.year
                  , c = d.year
                  , p = r - o
                  , h = r + o;
                if (s > p && (h += s - p,
                p = s),
                c < h) {
                    var f = p - s
                      , m = h - c;
                    p -= f > m ? m : f,
                    h = c
                }
                if (i.selectYears && void 0 == a)
                    return n.node("select", n.group({
                        min: p,
                        max: h,
                        i: 1,
                        node: "option",
                        item: function(e) {
                            return [e, 0, "value=" + e + (r == e ? " selected" : "")]
                        }
                    }), i.klass.selectYear + " browser-default", (e ? "" : "disabled") + " " + n.ariaAttr({
                        controls: t.$node[0].id + "_table"
                    }) + ' title="' + i.labelYearSelect + '"')
            }
            return "raw" == a ? n.node("div", r) : n.node("div", r, i.klass.year)
        };
        return createDayLabel = function() {
            return null != o ? n.node("div", o.date) : n.node("div", r.date)
        }
        ,
        createWeekdayLabel = function() {
            var e;
            return e = null != o ? o.day : r.day,
            i.weekdaysFull[e]
        }
        ,
        n.node("div", n.node("div", createWeekdayLabel(), "picker__weekday-display") + n.node("div", f("short_months"), i.klass.month_display) + n.node("div", createDayLabel(), i.klass.day_display) + n.node("div", m("raw"), i.klass.year_display), i.klass.date_display) + n.node("div", n.node("div", (i.selectYears,
        f() + m() + h() + h(1)), i.klass.header) + n.node("table", p + n.node("tbody", n.group({
            min: 0,
            max: 5,
            i: 1,
            node: "tr",
            item: function(e) {
                var a = i.firstDay && 0 === t.create([l.year, l.month, 1]).day ? -7 : 0;
                return [n.group({
                    min: 7 * e - l.day + a + 1,
                    max: function() {
                        return this.min + 7 - 1
                    },
                    i: 1,
                    node: "td",
                    item: function(e) {
                        e = t.create([l.year, l.month, e + (i.firstDay ? 1 : 0)]);
                        var a = o && o.pick == e.pick
                          , p = s && s.pick == e.pick
                          , h = c && t.disabled(e) || e.pick < u.pick || e.pick > d.pick
                          , f = n.trigger(t.formats.toString, t, [i.format, e]);
                        return [n.node("div", e.date, function(t) {
                            return t.push(l.month == e.month ? i.klass.infocus : i.klass.outfocus),
                            r.pick == e.pick && t.push(i.klass.now),
                            a && t.push(i.klass.selected),
                            p && t.push(i.klass.highlighted),
                            h && t.push(i.klass.disabled),
                            t.join(" ")
                        }([i.klass.day]), "data-pick=" + e.pick + " " + n.ariaAttr({
                            role: "gridcell",
                            label: f,
                            selected: !(!a || t.$node.val() !== f) || null,
                            activedescendant: !!p || null,
                            disabled: !!h || null
                        })), "", n.ariaAttr({
                            role: "presentation"
                        })]
                    }
                })]
            }
        })), i.klass.table, 'id="' + t.$node[0].id + '_table" ' + n.ariaAttr({
            role: "grid",
            controls: t.$node[0].id,
            readonly: !0
        })), i.klass.calendar_container) + n.node("div", n.node("button", i.today, "btn-flat picker__today", "type=button data-pick=" + r.pick + (e && !t.disabled(r) ? "" : " disabled") + " " + n.ariaAttr({
            controls: t.$node[0].id
        })) + n.node("button", i.clear, "btn-flat picker__clear", "type=button data-clear=1" + (e ? "" : " disabled") + " " + n.ariaAttr({
            controls: t.$node[0].id
        })) + n.node("button", i.close, "btn-flat picker__close", "type=button data-close=true " + (e ? "" : " disabled") + " " + n.ariaAttr({
            controls: t.$node[0].id
        })), i.klass.footer)
    }
    ,
    i.defaults = function(e) {
        return {
            labelMonthNext: "Next month",
            labelMonthPrev: "Previous month",
            labelMonthSelect: "Select a month",
            labelYearSelect: "Select a year",
            monthsFull: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdaysFull: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysLetter: ["S", "M", "T", "W", "T", "F", "S"],
            today: "Today",
            clear: "Clear",
            close: "Close",
            format: "d mmmm, yyyy",
            klass: {
                table: e + "table",
                header: e + "header",
                date_display: e + "date-display",
                day_display: e + "day-display",
                month_display: e + "month-display",
                year_display: e + "year-display",
                calendar_container: e + "calendar-container",
                navPrev: e + "nav--prev",
                navNext: e + "nav--next",
                navDisabled: e + "nav--disabled",
                month: e + "month",
                year: e + "year",
                selectMonth: e + "select--month",
                selectYear: e + "select--year",
                weekdays: e + "weekday",
                day: e + "day",
                disabled: e + "day--disabled",
                selected: e + "day--selected",
                highlighted: e + "day--highlighted",
                now: e + "day--today",
                infocus: e + "day--infocus",
                outfocus: e + "day--outfocus",
                footer: e + "footer",
                buttonClear: e + "button--clear",
                buttonToday: e + "button--today",
                buttonClose: e + "button--close"
            }
        }
    }(e.klasses().picker + "__"),
    e.extend("pickadate", i)
}),
function(e) {
    function t() {
        var t = +e(this).attr("data-length")
          , i = +e(this).val().length
          , n = i <= t;
        e(this).parent().find('span[class="character-counter"]').html(i + "/" + t),
        a(n, e(this))
    }
    function i(t) {
        var i = t.parent().find('span[class="character-counter"]');
        i.length || (i = e("<span/>").addClass("character-counter").css("float", "right").css("font-size", "12px").css("height", 1),
        t.parent().append(i))
    }
    function n() {
        e(this).parent().find('span[class="character-counter"]').html("")
    }
    function a(e, t) {
        var i = t.hasClass("invalid");
        e && i ? t.removeClass("invalid") : e || i || (t.removeClass("valid"),
        t.addClass("invalid"))
    }
    e.fn.characterCounter = function() {
        return this.each(function() {
            var a = e(this);
            a.parent().find('span[class="character-counter"]').length || void 0 !== a.attr("data-length") && (a.on("input", t),
            a.on("focus", t),
            a.on("blur", n),
            i(a))
        })
    }
    ,
    e(document).ready(function() {
        e("input, textarea").characterCounter()
    })
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            var i = {
                duration: 200,
                dist: -100,
                shift: 0,
                padding: 0,
                fullWidth: !1,
                indicators: !1,
                noWrap: !1,
                onCycleTo: null
            };
            t = e.extend(i, t);
            var n = Materialize.objectSelectorString(e(this));
            return this.each(function(i) {
                function a(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
                }
                function r(e) {
                    return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
                }
                function o(e) {
                    return e >= C ? e % C : e < 0 ? o(C + e % C) : e
                }
                function s(i) {
                    P = !0,
                    j.hasClass("scrolling") || j.addClass("scrolling"),
                    null != q && window.clearTimeout(q),
                    q = window.setTimeout(function() {
                        P = !1,
                        j.removeClass("scrolling")
                    }, t.duration);
                    var n, a, r, s, l, c, u, d = b;
                    if (w = "number" == typeof i ? i : w,
                    b = Math.floor((w + T / 2) / T),
                    r = w - b * T,
                    s = r < 0 ? 1 : -1,
                    l = -s * r * 2 / T,
                    a = C >> 1,
                    t.fullWidth ? u = "translateX(0)" : (u = "translateX(" + (j[0].clientWidth - g) / 2 + "px) ",
                    u += "translateY(" + (j[0].clientHeight - v) / 2 + "px)"),
                    R) {
                        var p = b % C
                          , h = N.find(".indicator-item.active");
                        h.index() !== p && (h.removeClass("active"),
                        N.find(".indicator-item").eq(p).addClass("active"))
                    }
                    for ((!t.noWrap || b >= 0 && b < C) && (c = m[o(b)],
                    e(c).hasClass("active") || (j.find(".carousel-item").removeClass("active"),
                    e(c).addClass("active")),
                    c.style[L] = u + " translateX(" + -r / 2 + "px) translateX(" + s * t.shift * l * n + "px) translateZ(" + t.dist * l + "px)",
                    c.style.zIndex = 0,
                    t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l,
                    c.style.opacity = tweenedOpacity,
                    c.style.display = "block"),
                    n = 1; n <= a; ++n)
                        t.fullWidth ? (zTranslation = t.dist,
                        tweenedOpacity = n === a && r < 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * n + l * s),
                        tweenedOpacity = 1 - .2 * (2 * n + l * s)),
                        (!t.noWrap || b + n < C) && (c = m[o(b + n)],
                        c.style[L] = u + " translateX(" + (t.shift + (T * n - r) / 2) + "px) translateZ(" + zTranslation + "px)",
                        c.style.zIndex = -n,
                        c.style.opacity = tweenedOpacity,
                        c.style.display = "block"),
                        t.fullWidth ? (zTranslation = t.dist,
                        tweenedOpacity = n === a && r > 0 ? 1 - l : 1) : (zTranslation = t.dist * (2 * n - l * s),
                        tweenedOpacity = 1 - .2 * (2 * n - l * s)),
                        (!t.noWrap || b - n >= 0) && (c = m[o(b - n)],
                        c.style[L] = u + " translateX(" + (-t.shift + (-T * n - r) / 2) + "px) translateZ(" + zTranslation + "px)",
                        c.style.zIndex = -n,
                        c.style.opacity = tweenedOpacity,
                        c.style.display = "block");
                    if ((!t.noWrap || b >= 0 && b < C) && (c = m[o(b)],
                    c.style[L] = u + " translateX(" + -r / 2 + "px) translateX(" + s * t.shift * l + "px) translateZ(" + t.dist * l + "px)",
                    c.style.zIndex = 0,
                    t.fullWidth ? tweenedOpacity = 1 : tweenedOpacity = 1 - .2 * l,
                    c.style.opacity = tweenedOpacity,
                    c.style.display = "block"),
                    d !== b && "function" == typeof t.onCycleTo) {
                        var f = j.find(".carousel-item").eq(o(b));
                        t.onCycleTo.call(this, f, O)
                    }
                }
                function l() {
                    var e, t, i, n;
                    e = Date.now(),
                    t = e - D,
                    D = e,
                    i = w - I,
                    I = w,
                    n = 1e3 * i / (1 + t),
                    M = .8 * n + .2 * M
                }
                function c() {
                    var e, i;
                    E && (e = Date.now() - D,
                    i = E * Math.exp(-e / t.duration),
                    i > 2 || i < -2 ? (s(z - i),
                    requestAnimationFrame(c)) : s(z))
                }
                function u(i) {
                    if (O)
                        return i.preventDefault(),
                        i.stopPropagation(),
                        !1;
                    if (!t.fullWidth) {
                        var n = e(i.target).closest(".carousel-item").index();
                        0 !== b % C - n && (i.preventDefault(),
                        i.stopPropagation()),
                        d(n)
                    }
                }
                function d(e) {
                    var i = b % C - e;
                    t.noWrap || (i < 0 ? Math.abs(i + C) < Math.abs(i) && (i += C) : i > 0 && Math.abs(i - C) < i && (i -= C)),
                    i < 0 ? j.trigger("carouselNext", [Math.abs(i)]) : i > 0 && j.trigger("carouselPrev", [i])
                }
                function p(e) {
                    e.preventDefault(),
                    x = !0,
                    O = !1,
                    $ = !1,
                    S = a(e),
                    k = r(e),
                    M = E = 0,
                    I = w,
                    D = Date.now(),
                    clearInterval(A),
                    A = setInterval(l, 100)
                }
                function h(e) {
                    var t, i;
                    if (x)
                        if (t = a(e),
                        y = r(e),
                        i = S - t,
                        Math.abs(k - y) < 30 && !$)
                            (i > 2 || i < -2) && (O = !0,
                            S = t,
                            s(w + i));
                        else {
                            if (O)
                                return e.preventDefault(),
                                e.stopPropagation(),
                                !1;
                            $ = !0
                        }
                    if (O)
                        return e.preventDefault(),
                        e.stopPropagation(),
                        !1
                }
                function f(e) {
                    if (x)
                        return x = !1,
                        clearInterval(A),
                        z = w,
                        (M > 10 || M < -10) && (E = .9 * M,
                        z = w + E),
                        z = Math.round(z / T) * T,
                        t.noWrap && (z >= T * (C - 1) ? z = T * (C - 1) : z < 0 && (z = 0)),
                        E = z - w,
                        D = Date.now(),
                        requestAnimationFrame(c),
                        O && (e.preventDefault(),
                        e.stopPropagation()),
                        !1
                }
                var m, g, v, w, b, x, T, C, S, k, E, z, M, P, L, I, D, A, O, $, H = n + i, N = e('<ul class="indicators"></ul>'), q = null, j = e(this), R = j.attr("data-indicators") || t.indicators;
                if (t.fullWidth && (t.dist = 0,
                function() {
                    var t = j.find(".carousel-item img").first();
                    if (t.length)
                        t.prop("complete") ? j.css("height", t.height()) : t.on("load", function() {
                            j.css("height", e(this).height())
                        });
                    else {
                        var i = j.find(".carousel-item").first().height();
                        j.css("height", i)
                    }
                }(),
                R && j.find(".carousel-fixed-item").addClass("with-indicators")),
                j.hasClass("initialized"))
                    return e(window).trigger("resize"),
                    e(this).trigger("carouselNext", [1e-6]),
                    !0;
                j.addClass("initialized"),
                x = !1,
                w = z = 0,
                m = [],
                g = j.find(".carousel-item").first().innerWidth(),
                v = j.find(".carousel-item").first().innerHeight(),
                T = 2 * g + t.padding,
                j.find(".carousel-item").each(function(t) {
                    if (m.push(e(this)[0]),
                    R) {
                        var i = e('<li class="indicator-item"></li>');
                        0 === t && i.addClass("active"),
                        i.click(function(t) {
                            t.stopPropagation(),
                            d(e(this).index())
                        }),
                        N.append(i)
                    }
                }),
                R && j.append(N),
                C = m.length,
                L = "transform",
                ["webkit", "Moz", "O", "ms"].every(function(e) {
                    var t = e + "Transform";
                    return void 0 === document.body.style[t] || (L = t,
                    !1)
                }),
                e(window).off("resize.carousel-" + H).on("resize.carousel-" + H, function() {
                    t.fullWidth ? (g = j.find(".carousel-item").first().innerWidth(),
                    v = j.find(".carousel-item").first().innerHeight(),
                    T = 2 * g + t.padding,
                    w = 2 * b * g,
                    z = w) : s()
                }),
                function() {
                    void 0 !== window.ontouchstart && (j[0].addEventListener("touchstart", p),
                    j[0].addEventListener("touchmove", h),
                    j[0].addEventListener("touchend", f)),
                    j[0].addEventListener("mousedown", p),
                    j[0].addEventListener("mousemove", h),
                    j[0].addEventListener("mouseup", f),
                    j[0].addEventListener("mouseleave", f),
                    j[0].addEventListener("click", u)
                }(),
                s(w),
                e(this).on("carouselNext", function(e, t) {
                    void 0 === t && (t = 1),
                    z = T * Math.round(w / T) + T * t,
                    w !== z && (E = z - w,
                    D = Date.now(),
                    requestAnimationFrame(c))
                }),
                e(this).on("carouselPrev", function(e, t) {
                    void 0 === t && (t = 1),
                    z = T * Math.round(w / T) - T * t,
                    w !== z && (E = z - w,
                    D = Date.now(),
                    requestAnimationFrame(c))
                }),
                e(this).on("carouselSet", function(e, t) {
                    void 0 === t && (t = 0),
                    d(t)
                })
            })
        },
        next: function(t) {
            e(this).trigger("carouselNext", [t])
        },
        prev: function(t) {
            e(this).trigger("carouselPrev", [t])
        },
        set: function(t) {
            e(this).trigger("carouselSet", [t])
        }
    };
    e.fn.carousel = function(i) {
        return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.carousel") : t.init.apply(this, arguments)
    }
}(jQuery),
function(e) {
    var t = {
        init: function(t) {
            return this.each(function() {
                var i = e("#" + e(this).attr("data-activates"))
                  , n = (e("body"),
                e(this))
                  , a = n.parent(".tap-target-wrapper")
                  , r = a.find(".tap-target-wave")
                  , o = a.find(".tap-target-origin")
                  , s = n.find(".tap-target-content");
                a.length || (a = n.wrap(e('<div class="tap-target-wrapper"></div>')).parent()),
                s.length || (s = e('<div class="tap-target-content"></div>'),
                n.append(s)),
                r.length || (r = e('<div class="tap-target-wave"></div>'),
                o.length || (o = i.clone(!0, !0),
                o.addClass("tap-target-origin"),
                o.removeAttr("id"),
                o.removeAttr("style"),
                r.append(o)),
                a.append(r));
                var l = function() {
                    a.is(".open") && (a.removeClass("open"),
                    o.off("click.tapTarget"),
                    e(document).off("click.tapTarget"),
                    e(window).off("resize.tapTarget"))
                }
                  , c = function() {
                    var t = "fixed" === i.css("position");
                    if (!t)
                        for (var o = i.parents(), l = 0; l < o.length && !(t = "fixed" == e(o[l]).css("position")); l++)
                            ;
                    var c = i.outerWidth()
                      , u = i.outerHeight()
                      , d = t ? i.offset().top - e(document).scrollTop() : i.offset().top
                      , p = t ? i.offset().left - e(document).scrollLeft() : i.offset().left
                      , h = e(window).width()
                      , f = e(window).height()
                      , m = h / 2
                      , g = f / 2
                      , v = p <= m
                      , y = p > m
                      , w = d <= g
                      , b = d > g
                      , x = p >= .25 * h && p <= .75 * h
                      , T = n.outerWidth()
                      , C = n.outerHeight()
                      , S = d + u / 2 - C / 2
                      , k = p + c / 2 - T / 2
                      , E = t ? "fixed" : "absolute"
                      , z = x ? T : T / 2 + c
                      , M = C / 2
                      , P = w ? C / 2 : 0
                      , L = v && !x ? T / 2 - c : 0
                      , I = c
                      , D = b ? "bottom" : "top"
                      , A = 2 * c
                      , O = A
                      , $ = C / 2 - O / 2
                      , H = T / 2 - A / 2
                      , N = {};
                    N.top = w ? S : "",
                    N.right = y ? h - k - T : "",
                    N.bottom = b ? f - S - C : "",
                    N.left = v ? k : "",
                    N.position = E,
                    a.css(N),
                    s.css({
                        width: z,
                        height: M,
                        top: P,
                        right: 0,
                        bottom: 0,
                        left: L,
                        padding: I,
                        verticalAlign: D
                    }),
                    r.css({
                        top: $,
                        left: H,
                        width: A,
                        height: O
                    })
                };
                "open" == t && (c(),
                function() {
                    a.is(".open") || (a.addClass("open"),
                    setTimeout(function() {
                        o.off("click.tapTarget").on("click.tapTarget", function(e) {
                            l(),
                            o.off("click.tapTarget")
                        }),
                        e(document).off("click.tapTarget").on("click.tapTarget", function(t) {
                            l(),
                            e(document).off("click.tapTarget")
                        });
                        var t = Materialize.throttle(function() {
                            c()
                        }, 200);
                        e(window).off("resize.tapTarget").on("resize.tapTarget", t)
                    }, 0))
                }()),
                "close" == t && l()
            })
        },
        open: function() {},
        close: function() {}
    };
    e.fn.tapTarget = function(i) {
        if (t[i] || "object" == typeof i)
            return t.init.apply(this, arguments);
        e.error("Method " + i + " does not exist on jQuery.tap-target")
    }
}(jQuery),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(i) {
        return t(i, e, e.document)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), e, e.document) : t(jQuery, e, e.document)
}("undefined" != typeof window ? window : this, function(e, t, i, n) {
    "use strict";
    function a(i, n, a, r) {
        if (v === i && (a = !1),
        !0 === k)
            return !0;
        if (h[i]) {
            if (T = !1,
            a && D.before(i, f),
            y = 1,
            L = p[i],
            !1 === M && v > i && !1 === r && m[i] && (y = parseInt(f[i].outerHeight() / b.height()),
            L = parseInt(p[i]) + (f[i].outerHeight() - b.height())),
            D.updateHash && D.sectionName && (!0 !== M || 0 !== i))
                if (history.pushState)
                    try {
                        history.replaceState(null, null, h[i])
                    } catch (e) {
                        t.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.")
                    }
                else
                    t.location.hash = h[i];
            if (M && (D.afterRender(),
            M = !1),
            v = i,
            n)
                e(D.target).stop().scrollTop(L),
                a && D.after(i, f);
            else {
                if (C = !0,
                e().velocity ? e(D.target).stop().velocity("scroll", {
                    duration: D.scrollSpeed,
                    easing: D.easing,
                    offset: L,
                    mobileHA: !1
                }) : e(D.target).stop().animate({
                    scrollTop: L
                }, D.scrollSpeed, D.easing),
                t.location.hash.length && D.sectionName && t.console)
                    try {
                        e(t.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.")
                    } catch (e) {}
                e(D.target).promise().done(function() {
                    C = !1,
                    M = !1,
                    a && D.after(i, f)
                })
            }
        }
    }
    function r(e) {
        function t(t) {
            for (var i = 0, n = e.slice(Math.max(e.length - t, 1)), a = 0; a < n.length; a++)
                i += n[a];
            return Math.ceil(i / t)
        }
        return t(10) >= t(70)
    }
    function o(e, t) {
        for (var i = h.length; i >= 0; i--)
            "string" == typeof e ? h[i] === e && (g = i,
            a(i, t, !0, !0)) : i === e && (g = i,
            a(i, t, !0, !0))
    }
    var s, l, c, u, d, p = [], h = [], f = [], m = [], g = 0, v = 0, y = 1, w = !1, b = e(t), x = b.scrollTop(), T = !1, C = !1, S = !1, k = !1, E = [], z = (new Date).getTime(), M = !0, P = !1, L = 0, I = "onwheel"in i ? "wheel" : i.onmousewheel !== n ? "mousewheel" : "DOMMouseScroll", D = {
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: !0,
        target: "html,body",
        standardScrollElements: !1,
        setHeights: !0,
        overflowScroll: !0,
        updateHash: !0,
        touchScroll: !0,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    }, A = function(n) {
        function o(t) {
            e().velocity ? e(D.target).stop().velocity("scroll", {
                duration: D.scrollSpeed,
                easing: D.easing,
                offset: t,
                mobileHA: !1
            }) : e(D.target).stop().animate({
                scrollTop: t
            }, D.scrollSpeed, D.easing)
        }
        function v(t) {
            t && (x = b.scrollTop());
            var i = D.section;
            m = [],
            D.interstitialSection.length && (i += "," + D.interstitialSection),
            !1 === D.scrollbars && (D.overflowScroll = !1),
            e(i).each(function(t) {
                var i = e(this);
                D.setHeights ? i.is(D.interstitialSection) ? m[t] = !1 : i.css("height", "auto").outerHeight() < b.height() || "hidden" === i.css("overflow") ? (i.css({
                    height: b.height()
                }),
                m[t] = !1) : (i.css({
                    height: i.height()
                }),
                D.overflowScroll ? m[t] = !0 : m[t] = !1) : i.outerHeight() < b.height() || !1 === D.overflowScroll ? m[t] = !1 : m[t] = !0
            }),
            t && b.scrollTop(x)
        }
        function M(i, n) {
            var r = D.section;
            D.interstitialSection.length && (r += "," + D.interstitialSection),
            p = [],
            h = [],
            f = [],
            e(r).each(function(i) {
                var n = e(this);
                p[i] = i > 0 ? parseInt(n.offset().top) + D.offset : parseInt(n.offset().top),
                D.sectionName && n.data(D.sectionName) ? h[i] = "#" + n.data(D.sectionName).toString().replace(/ /g, "-") : !1 === n.is(D.interstitialSection) ? h[i] = "#" + (i + 1) : (h[i] = "#",
                i === e(r).length - 1 && i > 1 && (p[i] = p[i - 1] + (parseInt(e(e(r)[i - 1]).outerHeight()) - parseInt(e(t).height())) + parseInt(n.outerHeight()))),
                f[i] = n;
                try {
                    e(h[i]).length && t.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")
                } catch (e) {}
                t.location.hash === h[i] && (g = i,
                w = !0)
            }),
            !0 === i && a(g, !1, !1, !1)
        }
        function L() {
            return !(m[g] && (x = b.scrollTop()) > parseInt(p[g]))
        }
        function A() {
            return !(m[g] && (x = b.scrollTop()) < parseInt(p[g]) + (f[g].outerHeight() - b.height()) - 28)
        }
        P = !0,
        e.easing.easeOutExpo = function(e, t, i, n, a) {
            return t == a ? i + n : n * (1 - Math.pow(2, -10 * t / a)) + i
        }
        ,
        c = {
            handleMousedown: function() {
                return !0 === k || (T = !1,
                void (S = !1))
            },
            handleMouseup: function() {
                return !0 === k || (T = !0,
                void (S && c.calculateNearest(!1, !0)))
            },
            handleScroll: function() {
                return !0 === k || (s && clearTimeout(s),
                void (s = setTimeout(function() {
                    return S = !0,
                    !1 !== T && (T = !1,
                    void c.calculateNearest(!1, !0))
                }, 200)))
            },
            calculateNearest: function(e, t) {
                x = b.scrollTop();
                for (var i, n = 1, r = p.length, o = 0, s = Math.abs(p[0] - x); n < r; n++)
                    (i = Math.abs(p[n] - x)) < s && (s = i,
                    o = n);
                (A() && o > g || L()) && (g = o,
                a(o, e, t, !1))
            },
            wheelHandler: function(i) {
                if (!0 === k)
                    return !0;
                if (D.standardScrollElements && (e(i.target).is(D.standardScrollElements) || e(i.target).closest(D.standardScrollElements).length))
                    return !0;
                m[g] || i.preventDefault();
                var n = (new Date).getTime();
                i = i || t.event;
                var o = i.originalEvent.wheelDelta || -i.originalEvent.deltaY || -i.originalEvent.detail
                  , s = Math.max(-1, Math.min(1, o));
                if (E.length > 149 && E.shift(),
                E.push(Math.abs(o)),
                n - z > 200 && (E = []),
                z = n,
                C)
                    return !1;
                if (s < 0) {
                    if (g < p.length - 1 && A()) {
                        if (!r(E))
                            return !1;
                        i.preventDefault(),
                        g++,
                        C = !0,
                        a(g, !1, !0, !1)
                    }
                } else if (s > 0 && g > 0 && L()) {
                    if (!r(E))
                        return !1;
                    i.preventDefault(),
                    g--,
                    C = !0,
                    a(g, !1, !0, !1)
                }
            },
            keyHandler: function(e) {
                return !0 === k || !0 !== C && void (38 == e.keyCode || 33 == e.keyCode ? g > 0 && L() && (e.preventDefault(),
                g--,
                a(g, !1, !0, !1)) : 40 != e.keyCode && 34 != e.keyCode || g < p.length - 1 && A() && (e.preventDefault(),
                g++,
                a(g, !1, !0, !1)))
            },
            init: function() {
                D.scrollbars ? (b.on("mousedown", c.handleMousedown),
                b.on("mouseup", c.handleMouseup),
                b.on("scroll", c.handleScroll)) : e("body").css({
                    overflow: "hidden"
                }),
                b.on(I, c.wheelHandler),
                b.on("keydown", c.keyHandler)
            }
        },
        u = {
            touches: {
                touchstart: {
                    y: -1,
                    x: -1
                },
                touchmove: {
                    y: -1,
                    x: -1
                },
                touchend: !1,
                direction: "undetermined"
            },
            options: {
                distance: 30,
                timeGap: 800,
                timeStamp: (new Date).getTime()
            },
            touchHandler: function(t) {
                if (!0 === k)
                    return !0;
                if (D.standardScrollElements && (e(t.target).is(D.standardScrollElements) || e(t.target).closest(D.standardScrollElements).length))
                    return !0;
                var i;
                if (void 0 !== t && void 0 !== t.touches)
                    switch (i = t.touches[0],
                    t.type) {
                    case "touchstart":
                        u.touches.touchstart.y = i.pageY,
                        u.touches.touchmove.y = -1,
                        u.touches.touchstart.x = i.pageX,
                        u.touches.touchmove.x = -1,
                        u.options.timeStamp = (new Date).getTime(),
                        u.touches.touchend = !1;
                    case "touchmove":
                        u.touches.touchmove.y = i.pageY,
                        u.touches.touchmove.x = i.pageX,
                        u.touches.touchstart.y !== u.touches.touchmove.y && Math.abs(u.touches.touchstart.y - u.touches.touchmove.y) > Math.abs(u.touches.touchstart.x - u.touches.touchmove.x) && (t.preventDefault(),
                        u.touches.direction = "y",
                        u.options.timeStamp + u.options.timeGap < (new Date).getTime() && 0 == u.touches.touchend && (u.touches.touchend = !0,
                        u.touches.touchstart.y > -1 && Math.abs(u.touches.touchmove.y - u.touches.touchstart.y) > u.options.distance && (u.touches.touchstart.y < u.touches.touchmove.y ? u.up() : u.down())));
                        break;
                    case "touchend":
                        !1 === u.touches[t.type] && (u.touches[t.type] = !0,
                        u.touches.touchstart.y > -1 && u.touches.touchmove.y > -1 && "y" === u.touches.direction && (Math.abs(u.touches.touchmove.y - u.touches.touchstart.y) > u.options.distance && (u.touches.touchstart.y < u.touches.touchmove.y ? u.up() : u.down()),
                        u.touches.touchstart.y = -1,
                        u.touches.touchstart.x = -1,
                        u.touches.direction = "undetermined"))
                    }
            },
            down: function() {
                g < p.length - 1 && (A() && g < p.length - 1 ? (g++,
                a(g, !1, !0, !1)) : Math.floor(f[g].height() / b.height()) > y ? (o(parseInt(p[g]) + b.height() * y),
                y += 1) : o(parseInt(p[g]) + (f[g].outerHeight() - b.height())))
            },
            up: function() {
                g >= 0 && (L() && g > 0 ? (g--,
                a(g, !1, !0, !1)) : y > 2 ? (y -= 1,
                o(parseInt(p[g]) + b.height() * y)) : (y = 1,
                o(parseInt(p[g]))))
            },
            init: function() {
                i.addEventListener && D.touchScroll && (i.addEventListener("touchstart", u.touchHandler, !1),
                i.addEventListener("touchmove", u.touchHandler, !1),
                i.addEventListener("touchend", u.touchHandler, !1))
            }
        },
        d = {
            refresh: function(e, t) {
                clearTimeout(l),
                l = setTimeout(function() {
                    v(!0),
                    M(t, !1),
                    e && D.afterResize()
                }, 400)
            },
            handleUpdate: function() {
                d.refresh(!1, !1)
            },
            handleResize: function() {
                d.refresh(!0, !1)
            },
            handleOrientation: function() {
                d.refresh(!0, !0)
            }
        },
        D = e.extend(D, n),
        v(!1),
        M(!1, !0),
        !0 === w ? a(g, !1, !0, !0) : setTimeout(function() {
            c.calculateNearest(!0, !1)
        }, 200),
        p.length && (c.init(),
        u.init(),
        b.on("resize", d.handleResize),
        i.addEventListener && t.addEventListener("orientationchange", d.handleOrientation, !1))
    };
    return A.move = function(t) {
        return t !== n && (t.originalEvent && (t = e(this).attr("href")),
        void o(t, !1))
    }
    ,
    A.instantMove = function(e) {
        return e !== n && void o(e, !0)
    }
    ,
    A.next = function() {
        g < h.length && (g += 1,
        a(g, !1, !0, !0))
    }
    ,
    A.previous = function() {
        g > 0 && (g -= 1,
        a(g, !1, !0, !0))
    }
    ,
    A.instantNext = function() {
        g < h.length && (g += 1,
        a(g, !0, !0, !0))
    }
    ,
    A.instantPrevious = function() {
        g > 0 && (g -= 1,
        a(g, !0, !0, !0))
    }
    ,
    A.destroy = function() {
        return !!P && (D.setHeights && e(D.section).each(function() {
            e(this).css("height", "auto")
        }),
        b.off("resize", d.handleResize),
        D.scrollbars && (b.off("mousedown", c.handleMousedown),
        b.off("mouseup", c.handleMouseup),
        b.off("scroll", c.handleScroll)),
        b.off(I, c.wheelHandler),
        b.off("keydown", c.keyHandler),
        i.addEventListener && D.touchScroll && (i.removeEventListener("touchstart", u.touchHandler, !1),
        i.removeEventListener("touchmove", u.touchHandler, !1),
        i.removeEventListener("touchend", u.touchHandler, !1)),
        p = [],
        h = [],
        f = [],
        void (m = []))
    }
    ,
    A.update = function() {
        return !!P && void d.handleUpdate()
    }
    ,
    A.current = function() {
        return f[g]
    }
    ,
    A.disable = function() {
        k = !0
    }
    ,
    A.enable = function() {
        k = !1,
        P && c.calculateNearest(!1, !1)
    }
    ,
    A.isDisabled = function() {
        return k
    }
    ,
    A.setOptions = function(i) {
        return !!P && void ("object" == typeof i ? (D = e.extend(D, i),
        d.handleUpdate()) : t.console && console.warn("Scrollify warning: setOptions expects an object."))
    }
    ,
    e.scrollify = A,
    A
}),
function(e, t, i, n) {
    function a(t, i) {
        var r = this;
        "object" == typeof i && (delete i.refresh,
        delete i.render,
        e.extend(this, i)),
        this.$element = e(t),
        !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var o = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (o.length < 1 && o.push("center"),
        1 == o.length && o.push(o[0]),
        "top" != o[0] && "bottom" != o[0] && "left" != o[1] && "right" != o[1] || (o = [o[1], o[0]]),
        this.positionX != n && (o[0] = this.positionX.toLowerCase()),
        this.positionY != n && (o[1] = this.positionY.toLowerCase()),
        r.positionX = o[0],
        r.positionY = o[1],
        "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)),
        "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)),
        this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"),
        navigator.userAgent.match(/(iPod|iPhone|iPad)/))
            return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        if (navigator.userAgent.match(/(Android)/))
            return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
                backgroundImage: "url(" + this.imageSrc + ")",
                backgroundSize: "cover",
                backgroundPosition: this.position
            }),
            this;
        this.$mirror = e("<div />").prependTo("body");
        var s = this.$element.find(">.parallax-slider")
          , l = !1;
        0 == s.length ? this.$slider = e("<img />").prependTo(this.$mirror) : (this.$slider = s.prependTo(this.$mirror),
        l = !0),
        this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }),
        this.$slider.addClass("parallax-slider").one("load", function() {
            r.naturalHeight && r.naturalWidth || (r.naturalHeight = this.naturalHeight || this.height || 1,
            r.naturalWidth = this.naturalWidth || this.width || 1),
            r.aspectRatio = r.naturalWidth / r.naturalHeight,
            a.isSetup || a.setup(),
            a.sliders.push(r),
            a.isFresh = !1,
            a.requestRender()
        }),
        l || (this.$slider[0].src = this.imageSrc),
        (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || s.length > 0) && this.$slider.trigger("load")
    }
    function r(n) {
        return this.each(function() {
            var r = e(this)
              , o = "object" == typeof n && n;
            this == t || this == i || r.is("body") ? a.configure(o) : r.data("px.parallax") ? "object" == typeof n && e.extend(r.data("px.parallax"), o) : (o = e.extend({}, r.data(), o),
            r.data("px.parallax", new a(this,o))),
            "string" == typeof n && ("destroy" == n ? a.destroy(this) : a[n]())
        })
    }
    !function() {
        for (var e = 0, i = ["ms", "moz", "webkit", "o"], n = 0; n < i.length && !t.requestAnimationFrame; ++n)
            t.requestAnimationFrame = t[i[n] + "RequestAnimationFrame"],
            t.cancelAnimationFrame = t[i[n] + "CancelAnimationFrame"] || t[i[n] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function(i) {
            var n = (new Date).getTime()
              , a = Math.max(0, 16 - (n - e))
              , r = t.setTimeout(function() {
                i(n + a)
            }, a);
            return e = n + a,
            r
        }
        ),
        t.cancelAnimationFrame || (t.cancelAnimationFrame = function(e) {
            clearTimeout(e)
        }
        )
    }(),
    e.extend(a.prototype, {
        speed: .2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(),
            this.boxHeight = this.$element.outerHeight() + 2 * this.bleed,
            this.boxOffsetTop = this.$element.offset().top - this.bleed,
            this.boxOffsetLeft = this.$element.offset().left,
            this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var e = a.winHeight
              , t = a.docHeight
              , i = Math.min(this.boxOffsetTop, t - e)
              , n = Math.max(this.boxOffsetTop + this.boxHeight - e, 0)
              , r = this.boxHeight + (i - n) * (1 - this.speed) | 0
              , o = (this.boxOffsetTop - i) * (1 - this.speed) | 0;
            if (r * this.aspectRatio >= this.boxWidth) {
                this.imageWidth = r * this.aspectRatio | 0,
                this.imageHeight = r,
                this.offsetBaseTop = o;
                var s = this.imageWidth - this.boxWidth;
                "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -s : isNaN(this.positionX) ? this.offsetLeft = -s / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -s)
            } else {
                this.imageWidth = this.boxWidth,
                this.imageHeight = this.boxWidth / this.aspectRatio | 0,
                this.offsetLeft = 0;
                var s = this.imageHeight - r;
                "top" == this.positionY ? this.offsetBaseTop = o : "bottom" == this.positionY ? this.offsetBaseTop = o - s : isNaN(this.positionY) ? this.offsetBaseTop = o - s / 2 | 0 : this.offsetBaseTop = o + Math.max(this.positionY, -s)
            }
        },
        render: function() {
            var e = a.scrollTop
              , t = a.scrollLeft
              , i = this.overScrollFix ? a.overScroll : 0
              , n = e + a.winHeight;
            this.boxOffsetBottom > e && this.boxOffsetTop <= n ? (this.visibility = "visible",
            this.mirrorTop = this.boxOffsetTop - e,
            this.mirrorLeft = this.boxOffsetLeft - t,
            this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden",
            this.$mirror.css({
                transform: "translate3d(0px, 0px, 0px)",
                visibility: this.visibility,
                top: this.mirrorTop - i,
                left: this.mirrorLeft,
                height: this.boxHeight,
                width: this.boxWidth
            }),
            this.$slider.css({
                transform: "translate3d(0px, 0px, 0px)",
                position: "absolute",
                top: this.offsetTop,
                left: this.offsetLeft,
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            })
        }
    }),
    e.extend(a, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1 << 30,
        docWidth: 1 << 30,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            if (!this.isReady) {
                var n = e(i)
                  , r = e(t)
                  , o = function() {
                    a.winHeight = r.height(),
                    a.winWidth = r.width(),
                    a.docHeight = n.height(),
                    a.docWidth = n.width()
                }
                  , s = function() {
                    var e = r.scrollTop()
                      , t = a.docHeight - a.winHeight
                      , i = a.docWidth - a.winWidth;
                    a.scrollTop = Math.max(0, Math.min(t, e)),
                    a.scrollLeft = Math.max(0, Math.min(i, r.scrollLeft())),
                    a.overScroll = Math.max(e - t, Math.min(e, 0))
                };
                r.on("resize.px.parallax load.px.parallax", function() {
                    o(),
                    a.isFresh = !1,
                    a.requestRender()
                }).on("scroll.px.parallax load.px.parallax", function() {
                    s(),
                    a.requestRender()
                }),
                o(),
                s(),
                this.isReady = !0
            }
        },
        configure: function(t) {
            "object" == typeof t && (delete t.refresh,
            delete t.render,
            e.extend(this.prototype, t))
        },
        refresh: function() {
            e.each(this.sliders, function() {
                this.refresh()
            }),
            this.isFresh = !0
        },
        render: function() {
            this.isFresh || this.refresh(),
            e.each(this.sliders, function() {
                this.render()
            })
        },
        requestRender: function() {
            var e = this;
            this.isBusy || (this.isBusy = !0,
            t.requestAnimationFrame(function() {
                e.render(),
                e.isBusy = !1
            }))
        },
        destroy: function(i) {
            var n, r = e(i).data("px.parallax");
            for (r.$mirror.remove(),
            n = 0; n < this.sliders.length; n += 1)
                this.sliders[n] == r && this.sliders.splice(n, 1);
            e(i).data("px.parallax", !1),
            0 === this.sliders.length && (e(t).off("scroll.px.parallax resize.px.parallax load.px.parallax"),
            this.isReady = !1,
            a.isSetup = !1)
        }
    });
    var o = e.fn.parallax;
    e.fn.parallax = r,
    e.fn.parallax.Constructor = a,
    e.fn.parallax.noConflict = function() {
        return e.fn.parallax = o,
        this
    }
    ,
    e(i).on("ready.px.parallax.data-api", function() {
        e('[data-parallax="scroll"]').parallax()
    })
}(jQuery, window, document),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = !1
      , i = !1
      , n = 0
      , a = 2e3
      , r = 0
      , o = ["webkit", "ms", "moz", "o"]
      , s = window.requestAnimationFrame || !1
      , l = window.cancelAnimationFrame || !1;
    if (!s)
        for (var c in o) {
            var u = o[c];
            if (s = window[u + "RequestAnimationFrame"]) {
                l = window[u + "CancelAnimationFrame"] || window[u + "CancelRequestAnimationFrame"];
                break
            }
        }
    var d = window.MutationObserver || window.WebKitMutationObserver || !1
      , p = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "6px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        railhoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: .3,
        rtlmode: "auto",
        cursordragontouch: !1,
        oneaxismousemode: "auto",
        scriptpath: function() {
            var e = document.getElementsByTagName("script")
              , e = e.length ? e[e.length - 1].src.split("?")[0] : "";
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }(),
        preventmultitouchscrolling: !0,
        disablemutationobserver: !1
    }
      , h = !1
      , f = function() {
        if (h)
            return h;
        var e = document.createElement("DIV")
          , t = e.style
          , i = navigator.userAgent
          , n = navigator.platform
          , a = {
            haspointerlock: "pointerLockElement"in document || "webkitPointerLockElement"in document || "mozPointerLockElement"in document
        };
        a.isopera = "opera"in window,
        a.isopera12 = a.isopera && "getUserMedia"in navigator,
        a.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
        a.isie = "all"in document && "attachEvent"in e && !a.isopera,
        a.isieold = a.isie && !("msInterpolationMode"in t),
        a.isie7 = a.isie && !a.isieold && (!("documentMode"in document) || 7 == document.documentMode),
        a.isie8 = a.isie && "documentMode"in document && 8 == document.documentMode,
        a.isie9 = a.isie && "performance"in window && 9 == document.documentMode,
        a.isie10 = a.isie && "performance"in window && 10 == document.documentMode,
        a.isie11 = "msRequestFullscreen"in e && 11 <= document.documentMode,
        a.isieedge12 = navigator.userAgent.match(/Edge\/12\./),
        a.isieedge = "msOverflowStyle"in e,
        a.ismodernie = a.isie11 || a.isieedge,
        a.isie9mobile = /iemobile.9/i.test(i),
        a.isie9mobile && (a.isie9 = !1),
        a.isie7mobile = !a.isie9mobile && a.isie7 && /iemobile/i.test(i),
        a.ismozilla = "MozAppearance"in t,
        a.iswebkit = "WebkitAppearance"in t,
        a.ischrome = "chrome"in window,
        a.ischrome38 = a.ischrome && "touchAction"in t,
        a.ischrome22 = !a.ischrome38 && a.ischrome && a.haspointerlock,
        a.ischrome26 = !a.ischrome38 && a.ischrome && "transition"in t,
        a.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window,
        a.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints),
        a.hasmstouch = !a.hasw3ctouch && (window.MSPointerEvent || !1),
        a.ismac = /^mac$/i.test(n),
        a.isios = a.cantouch && /iphone|ipad|ipod/i.test(n),
        a.isios4 = a.isios && !("seal"in Object),
        a.isios7 = a.isios && "webkitHidden"in document,
        a.isios8 = a.isios && "hidden"in document,
        a.isandroid = /android/i.test(i),
        a.haseventlistener = "addEventListener"in e,
        a.trstyle = !1,
        a.hastransform = !1,
        a.hastranslate3d = !1,
        a.transitionstyle = !1,
        a.hastransition = !1,
        a.transitionend = !1,
        n = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"];
        for (i = 0; i < n.length; i++)
            if (void 0 !== t[n[i]]) {
                a.trstyle = n[i];
                break
            }
        a.hastransform = !!a.trstyle,
        a.hastransform && (t[a.trstyle] = "translate3d(1px,2px,3px)",
        a.hastranslate3d = /translate3d/.test(t[a.trstyle])),
        a.transitionstyle = !1,
        a.prefixstyle = "",
        a.transitionend = !1;
        for (var n = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "), r = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), o = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), i = 0; i < n.length; i++)
            if (n[i]in t) {
                a.transitionstyle = n[i],
                a.prefixstyle = r[i],
                a.transitionend = o[i];
                break
            }
        a.ischrome26 && (a.prefixstyle = r[1]),
        a.hastransition = a.transitionstyle;
        e: {
            for (i = ["grab", "-webkit-grab", "-moz-grab"],
            (a.ischrome && !a.ischrome38 || a.isie) && (i = []),
            n = 0; n < i.length; n++)
                if (r = i[n],
                t.cursor = r,
                t.cursor == r) {
                    t = r;
                    break e
                }
            t = "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
        }
        return a.cursorgrabvalue = t,
        a.hasmousecapture = "setCapture"in e,
        a.hasMutationObserver = !1 !== d,
        h = a
    }
      , m = function(o, c) {
        function u() {
            var e = w.doc.css(T.trstyle);
            return !(!e || "matrix" != e.substr(0, 6)) && e.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/)
        }
        function h() {
            var e = w.win;
            if ("zIndex"in e)
                return e.zIndex();
            for (; 0 < e.length && 9 != e[0].nodeType; ) {
                var t = e.css("zIndex");
                if (!isNaN(t) && 0 != t)
                    return parseInt(t);
                e = e.parent()
            }
            return !1
        }
        function m(e, t, i) {
            return t = e.css(t),
            e = parseFloat(t),
            isNaN(e) ? (e = E[t] || 0,
            i = 3 == e ? i ? w.win.outerHeight() - w.win.innerHeight() : w.win.outerWidth() - w.win.innerWidth() : 1,
            w.isie8 && e && (e += 1),
            i ? e : 0) : e
        }
        function v(e, t, i, n) {
            w._bind(e, t, function(n) {
                n = n || window.event;
                var a = {
                    original: n,
                    target: n.target || n.srcElement,
                    type: "wheel",
                    deltaMode: "MozMousePixelScroll" == n.type ? 0 : 1,
                    deltaX: 0,
                    deltaZ: 0,
                    preventDefault: function() {
                        return n.preventDefault ? n.preventDefault() : n.returnValue = !1,
                        !1
                    },
                    stopImmediatePropagation: function() {
                        n.stopImmediatePropagation ? n.stopImmediatePropagation() : n.cancelBubble = !0
                    }
                };
                return "mousewheel" == t ? (n.wheelDeltaX && (a.deltaX = -.025 * n.wheelDeltaX),
                n.wheelDeltaY && (a.deltaY = -.025 * n.wheelDeltaY),
                a.deltaY || a.deltaX || (a.deltaY = -.025 * n.wheelDelta)) : a.deltaY = n.detail,
                i.call(e, a)
            }, n)
        }
        function y(e, t, i) {
            var n, a;
            if (0 == e.deltaMode ? (n = -Math.floor(w.opt.mousescrollstep / 54 * e.deltaX),
            a = -Math.floor(w.opt.mousescrollstep / 54 * e.deltaY)) : 1 == e.deltaMode && (n = -Math.floor(e.deltaX * w.opt.mousescrollstep),
            a = -Math.floor(e.deltaY * w.opt.mousescrollstep)),
            t && w.opt.oneaxismousemode && 0 == n && a && (n = a,
            a = 0,
            i && (0 > n ? w.getScrollLeft() >= w.page.maxw : 0 >= w.getScrollLeft()) && (a = n,
            n = 0)),
            w.isrtlmode && (n = -n),
            n && (w.scrollmom && w.scrollmom.stop(),
            w.lastdeltax += n,
            w.debounced("mousewheelx", function() {
                var e = w.lastdeltax;
                w.lastdeltax = 0,
                w.rail.drag || w.doScrollLeftBy(e)
            }, 15)),
            a) {
                if (w.opt.nativeparentscrolling && i && !w.ispage && !w.zoomactive)
                    if (0 > a) {
                        if (w.getScrollTop() >= w.page.maxh)
                            return !0
                    } else if (0 >= w.getScrollTop())
                        return !0;
                w.scrollmom && w.scrollmom.stop(),
                w.lastdeltay += a,
                w.synched("mousewheely", function() {
                    var e = w.lastdeltay;
                    w.lastdeltay = 0,
                    w.rail.drag || w.doScrollBy(e)
                }, 15)
            }
            return e.stopImmediatePropagation(),
            e.preventDefault()
        }
        var w = this;
        if (this.version = "3.6.8",
        this.name = "nicescroll",
        this.me = c,
        this.opt = {
            doc: e("body"),
            win: !1
        },
        e.extend(this.opt, p),
        this.opt.snapbackspeed = 80,
        o)
            for (var b in w.opt)
                void 0 !== o[b] && (w.opt[b] = o[b]);
        if (w.opt.disablemutationobserver && (d = !1),
        this.iddoc = (this.doc = w.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "",
        this.ispage = /^BODY|HTML/.test(w.opt.win ? w.opt.win[0].nodeName : this.doc[0].nodeName),
        this.haswrapper = !1 !== w.opt.win,
        this.win = w.opt.win || (this.ispage ? e(window) : this.doc),
        this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win,
        this.body = e("body"),
        this.iframe = this.isfixed = this.viewport = !1,
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName,
        this.istextarea = "TEXTAREA" == this.win[0].nodeName,
        this.forcescreen = !1,
        this.canshowonmouseevent = "scroll" != w.opt.autohidemode,
        this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1,
        this.scroll = {
            x: 0,
            y: 0
        },
        this.scrollratio = {
            x: 0,
            y: 0
        },
        this.cursorheight = 20,
        this.scrollvaluemax = 0,
        "auto" == this.opt.rtlmode) {
            b = this.win[0] == window ? this.body : this.win;
            var x = b.css("writing-mode") || b.css("-webkit-writing-mode") || b.css("-ms-writing-mode") || b.css("-moz-writing-mode");
            "horizontal-tb" == x || "lr-tb" == x || "" == x ? (this.isrtlmode = "rtl" == b.css("direction"),
            this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == x || "tb" == x || "tb-rl" == x || "rl-tb" == x,
            this.isvertical = "vertical-rl" == x || "tb" == x || "tb-rl" == x)
        } else
            this.isrtlmode = !0 === this.opt.rtlmode,
            this.isvertical = !1;
        this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1;
        do {
            this.id = "ascrail" + a++
        } while (document.getElementById(this.id));this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1,
        this.visibility = !0,
        this.hidden = this.locked = this.railslocked = !1,
        this.cursoractive = !0,
        this.wheelprevented = !1,
        this.overflowx = w.opt.overflowx,
        this.overflowy = w.opt.overflowy,
        this.nativescrollingarea = !1,
        this.checkarea = 0,
        this.events = [],
        this.saved = {},
        this.delaylist = {},
        this.synclist = {},
        this.lastdeltay = this.lastdeltax = 0,
        this.detected = f();
        var T = e.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = T.hastransform && w.opt.hwacceleration) && w.haswrapper,
        this.hasreversehr = !!this.isrtlmode && (this.isvertical ? !(T.iswebkit || T.isie || T.isie11) : !(T.iswebkit || T.isie && !T.isie10 && !T.isie11)),
        this.istouchcapable = !1,
        T.cantouch || !T.hasw3ctouch && !T.hasmstouch ? !T.cantouch || T.isios || T.isandroid || !T.iswebkit && !T.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0,
        w.opt.enablemouselockapi || (T.hasmousecapture = !1,
        T.haspointerlock = !1),
        this.debounced = function(e, t, i) {
            w && (w.delaylist[e] || (t.call(w),
            w.delaylist[e] = {
                h: s(function() {
                    w.delaylist[e].fn.call(w),
                    w.delaylist[e] = !1
                }, i)
            }),
            w.delaylist[e].fn = t)
        }
        ;
        var C = !1;
        this.synched = function(e, t) {
            return w.synclist[e] = t,
            function() {
                C || (s(function() {
                    if (w) {
                        C = !1;
                        for (var e in w.synclist) {
                            var t = w.synclist[e];
                            t && t.call(w),
                            w.synclist[e] = !1
                        }
                    }
                }),
                C = !0)
            }(),
            e
        }
        ,
        this.unsynched = function(e) {
            w.synclist[e] && (w.synclist[e] = !1)
        }
        ,
        this.css = function(e, t) {
            for (var i in t)
                w.saved.css.push([e, i, e.css(i)]),
                e.css(i, t[i])
        }
        ,
        this.scrollTop = function(e) {
            return void 0 === e ? w.getScrollTop() : w.setScrollTop(e)
        }
        ,
        this.scrollLeft = function(e) {
            return void 0 === e ? w.getScrollLeft() : w.setScrollLeft(e)
        }
        ;
        var S = function(e, t, i, n, a, r, o) {
            this.st = e,
            this.ed = t,
            this.spd = i,
            this.p1 = n || 0,
            this.p2 = a || 1,
            this.p3 = r || 0,
            this.p4 = o || 1,
            this.ts = (new Date).getTime(),
            this.df = this.ed - this.st
        };
        if (S.prototype = {
            B2: function(e) {
                return 3 * e * e * (1 - e)
            },
            B3: function(e) {
                return 3 * e * (1 - e) * (1 - e)
            },
            B4: function(e) {
                return (1 - e) * (1 - e) * (1 - e)
            },
            getNow: function() {
                var e = 1 - ((new Date).getTime() - this.ts) / this.spd
                  , t = this.B2(e) + this.B3(e) + this.B4(e);
                return 0 > e ? this.ed : this.st + Math.round(this.df * t)
            },
            update: function(e, t) {
                return this.st = this.getNow(),
                this.ed = e,
                this.spd = t,
                this.ts = (new Date).getTime(),
                this.df = this.ed - this.st,
                this
            }
        },
        this.ishwscroll) {
            this.doc.translate = {
                x: 0,
                y: 0,
                tx: "0px",
                ty: "0px"
            },
            T.hastranslate3d && T.isios && this.doc.css("-webkit-backface-visibility", "hidden"),
            this.getScrollTop = function(e) {
                if (!e) {
                    if (e = u())
                        return 16 == e.length ? -e[13] : -e[5];
                    if (w.timerscroll && w.timerscroll.bz)
                        return w.timerscroll.bz.getNow()
                }
                return w.doc.translate.y
            }
            ,
            this.getScrollLeft = function(e) {
                if (!e) {
                    if (e = u())
                        return 16 == e.length ? -e[12] : -e[4];
                    if (w.timerscroll && w.timerscroll.bh)
                        return w.timerscroll.bh.getNow()
                }
                return w.doc.translate.x
            }
            ,
            this.notifyScrollEvent = function(e) {
                var t = document.createEvent("UIEvents");
                t.initUIEvent("scroll", !1, !0, window, 1),
                t.niceevent = !0,
                e.dispatchEvent(t)
            }
            ;
            var k = this.isrtlmode ? 1 : -1;
            T.hastranslate3d && w.opt.enabletranslate3d ? (this.setScrollTop = function(e, t) {
                w.doc.translate.y = e,
                w.doc.translate.ty = -1 * e + "px",
                w.doc.css(T.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0px)"),
                t || w.notifyScrollEvent(w.win[0])
            }
            ,
            this.setScrollLeft = function(e, t) {
                w.doc.translate.x = e,
                w.doc.translate.tx = e * k + "px",
                w.doc.css(T.trstyle, "translate3d(" + w.doc.translate.tx + "," + w.doc.translate.ty + ",0px)"),
                t || w.notifyScrollEvent(w.win[0])
            }
            ) : (this.setScrollTop = function(e, t) {
                w.doc.translate.y = e,
                w.doc.translate.ty = -1 * e + "px",
                w.doc.css(T.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"),
                t || w.notifyScrollEvent(w.win[0])
            }
            ,
            this.setScrollLeft = function(e, t) {
                w.doc.translate.x = e,
                w.doc.translate.tx = e * k + "px",
                w.doc.css(T.trstyle, "translate(" + w.doc.translate.tx + "," + w.doc.translate.ty + ")"),
                t || w.notifyScrollEvent(w.win[0])
            }
            )
        } else
            this.getScrollTop = function() {
                return w.docscroll.scrollTop()
            }
            ,
            this.setScrollTop = function(e) {
                return setTimeout(function() {
                    w && w.docscroll.scrollTop(e)
                }, 1)
            }
            ,
            this.getScrollLeft = function() {
                return w.hasreversehr ? w.detected.ismozilla ? w.page.maxw - Math.abs(w.docscroll.scrollLeft()) : w.page.maxw - w.docscroll.scrollLeft() : w.docscroll.scrollLeft()
            }
            ,
            this.setScrollLeft = function(e) {
                return setTimeout(function() {
                    if (w)
                        return w.hasreversehr && (e = w.detected.ismozilla ? -(w.page.maxw - e) : w.page.maxw - e),
                        w.docscroll.scrollLeft(e)
                }, 1)
            }
            ;
        this.getTarget = function(e) {
            return !!e && (e.target ? e.target : !!e.srcElement && e.srcElement)
        }
        ,
        this.hasParent = function(e, t) {
            if (!e)
                return !1;
            for (var i = e.target || e.srcElement || e || !1; i && i.id != t; )
                i = i.parentNode || !1;
            return !1 !== i
        }
        ;
        var E = {
            thin: 1,
            medium: 3,
            thick: 5
        };
        this.getDocumentScrollOffset = function() {
            return {
                top: window.pageYOffset || document.documentElement.scrollTop,
                left: window.pageXOffset || document.documentElement.scrollLeft
            }
        }
        ,
        this.getOffset = function() {
            if (w.isfixed) {
                var e = w.win.offset()
                  , t = w.getDocumentScrollOffset();
                return e.top -= t.top,
                e.left -= t.left,
                e
            }
            return e = w.win.offset(),
            w.viewport ? (t = w.viewport.offset(),
            {
                top: e.top - t.top,
                left: e.left - t.left
            }) : e
        }
        ,
        this.updateScrollBar = function(e) {
            var t, i, n;
            if (w.ishwscroll)
                w.rail.css({
                    height: w.win.innerHeight() - (w.opt.railpadding.top + w.opt.railpadding.bottom)
                }),
                w.railh && w.railh.css({
                    width: w.win.innerWidth() - (w.opt.railpadding.left + w.opt.railpadding.right)
                });
            else {
                var a = w.getOffset();
                t = a.top,
                i = a.left - (w.opt.railpadding.left + w.opt.railpadding.right),
                t += m(w.win, "border-top-width", !0),
                i += w.rail.align ? w.win.outerWidth() - m(w.win, "border-right-width") - w.rail.width : m(w.win, "border-left-width"),
                (n = w.opt.railoffset) && (n.top && (t += n.top),
                n.left && (i += n.left)),
                w.railslocked || w.rail.css({
                    top: t,
                    left: i,
                    height: (e ? e.h : w.win.innerHeight()) - (w.opt.railpadding.top + w.opt.railpadding.bottom)
                }),
                w.zoom && w.zoom.css({
                    top: t + 1,
                    left: 1 == w.rail.align ? i - 20 : i + w.rail.width + 4
                }),
                w.railh && !w.railslocked && (t = a.top,
                i = a.left,
                (n = w.opt.railhoffset) && (n.top && (t += n.top),
                n.left && (i += n.left)),
                e = w.railh.align ? t + m(w.win, "border-top-width", !0) + w.win.innerHeight() - w.railh.height : t + m(w.win, "border-top-width", !0),
                i += m(w.win, "border-left-width"),
                w.railh.css({
                    top: e - (w.opt.railpadding.top + w.opt.railpadding.bottom),
                    left: i,
                    width: w.railh.width
                }))
            }
        }
        ,
        this.doRailClick = function(e, t, i) {
            var n;
            w.railslocked || (w.cancelEvent(e),
            t ? (t = i ? w.doScrollLeft : w.doScrollTop,
            n = i ? (e.pageX - w.railh.offset().left - w.cursorwidth / 2) * w.scrollratio.x : (e.pageY - w.rail.offset().top - w.cursorheight / 2) * w.scrollratio.y,
            t(n)) : (t = i ? w.doScrollLeftBy : w.doScrollBy,
            n = i ? w.scroll.x : w.scroll.y,
            e = i ? e.pageX - w.railh.offset().left : e.pageY - w.rail.offset().top,
            i = i ? w.view.w : w.view.h,
            t(n >= e ? i : -i)))
        }
        ,
        w.hasanimationframe = s,
        w.hascancelanimationframe = l,
        w.hasanimationframe ? w.hascancelanimationframe || (l = function() {
            w.cancelAnimationFrame = !0
        }
        ) : (s = function(e) {
            return setTimeout(e, 15 - Math.floor(+new Date / 1e3) % 16)
        }
        ,
        l = clearTimeout),
        this.init = function() {
            if (w.saved.css = [],
            T.isie7mobile || T.isoperamini)
                return !0;
            T.hasmstouch && w.css(w.ispage ? e("html") : w.win, {
                _touchaction: "none"
            });
            var a = T.ismodernie || T.isie10 ? {
                "-ms-overflow-style": "none"
            } : {
                "overflow-y": "hidden"
            };
            if (w.zindex = "auto",
            w.zindex = w.ispage || "auto" != w.opt.zindex ? w.opt.zindex : h() || "auto",
            !w.ispage && "auto" != w.zindex && w.zindex > r && (r = w.zindex),
            w.isie && 0 == w.zindex && "auto" == w.opt.zindex && (w.zindex = "auto"),
            !w.ispage || !T.cantouch && !T.isieold && !T.isie9mobile) {
                var o = w.docscroll;
                w.ispage && (o = w.haswrapper ? w.win : w.doc),
                T.isie9mobile || w.css(o, a),
                w.ispage && T.isie7 && ("BODY" == w.doc[0].nodeName ? w.css(e("html"), {
                    "overflow-y": "hidden"
                }) : "HTML" == w.doc[0].nodeName && w.css(e("body"), a)),
                !T.isios || w.ispage || w.haswrapper || w.css(e("body"), {
                    "-webkit-overflow-scrolling": "touch"
                });
                var s = e(document.createElement("div"));
                s.css({
                    position: "relative",
                    top: 0,
                    float: "right",
                    width: w.opt.cursorwidth,
                    height: 0,
                    "background-color": w.opt.cursorcolor,
                    border: w.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": w.opt.cursorborderradius,
                    "-moz-border-radius": w.opt.cursorborderradius,
                    "border-radius": w.opt.cursorborderradius
                }),
                s.hborder = parseFloat(s.outerHeight() - s.innerHeight()),
                s.addClass("nicescroll-cursors"),
                w.cursor = s;
                var l = e(document.createElement("div"));
                l.attr("id", w.id),
                l.addClass("nicescroll-rails nicescroll-rails-vr");
                var c, u, p, f = ["left", "right", "top", "bottom"];
                for (p in f)
                    u = f[p],
                    (c = w.opt.railpadding[u]) ? l.css("padding-" + u, c + "px") : w.opt.railpadding[u] = 0;
                l.append(s),
                l.width = Math.max(parseFloat(w.opt.cursorwidth), s.outerWidth()),
                l.css({
                    width: l.width + "px",
                    zIndex: w.zindex,
                    background: w.opt.background,
                    cursor: "default"
                }),
                l.visibility = !0,
                l.scrollable = !0,
                l.align = "left" == w.opt.railalign ? 0 : 1,
                w.rail = l,
                s = w.rail.drag = !1,
                !w.opt.boxzoom || w.ispage || T.isieold || (s = document.createElement("div"),
                w.bind(s, "click", w.doZoom),
                w.bind(s, "mouseenter", function() {
                    w.zoom.css("opacity", w.opt.cursoropacitymax)
                }),
                w.bind(s, "mouseleave", function() {
                    w.zoom.css("opacity", w.opt.cursoropacitymin)
                }),
                w.zoom = e(s),
                w.zoom.css({
                    cursor: "pointer",
                    zIndex: w.zindex,
                    backgroundImage: "url(" + w.opt.scriptpath + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px"
                }),
                w.opt.dblclickzoom && w.bind(w.win, "dblclick", w.doZoom),
                T.cantouch && w.opt.gesturezoom && (w.ongesturezoom = function(e) {
                    return 1.5 < e.scale && w.doZoomIn(e),
                    .8 > e.scale && w.doZoomOut(e),
                    w.cancelEvent(e)
                }
                ,
                w.bind(w.win, "gestureend", w.ongesturezoom))),
                w.railh = !1;
                var m;
                if (w.opt.horizrailenabled && (w.css(o, {
                    overflowX: "hidden"
                }),
                s = e(document.createElement("div")),
                s.css({
                    position: "absolute",
                    top: 0,
                    height: w.opt.cursorwidth,
                    width: 0,
                    backgroundColor: w.opt.cursorcolor,
                    border: w.opt.cursorborder,
                    backgroundClip: "padding-box",
                    "-webkit-border-radius": w.opt.cursorborderradius,
                    "-moz-border-radius": w.opt.cursorborderradius,
                    "border-radius": w.opt.cursorborderradius
                }),
                T.isieold && s.css("overflow", "hidden"),
                s.wborder = parseFloat(s.outerWidth() - s.innerWidth()),
                s.addClass("nicescroll-cursors"),
                w.cursorh = s,
                m = e(document.createElement("div")),
                m.attr("id", w.id + "-hr"),
                m.addClass("nicescroll-rails nicescroll-rails-hr"),
                m.height = Math.max(parseFloat(w.opt.cursorwidth), s.outerHeight()),
                m.css({
                    height: m.height + "px",
                    zIndex: w.zindex,
                    background: w.opt.background
                }),
                m.append(s),
                m.visibility = !0,
                m.scrollable = !0,
                m.align = "top" == w.opt.railvalign ? 0 : 1,
                w.railh = m,
                w.railh.drag = !1),
                w.ispage ? (l.css({
                    position: "fixed",
                    top: 0,
                    height: "100%"
                }),
                l.align ? l.css({
                    right: 0
                }) : l.css({
                    left: 0
                }),
                w.body.append(l),
                w.railh && (m.css({
                    position: "fixed",
                    left: 0,
                    width: "100%"
                }),
                m.align ? m.css({
                    bottom: 0
                }) : m.css({
                    top: 0
                }),
                w.body.append(m))) : (w.ishwscroll ? ("static" == w.win.css("position") && w.css(w.win, {
                    position: "relative"
                }),
                o = "HTML" == w.win[0].nodeName ? w.body : w.win,
                e(o).scrollTop(0).scrollLeft(0),
                w.zoom && (w.zoom.css({
                    position: "absolute",
                    top: 1,
                    right: 0,
                    "margin-right": l.width + 4
                }),
                o.append(w.zoom)),
                l.css({
                    position: "absolute",
                    top: 0
                }),
                l.align ? l.css({
                    right: 0
                }) : l.css({
                    left: 0
                }),
                o.append(l),
                m && (m.css({
                    position: "absolute",
                    left: 0,
                    bottom: 0
                }),
                m.align ? m.css({
                    bottom: 0
                }) : m.css({
                    top: 0
                }),
                o.append(m))) : (w.isfixed = "fixed" == w.win.css("position"),
                o = w.isfixed ? "fixed" : "absolute",
                w.isfixed || (w.viewport = w.getViewport(w.win[0])),
                w.viewport && (w.body = w.viewport,
                0 == /fixed|absolute/.test(w.viewport.css("position")) && w.css(w.viewport, {
                    position: "relative"
                })),
                l.css({
                    position: o
                }),
                w.zoom && w.zoom.css({
                    position: o
                }),
                w.updateScrollBar(),
                w.body.append(l),
                w.zoom && w.body.append(w.zoom),
                w.railh && (m.css({
                    position: o
                }),
                w.body.append(m))),
                T.isios && w.css(w.win, {
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    "-webkit-touch-callout": "none"
                }),
                T.isie && w.opt.disableoutline && w.win.attr("hideFocus", "true"),
                T.iswebkit && w.opt.disableoutline && w.win.css("outline", "none")),
                !1 === w.opt.autohidemode ? (w.autohidedom = !1,
                w.rail.css({
                    opacity: w.opt.cursoropacitymax
                }),
                w.railh && w.railh.css({
                    opacity: w.opt.cursoropacitymax
                })) : !0 === w.opt.autohidemode || "leave" === w.opt.autohidemode ? (w.autohidedom = e().add(w.rail),
                T.isie8 && (w.autohidedom = w.autohidedom.add(w.cursor)),
                w.railh && (w.autohidedom = w.autohidedom.add(w.railh)),
                w.railh && T.isie8 && (w.autohidedom = w.autohidedom.add(w.cursorh))) : "scroll" == w.opt.autohidemode ? (w.autohidedom = e().add(w.rail),
                w.railh && (w.autohidedom = w.autohidedom.add(w.railh))) : "cursor" == w.opt.autohidemode ? (w.autohidedom = e().add(w.cursor),
                w.railh && (w.autohidedom = w.autohidedom.add(w.cursorh))) : "hidden" == w.opt.autohidemode && (w.autohidedom = !1,
                w.hide(),
                w.railslocked = !1),
                T.isie9mobile)
                    w.scrollmom = new g(w),
                    w.onmangotouch = function() {
                        var e = w.getScrollTop()
                          , t = w.getScrollLeft();
                        if (e == w.scrollmom.lastscrolly && t == w.scrollmom.lastscrollx)
                            return !0;
                        var i = e - w.mangotouch.sy
                          , n = t - w.mangotouch.sx;
                        if (0 != Math.round(Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2)))) {
                            var a = 0 > i ? -1 : 1
                              , r = 0 > n ? -1 : 1
                              , o = +new Date;
                            w.mangotouch.lazy && clearTimeout(w.mangotouch.lazy),
                            80 < o - w.mangotouch.tm || w.mangotouch.dry != a || w.mangotouch.drx != r ? (w.scrollmom.stop(),
                            w.scrollmom.reset(t, e),
                            w.mangotouch.sy = e,
                            w.mangotouch.ly = e,
                            w.mangotouch.sx = t,
                            w.mangotouch.lx = t,
                            w.mangotouch.dry = a,
                            w.mangotouch.drx = r,
                            w.mangotouch.tm = o) : (w.scrollmom.stop(),
                            w.scrollmom.update(w.mangotouch.sx - n, w.mangotouch.sy - i),
                            w.mangotouch.tm = o,
                            i = Math.max(Math.abs(w.mangotouch.ly - e), Math.abs(w.mangotouch.lx - t)),
                            w.mangotouch.ly = e,
                            w.mangotouch.lx = t,
                            2 < i && (w.mangotouch.lazy = setTimeout(function() {
                                w.mangotouch.lazy = !1,
                                w.mangotouch.dry = 0,
                                w.mangotouch.drx = 0,
                                w.mangotouch.tm = 0,
                                w.scrollmom.doMomentum(30)
                            }, 100)))
                        }
                    }
                    ,
                    l = w.getScrollTop(),
                    m = w.getScrollLeft(),
                    w.mangotouch = {
                        sy: l,
                        ly: l,
                        dry: 0,
                        sx: m,
                        lx: m,
                        drx: 0,
                        lazy: !1,
                        tm: 0
                    },
                    w.bind(w.docscroll, "scroll", w.onmangotouch);
                else {
                    if (T.cantouch || w.istouchcapable || w.opt.touchbehavior || T.hasmstouch) {
                        w.scrollmom = new g(w),
                        w.ontouchstart = function(t) {
                            if (t.pointerType && 2 != t.pointerType && "touch" != t.pointerType)
                                return !1;
                            if (w.hasmoving = !1,
                            !w.railslocked) {
                                var i;
                                if (T.hasmstouch)
                                    for (i = !!t.target && t.target; i; ) {
                                        var n = e(i).getNiceScroll();
                                        if (0 < n.length && n[0].me == w.me)
                                            break;
                                        if (0 < n.length)
                                            return !1;
                                        if ("DIV" == i.nodeName && i.id == w.id)
                                            break;
                                        i = !!i.parentNode && i.parentNode
                                    }
                                if (w.cancelScroll(),
                                (i = w.getTarget(t)) && /INPUT/i.test(i.nodeName) && /range/i.test(i.type))
                                    return w.stopPropagation(t);
                                if (!("clientX"in t) && "changedTouches"in t && (t.clientX = t.changedTouches[0].clientX,
                                t.clientY = t.changedTouches[0].clientY),
                                w.forcescreen && (n = t,
                                t = {
                                    original: t.original ? t.original : t
                                },
                                t.clientX = n.screenX,
                                t.clientY = n.screenY),
                                w.rail.drag = {
                                    x: t.clientX,
                                    y: t.clientY,
                                    sx: w.scroll.x,
                                    sy: w.scroll.y,
                                    st: w.getScrollTop(),
                                    sl: w.getScrollLeft(),
                                    pt: 2,
                                    dl: !1
                                },
                                w.ispage || !w.opt.directionlockdeadzone)
                                    w.rail.drag.dl = "f";
                                else {
                                    var n = e(window).width()
                                      , a = e(window).height()
                                      , a = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - a)
                                      , n = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - n);
                                    w.rail.drag.ck = !w.rail.scrollable && w.railh.scrollable ? 0 < a && "v" : !(!w.rail.scrollable || w.railh.scrollable) && (0 < n && "h"),
                                    w.rail.drag.ck || (w.rail.drag.dl = "f")
                                }
                                if (w.opt.touchbehavior && w.isiframe && T.isie && (n = w.win.position(),
                                w.rail.drag.x += n.left,
                                w.rail.drag.y += n.top),
                                w.hasmoving = !1,
                                w.lastmouseup = !1,
                                w.scrollmom.reset(t.clientX, t.clientY),
                                !T.cantouch && !this.istouchcapable && !t.pointerType) {
                                    if (!i || !/INPUT|SELECT|TEXTAREA/i.test(i.nodeName))
                                        return !w.ispage && T.hasmousecapture && i.setCapture(),
                                        w.opt.touchbehavior ? (i.onclick && !i._onclick && (i._onclick = i.onclick,
                                        i.onclick = function(e) {
                                            if (w.hasmoving)
                                                return !1;
                                            i._onclick.call(this, e)
                                        }
                                        ),
                                        w.cancelEvent(t)) : w.stopPropagation(t);
                                    /SUBMIT|CANCEL|BUTTON/i.test(e(i).attr("type")) && (pc = {
                                        tg: i,
                                        click: !1
                                    },
                                    w.preventclick = pc)
                                }
                            }
                        }
                        ,
                        w.ontouchend = function(e) {
                            if (!w.rail.drag)
                                return !0;
                            if (2 == w.rail.drag.pt) {
                                if (e.pointerType && 2 != e.pointerType && "touch" != e.pointerType)
                                    return !1;
                                if (w.scrollmom.doMomentum(),
                                w.rail.drag = !1,
                                w.hasmoving && (w.lastmouseup = !0,
                                w.hideCursor(),
                                T.hasmousecapture && document.releaseCapture(),
                                !T.cantouch))
                                    return w.cancelEvent(e)
                            } else if (1 == w.rail.drag.pt)
                                return w.onmouseup(e)
                        }
                        ;
                        var v = w.opt.touchbehavior && w.isiframe && !T.hasmousecapture;
                        w.ontouchmove = function(t, i) {
                            if (!w.rail.drag || t.targetTouches && w.opt.preventmultitouchscrolling && 1 < t.targetTouches.length || t.pointerType && 2 != t.pointerType && "touch" != t.pointerType)
                                return !1;
                            if (2 == w.rail.drag.pt) {
                                if (T.cantouch && T.isios && void 0 === t.original)
                                    return !0;
                                if (w.hasmoving = !0,
                                w.preventclick && !w.preventclick.click && (w.preventclick.click = w.preventclick.tg.onclick || !1,
                                w.preventclick.tg.onclick = w.onpreventclick),
                                t = e.extend({
                                    original: t
                                }, t),
                                "changedTouches"in t && (t.clientX = t.changedTouches[0].clientX,
                                t.clientY = t.changedTouches[0].clientY),
                                w.forcescreen) {
                                    var n = t;
                                    t = {
                                        original: t.original ? t.original : t
                                    },
                                    t.clientX = n.screenX,
                                    t.clientY = n.screenY
                                }
                                var a, n = a = 0;
                                v && !i && (a = w.win.position(),
                                n = -a.left,
                                a = -a.top);
                                var r = t.clientY + a;
                                a = r - w.rail.drag.y;
                                var o = t.clientX + n
                                  , s = o - w.rail.drag.x
                                  , l = w.rail.drag.st - a;
                                w.ishwscroll && w.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > w.page.maxh && (l = w.page.maxh + Math.round((l - w.page.maxh) / 2)) : (0 > l && (r = l = 0),
                                l > w.page.maxh && (l = w.page.maxh,
                                r = 0));
                                var c;
                                if (w.railh && w.railh.scrollable && (c = w.isrtlmode ? s - w.rail.drag.sl : w.rail.drag.sl - s,
                                w.ishwscroll && w.opt.bouncescroll ? 0 > c ? c = Math.round(c / 2) : c > w.page.maxw && (c = w.page.maxw + Math.round((c - w.page.maxw) / 2)) : (0 > c && (o = c = 0),
                                c > w.page.maxw && (c = w.page.maxw,
                                o = 0))),
                                n = !1,
                                w.rail.drag.dl)
                                    n = !0,
                                    "v" == w.rail.drag.dl ? c = w.rail.drag.sl : "h" == w.rail.drag.dl && (l = w.rail.drag.st);
                                else {
                                    a = Math.abs(a);
                                    var s = Math.abs(s)
                                      , u = w.opt.directionlockdeadzone;
                                    if ("v" == w.rail.drag.ck) {
                                        if (a > u && s <= .3 * a)
                                            return w.rail.drag = !1,
                                            !0;
                                        s > u && (w.rail.drag.dl = "f",
                                        e("body").scrollTop(e("body").scrollTop()))
                                    } else if ("h" == w.rail.drag.ck) {
                                        if (s > u && a <= .3 * s)
                                            return w.rail.drag = !1,
                                            !0;
                                        a > u && (w.rail.drag.dl = "f",
                                        e("body").scrollLeft(e("body").scrollLeft()))
                                    }
                                }
                                if (w.synched("touchmove", function() {
                                    w.rail.drag && 2 == w.rail.drag.pt && (w.prepareTransition && w.prepareTransition(0),
                                    w.rail.scrollable && w.setScrollTop(l),
                                    w.scrollmom.update(o, r),
                                    w.railh && w.railh.scrollable ? (w.setScrollLeft(c),
                                    w.showCursor(l, c)) : w.showCursor(l),
                                    T.isie10 && document.selection.clear())
                                }),
                                T.ischrome && w.istouchcapable && (n = !1),
                                n)
                                    return w.cancelEvent(t)
                            } else if (1 == w.rail.drag.pt)
                                return w.onmousemove(t)
                        }
                    }
                    if (w.onmousedown = function(e, t) {
                        if (!w.rail.drag || 1 == w.rail.drag.pt) {
                            if (w.railslocked)
                                return w.cancelEvent(e);
                            w.cancelScroll(),
                            w.rail.drag = {
                                x: e.clientX,
                                y: e.clientY,
                                sx: w.scroll.x,
                                sy: w.scroll.y,
                                pt: 1,
                                hr: !!t
                            };
                            var i = w.getTarget(e);
                            return !w.ispage && T.hasmousecapture && i.setCapture(),
                            w.isiframe && !T.hasmousecapture && (w.saved.csspointerevents = w.doc.css("pointer-events"),
                            w.css(w.doc, {
                                "pointer-events": "none"
                            })),
                            w.hasmoving = !1,
                            w.cancelEvent(e)
                        }
                    }
                    ,
                    w.onmouseup = function(e) {
                        if (w.rail.drag)
                            return 1 != w.rail.drag.pt || (T.hasmousecapture && document.releaseCapture(),
                            w.isiframe && !T.hasmousecapture && w.doc.css("pointer-events", w.saved.csspointerevents),
                            w.rail.drag = !1,
                            w.hasmoving && w.triggerScrollEnd(),
                            w.cancelEvent(e))
                    }
                    ,
                    w.onmousemove = function(e) {
                        if (w.rail.drag) {
                            if (1 == w.rail.drag.pt) {
                                if (T.ischrome && 0 == e.which)
                                    return w.onmouseup(e);
                                if (w.cursorfreezed = !0,
                                w.hasmoving = !0,
                                w.rail.drag.hr) {
                                    w.scroll.x = w.rail.drag.sx + (e.clientX - w.rail.drag.x),
                                    0 > w.scroll.x && (w.scroll.x = 0);
                                    var t = w.scrollvaluemaxw;
                                    w.scroll.x > t && (w.scroll.x = t)
                                } else
                                    w.scroll.y = w.rail.drag.sy + (e.clientY - w.rail.drag.y),
                                    0 > w.scroll.y && (w.scroll.y = 0),
                                    t = w.scrollvaluemax,
                                    w.scroll.y > t && (w.scroll.y = t);
                                return w.synched("mousemove", function() {
                                    w.rail.drag && 1 == w.rail.drag.pt && (w.showCursor(),
                                    w.rail.drag.hr ? w.hasreversehr ? w.doScrollLeft(w.scrollvaluemaxw - Math.round(w.scroll.x * w.scrollratio.x), w.opt.cursordragspeed) : w.doScrollLeft(Math.round(w.scroll.x * w.scrollratio.x), w.opt.cursordragspeed) : w.doScrollTop(Math.round(w.scroll.y * w.scrollratio.y), w.opt.cursordragspeed))
                                }),
                                w.cancelEvent(e)
                            }
                        } else
                            w.checkarea = 0
                    }
                    ,
                    T.cantouch || w.opt.touchbehavior)
                        w.onpreventclick = function(e) {
                            if (w.preventclick)
                                return w.preventclick.tg.onclick = w.preventclick.click,
                                w.preventclick = !1,
                                w.cancelEvent(e)
                        }
                        ,
                        w.bind(w.win, "mousedown", w.ontouchstart),
                        w.onclick = !T.isios && function(e) {
                            return !w.lastmouseup || (w.lastmouseup = !1,
                            w.cancelEvent(e))
                        }
                        ,
                        w.opt.grabcursorenabled && T.cursorgrabvalue && (w.css(w.ispage ? w.doc : w.win, {
                            cursor: T.cursorgrabvalue
                        }),
                        w.css(w.rail, {
                            cursor: T.cursorgrabvalue
                        }));
                    else {
                        var y = function(e) {
                            if (w.selectiondrag) {
                                if (e) {
                                    var t = w.win.outerHeight();
                                    e = e.pageY - w.selectiondrag.top,
                                    0 < e && e < t && (e = 0),
                                    e >= t && (e -= t),
                                    w.selectiondrag.df = e
                                }
                                0 != w.selectiondrag.df && (w.doScrollBy(2 * -Math.floor(w.selectiondrag.df / 6)),
                                w.debounced("doselectionscroll", function() {
                                    y()
                                }, 50))
                            }
                        };
                        w.hasTextSelected = "getSelection"in document ? function() {
                            return 0 < document.getSelection().rangeCount
                        }
                        : "selection"in document ? function() {
                            return "None" != document.selection.type
                        }
                        : function() {
                            return !1
                        }
                        ,
                        w.onselectionstart = function(e) {
                            w.ispage || (w.selectiondrag = w.win.offset())
                        }
                        ,
                        w.onselectionend = function(e) {
                            w.selectiondrag = !1
                        }
                        ,
                        w.onselectiondrag = function(e) {
                            w.selectiondrag && w.hasTextSelected() && w.debounced("selectionscroll", function() {
                                y(e)
                            }, 250)
                        }
                    }
                    T.hasw3ctouch ? (w.css(w.rail, {
                        "touch-action": "none"
                    }),
                    w.css(w.cursor, {
                        "touch-action": "none"
                    }),
                    w.bind(w.win, "pointerdown", w.ontouchstart),
                    w.bind(document, "pointerup", w.ontouchend),
                    w.bind(document, "pointermove", w.ontouchmove)) : T.hasmstouch ? (w.css(w.rail, {
                        "-ms-touch-action": "none"
                    }),
                    w.css(w.cursor, {
                        "-ms-touch-action": "none"
                    }),
                    w.bind(w.win, "MSPointerDown", w.ontouchstart),
                    w.bind(document, "MSPointerUp", w.ontouchend),
                    w.bind(document, "MSPointerMove", w.ontouchmove),
                    w.bind(w.cursor, "MSGestureHold", function(e) {
                        e.preventDefault()
                    }),
                    w.bind(w.cursor, "contextmenu", function(e) {
                        e.preventDefault()
                    })) : this.istouchcapable && (w.bind(w.win, "touchstart", w.ontouchstart),
                    w.bind(document, "touchend", w.ontouchend),
                    w.bind(document, "touchcancel", w.ontouchend),
                    w.bind(document, "touchmove", w.ontouchmove)),
                    (w.opt.cursordragontouch || !T.cantouch && !w.opt.touchbehavior) && (w.rail.css({
                        cursor: "default"
                    }),
                    w.railh && w.railh.css({
                        cursor: "default"
                    }),
                    w.jqbind(w.rail, "mouseenter", function() {
                        if (!w.ispage && !w.win.is(":visible"))
                            return !1;
                        w.canshowonmouseevent && w.showCursor(),
                        w.rail.active = !0
                    }),
                    w.jqbind(w.rail, "mouseleave", function() {
                        w.rail.active = !1,
                        w.rail.drag || w.hideCursor()
                    }),
                    w.opt.sensitiverail && (w.bind(w.rail, "click", function(e) {
                        w.doRailClick(e, !1, !1)
                    }),
                    w.bind(w.rail, "dblclick", function(e) {
                        w.doRailClick(e, !0, !1)
                    }),
                    w.bind(w.cursor, "click", function(e) {
                        w.cancelEvent(e)
                    }),
                    w.bind(w.cursor, "dblclick", function(e) {
                        w.cancelEvent(e)
                    })),
                    w.railh && (w.jqbind(w.railh, "mouseenter", function() {
                        if (!w.ispage && !w.win.is(":visible"))
                            return !1;
                        w.canshowonmouseevent && w.showCursor(),
                        w.rail.active = !0
                    }),
                    w.jqbind(w.railh, "mouseleave", function() {
                        w.rail.active = !1,
                        w.rail.drag || w.hideCursor()
                    }),
                    w.opt.sensitiverail && (w.bind(w.railh, "click", function(e) {
                        w.doRailClick(e, !1, !0)
                    }),
                    w.bind(w.railh, "dblclick", function(e) {
                        w.doRailClick(e, !0, !0)
                    }),
                    w.bind(w.cursorh, "click", function(e) {
                        w.cancelEvent(e)
                    }),
                    w.bind(w.cursorh, "dblclick", function(e) {
                        w.cancelEvent(e)
                    })))),
                    T.cantouch || w.opt.touchbehavior ? (w.bind(T.hasmousecapture ? w.win : document, "mouseup", w.ontouchend),
                    w.bind(document, "mousemove", w.ontouchmove),
                    w.onclick && w.bind(document, "click", w.onclick),
                    w.opt.cursordragontouch ? (w.bind(w.cursor, "mousedown", w.onmousedown),
                    w.bind(w.cursor, "mouseup", w.onmouseup),
                    w.cursorh && w.bind(w.cursorh, "mousedown", function(e) {
                        w.onmousedown(e, !0)
                    }),
                    w.cursorh && w.bind(w.cursorh, "mouseup", w.onmouseup)) : (w.bind(w.rail, "mousedown", function(e) {
                        e.preventDefault()
                    }),
                    w.railh && w.bind(w.railh, "mousedown", function(e) {
                        e.preventDefault()
                    }))) : (w.bind(T.hasmousecapture ? w.win : document, "mouseup", w.onmouseup),
                    w.bind(document, "mousemove", w.onmousemove),
                    w.onclick && w.bind(document, "click", w.onclick),
                    w.bind(w.cursor, "mousedown", w.onmousedown),
                    w.bind(w.cursor, "mouseup", w.onmouseup),
                    w.railh && (w.bind(w.cursorh, "mousedown", function(e) {
                        w.onmousedown(e, !0)
                    }),
                    w.bind(w.cursorh, "mouseup", w.onmouseup)),
                    !w.ispage && w.opt.enablescrollonselection && (w.bind(w.win[0], "mousedown", w.onselectionstart),
                    w.bind(document, "mouseup", w.onselectionend),
                    w.bind(w.cursor, "mouseup", w.onselectionend),
                    w.cursorh && w.bind(w.cursorh, "mouseup", w.onselectionend),
                    w.bind(document, "mousemove", w.onselectiondrag)),
                    w.zoom && (w.jqbind(w.zoom, "mouseenter", function() {
                        w.canshowonmouseevent && w.showCursor(),
                        w.rail.active = !0
                    }),
                    w.jqbind(w.zoom, "mouseleave", function() {
                        w.rail.active = !1,
                        w.rail.drag || w.hideCursor()
                    }))),
                    w.opt.enablemousewheel && (w.isiframe || w.mousewheel(T.isie && w.ispage ? document : w.win, w.onmousewheel),
                    w.mousewheel(w.rail, w.onmousewheel),
                    w.railh && w.mousewheel(w.railh, w.onmousewheelhr)),
                    w.ispage || T.cantouch || /HTML|^BODY/.test(w.win[0].nodeName) || (w.win.attr("tabindex") || w.win.attr({
                        tabindex: n++
                    }),
                    w.jqbind(w.win, "focus", function(e) {
                        t = w.getTarget(e).id || !0,
                        w.hasfocus = !0,
                        w.canshowonmouseevent && w.noticeCursor()
                    }),
                    w.jqbind(w.win, "blur", function(e) {
                        t = !1,
                        w.hasfocus = !1
                    }),
                    w.jqbind(w.win, "mouseenter", function(e) {
                        i = w.getTarget(e).id || !0,
                        w.hasmousefocus = !0,
                        w.canshowonmouseevent && w.noticeCursor()
                    }),
                    w.jqbind(w.win, "mouseleave", function() {
                        i = !1,
                        w.hasmousefocus = !1,
                        w.rail.drag || w.hideCursor()
                    }))
                }
                if (w.onkeypress = function(n) {
                    if (w.railslocked && 0 == w.page.maxh)
                        return !0;
                    n = n || window.e;
                    var a = w.getTarget(n);
                    if (a && /INPUT|TEXTAREA|SELECT|OPTION/.test(a.nodeName) && (!a.getAttribute("type") && !a.type || !/submit|button|cancel/i.tp) || e(a).attr("contenteditable"))
                        return !0;
                    if (w.hasfocus || w.hasmousefocus && !t || w.ispage && !t && !i) {
                        if (a = n.keyCode,
                        w.railslocked && 27 != a)
                            return w.cancelEvent(n);
                        var r = n.ctrlKey || !1
                          , o = n.shiftKey || !1
                          , s = !1;
                        switch (a) {
                        case 38:
                        case 63233:
                            w.doScrollBy(72),
                            s = !0;
                            break;
                        case 40:
                        case 63235:
                            w.doScrollBy(-72),
                            s = !0;
                            break;
                        case 37:
                        case 63232:
                            w.railh && (r ? w.doScrollLeft(0) : w.doScrollLeftBy(72),
                            s = !0);
                            break;
                        case 39:
                        case 63234:
                            w.railh && (r ? w.doScrollLeft(w.page.maxw) : w.doScrollLeftBy(-72),
                            s = !0);
                            break;
                        case 33:
                        case 63276:
                            w.doScrollBy(w.view.h),
                            s = !0;
                            break;
                        case 34:
                        case 63277:
                            w.doScrollBy(-w.view.h),
                            s = !0;
                            break;
                        case 36:
                        case 63273:
                            w.railh && r ? w.doScrollPos(0, 0) : w.doScrollTo(0),
                            s = !0;
                            break;
                        case 35:
                        case 63275:
                            w.railh && r ? w.doScrollPos(w.page.maxw, w.page.maxh) : w.doScrollTo(w.page.maxh),
                            s = !0;
                            break;
                        case 32:
                            w.opt.spacebarenabled && (o ? w.doScrollBy(w.view.h) : w.doScrollBy(-w.view.h),
                            s = !0);
                            break;
                        case 27:
                            w.zoomactive && (w.doZoom(),
                            s = !0)
                        }
                        if (s)
                            return w.cancelEvent(n)
                    }
                }
                ,
                w.opt.enablekeyboard && w.bind(document, T.isopera && !T.isopera12 ? "keypress" : "keydown", w.onkeypress),
                w.bind(document, "keydown", function(e) {
                    e.ctrlKey && (w.wheelprevented = !0)
                }),
                w.bind(document, "keyup", function(e) {
                    e.ctrlKey || (w.wheelprevented = !1)
                }),
                w.bind(window, "blur", function(e) {
                    w.wheelprevented = !1
                }),
                w.bind(window, "resize", w.lazyResize),
                w.bind(window, "orientationchange", w.lazyResize),
                w.bind(window, "load", w.lazyResize),
                T.ischrome && !w.ispage && !w.haswrapper) {
                    var b = w.win.attr("style")
                      , l = parseFloat(w.win.css("width")) + 1;
                    w.win.css("width", l),
                    w.synched("chromefix", function() {
                        w.win.attr("style", b)
                    })
                }
                w.onAttributeChange = function(e) {
                    w.lazyResize(w.isieold ? 250 : 30)
                }
                ,
                w.isie11 || !1 === d || (w.observerbody = new d(function(t) {
                    if (t.forEach(function(t) {
                        if ("attributes" == t.type)
                            return e("body").hasClass("modal-open") && e("body").hasClass("modal-dialog") && !e.contains(e(".modal-dialog")[0], w.doc[0]) ? w.hide() : w.show()
                    }),
                    document.body.scrollHeight != w.page.maxh)
                        return w.lazyResize(30)
                }
                ),
                w.observerbody.observe(document.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"]
                })),
                w.ispage || w.haswrapper || (!1 !== d ? (w.observer = new d(function(e) {
                    e.forEach(w.onAttributeChange)
                }
                ),
                w.observer.observe(w.win[0], {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1
                }),
                w.observerremover = new d(function(e) {
                    e.forEach(function(e) {
                        if (0 < e.removedNodes.length)
                            for (var t in e.removedNodes)
                                if (w && e.removedNodes[t] == w.win[0])
                                    return w.remove()
                    })
                }
                ),
                w.observerremover.observe(w.win[0].parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1
                })) : (w.bind(w.win, T.isie && !T.isie9 ? "propertychange" : "DOMAttrModified", w.onAttributeChange),
                T.isie9 && w.win[0].attachEvent("onpropertychange", w.onAttributeChange),
                w.bind(w.win, "DOMNodeRemoved", function(e) {
                    e.target == w.win[0] && w.remove()
                }))),
                !w.ispage && w.opt.boxzoom && w.bind(window, "resize", w.resizeZoom),
                w.istextarea && (w.bind(w.win, "keydown", w.lazyResize),
                w.bind(w.win, "mouseup", w.lazyResize)),
                w.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var x = function() {
                    w.iframexd = !1;
                    var t;
                    try {
                        t = "contentDocument"in this ? this.contentDocument : this.contentWindow.document
                    } catch (e) {
                        w.iframexd = !0,
                        t = !1
                    }
                    if (w.iframexd)
                        return "console"in window && console.log("NiceScroll error: policy restriced iframe"),
                        !0;
                    if (w.forcescreen = !0,
                    w.isiframe && (w.iframe = {
                        doc: e(t),
                        html: w.doc.contents().find("html")[0],
                        body: w.doc.contents().find("body")[0]
                    },
                    w.getContentSize = function() {
                        return {
                            w: Math.max(w.iframe.html.scrollWidth, w.iframe.body.scrollWidth),
                            h: Math.max(w.iframe.html.scrollHeight, w.iframe.body.scrollHeight)
                        }
                    }
                    ,
                    w.docscroll = e(w.iframe.body)),
                    !T.isios && w.opt.iframeautoresize && !w.isiframe) {
                        w.win.scrollTop(0),
                        w.doc.height("");
                        var i = Math.max(t.getElementsByTagName("html")[0].scrollHeight, t.body.scrollHeight);
                        w.doc.height(i)
                    }
                    w.lazyResize(30),
                    T.isie7 && w.css(e(w.iframe.html), a),
                    w.css(e(w.iframe.body), a),
                    T.isios && w.haswrapper && w.css(e(t.body), {
                        "-webkit-transform": "translate3d(0,0,0)"
                    }),
                    "contentWindow"in this ? w.bind(this.contentWindow, "scroll", w.onscroll) : w.bind(t, "scroll", w.onscroll),
                    w.opt.enablemousewheel && w.mousewheel(t, w.onmousewheel),
                    w.opt.enablekeyboard && w.bind(t, T.isopera ? "keypress" : "keydown", w.onkeypress),
                    (T.cantouch || w.opt.touchbehavior) && (w.bind(t, "mousedown", w.ontouchstart),
                    w.bind(t, "mousemove", function(e) {
                        return w.ontouchmove(e, !0)
                    }),
                    w.opt.grabcursorenabled && T.cursorgrabvalue && w.css(e(t.body), {
                        cursor: T.cursorgrabvalue
                    })),
                    w.bind(t, "mouseup", w.ontouchend),
                    w.zoom && (w.opt.dblclickzoom && w.bind(t, "dblclick", w.doZoom),
                    w.ongesturezoom && w.bind(t, "gestureend", w.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function() {
                    x.call(w.doc[0], !1)
                }, 500),
                w.bind(this.doc, "load", x)
            }
        }
        ,
        this.showCursor = function(e, t) {
            if (w.cursortimeout && (clearTimeout(w.cursortimeout),
            w.cursortimeout = 0),
            w.rail) {
                if (w.autohidedom && (w.autohidedom.stop().css({
                    opacity: w.opt.cursoropacitymax
                }),
                w.cursoractive = !0),
                w.rail.drag && 1 == w.rail.drag.pt || (void 0 !== e && !1 !== e && (w.scroll.y = Math.round(1 * e / w.scrollratio.y)),
                void 0 !== t && (w.scroll.x = Math.round(1 * t / w.scrollratio.x))),
                w.cursor.css({
                    height: w.cursorheight,
                    top: w.scroll.y
                }),
                w.cursorh) {
                    var i = w.hasreversehr ? w.scrollvaluemaxw - w.scroll.x : w.scroll.x;
                    !w.rail.align && w.rail.visibility ? w.cursorh.css({
                        width: w.cursorwidth,
                        left: i + w.rail.width
                    }) : w.cursorh.css({
                        width: w.cursorwidth,
                        left: i
                    }),
                    w.cursoractive = !0
                }
                w.zoom && w.zoom.stop().css({
                    opacity: w.opt.cursoropacitymax
                })
            }
        }
        ,
        this.hideCursor = function(e) {
            w.cursortimeout || !w.rail || !w.autohidedom || w.hasmousefocus && "leave" == w.opt.autohidemode || (w.cursortimeout = setTimeout(function() {
                w.rail.active && w.showonmouseevent || (w.autohidedom.stop().animate({
                    opacity: w.opt.cursoropacitymin
                }),
                w.zoom && w.zoom.stop().animate({
                    opacity: w.opt.cursoropacitymin
                }),
                w.cursoractive = !1),
                w.cursortimeout = 0
            }, e || w.opt.hidecursordelay))
        }
        ,
        this.noticeCursor = function(e, t, i) {
            w.showCursor(t, i),
            w.rail.active || w.hideCursor(e)
        }
        ,
        this.getContentSize = w.ispage ? function() {
            return {
                w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth),
                h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
        }
        : w.haswrapper ? function() {
            return {
                w: w.doc.outerWidth() + parseInt(w.win.css("paddingLeft")) + parseInt(w.win.css("paddingRight")),
                h: w.doc.outerHeight() + parseInt(w.win.css("paddingTop")) + parseInt(w.win.css("paddingBottom"))
            }
        }
        : function() {
            return {
                w: w.docscroll[0].scrollWidth,
                h: w.docscroll[0].scrollHeight
            }
        }
        ,
        this.onResize = function(e, t) {
            if (!w || !w.win)
                return !1;
            if (!w.haswrapper && !w.ispage) {
                if ("none" == w.win.css("display"))
                    return w.visibility && w.hideRail().hideRailHr(),
                    !1;
                w.hidden || w.visibility || w.showRail().showRailHr()
            }
            var i = w.page.maxh
              , n = w.page.maxw
              , a = w.view.h
              , r = w.view.w;
            if (w.view = {
                w: w.ispage ? w.win.width() : parseInt(w.win[0].clientWidth),
                h: w.ispage ? w.win.height() : parseInt(w.win[0].clientHeight)
            },
            w.page = t || w.getContentSize(),
            w.page.maxh = Math.max(0, w.page.h - w.view.h),
            w.page.maxw = Math.max(0, w.page.w - w.view.w),
            w.page.maxh == i && w.page.maxw == n && w.view.w == r && w.view.h == a) {
                if (w.ispage)
                    return w;
                if (i = w.win.offset(),
                w.lastposition && (n = w.lastposition,
                n.top == i.top && n.left == i.left))
                    return w;
                w.lastposition = i
            }
            return 0 == w.page.maxh ? (w.hideRail(),
            w.scrollvaluemax = 0,
            w.scroll.y = 0,
            w.scrollratio.y = 0,
            w.cursorheight = 0,
            w.setScrollTop(0),
            w.rail && (w.rail.scrollable = !1)) : (w.page.maxh -= w.opt.railpadding.top + w.opt.railpadding.bottom,
            w.rail.scrollable = !0),
            0 == w.page.maxw ? (w.hideRailHr(),
            w.scrollvaluemaxw = 0,
            w.scroll.x = 0,
            w.scrollratio.x = 0,
            w.cursorwidth = 0,
            w.setScrollLeft(0),
            w.railh && (w.railh.scrollable = !1)) : (w.page.maxw -= w.opt.railpadding.left + w.opt.railpadding.right,
            w.railh && (w.railh.scrollable = w.opt.horizrailenabled)),
            w.railslocked = w.locked || 0 == w.page.maxh && 0 == w.page.maxw,
            w.railslocked ? (w.ispage || w.updateScrollBar(w.view),
            !1) : (w.hidden || w.visibility ? !w.railh || w.hidden || w.railh.visibility || w.showRailHr() : w.showRail().showRailHr(),
            w.istextarea && w.win.css("resize") && "none" != w.win.css("resize") && (w.view.h -= 20),
            w.cursorheight = Math.min(w.view.h, Math.round(w.view.h / w.page.h * w.view.h)),
            w.cursorheight = w.opt.cursorfixedheight ? w.opt.cursorfixedheight : Math.max(w.opt.cursorminheight, w.cursorheight),
            w.cursorwidth = Math.min(w.view.w, Math.round(w.view.w / w.page.w * w.view.w)),
            w.cursorwidth = w.opt.cursorfixedheight ? w.opt.cursorfixedheight : Math.max(w.opt.cursorminheight, w.cursorwidth),
            w.scrollvaluemax = w.view.h - w.cursorheight - w.cursor.hborder - (w.opt.railpadding.top + w.opt.railpadding.bottom),
            w.railh && (w.railh.width = 0 < w.page.maxh ? w.view.w - w.rail.width : w.view.w,
            w.scrollvaluemaxw = w.railh.width - w.cursorwidth - w.cursorh.wborder - (w.opt.railpadding.left + w.opt.railpadding.right)),
            w.ispage || w.updateScrollBar(w.view),
            w.scrollratio = {
                x: w.page.maxw / w.scrollvaluemaxw,
                y: w.page.maxh / w.scrollvaluemax
            },
            w.getScrollTop() > w.page.maxh ? w.doScrollTop(w.page.maxh) : (w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)),
            w.scroll.x = Math.round(w.getScrollLeft() * (1 / w.scrollratio.x)),
            w.cursoractive && w.noticeCursor()),
            w.scroll.y && 0 == w.getScrollTop() && w.doScrollTo(Math.floor(w.scroll.y * w.scrollratio.y)),
            w)
        }
        ,
        this.resize = w.onResize,
        this.hlazyresize = 0,
        this.lazyResize = function(e) {
            return w.haswrapper || w.hide(),
            w.hlazyresize && clearTimeout(w.hlazyresize),
            w.hlazyresize = setTimeout(function() {
                w && w.show().resize()
            }, 240),
            w
        }
        ,
        this.jqbind = function(t, i, n) {
            w.events.push({
                e: t,
                n: i,
                f: n,
                q: !0
            }),
            e(t).bind(i, n)
        }
        ,
        this.mousewheel = function(e, t, i) {
            if (e = "jquery"in e ? e[0] : e,
            "onwheel"in document.createElement("div"))
                w._bind(e, "wheel", t, i || !1);
            else {
                var n = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll";
                v(e, n, t, i || !1),
                "DOMMouseScroll" == n && v(e, "MozMousePixelScroll", t, i || !1)
            }
        }
        ,
        T.haseventlistener ? (this.bind = function(e, t, i, n) {
            w._bind("jquery"in e ? e[0] : e, t, i, n || !1)
        }
        ,
        this._bind = function(e, t, i, n) {
            w.events.push({
                e: e,
                n: t,
                f: i,
                b: n,
                q: !1
            }),
            e.addEventListener(t, i, n || !1)
        }
        ,
        this.cancelEvent = function(e) {
            return !!e && (e = e.original ? e.original : e,
            e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            e.preventManipulation && e.preventManipulation(),
            !1)
        }
        ,
        this.stopPropagation = function(e) {
            return !!e && (e = e.original ? e.original : e,
            e.stopPropagation(),
            !1)
        }
        ,
        this._unbind = function(e, t, i, n) {
            e.removeEventListener(t, i, n)
        }
        ) : (this.bind = function(e, t, i, n) {
            var a = "jquery"in e ? e[0] : e;
            w._bind(a, t, function(e) {
                return (e = e || window.event || !1) && e.srcElement && (e.target = e.srcElement),
                "pageY"in e || (e.pageX = e.clientX + document.documentElement.scrollLeft,
                e.pageY = e.clientY + document.documentElement.scrollTop),
                !1 !== i.call(a, e) && !1 !== n || w.cancelEvent(e)
            })
        }
        ,
        this._bind = function(e, t, i, n) {
            w.events.push({
                e: e,
                n: t,
                f: i,
                b: n,
                q: !1
            }),
            e.attachEvent ? e.attachEvent("on" + t, i) : e["on" + t] = i
        }
        ,
        this.cancelEvent = function(e) {
            return !!(e = window.event || !1) && (e.cancelBubble = !0,
            e.cancel = !0,
            e.returnValue = !1)
        }
        ,
        this.stopPropagation = function(e) {
            return !!(e = window.event || !1) && (e.cancelBubble = !0,
            !1)
        }
        ,
        this._unbind = function(e, t, i, n) {
            e.detachEvent ? e.detachEvent("on" + t, i) : e["on" + t] = !1
        }
        ),
        this.unbindAll = function() {
            for (var e = 0; e < w.events.length; e++) {
                var t = w.events[e];
                t.q ? t.e.unbind(t.n, t.f) : w._unbind(t.e, t.n, t.f, t.b)
            }
        }
        ,
        this.showRail = function() {
            return 0 == w.page.maxh || !w.ispage && "none" == w.win.css("display") || (w.visibility = !0,
            w.rail.visibility = !0,
            w.rail.css("display", "block")),
            w
        }
        ,
        this.showRailHr = function() {
            return w.railh ? (0 == w.page.maxw || !w.ispage && "none" == w.win.css("display") || (w.railh.visibility = !0,
            w.railh.css("display", "block")),
            w) : w
        }
        ,
        this.hideRail = function() {
            return w.visibility = !1,
            w.rail.visibility = !1,
            w.rail.css("display", "none"),
            w
        }
        ,
        this.hideRailHr = function() {
            return w.railh ? (w.railh.visibility = !1,
            w.railh.css("display", "none"),
            w) : w
        }
        ,
        this.show = function() {
            return w.hidden = !1,
            w.railslocked = !1,
            w.showRail().showRailHr()
        }
        ,
        this.hide = function() {
            return w.hidden = !0,
            w.railslocked = !0,
            w.hideRail().hideRailHr()
        }
        ,
        this.toggle = function() {
            return w.hidden ? w.show() : w.hide()
        }
        ,
        this.remove = function() {
            w.stop(),
            w.cursortimeout && clearTimeout(w.cursortimeout);
            for (var t in w.delaylist)
                w.delaylist[t] && l(w.delaylist[t].h);
            for (w.doZoomOut(),
            w.unbindAll(),
            T.isie9 && w.win[0].detachEvent("onpropertychange", w.onAttributeChange),
            !1 !== w.observer && w.observer.disconnect(),
            !1 !== w.observerremover && w.observerremover.disconnect(),
            !1 !== w.observerbody && w.observerbody.disconnect(),
            w.events = null,
            w.cursor && w.cursor.remove(),
            w.cursorh && w.cursorh.remove(),
            w.rail && w.rail.remove(),
            w.railh && w.railh.remove(),
            w.zoom && w.zoom.remove(),
            t = 0; t < w.saved.css.length; t++) {
                var i = w.saved.css[t];
                i[0].css(i[1], void 0 === i[2] ? "" : i[2])
            }
            w.saved = !1,
            w.me.data("__nicescroll", "");
            var n = e.nicescroll;
            n.each(function(e) {
                if (this && this.id === w.id) {
                    delete n[e];
                    for (var t = ++e; t < n.length; t++,
                    e++)
                        n[e] = n[t];
                    n.length--,
                    n.length && delete n[n.length]
                }
            });
            for (var a in w)
                w[a] = null,
                delete w[a];
            w = null
        }
        ,
        this.scrollstart = function(e) {
            return this.onscrollstart = e,
            w
        }
        ,
        this.scrollend = function(e) {
            return this.onscrollend = e,
            w
        }
        ,
        this.scrollcancel = function(e) {
            return this.onscrollcancel = e,
            w
        }
        ,
        this.zoomin = function(e) {
            return this.onzoomin = e,
            w
        }
        ,
        this.zoomout = function(e) {
            return this.onzoomout = e,
            w
        }
        ,
        this.isScrollable = function(t) {
            if (t = t.target ? t.target : t,
            "OPTION" == t.nodeName)
                return !0;
            for (; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName); ) {
                var i = e(t)
                  , i = i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "";
                if (/scroll|auto/.test(i))
                    return t.clientHeight != t.scrollHeight;
                t = !!t.parentNode && t.parentNode
            }
            return !1
        }
        ,
        this.getViewport = function(t) {
            for (t = !(!t || !t.parentNode) && t.parentNode; t && 1 == t.nodeType && !/^BODY|HTML/.test(t.nodeName); ) {
                var i = e(t);
                if (/fixed|absolute/.test(i.css("position")))
                    return i;
                if (/scroll|auto/.test(i.css("overflowY") || i.css("overflowX") || i.css("overflow") || "") && t.clientHeight != t.scrollHeight || 0 < i.getNiceScroll().length)
                    return i;
                t = !!t.parentNode && t.parentNode
            }
            return !1
        }
        ,
        this.triggerScrollEnd = function() {
            if (w.onscrollend) {
                var e = w.getScrollLeft()
                  , t = w.getScrollTop();
                w.onscrollend.call(w, {
                    type: "scrollend",
                    current: {
                        x: e,
                        y: t
                    },
                    end: {
                        x: e,
                        y: t
                    }
                })
            }
        }
        ,
        this.onmousewheel = function(e) {
            if (!w.wheelprevented) {
                if (w.railslocked)
                    return w.debounced("checkunlock", w.resize, 250),
                    !0;
                if (w.rail.drag)
                    return w.cancelEvent(e);
                if ("auto" == w.opt.oneaxismousemode && 0 != e.deltaX && (w.opt.oneaxismousemode = !1),
                w.opt.oneaxismousemode && 0 == e.deltaX && !w.rail.scrollable)
                    return !w.railh || !w.railh.scrollable || w.onmousewheelhr(e);
                var t = +new Date
                  , i = !1;
                return w.opt.preservenativescrolling && w.checkarea + 600 < t && (w.nativescrollingarea = w.isScrollable(e),
                i = !0),
                (w.checkarea = t,
                w.nativescrollingarea) ? !0 : ((e = y(e, !1, i)) && (w.checkarea = 0),
                e)
            }
        }
        ,
        this.onmousewheelhr = function(e) {
            if (!w.wheelprevented) {
                if (w.railslocked || !w.railh.scrollable)
                    return !0;
                if (w.rail.drag)
                    return w.cancelEvent(e);
                var t = +new Date
                  , i = !1;
                return w.opt.preservenativescrolling && w.checkarea + 600 < t && (w.nativescrollingarea = w.isScrollable(e),
                i = !0),
                w.checkarea = t,
                !!w.nativescrollingarea || (w.railslocked ? w.cancelEvent(e) : y(e, !0, i))
            }
        }
        ,
        this.stop = function() {
            return w.cancelScroll(),
            w.scrollmon && w.scrollmon.stop(),
            w.cursorfreezed = !1,
            w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)),
            w.noticeCursor(),
            w
        }
        ,
        this.getTransitionSpeed = function(e) {
            return e = Math.min(Math.round(10 * w.opt.scrollspeed), Math.round(e / 20 * w.opt.scrollspeed)),
            20 < e ? e : 0
        }
        ,
        w.opt.smoothscroll ? w.ishwscroll && T.hastransition && w.opt.usetransition && w.opt.smoothscroll ? (this.prepareTransition = function(e, t) {
            var i = t ? 20 < e ? e : 0 : w.getTransitionSpeed(e)
              , n = i ? T.prefixstyle + "transform " + i + "ms ease-out" : "";
            return w.lasttransitionstyle && w.lasttransitionstyle == n || (w.lasttransitionstyle = n,
            w.doc.css(T.transitionstyle, n)),
            i
        }
        ,
        this.doScrollLeft = function(e, t) {
            var i = w.scrollrunning ? w.newscrolly : w.getScrollTop();
            w.doScrollPos(e, i, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var i = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
            w.doScrollPos(i, e, t)
        }
        ,
        this.doScrollPos = function(e, t, i) {
            var n = w.getScrollTop()
              , a = w.getScrollLeft();
            return (0 > (w.newscrolly - n) * (t - n) || 0 > (w.newscrollx - a) * (e - a)) && w.cancelScroll(),
            0 == w.opt.bouncescroll && (0 > t ? t = 0 : t > w.page.maxh && (t = w.page.maxh),
            0 > e ? e = 0 : e > w.page.maxw && (e = w.page.maxw)),
            (!w.scrollrunning || e != w.newscrollx || t != w.newscrolly) && (w.newscrolly = t,
            w.newscrollx = e,
            w.newscrollspeed = i || !1,
            !w.timer && void (w.timer = setTimeout(function() {
                var i = w.getScrollTop()
                  , n = w.getScrollLeft()
                  , a = Math.round(Math.sqrt(Math.pow(e - n, 2) + Math.pow(t - i, 2)))
                  , a = w.newscrollspeed && 1 < w.newscrollspeed ? w.newscrollspeed : w.getTransitionSpeed(a);
                w.newscrollspeed && 1 >= w.newscrollspeed && (a *= w.newscrollspeed),
                w.prepareTransition(a, !0),
                w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm),
                0 < a && (!w.scrollrunning && w.onscrollstart && w.onscrollstart.call(w, {
                    type: "scrollstart",
                    current: {
                        x: n,
                        y: i
                    },
                    request: {
                        x: e,
                        y: t
                    },
                    end: {
                        x: w.newscrollx,
                        y: w.newscrolly
                    },
                    speed: a
                }),
                T.transitionend ? w.scrollendtrapped || (w.scrollendtrapped = !0,
                w.bind(w.doc, T.transitionend, w.onScrollTransitionEnd, !1)) : (w.scrollendtrapped && clearTimeout(w.scrollendtrapped),
                w.scrollendtrapped = setTimeout(w.onScrollTransitionEnd, a)),
                w.timerscroll = {
                    bz: new S(i,w.newscrolly,a,0,0,.58,1),
                    bh: new S(n,w.newscrollx,a,0,0,.58,1)
                },
                w.cursorfreezed || (w.timerscroll.tm = setInterval(function() {
                    w.showCursor(w.getScrollTop(), w.getScrollLeft())
                }, 60))),
                w.synched("doScroll-set", function() {
                    w.timer = 0,
                    w.scrollendtrapped && (w.scrollrunning = !0),
                    w.setScrollTop(w.newscrolly),
                    w.setScrollLeft(w.newscrollx),
                    w.scrollendtrapped || w.onScrollTransitionEnd()
                })
            }, 50)))
        }
        ,
        this.cancelScroll = function() {
            if (!w.scrollendtrapped)
                return !0;
            var e = w.getScrollTop()
              , t = w.getScrollLeft();
            return w.scrollrunning = !1,
            T.transitionend || clearTimeout(T.transitionend),
            w.scrollendtrapped = !1,
            w._unbind(w.doc[0], T.transitionend, w.onScrollTransitionEnd),
            w.prepareTransition(0),
            w.setScrollTop(e),
            w.railh && w.setScrollLeft(t),
            w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm),
            w.timerscroll = !1,
            w.cursorfreezed = !1,
            w.showCursor(e, t),
            w
        }
        ,
        this.onScrollTransitionEnd = function() {
            w.scrollendtrapped && w._unbind(w.doc[0], T.transitionend, w.onScrollTransitionEnd),
            w.scrollendtrapped = !1,
            w.prepareTransition(0),
            w.timerscroll && w.timerscroll.tm && clearInterval(w.timerscroll.tm),
            w.timerscroll = !1;
            var e = w.getScrollTop()
              , t = w.getScrollLeft();
            if (w.setScrollTop(e),
            w.railh && w.setScrollLeft(t),
            w.noticeCursor(!1, e, t),
            w.cursorfreezed = !1,
            0 > e ? e = 0 : e > w.page.maxh && (e = w.page.maxh),
            0 > t ? t = 0 : t > w.page.maxw && (t = w.page.maxw),
            e != w.newscrolly || t != w.newscrollx)
                return w.doScrollPos(t, e, w.opt.snapbackspeed);
            w.onscrollend && w.scrollrunning && w.triggerScrollEnd(),
            w.scrollrunning = !1
        }
        ) : (this.doScrollLeft = function(e, t) {
            var i = w.scrollrunning ? w.newscrolly : w.getScrollTop();
            w.doScrollPos(e, i, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var i = w.scrollrunning ? w.newscrollx : w.getScrollLeft();
            w.doScrollPos(i, e, t)
        }
        ,
        this.doScrollPos = function(e, t, i) {
            function n() {
                if (w.cancelAnimationFrame)
                    return !0;
                if (w.scrollrunning = !0,
                d = 1 - d)
                    return w.timer = s(n) || 1;
                var e, t, i = 0, a = t = w.getScrollTop();
                w.dst.ay ? (a = w.bzscroll ? w.dst.py + w.bzscroll.getNow() * w.dst.ay : w.newscrolly,
                e = a - t,
                (0 > e && a < w.newscrolly || 0 < e && a > w.newscrolly) && (a = w.newscrolly),
                w.setScrollTop(a),
                a == w.newscrolly && (i = 1)) : i = 1,
                t = e = w.getScrollLeft(),
                w.dst.ax ? (t = w.bzscroll ? w.dst.px + w.bzscroll.getNow() * w.dst.ax : w.newscrollx,
                e = t - e,
                (0 > e && t < w.newscrollx || 0 < e && t > w.newscrollx) && (t = w.newscrollx),
                w.setScrollLeft(t),
                t == w.newscrollx && (i += 1)) : i += 1,
                2 == i ? (w.timer = 0,
                w.cursorfreezed = !1,
                w.bzscroll = !1,
                w.scrollrunning = !1,
                0 > a ? a = 0 : a > w.page.maxh && (a = Math.max(0, w.page.maxh)),
                0 > t ? t = 0 : t > w.page.maxw && (t = w.page.maxw),
                t != w.newscrollx || a != w.newscrolly ? w.doScrollPos(t, a) : w.onscrollend && w.triggerScrollEnd()) : w.timer = s(n) || 1
            }
            if (t = void 0 === t || !1 === t ? w.getScrollTop(!0) : t,
            w.timer && w.newscrolly == t && w.newscrollx == e)
                return !0;
            w.timer && l(w.timer),
            w.timer = 0;
            var a = w.getScrollTop()
              , r = w.getScrollLeft();
            (0 > (w.newscrolly - a) * (t - a) || 0 > (w.newscrollx - r) * (e - r)) && w.cancelScroll(),
            w.newscrolly = t,
            w.newscrollx = e,
            w.bouncescroll && w.rail.visibility || (0 > w.newscrolly ? w.newscrolly = 0 : w.newscrolly > w.page.maxh && (w.newscrolly = w.page.maxh)),
            w.bouncescroll && w.railh.visibility || (0 > w.newscrollx ? w.newscrollx = 0 : w.newscrollx > w.page.maxw && (w.newscrollx = w.page.maxw)),
            w.dst = {},
            w.dst.x = e - r,
            w.dst.y = t - a,
            w.dst.px = r,
            w.dst.py = a;
            var o = Math.round(Math.sqrt(Math.pow(w.dst.x, 2) + Math.pow(w.dst.y, 2)));
            w.dst.ax = w.dst.x / o,
            w.dst.ay = w.dst.y / o;
            var c = 0
              , u = o;
            if (0 == w.dst.x ? (c = a,
            u = t,
            w.dst.ay = 1,
            w.dst.py = 0) : 0 == w.dst.y && (c = r,
            u = e,
            w.dst.ax = 1,
            w.dst.px = 0),
            o = w.getTransitionSpeed(o),
            i && 1 >= i && (o *= i),
            w.bzscroll = 0 < o && (w.bzscroll ? w.bzscroll.update(u, o) : new S(c,u,o,0,1,0,1)),
            !w.timer) {
                (a == w.page.maxh && t >= w.page.maxh || r == w.page.maxw && e >= w.page.maxw) && w.checkContentSize();
                var d = 1;
                w.cancelAnimationFrame = !1,
                w.timer = 1,
                w.onscrollstart && !w.scrollrunning && w.onscrollstart.call(w, {
                    type: "scrollstart",
                    current: {
                        x: r,
                        y: a
                    },
                    request: {
                        x: e,
                        y: t
                    },
                    end: {
                        x: w.newscrollx,
                        y: w.newscrolly
                    },
                    speed: o
                }),
                n(),
                (a == w.page.maxh && t >= a || r == w.page.maxw && e >= r) && w.checkContentSize(),
                w.noticeCursor()
            }
        }
        ,
        this.cancelScroll = function() {
            return w.timer && l(w.timer),
            w.timer = 0,
            w.bzscroll = !1,
            w.scrollrunning = !1,
            w
        }
        ) : (this.doScrollLeft = function(e, t) {
            var i = w.getScrollTop();
            w.doScrollPos(e, i, t)
        }
        ,
        this.doScrollTop = function(e, t) {
            var i = w.getScrollLeft();
            w.doScrollPos(i, e, t)
        }
        ,
        this.doScrollPos = function(e, t, i) {
            var n = e > w.page.maxw ? w.page.maxw : e;
            0 > n && (n = 0);
            var a = t > w.page.maxh ? w.page.maxh : t;
            0 > a && (a = 0),
            w.synched("scroll", function() {
                w.setScrollTop(a),
                w.setScrollLeft(n)
            })
        }
        ,
        this.cancelScroll = function() {}
        ),
        this.doScrollBy = function(e, t) {
            var i = 0
              , i = t ? Math.floor((w.scroll.y - e) * w.scrollratio.y) : (w.timer ? w.newscrolly : w.getScrollTop(!0)) - e;
            if (w.bouncescroll) {
                var n = Math.round(w.view.h / 2);
                i < -n ? i = -n : i > w.page.maxh + n && (i = w.page.maxh + n)
            }
            return w.cursorfreezed = !1,
            n = w.getScrollTop(!0),
            0 > i && 0 >= n ? w.noticeCursor() : i > w.page.maxh && n >= w.page.maxh ? (w.checkContentSize(),
            w.noticeCursor()) : void w.doScrollTop(i)
        }
        ,
        this.doScrollLeftBy = function(e, t) {
            var i = 0
              , i = t ? Math.floor((w.scroll.x - e) * w.scrollratio.x) : (w.timer ? w.newscrollx : w.getScrollLeft(!0)) - e;
            if (w.bouncescroll) {
                var n = Math.round(w.view.w / 2);
                i < -n ? i = -n : i > w.page.maxw + n && (i = w.page.maxw + n)
            }
            if (w.cursorfreezed = !1,
            n = w.getScrollLeft(!0),
            0 > i && 0 >= n || i > w.page.maxw && n >= w.page.maxw)
                return w.noticeCursor();
            w.doScrollLeft(i)
        }
        ,
        this.doScrollTo = function(e, t) {
            w.cursorfreezed = !1,
            w.doScrollTop(e)
        }
        ,
        this.checkContentSize = function() {
            var e = w.getContentSize();
            e.h == w.page.h && e.w == w.page.w || w.resize(!1, e)
        }
        ,
        w.onscroll = function(e) {
            w.rail.drag || w.cursorfreezed || w.synched("scroll", function() {
                w.scroll.y = Math.round(w.getScrollTop() * (1 / w.scrollratio.y)),
                w.railh && (w.scroll.x = Math.round(w.getScrollLeft() * (1 / w.scrollratio.x))),
                w.noticeCursor()
            })
        }
        ,
        w.bind(w.docscroll, "scroll", w.onscroll),
        this.doZoomIn = function(t) {
            if (!w.zoomactive) {
                w.zoomactive = !0,
                w.zoomrestore = {
                    style: {}
                };
                var i, n = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), a = w.win[0].style;
                for (i in n) {
                    var o = n[i];
                    w.zoomrestore.style[o] = void 0 !== a[o] ? a[o] : ""
                }
                return w.zoomrestore.style.width = w.win.css("width"),
                w.zoomrestore.style.height = w.win.css("height"),
                w.zoomrestore.padding = {
                    w: w.win.outerWidth() - w.win.width(),
                    h: w.win.outerHeight() - w.win.height()
                },
                T.isios4 && (w.zoomrestore.scrollTop = e(window).scrollTop(),
                e(window).scrollTop(0)),
                w.win.css({
                    position: T.isios4 ? "absolute" : "fixed",
                    top: 0,
                    left: 0,
                    zIndex: r + 100,
                    margin: 0
                }),
                n = w.win.css("backgroundColor"),
                ("" == n || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(n)) && w.win.css("backgroundColor", "#fff"),
                w.rail.css({
                    zIndex: r + 101
                }),
                w.zoom.css({
                    zIndex: r + 102
                }),
                w.zoom.css("backgroundPosition", "0px -18px"),
                w.resizeZoom(),
                w.onzoomin && w.onzoomin.call(w),
                w.cancelEvent(t)
            }
        }
        ,
        this.doZoomOut = function(t) {
            if (w.zoomactive)
                return w.zoomactive = !1,
                w.win.css("margin", ""),
                w.win.css(w.zoomrestore.style),
                T.isios4 && e(window).scrollTop(w.zoomrestore.scrollTop),
                w.rail.css({
                    "z-index": w.zindex
                }),
                w.zoom.css({
                    "z-index": w.zindex
                }),
                w.zoomrestore = !1,
                w.zoom.css("backgroundPosition", "0px 0px"),
                w.onResize(),
                w.onzoomout && w.onzoomout.call(w),
                w.cancelEvent(t)
        }
        ,
        this.doZoom = function(e) {
            return w.zoomactive ? w.doZoomOut(e) : w.doZoomIn(e)
        }
        ,
        this.resizeZoom = function() {
            if (w.zoomactive) {
                var t = w.getScrollTop();
                w.win.css({
                    width: e(window).width() - w.zoomrestore.padding.w + "px",
                    height: e(window).height() - w.zoomrestore.padding.h + "px"
                }),
                w.onResize(),
                w.setScrollTop(Math.min(w.page.maxh, t))
            }
        }
        ,
        this.init(),
        e.nicescroll.push(this)
    }
      , g = function(e) {
        var t = this;
        this.nc = e,
        this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0,
        this.snapy = this.snapx = !1,
        this.demuly = this.demulx = 0,
        this.lastscrolly = this.lastscrollx = -1,
        this.timer = this.chky = this.chkx = 0,
        this.time = function() {
            return +new Date
        }
        ,
        this.reset = function(e, i) {
            t.stop();
            var n = t.time();
            t.steptime = 0,
            t.lasttime = n,
            t.speedx = 0,
            t.speedy = 0,
            t.lastx = e,
            t.lasty = i,
            t.lastscrollx = -1,
            t.lastscrolly = -1
        }
        ,
        this.update = function(e, i) {
            var n = t.time();
            t.steptime = n - t.lasttime,
            t.lasttime = n;
            var n = i - t.lasty
              , a = e - t.lastx
              , r = t.nc.getScrollTop()
              , o = t.nc.getScrollLeft()
              , r = r + n
              , o = o + a;
            t.snapx = 0 > o || o > t.nc.page.maxw,
            t.snapy = 0 > r || r > t.nc.page.maxh,
            t.speedx = a,
            t.speedy = n,
            t.lastx = e,
            t.lasty = i
        }
        ,
        this.stop = function() {
            t.nc.unsynched("domomentum2d"),
            t.timer && clearTimeout(t.timer),
            t.timer = 0,
            t.lastscrollx = -1,
            t.lastscrolly = -1
        }
        ,
        this.doSnapy = function(e, i) {
            var n = !1;
            0 > i ? (i = 0,
            n = !0) : i > t.nc.page.maxh && (i = t.nc.page.maxh,
            n = !0),
            0 > e ? (e = 0,
            n = !0) : e > t.nc.page.maxw && (e = t.nc.page.maxw,
            n = !0),
            n ? t.nc.doScrollPos(e, i, t.nc.opt.snapbackspeed) : t.nc.triggerScrollEnd()
        }
        ,
        this.doMomentum = function(e) {
            var i = t.time()
              , n = e ? i + e : t.lasttime;
            e = t.nc.getScrollLeft();
            var a = t.nc.getScrollTop()
              , r = t.nc.page.maxh
              , o = t.nc.page.maxw;
            if (t.speedx = 0 < o ? Math.min(60, t.speedx) : 0,
            t.speedy = 0 < r ? Math.min(60, t.speedy) : 0,
            n = n && 60 >= i - n,
            (0 > a || a > r || 0 > e || e > o) && (n = !1),
            e = !(!t.speedx || !n) && t.speedx,
            t.speedy && n && t.speedy || e) {
                var s = Math.max(16, t.steptime);
                50 < s && (e = s / 50,
                t.speedx *= e,
                t.speedy *= e,
                s = 50),
                t.demulxy = 0,
                t.lastscrollx = t.nc.getScrollLeft(),
                t.chkx = t.lastscrollx,
                t.lastscrolly = t.nc.getScrollTop(),
                t.chky = t.lastscrolly;
                var l = t.lastscrollx
                  , c = t.lastscrolly
                  , u = function() {
                    var e = 600 < t.time() - i ? .04 : .02;
                    t.speedx && (l = Math.floor(t.lastscrollx - t.speedx * (1 - t.demulxy)),
                    t.lastscrollx = l,
                    0 > l || l > o) && (e = .1),
                    t.speedy && (c = Math.floor(t.lastscrolly - t.speedy * (1 - t.demulxy)),
                    t.lastscrolly = c,
                    0 > c || c > r) && (e = .1),
                    t.demulxy = Math.min(1, t.demulxy + e),
                    t.nc.synched("domomentum2d", function() {
                        t.speedx && (t.nc.getScrollLeft(),
                        t.chkx = l,
                        t.nc.setScrollLeft(l)),
                        t.speedy && (t.nc.getScrollTop(),
                        t.chky = c,
                        t.nc.setScrollTop(c)),
                        t.timer || (t.nc.hideCursor(),
                        t.doSnapy(l, c))
                    }),
                    1 > t.demulxy ? t.timer = setTimeout(u, s) : (t.stop(),
                    t.nc.hideCursor(),
                    t.doSnapy(l, c))
                };
                u()
            } else
                t.doSnapy(t.nc.getScrollLeft(), t.nc.getScrollTop())
        }
    }
      , v = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {
        get: function(t, i, n) {
            return (i = e.data(t, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollTop() : v.call(t)
        },
        set: function(t, i) {
            var n = e.data(t, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollTop(parseInt(i)) : v.call(t, i),
            this
        }
    },
    e.fn.scrollTop = function(t) {
        if (void 0 === t) {
            var i = !!this[0] && (e.data(this[0], "__nicescroll") || !1);
            return i && i.ishwscroll ? i.getScrollTop() : v.call(this)
        }
        return this.each(function() {
            var i = e.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollTop(parseInt(t)) : v.call(e(this), t)
        })
    }
    ;
    var y = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {
        get: function(t, i, n) {
            return (i = e.data(t, "__nicescroll") || !1) && i.ishwscroll ? i.getScrollLeft() : y.call(t)
        },
        set: function(t, i) {
            var n = e.data(t, "__nicescroll") || !1;
            return n && n.ishwscroll ? n.setScrollLeft(parseInt(i)) : y.call(t, i),
            this
        }
    },
    e.fn.scrollLeft = function(t) {
        if (void 0 === t) {
            var i = !!this[0] && (e.data(this[0], "__nicescroll") || !1);
            return i && i.ishwscroll ? i.getScrollLeft() : y.call(this)
        }
        return this.each(function() {
            var i = e.data(this, "__nicescroll") || !1;
            i && i.ishwscroll ? i.setScrollLeft(parseInt(t)) : y.call(e(this), t)
        })
    }
    ;
    var w = function(t) {
        var i = this;
        if (this.length = 0,
        this.name = "nicescrollarray",
        this.each = function(t) {
            return e.each(i, t),
            i
        }
        ,
        this.push = function(e) {
            i[i.length] = e,
            i.length++
        }
        ,
        this.eq = function(e) {
            return i[e]
        }
        ,
        t)
            for (var n = 0; n < t.length; n++) {
                var a = e.data(t[n], "__nicescroll") || !1;
                a && (this[this.length] = a,
                this.length++)
            }
        return this
    };
    !function(e, t, i) {
        for (var n = 0; n < t.length; n++)
            !function(e, t) {
                e[t] = function() {
                    var e = arguments;
                    return this.each(function() {
                        this[t].apply(this, e)
                    })
                }
            }(e, t[n])
    }(w.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" ")),
    e.fn.getNiceScroll = function(t) {
        return void 0 === t ? new w(this) : this[t] && e.data(this[t], "__nicescroll") || !1
    }
    ,
    e.expr[":"].nicescroll = function(t) {
        return void 0 !== e.data(t, "__nicescroll")
    }
    ,
    e.fn.niceScroll = function(t, i) {
        void 0 !== i || "object" != typeof t || "jquery"in t || (i = t,
        t = !1),
        i = e.extend({}, i);
        var n = new w;
        void 0 === i && (i = {}),
        t && (i.doc = e(t),
        i.win = e(this));
        var a = !("doc"in i);
        return a || "win"in i || (i.win = e(this)),
        this.each(function() {
            var t = e(this).data("__nicescroll") || !1;
            t || (i.doc = a ? e(this) : i.doc,
            t = new m(i,e(this)),
            e(this).data("__nicescroll", t)),
            n.push(t)
        }),
        1 == n.length ? n[0] : n
    }
    ,
    window.NiceScroll = {
        getjQuery: function() {
            return e
        }
    },
    e.nicescroll || (e.nicescroll = new w,
    e.nicescroll.options = p)
}),
!function() {
    "use strict";
    var e, t = function(n, a) {
        function r(e) {
            return Math.floor(e)
        }
        function o() {
            var e = x.params.autoplay
              , t = x.slides.eq(x.activeIndex);
            t.attr("data-swiper-autoplay") && (e = t.attr("data-swiper-autoplay") || x.params.autoplay),
            x.autoplayTimeoutId = setTimeout(function() {
                x.params.loop ? (x.fixLoop(),
                x._slideNext(),
                x.emit("onAutoplay", x)) : x.isEnd ? a.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0),
                x.emit("onAutoplay", x)) : (x._slideNext(),
                x.emit("onAutoplay", x))
            }, e)
        }
        function s(t, i) {
            var n = e(t.target);
            if (!n.is(i))
                if ("string" == typeof i)
                    n = n.parents(i);
                else if (i.nodeType) {
                    var a;
                    return n.parents().each(function(e, t) {
                        t === i && (a = i)
                    }),
                    a ? i : void 0
                }
            if (0 !== n.length)
                return n[0]
        }
        function l(e, t) {
            t = t || {};
            var i = window.MutationObserver || window.WebkitMutationObserver
              , n = new i(function(e) {
                e.forEach(function(e) {
                    x.onResize(!0),
                    x.emit("onObserverUpdate", x, e)
                })
            }
            );
            n.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }),
            x.observers.push(n)
        }
        function c(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t))
                return !1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t))
                return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var i = !1;
                    if (x.container.parents("." + x.params.slideClass).length > 0 && 0 === x.container.parents("." + x.params.slideActiveClass).length)
                        return;
                    var n = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    }
                      , a = window.innerWidth
                      , r = window.innerHeight
                      , o = x.container.offset();
                    x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                    for (var s = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < s.length; l++) {
                        var c = s[l];
                        c[0] >= n.left && c[0] <= n.left + a && c[1] >= n.top && c[1] <= n.top + r && (i = !0)
                    }
                    if (!i)
                        return
                }
                x.isHorizontal() ? (37 !== t && 39 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(),
                (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : (38 !== t && 40 !== t || (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                40 === t && x.slideNext(),
                38 === t && x.slidePrev()),
                x.emit("onKeyPress", x, t)
            }
        }
        function u(e) {
            var t = 0
              , i = 0
              , n = 0
              , a = 0;
            return "detail"in e && (i = e.detail),
            "wheelDelta"in e && (i = -e.wheelDelta / 120),
            "wheelDeltaY"in e && (i = -e.wheelDeltaY / 120),
            "wheelDeltaX"in e && (t = -e.wheelDeltaX / 120),
            "axis"in e && e.axis === e.HORIZONTAL_AXIS && (t = i,
            i = 0),
            n = 10 * t,
            a = 10 * i,
            "deltaY"in e && (a = e.deltaY),
            "deltaX"in e && (n = e.deltaX),
            (n || a) && e.deltaMode && (1 === e.deltaMode ? (n *= 40,
            a *= 40) : (n *= 800,
            a *= 800)),
            n && !t && (t = n < 1 ? -1 : 1),
            a && !i && (i = a < 1 ? -1 : 1),
            {
                spinX: t,
                spinY: i,
                pixelX: n,
                pixelY: a
            }
        }
        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = 0
              , i = x.rtl ? -1 : 1
              , n = u(e);
            if (x.params.mousewheelForceToAxis)
                if (x.isHorizontal()) {
                    if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY)))
                        return;
                    t = n.pixelX * i
                } else {
                    if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX)))
                        return;
                    t = n.pixelY
                }
            else
                t = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * i : -n.pixelY;
            if (0 !== t) {
                if (x.params.mousewheelInvert && (t = -t),
                x.params.freeMode) {
                    var a = x.getWrapperTranslate() + t * x.params.mousewheelSensitivity
                      , r = x.isBeginning
                      , o = x.isEnd;
                    if (a >= x.minTranslate() && (a = x.minTranslate()),
                    a <= x.maxTranslate() && (a = x.maxTranslate()),
                    x.setWrapperTransition(0),
                    x.setWrapperTranslate(a),
                    x.updateProgress(),
                    x.updateActiveIndex(),
                    (!r && x.isBeginning || !o && x.isEnd) && x.updateClasses(),
                    x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout),
                    x.mousewheel.timeout = setTimeout(function() {
                        x.slideReset()
                    }, 300)) : x.params.lazyLoading && x.lazy && x.lazy.load(),
                    x.emit("onScroll", x, e),
                    x.params.autoplay && x.params.autoplayDisableOnInteraction && x.stopAutoplay(),
                    0 === a || a === x.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60)
                        if (t < 0)
                            if (x.isEnd && !x.params.loop || x.animating) {
                                if (x.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                x.slideNext(),
                                x.emit("onScroll", x, e);
                        else if (x.isBeginning && !x.params.loop || x.animating) {
                            if (x.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            x.slidePrev(),
                            x.emit("onScroll", x, e);
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
        }
        function p(t, i) {
            t = e(t);
            var n, a, r, o = x.rtl ? -1 : 1;
            n = t.attr("data-swiper-parallax") || "0",
            a = t.attr("data-swiper-parallax-x"),
            r = t.attr("data-swiper-parallax-y"),
            a || r ? (a = a || "0",
            r = r || "0") : x.isHorizontal() ? (a = n,
            r = "0") : (r = n,
            a = "0"),
            a = a.indexOf("%") >= 0 ? parseInt(a, 10) * i * o + "%" : a * i * o + "px",
            r = r.indexOf("%") >= 0 ? parseInt(r, 10) * i + "%" : r * i + "px",
            t.transform("translate3d(" + a + ", " + r + ",0px)")
        }
        function h(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        if (!(this instanceof t))
            return new t(n,a);
        var f = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            zoom: !1,
            zoomMax: 3,
            zoomMin: 1,
            zoomToggle: !0,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            mousewheelEventsTarged: "container",
            hashnav: !1,
            hashnavWatchState: !1,
            history: !1,
            replaceState: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            normalizeSlideIndex: !0,
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            paginationClickableClass: "swiper-pagination-clickable",
            paginationModifierClass: "swiper-pagination-",
            lazyLoadingClass: "swiper-lazy",
            lazyStatusLoadingClass: "swiper-lazy-loading",
            lazyStatusLoadedClass: "swiper-lazy-loaded",
            lazyPreloaderClass: "swiper-lazy-preloader",
            notificationClass: "swiper-notification",
            preloaderClass: "preloader",
            zoomContainerClass: "swiper-zoom-container",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        }
          , m = a && a.virtualTranslate;
        a = a || {};
        var g = {};
        for (var v in a)
            if ("object" != typeof a[v] || null === a[v] || a[v].nodeType || a[v] === window || a[v] === document || void 0 !== i && a[v]instanceof i || void 0 !== jQuery && a[v]instanceof jQuery)
                g[v] = a[v];
            else {
                g[v] = {};
                for (var y in a[v])
                    g[v][y] = a[v][y]
            }
        for (var w in f)
            if (void 0 === a[w])
                a[w] = f[w];
            else if ("object" == typeof a[w])
                for (var b in f[w])
                    void 0 === a[w][b] && (a[w][b] = f[w][b]);
        var x = this;
        if (x.params = a,
        x.originalParams = g,
        x.classNames = [],
        void 0 !== e && void 0 !== i && (e = i),
        (void 0 !== e || (e = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i)) && (x.$ = e,
        x.currentBreakpoint = void 0,
        x.getActiveBreakpoint = function() {
            if (!x.params.breakpoints)
                return !1;
            var e, t = !1, i = [];
            for (e in x.params.breakpoints)
                x.params.breakpoints.hasOwnProperty(e) && i.push(e);
            i.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10)
            });
            for (var n = 0; n < i.length; n++)
                (e = i[n]) >= window.innerWidth && !t && (t = e);
            return t || "max"
        }
        ,
        x.setBreakpoint = function() {
            var e = x.getActiveBreakpoint();
            if (e && x.currentBreakpoint !== e) {
                var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams
                  , i = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                for (var n in t)
                    x.params[n] = t[n];
                x.currentBreakpoint = e,
                i && x.destroyLoop && x.reLoop(!0)
            }
        }
        ,
        x.params.breakpoints && x.setBreakpoint(),
        x.container = e(n),
        0 !== x.container.length)) {
            if (x.container.length > 1) {
                var T = [];
                return x.container.each(function() {
                    T.push(new t(this,a))
                }),
                T
            }
            x.container[0].swiper = x,
            x.container.data("swiper", x),
            x.classNames.push(x.params.containerModifierClass + x.params.direction),
            x.params.freeMode && x.classNames.push(x.params.containerModifierClass + "free-mode"),
            x.support.flexbox || (x.classNames.push(x.params.containerModifierClass + "no-flexbox"),
            x.params.slidesPerColumn = 1),
            x.params.autoHeight && x.classNames.push(x.params.containerModifierClass + "autoheight"),
            (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
            x.params.touchReleaseOnEdges && (x.params.resistanceRatio = 0),
            ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0,
            x.classNames.push(x.params.containerModifierClass + "3d")) : x.params.effect = "slide"),
            "slide" !== x.params.effect && x.classNames.push(x.params.containerModifierClass + x.params.effect),
            "cube" === x.params.effect && (x.params.resistanceRatio = 0,
            x.params.slidesPerView = 1,
            x.params.slidesPerColumn = 1,
            x.params.slidesPerGroup = 1,
            x.params.centeredSlides = !1,
            x.params.spaceBetween = 0,
            x.params.virtualTranslate = !0),
            "fade" !== x.params.effect && "flip" !== x.params.effect || (x.params.slidesPerView = 1,
            x.params.slidesPerColumn = 1,
            x.params.slidesPerGroup = 1,
            x.params.watchSlidesProgress = !0,
            x.params.spaceBetween = 0,
            void 0 === m && (x.params.virtualTranslate = !0)),
            x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
            x.wrapper = x.container.children("." + x.params.wrapperClass),
            x.params.pagination && (x.paginationContainer = e(x.params.pagination),
            x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)),
            "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass(x.params.paginationModifierClass + "clickable") : x.params.paginationClickable = !1,
            x.paginationContainer.addClass(x.params.paginationModifierClass + x.params.paginationType)),
            (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = e(x.params.nextButton),
            x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))),
            x.params.prevButton && (x.prevButton = e(x.params.prevButton),
            x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
            x.isHorizontal = function() {
                return "horizontal" === x.params.direction
            }
            ,
            x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
            x.rtl && x.classNames.push(x.params.containerModifierClass + "rtl"),
            x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
            x.params.slidesPerColumn > 1 && x.classNames.push(x.params.containerModifierClass + "multirow"),
            x.device.android && x.classNames.push(x.params.containerModifierClass + "android"),
            x.container.addClass(x.classNames.join(" ")),
            x.translate = 0,
            x.progress = 0,
            x.velocity = 0,
            x.lockSwipeToNext = function() {
                x.params.allowSwipeToNext = !1,
                !1 === x.params.allowSwipeToPrev && x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.lockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !1,
                !1 === x.params.allowSwipeToNext && x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.lockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1,
                x.params.grabCursor && x.unsetGrabCursor()
            }
            ,
            x.unlockSwipeToNext = function() {
                x.params.allowSwipeToNext = !0,
                !0 === x.params.allowSwipeToPrev && x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.unlockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !0,
                !0 === x.params.allowSwipeToNext && x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.unlockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0,
                x.params.grabCursor && x.setGrabCursor()
            }
            ,
            x.setGrabCursor = function(e) {
                x.container[0].style.cursor = "move",
                x.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab",
                x.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab",
                x.container[0].style.cursor = e ? "grabbing" : "grab"
            }
            ,
            x.unsetGrabCursor = function() {
                x.container[0].style.cursor = ""
            }
            ,
            x.params.grabCursor && x.setGrabCursor(),
            x.imagesToLoad = [],
            x.imagesLoaded = 0,
            x.loadImage = function(e, t, i, n, a, r) {
                function o() {
                    r && r()
                }
                var s;
                e.complete && a ? o() : t ? (s = new window.Image,
                s.onload = o,
                s.onerror = o,
                n && (s.sizes = n),
                i && (s.srcset = i),
                t && (s.src = t)) : o()
            }
            ,
            x.preloadImages = function() {
                function e() {
                    void 0 !== x && null !== x && x && (void 0 !== x.imagesLoaded && x.imagesLoaded++,
                    x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(),
                    x.emit("onImagesReady", x)))
                }
                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++)
                    x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), x.imagesToLoad[t].sizes || x.imagesToLoad[t].getAttribute("sizes"), !0, e)
            }
            ,
            x.autoplayTimeoutId = void 0,
            x.autoplaying = !1,
            x.autoplayPaused = !1,
            x.startAutoplay = function() {
                return void 0 === x.autoplayTimeoutId && !!x.params.autoplay && !x.autoplaying && (x.autoplaying = !0,
                x.emit("onAutoplayStart", x),
                void o())
            }
            ,
            x.stopAutoplay = function(e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                x.autoplaying = !1,
                x.autoplayTimeoutId = void 0,
                x.emit("onAutoplayStop", x))
            }
            ,
            x.pauseAutoplay = function(e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId),
                x.autoplayPaused = !0,
                0 === e ? (x.autoplayPaused = !1,
                o()) : x.wrapper.transitionEnd(function() {
                    x && (x.autoplayPaused = !1,
                    x.autoplaying ? o() : x.stopAutoplay())
                }))
            }
            ,
            x.minTranslate = function() {
                return -x.snapGrid[0]
            }
            ,
            x.maxTranslate = function() {
                return -x.snapGrid[x.snapGrid.length - 1]
            }
            ,
            x.updateAutoHeight = function() {
                var e, t = [], i = 0;
                if ("auto" !== x.params.slidesPerView && x.params.slidesPerView > 1)
                    for (e = 0; e < Math.ceil(x.params.slidesPerView); e++) {
                        var n = x.activeIndex + e;
                        if (n > x.slides.length)
                            break;
                        t.push(x.slides.eq(n)[0])
                    }
                else
                    t.push(x.slides.eq(x.activeIndex)[0]);
                for (e = 0; e < t.length; e++)
                    if (void 0 !== t[e]) {
                        var a = t[e].offsetHeight;
                        i = a > i ? a : i
                    }
                i && x.wrapper.css("height", i + "px")
            }
            ,
            x.updateContainerSize = function() {
                var e, t;
                e = void 0 !== x.params.width ? x.params.width : x.container[0].clientWidth,
                t = void 0 !== x.params.height ? x.params.height : x.container[0].clientHeight,
                0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10),
                t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10),
                x.width = e,
                x.height = t,
                x.size = x.isHorizontal() ? x.width : x.height)
            }
            ,
            x.updateSlidesSize = function() {
                x.slides = x.wrapper.children("." + x.params.slideClass),
                x.snapGrid = [],
                x.slidesGrid = [],
                x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween, i = -x.params.slidesOffsetBefore, n = 0, a = 0;
                if (void 0 !== x.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                    x.virtualSize = -t,
                    x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var o;
                    x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length : Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn,
                    "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var s, l = x.params.slidesPerColumn, c = o / l, u = c - (x.params.slidesPerColumn * c - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        s = 0;
                        var d = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var p, h, f;
                            "column" === x.params.slidesPerColumnFill ? (h = Math.floor(e / l),
                            f = e - h * l,
                            (h > u || h === u && f === l - 1) && ++f >= l && (f = 0,
                            h++),
                            p = h + f * o / l,
                            d.css({
                                "-webkit-box-ordinal-group": p,
                                "-moz-box-ordinal-group": p,
                                "-ms-flex-order": p,
                                "-webkit-order": p,
                                order: p
                            })) : (f = Math.floor(e / c),
                            h = e - f * c),
                            d.css("margin-" + (x.isHorizontal() ? "top" : "left"), 0 !== f && x.params.spaceBetween && x.params.spaceBetween + "px").attr("data-swiper-column", h).attr("data-swiper-row", f)
                        }
                        "none" !== d.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0),
                        x.params.roundLengths && (s = r(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView,
                        x.params.roundLengths && (s = r(s)),
                        x.isHorizontal() ? x.slides[e].style.width = s + "px" : x.slides[e].style.height = s + "px"),
                        x.slides[e].swiperSlideSize = s,
                        x.slidesSizesGrid.push(s),
                        x.params.centeredSlides ? (i = i + s / 2 + n / 2 + t,
                        0 === n && 0 !== e && (i = i - x.size / 2 - t),
                        0 === e && (i = i - x.size / 2 - t),
                        Math.abs(i) < .001 && (i = 0),
                        a % x.params.slidesPerGroup == 0 && x.snapGrid.push(i),
                        x.slidesGrid.push(i)) : (a % x.params.slidesPerGroup == 0 && x.snapGrid.push(i),
                        x.slidesGrid.push(i),
                        i = i + s + t),
                        x.virtualSize += s + t,
                        n = s,
                        a++)
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var m;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }),
                    x.support.flexbox && !x.params.setWrapperSize || (x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    })),
                    x.params.slidesPerColumn > 1 && (x.virtualSize = (s + x.params.spaceBetween) * o,
                    x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween,
                    x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    }),
                    x.params.centeredSlides)) {
                        for (m = [],
                        e = 0; e < x.snapGrid.length; e++)
                            x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                        x.snapGrid = m
                    }
                    if (!x.params.centeredSlides) {
                        for (m = [],
                        e = 0; e < x.snapGrid.length; e++)
                            x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                        x.snapGrid = m,
                        Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]),
                    0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                        marginLeft: t + "px"
                    }) : x.slides.css({
                        marginRight: t + "px"
                    }) : x.slides.css({
                        marginBottom: t + "px"
                    })),
                    x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            }
            ,
            x.updateSlidesOffset = function() {
                for (var e = 0; e < x.slides.length; e++)
                    x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft : x.slides[e].offsetTop
            }
            ,
            x.currentSlidesPerView = function() {
                var e, t, i = 1;
                if (x.params.centeredSlides) {
                    var n, a = x.slides[x.activeIndex].swiperSlideSize;
                    for (e = x.activeIndex + 1; e < x.slides.length; e++)
                        x.slides[e] && !n && (a += x.slides[e].swiperSlideSize,
                        i++,
                        a > x.size && (n = !0));
                    for (t = x.activeIndex - 1; t >= 0; t--)
                        x.slides[t] && !n && (a += x.slides[t].swiperSlideSize,
                        i++,
                        a > x.size && (n = !0))
                } else
                    for (e = x.activeIndex + 1; e < x.slides.length; e++)
                        x.slidesGrid[e] - x.slidesGrid[x.activeIndex] < x.size && i++;
                return i
            }
            ,
            x.updateSlidesProgress = function(e) {
                if (void 0 === e && (e = x.translate || 0),
                0 !== x.slides.length) {
                    void 0 === x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e),
                    x.slides.removeClass(x.params.slideVisibleClass);
                    for (var i = 0; i < x.slides.length; i++) {
                        var n = x.slides[i]
                          , a = (t + (x.params.centeredSlides ? x.minTranslate() : 0) - n.swiperSlideOffset) / (n.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var r = -(t - n.swiperSlideOffset)
                              , o = r + x.slidesSizesGrid[i];
                            (r >= 0 && r < x.size || o > 0 && o <= x.size || r <= 0 && o >= x.size) && x.slides.eq(i).addClass(x.params.slideVisibleClass)
                        }
                        n.progress = x.rtl ? -a : a
                    }
                }
            }
            ,
            x.updateProgress = function(e) {
                void 0 === e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate()
                  , i = x.isBeginning
                  , n = x.isEnd;
                0 === t ? (x.progress = 0,
                x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t,
                x.isBeginning = x.progress <= 0,
                x.isEnd = x.progress >= 1),
                x.isBeginning && !i && x.emit("onReachBeginning", x),
                x.isEnd && !n && x.emit("onReachEnd", x),
                x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                x.emit("onProgress", x, x.progress)
            }
            ,
            x.updateActiveIndex = function() {
                var e, t, i, n = x.rtl ? x.translate : -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++)
                    void 0 !== x.slidesGrid[t + 1] ? n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t : n >= x.slidesGrid[t] && n < x.slidesGrid[t + 1] && (e = t + 1) : n >= x.slidesGrid[t] && (e = t);
                x.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
                i = Math.floor(e / x.params.slidesPerGroup),
                i >= x.snapGrid.length && (i = x.snapGrid.length - 1),
                e !== x.activeIndex && (x.snapIndex = i,
                x.previousIndex = x.activeIndex,
                x.activeIndex = e,
                x.updateClasses(),
                x.updateRealIndex())
            }
            ,
            x.updateRealIndex = function() {
                x.realIndex = parseInt(x.slides.eq(x.activeIndex).attr("data-swiper-slide-index") || x.activeIndex, 10)
            }
            ,
            x.updateClasses = function() {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass + " " + x.params.slideDuplicateActiveClass + " " + x.params.slideDuplicateNextClass + " " + x.params.slideDuplicatePrevClass);
                var t = x.slides.eq(x.activeIndex);
                t.addClass(x.params.slideActiveClass),
                a.loop && (t.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + x.realIndex + '"]').addClass(x.params.slideDuplicateActiveClass));
                var i = t.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === i.length && (i = x.slides.eq(0),
                i.addClass(x.params.slideNextClass));
                var n = t.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === n.length && (n = x.slides.eq(-1),
                n.addClass(x.params.slidePrevClass)),
                a.loop && (i.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + i.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicateNextClass),
                n.hasClass(x.params.slideDuplicateClass) ? x.wrapper.children("." + x.params.slideClass + ":not(." + x.params.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass) : x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]').addClass(x.params.slideDuplicatePrevClass)),
                x.paginationContainer && x.paginationContainer.length > 0) {
                    var r, o = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? (r = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup),
                    r > x.slides.length - 1 - 2 * x.loopedSlides && (r -= x.slides.length - 2 * x.loopedSlides),
                    r > o - 1 && (r -= o),
                    r < 0 && "bullets" !== x.params.paginationType && (r = o + r)) : r = void 0 !== x.snapIndex ? x.snapIndex : x.activeIndex || 0,
                    "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass),
                    x.paginationContainer.length > 1 ? x.bullets.each(function() {
                        e(this).index() === r && e(this).addClass(x.params.bulletActiveClass)
                    }) : x.bullets.eq(r).addClass(x.params.bulletActiveClass)),
                    "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(r + 1),
                    x.paginationContainer.find("." + x.params.paginationTotalClass).text(o)),
                    "progress" === x.params.paginationType) {
                        var s = (r + 1) / o
                          , l = s
                          , c = 1;
                        x.isHorizontal() || (c = s,
                        l = 1),
                        x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + c + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, r + 1, o)),
                    x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))),
                x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass),
                x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            }
            ,
            x.updatePagination = function() {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, i = 0; i < t; i++)
                            e += x.params.paginationBulletRender ? x.params.paginationBulletRender(x, i, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e),
                        x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                        x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>',
                    x.paginationContainer.html(e)),
                    "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>',
                    x.paginationContainer.html(e)),
                    "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            }
            ,
            x.update = function(e) {
                function t() {
                    x.rtl,
                    x.translate,
                    i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                    x.setWrapperTranslate(i),
                    x.updateActiveIndex(),
                    x.updateClasses()
                }
                if (x) {
                    x.updateContainerSize(),
                    x.updateSlidesSize(),
                    x.updateProgress(),
                    x.updatePagination(),
                    x.updateClasses(),
                    x.params.scrollbar && x.scrollbar && x.scrollbar.set();
                    var i;
                    e ? (x.controller && x.controller.spline && (x.controller.spline = void 0),
                    x.params.freeMode ? (t(),
                    x.params.autoHeight && x.updateAutoHeight()) : (("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0)) || t()) : x.params.autoHeight && x.updateAutoHeight()
                }
            }
            ,
            x.onResize = function(e) {
                x.params.onBeforeResize && x.params.onBeforeResize(x),
                x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev
                  , i = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                x.updateContainerSize(),
                x.updateSlidesSize(),
                ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
                x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                x.controller && x.controller.spline && (x.controller.spline = void 0);
                var n = !1;
                if (x.params.freeMode) {
                    var a = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(a),
                    x.updateActiveIndex(),
                    x.updateClasses(),
                    x.params.autoHeight && x.updateAutoHeight()
                } else
                    x.updateClasses(),
                    n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !n && x.lazy && x.lazy.load(),
                x.params.allowSwipeToPrev = t,
                x.params.allowSwipeToNext = i,
                x.params.onAfterResize && x.params.onAfterResize(x)
            }
            ,
            x.touchEventsDesktop = {
                start: "mousedown",
                move: "mousemove",
                end: "mouseup"
            },
            window.navigator.pointerEnabled ? x.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup"
            } : window.navigator.msPointerEnabled && (x.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp"
            }),
            x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart" : x.touchEventsDesktop.start,
                move: x.support.touch || !x.params.simulateTouch ? "touchmove" : x.touchEventsDesktop.move,
                end: x.support.touch || !x.params.simulateTouch ? "touchend" : x.touchEventsDesktop.end
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container : x.wrapper).addClass("swiper-wp8-" + x.params.direction),
            x.initEvents = function(e) {
                var t = e ? "off" : "on"
                  , i = e ? "removeEventListener" : "addEventListener"
                  , n = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0]
                  , r = x.support.touch ? n : document
                  , o = !!x.params.nested;
                if (x.browser.ie)
                    n[i](x.touchEvents.start, x.onTouchStart, !1),
                    r[i](x.touchEvents.move, x.onTouchMove, o),
                    r[i](x.touchEvents.end, x.onTouchEnd, !1);
                else {
                    if (x.support.touch) {
                        var s = !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                        n[i](x.touchEvents.start, x.onTouchStart, s),
                        n[i](x.touchEvents.move, x.onTouchMove, o),
                        n[i](x.touchEvents.end, x.onTouchEnd, s)
                    }
                    (a.simulateTouch && !x.device.ios && !x.device.android || a.simulateTouch && !x.support.touch && x.device.ios) && (n[i]("mousedown", x.onTouchStart, !1),
                    document[i]("mousemove", x.onTouchMove, o),
                    document[i]("mouseup", x.onTouchEnd, !1))
                }
                window[i]("resize", x.onResize),
                x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext),
                x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev),
                x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex),
                x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                (x.params.preventClicks || x.params.preventClicksPropagation) && n[i]("click", x.preventClicks, !0)
            }
            ,
            x.attachEvents = function() {
                x.initEvents()
            }
            ,
            x.detachEvents = function() {
                x.initEvents(!0)
            }
            ,
            x.allowClick = !0,
            x.preventClicks = function(e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(),
                x.params.preventClicksPropagation && x.animating && (e.stopPropagation(),
                e.stopImmediatePropagation()))
            }
            ,
            x.onClickNext = function(e) {
                e.preventDefault(),
                x.isEnd && !x.params.loop || x.slideNext()
            }
            ,
            x.onClickPrev = function(e) {
                e.preventDefault(),
                x.isBeginning && !x.params.loop || x.slidePrev()
            }
            ,
            x.onClickIndex = function(t) {
                t.preventDefault();
                var i = e(this).index() * x.params.slidesPerGroup;
                x.params.loop && (i += x.loopedSlides),
                x.slideTo(i)
            }
            ,
            x.updateClickedSlide = function(t) {
                var i = s(t, "." + x.params.slideClass)
                  , n = !1;
                if (i)
                    for (var a = 0; a < x.slides.length; a++)
                        x.slides[a] === i && (n = !0);
                if (!i || !n)
                    return x.clickedSlide = void 0,
                    void (x.clickedIndex = void 0);
                if (x.clickedSlide = i,
                x.clickedIndex = e(i).index(),
                x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var r, o = x.clickedIndex, l = "auto" === x.params.slidesPerView ? x.currentSlidesPerView() : x.params.slidesPerView;
                    if (x.params.loop) {
                        if (x.animating)
                            return;
                        r = parseInt(e(x.clickedSlide).attr("data-swiper-slide-index"), 10),
                        x.params.centeredSlides ? o < x.loopedSlides - l / 2 || o > x.slides.length - x.loopedSlides + l / 2 ? (x.fixLoop(),
                        o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o) : o > x.slides.length - l ? (x.fixLoop(),
                        o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + x.params.slideDuplicateClass + ")").eq(0).index(),
                        setTimeout(function() {
                            x.slideTo(o)
                        }, 0)) : x.slideTo(o)
                    } else
                        x.slideTo(o)
                }
            }
            ;
            var C, S, k, E, z, M, P, L, I, D, A = "input, select, textarea, button, video", O = Date.now(), $ = [];
            x.animating = !1,
            x.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var H, N;
            x.onTouchStart = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                (H = "touchstart" === t.type) || !("which"in t) || 3 !== t.which) {
                    if (x.params.noSwiping && s(t, "." + x.params.noSwipingClass))
                        return void (x.allowClick = !0);
                    if (!x.params.swipeHandler || s(t, x.params.swipeHandler)) {
                        var i = x.touches.currentX = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX
                          , n = x.touches.currentY = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY;
                        if (!(x.device.ios && x.params.iOSEdgeSwipeDetection && i <= x.params.iOSEdgeSwipeThreshold)) {
                            if (C = !0,
                            S = !1,
                            k = !0,
                            z = void 0,
                            N = void 0,
                            x.touches.startX = i,
                            x.touches.startY = n,
                            E = Date.now(),
                            x.allowClick = !0,
                            x.updateContainerSize(),
                            x.swipeDirection = void 0,
                            x.params.threshold > 0 && (L = !1),
                            "touchstart" !== t.type) {
                                var a = !0;
                                e(t.target).is(A) && (a = !1),
                                document.activeElement && e(document.activeElement).is(A) && document.activeElement.blur(),
                                a && t.preventDefault()
                            }
                            x.emit("onTouchStart", x, t)
                        }
                    }
                }
            }
            ,
            x.onTouchMove = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                !H || "mousemove" !== t.type) {
                    if (t.preventedByNestedSwiper)
                        return x.touches.startX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        void (x.touches.startY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY);
                    if (x.params.onlyExternal)
                        return x.allowClick = !1,
                        void (C && (x.touches.startX = x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        x.touches.startY = x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        E = Date.now()));
                    if (H && x.params.touchReleaseOnEdges && !x.params.loop)
                        if (x.isHorizontal()) {
                            if (x.touches.currentX < x.touches.startX && x.translate <= x.maxTranslate() || x.touches.currentX > x.touches.startX && x.translate >= x.minTranslate())
                                return
                        } else if (x.touches.currentY < x.touches.startY && x.translate <= x.maxTranslate() || x.touches.currentY > x.touches.startY && x.translate >= x.minTranslate())
                            return;
                    if (H && document.activeElement && t.target === document.activeElement && e(t.target).is(A))
                        return S = !0,
                        void (x.allowClick = !1);
                    if (k && x.emit("onTouchMove", x, t),
                    !(t.targetTouches && t.targetTouches.length > 1)) {
                        if (x.touches.currentX = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX,
                        x.touches.currentY = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY,
                        void 0 === z) {
                            var i;
                            x.isHorizontal() && x.touches.currentY === x.touches.startY || !x.isHorizontal() && x.touches.currentX === x.touches.startX ? z = !1 : (i = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI,
                            z = x.isHorizontal() ? i > x.params.touchAngle : 90 - i > x.params.touchAngle)
                        }
                        if (z && x.emit("onTouchMoveOpposite", x, t),
                        void 0 === N && (x.touches.currentX === x.touches.startX && x.touches.currentY === x.touches.startY || (N = !0)),
                        C) {
                            if (z)
                                return void (C = !1);
                            if (N) {
                                x.allowClick = !1,
                                x.emit("onSliderMove", x, t),
                                t.preventDefault(),
                                x.params.touchMoveStopPropagation && !x.params.nested && t.stopPropagation(),
                                S || (a.loop && x.fixLoop(),
                                P = x.getWrapperTranslate(),
                                x.setWrapperTransition(0),
                                x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()),
                                D = !1,
                                !x.params.grabCursor || !0 !== x.params.allowSwipeToNext && !0 !== x.params.allowSwipeToPrev || x.setGrabCursor(!0)),
                                S = !0;
                                var n = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY;
                                n *= x.params.touchRatio,
                                x.rtl && (n = -n),
                                x.swipeDirection = n > 0 ? "prev" : "next",
                                M = n + P;
                                var r = !0;
                                if (n > 0 && M > x.minTranslate() ? (r = !1,
                                x.params.resistance && (M = x.minTranslate() - 1 + Math.pow(-x.minTranslate() + P + n, x.params.resistanceRatio))) : n < 0 && M < x.maxTranslate() && (r = !1,
                                x.params.resistance && (M = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - P - n, x.params.resistanceRatio))),
                                r && (t.preventedByNestedSwiper = !0),
                                !x.params.allowSwipeToNext && "next" === x.swipeDirection && M < P && (M = P),
                                !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && M > P && (M = P),
                                x.params.threshold > 0) {
                                    if (!(Math.abs(n) > x.params.threshold || L))
                                        return void (M = P);
                                    if (!L)
                                        return L = !0,
                                        x.touches.startX = x.touches.currentX,
                                        x.touches.startY = x.touches.currentY,
                                        M = P,
                                        void (x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX : x.touches.currentY - x.touches.startY)
                                }
                                x.params.followFinger && ((x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(),
                                x.params.freeMode && (0 === $.length && $.push({
                                    position: x.touches[x.isHorizontal() ? "startX" : "startY"],
                                    time: E
                                }),
                                $.push({
                                    position: x.touches[x.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })),
                                x.updateProgress(M),
                                x.setWrapperTranslate(M))
                            }
                        }
                    }
                }
            }
            ,
            x.onTouchEnd = function(t) {
                if (t.originalEvent && (t = t.originalEvent),
                k && x.emit("onTouchEnd", x, t),
                k = !1,
                C) {
                    x.params.grabCursor && S && C && (!0 === x.params.allowSwipeToNext || !0 === x.params.allowSwipeToPrev) && x.setGrabCursor(!1);
                    var i = Date.now()
                      , n = i - E;
                    if (x.allowClick && (x.updateClickedSlide(t),
                    x.emit("onTap", x, t),
                    n < 300 && i - O > 300 && (I && clearTimeout(I),
                    I = setTimeout(function() {
                        x && (x.params.paginationHide && x.paginationContainer.length > 0 && !e(t.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass),
                        x.emit("onClick", x, t))
                    }, 300)),
                    n < 300 && i - O < 300 && (I && clearTimeout(I),
                    x.emit("onDoubleTap", x, t))),
                    O = Date.now(),
                    setTimeout(function() {
                        x && (x.allowClick = !0)
                    }, 0),
                    !C || !S || !x.swipeDirection || 0 === x.touches.diff || M === P)
                        return void (C = S = !1);
                    C = S = !1;
                    var a;
                    if (a = x.params.followFinger ? x.rtl ? x.translate : -x.translate : -M,
                    x.params.freeMode) {
                        if (a < -x.minTranslate())
                            return void x.slideTo(x.activeIndex);
                        if (a > -x.maxTranslate())
                            return void (x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                        if (x.params.freeModeMomentum) {
                            if ($.length > 1) {
                                var r = $.pop()
                                  , o = $.pop()
                                  , s = r.position - o.position
                                  , l = r.time - o.time;
                                x.velocity = s / l,
                                x.velocity = x.velocity / 2,
                                Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - r.time > 300) && (x.velocity = 0)
                            } else
                                x.velocity = 0;
                            x.velocity = x.velocity * x.params.freeModeMomentumVelocityRatio,
                            $.length = 0;
                            var c = 1e3 * x.params.freeModeMomentumRatio
                              , u = x.velocity * c
                              , d = x.translate + u;
                            x.rtl && (d = -d);
                            var p, h = !1, f = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                            if (d < x.maxTranslate())
                                x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -f && (d = x.maxTranslate() - f),
                                p = x.maxTranslate(),
                                h = !0,
                                D = !0) : d = x.maxTranslate();
                            else if (d > x.minTranslate())
                                x.params.freeModeMomentumBounce ? (d - x.minTranslate() > f && (d = x.minTranslate() + f),
                                p = x.minTranslate(),
                                h = !0,
                                D = !0) : d = x.minTranslate();
                            else if (x.params.freeModeSticky) {
                                var m, g = 0;
                                for (g = 0; g < x.snapGrid.length; g += 1)
                                    if (x.snapGrid[g] > -d) {
                                        m = g;
                                        break
                                    }
                                d = Math.abs(x.snapGrid[m] - d) < Math.abs(x.snapGrid[m - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                                x.rtl || (d = -d)
                            }
                            if (0 !== x.velocity)
                                c = x.rtl ? Math.abs((-d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity);
                            else if (x.params.freeModeSticky)
                                return void x.slideReset();
                            x.params.freeModeMomentumBounce && h ? (x.updateProgress(p),
                            x.setWrapperTransition(c),
                            x.setWrapperTranslate(d),
                            x.onTransitionStart(),
                            x.animating = !0,
                            x.wrapper.transitionEnd(function() {
                                x && D && (x.emit("onMomentumBounce", x),
                                x.setWrapperTransition(x.params.speed),
                                x.setWrapperTranslate(p),
                                x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd()
                                }))
                            })) : x.velocity ? (x.updateProgress(d),
                            x.setWrapperTransition(c),
                            x.setWrapperTranslate(d),
                            x.onTransitionStart(),
                            x.animating || (x.animating = !0,
                            x.wrapper.transitionEnd(function() {
                                x && x.onTransitionEnd()
                            }))) : x.updateProgress(d),
                            x.updateActiveIndex()
                        }
                        return void ((!x.params.freeModeMomentum || n >= x.params.longSwipesMs) && (x.updateProgress(),
                        x.updateActiveIndex()))
                    }
                    var v, y = 0, w = x.slidesSizesGrid[0];
                    for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup)
                        void 0 !== x.slidesGrid[v + x.params.slidesPerGroup] ? a >= x.slidesGrid[v] && a < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v,
                        w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : a >= x.slidesGrid[v] && (y = v,
                        w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                    var b = (a - x.slidesGrid[y]) / w;
                    if (n > x.params.longSwipesMs) {
                        if (!x.params.longSwipes)
                            return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)),
                        "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                    } else {
                        if (!x.params.shortSwipes)
                            return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup),
                        "prev" === x.swipeDirection && x.slideTo(y)
                    }
                }
            }
            ,
            x._slideTo = function(e, t) {
                return x.slideTo(e, t, !0, !0)
            }
            ,
            x.slideTo = function(e, t, i, n) {
                void 0 === i && (i = !0),
                void 0 === e && (e = 0),
                e < 0 && (e = 0),
                x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
                x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var a = -x.snapGrid[x.snapIndex];
                if (x.params.autoplay && x.autoplaying && (n || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()),
                x.updateProgress(a),
                x.params.normalizeSlideIndex)
                    for (var r = 0; r < x.slidesGrid.length; r++)
                        -Math.floor(100 * a) >= Math.floor(100 * x.slidesGrid[r]) && (e = r);
                return !(!x.params.allowSwipeToNext && a < x.translate && a < x.minTranslate() || !x.params.allowSwipeToPrev && a > x.translate && a > x.maxTranslate() && (x.activeIndex || 0) !== e || (void 0 === t && (t = x.params.speed),
                x.previousIndex = x.activeIndex || 0,
                x.activeIndex = e,
                x.updateRealIndex(),
                x.rtl && -a === x.translate || !x.rtl && a === x.translate ? (x.params.autoHeight && x.updateAutoHeight(),
                x.updateClasses(),
                "slide" !== x.params.effect && x.setWrapperTranslate(a),
                1) : (x.updateClasses(),
                x.onTransitionStart(i),
                0 === t || x.browser.lteIE9 ? (x.setWrapperTranslate(a),
                x.setWrapperTransition(0),
                x.onTransitionEnd(i)) : (x.setWrapperTranslate(a),
                x.setWrapperTransition(t),
                x.animating || (x.animating = !0,
                x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(i)
                }))),
                0)))
            }
            ,
            x.onTransitionStart = function(e) {
                void 0 === e && (e = !0),
                x.params.autoHeight && x.updateAutoHeight(),
                x.lazy && x.lazy.onTransitionStart(),
                e && (x.emit("onTransitionStart", x),
                x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x),
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
            }
            ,
            x.onTransitionEnd = function(e) {
                x.animating = !1,
                x.setWrapperTransition(0),
                void 0 === e && (e = !0),
                x.lazy && x.lazy.onTransitionEnd(),
                e && (x.emit("onTransitionEnd", x),
                x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x),
                x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                x.params.history && x.history && x.history.setHistory(x.params.history, x.activeIndex),
                x.params.hashnav && x.hashnav && x.hashnav.setHash()
            }
            ,
            x.slideNext = function(e, t, i) {
                return x.params.loop ? !x.animating && (x.fixLoop(),
                x.container[0].clientLeft,
                x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, i)
            }
            ,
            x._slideNext = function(e) {
                return x.slideNext(!0, e, !0)
            }
            ,
            x.slidePrev = function(e, t, i) {
                return x.params.loop ? !x.animating && (x.fixLoop(),
                x.container[0].clientLeft,
                x.slideTo(x.activeIndex - 1, t, e, i)) : x.slideTo(x.activeIndex - 1, t, e, i)
            }
            ,
            x._slidePrev = function(e) {
                return x.slidePrev(!0, e, !0)
            }
            ,
            x.slideReset = function(e, t, i) {
                return x.slideTo(x.activeIndex, t, e)
            }
            ,
            x.disableTouchControl = function() {
                return x.params.onlyExternal = !0,
                !0
            }
            ,
            x.enableTouchControl = function() {
                return x.params.onlyExternal = !1,
                !0
            }
            ,
            x.setWrapperTransition = function(e, t) {
                x.wrapper.transition(e),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
                x.params.parallax && x.parallax && x.parallax.setTransition(e),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                x.params.control && x.controller && x.controller.setTransition(e, t),
                x.emit("onSetTransition", x, e)
            }
            ,
            x.setWrapperTranslate = function(e, t, i) {
                var n = 0
                  , a = 0;
                x.isHorizontal() ? n = x.rtl ? -e : e : a = e,
                x.params.roundLengths && (n = r(n),
                a = r(a)),
                x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + n + "px, " + a + "px, 0px)") : x.wrapper.transform("translate(" + n + "px, " + a + "px)")),
                x.translate = x.isHorizontal() ? n : a;
                var o, s = x.maxTranslate() - x.minTranslate();
                o = 0 === s ? 0 : (e - x.minTranslate()) / s,
                o !== x.progress && x.updateProgress(e),
                t && x.updateActiveIndex(),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                x.params.control && x.controller && x.controller.setTranslate(x.translate, i),
                x.emit("onSetTranslate", x, x.translate)
            }
            ,
            x.getTranslate = function(e, t) {
                var i, n, a, r;
                return void 0 === t && (t = "x"),
                x.params.virtualTranslate ? x.rtl ? -x.translate : x.translate : (a = window.getComputedStyle(e, null),
                window.WebKitCSSMatrix ? (n = a.transform || a.webkitTransform,
                n.split(",").length > 6 && (n = n.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")),
                r = new window.WebKitCSSMatrix("none" === n ? "" : n)) : (r = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                i = r.toString().split(",")),
                "x" === t && (n = window.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                "y" === t && (n = window.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])),
                x.rtl && n && (n = -n),
                n || 0)
            }
            ,
            x.getWrapperTranslate = function(e) {
                return void 0 === e && (e = x.isHorizontal() ? "x" : "y"),
                x.getTranslate(x.wrapper[0], e)
            }
            ,
            x.observers = [],
            x.initObservers = function() {
                if (x.params.observeParents)
                    for (var e = x.container.parents(), t = 0; t < e.length; t++)
                        l(e[t]);
                l(x.container[0], {
                    childList: !1
                }),
                l(x.wrapper[0], {
                    attributes: !1
                })
            }
            ,
            x.disconnectObservers = function() {
                for (var e = 0; e < x.observers.length; e++)
                    x.observers[e].disconnect();
                x.observers = []
            }
            ,
            x.createLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var t = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = t.length),
                x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                x.loopedSlides > t.length && (x.loopedSlides = t.length);
                var i, n = [], a = [];
                for (t.each(function(i, r) {
                    var o = e(this);
                    i < x.loopedSlides && a.push(r),
                    i < t.length && i >= t.length - x.loopedSlides && n.push(r),
                    o.attr("data-swiper-slide-index", i)
                }),
                i = 0; i < a.length; i++)
                    x.wrapper.append(e(a[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (i = n.length - 1; i >= 0; i--)
                    x.wrapper.prepend(e(n[i].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
            }
            ,
            x.destroyLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                x.slides.removeAttr("data-swiper-slide-index")
            }
            ,
            x.reLoop = function(e) {
                var t = x.activeIndex - x.loopedSlides;
                x.destroyLoop(),
                x.createLoop(),
                x.updateSlidesSize(),
                e && x.slideTo(t + x.loopedSlides, 0, !1)
            }
            ,
            x.fixLoop = function() {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex,
                e += x.loopedSlides,
                x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides,
                e += x.loopedSlides,
                x.slideTo(e, 0, !1, !0))
            }
            ,
            x.appendSlide = function(e) {
                if (x.params.loop && x.destroyLoop(),
                "object" == typeof e && e.length)
                    for (var t = 0; t < e.length; t++)
                        e[t] && x.wrapper.append(e[t]);
                else
                    x.wrapper.append(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0)
            }
            ,
            x.prependSlide = function(e) {
                x.params.loop && x.destroyLoop();
                var t = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var i = 0; i < e.length; i++)
                        e[i] && x.wrapper.prepend(e[i]);
                    t = x.activeIndex + e.length
                } else
                    x.wrapper.prepend(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.slideTo(t, 0, !1)
            }
            ,
            x.removeSlide = function(e) {
                x.params.loop && (x.destroyLoop(),
                x.slides = x.wrapper.children("." + x.params.slideClass));
                var t, i = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++)
                        t = e[n],
                        x.slides[t] && x.slides.eq(t).remove(),
                        t < i && i--;
                    i = Math.max(i, 0)
                } else
                    t = e,
                    x.slides[t] && x.slides.eq(t).remove(),
                    t < i && i--,
                    i = Math.max(i, 0);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.params.loop ? x.slideTo(i + x.loopedSlides, 0, !1) : x.slideTo(i, 0, !1)
            }
            ,
            x.removeAllSlides = function() {
                for (var e = [], t = 0; t < x.slides.length; t++)
                    e.push(t);
                x.removeSlide(e)
            }
            ,
            x.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e)
                              , i = t[0].swiperSlideOffset
                              , n = -i;
                            x.params.virtualTranslate || (n -= x.translate);
                            var a = 0;
                            x.isHorizontal() || (a = n,
                            n = 0);
                            var r = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: r
                            }).transform("translate3d(" + n + "px, " + a + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e),
                        x.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            x.slides.transitionEnd(function() {
                                if (!t && x) {
                                    t = !0,
                                    x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], i = 0; i < e.length; i++)
                                        x.wrapper.trigger(e[i])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var t = 0; t < x.slides.length; t++) {
                            var i = x.slides.eq(t)
                              , n = i[0].progress;
                            x.params.flip.limitRotation && (n = Math.max(Math.min(i[0].progress, 1), -1));
                            var a = i[0].swiperSlideOffset
                              , r = -180 * n
                              , o = r
                              , s = 0
                              , l = -a
                              , c = 0;
                            if (x.isHorizontal() ? x.rtl && (o = -o) : (c = l,
                            l = 0,
                            s = -o,
                            o = 0),
                            i[0].style.zIndex = -Math.abs(Math.round(n)) + x.slides.length,
                            x.params.flip.slideShadows) {
                                var u = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top")
                                  , d = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                i.append(u)),
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                i.append(d)),
                                u.length && (u[0].style.opacity = Math.max(-n, 0)),
                                d.length && (d[0].style.opacity = Math.max(n, 0))
                            }
                            i.transform("translate3d(" + l + "px, " + c + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)")
                        }
                    },
                    setTransition: function(t) {
                        if (x.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),
                        x.params.virtualTranslate && 0 !== t) {
                            var i = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                if (!i && x && e(this).hasClass(x.params.slideActiveClass)) {
                                    i = !0,
                                    x.animating = !1;
                                    for (var t = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < t.length; n++)
                                        x.wrapper.trigger(t[n])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var t, i = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (t = x.wrapper.find(".swiper-cube-shadow"),
                        0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                        x.wrapper.append(t)),
                        t.css({
                            height: x.width + "px"
                        })) : (t = x.container.find(".swiper-cube-shadow"),
                        0 === t.length && (t = e('<div class="swiper-cube-shadow"></div>'),
                        x.container.append(t))));
                        for (var n = 0; n < x.slides.length; n++) {
                            var a = x.slides.eq(n)
                              , r = 90 * n
                              , o = Math.floor(r / 360);
                            x.rtl && (r = -r,
                            o = Math.floor(-r / 360));
                            var s = Math.max(Math.min(a[0].progress, 1), -1)
                              , l = 0
                              , c = 0
                              , u = 0;
                            n % 4 == 0 ? (l = 4 * -o * x.size,
                            u = 0) : (n - 1) % 4 == 0 ? (l = 0,
                            u = 4 * -o * x.size) : (n - 2) % 4 == 0 ? (l = x.size + 4 * o * x.size,
                            u = x.size) : (n - 3) % 4 == 0 && (l = -x.size,
                            u = 3 * x.size + 4 * x.size * o),
                            x.rtl && (l = -l),
                            x.isHorizontal() || (c = l,
                            l = 0);
                            var d = "rotateX(" + (x.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (x.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + c + "px, " + u + "px)";
                            if (s <= 1 && s > -1 && (i = 90 * n + 90 * s,
                            x.rtl && (i = 90 * -n - 90 * s)),
                            a.transform(d),
                            x.params.cube.slideShadows) {
                                var p = x.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")
                                  , h = x.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom");
                                0 === p.length && (p = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                a.append(p)),
                                0 === h.length && (h = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                a.append(h)),
                                p.length && (p[0].style.opacity = Math.max(-s, 0)),
                                h.length && (h[0].style.opacity = Math.max(s, 0))
                            }
                        }
                        if (x.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "transform-origin": "50% 50% -" + x.size / 2 + "px"
                        }),
                        x.params.cube.shadow)
                            if (x.isHorizontal())
                                t.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                            else {
                                var f = Math.abs(i) - 90 * Math.floor(Math.abs(i) / 90)
                                  , m = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2)
                                  , g = x.params.cube.shadowScale
                                  , v = x.params.cube.shadowScale / m
                                  , y = x.params.cube.shadowOffset;
                                t.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                            }
                        var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : i) + "deg) rotateY(" + (x.isHorizontal() ? -i : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var t = x.translate, i = x.isHorizontal() ? -t + x.width / 2 : -t + x.height / 2, n = x.isHorizontal() ? x.params.coverflow.rotate : -x.params.coverflow.rotate, a = x.params.coverflow.depth, r = 0, o = x.slides.length; r < o; r++) {
                            var s = x.slides.eq(r)
                              , l = x.slidesSizesGrid[r]
                              , c = s[0].swiperSlideOffset
                              , u = (i - c - l / 2) / l * x.params.coverflow.modifier
                              , d = x.isHorizontal() ? n * u : 0
                              , p = x.isHorizontal() ? 0 : n * u
                              , h = -a * Math.abs(u)
                              , f = x.isHorizontal() ? 0 : x.params.coverflow.stretch * u
                              , m = x.isHorizontal() ? x.params.coverflow.stretch * u : 0;
                            Math.abs(m) < .001 && (m = 0),
                            Math.abs(f) < .001 && (f = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(d) < .001 && (d = 0),
                            Math.abs(p) < .001 && (p = 0);
                            var g = "translate3d(" + m + "px," + f + "px," + h + "px)  rotateX(" + p + "deg) rotateY(" + d + "deg)";
                            if (s.transform(g),
                            s[0].style.zIndex = 1 - Math.abs(Math.round(u)),
                            x.params.coverflow.slideShadows) {
                                var v = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top")
                                  , y = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left" : "top") + '"></div>'),
                                s.append(v)),
                                0 === y.length && (y = e('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right" : "bottom") + '"></div>'),
                                s.append(y)),
                                v.length && (v[0].style.opacity = u > 0 ? u : 0),
                                y.length && (y[0].style.opacity = -u > 0 ? -u : 0)
                            }
                        }
                        x.browser.ie && (x.wrapper[0].style.perspectiveOrigin = i + "px 50%")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            x.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(t, i) {
                    if (void 0 !== t && (void 0 === i && (i = !0),
                    0 !== x.slides.length)) {
                        var n = x.slides.eq(t)
                          , a = n.find("." + x.params.lazyLoadingClass + ":not(." + x.params.lazyStatusLoadedClass + "):not(." + x.params.lazyStatusLoadingClass + ")");
                        !n.hasClass(x.params.lazyLoadingClass) || n.hasClass(x.params.lazyStatusLoadedClass) || n.hasClass(x.params.lazyStatusLoadingClass) || (a = a.add(n[0])),
                        0 !== a.length && a.each(function() {
                            var t = e(this);
                            t.addClass(x.params.lazyStatusLoadingClass);
                            var a = t.attr("data-background")
                              , r = t.attr("data-src")
                              , o = t.attr("data-srcset")
                              , s = t.attr("data-sizes");
                            x.loadImage(t[0], r || a, o, s, !1, function() {
                                if (void 0 !== x && null !== x && x) {
                                    if (a ? (t.css("background-image", 'url("' + a + '")'),
                                    t.removeAttr("data-background")) : (o && (t.attr("srcset", o),
                                    t.removeAttr("data-srcset")),
                                    s && (t.attr("sizes", s),
                                    t.removeAttr("data-sizes")),
                                    r && (t.attr("src", r),
                                    t.removeAttr("data-src"))),
                                    t.addClass(x.params.lazyStatusLoadedClass).removeClass(x.params.lazyStatusLoadingClass),
                                    n.find("." + x.params.lazyPreloaderClass + ", ." + x.params.preloaderClass).remove(),
                                    x.params.loop && i) {
                                        var e = n.attr("data-swiper-slide-index");
                                        if (n.hasClass(x.params.slideDuplicateClass)) {
                                            var l = x.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                            x.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var c = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            x.lazy.loadImageInSlide(c.index(), !1)
                                        }
                                    }
                                    x.emit("onLazyImageReady", x, n[0], t[0])
                                }
                            }),
                            x.emit("onLazyImageLoad", x, n[0], t[0])
                        })
                    }
                },
                load: function() {
                    var t, i = x.params.slidesPerView;
                    if ("auto" === i && (i = 0),
                    x.lazy.initialImageLoaded || (x.lazy.initialImageLoaded = !0),
                    x.params.watchSlidesVisibility)
                        x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                            x.lazy.loadImageInSlide(e(this).index())
                        });
                    else if (i > 1)
                        for (t = x.activeIndex; t < x.activeIndex + i; t++)
                            x.slides[t] && x.lazy.loadImageInSlide(t);
                    else
                        x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext)
                        if (i > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                            var n = x.params.lazyLoadingInPrevNextAmount
                              , a = i
                              , r = Math.min(x.activeIndex + a + Math.max(n, a), x.slides.length)
                              , o = Math.max(x.activeIndex - Math.max(a, n), 0);
                            for (t = x.activeIndex + i; t < r; t++)
                                x.slides[t] && x.lazy.loadImageInSlide(t);
                            for (t = o; t < x.activeIndex; t++)
                                x.slides[t] && x.lazy.loadImageInSlide(t)
                        } else {
                            var s = x.wrapper.children("." + x.params.slideNextClass);
                            s.length > 0 && x.lazy.loadImageInSlide(s.index());
                            var l = x.wrapper.children("." + x.params.slidePrevClass);
                            l.length > 0 && x.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                },
                onTransitionEnd: function() {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                }
            },
            x.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = x.scrollbar
                      , i = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY
                      , n = i - t.track.offset()[x.isHorizontal() ? "left" : "top"] - t.dragSize / 2
                      , a = -x.minTranslate() * t.moveDivider
                      , r = -x.maxTranslate() * t.moveDivider;
                    n < a ? n = a : n > r && (n = r),
                    n = -n / t.moveDivider,
                    x.updateProgress(n),
                    x.setWrapperTranslate(n, !0)
                },
                dragStart: function(e) {
                    var t = x.scrollbar;
                    t.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setDragPosition(e),
                    clearTimeout(t.dragTimeout),
                    t.track.transition(0),
                    x.params.scrollbarHide && t.track.css("opacity", 1),
                    x.wrapper.transition(100),
                    t.drag.transition(100),
                    x.emit("onScrollbarDragStart", x)
                },
                dragMove: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    t.setDragPosition(e),
                    x.wrapper.transition(0),
                    t.track.transition(0),
                    t.drag.transition(0),
                    x.emit("onScrollbarDragMove", x))
                },
                dragEnd: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (t.isTouched = !1,
                    x.params.scrollbarHide && (clearTimeout(t.dragTimeout),
                    t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0),
                        t.track.transition(400)
                    }, 1e3)),
                    x.emit("onScrollbarDragEnd", x),
                    x.params.scrollbarSnapOnRelease && x.slideReset())
                },
                draggableEvents: function() {
                    return !1 !== x.params.simulateTouch || x.support.touch ? x.touchEvents : x.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var t = x.scrollbar
                      , i = x.support.touch ? t.track : document;
                    e(t.track).on(t.draggableEvents.start, t.dragStart),
                    e(i).on(t.draggableEvents.move, t.dragMove),
                    e(i).on(t.draggableEvents.end, t.dragEnd)
                },
                disableDraggable: function() {
                    var t = x.scrollbar
                      , i = x.support.touch ? t.track : document;
                    e(t.track).off(t.draggableEvents.start, t.dragStart),
                    e(i).off(t.draggableEvents.move, t.dragMove),
                    e(i).off(t.draggableEvents.end, t.dragEnd)
                },
                set: function() {
                    if (x.params.scrollbar) {
                        var t = x.scrollbar;
                        t.track = e(x.params.scrollbar),
                        x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && t.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (t.track = x.container.find(x.params.scrollbar)),
                        t.drag = t.track.find(".swiper-scrollbar-drag"),
                        0 === t.drag.length && (t.drag = e('<div class="swiper-scrollbar-drag"></div>'),
                        t.track.append(t.drag)),
                        t.drag[0].style.width = "",
                        t.drag[0].style.height = "",
                        t.trackSize = x.isHorizontal() ? t.track[0].offsetWidth : t.track[0].offsetHeight,
                        t.divider = x.size / x.virtualSize,
                        t.moveDivider = t.divider * (t.trackSize / x.size),
                        t.dragSize = t.trackSize * t.divider,
                        x.isHorizontal() ? t.drag[0].style.width = t.dragSize + "px" : t.drag[0].style.height = t.dragSize + "px",
                        t.divider >= 1 ? t.track[0].style.display = "none" : t.track[0].style.display = "",
                        x.params.scrollbarHide && (t.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (x.params.scrollbar) {
                        var e, t = x.scrollbar, i = (x.translate,
                        t.dragSize);
                        e = (t.trackSize - t.dragSize) * x.progress,
                        x.rtl && x.isHorizontal() ? (e = -e,
                        e > 0 ? (i = t.dragSize - e,
                        e = 0) : -e + t.dragSize > t.trackSize && (i = t.trackSize + e)) : e < 0 ? (i = t.dragSize + e,
                        e = 0) : e + t.dragSize > t.trackSize && (i = t.trackSize - e),
                        x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"),
                        t.drag[0].style.width = i + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"),
                        t.drag[0].style.height = i + "px"),
                        x.params.scrollbarHide && (clearTimeout(t.timeout),
                        t.track[0].style.opacity = 1,
                        t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0,
                            t.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                }
            },
            x.controller = {
                LinearSpline: function(e, t) {
                    var i = function() {
                        var e, t, i;
                        return function(n, a) {
                            for (t = -1,
                            e = n.length; e - t > 1; )
                                n[i = e + t >> 1] <= a ? t = i : e = i;
                            return e
                        }
                    }();
                    this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1;
                    var n, a;
                    this.x.length,
                    this.interpolate = function(e) {
                        return e ? (a = i(this.x, e),
                        n = a - 1,
                        (e - this.x[n]) * (this.y[a] - this.y[n]) / (this.x[a] - this.x[n]) + this.y[n]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid,e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid,e.snapGrid))
                },
                setTranslate: function(e, i) {
                    function n(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -x.translate : x.translate,
                        "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t),
                        r = -x.controller.spline.interpolate(-e)),
                        r && "container" !== x.params.controlBy || (a = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()),
                        r = (e - x.minTranslate()) * a + t.minTranslate()),
                        x.params.controlInverse && (r = t.maxTranslate() - r),
                        t.updateProgress(r),
                        t.setWrapperTranslate(r, !1, x),
                        t.updateActiveIndex()
                    }
                    var a, r, o = x.params.control;
                    if (Array.isArray(o))
                        for (var s = 0; s < o.length; s++)
                            o[s] !== i && o[s]instanceof t && n(o[s]);
                    else
                        o instanceof t && i !== o && n(o)
                },
                setTransition: function(e, i) {
                    function n(t) {
                        t.setWrapperTransition(e, x),
                        0 !== e && (t.onTransitionStart(),
                        t.wrapper.transitionEnd(function() {
                            r && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(),
                            t.onTransitionEnd())
                        }))
                    }
                    var a, r = x.params.control;
                    if (Array.isArray(r))
                        for (a = 0; a < r.length; a++)
                            r[a] !== i && r[a]instanceof t && n(r[a]);
                    else
                        r instanceof t && i !== r && n(r)
                }
            },
            x.hashnav = {
                onHashCange: function(e, t) {
                    var i = document.location.hash.replace("#", "");
                    i !== x.slides.eq(x.activeIndex).attr("data-hash") && x.slideTo(x.wrapper.children("." + x.params.slideClass + '[data-hash="' + i + '"]').index())
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    e(window)[i]("hashchange", x.hashnav.onHashCange)
                },
                setHash: function() {
                    if (x.hashnav.initialized && x.params.hashnav)
                        if (x.params.replaceState && window.history && window.history.replaceState)
                            window.history.replaceState(null, null, "#" + x.slides.eq(x.activeIndex).attr("data-hash") || "");
                        else {
                            var e = x.slides.eq(x.activeIndex)
                              , t = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = t || ""
                        }
                },
                init: function() {
                    if (x.params.hashnav && !x.params.history) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var t = 0, i = x.slides.length; t < i; t++) {
                                var n = x.slides.eq(t)
                                  , a = n.attr("data-hash") || n.attr("data-history");
                                if (a === e && !n.hasClass(x.params.slideDuplicateClass)) {
                                    var r = n.index();
                                    x.slideTo(r, 0, x.params.runCallbacksOnInit, !0)
                                }
                            }
                        x.params.hashnavWatchState && x.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    x.params.hashnavWatchState && x.hashnav.attachEvents(!0)
                }
            },
            x.history = {
                init: function() {
                    if (x.params.history) {
                        if (!window.history || !window.history.pushState)
                            return x.params.history = !1,
                            void (x.params.hashnav = !0);
                        x.history.initialized = !0,
                        this.paths = this.getPathValues(),
                        (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, x.params.runCallbacksOnInit),
                        x.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    x.history.paths = x.history.getPathValues(),
                    x.history.scrollToSlide(x.params.speed, x.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/")
                      , t = e.length;
                    return {
                        key: e[t - 2],
                        value: e[t - 1]
                    }
                },
                setHistory: function(e, t) {
                    if (x.history.initialized && x.params.history) {
                        var i = x.slides.eq(t)
                          , n = this.slugify(i.attr("data-history"));
                        window.location.pathname.includes(e) || (n = e + "/" + n),
                        x.params.replaceState ? window.history.replaceState(null, null, n) : window.history.pushState(null, null, n)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, t, i) {
                    if (t)
                        for (var n = 0, a = x.slides.length; n < a; n++) {
                            var r = x.slides.eq(n)
                              , o = this.slugify(r.attr("data-history"));
                            if (o === t && !r.hasClass(x.params.slideDuplicateClass)) {
                                var s = r.index();
                                x.slideTo(s, e, i)
                            }
                        }
                    else
                        x.slideTo(0, e, i)
                }
            },
            x.disableKeyboardControl = function() {
                x.params.keyboardControl = !1,
                e(document).off("keydown", c)
            }
            ,
            x.enableKeyboardControl = function() {
                x.params.keyboardControl = !0,
                e(document).on("keydown", c)
            }
            ,
            x.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            x.params.mousewheelControl && (x.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel"in document;
                if (!e) {
                    var t = document.createElement("div");
                    t.setAttribute("onwheel", "return;"),
                    e = "function" == typeof t.onwheel
                }
                return !e && document.implementation && document.implementation.hasFeature && !0 !== document.implementation.hasFeature("", "") && (e = document.implementation.hasFeature("Events.wheel", "3.0")),
                e
            }() ? "wheel" : "mousewheel"),
            x.disableMousewheelControl = function() {
                if (!x.mousewheel.event)
                    return !1;
                var t = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                t.off(x.mousewheel.event, d),
                x.params.mousewheelControl = !1,
                !0
            }
            ,
            x.enableMousewheelControl = function() {
                if (!x.mousewheel.event)
                    return !1;
                var t = x.container;
                return "container" !== x.params.mousewheelEventsTarged && (t = e(x.params.mousewheelEventsTarged)),
                t.on(x.mousewheel.event, d),
                x.params.mousewheelControl = !0,
                !0
            }
            ,
            x.parallax = {
                setTranslate: function() {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        p(this, x.progress)
                    }),
                    x.slides.each(function() {
                        var t = e(this);
                        t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            p(this, Math.min(Math.max(t[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(t) {
                    void 0 === t && (t = x.params.speed),
                    x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var i = e(this)
                          , n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || t;
                        0 === t && (n = 0),
                        i.transition(n)
                    })
                }
            },
            x.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: x.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2)
                        return 1;
                    var t = e.targetTouches[0].pageX
                      , i = e.targetTouches[0].pageY
                      , n = e.targetTouches[1].pageX
                      , a = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(a - i, 2))
                },
                onGestureStart: function(t) {
                    var i = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2)
                            return;
                        i.gesture.scaleStart = i.getDistanceBetweenTouches(t)
                    }
                    if (!(i.gesture.slide && i.gesture.slide.length || (i.gesture.slide = e(this),
                    0 === i.gesture.slide.length && (i.gesture.slide = x.slides.eq(x.activeIndex)),
                    i.gesture.image = i.gesture.slide.find("img, svg, canvas"),
                    i.gesture.imageWrap = i.gesture.image.parent("." + x.params.zoomContainerClass),
                    i.gesture.zoomMax = i.gesture.imageWrap.attr("data-swiper-zoom") || x.params.zoomMax,
                    0 !== i.gesture.imageWrap.length)))
                        return void (i.gesture.image = void 0);
                    i.gesture.image.transition(0),
                    i.isScaling = !0
                },
                onGestureChange: function(e) {
                    var t = x.zoom;
                    if (!x.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2)
                            return;
                        t.gesture.scaleMove = t.getDistanceBetweenTouches(e)
                    }
                    t.gesture.image && 0 !== t.gesture.image.length && (x.support.gestures ? t.scale = e.scale * t.currentScale : t.scale = t.gesture.scaleMove / t.gesture.scaleStart * t.currentScale,
                    t.scale > t.gesture.zoomMax && (t.scale = t.gesture.zoomMax - 1 + Math.pow(t.scale - t.gesture.zoomMax + 1, .5)),
                    t.scale < x.params.zoomMin && (t.scale = x.params.zoomMin + 1 - Math.pow(x.params.zoomMin - t.scale + 1, .5)),
                    t.gesture.image.transform("translate3d(0,0,0) scale(" + t.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var t = x.zoom;
                    !x.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || t.gesture.image && 0 !== t.gesture.image.length && (t.scale = Math.max(Math.min(t.scale, t.gesture.zoomMax), x.params.zoomMin),
                    t.gesture.image.transition(x.params.speed).transform("translate3d(0,0,0) scale(" + t.scale + ")"),
                    t.currentScale = t.scale,
                    t.isScaling = !1,
                    1 === t.scale && (t.gesture.slide = void 0))
                },
                onTouchStart: function(e, t) {
                    var i = e.zoom;
                    i.gesture.image && 0 !== i.gesture.image.length && (i.image.isTouched || ("android" === e.device.os && t.preventDefault(),
                    i.image.isTouched = !0,
                    i.image.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX,
                    i.image.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
                },
                onTouchMove: function(e) {
                    var t = x.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length && (x.allowClick = !1,
                    t.image.isTouched && t.gesture.slide)) {
                        t.image.isMoved || (t.image.width = t.gesture.image[0].offsetWidth,
                        t.image.height = t.gesture.image[0].offsetHeight,
                        t.image.startX = x.getTranslate(t.gesture.imageWrap[0], "x") || 0,
                        t.image.startY = x.getTranslate(t.gesture.imageWrap[0], "y") || 0,
                        t.gesture.slideWidth = t.gesture.slide[0].offsetWidth,
                        t.gesture.slideHeight = t.gesture.slide[0].offsetHeight,
                        t.gesture.imageWrap.transition(0),
                        x.rtl && (t.image.startX = -t.image.startX),
                        x.rtl && (t.image.startY = -t.image.startY));
                        var i = t.image.width * t.scale
                          , n = t.image.height * t.scale;
                        if (!(i < t.gesture.slideWidth && n < t.gesture.slideHeight)) {
                            if (t.image.minX = Math.min(t.gesture.slideWidth / 2 - i / 2, 0),
                            t.image.maxX = -t.image.minX,
                            t.image.minY = Math.min(t.gesture.slideHeight / 2 - n / 2, 0),
                            t.image.maxY = -t.image.minY,
                            t.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                            t.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                            !t.image.isMoved && !t.isScaling) {
                                if (x.isHorizontal() && Math.floor(t.image.minX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x < t.image.touchesStart.x || Math.floor(t.image.maxX) === Math.floor(t.image.startX) && t.image.touchesCurrent.x > t.image.touchesStart.x)
                                    return void (t.image.isTouched = !1);
                                if (!x.isHorizontal() && Math.floor(t.image.minY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y < t.image.touchesStart.y || Math.floor(t.image.maxY) === Math.floor(t.image.startY) && t.image.touchesCurrent.y > t.image.touchesStart.y)
                                    return void (t.image.isTouched = !1)
                            }
                            e.preventDefault(),
                            e.stopPropagation(),
                            t.image.isMoved = !0,
                            t.image.currentX = t.image.touchesCurrent.x - t.image.touchesStart.x + t.image.startX,
                            t.image.currentY = t.image.touchesCurrent.y - t.image.touchesStart.y + t.image.startY,
                            t.image.currentX < t.image.minX && (t.image.currentX = t.image.minX + 1 - Math.pow(t.image.minX - t.image.currentX + 1, .8)),
                            t.image.currentX > t.image.maxX && (t.image.currentX = t.image.maxX - 1 + Math.pow(t.image.currentX - t.image.maxX + 1, .8)),
                            t.image.currentY < t.image.minY && (t.image.currentY = t.image.minY + 1 - Math.pow(t.image.minY - t.image.currentY + 1, .8)),
                            t.image.currentY > t.image.maxY && (t.image.currentY = t.image.maxY - 1 + Math.pow(t.image.currentY - t.image.maxY + 1, .8)),
                            t.velocity.prevPositionX || (t.velocity.prevPositionX = t.image.touchesCurrent.x),
                            t.velocity.prevPositionY || (t.velocity.prevPositionY = t.image.touchesCurrent.y),
                            t.velocity.prevTime || (t.velocity.prevTime = Date.now()),
                            t.velocity.x = (t.image.touchesCurrent.x - t.velocity.prevPositionX) / (Date.now() - t.velocity.prevTime) / 2,
                            t.velocity.y = (t.image.touchesCurrent.y - t.velocity.prevPositionY) / (Date.now() - t.velocity.prevTime) / 2,
                            Math.abs(t.image.touchesCurrent.x - t.velocity.prevPositionX) < 2 && (t.velocity.x = 0),
                            Math.abs(t.image.touchesCurrent.y - t.velocity.prevPositionY) < 2 && (t.velocity.y = 0),
                            t.velocity.prevPositionX = t.image.touchesCurrent.x,
                            t.velocity.prevPositionY = t.image.touchesCurrent.y,
                            t.velocity.prevTime = Date.now(),
                            t.gesture.imageWrap.transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, t) {
                    var i = e.zoom;
                    if (i.gesture.image && 0 !== i.gesture.image.length) {
                        if (!i.image.isTouched || !i.image.isMoved)
                            return i.image.isTouched = !1,
                            void (i.image.isMoved = !1);
                        i.image.isTouched = !1,
                        i.image.isMoved = !1;
                        var n = 300
                          , a = 300
                          , r = i.velocity.x * n
                          , o = i.image.currentX + r
                          , s = i.velocity.y * a
                          , l = i.image.currentY + s;
                        0 !== i.velocity.x && (n = Math.abs((o - i.image.currentX) / i.velocity.x)),
                        0 !== i.velocity.y && (a = Math.abs((l - i.image.currentY) / i.velocity.y));
                        var c = Math.max(n, a);
                        i.image.currentX = o,
                        i.image.currentY = l;
                        var u = i.image.width * i.scale
                          , d = i.image.height * i.scale;
                        i.image.minX = Math.min(i.gesture.slideWidth / 2 - u / 2, 0),
                        i.image.maxX = -i.image.minX,
                        i.image.minY = Math.min(i.gesture.slideHeight / 2 - d / 2, 0),
                        i.image.maxY = -i.image.minY,
                        i.image.currentX = Math.max(Math.min(i.image.currentX, i.image.maxX), i.image.minX),
                        i.image.currentY = Math.max(Math.min(i.image.currentY, i.image.maxY), i.image.minY),
                        i.gesture.imageWrap.transition(c).transform("translate3d(" + i.image.currentX + "px, " + i.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var t = e.zoom;
                    t.gesture.slide && e.previousIndex !== e.activeIndex && (t.gesture.image.transform("translate3d(0,0,0) scale(1)"),
                    t.gesture.imageWrap.transform("translate3d(0,0,0)"),
                    t.gesture.slide = t.gesture.image = t.gesture.imageWrap = void 0,
                    t.scale = t.currentScale = 1)
                },
                toggleZoom: function(t, i) {
                    var n = t.zoom;
                    if (n.gesture.slide || (n.gesture.slide = t.clickedSlide ? e(t.clickedSlide) : t.slides.eq(t.activeIndex),
                    n.gesture.image = n.gesture.slide.find("img, svg, canvas"),
                    n.gesture.imageWrap = n.gesture.image.parent("." + t.params.zoomContainerClass)),
                    n.gesture.image && 0 !== n.gesture.image.length) {
                        var a, r, o, s, l, c, u, d, p, h, f, m, g, v, y, w, b, x;
                        void 0 === n.image.touchesStart.x && i ? (a = "touchend" === i.type ? i.changedTouches[0].pageX : i.pageX,
                        r = "touchend" === i.type ? i.changedTouches[0].pageY : i.pageY) : (a = n.image.touchesStart.x,
                        r = n.image.touchesStart.y),
                        n.scale && 1 !== n.scale ? (n.scale = n.currentScale = 1,
                        n.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),
                        n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),
                        n.gesture.slide = void 0) : (n.scale = n.currentScale = n.gesture.imageWrap.attr("data-swiper-zoom") || t.params.zoomMax,
                        i ? (b = n.gesture.slide[0].offsetWidth,
                        x = n.gesture.slide[0].offsetHeight,
                        o = n.gesture.slide.offset().left,
                        s = n.gesture.slide.offset().top,
                        l = o + b / 2 - a,
                        c = s + x / 2 - r,
                        p = n.gesture.image[0].offsetWidth,
                        h = n.gesture.image[0].offsetHeight,
                        f = p * n.scale,
                        m = h * n.scale,
                        g = Math.min(b / 2 - f / 2, 0),
                        v = Math.min(x / 2 - m / 2, 0),
                        y = -g,
                        w = -v,
                        u = l * n.scale,
                        d = c * n.scale,
                        u < g && (u = g),
                        u > y && (u = y),
                        d < v && (d = v),
                        d > w && (d = w)) : (u = 0,
                        d = 0),
                        n.gesture.imageWrap.transition(300).transform("translate3d(" + u + "px, " + d + "px,0)"),
                        n.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + n.scale + ")"))
                    }
                },
                attachEvents: function(t) {
                    var i = t ? "off" : "on";
                    if (x.params.zoom) {
                        var n = (x.slides,
                        !("touchstart" !== x.touchEvents.start || !x.support.passiveListener || !x.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        x.support.gestures ? (x.slides[i]("gesturestart", x.zoom.onGestureStart, n),
                        x.slides[i]("gesturechange", x.zoom.onGestureChange, n),
                        x.slides[i]("gestureend", x.zoom.onGestureEnd, n)) : "touchstart" === x.touchEvents.start && (x.slides[i](x.touchEvents.start, x.zoom.onGestureStart, n),
                        x.slides[i](x.touchEvents.move, x.zoom.onGestureChange, n),
                        x.slides[i](x.touchEvents.end, x.zoom.onGestureEnd, n)),
                        x[i]("touchStart", x.zoom.onTouchStart),
                        x.slides.each(function(t, n) {
                            e(n).find("." + x.params.zoomContainerClass).length > 0 && e(n)[i](x.touchEvents.move, x.zoom.onTouchMove)
                        }),
                        x[i]("touchEnd", x.zoom.onTouchEnd),
                        x[i]("transitionEnd", x.zoom.onTransitionEnd),
                        x.params.zoomToggle && x.on("doubleTap", x.zoom.toggleZoom)
                    }
                },
                init: function() {
                    x.zoom.attachEvents()
                },
                destroy: function() {
                    x.zoom.attachEvents(!0)
                }
            },
            x._plugins = [];
            for (var q in x.plugins) {
                var j = x.plugins[q](x, x.params[q]);
                j && x._plugins.push(j)
            }
            return x.callPlugins = function(e) {
                for (var t = 0; t < x._plugins.length; t++)
                    e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            x.emitterEventListeners = {},
            x.emit = function(e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (x.emitterEventListeners[e])
                    for (t = 0; t < x.emitterEventListeners[e].length; t++)
                        x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }
            ,
            x.on = function(e, t) {
                return e = h(e),
                x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                x.emitterEventListeners[e].push(t),
                x
            }
            ,
            x.off = function(e, t) {
                var i;
                if (e = h(e),
                void 0 === t)
                    return x.emitterEventListeners[e] = [],
                    x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (i = 0; i < x.emitterEventListeners[e].length; i++)
                        x.emitterEventListeners[e][i] === t && x.emitterEventListeners[e].splice(i, 1);
                    return x
                }
            }
            ,
            x.once = function(e, t) {
                e = h(e);
                var i = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    x.off(e, i)
                };
                return x.on(e, i),
                x
            }
            ,
            x.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(t) {
                    13 === t.keyCode && (e(t.target).is(x.params.nextButton) ? (x.onClickNext(t),
                    x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : e(t.target).is(x.params.prevButton) && (x.onClickPrev(t),
                    x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)),
                    e(t.target).is("." + x.params.bulletClass) && e(t.target)[0].click())
                },
                liveRegion: e('<span class="' + x.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""),
                    t.html(e))
                },
                init: function() {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton),
                    x.a11y.addRole(x.nextButton, "button"),
                    x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                    x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton),
                    x.a11y.addRole(x.prevButton, "button"),
                    x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                    e(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function() {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                        var t = e(this);
                        x.a11y.makeFocusable(t),
                        x.a11y.addRole(t, "button"),
                        x.a11y.addLabel(t, x.params.paginationBulletMessage.replace(/{{index}}/, t.index() + 1))
                    })
                },
                destroy: function() {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                }
            },
            x.init = function() {
                x.params.loop && x.createLoop(),
                x.updateContainerSize(),
                x.updateSlidesSize(),
                x.updatePagination(),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.set(),
                x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(),
                x.effects[x.params.effect].setTranslate()),
                x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit),
                0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(),
                x.lazy && x.params.lazyLoading && (x.lazy.load(),
                x.lazy.initialImageLoaded = !0))),
                x.attachEvents(),
                x.params.observer && x.support.observer && x.initObservers(),
                x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                x.params.zoom && x.zoom && x.zoom.init(),
                x.params.autoplay && x.startAutoplay(),
                x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                x.params.hashnavReplaceState && (x.params.replaceState = x.params.hashnavReplaceState),
                x.params.history && x.history && x.history.init(),
                x.params.hashnav && x.hashnav && x.hashnav.init(),
                x.params.a11y && x.a11y && x.a11y.init(),
                x.emit("onInit", x)
            }
            ,
            x.cleanupStyles = function() {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                x.wrapper.removeAttr("style"),
                x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                x.params.prevButton && e(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                x.params.nextButton && e(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"),
                x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            }
            ,
            x.destroy = function(e, t) {
                x.detachEvents(),
                x.stopAutoplay(),
                x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                x.params.loop && x.destroyLoop(),
                t && x.cleanupStyles(),
                x.disconnectObservers(),
                x.params.zoom && x.zoom && x.zoom.destroy(),
                x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                x.params.a11y && x.a11y && x.a11y.destroy(),
                x.params.history && !x.params.replaceState && window.removeEventListener("popstate", x.history.setHistoryPopState),
                x.params.hashnav && x.hashnav && x.hashnav.destroy(),
                x.emit("onDestroy"),
                !1 !== e && (x = null)
            }
            ,
            x.init(),
            x
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",
                1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent
              , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
              , i = e.match(/(iPad).*OS\s([\d_]+)/)
              , n = e.match(/(iPod)(.*OS\s([\d_]+))?/)
              , a = !i && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: i || a || n,
                android: t
            }
        }(),
        support: {
            touch: window.Modernizr && !0 === Modernizr.touch || function() {
                return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && !0 === Modernizr.csstransforms3d || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i++)
                    if (t[i]in e)
                        return !0
            }(),
            observer: function() {
                return "MutationObserver"in window || "WebkitMutationObserver"in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart"in window
            }()
        },
        plugins: {}
    };
    for (var i = (function() {
        var e = function(e) {
            var t = this
              , i = 0;
            for (i = 0; i < e.length; i++)
                t[i] = e[i];
            return t.length = e.length,
            this
        }
          , t = function(t, i) {
            var n = []
              , a = 0;
            if (t && !i && t instanceof e)
                return t;
            if (t)
                if ("string" == typeof t) {
                    var r, o, s = t.trim();
                    if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                        var l = "div";
                        for (0 === s.indexOf("<li") && (l = "ul"),
                        0 === s.indexOf("<tr") && (l = "tbody"),
                        0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (l = "tr"),
                        0 === s.indexOf("<tbody") && (l = "table"),
                        0 === s.indexOf("<option") && (l = "select"),
                        o = document.createElement(l),
                        o.innerHTML = t,
                        a = 0; a < o.childNodes.length; a++)
                            n.push(o.childNodes[a])
                    } else
                        for (r = i || "#" !== t[0] || t.match(/[ .<>:~]/) ? (i || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])],
                        a = 0; a < r.length; a++)
                            r[a] && n.push(r[a])
                } else if (t.nodeType || t === window || t === document)
                    n.push(t);
                else if (t.length > 0 && t[0].nodeType)
                    for (a = 0; a < t.length; a++)
                        n.push(t[a]);
            return new e(n)
        };
        return e.prototype = {
            addClass: function(e) {
                if (void 0 === e)
                    return this;
                for (var t = e.split(" "), i = 0; i < t.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.add(t[i]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.remove(t[i]);
                return this
            },
            hasClass: function(e) {
                return !!this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), i = 0; i < t.length; i++)
                    for (var n = 0; n < this.length; n++)
                        this[n].classList.toggle(t[i]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e)
                    return this[0] ? this[0].getAttribute(e) : void 0;
                for (var i = 0; i < this.length; i++)
                    if (2 === arguments.length)
                        this[i].setAttribute(e, t);
                    else
                        for (var n in e)
                            this[i][n] = e[n],
                            this[i].setAttribute(n, e[n]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t++)
                    this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                if (void 0 !== t) {
                    for (var i = 0; i < this.length; i++) {
                        var n = this[i];
                        n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}),
                        n.dom7ElementDataStorage[e] = t
                    }
                    return this
                }
                if (this[0]) {
                    var a = this[0].getAttribute("data-" + e);
                    return a || (this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0)
                }
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var i = this[t].style;
                    i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
                }
                return this
            },
            on: function(e, i, n, a) {
                function r(e) {
                    var a = e.target;
                    if (t(a).is(i))
                        n.call(a, e);
                    else
                        for (var r = t(a).parents(), o = 0; o < r.length; o++)
                            t(r[o]).is(i) && n.call(r[o], e)
                }
                var o, s, l = e.split(" ");
                for (o = 0; o < this.length; o++)
                    if ("function" == typeof i || !1 === i)
                        for ("function" == typeof i && (n = arguments[1],
                        a = arguments[2] || !1),
                        s = 0; s < l.length; s++)
                            this[o].addEventListener(l[s], n, a);
                    else
                        for (s = 0; s < l.length; s++)
                            this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []),
                            this[o].dom7LiveListeners.push({
                                listener: n,
                                liveListener: r
                            }),
                            this[o].addEventListener(l[s], r, a);
                return this
            },
            off: function(e, t, i, n) {
                for (var a = e.split(" "), r = 0; r < a.length; r++)
                    for (var o = 0; o < this.length; o++)
                        if ("function" == typeof t || !1 === t)
                            "function" == typeof t && (i = arguments[1],
                            n = arguments[2] || !1),
                            this[o].removeEventListener(a[r], i, n);
                        else if (this[o].dom7LiveListeners)
                            for (var s = 0; s < this[o].dom7LiveListeners.length; s++)
                                this[o].dom7LiveListeners[s].listener === i && this[o].removeEventListener(a[r], this[o].dom7LiveListeners[s].liveListener, n);
                return this
            },
            once: function(e, t, i, n) {
                function a(o) {
                    i(o),
                    r.off(e, t, a, n)
                }
                var r = this;
                "function" == typeof t && (t = !1,
                i = arguments[1],
                n = arguments[2]),
                r.on(e, t, a, n)
            },
            trigger: function(e, t) {
                for (var i = 0; i < this.length; i++) {
                    var n;
                    try {
                        n = new window.CustomEvent(e,{
                            detail: t,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (i) {
                        n = document.createEvent("Event"),
                        n.initEvent(e, !0, !0),
                        n.detail = t
                    }
                    this[i].dispatchEvent(n)
                }
                return this
            },
            transitionEnd: function(e) {
                function t(r) {
                    if (r.target === this)
                        for (e.call(this, r),
                        i = 0; i < n.length; i++)
                            a.off(n[i], t)
                }
                var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = this;
                if (e)
                    for (i = 0; i < n.length; i++)
                        a.on(n[i], t);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
            },
            height: function() {
                return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0]
                      , t = e.getBoundingClientRect()
                      , i = document.body
                      , n = e.clientTop || i.clientTop || 0
                      , a = e.clientLeft || i.clientLeft || 0
                      , r = window.pageYOffset || e.scrollTop
                      , o = window.pageXOffset || e.scrollLeft;
                    return {
                        top: t.top + r - n,
                        left: t.left + o - a
                    }
                }
                return null
            },
            css: function(e, t) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i++)
                            for (var n in e)
                                this[i].style[n] = e[n];
                        return this
                    }
                    if (this[0])
                        return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (i = 0; i < this.length; i++)
                        this[i].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var t = 0; t < this.length; t++)
                    e.call(this[t], t, this[t]);
                return this
            },
            html: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t++)
                    this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e)
                    return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++)
                    this[t].textContent = e;
                return this
            },
            is: function(i) {
                if (!this[0])
                    return !1;
                var n, a;
                if ("string" == typeof i) {
                    var r = this[0];
                    if (r === document)
                        return i === document;
                    if (r === window)
                        return i === window;
                    if (r.matches)
                        return r.matches(i);
                    if (r.webkitMatchesSelector)
                        return r.webkitMatchesSelector(i);
                    if (r.mozMatchesSelector)
                        return r.mozMatchesSelector(i);
                    if (r.msMatchesSelector)
                        return r.msMatchesSelector(i);
                    for (n = t(i),
                    a = 0; a < n.length; a++)
                        if (n[a] === this[0])
                            return !0;
                    return !1
                }
                if (i === document)
                    return this[0] === document;
                if (i === window)
                    return this[0] === window;
                if (i.nodeType || i instanceof e) {
                    for (n = i.nodeType ? [i] : i,
                    a = 0; a < n.length; a++)
                        if (n[a] === this[0])
                            return !0;
                    return !1
                }
                return !1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], t = 0; null !== (e = e.previousSibling); )
                        1 === e.nodeType && t++;
                    return t
                }
            },
            eq: function(t) {
                if (void 0 === t)
                    return this;
                var i, n = this.length;
                return t > n - 1 ? new e([]) : t < 0 ? (i = n + t,
                new e(i < 0 ? [] : [this[i]])) : new e([this[t]])
            },
            append: function(t) {
                var i, n;
                for (i = 0; i < this.length; i++)
                    if ("string" == typeof t) {
                        var a = document.createElement("div");
                        for (a.innerHTML = t; a.firstChild; )
                            this[i].appendChild(a.firstChild)
                    } else if (t instanceof e)
                        for (n = 0; n < t.length; n++)
                            this[i].appendChild(t[n]);
                    else
                        this[i].appendChild(t);
                return this
            },
            prepend: function(t) {
                var i, n;
                for (i = 0; i < this.length; i++)
                    if ("string" == typeof t) {
                        var a = document.createElement("div");
                        for (a.innerHTML = t,
                        n = a.childNodes.length - 1; n >= 0; n--)
                            this[i].insertBefore(a.childNodes[n], this[i].childNodes[0])
                    } else if (t instanceof e)
                        for (n = 0; n < t.length; n++)
                            this[i].insertBefore(t[n], this[i].childNodes[0]);
                    else
                        this[i].insertBefore(t, this[i].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var i = t(e), n = 0; n < this.length; n++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[n], i[0]);
                    else if (i.length > 1)
                        for (var a = 0; a < i.length; a++)
                            i[a].parentNode.insertBefore(this[n].cloneNode(!0), i[a])
            },
            insertAfter: function(e) {
                for (var i = t(e), n = 0; n < this.length; n++)
                    if (1 === i.length)
                        i[0].parentNode.insertBefore(this[n], i[0].nextSibling);
                    else if (i.length > 1)
                        for (var a = 0; a < i.length; a++)
                            i[a].parentNode.insertBefore(this[n].cloneNode(!0), i[a].nextSibling)
            },
            next: function(i) {
                return new e(this.length > 0 ? i ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(i) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(i) {
                var n = []
                  , a = this[0];
                if (!a)
                    return new e([]);
                for (; a.nextElementSibling; ) {
                    var r = a.nextElementSibling;
                    i ? t(r).is(i) && n.push(r) : n.push(r),
                    a = r
                }
                return new e(n)
            },
            prev: function(i) {
                return new e(this.length > 0 ? i ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(i) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(i) {
                var n = []
                  , a = this[0];
                if (!a)
                    return new e([]);
                for (; a.previousElementSibling; ) {
                    var r = a.previousElementSibling;
                    i ? t(r).is(i) && n.push(r) : n.push(r),
                    a = r
                }
                return new e(n)
            },
            parent: function(e) {
                for (var i = [], n = 0; n < this.length; n++)
                    e ? t(this[n].parentNode).is(e) && i.push(this[n].parentNode) : i.push(this[n].parentNode);
                return t(t.unique(i))
            },
            parents: function(e) {
                for (var i = [], n = 0; n < this.length; n++)
                    for (var a = this[n].parentNode; a; )
                        e ? t(a).is(e) && i.push(a) : i.push(a),
                        a = a.parentNode;
                return t(t.unique(i))
            },
            find: function(t) {
                for (var i = [], n = 0; n < this.length; n++)
                    for (var a = this[n].querySelectorAll(t), r = 0; r < a.length; r++)
                        i.push(a[r]);
                return new e(i)
            },
            children: function(i) {
                for (var n = [], a = 0; a < this.length; a++)
                    for (var r = this[a].childNodes, o = 0; o < r.length; o++)
                        i ? 1 === r[o].nodeType && t(r[o]).is(i) && n.push(r[o]) : 1 === r[o].nodeType && n.push(r[o]);
                return new e(t.unique(n))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++)
                    this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, i, n = this;
                for (e = 0; e < arguments.length; e++) {
                    var a = t(arguments[e]);
                    for (i = 0; i < a.length; i++)
                        n[n.length] = a[i],
                        n.length++
                }
                return n
            }
        },
        t.fn = e.prototype,
        t.unique = function(e) {
            for (var t = [], i = 0; i < e.length; i++)
                -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t
        }
        ,
        t
    }()), n = ["jQuery", "Zepto", "Dom7"], a = 0; a < n.length; a++)
        window[n[a]] && function(e) {
            e.fn.swiper = function(i) {
                var n;
                return e(this).each(function() {
                    var e = new t(this,i);
                    n || (n = e)
                }),
                n
            }
        }(window[n[a]]);
    var r;
    r = void 0 === i ? window.Dom7 || window.Zepto || window.jQuery : i,
    r && ("transitionEnd"in r.fn || (r.fn.transitionEnd = function(e) {
        function t(r) {
            if (r.target === this)
                for (e.call(this, r),
                i = 0; i < n.length; i++)
                    a.off(n[i], t)
        }
        var i, n = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], a = this;
        if (e)
            for (i = 0; i < n.length; i++)
                a.on(n[i], t);
        return this
    }
    ),
    "transform"in r.fn || (r.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = e
        }
        return this
    }
    ),
    "transition"in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var i = this[t].style;
            i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration = i.transitionDuration = e
        }
        return this
    }
    ),
    "outerWidth"in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    }
    )),
    window.Swiper = t
}(),
"undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
}),
function(e, t) {
    "object" == typeof exports && exports ? module.exports = t : "function" == typeof define && define.amd ? define(t) : e.Mustache = t
}(this, function() {
    function e(e, t) {
        return RegExp.prototype.test.call(e, t)
    }
    function t(t) {
        return !e(p, t)
    }
    function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function n(e) {
        return String(e).replace(/[&<>"'\/]/g, function(e) {
            return f[e]
        })
    }
    function a(e) {
        this.string = e,
        this.tail = e,
        this.pos = 0
    }
    function r(e, t) {
        this.view = e,
        this.parent = t,
        this.clearCache()
    }
    function o() {
        this.clearCache()
    }
    function s(e) {
        function t(e, t, n) {
            if (!i[e]) {
                var a = s(t);
                i[e] = function(e, t) {
                    return a(e, t, n)
                }
            }
            return i[e]
        }
        var i = {};
        return function(i, n, a) {
            for (var r, o, s = "", l = 0, c = e.length; l < c; ++l)
                switch (r = e[l],
                r[0]) {
                case "#":
                    o = a.slice(r[3], r[5]),
                    s += i._section(r[1], n, o, t(l, r[4], a));
                    break;
                case "^":
                    s += i._inverted(r[1], n, t(l, r[4], a));
                    break;
                case ">":
                    s += i._partial(r[1], n);
                    break;
                case "&":
                    s += i._name(r[1], n);
                    break;
                case "name":
                    s += i._escaped(r[1], n);
                    break;
                case "text":
                    s += r[1]
                }
            return s
        }
    }
    function l(e) {
        for (var t, i = [], n = i, a = [], r = 0, o = e.length; r < o; ++r)
            switch (t = e[r],
            t[0]) {
            case "#":
            case "^":
                a.push(t),
                n.push(t),
                n = t[4] = [];
                break;
            case "/":
                a.pop()[5] = t[2],
                n = a.length > 0 ? a[a.length - 1][4] : i;
                break;
            default:
                n.push(t)
            }
        return i
    }
    function c(e) {
        for (var t, i, n = [], a = 0, r = e.length; a < r; ++a)
            t = e[a],
            "text" === t[0] && i && "text" === i[0] ? (i[1] += t[1],
            i[3] = t[3]) : (i = t,
            n.push(t));
        return n
    }
    function u(e) {
        return [new RegExp(i(e[0]) + "\\s*"), new RegExp("\\s*" + i(e[1]))]
    }
    var d = {};
    d.name = "mustache.js",
    d.version = "0.7.2",
    d.tags = ["{{", "}}"],
    d.Scanner = a,
    d.Context = r,
    d.Writer = o;
    var p = /\S/
      , h = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    }
      , f = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;"
    };
    d.escape = n,
    a.prototype.eos = function() {
        return "" === this.tail
    }
    ,
    a.prototype.scan = function(e) {
        var t = this.tail.match(e);
        return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length),
        this.pos += t[0].length,
        t[0]) : ""
    }
});
$(document).on('click','.select-item-level2',function(e){
        $('.select-box').slideUp(200);
        $('.select-box').removeClass('active');
        $('.select-head').removeClass('active');
        var icon = $(this).parent().parent().parent().parent().data('cat-icon');
        var id = $(this).data('cat-id');
        $('#cat-id').val(id);
        $('.select-icon i').removeClass().addClass('fa fa-'+icon);
});





$(document).on('click','.show-num', function(){
    $(this).addClass('active');
});


$(document).on('click','.home-tab, .profile-posts-tab', function(){
    if(!$(this).hasClass('active')) {
        $('.home-tab, .profile-posts-tab').removeClass('active');
        $(this).addClass('active');
        var getTab = $(this).data('tab-target');
        $('.home-tabs-screens, .profile-screens').animate({opacity:'0'},200);
        setTimeout(function(){
            $('.home-tab-screen, .boxed-ads.in-profile').removeClass('active');
            $(getTab).addClass('active');
            $('.home-tabs-screens, .profile-screens').animate({opacity:'1'},200);
        },200);
    }
});


$(document).on('click','.my-modal .closer, .global-overlay, .close-me', function(){
    $('.my-modal, .global-overlay').fadeOut(300);
});


$(document).on('click','.pack1-on', function(){
    $('.o-extra0').click();
    $('.my-modal, .global-overlay').fadeOut(300);
});

$(document).on('click','.pack2-on', function(){
    $('.o-extra1').click();
    $('.my-modal, .global-overlay').fadeOut(300);
});

$(document).on('click','.pack3-on', function(){
    $('.o-extra2').click();
    $('.my-modal, .global-overlay').fadeOut(300);
});

$(document).on('click','.pack4-on', function(){
    $('.o-extra3').click();
    $('.my-modal, .global-overlay').fadeOut(300);
});

$(document).on('click','.modal-open', function(){
    var modal = $(this).data('modal-open');
    $('.global-overlay, '+modal).fadeIn(300);
});

$(document).on('click','.tab-button', function(){
    if(!$(this).hasClass('active')) {
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        var getTab = $(this).data('tab-btn');
        $('.mini-tab-box').animate({opacity:'0'},200);
        setTimeout(function(){
            $('.mini-tab-box').removeClass('active');
            $(getTab).addClass('active');
            if(!$(getTab).hasClass('swiped')) {
            var swiper = new Swiper(getTab+' .swiper-container', {
                nextButton:".swiper-button-next",
                prevButton:".swiper-button-prev"
            });
            $(getTab).addClass('swiped');
            }
            $('.mini-tab-box').animate({opacity:'1'},200);
        },200);
    }
    ,
    r.prototype.clearCache = function() {
        this._cache = {}
    }
    ,
    r.prototype.push = function(e) {
        return new r(e,this)
    }
    ,
    r.prototype.lookup = function(e) {
        var t = this._cache[e];
        if (!t) {
            if ("." === e)
                t = this.view;
            else
                for (var i = this; i; ) {
                    if (e.indexOf(".") > 0) {
                        var n = e.split(".")
                          , a = 0;
                        for (t = i.view; t && a < n.length; )
                            t = t[n[a++]]
                    } else
                        t = i.view[e];
                    if (null != t)
                        break;
                    i = i.parent
                }
            this._cache[e] = t
        }
        return "function" == typeof t && (t = t.call(this.view)),
        t
    }
    ,
    o.prototype.clearCache = function() {
        this._cache = {},
        this._partialCache = {}
    }
    ,
    o.prototype.compile = function(e, t) {
        var i = this._cache[e];
        if (!i) {
            var n = d.parse(e, t);
            i = this._cache[e] = this.compileTokens(n, e)
        }
        return i
    }
    ,
    o.prototype.compilePartial = function(e, t, i) {
        var n = this.compile(t, i);
        return this._partialCache[e] = n,
        n
    }
    ,
    o.prototype.compileTokens = function(e, t) {
        var i = s(e)
          , n = this;
        return function(e, a) {
            if (a)
                if ("function" == typeof a)
                    n._loadPartial = a;
                else
                    for (var o in a)
                        n.compilePartial(o, a[o]);
            return i(n, r.make(e), t)
        }
    }
    ,
    o.prototype.render = function(e, t, i) {
        return this.compile(e)(t, i)
    }
    ,
    o.prototype._section = function(e, t, i, n) {
        var a = t.lookup(e);
        switch (typeof a) {
        case "object":
            if (h(a)) {
                for (var r = "", o = 0, s = a.length; o < s; ++o)
                    r += n(this, t.push(a[o]));
                return r
            }
            return a ? n(this, t.push(a)) : "";
        case "function":
            var l = this
              , c = function(e) {
                return l.render(e, t)
            }
              , u = a.call(t.view, i, c);
            return null != u ? u : "";
        default:
            if (a)
                return n(this, t)
        }
        return ""
    }
    ,
    o.prototype._inverted = function(e, t, i) {
        var n = t.lookup(e);
        return !n || h(n) && 0 === n.length ? i(this, t) : ""
    }
    ,
    o.prototype._partial = function(e, t) {
        e in this._partialCache || !this._loadPartial || this.compilePartial(e, this._loadPartial(e));
        var i = this._partialCache[e];
        return i ? i(t) : ""
    }
    ,
    o.prototype._name = function(e, t) {
        var i = t.lookup(e);
        return "function" == typeof i && (i = i.call(t.view)),
        null == i ? "" : String(i)
    }
    ,
    o.prototype._escaped = function(e, t) {
        return d.escape(this._name(e, t))
    }
    ,
    d.parse = function(e, n) {
        if (e = e || "",
        n = n || d.tags,
        "string" == typeof n && (n = n.split(/\s+/)),
        2 !== n.length)
            throw new Error("Invalid tags: " + n.join(", "));
        for (var r, o, s, p, h = u(n), f = new a(e), m = [], g = [], v = [], y = !1, w = !1; !f.eos(); ) {
            if (r = f.pos,
            s = f.scanUntil(h[0]))
                for (var b = 0, x = s.length; b < x; ++b)
                    p = s.charAt(b),
                    t(p) ? v.push(g.length) : w = !0,
                    g.push(["text", p, r, r + 1]),
                    r += 1,
                    "\n" === p && function() {
                        if (y && !w)
                            for (; v.length; )
                                g.splice(v.pop(), 1);
                        else
                            v = [];
                        y = !1,
                        w = !1
                    }();
            if (r = f.pos,
            !f.scan(h[0]))
                break;
            if (y = !0,
            o = f.scan(/#|\^|\/|>|\{|&|=|!/) || "name",
            f.scan(/\s*/),
            "=" === o)
                s = f.scanUntil(/\s*=/),
                f.scan(/\s*=/),
                f.scanUntil(h[1]);
            else if ("{" === o) {
                var T = new RegExp("\\s*" + i("}" + n[1]));
                s = f.scanUntil(T),
                f.scan(/\s*\}/),
                f.scanUntil(h[1]),
                o = "&"
            } else
                s = f.scanUntil(h[1]);
            if (!f.scan(h[1]))
                throw new Error("Unclosed tag at " + f.pos);
            if ("/" === o) {
                if (0 === m.length)
                    throw new Error('Unopened section "' + s + '" at ' + r);
                var C = m.pop();
                if (C[1] !== s)
                    throw new Error('Unclosed section "' + C[1] + '" at ' + r)
            }
            var S = [o, s, r, f.pos];
            if (g.push(S),
            "#" === o || "^" === o)
                m.push(S);
            else if ("name" === o || "{" === o || "&" === o)
                w = !0;
            else if ("=" === o) {
                if (n = s.split(/\s+/),
                2 !== n.length)
                    throw new Error("Invalid tags at " + r + ": " + n.join(", "));
                h = u(n)
            }
        }
        var C = m.pop();
        if (C)
            throw new Error('Unclosed section "' + C[1] + '" at ' + f.pos);
        return l(c(g))
    }
    ;
    var m = new o;
    return d.clearCache = function() {
        return m.clearCache()
    }
    ,
    d.compile = function(e, t) {
        return m.compile(e, t)
    }
    ,
    d.compilePartial = function(e, t, i) {
        return m.compilePartial(e, t, i)
    }
    ,
    d.compileTokens = function(e, t) {
        return m.compileTokens(e, t)
    }
    ,
    d.render = function(e, t, i) {
        return m.render(e, t, i)
    }
    ,
    d.to_html = function(e, t, i, n) {
        var a = d.render(e, t, i);
        if ("function" != typeof n)
            return a;
        n(a)
    }
    ,
    d
}()),
function(e) {
    e.fn.ezShare = function(t) {
        var i = {
            wrapper: this,
            template: "#ezShareTemplate",
            faceBookUrl: "http://www.facebook.com/sharer.php",
            twitterUrl: "https://twitter.com/share",
            googlePlusUrl: "https://plus.google.com/share",
            externalTemplate: !1,
            externalTemplateFile: "js/ezShareTemplate.html"
        }
          , t = e.extend(i, t)
          , n = t
          , a = e(n.wrapper)
          , r = e(n.template).html()
          , o = n.faceBookUrl
          , s = n.twitterUrl
          , l = n.googlePlusUrl
          , c = [];
        if (a.each(function() {
            c.push({
                faceBook: 'window.open ("' + o + "?u=" + e(this).data("url") + "&t=" + e(this).data("title") + '","tdFBShare","status=0,resizable=1,height=400,width=600")',
                twitter: 'window.open ("' + s + "?url=" + e(this).data("url") + "&text=" + escape(e(this).data("tweet")) + "&hashtags=" + e(this).data("hash-tags") + ' ,placeholder","tdTWShare","status=0,resizable=1,height=400,width=600")',
                googlePlus: 'window.open ("' + l + "?url=" + e(this).data("url") + '","tdTWShare","status=0,resizable=1,height=400,width=600")'
            })
        }),
        1 == n.externalTemplate)
            e.get(n.externalTemplateFile, function(t) {
                var i = e(t).filter(n.template).html()
                  , r = Mustache.to_html(i, {
                    shareData: c
                });
                a.html(r)
            });
        else {
            var u = Mustache.to_html(r, {
                shareData: c
            });
            a.html(u)
        }
    }
}(jQuery),
$(function() {
    function t() {
        function e(e, i) {
            if (!/\.(jpe?g|png|gif)$/i.test(i.name))
                return alert(i.name + " is not an image");
            var n = new FileReader;
            $(n).on("load", function() {
                t.append($("<img/>", {
                    src: this.result,
                    height: 100
                }))
            }),
            n.readAsDataURL(i)
        }
        var t = $("#preview").empty();
        this.files && $.each(this.files, e)
    }
    $(document).on("change", ".single-upload", function(e) {
        var t = $(this).parent().addClass("has-img").find("span")
          , i = new FileReader;
        i.onload = function() {
            t.css({
                "background-image": "url(" + i.result + ")"
            })
        }
        ,
        i.readAsDataURL(e.target.files[0]),
        $(this).parent().next(".upload-image").addClass("active")
    }),
    $(document).on("click", ".upload-image i", function(e) {
        $(this).parent().removeClass("has-img").find("input").val(""),
        $(this).parent().find("span").css({
            "background-image": "none"
        }),
        $(this).parent().hasClass("one-up") || ($(".hidden-wrap").length && ($(".hidden-wrap").prev(".upload-image").hasClass("has-img") || $(this).parent().removeClass("active")),
        $(this).parent().appendTo($(this).parent().parent())),
        $(".hidden-wrap").length && $(".hidden-wrap").appendTo(".upload-repeater")
    }),
    $(document).on("click", ".account-head", function() {
        $(".account-drop").hasClass("active") ? ($(".account-drop").removeClass("active"),
        $(".account-drop").slideUp(200)) : ($(".account-drop").addClass("active"),
        $(".account-drop").slideDown(200))
    }),
    $(document).on("click", ".show-drop", function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"),
        $(this).parent().find(".my-drop").slideUp(200)) : ($(this).addClass("active"),
        $(this).parent().find(".my-drop").slideDown(200)),
        e.preventDefault()
    }),
    $(document).on("click", ".group-toggle", function() {
        $(this).parent().is(".select-group") ? $(this).hasClass("active") ? ($(this).parent().find(".group-box").slideUp(200),
        $(this).removeClass("active")) : ($(this).addClass("active"),
        $(this).parent().find(".group-box").slideDown(200)) : $(this).hasClass("active") ? ($(this).parent().find(".group-box2").slideUp(200),
        $(this).removeClass("active")) : ($(this).addClass("active"),
        $(this).parent().find(".group-box2").slideDown(200))
    }),
    $(document).on("click", ".select-head", function() {
        $(".select-box").hasClass("active") ? ($(".select-box").slideUp(200),
        $(".select-box").removeClass("active"),
        $(this).removeClass("active")) : ($(this).addClass("active"),
        $(".select-box").addClass("active"),
        $(".select-box").slideDown(200))
    }),
    $(document).on("click", ".select-group", function(e) {
        if (!$(e.target).closest(".group-toggle, .group-box").length) {
            $(".select-box").slideUp(200),
            $(".select-box").removeClass("active"),
            $(".select-head").removeClass("active");
            var t = $(this).data("cat-icon")
              , i = $(this).data("cat-id");
            $("#cat-id").val(i),
            $(".select-icon i").removeClass().addClass("fa fa-" + t)
        }
    }),
    $(document).on("click", ".select-item-level1", function(e) {
        if (!$(e.target).closest(".group-toggle, .group-box2").length) {
            $(".select-box").slideUp(200),
            $(".select-box").removeClass("active"),
            $(".select-head").removeClass("active");
            var t = $(this).parent().parent().data("cat-icon")
              , i = $(this).data("cat-id");
            $("#cat-id").val(i),
            $(".select-icon i").removeClass().addClass("fa fa-" + t)
        }
    }),
    $(document).on("click", ".select-item-level2", function(e) {
        $(".select-box").slideUp(200),
        $(".select-box").removeClass("active"),
        $(".select-head").removeClass("active");
        var t = $(this).parent().parent().parent().parent().data("cat-icon")
          , i = $(this).data("cat-id");
        $("#cat-id").val(i),
        $(".select-icon i").removeClass().addClass("fa fa-" + t)
    }),
    $(document).on("click", ".watch-icon", function(e) {
        e.preventDefault(),
        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active")
    }),
    $(document).on("click", ".show-num", function() {
        $(this).addClass("active")
    }),
    $(document).on("click", ".home-tab, .profile-posts-tab", function() {
        if (!$(this).hasClass("active")) {
            $(".home-tab, .profile-posts-tab").removeClass("active"),
            $(this).addClass("active");
            var e = $(this).data("tab-target");
            $(".home-tabs-screens, .profile-screens").animate({
                opacity: "0"
            }, 200),
            setTimeout(function() {
                $(".home-tab-screen, .boxed-ads.in-profile").removeClass("active"),
                $(e).addClass("active"),
                $(".home-tabs-screens, .profile-screens").animate({
                    opacity: "1"
                }, 200)
            }, 200)
        }
    }),
    $(document).on("click", ".my-modal .closer, .global-overlay, .close-me", function() {
        $(".my-modal, .global-overlay").fadeOut(300)
    }),
    $(document).on("click", ".pack1-on", function() {
        $(".o-extra0").click(),
        $(".my-modal, .global-overlay").fadeOut(300)
    }),
    $(document).on("click", ".pack2-on", function() {
        $(".o-extra1").click(),
        $(".my-modal, .global-overlay").fadeOut(300)
    }),
    $(document).on("click", ".pack3-on", function() {
        $(".o-extra2").click(),
        $(".my-modal, .global-overlay").fadeOut(300)
    }),
    $(document).on("click", ".pack4-on", function() {
        $(".o-extra3").click(),
        $(".my-modal, .global-overlay").fadeOut(300)
    }),
    $(document).on("click", ".modal-open", function() {
        var t = $(this).data("modal-open");
        $(".global-overlay, " + t).fadeIn(300);

    }),
    $(document).on("click", ".tab-button", function() {
        if (!$(this).hasClass("active")) {
            $(".tab-button").removeClass("active"),
            $(this).addClass("active");
            var e = $(this).data("tab-btn");
            $(".mini-tab-box").animate({
                opacity: "0"
            }, 200),
            setTimeout(function() {
                if ($(".mini-tab-box").removeClass("active"),
                $(e).addClass("active"),
                !$(e).hasClass("swiped")) {
                    new Swiper(e + " .swiper-container",{
                        nextButton: ".swiper-button-next",
                        prevButton: ".swiper-button-prev"
                    });
                    $(e).addClass("swiped")
                }
                $(".mini-tab-box").animate({
                    opacity: "1"
                }, 200)
            }, 200)
        }
    });
    var i = (new Swiper(".home-slider .swiper-container",{
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    }),
    new Swiper(".mini-tab-box .swiper-container",{
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    }),
    new Swiper(".gallery-top",{
        spaceBetween: 10,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev"
    }))
      , n = new Swiper(".gallery-thumbs",{
        spaceBetween: 10,
        centeredSlides: !0,
        slidesPerView: "auto",
        touchRatio: .2,
        slideToClickedSlide: !0
    });
    i.params.control = n,
    n.params.control = i,
    $(document).on("click", ".filter-title", function() {
        $(this).hasClass("active") ? ($(this).removeClass("active"),
        $(this).parent().hasClass("has-sub") ? $(this).parent().find(".filter-level2-data").slideUp(200) : $(this).parent().find(".filter-level1-data").slideUp(200)) : ($(this).addClass("active"),
        $(this).parent().hasClass("has-sub") ? $(this).parent().find(".filter-level2-data").slideDown(200) : $(this).parent().find(".filter-level1-data").slideDown(200))
    }),
    $(document).on("click", ".switch-view", function() {
        $(this).hasClass("active") || ($(".switch-view").removeClass("active"),
        $(this).addClass("active"),
        $(this).hasClass("list-view") ? $(".ads-list").removeClass("boxed-ads") : $(".ads-list").addClass("boxed-ads"))
    }),
    $(document).on("change", ".o-extra0", function() {
        this.checked && ($(".extra1, .extra2, .extra3").removeClass("is-off"),
        $(".extra1, .extra2, .extra3").find("input").attr("disabled", !1)),
        $(".hidden-wrap").length || ($(".upload-repeater .upload-image").slice(10, 20).wrapAll('<div class="hidden-wrap" />'),
        $(".hidden-wrap .upload-image").each(function() {
            $(this).removeClass("has-img active").find("input").val(""),
            $(this).find("span").css({
                "background-image": "none"
            })
        }))
    }),
    $(document).on("change", ".o-extra1", function() {
        this.checked && ($(".extra1, .extra2, .extra3").removeClass("is-off"),
        $(".extra1, .extra2, .extra3").find("input").attr("disabled", !1),
        $(".extra1").addClass("is-off"),
        $(".extra1").find("input").prop("checked", !1).attr("disabled", !0),
        $(".hidden-wrap").length || ($(".upload-repeater .upload-image").slice(10, 20).wrapAll('<div class="hidden-wrap" />'),
        $(".hidden-wrap .upload-image").each(function() {
            $(this).removeClass("has-img active").find("input").val(""),
            $(this).find("span").css({
                "background-image": "none"
            })
        })))
    }),
    $(document).on("change", ".o-extra2", function() {
        this.checked && ($(".extra1, .extra2, .extra3").removeClass("is-off"),
        $(".extra1, .extra2, .extra3").find("input").attr("disabled", !1),
        $(".extra1, .extra2").addClass("is-off"),
        $(".extra1, .extra2").find("input").prop("checked", !1).attr("disabled", !0),
        $(".hidden-wrap").length && ($(".hidden-wrap").prev(".upload-image").hasClass("has-img") && $(".hidden-wrap").find(".upload-image:first-child").addClass("active"),
        $(".hidden-wrap").find(".upload-image").unwrap()))
    }),
    $(document).on("change", ".o-extra3", function() {
        this.checked && ($(".extra1, .extra2, .extra3").removeClass("is-off"),
        $(".extra1, .extra2, .extra3").find("input").attr("disabled", !1),
        $(".extra1, .extra2, .extra3").addClass("is-off"),
        $(".extra1, .extra2, .extra3").find("input").prop("checked", !1).attr("disabled", !0),
        $(".hidden-wrap").length && ($(".hidden-wrap").prev(".upload-image").hasClass("has-img") && $(".hidden-wrap").find(".upload-image:first-child").addClass("active"),
        $(".hidden-wrap").find(".upload-image").unwrap()))
    }),
    $(document).on("change", ".range-time", function() {
        var e = $(this).val()
          , t = $(".range-num").val();
        20 == t && (20 == e && ($(".packed .pack-num span").text("400"),
        $(".pack-calc").val("400")),
        40 == e && ($(".packed .pack-num span").text("1100"),
        $(".pack-calc").val("1100")),
        60 == e && ($(".packed .pack-num span").text("2000"),
        $(".pack-calc").val("2000")),
        80 == e && ($(".packed .pack-num span").text("3800"),
        $(".pack-calc").val("3800"))),
        40 == t && (20 == e && ($(".packed .pack-num span").text("890"),
        $(".pack-calc").val("890")),
        40 == e && ($(".packed .pack-num span").text("2300"),
        $(".pack-calc").val("2300")),
        60 == e && ($(".packed .pack-num span").text("4200"),
        $(".pack-calc").val("4200")),
        80 == e && ($(".packed .pack-num span").text("8000"),
        $(".pack-calc").val("8000"))),
        60 == t && (20 == e && ($(".packed .pack-num span").text("1250"),
        $(".pack-calc").val("1250")),
        40 == e && ($(".packed .pack-num span").text("3200"),
        $(".pack-calc").val("3200")),
        60 == e && ($(".packed .pack-num span").text("5800"),
        $(".pack-calc").val("5800")),
        80 == e && ($(".packed .pack-num span").text("11200"),
        $(".pack-calc").val("11200"))),
        80 == t && (20 == e && ($(".packed .pack-num span").text("2000"),
        $(".pack-calc").val("2000")),
        40 == e && ($(".packed .pack-num span").text("4800"),
        $(".pack-calc").val("4800")),
        60 == e && ($(".packed .pack-num span").text("8700"),
        $(".pack-calc").val("8700")),
        80 == e && ($(".packed .pack-num span").text("16200"),
        $(".pack-calc").val("16200")))
    }),
    $(document).on("change", ".range-num", function() {
        var e = $(this).val()
          , t = $(".range-time").val();
        20 == e && (20 == t && ($(".packed .pack-num span").text("400"),
        $(".pack-calc").val("400")),
        40 == t && ($(".packed .pack-num span").text("1100"),
        $(".pack-calc").val("1100")),
        60 == t && ($(".packed .pack-num span").text("2000"),
        $(".pack-calc").val("2000")),
        80 == t && ($(".packed .pack-num span").text("3800"),
        $(".pack-calc").val("3800"))),
        40 == e && (20 == t && ($(".packed .pack-num span").text("890"),
        $(".pack-calc").val("890")),
        40 == t && ($(".packed .pack-num span").text("2300"),
        $(".pack-calc").val("2300")),
        60 == t && ($(".packed .pack-num span").text("4200"),
        $(".pack-calc").val("4200")),
        80 == t && ($(".packed .pack-num span").text("8000"),
        $(".pack-calc").val("8000"))),
        60 == e && (20 == t && ($(".packed .pack-num span").text("1250"),
        $(".pack-calc").val("1250")),
        40 == t && ($(".packed .pack-num span").text("3200"),
        $(".pack-calc").val("3200")),
        60 == t && ($(".packed .pack-num span").text("5800"),
        $(".pack-calc").val("5800")),
        80 == t && ($(".packed .pack-num span").text("11200"),
        $(".pack-calc").val("11200"))),
        80 == e && (20 == t && ($(".packed .pack-num span").text("2000"),
        $(".pack-calc").val("2000")),
        40 == t && ($(".packed .pack-num span").text("4800"),
        $(".pack-calc").val("4800")),
        60 == t && ($(".packed .pack-num span").text("8700"),
        $(".pack-calc").val("8700")),
        80 == t && ($(".packed .pack-num span").text("16200"),
        $(".pack-calc").val("16200")))
    }),
    $(document).on("change", ".file-upload .hidden-upload", function() {
        var e = $(this).val().split("\\").pop().split("/").pop();
        $(this).parent().find("input[type=text]").val(e)
    }),
    $(document).on("click", ".file-upload .open-file", function() {
        return $(this).parent().find(".hidden-upload").click(),
        !1
    }),
    $(".ezShare").ezShare(),
    $(document).on("click", function(e) {
        $(e.target).closest(".account-box").length || ($(".account-drop").removeClass("active"),
        $(".account-drop").slideUp(200)),
        $(e.target).closest(".select-box, .select-head").length || ($(".select-box:not(.links)").slideUp(200),
        $(".select-box:not(.links)").removeClass("active"),
        $(".select-head").removeClass("active")),
        $(e.target).closest(".my-drop, .show-drop").length || ($(".my-drop").slideUp(200),
        $(".show-drop").removeClass("active"))
    }),
    $(".top-group .checkbox input[type=radio]").on("change", function() {
        this.checked && ($(this).hasClass("show-price") ? $(".price-hidden").slideDown(300) : $(".price-hidden").slideUp(300))
    }),
    $("#file-input").on("change", t)
});

$(document).on('click', '.watch-icon', function(e){
	var thisinput = $(this);
    var postid = $(this).find('input.post_id').val();
    var state = $(this).find('input.liked');
    var csrf_token = $('meta[name="csrf-token"]').attr('content');
	$.ajax({
        type:'POST',
        url:'/favorite/posts/'+postid,
        data: {postid, '_token':csrf_token},
        success:function(data) {
            state.val(data);
            if(state.val() == 0) {
		        thisinput.removeClass('active');
		    } else {
		        thisinput.addClass('active');
			}
        }
      });
});

$('.watch-icon').click(function(e){ 
	e.preventDefault();
});
  
  
  
$(document).on('click', '.open-msgs', function() {
    var thispop = $(this);
    var msgsid = $(this).parent().find('#msgs-id').val();
    var getpop = $(this).data('modal-open');
    $(getpop).find('.maseges-container').empty();

    $.ajax({
        url: '/allmessages/' + msgsid,
        type: 'get',
        dataType: 'json',
        success: function(data) {
  
            $.each(data.messages, function() {
                $(getpop).find('.maseges-container').append('<small class="small-head user-inpop"><span>بواسطة</span>' + this.sender.name + '</small>');
                $(getpop).find('.maseges-container').append('<small class="small-head"><span>تاريخ الارسال</span>' + this.created_at + '</small>');
                $(getpop).find('.maseges-container').append('<div class="massege-box massegs">' + this.message + '</div>');
            });
  
         },
        error: function() {
            console.log('error');
        }
    });
});