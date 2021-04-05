loadRemoteModuleJsonpCallback(
  "Remote.js",
  (function (e) {
    var n = {};
    function t(o) {
      if (n[o]) return n[o].exports;
      var r = (n[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, t), (r.l = !0), r.exports;
    }
    return (
      (t.m = e),
      (t.c = n),
      (t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: o });
      }),
      (t.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (t.t = function (e, n) {
        if ((1 & n && (e = t(e)), 8 & n)) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (t.r(o),
          Object.defineProperty(o, "default", { enumerable: !0, value: e }),
          2 & n && "string" != typeof e)
        )
          for (var r in e)
            t.d(
              o,
              r,
              function (n) {
                return e[n];
              }.bind(null, r)
            );
        return o;
      }),
      (t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return t.d(n, "a", n), n;
      }),
      (t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      }),
      (t.p = ""),
      t((t.s = 0))
    );
  })({
    0: function (e, n, t) {
      e.exports = t("AH6B");
    },
    AH6B: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "component", function () {
          return i;
        }),
        t.d(n, "module", function () {
          return a;
        });
      var o = t("fXoL");
      const r = window.mainModule.MainService,
        u = window.mainModule.ShowInMainComponent;
      let i = (() => {
        class e {
          constructor(e) {
            this.main = e;
          }
          ngOnInit() {}
          run() {
            console.log(
              "\u51c6\u5907\u6267\u884c\u4e3b\u6a21\u5757\u670d\u52a1"
            ),
              this.main.run();
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(o["\u0275\u0275directiveInject"](r));
          }),
          (e.ɵcmp = o["\u0275\u0275defineComponent"]({
            type: e,
            selectors: [["app-remote"]],
            decls: 5,
            vars: 0,
            consts: [[3, "click"]],
            template: function (e, n) {
              1 & e &&
                (o["\u0275\u0275elementStart"](0, "p"),
                o["\u0275\u0275text"](1, "remote works!"),
                o["\u0275\u0275elementEnd"](),
                o["\u0275\u0275element"](2, "app-show-in-main"),
                o["\u0275\u0275elementStart"](3, "button", 0),
                o["\u0275\u0275listener"]("click", function () {
                  return n.run();
                }),
                o["\u0275\u0275text"](
                  4,
                  "\u70b9\u51fb\u6267\u884c\u4e3b\u6a21\u5757\u670d\u52a1"
                ),
                o["\u0275\u0275elementEnd"]());
            },
            directives: [u],
            styles: [""],
          })),
          e
        );
      })();
      var c = t("ofXK"),
        l = t("tyNb");
      const f = window.mainModule.ShowInMainModule;
      let a = (() => {
        class e {}
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
          (e.ɵinj = o["\u0275\u0275defineInjector"]({
            imports: [
              [
                c.CommonModule,
                l.RouterModule.forChild([
                  { path: "", pathMatch: "full", component: i },
                ]),
                f,
              ],
            ],
          })),
          e
        );
      })();
    },
    "e+ej": function (e, n) {
      e.exports = TLIB;
    },
    fXoL: function (e, n, t) {
      e.exports = t("e+ej")("fXoL");
    },
    ofXK: function (e, n, t) {
      e.exports = t("e+ej")("ofXK");
    },
    tyNb: function (e, n, t) {
      e.exports = t("e+ej")("tyNb");
    },
  })
);
