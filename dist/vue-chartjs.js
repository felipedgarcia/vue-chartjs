!function (t, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n(require("chart.js")) : "function" == typeof define && define.amd ? define("VueChartJs", ["chart.js"], n) : "object" == typeof exports ? exports.VueChartJs = n(require("chart.js")) : t.VueChartJs = n(t.Chart)
}("undefined" != typeof self ? self : this, function (t) {
  return function (t) {
    var n = {};

    function r(e) {
      if (n[e]) return n[e].exports;
      var o = n[e] = {i: e, l: !1, exports: {}};
      return t[e].call(o.exports, o, o.exports, r), o.l = !0, o.exports
    }

    return r.m = t, r.c = n, r.d = function (t, n, e) {
      r.o(t, n) || Object.defineProperty(t, n, {enumerable: !0, get: e})
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, r.t = function (t, n) {
      if (1 & n && (t = r(t)), 8 & n) return t;
      if (4 & n && "object" == typeof t && t && t.__esModule) return t;
      var e = Object.create(null);
      if (r.r(e), Object.defineProperty(e, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var o in t) r.d(e, o, function (n) {
        return t[n]
      }.bind(null, o));
      return e
    }, r.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return r.d(n, "a", n), n
    }, r.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }, r.p = "", r(r.s = 112)
  }([function (t, n) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, function (t, n, r) {
    var e = r(34)("wks"), o = r(19), i = r(0).Symbol, u = "function" == typeof i;
    (t.exports = function (t) {
      return e[t] || (e[t] = u && i[t] || (u ? i : o)("Symbol." + t))
    }).store = e
  }, function (t, n, r) {
    var e = r(3);
    t.exports = function (t) {
      if (!e(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function (t, n, r) {
    t.exports = !r(14)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n) {
    var r = t.exports = {version: "2.6.2"};
    "number" == typeof __e && (__e = r)
  }, function (t, n, r) {
    var e = r(8), o = r(22);
    t.exports = r(4) ? function (t, n, r) {
      return e.f(t, n, o(1, r))
    } : function (t, n, r) {
      return t[n] = r, t
    }
  }, function (t, n) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return r.call(t, n)
    }
  }, function (t, n, r) {
    var e = r(2), o = r(35), i = r(21), u = Object.defineProperty;
    n.f = r(4) ? Object.defineProperty : function (t, n, r) {
      if (e(t), n = i(n, !0), e(r), o) try {
        return u(t, n, r)
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (t[n] = r.value), t
    }
  }, function (t, n) {
    t.exports = {}
  }, function (t, n) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, function (t, n, r) {
    var e = r(0), o = r(6), i = r(7), u = r(19)("src"), c = Function.toString, a = ("" + c).split("toString");
    r(5).inspectSource = function (t) {
      return c.call(t)
    }, (t.exports = function (t, n, r, c) {
      var s = "function" == typeof r;
      s && (i(r, "name") || o(r, "name", n)), t[n] !== r && (s && (i(r, u) || o(r, u, t[n] ? "" + t[n] : a.join(String(n)))), t === e ? t[n] = r : c ? t[n] ? t[n] = r : o(t, n, r) : (delete t[n], o(t, n, r)))
    })(Function.prototype, "toString", function () {
      return "function" == typeof this && this[u] || c.call(this)
    })
  }, function (t, n, r) {
    var e = r(17);
    t.exports = function (t, n, r) {
      if (e(t), void 0 === n) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(n, r)
          };
        case 2:
          return function (r, e) {
            return t.call(n, r, e)
          };
        case 3:
          return function (r, e, o) {
            return t.call(n, r, e, o)
          }
      }
      return function () {
        return t.apply(n, arguments)
      }
    }
  }, function (t, n) {
    var r = t.exports = {version: "2.6.2"};
    "number" == typeof __e && (__e = r)
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function (t, n, r) {
    var e = r(55), o = r(23);
    t.exports = function (t) {
      return e(o(t))
    }
  }, function (t, n, r) {
    var e = r(0), o = r(5), i = r(6), u = r(11), c = r(12), a = function (t, n, r) {
      var s, f, p, l, h = t & a.F, v = t & a.G, d = t & a.S, y = t & a.P, x = t & a.B,
        m = v ? e : d ? e[n] || (e[n] = {}) : (e[n] || {}).prototype, _ = v ? o : o[n] || (o[n] = {}),
        g = _.prototype || (_.prototype = {});
      for (s in v && (r = n), r) p = ((f = !h && m && void 0 !== m[s]) ? m : r)[s], l = x && f ? c(p, e) : y && "function" == typeof p ? c(Function.call, p) : p, m && u(m, s, p, t & a.U), _[s] != p && i(_, s, l), y && g[s] != p && (g[s] = p)
    };
    e.core = o, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
  }, function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, function (t, n) {
    t.exports = !1
  }, function (t, n) {
    var r = 0, e = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
    }
  }, function (t, n, r) {
    var e = r(3), o = r(0).document, i = e(o) && e(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {}
    }
  }, function (t, n, r) {
    var e = r(3);
    t.exports = function (t, n) {
      if (!e(t)) return t;
      var r, o;
      if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
      if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (t, n) {
    t.exports = function (t, n) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
  }, function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function (t, n, r) {
    var e = r(34)("keys"), o = r(19);
    t.exports = function (t) {
      return e[t] || (e[t] = o(t))
    }
  }, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (t, n, r) {
    var e = r(8).f, o = r(7), i = r(1)("toStringTag");
    t.exports = function (t, n, r) {
      t && !o(t = r ? t : t.prototype, i) && e(t, i, {configurable: !0, value: n})
    }
  }, function (t, n) {
    var r = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r)
  }, function (t, n) {
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
    }
  }, function (t, n, r) {
    t.exports = !r(30)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  }, function (t, n, r) {
    t.exports = r(77)
  }, function (t, n, r) {
    t.exports = r(104)
  }, function (t, n, r) {
    "use strict";
    var e = r(53), o = r(54), i = r(9), u = r(15);
    t.exports = r(56)(Array, "Array", function (t, n) {
      this._t = u(t), this._i = 0, this._k = n
    }, function () {
      var t = this._t, n = this._k, r = this._i++;
      return !t || r >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == n ? r : "values" == n ? t[r] : [r, t[r]])
    }, "values"), i.Arguments = i.Array, e("keys"), e("values"), e("entries")
  }, function (t, n, r) {
    var e = r(5), o = r(0), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
      return i[t] || (i[t] = void 0 !== n ? n : {})
    })("versions", []).push({
      version: e.version,
      mode: r(18) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (t, n, r) {
    t.exports = !r(4) && !r(14)(function () {
      return 7 != Object.defineProperty(r(20)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, r) {
    var e = r(2), o = r(58), i = r(25), u = r(24)("IE_PROTO"), c = function () {
    }, a = function () {
      var t, n = r(20)("iframe"), e = i.length;
      for (n.style.display = "none", r(41).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; e--;) delete a.prototype[i[e]];
      return a()
    };
    t.exports = Object.create || function (t, n) {
      var r;
      return null !== t ? (c.prototype = e(t), r = new c, c.prototype = null, r[u] = t) : r = a(), void 0 === n ? r : o(r, n)
    }
  }, function (t, n, r) {
    var e = r(38), o = r(25);
    t.exports = Object.keys || function (t) {
      return e(t, o)
    }
  }, function (t, n, r) {
    var e = r(7), o = r(15), i = r(59)(!1), u = r(24)("IE_PROTO");
    t.exports = function (t, n) {
      var r, c = o(t), a = 0, s = [];
      for (r in c) r != u && e(c, r) && s.push(r);
      for (; n.length > a;) e(c, r = n[a++]) && (~i(s, r) || s.push(r));
      return s
    }
  }, function (t, n, r) {
    var e = r(40), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(e(t), 9007199254740991) : 0
    }
  }, function (t, n) {
    var r = Math.ceil, e = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
    }
  }, function (t, n, r) {
    var e = r(0).document;
    t.exports = e && e.documentElement
  }, function (t, n, r) {
    var e = r(10), o = r(1)("toStringTag"), i = "Arguments" == e(function () {
      return arguments
    }());
    t.exports = function (t) {
      var n, r, u;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function (t, n) {
        try {
          return t[n]
        } catch (t) {
        }
      }(n = Object(t), o)) ? r : i ? e(n) : "Object" == (u = e(n)) && "function" == typeof n.callee ? "Arguments" : u
    }
  }, function (t, n, r) {
    var e = r(2), o = r(17), i = r(1)("species");
    t.exports = function (t, n) {
      var r, u = e(t).constructor;
      return void 0 === u || null == (r = e(u)[i]) ? n : o(r)
    }
  }, function (t, n, r) {
    var e, o, i, u = r(12), c = r(69), a = r(41), s = r(20), f = r(0), p = f.process, l = f.setImmediate,
      h = f.clearImmediate, v = f.MessageChannel, d = f.Dispatch, y = 0, x = {}, m = function () {
        var t = +this;
        if (x.hasOwnProperty(t)) {
          var n = x[t];
          delete x[t], n()
        }
      }, _ = function (t) {
        m.call(t.data)
      };
    l && h || (l = function (t) {
      for (var n = [], r = 1; arguments.length > r;) n.push(arguments[r++]);
      return x[++y] = function () {
        c("function" == typeof t ? t : Function(t), n)
      }, e(y), y
    }, h = function (t) {
      delete x[t]
    }, "process" == r(10)(p) ? e = function (t) {
      p.nextTick(u(m, t, 1))
    } : d && d.now ? e = function (t) {
      d.now(u(m, t, 1))
    } : v ? (i = (o = new v).port2, o.port1.onmessage = _, e = u(i.postMessage, i, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (e = function (t) {
      f.postMessage(t + "", "*")
    }, f.addEventListener("message", _, !1)) : e = "onreadystatechange" in s("script") ? function (t) {
      a.appendChild(s("script")).onreadystatechange = function () {
        a.removeChild(this), m.call(t)
      }
    } : function (t) {
      setTimeout(u(m, t, 1), 0)
    }), t.exports = {set: l, clear: h}
  }, function (t, n, r) {
    "use strict";
    var e = r(17);

    function o(t) {
      var n, r;
      this.promise = new t(function (t, e) {
        if (void 0 !== n || void 0 !== r) throw TypeError("Bad Promise constructor");
        n = t, r = e
      }), this.resolve = e(n), this.reject = e(r)
    }

    t.exports.f = function (t) {
      return new o(t)
    }
  }, function (t, n, r) {
    var e = r(2), o = r(3), i = r(45);
    t.exports = function (t, n) {
      if (e(t), o(n) && n.constructor === t) return n;
      var r = i.f(t);
      return (0, r.resolve)(n), r.promise
    }
  }, function (t, n) {
    t.exports = function (t) {
      if (null == t) throw TypeError("Can't call method on  " + t);
      return t
    }
  }, function (t, n) {
    var r = {}.hasOwnProperty;
    t.exports = function (t, n) {
      return r.call(t, n)
    }
  }, function (t, n, r) {
    var e = r(82), o = r(47);
    t.exports = function (t) {
      return e(o(t))
    }
  }, function (t, n) {
    var r = Math.ceil, e = Math.floor;
    t.exports = function (t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? e : r)(t)
    }
  }, function (t, n, r) {
    var e = r(108), o = r(22), i = r(15), u = r(21), c = r(7), a = r(35), s = Object.getOwnPropertyDescriptor;
    n.f = r(4) ? s : function (t, n) {
      if (t = i(t), n = u(n, !0), a) try {
        return s(t, n)
      } catch (t) {
      }
      if (c(t, n)) return o(!e.f.call(t, n), t[n])
    }
  }, function (n, r) {
    n.exports = t
  }, function (t, n, r) {
    var e = r(1)("unscopables"), o = Array.prototype;
    null == o[e] && r(6)(o, e, {}), t.exports = function (t) {
      o[e][t] = !0
    }
  }, function (t, n) {
    t.exports = function (t, n) {
      return {value: n, done: !!t}
    }
  }, function (t, n, r) {
    var e = r(10);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == e(t) ? t.split("") : Object(t)
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(18), o = r(16), i = r(11), u = r(6), c = r(9), a = r(57), s = r(26), f = r(61), p = r(1)("iterator"),
      l = !([].keys && "next" in [].keys()), h = function () {
        return this
      };
    t.exports = function (t, n, r, v, d, y, x) {
      a(r, n, v);
      var m, _, g, b = function (t) {
          if (!l && t in S) return S[t];
          switch (t) {
            case"keys":
            case"values":
              return function () {
                return new r(this, t)
              }
          }
          return function () {
            return new r(this, t)
          }
        }, O = n + " Iterator", w = "values" == d, j = !1, S = t.prototype, P = S[p] || S["@@iterator"] || d && S[d],
        E = P || b(d), T = d ? w ? b("entries") : E : void 0, M = "Array" == n && S.entries || P;
      if (M && (g = f(M.call(new t))) !== Object.prototype && g.next && (s(g, O, !0), e || "function" == typeof g[p] || u(g, p, h)), w && P && "values" !== P.name && (j = !0, E = function () {
        return P.call(this)
      }), e && !x || !l && !j && S[p] || u(S, p, E), c[n] = E, c[O] = h, d) if (m = {
        values: w ? E : b("values"),
        keys: y ? E : b("keys"),
        entries: T
      }, x) for (_ in m) _ in S || i(S, _, m[_]); else o(o.P + o.F * (l || j), n, m);
      return m
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(36), o = r(22), i = r(26), u = {};
    r(6)(u, r(1)("iterator"), function () {
      return this
    }), t.exports = function (t, n, r) {
      t.prototype = e(u, {next: o(1, r)}), i(t, n + " Iterator")
    }
  }, function (t, n, r) {
    var e = r(8), o = r(2), i = r(37);
    t.exports = r(4) ? Object.defineProperties : function (t, n) {
      o(t);
      for (var r, u = i(n), c = u.length, a = 0; c > a;) e.f(t, r = u[a++], n[r]);
      return t
    }
  }, function (t, n, r) {
    var e = r(15), o = r(39), i = r(60);
    t.exports = function (t) {
      return function (n, r, u) {
        var c, a = e(n), s = o(a.length), f = i(u, s);
        if (t && r != r) {
          for (; s > f;) if ((c = a[f++]) != c) return !0
        } else for (; s > f; f++) if ((t || f in a) && a[f] === r) return t || f || 0;
        return !t && -1
      }
    }
  }, function (t, n, r) {
    var e = r(40), o = Math.max, i = Math.min;
    t.exports = function (t, n) {
      return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
  }, function (t, n, r) {
    var e = r(7), o = r(62), i = r(24)("IE_PROTO"), u = Object.prototype;
    t.exports = Object.getPrototypeOf || function (t) {
      return t = o(t), e(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? u : null
    }
  }, function (t, n, r) {
    var e = r(23);
    t.exports = function (t) {
      return Object(e(t))
    }
  }, function (t, n, r) {
    "use strict";
    var e, o, i, u, c = r(18), a = r(0), s = r(12), f = r(42), p = r(16), l = r(3), h = r(17), v = r(64), d = r(65),
      y = r(43), x = r(44).set, m = r(70)(), _ = r(45), g = r(71), b = r(72), O = r(46), w = a.TypeError, j = a.process,
      S = j && j.versions, P = S && S.v8 || "", E = a.Promise, T = "process" == f(j), M = function () {
      }, L = o = _.f, N = !!function () {
        try {
          var t = E.resolve(1), n = (t.constructor = {})[r(1)("species")] = function (t) {
            t(M, M)
          };
          return (T || "function" == typeof PromiseRejectionEvent) && t.then(M) instanceof n && 0 !== P.indexOf("6.6") && -1 === b.indexOf("Chrome/66")
        } catch (t) {
        }
      }(), I = function (t) {
        var n;
        return !(!l(t) || "function" != typeof (n = t.then)) && n
      }, A = function (t, n) {
        if (!t._n) {
          t._n = !0;
          var r = t._c;
          m(function () {
            for (var e = t._v, o = 1 == t._s, i = 0, u = function (n) {
              var r, i, u, c = o ? n.ok : n.fail, a = n.resolve, s = n.reject, f = n.domain;
              try {
                c ? (o || (2 == t._h && F(t), t._h = 1), !0 === c ? r = e : (f && f.enter(), r = c(e), f && (f.exit(), u = !0)), r === n.promise ? s(w("Promise-chain cycle")) : (i = I(r)) ? i.call(r, a, s) : a(r)) : s(e)
              } catch (t) {
                f && !u && f.exit(), s(t)
              }
            }; r.length > i;) u(r[i++]);
            t._c = [], t._n = !1, n && !t._h && C(t)
          })
        }
      }, C = function (t) {
        x.call(a, function () {
          var n, r, e, o = t._v, i = k(t);
          if (i && (n = g(function () {
            T ? j.emit("unhandledRejection", o, t) : (r = a.onunhandledrejection) ? r({
              promise: t,
              reason: o
            }) : (e = a.console) && e.error && e.error("Unhandled promise rejection", o)
          }), t._h = T || k(t) ? 2 : 1), t._a = void 0, i && n.e) throw n.v
        })
      }, k = function (t) {
        return 1 !== t._h && 0 === (t._a || t._c).length
      }, F = function (t) {
        x.call(a, function () {
          var n;
          T ? j.emit("rejectionHandled", t) : (n = a.onrejectionhandled) && n({promise: t, reason: t._v})
        })
      }, R = function (t) {
        var n = this;
        n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), A(n, !0))
      }, $ = function (t) {
        var n, r = this;
        if (!r._d) {
          r._d = !0, r = r._w || r;
          try {
            if (r === t) throw w("Promise can't be resolved itself");
            (n = I(t)) ? m(function () {
              var e = {_w: r, _d: !1};
              try {
                n.call(t, s($, e, 1), s(R, e, 1))
              } catch (t) {
                R.call(e, t)
              }
            }) : (r._v = t, r._s = 1, A(r, !1))
          } catch (t) {
            R.call({_w: r, _d: !1}, t)
          }
        }
      };
    N || (E = function (t) {
      v(this, E, "Promise", "_h"), h(t), e.call(this);
      try {
        t(s($, this, 1), s(R, this, 1))
      } catch (t) {
        R.call(this, t)
      }
    }, (e = function (t) {
      this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
    }).prototype = r(73)(E.prototype, {
      then: function (t, n) {
        var r = L(y(this, E));
        return r.ok = "function" != typeof t || t, r.fail = "function" == typeof n && n, r.domain = T ? j.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && A(this, !1), r.promise
      }, catch: function (t) {
        return this.then(void 0, t)
      }
    }), i = function () {
      var t = new e;
      this.promise = t, this.resolve = s($, t, 1), this.reject = s(R, t, 1)
    }, _.f = L = function (t) {
      return t === E || t === u ? new i(t) : o(t)
    }), p(p.G + p.W + p.F * !N, {Promise: E}), r(26)(E, "Promise"), r(74)("Promise"), u = r(5).Promise, p(p.S + p.F * !N, "Promise", {
      reject: function (t) {
        var n = L(this);
        return (0, n.reject)(t), n.promise
      }
    }), p(p.S + p.F * (c || !N), "Promise", {
      resolve: function (t) {
        return O(c && this === u ? E : this, t)
      }
    }), p(p.S + p.F * !(N && r(75)(function (t) {
      E.all(t).catch(M)
    })), "Promise", {
      all: function (t) {
        var n = this, r = L(n), e = r.resolve, o = r.reject, i = g(function () {
          var r = [], i = 0, u = 1;
          d(t, !1, function (t) {
            var c = i++, a = !1;
            r.push(void 0), u++, n.resolve(t).then(function (t) {
              a || (a = !0, r[c] = t, --u || e(r))
            }, o)
          }), --u || e(r)
        });
        return i.e && o(i.v), r.promise
      }, race: function (t) {
        var n = this, r = L(n), e = r.reject, o = g(function () {
          d(t, !1, function (t) {
            n.resolve(t).then(r.resolve, e)
          })
        });
        return o.e && e(o.v), r.promise
      }
    })
  }, function (t, n) {
    t.exports = function (t, n, r, e) {
      if (!(t instanceof n) || void 0 !== e && e in t) throw TypeError(r + ": incorrect invocation!");
      return t
    }
  }, function (t, n, r) {
    var e = r(12), o = r(66), i = r(67), u = r(2), c = r(39), a = r(68), s = {}, f = {};
    (n = t.exports = function (t, n, r, p, l) {
      var h, v, d, y, x = l ? function () {
        return t
      } : a(t), m = e(r, p, n ? 2 : 1), _ = 0;
      if ("function" != typeof x) throw TypeError(t + " is not iterable!");
      if (i(x)) {
        for (h = c(t.length); h > _; _++) if ((y = n ? m(u(v = t[_])[0], v[1]) : m(t[_])) === s || y === f) return y
      } else for (d = x.call(t); !(v = d.next()).done;) if ((y = o(d, m, v.value, n)) === s || y === f) return y
    }).BREAK = s, n.RETURN = f
  }, function (t, n, r) {
    var e = r(2);
    t.exports = function (t, n, r, o) {
      try {
        return o ? n(e(r)[0], r[1]) : n(r)
      } catch (n) {
        var i = t.return;
        throw void 0 !== i && e(i.call(t)), n
      }
    }
  }, function (t, n, r) {
    var e = r(9), o = r(1)("iterator"), i = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (e.Array === t || i[o] === t)
    }
  }, function (t, n, r) {
    var e = r(42), o = r(1)("iterator"), i = r(9);
    t.exports = r(5).getIteratorMethod = function (t) {
      if (null != t) return t[o] || t["@@iterator"] || i[e(t)]
    }
  }, function (t, n) {
    t.exports = function (t, n, r) {
      var e = void 0 === r;
      switch (n.length) {
        case 0:
          return e ? t() : t.call(r);
        case 1:
          return e ? t(n[0]) : t.call(r, n[0]);
        case 2:
          return e ? t(n[0], n[1]) : t.call(r, n[0], n[1]);
        case 3:
          return e ? t(n[0], n[1], n[2]) : t.call(r, n[0], n[1], n[2]);
        case 4:
          return e ? t(n[0], n[1], n[2], n[3]) : t.call(r, n[0], n[1], n[2], n[3])
      }
      return t.apply(r, n)
    }
  }, function (t, n, r) {
    var e = r(0), o = r(44).set, i = e.MutationObserver || e.WebKitMutationObserver, u = e.process, c = e.Promise,
      a = "process" == r(10)(u);
    t.exports = function () {
      var t, n, r, s = function () {
        var e, o;
        for (a && (e = u.domain) && e.exit(); t;) {
          o = t.fn, t = t.next;
          try {
            o()
          } catch (e) {
            throw t ? r() : n = void 0, e
          }
        }
        n = void 0, e && e.enter()
      };
      if (a) r = function () {
        u.nextTick(s)
      }; else if (!i || e.navigator && e.navigator.standalone) if (c && c.resolve) {
        var f = c.resolve(void 0);
        r = function () {
          f.then(s)
        }
      } else r = function () {
        o.call(e, s)
      }; else {
        var p = !0, l = document.createTextNode("");
        new i(s).observe(l, {characterData: !0}), r = function () {
          l.data = p = !p
        }
      }
      return function (e) {
        var o = {fn: e, next: void 0};
        n && (n.next = o), t || (t = o, r()), n = o
      }
    }
  }, function (t, n) {
    t.exports = function (t) {
      try {
        return {e: !1, v: t()}
      } catch (t) {
        return {e: !0, v: t}
      }
    }
  }, function (t, n, r) {
    var e = r(0).navigator;
    t.exports = e && e.userAgent || ""
  }, function (t, n, r) {
    var e = r(11);
    t.exports = function (t, n, r) {
      for (var o in n) e(t, o, n[o], r);
      return t
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(0), o = r(8), i = r(4), u = r(1)("species");
    t.exports = function (t) {
      var n = e[t];
      i && n && !n[u] && o.f(n, u, {
        configurable: !0, get: function () {
          return this
        }
      })
    }
  }, function (t, n, r) {
    var e = r(1)("iterator"), o = !1;
    try {
      var i = [7][e]();
      i.return = function () {
        o = !0
      }, Array.from(i, function () {
        throw 2
      })
    } catch (t) {
    }
    t.exports = function (t, n) {
      if (!n && !o) return !1;
      var r = !1;
      try {
        var i = [7], u = i[e]();
        u.next = function () {
          return {done: r = !0}
        }, i[e] = function () {
          return u
        }, t(i)
      } catch (t) {
      }
      return r
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(16), o = r(5), i = r(0), u = r(43), c = r(46);
    e(e.P + e.R, "Promise", {
      finally: function (t) {
        var n = u(this, o.Promise || i.Promise), r = "function" == typeof t;
        return this.then(r ? function (r) {
          return c(n, t()).then(function () {
            return r
          })
        } : t, r ? function (r) {
          return c(n, t()).then(function () {
            throw r
          })
        } : t)
      }
    })
  }, function (t, n, r) {
    r(78), t.exports = r(13).Object.keys
  }, function (t, n, r) {
    var e = r(79), o = r(80);
    r(92)("keys", function () {
      return function (t) {
        return o(e(t))
      }
    })
  }, function (t, n, r) {
    var e = r(47);
    t.exports = function (t) {
      return Object(e(t))
    }
  }, function (t, n, r) {
    var e = r(81), o = r(91);
    t.exports = Object.keys || function (t) {
      return e(t, o)
    }
  }, function (t, n, r) {
    var e = r(48), o = r(49), i = r(84)(!1), u = r(87)("IE_PROTO");
    t.exports = function (t, n) {
      var r, c = o(t), a = 0, s = [];
      for (r in c) r != u && e(c, r) && s.push(r);
      for (; n.length > a;) e(c, r = n[a++]) && (~i(s, r) || s.push(r));
      return s
    }
  }, function (t, n, r) {
    var e = r(83);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) {
      return "String" == e(t) ? t.split("") : Object(t)
    }
  }, function (t, n) {
    var r = {}.toString;
    t.exports = function (t) {
      return r.call(t).slice(8, -1)
    }
  }, function (t, n, r) {
    var e = r(49), o = r(85), i = r(86);
    t.exports = function (t) {
      return function (n, r, u) {
        var c, a = e(n), s = o(a.length), f = i(u, s);
        if (t && r != r) {
          for (; s > f;) if ((c = a[f++]) != c) return !0
        } else for (; s > f; f++) if ((t || f in a) && a[f] === r) return t || f || 0;
        return !t && -1
      }
    }
  }, function (t, n, r) {
    var e = r(50), o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(e(t), 9007199254740991) : 0
    }
  }, function (t, n, r) {
    var e = r(50), o = Math.max, i = Math.min;
    t.exports = function (t, n) {
      return (t = e(t)) < 0 ? o(t + n, 0) : i(t, n)
    }
  }, function (t, n, r) {
    var e = r(88)("keys"), o = r(90);
    t.exports = function (t) {
      return e[t] || (e[t] = o(t))
    }
  }, function (t, n, r) {
    var e = r(13), o = r(27), i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
    (t.exports = function (t, n) {
      return i[t] || (i[t] = void 0 !== n ? n : {})
    })("versions", []).push({
      version: e.version,
      mode: r(89) ? "pure" : "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
  }, function (t, n) {
    t.exports = !0
  }, function (t, n) {
    var r = 0, e = Math.random();
    t.exports = function (t) {
      return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++r + e).toString(36))
    }
  }, function (t, n) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (t, n, r) {
    var e = r(93), o = r(13), i = r(30);
    t.exports = function (t, n) {
      var r = (o.Object || {})[t] || Object[t], u = {};
      u[t] = n(r), e(e.S + e.F * i(function () {
        r(1)
      }), "Object", u)
    }
  }, function (t, n, r) {
    var e = r(27), o = r(13), i = r(94), u = r(96), c = r(48), a = function (t, n, r) {
      var s, f, p, l = t & a.F, h = t & a.G, v = t & a.S, d = t & a.P, y = t & a.B, x = t & a.W,
        m = h ? o : o[n] || (o[n] = {}), _ = m.prototype, g = h ? e : v ? e[n] : (e[n] || {}).prototype;
      for (s in h && (r = n), r) (f = !l && g && void 0 !== g[s]) && c(m, s) || (p = f ? g[s] : r[s], m[s] = h && "function" != typeof g[s] ? r[s] : y && f ? i(p, e) : x && g[s] == p ? function (t) {
        var n = function (n, r, e) {
          if (this instanceof t) {
            switch (arguments.length) {
              case 0:
                return new t;
              case 1:
                return new t(n);
              case 2:
                return new t(n, r)
            }
            return new t(n, r, e)
          }
          return t.apply(this, arguments)
        };
        return n.prototype = t.prototype, n
      }(p) : d && "function" == typeof p ? i(Function.call, p) : p, d && ((m.virtual || (m.virtual = {}))[s] = p, t & a.R && _ && !_[s] && u(_, s, p)))
    };
    a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
  }, function (t, n, r) {
    var e = r(95);
    t.exports = function (t, n, r) {
      if (e(t), void 0 === n) return t;
      switch (r) {
        case 1:
          return function (r) {
            return t.call(n, r)
          };
        case 2:
          return function (r, e) {
            return t.call(n, r, e)
          };
        case 3:
          return function (r, e, o) {
            return t.call(n, r, e, o)
          }
      }
      return function () {
        return t.apply(n, arguments)
      }
    }
  }, function (t, n) {
    t.exports = function (t) {
      if ("function" != typeof t) throw TypeError(t + " is not a function!");
      return t
    }
  }, function (t, n, r) {
    var e = r(97), o = r(102);
    t.exports = r(29) ? function (t, n, r) {
      return e.f(t, n, o(1, r))
    } : function (t, n, r) {
      return t[n] = r, t
    }
  }, function (t, n, r) {
    var e = r(98), o = r(99), i = r(101), u = Object.defineProperty;
    n.f = r(29) ? Object.defineProperty : function (t, n, r) {
      if (e(t), n = i(n, !0), e(r), o) try {
        return u(t, n, r)
      } catch (t) {
      }
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (t[n] = r.value), t
    }
  }, function (t, n, r) {
    var e = r(28);
    t.exports = function (t) {
      if (!e(t)) throw TypeError(t + " is not an object!");
      return t
    }
  }, function (t, n, r) {
    t.exports = !r(29) && !r(30)(function () {
      return 7 != Object.defineProperty(r(100)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (t, n, r) {
    var e = r(28), o = r(27).document, i = e(o) && e(o.createElement);
    t.exports = function (t) {
      return i ? o.createElement(t) : {}
    }
  }, function (t, n, r) {
    var e = r(28);
    t.exports = function (t, n) {
      if (!e(t)) return t;
      var r, o;
      if (n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      if ("function" == typeof (r = t.valueOf) && !e(o = r.call(t))) return o;
      if (!n && "function" == typeof (r = t.toString) && !e(o = r.call(t))) return o;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (t, n) {
    t.exports = function (t, n) {
      return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: n}
    }
  }, function (t, n, r) {
    for (var e = r(33), o = r(37), i = r(11), u = r(0), c = r(6), a = r(9), s = r(1), f = s("iterator"), p = s("toStringTag"), l = a.Array, h = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, v = o(h), d = 0; d < v.length; d++) {
      var y, x = v[d], m = h[x], _ = u[x], g = _ && _.prototype;
      if (g && (g[f] || c(g, f, l), g[p] || c(g, p, x), a[x] = l, m)) for (y in e) g[y] || i(g, y, e[y], !0)
    }
  }, function (t, n, r) {
    var e = r(13), o = e.JSON || (e.JSON = {stringify: JSON.stringify});
    t.exports = function (t) {
      return o.stringify.apply(o, arguments)
    }
  }, function (t, n, r) {
    "use strict";
    var e = r(0), o = r(7), i = r(10), u = r(106), c = r(21), a = r(14), s = r(109).f, f = r(51).f, p = r(8).f,
      l = r(110).trim, h = e.Number, v = h, d = h.prototype, y = "Number" == i(r(36)(d)),
      x = "trim" in String.prototype, m = function (t) {
        var n = c(t, !1);
        if ("string" == typeof n && n.length > 2) {
          var r, e, o, i = (n = x ? n.trim() : l(n, 3)).charCodeAt(0);
          if (43 === i || 45 === i) {
            if (88 === (r = n.charCodeAt(2)) || 120 === r) return NaN
          } else if (48 === i) {
            switch (n.charCodeAt(1)) {
              case 66:
              case 98:
                e = 2, o = 49;
                break;
              case 79:
              case 111:
                e = 8, o = 55;
                break;
              default:
                return +n
            }
            for (var u, a = n.slice(2), s = 0, f = a.length; s < f; s++) if ((u = a.charCodeAt(s)) < 48 || u > o) return NaN;
            return parseInt(a, e)
          }
        }
        return +n
      };
    if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
      h = function (t) {
        var n = arguments.length < 1 ? 0 : t, r = this;
        return r instanceof h && (y ? a(function () {
          d.valueOf.call(r)
        }) : "Number" != i(r)) ? u(new v(m(n)), r, h) : m(n)
      };
      for (var _, g = r(4) ? s(v) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), b = 0; g.length > b; b++) o(v, _ = g[b]) && !o(h, _) && p(h, _, f(v, _));
      h.prototype = d, d.constructor = h, r(11)(e, "Number", h)
    }
  }, function (t, n, r) {
    var e = r(3), o = r(107).set;
    t.exports = function (t, n, r) {
      var i, u = n.constructor;
      return u !== r && "function" == typeof u && (i = u.prototype) !== r.prototype && e(i) && o && o(t, i), t
    }
  }, function (t, n, r) {
    var e = r(3), o = r(2), i = function (t, n) {
      if (o(t), !e(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
    };
    t.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (t, n, e) {
        try {
          (e = r(12)(Function.call, r(51).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
        } catch (t) {
          n = !0
        }
        return function (t, r) {
          return i(t, r), n ? t.__proto__ = r : e(t, r), t
        }
      }({}, !1) : void 0), check: i
    }
  }, function (t, n) {
    n.f = {}.propertyIsEnumerable
  }, function (t, n, r) {
    var e = r(38), o = r(25).concat("length", "prototype");
    n.f = Object.getOwnPropertyNames || function (t) {
      return e(t, o)
    }
  }, function (t, n, r) {
    var e = r(16), o = r(23), i = r(14), u = r(111), c = "[" + u + "]", a = RegExp("^" + c + c + "*"),
      s = RegExp(c + c + "*$"), f = function (t, n, r) {
        var o = {}, c = i(function () {
          return !!u[t]() || "​" != "​"[t]()
        }), a = o[t] = c ? n(p) : u[t];
        r && (o[r] = a), e(e.P + e.F * c, "String", o)
      }, p = f.trim = function (t, n) {
        return t = String(o(t)), 1 & n && (t = t.replace(a, "")), 2 & n && (t = t.replace(s, "")), t
      };
    t.exports = f
  }, function (t, n) {
    t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
  }, function (t, n, r) {
    "use strict";
    r.r(n);
    r(33), r(63), r(76);
    var e = r(31), o = r.n(e), i = (r(103), r(32)), u = r.n(i);

    function c(t, n) {
      if (n) {
        var r = this.$data._chart, e = t.datasets.map(function (t) {
          return t.label
        }), i = n.datasets.map(function (t) {
          return t.label
        }), c = u()(i);
        u()(e) === c && n.datasets.length === t.datasets.length ? (t.datasets.forEach(function (t, e) {
          var i = o()(n.datasets[e]), u = o()(t), c = i.filter(function (t) {
            return "_meta" !== t && -1 === u.indexOf(t)
          });
          for (var a in c.forEach(function (t) {
            delete r.data.datasets[e][t]
          }), t) t.hasOwnProperty(a) && (r.data.datasets[e][a] = t[a])
        }), t.hasOwnProperty("labels") && (r.data.labels = t.labels, this.$emit("labels:update")), t.hasOwnProperty("xLabels") && (r.data.xLabels = t.xLabels, this.$emit("xlabels:update")), t.hasOwnProperty("yLabels") && (r.data.yLabels = t.yLabels, this.$emit("ylabels:update")), r.update(), this.$emit("chart:update")) : (r && (r.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render"))
      } else this.$data._chart && (this.$data._chart.destroy(), this.$emit("chart:destroy")), this.renderChart(this.chartData, this.options), this.$emit("chart:render")
    }

    var a = {
      reactiveData: {
        data: function () {
          return {chartData: null}
        }, watch: {chartData: c}
      }, reactiveProp: {
        props: {
          chartData: {
            type: Object, required: !0, default: function () {
            }
          }
        }, watch: {chartData: c}
      }
    }, s = (r(105), r(52)), f = r.n(s);

    function p(t, n) {
      return {
        render: function (t) {
          return t("div", {style: this.styles, class: this.cssClasses}, [t("canvas", {
            attrs: {
              id: this.chartId,
              width: this.width,
              height: this.height
            }, ref: "canvas"
          })])
        },
        props: {
          chartId: {default: t, type: String},
          width: {default: 400, type: Number},
          height: {default: 400, type: [String, Number]},
          cssClasses: {type: String, default: ""},
          styles: {type: Object},
          plugins: {
            type: Array, default: function () {
              return []
            }
          }
        },
        data: function () {
          return {_chart: null, _plugins: this.plugins}
        },
        methods: {
          addPlugin: function (t) {
            this.$data._plugins.push(t)
          }, generateLegend: function () {
            if (this.$data._chart) return this.$data._chart.generateLegend()
          }, renderChart: function (t, r) {
            this.$data._chart && this.$data._chart.destroy(), this.$data._chart = new f.a(this.$refs.canvas.getContext("2d"), {
              type: n,
              data: t,
              options: r,
              plugins: this.$data._plugins
            })
          }
        },
        beforeDestroy: function () {
          this.$data._chart && this.$data._chart.destroy()
        }
      }
    }

    var l = p("bar-chart", "bar"), h = p("horizontalbar-chart", "horizontalBar"), v = p("doughnut-chart", "doughnut"),
      d = p("line-chart", "line"), y = p("pie-chart", "pie"), x = p("polar-chart", "polarArea"),
      m = p("radar-chart", "radar"), _ = p("bubble-chart", "bubble"), g = p("scatter-chart", "scatter");
    r.d(n, "VueCharts", function () {
      return b
    }), r.d(n, "Bar", function () {
      return l
    }), r.d(n, "HorizontalBar", function () {
      return h
    }), r.d(n, "Doughnut", function () {
      return v
    }), r.d(n, "Line", function () {
      return d
    }), r.d(n, "Pie", function () {
      return y
    }), r.d(n, "PolarArea", function () {
      return x
    }), r.d(n, "Radar", function () {
      return m
    }), r.d(n, "Bubble", function () {
      return _
    }), r.d(n, "Scatter", function () {
      return g
    }), r.d(n, "mixins", function () {
      return a
    }), r.d(n, "generateChart", function () {
      return p
    });
    var b = {
      Bar: l,
      HorizontalBar: h,
      Doughnut: v,
      Line: d,
      Pie: y,
      PolarArea: x,
      Radar: m,
      Bubble: _,
      Scatter: g,
      mixins: a,
      generateChart: p,
      render: function () {
        return console.error("[vue-chartjs]: This is not a vue component. It is the whole object containing all vue components. Please import the named export or access the components over the dot notation. For more info visit https://vue-chartjs.org/#/home?id=quick-start")
      }
    };
    n.default = b
  }])
});
//# sourceMappingURL=vue-chartjs.js.map
