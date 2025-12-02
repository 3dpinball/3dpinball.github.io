(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
    new MutationObserver(r => {
        for (const s of r)
            if (s.type === "childList")
                for (const f of s.addedNodes) f.tagName === "LINK" && f.rel === "modulepreload" && o(f)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(r) {
        const s = {};
        return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s
    }

    function o(r) {
        if (r.ep) return;
        r.ep = !0;
        const s = n(r);
        fetch(r.href, s)
    }
})();
var Ft, U, vi, Je, os, gi, vo, _i, Dt = {},
    yi = [],
    pl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    kn = Array.isArray;

function Ne(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function bi(e) {
    var t = e.parentNode;
    t && t.removeChild(e)
}

function Oe(e, t, n) {
    var o, r, s, f = {};
    for (s in t) s == "key" ? o = t[s] : s == "ref" ? r = t[s] : f[s] = t[s];
    if (arguments.length > 2 && (f.children = arguments.length > 3 ? Ft.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
        for (s in e.defaultProps) f[s] === void 0 && (f[s] = e.defaultProps[s]);
    return Mt(e, f, o, r, null)
}

function Mt(e, t, n, o, r) {
    var s = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: r ?? ++vi,
        __i: -1,
        __u: 0
    };
    return r == null && U.vnode != null && U.vnode(s), s
}

function wi() {
    return {
        current: null
    }
}

function pe(e) {
    return e.children
}

function Ee(e, t) {
    this.props = e, this.context = t
}

function ft(e, t) {
    if (t == null) return e.__ ? ft(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
    return typeof e.type == "function" ? ft(e) : null
}

function xi(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) {
                e.__e = e.__c.base = n.__e;
                break
            } return xi(e)
    }
}

function go(e) {
    (!e.__d && (e.__d = !0) && Je.push(e) && !dn.__r++ || os !== U.debounceRendering) && ((os = U.debounceRendering) || gi)(dn)
}

function dn() {
    var e, t, n, o, r, s, f, a, c;
    for (Je.sort(vo); e = Je.shift();) e.__d && (t = Je.length, o = void 0, s = (r = (n = e).__v).__e, a = [], c = [], (f = n.__P) && ((o = Ne({}, r)).__v = r.__v + 1, U.vnode && U.vnode(o), Io(f, o, r, n.__n, f.ownerSVGElement !== void 0, 32 & r.__u ? [s] : null, a, s ?? ft(r), !!(32 & r.__u), c), o.__.__k[o.__i] = o, Si(a, o, c), o.__e != s && xi(o)), Je.length > t && Je.sort(vo));
    dn.__r = 0
}

function ki(e, t, n, o, r, s, f, a, c, i, d) {
    var l, m, u, v, p, g = o && o.__k || yi,
        _ = t.length;
    for (n.__d = c, hl(n, t, g), c = n.__d, l = 0; l < _; l++)(u = n.__k[l]) != null && typeof u != "boolean" && typeof u != "function" && (m = u.__i === -1 ? Dt : g[u.__i] || Dt, u.__i = l, Io(e, u, m, r, s, f, a, c, i, d), v = u.__e, u.ref && m.ref != u.ref && (m.ref && Ro(m.ref, null, u), d.push(u.ref, u.__c || v, u)), p == null && v != null && (p = v), 65536 & u.__u || m.__k === u.__k ? c = Ci(u, c, e) : typeof u.type == "function" && u.__d !== void 0 ? c = u.__d : v && (c = v.nextSibling), u.__d = void 0, u.__u &= -196609);
    n.__d = c, n.__e = p
}

function hl(e, t, n) {
    var o, r, s, f, a, c = t.length,
        i = n.length,
        d = i,
        l = 0;
    for (e.__k = [], o = 0; o < c; o++)(r = e.__k[o] = (r = t[o]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Mt(null, r, null, null, r) : kn(r) ? Mt(pe, {
        children: r
    }, null, null, null) : r.constructor === void 0 && r.__b > 0 ? Mt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, a = ml(r, n, f = o + l, d), r.__i = a, s = null, a !== -1 && (d--, (s = n[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && l--, typeof r.type != "function" && (r.__u |= 65536)) : a !== f && (a === f + 1 ? l++ : a > f ? d > c - f ? l += a - f : l-- : l = a < f && a == f - 1 ? a - f : 0, a !== o + l && (r.__u |= 65536))) : (s = n[o]) && s.key == null && s.__e && (s.__e == e.__d && (e.__d = ft(s)), _o(s, s, !1), n[o] = null, d--);
    if (d)
        for (o = 0; o < i; o++)(s = n[o]) != null && (131072 & s.__u) == 0 && (s.__e == e.__d && (e.__d = ft(s)), _o(s, s))
}

function Ci(e, t, n) {
    var o, r;
    if (typeof e.type == "function") {
        for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = e, t = Ci(o[r], t, n));
        return t
    }
    return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling
}

function ze(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (kn(e) ? e.some(function(n) {
        ze(n, t)
    }) : t.push(e)), t
}

function ml(e, t, n, o) {
    var r = e.key,
        s = e.type,
        f = n - 1,
        a = n + 1,
        c = t[n];
    if (c === null || c && r == c.key && s === c.type) return n;
    if (o > (c != null && (131072 & c.__u) == 0 ? 1 : 0))
        for (; f >= 0 || a < t.length;) {
            if (f >= 0) {
                if ((c = t[f]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return f;
                f--
            }
            if (a < t.length) {
                if ((c = t[a]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return a;
                a++
            }
        }
    return -1
}

function rs(e, t, n) {
    t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || pl.test(t) ? n : n + "px"
}

function Gt(e, t, n, o, r) {
    var s;
    e: if (t === "style")
        if (typeof n == "string") e.style.cssText = n;
        else {
            if (typeof o == "string" && (e.style.cssText = o = ""), o)
                for (t in o) n && t in n || rs(e.style, t, "");
            if (n)
                for (t in n) o && n[t] === o[t] || rs(e.style, t, n[t])
        }
    else if (t[0] === "o" && t[1] === "n") s = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? o ? n.u = o.u : (n.u = Date.now(), e.addEventListener(t, s ? is : ss, s)) : e.removeEventListener(t, s ? is : ss, s);
    else {
        if (r) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e) try {
            e[t] = n ?? "";
            break e
        } catch {}
        typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n))
    }
}

function ss(e) {
    var t = this.l[e.type + !1];
    if (e.t) {
        if (e.t <= t.u) return
    } else e.t = Date.now();
    return t(U.event ? U.event(e) : e)
}

function is(e) {
    return this.l[e.type + !0](U.event ? U.event(e) : e)
}

function Io(e, t, n, o, r, s, f, a, c, i) {
    var d, l, m, u, v, p, g, _, y, b, C, x, T, j, N, z = t.type;
    if (t.constructor !== void 0) return null;
    128 & n.__u && (c = !!(32 & n.__u), s = [a = t.__e = n.__e]), (d = U.__b) && d(t);
    e: if (typeof z == "function") try {
        if (_ = t.props, y = (d = z.contextType) && o[d.__c], b = d ? y ? y.props.value : d.__ : o, n.__c ? g = (l = t.__c = n.__c).__ = l.__E : ("prototype" in z && z.prototype.render ? t.__c = l = new z(_, b) : (t.__c = l = new Ee(_, b), l.constructor = z, l.render = gl), y && y.sub(l), l.props = _, l.state || (l.state = {}), l.context = b, l.__n = o, m = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), z.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = Ne({}, l.__s)), Ne(l.__s, z.getDerivedStateFromProps(_, l.__s))), u = l.props, v = l.state, l.__v = t, m) z.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
            if (z.getDerivedStateFromProps == null && _ !== u && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, b), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, b) === !1 || t.__v === n.__v)) {
                for (t.__v !== n.__v && (l.props = _, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(F) {
                        F && (F.__ = t)
                    }), C = 0; C < l._sb.length; C++) l.__h.push(l._sb[C]);
                l._sb = [], l.__h.length && f.push(l);
                break e
            }
            l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, b), l.componentDidUpdate != null && l.__h.push(function() {
                l.componentDidUpdate(u, v, p)
            })
        }
        if (l.context = b, l.props = _, l.__P = e, l.__e = !1, x = U.__r, T = 0, "prototype" in z && z.prototype.render) {
            for (l.state = l.__s, l.__d = !1, x && x(t), d = l.render(l.props, l.state, l.context), j = 0; j < l._sb.length; j++) l.__h.push(l._sb[j]);
            l._sb = []
        } else
            do l.__d = !1, x && x(t), d = l.render(l.props, l.state, l.context), l.state = l.__s; while (l.__d && ++T < 25);
        l.state = l.__s, l.getChildContext != null && (o = Ne(Ne({}, o), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (p = l.getSnapshotBeforeUpdate(u, v)), ki(e, kn(N = d != null && d.type === pe && d.key == null ? d.props.children : d) ? N : [N], t, n, o, r, s, f, a, c, i), l.base = t.__e, t.__u &= -161, l.__h.length && f.push(l), g && (l.__E = l.__ = null)
    } catch (F) {
        t.__v = null, c || s != null ? (t.__e = a, t.__u |= c ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), U.__e(F, t, n)
    } else s == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = vl(n.__e, t, n, o, r, s, f, c, i);
    (d = U.diffed) && d(t)
}

function Si(e, t, n) {
    t.__d = void 0;
    for (var o = 0; o < n.length; o++) Ro(n[o], n[++o], n[++o]);
    U.__c && U.__c(t, e), e.some(function(r) {
        try {
            e = r.__h, r.__h = [], e.some(function(s) {
                s.call(r)
            })
        } catch (s) {
            U.__e(s, r.__v)
        }
    })
}

function vl(e, t, n, o, r, s, f, a, c) {
    var i, d, l, m, u, v, p, g = n.props,
        _ = t.props,
        y = t.type;
    if (y === "svg" && (r = !0), s != null) {
        for (i = 0; i < s.length; i++)
            if ((u = s[i]) && "setAttribute" in u == !!y && (y ? u.localName === y : u.nodeType === 3)) {
                e = u, s[i] = null;
                break
            }
    }
    if (e == null) {
        if (y === null) return document.createTextNode(_);
        e = r ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, _.is && _), s = null, a = !1
    }
    if (y === null) g === _ || a && e.data === _ || (e.data = _);
    else {
        if (s = s && Ft.call(e.childNodes), g = n.props || Dt, !a && s != null)
            for (g = {}, i = 0; i < e.attributes.length; i++) g[(u = e.attributes[i]).name] = u.value;
        for (i in g) u = g[i], i == "children" || (i == "dangerouslySetInnerHTML" ? l = u : i === "key" || i in _ || Gt(e, i, null, u, r));
        for (i in _) u = _[i], i == "children" ? m = u : i == "dangerouslySetInnerHTML" ? d = u : i == "value" ? v = u : i == "checked" ? p = u : i === "key" || a && typeof u != "function" || g[i] === u || Gt(e, i, u, g[i], r);
        if (d) a || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
        else if (l && (e.innerHTML = ""), ki(e, kn(m) ? m : [m], t, n, o, r && y !== "foreignObject", s, f, s ? s[0] : n.__k && ft(n, 0), a, c), s != null)
            for (i = s.length; i--;) s[i] != null && bi(s[i]);
        a || (i = "value", v !== void 0 && (v !== e[i] || y === "progress" && !v || y === "option" && v !== g[i]) && Gt(e, i, v, g[i], !1), i = "checked", p !== void 0 && p !== e[i] && Gt(e, i, p, g[i], !1))
    }
    return e
}

function Ro(e, t, n) {
    try {
        typeof e == "function" ? e(t) : e.current = t
    } catch (o) {
        U.__e(o, n)
    }
}

function _o(e, t, n) {
    var o, r;
    if (U.unmount && U.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || Ro(o, null, t)), (o = e.__c) != null) {
        if (o.componentWillUnmount) try {
            o.componentWillUnmount()
        } catch (s) {
            U.__e(s, t)
        }
        o.base = o.__P = null, e.__c = void 0
    }
    if (o = e.__k)
        for (r = 0; r < o.length; r++) o[r] && _o(o[r], t, n || typeof e.type != "function");
    n || e.__e == null || bi(e.__e), e.__ = e.__e = e.__d = void 0
}

function gl(e, t, n) {
    return this.constructor(e, n)
}

function pt(e, t, n) {
    var o, r, s, f;
    U.__ && U.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, s = [], f = [], Io(t, e = (!o && n || t).__k = Oe(pe, null, [e]), r || Dt, Dt, t.ownerSVGElement !== void 0, !o && n ? [n] : r ? null : t.firstChild ? Ft.call(t.childNodes) : null, s, !o && n ? n : r ? r.__e : t.firstChild, o, f), Si(s, e, f)
}

function Pi(e, t) {
    pt(e, t, Pi)
}

function _l(e, t, n) {
    var o, r, s, f, a = Ne({}, e.props);
    for (s in e.type && e.type.defaultProps && (f = e.type.defaultProps), t) s == "key" ? o = t[s] : s == "ref" ? r = t[s] : a[s] = t[s] === void 0 && f !== void 0 ? f[s] : t[s];
    return arguments.length > 2 && (a.children = arguments.length > 3 ? Ft.call(arguments, 2) : n), Mt(e.type, a, o || e.key, r || e.ref, null)
}

function at(e, t) {
    var n = {
        __c: t = "__cC" + _i++,
        __: e,
        Consumer: function(o, r) {
            return o.children(r)
        },
        Provider: function(o) {
            var r, s;
            return this.getChildContext || (r = [], (s = {})[t] = this, this.getChildContext = function() {
                return s
            }, this.shouldComponentUpdate = function(f) {
                this.props.value !== f.value && r.some(function(a) {
                    a.__e = !0, go(a)
                })
            }, this.sub = function(f) {
                r.push(f);
                var a = f.componentWillUnmount;
                f.componentWillUnmount = function() {
                    r.splice(r.indexOf(f), 1), a && a.call(f)
                }
            }), o.children
        }
    };
    return n.Provider.__ = n.Consumer.contextType = n
}
Ft = yi.slice, U = {
    __e: function(e, t, n, o) {
        for (var r, s, f; t = t.__;)
            if ((r = t.__c) && !r.__) try {
                if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), f = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), f = r.__d), f) return r.__E = r
            } catch (a) {
                e = a
            }
        throw e
    }
}, vi = 0, Ee.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Ne({}, this.state), typeof e == "function" && (e = e(Ne({}, n), this.props)), e && Ne(n, e), e != null && this.__v && (t && this._sb.push(t), go(this))
}, Ee.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), go(this))
}, Ee.prototype.render = pe, Je = [], gi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, vo = function(e, t) {
    return e.__v.__b - t.__v.__b
}, dn.__r = 0, _i = 0;

function yl(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function bl(e) {
    if (Object.prototype.hasOwnProperty.call(e, "__esModule")) return e;
    var t = e.default;
    if (typeof t == "function") {
        var n = function o() {
            var r = !1;
            try {
                r = this instanceof o
            } catch {}
            return r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        n.prototype = t.prototype
    } else n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(o) {
        var r = Object.getOwnPropertyDescriptor(e, o);
        Object.defineProperty(n, o, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[o]
            }
        })
    }), n
}
var Hn = {
        exports: {}
    },
    $n = {},
    Ke, oe, Vn, as, ht = 0,
    Ei = [],
    cn = [],
    cs = U.__b,
    ls = U.__r,
    us = U.diffed,
    ds = U.__c,
    fs = U.unmount;

function tt(e, t) {
    U.__h && U.__h(oe, e, ht || t), ht = 0;
    var n = oe.__H || (oe.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({
        __V: cn
    }), n.__[e]
}

function ae(e) {
    return ht = 1, Lo(Ai, e)
}

function Lo(e, t, n) {
    var o = tt(Ke++, 2);
    if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Ai(void 0, t), function(a) {
            var c = o.__N ? o.__N[0] : o.__[0],
                i = o.t(c, a);
            c !== i && (o.__N = [i, o.__[1]], o.__c.setState({}))
        }], o.__c = oe, !oe.u)) {
        var r = function(a, c, i) {
            if (!o.__c.__H) return !0;
            var d = o.__c.__H.__.filter(function(m) {
                return m.__c
            });
            if (d.every(function(m) {
                    return !m.__N
                })) return !s || s.call(this, a, c, i);
            var l = !1;
            return d.forEach(function(m) {
                if (m.__N) {
                    var u = m.__[0];
                    m.__ = m.__N, m.__N = void 0, u !== m.__[0] && (l = !0)
                }
            }), !(!l && o.__c.props === a) && (!s || s.call(this, a, c, i))
        };
        oe.u = !0;
        var s = oe.shouldComponentUpdate,
            f = oe.componentWillUpdate;
        oe.componentWillUpdate = function(a, c, i) {
            if (this.__e) {
                var d = s;
                s = void 0, r(a, c, i), s = d
            }
            f && f.call(this, a, c, i)
        }, oe.shouldComponentUpdate = r
    }
    return o.__N || o.__
}

function te(e, t) {
    var n = tt(Ke++, 3);
    !U.__s && Fo(n.__H, t) && (n.__ = e, n.i = t, oe.__H.__h.push(n))
}

function yt(e, t) {
    var n = tt(Ke++, 4);
    !U.__s && Fo(n.__H, t) && (n.__ = e, n.i = t, oe.__h.push(n))
}

function Me(e) {
    return ht = 5, mt(function() {
        return {
            current: e
        }
    }, [])
}

function Oi(e, t, n) {
    ht = 6, yt(function() {
        return typeof e == "function" ? (e(t()), function() {
            return e(null)
        }) : e ? (e.current = t(), function() {
            return e.current = null
        }) : void 0
    }, n == null ? n : n.concat(e))
}

function mt(e, t) {
    var n = tt(Ke++, 7);
    return Fo(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__
}

function Bo(e, t) {
    return ht = 8, mt(function() {
        return e
    }, t)
}

function No(e) {
    var t = oe.context[e.__c],
        n = tt(Ke++, 9);
    return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(oe)), t.props.value) : e.__
}

function zo(e, t) {
    U.useDebugValue && U.useDebugValue(t ? t(e) : e)
}

function wl(e) {
    var t = tt(Ke++, 10),
        n = ae();
    return t.__ = e, oe.componentDidCatch || (oe.componentDidCatch = function(o, r) {
        t.__ && t.__(o, r), n[1](o)
    }), [n[0], function() {
        n[1](void 0)
    }]
}

function Mi() {
    var e = tt(Ke++, 11);
    if (!e.__) {
        for (var t = oe.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
        var n = t.__m || (t.__m = [0, 0]);
        e.__ = "P" + n[0] + "-" + n[1]++
    }
    return e.__
}

function xl() {
    for (var e; e = Ei.shift();)
        if (e.__P && e.__H) try {
            e.__H.__h.forEach(ln), e.__H.__h.forEach(yo), e.__H.__h = []
        } catch (t) {
            e.__H.__h = [], U.__e(t, e.__v)
        }
}
U.__b = function(e) {
    oe = null, cs && cs(e)
}, U.__r = function(e) {
    ls && ls(e), Ke = 0;
    var t = (oe = e.__c).__H;
    t && (Vn === oe ? (t.__h = [], oe.__h = [], t.__.forEach(function(n) {
        n.__N && (n.__ = n.__N), n.__V = cn, n.__N = n.i = void 0
    })) : (t.__h.forEach(ln), t.__h.forEach(yo), t.__h = [], Ke = 0)), Vn = oe
}, U.diffed = function(e) {
    us && us(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (Ei.push(t) !== 1 && as === U.requestAnimationFrame || ((as = U.requestAnimationFrame) || kl)(xl)), t.__H.__.forEach(function(n) {
        n.i && (n.__H = n.i), n.__V !== cn && (n.__ = n.__V), n.i = void 0, n.__V = cn
    })), Vn = oe = null
}, U.__c = function(e, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(ln), n.__h = n.__h.filter(function(o) {
                return !o.__ || yo(o)
            })
        } catch (o) {
            t.some(function(r) {
                r.__h && (r.__h = [])
            }), t = [], U.__e(o, n.__v)
        }
    }), ds && ds(e, t)
}, U.unmount = function(e) {
    fs && fs(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(o) {
        try {
            ln(o)
        } catch (r) {
            t = r
        }
    }), n.__H = void 0, t && U.__e(t, n.__v))
};
var ps = typeof requestAnimationFrame == "function";

function kl(e) {
    var t, n = function() {
            clearTimeout(o), ps && cancelAnimationFrame(t), setTimeout(e)
        },
        o = setTimeout(n, 100);
    ps && (t = requestAnimationFrame(n))
}

function ln(e) {
    var t = oe,
        n = e.__c;
    typeof n == "function" && (e.__c = void 0, n()), oe = t
}

function yo(e) {
    var t = oe;
    e.__c = e.__(), oe = t
}

function Fo(e, t) {
    return !e || e.length !== t.length || t.some(function(n, o) {
        return n !== e[o]
    })
}

function Ai(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Di(e, t) {
    for (var n in t) e[n] = t[n];
    return e
}

function bo(e, t) {
    for (var n in e)
        if (n !== "__source" && !(n in t)) return !0;
    for (var o in t)
        if (o !== "__source" && e[o] !== t[o]) return !0;
    return !1
}

function fn(e) {
    this.props = e
}

function Ti(e, t) {
    function n(r) {
        var s = this.props.ref,
            f = s == r.ref;
        return !f && s && (s.call ? s(null) : s.current = null), t ? !t(this.props, r) || !f : bo(this.props, r)
    }

    function o(r) {
        return this.shouldComponentUpdate = n, Oe(e, r)
    }
    return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o
}(fn.prototype = new Ee).isPureReactComponent = !0, fn.prototype.shouldComponentUpdate = function(e, t) {
    return bo(this.props, e) || bo(this.state, t)
};
var hs = U.__b;
U.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), hs && hs(e)
};
var Cl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function ji(e) {
    function t(n) {
        var o = Di({}, n);
        return delete o.ref, e(o, n.ref || null)
    }
    return t.$$typeof = Cl, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var ms = function(e, t) {
        return e == null ? null : ze(ze(e).map(t))
    },
    Ii = {
        map: ms,
        forEach: ms,
        count: function(e) {
            return e ? ze(e).length : 0
        },
        only: function(e) {
            var t = ze(e);
            if (t.length !== 1) throw "Children.only";
            return t[0]
        },
        toArray: ze
    },
    Sl = U.__e;
U.__e = function(e, t, n, o) {
    if (e.then) {
        for (var r, s = t; s = s.__;)
            if ((r = s.__c) && r.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t)
    }
    Sl(e, t, n, o)
};
var vs = U.unmount;

function Ri(e, t, n) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
        typeof o.__c == "function" && o.__c()
    }), e.__c.__H = null), (e = Di({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
        return Ri(o, t, n)
    })), e
}

function Li(e, t, n) {
    return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
        return Li(o, t, n)
    }), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e
}

function At() {
    this.__u = 0, this.t = null, this.__b = null
}

function Bi(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e)
}

function Ni(e) {
    var t, n, o;

    function r(s) {
        if (t || (t = e()).then(function(f) {
                n = f.default || f
            }, function(f) {
                o = f
            }), o) throw o;
        if (!n) throw t;
        return Oe(n, s)
    }
    return r.displayName = "Lazy", r.__f = !0, r
}

function ct() {
    this.u = null, this.o = null
}
U.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), vs && vs(e)
}, (At.prototype = new Ee).__c = function(e, t) {
    var n = t.__c,
        o = this;
    o.t == null && (o.t = []), o.t.push(n);
    var r = Bi(o.__v),
        s = !1,
        f = function() {
            s || (s = !0, n.__R = null, r ? r(a) : a())
        };
    n.__R = f;
    var a = function() {
        if (!--o.__u) {
            if (o.state.__a) {
                var c = o.state.__a;
                o.__v.__k[0] = Li(c, c.__c.__P, c.__c.__O)
            }
            var i;
            for (o.setState({
                    __a: o.__b = null
                }); i = o.t.pop();) i.forceUpdate()
        }
    };
    o.__u++ || 32 & t.__u || o.setState({
        __a: o.__b = o.__v.__k[0]
    }), e.then(f, f)
}, At.prototype.componentWillUnmount = function() {
    this.t = []
}, At.prototype.render = function(e, t) {
    if (this.__b) {
        if (this.__v.__k) {
            var n = document.createElement("div"),
                o = this.__v.__k[0].__c;
            this.__v.__k[0] = Ri(this.__b, n, o.__O = o.__P)
        }
        this.__b = null
    }
    var r = t.__a && Oe(pe, null, e.fallback);
    return r && (r.__u &= -33), [Oe(pe, null, t.__a ? null : e.children), r]
};
var gs = function(e, t, n) {
    if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
        for (n = e.u; n;) {
            for (; n.length > 3;) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2]
        }
};

function Pl(e) {
    return this.getChildContext = function() {
        return e.context
    }, e.children
}

function El(e) {
    var t = this,
        n = e.i;
    t.componentWillUnmount = function() {
        pt(null, t.l), t.l = null, t.i = null
    }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = {
        nodeType: 1,
        parentNode: n,
        childNodes: [],
        appendChild: function(o) {
            this.childNodes.push(o), t.i.appendChild(o)
        },
        insertBefore: function(o, r) {
            this.childNodes.push(o), t.i.appendChild(o)
        },
        removeChild: function(o) {
            this.childNodes.splice(this.childNodes.indexOf(o) >>> 1, 1), t.i.removeChild(o)
        }
    }), pt(Oe(Pl, {
        context: t.context
    }, e.__v), t.l)
}

function zi(e, t) {
    var n = Oe(El, {
        __v: e,
        i: t
    });
    return n.containerInfo = t, n
}(ct.prototype = new Ee).__a = function(e) {
    var t = this,
        n = Bi(t.__v),
        o = t.o.get(e);
    return o[0]++,
        function(r) {
            var s = function() {
                t.props.revealOrder ? (o.push(r), gs(t, e, o)) : r()
            };
            n ? n(s) : s()
        }
}, ct.prototype.render = function(e) {
    this.u = null, this.o = new Map;
    var t = ze(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
    return e.children
}, ct.prototype.componentDidUpdate = ct.prototype.componentDidMount = function() {
    var e = this;
    this.o.forEach(function(t, n) {
        gs(e, n, t)
    })
};
var Fi = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
    Ol = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    Ml = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
    Al = /[A-Z0-9]/g,
    Dl = typeof document < "u",
    Tl = function(e) {
        return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
    };

function Ki(e, t, n) {
    return t.__k == null && (t.textContent = ""), pt(e, t), typeof n == "function" && n(), e ? e.__c : null
}

function Ui(e, t, n) {
    return Pi(e, t), typeof n == "function" && n(), e ? e.__c : null
}
Ee.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(Ee.prototype, e, {
        configurable: !0,
        get: function() {
            return this["UNSAFE_" + e]
        },
        set: function(t) {
            Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t
            })
        }
    })
});
var _s = U.event;

function jl() {}

function Il() {
    return this.cancelBubble
}

function Rl() {
    return this.defaultPrevented
}
U.event = function(e) {
    return _s && (e = _s(e)), e.persist = jl, e.isPropagationStopped = Il, e.isDefaultPrevented = Rl, e.nativeEvent = e
};
var Ko, Ll = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class
        }
    },
    ys = U.vnode;
U.vnode = function(e) {
    typeof e.type == "string" && (function(t) {
        var n = t.props,
            o = t.type,
            r = {};
        for (var s in n) {
            var f = n[s];
            if (!(s === "value" && "defaultValue" in n && f == null || Dl && s === "children" && o === "noscript" || s === "class" || s === "className")) {
                var a = s.toLowerCase();
                s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && f === !0 ? f = "" : a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || o !== "input" && o !== "textarea" || Tl(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : Ml.test(s) ? s = a : o.indexOf("-") === -1 && Ol.test(s) ? s = s.replace(Al, "-$&").toLowerCase() : f === null && (f = void 0) : a = s = "oninput", a === "oninput" && r[s = a] && (s = "oninputCapture"), r[s] = f
            }
        }
        o == "select" && r.multiple && Array.isArray(r.value) && (r.value = ze(n.children).forEach(function(c) {
            c.props.selected = r.value.indexOf(c.props.value) != -1
        })), o == "select" && r.defaultValue != null && (r.value = ze(n.children).forEach(function(c) {
            c.props.selected = r.multiple ? r.defaultValue.indexOf(c.props.value) != -1 : r.defaultValue == c.props.value
        })), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Ll)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className), t.props = r
    })(e), e.$$typeof = Fi, ys && ys(e)
};
var bs = U.__r;
U.__r = function(e) {
    bs && bs(e), Ko = e.__c
};
var ws = U.diffed;
U.diffed = function(e) {
    ws && ws(e);
    var t = e.props,
        n = e.__e;
    n != null && e.type === "textarea" && "value" in t && t.value !== n.value && (n.value = t.value == null ? "" : t.value), Ko = null
};
var Hi = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return Ko.__n[e.__c].props.value
                }
            }
        }
    },
    Bl = "17.0.2";

function $i(e) {
    return Oe.bind(null, e)
}

function Kt(e) {
    return !!e && e.$$typeof === Fi
}

function Vi(e) {
    return Kt(e) && e.type === pe
}

function Wi(e) {
    return Kt(e) ? _l.apply(null, arguments) : e
}

function qi(e) {
    return !!e.__k && (pt(null, e), !0)
}

function Xi(e) {
    return e && (e.base || e.nodeType === 1 && e) || null
}
var Uo = function(e, t) {
        return e(t)
    },
    Gi = function(e, t) {
        return e(t)
    },
    Yi = pe;

function Ho(e) {
    e()
}

function Qi(e) {
    return e
}

function Zi() {
    return [!1, Ho]
}
var Ji = yt,
    ea = Kt;

function ta(e, t) {
    var n = t(),
        o = ae({
            h: {
                __: n,
                v: t
            }
        }),
        r = o[0].h,
        s = o[1];
    return yt(function() {
        r.__ = n, r.v = t, Wn(r) && s({
            h: r
        })
    }, [e, n, t]), te(function() {
        return Wn(r) && s({
            h: r
        }), e(function() {
            Wn(r) && s({
                h: r
            })
        })
    }, [e]), n
}

function Wn(e) {
    var t, n, o = e.v,
        r = e.__;
    try {
        var s = o();
        return !((t = r) === (n = s) && (t !== 0 || 1 / t == 1 / n) || t != t && n != n)
    } catch {
        return !0
    }
}
var Nl = {
    useState: ae,
    useId: Mi,
    useReducer: Lo,
    useEffect: te,
    useLayoutEffect: yt,
    useInsertionEffect: Ji,
    useTransition: Zi,
    useDeferredValue: Qi,
    useSyncExternalStore: ta,
    startTransition: Ho,
    useRef: Me,
    useImperativeHandle: Oi,
    useMemo: mt,
    useCallback: Bo,
    useContext: No,
    useDebugValue: zo,
    version: "17.0.2",
    Children: Ii,
    render: Ki,
    hydrate: Ui,
    unmountComponentAtNode: qi,
    createPortal: zi,
    createElement: Oe,
    createContext: at,
    createFactory: $i,
    cloneElement: Wi,
    createRef: wi,
    Fragment: pe,
    isValidElement: Kt,
    isElement: ea,
    isFragment: Vi,
    findDOMNode: Xi,
    Component: Ee,
    PureComponent: fn,
    memo: Ti,
    forwardRef: ji,
    flushSync: Gi,
    unstable_batchedUpdates: Uo,
    StrictMode: Yi,
    Suspense: At,
    SuspenseList: ct,
    lazy: Ni,
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Hi
};
const zl = Object.freeze(Object.defineProperty({
        __proto__: null,
        Children: Ii,
        Component: Ee,
        Fragment: pe,
        PureComponent: fn,
        StrictMode: Yi,
        Suspense: At,
        SuspenseList: ct,
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Hi,
        cloneElement: Wi,
        createContext: at,
        createElement: Oe,
        createFactory: $i,
        createPortal: zi,
        createRef: wi,
        default: Nl,
        findDOMNode: Xi,
        flushSync: Gi,
        forwardRef: ji,
        hydrate: Ui,
        isElement: ea,
        isFragment: Vi,
        isValidElement: Kt,
        lazy: Ni,
        memo: Ti,
        render: Ki,
        startTransition: Ho,
        unmountComponentAtNode: qi,
        unstable_batchedUpdates: Uo,
        useCallback: Bo,
        useContext: No,
        useDebugValue: zo,
        useDeferredValue: Qi,
        useEffect: te,
        useErrorBoundary: wl,
        useId: Mi,
        useImperativeHandle: Oi,
        useInsertionEffect: Ji,
        useLayoutEffect: yt,
        useMemo: mt,
        useReducer: Lo,
        useRef: Me,
        useState: ae,
        useSyncExternalStore: ta,
        useTransition: Zi,
        version: Bl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    $o = bl(zl);
var xs;

function Fl() {
    if (xs) return $n;
    xs = 1;
    var e = $o;

    function t(l, m) {
        return l === m && (l !== 0 || 1 / l === 1 / m) || l !== l && m !== m
    }
    var n = typeof Object.is == "function" ? Object.is : t,
        o = e.useState,
        r = e.useEffect,
        s = e.useLayoutEffect,
        f = e.useDebugValue;

    function a(l, m) {
        var u = m(),
            v = o({
                inst: {
                    value: u,
                    getSnapshot: m
                }
            }),
            p = v[0].inst,
            g = v[1];
        return s(function() {
            p.value = u, p.getSnapshot = m, c(p) && g({
                inst: p
            })
        }, [l, u, m]), r(function() {
            return c(p) && g({
                inst: p
            }), l(function() {
                c(p) && g({
                    inst: p
                })
            })
        }, [l]), f(u), u
    }

    function c(l) {
        var m = l.getSnapshot;
        l = l.value;
        try {
            var u = m();
            return !n(l, u)
        } catch {
            return !0
        }
    }

    function i(l, m) {
        return m()
    }
    var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? i : a;
    return $n.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : d, $n
}
var ks;

function na() {
    return ks || (ks = 1, Hn.exports = Fl()), Hn.exports
}
na();
var qn = {
        exports: {}
    },
    Xn = {};
var Cs;

function Kl() {
    if (Cs) return Xn;
    Cs = 1;
    var e = $o,
        t = na();

    function n(i, d) {
        return i === d && (i !== 0 || 1 / i === 1 / d) || i !== i && d !== d
    }
    var o = typeof Object.is == "function" ? Object.is : n,
        r = t.useSyncExternalStore,
        s = e.useRef,
        f = e.useEffect,
        a = e.useMemo,
        c = e.useDebugValue;
    return Xn.useSyncExternalStoreWithSelector = function(i, d, l, m, u) {
        var v = s(null);
        if (v.current === null) {
            var p = {
                hasValue: !1,
                value: null
            };
            v.current = p
        } else p = v.current;
        v = a(function() {
            function _(T) {
                if (!y) {
                    if (y = !0, b = T, T = m(T), u !== void 0 && p.hasValue) {
                        var j = p.value;
                        if (u(j, T)) return C = j
                    }
                    return C = T
                }
                if (j = C, o(b, T)) return j;
                var N = m(T);
                return u !== void 0 && u(j, N) ? j : (b = T, C = N)
            }
            var y = !1,
                b, C, x = l === void 0 ? null : l;
            return [function() {
                return _(d())
            }, x === null ? void 0 : function() {
                return _(x())
            }]
        }, [d, l, m, u]);
        var g = r(i, v[0], v[1]);
        return f(function() {
            p.hasValue = !0, p.value = g
        }, [g]), c(g), g
    }, Xn
}
var Ss;

function Ul() {
    return Ss || (Ss = 1, qn.exports = Kl()), qn.exports
}
var Hl = Ul();

function $l(e) {
    e()
}
let oa = $l;
const Vl = e => oa = e,
    Wl = () => oa,
    Ps = Symbol.for("react-redux-context"),
    Es = typeof globalThis < "u" ? globalThis : {};

function ql() {
    var e;
    if (!at) return {};
    const t = (e = Es[Ps]) != null ? e : Es[Ps] = new Map;
    let n = t.get(at);
    return n || (n = at(null), t.set(at, n)), n
}
const Xe = ql();

function Vo(e = Xe) {
    return function() {
        return No(e)
    }
}
const ra = Vo(),
    Xl = () => {
        throw new Error("uSES not initialized!")
    };
let sa = Xl;
const Gl = e => {
        sa = e
    },
    Yl = (e, t) => e === t;

function Ql(e = Xe) {
    const t = e === Xe ? ra : Vo(e);
    return function(o, r = {}) {
        const {
            equalityFn: s = Yl,
            stabilityCheck: f = void 0,
            noopCheck: a = void 0
        } = typeof r == "function" ? {
            equalityFn: r
        } : r, {
            store: c,
            subscription: i,
            getServerState: d,
            stabilityCheck: l,
            noopCheck: m
        } = t();
        Me(!0);
        const u = Bo({
                [o.name](p) {
                    return o(p)
                }
            } [o.name], [o, l, f]),
            v = sa(i.addNestedSub, c.getState, d || c.getState, u, s);
        return zo(v), v
    }
}
const M = Ql();
var Gn = {
        exports: {}
    },
    J = {};
var Os;

function Zl() {
    if (Os) return J;
    Os = 1;
    var e = typeof Symbol == "function" && Symbol.for,
        t = e ? Symbol.for("react.element") : 60103,
        n = e ? Symbol.for("react.portal") : 60106,
        o = e ? Symbol.for("react.fragment") : 60107,
        r = e ? Symbol.for("react.strict_mode") : 60108,
        s = e ? Symbol.for("react.profiler") : 60114,
        f = e ? Symbol.for("react.provider") : 60109,
        a = e ? Symbol.for("react.context") : 60110,
        c = e ? Symbol.for("react.async_mode") : 60111,
        i = e ? Symbol.for("react.concurrent_mode") : 60111,
        d = e ? Symbol.for("react.forward_ref") : 60112,
        l = e ? Symbol.for("react.suspense") : 60113,
        m = e ? Symbol.for("react.suspense_list") : 60120,
        u = e ? Symbol.for("react.memo") : 60115,
        v = e ? Symbol.for("react.lazy") : 60116,
        p = e ? Symbol.for("react.block") : 60121,
        g = e ? Symbol.for("react.fundamental") : 60117,
        _ = e ? Symbol.for("react.responder") : 60118,
        y = e ? Symbol.for("react.scope") : 60119;

    function b(x) {
        if (typeof x == "object" && x !== null) {
            var T = x.$$typeof;
            switch (T) {
                case t:
                    switch (x = x.type, x) {
                        case c:
                        case i:
                        case o:
                        case s:
                        case r:
                        case l:
                            return x;
                        default:
                            switch (x = x && x.$$typeof, x) {
                                case a:
                                case d:
                                case v:
                                case u:
                                case f:
                                    return x;
                                default:
                                    return T
                            }
                    }
                case n:
                    return T
            }
        }
    }

    function C(x) {
        return b(x) === i
    }
    return J.AsyncMode = c, J.ConcurrentMode = i, J.ContextConsumer = a, J.ContextProvider = f, J.Element = t, J.ForwardRef = d, J.Fragment = o, J.Lazy = v, J.Memo = u, J.Portal = n, J.Profiler = s, J.StrictMode = r, J.Suspense = l, J.isAsyncMode = function(x) {
        return C(x) || b(x) === c
    }, J.isConcurrentMode = C, J.isContextConsumer = function(x) {
        return b(x) === a
    }, J.isContextProvider = function(x) {
        return b(x) === f
    }, J.isElement = function(x) {
        return typeof x == "object" && x !== null && x.$$typeof === t
    }, J.isForwardRef = function(x) {
        return b(x) === d
    }, J.isFragment = function(x) {
        return b(x) === o
    }, J.isLazy = function(x) {
        return b(x) === v
    }, J.isMemo = function(x) {
        return b(x) === u
    }, J.isPortal = function(x) {
        return b(x) === n
    }, J.isProfiler = function(x) {
        return b(x) === s
    }, J.isStrictMode = function(x) {
        return b(x) === r
    }, J.isSuspense = function(x) {
        return b(x) === l
    }, J.isValidElementType = function(x) {
        return typeof x == "string" || typeof x == "function" || x === o || x === i || x === s || x === r || x === l || x === m || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === u || x.$$typeof === f || x.$$typeof === a || x.$$typeof === d || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === y || x.$$typeof === p)
    }, J.typeOf = b, J
}
var Ms;

function Jl() {
    return Ms || (Ms = 1, Gn.exports = Zl()), Gn.exports
}
var Yn, As;

function eu() {
    if (As) return Yn;
    As = 1;
    var e = Jl(),
        t = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        n = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        o = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        r = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        s = {};
    s[e.ForwardRef] = o, s[e.Memo] = r;

    function f(v) {
        return e.isMemo(v) ? r : s[v.$$typeof] || t
    }
    var a = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        i = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        m = Object.prototype;

    function u(v, p, g) {
        if (typeof p != "string") {
            if (m) {
                var _ = l(p);
                _ && _ !== m && u(v, _, g)
            }
            var y = c(p);
            i && (y = y.concat(i(p)));
            for (var b = f(v), C = f(p), x = 0; x < y.length; ++x) {
                var T = y[x];
                if (!n[T] && !(g && g[T]) && !(C && C[T]) && !(b && b[T])) {
                    var j = d(p, T);
                    try {
                        a(v, T, j)
                    } catch {}
                }
            }
        }
        return v
    }
    return Yn = u, Yn
}
eu();
var Qn = {
        exports: {}
    },
    ee = {};
var Ds;

function tu() {
    if (Ds) return ee;
    Ds = 1;
    var e = Symbol.for("react.element"),
        t = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        r = Symbol.for("react.profiler"),
        s = Symbol.for("react.provider"),
        f = Symbol.for("react.context"),
        a = Symbol.for("react.server_context"),
        c = Symbol.for("react.forward_ref"),
        i = Symbol.for("react.suspense"),
        d = Symbol.for("react.suspense_list"),
        l = Symbol.for("react.memo"),
        m = Symbol.for("react.lazy"),
        u = Symbol.for("react.offscreen"),
        v;
    v = Symbol.for("react.module.reference");

    function p(g) {
        if (typeof g == "object" && g !== null) {
            var _ = g.$$typeof;
            switch (_) {
                case e:
                    switch (g = g.type, g) {
                        case n:
                        case r:
                        case o:
                        case i:
                        case d:
                            return g;
                        default:
                            switch (g = g && g.$$typeof, g) {
                                case a:
                                case f:
                                case c:
                                case m:
                                case l:
                                case s:
                                    return g;
                                default:
                                    return _
                            }
                    }
                case t:
                    return _
            }
        }
    }
    return ee.ContextConsumer = f, ee.ContextProvider = s, ee.Element = e, ee.ForwardRef = c, ee.Fragment = n, ee.Lazy = m, ee.Memo = l, ee.Portal = t, ee.Profiler = r, ee.StrictMode = o, ee.Suspense = i, ee.SuspenseList = d, ee.isAsyncMode = function() {
        return !1
    }, ee.isConcurrentMode = function() {
        return !1
    }, ee.isContextConsumer = function(g) {
        return p(g) === f
    }, ee.isContextProvider = function(g) {
        return p(g) === s
    }, ee.isElement = function(g) {
        return typeof g == "object" && g !== null && g.$$typeof === e
    }, ee.isForwardRef = function(g) {
        return p(g) === c
    }, ee.isFragment = function(g) {
        return p(g) === n
    }, ee.isLazy = function(g) {
        return p(g) === m
    }, ee.isMemo = function(g) {
        return p(g) === l
    }, ee.isPortal = function(g) {
        return p(g) === t
    }, ee.isProfiler = function(g) {
        return p(g) === r
    }, ee.isStrictMode = function(g) {
        return p(g) === o
    }, ee.isSuspense = function(g) {
        return p(g) === i
    }, ee.isSuspenseList = function(g) {
        return p(g) === d
    }, ee.isValidElementType = function(g) {
        return typeof g == "string" || typeof g == "function" || g === n || g === r || g === o || g === i || g === d || g === u || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === l || g.$$typeof === s || g.$$typeof === f || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0)
    }, ee.typeOf = p, ee
}
var Ts;

function nu() {
    return Ts || (Ts = 1, Qn.exports = tu()), Qn.exports
}
nu();

function ou() {
    const e = Wl();
    let t = null,
        n = null;
    return {
        clear() {
            t = null, n = null
        },
        notify() {
            e(() => {
                let o = t;
                for (; o;) o.callback(), o = o.next
            })
        },
        get() {
            let o = [],
                r = t;
            for (; r;) o.push(r), r = r.next;
            return o
        },
        subscribe(o) {
            let r = !0,
                s = n = {
                    callback: o,
                    next: null,
                    prev: n
                };
            return s.prev ? s.prev.next = s : t = s,
                function() {
                    !r || t === null || (r = !1, s.next ? s.next.prev = s.prev : n = s.prev, s.prev ? s.prev.next = s.next : t = s.next)
                }
        }
    }
}
const js = {
    notify() {},
    get: () => []
};

function ru(e, t) {
    let n, o = js,
        r = 0,
        s = !1;

    function f(p) {
        d();
        const g = o.subscribe(p);
        let _ = !1;
        return () => {
            _ || (_ = !0, g(), l())
        }
    }

    function a() {
        o.notify()
    }

    function c() {
        v.onStateChange && v.onStateChange()
    }

    function i() {
        return s
    }

    function d() {
        r++, n || (n = e.subscribe(c), o = ou())
    }

    function l() {
        r--, n && r === 0 && (n(), n = void 0, o.clear(), o = js)
    }

    function m() {
        s || (s = !0, d())
    }

    function u() {
        s && (s = !1, l())
    }
    const v = {
        addNestedSub: f,
        notifyNestedSubs: a,
        handleChangeWrapper: c,
        isSubscribed: i,
        trySubscribe: m,
        tryUnsubscribe: u,
        getListeners: () => o
    };
    return v
}
const su = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    iu = su ? yt : te;

function au({
    store: e,
    context: t,
    children: n,
    serverState: o,
    stabilityCheck: r = "once",
    noopCheck: s = "once"
}) {
    const f = mt(() => {
            const i = ru(e);
            return {
                store: e,
                subscription: i,
                getServerState: o ? () => o : void 0,
                stabilityCheck: r,
                noopCheck: s
            }
        }, [e, o, r, s]),
        a = mt(() => e.getState(), [e]);
    return iu(() => {
        const {
            subscription: i
        } = f;
        return i.onStateChange = i.notifyNestedSubs, i.trySubscribe(), a !== e.getState() && i.notifyNestedSubs(), () => {
            i.tryUnsubscribe(), i.onStateChange = void 0
        }
    }, [f, a]), Oe((t || Xe).Provider, {
        value: f
    }, n)
}

function ia(e = Xe) {
    const t = e === Xe ? ra : Vo(e);
    return function() {
        const {
            store: o
        } = t();
        return o
    }
}
const De = ia();

function cu(e = Xe) {
    const t = e === Xe ? De : ia(e);
    return function() {
        return t().dispatch
    }
}
const Q = cu();
Gl(Hl.useSyncExternalStoreWithSelector);
Vl(Uo);

function Pe(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
    throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(r) {
        return "'" + r + "'"
    })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function Ge(e) {
    return !!e && !!e[le]
}

function Ue(e) {
    var t;
    return !!e && ((function(n) {
        if (!n || typeof n != "object") return !1;
        var o = Object.getPrototypeOf(n);
        if (o === null) return !0;
        var r = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
        return r === Object || typeof r == "function" && Function.toString.call(r) === gu
    })(e) || Array.isArray(e) || !!e[Fs] || !!(!((t = e.constructor) === null || t === void 0) && t[Fs]) || Wo(e) || qo(e))
}

function et(e, t, n) {
    n === void 0 && (n = !1), bt(e) === 0 ? (n ? Object.keys : dt)(e).forEach((function(o) {
        n && typeof o == "symbol" || t(o, e[o], e)
    })) : e.forEach((function(o, r) {
        return t(r, o, e)
    }))
}

function bt(e) {
    var t = e[le];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Wo(e) ? 2 : qo(e) ? 3 : 0
}

function ut(e, t) {
    return bt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function lu(e, t) {
    return bt(e) === 2 ? e.get(t) : e[t]
}

function aa(e, t, n) {
    var o = bt(e);
    o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n
}

function ca(e, t) {
    return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}

function Wo(e) {
    return mu && e instanceof Map
}

function qo(e) {
    return vu && e instanceof Set
}

function Ze(e) {
    return e.o || e.t
}

function Xo(e) {
    if (Array.isArray(e)) return Array.prototype.slice.call(e);
    var t = ua(e);
    delete t[le];
    for (var n = dt(t), o = 0; o < n.length; o++) {
        var r = n[o],
            s = t[r];
        s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (t[r] = {
            configurable: !0,
            writable: !0,
            enumerable: s.enumerable,
            value: e[r]
        })
    }
    return Object.create(Object.getPrototypeOf(e), t)
}

function Go(e, t) {
    return t === void 0 && (t = !1), Yo(e) || Ge(e) || !Ue(e) || (bt(e) > 1 && (e.set = e.add = e.clear = e.delete = uu), Object.freeze(e), t && et(e, (function(n, o) {
        return Go(o, !0)
    }), !0)), e
}

function uu() {
    Pe(2)
}

function Yo(e) {
    return e == null || typeof e != "object" || Object.isFrozen(e)
}

function je(e) {
    var t = Co[e];
    return t || Pe(18, e), t
}

function du(e, t) {
    Co[e] || (Co[e] = t)
}

function wo() {
    return Tt
}

function Zn(e, t) {
    t && (je("Patches"), e.u = [], e.s = [], e.v = t)
}

function pn(e) {
    xo(e), e.p.forEach(fu), e.p = null
}

function xo(e) {
    e === Tt && (Tt = e.l)
}

function Is(e) {
    return Tt = {
        p: [],
        l: Tt,
        h: e,
        m: !0,
        _: 0
    }
}

function fu(e) {
    var t = e[le];
    t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}

function Jn(e, t) {
    t._ = t.p.length;
    var n = t.p[0],
        o = e !== void 0 && e !== n;
    return t.h.O || je("ES5").S(t, e, o), o ? (n[le].P && (pn(t), Pe(4)), Ue(e) && (e = hn(t, e), t.l || mn(t, e)), t.u && je("Patches").M(n[le].t, e, t.u, t.s)) : e = hn(t, n, []), pn(t), t.u && t.v(t.u, t.s), e !== la ? e : void 0
}

function hn(e, t, n) {
    if (Yo(t)) return t;
    var o = t[le];
    if (!o) return et(t, (function(a, c) {
        return Rs(e, o, t, a, c, n)
    }), !0), t;
    if (o.A !== e) return t;
    if (!o.P) return mn(e, o.t, !0), o.t;
    if (!o.I) {
        o.I = !0, o.A._--;
        var r = o.i === 4 || o.i === 5 ? o.o = Xo(o.k) : o.o,
            s = r,
            f = !1;
        o.i === 3 && (s = new Set(r), r.clear(), f = !0), et(s, (function(a, c) {
            return Rs(e, o, r, a, c, n, f)
        })), mn(e, r, !1), n && e.u && je("Patches").N(o, n, e.u, e.s)
    }
    return o.o
}

function Rs(e, t, n, o, r, s, f) {
    if (Ge(r)) {
        var a = hn(e, r, s && t && t.i !== 3 && !ut(t.R, o) ? s.concat(o) : void 0);
        if (aa(n, o, a), !Ge(a)) return;
        e.m = !1
    } else f && n.add(r);
    if (Ue(r) && !Yo(r)) {
        if (!e.h.D && e._ < 1) return;
        hn(e, r), t && t.A.l || mn(e, r)
    }
}

function mn(e, t, n) {
    n === void 0 && (n = !1), !e.l && e.h.D && e.m && Go(t, n)
}

function eo(e, t) {
    var n = e[le];
    return (n ? Ze(n) : e)[t]
}

function Ls(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var o = Object.getOwnPropertyDescriptor(n, t);
            if (o) return o;
            n = Object.getPrototypeOf(n)
        }
}

function Ve(e) {
    e.P || (e.P = !0, e.l && Ve(e.l))
}

function to(e) {
    e.o || (e.o = Xo(e.t))
}

function ko(e, t, n) {
    var o = Wo(t) ? je("MapSet").F(t, n) : qo(t) ? je("MapSet").T(t, n) : e.O ? (function(r, s) {
        var f = Array.isArray(r),
            a = {
                i: f ? 1 : 0,
                A: s ? s.A : wo(),
                P: !1,
                I: !1,
                R: {},
                l: s,
                t: r,
                k: null,
                o: null,
                j: null,
                C: !1
            },
            c = a,
            i = jt;
        f && (c = [a], i = Et);
        var d = Proxy.revocable(c, i),
            l = d.revoke,
            m = d.proxy;
        return a.k = m, a.j = l, m
    })(t, n) : je("ES5").J(t, n);
    return (n ? n.A : wo()).p.push(o), o
}

function pu(e) {
    return Ge(e) || Pe(22, e), (function t(n) {
        if (!Ue(n)) return n;
        var o, r = n[le],
            s = bt(n);
        if (r) {
            if (!r.P && (r.i < 4 || !je("ES5").K(r))) return r.t;
            r.I = !0, o = Bs(n, s), r.I = !1
        } else o = Bs(n, s);
        return et(o, (function(f, a) {
            r && lu(r.t, f) === a || aa(o, f, t(a))
        })), s === 3 ? new Set(o) : o
    })(e)
}

function Bs(e, t) {
    switch (t) {
        case 2:
            return new Map(e);
        case 3:
            return Array.from(e)
    }
    return Xo(e)
}

function hu() {
    function e(s, f) {
        var a = r[s];
        return a ? a.enumerable = f : r[s] = a = {
            configurable: !0,
            enumerable: f,
            get: function() {
                var c = this[le];
                return jt.get(c, s)
            },
            set: function(c) {
                var i = this[le];
                jt.set(i, s, c)
            }
        }, a
    }

    function t(s) {
        for (var f = s.length - 1; f >= 0; f--) {
            var a = s[f][le];
            if (!a.P) switch (a.i) {
                case 5:
                    o(a) && Ve(a);
                    break;
                case 4:
                    n(a) && Ve(a)
            }
        }
    }

    function n(s) {
        for (var f = s.t, a = s.k, c = dt(a), i = c.length - 1; i >= 0; i--) {
            var d = c[i];
            if (d !== le) {
                var l = f[d];
                if (l === void 0 && !ut(f, d)) return !0;
                var m = a[d],
                    u = m && m[le];
                if (u ? u.t !== l : !ca(m, l)) return !0
            }
        }
        var v = !!f[le];
        return c.length !== dt(f).length + (v ? 0 : 1)
    }

    function o(s) {
        var f = s.k;
        if (f.length !== s.t.length) return !0;
        var a = Object.getOwnPropertyDescriptor(f, f.length - 1);
        if (a && !a.get) return !0;
        for (var c = 0; c < f.length; c++)
            if (!f.hasOwnProperty(c)) return !0;
        return !1
    }
    var r = {};
    du("ES5", {
        J: function(s, f) {
            var a = Array.isArray(s),
                c = (function(d, l) {
                    if (d) {
                        for (var m = Array(l.length), u = 0; u < l.length; u++) Object.defineProperty(m, "" + u, e(u, !0));
                        return m
                    }
                    var v = ua(l);
                    delete v[le];
                    for (var p = dt(v), g = 0; g < p.length; g++) {
                        var _ = p[g];
                        v[_] = e(_, d || !!v[_].enumerable)
                    }
                    return Object.create(Object.getPrototypeOf(l), v)
                })(a, s),
                i = {
                    i: a ? 5 : 4,
                    A: f ? f.A : wo(),
                    P: !1,
                    I: !1,
                    R: {},
                    l: f,
                    t: s,
                    k: c,
                    o: null,
                    g: !1,
                    C: !1
                };
            return Object.defineProperty(c, le, {
                value: i,
                writable: !0
            }), c
        },
        S: function(s, f, a) {
            a ? Ge(f) && f[le].A === s && t(s.p) : (s.u && (function c(i) {
                if (i && typeof i == "object") {
                    var d = i[le];
                    if (d) {
                        var l = d.t,
                            m = d.k,
                            u = d.R,
                            v = d.i;
                        if (v === 4) et(m, (function(b) {
                            b !== le && (l[b] !== void 0 || ut(l, b) ? u[b] || c(m[b]) : (u[b] = !0, Ve(d)))
                        })), et(l, (function(b) {
                            m[b] !== void 0 || ut(m, b) || (u[b] = !1, Ve(d))
                        }));
                        else if (v === 5) {
                            if (o(d) && (Ve(d), u.length = !0), m.length < l.length)
                                for (var p = m.length; p < l.length; p++) u[p] = !1;
                            else
                                for (var g = l.length; g < m.length; g++) u[g] = !0;
                            for (var _ = Math.min(m.length, l.length), y = 0; y < _; y++) m.hasOwnProperty(y) || (u[y] = !0), u[y] === void 0 && c(m[y])
                        }
                    }
                }
            })(s.p[0]), t(s.p))
        },
        K: function(s) {
            return s.i === 4 ? n(s) : o(s)
        }
    })
}
var Ns, Tt, Qo = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
    mu = typeof Map < "u",
    vu = typeof Set < "u",
    zs = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
    la = Qo ? Symbol.for("immer-nothing") : ((Ns = {})["immer-nothing"] = !0, Ns),
    Fs = Qo ? Symbol.for("immer-draftable") : "__$immer_draftable",
    le = Qo ? Symbol.for("immer-state") : "__$immer_state",
    gu = "" + Object.prototype.constructor,
    dt = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
    } : Object.getOwnPropertyNames,
    ua = Object.getOwnPropertyDescriptors || function(e) {
        var t = {};
        return dt(e).forEach((function(n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n)
        })), t
    },
    Co = {},
    jt = {
        get: function(e, t) {
            if (t === le) return e;
            var n = Ze(e);
            if (!ut(n, t)) return (function(r, s, f) {
                var a, c = Ls(s, f);
                return c ? "value" in c ? c.value : (a = c.get) === null || a === void 0 ? void 0 : a.call(r.k) : void 0
            })(e, n, t);
            var o = n[t];
            return e.I || !Ue(o) ? o : o === eo(e.t, t) ? (to(e), e.o[t] = ko(e.A.h, o, e)) : o
        },
        has: function(e, t) {
            return t in Ze(e)
        },
        ownKeys: function(e) {
            return Reflect.ownKeys(Ze(e))
        },
        set: function(e, t, n) {
            var o = Ls(Ze(e), t);
            if (o?.set) return o.set.call(e.k, n), !0;
            if (!e.P) {
                var r = eo(Ze(e), t),
                    s = r?.[le];
                if (s && s.t === n) return e.o[t] = n, e.R[t] = !1, !0;
                if (ca(n, r) && (n !== void 0 || ut(e.t, t))) return !0;
                to(e), Ve(e)
            }
            return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
        },
        deleteProperty: function(e, t) {
            return eo(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, to(e), Ve(e)) : delete e.R[t], e.o && delete e.o[t], !0
        },
        getOwnPropertyDescriptor: function(e, t) {
            var n = Ze(e),
                o = Reflect.getOwnPropertyDescriptor(n, t);
            return o && {
                writable: !0,
                configurable: e.i !== 1 || t !== "length",
                enumerable: o.enumerable,
                value: n[t]
            }
        },
        defineProperty: function() {
            Pe(11)
        },
        getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t)
        },
        setPrototypeOf: function() {
            Pe(12)
        }
    },
    Et = {};
et(jt, (function(e, t) {
    Et[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments)
    }
})), Et.deleteProperty = function(e, t) {
    return Et.set.call(this, e, t, void 0)
}, Et.set = function(e, t, n) {
    return jt.set.call(this, e[0], t, n, e[0])
};
var _u = (function() {
        function e(n) {
            var o = this;
            this.O = zs, this.D = !0, this.produce = function(r, s, f) {
                if (typeof r == "function" && typeof s != "function") {
                    var a = s;
                    s = r;
                    var c = o;
                    return function(p) {
                        var g = this;
                        p === void 0 && (p = a);
                        for (var _ = arguments.length, y = Array(_ > 1 ? _ - 1 : 0), b = 1; b < _; b++) y[b - 1] = arguments[b];
                        return c.produce(p, (function(C) {
                            var x;
                            return (x = s).call.apply(x, [g, C].concat(y))
                        }))
                    }
                }
                var i;
                if (typeof s != "function" && Pe(6), f !== void 0 && typeof f != "function" && Pe(7), Ue(r)) {
                    var d = Is(o),
                        l = ko(o, r, void 0),
                        m = !0;
                    try {
                        i = s(l), m = !1
                    } finally {
                        m ? pn(d) : xo(d)
                    }
                    return typeof Promise < "u" && i instanceof Promise ? i.then((function(p) {
                        return Zn(d, f), Jn(p, d)
                    }), (function(p) {
                        throw pn(d), p
                    })) : (Zn(d, f), Jn(i, d))
                }
                if (!r || typeof r != "object") {
                    if ((i = s(r)) === void 0 && (i = r), i === la && (i = void 0), o.D && Go(i, !0), f) {
                        var u = [],
                            v = [];
                        je("Patches").M(r, i, u, v), f(u, v)
                    }
                    return i
                }
                Pe(21, r)
            }, this.produceWithPatches = function(r, s) {
                if (typeof r == "function") return function(i) {
                    for (var d = arguments.length, l = Array(d > 1 ? d - 1 : 0), m = 1; m < d; m++) l[m - 1] = arguments[m];
                    return o.produceWithPatches(i, (function(u) {
                        return r.apply(void 0, [u].concat(l))
                    }))
                };
                var f, a, c = o.produce(r, s, (function(i, d) {
                    f = i, a = d
                }));
                return typeof Promise < "u" && c instanceof Promise ? c.then((function(i) {
                    return [i, f, a]
                })) : [c, f, a]
            }, typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies), typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze)
        }
        var t = e.prototype;
        return t.createDraft = function(n) {
            Ue(n) || Pe(8), Ge(n) && (n = pu(n));
            var o = Is(this),
                r = ko(this, n, void 0);
            return r[le].C = !0, xo(o), r
        }, t.finishDraft = function(n, o) {
            var r = n && n[le],
                s = r.A;
            return Zn(s, o), Jn(void 0, s)
        }, t.setAutoFreeze = function(n) {
            this.D = n
        }, t.setUseProxies = function(n) {
            n && !zs && Pe(20), this.O = n
        }, t.applyPatches = function(n, o) {
            var r;
            for (r = o.length - 1; r >= 0; r--) {
                var s = o[r];
                if (s.path.length === 0 && s.op === "replace") {
                    n = s.value;
                    break
                }
            }
            r > -1 && (o = o.slice(r + 1));
            var f = je("Patches").$;
            return Ge(n) ? f(n, o) : this.produce(n, (function(a) {
                return f(a, o)
            }))
        }, e
    })(),
    xe = new _u,
    da = xe.produce;
xe.produceWithPatches.bind(xe);
xe.setAutoFreeze.bind(xe);
xe.setUseProxies.bind(xe);
xe.applyPatches.bind(xe);
xe.createDraft.bind(xe);
xe.finishDraft.bind(xe);

function It(e) {
    "@babel/helpers - typeof";
    return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
        return typeof t
    } : function(t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    }, It(e)
}

function yu(e, t) {
    if (It(e) !== "object" || e === null) return e;
    var n = e[Symbol.toPrimitive];
    if (n !== void 0) {
        var o = n.call(e, t);
        if (It(o) !== "object") return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (t === "string" ? String : Number)(e)
}

function bu(e) {
    var t = yu(e, "string");
    return It(t) === "symbol" ? t : String(t)
}

function wu(e, t, n) {
    return t = bu(t), t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function Ks(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
        })), n.push.apply(n, o)
    }
    return n
}

function Us(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t] != null ? arguments[t] : {};
        t % 2 ? Ks(Object(n), !0).forEach(function(o) {
            wu(e, o, n[o])
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ks(Object(n)).forEach(function(o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(n, o))
        })
    }
    return e
}

function _e(e) {
    return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
}
var Hs = (function() {
        return typeof Symbol == "function" && Symbol.observable || "@@observable"
    })(),
    no = function() {
        return Math.random().toString(36).substring(7).split("").join(".")
    },
    vn = {
        INIT: "@@redux/INIT" + no(),
        REPLACE: "@@redux/REPLACE" + no(),
        PROBE_UNKNOWN_ACTION: function() {
            return "@@redux/PROBE_UNKNOWN_ACTION" + no()
        }
    };

function xu(e) {
    if (typeof e != "object" || e === null) return !1;
    for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
    return Object.getPrototypeOf(e) === t
}

function fa(e, t, n) {
    var o;
    if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(_e(0));
    if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
        if (typeof n != "function") throw new Error(_e(1));
        return n(fa)(e, t)
    }
    if (typeof e != "function") throw new Error(_e(2));
    var r = e,
        s = t,
        f = [],
        a = f,
        c = !1;

    function i() {
        a === f && (a = f.slice())
    }

    function d() {
        if (c) throw new Error(_e(3));
        return s
    }

    function l(p) {
        if (typeof p != "function") throw new Error(_e(4));
        if (c) throw new Error(_e(5));
        var g = !0;
        return i(), a.push(p),
            function() {
                if (g) {
                    if (c) throw new Error(_e(6));
                    g = !1, i();
                    var y = a.indexOf(p);
                    a.splice(y, 1), f = null
                }
            }
    }

    function m(p) {
        if (!xu(p)) throw new Error(_e(7));
        if (typeof p.type > "u") throw new Error(_e(8));
        if (c) throw new Error(_e(9));
        try {
            c = !0, s = r(s, p)
        } finally {
            c = !1
        }
        for (var g = f = a, _ = 0; _ < g.length; _++) {
            var y = g[_];
            y()
        }
        return p
    }

    function u(p) {
        if (typeof p != "function") throw new Error(_e(10));
        r = p, m({
            type: vn.REPLACE
        })
    }

    function v() {
        var p, g = l;
        return p = {
            subscribe: function(y) {
                if (typeof y != "object" || y === null) throw new Error(_e(11));

                function b() {
                    y.next && y.next(d())
                }
                b();
                var C = g(b);
                return {
                    unsubscribe: C
                }
            }
        }, p[Hs] = function() {
            return this
        }, p
    }
    return m({
        type: vn.INIT
    }), o = {
        dispatch: m,
        subscribe: l,
        getState: d,
        replaceReducer: u
    }, o[Hs] = v, o
}

function ku(e) {
    Object.keys(e).forEach(function(t) {
        var n = e[t],
            o = n(void 0, {
                type: vn.INIT
            });
        if (typeof o > "u") throw new Error(_e(12));
        if (typeof n(void 0, {
                type: vn.PROBE_UNKNOWN_ACTION()
            }) > "u") throw new Error(_e(13))
    })
}

function Cu(e) {
    for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
        var r = t[o];
        typeof e[r] == "function" && (n[r] = e[r])
    }
    var s = Object.keys(n),
        f;
    try {
        ku(n)
    } catch (a) {
        f = a
    }
    return function(c, i) {
        if (c === void 0 && (c = {}), f) throw f;
        for (var d = !1, l = {}, m = 0; m < s.length; m++) {
            var u = s[m],
                v = n[u],
                p = c[u],
                g = v(p, i);
            if (typeof g > "u") throw i && i.type, new Error(_e(14));
            l[u] = g, d = d || g !== p
        }
        return d = d || s.length !== Object.keys(c).length, d ? l : c
    }
}

function gn() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.length === 0 ? function(o) {
        return o
    } : t.length === 1 ? t[0] : t.reduce(function(o, r) {
        return function() {
            return o(r.apply(void 0, arguments))
        }
    })
}

function Su() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return function(o) {
        return function() {
            var r = o.apply(void 0, arguments),
                s = function() {
                    throw new Error(_e(15))
                },
                f = {
                    getState: r.getState,
                    dispatch: function() {
                        return s.apply(void 0, arguments)
                    }
                },
                a = t.map(function(c) {
                    return c(f)
                });
            return s = gn.apply(void 0, a)(r.dispatch), Us(Us({}, r), {}, {
                dispatch: s
            })
        }
    }
}

function pa(e) {
    var t = function(o) {
        var r = o.dispatch,
            s = o.getState;
        return function(f) {
            return function(a) {
                return typeof a == "function" ? a(r, s, e) : f(a)
            }
        }
    };
    return t
}
var So = pa();
So.withExtraArgument = pa;
var ha = (function() {
        var e = function(t, n) {
            return e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(o, r) {
                o.__proto__ = r
            } || function(o, r) {
                for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (o[s] = r[s])
            }, e(t, n)
        };
        return function(t, n) {
            if (typeof n != "function" && n !== null) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
            e(t, n);

            function o() {
                this.constructor = t
            }
            t.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
    })(),
    Pu = function(e, t) {
        var n = {
                label: 0,
                sent: function() {
                    if (s[0] & 1) throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            },
            o, r, s, f;
        return f = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, typeof Symbol == "function" && (f[Symbol.iterator] = function() {
            return this
        }), f;

        function a(i) {
            return function(d) {
                return c([i, d])
            }
        }

        function c(i) {
            if (o) throw new TypeError("Generator is already executing.");
            for (; n;) try {
                if (o = 1, r && (s = i[0] & 2 ? r.return : i[0] ? r.throw || ((s = r.return) && s.call(r), 0) : r.next) && !(s = s.call(r, i[1])).done) return s;
                switch (r = 0, s && (i = [i[0] & 2, s.value]), i[0]) {
                    case 0:
                    case 1:
                        s = i;
                        break;
                    case 4:
                        return n.label++, {
                            value: i[1],
                            done: !1
                        };
                    case 5:
                        n.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = n.ops.pop(), n.trys.pop();
                        continue;
                    default:
                        if (s = n.trys, !(s = s.length > 0 && s[s.length - 1]) && (i[0] === 6 || i[0] === 2)) {
                            n = 0;
                            continue
                        }
                        if (i[0] === 3 && (!s || i[1] > s[0] && i[1] < s[3])) {
                            n.label = i[1];
                            break
                        }
                        if (i[0] === 6 && n.label < s[1]) {
                            n.label = s[1], s = i;
                            break
                        }
                        if (s && n.label < s[2]) {
                            n.label = s[2], n.ops.push(i);
                            break
                        }
                        s[2] && n.ops.pop(), n.trys.pop();
                        continue
                }
                i = t.call(e, n)
            } catch (d) {
                i = [6, d], r = 0
            } finally {
                o = s = 0
            }
            if (i[0] & 5) throw i[1];
            return {
                value: i[0] ? i[1] : void 0,
                done: !0
            }
        }
    },
    vt = function(e, t) {
        for (var n = 0, o = t.length, r = e.length; n < o; n++, r++) e[r] = t[n];
        return e
    },
    Eu = Object.defineProperty,
    Ou = Object.defineProperties,
    Mu = Object.getOwnPropertyDescriptors,
    $s = Object.getOwnPropertySymbols,
    Au = Object.prototype.hasOwnProperty,
    Du = Object.prototype.propertyIsEnumerable,
    Vs = function(e, t, n) {
        return t in e ? Eu(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n
    },
    qe = function(e, t) {
        for (var n in t || (t = {})) Au.call(t, n) && Vs(e, n, t[n]);
        if ($s)
            for (var o = 0, r = $s(t); o < r.length; o++) {
                var n = r[o];
                Du.call(t, n) && Vs(e, n, t[n])
            }
        return e
    },
    oo = function(e, t) {
        return Ou(e, Mu(t))
    },
    Tu = function(e, t, n) {
        return new Promise(function(o, r) {
            var s = function(c) {
                    try {
                        a(n.next(c))
                    } catch (i) {
                        r(i)
                    }
                },
                f = function(c) {
                    try {
                        a(n.throw(c))
                    } catch (i) {
                        r(i)
                    }
                },
                a = function(c) {
                    return c.done ? o(c.value) : Promise.resolve(c.value).then(s, f)
                };
            a((n = n.apply(e, t)).next())
        })
    },
    ju = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
        if (arguments.length !== 0) return typeof arguments[0] == "object" ? gn : gn.apply(null, arguments)
    };

function Iu(e) {
    if (typeof e != "object" || e === null) return !1;
    var t = Object.getPrototypeOf(e);
    if (t === null) return !0;
    for (var n = t; Object.getPrototypeOf(n) !== null;) n = Object.getPrototypeOf(n);
    return t === n
}

function we(e, t) {
    function n() {
        for (var o = [], r = 0; r < arguments.length; r++) o[r] = arguments[r];
        if (t) {
            var s = t.apply(void 0, o);
            if (!s) throw new Error("prepareAction did not return an object");
            return qe(qe({
                type: e,
                payload: s.payload
            }, "meta" in s && {
                meta: s.meta
            }), "error" in s && {
                error: s.error
            })
        }
        return {
            type: e,
            payload: o[0]
        }
    }
    return n.toString = function() {
        return "" + e
    }, n.type = e, n.match = function(o) {
        return o.type === e
    }, n
}
var Ru = (function(e) {
        ha(t, e);

        function t() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            var r = e.apply(this, n) || this;
            return Object.setPrototypeOf(r, t.prototype), r
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, vt([void 0], n[0].concat(this)))) : new(t.bind.apply(t, vt([void 0], n.concat(this))))
        }, t
    })(Array),
    Lu = (function(e) {
        ha(t, e);

        function t() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            var r = e.apply(this, n) || this;
            return Object.setPrototypeOf(r, t.prototype), r
        }
        return Object.defineProperty(t, Symbol.species, {
            get: function() {
                return t
            },
            enumerable: !1,
            configurable: !0
        }), t.prototype.concat = function() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            return e.prototype.concat.apply(this, n)
        }, t.prototype.prepend = function() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            return n.length === 1 && Array.isArray(n[0]) ? new(t.bind.apply(t, vt([void 0], n[0].concat(this)))) : new(t.bind.apply(t, vt([void 0], n.concat(this))))
        }, t
    })(Array);

function Po(e) {
    return Ue(e) ? da(e, function() {}) : e
}

function Bu(e) {
    return typeof e == "boolean"
}

function Nu() {
    return function(t) {
        return zu(t)
    }
}

function zu(e) {
    e === void 0 && (e = {});
    var t = e.thunk,
        n = t === void 0 ? !0 : t;
    e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
    var o = new Ru;
    return n && (Bu(n) ? o.push(So) : o.push(So.withExtraArgument(n.extraArgument))), o
}

function Fu(e) {
    var t = Nu(),
        n = e || {},
        o = n.reducer,
        r = o === void 0 ? void 0 : o,
        s = n.middleware,
        f = s === void 0 ? t() : s,
        a = n.devTools,
        c = a === void 0 ? !0 : a,
        i = n.preloadedState,
        d = i === void 0 ? void 0 : i,
        l = n.enhancers,
        m = l === void 0 ? void 0 : l,
        u;
    if (typeof r == "function") u = r;
    else if (Iu(r)) u = Cu(r);
    else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
    var v = f;
    typeof v == "function" && (v = v(t));
    var p = Su.apply(void 0, v),
        g = gn;
    c && (g = ju(qe({
        trace: !1
    }, typeof c == "object" && c)));
    var _ = new Lu(p),
        y = _;
    Array.isArray(m) ? y = vt([p], m) : typeof m == "function" && (y = m(_));
    var b = g.apply(void 0, y);
    return fa(u, d, b)
}

function ma(e) {
    var t = {},
        n = [],
        o, r = {
            addCase: function(s, f) {
                var a = typeof s == "string" ? s : s.type;
                if (!a) throw new Error("`builder.addCase` cannot be called with an empty action type");
                if (a in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
                return t[a] = f, r
            },
            addMatcher: function(s, f) {
                return n.push({
                    matcher: s,
                    reducer: f
                }), r
            },
            addDefaultCase: function(s) {
                return o = s, r
            }
        };
    return e(r), [t, n, o]
}

function Ku(e) {
    return typeof e == "function"
}

function Uu(e, t, n, o) {
    n === void 0 && (n = []);
    var r = typeof t == "function" ? ma(t) : [t, n, o],
        s = r[0],
        f = r[1],
        a = r[2],
        c;
    if (Ku(e)) c = function() {
        return Po(e())
    };
    else {
        var i = Po(e);
        c = function() {
            return i
        }
    }

    function d(l, m) {
        l === void 0 && (l = c());
        var u = vt([s[m.type]], f.filter(function(v) {
            var p = v.matcher;
            return p(m)
        }).map(function(v) {
            var p = v.reducer;
            return p
        }));
        return u.filter(function(v) {
            return !!v
        }).length === 0 && (u = [a]), u.reduce(function(v, p) {
            if (p)
                if (Ge(v)) {
                    var g = v,
                        _ = p(g, m);
                    return _ === void 0 ? v : _
                } else {
                    if (Ue(v)) return da(v, function(y) {
                        return p(y, m)
                    });
                    var _ = p(v, m);
                    if (_ === void 0) {
                        if (v === null) return v;
                        throw Error("A case reducer on a non-draftable value must not return undefined")
                    }
                    return _
                } return v
        }, l)
    }
    return d.getInitialState = c, d
}

function Hu(e, t) {
    return e + "/" + t
}

function nt(e) {
    var t = e.name;
    if (!t) throw new Error("`name` is a required option for createSlice");
    var n = typeof e.initialState == "function" ? e.initialState : Po(e.initialState),
        o = e.reducers || {},
        r = Object.keys(o),
        s = {},
        f = {},
        a = {};
    r.forEach(function(d) {
        var l = o[d],
            m = Hu(t, d),
            u, v;
        "reducer" in l ? (u = l.reducer, v = l.prepare) : u = l, s[d] = u, f[m] = u, a[d] = v ? we(m, v) : we(m)
    });

    function c() {
        var d = typeof e.extraReducers == "function" ? ma(e.extraReducers) : [e.extraReducers],
            l = d[0],
            m = l === void 0 ? {} : l,
            u = d[1],
            v = u === void 0 ? [] : u,
            p = d[2],
            g = p === void 0 ? void 0 : p,
            _ = qe(qe({}, m), f);
        return Uu(n, function(y) {
            for (var b in _) y.addCase(b, _[b]);
            for (var C = 0, x = v; C < x.length; C++) {
                var T = x[C];
                y.addMatcher(T.matcher, T.reducer)
            }
            g && y.addDefaultCase(g)
        })
    }
    var i;
    return {
        name: t,
        reducer: function(d, l) {
            return i || (i = c()), i(d, l)
        },
        actions: a,
        caseReducers: s,
        getInitialState: function() {
            return i || (i = c()), i.getInitialState()
        }
    }
}
var $u = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
    Vu = function(e) {
        e === void 0 && (e = 21);
        for (var t = "", n = e; n--;) t += $u[Math.random() * 64 | 0];
        return t
    },
    Wu = ["name", "message", "stack", "code"],
    ro = (function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    })(),
    Ws = (function() {
        function e(t, n) {
            this.payload = t, this.meta = n
        }
        return e
    })(),
    qu = function(e) {
        if (typeof e == "object" && e !== null) {
            for (var t = {}, n = 0, o = Wu; n < o.length; n++) {
                var r = o[n];
                typeof e[r] == "string" && (t[r] = e[r])
            }
            return t
        }
        return {
            message: String(e)
        }
    };
(function() {
    function e(t, n, o) {
        var r = we(t + "/fulfilled", function(i, d, l, m) {
                return {
                    payload: i,
                    meta: oo(qe({}, m || {}), {
                        arg: l,
                        requestId: d,
                        requestStatus: "fulfilled"
                    })
                }
            }),
            s = we(t + "/pending", function(i, d, l) {
                return {
                    payload: void 0,
                    meta: oo(qe({}, l || {}), {
                        arg: d,
                        requestId: i,
                        requestStatus: "pending"
                    })
                }
            }),
            f = we(t + "/rejected", function(i, d, l, m, u) {
                return {
                    payload: m,
                    error: (o && o.serializeError || qu)(i || "Rejected"),
                    meta: oo(qe({}, u || {}), {
                        arg: l,
                        requestId: d,
                        rejectedWithValue: !!m,
                        requestStatus: "rejected",
                        aborted: i?.name === "AbortError",
                        condition: i?.name === "ConditionError"
                    })
                }
            }),
            a = typeof AbortController < "u" ? AbortController : (function() {
                function i() {
                    this.signal = {
                        aborted: !1,
                        addEventListener: function() {},
                        dispatchEvent: function() {
                            return !1
                        },
                        onabort: function() {},
                        removeEventListener: function() {},
                        reason: void 0,
                        throwIfAborted: function() {}
                    }
                }
                return i.prototype.abort = function() {}, i
            })();

        function c(i) {
            return function(d, l, m) {
                var u = o?.idGenerator ? o.idGenerator(i) : Vu(),
                    v = new a,
                    p;

                function g(y) {
                    p = y, v.abort()
                }
                var _ = (function() {
                    return Tu(this, null, function() {
                        var y, b, C, x, T, j, N;
                        return Pu(this, function(z) {
                            switch (z.label) {
                                case 0:
                                    return z.trys.push([0, 4, , 5]), x = (y = o?.condition) == null ? void 0 : y.call(o, i, {
                                        getState: l,
                                        extra: m
                                    }), Gu(x) ? [4, x] : [3, 2];
                                case 1:
                                    x = z.sent(), z.label = 2;
                                case 2:
                                    if (x === !1 || v.signal.aborted) throw {
                                        name: "ConditionError",
                                        message: "Aborted due to condition callback returning false."
                                    };
                                    return T = new Promise(function(F, R) {
                                        return v.signal.addEventListener("abort", function() {
                                            return R({
                                                name: "AbortError",
                                                message: p || "Aborted"
                                            })
                                        })
                                    }), d(s(u, i, (b = o?.getPendingMeta) == null ? void 0 : b.call(o, {
                                        requestId: u,
                                        arg: i
                                    }, {
                                        getState: l,
                                        extra: m
                                    }))), [4, Promise.race([T, Promise.resolve(n(i, {
                                        dispatch: d,
                                        getState: l,
                                        extra: m,
                                        requestId: u,
                                        signal: v.signal,
                                        abort: g,
                                        rejectWithValue: function(F, R) {
                                            return new ro(F, R)
                                        },
                                        fulfillWithValue: function(F, R) {
                                            return new Ws(F, R)
                                        }
                                    })).then(function(F) {
                                        if (F instanceof ro) throw F;
                                        return F instanceof Ws ? r(F.payload, u, i, F.meta) : r(F, u, i)
                                    })])];
                                case 3:
                                    return C = z.sent(), [3, 5];
                                case 4:
                                    return j = z.sent(), C = j instanceof ro ? f(null, u, i, j.payload, j.meta) : f(j, u, i), [3, 5];
                                case 5:
                                    return N = o && !o.dispatchConditionRejection && f.match(C) && C.meta.condition, N || d(C), [2, C]
                            }
                        })
                    })
                })();
                return Object.assign(_, {
                    abort: g,
                    requestId: u,
                    arg: i,
                    unwrap: function() {
                        return _.then(Xu)
                    }
                })
            }
        }
        return Object.assign(c, {
            pending: s,
            rejected: f,
            fulfilled: r,
            typePrefix: t
        })
    }
    return e.withTypes = function() {
        return e
    }, e
})();

function Xu(e) {
    if (e.meta && e.meta.rejectedWithValue) throw e.payload;
    if (e.error) throw e.error;
    return e.payload
}

function Gu(e) {
    return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Zo = "listenerMiddleware";
we(Zo + "/add");
we(Zo + "/removeAll");
we(Zo + "/remove");
var qs;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
hu();
const va = {
        ru: {
            click_to_lock: "Нажмите что бы захватить мышь",
            use_esc_key_to_unlock: "Используйте `Esc` что бы освободить",
            use_slider_to_change_sensitivity: "Используйте слайдер слева что бы изменить чувствительность",
            current_sensitivity: "Текущая чувствительность",
            hello: "Привет",
            hello_guest: "Привет, гость!",
            mobile_controls: "Мобильное управление",
            mirrored_controls: "Отразить управление",
            scale_controls: "Масштаб управления",
            enter_name_of_drive: "Введите название диска",
            ws_outdated: "Необходимо обновить DOS Браузер",
            update: "Обновить",
            preloading_sockdrive: "Загрузка (единожды)",
            filter: "Фильтр",
            add: "Добавить",
            logout: "Выйти",
            features: "Функции",
            premium: "Подписка",
            buy: "Купить",
            experimental_features: "Доступ к экспериентальным функциям",
            cloud_saves: "Облачные сохранения",
            writeable_fat32: "FAT32 диски",
            net_no_limits: "Выбор сервера для стевой игры",
            unlock_options: "Доступ ко всем настройкам",
            error: "Упс... Что-то пошло не так...",
            consult_logs: "Проверьте логи браузера",
            bundle_loading: "Загрузка бандла",
            bundle_config: "Чтение конфигурации",
            try_free: "дней бесплатно",
            upload_file: "Выбирите архив jsdos/zip что бы начать...",
            emulation_backend: "Эмуляция",
            render_backend: "Рендер",
            render_aspect: "Соотношение сторон",
            worker: "Фоновый поток",
            mouse_sensitivity: "Чувст. мыши",
            mouse_lock: "Захват мыши",
            volume: "Громкость",
            pause: "Пауза",
            dosboxconf_template: "dosbox.conf шаблон:",
            preview: "Превью",
            continue: "Продолжить",
            skip: "Пропустить",
            loading: "Загрузка",
            extract_loading: "Распаковка архива",
            extract_long_time: "Может занять длительное время, пожалуйста ждите...",
            theme: "Тема",
            create_empty: "Создать пустой бандл",
            uploading_file: "Загрузка файла",
            fs_restart: "Вы хотите пересобрать бандл используя эту FS?",
            please_wait: "Пожалуйста подождите",
            making_bundle: "Создаем бандл",
            size: "Размер",
            room: "Команта",
            server: "Сервер",
            load_by_url: "Загрузить по ссылке",
            enter_url: "Введите ссылку",
            load: "Загрузить",
            stored: "Сохраненные",
            delete: "Удалить",
            editor: "Редактор",
            download: "Скачать",
            changes: "Сохранения",
            loading_saves: "Загрузка сохранений",
            success: "Успешно",
            success_save: "Сохранено в облаке",
            warn_save_no_account: "Cохранено в браузере (вы не вошли)",
            warn_save_no_premium: "Cохранено в браузере (нет подписки)",
            warn_save_big_file: "Cохранено в браузере (большой файл)",
            unable_to_save: "Ошибка записи",
            not_premium: "Подключить подписку",
            copy_net_link: "Отправьте ссылку на подключение",
            copied: "Скопировано",
            image_rendering: "Обработка изображения",
            fix: "Исправить",
            close: "Закрыть",
            cancle: "Отказаться",
            manage: "Управлять",
            unable_to_cancle_subscription: "Не удалось отменить подписку",
            subscription_cancelled: "Подписка отменена",
            hardware: "Аппаратное ускорение",
            play: "Запустить",
            system_cursor: "Системный курсор",
            no_cloud_access: "Что бы использовать облачные сохранения, введите",
            no_cloud_access2: "ниже",
            no_cloud_access3: "Без подписки прогресс сохраняется локально в браузере и может быть потерян",
            key: "ваш ключ",
            load_archive: "Загрузить архив",
            sockdrives: "Готовые образы (sockdrive)",
            confirm_save: "Хотите сохранить прогресс?",
            save: "Сохранить",
            emulation_ended: "Эмуляция завершена",
            saving_game: "Сохранение игры...",
            sockdrive_save_in_the_middle: "Win9x безопаснее сохранять после выключении системы",
            changes_loaded: "Сохранения загружены в игру",
            error_deleting_changes: "Ошибка удаления сохранений",
            no_changes_loaded: "Нет сохранений",
            upload: "Загрузить",
            error_uploading_changes: "Ошибка загрузки сохранений",
            delete_changes_confirm: "Вы уверены что хотите удалить сохранения?",
            no_changes_to_save: "Нет изменений для сохранения",
            offscreen_canvas: "Фоновый рендеринг",
            special_keys: "Специальные клавиши",
            create_server: "Создание сервера",
            connect_to_network: "Подключение к сети",
            lookup_address: "Поиск адреса",
            unable_to_connect_to_network: "Не удалось подключиться к сети"
        },
        en: {
            click_to_lock: "Click to capture mouse",
            use_esc_key_to_unlock: "Use `Esc` to unlock",
            use_slider_to_change_sensitivity: "Use slider on the left to change sensitivity",
            current_sensitivity: "Current sensitivity",
            hello: "Hello",
            hello_guest: "Hello, guest!",
            play: "Start",
            system_cursor: "System cursor",
            mobile_controls: "Mobile controls",
            mirrored_controls: "Mirror controls",
            scale_controls: "Scale controls",
            enter_name_of_drive: "Enter name of drive",
            ws_outdated: "Must update DOS Browser App",
            update: "Update",
            preloading_sockdrive: "Loading (once)",
            filter: "Filter",
            add: "Add",
            logout: "Logout",
            features: "Features",
            premium: "Subscription",
            buy: "Buy",
            experimental_features: "Access to all experimental features",
            cloud_saves: "Cloud saves",
            writeable_fat32: "Writable FAT32",
            net_no_limits: "Change the network region",
            unlock_options: "Unlock all configuration options",
            error: "Oops... Something went wrong...",
            consult_logs: "Please check browser logs",
            bundle_loading: "Bundle loading",
            bundle_config: "Reading config",
            try_free: "days for free",
            upload_file: "Select jsdos/zip file to start...",
            emulation_backend: "Emulation",
            render_backend: "Render",
            render_aspect: "Aspect",
            worker: "Worker thread",
            mouse_sensitivity: "Mouse sens...",
            mouse_lock: "Capture mouse",
            volume: "Volume",
            pause: "Pause",
            dosboxconf_template: "dosbox.conf template:",
            preview: "Preview",
            continue: "Continue",
            skip: "Skip",
            loading: "Loading",
            extract_loading: "Unpacking archive",
            extract_long_time: "Can take long time, please be patient...",
            theme: "Theme",
            create_empty: "Create empty bundle",
            uploading_file: "Uploading file",
            fs_restart: "Do you want to rebuild the bundle using this fs?",
            please_wait: "Please wait",
            making_bundle: "Creating bundle",
            size: "Size",
            room: "Room",
            server: "Server",
            load_by_url: "Load by url",
            enter_url: "Enter url",
            load: "Load",
            stored: "Stored",
            delete: "Delete",
            editor: "Editor",
            download: "Download",
            changes: "Saves",
            loading_saves: "Loading saves",
            success: "Success",
            success_save: "Saved in cloud",
            warn_save_no_account: "Saved in browser (not logged in)",
            warn_save_no_premium: "Saved in browser (no subscription)",
            warn_save_big_file: "Saved in browser (large file)",
            unable_to_save: "Unable to save",
            not_premium: "Subscribe",
            copy_net_link: "Share this link to connect",
            copied: "Copied",
            image_rendering: "Image rendering",
            fix: "Fix",
            close: "Close",
            cancle: "Cancel",
            manage: "Manage",
            unable_to_cancle_subscription: "Unable to cancel subscription",
            subscription_cancelled: "Subscription cancelled",
            hardware: "Hardware acceleration",
            no_cloud_access: "To enable cloud saves, enter",
            no_cloud_access2: "below",
            no_cloud_access3: "Without a subscription, your progress will only be saved locally in your browser and may be lost",
            key: "your key",
            load_archive: "Load archive",
            sockdrives: "Disk images (sockdrive)",
            confirm_save: "Do you want to save progress?",
            save: "Save",
            emulation_ended: "Emulation ended",
            saving_game: "Saving game...",
            sockdrive_save_in_the_middle: "Win9x is safer to save after shutting down the system",
            changes_loaded: "Changes loaded in game",
            error_deleting_changes: "Error deleting changes",
            no_changes_loaded: "No changes loaded",
            upload: "Upload",
            error_uploading_changes: "Error uploading changes",
            delete_changes_confirm: "Are you sure you want to delete saves?",
            no_changes_to_save: "No changes to save",
            offscreen_canvas: "Background rendering",
            special_keys: "Special keys",
            create_server: "Creating server",
            connect_to_network: "Connecting to network",
            lookup_address: "Looking up address",
            unable_to_connect_to_network: "Unable to connect to network"
        },
        pt: {
            click_to_lock: "Clique para capturar o mouse",
            use_esc_key_to_unlock: "Use `Esc` para desbloquear",
            use_slider_to_change_sensitivity: "Use o slider à esquerda para alterar a sensibilidade",
            current_sensitivity: "Sensibilidade atual",
            hello: "Olá",
            hello_guest: "Olá, convidado!",
            play: "Iniciar",
            system_cursor: "Cursor do sistema",
            mobile_controls: "Controles móveis",
            mirrored_controls: "Controles espelhados",
            scale_controls: "Escalar controles",
            enter_name_of_drive: "Digite o nome da unidade",
            ws_outdated: "Você precisa atualizar o aplicativo DOS Browser",
            update: "Atualizar",
            preloading_sockdrive: "Carregando",
            filter: "Filtrar",
            add: "Adicionar",
            logout: "Sair",
            features: "Recursos",
            premium: "Assinatura",
            buy: "Comprar",
            experimental_features: "Acesso a todos os recursos experimentais",
            cloud_saves: "Salvamentos em nuvem",
            writeable_fat32: "FAT32 gravável",
            net_no_limits: "Alterar a região da rede",
            unlock_options: "Desbloquear todas as opções de configuração",
            error: "Oops... Algo deu errado...",
            consult_logs: "Por favor, verifique os logs do navegador",
            bundle_loading: "Carregando pacote",
            bundle_config: "Lendo configuração",
            try_free: "dias grátis",
            upload_file: "Selecione um arquivo jsdos/zip para iniciar...",
            emulation_backend: "Emulador",
            render_backend: "Renderização",
            render_aspect: "Aspecto",
            worker: "Thread de trabalho",
            mouse_sensitivity: "Sensibilidade do mouse...",
            mouse_lock: "Capturar mouse",
            volume: "Volume",
            pause: "Pausar",
            dosboxconf_template: "Modelo dosbox.conf:",
            preview: "Pré-visualizar",
            continue: "Continuar",
            skip: "Pular",
            loading: "Carregando",
            extract_loading: "Extraindo arquivo",
            extract_long_time: "Pode levar algum tempo, por favor, seja paciente...",
            theme: "Tema",
            create_empty: "Criar pacote vazio",
            uploading_file: "Enviando arquivo",
            fs_restart: "Você deseja reconstruir o pacote usando este sistema de arquivos?",
            please_wait: "Por favor, aguarde",
            making_bundle: "Criando pacote",
            size: "Tamanho",
            room: "Sala",
            server: "Servidor",
            load_by_url: "Carregar por URL",
            enter_url: "Digite a URL",
            load: "Carregar",
            stored: "Armazenado",
            delete: "Excluir",
            editor: "Editor",
            download: "Download",
            changes: "Salvamentos",
            loading_saves: "Carregando salvamentos",
            success: "Sucesso",
            success_save: "Salvo na nuvem",
            warn_save_no_account: "Salvo no navegador (você não está conectado)",
            warn_save_no_premium: "Salvo no navegador (sem assinatura)",
            warn_save_big_file: "Salvo no navegador (grande arquivo)",
            unable_to_save: "Não foi possível salvar",
            not_premium: "Assine",
            copy_net_link: "Compartilhe este link para se conectar",
            copied: "Copiado",
            image_rendering: "Renderização de imagem",
            fix: "Corrigir",
            close: "Fechar",
            cancle: "Cancelar",
            manage: "Gerenciar",
            unable_to_cancle_subscription: "Não foi possível cancelar a assinatura",
            subscription_cancelled: "Assinatura cancelada",
            hardware: "Aceleração de hardware",
            no_cloud_access: "Para usar o armazenamento em nuvem, insira",
            no_cloud_access2: "abaixo",
            no_cloud_access3: "Sem assinatura, seu progresso será salvo localmente no navegador e pode ser perdido",
            key: "sua chave",
            load_archive: "Carregar arquivo",
            sockdrives: "Imagens de disco (sockdrive)",
            confirm_save: "Você deseja salvar o progresso?",
            save: "Salvar",
            emulation_ended: "Emulação terminada",
            saving_game: "Salvando jogo...",
            sockdrive_save_in_the_middle: "Win9x é mais seguro salvar após desligar o sistema",
            changes_loaded: "Alterações carregadas no jogo",
            error_deleting_changes: "Erro ao deletar alterações",
            no_changes_loaded: "Nenhuma alteração carregada",
            upload: "Carregar",
            error_uploading_changes: "Erro ao carregar alterações",
            delete_changes_confirm: "Tem certeza que deseja deletar os salvamentos?",
            no_changes_to_save: "Nenhuma alteração para salvar",
            offscreen_canvas: "Renderização de fundo",
            special_keys: "Teclas especiais",
            create_server: "Criando servidor",
            connect_to_network: "Conectando à rede",
            lookup_address: "Procurando endereço",
            unable_to_connect_to_network: "Não foi possível conectar à rede"
        },
        ro: {
            click_to_lock: "Faceți clic pentru a captura mouse-ul",
            use_esc_key_to_unlock: "Folosește `Esc` pentru a debloca",
            use_slider_to_change_sensitivity: "Folosește cursorul din stânga pentru a schimba sensibilitatea",
            current_sensitivity: "Sensibilitatea în prezent",
            hello: "Salutare",
            hello_guest: "Salutare, oaspete!",
            play: "Pornește",
            system_cursor: "Cursorul sistemului",
            mobile_controls: "Comenzi mobile",
            mirrored_controls: "Comenzi oglindă",
            scale_controls: "Controale de scalare",
            enter_name_of_drive: "Introduceți numele unității",
            ws_outdated: "Trebuie să actualizați aplicația de browser DOS",
            update: "Actualizare",
            preloading_sockdrive: "Se încarcă (o dată)",
            filter: "Filtru",
            add: "Adaugă",
            logout: "Deconectare",
            features: "Caracteristici",
            premium: "Abonament",
            buy: "Cumpără",
            experimental_features: "Acces la toate funcțiile experimentale",
            cloud_saves: "Salvează în cloud",
            writeable_fat32: "FAT32 inscriptibil",
            net_no_limits: "Schimbați regiunea rețelei",
            unlock_options: "Deblocați toate opțiunile de configurare",
            error: "Ups... Ceva nu a mers bine...",
            consult_logs: "Vă rugăm să verificați jurnalele browserului",
            bundle_loading: "Pachetul se încarcă",
            bundle_config: "Citirea configurației",
            try_free: "zile gratuite",
            upload_file: "Selectați fișierul jsdos/zip pentru a începe...",
            emulation_backend: "Emulare",
            render_backend: "Randează",
            render_aspect: "Aspect",
            worker: "Fir de lucru",
            mouse_sensitivity: "Senzor mouse...",
            mouse_lock: "Captură mouse",
            volume: "Volum",
            pause: "Pauză",
            dosboxconf_template: "Șablon dosbox.conf:",
            preview: "Previzualizare",
            continue: "Continuați",
            skip: "Sari peste",
            loading: "Se încarcă",
            extract_loading: "Despachetarea arhivei",
            extract_long_time: "Poate dura mult timp, vă rog să aveți răbdare...",
            theme: "Temă",
            create_empty: "Creați un pachet gol",
            uploading_file: "Se încarcă fișierul",
            fs_restart: "Vrei să reconstruiești pachetul folosind acest fs?",
            please_wait: "Va rugăm așteptați",
            making_bundle: "Se creează pachetul",
            size: "Dimensiune",
            room: "Cameră",
            server: "Server",
            load_by_url: "Încărcare după URL",
            enter_url: "Introduceți adresa URL",
            load: "Încarcă",
            stored: "Stocat",
            delete: "Şterge",
            editor: "Editor",
            download: "Descărcare",
            changes: "Salvări",
            loading_saves: "Se încarcă salvările",
            success: "Succes",
            success_save: "Salvat în cloud",
            warn_save_no_account: "Salvat în browser (neconectat)",
            warn_save_no_premium: "Salvat în browser (fără abonament)",
            warn_save_big_file: "Salvat în browser (fișier mare)",
            unable_to_save: "Nu se poate salva",
            not_premium: "Abonează-te",
            copy_net_link: "Distribuiți acest link pentru a vă conecta",
            copied: "Copiat",
            image_rendering: "Redarea imaginilor",
            fix: "Reparare",
            close: "Închide",
            cancle: "Anulează",
            manage: "Gestionează",
            unable_to_cancle_subscription: "Nu se poate anula abonamentul",
            subscription_cancelled: "Abonament anulat",
            hardware: "Accelerare hardware",
            no_cloud_access: "Pentru a activa salvările în cloud, introduceți",
            no_cloud_access2: "dedesubt",
            no_cloud_access3: "Fără un abonament, progresul dvs. va fi salvat doar local în browser și se poate pierde.",
            key: "cheia ta",
            load_archive: "Încărcați arhiva",
            sockdrives: "Imagini de disc (unitate de tip sock)",
            confirm_save: "Vrei să salvezi progresul?",
            save: "Salvați",
            emulation_ended: "Emularea s-a încheiat",
            saving_game: "Se salvează jocul...",
            sockdrive_save_in_the_middle: "Este mai sigur să salvați fișierele în Win9x după închiderea sistemului.",
            changes_loaded: "Modificări încărcate în joc",
            error_deleting_changes: "Eroare la ștergerea modificărilor",
            no_changes_loaded: "Nicio modificare încărcată",
            upload: "Încărcați",
            error_uploading_changes: "Eroare la încărcarea modificărilor",
            delete_changes_confirm: "Sunteți sigur că doriți să ștergeți modificările?",
            no_changes_to_save: "Nu există modificări pentru a fi salvate",
            offscreen_canvas: "Renderizare în fundal",
            special_keys: "Teclă speciale",
            create_server: "Creare server",
            connect_to_network: "Conectare la rețea",
            lookup_address: "Căutare adresă",
            unable_to_connect_to_network: "Nu s-a putut conecta la rețea"
        }
    },
    Xs = navigator.language.startsWith("ru") ? "ru" : navigator.language.startsWith("pt") ? "pt" : navigator.language.startsWith("ro") ? "ro" : "en",
    Yu = {
        lang: Xs,
        keys: va[Xs]
    },
    ga = nt({
        name: "i18n",
        initialState: Yu,
        reducers: {
            setLang: (e, t) => {
                e.lang = t.payload, e.keys = va[t.payload]
            }
        }
    });

function ne() {
    const e = M(t => t.i18n.keys);
    return t => e[t] ?? t
}

function Qu(e) {
    return t => e.i18n.keys[t] ?? t
}
const _a = [{
        name: "7.xx",
        backend: "dosbox",
        contents: `[sdl]
autolock=false

fullscreen=false
fulldouble=false
fullresolution=original
windowresolution=original
output=surface
sensitivity=100
waitonerror=true
priority=higher,normal
mapperfile=mapper-jsdos.map
usescancodes=true
vsync=false
[dosbox]
machine=svga_s3

language=
captures=capture
memsize=16
[cpu]
core=auto
cputype=auto
cycles=auto

cycleup=10
cycledown=20
[mixer]
nosound=false
rate=44100

blocksize=1024
prebuffer=20

[render]
# frameskip: How many frames DOSBox skips before drawing one.
#    aspect: Do aspect correction, if your output method doesn't support scaling this can slow things down!.
#    scaler: Scaler used to enlarge/enhance low resolution modes.
#              If 'forced' is appended, then the scaler will be used even if the result might not be desired.
#            Possible values: none, normal2x, normal3x, advmame2x, advmame3x, advinterp2x, advinterp3x, hq2x, hq3x, 2xsai, super2xsai, supereagle, tv2x, tv3x, rgb2x, rgb3x, scan2x, scan3x.

frameskip=0
aspect=false
scaler=none

[midi]
#     mpu401: Type of MPU-401 to emulate.
#             Possible values: intelligent, uart, none.
# mididevice: Device that will receive the MIDI data from MPU-401.
#             Possible values: default, win32, alsa, oss, coreaudio, coremidi, none.
# midiconfig: Special configuration options for the device driver. This is usually the id of the device you want to use.
#               See the README/Manual for more details.

mpu401=intelligent
mididevice=default
midiconfig=

[sblaster]
#  sbtype: Type of Soundblaster to emulate. gb is Gameblaster.
#          Possible values: sb1, sb2, sbpro1, sbpro2, sb16, gb, none.
#  sbbase: The IO address of the soundblaster.
#          Possible values: 220, 240, 260, 280, 2a0, 2c0, 2e0, 300.
#     irq: The IRQ number of the soundblaster.
#          Possible values: 7, 5, 3, 9, 10, 11, 12.
#     dma: The DMA number of the soundblaster.
#          Possible values: 1, 5, 0, 3, 6, 7.
#    hdma: The High DMA number of the soundblaster.
#          Possible values: 1, 5, 0, 3, 6, 7.
# sbmixer: Allow the soundblaster mixer to modify the DOSBox mixer.
# oplmode: Type of OPL emulation. On 'auto' the mode is determined by sblaster type. All OPL modes are Adlib-compatible, except for 'cms'.
#          Possible values: auto, cms, opl2, dualopl2, opl3, none.
#  oplemu: Provider for the OPL emulation. compat might provide better quality (see oplrate as well).
#          Possible values: default, compat, fast.
# oplrate: Sample rate of OPL music emulation. Use 49716 for highest quality (set the mixer rate accordingly).
#          Possible values: 44100, 49716, 48000, 32000, 22050, 16000, 11025, 8000.

sbtype=sb16
sbbase=220
irq=7
dma=1
hdma=5
sbmixer=true
oplmode=auto
oplemu=default
oplrate=44100

[gus]
#      gus: Enable the Gravis Ultrasound emulation.
#  gusrate: Sample rate of Ultrasound emulation.
#           Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#  gusbase: The IO base address of the Gravis Ultrasound.
#           Possible values: 240, 220, 260, 280, 2a0, 2c0, 2e0, 300.
#   gusirq: The IRQ number of the Gravis Ultrasound.
#           Possible values: 5, 3, 7, 9, 10, 11, 12.
#   gusdma: The DMA channel of the Gravis Ultrasound.
#           Possible values: 3, 0, 1, 5, 6, 7.
# ultradir: Path to Ultrasound directory. In this directory
#           there should be a MIDI directory that contains
#           the patch files for GUS playback. Patch sets used
#           with Timidity should work fine.

gus=false
gusrate=44100
gusbase=240
gusirq=5
gusdma=3
ultradir=C:\\ULTRASND

[speaker]
# pcspeaker: Enable PC-Speaker emulation.
#    pcrate: Sample rate of the PC-Speaker sound generation.
#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#     tandy: Enable Tandy Sound System emulation. For 'auto', emulation is present only if machine is set to 'tandy'.
#            Possible values: auto, on, off.
# tandyrate: Sample rate of the Tandy 3-Voice generation.
#            Possible values: 44100, 48000, 32000, 22050, 16000, 11025, 8000, 49716.
#    disney: Enable Disney Sound Source emulation. (Covox Voice Master and Speech Thing compatible).

pcspeaker=true
pcrate=44100
tandy=auto
tandyrate=44100
disney=true

[joystick]
# joysticktype: Type of joystick to emulate: auto (default), none,
#               2axis (supports two joysticks),
#               4axis (supports one joystick, first joystick used),
#               4axis_2 (supports one joystick, second joystick used),
#               fcs (Thrustmaster), ch (CH Flightstick).
#               none disables joystick emulation.
#               auto chooses emulation depending on real joystick(s).
#               (Remember to reset dosbox's mapperfile if you saved it earlier)
#               Possible values: auto, 2axis, 4axis, 4axis_2, fcs, ch, none.
#        timed: enable timed intervals for axis. Experiment with this option, if your joystick drifts (away).
#     autofire: continuously fires as long as you keep the button pressed.
#       swap34: swap the 3rd and the 4th axis. can be useful for certain joysticks.
#   buttonwrap: enable button wrapping at the number of emulated buttons.

joysticktype=auto
timed=true
autofire=false
swap34=false
buttonwrap=false

[serial]
# serial1: set type of device connected to com port.
#          Can be disabled, dummy, modem, nullmodem, directserial.
#          Additional parameters must be in the same line in the form of
#          parameter:value. Parameter for all types is irq (optional).
#          for directserial: realport (required), rxdelay (optional).
#                           (realport:COM1 realport:ttyS0).
#          for modem: listenport (optional).
#          for nullmodem: server, rxdelay, txdelay, telnet, usedtr,
#                         transparent, port, inhsocket (all optional).
#          Example: serial1=modem listenport:5000
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial2: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial3: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.
# serial4: see serial1
#          Possible values: dummy, disabled, modem, nullmodem, directserial.

serial1=dummy
serial2=dummy
serial3=disabled
serial4=disabled

[dos]
#            xms: Enable XMS support.
#            ems: Enable EMS support.
#            umb: Enable UMB support.
# keyboardlayout: Language code of the keyboard layout (or none).

xms=true
ems=true
umb=true
keyboardlayout=auto

[ipx]
# ipx: Enable ipx over UDP/IP emulation.

ipx=true
[autoexec]
echo off
mount c .
c:

type jsdos~1/readme.txt
echo on

# Generated using https://js-dos.com
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
`.replace(/\n/g, `\r
`)
    }, {
        name: "DOS 7.1",
        backend: "dosboxX",
        contents: `
[sdl]
autolock=false

[dosbox]
title=DOS 7.1
memsize=64

[dos]
ver=7.1
hard drive data rate limit=0
floppy drive data rate limit=0

[cpu]
cputype=pentium_mmx
core=auto

[sblaster]
sbtype=sb16vibra

[render]
scaler=none

[autoexec]
echo off

echo Please visit our website:
echo 
echo         _                __
echo        (_)____      ____/ /___  _____ _________  ____ ___
echo       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
echo      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
echo   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
echo  /___/
echo
echo type 'boot c:' to load DOS 7.1
echo on
# 
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
#
`.replace(/\n/g, `\r
`)
    }, {
        name: "Win 3.11",
        backend: "dosboxX",
        contents: `
[sdl]
autolock=false
mouse emulation=integration

[dosbox]
title=Win 3.11
memsize=256

[dos]
hard drive data rate limit=0
floppy drive data rate limit=0

[cpu]
cputype=pentium
core=auto
integration device=true

[pci]
voodoo=false

[sblaster]
sbtype=sb16vibra

[render]
scaler=none

[autoexec]
echo off

echo Please visit our website:
echo 
echo         _                __
echo        (_)____      ____/ /___  _____ _________  ____ ___
echo       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
echo      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
echo   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
echo  /___/
echo
echo type 'boot c:' to load Win 3.11
echo on
# 
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
#
`.replace(/\n/g, `\r
`)
    }, {
        name: "Win 95",
        backend: "dosboxX",
        contents: `
[sdl]
autolock=false
mouse_emulation=integration

[dosbox]
title=Windows 95
memsize=128

[video]
vmemsize=8
vesa modelist width limit=0
vesa modelist height limit=0

[dos]
ver=7.1
hard drive data rate limit=0
floppy drive data rate limit=0

[cpu]
cputype=pentium_mmx
core=auto
integration device=true

[sblaster]
sbtype=sb16vibra

[fdc, primary]
int13fakev86io=true

[ide, primary]
int13fakeio=true
int13fakev86io=true

[ide, secondary]
int13fakeio=true
int13fakev86io=true
cd-rom insertion delay=4000

[render]
scaler=none

[autoexec]
echo off

echo Please visit our website:
echo 
echo         _                __
echo        (_)____      ____/ /___  _____ _________  ____ ___
echo       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
echo      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
echo   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
echo  /___/
echo
echo type 'boot c:' to load windows 95
echo on
# 
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
#
`.replace(/\n/g, `\r
`)
    }, {
        name: "Win 98",
        backend: "dosboxX",
        contents: `
[sdl]
autolock=false
mouse_emulation=integration

[dosbox]
title=Windows 98
memsize=128

[video]
vmemsize=8
vesa modelist width limit=0
vesa modelist height limit=0

[dos]
ver=7.1
hard drive data rate limit=0
floppy drive data rate limit=0

[cpu]
cputype=pentium_mmx
core=auto
integration device=true

[sblaster]
sbtype=sb16vibra

[fdc, primary]
int13fakev86io=true

[ide, primary]
int13fakeio=true
int13fakev86io=true

[ide, secondary]
int13fakeio=true
int13fakev86io=true
cd-rom insertion delay=4000

[render]
scaler=none

[autoexec]
echo off

echo Please visit our website:
echo 
echo         _                __
echo        (_)____      ____/ /___  _____ _________  ____ ___
echo       / / ___/_____/ __  / __ \\/ ___// ___/ __ \\/ __ \`__ \\
echo      / (__  )_____/ /_/ / /_/ (__  )/ /__/ /_/ / / / / / /
echo   __/ /____/      \\__,_/\\____/____(_)___/\\____/_/ /_/ /_/
echo  /___/
echo
echo type 'boot c:' to load windows 98
echo on
# 
# █▀▀▀▀▀█ █  ▄▄▄▀▀█ █▀▀▀▀▀█
# █ ███ █ ██▄ █ ▀ ▄ █ ███ █
# █ ▀▀▀ █ ▄██ ▀ ▀▀█ █ ▀▀▀ █
# ▀▀▀▀▀▀▀ ▀ █▄▀▄▀ █ ▀▀▀▀▀▀▀
# █▀▄▄█▀▀▄▄ ▀ ▀█▄▄▄▄ ▀▄█▀█▀
# █▀ ▀ ▀▀▄ █▀ ▄ ▄▀▀▀▄ █▀█▄
# ▄ ▄▄ █▀▀▄ ▄▀▄▀▀█  ▀▀▄▀▀█▀
#   ▄▀▀█▀▀ █▀█▀█▀▀▄ ▀██▀█▄
# ▀▀▀ ▀ ▀ █▄█ ▀█▄▄█▀▀▀█▀▀
# █▀▀▀▀▀█ ▄▄▄ ▄ ▄ █ ▀ █▄▄▄▄
# █ ███ █ ▀█▀▀▄▀▀▄████▀▀█▄█
# █ ▀▀▀ █ ▄▀▀█▀█▀▄ ▀▀▄▄█▄█
# ▀▀▀▀▀▀▀ ▀   ▀▀ ▀  ▀   ▀▀▀
#
`.replace(/\n/g, `\r
`)
    }],
    Zu = {
        configChanged: !1,
        bundleConfig: null,
        errorMessage: null,
        fs: []
    },
    Cn = nt({
        name: "editor",
        initialState: Zu,
        reducers: {
            init: (e, t) => {
                t.payload === null ? (e.configChanged = !0, e.bundleConfig = {
                    dosboxConf: _a[0].contents,
                    jsdosConf: {
                        version: "js-dos-v8"
                    }
                }) : (e.configChanged = !1, e.bundleConfig = t.payload)
            },
            dosboxConf: (e, t) => {
                e.configChanged = !0, e.bundleConfig.dosboxConf = t.payload
            }
        }
    }),
    Ju = 1024,
    Gs = "@",
    Ys = ".";
class ed {
    length = 0;
    storage = {};
    setItem(t, n) {
        this.storage[t] = n, this.length = Object.keys(this.storage).length
    }
    getItem(t) {
        const n = this.storage[t];
        return n === void 0 ? null : n
    }
    removeItem(t) {
        delete this.storage[t], this.length = Object.keys(this.storage).length
    }
    key(t) {
        const n = Object.keys(this.storage);
        return n[t] === void 0 ? null : n[t]
    }
    clear() {
        this.length = 0, this.storage = {}
    }
}
class td {
    backend;
    length;
    prefix;
    constructor(t, n) {
        this.prefix = n;
        try {
            this.backend = t || localStorage, this.testBackend()
        } catch {
            this.backend = new ed
        }
        this.length = this.backend.length, typeof this.backend.sync == "function" && (this.sync = o => {
            this.backend.sync(o)
        })
    }
    testBackend() {
        const t = this.prefix + ".test.record",
            n = "123";
        this.backend.setItem(t, n);
        const o = this.backend.getItem(t);
        if (this.backend.removeItem(t), !(o === n && this.backend.getItem(t) === null)) throw new Error("Storage backend is not working properly")
    }
    setLocalStoragePrefix(t) {
        this.prefix = t
    }
    clear() {
        if (!this.backend.length) return;
        const t = [];
        for (let n = 0; n < this.backend.length; ++n) {
            const o = this.backend.key(n);
            o && o.startsWith(this.prefix) && t.push(o)
        }
        for (const n of t) this.backend.removeItem(n);
        this.length = this.backend.length
    }
    key(t) {
        return this.backend.key(t)
    }
    setItem(t, n) {
        if (!n || n.length === void 0 || n.length === 0) {
            this.writeStringToKey(t, "");
            return
        }
        let o = 0;
        for (; o < n.length;) {
            let r = n.substr(o, Ju);
            o += r.length, o < n.length && (r += Gs), this.writeStringToKey(t, r), t += Ys
        }
    }
    getItem(t) {
        let n = this.readStringFromKey(t);
        if (n === null) return null;
        if (n.length === 0) return n;
        for (; n[n.length - 1] === Gs;) {
            n = n.substr(0, n.length - 1), t += Ys;
            const o = this.readStringFromKey(t);
            n += o === null ? "" : o
        }
        return n
    }
    removeItem(t) {
        this.backend.removeItem(this.prefix + t), this.length = this.backend.length
    }
    writeStringToKey(t, n) {
        this.backend.setItem(this.prefix + t, n), this.length = this.backend.length
    }
    readStringFromKey(t) {
        return this.backend.getItem(this.prefix + t)
    }
}
const ie = new td(void 0, "jsdos.8."),
    nd = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
    od = {
        hidden: !1,
        frame: "none",
        frameXs: !1,
        window: "none",
        theme: ie.getItem("theme") ?? (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light",
        editor: !1,
        wideScreen: !0,
        fullScreen: !1,
        toast: null,
        toastIntent: "none",
        toastTimeoutId: 0,
        background: null,
        updateWsWarning: !1,
        canSave: !0,
        autoStart: !1,
        countDownStart: 0,
        autoSave: !1,
        kiosk: !1,
        documentHidden: document.hidden ?? !1,
        noCloud: !1,
        warnOnKey: !0,
        warnOnPremium: !1,
        softFullscreen: !1,
        haveQuickSave: !1,
        thinSidebar: !1,
        pointerLocked: !1,
        clickToLockModal: !0,
        modalText: null,
        modalTextLoading: !1
    },
    K = nt({
        name: "js-dos v8s",
        initialState: od,
        reducers: {
            theme: (e, t) => {
                ie.setItem("theme", t.payload), e.theme = t.payload
            },
            frameNone: e => {
                e.frame = "none", e.frameXs = !1
            },
            frameSettings: e => {
                e.frame = "settings", e.frameXs = !1
            },
            frameStats: e => {
                e.frame = "stats", e.frameXs = !1
            },
            frameConf: e => {
                e.frame = "editor-conf", e.frameXs = !1
            },
            frameFs: e => {
                e.frame = "editor-fs", e.frameXs = !1
            },
            framePreRun: e => {
                e.frame = "prerun", e.frameXs = !1
            },
            windowSelect: e => {
                e.window = "select", e.editor = !0
            },
            background: (e, t) => {
                e.background = t.payload
            },
            setEditor: (e, t) => {
                e.editor = t.payload
            },
            setWideScreen: (e, t) => {
                e.wideScreen = t.payload
            },
            setFullScreen: (e, t) => {
                e.fullScreen = t.payload, e.thinSidebar = t.payload
            },
            showToast: (e, t) => {
                e.toastTimeoutId !== 0 && clearInterval(e.toastTimeoutId), e.toast = t.payload.message, e.toastIntent = t.payload.intent ?? "none", t.payload.intent !== "panic" && (e.toastTimeoutId = setTimeout(() => {
                    t.asyncStore(n => n.dispatch(K.actions.hideToast()))
                }, t.payload.long ? 5e3 : 1500))
            },
            hideToast: e => {
                e.toast = null, e.toastTimeoutId = 0
            },
            updateWsWarning: (e, t) => {
                e.updateWsWarning = t.payload
            },
            autoStart: (e, t) => {
                e.autoStart = t.payload
            },
            countDownStart: (e, t) => {
                e.countDownStart = t.payload, e.autoStart = !0
            },
            autoSave: (e, t) => {
                e.autoSave = t.payload
            },
            kiosk: (e, t) => {
                e.kiosk = t.payload
            },
            documentHidden: (e, t) => {
                e.documentHidden = t.payload
            },
            noCloud: (e, t) => {
                e.noCloud = t.payload
            },
            hidden: (e, t) => {
                e.hidden = t.payload
            },
            warnOnKey: (e, t) => {
                e.warnOnKey = t.payload, e.frame = "none"
            },
            warnOnPremium: (e, t) => {
                e.warnOnKey = t.payload, e.frame = "none"
            },
            softFullscreen: (e, t) => {
                e.softFullscreen = t.payload
            },
            canSave: (e, t) => {
                e.canSave = t.payload
            },
            setHaveQuickSave: (e, t) => {
                e.haveQuickSave = t.payload
            },
            thinSidebar: (e, t) => {
                e.thinSidebar = t.payload
            },
            pointerLocked: (e, t) => {
                e.pointerLocked = t.payload
            },
            clickToLockModal: (e, t) => {
                e.clickToLockModal = t.payload
            },
            modalText: (e, t) => {
                e.modalText = t.payload.text, e.modalTextLoading = t.payload.loading ?? !0
            },
            modalTextClear: e => {
                e.modalText = null, e.modalTextLoading = !1
            }
        },
        extraReducers: e => {
            e.addCase(we("dos/bndLoad"), (t, n) => {
                t.window = "loading"
            }).addCase(we("editor/extract"), (t, n) => {
                t.window = "loading"
            }).addCase(we("editor/ready"), (t, n) => {
                t.window = "prerun"
            }).addCase(we("dos/bndReady"), (t, n) => {
                t.autoStart && t.countDownStart === 0 ? n.asyncStore(o => {
                    o.dispatch(I.actions.bndPlay({}))
                }) : t.window = "prerun"
            }).addCase(we("dos/bndPlay"), (t, n) => {
                t.window = "run", t.frame = "none"
            }).addMatcher(t => t.type.startsWith("dos/") && t.type.endsWith("Error"), (t, n) => {
                t.window = "error"
            })
        }
    }),
    rd = "doszone-uploads",
    sd = "https://storage.yandexcloud.net",
    id = "dzapi",
    Jo = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net",
    ad = Jo + "/presign-put",
    cd = Jo + "/presign-delete",
    ld = "https://cloud.js-dos.com",
    ud = ld + "/token/get",
    dd = "wss://net.js-dos.com:444",
    fd = "mp",
    pd = "32r09j23f",
    hd = "https://br.cdn.dos.zone",
    Qs = 5;

function ya(e) {
    return e && (e.endsWith("/b4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos") || e.endsWith("/dhry2.jsdos"))
}
const Eo = "cached.jsdos.account",
    md = (() => {
        const e = ie.getItem(Eo);
        if (e) {
            const t = JSON.parse(e);
            if (t.email && t.email.length > 0 && t.token && t.token.length === 5) return t
        }
        return null
    })(),
    vd = {
        account: md
    },
    Rt = nt({
        name: "auth",
        initialState: vd,
        reducers: {
            setAccount: (e, t) => {
                const n = t.payload;
                n !== null ? ie.setItem(Eo, JSON.stringify(n)) : ie.removeItem(Eo), e.account = n
            }
        }
    });
async function Oo(e) {
    if (!e || e.length !== 5) return {
        token: e,
        account: null
    };
    for (let n = 0; n < e.length; ++n) {
        const o = e.charCodeAt(n);
        if (!(o > 96 && o < 123)) return {
            token: e,
            account: null
        }
    }
    const t = await (await fetch(ud + "?id=" + e)).json();
    return delete t.success, {
        token: e,
        account: t.email ? t : null
    }
}
const gd = {
        recived: 0,
        total: 0,
        changedRecived: 0,
        changedTotal: 0,
        ready: !1
    },
    Lt = nt({
        name: "storage",
        initialState: gd,
        reducers: {
            reset: e => {
                e.recived = -1, e.total = 0, e.changedRecived = 0, e.changedTotal = 0, e.ready = !1
            },
            progress: (e, t) => {
                e.recived = t.payload[0], e.total = t.payload[1]
            },
            changedProgress: (e, t) => {
                e.changedRecived = t.payload[0], e.changedTotal = t.payload[1]
            },
            ready: e => {
                e.ready = !0
            }
        }
    });
class er {
    close() {}
    put(t, n) {
        return Promise.resolve()
    }
    get(t, n) {
        return n !== void 0 ? Promise.resolve(n) : Promise.reject(new Error("Cache is not supported on this host"))
    }
    del(t) {
        return Promise.resolve()
    }
    keys() {
        return Promise.resolve([])
    }
    forEach(t) {
        return Promise.resolve()
    }
}
class ba {
    storeName = "files";
    indexedDB;
    db = null;
    constructor(t, n, o, r, s) {
        if (this.storeName = n, this.indexedDB = typeof window > "u" ? void 0 : window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, !this.indexedDB) {
            s("Indexed db is not supported on this host");
            return
        }
        try {
            const f = this.indexedDB.open(t, 1);
            f.onerror = a => {
                s("Can't open cache database: " + f.error?.message)
            }, f.onsuccess = a => {
                this.db = f.result, r(this)
            }, f.onupgradeneeded = a => {
                try {
                    this.db = f.result, this.db.onerror = c => {
                        s("Can't upgrade cache database")
                    };
                    for (const [c, i, d] of o) this.db.createObjectStore(c).createIndex(i, "", {
                        unique: d,
                        multiEntry: !1
                    })
                } catch {
                    s("Can't upgrade cache database")
                }
            }
        } catch (f) {
            s("Can't open cache database: " + f.message)
        }
    }
    async resultToUint8Array(t) {
        return t instanceof Blob ? new Uint8Array(await t.arrayBuffer()) : new Uint8Array(t)
    }
    close() {
        this.db !== null && (this.db.close(), this.db = null)
    }
    put(t, n) {
        return new Promise((o, r) => {
            if (this.db === null) {
                o();
                return
            }
            const f = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(new Blob([n.buffer]), t);
            f.onerror = a => {
                r(new Error("Can't put key '" + t + "'")), console.error(a)
            }, f.onsuccess = () => o()
        })
    }
    del(t) {
        return new Promise((n, o) => {
            if (this.db === null) {
                n();
                return
            }
            const s = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).delete(t);
            s.onerror = () => o, s.onsuccess = () => n()
        })
    }
    get(t, n) {
        return new Promise((o, r) => {
            function s(c) {
                n === void 0 ? r(new Error(c)) : o(n)
            }
            if (this.db === null) {
                s("db is not initalized");
                return
            }
            const a = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).get(t);
            a.onerror = () => r(new Error("Can't read value for key '" + t + "'")), a.onsuccess = () => {
                a.result ? o(this.resultToUint8Array(a.result)) : s("Result is empty for key '" + t + "', result: " + a.result)
            }
        })
    }
    keys() {
        return new Promise((t, n) => {
            if (this.db === null) {
                t([]);
                return
            }
            const r = this.db.transaction(this.storeName, "readonly").objectStore(this.storeName).getAllKeys();
            r.onerror = n, r.onsuccess = s => {
                r.result ? t(r.result) : t([])
            }
        })
    }
    async forEach(t) {
        const n = await this.keys();
        for (const o of n) {
            const r = await this.get(o);
            r && t(o, r)
        }
    }
}

function wa() {
    return new Promise(e => {
        new ba("js-dos-cache (guest)", "files", [
            ["files", "key", !0]
        ], e, t => {
            console.error("Can't open IndexedDB cache", t), e(new er)
        })
    })
}

function xa(e) {
    return new Promise(t => {
        new ba("sockdrive (" + e + ")", "write", [
            ["raw", "range", !1],
            ["write", "sector", !1]
        ], t, n => {
            console.error("Can't open IndexedDB cache", n), t(new er)
        })
    })
}
let so = -1;

function ka() {
    return so += 1, {
        storeUid: so,
        slice: nt({
            name: "init",
            initialState: {
                uid: so
            },
            reducers: {}
        })
    }
}
ka().slice;
const _d = e => t => n => {
        function o(s) {
            setTimeout(() => s(e), 4)
        }
        const r = Object.assign({}, n, {
            asyncStore: o
        });
        t(r)
    },
    Mo = {};

function yd(e) {
    return {
        root: null,
        loadedBundle: null,
        ci: null,
        cache: new er,
        options: e,
        layers: null,
        gl: null
    }
}

function bd(e, t) {
    const {
        storeUid: n,
        slice: o
    } = ka(), r = Fu({
        reducer: {
            init: o.reducer,
            i18n: ga.reducer,
            auth: Rt.reducer,
            ui: K.reducer,
            dos: I.reducer,
            storage: Lt.reducer,
            editor: Cn.reducer
        },
        middleware: s => {
            const f = s();
            return f.push(_d), f
        }
    });
    return Mo[n] = e, r
}

function Se(e) {
    return typeof e.getState == "function" ? Mo[e.getState().init.uid] : Mo[e.init.uid]
}

function ge() {
    return Se(De())
}

function Ut(e, t, n) {
    e.options.onEvent && setTimeout(() => {
        e.options.onEvent?.(t, n)
    }, 4)
}

function Fe(e) {
    return e.getState()
}
const wd = ["dosbox", "dosboxX"],
    xd = ["webgl", "canvas"],
    kd = ["AsIs", "1/1", "5/4", "4/3", "16/10", "16/9", "Fit"],
    Ca = 65535,
    Cd = ["none", "all", "default"],
    Sd = ["pixelated", "smooth"],
    Pd = {
        step: "emu-init",
        emuVersion: "-",
        error: null,
        bundle: null,
        config: {},
        worker: ie.getItem("worker") !== "false",
        backend: ie.getItem("backend") ?? "dosbox",
        backendLocked: !1,
        backendHardware: ie.getItem("backendHardware") !== "false",
        renderBackend: ie.getItem("renderBackend") ?? "webgl",
        renderAspect: ie.getItem("renderAspect") ?? "AsIs",
        volume: Number.parseFloat(ie.getItem("volume") ?? "1.0"),
        mobileControls: !1,
        mirroredControls: ie.getItem("mirroredControls") === "true",
        scaleControls: Number.parseFloat(ie.getItem("scaleControls") ?? "0.2"),
        mouseSensitivity: Number.parseFloat(ie.getItem("mouse_sensitivity") ?? "0.5"),
        mouseCapture: !1,
        paused: !1,
        stats: {
            glfx: !1,
            offscreenCanvas: !1,
            cyclesPerMs: 0,
            nonSkippableSleepPreSec: 0,
            sleepPerSec: 0,
            sleepTimePerSec: 0,
            framePerSec: 0,
            soundPerSec: 0,
            msgSentPerSec: 0,
            msgRecvPerSec: 0,
            netRecv: 0,
            netSent: 0,
            driveIo: []
        },
        ipx: {
            address: "",
            status: "disconnected"
        },
        ci: !1,
        ciStartedAt: 0,
        imageRendering: ie.getItem("imageRendering") ?? "pixelated",
        softKeyboard: !1,
        softKeyboardLayout: [
            [
                ["{esc} {f1} {f2} {f3} {f4}", "0 1 2 3 4", "5 6 7 8 9", "{ } ( ) {shift}", "{layout} {ctrl} {alt} {space}"],
                ["{f5} {f6} {f7} {f8}", "{pgup} {pgdown} {bksp}", "", "{up}", "{left} {down} {right}"],
                ["{f9} {f10} {f11} {f12}", "{del} {kp7} {kp8} {kp9}", "{tab} {kp4} {kp5} {kp6}", "- {kp1} {kp2} {kp3}", "+ {kp0} . {enter}"]
            ],
            [
                ["{esc} ` 1 2 3 4 5 6 7 8 9 0 ( ) - = {bksp} {enter}", "{tab} q w e r t y u i o p { } \\ [ ] {up}", "{shift} {left} {right} a s d f g h j k l : ; ' [ {down}", "{layout} {symbols} {alt} {ctrl} z x c v b n m , . / ] {space}"]
            ]
        ],
        softKeyboardSymbols: [{
            "{esc}": "␛",
            "{bksp}": "⌫",
            "{enter}": "↵",
            "{up}": "↑",
            "{down}": "↓",
            "{left}": "←",
            "{right}": "→",
            "{shift}": "⇑",
            "{layout}": "⎘",
            "{pgup}": "PgUp",
            "{pgdown}": "PgDown",
            "{kp7}": "↖",
            "{kp8}": "↑",
            "{kp9}": "↗",
            "{kp5}": "5",
            "{kp4}": "←",
            "{kp6}": "→",
            "{kp1}": "↙",
            "{kp2}": "↓",
            "{kp3}": "↘",
            "{kp0}": "0",
            "{symbols}": "En/Ru"
        }, {
            q: "й",
            w: "ц",
            e: "у",
            r: "к",
            t: "е",
            y: "н",
            u: "г",
            i: "ш",
            o: "щ",
            p: "з",
            "{": "х",
            "}": "ъ",
            a: "ф",
            s: "ы",
            d: "в",
            f: "а",
            g: "п",
            h: "р",
            j: "о",
            k: "л",
            l: "д",
            ";": "ж",
            "'": "э",
            z: "я",
            x: "ч",
            c: "с",
            v: "м",
            b: "и",
            n: "т",
            m: "ь",
            ",": "б",
            ".": "ю"
        }],
        softKeyboardActiveSymbols: 0,
        softKeyboardActiveLayout: 0,
        noCursor: !1,
        offscreenCanvas: !1,
        sockdrivePreload: "default",
        startIpxServer: !1,
        connectIpxAddress: null
    },
    I = nt({
        name: "dos",
        initialState: Pd,
        reducers: {
            emuReady: (e, t) => {
                e.step = "emu-ready", e.emuVersion = t.payload
            },
            emuError: (e, t) => {
                e.step = "emu-error", e.error = t.payload ?? "Unexpeceted error"
            },
            bndLoad: (e, t) => {
                e.step = "bnd-load", e.bundle = t.payload
            },
            bndError: (e, t) => {
                e.step = "bnd-error", e.error = t.payload ?? "Unexpeceted error"
            },
            bndConfig: e => {
                e.step = "bnd-config"
            },
            bndReady: (e, t) => {
                e.step = "bnd-ready", e.config = t.payload
            },
            bndPlay: (e, t) => {
                e.step = "bnd-play", t.asyncStore(n => {
                    Ut(Se(n), "bnd-play")
                })
            },
            dosWorker: (e, t) => {
                e.worker = t.payload, ie.setItem("worker", e.worker ? "true" : "false")
            },
            dosBackend: (e, t) => {
                e.backend = t.payload
            },
            dosBackendLocked: (e, t) => {
                e.backendLocked = t.payload
            },
            dosBackendHardware: (e, t) => {
                e.backendHardware = t.payload, ie.setItem("backendHardware", e.backendHardware ? "true" : "false")
            },
            renderBackend: (e, t) => {
                e.renderBackend = t.payload, ie.setItem("renderBackend", e.renderBackend)
            },
            renderAspect: (e, t) => {
                e.renderAspect = t.payload, ie.setItem("renderAspect", e.renderAspect)
            },
            imageRendering: (e, t) => {
                e.imageRendering = t.payload, ie.setItem("imageRendering", e.imageRendering)
            },
            volume: (e, t) => {
                e.volume = t.payload, ie.setItem("volume", e.volume + "")
            },
            mouseSensitivity: (e, t) => {
                e.mouseSensitivity = t.payload, ie.setItem("mouse_sensitivity", e.mouseSensitivity + "")
            },
            mouseCapture: (e, t) => {
                e.mouseCapture = t.payload
            },
            paused: (e, t) => {
                e.paused = t.payload
            },
            stats: (e, t) => {
                e.stats = t.payload
            },
            ci: (e, t) => {
                e.ci = t.payload, t.payload && (e.ciStartedAt = Date.now())
            },
            connectIpx: (e, t) => {
                if (e.ipx.status === "connected") throw new Error("Already connected");
                if (!e.ci) throw new Error("DOS is not started");
                const {
                    room: n,
                    address: o
                } = t.payload;
                e.ipx.status = "connecting", t.asyncStore(r => {
                    const s = Se(r);
                    if (!s.ci) throw new Error("DOS is not started");
                    const f = o.endsWith("/") ? o.substring(0, o.length - 1) : o;
                    s.ci.networkConnect(0, f + ":1900/ipx/" + n.replaceAll("@", "_")).then(() => {
                        r.dispatch(I.actions.statusIpx("connected"))
                    }).catch(a => {
                        r.dispatch(I.actions.statusIpx("error")), console.error(a)
                    })
                })
            },
            statusIpx: (e, t) => {
                e.ipx.status = t.payload
            },
            disconnectIpx: (e, t) => {
                e.ipx.status = "disconnected", t.asyncStore(n => {
                    Se(n).ci?.networkDisconnect(0)
                })
            },
            setIpxAddress: (e, t) => {
                e.ipx.address = t.payload
            },
            mobileControls: (e, t) => {
                e.mobileControls = t.payload
            },
            mirroredControls: (e, t) => {
                e.mirroredControls = t.payload, ie.setItem("mirroredControls", t.payload ? "true" : "false")
            },
            scaleControls: (e, t) => {
                e.scaleControls = t.payload, ie.setItem("scaleControls", e.scaleControls + "")
            },
            softKeyboard: (e, t) => {
                e.softKeyboard = t.payload
            },
            softKeyboardLayout: (e, t) => {
                t.payload.length > 0 && Array.isArray(t.payload[0]) ? e.softKeyboardLayout = t.payload : e.softKeyboardLayout = [
                    [t.payload]
                ]
            },
            softKeyboardSymbols: (e, t) => {
                e.softKeyboardSymbols = t.payload
            },
            softKeyboardActiveSymbols: (e, t) => {
                e.softKeyboardActiveSymbols = t.payload
            },
            softKeyboardActiveLayout: (e, t) => {
                e.softKeyboardActiveLayout = t.payload
            },
            noCursor: (e, t) => {
                e.noCursor = t.payload
            },
            offscreenCanvas: (e, t) => {
                e.offscreenCanvas = t.payload
            },
            sockdrivePreload: (e, t) => {
                e.sockdrivePreload = t.payload
            },
            startIpxServer: (e, t) => {
                e.startIpxServer = t.payload
            },
            connectIpxAddress: (e, t) => {
                e.connectIpxAddress = t.payload
            }
        }
    });
let Zs = !1;

function Ed(e, t, n) {
    e.dispatch(async o => {
        try {
            Zs || (await Od(t, n), Zs = !0), o(I.actions.emuReady(emulators.version))
        } catch (r) {
            console.error("Unable to init emulators.js", r), o(I.actions.emuError(r.message))
        }
    })
}

function Od(e, t) {
    return document.querySelector("#emulators-js") !== null ? Promise.resolve() : new Promise((o, r) => {
        const s = document.createElement("script");
        s.id = "emulators-js", s.async = !0, s.type = "text/javascript", s.src = e + "emulators.js" + t, s.onload = () => {
            emulators.pathPrefix = e, emulators.pathSuffix = t, o()
        }, s.onerror = f => {
            r(new Error("Unable to add emulators.js. Probably you should set the 'pathPrefix' option to point to the js-dos folder."))
        }, document.head.appendChild(s)
    })
}

function Md(e, t) {
    const n = t.lastIndexOf("/"),
        o = t.substring(n + 1);
    return "personal-v2/" + id + "/" + e + "/" + o
}

function Ad(e, t) {
    const n = Md(e, t);
    return sd + "/" + rd + "/" + n
}
async function Dd(e, t) {
    let n = await fetch(ad + "?bundleUrl=" + encodeURIComponent(e));
    const o = await n.json();
    if (!o.success) throw new Error("Unable to put personal bundle");
    const r = o.post,
        s = new FormData;
    if (Object.entries(r.fields).forEach(([f, a]) => {
            s.append(f, a)
        }), s.append("acl", "public-read"), s.append("file", new Blob([t])), n = await fetch(r.url, {
            method: "post",
            body: s
        }), n.status !== 200 && n.status !== 204) throw new Error("Unable to put changes: " + n.statusText)
}
async function gt(e, t, n, o = !1, r = null) {
    const s = t.ci,
        f = t.loadedBundle?.bundleChangesUrl;
    if (s === null && r === null || !f || !e.ui.canSave) return !1;
    const a = Qu(e),
        c = e.auth.account;
    try {
        n(K.actions.showToast({
            message: a("saving_game"),
            intent: "none",
            long: !0
        }));
        let i = !0;
        const d = c === null || c.email === null ? a("warn_save_no_account") : c.premium ? a("warn_save_big_file") : a("warn_save_no_premium");
        let l = !1;
        if (r === null) {
            const m = await s.persist(!0);
            r = jd(m), l = r !== m && !o
        }
        return r !== null && (l && n(K.actions.showToast({
            message: a("sockdrive_save_in_the_middle"),
            intent: "warning",
            long: !0
        })), tr(c, r) ? (await Dd(f, r), i = !1) : await t.cache.put(f, r)), r === null ? n(K.actions.showToast({
            message: a("no_changes_to_save"),
            intent: "warning",
            long: !0
        })) : i ? setTimeout(() => {
            n(K.actions.showToast({
                message: d,
                intent: "success",
                long: !0
            }))
        }, l ? 3e3 : 4) : n(K.actions.showToast({
            message: a("success_save"),
            intent: "success",
            long: !0
        })), !0
    } catch (i) {
        return n(K.actions.showToast({
            message: a("unable_to_save"),
            intent: "error",
            long: !0
        })), console.error(i), !1
    }
}

function tr(e, t) {
    return e ? e.email !== void 0 && (e.email === "dz.caiiiycuk@gmail.com" || e.premium === !0) && (t === null || t.length <= 30 * 1024 * 1024) : !1
}
async function Td(e) {
    return Sa(e, async (t, n) => {
        const o = await xa(t);
        await o.put(0, n), o.close()
    })
}
async function Sa(e, t) {
    const n = new TextDecoder;
    let o = 0;
    for (; o < e.length;) {
        const r = re(e, o);
        if (o += 4, r > 4096) return !1;
        const s = n.decode(e.slice(o, o + r));
        if (!(s.startsWith("http://") || s.startsWith("https://"))) return !1;
        o += r;
        const f = re(e, o);
        o += 4;
        const a = e.slice(o, o + f);
        o += f, await t(s, a)
    }
    return !0
}

function jd(e) {
    if (e === null || e instanceof Uint8Array) return e;
    const t = new TextEncoder,
        n = [];
    let o = 0;
    for (const {
            url: f,
            persist: a
        }
        of e.drives) n.push(t.encode(f)), o += a.length + n[n.length - 1].length + 8;
    const r = new Uint8Array(o);
    let s = 0;
    for (let f = 0; f < e.drives.length; f++) {
        const a = n[f],
            c = e.drives[f].persist;
        s = ce(r, a.length, s), r.set(a, s), s += a.length, s = ce(r, c.length, s), r.set(c, s), s += c.length
    }
    return r
}

function ce(e, t, n) {
    return e[n] = t & 255, e[n + 1] = (t & 65280) >> 8, e[n + 2] = (t & 16711680) >> 16, e[n + 3] = (t & 4278190080) >> 24, n + 4
}

function re(e, t) {
    return e[t] & 255 | e[t + 1] << 8 & 65280 | e[t + 2] << 16 & 16711680 | e[t + 3] << 24 & 4278190080
}

function Pa(e) {
    e.sendBackendEvent({
        type: "wc-trigger-event",
        event: "hand_savestate"
    })
}

function Ea(e) {
    e.sendBackendEvent({
        type: "wc-trigger-event",
        event: "hand_loadstate"
    })
}
async function Id(e, t, n) {
    if (!tr(t, null)) return await Se(n).cache.get(e).catch(() => null);
    try {
        const o = await fetch(e, {
            cache: "no-cache"
        });
        if (o.status !== 200) throw new Error("Resource not avalible (" + o.status + "): " + o.statusText);
        return await Oa(o, e, (r, s) => {
            n.dispatch(Lt.actions.changedProgress([r, s]))
        })
    } catch {
        return await Se(n).cache.get(e).catch(() => null)
    }
}
async function Rd(e, t) {
    try {
        if (!ya(e)) return await Se(t).cache.get(e)
    } catch {}
    t.dispatch(Lt.actions.reset());
    const n = await fetch(e, {
        cache: "no-store"
    });
    if (n.status !== 200) throw new Error("Resource not avalible (" + n.status + "): " + n.statusText);
    const o = await Oa(n, e, (r, s) => {
        t.dispatch(Lt.actions.progress([r, s]))
    });
    return Se(t).cache.put(e, o).catch(console.error), o
}
async function Oa(e, t, n) {
    const o = e.headers.get("Content-Length"),
        r = o === null ? 0 : Number.parseInt(o),
        s = e.body.getReader();
    let f = 0;
    const a = [];
    for (;;) {
        const {
            done: d,
            value: l
        } = await s.read();
        if (d) break;
        a.push(l), f += l.length;
        const m = Math.min(t.startsWith(hd) ? f / 2 : f, r);
        n(m, r)
    }
    let c = 0;
    const i = new Uint8Array(f);
    for (const d of a) i.set(d, c), c += d.length;
    return i
}
async function Ld(e, t, n) {
    await Ma("bundle.jsdos", Promise.resolve(e), null, null, n), n.dispatch(K.actions.frameConf())
}
async function Bd(e, t, n) {
    const o = Se(n),
        r = n.dispatch;
    o.loadedBundle = null, r(Cn.actions.init(e)), Aa(e, r), o.loadedBundle = {
        bundleUrl: null,
        bundleChangesUrl: null,
        bundle: e,
        bundleChanges: null,
        appliedBundleChanges: null,
        initFs: t
    }, r(I.actions.bndReady({}))
}
async function Bt(e, t) {
    return Ma(e, Rd(e, t), Nd(e, t), e, t)
}
async function Ma(e, t, n, o, r) {
    const s = Se(r),
        f = r.dispatch;
    s.loadedBundle = null, f(I.actions.bndLoad(e));
    const a = await t;
    f(Lt.actions.ready());
    const c = await n;
    f(I.actions.bndConfig());
    const i = await emulators.bundleConfig(a);
    f(Cn.actions.init(i)), i === null ? f(K.actions.frameConf()) : Aa(i, f), s.loadedBundle = {
        bundleUrl: o,
        bundleChangesUrl: c?.url ?? null,
        bundle: a,
        bundleChanges: c?.bundle ?? null,
        appliedBundleChanges: c?.appliedBundleChanges ?? null,
        initFs: s.options.initFs ?? null
    }, f(I.actions.bndReady({}))
}
async function Nd(e, t) {
    const n = Fe(t).auth.account,
        o = n?.email ?? "guest",
        r = Ad(o, e),
        s = await Id(r, n, t);
    return s !== null && s.length > 1 && !(s[0] === 80 && s[1] === 75) ? (await Td(s) || t.dispatch(K.actions.showToast({
        message: "Changes is not a zip file",
        intent: "error"
    })), {
        url: r,
        bundle: null,
        appliedBundleChanges: s
    }) : {
        url: r,
        bundle: s,
        appliedBundleChanges: null
    }
}

function Aa(e, t) {
    Da(e.dosboxConf, t), t(I.actions.mouseCapture(e.dosboxConf.indexOf("autolock=true") >= 0))
}

function Da(e, t) {
    (e.indexOf("sockdrive") >= 0 || e.indexOf(".qcow2") >= 0) && (t(I.actions.dosBackendLocked(!0)), t(I.actions.dosBackend("dosboxX")), t(I.actions.noCursor(!0)), t(K.actions.canSave(e.indexOf(".qcow2") === -1)))
}
var zd = 0;

function h(e, t, n, o, r, s) {
    var f, a, c = {};
    for (a in t) a == "ref" ? f = t[a] : c[a] = t[a];
    var i = {
        type: e,
        props: c,
        key: n,
        ref: f,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: --zd,
        __i: -1,
        __u: 0,
        __source: r,
        __self: s
    };
    if (typeof e == "function" && (f = e.defaultProps))
        for (a in f) c[a] === void 0 && (c[a] = f[a]);
    return U.vnode && U.vnode(i), i
}

function Fd() {
    const e = ne(),
        t = M(s => s.editor.bundleConfig),
        n = Q();

    function o(s) {
        r(s)
    }

    function r(s) {
        Da(s, n), n(I.actions.mouseCapture(s.indexOf("autolock=true") > 0)), n(Cn.actions.dosboxConf(s))
    }
    return t === null ? null : h("div", {
        class: "editor-conf-frame flex flex-col flex-grow w-full gap-2",
        children: [h("div", {
            class: "",
            children: e("dosboxconf_template")
        }), h("div", {
            class: "flex flex-row flex-wrap items-center gap-2",
            children: _a.map(({
                name: s,
                backend: f,
                contents: a
            }) => h("button", {
                class: "btn btn-sm",
                onClick: () => {
                    n(I.actions.dosBackend(f === "dosboxX" ? "dosboxX" : "dosbox"))
                },
                children: s
            }))
        }), h("textarea", {
            class: "flex-grow",
            value: t.dosboxConf,
            onChange: s => o(s.currentTarget?.value ?? "")
        })]
    })
}
var io = {
    exports: {}
};
var Js;

function Kd() {
    return Js || (Js = 1, (function(e, t) {
        (function(n, o) {
            e.exports = o($o)
        })(self, (n => (() => {
            var o = {
                    4184: (a, c) => {
                        var i;
                        (function() {
                            var d = {}.hasOwnProperty;

                            function l() {
                                for (var m = [], u = 0; u < arguments.length; u++) {
                                    var v = arguments[u];
                                    if (v) {
                                        var p = typeof v;
                                        if (p === "string" || p === "number") m.push(v);
                                        else if (Array.isArray(v)) {
                                            if (v.length) {
                                                var g = l.apply(null, v);
                                                g && m.push(g)
                                            }
                                        } else if (p === "object")
                                            if (v.toString === Object.prototype.toString)
                                                for (var _ in v) d.call(v, _) && v[_] && m.push(_);
                                            else m.push(v.toString())
                                    }
                                }
                                return m.join(" ")
                            }
                            a.exports ? (l.default = l, a.exports = l) : (i = (function() {
                                return l
                            }).apply(c, [])) === void 0 || (a.exports = i)
                        })()
                    },
                    8552: (a, c, i) => {
                        var d = i(852)(i(5639), "DataView");
                        a.exports = d
                    },
                    1989: (a, c, i) => {
                        var d = i(1789),
                            l = i(401),
                            m = i(7667),
                            u = i(1327),
                            v = i(1866);

                        function p(g) {
                            var _ = -1,
                                y = g == null ? 0 : g.length;
                            for (this.clear(); ++_ < y;) {
                                var b = g[_];
                                this.set(b[0], b[1])
                            }
                        }
                        p.prototype.clear = d, p.prototype.delete = l, p.prototype.get = m, p.prototype.has = u, p.prototype.set = v, a.exports = p
                    },
                    8407: (a, c, i) => {
                        var d = i(7040),
                            l = i(4125),
                            m = i(2117),
                            u = i(7518),
                            v = i(4705);

                        function p(g) {
                            var _ = -1,
                                y = g == null ? 0 : g.length;
                            for (this.clear(); ++_ < y;) {
                                var b = g[_];
                                this.set(b[0], b[1])
                            }
                        }
                        p.prototype.clear = d, p.prototype.delete = l, p.prototype.get = m, p.prototype.has = u, p.prototype.set = v, a.exports = p
                    },
                    7071: (a, c, i) => {
                        var d = i(852)(i(5639), "Map");
                        a.exports = d
                    },
                    3369: (a, c, i) => {
                        var d = i(4785),
                            l = i(1285),
                            m = i(6e3),
                            u = i(9916),
                            v = i(5265);

                        function p(g) {
                            var _ = -1,
                                y = g == null ? 0 : g.length;
                            for (this.clear(); ++_ < y;) {
                                var b = g[_];
                                this.set(b[0], b[1])
                            }
                        }
                        p.prototype.clear = d, p.prototype.delete = l, p.prototype.get = m, p.prototype.has = u, p.prototype.set = v, a.exports = p
                    },
                    3818: (a, c, i) => {
                        var d = i(852)(i(5639), "Promise");
                        a.exports = d
                    },
                    8525: (a, c, i) => {
                        var d = i(852)(i(5639), "Set");
                        a.exports = d
                    },
                    8668: (a, c, i) => {
                        var d = i(3369),
                            l = i(619),
                            m = i(2385);

                        function u(v) {
                            var p = -1,
                                g = v == null ? 0 : v.length;
                            for (this.__data__ = new d; ++p < g;) this.add(v[p])
                        }
                        u.prototype.add = u.prototype.push = l, u.prototype.has = m, a.exports = u
                    },
                    6384: (a, c, i) => {
                        var d = i(8407),
                            l = i(7465),
                            m = i(3779),
                            u = i(7599),
                            v = i(4758),
                            p = i(4309);

                        function g(_) {
                            var y = this.__data__ = new d(_);
                            this.size = y.size
                        }
                        g.prototype.clear = l, g.prototype.delete = m, g.prototype.get = u, g.prototype.has = v, g.prototype.set = p, a.exports = g
                    },
                    2705: (a, c, i) => {
                        var d = i(5639).Symbol;
                        a.exports = d
                    },
                    1149: (a, c, i) => {
                        var d = i(5639).Uint8Array;
                        a.exports = d
                    },
                    577: (a, c, i) => {
                        var d = i(852)(i(5639), "WeakMap");
                        a.exports = d
                    },
                    4963: a => {
                        a.exports = function(c, i) {
                            for (var d = -1, l = c == null ? 0 : c.length, m = 0, u = []; ++d < l;) {
                                var v = c[d];
                                i(v, d, c) && (u[m++] = v)
                            }
                            return u
                        }
                    },
                    4636: (a, c, i) => {
                        var d = i(2545),
                            l = i(5694),
                            m = i(1469),
                            u = i(4144),
                            v = i(5776),
                            p = i(6719),
                            g = Object.prototype.hasOwnProperty;
                        a.exports = function(_, y) {
                            var b = m(_),
                                C = !b && l(_),
                                x = !b && !C && u(_),
                                T = !b && !C && !x && p(_),
                                j = b || C || x || T,
                                N = j ? d(_.length, String) : [],
                                z = N.length;
                            for (var F in _) !y && !g.call(_, F) || j && (F == "length" || x && (F == "offset" || F == "parent") || T && (F == "buffer" || F == "byteLength" || F == "byteOffset") || v(F, z)) || N.push(F);
                            return N
                        }
                    },
                    2488: a => {
                        a.exports = function(c, i) {
                            for (var d = -1, l = i.length, m = c.length; ++d < l;) c[m + d] = i[d];
                            return c
                        }
                    },
                    2908: a => {
                        a.exports = function(c, i) {
                            for (var d = -1, l = c == null ? 0 : c.length; ++d < l;)
                                if (i(c[d], d, c)) return !0;
                            return !1
                        }
                    },
                    8470: (a, c, i) => {
                        var d = i(7813);
                        a.exports = function(l, m) {
                            for (var u = l.length; u--;)
                                if (d(l[u][0], m)) return u;
                            return -1
                        }
                    },
                    8866: (a, c, i) => {
                        var d = i(2488),
                            l = i(1469);
                        a.exports = function(m, u, v) {
                            var p = u(m);
                            return l(m) ? p : d(p, v(m))
                        }
                    },
                    4239: (a, c, i) => {
                        var d = i(2705),
                            l = i(9607),
                            m = i(2333),
                            u = d ? d.toStringTag : void 0;
                        a.exports = function(v) {
                            return v == null ? v === void 0 ? "[object Undefined]" : "[object Null]" : u && u in Object(v) ? l(v) : m(v)
                        }
                    },
                    9454: (a, c, i) => {
                        var d = i(4239),
                            l = i(7005);
                        a.exports = function(m) {
                            return l(m) && d(m) == "[object Arguments]"
                        }
                    },
                    939: (a, c, i) => {
                        var d = i(2492),
                            l = i(7005);
                        a.exports = function m(u, v, p, g, _) {
                            return u === v || (u == null || v == null || !l(u) && !l(v) ? u != u && v != v : d(u, v, p, g, m, _))
                        }
                    },
                    2492: (a, c, i) => {
                        var d = i(6384),
                            l = i(7114),
                            m = i(8351),
                            u = i(6096),
                            v = i(4160),
                            p = i(1469),
                            g = i(4144),
                            _ = i(6719),
                            y = "[object Arguments]",
                            b = "[object Array]",
                            C = "[object Object]",
                            x = Object.prototype.hasOwnProperty;
                        a.exports = function(T, j, N, z, F, R) {
                            var q = p(T),
                                Z = p(j),
                                G = q ? b : v(T),
                                Y = Z ? b : v(j),
                                se = (G = G == y ? C : G) == C,
                                ue = (Y = Y == y ? C : Y) == C,
                                L = G == Y;
                            if (L && g(T)) {
                                if (!g(j)) return !1;
                                q = !0, se = !1
                            }
                            if (L && !se) return R || (R = new d), q || _(T) ? l(T, j, N, z, F, R) : m(T, j, G, N, z, F, R);
                            if (!(1 & N)) {
                                var Re = se && x.call(T, "__wrapped__"),
                                    ye = ue && x.call(j, "__wrapped__");
                                if (Re || ye) {
                                    var Mn = Re ? T.value() : T,
                                        kt = ye ? j.value() : j;
                                    return R || (R = new d), F(Mn, kt, N, z, R)
                                }
                            }
                            return !!L && (R || (R = new d), u(T, j, N, z, F, R))
                        }
                    },
                    8458: (a, c, i) => {
                        var d = i(3560),
                            l = i(5346),
                            m = i(3218),
                            u = i(346),
                            v = /^\[object .+?Constructor\]$/,
                            p = Function.prototype,
                            g = Object.prototype,
                            _ = p.toString,
                            y = g.hasOwnProperty,
                            b = RegExp("^" + _.call(y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
                        a.exports = function(C) {
                            return !(!m(C) || l(C)) && (d(C) ? b : v).test(u(C))
                        }
                    },
                    8749: (a, c, i) => {
                        var d = i(4239),
                            l = i(1780),
                            m = i(7005),
                            u = {};
                        u["[object Float32Array]"] = u["[object Float64Array]"] = u["[object Int8Array]"] = u["[object Int16Array]"] = u["[object Int32Array]"] = u["[object Uint8Array]"] = u["[object Uint8ClampedArray]"] = u["[object Uint16Array]"] = u["[object Uint32Array]"] = !0, u["[object Arguments]"] = u["[object Array]"] = u["[object ArrayBuffer]"] = u["[object Boolean]"] = u["[object DataView]"] = u["[object Date]"] = u["[object Error]"] = u["[object Function]"] = u["[object Map]"] = u["[object Number]"] = u["[object Object]"] = u["[object RegExp]"] = u["[object Set]"] = u["[object String]"] = u["[object WeakMap]"] = !1, a.exports = function(v) {
                            return m(v) && l(v.length) && !!u[d(v)]
                        }
                    },
                    280: (a, c, i) => {
                        var d = i(5726),
                            l = i(6916),
                            m = Object.prototype.hasOwnProperty;
                        a.exports = function(u) {
                            if (!d(u)) return l(u);
                            var v = [];
                            for (var p in Object(u)) m.call(u, p) && p != "constructor" && v.push(p);
                            return v
                        }
                    },
                    2545: a => {
                        a.exports = function(c, i) {
                            for (var d = -1, l = Array(c); ++d < c;) l[d] = i(d);
                            return l
                        }
                    },
                    1717: a => {
                        a.exports = function(c) {
                            return function(i) {
                                return c(i)
                            }
                        }
                    },
                    4757: a => {
                        a.exports = function(c, i) {
                            return c.has(i)
                        }
                    },
                    4429: (a, c, i) => {
                        var d = i(5639)["__core-js_shared__"];
                        a.exports = d
                    },
                    7114: (a, c, i) => {
                        var d = i(8668),
                            l = i(2908),
                            m = i(4757);
                        a.exports = function(u, v, p, g, _, y) {
                            var b = 1 & p,
                                C = u.length,
                                x = v.length;
                            if (C != x && !(b && x > C)) return !1;
                            var T = y.get(u),
                                j = y.get(v);
                            if (T && j) return T == v && j == u;
                            var N = -1,
                                z = !0,
                                F = 2 & p ? new d : void 0;
                            for (y.set(u, v), y.set(v, u); ++N < C;) {
                                var R = u[N],
                                    q = v[N];
                                if (g) var Z = b ? g(q, R, N, v, u, y) : g(R, q, N, u, v, y);
                                if (Z !== void 0) {
                                    if (Z) continue;
                                    z = !1;
                                    break
                                }
                                if (F) {
                                    if (!l(v, (function(G, Y) {
                                            if (!m(F, Y) && (R === G || _(R, G, p, g, y))) return F.push(Y)
                                        }))) {
                                        z = !1;
                                        break
                                    }
                                } else if (R !== q && !_(R, q, p, g, y)) {
                                    z = !1;
                                    break
                                }
                            }
                            return y.delete(u), y.delete(v), z
                        }
                    },
                    8351: (a, c, i) => {
                        var d = i(2705),
                            l = i(1149),
                            m = i(7813),
                            u = i(7114),
                            v = i(8776),
                            p = i(1814),
                            g = d ? d.prototype : void 0,
                            _ = g ? g.valueOf : void 0;
                        a.exports = function(y, b, C, x, T, j, N) {
                            switch (C) {
                                case "[object DataView]":
                                    if (y.byteLength != b.byteLength || y.byteOffset != b.byteOffset) return !1;
                                    y = y.buffer, b = b.buffer;
                                case "[object ArrayBuffer]":
                                    return !(y.byteLength != b.byteLength || !j(new l(y), new l(b)));
                                case "[object Boolean]":
                                case "[object Date]":
                                case "[object Number]":
                                    return m(+y, +b);
                                case "[object Error]":
                                    return y.name == b.name && y.message == b.message;
                                case "[object RegExp]":
                                case "[object String]":
                                    return y == b + "";
                                case "[object Map]":
                                    var z = v;
                                case "[object Set]":
                                    var F = 1 & x;
                                    if (z || (z = p), y.size != b.size && !F) return !1;
                                    var R = N.get(y);
                                    if (R) return R == b;
                                    x |= 2, N.set(y, b);
                                    var q = u(z(y), z(b), x, T, j, N);
                                    return N.delete(y), q;
                                case "[object Symbol]":
                                    if (_) return _.call(y) == _.call(b)
                            }
                            return !1
                        }
                    },
                    6096: (a, c, i) => {
                        var d = i(8234),
                            l = Object.prototype.hasOwnProperty;
                        a.exports = function(m, u, v, p, g, _) {
                            var y = 1 & v,
                                b = d(m),
                                C = b.length;
                            if (C != d(u).length && !y) return !1;
                            for (var x = C; x--;) {
                                var T = b[x];
                                if (!(y ? T in u : l.call(u, T))) return !1
                            }
                            var j = _.get(m),
                                N = _.get(u);
                            if (j && N) return j == u && N == m;
                            var z = !0;
                            _.set(m, u), _.set(u, m);
                            for (var F = y; ++x < C;) {
                                var R = m[T = b[x]],
                                    q = u[T];
                                if (p) var Z = y ? p(q, R, T, u, m, _) : p(R, q, T, m, u, _);
                                if (!(Z === void 0 ? R === q || g(R, q, v, p, _) : Z)) {
                                    z = !1;
                                    break
                                }
                                F || (F = T == "constructor")
                            }
                            if (z && !F) {
                                var G = m.constructor,
                                    Y = u.constructor;
                                G == Y || !("constructor" in m) || !("constructor" in u) || typeof G == "function" && G instanceof G && typeof Y == "function" && Y instanceof Y || (z = !1)
                            }
                            return _.delete(m), _.delete(u), z
                        }
                    },
                    1957: (a, c, i) => {
                        var d = typeof i.g == "object" && i.g && i.g.Object === Object && i.g;
                        a.exports = d
                    },
                    8234: (a, c, i) => {
                        var d = i(8866),
                            l = i(9551),
                            m = i(3674);
                        a.exports = function(u) {
                            return d(u, m, l)
                        }
                    },
                    5050: (a, c, i) => {
                        var d = i(7019);
                        a.exports = function(l, m) {
                            var u = l.__data__;
                            return d(m) ? u[typeof m == "string" ? "string" : "hash"] : u.map
                        }
                    },
                    852: (a, c, i) => {
                        var d = i(8458),
                            l = i(7801);
                        a.exports = function(m, u) {
                            var v = l(m, u);
                            return d(v) ? v : void 0
                        }
                    },
                    9607: (a, c, i) => {
                        var d = i(2705),
                            l = Object.prototype,
                            m = l.hasOwnProperty,
                            u = l.toString,
                            v = d ? d.toStringTag : void 0;
                        a.exports = function(p) {
                            var g = m.call(p, v),
                                _ = p[v];
                            try {
                                p[v] = void 0;
                                var y = !0
                            } catch {}
                            var b = u.call(p);
                            return y && (g ? p[v] = _ : delete p[v]), b
                        }
                    },
                    9551: (a, c, i) => {
                        var d = i(4963),
                            l = i(479),
                            m = Object.prototype.propertyIsEnumerable,
                            u = Object.getOwnPropertySymbols,
                            v = u ? function(p) {
                                return p == null ? [] : (p = Object(p), d(u(p), (function(g) {
                                    return m.call(p, g)
                                })))
                            } : l;
                        a.exports = v
                    },
                    4160: (a, c, i) => {
                        var d = i(8552),
                            l = i(7071),
                            m = i(3818),
                            u = i(8525),
                            v = i(577),
                            p = i(4239),
                            g = i(346),
                            _ = "[object Map]",
                            y = "[object Promise]",
                            b = "[object Set]",
                            C = "[object WeakMap]",
                            x = "[object DataView]",
                            T = g(d),
                            j = g(l),
                            N = g(m),
                            z = g(u),
                            F = g(v),
                            R = p;
                        (d && R(new d(new ArrayBuffer(1))) != x || l && R(new l) != _ || m && R(m.resolve()) != y || u && R(new u) != b || v && R(new v) != C) && (R = function(q) {
                            var Z = p(q),
                                G = Z == "[object Object]" ? q.constructor : void 0,
                                Y = G ? g(G) : "";
                            if (Y) switch (Y) {
                                case T:
                                    return x;
                                case j:
                                    return _;
                                case N:
                                    return y;
                                case z:
                                    return b;
                                case F:
                                    return C
                            }
                            return Z
                        }), a.exports = R
                    },
                    7801: a => {
                        a.exports = function(c, i) {
                            return c?.[i]
                        }
                    },
                    1789: (a, c, i) => {
                        var d = i(4536);
                        a.exports = function() {
                            this.__data__ = d ? d(null) : {}, this.size = 0
                        }
                    },
                    401: a => {
                        a.exports = function(c) {
                            var i = this.has(c) && delete this.__data__[c];
                            return this.size -= i ? 1 : 0, i
                        }
                    },
                    7667: (a, c, i) => {
                        var d = i(4536),
                            l = Object.prototype.hasOwnProperty;
                        a.exports = function(m) {
                            var u = this.__data__;
                            if (d) {
                                var v = u[m];
                                return v === "__lodash_hash_undefined__" ? void 0 : v
                            }
                            return l.call(u, m) ? u[m] : void 0
                        }
                    },
                    1327: (a, c, i) => {
                        var d = i(4536),
                            l = Object.prototype.hasOwnProperty;
                        a.exports = function(m) {
                            var u = this.__data__;
                            return d ? u[m] !== void 0 : l.call(u, m)
                        }
                    },
                    1866: (a, c, i) => {
                        var d = i(4536);
                        a.exports = function(l, m) {
                            var u = this.__data__;
                            return this.size += this.has(l) ? 0 : 1, u[l] = d && m === void 0 ? "__lodash_hash_undefined__" : m, this
                        }
                    },
                    5776: a => {
                        var c = /^(?:0|[1-9]\d*)$/;
                        a.exports = function(i, d) {
                            var l = typeof i;
                            return !!(d = d ?? 9007199254740991) && (l == "number" || l != "symbol" && c.test(i)) && i > -1 && i % 1 == 0 && i < d
                        }
                    },
                    7019: a => {
                        a.exports = function(c) {
                            var i = typeof c;
                            return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? c !== "__proto__" : c === null
                        }
                    },
                    5346: (a, c, i) => {
                        var d, l = i(4429),
                            m = (d = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + d : "";
                        a.exports = function(u) {
                            return !!m && m in u
                        }
                    },
                    5726: a => {
                        var c = Object.prototype;
                        a.exports = function(i) {
                            var d = i && i.constructor;
                            return i === (typeof d == "function" && d.prototype || c)
                        }
                    },
                    7040: a => {
                        a.exports = function() {
                            this.__data__ = [], this.size = 0
                        }
                    },
                    4125: (a, c, i) => {
                        var d = i(8470),
                            l = Array.prototype.splice;
                        a.exports = function(m) {
                            var u = this.__data__,
                                v = d(u, m);
                            return !(v < 0 || (v == u.length - 1 ? u.pop() : l.call(u, v, 1), --this.size, 0))
                        }
                    },
                    2117: (a, c, i) => {
                        var d = i(8470);
                        a.exports = function(l) {
                            var m = this.__data__,
                                u = d(m, l);
                            return u < 0 ? void 0 : m[u][1]
                        }
                    },
                    7518: (a, c, i) => {
                        var d = i(8470);
                        a.exports = function(l) {
                            return d(this.__data__, l) > -1
                        }
                    },
                    4705: (a, c, i) => {
                        var d = i(8470);
                        a.exports = function(l, m) {
                            var u = this.__data__,
                                v = d(u, l);
                            return v < 0 ? (++this.size, u.push([l, m])) : u[v][1] = m, this
                        }
                    },
                    4785: (a, c, i) => {
                        var d = i(1989),
                            l = i(8407),
                            m = i(7071);
                        a.exports = function() {
                            this.size = 0, this.__data__ = {
                                hash: new d,
                                map: new(m || l),
                                string: new d
                            }
                        }
                    },
                    1285: (a, c, i) => {
                        var d = i(5050);
                        a.exports = function(l) {
                            var m = d(this, l).delete(l);
                            return this.size -= m ? 1 : 0, m
                        }
                    },
                    6e3: (a, c, i) => {
                        var d = i(5050);
                        a.exports = function(l) {
                            return d(this, l).get(l)
                        }
                    },
                    9916: (a, c, i) => {
                        var d = i(5050);
                        a.exports = function(l) {
                            return d(this, l).has(l)
                        }
                    },
                    5265: (a, c, i) => {
                        var d = i(5050);
                        a.exports = function(l, m) {
                            var u = d(this, l),
                                v = u.size;
                            return u.set(l, m), this.size += u.size == v ? 0 : 1, this
                        }
                    },
                    8776: a => {
                        a.exports = function(c) {
                            var i = -1,
                                d = Array(c.size);
                            return c.forEach((function(l, m) {
                                d[++i] = [m, l]
                            })), d
                        }
                    },
                    4536: (a, c, i) => {
                        var d = i(852)(Object, "create");
                        a.exports = d
                    },
                    6916: (a, c, i) => {
                        var d = i(5569)(Object.keys, Object);
                        a.exports = d
                    },
                    1167: (a, c, i) => {
                        a = i.nmd(a);
                        var d = i(1957),
                            l = c && !c.nodeType && c,
                            m = l && a && !a.nodeType && a,
                            u = m && m.exports === l && d.process,
                            v = (function() {
                                try {
                                    return m && m.require && m.require("util").types || u && u.binding && u.binding("util")
                                } catch {}
                            })();
                        a.exports = v
                    },
                    2333: a => {
                        var c = Object.prototype.toString;
                        a.exports = function(i) {
                            return c.call(i)
                        }
                    },
                    5569: a => {
                        a.exports = function(c, i) {
                            return function(d) {
                                return c(i(d))
                            }
                        }
                    },
                    5639: (a, c, i) => {
                        var d = i(1957),
                            l = typeof self == "object" && self && self.Object === Object && self,
                            m = d || l || Function("return this")();
                        a.exports = m
                    },
                    619: a => {
                        a.exports = function(c) {
                            return this.__data__.set(c, "__lodash_hash_undefined__"), this
                        }
                    },
                    2385: a => {
                        a.exports = function(c) {
                            return this.__data__.has(c)
                        }
                    },
                    1814: a => {
                        a.exports = function(c) {
                            var i = -1,
                                d = Array(c.size);
                            return c.forEach((function(l) {
                                d[++i] = l
                            })), d
                        }
                    },
                    7465: (a, c, i) => {
                        var d = i(8407);
                        a.exports = function() {
                            this.__data__ = new d, this.size = 0
                        }
                    },
                    3779: a => {
                        a.exports = function(c) {
                            var i = this.__data__,
                                d = i.delete(c);
                            return this.size = i.size, d
                        }
                    },
                    7599: a => {
                        a.exports = function(c) {
                            return this.__data__.get(c)
                        }
                    },
                    4758: a => {
                        a.exports = function(c) {
                            return this.__data__.has(c)
                        }
                    },
                    4309: (a, c, i) => {
                        var d = i(8407),
                            l = i(7071),
                            m = i(3369);
                        a.exports = function(u, v) {
                            var p = this.__data__;
                            if (p instanceof d) {
                                var g = p.__data__;
                                if (!l || g.length < 199) return g.push([u, v]), this.size = ++p.size, this;
                                p = this.__data__ = new m(g)
                            }
                            return p.set(u, v), this.size = p.size, this
                        }
                    },
                    346: a => {
                        var c = Function.prototype.toString;
                        a.exports = function(i) {
                            if (i != null) {
                                try {
                                    return c.call(i)
                                } catch {}
                                try {
                                    return i + ""
                                } catch {}
                            }
                            return ""
                        }
                    },
                    7813: a => {
                        a.exports = function(c, i) {
                            return c === i || c != c && i != i
                        }
                    },
                    5694: (a, c, i) => {
                        var d = i(9454),
                            l = i(7005),
                            m = Object.prototype,
                            u = m.hasOwnProperty,
                            v = m.propertyIsEnumerable,
                            p = d((function() {
                                return arguments
                            })()) ? d : function(g) {
                                return l(g) && u.call(g, "callee") && !v.call(g, "callee")
                            };
                        a.exports = p
                    },
                    1469: a => {
                        var c = Array.isArray;
                        a.exports = c
                    },
                    8612: (a, c, i) => {
                        var d = i(3560),
                            l = i(1780);
                        a.exports = function(m) {
                            return m != null && l(m.length) && !d(m)
                        }
                    },
                    4144: (a, c, i) => {
                        a = i.nmd(a);
                        var d = i(5639),
                            l = i(5062),
                            m = c && !c.nodeType && c,
                            u = m && a && !a.nodeType && a,
                            v = u && u.exports === m ? d.Buffer : void 0,
                            p = (v ? v.isBuffer : void 0) || l;
                        a.exports = p
                    },
                    8446: (a, c, i) => {
                        var d = i(939);
                        a.exports = function(l, m) {
                            return d(l, m)
                        }
                    },
                    3560: (a, c, i) => {
                        var d = i(4239),
                            l = i(3218);
                        a.exports = function(m) {
                            if (!l(m)) return !1;
                            var u = d(m);
                            return u == "[object Function]" || u == "[object GeneratorFunction]" || u == "[object AsyncFunction]" || u == "[object Proxy]"
                        }
                    },
                    1780: a => {
                        a.exports = function(c) {
                            return typeof c == "number" && c > -1 && c % 1 == 0 && c <= 9007199254740991
                        }
                    },
                    3218: a => {
                        a.exports = function(c) {
                            var i = typeof c;
                            return c != null && (i == "object" || i == "function")
                        }
                    },
                    7005: a => {
                        a.exports = function(c) {
                            return c != null && typeof c == "object"
                        }
                    },
                    6719: (a, c, i) => {
                        var d = i(8749),
                            l = i(1717),
                            m = i(1167),
                            u = m && m.isTypedArray,
                            v = u ? l(u) : d;
                        a.exports = v
                    },
                    3674: (a, c, i) => {
                        var d = i(4636),
                            l = i(280),
                            m = i(8612);
                        a.exports = function(u) {
                            return m(u) ? d(u) : l(u)
                        }
                    },
                    8306: (a, c, i) => {
                        var d = i(3369);

                        function l(m, u) {
                            if (typeof m != "function" || u != null && typeof u != "function") throw new TypeError("Expected a function");
                            var v = function() {
                                var p = arguments,
                                    g = u ? u.apply(this, p) : p[0],
                                    _ = v.cache;
                                if (_.has(g)) return _.get(g);
                                var y = m.apply(this, p);
                                return v.cache = _.set(g, y) || _, y
                            };
                            return v.cache = new(l.Cache || d), v
                        }
                        l.Cache = d, a.exports = l
                    },
                    479: a => {
                        a.exports = function() {
                            return []
                        }
                    },
                    5062: a => {
                        a.exports = function() {
                            return !1
                        }
                    },
                    2703: (a, c, i) => {
                        var d = i(414);

                        function l() {}

                        function m() {}
                        m.resetWarningCache = l, a.exports = function() {
                            function u(g, _, y, b, C, x) {
                                if (x !== d) {
                                    var T = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw T.name = "Invariant Violation", T
                                }
                            }

                            function v() {
                                return u
                            }
                            u.isRequired = u;
                            var p = {
                                array: u,
                                bigint: u,
                                bool: u,
                                func: u,
                                number: u,
                                object: u,
                                string: u,
                                symbol: u,
                                any: u,
                                arrayOf: v,
                                element: u,
                                elementType: u,
                                instanceOf: v,
                                node: u,
                                objectOf: v,
                                oneOf: v,
                                oneOfType: v,
                                shape: v,
                                exact: v,
                                checkPropTypes: m,
                                resetWarningCache: l
                            };
                            return p.PropTypes = p, p
                        }
                    },
                    5697: (a, c, i) => {
                        a.exports = i(2703)()
                    },
                    414: a => {
                        a.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                    },
                    9787: a => {
                        a.exports = n
                    }
                },
                r = {};

            function s(a) {
                var c = r[a];
                if (c !== void 0) return c.exports;
                var i = r[a] = {
                    id: a,
                    loaded: !1,
                    exports: {}
                };
                return o[a](i, i.exports, s), i.loaded = !0, i.exports
            }
            s.n = a => {
                var c = a && a.__esModule ? () => a.default : () => a;
                return s.d(c, {
                    a: c
                }), c
            }, s.d = (a, c) => {
                for (var i in c) s.o(c, i) && !s.o(a, i) && Object.defineProperty(a, i, {
                    enumerable: !0,
                    get: c[i]
                })
            }, s.g = (function() {
                if (typeof globalThis == "object") return globalThis;
                try {
                    return this || new Function("return this")()
                } catch {
                    if (typeof window == "object") return window
                }
            })(), s.o = (a, c) => Object.prototype.hasOwnProperty.call(a, c), s.r = a => {
                typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(a, "__esModule", {
                    value: !0
                })
            }, s.nmd = a => (a.paths = [], a.children || (a.children = []), a);
            var f = {};
            return (() => {
                s.r(f), s.d(f, {
                    default: () => il,
                    expandNodesToLevel: () => ts
                });
                var a = s(4184),
                    c = s.n(a),
                    i = s(8446),
                    d = s.n(i),
                    l = s(8306),
                    m = s.n(l);
                let u = (P = 21) => crypto.getRandomValues(new Uint8Array(P)).reduce(((w, O) => w + ((O &= 63) < 36 ? O.toString(36) : O < 62 ? (O - 26).toString(36).toUpperCase() : O > 62 ? "-" : "_")), "");
                var v = s(5697),
                    p = s.n(v),
                    g = s(9787),
                    _ = s.n(g);

                function y(P) {
                    return y = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                        return typeof w
                    } : function(w) {
                        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                    }, y(P)
                }
                var b = ["children", "title"];

                function C() {
                    return C = Object.assign ? Object.assign.bind() : function(P) {
                        for (var w = 1; w < arguments.length; w++) {
                            var O = arguments[w];
                            for (var S in O) Object.prototype.hasOwnProperty.call(O, S) && (P[S] = O[S])
                        }
                        return P
                    }, C.apply(this, arguments)
                }

                function x(P, w) {
                    if (!(P instanceof w)) throw new TypeError("Cannot call a class as a function")
                }

                function T(P, w) {
                    for (var O = 0; O < w.length; O++) {
                        var S = w[O];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
                    }
                }

                function j(P, w) {
                    return j = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
                        return O.__proto__ = S, O
                    }, j(P, w)
                }

                function N(P, w) {
                    if (w && (y(w) === "object" || typeof w == "function")) return w;
                    if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function(O) {
                        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return O
                    })(P)
                }

                function z(P) {
                    return z = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
                        return w.__proto__ || Object.getPrototypeOf(w)
                    }, z(P)
                }

                function F(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }
                var R = (function(P) {
                    (function(A, k) {
                        if (typeof k != "function" && k !== null) throw new TypeError("Super expression must either be null or a function");
                        A.prototype = Object.create(k && k.prototype, {
                            constructor: {
                                value: A,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(A, "prototype", {
                            writable: !1
                        }), k && j(A, k)
                    })(V, P);
                    var w, O, S, H, $ = (S = V, H = (function() {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if (typeof Proxy == "function") return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch {
                            return !1
                        }
                    })(), function() {
                        var A, k = z(S);
                        if (H) {
                            var E = z(this).constructor;
                            A = Reflect.construct(k, arguments, E)
                        } else A = k.apply(this, arguments);
                        return N(this, A)
                    });

                    function V() {
                        return x(this, V), $.apply(this, arguments)
                    }
                    return w = V, (O = [{
                        key: "render",
                        value: function() {
                            var A = this.props,
                                k = A.children,
                                E = A.title,
                                D = (function(B, W) {
                                    if (B == null) return {};
                                    var fe, me, be = (function(Qe, Un) {
                                        if (Qe == null) return {};
                                        var st, it, Xt = {},
                                            Ct = Object.keys(Qe);
                                        for (it = 0; it < Ct.length; it++) st = Ct[it], Un.indexOf(st) >= 0 || (Xt[st] = Qe[st]);
                                        return Xt
                                    })(B, W);
                                    if (Object.getOwnPropertySymbols) {
                                        var Le = Object.getOwnPropertySymbols(B);
                                        for (me = 0; me < Le.length; me++) fe = Le[me], W.indexOf(fe) >= 0 || Object.prototype.propertyIsEnumerable.call(B, fe) && (be[fe] = B[fe])
                                    }
                                    return be
                                })(A, b);
                            return _().createElement("button", C({
                                "aria-label": E,
                                title: E,
                                type: "button"
                            }, D), k)
                        }
                    }]) && T(w.prototype, O), Object.defineProperty(w, "prototype", {
                        writable: !1
                    }), V
                })(_().PureComponent);
                F(R, "propTypes", {
                    children: p().node.isRequired,
                    title: p().string
                }), F(R, "defaultProps", {
                    title: null
                });
                const q = R,
                    Z = {
                        ALL: "all",
                        PARENT: "parent",
                        LEAF: "leaf"
                    };

                function G(P) {
                    this.message = P, this.stack = Error().stack
                }
                G.prototype = Object.create(Error.prototype), G.prototype.name = "CheckboxTreeError";
                const Y = G;

                function se(P, w) {
                    var O = Object.keys(P);
                    if (Object.getOwnPropertySymbols) {
                        var S = Object.getOwnPropertySymbols(P);
                        w && (S = S.filter((function(H) {
                            return Object.getOwnPropertyDescriptor(P, H).enumerable
                        }))), O.push.apply(O, S)
                    }
                    return O
                }

                function ue(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }

                function L(P, w) {
                    if (!(P instanceof w)) throw new TypeError("Cannot call a class as a function")
                }

                function Re(P, w) {
                    for (var O = 0; O < w.length; O++) {
                        var S = w[O];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
                    }
                }
                var ye = Z;
                const Mn = (function() {
                    function P(S) {
                        var H = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        L(this, P), this.props = S, this.flatNodes = H
                    }
                    var w, O;
                    return w = P, O = [{
                        key: "setProps",
                        value: function(S) {
                            this.props = S
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            var S = this,
                                H = {};
                            return Object.keys(this.flatNodes).forEach((function($) {
                                var V = S.flatNodes[$];
                                H[$] = (function(A) {
                                    for (var k = 1; k < arguments.length; k++) {
                                        var E = arguments[k] != null ? arguments[k] : {};
                                        k % 2 ? se(Object(E), !0).forEach((function(D) {
                                            ue(A, D, E[D])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(E)) : se(Object(E)).forEach((function(D) {
                                            Object.defineProperty(A, D, Object.getOwnPropertyDescriptor(E, D))
                                        }))
                                    }
                                    return A
                                })({}, V)
                            })), new P(this.props, H)
                        }
                    }, {
                        key: "getNode",
                        value: function(S) {
                            return this.flatNodes[S]
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.flatNodes = {}
                        }
                    }, {
                        key: "flattenNodes",
                        value: function(S) {
                            var H = this,
                                $ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                            if (Array.isArray(S) && S.length !== 0) {
                                var A = this.props,
                                    k = A.disabled,
                                    E = A.noCascade;
                                S.forEach((function(D, B) {
                                    var W = H.nodeHasChildren(D);
                                    if (H.flatNodes[D.value] !== void 0) throw new Y("Duplicate value '".concat(D.value, "' detected. All node values must be unique."));
                                    H.flatNodes[D.value] = {
                                        label: D.label,
                                        value: D.value,
                                        children: D.children,
                                        parent: $,
                                        isChild: $.value !== void 0,
                                        isParent: W,
                                        isLeaf: !W,
                                        showCheckbox: D.showCheckbox === void 0 || D.showCheckbox,
                                        disabled: H.getDisabledState(D, $, k, E),
                                        treeDepth: V,
                                        index: B
                                    }, H.flattenNodes(D.children, D, V + 1)
                                }))
                            }
                        }
                    }, {
                        key: "nodeHasChildren",
                        value: function(S) {
                            return Array.isArray(S.children)
                        }
                    }, {
                        key: "getDisabledState",
                        value: function(S, H, $, V) {
                            return !!$ || !(V || !H.disabled) || !!S.disabled
                        }
                    }, {
                        key: "deserializeLists",
                        value: function(S) {
                            var H = this,
                                $ = ["checked", "expanded"];
                            Object.keys(this.flatNodes).forEach((function(V) {
                                $.forEach((function(A) {
                                    H.flatNodes[V][A] = !1
                                }))
                            })), $.forEach((function(V) {
                                S[V].forEach((function(A) {
                                    H.flatNodes[A] !== void 0 && (H.flatNodes[A][V] = !0)
                                }))
                            }))
                        }
                    }, {
                        key: "serializeList",
                        value: function(S) {
                            var H = this,
                                $ = [];
                            return Object.keys(this.flatNodes).forEach((function(V) {
                                H.flatNodes[V][S] && $.push(V)
                            })), $
                        }
                    }, {
                        key: "expandAllNodes",
                        value: function(S) {
                            var H = this;
                            return Object.keys(this.flatNodes).forEach((function($) {
                                H.flatNodes[$].isParent && (H.flatNodes[$].expanded = S)
                            })), this
                        }
                    }, {
                        key: "toggleChecked",
                        value: function(S, H, $, V) {
                            var A = this,
                                k = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4],
                                E = this.flatNodes[S.value],
                                D = [ye.PARENT, ye.ALL].indexOf($) > -1,
                                B = [ye.LEAF, ye.ALL].indexOf($) > -1;
                            if (E.isLeaf || V) {
                                if (S.disabled) return this;
                                this.toggleNode(S.value, "checked", H)
                            } else(D || E.children.length === 0) && this.toggleNode(S.value, "checked", H), B && E.children.forEach((function(W) {
                                A.toggleChecked(W, H, $, V, !1)
                            }));
                            return k && !V && E.isChild && D && this.toggleParentStatus(E.parent, $), this
                        }
                    }, {
                        key: "toggleParentStatus",
                        value: function(S, H) {
                            var $ = this.flatNodes[S.value];
                            $.isChild ? (H === ye.ALL && this.toggleNode(S.value, "checked", this.isEveryChildChecked($)), this.toggleParentStatus($.parent, H)) : this.toggleNode(S.value, "checked", this.isEveryChildChecked($))
                        }
                    }, {
                        key: "isEveryChildChecked",
                        value: function(S) {
                            var H = this;
                            return S.children.every((function($) {
                                return H.getNode($.value).checked
                            }))
                        }
                    }, {
                        key: "toggleNode",
                        value: function(S, H, $) {
                            return this.flatNodes[S][H] = $, this
                        }
                    }], O && Re(w.prototype, O), Object.defineProperty(w, "prototype", {
                        writable: !1
                    }), P
                })();

                function kt(P) {
                    return kt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                        return typeof w
                    } : function(w) {
                        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                    }, kt(P)
                }

                function An() {
                    return An = Object.assign ? Object.assign.bind() : function(P) {
                        for (var w = 1; w < arguments.length; w++) {
                            var O = arguments[w];
                            for (var S in O) Object.prototype.hasOwnProperty.call(O, S) && (P[S] = O[S])
                        }
                        return P
                    }, An.apply(this, arguments)
                }

                function Vr(P, w) {
                    var O = Object.keys(P);
                    if (Object.getOwnPropertySymbols) {
                        var S = Object.getOwnPropertySymbols(P);
                        w && (S = S.filter((function(H) {
                            return Object.getOwnPropertyDescriptor(P, H).enumerable
                        }))), O.push.apply(O, S)
                    }
                    return O
                }

                function Yc(P, w) {
                    if (!(P instanceof w)) throw new TypeError("Cannot call a class as a function")
                }

                function Qc(P, w) {
                    for (var O = 0; O < w.length; O++) {
                        var S = w[O];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
                    }
                }

                function Dn(P, w) {
                    return Dn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
                        return O.__proto__ = S, O
                    }, Dn(P, w)
                }

                function Zc(P, w) {
                    if (w && (kt(w) === "object" || typeof w == "function")) return w;
                    if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return (function(O) {
                        if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return O
                    })(P)
                }

                function Vt(P) {
                    return Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
                        return w.__proto__ || Object.getPrototypeOf(w)
                    }, Vt(P)
                }

                function Tn(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }
                var jn = (function(P) {
                    (function(A, k) {
                        if (typeof k != "function" && k !== null) throw new TypeError("Super expression must either be null or a function");
                        A.prototype = Object.create(k && k.prototype, {
                            constructor: {
                                value: A,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(A, "prototype", {
                            writable: !1
                        }), k && Dn(A, k)
                    })(V, P);
                    var w, O, S, H, $ = (S = V, H = (function() {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if (typeof Proxy == "function") return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch {
                            return !1
                        }
                    })(), function() {
                        var A, k = Vt(S);
                        if (H) {
                            var E = Vt(this).constructor;
                            A = Reflect.construct(k, arguments, E)
                        } else A = k.apply(this, arguments);
                        return Zc(this, A)
                    });

                    function V() {
                        return Yc(this, V), $.apply(this, arguments)
                    }
                    return w = V, O = [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateDeterminateProperty()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.updateDeterminateProperty()
                        }
                    }, {
                        key: "updateDeterminateProperty",
                        value: function() {
                            var A = this.props.indeterminate;
                            this.checkbox.indeterminate = A
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var A = this,
                                k = (function(E) {
                                    for (var D = 1; D < arguments.length; D++) {
                                        var B = arguments[D] != null ? arguments[D] : {};
                                        D % 2 ? Vr(Object(B), !0).forEach((function(W) {
                                            Tn(E, W, B[W])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(B)) : Vr(Object(B)).forEach((function(W) {
                                            Object.defineProperty(E, W, Object.getOwnPropertyDescriptor(B, W))
                                        }))
                                    }
                                    return E
                                })({}, this.props);
                            return delete k.indeterminate, _().createElement("input", An({}, k, {
                                ref: function(E) {
                                    A.checkbox = E
                                },
                                type: "checkbox"
                            }))
                        }
                    }], O && Qc(w.prototype, O), Object.defineProperty(w, "prototype", {
                        writable: !1
                    }), V
                })(_().PureComponent);
                Tn(jn, "propTypes", {
                    indeterminate: p().bool
                }), Tn(jn, "defaultProps", {
                    indeterminate: !1
                });
                const Jc = jn,
                    Wr = p().shape({
                        check: p().node,
                        uncheck: p().node,
                        halfCheck: p().node,
                        expandClose: p().node,
                        expandOpen: p().node,
                        expandAll: p().node,
                        collapseAll: p().node,
                        parentClose: p().node,
                        parentOpen: p().node,
                        leaf: p().node
                    }),
                    qr = p().shape({
                        collapseAll: p().string.isRequired,
                        expandAll: p().string.isRequired,
                        toggle: p().string.isRequired
                    });

                function In(P) {
                    return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                        return typeof w
                    } : function(w) {
                        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                    }, In(P)
                }

                function el(P, w) {
                    for (var O = 0; O < w.length; O++) {
                        var S = w[O];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
                    }
                }

                function Rn(P, w) {
                    return Rn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
                        return O.__proto__ = S, O
                    }, Rn(P, w)
                }

                function tl(P, w) {
                    if (w && (In(w) === "object" || typeof w == "function")) return w;
                    if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return ot(P)
                }

                function ot(P) {
                    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return P
                }

                function Wt(P) {
                    return Wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
                        return w.__proto__ || Object.getPrototypeOf(w)
                    }, Wt(P)
                }

                function Xr(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }
                var Ln = (function(P) {
                    (function(A, k) {
                        if (typeof k != "function" && k !== null) throw new TypeError("Super expression must either be null or a function");
                        A.prototype = Object.create(k && k.prototype, {
                            constructor: {
                                value: A,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(A, "prototype", {
                            writable: !1
                        }), k && Rn(A, k)
                    })(V, P);
                    var w, O, S, H, $ = (S = V, H = (function() {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if (typeof Proxy == "function") return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch {
                            return !1
                        }
                    })(), function() {
                        var A, k = Wt(S);
                        if (H) {
                            var E = Wt(this).constructor;
                            A = Reflect.construct(k, arguments, E)
                        } else A = k.apply(this, arguments);
                        return tl(this, A)
                    });

                    function V(A) {
                        var k;
                        return (function(E, D) {
                            if (!(E instanceof D)) throw new TypeError("Cannot call a class as a function")
                        })(this, V), (k = $.call(this, A)).onCheck = k.onCheck.bind(ot(k)), k.onCheckboxKeyPress = k.onCheckboxKeyPress.bind(ot(k)), k.onCheckboxKeyUp = k.onCheckboxKeyUp.bind(ot(k)), k.onClick = k.onClick.bind(ot(k)), k.onExpand = k.onExpand.bind(ot(k)), k
                    }
                    return w = V, (O = [{
                        key: "onCheck",
                        value: function() {
                            var A = this.props,
                                k = A.value;
                            (0, A.onCheck)({
                                value: k,
                                checked: this.getCheckState({
                                    toggle: !0
                                })
                            })
                        }
                    }, {
                        key: "onCheckboxKeyPress",
                        value: function(A) {
                            A.which === 32 && A.preventDefault()
                        }
                    }, {
                        key: "onCheckboxKeyUp",
                        value: function(A) {
                            var k = A.keyCode;
                            [13, 32].includes(k) && this.onCheck()
                        }
                    }, {
                        key: "onClick",
                        value: function() {
                            var A = this.props,
                                k = A.expandOnClick,
                                E = A.isParent,
                                D = A.value,
                                B = A.onClick;
                            E && k && this.onExpand(), B({
                                value: D,
                                checked: this.getCheckState({
                                    toggle: !1
                                })
                            })
                        }
                    }, {
                        key: "onExpand",
                        value: function() {
                            var A = this.props,
                                k = A.expanded,
                                E = A.value;
                            (0, A.onExpand)({
                                value: E,
                                expanded: !k
                            })
                        }
                    }, {
                        key: "getCheckState",
                        value: function(A) {
                            var k = A.toggle,
                                E = this.props,
                                D = E.checked,
                                B = E.optimisticToggle;
                            return !(D !== 0 || !k) || D === 1 && !k || D === 2 && B
                        }
                    }, {
                        key: "renderCollapseButton",
                        value: function() {
                            var A = this.props,
                                k = A.expandDisabled,
                                E = A.isLeaf,
                                D = A.lang;
                            return E ? _().createElement("span", {
                                className: "rct-collapse"
                            }, _().createElement("span", {
                                className: "rct-icon"
                            })) : _().createElement(q, {
                                className: "rct-collapse rct-collapse-btn",
                                disabled: k,
                                title: D.toggle,
                                onClick: this.onExpand
                            }, this.renderCollapseIcon())
                        }
                    }, {
                        key: "renderCollapseIcon",
                        value: function() {
                            var A = this.props,
                                k = A.expanded,
                                E = A.icons,
                                D = E.expandClose,
                                B = E.expandOpen;
                            return k ? B : D
                        }
                    }, {
                        key: "renderCheckboxIcon",
                        value: function() {
                            var A = this.props,
                                k = A.checked,
                                E = A.icons,
                                D = E.uncheck,
                                B = E.check,
                                W = E.halfCheck;
                            return k === 0 ? D : k === 1 ? B : W
                        }
                    }, {
                        key: "renderNodeIcon",
                        value: function() {
                            var A = this.props,
                                k = A.expanded,
                                E = A.icon,
                                D = A.icons,
                                B = D.leaf,
                                W = D.parentClose,
                                fe = D.parentOpen,
                                me = A.isLeaf;
                            return E !== null ? E : me ? B : k ? fe : W
                        }
                    }, {
                        key: "renderBareLabel",
                        value: function(A) {
                            var k = this.props,
                                E = k.onClick,
                                D = k.title,
                                B = E !== null;
                            return _().createElement("span", {
                                className: "rct-bare-label",
                                title: D
                            }, B ? _().createElement("span", {
                                className: "rct-node-clickable",
                                onClick: this.onClick,
                                onKeyPress: this.onClick,
                                role: "button",
                                tabIndex: 0
                            }, A) : A)
                        }
                    }, {
                        key: "renderCheckboxLabel",
                        value: function(A) {
                            var k = this.props,
                                E = k.checked,
                                D = k.disabled,
                                B = k.title,
                                W = k.treeId,
                                fe = k.value,
                                me = k.onClick !== null,
                                be = "".concat(W, "-").concat(String(fe).split(" ").join("_")),
                                Le = [_().createElement("label", {
                                    key: 0,
                                    htmlFor: be,
                                    title: B
                                }, _().createElement(Jc, {
                                    checked: E === 1,
                                    disabled: D,
                                    id: be,
                                    indeterminate: E === 2,
                                    onClick: this.onCheck,
                                    onChange: function() {}
                                }), _().createElement("span", {
                                    "aria-checked": E === 1,
                                    "aria-disabled": D,
                                    className: "rct-checkbox",
                                    role: "checkbox",
                                    tabIndex: 0,
                                    onKeyPress: this.onCheckboxKeyPress,
                                    onKeyUp: this.onCheckboxKeyUp
                                }, this.renderCheckboxIcon()), me ? null : A)];
                            return me && Le.push(_().createElement("span", {
                                key: 1,
                                className: "rct-node-clickable",
                                onClick: this.onClick,
                                onKeyPress: this.onClick,
                                role: "link",
                                tabIndex: 0
                            }, A)), Le
                        }
                    }, {
                        key: "renderLabel",
                        value: function() {
                            var A = this.props,
                                k = A.label,
                                E = A.showCheckbox,
                                D = [A.showNodeIcon ? _().createElement("span", {
                                    key: 0,
                                    className: "rct-node-icon"
                                }, this.renderNodeIcon()) : null, _().createElement("span", {
                                    key: 1,
                                    className: "rct-title"
                                }, k)];
                            return E ? this.renderCheckboxLabel(D) : this.renderBareLabel(D)
                        }
                    }, {
                        key: "renderChildren",
                        value: function() {
                            return this.props.expanded ? this.props.children : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var A = this.props,
                                k = A.className,
                                E = A.disabled,
                                D = A.expanded,
                                B = A.isLeaf,
                                W = c()({
                                    "rct-node": !0,
                                    "rct-node-leaf": B,
                                    "rct-node-parent": !B,
                                    "rct-node-expanded": !B && D,
                                    "rct-node-collapsed": !B && !D,
                                    "rct-disabled": E
                                }, k);
                            return _().createElement("li", {
                                className: W
                            }, _().createElement("span", {
                                className: "rct-text"
                            }, this.renderCollapseButton(), this.renderLabel()), this.renderChildren())
                        }
                    }]) && el(w.prototype, O), Object.defineProperty(w, "prototype", {
                        writable: !1
                    }), V
                })(_().PureComponent);
                Xr(Ln, "propTypes", {
                    checked: p().number.isRequired,
                    disabled: p().bool.isRequired,
                    expandDisabled: p().bool.isRequired,
                    expanded: p().bool.isRequired,
                    icons: Wr.isRequired,
                    isLeaf: p().bool.isRequired,
                    isParent: p().bool.isRequired,
                    label: p().node.isRequired,
                    lang: qr.isRequired,
                    optimisticToggle: p().bool.isRequired,
                    showNodeIcon: p().bool.isRequired,
                    treeId: p().string.isRequired,
                    value: p().oneOfType([p().string, p().number]).isRequired,
                    onCheck: p().func.isRequired,
                    onExpand: p().func.isRequired,
                    children: p().node,
                    className: p().string,
                    expandOnClick: p().bool,
                    icon: p().node,
                    showCheckbox: p().bool,
                    title: p().string,
                    onClick: p().func
                }), Xr(Ln, "defaultProps", {
                    children: null,
                    className: null,
                    expandOnClick: !1,
                    icon: null,
                    showCheckbox: !0,
                    title: null,
                    onClick: function() {}
                });
                const nl = Ln,
                    Gr = p().oneOfType([p().arrayOf(p().string), p().arrayOf(p().number)]);

                function Yr(P, w) {
                    var O = Object.keys(P);
                    if (Object.getOwnPropertySymbols) {
                        var S = Object.getOwnPropertySymbols(P);
                        w && (S = S.filter((function(H) {
                            return Object.getOwnPropertyDescriptor(P, H).enumerable
                        }))), O.push.apply(O, S)
                    }
                    return O
                }

                function Qr(P) {
                    for (var w = 1; w < arguments.length; w++) {
                        var O = arguments[w] != null ? arguments[w] : {};
                        w % 2 ? Yr(Object(O), !0).forEach((function(S) {
                            ol(P, S, O[S])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(O)) : Yr(Object(O)).forEach((function(S) {
                            Object.defineProperty(P, S, Object.getOwnPropertyDescriptor(O, S))
                        }))
                    }
                    return P
                }

                function ol(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }
                var Bn = {
                    label: p().node.isRequired,
                    value: p().oneOfType([p().string, p().number]).isRequired,
                    disabled: p().bool,
                    icon: p().node,
                    showCheckbox: p().bool,
                    title: p().string
                };
                const rl = p().oneOfType([p().shape(Bn), p().shape(Qr(Qr({}, Bn), {}, {
                    children: p().arrayOf(Bn).isRequired
                }))]);

                function Nn(P) {
                    return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
                        return typeof w
                    } : function(w) {
                        return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
                    }, Nn(P)
                }

                function Zr(P, w) {
                    var O = Object.keys(P);
                    if (Object.getOwnPropertySymbols) {
                        var S = Object.getOwnPropertySymbols(P);
                        w && (S = S.filter((function(H) {
                            return Object.getOwnPropertyDescriptor(P, H).enumerable
                        }))), O.push.apply(O, S)
                    }
                    return O
                }

                function ke(P) {
                    for (var w = 1; w < arguments.length; w++) {
                        var O = arguments[w] != null ? arguments[w] : {};
                        w % 2 ? Zr(Object(O), !0).forEach((function(S) {
                            rt(P, S, O[S])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(O)) : Zr(Object(O)).forEach((function(S) {
                            Object.defineProperty(P, S, Object.getOwnPropertyDescriptor(O, S))
                        }))
                    }
                    return P
                }

                function Jr(P, w) {
                    for (var O = 0; O < w.length; O++) {
                        var S = w[O];
                        S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
                    }
                }

                function zn(P, w) {
                    return zn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
                        return O.__proto__ = S, O
                    }, zn(P, w)
                }

                function sl(P, w) {
                    if (w && (Nn(w) === "object" || typeof w == "function")) return w;
                    if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
                    return Ye(P)
                }

                function Ye(P) {
                    if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return P
                }

                function qt(P) {
                    return qt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
                        return w.__proto__ || Object.getPrototypeOf(w)
                    }, qt(P)
                }

                function rt(P, w, O) {
                    return w in P ? Object.defineProperty(P, w, {
                        value: O,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : P[w] = O, P
                }
                var Fn = (function(P) {
                    (function(k, E) {
                        if (typeof E != "function" && E !== null) throw new TypeError("Super expression must either be null or a function");
                        k.prototype = Object.create(E && E.prototype, {
                            constructor: {
                                value: k,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(k, "prototype", {
                            writable: !1
                        }), E && zn(k, E)
                    })(A, P);
                    var w, O, S, H, $, V = (H = A, $ = (function() {
                        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
                        if (typeof Proxy == "function") return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                        } catch {
                            return !1
                        }
                    })(), function() {
                        var k, E = qt(H);
                        if ($) {
                            var D = qt(this).constructor;
                            k = Reflect.construct(E, arguments, D)
                        } else k = E.apply(this, arguments);
                        return sl(this, k)
                    });

                    function A(k) {
                        var E;
                        (function(B, W) {
                            if (!(B instanceof W)) throw new TypeError("Cannot call a class as a function")
                        })(this, A), E = V.call(this, k);
                        var D = new Mn(k);
                        return D.flattenNodes(k.nodes), D.deserializeLists({
                            checked: k.checked,
                            expanded: k.expanded
                        }), E.state = {
                            id: k.id || "rct-".concat(u()),
                            model: D,
                            prevProps: k
                        }, E.onCheck = E.onCheck.bind(Ye(E)), E.onExpand = E.onExpand.bind(Ye(E)), E.onNodeClick = E.onNodeClick.bind(Ye(E)), E.onExpandAll = E.onExpandAll.bind(Ye(E)), E.onCollapseAll = E.onCollapseAll.bind(Ye(E)), E.combineMemorized = m()((function(B, W) {
                            return ke(ke({}, B), W)
                        })).bind(Ye(E)), E
                    }
                    return w = A, O = [{
                        key: "onCheck",
                        value: function(k) {
                            var E = this.props,
                                D = E.checkModel,
                                B = E.noCascade,
                                W = E.onCheck,
                                fe = this.state.model.clone(),
                                me = fe.getNode(k.value);
                            fe.toggleChecked(k, k.checked, D, B), W(fe.serializeList("checked"), ke(ke({}, me), k))
                        }
                    }, {
                        key: "onExpand",
                        value: function(k) {
                            var E = this.props.onExpand,
                                D = this.state.model.clone(),
                                B = D.getNode(k.value);
                            D.toggleNode(k.value, "expanded", k.expanded), E(D.serializeList("expanded"), ke(ke({}, B), k))
                        }
                    }, {
                        key: "onNodeClick",
                        value: function(k) {
                            (0, this.props.onClick)(ke(ke({}, this.state.model.getNode(k.value)), k))
                        }
                    }, {
                        key: "onExpandAll",
                        value: function() {
                            this.expandAllNodes()
                        }
                    }, {
                        key: "onCollapseAll",
                        value: function() {
                            this.expandAllNodes(!1)
                        }
                    }, {
                        key: "expandAllNodes",
                        value: function() {
                            var k = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0],
                                E = this.props.onExpand;
                            E(this.state.model.clone().expandAllNodes(k).serializeList("expanded"))
                        }
                    }, {
                        key: "determineShallowCheckState",
                        value: function(k, E) {
                            var D = this.state.model.getNode(k.value);
                            return D.isLeaf || E || k.children.length === 0 ? D.checked ? 1 : 0 : this.isEveryChildChecked(k) ? 1 : this.isSomeChildChecked(k) ? 2 : 0
                        }
                    }, {
                        key: "isEveryChildChecked",
                        value: function(k) {
                            var E = this;
                            return k.children.every((function(D) {
                                return E.state.model.getNode(D.value).checkState === 1
                            }))
                        }
                    }, {
                        key: "isSomeChildChecked",
                        value: function(k) {
                            var E = this;
                            return k.children.some((function(D) {
                                return E.state.model.getNode(D.value).checkState > 0
                            }))
                        }
                    }, {
                        key: "renderTreeNodes",
                        value: function(k) {
                            var E = this,
                                D = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                B = this.props,
                                W = B.expandDisabled,
                                fe = B.expandOnClick,
                                me = B.icons,
                                be = B.lang,
                                Le = B.noCascade,
                                Qe = B.onClick,
                                Un = B.onlyLeafCheckboxes,
                                st = B.optimisticToggle,
                                it = B.showNodeTitle,
                                Xt = B.showNodeIcon,
                                Ct = this.state,
                                al = Ct.id,
                                ns = Ct.model,
                                cl = A.defaultProps.icons,
                                ll = k.map((function(Ce) {
                                    var ul = Ce.value,
                                        Be = ns.getNode(Ce.value),
                                        dl = Be.isParent ? E.renderTreeNodes(Ce.children, Ce) : null;
                                    Be.checkState = E.determineShallowCheckState(Ce, Le);
                                    var fl = Un ? Be.isLeaf : Be.showCheckbox;
                                    return !D.value || ns.getNode(D.value).expanded ? _().createElement(nl, {
                                        key: ul,
                                        checked: Be.checkState,
                                        className: Ce.className,
                                        disabled: Be.disabled,
                                        expandDisabled: W,
                                        expandOnClick: fe,
                                        expanded: Be.expanded,
                                        icon: Ce.icon,
                                        icons: E.combineMemorized(cl, me),
                                        label: Ce.label,
                                        lang: be,
                                        optimisticToggle: st,
                                        isLeaf: Be.isLeaf,
                                        isParent: Be.isParent,
                                        showCheckbox: fl,
                                        showNodeIcon: Xt,
                                        title: it ? Ce.title || Ce.label : Ce.title,
                                        treeId: al,
                                        value: Ce.value,
                                        onCheck: E.onCheck,
                                        onClick: Qe && E.onNodeClick,
                                        onExpand: E.onExpand
                                    }, dl) : null
                                }));
                            return _().createElement("ol", null, ll)
                        }
                    }, {
                        key: "renderExpandAll",
                        value: function() {
                            var k = this.props,
                                E = k.icons,
                                D = E.expandAll,
                                B = E.collapseAll,
                                W = k.lang;
                            return k.showExpandAll ? _().createElement("div", {
                                className: "rct-options"
                            }, _().createElement(q, {
                                className: "rct-option rct-option-expand-all",
                                title: W.expandAll,
                                onClick: this.onExpandAll
                            }, D), _().createElement(q, {
                                className: "rct-option rct-option-collapse-all",
                                title: W.collapseAll,
                                onClick: this.onCollapseAll
                            }, B)) : null
                        }
                    }, {
                        key: "renderHiddenInput",
                        value: function() {
                            var k = this.props,
                                E = k.name,
                                D = k.nameAsArray;
                            return E === void 0 ? null : D ? this.renderArrayHiddenInput() : this.renderJoinedHiddenInput()
                        }
                    }, {
                        key: "renderArrayHiddenInput",
                        value: function() {
                            var k = this.props,
                                E = k.checked,
                                D = k.name;
                            return E.map((function(B) {
                                var W = "".concat(D, "[]");
                                return _().createElement("input", {
                                    key: B,
                                    name: W,
                                    type: "hidden",
                                    value: B
                                })
                            }))
                        }
                    }, {
                        key: "renderJoinedHiddenInput",
                        value: function() {
                            var k = this.props,
                                E = k.checked,
                                D = k.name,
                                B = E.join(",");
                            return _().createElement("input", {
                                name: D,
                                type: "hidden",
                                value: B
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var k, E = this.props,
                                D = E.direction,
                                B = E.disabled,
                                W = E.iconsClass,
                                fe = E.nodes,
                                me = E.nativeCheckboxes,
                                be = this.state.id,
                                Le = this.renderTreeNodes(fe),
                                Qe = c()((rt(k = {
                                    "react-checkbox-tree": !0,
                                    "rct-disabled": B
                                }, "rct-icons-".concat(W), !0), rt(k, "rct-native-display", me), rt(k, "rct-direction-rtl", D === "rtl"), k));
                            return _().createElement("div", {
                                className: Qe,
                                id: be
                            }, this.renderExpandAll(), this.renderHiddenInput(), Le)
                        }
                    }], S = [{
                        key: "getDerivedStateFromProps",
                        value: function(k, E) {
                            var D = E.model,
                                B = E.prevProps,
                                W = k.disabled,
                                fe = k.id,
                                me = k.nodes,
                                be = ke(ke({}, E), {}, {
                                    prevProps: k
                                });
                            return D.setProps(k), d()(B.nodes, me) && B.disabled === W || (D.reset(), D.flattenNodes(me)), fe !== null && (be = ke(ke({}, be), {}, {
                                id: fe
                            })), D.deserializeLists({
                                checked: k.checked,
                                expanded: k.expanded
                            }), be
                        }
                    }], O && Jr(w.prototype, O), S && Jr(w, S), Object.defineProperty(w, "prototype", {
                        writable: !1
                    }), A
                })(_().Component);

                function es(P) {
                    return (function(w) {
                        if (Array.isArray(w)) return Kn(w)
                    })(P) || (function(w) {
                        if (typeof Symbol < "u" && w[Symbol.iterator] != null || w["@@iterator"] != null) return Array.from(w)
                    })(P) || (function(w, O) {
                        if (w) {
                            if (typeof w == "string") return Kn(w, O);
                            var S = Object.prototype.toString.call(w).slice(8, -1);
                            return S === "Object" && w.constructor && (S = w.constructor.name), S === "Map" || S === "Set" ? Array.from(w) : S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S) ? Kn(w, O) : void 0
                        }
                    })(P) || (function() {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    })()
                }

                function Kn(P, w) {
                    (w == null || w > P.length) && (w = P.length);
                    for (var O = 0, S = new Array(w); O < w; O++) S[O] = P[O];
                    return S
                }

                function ts(P, w) {
                    var O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                    if (O > w) return [];
                    var S = [];
                    return P.forEach((function(H) {
                        H.children && (S = [].concat(es(S), [H.value], es(ts(H.children, w, O + 1))))
                    })), S
                }
                rt(Fn, "propTypes", {
                    nodes: p().arrayOf(rl).isRequired,
                    checkModel: p().oneOf([Z.LEAF, Z.ALL]),
                    checked: Gr,
                    direction: p().string,
                    disabled: p().bool,
                    expandDisabled: p().bool,
                    expandOnClick: p().bool,
                    expanded: Gr,
                    icons: Wr,
                    iconsClass: p().string,
                    id: p().string,
                    lang: qr,
                    name: p().string,
                    nameAsArray: p().bool,
                    nativeCheckboxes: p().bool,
                    noCascade: p().bool,
                    onlyLeafCheckboxes: p().bool,
                    optimisticToggle: p().bool,
                    showExpandAll: p().bool,
                    showNodeIcon: p().bool,
                    showNodeTitle: p().bool,
                    onCheck: p().func,
                    onClick: p().func,
                    onExpand: p().func
                }), rt(Fn, "defaultProps", {
                    checkModel: Z.LEAF,
                    checked: [],
                    direction: "ltr",
                    disabled: !1,
                    expandDisabled: !1,
                    expandOnClick: !1,
                    expanded: [],
                    icons: {
                        check: _().createElement("span", {
                            className: "rct-icon rct-icon-check"
                        }),
                        uncheck: _().createElement("span", {
                            className: "rct-icon rct-icon-uncheck"
                        }),
                        halfCheck: _().createElement("span", {
                            className: "rct-icon rct-icon-half-check"
                        }),
                        expandClose: _().createElement("span", {
                            className: "rct-icon rct-icon-expand-close"
                        }),
                        expandOpen: _().createElement("span", {
                            className: "rct-icon rct-icon-expand-open"
                        }),
                        expandAll: _().createElement("span", {
                            className: "rct-icon rct-icon-expand-all"
                        }),
                        collapseAll: _().createElement("span", {
                            className: "rct-icon rct-icon-collapse-all"
                        }),
                        parentClose: _().createElement("span", {
                            className: "rct-icon rct-icon-parent-close"
                        }),
                        parentOpen: _().createElement("span", {
                            className: "rct-icon rct-icon-parent-open"
                        }),
                        leaf: _().createElement("span", {
                            className: "rct-icon rct-icon-leaf"
                        })
                    },
                    iconsClass: "fa4",
                    id: null,
                    lang: {
                        collapseAll: "Collapse all",
                        expandAll: "Expand all",
                        toggle: "Toggle"
                    },
                    name: void 0,
                    nameAsArray: !1,
                    nativeCheckboxes: !1,
                    noCascade: !1,
                    onlyLeafCheckboxes: !1,
                    optimisticToggle: !0,
                    showExpandAll: !1,
                    showNodeIcon: !0,
                    showNodeTitle: !1,
                    onCheck: function() {},
                    onClick: null,
                    onExpand: function() {}
                });
                const il = Fn
            })(), f
        })()))
    })(io)), io.exports
}
var Ud = Kd();
const Hd = yl(Ud);

function $d(e, t, n = !0) {
    const o = document.createElement("a");
    o.href = t, o.target = n ? "_blank" : "_self", o.download = e, o.style.display = "none", document.body.appendChild(o), o.click(), o.remove()
}

function Ta(e, t, n = "application/zip") {
    const o = new Blob([t], {
        type: n
    });
    $d(e, URL.createObjectURL(o))
}

function Vd() {
    const e = ne(),
        t = M(C => C.dos.ci),
        n = ge(),
        [o, r] = ae(0),
        [s, f] = ae(null),
        [a, c] = ae([]),
        [i, d] = ae([]),
        [l, m] = ae(null),
        [u, v] = ae(!1);

    function p(C) {
        f(C), r(Math.round(Ra(C) / 1024 / 1024 * 100) / 100)
    }
    te(() => {
        if (n.ci === null || !t) return;
        let C = !1;
        return n.ci.fsTree().then(x => {
            C || p(ei(x))
        }).catch(x => {
            console.error(x), C || p(null)
        }), () => {
            C = !0
        }
    }, [t]);

    function g(C, x) {
        c(C)
    }

    function _(C, x) {
        const T = C.indexOf(x.value);
        x.checked && T === -1 ? C.push(x.value) : !x.checked && T !== -1 && C.splice(T, 1), d(C)
    }
    async function y() {
        if (p(null), n.ci === null || !t) return;
        const C = await n.ci.fsTree();
        p(ei(C))
    }
    async function b() {
        const C = n.ci;
        if (C !== null) {
            try {
                m("DELETE_OPERATION");
                for (let x of i) x.startsWith("./") && (x = x.slice(2)), await C.fsDeleteFile(x)
            } finally {
                m(null)
            }
            d([]), await y()
        }
    }
    return h("div", {
        class: "editor-fs-frame frame-root items-start px-4",
        children: [(u || l !== null) && h("div", {
            class: "card card-bordered bg-base-100 shadow-xl w-full",
            children: h("div", {
                class: "card-body",
                children: [h("div", {
                    class: "card-title",
                    children: e(u ? "please_wait" : "uploading_file")
                }), h("span", {
                    class: "break-words",
                    children: u ? e("making_bundle") : l
                })]
            })
        }), !u && l === null && s && h("div", {
            className: "fs-tree-view",
            children: [h(Wd, {
                onRefresh: y,
                onUploadingFile: m,
                onMakingBundle: v,
                onRemoveFile: b,
                canDelete: i.length > 0
            }), h("div", {
                class: "bg-base-200 px-2 py-1 text-right",
                children: [e("size"), ": ", o, " Mb"]
            }), h("div", {
                class: "fs-tree",
                children: h(Hd, {
                    icons: {
                        expandOpen: h(qd, {}),
                        expandClose: h(Xd, {})
                    },
                    iconsClass: "icon",
                    nativeCheckboxes: !1,
                    onlyLeafCheckboxes: !1,
                    nodes: s,
                    checked: i,
                    onCheck: _,
                    expanded: a,
                    onExpand: g
                })
            })]
        })]
    })
}

function ei(e) {
    const t = [];
    for (const n of e.nodes?.sort(Ia) || []) t.push(ja(n, "."));
    return t
}

function ja(e, t) {
    const n = t + "/" + e.name,
        o = {
            label: e.name,
            value: n,
            fsNode: e
        };
    if (e.nodes !== null) {
        const r = e.nodes.sort(Ia).map(s => ja(s, n));
        o.children = r
    }
    return o
}

function Wd(e) {
    const t = ne(),
        n = Me(null),
        o = Me(null),
        r = De(),
        s = ge(),
        {
            onRefresh: f,
            onUploadingFile: a,
            onMakingBundle: c,
            onRemoveFile: i,
            canDelete: d
        } = e;
    te(() => {
        n.current !== null && (n.current.setAttribute("directory", ""), n.current.setAttribute("webkitdirectory", ""))
    }, [n]);

    function l(p) {
        const g = (p ? o : n).current;
        g !== null && g.click()
    }
    async function m(p) {
        const g = s.ci,
            _ = p.target.files;
        if (!(g === null || _ === null)) {
            try {
                for (const y of _) {
                    a(y.name);
                    const b = (y.webkitRelativePath ?? "").split("/");
                    b.shift();
                    const C = b.join("/");
                    await g.fsWriteFile(C.length == 0 ? y.name : C, y.stream())
                }
            } finally {
                a(null)
            }
            await f()
        }
    }
    async function u() {
        const p = s.ci;
        if (!(p === null || !window.confirm(t("fs_restart")))) {
            c(!0);
            try {
                const g = await p.persist(!1);
                g && Ld(g, !0, r)
            } finally {
                c(!1)
            }
        }
    }
    async function v() {
        const p = s.ci;
        if (p !== null) {
            c(!0);
            try {
                const g = await p.persist(!1);
                g && Ta("bundle.jsdos", g)
            } finally {
                c(!1)
            }
        }
    }
    return h("div", {
        class: "h-6 flex flex-row",
        children: [h("input", {
            class: "hidden",
            type: "file",
            multiple: !0,
            ref: n,
            onChange: m
        }), h("input", {
            class: "hidden",
            type: "file",
            multiple: !0,
            ref: o,
            onChange: m
        }), h("button", {
            class: "refresh btn-xs rounded-none",
            onClick: f,
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                })
            })
        }), h("button", {
            class: "add-file btn-xs rounded-none",
            onClick: () => l(!0),
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                })
            })
        }), h("button", {
            class: "add-dir btn-xs rounded-none",
            onClick: () => l(!1),
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                })
            })
        }), d && h("button", {
            class: "btn-xs rounded-none text-error",
            onClick: () => i(),
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                })
            })
        }), h("div", {
            class: "flex-grow"
        }), h("button", {
            class: "download btn-xs rounded-none",
            onClick: v,
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                })
            })
        }), h("button", {
            class: "restart btn-xs rounded-none",
            onClick: u,
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
                })
            })
        })]
    })
}

function Ia(e, t) {
    return e.nodes !== null && t.nodes !== null ? t.name.localeCompare(e.name) : e.nodes === null ? 1 : -1
}

function qd() {
    return h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-4 h-4 mr-2",
        children: h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        })
    })
}

function Xd() {
    return h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor",
        class: "w-4 h-4 mr-2",
        children: h("path", {
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            d: "M8.25 4.5l7.5 7.5-7.5 7.5"
        })
    })
}

function Ra(e) {
    if (!e) return 0;
    let t = 0;
    for (const n of e) n.fsNode.size !== null ? t += n.fsNode.size : t += Ra(n.children);
    return t
}

function Ie(e) {
    const t = Me(null);
    te(() => {
        t === null || t.current === null || (t.current.indeterminate = e.intermediate)
    }, [t, e.intermediate]);

    function n() {
        e.onChange && e.onChange(e.checked !== !0)
    }
    return h("div", {
        className: e.class + " form-control option",
        onClick: n,
        children: h("label", {
            className: "label cursor-pointer",
            children: [h("span", {
                className: "label-text mr-6",
                children: e.label
            }), h("input", {
                ref: t,
                checked: e.checked === !0,
                type: "checkbox",
                className: "toggle " + (e.checked ? " toggle-primary " : "") + e.toggleClass,
                disabled: e.disabled === !0
            })]
        })
    })
}

function Gd() {
    const e = ne(),
        t = Q(),
        n = M(o => o.ui.editor);
    return h(Ie, {
        class: "mt-4",
        label: e("editor"),
        checked: n,
        onChange: o => t(K.actions.setEditor(o))
    })
}

function La() {
    const e = ne(),
        t = Q(),
        n = M(o => o.dos.mouseCapture);
    return h(Ie, {
        class: "mt-4",
        label: e("mouse_lock"),
        checked: n,
        onChange: o => t(I.actions.mouseCapture(o))
    })
}

function Ba() {
    const e = ne(),
        t = Q(),
        n = M(o => !o.dos.noCursor);
    return h(Ie, {
        class: "mt-4",
        label: e("system_cursor"),
        checked: n,
        onChange: o => t(I.actions.noCursor(!o))
    })
}

function Na() {
    const e = ne(),
        t = Q(),
        n = M(o => o.dos.mobileControls);
    return h(Ie, {
        class: "mt-4",
        label: e("mobile_controls"),
        checked: n,
        onChange: o => t(I.actions.mobileControls(o))
    })
}

function za() {
    const e = ne(),
        t = Q(),
        n = M(o => o.dos.mirroredControls);
    return h(Ie, {
        class: "mt-4",
        label: e("mirrored_controls"),
        checked: n,
        onChange: o => t(I.actions.mirroredControls(o))
    })
}

function Yd() {
    const e = ne(),
        t = Q(),
        n = M(r => r.dos.paused),
        o = M(r => r.ui.window) !== "run";
    return h(Ie, {
        class: "mt-4",
        label: e("pause"),
        checked: n,
        disabled: o,
        onChange: r => t(I.actions.paused(r))
    })
}

function Qd() {
    const e = ne(),
        t = Q(),
        n = M(f => f.dos.worker),
        o = M(f => f.dos.backendHardware),
        r = M(f => f.ui.window) === "run",
        s = ge();
    return o && s.options.backendHardware ? null : h(Ie, {
        class: "mt-4",
        label: e("worker"),
        checked: n,
        disabled: r,
        onChange: f => t(I.actions.dosWorker(f))
    })
}

function Zd() {
    const e = ne(),
        t = Q(),
        n = M(o => o.dos.offscreenCanvas);
    return h(Ie, {
        class: "mt-4",
        label: e("offscreen_canvas"),
        checked: n,
        onChange: o => t(I.actions.offscreenCanvas(o))
    })
}

function Jd() {
    const e = Q(),
        t = M(n => n.dos.startIpxServer);
    return h(Ie, {
        class: "mt-4",
        label: "IPX Server",
        checked: t,
        onChange: n => e(I.actions.startIpxServer(n))
    })
}

function ef() {
    const e = ne(),
        t = Q(),
        n = M(r => r.dos.backendHardware);
    return ge().options.backendHardware ? h(Ie, {
        class: "mt-4",
        label: e("hardware"),
        checked: n,
        onChange: r => t(I.actions.dosBackendHardware(r))
    }) : null
}

function tf(e) {
    const t = ne(),
        n = e.multiline === !0;

    function o(r) {
        e.onSelect !== void 0 && e.onSelect(r.currentTarget.value)
    }
    return h("div", {
        class: e.class + " option flex " + (n ? "flex-col" : "flex-row items-center"),
        children: [h("div", {
            class: n ? "mb-2" : "mr-4",
            children: e.label
        }), h("div", {
            class: "flex-grow",
            children: h("select", {
                class: e.selectClass ? e.selectClass : n ? "w-full" : "w-28",
                onChange: o,
                disabled: e.disabled === !0,
                children: e.values.map(r => h("option", {
                    selected: r === e.selected,
                    value: r,
                    children: t(r)
                }))
            })
        })]
    })
}

function nf(e) {
    const t = M(n => n.dos.backendLocked);
    return h(wt, {
        multiline: e.multiline,
        label: "emulation_backend",
        values: [...wd],
        disabled: t,
        selector: n => n.dos.backend,
        dispatch: n => (ie.setItem("backend", n), I.actions.dosBackend(n))
    })
}

function of(e) {
    const t = M(n => n.ui.window) === "run";
    return h(wt, {
        multiline: e.multiline,
        label: "render_backend",
        values: [...xd],
        disabled: t,
        selector: n => n.dos.renderBackend,
        dispatch: n => I.actions.renderBackend(n)
    })
}

function Fa(e) {
    return h(wt, {
        label: "render_aspect",
        multiline: e.multiline,
        values: [...kd],
        selector: t => t.dos.renderAspect,
        dispatch: t => I.actions.renderAspect(t)
    })
}

function rf(e) {
    return h(wt, {
        label: "Sockdrive Preload",
        multiline: e.multiline,
        values: [...Cd],
        selector: t => t.dos.sockdrivePreload,
        dispatch: t => I.actions.sockdrivePreload(t)
    })
}

function sf(e) {
    return h(wt, {
        label: "image_rendering",
        multiline: e.multiline,
        values: [...Sd],
        selector: t => t.dos.imageRendering,
        dispatch: t => I.actions.imageRendering(t)
    })
}

function Ka(e) {
    return h(wt, {
        class: e.class,
        label: "theme",
        values: [...nd],
        selector: t => t.ui.theme,
        dispatch: t => K.actions.theme(t),
        multiline: e.multiline
    })
}

function wt(e) {
    const t = ne(),
        n = M(e.selector),
        o = Q();

    function r(s) {
        o(e.dispatch(s))
    }
    return h(tf, {
        class: "mt-4 " + e.class,
        selectClass: e.selectClass,
        disabled: e.disabled,
        multiline: e.multiline,
        label: t(e.label),
        selected: n,
        values: e.values,
        onSelect: r
    })
}

function Sn(e) {
    const t = Me(null),
        n = Me(null),
        o = e.vertical ?? !1,
        r = e.bgClass ?? "bg-base-200";
    te(() => {
        if (t?.current === null) return;
        const u = t.current;
        let v = !1;

        function p(b) {
            const C = u.getBoundingClientRect(),
                x = o ? 1 - Math.min(1, Math.max(0, (b.clientY - C.top) / C.height)) : Math.min(1, Math.max(0, (b.clientX - C.left) / C.width));
            e.onChange(x)
        }

        function g(b) {
            v = !0, p(b)
        }

        function _(b) {
            v && p(b)
        }

        function y(b) {
            v = !1
        }
        return u.addEventListener("pointerdown", g), u.addEventListener("pointermove", _), u.addEventListener("pointerup", y), u.addEventListener("pointercancel", y), u.addEventListener("pointerleave", y), () => {
            u.removeEventListener("pointerdown", g), u.removeEventListener("pointermove", _), u.removeEventListener("pointerup", y), u.removeEventListener("pointercancel", y), u.removeEventListener("pointerleave", y)
        }
    }, [t, o]);
    const s = o ? "" : "rounded-full",
        f = o ? "items-start" : "items-center",
        a = Math.min(Math.max(0, e.value * 100), 100),
        c = o ? "flex-col" : "flex-row",
        i = o ? "h-full" : "w-full",
        d = o ? "w-4" : "h-16",
        l = o ? "w-2" : "h-2",
        m = o ? {
            active: {
                bottom: 0,
                height: "calc(" + a + "% + 12px)"
            },
            point: {
                left: "-8px",
                bottom: "calc(" + a + "% - 12px)"
            }
        } : {
            active: {
                left: 0,
                width: a + "%"
            },
            point: {
                left: "calc(" + a + "% - 12px)"
            }
        };
    return h("div", {
        class: e.class + " slider option " + i,
        children: [e.label && h("div", {
            class: "label w-full flex justify-between gap-2 " + c,
            children: [h("p", {
                children: e.label
            }), h("p", {
                children: e.value.toFixed(2)
            })]
        }), h("div", {
            class: "touch " + d + " " + i + " " + c + " " + f,
            ref: t,
            children: [h("div", {
                class: "bg " + l + " " + i + " " + r + " " + s
            }), h("div", {
                class: "bg-active " + l + " " + s,
                style: m.active
            }), h("div", {
                class: "point " + e.pointClass,
                ref: n,
                style: m.point,
                children: e.children
            })]
        })]
    })
}

function Ua(e) {
    const t = ne(),
        n = M(r => r.dos.mouseSensitivity),
        o = Q();
    return h(Sn, {
        class: e.class,
        label: t("mouse_sensitivity"),
        value: n,
        onChange: r => o(I.actions.mouseSensitivity(r))
    })
}

function Ha(e) {
    const t = ne(),
        n = M(r => r.dos.scaleControls),
        o = Q();
    return h(Sn, {
        class: e.class,
        label: t("scale_controls"),
        value: n,
        onChange: r => o(I.actions.scaleControls(r))
    })
}

function $a(e) {
    const t = ne(),
        n = M(r => r.dos.volume),
        o = Q();
    return h(Sn, {
        class: e.class,
        label: t("volume"),
        value: n,
        onChange: r => o(I.actions.volume(r))
    })
}
const nr = 0,
    Pn = 48,
    Va = 49,
    Wa = 50,
    qa = 51,
    Xa = 52,
    Ga = 53,
    Ya = 54,
    Qa = 55,
    Za = 56,
    or = 57,
    Ja = 65,
    ec = 66,
    tc = 67,
    nc = 68,
    oc = 69,
    rc = 70,
    sc = 71,
    ic = 72,
    ac = 73,
    cc = 74,
    lc = 75,
    uc = 76,
    dc = 77,
    fc = 78,
    pc = 79,
    hc = 80,
    mc = 81,
    vc = 82,
    gc = 83,
    _c = 84,
    yc = 85,
    bc = 86,
    wc = 87,
    xc = 88,
    kc = 89,
    Cc = 90,
    rr = 290,
    sr = 291,
    ir = 292,
    ar = 293,
    cr = 294,
    lr = 295,
    ur = 296,
    dr = 297,
    fr = 298,
    pr = 299,
    hr = 300,
    mr = 301,
    vr = 320,
    gr = 321,
    _r = 322,
    yr = 323,
    br = 324,
    wr = 325,
    xr = 326,
    kr = 327,
    Cr = 328,
    Sr = 329,
    af = 330,
    Sc = 331,
    Pc = 332,
    cf = 333,
    lf = 334,
    uf = 335,
    Pr = 256,
    En = 258,
    Er = 259,
    Or = 257,
    Mr = 32,
    _t = 342,
    Ec = 346,
    Ht = 341,
    Oc = 345,
    Te = 340,
    Mc = 344,
    Ac = 280,
    Dc = 281,
    Tc = 282,
    jc = 96,
    _n = 45,
    Nt = 61,
    Ic = 92,
    yn = 91,
    bn = 93,
    wn = 59,
    Ar = 39,
    Dr = 46,
    Tr = 44,
    jr = 47,
    df = 283,
    Rc = 284,
    Lc = 260,
    Ir = 268,
    Rr = 266,
    On = 261,
    Lr = 269,
    Br = 267,
    Nr = 263,
    zr = 265,
    Fr = 264,
    Kr = 262,
    ff = 348,
    pf = {
        8: Er,
        9: En,
        13: Or,
        16: Te,
        17: Ht,
        18: _t,
        19: Rc,
        27: Pr,
        32: Mr,
        33: Rr,
        34: Br,
        35: Lr,
        36: Ir,
        37: Nr,
        38: zr,
        39: Kr,
        40: Fr,
        45: Lc,
        46: On,
        48: Pn,
        49: Va,
        50: Wa,
        51: qa,
        52: Xa,
        53: Ga,
        54: Ya,
        55: Qa,
        56: Za,
        57: or,
        59: wn,
        64: Nt,
        65: Ja,
        66: ec,
        67: tc,
        68: nc,
        69: oc,
        70: rc,
        71: sc,
        72: ic,
        73: ac,
        74: cc,
        75: lc,
        76: uc,
        77: dc,
        78: fc,
        79: pc,
        80: hc,
        81: mc,
        82: vc,
        83: gc,
        84: _c,
        85: yc,
        86: bc,
        87: wc,
        88: xc,
        89: kc,
        90: Cc,
        91: yn,
        93: bn,
        96: vr,
        97: gr,
        98: _r,
        99: yr,
        100: br,
        101: wr,
        102: xr,
        103: kr,
        104: Cr,
        105: Sr,
        106: Pc,
        111: Sc,
        112: rr,
        113: sr,
        114: ir,
        115: ar,
        116: cr,
        117: lr,
        118: ur,
        119: dr,
        120: fr,
        121: pr,
        122: hr,
        123: mr,
        144: Tc,
        145: Dc,
        173: _n,
        186: wn,
        187: Nt,
        188: Tr,
        189: _n,
        190: Dr,
        191: jr,
        192: jc,
        219: yn,
        220: Ic,
        221: bn,
        222: Ar
    },
    ti = {
        KBD_NONE: nr,
        KBD_0: Pn,
        KBD_1: Va,
        KBD_2: Wa,
        KBD_3: qa,
        KBD_4: Xa,
        KBD_5: Ga,
        KBD_6: Ya,
        KBD_7: Qa,
        KBD_8: Za,
        KBD_9: or,
        KBD_a: Ja,
        KBD_b: ec,
        KBD_c: tc,
        KBD_d: nc,
        KBD_e: oc,
        KBD_f: rc,
        KBD_g: sc,
        KBD_h: ic,
        KBD_i: ac,
        KBD_j: cc,
        KBD_k: lc,
        KBD_l: uc,
        KBD_m: dc,
        KBD_n: fc,
        KBD_o: pc,
        KBD_p: hc,
        KBD_q: mc,
        KBD_r: vc,
        KBD_s: gc,
        KBD_t: _c,
        KBD_u: yc,
        KBD_v: bc,
        KBD_w: wc,
        KBD_x: xc,
        KBD_y: kc,
        KBD_z: Cc,
        KBD_f1: rr,
        KBD_f2: sr,
        KBD_f3: ir,
        KBD_f4: ar,
        KBD_f5: cr,
        KBD_f6: lr,
        KBD_f7: ur,
        KBD_f8: dr,
        KBD_f9: fr,
        KBD_f10: pr,
        KBD_f11: hr,
        KBD_f12: mr,
        KBD_kp0: vr,
        KBD_kp1: gr,
        KBD_kp2: _r,
        KBD_kp3: yr,
        KBD_kp4: br,
        KBD_kp5: wr,
        KBD_kp6: xr,
        KBD_kp7: kr,
        KBD_kp8: Cr,
        KBD_kp9: Sr,
        KBD_kpperiod: af,
        KBD_kpdivide: Sc,
        KBD_kpmultiply: Pc,
        KBD_kpminus: cf,
        KBD_kpplus: lf,
        KBD_kpenter: uf,
        KBD_esc: Pr,
        KBD_tab: En,
        KBD_backspace: Er,
        KBD_enter: Or,
        KBD_space: Mr,
        KBD_leftalt: _t,
        KBD_rightalt: Ec,
        KBD_leftctrl: Ht,
        KBD_rightctrl: Oc,
        KBD_leftshift: Te,
        KBD_rightshift: Mc,
        KBD_capslock: Ac,
        KBD_scrolllock: Dc,
        KBD_numlock: Tc,
        KBD_grave: jc,
        KBD_minus: _n,
        KBD_equals: Nt,
        KBD_backslash: Ic,
        KBD_leftbracket: yn,
        KBD_rightbracket: bn,
        KBD_semicolon: wn,
        KBD_quote: Ar,
        KBD_period: Dr,
        KBD_comma: Tr,
        KBD_slash: jr,
        KBD_printscreen: df,
        KBD_pause: Rc,
        KBD_insert: Lc,
        KBD_home: Ir,
        KBD_pageup: Rr,
        KBD_delete: On,
        KBD_end: Lr,
        KBD_pagedown: Br,
        KBD_left: Nr,
        KBD_up: zr,
        KBD_down: Fr,
        KBD_right: Kr,
        KBD_extra_lt_gt: ff
    },
    hf = {
        16: {
            1: Te,
            2: Mc
        },
        17: {
            1: Ht,
            2: Oc
        },
        18: {
            1: _t,
            2: Ec
        }
    };

function Ao(e, t) {
    return hf[e]?.[t] ?? pf[e] ?? 0
}

function mf(e) {
    return h("div", {
        class: "settings-frame frame-root items-start pl-4",
        children: [h(Yd, {}), h(Ba, {}), h(La, {}), h(Na, {}), h(za, {}), h(Ua, {
            class: "mt-4"
        }), h(Ha, {}), h($a, {}), h(vf, {}), h(Fa, {
            multiline: !0
        }), h(sf, {
            multiline: !0
        }), h(Ka, {
            multiline: !0
        })]
    })
}

function vf() {
    const e = ne(),
        t = ge();
    return h("div", {
        class: "flex flex-col gap-2",
        children: [h("label", {
            children: e("special_keys")
        }), h("div", {
            class: "join",
            children: [h("button", {
                class: "btn btn-sm btn-ghost join-item",
                onClick: () => {
                    t.ci?.simulateKeyPress(_t, En)
                },
                children: "Alt + Tab"
            }), h("button", {
                class: "btn btn-sm btn-ghost join-item",
                onClick: () => {
                    t.ci?.simulateKeyPress(Ht, _t, On)
                },
                children: "Ctrl + Alt + Del"
            })]
        })]
    })
}

function gf() {
    const e = ge(),
        t = M(d => d.dos.backend),
        n = M(d => d.dos.backendHardware) && e.options.backendHardware,
        o = M(d => d.dos.emuVersion),
        r = M(d => d.dos.ciStartedAt),
        s = M(d => d.dos.stats),
        f = Math.round(M(d => d.dos.stats.cyclesPerMs) / 1e3),
        a = M(d => d.dos.startIpxServer),
        c = Q(),
        i = ne();
    return h("div", {
        class: "stats-frame frame-root items-start px-4",
        children: [h("div", {
            class: "text-center mb-2 text-xs",
            children: ["js-dos/emu: ", "8.3.20", "/", o]
        }), h("div", {
            class: "w-full overflow-x-auto",
            children: h("table", {
                class: "table table-compact w-full",
                children: [h("thead", {
                    children: h("tr", {
                        children: [h("th", {
                            children: "Metric"
                        }), h("th", {
                            children: "Value"
                        })]
                    })
                }), h("tbody", {
                    children: [h("tr", {
                        children: [h("td", {
                            children: "Emulation"
                        }), h("td", {
                            children: t + " " + (n ? "(WS)" : "(WA)")
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Offscreen Canvas"
                        }), h("td", {
                            children: s.offscreenCanvas ? "Yes" : "No"
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Glide GL (3D)"
                        }), h("td", {
                            children: s.glfx ? "Yes" : "No"
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Uptime"
                        }), h("td", {
                            children: [Math.round((Date.now() - r) / 100) / 10, " s"]
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Cycles/ms"
                        }), f <= 0 && h("td", {
                            children: "~ K"
                        }), f > 0 && f <= 1e3 && h("td", {
                            children: [f, " K"]
                        }), f > 1e3 && h("td", {
                            children: [Math.round(f / 1e3), " KK"]
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "NonSkipSleep COUNT/s"
                        }), h("td", {
                            children: s.nonSkippableSleepPreSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Sleep COUNT/s"
                        }), h("td", {
                            children: s.sleepPerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Sleep TIME/s"
                        }), h("td", {
                            children: s.sleepTimePerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Msg FRAME/s"
                        }), h("td", {
                            children: s.framePerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Msg SOUND/s"
                        }), h("td", {
                            children: s.soundPerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Msg SENT/s"
                        }), h("td", {
                            children: s.msgSentPerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Msg RECV/s"
                        }), h("td", {
                            children: s.msgRecvPerSec
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Net Id"
                        }), h("td", {
                            children: [a && h("div", {
                                class: "flex items-center gap-2 justify-between",
                                children: [e.net?.peerId ?? "-", h("button", {
                                    class: "btn btn-sm btn-ghost btn-square",
                                    onClick: () => {
                                        navigator.clipboard.writeText((e.net?.peerId ?? "-").toString()), c(K.actions.showToast({
                                            message: i("copied"),
                                            intent: "success"
                                        }))
                                    },
                                    children: h("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "size-4",
                                        children: h("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                                        })
                                    })
                                })]
                            }), !a && h("p", {
                                children: "-"
                            })]
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Net SENT"
                        }), h("td", {
                            children: [Math.round(s.netSent / 1024 * 100) / 100, "Kb"]
                        })]
                    }), h("tr", {
                        children: [h("td", {
                            children: "Net RECV"
                        }), h("td", {
                            children: [Math.round(s.netRecv / 1024 * 100) / 100, "Kb"]
                        })]
                    }), s.driveIo.map((d, l) => h(pe, {
                        children: [h("tr", {
                            children: [h("td", {
                                children: ["HDD ", l == 0 ? "C:" : "D:"]
                            }), h("td", {
                                children: [d.url.substring(d.url.lastIndexOf("/") + 1), " -", Math.round(d.read * 100 / d.total), "%"]
                            })]
                        }), h("tr", {
                            children: [h("td", {
                                children: "Size"
                            }), h("td", {
                                children: [Math.round(d.total / 1024 / 1024), " Mb ", h("br", {}), Math.round(d.write / 1024), " Kb"]
                            })]
                        })]
                    }))]
                })]
            })
        })]
    })
}
const Ot = document.createElement("input");
Ot.type = "file";

function _f(e) {
    const t = () => {
        Ot.removeEventListener("change", t), e(Ot)
    };
    Ot.addEventListener("change", t), Ot.click()
}

function yf() {
    const e = M(t => t.dos.emuVersion);
    return h("div", {
        class: "pre-run-window",
        children: [h(Bc, {}), h(wf, {}), h("span", {
            class: "mt-4 bottom-3 text-ellipsis overflow-hidden text-sm text-neutral/80",
            children: ["js-", "8.3.20", "/emu-", e.substring(0, e.indexOf(" "))]
        })]
    })
}

function bf() {
    const e = ne(),
        t = ge(),
        [n, o] = ae(!1),
        r = t.loadedBundle?.bundleUrl,
        s = t.loadedBundle?.bundleChangesUrl,
        f = t.loadedBundle?.appliedBundleChanges ?? null,
        a = t.loadedBundle?.bundleChanges ?? f,
        c = a !== null,
        i = M(v => v.auth.account),
        d = De(),
        l = Q();
    if (r === null || s === null) return null;
    if (n) return h("span", {
        class: "loading loading-spinner loading-md"
    });
    const m = h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: "padding: 2px",
        viewBox: "0 0 16 16",
        "enable-background": "new 0 0 16 16",
        fill: "currentColor",
        class: "w-4 h-4 ",
        children: h("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
        })
    });
    if (c) return h("div", {
        class: "flex flex-row items-baseline gap-1",
        children: [h("p", {
            class: "text-accent",
            children: e("changes_loaded")
        }), h("button", {
            class: "btn btn-ghost btn-xs text-accent underline self-center",
            onClick: () => {
                Ta("changes.bin", a, "application/octet-stream")
            },
            children: [m, e("download")]
        }), h("button", {
            class: "btn btn-ghost btn-xs underline -ml-2",
            onClick: () => {
                window.confirm(e("delete_changes_confirm")) && (o(!0), wa().then(async v => {
                    await v.del(s), f !== null && await Sa(f, async (p, g) => {
                        const _ = await xa(p);
                        await _.del(0), _.close()
                    }), tr(i, null) && s && await fetch(cd + "?bundleUrl=" + encodeURIComponent(s)), await Bt(r, d)
                }).catch(v => {
                    console.error(v), l(K.actions.showToast({
                        message: e("error_deleting_changes"),
                        intent: "error"
                    }))
                }).finally(() => o(!1)))
            },
            children: e("delete")
        })]
    });
    async function u(v) {
        try {
            if (v.files === null || v.files.length === 0) return;
            const p = v.files[0];
            await gt(d.getState(), t, l, !1, new Uint8Array(await p.arrayBuffer())), await Bt(r, d)
        } catch (p) {
            console.error(p), l(K.actions.showToast({
                message: e("error_uploading_changes"),
                intent: "error"
            }))
        } finally {
            o(!1)
        }
    }
    return h("div", {
        class: "flex flex-row items-baseline gap-1",
        children: [e("no_changes_loaded"), h("button", {
            class: "btn btn-ghost btn-xs text-accent underline self-center",
            onClick: () => {
                o(!0), _f(u)
            },
            children: [m, e("upload")]
        })]
    })
}
let ao = "-----";

function wf() {
    const e = ne(),
        t = M(p => p.auth.account),
        n = M(p => p.ui.kiosk),
        o = M(p => p.ui.noCloud),
        [r, s] = ae(t?.token ?? ""),
        f = t?.premium ?? !1,
        a = ge(),
        c = M(p => p.ui.warnOnKey),
        i = M(p => p.ui.warnOnPremium),
        d = Q(),
        l = De();
    if (n) return null;

    function m(p) {
        p !== ao && (d(K.actions.warnOnKey(!1)), d(K.actions.warnOnPremium(!1)), ao = p, s(p), Oo(p).then(({
            token: g,
            account: _
        }) => {
            g === ao && (d(Rt.actions.setAccount(_)), _ !== null && a.options.url ? Bt(a.options.url, l).catch(y => {
                l.dispatch(I.actions.bndError(y.message))
            }) : _ === null && g.length === 5 && s(""))
        }).catch(console.error))
    }
    te(() => {
        Oo(r).then(({
            token: p,
            account: g
        }) => {
            d(Rt.actions.setAccount(g))
        })
    }, []);

    function u() {
        d(K.actions.autoStart(!1)), Ut(a, "open-key")
    }
    const v = t?.email === "dz.caiiiycuk@gmail.com";
    return h("div", {
        class: "bg-base-200/80 mx-4 my-5 px-8 py-4 flex flex-col gap-2 items-center rounded-xl",
        children: h("div", {
            class: "mt-4 flex flex-col items-center gap-2",
            children: [t === null && e("hello_guest"), t !== null && h("div", {
                class: v ? "bg-warning px-2" : "",
                children: [e("hello") + ", " + (v ? "DOS Zone" : t.name ?? t.email) + "!", h("span", {
                    class: "link link-neutral lowercase inline ml-1",
                    onClick: () => {
                        m(""), d(K.actions.autoStart(!1))
                    },
                    children: ["(", e("logout"), ")"]
                })]
            }), h(bf, {}), !o && h(pe, {
                children: [h("div", {
                    class: "mt-2",
                    children: t === null && h(pe, {
                        children: [e("no_cloud_access"), h("a", {
                            href: "https://v8.js-dos.com/key",
                            onClick: u,
                            target: "_blank",
                            class: "link link-warning ml-1",
                            children: e("key")
                        }), " ", e("no_cloud_access2"), "."]
                    })
                }), f === !1 && h(pe, {
                    children: h("span", {
                        class: "text-xs",
                        children: [e("no_cloud_access3"), t !== null && h("a", {
                            href: "https://v8.js-dos.com/key",
                            onClick: u,
                            target: "_blank",
                            class: "link ml-1 lowercase " + (i ? "" : "link-warning"),
                            children: ["(", e("fix"), ")"]
                        })]
                    })
                }), t === null && h("div", {
                    class: "-ml-4",
                    children: h("input", {
                        maxLength: 5,
                        value: r,
                        onChange: p => m(p.currentTarget.value),
                        placeholder: "-----",
                        class: "input input-bordered mt-4 mb-4 text-center w-24 bg-blend-multiply bg-opacity-40" + (c ? " input-warning " : ""),
                        onClick: () => d(K.actions.autoStart(!1))
                    })
                })]
            })]
        })
    })
}

function Bc(e) {
    const t = M(g => g.editor.configChanged),
        n = M(g => g.editor.bundleConfig),
        o = M(g => g.ui.frame !== "none"),
        r = M(g => g.ui.countDownStart),
        s = M(g => g.ui.autoStart),
        f = M(g => g.ui.editor),
        [a, c] = ae(r),
        [i, d] = ae(s),
        l = ge(),
        m = Q(),
        u = ne(),
        v = i && !o && !f;
    te(() => {
        if (r > 0 && a > 0 && v) {
            const g = setTimeout(() => {
                c(a - 1)
            }, 1e3);
            return () => clearInterval(g)
        }
        a === 0 && r > 0 && v && m(I.actions.bndPlay({}))
    }, [a, r, v]), te(() => {
        d(s)
    }, [s]);
    async function p() {
        if (t) {
            const g = n,
                _ = l.loadedBundle?.bundle;
            if (_ === null || g === null || !ArrayBuffer.isView(_)) throw new Error("Unexpected behaviour (internal state is broken), bundle is null");
            try {
                l.loadedBundle.bundle = await emulators.bundleUpdateConfig(_, g), m(I.actions.bndPlay({}))
            } catch (y) {
                m(I.actions.bndError(y.message ?? "unexpected error"))
            }
        } else m(I.actions.bndPlay({}))
    }
    return te(() => {
        p()
    }, []), e.button === !0 ? h("div", {
        class: "btn btn-accent w-full sm:hidden",
        onClick: p,
        children: [h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-6 h-6",
            children: [h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            }), h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
            })]
        }), u("play")]
    }) : h("div", {
        class: e.class + " relative cursor-pointer w-1/4 h-1/4 min-w-48 min-h-48 max-w-96 max-h-96",
        children: [h("div", {
            class: "relative",
            children: [h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-full h-full play-button",
                children: [h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }), h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                })]
            }), r > 0 && v && h("div", {
                class: "absolute top-0 right-0 translate-x-1/2 w-12 h-12 opacity-90 cursor-pointer flex items-center justify-center text-2xl font-bold bg-primary text-primary-content rounded-full animate-pulse cound-down-start",
                onClick: () => d(!1),
                children: [h("div", {
                    children: a
                }), h("div", {
                    children: h("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "size-12",
                        children: h("path", {
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round",
                            d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        })
                    })
                })]
            })]
        }), h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-10 h-10 absolute right-0 bottom-0 cursor-pointer" + (o ? " sidebar-highlight" : ""),
            onClick: g => {
                m(o ? K.actions.frameNone() : K.actions.framePreRun()), g.stopPropagation()
            },
            children: [h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })]
    })
}

function xf(e) {
    return h("div", {
        class: "prerun-frame frame-root items-start pl-4",
        children: [h(Bc, {
            button: !0
        }), h(Ba, {}), h(La, {}), h(Na, {}), h(za, {}), h(Ua, {
            class: "mt-4"
        }), h(Ha, {}), h($a, {}), h(nf, {
            multiline: !0
        }), h(Qd, {}), h(Zd, {}), h("div", {
            class: "h-4"
        }), h(Jd, {}), h(kf, {}), h("div", {
            class: "h-4"
        }), h(of, {
            multiline: !0
        }), h(Fa, {
            multiline: !0
        }), h(ef, {}), h(Gd, {}), h(rf, {
            multiline: !0
        }), h(Ka, {
            multiline: !0
        })]
    })
}

function kf() {
    const e = Q(),
        t = M(n => n.dos.connectIpxAddress);
    return h("div", {
        class: "flex flex-col mt-4 gap-2",
        children: [h("div", {
            children: "IPX Address"
        }), h("input", {
            type: "text",
            class: "input input-bordered",
            value: t ?? "",
            onChange: n => e(I.actions.connectIpxAddress(n.target.value))
        })]
    })
}

function Cf(e) {
    const t = M(r => r.ui.frame),
        n = M(r => r.ui.frameXs),
        o = M(r => r.ui.wideScreen);
    return t === "none" ? null : h("div", {
        class: "frame " + (n ? " frame-xs " : "") + (n || o ? "" : " frame-md"),
        children: [t === "settings" && h(mf, {}), t === "editor-conf" && h(Fd, {}), t === "editor-fs" && h(Vd, {}), t === "stats" && h(gf, {}), t === "prerun" && h(xf, {})]
    })
}

function Nc(e, t) {
    (async () => {
        const n = t.getState().ui.softFullscreen,
            o = Se(t),
            r = o.root;
        e ? n ? r.classList.add("jsdos-fullscreen-workaround") : r.requestFullscreen ? await r.requestFullscreen() : r.webkitRequestFullscreen ? await r.webkitRequestFullscreen() : r.mozRequestFullScreen ? await r.mozRequestFullScreen() : r.msRequestFullscreen ? await r.msRequestFullscreen() : r.webkitEnterFullscreen ? await r.webkitEnterFullscreen() : r.classList.add("jsdos-fullscreen-workaround") : r.classList.contains("jsdos-fullscreen-workaround") ? r.classList.remove("jsdos-fullscreen-workaround") : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), t.dispatch(K.actions.setFullScreen(e)), Ut(o, "fullscreen-change", e)
    })().catch(n => {
        console.error("Can't enter fullscreen", n)
    })
}

function Sf(e) {
    const t = M(r => r.ui.fullScreen),
        n = De();

    function o() {
        Nc(!t, n)
    }
    return h("div", {
        class: "fullscreen-button sidebar-button " + e.class,
        onClick: o,
        children: h("div", {
            class: "w-full h-full scale-75 hover:scale-90",
            children: [!t && h("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                stroke: "none",
                "enable-background": "new 0 0 16 16",
                children: h("g", {
                    children: h("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z"
                    })
                })
            }), t && h("svg", {
                version: "1.1",
                id: "Layer_1",
                xmlns: "http://www.w3.org/2000/svg",
                x: "0px",
                y: "0px",
                viewBox: "0 0 16 16",
                fill: "currentColor",
                stroke: "none",
                "enable-background": "new 0 0 16 16",
                children: h("g", {
                    children: h("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M15.99,0.99c0-0.55-0.45-1-1-1c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29V1.99 c0-0.55-0.45-1-1-1s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1h-1.59L15.7,1.7 C15.88,1.52,15.99,1.27,15.99,0.99z M5.99,8.99h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59l-3.29,3.29c-0.18,0.18-0.29,0.43-0.29,0.71 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C6.99,9.44,6.54,8.99,5.99,8.99z"
                    })
                })
            })]
        })
    })
}

function Pf(e) {
    return h($t, {
        class: e.class,
        frame: "editor-conf",
        action: K.actions.frameConf(),
        children: h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            })
        })
    })
}

function Ef(e) {
    return h($t, {
        class: e.class,
        frame: "editor-fs",
        action: K.actions.frameFs(),
        children: h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
            })
        })
    })
}

function Of() {
    const e = Math.round(M(t => t.dos.stats.cyclesPerMs) / 1e3);
    return h($t, {
        class: "cycles",
        frame: "stats",
        action: K.actions.frameStats(),
        children: [e <= 0 && h(pe, {
            children: [h("span", {
                children: "~"
            }), h("sup", {
                children: "KC"
            })]
        }), e > 0 && e <= 1e3 && h(pe, {
            children: [h("span", {
                children: e
            }), h("sup", {
                children: "KC"
            })]
        }), e > 0 && e > 1e3 && h(pe, {
            children: [h("span", {
                children: Math.round(e / 1e3)
            }), h("sup", {
                children: [h("strong", {
                    children: "K"
                }), "KC"]
            })]
        })]
    })
}

function Mf(e) {
    const t = De(),
        n = Me(null),
        [o] = ae({
            recv: 0,
            enabled: !1,
            delayLedTo: 0
        });
    te(() => {
        if (n.current) {
            const i = n.current;
            i.classList.add("bg-base-300");
            const d = setInterval(() => {
                if (o.delayLedTo <= Date.now()) {
                    const l = Fe(t).dos.stats.msgSentPerSec,
                        m = o.recv !== l;
                    m !== o.enabled && (i.classList.remove("bg-base-300", "bg-green-300", "animate-led"), m ? i.classList.add("bg-green-300", "animate-led") : i.classList.add("bg-base-300"), o.enabled = m), m ? o.delayLedTo = Date.now() + 300 + Math.random() * 1500 : o.delayLedTo = 0, o.recv = l
                }
            }, 150);
            return () => {
                i.classList.remove("bg-base-300", "bg-green-300", "animate-led"), clearInterval(d)
            }
        }
    }, [n, o]);
    const [r, s] = ae(!1), [f, a] = ae({
        recv: 0,
        timeoutId: null
    }), c = M(i => i.dos.stats.msgRecvPerSec);
    if (f.recv !== c) {
        r || s(!0), f.timeoutId && clearTimeout(f.timeoutId);
        const i = setTimeout(() => {
            s(!1), a({
                recv: c,
                timeoutId: null
            })
        }, 1e3);
        a({
            recv: c,
            timeoutId: i
        })
    }
    return h("div", {
        ref: n,
        class: "self-end mr-2 -mt-3 w-2 h-1"
    })
}

function Af(e) {
    return h($t, {
        class: e.class,
        action: K.actions.frameSettings(),
        frame: "settings",
        children: h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: [h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })
    })
}

function $t(e) {
    const t = M(r => r.ui.frame) === e.frame,
        n = Q();

    function o() {
        n(t ? K.actions.frameNone() : e.action)
    }
    return h("div", {
        class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
        onClick: o,
        children: e.children
    })
}

function Df(e) {
    const t = M(o => o.dos.softKeyboard),
        n = Q();
    return te(() => {
        t || n(I.actions.softKeyboard(!0))
    }, [t]), h("div", {
        class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
        children: h("svg", {
            class: "w-full h-full",
            fill: "currentColor",
            stroke: "currentColor",
            version: "1.1",
            id: "Layer_1",
            viewBox: "0 0 507.9 507.9",
            children: [h("g", {
                id: "SVGRepo_bgCarrier",
                "stroke-width": "0"
            }), h("g", {
                id: "SVGRepo_tracerCarrier",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }), h("g", {
                id: "SVGRepo_iconCarrier",
                children: [" ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M465.7,140.75H268.1v-77.3c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v77.3H42.3c-23.3,0-42.3,19-42.3,42.3 v233.2c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-233.2C508,159.75,489,140.75,465.7,140.75z M465.7,430.35H42.3 c-7.8,0-14.1-6.3-14.1-14.1v-233.2c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v233.2h0.1 C479.8,424.05,473.5,430.35,465.7,430.35z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M440.6,194.05h-85.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h85.4c7.8,0,14.1-6.3,14.1-14.1 C454.7,200.35,448.4,194.05,440.6,194.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M80.9,377.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95,383.35,88.7,377.05,80.9,377.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M303.3,377.05H141.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h161.8c7.8,0,14.1-6.3,14.1-14.1 C317.5,383.35,311.1,377.05,303.3,377.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M80.9,255.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,261.35,88.7,255.05,80.9,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M152.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,261.35,160.6,255.05,152.8,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M224.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,261.35,232.6,255.05,224.8,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M296.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,261.35,304.5,255.05,296.7,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M80.9,194.05H67.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,200.35,88.7,194.05,80.9,194.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M152.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,200.35,160.6,194.05,152.8,194.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M224.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,200.35,232.6,194.05,224.8,194.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M296.7,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,200.35,304.5,194.05,296.7,194.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M368.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,261.35,376.4,255.05,368.7,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M440.6,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,261.35,448.4,255.05,440.6,255.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M368.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,322.35,376.4,316.05,368.7,316.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M440.6,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,322.35,448.4,316.05,440.6,316.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M368.7,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,383.35,376.4,377.05,368.7,377.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M440.6,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,383.35,448.4,377.05,440.6,377.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M80.9,316.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,322.35,88.7,316.05,80.9,316.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M152.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,322.35,160.6,316.05,152.8,316.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M224.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,322.35,232.6,316.05,224.8,316.05z"
                        }), " "]
                    }), " "]
                }), " ", h("g", {
                    children: [" ", h("g", {
                        children: [" ", h("path", {
                            d: "M296.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,322.35,304.5,316.05,296.7,316.05z"
                        }), " "]
                    }), " "]
                }), " "]
            })]
        })
    })
}

function Tf(e) {
    return h($t, {
        class: e.class,
        frame: "prerun",
        action: K.actions.framePreRun(),
        children: h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "w-full h-full",
            children: [h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            }), h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            })]
        })
    })
}

function jf(e) {
    return h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        style: "padding: 2px",
        viewBox: "0 0 16 16",
        "enable-background": "new 0 0 16 16",
        fill: "currentColor",
        class: "w-full h-full rounded-lg " + e.class,
        children: h("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
        })
    })
}

function If() {
    const e = M(n => n.ui.haveQuickSave),
        t = M(n => n.dos.backend) === "dosboxX";
    return h("div", {
        class: "save-buttons flex flex-col justify-center items-center -my-2",
        children: [h(Bf, {}), t && h(Rf, {
            label: "X",
            bgcolor: "bg-primary",
            textcolor: "text-primary-content"
        }), t && e && h(Lf, {
            label: "X",
            bgcolor: "bg-primary"
        })]
    })
}

function Rf(e) {
    const t = ge(),
        n = Q();

    function o() {
        const r = t.ci;
        r !== null && (Pa(r), n(K.actions.setHaveQuickSave(!0)))
    }
    return h("div", {
        class: "sidebar-button flex justify-center",
        onClick: o,
        children: [h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "absolute left-0 bottom-0 w-6 h-6 opacity-30",
            children: h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
            })
        }), h("p", {
            class: "absolute top-0 right-0 font-bold",
            children: "F6"
        })]
    })
}

function Lf(e) {
    const t = ge();

    function n() {
        const o = t.ci;
        o !== null && Ea(o)
    }
    return h("div", {
        class: "sidebar-button flex justify-center",
        onClick: n,
        children: [h("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "stroke-width": "1.5",
            stroke: "currentColor",
            class: "absolute left-0 bottom-0  w-6 h-6 -scale-y-100 opacity-30",
            children: h("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
            })
        }), h("p", {
            class: "absolute top-0 right-0 font-bold",
            children: "F7"
        })]
    })
}

function Bf(e) {
    const [t, n] = ae(!1), o = Q(), r = M(c => c.ui.canSave), s = ge(), f = De();
    if (!r || s.loadedBundle === null || s.loadedBundle.bundleChangesUrl === null) return null;

    function a() {
        t || (n(!0), gt(Fe(f), s, o).finally(() => n(!1)))
    }
    return h("div", {
        class: "save-button sidebar-button overflow-hidden " + (t ? " sidebar-highlight " : "") + e.class,
        onClick: a,
        children: h("div", {
            class: "w-full h-full flex justify-center",
            children: [h(jf, {}), t && h("div", {
                class: "sidebar-badge"
            })]
        })
    })
}

function Nf(e) {
    const t = M(c => c.ui.window),
        n = M(c => c.ui.editor),
        o = M(c => c.ui.kiosk),
        r = M(c => c.ui.frame) !== "none",
        s = M(c => c.dos.mouseCapture),
        f = M(c => c.ui.thinSidebar),
        a = Q();
    return o ? t === "run" && s ? h(co, {
        class: "h-full"
    }) : null : f ? h("div", {
        class: "sidebar-thin",
        children: [h("div", {
            class: "cursor-pointer hover:bg-base-100 w-full h-full flex flex-col items-center justify-center gap-1",
            onClick: () => {
                a(K.actions.thinSidebar(!1))
            },
            children: h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "w-4 h-4",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                })
            })
        }), !r && t === "run" && s && h(co, {})]
    }) : h("div", {
        class: "sidebar",
        style: "display:none",
        children: [t === "run" && h(If, {}), t === "run" && h(Df, {}), n && t === "prerun" && h(Pf, {}), n && t === "run" && h(Ef, {}), h("div", {
            class: "contentbar"
        }), t === "run" && h(Sf, {}), t === "run" && h(Of, {}), t === "run" && h(Mf, {}), t === "prerun" && h(Tf, {}), t === "run" && h(Af, {}), !r && t === "run" && s && h(co, {})]
    })
}

function co(e) {
    const t = M(o => o.dos.mouseSensitivity),
        n = Q();
    return h("div", {
        class: "sidebar-slider " + e.class,
        children: h(Sn, {
            bgClass: "bg-base-300",
            vertical: !0,
            label: "",
            value: t,
            onChange: o => {
                n(I.actions.mouseSensitivity(o))
            },
            children: h("svg", {
                class: "w-6 h-6",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: h("path", {
                    d: "M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })
            })
        })
    })
}

function zf(e, t, n, o) {
    const r = new Set;

    function s() {
        r.forEach(i => {
            t.sendKeyEvent(i, !1)
        }), r.clear()
    }

    function f(i) {
        if (i.target.type === "text") return;
        n && (i.key === "F6" && (Pa(t), o(K.actions.setHaveQuickSave(!0))), i.key === "F7" && Ea(t));
        const d = Ao(i.keyCode, i.location);
        t.sendKeyEvent(d, !0), r.add(d), i.stopPropagation(), i.preventDefault()
    }

    function a(i) {
        if (i.target.type === "text") return;
        const d = Ao(i.keyCode, i.location);
        t.sendKeyEvent(d, !1), r.delete(d), i.stopPropagation(), i.preventDefault()
    }

    function c() {
        s()
    }
    return e.addEventListener("keydown", f), e.addEventListener("keyup", a), e.addEventListener("blur", c), () => {
        s(), e.removeEventListener("keydown", f), e.removeEventListener("keyup", a), e.removeEventListener("blur", c)
    }
}

function Ur(e, t, n, o) {
    const r = e.parentElement.getBoundingClientRect(),
        s = r.width,
        f = r.height;
    if (n === 0) return;
    const a = o === Ca ? s / f : o ?? t / n;
    let c = s,
        i = s / a;
    i > f && (i = f, c = f * a), e.style.position = "relative", e.style.top = (f - i) / 2 + "px", e.style.left = (s - c) / 2 + "px", e.style.width = c + "px", e.style.height = i + "px"
}
const Ff = `
attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

varying highp vec2 vTextureCoord;

void main(void) {
  gl_Position = aVertexPosition;
  vTextureCoord = aTextureCoord;
}
`,
    Kf = `
varying highp vec2 vTextureCoord;
uniform sampler2D uSampler;


void main(void) {
  highp vec4 color = texture2D(uSampler, vTextureCoord);
  gl_FragColor = vec4(color.r, color.g, color.b, 1.0);
}
`;

function Uf(e, t, n, o) {
    const r = n.gl ?? e.getContext("webgl");
    if (r === null) throw new Error("Unable to create webgl context on given canvas");
    n.gl = r;
    const s = Hf(r, Ff, Kf),
        f = r.getAttribLocation(s, "aVertexPosition"),
        a = r.getAttribLocation(s, "aTextureCoord"),
        c = r.getUniformLocation(s, "uSampler");
    $f(r, f, a);
    const i = r.createTexture();
    r.bindTexture(r.TEXTURE_2D, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
    const d = new Uint8Array([0, 0, 0]);
    r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, d), r.useProgram(s), r.activeTexture(r.TEXTURE0), r.uniform1i(c, 0);
    let l = 0,
        m = 0,
        u = null,
        v = null,
        p = 0;
    const g = () => {
            v !== null && (r.texImage2D(r.TEXTURE_2D, 0, p, l, m, 0, p, r.UNSIGNED_BYTE, v), v = null), r.drawArrays(r.TRIANGLES, 0, 6), u = null
        },
        _ = () => {
            Ur(e, l, m, o)
        },
        y = (C, x) => {
            l = C, m = x, e.width = l, e.height = m, v = null, r.viewport(0, 0, l, m), _()
        };
    t.events().onFrameSize(y), t.events().onFrame((C, x) => {
        v = C ?? x, p = C != null ? r.RGB : r.RGBA, u === null && (u = requestAnimationFrame(g))
    }), y(t.width(), t.height());
    const b = new ResizeObserver(_);
    return b.observe(e.parentElement), window.addEventListener("resize", _), () => {
        n.gl = null, t.events().onFrameSize(() => {}), t.events().onFrame(() => {}), b.disconnect(), window.removeEventListener("resize", _)
    }
}

function Hf(e, t, n) {
    const o = ni(e, e.VERTEX_SHADER, t),
        r = ni(e, e.FRAGMENT_SHADER, n),
        s = e.createProgram();
    if (e.attachShader(s, o), e.attachShader(s, r), e.linkProgram(s), !e.getProgramParameter(s, e.LINK_STATUS)) throw new Error("Unable to initialize the shader program: " + e.getProgramInfoLog(s));
    return s
}

function ni(e, t, n) {
    const o = e.createShader(t);
    if (e.shaderSource(o, n), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) {
        const r = e.getShaderInfoLog(o);
        throw e.deleteShader(o), new Error("An error occurred compiling the shaders: " + r)
    }
    return o
}

function $f(e, t, n) {
    const o = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, o);
    const r = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(r), e.STATIC_DRAW), e.vertexAttribPointer(t, 3, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(t);
    const s = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, s);
    const f = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    e.bufferData(e.ARRAY_BUFFER, new Float32Array(f), e.STATIC_DRAW), e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(n)
}

function oi(e, t, n) {
    const o = e.getContext("2d");
    if (o === null) throw new Error("Unable to create 2d context on given canvas");
    let r = 0,
        s = 0;
    const f = () => {
        Ur(e, r, s, n)
    };
    let a = new Uint8ClampedArray(0);
    const c = (d, l) => {
        r = d, s = l, e.width = r, e.height = s, a = new Uint8ClampedArray(d * l * 4), f()
    };
    t.events().onFrameSize(c), t.events().onFrame((d, l) => {
        if (d === null && l === null) return;
        const m = d !== null ? d : l;
        let u = 0,
            v = 0;
        for (; v < a.length;) a[v++] = m[u++], a[v++] = m[u++], a[v++] = m[u++], a[v++] = 255, m.length === a.length && u++;
        o.putImageData(new ImageData(a, r, s), 0, 0)
    }), c(t.width(), t.height());
    const i = new ResizeObserver(f);
    return i.observe(e.parentElement), window.addEventListener("resize", f), () => {
        t.events().onFrameSize(() => {}), t.events().onFrame(() => {}), i.disconnect(), window.removeEventListener("resize", f)
    }
}
class Vf {
    samplesQueue = [];
    push(t) {
        this.samplesQueue.push(t)
    }
    length() {
        let t = 0;
        for (const n of this.samplesQueue) t += n.length;
        return t
    }
    writeTo(t, n) {
        let o = 0;
        for (; this.samplesQueue.length > 0;) {
            const r = this.samplesQueue[0],
                s = Math.min(n - o, r.length);
            if (s === r.length ? (t.set(r, o), this.samplesQueue.shift()) : (t.set(r.slice(0, s), o), this.samplesQueue[0] = r.slice(s)), o += s, o === n) break
        }
        o < n && t.fill(0, o)
    }
}

function Wf(e, t) {
    const n = e.soundFrequency(),
        o = 1;
    if (n === 0) return console.warn("Can't create audio node with sampleRate === 0, ingnoring"), () => {};
    let r = null;
    if (typeof AudioContext < "u" ? r = new AudioContext({
            sampleRate: n,
            latencyHint: "interactive"
        }) : typeof window.webkitAudioContext < "u" && (r = new window.webkitAudioContext({
            sampleRate: n,
            latencyHint: "interactive"
        })), r == null) return () => {};
    const s = new Vf,
        f = 2048,
        a = 2048;
    e.events().onSoundPush(v => {
        s.length() < f * 2 + a && s.push(v)
    });
    const c = r.createScriptProcessor(f, 0, o);
    let i = !1;
    const d = v => {
        const p = v.outputBuffer.length,
            g = v.outputBuffer.numberOfChannels,
            _ = s.length();
        if (i || (i = _ >= a), !!i)
            for (let y = 0; y < g; y++) {
                const b = v.outputBuffer.getChannelData(y);
                s.writeTo(b, p)
            }
    };
    c.onaudioprocess = d;
    const l = r.createGain();
    l.connect(r.destination), c.connect(l), l.gain.value = 1;
    let m;
    t && (m = t(v => {
        l.gain.value = v
    }));
    const u = () => {
        r !== null && r.state === "suspended" && r.resume()
    };
    return document.addEventListener("pointerdown", u, {
        once: !0
    }), document.addEventListener("keydown", u, {
        once: !0
    }), () => {
        e.events().onSoundPush(() => {}), r !== null && (c.disconnect(), l.disconnect(), r.close().catch(console.error), r = null), m !== void 0 && m(), document.removeEventListener("pointerdown", u), document.removeEventListener("keydown", u)
    }
}
const Yt = 50;

function qf() {
    const e = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
        t = e && "ontouchstart" in window,
        n = e && !!window.PointerEvent,
        o = e && !!window.MSPointerEvent;
    let r = !e;
    const s = [],
        f = [],
        a = [],
        c = [],
        i = [];
    return n ? (s.push("pointerdown"), a.push("pointerup", "pointercancel"), f.push("pointermove"), i.push("touchstart", "touchmove", "touchend")) : o ? (s.push("MSPointerDown"), f.push("MSPointerMove"), a.push("MSPointerUp")) : t ? (r = !1, s.push("touchstart", "mousedown"), f.push("touchmove"), a.push("touchend", "touchcancel", "mouseup")) : (s.push("mousedown"), f.push("mousemove"), a.push("mouseup"), c.push("mouseleave")), {
        mobile: e,
        canLock: r,
        starters: s,
        changers: f,
        enders: a,
        prevents: i,
        leavers: c
    }
}
const Qt = {};

function We(e, t, n, o) {
    function r(f) {
        if (f.type.match(/^touch/)) {
            const a = f,
                c = t.getBoundingClientRect();
            return {
                id: "touch-" + a.targetTouches[0].identifier,
                x: a.targetTouches[0].clientX - c.x,
                y: a.targetTouches[0].clientY - c.y,
                mX: 0,
                mY: 0
            }
        } else if (f.type.match(/^pointer/)) {
            const a = f;
            return {
                id: "pointer-" + a.pointerId,
                x: a.offsetX,
                y: a.offsetY,
                mX: a.movementX,
                mY: a.movementY,
                button: a.button > 0 ? 1 : void 0
            }
        } else {
            const a = f;
            return {
                id: "mouse",
                x: a.offsetX,
                y: a.offsetY,
                mX: a.movementX,
                mY: a.movementY,
                button: a.button === 0 ? 0 : 1
            }
        }
    }
    const s = r(e);
    return o || (Qt[s.id] ? (s.mX = s.x - Qt[s.id].x, s.mY = s.y - Qt[s.id].y) : (s.mX = 0, s.mY = 0)), Qt[s.id] = {
        x: s.x,
        y: s.y
    }, s.mX = ri(s.mX, n), s.mY = ri(s.mY, n), s
}
const X = qf();

function ri(e, t) {
    e > Yt ? e = Yt : e < -Yt && (e = -Yt);
    const n = Math.pow(8, t * 2 - 1);
    return e = e * n, e
}

function Xf(e) {
    function t() {
        if (document.pointerLockElement !== e) {
            (e.requestPointerLock || e.mozRequestPointerLock || e.webkitRequestPointerLock).call(e);
            return
        }
    }
    const n = {
        capture: !0
    };
    for (const o of X.starters) e.addEventListener(o, t, n);
    return () => {
        for (const o of X.starters) e.removeEventListener(o, t, n)
    }
}

function zc(e, t, n, o, r, s, f) {
    const a = u => {
            if (u.target !== e) return;
            const v = We(u, e, t, n);
            o(v.x, v.y, v.button), u.stopPropagation()
        },
        c = u => {
            if (u.target !== e) return;
            const v = We(u, e, t, n);
            r(v.x, v.y, v.mX, v.mY), u.stopPropagation()
        },
        i = u => {
            const v = We(u, e, t, n);
            s(v.x, v.y, v.button), u.stopPropagation()
        },
        d = u => {
            if (u.target !== e) return;
            const v = We(u, e, t, n);
            f(v.x, v.y), u.stopPropagation()
        },
        l = u => {
            u.stopPropagation()
        },
        m = {
            capture: !1
        };
    for (const u of X.starters) e.addEventListener(u, a, m);
    for (const u of X.changers) e.addEventListener(u, c, m);
    for (const u of X.enders) e.addEventListener(u, i, m);
    for (const u of X.prevents) e.addEventListener(u, l, m);
    for (const u of X.leavers) e.addEventListener(u, d, m);
    return () => {
        for (const u of X.starters) e.removeEventListener(u, a, m);
        for (const u of X.changers) e.removeEventListener(u, c, m);
        for (const u of X.enders) e.removeEventListener(u, i, m);
        for (const u of X.prevents) e.removeEventListener(u, l, m);
        for (const u of X.leavers) e.removeEventListener(u, d, m)
    }
}
const Zt = 1 / 100;

function Gf(e, t, n) {
    const o = (c, i) => Yf(c, i, t, n);
    document.pointerLockElement === t && document.exitPointerLock();

    function r(c, i, d) {
        const l = o(c, i);
        n.sendMouseMotion(l.x, l.y), n.sendMouseButton(d ?? e, !0)
    }

    function s(c, i, d) {
        const l = o(c, i);
        n.sendMouseMotion(l.x, l.y), n.sendMouseButton(d ?? e, !1)
    }

    function f(c, i, d, l) {
        const m = o(c, i);
        n.sendMouseMotion(m.x, m.y)
    }

    function a(c, i) {
        const d = o(c, i);
        n.sendMouseMotion(d.x, d.y)
    }
    return zc(t, 0, !1, r, f, s, a)
}

function Yf(e, t, n, o) {
    const {
        width: r,
        height: s
    } = n.getBoundingClientRect(), f = o.width(), a = o.height(), c = f / a;
    let i = r,
        d = r / c;
    d > s && (d = s, i = s * c);
    const l = (s - d) / 2,
        m = (r - i) / 2;
    let u = Math.max(0, Math.min(1, (e - m) / i)),
        v = Math.max(0, Math.min(1, (t - l) / d));
    return u <= Zt && (u = 0), u >= 1 - Zt && (u = 1), v <= Zt && (v = 0), v >= 1 - Zt && (v = 1), {
        x: u,
        y: v
    }
}
const Qf = 500,
    Zf = 50;

function si(e, t, n, o, r) {
    let s = -1,
        f = 0,
        a = 0,
        c = 0;
    const i = (u, v, p) => {
        s = Date.now(), f = 0, a = u, c = v, p !== void 0 && r.sendMouseButton(p, !0)
    };

    function d(u, v, p, g) {
        p === void 0 && (p = u - a), g === void 0 && (g = v - c), a = u, c = v, !(p === 0 && g === 0) && (f += Math.abs(p) + Math.abs(g), r.sendMouseRelativeMotion(p, g))
    }
    return zc(o, e, t, i, d, (u, v, p) => {
        if (p !== void 0) r.sendMouseButton(p, !1);
        else if (Date.now() - s < Qf && f < Zf) {
            const _ = p ?? n;
            r.sendMouseButton(_, !0), setTimeout(() => r.sendMouseButton(_, !1), 60)
        }
    }, () => {})
}

function Jf(e, t, n, o, r) {
    if (e && !X.canLock) return si(t, !1, n, o, r);
    if (e) {
        const s = Xf(o),
            f = si(t, !0, n, o, r);
        return () => {
            f(), s()
        }
    }
    return Gf(n, o, r)
}

function Fc(e, t) {
    const n = document.createElement("div");
    return n.className = e, t !== void 0 && (n.innerHTML = t), n
}

function ep(e, t = !0) {
    const n = s => {
            s.stopPropagation()
        },
        o = s => {
            s.stopPropagation(), t && s.preventDefault()
        },
        r = {
            capture: !1
        };
    for (const s of X.starters) e.addEventListener(s, n, r);
    for (const s of X.enders) e.addEventListener(s, n, r);
    for (const s of X.prevents) e.addEventListener(s, o, r)
}
class tp {
    options;
    root;
    canvas;
    mouseOverlay;
    width;
    height;
    keyboardVisible = !1;
    pointerLock = !1;
    pointerDisabled = !1;
    pointerButton = 0;
    toggleKeyboard;
    onResize;
    onKeyDown;
    onKeyUp;
    onKeyPress;
    onKeysPress;
    constructor(t, n, o, r) {
        this.toggleKeyboard = o, this.options = r, this.root = t, this.root.classList.add("emulator-root"), this.canvas = n, this.canvas.className = "emulator-canvas", this.mouseOverlay = np(), this.root.appendChild(this.mouseOverlay), this.width = t.offsetWidth, this.height = t.offsetHeight, this.onResize = [], this.onKeyDown = () => {}, this.onKeyUp = () => {}, this.onKeyPress = () => {}, this.onKeysPress = () => {}, new ResizeObserver(s => {
            for (const f of s)
                if (f.target === t) {
                    this.width = f.contentRect.width, this.height = f.contentRect.height;
                    for (const a of this.onResize) a(this.width, this.height)
                }
        }).observe(this.root)
    }
    addOnResize(t) {
        this.onResize.push(t)
    }
    removeOnResize(t) {
        this.onResize = this.onResize.filter(n => n !== t)
    }
    setOnKeyDown(t) {
        this.onKeyDown = t
    }
    fireKeyDown(t) {
        this.onKeyDown(t)
    }
    setOnKeyUp(t) {
        this.onKeyUp = t
    }
    fireKeyUp(t) {
        this.onKeyUp(t)
    }
    setOnKeyPress(t) {
        this.onKeyPress = t
    }
    fireKeyPress(t) {
        this.onKeyPress(t)
    }
    setOnKeysPress(t) {
        this.onKeysPress = t
    }
    fireKeysPress(t) {
        this.onKeysPress(t)
    }
}

function np() {
    return Fc("emulator-mouse-overlay", "")
}

function Kc(e) {
    return e.layersConfig !== void 0 ? (e.layersConfig.version === 1 && op(e.layersConfig), e.layersConfig) : e.layers !== void 0 ? e.layers : null
}

function op(e) {
    for (const t of e.layers)
        for (const n of t.controls)
            if (n.type === "Key") {
                const o = n;
                typeof o.mapTo == "number" && (o.mapTo = [o.mapTo])
            }
}
const rp = sp();

function sp() {
    const e = {};
    for (const t of Object.keys(ti)) e[ti[t]] = t.substr(4, 2);
    return e
}

function Ae(e, t, n) {
    const o = Math.round(n * .6),
        r = Math.round(n * .5),
        s = Math.max(1, Math.round(n / 20)),
        f = lp[e.toLowerCase()],
        a = f === void 0 ? e : "",
        c = lo("emulator-button-touch-zone"),
        i = lo("emulator-button"),
        d = lo("emulator-button-text", f === void 0 ? a === void 0 || a.length === 0 ? "□" : a.substr(0, 1).toUpperCase() : "");
    f !== void 0 && (i.style.backgroundImage = 'url("' + f + '")'), i.style.width = o + "px", i.style.height = o + "px", d.style.fontSize = r + "px", c.widthPx = n - s * 2, c.heightPx = n - s * 2, c.style.width = c.widthPx + "px", c.style.height = c.heightPx + "px", c.style.borderWidth = s + "px", c.appendChild(i), c.appendChild(d);
    const l = p => {
            t.onDown !== void 0 && t.onDown(), t.onClick !== void 0 && t.onClick(), p.stopPropagation(), p.preventDefault()
        },
        m = p => {
            t.onUp !== void 0 && t.onUp(), p.stopPropagation(), p.preventDefault()
        },
        u = p => {
            p.stopPropagation(), p.preventDefault()
        },
        v = {
            capture: !0
        };
    for (const p of X.starters) c.addEventListener(p, l, v);
    for (const p of X.enders) c.addEventListener(p, m, v);
    for (const p of X.changers) c.addEventListener(p, u, v);
    for (const p of X.leavers) c.addEventListener(p, u, v);
    for (const p of X.prevents) c.addEventListener(p, u, v);
    return c
}

function ip(e, t, n, o) {
    const r = Math.round(o / 4),
        s = [];
    for (const f of n) {
        if (f.mapTo === nr) continue;
        const a = (f.symbol || ap(f.mapTo)).toUpperCase(),
            c = cp(f, e),
            i = Ae(a, c, o);
        i.style.position = "absolute";
        const d = f.style;
        if (d)
            for (const l of Object.keys(d)) i.style[l] = d[l];
        if (f.position !== void 0) {
            const l = f.position.left,
                m = f.position.top,
                u = f.position.bottom,
                v = f.position.right;
            l !== void 0 && (i.style.left = r * l + o * (l - 1) + "px"), v !== void 0 && (i.style.right = r * v + o * (v - 1) + "px"), m !== void 0 && (i.style.top = r * m + o * (m - 1) + "px"), u !== void 0 && (i.style.bottom = r * u + o * (u - 1) + "px")
        }
        e.mouseOverlay.appendChild(i), s.push(i)
    }
    return () => {
        for (const f of s) f.parentElement === e.mouseOverlay && e.mouseOverlay.removeChild(f)
    }
}

function lo(e, t) {
    const n = document.createElement("div");
    return n.className = e, t !== void 0 && (n.innerHTML = t), n
}

function ap(e) {
    return typeof e == "number" ? rp[e] : e
}

function cp(e, t) {
    return e.action === "click" ? {
        onClick: () => t.fireKeyPress(e.mapTo)
    } : {
        onDown: () => t.fireKeyDown(e.mapTo),
        onUp: () => t.fireKeyUp(e.mapTo)
    }
}
const Jt = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    uo = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    en = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    St = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
    lp = {
        fullscreen: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        save: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
        options: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        keyboard: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        up: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        down: Jt,
        do: Jt,
        dw: Jt,
        dwn: Jt,
        left: uo,
        le: uo,
        lft: uo,
        right: en,
        ri: en,
        rght: en,
        rgh: en,
        enter: St,
        en: St,
        enr: St,
        ent: St,
        entr: St
    },
    up = 500,
    dp = 50;

function fp(e, t, n) {
    const o = t.mouseOverlay;
    let r = -1,
        s = 0;
    const f = (d, l) => {
        r = Date.now(), s = 0
    };

    function a(d, l, m, u) {
        m === 0 && u === 0 || (s += Math.abs(m) + Math.abs(u), n.sendMouseRelativeMotion(m, u))
    }
    return Hr(o, t, e, !1, f, a, (d, l) => {
        if (Date.now() - r < up && s < dp) {
            const u = t.pointerButton || 0;
            n.sendMouseButton(u, !0), setTimeout(() => n.sendMouseButton(u, !1), 60)
        }
    }, () => {})
}

function pp(e, t) {
    const n = e.mouseOverlay,
        o = (c, i) => mp(c, i, t, e);
    document.pointerLockElement === n && document.exitPointerLock();

    function r(c, i, d) {
        const l = o(c, i);
        t.sendMouseMotion(l.x, l.y), t.sendMouseButton(d, !0)
    }

    function s(c, i, d) {
        const l = o(c, i);
        t.sendMouseMotion(l.x, l.y), t.sendMouseButton(d, !1)
    }

    function f(c, i, d, l) {
        const m = o(c, i);
        t.sendMouseMotion(m.x, m.y)
    }

    function a(c, i) {
        const d = o(c, i);
        t.sendMouseMotion(d.x, d.y)
    }
    return Hr(n, e, 0, !1, r, f, s, a)
}

function hp(e, t, n) {
    const o = t.mouseOverlay;

    function r() {
        return document.pointerLockElement !== o
    }

    function s(i, d, l) {
        if (r()) {
            (o.requestPointerLock || o.mozRequestPointerLock || o.webkitRequestPointerLock).call(o);
            return
        }
        n.sendMouseButton(l, !0)
    }

    function f(i, d, l) {
        r() || n.sendMouseButton(l, !1)
    }

    function a(i, d, l, m) {
        r() || l === 0 && m === 0 || n.sendMouseRelativeMotion(l, m)
    }

    function c(i, d) {}
    return Hr(o, t, e, !0, s, a, f, c)
}
const tn = 1 / 100;

function mp(e, t, n, o) {
    const r = n.width(),
        s = n.height(),
        f = o.width,
        a = o.height,
        c = r / s;
    let i = f,
        d = f / c;
    d > a && (d = a, i = a * c);
    const l = (a - d) / 2,
        m = (f - i) / 2;
    let u = Math.max(0, Math.min(1, (e - m) / i)),
        v = Math.max(0, Math.min(1, (t - l) / d));
    return u <= tn && (u = 0), u >= 1 - tn && (u = 1), v <= tn && (v = 0), v >= 1 - tn && (v = 1), {
        x: u,
        y: v
    }
}

function Hr(e, t, n, o, r, s, f, a) {
    let c = 0;
    const i = p => {
            if (p.target !== e) return;
            if (t.pointerDisabled) {
                p.stopPropagation();
                return
            }
            const g = We(p, e, n, o);
            c = g.button || t.pointerButton, r(g.x, g.y, c), p.stopPropagation()
        },
        d = p => {
            if (p.target !== e) return;
            if (t.pointerDisabled) {
                p.stopPropagation();
                return
            }
            const g = We(p, e, n, o);
            s(g.x, g.y, g.mX, g.mY), p.stopPropagation()
        },
        l = p => {
            if (t.pointerDisabled) {
                p.stopPropagation();
                return
            }
            const g = We(p, e, n, o);
            f(g.x, g.y, c), p.stopPropagation()
        },
        m = p => {
            if (p.target !== e) return;
            if (t.pointerDisabled) {
                p.stopPropagation();
                return
            }
            const g = We(p, e, n, o);
            a(g.x, g.y), p.stopPropagation()
        },
        u = p => {
            p.stopPropagation()
        },
        v = {
            capture: !1
        };
    for (const p of X.starters) e.addEventListener(p, i, v);
    for (const p of X.changers) e.addEventListener(p, d, v);
    for (const p of X.enders) e.addEventListener(p, l, v);
    for (const p of X.prevents) e.addEventListener(p, u, v);
    for (const p of X.leavers) e.addEventListener(p, m, v);
    return () => {
        for (const p of X.starters) e.removeEventListener(p, i, v);
        for (const p of X.changers) e.removeEventListener(p, d, v);
        for (const p of X.enders) e.removeEventListener(p, l, v);
        for (const p of X.prevents) e.removeEventListener(p, u, v);
        for (const p of X.leavers) e.removeEventListener(p, m, v)
    }
}

function Uc(e, t, n, o) {
    return e && !X.canLock ? fp(t, n, o) : e ? hp(t, n, o) : pp(n, o)
}
const un = (e, t) => {
        const n = t.x - e.x,
            o = t.y - e.y;
        return Math.sqrt(n * n + o * o)
    },
    vp = (e, t) => {
        const n = t.x - e.x,
            o = t.y - e.y;
        return _p(Math.atan2(o, n))
    },
    gp = (e, t, n) => {
        const o = {
            x: 0,
            y: 0
        };
        return n = Do(n), o.x = e.x - t * Math.cos(n), o.y = e.y - t * Math.sin(n), o
    },
    Do = e => e * (Math.PI / 180),
    _p = e => e * (180 / Math.PI),
    yp = e => isNaN(e.buttons) ? e.pressure !== 0 : e.buttons !== 0,
    fo = new Map,
    ii = e => {
        fo.has(e) && clearTimeout(fo.get(e)), fo.set(e, setTimeout(e, 100))
    },
    xn = (e, t, n) => {
        const o = t.split(/[ ,]+/g);
        let r;
        for (let s = 0; s < o.length; s += 1) r = o[s], e.addEventListener ? e.addEventListener(r, n, !1) : e.attachEvent && e.attachEvent(r, n)
    },
    ai = (e, t, n) => {
        const o = t.split(/[ ,]+/g);
        let r;
        for (let s = 0; s < o.length; s += 1) r = o[s], e.removeEventListener ? e.removeEventListener(r, n) : e.detachEvent && e.detachEvent(r, n)
    },
    Hc = e => (e.preventDefault(), e.type.match(/^touch/) ? e.changedTouches : e),
    ci = () => {
        const e = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
            t = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        return {
            x: e,
            y: t
        }
    },
    li = (e, t) => {
        t.top || t.right || t.bottom || t.left ? (e.style.top = t.top, e.style.right = t.right, e.style.bottom = t.bottom, e.style.left = t.left) : (e.style.left = t.x + "px", e.style.top = t.y + "px")
    },
    $r = (e, t, n) => {
        const o = $c(e);
        for (let r in o)
            if (o.hasOwnProperty(r))
                if (typeof t == "string") o[r] = t + " " + n;
                else {
                    let s = "";
                    for (let f = 0, a = t.length; f < a; f += 1) s += t[f] + " " + n + ", ";
                    o[r] = s.slice(0, -2)
                } return o
    },
    bp = (e, t) => {
        const n = $c(e);
        for (let o in n) n.hasOwnProperty(o) && (n[o] = t);
        return n
    },
    $c = e => {
        const t = {};
        return t[e] = "", ["webkit", "Moz", "o"].forEach(function(o) {
            t[o + e.charAt(0).toUpperCase() + e.slice(1)] = ""
        }), t
    },
    po = (e, t) => {
        for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e
    },
    wp = (e, t) => {
        const n = {};
        for (let o in e) e.hasOwnProperty(o) && t.hasOwnProperty(o) ? n[o] = t[o] : e.hasOwnProperty(o) && (n[o] = e[o]);
        return n
    },
    To = (e, t) => {
        if (e.length)
            for (let n = 0, o = e.length; n < o; n += 1) t(e[n]);
        else t(e)
    },
    xp = (e, t, n) => ({
        x: Math.min(Math.max(e.x, t.x - n), t.x + n),
        y: Math.min(Math.max(e.y, t.y - n), t.y + n)
    });
var kp = "ontouchstart" in window,
    Cp = !!window.PointerEvent,
    Sp = !!window.MSPointerEvent,
    Pt = {
        touch: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend, touchcancel"
        },
        mouse: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
        },
        pointer: {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup, pointercancel"
        },
        MSPointer: {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
        }
    },
    lt, zt = {};
Cp ? lt = Pt.pointer : Sp ? lt = Pt.MSPointer : kp ? (lt = Pt.touch, zt = Pt.mouse) : lt = Pt.mouse;

function He() {}
He.prototype.on = function(e, t) {
    var n = this,
        o = e.split(/[ ,]+/g),
        r;
    n._handlers_ = n._handlers_ || {};
    for (var s = 0; s < o.length; s += 1) r = o[s], n._handlers_[r] = n._handlers_[r] || [], n._handlers_[r].push(t);
    return n
};
He.prototype.off = function(e, t) {
    var n = this;
    return n._handlers_ = n._handlers_ || {}, e === void 0 ? n._handlers_ = {} : t === void 0 ? n._handlers_[e] = null : n._handlers_[e] && n._handlers_[e].indexOf(t) >= 0 && n._handlers_[e].splice(n._handlers_[e].indexOf(t), 1), n
};
He.prototype.trigger = function(e, t) {
    var n = this,
        o = e.split(/[ ,]+/g),
        r;
    n._handlers_ = n._handlers_ || {};
    for (var s = 0; s < o.length; s += 1) r = o[s], n._handlers_[r] && n._handlers_[r].length && n._handlers_[r].forEach(function(f) {
        f.call(n, {
            type: r,
            target: n
        }, t)
    })
};
He.prototype.config = function(e) {
    var t = this;
    t.options = t.defaults || {}, e && (t.options = wp(t.options, e))
};
He.prototype.bindEvt = function(e, t) {
    var n = this;
    return n._domHandlers_ = n._domHandlers_ || {}, n._domHandlers_[t] = function() {
        typeof n["on" + t] == "function" ? n["on" + t].apply(n, arguments) : console.warn('[WARNING] : Missing "on' + t + '" handler.')
    }, xn(e, lt[t], n._domHandlers_[t]), zt[t] && xn(e, zt[t], n._domHandlers_[t]), n
};
He.prototype.unbindEvt = function(e, t) {
    var n = this;
    return n._domHandlers_ = n._domHandlers_ || {}, ai(e, lt[t], n._domHandlers_[t]), zt[t] && ai(e, zt[t], n._domHandlers_[t]), delete n._domHandlers_[t], this
};

function he(e, t) {
    return this.identifier = t.identifier, this.position = t.position, this.frontPosition = t.frontPosition, this.collection = e, this.defaults = {
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        mode: "dynamic",
        zone: document.body,
        lockX: !1,
        lockY: !1,
        shape: "circle"
    }, this.config(t), this.options.mode === "dynamic" && (this.options.restOpacity = 0), this.id = he.id, he.id += 1, this.buildEl().stylize(), this.instance = {
        el: this.ui.el,
        on: this.on.bind(this),
        off: this.off.bind(this),
        show: this.show.bind(this),
        hide: this.hide.bind(this),
        add: this.addToDom.bind(this),
        remove: this.removeFromDom.bind(this),
        destroy: this.destroy.bind(this),
        setPosition: this.setPosition.bind(this),
        resetDirection: this.resetDirection.bind(this),
        computeDirection: this.computeDirection.bind(this),
        trigger: this.trigger.bind(this),
        position: this.position,
        frontPosition: this.frontPosition,
        ui: this.ui,
        identifier: this.identifier,
        id: this.id,
        options: this.options
    }, this.instance
}
he.prototype = new He;
he.constructor = he;
he.id = 0;
he.prototype.buildEl = function(e) {
    return this.ui = {}, this.options.dataOnly ? this : (this.ui.el = document.createElement("div"), this.ui.back = document.createElement("div"), this.ui.front = document.createElement("div"), this.ui.el.className = "nipple collection_" + this.collection.id, this.ui.back.className = "back", this.ui.front.className = "front", this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id), this.ui.el.appendChild(this.ui.back), this.ui.el.appendChild(this.ui.front), this)
};
he.prototype.stylize = function() {
    if (this.options.dataOnly) return this;
    var e = this.options.fadeTime + "ms",
        t = bp("borderRadius", "50%"),
        n = $r("transition", "opacity", e),
        o = {};
    return o.el = {
        position: "absolute",
        opacity: this.options.restOpacity,
        display: "block",
        zIndex: 999
    }, o.back = {
        position: "absolute",
        display: "block",
        width: this.options.size + "px",
        height: this.options.size + "px",
        left: 0,
        marginLeft: -this.options.size / 2 + "px",
        marginTop: -this.options.size / 2 + "px",
        background: this.options.color,
        opacity: ".5"
    }, o.front = {
        width: this.options.size / 2 + "px",
        height: this.options.size / 2 + "px",
        position: "absolute",
        display: "block",
        left: 0,
        marginLeft: -this.options.size / 4 + "px",
        marginTop: -this.options.size / 4 + "px",
        background: this.options.color,
        opacity: ".5",
        transform: "translate(0px, 0px)"
    }, po(o.el, n), this.options.shape === "circle" && po(o.back, t), po(o.front, t), this.applyStyles(o), this
};
he.prototype.applyStyles = function(e) {
    for (var t in this.ui)
        if (this.ui.hasOwnProperty(t))
            for (var n in e[t]) this.ui[t].style[n] = e[t][n];
    return this
};
he.prototype.addToDom = function() {
    return this.options.dataOnly || document.body.contains(this.ui.el) ? this : (this.options.zone.appendChild(this.ui.el), this)
};
he.prototype.removeFromDom = function() {
    return this.options.dataOnly || !document.body.contains(this.ui.el) ? this : (this.options.zone.removeChild(this.ui.el), this)
};
he.prototype.destroy = function() {
    clearTimeout(this.removeTimeout), clearTimeout(this.showTimeout), clearTimeout(this.restTimeout), this.trigger("destroyed", this.instance), this.removeFromDom(), this.off()
};
he.prototype.show = function(e) {
    var t = this;
    return t.options.dataOnly || (clearTimeout(t.removeTimeout), clearTimeout(t.showTimeout), clearTimeout(t.restTimeout), t.addToDom(), t.restCallback(), setTimeout(function() {
        t.ui.el.style.opacity = 1
    }, 0), t.showTimeout = setTimeout(function() {
        t.trigger("shown", t.instance), typeof e == "function" && e.call(this)
    }, t.options.fadeTime)), t
};
he.prototype.hide = function(e) {
    var t = this;
    if (t.options.dataOnly) return t;
    if (t.ui.el.style.opacity = t.options.restOpacity, clearTimeout(t.removeTimeout), clearTimeout(t.showTimeout), clearTimeout(t.restTimeout), t.removeTimeout = setTimeout(function() {
            var n = t.options.mode === "dynamic" ? "none" : "block";
            t.ui.el.style.display = n, typeof e == "function" && e.call(t), t.trigger("hidden", t.instance)
        }, t.options.fadeTime), t.options.restJoystick) {
        const n = t.options.restJoystick,
            o = {};
        o.x = n === !0 || n.x !== !1 ? 0 : t.instance.frontPosition.x, o.y = n === !0 || n.y !== !1 ? 0 : t.instance.frontPosition.y, t.setPosition(e, o)
    }
    return t
};
he.prototype.setPosition = function(e, t) {
    var n = this;
    n.frontPosition = {
        x: t.x,
        y: t.y
    };
    var o = n.options.fadeTime + "ms",
        r = {};
    r.front = $r("transition", ["transform"], o);
    var s = {
        front: {}
    };
    s.front = {
        transform: "translate(" + n.frontPosition.x + "px," + n.frontPosition.y + "px)"
    }, n.applyStyles(r), n.applyStyles(s), n.restTimeout = setTimeout(function() {
        typeof e == "function" && e.call(n), n.restCallback()
    }, n.options.fadeTime)
};
he.prototype.restCallback = function() {
    var e = this,
        t = {};
    t.front = $r("transition", "none", ""), e.applyStyles(t), e.trigger("rested", e.instance)
};
he.prototype.resetDirection = function() {
    this.direction = {
        x: !1,
        y: !1,
        angle: !1
    }
};
he.prototype.computeDirection = function(e) {
    var t = e.angle.radian,
        n = Math.PI / 4,
        o = Math.PI / 2,
        r, s, f;
    if (t > n && t < n * 3 && !e.lockX ? r = "up" : t > -n && t <= n && !e.lockY ? r = "left" : t > -n * 3 && t <= -n && !e.lockX ? r = "down" : e.lockY || (r = "right"), e.lockY || (t > -o && t < o ? s = "left" : s = "right"), e.lockX || (t > 0 ? f = "up" : f = "down"), e.force > this.options.threshold) {
        var a = {},
            c;
        for (c in this.direction) this.direction.hasOwnProperty(c) && (a[c] = this.direction[c]);
        var i = {};
        this.direction = {
            x: s,
            y: f,
            angle: r
        }, e.direction = this.direction;
        for (c in a) a[c] === this.direction[c] && (i[c] = !0);
        if (i.x && i.y && i.angle) return e;
        (!i.x || !i.y) && this.trigger("plain", e), i.x || this.trigger("plain:" + s, e), i.y || this.trigger("plain:" + f, e), i.angle || this.trigger("dir dir:" + r, e)
    } else this.resetDirection();
    return e
};

function de(e, t) {
    var n = this;
    n.nipples = [], n.idles = [], n.actives = [], n.ids = [], n.pressureIntervals = {}, n.manager = e, n.id = de.id, de.id += 1, n.defaults = {
        zone: document.body,
        multitouch: !1,
        maxNumberOfNipples: 10,
        mode: "dynamic",
        position: {
            top: 0,
            left: 0
        },
        catchDistance: 200,
        size: 100,
        threshold: .1,
        color: "white",
        fadeTime: 250,
        dataOnly: !1,
        restJoystick: !0,
        restOpacity: .5,
        lockX: !1,
        lockY: !1,
        shape: "circle",
        dynamicPage: !1,
        follow: !1
    }, n.config(t), (n.options.mode === "static" || n.options.mode === "semi") && (n.options.multitouch = !1), n.options.multitouch || (n.options.maxNumberOfNipples = 1);
    const o = getComputedStyle(n.options.zone.parentElement);
    return o && o.display === "flex" && (n.parentIsFlex = !0), n.updateBox(), n.prepareNipples(), n.bindings(), n.begin(), n.nipples
}
de.prototype = new He;
de.constructor = de;
de.id = 0;
de.prototype.prepareNipples = function() {
    var e = this,
        t = e.nipples;
    t.on = e.on.bind(e), t.off = e.off.bind(e), t.options = e.options, t.destroy = e.destroy.bind(e), t.ids = e.ids, t.id = e.id, t.processOnMove = e.processOnMove.bind(e), t.processOnEnd = e.processOnEnd.bind(e), t.get = function(n) {
        if (n === void 0) return t[0];
        for (var o = 0, r = t.length; o < r; o += 1)
            if (t[o].identifier === n) return t[o];
        return !1
    }
};
de.prototype.bindings = function() {
    var e = this;
    e.bindEvt(e.options.zone, "start"), e.options.zone.style.touchAction = "none", e.options.zone.style.msTouchAction = "none"
};
de.prototype.begin = function() {
    var e = this,
        t = e.options;
    if (t.mode === "static") {
        var n = e.createNipple(t.position, e.manager.getIdentifier());
        n.add(), e.idles.push(n)
    }
};
de.prototype.createNipple = function(e, t) {
    var n = this,
        o = n.manager.scroll,
        r = {},
        s = n.options,
        f = {
            x: n.parentIsFlex ? o.x : o.x + n.box.left,
            y: n.parentIsFlex ? o.y : o.y + n.box.top
        };
    if (e.x && e.y) r = {
        x: e.x - f.x,
        y: e.y - f.y
    };
    else if (e.top || e.right || e.bottom || e.left) {
        var a = document.createElement("DIV");
        a.style.display = "hidden", a.style.top = e.top, a.style.right = e.right, a.style.bottom = e.bottom, a.style.left = e.left, a.style.position = "absolute", s.zone.appendChild(a);
        var c = a.getBoundingClientRect();
        s.zone.removeChild(a), r = e, e = {
            x: c.left + o.x,
            y: c.top + o.y
        }
    }
    var i = new he(n, {
        color: s.color,
        size: s.size,
        threshold: s.threshold,
        fadeTime: s.fadeTime,
        dataOnly: s.dataOnly,
        restJoystick: s.restJoystick,
        restOpacity: s.restOpacity,
        mode: s.mode,
        identifier: t,
        position: e,
        zone: s.zone,
        frontPosition: {
            x: 0,
            y: 0
        },
        shape: s.shape
    });
    return s.dataOnly || (li(i.ui.el, r), li(i.ui.front, i.frontPosition)), n.nipples.push(i), n.trigger("added " + i.identifier + ":added", i), n.manager.trigger("added " + i.identifier + ":added", i), n.bindNipple(i), i
};
de.prototype.updateBox = function() {
    var e = this;
    e.box = e.options.zone.getBoundingClientRect()
};
de.prototype.bindNipple = function(e) {
    var t = this,
        n, o = function(r, s) {
            n = r.type + " " + s.id + ":" + r.type, t.trigger(n, s)
        };
    e.on("destroyed", t.onDestroyed.bind(t)), e.on("shown hidden rested dir plain", o), e.on("dir:up dir:right dir:down dir:left", o), e.on("plain:up plain:right plain:down plain:left", o)
};
de.prototype.pressureFn = function(e, t, n) {
    var o = this,
        r = 0;
    clearInterval(o.pressureIntervals[n]), o.pressureIntervals[n] = setInterval((function() {
        var s = e.force || e.pressure || e.webkitForce || 0;
        s !== r && (t.trigger("pressure", s), o.trigger("pressure " + t.identifier + ":pressure", s), r = s)
    }).bind(o), 100)
};
de.prototype.onstart = function(e) {
    var t = this,
        n = t.options,
        o = e;
    e = Hc(e), t.updateBox();
    var r = function(s) {
        t.actives.length < n.maxNumberOfNipples ? t.processOnStart(s) : o.type.match(/^touch/) && (Object.keys(t.manager.ids).forEach(function(f) {
            if (Object.values(o.touches).findIndex(function(c) {
                    return c.identifier === f
                }) < 0) {
                var a = [e[0]];
                a.identifier = f, t.processOnEnd(a)
            }
        }), t.actives.length < n.maxNumberOfNipples && t.processOnStart(s))
    };
    return To(e, r), t.manager.bindDocument(), !1
};
de.prototype.processOnStart = function(e) {
    var t = this,
        n = t.options,
        o, r = t.manager.getIdentifier(e),
        s = e.force || e.pressure || e.webkitForce || 0,
        f = {
            x: e.pageX,
            y: e.pageY
        },
        a = t.getOrCreate(r, f);
    a.identifier !== r && t.manager.removeIdentifier(a.identifier), a.identifier = r;
    var c = function(d) {
        d.trigger("start", d), t.trigger("start " + d.id + ":start", d), d.show(), s > 0 && t.pressureFn(e, d, d.identifier), t.processOnMove(e)
    };
    if ((o = t.idles.indexOf(a)) >= 0 && t.idles.splice(o, 1), t.actives.push(a), t.ids.push(a.identifier), n.mode !== "semi") c(a);
    else {
        var i = un(f, a.position);
        if (i <= n.catchDistance) c(a);
        else {
            a.destroy(), t.processOnStart(e);
            return
        }
    }
    return a
};
de.prototype.getOrCreate = function(e, t) {
    var n = this,
        o = n.options,
        r;
    return /(semi|static)/.test(o.mode) ? (r = n.idles[0], r ? (n.idles.splice(0, 1), r) : o.mode === "semi" ? n.createNipple(t, e) : (console.warn("Coudln't find the needed nipple."), !1)) : (r = n.createNipple(t, e), r)
};
de.prototype.processOnMove = function(e) {
    var t = this,
        n = t.options,
        o = t.manager.getIdentifier(e),
        r = t.nipples.get(o),
        s = t.manager.scroll;
    if (!yp(e)) {
        this.processOnEnd(e);
        return
    }
    if (!r) {
        console.error("Found zombie joystick with ID " + o), t.manager.removeIdentifier(o);
        return
    }
    if (n.dynamicPage) {
        var f = r.el.getBoundingClientRect();
        r.position = {
            x: s.x + f.left,
            y: s.y + f.top
        }
    }
    r.identifier = o;
    var a = r.options.size / 2,
        c = {
            x: e.pageX,
            y: e.pageY
        };
    n.lockX && (c.y = r.position.y), n.lockY && (c.x = r.position.x);
    var i = un(c, r.position),
        d = vp(c, r.position),
        l = Do(d),
        m = i / a,
        u = {
            distance: i,
            position: c
        },
        v, p;
    if (r.options.shape === "circle" ? (v = Math.min(i, a), p = gp(r.position, v, d)) : (p = xp(c, r.position, a), v = un(p, r.position)), n.follow) {
        if (i > a) {
            let b = c.x - p.x,
                C = c.y - p.y;
            r.position.x += b, r.position.y += C, r.el.style.top = r.position.y - (t.box.top + s.y) + "px", r.el.style.left = r.position.x - (t.box.left + s.x) + "px", i = un(c, r.position)
        }
    } else c = p, i = v;
    var g = c.x - r.position.x,
        _ = c.y - r.position.y;
    r.frontPosition = {
        x: g,
        y: _
    }, n.dataOnly || (r.ui.front.style.transform = "translate(" + g + "px," + _ + "px)");
    var y = {
        identifier: r.identifier,
        position: c,
        force: m,
        pressure: e.force || e.pressure || e.webkitForce || 0,
        distance: i,
        angle: {
            radian: l,
            degree: d
        },
        vector: {
            x: g / a,
            y: -_ / a
        },
        raw: u,
        instance: r,
        lockX: n.lockX,
        lockY: n.lockY
    };
    y = r.computeDirection(y), y.angle = {
        radian: Do(180 - d),
        degree: 180 - d
    }, r.trigger("move", y), t.trigger("move " + r.id + ":move", y)
};
de.prototype.processOnEnd = function(e) {
    var t = this,
        n = t.options,
        o = t.manager.getIdentifier(e),
        r = t.nipples.get(o),
        s = t.manager.removeIdentifier(r.identifier);
    r && (n.dataOnly || r.hide(function() {
        n.mode === "dynamic" && (r.trigger("removed", r), t.trigger("removed " + r.id + ":removed", r), t.manager.trigger("removed " + r.id + ":removed", r), r.destroy())
    }), clearInterval(t.pressureIntervals[r.identifier]), r.resetDirection(), r.trigger("end", r), t.trigger("end " + r.id + ":end", r), t.ids.indexOf(r.identifier) >= 0 && t.ids.splice(t.ids.indexOf(r.identifier), 1), t.actives.indexOf(r) >= 0 && t.actives.splice(t.actives.indexOf(r), 1), /(semi|static)/.test(n.mode) ? t.idles.push(r) : t.nipples.indexOf(r) >= 0 && t.nipples.splice(t.nipples.indexOf(r), 1), t.manager.unbindDocument(), /(semi|static)/.test(n.mode) && (t.manager.ids[s.id] = s.identifier))
};
de.prototype.onDestroyed = function(e, t) {
    var n = this;
    n.nipples.indexOf(t) >= 0 && n.nipples.splice(n.nipples.indexOf(t), 1), n.actives.indexOf(t) >= 0 && n.actives.splice(n.actives.indexOf(t), 1), n.idles.indexOf(t) >= 0 && n.idles.splice(n.idles.indexOf(t), 1), n.ids.indexOf(t.identifier) >= 0 && n.ids.splice(n.ids.indexOf(t.identifier), 1), n.manager.removeIdentifier(t.identifier), n.manager.unbindDocument()
};
de.prototype.destroy = function() {
    var e = this;
    e.unbindEvt(e.options.zone, "start"), e.nipples.forEach(function(n) {
        n.destroy()
    });
    for (var t in e.pressureIntervals) e.pressureIntervals.hasOwnProperty(t) && clearInterval(e.pressureIntervals[t]);
    e.trigger("destroyed", e.nipples), e.manager.unbindDocument(), e.off()
};

function ve(e) {
    var t = this;
    t.ids = {}, t.index = 0, t.collections = [], t.scroll = ci(), t.config(e), t.prepareCollections();
    var n = function() {
        var r;
        t.collections.forEach(function(s) {
            s.forEach(function(f) {
                r = f.el.getBoundingClientRect(), f.position = {
                    x: t.scroll.x + r.left,
                    y: t.scroll.y + r.top
                }
            })
        })
    };
    xn(window, "resize", function() {
        ii(n)
    });
    var o = function() {
        t.scroll = ci()
    };
    return xn(window, "scroll", function() {
        ii(o)
    }), t.collections
}
ve.prototype = new He;
ve.constructor = ve;
ve.prototype.prepareCollections = function() {
    var e = this;
    e.collections.create = e.create.bind(e), e.collections.on = e.on.bind(e), e.collections.off = e.off.bind(e), e.collections.destroy = e.destroy.bind(e), e.collections.get = function(t) {
        var n;
        return e.collections.every(function(o) {
            return n = o.get(t), !n
        }), n
    }
};
ve.prototype.create = function(e) {
    return this.createCollection(e)
};
ve.prototype.createCollection = function(e) {
    var t = this,
        n = new de(t, e);
    return t.bindCollection(n), t.collections.push(n), n
};
ve.prototype.bindCollection = function(e) {
    var t = this,
        n, o = function(r, s) {
            n = r.type + " " + s.id + ":" + r.type, t.trigger(n, s)
        };
    e.on("destroyed", t.onDestroyed.bind(t)), e.on("shown hidden rested dir plain", o), e.on("dir:up dir:right dir:down dir:left", o), e.on("plain:up plain:right plain:down plain:left", o)
};
ve.prototype.bindDocument = function() {
    var e = this;
    e.binded || (e.bindEvt(document, "move").bindEvt(document, "end"), e.binded = !0)
};
ve.prototype.unbindDocument = function(e) {
    var t = this;
    (!Object.keys(t.ids).length || e === !0) && (t.unbindEvt(document, "move").unbindEvt(document, "end"), t.binded = !1)
};
ve.prototype.getIdentifier = function(e) {
    var t;
    return e ? (t = e.identifier === void 0 ? e.pointerId : e.identifier, t === void 0 && (t = this.latest || 0)) : t = this.index, this.ids[t] === void 0 && (this.ids[t] = this.index, this.index += 1), this.latest = t, this.ids[t]
};
ve.prototype.removeIdentifier = function(e) {
    var t = {};
    for (var n in this.ids)
        if (this.ids[n] === e) {
            t.id = n, t.identifier = this.ids[n], delete this.ids[n];
            break
        } return t
};
ve.prototype.onmove = function(e) {
    var t = this;
    return t.onAny("move", e), !1
};
ve.prototype.onend = function(e) {
    var t = this;
    return t.onAny("end", e), !1
};
ve.prototype.oncancel = function(e) {
    var t = this;
    return t.onAny("end", e), !1
};
ve.prototype.onAny = function(e, t) {
    var n = this,
        o, r = "processOn" + e.charAt(0).toUpperCase() + e.slice(1);
    t = Hc(t);
    var s = function(a, c, i) {
            i.ids.indexOf(c) >= 0 && (i[r](a), a._found_ = !0)
        },
        f = function(a) {
            o = n.getIdentifier(a), To(n.collections, s.bind(null, a, o)), a._found_ || n.removeIdentifier(o)
        };
    return To(t, f), !1
};
ve.prototype.destroy = function() {
    var e = this;
    e.unbindDocument(!0), e.ids = {}, e.index = 0, e.collections.forEach(function(t) {
        t.destroy()
    }), e.off()
};
ve.prototype.onDestroyed = function(e, t) {
    var n = this;
    if (n.collections.indexOf(t) < 0) return !1;
    n.collections.splice(n.collections.indexOf(t), 1)
};
const ui = new ve,
    Vc = {
        create: function(e) {
            return ui.create(e)
        },
        factory: ui
    };

function Pp(e, t, n) {
    const o = Vc.create({
        zone: e.mouseOverlay,
        multitouch: !0,
        maxNumberOfNipples: 2
    });
    let r = -1;
    const s = l => {
            e.fireKeyDown(l), r = l
        },
        f = () => {
            r !== -1 && (e.fireKeyUp(r), r = -1)
        },
        a = {},
        c = {},
        i = {};
    for (const l of n) l.event === "end:release" ? a[l.joystickId] = !0 : l.mapTo !== nr && (l.event === "tap" ? c[l.joystickId] = l.mapTo : o.on(l.event, () => {
        i[l.joystickId] = Date.now(), f(), s(l.mapTo)
    }));
    const d = {};
    return o.on("start", () => {
        const l = o.ids.length - 1;
        d[l] = Date.now()
    }), o.on("end", () => {
        const l = o.ids.length - 1,
            m = Date.now() - d[l];
        a[l] === !0 && f(), c[l] && m < 500 && i[l] < d[l] && e.fireKeyPress(c[l])
    }), () => o.destroy()
}

function Wc(e, t, n, o, r, s) {
    const f = Math.round(o / 4);
    let a = !1;
    const c = () => {
            const v = a ? "flex" : "none";
            for (const p of d) p != l && (p.style.display = v)
        },
        i = () => {
            a = !a, c()
        },
        d = [Ep(t, n), Ae("keyboard", {
            onClick: () => {
                e.toggleKeyboard(), a && (a = !1, c())
            }
        }, o), Ae("options", {
            onClick: i
        }, o)],
        l = d[d.length - 1],
        m = Fc("emulator-options"),
        u = "none";
    for (const v of d) v !== l && v.classList.add("emulator-button-control"), v.style.marginRight = f + "px", v.style.marginBottom = f + "px", v !== l && (v.style.display = u), m.appendChild(v);
    return m.style.position = "absolute", m.style.right = s + "px", m.style.top = r + "px", e.mouseOverlay.appendChild(m), () => {
        e.mouseOverlay.removeChild(m)
    }
}

function Ep(e, t) {
    if (e.length <= 1) return document.createElement("div");
    const n = document.createElement("select");
    n.classList.add("emulator-control-select");
    for (const o of e) {
        const r = document.createElement("option");
        r.value = o, r.innerHTML = o, n.appendChild(r)
    }
    return n.onchange = o => {
        const r = o.target.value;
        t(r)
    }, ep(n, !1), n
}

function qc(e, t, n) {
    const o = n || {};

    function r(s) {
        return o[s] !== void 0 ? o[s] : s
    }
    return e.setOnKeyDown(s => {
        t.sendKeyEvent(r(s), !0)
    }), e.setOnKeyUp(s => {
        t.sendKeyEvent(r(s), !1)
    }), e.setOnKeyPress(s => {
        t.simulateKeyPress(r(s))
    }), e.setOnKeysPress(s => {
        t.simulateKeyPress(...s)
    }), () => {
        e.setOnKeyDown(s => {}), e.setOnKeyUp(s => {}), e.setOnKeyPress(s => {}), e.setOnKeysPress(s => {})
    }
}

function Op(e, t, n, o) {
    const r = Object.keys(n),
        s = {
            keyboard: () => {},
            mouse: () => {},
            gestures: () => {},
            buttons: () => {}
        },
        f = c => {
            s.keyboard(), s.mouse(), s.gestures(), s.buttons(), s.keyboard = () => {}, s.mouse = () => {}, s.gestures = () => {}, s.buttons = () => {};
            const i = n[c];
            i !== void 0 && (s.keyboard = qc(t, o, i.mapper), i.gestures !== void 0 && i.gestures.length > 0 ? s.gestures = Pp(t, o, i.gestures) : s.mouse = Uc(e.autolock, e.sensitivity, t, o), i.buttons !== void 0 && i.buttons.length && (s.buttons = ip(t, o, i.buttons, 54)))
        },
        a = t.options.optionControls?.length === 0 ? () => {} : Wc(t, r, f, 54, 54 / 4, 0);
    return f("default"), () => {
        s.gestures(), s.buttons(), s.mouse(), s.keyboard(), a()
    }
}

function Mp(e) {
    switch (e) {
        case "square":
            return Ap();
        case "honeycomb":
            return Dp()
    }
    throw new Error("Unknown grid type " + e)
}

function Ap() {
    class e {
        aspect = 200 / 320;
        getConfiguration(n, o, r = 1) {
            const s = this.getCols(),
                f = this.getRows(),
                a = Math.floor(s / 2),
                c = Math.floor(f / 2),
                i = n * 5 / 100 / 2,
                d = i,
                l = (n - i * 2) / s * r,
                m = (o - d * 2) / f * r,
                u = Math.min(l, m),
                v = [];
            for (let p = 0; p < f; ++p) {
                const g = [];
                for (let _ = 0; _ < s; ++_) g.push({
                    centerX: _ < a ? i + u * (_ + 1 / 2) : n - i - u * (s - _ - 1 + 1 / 2),
                    centerY: p < c ? d + u * (p + 1 / 2) : o - d - u * (f - p - 1 + 1 / 2)
                });
                v.push(g)
            }
            return {
                gridType: "square",
                cells: v,
                columnWidth: u,
                rowHeight: u,
                columnsPadding: i,
                rowsPadding: d,
                width: n,
                height: o
            }
        }
        getCols() {
            return 10
        }
        getRows() {
            return Math.floor(this.getCols() * this.aspect) + 1
        }
    }
    return new e
}

function Dp() {
    class e {
        aspect = 200 / 320;
        getConfiguration(n, o, r = 1) {
            const s = this.getCols(),
                f = this.getRows(),
                a = Math.floor(s / 2),
                c = Math.floor(f / 2),
                i = n * 5 / 100 / 2,
                d = i,
                l = (n - i * 2) / s * r,
                m = (o - d * 2) / f * r,
                u = Math.min(l, m),
                v = [];
            for (let p = 0; p < f; ++p) {
                const g = [],
                    _ = p % 2 == 0 ? s : s - 1,
                    y = p % 2 == 0 ? 0 : u / 2;
                for (let b = 0; b < _; ++b) g.push({
                    centerX: b < a ? y + i + u * (b + 1 / 2) : y + n - i - u * (s - b - 1 + 1 / 2),
                    centerY: p < c ? d + u * (p + 1 / 2) : o - d - u * (f - p - 1 + 1 / 2)
                });
                v.push(g)
            }
            return {
                gridType: "honeycomb",
                cells: v,
                columnWidth: u,
                rowHeight: u,
                columnsPadding: i,
                rowsPadding: d,
                width: n,
                height: o
            }
        }
        getCols() {
            return 10
        }
        getRows() {
            return Math.floor(this.getCols() * this.aspect) + 1
        }
    }
    return new e
}

function Tp(e, t, n, o, r, s, f) {
    let a = t.layers[0];
    if (f !== void 0) {
        for (const c of t.layers)
            if (c.title === f) {
                a = c;
                break
            }
    }
    return Rp(a, e, n, o, r, s)
}
class jp {
    sensors = {};
    activate(t, n) {
        const o = this.sensors[n + "_" + t];
        o !== void 0 && o.activate()
    }
    deactivate(t, n) {
        const o = this.sensors[n + "_" + t];
        o !== void 0 && o.deactivate()
    }
    register(t, n, o) {
        this.sensors[n + "_" + t] = o
    }
}
const Ip = {
    Key: Lp,
    Options: Bp,
    Keyboard: Xc,
    Switch: Np,
    ScreenMove: zp,
    PointerButton: Fp,
    PointerMove: Kp,
    PointerReset: Up,
    PointerToggle: Hp,
    NippleActivator: $p
};

function Rp(e, t, n, o, r, s) {
    const f = qc(t, n),
        a = Uc(o.autolock, o.sensitivity, t, n),
        c = [];

    function i(d, l) {
        for (const _ of c) _();
        c.splice(0, c.length);
        const u = Mp(e.grid).getConfiguration(d, l, s),
            v = new jp;
        for (const _ of e.controls) {
            const {
                row: y,
                column: b,
                type: C
            } = _;
            C === "NippleActivator" && Vp(u, y, b)
        }
        let p = -1;
        if (t.options.optionControls?.length === 0)
            for (const _ of e.controls) {
                const {
                    row: y,
                    type: b
                } = _;
                if (b === "Options") {
                    p = y;
                    break
                }
            }
        const g = {};
        if (r)
            for (const _ of e.controls) {
                const {
                    row: y
                } = _;
                let b = _.column;
                const C = u.cells[y].length,
                    x = C / 2;
                y === p && b >= x && (b = Math.min(b + 1, C - 1)), g[y] === void 0 && (g[y] = {
                    leftStart: x,
                    leftEnd: 0,
                    rightStart: C - 1,
                    rightEnd: x
                }), b < x ? (g[y].leftStart = Math.min(g[y].leftStart, b), g[y].leftEnd = Math.max(g[y].leftEnd, b)) : (g[y].rightStart = Math.min(g[y].rightStart, b), g[y].rightEnd = Math.max(g[y].rightEnd, b))
            }
        for (const _ of e.controls) {
            const y = Ip[_.type];
            if (y === void 0) {
                console.error("Factory for control '" + _.type + "' is not defined");
                continue
            }
            const b = {
                    ..._
                },
                C = u.cells[_.row].length,
                x = C / 2;
            if (p === _.row && _.column >= x && (b.column = Math.min(b.column + 1, C - 1)), r) {
                const {
                    leftStart: j,
                    leftEnd: N,
                    rightStart: z,
                    rightEnd: F
                } = g[b.row], R = b.column < x;
                R ? b.column += x + (x - N) - j - 1 : b.column -= x + (z - x) - (C - F) + 1, b.column >= C ? (console.error("Column", b.column, "is out of bound", C, R ? "[leftSide]" : "[rightSide]", g), b.column = C - 1) : b.column < 0 && (console.error("Column", b.column, "is out of bound", 0, R ? "[leftSide]" : "[rightSide]", g), b.column = 0)
            }
            const T = y(b, t, n, u, v, o);
            c.push(T)
        }
    }
    return t.addOnResize(i), i(t.width, t.height), () => {
        t.removeOnResize(i), f(), a();
        for (const d of c) d()
    }
}

function Lp(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i], m = {
        onDown: () => {
            for (const v of e.mapTo) n.sendKeyEvent(v, !0)
        },
        onUp: () => {
            for (const v of e.mapTo) n.sendKeyEvent(v, !1)
        }
    };
    if (r.register(c, i, {
            activate: m.onDown,
            deactivate: m.onUp
        }), xt(o, c, i)) return () => {};
    const u = Ae(e.symbol, m, a);
    return u.style.position = "absolute", u.style.left = d - u.widthPx / 2 + "px", u.style.top = l - u.heightPx / 2 + "px", t.mouseOverlay.appendChild(u), () => t.mouseOverlay.removeChild(u)
}

function Bp(e, t, n, o, r, s) {
    if (t.options.optionControls?.length === 0) return () => {};
    if (t.options.optionControls !== void 0 && t.options.optionControls.length === 1 && t.options.optionControls[0] === "keyboard") return Xc(e, t, n, o);
    const {
        cells: f,
        columnWidth: a,
        rowHeight: c
    } = o, {
        row: i,
        column: d
    } = e, {
        centerX: l,
        centerY: m
    } = f[i][d], u = m - c / 2, v = l - a / 2, p = o.width - v - a;
    return Wc(t, ["default"], () => {}, a, u, p)
}

function Xc(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i], m = Ae("keyboard", {
        onUp: () => t.toggleKeyboard()
    }, a);
    return m.style.position = "absolute", m.style.left = d - m.widthPx / 2 + "px", m.style.top = l - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), () => {
        t.mouseOverlay.removeChild(m)
    }
}

function Np(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i], m = Ae(e.symbol, {
        onUp: () => s.setActiveConfig(s.getActiveConfig(), e.layerName)
    }, a);
    return m.style.position = "absolute", m.style.left = d - m.widthPx / 2 + "px", m.style.top = l - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), () => {
        t.mouseOverlay.removeChild(m)
    }
}

function zp(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i];
    let m = .5,
        u = .5;
    e.direction.indexOf("up") >= 0 && (u = 0), e.direction.indexOf("down") >= 0 && (u = 1), e.direction.indexOf("left") >= 0 && (m = 0), e.direction.indexOf("right") >= 0 && (m = 1);
    const v = {
        onDown: () => {
            n.sendMouseMotion(m, u)
        },
        onUp: () => {
            n.sendMouseMotion(.5, .5)
        }
    };
    if (r.register(c, i, {
            activate: v.onDown,
            deactivate: v.onUp
        }), xt(o, c, i)) return () => {};
    const p = Ae(e.symbol, v, a);
    return p.style.position = "absolute", p.style.left = d - p.widthPx / 2 + "px", p.style.top = l - p.heightPx / 2 + "px", t.mouseOverlay.appendChild(p), () => t.mouseOverlay.removeChild(p)
}

function Fp(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i,
        click: d
    } = e, {
        centerX: l,
        centerY: m
    } = f[c][i], u = {
        onDown: () => {
            d ? n.sendMouseButton(e.button, !0) : t.pointerButton = e.button
        },
        onUp: () => {
            d ? n.sendMouseButton(e.button, !1) : t.pointerButton = 0
        }
    };
    if (r.register(c, i, {
            activate: u.onDown,
            deactivate: u.onUp
        }), xt(o, c, i)) return () => {};
    const v = Ae(e.symbol, u, a);
    return v.style.position = "absolute", v.style.left = l - v.widthPx / 2 + "px", v.style.top = m - v.heightPx / 2 + "px", t.mouseOverlay.appendChild(v), () => t.mouseOverlay.removeChild(v)
}

function Kp(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i,
        x: d,
        y: l
    } = e, {
        centerX: m,
        centerY: u
    } = f[c][i], v = {
        onDown: () => {
            n.sendMouseMotion(d, l)
        },
        onUp: () => {
            n.sendMouseMotion(d, l)
        }
    };
    if (r.register(c, i, {
            activate: v.onDown,
            deactivate: v.onUp
        }), xt(o, c, i)) return () => {};
    const p = Ae(e.symbol, v, a);
    return p.style.position = "absolute", p.style.left = m - p.widthPx / 2 + "px", p.style.top = u - p.heightPx / 2 + "px", t.mouseOverlay.appendChild(p), () => t.mouseOverlay.removeChild(p)
}

function Up(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i], m = {
        onDown: () => {
            n.sendMouseSync()
        }
    };
    if (r.register(c, i, {
            activate: m.onDown,
            deactivate: () => {}
        }), xt(o, c, i)) return () => {};
    const u = Ae(e.symbol, m, a);
    return u.style.position = "absolute", u.style.left = d - u.widthPx / 2 + "px", u.style.top = l - u.heightPx / 2 + "px", t.mouseOverlay.appendChild(u), () => t.mouseOverlay.removeChild(u)
}

function Hp(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a
    } = o, {
        row: c,
        column: i
    } = e, {
        centerX: d,
        centerY: l
    } = f[c][i], m = {
        onDown: () => {
            t.pointerDisabled = !t.pointerDisabled, t.pointerDisabled ? u.classList.contains("emulator-button-highlight") || u.classList.add("emulator-button-highlight") : u.classList.remove("emulator-button-highlight")
        }
    };
    if (r.register(c, i, {
            activate: m.onDown,
            deactivate: () => {}
        }), xt(o, c, i)) return () => {};
    const u = Ae(e.symbol, m, a);
    return u.style.position = "absolute", u.style.left = d - u.widthPx / 2 + "px", u.style.top = l - u.heightPx / 2 + "px", t.mouseOverlay.appendChild(u), () => t.mouseOverlay.removeChild(u)
}

function $p(e, t, n, o, r, s) {
    const {
        cells: f,
        columnWidth: a,
        rowHeight: c,
        width: i,
        height: d
    } = o, {
        row: l,
        column: m
    } = e, {
        centerX: u,
        centerY: v
    } = f[l][m], p = document.createElement("div"), g = 1.5, _ = Math.max(0, u - a * g), y = Math.max(0, v - c * g), b = Math.max(0, i - u - a * g), C = Math.max(0, d - v - c * g);
    p.style.position = "absolute", p.style.zIndex = "999", p.style.left = _ + "px", p.style.top = y + "px", p.style.right = b + "px", p.style.bottom = C + "px", t.mouseOverlay.appendChild(p);
    const x = Vc.create({
        zone: p,
        multitouch: !1,
        maxNumberOfNipples: 1,
        mode: "static",
        follow: !1,
        dynamicPage: !0,
        size: Math.max(a, c) * 1.5,
        position: {
            left: (i - b - _) / 2 + "px",
            top: (d - C - y) / 2 + "px"
        }
    });
    let T = -1,
        j = -1;
    x.on("move", (R, q) => {
        if (q.distance < 10) {
            r.deactivate(j, T), T = -1, j = -1;
            return
        }
        let Z = -1,
            G = -1;
        const Y = 360 / 8,
            se = Y / 2,
            ue = q.angle.degree;
        ue > se && ue <= se + Y ? (Z = m + 1, G = l - 1) : ue > se + Y && ue <= se + Y * 2 ? (Z = m, G = l - 1) : ue > se + Y * 2 && ue <= se + Y * 3 ? (Z = m - 1, G = l - 1) : ue > se + Y * 3 && ue <= se + Y * 4 ? (Z = m - 1, G = l) : ue > se + Y * 4 && ue <= se + Y * 5 ? (Z = m - 1, G = l + 1) : ue > se + Y * 5 && ue <= se + Y * 6 ? (Z = m, G = l + 1) : ue > se + Y * 6 && ue <= se + Y * 7 ? (Z = m + 1, G = l + 1) : (Z = m + 1, G = l), (T !== Z || j !== G) && (r.deactivate(j, T), r.activate(G, Z), T = Z, j = G)
    });
    let N = !1;
    x.on("start", () => {
        N = !0
    }), x.on("end", () => {
        N = !1, r.deactivate(j, T), j = -1, T = -1
    });
    const z = {
        capture: !0
    };

    function F(R) {
        N && x.processOnEnd(R)
    }
    for (const R of X.enders) t.mouseOverlay.addEventListener(R, F, z);
    return () => {
        x.destroy(), t.mouseOverlay.removeChild(p);
        for (const R of X.enders) t.mouseOverlay.removeEventListener(R, F, z)
    }
}

function xt(e, t, n) {
    return e.cells[t][n].hidden === !0
}

function Vp(e, t, n) {
    function o(r, s) {
        if (!(r === t && s === n) && r >= 0 && r < e.cells.length) {
            const f = e.cells[r];
            s >= 0 && s < f.length && (f[s].hidden = !0)
        }
    }
    for (let r = t - 1; r <= t + 1; ++r)
        for (let s = n - 1; s <= n + 1; ++s) o(r, s)
}

function Wp(e, t, n) {
    let o = 0,
        r = 0;
    const s = () => {
            Ur(e, o, r, n)
        },
        f = (c, i) => {
            o = c, r = i, s()
        };
    t.events().onFrameSize(f), t.events().onFrame(() => {
        console.error("onFrame should not be called")
    }), f(t.width(), t.height());
    const a = new ResizeObserver(s);
    return a.observe(e.parentElement), window.addEventListener("resize", s), () => {
        t.events().onFrameSize(() => {}), t.events().onFrame(() => {}), a.disconnect(), window.removeEventListener("resize", s)
    }
}

function qp(e, t) {
    Xp(t), Gp(e), th(t), eh(t), Qp(t), Yp(e, t), nh(e, t), Zp(e, t), Jp(t)
}

function Xp(e) {
    const t = Q();
    te(() => {
        e.events().onMessage((n, ...o) => {
            n === "error" && o[0]?.startsWith("[panic]") && t(K.actions.showToast({
                message: o[0],
                intent: "panic"
            }))
        })
    }, [e, t])
}

function Gp(e) {
    const t = M(n => n.dos.imageRendering);
    te(() => {
        e.style.imageRendering = t === "smooth" ? "auto" : t
    }, [e, t])
}

function Yp(e, t) {
    const n = M(s => s.dos.mobileControls),
        o = M(s => s.dos.mouseCapture),
        r = M(s => s.dos.mouseSensitivity);
    te(() => {
        if (!n) return Jf(o, r, 0, e, t)
    }, [e, t, o, r, n])
}

function Qp(e) {
    const t = Q(),
        n = M(o => o.dos.backend) === "dosboxX";
    te(() => zf(window, e, n, t), [e, n, t])
}

function Zp(e, t) {
    const n = ge(),
        o = M(f => f.dos.renderBackend),
        r = M(f => f.dos.renderAspect);
    let s;
    switch (r) {
        case "1/1":
            s = 1;
            break;
        case "5/4":
            s = 5 / 4;
            break;
        case "4/3":
            s = 4 / 3;
            break;
        case "16/10":
            s = 16 / 10;
            break;
        case "16/9":
            s = 16 / 9;
            break;
        case "Fit":
            s = Ca
    }
    te(() => {
        let f = () => {};
        if (n.offscreenCanvas) f = Wp(e, t, s);
        else if (o === "canvas") f = oi(e, t, s);
        else try {
            f = Uf(e, t, n, s)
        } catch (a) {
            console.error("Unalbe to start webgl render", a), f = oi(e, t, s)
        }
        return f
    }, [e, t, o, s])
}

function Jp(e) {
    const t = De();
    te(() => Wf(e, o => {
        let r = 1;
        const s = () => {
            const a = Fe(t).dos.volume;
            Math.abs(r - a) >= .05 && (o(a), r = a)
        };
        return t.subscribe(s)
    }), [e])
}

function eh(e) {
    const t = M(o => o.dos.paused),
        n = M(o => o.ui.documentHidden);
    te(() => {
        t || n ? e.pause() : e.resume()
    }, [t, n, e])
}

function th(e) {
    const t = Q(),
        n = ne();
    te(() => {
        let o = 0,
            r = 0,
            s = 0,
            f = Pn,
            a = 0,
            c = 0,
            i = 0,
            d = 0,
            l = Date.now();
        const m = setInterval(() => {
            e.asyncifyStats().then(u => {
                const v = Date.now() - l,
                    p = v / 1e3;
                if (p > 0) {
                    const g = {
                        offscreenCanvas: u.offscreenCanvas ?? !1,
                        cyclesPerMs: Math.round((u.cycles - o) / v),
                        nonSkippableSleepPreSec: Math.round((u.nonSkippableSleepCount - r) / p),
                        sleepPerSec: Math.round((u.sleepCount - s) / p),
                        sleepTimePerSec: Math.round((u.sleepTime - f) / p),
                        framePerSec: Math.round((u.messageFrame - a) / p),
                        soundPerSec: Math.round((u.messageSound - c) / p),
                        msgSentPerSec: Math.round((u.messageSent - i) / p),
                        msgRecvPerSec: Math.round((u.messageReceived - d) / p),
                        netSent: u.netSent,
                        netRecv: u.netRecv,
                        driveIo: structuredClone(u.driveIo) ?? []
                    };
                    if (g.driveIo.length > 0) {
                        let _ = n("preloading_sockdrive"),
                            y = !1;
                        for (let b = 0; b < g.driveIo.length; b++) {
                            const C = g.driveIo[b],
                                x = Math.min(100, Math.round(C.read * 100 / C.preload));
                            _ += " " + (b === 0 ? "C: " : ", D: ") + " " + x + "%", y = y || x < 100
                        }
                        y && t(K.actions.showToast({
                            message: _,
                            long: !0
                        }))
                    }
                    o = u.cycles, r = u.nonSkippableSleepCount, s = u.sleepCount, f = u.sleepTime, a = u.messageFrame, c = u.messageSound, i = u.messageSent, d = u.messageReceived, l = Date.now()
                }
            })
        }, 1e3);
        return () => {
            clearInterval(m)
        }
    }, [t, e])
}

function nh(e, t) {
    const n = ge(),
        o = M(l => l.dos.mouseCapture),
        r = M(l => l.dos.mirroredControls),
        s = 1 + M(l => l.dos.scaleControls),
        f = .1 + M(l => l.dos.mouseSensitivity) * 3,
        a = M(l => l.dos.mobileControls),
        c = Q();
    let i = M(l => l.dos.softKeyboard);

    function d() {
        i = !i, c(I.actions.softKeyboard(i))
    }
    te(() => {
        a ? n.layers === null ? (n.layers = (async function() {
            const l = new tp(e.parentElement, e, d, {}),
                m = Kc((await t.config()).jsdosConf);
            let u, v = null,
                p = () => {};
            const g = {
                config: m,
                layers: l,
                autolock: o,
                sensitivity: f,
                mirroredControls: r,
                scaleControls: s,
                activeLayer: u,
                getActiveConfig: () => v,
                setActiveConfig: (_, y) => {
                    v = _, u = y, p(), _ === null ? (p = () => {}, l.mouseOverlay.style.display = "none") : _.version === void 0 ? (l.mouseOverlay.style.display = "block", p = Op(g, l, _, t)) : (l.mouseOverlay.style.display = "block", p = Tp(l, _, t, g, g.mirroredControls, g.scaleControls, y))
                }
            };
            return g.setActiveConfig(m), g
        })(), n.layers.catch(console.error)) : n.layers.then(l => {
            l.autolock = o, l.sensitivity = f, l.mirroredControls = r, l.scaleControls = s, l.setActiveConfig(l.getActiveConfig() ?? l.config, l.activeLayer)
        }) : n.layers !== null && n.layers.then(l => l.setActiveConfig(null))
    }, [t, o, f, a, r, s])
}
const oh = [{
    cpu: "a7",
    width: 640,
    height: 1136,
    model: "iPhone 5/iPhone 5s"
}, {
    cpu: "a7",
    width: 1536,
    height: 2048,
    model: "iPad Air/iPad Mini 2/iPad Mini 3"
}, {
    cpu: "a8",
    width: 640,
    height: 1136,
    model: "iPod touch (6th gen)"
}, {
    cpu: "a8",
    width: 750,
    height: 1334,
    model: "iPhone 6"
}, {
    cpu: "a8",
    width: 1242,
    height: 2208,
    model: "iPhone 6 Plus"
}, {
    cpu: "a8",
    width: 1536,
    height: 2048,
    model: "iPad Air 2/iPad Mini 4"
}, {
    cpu: "a9",
    width: 640,
    height: 1136,
    model: "iPhone SE"
}, {
    cpu: "a9",
    width: 750,
    height: 1334,
    model: "iPhone 6s"
}, {
    cpu: "a9",
    width: 1242,
    height: 2208,
    model: "iPhone 6s Plus"
}, {
    cpu: "a9x",
    width: 1536,
    height: 2048,
    model: "iPad Pro (1st gen 9.7-inch)"
}, {
    cpu: "a9x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (1st gen 12.9-inch)"
}, {
    cpu: "a10",
    width: 750,
    height: 1334,
    model: "iPhone 7"
}, {
    cpu: "a10",
    width: 1242,
    height: 2208,
    model: "iPhone 7 Plus"
}, {
    cpu: "a10x",
    width: 1668,
    height: 2224,
    model: "iPad Pro (2th gen 10.5-inch)"
}, {
    cpu: "a10x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (2th gen 12.9-inch)"
}, {
    cpu: "a11",
    width: 750,
    height: 1334,
    model: "iPhone 8"
}, {
    cpu: "a11",
    width: 1242,
    height: 2208,
    model: "iPhone 8 Plus"
}, {
    cpu: "a11",
    width: 1125,
    height: 2436,
    model: "iPhone X"
}, {
    cpu: "a12",
    width: 828,
    height: 1792,
    model: "iPhone Xr"
}, {
    cpu: "a12",
    width: 1125,
    height: 2436,
    model: "iPhone Xs"
}, {
    cpu: "a12",
    width: 1242,
    height: 2688,
    model: "iPhone Xs Max"
}, {
    cpu: "a12x",
    width: 1668,
    height: 2388,
    model: "iPad Pro (3rd gen 11-inch)"
}, {
    cpu: "a12x",
    width: 2048,
    height: 2732,
    model: "iPad Pro (3rd gen 12.9-inch)"
}, {
    cpu: "a13",
    width: 828,
    height: 1792,
    model: "iPhone 11"
}, {
    cpu: "a13",
    width: 1125,
    height: 2436,
    model: "iPhone 11 Pro"
}, {
    cpu: "a13",
    width: 1242,
    height: 2688,
    model: "iPhone 11 Pro Max"
}, {
    cpu: "a14",
    width: 1080,
    height: 2340,
    model: "iPhone 12 Mini"
}, {
    cpu: "a14",
    width: 1170,
    height: 2532,
    model: "iPhone 12"
}, {
    cpu: "a14",
    width: 1284,
    height: 2778,
    model: "iPhone 12 Pro Max"
}, {
    cpu: "a15",
    width: 1080,
    height: 2340,
    model: "iPhone 13 Mini"
}, {
    cpu: "a15",
    width: 1170,
    height: 2532,
    model: "iPhone 13"
}, {
    cpu: "a15",
    width: 1284,
    height: 2778,
    model: "iPhone 13 Pro Max"
}, {
    cpu: "a15",
    width: 1170,
    height: 2532,
    model: "iPhone 14"
}, {
    cpu: "a15",
    width: 1284,
    height: 2778,
    model: "iPhone 14 Plus"
}, {
    cpu: "a16",
    width: 1179,
    height: 2556,
    model: "iPhone 14 Pro"
}, {
    cpu: "a16",
    width: 1290,
    height: 2796,
    model: "iPhone 14 Pro Max"
}, {
    cpu: "a16",
    width: 1179,
    height: 2556,
    model: "iPhone 15"
}, {
    cpu: "a16",
    width: 1290,
    height: 2796,
    model: "iPhone 15 Plus"
}, {
    cpu: "a17",
    width: 1179,
    height: 2556,
    model: "iPhone 15 Pro"
}, {
    cpu: "a17",
    width: 1290,
    height: 2796,
    model: "iPhone 15 Pro Max"
}, {
    cpu: "a18",
    width: 1179,
    height: 2556,
    model: "iPhone 16"
}, {
    cpu: "a18",
    width: 1290,
    height: 2796,
    model: "iPhone 16 Plus"
}, {
    cpu: "a18",
    width: 1206,
    height: 2622,
    model: "iPhone 16 Pro"
}, {
    cpu: "a18",
    width: 1320,
    height: 2868,
    model: "iPhone 16 Pro Max"
}];

function rh(e) {
    const t = navigator.userAgent + " ";

    function n(u, v, p) {
        const g = RegExp(u, "i").exec(v);
        return g && g[p]
    }

    function o() {
        const u = {
            Yandex: {
                prefixs: ["YaApp", "YaBrowser"]
            },
            Firefox: {
                prefixs: ["Firefox"]
            },
            Opera: {
                prefixs: ["OPR"]
            },
            Edge: {
                prefixs: ["Edg"]
            },
            "Samsung Browser": {
                prefixs: ["SamsungBrowser"]
            },
            "Internet Explorer": {
                prefixs: ["Trident", "MSIE"]
            },
            Chrome: {
                prefixs: ["Chrome"]
            },
            "Chrome on iOS": {
                prefixs: ["CriOS"]
            },
            "Firefox on iOS": {
                prefixs: ["FxiOS"]
            },
            Safari: {
                prefixs: ["Safari"]
            },
            Facebook: {
                prefixs: ["FBSV"],
                regExp: "[/;](.*?)[;\\)]"
            }
        };
        for (const [v, p] of Object.entries(u))
            for (const g of p.prefixs) {
                const _ = g + (p.regExp || "[/ ](.*?)[ \\)]");
                let y = n(_, t, 1);
                if (y !== null) return v === "Safari" && (y = n("Version/(.*?) ", t, 1)), v === "Internet Explorer" && (y = n("rv:(.*?)\\)? ", t, 1) || y), {
                    name: v,
                    version: y
                }
            }
        return {
            name: "",
            version: ""
        }
    }

    function r() {
        const u = {
            Android: ["Android ([0-9_.]+)"],
            Windows: ["Windows (.*?)[;)]"],
            iOS: ["iPhone OS ([0-9_.]+)", "iPad.*? OS ([0-9_.]+)"],
            macOS: ["Mac OS X ([0-9_.]+)"],
            Linux: ["FreeBSD( )", "OpenBSD( )", "Linux|X11()"],
            "Search Bot": ["bot|google|baidu|bing|msn|teoma|slurp|yandex"]
        };
        for (const [v, p] of Object.entries(u))
            for (const g of p) {
                let _ = n(g, t, 1);
                if (_ != null) return _ = _.replace(/_/g, "."), v === "Windows" && (_ = {
                    "NT 5.0": "2000",
                    "NT 5.1": "XP",
                    "NT 5.2": "Server 2003",
                    "NT 6.0": "Vista",
                    "NT 6.1": "7",
                    "NT 6.2": "8",
                    "NT 6.3": "8.1",
                    "NT 10.0": "10"
                } [_] || _), {
                    name: v,
                    version: _
                }
            }
        return {
            name: "",
            version: ""
        }
    }
    const s = o(),
        f = r(),
        a = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints !== void 0 && navigator.maxTouchPoints > 2,
        c = navigator.hardwareConcurrency,
        i = ih(e),
        d = ah(),
        l = d.height,
        m = d.width;
    return {
        browser: s.name,
        browserVersion: s.version ?? "???",
        mobile: a,
        os: f.name,
        osVersion: f.version,
        gpu: i,
        deviceModel: sh(a, i, {
            width: m,
            height: l
        }),
        cpu: (c || 0).toString(),
        emscripten: "3.1.68"
    }
}

function sh(e, t, n) {
    return e ? t.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i) ? ch(n) : lh(navigator.userAgent) : "desktop/laptop"
}

function ih(e) {
    const t = e.getExtension("WEBGL_debug_renderer_info");
    return t && e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "-"
}

function ah() {
    const e = window.devicePixelRatio || 1;
    return {
        width: Math.min(screen.width, screen.height) * e,
        height: Math.max(screen.width, screen.height) * e
    }
}

function ch(e) {
    let t = "";
    for (const n of oh) e.width === Math.min(n.width, n.height) && e.height === Math.max(n.width, n.height) && (t += t.length > 0 ? "/" + n.model : n.model);
    return t.length > 0 ? t : "unknown iPhone"
}

function lh(e) {
    const t = [/Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/, /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android(.+)Build/];
    for (const n of t) {
        const o = e.match(n);
        if (o && o.length > 0) return o[1]
    }
    return "unknown Android"
}

function uh(e) {
    const t = e.ci,
        n = ge(),
        o = M(v => v.dos.backend),
        r = M(v => v.dos.worker),
        s = M(v => v.auth.account?.token),
        f = M(v => v.dos.emuVersion),
        a = M(v => v.dos.backendHardware) && n.options.backendHardware,
        [c, i] = ae(!1),
        [d, l] = ae({
            runs: 0,
            time: 0,
            vax: 0,
            pc: null
        }),
        [m, u] = ae({
            sleepPerSec: 0,
            cyclesPerMs: 0
        });
    return te(() => {
        const v = [];
        t.events().onStdout(b => {
            for (const C of v) C(b)
        });
        const p = t.events().onStdout;
        t.events().onStdout = b => {
            v.push(b)
        };
        let g = Date.now(),
            _ = 0,
            y = 0;
        return t.events().onStdout(b => {
            if (!b.startsWith("dhry2:")) return;
            t.asyncifyStats().then(R => {
                const q = Date.now() - g;
                u({
                    sleepPerSec: Math.round((R.sleepCount - _) * 1e3 / q),
                    cyclesPerMs: Math.round((R.cycles - y) / q)
                }), g = Date.now(), _ = R.sleepCount, y = R.cycles
            });
            const [C, x, T, j] = b.split(" "), N = Number.parseInt(x), z = Number.parseFloat(T), F = Number.parseFloat(j);
            z >= 5e3 ? (l({
                runs: N,
                time: Math.round(z * 10) / 10,
                vax: Math.round(F * 100) / 100,
                pc: dh(F)
            }), (async () => {
                const R = n.gl;
                if (R) {
                    const q = {
                        token: s ?? "",
                        test: "dhry2",
                        jsdos: "8.3.20",
                        emu: f,
                        backend: o,
                        worker: r,
                        hardware: a !== !1 && a !== null && a !== void 0,
                        result: Math.round(F * 100) / 100,
                        ...rh(R)
                    };
                    await fetch(Jo + "/perf/set", {
                        method: "POST",
                        body: JSON.stringify(q)
                    })
                }
            })().catch(console.error).finally(() => i(!0))) : l({
                runs: N,
                time: Math.round(z * 10) / 10,
                vax: Math.round(F * 100) / 100,
                pc: null
            })
        }), () => {
            t.events().onStdout = p
        }
    }, [t]), h("div", {
        class: "dhry2-window",
        children: [h("div", {
            class: "title",
            children: "Dhrystone 2 Benchmark"
        }), h("div", {
            class: "backend",
            children: ["Backend: ", o + "-" + (r ? "worker" : "direct"), " ", a ? "(WS)" : "(WA)"]
        }), h("div", {
            class: "results",
            children: [h("div", {
                children: "VAX:"
            }), h("div", {
                children: d.vax
            }), h("div", {
                children: "Cycles p/ms:"
            }), h("div", {
                children: m.cyclesPerMs
            }), h("div", {
                children: "Sleep p/sec:"
            }), h("div", {
                children: m.sleepPerSec
            }), h("div", {
                children: "Runs:"
            }), h("div", {
                children: d.runs
            }), h("div", {
                children: "Time:"
            }), h("div", {
                children: [d.time, " ", h("span", {
                    children: "ms"
                })]
            }), c && d.pc !== null && h("div", {
                children: "PC:"
            }), c && d.pc !== null && h("div", {
                children: d.pc ?? "..."
            })]
        }), !c && h("div", {
            class: "mt-14 text-yellow-500",
            children: "Please wait until this message disappears"
        }), !c && !s && h("div", {
            class: "mt-14 text-yellow-500",
            children: "Please enter your key to submit results"
        })]
    })
}

function dh(e) {
    let t = 0;
    for (; t * 2 + 1 < nn.length && !(nn[t * 2 + 1] >= e);) t++;
    return t = Math.min(nn.length / 2 - 1, t), (nn[t * 2] + "").trim()
}
const nn = ["AMD 80386 40MHz", 13.7, "IBM 486D2 50MHz", 22.4, "80486 DX2 66MHz", 35.3, "IBM 486BL 100MHz", 40.9, "AMD 5X86 133MHz", 84.5, "Pentium 75MHz", 87.1, "Cyrix P150 120MHz", 160, "Pentium 100MHz", 122, "Cyrix PP166 133MHz", 180, "IBM 6x86 150MHz", 188, "Pentium 133MHz", 181, "Pentium 166MHz", 189, "Cyrix PR233 188MHz", 232, "Pentium 200MHz", 269, "Pentium MMX 200MHz", 276, "AMD K6 200MHz", 289, "Pentium Pro 200MHz", 312, "Celeron A 300MHz", 484, "Pentium II 300MHz", 477, "AMD K62 500MHz", 606, "AMD K63 450MHz", 645, "Pentium II 450MHz", 713, "Celeron A 450MHz", 720, "Pentium III 450MHz", 722, "Pentium III 600MHz", 959, "Athlon 600MHz", 942, "Duron 600MHz", 999, "Pentium III 1000MHz", 1595, "PIII Tualatin 1200MHz", 1907, "Pentium 4 1700MHz", 1843, "Athlon Tbird 1000MHz", 1659, "Duron 1000MHz", 1674, "Celeron M 1295MHz", 2273, "Atom 1600MHz", 1828, "Pentium 4 1900MHz", 2003, "Atom 1666MHz", 1948, "P4 Xeon 2200MHz", 2265, "Atom Z8300 1840MHz", 2686, "Athlon 4 1600MHz", 2830, "Pentium M 1862MHz", 3933, "Ath4 Barton 1800MHz", 3172, "Pentium 4E 3000MHz", 3553, "Athlon XP 2080MHz", 3700, "Turion 64 M 1900MHz", 3742, "Pentium 4 3066MHz", 4012, "Opteron 1991MHz", 3985, "Core 2 Duo M 1830MHz", 4952, "Athlon XP 2338MHz", 4160, "Athlon 64 2150MHz", 4288, "Pentium 4 3678MHz", 4227, "Athlon 64 2211MHz", 4462, "Celeron C2 M 2000MHz", 5275, "Core 2 Duo 1 CP 2400MHz", 6446, "Core i5 2467M 2300MHz", 4752, "Phenom II 1 CP 3000MHz", 7615, "Core i7 930 3066MHz", 8684, "Core i7 860 3460MHz", 9978, "Core i7 3930K 3800MHz", 11197, "Core i7 4820K 3900MHz", 11867, "Core i7 4820K 3900MHz", 11978, "Core i7 3930K", 13877],
    fh = 1.2297,
    on = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"'],
    ho = [91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 62, 90, 63, 64, 65, 66, 91, 67, 68, 69, 70, 71, 91, 72, 73, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 74, 75, 76, 77, 78, 79, 80, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 81, 91, 82, 83, 84, 85, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 86, 87, 88, 89, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91];
let rn = 0;
const di = {
        encode: function(e) {
            const t = e.length;
            let n = "",
                o = 0,
                r = 0,
                s = 0;
            for (rn = 0; rn < t; ++rn) o |= (e[rn] & 255) << r, r += 8, r > 13 && (s = o & 8191, s > 88 ? (o >>= 13, r -= 13) : (s = o & 16383, o >>= 14, r -= 14), n += on[s % 91], n += on[s / 91 | 0]);
            return r > 0 && (n += on[o % 91], (r > 7 || o > 90) && (n += on[o / 91 | 0])), n
        },
        decode: function(e) {
            let t = e.length;
            const n = t / fh | 0;
            let o = 0,
                r = 0,
                s = -1,
                f = 0,
                a = -1,
                c = 0,
                i = new Array(n);
            for (f = 0; f < t; ++f)
                if (c = e.charCodeAt(f), ho[c] !== 91)
                    if (s === -1) s = ho[c];
                    else {
                        s += ho[c] * 91, o |= s << r, r += (s & 8191) > 88 ? 13 : 14;
                        do ++a >= n ? i.push(o & 255) : i[a] = o & 255, o >>= 8, r -= 8; while (r > 7);
                        s = -1
                    } s !== -1 && (++a >= n ? i.push(o | s << r) : i[a] = o | s << r), a > -1 && a < n - 1 && (i = i.slice(0, a + 1));
            const d = new Uint8Array(i.length);
            for (f = 0, t = i.length; f < t; ++f) d[f] = i[f];
            return d
        }
    },
    $e = new TextDecoder,
    sn = new TextEncoder,
    fi = 2e8,
    ph = ["wc-install", "wc-run", "wc-pack-fs-to-bundle", "wc-add-key", "wc-mouse-move", "wc-mouse-button", "wc-mouse-sync", "wc-exit", "wc-sync-sleep", "wc-pause", "wc-resume", "wc-mute", "wc-unmute", "wc-connect", "wc-disconnect", "wc-backend-event", "wc-asyncify-stats", "wc-fs-tree", "wc-fs-get-file", "wc-send-data-chunk", "wc-net-connected", "wc-net-received", "wc-sockdrive-opened", "wc-sockdrive-new-range", "wc-unload"],
    jo = {};
ph.forEach((e, t) => jo[e] = t);
const hh = ["ws-extract-progress", "ws-ready", "ws-server-ready", "ws-frame-set-size", "ws-update-lines", "ws-log", "ws-warn", "ws-err", "ws-stdout", "ws-exit", "ws-persist", "ws-sound-init", "ws-sound-push", "ws-config", "ws-sync-sleep", "ws-connected", "ws-disconnected", "ws-asyncify-stats", "ws-fs-tree", "ws-send-data-chunk", "ws-net-disconnect", "ws-net-send", "ws-sockdrive-open", "ws-sockdrive-ready", "ws-sockdrive-close", "ws-sockdrive-load-range", "ws-sockdrive-write-sector", "ws-unload"],
    Gc = {};
hh.forEach((e, t) => Gc[t] = e);
class mh {
    socket;
    constructor(t) {
        this.socket = t
    }
    send(t) {
        this.socket.send(t)
    }
    onMessage(t) {
        let n = null,
            o = null,
            r = 0,
            s = [];
        const f = d => {
                if (n === null || n < 7) {
                    if (n === null)
                        if (d.length < 6 || d[0] !== 1 || re(d, 1) !== 1) {
                            console.error("unparsable version message on transport layer, blob size:", d.length, " error: too short");
                            return
                        } else n = d[5];
                    t(d)
                } else o === null ? (o = re(d, 0), s.push(d.slice(4)), r += d.length - 4) : (s.push(d), r += d.length);
                if (o !== null && r === o) {
                    const l = new Uint8Array(o);
                    let m = 0;
                    for (const u of s) l.set(u, m), m += u.length;
                    s = [], r = 0, o = null, t(l)
                }
            },
            a = [];
        let c = !1;
        this.socket.addEventListener("message", d => {
            a.push({
                size: d.data.size,
                buffer: d.data.arrayBuffer()
            }), c || (c = !0, i().catch(console.error).finally(() => c = !1))
        });
        const i = async () => {
            for (; a.length > 0;) {
                const {
                    size: d,
                    buffer: l
                } = a.shift();
                try {
                    const m = new Uint8Array(await l);
                    f(m)
                } catch (m) {
                    console.error("unparsable message on transport layer, blob size:", d, " error:", m.message), console.error(m)
                }
            }
        }
    }
    onError(t) {
        this.socket.addEventListener("error", n => {
            t(n), this.socket.close()
        })
    }
}
class pi {
    socket;
    sessionId = Date.now() + "";
    hardware;
    onInit = () => {};
    net = null;
    cycles = 0;
    version = 0;
    handler = () => {};
    readUint64(t, n) {
        return re(t, n) + re(t, n + 4) * 2 ** 32
    }
    sendMessageToSocket(t, ...n) {
        let o = 1;
        for (const f of n) o += 4 + (f?.length ?? 0);
        const r = new Uint8Array(o);
        r[0] = typeof t == "string" ? jo[t] : t;
        let s = 1;
        for (const f of n) ce(r, f?.length ?? 0, s), s += 4, f && (r.set(f, s), s += f.length);
        this.socket.send(r)
    }
    readMessage(t) {
        const n = [];
        let o = 1;
        for (; o + 4 <= t.length;) {
            const r = re(t, o);
            if (o += 4, o + r > t.length) throw new Error("read_message out of bounds");
            n.push(t.slice(o, o + r)), o += r
        }
        return {
            id: t[0],
            payload: n
        }
    }
    onMessage(t) {
        const {
            id: n,
            payload: o
        } = this.readMessage(t), r = Gc[n];
        switch (r) {
            case "ws-ready":
                this.version = o && o[0] && o.length > 0 ? o[0][0] : 0, this.onInit(this.version), this.handler(r, {});
                break;
            case "ws-server-ready":
            case "ws-exit":
                r !== "ws-server-ready" && this.handler(r, {});
                break;
            case "ws-stdout":
            case "ws-log":
            case "ws-warn":
            case "ws-err":
                this.handler(r, {
                    tag: $e.decode(o[0]),
                    message: $e.decode(o[1])
                });
                break;
            case "ws-send-data-chunk": {
                const s = {
                    type: $e.decode(o[0]),
                    name: $e.decode(o[1]),
                    data: o[2]
                };
                this.handler(r, {
                    chunk: s
                })
            }
            break;
            case "ws-config":
                this.handler(r, {
                    dosboxConf: o[0],
                    jsdosConf: $e.decode(o[1])
                });
                break;
            case "ws-sound-init":
                this.handler(r, {
                    freq: re(o[0], 0)
                }), this.handler("ws-server-ready", {});
                break;
            case "ws-sound-push":
                this.handler(r, {
                    samples: new Float32Array(o[0].buffer)
                });
                break;
            case "ws-frame-set-size":
                this.handler(r, {
                    width: re(o[0], 0),
                    height: re(o[0], 4)
                });
                break;
            case "ws-update-lines":
                if (o.length > 0) {
                    const s = [];
                    for (const f of o) s.push({
                        start: re(f, 0),
                        heapu8: f.slice(4)
                    });
                    this.handler(r, {
                        lines: s
                    })
                }
                break;
            case "ws-asyncify-stats": {
                this.cycles += re(o[0], 0);
                const s = {
                    messageSent: re(o[0], 4),
                    messageReceived: re(o[0], 8),
                    messageFrame: re(o[0], 12),
                    messageSound: re(o[0], 16),
                    nonSkippableSleepCount: 0,
                    sleepCount: 0,
                    sleepTime: 0,
                    cycles: this.cycles,
                    netSent: 0,
                    netRecv: 0,
                    driveBufferedAmount: 0,
                    driveIo: []
                };
                this.handler(r, s)
            }
            break;
            case "ws-connected":
                this.handler(r, {
                    networkType: o[0][0],
                    address: $e.decode(o[1])
                });
                break;
            case "ws-disconnected":
                this.handler(r, {
                    networkType: o[0][0]
                });
                break;
            case "ws-fs-tree": {
                let s = function(i) {
                    const d = i.split("/");
                    let l = c;
                    for (let m = 1; m < d.length - 1; ++m) {
                        const u = d[m];
                        if (l = l.nodes?.find(v => v.name == u), !l) throw new Error("Unable to find node " + i + ", subdir " + u)
                    }
                    return [l, d[d.length - 1]]
                };
                const f = [];
                for (let i = 0; i < o.length - 1; ++i) f.push({
                    name: $e.decode(o[i]),
                    size: null
                });
                const a = o[o.length - 1];
                for (let i = 0; i < f.length; ++i) {
                    const d = re(a, i * 4);
                    f[i].size = d < 0 ? null : d
                }
                const c = {
                    name: ".",
                    nodes: [],
                    size: null
                };
                for (const {
                        name: i,
                        size: d
                    }
                    of f) {
                    const [l, m] = s(i);
                    l.nodes?.push({
                        name: m,
                        size: d,
                        nodes: d === null ? [] : null
                    })
                }
                this.handler("ws-fs-tree", {
                    fsTree: c
                })
            }
            break;
            case "ws-persist":
                this.handler("ws-persist", {
                    bundle: o.length > 0 ? o[0] : null
                });
                break;
            case "ws-net-send":
                this.handler("ws-net-send", {
                    networkId: re(o[0], 0),
                    data: o[1]
                });
                break;
            case "ws-net-disconnect":
                this.handler("ws-net-disconnect", {
                    networkId: re(o[0], 0)
                });
                break;
            case "ws-unload":
                this.handler("ws-unload", {});
                break;
            case "ws-sockdrive-open":
                this.handler("ws-sockdrive-open", {
                    handle: re(o[0], 0),
                    url: $e.decode(o[1])
                });
                break;
            case "ws-sockdrive-ready":
                this.handler("ws-sockdrive-ready", {
                    handle: re(o[0], 0)
                });
                break;
            case "ws-sockdrive-close":
                this.handler("ws-sockdrive-close", {
                    handle: re(o[0], 0)
                });
                break;
            case "ws-sockdrive-load-range":
                this.handler("ws-sockdrive-load-range", {
                    handle: re(o[0], 0),
                    range: re(o[0], 4)
                });
                break;
            case "ws-sockdrive-write-sector":
                this.handler("ws-sockdrive-write-sector", {
                    handle: re(o[0], 0),
                    sector: re(o[0], 4),
                    data: o[1]
                });
                break;
            default:
                console.warn("WARN! Unhandled server message", r)
        }
    }
    constructor(t, n) {
        this.socket = t, this.socket.onError(o => {
            this.handler("ws-err", {
                tag: "ws",
                message: o.message ?? "Unknown transport layer error"
            }), this.handler("ws-exit", {})
        }), this.socket.onMessage(this.onMessage.bind(this)), this.sendMessageToSocket("wc-install"), this.hardware = null, this.onInit = n
    }
    async sendMessageToServer(t, n) {
        if (n === void 0 || n?.sessionId !== this.sessionId) return;
        const o = jo[t];
        switch (t) {
            case "wc-run": {
                const r = n.token ?? "";
                this.sendMessageToSocket(o, sn.encode(r))
            }
            break;
            case "wc-send-data-chunk": {
                const r = n.chunk;
                this.sendMessageToSocket(o, sn.encode(r.type), sn.encode(r.name), r.data ? new Uint8Array(r.data) : null)
            }
            break;
            case "wc-asyncify-stats":
                this.sendMessageToSocket(o);
                break;
            case "wc-add-key": {
                const r = new Uint8Array(12);
                let s = 0;
                s = ce(r, n.key, s), s = ce(r, n.pressed ? 1 : 0, s), ce(r, n.timeMs, s), this.sendMessageToSocket(o, r)
            }
            break;
            case "wc-mouse-move": {
                const r = new Uint8Array(15);
                let s = 0;
                s = ce(r, Math.abs(n.x) * fi, s), s = ce(r, Math.abs(n.y) * fi, s), s = ce(r, n.timeMs, s), r[s] = n.relative ? 1 : 0, r[s + 1] = n.x >= 0 ? 0 : 1, r[s + 2] = n.y >= 0 ? 0 : 1, this.sendMessageToSocket(o, r)
            }
            break;
            case "wc-mouse-button": {
                const r = new Uint8Array(6);
                r[0] = n.button, r[1] = n.pressed ? 1 : 0, ce(r, n.timeMs, 2), this.sendMessageToSocket(o, r)
            }
            break;
            case "wc-mouse-sync": {
                const r = new Uint8Array(4);
                ce(r, n.timeMs, 0), this.sendMessageToSocket(o, r)
            }
            break;
            case "wc-connect":
                this.sendMessageToSocket(o, new Uint8Array([n.networkType]), sn.encode(n.address));
                break;
            case "wc-fs-tree":
                this.sendMessageToSocket(o);
                break;
            case "wc-pack-fs-to-bundle":
                this.sendMessageToSocket(o, new Uint8Array([n.onlyChanges ? 1 : 0]));
                break;
            case "wc-net-connected": {
                const r = new Uint8Array(4);
                ce(r, n.networkId + 1, 0), this.sendMessageToSocket(o, r)
            }
            break;
            case "wc-net-received": {
                const r = new Uint8Array(4);
                ce(r, n.networkId, 0), this.sendMessageToSocket(o, r, new Uint8Array(n.data))
            }
            break;
            case "wc-sockdrive-opened": {
                const {
                    handle: r,
                    sectorSize: s,
                    emptyRangesCount: f,
                    emptyRanges: a,
                    size: c,
                    heads: i,
                    cylinders: d,
                    sectors: l,
                    aheadRange: m
                } = n, u = new Uint8Array(12 + 4 * f + 4 + 4 + 4 + 4 + 4);
                let v = 0;
                v = ce(u, r, v), v = ce(u, s, v), v = ce(u, f, v);
                for (const p of a) v = ce(u, p, v);
                v = ce(u, c, v), v = ce(u, i, v), v = ce(u, d, v), v = ce(u, l, v), v = ce(u, m, v), this.sendMessageToSocket(o, u)
            }
            break;
            case "wc-sockdrive-new-range": {
                const {
                    handle: r,
                    range: s,
                    buffer: f
                } = n, a = new Uint8Array(8);
                ce(a, r, 0), ce(a, s, 4), this.sendMessageToSocket(o, a, new Uint8Array(f))
            }
            break;
            case "wc-unload":
                this.sendMessageToSocket(o);
                break;
            default:
                console.log("Unhandled client message (wc):", t, o, n);
                break
        }
    }
    initMessageHandler(t) {
        this.handler = (n, o) => {
            o.sessionId = this.sessionId, t(n, o)
        }
    }
    exit() {
        this.sendMessageToSocket("wc-exit")
    }
}

function vh(e, t) {
    return new Promise(n => {
        let o = !1;
        const r = setInterval(() => {
            if (!o)
                if (o = !0, e === "android://") clearInterval(r), console.log("Connected to", e), n(new pi(new gh, t));
                else {
                    const s = new WebSocket(e),
                        f = () => {
                            clearInterval(r), console.log("Connected to", e), n(new pi(new mh(s), t))
                        };
                    s.addEventListener("error", a => {
                        console.error("Can't conect to ", e, a), s.removeEventListener("open", f), s.close(), o = !1
                    }), s.addEventListener("open", f)
                }
        }, 1e3)
    })
}
class gh {
    handler = () => {};
    constructor() {
        window.wsMessage = t => {
            this.handler(di.decode(t))
        }
    }
    send(t) {
        window.android.wcMessage(di.encode(t))
    }
    onMessage(t) {
        this.handler = t
    }
    onError(t) {}
}

function _h(e) {
    const {
        ci: t
    } = e, n = M(u => u.dos.softKeyboard), o = M(u => u.dos.softKeyboardLayout), r = M(u => u.dos.softKeyboardSymbols), s = M(u => u.dos.softKeyboardActiveSymbols), f = M(u => u.dos.softKeyboardActiveLayout), a = Q(), c = r[s % r.length], i = o[f % o.length];
    if (!n || t === null) return null;

    function d(u, v) {
        if (t !== null)
            if (u === "{symbols}") {
                if (v) {
                    const p = (s + 1) % r.length;
                    p !== s && a(I.actions.softKeyboardActiveSymbols(p))
                }
            } else if (u === "{layout}") {
            if (v) {
                const p = (f + 1) % o.length;
                p !== f && a(I.actions.softKeyboardActiveLayout(p))
            }
        } else
            for (const p of yh(u)) t.sendKeyEvent(p, v)
    }

    function l(u) {
        return u.length > 2 && u.startsWith("{") && u.endsWith("}") ? u[1].toUpperCase() + u.substring(2, u.length - 1) : u
    }
    let m = 0;
    return h("div", {
        className: "soft-keyboard-overlay fixed bottom-0 left-0 w-full h-[80vh]  z-50 bg-base-200 bg-opacity-0 flex flex-col p-2 overflow-y-auto",
        children: h("div", {
            className: "flex flex-row justify-between w-full px-4",
            children: [h("div", {
                className: "flex flex-col gap-3 items-start",
                children: i[0].map((u, v) => h("div", {
                    className: "flex flex-row gap-2 items-center",
                    children: u.split(" ").map(p => {
                        const g = c[p] ?? r[0][p] ?? l(p),
                            _ = "keyhelo" + ++m;
                        return h("kbd", {
                            id: _,
                            className: "kbd kbd-md cursor-pointer select-none transition-transform active:scale-95",
                            onPointerDown: () => d(p, !0),
                            onPointerUp: () => d(p, !1),
                            children: g
                        }, p)
                    })
                }, v))
            }), h("div", {
                className: "flex flex-col gap-3 items-end",
                children: i[1].map((u, v) => h("div", {
                    className: "flex flex-row gap-2 items-center",
                    children: u.split(" ").map(p => {
                        const g = c[p] ?? r[0][p] ?? l(p),
                            _ = "keyhelo" + ++m;
                        return h("kbd", {
                            id: _,
                            className: "kbd kbd-md cursor-pointer select-none transition-transform active:scale-95",
                            onPointerDown: () => d(p, !0),
                            onPointerUp: () => d(p, !1),
                            children: g
                        }, p)
                    })
                }, v))
            })]
        })
    })
}

function yh(e) {
    switch (e) {
        case "{enter}":
            return [Or];
        case "{shift}":
            return [Te];
        case "{bksp}":
            return [Er];
        case "{lock}":
            return [Ac];
        case "{tab}":
            return [En];
        case "{space}":
            return [Mr];
        case "{esc}":
            return [Pr];
        case "{ctrl}":
            return [Ht];
        case "{alt}":
            return [_t];
        case "{up}":
            return [zr];
        case "{down}":
            return [Fr];
        case "{left}":
            return [Nr];
        case "{right}":
            return [Kr];
        case ",":
            return [Tr];
        case ".":
            return [Dr];
        case "/":
            return [jr];
        case "'":
            return [Ar];
        case ":":
            return [Te, wn];
        case "{":
            return [Te, yn];
        case "}":
            return [Te, bn];
        case "(":
            return [Te, or];
        case ")":
            return [Te, Pn];
        case "{f1}":
            return [rr];
        case "{f2}":
            return [sr];
        case "{f3}":
            return [ir];
        case "{f4}":
            return [ar];
        case "{f5}":
            return [cr];
        case "{f6}":
            return [lr];
        case "{f7}":
            return [ur];
        case "{f8}":
            return [dr];
        case "{f9}":
            return [fr];
        case "{f10}":
            return [pr];
        case "{f11}":
            return [hr];
        case "{f12}":
            return [mr];
        case "{kp1}":
            return [gr];
        case "{kp2}":
            return [_r];
        case "{kp3}":
            return [yr];
        case "{kp4}":
            return [br];
        case "{kp5}":
            return [wr];
        case "{kp6}":
            return [xr];
        case "{kp7}":
            return [kr];
        case "{kp8}":
            return [Cr];
        case "{kp9}":
            return [Sr];
        case "{kp0}":
            return [vr];
        case "{pgup}":
            return [Rr];
        case "{pgdown}":
            return [Br];
        case "{del}":
            return [On];
        case "{home}":
            return [Ir];
        case "{end}":
            return [Lr];
        case "-":
            return [_n];
        case "=":
            return [Nt];
        case "+":
            return [Te, Nt];
        default:
            if (e.length > 1) return console.warn("Unknown button", e), []
    }
    const t = Ao(e.toUpperCase().charCodeAt(0), 0);
    return t === 0 ? [] : [t]
}
async function bh(e) {
    const t = (e.options.pathPrefix ? e.options.pathPrefix + "jsapi.mjs" : "jsapi.mjs") + (e.options.pathSuffix ?? ""),
        n = (e.options.pathPrefix ? e.options.pathPrefix + "jsapi.wasm" : "jsapi.wasm") + (e.options.pathSuffix ?? ""),
        o = await (await fetch(t)).text(),
        r = URL.createObjectURL(new Blob([o], {
            type: "text/javascript"
        }));
    return new Promise((s, f) => {
        if (window.HumbleNet === void 0) {
            const a = document.createElement("script");
            a.type = "module", a.text = `
import HumbleNet from "${r}";
window.HumbleNetImpl = HumbleNet;
`, a.onerror = f, document.body.appendChild(a);
            const c = setInterval(() => {
                window.HumbleNetImpl !== void 0 && (clearInterval(c), URL.revokeObjectURL(r), window.HumbleNet = () => HumbleNetImpl({
                    locateFile: i => i.endsWith(".wasm") ? n : i
                }), s())
            }, 1e3)
        } else s()
    })
}
async function wh(e, t, n, o, r, s) {
    await bh(s);
    const f = await HumbleNet();
    f.onNetworkError = o;
    const a = (d, l) => {
            const m = f.lengthBytesUTF8(d) + 1,
                u = f.stringToNewUTF8(d);
            l(u, m), f._free(u)
        },
        c = (d, l) => {
            const m = d.byteLength,
                u = f._malloc(m);
            f.HEAPU8.set(d, u);
            const v = l(u, m);
            return f._free(u), v
        },
        i = {};
    return f.aliasQueryAdd = (d, l, m) => {
        i[d].matches.push({
            alias: l,
            peerId: m
        })
    }, f.onAliasQueryEnd = d => {
        i[d].resolve(i[d].matches), delete i[d]
    }, new Promise((d, l) => {
        a(e, m => {
            a(t, u => {
                a(n, v => {
                    try {
                        if (f._connectTo(m, u, v)) {
                            const g = f._malloc(4194304),
                                _ = f._malloc(4),
                                y = {
                                    lib: f,
                                    peerId: 0,
                                    connected: new Set,
                                    wait: C => {
                                        f._wait(C)
                                    },
                                    registerAlias: C => f.pendingRegister ? Promise.reject(new Error("Register already in progress")) : (f.pendingRegister = new Promise((x, T) => {
                                        a(C, j => {
                                            f._registerAlias(j)
                                        }), y.queryAliases("=" + C).then(j => {
                                            j.length === 1 && j[0].peerId === y.peerId ? x() : T(new Error("Alias already in use"))
                                        }).catch(T)
                                    }), f.pendingRegister.finally(() => {
                                        f.pendingRegister = null
                                    })),
                                    unregisterAlias: C => {
                                        a(C, x => {
                                            f._unregisterAlias(x)
                                        })
                                    },
                                    queryAliases: C => (i[C] !== void 0 || (i[C] = {
                                        matches: []
                                    }, i[C].promise = new Promise(x => {
                                        i[C].resolve = x, a(C, T => {
                                            f._queryAliases(T)
                                        })
                                    })), i[C].promise),
                                    sendBinary: (C, x) => {
                                        if (x === y.peerId || x === 0) throw new Error("Cannot send to self (" + x + ")");
                                        return y.connected.add(x), c(C, (T, j) => f._sendto(T, j, x, 0))
                                    },
                                    recvBinary: () => {
                                        const C = f._recvfrom(g, 4194304, _),
                                            x = f.HEAP32[_ / 4];
                                        return C < 0 ? (x !== 0 && y.connected.delete(x), null) : C > 0 ? (y.connected.add(x), {
                                            data: f.HEAPU8.slice(g, g + C),
                                            peerId: x
                                        }) : null
                                    },
                                    disconnect: C => {
                                        f._disconnect(C)
                                    },
                                    shutdown: () => {
                                        try {
                                            f._shutdown()
                                        } catch {}
                                    }
                                };
                            window.net = y;
                            const b = setInterval(() => {
                                if (y.peerId = f._myId(), y.peerId !== 0) {
                                    clearInterval(b), d(y);
                                    const C = setInterval(() => {
                                        f._myId() === 0 && (r(), clearInterval(C))
                                    }, 1e3)
                                }
                                y.wait(4)
                            }, 30)
                        } else l(new Error("Failed to connect to HumbleNet"))
                    } catch (p) {
                        l(p)
                    }
                })
            })
        })
    })
}

function xh(e) {
    const t = Me(null),
        [n, o] = ae(null),
        r = M(b => b.auth.account?.token) ?? "",
        s = M(b => b.dos.worker),
        f = M(b => b.dos.backend),
        a = M(b => b.dos.backendHardware),
        c = M(b => b.dos.noCursor),
        i = M(b => b.ui.pointerLocked),
        d = M(b => b.dos.mouseCapture),
        l = Q(),
        m = ge(),
        u = X.canLock && d && !i ? "cursor-pointer" : c ? "cursor-none" : "",
        v = M(b => b.dos.offscreenCanvas),
        p = M(b => b.dos.sockdrivePreload),
        g = M(b => b.dos.startIpxServer),
        _ = M(b => b.dos.connectIpxAddress),
        y = ne();
    return te(() => {
        try {
            const b = m.loadedBundle;
            let C = b.bundleChanges !== null ? [b.bundle, b.bundleChanges] : b.bundle;
            if (b.initFs !== null)
                if (Array.isArray(C) || (C = [C]), Array.isArray(b.initFs))
                    for (const j of b.initFs) C.push(j);
                else C.push(b.initFs);
            b.bundle = null, b.bundleChanges = null, b.appliedBundleChanges = null, b.initFs = null;
            let x = 0;
            const T = (async () => {
                if (a && m.options.backendHardware)
                    if (f === "dosboxX") console.error("backendHardware is not supported for dosboxX");
                    else {
                        const j = await m.options.backendHardware(f);
                        if (j !== null) return emulators.backend(C, await vh(j, N => {
                            N < Qs && l(K.actions.updateWsWarning(!0)), console.log("wsServer:", N, " expected:", Qs)
                        }), {
                            token: r
                        })
                    } if (v && t.current !== null && typeof t.current.transferControlToOffscreen == "function" && (m.offscreenCanvas = t.current.transferControlToOffscreen()), m.net?.shutdown(), g || _) {
                    const j = g ? y("create_server") : y("lookup_address") + ": " + _;
                    if (l(K.actions.modalText({
                            text: j
                        })), m.net = await wh(dd, fd, pd, N => console.log("network error for peer", N), () => console.log("network disconnected"), m), _) {
                        const N = m.net;
                        Number.parseInt(_) ? x = Number.parseInt(_) : x = await new Promise(F => {
                            const R = async () => {
                                const q = await N.queryAliases("=" + _);
                                q.length === 1 ? F(q[0].peerId) : setTimeout(R, 100)
                            };
                            setTimeout(R, 4)
                        })
                    }
                    l(K.actions.modalTextClear())
                } else m.net = void 0;
                return emulators[(f !== "dosbox" && f !== "dosboxX" ? "dosbox" : f) + (s ? "Worker" : "Direct")](C, {
                    token: r,
                    canvas: m.offscreenCanvas,
                    audioWorklet: !0,
                    sockdrivePreload: p,
                    net: m.net
                })
            })();
            return T.then(j => {
                o(j), l(I.actions.ci(!0)), X.mobile && j.config().then(N => {
                    l(I.actions.mobileControls(Kc(N.jsdosConf) !== null))
                }).catch(N => l(I.actions.emuError(N.message))), m.ci = j, g ? j.sendBackendEvent({
                    type: "wc-trigger-event",
                    event: "hand_ipx_startserver"
                }) : _ && m.net && (l(K.actions.modalText({
                    text: y("connect_to_network") + ": " + _
                })), j.events().onNetworkConnected(() => {
                    l(K.actions.modalTextClear())
                }), j.events().onNetworkDisconnected(() => {
                    l(K.actions.modalText({
                        text: y("unable_to_connect_to_network"),
                        loading: !1
                    })), j.exit()
                }), j.networkConnect(0, x.toString())), Ut(m, "ci-ready", j)
            }).catch(j => l(I.actions.emuError(j.message))), () => {
                T.then(j => {
                    l(I.actions.ci(!1)), m.ci = null, j.exit()
                })
            }
        } catch (b) {
            l(I.actions.emuError(b.message))
        }
    }, [s, f, r, v, p, g, _]), h("div", {
        class: "flex flex-col flex-grow h-full overflow-hidden",
        children: [h("div", {
            class: "bg-black h-full flex-grow overflow-hidden relative",
            children: [h("canvas", {
                class: u,
                ref: t
            }), t.current && n && h(Sh, {
                canvas: t.current,
                ci: n
            }), h(kh, {}), h(Ch, {})]
        }), h(_h, {
            ci: n
        })]
    })
}

function kh() {
    return null
}

function Ch() {
    const e = M(n => n.ui.modalText),
        t = M(n => n.ui.modalTextLoading);
    return e ? h("div", {
        class: "absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center pointer-events-none bg-black/70 gap-2 px-4 py-2 text-white text-center",
        children: [t && h("span", {
            class: "loading loading-spinner loading-md"
        }), h("div", {
            class: "text-4xl",
            children: e
        })]
    }) : null
}

function Sh(e) {
    const {
        canvas: t,
        ci: n
    } = e, o = M(r => r.dos.bundle);
    return qp(t, n), h(pe, {
        children: [h(Ph, {
            ci: n
        }), ya(o) && h(uh, {
            ci: n
        })]
    })
}
let hi = () => {};

function Ph(e) {
    const t = e.ci,
        n = ne(),
        o = De(),
        r = ge(),
        [s, f] = ae(!1),
        [a, c] = ae(!1),
        [i, d] = ae(null);
    return te(() => {
        if (i !== null) {
            c(!0);
            const l = () => {
                c(!1), hi()
            };
            i ? gt(o.getState(), r, o.dispatch, !0).catch(console.error).finally(l) : l()
        }
    }, [i]), te(() => {
        t.events().onUnload(() => new Promise(l => {
            f(!0), hi = l
        }))
    }, [t]), s ? h("dialog", {
        id: "save-dialog",
        className: "modal",
        open: !0,
        children: h("div", {
            className: "modal-box",
            children: [h("h3", {
                className: "font-bold text-lg",
                children: n("emulation_ended")
            }), h("p", {
                className: "py-4",
                children: n("confirm_save")
            }), h("div", {
                className: "modal-action",
                children: h("form", {
                    method: "dialog",
                    className: "join",
                    children: [h("button", {
                        className: "btn btn-neutral join-item",
                        onClick: () => {
                            f(!1), d(!1)
                        },
                        children: n("close")
                    }), h("button", {
                        className: "btn btn-primary join-item",
                        onClick: () => {
                            f(!1), d(!0)
                        },
                        children: n("save")
                    })]
                })
            })]
        })
    }) : a ? h("dialog", {
        id: "busy-dialog",
        className: "modal",
        open: !0,
        children: h("div", {
            className: "modal-box",
            children: [h("h3", {
                className: "font-bold text-lg",
                children: n("emulation_ended")
            }), h("div", {
                class: "flex flex-row gap-4 py-4 items-center",
                children: [h("span", {
                    class: "loading loading-spinner loading-lg"
                }), h("p", {
                    children: n("saving_game")
                })]
            })]
        })
    }) : null
}

function Eh(e) {
    const t = ne(),
        n = e.error ?? "Unexpected error";
    return h("div", {
        class: "flex-grow flex flex-col items-center justify-center px-8 m-auto",
        children: [h("div", {
            class: "text-2xl text-center",
            children: t("error")
        }), h("div", {
            class: "text-red-400 mt-8 text-2xl text-center",
            children: ['"', n, '"']
        }), h("div", {
            class: "mt-8 text-sm text-center",
            children: t("consult_logs")
        }), e.onSkip && h("button", {
            class: "mt-8 btn-primary",
            onClick: e.onSkip,
            children: t("skip")
        })]
    })
}

function Oh() {
    const e = M(t => t.dos.error);
    return h(Eh, {
        error: e
    })
}

function mi(e) {
    const {
        head: t,
        message: n
    } = e;
    return h("div", {
        class: "flex flex-col items-center justify-center frame-color px-8",
        children: [h("div", {
            class: "text-2xl text-center",
            children: t
        }), h("div", {
            class: "mt-2 text-center",
            children: n
        })]
    })
}

function an(e) {
    return e < 1024 ? e + "b" : (e /= 1024, e < 1024 ? Math.round(e) + "kb" : (e /= 1024, Math.round(e * 10) / 10 + "mb"))
}

function Mh() {
    const e = ne(),
        t = M(i => i.dos.step),
        n = M(i => i.storage.recived),
        o = M(i => i.storage.total),
        r = M(i => i.storage.changedRecived),
        s = M(i => i.storage.changedTotal);
    let f = e("loading"),
        a = "100%",
        c = "";
    switch (t) {
        case "bnd-load":
            f = e("bundle_loading"), n > 0 && (a = `${an(n)} / ${an(o)}`, o > 0 && (a += ` (${Math.round(n*1e3/o)/10}%)`)), r > 0 && (c = `${an(r)} / ${an(s)}`, s > 0 && (c += ` (${Math.round(r*1e3/s)/10}%)`));
            break;
        case "bnd-config":
            f = e("bundle_config")
    }
    return h("div", {
        class: "flex flex-col w-full h-full items-center justify-center",
        children: [h(mi, {
            head: f,
            message: a
        }), c !== "" && h(pe, {
            children: [h("br", {}), h(mi, {
                head: e("changes"),
                message: c
            })]
        })]
    })
}

function Ah() {
    const e = De();
    return te(() => {
        async function t() {
            try {
                await Bt("./dragon.jsdos", e)
            } catch (n) {
                e.dispatch(I.actions.bndError(n.message ?? "unexpected error"))
            }
        }
        t()
    }, []), h("div", {
        class: "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8 py-8",
        children: h("div", {
            class: "text-center text-lg",
            children: "Loading dragon.jsdos..."
        })
    })
}

function Dh(e) {
    const t = M(m => m.ui.frame) !== "none",
        n = M(m => m.ui.frameXs),
        o = M(m => m.ui.window),
        r = M(m => m.ui.background),
        s = M(m => m.ui.kiosk),
        f = M(m => m.ui.thinSidebar),
        a = M(m => m.dos.mouseCapture);
    let c = h(Th, {});
    switch (o) {
        case "error":
            c = h(Oh, {});
            break;
        case "loading":
            c = h(Mh, {});
            break;
        case "prerun":
            c = h(yf, {});
            break;
        case "run":
            c = h(xh, {});
            break;
        case "select":
            c = h(Ah, {});
            break
    }
    const i = o === "run" && a;
    let d = "left-12",
        l = i ? "w-14" : "w-12";
    return f && !t ? (l = i ? "w-6" : "w-4", d = "left-4") : t && (l = n ? "w-24" : "w-96"), h("div", {
        class: "window absolute w-full h-full bg-base-100",
        children: [h("div", {
            class: "background-image " + d,
            style: {
                backgroundImage: r ? "url(" + r + ")" : void 0
            }
        }), h("div", {
            class: "relative flex-row h-full w-full items-start justify-start overflow-auto",
            children: [!s && h("div", {
                class: l + " flex-shrink-0"
            }), s && i && h("div", {
                class: "w-2 flex-shrink-0"
            }), c]
        })]
    })
}

function Th() {
    return h("div", {
        class: "w-full h-full flex justify-center items-center",
        children: h("div", {
            class: "radial-progress animate-spin",
            style: "--value:70;"
        })
    })
}
let mo = K.getInitialState().wideScreen;

function jh() {
    const e = Me(null),
        t = M(r => r.ui.hidden),
        n = M(r => r.ui.theme),
        o = Q();
    return te(() => {
        if (t || e === null || e.current === null) return;
        const r = e.current;

        function s() {
            const c = r.getBoundingClientRect().width > 640;
            c !== mo && (mo = c, o(K.actions.setWideScreen(mo)))
        }
        const f = new ResizeObserver(s);
        return f.observe(r), window.addEventListener("resize", s), () => {
            f.disconnect(), window.removeEventListener("resize", s)
        }
    }, [t, e, o]), t ? null : h("div", {
        ref: e,
        class: "w-full h-full relative",
        "data-theme": n,
        children: [h(Dh, {}), h(Cf, {}), h(Nf, {}), h(Ih, {}), h(Rh, {})]
    })
}

function Ih() {
    const e = M(r => r.ui.toast),
        t = M(r => r.ui.toastIntent),
        n = t === "panic" ? "error" : t;
    if (e === null) return null;
    let o = h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    });
    return t === "warning" && (o = h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
    })), (t === "error" || t === "panic") && (o = h("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
    })), h("div", {
        class: "absolute right-10 bottom-10 pointer-events-none " + (t === "error" || t === "panic" || t === "warning" ? "opacity-80" : "opacity-50"),
        children: h("div", {
            class: "alert alert-" + n + " text-" + n + "-content",
            children: [h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                class: "shrink-0 w-6 h-6",
                children: o
            }), h("span", {
                class: "break-words",
                children: e
            })]
        })
    })
}

function Rh() {
    const e = M(s => s.ui.updateWsWarning),
        t = ne(),
        n = Q();
    if (!e) return null;

    function o() {
        window.open("https://dos.zone/download/", "_blank"), n(K.actions.updateWsWarning(!1))
    }

    function r() {
        n(K.actions.updateWsWarning(!1))
    }
    return h("div", {
        class: "absolute left-20 right-10 top-10 flex justify-center",
        children: h("div", {
            class: "alert w-auto",
            children: [h("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                "stroke-width": "1.5",
                stroke: "currentColor",
                class: "size-6 text-error",
                children: h("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                })
            }), h("span", {
                children: t("ws_outdated")
            }), h("div", {
                children: [h("button", {
                    class: "btn btn-sm btn-primary mr-2",
                    onClick: o,
                    children: t("update")
                }), h("button", {
                    class: "btn btn-sm",
                    onClick: r,
                    children: t("close")
                })]
            })]
        })
    })
}
const Lh = (e, t = {}) => {
    const n = yd(t),
        o = bd(n),
        r = wa();
    Bh(e, n, o), navigator.keyboard?.lock(["KeyW", "Escape"]);
    let s = "none";

    function f() {
        (async () => {
            const L = Fe(o),
                Re = L.dos.step;
            if (Re !== s) switch (s = Re, L.dos.step) {
                case "bnd-ready":
                    t.mouseCapture !== void 0 && m(t.mouseCapture);
                    break;
                case "emu-ready": {
                    if (n.cache = await r, n.options.url) try {
                        await Bt(n.options.url, o)
                    } catch (ye) {
                        o.dispatch(I.actions.bndError(ye.message))
                    } else if (n.options.dosboxConf) {
                        const ye = n.options.jsdosConf ?? {
                            version: "8"
                        };
                        ye.version || (ye.version = "8"), Bd({
                            dosboxConf: n.options.dosboxConf,
                            jsdosConf: ye
                        }, n.options.initFs ?? null, o)
                    } else o.dispatch(K.actions.windowSelect());
                    Ut(n, "emu-ready")
                }
                break
            }
        })().catch(console.error)
    }
    o.subscribe(f), Ed(o, t.pathPrefix ?? "https://v8.js-dos.com/latest/emulators/", t.pathSuffix ?? "");

    function a(L) {
        o.dispatch(K.actions.theme(L))
    }

    function c(L) {
        o.dispatch(ga.actions.setLang(L))
    }

    function i(L) {
        o.dispatch(I.actions.dosBackend(L))
    }

    function d(L) {
        o.dispatch(I.actions.dosBackendLocked(L))
    }

    function l(L) {
        o.dispatch(I.actions.dosWorker(L))
    }

    function m(L) {
        o.dispatch(I.actions.mouseCapture(L))
    }

    function u(L) {
        o.dispatch(K.actions.background(L))
    }

    function v(L) {
        Nc(L, o)
    }

    function p(L) {
        o.dispatch(K.actions.autoStart(L))
    }

    function g(L) {
        o.dispatch(K.actions.countDownStart(L))
    }

    function _(L) {
        o.dispatch(K.actions.autoSave(L))
    }

    function y(L) {
        o.dispatch(K.actions.kiosk(L))
    }

    function b(L) {
        o.dispatch(I.actions.imageRendering(L))
    }

    function C(L) {
        o.dispatch(I.actions.renderBackend(L))
    }

    function x(L) {
        o.dispatch(I.actions.renderAspect(L))
    }

    function T(L) {
        o.dispatch(K.actions.noCloud(L))
    }

    function j(L) {
        o.dispatch(I.actions.paused(L))
    }

    function N(L) {
        o.dispatch(I.actions.scaleControls(L))
    }

    function z(L) {
        o.dispatch(I.actions.mouseSensitivity(L))
    }

    function F(L) {
        o.dispatch(I.actions.noCursor(L))
    }

    function R(L) {
        o.dispatch(I.actions.softKeyboardLayout(L))
    }

    function q(L) {
        o.dispatch(I.actions.softKeyboardSymbols(L))
    }

    function Z(L) {
        o.dispatch(I.actions.volume(L))
    }

    function G(L) {
        o.dispatch(I.actions.offscreenCanvas(L))
    }

    function Y(L) {
        L === null || L.length !== 5 ? o.dispatch(Rt.actions.setAccount(null)) : Oo(L).then(({
            account: Re
        }) => {
            o.dispatch(Rt.actions.setAccount(Re))
        }).catch(console.error)
    }

    function se(L) {
        o.dispatch(K.actions.softFullscreen(L))
    }

    function ue(L) {
        o.dispatch(K.actions.thinSidebar(L))
    }
    return t.theme && a(t.theme), t.lang && c(t.lang), t.backend && i(t.backend), t.backendLocked && d(t.backendLocked), t.workerThread !== void 0 && l(t.workerThread), t.background && u(t.background), t.fullScreen !== void 0 && v(t.fullScreen), t.autoStart !== void 0 && p(t.autoStart), t.countDownStart !== void 0 && g(t.countDownStart), t.autoSave !== void 0 && _(t.autoSave), t.kiosk !== void 0 && y(t.kiosk), t.imageRendering !== void 0 && b(t.imageRendering), t.renderBackend !== void 0 && C(t.renderBackend), t.renderAspect !== void 0 && x(t.renderAspect), t.noCloud !== void 0 && T(t.noCloud), t.scaleControls !== void 0 && N(t.scaleControls), t.mouseSensitivity !== void 0 && z(t.mouseSensitivity), t.noCursor !== void 0 && F(t.noCursor), t.softKeyboardLayout !== void 0 && R(t.softKeyboardLayout), t.softKeyboardSymbols !== void 0 && q(t.softKeyboardSymbols), t.volume !== void 0 && Z(t.volume), t.key !== void 0 && Y(t.key), t.backendHardware !== void 0 && se(!0), t.softFullscreen !== void 0 && se(t.softFullscreen), t.thinSidebar !== void 0 && ue(t.thinSidebar), t.offscreenCanvas !== void 0 && G(t.offscreenCanvas), t.sockdrivePreload !== void 0 && o.dispatch(I.actions.sockdrivePreload(t.sockdrivePreload)), t.startIpxServer === !0 && o.dispatch(I.actions.startIpxServer(!0)), t.connectIpxAddress && o.dispatch(I.actions.connectIpxAddress(t.connectIpxAddress)), pt(h(au, {
        store: o,
        children: h(jh, {})
    }), e), {
        getVersion: () => ["8.3.20", o.getState().dos.emuVersion],
        getToken: () => Fe(o).auth.account?.token ?? null,
        setTheme: a,
        setLang: c,
        setBackend: i,
        setBackendLocked: d,
        setWorkerThread: l,
        setOffscreenCanvas: G,
        setMouseCapture: m,
        setBackground: u,
        setFullScreen: v,
        setAutoStart: p,
        setCountDownStart: g,
        setAutoSave: _,
        setKiosk: y,
        setImageRendering: b,
        setRenderBackend: C,
        setRenderAspect: x,
        setNoCloud: T,
        setPaused: j,
        setScaleControls: N,
        setMouseSensitivity: z,
        setNoCursor: F,
        setSoftKeyboardLayout: R,
        setSoftKeyboardSymbols: q,
        setVolume: Z,
        setKey: Y,
        setSoftFullscreen: se,
        setThinSidebar: ue,
        save: () => gt(Fe(o), n, o.dispatch),
        stop: async () => {
            o.dispatch(K.actions.hidden(!0));
            const L = Se(o);
            if (L.ci) return L.ci.exit()
        }
    }
};

function Bh(e, t, n) {
    t.root = e, e.classList.add("jsdos-rso"), e.addEventListener("contextmenu", r => {
        if (!(r.target !== null && r.target.classList?.contains("contextmenu"))) return r.stopPropagation(), r.preventDefault(), !1
    }), document.addEventListener("fullscreenchange", r => {
        if (!n.getState().ui.softFullscreen) {
            const s = document.fullscreenElement === e;
            n.dispatch(K.actions.setFullScreen(s)), !s && n.getState().ui.autoSave && gt(Fe(n), t, n.dispatch)
        }
    }), document.addEventListener("pointerlockchange", () => {
        n.dispatch(K.actions.pointerLocked(document.pointerLockElement !== null)), document.pointerLockElement !== null && n.getState().ui.clickToLockModal && n.dispatch(K.actions.clickToLockModal(!1)), document.pointerLockElement === null && n.getState().ui.autoSave && gt(Fe(n), t, n.dispatch)
    });

    function o() {
        n.dispatch(K.actions.documentHidden(document.hidden))
    }
    document.addEventListener("visibilitychange", o)
}
window.Dos = Lh;