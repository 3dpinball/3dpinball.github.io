(function() {
	const t = document.createElement("link").relList;
	if (t && t.supports && t.supports("modulepreload")) return;
	for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
	new MutationObserver(r => {
		for (const s of r)
			if (s.type === "childList")
				for (const u of s.addedNodes) u.tagName === "LINK" && u.rel === "modulepreload" && o(u)
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
var Nt, U, mi, Ze, os, vi, vo, gi, Tt = {},
	_i = [],
	dl = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	xn = Array.isArray;

function ze(e, t) {
	for (var n in t) e[n] = t[n];
	return e
}

function yi(e) {
	var t = e.parentNode;
	t && t.removeChild(e)
}

function Me(e, t, n) {
	var o, r, s, u = {};
	for (s in t) s == "key" ? o = t[s] : s == "ref" ? r = t[s] : u[s] = t[s];
	if (arguments.length > 2 && (u.children = arguments.length > 3 ? Nt.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
		for (s in e.defaultProps) u[s] === void 0 && (u[s] = e.defaultProps[s]);
	return Mt(e, u, o, r, null)
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
		__v: r ?? ++mi,
		__i: -1,
		__u: 0
	};
	return r == null && U.vnode != null && U.vnode(s), s
}

function bi() {
	return {
		current: null
	}
}

function pe(e) {
	return e.children
}

function Oe(e, t) {
	this.props = e, this.context = t
}

function ft(e, t) {
	if (t == null) return e.__ ? ft(e.__, e.__i + 1) : null;
	for (var n; t < e.__k.length; t++)
		if ((n = e.__k[t]) != null && n.__e != null) return n.__e;
	return typeof e.type == "function" ? ft(e) : null
}

function wi(e) {
	var t, n;
	if ((e = e.__) != null && e.__c != null) {
		for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
			if ((n = e.__k[t]) != null && n.__e != null) {
				e.__e = e.__c.base = n.__e;
				break
			} return wi(e)
	}
}

function go(e) {
	(!e.__d && (e.__d = !0) && Ze.push(e) && !un.__r++ || os !== U.debounceRendering) && ((os = U.debounceRendering) || vi)(un)
}

function un() {
	var e, t, n, o, r, s, u, a, c;
	for (Ze.sort(vo); e = Ze.shift();) e.__d && (t = Ze.length, o = void 0, s = (r = (n = e).__v).__e, a = [], c = [], (u = n.__P) && ((o = ze({}, r)).__v = r.__v + 1, U.vnode && U.vnode(o), Io(u, o, r, n.__n, u.ownerSVGElement !== void 0, 32 & r.__u ? [s] : null, a, s ?? ft(r), !!(32 & r.__u), c), o.__.__k[o.__i] = o, Ci(a, o, c), o.__e != s && wi(o)), Ze.length > t && Ze.sort(vo));
	un.__r = 0
}

function xi(e, t, n, o, r, s, u, a, c, i, d) {
	var l, m, f, v, h, g = o && o.__k || _i,
		_ = t.length;
	for (n.__d = c, fl(n, t, g), c = n.__d, l = 0; l < _; l++)(f = n.__k[l]) != null && typeof f != "boolean" && typeof f != "function" && (m = f.__i === -1 ? Tt : g[f.__i] || Tt, f.__i = l, Io(e, f, m, r, s, u, a, c, i, d), v = f.__e, f.ref && m.ref != f.ref && (m.ref && Ro(m.ref, null, f), d.push(f.ref, f.__c || v, f)), h == null && v != null && (h = v), 65536 & f.__u || m.__k === f.__k ? c = ki(f, c, e) : typeof f.type == "function" && f.__d !== void 0 ? c = f.__d : v && (c = v.nextSibling), f.__d = void 0, f.__u &= -196609);
	n.__d = c, n.__e = h
}

function fl(e, t, n) {
	var o, r, s, u, a, c = t.length,
		i = n.length,
		d = i,
		l = 0;
	for (e.__k = [], o = 0; o < c; o++)(r = e.__k[o] = (r = t[o]) == null || typeof r == "boolean" || typeof r == "function" ? null : typeof r == "string" || typeof r == "number" || typeof r == "bigint" || r.constructor == String ? Mt(null, r, null, null, r) : xn(r) ? Mt(pe, {
		children: r
	}, null, null, null) : r.constructor === void 0 && r.__b > 0 ? Mt(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v) : r) != null ? (r.__ = e, r.__b = e.__b + 1, a = pl(r, n, u = o + l, d), r.__i = a, s = null, a !== -1 && (d--, (s = n[a]) && (s.__u |= 131072)), s == null || s.__v === null ? (a == -1 && l--, typeof r.type != "function" && (r.__u |= 65536)) : a !== u && (a === u + 1 ? l++ : a > u ? d > c - u ? l += a - u : l-- : l = a < u && a == u - 1 ? a - u : 0, a !== o + l && (r.__u |= 65536))) : (s = n[o]) && s.key == null && s.__e && (s.__e == e.__d && (e.__d = ft(s)), _o(s, s, !1), n[o] = null, d--);
	if (d)
		for (o = 0; o < i; o++)(s = n[o]) != null && (131072 & s.__u) == 0 && (s.__e == e.__d && (e.__d = ft(s)), _o(s, s))
}

function ki(e, t, n) {
	var o, r;
	if (typeof e.type == "function") {
		for (o = e.__k, r = 0; o && r < o.length; r++) o[r] && (o[r].__ = e, t = ki(o[r], t, n));
		return t
	}
	return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling
}

function Ne(e, t) {
	return t = t || [], e == null || typeof e == "boolean" || (xn(e) ? e.some(function(n) {
		Ne(n, t)
	}) : t.push(e)), t
}

function pl(e, t, n, o) {
	var r = e.key,
		s = e.type,
		u = n - 1,
		a = n + 1,
		c = t[n];
	if (c === null || c && r == c.key && s === c.type) return n;
	if (o > (c != null && (131072 & c.__u) == 0 ? 1 : 0))
		for (; u >= 0 || a < t.length;) {
			if (u >= 0) {
				if ((c = t[u]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return u;
				u--
			}
			if (a < t.length) {
				if ((c = t[a]) && (131072 & c.__u) == 0 && r == c.key && s === c.type) return a;
				a++
			}
		}
	return -1
}

function rs(e, t, n) {
	t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || dl.test(t) ? n : n + "px"
}

function Xt(e, t, n, o, r) {
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

function Io(e, t, n, o, r, s, u, a, c, i) {
	var d, l, m, f, v, h, g, _, y, b, C, x, D, j, N, F = t.type;
	if (t.constructor !== void 0) return null;
	128 & n.__u && (c = !!(32 & n.__u), s = [a = t.__e = n.__e]), (d = U.__b) && d(t);
	e: if (typeof F == "function") try {
		if (_ = t.props, y = (d = F.contextType) && o[d.__c], b = d ? y ? y.props.value : d.__ : o, n.__c ? g = (l = t.__c = n.__c).__ = l.__E : ("prototype" in F && F.prototype.render ? t.__c = l = new F(_, b) : (t.__c = l = new Oe(_, b), l.constructor = F, l.render = ml), y && y.sub(l), l.props = _, l.state || (l.state = {}), l.context = b, l.__n = o, m = l.__d = !0, l.__h = [], l._sb = []), l.__s == null && (l.__s = l.state), F.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = ze({}, l.__s)), ze(l.__s, F.getDerivedStateFromProps(_, l.__s))), f = l.props, v = l.state, l.__v = t, m) F.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
		else {
			if (F.getDerivedStateFromProps == null && _ !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(_, b), !l.__e && (l.shouldComponentUpdate != null && l.shouldComponentUpdate(_, l.__s, b) === !1 || t.__v === n.__v)) {
				for (t.__v !== n.__v && (l.props = _, l.state = l.__s, l.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(K) {
						K && (K.__ = t)
					}), C = 0; C < l._sb.length; C++) l.__h.push(l._sb[C]);
				l._sb = [], l.__h.length && u.push(l);
				break e
			}
			l.componentWillUpdate != null && l.componentWillUpdate(_, l.__s, b), l.componentDidUpdate != null && l.__h.push(function() {
				l.componentDidUpdate(f, v, h)
			})
		}
		if (l.context = b, l.props = _, l.__P = e, l.__e = !1, x = U.__r, D = 0, "prototype" in F && F.prototype.render) {
			for (l.state = l.__s, l.__d = !1, x && x(t), d = l.render(l.props, l.state, l.context), j = 0; j < l._sb.length; j++) l.__h.push(l._sb[j]);
			l._sb = []
		} else
			do l.__d = !1, x && x(t), d = l.render(l.props, l.state, l.context), l.state = l.__s; while (l.__d && ++D < 25);
		l.state = l.__s, l.getChildContext != null && (o = ze(ze({}, o), l.getChildContext())), m || l.getSnapshotBeforeUpdate == null || (h = l.getSnapshotBeforeUpdate(f, v)), xi(e, xn(N = d != null && d.type === pe && d.key == null ? d.props.children : d) ? N : [N], t, n, o, r, s, u, a, c, i), l.base = t.__e, t.__u &= -161, l.__h.length && u.push(l), g && (l.__E = l.__ = null)
	} catch (K) {
		t.__v = null, c || s != null ? (t.__e = a, t.__u |= c ? 160 : 32, s[s.indexOf(a)] = null) : (t.__e = n.__e, t.__k = n.__k), U.__e(K, t, n)
	} else s == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = hl(n.__e, t, n, o, r, s, u, c, i);
	(d = U.diffed) && d(t)
}

function Ci(e, t, n) {
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

function hl(e, t, n, o, r, s, u, a, c) {
	var i, d, l, m, f, v, h, g = n.props,
		_ = t.props,
		y = t.type;
	if (y === "svg" && (r = !0), s != null) {
		for (i = 0; i < s.length; i++)
			if ((f = s[i]) && "setAttribute" in f == !!y && (y ? f.localName === y : f.nodeType === 3)) {
				e = f, s[i] = null;
				break
			}
	}
	if (e == null) {
		if (y === null) return document.createTextNode(_);
		e = r ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, _.is && _), s = null, a = !1
	}
	if (y === null) g === _ || a && e.data === _ || (e.data = _);
	else {
		if (s = s && Nt.call(e.childNodes), g = n.props || Tt, !a && s != null)
			for (g = {}, i = 0; i < e.attributes.length; i++) g[(f = e.attributes[i]).name] = f.value;
		for (i in g) f = g[i], i == "children" || (i == "dangerouslySetInnerHTML" ? l = f : i === "key" || i in _ || Xt(e, i, null, f, r));
		for (i in _) f = _[i], i == "children" ? m = f : i == "dangerouslySetInnerHTML" ? d = f : i == "value" ? v = f : i == "checked" ? h = f : i === "key" || a && typeof f != "function" || g[i] === f || Xt(e, i, f, g[i], r);
		if (d) a || l && (d.__html === l.__html || d.__html === e.innerHTML) || (e.innerHTML = d.__html), t.__k = [];
		else if (l && (e.innerHTML = ""), xi(e, xn(m) ? m : [m], t, n, o, r && y !== "foreignObject", s, u, s ? s[0] : n.__k && ft(n, 0), a, c), s != null)
			for (i = s.length; i--;) s[i] != null && yi(s[i]);
		a || (i = "value", v !== void 0 && (v !== e[i] || y === "progress" && !v || y === "option" && v !== g[i]) && Xt(e, i, v, g[i], !1), i = "checked", h !== void 0 && h !== e[i] && Xt(e, i, h, g[i], !1))
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
	n || e.__e == null || yi(e.__e), e.__ = e.__e = e.__d = void 0
}

function ml(e, t, n) {
	return this.constructor(e, n)
}

function pt(e, t, n) {
	var o, r, s, u;
	U.__ && U.__(e, t), r = (o = typeof n == "function") ? null : n && n.__k || t.__k, s = [], u = [], Io(t, e = (!o && n || t).__k = Me(pe, null, [e]), r || Tt, Tt, t.ownerSVGElement !== void 0, !o && n ? [n] : r ? null : t.firstChild ? Nt.call(t.childNodes) : null, s, !o && n ? n : r ? r.__e : t.firstChild, o, u), Ci(s, e, u)
}

function Si(e, t) {
	pt(e, t, Si)
}

function vl(e, t, n) {
	var o, r, s, u, a = ze({}, e.props);
	for (s in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) s == "key" ? o = t[s] : s == "ref" ? r = t[s] : a[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s];
	return arguments.length > 2 && (a.children = arguments.length > 3 ? Nt.call(arguments, 2) : n), Mt(e.type, a, o || e.key, r || e.ref, null)
}

function at(e, t) {
	var n = {
		__c: t = "__cC" + gi++,
		__: e,
		Consumer: function(o, r) {
			return o.children(r)
		},
		Provider: function(o) {
			var r, s;
			return this.getChildContext || (r = [], (s = {})[t] = this, this.getChildContext = function() {
				return s
			}, this.shouldComponentUpdate = function(u) {
				this.props.value !== u.value && r.some(function(a) {
					a.__e = !0, go(a)
				})
			}, this.sub = function(u) {
				r.push(u);
				var a = u.componentWillUnmount;
				u.componentWillUnmount = function() {
					r.splice(r.indexOf(u), 1), a && a.call(u)
				}
			}), o.children
		}
	};
	return n.Provider.__ = n.Consumer.contextType = n
}
Nt = _i.slice, U = {
	__e: function(e, t, n, o) {
		for (var r, s, u; t = t.__;)
			if ((r = t.__c) && !r.__) try {
				if ((s = r.constructor) && s.getDerivedStateFromError != null && (r.setState(s.getDerivedStateFromError(e)), u = r.__d), r.componentDidCatch != null && (r.componentDidCatch(e, o || {}), u = r.__d), u) return r.__E = r
			} catch (a) {
				e = a
			}
		throw e
	}
}, mi = 0, Oe.prototype.setState = function(e, t) {
	var n;
	n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ze({}, this.state), typeof e == "function" && (e = e(ze({}, n), this.props)), e && ze(n, e), e != null && this.__v && (t && this._sb.push(t), go(this))
}, Oe.prototype.forceUpdate = function(e) {
	this.__v && (this.__e = !0, e && this.__h.push(e), go(this))
}, Oe.prototype.render = pe, Ze = [], vi = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, vo = function(e, t) {
	return e.__v.__b - t.__v.__b
}, un.__r = 0, gi = 0;

function gl(e) {
	return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function _l(e) {
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
	Ke, ne, Vn, as, ht = 0,
	Pi = [],
	an = [],
	cs = U.__b,
	ls = U.__r,
	us = U.diffed,
	ds = U.__c,
	fs = U.unmount;

function tt(e, t) {
	U.__h && U.__h(ne, e, ht || t), ht = 0;
	var n = ne.__H || (ne.__H = {
		__: [],
		__h: []
	});
	return e >= n.__.length && n.__.push({
		__V: an
	}), n.__[e]
}

function te(e) {
	return ht = 1, Lo(Mi, e)
}

function Lo(e, t, n) {
	var o = tt(Ke++, 2);
	if (o.t = e, !o.__c && (o.__ = [n ? n(t) : Mi(void 0, t), function(a) {
			var c = o.__N ? o.__N[0] : o.__[0],
				i = o.t(c, a);
			c !== i && (o.__N = [i, o.__[1]], o.__c.setState({}))
		}], o.__c = ne, !ne.u)) {
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
					var f = m.__[0];
					m.__ = m.__N, m.__N = void 0, f !== m.__[0] && (l = !0)
				}
			}), !(!l && o.__c.props === a) && (!s || s.call(this, a, c, i))
		};
		ne.u = !0;
		var s = ne.shouldComponentUpdate,
			u = ne.componentWillUpdate;
		ne.componentWillUpdate = function(a, c, i) {
			if (this.__e) {
				var d = s;
				s = void 0, r(a, c, i), s = d
			}
			u && u.call(this, a, c, i)
		}, ne.shouldComponentUpdate = r
	}
	return o.__N || o.__
}

function oe(e, t) {
	var n = tt(Ke++, 3);
	!U.__s && Fo(n.__H, t) && (n.__ = e, n.i = t, ne.__H.__h.push(n))
}

function yt(e, t) {
	var n = tt(Ke++, 4);
	!U.__s && Fo(n.__H, t) && (n.__ = e, n.i = t, ne.__h.push(n))
}

function Ae(e) {
	return ht = 5, mt(function() {
		return {
			current: e
		}
	}, [])
}

function Ei(e, t, n) {
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

function zo(e) {
	var t = ne.context[e.__c],
		n = tt(Ke++, 9);
	return n.c = e, t ? (n.__ == null && (n.__ = !0, t.sub(ne)), t.props.value) : e.__
}

function No(e, t) {
	U.useDebugValue && U.useDebugValue(t ? t(e) : e)
}

function yl(e) {
	var t = tt(Ke++, 10),
		n = te();
	return t.__ = e, ne.componentDidCatch || (ne.componentDidCatch = function(o, r) {
		t.__ && t.__(o, r), n[1](o)
	}), [n[0], function() {
		n[1](void 0)
	}]
}

function Oi() {
	var e = tt(Ke++, 11);
	if (!e.__) {
		for (var t = ne.__v; t !== null && !t.__m && t.__ !== null;) t = t.__;
		var n = t.__m || (t.__m = [0, 0]);
		e.__ = "P" + n[0] + "-" + n[1]++
	}
	return e.__
}

function bl() {
	for (var e; e = Pi.shift();)
		if (e.__P && e.__H) try {
			e.__H.__h.forEach(cn), e.__H.__h.forEach(yo), e.__H.__h = []
		} catch (t) {
			e.__H.__h = [], U.__e(t, e.__v)
		}
}
U.__b = function(e) {
	ne = null, cs && cs(e)
}, U.__r = function(e) {
	ls && ls(e), Ke = 0;
	var t = (ne = e.__c).__H;
	t && (Vn === ne ? (t.__h = [], ne.__h = [], t.__.forEach(function(n) {
		n.__N && (n.__ = n.__N), n.__V = an, n.__N = n.i = void 0
	})) : (t.__h.forEach(cn), t.__h.forEach(yo), t.__h = [], Ke = 0)), Vn = ne
}, U.diffed = function(e) {
	us && us(e);
	var t = e.__c;
	t && t.__H && (t.__H.__h.length && (Pi.push(t) !== 1 && as === U.requestAnimationFrame || ((as = U.requestAnimationFrame) || wl)(bl)), t.__H.__.forEach(function(n) {
		n.i && (n.__H = n.i), n.__V !== an && (n.__ = n.__V), n.i = void 0, n.__V = an
	})), Vn = ne = null
}, U.__c = function(e, t) {
	t.some(function(n) {
		try {
			n.__h.forEach(cn), n.__h = n.__h.filter(function(o) {
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
			cn(o)
		} catch (r) {
			t = r
		}
	}), n.__H = void 0, t && U.__e(t, n.__v))
};
var ps = typeof requestAnimationFrame == "function";

function wl(e) {
	var t, n = function() {
			clearTimeout(o), ps && cancelAnimationFrame(t), setTimeout(e)
		},
		o = setTimeout(n, 100);
	ps && (t = requestAnimationFrame(n))
}

function cn(e) {
	var t = ne,
		n = e.__c;
	typeof n == "function" && (e.__c = void 0, n()), ne = t
}

function yo(e) {
	var t = ne;
	e.__c = e.__(), ne = t
}

function Fo(e, t) {
	return !e || e.length !== t.length || t.some(function(n, o) {
		return n !== e[o]
	})
}

function Mi(e, t) {
	return typeof t == "function" ? t(e) : t
}

function Ai(e, t) {
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

function dn(e) {
	this.props = e
}

function Ti(e, t) {
	function n(r) {
		var s = this.props.ref,
			u = s == r.ref;
		return !u && s && (s.call ? s(null) : s.current = null), t ? !t(this.props, r) || !u : bo(this.props, r)
	}

	function o(r) {
		return this.shouldComponentUpdate = n, Me(e, r)
	}
	return o.displayName = "Memo(" + (e.displayName || e.name) + ")", o.prototype.isReactComponent = !0, o.__f = !0, o
}(dn.prototype = new Oe).isPureReactComponent = !0, dn.prototype.shouldComponentUpdate = function(e, t) {
	return bo(this.props, e) || bo(this.state, t)
};
var hs = U.__b;
U.__b = function(e) {
	e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), hs && hs(e)
};
var xl = typeof Symbol < "u" && Symbol.for && Symbol.for("react.forward_ref") || 3911;

function Di(e) {
	function t(n) {
		var o = Ai({}, n);
		return delete o.ref, e(o, n.ref || null)
	}
	return t.$$typeof = xl, t.render = t, t.prototype.isReactComponent = t.__f = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
}
var ms = function(e, t) {
		return e == null ? null : Ne(Ne(e).map(t))
	},
	ji = {
		map: ms,
		forEach: ms,
		count: function(e) {
			return e ? Ne(e).length : 0
		},
		only: function(e) {
			var t = Ne(e);
			if (t.length !== 1) throw "Children.only";
			return t[0]
		},
		toArray: Ne
	},
	kl = U.__e;
U.__e = function(e, t, n, o) {
	if (e.then) {
		for (var r, s = t; s = s.__;)
			if ((r = s.__c) && r.__c) return t.__e == null && (t.__e = n.__e, t.__k = n.__k), r.__c(e, t)
	}
	kl(e, t, n, o)
};
var vs = U.unmount;

function Ii(e, t, n) {
	return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(o) {
		typeof o.__c == "function" && o.__c()
	}), e.__c.__H = null), (e = Ai({}, e)).__c != null && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map(function(o) {
		return Ii(o, t, n)
	})), e
}

function Ri(e, t, n) {
	return e && n && (e.__v = null, e.__k = e.__k && e.__k.map(function(o) {
		return Ri(o, t, n)
	}), e.__c && e.__c.__P === t && (e.__e && n.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = n)), e
}

function At() {
	this.__u = 0, this.t = null, this.__b = null
}

function Li(e) {
	var t = e.__.__c;
	return t && t.__a && t.__a(e)
}

function Bi(e) {
	var t, n, o;

	function r(s) {
		if (t || (t = e()).then(function(u) {
				n = u.default || u
			}, function(u) {
				o = u
			}), o) throw o;
		if (!n) throw t;
		return Me(n, s)
	}
	return r.displayName = "Lazy", r.__f = !0, r
}

function ct() {
	this.u = null, this.o = null
}
U.unmount = function(e) {
	var t = e.__c;
	t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), vs && vs(e)
}, (At.prototype = new Oe).__c = function(e, t) {
	var n = t.__c,
		o = this;
	o.t == null && (o.t = []), o.t.push(n);
	var r = Li(o.__v),
		s = !1,
		u = function() {
			s || (s = !0, n.__R = null, r ? r(a) : a())
		};
	n.__R = u;
	var a = function() {
		if (!--o.__u) {
			if (o.state.__a) {
				var c = o.state.__a;
				o.__v.__k[0] = Ri(c, c.__c.__P, c.__c.__O)
			}
			var i;
			for (o.setState({
					__a: o.__b = null
				}); i = o.t.pop();) i.forceUpdate()
		}
	};
	o.__u++ || 32 & t.__u || o.setState({
		__a: o.__b = o.__v.__k[0]
	}), e.then(u, u)
}, At.prototype.componentWillUnmount = function() {
	this.t = []
}, At.prototype.render = function(e, t) {
	if (this.__b) {
		if (this.__v.__k) {
			var n = document.createElement("div"),
				o = this.__v.__k[0].__c;
			this.__v.__k[0] = Ii(this.__b, n, o.__O = o.__P)
		}
		this.__b = null
	}
	var r = t.__a && Me(pe, null, e.fallback);
	return r && (r.__u &= -33), [Me(pe, null, t.__a ? null : e.children), r]
};
var gs = function(e, t, n) {
	if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.o.size))
		for (n = e.u; n;) {
			for (; n.length > 3;) n.pop()();
			if (n[1] < n[0]) break;
			e.u = n = n[2]
		}
};

function Cl(e) {
	return this.getChildContext = function() {
		return e.context
	}, e.children
}

function Sl(e) {
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
	}), pt(Me(Cl, {
		context: t.context
	}, e.__v), t.l)
}

function zi(e, t) {
	var n = Me(Sl, {
		__v: e,
		i: t
	});
	return n.containerInfo = t, n
}(ct.prototype = new Oe).__a = function(e) {
	var t = this,
		n = Li(t.__v),
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
	var t = Ne(e.children);
	e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
	for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
	return e.children
}, ct.prototype.componentDidUpdate = ct.prototype.componentDidMount = function() {
	var e = this;
	this.o.forEach(function(t, n) {
		gs(e, n, t)
	})
};
var Ni = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103,
	Pl = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	El = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	Ol = /[A-Z0-9]/g,
	Ml = typeof document < "u",
	Al = function(e) {
		return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e)
	};

function Fi(e, t, n) {
	return t.__k == null && (t.textContent = ""), pt(e, t), typeof n == "function" && n(), e ? e.__c : null
}

function Ki(e, t, n) {
	return Si(e, t), typeof n == "function" && n(), e ? e.__c : null
}
Oe.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
	Object.defineProperty(Oe.prototype, e, {
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

function Tl() {}

function Dl() {
	return this.cancelBubble
}

function jl() {
	return this.defaultPrevented
}
U.event = function(e) {
	return _s && (e = _s(e)), e.persist = Tl, e.isPropagationStopped = Dl, e.isDefaultPrevented = jl, e.nativeEvent = e
};
var Ko, Il = {
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
			var u = n[s];
			if (!(s === "value" && "defaultValue" in n && u == null || Ml && s === "children" && o === "noscript" || s === "class" || s === "className")) {
				var a = s.toLowerCase();
				s === "defaultValue" && "value" in n && n.value == null ? s = "value" : s === "download" && u === !0 ? u = "" : a === "ondoubleclick" ? s = "ondblclick" : a !== "onchange" || o !== "input" && o !== "textarea" || Al(n.type) ? a === "onfocus" ? s = "onfocusin" : a === "onblur" ? s = "onfocusout" : El.test(s) ? s = a : o.indexOf("-") === -1 && Pl.test(s) ? s = s.replace(Ol, "-$&").toLowerCase() : u === null && (u = void 0) : a = s = "oninput", a === "oninput" && r[s = a] && (s = "oninputCapture"), r[s] = u
			}
		}
		o == "select" && r.multiple && Array.isArray(r.value) && (r.value = Ne(n.children).forEach(function(c) {
			c.props.selected = r.value.indexOf(c.props.value) != -1
		})), o == "select" && r.defaultValue != null && (r.value = Ne(n.children).forEach(function(c) {
			c.props.selected = r.multiple ? r.defaultValue.indexOf(c.props.value) != -1 : r.defaultValue == c.props.value
		})), n.class && !n.className ? (r.class = n.class, Object.defineProperty(r, "className", Il)) : (n.className && !n.class || n.class && n.className) && (r.class = r.className = n.className), t.props = r
	})(e), e.$$typeof = Ni, ys && ys(e)
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
var Ui = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function(e) {
					return Ko.__n[e.__c].props.value
				}
			}
		}
	},
	Rl = "17.0.2";

function Hi(e) {
	return Me.bind(null, e)
}

function Ft(e) {
	return !!e && e.$$typeof === Ni
}

function $i(e) {
	return Ft(e) && e.type === pe
}

function Vi(e) {
	return Ft(e) ? vl.apply(null, arguments) : e
}

function Wi(e) {
	return !!e.__k && (pt(null, e), !0)
}

function qi(e) {
	return e && (e.base || e.nodeType === 1 && e) || null
}
var Uo = function(e, t) {
		return e(t)
	},
	Xi = function(e, t) {
		return e(t)
	},
	Gi = pe;

function Ho(e) {
	e()
}

function Yi(e) {
	return e
}

function Qi() {
	return [!1, Ho]
}
var Zi = yt,
	Ji = Ft;

