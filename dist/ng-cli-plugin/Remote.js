loadRemoteModuleJsonpCallback(
  "Remote.js",
  (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, "a", t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ""),
      n((n.s = 0))
    );
  })({
    0: function (e, t, n) {
      e.exports = n("AH6B");
    },
    AH6B: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "component", function () {
          return r;
        }),
        n.d(t, "module", function () {
          return c;
        });
      var o = n("fXoL");
      let r = (() => {
        class e {
          constructor() {}
          ngOnInit() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-remote"]],
            decls: 2,
            vars: 0,
            template: function (e, t) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "p"),
                o["\u0275\u0275text"](1, " remote works!\n"),
                o["\u0275\u0275elementEnd"]());
            },
            styles: [""],
          })),
          e
        );
      })();
      var u = n("ofXK"),
        f = n("tyNb");
      let c = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
          (e.ɵinj = o["\u0275\u0275defineInjector"]({
            imports: [
              [
                u.CommonModule,
                f.RouterModule.forChild([
                  { path: "", pathMatch: "full", component: r },
                ]),
              ],
            ],
          })),
          e
        );
      })();
    },
    "e+ej": function (e, t) {
      e.exports = TLIB;
    },
    fXoL: function (e, t, n) {
      e.exports = n("e+ej")("fXoL");
    },
    ofXK: function (e, t, n) {
      e.exports = n("e+ej")("ofXK");
    },
    tyNb: function (e, t, n) {
      e.exports = n("e+ej")("tyNb");
    },
  })
);