function ea(e, t) {
	var n = t(),
		o = te({
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
	}, [e, n, t]), oe(function() {
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
var Ll = {
	useState: te,
	useId: Oi,
	useReducer: Lo,
	useEffect: oe,
	useLayoutEffect: yt,
	useInsertionEffect: Zi,
	useTransition: Qi,
	useDeferredValue: Yi,
	useSyncExternalStore: ea,
	startTransition: Ho,
	useRef: Ae,
	useImperativeHandle: Ei,
	useMemo: mt,
	useCallback: Bo,
	useContext: zo,
	useDebugValue: No,
	version: "17.0.2",
	Children: ji,
	render: Fi,
	hydrate: Ki,
	unmountComponentAtNode: Wi,
	createPortal: zi,
	createElement: Me,
	createContext: at,
	createFactory: Hi,
	cloneElement: Vi,
	createRef: bi,
	Fragment: pe,
	isValidElement: Ft,
	isElement: Ji,
	isFragment: $i,
	findDOMNode: qi,
	Component: Oe,
	PureComponent: dn,
	memo: Ti,
	forwardRef: Di,
	flushSync: Xi,
	unstable_batchedUpdates: Uo,
	StrictMode: Gi,
	Suspense: At,
	SuspenseList: ct,
	lazy: Bi,
	__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ui
};
const Bl = Object.freeze(Object.defineProperty({
		__proto__: null,
		Children: ji,
		Component: Oe,
		Fragment: pe,
		PureComponent: dn,
		StrictMode: Gi,
		Suspense: At,
		SuspenseList: ct,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ui,
		cloneElement: Vi,
		createContext: at,
		createElement: Me,
		createFactory: Hi,
		createPortal: zi,
		createRef: bi,
		default: Ll,
		findDOMNode: qi,
		flushSync: Xi,
		forwardRef: Di,
		hydrate: Ki,
		isElement: Ji,
		isFragment: $i,
		isValidElement: Ft,
		lazy: Bi,
		memo: Ti,
		render: Fi,
		startTransition: Ho,
		unmountComponentAtNode: Wi,
		unstable_batchedUpdates: Uo,
		useCallback: Bo,
		useContext: zo,
		useDebugValue: No,
		useDeferredValue: Yi,
		useEffect: oe,
		useErrorBoundary: yl,
		useId: Oi,
		useImperativeHandle: Ei,
		useInsertionEffect: Zi,
		useLayoutEffect: yt,
		useMemo: mt,
		useReducer: Lo,
		useRef: Ae,
		useState: te,
		useSyncExternalStore: ea,
		useTransition: Qi,
		version: Rl
	}, Symbol.toStringTag, {
		value: "Module"
	})),
	$o = _l(Bl);
var xs;

function zl() {
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
		u = e.useDebugValue;

	function a(l, m) {
		var f = m(),
			v = o({
				inst: {
					value: f,
					getSnapshot: m
				}
			}),
			h = v[0].inst,
			g = v[1];
		return s(function() {
			h.value = f, h.getSnapshot = m, c(h) && g({
				inst: h
			})
		}, [l, f, m]), r(function() {
			return c(h) && g({
				inst: h
			}), l(function() {
				c(h) && g({
					inst: h
				})
			})
		}, [l]), u(f), f
	}

	function c(l) {
		var m = l.getSnapshot;
		l = l.value;
		try {
			var f = m();
			return !n(l, f)
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

function ta() {
	return ks || (ks = 1, Hn.exports = zl()), Hn.exports
}
ta();
var qn = {
		exports: {}
	},
	Xn = {};
var Cs;

function Nl() {
	if (Cs) return Xn;
	Cs = 1;
	var e = $o,
		t = ta();

	function n(i, d) {
		return i === d && (i !== 0 || 1 / i === 1 / d) || i !== i && d !== d
	}
	var o = typeof Object.is == "function" ? Object.is : n,
		r = t.useSyncExternalStore,
		s = e.useRef,
		u = e.useEffect,
		a = e.useMemo,
		c = e.useDebugValue;
	return Xn.useSyncExternalStoreWithSelector = function(i, d, l, m, f) {
		var v = s(null);
		if (v.current === null) {
			var h = {
				hasValue: !1,
				value: null
			};
			v.current = h
		} else h = v.current;
		v = a(function() {
			function _(D) {
				if (!y) {
					if (y = !0, b = D, D = m(D), f !== void 0 && h.hasValue) {
						var j = h.value;
						if (f(j, D)) return C = j
					}
					return C = D
				}
				if (j = C, o(b, D)) return j;
				var N = m(D);
				return f !== void 0 && f(j, N) ? j : (b = D, C = N)
			}
			var y = !1,
				b, C, x = l === void 0 ? null : l;
			return [function() {
				return _(d())
			}, x === null ? void 0 : function() {
				return _(x())
			}]
		}, [d, l, m, f]);
		var g = r(i, v[0], v[1]);
		return u(function() {
			h.hasValue = !0, h.value = g
		}, [g]), c(g), g
	}, Xn
}
var Ss;

function Fl() {
	return Ss || (Ss = 1, qn.exports = Nl()), qn.exports
}
var Kl = Fl();

function Ul(e) {
	e()
}
let na = Ul;
const Hl = e => na = e,
	$l = () => na,
	Ps = Symbol.for("react-redux-context"),
	Es = typeof globalThis < "u" ? globalThis : {};

function Vl() {
	var e;
	if (!at) return {};
	const t = (e = Es[Ps]) != null ? e : Es[Ps] = new Map;
	let n = t.get(at);
	return n || (n = at(null), t.set(at, n)), n
}
const qe = Vl();

function Vo(e = qe) {
	return function() {
		return zo(e)
	}
}
const oa = Vo(),
	Wl = () => {
		throw new Error("uSES not initialized!")
	};
let ra = Wl;
const ql = e => {
		ra = e
	},
	Xl = (e, t) => e === t;

function Gl(e = qe) {
	const t = e === qe ? oa : Vo(e);
	return function(o, r = {}) {
		const {
			equalityFn: s = Xl,
			stabilityCheck: u = void 0,
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
		Ae(!0);
		const f = Bo({
				[o.name](h) {
					return o(h)
				}
			} [o.name], [o, l, u]),
			v = ra(i.addNestedSub, c.getState, d || c.getState, f, s);
		return No(v), v
	}
}
const M = Gl();
var Gn = {
		exports: {}
	},
	J = {};
var Os;

function Yl() {
	if (Os) return J;
	Os = 1;
	var e = typeof Symbol == "function" && Symbol.for,
		t = e ? Symbol.for("react.element") : 60103,
		n = e ? Symbol.for("react.portal") : 60106,
		o = e ? Symbol.for("react.fragment") : 60107,
		r = e ? Symbol.for("react.strict_mode") : 60108,
		s = e ? Symbol.for("react.profiler") : 60114,
		u = e ? Symbol.for("react.provider") : 60109,
		a = e ? Symbol.for("react.context") : 60110,
		c = e ? Symbol.for("react.async_mode") : 60111,
		i = e ? Symbol.for("react.concurrent_mode") : 60111,
		d = e ? Symbol.for("react.forward_ref") : 60112,
		l = e ? Symbol.for("react.suspense") : 60113,
		m = e ? Symbol.for("react.suspense_list") : 60120,
		f = e ? Symbol.for("react.memo") : 60115,
		v = e ? Symbol.for("react.lazy") : 60116,
		h = e ? Symbol.for("react.block") : 60121,
		g = e ? Symbol.for("react.fundamental") : 60117,
		_ = e ? Symbol.for("react.responder") : 60118,
		y = e ? Symbol.for("react.scope") : 60119;

	function b(x) {
		if (typeof x == "object" && x !== null) {
			var D = x.$$typeof;
			switch (D) {
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
								case f:
								case u:
									return x;
								default:
									return D
							}
					}
				case n:
					return D
			}
		}
	}

	function C(x) {
		return b(x) === i
	}
	return J.AsyncMode = c, J.ConcurrentMode = i, J.ContextConsumer = a, J.ContextProvider = u, J.Element = t, J.ForwardRef = d, J.Fragment = o, J.Lazy = v, J.Memo = f, J.Portal = n, J.Profiler = s, J.StrictMode = r, J.Suspense = l, J.isAsyncMode = function(x) {
		return C(x) || b(x) === c
	}, J.isConcurrentMode = C, J.isContextConsumer = function(x) {
		return b(x) === a
	}, J.isContextProvider = function(x) {
		return b(x) === u
	}, J.isElement = function(x) {
		return typeof x == "object" && x !== null && x.$$typeof === t
	}, J.isForwardRef = function(x) {
		return b(x) === d
	}, J.isFragment = function(x) {
		return b(x) === o
	}, J.isLazy = function(x) {
		return b(x) === v
	}, J.isMemo = function(x) {
		return b(x) === f
	}, J.isPortal = function(x) {
		return b(x) === n
	}, J.isProfiler = function(x) {
		return b(x) === s
	}, J.isStrictMode = function(x) {
		return b(x) === r
	}, J.isSuspense = function(x) {
		return b(x) === l
	}, J.isValidElementType = function(x) {
		return typeof x == "string" || typeof x == "function" || x === o || x === i || x === s || x === r || x === l || x === m || typeof x == "object" && x !== null && (x.$$typeof === v || x.$$typeof === f || x.$$typeof === u || x.$$typeof === a || x.$$typeof === d || x.$$typeof === g || x.$$typeof === _ || x.$$typeof === y || x.$$typeof === h)
	}, J.typeOf = b, J
}
var Ms;

function Ql() {
	return Ms || (Ms = 1, Gn.exports = Yl()), Gn.exports
}
var Yn, As;

function Zl() {
	if (As) return Yn;
	As = 1;
	var e = Ql(),
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

	function u(v) {
		return e.isMemo(v) ? r : s[v.$$typeof] || t
	}
	var a = Object.defineProperty,
		c = Object.getOwnPropertyNames,
		i = Object.getOwnPropertySymbols,
		d = Object.getOwnPropertyDescriptor,
		l = Object.getPrototypeOf,
		m = Object.prototype;

	function f(v, h, g) {
		if (typeof h != "string") {
			if (m) {
				var _ = l(h);
				_ && _ !== m && f(v, _, g)
			}
			var y = c(h);
			i && (y = y.concat(i(h)));
			for (var b = u(v), C = u(h), x = 0; x < y.length; ++x) {
				var D = y[x];
				if (!n[D] && !(g && g[D]) && !(C && C[D]) && !(b && b[D])) {
					var j = d(h, D);
					try {
						a(v, D, j)
					} catch {}
				}
			}
		}
		return v
	}
	return Yn = f, Yn
}
Zl();
var Qn = {
		exports: {}
	},
	ee = {};
var Ts;

function Jl() {
	if (Ts) return ee;
	Ts = 1;
	var e = Symbol.for("react.element"),
		t = Symbol.for("react.portal"),
		n = Symbol.for("react.fragment"),
		o = Symbol.for("react.strict_mode"),
		r = Symbol.for("react.profiler"),
		s = Symbol.for("react.provider"),
		u = Symbol.for("react.context"),
		a = Symbol.for("react.server_context"),
		c = Symbol.for("react.forward_ref"),
		i = Symbol.for("react.suspense"),
		d = Symbol.for("react.suspense_list"),
		l = Symbol.for("react.memo"),
		m = Symbol.for("react.lazy"),
		f = Symbol.for("react.offscreen"),
		v;
	v = Symbol.for("react.module.reference");

	function h(g) {
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
								case u:
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
	return ee.ContextConsumer = u, ee.ContextProvider = s, ee.Element = e, ee.ForwardRef = c, ee.Fragment = n, ee.Lazy = m, ee.Memo = l, ee.Portal = t, ee.Profiler = r, ee.StrictMode = o, ee.Suspense = i, ee.SuspenseList = d, ee.isAsyncMode = function() {
		return !1
	}, ee.isConcurrentMode = function() {
		return !1
	}, ee.isContextConsumer = function(g) {
		return h(g) === u
	}, ee.isContextProvider = function(g) {
		return h(g) === s
	}, ee.isElement = function(g) {
		return typeof g == "object" && g !== null && g.$$typeof === e
	}, ee.isForwardRef = function(g) {
		return h(g) === c
	}, ee.isFragment = function(g) {
		return h(g) === n
	}, ee.isLazy = function(g) {
		return h(g) === m
	}, ee.isMemo = function(g) {
		return h(g) === l
	}, ee.isPortal = function(g) {
		return h(g) === t
	}, ee.isProfiler = function(g) {
		return h(g) === r
	}, ee.isStrictMode = function(g) {
		return h(g) === o
	}, ee.isSuspense = function(g) {
		return h(g) === i
	}, ee.isSuspenseList = function(g) {
		return h(g) === d
	}, ee.isValidElementType = function(g) {
		return typeof g == "string" || typeof g == "function" || g === n || g === r || g === o || g === i || g === d || g === f || typeof g == "object" && g !== null && (g.$$typeof === m || g.$$typeof === l || g.$$typeof === s || g.$$typeof === u || g.$$typeof === c || g.$$typeof === v || g.getModuleId !== void 0)
	}, ee.typeOf = h, ee
}
var Ds;

function eu() {
	return Ds || (Ds = 1, Qn.exports = Jl()), Qn.exports
}
eu();

function tu() {
	const e = $l();
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

function nu(e, t) {
	let n, o = js,
		r = 0,
		s = !1;

	function u(h) {
		d();
		const g = o.subscribe(h);
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
		r++, n || (n = e.subscribe(c), o = tu())
	}

	function l() {
		r--, n && r === 0 && (n(), n = void 0, o.clear(), o = js)
	}

	function m() {
		s || (s = !0, d())
	}

	function f() {
		s && (s = !1, l())
	}
	const v = {
		addNestedSub: u,
		notifyNestedSubs: a,
		handleChangeWrapper: c,
		isSubscribed: i,
		trySubscribe: m,
		tryUnsubscribe: f,
		getListeners: () => o
	};
	return v
}
const ou = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
	ru = ou ? yt : oe;

function su({
	store: e,
	context: t,
	children: n,
	serverState: o,
	stabilityCheck: r = "once",
	noopCheck: s = "once"
}) {
	const u = mt(() => {
			const i = nu(e);
			return {
				store: e,
				subscription: i,
				getServerState: o ? () => o : void 0,
				stabilityCheck: r,
				noopCheck: s
			}
		}, [e, o, r, s]),
		a = mt(() => e.getState(), [e]);
	return ru(() => {
		const {
			subscription: i
		} = u;
		return i.onStateChange = i.notifyNestedSubs, i.trySubscribe(), a !== e.getState() && i.notifyNestedSubs(), () => {
			i.tryUnsubscribe(), i.onStateChange = void 0
		}
	}, [u, a]), Me((t || qe).Provider, {
		value: u
	}, n)
}

function sa(e = qe) {
	const t = e === qe ? oa : Vo(e);
	return function() {
		const {
			store: o
		} = t();
		return o
	}
}
const Pe = sa();

function iu(e = qe) {
	const t = e === qe ? Pe : sa(e);
	return function() {
		return t().dispatch
	}
}
const Y = iu();
ql(Kl.useSyncExternalStoreWithSelector);
Hl(Uo);

function Ee(e) {
	for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
	throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(r) {
		return "'" + r + "'"
	})).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
}

function Xe(e) {
	return !!e && !!e[ce]
}

function Ue(e) {
	var t;
	return !!e && ((function(n) {
		if (!n || typeof n != "object") return !1;
		var o = Object.getPrototypeOf(n);
		if (o === null) return !0;
		var r = Object.hasOwnProperty.call(o, "constructor") && o.constructor;
		return r === Object || typeof r == "function" && Function.toString.call(r) === mu
	})(e) || Array.isArray(e) || !!e[Fs] || !!(!((t = e.constructor) === null || t === void 0) && t[Fs]) || Wo(e) || qo(e))
}

function Je(e, t, n) {
	n === void 0 && (n = !1), bt(e) === 0 ? (n ? Object.keys : dt)(e).forEach((function(o) {
		n && typeof o == "symbol" || t(o, e[o], e)
	})) : e.forEach((function(o, r) {
		return t(r, o, e)
	}))
}

function bt(e) {
	var t = e[ce];
	return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : Wo(e) ? 2 : qo(e) ? 3 : 0
}

function ut(e, t) {
	return bt(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}

function au(e, t) {
	return bt(e) === 2 ? e.get(t) : e[t]
}

function ia(e, t, n) {
	var o = bt(e);
	o === 2 ? e.set(t, n) : o === 3 ? e.add(n) : e[t] = n
}

function aa(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e != e && t != t
}

function Wo(e) {
	return pu && e instanceof Map
}

function qo(e) {
	return hu && e instanceof Set
}

function Qe(e) {
	return e.o || e.t
}

function Xo(e) {
	if (Array.isArray(e)) return Array.prototype.slice.call(e);
	var t = la(e);
	delete t[ce];
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
	return t === void 0 && (t = !1), Yo(e) || Xe(e) || !Ue(e) || (bt(e) > 1 && (e.set = e.add = e.clear = e.delete = cu), Object.freeze(e), t && Je(e, (function(n, o) {
		return Go(o, !0)
	}), !0)), e
}

function cu() {
	Ee(2)
}

function Yo(e) {
	return e == null || typeof e != "object" || Object.isFrozen(e)
}

function je(e) {
	var t = Co[e];
	return t || Ee(18, e), t
}

function lu(e, t) {
	Co[e] || (Co[e] = t)
}

function wo() {
	return Dt
}

function Zn(e, t) {
	t && (je("Patches"), e.u = [], e.s = [], e.v = t)
}

function fn(e) {
	xo(e), e.p.forEach(uu), e.p = null
}

function xo(e) {
	e === Dt && (Dt = e.l)
}

function Is(e) {
	return Dt = {
		p: [],
		l: Dt,
		h: e,
		m: !0,
		_: 0
	}
}

function uu(e) {
	var t = e[ce];
	t.i === 0 || t.i === 1 ? t.j() : t.g = !0
}

function Jn(e, t) {
	t._ = t.p.length;
	var n = t.p[0],
		o = e !== void 0 && e !== n;
	return t.h.O || je("ES5").S(t, e, o), o ? (n[ce].P && (fn(t), Ee(4)), Ue(e) && (e = pn(t, e), t.l || hn(t, e)), t.u && je("Patches").M(n[ce].t, e, t.u, t.s)) : e = pn(t, n, []), fn(t), t.u && t.v(t.u, t.s), e !== ca ? e : void 0
}

function pn(e, t, n) {
	if (Yo(t)) return t;
	var o = t[ce];
	if (!o) return Je(t, (function(a, c) {
		return Rs(e, o, t, a, c, n)
	}), !0), t;
	if (o.A !== e) return t;
	if (!o.P) return hn(e, o.t, !0), o.t;
	if (!o.I) {
		o.I = !0, o.A._--;
		var r = o.i === 4 || o.i === 5 ? o.o = Xo(o.k) : o.o,
			s = r,
			u = !1;
		o.i === 3 && (s = new Set(r), r.clear(), u = !0), Je(s, (function(a, c) {
			return Rs(e, o, r, a, c, n, u)
		})), hn(e, r, !1), n && e.u && je("Patches").N(o, n, e.u, e.s)
	}
	return o.o
}

function Rs(e, t, n, o, r, s, u) {
	if (Xe(r)) {
		var a = pn(e, r, s && t && t.i !== 3 && !ut(t.R, o) ? s.concat(o) : void 0);
		if (ia(n, o, a), !Xe(a)) return;
		e.m = !1
	} else u && n.add(r);
	if (Ue(r) && !Yo(r)) {
		if (!e.h.D && e._ < 1) return;
		pn(e, r), t && t.A.l || hn(e, r)
	}
}

function hn(e, t, n) {
	n === void 0 && (n = !1), !e.l && e.h.D && e.m && Go(t, n)
}

function eo(e, t) {
	var n = e[ce];
	return (n ? Qe(n) : e)[t]
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
		var u = Array.isArray(r),
			a = {
				i: u ? 1 : 0,
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
		u && (c = [a], i = Et);
		var d = Proxy.revocable(c, i),
			l = d.revoke,
			m = d.proxy;
		return a.k = m, a.j = l, m
	})(t, n) : je("ES5").J(t, n);
	return (n ? n.A : wo()).p.push(o), o
}

function du(e) {
	return Xe(e) || Ee(22, e), (function t(n) {
		if (!Ue(n)) return n;
		var o, r = n[ce],
			s = bt(n);
		if (r) {
			if (!r.P && (r.i < 4 || !je("ES5").K(r))) return r.t;
			r.I = !0, o = Bs(n, s), r.I = !1
		} else o = Bs(n, s);
		return Je(o, (function(u, a) {
			r && au(r.t, u) === a || ia(o, u, t(a))
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

function fu() {
	function e(s, u) {
		var a = r[s];
		return a ? a.enumerable = u : r[s] = a = {
			configurable: !0,
			enumerable: u,
			get: function() {
				var c = this[ce];
				return jt.get(c, s)
			},
			set: function(c) {
				var i = this[ce];
				jt.set(i, s, c)
			}
		}, a
	}

	function t(s) {
		for (var u = s.length - 1; u >= 0; u--) {
			var a = s[u][ce];
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
		for (var u = s.t, a = s.k, c = dt(a), i = c.length - 1; i >= 0; i--) {
			var d = c[i];
			if (d !== ce) {
				var l = u[d];
				if (l === void 0 && !ut(u, d)) return !0;
				var m = a[d],
					f = m && m[ce];
				if (f ? f.t !== l : !aa(m, l)) return !0
			}
		}
		var v = !!u[ce];
		return c.length !== dt(u).length + (v ? 0 : 1)
	}

	function o(s) {
		var u = s.k;
		if (u.length !== s.t.length) return !0;
		var a = Object.getOwnPropertyDescriptor(u, u.length - 1);
		if (a && !a.get) return !0;
		for (var c = 0; c < u.length; c++)
			if (!u.hasOwnProperty(c)) return !0;
		return !1
	}
	var r = {};
	lu("ES5", {
		J: function(s, u) {
			var a = Array.isArray(s),
				c = (function(d, l) {
					if (d) {
						for (var m = Array(l.length), f = 0; f < l.length; f++) Object.defineProperty(m, "" + f, e(f, !0));
						return m
					}
					var v = la(l);
					delete v[ce];
					for (var h = dt(v), g = 0; g < h.length; g++) {
						var _ = h[g];
						v[_] = e(_, d || !!v[_].enumerable)
					}
					return Object.create(Object.getPrototypeOf(l), v)
				})(a, s),
				i = {
					i: a ? 5 : 4,
					A: u ? u.A : wo(),
					P: !1,
					I: !1,
					R: {},
					l: u,
					t: s,
					k: c,
					o: null,
					g: !1,
					C: !1
				};
			return Object.defineProperty(c, ce, {
				value: i,
				writable: !0
			}), c
		},
		S: function(s, u, a) {
			a ? Xe(u) && u[ce].A === s && t(s.p) : (s.u && (function c(i) {
				if (i && typeof i == "object") {
					var d = i[ce];
					if (d) {
						var l = d.t,
							m = d.k,
							f = d.R,
							v = d.i;
						if (v === 4) Je(m, (function(b) {
							b !== ce && (l[b] !== void 0 || ut(l, b) ? f[b] || c(m[b]) : (f[b] = !0, Ve(d)))
						})), Je(l, (function(b) {
							m[b] !== void 0 || ut(m, b) || (f[b] = !1, Ve(d))
						}));
						else if (v === 5) {
							if (o(d) && (Ve(d), f.length = !0), m.length < l.length)
								for (var h = m.length; h < l.length; h++) f[h] = !1;
							else
								for (var g = l.length; g < m.length; g++) f[g] = !0;
							for (var _ = Math.min(m.length, l.length), y = 0; y < _; y++) m.hasOwnProperty(y) || (f[y] = !0), f[y] === void 0 && c(m[y])
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
var zs, Dt, Qo = typeof Symbol < "u" && typeof Symbol("x") == "symbol",
	pu = typeof Map < "u",
	hu = typeof Set < "u",
	Ns = typeof Proxy < "u" && Proxy.revocable !== void 0 && typeof Reflect < "u",
	ca = Qo ? Symbol.for("immer-nothing") : ((zs = {})["immer-nothing"] = !0, zs),
	Fs = Qo ? Symbol.for("immer-draftable") : "__$immer_draftable",
	ce = Qo ? Symbol.for("immer-state") : "__$immer_state",
	mu = "" + Object.prototype.constructor,
	dt = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : Object.getOwnPropertySymbols !== void 0 ? function(e) {
		return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
	} : Object.getOwnPropertyNames,
	la = Object.getOwnPropertyDescriptors || function(e) {
		var t = {};
		return dt(e).forEach((function(n) {
			t[n] = Object.getOwnPropertyDescriptor(e, n)
		})), t
	},
	Co = {},
	jt = {
		get: function(e, t) {
			if (t === ce) return e;
			var n = Qe(e);
			if (!ut(n, t)) return (function(r, s, u) {
				var a, c = Ls(s, u);
				return c ? "value" in c ? c.value : (a = c.get) === null || a === void 0 ? void 0 : a.call(r.k) : void 0
			})(e, n, t);
			var o = n[t];
			return e.I || !Ue(o) ? o : o === eo(e.t, t) ? (to(e), e.o[t] = ko(e.A.h, o, e)) : o
		},
		has: function(e, t) {
			return t in Qe(e)
		},
		ownKeys: function(e) {
			return Reflect.ownKeys(Qe(e))
		},
		set: function(e, t, n) {
			var o = Ls(Qe(e), t);
			if (o?.set) return o.set.call(e.k, n), !0;
			if (!e.P) {
				var r = eo(Qe(e), t),
					s = r?.[ce];
				if (s && s.t === n) return e.o[t] = n, e.R[t] = !1, !0;
				if (aa(n, r) && (n !== void 0 || ut(e.t, t))) return !0;
				to(e), Ve(e)
			}
			return e.o[t] === n && (n !== void 0 || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0
		},
		deleteProperty: function(e, t) {
			return eo(e.t, t) !== void 0 || t in e.t ? (e.R[t] = !1, to(e), Ve(e)) : delete e.R[t], e.o && delete e.o[t], !0
		},
		getOwnPropertyDescriptor: function(e, t) {
			var n = Qe(e),
				o = Reflect.getOwnPropertyDescriptor(n, t);
			return o && {
				writable: !0,
				configurable: e.i !== 1 || t !== "length",
				enumerable: o.enumerable,
				value: n[t]
			}
		},
		defineProperty: function() {
			Ee(11)
		},
		getPrototypeOf: function(e) {
			return Object.getPrototypeOf(e.t)
		},
		setPrototypeOf: function() {
			Ee(12)
		}
	},
	Et = {};
Je(jt, (function(e, t) {
	Et[e] = function() {
		return arguments[0] = arguments[0][0], t.apply(this, arguments)
	}
})), Et.deleteProperty = function(e, t) {
	return Et.set.call(this, e, t, void 0)
}, Et.set = function(e, t, n) {
	return jt.set.call(this, e[0], t, n, e[0])
};
var vu = (function() {
		function e(n) {
			var o = this;
			this.O = Ns, this.D = !0, this.produce = function(r, s, u) {
				if (typeof r == "function" && typeof s != "function") {
					var a = s;
					s = r;
					var c = o;
					return function(h) {
						var g = this;
						h === void 0 && (h = a);
						for (var _ = arguments.length, y = Array(_ > 1 ? _ - 1 : 0), b = 1; b < _; b++) y[b - 1] = arguments[b];
						return c.produce(h, (function(C) {
							var x;
							return (x = s).call.apply(x, [g, C].concat(y))
						}))
					}
				}
				var i;
				if (typeof s != "function" && Ee(6), u !== void 0 && typeof u != "function" && Ee(7), Ue(r)) {
					var d = Is(o),
						l = ko(o, r, void 0),
						m = !0;
					try {
						i = s(l), m = !1
					} finally {
						m ? fn(d) : xo(d)
					}
					return typeof Promise < "u" && i instanceof Promise ? i.then((function(h) {
						return Zn(d, u), Jn(h, d)
					}), (function(h) {
						throw fn(d), h
					})) : (Zn(d, u), Jn(i, d))
				}
				if (!r || typeof r != "object") {
					if ((i = s(r)) === void 0 && (i = r), i === ca && (i = void 0), o.D && Go(i, !0), u) {
						var f = [],
							v = [];
						je("Patches").M(r, i, f, v), u(f, v)
					}
					return i
				}
				Ee(21, r)
			}, this.produceWithPatches = function(r, s) {
				if (typeof r == "function") return function(i) {
					for (var d = arguments.length, l = Array(d > 1 ? d - 1 : 0), m = 1; m < d; m++) l[m - 1] = arguments[m];
					return o.produceWithPatches(i, (function(f) {
						return r.apply(void 0, [f].concat(l))
					}))
				};
				var u, a, c = o.produce(r, s, (function(i, d) {
					u = i, a = d
				}));
				return typeof Promise < "u" && c instanceof Promise ? c.then((function(i) {
					return [i, u, a]
				})) : [c, u, a]
			}, typeof n?.useProxies == "boolean" && this.setUseProxies(n.useProxies), typeof n?.autoFreeze == "boolean" && this.setAutoFreeze(n.autoFreeze)
		}
		var t = e.prototype;
		return t.createDraft = function(n) {
			Ue(n) || Ee(8), Xe(n) && (n = du(n));
			var o = Is(this),
				r = ko(this, n, void 0);
			return r[ce].C = !0, xo(o), r
		}, t.finishDraft = function(n, o) {
			var r = n && n[ce],
				s = r.A;
			return Zn(s, o), Jn(void 0, s)
		}, t.setAutoFreeze = function(n) {
			this.D = n
		}, t.setUseProxies = function(n) {
			n && !Ns && Ee(20), this.O = n
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
			var u = je("Patches").$;
			return Xe(n) ? u(n, o) : this.produce(n, (function(a) {
				return u(a, o)
			}))
		}, e
	})(),
	xe = new vu,
	ua = xe.produce;
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

function gu(e, t) {
	if (It(e) !== "object" || e === null) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var o = n.call(e, t);
		if (It(o) !== "object") return o;
		throw new TypeError("@@toPrimitive must return a primitive value.")
	}
	return (t === "string" ? String : Number)(e)
}

function _u(e) {
	var t = gu(e, "string");
	return It(t) === "symbol" ? t : String(t)
}

function yu(e, t, n) {
	return t = _u(t), t in e ? Object.defineProperty(e, t, {
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
			yu(e, o, n[o])
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
	mn = {
		INIT: "@@redux/INIT" + no(),
		REPLACE: "@@redux/REPLACE" + no(),
		PROBE_UNKNOWN_ACTION: function() {
			return "@@redux/PROBE_UNKNOWN_ACTION" + no()
		}
	};

function bu(e) {
	if (typeof e != "object" || e === null) return !1;
	for (var t = e; Object.getPrototypeOf(t) !== null;) t = Object.getPrototypeOf(t);
	return Object.getPrototypeOf(e) === t
}

function da(e, t, n) {
	var o;
	if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function") throw new Error(_e(0));
	if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
		if (typeof n != "function") throw new Error(_e(1));
		return n(da)(e, t)
	}
	if (typeof e != "function") throw new Error(_e(2));
	var r = e,
		s = t,
		u = [],
		a = u,
		c = !1;

	function i() {
		a === u && (a = u.slice())
	}

	function d() {
		if (c) throw new Error(_e(3));
		return s
	}

	function l(h) {
		if (typeof h != "function") throw new Error(_e(4));
		if (c) throw new Error(_e(5));
		var g = !0;
		return i(), a.push(h),
			function() {
				if (g) {
					if (c) throw new Error(_e(6));
					g = !1, i();
					var y = a.indexOf(h);
					a.splice(y, 1), u = null
				}
			}
	}

	function m(h) {
		if (!bu(h)) throw new Error(_e(7));
		if (typeof h.type > "u") throw new Error(_e(8));
		if (c) throw new Error(_e(9));
		try {
			c = !0, s = r(s, h)
		} finally {
			c = !1
		}
		for (var g = u = a, _ = 0; _ < g.length; _++) {
			var y = g[_];
			y()
		}
		return h
	}

	function f(h) {
		if (typeof h != "function") throw new Error(_e(10));
		r = h, m({
			type: mn.REPLACE
		})
	}

	function v() {
		var h, g = l;
		return h = {
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
		}, h[Hs] = function() {
			return this
		}, h
	}
	return m({
		type: mn.INIT
	}), o = {
		dispatch: m,
		subscribe: l,
		getState: d,
		replaceReducer: f
	}, o[Hs] = v, o
}

function wu(e) {
	Object.keys(e).forEach(function(t) {
		var n = e[t],
			o = n(void 0, {
				type: mn.INIT
			});
		if (typeof o > "u") throw new Error(_e(12));
		if (typeof n(void 0, {
				type: mn.PROBE_UNKNOWN_ACTION()
			}) > "u") throw new Error(_e(13))
	})
}

function xu(e) {
	for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
		var r = t[o];
		typeof e[r] == "function" && (n[r] = e[r])
	}
	var s = Object.keys(n),
		u;
	try {
		wu(n)
	} catch (a) {
		u = a
	}
	return function(c, i) {
		if (c === void 0 && (c = {}), u) throw u;
		for (var d = !1, l = {}, m = 0; m < s.length; m++) {
			var f = s[m],
				v = n[f],
				h = c[f],
				g = v(h, i);
			if (typeof g > "u") throw i && i.type, new Error(_e(14));
			l[f] = g, d = d || g !== h
		}
		return d = d || s.length !== Object.keys(c).length, d ? l : c
	}
}

function vn() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return t.length === 0 ? function(o) {
		return o
	} : t.length === 1 ? t[0] : t.reduce(function(o, r) {
		return function() {
			return o(r.apply(void 0, arguments))
		}
	})
}

function ku() {
	for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
	return function(o) {
		return function() {
			var r = o.apply(void 0, arguments),
				s = function() {
					throw new Error(_e(15))
				},
				u = {
					getState: r.getState,
					dispatch: function() {
						return s.apply(void 0, arguments)
					}
				},
				a = t.map(function(c) {
					return c(u)
				});
			return s = vn.apply(void 0, a)(r.dispatch), Us(Us({}, r), {}, {
				dispatch: s
			})
		}
	}
}

function fa(e) {
	var t = function(o) {
		var r = o.dispatch,
			s = o.getState;
		return function(u) {
			return function(a) {
				return typeof a == "function" ? a(r, s, e) : u(a)
			}
		}
	};
	return t
}
var So = fa();
So.withExtraArgument = fa;
var pa = (function() {
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
	Cu = function(e, t) {
		var n = {
				label: 0,
				sent: function() {
					if (s[0] & 1) throw s[1];
					return s[1]
				},
				trys: [],
				ops: []
			},
			o, r, s, u;
		return u = {
			next: a(0),
			throw: a(1),
			return: a(2)
		}, typeof Symbol == "function" && (u[Symbol.iterator] = function() {
			return this
		}), u;

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
	Su = Object.defineProperty,
	Pu = Object.defineProperties,
	Eu = Object.getOwnPropertyDescriptors,
	$s = Object.getOwnPropertySymbols,
	Ou = Object.prototype.hasOwnProperty,
	Mu = Object.prototype.propertyIsEnumerable,
	Vs = function(e, t, n) {
		return t in e ? Su(e, t, {
			enumerable: !0,
			configurable: !0,
			writable: !0,
			value: n
		}) : e[t] = n
	},
	We = function(e, t) {
		for (var n in t || (t = {})) Ou.call(t, n) && Vs(e, n, t[n]);
		if ($s)
			for (var o = 0, r = $s(t); o < r.length; o++) {
				var n = r[o];
				Mu.call(t, n) && Vs(e, n, t[n])
			}
		return e
	},
	oo = function(e, t) {
		return Pu(e, Eu(t))
	},
	Au = function(e, t, n) {
		return new Promise(function(o, r) {
			var s = function(c) {
					try {
						a(n.next(c))
					} catch (i) {
						r(i)
					}
				},
				u = function(c) {
					try {
						a(n.throw(c))
					} catch (i) {
						r(i)
					}
				},
				a = function(c) {
					return c.done ? o(c.value) : Promise.resolve(c.value).then(s, u)
				};
			a((n = n.apply(e, t)).next())
		})
	},
	Tu = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
		if (arguments.length !== 0) return typeof arguments[0] == "object" ? vn : vn.apply(null, arguments)
	};

function Du(e) {
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
			return We(We({
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
var ju = (function(e) {
		pa(t, e);

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
	Iu = (function(e) {
		pa(t, e);

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
	return Ue(e) ? ua(e, function() {}) : e
}

function Ru(e) {
	return typeof e == "boolean"
}

function Lu() {
	return function(t) {
		return Bu(t)
	}
}

function Bu(e) {
	e === void 0 && (e = {});
	var t = e.thunk,
		n = t === void 0 ? !0 : t;
	e.immutableCheck, e.serializableCheck, e.actionCreatorCheck;
	var o = new ju;
	return n && (Ru(n) ? o.push(So) : o.push(So.withExtraArgument(n.extraArgument))), o
}

function zu(e) {
	var t = Lu(),
		n = e || {},
		o = n.reducer,
		r = o === void 0 ? void 0 : o,
		s = n.middleware,
		u = s === void 0 ? t() : s,
		a = n.devTools,
		c = a === void 0 ? !0 : a,
		i = n.preloadedState,
		d = i === void 0 ? void 0 : i,
		l = n.enhancers,
		m = l === void 0 ? void 0 : l,
		f;
	if (typeof r == "function") f = r;
	else if (Du(r)) f = xu(r);
	else throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
	var v = u;
	typeof v == "function" && (v = v(t));
	var h = ku.apply(void 0, v),
		g = vn;
	c && (g = Tu(We({
		trace: !1
	}, typeof c == "object" && c)));
	var _ = new Iu(h),
		y = _;
	Array.isArray(m) ? y = vt([h], m) : typeof m == "function" && (y = m(_));
	var b = g.apply(void 0, y);
	return da(f, d, b)
}

function ha(e) {
	var t = {},
		n = [],
		o, r = {
			addCase: function(s, u) {
				var a = typeof s == "string" ? s : s.type;
				if (!a) throw new Error("`builder.addCase` cannot be called with an empty action type");
				if (a in t) throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
				return t[a] = u, r
			},
			addMatcher: function(s, u) {
				return n.push({
					matcher: s,
					reducer: u
				}), r
			},
			addDefaultCase: function(s) {
				return o = s, r
			}
		};
	return e(r), [t, n, o]
}

function Nu(e) {
	return typeof e == "function"
}

function Fu(e, t, n, o) {
	n === void 0 && (n = []);
	var r = typeof t == "function" ? ha(t) : [t, n, o],
		s = r[0],
		u = r[1],
		a = r[2],
		c;
	if (Nu(e)) c = function() {
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
		var f = vt([s[m.type]], u.filter(function(v) {
			var h = v.matcher;
			return h(m)
		}).map(function(v) {
			var h = v.reducer;
			return h
		}));
		return f.filter(function(v) {
			return !!v
		}).length === 0 && (f = [a]), f.reduce(function(v, h) {
			if (h)
				if (Xe(v)) {
					var g = v,
						_ = h(g, m);
					return _ === void 0 ? v : _
				} else {
					if (Ue(v)) return ua(v, function(y) {
						return h(y, m)
					});
					var _ = h(v, m);
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

function Ku(e, t) {
	return e + "/" + t
}

function nt(e) {
	var t = e.name;
	if (!t) throw new Error("`name` is a required option for createSlice");
	var n = typeof e.initialState == "function" ? e.initialState : Po(e.initialState),
		o = e.reducers || {},
		r = Object.keys(o),
		s = {},
		u = {},
		a = {};
	r.forEach(function(d) {
		var l = o[d],
			m = Ku(t, d),
			f, v;
		"reducer" in l ? (f = l.reducer, v = l.prepare) : f = l, s[d] = f, u[m] = f, a[d] = v ? we(m, v) : we(m)
	});

	function c() {
		var d = typeof e.extraReducers == "function" ? ha(e.extraReducers) : [e.extraReducers],
			l = d[0],
			m = l === void 0 ? {} : l,
			f = d[1],
			v = f === void 0 ? [] : f,
			h = d[2],
			g = h === void 0 ? void 0 : h,
			_ = We(We({}, m), u);
		return Fu(n, function(y) {
			for (var b in _) y.addCase(b, _[b]);
			for (var C = 0, x = v; C < x.length; C++) {
				var D = x[C];
				y.addMatcher(D.matcher, D.reducer)
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
var Uu = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",
	Hu = function(e) {
		e === void 0 && (e = 21);
		for (var t = "", n = e; n--;) t += Uu[Math.random() * 64 | 0];
		return t
	},
	$u = ["name", "message", "stack", "code"],
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
	Vu = function(e) {
		if (typeof e == "object" && e !== null) {
			for (var t = {}, n = 0, o = $u; n < o.length; n++) {
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
					meta: oo(We({}, m || {}), {
						arg: l,
						requestId: d,
						requestStatus: "fulfilled"
					})
				}
			}),
			s = we(t + "/pending", function(i, d, l) {
				return {
					payload: void 0,
					meta: oo(We({}, l || {}), {
						arg: d,
						requestId: i,
						requestStatus: "pending"
					})
				}
			}),
			u = we(t + "/rejected", function(i, d, l, m, f) {
				return {
					payload: m,
					error: (o && o.serializeError || Vu)(i || "Rejected"),
					meta: oo(We({}, f || {}), {
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
				var f = o?.idGenerator ? o.idGenerator(i) : Hu(),
					v = new a,
					h;

				function g(y) {
					h = y, v.abort()
				}
				var _ = (function() {
					return Au(this, null, function() {
						var y, b, C, x, D, j, N;
						return Cu(this, function(F) {
							switch (F.label) {
								case 0:
									return F.trys.push([0, 4, , 5]), x = (y = o?.condition) == null ? void 0 : y.call(o, i, {
										getState: l,
										extra: m
									}), qu(x) ? [4, x] : [3, 2];
								case 1:
									x = F.sent(), F.label = 2;
								case 2:
									if (x === !1 || v.signal.aborted) throw {
										name: "ConditionError",
										message: "Aborted due to condition callback returning false."
									};
									return D = new Promise(function(K, R) {
										return v.signal.addEventListener("abort", function() {
											return R({
												name: "AbortError",
												message: h || "Aborted"
											})
										})
									}), d(s(f, i, (b = o?.getPendingMeta) == null ? void 0 : b.call(o, {
										requestId: f,
										arg: i
									}, {
										getState: l,
										extra: m
									}))), [4, Promise.race([D, Promise.resolve(n(i, {
										dispatch: d,
										getState: l,
										extra: m,
										requestId: f,
										signal: v.signal,
										abort: g,
										rejectWithValue: function(K, R) {
											return new ro(K, R)
										},
										fulfillWithValue: function(K, R) {
											return new Ws(K, R)
										}
									})).then(function(K) {
										if (K instanceof ro) throw K;
										return K instanceof Ws ? r(K.payload, f, i, K.meta) : r(K, f, i)
									})])];
								case 3:
									return C = F.sent(), [3, 5];
								case 4:
									return j = F.sent(), C = j instanceof ro ? u(null, f, i, j.payload, j.meta) : u(j, f, i), [3, 5];
								case 5:
									return N = o && !o.dispatchConditionRejection && u.match(C) && C.meta.condition, N || d(C), [2, C]
							}
						})
					})
				})();
				return Object.assign(_, {
					abort: g,
					requestId: f,
					arg: i,
					unwrap: function() {
						return _.then(Wu)
					}
				})
			}
		}
		return Object.assign(c, {
			pending: s,
			rejected: u,
			fulfilled: r,
			typePrefix: t
		})
	}
	return e.withTypes = function() {
		return e
	}, e
})();

function Wu(e) {
	if (e.meta && e.meta.rejectedWithValue) throw e.payload;
	if (e.error) throw e.error;
	return e.payload
}

function qu(e) {
	return e !== null && typeof e == "object" && typeof e.then == "function"
}
var Zo = "listenerMiddleware";
we(Zo + "/add");
we(Zo + "/removeAll");
we(Zo + "/remove");
var qs;
typeof queueMicrotask == "function" && queueMicrotask.bind(typeof window < "u" ? window : typeof global < "u" ? global : globalThis);
fu();
const ma = {
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
	Xu = {
		lang: Xs,
		keys: ma[Xs]
	},
	va = nt({
		name: "i18n",
		initialState: Xu,
		reducers: {
			setLang: (e, t) => {
				e.lang = t.payload, e.keys = ma[t.payload]
			}
		}
	});

function Q() {
	const e = M(t => t.i18n.keys);
	return t => e[t] ?? t
}

function Gu(e) {
	return t => e.i18n.keys[t] ?? t
}
const ga = [{
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
	Yu = {
		configChanged: !1,
		bundleConfig: null,
		errorMessage: null,
		fs: []
	},
	kn = nt({
		name: "editor",
		initialState: Yu,
		reducers: {
			init: (e, t) => {
				t.payload === null ? (e.configChanged = !0, e.bundleConfig = {
					dosboxConf: ga[0].contents,
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
	Qu = 1024,
	Gs = "@",
	Ys = ".";
class Zu {
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
class Ju {
	backend;
	length;
	prefix;
	constructor(t, n) {
		this.prefix = n;
		try {
			this.backend = t || localStorage, this.testBackend()
		} catch {
			this.backend = new Zu
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
			let r = n.substr(o, Qu);
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
const ie = new Ju(void 0, "jsdos.8."),
	ed = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
	td = {
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
	z = nt({
		name: "js-dos v8s",
		initialState: td,
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
					t.asyncStore(n => n.dispatch(z.actions.hideToast()))
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
	nd = "doszone-uploads",
	od = "https://storage.yandexcloud.net",
	rd = "dzapi",
	Jo = "https://d5dn8hh4ivlobv6682ep.apigw.yandexcloud.net",
	sd = Jo + "/presign-put",
	id = Jo + "/presign-delete",
	ad = "https://cloud.js-dos.com",
	cd = ad + "/token/get",
	ld = "wss://net.js-dos.com:444",
	ud = "mp",
	dd = "32r09j23f",
	fd = "https://br.cdn.dos.zone",
	Qs = 5;

function _a(e) {
	return e && (e.endsWith("/b4b5275904d86a4ab8a20917b2b7e34f0df47bf7.jsdos") || e.endsWith("/dhry2.jsdos"))
}
const Eo = "cached.jsdos.account",
	pd = (() => {
		const e = ie.getItem(Eo);
		if (e) {
			const t = JSON.parse(e);
			if (t.email && t.email.length > 0 && t.token && t.token.length === 5) return t
		}
		return null
	})(),
	hd = {
		account: pd
	},
	Rt = nt({
		name: "auth",
		initialState: hd,
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
	const t = await (await fetch(cd + "?id=" + e)).json();
	return delete t.success, {
		token: e,
		account: t.email ? t : null
	}
}
const md = {
		recived: 0,
		total: 0,
		changedRecived: 0,
		changedTotal: 0,
		ready: !1
	},
	et = nt({
		name: "storage",
		initialState: md,
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
class ya {
	storeName = "files";
	indexedDB;
	db = null;
	constructor(t, n, o, r, s) {
		if (this.storeName = n, this.indexedDB = typeof window > "u" ? void 0 : window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB, !this.indexedDB) {
			s("Indexed db is not supported on this host");
			return
		}
		try {
			const u = this.indexedDB.open(t, 1);
			u.onerror = a => {
				s("Can't open cache database: " + u.error?.message)
			}, u.onsuccess = a => {
				this.db = u.result, r(this)
			}, u.onupgradeneeded = a => {
				try {
					this.db = u.result, this.db.onerror = c => {
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
		} catch (u) {
			s("Can't open cache database: " + u.message)
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
			const u = this.db.transaction(this.storeName, "readwrite").objectStore(this.storeName).put(new Blob([n.buffer]), t);
			u.onerror = a => {
				r(new Error("Can't put key '" + t + "'")), console.error(a)
			}, u.onsuccess = () => o()
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

function ba() {
	return new Promise(e => {
		new ya("js-dos-cache (guest)", "files", [
			["files", "key", !0]
		], e, t => {
			console.error("Can't open IndexedDB cache", t), e(new er)
		})
	})
}

function wa(e) {
	return new Promise(t => {
		new ya("sockdrive (" + e + ")", "write", [
			["raw", "range", !1],
			["write", "sector", !1]
		], t, n => {
			console.error("Can't open IndexedDB cache", n), t(new er)
		})
	})
}
let so = -1;

function xa() {
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
xa().slice;
const vd = e => t => n => {
		function o(s) {
			setTimeout(() => s(e), 4)
		}
		const r = Object.assign({}, n, {
			asyncStore: o
		});
		t(r)
	},
	Mo = {};

function gd(e) {
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

function _d(e, t) {
	const {
		storeUid: n,
		slice: o
	} = xa(), r = zu({
		reducer: {
			init: o.reducer,
			i18n: va.reducer,
			auth: Rt.reducer,
			ui: z.reducer,
			dos: I.reducer,
			storage: et.reducer,
			editor: kn.reducer
		},
		middleware: s => {
			const u = s();
			return u.push(vd), u
		}
	});
	return Mo[n] = e, r
}

function Se(e) {
	return typeof e.getState == "function" ? Mo[e.getState().init.uid] : Mo[e.init.uid]
}

function ge() {
	return Se(Pe())
}

function Kt(e, t, n) {
	e.options.onEvent && setTimeout(() => {
		e.options.onEvent?.(t, n)
	}, 4)
}

function Fe(e) {
	return e.getState()
}
const yd = ["dosbox", "dosboxX"],
	bd = ["webgl", "canvas"],
	wd = ["AsIs", "1/1", "5/4", "4/3", "16/10", "16/9", "Fit"],
	ka = 65535,
	xd = ["none", "all", "default"],
	kd = ["pixelated", "smooth"],
	Cd = {
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
		initialState: Cd,
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
					Kt(Se(n), "bnd-play")
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
					const u = o.endsWith("/") ? o.substring(0, o.length - 1) : o;
					s.ci.networkConnect(0, u + ":1900/ipx/" + n.replaceAll("@", "_")).then(() => {
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

function Sd(e, t, n) {
	e.dispatch(async o => {
		try {
			Zs || (await Pd(t, n), Zs = !0), o(I.actions.emuReady(emulators.version))
		} catch (r) {
			console.error("Unable to init emulators.js", r), o(I.actions.emuError(r.message))
		}
	})
}

function Pd(e, t) {
	return document.querySelector("#emulators-js") !== null ? Promise.resolve() : new Promise((o, r) => {
		const s = document.createElement("script");
		s.id = "emulators-js", s.async = !0, s.type = "text/javascript", s.src = e + "emulators.js" + t, s.onload = () => {
			emulators.pathPrefix = e, emulators.pathSuffix = t, o()
		}, s.onerror = u => {
			r(new Error("Unable to add emulators.js. Probably you should set the 'pathPrefix' option to point to the js-dos folder."))
		}, document.head.appendChild(s)
	})
}

function Ed(e, t) {
	const n = t.lastIndexOf("/"),
		o = t.substring(n + 1);
	return "personal-v2/" + rd + "/" + e + "/" + o
}

function Od(e, t) {
	const n = Ed(e, t);
	return od + "/" + nd + "/" + n
}
async function Md(e, t) {
	let n = await fetch(sd + "?bundleUrl=" + encodeURIComponent(e));
	const o = await n.json();
	if (!o.success) throw new Error("Unable to put personal bundle");
	const r = o.post,
		s = new FormData;
	if (Object.entries(r.fields).forEach(([u, a]) => {
			s.append(u, a)
		}), s.append("acl", "public-read"), s.append("file", new Blob([t])), n = await fetch(r.url, {
			method: "post",
			body: s
		}), n.status !== 200 && n.status !== 204) throw new Error("Unable to put changes: " + n.statusText)
}
async function gt(e, t, n, o = !1, r = null) {
	const s = t.ci,
		u = t.loadedBundle?.bundleChangesUrl;
	if (s === null && r === null || !u || !e.ui.canSave) return !1;
	const a = Gu(e),
		c = e.auth.account;
	try {
		n(z.actions.showToast({
			message: a("saving_game"),
			intent: "none",
			long: !0
		}));
		let i = !0;
		const d = c === null || c.email === null ? a("warn_save_no_account") : c.premium ? a("warn_save_big_file") : a("warn_save_no_premium");
		let l = !1;
		if (r === null) {
			const m = await s.persist(!0);
			r = Td(m), l = r !== m && !o
		}
		return r !== null && (l && n(z.actions.showToast({
			message: a("sockdrive_save_in_the_middle"),
			intent: "warning",
			long: !0
		})), tr(c, r) ? (await Md(u, r), i = !1) : await t.cache.put(u, r)), r === null ? n(z.actions.showToast({
			message: a("no_changes_to_save"),
			intent: "warning",
			long: !0
		})) : i ? setTimeout(() => {
			n(z.actions.showToast({
				message: d,
				intent: "success",
				long: !0
			}))
		}, l ? 3e3 : 4) : n(z.actions.showToast({
			message: a("success_save"),
			intent: "success",
			long: !0
		})), !0
	} catch (i) {
		return n(z.actions.showToast({
			message: a("unable_to_save"),
			intent: "error",
			long: !0
		})), console.error(i), !1
	}
}

function tr(e, t) {
	return e ? e.email !== void 0 && (e.email === "dz.caiiiycuk@gmail.com" || e.premium === !0) && (t === null || t.length <= 30 * 1024 * 1024) : !1
}
async function Ad(e) {
	return Ca(e, async (t, n) => {
		const o = await wa(t);
		await o.put(0, n), o.close()
	})
}
async function Ca(e, t) {
	const n = new TextDecoder;
	let o = 0;
	for (; o < e.length;) {
		const r = re(e, o);
		if (o += 4, r > 4096) return !1;
		const s = n.decode(e.slice(o, o + r));
		if (!(s.startsWith("http://") || s.startsWith("https://"))) return !1;
		o += r;
		const u = re(e, o);
		o += 4;
		const a = e.slice(o, o + u);
		o += u, await t(s, a)
	}
	return !0
}

function Td(e) {
	if (e === null || e instanceof Uint8Array) return e;
	const t = new TextEncoder,
		n = [];
	let o = 0;
	for (const {
			url: u,
			persist: a
		}
		of e.drives) n.push(t.encode(u)), o += a.length + n[n.length - 1].length + 8;
	const r = new Uint8Array(o);
	let s = 0;
	for (let u = 0; u < e.drives.length; u++) {
		const a = n[u],
			c = e.drives[u].persist;
		s = ae(r, a.length, s), r.set(a, s), s += a.length, s = ae(r, c.length, s), r.set(c, s), s += c.length
	}
	return r
}

function ae(e, t, n) {
	return e[n] = t & 255, e[n + 1] = (t & 65280) >> 8, e[n + 2] = (t & 16711680) >> 16, e[n + 3] = (t & 4278190080) >> 24, n + 4
}

function re(e, t) {
	return e[t] & 255 | e[t + 1] << 8 & 65280 | e[t + 2] << 16 & 16711680 | e[t + 3] << 24 & 4278190080
}

function Sa(e) {
	e.sendBackendEvent({
		type: "wc-trigger-event",
		event: "hand_savestate"
	})
}

function Pa(e) {
	e.sendBackendEvent({
		type: "wc-trigger-event",
		event: "hand_loadstate"
	})
}

function Dd(e, t) {
	return new Promise(n => {
		t.dispatch(et.actions.reset());
		const o = new FileReader;
		o.addEventListener("load", async r => {
			n(new Uint8Array(o.result))
		}), o.addEventListener("progress", r => {
			t.dispatch(et.actions.progress([r.loaded, r.total]))
		}), o.readAsArrayBuffer(e)
	})
}
async function jd(e, t, n) {
	if (!tr(t, null)) return await Se(n).cache.get(e).catch(() => null);
	try {
		const o = await fetch(e, {
			cache: "no-cache"
		});
		if (o.status !== 200) throw new Error("Resource not avalible (" + o.status + "): " + o.statusText);
		return await Ea(o, e, (r, s) => {
			n.dispatch(et.actions.changedProgress([r, s]))
		})
	} catch {
		return await Se(n).cache.get(e).catch(() => null)
	}
}
async function Id(e, t) {
	try {
		if (!_a(e)) return await Se(t).cache.get(e)
	} catch {}
	t.dispatch(et.actions.reset());
	const n = await fetch(e, {
		cache: "no-store"
	});
	if (n.status !== 200) throw new Error("Resource not avalible (" + n.status + "): " + n.statusText);
	const o = await Ea(n, e, (r, s) => {
		t.dispatch(et.actions.progress([r, s]))
	});
	return Se(t).cache.put(e, o).catch(console.error), o
}
async function Ea(e, t, n) {
	const o = e.headers.get("Content-Length"),
		r = o === null ? 0 : Number.parseInt(o),
		s = e.body.getReader();
	let u = 0;
	const a = [];
	for (;;) {
		const {
			done: d,
			value: l
		} = await s.read();
		if (d) break;
		a.push(l), u += l.length;
		const m = Math.min(t.startsWith(fd) ? u / 2 : u, r);
		n(m, r)
	}
	let c = 0;
	const i = new Uint8Array(u);
	for (const d of a) i.set(d, c), c += d.length;
	return i
}
async function Rd(e) {
	await Cn("empty.jsdos", (async () => (await emulators.bundle()).toUint8Array())(), null, null, e), e.dispatch(z.actions.frameConf()), e.dispatch(z.actions.setEditor(!0))
}
async function Ld(e, t, n) {
	await Cn("bundle.jsdos", Promise.resolve(e), null, null, n), n.dispatch(z.actions.frameConf())
}

function Bd(e, t) {
	return Cn(e.name, Dd(e, t), null, null, t)
}
async function zd(e, t, n) {
	const o = Se(n),
		r = n.dispatch;
	o.loadedBundle = null, r(kn.actions.init(e)), Oa(e, r), o.loadedBundle = {
		bundleUrl: null,
		bundleChangesUrl: null,
		bundle: e,
		bundleChanges: null,
		appliedBundleChanges: null,
		initFs: t
	}, r(I.actions.bndReady({}))
}
async function Lt(e, t) {
	return Cn(e, Id(e, t), Nd(e, t), e, t)
}
async function Cn(e, t, n, o, r) {
	const s = Se(r),
		u = r.dispatch;
	s.loadedBundle = null, u(I.actions.bndLoad(e));
	const a = await t;
	u(et.actions.ready());
	const c = await n;
	u(I.actions.bndConfig());
	const i = await emulators.bundleConfig(a);
	u(kn.actions.init(i)), i === null ? u(z.actions.frameConf()) : Oa(i, u), s.loadedBundle = {
		bundleUrl: o,
		bundleChangesUrl: c?.url ?? null,
		bundle: a,
		bundleChanges: c?.bundle ?? null,
		appliedBundleChanges: c?.appliedBundleChanges ?? null,
		initFs: s.options.initFs ?? null
	}, u(I.actions.bndReady({}))
}
async function Nd(e, t) {
	const n = Fe(t).auth.account,
		o = n?.email ?? "guest",
		r = Od(o, e),
		s = await jd(r, n, t);
	return s !== null && s.length > 1 && !(s[0] === 80 && s[1] === 75) ? (await Ad(s) || t.dispatch(z.actions.showToast({
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

function Oa(e, t) {
	Ma(e.dosboxConf, t), t(I.actions.mouseCapture(e.dosboxConf.indexOf("autolock=true") >= 0))
}

function Ma(e, t) {
	(e.indexOf("sockdrive") >= 0 || e.indexOf(".qcow2") >= 0) && (t(I.actions.dosBackendLocked(!0)), t(I.actions.dosBackend("dosboxX")), t(I.actions.noCursor(!0)), t(z.actions.canSave(e.indexOf(".qcow2") === -1)))
}
var Fd = 0;

function p(e, t, n, o, r, s) {
	var u, a, c = {};
	for (a in t) a == "ref" ? u = t[a] : c[a] = t[a];
	var i = {
		type: e,
		props: c,
		key: n,
		ref: u,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__d: void 0,
		__c: null,
		constructor: void 0,
		__v: --Fd,
		__i: -1,
		__u: 0,
		__source: r,
		__self: s
	};
	if (typeof e == "function" && (u = e.defaultProps))
		for (a in u) c[a] === void 0 && (c[a] = u[a]);
	return U.vnode && U.vnode(i), i
}

function Kd() {
	const e = Q(),
		t = M(s => s.editor.bundleConfig),
		n = Y();

	function o(s) {
		r(s)
	}

	function r(s) {
		Ma(s, n), n(I.actions.mouseCapture(s.indexOf("autolock=true") > 0)), n(kn.actions.dosboxConf(s))
	}
	return t === null ? null : p("div", {
		class: "editor-conf-frame flex flex-col flex-grow w-full gap-2",
		children: [p("div", {
			class: "",
			children: e("dosboxconf_template")
		}), p("div", {
			class: "flex flex-row flex-wrap items-center gap-2",
			children: ga.map(({
				name: s,
				backend: u,
				contents: a
			}) => p("button", {
				class: "btn btn-sm",
				onClick: () => {
					n(I.actions.dosBackend(u === "dosboxX" ? "dosboxX" : "dosbox"))
				},
				children: s
			}))
		}), p("textarea", {
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

function Ud() {
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
								for (var m = [], f = 0; f < arguments.length; f++) {
									var v = arguments[f];
									if (v) {
										var h = typeof v;
										if (h === "string" || h === "number") m.push(v);
										else if (Array.isArray(v)) {
											if (v.length) {
												var g = l.apply(null, v);
												g && m.push(g)
											}
										} else if (h === "object")
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
							f = i(1327),
							v = i(1866);

						function h(g) {
							var _ = -1,
								y = g == null ? 0 : g.length;
							for (this.clear(); ++_ < y;) {
								var b = g[_];
								this.set(b[0], b[1])
							}
						}
						h.prototype.clear = d, h.prototype.delete = l, h.prototype.get = m, h.prototype.has = f, h.prototype.set = v, a.exports = h
					},
					8407: (a, c, i) => {
						var d = i(7040),
							l = i(4125),
							m = i(2117),
							f = i(7518),
							v = i(4705);

						function h(g) {
							var _ = -1,
								y = g == null ? 0 : g.length;
							for (this.clear(); ++_ < y;) {
								var b = g[_];
								this.set(b[0], b[1])
							}
						}
						h.prototype.clear = d, h.prototype.delete = l, h.prototype.get = m, h.prototype.has = f, h.prototype.set = v, a.exports = h
					},
					7071: (a, c, i) => {
						var d = i(852)(i(5639), "Map");
						a.exports = d
					},
					3369: (a, c, i) => {
						var d = i(4785),
							l = i(1285),
							m = i(6e3),
							f = i(9916),
							v = i(5265);

						function h(g) {
							var _ = -1,
								y = g == null ? 0 : g.length;
							for (this.clear(); ++_ < y;) {
								var b = g[_];
								this.set(b[0], b[1])
							}
						}
						h.prototype.clear = d, h.prototype.delete = l, h.prototype.get = m, h.prototype.has = f, h.prototype.set = v, a.exports = h
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

						function f(v) {
							var h = -1,
								g = v == null ? 0 : v.length;
							for (this.__data__ = new d; ++h < g;) this.add(v[h])
						}
						f.prototype.add = f.prototype.push = l, f.prototype.has = m, a.exports = f
					},
					6384: (a, c, i) => {
						var d = i(8407),
							l = i(7465),
							m = i(3779),
							f = i(7599),
							v = i(4758),
							h = i(4309);

						function g(_) {
							var y = this.__data__ = new d(_);
							this.size = y.size
						}
						g.prototype.clear = l, g.prototype.delete = m, g.prototype.get = f, g.prototype.has = v, g.prototype.set = h, a.exports = g
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
							for (var d = -1, l = c == null ? 0 : c.length, m = 0, f = []; ++d < l;) {
								var v = c[d];
								i(v, d, c) && (f[m++] = v)
							}
							return f
						}
					},
					4636: (a, c, i) => {
						var d = i(2545),
							l = i(5694),
							m = i(1469),
							f = i(4144),
							v = i(5776),
							h = i(6719),
							g = Object.prototype.hasOwnProperty;
						a.exports = function(_, y) {
							var b = m(_),
								C = !b && l(_),
								x = !b && !C && f(_),
								D = !b && !C && !x && h(_),
								j = b || C || x || D,
								N = j ? d(_.length, String) : [],
								F = N.length;
							for (var K in _) !y && !g.call(_, K) || j && (K == "length" || x && (K == "offset" || K == "parent") || D && (K == "buffer" || K == "byteLength" || K == "byteOffset") || v(K, F)) || N.push(K);
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
							for (var f = l.length; f--;)
								if (d(l[f][0], m)) return f;
							return -1
						}
					},
					8866: (a, c, i) => {
						var d = i(2488),
							l = i(1469);
						a.exports = function(m, f, v) {
							var h = f(m);
							return l(m) ? h : d(h, v(m))
						}
					},
					4239: (a, c, i) => {
						var d = i(2705),
							l = i(9607),
							m = i(2333),
							f = d ? d.toStringTag : void 0;
						a.exports = function(v) {
							return v == null ? v === void 0 ? "[object Undefined]" : "[object Null]" : f && f in Object(v) ? l(v) : m(v)
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
						a.exports = function m(f, v, h, g, _) {
							return f === v || (f == null || v == null || !l(f) && !l(v) ? f != f && v != v : d(f, v, h, g, m, _))
						}
					},
					2492: (a, c, i) => {
						var d = i(6384),
							l = i(7114),
							m = i(8351),
							f = i(6096),
							v = i(4160),
							h = i(1469),
							g = i(4144),
							_ = i(6719),
							y = "[object Arguments]",
							b = "[object Array]",
							C = "[object Object]",
							x = Object.prototype.hasOwnProperty;
						a.exports = function(D, j, N, F, K, R) {
							var q = h(D),
								Z = h(j),
								X = q ? b : v(D),
								G = Z ? b : v(j),
								se = (X = X == y ? C : X) == C,
								ue = (G = G == y ? C : G) == C,
								L = X == G;
							if (L && g(D)) {
								if (!g(j)) return !1;
								q = !0, se = !1
							}
							if (L && !se) return R || (R = new d), q || _(D) ? l(D, j, N, F, K, R) : m(D, j, X, N, F, K, R);
							if (!(1 & N)) {
								var Re = se && x.call(D, "__wrapped__"),
									ye = ue && x.call(j, "__wrapped__");
								if (Re || ye) {
									var Mn = Re ? D.value() : D,
										kt = ye ? j.value() : j;
									return R || (R = new d), K(Mn, kt, N, F, R)
								}
							}
							return !!L && (R || (R = new d), f(D, j, N, F, K, R))
						}
					},
					8458: (a, c, i) => {
						var d = i(3560),
							l = i(5346),
							m = i(3218),
							f = i(346),
							v = /^\[object .+?Constructor\]$/,
							h = Function.prototype,
							g = Object.prototype,
							_ = h.toString,
							y = g.hasOwnProperty,
							b = RegExp("^" + _.call(y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
						a.exports = function(C) {
							return !(!m(C) || l(C)) && (d(C) ? b : v).test(f(C))
						}
					},
					8749: (a, c, i) => {
						var d = i(4239),
							l = i(1780),
							m = i(7005),
							f = {};
						f["[object Float32Array]"] = f["[object Float64Array]"] = f["[object Int8Array]"] = f["[object Int16Array]"] = f["[object Int32Array]"] = f["[object Uint8Array]"] = f["[object Uint8ClampedArray]"] = f["[object Uint16Array]"] = f["[object Uint32Array]"] = !0, f["[object Arguments]"] = f["[object Array]"] = f["[object ArrayBuffer]"] = f["[object Boolean]"] = f["[object DataView]"] = f["[object Date]"] = f["[object Error]"] = f["[object Function]"] = f["[object Map]"] = f["[object Number]"] = f["[object Object]"] = f["[object RegExp]"] = f["[object Set]"] = f["[object String]"] = f["[object WeakMap]"] = !1, a.exports = function(v) {
							return m(v) && l(v.length) && !!f[d(v)]
						}
					},
					280: (a, c, i) => {
						var d = i(5726),
							l = i(6916),
							m = Object.prototype.hasOwnProperty;
						a.exports = function(f) {
							if (!d(f)) return l(f);
							var v = [];
							for (var h in Object(f)) m.call(f, h) && h != "constructor" && v.push(h);
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
						a.exports = function(f, v, h, g, _, y) {
							var b = 1 & h,
								C = f.length,
								x = v.length;
							if (C != x && !(b && x > C)) return !1;
							var D = y.get(f),
								j = y.get(v);
							if (D && j) return D == v && j == f;
							var N = -1,
								F = !0,
								K = 2 & h ? new d : void 0;
							for (y.set(f, v), y.set(v, f); ++N < C;) {
								var R = f[N],
									q = v[N];
								if (g) var Z = b ? g(q, R, N, v, f, y) : g(R, q, N, f, v, y);
								if (Z !== void 0) {
									if (Z) continue;
									F = !1;
									break
								}
								if (K) {
									if (!l(v, (function(X, G) {
											if (!m(K, G) && (R === X || _(R, X, h, g, y))) return K.push(G)
										}))) {
										F = !1;
										break
									}
								} else if (R !== q && !_(R, q, h, g, y)) {
									F = !1;
									break
								}
							}
							return y.delete(f), y.delete(v), F
						}
					},
					8351: (a, c, i) => {
						var d = i(2705),
							l = i(1149),
							m = i(7813),
							f = i(7114),
							v = i(8776),
							h = i(1814),
							g = d ? d.prototype : void 0,
							_ = g ? g.valueOf : void 0;
						a.exports = function(y, b, C, x, D, j, N) {
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
									var F = v;
								case "[object Set]":
									var K = 1 & x;
									if (F || (F = h), y.size != b.size && !K) return !1;
									var R = N.get(y);
									if (R) return R == b;
									x |= 2, N.set(y, b);
									var q = f(F(y), F(b), x, D, j, N);
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
						a.exports = function(m, f, v, h, g, _) {
							var y = 1 & v,
								b = d(m),
								C = b.length;
							if (C != d(f).length && !y) return !1;
							for (var x = C; x--;) {
								var D = b[x];
								if (!(y ? D in f : l.call(f, D))) return !1
							}
							var j = _.get(m),
								N = _.get(f);
							if (j && N) return j == f && N == m;
							var F = !0;
							_.set(m, f), _.set(f, m);
							for (var K = y; ++x < C;) {
								var R = m[D = b[x]],
									q = f[D];
								if (h) var Z = y ? h(q, R, D, f, m, _) : h(R, q, D, m, f, _);
								if (!(Z === void 0 ? R === q || g(R, q, v, h, _) : Z)) {
									F = !1;
									break
								}
								K || (K = D == "constructor")
							}
							if (F && !K) {
								var X = m.constructor,
									G = f.constructor;
								X == G || !("constructor" in m) || !("constructor" in f) || typeof X == "function" && X instanceof X && typeof G == "function" && G instanceof G || (F = !1)
							}
							return _.delete(m), _.delete(f), F
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
						a.exports = function(f) {
							return d(f, m, l)
						}
					},
					5050: (a, c, i) => {
						var d = i(7019);
						a.exports = function(l, m) {
							var f = l.__data__;
							return d(m) ? f[typeof m == "string" ? "string" : "hash"] : f.map
						}
					},
					852: (a, c, i) => {
						var d = i(8458),
							l = i(7801);
						a.exports = function(m, f) {
							var v = l(m, f);
							return d(v) ? v : void 0
						}
					},
					9607: (a, c, i) => {
						var d = i(2705),
							l = Object.prototype,
							m = l.hasOwnProperty,
							f = l.toString,
							v = d ? d.toStringTag : void 0;
						a.exports = function(h) {
							var g = m.call(h, v),
								_ = h[v];
							try {
								h[v] = void 0;
								var y = !0
							} catch {}
							var b = f.call(h);
							return y && (g ? h[v] = _ : delete h[v]), b
						}
					},
					9551: (a, c, i) => {
						var d = i(4963),
							l = i(479),
							m = Object.prototype.propertyIsEnumerable,
							f = Object.getOwnPropertySymbols,
							v = f ? function(h) {
								return h == null ? [] : (h = Object(h), d(f(h), (function(g) {
									return m.call(h, g)
								})))
							} : l;
						a.exports = v
					},
					4160: (a, c, i) => {
						var d = i(8552),
							l = i(7071),
							m = i(3818),
							f = i(8525),
							v = i(577),
							h = i(4239),
							g = i(346),
							_ = "[object Map]",
							y = "[object Promise]",
							b = "[object Set]",
							C = "[object WeakMap]",
							x = "[object DataView]",
							D = g(d),
							j = g(l),
							N = g(m),
							F = g(f),
							K = g(v),
							R = h;
						(d && R(new d(new ArrayBuffer(1))) != x || l && R(new l) != _ || m && R(m.resolve()) != y || f && R(new f) != b || v && R(new v) != C) && (R = function(q) {
							var Z = h(q),
								X = Z == "[object Object]" ? q.constructor : void 0,
								G = X ? g(X) : "";
							if (G) switch (G) {
								case D:
									return x;
								case j:
									return _;
								case N:
									return y;
								case F:
									return b;
								case K:
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
							var f = this.__data__;
							if (d) {
								var v = f[m];
								return v === "__lodash_hash_undefined__" ? void 0 : v
							}
							return l.call(f, m) ? f[m] : void 0
						}
					},
					1327: (a, c, i) => {
						var d = i(4536),
							l = Object.prototype.hasOwnProperty;
						a.exports = function(m) {
							var f = this.__data__;
							return d ? f[m] !== void 0 : l.call(f, m)
						}
					},
					1866: (a, c, i) => {
						var d = i(4536);
						a.exports = function(l, m) {
							var f = this.__data__;
							return this.size += this.has(l) ? 0 : 1, f[l] = d && m === void 0 ? "__lodash_hash_undefined__" : m, this
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
						a.exports = function(f) {
							return !!m && m in f
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
							var f = this.__data__,
								v = d(f, m);
							return !(v < 0 || (v == f.length - 1 ? f.pop() : l.call(f, v, 1), --this.size, 0))
						}
					},
					2117: (a, c, i) => {
						var d = i(8470);
						a.exports = function(l) {
							var m = this.__data__,
								f = d(m, l);
							return f < 0 ? void 0 : m[f][1]
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
							var f = this.__data__,
								v = d(f, l);
							return v < 0 ? (++this.size, f.push([l, m])) : f[v][1] = m, this
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
							var f = d(this, l),
								v = f.size;
							return f.set(l, m), this.size += f.size == v ? 0 : 1, this
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
							f = m && m.exports === l && d.process,
							v = (function() {
								try {
									return m && m.require && m.require("util").types || f && f.binding && f.binding("util")
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
						a.exports = function(f, v) {
							var h = this.__data__;
							if (h instanceof d) {
								var g = h.__data__;
								if (!l || g.length < 199) return g.push([f, v]), this.size = ++h.size, this;
								h = this.__data__ = new m(g)
							}
							return h.set(f, v), this.size = h.size, this
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
							f = m.hasOwnProperty,
							v = m.propertyIsEnumerable,
							h = d((function() {
								return arguments
							})()) ? d : function(g) {
								return l(g) && f.call(g, "callee") && !v.call(g, "callee")
							};
						a.exports = h
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
							f = m && a && !a.nodeType && a,
							v = f && f.exports === m ? d.Buffer : void 0,
							h = (v ? v.isBuffer : void 0) || l;
						a.exports = h
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
							var f = d(m);
							return f == "[object Function]" || f == "[object GeneratorFunction]" || f == "[object AsyncFunction]" || f == "[object Proxy]"
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
							f = m && m.isTypedArray,
							v = f ? l(f) : d;
						a.exports = v
					},
					3674: (a, c, i) => {
						var d = i(4636),
							l = i(280),
							m = i(8612);
						a.exports = function(f) {
							return m(f) ? d(f) : l(f)
						}
					},
					8306: (a, c, i) => {
						var d = i(3369);

						function l(m, f) {
							if (typeof m != "function" || f != null && typeof f != "function") throw new TypeError("Expected a function");
							var v = function() {
								var h = arguments,
									g = f ? f.apply(this, h) : h[0],
									_ = v.cache;
								if (_.has(g)) return _.get(g);
								var y = m.apply(this, h);
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
							function f(g, _, y, b, C, x) {
								if (x !== d) {
									var D = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
									throw D.name = "Invariant Violation", D
								}
							}

							function v() {
								return f
							}
							f.isRequired = f;
							var h = {
								array: f,
								bigint: f,
								bool: f,
								func: f,
								number: f,
								object: f,
								string: f,
								symbol: f,
								any: f,
								arrayOf: v,
								element: f,
								elementType: f,
								instanceOf: v,
								node: f,
								objectOf: v,
								oneOf: v,
								oneOfType: v,
								shape: v,
								exact: v,
								checkPropTypes: m,
								resetWarningCache: l
							};
							return h.PropTypes = h, h
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
			var u = {};
			return (() => {
				s.r(u), s.d(u, {
					default: () => rl,
					expandNodesToLevel: () => ts
				});
				var a = s(4184),
					c = s.n(a),
					i = s(8446),
					d = s.n(i),
					l = s(8306),
					m = s.n(l);
				let f = (P = 21) => crypto.getRandomValues(new Uint8Array(P)).reduce(((w, O) => w + ((O &= 63) < 36 ? O.toString(36) : O < 62 ? (O - 26).toString(36).toUpperCase() : O > 62 ? "-" : "_")), "");
				var v = s(5697),
					h = s.n(v),
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

				function D(P, w) {
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

				function F(P) {
					return F = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
						return w.__proto__ || Object.getPrototypeOf(w)
					}, F(P)
				}

				function K(P, w, O) {
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
						var A, k = F(S);
						if (H) {
							var E = F(this).constructor;
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
								T = (function(B, W) {
									if (B == null) return {};
									var fe, me, be = (function(Ye, Un) {
										if (Ye == null) return {};
										var st, it, qt = {},
											Ct = Object.keys(Ye);
										for (it = 0; it < Ct.length; it++) st = Ct[it], Un.indexOf(st) >= 0 || (qt[st] = Ye[st]);
										return qt
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
							}, T), k)
						}
					}]) && D(w.prototype, O), Object.defineProperty(w, "prototype", {
						writable: !1
					}), V
				})(_().PureComponent);
				K(R, "propTypes", {
					children: h().node.isRequired,
					title: h().string
				}), K(R, "defaultProps", {
					title: null
				});
				const q = R,
					Z = {
						ALL: "all",
						PARENT: "parent",
						LEAF: "leaf"
					};

				function X(P) {
					this.message = P, this.stack = Error().stack
				}
				X.prototype = Object.create(Error.prototype), X.prototype.name = "CheckboxTreeError";
				const G = X;

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
										k % 2 ? se(Object(E), !0).forEach((function(T) {
											ue(A, T, E[T])
										})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(E)) : se(Object(E)).forEach((function(T) {
											Object.defineProperty(A, T, Object.getOwnPropertyDescriptor(E, T))
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
								S.forEach((function(T, B) {
									var W = H.nodeHasChildren(T);
									if (H.flatNodes[T.value] !== void 0) throw new G("Duplicate value '".concat(T.value, "' detected. All node values must be unique."));
									H.flatNodes[T.value] = {
										label: T.label,
										value: T.value,
										children: T.children,
										parent: $,
										isChild: $.value !== void 0,
										isParent: W,
										isLeaf: !W,
										showCheckbox: T.showCheckbox === void 0 || T.showCheckbox,
										disabled: H.getDisabledState(T, $, k, E),
										treeDepth: V,
										index: B
									}, H.flattenNodes(T.children, T, V + 1)
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
								T = [ye.PARENT, ye.ALL].indexOf($) > -1,
								B = [ye.LEAF, ye.ALL].indexOf($) > -1;
							if (E.isLeaf || V) {
								if (S.disabled) return this;
								this.toggleNode(S.value, "checked", H)
							} else(T || E.children.length === 0) && this.toggleNode(S.value, "checked", H), B && E.children.forEach((function(W) {
								A.toggleChecked(W, H, $, V, !1)
							}));
							return k && !V && E.isChild && T && this.toggleParentStatus(E.parent, $), this
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

				function Xc(P, w) {
					if (!(P instanceof w)) throw new TypeError("Cannot call a class as a function")
				}

				function Gc(P, w) {
					for (var O = 0; O < w.length; O++) {
						var S = w[O];
						S.enumerable = S.enumerable || !1, S.configurable = !0, "value" in S && (S.writable = !0), Object.defineProperty(P, S.key, S)
					}
				}

				function Tn(P, w) {
					return Tn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
						return O.__proto__ = S, O
					}, Tn(P, w)
				}

				function Yc(P, w) {
					if (w && (kt(w) === "object" || typeof w == "function")) return w;
					if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
					return (function(O) {
						if (O === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
						return O
					})(P)
				}

				function $t(P) {
					return $t = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
						return w.__proto__ || Object.getPrototypeOf(w)
					}, $t(P)
				}

				function Dn(P, w, O) {
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
						}), k && Tn(A, k)
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
						var A, k = $t(S);
						if (H) {
							var E = $t(this).constructor;
							A = Reflect.construct(k, arguments, E)
						} else A = k.apply(this, arguments);
						return Yc(this, A)
					});

					function V() {
						return Xc(this, V), $.apply(this, arguments)
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
									for (var T = 1; T < arguments.length; T++) {
										var B = arguments[T] != null ? arguments[T] : {};
										T % 2 ? Vr(Object(B), !0).forEach((function(W) {
											Dn(E, W, B[W])
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
					}], O && Gc(w.prototype, O), Object.defineProperty(w, "prototype", {
						writable: !1
					}), V
				})(_().PureComponent);
				Dn(jn, "propTypes", {
					indeterminate: h().bool
				}), Dn(jn, "defaultProps", {
					indeterminate: !1
				});
				const Qc = jn,
					Wr = h().shape({
						check: h().node,
						uncheck: h().node,
						halfCheck: h().node,
						expandClose: h().node,
						expandOpen: h().node,
						expandAll: h().node,
						collapseAll: h().node,
						parentClose: h().node,
						parentOpen: h().node,
						leaf: h().node
					}),
					qr = h().shape({
						collapseAll: h().string.isRequired,
						expandAll: h().string.isRequired,
						toggle: h().string.isRequired
					});

				function In(P) {
					return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
						return typeof w
					} : function(w) {
						return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
					}, In(P)
				}

				function Zc(P, w) {
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

				function Jc(P, w) {
					if (w && (In(w) === "object" || typeof w == "function")) return w;
					if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
					return ot(P)
				}

				function ot(P) {
					if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return P
				}

				function Vt(P) {
					return Vt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
						return w.__proto__ || Object.getPrototypeOf(w)
					}, Vt(P)
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
						var A, k = Vt(S);
						if (H) {
							var E = Vt(this).constructor;
							A = Reflect.construct(k, arguments, E)
						} else A = k.apply(this, arguments);
						return Jc(this, A)
					});

					function V(A) {
						var k;
						return (function(E, T) {
							if (!(E instanceof T)) throw new TypeError("Cannot call a class as a function")
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
								T = A.value,
								B = A.onClick;
							E && k && this.onExpand(), B({
								value: T,
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
								T = E.checked,
								B = E.optimisticToggle;
							return !(T !== 0 || !k) || T === 1 && !k || T === 2 && B
						}
					}, {
						key: "renderCollapseButton",
						value: function() {
							var A = this.props,
								k = A.expandDisabled,
								E = A.isLeaf,
								T = A.lang;
							return E ? _().createElement("span", {
								className: "rct-collapse"
							}, _().createElement("span", {
								className: "rct-icon"
							})) : _().createElement(q, {
								className: "rct-collapse rct-collapse-btn",
								disabled: k,
								title: T.toggle,
								onClick: this.onExpand
							}, this.renderCollapseIcon())
						}
					}, {
						key: "renderCollapseIcon",
						value: function() {
							var A = this.props,
								k = A.expanded,
								E = A.icons,
								T = E.expandClose,
								B = E.expandOpen;
							return k ? B : T
						}
					}, {
						key: "renderCheckboxIcon",
						value: function() {
							var A = this.props,
								k = A.checked,
								E = A.icons,
								T = E.uncheck,
								B = E.check,
								W = E.halfCheck;
							return k === 0 ? T : k === 1 ? B : W
						}
					}, {
						key: "renderNodeIcon",
						value: function() {
							var A = this.props,
								k = A.expanded,
								E = A.icon,
								T = A.icons,
								B = T.leaf,
								W = T.parentClose,
								fe = T.parentOpen,
								me = A.isLeaf;
							return E !== null ? E : me ? B : k ? fe : W
						}
					}, {
						key: "renderBareLabel",
						value: function(A) {
							var k = this.props,
								E = k.onClick,
								T = k.title,
								B = E !== null;
							return _().createElement("span", {
								className: "rct-bare-label",
								title: T
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
								T = k.disabled,
								B = k.title,
								W = k.treeId,
								fe = k.value,
								me = k.onClick !== null,
								be = "".concat(W, "-").concat(String(fe).split(" ").join("_")),
								Le = [_().createElement("label", {
									key: 0,
									htmlFor: be,
									title: B
								}, _().createElement(Qc, {
									checked: E === 1,
									disabled: T,
									id: be,
									indeterminate: E === 2,
									onClick: this.onCheck,
									onChange: function() {}
								}), _().createElement("span", {
									"aria-checked": E === 1,
									"aria-disabled": T,
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
								T = [A.showNodeIcon ? _().createElement("span", {
									key: 0,
									className: "rct-node-icon"
								}, this.renderNodeIcon()) : null, _().createElement("span", {
									key: 1,
									className: "rct-title"
								}, k)];
							return E ? this.renderCheckboxLabel(T) : this.renderBareLabel(T)
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
								T = A.expanded,
								B = A.isLeaf,
								W = c()({
									"rct-node": !0,
									"rct-node-leaf": B,
									"rct-node-parent": !B,
									"rct-node-expanded": !B && T,
									"rct-node-collapsed": !B && !T,
									"rct-disabled": E
								}, k);
							return _().createElement("li", {
								className: W
							}, _().createElement("span", {
								className: "rct-text"
							}, this.renderCollapseButton(), this.renderLabel()), this.renderChildren())
						}
					}]) && Zc(w.prototype, O), Object.defineProperty(w, "prototype", {
						writable: !1
					}), V
				})(_().PureComponent);
				Xr(Ln, "propTypes", {
					checked: h().number.isRequired,
					disabled: h().bool.isRequired,
					expandDisabled: h().bool.isRequired,
					expanded: h().bool.isRequired,
					icons: Wr.isRequired,
					isLeaf: h().bool.isRequired,
					isParent: h().bool.isRequired,
					label: h().node.isRequired,
					lang: qr.isRequired,
					optimisticToggle: h().bool.isRequired,
					showNodeIcon: h().bool.isRequired,
					treeId: h().string.isRequired,
					value: h().oneOfType([h().string, h().number]).isRequired,
					onCheck: h().func.isRequired,
					onExpand: h().func.isRequired,
					children: h().node,
					className: h().string,
					expandOnClick: h().bool,
					icon: h().node,
					showCheckbox: h().bool,
					title: h().string,
					onClick: h().func
				}), Xr(Ln, "defaultProps", {
					children: null,
					className: null,
					expandOnClick: !1,
					icon: null,
					showCheckbox: !0,
					title: null,
					onClick: function() {}
				});
				const el = Ln,
					Gr = h().oneOfType([h().arrayOf(h().string), h().arrayOf(h().number)]);

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
							tl(P, S, O[S])
						})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(P, Object.getOwnPropertyDescriptors(O)) : Yr(Object(O)).forEach((function(S) {
							Object.defineProperty(P, S, Object.getOwnPropertyDescriptor(O, S))
						}))
					}
					return P
				}

				function tl(P, w, O) {
					return w in P ? Object.defineProperty(P, w, {
						value: O,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : P[w] = O, P
				}
				var Bn = {
					label: h().node.isRequired,
					value: h().oneOfType([h().string, h().number]).isRequired,
					disabled: h().bool,
					icon: h().node,
					showCheckbox: h().bool,
					title: h().string
				};
				const nl = h().oneOfType([h().shape(Bn), h().shape(Qr(Qr({}, Bn), {}, {
					children: h().arrayOf(Bn).isRequired
				}))]);

				function zn(P) {
					return zn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(w) {
						return typeof w
					} : function(w) {
						return w && typeof Symbol == "function" && w.constructor === Symbol && w !== Symbol.prototype ? "symbol" : typeof w
					}, zn(P)
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

				function Nn(P, w) {
					return Nn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(O, S) {
						return O.__proto__ = S, O
					}, Nn(P, w)
				}

				function ol(P, w) {
					if (w && (zn(w) === "object" || typeof w == "function")) return w;
					if (w !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
					return Ge(P)
				}

				function Ge(P) {
					if (P === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return P
				}

				function Wt(P) {
					return Wt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(w) {
						return w.__proto__ || Object.getPrototypeOf(w)
					}, Wt(P)
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
						}), E && Nn(k, E)
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
						var k, E = Wt(H);
						if ($) {
							var T = Wt(this).constructor;
							k = Reflect.construct(E, arguments, T)
						} else k = E.apply(this, arguments);
						return ol(this, k)
					});

					function A(k) {
						var E;
						(function(B, W) {
							if (!(B instanceof W)) throw new TypeError("Cannot call a class as a function")
						})(this, A), E = V.call(this, k);
						var T = new Mn(k);
						return T.flattenNodes(k.nodes), T.deserializeLists({
							checked: k.checked,
							expanded: k.expanded
						}), E.state = {
							id: k.id || "rct-".concat(f()),
							model: T,
							prevProps: k
						}, E.onCheck = E.onCheck.bind(Ge(E)), E.onExpand = E.onExpand.bind(Ge(E)), E.onNodeClick = E.onNodeClick.bind(Ge(E)), E.onExpandAll = E.onExpandAll.bind(Ge(E)), E.onCollapseAll = E.onCollapseAll.bind(Ge(E)), E.combineMemorized = m()((function(B, W) {
							return ke(ke({}, B), W)
						})).bind(Ge(E)), E
					}
					return w = A, O = [{
						key: "onCheck",
						value: function(k) {
							var E = this.props,
								T = E.checkModel,
								B = E.noCascade,
								W = E.onCheck,
								fe = this.state.model.clone(),
								me = fe.getNode(k.value);
							fe.toggleChecked(k, k.checked, T, B), W(fe.serializeList("checked"), ke(ke({}, me), k))
						}
					}, {
						key: "onExpand",
						value: function(k) {
							var E = this.props.onExpand,
								T = this.state.model.clone(),
								B = T.getNode(k.value);
							T.toggleNode(k.value, "expanded", k.expanded), E(T.serializeList("expanded"), ke(ke({}, B), k))
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
							var T = this.state.model.getNode(k.value);
							return T.isLeaf || E || k.children.length === 0 ? T.checked ? 1 : 0 : this.isEveryChildChecked(k) ? 1 : this.isSomeChildChecked(k) ? 2 : 0
						}
					}, {
						key: "isEveryChildChecked",
						value: function(k) {
							var E = this;
							return k.children.every((function(T) {
								return E.state.model.getNode(T.value).checkState === 1
							}))
						}
					}, {
						key: "isSomeChildChecked",
						value: function(k) {
							var E = this;
							return k.children.some((function(T) {
								return E.state.model.getNode(T.value).checkState > 0
							}))
						}
					}, {
						key: "renderTreeNodes",
						value: function(k) {
							var E = this,
								T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
								B = this.props,
								W = B.expandDisabled,
								fe = B.expandOnClick,
								me = B.icons,
								be = B.lang,
								Le = B.noCascade,
								Ye = B.onClick,
								Un = B.onlyLeafCheckboxes,
								st = B.optimisticToggle,
								it = B.showNodeTitle,
								qt = B.showNodeIcon,
								Ct = this.state,
								sl = Ct.id,
								ns = Ct.model,
								il = A.defaultProps.icons,
								al = k.map((function(Ce) {
									var cl = Ce.value,
										Be = ns.getNode(Ce.value),
										ll = Be.isParent ? E.renderTreeNodes(Ce.children, Ce) : null;
									Be.checkState = E.determineShallowCheckState(Ce, Le);
									var ul = Un ? Be.isLeaf : Be.showCheckbox;
									return !T.value || ns.getNode(T.value).expanded ? _().createElement(el, {
										key: cl,
										checked: Be.checkState,
										className: Ce.className,
										disabled: Be.disabled,
										expandDisabled: W,
										expandOnClick: fe,
										expanded: Be.expanded,
										icon: Ce.icon,
										icons: E.combineMemorized(il, me),
										label: Ce.label,
										lang: be,
										optimisticToggle: st,
										isLeaf: Be.isLeaf,
										isParent: Be.isParent,
										showCheckbox: ul,
										showNodeIcon: qt,
										title: it ? Ce.title || Ce.label : Ce.title,
										treeId: sl,
										value: Ce.value,
										onCheck: E.onCheck,
										onClick: Ye && E.onNodeClick,
										onExpand: E.onExpand
									}, ll) : null
								}));
							return _().createElement("ol", null, al)
						}
					}, {
						key: "renderExpandAll",
						value: function() {
							var k = this.props,
								E = k.icons,
								T = E.expandAll,
								B = E.collapseAll,
								W = k.lang;
							return k.showExpandAll ? _().createElement("div", {
								className: "rct-options"
							}, _().createElement(q, {
								className: "rct-option rct-option-expand-all",
								title: W.expandAll,
								onClick: this.onExpandAll
							}, T), _().createElement(q, {
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
								T = k.nameAsArray;
							return E === void 0 ? null : T ? this.renderArrayHiddenInput() : this.renderJoinedHiddenInput()
						}
					}, {
						key: "renderArrayHiddenInput",
						value: function() {
							var k = this.props,
								E = k.checked,
								T = k.name;
							return E.map((function(B) {
								var W = "".concat(T, "[]");
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
								T = k.name,
								B = E.join(",");
							return _().createElement("input", {
								name: T,
								type: "hidden",
								value: B
							})
						}
					}, {
						key: "render",
						value: function() {
							var k, E = this.props,
								T = E.direction,
								B = E.disabled,
								W = E.iconsClass,
								fe = E.nodes,
								me = E.nativeCheckboxes,
								be = this.state.id,
								Le = this.renderTreeNodes(fe),
								Ye = c()((rt(k = {
									"react-checkbox-tree": !0,
									"rct-disabled": B
								}, "rct-icons-".concat(W), !0), rt(k, "rct-native-display", me), rt(k, "rct-direction-rtl", T === "rtl"), k));
							return _().createElement("div", {
								className: Ye,
								id: be
							}, this.renderExpandAll(), this.renderHiddenInput(), Le)
						}
					}], S = [{
						key: "getDerivedStateFromProps",
						value: function(k, E) {
							var T = E.model,
								B = E.prevProps,
								W = k.disabled,
								fe = k.id,
								me = k.nodes,
								be = ke(ke({}, E), {}, {
									prevProps: k
								});
							return T.setProps(k), d()(B.nodes, me) && B.disabled === W || (T.reset(), T.flattenNodes(me)), fe !== null && (be = ke(ke({}, be), {}, {
								id: fe
							})), T.deserializeLists({
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
					nodes: h().arrayOf(nl).isRequired,
					checkModel: h().oneOf([Z.LEAF, Z.ALL]),
					checked: Gr,
					direction: h().string,
					disabled: h().bool,
					expandDisabled: h().bool,
					expandOnClick: h().bool,
					expanded: Gr,
					icons: Wr,
					iconsClass: h().string,
					id: h().string,
					lang: qr,
					name: h().string,
					nameAsArray: h().bool,
					nativeCheckboxes: h().bool,
					noCascade: h().bool,
					onlyLeafCheckboxes: h().bool,
					optimisticToggle: h().bool,
					showExpandAll: h().bool,
					showNodeIcon: h().bool,
					showNodeTitle: h().bool,
					onCheck: h().func,
					onClick: h().func,
					onExpand: h().func
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
				const rl = Fn
			})(), u
		})()))
	})(io)), io.exports
}
var Hd = Ud();
const $d = gl(Hd);

function Vd(e, t, n = !0) {
	const o = document.createElement("a");
	o.href = t, o.target = n ? "_blank" : "_self", o.download = e, o.style.display = "none", document.body.appendChild(o), o.click(), o.remove()
}

function Aa(e, t, n = "application/zip") {
	const o = new Blob([t], {
		type: n
	});
	Vd(e, URL.createObjectURL(o))
}

function Wd() {
	const e = Q(),
		t = M(C => C.dos.ci),
		n = ge(),
		[o, r] = te(0),
		[s, u] = te(null),
		[a, c] = te([]),
		[i, d] = te([]),
		[l, m] = te(null),
		[f, v] = te(!1);

	function h(C) {
		u(C), r(Math.round(ja(C) / 1024 / 1024 * 100) / 100)
	}
	oe(() => {
		if (n.ci === null || !t) return;
		let C = !1;
		return n.ci.fsTree().then(x => {
			C || h(ei(x))
		}).catch(x => {
			console.error(x), C || h(null)
		}), () => {
			C = !0
		}
	}, [t]);

	function g(C, x) {
		c(C)
	}

	function _(C, x) {
		const D = C.indexOf(x.value);
		x.checked && D === -1 ? C.push(x.value) : !x.checked && D !== -1 && C.splice(D, 1), d(C)
	}
	async function y() {
		if (h(null), n.ci === null || !t) return;
		const C = await n.ci.fsTree();
		h(ei(C))
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
	return p("div", {
		class: "editor-fs-frame frame-root items-start px-4",
		children: [(f || l !== null) && p("div", {
			class: "card card-bordered bg-base-100 shadow-xl w-full",
			children: p("div", {
				class: "card-body",
				children: [p("div", {
					class: "card-title",
					children: e(f ? "please_wait" : "uploading_file")
				}), p("span", {
					class: "break-words",
					children: f ? e("making_bundle") : l
				})]
			})
		}), !f && l === null && s && p("div", {
			className: "fs-tree-view",
			children: [p(qd, {
				onRefresh: y,
				onUploadingFile: m,
				onMakingBundle: v,
				onRemoveFile: b,
				canDelete: i.length > 0
			}), p("div", {
				class: "bg-base-200 px-2 py-1 text-right",
				children: [e("size"), ": ", o, " Mb"]
			}), p("div", {
				class: "fs-tree",
				children: p($d, {
					icons: {
						expandOpen: p(Xd, {}),
						expandClose: p(Gd, {})
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
	for (const n of e.nodes?.sort(Da) || []) t.push(Ta(n, "."));
	return t
}

function Ta(e, t) {
	const n = t + "/" + e.name,
		o = {
			label: e.name,
			value: n,
			fsNode: e
		};
	if (e.nodes !== null) {
		const r = e.nodes.sort(Da).map(s => Ta(s, n));
		o.children = r
	}
	return o
}

function qd(e) {
	const t = Q(),
		n = Ae(null),
		o = Ae(null),
		r = Pe(),
		s = ge(),
		{
			onRefresh: u,
			onUploadingFile: a,
			onMakingBundle: c,
			onRemoveFile: i,
			canDelete: d
		} = e;
	oe(() => {
		n.current !== null && (n.current.setAttribute("directory", ""), n.current.setAttribute("webkitdirectory", ""))
	}, [n]);

	function l(h) {
		const g = (h ? o : n).current;
		g !== null && g.click()
	}
	async function m(h) {
		const g = s.ci,
			_ = h.target.files;
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
			await u()
		}
	}
	async function f() {
		const h = s.ci;
		if (!(h === null || !window.confirm(t("fs_restart")))) {
			c(!0);
			try {
				const g = await h.persist(!1);
				g && Ld(g, !0, r)
			} finally {
				c(!1)
			}
		}
	}
	async function v() {
		const h = s.ci;
		if (h !== null) {
			c(!0);
			try {
				const g = await h.persist(!1);
				g && Aa("bundle.jsdos", g)
			} finally {
				c(!1)
			}
		}
	}
	return p("div", {
		class: "h-6 flex flex-row",
		children: [p("input", {
			class: "hidden",
			type: "file",
			multiple: !0,
			ref: n,
			onChange: m
		}), p("input", {
			class: "hidden",
			type: "file",
			multiple: !0,
			ref: o,
			onChange: m
		}), p("button", {
			class: "refresh btn-xs rounded-none",
			onClick: u,
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
				})
			})
		}), p("button", {
			class: "add-file btn-xs rounded-none",
			onClick: () => l(!0),
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
				})
			})
		}), p("button", {
			class: "add-dir btn-xs rounded-none",
			onClick: () => l(!1),
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
				})
			})
		}), d && p("button", {
			class: "btn-xs rounded-none text-error",
			onClick: () => i(),
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
				})
			})
		}), p("div", {
			class: "flex-grow"
		}), p("button", {
			class: "download btn-xs rounded-none",
			onClick: v,
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
				})
			})
		}), p("button", {
			class: "restart btn-xs rounded-none",
			onClick: f,
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z"
				})
			})
		})]
	})
}

function Da(e, t) {
	return e.nodes !== null && t.nodes !== null ? t.name.localeCompare(e.name) : e.nodes === null ? 1 : -1
}

function Xd() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		class: "w-4 h-4 mr-2",
		children: p("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
		})
	})
}

function Gd() {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		fill: "none",
		viewBox: "0 0 24 24",
		"stroke-width": "1.5",
		stroke: "currentColor",
		class: "w-4 h-4 mr-2",
		children: p("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M8.25 4.5l7.5 7.5-7.5 7.5"
		})
	})
}

function ja(e) {
	if (!e) return 0;
	let t = 0;
	for (const n of e) n.fsNode.size !== null ? t += n.fsNode.size : t += ja(n.children);
	return t
}

function Ie(e) {
	const t = Ae(null);
	oe(() => {
		t === null || t.current === null || (t.current.indeterminate = e.intermediate)
	}, [t, e.intermediate]);

	function n() {
		e.onChange && e.onChange(e.checked !== !0)
	}
	return p("div", {
		className: e.class + " form-control option",
		onClick: n,
		children: p("label", {
			className: "label cursor-pointer",
			children: [p("span", {
				className: "label-text mr-6",
				children: e.label
			}), p("input", {
				ref: t,
				checked: e.checked === !0,
				type: "checkbox",
				className: "toggle " + (e.checked ? " toggle-primary " : "") + e.toggleClass,
				disabled: e.disabled === !0
			})]
		})
	})
}

function Yd() {
	const e = Q(),
		t = Y(),
		n = M(o => o.ui.editor);
	return p(Ie, {
		class: "mt-4",
		label: e("editor"),
		checked: n,
		onChange: o => t(z.actions.setEditor(o))
	})
}

function Ia() {
	const e = Q(),
		t = Y(),
		n = M(o => o.dos.mouseCapture);
	return p(Ie, {
		class: "mt-4",
		label: e("mouse_lock"),
		checked: n,
		onChange: o => t(I.actions.mouseCapture(o))
	})
}

function Ra() {
	const e = Q(),
		t = Y(),
		n = M(o => !o.dos.noCursor);
	return p(Ie, {
		class: "mt-4",
		label: e("system_cursor"),
		checked: n,
		onChange: o => t(I.actions.noCursor(!o))
	})
}

function La() {
	const e = Q(),
		t = Y(),
		n = M(o => o.dos.mobileControls);
	return p(Ie, {
		class: "mt-4",
		label: e("mobile_controls"),
		checked: n,
		onChange: o => t(I.actions.mobileControls(o))
	})
}

function Ba() {
	const e = Q(),
		t = Y(),
		n = M(o => o.dos.mirroredControls);
	return p(Ie, {
		class: "mt-4",
		label: e("mirrored_controls"),
		checked: n,
		onChange: o => t(I.actions.mirroredControls(o))
	})
}

function Qd() {
	const e = Q(),
		t = Y(),
		n = M(r => r.dos.paused),
		o = M(r => r.ui.window) !== "run";
	return p(Ie, {
		class: "mt-4",
		label: e("pause"),
		checked: n,
		disabled: o,
		onChange: r => t(I.actions.paused(r))
	})
}

function Zd() {
	const e = Q(),
		t = Y(),
		n = M(u => u.dos.worker),
		o = M(u => u.dos.backendHardware),
		r = M(u => u.ui.window) === "run",
		s = ge();
	return o && s.options.backendHardware ? null : p(Ie, {
		class: "mt-4",
		label: e("worker"),
		checked: n,
		disabled: r,
		onChange: u => t(I.actions.dosWorker(u))
	})
}

function Jd() {
	const e = Q(),
		t = Y(),
		n = M(o => o.dos.offscreenCanvas);
	return p(Ie, {
		class: "mt-4",
		label: e("offscreen_canvas"),
		checked: n,
		onChange: o => t(I.actions.offscreenCanvas(o))
	})
}

function ef() {
	const e = Y(),
		t = M(n => n.dos.startIpxServer);
	return p(Ie, {
		class: "mt-4",
		label: "IPX Server",
		checked: t,
		onChange: n => e(I.actions.startIpxServer(n))
	})
}

function tf() {
	const e = Q(),
		t = Y(),
		n = M(r => r.dos.backendHardware);
	return ge().options.backendHardware ? p(Ie, {
		class: "mt-4",
		label: e("hardware"),
		checked: n,
		onChange: r => t(I.actions.dosBackendHardware(r))
	}) : null
}

function nf(e) {
	const t = Q(),
		n = e.multiline === !0;

	function o(r) {
		e.onSelect !== void 0 && e.onSelect(r.currentTarget.value)
	}
	return p("div", {
		class: e.class + " option flex " + (n ? "flex-col" : "flex-row items-center"),
		children: [p("div", {
			class: n ? "mb-2" : "mr-4",
			children: e.label
		}), p("div", {
			class: "flex-grow",
			children: p("select", {
				class: e.selectClass ? e.selectClass : n ? "w-full" : "w-28",
				onChange: o,
				disabled: e.disabled === !0,
				children: e.values.map(r => p("option", {
					selected: r === e.selected,
					value: r,
					children: t(r)
				}))
			})
		})]
	})
}

function of(e) {
	const t = M(n => n.dos.backendLocked);
	return p(wt, {
		multiline: e.multiline,
		label: "emulation_backend",
		values: [...yd],
		disabled: t,
		selector: n => n.dos.backend,
		dispatch: n => (ie.setItem("backend", n), I.actions.dosBackend(n))
	})
}

function rf(e) {
	const t = M(n => n.ui.window) === "run";
	return p(wt, {
		multiline: e.multiline,
		label: "render_backend",
		values: [...bd],
		disabled: t,
		selector: n => n.dos.renderBackend,
		dispatch: n => I.actions.renderBackend(n)
	})
}

function za(e) {
	return p(wt, {
		label: "render_aspect",
		multiline: e.multiline,
		values: [...wd],
		selector: t => t.dos.renderAspect,
		dispatch: t => I.actions.renderAspect(t)
	})
}

function sf(e) {
	return p(wt, {
		label: "Sockdrive Preload",
		multiline: e.multiline,
		values: [...xd],
		selector: t => t.dos.sockdrivePreload,
		dispatch: t => I.actions.sockdrivePreload(t)
	})
}

function af(e) {
	return p(wt, {
		label: "image_rendering",
		multiline: e.multiline,
		values: [...kd],
		selector: t => t.dos.imageRendering,
		dispatch: t => I.actions.imageRendering(t)
	})
}

function Na(e) {
	return p(wt, {
		class: e.class,
		label: "theme",
		values: [...ed],
		selector: t => t.ui.theme,
		dispatch: t => z.actions.theme(t),
		multiline: e.multiline
	})
}

function wt(e) {
	const t = Q(),
		n = M(e.selector),
		o = Y();

	function r(s) {
		o(e.dispatch(s))
	}
	return p(nf, {
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
	const t = Ae(null),
		n = Ae(null),
		o = e.vertical ?? !1,
		r = e.bgClass ?? "bg-base-200";
	oe(() => {
		if (t?.current === null) return;
		const f = t.current;
		let v = !1;

		function h(b) {
			const C = f.getBoundingClientRect(),
				x = o ? 1 - Math.min(1, Math.max(0, (b.clientY - C.top) / C.height)) : Math.min(1, Math.max(0, (b.clientX - C.left) / C.width));
			e.onChange(x)
		}

		function g(b) {
			v = !0, h(b)
		}

		function _(b) {
			v && h(b)
		}

		function y(b) {
			v = !1
		}
		return f.addEventListener("pointerdown", g), f.addEventListener("pointermove", _), f.addEventListener("pointerup", y), f.addEventListener("pointercancel", y), f.addEventListener("pointerleave", y), () => {
			f.removeEventListener("pointerdown", g), f.removeEventListener("pointermove", _), f.removeEventListener("pointerup", y), f.removeEventListener("pointercancel", y), f.removeEventListener("pointerleave", y)
		}
	}, [t, o]);
	const s = o ? "" : "rounded-full",
		u = o ? "items-start" : "items-center",
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
	return p("div", {
		class: e.class + " slider option " + i,
		children: [e.label && p("div", {
			class: "label w-full flex justify-between gap-2 " + c,
			children: [p("p", {
				children: e.label
			}), p("p", {
				children: e.value.toFixed(2)
			})]
		}), p("div", {
			class: "touch " + d + " " + i + " " + c + " " + u,
			ref: t,
			children: [p("div", {
				class: "bg " + l + " " + i + " " + r + " " + s
			}), p("div", {
				class: "bg-active " + l + " " + s,
				style: m.active
			}), p("div", {
				class: "point " + e.pointClass,
				ref: n,
				style: m.point,
				children: e.children
			})]
		})]
	})
}

function Fa(e) {
	const t = Q(),
		n = M(r => r.dos.mouseSensitivity),
		o = Y();
	return p(Sn, {
		class: e.class,
		label: t("mouse_sensitivity"),
		value: n,
		onChange: r => o(I.actions.mouseSensitivity(r))
	})
}

function Ka(e) {
	const t = Q(),
		n = M(r => r.dos.scaleControls),
		o = Y();
	return p(Sn, {
		class: e.class,
		label: t("scale_controls"),
		value: n,
		onChange: r => o(I.actions.scaleControls(r))
	})
}

function Ua(e) {
	const t = Q(),
		n = M(r => r.dos.volume),
		o = Y();
	return p(Sn, {
		class: e.class,
		label: t("volume"),
		value: n,
		onChange: r => o(I.actions.volume(r))
	})
}
const nr = 0,
	Pn = 48,
	Ha = 49,
	$a = 50,
	Va = 51,
	Wa = 52,
	qa = 53,
	Xa = 54,
	Ga = 55,
	Ya = 56,
	or = 57,
	Qa = 65,
	Za = 66,
	Ja = 67,
	ec = 68,
	tc = 69,
	nc = 70,
	oc = 71,
	rc = 72,
	sc = 73,
	ic = 74,
	ac = 75,
	cc = 76,
	lc = 77,
	uc = 78,
	dc = 79,
	fc = 80,
	pc = 81,
	hc = 82,
	mc = 83,
	vc = 84,
	gc = 85,
	_c = 86,
	yc = 87,
	bc = 88,
	wc = 89,
	xc = 90,
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
	cf = 330,
	kc = 331,
	Cc = 332,
	lf = 333,
	uf = 334,
	df = 335,
	Pr = 256,
	En = 258,
	Er = 259,
	Or = 257,
	Mr = 32,
	_t = 342,
	Sc = 346,
	Ut = 341,
	Pc = 345,
	De = 340,
	Ec = 344,
	Oc = 280,
	Mc = 281,
	Ac = 282,
	Tc = 96,
	gn = 45,
	Bt = 61,
	Dc = 92,
	_n = 91,
	yn = 93,
	bn = 59,
	Ar = 39,
	Tr = 46,
	Dr = 44,
	jr = 47,
	ff = 283,
	jc = 284,
	Ic = 260,
	Ir = 268,
	Rr = 266,
	On = 261,
	Lr = 269,
	Br = 267,
	zr = 263,
	Nr = 265,
	Fr = 264,
	Kr = 262,
	pf = 348,
	hf = {
		8: Er,
		9: En,
		13: Or,
		16: De,
		17: Ut,
		18: _t,
		19: jc,
		27: Pr,
		32: Mr,
		33: Rr,
		34: Br,
		35: Lr,
		36: Ir,
		37: zr,
		38: Nr,
		39: Kr,
		40: Fr,
		45: Ic,
		46: On,
		48: Pn,
		49: Ha,
		50: $a,
		51: Va,
		52: Wa,
		53: qa,
		54: Xa,
		55: Ga,
		56: Ya,
		57: or,
		59: bn,
		64: Bt,
		65: Qa,
		66: Za,
		67: Ja,
		68: ec,
		69: tc,
		70: nc,
		71: oc,
		72: rc,
		73: sc,
		74: ic,
		75: ac,
		76: cc,
		77: lc,
		78: uc,
		79: dc,
		80: fc,
		81: pc,
		82: hc,
		83: mc,
		84: vc,
		85: gc,
		86: _c,
		87: yc,
		88: bc,
		89: wc,
		90: xc,
		91: _n,
		93: yn,
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
		106: Cc,
		111: kc,
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
		144: Ac,
		145: Mc,
		173: gn,
		186: bn,
		187: Bt,
		188: Dr,
		189: gn,
		190: Tr,
		191: jr,
		192: Tc,
		219: _n,
		220: Dc,
		221: yn,
		222: Ar
	},
	ti = {
		KBD_NONE: nr,
		KBD_0: Pn,
		KBD_1: Ha,
		KBD_2: $a,
		KBD_3: Va,
		KBD_4: Wa,
		KBD_5: qa,
		KBD_6: Xa,
		KBD_7: Ga,
		KBD_8: Ya,
		KBD_9: or,
		KBD_a: Qa,
		KBD_b: Za,
		KBD_c: Ja,
		KBD_d: ec,
		KBD_e: tc,
		KBD_f: nc,
		KBD_g: oc,
		KBD_h: rc,
		KBD_i: sc,
		KBD_j: ic,
		KBD_k: ac,
		KBD_l: cc,
		KBD_m: lc,
		KBD_n: uc,
		KBD_o: dc,
		KBD_p: fc,
		KBD_q: pc,
		KBD_r: hc,
		KBD_s: mc,
		KBD_t: vc,
		KBD_u: gc,
		KBD_v: _c,
		KBD_w: yc,
		KBD_x: bc,
		KBD_y: wc,
		KBD_z: xc,
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
		KBD_kpperiod: cf,
		KBD_kpdivide: kc,
		KBD_kpmultiply: Cc,
		KBD_kpminus: lf,
		KBD_kpplus: uf,
		KBD_kpenter: df,
		KBD_esc: Pr,
		KBD_tab: En,
		KBD_backspace: Er,
		KBD_enter: Or,
		KBD_space: Mr,
		KBD_leftalt: _t,
		KBD_rightalt: Sc,
		KBD_leftctrl: Ut,
		KBD_rightctrl: Pc,
		KBD_leftshift: De,
		KBD_rightshift: Ec,
		KBD_capslock: Oc,
		KBD_scrolllock: Mc,
		KBD_numlock: Ac,
		KBD_grave: Tc,
		KBD_minus: gn,
		KBD_equals: Bt,
		KBD_backslash: Dc,
		KBD_leftbracket: _n,
		KBD_rightbracket: yn,
		KBD_semicolon: bn,
		KBD_quote: Ar,
		KBD_period: Tr,
		KBD_comma: Dr,
		KBD_slash: jr,
		KBD_printscreen: ff,
		KBD_pause: jc,
		KBD_insert: Ic,
		KBD_home: Ir,
		KBD_pageup: Rr,
		KBD_delete: On,
		KBD_end: Lr,
		KBD_pagedown: Br,
		KBD_left: zr,
		KBD_up: Nr,
		KBD_down: Fr,
		KBD_right: Kr,
		KBD_extra_lt_gt: pf
	},
	mf = {
		16: {
			1: De,
			2: Ec
		},
		17: {
			1: Ut,
			2: Pc
		},
		18: {
			1: _t,
			2: Sc
		}
	};

function Ao(e, t) {
	return mf[e]?.[t] ?? hf[e] ?? 0
}

function vf(e) {
	return p("div", {
		class: "settings-frame frame-root items-start pl-4",
		children: [p(Qd, {}), p(Ra, {}), p(Ia, {}), p(La, {}), p(Ba, {}), p(Fa, {
			class: "mt-4"
		}), p(Ka, {}), p(Ua, {}), p(gf, {}), p(za, {
			multiline: !0
		}), p(af, {
			multiline: !0
		}), p(Na, {
			multiline: !0
		})]
	})
}

function gf() {
	const e = Q(),
		t = ge();
	return p("div", {
		class: "flex flex-col gap-2",
		children: [p("label", {
			children: e("special_keys")
		}), p("div", {
			class: "join",
			children: [p("button", {
				class: "btn btn-sm btn-ghost join-item",
				onClick: () => {
					t.ci?.simulateKeyPress(_t, En)
				},
				children: "Alt + Tab"
			}), p("button", {
				class: "btn btn-sm btn-ghost join-item",
				onClick: () => {
					t.ci?.simulateKeyPress(Ut, _t, On)
				},
				children: "Ctrl + Alt + Del"
			})]
		})]
	})
}

function _f() {
	const e = ge(),
		t = M(d => d.dos.backend),
		n = M(d => d.dos.backendHardware) && e.options.backendHardware,
		o = M(d => d.dos.emuVersion),
		r = M(d => d.dos.ciStartedAt),
		s = M(d => d.dos.stats),
		u = Math.round(M(d => d.dos.stats.cyclesPerMs) / 1e3),
		a = M(d => d.dos.startIpxServer),
		c = Y(),
		i = Q();
	return p("div", {
		class: "stats-frame frame-root items-start px-4",
		children: [p("div", {
			class: "text-center mb-2 text-xs",
			children: ["js-dos/emu: ", "8.3.20", "/", o]
		}), p("div", {
			class: "w-full overflow-x-auto",
			children: p("table", {
				class: "table table-compact w-full",
				children: [p("thead", {
					children: p("tr", {
						children: [p("th", {
							children: "Metric"
						}), p("th", {
							children: "Value"
						})]
					})
				}), p("tbody", {
					children: [p("tr", {
						children: [p("td", {
							children: "Emulation"
						}), p("td", {
							children: t + " " + (n ? "(WS)" : "(WA)")
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Offscreen Canvas"
						}), p("td", {
							children: s.offscreenCanvas ? "Yes" : "No"
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Glide GL (3D)"
						}), p("td", {
							children: s.glfx ? "Yes" : "No"
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Uptime"
						}), p("td", {
							children: [Math.round((Date.now() - r) / 100) / 10, " s"]
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Cycles/ms"
						}), u <= 0 && p("td", {
							children: "~ K"
						}), u > 0 && u <= 1e3 && p("td", {
							children: [u, " K"]
						}), u > 1e3 && p("td", {
							children: [Math.round(u / 1e3), " KK"]
						})]
					}), p("tr", {
						children: [p("td", {
							children: "NonSkipSleep COUNT/s"
						}), p("td", {
							children: s.nonSkippableSleepPreSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Sleep COUNT/s"
						}), p("td", {
							children: s.sleepPerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Sleep TIME/s"
						}), p("td", {
							children: s.sleepTimePerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Msg FRAME/s"
						}), p("td", {
							children: s.framePerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Msg SOUND/s"
						}), p("td", {
							children: s.soundPerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Msg SENT/s"
						}), p("td", {
							children: s.msgSentPerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Msg RECV/s"
						}), p("td", {
							children: s.msgRecvPerSec
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Net Id"
						}), p("td", {
							children: [a && p("div", {
								class: "flex items-center gap-2 justify-between",
								children: [e.net?.peerId ?? "-", p("button", {
									class: "btn btn-sm btn-ghost btn-square",
									onClick: () => {
										navigator.clipboard.writeText((e.net?.peerId ?? "-").toString()), c(z.actions.showToast({
											message: i("copied"),
											intent: "success"
										}))
									},
									children: p("svg", {
										xmlns: "http://www.w3.org/2000/svg",
										fill: "none",
										viewBox: "0 0 24 24",
										"stroke-width": "1.5",
										stroke: "currentColor",
										class: "size-4",
										children: p("path", {
											"stroke-linecap": "round",
											"stroke-linejoin": "round",
											d: "M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
										})
									})
								})]
							}), !a && p("p", {
								children: "-"
							})]
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Net SENT"
						}), p("td", {
							children: [Math.round(s.netSent / 1024 * 100) / 100, "Kb"]
						})]
					}), p("tr", {
						children: [p("td", {
							children: "Net RECV"
						}), p("td", {
							children: [Math.round(s.netRecv / 1024 * 100) / 100, "Kb"]
						})]
					}), s.driveIo.map((d, l) => p(pe, {
						children: [p("tr", {
							children: [p("td", {
								children: ["HDD ", l == 0 ? "C:" : "D:"]
							}), p("td", {
								children: [d.url.substring(d.url.lastIndexOf("/") + 1), " -", Math.round(d.read * 100 / d.total), "%"]
							})]
						}), p("tr", {
							children: [p("td", {
								children: "Size"
							}), p("td", {
								children: [Math.round(d.total / 1024 / 1024), " Mb ", p("br", {}), Math.round(d.write / 1024), " Kb"]
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

function Rc(e) {
	const t = () => {
		Ot.removeEventListener("change", t), e(Ot)
	};
	Ot.addEventListener("change", t), Ot.click()
}

function yf() {
	const e = M(t => t.dos.emuVersion);
	return p("div", {
		class: "pre-run-window flex items-center justify-center w-full h-full",
		children: [p(Lc, {}), p(wf, {}), p("span", {
			style: "display:none",
			class: "mt-4 bottom-3 text-ellipsis overflow-hidden text-sm text-neutral/80",
			children: ["js-", "8.3.20", "/emu-", e.substring(0, e.indexOf(" "))]
		})]
	})
}

function bf() {
	const e = Q(),
		t = ge(),
		[n, o] = te(!1),
		r = t.loadedBundle?.bundleUrl,
		s = t.loadedBundle?.bundleChangesUrl,
		u = t.loadedBundle?.appliedBundleChanges ?? null,
		a = t.loadedBundle?.bundleChanges ?? u,
		c = a !== null,
		i = M(v => v.auth.account),
		d = Pe(),
		l = Y();
	if (r === null || s === null) return null;
	if (n) return p("span", {
		class: "loading loading-spinner loading-md"
	});
	const m = p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		style: "padding: 2px",
		viewBox: "0 0 16 16",
		"enable-background": "new 0 0 16 16",
		fill: "currentColor",
		class: "w-4 h-4 ",
		children: p("path", {
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
		})
	});
	if (c) return p("div", {
		class: "flex flex-row items-baseline gap-1",
		children: [p("p", {
			class: "text-accent",
			children: e("changes_loaded")
		}), p("button", {
			class: "btn btn-ghost btn-xs text-accent underline self-center",
			onClick: () => {
				Aa("changes.bin", a, "application/octet-stream")
			},
			children: [m, e("download")]
		}), p("button", {
			class: "btn btn-ghost btn-xs underline -ml-2",
			onClick: () => {
				window.confirm(e("delete_changes_confirm")) && (o(!0), ba().then(async v => {
					await v.del(s), u !== null && await Ca(u, async (h, g) => {
						const _ = await wa(h);
						await _.del(0), _.close()
					}), tr(i, null) && s && await fetch(id + "?bundleUrl=" + encodeURIComponent(s)), await Lt(r, d)
				}).catch(v => {
					console.error(v), l(z.actions.showToast({
						message: e("error_deleting_changes"),
						intent: "error"
					}))
				}).finally(() => o(!1)))
			},
			children: e("delete")
		})]
	});
	async function f(v) {
		try {
			if (v.files === null || v.files.length === 0) return;
			const h = v.files[0];
			await gt(d.getState(), t, l, !1, new Uint8Array(await h.arrayBuffer())), await Lt(r, d)
		} catch (h) {
			console.error(h), l(z.actions.showToast({
				message: e("error_uploading_changes"),
				intent: "error"
			}))
		} finally {
			o(!1)
		}
	}
	return p("div", {
		class: "flex flex-row items-baseline gap-1",
		children: [e("no_changes_loaded"), p("button", {
			class: "btn btn-ghost btn-xs text-accent underline self-center",
			onClick: () => {
				o(!0), Rc(f)
			},
			children: [m, e("upload")]
		})]
	})
}
let ao = "-----";

function wf() {
	const e = Q(),
		t = M(h => h.auth.account),
		n = M(h => h.ui.kiosk),
		o = M(h => h.ui.noCloud),
		[r, s] = te(t?.token ?? ""),
		u = t?.premium ?? !1,
		a = ge(),
		c = M(h => h.ui.warnOnKey),
		i = M(h => h.ui.warnOnPremium),
		d = Y(),
		l = Pe();
	if (n) return null;

	function m(h) {
		h !== ao && (d(z.actions.warnOnKey(!1)), d(z.actions.warnOnPremium(!1)), ao = h, s(h), Oo(h).then(({
			token: g,
			account: _
		}) => {
			g === ao && (d(Rt.actions.setAccount(_)), _ !== null && a.options.url ? Lt(a.options.url, l).catch(y => {
				l.dispatch(I.actions.bndError(y.message))
			}) : _ === null && g.length === 5 && s(""))
		}).catch(console.error))
	}
	oe(() => {
		Oo(r).then(({
			token: h,
			account: g
		}) => {
			d(Rt.actions.setAccount(g))
		})
	}, []);

	function f() {
		d(z.actions.autoStart(!1)), Kt(a, "open-key")
	}
	const v = t?.email === "dz.caiiiycuk@gmail.com";
	return p("div", {
		style: "display:none",
		class: "bg-base-200/80 mx-4 my-5 px-8 py-4 flex flex-col gap-2 items-center rounded-xl",
		children: p("div", {
			class: "mt-4 flex flex-col items-center gap-2",
			children: [t === null && e("hello_guest"), t !== null && p("div", {
				class: v ? "bg-warning px-2" : "",
				children: [e("hello") + ", " + (v ? "DOS Zone" : t.name ?? t.email) + "!", p("span", {
					class: "link link-neutral lowercase inline ml-1",
					onClick: () => {
						m(""), d(z.actions.autoStart(!1))
					},
					children: ["(", e("logout"), ")"]
				})]
			}), p(bf, {}), !o && p(pe, {
				children: [p("div", {
					class: "mt-2",
					children: t === null && p(pe, {
						children: [e("no_cloud_access"), p("a", {
							href: "https://v8.js-dos.com/key",
							onClick: f,
							target: "_blank",
							class: "link link-warning ml-1",
							children: e("key")
						}), " ", e("no_cloud_access2"), "."]
					})
				}), u === !1 && p(pe, {
					children: p("span", {
						class: "text-xs",
						children: [e("no_cloud_access3"), t !== null && p("a", {
							href: "https://v8.js-dos.com/key",
							onClick: f,
							target: "_blank",
							class: "link ml-1 lowercase " + (i ? "" : "link-warning"),
							children: ["(", e("fix"), ")"]
						})]
					})
				}), t === null && p("div", {
					class: "-ml-4",
					children: p("input", {
						maxLength: 5,
						value: r,
						onChange: h => m(h.currentTarget.value),
						placeholder: "-----",
						class: "input input-bordered mt-4 mb-4 text-center w-24 bg-blend-multiply bg-opacity-40" + (c ? " input-warning " : ""),
						onClick: () => d(z.actions.autoStart(!1))
					})
				})]
			})]
		})
	})
}

function Lc(e) {
	const t = M(g => g.editor.configChanged),
		n = M(g => g.editor.bundleConfig),
		o = M(g => g.ui.frame !== "none"),
		r = M(g => g.ui.countDownStart),
		s = M(g => g.ui.autoStart),
		u = M(g => g.ui.editor),
		[a, c] = te(r),
		[i, d] = te(s),
		l = ge(),
		m = Y(),
		f = Q(),
		v = i && !o && !u;
	oe(() => {
		if (r > 0 && a > 0 && v) {
			const g = setTimeout(() => {
				c(a - 1)
			}, 1e3);
			return () => clearInterval(g)
		}
		a === 0 && r > 0 && v && m(I.actions.bndPlay({}))
	}, [a, r, v]), oe(() => {
		d(s)
	}, [s]);
	async function h() {
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
	return e.button === !0 ? p("div", {
		class: "btn btn-accent w-full sm:hidden",
		onClick: h,
		children: [p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-6 h-6",
			children: [p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
			}), p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
			})]
		}), f("play")]
	}) : p("div", {
		class: e.class + " relative cursor-pointer w-1/4 h-1/4 min-w-48 min-h-48 max-w-96 max-h-96",
		children: [p("div", {
			class: "relative",
			children: [p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-full h-full play-button",
				onClick: h,
				children: [p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				}), p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
				})]
			}), r > 0 && v && p("div", {
				class: "absolute top-0 right-0 translate-x-1/2 w-12 h-12 opacity-90 cursor-pointer flex items-center justify-center text-2xl font-bold bg-primary text-primary-content rounded-full animate-pulse cound-down-start",
				onClick: () => d(!1),
				children: [p("div", {
					children: a
				}), p("div", {
					children: p("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						fill: "none",
						viewBox: "0 0 24 24",
						"stroke-width": "1.5",
						stroke: "currentColor",
						class: "size-12",
						children: p("path", {
							"stroke-linecap": "round",
							"stroke-linejoin": "round",
							d: "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
						})
					})
				})]
			})]
		}), p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			style: "display:none",
			class: "w-10 h-10 absolute right-0 bottom-0 cursor-pointer" + (o ? " sidebar-highlight" : ""),
			onClick: g => {
				m(o ? z.actions.frameNone() : z.actions.framePreRun()), g.stopPropagation()
			},
			children: [p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
			}), p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			})]
		})]
	})
}

function xf(e) {
	return p("div", {
		class: "prerun-frame frame-root items-start pl-4",
		children: [p(Lc, {
			button: !0
		}), p(Ra, {}), p(Ia, {}), p(La, {}), p(Ba, {}), p(Fa, {
			class: "mt-4"
		}), p(Ka, {}), p(Ua, {}), p(of, {
			multiline: !0
		}), p(Zd, {}), p(Jd, {}), p("div", {
			class: "h-4"
		}), p(ef, {}), p(kf, {}), p("div", {
			class: "h-4"
		}), p(rf, {
			multiline: !0
		}), p(za, {
			multiline: !0
		}), p(tf, {}), p(Yd, {}), p(sf, {
			multiline: !0
		}), p(Na, {
			multiline: !0
		})]
	})
}

function kf() {
	const e = Y(),
		t = M(n => n.dos.connectIpxAddress);
	return p("div", {
		class: "flex flex-col mt-4 gap-2",
		children: [p("div", {
			children: "IPX Address"
		}), p("input", {
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
	return t === "none" ? null : p("div", {
		class: "frame " + (n ? " frame-xs " : "") + (n || o ? "" : " frame-md"),
		children: [t === "settings" && p(vf, {}), t === "editor-conf" && p(Kd, {}), t === "editor-fs" && p(Wd, {}), t === "stats" && p(_f, {}), t === "prerun" && p(xf, {})]
	})
}

function Bc(e, t) {
	(async () => {
		const n = t.getState().ui.softFullscreen,
			o = Se(t),
			r = o.root;
		e ? n ? r.classList.add("jsdos-fullscreen-workaround") : r.requestFullscreen ? await r.requestFullscreen() : r.webkitRequestFullscreen ? await r.webkitRequestFullscreen() : r.mozRequestFullScreen ? await r.mozRequestFullScreen() : r.msRequestFullscreen ? await r.msRequestFullscreen() : r.webkitEnterFullscreen ? await r.webkitEnterFullscreen() : r.classList.add("jsdos-fullscreen-workaround") : r.classList.contains("jsdos-fullscreen-workaround") ? r.classList.remove("jsdos-fullscreen-workaround") : document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen(), t.dispatch(z.actions.setFullScreen(e)), Kt(o, "fullscreen-change", e)
	})().catch(n => {
		console.error("Can't enter fullscreen", n)
	})
}

function Sf(e) {
	const t = M(r => r.ui.fullScreen),
		n = Pe();

	function o() {
		Bc(!t, n)
	}
	return p("div", {
		class: "fullscreen-button sidebar-button " + e.class,
		onClick: o,
		children: p("div", {
			class: "w-full h-full scale-75 hover:scale-90",
			children: [!t && p("svg", {
				version: "1.1",
				id: "Layer_1",
				xmlns: "http://www.w3.org/2000/svg",
				x: "0px",
				y: "0px",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				stroke: "none",
				"enable-background": "new 0 0 16 16",
				children: p("g", {
					children: p("path", {
						"fill-rule": "evenodd",
						"clip-rule": "evenodd",
						d: "M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z"
					})
				})
			}), t && p("svg", {
				version: "1.1",
				id: "Layer_1",
				xmlns: "http://www.w3.org/2000/svg",
				x: "0px",
				y: "0px",
				viewBox: "0 0 16 16",
				fill: "currentColor",
				stroke: "none",
				"enable-background": "new 0 0 16 16",
				children: p("g", {
					children: p("path", {
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
	return p(Ht, {
		class: e.class,
		frame: "editor-conf",
		action: z.actions.frameConf(),
		children: p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-full h-full",
			children: p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
			})
		})
	})
}

function Ef(e) {
	return p(Ht, {
		class: e.class,
		frame: "editor-fs",
		action: z.actions.frameFs(),
		children: p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-full h-full",
			children: p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"
			})
		})
	})
}

function Of() {
	const e = Math.round(M(t => t.dos.stats.cyclesPerMs) / 1e3);
	return p(Ht, {
		class: "cycles",
		frame: "stats",
		action: z.actions.frameStats(),
		children: [e <= 0 && p(pe, {
			children: [p("span", {
				children: "~"
			}), p("sup", {
				children: "KC"
			})]
		}), e > 0 && e <= 1e3 && p(pe, {
			children: [p("span", {
				children: e
			}), p("sup", {
				children: "KC"
			})]
		}), e > 0 && e > 1e3 && p(pe, {
			children: [p("span", {
				children: Math.round(e / 1e3)
			}), p("sup", {
				children: [p("strong", {
					children: "K"
				}), "KC"]
			})]
		})]
	})
}

function Mf(e) {
	const t = Pe(),
		n = Ae(null),
		[o] = te({
			recv: 0,
			enabled: !1,
			delayLedTo: 0
		});
	oe(() => {
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
	const [r, s] = te(!1), [u, a] = te({
		recv: 0,
		timeoutId: null
	}), c = M(i => i.dos.stats.msgRecvPerSec);
	if (u.recv !== c) {
		r || s(!0), u.timeoutId && clearTimeout(u.timeoutId);
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
	return p("div", {
		ref: n,
		class: "self-end mr-2 -mt-3 w-2 h-1"
	})
}

function Af(e) {
	return p(Ht, {
		class: e.class,
		action: z.actions.frameSettings(),
		frame: "settings",
		children: p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-full h-full",
			children: [p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
			}), p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			})]
		})
	})
}

function Ht(e) {
	const t = M(r => r.ui.frame) === e.frame,
		n = Y();

	function o() {
		n(t ? z.actions.frameNone() : e.action)
	}
	return p("div", {
		class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
		onClick: o,
		children: e.children
	})
}

function Tf(e) {
	const t = M(o => o.dos.softKeyboard),
		n = Y();
	return oe(() => {
		t || n(I.actions.softKeyboard(!0))
	}, [t]), p("div", {
		class: "sidebar-button " + (t ? "sidebar-highlight " : "") + e.class,
		children: p("svg", {
			class: "w-full h-full",
			fill: "currentColor",
			stroke: "currentColor",
			version: "1.1",
			id: "Layer_1",
			viewBox: "0 0 507.9 507.9",
			children: [p("g", {
				id: "SVGRepo_bgCarrier",
				"stroke-width": "0"
			}), p("g", {
				id: "SVGRepo_tracerCarrier",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}), p("g", {
				id: "SVGRepo_iconCarrier",
				children: [" ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M465.7,140.75H268.1v-77.3c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v77.3H42.3c-23.3,0-42.3,19-42.3,42.3 v233.2c0,23.3,19,42.3,42.3,42.3h423.3c23.3,0,42.3-19,42.3-42.3v-233.2C508,159.75,489,140.75,465.7,140.75z M465.7,430.35H42.3 c-7.8,0-14.1-6.3-14.1-14.1v-233.2c0-7.8,6.3-14.1,14.1-14.1h423.3c7.8,0,14.1,6.3,14.1,14.1v233.2h0.1 C479.8,424.05,473.5,430.35,465.7,430.35z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M440.6,194.05h-85.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h85.4c7.8,0,14.1-6.3,14.1-14.1 C454.7,200.35,448.4,194.05,440.6,194.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M80.9,377.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95,383.35,88.7,377.05,80.9,377.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M303.3,377.05H141.6c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h161.8c7.8,0,14.1-6.3,14.1-14.1 C317.5,383.35,311.1,377.05,303.3,377.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M80.9,255.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,261.35,88.7,255.05,80.9,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M152.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,261.35,160.6,255.05,152.8,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M224.8,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,261.35,232.6,255.05,224.8,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M296.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,261.35,304.5,255.05,296.7,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M80.9,194.05H67.4c-7.8,0-14.1,6.3-14.1,14.1s6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,200.35,88.7,194.05,80.9,194.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M152.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,200.35,160.6,194.05,152.8,194.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M224.8,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,200.35,232.6,194.05,224.8,194.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M296.7,194.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,200.35,304.5,194.05,296.7,194.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M368.7,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,261.35,376.4,255.05,368.7,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M440.6,255.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,261.35,448.4,255.05,440.6,255.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M368.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,322.35,376.4,316.05,368.7,316.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M440.6,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,322.35,448.4,316.05,440.6,316.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M368.7,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C382.8,383.35,376.4,377.05,368.7,377.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M440.6,377.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C454.7,383.35,448.4,377.05,440.6,377.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M80.9,316.05H67.4c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C95.1,322.35,88.7,316.05,80.9,316.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M152.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.4,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C166.9,322.35,160.6,316.05,152.8,316.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M224.8,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C238.9,322.35,232.6,316.05,224.8,316.05z"
						}), " "]
					}), " "]
				}), " ", p("g", {
					children: [" ", p("g", {
						children: [" ", p("path", {
							d: "M296.7,316.05h-13.5c-7.8,0-14.1,6.3-14.1,14.1c0,7.8,6.3,14.1,14.1,14.1h13.5c7.8,0,14.1-6.3,14.1-14.1 C310.8,322.35,304.5,316.05,296.7,316.05z"
						}), " "]
					}), " "]
				}), " "]
			})]
		})
	})
}

function Df(e) {
	return p(Ht, {
		class: e.class,
		frame: "prerun",
		action: z.actions.framePreRun(),
		children: p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-full h-full",
			children: [p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
			}), p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			})]
		})
	})
}

function jf(e) {
	return p("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		style: "padding: 2px",
		viewBox: "0 0 16 16",
		"enable-background": "new 0 0 16 16",
		fill: "currentColor",
		class: "w-full h-full rounded-lg " + e.class,
		children: p("path", {
			"fill-rule": "evenodd",
			"clip-rule": "evenodd",
			d: "M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z"
		})
	})
}

function If() {
	const e = M(n => n.ui.haveQuickSave),
		t = M(n => n.dos.backend) === "dosboxX";
	return p("div", {
		class: "save-buttons flex flex-col justify-center items-center -my-2",
		children: [p(Bf, {}), t && p(Rf, {
			label: "X",
			bgcolor: "bg-primary",
			textcolor: "text-primary-content"
		}), t && e && p(Lf, {
			label: "X",
			bgcolor: "bg-primary"
		})]
	})
}

function Rf(e) {
	const t = ge(),
		n = Y();

	function o() {
		const r = t.ci;
		r !== null && (Sa(r), n(z.actions.setHaveQuickSave(!0)))
	}
	return p("div", {
		class: "sidebar-button flex justify-center",
		onClick: o,
		children: [p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "absolute left-0 bottom-0 w-6 h-6 opacity-30",
			children: p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
			})
		}), p("p", {
			class: "absolute top-0 right-0 font-bold",
			children: "F6"
		})]
	})
}

function Lf(e) {
	const t = ge();

	function n() {
		const o = t.ci;
		o !== null && Pa(o)
	}
	return p("div", {
		class: "sidebar-button flex justify-center",
		onClick: n,
		children: [p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "absolute left-0 bottom-0  w-6 h-6 -scale-y-100 opacity-30",
			children: p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
			})
		}), p("p", {
			class: "absolute top-0 right-0 font-bold",
			children: "F7"
		})]
	})
}

function Bf(e) {
	const [t, n] = te(!1), o = Y(), r = M(c => c.ui.canSave), s = ge(), u = Pe();
	if (!r || s.loadedBundle === null || s.loadedBundle.bundleChangesUrl === null) return null;

	function a() {
		t || (n(!0), gt(Fe(u), s, o).finally(() => n(!1)))
	}
	return p("div", {
		class: "save-button sidebar-button overflow-hidden " + (t ? " sidebar-highlight " : "") + e.class,
		onClick: a,
		children: p("div", {
			class: "w-full h-full flex justify-center",
			children: [p(jf, {}), t && p("div", {
				class: "sidebar-badge"
			})]
		})
	})
}

function zf(e) {
	const t = M(c => c.ui.window),
		n = M(c => c.ui.editor),
		o = M(c => c.ui.kiosk),
		r = M(c => c.ui.frame) !== "none",
		s = M(c => c.dos.mouseCapture),
		u = M(c => c.ui.thinSidebar),
		a = Y();
	return o ? t === "run" && s ? p(co, {
		class: "h-full"
	}) : null : u ? p("div", {
		class: "sidebar-thin",
		children: [p("div", {
			class: "cursor-pointer hover:bg-base-100 w-full h-full flex flex-col items-center justify-center gap-1",
			onClick: () => {
				a(z.actions.thinSidebar(!1))
			},
			children: p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "w-4 h-4",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
				})
			})
		}), !r && t === "run" && s && p(co, {})]
	}) : p("div", {
		style: "display:none",
		class: "sidebar",
		children: [t === "run" && p(If, {}), t === "run" && p(Tf, {}), n && t === "prerun" && p(Pf, {}), n && t === "run" && p(Ef, {}), p("div", {
			class: "contentbar"
		}), t === "run" && p(Sf, {}), t === "run" && p(Of, {}), t === "run" && p(Mf, {}), t === "prerun" && p(Df, {}), t === "run" && p(Af, {}), !r && t === "run" && s && p(co, {})]
	})
}

function co(e) {
	const t = M(o => o.dos.mouseSensitivity),
		n = Y();
	return p("div", {
		class: "sidebar-slider " + e.class,
		children: p(Sn, {
			bgClass: "bg-base-300",
			vertical: !0,
			label: "",
			value: t,
			onChange: o => {
				n(I.actions.mouseSensitivity(o))
			},
			children: p("svg", {
				class: "w-6 h-6",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg",
				children: p("path", {
					d: "M12 9V7M12 21C8.68629 21 6 18.3137 6 15V9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9V15C18 18.3137 15.3137 21 12 21Z",
					"stroke-width": "2",
					"stroke-linecap": "round",
					"stroke-linejoin": "round"
				})
			})
		})
	})
}

function Nf(e, t, n, o) {
	const r = new Set;

	function s() {
		r.forEach(i => {
			t.sendKeyEvent(i, !1)
		}), r.clear()
	}

	function u(i) {
		if (i.target.type === "text") return;
		n && (i.key === "F6" && (Sa(t), o(z.actions.setHaveQuickSave(!0))), i.key === "F7" && Pa(t));
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
	return e.addEventListener("keydown", u), e.addEventListener("keyup", a), e.addEventListener("blur", c), () => {
		s(), e.removeEventListener("keydown", u), e.removeEventListener("keyup", a), e.removeEventListener("blur", c)
	}
}

function Ur(e, t, n, o) {
	const r = e.parentElement.getBoundingClientRect(),
		s = r.width,
		u = r.height;
	if (n === 0) return;
	const a = o === ka ? s / u : o ?? t / n;
	let c = s,
		i = s / a;
	i > u && (i = u, c = u * a), e.style.position = "relative", e.style.top = (u - i) / 2 + "px", e.style.left = (s - c) / 2 + "px", e.style.width = c + "px", e.style.height = i + "px"
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
		u = r.getAttribLocation(s, "aVertexPosition"),
		a = r.getAttribLocation(s, "aTextureCoord"),
		c = r.getUniformLocation(s, "uSampler");
	$f(r, u, a);
	const i = r.createTexture();
	r.bindTexture(r.TEXTURE_2D, i), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR);
	const d = new Uint8Array([0, 0, 0]);
	r.texImage2D(r.TEXTURE_2D, 0, r.RGB, 1, 1, 0, r.RGB, r.UNSIGNED_BYTE, d), r.useProgram(s), r.activeTexture(r.TEXTURE0), r.uniform1i(c, 0);
	let l = 0,
		m = 0,
		f = null,
		v = null,
		h = 0;
	const g = () => {
			v !== null && (r.texImage2D(r.TEXTURE_2D, 0, h, l, m, 0, h, r.UNSIGNED_BYTE, v), v = null), r.drawArrays(r.TRIANGLES, 0, 6), f = null
		},
		_ = () => {
			Ur(e, l, m, o)
		},
		y = (C, x) => {
			l = C, m = x, e.width = l, e.height = m, v = null, r.viewport(0, 0, l, m), _()
		};
	t.events().onFrameSize(y), t.events().onFrame((C, x) => {
		v = C ?? x, h = C != null ? r.RGB : r.RGBA, f === null && (f = requestAnimationFrame(g))
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
	const u = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
	e.bufferData(e.ARRAY_BUFFER, new Float32Array(u), e.STATIC_DRAW), e.vertexAttribPointer(n, 2, e.FLOAT, !1, 0, 0), e.enableVertexAttribArray(n)
}

function oi(e, t, n) {
	const o = e.getContext("2d");
	if (o === null) throw new Error("Unable to create 2d context on given canvas");
	let r = 0,
		s = 0;
	const u = () => {
		Ur(e, r, s, n)
	};
	let a = new Uint8ClampedArray(0);
	const c = (d, l) => {
		r = d, s = l, e.width = r, e.height = s, a = new Uint8ClampedArray(d * l * 4), u()
	};
	t.events().onFrameSize(c), t.events().onFrame((d, l) => {
		if (d === null && l === null) return;
		const m = d !== null ? d : l;
		let f = 0,
			v = 0;
		for (; v < a.length;) a[v++] = m[f++], a[v++] = m[f++], a[v++] = m[f++], a[v++] = 255, m.length === a.length && f++;
		o.putImageData(new ImageData(a, r, s), 0, 0)
	}), c(t.width(), t.height());
	const i = new ResizeObserver(u);
	return i.observe(e.parentElement), window.addEventListener("resize", u), () => {
		t.events().onFrameSize(() => {}), t.events().onFrame(() => {}), i.disconnect(), window.removeEventListener("resize", u)
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
		u = 2048,
		a = 2048;
	e.events().onSoundPush(v => {
		s.length() < u * 2 + a && s.push(v)
	});
	const c = r.createScriptProcessor(u, 0, o);
	let i = !1;
	const d = v => {
		const h = v.outputBuffer.length,
			g = v.outputBuffer.numberOfChannels,
			_ = s.length();
		if (i || (i = _ >= a), !!i)
			for (let y = 0; y < g; y++) {
				const b = v.outputBuffer.getChannelData(y);
				s.writeTo(b, h)
			}
	};
	c.onaudioprocess = d;
	const l = r.createGain();
	l.connect(r.destination), c.connect(l), l.gain.value = 1;
	let m;
	t && (m = t(v => {
		l.gain.value = v
	}));
	const f = () => {
		r !== null && r.state === "suspended" && r.resume()
	};
	return document.addEventListener("pointerdown", f, {
		once: !0
	}), document.addEventListener("keydown", f, {
		once: !0
	}), () => {
		e.events().onSoundPush(() => {}), r !== null && (c.disconnect(), l.disconnect(), r.close().catch(console.error), r = null), m !== void 0 && m(), document.removeEventListener("pointerdown", f), document.removeEventListener("keydown", f)
	}
}

function qf(e, t, n, o, r) {
	return () => {}
}
const Gt = 50;

function Xf() {
	const e = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2,
		t = e && "ontouchstart" in window,
		n = e && !!window.PointerEvent,
		o = e && !!window.MSPointerEvent;
	let r = !e;
	const s = [],
		u = [],
		a = [],
		c = [],
		i = [];
	return n ? (s.push("pointerdown"), a.push("pointerup", "pointercancel"), u.push("pointermove"), i.push("touchstart", "touchmove", "touchend")) : o ? (s.push("MSPointerDown"), u.push("MSPointerMove"), a.push("MSPointerUp")) : t ? (r = !1, s.push("touchstart", "mousedown"), u.push("touchmove"), a.push("touchend", "touchcancel", "mouseup")) : (s.push("mousedown"), u.push("mousemove"), a.push("mouseup"), c.push("mouseleave")), {
		mobile: e,
		canLock: r,
		starters: s,
		changers: u,
		enders: a,
		prevents: i,
		leavers: c
	}
}
const Yt = {};

function Qt(e, t, n, o) {
	function r(u) {
		if (u.type.match(/^touch/)) {
			const a = u,
				c = t.getBoundingClientRect();
			return {
				id: "touch-" + a.targetTouches[0].identifier,
				x: a.targetTouches[0].clientX - c.x,
				y: a.targetTouches[0].clientY - c.y,
				mX: 0,
				mY: 0
			}
		} else if (u.type.match(/^pointer/)) {
			const a = u;
			return {
				id: "pointer-" + a.pointerId,
				x: a.offsetX,
				y: a.offsetY,
				mX: a.movementX,
				mY: a.movementY,
				button: a.button > 0 ? 1 : void 0
			}
		} else {
			const a = u;
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
	return o || (Yt[s.id] ? (s.mX = s.x - Yt[s.id].x, s.mY = s.y - Yt[s.id].y) : (s.mX = 0, s.mY = 0)), Yt[s.id] = {
		x: s.x,
		y: s.y
	}, s.mX = ri(s.mX, n), s.mY = ri(s.mY, n), s
}
const le = Xf();

function ri(e, t) {
	e > Gt ? e = Gt : e < -Gt && (e = -Gt);
	const n = Math.pow(8, t * 2 - 1);
	return e = e * n, e
}

function zc(e, t) {
	const n = document.createElement("div");
	return n.className = e, t !== void 0 && (n.innerHTML = t), n
}

function Gf(e, t = !0) {
	const n = s => {
			s.stopPropagation()
		},
		o = s => {
			s.stopPropagation(), t && s.preventDefault()
		},
		r = {
			capture: !1
		};
	for (const s of le.starters) e.addEventListener(s, n, r);
	for (const s of le.enders) e.addEventListener(s, n, r);
	for (const s of le.prevents) e.addEventListener(s, o, r)
}
class Yf {
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
		this.toggleKeyboard = o, this.options = r, this.root = t, this.root.classList.add("emulator-root"), this.canvas = n, this.canvas.className = "emulator-canvas", this.mouseOverlay = Qf(), this.root.appendChild(this.mouseOverlay), this.width = t.offsetWidth, this.height = t.offsetHeight, this.onResize = [], this.onKeyDown = () => {}, this.onKeyUp = () => {}, this.onKeyPress = () => {}, this.onKeysPress = () => {}, new ResizeObserver(s => {
			for (const u of s)
				if (u.target === t) {
					this.width = u.contentRect.width, this.height = u.contentRect.height;
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

function Qf() {
	return zc("emulator-mouse-overlay", "")
}

function Nc(e) {
	return e.layersConfig !== void 0 ? (e.layersConfig.version === 1 && Zf(e.layersConfig), e.layersConfig) : e.layers !== void 0 ? e.layers : null
}

function Zf(e) {
	for (const t of e.layers)
		for (const n of t.controls)
			if (n.type === "Key") {
				const o = n;
				typeof o.mapTo == "number" && (o.mapTo = [o.mapTo])
			}
}
const Jf = ep();

function ep() {
	const e = {};
	for (const t of Object.keys(ti)) e[ti[t]] = t.substr(4, 2);
	return e
}

function Te(e, t, n) {
	const o = Math.round(n * .6),
		r = Math.round(n * .5),
		s = Math.max(1, Math.round(n / 20)),
		u = rp[e.toLowerCase()],
		a = u === void 0 ? e : "",
		c = lo("emulator-button-touch-zone"),
		i = lo("emulator-button"),
		d = lo("emulator-button-text", u === void 0 ? a === void 0 || a.length === 0 ? "□" : a.substr(0, 1).toUpperCase() : "");
	u !== void 0 && (i.style.backgroundImage = 'url("' + u + '")'), i.style.width = o + "px", i.style.height = o + "px", d.style.fontSize = r + "px", c.widthPx = n - s * 2, c.heightPx = n - s * 2, c.style.width = c.widthPx + "px", c.style.height = c.heightPx + "px", c.style.borderWidth = s + "px", c.appendChild(i), c.appendChild(d);
	const l = h => {
			t.onDown !== void 0 && t.onDown(), t.onClick !== void 0 && t.onClick(), h.stopPropagation(), h.preventDefault()
		},
		m = h => {
			t.onUp !== void 0 && t.onUp(), h.stopPropagation(), h.preventDefault()
		},
		f = h => {
			h.stopPropagation(), h.preventDefault()
		},
		v = {
			capture: !0
		};
	for (const h of le.starters) c.addEventListener(h, l, v);
	for (const h of le.enders) c.addEventListener(h, m, v);
	for (const h of le.changers) c.addEventListener(h, f, v);
	for (const h of le.leavers) c.addEventListener(h, f, v);
	for (const h of le.prevents) c.addEventListener(h, f, v);
	return c
}

function tp(e, t, n, o) {
	const r = Math.round(o / 4),
		s = [];
	for (const u of n) {
		if (u.mapTo === nr) continue;
		const a = (u.symbol || np(u.mapTo)).toUpperCase(),
			c = op(u, e),
			i = Te(a, c, o);
		i.style.position = "absolute";
		const d = u.style;
		if (d)
			for (const l of Object.keys(d)) i.style[l] = d[l];
		if (u.position !== void 0) {
			const l = u.position.left,
				m = u.position.top,
				f = u.position.bottom,
				v = u.position.right;
			l !== void 0 && (i.style.left = r * l + o * (l - 1) + "px"), v !== void 0 && (i.style.right = r * v + o * (v - 1) + "px"), m !== void 0 && (i.style.top = r * m + o * (m - 1) + "px"), f !== void 0 && (i.style.bottom = r * f + o * (f - 1) + "px")
		}
		e.mouseOverlay.appendChild(i), s.push(i)
	}
	return () => {
		for (const u of s) u.parentElement === e.mouseOverlay && e.mouseOverlay.removeChild(u)
	}
}

function lo(e, t) {
	const n = document.createElement("div");
	return n.className = e, t !== void 0 && (n.innerHTML = t), n
}

function np(e) {
	return typeof e == "number" ? Jf[e] : e
}

function op(e, t) {
	return e.action === "click" ? {
		onClick: () => t.fireKeyPress(e.mapTo)
	} : {
		onDown: () => t.fireKeyDown(e.mapTo),
		onUp: () => t.fireKeyUp(e.mapTo)
	}
}
const Zt = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19,12c-0.3,0-0.5,0.1-0.7,0.3L14,16.6V3c0-0.5-0.4-1-1-1s-1,0.5-1,1v13.6 l-4.3-4.3C7.5,12.1,7.3,12,7,12c-0.5,0-1,0.4-1,1c0,0.3,0.1,0.5,0.3,0.7l6,6c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l6-6 c0.2-0.2,0.3-0.4,0.3-0.7C20,12.4,19.5,12,19,12L19,12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
	uo = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='left_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,9H4.41l4.29-4.29C8.89,4.53,9,4.28,9,4c0-0.55-0.45-1-1-1 C7.72,3,7.47,3.11,7.29,3.29l-6,6C1.11,9.47,1,9.72,1,10c0,0.28,0.11,0.53,0.29,0.71l6,6C7.47,16.89,7.72,17,8,17 c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,11H18c0.55,0,1-0.45,1-1C19,9.45,18.55,9,18,9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
	Jt = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='right_arrow_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18.71,9.29l-6-6C12.53,3.11,12.28,3,12,3c-0.55,0-1,0.45-1,1 c0,0.28,0.11,0.53,0.29,0.71L15.59,9H2c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h13.59l-4.29,4.29C11.11,15.47,11,15.72,11,16 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l6-6C18.89,10.53,19,10.28,19,10C19,9.72,18.89,9.47,18.71,9.29z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
	St = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' fill='%23fff' viewBox='0 0 20 20' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Cg id='key_enter_1_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M18,2c-0.55,0-1,0.45-1,1v5c0,2.21-1.79,4-4,4H4.41l2.29-2.29 C6.89,9.53,7,9.28,7,9c0-0.55-0.45-1-1-1C5.72,8,5.47,8.11,5.29,8.29l-4,4C1.11,12.47,1,12.72,1,13c0,0.28,0.11,0.53,0.29,0.71 l4,4C5.47,17.89,5.72,18,6,18c0.55,0,1-0.45,1-1c0-0.28-0.11-0.53-0.29-0.71L4.41,14H13c3.31,0,6-2.69,6-6V3C19,2.45,18.55,2,18,2 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
	rp = {
		fullscreen: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='maximize_1_' fill='%23FFFFFF'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M5.99,8.99c-0.28,0-0.53,0.11-0.71,0.29l-3.29,3.29v-1.59c0-0.55-0.45-1-1-1 s-1,0.45-1,1v4c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1s-0.45-1-1-1H3.41L6.7,10.7c0.18-0.18,0.29-0.43,0.29-0.71 C6.99,9.44,6.54,8.99,5.99,8.99z M14.99-0.01h-4c-0.55,0-1,0.45-1,1s0.45,1,1,1h1.59L9.28,5.29C9.1,5.47,8.99,5.72,8.99,5.99 c0,0.55,0.45,1,1,1c0.28,0,0.53-0.11,0.71-0.29l3.29-3.29v1.59c0,0.55,0.45,1,1,1s1-0.45,1-1v-4C15.99,0.44,15.54-0.01,14.99-0.01 z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
		save: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' fill='%23FFFFFF' xml:space='preserve'%3E%3Cg id='floppy_disk'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.71,2.29l-2-2C13.53,0.11,13.28,0,13,0h-1v6H4V0H1C0.45,0,0,0.45,0,1v14 c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V3C16,2.72,15.89,2.47,15.71,2.29z M14,15H2V9c0-0.55,0.45-1,1-1h10c0.55,0,1,0.45,1,1V15 z M11,1H9v4h2V1z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A",
		options: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' enable-background='new 0 0 20 20' fill='%23FFF' xml:space='preserve'%3E%3Cg id='cog_2_'%3E%3Cg%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19,8h-2.31c-0.14-0.46-0.33-0.89-0.56-1.3l1.7-1.7c0.39-0.39,0.39-1.02,0-1.41 l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41,0l-1.7,1.7c-0.41-0.22-0.84-0.41-1.3-0.55V1c0-0.55-0.45-1-1-1H9C8.45,0,8,0.45,8,1v2.33 C7.52,3.47,7.06,3.67,6.63,3.91L5,2.28c-0.37-0.37-0.98-0.37-1.36,0L2.28,3.64C1.91,4.02,1.91,4.63,2.28,5l1.62,1.62 C3.66,7.06,3.46,7.51,3.31,8H1C0.45,8,0,8.45,0,9v2c0,0.55,0.45,1,1,1h2.31c0.14,0.46,0.33,0.89,0.56,1.3L2.17,15 c-0.39,0.39-0.39,1.02,0,1.41l1.41,1.41c0.39,0.39,1.02,0.39,1.41,0l1.7-1.7c0.41,0.22,0.84,0.41,1.3,0.55V19c0,0.55,0.45,1,1,1h2 c0.55,0,1-0.45,1-1v-2.33c0.48-0.14,0.94-0.35,1.37-0.59L15,17.72c0.37,0.37,0.98,0.37,1.36,0l1.36-1.36 c0.37-0.37,0.37-0.98,0-1.36l-1.62-1.62c0.24-0.43,0.45-0.89,0.6-1.38H19c0.55,0,1-0.45,1-1V9C20,8.45,19.55,8,19,8z M10,14 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4s4,1.79,4,4C14,12.21,12.21,14,10,14z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
		keyboard: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 18.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 16 16' enable-background='new 0 0 16 16' xml:space='preserve'%3E%3Cg id='manually_entered_data_2_'%3E%3Cg%3E%3Cpath fill='%23FFFFFF' fill-rule='evenodd' clip-rule='evenodd' d='M1,8h3.76l2-2H1C0.45,6,0,6.45,0,7C0,7.55,0.45,8,1,8z M15.49,3.99 C15.8,3.67,16,3.23,16,2.75C16,1.78,15.22,1,14.25,1c-0.48,0-0.92,0.2-1.24,0.51l-1.44,1.44l2.47,2.47L15.49,3.99z M1,4h7.76l2-2 H1C0.45,2,0,2.45,0,3C0,3.55,0.45,4,1,4z M1,10c-0.55,0-1,0.45-1,1c0,0.48,0.35,0.86,0.8,0.96L2.76,10H1z M10.95,3.57l-6.69,6.69 l2.47,2.47l6.69-6.69L10.95,3.57z M15.2,6.04L13.24,8H15c0.55,0,1-0.45,1-1C16,6.52,15.65,6.14,15.2,6.04z M2,15l3.86-1.39 l-2.46-2.44L2,15z M15,10h-3.76l-2,2H15c0.55,0,1-0.45,1-1C16,10.45,15.55,10,15,10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
		up: "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Layer_1' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 20 20' fill='%23FFF' enable-background='new 0 0 20 20' xml:space='preserve'%3E%3Ctitle%3EShape%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg id='Page-1' sketch:type='MSPage'%3E%3Cg id='Artboard-1' transform='translate(-3.000000, -1.000000)' sketch:type='MSArtboardGroup'%3E%3Cpath id='Shape' sketch:type='MSShapeGroup' d='M19.7,8.3l-6-6C13.5,2.1,13.3,2,13,2s-0.5,0.1-0.7,0.3l-6,6C6.1,8.5,6,8.7,6,9 c0,0.6,0.5,1,1,1c0.3,0,0.5-0.1,0.7-0.3L12,5.4V19c0,0.5,0.4,1,1,1s1-0.5,1-1V5.4l4.3,4.3C18.5,9.9,18.7,10,19,10c0.5,0,1-0.4,1-1 C20,8.7,19.9,8.5,19.7,8.3L19.7,8.3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
		down: Zt,
		do: Zt,
		dw: Zt,
		dwn: Zt,
		left: uo,
		le: uo,
		lft: uo,
		right: Jt,
		ri: Jt,
		rght: Jt,
		rgh: Jt,
		enter: St,
		en: St,
		enr: St,
		ent: St,
		entr: St
	},
	sp = 500,
	ip = 50;

function ap(e, t, n) {
	const o = t.mouseOverlay;
	let r = -1,
		s = 0;
	const u = (d, l) => {
		r = Date.now(), s = 0
	};

	function a(d, l, m, f) {
		m === 0 && f === 0 || (s += Math.abs(m) + Math.abs(f), n.sendMouseRelativeMotion(m, f))
	}
	return Hr(o, t, e, !1, u, a, (d, l) => {
		if (Date.now() - r < sp && s < ip) {
			const f = t.pointerButton || 0;
			n.sendMouseButton(f, !0), setTimeout(() => n.sendMouseButton(f, !1), 60)
		}
	}, () => {})
}

function cp(e, t) {
	const n = e.mouseOverlay,
		o = (c, i) => up(c, i, t, e);
	document.pointerLockElement === n && document.exitPointerLock();

	function r(c, i, d) {
		const l = o(c, i);
		t.sendMouseMotion(l.x, l.y), t.sendMouseButton(d, !0)
	}

	function s(c, i, d) {
		const l = o(c, i);
		t.sendMouseMotion(l.x, l.y), t.sendMouseButton(d, !1)
	}

	function u(c, i, d, l) {
		const m = o(c, i);
		t.sendMouseMotion(m.x, m.y)
	}

	function a(c, i) {
		const d = o(c, i);
		t.sendMouseMotion(d.x, d.y)
	}
	return Hr(n, e, 0, !1, r, u, s, a)
}

function lp(e, t, n) {
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

	function u(i, d, l) {
		r() || n.sendMouseButton(l, !1)
	}

	function a(i, d, l, m) {
		r() || l === 0 && m === 0 || n.sendMouseRelativeMotion(l, m)
	}

	function c(i, d) {}
	return Hr(o, t, e, !0, s, a, u, c)
}
const en = 1 / 100;

function up(e, t, n, o) {
	const r = n.width(),
		s = n.height(),
		u = o.width,
		a = o.height,
		c = r / s;
	let i = u,
		d = u / c;
	d > a && (d = a, i = a * c);
	const l = (a - d) / 2,
		m = (u - i) / 2;
	let f = Math.max(0, Math.min(1, (e - m) / i)),
		v = Math.max(0, Math.min(1, (t - l) / d));
	return f <= en && (f = 0), f >= 1 - en && (f = 1), v <= en && (v = 0), v >= 1 - en && (v = 1), {
		x: f,
		y: v
	}
}

function Hr(e, t, n, o, r, s, u, a) {
	let c = 0;
	const i = h => {
			if (h.target !== e) return;
			if (t.pointerDisabled) {
				h.stopPropagation();
				return
			}
			const g = Qt(h, e, n, o);
			c = g.button || t.pointerButton, r(g.x, g.y, c), h.stopPropagation()
		},
		d = h => {
			if (h.target !== e) return;
			if (t.pointerDisabled) {
				h.stopPropagation();
				return
			}
			const g = Qt(h, e, n, o);
			s(g.x, g.y, g.mX, g.mY), h.stopPropagation()
		},
		l = h => {
			if (t.pointerDisabled) {
				h.stopPropagation();
				return
			}
			const g = Qt(h, e, n, o);
			u(g.x, g.y, c), h.stopPropagation()
		},
		m = h => {
			if (h.target !== e) return;
			if (t.pointerDisabled) {
				h.stopPropagation();
				return
			}
			const g = Qt(h, e, n, o);
			a(g.x, g.y), h.stopPropagation()
		},
		f = h => {
			h.stopPropagation()
		},
		v = {
			capture: !1
		};
	for (const h of le.starters) e.addEventListener(h, i, v);
	for (const h of le.changers) e.addEventListener(h, d, v);
	for (const h of le.enders) e.addEventListener(h, l, v);
	for (const h of le.prevents) e.addEventListener(h, f, v);
	for (const h of le.leavers) e.addEventListener(h, m, v);
	return () => {
		for (const h of le.starters) e.removeEventListener(h, i, v);
		for (const h of le.changers) e.removeEventListener(h, d, v);
		for (const h of le.enders) e.removeEventListener(h, l, v);
		for (const h of le.prevents) e.removeEventListener(h, f, v);
		for (const h of le.leavers) e.removeEventListener(h, m, v)
	}
}

function Fc(e, t, n, o) {
	return e && !le.canLock ? ap(t, n, o) : e ? lp(t, n, o) : cp(n, o)
}
const ln = (e, t) => {
		const n = t.x - e.x,
			o = t.y - e.y;
		return Math.sqrt(n * n + o * o)
	},
	dp = (e, t) => {
		const n = t.x - e.x,
			o = t.y - e.y;
		return pp(Math.atan2(o, n))
	},
	fp = (e, t, n) => {
		const o = {
			x: 0,
			y: 0
		};
		return n = To(n), o.x = e.x - t * Math.cos(n), o.y = e.y - t * Math.sin(n), o
	},
	To = e => e * (Math.PI / 180),
	pp = e => e * (180 / Math.PI),
	hp = e => isNaN(e.buttons) ? e.pressure !== 0 : e.buttons !== 0,
	fo = new Map,
	si = e => {
		fo.has(e) && clearTimeout(fo.get(e)), fo.set(e, setTimeout(e, 100))
	},
	wn = (e, t, n) => {
		const o = t.split(/[ ,]+/g);
		let r;
		for (let s = 0; s < o.length; s += 1) r = o[s], e.addEventListener ? e.addEventListener(r, n, !1) : e.attachEvent && e.attachEvent(r, n)
	},
	ii = (e, t, n) => {
		const o = t.split(/[ ,]+/g);
		let r;
		for (let s = 0; s < o.length; s += 1) r = o[s], e.removeEventListener ? e.removeEventListener(r, n) : e.detachEvent && e.detachEvent(r, n)
	},
	Kc = e => (e.preventDefault(), e.type.match(/^touch/) ? e.changedTouches : e),
	ai = () => {
		const e = window.pageXOffset !== void 0 ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
			t = window.pageYOffset !== void 0 ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
		return {
			x: e,
			y: t
		}
	},
	ci = (e, t) => {
		t.top || t.right || t.bottom || t.left ? (e.style.top = t.top, e.style.right = t.right, e.style.bottom = t.bottom, e.style.left = t.left) : (e.style.left = t.x + "px", e.style.top = t.y + "px")
	},
	$r = (e, t, n) => {
		const o = Uc(e);
		for (let r in o)
			if (o.hasOwnProperty(r))
				if (typeof t == "string") o[r] = t + " " + n;
				else {
					let s = "";
					for (let u = 0, a = t.length; u < a; u += 1) s += t[u] + " " + n + ", ";
					o[r] = s.slice(0, -2)
				} return o
	},
	mp = (e, t) => {
		const n = Uc(e);
		for (let o in n) n.hasOwnProperty(o) && (n[o] = t);
		return n
	},
	Uc = e => {
		const t = {};
		return t[e] = "", ["webkit", "Moz", "o"].forEach(function(o) {
			t[o + e.charAt(0).toUpperCase() + e.slice(1)] = ""
		}), t
	},
	po = (e, t) => {
		for (let n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
		return e
	},
	vp = (e, t) => {
		const n = {};
		for (let o in e) e.hasOwnProperty(o) && t.hasOwnProperty(o) ? n[o] = t[o] : e.hasOwnProperty(o) && (n[o] = e[o]);
		return n
	},
	Do = (e, t) => {
		if (e.length)
			for (let n = 0, o = e.length; n < o; n += 1) t(e[n]);
		else t(e)
	},
	gp = (e, t, n) => ({
		x: Math.min(Math.max(e.x, t.x - n), t.x + n),
		y: Math.min(Math.max(e.y, t.y - n), t.y + n)
	});
var _p = "ontouchstart" in window,
	yp = !!window.PointerEvent,
	bp = !!window.MSPointerEvent,
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
yp ? lt = Pt.pointer : bp ? lt = Pt.MSPointer : _p ? (lt = Pt.touch, zt = Pt.mouse) : lt = Pt.mouse;

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
	for (var s = 0; s < o.length; s += 1) r = o[s], n._handlers_[r] && n._handlers_[r].length && n._handlers_[r].forEach(function(u) {
		u.call(n, {
			type: r,
			target: n
		}, t)
	})
};
He.prototype.config = function(e) {
	var t = this;
	t.options = t.defaults || {}, e && (t.options = vp(t.options, e))
};
He.prototype.bindEvt = function(e, t) {
	var n = this;
	return n._domHandlers_ = n._domHandlers_ || {}, n._domHandlers_[t] = function() {
		typeof n["on" + t] == "function" ? n["on" + t].apply(n, arguments) : console.warn('[WARNING] : Missing "on' + t + '" handler.')
	}, wn(e, lt[t], n._domHandlers_[t]), zt[t] && wn(e, zt[t], n._domHandlers_[t]), n
};
He.prototype.unbindEvt = function(e, t) {
	var n = this;
	return n._domHandlers_ = n._domHandlers_ || {}, ii(e, lt[t], n._domHandlers_[t]), zt[t] && ii(e, zt[t], n._domHandlers_[t]), delete n._domHandlers_[t], this
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
		t = mp("borderRadius", "50%"),
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
		r, s, u;
	if (t > n && t < n * 3 && !e.lockX ? r = "up" : t > -n && t <= n && !e.lockY ? r = "left" : t > -n * 3 && t <= -n && !e.lockX ? r = "down" : e.lockY || (r = "right"), e.lockY || (t > -o && t < o ? s = "left" : s = "right"), e.lockX || (t > 0 ? u = "up" : u = "down"), e.force > this.options.threshold) {
		var a = {},
			c;
		for (c in this.direction) this.direction.hasOwnProperty(c) && (a[c] = this.direction[c]);
		var i = {};
		this.direction = {
			x: s,
			y: u,
			angle: r
		}, e.direction = this.direction;
		for (c in a) a[c] === this.direction[c] && (i[c] = !0);
		if (i.x && i.y && i.angle) return e;
		(!i.x || !i.y) && this.trigger("plain", e), i.x || this.trigger("plain:" + s, e), i.y || this.trigger("plain:" + u, e), i.angle || this.trigger("dir dir:" + r, e)
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
		u = {
			x: n.parentIsFlex ? o.x : o.x + n.box.left,
			y: n.parentIsFlex ? o.y : o.y + n.box.top
		};
	if (e.x && e.y) r = {
		x: e.x - u.x,
		y: e.y - u.y
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
	return s.dataOnly || (ci(i.ui.el, r), ci(i.ui.front, i.frontPosition)), n.nipples.push(i), n.trigger("added " + i.identifier + ":added", i), n.manager.trigger("added " + i.identifier + ":added", i), n.bindNipple(i), i
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
	e = Kc(e), t.updateBox();
	var r = function(s) {
		t.actives.length < n.maxNumberOfNipples ? t.processOnStart(s) : o.type.match(/^touch/) && (Object.keys(t.manager.ids).forEach(function(u) {
			if (Object.values(o.touches).findIndex(function(c) {
					return c.identifier === u
				}) < 0) {
				var a = [e[0]];
				a.identifier = u, t.processOnEnd(a)
			}
		}), t.actives.length < n.maxNumberOfNipples && t.processOnStart(s))
	};
	return Do(e, r), t.manager.bindDocument(), !1
};
de.prototype.processOnStart = function(e) {
	var t = this,
		n = t.options,
		o, r = t.manager.getIdentifier(e),
		s = e.force || e.pressure || e.webkitForce || 0,
		u = {
			x: e.pageX,
			y: e.pageY
		},
		a = t.getOrCreate(r, u);
	a.identifier !== r && t.manager.removeIdentifier(a.identifier), a.identifier = r;
	var c = function(d) {
		d.trigger("start", d), t.trigger("start " + d.id + ":start", d), d.show(), s > 0 && t.pressureFn(e, d, d.identifier), t.processOnMove(e)
	};
	if ((o = t.idles.indexOf(a)) >= 0 && t.idles.splice(o, 1), t.actives.push(a), t.ids.push(a.identifier), n.mode !== "semi") c(a);
	else {
		var i = ln(u, a.position);
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
	if (!hp(e)) {
		this.processOnEnd(e);
		return
	}
	if (!r) {
		console.error("Found zombie joystick with ID " + o), t.manager.removeIdentifier(o);
		return
	}
	if (n.dynamicPage) {
		var u = r.el.getBoundingClientRect();
		r.position = {
			x: s.x + u.left,
			y: s.y + u.top
		}
	}
	r.identifier = o;
	var a = r.options.size / 2,
		c = {
			x: e.pageX,
			y: e.pageY
		};
	n.lockX && (c.y = r.position.y), n.lockY && (c.x = r.position.x);
	var i = ln(c, r.position),
		d = dp(c, r.position),
		l = To(d),
		m = i / a,
		f = {
			distance: i,
			position: c
		},
		v, h;
	if (r.options.shape === "circle" ? (v = Math.min(i, a), h = fp(r.position, v, d)) : (h = gp(c, r.position, a), v = ln(h, r.position)), n.follow) {
		if (i > a) {
			let b = c.x - h.x,
				C = c.y - h.y;
			r.position.x += b, r.position.y += C, r.el.style.top = r.position.y - (t.box.top + s.y) + "px", r.el.style.left = r.position.x - (t.box.left + s.x) + "px", i = ln(c, r.position)
		}
	} else c = h, i = v;
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
		raw: f,
		instance: r,
		lockX: n.lockX,
		lockY: n.lockY
	};
	y = r.computeDirection(y), y.angle = {
		radian: To(180 - d),
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
	t.ids = {}, t.index = 0, t.collections = [], t.scroll = ai(), t.config(e), t.prepareCollections();
	var n = function() {
		var r;
		t.collections.forEach(function(s) {
			s.forEach(function(u) {
				r = u.el.getBoundingClientRect(), u.position = {
					x: t.scroll.x + r.left,
					y: t.scroll.y + r.top
				}
			})
		})
	};
	wn(window, "resize", function() {
		si(n)
	});
	var o = function() {
		t.scroll = ai()
	};
	return wn(window, "scroll", function() {
		si(o)
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
	t = Kc(t);
	var s = function(a, c, i) {
			i.ids.indexOf(c) >= 0 && (i[r](a), a._found_ = !0)
		},
		u = function(a) {
			o = n.getIdentifier(a), Do(n.collections, s.bind(null, a, o)), a._found_ || n.removeIdentifier(o)
		};
	return Do(t, u), !1
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
const li = new ve,
	Hc = {
		create: function(e) {
			return li.create(e)
		},
		factory: li
	};

function wp(e, t, n) {
	const o = Hc.create({
		zone: e.mouseOverlay,
		multitouch: !0,
		maxNumberOfNipples: 2
	});
	let r = -1;
	const s = l => {
			e.fireKeyDown(l), r = l
		},
		u = () => {
			r !== -1 && (e.fireKeyUp(r), r = -1)
		},
		a = {},
		c = {},
		i = {};
	for (const l of n) l.event === "end:release" ? a[l.joystickId] = !0 : l.mapTo !== nr && (l.event === "tap" ? c[l.joystickId] = l.mapTo : o.on(l.event, () => {
		i[l.joystickId] = Date.now(), u(), s(l.mapTo)
	}));
	const d = {};
	return o.on("start", () => {
		const l = o.ids.length - 1;
		d[l] = Date.now()
	}), o.on("end", () => {
		const l = o.ids.length - 1,
			m = Date.now() - d[l];
		a[l] === !0 && u(), c[l] && m < 500 && i[l] < d[l] && e.fireKeyPress(c[l])
	}), () => o.destroy()
}

function $c(e, t, n, o, r, s) {
	const u = Math.round(o / 4);
	let a = !1;
	const c = () => {
			const v = a ? "flex" : "none";
			for (const h of d) h != l && (h.style.display = v)
		},
		i = () => {
			a = !a, c()
		},
		d = [xp(t, n), Te("keyboard", {
			onClick: () => {
				e.toggleKeyboard(), a && (a = !1, c())
			}
		}, o), Te("options", {
			onClick: i
		}, o)],
		l = d[d.length - 1],
		m = zc("emulator-options"),
		f = "none";
	for (const v of d) v !== l && v.classList.add("emulator-button-control"), v.style.marginRight = u + "px", v.style.marginBottom = u + "px", v !== l && (v.style.display = f), m.appendChild(v);
	return m.style.position = "absolute", m.style.right = s + "px", m.style.top = r + "px", e.mouseOverlay.appendChild(m), () => {
		e.mouseOverlay.removeChild(m)
	}
}

function xp(e, t) {
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
	}, Gf(n, !1), n
}

function Vc(e, t, n) {
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

function kp(e, t, n, o) {
	const r = Object.keys(n),
		s = {
			keyboard: () => {},
			mouse: () => {},
			gestures: () => {},
			buttons: () => {}
		},
		u = c => {
			s.keyboard(), s.mouse(), s.gestures(), s.buttons(), s.keyboard = () => {}, s.mouse = () => {}, s.gestures = () => {}, s.buttons = () => {};
			const i = n[c];
			i !== void 0 && (s.keyboard = Vc(t, o, i.mapper), i.gestures !== void 0 && i.gestures.length > 0 ? s.gestures = wp(t, o, i.gestures) : s.mouse = Fc(e.autolock, e.sensitivity, t, o), i.buttons !== void 0 && i.buttons.length && (s.buttons = tp(t, o, i.buttons, 54)))
		},
		a = t.options.optionControls?.length === 0 ? () => {} : $c(t, r, u, 54, 54 / 4, 0);
	return u("default"), () => {
		s.gestures(), s.buttons(), s.mouse(), s.keyboard(), a()
	}
}

function Cp(e) {
	switch (e) {
		case "square":
			return Sp();
		case "honeycomb":
			return Pp()
	}
	throw new Error("Unknown grid type " + e)
}

function Sp() {
	class e {
		aspect = 200 / 320;
		getConfiguration(n, o, r = 1) {
			const s = this.getCols(),
				u = this.getRows(),
				a = Math.floor(s / 2),
				c = Math.floor(u / 2),
				i = n * 5 / 100 / 2,
				d = i,
				l = (n - i * 2) / s * r,
				m = (o - d * 2) / u * r,
				f = Math.min(l, m),
				v = [];
			for (let h = 0; h < u; ++h) {
				const g = [];
				for (let _ = 0; _ < s; ++_) g.push({
					centerX: _ < a ? i + f * (_ + 1 / 2) : n - i - f * (s - _ - 1 + 1 / 2),
					centerY: h < c ? d + f * (h + 1 / 2) : o - d - f * (u - h - 1 + 1 / 2)
				});
				v.push(g)
			}
			return {
				gridType: "square",
				cells: v,
				columnWidth: f,
				rowHeight: f,
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

function Pp() {
	class e {
		aspect = 200 / 320;
		getConfiguration(n, o, r = 1) {
			const s = this.getCols(),
				u = this.getRows(),
				a = Math.floor(s / 2),
				c = Math.floor(u / 2),
				i = n * 5 / 100 / 2,
				d = i,
				l = (n - i * 2) / s * r,
				m = (o - d * 2) / u * r,
				f = Math.min(l, m),
				v = [];
			for (let h = 0; h < u; ++h) {
				const g = [],
					_ = h % 2 == 0 ? s : s - 1,
					y = h % 2 == 0 ? 0 : f / 2;
				for (let b = 0; b < _; ++b) g.push({
					centerX: b < a ? y + i + f * (b + 1 / 2) : y + n - i - f * (s - b - 1 + 1 / 2),
					centerY: h < c ? d + f * (h + 1 / 2) : o - d - f * (u - h - 1 + 1 / 2)
				});
				v.push(g)
			}
			return {
				gridType: "honeycomb",
				cells: v,
				columnWidth: f,
				rowHeight: f,
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

function Ep(e, t, n, o, r, s, u) {
	let a = t.layers[0];
	if (u !== void 0) {
		for (const c of t.layers)
			if (c.title === u) {
				a = c;
				break
			}
	}
	return Ap(a, e, n, o, r, s)
}
class Op {
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
const Mp = {
	Key: Tp,
	Options: Dp,
	Keyboard: Wc,
	Switch: jp,
	ScreenMove: Ip,
	PointerButton: Rp,
	PointerMove: Lp,
	PointerReset: Bp,
	PointerToggle: zp,
	NippleActivator: Np
};

function Ap(e, t, n, o, r, s) {
	const u = Vc(t, n),
		a = Fc(o.autolock, o.sensitivity, t, n),
		c = [];

	function i(d, l) {
		for (const _ of c) _();
		c.splice(0, c.length);
		const f = Cp(e.grid).getConfiguration(d, l, s),
			v = new Op;
		for (const _ of e.controls) {
			const {
				row: y,
				column: b,
				type: C
			} = _;
			C === "NippleActivator" && Fp(f, y, b)
		}
		let h = -1;
		if (t.options.optionControls?.length === 0)
			for (const _ of e.controls) {
				const {
					row: y,
					type: b
				} = _;
				if (b === "Options") {
					h = y;
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
				const C = f.cells[y].length,
					x = C / 2;
				y === h && b >= x && (b = Math.min(b + 1, C - 1)), g[y] === void 0 && (g[y] = {
					leftStart: x,
					leftEnd: 0,
					rightStart: C - 1,
					rightEnd: x
				}), b < x ? (g[y].leftStart = Math.min(g[y].leftStart, b), g[y].leftEnd = Math.max(g[y].leftEnd, b)) : (g[y].rightStart = Math.min(g[y].rightStart, b), g[y].rightEnd = Math.max(g[y].rightEnd, b))
			}
		for (const _ of e.controls) {
			const y = Mp[_.type];
			if (y === void 0) {
				console.error("Factory for control '" + _.type + "' is not defined");
				continue
			}
			const b = {
					..._
				},
				C = f.cells[_.row].length,
				x = C / 2;
			if (h === _.row && _.column >= x && (b.column = Math.min(b.column + 1, C - 1)), r) {
				const {
					leftStart: j,
					leftEnd: N,
					rightStart: F,
					rightEnd: K
				} = g[b.row], R = b.column < x;
				R ? b.column += x + (x - N) - j - 1 : b.column -= x + (F - x) - (C - K) + 1, b.column >= C ? (console.error("Column", b.column, "is out of bound", C, R ? "[leftSide]" : "[rightSide]", g), b.column = C - 1) : b.column < 0 && (console.error("Column", b.column, "is out of bound", 0, R ? "[leftSide]" : "[rightSide]", g), b.column = 0)
			}
			const D = y(b, t, n, f, v, o);
			c.push(D)
		}
	}
	return t.addOnResize(i), i(t.width, t.height), () => {
		t.removeOnResize(i), u(), a();
		for (const d of c) d()
	}
}

function Tp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i], m = {
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
	const f = Te(e.symbol, m, a);
	return f.style.position = "absolute", f.style.left = d - f.widthPx / 2 + "px", f.style.top = l - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), () => t.mouseOverlay.removeChild(f)
}

function Dp(e, t, n, o, r, s) {
	if (t.options.optionControls?.length === 0) return () => {};
	if (t.options.optionControls !== void 0 && t.options.optionControls.length === 1 && t.options.optionControls[0] === "keyboard") return Wc(e, t, n, o);
	const {
		cells: u,
		columnWidth: a,
		rowHeight: c
	} = o, {
		row: i,
		column: d
	} = e, {
		centerX: l,
		centerY: m
	} = u[i][d], f = m - c / 2, v = l - a / 2, h = o.width - v - a;
	return $c(t, ["default"], () => {}, a, f, h)
}

function Wc(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i], m = Te("keyboard", {
		onUp: () => t.toggleKeyboard()
	}, a);
	return m.style.position = "absolute", m.style.left = d - m.widthPx / 2 + "px", m.style.top = l - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), () => {
		t.mouseOverlay.removeChild(m)
	}
}

function jp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i], m = Te(e.symbol, {
		onUp: () => s.setActiveConfig(s.getActiveConfig(), e.layerName)
	}, a);
	return m.style.position = "absolute", m.style.left = d - m.widthPx / 2 + "px", m.style.top = l - m.heightPx / 2 + "px", t.mouseOverlay.appendChild(m), () => {
		t.mouseOverlay.removeChild(m)
	}
}

function Ip(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i];
	let m = .5,
		f = .5;
	e.direction.indexOf("up") >= 0 && (f = 0), e.direction.indexOf("down") >= 0 && (f = 1), e.direction.indexOf("left") >= 0 && (m = 0), e.direction.indexOf("right") >= 0 && (m = 1);
	const v = {
		onDown: () => {
			n.sendMouseMotion(m, f)
		},
		onUp: () => {
			n.sendMouseMotion(.5, .5)
		}
	};
	if (r.register(c, i, {
			activate: v.onDown,
			deactivate: v.onUp
		}), xt(o, c, i)) return () => {};
	const h = Te(e.symbol, v, a);
	return h.style.position = "absolute", h.style.left = d - h.widthPx / 2 + "px", h.style.top = l - h.heightPx / 2 + "px", t.mouseOverlay.appendChild(h), () => t.mouseOverlay.removeChild(h)
}

function Rp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i,
		click: d
	} = e, {
		centerX: l,
		centerY: m
	} = u[c][i], f = {
		onDown: () => {
			d ? n.sendMouseButton(e.button, !0) : t.pointerButton = e.button
		},
		onUp: () => {
			d ? n.sendMouseButton(e.button, !1) : t.pointerButton = 0
		}
	};
	if (r.register(c, i, {
			activate: f.onDown,
			deactivate: f.onUp
		}), xt(o, c, i)) return () => {};
	const v = Te(e.symbol, f, a);
	return v.style.position = "absolute", v.style.left = l - v.widthPx / 2 + "px", v.style.top = m - v.heightPx / 2 + "px", t.mouseOverlay.appendChild(v), () => t.mouseOverlay.removeChild(v)
}

function Lp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i,
		x: d,
		y: l
	} = e, {
		centerX: m,
		centerY: f
	} = u[c][i], v = {
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
	const h = Te(e.symbol, v, a);
	return h.style.position = "absolute", h.style.left = m - h.widthPx / 2 + "px", h.style.top = f - h.heightPx / 2 + "px", t.mouseOverlay.appendChild(h), () => t.mouseOverlay.removeChild(h)
}

function Bp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i], m = {
		onDown: () => {
			n.sendMouseSync()
		}
	};
	if (r.register(c, i, {
			activate: m.onDown,
			deactivate: () => {}
		}), xt(o, c, i)) return () => {};
	const f = Te(e.symbol, m, a);
	return f.style.position = "absolute", f.style.left = d - f.widthPx / 2 + "px", f.style.top = l - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), () => t.mouseOverlay.removeChild(f)
}

function zp(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a
	} = o, {
		row: c,
		column: i
	} = e, {
		centerX: d,
		centerY: l
	} = u[c][i], m = {
		onDown: () => {
			t.pointerDisabled = !t.pointerDisabled, t.pointerDisabled ? f.classList.contains("emulator-button-highlight") || f.classList.add("emulator-button-highlight") : f.classList.remove("emulator-button-highlight")
		}
	};
	if (r.register(c, i, {
			activate: m.onDown,
			deactivate: () => {}
		}), xt(o, c, i)) return () => {};
	const f = Te(e.symbol, m, a);
	return f.style.position = "absolute", f.style.left = d - f.widthPx / 2 + "px", f.style.top = l - f.heightPx / 2 + "px", t.mouseOverlay.appendChild(f), () => t.mouseOverlay.removeChild(f)
}

function Np(e, t, n, o, r, s) {
	const {
		cells: u,
		columnWidth: a,
		rowHeight: c,
		width: i,
		height: d
	} = o, {
		row: l,
		column: m
	} = e, {
		centerX: f,
		centerY: v
	} = u[l][m], h = document.createElement("div"), g = 1.5, _ = Math.max(0, f - a * g), y = Math.max(0, v - c * g), b = Math.max(0, i - f - a * g), C = Math.max(0, d - v - c * g);
	h.style.position = "absolute", h.style.zIndex = "999", h.style.left = _ + "px", h.style.top = y + "px", h.style.right = b + "px", h.style.bottom = C + "px", t.mouseOverlay.appendChild(h);
	const x = Hc.create({
		zone: h,
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
	let D = -1,
		j = -1;
	x.on("move", (R, q) => {
		if (q.distance < 10) {
			r.deactivate(j, D), D = -1, j = -1;
			return
		}
		let Z = -1,
			X = -1;
		const G = 360 / 8,
			se = G / 2,
			ue = q.angle.degree;
		ue > se && ue <= se + G ? (Z = m + 1, X = l - 1) : ue > se + G && ue <= se + G * 2 ? (Z = m, X = l - 1) : ue > se + G * 2 && ue <= se + G * 3 ? (Z = m - 1, X = l - 1) : ue > se + G * 3 && ue <= se + G * 4 ? (Z = m - 1, X = l) : ue > se + G * 4 && ue <= se + G * 5 ? (Z = m - 1, X = l + 1) : ue > se + G * 5 && ue <= se + G * 6 ? (Z = m, X = l + 1) : ue > se + G * 6 && ue <= se + G * 7 ? (Z = m + 1, X = l + 1) : (Z = m + 1, X = l), (D !== Z || j !== X) && (r.deactivate(j, D), r.activate(X, Z), D = Z, j = X)
	});
	let N = !1;
	x.on("start", () => {
		N = !0
	}), x.on("end", () => {
		N = !1, r.deactivate(j, D), j = -1, D = -1
	});
	const F = {
		capture: !0
	};

	function K(R) {
		N && x.processOnEnd(R)
	}
	for (const R of le.enders) t.mouseOverlay.addEventListener(R, K, F);
	return () => {
		x.destroy(), t.mouseOverlay.removeChild(h);
		for (const R of le.enders) t.mouseOverlay.removeEventListener(R, K, F)
	}
}

function xt(e, t, n) {
	return e.cells[t][n].hidden === !0
}

function Fp(e, t, n) {
	function o(r, s) {
		if (!(r === t && s === n) && r >= 0 && r < e.cells.length) {
			const u = e.cells[r];
			s >= 0 && s < u.length && (u[s].hidden = !0)
		}
	}
	for (let r = t - 1; r <= t + 1; ++r)
		for (let s = n - 1; s <= n + 1; ++s) o(r, s)
}

function Kp(e, t, n) {
	let o = 0,
		r = 0;
	const s = () => {
			Ur(e, o, r, n)
		},
		u = (c, i) => {
			o = c, r = i, s()
		};
	t.events().onFrameSize(u), t.events().onFrame(() => {
		console.error("onFrame should not be called")
	}), u(t.width(), t.height());
	const a = new ResizeObserver(s);
	return a.observe(e.parentElement), window.addEventListener("resize", s), () => {
		t.events().onFrameSize(() => {}), t.events().onFrame(() => {}), a.disconnect(), window.removeEventListener("resize", s)
	}
}

function Up(e, t) {
	Hp(t), $p(e), Yp(t), Gp(t), Wp(t), Vp(e, t), Qp(e, t), qp(e, t), Xp(t)
}

function Hp(e) {
	const t = Y();
	oe(() => {
		e.events().onMessage((n, ...o) => {
			n === "error" && o[0]?.startsWith("[panic]") && t(z.actions.showToast({
				message: o[0],
				intent: "panic"
			}))
		})
	}, [e, t])
}

function $p(e) {
	const t = M(n => n.dos.imageRendering);
	oe(() => {
		e.style.imageRendering = t === "smooth" ? "auto" : t
	}, [e, t])
}

function Vp(e, t) {
	const n = M(s => s.dos.mobileControls),
		o = M(s => s.dos.mouseCapture),
		r = M(s => s.dos.mouseSensitivity);
	oe(() => {
		if (!n) return qf()
	}, [e, t, o, r, n])
}

function Wp(e) {
	const t = Y(),
		n = M(o => o.dos.backend) === "dosboxX";
	oe(() => Nf(window, e, n, t), [e, n, t])
}

function qp(e, t) {
	const n = ge(),
		o = M(u => u.dos.renderBackend),
		r = M(u => u.dos.renderAspect);
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
			s = ka
	}
	oe(() => {
		let u = () => {};
		if (n.offscreenCanvas) u = Kp(e, t, s);
		else if (o === "canvas") u = oi(e, t, s);
		else try {
			u = Uf(e, t, n, s)
		} catch (a) {
			console.error("Unalbe to start webgl render", a), u = oi(e, t, s)
		}
		return u
	}, [e, t, o, s])
}

function Xp(e) {
	const t = Pe();
	oe(() => Wf(e, o => {
		let r = 1;
		const s = () => {
			const a = Fe(t).dos.volume;
			Math.abs(r - a) >= .05 && (o(a), r = a)
		};
		return t.subscribe(s)
	}), [e])
}

function Gp(e) {
	const t = M(o => o.dos.paused),
		n = M(o => o.ui.documentHidden);
	oe(() => {
		t || n ? e.pause() : e.resume()
	}, [t, n, e])
}

function Yp(e) {
	const t = Y(),
		n = Q();
	oe(() => {
		let o = 0,
			r = 0,
			s = 0,
			u = Pn,
			a = 0,
			c = 0,
			i = 0,
			d = 0,
			l = Date.now();
		const m = setInterval(() => {
			e.asyncifyStats().then(f => {
				const v = Date.now() - l,
					h = v / 1e3;
				if (h > 0) {
					const g = {
						offscreenCanvas: f.offscreenCanvas ?? !1,
						cyclesPerMs: Math.round((f.cycles - o) / v),
						nonSkippableSleepPreSec: Math.round((f.nonSkippableSleepCount - r) / h),
						sleepPerSec: Math.round((f.sleepCount - s) / h),
						sleepTimePerSec: Math.round((f.sleepTime - u) / h),
						framePerSec: Math.round((f.messageFrame - a) / h),
						soundPerSec: Math.round((f.messageSound - c) / h),
						msgSentPerSec: Math.round((f.messageSent - i) / h),
						msgRecvPerSec: Math.round((f.messageReceived - d) / h),
						netSent: f.netSent,
						netRecv: f.netRecv,
						driveIo: structuredClone(f.driveIo) ?? []
					};
					if (g.driveIo.length > 0) {
						let _ = n("preloading_sockdrive"),
							y = !1;
						for (let b = 0; b < g.driveIo.length; b++) {
							const C = g.driveIo[b],
								x = Math.min(100, Math.round(C.read * 100 / C.preload));
							_ += " " + (b === 0 ? "C: " : ", D: ") + " " + x + "%", y = y || x < 100
						}
						y && t(z.actions.showToast({
							message: _,
							long: !0
						}))
					}
					o = f.cycles, r = f.nonSkippableSleepCount, s = f.sleepCount, u = f.sleepTime, a = f.messageFrame, c = f.messageSound, i = f.messageSent, d = f.messageReceived, l = Date.now()
				}
			})
		}, 1e3);
		return () => {
			clearInterval(m)
		}
	}, [t, e])
}

function Qp(e, t) {
	const n = ge(),
		o = M(l => l.dos.mouseCapture),
		r = M(l => l.dos.mirroredControls),
		s = 1 + M(l => l.dos.scaleControls),
		u = .1 + M(l => l.dos.mouseSensitivity) * 3,
		a = M(l => l.dos.mobileControls),
		c = Y();
	let i = M(l => l.dos.softKeyboard);

	function d() {
		i = !i, c(I.actions.softKeyboard(i))
	}
	oe(() => {
		a ? n.layers === null ? (n.layers = (async function() {
			const l = new Yf(e.parentElement, e, d, {}),
				m = Nc((await t.config()).jsdosConf);
			let f, v = null,
				h = () => {};
			const g = {
				config: m,
				layers: l,
				autolock: o,
				sensitivity: u,
				mirroredControls: r,
				scaleControls: s,
				activeLayer: f,
				getActiveConfig: () => v,
				setActiveConfig: (_, y) => {
					v = _, f = y, h(), _ === null ? (h = () => {}, l.mouseOverlay.style.display = "none") : _.version === void 0 ? (l.mouseOverlay.style.display = "block", h = kp(g, l, _, t)) : (l.mouseOverlay.style.display = "block", h = Ep(l, _, t, g, g.mirroredControls, g.scaleControls, y))
				}
			};
			return g.setActiveConfig(m), g
		})(), n.layers.catch(console.error)) : n.layers.then(l => {
			l.autolock = o, l.sensitivity = u, l.mirroredControls = r, l.scaleControls = s, l.setActiveConfig(l.getActiveConfig() ?? l.config, l.activeLayer)
		}) : n.layers !== null && n.layers.then(l => l.setActiveConfig(null))
	}, [t, o, u, a, r, s])
}
const Zp = [{
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

function Jp(e) {
	const t = navigator.userAgent + " ";

	function n(f, v, h) {
		const g = RegExp(f, "i").exec(v);
		return g && g[h]
	}

	function o() {
		const f = {
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
		for (const [v, h] of Object.entries(f))
			for (const g of h.prefixs) {
				const _ = g + (h.regExp || "[/ ](.*?)[ \\)]");
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
		const f = {
			Android: ["Android ([0-9_.]+)"],
			Windows: ["Windows (.*?)[;)]"],
			iOS: ["iPhone OS ([0-9_.]+)", "iPad.*? OS ([0-9_.]+)"],
			macOS: ["Mac OS X ([0-9_.]+)"],
			Linux: ["FreeBSD( )", "OpenBSD( )", "Linux|X11()"],
			"Search Bot": ["bot|google|baidu|bing|msn|teoma|slurp|yandex"]
		};
		for (const [v, h] of Object.entries(f))
			for (const g of h) {
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
		u = r(),
		a = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion) || /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.userAgent) || /MacIntel/.test(navigator.platform) && navigator.maxTouchPoints !== void 0 && navigator.maxTouchPoints > 2,
		c = navigator.hardwareConcurrency,
		i = th(e),
		d = nh(),
		l = d.height,
		m = d.width;
	return {
		browser: s.name,
		browserVersion: s.version ?? "???",
		mobile: a,
		os: u.name,
		osVersion: u.version,
		gpu: i,
		deviceModel: eh(a, i, {
			width: m,
			height: l
		}),
		cpu: (c || 0).toString(),
		emscripten: "3.1.68"
	}
}

function eh(e, t, n) {
	return e ? t.match(/^apple+[a-zA-Z0-9_\s]+gpu$/i) ? oh(n) : rh(navigator.userAgent) : "desktop/laptop"
}

function th(e) {
	const t = e.getExtension("WEBGL_debug_renderer_info");
	return t && e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "-"
}

function nh() {
	const e = window.devicePixelRatio || 1;
	return {
		width: Math.min(screen.width, screen.height) * e,
		height: Math.max(screen.width, screen.height) * e
	}
}

function oh(e) {
	let t = "";
	for (const n of Zp) e.width === Math.min(n.width, n.height) && e.height === Math.max(n.width, n.height) && (t += t.length > 0 ? "/" + n.model : n.model);
	return t.length > 0 ? t : "unknown iPhone"
}

function rh(e) {
	const t = [/Android[\s][\d]+\.[\d]+\.[\d]+; [A-Za-z]{2}\-[A-Za-z]{2}\; (.+) Build/, /Android[\s][\d]+\.[\d]+\.[\d]+; (.+) Build/, /Android(.+)Build/];
	for (const n of t) {
		const o = e.match(n);
		if (o && o.length > 0) return o[1]
	}
	return "unknown Android"
}

function sh(e) {
	const t = e.ci,
		n = ge(),
		o = M(v => v.dos.backend),
		r = M(v => v.dos.worker),
		s = M(v => v.auth.account?.token),
		u = M(v => v.dos.emuVersion),
		a = M(v => v.dos.backendHardware) && n.options.backendHardware,
		[c, i] = te(!1),
		[d, l] = te({
			runs: 0,
			time: 0,
			vax: 0,
			pc: null
		}),
		[m, f] = te({
			sleepPerSec: 0,
			cyclesPerMs: 0
		});
	return oe(() => {
		const v = [];
		t.events().onStdout(b => {
			for (const C of v) C(b)
		});
		const h = t.events().onStdout;
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
				f({
					sleepPerSec: Math.round((R.sleepCount - _) * 1e3 / q),
					cyclesPerMs: Math.round((R.cycles - y) / q)
				}), g = Date.now(), _ = R.sleepCount, y = R.cycles
			});
			const [C, x, D, j] = b.split(" "), N = Number.parseInt(x), F = Number.parseFloat(D), K = Number.parseFloat(j);
			F >= 5e3 ? (l({
				runs: N,
				time: Math.round(F * 10) / 10,
				vax: Math.round(K * 100) / 100,
				pc: ih(K)
			}), (async () => {
				const R = n.gl;
				if (R) {
					const q = {
						token: s ?? "",
						test: "dhry2",
						jsdos: "8.3.20",
						emu: u,
						backend: o,
						worker: r,
						hardware: a !== !1 && a !== null && a !== void 0,
						result: Math.round(K * 100) / 100,
						...Jp(R)
					};
					await fetch(Jo + "/perf/set", {
						method: "POST",
						body: JSON.stringify(q)
					})
				}
			})().catch(console.error).finally(() => i(!0))) : l({
				runs: N,
				time: Math.round(F * 10) / 10,
				vax: Math.round(K * 100) / 100,
				pc: null
			})
		}), () => {
			t.events().onStdout = h
		}
	}, [t]), p("div", {
		class: "dhry2-window",
		children: [p("div", {
			class: "title",
			children: "Dhrystone 2 Benchmark"
		}), p("div", {
			class: "backend",
			children: ["Backend: ", o + "-" + (r ? "worker" : "direct"), " ", a ? "(WS)" : "(WA)"]
		}), p("div", {
			class: "results",
			children: [p("div", {
				children: "VAX:"
			}), p("div", {
				children: d.vax
			}), p("div", {
				children: "Cycles p/ms:"
			}), p("div", {
				children: m.cyclesPerMs
			}), p("div", {
				children: "Sleep p/sec:"
			}), p("div", {
				children: m.sleepPerSec
			}), p("div", {
				children: "Runs:"
			}), p("div", {
				children: d.runs
			}), p("div", {
				children: "Time:"
			}), p("div", {
				children: [d.time, " ", p("span", {
					children: "ms"
				})]
			}), c && d.pc !== null && p("div", {
				children: "PC:"
			}), c && d.pc !== null && p("div", {
				children: d.pc ?? "..."
			})]
		}), !c && p("div", {
			class: "mt-14 text-yellow-500",
			children: "Please wait until this message disappears"
		}), !c && !s && p("div", {
			class: "mt-14 text-yellow-500",
			children: "Please enter your key to submit results"
		})]
	})
}

function ih(e) {
	let t = 0;
	for (; t * 2 + 1 < tn.length && !(tn[t * 2 + 1] >= e);) t++;
	return t = Math.min(tn.length / 2 - 1, t), (tn[t * 2] + "").trim()
}
const tn = ["AMD 80386 40MHz", 13.7, "IBM 486D2 50MHz", 22.4, "80486 DX2 66MHz", 35.3, "IBM 486BL 100MHz", 40.9, "AMD 5X86 133MHz", 84.5, "Pentium 75MHz", 87.1, "Cyrix P150 120MHz", 160, "Pentium 100MHz", 122, "Cyrix PP166 133MHz", 180, "IBM 6x86 150MHz", 188, "Pentium 133MHz", 181, "Pentium 166MHz", 189, "Cyrix PR233 188MHz", 232, "Pentium 200MHz", 269, "Pentium MMX 200MHz", 276, "AMD K6 200MHz", 289, "Pentium Pro 200MHz", 312, "Celeron A 300MHz", 484, "Pentium II 300MHz", 477, "AMD K62 500MHz", 606, "AMD K63 450MHz", 645, "Pentium II 450MHz", 713, "Celeron A 450MHz", 720, "Pentium III 450MHz", 722, "Pentium III 600MHz", 959, "Athlon 600MHz", 942, "Duron 600MHz", 999, "Pentium III 1000MHz", 1595, "PIII Tualatin 1200MHz", 1907, "Pentium 4 1700MHz", 1843, "Athlon Tbird 1000MHz", 1659, "Duron 1000MHz", 1674, "Celeron M 1295MHz", 2273, "Atom 1600MHz", 1828, "Pentium 4 1900MHz", 2003, "Atom 1666MHz", 1948, "P4 Xeon 2200MHz", 2265, "Atom Z8300 1840MHz", 2686, "Athlon 4 1600MHz", 2830, "Pentium M 1862MHz", 3933, "Ath4 Barton 1800MHz", 3172, "Pentium 4E 3000MHz", 3553, "Athlon XP 2080MHz", 3700, "Turion 64 M 1900MHz", 3742, "Pentium 4 3066MHz", 4012, "Opteron 1991MHz", 3985, "Core 2 Duo M 1830MHz", 4952, "Athlon XP 2338MHz", 4160, "Athlon 64 2150MHz", 4288, "Pentium 4 3678MHz", 4227, "Athlon 64 2211MHz", 4462, "Celeron C2 M 2000MHz", 5275, "Core 2 Duo 1 CP 2400MHz", 6446, "Core i5 2467M 2300MHz", 4752, "Phenom II 1 CP 3000MHz", 7615, "Core i7 930 3066MHz", 8684, "Core i7 860 3460MHz", 9978, "Core i7 3930K 3800MHz", 11197, "Core i7 4820K 3900MHz", 11867, "Core i7 4820K 3900MHz", 11978, "Core i7 3930K", 13877],
	ah = 1.2297,
	nn = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~", '"'],
	ho = [91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 62, 90, 63, 64, 65, 66, 91, 67, 68, 69, 70, 71, 91, 72, 73, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 74, 75, 76, 77, 78, 79, 80, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 81, 91, 82, 83, 84, 85, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 86, 87, 88, 89, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91, 91];
let on = 0;
const ui = {
		encode: function(e) {
			const t = e.length;
			let n = "",
				o = 0,
				r = 0,
				s = 0;
			for (on = 0; on < t; ++on) o |= (e[on] & 255) << r, r += 8, r > 13 && (s = o & 8191, s > 88 ? (o >>= 13, r -= 13) : (s = o & 16383, o >>= 14, r -= 14), n += nn[s % 91], n += nn[s / 91 | 0]);
			return r > 0 && (n += nn[o % 91], (r > 7 || o > 90) && (n += nn[o / 91 | 0])), n
		},
		decode: function(e) {
			let t = e.length;
			const n = t / ah | 0;
			let o = 0,
				r = 0,
				s = -1,
				u = 0,
				a = -1,
				c = 0,
				i = new Array(n);
			for (u = 0; u < t; ++u)
				if (c = e.charCodeAt(u), ho[c] !== 91)
					if (s === -1) s = ho[c];
					else {
						s += ho[c] * 91, o |= s << r, r += (s & 8191) > 88 ? 13 : 14;
						do ++a >= n ? i.push(o & 255) : i[a] = o & 255, o >>= 8, r -= 8; while (r > 7);
						s = -1
					} s !== -1 && (++a >= n ? i.push(o | s << r) : i[a] = o | s << r), a > -1 && a < n - 1 && (i = i.slice(0, a + 1));
			const d = new Uint8Array(i.length);
			for (u = 0, t = i.length; u < t; ++u) d[u] = i[u];
			return d
		}
	},
	$e = new TextDecoder,
	rn = new TextEncoder,
	di = 2e8,
	ch = ["wc-install", "wc-run", "wc-pack-fs-to-bundle", "wc-add-key", "wc-mouse-move", "wc-mouse-button", "wc-mouse-sync", "wc-exit", "wc-sync-sleep", "wc-pause", "wc-resume", "wc-mute", "wc-unmute", "wc-connect", "wc-disconnect", "wc-backend-event", "wc-asyncify-stats", "wc-fs-tree", "wc-fs-get-file", "wc-send-data-chunk", "wc-net-connected", "wc-net-received", "wc-sockdrive-opened", "wc-sockdrive-new-range", "wc-unload"],
	jo = {};
ch.forEach((e, t) => jo[e] = t);
const lh = ["ws-extract-progress", "ws-ready", "ws-server-ready", "ws-frame-set-size", "ws-update-lines", "ws-log", "ws-warn", "ws-err", "ws-stdout", "ws-exit", "ws-persist", "ws-sound-init", "ws-sound-push", "ws-config", "ws-sync-sleep", "ws-connected", "ws-disconnected", "ws-asyncify-stats", "ws-fs-tree", "ws-send-data-chunk", "ws-net-disconnect", "ws-net-send", "ws-sockdrive-open", "ws-sockdrive-ready", "ws-sockdrive-close", "ws-sockdrive-load-range", "ws-sockdrive-write-sector", "ws-unload"],
	qc = {};
lh.forEach((e, t) => qc[t] = e);
class uh {
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
		const u = d => {
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
					for (const f of s) l.set(f, m), m += f.length;
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
					u(m)
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
class fi {
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
		for (const u of n) o += 4 + (u?.length ?? 0);
		const r = new Uint8Array(o);
		r[0] = typeof t == "string" ? jo[t] : t;
		let s = 1;
		for (const u of n) ae(r, u?.length ?? 0, s), s += 4, u && (r.set(u, s), s += u.length);
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
		} = this.readMessage(t), r = qc[n];
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
					for (const u of o) s.push({
						start: re(u, 0),
						heapu8: u.slice(4)
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
						const f = d[m];
						if (l = l.nodes?.find(v => v.name == f), !l) throw new Error("Unable to find node " + i + ", subdir " + f)
					}
					return [l, d[d.length - 1]]
				};
				const u = [];
				for (let i = 0; i < o.length - 1; ++i) u.push({
					name: $e.decode(o[i]),
					size: null
				});
				const a = o[o.length - 1];
				for (let i = 0; i < u.length; ++i) {
					const d = re(a, i * 4);
					u[i].size = d < 0 ? null : d
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
					of u) {
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
				this.sendMessageToSocket(o, rn.encode(r))
			}
			break;
			case "wc-send-data-chunk": {
				const r = n.chunk;
				this.sendMessageToSocket(o, rn.encode(r.type), rn.encode(r.name), r.data ? new Uint8Array(r.data) : null)
			}
			break;
			case "wc-asyncify-stats":
				this.sendMessageToSocket(o);
				break;
			case "wc-add-key": {
				const r = new Uint8Array(12);
				let s = 0;
				s = ae(r, n.key, s), s = ae(r, n.pressed ? 1 : 0, s), ae(r, n.timeMs, s), this.sendMessageToSocket(o, r)
			}
			break;
			case "wc-mouse-move": {
				const r = new Uint8Array(15);
				let s = 0;
				s = ae(r, Math.abs(n.x) * di, s), s = ae(r, Math.abs(n.y) * di, s), s = ae(r, n.timeMs, s), r[s] = n.relative ? 1 : 0, r[s + 1] = n.x >= 0 ? 0 : 1, r[s + 2] = n.y >= 0 ? 0 : 1, this.sendMessageToSocket(o, r)
			}
			break;
			case "wc-mouse-button": {
				const r = new Uint8Array(6);
				r[0] = n.button, r[1] = n.pressed ? 1 : 0, ae(r, n.timeMs, 2), this.sendMessageToSocket(o, r)
			}
			break;
			case "wc-mouse-sync": {
				const r = new Uint8Array(4);
				ae(r, n.timeMs, 0), this.sendMessageToSocket(o, r)
			}
			break;
			case "wc-connect":
				this.sendMessageToSocket(o, new Uint8Array([n.networkType]), rn.encode(n.address));
				break;
			case "wc-fs-tree":
				this.sendMessageToSocket(o);
				break;
			case "wc-pack-fs-to-bundle":
				this.sendMessageToSocket(o, new Uint8Array([n.onlyChanges ? 1 : 0]));
				break;
			case "wc-net-connected": {
				const r = new Uint8Array(4);
				ae(r, n.networkId + 1, 0), this.sendMessageToSocket(o, r)
			}
			break;
			case "wc-net-received": {
				const r = new Uint8Array(4);
				ae(r, n.networkId, 0), this.sendMessageToSocket(o, r, new Uint8Array(n.data))
			}
			break;
			case "wc-sockdrive-opened": {
				const {
					handle: r,
					sectorSize: s,
					emptyRangesCount: u,
					emptyRanges: a,
					size: c,
					heads: i,
					cylinders: d,
					sectors: l,
					aheadRange: m
				} = n, f = new Uint8Array(12 + 4 * u + 4 + 4 + 4 + 4 + 4);
				let v = 0;
				v = ae(f, r, v), v = ae(f, s, v), v = ae(f, u, v);
				for (const h of a) v = ae(f, h, v);
				v = ae(f, c, v), v = ae(f, i, v), v = ae(f, d, v), v = ae(f, l, v), v = ae(f, m, v), this.sendMessageToSocket(o, f)
			}
			break;
			case "wc-sockdrive-new-range": {
				const {
					handle: r,
					range: s,
					buffer: u
				} = n, a = new Uint8Array(8);
				ae(a, r, 0), ae(a, s, 4), this.sendMessageToSocket(o, a, new Uint8Array(u))
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

function dh(e, t) {
	return new Promise(n => {
		let o = !1;
		const r = setInterval(() => {
			if (!o)
				if (o = !0, e === "android://") clearInterval(r), console.log("Connected to", e), n(new fi(new fh, t));
				else {
					const s = new WebSocket(e),
						u = () => {
							clearInterval(r), console.log("Connected to", e), n(new fi(new uh(s), t))
						};
					s.addEventListener("error", a => {
						console.error("Can't conect to ", e, a), s.removeEventListener("open", u), s.close(), o = !1
					}), s.addEventListener("open", u)
				}
		}, 1e3)
	})
}
class fh {
	handler = () => {};
	constructor() {
		window.wsMessage = t => {
			this.handler(ui.decode(t))
		}
	}
	send(t) {
		window.android.wcMessage(ui.encode(t))
	}
	onMessage(t) {
		this.handler = t
	}
	onError(t) {}
}

function ph(e) {
	const {
		ci: t
	} = e, n = M(f => f.dos.softKeyboard), o = M(f => f.dos.softKeyboardLayout), r = M(f => f.dos.softKeyboardSymbols), s = M(f => f.dos.softKeyboardActiveSymbols), u = M(f => f.dos.softKeyboardActiveLayout), a = Y(), c = r[s % r.length], i = o[u % o.length];
	if (!n || t === null) return null;

	function d(f, v) {
		if (t !== null)
			if (f === "{symbols}") {
				if (v) {
					const h = (s + 1) % r.length;
					h !== s && a(I.actions.softKeyboardActiveSymbols(h))
				}
			} else if (f === "{layout}") {
			if (v) {
				const h = (u + 1) % o.length;
				h !== u && a(I.actions.softKeyboardActiveLayout(h))
			}
		} else
			for (const h of hh(f)) t.sendKeyEvent(h, v)
	}

	function l(f) {
		return f.length > 2 && f.startsWith("{") && f.endsWith("}") ? f[1].toUpperCase() + f.substring(2, f.length - 1) : f
	}
	let m = 0;
	return p("div", {
		className: "soft-keyboard-overlay fixed bottom-0 left-0 w-full h-[80vh]  z-50 bg-base-200 bg-opacity-0 flex flex-col p-2 overflow-y-auto",
		children: p("div", {
			className: "flex flex-row justify-between w-full px-4",
			children: [p("div", {
				className: "flex flex-col gap-3 items-start",
				children: i[0].map((f, v) => p("div", {
					className: "flex flex-row gap-2 items-center",
					children: f.split(" ").map(h => {
						const g = c[h] ?? r[0][h] ?? l(h),
							_ = "keyhelo" + ++m;
						return p("kbd", {
							id: _,
							className: "kbd kbd-md cursor-pointer select-none transition-transform active:scale-95",
							onPointerDown: () => d(h, !0),
							onPointerUp: () => d(h, !1),
							children: g
						}, h)
					})
				}, v))
			}), p("div", {
				className: "flex flex-col gap-3 items-end",
				children: i[1].map((f, v) => p("div", {
					className: "flex flex-row gap-2 items-center",
					children: f.split(" ").map(h => {
						const g = c[h] ?? r[0][h] ?? l(h),
							_ = "keyhelo" + ++m;
						return p("kbd", {
							id: _,
							className: "kbd kbd-md cursor-pointer select-none transition-transform active:scale-95",
							onPointerDown: () => d(h, !0),
							onPointerUp: () => d(h, !1),
							children: g
						}, h)
					})
				}, v))
			})]
		})
	})
}

function hh(e) {
	switch (e) {
		case "{enter}":
			return [Or];
		case "{shift}":
			return [De];
		case "{bksp}":
			return [Er];
		case "{lock}":
			return [Oc];
		case "{tab}":
			return [En];
		case "{space}":
			return [Mr];
		case "{esc}":
			return [Pr];
		case "{ctrl}":
			return [Ut];
		case "{alt}":
			return [_t];
		case "{up}":
			return [Nr];
		case "{down}":
			return [Fr];
		case "{left}":
			return [zr];
		case "{right}":
			return [Kr];
		case ",":
			return [Dr];
		case ".":
			return [Tr];
		case "/":
			return [jr];
		case "'":
			return [Ar];
		case ":":
			return [De, bn];
		case "{":
			return [De, _n];
		case "}":
			return [De, yn];
		case "(":
			return [De, or];
		case ")":
			return [De, Pn];
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
			return [gn];
		case "=":
			return [Bt];
		case "+":
			return [De, Bt];
		default:
			if (e.length > 1) return console.warn("Unknown button", e), []
	}
	const t = Ao(e.toUpperCase().charCodeAt(0), 0);
	return t === 0 ? [] : [t]
}
async function mh(e) {
	const t = (e.options.pathPrefix ? e.options.pathPrefix + "jsapi.mjs" : "jsapi.mjs") + (e.options.pathSuffix ?? ""),
		n = (e.options.pathPrefix ? e.options.pathPrefix + "jsapi.wasm" : "jsapi.wasm") + (e.options.pathSuffix ?? ""),
		o = await (await fetch(t)).text(),
		r = URL.createObjectURL(new Blob([o], {
			type: "text/javascript"
		}));
	return new Promise((s, u) => {
		if (window.HumbleNet === void 0) {
			const a = document.createElement("script");
			a.type = "module", a.text = `
import HumbleNet from "${r}";
window.HumbleNetImpl = HumbleNet;
`, a.onerror = u, document.body.appendChild(a);
			const c = setInterval(() => {
				window.HumbleNetImpl !== void 0 && (clearInterval(c), URL.revokeObjectURL(r), window.HumbleNet = () => HumbleNetImpl({
					locateFile: i => i.endsWith(".wasm") ? n : i
				}), s())
			}, 1e3)
		} else s()
	})
}
async function vh(e, t, n, o, r, s) {
	await mh(s);
	const u = await HumbleNet();
	u.onNetworkError = o;
	const a = (d, l) => {
			const m = u.lengthBytesUTF8(d) + 1,
				f = u.stringToNewUTF8(d);
			l(f, m), u._free(f)
		},
		c = (d, l) => {
			const m = d.byteLength,
				f = u._malloc(m);
			u.HEAPU8.set(d, f);
			const v = l(f, m);
			return u._free(f), v
		},
		i = {};
	return u.aliasQueryAdd = (d, l, m) => {
		i[d].matches.push({
			alias: l,
			peerId: m
		})
	}, u.onAliasQueryEnd = d => {
		i[d].resolve(i[d].matches), delete i[d]
	}, new Promise((d, l) => {
		a(e, m => {
			a(t, f => {
				a(n, v => {
					try {
						if (u._connectTo(m, f, v)) {
							const g = u._malloc(4194304),
								_ = u._malloc(4),
								y = {
									lib: u,
									peerId: 0,
									connected: new Set,
									wait: C => {
										u._wait(C)
									},
									registerAlias: C => u.pendingRegister ? Promise.reject(new Error("Register already in progress")) : (u.pendingRegister = new Promise((x, D) => {
										a(C, j => {
											u._registerAlias(j)
										}), y.queryAliases("=" + C).then(j => {
											j.length === 1 && j[0].peerId === y.peerId ? x() : D(new Error("Alias already in use"))
										}).catch(D)
									}), u.pendingRegister.finally(() => {
										u.pendingRegister = null
									})),
									unregisterAlias: C => {
										a(C, x => {
											u._unregisterAlias(x)
										})
									},
									queryAliases: C => (i[C] !== void 0 || (i[C] = {
										matches: []
									}, i[C].promise = new Promise(x => {
										i[C].resolve = x, a(C, D => {
											u._queryAliases(D)
										})
									})), i[C].promise),
									sendBinary: (C, x) => {
										if (x === y.peerId || x === 0) throw new Error("Cannot send to self (" + x + ")");
										return y.connected.add(x), c(C, (D, j) => u._sendto(D, j, x, 0))
									},
									recvBinary: () => {
										const C = u._recvfrom(g, 4194304, _),
											x = u.HEAP32[_ / 4];
										return C < 0 ? (x !== 0 && y.connected.delete(x), null) : C > 0 ? (y.connected.add(x), {
											data: u.HEAPU8.slice(g, g + C),
											peerId: x
										}) : null
									},
									disconnect: C => {
										u._disconnect(C)
									},
									shutdown: () => {
										try {
											u._shutdown()
										} catch {}
									}
								};
							window.net = y;
							const b = setInterval(() => {
								if (y.peerId = u._myId(), y.peerId !== 0) {
									clearInterval(b), d(y);
									const C = setInterval(() => {
										u._myId() === 0 && (r(), clearInterval(C))
									}, 1e3)
								}
								y.wait(4)
							}, 30)
						} else l(new Error("Failed to connect to HumbleNet"))
					} catch (h) {
						l(h)
					}
				})
			})
		})
	})
}

function gh(e) {
	const t = Ae(null),
		[n, o] = te(null),
		r = M(b => b.auth.account?.token) ?? "",
		s = M(b => b.dos.worker),
		u = M(b => b.dos.backend),
		a = M(b => b.dos.backendHardware),
		c = M(b => b.dos.noCursor),
		i = M(b => b.ui.pointerLocked),
		d = M(b => b.dos.mouseCapture),
		l = Y(),
		m = ge(),
		f = le.canLock && d && !i ? "cursor-pointer" : c ? "cursor-none" : "",
		v = M(b => b.dos.offscreenCanvas),
		h = M(b => b.dos.sockdrivePreload),
		g = M(b => b.dos.startIpxServer),
		_ = M(b => b.dos.connectIpxAddress),
		y = Q();
	return oe(() => {
		try {
			const b = m.loadedBundle;
			let C = b.bundleChanges !== null ? [b.bundle, b.bundleChanges] : b.bundle;
			if (b.initFs !== null)
				if (Array.isArray(C) || (C = [C]), Array.isArray(b.initFs))
					for (const j of b.initFs) C.push(j);
				else C.push(b.initFs);
			b.bundle = null, b.bundleChanges = null, b.appliedBundleChanges = null, b.initFs = null;
			let x = 0;
			const D = (async () => {
				if (a && m.options.backendHardware)
					if (u === "dosboxX") console.error("backendHardware is not supported for dosboxX");
					else {
						const j = await m.options.backendHardware(u);
						if (j !== null) return emulators.backend(C, await dh(j, N => {
							N < Qs && l(z.actions.updateWsWarning(!0)), console.log("wsServer:", N, " expected:", Qs)
						}), {
							token: r
						})
					} if (v && t.current !== null && typeof t.current.transferControlToOffscreen == "function" && (m.offscreenCanvas = t.current.transferControlToOffscreen()), m.net?.shutdown(), g || _) {
					const j = g ? y("create_server") : y("lookup_address") + ": " + _;
					if (l(z.actions.modalText({
							text: j
						})), m.net = await vh(ld, ud, dd, N => console.log("network error for peer", N), () => console.log("network disconnected"), m), _) {
						const N = m.net;
						Number.parseInt(_) ? x = Number.parseInt(_) : x = await new Promise(K => {
							const R = async () => {
								const q = await N.queryAliases("=" + _);
								q.length === 1 ? K(q[0].peerId) : setTimeout(R, 100)
							};
							setTimeout(R, 4)
						})
					}
					l(z.actions.modalTextClear())
				} else m.net = void 0;
				return emulators[(u !== "dosbox" && u !== "dosboxX" ? "dosbox" : u) + (s ? "Worker" : "Direct")](C, {
					token: r,
					canvas: m.offscreenCanvas,
					audioWorklet: !0,
					sockdrivePreload: h,
					net: m.net
				})
			})();
			return D.then(j => {
				o(j), l(I.actions.ci(!0)), le.mobile && j.config().then(N => {
					l(I.actions.mobileControls(Nc(N.jsdosConf) !== null))
				}).catch(N => l(I.actions.emuError(N.message))), m.ci = j, g ? j.sendBackendEvent({
					type: "wc-trigger-event",
					event: "hand_ipx_startserver"
				}) : _ && m.net && (l(z.actions.modalText({
					text: y("connect_to_network") + ": " + _
				})), j.events().onNetworkConnected(() => {
					l(z.actions.modalTextClear())
				}), j.events().onNetworkDisconnected(() => {
					l(z.actions.modalText({
						text: y("unable_to_connect_to_network"),
						loading: !1
					})), j.exit()
				}), j.networkConnect(0, x.toString())), Kt(m, "ci-ready", j)
			}).catch(j => l(I.actions.emuError(j.message))), () => {
				D.then(j => {
					l(I.actions.ci(!1)), m.ci = null, j.exit()
				})
			}
		} catch (b) {
			l(I.actions.emuError(b.message))
		}
	}, [s, u, r, v, h, g, _]), p("div", {
		class: "flex flex-col flex-grow h-full overflow-hidden",
		children: [p("div", {
			class: "bg-black h-full flex-grow overflow-hidden relative",
			children: [p("canvas", {
				class: f,
				ref: t
			}), t.current && n && p(bh, {
				canvas: t.current,
				ci: n
			}), p(_h, {}), p(yh, {})]
		}), p(ph, {
			ci: n
		})]
	})
}

function _h() {
	const e = M(o => o.ui.pointerLocked),
		t = M(o => o.dos.mouseCapture);
	M(o => o.dos.mouseSensitivity);
	const n = M(o => o.ui.clickToLockModal);
	return Q(), e || !le.canLock || !t || n, null
}

function yh() {
	const e = M(n => n.ui.modalText),
		t = M(n => n.ui.modalTextLoading);
	return e ? p("div", {
		class: "absolute top-0 left-0 w-full h-full flex flex-row items-center justify-center pointer-events-none bg-black/70 gap-2 px-4 py-2 text-white text-center",
		children: [t && p("span", {
			class: "loading loading-spinner loading-md"
		}), p("div", {
			class: "text-4xl",
			children: e
		})]
	}) : null
}

function bh(e) {
	const {
		canvas: t,
		ci: n
	} = e, o = M(r => r.dos.bundle);
	return Up(t, n), p(pe, {
		children: [p(wh, {
			ci: n
		}), _a(o) && p(sh, {
			ci: n
		})]
	})
}
let pi = () => {};

function wh(e) {
	const t = e.ci,
		n = Q(),
		o = Pe(),
		r = ge(),
		[s, u] = te(!1),
		[a, c] = te(!1),
		[i, d] = te(null);
	return oe(() => {
		if (i !== null) {
			c(!0);
			const l = () => {
				c(!1), pi()
			};
			i ? gt(o.getState(), r, o.dispatch, !0).catch(console.error).finally(l) : l()
		}
	}, [i]), oe(() => {
		t.events().onUnload(() => new Promise(l => {
			u(!0), pi = l
		}))
	}, [t]), s ? p("dialog", {
		id: "save-dialog",
		className: "modal",
		open: !0,
		children: p("div", {
			className: "modal-box",
			children: [p("h3", {
				className: "font-bold text-lg",
				children: n("emulation_ended")
			}), p("p", {
				className: "py-4",
				children: n("confirm_save")
			}), p("div", {
				className: "modal-action",
				children: p("form", {
					method: "dialog",
					className: "join",
					children: [p("button", {
						className: "btn btn-neutral join-item",
						onClick: () => {
							u(!1), d(!1)
						},
						children: n("close")
					}), p("button", {
						className: "btn btn-primary join-item",
						onClick: () => {
							u(!1), d(!0)
						},
						children: n("save")
					})]
				})
			})]
		})
	}) : a ? p("dialog", {
		id: "busy-dialog",
		className: "modal",
		open: !0,
		children: p("div", {
			className: "modal-box",
			children: [p("h3", {
				className: "font-bold text-lg",
				children: n("emulation_ended")
			}), p("div", {
				class: "flex flex-row gap-4 py-4 items-center",
				children: [p("span", {
					class: "loading loading-spinner loading-lg"
				}), p("p", {
					children: n("saving_game")
				})]
			})]
		})
	}) : null
}

function xh(e) {
	const t = Q(),
		n = e.error ?? "Unexpected error";
	return p("div", {
		class: "flex-grow flex flex-col items-center justify-center px-8 m-auto",
		children: [p("div", {
			class: "text-2xl text-center",
			children: t("error")
		}), p("div", {
			class: "text-red-400 mt-8 text-2xl text-center",
			children: ['"', n, '"']
		}), p("div", {
			class: "mt-8 text-sm text-center",
			children: t("consult_logs")
		}), e.onSkip && p("button", {
			class: "mt-8 btn-primary",
			onClick: e.onSkip,
			children: t("skip")
		})]
	})
}

function kh() {
	const e = M(t => t.dos.error);
	return p(xh, {
		error: e
	})
}

function hi(e) {
	const {
		head: t,
		message: n
	} = e;
	return p("div", {
		class: "flex flex-col items-center justify-center frame-color px-8",
		children: [p("div", {
			class: "text-2xl text-center",
			children: t
		}), p("div", {
			class: "mt-2 text-center",
			children: n
		})]
	})
}

function sn(e) {
	return e < 1024 ? e + "b" : (e /= 1024, e < 1024 ? Math.round(e) + "kb" : (e /= 1024, Math.round(e * 10) / 10 + "mb"))
}

function Ch() {
	const e = Q(),
		t = M(i => i.dos.step),
		n = M(i => i.storage.recived),
		o = M(i => i.storage.total),
		r = M(i => i.storage.changedRecived),
		s = M(i => i.storage.changedTotal);
	let u = e("loading"),
		a = "100%",
		c = "";
	switch (t) {
		case "bnd-load":
			u = e("bundle_loading"), n > 0 && (a = `${sn(n)} / ${sn(o)}`, o > 0 && (a += ` (${Math.round(n*1e3/o)/10}%)`)), r > 0 && (c = `${sn(r)} / ${sn(s)}`, s > 0 && (c += ` (${Math.round(r*1e3/s)/10}%)`));
			break;
		case "bnd-config":
			u = e("bundle_config")
	}
	return p("div", {
		class: "flex flex-col w-full h-full items-center justify-center",
		children: [p(hi, {
			head: u,
			message: a
		}), c !== "" && p(pe, {
			children: [p("br", {}), p(hi, {
				head: e("changes"),
				message: c
			})]
		})]
	})
}

function Sh() {
	const e = Q(),
		t = Pe(),
		[n, o] = te(!1);
	if (n) return p("div", {
		class: "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8 py-8",
		children: p(Ph, {})
	});
	async function r() {
		try {
			await Rd(t).catch(console.error)
		} catch (a) {
			t.dispatch(I.actions.bndError(a.message ?? "unexpected error"))
		}
	}
	async function s(a) {
		if (a.files === null || a.files.length === 0) return;
		const c = a.files[0];
		try {
			await Bd(c, t).catch(i => t.dispatch(I.actions.bndError(i.message)))
		} catch (i) {
			t.dispatch(I.actions.bndError(i.message ?? "unexpected error"))
		}
	}

	function u() {
		Rc(s)
	}
	return p("div", {
		class: "select-window overflow-hidden flex-grow flex flex-col items-center justify-center px-8",
		children: [p("div", {
			class: "mb-4 text-center underline cursor-pointer hover:text-accent",
			onClick: () => o(!0),
			children: e("load_by_url")
		}), p(Eh, {
			onUpload: u
		}), p("div", {
			class: "mt-4 text-center",
			children: e("upload_file")
		}), p("div", {
			class: "flex flex-row flex-wrap gap-4",
			children: [p("div", {
				class: "mt-4 text-center underline cursor-pointer hover:text-accent",
				onClick: u,
				children: e("load_archive")
			}), p("div", {
				class: "mt-4 text-center underline cursor-pointer hover:text-accent",
				onClick: r,
				children: e("create_empty")
			})]
		}), p("div", {
			class: "mt-4 text-center",
			children: [e("sockdrives"), ":"]
		}), p("div", {
			class: "flex flex-row flex-wrap gap-4",
			children: [{
				url: "https://br.cdn.dos.zone/js-dos/system/system-dos7.1-v1.jsdos",
				label: "DOS v7.1"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win311-v1.jsdos",
				label: "Windows 3.11"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win311-ru.jsdos",
				label: "Windows 3.11 (RU)"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win95-v1.jsdos",
				label: "Windows 95"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win95-v2.jsdos",
				label: "Windows 95 (DT)"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win95-lock.jsdos",
				label: "Windows 95 (LOCK, DT)"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win95-ru.jsdos",
				label: "Windows 95 (RU)"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win95-ru-lock.jsdos",
				label: "Windows 95 (RU, DT, LOCK)"
			}, {
				url: "https://br.cdn.dos.zone/js-dos/system/system-win98-v1.jsdos",
				label: "Windows 98 (DT)"
			}].map(({
				url: a,
				label: c
			}) => p("a", {
				href: a,
				target: "_blank",
				class: "mt-4 text-center underline cursor-pointer hover:text-accent",
				children: c
			}))
		})]
	})
}

function Ph() {
	const e = Q(),
		t = Pe(),
		n = Y(),
		[o, r] = te(""),
		[s, u] = te(null);
	async function a(c) {
		n(z.actions.frameNone());
		let i;
		try {
			i = new URL(c)
		} catch (d) {
			u(d.message);
			return
		}
		try {
			await Lt(i.toString(), t)
		} catch (d) {
			n(I.actions.bndError(d.message ?? "unexpected error"))
		}
	}
	return p(pe, {
		children: [p("div", {
			class: "form-control w-3/4 mb-4",
			children: [p("label", {
				class: "label",
				children: p("span", {
					class: "label-text",
					children: [e("enter_url"), ":"]
				})
			}), p("input", {
				type: "text",
				class: "input w-full input-sm input-bordered",
				onChange: c => r(c.currentTarget.value ?? ""),
				value: o
			})]
		}), p("div", {
			class: "mt-4 text-center underline cursor-pointer hover:text-accent",
			onClick: () => a(o),
			children: e("load")
		}), s !== null && p("div", {
			class: "mt-8 text-center text-error",
			children: s
		})]
	})
}

function Eh(e) {
	return p("div", {
		class: "cursor-pointer",
		onClick: e.onUpload,
		children: p("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			fill: "none",
			viewBox: "0 0 24 24",
			"stroke-width": "1.5",
			stroke: "currentColor",
			class: "w-48 h-48 play-button",
			children: p("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
			})
		})
	})
}

function Oh(e) {
	const t = M(m => m.ui.frame) !== "none",
		n = M(m => m.ui.frameXs),
		o = M(m => m.ui.window),
		r = M(m => m.ui.background),
		s = M(m => m.ui.kiosk),
		u = M(m => m.ui.thinSidebar),
		a = M(m => m.dos.mouseCapture);
	let c = p(Mh, {});
	switch (o) {
		case "error":
			c = p(kh, {});
			break;
		case "loading":
			c = p(Ch, {});
			break;
		case "prerun":
			c = p(yf, {});
			break;
		case "run":
			c = p(gh, {});
			break;
		case "select":
			c = p(Sh, {});
			break
	}
	const i = o === "run" && a;
	let d = "left-12",
		l = i ? "w-14" : "w-12";
	return u && !t ? (l = i ? "w-6" : "w-4", d = "left-4") : t && (l = n ? "w-24" : "w-96"), p("div", {
		class: "window absolute w-full h-full bg-base-100",
		children: [p("div", {
			class: "background-image " + d,
			style: {
				backgroundImage: r ? "url(" + r + ")" : void 0
			}
		}), p("div", {
			class: "relative flex-row h-full w-full items-start justify-start overflow-auto",
			children: [!s && p("div", {
				class: l + " flex-shrink-0"
			}), s && i && p("div", {
				class: "w-2 flex-shrink-0"
			}), c]
		})]
	})
}

function Mh() {
	return p("div", {
		class: "w-full h-full flex justify-center items-center",
		children: p("div", {
			class: "radial-progress animate-spin",
			style: "--value:70;"
		})
	})
}
let mo = z.getInitialState().wideScreen;

function Ah() {
	const e = Ae(null),
		t = M(r => r.ui.hidden),
		n = M(r => r.ui.theme),
		o = Y();
	return oe(() => {
		if (t || e === null || e.current === null) return;
		const r = e.current;

		function s() {
			const c = r.getBoundingClientRect().width > 640;
			c !== mo && (mo = c, o(z.actions.setWideScreen(mo)))
		}
		const u = new ResizeObserver(s);
		return u.observe(r), window.addEventListener("resize", s), () => {
			u.disconnect(), window.removeEventListener("resize", s)
		}
	}, [t, e, o]), t ? null : p("div", {
		ref: e,
		class: "w-full h-full relative",
		"data-theme": n,
		children: [p(Oh, {}), p(Cf, {}), p(zf, {}), p(Th, {}), p(Dh, {})]
	})
}

function Th() {
	const e = M(r => r.ui.toast),
		t = M(r => r.ui.toastIntent),
		n = t === "panic" ? "error" : t;
	if (e === null) return null;
	let o = p("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		"stroke-width": "2",
		d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
	});
	return t === "warning" && (o = p("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
	})), (t === "error" || t === "panic") && (o = p("path", {
		"stroke-linecap": "round",
		"stroke-linejoin": "round",
		d: "M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
	})), p("div", {
		class: "absolute right-10 bottom-10 pointer-events-none " + (t === "error" || t === "panic" || t === "warning" ? "opacity-80" : "opacity-50"),
		children: p("div", {
			class: "alert alert-" + n + " text-" + n + "-content",
			children: [p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				stroke: "currentColor",
				viewBox: "0 0 24 24",
				class: "shrink-0 w-6 h-6",
				children: o
			}), p("span", {
				class: "break-words",
				children: e
			})]
		})
	})
}

function Dh() {
	const e = M(s => s.ui.updateWsWarning),
		t = Q(),
		n = Y();
	if (!e) return null;

	function o() {
		window.open("https://dos.zone/download/", "_blank"), n(z.actions.updateWsWarning(!1))
	}

	function r() {
		n(z.actions.updateWsWarning(!1))
	}
	return p("div", {
		class: "absolute left-20 right-10 top-10 flex justify-center",
		children: p("div", {
			class: "alert w-auto",
			children: [p("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				fill: "none",
				viewBox: "0 0 24 24",
				"stroke-width": "1.5",
				stroke: "currentColor",
				class: "size-6 text-error",
				children: p("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
				})
			}), p("span", {
				children: t("ws_outdated")
			}), p("div", {
				children: [p("button", {
					class: "btn btn-sm btn-primary mr-2",
					onClick: o,
					children: t("update")
				}), p("button", {
					class: "btn btn-sm",
					onClick: r,
					children: t("close")
				})]
			})]
		})
	})
}
const jh = (e, t = {}) => {
	const n = gd(t),
		o = _d(n),
		r = ba();
	Ih(e, n, o), navigator.keyboard?.lock(["KeyW", "Escape"]);
	let s = "none";

	function u() {
		(async () => {
			const L = Fe(o),
				Re = L.dos.step;
			if (Re !== s) switch (s = Re, L.dos.step) {
				case "bnd-ready":
					t.mouseCapture !== void 0 && m(t.mouseCapture);
					break;
				case "emu-ready": {
					if (n.cache = await r, n.options.url) try {
						await Lt(n.options.url, o)
					} catch (ye) {
						o.dispatch(I.actions.bndError(ye.message))
					} else if (n.options.dosboxConf) {
						const ye = n.options.jsdosConf ?? {
							version: "8"
						};
						ye.version || (ye.version = "8"), zd({
							dosboxConf: n.options.dosboxConf,
							jsdosConf: ye
						}, n.options.initFs ?? null, o)
					} else o.dispatch(z.actions.windowSelect());
					Kt(n, "emu-ready")
				}
				break
			}
		})().catch(console.error)
	}
	o.subscribe(u), Sd(o, t.pathPrefix ?? "https://jacksmithpro.github.io/skul/emulators/", t.pathSuffix ?? "");

	function a(L) {
		o.dispatch(z.actions.theme(L))
	}

	function c(L) {
		o.dispatch(va.actions.setLang(L))
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

	function f(L) {
		o.dispatch(z.actions.background(L))
	}

	function v(L) {
		Bc(L, o)
	}

	function h(L) {
		o.dispatch(z.actions.autoStart(L))
	}

	function g(L) {
		o.dispatch(z.actions.countDownStart(L))
	}

	function _(L) {
		o.dispatch(z.actions.autoSave(L))
	}

	function y(L) {
		o.dispatch(z.actions.kiosk(L))
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

	function D(L) {
		o.dispatch(z.actions.noCloud(L))
	}

	function j(L) {
		o.dispatch(I.actions.paused(L))
	}

	function N(L) {
		o.dispatch(I.actions.scaleControls(L))
	}

	function F(L) {
		o.dispatch(I.actions.mouseSensitivity(L))
	}

	function K(L) {
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

	function X(L) {
		o.dispatch(I.actions.offscreenCanvas(L))
	}

	function G(L) {
		L === null || L.length !== 5 ? o.dispatch(Rt.actions.setAccount(null)) : Oo(L).then(({
			account: Re
		}) => {
			o.dispatch(Rt.actions.setAccount(Re))
		}).catch(console.error)
	}

	function se(L) {
		o.dispatch(z.actions.softFullscreen(L))
	}

	function ue(L) {
		o.dispatch(z.actions.thinSidebar(L))
	}
	return t.theme && a(t.theme), t.lang && c(t.lang), t.backend && i(t.backend), t.backendLocked && d(t.backendLocked), t.workerThread !== void 0 && l(t.workerThread), t.background && f(t.background), t.fullScreen !== void 0 && v(t.fullScreen), t.autoStart !== void 0 && h(t.autoStart), t.countDownStart !== void 0 && g(t.countDownStart), t.autoSave !== void 0 && _(t.autoSave), t.kiosk !== void 0 && y(t.kiosk), t.imageRendering !== void 0 && b(t.imageRendering), t.renderBackend !== void 0 && C(t.renderBackend), t.renderAspect !== void 0 && x(t.renderAspect), t.noCloud !== void 0 && D(t.noCloud), t.scaleControls !== void 0 && N(t.scaleControls), t.mouseSensitivity !== void 0 && F(t.mouseSensitivity), t.noCursor !== void 0 && K(t.noCursor), t.softKeyboardLayout !== void 0 && R(t.softKeyboardLayout), t.softKeyboardSymbols !== void 0 && q(t.softKeyboardSymbols), t.volume !== void 0 && Z(t.volume), t.key !== void 0 && G(t.key), t.backendHardware !== void 0 && se(!0), t.softFullscreen !== void 0 && se(t.softFullscreen), t.thinSidebar !== void 0 && ue(t.thinSidebar), t.offscreenCanvas !== void 0 && X(t.offscreenCanvas), t.sockdrivePreload !== void 0 && o.dispatch(I.actions.sockdrivePreload(t.sockdrivePreload)), t.startIpxServer === !0 && o.dispatch(I.actions.startIpxServer(!0)), t.connectIpxAddress && o.dispatch(I.actions.connectIpxAddress(t.connectIpxAddress)), pt(p(su, {
		store: o,
		children: p(Ah, {})
	}), e), {
		getVersion: () => ["8.3.20", o.getState().dos.emuVersion],
		getToken: () => Fe(o).auth.account?.token ?? null,
		setTheme: a,
		setLang: c,
		setBackend: i,
		setBackendLocked: d,
		setWorkerThread: l,
		setOffscreenCanvas: X,
		setMouseCapture: m,
		setBackground: f,
		setFullScreen: v,
		setAutoStart: h,
		setCountDownStart: g,
		setAutoSave: _,
		setKiosk: y,
		setImageRendering: b,
		setRenderBackend: C,
		setRenderAspect: x,
		setNoCloud: D,
		setPaused: j,
		setScaleControls: N,
		setMouseSensitivity: F,
		setNoCursor: K,
		setSoftKeyboardLayout: R,
		setSoftKeyboardSymbols: q,
		setVolume: Z,
		setKey: G,
		setSoftFullscreen: se,
		setThinSidebar: ue,
		save: () => gt(Fe(o), n, o.dispatch),
		stop: async () => {
			o.dispatch(z.actions.hidden(!0));
			const L = Se(o);
			if (L.ci) return L.ci.exit()
		}
	}
};

function Ih(e, t, n) {
	t.root = e, e.classList.add("jsdos-rso"), e.addEventListener("contextmenu", r => {
		if (!(r.target !== null && r.target.classList?.contains("contextmenu"))) return r.stopPropagation(), r.preventDefault(), !1
	}), document.addEventListener("fullscreenchange", r => {
		if (!n.getState().ui.softFullscreen) {
			const s = document.fullscreenElement === e;
			n.dispatch(z.actions.setFullScreen(s)), !s && n.getState().ui.autoSave && gt(Fe(n), t, n.dispatch)
		}
	}), document.addEventListener("pointerlockchange", () => {
		n.dispatch(z.actions.pointerLocked(document.pointerLockElement !== null)), document.pointerLockElement !== null && n.getState().ui.clickToLockModal && n.dispatch(z.actions.clickToLockModal(!1)), document.pointerLockElement === null && n.getState().ui.autoSave && gt(Fe(n), t, n.dispatch)
	});

	function o() {
		n.dispatch(z.actions.documentHidden(document.hidden))
	}
	document.addEventListener("visibilitychange", o)
}
window.Dos = jh;