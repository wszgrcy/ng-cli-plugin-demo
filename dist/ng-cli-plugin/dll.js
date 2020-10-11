var TLIB = (function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var o = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            r,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return r;
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
    (n.p = "");
  var r = new Map(),
    o = new Map();
  return (
    (window.loadRemoteModule = function (e, t) {
      var n, i, s;
      if (
        (!t &&
          (void 0 === (n = e) && (n = ""),
          (t = n
            .split(/(\/|\\)/g)
            .pop()
            .split(".")[0])),
        r.has(t))
      )
        return r.get(t);
      var u = new Promise(function (e, t) {
        (i = e), (s = t);
      });
      return (
        r.set(t, u),
        o.set(t, i),
        (function (e, t) {
          var n,
            r = document.createElement("script");
          (r.charset = "utf-8"),
            (r.timeout = 120),
            (r.src = e),
            (n = function (e) {
              console.log("\u5b8c\u6210/\u5931\u8d25", e),
                (r.onerror = r.onload = null),
                clearTimeout(o),
                "timout" == e.type && t({ type: e.type, message: "timeout" });
            });
          var o = setTimeout(function () {
            n({ type: "timeout", target: r });
          }, 12e4);
          (r.onerror = r.onload = n), document.head.appendChild(r);
        })(e, s),
        u
      );
    }),
    (window.loadRemoteModuleJsonpCallBack = function (e, t) {
      r.has(e) && (o.get(e)(t), o.delete(e));
    }),
    n((n.s = 0))
  );
})({
  0: function (e, t, n) {
    e.exports = n;
  },
  "0EUg": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "concatAll", function () {
        return o;
      });
    var r = n("bHdf");
    function o() {
      return Object(r.mergeAll)(1);
    }
  },
  "2QA8": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "rxSubscriber", function () {
        return r;
      }),
      n.d(t, "$$rxSubscriber", function () {
        return o;
      });
    const r = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())(),
      o = r;
  },
  "2Vo4": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "BehaviorSubject", function () {
        return i;
      });
    var r = n("XNiG"),
      o = n("9ppp");
    class i extends r.Subject {
      constructor(e) {
        super(), (this._value = e);
      }
      get value() {
        return this.getValue();
      }
      _subscribe(e) {
        const t = super._subscribe(e);
        return t && !t.closed && e.next(this._value), t;
      }
      getValue() {
        if (this.hasError) throw this.thrownError;
        if (this.closed) throw new o.ObjectUnsubscribedError();
        return this._value;
      }
      next(e) {
        super.next((this._value = e));
      }
    }
  },
  "2fFW": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "config", function () {
        return o;
      });
    let r = !1;
    const o = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(e) {
        if (e) {
          const e = new Error();
          console.warn(
            "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
              e.stack
          );
        } else
          r &&
            console.log("RxJS: Back to a better error behavior. Thank you. <3");
        r = e;
      },
      get useDeprecatedSynchronousErrorHandling() {
        return r;
      },
    };
  },
  "4I5i": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ArgumentOutOfRangeError", function () {
        return r;
      });
    const r = (() => {
      function e() {
        return (
          Error.call(this),
          (this.message = "argument out of range"),
          (this.name = "ArgumentOutOfRangeError"),
          this
        );
      }
      return (e.prototype = Object.create(Error.prototype)), e;
    })();
  },
  "4yVj": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "schedulePromise", function () {
        return i;
      });
    var r = n("HDdC"),
      o = n("quSY");
    function i(e, t) {
      return new r.Observable((n) => {
        const r = new o.Subscription();
        return (
          r.add(
            t.schedule(() =>
              e.then(
                (e) => {
                  r.add(
                    t.schedule(() => {
                      n.next(e), r.add(t.schedule(() => n.complete()));
                    })
                  );
                },
                (e) => {
                  r.add(t.schedule(() => n.error(e)));
                }
              )
            )
          ),
          r
        );
      });
    }
  },
  "5+tZ": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "mergeMap", function () {
        return s;
      }),
      n.d(t, "MergeMapOperator", function () {
        return u;
      }),
      n.d(t, "MergeMapSubscriber", function () {
        return a;
      }),
      n.d(t, "flatMap", function () {
        return c;
      });
    var r = n("lJxs"),
      o = n("Cfvw"),
      i = n("zx2A");
    function s(e, t, n = Number.POSITIVE_INFINITY) {
      return "function" == typeof t
        ? (i) =>
            i.pipe(
              s(
                (n, i) =>
                  Object(o.from)(e(n, i)).pipe(
                    Object(r.map)((e, r) => t(n, e, i, r))
                  ),
                n
              )
            )
        : ("number" == typeof t && (n = t), (t) => t.lift(new u(e, n)));
    }
    class u {
      constructor(e, t = Number.POSITIVE_INFINITY) {
        (this.project = e), (this.concurrent = t);
      }
      call(e, t) {
        return t.subscribe(new a(e, this.project, this.concurrent));
      }
    }
    class a extends i.SimpleOuterSubscriber {
      constructor(e, t, n = Number.POSITIVE_INFINITY) {
        super(e),
          (this.project = t),
          (this.concurrent = n),
          (this.hasCompleted = !1),
          (this.buffer = []),
          (this.active = 0),
          (this.index = 0);
      }
      _next(e) {
        this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
      }
      _tryNext(e) {
        let t;
        const n = this.index++;
        try {
          t = this.project(e, n);
        } catch (r) {
          return void this.destination.error(r);
        }
        this.active++, this._innerSub(t);
      }
      _innerSub(e) {
        const t = new i.SimpleInnerSubscriber(this),
          n = this.destination;
        n.add(t);
        const r = Object(i.innerSubscribe)(e, t);
        r !== t && n.add(r);
      }
      _complete() {
        (this.hasCompleted = !0),
          0 === this.active &&
            0 === this.buffer.length &&
            this.destination.complete(),
          this.unsubscribe();
      }
      notifyNext(e) {
        this.destination.next(e);
      }
      notifyComplete() {
        const e = this.buffer;
        this.active--,
          e.length > 0
            ? this._next(e.shift())
            : 0 === this.active &&
              this.hasCompleted &&
              this.destination.complete();
      }
    }
    const c = s;
  },
  "51Dv": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "InnerSubscriber", function () {
        return o;
      });
    var r = n("7o/Q");
    class o extends r.Subscriber {
      constructor(e, t, n) {
        super(),
          (this.parent = e),
          (this.outerValue = t),
          (this.outerIndex = n),
          (this.index = 0);
      }
      _next(e) {
        this.parent.notifyNext(
          this.outerValue,
          e,
          this.outerIndex,
          this.index++,
          this
        );
      }
      _error(e) {
        this.parent.notifyError(e, this), this.unsubscribe();
      }
      _complete() {
        this.parent.notifyComplete(this), this.unsubscribe();
      }
    }
  },
  "5B2Y": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "scheduleObservable", function () {
        return s;
      });
    var r = n("HDdC"),
      o = n("quSY"),
      i = n("kJWO");
    function s(e, t) {
      return new r.Observable((n) => {
        const r = new o.Subscription();
        return (
          r.add(
            t.schedule(() => {
              const o = e[i.observable]();
              r.add(
                o.subscribe({
                  next(e) {
                    r.add(t.schedule(() => n.next(e)));
                  },
                  error(e) {
                    r.add(t.schedule(() => n.error(e)));
                  },
                  complete() {
                    r.add(t.schedule(() => n.complete()));
                  },
                })
              );
            })
          ),
          r
        );
      });
    }
  },
  "7HRe": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "scheduled", function () {
        return d;
      });
    var r = n("5B2Y"),
      o = n("4yVj"),
      i = n("jZKg"),
      s = n("MBAA"),
      u = n("QIAL"),
      a = n("c2HN"),
      c = n("I55L"),
      l = n("CMyj");
    function d(e, t) {
      if (null != e) {
        if (Object(u.isInteropObservable)(e))
          return Object(r.scheduleObservable)(e, t);
        if (Object(a.isPromise)(e)) return Object(o.schedulePromise)(e, t);
        if (Object(c.isArrayLike)(e)) return Object(i.scheduleArray)(e, t);
        if (Object(l.isIterable)(e) || "string" == typeof e)
          return Object(s.scheduleIterable)(e, t);
      }
      throw new TypeError(
        ((null !== e && typeof e) || e) + " is not observable"
      );
    }
  },
  "7o/Q": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Subscriber", function () {
        return c;
      }),
      n.d(t, "SafeSubscriber", function () {
        return l;
      });
    var r = n("n6bG"),
      o = n("gRHU"),
      i = n("quSY"),
      s = n("2QA8"),
      u = n("2fFW"),
      a = n("NJ4a");
    class c extends i.Subscription {
      constructor(e, t, n) {
        switch (
          (super(),
          (this.syncErrorValue = null),
          (this.syncErrorThrown = !1),
          (this.syncErrorThrowable = !1),
          (this.isStopped = !1),
          arguments.length)
        ) {
          case 0:
            this.destination = o.empty;
            break;
          case 1:
            if (!e) {
              this.destination = o.empty;
              break;
            }
            if ("object" == typeof e) {
              e instanceof c
                ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                  (this.destination = e),
                  e.add(this))
                : ((this.syncErrorThrowable = !0),
                  (this.destination = new l(this, e)));
              break;
            }
          default:
            (this.syncErrorThrowable = !0),
              (this.destination = new l(this, e, t, n));
        }
      }
      [s.rxSubscriber]() {
        return this;
      }
      static create(e, t, n) {
        const r = new c(e, t, n);
        return (r.syncErrorThrowable = !1), r;
      }
      next(e) {
        this.isStopped || this._next(e);
      }
      error(e) {
        this.isStopped || ((this.isStopped = !0), this._error(e));
      }
      complete() {
        this.isStopped || ((this.isStopped = !0), this._complete());
      }
      unsubscribe() {
        this.closed || ((this.isStopped = !0), super.unsubscribe());
      }
      _next(e) {
        this.destination.next(e);
      }
      _error(e) {
        this.destination.error(e), this.unsubscribe();
      }
      _complete() {
        this.destination.complete(), this.unsubscribe();
      }
      _unsubscribeAndRecycle() {
        const { _parentOrParents: e } = this;
        return (
          (this._parentOrParents = null),
          this.unsubscribe(),
          (this.closed = !1),
          (this.isStopped = !1),
          (this._parentOrParents = e),
          this
        );
      }
    }
    class l extends c {
      constructor(e, t, n, i) {
        let s;
        super(), (this._parentSubscriber = e);
        let u = this;
        Object(r.isFunction)(t)
          ? (s = t)
          : t &&
            ((s = t.next),
            (n = t.error),
            (i = t.complete),
            t !== o.empty &&
              ((u = Object.create(t)),
              Object(r.isFunction)(u.unsubscribe) &&
                this.add(u.unsubscribe.bind(u)),
              (u.unsubscribe = this.unsubscribe.bind(this)))),
          (this._context = u),
          (this._next = s),
          (this._error = n),
          (this._complete = i);
      }
      next(e) {
        if (!this.isStopped && this._next) {
          const { _parentSubscriber: t } = this;
          u.config.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
            ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
            : this.__tryOrUnsub(this._next, e);
        }
      }
      error(e) {
        if (!this.isStopped) {
          const { _parentSubscriber: t } = this,
            { useDeprecatedSynchronousErrorHandling: n } = u.config;
          if (this._error)
            n && t.syncErrorThrowable
              ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
              : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
          else if (t.syncErrorThrowable)
            n
              ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0))
              : Object(a.hostReportError)(e),
              this.unsubscribe();
          else {
            if ((this.unsubscribe(), n)) throw e;
            Object(a.hostReportError)(e);
          }
        }
      }
      complete() {
        if (!this.isStopped) {
          const { _parentSubscriber: e } = this;
          if (this._complete) {
            const t = () => this._complete.call(this._context);
            u.config.useDeprecatedSynchronousErrorHandling &&
            e.syncErrorThrowable
              ? (this.__tryOrSetError(e, t), this.unsubscribe())
              : (this.__tryOrUnsub(t), this.unsubscribe());
          } else this.unsubscribe();
        }
      }
      __tryOrUnsub(e, t) {
        try {
          e.call(this._context, t);
        } catch (n) {
          if (
            (this.unsubscribe(), u.config.useDeprecatedSynchronousErrorHandling)
          )
            throw n;
          Object(a.hostReportError)(n);
        }
      }
      __tryOrSetError(e, t, n) {
        if (!u.config.useDeprecatedSynchronousErrorHandling)
          throw new Error("bad call");
        try {
          t.call(this._context, n);
        } catch (r) {
          return u.config.useDeprecatedSynchronousErrorHandling
            ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
            : (Object(a.hostReportError)(r), !0);
        }
        return !1;
      }
      _unsubscribe() {
        const { _parentSubscriber: e } = this;
        (this._context = null),
          (this._parentSubscriber = null),
          e.unsubscribe();
      }
    }
  },
  "8Qeq": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "canReportError", function () {
        return o;
      });
    var r = n("7o/Q");
    function o(e) {
      for (; e; ) {
        const { closed: t, destination: n, isStopped: o } = e;
        if (t || o) return !1;
        e = n && n instanceof r.Subscriber ? n : null;
      }
      return !0;
    }
  },
  "9ppp": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ObjectUnsubscribedError", function () {
        return r;
      });
    const r = (() => {
      function e() {
        return (
          Error.call(this),
          (this.message = "object unsubscribed"),
          (this.name = "ObjectUnsubscribedError"),
          this
        );
      }
      return (e.prototype = Object.create(Error.prototype)), e;
    })();
  },
  BFxc: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "takeLast", function () {
        return s;
      });
    var r = n("7o/Q"),
      o = n("4I5i"),
      i = n("EY2u");
    function s(e) {
      return function (t) {
        return 0 === e ? Object(i.empty)() : t.lift(new u(e));
      };
    }
    class u {
      constructor(e) {
        if (((this.total = e), this.total < 0))
          throw new o.ArgumentOutOfRangeError();
      }
      call(e, t) {
        return t.subscribe(new a(e, this.total));
      }
    }
    class a extends r.Subscriber {
      constructor(e, t) {
        super(e), (this.total = t), (this.ring = new Array()), (this.count = 0);
      }
      _next(e) {
        const t = this.ring,
          n = this.total,
          r = this.count++;
        t.length < n ? t.push(e) : (t[r % n] = e);
      }
      _complete() {
        const e = this.destination;
        let t = this.count;
        if (t > 0) {
          const n = this.count >= this.total ? this.total : this.count,
            r = this.ring;
          for (let o = 0; o < n; o++) {
            const o = t++ % n;
            e.next(r[o]);
          }
        }
        e.complete();
      }
    }
  },
  CMyj: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "isIterable", function () {
        return o;
      });
    var r = n("Lhse");
    function o(e) {
      return e && "function" == typeof e[r.iterator];
    }
  },
  CRDf: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeToObservable", function () {
        return o;
      });
    var r = n("kJWO");
    const o = (e) => (t) => {
      const n = e[r.observable]();
      if ("function" != typeof n.subscribe)
        throw new TypeError(
          "Provided object does not correctly implement Symbol.observable"
        );
      return n.subscribe(t);
    };
  },
  Cfvw: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "from", function () {
        return s;
      });
    var r = n("HDdC"),
      o = n("SeVD"),
      i = n("7HRe");
    function s(e, t) {
      return t
        ? Object(i.scheduled)(e, t)
        : e instanceof r.Observable
        ? e
        : new r.Observable(Object(o.subscribeTo)(e));
    }
  },
  DH7j: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "isArray", function () {
        return r;
      });
    const r = (() =>
      Array.isArray || ((e) => e && "number" == typeof e.length))();
  },
  EQ5u: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ConnectableObservable", function () {
        return u;
      }),
      n.d(t, "connectableObservableDescriptor", function () {
        return a;
      });
    var r = n("XNiG"),
      o = n("HDdC"),
      i = (n("7o/Q"), n("quSY")),
      s = n("x+ZX");
    class u extends o.Observable {
      constructor(e, t) {
        super(),
          (this.source = e),
          (this.subjectFactory = t),
          (this._refCount = 0),
          (this._isComplete = !1);
      }
      _subscribe(e) {
        return this.getSubject().subscribe(e);
      }
      getSubject() {
        const e = this._subject;
        return (
          (e && !e.isStopped) || (this._subject = this.subjectFactory()),
          this._subject
        );
      }
      connect() {
        let e = this._connection;
        return (
          e ||
            ((this._isComplete = !1),
            (e = this._connection = new i.Subscription()),
            e.add(this.source.subscribe(new c(this.getSubject(), this))),
            e.closed &&
              ((this._connection = null), (e = i.Subscription.EMPTY))),
          e
        );
      }
      refCount() {
        return Object(s.refCount)()(this);
      }
    }
    const a = (() => {
      const e = u.prototype;
      return {
        operator: { value: null },
        _refCount: { value: 0, writable: !0 },
        _subject: { value: null, writable: !0 },
        _connection: { value: null, writable: !0 },
        _subscribe: { value: e._subscribe },
        _isComplete: { value: e._isComplete, writable: !0 },
        getSubject: { value: e.getSubject },
        connect: { value: e.connect },
        refCount: { value: e.refCount },
      };
    })();
    class c extends r.SubjectSubscriber {
      constructor(e, t) {
        super(e), (this.connectable = t);
      }
      _error(e) {
        this._unsubscribe(), super._error(e);
      }
      _complete() {
        (this.connectable._isComplete = !0),
          this._unsubscribe(),
          super._complete();
      }
      _unsubscribe() {
        const e = this.connectable;
        if (e) {
          this.connectable = null;
          const t = e._connection;
          (e._refCount = 0),
            (e._subject = null),
            (e._connection = null),
            t && t.unsubscribe();
        }
      }
    }
  },
  EY2u: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "EMPTY", function () {
        return o;
      }),
      n.d(t, "empty", function () {
        return i;
      });
    var r = n("HDdC");
    const o = new r.Observable((e) => e.complete());
    function i(e) {
      return e
        ? (function (e) {
            return new r.Observable((t) => e.schedule(() => t.complete()));
          })(e)
        : o;
    }
  },
  GyhO: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "concat", function () {
        return i;
      });
    var r = n("LRne"),
      o = n("0EUg");
    function i(...e) {
      return Object(o.concatAll)()(Object(r.of)(...e));
    }
  },
  HDdC: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Observable", function () {
        return a;
      });
    var r = n("8Qeq"),
      o = n("WyKG"),
      i = n("kJWO"),
      s = n("mCNh"),
      u = n("2fFW");
    let a = (() => {
      class e {
        constructor(e) {
          (this._isScalar = !1), e && (this._subscribe = e);
        }
        lift(t) {
          const n = new e();
          return (n.source = this), (n.operator = t), n;
        }
        subscribe(e, t, n) {
          const { operator: r } = this,
            i = Object(o.toSubscriber)(e, t, n);
          if (
            (i.add(
              r
                ? r.call(i, this.source)
                : this.source ||
                  (u.config.useDeprecatedSynchronousErrorHandling &&
                    !i.syncErrorThrowable)
                ? this._subscribe(i)
                : this._trySubscribe(i)
            ),
            u.config.useDeprecatedSynchronousErrorHandling &&
              i.syncErrorThrowable &&
              ((i.syncErrorThrowable = !1), i.syncErrorThrown))
          )
            throw i.syncErrorValue;
          return i;
        }
        _trySubscribe(e) {
          try {
            return this._subscribe(e);
          } catch (t) {
            u.config.useDeprecatedSynchronousErrorHandling &&
              ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
              Object(r.canReportError)(e) ? e.error(t) : console.warn(t);
          }
        }
        forEach(e, t) {
          return new (t = c(t))((t, n) => {
            let r;
            r = this.subscribe(
              (t) => {
                try {
                  e(t);
                } catch (o) {
                  n(o), r && r.unsubscribe();
                }
              },
              n,
              t
            );
          });
        }
        _subscribe(e) {
          const { source: t } = this;
          return t && t.subscribe(e);
        }
        [i.observable]() {
          return this;
        }
        pipe(...e) {
          return 0 === e.length ? this : Object(s.pipeFromArray)(e)(this);
        }
        toPromise(e) {
          return new (e = c(e))((e, t) => {
            let n;
            this.subscribe(
              (e) => (n = e),
              (e) => t(e),
              () => e(n)
            );
          });
        }
      }
      return (e.create = (t) => new e(t)), e;
    })();
    function c(e) {
      if ((e || (e = u.config.Promise || Promise), !e))
        throw new Error("no Promise impl found");
      return e;
    }
  },
  I55L: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "isArrayLike", function () {
        return r;
      });
    const r = (e) => e && "number" == typeof e.length && "function" != typeof e;
  },
  IzEk: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "take", function () {
        return s;
      });
    var r = n("7o/Q"),
      o = n("4I5i"),
      i = n("EY2u");
    function s(e) {
      return (t) => (0 === e ? Object(i.empty)() : t.lift(new u(e)));
    }
    class u {
      constructor(e) {
        if (((this.total = e), this.total < 0))
          throw new o.ArgumentOutOfRangeError();
      }
      call(e, t) {
        return t.subscribe(new a(e, this.total));
      }
    }
    class a extends r.Subscriber {
      constructor(e, t) {
        super(e), (this.total = t), (this.count = 0);
      }
      _next(e) {
        const t = this.total,
          n = ++this.count;
        n <= t &&
          (this.destination.next(e),
          n === t && (this.destination.complete(), this.unsubscribe()));
      }
    }
  },
  JIr8: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "catchError", function () {
        return o;
      });
    var r = n("zx2A");
    function o(e) {
      return function (t) {
        const n = new i(e),
          r = t.lift(n);
        return (n.caught = r);
      };
    }
    class i {
      constructor(e) {
        this.selector = e;
      }
      call(e, t) {
        return t.subscribe(new s(e, this.selector, this.caught));
      }
    }
    class s extends r.SimpleOuterSubscriber {
      constructor(e, t, n) {
        super(e), (this.selector = t), (this.caught = n);
      }
      error(e) {
        if (!this.isStopped) {
          let n;
          try {
            n = this.selector(e, this.caught);
          } catch (t) {
            return void super.error(t);
          }
          this._unsubscribeAndRecycle();
          const o = new r.SimpleInnerSubscriber(this);
          this.add(o);
          const i = Object(r.innerSubscribe)(n, o);
          i !== o && this.add(i);
        }
      }
    }
  },
  JX91: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "startWith", function () {
        return i;
      });
    var r = n("GyhO"),
      o = n("z+Ro");
    function i(...e) {
      const t = e[e.length - 1];
      return Object(o.isScheduler)(t)
        ? (e.pop(), (n) => Object(r.concat)(e, n, t))
        : (t) => Object(r.concat)(e, t);
    }
  },
  Kqap: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "scan", function () {
        return o;
      });
    var r = n("7o/Q");
    function o(e, t) {
      let n = !1;
      return (
        arguments.length >= 2 && (n = !0),
        function (r) {
          return r.lift(new i(e, t, n));
        }
      );
    }
    class i {
      constructor(e, t, n = !1) {
        (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
      }
      call(e, t) {
        return t.subscribe(new s(e, this.accumulator, this.seed, this.hasSeed));
      }
    }
    class s extends r.Subscriber {
      constructor(e, t, n, r) {
        super(e),
          (this.accumulator = t),
          (this._seed = n),
          (this.hasSeed = r),
          (this.index = 0);
      }
      get seed() {
        return this._seed;
      }
      set seed(e) {
        (this.hasSeed = !0), (this._seed = e);
      }
      _next(e) {
        if (this.hasSeed) return this._tryNext(e);
        (this.seed = e), this.destination.next(e);
      }
      _tryNext(e) {
        const t = this.index++;
        let n;
        try {
          n = this.accumulator(this.seed, e, t);
        } catch (r) {
          this.destination.error(r);
        }
        (this.seed = n), this.destination.next(n);
      }
    }
  },
  KqfI: function (e, t, n) {
    "use strict";
    function r() {}
    n.r(t),
      n.d(t, "noop", function () {
        return r;
      });
  },
  LRne: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "of", function () {
        return s;
      });
    var r = n("z+Ro"),
      o = n("yCtX"),
      i = n("jZKg");
    function s(...e) {
      let t = e[e.length - 1];
      return Object(r.isScheduler)(t)
        ? (e.pop(), Object(i.scheduleArray)(e, t))
        : Object(o.fromArray)(e);
    }
  },
  Lhse: function (e, t, n) {
    "use strict";
    function r() {
      return "function" == typeof Symbol && Symbol.iterator
        ? Symbol.iterator
        : "@@iterator";
    }
    n.r(t),
      n.d(t, "getSymbolIterator", function () {
        return r;
      }),
      n.d(t, "iterator", function () {
        return o;
      }),
      n.d(t, "$$iterator", function () {
        return i;
      });
    const o = r(),
      i = o;
  },
  MBAA: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "scheduleIterable", function () {
        return s;
      });
    var r = n("HDdC"),
      o = n("quSY"),
      i = n("Lhse");
    function s(e, t) {
      if (!e) throw new Error("Iterable cannot be null");
      return new r.Observable((n) => {
        const r = new o.Subscription();
        let s;
        return (
          r.add(() => {
            s && "function" == typeof s.return && s.return();
          }),
          r.add(
            t.schedule(() => {
              (s = e[i.iterator]()),
                r.add(
                  t.schedule(function () {
                    if (n.closed) return;
                    let e, t;
                    try {
                      const n = s.next();
                      (e = n.value), (t = n.done);
                    } catch (r) {
                      return void n.error(r);
                    }
                    t ? n.complete() : (n.next(e), this.schedule());
                  })
                );
            })
          ),
          r
        );
      });
    }
  },
  NJ4a: function (e, t, n) {
    "use strict";
    function r(e) {
      setTimeout(() => {
        throw e;
      }, 0);
    }
    n.r(t),
      n.d(t, "hostReportError", function () {
        return r;
      });
  },
  NJ9Y: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "last", function () {
        return c;
      });
    var r = n("sVev"),
      o = n("pLZG"),
      i = n("BFxc"),
      s = n("XDbj"),
      u = n("xbPD"),
      a = n("SpAZ");
    function c(e, t) {
      const n = arguments.length >= 2;
      return (c) =>
        c.pipe(
          e ? Object(o.filter)((t, n) => e(t, n, c)) : a.identity,
          Object(i.takeLast)(1),
          n
            ? Object(u.defaultIfEmpty)(t)
            : Object(s.throwIfEmpty)(() => new r.EmptyError())
        );
    }
  },
  NXyV: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "defer", function () {
        return s;
      });
    var r = n("HDdC"),
      o = n("Cfvw"),
      i = n("EY2u");
    function s(e) {
      return new r.Observable((t) => {
        let n;
        try {
          n = e();
        } catch (r) {
          return void t.error(r);
        }
        return (n ? Object(o.from)(n) : Object(i.empty)()).subscribe(t);
      });
    }
  },
  QIAL: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "isInteropObservable", function () {
        return o;
      });
    var r = n("kJWO");
    function o(e) {
      return e && "function" == typeof e[r.observable];
    }
  },
  SeVD: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeTo", function () {
        return f;
      });
    var r = n("ngJS"),
      o = n("a7t3"),
      i = n("pLzU"),
      s = n("CRDf"),
      u = n("I55L"),
      a = n("c2HN"),
      c = n("XoHu"),
      l = n("Lhse"),
      d = n("kJWO");
    const f = (e) => {
      if (e && "function" == typeof e[d.observable])
        return Object(s.subscribeToObservable)(e);
      if (Object(u.isArrayLike)(e)) return Object(r.subscribeToArray)(e);
      if (Object(a.isPromise)(e)) return Object(o.subscribeToPromise)(e);
      if (e && "function" == typeof e[l.iterator])
        return Object(i.subscribeToIterable)(e);
      {
        const t = Object(c.isObject)(e) ? "an invalid object" : `'${e}'`;
        throw new TypeError(
          `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
        );
      }
    };
  },
  SpAZ: function (e, t, n) {
    "use strict";
    function r(e) {
      return e;
    }
    n.r(t),
      n.d(t, "identity", function () {
        return r;
      });
  },
  SxV6: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "first", function () {
        return c;
      });
    var r = n("sVev"),
      o = n("pLZG"),
      i = n("IzEk"),
      s = n("xbPD"),
      u = n("XDbj"),
      a = n("SpAZ");
    function c(e, t) {
      const n = arguments.length >= 2;
      return (c) =>
        c.pipe(
          e ? Object(o.filter)((t, n) => e(t, n, c)) : a.identity,
          Object(i.take)(1),
          n
            ? Object(s.defaultIfEmpty)(t)
            : Object(u.throwIfEmpty)(() => new r.EmptyError())
        );
    }
  },
  VRyK: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "merge", function () {
        return u;
      });
    var r = n("HDdC"),
      o = n("z+Ro"),
      i = n("bHdf"),
      s = n("yCtX");
    function u(...e) {
      let t = Number.POSITIVE_INFINITY,
        n = null,
        u = e[e.length - 1];
      return (
        Object(o.isScheduler)(u)
          ? ((n = e.pop()),
            e.length > 1 && "number" == typeof e[e.length - 1] && (t = e.pop()))
          : "number" == typeof u && (t = e.pop()),
        null === n && 1 === e.length && e[0] instanceof r.Observable
          ? e[0]
          : Object(i.mergeAll)(t)(Object(s.fromArray)(e, n))
      );
    }
  },
  WyKG: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "toSubscriber", function () {
        return s;
      });
    var r = n("7o/Q"),
      o = n("2QA8"),
      i = n("gRHU");
    function s(e, t, n) {
      if (e) {
        if (e instanceof r.Subscriber) return e;
        if (e[o.rxSubscriber]) return e[o.rxSubscriber]();
      }
      return e || t || n
        ? new r.Subscriber(e, t, n)
        : new r.Subscriber(i.empty);
    }
  },
  XDbj: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "throwIfEmpty", function () {
        return i;
      });
    var r = n("sVev"),
      o = n("7o/Q");
    function i(e = a) {
      return (t) => t.lift(new s(e));
    }
    class s {
      constructor(e) {
        this.errorFactory = e;
      }
      call(e, t) {
        return t.subscribe(new u(e, this.errorFactory));
      }
    }
    class u extends o.Subscriber {
      constructor(e, t) {
        super(e), (this.errorFactory = t), (this.hasValue = !1);
      }
      _next(e) {
        (this.hasValue = !0), this.destination.next(e);
      }
      _complete() {
        if (this.hasValue) return this.destination.complete();
        {
          let t;
          try {
            t = this.errorFactory();
          } catch (e) {
            t = e;
          }
          this.destination.error(t);
        }
      }
    }
    function a() {
      return new r.EmptyError();
    }
  },
  XNiG: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "SubjectSubscriber", function () {
        return c;
      }),
      n.d(t, "Subject", function () {
        return l;
      }),
      n.d(t, "AnonymousSubject", function () {
        return d;
      });
    var r = n("HDdC"),
      o = n("7o/Q"),
      i = n("quSY"),
      s = n("9ppp"),
      u = n("Ylt2"),
      a = n("2QA8");
    class c extends o.Subscriber {
      constructor(e) {
        super(e), (this.destination = e);
      }
    }
    let l = (() => {
      class e extends r.Observable {
        constructor() {
          super(),
            (this.observers = []),
            (this.closed = !1),
            (this.isStopped = !1),
            (this.hasError = !1),
            (this.thrownError = null);
        }
        [a.rxSubscriber]() {
          return new c(this);
        }
        lift(e) {
          const t = new d(this, this);
          return (t.operator = e), t;
        }
        next(e) {
          if (this.closed) throw new s.ObjectUnsubscribedError();
          if (!this.isStopped) {
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let o = 0; o < n; o++) r[o].next(e);
          }
        }
        error(e) {
          if (this.closed) throw new s.ObjectUnsubscribedError();
          (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
          const { observers: t } = this,
            n = t.length,
            r = t.slice();
          for (let o = 0; o < n; o++) r[o].error(e);
          this.observers.length = 0;
        }
        complete() {
          if (this.closed) throw new s.ObjectUnsubscribedError();
          this.isStopped = !0;
          const { observers: e } = this,
            t = e.length,
            n = e.slice();
          for (let r = 0; r < t; r++) n[r].complete();
          this.observers.length = 0;
        }
        unsubscribe() {
          (this.isStopped = !0), (this.closed = !0), (this.observers = null);
        }
        _trySubscribe(e) {
          if (this.closed) throw new s.ObjectUnsubscribedError();
          return super._trySubscribe(e);
        }
        _subscribe(e) {
          if (this.closed) throw new s.ObjectUnsubscribedError();
          return this.hasError
            ? (e.error(this.thrownError), i.Subscription.EMPTY)
            : this.isStopped
            ? (e.complete(), i.Subscription.EMPTY)
            : (this.observers.push(e), new u.SubjectSubscription(this, e));
        }
        asObservable() {
          const e = new r.Observable();
          return (e.source = this), e;
        }
      }
      return (e.create = (e, t) => new d(e, t)), e;
    })();
    class d extends l {
      constructor(e, t) {
        super(), (this.destination = e), (this.source = t);
      }
      next(e) {
        const { destination: t } = this;
        t && t.next && t.next(e);
      }
      error(e) {
        const { destination: t } = this;
        t && t.error && this.destination.error(e);
      }
      complete() {
        const { destination: e } = this;
        e && e.complete && this.destination.complete();
      }
      _subscribe(e) {
        const { source: t } = this;
        return t ? this.source.subscribe(e) : i.Subscription.EMPTY;
      }
    }
  },
  XoHu: function (e, t, n) {
    "use strict";
    function r(e) {
      return null !== e && "object" == typeof e;
    }
    n.r(t),
      n.d(t, "isObject", function () {
        return r;
      });
  },
  Ylt2: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "SubjectSubscription", function () {
        return o;
      });
    var r = n("quSY");
    class o extends r.Subscription {
      constructor(e, t) {
        super(), (this.subject = e), (this.subscriber = t), (this.closed = !1);
      }
      unsubscribe() {
        if (this.closed) return;
        this.closed = !0;
        const e = this.subject,
          t = e.observers;
        if (
          ((this.subject = null),
          !t || 0 === t.length || e.isStopped || e.closed)
        )
          return;
        const n = t.indexOf(this.subscriber);
        -1 !== n && t.splice(n, 1);
      }
    }
  },
  ZUHj: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeToResult", function () {
        return s;
      });
    var r = n("51Dv"),
      o = n("SeVD"),
      i = n("HDdC");
    function s(e, t, n, s, u = new r.InnerSubscriber(e, n, s)) {
      if (!u.closed)
        return t instanceof i.Observable
          ? t.subscribe(u)
          : Object(o.subscribeTo)(t)(u);
    }
  },
  a7t3: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeToPromise", function () {
        return o;
      });
    var r = n("NJ4a");
    const o = (e) => (t) => (
      e
        .then(
          (e) => {
            t.closed || (t.next(e), t.complete());
          },
          (e) => t.error(e)
        )
        .then(null, r.hostReportError),
      t
    );
  },
  bHdf: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "mergeAll", function () {
        return i;
      });
    var r = n("5+tZ"),
      o = n("SpAZ");
    function i(e = Number.POSITIVE_INFINITY) {
      return Object(r.mergeMap)(o.identity, e);
    }
  },
  bOdf: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "concatMap", function () {
        return o;
      });
    var r = n("5+tZ");
    function o(e, t) {
      return Object(r.mergeMap)(e, t, 1);
    }
  },
  c2HN: function (e, t, n) {
    "use strict";
    function r(e) {
      return (
        !!e && "function" != typeof e.subscribe && "function" == typeof e.then
      );
    }
    n.r(t),
      n.d(t, "isPromise", function () {
        return r;
      });
  },
  eIep: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "switchMap", function () {
        return s;
      });
    var r = n("lJxs"),
      o = n("Cfvw"),
      i = n("zx2A");
    function s(e, t) {
      return "function" == typeof t
        ? (n) =>
            n.pipe(
              s((n, i) =>
                Object(o.from)(e(n, i)).pipe(
                  Object(r.map)((e, r) => t(n, e, i, r))
                )
              )
            )
        : (t) => t.lift(new u(e));
    }
    class u {
      constructor(e) {
        this.project = e;
      }
      call(e, t) {
        return t.subscribe(new a(e, this.project));
      }
    }
    class a extends i.SimpleOuterSubscriber {
      constructor(e, t) {
        super(e), (this.project = t), (this.index = 0);
      }
      _next(e) {
        let t;
        const n = this.index++;
        try {
          t = this.project(e, n);
        } catch (r) {
          return void this.destination.error(r);
        }
        this._innerSub(t);
      }
      _innerSub(e) {
        const t = this.innerSubscription;
        t && t.unsubscribe();
        const n = new i.SimpleInnerSubscriber(this),
          r = this.destination;
        r.add(n),
          (this.innerSubscription = Object(i.innerSubscribe)(e, n)),
          this.innerSubscription !== n && r.add(this.innerSubscription);
      }
      _complete() {
        const { innerSubscription: e } = this;
        (e && !e.closed) || super._complete(), this.unsubscribe();
      }
      _unsubscribe() {
        this.innerSubscription = void 0;
      }
      notifyComplete() {
        (this.innerSubscription = void 0), this.isStopped && super._complete();
      }
      notifyNext(e) {
        this.destination.next(e);
      }
    }
  },
  fXoL: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ANALYZE_FOR_ENTRY_COMPONENTS", function () {
        return Au;
      }),
      n.d(t, "APP_BOOTSTRAP_LISTENER", function () {
        return ay;
      }),
      n.d(t, "APP_ID", function () {
        return ny;
      }),
      n.d(t, "APP_INITIALIZER", function () {
        return ey;
      }),
      n.d(t, "ApplicationInitStatus", function () {
        return ty;
      }),
      n.d(t, "ApplicationModule", function () {
        return Qb;
      }),
      n.d(t, "ApplicationRef", function () {
        return ib;
      }),
      n.d(t, "Attribute", function () {
        return D;
      }),
      n.d(t, "COMPILER_OPTIONS", function () {
        return Iy;
      }),
      n.d(t, "CUSTOM_ELEMENTS_SCHEMA", function () {
        return fr;
      }),
      n.d(t, "ChangeDetectionStrategy", function () {
        return Re;
      }),
      n.d(t, "ChangeDetectorRef", function () {
        return _s;
      }),
      n.d(t, "Compiler", function () {
        return xy;
      }),
      n.d(t, "CompilerFactory", function () {
        return Ay;
      }),
      n.d(t, "Component", function () {
        return Vm;
      }),
      n.d(t, "ComponentFactory", function () {
        return id;
      }),
      n.d(t, "ComponentFactoryResolver", function () {
        return cd;
      }),
      n.d(t, "ComponentRef", function () {
        return od;
      }),
      n.d(t, "ContentChild", function () {
        return Tu;
      }),
      n.d(t, "ContentChildren", function () {
        return ku;
      }),
      n.d(t, "DEFAULT_CURRENCY_CODE", function () {
        return fy;
      }),
      n.d(t, "DebugElement", function () {
        return Vb;
      }),
      n.d(t, "DebugEventListener", function () {
        return bb;
      }),
      n.d(t, "DebugNode", function () {
        return Lb;
      }),
      n.d(t, "DefaultIterableDiffer", function () {
        return Sd;
      }),
      n.d(t, "Directive", function () {
        return Lm;
      }),
      n.d(t, "ElementRef", function () {
        return fd;
      }),
      n.d(t, "EmbeddedViewRef", function () {
        return yb;
      }),
      n.d(t, "ErrorHandler", function () {
        return dr;
      }),
      n.d(t, "EventEmitter", function () {
        return kg;
      }),
      n.d(t, "Host", function () {
        return w;
      }),
      n.d(t, "HostBinding", function () {
        return $m;
      }),
      n.d(t, "HostListener", function () {
        return zm;
      }),
      n.d(t, "INJECTOR", function () {
        return ie;
      }),
      n.d(t, "Inject", function () {
        return y;
      }),
      n.d(t, "InjectFlags", function () {
        return E;
      }),
      n.d(t, "Injectable", function () {
        return Us;
      }),
      n.d(t, "InjectionToken", function () {
        return oe;
      }),
      n.d(t, "Injector", function () {
        return iu;
      }),
      n.d(t, "Input", function () {
        return Bm;
      }),
      n.d(t, "IterableDiffers", function () {
        return Rd;
      }),
      n.d(t, "KeyValueDiffers", function () {
        return Fd;
      }),
      n.d(t, "LOCALE_ID", function () {
        return dy;
      }),
      n.d(t, "MissingTranslationStrategy", function () {
        return gy;
      }),
      n.d(t, "ModuleWithComponentFactories", function () {
        return by;
      }),
      n.d(t, "NO_ERRORS_SCHEMA", function () {
        return hr;
      }),
      n.d(t, "NgModule", function () {
        return Ym;
      }),
      n.d(t, "NgModuleFactory", function () {
        return De;
      }),
      n.d(t, "NgModuleFactoryLoader", function () {
        return ub;
      }),
      n.d(t, "NgModuleRef", function () {
        return Ce;
      }),
      n.d(t, "NgProbeToken", function () {
        return Yy;
      }),
      n.d(t, "NgZone", function () {
        return Ty;
      }),
      n.d(t, "Optional", function () {
        return b;
      }),
      n.d(t, "Output", function () {
        return Hm;
      }),
      n.d(t, "PACKAGE_ROOT_URL", function () {
        return cy;
      }),
      n.d(t, "PLATFORM_ID", function () {
        return uy;
      }),
      n.d(t, "PLATFORM_INITIALIZER", function () {
        return sy;
      }),
      n.d(t, "Pipe", function () {
        return Um;
      }),
      n.d(t, "PlatformRef", function () {
        return rb;
      }),
      n.d(t, "Query", function () {
        return ju;
      }),
      n.d(t, "QueryList", function () {
        return Rg;
      }),
      n.d(t, "ReflectiveInjector", function () {
        return xu;
      }),
      n.d(t, "ReflectiveKey", function () {
        return lu;
      }),
      n.d(t, "Renderer2", function () {
        return yd;
      }),
      n.d(t, "RendererFactory2", function () {
        return gd;
      }),
      n.d(t, "RendererStyleFlags2", function () {
        return md;
      }),
      n.d(t, "ResolvedReflectiveFactory", function () {
        return bu;
      }),
      n.d(t, "Sanitizer", function () {
        return _d;
      }),
      n.d(t, "SecurityContext", function () {
        return ro;
      }),
      n.d(t, "Self", function () {
        return v;
      }),
      n.d(t, "SimpleChange", function () {
        return lt;
      }),
      n.d(t, "SkipSelf", function () {
        return _;
      }),
      n.d(t, "SystemJsNgModuleLoader", function () {
        return pb;
      }),
      n.d(t, "SystemJsNgModuleLoaderConfig", function () {
        return fb;
      }),
      n.d(t, "TRANSLATIONS", function () {
        return hy;
      }),
      n.d(t, "TRANSLATIONS_FORMAT", function () {
        return py;
      }),
      n.d(t, "TemplateRef", function () {
        return Ld;
      }),
      n.d(t, "Testability", function () {
        return Uy;
      }),
      n.d(t, "TestabilityRegistry", function () {
        return By;
      }),
      n.d(t, "Type", function () {
        return Ds;
      }),
      n.d(t, "VERSION", function () {
        return Cd;
      }),
      n.d(t, "Version", function () {
        return wd;
      }),
      n.d(t, "ViewChild", function () {
        return Fu;
      }),
      n.d(t, "ViewChildren", function () {
        return Ru;
      }),
      n.d(t, "ViewContainerRef", function () {
        return Bd;
      }),
      n.d(t, "ViewEncapsulation", function () {
        return Ne;
      }),
      n.d(t, "ViewRef", function () {
        return mb;
      }),
      n.d(t, "WrappedValue", function () {
        return Da;
      }),
      n.d(t, "asNativeElements", function () {
        return wb;
      }),
      n.d(t, "assertPlatform", function () {
        return eb;
      }),
      n.d(t, "createPlatform", function () {
        return Jy;
      }),
      n.d(t, "createPlatformFactory", function () {
        return Xy;
      }),
      n.d(t, "defineInjectable", function () {
        return I;
      }),
      n.d(t, "destroyPlatform", function () {
        return tb;
      }),
      n.d(t, "enableProdMode", function () {
        return kr;
      }),
      n.d(t, "forwardRef", function () {
        return B;
      }),
      n.d(t, "getDebugNode", function () {
        return Fb;
      }),
      n.d(t, "getModuleFactory", function () {
        return lb;
      }),
      n.d(t, "getPlatform", function () {
        return nb;
      }),
      n.d(t, "inject", function () {
        return ye;
      }),
      n.d(t, "isDevMode", function () {
        return jr;
      }),
      n.d(t, "platformCore", function () {
        return Ub;
      }),
      n.d(t, "resolveForwardRef", function () {
        return H;
      }),
      n.d(t, "setTestabilityGetter", function () {
        return $y;
      }),
      n.d(t, "\u02750", function () {
        return m;
      }),
      n.d(t, "\u02751", function () {
        return C;
      }),
      n.d(t, "\u0275ALLOW_MULTIPLE_PLATFORMS", function () {
        return Ky;
      }),
      n.d(t, "\u0275APP_ID_RANDOM_PROVIDER", function () {
        return oy;
      }),
      n.d(t, "\u0275ChangeDetectorStatus", function () {
        return Fe;
      }),
      n.d(t, "\u0275CodegenComponentFactoryResolver", function () {
        return ld;
      }),
      n.d(
        t,
        "\u0275Compiler_compileModuleAndAllComponentsAsync__POST_R3__",
        function () {
          return Sy;
        }
      ),
      n.d(
        t,
        "\u0275Compiler_compileModuleAndAllComponentsSync__POST_R3__",
        function () {
          return Dy;
        }
      ),
      n.d(t, "\u0275Compiler_compileModuleAsync__POST_R3__", function () {
        return wy;
      }),
      n.d(t, "\u0275Compiler_compileModuleSync__POST_R3__", function () {
        return vy;
      }),
      n.d(t, "\u0275ComponentFactory", function () {
        return id;
      }),
      n.d(t, "\u0275Console", function () {
        return ly;
      }),
      n.d(t, "\u0275DEFAULT_LOCALE_ID", function () {
        return ep;
      }),
      n.d(t, "\u0275EMPTY_ARRAY", function () {
        return Vf;
      }),
      n.d(t, "\u0275EMPTY_MAP", function () {
        return Uf;
      }),
      n.d(t, "\u0275INJECTOR_IMPL__POST_R3__", function () {
        return ru;
      }),
      n.d(t, "\u0275INJECTOR_SCOPE", function () {
        return $s;
      }),
      n.d(t, "\u0275LifecycleHooksFeature", function () {
        return ca;
      }),
      n.d(t, "\u0275LocaleDataIndex", function () {
        return Jh;
      }),
      n.d(t, "\u0275NG_COMP_DEF", function () {
        return Y;
      }),
      n.d(t, "\u0275NG_DIR_DEF", function () {
        return J;
      }),
      n.d(t, "\u0275NG_ELEMENT_ID", function () {
        return re;
      }),
      n.d(t, "\u0275NG_INJ_DEF", function () {
        return F;
      }),
      n.d(t, "\u0275NG_MOD_DEF", function () {
        return ee;
      }),
      n.d(t, "\u0275NG_PIPE_DEF", function () {
        return X;
      }),
      n.d(t, "\u0275NG_PROV_DEF", function () {
        return R;
      }),
      n.d(t, "\u0275NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR", function () {
        return kh;
      }),
      n.d(t, "\u0275NO_CHANGE", function () {
        return Po;
      }),
      n.d(t, "\u0275NgModuleFactory", function () {
        return sg;
      }),
      n.d(t, "\u0275NoopNgZone", function () {
        return Vy;
      }),
      n.d(t, "\u0275ReflectionCapabilities", function () {
        return As;
      }),
      n.d(t, "\u0275Render3ComponentFactory", function () {
        return Bh;
      }),
      n.d(t, "\u0275Render3ComponentRef", function () {
        return Hh;
      }),
      n.d(t, "\u0275Render3NgModuleRef", function () {
        return ig;
      }),
      n.d(
        t,
        "\u0275SWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__",
        function () {
          return ws;
        }
      ),
      n.d(t, "\u0275SWITCH_COMPILE_COMPONENT__POST_R3__", function () {
        return qm;
      }),
      n.d(t, "\u0275SWITCH_COMPILE_DIRECTIVE__POST_R3__", function () {
        return Wm;
      }),
      n.d(t, "\u0275SWITCH_COMPILE_INJECTABLE__POST_R3__", function () {
        return Bs;
      }),
      n.d(t, "\u0275SWITCH_COMPILE_NGMODULE__POST_R3__", function () {
        return Jm;
      }),
      n.d(t, "\u0275SWITCH_COMPILE_PIPE__POST_R3__", function () {
        return Qm;
      }),
      n.d(t, "\u0275SWITCH_ELEMENT_REF_FACTORY__POST_R3__", function () {
        return hd;
      }),
      n.d(t, "\u0275SWITCH_IVY_ENABLED__POST_R3__", function () {
        return my;
      }),
      n.d(t, "\u0275SWITCH_RENDERER2_FACTORY__POST_R3__", function () {
        return bd;
      }),
      n.d(t, "\u0275SWITCH_TEMPLATE_REF_FACTORY__POST_R3__", function () {
        return Vd;
      }),
      n.d(t, "\u0275SWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__", function () {
        return Hd;
      }),
      n.d(t, "\u0275_sanitizeHtml", function () {
        return to;
      }),
      n.d(t, "\u0275_sanitizeUrl", function () {
        return Mr;
      }),
      n.d(t, "\u0275allowSanitizationBypassAndThrow", function () {
        return wr;
      }),
      n.d(t, "\u0275and", function () {
        return Gb;
      }),
      n.d(t, "\u0275angular_packages_core_core_a", function () {
        return $;
      }),
      n.d(t, "\u0275angular_packages_core_core_b", function () {
        return pe;
      }),
      n.d(t, "\u0275angular_packages_core_core_ba", function () {
        return Nt;
      }),
      n.d(t, "\u0275angular_packages_core_core_bb", function () {
        return Ut;
      }),
      n.d(t, "\u0275angular_packages_core_core_bc", function () {
        return Zt;
      }),
      n.d(t, "\u0275angular_packages_core_core_bd", function () {
        return hn;
      }),
      n.d(t, "\u0275angular_packages_core_core_bf", function () {
        return bg;
      }),
      n.d(t, "\u0275angular_packages_core_core_bg", function () {
        return vg;
      }),
      n.d(t, "\u0275angular_packages_core_core_bh", function () {
        return _g;
      }),
      n.d(t, "\u0275angular_packages_core_core_bi", function () {
        return wg;
      }),
      n.d(t, "\u0275angular_packages_core_core_bj", function () {
        return Cg;
      }),
      n.d(t, "\u0275angular_packages_core_core_bk", function () {
        return co;
      }),
      n.d(t, "\u0275angular_packages_core_core_bl", function () {
        return p;
      }),
      n.d(t, "\u0275angular_packages_core_core_bm", function () {
        return g;
      }),
      n.d(t, "\u0275angular_packages_core_core_bn", function () {
        return S;
      }),
      n.d(t, "\u0275angular_packages_core_core_bp", function () {
        return Mo;
      }),
      n.d(t, "\u0275angular_packages_core_core_bq", function () {
        return qp;
      }),
      n.d(t, "\u0275angular_packages_core_core_c", function () {
        return _e;
      }),
      n.d(t, "\u0275angular_packages_core_core_d", function () {
        return Iu;
      }),
      n.d(t, "\u0275angular_packages_core_core_e", function () {
        return gu;
      }),
      n.d(t, "\u0275angular_packages_core_core_f", function () {
        return wu;
      }),
      n.d(t, "\u0275angular_packages_core_core_g", function () {
        return ry;
      }),
      n.d(t, "\u0275angular_packages_core_core_h", function () {
        return ms;
      }),
      n.d(t, "\u0275angular_packages_core_core_i", function () {
        return ys;
      }),
      n.d(t, "\u0275angular_packages_core_core_j", function () {
        return ab;
      }),
      n.d(t, "\u0275angular_packages_core_core_k", function () {
        return vb;
      }),
      n.d(t, "\u0275angular_packages_core_core_l", function () {
        return _b;
      }),
      n.d(t, "\u0275angular_packages_core_core_m", function () {
        return Pb;
      }),
      n.d(t, "\u0275angular_packages_core_core_n", function () {
        return Dd;
      }),
      n.d(t, "\u0275angular_packages_core_core_o", function () {
        return jd;
      }),
      n.d(t, "\u0275angular_packages_core_core_p", function () {
        return Bb;
      }),
      n.d(t, "\u0275angular_packages_core_core_q", function () {
        return Hb;
      }),
      n.d(t, "\u0275angular_packages_core_core_r", function () {
        return $b;
      }),
      n.d(t, "\u0275angular_packages_core_core_s", function () {
        return qb;
      }),
      n.d(t, "\u0275angular_packages_core_core_t", function () {
        return Wb;
      }),
      n.d(t, "\u0275angular_packages_core_core_u", function () {
        return tp;
      }),
      n.d(t, "\u0275angular_packages_core_core_v", function () {
        return Eh;
      }),
      n.d(t, "\u0275angular_packages_core_core_w", function () {
        return ef;
      }),
      n.d(t, "\u0275angular_packages_core_core_x", function () {
        return ft;
      }),
      n.d(t, "\u0275angular_packages_core_core_y", function () {
        return Uh;
      }),
      n.d(t, "\u0275angular_packages_core_core_z", function () {
        return Yn;
      }),
      n.d(t, "\u0275bypassSanitizationTrustHtml", function () {
        return Dr;
      }),
      n.d(t, "\u0275bypassSanitizationTrustResourceUrl", function () {
        return xr;
      }),
      n.d(t, "\u0275bypassSanitizationTrustScript", function () {
        return Sr;
      }),
      n.d(t, "\u0275bypassSanitizationTrustStyle", function () {
        return Er;
      }),
      n.d(t, "\u0275bypassSanitizationTrustUrl", function () {
        return Or;
      }),
      n.d(t, "\u0275ccf", function () {
        return Xf;
      }),
      n.d(t, "\u0275clearOverrides", function () {
        return C_;
      }),
      n.d(t, "\u0275clearResolutionOfComponentResourcesQueue", function () {
        return Vu;
      }),
      n.d(t, "\u0275cmf", function () {
        return D_;
      }),
      n.d(t, "\u0275compileComponent", function () {
        return wm;
      }),
      n.d(t, "\u0275compileDirective", function () {
        return Cm;
      }),
      n.d(t, "\u0275compileNgModule", function () {
        return lm;
      }),
      n.d(t, "\u0275compileNgModuleDefs", function () {
        return dm;
      }),
      n.d(t, "\u0275compileNgModuleFactory__POST_R3__", function () {
        return Qy;
      }),
      n.d(t, "\u0275compilePipe", function () {
        return Nm;
      }),
      n.d(t, "\u0275createInjector", function () {
        return Zs;
      }),
      n.d(t, "\u0275crt", function () {
        return cf;
      }),
      n.d(t, "\u0275defaultIterableDiffers", function () {
        return Nd;
      }),
      n.d(t, "\u0275defaultKeyValueDiffers", function () {
        return Md;
      }),
      n.d(t, "\u0275detectChanges", function () {
        return Hu;
      }),
      n.d(t, "\u0275devModeEqual", function () {
        return Ca;
      }),
      n.d(t, "\u0275did", function () {
        return wh;
      }),
      n.d(t, "\u0275eld", function () {
        return Zb;
      }),
      n.d(t, "\u0275findLocaleData", function () {
        return Qh;
      }),
      n.d(t, "\u0275flushModuleScopingQueueAsMuchAsPossible", function () {
        return am;
      }),
      n.d(t, "\u0275getComponentViewDefinitionFactory", function () {
        return eh;
      }),
      n.d(t, "\u0275getDebugNodeR2", function () {
        return Nb;
      }),
      n.d(t, "\u0275getDebugNode__POST_R3__", function () {
        return Rb;
      }),
      n.d(t, "\u0275getDirectives", function () {
        return Zu;
      }),
      n.d(t, "\u0275getHostElement", function () {
        return Yu;
      }),
      n.d(t, "\u0275getInjectableDef", function () {
        return j;
      }),
      n.d(t, "\u0275getLContext", function () {
        return go;
      }),
      n.d(t, "\u0275getLocaleCurrencyCode", function () {
        return Gh;
      }),
      n.d(t, "\u0275getLocalePluralCase", function () {
        return Zh;
      }),
      n.d(t, "\u0275getModuleFactory__POST_R3__", function () {
        return cb;
      }),
      n.d(t, "\u0275getSanitizationBypassType", function () {
        return Cr;
      }),
      n.d(t, "\u0275global", function () {
        return G;
      }),
      n.d(t, "\u0275initServicesIfNeeded", function () {
        return Mv;
      }),
      n.d(t, "\u0275inlineInterpolate", function () {
        return Mf;
      }),
      n.d(t, "\u0275interpolate", function () {
        return Nf;
      }),
      n.d(t, "\u0275isBoundToModule__POST_R3__", function () {
        return Zy;
      }),
      n.d(t, "\u0275isDefaultChangeDetectionStrategy", function () {
        return Pe;
      }),
      n.d(t, "\u0275isListLikeIterable", function () {
        return Ea;
      }),
      n.d(t, "\u0275isObservable", function () {
        return hc;
      }),
      n.d(t, "\u0275isPromise", function () {
        return fc;
      }),
      n.d(t, "\u0275ivyEnabled", function () {
        return yy;
      }),
      n.d(t, "\u0275makeDecorator", function () {
        return f;
      }),
      n.d(t, "\u0275markDirty", function () {
        return $u;
      }),
      n.d(t, "\u0275mod", function () {
        return Wf;
      }),
      n.d(t, "\u0275mpd", function () {
        return qf;
      }),
      n.d(t, "\u0275ncd", function () {
        return iv;
      }),
      n.d(t, "\u0275noSideEffects", function () {
        return a;
      }),
      n.d(t, "\u0275nov", function () {
        return dh;
      }),
      n.d(t, "\u0275overrideComponentView", function () {
        return w_;
      }),
      n.d(t, "\u0275overrideProvider", function () {
        return __;
      }),
      n.d(t, "\u0275pad", function () {
        return av;
      }),
      n.d(t, "\u0275patchComponentDefWithScope", function () {
        return mm;
      }),
      n.d(t, "\u0275pid", function () {
        return Ch;
      }),
      n.d(t, "\u0275pod", function () {
        return cv;
      }),
      n.d(t, "\u0275ppd", function () {
        return uv;
      }),
      n.d(t, "\u0275prd", function () {
        return Dh;
      }),
      n.d(t, "\u0275publishDefaultGlobalUtils", function () {
        return ra;
      }),
      n.d(t, "\u0275publishGlobalUtil", function () {
        return oa;
      }),
      n.d(t, "\u0275qud", function () {
        return ev;
      }),
      n.d(t, "\u0275registerLocaleData", function () {
        return Wh;
      }),
      n.d(t, "\u0275registerModuleFactory", function () {
        return tg;
      }),
      n.d(t, "\u0275registerNgModuleType", function () {
        return rg;
      }),
      n.d(t, "\u0275renderComponent", function () {
        return ia;
      }),
      n.d(t, "\u0275resetCompiledComponents", function () {
        return pm;
      }),
      n.d(t, "\u0275resetJitOptions", function () {
        return om;
      }),
      n.d(t, "\u0275resolveComponentResources", function () {
        return Pu;
      }),
      n.d(t, "\u0275setClassMetadata", function () {
        return Xp;
      }),
      n.d(t, "\u0275setCurrentInjector", function () {
        return fe;
      }),
      n.d(t, "\u0275setDocument", function () {
        return vt;
      }),
      n.d(t, "\u0275setLocaleId", function () {
        return rp;
      }),
      n.d(t, "\u0275store", function () {
        return Ja;
      }),
      n.d(t, "\u0275stringify", function () {
        return L;
      }),
      n.d(t, "\u0275ted", function () {
        return dv;
      }),
      n.d(t, "\u0275transitiveScopesFor", function () {
        return ym;
      }),
      n.d(t, "\u0275unregisterLocaleData", function () {
        return Yh;
      }),
      n.d(t, "\u0275unv", function () {
        return sf;
      }),
      n.d(t, "\u0275unwrapSafeValue", function () {
        return _r;
      }),
      n.d(t, "\u0275vid", function () {
        return pv;
      }),
      n.d(t, "\u0275whenRendered", function () {
        return la;
      }),
      n.d(t, "\u0275\u0275CopyDefinitionFeature", function () {
        return va;
      }),
      n.d(t, "\u0275\u0275InheritDefinitionFeature", function () {
        return fa;
      }),
      n.d(t, "\u0275\u0275NgOnChangesFeature", function () {
        return dt;
      }),
      n.d(t, "\u0275\u0275ProvidersFeature", function () {
        return rd;
      }),
      n.d(t, "\u0275\u0275advance", function () {
        return Bo;
      }),
      n.d(t, "\u0275\u0275attribute", function () {
        return Ta;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate1", function () {
        return Ha;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate2", function () {
        return $a;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate3", function () {
        return za;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate4", function () {
        return qa;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate5", function () {
        return Wa;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate6", function () {
        return Qa;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate7", function () {
        return Ga;
      }),
      n.d(t, "\u0275\u0275attributeInterpolate8", function () {
        return Za;
      }),
      n.d(t, "\u0275\u0275attributeInterpolateV", function () {
        return Ka;
      }),
      n.d(t, "\u0275\u0275classMap", function () {
        return Yc;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate1", function () {
        return wl;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate2", function () {
        return Cl;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate3", function () {
        return Dl;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate4", function () {
        return El;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate5", function () {
        return Sl;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate6", function () {
        return Ol;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate7", function () {
        return xl;
      }),
      n.d(t, "\u0275\u0275classMapInterpolate8", function () {
        return Il;
      }),
      n.d(t, "\u0275\u0275classMapInterpolateV", function () {
        return Al;
      }),
      n.d(t, "\u0275\u0275classProp", function () {
        return Gc;
      }),
      n.d(t, "\u0275\u0275contentQuery", function () {
        return Qg;
      }),
      n.d(t, "\u0275\u0275defineComponent", function () {
        return Ue;
      }),
      n.d(t, "\u0275\u0275defineDirective", function () {
        return Ge;
      }),
      n.d(t, "\u0275\u0275defineInjectable", function () {
        return x;
      }),
      n.d(t, "\u0275\u0275defineInjector", function () {
        return A;
      }),
      n.d(t, "\u0275\u0275defineNgModule", function () {
        return qe;
      }),
      n.d(t, "\u0275\u0275definePipe", function () {
        return Ze;
      }),
      n.d(t, "\u0275\u0275directiveInject", function () {
        return ec;
      }),
      n.d(t, "\u0275\u0275disableBindings", function () {
        return Vt;
      }),
      n.d(t, "\u0275\u0275element", function () {
        return uc;
      }),
      n.d(t, "\u0275\u0275elementContainer", function () {
        return lc;
      }),
      n.d(t, "\u0275\u0275elementContainerEnd", function () {
        return cc;
      }),
      n.d(t, "\u0275\u0275elementContainerStart", function () {
        return ac;
      }),
      n.d(t, "\u0275\u0275elementEnd", function () {
        return sc;
      }),
      n.d(t, "\u0275\u0275elementStart", function () {
        return ic;
      }),
      n.d(t, "\u0275\u0275enableBindings", function () {
        return Lt;
      }),
      n.d(t, "\u0275\u0275getCurrentView", function () {
        return dc;
      }),
      n.d(t, "\u0275\u0275getFactoryOf", function () {
        return sr;
      }),
      n.d(t, "\u0275\u0275getInheritedFactory", function () {
        return ur;
      }),
      n.d(t, "\u0275\u0275hostProperty", function () {
        return Gl;
      }),
      n.d(t, "\u0275\u0275i18n", function () {
        return Gp;
      }),
      n.d(t, "\u0275\u0275i18nApply", function () {
        return Yp;
      }),
      n.d(t, "\u0275\u0275i18nAttributes", function () {
        return Zp;
      }),
      n.d(t, "\u0275\u0275i18nEnd", function () {
        return Qp;
      }),
      n.d(t, "\u0275\u0275i18nExp", function () {
        return Kp;
      }),
      n.d(t, "\u0275\u0275i18nPostprocess", function () {
        return Jp;
      }),
      n.d(t, "\u0275\u0275i18nStart", function () {
        return Wp;
      }),
      n.d(t, "\u0275\u0275inject", function () {
        return ge;
      }),
      n.d(t, "\u0275\u0275injectAttribute", function () {
        return tc;
      }),
      n.d(t, "\u0275\u0275injectPipeChangeDetectorRef", function () {
        return tm;
      }),
      n.d(t, "\u0275\u0275invalidFactory", function () {
        return nc;
      }),
      n.d(t, "\u0275\u0275invalidFactoryDep", function () {
        return me;
      }),
      n.d(t, "\u0275\u0275listener", function () {
        return pc;
      }),
      n.d(t, "\u0275\u0275loadQuery", function () {
        return Kg;
      }),
      n.d(t, "\u0275\u0275namespaceHTML", function () {
        return vn;
      }),
      n.d(t, "\u0275\u0275namespaceMathML", function () {
        return bn;
      }),
      n.d(t, "\u0275\u0275namespaceSVG", function () {
        return yn;
      }),
      n.d(t, "\u0275\u0275nextContext", function () {
        return vc;
      }),
      n.d(t, "\u0275\u0275pipe", function () {
        return Dg;
      }),
      n.d(t, "\u0275\u0275pipeBind1", function () {
        return Eg;
      }),
      n.d(t, "\u0275\u0275pipeBind2", function () {
        return Sg;
      }),
      n.d(t, "\u0275\u0275pipeBind3", function () {
        return Og;
      }),
      n.d(t, "\u0275\u0275pipeBind4", function () {
        return xg;
      }),
      n.d(t, "\u0275\u0275pipeBindV", function () {
        return Ig;
      }),
      n.d(t, "\u0275\u0275projection", function () {
        return Ec;
      }),
      n.d(t, "\u0275\u0275projectionDef", function () {
        return wc;
      }),
      n.d(t, "\u0275\u0275property", function () {
        return rc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate", function () {
        return Sc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate1", function () {
        return Oc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate2", function () {
        return xc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate3", function () {
        return Ic;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate4", function () {
        return Ac;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate5", function () {
        return jc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate6", function () {
        return kc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate7", function () {
        return Tc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolate8", function () {
        return Rc;
      }),
      n.d(t, "\u0275\u0275propertyInterpolateV", function () {
        return Fc;
      }),
      n.d(t, "\u0275\u0275pureFunction0", function () {
        return ug;
      }),
      n.d(t, "\u0275\u0275pureFunction1", function () {
        return ag;
      }),
      n.d(t, "\u0275\u0275pureFunction2", function () {
        return cg;
      }),
      n.d(t, "\u0275\u0275pureFunction3", function () {
        return lg;
      }),
      n.d(t, "\u0275\u0275pureFunction4", function () {
        return dg;
      }),
      n.d(t, "\u0275\u0275pureFunction5", function () {
        return fg;
      }),
      n.d(t, "\u0275\u0275pureFunction6", function () {
        return hg;
      }),
      n.d(t, "\u0275\u0275pureFunction7", function () {
        return pg;
      }),
      n.d(t, "\u0275\u0275pureFunction8", function () {
        return gg;
      }),
      n.d(t, "\u0275\u0275pureFunctionV", function () {
        return mg;
      }),
      n.d(t, "\u0275\u0275queryRefresh", function () {
        return $g;
      }),
      n.d(t, "\u0275\u0275reference", function () {
        return Xa;
      }),
      n.d(t, "\u0275\u0275resolveBody", function () {
        return Bn;
      }),
      n.d(t, "\u0275\u0275resolveDocument", function () {
        return Un;
      }),
      n.d(t, "\u0275\u0275resolveWindow", function () {
        return Vn;
      }),
      n.d(t, "\u0275\u0275restoreView", function () {
        return Ht;
      }),
      n.d(t, "\u0275\u0275sanitizeHtml", function () {
        return oo;
      }),
      n.d(t, "\u0275\u0275sanitizeResourceUrl", function () {
        return uo;
      }),
      n.d(t, "\u0275\u0275sanitizeScript", function () {
        return ao;
      }),
      n.d(t, "\u0275\u0275sanitizeStyle", function () {
        return io;
      }),
      n.d(t, "\u0275\u0275sanitizeUrl", function () {
        return so;
      }),
      n.d(t, "\u0275\u0275sanitizeUrlOrResourceUrl", function () {
        return lo;
      }),
      n.d(t, "\u0275\u0275setComponentScope", function () {
        return Be;
      }),
      n.d(t, "\u0275\u0275setNgModuleScope", function () {
        return We;
      }),
      n.d(t, "\u0275\u0275staticContentQuery", function () {
        return Gg;
      }),
      n.d(t, "\u0275\u0275staticViewQuery", function () {
        return zg;
      }),
      n.d(t, "\u0275\u0275styleMap", function () {
        return Zc;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate1", function () {
        return jl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate2", function () {
        return kl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate3", function () {
        return Tl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate4", function () {
        return Rl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate5", function () {
        return Fl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate6", function () {
        return Pl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate7", function () {
        return Nl;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolate8", function () {
        return Ml;
      }),
      n.d(t, "\u0275\u0275styleMapInterpolateV", function () {
        return Ll;
      }),
      n.d(t, "\u0275\u0275styleProp", function () {
        return Qc;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate1", function () {
        return Vl;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate2", function () {
        return Ul;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate3", function () {
        return Bl;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate4", function () {
        return Hl;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate5", function () {
        return $l;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate6", function () {
        return zl;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate7", function () {
        return ql;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolate8", function () {
        return Wl;
      }),
      n.d(t, "\u0275\u0275stylePropInterpolateV", function () {
        return Ql;
      }),
      n.d(t, "\u0275\u0275syntheticHostListener", function () {
        return gc;
      }),
      n.d(t, "\u0275\u0275syntheticHostProperty", function () {
        return Zl;
      }),
      n.d(t, "\u0275\u0275template", function () {
        return Ya;
      }),
      n.d(t, "\u0275\u0275templateRefExtractor", function () {
        return em;
      }),
      n.d(t, "\u0275\u0275text", function () {
        return ll;
      }),
      n.d(t, "\u0275\u0275textInterpolate", function () {
        return dl;
      }),
      n.d(t, "\u0275\u0275textInterpolate1", function () {
        return fl;
      }),
      n.d(t, "\u0275\u0275textInterpolate2", function () {
        return hl;
      }),
      n.d(t, "\u0275\u0275textInterpolate3", function () {
        return pl;
      }),
      n.d(t, "\u0275\u0275textInterpolate4", function () {
        return gl;
      }),
      n.d(t, "\u0275\u0275textInterpolate5", function () {
        return ml;
      }),
      n.d(t, "\u0275\u0275textInterpolate6", function () {
        return yl;
      }),
      n.d(t, "\u0275\u0275textInterpolate7", function () {
        return bl;
      }),
      n.d(t, "\u0275\u0275textInterpolate8", function () {
        return vl;
      }),
      n.d(t, "\u0275\u0275textInterpolateV", function () {
        return _l;
      }),
      n.d(t, "\u0275\u0275viewQuery", function () {
        return qg;
      });
    var r = n("XNiG"),
      o = n("quSY"),
      i = n("HDdC"),
      s = n("VRyK"),
      u = n("w1tV");
    function a(e) {
      return { toString: e }.toString();
    }
    const c = "__annotations__",
      l = "__parameters__",
      d = "__prop__metadata__";
    function f(e, t, n, r, o) {
      return a(() => {
        const i = h(t);
        function s(...e) {
          if (this instanceof s) return i.call(this, ...e), this;
          const t = new s(...e);
          return function (n) {
            return (
              o && o(n, ...e),
              (n.hasOwnProperty(c)
                ? n[c]
                : Object.defineProperty(n, c, { value: [] })[c]
              ).push(t),
              r && r(n),
              n
            );
          };
        }
        return (
          n && (s.prototype = Object.create(n.prototype)),
          (s.prototype.ngMetadataName = e),
          (s.annotationCls = s),
          s
        );
      });
    }
    function h(e) {
      return function (...t) {
        if (e) {
          const n = e(...t);
          for (const e in n) this[e] = n[e];
        }
      };
    }
    function p(e, t, n) {
      return a(() => {
        const r = h(t);
        function o(...e) {
          if (this instanceof o) return r.apply(this, e), this;
          const t = new o(...e);
          return (n.annotation = t), n;
          function n(e, n, r) {
            const o = e.hasOwnProperty(l)
              ? e[l]
              : Object.defineProperty(e, l, { value: [] })[l];
            for (; o.length <= r; ) o.push(null);
            return (o[r] = o[r] || []).push(t), e;
          }
        }
        return (
          n && (o.prototype = Object.create(n.prototype)),
          (o.prototype.ngMetadataName = e),
          (o.annotationCls = o),
          o
        );
      });
    }
    function g(e, t, n, r) {
      return a(() => {
        const o = h(t);
        function i(...e) {
          if (this instanceof i) return o.apply(this, e), this;
          const t = new i(...e);
          return function (n, o) {
            const i = n.constructor,
              s = i.hasOwnProperty(d)
                ? i[d]
                : Object.defineProperty(i, d, { value: {} })[d];
            (s[o] = (s.hasOwnProperty(o) && s[o]) || []),
              s[o].unshift(t),
              r && r(n, o, ...e);
          };
        }
        return (
          n && (i.prototype = Object.create(n.prototype)),
          (i.prototype.ngMetadataName = e),
          (i.annotationCls = i),
          i
        );
      });
    }
    const m = (e) => ({ token: e }),
      y = p("Inject", m),
      b = p("Optional"),
      v = p("Self"),
      _ = p("SkipSelf"),
      w = p("Host"),
      C = (e) => ({ attributeName: e }),
      D = p("Attribute", C);
    var E = (function (e) {
      return (
        (e[(e.Default = 0)] = "Default"),
        (e[(e.Host = 1)] = "Host"),
        (e[(e.Self = 2)] = "Self"),
        (e[(e.SkipSelf = 4)] = "SkipSelf"),
        (e[(e.Optional = 8)] = "Optional"),
        e
      );
    })({});
    function S(e) {
      for (let t in e) if (e[t] === S) return t;
      throw Error("Could not find renamed property on target object.");
    }
    function O(e, t) {
      for (const n in t)
        t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n]);
    }
    function x(e) {
      return {
        token: e.token,
        providedIn: e.providedIn || null,
        factory: e.factory,
        value: void 0,
      };
    }
    const I = x;
    function A(e) {
      return {
        factory: e.factory,
        providers: e.providers || [],
        imports: e.imports || [],
      };
    }
    function j(e) {
      return k(e, e[R]) || k(e, e[N]);
    }
    function k(e, t) {
      return t && t.token === e ? t : null;
    }
    function T(e) {
      return e && (e.hasOwnProperty(F) || e.hasOwnProperty(M)) ? e[F] : null;
    }
    const R = S({ "\u0275prov": S }),
      F = S({ "\u0275inj": S }),
      P = S({ "\u0275provFallback": S }),
      N = S({ ngInjectableDef: S }),
      M = S({ ngInjectorDef: S });
    function L(e) {
      if ("string" == typeof e) return e;
      if (Array.isArray(e)) return "[" + e.map(L).join(", ") + "]";
      if (null == e) return "" + e;
      if (e.overriddenName) return "" + e.overriddenName;
      if (e.name) return "" + e.name;
      const t = e.toString();
      if (null == t) return "" + t;
      const n = t.indexOf("\n");
      return -1 === n ? t : t.substring(0, n);
    }
    function V(e, t) {
      return null == e || "" === e
        ? null === t
          ? ""
          : t
        : null == t || "" === t
        ? e
        : e + " " + t;
    }
    const U = S({ __forward_ref__: S });
    function B(e) {
      return (
        (e.__forward_ref__ = B),
        (e.toString = function () {
          return L(this());
        }),
        e
      );
    }
    function H(e) {
      return $(e) ? e() : e;
    }
    function $(e) {
      return (
        "function" == typeof e && e.hasOwnProperty(U) && e.__forward_ref__ === B
      );
    }
    const z = "undefined" != typeof globalThis && globalThis,
      q = "undefined" != typeof window && window,
      W =
        "undefined" != typeof self &&
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope &&
        self,
      Q = "undefined" != typeof global && global,
      G = z || Q || q || W;
    var Z = (function (e) {
      return (
        (e[(e.Token = 0)] = "Token"),
        (e[(e.Attribute = 1)] = "Attribute"),
        (e[(e.ChangeDetectorRef = 2)] = "ChangeDetectorRef"),
        (e[(e.Invalid = 3)] = "Invalid"),
        e
      );
    })({});
    function K() {
      const e = G.ng;
      if (!e || !e.ɵcompilerFacade)
        throw new Error(
          "Angular JIT compilation failed: '@angular/compiler' not loaded!\n  - JIT compilation is discouraged for production use-cases! Consider AOT mode instead.\n  - Did you bootstrap using '@angular/platform-browser-dynamic' or '@angular/platform-server'?\n  - Alternatively provide the compiler with 'import \"@angular/compiler\";' before bootstrapping."
        );
      return e.ɵcompilerFacade;
    }
    const Y = S({ "\u0275cmp": S }),
      J = S({ "\u0275dir": S }),
      X = S({ "\u0275pipe": S }),
      ee = S({ "\u0275mod": S }),
      te = S({ "\u0275loc": S }),
      ne = S({ "\u0275fac": S }),
      re = S({ __NG_ELEMENT_ID__: S });
    class oe {
      constructor(e, t) {
        (this._desc = e),
          (this.ngMetadataName = "InjectionToken"),
          (this.ɵprov = void 0),
          "number" == typeof t
            ? (this.__NG_ELEMENT_ID__ = t)
            : void 0 !== t &&
              (this.ɵprov = x({
                token: this,
                providedIn: t.providedIn || "root",
                factory: t.factory,
              }));
      }
      toString() {
        return "InjectionToken " + this._desc;
      }
    }
    const ie = new oe("INJECTOR", -1),
      se = {},
      ue = /\n/gm,
      ae = "__source",
      ce = S({ provide: String, useValue: S });
    let le,
      de = void 0;
    function fe(e) {
      const t = de;
      return (de = e), t;
    }
    function he(e) {
      const t = le;
      return (le = e), t;
    }
    function pe(e, t = E.Default) {
      if (void 0 === de)
        throw new Error("inject() must be called from an injection context");
      return null === de
        ? be(e, void 0, t)
        : de.get(e, t & E.Optional ? null : void 0, t);
    }
    function ge(e, t = E.Default) {
      return (le || pe)(H(e), t);
    }
    function me(e) {
      throw new Error("invalid");
    }
    const ye = ge;
    function be(e, t, n) {
      const r = j(e);
      if (r && "root" == r.providedIn)
        return void 0 === r.value ? (r.value = r.factory()) : r.value;
      if (n & E.Optional) return null;
      if (void 0 !== t) return t;
      throw new Error(`Injector: NOT_FOUND [${L(e)}]`);
    }
    function ve(e) {
      const t = [];
      for (let n = 0; n < e.length; n++) {
        const r = H(e[n]);
        if (Array.isArray(r)) {
          if (0 === r.length)
            throw new Error("Arguments array must have arguments.");
          let e = void 0,
            n = E.Default;
          for (let t = 0; t < r.length; t++) {
            const o = r[t];
            o instanceof b || "Optional" === o.ngMetadataName || o === b
              ? (n |= E.Optional)
              : o instanceof _ || "SkipSelf" === o.ngMetadataName || o === _
              ? (n |= E.SkipSelf)
              : o instanceof v || "Self" === o.ngMetadataName || o === v
              ? (n |= E.Self)
              : (e = o instanceof y || o === y ? o.token : o);
          }
          t.push(ge(e, n));
        } else t.push(ge(r));
      }
      return t;
    }
    class _e {
      get(e, t = se) {
        if (t === se) {
          const t = new Error(`NullInjectorError: No provider for ${L(e)}!`);
          throw ((t.name = "NullInjectorError"), t);
        }
        return t;
      }
    }
    const we = {
      "\u0275\u0275defineInjectable": x,
      "\u0275\u0275defineInjector": A,
      "\u0275\u0275inject": ge,
      "\u0275\u0275getFactoryOf": function e(t) {
        const n = t;
        if ($(t))
          return () => {
            const t = e(H(n));
            return t ? t() : null;
          };
        const r = j(n) || T(n);
        return r && void 0 !== r.factory ? r.factory : null;
      },
      "\u0275\u0275invalidFactoryDep": me,
    };
    class Ce {}
    class De {}
    function Ee(e, t) {
      for (let n = 0; n < e.length; n++) t.push(e[n]);
    }
    function Se(e, t) {
      void 0 === t && (t = e);
      for (let n = 0; n < e.length; n++) {
        let r = e[n];
        Array.isArray(r)
          ? (t === e && (t = e.slice(0, n)), Se(r, t))
          : t !== e && t.push(r);
      }
      return t;
    }
    function Oe(e, t) {
      e.forEach((e) => (Array.isArray(e) ? Oe(e, t) : t(e)));
    }
    function xe(e, t, n) {
      t >= e.length ? e.push(n) : e.splice(t, 0, n);
    }
    function Ie(e, t) {
      return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
    }
    function Ae(e, t) {
      const n = [];
      for (let r = 0; r < e; r++) n.push(t);
      return n;
    }
    function je(e, t, n) {
      let r = Te(e, t);
      return (
        r >= 0
          ? (e[1 | r] = n)
          : ((r = ~r),
            (function (e, t, n, r) {
              let o = e.length;
              if (o == t) e.push(n, r);
              else if (1 === o) e.push(r, e[0]), (e[0] = n);
              else {
                for (o--, e.push(e[o - 1], e[o]); o > t; )
                  (e[o] = e[o - 2]), o--;
                (e[t] = n), (e[t + 1] = r);
              }
            })(e, r, t, n)),
        r
      );
    }
    function ke(e, t) {
      const n = Te(e, t);
      if (n >= 0) return e[1 | n];
    }
    function Te(e, t) {
      return (function (e, t, n) {
        let r = 0,
          o = e.length >> 1;
        for (; o !== r; ) {
          const n = r + ((o - r) >> 1),
            i = e[n << 1];
          if (t === i) return n << 1;
          i > t ? (o = n) : (r = n + 1);
        }
        return ~(o << 1);
      })(e, t);
    }
    var Re = (function (e) {
        return (
          (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
        );
      })({}),
      Fe = (function (e) {
        return (
          (e[(e.CheckOnce = 0)] = "CheckOnce"),
          (e[(e.Checked = 1)] = "Checked"),
          (e[(e.CheckAlways = 2)] = "CheckAlways"),
          (e[(e.Detached = 3)] = "Detached"),
          (e[(e.Errored = 4)] = "Errored"),
          (e[(e.Destroyed = 5)] = "Destroyed"),
          e
        );
      })({});
    function Pe(e) {
      return null == e || e === Re.Default;
    }
    var Ne = (function (e) {
      return (
        (e[(e.Emulated = 0)] = "Emulated"),
        (e[(e.Native = 1)] = "Native"),
        (e[(e.None = 2)] = "None"),
        (e[(e.ShadowDom = 3)] = "ShadowDom"),
        e
      );
    })({});
    const Me = {},
      Le = [];
    let Ve = 0;
    function Ue(e) {
      return a(() => {
        const t = {},
          n = {
            type: e.type,
            providersResolver: null,
            decls: e.decls,
            vars: e.vars,
            factory: null,
            template: e.template || null,
            consts: e.consts || null,
            ngContentSelectors: e.ngContentSelectors,
            hostBindings: e.hostBindings || null,
            hostVars: e.hostVars || 0,
            hostAttrs: e.hostAttrs || null,
            contentQueries: e.contentQueries || null,
            declaredInputs: t,
            inputs: null,
            outputs: null,
            exportAs: e.exportAs || null,
            onPush: e.changeDetection === Re.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: e.selectors || Le,
            viewQuery: e.viewQuery || null,
            features: e.features || null,
            data: e.data || {},
            encapsulation: e.encapsulation || Ne.Emulated,
            id: "c",
            styles: e.styles || Le,
            _: null,
            setInput: null,
            schemas: e.schemas || null,
            tView: null,
          },
          r = e.directives,
          o = e.features,
          i = e.pipes;
        return (
          (n.id += Ve++),
          (n.inputs = Qe(e.inputs, t)),
          (n.outputs = Qe(e.outputs)),
          o && o.forEach((e) => e(n)),
          (n.directiveDefs = r
            ? () => ("function" == typeof r ? r() : r).map(He)
            : null),
          (n.pipeDefs = i
            ? () => ("function" == typeof i ? i() : i).map($e)
            : null),
          n
        );
      });
    }
    function Be(e, t, n) {
      const r = e.ɵcmp;
      (r.directiveDefs = () => t.map(He)), (r.pipeDefs = () => n.map($e));
    }
    function He(e) {
      return Ke(e) || Ye(e);
    }
    function $e(e) {
      return Je(e);
    }
    const ze = {};
    function qe(e) {
      const t = {
        type: e.type,
        bootstrap: e.bootstrap || Le,
        declarations: e.declarations || Le,
        imports: e.imports || Le,
        exports: e.exports || Le,
        transitiveCompileScopes: null,
        schemas: e.schemas || null,
        id: e.id || null,
      };
      return (
        null != e.id &&
          a(() => {
            ze[e.id] = e.type;
          }),
        t
      );
    }
    function We(e, t) {
      return a(() => {
        const n = et(e, !0);
        (n.declarations = t.declarations || Le),
          (n.imports = t.imports || Le),
          (n.exports = t.exports || Le);
      });
    }
    function Qe(e, t) {
      if (null == e) return Me;
      const n = {};
      for (const r in e)
        if (e.hasOwnProperty(r)) {
          let o = e[r],
            i = o;
          Array.isArray(o) && ((i = o[1]), (o = o[0])),
            (n[o] = r),
            t && (t[o] = i);
        }
      return n;
    }
    const Ge = Ue;
    function Ze(e) {
      return {
        type: e.type,
        name: e.name,
        factory: null,
        pure: !1 !== e.pure,
        onDestroy: e.type.prototype.ngOnDestroy || null,
      };
    }
    function Ke(e) {
      return e[Y] || null;
    }
    function Ye(e) {
      return e[J] || null;
    }
    function Je(e) {
      return e[X] || null;
    }
    function Xe(e, t) {
      return e.hasOwnProperty(ne) ? e[ne] : null;
    }
    function et(e, t) {
      const n = e[ee] || null;
      if (!n && !0 === t)
        throw new Error(`Type ${L(e)} does not have '\u0275mod' property.`);
      return n;
    }
    const tt = 20,
      nt = 10;
    function rt(e) {
      return Array.isArray(e) && "object" == typeof e[1];
    }
    function ot(e) {
      return Array.isArray(e) && !0 === e[1];
    }
    function it(e) {
      return 0 != (8 & e.flags);
    }
    function st(e) {
      return 2 == (2 & e.flags);
    }
    function ut(e) {
      return 1 == (1 & e.flags);
    }
    function at(e) {
      return null !== e.template;
    }
    function ct(e) {
      return 0 != (512 & e[2]);
    }
    class lt {
      constructor(e, t, n) {
        (this.previousValue = e),
          (this.currentValue = t),
          (this.firstChange = n);
      }
      isFirstChange() {
        return this.firstChange;
      }
    }
    function dt() {
      return ft;
    }
    function ft(e) {
      return e.type.prototype.ngOnChanges && (e.setInput = pt), ht;
    }
    function ht() {
      const e = gt(this),
        t = null == e ? void 0 : e.current;
      if (t) {
        const n = e.previous;
        if (n === Me) e.previous = t;
        else for (let e in t) n[e] = t[e];
        (e.current = null), this.ngOnChanges(t);
      }
    }
    function pt(e, t, n, r) {
      const o =
          gt(e) ||
          (function (e, t) {
            return (e.__ngSimpleChanges__ = t);
          })(e, { previous: Me, current: null }),
        i = o.current || (o.current = {}),
        s = o.previous,
        u = this.declaredInputs[n],
        a = s[u];
      (i[u] = new lt(a && a.currentValue, t, s === Me)), (e[r] = t);
    }
    function gt(e) {
      return e.__ngSimpleChanges__ || null;
    }
    dt.ngInherit = !0;
    const mt = "http://www.w3.org/2000/svg",
      yt = "http://www.w3.org/1998/MathML/";
    let bt = void 0;
    function vt(e) {
      bt = e;
    }
    function _t() {
      return void 0 !== bt
        ? bt
        : "undefined" != typeof document
        ? document
        : void 0;
    }
    function wt(e) {
      return !!e.listen;
    }
    const Ct = { createRenderer: (e, t) => _t() };
    function Dt(e) {
      for (; Array.isArray(e); ) e = e[0];
      return e;
    }
    function Et(e, t) {
      return Dt(t[e + tt]);
    }
    function St(e, t) {
      return Dt(t[e.index]);
    }
    function Ot(e, t) {
      return e.data[t + tt];
    }
    function xt(e, t) {
      return e[t + tt];
    }
    function It(e, t) {
      const n = t[e];
      return rt(n) ? n : n[0];
    }
    function At(e) {
      return e.__ngContext__ || null;
    }
    function jt(e) {
      const t = At(e);
      return t ? (Array.isArray(t) ? t : t.lView) : null;
    }
    function kt(e) {
      return 4 == (4 & e[2]);
    }
    function Tt(e) {
      return 128 == (128 & e[2]);
    }
    function Rt(e, t) {
      return null === e || null == t ? null : e[t];
    }
    function Ft(e) {
      e[18] = 0;
    }
    function Pt(e, t) {
      e[5] += t;
      let n = e,
        r = e[3];
      for (
        ;
        null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

      )
        (r[5] += t), (n = r), (r = r[3]);
    }
    const Nt = {
      lFrame: cn(null),
      bindingsEnabled: !0,
      checkNoChangesMode: !1,
    };
    function Mt() {
      return Nt.bindingsEnabled;
    }
    function Lt() {
      Nt.bindingsEnabled = !0;
    }
    function Vt() {
      Nt.bindingsEnabled = !1;
    }
    function Ut() {
      return Nt.lFrame.lView;
    }
    function Bt() {
      return Nt.lFrame.tView;
    }
    function Ht(e) {
      Nt.lFrame.contextLView = e;
    }
    function $t() {
      return Nt.lFrame.currentTNode;
    }
    function zt(e, t) {
      (Nt.lFrame.currentTNode = e), (Nt.lFrame.isParent = t);
    }
    function qt() {
      return Nt.lFrame.isParent;
    }
    function Wt() {
      Nt.lFrame.isParent = !1;
    }
    function Qt() {
      return Nt.checkNoChangesMode;
    }
    function Gt(e) {
      Nt.checkNoChangesMode = e;
    }
    function Zt() {
      const e = Nt.lFrame;
      let t = e.bindingRootIndex;
      return (
        -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
      );
    }
    function Kt() {
      return Nt.lFrame.bindingIndex;
    }
    function Yt(e) {
      return (Nt.lFrame.bindingIndex = e);
    }
    function Jt() {
      return Nt.lFrame.bindingIndex++;
    }
    function Xt(e) {
      const t = Nt.lFrame,
        n = t.bindingIndex;
      return (t.bindingIndex = t.bindingIndex + e), n;
    }
    function en(e, t) {
      const n = Nt.lFrame;
      (n.bindingIndex = n.bindingRootIndex = e), tn(t);
    }
    function tn(e) {
      Nt.lFrame.currentDirectiveIndex = e;
    }
    function nn(e) {
      const t = Nt.lFrame.currentDirectiveIndex;
      return -1 === t ? null : e[t];
    }
    function rn() {
      return Nt.lFrame.currentQueryIndex;
    }
    function on(e) {
      Nt.lFrame.currentQueryIndex = e;
    }
    function sn(e, t) {
      const n = an();
      (Nt.lFrame = n), (n.currentTNode = t), (n.lView = e);
    }
    function un(e) {
      const t = an(),
        n = e[1];
      (Nt.lFrame = t),
        (t.currentTNode = n.firstChild),
        (t.lView = e),
        (t.tView = n),
        (t.contextLView = e),
        (t.bindingIndex = n.bindingStartIndex);
    }
    function an() {
      const e = Nt.lFrame,
        t = null === e ? null : e.child;
      return null === t ? cn(e) : t;
    }
    function cn(e) {
      const t = {
        currentTNode: null,
        isParent: !0,
        lView: null,
        tView: null,
        selectedIndex: 0,
        contextLView: null,
        elementDepthCount: 0,
        currentNamespace: null,
        currentDirectiveIndex: -1,
        bindingRootIndex: -1,
        bindingIndex: -1,
        currentQueryIndex: 0,
        parent: e,
        child: null,
      };
      return null !== e && (e.child = t), t;
    }
    function ln() {
      const e = Nt.lFrame;
      return (
        (Nt.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
      );
    }
    const dn = ln;
    function fn() {
      const e = ln();
      (e.isParent = !0),
        (e.tView = null),
        (e.selectedIndex = 0),
        (e.contextLView = null),
        (e.elementDepthCount = 0),
        (e.currentDirectiveIndex = -1),
        (e.currentNamespace = null),
        (e.bindingRootIndex = -1),
        (e.bindingIndex = -1),
        (e.currentQueryIndex = 0);
    }
    function hn(e) {
      return (Nt.lFrame.contextLView = (function (e, t) {
        for (; e > 0; ) (t = t[15]), e--;
        return t;
      })(e, Nt.lFrame.contextLView))[8];
    }
    function pn() {
      return Nt.lFrame.selectedIndex;
    }
    function gn(e) {
      Nt.lFrame.selectedIndex = e;
    }
    function mn() {
      const e = Nt.lFrame;
      return Ot(e.tView, e.selectedIndex);
    }
    function yn() {
      Nt.lFrame.currentNamespace = mt;
    }
    function bn() {
      Nt.lFrame.currentNamespace = yt;
    }
    function vn() {
      Nt.lFrame.currentNamespace = null;
    }
    function _n(e, t) {
      for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
        const t = e.data[n].type.prototype,
          {
            ngAfterContentInit: r,
            ngAfterContentChecked: o,
            ngAfterViewInit: i,
            ngAfterViewChecked: s,
            ngOnDestroy: u,
          } = t;
        r && (e.contentHooks || (e.contentHooks = [])).push(-n, r),
          o &&
            ((e.contentHooks || (e.contentHooks = [])).push(n, o),
            (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, o)),
          i && (e.viewHooks || (e.viewHooks = [])).push(-n, i),
          s &&
            ((e.viewHooks || (e.viewHooks = [])).push(n, s),
            (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, s)),
          null != u && (e.destroyHooks || (e.destroyHooks = [])).push(n, u);
      }
    }
    function wn(e, t, n) {
      En(e, t, 3, n);
    }
    function Cn(e, t, n, r) {
      (3 & e[2]) === n && En(e, t, n, r);
    }
    function Dn(e, t) {
      let n = e[2];
      (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
    }
    function En(e, t, n, r) {
      const o = null != r ? r : -1;
      let i = 0;
      for (let s = void 0 !== r ? 65535 & e[18] : 0; s < t.length; s++)
        if ("number" == typeof t[s + 1]) {
          if (((i = t[s]), null != r && i >= r)) break;
        } else
          t[s] < 0 && (e[18] += 65536),
            (i < o || -1 == o) &&
              (Sn(e, n, t, s), (e[18] = (4294901760 & e[18]) + s + 2)),
            s++;
    }
    function Sn(e, t, n, r) {
      const o = n[r] < 0,
        i = n[r + 1],
        s = e[o ? -n[r] : n[r]];
      o
        ? e[2] >> 11 < e[18] >> 16 &&
          (3 & e[2]) === t &&
          ((e[2] += 2048), i.call(s))
        : i.call(s);
    }
    const On = -1;
    class xn {
      constructor(e, t, n) {
        (this.factory = e),
          (this.resolving = !1),
          (this.canSeeViewProviders = t),
          (this.injectImpl = n);
      }
    }
    function In(e, t, n) {
      const r = wt(e);
      let o = 0;
      for (; o < n.length; ) {
        const i = n[o];
        if ("number" == typeof i) {
          if (0 !== i) break;
          o++;
          const s = n[o++],
            u = n[o++],
            a = n[o++];
          r ? e.setAttribute(t, u, a, s) : t.setAttributeNS(s, u, a);
        } else {
          const s = i,
            u = n[++o];
          jn(s)
            ? r && e.setProperty(t, s, u)
            : r
            ? e.setAttribute(t, s, u)
            : t.setAttribute(s, u),
            o++;
        }
      }
      return o;
    }
    function An(e) {
      return 3 === e || 4 === e || 6 === e;
    }
    function jn(e) {
      return 64 === e.charCodeAt(0);
    }
    function kn(e, t) {
      if (null === t || 0 === t.length);
      else if (null === e || 0 === e.length) e = t.slice();
      else {
        let n = -1;
        for (let r = 0; r < t.length; r++) {
          const o = t[r];
          "number" == typeof o
            ? (n = o)
            : 0 === n || Tn(e, n, o, null, -1 === n || 2 === n ? t[++r] : null);
        }
      }
      return e;
    }
    function Tn(e, t, n, r, o) {
      let i = 0,
        s = e.length;
      if (-1 === t) s = -1;
      else
        for (; i < e.length; ) {
          const n = e[i++];
          if ("number" == typeof n) {
            if (n === t) {
              s = -1;
              break;
            }
            if (n > t) {
              s = i - 1;
              break;
            }
          }
        }
      for (; i < e.length; ) {
        const t = e[i];
        if ("number" == typeof t) break;
        if (t === n) {
          if (null === r) return void (null !== o && (e[i + 1] = o));
          if (r === e[i + 1]) return void (e[i + 2] = o);
        }
        i++, null !== r && i++, null !== o && i++;
      }
      -1 !== s && (e.splice(s, 0, t), (i = s + 1)),
        e.splice(i++, 0, n),
        null !== r && e.splice(i++, 0, r),
        null !== o && e.splice(i++, 0, o);
    }
    function Rn(e) {
      return e !== On;
    }
    function Fn(e) {
      return 32767 & e;
    }
    function Pn(e, t) {
      let n = e >> 16,
        r = t;
      for (; n > 0; ) (r = r[15]), n--;
      return r;
    }
    function Nn(e) {
      return "string" == typeof e ? e : null == e ? "" : "" + e;
    }
    function Mn(e) {
      return "function" == typeof e
        ? e.name || e.toString()
        : "object" == typeof e && null != e && "function" == typeof e.type
        ? e.type.name || e.type.toString()
        : Nn(e);
    }
    const Ln = (() =>
      (
        ("undefined" != typeof requestAnimationFrame &&
          requestAnimationFrame) ||
        setTimeout
      ).bind(G))();
    function Vn(e) {
      return { name: "window", target: e.ownerDocument.defaultView };
    }
    function Un(e) {
      return { name: "document", target: e.ownerDocument };
    }
    function Bn(e) {
      return { name: "body", target: e.ownerDocument.body };
    }
    function Hn(e) {
      return e instanceof Function ? e() : e;
    }
    let $n = !0;
    function zn(e) {
      const t = $n;
      return ($n = e), t;
    }
    let qn = 0;
    function Wn(e, t) {
      const n = Gn(e, t);
      if (-1 !== n) return n;
      const r = t[1];
      r.firstCreatePass &&
        ((e.injectorIndex = t.length),
        Qn(r.data, e),
        Qn(t, null),
        Qn(r.blueprint, null));
      const o = Zn(e, t),
        i = e.injectorIndex;
      if (Rn(o)) {
        const e = Fn(o),
          n = Pn(o, t),
          r = n[1].data;
        for (let o = 0; o < 8; o++) t[i + o] = n[e + o] | r[e + o];
      }
      return (t[i + 8] = o), i;
    }
    function Qn(e, t) {
      e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
    }
    function Gn(e, t) {
      return -1 === e.injectorIndex ||
        (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
        null === t[e.injectorIndex + 8]
        ? -1
        : e.injectorIndex;
    }
    function Zn(e, t) {
      if (e.parent && -1 !== e.parent.injectorIndex)
        return e.parent.injectorIndex;
      let n = 0,
        r = null,
        o = t;
      for (; null !== o; ) {
        const e = o[1],
          t = e.type;
        if (((r = 2 === t ? e.declTNode : 1 === t ? o[6] : null), null === r))
          return On;
        if ((n++, (o = o[15]), -1 !== r.injectorIndex))
          return r.injectorIndex | (n << 16);
      }
      return On;
    }
    function Kn(e, t, n) {
      !(function (e, t, n) {
        let r;
        "string" == typeof n
          ? (r = n.charCodeAt(0) || 0)
          : n.hasOwnProperty(re) && (r = n[re]),
          null == r && (r = n[re] = qn++);
        const o = 255 & r,
          i = 1 << o,
          s = 64 & o,
          u = 32 & o,
          a = t.data;
        128 & o
          ? s
            ? u
              ? (a[e + 7] |= i)
              : (a[e + 6] |= i)
            : u
            ? (a[e + 5] |= i)
            : (a[e + 4] |= i)
          : s
          ? u
            ? (a[e + 3] |= i)
            : (a[e + 2] |= i)
          : u
          ? (a[e + 1] |= i)
          : (a[e] |= i);
      })(e, t, n);
    }
    function Yn(e, t) {
      if ("class" === t) return e.classes;
      if ("style" === t) return e.styles;
      const n = e.attrs;
      if (n) {
        const e = n.length;
        let r = 0;
        for (; r < e; ) {
          const o = n[r];
          if (An(o)) break;
          if (0 === o) r += 2;
          else if ("number" == typeof o)
            for (r++; r < e && "string" == typeof n[r]; ) r++;
          else {
            if (o === t) return n[r + 1];
            r += 2;
          }
        }
      }
      return null;
    }
    function Jn(e, t, n, r = E.Default, o) {
      if (null !== e) {
        const o = (function (e) {
          if ("string" == typeof e) return e.charCodeAt(0) || 0;
          const t = e.hasOwnProperty(re) ? e[re] : void 0;
          return "number" == typeof t && t > 0 ? 255 & t : t;
        })(n);
        if ("function" == typeof o) {
          sn(t, e);
          try {
            const e = o();
            if (null != e || r & E.Optional) return e;
            throw new Error(`No provider for ${Mn(n)}!`);
          } finally {
            dn();
          }
        } else if ("number" == typeof o) {
          if (-1 === o) return new ir(e, t);
          let i = null,
            s = Gn(e, t),
            u = On,
            a = r & E.Host ? t[16][6] : null;
          for (
            (-1 === s || r & E.SkipSelf) &&
            ((u = -1 === s ? Zn(e, t) : t[s + 8]),
            u !== On && or(r, !1)
              ? ((i = t[1]), (s = Fn(u)), (t = Pn(u, t)))
              : (s = -1));
            -1 !== s;

          ) {
            const e = t[1];
            if (rr(o, s, e.data)) {
              const e = er(s, t, n, i, r, a);
              if (e !== Xn) return e;
            }
            (u = t[s + 8]),
              u !== On && or(r, t[1].data[s + 8] === a) && rr(o, s, t)
                ? ((i = e), (s = Fn(u)), (t = Pn(u, t)))
                : (s = -1);
          }
        }
      }
      if (
        (r & E.Optional && void 0 === o && (o = null),
        0 == (r & (E.Self | E.Host)))
      ) {
        const e = t[9],
          i = he(void 0);
        try {
          return e ? e.get(n, o, r & E.Optional) : be(n, o, r & E.Optional);
        } finally {
          he(i);
        }
      }
      if (r & E.Optional) return o;
      throw new Error(`NodeInjector: NOT_FOUND [${Mn(n)}]`);
    }
    const Xn = {};
    function er(e, t, n, r, o, i) {
      const s = t[1],
        u = s.data[e + 8],
        a = tr(
          u,
          s,
          n,
          null == r ? st(u) && $n : r != s && 2 === u.type,
          o & E.Host && i === u
        );
      return null !== a ? nr(t, s, a, u) : Xn;
    }
    function tr(e, t, n, r, o) {
      const i = e.providerIndexes,
        s = t.data,
        u = 1048575 & i,
        a = e.directiveStart,
        c = i >> 20,
        l = o ? u + c : e.directiveEnd;
      for (let d = r ? u : u + c; d < l; d++) {
        const e = s[d];
        if ((d < a && n === e) || (d >= a && e.type === n)) return d;
      }
      if (o) {
        const e = s[a];
        if (e && at(e) && e.type === n) return a;
      }
      return null;
    }
    function nr(e, t, n, r) {
      let o = e[n];
      const i = t.data;
      if (o instanceof xn) {
        const s = o;
        if (s.resolving) throw new Error("Circular dep for " + Mn(i[n]));
        const u = zn(s.canSeeViewProviders);
        s.resolving = !0;
        const a = s.injectImpl ? he(s.injectImpl) : null;
        sn(e, r);
        try {
          (o = e[n] = s.factory(void 0, i, e, r)),
            t.firstCreatePass &&
              n >= r.directiveStart &&
              (function (e, t, n) {
                const {
                  ngOnChanges: r,
                  ngOnInit: o,
                  ngDoCheck: i,
                } = t.type.prototype;
                if (r) {
                  const r = ft(t);
                  (n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      e,
                      r
                    );
                }
                o && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, o),
                  i &&
                    ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                    (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(
                      e,
                      i
                    ));
              })(n, i[n], t);
        } finally {
          null !== a && he(a), zn(u), (s.resolving = !1), dn();
        }
      }
      return o;
    }
    function rr(e, t, n) {
      const r = 64 & e,
        o = 32 & e;
      let i;
      return (
        (i =
          128 & e
            ? r
              ? o
                ? n[t + 7]
                : n[t + 6]
              : o
              ? n[t + 5]
              : n[t + 4]
            : r
            ? o
              ? n[t + 3]
              : n[t + 2]
            : o
            ? n[t + 1]
            : n[t]),
        !!(i & (1 << e))
      );
    }
    function or(e, t) {
      return !(e & E.Self || (e & E.Host && t));
    }
    class ir {
      constructor(e, t) {
        (this._tNode = e), (this._lView = t);
      }
      get(e, t) {
        return Jn(this._tNode, this._lView, e, void 0, t);
      }
    }
    function sr(e) {
      const t = e;
      if ($(e))
        return () => {
          const e = sr(H(t));
          return e ? e() : null;
        };
      let n = Xe(t);
      if (null === n) {
        const e = T(t);
        n = e && e.factory;
      }
      return n || null;
    }
    function ur(e) {
      return a(() => {
        const t = e.prototype.constructor,
          n = t[ne] || sr(t),
          r = Object.prototype;
        let o = Object.getPrototypeOf(e.prototype).constructor;
        for (; o && o !== r; ) {
          const e = o[ne] || sr(o);
          if (e && e !== n) return e;
          o = Object.getPrototypeOf(o);
        }
        return (e) => new e();
      });
    }
    function ar(e) {
      return e.ngDebugContext;
    }
    function cr(e) {
      return e.ngOriginalError;
    }
    function lr(e, ...t) {
      e.error(...t);
    }
    class dr {
      constructor() {
        this._console = console;
      }
      handleError(e) {
        const t = this._findOriginalError(e),
          n = this._findContext(e),
          r = (function (e) {
            return e.ngErrorLogger || lr;
          })(e);
        r(this._console, "ERROR", e),
          t && r(this._console, "ORIGINAL ERROR", t),
          n && r(this._console, "ERROR CONTEXT", n);
      }
      _findContext(e) {
        return e ? (ar(e) ? ar(e) : this._findContext(cr(e))) : null;
      }
      _findOriginalError(e) {
        let t = cr(e);
        for (; t && cr(t); ) t = cr(t);
        return t;
      }
    }
    const fr = { name: "custom-elements" },
      hr = { name: "no-errors-schema" };
    class pr {
      constructor(e) {
        this.changingThisBreaksApplicationSecurity = e;
      }
      toString() {
        return (
          "SafeValue must use [property]=binding: " +
          this.changingThisBreaksApplicationSecurity +
          " (see http://g.co/ng/security#xss)"
        );
      }
    }
    class gr extends pr {
      getTypeName() {
        return "HTML";
      }
    }
    class mr extends pr {
      getTypeName() {
        return "Style";
      }
    }
    class yr extends pr {
      getTypeName() {
        return "Script";
      }
    }
    class br extends pr {
      getTypeName() {
        return "URL";
      }
    }
    class vr extends pr {
      getTypeName() {
        return "ResourceURL";
      }
    }
    function _r(e) {
      return e instanceof pr ? e.changingThisBreaksApplicationSecurity : e;
    }
    function wr(e, t) {
      const n = Cr(e);
      if (null != n && n !== t) {
        if ("ResourceURL" === n && "URL" === t) return !0;
        throw new Error(
          `Required a safe ${t}, got a ${n} (see http://g.co/ng/security#xss)`
        );
      }
      return n === t;
    }
    function Cr(e) {
      return (e instanceof pr && e.getTypeName()) || null;
    }
    function Dr(e) {
      return new gr(e);
    }
    function Er(e) {
      return new mr(e);
    }
    function Sr(e) {
      return new yr(e);
    }
    function Or(e) {
      return new br(e);
    }
    function xr(e) {
      return new vr(e);
    }
    let Ir = !0,
      Ar = !1;
    function jr() {
      return (Ar = !0), Ir;
    }
    function kr() {
      if (Ar) throw new Error("Cannot enable prod mode after platform setup.");
      Ir = !1;
    }
    function Tr(e) {
      return (function () {
        try {
          return !!new window.DOMParser().parseFromString("", "text/html");
        } catch (e) {
          return !1;
        }
      })()
        ? new Rr()
        : new Fr(e);
    }
    class Rr {
      getInertBodyElement(e) {
        e = "<body><remove></remove>" + e;
        try {
          const t = new window.DOMParser().parseFromString(e, "text/html").body;
          return t.removeChild(t.firstChild), t;
        } catch (t) {
          return null;
        }
      }
    }
    class Fr {
      constructor(e) {
        if (
          ((this.defaultDoc = e),
          (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument(
            "sanitization-inert"
          )),
          null == this.inertDocument.body)
        ) {
          const e = this.inertDocument.createElement("html");
          this.inertDocument.appendChild(e);
          const t = this.inertDocument.createElement("body");
          e.appendChild(t);
        }
      }
      getInertBodyElement(e) {
        const t = this.inertDocument.createElement("template");
        if ("content" in t) return (t.innerHTML = e), t;
        const n = this.inertDocument.createElement("body");
        return (
          (n.innerHTML = e),
          this.defaultDoc.documentMode && this.stripCustomNsAttrs(n),
          n
        );
      }
      stripCustomNsAttrs(e) {
        const t = e.attributes;
        for (let r = t.length - 1; 0 < r; r--) {
          const n = t.item(r).name;
          ("xmlns:ns1" !== n && 0 !== n.indexOf("ns1:")) ||
            e.removeAttribute(n);
        }
        let n = e.firstChild;
        for (; n; )
          n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n),
            (n = n.nextSibling);
      }
    }
    const Pr = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
      Nr = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
    function Mr(e) {
      return (e = String(e)).match(Pr) || e.match(Nr)
        ? e
        : (jr() &&
            console.warn(
              `WARNING: sanitizing unsafe URL value ${e} (see http://g.co/ng/security#xss)`
            ),
          "unsafe:" + e);
    }
    function Lr(e) {
      return (e = String(e))
        .split(",")
        .map((e) => Mr(e.trim()))
        .join(", ");
    }
    function Vr(e) {
      const t = {};
      for (const n of e.split(",")) t[n] = !0;
      return t;
    }
    function Ur(...e) {
      const t = {};
      for (const n of e) for (const e in n) n.hasOwnProperty(e) && (t[e] = !0);
      return t;
    }
    const Br = Vr("area,br,col,hr,img,wbr"),
      Hr = Vr("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
      $r = Vr("rp,rt"),
      zr = Ur($r, Hr),
      qr = Ur(
        Br,
        Ur(
          Hr,
          Vr(
            "address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"
          )
        ),
        Ur(
          $r,
          Vr(
            "a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"
          )
        ),
        zr
      ),
      Wr = Vr("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
      Qr = Vr("srcset"),
      Gr = Ur(
        Wr,
        Qr,
        Vr(
          "abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"
        ),
        Vr(
          "aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"
        )
      ),
      Zr = Vr("script,style,template");
    class Kr {
      constructor() {
        (this.sanitizedSomething = !1), (this.buf = []);
      }
      sanitizeChildren(e) {
        let t = e.firstChild,
          n = !0;
        for (; t; )
          if (
            (t.nodeType === Node.ELEMENT_NODE
              ? (n = this.startElement(t))
              : t.nodeType === Node.TEXT_NODE
              ? this.chars(t.nodeValue)
              : (this.sanitizedSomething = !0),
            n && t.firstChild)
          )
            t = t.firstChild;
          else
            for (; t; ) {
              t.nodeType === Node.ELEMENT_NODE && this.endElement(t);
              let e = this.checkClobberedElement(t, t.nextSibling);
              if (e) {
                t = e;
                break;
              }
              t = this.checkClobberedElement(t, t.parentNode);
            }
        return this.buf.join("");
      }
      startElement(e) {
        const t = e.nodeName.toLowerCase();
        if (!qr.hasOwnProperty(t))
          return (this.sanitizedSomething = !0), !Zr.hasOwnProperty(t);
        this.buf.push("<"), this.buf.push(t);
        const n = e.attributes;
        for (let r = 0; r < n.length; r++) {
          const e = n.item(r),
            t = e.name,
            o = t.toLowerCase();
          if (!Gr.hasOwnProperty(o)) {
            this.sanitizedSomething = !0;
            continue;
          }
          let i = e.value;
          Wr[o] && (i = Mr(i)),
            Qr[o] && (i = Lr(i)),
            this.buf.push(" ", t, '="', Xr(i), '"');
        }
        return this.buf.push(">"), !0;
      }
      endElement(e) {
        const t = e.nodeName.toLowerCase();
        qr.hasOwnProperty(t) &&
          !Br.hasOwnProperty(t) &&
          (this.buf.push("</"), this.buf.push(t), this.buf.push(">"));
      }
      chars(e) {
        this.buf.push(Xr(e));
      }
      checkClobberedElement(e, t) {
        if (
          t &&
          (e.compareDocumentPosition(t) &
            Node.DOCUMENT_POSITION_CONTAINED_BY) ===
            Node.DOCUMENT_POSITION_CONTAINED_BY
        )
          throw new Error(
            "Failed to sanitize html because the element is clobbered: " +
              e.outerHTML
          );
        return t;
      }
    }
    const Yr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      Jr = /([^\#-~ |!])/g;
    function Xr(e) {
      return e
        .replace(/&/g, "&amp;")
        .replace(Yr, function (e) {
          return (
            "&#" +
            (1024 * (e.charCodeAt(0) - 55296) +
              (e.charCodeAt(1) - 56320) +
              65536) +
            ";"
          );
        })
        .replace(Jr, function (e) {
          return "&#" + e.charCodeAt(0) + ";";
        })
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
    let eo;
    function to(e, t) {
      let n = null;
      try {
        eo = eo || Tr(e);
        let r = t ? String(t) : "";
        n = eo.getInertBodyElement(r);
        let o = 5,
          i = r;
        do {
          if (0 === o)
            throw new Error(
              "Failed to sanitize html because the input is unstable"
            );
          o--, (r = i), (i = n.innerHTML), (n = eo.getInertBodyElement(r));
        } while (r !== i);
        const s = new Kr(),
          u = s.sanitizeChildren(no(n) || n);
        return (
          jr() &&
            s.sanitizedSomething &&
            console.warn(
              "WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"
            ),
          u
        );
      } finally {
        if (n) {
          const e = no(n) || n;
          for (; e.firstChild; ) e.removeChild(e.firstChild);
        }
      }
    }
    function no(e) {
      return "content" in e &&
        (function (e) {
          return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName;
        })(e)
        ? e.content
        : null;
    }
    var ro = (function (e) {
      return (
        (e[(e.NONE = 0)] = "NONE"),
        (e[(e.HTML = 1)] = "HTML"),
        (e[(e.STYLE = 2)] = "STYLE"),
        (e[(e.SCRIPT = 3)] = "SCRIPT"),
        (e[(e.URL = 4)] = "URL"),
        (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
        e
      );
    })({});
    function oo(e) {
      const t = fo();
      return t
        ? t.sanitize(ro.HTML, e) || ""
        : wr(e, "HTML")
        ? _r(e)
        : to(_t(), Nn(e));
    }
    function io(e) {
      const t = fo();
      return t ? t.sanitize(ro.STYLE, e) || "" : wr(e, "Style") ? _r(e) : Nn(e);
    }
    function so(e) {
      const t = fo();
      return t ? t.sanitize(ro.URL, e) || "" : wr(e, "URL") ? _r(e) : Mr(Nn(e));
    }
    function uo(e) {
      const t = fo();
      if (t) return t.sanitize(ro.RESOURCE_URL, e) || "";
      if (wr(e, "ResourceURL")) return _r(e);
      throw new Error(
        "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
      );
    }
    function ao(e) {
      const t = fo();
      if (t) return t.sanitize(ro.SCRIPT, e) || "";
      if (wr(e, "Script")) return _r(e);
      throw new Error("unsafe value used in a script context");
    }
    function co(e, t) {
      return ("src" === t &&
        ("embed" === e ||
          "frame" === e ||
          "iframe" === e ||
          "media" === e ||
          "script" === e)) ||
        ("href" === t && ("base" === e || "link" === e))
        ? uo
        : so;
    }
    function lo(e, t, n) {
      return co(t, n)(e);
    }
    function fo() {
      const e = Ut();
      return e && e[12];
    }
    const ho = /([A-Z])/g;
    function po(e) {
      try {
        return null != e ? e.toString().slice(0, 30) : e;
      } catch (t) {
        return "[ERROR] Exception while trying to serialize the value";
      }
    }
    function go(e) {
      let t = At(e);
      if (t) {
        if (Array.isArray(t)) {
          const r = t;
          let o,
            i = void 0,
            s = void 0;
          if ((n = e) && n.constructor && n.constructor.ɵcmp) {
            if (((o = wo(r, e)), -1 == o))
              throw new Error(
                "The provided component was not found in the application"
              );
            i = e;
          } else if (
            (function (e) {
              return e && e.constructor && e.constructor.ɵdir;
            })(e)
          ) {
            if (
              ((o = (function (e, t) {
                let n = e[1].firstChild;
                for (; n; ) {
                  const r = n.directiveEnd;
                  for (let o = n.directiveStart; o < r; o++)
                    if (e[o] === t) return n.index;
                  n = _o(n);
                }
                return -1;
              })(r, e)),
              -1 == o)
            )
              throw new Error(
                "The provided directive was not found in the application"
              );
            s = Co(o, r, !1);
          } else if (((o = vo(r, e)), -1 == o)) return null;
          const u = Dt(r[o]),
            a = At(u),
            c = a && !Array.isArray(a) ? a : mo(r, o, u);
          if (
            (i &&
              void 0 === c.component &&
              ((c.component = i), bo(c.component, c)),
            s && void 0 === c.directives)
          ) {
            c.directives = s;
            for (let e = 0; e < s.length; e++) bo(s[e], c);
          }
          bo(c.native, c), (t = c);
        }
      } else {
        const n = e;
        let r = n;
        for (; (r = r.parentNode); ) {
          const e = At(r);
          if (e) {
            let r;
            if (((r = Array.isArray(e) ? e : e.lView), !r)) return null;
            const o = vo(r, n);
            if (o >= 0) {
              const e = Dt(r[o]),
                n = mo(r, o, e);
              bo(e, n), (t = n);
              break;
            }
          }
        }
      }
      var n;
      return t || null;
    }
    function mo(e, t, n) {
      return {
        lView: e,
        nodeIndex: t,
        native: n,
        component: void 0,
        directives: void 0,
        localRefs: void 0,
      };
    }
    function yo(e) {
      let t,
        n = At(e);
      if (Array.isArray(n)) {
        const r = wo(n, e);
        t = It(r, n);
        const o = mo(n, r, t[0]);
        (o.component = e), bo(e, o), bo(o.native, o);
      } else t = It(n.nodeIndex, n.lView);
      return t;
    }
    function bo(e, t) {
      e.__ngContext__ = t;
    }
    function vo(e, t) {
      const n = e[1];
      for (let r = tt; r < n.bindingStartIndex; r++)
        if (Dt(e[r]) === t) return r;
      return -1;
    }
    function _o(e) {
      if (e.child && e.child.parent === e) return e.child;
      if (e.next) return e.next;
      for (; e.parent && !e.parent.next; ) e = e.parent;
      return e.parent && e.parent.next;
    }
    function wo(e, t) {
      const n = e[1].components;
      if (n)
        for (let r = 0; r < n.length; r++) {
          const o = n[r];
          if (It(o, e)[8] === t) return o;
        }
      else if (It(tt, e)[8] === t) return tt;
      return -1;
    }
    function Co(e, t, n) {
      const r = t[1].data[e];
      let o = r.directiveStart;
      return 0 == o
        ? Le
        : (!n && 2 & r.flags && o++, t.slice(o, r.directiveEnd));
    }
    function Do(e, t, n) {
      let r = e.length;
      for (;;) {
        const o = e.indexOf(t, n);
        if (-1 === o) return o;
        if (0 === o || e.charCodeAt(o - 1) <= 32) {
          const n = t.length;
          if (o + n === r || e.charCodeAt(o + n) <= 32) return o;
        }
        n = o + 1;
      }
    }
    const Eo = "ng-template";
    function So(e, t, n) {
      let r = 0;
      for (; r < e.length; ) {
        let o = e[r++];
        if (n && "class" === o) {
          if (((o = e[r]), -1 !== Do(o.toLowerCase(), t, 0))) return !0;
        } else if (1 === o) {
          for (; r < e.length && "string" == typeof (o = e[r++]); )
            if (o.toLowerCase() === t) return !0;
          return !1;
        }
      }
      return !1;
    }
    function Oo(e) {
      return 0 === e.type && e.tagName !== Eo;
    }
    function xo(e, t, n) {
      return t === (0 !== e.type || n ? e.tagName : Eo);
    }
    function Io(e, t, n) {
      let r = 4;
      const o = e.attrs || [],
        i = (function (e) {
          for (let t = 0; t < e.length; t++) if (An(e[t])) return t;
          return e.length;
        })(o);
      let s = !1;
      for (let u = 0; u < t.length; u++) {
        const a = t[u];
        if ("number" != typeof a) {
          if (!s)
            if (4 & r) {
              if (
                ((r = 2 | (1 & r)),
                ("" !== a && !xo(e, a, n)) || ("" === a && 1 === t.length))
              ) {
                if (Ao(r)) return !1;
                s = !0;
              }
            } else {
              const c = 8 & r ? a : t[++u];
              if (8 & r && null !== e.attrs) {
                if (!So(e.attrs, c, n)) {
                  if (Ao(r)) return !1;
                  s = !0;
                }
                continue;
              }
              const l = jo(8 & r ? "class" : a, o, Oo(e), n);
              if (-1 === l) {
                if (Ao(r)) return !1;
                s = !0;
                continue;
              }
              if ("" !== c) {
                let e;
                e = l > i ? "" : o[l + 1].toLowerCase();
                const t = 8 & r ? e : null;
                if ((t && -1 !== Do(t, c, 0)) || (2 & r && c !== e)) {
                  if (Ao(r)) return !1;
                  s = !0;
                }
              }
            }
        } else {
          if (!s && !Ao(r) && !Ao(a)) return !1;
          if (s && Ao(a)) continue;
          (s = !1), (r = a | (1 & r));
        }
      }
      return Ao(r) || s;
    }
    function Ao(e) {
      return 0 == (1 & e);
    }
    function jo(e, t, n, r) {
      if (null === t) return -1;
      let o = 0;
      if (r || !n) {
        let n = !1;
        for (; o < t.length; ) {
          const r = t[o];
          if (r === e) return o;
          if (3 === r || 6 === r) n = !0;
          else {
            if (1 === r || 2 === r) {
              let e = t[++o];
              for (; "string" == typeof e; ) e = t[++o];
              continue;
            }
            if (4 === r) break;
            if (0 === r) {
              o += 4;
              continue;
            }
          }
          o += n ? 1 : 2;
        }
        return -1;
      }
      return (function (e, t) {
        let n = e.indexOf(4);
        if (n > -1)
          for (n++; n < e.length; ) {
            const r = e[n];
            if ("number" == typeof r) return -1;
            if (r === t) return n;
            n++;
          }
        return -1;
      })(t, e);
    }
    function ko(e, t, n = !1) {
      for (let r = 0; r < t.length; r++) if (Io(e, t[r], n)) return !0;
      return !1;
    }
    function To(e, t) {
      e: for (let n = 0; n < t.length; n++) {
        const r = t[n];
        if (e.length === r.length) {
          for (let t = 0; t < e.length; t++) if (e[t] !== r[t]) continue e;
          return !0;
        }
      }
      return !1;
    }
    function Ro(e, t) {
      return e ? ":not(" + t.trim() + ")" : t;
    }
    function Fo(e) {
      let t = e[0],
        n = 1,
        r = 2,
        o = "",
        i = !1;
      for (; n < e.length; ) {
        let s = e[n];
        if ("string" == typeof s)
          if (2 & r) {
            const t = e[++n];
            o += "[" + s + (t.length > 0 ? '="' + t + '"' : "") + "]";
          } else 8 & r ? (o += "." + s) : 4 & r && (o += " " + s);
        else
          "" === o || Ao(s) || ((t += Ro(i, o)), (o = "")),
            (r = s),
            (i = i || !Ao(r));
        n++;
      }
      return "" !== o && (t += Ro(i, o)), t;
    }
    const Po = {};
    function No(e) {
      const t = e[3];
      return ot(t) ? t[3] : t;
    }
    function Mo(e) {
      return (function (e) {
        let t = rt(e) ? e : jt(e);
        for (; t && !(512 & t[2]); ) t = No(t);
        return t;
      })(e)[8];
    }
    function Lo(e) {
      return Uo(e[13]);
    }
    function Vo(e) {
      return Uo(e[4]);
    }
    function Uo(e) {
      for (; null !== e && !ot(e); ) e = e[4];
      return e;
    }
    function Bo(e) {
      Ho(Bt(), Ut(), pn() + e, Qt());
    }
    function Ho(e, t, n, r) {
      if (!r)
        if (3 == (3 & t[2])) {
          const r = e.preOrderCheckHooks;
          null !== r && wn(t, r, n);
        } else {
          const r = e.preOrderHooks;
          null !== r && Cn(t, r, 0, n);
        }
      gn(n);
    }
    function $o(e, t) {
      return (e << 17) | (t << 2);
    }
    function zo(e) {
      return (e >> 17) & 32767;
    }
    function qo(e) {
      return 2 | e;
    }
    function Wo(e) {
      return (131068 & e) >> 2;
    }
    function Qo(e, t) {
      return (-131069 & e) | (t << 2);
    }
    function Go(e) {
      return 1 | e;
    }
    const Zo = (() => Promise.resolve(null))();
    function Ko(e, t) {
      const n = e.contentQueries;
      if (null !== n)
        for (let r = 0; r < n.length; r += 2) {
          const o = n[r],
            i = n[r + 1];
          if (-1 !== i) {
            const n = e.data[i];
            on(o), n.contentQueries(2, t[i], i);
          }
        }
    }
    function Yo(e, t, n) {
      return wt(t)
        ? t.createElement(e, n)
        : null === n
        ? t.createElement(e)
        : t.createElementNS(n, e);
    }
    function Jo(e, t, n, r, o, i, s, u, a, c) {
      const l = t.blueprint.slice();
      return (
        (l[0] = o),
        (l[2] = 140 | r),
        Ft(l),
        (l[3] = l[15] = e),
        (l[8] = n),
        (l[10] = s || (e && e[10])),
        (l[11] = u || (e && e[11])),
        (l[12] = a || (e && e[12]) || null),
        (l[9] = c || (e && e[9]) || null),
        (l[6] = i),
        (l[16] = 2 == t.type ? e[16] : l),
        l
      );
    }
    function Xo(e, t, n, r, o) {
      const i = t + tt,
        s =
          e.data[i] ||
          (function (e, t, n, r, o) {
            const i = $t(),
              s = qt(),
              u = (e.data[t] = (function (e, t, n, r, o, i) {
                return {
                  type: n,
                  index: r,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  tagName: o,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, s ? i : i && i.parent, n, t, r, o));
            return (
              null === e.firstChild && (e.firstChild = u),
              null !== i &&
                (s && null == i.child && null !== u.parent
                  ? (i.child = u)
                  : s || (i.next = u)),
              u
            );
          })(e, i, n, r, o);
      return zt(s, !0), s;
    }
    function ei(e, t, n) {
      un(t);
      try {
        const r = e.viewQuery;
        null !== r && Pi(1, r, n);
        const o = e.template;
        null !== o && ri(e, t, o, 1, n),
          e.firstCreatePass && (e.firstCreatePass = !1),
          e.staticContentQueries && Ko(e, t),
          e.staticViewQueries && Pi(2, e.viewQuery, n);
        const i = e.components;
        null !== i &&
          (function (e, t) {
            for (let n = 0; n < t.length; n++) Ai(e, t[n]);
          })(t, i);
      } catch (r) {
        throw (e.firstCreatePass && (e.incompleteFirstPass = !0), r);
      } finally {
        (t[2] &= -5), fn();
      }
    }
    function ti(e, t, n, r) {
      const o = t[2];
      if (256 == (256 & o)) return;
      un(t);
      const i = Qt();
      try {
        Ft(t), Yt(e.bindingStartIndex), null !== n && ri(e, t, n, 2, r);
        const s = 3 == (3 & o);
        if (!i)
          if (s) {
            const n = e.preOrderCheckHooks;
            null !== n && wn(t, n, null);
          } else {
            const n = e.preOrderHooks;
            null !== n && Cn(t, n, 0, null), Dn(t, 0);
          }
        if (
          ((function (e) {
            for (let t = Lo(e); null !== t; t = Vo(t)) {
              if (!t[2]) continue;
              const e = t[9];
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = n[3];
                0 == (1024 & n[2]) && Pt(r, 1), (n[2] |= 1024);
              }
            }
          })(t),
          (function (e) {
            for (let t = Lo(e); null !== t; t = Vo(t))
              for (let e = nt; e < t.length; e++) {
                const n = t[e],
                  r = n[1];
                Tt(n) && ti(r, n, r.template, n[8]);
              }
          })(t),
          null !== e.contentQueries && Ko(e, t),
          !i)
        )
          if (s) {
            const n = e.contentCheckHooks;
            null !== n && wn(t, n);
          } else {
            const n = e.contentHooks;
            null !== n && Cn(t, n, 1), Dn(t, 1);
          }
        !(function (e, t) {
          try {
            const n = e.expandoInstructions;
            if (null !== n) {
              let r = e.expandoStartIndex,
                o = -1,
                i = -1;
              for (let e = 0; e < n.length; e++) {
                const s = n[e];
                "number" == typeof s
                  ? s <= 0
                    ? ((i = 0 - s), gn(i), (r += 9 + n[++e]), (o = r))
                    : (r += s)
                  : (null !== s && (en(r, o), s(2, t[o])), o++);
              }
            }
          } finally {
            gn(-1);
          }
        })(e, t);
        const u = e.components;
        null !== u &&
          (function (e, t) {
            for (let n = 0; n < t.length; n++) xi(e, t[n]);
          })(t, u);
        const a = e.viewQuery;
        if ((null !== a && Pi(2, a, r), !i))
          if (s) {
            const n = e.viewCheckHooks;
            null !== n && wn(t, n);
          } else {
            const n = e.viewHooks;
            null !== n && Cn(t, n, 2), Dn(t, 2);
          }
        !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
          i || (t[2] &= -73),
          1024 & t[2] && ((t[2] &= -1025), Pt(t[3], -1));
      } finally {
        fn();
      }
    }
    function ni(e, t, n, r) {
      const o = t[10],
        i = !Qt(),
        s = kt(t);
      try {
        i && !s && o.begin && o.begin(), s && ei(e, t, r), ti(e, t, n, r);
      } finally {
        i && !s && o.end && o.end();
      }
    }
    function ri(e, t, n, r, o) {
      const i = pn();
      try {
        gn(-1), 2 & r && t.length > tt && Ho(e, t, 0, Qt()), n(r, o);
      } finally {
        gn(i);
      }
    }
    function oi(e, t, n) {
      if (it(t)) {
        const r = t.directiveEnd;
        for (let o = t.directiveStart; o < r; o++) {
          const t = e.data[o];
          t.contentQueries && t.contentQueries(1, n[o], o);
        }
      }
    }
    function ii(e, t, n) {
      Mt() &&
        ((function (e, t, n, r) {
          const o = n.directiveStart,
            i = n.directiveEnd;
          e.firstCreatePass || Wn(n, t), bo(r, t);
          const s = n.initialInputs;
          for (let u = o; u < i; u++) {
            const r = e.data[u],
              i = at(r);
            i && Ci(t, n, r);
            const a = nr(t, e, u, n);
            bo(a, t),
              null !== s && Ei(0, u - o, a, r, 0, s),
              i && (It(n.index, t)[8] = a);
          }
        })(e, t, n, St(n, t)),
        128 == (128 & n.flags) &&
          (function (e, t, n) {
            const r = n.directiveStart,
              o = n.directiveEnd,
              i = e.expandoInstructions,
              s = e.firstCreatePass,
              u = n.index - tt,
              a = Nt.lFrame.currentDirectiveIndex;
            try {
              gn(u);
              for (let n = r; n < o; n++) {
                const r = e.data[n],
                  o = t[n];
                tn(n),
                  null !== r.hostBindings ||
                  0 !== r.hostVars ||
                  null !== r.hostAttrs
                    ? mi(r, o)
                    : s && i.push(null);
              }
            } finally {
              gn(-1), tn(a);
            }
          })(e, t, n));
    }
    function si(e, t, n = St) {
      const r = t.localNames;
      if (null !== r) {
        let o = t.index + 1;
        for (let i = 0; i < r.length; i += 2) {
          const s = r[i + 1],
            u = -1 === s ? n(t, e) : e[s];
          e[o++] = u;
        }
      }
    }
    function ui(e) {
      const t = e.tView;
      return null === t || t.incompleteFirstPass
        ? (e.tView = ai(
            1,
            null,
            e.template,
            e.decls,
            e.vars,
            e.directiveDefs,
            e.pipeDefs,
            e.viewQuery,
            e.schemas,
            e.consts
          ))
        : t;
    }
    function ai(e, t, n, r, o, i, s, u, a, c) {
      const l = tt + r,
        d = l + o,
        f = (function (e, t) {
          const n = [];
          for (let r = 0; r < t; r++) n.push(r < e ? null : Po);
          return n;
        })(l, d),
        h = "function" == typeof c ? c() : c;
      return (f[1] = {
        type: e,
        blueprint: f,
        template: n,
        queries: null,
        viewQuery: u,
        declTNode: t,
        data: f.slice().fill(null, l),
        bindingStartIndex: l,
        expandoStartIndex: d,
        expandoInstructions: null,
        firstCreatePass: !0,
        firstUpdatePass: !0,
        staticViewQueries: !1,
        staticContentQueries: !1,
        preOrderHooks: null,
        preOrderCheckHooks: null,
        contentHooks: null,
        contentCheckHooks: null,
        viewHooks: null,
        viewCheckHooks: null,
        destroyHooks: null,
        cleanup: null,
        contentQueries: null,
        components: null,
        directiveRegistry: "function" == typeof i ? i() : i,
        pipeRegistry: "function" == typeof s ? s() : s,
        firstChild: null,
        schemas: a,
        consts: h,
        incompleteFirstPass: !1,
      });
    }
    function ci(e, t, n) {
      if (wt(e)) return e.selectRootElement(t, n === Ne.ShadowDom);
      let r = "string" == typeof t ? e.querySelector(t) : t;
      return (r.textContent = ""), r;
    }
    function li(e, t, n, r) {
      const o = Mi(t);
      o.push(n),
        e.firstCreatePass &&
          (function (e) {
            return e.cleanup || (e.cleanup = []);
          })(e).push(r, o.length - 1);
    }
    function di(e, t, n) {
      for (let r in e)
        if (e.hasOwnProperty(r)) {
          const o = e[r];
          (n = null === n ? {} : n).hasOwnProperty(r)
            ? n[r].push(t, o)
            : (n[r] = [t, o]);
        }
      return n;
    }
    function fi(e, t, n, r, o, i, s, u) {
      const a = St(t, n);
      let c,
        l = t.inputs;
      var d;
      !u && null != l && (c = l[r])
        ? (Ui(e, n, c, r, o),
          st(t) &&
            (function (e, t) {
              const n = It(t, e);
              16 & n[2] || (n[2] |= 64);
            })(n, t.index))
        : 2 === t.type &&
          ((r =
            "class" === (d = r)
              ? "className"
              : "for" === d
              ? "htmlFor"
              : "formaction" === d
              ? "formAction"
              : "innerHtml" === d
              ? "innerHTML"
              : "readonly" === d
              ? "readOnly"
              : "tabindex" === d
              ? "tabIndex"
              : d),
          (o = null != s ? s(o, t.tagName || "", r) : o),
          wt(i)
            ? i.setProperty(a, r, o)
            : jn(r) || (a.setProperty ? a.setProperty(r, o) : (a[r] = o)));
    }
    function hi(e, t, n, r) {
      let o = !1;
      if (Mt()) {
        const i = (function (e, t, n) {
            const r = e.directiveRegistry;
            let o = null;
            if (r)
              for (let i = 0; i < r.length; i++) {
                const s = r[i];
                ko(n, s.selectors, !1) &&
                  (o || (o = []),
                  Kn(Wn(n, t), e, s.type),
                  at(s) ? (bi(e, n), o.unshift(s)) : o.push(s));
              }
            return o;
          })(e, t, n),
          s = null === r ? null : { "": -1 };
        if (null !== i) {
          let r = 0;
          (o = !0), _i(n, e.data.length, i.length);
          for (let e = 0; e < i.length; e++) {
            const t = i[e];
            t.providersResolver && t.providersResolver(t);
          }
          yi(e, n, i.length);
          let u = !1,
            a = !1;
          for (let o = 0; o < i.length; o++) {
            const c = i[o];
            (n.mergedAttrs = kn(n.mergedAttrs, c.hostAttrs)),
              wi(e, t, c),
              vi(e.data.length - 1, c, s),
              null !== c.contentQueries && (n.flags |= 8),
              (null === c.hostBindings &&
                null === c.hostAttrs &&
                0 === c.hostVars) ||
                (n.flags |= 128);
            const l = c.type.prototype;
            !u &&
              (l.ngOnChanges || l.ngOnInit || l.ngDoCheck) &&
              ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index - tt),
              (u = !0)),
              a ||
                (!l.ngOnChanges && !l.ngDoCheck) ||
                ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                  n.index - tt
                ),
                (a = !0)),
              pi(e, c),
              (r += c.hostVars);
          }
          !(function (e, t) {
            const n = t.directiveEnd,
              r = e.data,
              o = t.attrs,
              i = [];
            let s = null,
              u = null;
            for (let a = t.directiveStart; a < n; a++) {
              const e = r[a],
                n = e.inputs,
                c = null === o || Oo(t) ? null : Si(n, o);
              i.push(c), (s = di(n, a, s)), (u = di(e.outputs, a, u));
            }
            null !== s &&
              (s.hasOwnProperty("class") && (t.flags |= 16),
              s.hasOwnProperty("style") && (t.flags |= 32)),
              (t.initialInputs = i),
              (t.inputs = s),
              (t.outputs = u);
          })(e, n),
            gi(e, t, r);
        }
        s &&
          (function (e, t, n) {
            if (t) {
              const r = (e.localNames = []);
              for (let e = 0; e < t.length; e += 2) {
                const o = n[t[e + 1]];
                if (null == o)
                  throw new Error(`Export of name '${t[e + 1]}' not found!`);
                r.push(t[e], o);
              }
            }
          })(n, r, s);
      }
      return (n.mergedAttrs = kn(n.mergedAttrs, n.attrs)), o;
    }
    function pi(e, t) {
      const n = e.expandoInstructions;
      n.push(t.hostBindings), 0 !== t.hostVars && n.push(t.hostVars);
    }
    function gi(e, t, n) {
      for (let r = 0; r < n; r++)
        t.push(Po), e.blueprint.push(Po), e.data.push(null);
    }
    function mi(e, t) {
      null !== e.hostBindings && e.hostBindings(1, t);
    }
    function yi(e, t, n) {
      const r = tt - t.index,
        o = e.data.length - (1048575 & t.providerIndexes);
      (e.expandoInstructions || (e.expandoInstructions = [])).push(r, o, n);
    }
    function bi(e, t) {
      (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
    }
    function vi(e, t, n) {
      if (n) {
        if (t.exportAs)
          for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
        at(t) && (n[""] = e);
      }
    }
    function _i(e, t, n) {
      (e.flags |= 1),
        (e.directiveStart = t),
        (e.directiveEnd = t + n),
        (e.providerIndexes = t);
    }
    function wi(e, t, n) {
      e.data.push(n);
      const r = n.factory || (n.factory = Xe(n.type)),
        o = new xn(r, at(n), null);
      e.blueprint.push(o), t.push(o);
    }
    function Ci(e, t, n) {
      const r = St(t, e),
        o = ui(n),
        i = e[10],
        s = ji(
          e,
          Jo(
            e,
            o,
            null,
            n.onPush ? 64 : 16,
            r,
            t,
            i,
            i.createRenderer(r, n),
            null,
            null
          )
        );
      e[t.index] = s;
    }
    function Di(e, t, n, r, o, i) {
      const s = St(e, t),
        u = t[11];
      if (null == r) wt(u) ? u.removeAttribute(s, n, i) : s.removeAttribute(n);
      else {
        const t = null == o ? Nn(r) : o(r, e.tagName || "", n);
        wt(u)
          ? u.setAttribute(s, n, t, i)
          : i
          ? s.setAttributeNS(i, n, t)
          : s.setAttribute(n, t);
      }
    }
    function Ei(e, t, n, r, o, i) {
      const s = i[t];
      if (null !== s) {
        const e = r.setInput;
        for (let t = 0; t < s.length; ) {
          const o = s[t++],
            i = s[t++],
            u = s[t++];
          null !== e ? r.setInput(n, u, o, i) : (n[i] = u);
        }
      }
    }
    function Si(e, t) {
      let n = null,
        r = 0;
      for (; r < t.length; ) {
        const o = t[r];
        if (0 !== o)
          if (5 !== o) {
            if ("number" == typeof o) break;
            e.hasOwnProperty(o) &&
              (null === n && (n = []), n.push(o, e[o], t[r + 1])),
              (r += 2);
          } else r += 2;
        else r += 4;
      }
      return n;
    }
    function Oi(e, t, n, r) {
      return new Array(e, !0, !1, t, null, 0, r, n, null, null);
    }
    function xi(e, t) {
      const n = It(t, e);
      if (Tt(n)) {
        const e = n[1];
        80 & n[2] ? ti(e, n, e.template, n[8]) : n[5] > 0 && Ii(n);
      }
    }
    function Ii(e) {
      for (let n = Lo(e); null !== n; n = Vo(n))
        for (let e = nt; e < n.length; e++) {
          const t = n[e];
          if (1024 & t[2]) {
            const e = t[1];
            ti(e, t, e.template, t[8]);
          } else t[5] > 0 && Ii(t);
        }
      const t = e[1].components;
      if (null !== t)
        for (let n = 0; n < t.length; n++) {
          const r = It(t[n], e);
          Tt(r) && r[5] > 0 && Ii(r);
        }
    }
    function Ai(e, t) {
      const n = It(t, e),
        r = n[1];
      !(function (e, t) {
        for (let n = t.length; n < e.blueprint.length; n++)
          t.push(e.blueprint[n]);
      })(r, n),
        ei(r, n, n[8]);
    }
    function ji(e, t) {
      return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
    }
    function ki(e) {
      for (; e; ) {
        e[2] |= 64;
        const t = No(e);
        if (ct(e) && !t) return e;
        e = t;
      }
      return null;
    }
    function Ti(e) {
      for (let t = 0; t < e.components.length; t++) {
        const n = e.components[t],
          r = jt(n),
          o = r[1];
        ni(o, r, o.template, n);
      }
    }
    function Ri(e, t, n) {
      const r = t[10];
      r.begin && r.begin();
      try {
        ti(e, t, e.template, n);
      } catch (o) {
        throw (Vi(t, o), o);
      } finally {
        r.end && r.end();
      }
    }
    function Fi(e) {
      Ti(e[8]);
    }
    function Pi(e, t, n) {
      on(0), t(e, n);
    }
    const Ni = Zo;
    function Mi(e) {
      return e[7] || (e[7] = []);
    }
    function Li(e, t, n) {
      return (
        (null === e || at(e)) &&
          (n = (function (e) {
            for (; Array.isArray(e); ) {
              if ("object" == typeof e[1]) return e;
              e = e[0];
            }
            return null;
          })(n[t.index])),
        n[11]
      );
    }
    function Vi(e, t) {
      const n = e[9],
        r = n ? n.get(dr, null) : null;
      r && r.handleError(t);
    }
    function Ui(e, t, n, r, o) {
      for (let i = 0; i < n.length; ) {
        const s = n[i++],
          u = n[i++],
          a = t[s],
          c = e.data[s];
        null !== c.setInput ? c.setInput(a, o, r, u) : (a[u] = o);
      }
    }
    function Bi(e, t, n) {
      const r = Et(t, e),
        o = e[11];
      wt(o) ? o.setValue(r, n) : (r.textContent = n);
    }
    function Hi(e, t, n, r, o) {
      if (null != r) {
        let i,
          s = !1;
        ot(r) ? (i = r) : rt(r) && ((s = !0), (r = r[0]));
        const u = Dt(r);
        0 === e && null !== n
          ? null == o
            ? Ki(t, n, u)
            : Zi(t, n, u, o || null)
          : 1 === e && null !== n
          ? Zi(t, n, u, o || null)
          : 2 === e
          ? rs(t, u, s)
          : 3 === e && t.destroyNode(u),
          null != i &&
            (function (e, t, n, r, o) {
              const i = n[7];
              i !== Dt(n) && Hi(t, e, r, i, o);
              for (let s = nt; s < n.length; s++) {
                const o = n[s];
                is(o[1], o, e, t, r, i);
              }
            })(t, e, i, n, o);
      }
    }
    function $i(e, t) {
      return wt(t) ? t.createText(e) : t.createTextNode(e);
    }
    function zi(e, t) {
      const n = e[9],
        r = n.indexOf(t),
        o = t[3];
      1024 & t[2] && ((t[2] &= -1025), Pt(o, -1)), n.splice(r, 1);
    }
    function qi(e, t) {
      if (e.length <= nt) return;
      const n = nt + t,
        r = e[n];
      if (r) {
        const i = r[17];
        null !== i && i !== e && zi(i, r), t > 0 && (e[n - 1][4] = r[4]);
        const s = Ie(e, nt + t);
        is(r[1], (o = r), o[11], 2, null, null), (o[0] = null), (o[6] = null);
        const u = s[19];
        null !== u && u.detachView(s[1]),
          (r[3] = null),
          (r[4] = null),
          (r[2] &= -129);
      }
      var o;
      return r;
    }
    function Wi(e, t) {
      if (!(256 & t[2])) {
        const n = t[11];
        wt(n) && n.destroyNode && is(e, t, n, 3, null, null),
          (function (e) {
            let t = e[13];
            if (!t) return Qi(e[1], e);
            for (; t; ) {
              let n = null;
              if (rt(t)) n = t[13];
              else {
                const e = t[10];
                e && (n = e);
              }
              if (!n) {
                for (; t && !t[4] && t !== e; )
                  rt(t) && Qi(t[1], t), (t = t[3]);
                null === t && (t = e), rt(t) && Qi(t[1], t), (n = t && t[4]);
              }
              t = n;
            }
          })(t);
      }
    }
    function Qi(e, t) {
      if (!(256 & t[2])) {
        (t[2] &= -129),
          (t[2] |= 256),
          (function (e, t) {
            let n;
            if (null != e && null != (n = e.destroyHooks))
              for (let r = 0; r < n.length; r += 2) {
                const e = t[n[r]];
                if (!(e instanceof xn)) {
                  const t = n[r + 1];
                  if (Array.isArray(t))
                    for (let n = 0; n < t.length; n += 2)
                      t[n + 1].call(e[t[n]]);
                  else t.call(e);
                }
              }
          })(e, t),
          (function (e, t) {
            const n = e.cleanup;
            if (null !== n) {
              const e = t[7];
              for (let r = 0; r < n.length - 1; r += 2)
                if ("string" == typeof n[r]) {
                  const o = n[r + 1],
                    i = "function" == typeof o ? o(t) : Dt(t[o]),
                    s = e[n[r + 2]],
                    u = n[r + 3];
                  "boolean" == typeof u
                    ? i.removeEventListener(n[r], s, u)
                    : u >= 0
                    ? e[u]()
                    : e[-u].unsubscribe(),
                    (r += 2);
                } else n[r].call(e[n[r + 1]]);
              t[7] = null;
            }
          })(e, t),
          1 === t[1].type && wt(t[11]) && t[11].destroy();
        const n = t[17];
        if (null !== n && ot(t[3])) {
          n !== t[3] && zi(n, t);
          const r = t[19];
          null !== r && r.detachView(e);
        }
      }
    }
    function Gi(e, t, n) {
      let r = t.parent;
      for (; null != r && (3 === r.type || 4 === r.type); ) r = (t = r).parent;
      if (null === r) return n[0];
      if (t && 4 === t.type && 4 & t.flags) return St(t, n).parentNode;
      if (2 & r.flags) {
        const t = e.data,
          n = t[t[r.index].directiveStart].encapsulation;
        if (n !== Ne.ShadowDom && n !== Ne.Native) return null;
      }
      return St(r, n);
    }
    function Zi(e, t, n, r) {
      wt(e) ? e.insertBefore(t, n, r) : t.insertBefore(n, r, !0);
    }
    function Ki(e, t, n) {
      wt(e) ? e.appendChild(t, n) : t.appendChild(n);
    }
    function Yi(e, t, n, r) {
      null !== r ? Zi(e, t, n, r) : Ki(e, t, n);
    }
    function Ji(e, t) {
      return wt(e) ? e.parentNode(t) : t.parentNode;
    }
    function Xi(e, t) {
      return 3 === e.type || 4 === e.type ? St(e, t) : null;
    }
    function es(e, t, n, r) {
      const o = Gi(e, r, t);
      if (null != o) {
        const e = t[11],
          i = Xi(r.parent || t[6], t);
        if (Array.isArray(n))
          for (let t = 0; t < n.length; t++) Yi(e, o, n[t], i);
        else Yi(e, o, n, i);
      }
    }
    function ts(e, t) {
      if (null !== t) {
        const n = t.type;
        if (2 === n) return St(t, e);
        if (0 === n) return ns(-1, e[t.index]);
        if (3 === n || 4 === n) {
          const n = t.child;
          if (null !== n) return ts(e, n);
          {
            const n = e[t.index];
            return ot(n) ? ns(-1, n) : Dt(n);
          }
        }
        {
          const n = e[16],
            r = n[6],
            o = No(n),
            i = r.projection[t.projection];
          return null != i ? ts(o, i) : ts(e, t.next);
        }
      }
      return null;
    }
    function ns(e, t) {
      const n = nt + e + 1;
      if (n < t.length) {
        const e = t[n],
          r = e[1].firstChild;
        if (null !== r) return ts(e, r);
      }
      return t[7];
    }
    function rs(e, t, n) {
      const r = Ji(e, t);
      r &&
        (function (e, t, n, r) {
          wt(e) ? e.removeChild(t, n, r) : t.removeChild(n);
        })(e, r, t, n);
    }
    function os(e, t, n, r, o, i, s) {
      for (; null != n; ) {
        const u = r[n.index],
          a = n.type;
        s && 0 === t && (u && bo(Dt(u), r), (n.flags |= 4)),
          64 != (64 & n.flags) &&
            (3 === a || 4 === a
              ? (os(e, t, n.child, r, o, i, !1), Hi(t, e, o, u, i))
              : 1 === a
              ? us(e, t, r, n, o, i)
              : Hi(t, e, o, u, i)),
          (n = s ? n.projectionNext : n.next);
      }
    }
    function is(e, t, n, r, o, i) {
      os(n, r, e.firstChild, t, o, i, !1);
    }
    function ss(e, t, n) {
      us(t[11], 0, t, n, Gi(e, n, t), Xi(n.parent || t[6], t));
    }
    function us(e, t, n, r, o, i) {
      const s = n[16],
        u = s[6].projection[r.projection];
      if (Array.isArray(u))
        for (let a = 0; a < u.length; a++) Hi(t, e, o, u[a], i);
      else os(e, t, u, s[3], o, i, !0);
    }
    function as(e, t, n) {
      wt(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
    }
    function cs(e, t, n) {
      wt(e)
        ? "" === n
          ? e.removeAttribute(t, "class")
          : e.setAttribute(t, "class", n)
        : (t.className = n);
    }
    class ls {
      constructor(e, t) {
        (this._lView = e),
          (this._cdRefInjectingView = t),
          (this._appRef = null),
          (this._viewContainerRef = null);
      }
      get rootNodes() {
        const e = this._lView,
          t = e[1];
        return fs(t, e, t.firstChild, []);
      }
      get context() {
        return this._lView[8];
      }
      get destroyed() {
        return 256 == (256 & this._lView[2]);
      }
      destroy() {
        if (this._appRef) this._appRef.detachView(this);
        else if (this._viewContainerRef) {
          const e = this._viewContainerRef.indexOf(this);
          e > -1 && this._viewContainerRef.detach(e),
            (this._viewContainerRef = null);
        }
        Wi(this._lView[1], this._lView);
      }
      onDestroy(e) {
        li(this._lView[1], this._lView, null, e);
      }
      markForCheck() {
        ki(this._cdRefInjectingView || this._lView);
      }
      detach() {
        this._lView[2] &= -129;
      }
      reattach() {
        this._lView[2] |= 128;
      }
      detectChanges() {
        Ri(this._lView[1], this._lView, this.context);
      }
      checkNoChanges() {
        !(function (e, t, n) {
          Gt(!0);
          try {
            Ri(e, t, n);
          } finally {
            Gt(!1);
          }
        })(this._lView[1], this._lView, this.context);
      }
      attachToViewContainerRef(e) {
        if (this._appRef)
          throw new Error(
            "This view is already attached directly to the ApplicationRef!"
          );
        this._viewContainerRef = e;
      }
      detachFromAppRef() {
        var e;
        (this._appRef = null),
          is(this._lView[1], (e = this._lView), e[11], 2, null, null);
      }
      attachToAppRef(e) {
        if (this._viewContainerRef)
          throw new Error("This view is already attached to a ViewContainer!");
        this._appRef = e;
      }
    }
    class ds extends ls {
      constructor(e) {
        super(e), (this._view = e);
      }
      detectChanges() {
        Fi(this._view);
      }
      checkNoChanges() {
        !(function (e) {
          Gt(!0);
          try {
            Fi(e);
          } finally {
            Gt(!1);
          }
        })(this._view);
      }
      get context() {
        return null;
      }
    }
    function fs(e, t, n, r, o = !1) {
      for (; null !== n; ) {
        const i = t[n.index];
        if ((null !== i && r.push(Dt(i)), ot(i)))
          for (let e = nt; e < i.length; e++) {
            const t = i[e],
              n = t[1].firstChild;
            null !== n && fs(t[1], t, n, r);
          }
        const s = n.type;
        if (3 === s || 4 === s) fs(e, t, n.child, r);
        else if (1 === s) {
          const e = t[16],
            o = e[6].projection[n.projection];
          if (Array.isArray(o)) r.push(...o);
          else {
            const t = No(e);
            fs(t[1], t, o, r, !0);
          }
        }
        n = o ? n.projectionNext : n.next;
      }
      return r;
    }
    let hs, ps, gs;
    function ms(e, t, n) {
      return hs || (hs = class extends e {}), new hs(St(t, n));
    }
    function ys(e, t, n, r) {
      return (
        ps ||
          (ps = class extends e {
            constructor(e, t, n) {
              super(),
                (this._declarationView = e),
                (this._declarationTContainer = t),
                (this.elementRef = n);
            }
            createEmbeddedView(e) {
              const t = this._declarationTContainer.tViews,
                n = Jo(
                  this._declarationView,
                  t,
                  e,
                  16,
                  null,
                  t.declTNode,
                  null,
                  null,
                  null,
                  null
                );
              n[17] = this._declarationView[this._declarationTContainer.index];
              const r = this._declarationView[19];
              return (
                null !== r && (n[19] = r.createEmbeddedView(t)),
                ei(t, n, e),
                new ls(n)
              );
            }
          }),
        0 === n.type ? new ps(r, n, ms(t, n, r)) : null
      );
    }
    function bs(e, t, n, r) {
      let o;
      gs ||
        (gs = class extends e {
          constructor(e, t, n) {
            super(),
              (this._lContainer = e),
              (this._hostTNode = t),
              (this._hostView = n);
          }
          get element() {
            return ms(t, this._hostTNode, this._hostView);
          }
          get injector() {
            return new ir(this._hostTNode, this._hostView);
          }
          get parentInjector() {
            const e = Zn(this._hostTNode, this._hostView);
            if (Rn(e)) {
              const t = Pn(e, this._hostView),
                n = Fn(e);
              return new ir(t[1].data[n + 8], t);
            }
            return new ir(null, this._hostView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(e) {
            return (
              (null !== this._lContainer[8] && this._lContainer[8][e]) || null
            );
          }
          get length() {
            return this._lContainer.length - nt;
          }
          createEmbeddedView(e, t, n) {
            const r = e.createEmbeddedView(t || {});
            return this.insert(r, n), r;
          }
          createComponent(e, t, n, r, o) {
            const i = n || this.parentInjector;
            if (!o && null == e.ngModule && i) {
              const e = i.get(Ce, null);
              e && (o = e);
            }
            const s = e.create(i, r, void 0, o);
            return this.insert(s.hostView, t), s;
          }
          insert(e, t) {
            const n = e._lView,
              r = n[1];
            if (e.destroyed)
              throw new Error(
                "Cannot insert a destroyed View in a ViewContainer!"
              );
            if ((this.allocateContainerIfNeeded(), ot(n[3]))) {
              const t = this.indexOf(e);
              if (-1 !== t) this.detach(t);
              else {
                const t = n[3],
                  r = new gs(t, t[6], t[3]);
                r.detach(r.indexOf(e));
              }
            }
            const o = this._adjustIndex(t),
              i = this._lContainer;
            !(function (e, t, n, r) {
              const o = nt + r,
                i = n.length;
              r > 0 && (n[o - 1][4] = t),
                r < i - nt
                  ? ((t[4] = n[o]), xe(n, nt + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const s = t[17];
              null !== s &&
                n !== s &&
                (function (e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(s, t);
              const u = t[19];
              null !== u && u.insertView(e), (t[2] |= 128);
            })(r, n, i, o);
            const s = ns(o, i),
              u = n[11],
              a = Ji(u, i[7]);
            return (
              null !== a &&
                (function (e, t, n, r, o, i) {
                  (r[0] = o), (r[6] = t), is(e, r, n, 1, o, i);
                })(r, i[6], u, n, a, s),
              e.attachToViewContainerRef(this),
              xe(i[8], o, e),
              e
            );
          }
          move(e, t) {
            if (e.destroyed)
              throw new Error(
                "Cannot move a destroyed View in a ViewContainer!"
              );
            return this.insert(e, t);
          }
          indexOf(e) {
            const t = this._lContainer[8];
            return null !== t ? t.indexOf(e) : -1;
          }
          remove(e) {
            this.allocateContainerIfNeeded();
            const t = this._adjustIndex(e, -1),
              n = qi(this._lContainer, t);
            n && (Ie(this._lContainer[8], t), Wi(n[1], n));
          }
          detach(e) {
            this.allocateContainerIfNeeded();
            const t = this._adjustIndex(e, -1),
              n = qi(this._lContainer, t);
            return n && null != Ie(this._lContainer[8], t) ? new ls(n) : null;
          }
          _adjustIndex(e, t = 0) {
            return null == e ? this.length + t : e;
          }
          allocateContainerIfNeeded() {
            null === this._lContainer[8] && (this._lContainer[8] = []);
          }
        });
      const i = r[n.index];
      if (ot(i)) o = i;
      else {
        let e;
        if (3 === n.type) e = Dt(i);
        else if (((e = r[11].createComment("")), ct(r))) {
          const t = r[11],
            o = St(n, r);
          Zi(
            t,
            Ji(t, o),
            e,
            (function (e, t) {
              return wt(e) ? e.nextSibling(t) : t.nextSibling;
            })(t, o)
          );
        } else es(r[1], r, e, n);
        (r[n.index] = o = Oi(i, r, e, n)), ji(r, o);
      }
      return new gs(o, n, r);
    }
    function vs(e = !1) {
      return (function (e, t, n) {
        if (!n && st(e)) {
          const n = It(e.index, t);
          return new ls(n, n);
        }
        return 2 === e.type || 0 === e.type || 3 === e.type || 4 === e.type
          ? new ls(t[16], t)
          : null;
      })($t(), Ut(), e);
    }
    let _s = (() => {
      class e {}
      return (e.__NG_ELEMENT_ID__ = () => Cs()), e;
    })();
    const ws = vs,
      Cs = ws,
      Ds = Function;
    function Es(e) {
      return "function" == typeof e;
    }
    const Ss = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,
      Os = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,
      xs = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,
      Is = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;
    class As {
      constructor(e) {
        this._reflect = e || G.Reflect;
      }
      isReflectionEnabled() {
        return !0;
      }
      factory(e) {
        return (...t) => new e(...t);
      }
      _zipTypesAndAnnotations(e, t) {
        let n;
        n = Ae(void 0 === e ? t.length : e.length);
        for (let r = 0; r < n.length; r++)
          (n[r] = void 0 === e ? [] : e[r] && e[r] != Object ? [e[r]] : []),
            t && null != t[r] && (n[r] = n[r].concat(t[r]));
        return n;
      }
      _ownParameters(e, t) {
        if (
          ((n = e.toString()),
          Ss.test(n) || Is.test(n) || (Os.test(n) && !xs.test(n)))
        )
          return null;
        var n;
        if (e.parameters && e.parameters !== t.parameters) return e.parameters;
        const r = e.ctorParameters;
        if (r && r !== t.ctorParameters) {
          const e = "function" == typeof r ? r() : r,
            t = e.map((e) => e && e.type),
            n = e.map((e) => e && js(e.decorators));
          return this._zipTypesAndAnnotations(t, n);
        }
        const o = e.hasOwnProperty(l) && e[l],
          i =
            this._reflect &&
            this._reflect.getOwnMetadata &&
            this._reflect.getOwnMetadata("design:paramtypes", e);
        return i || o ? this._zipTypesAndAnnotations(i, o) : Ae(e.length);
      }
      parameters(e) {
        if (!Es(e)) return [];
        const t = ks(e);
        let n = this._ownParameters(e, t);
        return n || t === Object || (n = this.parameters(t)), n || [];
      }
      _ownAnnotations(e, t) {
        if (e.annotations && e.annotations !== t.annotations) {
          let t = e.annotations;
          return (
            "function" == typeof t && t.annotations && (t = t.annotations), t
          );
        }
        return e.decorators && e.decorators !== t.decorators
          ? js(e.decorators)
          : e.hasOwnProperty(c)
          ? e[c]
          : null;
      }
      annotations(e) {
        if (!Es(e)) return [];
        const t = ks(e),
          n = this._ownAnnotations(e, t) || [];
        return (t !== Object ? this.annotations(t) : []).concat(n);
      }
      _ownPropMetadata(e, t) {
        if (e.propMetadata && e.propMetadata !== t.propMetadata) {
          let t = e.propMetadata;
          return (
            "function" == typeof t && t.propMetadata && (t = t.propMetadata), t
          );
        }
        if (e.propDecorators && e.propDecorators !== t.propDecorators) {
          const t = e.propDecorators,
            n = {};
          return (
            Object.keys(t).forEach((e) => {
              n[e] = js(t[e]);
            }),
            n
          );
        }
        return e.hasOwnProperty(d) ? e[d] : null;
      }
      propMetadata(e) {
        if (!Es(e)) return {};
        const t = ks(e),
          n = {};
        if (t !== Object) {
          const e = this.propMetadata(t);
          Object.keys(e).forEach((t) => {
            n[t] = e[t];
          });
        }
        const r = this._ownPropMetadata(e, t);
        return (
          r &&
            Object.keys(r).forEach((e) => {
              const t = [];
              n.hasOwnProperty(e) && t.push(...n[e]),
                t.push(...r[e]),
                (n[e] = t);
            }),
          n
        );
      }
      ownPropMetadata(e) {
        return (Es(e) && this._ownPropMetadata(e, ks(e))) || {};
      }
      hasLifecycleHook(e, t) {
        return e instanceof Ds && t in e.prototype;
      }
      guards(e) {
        return {};
      }
      getter(e) {
        return new Function("o", "return o." + e + ";");
      }
      setter(e) {
        return new Function("o", "v", "return o." + e + " = v;");
      }
      method(e) {
        return new Function(
          "o",
          "args",
          `if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`
        );
      }
      importUri(e) {
        return "object" == typeof e && e.filePath ? e.filePath : "./" + L(e);
      }
      resourceUri(e) {
        return "./" + L(e);
      }
      resolveIdentifier(e, t, n, r) {
        return r;
      }
      resolveEnum(e, t) {
        return e[t];
      }
    }
    function js(e) {
      return e
        ? e.map((e) => new (0, e.type.annotationCls)(...(e.args ? e.args : [])))
        : [];
    }
    function ks(e) {
      const t = e.prototype ? Object.getPrototypeOf(e.prototype) : null;
      return (t ? t.constructor : null) || Object;
    }
    let Ts = null;
    function Rs() {
      return (Ts = Ts || new As());
    }
    function Fs(e) {
      return Ps(Rs().parameters(e));
    }
    function Ps(e) {
      const t = K();
      return e.map((e) =>
        (function (e, t) {
          const n = {
            token: null,
            host: !1,
            optional: !1,
            resolved: e.R3ResolvedDependencyType.Token,
            self: !1,
            skipSelf: !1,
          };
          function r(t) {
            (n.resolved = e.R3ResolvedDependencyType.Token), (n.token = t);
          }
          if (Array.isArray(t) && t.length > 0)
            for (let o = 0; o < t.length; o++) {
              const i = t[o];
              if (void 0 === i) continue;
              const s = Object.getPrototypeOf(i);
              if (i instanceof b || "Optional" === s.ngMetadataName)
                n.optional = !0;
              else if (i instanceof _ || "SkipSelf" === s.ngMetadataName)
                n.skipSelf = !0;
              else if (i instanceof v || "Self" === s.ngMetadataName)
                n.self = !0;
              else if (i instanceof w || "Host" === s.ngMetadataName)
                n.host = !0;
              else if (i instanceof y) n.token = i.token;
              else if (i instanceof D) {
                if (void 0 === i.attributeName)
                  throw new Error("Attribute name must be defined.");
                (n.token = i.attributeName),
                  (n.resolved = e.R3ResolvedDependencyType.Attribute);
              } else
                i === _s
                  ? ((n.token = i),
                    (n.resolved = e.R3ResolvedDependencyType.ChangeDetectorRef))
                  : r(i);
            }
          else
            void 0 === t || (Array.isArray(t) && 0 === t.length)
              ? ((n.token = void 0), (n.resolved = Z.Invalid))
              : r(t);
          return n;
        })(t, e)
      );
    }
    const Ns = S({ provide: String, useValue: S });
    function Ms(e) {
      return void 0 !== e.useClass;
    }
    function Ls(e) {
      return void 0 !== e.useFactory;
    }
    function Vs(e, t) {
      const n = t || { providedIn: null },
        r = {
          name: e.name,
          type: e,
          typeArgumentCount: 0,
          providedIn: n.providedIn,
          userDeps: void 0,
        };
      return (
        (Ms(n) || Ls(n)) && void 0 !== n.deps && (r.userDeps = Ps(n.deps)),
        Ms(n)
          ? (r.useClass = H(n.useClass))
          : (function (e) {
              return Ns in e;
            })(n)
          ? (r.useValue = H(n.useValue))
          : Ls(n)
          ? (r.useFactory = n.useFactory)
          : (function (e) {
              return void 0 !== e.useExisting;
            })(n) && (r.useExisting = H(n.useExisting)),
        r
      );
    }
    const Us = f("Injectable", void 0, void 0, void 0, (e, t) => Hs(e, t)),
      Bs = function (e, t) {
        let n = null,
          r = null;
        e.hasOwnProperty(R) ||
          (Object.defineProperty(e, R, {
            get: () => (
              null === n &&
                (n = K().compileInjectable(
                  we,
                  `ng:///${e.name}/\u0275prov.js`,
                  Vs(e, t)
                )),
              n
            ),
          }),
          e.hasOwnProperty(P) || (e[P] = () => e[R])),
          e.hasOwnProperty(ne) ||
            Object.defineProperty(e, ne, {
              get: () => {
                if (null === r) {
                  const n = Vs(e, t),
                    o = K();
                  r = o.compileFactory(we, `ng:///${e.name}/\u0275fac.js`, {
                    name: n.name,
                    type: n.type,
                    typeArgumentCount: n.typeArgumentCount,
                    deps: Fs(e),
                    injectFn: "inject",
                    target: o.R3FactoryTarget.Injectable,
                  });
                }
                return r;
              },
              configurable: !0,
            });
      },
      Hs = Bs,
      $s = new oe("Set Injector scope."),
      zs = {},
      qs = {},
      Ws = [];
    let Qs = void 0;
    function Gs() {
      return void 0 === Qs && (Qs = new _e()), Qs;
    }
    function Zs(e, t = null, n = null, r) {
      const o = Ks(e, t, n, r);
      return o._resolveInjectorDefTypes(), o;
    }
    function Ks(e, t = null, n = null, r) {
      return new Ys(e, n, t || Gs(), r);
    }
    class Ys {
      constructor(e, t, n, r = null) {
        (this.parent = n),
          (this.records = new Map()),
          (this.injectorDefTypes = new Set()),
          (this.onDestroy = new Set()),
          (this._destroyed = !1);
        const o = [];
        t && Oe(t, (n) => this.processProvider(n, e, t)),
          Oe([e], (e) => this.processInjectorType(e, [], o)),
          this.records.set(ie, eu(void 0, this));
        const i = this.records.get($s);
        (this.scope = null != i ? i.value : null),
          (this.source = r || ("object" == typeof e ? null : L(e)));
      }
      get destroyed() {
        return this._destroyed;
      }
      destroy() {
        this.assertNotDestroyed(), (this._destroyed = !0);
        try {
          this.onDestroy.forEach((e) => e.ngOnDestroy());
        } finally {
          this.records.clear(),
            this.onDestroy.clear(),
            this.injectorDefTypes.clear();
        }
      }
      get(e, t = se, n = E.Default) {
        this.assertNotDestroyed();
        const r = fe(this);
        try {
          if (!(n & E.SkipSelf)) {
            let t = this.records.get(e);
            if (void 0 === t) {
              const n =
                ("function" == typeof (o = e) ||
                  ("object" == typeof o && o instanceof oe)) &&
                j(e);
              (t = n && this.injectableDefInScope(n) ? eu(Js(e), zs) : null),
                this.records.set(e, t);
            }
            if (null != t) return this.hydrate(e, t);
          }
          return (n & E.Self ? Gs() : this.parent).get(
            e,
            (t = n & E.Optional && t === se ? null : t)
          );
        } catch (i) {
          if ("NullInjectorError" === i.name) {
            if (
              ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(L(e)), r)
            )
              throw i;
            return (function (e, t, n, r) {
              const o = e.ngTempTokenPath;
              throw (
                (t[ae] && o.unshift(t[ae]),
                (e.message = (function (e, t, n, r = null) {
                  e =
                    e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                      ? e.substr(2)
                      : e;
                  let o = L(t);
                  if (Array.isArray(t)) o = t.map(L).join(" -> ");
                  else if ("object" == typeof t) {
                    let e = [];
                    for (let n in t)
                      if (t.hasOwnProperty(n)) {
                        let r = t[n];
                        e.push(
                          n +
                            ":" +
                            ("string" == typeof r ? JSON.stringify(r) : L(r))
                        );
                      }
                    o = `{${e.join(", ")}}`;
                  }
                  return `${n}${r ? "(" + r + ")" : ""}[${o}]: ${e.replace(
                    ue,
                    "\n  "
                  )}`;
                })("\n" + e.message, o, n, r)),
                (e.ngTokenPath = o),
                (e.ngTempTokenPath = null),
                e)
              );
            })(i, e, "R3InjectorError", this.source);
          }
          throw i;
        } finally {
          fe(r);
        }
        var o;
      }
      _resolveInjectorDefTypes() {
        this.injectorDefTypes.forEach((e) => this.get(e));
      }
      toString() {
        const e = [];
        return (
          this.records.forEach((t, n) => e.push(L(n))),
          `R3Injector[${e.join(", ")}]`
        );
      }
      assertNotDestroyed() {
        if (this._destroyed)
          throw new Error("Injector has already been destroyed.");
      }
      processInjectorType(e, t, n) {
        if (!(e = H(e))) return !1;
        let r = T(e);
        const o = (null == r && e.ngModule) || void 0,
          i = void 0 === o ? e : o,
          s = -1 !== n.indexOf(i);
        if ((void 0 !== o && (r = T(o)), null == r)) return !1;
        if (null != r.imports && !s) {
          let e;
          n.push(i);
          try {
            Oe(r.imports, (r) => {
              this.processInjectorType(r, t, n) &&
                (void 0 === e && (e = []), e.push(r));
            });
          } finally {
          }
          if (void 0 !== e)
            for (let t = 0; t < e.length; t++) {
              const { ngModule: n, providers: r } = e[t];
              Oe(r, (e) => this.processProvider(e, n, r || Ws));
            }
        }
        this.injectorDefTypes.add(i), this.records.set(i, eu(r.factory, zs));
        const u = r.providers;
        if (null != u && !s) {
          const t = e;
          Oe(u, (e) => this.processProvider(e, t, u));
        }
        return void 0 !== o && void 0 !== e.providers;
      }
      processProvider(e, t, n) {
        let r = nu((e = H(e))) ? e : H(e && e.provide);
        const o = (function (e, t, n) {
          return tu(e) ? eu(void 0, e.useValue) : eu(Xs(e), zs);
        })(e);
        if (nu(e) || !0 !== e.multi) this.records.get(r);
        else {
          let t = this.records.get(r);
          t ||
            ((t = eu(void 0, zs, !0)),
            (t.factory = () => ve(t.multi)),
            this.records.set(r, t)),
            (r = e),
            t.multi.push(e);
        }
        this.records.set(r, o);
      }
      hydrate(e, t) {
        var n;
        return (
          t.value === zs && ((t.value = qs), (t.value = t.factory())),
          "object" == typeof t.value &&
            t.value &&
            null !== (n = t.value) &&
            "object" == typeof n &&
            "function" == typeof n.ngOnDestroy &&
            this.onDestroy.add(t.value),
          t.value
        );
      }
      injectableDefInScope(e) {
        return (
          !!e.providedIn &&
          ("string" == typeof e.providedIn
            ? "any" === e.providedIn || e.providedIn === this.scope
            : this.injectorDefTypes.has(e.providedIn))
        );
      }
    }
    function Js(e) {
      const t = j(e),
        n = null !== t ? t.factory : Xe(e);
      if (null !== n) return n;
      const r = T(e);
      if (null !== r) return r.factory;
      if (e instanceof oe)
        throw new Error(`Token ${L(e)} is missing a \u0275prov definition.`);
      if (e instanceof Function)
        return (function (e) {
          const t = e.length;
          if (t > 0) {
            const n = Ae(t, "?");
            throw new Error(
              `Can't resolve all parameters for ${L(e)}: (${n.join(", ")}).`
            );
          }
          const n = (function (e) {
            const t = e && (e[R] || e[N] || (e[P] && e[P]()));
            if (t) {
              const n = (function (e) {
                if (e.hasOwnProperty("name")) return e.name;
                const t = ("" + e).match(/^function\s*([^\s(]+)/);
                return null === t ? "" : t[1];
              })(e);
              return (
                console.warn(
                  `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                ),
                t
              );
            }
            return null;
          })(e);
          return null !== n ? () => n.factory(e) : () => new e();
        })(e);
      throw new Error("unreachable");
    }
    function Xs(e, t, n) {
      let r = void 0;
      if (nu(e)) {
        const t = H(e);
        return Xe(t) || Js(t);
      }
      if (tu(e)) r = () => H(e.useValue);
      else if ((o = e) && o.useFactory)
        r = () => e.useFactory(...ve(e.deps || []));
      else if (
        (function (e) {
          return !(!e || !e.useExisting);
        })(e)
      )
        r = () => ge(H(e.useExisting));
      else {
        const t = H(e && (e.useClass || e.provide));
        if (
          !(function (e) {
            return !!e.deps;
          })(e)
        )
          return Xe(t) || Js(t);
        r = () => new t(...ve(e.deps));
      }
      var o;
      return r;
    }
    function eu(e, t, n = !1) {
      return { factory: e, value: t, multi: n ? [] : void 0 };
    }
    function tu(e) {
      return null !== e && "object" == typeof e && ce in e;
    }
    function nu(e) {
      return "function" == typeof e;
    }
    function ru(e, t, n) {
      return Zs({ name: n }, t, e, n);
    }
    const ou = ru;
    let iu = (() => {
      class e {
        static create(e, t) {
          return Array.isArray(e)
            ? ou(e, t, "")
            : ou(e.providers, e.parent, e.name || "");
        }
      }
      return (
        (e.THROW_IF_NOT_FOUND = se),
        (e.NULL = new _e()),
        (e.ɵprov = x({ token: e, providedIn: "any", factory: () => ge(ie) })),
        (e.__NG_ELEMENT_ID__ = -1),
        e
      );
    })();
    function su(e) {
      return e.length > 1
        ? " (" +
            (function (e) {
              const t = [];
              for (let n = 0; n < e.length; ++n) {
                if (t.indexOf(e[n]) > -1) return t.push(e[n]), t;
                t.push(e[n]);
              }
              return t;
            })(e.slice().reverse())
              .map((e) => L(e.token))
              .join(" -> ") +
            ")"
        : "";
    }
    function uu(e, t, n, r) {
      const o = [t],
        i = n(o),
        s = r
          ? (function (e, t) {
              const n = `${e} caused by: ${t instanceof Error ? t.message : t}`,
                r = Error(n);
              return (r.ngOriginalError = t), r;
            })(i, r)
          : Error(i);
      return (
        (s.addKey = au),
        (s.keys = o),
        (s.injectors = [e]),
        (s.constructResolvingMessage = n),
        (s.ngOriginalError = r),
        s
      );
    }
    function au(e, t) {
      this.injectors.push(e),
        this.keys.push(t),
        (this.message = this.constructResolvingMessage(this.keys));
    }
    function cu(e, t) {
      const n = [];
      for (let r = 0, o = t.length; r < o; r++) {
        const e = t[r];
        n.push(e && 0 != e.length ? e.map(L).join(" ") : "?");
      }
      return Error(
        "Cannot resolve all parameters for '" +
          L(e) +
          "'(" +
          n.join(", ") +
          "). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '" +
          L(e) +
          "' is decorated with Injectable."
      );
    }
    class lu {
      constructor(e, t) {
        if (((this.token = e), (this.id = t), !e))
          throw new Error("Token must be defined!");
        this.displayName = L(this.token);
      }
      static get(e) {
        return fu.get(H(e));
      }
      static get numberOfKeys() {
        return fu.numberOfKeys;
      }
    }
    class du {
      constructor() {
        this._allKeys = new Map();
      }
      get(e) {
        if (e instanceof lu) return e;
        if (this._allKeys.has(e)) return this._allKeys.get(e);
        const t = new lu(e, lu.numberOfKeys);
        return this._allKeys.set(e, t), t;
      }
      get numberOfKeys() {
        return this._allKeys.size;
      }
    }
    const fu = new du();
    class hu {
      constructor(e) {
        this.reflectionCapabilities = e;
      }
      updateCapabilities(e) {
        this.reflectionCapabilities = e;
      }
      factory(e) {
        return this.reflectionCapabilities.factory(e);
      }
      parameters(e) {
        return this.reflectionCapabilities.parameters(e);
      }
      annotations(e) {
        return this.reflectionCapabilities.annotations(e);
      }
      propMetadata(e) {
        return this.reflectionCapabilities.propMetadata(e);
      }
      hasLifecycleHook(e, t) {
        return this.reflectionCapabilities.hasLifecycleHook(e, t);
      }
      getter(e) {
        return this.reflectionCapabilities.getter(e);
      }
      setter(e) {
        return this.reflectionCapabilities.setter(e);
      }
      method(e) {
        return this.reflectionCapabilities.method(e);
      }
      importUri(e) {
        return this.reflectionCapabilities.importUri(e);
      }
      resourceUri(e) {
        return this.reflectionCapabilities.resourceUri(e);
      }
      resolveIdentifier(e, t, n, r) {
        return this.reflectionCapabilities.resolveIdentifier(e, t, n, r);
      }
      resolveEnum(e, t) {
        return this.reflectionCapabilities.resolveEnum(e, t);
      }
    }
    const pu = new hu(new As());
    class gu {
      constructor(e, t, n) {
        (this.key = e), (this.optional = t), (this.visibility = n);
      }
      static fromKey(e) {
        return new gu(e, !1, null);
      }
    }
    const mu = [];
    class yu {
      constructor(e, t, n) {
        (this.key = e),
          (this.resolvedFactories = t),
          (this.multiProvider = n),
          (this.resolvedFactory = this.resolvedFactories[0]);
      }
    }
    class bu {
      constructor(e, t) {
        (this.factory = e), (this.dependencies = t);
      }
    }
    function vu(e) {
      let t, n;
      if (e.useClass) {
        const r = H(e.useClass);
        (t = pu.factory(r)), (n = Du(r));
      } else
        e.useExisting
          ? ((t = (e) => e), (n = [gu.fromKey(lu.get(e.useExisting))]))
          : e.useFactory
          ? ((t = e.useFactory),
            (n = (function (e, t) {
              if (t) {
                const n = t.map((e) => [e]);
                return t.map((t) => Eu(e, t, n));
              }
              return Du(e);
            })(e.useFactory, e.deps)))
          : ((t = () => e.useValue), (n = mu));
      return new bu(t, n);
    }
    function _u(e) {
      return new yu(lu.get(e.provide), [vu(e)], e.multi || !1);
    }
    function wu(e) {
      const t = (function (e, t) {
        for (let n = 0; n < e.length; n++) {
          const r = e[n],
            o = t.get(r.key.id);
          if (o) {
            if (r.multiProvider !== o.multiProvider)
              throw Error(
                `Cannot mix multi providers and regular providers, got: ${o} ${r}`
              );
            if (r.multiProvider)
              for (let e = 0; e < r.resolvedFactories.length; e++)
                o.resolvedFactories.push(r.resolvedFactories[e]);
            else t.set(r.key.id, r);
          } else {
            let e;
            (e = r.multiProvider
              ? new yu(r.key, r.resolvedFactories.slice(), r.multiProvider)
              : r),
              t.set(r.key.id, e);
          }
        }
        return t;
      })(Cu(e, []).map(_u), new Map());
      return Array.from(t.values());
    }
    function Cu(e, t) {
      return (
        e.forEach((e) => {
          if (e instanceof Ds) t.push({ provide: e, useClass: e });
          else if (e && "object" == typeof e && void 0 !== e.provide) t.push(e);
          else {
            if (!Array.isArray(e))
              throw Error(
                "Invalid provider - only instances of Provider and Type are allowed, got: " +
                  e
              );
            Cu(e, t);
          }
        }),
        t
      );
    }
    function Du(e) {
      const t = pu.parameters(e);
      if (!t) return [];
      if (t.some((e) => null == e)) throw cu(e, t);
      return t.map((n) => Eu(e, n, t));
    }
    function Eu(e, t, n) {
      let r = null,
        o = !1;
      if (!Array.isArray(t)) return Su(t instanceof y ? t.token : t, o, null);
      let i = null;
      for (let s = 0; s < t.length; ++s) {
        const e = t[s];
        e instanceof Ds
          ? (r = e)
          : e instanceof y
          ? (r = e.token)
          : e instanceof b
          ? (o = !0)
          : e instanceof v || e instanceof _
          ? (i = e)
          : e instanceof oe && (r = e);
      }
      if (((r = H(r)), null != r)) return Su(r, o, i);
      throw cu(e, n);
    }
    function Su(e, t, n) {
      return new gu(lu.get(e), t, n);
    }
    const Ou = {};
    class xu {
      static resolve(e) {
        return wu(e);
      }
      static resolveAndCreate(e, t) {
        const n = xu.resolve(e);
        return xu.fromResolvedProviders(n, t);
      }
      static fromResolvedProviders(e, t) {
        return new Iu(e, t);
      }
    }
    let Iu = (() => {
      class e {
        constructor(e, t) {
          (this._constructionCounter = 0),
            (this._providers = e),
            (this.parent = t || null);
          const n = e.length;
          (this.keyIds = []), (this.objs = []);
          for (let r = 0; r < n; r++)
            (this.keyIds[r] = e[r].key.id), (this.objs[r] = Ou);
        }
        get(e, t = se) {
          return this._getByKey(lu.get(e), null, t);
        }
        resolveAndCreateChild(e) {
          const t = xu.resolve(e);
          return this.createChildFromResolved(t);
        }
        createChildFromResolved(t) {
          const n = new e(t);
          return (n.parent = this), n;
        }
        resolveAndInstantiate(e) {
          return this.instantiateResolved(xu.resolve([e])[0]);
        }
        instantiateResolved(e) {
          return this._instantiateProvider(e);
        }
        getProviderAtIndex(e) {
          if (e < 0 || e >= this._providers.length)
            throw (function (e) {
              return Error(`Index ${e} is out-of-bounds.`);
            })(e);
          return this._providers[e];
        }
        _new(e) {
          if (this._constructionCounter++ > this._getMaxNumberOfObjects())
            throw uu(this, e.key, function (e) {
              return "Cannot instantiate cyclic dependency!" + su(e);
            });
          return this._instantiateProvider(e);
        }
        _getMaxNumberOfObjects() {
          return this.objs.length;
        }
        _instantiateProvider(e) {
          if (e.multiProvider) {
            const t = [];
            for (let n = 0; n < e.resolvedFactories.length; ++n)
              t[n] = this._instantiate(e, e.resolvedFactories[n]);
            return t;
          }
          return this._instantiate(e, e.resolvedFactories[0]);
        }
        _instantiate(e, t) {
          const n = t.factory;
          let r, o;
          try {
            r = t.dependencies.map((e) => this._getByReflectiveDependency(e));
          } catch (s) {
            throw (s.addKey && s.addKey(this, e.key), s);
          }
          try {
            o = n(...r);
          } catch (s) {
            throw uu(
              this,
              e.key,
              function (e) {
                const t = L(e[0].token);
                return `${i.message}: Error during instantiation of ${t}!${su(
                  e
                )}.`;
              },
              (i = s)
            );
          }
          var i;
          return o;
        }
        _getByReflectiveDependency(e) {
          return this._getByKey(e.key, e.visibility, e.optional ? null : se);
        }
        _getByKey(t, n, r) {
          return t === e.INJECTOR_KEY
            ? this
            : n instanceof v
            ? this._getByKeySelf(t, r)
            : this._getByKeyDefault(t, r, n);
        }
        _getObjByKeyId(e) {
          for (let t = 0; t < this.keyIds.length; t++)
            if (this.keyIds[t] === e)
              return (
                this.objs[t] === Ou &&
                  (this.objs[t] = this._new(this._providers[t])),
                this.objs[t]
              );
          return Ou;
        }
        _throwOrNull(e, t) {
          if (t !== se) return t;
          throw (function (e, t) {
            return uu(e, t, function (e) {
              return `No provider for ${L(e[0].token)}!${su(e)}`;
            });
          })(this, e);
        }
        _getByKeySelf(e, t) {
          const n = this._getObjByKeyId(e.id);
          return n !== Ou ? n : this._throwOrNull(e, t);
        }
        _getByKeyDefault(t, n, r) {
          let o;
          for (o = r instanceof _ ? this.parent : this; o instanceof e; ) {
            const e = o,
              n = e._getObjByKeyId(t.id);
            if (n !== Ou) return n;
            o = e.parent;
          }
          return null !== o ? o.get(t.token, n) : this._throwOrNull(t, n);
        }
        get displayName() {
          return `ReflectiveInjector(providers: [${(function (e, t) {
            const n = [];
            for (let r = 0; r < e._providers.length; ++r)
              n[r] = ' "' + e.getProviderAtIndex(r).key.displayName + '" ';
            return n;
          })(this).join(", ")}])`;
        }
        toString() {
          return this.displayName;
        }
      }
      return (e.INJECTOR_KEY = lu.get(iu)), e;
    })();
    const Au = new oe("AnalyzeForEntryComponents");
    class ju {}
    const ku = g(
        "ContentChildren",
        (e, t = {}) =>
          Object.assign(
            { selector: e, first: !1, isViewQuery: !1, descendants: !1 },
            t
          ),
        ju
      ),
      Tu = g(
        "ContentChild",
        (e, t = {}) =>
          Object.assign(
            { selector: e, first: !0, isViewQuery: !1, descendants: !0 },
            t
          ),
        ju
      ),
      Ru = g(
        "ViewChildren",
        (e, t = {}) =>
          Object.assign(
            { selector: e, first: !1, isViewQuery: !0, descendants: !0 },
            t
          ),
        ju
      ),
      Fu = g(
        "ViewChild",
        (e, t) =>
          Object.assign(
            { selector: e, first: !0, isViewQuery: !0, descendants: !0 },
            t
          ),
        ju
      );
    function Pu(e) {
      const t = [],
        n = new Map();
      function r(t) {
        let r = n.get(t);
        if (!r) {
          const o = e(t);
          n.set(t, (r = o.then(Uu)));
        }
        return r;
      }
      return (
        Nu.forEach((e, n) => {
          const o = [];
          e.templateUrl &&
            o.push(
              r(e.templateUrl).then((t) => {
                e.template = t;
              })
            );
          const i = e.styleUrls,
            s = e.styles || (e.styles = []),
            u = e.styles.length;
          i &&
            i.forEach((t, n) => {
              s.push(""),
                o.push(
                  r(t).then((r) => {
                    (s[u + n] = r),
                      i.splice(i.indexOf(t), 1),
                      0 == i.length && (e.styleUrls = void 0);
                  })
                );
            });
          const a = Promise.all(o).then(() =>
            (function (e) {
              Mu.delete(e);
            })(n)
          );
          t.push(a);
        }),
        Vu(),
        Promise.all(t).then(() => {})
      );
    }
    let Nu = new Map();
    const Mu = new Set();
    function Lu(e) {
      return !!(
        (e.templateUrl && !e.hasOwnProperty("template")) ||
        (e.styleUrls && e.styleUrls.length)
      );
    }
    function Vu() {
      const e = Nu;
      return (Nu = new Map()), e;
    }
    function Uu(e) {
      return "string" == typeof e ? e : e.text();
    }
    function Bu(e, t, n) {
      let r = n ? e.styles : null,
        o = n ? e.classes : null,
        i = 0;
      if (null !== t)
        for (let s = 0; s < t.length; s++) {
          const e = t[s];
          "number" == typeof e
            ? (i = e)
            : 1 == i
            ? (o = V(o, e))
            : 2 == i && (r = V(r, e + ": " + t[++s] + ";"));
        }
      n ? (e.styles = r) : (e.stylesWithoutHost = r),
        n ? (e.classes = o) : (e.classesWithoutHost = o);
    }
    function Hu(e) {
      const t = yo(e);
      Ri(t[1], t, e);
    }
    function $u(e) {
      !(function (e, t) {
        const n = 0 === e.flags;
        if (((e.flags |= 1), n && e.clean == Zo)) {
          let t;
          (e.clean = new Promise((e) => (t = e))),
            e.scheduler(() => {
              if ((1 & e.flags && ((e.flags &= -2), Ti(e)), 2 & e.flags)) {
                e.flags &= -3;
                const t = e.playerHandler;
                t && t.flushPlayers();
              }
              (e.clean = Zo), t(null);
            });
        }
      })(ki(yo(e))[8]);
    }
    function zu(e) {
      ea(e);
      const t = Ku(e, !1);
      return null === t
        ? null
        : (void 0 === t.component &&
            (t.component = (function (e, t) {
              const n = t[1].data[e];
              return 2 & n.flags ? t[n.directiveStart] : null;
            })(t.nodeIndex, t.lView)),
          t.component);
    }
    function qu(e) {
      ea(e);
      const t = Ku(e, !1);
      return null === t ? null : t.lView[8];
    }
    function Wu(e) {
      const t = Ku(e, !1);
      if (null === t) return null;
      let n,
        r = t.lView;
      for (; 2 === r[1].type && (n = No(r)); ) r = n;
      return 512 & r[2] ? null : r[8];
    }
    function Qu(e) {
      return [...Mo(e).components];
    }
    function Gu(e) {
      const t = Ku(e, !1);
      return null === t
        ? iu.NULL
        : new ir(t.lView[1].data[t.nodeIndex], t.lView);
    }
    function Zu(e) {
      const t = Ku(e);
      return (
        void 0 === t.directives &&
          (t.directives = Co(t.nodeIndex, t.lView, !1)),
        null === t.directives ? [] : [...t.directives]
      );
    }
    function Ku(e, t = !0) {
      const n = go(e);
      if (!n && t) throw new Error("Invalid ng target");
      return n;
    }
    function Yu(e) {
      return go(e).native;
    }
    function Ju(e) {
      ea(e);
      const t = Ku(e, !1);
      if (null === t) return [];
      const n = t.lView,
        r = n[7],
        o = n[1].cleanup,
        i = [];
      if (o && r)
        for (let s = 0; s < o.length; ) {
          const t = o[s++],
            u = o[s++];
          if ("string" == typeof t) {
            const a = t,
              c = Dt(n[u]),
              l = r[o[s++]],
              d = o[s++],
              f = "boolean" == typeof d || d >= 0 ? "dom" : "output",
              h = "boolean" == typeof d && d;
            e == c &&
              i.push({
                element: e,
                name: a,
                callback: l,
                useCapture: h,
                type: f,
              });
          }
        }
      return i.sort(Xu), i;
    }
    function Xu(e, t) {
      return e.name == t.name ? 0 : e.name < t.name ? -1 : 1;
    }
    function ea(e) {
      if ("undefined" != typeof Element && !(e instanceof Element))
        throw new Error("Expecting instance of DOM Element");
    }
    function ta(e) {
      $u(e), Qu(e).forEach((e) => Hu(e));
    }
    let na = !1;
    function ra() {
      na ||
        ((na = !0),
        oa("getComponent", zu),
        oa("getContext", qu),
        oa("getListeners", Ju),
        oa("getOwningComponent", Wu),
        oa("getHostElement", Yu),
        oa("getInjector", Gu),
        oa("getRootComponents", Qu),
        oa("getDirectives", Zu),
        oa("applyChanges", ta));
    }
    function oa(e, t) {
      if ("undefined" == typeof COMPILED || !COMPILED) {
        const n = G;
        if (n) {
          let r = n.ng;
          r || (r = n.ng = {}), (r[e] = t);
        }
      }
    }
    function ia(e, t = {}) {
      const n = t.rendererFactory || Ct,
        r = t.sanitizer || null,
        o = Ke(e);
      o.type != e && (o.type = e);
      const i = o.selectors[0][0],
        s = ci(n.createRenderer(null, null), t.host || i, o.encapsulation),
        u = o.onPush ? 576 : 528,
        a = aa(t.scheduler, t.playerHandler),
        c = n.createRenderer(s, o),
        l = ai(0, null, null, 1, 0, null, null, null, null, null),
        d = Jo(null, l, a, u, null, null, n, c, null, t.injector || null);
      let f;
      un(d);
      try {
        n.begin && n.begin(),
          (f = ua(sa(s, o, d, n, c, r), o, d, a, t.hostFeatures || null)),
          ei(l, d, null),
          ti(l, d, null, null);
      } finally {
        fn(), n.end && n.end();
      }
      return f;
    }
    function sa(e, t, n, r, o, i) {
      const s = n[1];
      n[20] = e;
      const u = Xo(s, 0, 2, null, null),
        a = (u.mergedAttrs = t.hostAttrs);
      null !== a &&
        (Bu(u, a, !0),
        null !== e &&
          (In(o, e, a),
          null !== u.classes && cs(o, e, u.classes),
          null !== u.styles && as(o, e, u.styles)));
      const c = r.createRenderer(e, t),
        l = Jo(
          n,
          ui(t),
          null,
          t.onPush ? 64 : 16,
          n[20],
          u,
          r,
          c,
          i || null,
          null
        );
      return (
        s.firstCreatePass &&
          (Kn(Wn(u, n), s, t.type), bi(s, u), _i(u, n.length, 1)),
        ji(n, l),
        (n[20] = l)
      );
    }
    function ua(e, t, n, r, o) {
      const i = n[1],
        s = (function (e, t, n) {
          const r = $t();
          e.firstCreatePass &&
            (n.providersResolver && n.providersResolver(n),
            yi(e, r, 1),
            wi(e, t, n));
          const o = nr(t, e, t.length - 1, r);
          bo(o, t);
          const i = St(r, t);
          return i && bo(i, t), o;
        })(i, n, t);
      r.components.push(s),
        (e[8] = s),
        o && o.forEach((e) => e(s, t)),
        t.contentQueries && t.contentQueries(1, s, n.length - 1);
      const u = $t();
      if (
        i.firstCreatePass &&
        (null !== t.hostBindings || null !== t.hostAttrs)
      ) {
        gn(u.index - tt);
        const e = n[1];
        pi(e, t), gi(e, n, t.hostVars), mi(t, s);
      }
      return s;
    }
    function aa(e, t) {
      return {
        components: [],
        scheduler: e || Ln,
        clean: Ni,
        playerHandler: t || null,
        flags: 0,
      };
    }
    function ca(e, t) {
      const n = jt(e)[1],
        r = n.data.length - 1;
      _n(n, { directiveStart: r, directiveEnd: r + 1 });
    }
    function la(e) {
      return Mo(e).clean;
    }
    function da(e) {
      return Object.getPrototypeOf(e.prototype).constructor;
    }
    function fa(e) {
      let t = da(e.type),
        n = !0;
      const r = [e];
      for (; t; ) {
        let o = void 0;
        if (at(e)) o = t.ɵcmp || t.ɵdir;
        else {
          if (t.ɵcmp) throw new Error("Directives cannot inherit Components");
          o = t.ɵdir;
        }
        if (o) {
          if (n) {
            r.push(o);
            const t = e;
            (t.inputs = ha(e.inputs)),
              (t.declaredInputs = ha(e.declaredInputs)),
              (t.outputs = ha(e.outputs));
            const n = o.hostBindings;
            n && ma(e, n);
            const i = o.viewQuery,
              s = o.contentQueries;
            if (
              (i && pa(e, i),
              s && ga(e, s),
              O(e.inputs, o.inputs),
              O(e.declaredInputs, o.declaredInputs),
              O(e.outputs, o.outputs),
              at(o) && o.data.animation)
            ) {
              const t = e.data;
              t.animation = (t.animation || []).concat(o.data.animation);
            }
          }
          const t = o.features;
          if (t)
            for (let r = 0; r < t.length; r++) {
              const o = t[r];
              o && o.ngInherit && o(e), o === fa && (n = !1);
            }
        }
        t = Object.getPrototypeOf(t);
      }
      !(function (e) {
        let t = 0,
          n = null;
        for (let r = e.length - 1; r >= 0; r--) {
          const o = e[r];
          (o.hostVars = t += o.hostVars),
            (o.hostAttrs = kn(o.hostAttrs, (n = kn(n, o.hostAttrs))));
        }
      })(r);
    }
    function ha(e) {
      return e === Me ? {} : e === Le ? [] : e;
    }
    function pa(e, t) {
      const n = e.viewQuery;
      e.viewQuery = n
        ? (e, r) => {
            t(e, r), n(e, r);
          }
        : t;
    }
    function ga(e, t) {
      const n = e.contentQueries;
      e.contentQueries = n
        ? (e, r, o) => {
            t(e, r, o), n(e, r, o);
          }
        : t;
    }
    function ma(e, t) {
      const n = e.hostBindings;
      e.hostBindings = n
        ? (e, r) => {
            t(e, r), n(e, r);
          }
        : t;
    }
    const ya = ["providersResolver"],
      ba = [
        "template",
        "decls",
        "consts",
        "vars",
        "onPush",
        "ngContentSelectors",
        "styles",
        "encapsulation",
        "schemas",
      ];
    function va(e) {
      let t = da(e.type),
        n = void 0;
      n = at(e) ? t.ɵcmp : t.ɵdir;
      const r = e;
      for (const o of ya) r[o] = n[o];
      if (at(n)) for (const o of ba) r[o] = n[o];
    }
    let _a = null;
    function wa() {
      if (!_a) {
        const e = G.Symbol;
        if (e && e.iterator) _a = e.iterator;
        else {
          const e = Object.getOwnPropertyNames(Map.prototype);
          for (let t = 0; t < e.length; ++t) {
            const n = e[t];
            "entries" !== n &&
              "size" !== n &&
              Map.prototype[n] === Map.prototype.entries &&
              (_a = n);
          }
        }
      }
      return _a;
    }
    function Ca(e, t) {
      const n = Ea(e),
        r = Ea(t);
      if (n && r)
        return (function (e, t, n) {
          const r = e[wa()](),
            o = t[wa()]();
          for (;;) {
            const e = r.next(),
              t = o.next();
            if (e.done && t.done) return !0;
            if (e.done || t.done) return !1;
            if (!n(e.value, t.value)) return !1;
          }
        })(e, t, Ca);
      {
        const o = e && ("object" == typeof e || "function" == typeof e),
          i = t && ("object" == typeof t || "function" == typeof t);
        return !(n || !o || r || !i) || Object.is(e, t);
      }
    }
    class Da {
      constructor(e) {
        this.wrapped = e;
      }
      static wrap(e) {
        return new Da(e);
      }
      static unwrap(e) {
        return Da.isWrapped(e) ? e.wrapped : e;
      }
      static isWrapped(e) {
        return e instanceof Da;
      }
    }
    function Ea(e) {
      return (
        !!Sa(e) && (Array.isArray(e) || (!(e instanceof Map) && wa() in e))
      );
    }
    function Sa(e) {
      return null !== e && ("function" == typeof e || "object" == typeof e);
    }
    function Oa(e, t, n) {
      return (e[t] = n);
    }
    function xa(e, t) {
      return e[t];
    }
    function Ia(e, t, n) {
      return !Object.is(e[t], n) && ((e[t] = n), !0);
    }
    function Aa(e, t, n, r) {
      const o = Ia(e, t, n);
      return Ia(e, t + 1, r) || o;
    }
    function ja(e, t, n, r, o) {
      const i = Aa(e, t, n, r);
      return Ia(e, t + 2, o) || i;
    }
    function ka(e, t, n, r, o, i) {
      const s = Aa(e, t, n, r);
      return Aa(e, t + 2, o, i) || s;
    }
    function Ta(e, t, n, r) {
      const o = Ut();
      return Ia(o, Jt(), t) && (Bt(), Di(mn(), o, e, t, n, r)), Ta;
    }
    function Ra(e, t) {
      let n = !1,
        r = Kt();
      for (let i = 1; i < t.length; i += 2) n = Ia(e, r++, t[i]) || n;
      if ((Yt(r), !n)) return Po;
      let o = t[0];
      for (let i = 1; i < t.length; i += 2) o += Nn(t[i]) + t[i + 1];
      return o;
    }
    function Fa(e, t, n, r) {
      return Ia(e, Jt(), n) ? t + Nn(n) + r : Po;
    }
    function Pa(e, t, n, r, o, i) {
      const s = Aa(e, Kt(), n, o);
      return Xt(2), s ? t + Nn(n) + r + Nn(o) + i : Po;
    }
    function Na(e, t, n, r, o, i, s, u) {
      const a = ja(e, Kt(), n, o, s);
      return Xt(3), a ? t + Nn(n) + r + Nn(o) + i + Nn(s) + u : Po;
    }
    function Ma(e, t, n, r, o, i, s, u, a, c) {
      const l = ka(e, Kt(), n, o, s, a);
      return Xt(4), l ? t + Nn(n) + r + Nn(o) + i + Nn(s) + u + Nn(a) + c : Po;
    }
    function La(e, t, n, r, o, i, s, u, a, c, l, d) {
      const f = Kt();
      let h = ka(e, f, n, o, s, a);
      return (
        (h = Ia(e, f + 4, l) || h),
        Xt(5),
        h ? t + Nn(n) + r + Nn(o) + i + Nn(s) + u + Nn(a) + c + Nn(l) + d : Po
      );
    }
    function Va(e, t, n, r, o, i, s, u, a, c, l, d, f, h) {
      const p = Kt();
      let g = ka(e, p, n, o, s, a);
      return (
        (g = Aa(e, p + 4, l, f) || g),
        Xt(6),
        g
          ? t +
            Nn(n) +
            r +
            Nn(o) +
            i +
            Nn(s) +
            u +
            Nn(a) +
            c +
            Nn(l) +
            d +
            Nn(f) +
            h
          : Po
      );
    }
    function Ua(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g) {
      const m = Kt();
      let y = ka(e, m, n, o, s, a);
      return (
        (y = ja(e, m + 4, l, f, p) || y),
        Xt(7),
        y
          ? t +
            Nn(n) +
            r +
            Nn(o) +
            i +
            Nn(s) +
            u +
            Nn(a) +
            c +
            Nn(l) +
            d +
            Nn(f) +
            h +
            Nn(p) +
            g
          : Po
      );
    }
    function Ba(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y) {
      const b = Kt();
      let v = ka(e, b, n, o, s, a);
      return (
        (v = ka(e, b + 4, l, f, p, m) || v),
        Xt(8),
        v
          ? t +
            Nn(n) +
            r +
            Nn(o) +
            i +
            Nn(s) +
            u +
            Nn(a) +
            c +
            Nn(l) +
            d +
            Nn(f) +
            h +
            Nn(p) +
            g +
            Nn(m) +
            y
          : Po
      );
    }
    function Ha(e, t, n, r, o, i) {
      const s = Ut(),
        u = Fa(s, t, n, r);
      return u !== Po && Di(mn(), s, e, u, o, i), Ha;
    }
    function $a(e, t, n, r, o, i, s, u) {
      const a = Ut(),
        c = Pa(a, t, n, r, o, i);
      return c !== Po && Di(mn(), a, e, c, s, u), $a;
    }
    function za(e, t, n, r, o, i, s, u, a, c) {
      const l = Ut(),
        d = Na(l, t, n, r, o, i, s, u);
      return d !== Po && Di(mn(), l, e, d, a, c), za;
    }
    function qa(e, t, n, r, o, i, s, u, a, c, l, d) {
      const f = Ut(),
        h = Ma(f, t, n, r, o, i, s, u, a, c);
      return h !== Po && Di(mn(), f, e, h, l, d), qa;
    }
    function Wa(e, t, n, r, o, i, s, u, a, c, l, d, f, h) {
      const p = Ut(),
        g = La(p, t, n, r, o, i, s, u, a, c, l, d);
      return g !== Po && Di(mn(), p, e, g, f, h), Wa;
    }
    function Qa(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g) {
      const m = Ut(),
        y = Va(m, t, n, r, o, i, s, u, a, c, l, d, f, h);
      return y !== Po && Di(mn(), m, e, y, p, g), Qa;
    }
    function Ga(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y) {
      const b = Ut(),
        v = Ua(b, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g);
      return v !== Po && Di(mn(), b, e, v, m, y), Ga;
    }
    function Za(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y, b, v) {
      const _ = Ut(),
        w = Ba(_, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y);
      return w !== Po && Di(mn(), _, e, w, b, v), Za;
    }
    function Ka(e, t, n, r) {
      const o = Ut(),
        i = Ra(o, t);
      return i !== Po && Di(mn(), o, e, i, n, r), Ka;
    }
    function Ya(e, t, n, r, o, i, s, u) {
      const a = Ut(),
        c = Bt(),
        l = e + tt,
        d = c.firstCreatePass
          ? (function (e, t, n, r, o, i, s, u, a) {
              const c = t.consts,
                l = Xo(t, e, 0, s || null, Rt(c, u));
              hi(t, n, l, Rt(c, a)), _n(t, l);
              const d = (l.tViews = ai(
                2,
                l,
                r,
                o,
                i,
                t.directiveRegistry,
                t.pipeRegistry,
                null,
                t.schemas,
                c
              ));
              return (
                null !== t.queries &&
                  (t.queries.template(t, l),
                  (d.queries = t.queries.embeddedTView(l))),
                l
              );
            })(e, c, a, t, n, r, o, i, s)
          : c.data[l];
      zt(d, !1);
      const f = a[11].createComment("");
      es(c, a, f, d),
        bo(f, a),
        ji(a, (a[l] = Oi(f, a, f, d))),
        ut(d) && ii(c, a, d),
        null != s && si(a, d, u);
    }
    function Ja(e, t, n, r) {
      const o = n + tt;
      o >= e.data.length && ((e.data[o] = null), (e.blueprint[o] = null)),
        (t[o] = r);
    }
    function Xa(e) {
      return xt(Nt.lFrame.contextLView, e);
    }
    function ec(e, t = E.Default) {
      const n = Ut();
      return null === n ? ge(e, t) : Jn($t(), n, H(e), t);
    }
    function tc(e) {
      return Yn($t(), e);
    }
    function nc() {
      throw new Error("invalid");
    }
    function rc(e, t, n) {
      const r = Ut();
      return Ia(r, Jt(), t) && fi(Bt(), mn(), r, e, t, r[11], n, !1), rc;
    }
    function oc(e, t, n, r, o) {
      const i = o ? "class" : "style";
      Ui(e, n, t.inputs[i], i, r);
    }
    function ic(e, t, n, r) {
      const o = Ut(),
        i = Bt(),
        s = tt + e,
        u = o[11],
        a = (o[s] = Yo(t, u, Nt.lFrame.currentNamespace)),
        c = i.firstCreatePass
          ? (function (e, t, n, r, o, i, s) {
              const u = t.consts,
                a = Xo(t, e, 2, o, Rt(u, i));
              return (
                hi(t, n, a, Rt(u, s)),
                null !== a.attrs && Bu(a, a.attrs, !1),
                null !== a.mergedAttrs && Bu(a, a.mergedAttrs, !0),
                null !== t.queries && t.queries.elementStart(t, a),
                a
              );
            })(e, i, o, 0, t, n, r)
          : i.data[s];
      zt(c, !0);
      const l = c.mergedAttrs;
      null !== l && In(u, a, l);
      const d = c.classes;
      null !== d && cs(u, a, d);
      const f = c.styles;
      null !== f && as(u, a, f),
        es(i, o, a, c),
        0 === Nt.lFrame.elementDepthCount && bo(a, o),
        Nt.lFrame.elementDepthCount++,
        ut(c) && (ii(i, o, c), oi(i, c, o)),
        null !== r && si(o, c);
    }
    function sc() {
      let e = $t();
      qt() ? Wt() : ((e = e.parent), zt(e, !1));
      const t = e;
      Nt.lFrame.elementDepthCount--;
      const n = Bt();
      n.firstCreatePass && (_n(n, e), it(e) && n.queries.elementEnd(e)),
        null != t.classesWithoutHost &&
          (function (e) {
            return 0 != (16 & e.flags);
          })(t) &&
          oc(n, t, Ut(), t.classesWithoutHost, !0),
        null != t.stylesWithoutHost &&
          (function (e) {
            return 0 != (32 & e.flags);
          })(t) &&
          oc(n, t, Ut(), t.stylesWithoutHost, !1);
    }
    function uc(e, t, n, r) {
      ic(e, t, n, r), sc();
    }
    function ac(e, t, n) {
      const r = Ut(),
        o = Bt(),
        i = e + tt,
        s = o.firstCreatePass
          ? (function (e, t, n, r, o) {
              const i = t.consts,
                s = Rt(i, r),
                u = Xo(t, e, 3, "ng-container", s);
              return (
                null !== s && Bu(u, s, !0),
                hi(t, n, u, Rt(i, o)),
                null !== t.queries && t.queries.elementStart(t, u),
                u
              );
            })(e, o, r, t, n)
          : o.data[i];
      zt(s, !0);
      const u = (r[i] = r[11].createComment(""));
      es(o, r, u, s),
        bo(u, r),
        ut(s) && (ii(o, r, s), oi(o, s, r)),
        null != n && si(r, s);
    }
    function cc() {
      let e = $t();
      const t = Bt();
      qt() ? Wt() : ((e = e.parent), zt(e, !1)),
        t.firstCreatePass && (_n(t, e), it(e) && t.queries.elementEnd(e));
    }
    function lc(e, t, n) {
      ac(e, t, n), cc();
    }
    function dc() {
      return Ut();
    }
    function fc(e) {
      return !!e && "function" == typeof e.then;
    }
    function hc(e) {
      return !!e && "function" == typeof e.subscribe;
    }
    function pc(e, t, n = !1, r) {
      const o = Ut(),
        i = Bt(),
        s = $t();
      return mc(i, o, o[11], s, e, t, n, r), pc;
    }
    function gc(e, t, n = !1, r) {
      const o = $t(),
        i = Ut(),
        s = Bt();
      return mc(s, i, Li(nn(s.data), o, i), o, e, t, n, r), gc;
    }
    function mc(e, t, n, r, o, i, s = !1, u) {
      const a = ut(r),
        c = e.firstCreatePass && (e.cleanup || (e.cleanup = [])),
        l = Mi(t);
      let d = !0;
      if (2 === r.type) {
        const f = St(r, t),
          h = u ? u(f) : Me,
          p = h.target || f,
          g = l.length,
          m = u ? (e) => u(Dt(e[r.index])).target : r.index;
        if (wt(n)) {
          let s = null;
          if (
            (!u &&
              a &&
              (s = (function (e, t, n, r) {
                const o = e.cleanup;
                if (null != o)
                  for (let i = 0; i < o.length - 1; i += 2) {
                    const e = o[i];
                    if (e === n && o[i + 1] === r) {
                      const e = t[7],
                        n = o[i + 2];
                      return e.length > n ? e[n] : null;
                    }
                    "string" == typeof e && (i += 2);
                  }
                return null;
              })(e, t, o, r.index)),
            null !== s)
          )
            ((s.__ngLastListenerFn__ || s).__ngNextListenerFn__ = i),
              (s.__ngLastListenerFn__ = i),
              (d = !1);
          else {
            i = bc(r, t, i, !1);
            const e = n.listen(h.name || p, o, i);
            l.push(i, e), c && c.push(o, m, g, g + 1);
          }
        } else
          (i = bc(r, t, i, !0)),
            p.addEventListener(o, i, s),
            l.push(i),
            c && c.push(o, m, g, s);
      }
      const f = r.outputs;
      let h;
      if (d && null !== f && (h = f[o])) {
        const e = h.length;
        if (e)
          for (let n = 0; n < e; n += 2) {
            const e = t[h[n]][h[n + 1]].subscribe(i),
              s = l.length;
            l.push(i, e), c && c.push(o, r.index, s, -(s + 1));
          }
      }
    }
    function yc(e, t, n) {
      try {
        return !1 !== t(n);
      } catch (r) {
        return Vi(e, r), !1;
      }
    }
    function bc(e, t, n, r) {
      return function o(i) {
        if (i === Function) return n;
        const s = 2 & e.flags ? It(e.index, t) : t;
        0 == (32 & t[2]) && ki(s);
        let u = yc(t, n, i),
          a = o.__ngNextListenerFn__;
        for (; a; ) (u = yc(t, a, i) && u), (a = a.__ngNextListenerFn__);
        return r && !1 === u && (i.preventDefault(), (i.returnValue = !1)), u;
      };
    }
    function vc(e = 1) {
      return hn(e);
    }
    function _c(e, t) {
      let n = null;
      const r = (function (e) {
        const t = e.attrs;
        if (null != t) {
          const e = t.indexOf(5);
          if (0 == (1 & e)) return t[e + 1];
        }
        return null;
      })(e);
      for (let o = 0; o < t.length; o++) {
        const i = t[o];
        if ("*" !== i) {
          if (null === r ? ko(e, i, !0) : To(r, i)) return o;
        } else n = o;
      }
      return n;
    }
    function wc(e) {
      const t = Ut()[16][6];
      if (!t.projection) {
        const n = (t.projection = Ae(e ? e.length : 1, null)),
          r = n.slice();
        let o = t.child;
        for (; null !== o; ) {
          const t = e ? _c(o, e) : 0;
          null !== t &&
            (r[t] ? (r[t].projectionNext = o) : (n[t] = o), (r[t] = o)),
            (o = o.next);
        }
      }
    }
    let Cc = !1;
    function Dc(e) {
      Cc = e;
    }
    function Ec(e, t = 0, n) {
      const r = Ut(),
        o = Bt(),
        i = Xo(o, e, 1, null, n || null);
      null === i.projection && (i.projection = t), Wt(), Cc || ss(o, r, i);
    }
    function Sc(e, t, n) {
      return Oc(e, "", t, "", n), Sc;
    }
    function Oc(e, t, n, r, o) {
      const i = Ut(),
        s = Fa(i, t, n, r);
      return s !== Po && fi(Bt(), mn(), i, e, s, i[11], o, !1), Oc;
    }
    function xc(e, t, n, r, o, i, s) {
      const u = Ut(),
        a = Pa(u, t, n, r, o, i);
      return a !== Po && fi(Bt(), mn(), u, e, a, u[11], s, !1), xc;
    }
    function Ic(e, t, n, r, o, i, s, u, a) {
      const c = Ut(),
        l = Na(c, t, n, r, o, i, s, u);
      return l !== Po && fi(Bt(), mn(), c, e, l, c[11], a, !1), Ic;
    }
    function Ac(e, t, n, r, o, i, s, u, a, c, l) {
      const d = Ut(),
        f = Ma(d, t, n, r, o, i, s, u, a, c);
      return f !== Po && fi(Bt(), mn(), d, e, f, d[11], l, !1), Ac;
    }
    function jc(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      const h = Ut(),
        p = La(h, t, n, r, o, i, s, u, a, c, l, d);
      return p !== Po && fi(Bt(), mn(), h, e, p, h[11], f, !1), jc;
    }
    function kc(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p) {
      const g = Ut(),
        m = Va(g, t, n, r, o, i, s, u, a, c, l, d, f, h);
      return m !== Po && fi(Bt(), mn(), g, e, m, g[11], p, !1), kc;
    }
    function Tc(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m) {
      const y = Ut(),
        b = Ua(y, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g);
      return b !== Po && fi(Bt(), mn(), y, e, b, y[11], m, !1), Tc;
    }
    function Rc(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y, b) {
      const v = Ut(),
        _ = Ba(v, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y);
      return _ !== Po && fi(Bt(), mn(), v, e, _, v[11], b, !1), Rc;
    }
    function Fc(e, t, n) {
      const r = Ut(),
        o = Ra(r, t);
      return o !== Po && fi(Bt(), mn(), r, e, o, r[11], n, !1), Fc;
    }
    const Pc = [];
    function Nc(e, t, n, r, o) {
      const i = e[n + 1],
        s = null === t;
      let u = r ? zo(i) : Wo(i),
        a = !1;
      for (; 0 !== u && (!1 === a || s); ) {
        const n = e[u + 1];
        Mc(e[u], t) && ((a = !0), (e[u + 1] = r ? Go(n) : qo(n))),
          (u = r ? zo(n) : Wo(n));
      }
      a && (e[n + 1] = r ? qo(i) : Go(i));
    }
    function Mc(e, t) {
      return (
        null === e ||
        null == t ||
        (Array.isArray(e) ? e[1] : e) === t ||
        (!(!Array.isArray(e) || "string" != typeof t) && Te(e, t) >= 0)
      );
    }
    const Lc = { textEnd: 0, key: 0, keyEnd: 0, value: 0, valueEnd: 0 };
    function Vc(e) {
      return e.substring(Lc.key, Lc.keyEnd);
    }
    function Uc(e) {
      return e.substring(Lc.value, Lc.valueEnd);
    }
    function Bc(e, t) {
      const n = Lc.textEnd;
      return n === t
        ? -1
        : ((t = Lc.keyEnd = (function (e, t, n) {
            for (; t < n && e.charCodeAt(t) > 32; ) t++;
            return t;
          })(e, (Lc.key = t), n)),
          zc(e, t, n));
    }
    function Hc(e, t) {
      const n = Lc.textEnd;
      let r = (Lc.key = zc(e, t, n));
      return n === r
        ? -1
        : ((r = Lc.keyEnd = (function (e, t, n) {
            let r;
            for (
              ;
              t < n &&
              (45 === (r = e.charCodeAt(t)) ||
                95 === r ||
                ((-33 & r) >= 65 && (-33 & r) <= 90) ||
                (r >= 48 && r <= 57));

            )
              t++;
            return t;
          })(e, r, n)),
          (r = qc(e, r, n)),
          (r = Lc.value = zc(e, r, n)),
          (r = Lc.valueEnd = (function (e, t, n) {
            let r = -1,
              o = -1,
              i = -1,
              s = t,
              u = s;
            for (; s < n; ) {
              const a = e.charCodeAt(s++);
              if (59 === a) return u;
              34 === a || 39 === a
                ? (u = s = Wc(e, a, s, n))
                : t === s - 4 && 85 === i && 82 === o && 76 === r && 40 === a
                ? (u = s = Wc(e, 41, s, n))
                : a > 32 && (u = s),
                (i = o),
                (o = r),
                (r = -33 & a);
            }
            return u;
          })(e, r, n)),
          qc(e, r, n));
    }
    function $c(e) {
      (Lc.key = 0),
        (Lc.keyEnd = 0),
        (Lc.value = 0),
        (Lc.valueEnd = 0),
        (Lc.textEnd = e.length);
    }
    function zc(e, t, n) {
      for (; t < n && e.charCodeAt(t) <= 32; ) t++;
      return t;
    }
    function qc(e, t, n, r) {
      return (t = zc(e, t, n)) < n && t++, t;
    }
    function Wc(e, t, n, r) {
      let o = -1,
        i = n;
      for (; i < r; ) {
        const n = e.charCodeAt(i++);
        if (n == t && 92 !== o) return i;
        o = 92 == n && 92 === o ? 0 : n;
      }
      throw new Error();
    }
    function Qc(e, t, n) {
      return Xc(e, t, n, !1), Qc;
    }
    function Gc(e, t) {
      return Xc(e, t, null, !0), Gc;
    }
    function Zc(e) {
      el(il, Kc, e, !1);
    }
    function Kc(e, t) {
      for (
        let n = (function (e) {
          return $c(e), Hc(e, zc(e, 0, Lc.textEnd));
        })(t);
        n >= 0;
        n = Hc(t, n)
      )
        il(e, Vc(t), Uc(t));
    }
    function Yc(e) {
      el(je, Jc, e, !0);
    }
    function Jc(e, t) {
      for (
        let n = (function (e) {
          return $c(e), Bc(e, zc(e, 0, Lc.textEnd));
        })(t);
        n >= 0;
        n = Bc(t, n)
      )
        je(e, Vc(t), !0);
    }
    function Xc(e, t, n, r) {
      const o = Ut(),
        i = Bt(),
        s = Xt(2);
      i.firstUpdatePass && nl(i, e, s, r),
        t !== Po &&
          Ia(o, s, t) &&
          sl(
            i,
            i.data[pn() + tt],
            o,
            o[11],
            e,
            (o[s + 1] = (function (e, t) {
              return (
                null == e ||
                  ("string" == typeof t
                    ? (e += t)
                    : "object" == typeof e && (e = L(_r(e)))),
                e
              );
            })(t, n)),
            r,
            s
          );
    }
    function el(e, t, n, r) {
      const o = Bt(),
        i = Xt(2);
      o.firstUpdatePass && nl(o, null, i, r);
      const s = Ut();
      if (n !== Po && Ia(s, i, n)) {
        const u = o.data[pn() + tt];
        if (cl(u, r) && !tl(o, i)) {
          let e = r ? u.classesWithoutHost : u.stylesWithoutHost;
          null !== e && (n = V(e, n || "")), oc(o, u, s, n, r);
        } else
          !(function (e, t, n, r, o, i, s, u) {
            o === Po && (o = Pc);
            let a = 0,
              c = 0,
              l = 0 < o.length ? o[0] : null,
              d = 0 < i.length ? i[0] : null;
            for (; null !== l || null !== d; ) {
              const f = a < o.length ? o[a + 1] : void 0,
                h = c < i.length ? i[c + 1] : void 0;
              let p = null,
                g = void 0;
              l === d
                ? ((a += 2), (c += 2), f !== h && ((p = d), (g = h)))
                : null === d || (null !== l && l < d)
                ? ((a += 2), (p = l))
                : ((c += 2), (p = d), (g = h)),
                null !== p && sl(e, t, n, r, p, g, s, u),
                (l = a < o.length ? o[a] : null),
                (d = c < i.length ? i[c] : null);
            }
          })(
            o,
            u,
            s,
            s[11],
            s[i + 1],
            (s[i + 1] = (function (e, t, n) {
              if (null == n || "" === n) return Pc;
              const r = [],
                o = _r(n);
              if (Array.isArray(o))
                for (let i = 0; i < o.length; i++) e(r, o[i], !0);
              else if ("object" == typeof o)
                for (const i in o) o.hasOwnProperty(i) && e(r, i, o[i]);
              else "string" == typeof o && t(r, o);
              return r;
            })(e, t, n)),
            r,
            i
          );
      }
    }
    function tl(e, t) {
      return t >= e.expandoStartIndex;
    }
    function nl(e, t, n, r) {
      const o = e.data;
      if (null === o[n + 1]) {
        const i = o[pn() + tt],
          s = tl(e, n);
        cl(i, r) && null === t && !s && (t = !1),
          (t = (function (e, t, n, r) {
            const o = nn(e);
            let i = r ? t.residualClasses : t.residualStyles;
            if (null === o)
              0 === (r ? t.classBindings : t.styleBindings) &&
                ((n = ol((n = rl(null, e, t, n, r)), t.attrs, r)), (i = null));
            else {
              const s = t.directiveStylingLast;
              if (-1 === s || e[s] !== o)
                if (((n = rl(o, e, t, n, r)), null === i)) {
                  let n = (function (e, t, n) {
                    const r = n ? t.classBindings : t.styleBindings;
                    if (0 !== Wo(r)) return e[zo(r)];
                  })(e, t, r);
                  void 0 !== n &&
                    Array.isArray(n) &&
                    ((n = rl(null, e, t, n[1], r)),
                    (n = ol(n, t.attrs, r)),
                    (function (e, t, n, r) {
                      e[zo(n ? t.classBindings : t.styleBindings)] = r;
                    })(e, t, r, n));
                } else
                  i = (function (e, t, n) {
                    let r = void 0;
                    const o = t.directiveEnd;
                    for (let i = 1 + t.directiveStylingLast; i < o; i++)
                      r = ol(r, e[i].hostAttrs, n);
                    return ol(r, t.attrs, n);
                  })(e, t, r);
            }
            return (
              void 0 !== i &&
                (r ? (t.residualClasses = i) : (t.residualStyles = i)),
              n
            );
          })(o, i, t, r)),
          (function (e, t, n, r, o, i) {
            let s = i ? t.classBindings : t.styleBindings,
              u = zo(s),
              a = Wo(s);
            e[r] = n;
            let c,
              l = !1;
            if (Array.isArray(n)) {
              const e = n;
              (c = e[1]), (null === c || Te(e, c) > 0) && (l = !0);
            } else c = n;
            if (o)
              if (0 !== a) {
                const t = zo(e[u + 1]);
                (e[r + 1] = $o(t, u)),
                  0 !== t && (e[t + 1] = Qo(e[t + 1], r)),
                  (e[u + 1] = (131071 & e[u + 1]) | (r << 17));
              } else
                (e[r + 1] = $o(u, 0)),
                  0 !== u && (e[u + 1] = Qo(e[u + 1], r)),
                  (u = r);
            else
              (e[r + 1] = $o(a, 0)),
                0 === u ? (u = r) : (e[a + 1] = Qo(e[a + 1], r)),
                (a = r);
            l && (e[r + 1] = qo(e[r + 1])),
              Nc(e, c, r, !0),
              Nc(e, c, r, !1),
              (function (e, t, n, r, o) {
                const i = o ? e.residualClasses : e.residualStyles;
                null != i &&
                  "string" == typeof t &&
                  Te(i, t) >= 0 &&
                  (n[r + 1] = Go(n[r + 1]));
              })(t, c, e, r, i),
              (s = $o(u, a)),
              i ? (t.classBindings = s) : (t.styleBindings = s);
          })(o, i, t, n, s, r);
      }
    }
    function rl(e, t, n, r, o) {
      let i = null;
      const s = n.directiveEnd;
      let u = n.directiveStylingLast;
      for (
        -1 === u ? (u = n.directiveStart) : u++;
        u < s && ((i = t[u]), (r = ol(r, i.hostAttrs, o)), i !== e);

      )
        u++;
      return null !== e && (n.directiveStylingLast = u), r;
    }
    function ol(e, t, n) {
      const r = n ? 1 : 2;
      let o = -1;
      if (null !== t)
        for (let i = 0; i < t.length; i++) {
          const s = t[i];
          "number" == typeof s
            ? (o = s)
            : o === r &&
              (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
              je(e, s, !!n || t[++i]));
        }
      return void 0 === e ? null : e;
    }
    function il(e, t, n) {
      je(e, t, _r(n));
    }
    function sl(e, t, n, r, o, i, s, u) {
      if (2 !== t.type) return;
      const a = e.data,
        c = a[u + 1];
      al(1 == (1 & c) ? ul(a, t, n, o, Wo(c), s) : void 0) ||
        (al(i) || (2 == (2 & c) && (i = ul(a, null, n, o, u, s))),
        (function (e, t, n, r, o) {
          const i = wt(e);
          if (t)
            o
              ? i
                ? e.addClass(n, r)
                : n.classList.add(r)
              : i
              ? e.removeClass(n, r)
              : n.classList.remove(r);
          else {
            const t = -1 == r.indexOf("-") ? void 0 : 2;
            null == o
              ? i
                ? e.removeStyle(n, r, t)
                : n.style.removeProperty(r)
              : i
              ? e.setStyle(n, r, o, t)
              : n.style.setProperty(r, o);
          }
        })(r, s, Et(pn(), n), o, i));
    }
    function ul(e, t, n, r, o, i) {
      const s = null === t;
      let u = void 0;
      for (; o > 0; ) {
        const t = e[o],
          i = Array.isArray(t),
          a = i ? t[1] : t,
          c = null === a;
        let l = n[o + 1];
        l === Po && (l = c ? Pc : void 0);
        let d = c ? ke(l, r) : a === r ? l : void 0;
        if ((i && !al(d) && (d = ke(t, r)), al(d) && ((u = d), s))) return u;
        const f = e[o + 1];
        o = s ? zo(f) : Wo(f);
      }
      if (null !== t) {
        let e = i ? t.residualClasses : t.residualStyles;
        null != e && (u = ke(e, r));
      }
      return u;
    }
    function al(e) {
      return void 0 !== e;
    }
    function cl(e, t) {
      return 0 != (e.flags & (t ? 16 : 32));
    }
    function ll(e, t = "") {
      const n = Ut(),
        r = Bt(),
        o = e + tt,
        i = r.firstCreatePass ? Xo(r, e, 2, null, null) : r.data[o],
        s = (n[o] = $i(t, n[11]));
      es(r, n, s, i), zt(i, !1);
    }
    function dl(e) {
      return fl("", e, ""), dl;
    }
    function fl(e, t, n) {
      const r = Ut(),
        o = Fa(r, e, t, n);
      return o !== Po && Bi(r, pn(), o), fl;
    }
    function hl(e, t, n, r, o) {
      const i = Ut(),
        s = Pa(i, e, t, n, r, o);
      return s !== Po && Bi(i, pn(), s), hl;
    }
    function pl(e, t, n, r, o, i, s) {
      const u = Ut(),
        a = Na(u, e, t, n, r, o, i, s);
      return a !== Po && Bi(u, pn(), a), pl;
    }
    function gl(e, t, n, r, o, i, s, u, a) {
      const c = Ut(),
        l = Ma(c, e, t, n, r, o, i, s, u, a);
      return l !== Po && Bi(c, pn(), l), gl;
    }
    function ml(e, t, n, r, o, i, s, u, a, c, l) {
      const d = Ut(),
        f = La(d, e, t, n, r, o, i, s, u, a, c, l);
      return f !== Po && Bi(d, pn(), f), ml;
    }
    function yl(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      const h = Ut(),
        p = Va(h, e, t, n, r, o, i, s, u, a, c, l, d, f);
      return p !== Po && Bi(h, pn(), p), yl;
    }
    function bl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p) {
      const g = Ut(),
        m = Ua(g, e, t, n, r, o, i, s, u, a, c, l, d, f, h, p);
      return m !== Po && Bi(g, pn(), m), bl;
    }
    function vl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m) {
      const y = Ut(),
        b = Ba(y, e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m);
      return b !== Po && Bi(y, pn(), b), vl;
    }
    function _l(e) {
      const t = Ut(),
        n = Ra(t, e);
      return n !== Po && Bi(t, pn(), n), _l;
    }
    function wl(e, t, n) {
      el(je, Jc, Fa(Ut(), e, t, n), !0);
    }
    function Cl(e, t, n, r, o) {
      el(je, Jc, Pa(Ut(), e, t, n, r, o), !0);
    }
    function Dl(e, t, n, r, o, i, s) {
      el(je, Jc, Na(Ut(), e, t, n, r, o, i, s), !0);
    }
    function El(e, t, n, r, o, i, s, u, a) {
      el(je, Jc, Ma(Ut(), e, t, n, r, o, i, s, u, a), !0);
    }
    function Sl(e, t, n, r, o, i, s, u, a, c, l) {
      el(je, Jc, La(Ut(), e, t, n, r, o, i, s, u, a, c, l), !0);
    }
    function Ol(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      el(je, Jc, Va(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f), !0);
    }
    function xl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p) {
      el(je, Jc, Ua(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f, h, p), !0);
    }
    function Il(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m) {
      el(
        je,
        Jc,
        Ba(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m),
        !0
      );
    }
    function Al(e) {
      el(je, Jc, Ra(Ut(), e), !0);
    }
    function jl(e, t, n) {
      Zc(Fa(Ut(), e, t, n));
    }
    function kl(e, t, n, r, o) {
      Zc(Pa(Ut(), e, t, n, r, o));
    }
    function Tl(e, t, n, r, o, i, s) {
      Zc(Na(Ut(), e, t, n, r, o, i, s));
    }
    function Rl(e, t, n, r, o, i, s, u, a) {
      Zc(Ma(Ut(), e, t, n, r, o, i, s, u, a));
    }
    function Fl(e, t, n, r, o, i, s, u, a, c, l) {
      Zc(La(Ut(), e, t, n, r, o, i, s, u, a, c, l));
    }
    function Pl(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      Zc(Va(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f));
    }
    function Nl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p) {
      Zc(Ua(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f, h, p));
    }
    function Ml(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m) {
      Zc(Ba(Ut(), e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m));
    }
    function Ll(e) {
      Zc(Ra(Ut(), e));
    }
    function Vl(e, t, n, r, o) {
      return Xc(e, Fa(Ut(), t, n, r), o, !1), Vl;
    }
    function Ul(e, t, n, r, o, i, s) {
      return Xc(e, Pa(Ut(), t, n, r, o, i), s, !1), Ul;
    }
    function Bl(e, t, n, r, o, i, s, u, a) {
      return Xc(e, Na(Ut(), t, n, r, o, i, s, u), a, !1), Bl;
    }
    function Hl(e, t, n, r, o, i, s, u, a, c, l) {
      return Xc(e, Ma(Ut(), t, n, r, o, i, s, u, a, c), l, !1), Hl;
    }
    function $l(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      return Xc(e, La(Ut(), t, n, r, o, i, s, u, a, c, l, d), f, !1), $l;
    }
    function zl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p) {
      return Xc(e, Va(Ut(), t, n, r, o, i, s, u, a, c, l, d, f, h), p, !1), zl;
    }
    function ql(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m) {
      return (
        Xc(e, Ua(Ut(), t, n, r, o, i, s, u, a, c, l, d, f, h, p, g), m, !1), ql
      );
    }
    function Wl(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y, b) {
      return (
        Xc(
          e,
          Ba(Ut(), t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y),
          b,
          !1
        ),
        Wl
      );
    }
    function Ql(e, t, n) {
      return Xc(e, Ra(Ut(), t), n, !1), Ql;
    }
    function Gl(e, t, n) {
      const r = Ut();
      return Ia(r, Jt(), t) && fi(Bt(), mn(), r, e, t, r[11], n, !0), Gl;
    }
    function Zl(e, t, n) {
      const r = Ut();
      if (Ia(r, Jt(), t)) {
        const o = Bt(),
          i = mn();
        fi(o, i, r, e, t, Li(nn(o.data), i, r), n, !0);
      }
      return Zl;
    }
    function Kl(e, t, n, r, o) {
      if (((e = H(e)), Array.isArray(e)))
        for (let i = 0; i < e.length; i++) Kl(e[i], t, n, r, o);
      else {
        const i = Bt(),
          s = Ut();
        let u = nu(e) ? e : H(e.provide),
          a = Xs(e);
        const c = $t(),
          l = 1048575 & c.providerIndexes,
          d = c.directiveStart,
          f = c.providerIndexes >> 20;
        if (nu(e) || !e.multi) {
          const r = new xn(a, o, ec),
            h = Xl(u, t, o ? l : l + f, d);
          -1 === h
            ? (Kn(Wn(c, s), i, u),
              Yl(i, e, t.length),
              t.push(u),
              c.directiveStart++,
              c.directiveEnd++,
              o && (c.providerIndexes += 1048576),
              n.push(r),
              s.push(r))
            : ((n[h] = r), (s[h] = r));
        } else {
          const h = Xl(u, t, l + f, d),
            p = Xl(u, t, l, l + f),
            g = h >= 0 && n[h],
            m = p >= 0 && n[p];
          if ((o && !m) || (!o && !g)) {
            Kn(Wn(c, s), i, u);
            const l = (function (e, t, n, r, o) {
              const i = new xn(e, n, ec);
              return (
                (i.multi = []),
                (i.index = t),
                (i.componentProviders = 0),
                Jl(i, o, r && !n),
                i
              );
            })(o ? td : ed, n.length, o, r, a);
            !o && m && (n[p].providerFactory = l),
              Yl(i, e, t.length, 0),
              t.push(u),
              c.directiveStart++,
              c.directiveEnd++,
              o && (c.providerIndexes += 1048576),
              n.push(l),
              s.push(l);
          } else Yl(i, e, h > -1 ? h : p, Jl(n[o ? p : h], a, !o && r));
          !o && r && m && n[p].componentProviders++;
        }
      }
    }
    function Yl(e, t, n, r) {
      const o = nu(t);
      if (o || t.useClass) {
        const i = (t.useClass || t).prototype.ngOnDestroy;
        if (i) {
          const s = e.destroyHooks || (e.destroyHooks = []);
          if (!o && t.multi) {
            const e = s.indexOf(n);
            -1 === e ? s.push(n, [r, i]) : s[e + 1].push(r, i);
          } else s.push(n, i);
        }
      }
    }
    function Jl(e, t, n) {
      return n && e.componentProviders++, e.multi.push(t) - 1;
    }
    function Xl(e, t, n, r) {
      for (let o = n; o < r; o++) if (t[o] === e) return o;
      return -1;
    }
    function ed(e, t, n, r) {
      return nd(this.multi, []);
    }
    function td(e, t, n, r) {
      const o = this.multi;
      let i;
      if (this.providerFactory) {
        const e = this.providerFactory.componentProviders,
          t = nr(n, n[1], this.providerFactory.index, r);
        (i = t.slice(0, e)), nd(o, i);
        for (let n = e; n < t.length; n++) i.push(t[n]);
      } else (i = []), nd(o, i);
      return i;
    }
    function nd(e, t) {
      for (let n = 0; n < e.length; n++) t.push((0, e[n])());
      return t;
    }
    function rd(e, t = []) {
      return (n) => {
        n.providersResolver = (n, r) =>
          (function (e, t, n) {
            const r = Bt();
            if (r.firstCreatePass) {
              const o = at(e);
              Kl(n, r.data, r.blueprint, o, !0),
                Kl(t, r.data, r.blueprint, o, !1);
            }
          })(n, r ? r(e) : e, t);
      };
    }
    class od {}
    class id {}
    function sd(e) {
      const t = Error(
        `No component factory found for ${L(
          e
        )}. Did you add it to @NgModule.entryComponents?`
      );
      return (t[ud] = e), t;
    }
    const ud = "ngComponent";
    class ad {
      resolveComponentFactory(e) {
        throw sd(e);
      }
    }
    let cd = (() => {
      class e {}
      return (e.NULL = new ad()), e;
    })();
    class ld {
      constructor(e, t, n) {
        (this._parent = t), (this._ngModule = n), (this._factories = new Map());
        for (let r = 0; r < e.length; r++) {
          const t = e[r];
          this._factories.set(t.componentType, t);
        }
      }
      resolveComponentFactory(e) {
        let t = this._factories.get(e);
        if (
          (!t && this._parent && (t = this._parent.resolveComponentFactory(e)),
          !t)
        )
          throw sd(e);
        return new dd(t, this._ngModule);
      }
    }
    class dd extends id {
      constructor(e, t) {
        super(),
          (this.factory = e),
          (this.ngModule = t),
          (this.selector = e.selector),
          (this.componentType = e.componentType),
          (this.ngContentSelectors = e.ngContentSelectors),
          (this.inputs = e.inputs),
          (this.outputs = e.outputs);
      }
      create(e, t, n, r) {
        return this.factory.create(e, t, n, r || this.ngModule);
      }
    }
    let fd = (() => {
      class e {
        constructor(e) {
          this.nativeElement = e;
        }
      }
      return (e.__NG_ELEMENT_ID__ = () => pd(e)), e;
    })();
    const hd = function (e) {
        return ms(e, $t(), Ut());
      },
      pd = hd;
    class gd {}
    var md = (function (e) {
      return (
        (e[(e.Important = 1)] = "Important"),
        (e[(e.DashCase = 2)] = "DashCase"),
        e
      );
    })({});
    let yd = (() => {
      class e {}
      return (e.__NG_ELEMENT_ID__ = () => vd()), e;
    })();
    const bd = function () {
        const e = Ut(),
          t = It($t().index, e);
        return (function (e) {
          const t = e[11];
          if (wt(t)) return t;
          throw new Error(
            "Cannot inject Renderer2 when the application uses Renderer3!"
          );
        })(rt(t) ? t : e);
      },
      vd = bd;
    let _d = (() => {
      class e {}
      return (
        (e.ɵprov = x({ token: e, providedIn: "root", factory: () => null })), e
      );
    })();
    class wd {
      constructor(e) {
        (this.full = e),
          (this.major = e.split(".")[0]),
          (this.minor = e.split(".")[1]),
          (this.patch = e.split(".").slice(2).join("."));
      }
    }
    const Cd = new wd("10.1.4");
    class Dd {
      constructor() {}
      supports(e) {
        return Ea(e);
      }
      create(e) {
        return new Sd(e);
      }
    }
    const Ed = (e, t) => t;
    class Sd {
      constructor(e) {
        (this.length = 0),
          (this._linkedRecords = null),
          (this._unlinkedRecords = null),
          (this._previousItHead = null),
          (this._itHead = null),
          (this._itTail = null),
          (this._additionsHead = null),
          (this._additionsTail = null),
          (this._movesHead = null),
          (this._movesTail = null),
          (this._removalsHead = null),
          (this._removalsTail = null),
          (this._identityChangesHead = null),
          (this._identityChangesTail = null),
          (this._trackByFn = e || Ed);
      }
      forEachItem(e) {
        let t;
        for (t = this._itHead; null !== t; t = t._next) e(t);
      }
      forEachOperation(e) {
        let t = this._itHead,
          n = this._removalsHead,
          r = 0,
          o = null;
        for (; t || n; ) {
          const i = !n || (t && t.currentIndex < Ad(n, r, o)) ? t : n,
            s = Ad(i, r, o),
            u = i.currentIndex;
          if (i === n) r--, (n = n._nextRemoved);
          else if (((t = t._next), null == i.previousIndex)) r++;
          else {
            o || (o = []);
            const e = s - r,
              t = u - r;
            if (e != t) {
              for (let n = 0; n < e; n++) {
                const r = n < o.length ? o[n] : (o[n] = 0),
                  i = r + n;
                t <= i && i < e && (o[n] = r + 1);
              }
              o[i.previousIndex] = t - e;
            }
          }
          s !== u && e(i, s, u);
        }
      }
      forEachPreviousItem(e) {
        let t;
        for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
      }
      forEachAddedItem(e) {
        let t;
        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
      }
      forEachMovedItem(e) {
        let t;
        for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
      }
      forEachRemovedItem(e) {
        let t;
        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
      }
      forEachIdentityChange(e) {
        let t;
        for (
          t = this._identityChangesHead;
          null !== t;
          t = t._nextIdentityChange
        )
          e(t);
      }
      diff(e) {
        if ((null == e && (e = []), !Ea(e)))
          throw new Error(
            `Error trying to diff '${L(
              e
            )}'. Only arrays and iterables are allowed`
          );
        return this.check(e) ? this : null;
      }
      onDestroy() {}
      check(e) {
        this._reset();
        let t,
          n,
          r,
          o = this._itHead,
          i = !1;
        if (Array.isArray(e)) {
          this.length = e.length;
          for (let t = 0; t < this.length; t++)
            (n = e[t]),
              (r = this._trackByFn(t, n)),
              null !== o && Object.is(o.trackById, r)
                ? (i && (o = this._verifyReinsertion(o, n, r, t)),
                  Object.is(o.item, n) || this._addIdentityChange(o, n))
                : ((o = this._mismatch(o, n, r, t)), (i = !0)),
              (o = o._next);
        } else
          (t = 0),
            (function (e, t) {
              if (Array.isArray(e)) for (let n = 0; n < e.length; n++) t(e[n]);
              else {
                const n = e[wa()]();
                let r;
                for (; !(r = n.next()).done; ) t(r.value);
              }
            })(e, (e) => {
              (r = this._trackByFn(t, e)),
                null !== o && Object.is(o.trackById, r)
                  ? (i && (o = this._verifyReinsertion(o, e, r, t)),
                    Object.is(o.item, e) || this._addIdentityChange(o, e))
                  : ((o = this._mismatch(o, e, r, t)), (i = !0)),
                (o = o._next),
                t++;
            }),
            (this.length = t);
        return this._truncate(o), (this.collection = e), this.isDirty;
      }
      get isDirty() {
        return (
          null !== this._additionsHead ||
          null !== this._movesHead ||
          null !== this._removalsHead ||
          null !== this._identityChangesHead
        );
      }
      _reset() {
        if (this.isDirty) {
          let e;
          for (e = this._previousItHead = this._itHead; null !== e; e = e._next)
            e._nextPrevious = e._next;
          for (e = this._additionsHead; null !== e; e = e._nextAdded)
            e.previousIndex = e.currentIndex;
          for (
            this._additionsHead = this._additionsTail = null,
              e = this._movesHead;
            null !== e;
            e = e._nextMoved
          )
            e.previousIndex = e.currentIndex;
          (this._movesHead = this._movesTail = null),
            (this._removalsHead = this._removalsTail = null),
            (this._identityChangesHead = this._identityChangesTail = null);
        }
      }
      _mismatch(e, t, n, r) {
        let o;
        return (
          null === e ? (o = this._itTail) : ((o = e._prev), this._remove(e)),
          null !==
          (e =
            null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
            ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
              this._moveAfter(e, o, r))
            : null !==
              (e =
                null === this._unlinkedRecords
                  ? null
                  : this._unlinkedRecords.get(n, null))
            ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
              this._reinsertAfter(e, o, r))
            : (e = this._addAfter(new Od(t, n), o, r)),
          e
        );
      }
      _verifyReinsertion(e, t, n, r) {
        let o =
          null === this._unlinkedRecords
            ? null
            : this._unlinkedRecords.get(n, null);
        return (
          null !== o
            ? (e = this._reinsertAfter(o, e._prev, r))
            : e.currentIndex != r &&
              ((e.currentIndex = r), this._addToMoves(e, r)),
          e
        );
      }
      _truncate(e) {
        for (; null !== e; ) {
          const t = e._next;
          this._addToRemovals(this._unlink(e)), (e = t);
        }
        null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
          null !== this._additionsTail &&
            (this._additionsTail._nextAdded = null),
          null !== this._movesTail && (this._movesTail._nextMoved = null),
          null !== this._itTail && (this._itTail._next = null),
          null !== this._removalsTail &&
            (this._removalsTail._nextRemoved = null),
          null !== this._identityChangesTail &&
            (this._identityChangesTail._nextIdentityChange = null);
      }
      _reinsertAfter(e, t, n) {
        null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
        const r = e._prevRemoved,
          o = e._nextRemoved;
        return (
          null === r ? (this._removalsHead = o) : (r._nextRemoved = o),
          null === o ? (this._removalsTail = r) : (o._prevRemoved = r),
          this._insertAfter(e, t, n),
          this._addToMoves(e, n),
          e
        );
      }
      _moveAfter(e, t, n) {
        return (
          this._unlink(e), this._insertAfter(e, t, n), this._addToMoves(e, n), e
        );
      }
      _addAfter(e, t, n) {
        return (
          this._insertAfter(e, t, n),
          (this._additionsTail =
            null === this._additionsTail
              ? (this._additionsHead = e)
              : (this._additionsTail._nextAdded = e)),
          e
        );
      }
      _insertAfter(e, t, n) {
        const r = null === t ? this._itHead : t._next;
        return (
          (e._next = r),
          (e._prev = t),
          null === r ? (this._itTail = e) : (r._prev = e),
          null === t ? (this._itHead = e) : (t._next = e),
          null === this._linkedRecords && (this._linkedRecords = new Id()),
          this._linkedRecords.put(e),
          (e.currentIndex = n),
          e
        );
      }
      _remove(e) {
        return this._addToRemovals(this._unlink(e));
      }
      _unlink(e) {
        null !== this._linkedRecords && this._linkedRecords.remove(e);
        const t = e._prev,
          n = e._next;
        return (
          null === t ? (this._itHead = n) : (t._next = n),
          null === n ? (this._itTail = t) : (n._prev = t),
          e
        );
      }
      _addToMoves(e, t) {
        return (
          e.previousIndex === t ||
            (this._movesTail =
              null === this._movesTail
                ? (this._movesHead = e)
                : (this._movesTail._nextMoved = e)),
          e
        );
      }
      _addToRemovals(e) {
        return (
          null === this._unlinkedRecords && (this._unlinkedRecords = new Id()),
          this._unlinkedRecords.put(e),
          (e.currentIndex = null),
          (e._nextRemoved = null),
          null === this._removalsTail
            ? ((this._removalsTail = this._removalsHead = e),
              (e._prevRemoved = null))
            : ((e._prevRemoved = this._removalsTail),
              (this._removalsTail = this._removalsTail._nextRemoved = e)),
          e
        );
      }
      _addIdentityChange(e, t) {
        return (
          (e.item = t),
          (this._identityChangesTail =
            null === this._identityChangesTail
              ? (this._identityChangesHead = e)
              : (this._identityChangesTail._nextIdentityChange = e)),
          e
        );
      }
    }
    class Od {
      constructor(e, t) {
        (this.item = e),
          (this.trackById = t),
          (this.currentIndex = null),
          (this.previousIndex = null),
          (this._nextPrevious = null),
          (this._prev = null),
          (this._next = null),
          (this._prevDup = null),
          (this._nextDup = null),
          (this._prevRemoved = null),
          (this._nextRemoved = null),
          (this._nextAdded = null),
          (this._nextMoved = null),
          (this._nextIdentityChange = null);
      }
    }
    class xd {
      constructor() {
        (this._head = null), (this._tail = null);
      }
      add(e) {
        null === this._head
          ? ((this._head = this._tail = e),
            (e._nextDup = null),
            (e._prevDup = null))
          : ((this._tail._nextDup = e),
            (e._prevDup = this._tail),
            (e._nextDup = null),
            (this._tail = e));
      }
      get(e, t) {
        let n;
        for (n = this._head; null !== n; n = n._nextDup)
          if ((null === t || t <= n.currentIndex) && Object.is(n.trackById, e))
            return n;
        return null;
      }
      remove(e) {
        const t = e._prevDup,
          n = e._nextDup;
        return (
          null === t ? (this._head = n) : (t._nextDup = n),
          null === n ? (this._tail = t) : (n._prevDup = t),
          null === this._head
        );
      }
    }
    class Id {
      constructor() {
        this.map = new Map();
      }
      put(e) {
        const t = e.trackById;
        let n = this.map.get(t);
        n || ((n = new xd()), this.map.set(t, n)), n.add(e);
      }
      get(e, t) {
        const n = this.map.get(e);
        return n ? n.get(e, t) : null;
      }
      remove(e) {
        const t = e.trackById;
        return this.map.get(t).remove(e) && this.map.delete(t), e;
      }
      get isEmpty() {
        return 0 === this.map.size;
      }
      clear() {
        this.map.clear();
      }
    }
    function Ad(e, t, n) {
      const r = e.previousIndex;
      if (null === r) return r;
      let o = 0;
      return n && r < n.length && (o = n[r]), r + t + o;
    }
    class jd {
      constructor() {}
      supports(e) {
        return e instanceof Map || Sa(e);
      }
      create() {
        return new kd();
      }
    }
    class kd {
      constructor() {
        (this._records = new Map()),
          (this._mapHead = null),
          (this._appendAfter = null),
          (this._previousMapHead = null),
          (this._changesHead = null),
          (this._changesTail = null),
          (this._additionsHead = null),
          (this._additionsTail = null),
          (this._removalsHead = null),
          (this._removalsTail = null);
      }
      get isDirty() {
        return (
          null !== this._additionsHead ||
          null !== this._changesHead ||
          null !== this._removalsHead
        );
      }
      forEachItem(e) {
        let t;
        for (t = this._mapHead; null !== t; t = t._next) e(t);
      }
      forEachPreviousItem(e) {
        let t;
        for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
      }
      forEachChangedItem(e) {
        let t;
        for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
      }
      forEachAddedItem(e) {
        let t;
        for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
      }
      forEachRemovedItem(e) {
        let t;
        for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
      }
      diff(e) {
        if (e) {
          if (!(e instanceof Map || Sa(e)))
            throw new Error(
              `Error trying to diff '${L(
                e
              )}'. Only maps and objects are allowed`
            );
        } else e = new Map();
        return this.check(e) ? this : null;
      }
      onDestroy() {}
      check(e) {
        this._reset();
        let t = this._mapHead;
        if (
          ((this._appendAfter = null),
          this._forEach(e, (e, n) => {
            if (t && t.key === n)
              this._maybeAddToChanges(t, e),
                (this._appendAfter = t),
                (t = t._next);
            else {
              const r = this._getOrCreateRecordForKey(n, e);
              t = this._insertBeforeOrAppend(t, r);
            }
          }),
          t)
        ) {
          t._prev && (t._prev._next = null), (this._removalsHead = t);
          for (let e = t; null !== e; e = e._nextRemoved)
            e === this._mapHead && (this._mapHead = null),
              this._records.delete(e.key),
              (e._nextRemoved = e._next),
              (e.previousValue = e.currentValue),
              (e.currentValue = null),
              (e._prev = null),
              (e._next = null);
        }
        return (
          this._changesTail && (this._changesTail._nextChanged = null),
          this._additionsTail && (this._additionsTail._nextAdded = null),
          this.isDirty
        );
      }
      _insertBeforeOrAppend(e, t) {
        if (e) {
          const n = e._prev;
          return (
            (t._next = e),
            (t._prev = n),
            (e._prev = t),
            n && (n._next = t),
            e === this._mapHead && (this._mapHead = t),
            (this._appendAfter = e),
            e
          );
        }
        return (
          this._appendAfter
            ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
            : (this._mapHead = t),
          (this._appendAfter = t),
          null
        );
      }
      _getOrCreateRecordForKey(e, t) {
        if (this._records.has(e)) {
          const n = this._records.get(e);
          this._maybeAddToChanges(n, t);
          const r = n._prev,
            o = n._next;
          return (
            r && (r._next = o),
            o && (o._prev = r),
            (n._next = null),
            (n._prev = null),
            n
          );
        }
        const n = new Td(e);
        return (
          this._records.set(e, n),
          (n.currentValue = t),
          this._addToAdditions(n),
          n
        );
      }
      _reset() {
        if (this.isDirty) {
          let e;
          for (
            this._previousMapHead = this._mapHead, e = this._previousMapHead;
            null !== e;
            e = e._next
          )
            e._nextPrevious = e._next;
          for (e = this._changesHead; null !== e; e = e._nextChanged)
            e.previousValue = e.currentValue;
          for (e = this._additionsHead; null != e; e = e._nextAdded)
            e.previousValue = e.currentValue;
          (this._changesHead = this._changesTail = null),
            (this._additionsHead = this._additionsTail = null),
            (this._removalsHead = null);
        }
      }
      _maybeAddToChanges(e, t) {
        Object.is(t, e.currentValue) ||
          ((e.previousValue = e.currentValue),
          (e.currentValue = t),
          this._addToChanges(e));
      }
      _addToAdditions(e) {
        null === this._additionsHead
          ? (this._additionsHead = this._additionsTail = e)
          : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
      }
      _addToChanges(e) {
        null === this._changesHead
          ? (this._changesHead = this._changesTail = e)
          : ((this._changesTail._nextChanged = e), (this._changesTail = e));
      }
      _forEach(e, t) {
        e instanceof Map
          ? e.forEach(t)
          : Object.keys(e).forEach((n) => t(e[n], n));
      }
    }
    class Td {
      constructor(e) {
        (this.key = e),
          (this.previousValue = null),
          (this.currentValue = null),
          (this._nextPrevious = null),
          (this._next = null),
          (this._prev = null),
          (this._nextAdded = null),
          (this._nextRemoved = null),
          (this._nextChanged = null);
      }
    }
    let Rd = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (null != n) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (n) => {
                if (!n)
                  throw new Error(
                    "Cannot extend IterableDiffers without a parent injector"
                  );
                return e.create(t, n);
              },
              deps: [[e, new _(), new b()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (null != t) return t;
            throw new Error(
              `Cannot find a differ supporting object '${e}' of type '${
                ((n = e), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        return (
          (e.ɵprov = x({
            token: e,
            providedIn: "root",
            factory: () => new e([new Dd()]),
          })),
          e
        );
      })(),
      Fd = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (n) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (n) => {
                if (!n)
                  throw new Error(
                    "Cannot extend KeyValueDiffers without a parent injector"
                  );
                return e.create(t, n);
              },
              deps: [[e, new _(), new b()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (t) return t;
            throw new Error(`Cannot find a differ supporting object '${e}'`);
          }
        }
        return (
          (e.ɵprov = x({
            token: e,
            providedIn: "root",
            factory: () => new e([new jd()]),
          })),
          e
        );
      })();
    const Pd = [new jd()],
      Nd = new Rd([new Dd()]),
      Md = new Fd(Pd);
    let Ld = (() => {
      class e {}
      return (e.__NG_ELEMENT_ID__ = () => Ud(e, fd)), e;
    })();
    const Vd = function (e, t) {
        return ys(e, t, $t(), Ut());
      },
      Ud = Vd;
    let Bd = (() => {
      class e {}
      return (e.__NG_ELEMENT_ID__ = () => $d(e, fd)), e;
    })();
    const Hd = function (e, t) {
        return bs(e, t, $t(), Ut());
      },
      $d = Hd;
    function zd(e, t, n, r) {
      let o = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${t}'. Current value: '${n}'.`;
      return (
        r &&
          (o +=
            " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
        (function (e, t) {
          const n = new Error(e);
          return qd(n, t), n;
        })(o, e)
      );
    }
    function qd(e, t) {
      (e.ngDebugContext = t), (e.ngErrorLogger = t.logError.bind(t));
    }
    function Wd(e) {
      return new Error(
        "ViewDestroyedError: Attempt to use a destroyed view: " + e
      );
    }
    function Qd(e, t, n) {
      const r = e.state,
        o = 1792 & r;
      return o === t
        ? ((e.state = (-1793 & r) | n), (e.initIndex = -1), !0)
        : o === n;
    }
    function Gd(e, t, n) {
      return (
        (1792 & e.state) === t &&
        e.initIndex <= n &&
        ((e.initIndex = n + 1), !0)
      );
    }
    function Zd(e, t) {
      return e.nodes[t];
    }
    function Kd(e, t) {
      return e.nodes[t];
    }
    function Yd(e, t) {
      return e.nodes[t];
    }
    function Jd(e, t) {
      return e.nodes[t];
    }
    function Xd(e, t) {
      return e.nodes[t];
    }
    class ef {}
    const tf = {
        setCurrentNode: void 0,
        createRootView: void 0,
        createEmbeddedView: void 0,
        createComponentView: void 0,
        createNgModuleRef: void 0,
        overrideProvider: void 0,
        overrideComponentView: void 0,
        clearOverrides: void 0,
        checkAndUpdateView: void 0,
        checkNoChangesView: void 0,
        destroyView: void 0,
        resolveDep: void 0,
        createDebugContext: void 0,
        handleEvent: void 0,
        updateDirectives: void 0,
        updateRenderer: void 0,
        dirtyParentQueries: void 0,
      },
      nf = () => {},
      rf = new Map();
    function of(e) {
      let t = rf.get(e);
      return t || ((t = L(e) + "_" + rf.size), rf.set(e, t)), t;
    }
    function sf(e, t, n, r) {
      if (Da.isWrapped(r)) {
        r = Da.unwrap(r);
        const o = e.def.nodes[t].bindingIndex + n,
          i = Da.unwrap(e.oldValues[o]);
        e.oldValues[o] = new Da(i);
      }
      return r;
    }
    const uf = "$$undefined",
      af = "$$empty";
    function cf(e) {
      return {
        id: uf,
        styles: e.styles,
        encapsulation: e.encapsulation,
        data: e.data,
      };
    }
    let lf = 0;
    function df(e, t, n, r) {
      return !(!(2 & e.state) && Object.is(e.oldValues[t.bindingIndex + n], r));
    }
    function ff(e, t, n, r) {
      return !!df(e, t, n, r) && ((e.oldValues[t.bindingIndex + n] = r), !0);
    }
    function hf(e, t, n, r) {
      const o = e.oldValues[t.bindingIndex + n];
      if (1 & e.state || !Ca(o, r)) {
        const i = t.bindings[n].name;
        throw zd(
          tf.createDebugContext(e, t.nodeIndex),
          `${i}: ${o}`,
          `${i}: ${r}`,
          0 != (1 & e.state)
        );
      }
    }
    function pf(e) {
      let t = e;
      for (; t; )
        2 & t.def.flags && (t.state |= 8),
          (t = t.viewContainerParent || t.parent);
    }
    function gf(e, t) {
      let n = e;
      for (; n && n !== t; )
        (n.state |= 64), (n = n.viewContainerParent || n.parent);
    }
    function mf(e, t, n, r) {
      try {
        return (
          pf(33554432 & e.def.nodes[t].flags ? Kd(e, t).componentView : e),
          tf.handleEvent(e, t, n, r)
        );
      } catch (o) {
        e.root.errorHandler.handleError(o);
      }
    }
    function yf(e) {
      return e.parent ? Kd(e.parent, e.parentNodeDef.nodeIndex) : null;
    }
    function bf(e) {
      return e.parent ? e.parentNodeDef.parent : null;
    }
    function vf(e, t) {
      switch (201347067 & t.flags) {
        case 1:
          return Kd(e, t.nodeIndex).renderElement;
        case 2:
          return Zd(e, t.nodeIndex).renderText;
      }
    }
    function _f(e) {
      return !!e.parent && !!(32768 & e.parentNodeDef.flags);
    }
    function wf(e) {
      return !(!e.parent || 32768 & e.parentNodeDef.flags);
    }
    function Cf(e) {
      return 1 << e % 32;
    }
    function Df(e) {
      const t = {};
      let n = 0;
      const r = {};
      return (
        e &&
          e.forEach(([e, o]) => {
            "number" == typeof e ? ((t[e] = o), (n |= Cf(e))) : (r[e] = o);
          }),
        { matchedQueries: t, references: r, matchedQueryIds: n }
      );
    }
    function Ef(e, t) {
      return e.map((e) => {
        let n, r;
        return (
          Array.isArray(e) ? ([r, n] = e) : ((r = 0), (n = e)),
          n &&
            ("function" == typeof n || "object" == typeof n) &&
            t &&
            Object.defineProperty(n, ae, { value: t, configurable: !0 }),
          { flags: r, token: n, tokenKey: of(n) }
        );
      });
    }
    function Sf(e, t, n) {
      let r = n.renderParent;
      return r
        ? 0 == (1 & r.flags) ||
          0 == (33554432 & r.flags) ||
          (r.element.componentRendererType &&
            r.element.componentRendererType.encapsulation === Ne.Native)
          ? Kd(e, n.renderParent.nodeIndex).renderElement
          : void 0
        : t;
    }
    const Of = new WeakMap();
    function xf(e) {
      let t = Of.get(e);
      return t || ((t = e(() => nf)), (t.factory = e), Of.set(e, t)), t;
    }
    function If(e, t, n, r, o) {
      3 === t && (n = e.renderer.parentNode(vf(e, e.def.lastRenderRootNode))),
        Af(e, t, 0, e.def.nodes.length - 1, n, r, o);
    }
    function Af(e, t, n, r, o, i, s) {
      for (let u = n; u <= r; u++) {
        const n = e.def.nodes[u];
        11 & n.flags && kf(e, n, t, o, i, s), (u += n.childCount);
      }
    }
    function jf(e, t, n, r, o, i) {
      let s = e;
      for (; s && !_f(s); ) s = s.parent;
      const u = s.parent,
        a = bf(s),
        c = a.nodeIndex + a.childCount;
      for (let l = a.nodeIndex + 1; l <= c; l++) {
        const e = u.def.nodes[l];
        e.ngContentIndex === t && kf(u, e, n, r, o, i), (l += e.childCount);
      }
      if (!u.parent) {
        const s = e.root.projectableNodes[t];
        if (s) for (let t = 0; t < s.length; t++) Tf(e, s[t], n, r, o, i);
      }
    }
    function kf(e, t, n, r, o, i) {
      if (8 & t.flags) jf(e, t.ngContent.index, n, r, o, i);
      else {
        const s = vf(e, t);
        if (
          (3 === n && 33554432 & t.flags && 48 & t.bindingFlags
            ? (16 & t.bindingFlags && Tf(e, s, n, r, o, i),
              32 & t.bindingFlags &&
                Tf(Kd(e, t.nodeIndex).componentView, s, n, r, o, i))
            : Tf(e, s, n, r, o, i),
          16777216 & t.flags)
        ) {
          const s = Kd(e, t.nodeIndex).viewContainer._embeddedViews;
          for (let e = 0; e < s.length; e++) If(s[e], n, r, o, i);
        }
        1 & t.flags &&
          !t.element.name &&
          Af(e, n, t.nodeIndex + 1, t.nodeIndex + t.childCount, r, o, i);
      }
    }
    function Tf(e, t, n, r, o, i) {
      const s = e.renderer;
      switch (n) {
        case 1:
          s.appendChild(r, t);
          break;
        case 2:
          s.insertBefore(r, t, o);
          break;
        case 3:
          s.removeChild(r, t);
          break;
        case 0:
          i.push(t);
      }
    }
    const Rf = /^:([^:]+):(.+)$/;
    function Ff(e) {
      if (":" === e[0]) {
        const t = e.match(Rf);
        return [t[1], t[2]];
      }
      return ["", e];
    }
    function Pf(e) {
      let t = 0;
      for (let n = 0; n < e.length; n++) t |= e[n].flags;
      return t;
    }
    function Nf(e, t) {
      let n = "";
      for (let r = 0; r < 2 * e; r += 2) n = n + t[r] + Lf(t[r + 1]);
      return n + t[2 * e];
    }
    function Mf(e, t, n, r, o, i, s, u, a, c, l, d, f, h, p, g, m, y, b, v) {
      switch (e) {
        case 1:
          return t + Lf(n) + r;
        case 2:
          return t + Lf(n) + r + Lf(o) + i;
        case 3:
          return t + Lf(n) + r + Lf(o) + i + Lf(s) + u;
        case 4:
          return t + Lf(n) + r + Lf(o) + i + Lf(s) + u + Lf(a) + c;
        case 5:
          return t + Lf(n) + r + Lf(o) + i + Lf(s) + u + Lf(a) + c + Lf(l) + d;
        case 6:
          return (
            t +
            Lf(n) +
            r +
            Lf(o) +
            i +
            Lf(s) +
            u +
            Lf(a) +
            c +
            Lf(l) +
            d +
            Lf(f) +
            h
          );
        case 7:
          return (
            t +
            Lf(n) +
            r +
            Lf(o) +
            i +
            Lf(s) +
            u +
            Lf(a) +
            c +
            Lf(l) +
            d +
            Lf(f) +
            h +
            Lf(p) +
            g
          );
        case 8:
          return (
            t +
            Lf(n) +
            r +
            Lf(o) +
            i +
            Lf(s) +
            u +
            Lf(a) +
            c +
            Lf(l) +
            d +
            Lf(f) +
            h +
            Lf(p) +
            g +
            Lf(m) +
            y
          );
        case 9:
          return (
            t +
            Lf(n) +
            r +
            Lf(o) +
            i +
            Lf(s) +
            u +
            Lf(a) +
            c +
            Lf(l) +
            d +
            Lf(f) +
            h +
            Lf(p) +
            g +
            Lf(m) +
            y +
            Lf(b) +
            v
          );
        default:
          throw new Error("Does not support more than 9 expressions");
      }
    }
    function Lf(e) {
      return null != e ? e.toString() : "";
    }
    const Vf = [],
      Uf = {},
      Bf = {},
      Hf = of(iu),
      $f = of(ie),
      zf = of(Ce);
    function qf(e, t, n, r) {
      return (
        (n = H(n)),
        { index: -1, deps: Ef(r, L(t)), flags: e, token: t, value: n }
      );
    }
    function Wf(e) {
      const t = {},
        n = [];
      let r = null;
      for (let o = 0; o < e.length; o++) {
        const i = e[o];
        i.token === $s && (r = i.value),
          1073741824 & i.flags && n.push(i.token),
          (i.index = o),
          (t[of(i.token)] = i);
      }
      return {
        factory: null,
        providersByKey: t,
        providers: e,
        modules: n,
        scope: r,
      };
    }
    function Qf(e, t, n = iu.THROW_IF_NOT_FOUND) {
      const r = fe(e);
      try {
        if (8 & t.flags) return t.token;
        if ((2 & t.flags && (n = null), 1 & t.flags))
          return e._parent.get(t.token, n);
        const o = t.tokenKey;
        switch (o) {
          case Hf:
          case $f:
          case zf:
            return e;
        }
        const i = e._def.providersByKey[o];
        let s;
        if (i) {
          let t = e._providers[i.index];
          return (
            void 0 === t && (t = e._providers[i.index] = Gf(e, i)),
            t === Bf ? void 0 : t
          );
        }
        if (
          (s = j(t.token)) &&
          (function (e, t) {
            const n = t.providedIn;
            return (
              null != n &&
              ("any" === n ||
                n === e._def.scope ||
                (function (e, t) {
                  return e._def.modules.indexOf(t) > -1;
                })(e, n))
            );
          })(e, s)
        ) {
          const n = e._providers.length;
          return (
            (e._def.providers[n] = e._def.providersByKey[t.tokenKey] = {
              flags: 5120,
              value: s.factory,
              deps: [],
              index: n,
              token: t.token,
            }),
            (e._providers[n] = Bf),
            (e._providers[n] = Gf(e, e._def.providersByKey[t.tokenKey]))
          );
        }
        return 4 & t.flags ? n : e._parent.get(t.token, n);
      } finally {
        fe(r);
      }
    }
    function Gf(e, t) {
      let n;
      switch (201347067 & t.flags) {
        case 512:
          n = (function (e, t, n) {
            const r = n.length;
            switch (r) {
              case 0:
                return new t();
              case 1:
                return new t(Qf(e, n[0]));
              case 2:
                return new t(Qf(e, n[0]), Qf(e, n[1]));
              case 3:
                return new t(Qf(e, n[0]), Qf(e, n[1]), Qf(e, n[2]));
              default:
                const o = [];
                for (let t = 0; t < r; t++) o[t] = Qf(e, n[t]);
                return new t(...o);
            }
          })(e, t.value, t.deps);
          break;
        case 1024:
          n = (function (e, t, n) {
            const r = n.length;
            switch (r) {
              case 0:
                return t();
              case 1:
                return t(Qf(e, n[0]));
              case 2:
                return t(Qf(e, n[0]), Qf(e, n[1]));
              case 3:
                return t(Qf(e, n[0]), Qf(e, n[1]), Qf(e, n[2]));
              default:
                const o = [];
                for (let t = 0; t < r; t++) o[t] = Qf(e, n[t]);
                return t(...o);
            }
          })(e, t.value, t.deps);
          break;
        case 2048:
          n = Qf(e, t.deps[0]);
          break;
        case 256:
          n = t.value;
      }
      return (
        n === Bf ||
          null === n ||
          "object" != typeof n ||
          131072 & t.flags ||
          "function" != typeof n.ngOnDestroy ||
          (t.flags |= 131072),
        void 0 === n ? Bf : n
      );
    }
    function Zf(e, t) {
      const n = e.viewContainer._embeddedViews;
      if (((null == t || t >= n.length) && (t = n.length - 1), t < 0))
        return null;
      const r = n[t];
      return (
        (r.viewContainerParent = null),
        Ie(n, t),
        tf.dirtyParentQueries(r),
        Yf(r),
        r
      );
    }
    function Kf(e, t, n) {
      const r = t ? vf(t, t.def.lastRenderRootNode) : e.renderElement,
        o = n.renderer.parentNode(r),
        i = n.renderer.nextSibling(r);
      If(n, 2, o, i, void 0);
    }
    function Yf(e) {
      If(e, 3, null, null, void 0);
    }
    const Jf = {};
    function Xf(e, t, n, r, o, i) {
      return new th(e, t, n, r, o, i);
    }
    function eh(e) {
      return e.viewDefFactory;
    }
    class th extends id {
      constructor(e, t, n, r, o, i) {
        super(),
          (this.selector = e),
          (this.componentType = t),
          (this._inputs = r),
          (this._outputs = o),
          (this.ngContentSelectors = i),
          (this.viewDefFactory = n);
      }
      get inputs() {
        const e = [],
          t = this._inputs;
        for (let n in t) e.push({ propName: n, templateName: t[n] });
        return e;
      }
      get outputs() {
        const e = [];
        for (let t in this._outputs)
          e.push({ propName: t, templateName: this._outputs[t] });
        return e;
      }
      create(e, t, n, r) {
        if (!r) throw new Error("ngModule should be provided");
        const o = xf(this.viewDefFactory),
          i = o.nodes[0].element.componentProvider.nodeIndex,
          s = tf.createRootView(e, t || [], n, o, r, Jf),
          u = Yd(s, i).instance;
        return (
          n &&
            s.renderer.setAttribute(
              Kd(s, 0).renderElement,
              "ng-version",
              Cd.full
            ),
          new nh(s, new sh(s), u)
        );
      }
    }
    class nh extends od {
      constructor(e, t, n) {
        super(),
          (this._view = e),
          (this._viewRef = t),
          (this._component = n),
          (this._elDef = this._view.def.nodes[0]),
          (this.hostView = t),
          (this.changeDetectorRef = t),
          (this.instance = n);
      }
      get location() {
        return new fd(Kd(this._view, this._elDef.nodeIndex).renderElement);
      }
      get injector() {
        return new lh(this._view, this._elDef);
      }
      get componentType() {
        return this._component.constructor;
      }
      destroy() {
        this._viewRef.destroy();
      }
      onDestroy(e) {
        this._viewRef.onDestroy(e);
      }
    }
    function rh(e, t, n) {
      return new oh(e, t, n);
    }
    class oh {
      constructor(e, t, n) {
        (this._view = e),
          (this._elDef = t),
          (this._data = n),
          (this._embeddedViews = []);
      }
      get element() {
        return new fd(this._data.renderElement);
      }
      get injector() {
        return new lh(this._view, this._elDef);
      }
      get parentInjector() {
        let e = this._view,
          t = this._elDef.parent;
        for (; !t && e; ) (t = bf(e)), (e = e.parent);
        return e ? new lh(e, t) : new lh(this._view, null);
      }
      clear() {
        for (let e = this._embeddedViews.length - 1; e >= 0; e--) {
          const t = Zf(this._data, e);
          tf.destroyView(t);
        }
      }
      get(e) {
        const t = this._embeddedViews[e];
        if (t) {
          const e = new sh(t);
          return e.attachToViewContainerRef(this), e;
        }
        return null;
      }
      get length() {
        return this._embeddedViews.length;
      }
      createEmbeddedView(e, t, n) {
        const r = e.createEmbeddedView(t || {});
        return this.insert(r, n), r;
      }
      createComponent(e, t, n, r, o) {
        const i = n || this.parentInjector;
        o || e instanceof dd || (o = i.get(Ce));
        const s = e.create(i, r, void 0, o);
        return this.insert(s.hostView, t), s;
      }
      insert(e, t) {
        if (e.destroyed)
          throw new Error("Cannot insert a destroyed View in a ViewContainer!");
        const n = e;
        return (
          (function (e, t, n, r) {
            let o = t.viewContainer._embeddedViews;
            null == n && (n = o.length),
              (r.viewContainerParent = e),
              xe(o, n, r),
              (function (e, t) {
                const n = yf(t);
                if (!n || n === e || 16 & t.state) return;
                t.state |= 16;
                let r = n.template._projectedViews;
                r || (r = n.template._projectedViews = []),
                  r.push(t),
                  (function (e, t) {
                    if (4 & t.flags) return;
                    (e.nodeFlags |= 4), (t.flags |= 4);
                    let n = t.parent;
                    for (; n; ) (n.childFlags |= 4), (n = n.parent);
                  })(t.parent.def, t.parentNodeDef);
              })(t, r),
              tf.dirtyParentQueries(r),
              Kf(t, n > 0 ? o[n - 1] : null, r);
          })(this._view, this._data, t, n._view),
          n.attachToViewContainerRef(this),
          e
        );
      }
      move(e, t) {
        if (e.destroyed)
          throw new Error("Cannot move a destroyed View in a ViewContainer!");
        const n = this._embeddedViews.indexOf(e._view);
        return (
          (function (e, t, n) {
            const r = e.viewContainer._embeddedViews,
              o = r[t];
            Ie(r, t),
              null == n && (n = r.length),
              xe(r, n, o),
              tf.dirtyParentQueries(o),
              Yf(o),
              Kf(e, n > 0 ? r[n - 1] : null, o);
          })(this._data, n, t),
          e
        );
      }
      indexOf(e) {
        return this._embeddedViews.indexOf(e._view);
      }
      remove(e) {
        const t = Zf(this._data, e);
        t && tf.destroyView(t);
      }
      detach(e) {
        const t = Zf(this._data, e);
        return t ? new sh(t) : null;
      }
    }
    function ih(e) {
      return new sh(e);
    }
    class sh {
      constructor(e) {
        (this._view = e),
          (this._viewContainerRef = null),
          (this._appRef = null);
      }
      get rootNodes() {
        return (function (e) {
          const t = [];
          return If(e, 0, void 0, void 0, t), t;
        })(this._view);
      }
      get context() {
        return this._view.context;
      }
      get destroyed() {
        return 0 != (128 & this._view.state);
      }
      markForCheck() {
        pf(this._view);
      }
      detach() {
        this._view.state &= -5;
      }
      detectChanges() {
        const e = this._view.root.rendererFactory;
        e.begin && e.begin();
        try {
          tf.checkAndUpdateView(this._view);
        } finally {
          e.end && e.end();
        }
      }
      checkNoChanges() {
        tf.checkNoChangesView(this._view);
      }
      reattach() {
        this._view.state |= 4;
      }
      onDestroy(e) {
        this._view.disposables || (this._view.disposables = []),
          this._view.disposables.push(e);
      }
      destroy() {
        this._appRef
          ? this._appRef.detachView(this)
          : this._viewContainerRef &&
            this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
          tf.destroyView(this._view);
      }
      detachFromAppRef() {
        (this._appRef = null),
          Yf(this._view),
          tf.dirtyParentQueries(this._view);
      }
      attachToAppRef(e) {
        if (this._viewContainerRef)
          throw new Error("This view is already attached to a ViewContainer!");
        this._appRef = e;
      }
      attachToViewContainerRef(e) {
        if (this._appRef)
          throw new Error(
            "This view is already attached directly to the ApplicationRef!"
          );
        this._viewContainerRef = e;
      }
    }
    function uh(e, t) {
      return new ah(e, t);
    }
    class ah extends Ld {
      constructor(e, t) {
        super(), (this._parentView = e), (this._def = t);
      }
      createEmbeddedView(e) {
        return new sh(
          tf.createEmbeddedView(
            this._parentView,
            this._def,
            this._def.element.template,
            e
          )
        );
      }
      get elementRef() {
        return new fd(Kd(this._parentView, this._def.nodeIndex).renderElement);
      }
    }
    function ch(e, t) {
      return new lh(e, t);
    }
    class lh {
      constructor(e, t) {
        (this.view = e), (this.elDef = t);
      }
      get(e, t = iu.THROW_IF_NOT_FOUND) {
        return tf.resolveDep(
          this.view,
          this.elDef,
          !!this.elDef && 0 != (33554432 & this.elDef.flags),
          { flags: 0, token: e, tokenKey: of(e) },
          t
        );
      }
    }
    function dh(e, t) {
      const n = e.def.nodes[t];
      if (1 & n.flags) {
        const t = Kd(e, n.nodeIndex);
        return n.element.template ? t.template : t.renderElement;
      }
      if (2 & n.flags) return Zd(e, n.nodeIndex).renderText;
      if (20240 & n.flags) return Yd(e, n.nodeIndex).instance;
      throw new Error("Illegal state: read nodeValue for node index " + t);
    }
    function fh(e, t, n, r) {
      return new hh(e, t, n, r);
    }
    class hh {
      constructor(e, t, n, r) {
        (this._moduleType = e),
          (this._parent = t),
          (this._bootstrapComponents = n),
          (this._def = r),
          (this._destroyListeners = []),
          (this._destroyed = !1),
          (this.injector = this),
          (function (e) {
            const t = e._def,
              n = (e._providers = Ae(t.providers.length));
            for (let r = 0; r < t.providers.length; r++) {
              const o = t.providers[r];
              4096 & o.flags || (void 0 === n[r] && (n[r] = Gf(e, o)));
            }
          })(this);
      }
      get(e, t = iu.THROW_IF_NOT_FOUND, n = E.Default) {
        let r = 0;
        return (
          n & E.SkipSelf ? (r |= 1) : n & E.Self && (r |= 4),
          Qf(this, { token: e, tokenKey: of(e), flags: r }, t)
        );
      }
      get instance() {
        return this.get(this._moduleType);
      }
      get componentFactoryResolver() {
        return this.get(cd);
      }
      destroy() {
        if (this._destroyed)
          throw new Error(
            `The ng module ${L(
              this.instance.constructor
            )} has already been destroyed.`
          );
        (this._destroyed = !0),
          (function (e, t) {
            const n = e._def,
              r = new Set();
            for (let o = 0; o < n.providers.length; o++)
              if (131072 & n.providers[o].flags) {
                const t = e._providers[o];
                if (t && t !== Bf) {
                  const e = t.ngOnDestroy;
                  "function" != typeof e || r.has(t) || (e.apply(t), r.add(t));
                }
              }
          })(this),
          this._destroyListeners.forEach((e) => e());
      }
      onDestroy(e) {
        this._destroyListeners.push(e);
      }
    }
    const ph = of(yd),
      gh = of(fd),
      mh = of(Bd),
      yh = of(Ld),
      bh = of(_s),
      vh = of(iu),
      _h = of(ie);
    function wh(e, t, n, r, o, i, s, u) {
      const a = [];
      if (s)
        for (let l in s) {
          const [e, t] = s[l];
          a[e] = {
            flags: 8,
            name: l,
            nonMinifiedName: t,
            ns: null,
            securityContext: null,
            suffix: null,
          };
        }
      const c = [];
      if (u)
        for (let l in u)
          c.push({ type: 1, propName: l, target: null, eventName: u[l] });
      return Eh(e, (t |= 16384), n, r, o, o, i, a, c);
    }
    function Ch(e, t, n) {
      return Eh(-1, (e |= 16), null, 0, t, t, n);
    }
    function Dh(e, t, n, r, o) {
      return Eh(-1, e, t, 0, n, r, o);
    }
    function Eh(e, t, n, r, o, i, s, u, a) {
      const { matchedQueries: c, references: l, matchedQueryIds: d } = Df(n);
      a || (a = []), u || (u = []), (i = H(i));
      const f = Ef(s, L(o));
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: t,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: c,
        matchedQueryIds: d,
        references: l,
        ngContentIndex: -1,
        childCount: r,
        bindings: u,
        bindingFlags: Pf(u),
        outputs: a,
        element: null,
        provider: { token: o, value: i, deps: f },
        text: null,
        query: null,
        ngContent: null,
      };
    }
    function Sh(e, t) {
      return Ah(e, t);
    }
    function Oh(e, t) {
      let n = e;
      for (; n.parent && !_f(n); ) n = n.parent;
      return jh(n.parent, bf(n), !0, t.provider.value, t.provider.deps);
    }
    function xh(e, t) {
      const n = jh(
        e,
        t.parent,
        (32768 & t.flags) > 0,
        t.provider.value,
        t.provider.deps
      );
      if (t.outputs.length)
        for (let r = 0; r < t.outputs.length; r++) {
          const o = t.outputs[r],
            i = n[o.propName];
          if (!hc(i))
            throw new Error(
              `@Output ${o.propName} not initialized in '${n.constructor.name}'.`
            );
          {
            const n = i.subscribe(Ih(e, t.parent.nodeIndex, o.eventName));
            e.disposables[t.outputIndex + r] = n.unsubscribe.bind(n);
          }
        }
      return n;
    }
    function Ih(e, t, n) {
      return (r) => mf(e, t, n, r);
    }
    function Ah(e, t) {
      const n = (8192 & t.flags) > 0,
        r = t.provider;
      switch (201347067 & t.flags) {
        case 512:
          return jh(e, t.parent, n, r.value, r.deps);
        case 1024:
          return (function (e, t, n, r, o) {
            const i = o.length;
            switch (i) {
              case 0:
                return r();
              case 1:
                return r(Th(e, t, n, o[0]));
              case 2:
                return r(Th(e, t, n, o[0]), Th(e, t, n, o[1]));
              case 3:
                return r(
                  Th(e, t, n, o[0]),
                  Th(e, t, n, o[1]),
                  Th(e, t, n, o[2])
                );
              default:
                const s = [];
                for (let r = 0; r < i; r++) s.push(Th(e, t, n, o[r]));
                return r(...s);
            }
          })(e, t.parent, n, r.value, r.deps);
        case 2048:
          return Th(e, t.parent, n, r.deps[0]);
        case 256:
          return r.value;
      }
    }
    function jh(e, t, n, r, o) {
      const i = o.length;
      switch (i) {
        case 0:
          return new r();
        case 1:
          return new r(Th(e, t, n, o[0]));
        case 2:
          return new r(Th(e, t, n, o[0]), Th(e, t, n, o[1]));
        case 3:
          return new r(Th(e, t, n, o[0]), Th(e, t, n, o[1]), Th(e, t, n, o[2]));
        default:
          const s = [];
          for (let r = 0; r < i; r++) s.push(Th(e, t, n, o[r]));
          return new r(...s);
      }
    }
    const kh = {};
    function Th(e, t, n, r, o = iu.THROW_IF_NOT_FOUND) {
      if (8 & r.flags) return r.token;
      const i = e;
      2 & r.flags && (o = null);
      const s = r.tokenKey;
      s === bh && (n = !(!t || !t.element.componentView)),
        t && 1 & r.flags && ((n = !1), (t = t.parent));
      let u = e;
      for (; u; ) {
        if (t)
          switch (s) {
            case ph:
              return Rh(u, t, n).renderer;
            case gh:
              return new fd(Kd(u, t.nodeIndex).renderElement);
            case mh:
              return Kd(u, t.nodeIndex).viewContainer;
            case yh:
              if (t.element.template) return Kd(u, t.nodeIndex).template;
              break;
            case bh:
              return ih(Rh(u, t, n));
            case vh:
            case _h:
              return ch(u, t);
            default:
              const e = (n
                ? t.element.allProviders
                : t.element.publicProviders)[s];
              if (e) {
                let t = Yd(u, e.nodeIndex);
                return (
                  t ||
                    ((t = { instance: Ah(u, e) }), (u.nodes[e.nodeIndex] = t)),
                  t.instance
                );
              }
          }
        (n = _f(u)), (t = bf(u)), (u = u.parent), 4 & r.flags && (u = null);
      }
      const a = i.root.injector.get(r.token, kh);
      return a !== kh || o === kh
        ? a
        : i.root.ngModule.injector.get(r.token, o);
    }
    function Rh(e, t, n) {
      let r;
      if (n) r = Kd(e, t.nodeIndex).componentView;
      else for (r = e; r.parent && !_f(r); ) r = r.parent;
      return r;
    }
    function Fh(e, t, n, r, o, i) {
      if (32768 & n.flags) {
        const t = Kd(e, n.parent.nodeIndex).componentView;
        2 & t.def.flags && (t.state |= 8);
      }
      if (((t.instance[n.bindings[r].name] = o), 524288 & n.flags)) {
        i = i || {};
        const t = Da.unwrap(e.oldValues[n.bindingIndex + r]);
        i[n.bindings[r].nonMinifiedName] = new lt(t, o, 0 != (2 & e.state));
      }
      return (e.oldValues[n.bindingIndex + r] = o), i;
    }
    function Ph(e, t) {
      if (!(e.def.nodeFlags & t)) return;
      const n = e.def.nodes;
      let r = 0;
      for (let o = 0; o < n.length; o++) {
        const i = n[o];
        let s = i.parent;
        for (
          !s && i.flags & t && Mh(e, o, i.flags & t, r++),
            0 == (i.childFlags & t) && (o += i.childCount);
          s && 1 & s.flags && o === s.nodeIndex + s.childCount;

        )
          s.directChildFlags & t && (r = Nh(e, s, t, r)), (s = s.parent);
      }
    }
    function Nh(e, t, n, r) {
      for (let o = t.nodeIndex + 1; o <= t.nodeIndex + t.childCount; o++) {
        const t = e.def.nodes[o];
        t.flags & n && Mh(e, o, t.flags & n, r++), (o += t.childCount);
      }
      return r;
    }
    function Mh(e, t, n, r) {
      const o = Yd(e, t);
      if (!o) return;
      const i = o.instance;
      i &&
        (tf.setCurrentNode(e, t),
        1048576 & n && Gd(e, 512, r) && i.ngAfterContentInit(),
        2097152 & n && i.ngAfterContentChecked(),
        4194304 & n && Gd(e, 768, r) && i.ngAfterViewInit(),
        8388608 & n && i.ngAfterViewChecked(),
        131072 & n && i.ngOnDestroy());
    }
    class Lh extends cd {
      constructor(e) {
        super(), (this.ngModule = e);
      }
      resolveComponentFactory(e) {
        const t = Ke(e);
        return new Bh(t, this.ngModule);
      }
    }
    function Vh(e) {
      const t = [];
      for (let n in e)
        e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
      return t;
    }
    const Uh = new oe("SCHEDULER_TOKEN", {
      providedIn: "root",
      factory: () => Ln,
    });
    class Bh extends id {
      constructor(e, t) {
        super(),
          (this.componentDef = e),
          (this.ngModule = t),
          (this.componentType = e.type),
          (this.selector = e.selectors.map(Fo).join(",")),
          (this.ngContentSelectors = e.ngContentSelectors
            ? e.ngContentSelectors
            : []),
          (this.isBoundToModule = !!t);
      }
      get inputs() {
        return Vh(this.componentDef.inputs);
      }
      get outputs() {
        return Vh(this.componentDef.outputs);
      }
      create(e, t, n, r) {
        const o = (r = r || this.ngModule)
            ? (function (e, t) {
                return {
                  get: (n, r, o) => {
                    const i = e.get(n, kh, o);
                    return i !== kh || r === kh ? i : t.get(n, r, o);
                  },
                };
              })(e, r.injector)
            : e,
          i = o.get(gd, Ct),
          s = o.get(_d, null),
          u = i.createRenderer(null, this.componentDef),
          a = this.componentDef.selectors[0][0] || "div",
          c = n
            ? ci(u, n, this.componentDef.encapsulation)
            : Yo(
                a,
                i.createRenderer(null, this.componentDef),
                (function (e) {
                  const t = e.toLowerCase();
                  return "svg" === t ? mt : "math" === t ? yt : null;
                })(a)
              ),
          l = this.componentDef.onPush ? 576 : 528,
          d = aa(),
          f = ai(0, null, null, 1, 0, null, null, null, null, null),
          h = Jo(null, f, d, l, null, null, i, u, s, o);
        let p, g;
        un(h);
        try {
          const e = sa(c, this.componentDef, h, i, u);
          if (c)
            if (n) In(u, c, ["ng-version", Cd.full]);
            else {
              const { attrs: e, classes: t } = (function (e) {
                const t = [],
                  n = [];
                let r = 1,
                  o = 2;
                for (; r < e.length; ) {
                  let i = e[r];
                  if ("string" == typeof i)
                    2 === o
                      ? "" !== i && t.push(i, e[++r])
                      : 8 === o && n.push(i);
                  else {
                    if (!Ao(o)) break;
                    o = i;
                  }
                  r++;
                }
                return { attrs: t, classes: n };
              })(this.componentDef.selectors[0]);
              e && In(u, c, e), t && t.length > 0 && cs(u, c, t.join(" "));
            }
          if (((g = Ot(f, 0)), void 0 !== t)) {
            const e = (g.projection = []);
            for (let n = 0; n < this.ngContentSelectors.length; n++) {
              const r = t[n];
              e.push(null != r ? Array.from(r) : null);
            }
          }
          (p = ua(e, this.componentDef, h, d, [ca])), ei(f, h, null);
        } finally {
          fn();
        }
        return new Hh(this.componentType, p, ms(fd, g, h), h, g);
      }
    }
    class Hh extends od {
      constructor(e, t, n, r, o) {
        super(),
          (this.location = n),
          (this._rootLView = r),
          (this._tNode = o),
          (this.destroyCbs = []),
          (this.instance = t),
          (this.hostView = this.changeDetectorRef = new ds(r)),
          (this.componentType = e);
      }
      get injector() {
        return new ir(this._tNode, this._rootLView);
      }
      destroy() {
        this.destroyCbs &&
          (this.destroyCbs.forEach((e) => e()),
          (this.destroyCbs = null),
          !this.hostView.destroyed && this.hostView.destroy());
      }
      onDestroy(e) {
        this.destroyCbs && this.destroyCbs.push(e);
      }
    }
    const $h = void 0;
    var zh = [
      "en",
      [["a", "p"], ["AM", "PM"], $h],
      [["AM", "PM"], $h, $h],
      [
        ["S", "M", "T", "W", "T", "F", "S"],
        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      ],
      $h,
      [
        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      ],
      $h,
      [
        ["B", "A"],
        ["BC", "AD"],
        ["Before Christ", "Anno Domini"],
      ],
      0,
      [6, 0],
      ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
      ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
      ["{1}, {0}", $h, "{1} 'at' {0}", $h],
      [
        ".",
        ",",
        ";",
        "%",
        "+",
        "-",
        "E",
        "\xd7",
        "\u2030",
        "\u221e",
        "NaN",
        ":",
      ],
      ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
      "USD",
      "$",
      "US Dollar",
      {},
      "ltr",
      function (e) {
        let t = Math.floor(Math.abs(e)),
          n = e.toString().replace(/^[^.]*\.?/, "").length;
        return 1 === t && 0 === n ? 1 : 5;
      },
    ];
    let qh = {};
    function Wh(e, t, n) {
      "string" != typeof t && ((n = t), (t = e[Jh.LocaleId])),
        (t = t.toLowerCase().replace(/_/g, "-")),
        (qh[t] = e),
        n && (qh[t][Jh.ExtraData] = n);
    }
    function Qh(e) {
      const t = (function (e) {
        return e.toLowerCase().replace(/_/g, "-");
      })(e);
      let n = Kh(t);
      if (n) return n;
      const r = t.split("-")[0];
      if (((n = Kh(r)), n)) return n;
      if ("en" === r) return zh;
      throw new Error(`Missing locale data for the locale "${e}".`);
    }
    function Gh(e) {
      return Qh(e)[Jh.CurrencyCode] || null;
    }
    function Zh(e) {
      return Qh(e)[Jh.PluralCase];
    }
    function Kh(e) {
      return (
        e in qh ||
          (qh[e] =
            G.ng &&
            G.ng.common &&
            G.ng.common.locales &&
            G.ng.common.locales[e]),
        qh[e]
      );
    }
    function Yh() {
      qh = {};
    }
    var Jh = (function (e) {
      return (
        (e[(e.LocaleId = 0)] = "LocaleId"),
        (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (e[(e.DaysFormat = 3)] = "DaysFormat"),
        (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
        (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
        (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
        (e[(e.Eras = 7)] = "Eras"),
        (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (e[(e.WeekendRange = 9)] = "WeekendRange"),
        (e[(e.DateFormat = 10)] = "DateFormat"),
        (e[(e.TimeFormat = 11)] = "TimeFormat"),
        (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
        (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
        (e[(e.NumberFormats = 14)] = "NumberFormats"),
        (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
        (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
        (e[(e.CurrencyName = 17)] = "CurrencyName"),
        (e[(e.Currencies = 18)] = "Currencies"),
        (e[(e.Directionality = 19)] = "Directionality"),
        (e[(e.PluralCase = 20)] = "PluralCase"),
        (e[(e.ExtraData = 21)] = "ExtraData"),
        e
      );
    })({});
    const Xh = ["zero", "one", "two", "few", "many"],
      ep = "en-US",
      tp = "USD";
    let np = ep;
    function rp(e) {
      var t, n;
      (n = "Expected localeId to be defined"),
        null == (t = e) &&
          (function (e, t, n, r) {
            throw new Error(
              "ASSERTION ERROR: " + e + ` [Expected=> null != ${t} <=Actual]`
            );
          })(n, t),
        "string" == typeof e && (np = e.toLowerCase().replace(/_/g, "-"));
    }
    const op = { marker: "element" },
      ip = { marker: "comment" },
      sp = [];
    let up = -1,
      ap = 0,
      cp = 0;
    function lp(e, t, n, r) {
      const o = r[11];
      let i = null,
        s = null;
      const u = [];
      for (let a = 0; a < n.length; a++) {
        const c = n[a];
        if ("string" == typeof c) {
          const t = $i(c, o),
            l = n[++a];
          (s = i), (i = yp(e, r, l, 2, t, null)), u.push(l), Wt();
        } else if ("number" == typeof c)
          switch (7 & c) {
            case 1:
              const o = c >>> 17;
              let l;
              (l = o === t ? r[6] : Ot(e, o)), (s = gp(e, i, l, s, r));
              break;
            case 0:
              const d = c >= 0,
                f = (d ? c : ~c) >>> 3;
              u.push(f), (s = i), (i = Ot(e, f)), i && zt(i, d);
              break;
            case 5:
              (s = i = Ot(e, c >>> 3)), zt(i, !1);
              break;
            case 4:
              const h = n[++a],
                p = n[++a];
              Di(Ot(e, c >>> 3), r, h, p, null, null);
              break;
            default:
              throw new Error(
                `Unable to determine the type of mutate operation for "${c}"`
              );
          }
        else
          switch (c) {
            case ip:
              const t = n[++a],
                l = n[++a],
                d = o.createComment(t);
              (s = i), (i = yp(e, r, l, 4, d, null)), u.push(l), bo(d, r), Wt();
              break;
            case op:
              const f = n[++a],
                h = n[++a];
              (s = i), (i = yp(e, r, h, 2, o.createElement(f), f)), u.push(h);
              break;
            default:
              throw new Error(
                `Unable to determine the type of mutate operation for "${c}"`
              );
          }
      }
      return Wt(), u;
    }
    function dp(e, t, n, r, o, i) {
      let s = !1;
      for (let u = 0; u < r.length; u++) {
        const a = r[u],
          c = r[++u];
        if (a & i) {
          let i = "";
          for (let a = u + 1; a <= u + c; a++) {
            const u = r[a];
            if ("string" == typeof u) i += u;
            else if ("number" == typeof u)
              if (u < 0) i += Nn(n[o - u]);
              else {
                const c = u >>> 2;
                switch (3 & u) {
                  case 1:
                    const u = r[++a],
                      l = r[++a];
                    fi(e, Ot(e, c), n, u, i, n[11], l, !1);
                    break;
                  case 0:
                    Bi(n, c, i);
                    break;
                  case 2:
                    s = hp(e, t, r[++a], n, i);
                    break;
                  case 3:
                    fp(e, t, r[++a], o, n, s);
                }
              }
          }
        }
        u += c;
      }
    }
    function fp(e, t, n, r, o, i) {
      const s = t[n],
        u = o[s.currentCaseLViewIndex];
      null !== u && dp(e, t, o, s.update[u], r, i ? -1 : ap);
    }
    function hp(e, t, n, r, o) {
      pp(e, t, n, r);
      let i = !1;
      const s = t[n],
        u = (function (e, t) {
          let n = e.cases.indexOf(t);
          if (-1 === n)
            switch (e.type) {
              case 1: {
                const r = (function (e, t) {
                  const n = Zh(t)(parseInt(e, 10)),
                    r = Xh[n];
                  return void 0 !== r ? r : "other";
                })(t, np);
                (n = e.cases.indexOf(r)),
                  -1 === n && "other" !== r && (n = e.cases.indexOf("other"));
                break;
              }
              case 0:
                n = e.cases.indexOf("other");
            }
          return n;
        })(s, o);
      return (
        (r[s.currentCaseLViewIndex] = -1 !== u ? u : null),
        u > -1 && (lp(e, -1, s.create[u], r), (i = !0)),
        i
      );
    }
    function pp(e, t, n, r) {
      const o = t[n],
        i = r[o.currentCaseLViewIndex];
      if (null !== i) {
        const n = o.remove[i];
        for (let o = 0; o < n.length; o++) {
          const i = n[o],
            s = i >>> 3;
          switch (7 & i) {
            case 3:
              mp(e, r, s, !1);
              break;
            case 6:
              pp(e, t, s, r);
          }
        }
      }
    }
    function gp(e, t, n, r, o) {
      const i = t.next;
      r || (r = n),
        r === n && t !== n.child
          ? ((t.next = n.child),
            null === t.parent ? (e.firstChild = t) : (n.child = t))
          : r !== n && t !== r.next
          ? ((t.next = r.next), (r.next = t))
          : (t.next = null),
        n !== o[6] && (t.parent = n);
      let s = t.next;
      for (; s; ) s.next === t && (s.next = i), (s = s.next);
      if (1 === t.type) return ss(e, o, t), t;
      es(e, o, St(t, o), t);
      const u = o[t.index];
      return 0 !== t.type && ot(u) && es(e, o, u[7], t), t;
    }
    function mp(e, t, n, r) {
      const o = Ot(e, n),
        i = Et(n, t);
      i && rs(t[11], i);
      const s = xt(t, n);
      if (ot(s)) {
        const e = s;
        0 !== o.type && rs(t[11], e[7]);
      }
      r && o && (o.flags |= 64);
    }
    function yp(e, t, n, r, o, i) {
      const s = $t();
      t[n + tt] = o;
      const u = Xo(e, n, r, i, null);
      return s && s.next === u && (s.next = null), u;
    }
    const bp = /\ufffd(\d+):?\d*\ufffd/gi,
      vp = /({\s*\ufffd\d+:?\d*\ufffd\s*,\s*\S{6}\s*,[\s\S]*})/gi,
      _p = /\ufffd(\d+)\ufffd/,
      wp = /^\s*(\ufffd\d+:?\d*\ufffd)\s*,\s*(select|plural)\s*,/;
    let Cp;
    const Dp = [],
      Ep = /\ufffd\/?\*(\d+:\d+)\ufffd/gi,
      Sp = /\ufffd(\/?[#*!]\d+):?\d*\ufffd/gi,
      Op = /\uE500/g;
    function xp(e, t, n, r = null) {
      const o = [null, null],
        i = e.split(bp);
      let s = 0;
      for (let u = 0; u < i.length; u++) {
        const e = i[u];
        if (1 & u) {
          const t = parseInt(e, 10);
          o.push(-1 - t), (s |= jp(t));
        } else "" !== e && o.push(e);
      }
      return (
        o.push((t << 2) | (n ? 1 : 0)),
        n && o.push(n, r),
        (o[0] = s),
        (o[1] = o.length - 2),
        o
      );
    }
    function Ip(e, t = 0) {
      let n;
      t |= jp(e.mainBinding);
      for (let r = 0; r < e.values.length; r++) {
        const o = e.values[r];
        for (let e = 0; e < o.length; e++) {
          const r = o[e];
          if ("string" == typeof r)
            for (; (n = bp.exec(r)); ) t |= jp(parseInt(n[1], 10));
          else t = Ip(r, t);
        }
      }
      return t;
    }
    function Ap(e) {
      return e + Cp++;
    }
    function jp(e) {
      return 1 << Math.min(e, 31);
    }
    function kp(e) {
      return void 0 === e;
    }
    function Tp(e) {
      let t,
        n,
        r = "",
        o = 0,
        i = !1;
      for (; null !== (t = Ep.exec(e)); )
        i
          ? t[0] === `\ufffd/*${n}\ufffd` && ((o = t.index), (i = !1))
          : ((r += e.substring(o, t.index + t[0].length)),
            (n = t[1]),
            (i = !0));
      return (r += e.substr(o)), r;
    }
    function Rp(e, t, n, r) {
      const o = [],
        i = [],
        s = [],
        u = [],
        a = [],
        c = t.values;
      for (let l = 0; l < c.length; l++) {
        const t = c[l],
          d = [];
        for (let e = 0; e < t.length; e++) {
          const n = t[e];
          if ("string" != typeof n) {
            const r = d.push(n) - 1;
            t[e] = `\x3c!--\ufffd${r}\ufffd--\x3e`;
          }
        }
        const f = Pp(t.join(""), n, d, e, r);
        o.push(f.create),
          i.push(f.remove),
          s.push(f.update),
          u.push(f.vars),
          a.push(f.childIcus);
      }
      e.push({
        type: t.type,
        vars: u,
        currentCaseLViewIndex: tt + r + 1,
        childIcus: a,
        cases: t.cases,
        create: o,
        remove: i,
        update: s,
      }),
        (Cp += Math.max(...u));
    }
    function Fp(e) {
      const t = [],
        n = [];
      let r = 1,
        o = 0;
      const i = Np(
        (e = e.replace(wp, function (e, t, n) {
          return (
            (r = "select" === n ? 0 : 1), (o = parseInt(t.substr(1), 10)), ""
          );
        }))
      );
      for (let s = 0; s < i.length; ) {
        let e = i[s++].trim();
        1 === r && (e = e.replace(/\s*(?:=)?(\w+)\s*/, "$1")),
          e.length && t.push(e);
        const o = Np(i[s++]);
        t.length > n.length && n.push(o);
      }
      return { type: r, mainBinding: o, cases: t, values: n };
    }
    function Pp(e, t, n, r, o) {
      const i = Tr(_t()).getInertBodyElement(e);
      if (!i) throw new Error("Unable to generate inert body element");
      const s = { vars: 1, childIcus: [], create: [], remove: [], update: [] };
      return Mp((no(i) || i).firstChild, s, t, n, r, o), s;
    }
    function Np(e) {
      if (!e) return [];
      let t = 0;
      const n = [],
        r = [],
        o = /[{}]/g;
      let i;
      for (o.lastIndex = 0; (i = o.exec(e)); ) {
        const o = i.index;
        if ("}" == i[0]) {
          if ((n.pop(), 0 == n.length)) {
            const n = e.substring(t, o);
            wp.test(n) ? r.push(Fp(n)) : r.push(n), (t = o + 1);
          }
        } else {
          if (0 == n.length) {
            const n = e.substring(t, o);
            r.push(n), (t = o + 1);
          }
          n.push("{");
        }
      }
      const s = e.substring(t);
      return r.push(s), r;
    }
    function Mp(e, t, n, r, o, i) {
      if (e) {
        const s = [];
        for (; e; ) {
          const u = e.nextSibling,
            a = i + ++t.vars;
          switch (e.nodeType) {
            case Node.ELEMENT_NODE:
              const u = e,
                c = u.tagName.toLowerCase();
              if (qr.hasOwnProperty(c)) {
                t.create.push(op, c, a, (n << 17) | 1);
                const s = u.attributes;
                for (let e = 0; e < s.length; e++) {
                  const n = s.item(e),
                    r = n.name.toLowerCase();
                  n.value.match(bp)
                    ? Gr.hasOwnProperty(r) &&
                      Ee(
                        Wr[r]
                          ? xp(n.value, a, n.name, Mr)
                          : Qr[r]
                          ? xp(n.value, a, n.name, Lr)
                          : xp(n.value, a, n.name),
                        t.update
                      )
                    : t.create.push((a << 3) | 4, n.name, n.value);
                }
                Mp(e.firstChild, t, a, r, o, i), t.remove.push((a << 3) | 3);
              } else t.vars--;
              break;
            case Node.TEXT_NODE:
              const l = e.textContent || "",
                d = l.match(bp);
              t.create.push(d ? "" : l, a, (n << 17) | 1),
                t.remove.push((a << 3) | 3),
                d && Ee(xp(l, a), t.update);
              break;
            case Node.COMMENT_NODE:
              const f = _p.exec(e.textContent || "");
              if (f) {
                const e = parseInt(f[1], 10);
                t.create.push(ip, "", a, (n << 17) | 1), s.push([r[e], a]);
              } else t.vars--;
              break;
            default:
              t.vars--;
          }
          e = u;
        }
        for (let e = 0; e < s.length; e++) {
          const n = s[e][0],
            r = s[e][1];
          Rp(o, n, r, i + t.vars);
          const u = o.length - 1;
          (t.vars += Math.max(...o[u].vars)), t.childIcus.push(u);
          const a = Ip(n);
          t.update.push(
            jp(n.mainBinding),
            3,
            -1 - n.mainBinding,
            (r << 2) | 2,
            u,
            a,
            2,
            (r << 2) | 3,
            u
          ),
            t.remove.push((u << 3) | 6, (r << 3) | 3);
        }
      }
    }
    const Lp = /\[(\ufffd.+?\ufffd?)\]/,
      Vp = /\[(\ufffd.+?\ufffd?)\]|(\ufffd\/?\*\d+:\d+\ufffd)/g,
      Up = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g,
      Bp = /{([A-Z0-9_]+)}/g,
      Hp = /\ufffdI18N_EXP_(ICU(_\d+)?)\ufffd/g,
      $p = /\/\*/,
      zp = /\d+\:(\d+)/;
    function qp(e, t = {}) {
      let n = e;
      if (Lp.test(e)) {
        const e = {},
          t = [0];
        n = n.replace(Vp, (n, r, o) => {
          const i = r || o,
            s = e[i] || [];
          if (
            (s.length ||
              (i.split("|").forEach((e) => {
                const t = e.match(zp),
                  n = t ? parseInt(t[1], 10) : 0,
                  r = $p.test(e);
                s.push([n, r, e]);
              }),
              (e[i] = s)),
            !s.length)
          )
            throw new Error("i18n postprocess: unmatched placeholder - " + i);
          const u = t[t.length - 1];
          let a = 0;
          for (let e = 0; e < s.length; e++)
            if (s[e][0] === u) {
              a = e;
              break;
            }
          const [c, l, d] = s[a];
          return l ? t.pop() : u !== c && t.push(c), s.splice(a, 1), d;
        });
      }
      return Object.keys(t).length
        ? ((n = n.replace(Up, (e, n, r, o, i, s) =>
            t.hasOwnProperty(r) ? `${n}${t[r]}${s}` : e
          )),
          (n = n.replace(Bp, (e, n) => (t.hasOwnProperty(n) ? t[n] : e))),
          (n = n.replace(Hp, (e, n) => {
            if (t.hasOwnProperty(n)) {
              const r = t[n];
              if (!r.length)
                throw new Error(
                  `i18n postprocess: unmatched ICU - ${e} with key: ${n}`
                );
              return r.shift();
            }
            return e;
          })),
          n)
        : n;
    }
    function Wp(e, t, n) {
      const r = Bt(),
        o = Rt(r.consts, t);
      !(function (e) {
        sp[++up] = e;
      })(e),
        Dc(!0),
        r.firstCreatePass &&
          null === r.data[e + tt] &&
          (function (e, t, n, r, o) {
            const i = t.blueprint.length - tt;
            Cp = 0;
            const s = $t(),
              u = qt() ? s : s && s.parent;
            let a = u && u !== e[6] ? u.index - tt : n,
              c = 0;
            Dp[c] = a;
            const l = [];
            if (n > 0 && s !== u) {
              let e = s.index - tt;
              qt() || (e = ~e), l.push((e << 3) | 0);
            }
            const d = [],
              f = [];
            if ("" === r && kp(o)) l.push(r, Ap(i), (a << 17) | 1);
            else {
              const e = (function (e, t) {
                  if (kp(t)) return Tp(e);
                  {
                    const n =
                        e.indexOf(`:${t}\ufffd`) + 2 + t.toString().length,
                      r = e.search(new RegExp(`\ufffd\\/\\*\\d+:${t}\ufffd`));
                    return Tp(e.substring(n, r));
                  }
                })(r, o),
                t = ((h = e), h.replace(Op, " ")).split(Sp);
              for (let n = 0; n < t.length; n++) {
                let r = t[n];
                if (1 & n)
                  if ("/" === r.charAt(0)) {
                    if ("#" === r.charAt(1)) {
                      const e = parseInt(r.substr(2), 10);
                      (a = Dp[--c]), l.push((e << 3) | 5);
                    }
                  } else {
                    const e = parseInt(r.substr(1), 10),
                      t = "#" === r.charAt(0);
                    l.push(((t ? e : ~e) << 3) | 0, (a << 17) | 1),
                      t && (Dp[++c] = a = e);
                  }
                else {
                  const t = Np(r);
                  for (let n = 0; n < t.length; n++)
                    if (1 & n) {
                      const r = t[n];
                      if ("object" != typeof r)
                        throw new Error(
                          `Unable to parse ICU expression in "${e}" message.`
                        );
                      const o = Ap(i);
                      l.push(ip, "", o, (a << 17) | 1);
                      const s = Ip(r);
                      Rp(f, r, o, o);
                      const u = f.length - 1;
                      d.push(
                        jp(r.mainBinding),
                        3,
                        -1 - r.mainBinding,
                        (o << 2) | 2,
                        u,
                        s,
                        2,
                        (o << 2) | 3,
                        u
                      );
                    } else if ("" !== t[n]) {
                      const e = t[n],
                        r = e.match(bp),
                        o = Ap(i);
                      l.push(r ? "" : e, o, (a << 17) | 1),
                        r && Ee(xp(e, o), d);
                    }
                }
              }
            }
            var h;
            Cp > 0 &&
              (function (e, t, n) {
                if (n > 0 && e.firstCreatePass) {
                  for (let r = 0; r < n; r++)
                    e.blueprint.push(null), e.data.push(null), t.push(null);
                  e.expandoInstructions
                    ? e.expandoInstructions.push(n)
                    : (e.expandoStartIndex += n);
                }
              })(t, e, Cp),
              (t.data[n + tt] = {
                vars: Cp,
                create: l,
                update: d,
                icus: f.length ? f : null,
              });
          })(Ut(), r, e, o, n);
    }
    function Qp() {
      const e = Ut();
      (function (e, t) {
        const n = sp[up--],
          r = e.data[n + tt],
          o = $t(),
          i = lp(e, n, r.create, t);
        let s = n + 1;
        for (; null !== o && s <= o.index - tt; ) {
          -1 === i.indexOf(s) && mp(e, t, s, !0);
          const n = Ot(e, s);
          !n ||
            (0 !== n.type && 2 !== n.type && 3 !== n.type) ||
            null === n.localNames ||
            (s += n.localNames.length >> 1),
            s++;
        }
      })(Bt(), e),
        Dc(!1);
    }
    function Gp(e, t, n) {
      Wp(e, t, n), Qp();
    }
    function Zp(e, t) {
      const n = Ut(),
        r = Bt();
      !(function (e, t, n, r) {
        const o = $t().index - tt,
          i = [];
        for (let s = 0; s < r.length; s += 2) {
          const u = r[s],
            a = r[s + 1].split(vp);
          for (let r = 0; r < a.length; r++) {
            const s = a[r];
            if (1 & r)
              throw new Error(
                "ICU expressions are not yet supported in attributes"
              );
            if ("" !== s)
              if (s.match(bp))
                t.firstCreatePass &&
                  null === t.data[n + tt] &&
                  Ee(xp(s, o, u), i);
              else {
                const n = Ot(t, o);
                2 === n.type && Di(n, e, u, s, null, null);
                const r = null !== n.inputs && n.inputs[u];
                r && Ui(t, e, r, u, s);
              }
          }
        }
        t.firstCreatePass && null === t.data[n + tt] && (t.data[n + tt] = i);
      })(n, r, e, Rt(r.consts, t));
    }
    function Kp(e) {
      return Ia(Ut(), Jt(), e) && (ap |= 1 << cp), cp++, Kp;
    }
    function Yp(e) {
      !(function (e, t, n) {
        if (cp > 0) {
          const r = e.data[n + tt];
          let o,
            i = null;
          Array.isArray(r) ? (o = r) : ((o = r.update), (i = r.icus)),
            dp(e, i, t, o, Kt() - cp - 1, ap),
            (ap = 0),
            (cp = 0);
        }
      })(Bt(), Ut(), e);
    }
    function Jp(e, t = {}) {
      return qp(e, t);
    }
    function Xp(e, t, n, r) {
      return a(() => {
        const o = e,
          i = o.prototype ? Object.getPrototypeOf(o.prototype) : null,
          s = i && i.constructor;
        null !== t &&
          (void 0 === o.decorators || (s && s.decorators === o.decorators)
            ? (o.decorators = t)
            : o.decorators.push(...t)),
          null !== n && (o.ctorParameters = n),
          null !== r &&
            (o.propDecorators =
              void 0 === o.propDecorators ||
              (s && s.propDecorators === o.propDecorators)
                ? r
                : Object.assign(Object.assign({}, o.propDecorators), r));
      });
    }
    const eg = new Map();
    function tg(e, t) {
      const n = eg.get(e);
      ng(e, n && n.moduleType, t.moduleType), eg.set(e, t);
    }
    function ng(e, t, n) {
      if (t && t !== n)
        throw new Error(
          `Duplicate module registered for ${e} - ${L(t)} vs ${L(t.name)}`
        );
    }
    function rg(e) {
      if (null !== e.ɵmod.id) {
        const t = e.ɵmod.id;
        ng(t, eg.get(t), e), eg.set(t, e);
      }
      let t = e.ɵmod.imports;
      t instanceof Function && (t = t()), t && t.forEach((e) => rg(e));
    }
    function og(e) {
      return eg.get(e) || ze[e];
    }
    class ig extends Ce {
      constructor(e, t) {
        super(),
          (this._parent = t),
          (this._bootstrapComponents = []),
          (this.injector = this),
          (this.destroyCbs = []),
          (this.componentFactoryResolver = new Lh(this));
        const n = et(e),
          r = e[te] || null;
        r && rp(r),
          (this._bootstrapComponents = Hn(n.bootstrap)),
          (this._r3Injector = Ks(
            e,
            t,
            [
              { provide: Ce, useValue: this },
              { provide: cd, useValue: this.componentFactoryResolver },
            ],
            L(e)
          )),
          this._r3Injector._resolveInjectorDefTypes(),
          (this.instance = this.get(e));
      }
      get(e, t = iu.THROW_IF_NOT_FOUND, n = E.Default) {
        return e === iu || e === Ce || e === ie
          ? this
          : this._r3Injector.get(e, t, n);
      }
      destroy() {
        const e = this._r3Injector;
        !e.destroyed && e.destroy(),
          this.destroyCbs.forEach((e) => e()),
          (this.destroyCbs = null);
      }
      onDestroy(e) {
        this.destroyCbs.push(e);
      }
    }
    class sg extends De {
      constructor(e) {
        super(), (this.moduleType = e), null !== et(e) && rg(e);
      }
      create(e) {
        return new ig(this.moduleType, e);
      }
    }
    function ug(e, t, n) {
      const r = Zt() + e,
        o = Ut();
      return o[r] === Po ? Oa(o, r, n ? t.call(n) : t()) : xa(o, r);
    }
    function ag(e, t, n, r) {
      return bg(Ut(), Zt(), e, t, n, r);
    }
    function cg(e, t, n, r, o) {
      return vg(Ut(), Zt(), e, t, n, r, o);
    }
    function lg(e, t, n, r, o, i) {
      return _g(Ut(), Zt(), e, t, n, r, o, i);
    }
    function dg(e, t, n, r, o, i, s) {
      return wg(Ut(), Zt(), e, t, n, r, o, i, s);
    }
    function fg(e, t, n, r, o, i, s, u) {
      const a = Zt() + e,
        c = Ut(),
        l = ka(c, a, n, r, o, i);
      return Ia(c, a + 4, s) || l
        ? Oa(c, a + 5, u ? t.call(u, n, r, o, i, s) : t(n, r, o, i, s))
        : xa(c, a + 5);
    }
    function hg(e, t, n, r, o, i, s, u, a) {
      const c = Zt() + e,
        l = Ut(),
        d = ka(l, c, n, r, o, i);
      return Aa(l, c + 4, s, u) || d
        ? Oa(l, c + 6, a ? t.call(a, n, r, o, i, s, u) : t(n, r, o, i, s, u))
        : xa(l, c + 6);
    }
    function pg(e, t, n, r, o, i, s, u, a, c) {
      const l = Zt() + e,
        d = Ut();
      let f = ka(d, l, n, r, o, i);
      return ja(d, l + 4, s, u, a) || f
        ? Oa(
            d,
            l + 7,
            c ? t.call(c, n, r, o, i, s, u, a) : t(n, r, o, i, s, u, a)
          )
        : xa(d, l + 7);
    }
    function gg(e, t, n, r, o, i, s, u, a, c, l) {
      const d = Zt() + e,
        f = Ut(),
        h = ka(f, d, n, r, o, i);
      return ka(f, d + 4, s, u, a, c) || h
        ? Oa(
            f,
            d + 8,
            l ? t.call(l, n, r, o, i, s, u, a, c) : t(n, r, o, i, s, u, a, c)
          )
        : xa(f, d + 8);
    }
    function mg(e, t, n, r) {
      return Cg(Ut(), Zt(), e, t, n, r);
    }
    function yg(e, t) {
      const n = e[t];
      return n === Po ? void 0 : n;
    }
    function bg(e, t, n, r, o, i) {
      const s = t + n;
      return Ia(e, s, o) ? Oa(e, s + 1, i ? r.call(i, o) : r(o)) : yg(e, s + 1);
    }
    function vg(e, t, n, r, o, i, s) {
      const u = t + n;
      return Aa(e, u, o, i)
        ? Oa(e, u + 2, s ? r.call(s, o, i) : r(o, i))
        : yg(e, u + 2);
    }
    function _g(e, t, n, r, o, i, s, u) {
      const a = t + n;
      return ja(e, a, o, i, s)
        ? Oa(e, a + 3, u ? r.call(u, o, i, s) : r(o, i, s))
        : yg(e, a + 3);
    }
    function wg(e, t, n, r, o, i, s, u, a) {
      const c = t + n;
      return ka(e, c, o, i, s, u)
        ? Oa(e, c + 4, a ? r.call(a, o, i, s, u) : r(o, i, s, u))
        : yg(e, c + 4);
    }
    function Cg(e, t, n, r, o, i) {
      let s = t + n,
        u = !1;
      for (let a = 0; a < o.length; a++) Ia(e, s++, o[a]) && (u = !0);
      return u ? Oa(e, s, r.apply(i, o)) : yg(e, s);
    }
    function Dg(e, t) {
      const n = Bt();
      let r;
      const o = e + tt;
      n.firstCreatePass
        ? ((r = (function (e, t) {
            if (t)
              for (let n = t.length - 1; n >= 0; n--) {
                const r = t[n];
                if (e === r.name) return r;
              }
            throw new Error(`The pipe '${e}' could not be found!`);
          })(t, n.pipeRegistry)),
          (n.data[o] = r),
          r.onDestroy &&
            (n.destroyHooks || (n.destroyHooks = [])).push(o, r.onDestroy))
        : (r = n.data[o]);
      const i = r.factory || (r.factory = Xe(r.type)),
        s = he(ec);
      try {
        const t = zn(!1),
          r = i();
        return zn(t), Ja(n, Ut(), e, r), r;
      } finally {
        he(s);
      }
    }
    function Eg(e, t, n) {
      const r = Ut(),
        o = xt(r, e);
      return jg(
        r,
        Ag(r, e) ? bg(r, Zt(), t, o.transform, n, o) : o.transform(n)
      );
    }
    function Sg(e, t, n, r) {
      const o = Ut(),
        i = xt(o, e);
      return jg(
        o,
        Ag(o, e) ? vg(o, Zt(), t, i.transform, n, r, i) : i.transform(n, r)
      );
    }
    function Og(e, t, n, r, o) {
      const i = Ut(),
        s = xt(i, e);
      return jg(
        i,
        Ag(i, e)
          ? _g(i, Zt(), t, s.transform, n, r, o, s)
          : s.transform(n, r, o)
      );
    }
    function xg(e, t, n, r, o, i) {
      const s = Ut(),
        u = xt(s, e);
      return jg(
        s,
        Ag(s, e)
          ? wg(s, Zt(), t, u.transform, n, r, o, i, u)
          : u.transform(n, r, o, i)
      );
    }
    function Ig(e, t, n) {
      const r = Ut(),
        o = xt(r, e);
      return jg(
        r,
        Ag(r, e) ? Cg(r, Zt(), t, o.transform, n, o) : o.transform.apply(o, n)
      );
    }
    function Ag(e, t) {
      return e[1].data[t + tt].pure;
    }
    function jg(e, t) {
      return Da.isWrapped(t) && ((t = Da.unwrap(t)), (e[Kt()] = Po)), t;
    }
    const kg = class extends r.Subject {
      constructor(e = !1) {
        super(), (this.__isAsync = e);
      }
      emit(e) {
        super.next(e);
      }
      subscribe(e, t, n) {
        let r,
          i = (e) => null,
          s = () => null;
        e && "object" == typeof e
          ? ((r = this.__isAsync
              ? (t) => {
                  setTimeout(() => e.next(t));
                }
              : (t) => {
                  e.next(t);
                }),
            e.error &&
              (i = this.__isAsync
                ? (t) => {
                    setTimeout(() => e.error(t));
                  }
                : (t) => {
                    e.error(t);
                  }),
            e.complete &&
              (s = this.__isAsync
                ? () => {
                    setTimeout(() => e.complete());
                  }
                : () => {
                    e.complete();
                  }))
          : ((r = this.__isAsync
              ? (t) => {
                  setTimeout(() => e(t));
                }
              : (t) => {
                  e(t);
                }),
            t &&
              (i = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
            n &&
              (s = this.__isAsync
                ? () => {
                    setTimeout(() => n());
                  }
                : () => {
                    n();
                  }));
        const u = super.subscribe(r, i, s);
        return e instanceof o.Subscription && e.add(u), u;
      }
    };
    function Tg() {
      return this._results[wa()]();
    }
    class Rg {
      constructor() {
        (this.dirty = !0),
          (this._results = []),
          (this.changes = new kg()),
          (this.length = 0);
        const e = wa(),
          t = Rg.prototype;
        t[e] || (t[e] = Tg);
      }
      map(e) {
        return this._results.map(e);
      }
      filter(e) {
        return this._results.filter(e);
      }
      find(e) {
        return this._results.find(e);
      }
      reduce(e, t) {
        return this._results.reduce(e, t);
      }
      forEach(e) {
        this._results.forEach(e);
      }
      some(e) {
        return this._results.some(e);
      }
      toArray() {
        return this._results.slice();
      }
      toString() {
        return this._results.toString();
      }
      reset(e) {
        (this._results = Se(e)),
          (this.dirty = !1),
          (this.length = this._results.length),
          (this.last = this._results[this.length - 1]),
          (this.first = this._results[0]);
      }
      notifyOnChanges() {
        this.changes.emit(this);
      }
      setDirty() {
        this.dirty = !0;
      }
      destroy() {
        this.changes.complete(), this.changes.unsubscribe();
      }
    }
    class Fg {
      constructor(e) {
        (this.queryList = e), (this.matches = null);
      }
      clone() {
        return new Fg(this.queryList);
      }
      setDirty() {
        this.queryList.setDirty();
      }
    }
    class Pg {
      constructor(e = []) {
        this.queries = e;
      }
      createEmbeddedView(e) {
        const t = e.queries;
        if (null !== t) {
          const n = null !== e.contentQueries ? e.contentQueries[0] : t.length,
            r = [];
          for (let e = 0; e < n; e++) {
            const n = t.getByIndex(e);
            r.push(this.queries[n.indexInDeclarationView].clone());
          }
          return new Pg(r);
        }
        return null;
      }
      insertView(e) {
        this.dirtyQueriesWithMatches(e);
      }
      detachView(e) {
        this.dirtyQueriesWithMatches(e);
      }
      dirtyQueriesWithMatches(e) {
        for (let t = 0; t < this.queries.length; t++)
          null !== Xg(e, t).matches && this.queries[t].setDirty();
      }
    }
    class Ng {
      constructor(e, t, n, r = null) {
        (this.predicate = e),
          (this.descendants = t),
          (this.isStatic = n),
          (this.read = r);
      }
    }
    class Mg {
      constructor(e = []) {
        this.queries = e;
      }
      elementStart(e, t) {
        for (let n = 0; n < this.queries.length; n++)
          this.queries[n].elementStart(e, t);
      }
      elementEnd(e) {
        for (let t = 0; t < this.queries.length; t++)
          this.queries[t].elementEnd(e);
      }
      embeddedTView(e) {
        let t = null;
        for (let n = 0; n < this.length; n++) {
          const r = null !== t ? t.length : 0,
            o = this.getByIndex(n).embeddedTView(e, r);
          o &&
            ((o.indexInDeclarationView = n),
            null !== t ? t.push(o) : (t = [o]));
        }
        return null !== t ? new Mg(t) : null;
      }
      template(e, t) {
        for (let n = 0; n < this.queries.length; n++)
          this.queries[n].template(e, t);
      }
      getByIndex(e) {
        return this.queries[e];
      }
      get length() {
        return this.queries.length;
      }
      track(e) {
        this.queries.push(e);
      }
    }
    class Lg {
      constructor(e, t = -1) {
        (this.metadata = e),
          (this.matches = null),
          (this.indexInDeclarationView = -1),
          (this.crossesNgTemplate = !1),
          (this._appliesToNextNode = !0),
          (this._declarationNodeIndex = t);
      }
      elementStart(e, t) {
        this.isApplyingToNode(t) && this.matchTNode(e, t);
      }
      elementEnd(e) {
        this._declarationNodeIndex === e.index &&
          (this._appliesToNextNode = !1);
      }
      template(e, t) {
        this.elementStart(e, t);
      }
      embeddedTView(e, t) {
        return this.isApplyingToNode(e)
          ? ((this.crossesNgTemplate = !0),
            this.addMatch(-e.index, t),
            new Lg(this.metadata))
          : null;
      }
      isApplyingToNode(e) {
        if (this._appliesToNextNode && !1 === this.metadata.descendants) {
          const t = this._declarationNodeIndex;
          let n = e.parent;
          for (; null !== n && 3 === n.type && n.index !== t; ) n = n.parent;
          return t === (null !== n ? n.index : -1);
        }
        return this._appliesToNextNode;
      }
      matchTNode(e, t) {
        const n = this.metadata.predicate;
        if (Array.isArray(n))
          for (let r = 0; r < n.length; r++) {
            const o = n[r];
            this.matchTNodeWithReadOption(e, t, Vg(t, o)),
              this.matchTNodeWithReadOption(e, t, tr(t, e, o, !1, !1));
          }
        else
          n === Ld
            ? 0 === t.type && this.matchTNodeWithReadOption(e, t, -1)
            : this.matchTNodeWithReadOption(e, t, tr(t, e, n, !1, !1));
      }
      matchTNodeWithReadOption(e, t, n) {
        if (null !== n) {
          const r = this.metadata.read;
          if (null !== r)
            if (r === fd || r === Bd || (r === Ld && 0 === t.type))
              this.addMatch(t.index, -2);
            else {
              const n = tr(t, e, r, !1, !1);
              null !== n && this.addMatch(t.index, n);
            }
          else this.addMatch(t.index, n);
        }
      }
      addMatch(e, t) {
        null === this.matches
          ? (this.matches = [e, t])
          : this.matches.push(e, t);
      }
    }
    function Vg(e, t) {
      const n = e.localNames;
      if (null !== n)
        for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
      return null;
    }
    function Ug(e, t, n, r) {
      return -1 === n
        ? (function (e, t) {
            return 2 === e.type || 3 === e.type
              ? ms(fd, e, t)
              : 0 === e.type
              ? ys(Ld, fd, e, t)
              : null;
          })(t, e)
        : -2 === n
        ? (function (e, t, n) {
            return n === fd
              ? ms(fd, t, e)
              : n === Ld
              ? ys(Ld, fd, t, e)
              : n === Bd
              ? bs(Bd, fd, t, e)
              : void 0;
          })(e, t, r)
        : nr(e, e[1], n, t);
    }
    function Bg(e, t, n, r) {
      const o = t[19].queries[r];
      if (null === o.matches) {
        const r = e.data,
          i = n.matches,
          s = [];
        for (let e = 0; e < i.length; e += 2) {
          const o = i[e];
          s.push(o < 0 ? null : Ug(t, r[o], i[e + 1], n.metadata.read));
        }
        o.matches = s;
      }
      return o.matches;
    }
    function Hg(e, t, n, r) {
      const o = e.queries.getByIndex(n),
        i = o.matches;
      if (null !== i) {
        const s = Bg(e, t, o, n);
        for (let e = 0; e < i.length; e += 2) {
          const n = i[e];
          if (n > 0) r.push(s[e / 2]);
          else {
            const o = i[e + 1],
              s = t[-n];
            for (let e = nt; e < s.length; e++) {
              const t = s[e];
              t[17] === t[3] && Hg(t[1], t, o, r);
            }
            if (null !== s[9]) {
              const e = s[9];
              for (let t = 0; t < e.length; t++) {
                const n = e[t];
                Hg(n[1], n, o, r);
              }
            }
          }
        }
      }
      return r;
    }
    function $g(e) {
      const t = Ut(),
        n = Bt(),
        r = rn();
      on(r + 1);
      const o = Xg(n, r);
      if (e.dirty && kt(t) === o.metadata.isStatic) {
        if (null === o.matches) e.reset([]);
        else {
          const i = o.crossesNgTemplate ? Hg(n, t, r, []) : Bg(n, t, o, r);
          e.reset(i), e.notifyOnChanges();
        }
        return !0;
      }
      return !1;
    }
    function zg(e, t, n) {
      Wg(Bt(), Ut(), e, t, n, !0);
    }
    function qg(e, t, n) {
      Wg(Bt(), Ut(), e, t, n, !1);
    }
    function Wg(e, t, n, r, o, i) {
      e.firstCreatePass &&
        (Jg(e, new Ng(n, r, i, o), -1), i && (e.staticViewQueries = !0)),
        Yg(e, t);
    }
    function Qg(e, t, n, r) {
      Zg(Bt(), Ut(), t, n, r, !1, $t(), e);
    }
    function Gg(e, t, n, r) {
      Zg(Bt(), Ut(), t, n, r, !0, $t(), e);
    }
    function Zg(e, t, n, r, o, i, s, u) {
      e.firstCreatePass &&
        (Jg(e, new Ng(n, r, i, o), s.index),
        (function (e, t) {
          const n = e.contentQueries || (e.contentQueries = []);
          t !== (e.contentQueries.length ? n[n.length - 1] : -1) &&
            n.push(e.queries.length - 1, t);
        })(e, u),
        i && (e.staticContentQueries = !0)),
        Yg(e, t);
    }
    function Kg() {
      return (e = Ut()), (t = rn()), e[19].queries[t].queryList;
      var e, t;
    }
    function Yg(e, t) {
      const n = new Rg();
      li(e, t, n, n.destroy),
        null === t[19] && (t[19] = new Pg()),
        t[19].queries.push(new Fg(n));
    }
    function Jg(e, t, n) {
      null === e.queries && (e.queries = new Mg()),
        e.queries.track(new Lg(t, n));
    }
    function Xg(e, t) {
      return e.queries.getByIndex(t);
    }
    function em(e, t) {
      return ys(Ld, fd, e, t);
    }
    function tm(e = E.Default) {
      const t = vs(!0);
      if (null != t || e & E.Optional) return t;
      throw new Error("No provider for ChangeDetectorRef!");
    }
    const nm = (() => ({
      "\u0275\u0275attribute": Ta,
      "\u0275\u0275attributeInterpolate1": Ha,
      "\u0275\u0275attributeInterpolate2": $a,
      "\u0275\u0275attributeInterpolate3": za,
      "\u0275\u0275attributeInterpolate4": qa,
      "\u0275\u0275attributeInterpolate5": Wa,
      "\u0275\u0275attributeInterpolate6": Qa,
      "\u0275\u0275attributeInterpolate7": Ga,
      "\u0275\u0275attributeInterpolate8": Za,
      "\u0275\u0275attributeInterpolateV": Ka,
      "\u0275\u0275defineComponent": Ue,
      "\u0275\u0275defineDirective": Ge,
      "\u0275\u0275defineInjectable": x,
      "\u0275\u0275defineInjector": A,
      "\u0275\u0275defineNgModule": qe,
      "\u0275\u0275definePipe": Ze,
      "\u0275\u0275directiveInject": ec,
      "\u0275\u0275getFactoryOf": sr,
      "\u0275\u0275getInheritedFactory": ur,
      "\u0275\u0275inject": ge,
      "\u0275\u0275injectAttribute": tc,
      "\u0275\u0275invalidFactory": nc,
      "\u0275\u0275invalidFactoryDep": me,
      "\u0275\u0275injectPipeChangeDetectorRef": tm,
      "\u0275\u0275templateRefExtractor": em,
      "\u0275\u0275NgOnChangesFeature": dt,
      "\u0275\u0275ProvidersFeature": rd,
      "\u0275\u0275CopyDefinitionFeature": va,
      "\u0275\u0275InheritDefinitionFeature": fa,
      "\u0275\u0275nextContext": vc,
      "\u0275\u0275namespaceHTML": vn,
      "\u0275\u0275namespaceMathML": bn,
      "\u0275\u0275namespaceSVG": yn,
      "\u0275\u0275enableBindings": Lt,
      "\u0275\u0275disableBindings": Vt,
      "\u0275\u0275elementStart": ic,
      "\u0275\u0275elementEnd": sc,
      "\u0275\u0275element": uc,
      "\u0275\u0275elementContainerStart": ac,
      "\u0275\u0275elementContainerEnd": cc,
      "\u0275\u0275elementContainer": lc,
      "\u0275\u0275pureFunction0": ug,
      "\u0275\u0275pureFunction1": ag,
      "\u0275\u0275pureFunction2": cg,
      "\u0275\u0275pureFunction3": lg,
      "\u0275\u0275pureFunction4": dg,
      "\u0275\u0275pureFunction5": fg,
      "\u0275\u0275pureFunction6": hg,
      "\u0275\u0275pureFunction7": pg,
      "\u0275\u0275pureFunction8": gg,
      "\u0275\u0275pureFunctionV": mg,
      "\u0275\u0275getCurrentView": dc,
      "\u0275\u0275restoreView": Ht,
      "\u0275\u0275listener": pc,
      "\u0275\u0275projection": Ec,
      "\u0275\u0275syntheticHostProperty": Zl,
      "\u0275\u0275syntheticHostListener": gc,
      "\u0275\u0275pipeBind1": Eg,
      "\u0275\u0275pipeBind2": Sg,
      "\u0275\u0275pipeBind3": Og,
      "\u0275\u0275pipeBind4": xg,
      "\u0275\u0275pipeBindV": Ig,
      "\u0275\u0275projectionDef": wc,
      "\u0275\u0275hostProperty": Gl,
      "\u0275\u0275property": rc,
      "\u0275\u0275propertyInterpolate": Sc,
      "\u0275\u0275propertyInterpolate1": Oc,
      "\u0275\u0275propertyInterpolate2": xc,
      "\u0275\u0275propertyInterpolate3": Ic,
      "\u0275\u0275propertyInterpolate4": Ac,
      "\u0275\u0275propertyInterpolate5": jc,
      "\u0275\u0275propertyInterpolate6": kc,
      "\u0275\u0275propertyInterpolate7": Tc,
      "\u0275\u0275propertyInterpolate8": Rc,
      "\u0275\u0275propertyInterpolateV": Fc,
      "\u0275\u0275pipe": Dg,
      "\u0275\u0275queryRefresh": $g,
      "\u0275\u0275viewQuery": qg,
      "\u0275\u0275staticViewQuery": zg,
      "\u0275\u0275staticContentQuery": Gg,
      "\u0275\u0275loadQuery": Kg,
      "\u0275\u0275contentQuery": Qg,
      "\u0275\u0275reference": Xa,
      "\u0275\u0275classMap": Yc,
      "\u0275\u0275classMapInterpolate1": wl,
      "\u0275\u0275classMapInterpolate2": Cl,
      "\u0275\u0275classMapInterpolate3": Dl,
      "\u0275\u0275classMapInterpolate4": El,
      "\u0275\u0275classMapInterpolate5": Sl,
      "\u0275\u0275classMapInterpolate6": Ol,
      "\u0275\u0275classMapInterpolate7": xl,
      "\u0275\u0275classMapInterpolate8": Il,
      "\u0275\u0275classMapInterpolateV": Al,
      "\u0275\u0275styleMap": Zc,
      "\u0275\u0275styleMapInterpolate1": jl,
      "\u0275\u0275styleMapInterpolate2": kl,
      "\u0275\u0275styleMapInterpolate3": Tl,
      "\u0275\u0275styleMapInterpolate4": Rl,
      "\u0275\u0275styleMapInterpolate5": Fl,
      "\u0275\u0275styleMapInterpolate6": Pl,
      "\u0275\u0275styleMapInterpolate7": Nl,
      "\u0275\u0275styleMapInterpolate8": Ml,
      "\u0275\u0275styleMapInterpolateV": Ll,
      "\u0275\u0275styleProp": Qc,
      "\u0275\u0275stylePropInterpolate1": Vl,
      "\u0275\u0275stylePropInterpolate2": Ul,
      "\u0275\u0275stylePropInterpolate3": Bl,
      "\u0275\u0275stylePropInterpolate4": Hl,
      "\u0275\u0275stylePropInterpolate5": $l,
      "\u0275\u0275stylePropInterpolate6": zl,
      "\u0275\u0275stylePropInterpolate7": ql,
      "\u0275\u0275stylePropInterpolate8": Wl,
      "\u0275\u0275stylePropInterpolateV": Ql,
      "\u0275\u0275classProp": Gc,
      "\u0275\u0275advance": Bo,
      "\u0275\u0275template": Ya,
      "\u0275\u0275text": ll,
      "\u0275\u0275textInterpolate": dl,
      "\u0275\u0275textInterpolate1": fl,
      "\u0275\u0275textInterpolate2": hl,
      "\u0275\u0275textInterpolate3": pl,
      "\u0275\u0275textInterpolate4": gl,
      "\u0275\u0275textInterpolate5": ml,
      "\u0275\u0275textInterpolate6": yl,
      "\u0275\u0275textInterpolate7": bl,
      "\u0275\u0275textInterpolate8": vl,
      "\u0275\u0275textInterpolateV": _l,
      "\u0275\u0275i18n": Gp,
      "\u0275\u0275i18nAttributes": Zp,
      "\u0275\u0275i18nExp": Kp,
      "\u0275\u0275i18nStart": Wp,
      "\u0275\u0275i18nEnd": Qp,
      "\u0275\u0275i18nApply": Yp,
      "\u0275\u0275i18nPostprocess": Jp,
      "\u0275\u0275resolveWindow": Vn,
      "\u0275\u0275resolveDocument": Un,
      "\u0275\u0275resolveBody": Bn,
      "\u0275\u0275setComponentScope": Be,
      "\u0275\u0275setNgModuleScope": We,
      "\u0275\u0275sanitizeHtml": oo,
      "\u0275\u0275sanitizeStyle": io,
      "\u0275\u0275sanitizeResourceUrl": uo,
      "\u0275\u0275sanitizeScript": ao,
      "\u0275\u0275sanitizeUrl": so,
      "\u0275\u0275sanitizeUrlOrResourceUrl": lo,
    }))();
    let rm = null;
    function om() {
      rm = null;
    }
    const im = [],
      sm = [];
    let um = !1;
    function am() {
      if (!um) {
        um = !0;
        try {
          for (let e = sm.length - 1; e >= 0; e--) {
            const { moduleType: t, ngModule: n } = sm[e];
            n.declarations &&
              n.declarations.every(cm) &&
              (sm.splice(e, 1), gm(t, n));
          }
        } finally {
          um = !1;
        }
      }
    }
    function cm(e) {
      return Array.isArray(e) ? e.every(cm) : !!H(e);
    }
    function lm(e, t = {}) {
      dm(e, t),
        (function (e, t) {
          sm.push({ moduleType: e, ngModule: t });
        })(e, t);
    }
    function dm(e, t, n = !1) {
      const r = Se(t.declarations || im);
      let o = null;
      Object.defineProperty(e, ee, {
        configurable: !0,
        get: () => (
          null === o &&
            ((o = K().compileNgModule(nm, `ng:///${e.name}/\u0275mod.js`, {
              type: e,
              bootstrap: Se(t.bootstrap || im).map(H),
              declarations: r.map(H),
              imports: Se(t.imports || im)
                .map(H)
                .map(bm),
              exports: Se(t.exports || im)
                .map(H)
                .map(bm),
              schemas: t.schemas ? Se(t.schemas) : null,
              id: t.id || null,
            })),
            o.schemas || (o.schemas = [])),
          o
        ),
      });
      let i = null;
      Object.defineProperty(e, F, {
        get: () => {
          if (null === i) {
            const n = {
              name: e.name,
              type: e,
              deps: Fs(e),
              providers: t.providers || im,
              imports: [(t.imports || im).map(H), (t.exports || im).map(H)],
            };
            i = K().compileInjector(nm, `ng:///${e.name}/\u0275inj.js`, n);
          }
          return i;
        },
        configurable: !1,
      });
    }
    let fm = new Map(),
      hm = new Map();
    function pm() {
      (fm = new Map()), (hm = new Map()), (sm.length = 0);
    }
    function gm(e, t) {
      const n = Se(t.declarations || im),
        r = ym(e);
      n.forEach((t) => {
        t.hasOwnProperty(Y)
          ? mm(Ke(t), r)
          : t.hasOwnProperty(J) ||
            t.hasOwnProperty(X) ||
            (t.ngSelectorScope = e);
      });
    }
    function mm(e, t) {
      (e.directiveDefs = () =>
        Array.from(t.compilation.directives)
          .map((e) => (e.hasOwnProperty(Y) ? Ke(e) : Ye(e)))
          .filter((e) => !!e)),
        (e.pipeDefs = () => Array.from(t.compilation.pipes).map((e) => Je(e))),
        (e.schemas = t.schemas),
        (e.tView = null);
    }
    function ym(e) {
      if (!vm(e))
        throw new Error(
          e.name + " does not have a module def (\u0275mod property)"
        );
      const t = et(e);
      if (null !== t.transitiveCompileScopes) return t.transitiveCompileScopes;
      const n = {
        schemas: t.schemas || null,
        compilation: { directives: new Set(), pipes: new Set() },
        exported: { directives: new Set(), pipes: new Set() },
      };
      return (
        Hn(t.imports).forEach((e) => {
          const t = e;
          if (!vm(t))
            throw new Error(
              `Importing ${t.name} which does not have a \u0275mod property`
            );
          const r = ym(t);
          r.exported.directives.forEach((e) => n.compilation.directives.add(e)),
            r.exported.pipes.forEach((e) => n.compilation.pipes.add(e));
        }),
        Hn(t.declarations).forEach((e) => {
          Je(e) ? n.compilation.pipes.add(e) : n.compilation.directives.add(e);
        }),
        Hn(t.exports).forEach((e) => {
          const t = e;
          if (vm(t)) {
            const e = ym(t);
            e.exported.directives.forEach((e) => {
              n.compilation.directives.add(e), n.exported.directives.add(e);
            }),
              e.exported.pipes.forEach((e) => {
                n.compilation.pipes.add(e), n.exported.pipes.add(e);
              });
          } else Je(t) ? n.exported.pipes.add(t) : n.exported.directives.add(t);
        }),
        (t.transitiveCompileScopes = n),
        n
      );
    }
    function bm(e) {
      return (function (e) {
        return void 0 !== e.ngModule;
      })(e)
        ? e.ngModule
        : e;
    }
    function vm(e) {
      return !!et(e);
    }
    let _m = 0;
    function wm(e, t) {
      let n = null;
      !(function (e, t) {
        Lu(t) && (Nu.set(e, t), Mu.add(e));
      })(e, t),
        Em(e, t),
        Object.defineProperty(e, Y, {
          get: () => {
            if (null === n) {
              const r = K();
              if (Lu(t)) {
                const n = [`Component '${e.name}' is not resolved:`];
                throw (
                  (t.templateUrl && n.push(" - templateUrl: " + t.templateUrl),
                  t.styleUrls &&
                    t.styleUrls.length &&
                    n.push(" - styleUrls: " + JSON.stringify(t.styleUrls)),
                  n.push(
                    "Did you run and wait for 'resolveComponentResources()'?"
                  ),
                  new Error(n.join("\n")))
                );
              }
              const o = rm;
              let i = t.preserveWhitespaces;
              void 0 === i &&
                (i =
                  null !== o &&
                  void 0 !== o.preserveWhitespaces &&
                  o.preserveWhitespaces);
              let s = t.encapsulation;
              void 0 === s &&
                (s =
                  null !== o && void 0 !== o.defaultEncapsulation
                    ? o.defaultEncapsulation
                    : Ne.Emulated);
              const u = t.templateUrl || `ng:///${e.name}/template.html`,
                a = Object.assign(Object.assign({}, Om(e, t)), {
                  typeSourceSpan: r.createParseSourceSpan(
                    "Component",
                    e.name,
                    u
                  ),
                  template: t.template || "",
                  preserveWhitespaces: i,
                  styles: t.styles || Le,
                  animations: t.animations,
                  directives: [],
                  changeDetection: t.changeDetection,
                  pipes: new Map(),
                  encapsulation: s,
                  interpolation: t.interpolation,
                  viewProviders: t.viewProviders || null,
                });
              _m++;
              try {
                a.usesInheritance && xm(e), (n = r.compileComponent(nm, u, a));
              } finally {
                _m--;
              }
              if ((0 === _m && am(), void 0 !== e.ngSelectorScope)) {
                const t = ym(e.ngSelectorScope);
                mm(n, t);
              }
            }
            return n;
          },
          configurable: !1,
        });
    }
    function Cm(e, t) {
      let n = null;
      Em(e, t || {}),
        Object.defineProperty(e, J, {
          get: () => {
            if (null === n) {
              const r = Dm(e, t || {});
              n = K().compileDirective(nm, r.sourceMapUrl, r.metadata);
            }
            return n;
          },
          configurable: !1,
        });
    }
    function Dm(e, t) {
      const n = e && e.name,
        r = `ng:///${n}/\u0275dir.js`,
        o = K(),
        i = Om(e, t);
      return (
        (i.typeSourceSpan = o.createParseSourceSpan("Directive", n, r)),
        i.usesInheritance && xm(e),
        { metadata: i, sourceMapUrl: r }
      );
    }
    function Em(e, t) {
      let n = null;
      Object.defineProperty(e, ne, {
        get: () => {
          if (null === n) {
            const r = Dm(e, t),
              o = K();
            n = o.compileFactory(
              nm,
              `ng:///${e.name}/\u0275fac.js`,
              Object.assign(Object.assign({}, r.metadata), {
                injectFn: "directiveInject",
                target: o.R3FactoryTarget.Directive,
              })
            );
          }
          return n;
        },
        configurable: !1,
      });
    }
    function Sm(e) {
      return Object.getPrototypeOf(e.prototype) === Object.prototype;
    }
    function Om(e, t) {
      const n = Rs(),
        r = n.ownPropMetadata(e);
      return {
        name: e.name,
        type: e,
        typeArgumentCount: 0,
        selector: void 0 !== t.selector ? t.selector : null,
        deps: Fs(e),
        host: t.host || Me,
        propMetadata: r,
        inputs: t.inputs || Le,
        outputs: t.outputs || Le,
        queries: Am(e, r, jm),
        lifecycle: { usesOnChanges: n.hasLifecycleHook(e, "ngOnChanges") },
        typeSourceSpan: null,
        usesInheritance: !Sm(e),
        exportAs: ((o = t.exportAs), void 0 === o ? null : Rm(o)),
        providers: t.providers || null,
        viewQueries: Am(e, r, km),
      };
      var o;
    }
    function xm(e) {
      const t = Object.prototype;
      let n = Object.getPrototypeOf(e.prototype).constructor;
      for (; n && n !== t; )
        Ye(n) || Ke(n) || !Pm(n) || Cm(n, null), (n = Object.getPrototypeOf(n));
    }
    function Im(e, t) {
      return {
        propertyName: e,
        predicate: ((n = t.selector), "string" == typeof n ? Rm(n) : H(n)),
        descendants: t.descendants,
        first: t.first,
        read: t.read ? t.read : null,
        static: !!t.static,
      };
      var n;
    }
    function Am(e, t, n) {
      const r = [];
      for (const o in t)
        if (t.hasOwnProperty(o)) {
          const i = t[o];
          i.forEach((t) => {
            if (n(t)) {
              if (!t.selector)
                throw new Error(
                  `Can't construct a query for the property "${o}" of "${Mn(
                    e
                  )}" since the query selector wasn't defined.`
                );
              if (i.some(Tm))
                throw new Error(
                  "Cannot combine @Input decorators with query decorators"
                );
              r.push(Im(o, t));
            }
          });
        }
      return r;
    }
    function jm(e) {
      const t = e.ngMetadataName;
      return "ContentChild" === t || "ContentChildren" === t;
    }
    function km(e) {
      const t = e.ngMetadataName;
      return "ViewChild" === t || "ViewChildren" === t;
    }
    function Tm(e) {
      return "Input" === e.ngMetadataName;
    }
    function Rm(e) {
      return e.split(",").map((e) => e.trim());
    }
    const Fm = [
      "ngOnChanges",
      "ngOnInit",
      "ngOnDestroy",
      "ngDoCheck",
      "ngAfterViewInit",
      "ngAfterViewChecked",
      "ngAfterContentInit",
      "ngAfterContentChecked",
    ];
    function Pm(e) {
      const t = Rs();
      if (Fm.some((n) => t.hasLifecycleHook(e, n))) return !0;
      const n = t.propMetadata(e);
      for (const r in n) {
        const e = n[r];
        for (let t = 0; t < e.length; t++) {
          const n = e[t],
            r = n.ngMetadataName;
          if (
            Tm(n) ||
            jm(n) ||
            km(n) ||
            "Output" === r ||
            "HostBinding" === r ||
            "HostListener" === r
          )
            return !0;
        }
      }
      return !1;
    }
    function Nm(e, t) {
      let n = null,
        r = null;
      Object.defineProperty(e, ne, {
        get: () => {
          if (null === r) {
            const n = Mm(e, t),
              o = K();
            r = o.compileFactory(
              nm,
              `ng:///${n.name}/\u0275fac.js`,
              Object.assign(Object.assign({}, n), {
                injectFn: "directiveInject",
                target: o.R3FactoryTarget.Pipe,
              })
            );
          }
          return r;
        },
        configurable: !1,
      }),
        Object.defineProperty(e, X, {
          get: () => {
            if (null === n) {
              const r = Mm(e, t);
              n = K().compilePipe(nm, `ng:///${r.name}/\u0275pipe.js`, r);
            }
            return n;
          },
          configurable: !1,
        });
    }
    function Mm(e, t) {
      return {
        type: e,
        typeArgumentCount: 0,
        name: e.name,
        deps: Fs(e),
        pipeName: t.name,
        pure: void 0 === t.pure || t.pure,
      };
    }
    const Lm = f(
        "Directive",
        (e = {}) => e,
        void 0,
        void 0,
        (e, t) => Zm(e, t)
      ),
      Vm = f(
        "Component",
        (e = {}) => Object.assign({ changeDetection: Re.Default }, e),
        Lm,
        void 0,
        (e, t) => Gm(e, t)
      ),
      Um = f(
        "Pipe",
        (e) => Object.assign({ pure: !0 }, e),
        void 0,
        void 0,
        (e, t) => Km(e, t)
      ),
      Bm = g("Input", (e) => ({ bindingPropertyName: e })),
      Hm = g("Output", (e) => ({ bindingPropertyName: e })),
      $m = g("HostBinding", (e) => ({ hostPropertyName: e })),
      zm = g("HostListener", (e, t) => ({ eventName: e, args: t })),
      qm = wm,
      Wm = Cm,
      Qm = Nm,
      Gm = qm,
      Zm = Wm,
      Km = Qm,
      Ym = f(
        "NgModule",
        (e) => e,
        void 0,
        void 0,
        (e, t) => Xm(e, t)
      ),
      Jm = lm,
      Xm = Jm,
      ey = new oe("Application Initializer");
    let ty = (() => {
      class e {
        constructor(e) {
          (this.appInits = e),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const e = [],
            t = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const t = this.appInits[n]();
              fc(t) && e.push(t);
            }
          Promise.all(e)
            .then(() => {
              t();
            })
            .catch((e) => {
              this.reject(e);
            }),
            0 === e.length && t(),
            (this.initialized = !0);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(ge(ey, 8));
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    const ny = new oe("AppId");
    function ry() {
      return `${iy()}${iy()}${iy()}`;
    }
    const oy = { provide: ny, useFactory: ry, deps: [] };
    function iy() {
      return String.fromCharCode(97 + Math.floor(25 * Math.random()));
    }
    const sy = new oe("Platform Initializer"),
      uy = new oe("Platform ID"),
      ay = new oe("appBootstrapListener"),
      cy = new oe("Application Packages Root URL");
    let ly = (() => {
      class e {
        log(e) {
          console.log(e);
        }
        warn(e) {
          console.warn(e);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    const dy = new oe("LocaleId"),
      fy = new oe("DefaultCurrencyCode"),
      hy = new oe("Translations"),
      py = new oe("TranslationsFormat");
    var gy = (function (e) {
      return (
        (e[(e.Error = 0)] = "Error"),
        (e[(e.Warning = 1)] = "Warning"),
        (e[(e.Ignore = 2)] = "Ignore"),
        e
      );
    })({});
    const my = !0,
      yy = my;
    class by {
      constructor(e, t) {
        (this.ngModuleFactory = e), (this.componentFactories = t);
      }
    }
    const vy = function (e) {
        return new sg(e);
      },
      _y = vy,
      wy = function (e) {
        return Promise.resolve(vy(e));
      },
      Cy = wy,
      Dy = function (e) {
        const t = vy(e),
          n = Hn(et(e).declarations).reduce((e, t) => {
            const n = Ke(t);
            return n && e.push(new Bh(n)), e;
          }, []);
        return new by(t, n);
      },
      Ey = Dy,
      Sy = function (e) {
        return Promise.resolve(Dy(e));
      },
      Oy = Sy;
    let xy = (() => {
      class e {
        constructor() {
          (this.compileModuleSync = _y),
            (this.compileModuleAsync = Cy),
            (this.compileModuleAndAllComponentsSync = Ey),
            (this.compileModuleAndAllComponentsAsync = Oy);
        }
        clearCache() {}
        clearCacheFor(e) {}
        getModuleId(e) {}
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    const Iy = new oe("compilerOptions");
    class Ay {}
    const jy = (() => Promise.resolve(0))();
    function ky(e) {
      "undefined" == typeof Zone
        ? jy.then(() => {
            e && e.apply(null, null);
          })
        : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
    }
    class Ty {
      constructor({
        enableLongStackTrace: e = !1,
        shouldCoalesceEventChangeDetection: t = !1,
      }) {
        if (
          ((this.hasPendingMacrotasks = !1),
          (this.hasPendingMicrotasks = !1),
          (this.isStable = !0),
          (this.onUnstable = new kg(!1)),
          (this.onMicrotaskEmpty = new kg(!1)),
          (this.onStable = new kg(!1)),
          (this.onError = new kg(!1)),
          "undefined" == typeof Zone)
        )
          throw new Error("In this configuration Angular requires Zone.js");
        Zone.assertZonePatched();
        const n = this;
        (n._nesting = 0),
          (n._outer = n._inner = Zone.current),
          Zone.wtfZoneSpec && (n._inner = n._inner.fork(Zone.wtfZoneSpec)),
          Zone.TaskTrackingZoneSpec &&
            (n._inner = n._inner.fork(new Zone.TaskTrackingZoneSpec())),
          e &&
            Zone.longStackTraceZoneSpec &&
            (n._inner = n._inner.fork(Zone.longStackTraceZoneSpec)),
          (n.shouldCoalesceEventChangeDetection = t),
          (n.lastRequestAnimationFrameId = -1),
          (n.nativeRequestAnimationFrame = (function () {
            let e = G.requestAnimationFrame,
              t = G.cancelAnimationFrame;
            if ("undefined" != typeof Zone && e && t) {
              const n = e[Zone.__symbol__("OriginalDelegate")];
              n && (e = n);
              const r = t[Zone.__symbol__("OriginalDelegate")];
              r && (t = r);
            }
            return {
              nativeRequestAnimationFrame: e,
              nativeCancelAnimationFrame: t,
            };
          })().nativeRequestAnimationFrame),
          (function (e) {
            const t =
              !!e.shouldCoalesceEventChangeDetection &&
              e.nativeRequestAnimationFrame &&
              (() => {
                !(function (e) {
                  -1 === e.lastRequestAnimationFrameId &&
                    ((e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(
                      G,
                      () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                Ny(e),
                                Py(e);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      }
                    )),
                    Ny(e));
                })(e);
              });
            e._inner = e._inner.fork({
              name: "angular",
              properties: { isAngularZone: !0, maybeDelayChangeDetection: t },
              onInvokeTask: (n, r, o, i, s, u) => {
                try {
                  return My(e), n.invokeTask(o, i, s, u);
                } finally {
                  t && "eventTask" === i.type && t(), Ly(e);
                }
              },
              onInvoke: (t, n, r, o, i, s, u) => {
                try {
                  return My(e), t.invoke(r, o, i, s, u);
                } finally {
                  Ly(e);
                }
              },
              onHasTask: (t, n, r, o) => {
                t.hasTask(r, o),
                  n === r &&
                    ("microTask" == o.change
                      ? ((e._hasPendingMicrotasks = o.microTask), Ny(e), Py(e))
                      : "macroTask" == o.change &&
                        (e.hasPendingMacrotasks = o.macroTask));
              },
              onHandleError: (t, n, r, o) => (
                t.handleError(r, o),
                e.runOutsideAngular(() => e.onError.emit(o)),
                !1
              ),
            });
          })(n);
      }
      static isInAngularZone() {
        return !0 === Zone.current.get("isAngularZone");
      }
      static assertInAngularZone() {
        if (!Ty.isInAngularZone())
          throw new Error("Expected to be in Angular Zone, but it is not!");
      }
      static assertNotInAngularZone() {
        if (Ty.isInAngularZone())
          throw new Error("Expected to not be in Angular Zone, but it is!");
      }
      run(e, t, n) {
        return this._inner.run(e, t, n);
      }
      runTask(e, t, n, r) {
        const o = this._inner,
          i = o.scheduleEventTask("NgZoneEvent: " + r, e, Fy, Ry, Ry);
        try {
          return o.runTask(i, t, n);
        } finally {
          o.cancelTask(i);
        }
      }
      runGuarded(e, t, n) {
        return this._inner.runGuarded(e, t, n);
      }
      runOutsideAngular(e) {
        return this._outer.run(e);
      }
    }
    function Ry() {}
    const Fy = {};
    function Py(e) {
      if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
        try {
          e._nesting++, e.onMicrotaskEmpty.emit(null);
        } finally {
          if ((e._nesting--, !e.hasPendingMicrotasks))
            try {
              e.runOutsideAngular(() => e.onStable.emit(null));
            } finally {
              e.isStable = !0;
            }
        }
    }
    function Ny(e) {
      e.hasPendingMicrotasks = !!(
        e._hasPendingMicrotasks ||
        (e.shouldCoalesceEventChangeDetection &&
          -1 !== e.lastRequestAnimationFrameId)
      );
    }
    function My(e) {
      e._nesting++, e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
    }
    function Ly(e) {
      e._nesting--, Py(e);
    }
    class Vy {
      constructor() {
        (this.hasPendingMicrotasks = !1),
          (this.hasPendingMacrotasks = !1),
          (this.isStable = !0),
          (this.onUnstable = new kg()),
          (this.onMicrotaskEmpty = new kg()),
          (this.onStable = new kg()),
          (this.onError = new kg());
      }
      run(e, t, n) {
        return e.apply(t, n);
      }
      runGuarded(e, t, n) {
        return e.apply(t, n);
      }
      runOutsideAngular(e) {
        return e();
      }
      runTask(e, t, n, r) {
        return e.apply(t, n);
      }
    }
    let Uy = (() => {
        class e {
          constructor(e) {
            (this._ngZone = e),
              (this._pendingCount = 0),
              (this._isZoneStable = !0),
              (this._didWork = !1),
              (this._callbacks = []),
              (this.taskTrackingZone = null),
              this._watchAngularEvents(),
              e.run(() => {
                this.taskTrackingZone =
                  "undefined" == typeof Zone
                    ? null
                    : Zone.current.get("TaskTrackingZone");
              });
          }
          _watchAngularEvents() {
            this._ngZone.onUnstable.subscribe({
              next: () => {
                (this._didWork = !0), (this._isZoneStable = !1);
              },
            }),
              this._ngZone.runOutsideAngular(() => {
                this._ngZone.onStable.subscribe({
                  next: () => {
                    Ty.assertNotInAngularZone(),
                      ky(() => {
                        (this._isZoneStable = !0), this._runCallbacksIfReady();
                      });
                  },
                });
              });
          }
          increasePendingRequestCount() {
            return (
              (this._pendingCount += 1),
              (this._didWork = !0),
              this._pendingCount
            );
          }
          decreasePendingRequestCount() {
            if (((this._pendingCount -= 1), this._pendingCount < 0))
              throw new Error("pending async requests below zero");
            return this._runCallbacksIfReady(), this._pendingCount;
          }
          isStable() {
            return (
              this._isZoneStable &&
              0 === this._pendingCount &&
              !this._ngZone.hasPendingMacrotasks
            );
          }
          _runCallbacksIfReady() {
            if (this.isStable())
              ky(() => {
                for (; 0 !== this._callbacks.length; ) {
                  let e = this._callbacks.pop();
                  clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                }
                this._didWork = !1;
              });
            else {
              let e = this.getPendingTasks();
              (this._callbacks = this._callbacks.filter(
                (t) =>
                  !t.updateCb ||
                  !t.updateCb(e) ||
                  (clearTimeout(t.timeoutId), !1)
              )),
                (this._didWork = !0);
            }
          }
          getPendingTasks() {
            return this.taskTrackingZone
              ? this.taskTrackingZone.macroTasks.map((e) => ({
                  source: e.source,
                  creationLocation: e.creationLocation,
                  data: e.data,
                }))
              : [];
          }
          addCallback(e, t, n) {
            let r = -1;
            t &&
              t > 0 &&
              (r = setTimeout(() => {
                (this._callbacks = this._callbacks.filter(
                  (e) => e.timeoutId !== r
                )),
                  e(this._didWork, this.getPendingTasks());
              }, t)),
              this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
          }
          whenStable(e, t, n) {
            if (n && !this.taskTrackingZone)
              throw new Error(
                'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
              );
            this.addCallback(e, t, n), this._runCallbacksIfReady();
          }
          getPendingRequestCount() {
            return this._pendingCount;
          }
          findProviders(e, t, n) {
            return [];
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(ge(Ty));
          }),
          (e.ɵprov = x({ token: e, factory: e.ɵfac })),
          e
        );
      })(),
      By = (() => {
        class e {
          constructor() {
            (this._applications = new Map()), qy.addToWindow(this);
          }
          registerApplication(e, t) {
            this._applications.set(e, t);
          }
          unregisterApplication(e) {
            this._applications.delete(e);
          }
          unregisterAllApplications() {
            this._applications.clear();
          }
          getTestability(e) {
            return this._applications.get(e) || null;
          }
          getAllTestabilities() {
            return Array.from(this._applications.values());
          }
          getAllRootElements() {
            return Array.from(this._applications.keys());
          }
          findTestabilityInTree(e, t = !0) {
            return qy.findTestabilityInTree(this, e, t);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = x({ token: e, factory: e.ɵfac })),
          e
        );
      })();
    class Hy {
      addToWindow(e) {}
      findTestabilityInTree(e, t, n) {
        return null;
      }
    }
    function $y(e) {
      qy = e;
    }
    let zy,
      qy = new Hy(),
      Wy = Qy;
    function Qy(e, t, n) {
      const r = new sg(n);
      return Promise.resolve(r);
    }
    let Gy = Zy;
    function Zy(e) {
      return e.isBoundToModule;
    }
    const Ky = new oe("AllowMultipleToken");
    class Yy {
      constructor(e, t) {
        (this.name = e), (this.token = t);
      }
    }
    function Jy(e) {
      if (zy && !zy.destroyed && !zy.injector.get(Ky, !1))
        throw new Error(
          "There can be only one platform. Destroy the previous one to create a new one."
        );
      zy = e.get(rb);
      const t = e.get(sy, null);
      return t && t.forEach((e) => e()), zy;
    }
    function Xy(e, t, n = []) {
      const r = "Platform: " + t,
        o = new oe(r);
      return (t = []) => {
        let i = nb();
        if (!i || i.injector.get(Ky, !1))
          if (e) e(n.concat(t).concat({ provide: o, useValue: !0 }));
          else {
            const e = n
              .concat(t)
              .concat(
                { provide: o, useValue: !0 },
                { provide: $s, useValue: "platform" }
              );
            Jy(iu.create({ providers: e, name: r }));
          }
        return eb(o);
      };
    }
    function eb(e) {
      const t = nb();
      if (!t) throw new Error("No platform exists!");
      if (!t.injector.get(e, null))
        throw new Error(
          "A platform with a different configuration has been created. Please destroy it first."
        );
      return t;
    }
    function tb() {
      zy && !zy.destroyed && zy.destroy();
    }
    function nb() {
      return zy && !zy.destroyed ? zy : null;
    }
    let rb = (() => {
      class e {
        constructor(e) {
          (this._injector = e),
            (this._modules = []),
            (this._destroyListeners = []),
            (this._destroyed = !1);
        }
        bootstrapModuleFactory(e, t) {
          const n = (function (e, t) {
              let n;
              return (
                (n =
                  "noop" === e
                    ? new Vy()
                    : ("zone.js" === e ? void 0 : e) ||
                      new Ty({
                        enableLongStackTrace: jr(),
                        shouldCoalesceEventChangeDetection: t,
                      })),
                n
              );
            })(t ? t.ngZone : void 0, (t && t.ngZoneEventCoalescing) || !1),
            r = [{ provide: Ty, useValue: n }];
          return n.run(() => {
            const t = iu.create({
                providers: r,
                parent: this.injector,
                name: e.moduleType.name,
              }),
              o = e.create(t),
              i = o.injector.get(dr, null);
            if (!i)
              throw new Error(
                "No ErrorHandler. Is platform module (BrowserModule) included?"
              );
            return (
              o.onDestroy(() => sb(this._modules, o)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: (e) => {
                    i.handleError(e);
                  },
                })
              ),
              (function (e, t, n) {
                try {
                  const r = n();
                  return fc(r)
                    ? r.catch((n) => {
                        throw (t.runOutsideAngular(() => e.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (t.runOutsideAngular(() => e.handleError(r)), r);
                }
              })(i, n, () => {
                const e = o.injector.get(ty);
                return (
                  e.runInitializers(),
                  e.donePromise.then(
                    () => (
                      yy && rp(o.injector.get(dy, ep) || ep),
                      this._moduleDoBootstrap(o),
                      o
                    )
                  )
                );
              })
            );
          });
        }
        bootstrapModule(e, t = []) {
          const n = ob({}, t);
          return Wy(this.injector, n, e).then((e) =>
            this.bootstrapModuleFactory(e, n)
          );
        }
        _moduleDoBootstrap(e) {
          const t = e.injector.get(ib);
          if (e._bootstrapComponents.length > 0)
            e._bootstrapComponents.forEach((e) => t.bootstrap(e));
          else {
            if (!e.instance.ngDoBootstrap)
              throw new Error(
                `The module ${L(
                  e.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
              );
            e.instance.ngDoBootstrap(t);
          }
          this._modules.push(e);
        }
        onDestroy(e) {
          this._destroyListeners.push(e);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed)
            throw new Error("The platform has already been destroyed!");
          this._modules.slice().forEach((e) => e.destroy()),
            this._destroyListeners.forEach((e) => e()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(ge(iu));
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    function ob(e, t) {
      return Array.isArray(t)
        ? t.reduce(ob, e)
        : Object.assign(Object.assign({}, e), t);
    }
    let ib = (() => {
      class e {
        constructor(e, t, n, r, o, a) {
          (this._zone = e),
            (this._console = t),
            (this._injector = n),
            (this._exceptionHandler = r),
            (this._componentFactoryResolver = o),
            (this._initStatus = a),
            (this._bootstrapListeners = []),
            (this._views = []),
            (this._runningTick = !1),
            (this._enforceNoNewChanges = !1),
            (this._stable = !0),
            (this.componentTypes = []),
            (this.components = []),
            (this._enforceNoNewChanges = jr()),
            this._zone.onMicrotaskEmpty.subscribe({
              next: () => {
                this._zone.run(() => {
                  this.tick();
                });
              },
            });
          const c = new i.Observable((e) => {
              (this._stable =
                this._zone.isStable &&
                !this._zone.hasPendingMacrotasks &&
                !this._zone.hasPendingMicrotasks),
                this._zone.runOutsideAngular(() => {
                  e.next(this._stable), e.complete();
                });
            }),
            l = new i.Observable((e) => {
              let t;
              this._zone.runOutsideAngular(() => {
                t = this._zone.onStable.subscribe(() => {
                  Ty.assertNotInAngularZone(),
                    ky(() => {
                      this._stable ||
                        this._zone.hasPendingMacrotasks ||
                        this._zone.hasPendingMicrotasks ||
                        ((this._stable = !0), e.next(!0));
                    });
                });
              });
              const n = this._zone.onUnstable.subscribe(() => {
                Ty.assertInAngularZone(),
                  this._stable &&
                    ((this._stable = !1),
                    this._zone.runOutsideAngular(() => {
                      e.next(!1);
                    }));
              });
              return () => {
                t.unsubscribe(), n.unsubscribe();
              };
            });
          this.isStable = Object(s.merge)(c, l.pipe(Object(u.share)()));
        }
        bootstrap(e, t) {
          if (!this._initStatus.done)
            throw new Error(
              "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
            );
          let n;
          (n =
            e instanceof id
              ? e
              : this._componentFactoryResolver.resolveComponentFactory(e)),
            this.componentTypes.push(n.componentType);
          const r = Gy(n) ? void 0 : this._injector.get(Ce),
            o = n.create(iu.NULL, [], t || n.selector, r);
          o.onDestroy(() => {
            this._unloadComponent(o);
          });
          const i = o.injector.get(Uy, null);
          return (
            i &&
              o.injector
                .get(By)
                .registerApplication(o.location.nativeElement, i),
            this._loadComponent(o),
            jr() &&
              this._console.log(
                "Angular is running in development mode. Call enableProdMode() to enable production mode."
              ),
            o
          );
        }
        tick() {
          if (this._runningTick)
            throw new Error("ApplicationRef.tick is called recursively");
          try {
            this._runningTick = !0;
            for (let e of this._views) e.detectChanges();
            if (this._enforceNoNewChanges)
              for (let e of this._views) e.checkNoChanges();
          } catch (e) {
            this._zone.runOutsideAngular(() =>
              this._exceptionHandler.handleError(e)
            );
          } finally {
            this._runningTick = !1;
          }
        }
        attachView(e) {
          const t = e;
          this._views.push(t), t.attachToAppRef(this);
        }
        detachView(e) {
          const t = e;
          sb(this._views, t), t.detachFromAppRef();
        }
        _loadComponent(e) {
          this.attachView(e.hostView),
            this.tick(),
            this.components.push(e),
            this._injector
              .get(ay, [])
              .concat(this._bootstrapListeners)
              .forEach((t) => t(e));
        }
        _unloadComponent(e) {
          this.detachView(e.hostView), sb(this.components, e);
        }
        ngOnDestroy() {
          this._views.slice().forEach((e) => e.destroy());
        }
        get viewCount() {
          return this._views.length;
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(ge(Ty), ge(ly), ge(iu), ge(dr), ge(cd), ge(ty));
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    function sb(e, t) {
      const n = e.indexOf(t);
      n > -1 && e.splice(n, 1);
    }
    class ub {}
    function ab(e) {
      const t = og(e);
      if (!t) throw db(e);
      return t;
    }
    function cb(e) {
      const t = og(e);
      if (!t) throw db(e);
      return new sg(t);
    }
    const lb = cb;
    function db(e) {
      return new Error(`No module with ID ${e} loaded`);
    }
    class fb {}
    const hb = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
    let pb = (() => {
      class e {
        constructor(e, t) {
          (this._compiler = e), (this._config = t || hb);
        }
        load(e) {
          return !yy && this._compiler instanceof xy
            ? this.loadFactory(e)
            : this.loadAndCompile(e);
        }
        loadAndCompile(e) {
          let [t, r] = e.split("#");
          return (
            void 0 === r && (r = "default"),
            n("zn8P")(t)
              .then((e) => e[r])
              .then((e) => gb(e, t, r))
              .then((e) => this._compiler.compileModuleAsync(e))
          );
        }
        loadFactory(e) {
          let [t, r] = e.split("#"),
            o = "NgFactory";
          return (
            void 0 === r && ((r = "default"), (o = "")),
            n("zn8P")(
              this._config.factoryPathPrefix +
                t +
                this._config.factoryPathSuffix
            )
              .then((e) => e[r + o])
              .then((e) => gb(e, t, r))
          );
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(ge(xy), ge(fb, 8));
        }),
        (e.ɵprov = x({ token: e, factory: e.ɵfac })),
        e
      );
    })();
    function gb(e, t, n) {
      if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
      return e;
    }
    class mb extends _s {}
    class yb extends mb {}
    class bb {
      constructor(e, t) {
        (this.name = e), (this.callback = t);
      }
    }
    class vb {
      constructor(e, t, n) {
        (this.listeners = []),
          (this.parent = null),
          (this._debugContext = n),
          (this.nativeNode = e),
          t && t instanceof _b && t.addChild(this);
      }
      get injector() {
        return this._debugContext.injector;
      }
      get componentInstance() {
        return this._debugContext.component;
      }
      get context() {
        return this._debugContext.context;
      }
      get references() {
        return this._debugContext.references;
      }
      get providerTokens() {
        return this._debugContext.providerTokens;
      }
    }
    class _b extends vb {
      constructor(e, t, n) {
        super(e, t, n),
          (this.properties = {}),
          (this.attributes = {}),
          (this.classes = {}),
          (this.styles = {}),
          (this.childNodes = []),
          (this.nativeElement = e);
      }
      addChild(e) {
        e && (this.childNodes.push(e), (e.parent = this));
      }
      removeChild(e) {
        const t = this.childNodes.indexOf(e);
        -1 !== t && ((e.parent = null), this.childNodes.splice(t, 1));
      }
      insertChildrenAfter(e, t) {
        const n = this.childNodes.indexOf(e);
        -1 !== n &&
          (this.childNodes.splice(n + 1, 0, ...t),
          t.forEach((t) => {
            t.parent && t.parent.removeChild(t), (e.parent = this);
          }));
      }
      insertBefore(e, t) {
        const n = this.childNodes.indexOf(e);
        -1 === n
          ? this.addChild(t)
          : (t.parent && t.parent.removeChild(t),
            (t.parent = this),
            this.childNodes.splice(n, 0, t));
      }
      query(e) {
        return this.queryAll(e)[0] || null;
      }
      queryAll(e) {
        const t = [];
        return Cb(this, e, t), t;
      }
      queryAllNodes(e) {
        const t = [];
        return Db(this, e, t), t;
      }
      get children() {
        return this.childNodes.filter((e) => e instanceof _b);
      }
      triggerEventHandler(e, t) {
        this.listeners.forEach((n) => {
          n.name == e && n.callback(t);
        });
      }
    }
    function wb(e) {
      return e.map((e) => e.nativeElement);
    }
    function Cb(e, t, n) {
      e.childNodes.forEach((e) => {
        e instanceof _b && (t(e) && n.push(e), Cb(e, t, n));
      });
    }
    function Db(e, t, n) {
      e instanceof _b &&
        e.childNodes.forEach((e) => {
          t(e) && n.push(e), e instanceof _b && Db(e, t, n);
        });
    }
    class Eb {
      constructor(e) {
        this.nativeNode = e;
      }
      get parent() {
        const e = this.nativeNode.parentNode;
        return e ? new Sb(e) : null;
      }
      get injector() {
        return Gu(this.nativeNode);
      }
      get componentInstance() {
        const e = this.nativeNode;
        return e && (zu(e) || Wu(e));
      }
      get context() {
        return zu(this.nativeNode) || qu(this.nativeNode);
      }
      get listeners() {
        return Ju(this.nativeNode).filter((e) => "dom" === e.type);
      }
      get references() {
        return (function (e) {
          const t = Ku(e, !1);
          return null === t
            ? {}
            : (void 0 === t.localRefs &&
                (t.localRefs = (function (e, t) {
                  const n = e[1].data[t];
                  if (n && n.localNames) {
                    const t = {};
                    let r = n.index + 1;
                    for (let o = 0; o < n.localNames.length; o += 2)
                      (t[n.localNames[o]] = e[r]), r++;
                    return t;
                  }
                  return null;
                })(t.lView, t.nodeIndex)),
              t.localRefs || {});
        })(this.nativeNode);
      }
      get providerTokens() {
        return (function (e) {
          const t = Ku(e, !1);
          if (null === t) return [];
          const n = t.lView[1],
            r = n.data[t.nodeIndex],
            o = [],
            i = r.directiveEnd;
          for (let u = 1048575 & r.providerIndexes; u < i; u++) {
            let e = n.data[u];
            void 0 !== (s = e).type &&
              void 0 !== s.template &&
              void 0 !== s.declaredInputs &&
              (e = e.type),
              o.push(e);
          }
          var s;
          return o;
        })(this.nativeNode);
      }
    }
    class Sb extends Eb {
      constructor(e) {
        super(e);
      }
      get nativeElement() {
        return this.nativeNode.nodeType == Node.ELEMENT_NODE
          ? this.nativeNode
          : null;
      }
      get name() {
        try {
          const e = Ku(this.nativeNode);
          return e.lView[1].data[e.nodeIndex].tagName;
        } catch (e) {
          return this.nativeNode.nodeName;
        }
      }
      get properties() {
        const e = Ku(this.nativeNode, !1);
        if (null == e) return {};
        const t = e.lView,
          n = t[1].data,
          r = n[e.nodeIndex],
          o = {};
        return (
          (function (e, t) {
            if (e) {
              let n = Object.getPrototypeOf(e);
              const r = Node.prototype;
              for (; null !== n && n !== r; ) {
                const r = Object.getOwnPropertyDescriptors(n);
                for (let n in r)
                  if (!n.startsWith("__") && !n.startsWith("on")) {
                    const r = e[n];
                    Ob(r) && (t[n] = r);
                  }
                n = Object.getPrototypeOf(n);
              }
            }
          })(this.nativeElement, o),
          (function (e, t, n, r) {
            let o = t.propertyBindings;
            if (null !== o)
              for (let i = 0; i < o.length; i++) {
                const t = o[i],
                  s = r[t].split("\ufffd"),
                  u = s[0];
                if (s.length > 1) {
                  let r = s[1];
                  for (let e = 1; e < s.length - 1; e++)
                    r += Nn(n[t + e - 1]) + s[e + 1];
                  e[u] = r;
                } else e[u] = n[t];
              }
          })(o, r, t, n),
          o
        );
      }
      get attributes() {
        const e = {},
          t = this.nativeElement;
        if (!t) return e;
        const n = Ku(t, !1);
        if (null == n) return {};
        const r = n.lView[1].data[n.nodeIndex].attrs,
          o = [];
        if (r) {
          let t = 0;
          for (; t < r.length; ) {
            const n = r[t];
            if ("string" != typeof n) break;
            (e[n] = r[t + 1]), o.push(n.toLowerCase()), (t += 2);
          }
        }
        const i = t.attributes;
        for (let s = 0; s < i.length; s++) {
          const t = i[s],
            n = t.name.toLowerCase();
          -1 === o.indexOf(n) && (e[n] = t.value);
        }
        return e;
      }
      get styles() {
        return this.nativeElement && this.nativeElement.style
          ? this.nativeElement.style
          : {};
      }
      get classes() {
        const e = {},
          t = this.nativeElement.className;
        return (
          (t && "string" != typeof t
            ? t.baseVal.split(" ")
            : t.split(" ")
          ).forEach((t) => (e[t] = !0)),
          e
        );
      }
      get childNodes() {
        const e = this.nativeNode.childNodes,
          t = [];
        for (let n = 0; n < e.length; n++) t.push(Rb(e[n]));
        return t;
      }
      get children() {
        const e = this.nativeElement;
        if (!e) return [];
        const t = e.children,
          n = [];
        for (let r = 0; r < t.length; r++) n.push(Rb(t[r]));
        return n;
      }
      query(e) {
        return this.queryAll(e)[0] || null;
      }
      queryAll(e) {
        const t = [];
        return xb(this, e, t, !0), t;
      }
      queryAllNodes(e) {
        const t = [];
        return xb(this, e, t, !1), t;
      }
      triggerEventHandler(e, t) {
        const n = this.nativeNode,
          r = [];
        this.listeners.forEach((o) => {
          if (o.name === e) {
            const e = o.callback;
            e.call(n, t), r.push(e);
          }
        }),
          "function" == typeof n.eventListeners &&
            n.eventListeners(e).forEach((e) => {
              if (-1 !== e.toString().indexOf("__ngUnwrap__")) {
                const o = e("__ngUnwrap__");
                return -1 === r.indexOf(o) && o.call(n, t);
              }
            });
      }
    }
    function Ob(e) {
      return (
        "string" == typeof e ||
        "boolean" == typeof e ||
        "number" == typeof e ||
        null === e
      );
    }
    function xb(e, t, n, r) {
      const o = Ku(e.nativeNode, !1);
      null !== o
        ? Ib(o.lView[1].data[o.nodeIndex], o.lView, t, n, r, e.nativeNode)
        : kb(e.nativeNode, t, n, r);
    }
    function Ib(e, t, n, r, o, i) {
      const s = (function (e, t) {
        const n = null === e ? -1 : e.index;
        return -1 !== n ? Dt(t[n]) : null;
      })(e, t);
      if (2 === e.type || 3 === e.type) {
        if ((jb(s, n, r, o, i), st(e))) {
          const s = It(e.index, t);
          s && s[1].firstChild && Ib(s[1].firstChild, s, n, r, o, i);
        } else e.child && Ib(e.child, t, n, r, o, i), s && kb(s, n, r, o);
        const u = t[e.index];
        ot(u) && Ab(u, n, r, o, i);
      } else if (0 === e.type) {
        const s = t[e.index];
        jb(s[7], n, r, o, i), Ab(s, n, r, o, i);
      } else if (1 === e.type) {
        const s = t[16],
          u = s[6].projection[e.projection];
        if (Array.isArray(u)) for (let e of u) jb(e, n, r, o, i);
        else if (u) {
          const e = s[3];
          Ib(e[1].data[u.index], e, n, r, o, i);
        }
      } else e.child && Ib(e.child, t, n, r, o, i);
      if (i !== s) {
        const s = 4 & e.flags ? e.projectionNext : e.next;
        s && Ib(s, t, n, r, o, i);
      }
    }
    function Ab(e, t, n, r, o) {
      for (let i = nt; i < e.length; i++) {
        const s = e[i],
          u = s[1].firstChild;
        u && Ib(u, s, t, n, r, o);
      }
    }
    function jb(e, t, n, r, o) {
      if (o !== e) {
        const o = Fb(e);
        if (!o) return;
        ((r && o instanceof Sb && t(o) && -1 === n.indexOf(o)) ||
          (!r && t(o) && -1 === n.indexOf(o))) &&
          n.push(o);
      }
    }
    function kb(e, t, n, r) {
      const o = e.childNodes,
        i = o.length;
      for (let s = 0; s < i; s++) {
        const e = o[s],
          i = Fb(e);
        i &&
          (((r && i instanceof Sb && t(i) && -1 === n.indexOf(i)) ||
            (!r && t(i) && -1 === n.indexOf(i))) &&
            n.push(i),
          kb(e, t, n, r));
      }
    }
    const Tb = new Map();
    function Rb(e) {
      return e instanceof Node
        ? (e.hasOwnProperty("__ng_debug__") ||
            (e.__ng_debug__ =
              e.nodeType == Node.ELEMENT_NODE ? new Sb(e) : new Eb(e)),
          e.__ng_debug__)
        : null;
    }
    const Fb = Rb;
    function Pb(e) {
      return (function (e) {
        return Tb.get(e) || null;
      })(e);
    }
    const Nb = function (e) {
      return null;
    };
    function Mb(e) {
      Tb.set(e.nativeNode, e);
    }
    const Lb = Eb,
      Vb = Sb,
      Ub = Xy(null, "core", [
        { provide: uy, useValue: "unknown" },
        { provide: rb, deps: [iu] },
        { provide: By, deps: [] },
        { provide: ly, deps: [] },
      ]);
    function Bb() {
      return Nd;
    }
    function Hb() {
      return Md;
    }
    function $b(e) {
      return (
        (e =
          e ||
          (yy && "undefined" != typeof $localize && $localize.locale) ||
          ep),
        yy && rp(e),
        e
      );
    }
    const zb = tp,
      qb = [
        { provide: ib, useClass: ib, deps: [Ty, ly, iu, dr, cd, ty] },
        { provide: Uh, deps: [Ty], useFactory: Wb },
        { provide: ty, useClass: ty, deps: [[new b(), ey]] },
        { provide: xy, useClass: xy, deps: [] },
        oy,
        { provide: Rd, useFactory: Bb, deps: [] },
        { provide: Fd, useFactory: Hb, deps: [] },
        { provide: dy, useFactory: $b, deps: [[new y(dy), new b(), new _()]] },
        { provide: fy, useValue: zb },
      ];
    function Wb(e) {
      let t = [];
      return (
        e.onStable.subscribe(() => {
          for (; t.length; ) t.pop()();
        }),
        function (e) {
          t.push(e);
        }
      );
    }
    let Qb = (() => {
      class e {
        constructor(e) {}
      }
      return (
        (e.ɵmod = qe({ type: e })),
        (e.ɵinj = A({
          factory: function (t) {
            return new (t || e)(ge(ib));
          },
          providers: qb,
        })),
        e
      );
    })();
    function Gb(e, t, n, r, o, i) {
      e |= 1;
      const { matchedQueries: s, references: u, matchedQueryIds: a } = Df(t);
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        flags: e,
        checkIndex: -1,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: s,
        matchedQueryIds: a,
        references: u,
        ngContentIndex: n,
        childCount: r,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: {
          ns: null,
          name: null,
          attrs: null,
          template: i ? xf(i) : null,
          componentProvider: null,
          componentView: null,
          componentRendererType: null,
          publicProviders: null,
          allProviders: null,
          handleEvent: o || nf,
        },
        provider: null,
        text: null,
        query: null,
        ngContent: null,
      };
    }
    function Zb(e, t, n, r, o, i, s = [], u, a, c, l, d) {
      c || (c = nf);
      const { matchedQueries: f, references: h, matchedQueryIds: p } = Df(n);
      let g = null,
        m = null;
      i && ([g, m] = Ff(i)), (u = u || []);
      const y = [];
      for (let _ = 0; _ < u.length; _++) {
        const [e, t, n] = u[_],
          [r, o] = Ff(t);
        let i = void 0,
          s = void 0;
        switch (15 & e) {
          case 4:
            s = n;
            break;
          case 1:
          case 8:
            i = n;
        }
        y[_] = {
          flags: e,
          ns: r,
          name: o,
          nonMinifiedName: o,
          securityContext: i,
          suffix: s,
        };
      }
      a = a || [];
      const b = [];
      for (let _ = 0; _ < a.length; _++) {
        const [e, t] = a[_];
        b[_] = { type: 0, target: e, eventName: t, propName: null };
      }
      const v = (s = s || []).map(([e, t]) => {
        const [n, r] = Ff(e);
        return [n, r, t];
      });
      return (
        (d = (function (e) {
          if (e && e.id === uf) {
            const t =
              (null != e.encapsulation && e.encapsulation !== Ne.None) ||
              e.styles.length ||
              Object.keys(e.data).length;
            e.id = t ? "c" + lf++ : af;
          }
          return e && e.id === af && (e = null), e || null;
        })(d)),
        l && (t |= 33554432),
        {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: e,
          flags: (t |= 1),
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: f,
          matchedQueryIds: p,
          references: h,
          ngContentIndex: r,
          childCount: o,
          bindings: y,
          bindingFlags: Pf(y),
          outputs: b,
          element: {
            ns: g,
            name: m,
            attrs: v,
            template: null,
            componentProvider: null,
            componentView: l || null,
            componentRendererType: d,
            publicProviders: null,
            allProviders: null,
            handleEvent: c || nf,
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null,
        }
      );
    }
    function Kb(e, t, n) {
      const r = n.element,
        o = e.root.selectorOrNode,
        i = e.renderer;
      let s;
      if (e.parent || !o) {
        s = r.name ? i.createElement(r.name, r.ns) : i.createComment("");
        const o = Sf(e, t, n);
        o && i.appendChild(o, s);
      } else
        s = i.selectRootElement(
          o,
          !!r.componentRendererType &&
            r.componentRendererType.encapsulation === Ne.ShadowDom
        );
      if (r.attrs)
        for (let u = 0; u < r.attrs.length; u++) {
          const [e, t, n] = r.attrs[u];
          i.setAttribute(s, t, n, e);
        }
      return s;
    }
    function Yb(e, t, n, r) {
      for (let s = 0; s < n.outputs.length; s++) {
        const u = n.outputs[s],
          a = Jb(
            e,
            n.nodeIndex,
            ((i = u.eventName), (o = u.target) ? `${o}:${i}` : i)
          );
        let c = u.target,
          l = e;
        "component" === u.target && ((c = null), (l = t));
        const d = l.renderer.listen(c || r, u.eventName, a);
        e.disposables[n.outputIndex + s] = d;
      }
      var o, i;
    }
    function Jb(e, t, n) {
      return (r) => mf(e, t, n, r);
    }
    function Xb(e, t, n, r) {
      if (!ff(e, t, n, r)) return !1;
      const o = t.bindings[n],
        i = Kd(e, t.nodeIndex),
        s = i.renderElement,
        u = o.name;
      switch (15 & o.flags) {
        case 1:
          !(function (e, t, n, r, o, i) {
            const s = t.securityContext;
            let u = s ? e.root.sanitizer.sanitize(s, i) : i;
            u = null != u ? u.toString() : null;
            const a = e.renderer;
            null != i ? a.setAttribute(n, o, u, r) : a.removeAttribute(n, o, r);
          })(e, o, s, o.ns, u, r);
          break;
        case 2:
          !(function (e, t, n, r) {
            const o = e.renderer;
            r ? o.addClass(t, n) : o.removeClass(t, n);
          })(e, s, u, r);
          break;
        case 4:
          !(function (e, t, n, r, o) {
            let i = e.root.sanitizer.sanitize(ro.STYLE, o);
            if (null != i) {
              i = i.toString();
              const e = t.suffix;
              null != e && (i += e);
            } else i = null;
            const s = e.renderer;
            null != i ? s.setStyle(n, r, i) : s.removeStyle(n, r);
          })(e, o, s, u, r);
          break;
        case 8:
          !(function (e, t, n, r, o) {
            const i = t.securityContext;
            let s = i ? e.root.sanitizer.sanitize(i, o) : o;
            e.renderer.setProperty(n, r, s);
          })(
            33554432 & t.flags && 32 & o.flags ? i.componentView : e,
            o,
            s,
            u,
            r
          );
      }
      return !0;
    }
    function ev(e, t, n) {
      let r = [];
      for (let o in n) r.push({ propName: o, bindingType: n[o] });
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: -1,
        flags: e,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        ngContentIndex: -1,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: { id: t, filterId: Cf(t), bindings: r },
        ngContent: null,
      };
    }
    function tv(e) {
      const t = e.def.nodeMatchedQueries;
      for (; e.parent && wf(e); ) {
        let n = e.parentNodeDef;
        e = e.parent;
        const r = n.nodeIndex + n.childCount;
        for (let o = 0; o <= r; o++) {
          const r = e.def.nodes[o];
          67108864 & r.flags &&
            536870912 & r.flags &&
            (r.query.filterId & t) === r.query.filterId &&
            Xd(e, o).setDirty(),
            (!(1 & r.flags && o + r.childCount < n.nodeIndex) &&
              67108864 & r.childFlags &&
              536870912 & r.childFlags) ||
              (o += r.childCount);
        }
      }
      if (134217728 & e.def.nodeFlags)
        for (let n = 0; n < e.def.nodes.length; n++) {
          const t = e.def.nodes[n];
          134217728 & t.flags && 536870912 & t.flags && Xd(e, n).setDirty(),
            (n += t.childCount);
        }
    }
    function nv(e, t) {
      const n = Xd(e, t.nodeIndex);
      if (!n.dirty) return;
      let r,
        o = void 0;
      if (67108864 & t.flags) {
        const n = t.parent.parent;
        (o = rv(e, n.nodeIndex, n.nodeIndex + n.childCount, t.query, [])),
          (r = Yd(e, t.parent.nodeIndex).instance);
      } else
        134217728 & t.flags &&
          ((o = rv(e, 0, e.def.nodes.length - 1, t.query, [])),
          (r = e.component));
      n.reset(o);
      const i = t.query.bindings;
      let s = !1;
      for (let u = 0; u < i.length; u++) {
        const e = i[u];
        let t;
        switch (e.bindingType) {
          case 0:
            t = n.first;
            break;
          case 1:
            (t = n), (s = !0);
        }
        r[e.propName] = t;
      }
      s && n.notifyOnChanges();
    }
    function rv(e, t, n, r, o) {
      for (let i = t; i <= n; i++) {
        const t = e.def.nodes[i],
          n = t.matchedQueries[r.id];
        if (
          (null != n && o.push(ov(e, t, n)),
          1 & t.flags &&
            t.element.template &&
            (t.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
        ) {
          const n = Kd(e, i);
          if (
            ((t.childMatchedQueries & r.filterId) === r.filterId &&
              (rv(e, i + 1, i + t.childCount, r, o), (i += t.childCount)),
            16777216 & t.flags)
          ) {
            const e = n.viewContainer._embeddedViews;
            for (let t = 0; t < e.length; t++) {
              const i = e[t],
                s = yf(i);
              s && s === n && rv(i, 0, i.def.nodes.length - 1, r, o);
            }
          }
          const s = n.template._projectedViews;
          if (s)
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              rv(t, 0, t.def.nodes.length - 1, r, o);
            }
        }
        (t.childMatchedQueries & r.filterId) !== r.filterId &&
          (i += t.childCount);
      }
      return o;
    }
    function ov(e, t, n) {
      if (null != n)
        switch (n) {
          case 1:
            return Kd(e, t.nodeIndex).renderElement;
          case 0:
            return new fd(Kd(e, t.nodeIndex).renderElement);
          case 2:
            return Kd(e, t.nodeIndex).template;
          case 3:
            return Kd(e, t.nodeIndex).viewContainer;
          case 4:
            return Yd(e, t.nodeIndex).instance;
        }
    }
    function iv(e, t) {
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: -1,
        flags: 8,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: e,
        childCount: 0,
        bindings: [],
        bindingFlags: 0,
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: { index: t },
      };
    }
    function sv(e, t, n) {
      const r = Sf(e, t, n);
      r && jf(e, n.ngContent.index, 1, r, null, void 0);
    }
    function uv(e, t) {
      return lv(128, e, Ae(t + 1));
    }
    function av(e, t) {
      return lv(32, e, Ae(t));
    }
    function cv(e, t) {
      const n = Object.keys(t),
        r = n.length,
        o = [];
      for (let i = 0; i < r; i++) o.push(n[i]);
      return lv(64, e, o);
    }
    function lv(e, t, n) {
      const r = [];
      for (let o = 0; o < n.length; o++) {
        const e = n[o];
        r.push({
          flags: 8,
          name: e,
          ns: null,
          nonMinifiedName: e,
          securityContext: null,
          suffix: null,
        });
      }
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: t,
        flags: e,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: -1,
        childCount: 0,
        bindings: r,
        bindingFlags: Pf(r),
        outputs: [],
        element: null,
        provider: null,
        text: null,
        query: null,
        ngContent: null,
      };
    }
    function dv(e, t, n) {
      const r = [];
      for (let o = 1; o < n.length; o++)
        r[o - 1] = {
          flags: 8,
          name: null,
          ns: null,
          nonMinifiedName: null,
          securityContext: null,
          suffix: n[o],
        };
      return {
        nodeIndex: -1,
        parent: null,
        renderParent: null,
        bindingIndex: -1,
        outputIndex: -1,
        checkIndex: e,
        flags: 2,
        childFlags: 0,
        directChildFlags: 0,
        childMatchedQueries: 0,
        matchedQueries: {},
        matchedQueryIds: 0,
        references: {},
        ngContentIndex: t,
        childCount: 0,
        bindings: r,
        bindingFlags: 8,
        outputs: [],
        element: null,
        provider: null,
        text: { prefix: n[0] },
        query: null,
        ngContent: null,
      };
    }
    function fv(e, t, n) {
      let r;
      const o = e.renderer;
      r = o.createText(n.text.prefix);
      const i = Sf(e, t, n);
      return i && o.appendChild(i, r), { renderText: r };
    }
    function hv(e, t) {
      return (null != e ? e.toString() : "") + t.suffix;
    }
    function pv(e, t, n, r) {
      let o = 0,
        i = 0,
        s = 0,
        u = 0,
        a = 0,
        c = null,
        l = null,
        d = !1,
        f = !1,
        h = null;
      for (let p = 0; p < t.length; p++) {
        const e = t[p];
        if (
          ((e.nodeIndex = p),
          (e.parent = c),
          (e.bindingIndex = o),
          (e.outputIndex = i),
          (e.renderParent = l),
          (s |= e.flags),
          (a |= e.matchedQueryIds),
          e.element)
        ) {
          const t = e.element;
          (t.publicProviders = c
            ? c.element.publicProviders
            : Object.create(null)),
            (t.allProviders = t.publicProviders),
            (d = !1),
            (f = !1),
            e.element.template && (a |= e.element.template.nodeMatchedQueries);
        }
        if (
          (mv(c, e, t.length),
          (o += e.bindings.length),
          (i += e.outputs.length),
          !l && 3 & e.flags && (h = e),
          20224 & e.flags)
        ) {
          d ||
            ((d = !0),
            (c.element.publicProviders = Object.create(
              c.element.publicProviders
            )),
            (c.element.allProviders = c.element.publicProviders));
          const t = 0 != (32768 & e.flags);
          0 == (8192 & e.flags) || t
            ? (c.element.publicProviders[of(e.provider.token)] = e)
            : (f ||
                ((f = !0),
                (c.element.allProviders = Object.create(
                  c.element.publicProviders
                ))),
              (c.element.allProviders[of(e.provider.token)] = e)),
            t && (c.element.componentProvider = e);
        }
        if (
          (c
            ? ((c.childFlags |= e.flags),
              (c.directChildFlags |= e.flags),
              (c.childMatchedQueries |= e.matchedQueryIds),
              e.element &&
                e.element.template &&
                (c.childMatchedQueries |=
                  e.element.template.nodeMatchedQueries))
            : (u |= e.flags),
          e.childCount > 0)
        )
          (c = e), gv(e) || (l = e);
        else
          for (; c && p === c.nodeIndex + c.childCount; ) {
            const e = c.parent;
            e &&
              ((e.childFlags |= c.childFlags),
              (e.childMatchedQueries |= c.childMatchedQueries)),
              (c = e),
              (l = c && gv(c) ? c.renderParent : c);
          }
      }
      return {
        factory: null,
        nodeFlags: s,
        rootNodeFlags: u,
        nodeMatchedQueries: a,
        flags: e,
        nodes: t,
        updateDirectives: n || nf,
        updateRenderer: r || nf,
        handleEvent: (e, n, r, o) => t[n].element.handleEvent(e, r, o),
        bindingCount: o,
        outputCount: i,
        lastRenderRootNode: h,
      };
    }
    function gv(e) {
      return 0 != (1 & e.flags) && null === e.element.name;
    }
    function mv(e, t, n) {
      const r = t.element && t.element.template;
      if (r) {
        if (!r.lastRenderRootNode)
          throw new Error(
            "Illegal State: Embedded templates without nodes are not allowed!"
          );
        if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
          throw new Error(
            `Illegal State: Last root node of a template can't have embedded views, at index ${t.nodeIndex}!`
          );
      }
      if (20224 & t.flags && 0 == (1 & (e ? e.flags : 0)))
        throw new Error(
          `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${t.nodeIndex}!`
        );
      if (t.query) {
        if (67108864 & t.flags && (!e || 0 == (16384 & e.flags)))
          throw new Error(
            `Illegal State: Content Query nodes need to be children of directives, at index ${t.nodeIndex}!`
          );
        if (134217728 & t.flags && e)
          throw new Error(
            `Illegal State: View Query nodes have to be top level nodes, at index ${t.nodeIndex}!`
          );
      }
      if (t.childCount) {
        const r = e ? e.nodeIndex + e.childCount : n - 1;
        if (t.nodeIndex <= r && t.nodeIndex + t.childCount > r)
          throw new Error(
            `Illegal State: childCount of node leads outside of parent, at index ${t.nodeIndex}!`
          );
      }
    }
    function yv(e, t, n, r) {
      const o = _v(e.root, e.renderer, e, t, n);
      return wv(o, e.component, r), Cv(o), o;
    }
    function bv(e, t, n) {
      const r = _v(e, e.renderer, null, null, t);
      return wv(r, n, n), Cv(r), r;
    }
    function vv(e, t, n, r) {
      const o = t.element.componentRendererType;
      let i;
      return (
        (i = o ? e.root.rendererFactory.createRenderer(r, o) : e.root.renderer),
        _v(e.root, i, e, t.element.componentProvider, n)
      );
    }
    function _v(e, t, n, r, o) {
      const i = new Array(o.nodes.length),
        s = o.outputCount ? new Array(o.outputCount) : null;
      return {
        def: o,
        parent: n,
        viewContainerParent: null,
        parentNodeDef: r,
        context: null,
        component: null,
        nodes: i,
        state: 13,
        root: e,
        renderer: t,
        oldValues: new Array(o.bindingCount),
        disposables: s,
        initIndex: -1,
      };
    }
    function wv(e, t, n) {
      (e.component = t), (e.context = n);
    }
    function Cv(e) {
      let t;
      _f(e) &&
        (t = Kd(e.parent, e.parentNodeDef.parent.nodeIndex).renderElement);
      const n = e.def,
        r = e.nodes;
      for (let o = 0; o < n.nodes.length; o++) {
        const i = n.nodes[o];
        let s;
        switch ((tf.setCurrentNode(e, o), 201347067 & i.flags)) {
          case 1:
            const n = Kb(e, t, i);
            let u = void 0;
            if (33554432 & i.flags) {
              const t = xf(i.element.componentView);
              u = tf.createComponentView(e, i, t, n);
            }
            Yb(e, u, i, n),
              (s = {
                renderElement: n,
                componentView: u,
                viewContainer: null,
                template: i.element.template ? uh(e, i) : void 0,
              }),
              16777216 & i.flags && (s.viewContainer = rh(e, i, s));
            break;
          case 2:
            s = fv(e, t, i);
            break;
          case 512:
          case 1024:
          case 2048:
          case 256:
            (s = r[o]), s || 4096 & i.flags || (s = { instance: Sh(e, i) });
            break;
          case 16:
            s = { instance: Oh(e, i) };
            break;
          case 16384:
            (s = r[o]),
              s || (s = { instance: xh(e, i) }),
              32768 & i.flags &&
                wv(
                  Kd(e, i.parent.nodeIndex).componentView,
                  s.instance,
                  s.instance
                );
            break;
          case 32:
          case 64:
          case 128:
            s = { value: void 0 };
            break;
          case 67108864:
          case 134217728:
            s = new Rg();
            break;
          case 8:
            sv(e, t, i), (s = void 0);
        }
        r[o] = s;
      }
      kv(e, jv.CreateViewNodes), Pv(e, 201326592, 268435456, 0);
    }
    function Dv(e) {
      Ov(e),
        tf.updateDirectives(e, 1),
        Tv(e, jv.CheckNoChanges),
        tf.updateRenderer(e, 1),
        kv(e, jv.CheckNoChanges),
        (e.state &= -97);
    }
    function Ev(e) {
      1 & e.state ? ((e.state &= -2), (e.state |= 2)) : (e.state &= -3),
        Qd(e, 0, 256),
        Ov(e),
        tf.updateDirectives(e, 0),
        Tv(e, jv.CheckAndUpdate),
        Pv(e, 67108864, 536870912, 0);
      let t = Qd(e, 256, 512);
      Ph(e, 2097152 | (t ? 1048576 : 0)),
        tf.updateRenderer(e, 0),
        kv(e, jv.CheckAndUpdate),
        Pv(e, 134217728, 536870912, 0),
        (t = Qd(e, 512, 768)),
        Ph(e, 8388608 | (t ? 4194304 : 0)),
        2 & e.def.flags && (e.state &= -9),
        (e.state &= -97),
        Qd(e, 768, 1024);
    }
    function Sv(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      return 0 === n
        ? (function (e, t, n, r, o, i, s, u, a, c, l, d) {
            switch (201347067 & t.flags) {
              case 1:
                return (function (e, t, n, r, o, i, s, u, a, c, l, d) {
                  const f = t.bindings.length;
                  let h = !1;
                  return (
                    f > 0 && Xb(e, t, 0, n) && (h = !0),
                    f > 1 && Xb(e, t, 1, r) && (h = !0),
                    f > 2 && Xb(e, t, 2, o) && (h = !0),
                    f > 3 && Xb(e, t, 3, i) && (h = !0),
                    f > 4 && Xb(e, t, 4, s) && (h = !0),
                    f > 5 && Xb(e, t, 5, u) && (h = !0),
                    f > 6 && Xb(e, t, 6, a) && (h = !0),
                    f > 7 && Xb(e, t, 7, c) && (h = !0),
                    f > 8 && Xb(e, t, 8, l) && (h = !0),
                    f > 9 && Xb(e, t, 9, d) && (h = !0),
                    h
                  );
                })(e, t, n, r, o, i, s, u, a, c, l, d);
              case 2:
                return (function (e, t, n, r, o, i, s, u, a, c, l, d) {
                  let f = !1;
                  const h = t.bindings,
                    p = h.length;
                  if (
                    (p > 0 && ff(e, t, 0, n) && (f = !0),
                    p > 1 && ff(e, t, 1, r) && (f = !0),
                    p > 2 && ff(e, t, 2, o) && (f = !0),
                    p > 3 && ff(e, t, 3, i) && (f = !0),
                    p > 4 && ff(e, t, 4, s) && (f = !0),
                    p > 5 && ff(e, t, 5, u) && (f = !0),
                    p > 6 && ff(e, t, 6, a) && (f = !0),
                    p > 7 && ff(e, t, 7, c) && (f = !0),
                    p > 8 && ff(e, t, 8, l) && (f = !0),
                    p > 9 && ff(e, t, 9, d) && (f = !0),
                    f)
                  ) {
                    let f = t.text.prefix;
                    p > 0 && (f += hv(n, h[0])),
                      p > 1 && (f += hv(r, h[1])),
                      p > 2 && (f += hv(o, h[2])),
                      p > 3 && (f += hv(i, h[3])),
                      p > 4 && (f += hv(s, h[4])),
                      p > 5 && (f += hv(u, h[5])),
                      p > 6 && (f += hv(a, h[6])),
                      p > 7 && (f += hv(c, h[7])),
                      p > 8 && (f += hv(l, h[8])),
                      p > 9 && (f += hv(d, h[9]));
                    const g = Zd(e, t.nodeIndex).renderText;
                    e.renderer.setValue(g, f);
                  }
                  return f;
                })(e, t, n, r, o, i, s, u, a, c, l, d);
              case 16384:
                return (function (e, t, n, r, o, i, s, u, a, c, l, d) {
                  const f = Yd(e, t.nodeIndex),
                    h = f.instance;
                  let p = !1,
                    g = void 0;
                  const m = t.bindings.length;
                  return (
                    m > 0 &&
                      df(e, t, 0, n) &&
                      ((p = !0), (g = Fh(e, f, t, 0, n, g))),
                    m > 1 &&
                      df(e, t, 1, r) &&
                      ((p = !0), (g = Fh(e, f, t, 1, r, g))),
                    m > 2 &&
                      df(e, t, 2, o) &&
                      ((p = !0), (g = Fh(e, f, t, 2, o, g))),
                    m > 3 &&
                      df(e, t, 3, i) &&
                      ((p = !0), (g = Fh(e, f, t, 3, i, g))),
                    m > 4 &&
                      df(e, t, 4, s) &&
                      ((p = !0), (g = Fh(e, f, t, 4, s, g))),
                    m > 5 &&
                      df(e, t, 5, u) &&
                      ((p = !0), (g = Fh(e, f, t, 5, u, g))),
                    m > 6 &&
                      df(e, t, 6, a) &&
                      ((p = !0), (g = Fh(e, f, t, 6, a, g))),
                    m > 7 &&
                      df(e, t, 7, c) &&
                      ((p = !0), (g = Fh(e, f, t, 7, c, g))),
                    m > 8 &&
                      df(e, t, 8, l) &&
                      ((p = !0), (g = Fh(e, f, t, 8, l, g))),
                    m > 9 &&
                      df(e, t, 9, d) &&
                      ((p = !0), (g = Fh(e, f, t, 9, d, g))),
                    g && h.ngOnChanges(g),
                    65536 & t.flags && Gd(e, 256, t.nodeIndex) && h.ngOnInit(),
                    262144 & t.flags && h.ngDoCheck(),
                    p
                  );
                })(e, t, n, r, o, i, s, u, a, c, l, d);
              case 32:
              case 64:
              case 128:
                return (function (e, t, n, r, o, i, s, u, a, c, l, d) {
                  const f = t.bindings;
                  let h = !1;
                  const p = f.length;
                  if (
                    (p > 0 && ff(e, t, 0, n) && (h = !0),
                    p > 1 && ff(e, t, 1, r) && (h = !0),
                    p > 2 && ff(e, t, 2, o) && (h = !0),
                    p > 3 && ff(e, t, 3, i) && (h = !0),
                    p > 4 && ff(e, t, 4, s) && (h = !0),
                    p > 5 && ff(e, t, 5, u) && (h = !0),
                    p > 6 && ff(e, t, 6, a) && (h = !0),
                    p > 7 && ff(e, t, 7, c) && (h = !0),
                    p > 8 && ff(e, t, 8, l) && (h = !0),
                    p > 9 && ff(e, t, 9, d) && (h = !0),
                    h)
                  ) {
                    const h = Jd(e, t.nodeIndex);
                    let g;
                    switch (201347067 & t.flags) {
                      case 32:
                        (g = []),
                          p > 0 && g.push(n),
                          p > 1 && g.push(r),
                          p > 2 && g.push(o),
                          p > 3 && g.push(i),
                          p > 4 && g.push(s),
                          p > 5 && g.push(u),
                          p > 6 && g.push(a),
                          p > 7 && g.push(c),
                          p > 8 && g.push(l),
                          p > 9 && g.push(d);
                        break;
                      case 64:
                        (g = {}),
                          p > 0 && (g[f[0].name] = n),
                          p > 1 && (g[f[1].name] = r),
                          p > 2 && (g[f[2].name] = o),
                          p > 3 && (g[f[3].name] = i),
                          p > 4 && (g[f[4].name] = s),
                          p > 5 && (g[f[5].name] = u),
                          p > 6 && (g[f[6].name] = a),
                          p > 7 && (g[f[7].name] = c),
                          p > 8 && (g[f[8].name] = l),
                          p > 9 && (g[f[9].name] = d);
                        break;
                      case 128:
                        const e = n;
                        switch (p) {
                          case 1:
                            g = e.transform(n);
                            break;
                          case 2:
                            g = e.transform(r);
                            break;
                          case 3:
                            g = e.transform(r, o);
                            break;
                          case 4:
                            g = e.transform(r, o, i);
                            break;
                          case 5:
                            g = e.transform(r, o, i, s);
                            break;
                          case 6:
                            g = e.transform(r, o, i, s, u);
                            break;
                          case 7:
                            g = e.transform(r, o, i, s, u, a);
                            break;
                          case 8:
                            g = e.transform(r, o, i, s, u, a, c);
                            break;
                          case 9:
                            g = e.transform(r, o, i, s, u, a, c, l);
                            break;
                          case 10:
                            g = e.transform(r, o, i, s, u, a, c, l, d);
                        }
                    }
                    h.value = g;
                  }
                  return h;
                })(e, t, n, r, o, i, s, u, a, c, l, d);
              default:
                throw "unreachable";
            }
          })(e, t, r, o, i, s, u, a, c, l, d, f)
        : (function (e, t, n) {
            switch (201347067 & t.flags) {
              case 1:
                return (function (e, t, n) {
                  let r = !1;
                  for (let o = 0; o < n.length; o++)
                    Xb(e, t, o, n[o]) && (r = !0);
                  return r;
                })(e, t, n);
              case 2:
                return (function (e, t, n) {
                  const r = t.bindings;
                  let o = !1;
                  for (let i = 0; i < n.length; i++)
                    ff(e, t, i, n[i]) && (o = !0);
                  if (o) {
                    let o = "";
                    for (let e = 0; e < n.length; e++) o += hv(n[e], r[e]);
                    o = t.text.prefix + o;
                    const i = Zd(e, t.nodeIndex).renderText;
                    e.renderer.setValue(i, o);
                  }
                  return o;
                })(e, t, n);
              case 16384:
                return (function (e, t, n) {
                  const r = Yd(e, t.nodeIndex),
                    o = r.instance;
                  let i = !1,
                    s = void 0;
                  for (let u = 0; u < n.length; u++)
                    df(e, t, u, n[u]) &&
                      ((i = !0), (s = Fh(e, r, t, u, n[u], s)));
                  return (
                    s && o.ngOnChanges(s),
                    65536 & t.flags && Gd(e, 256, t.nodeIndex) && o.ngOnInit(),
                    262144 & t.flags && o.ngDoCheck(),
                    i
                  );
                })(e, t, n);
              case 32:
              case 64:
              case 128:
                return (function (e, t, n) {
                  const r = t.bindings;
                  let o = !1;
                  for (let i = 0; i < n.length; i++)
                    ff(e, t, i, n[i]) && (o = !0);
                  if (o) {
                    const o = Jd(e, t.nodeIndex);
                    let i;
                    switch (201347067 & t.flags) {
                      case 32:
                        i = n;
                        break;
                      case 64:
                        i = {};
                        for (let o = 0; o < n.length; o++) i[r[o].name] = n[o];
                        break;
                      case 128:
                        const e = n[0],
                          t = n.slice(1);
                        i = e.transform(...t);
                    }
                    o.value = i;
                  }
                  return o;
                })(e, t, n);
              default:
                throw "unreachable";
            }
          })(e, t, r);
    }
    function Ov(e) {
      const t = e.def;
      if (4 & t.nodeFlags)
        for (let n = 0; n < t.nodes.length; n++) {
          const r = t.nodes[n];
          if (4 & r.flags) {
            const t = Kd(e, n).template._projectedViews;
            if (t)
              for (let n = 0; n < t.length; n++) {
                const r = t[n];
                (r.state |= 32), gf(r, e);
              }
          } else 0 == (4 & r.childFlags) && (n += r.childCount);
        }
    }
    function xv(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      return (
        0 === n
          ? (function (e, t, n, r, o, i, s, u, a, c, l, d) {
              const f = t.bindings.length;
              f > 0 && hf(e, t, 0, n),
                f > 1 && hf(e, t, 1, r),
                f > 2 && hf(e, t, 2, o),
                f > 3 && hf(e, t, 3, i),
                f > 4 && hf(e, t, 4, s),
                f > 5 && hf(e, t, 5, u),
                f > 6 && hf(e, t, 6, a),
                f > 7 && hf(e, t, 7, c),
                f > 8 && hf(e, t, 8, l),
                f > 9 && hf(e, t, 9, d);
            })(e, t, r, o, i, s, u, a, c, l, d, f)
          : (function (e, t, n) {
              for (let r = 0; r < n.length; r++) hf(e, t, r, n[r]);
            })(e, t, r),
        !1
      );
    }
    function Iv(e, t) {
      if (Xd(e, t.nodeIndex).dirty)
        throw zd(
          tf.createDebugContext(e, t.nodeIndex),
          `Query ${t.query.id} not dirty`,
          `Query ${t.query.id} dirty`,
          0 != (1 & e.state)
        );
    }
    function Av(e) {
      if (!(128 & e.state)) {
        if (
          (Tv(e, jv.Destroy), kv(e, jv.Destroy), Ph(e, 131072), e.disposables)
        )
          for (let t = 0; t < e.disposables.length; t++) e.disposables[t]();
        !(function (e) {
          if (!(16 & e.state)) return;
          const t = yf(e);
          if (t) {
            const n = t.template._projectedViews;
            n && (Ie(n, n.indexOf(e)), tf.dirtyParentQueries(e));
          }
        })(e),
          e.renderer.destroyNode &&
            (function (e) {
              const t = e.def.nodes.length;
              for (let n = 0; n < t; n++) {
                const t = e.def.nodes[n];
                1 & t.flags
                  ? e.renderer.destroyNode(Kd(e, n).renderElement)
                  : 2 & t.flags
                  ? e.renderer.destroyNode(Zd(e, n).renderText)
                  : (67108864 & t.flags || 134217728 & t.flags) &&
                    Xd(e, n).destroy();
              }
            })(e),
          _f(e) && e.renderer.destroy(),
          (e.state |= 128);
      }
    }
    var jv = (function (e) {
      return (
        (e[(e.CreateViewNodes = 0)] = "CreateViewNodes"),
        (e[(e.CheckNoChanges = 1)] = "CheckNoChanges"),
        (e[(e.CheckNoChangesProjectedViews = 2)] =
          "CheckNoChangesProjectedViews"),
        (e[(e.CheckAndUpdate = 3)] = "CheckAndUpdate"),
        (e[(e.CheckAndUpdateProjectedViews = 4)] =
          "CheckAndUpdateProjectedViews"),
        (e[(e.Destroy = 5)] = "Destroy"),
        e
      );
    })({});
    function kv(e, t) {
      const n = e.def;
      if (33554432 & n.nodeFlags)
        for (let r = 0; r < n.nodes.length; r++) {
          const o = n.nodes[r];
          33554432 & o.flags
            ? Rv(Kd(e, r).componentView, t)
            : 0 == (33554432 & o.childFlags) && (r += o.childCount);
        }
    }
    function Tv(e, t) {
      const n = e.def;
      if (16777216 & n.nodeFlags)
        for (let r = 0; r < n.nodes.length; r++) {
          const o = n.nodes[r];
          if (16777216 & o.flags) {
            const n = Kd(e, r).viewContainer._embeddedViews;
            for (let e = 0; e < n.length; e++) Rv(n[e], t);
          } else 0 == (16777216 & o.childFlags) && (r += o.childCount);
        }
    }
    function Rv(e, t) {
      const n = e.state;
      switch (t) {
        case jv.CheckNoChanges:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? Dv(e)
              : 64 & n && Fv(e, jv.CheckNoChangesProjectedViews));
          break;
        case jv.CheckNoChangesProjectedViews:
          0 == (128 & n) && (32 & n ? Dv(e) : 64 & n && Fv(e, t));
          break;
        case jv.CheckAndUpdate:
          0 == (128 & n) &&
            (12 == (12 & n)
              ? Ev(e)
              : 64 & n && Fv(e, jv.CheckAndUpdateProjectedViews));
          break;
        case jv.CheckAndUpdateProjectedViews:
          0 == (128 & n) && (32 & n ? Ev(e) : 64 & n && Fv(e, t));
          break;
        case jv.Destroy:
          Av(e);
          break;
        case jv.CreateViewNodes:
          Cv(e);
      }
    }
    function Fv(e, t) {
      Tv(e, t), kv(e, t);
    }
    function Pv(e, t, n, r) {
      if (!(e.def.nodeFlags & t && e.def.nodeFlags & n)) return;
      const o = e.def.nodes.length;
      for (let i = 0; i < o; i++) {
        const o = e.def.nodes[i];
        if (o.flags & t && o.flags & n)
          switch ((tf.setCurrentNode(e, o.nodeIndex), r)) {
            case 0:
              nv(e, o);
              break;
            case 1:
              Iv(e, o);
          }
        (o.childFlags & t && o.childFlags & n) || (i += o.childCount);
      }
    }
    let Nv = !1;
    function Mv() {
      if (Nv) return;
      Nv = !0;
      const e = jr()
        ? {
            setCurrentNode: s_,
            createRootView: Vv,
            createEmbeddedView: Bv,
            createComponentView: Hv,
            createNgModuleRef: $v,
            overrideProvider: Qv,
            overrideComponentView: Gv,
            clearOverrides: Zv,
            checkAndUpdateView: Xv,
            checkNoChangesView: e_,
            destroyView: t_,
            createDebugContext: (e, t) => new p_(e, t),
            handleEvent: u_,
            updateDirectives: a_,
            updateRenderer: c_,
          }
        : {
            setCurrentNode: () => {},
            createRootView: Lv,
            createEmbeddedView: yv,
            createComponentView: vv,
            createNgModuleRef: fh,
            overrideProvider: nf,
            overrideComponentView: nf,
            clearOverrides: nf,
            checkAndUpdateView: Ev,
            checkNoChangesView: Dv,
            destroyView: Av,
            createDebugContext: (e, t) => new p_(e, t),
            handleEvent: (e, t, n, r) => e.def.handleEvent(e, t, n, r),
            updateDirectives: (e, t) =>
              e.def.updateDirectives(0 === t ? Yv : Jv, e),
            updateRenderer: (e, t) =>
              e.def.updateRenderer(0 === t ? Yv : Jv, e),
          };
      (tf.setCurrentNode = e.setCurrentNode),
        (tf.createRootView = e.createRootView),
        (tf.createEmbeddedView = e.createEmbeddedView),
        (tf.createComponentView = e.createComponentView),
        (tf.createNgModuleRef = e.createNgModuleRef),
        (tf.overrideProvider = e.overrideProvider),
        (tf.overrideComponentView = e.overrideComponentView),
        (tf.clearOverrides = e.clearOverrides),
        (tf.checkAndUpdateView = e.checkAndUpdateView),
        (tf.checkNoChangesView = e.checkNoChangesView),
        (tf.destroyView = e.destroyView),
        (tf.resolveDep = Th),
        (tf.createDebugContext = e.createDebugContext),
        (tf.handleEvent = e.handleEvent),
        (tf.updateDirectives = e.updateDirectives),
        (tf.updateRenderer = e.updateRenderer),
        (tf.dirtyParentQueries = tv);
    }
    function Lv(e, t, n, r, o, i) {
      const s = o.injector.get(gd);
      return bv(Uv(e, o, s, t, n), r, i);
    }
    function Vv(e, t, n, r, o, i) {
      const s = o.injector.get(gd),
        u = Uv(e, o, new b_(s), t, n),
        a = Kv(r);
      return m_(n_.create, bv, null, [u, a, i]);
    }
    function Uv(e, t, n, r, o) {
      const i = t.injector.get(_d),
        s = t.injector.get(dr),
        u = n.createRenderer(null, null);
      return {
        ngModule: t,
        injector: e,
        projectableNodes: r,
        selectorOrNode: o,
        sanitizer: i,
        rendererFactory: n,
        renderer: u,
        errorHandler: s,
      };
    }
    function Bv(e, t, n, r) {
      const o = Kv(n);
      return m_(n_.create, yv, null, [e, t, o, r]);
    }
    function Hv(e, t, n, r) {
      return (
        (n = Wv.get(t.element.componentProvider.provider.token) || Kv(n)),
        m_(n_.create, vv, null, [e, t, n, r])
      );
    }
    function $v(e, t, n, r) {
      return fh(
        e,
        t,
        n,
        (function (e) {
          const { hasOverrides: t, hasDeprecatedOverrides: n } = (function (e) {
            let t = !1,
              n = !1;
            return (
              0 === zv.size ||
                (e.providers.forEach((e) => {
                  const r = zv.get(e.token);
                  3840 & e.flags &&
                    r &&
                    ((t = !0), (n = n || r.deprecatedBehavior));
                }),
                e.modules.forEach((e) => {
                  qv.forEach((r, o) => {
                    j(o).providedIn === e &&
                      ((t = !0), (n = n || r.deprecatedBehavior));
                  });
                })),
              { hasOverrides: t, hasDeprecatedOverrides: n }
            );
          })(e);
          return t
            ? ((function (e) {
                for (let t = 0; t < e.providers.length; t++) {
                  const r = e.providers[t];
                  n && (r.flags |= 4096);
                  const o = zv.get(r.token);
                  o &&
                    ((r.flags = (-3841 & r.flags) | o.flags),
                    (r.deps = Ef(o.deps)),
                    (r.value = o.value));
                }
                if (qv.size > 0) {
                  let t = new Set(e.modules);
                  qv.forEach((r, o) => {
                    if (t.has(j(o).providedIn)) {
                      let t = {
                        token: o,
                        flags: r.flags | (n ? 4096 : 0),
                        deps: Ef(r.deps),
                        value: r.value,
                        index: e.providers.length,
                      };
                      e.providers.push(t), (e.providersByKey[of(o)] = t);
                    }
                  });
                }
              })((e = e.factory(() => nf))),
              e)
            : e;
        })(r)
      );
    }
    const zv = new Map(),
      qv = new Map(),
      Wv = new Map();
    function Qv(e) {
      let t;
      zv.set(e.token, e),
        "function" == typeof e.token &&
          (t = j(e.token)) &&
          "function" == typeof t.providedIn &&
          qv.set(e.token, e);
    }
    function Gv(e, t) {
      const n = xf(eh(t)),
        r = xf(n.nodes[0].element.componentView);
      Wv.set(e, r);
    }
    function Zv() {
      zv.clear(), qv.clear(), Wv.clear();
    }
    function Kv(e) {
      if (0 === zv.size) return e;
      const t = (function (e) {
        const t = [];
        let n = null;
        for (let r = 0; r < e.nodes.length; r++) {
          const o = e.nodes[r];
          1 & o.flags && (n = o),
            n &&
              3840 & o.flags &&
              zv.has(o.provider.token) &&
              (t.push(n.nodeIndex), (n = null));
        }
        return t;
      })(e);
      if (0 === t.length) return e;
      e = e.factory(() => nf);
      for (let r = 0; r < t.length; r++) n(e, t[r]);
      return e;
      function n(e, t) {
        for (let n = t + 1; n < e.nodes.length; n++) {
          const t = e.nodes[n];
          if (1 & t.flags) return;
          if (3840 & t.flags) {
            const e = t.provider,
              n = zv.get(e.token);
            n &&
              ((t.flags = (-3841 & t.flags) | n.flags),
              (e.deps = Ef(n.deps)),
              (e.value = n.value));
          }
        }
      }
    }
    function Yv(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      const h = e.def.nodes[t];
      return (
        Sv(e, h, n, r, o, i, s, u, a, c, l, d, f),
        224 & h.flags ? Jd(e, t).value : void 0
      );
    }
    function Jv(e, t, n, r, o, i, s, u, a, c, l, d, f) {
      const h = e.def.nodes[t];
      return (
        xv(e, h, n, r, o, i, s, u, a, c, l, d, f),
        224 & h.flags ? Jd(e, t).value : void 0
      );
    }
    function Xv(e) {
      return m_(n_.detectChanges, Ev, null, [e]);
    }
    function e_(e) {
      return m_(n_.checkNoChanges, Dv, null, [e]);
    }
    function t_(e) {
      return m_(n_.destroy, Av, null, [e]);
    }
    var n_ = (function (e) {
      return (
        (e[(e.create = 0)] = "create"),
        (e[(e.detectChanges = 1)] = "detectChanges"),
        (e[(e.checkNoChanges = 2)] = "checkNoChanges"),
        (e[(e.destroy = 3)] = "destroy"),
        (e[(e.handleEvent = 4)] = "handleEvent"),
        e
      );
    })({});
    let r_, o_, i_;
    function s_(e, t) {
      (o_ = e), (i_ = t);
    }
    function u_(e, t, n, r) {
      return (
        s_(e, t), m_(n_.handleEvent, e.def.handleEvent, null, [e, t, n, r])
      );
    }
    function a_(e, t) {
      if (128 & e.state) throw Wd(n_[r_]);
      return (
        s_(e, f_(e, 0)),
        e.def.updateDirectives(function (e, n, r, ...o) {
          const i = e.def.nodes[n];
          return (
            0 === t ? l_(e, i, r, o) : d_(e, i, r, o),
            16384 & i.flags && s_(e, f_(e, n)),
            224 & i.flags ? Jd(e, i.nodeIndex).value : void 0
          );
        }, e)
      );
    }
    function c_(e, t) {
      if (128 & e.state) throw Wd(n_[r_]);
      return (
        s_(e, h_(e, 0)),
        e.def.updateRenderer(function (e, n, r, ...o) {
          const i = e.def.nodes[n];
          return (
            0 === t ? l_(e, i, r, o) : d_(e, i, r, o),
            3 & i.flags && s_(e, h_(e, n)),
            224 & i.flags ? Jd(e, i.nodeIndex).value : void 0
          );
        }, e)
      );
    }
    function l_(e, t, n, r) {
      if (Sv(e, t, n, ...r)) {
        const i = 1 === n ? r[0] : r;
        if (16384 & t.flags) {
          const n = {};
          for (let e = 0; e < t.bindings.length; e++) {
            const r = t.bindings[e],
              s = i[e];
            8 & r.flags &&
              (n[
                ((o = r.nonMinifiedName),
                "ng-reflect-" +
                  o
                    .replace(/[$@]/g, "_")
                    .replace(ho, (...e) => "-" + e[1].toLowerCase()))
              ] = po(s));
          }
          const r = t.parent,
            s = Kd(e, r.nodeIndex).renderElement;
          if (r.element.name)
            for (let t in n) {
              const r = n[t];
              null != r
                ? e.renderer.setAttribute(s, t, r)
                : e.renderer.removeAttribute(s, t);
            }
          else e.renderer.setValue(s, "bindings=" + JSON.stringify(n, null, 2));
        }
      }
      var o;
    }
    function d_(e, t, n, r) {
      xv(e, t, n, ...r);
    }
    function f_(e, t) {
      for (let n = t; n < e.def.nodes.length; n++) {
        const t = e.def.nodes[n];
        if (16384 & t.flags && t.bindings && t.bindings.length) return n;
      }
      return null;
    }
    function h_(e, t) {
      for (let n = t; n < e.def.nodes.length; n++) {
        const t = e.def.nodes[n];
        if (3 & t.flags && t.bindings && t.bindings.length) return n;
      }
      return null;
    }
    class p_ {
      constructor(e, t) {
        (this.view = e),
          (this.nodeIndex = t),
          null == t && (this.nodeIndex = t = 0),
          (this.nodeDef = e.def.nodes[t]);
        let n = this.nodeDef,
          r = e;
        for (; n && 0 == (1 & n.flags); ) n = n.parent;
        if (!n) for (; !n && r; ) (n = bf(r)), (r = r.parent);
        (this.elDef = n), (this.elView = r);
      }
      get elOrCompView() {
        return Kd(this.elView, this.elDef.nodeIndex).componentView || this.view;
      }
      get injector() {
        return ch(this.elView, this.elDef);
      }
      get component() {
        return this.elOrCompView.component;
      }
      get context() {
        return this.elOrCompView.context;
      }
      get providerTokens() {
        const e = [];
        if (this.elDef)
          for (
            let t = this.elDef.nodeIndex + 1;
            t <= this.elDef.nodeIndex + this.elDef.childCount;
            t++
          ) {
            const n = this.elView.def.nodes[t];
            20224 & n.flags && e.push(n.provider.token), (t += n.childCount);
          }
        return e;
      }
      get references() {
        const e = {};
        if (this.elDef) {
          g_(this.elView, this.elDef, e);
          for (
            let t = this.elDef.nodeIndex + 1;
            t <= this.elDef.nodeIndex + this.elDef.childCount;
            t++
          ) {
            const n = this.elView.def.nodes[t];
            20224 & n.flags && g_(this.elView, n, e), (t += n.childCount);
          }
        }
        return e;
      }
      get componentRenderElement() {
        const e = (function (e) {
          for (; e && !_f(e); ) e = e.parent;
          return e.parent ? Kd(e.parent, bf(e).nodeIndex) : null;
        })(this.elOrCompView);
        return e ? e.renderElement : void 0;
      }
      get renderNode() {
        return 2 & this.nodeDef.flags
          ? vf(this.view, this.nodeDef)
          : vf(this.elView, this.elDef);
      }
      logError(e, ...t) {
        let n, r;
        2 & this.nodeDef.flags
          ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
          : ((n = this.elView.def), (r = this.elDef.nodeIndex));
        const o = (function (e, t) {
          let n = -1;
          for (let r = 0; r <= t; r++) 3 & e.nodes[r].flags && n++;
          return n;
        })(n, r);
        let i = -1;
        n.factory(() => (i++, i === o ? e.error.bind(e, ...t) : nf)),
          i < o &&
            (e.error(
              "Illegal state: the ViewDefinitionFactory did not call the logger!"
            ),
            e.error(...t));
      }
    }
    function g_(e, t, n) {
      for (let r in t.references) n[r] = ov(e, t, t.references[r]);
    }
    function m_(e, t, n, r) {
      const o = r_,
        i = o_,
        s = i_;
      try {
        r_ = e;
        const u = t.apply(n, r);
        return (o_ = i), (i_ = s), (r_ = o), u;
      } catch (c) {
        if (ar(c) || !o_) throw c;
        throw (
          ((u = c),
          (a = y_()),
          u instanceof Error || (u = new Error(u.toString())),
          qd(u, a),
          u)
        );
      }
      var u, a;
    }
    function y_() {
      return o_ ? new p_(o_, i_) : null;
    }
    class b_ {
      constructor(e) {
        this.delegate = e;
      }
      createRenderer(e, t) {
        return new v_(this.delegate.createRenderer(e, t));
      }
      begin() {
        this.delegate.begin && this.delegate.begin();
      }
      end() {
        this.delegate.end && this.delegate.end();
      }
      whenRenderingDone() {
        return this.delegate.whenRenderingDone
          ? this.delegate.whenRenderingDone()
          : Promise.resolve(null);
      }
    }
    class v_ {
      constructor(e) {
        (this.delegate = e),
          (this.debugContextFactory = y_),
          (this.data = this.delegate.data);
      }
      createDebugContext(e) {
        return this.debugContextFactory(e);
      }
      destroyNode(e) {
        const t = Fb(e);
        !(function (e) {
          Tb.delete(e.nativeNode);
        })(t),
          t instanceof vb && (t.listeners.length = 0),
          this.delegate.destroyNode && this.delegate.destroyNode(e);
      }
      destroy() {
        this.delegate.destroy();
      }
      createElement(e, t) {
        const n = this.delegate.createElement(e, t),
          r = this.createDebugContext(n);
        if (r) {
          const t = new _b(n, null, r);
          (t.name = e), Mb(t);
        }
        return n;
      }
      createComment(e) {
        const t = this.delegate.createComment(e),
          n = this.createDebugContext(t);
        return n && Mb(new vb(t, null, n)), t;
      }
      createText(e) {
        const t = this.delegate.createText(e),
          n = this.createDebugContext(t);
        return n && Mb(new vb(t, null, n)), t;
      }
      appendChild(e, t) {
        const n = Fb(e),
          r = Fb(t);
        n && r && n instanceof _b && n.addChild(r),
          this.delegate.appendChild(e, t);
      }
      insertBefore(e, t, n) {
        const r = Fb(e),
          o = Fb(t),
          i = Fb(n);
        r && o && r instanceof _b && r.insertBefore(i, o),
          this.delegate.insertBefore(e, t, n);
      }
      removeChild(e, t) {
        const n = Fb(e),
          r = Fb(t);
        n && r && n instanceof _b && n.removeChild(r),
          this.delegate.removeChild(e, t);
      }
      selectRootElement(e, t) {
        const n = this.delegate.selectRootElement(e, t),
          r = y_();
        return r && Mb(new _b(n, null, r)), n;
      }
      setAttribute(e, t, n, r) {
        const o = Fb(e);
        o && o instanceof _b && (o.attributes[r ? r + ":" + t : t] = n),
          this.delegate.setAttribute(e, t, n, r);
      }
      removeAttribute(e, t, n) {
        const r = Fb(e);
        r && r instanceof _b && (r.attributes[n ? n + ":" + t : t] = null),
          this.delegate.removeAttribute(e, t, n);
      }
      addClass(e, t) {
        const n = Fb(e);
        n && n instanceof _b && (n.classes[t] = !0),
          this.delegate.addClass(e, t);
      }
      removeClass(e, t) {
        const n = Fb(e);
        n && n instanceof _b && (n.classes[t] = !1),
          this.delegate.removeClass(e, t);
      }
      setStyle(e, t, n, r) {
        const o = Fb(e);
        o && o instanceof _b && (o.styles[t] = n),
          this.delegate.setStyle(e, t, n, r);
      }
      removeStyle(e, t, n) {
        const r = Fb(e);
        r && r instanceof _b && (r.styles[t] = null),
          this.delegate.removeStyle(e, t, n);
      }
      setProperty(e, t, n) {
        const r = Fb(e);
        r && r instanceof _b && (r.properties[t] = n),
          this.delegate.setProperty(e, t, n);
      }
      listen(e, t, n) {
        if ("string" != typeof e) {
          const r = Fb(e);
          r && r.listeners.push(new bb(t, n));
        }
        return this.delegate.listen(e, t, n);
      }
      parentNode(e) {
        return this.delegate.parentNode(e);
      }
      nextSibling(e) {
        return this.delegate.nextSibling(e);
      }
      setValue(e, t) {
        return this.delegate.setValue(e, t);
      }
    }
    function __(e) {
      return Mv(), tf.overrideProvider(e);
    }
    function w_(e, t) {
      return Mv(), tf.overrideComponentView(e, t);
    }
    function C_() {
      return Mv(), tf.clearOverrides();
    }
    function D_(e, t, n) {
      return new E_(e, t, n);
    }
    class E_ extends De {
      constructor(e, t, n) {
        super(),
          (this.moduleType = e),
          (this._bootstrapComponents = t),
          (this._ngModuleDefFactory = n);
      }
      create(e) {
        Mv();
        const t = (function (e) {
          const t = Array.from(e.providers),
            n = Array.from(e.modules),
            r = {};
          for (const o in e.providersByKey) r[o] = e.providersByKey[o];
          return {
            factory: e.factory,
            scope: e.scope,
            providers: t,
            modules: n,
            providersByKey: r,
          };
        })(xf(this._ngModuleDefFactory));
        return tf.createNgModuleRef(
          this.moduleType,
          e || iu.NULL,
          this._bootstrapComponents,
          t
        );
      }
    }
  },
  gRHU: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "empty", function () {
        return i;
      });
    var r = n("2fFW"),
      o = n("NJ4a");
    const i = {
      closed: !0,
      next(e) {},
      error(e) {
        if (r.config.useDeprecatedSynchronousErrorHandling) throw e;
        Object(o.hostReportError)(e);
      },
      complete() {},
    };
  },
  itXk: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "combineLatest", function () {
        return c;
      }),
      n.d(t, "CombineLatestOperator", function () {
        return l;
      }),
      n.d(t, "CombineLatestSubscriber", function () {
        return d;
      });
    var r = n("z+Ro"),
      o = n("DH7j"),
      i = n("l7GE"),
      s = n("ZUHj"),
      u = n("yCtX");
    const a = {};
    function c(...e) {
      let t = void 0,
        n = void 0;
      return (
        Object(r.isScheduler)(e[e.length - 1]) && (n = e.pop()),
        "function" == typeof e[e.length - 1] && (t = e.pop()),
        1 === e.length && Object(o.isArray)(e[0]) && (e = e[0]),
        Object(u.fromArray)(e, n).lift(new l(t))
      );
    }
    class l {
      constructor(e) {
        this.resultSelector = e;
      }
      call(e, t) {
        return t.subscribe(new d(e, this.resultSelector));
      }
    }
    class d extends i.OuterSubscriber {
      constructor(e, t) {
        super(e),
          (this.resultSelector = t),
          (this.active = 0),
          (this.values = []),
          (this.observables = []);
      }
      _next(e) {
        this.values.push(a), this.observables.push(e);
      }
      _complete() {
        const e = this.observables,
          t = e.length;
        if (0 === t) this.destination.complete();
        else {
          (this.active = t), (this.toRespond = t);
          for (let n = 0; n < t; n++) {
            const t = e[n];
            this.add(Object(s.subscribeToResult)(this, t, void 0, n));
          }
        }
      }
      notifyComplete(e) {
        0 == (this.active -= 1) && this.destination.complete();
      }
      notifyNext(e, t, n) {
        const r = this.values,
          o = this.toRespond
            ? r[n] === a
              ? --this.toRespond
              : this.toRespond
            : 0;
        (r[n] = t),
          0 === o &&
            (this.resultSelector
              ? this._tryResultSelector(r)
              : this.destination.next(r.slice()));
      }
      _tryResultSelector(e) {
        let t;
        try {
          t = this.resultSelector.apply(this, e);
        } catch (n) {
          return void this.destination.error(n);
        }
        this.destination.next(t);
      }
    }
  },
  jZKg: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "scheduleArray", function () {
        return i;
      });
    var r = n("HDdC"),
      o = n("quSY");
    function i(e, t) {
      return new r.Observable((n) => {
        const r = new o.Subscription();
        let i = 0;
        return (
          r.add(
            t.schedule(function () {
              i !== e.length
                ? (n.next(e[i++]), n.closed || r.add(this.schedule()))
                : n.complete();
            })
          ),
          r
        );
      });
    }
  },
  jhN1: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "BrowserModule", function () {
        return ue;
      }),
      n.d(t, "BrowserTransferStateModule", function () {
        return Ce;
      }),
      n.d(t, "By", function () {
        return De;
      }),
      n.d(t, "DomSanitizer", function () {
        return K;
      }),
      n.d(t, "EVENT_MANAGER_PLUGINS", function () {
        return _;
      }),
      n.d(t, "EventManager", function () {
        return w;
      }),
      n.d(t, "HAMMER_GESTURE_CONFIG", function () {
        return M;
      }),
      n.d(t, "HAMMER_LOADER", function () {
        return L;
      }),
      n.d(t, "HammerGestureConfig", function () {
        return V;
      }),
      n.d(t, "HammerModule", function () {
        return z;
      }),
      n.d(t, "Meta", function () {
        return ce;
      }),
      n.d(t, "Title", function () {
        return de;
      }),
      n.d(t, "TransferState", function () {
        return _e;
      }),
      n.d(t, "VERSION", function () {
        return Ee;
      }),
      n.d(t, "disableDebugTools", function () {
        return ye;
      }),
      n.d(t, "enableDebugTools", function () {
        return me;
      }),
      n.d(t, "makeStateKey", function () {
        return ve;
      }),
      n.d(t, "platformBrowser", function () {
        return ie;
      }),
      n.d(t, "\u0275BROWSER_SANITIZATION_PROVIDERS", function () {
        return oe;
      }),
      n.d(t, "\u0275BROWSER_SANITIZATION_PROVIDERS__POST_R3__", function () {
        return re;
      }),
      n.d(t, "\u0275BrowserDomAdapter", function () {
        return s;
      }),
      n.d(t, "\u0275BrowserGetTestability", function () {
        return f;
      }),
      n.d(t, "\u0275DomEventsPlugin", function () {
        return P;
      }),
      n.d(t, "\u0275DomRendererFactory2", function () {
        return k;
      }),
      n.d(t, "\u0275DomSanitizerImpl", function () {
        return J;
      }),
      n.d(t, "\u0275DomSharedStylesHost", function () {
        return E;
      }),
      n.d(t, "\u0275ELEMENT_PROBE_PROVIDERS", function () {
        return v;
      }),
      n.d(t, "\u0275ELEMENT_PROBE_PROVIDERS__POST_R3__", function () {
        return y;
      }),
      n.d(t, "\u0275HAMMER_PROVIDERS__POST_R3__", function () {
        return B;
      }),
      n.d(t, "\u0275HammerGesturesPlugin", function () {
        return U;
      }),
      n.d(t, "\u0275INTERNAL_BROWSER_PLATFORM_PROVIDERS", function () {
        return ne;
      }),
      n.d(t, "\u0275KeyEventsPlugin", function () {
        return Z;
      }),
      n.d(t, "\u0275NAMESPACE_URIS", function () {
        return S;
      }),
      n.d(t, "\u0275SharedStylesHost", function () {
        return D;
      }),
      n.d(t, "\u0275TRANSITION_ID", function () {
        return c;
      }),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_a",
        function () {
          return ee;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_b",
        function () {
          return te;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_c",
        function () {
          return se;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_d",
        function () {
          return ae;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_e",
        function () {
          return le;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_f",
        function () {
          return we;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_g",
        function () {
          return C;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_h",
        function () {
          return H;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_i",
        function () {
          return $;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_j",
        function () {
          return Y;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_k",
        function () {
          return l;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_l",
        function () {
          return d;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_m",
        function () {
          return m;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_n",
        function () {
          return b;
        }
      ),
      n.d(
        t,
        "\u0275angular_packages_platform_browser_platform_browser_o",
        function () {
          return i;
        }
      ),
      n.d(t, "\u0275escapeHtml", function () {
        return be;
      }),
      n.d(t, "\u0275flattenStyles", function () {
        return A;
      }),
      n.d(t, "\u0275initDomAdapter", function () {
        return X;
      }),
      n.d(t, "\u0275shimContentAttribute", function () {
        return x;
      }),
      n.d(t, "\u0275shimHostAttribute", function () {
        return I;
      });
    var r = n("ofXK"),
      o = n("fXoL");
    n.d(t, "\u0275getDOM", function () {
      return r["\u0275getDOM"];
    });
    class i extends r["\u0275DomAdapter"] {
      constructor() {
        super();
      }
      supportsDOMEvents() {
        return !0;
      }
    }
    class s extends i {
      static makeCurrent() {
        Object(r["\u0275setRootDomAdapter"])(new s());
      }
      getProperty(e, t) {
        return e[t];
      }
      log(e) {
        window.console && window.console.log && window.console.log(e);
      }
      logGroup(e) {
        window.console && window.console.group && window.console.group(e);
      }
      logGroupEnd() {
        window.console && window.console.groupEnd && window.console.groupEnd();
      }
      onAndCancel(e, t, n) {
        return (
          e.addEventListener(t, n, !1),
          () => {
            e.removeEventListener(t, n, !1);
          }
        );
      }
      dispatchEvent(e, t) {
        e.dispatchEvent(t);
      }
      remove(e) {
        return e.parentNode && e.parentNode.removeChild(e), e;
      }
      getValue(e) {
        return e.value;
      }
      createElement(e, t) {
        return (t = t || this.getDefaultDocument()).createElement(e);
      }
      createHtmlDocument() {
        return document.implementation.createHTMLDocument("fakeTitle");
      }
      getDefaultDocument() {
        return document;
      }
      isElementNode(e) {
        return e.nodeType === Node.ELEMENT_NODE;
      }
      isShadowRoot(e) {
        return e instanceof DocumentFragment;
      }
      getGlobalEventTarget(e, t) {
        return "window" === t
          ? window
          : "document" === t
          ? e
          : "body" === t
          ? e.body
          : null;
      }
      getHistory() {
        return window.history;
      }
      getLocation() {
        return window.location;
      }
      getBaseHref(e) {
        const t =
          a || ((a = document.querySelector("base")), a)
            ? a.getAttribute("href")
            : null;
        return null == t
          ? null
          : ((n = t),
            u || (u = document.createElement("a")),
            u.setAttribute("href", n),
            "/" === u.pathname.charAt(0) ? u.pathname : "/" + u.pathname);
        var n;
      }
      resetBaseElement() {
        a = null;
      }
      getUserAgent() {
        return window.navigator.userAgent;
      }
      performanceNow() {
        return window.performance && window.performance.now
          ? window.performance.now()
          : new Date().getTime();
      }
      supportsCookies() {
        return !0;
      }
      getCookie(e) {
        return Object(r["\u0275parseCookieValue"])(document.cookie, e);
      }
    }
    let u,
      a = null;
    const c = new o.InjectionToken("TRANSITION_ID");
    function l(e, t, n) {
      return () => {
        n.get(o.ApplicationInitStatus).donePromise.then(() => {
          const n = Object(r["\u0275getDOM"])();
          Array.prototype.slice
            .apply(t.querySelectorAll("style[ng-transition]"))
            .filter((t) => t.getAttribute("ng-transition") === e)
            .forEach((e) => n.remove(e));
        });
      };
    }
    const d = [
      {
        provide: o.APP_INITIALIZER,
        useFactory: l,
        deps: [c, r.DOCUMENT, o.Injector],
        multi: !0,
      },
    ];
    class f {
      static init() {
        Object(o.setTestabilityGetter)(new f());
      }
      addToWindow(e) {
        (o["\u0275global"].getAngularTestability = (t, n = !0) => {
          const r = e.findTestabilityInTree(t, n);
          if (null == r)
            throw new Error("Could not find testability for element.");
          return r;
        }),
          (o["\u0275global"].getAllAngularTestabilities = () =>
            e.getAllTestabilities()),
          (o["\u0275global"].getAllAngularRootElements = () =>
            e.getAllRootElements()),
          o["\u0275global"].frameworkStabilizers ||
            (o["\u0275global"].frameworkStabilizers = []),
          o["\u0275global"].frameworkStabilizers.push((e) => {
            const t = o["\u0275global"].getAllAngularTestabilities();
            let n = t.length,
              r = !1;
            const i = function (t) {
              (r = r || t), n--, 0 == n && e(r);
            };
            t.forEach(function (e) {
              e.whenStable(i);
            });
          });
      }
      findTestabilityInTree(e, t, n) {
        if (null == t) return null;
        const o = e.getTestability(t);
        return null != o
          ? o
          : n
          ? Object(r["\u0275getDOM"])().isShadowRoot(t)
            ? this.findTestabilityInTree(e, t.host, !0)
            : this.findTestabilityInTree(e, t.parentElement, !0)
          : null;
      }
    }
    function h(e, t) {
      ("undefined" != typeof COMPILED && COMPILED) ||
        ((o["\u0275global"].ng = o["\u0275global"].ng || {})[e] = t);
    }
    const p = (() => ({
      ApplicationRef: o.ApplicationRef,
      NgZone: o.NgZone,
    }))();
    function g(e) {
      return Object(o["\u0275getDebugNodeR2"])(e);
    }
    function m(e) {
      return (
        h("probe", g),
        h(
          "coreTokens",
          Object.assign(
            Object.assign({}, p),
            (e || []).reduce((e, t) => ((e[t.name] = t.token), e), {})
          )
        ),
        () => g
      );
    }
    const y = [],
      b = [
        {
          provide: o.APP_INITIALIZER,
          useFactory: m,
          deps: [[o.NgProbeToken, new o.Optional()]],
          multi: !0,
        },
      ],
      v = y,
      _ = new o.InjectionToken("EventManagerPlugins");
    let w = (() => {
      class e {
        constructor(e, t) {
          (this._zone = t),
            (this._eventNameToPlugin = new Map()),
            e.forEach((e) => (e.manager = this)),
            (this._plugins = e.slice().reverse());
        }
        addEventListener(e, t, n) {
          return this._findPluginFor(t).addEventListener(e, t, n);
        }
        addGlobalEventListener(e, t, n) {
          return this._findPluginFor(t).addGlobalEventListener(e, t, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(e) {
          const t = this._eventNameToPlugin.get(e);
          if (t) return t;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const t = n[r];
            if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
          }
          throw new Error("No event manager plugin found for event " + e);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(
            o["\u0275\u0275inject"](_),
            o["\u0275\u0275inject"](o.NgZone)
          );
        }),
        (e.ɵprov = o["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    class C {
      constructor(e) {
        this._doc = e;
      }
      addGlobalEventListener(e, t, n) {
        const o = Object(r["\u0275getDOM"])().getGlobalEventTarget(
          this._doc,
          e
        );
        if (!o) throw new Error(`Unsupported event target ${o} for event ${t}`);
        return this.addEventListener(o, t, n);
      }
    }
    let D = (() => {
        class e {
          constructor() {
            this._stylesSet = new Set();
          }
          addStyles(e) {
            const t = new Set();
            e.forEach((e) => {
              this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
            }),
              this.onStylesAdded(t);
          }
          onStylesAdded(e) {}
          getAllStyles() {
            return Array.from(this._stylesSet);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      E = (() => {
        class e extends D {
          constructor(e) {
            super(),
              (this._doc = e),
              (this._hostNodes = new Set()),
              (this._styleNodes = new Set()),
              this._hostNodes.add(e.head);
          }
          _addStylesToHost(e, t) {
            e.forEach((e) => {
              const n = this._doc.createElement("style");
              (n.textContent = e), this._styleNodes.add(t.appendChild(n));
            });
          }
          addHost(e) {
            this._addStylesToHost(this._stylesSet, e), this._hostNodes.add(e);
          }
          removeHost(e) {
            this._hostNodes.delete(e);
          }
          onStylesAdded(e) {
            this._hostNodes.forEach((t) => this._addStylesToHost(e, t));
          }
          ngOnDestroy() {
            this._styleNodes.forEach((e) =>
              Object(r["\u0275getDOM"])().remove(e)
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })();
    const S = {
        svg: "http://www.w3.org/2000/svg",
        xhtml: "http://www.w3.org/1999/xhtml",
        xlink: "http://www.w3.org/1999/xlink",
        xml: "http://www.w3.org/XML/1998/namespace",
        xmlns: "http://www.w3.org/2000/xmlns/",
      },
      O = /%COMP%/g;
    function x(e) {
      return "_ngcontent-%COMP%".replace(O, e);
    }
    function I(e) {
      return "_nghost-%COMP%".replace(O, e);
    }
    function A(e, t, n) {
      for (let r = 0; r < t.length; r++) {
        let o = t[r];
        Array.isArray(o) ? A(e, o, n) : ((o = o.replace(O, e)), n.push(o));
      }
      return n;
    }
    function j(e) {
      return (t) => {
        if ("__ngUnwrap__" === t) return e;
        !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
      };
    }
    let k = (() => {
      class e {
        constructor(e, t, n) {
          (this.eventManager = e),
            (this.sharedStylesHost = t),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new T(e));
        }
        createRenderer(e, t) {
          if (!e || !t) return this.defaultRenderer;
          switch (t.encapsulation) {
            case o.ViewEncapsulation.Emulated: {
              let n = this.rendererByCompId.get(t.id);
              return (
                n ||
                  ((n = new R(
                    this.eventManager,
                    this.sharedStylesHost,
                    t,
                    this.appId
                  )),
                  this.rendererByCompId.set(t.id, n)),
                n.applyToHost(e),
                n
              );
            }
            case o.ViewEncapsulation.Native:
            case o.ViewEncapsulation.ShadowDom:
              return new F(this.eventManager, this.sharedStylesHost, e, t);
            default:
              if (!this.rendererByCompId.has(t.id)) {
                const e = A(t.id, t.styles, []);
                this.sharedStylesHost.addStyles(e),
                  this.rendererByCompId.set(t.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(
            o["\u0275\u0275inject"](w),
            o["\u0275\u0275inject"](E),
            o["\u0275\u0275inject"](o.APP_ID)
          );
        }),
        (e.ɵprov = o["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    class T {
      constructor(e) {
        (this.eventManager = e), (this.data = Object.create(null));
      }
      destroy() {}
      createElement(e, t) {
        return t
          ? document.createElementNS(S[t] || t, e)
          : document.createElement(e);
      }
      createComment(e) {
        return document.createComment(e);
      }
      createText(e) {
        return document.createTextNode(e);
      }
      appendChild(e, t) {
        e.appendChild(t);
      }
      insertBefore(e, t, n) {
        e && e.insertBefore(t, n);
      }
      removeChild(e, t) {
        e && e.removeChild(t);
      }
      selectRootElement(e, t) {
        let n = "string" == typeof e ? document.querySelector(e) : e;
        if (!n)
          throw new Error(`The selector "${e}" did not match any elements`);
        return t || (n.textContent = ""), n;
      }
      parentNode(e) {
        return e.parentNode;
      }
      nextSibling(e) {
        return e.nextSibling;
      }
      setAttribute(e, t, n, r) {
        if (r) {
          t = r + ":" + t;
          const o = S[r];
          o ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
        } else e.setAttribute(t, n);
      }
      removeAttribute(e, t, n) {
        if (n) {
          const r = S[n];
          r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
        } else e.removeAttribute(t);
      }
      addClass(e, t) {
        e.classList.add(t);
      }
      removeClass(e, t) {
        e.classList.remove(t);
      }
      setStyle(e, t, n, r) {
        r & o.RendererStyleFlags2.DashCase
          ? e.style.setProperty(
              t,
              n,
              r & o.RendererStyleFlags2.Important ? "important" : ""
            )
          : (e.style[t] = n);
      }
      removeStyle(e, t, n) {
        n & o.RendererStyleFlags2.DashCase
          ? e.style.removeProperty(t)
          : (e.style[t] = "");
      }
      setProperty(e, t, n) {
        e[t] = n;
      }
      setValue(e, t) {
        e.nodeValue = t;
      }
      listen(e, t, n) {
        return "string" == typeof e
          ? this.eventManager.addGlobalEventListener(e, t, j(n))
          : this.eventManager.addEventListener(e, t, j(n));
      }
    }
    class R extends T {
      constructor(e, t, n, r) {
        super(e), (this.component = n);
        const o = A(r + "-" + n.id, n.styles, []);
        t.addStyles(o),
          (this.contentAttr = x(r + "-" + n.id)),
          (this.hostAttr = I(r + "-" + n.id));
      }
      applyToHost(e) {
        super.setAttribute(e, this.hostAttr, "");
      }
      createElement(e, t) {
        const n = super.createElement(e, t);
        return super.setAttribute(n, this.contentAttr, ""), n;
      }
    }
    class F extends T {
      constructor(e, t, n, r) {
        super(e),
          (this.sharedStylesHost = t),
          (this.hostEl = n),
          (this.component = r),
          (this.shadowRoot =
            r.encapsulation === o.ViewEncapsulation.ShadowDom
              ? n.attachShadow({ mode: "open" })
              : n.createShadowRoot()),
          this.sharedStylesHost.addHost(this.shadowRoot);
        const i = A(r.id, r.styles, []);
        for (let o = 0; o < i.length; o++) {
          const e = document.createElement("style");
          (e.textContent = i[o]), this.shadowRoot.appendChild(e);
        }
      }
      nodeOrShadowRoot(e) {
        return e === this.hostEl ? this.shadowRoot : e;
      }
      destroy() {
        this.sharedStylesHost.removeHost(this.shadowRoot);
      }
      appendChild(e, t) {
        return super.appendChild(this.nodeOrShadowRoot(e), t);
      }
      insertBefore(e, t, n) {
        return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
      }
      removeChild(e, t) {
        return super.removeChild(this.nodeOrShadowRoot(e), t);
      }
      parentNode(e) {
        return this.nodeOrShadowRoot(
          super.parentNode(this.nodeOrShadowRoot(e))
        );
      }
    }
    let P = (() => {
      class e extends C {
        constructor(e) {
          super(e);
        }
        supports(e) {
          return !0;
        }
        addEventListener(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => this.removeEventListener(e, t, n)
          );
        }
        removeEventListener(e, t, n) {
          return e.removeEventListener(t, n);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
        }),
        (e.ɵprov = o["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    const N = {
        pan: !0,
        panstart: !0,
        panmove: !0,
        panend: !0,
        pancancel: !0,
        panleft: !0,
        panright: !0,
        panup: !0,
        pandown: !0,
        pinch: !0,
        pinchstart: !0,
        pinchmove: !0,
        pinchend: !0,
        pinchcancel: !0,
        pinchin: !0,
        pinchout: !0,
        press: !0,
        pressup: !0,
        rotate: !0,
        rotatestart: !0,
        rotatemove: !0,
        rotateend: !0,
        rotatecancel: !0,
        swipe: !0,
        swipeleft: !0,
        swiperight: !0,
        swipeup: !0,
        swipedown: !0,
        tap: !0,
      },
      M = new o.InjectionToken("HammerGestureConfig"),
      L = new o.InjectionToken("HammerLoader");
    let V = (() => {
        class e {
          constructor() {
            (this.events = []), (this.overrides = {});
          }
          buildHammer(e) {
            const t = new Hammer(e, this.options);
            t.get("pinch").set({ enable: !0 }),
              t.get("rotate").set({ enable: !0 });
            for (const n in this.overrides) t.get(n).set(this.overrides[n]);
            return t;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      U = (() => {
        class e extends C {
          constructor(e, t, n, r) {
            super(e), (this._config = t), (this.console = n), (this.loader = r);
          }
          supports(e) {
            return !(
              (!N.hasOwnProperty(e.toLowerCase()) && !this.isCustomEvent(e)) ||
              (!window.Hammer &&
                !this.loader &&
                (this.console.warn(
                  `The "${e}" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.`
                ),
                1))
            );
          }
          addEventListener(e, t, n) {
            const r = this.manager.getZone();
            if (((t = t.toLowerCase()), !window.Hammer && this.loader)) {
              let r = !1,
                o = () => {
                  r = !0;
                };
              return (
                this.loader()
                  .then(() => {
                    if (!window.Hammer)
                      return (
                        this.console.warn(
                          "The custom HAMMER_LOADER completed, but Hammer.JS is not present."
                        ),
                        void (o = () => {})
                      );
                    r || (o = this.addEventListener(e, t, n));
                  })
                  .catch(() => {
                    this.console.warn(
                      `The "${t}" event cannot be bound because the custom Hammer.JS loader failed.`
                    ),
                      (o = () => {});
                  }),
                () => {
                  o();
                }
              );
            }
            return r.runOutsideAngular(() => {
              const o = this._config.buildHammer(e),
                i = function (e) {
                  r.runGuarded(function () {
                    n(e);
                  });
                };
              return (
                o.on(t, i),
                () => {
                  o.off(t, i), "function" == typeof o.destroy && o.destroy();
                }
              );
            });
          }
          isCustomEvent(e) {
            return this._config.events.indexOf(e) > -1;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275inject"](r.DOCUMENT),
              o["\u0275\u0275inject"](M),
              o["\u0275\u0275inject"](o["\u0275Console"]),
              o["\u0275\u0275inject"](L, 8)
            );
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })();
    const B = [],
      H = [
        {
          provide: _,
          useClass: U,
          multi: !0,
          deps: [r.DOCUMENT, M, o["\u0275Console"], [new o.Optional(), L]],
        },
        { provide: M, useClass: V, deps: [] },
      ],
      $ = B;
    let z = (() => {
      class e {}
      return (
        (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
        (e.ɵinj = o["\u0275\u0275defineInjector"]({
          factory: function (t) {
            return new (t || e)();
          },
          providers: H,
        })),
        e
      );
    })();
    const q = ["alt", "control", "meta", "shift"],
      W = {
        "\b": "Backspace",
        "\t": "Tab",
        "\x7f": "Delete",
        "\x1b": "Escape",
        Del: "Delete",
        Esc: "Escape",
        Left: "ArrowLeft",
        Right: "ArrowRight",
        Up: "ArrowUp",
        Down: "ArrowDown",
        Menu: "ContextMenu",
        Scroll: "ScrollLock",
        Win: "OS",
      },
      Q = {
        A: "1",
        B: "2",
        C: "3",
        D: "4",
        E: "5",
        F: "6",
        G: "7",
        H: "8",
        I: "9",
        J: "*",
        K: "+",
        M: "-",
        N: ".",
        O: "/",
        "`": "0",
        "\x90": "NumLock",
      },
      G = {
        alt: (e) => e.altKey,
        control: (e) => e.ctrlKey,
        meta: (e) => e.metaKey,
        shift: (e) => e.shiftKey,
      };
    let Z = (() => {
        class e extends C {
          constructor(e) {
            super(e);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, n, o) {
            const i = e.parseEventName(n),
              s = e.eventCallback(i.fullKey, o, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() =>
                Object(r["\u0275getDOM"])().onAndCancel(t, i.domEventName, s)
              );
          }
          static parseEventName(t) {
            const n = t.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const o = e._normalizeKey(n.pop());
            let i = "";
            if (
              (q.forEach((e) => {
                const t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), (i += e + "."));
              }),
              (i += o),
              0 != n.length || 0 === o.length)
            )
              return null;
            const s = {};
            return (s.domEventName = r), (s.fullKey = i), s;
          }
          static getEventFullKey(e) {
            let t = "",
              n = (function (e) {
                let t = e.key;
                if (null == t) {
                  if (((t = e.keyIdentifier), null == t)) return "Unidentified";
                  t.startsWith("U+") &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === e.location && Q.hasOwnProperty(t) && (t = Q[t]));
                }
                return W[t] || t;
              })(e);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              q.forEach((r) => {
                r != n && (0, G[r])(e) && (t += r + ".");
              }),
              (t += n),
              t
            );
          }
          static eventCallback(t, n, r) {
            return (o) => {
              e.getEventFullKey(o) === t && r.runGuarded(() => n(o));
            };
          }
          static _normalizeKey(e) {
            switch (e) {
              case "esc":
                return "escape";
              default:
                return e;
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      K = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = Object(o["\u0275\u0275defineInjectable"])({
            factory: function () {
              return Object(o["\u0275\u0275inject"])(J);
            },
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    function Y(e) {
      return new J(e.get(r.DOCUMENT));
    }
    let J = (() => {
      class e extends K {
        constructor(e) {
          super(), (this._doc = e);
        }
        sanitize(e, t) {
          if (null == t) return null;
          switch (e) {
            case o.SecurityContext.NONE:
              return t;
            case o.SecurityContext.HTML:
              return Object(o["\u0275allowSanitizationBypassAndThrow"])(
                t,
                "HTML"
              )
                ? Object(o["\u0275unwrapSafeValue"])(t)
                : Object(o["\u0275_sanitizeHtml"])(this._doc, String(t));
            case o.SecurityContext.STYLE:
              return Object(o["\u0275allowSanitizationBypassAndThrow"])(
                t,
                "Style"
              )
                ? Object(o["\u0275unwrapSafeValue"])(t)
                : t;
            case o.SecurityContext.SCRIPT:
              if (
                Object(o["\u0275allowSanitizationBypassAndThrow"])(t, "Script")
              )
                return Object(o["\u0275unwrapSafeValue"])(t);
              throw new Error("unsafe value used in a script context");
            case o.SecurityContext.URL:
              return (
                Object(o["\u0275getSanitizationBypassType"])(t),
                Object(o["\u0275allowSanitizationBypassAndThrow"])(t, "URL")
                  ? Object(o["\u0275unwrapSafeValue"])(t)
                  : Object(o["\u0275_sanitizeUrl"])(String(t))
              );
            case o.SecurityContext.RESOURCE_URL:
              if (
                Object(o["\u0275allowSanitizationBypassAndThrow"])(
                  t,
                  "ResourceURL"
                )
              )
                return Object(o["\u0275unwrapSafeValue"])(t);
              throw new Error(
                "unsafe value used in a resource URL context (see http://g.co/ng/security#xss)"
              );
            default:
              throw new Error(
                `Unexpected SecurityContext ${e} (see http://g.co/ng/security#xss)`
              );
          }
        }
        bypassSecurityTrustHtml(e) {
          return Object(o["\u0275bypassSanitizationTrustHtml"])(e);
        }
        bypassSecurityTrustStyle(e) {
          return Object(o["\u0275bypassSanitizationTrustStyle"])(e);
        }
        bypassSecurityTrustScript(e) {
          return Object(o["\u0275bypassSanitizationTrustScript"])(e);
        }
        bypassSecurityTrustUrl(e) {
          return Object(o["\u0275bypassSanitizationTrustUrl"])(e);
        }
        bypassSecurityTrustResourceUrl(e) {
          return Object(o["\u0275bypassSanitizationTrustResourceUrl"])(e);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
        }),
        (e.ɵprov = Object(o["\u0275\u0275defineInjectable"])({
          factory: function () {
            return Y(Object(o["\u0275\u0275inject"])(o.INJECTOR));
          },
          token: e,
          providedIn: "root",
        })),
        e
      );
    })();
    function X() {
      s.makeCurrent(), f.init();
    }
    function ee() {
      return new o.ErrorHandler();
    }
    function te() {
      return Object(o["\u0275setDocument"])(document), document;
    }
    const ne = [
        { provide: o.PLATFORM_ID, useValue: r["\u0275PLATFORM_BROWSER_ID"] },
        { provide: o.PLATFORM_INITIALIZER, useValue: X, multi: !0 },
        { provide: r.DOCUMENT, useFactory: te, deps: [] },
      ],
      re = [],
      oe = re,
      ie = Object(o.createPlatformFactory)(o.platformCore, "browser", ne),
      se = [
        oe,
        { provide: o["\u0275INJECTOR_SCOPE"], useValue: "root" },
        { provide: o.ErrorHandler, useFactory: ee, deps: [] },
        {
          provide: _,
          useClass: P,
          multi: !0,
          deps: [r.DOCUMENT, o.NgZone, o.PLATFORM_ID],
        },
        { provide: _, useClass: Z, multi: !0, deps: [r.DOCUMENT] },
        $,
        { provide: k, useClass: k, deps: [w, E, o.APP_ID] },
        { provide: o.RendererFactory2, useExisting: k },
        { provide: D, useExisting: E },
        { provide: E, useClass: E, deps: [r.DOCUMENT] },
        { provide: o.Testability, useClass: o.Testability, deps: [o.NgZone] },
        { provide: w, useClass: w, deps: [_, o.NgZone] },
        v,
      ];
    let ue = (() => {
      class e {
        constructor(e) {
          if (e)
            throw new Error(
              "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
            );
        }
        static withServerTransition(t) {
          return {
            ngModule: e,
            providers: [
              { provide: o.APP_ID, useValue: t.appId },
              { provide: c, useExisting: o.APP_ID },
              d,
            ],
          };
        }
      }
      return (
        (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
        (e.ɵinj = o["\u0275\u0275defineInjector"]({
          factory: function (t) {
            return new (t || e)(o["\u0275\u0275inject"](e, 12));
          },
          providers: se,
          imports: [r.CommonModule, o.ApplicationModule],
        })),
        e
      );
    })();
    function ae() {
      return new ce(Object(o["\u0275\u0275inject"])(r.DOCUMENT));
    }
    let ce = (() => {
      class e {
        constructor(e) {
          (this._doc = e), (this._dom = Object(r["\u0275getDOM"])());
        }
        addTag(e, t = !1) {
          return e ? this._getOrCreateElement(e, t) : null;
        }
        addTags(e, t = !1) {
          return e
            ? e.reduce(
                (e, n) => (n && e.push(this._getOrCreateElement(n, t)), e),
                []
              )
            : [];
        }
        getTag(e) {
          return (e && this._doc.querySelector(`meta[${e}]`)) || null;
        }
        getTags(e) {
          if (!e) return [];
          const t = this._doc.querySelectorAll(`meta[${e}]`);
          return t ? [].slice.call(t) : [];
        }
        updateTag(e, t) {
          if (!e) return null;
          t = t || this._parseSelector(e);
          const n = this.getTag(t);
          return n
            ? this._setMetaElementAttributes(e, n)
            : this._getOrCreateElement(e, !0);
        }
        removeTag(e) {
          this.removeTagElement(this.getTag(e));
        }
        removeTagElement(e) {
          e && this._dom.remove(e);
        }
        _getOrCreateElement(e, t = !1) {
          if (!t) {
            const t = this._parseSelector(e),
              n = this.getTag(t);
            if (n && this._containsAttributes(e, n)) return n;
          }
          const n = this._dom.createElement("meta");
          return (
            this._setMetaElementAttributes(e, n),
            this._doc.getElementsByTagName("head")[0].appendChild(n),
            n
          );
        }
        _setMetaElementAttributes(e, t) {
          return Object.keys(e).forEach((n) => t.setAttribute(n, e[n])), t;
        }
        _parseSelector(e) {
          const t = e.name ? "name" : "property";
          return `${t}="${e[t]}"`;
        }
        _containsAttributes(e, t) {
          return Object.keys(e).every((n) => t.getAttribute(n) === e[n]);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
        }),
        (e.ɵprov = Object(o["\u0275\u0275defineInjectable"])({
          factory: ae,
          token: e,
          providedIn: "root",
        })),
        e
      );
    })();
    function le() {
      return new de(Object(o["\u0275\u0275inject"])(r.DOCUMENT));
    }
    let de = (() => {
      class e {
        constructor(e) {
          this._doc = e;
        }
        getTitle() {
          return this._doc.title;
        }
        setTitle(e) {
          this._doc.title = e || "";
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(o["\u0275\u0275inject"](r.DOCUMENT));
        }),
        (e.ɵprov = Object(o["\u0275\u0275defineInjectable"])({
          factory: le,
          token: e,
          providedIn: "root",
        })),
        e
      );
    })();
    const fe = ("undefined" != typeof window && window) || {};
    class he {
      constructor(e, t) {
        (this.msPerTick = e), (this.numTicks = t);
      }
    }
    class pe {
      constructor(e) {
        this.appRef = e.injector.get(o.ApplicationRef);
      }
      timeChangeDetection(e) {
        const t = e && e.record,
          n = "Change Detection",
          o = null != fe.console.profile;
        t && o && fe.console.profile(n);
        const i = Object(r["\u0275getDOM"])().performanceNow();
        let s = 0;
        for (
          ;
          s < 5 || Object(r["\u0275getDOM"])().performanceNow() - i < 500;

        )
          this.appRef.tick(), s++;
        const u = Object(r["\u0275getDOM"])().performanceNow();
        t && o && fe.console.profileEnd(n);
        const a = (u - i) / s;
        return (
          fe.console.log(`ran ${s} change detection cycles`),
          fe.console.log(a.toFixed(2) + " ms per check"),
          new he(a, s)
        );
      }
    }
    const ge = "profiler";
    function me(e) {
      return h(ge, new pe(e)), e;
    }
    function ye() {
      h(ge, null);
    }
    function be(e) {
      const t = { "&": "&a;", '"': "&q;", "'": "&s;", "<": "&l;", ">": "&g;" };
      return e.replace(/[&"'<>]/g, (e) => t[e]);
    }
    function ve(e) {
      return e;
    }
    let _e = (() => {
      class e {
        constructor() {
          (this.store = {}), (this.onSerializeCallbacks = {});
        }
        static init(t) {
          const n = new e();
          return (n.store = t), n;
        }
        get(e, t) {
          return void 0 !== this.store[e] ? this.store[e] : t;
        }
        set(e, t) {
          this.store[e] = t;
        }
        remove(e) {
          delete this.store[e];
        }
        hasKey(e) {
          return this.store.hasOwnProperty(e);
        }
        onSerialize(e, t) {
          this.onSerializeCallbacks[e] = t;
        }
        toJson() {
          for (const t in this.onSerializeCallbacks)
            if (this.onSerializeCallbacks.hasOwnProperty(t))
              try {
                this.store[t] = this.onSerializeCallbacks[t]();
              } catch (e) {
                console.warn("Exception in onSerialize callback: ", e);
              }
          return JSON.stringify(this.store);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵprov = o["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    function we(e, t) {
      const n = e.getElementById(t + "-state");
      let r = {};
      if (n && n.textContent)
        try {
          r = JSON.parse(
            (function (e) {
              const t = {
                "&a;": "&",
                "&q;": '"',
                "&s;": "'",
                "&l;": "<",
                "&g;": ">",
              };
              return e.replace(/&[^;]+;/g, (e) => t[e]);
            })(n.textContent)
          );
        } catch (o) {
          console.warn(
            "Exception while restoring TransferState for app " + t,
            o
          );
        }
      return _e.init(r);
    }
    let Ce = (() => {
      class e {}
      return (
        (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
        (e.ɵinj = o["\u0275\u0275defineInjector"]({
          factory: function (t) {
            return new (t || e)();
          },
          providers: [
            { provide: _e, useFactory: we, deps: [r.DOCUMENT, o.APP_ID] },
          ],
        })),
        e
      );
    })();
    class De {
      static all() {
        return () => !0;
      }
      static css(e) {
        return (t) =>
          null != t.nativeElement &&
          (function (e, t) {
            return (
              !!Object(r["\u0275getDOM"])().isElementNode(e) &&
              ((e.matches && e.matches(t)) ||
                (e.msMatchesSelector && e.msMatchesSelector(t)) ||
                (e.webkitMatchesSelector && e.webkitMatchesSelector(t)))
            );
          })(t.nativeElement, e);
      }
      static directive(e) {
        return (t) => -1 !== t.providerTokens.indexOf(e);
      }
    }
    const Ee = new o.Version("10.1.4");
  },
  kJWO: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "observable", function () {
        return r;
      });
    const r = (() =>
      ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
  },
  l7GE: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "OuterSubscriber", function () {
        return o;
      });
    var r = n("7o/Q");
    class o extends r.Subscriber {
      notifyNext(e, t, n, r, o) {
        this.destination.next(t);
      }
      notifyError(e, t) {
        this.destination.error(e);
      }
      notifyComplete(e) {
        this.destination.complete();
      }
    }
  },
  lJxs: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "map", function () {
        return o;
      }),
      n.d(t, "MapOperator", function () {
        return i;
      });
    var r = n("7o/Q");
    function o(e, t) {
      return function (n) {
        if ("function" != typeof e)
          throw new TypeError(
            "argument is not a function. Are you looking for `mapTo()`?"
          );
        return n.lift(new i(e, t));
      };
    }
    class i {
      constructor(e, t) {
        (this.project = e), (this.thisArg = t);
      }
      call(e, t) {
        return t.subscribe(new s(e, this.project, this.thisArg));
      }
    }
    class s extends r.Subscriber {
      constructor(e, t, n) {
        super(e),
          (this.project = t),
          (this.count = 0),
          (this.thisArg = n || this);
      }
      _next(e) {
        let t;
        try {
          t = this.project.call(this.thisArg, e, this.count++);
        } catch (n) {
          return void this.destination.error(n);
        }
        this.destination.next(t);
      }
    }
  },
  mCNh: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "pipe", function () {
        return o;
      }),
      n.d(t, "pipeFromArray", function () {
        return i;
      });
    var r = n("SpAZ");
    function o(...e) {
      return i(e);
    }
    function i(e) {
      return 0 === e.length
        ? r.identity
        : 1 === e.length
        ? e[0]
        : function (t) {
            return e.reduce((e, t) => t(e), t);
          };
    }
  },
  n6bG: function (e, t, n) {
    "use strict";
    function r(e) {
      return "function" == typeof e;
    }
    n.r(t),
      n.d(t, "isFunction", function () {
        return r;
      });
  },
  nYR2: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "finalize", function () {
        return i;
      });
    var r = n("7o/Q"),
      o = n("quSY");
    function i(e) {
      return (t) => t.lift(new s(e));
    }
    class s {
      constructor(e) {
        this.callback = e;
      }
      call(e, t) {
        return t.subscribe(new u(e, this.callback));
      }
    }
    class u extends r.Subscriber {
      constructor(e, t) {
        super(e), this.add(new o.Subscription(t));
      }
    }
  },
  ngJS: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeToArray", function () {
        return r;
      });
    const r = (e) => (t) => {
      for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
      t.complete();
    };
  },
  oB13: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "multicast", function () {
        return o;
      }),
      n.d(t, "MulticastOperator", function () {
        return i;
      });
    var r = n("EQ5u");
    function o(e, t) {
      return function (n) {
        let o;
        if (
          ((o =
            "function" == typeof e
              ? e
              : function () {
                  return e;
                }),
          "function" == typeof t)
        )
          return n.lift(new i(o, t));
        const s = Object.create(n, r.connectableObservableDescriptor);
        return (s.source = n), (s.subjectFactory = o), s;
      };
    }
    class i {
      constructor(e, t) {
        (this.subjectFactory = e), (this.selector = t);
      }
      call(e, t) {
        const { selector: n } = this,
          r = this.subjectFactory(),
          o = n(r).subscribe(e);
        return o.add(t.subscribe(r)), o;
      }
    }
  },
  ofXK: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "APP_BASE_HREF", function () {
        return _;
      }),
      n.d(t, "AsyncPipe", function () {
        return rt;
      }),
      n.d(t, "CommonModule", function () {
        return Ct;
      }),
      n.d(t, "CurrencyPipe", function () {
        return yt;
      }),
      n.d(t, "DOCUMENT", function () {
        return a;
      }),
      n.d(t, "DatePipe", function () {
        return at;
      }),
      n.d(t, "DecimalPipe", function () {
        return gt;
      }),
      n.d(t, "FormStyle", function () {
        return A;
      }),
      n.d(t, "FormatWidth", function () {
        return k;
      }),
      n.d(t, "HashLocationStrategy", function () {
        return C;
      }),
      n.d(t, "I18nPluralPipe", function () {
        return lt;
      }),
      n.d(t, "I18nSelectPipe", function () {
        return dt;
      }),
      n.d(t, "JsonPipe", function () {
        return ft;
      }),
      n.d(t, "KeyValuePipe", function () {
        return ht;
      }),
      n.d(t, "LOCATION_INITIALIZED", function () {
        return d;
      }),
      n.d(t, "Location", function () {
        return D;
      }),
      n.d(t, "LocationStrategy", function () {
        return b;
      }),
      n.d(t, "LowerCasePipe", function () {
        return ot;
      }),
      n.d(t, "NgClass", function () {
        return Pe;
      }),
      n.d(t, "NgComponentOutlet", function () {
        return Ne;
      }),
      n.d(t, "NgForOf", function () {
        return Le;
      }),
      n.d(t, "NgForOfContext", function () {
        return Me;
      }),
      n.d(t, "NgIf", function () {
        return Ue;
      }),
      n.d(t, "NgIfContext", function () {
        return Be;
      }),
      n.d(t, "NgLocaleLocalization", function () {
        return Te;
      }),
      n.d(t, "NgLocalization", function () {
        return je;
      }),
      n.d(t, "NgPlural", function () {
        return Qe;
      }),
      n.d(t, "NgPluralCase", function () {
        return Ge;
      }),
      n.d(t, "NgStyle", function () {
        return Ze;
      }),
      n.d(t, "NgSwitch", function () {
        return ze;
      }),
      n.d(t, "NgSwitchCase", function () {
        return qe;
      }),
      n.d(t, "NgSwitchDefault", function () {
        return We;
      }),
      n.d(t, "NgTemplateOutlet", function () {
        return Ke;
      }),
      n.d(t, "NumberFormatStyle", function () {
        return x;
      }),
      n.d(t, "NumberSymbol", function () {
        return T;
      }),
      n.d(t, "PathLocationStrategy", function () {
        return w;
      }),
      n.d(t, "PercentPipe", function () {
        return mt;
      }),
      n.d(t, "PlatformLocation", function () {
        return c;
      }),
      n.d(t, "Plural", function () {
        return I;
      }),
      n.d(t, "SlicePipe", function () {
        return _t;
      }),
      n.d(t, "TitleCasePipe", function () {
        return st;
      }),
      n.d(t, "TranslationWidth", function () {
        return j;
      }),
      n.d(t, "UpperCasePipe", function () {
        return ut;
      }),
      n.d(t, "VERSION", function () {
        return kt;
      }),
      n.d(t, "ViewportScroller", function () {
        return Tt;
      }),
      n.d(t, "WeekDay", function () {
        return R;
      }),
      n.d(t, "formatCurrency", function () {
        return Se;
      }),
      n.d(t, "formatDate", function () {
        return le;
      }),
      n.d(t, "formatNumber", function () {
        return xe;
      }),
      n.d(t, "formatPercent", function () {
        return Oe;
      }),
      n.d(t, "getCurrencySymbol", function () {
        return ne;
      }),
      n.d(t, "getLocaleCurrencyCode", function () {
        return G;
      }),
      n.d(t, "getLocaleCurrencyName", function () {
        return Q;
      }),
      n.d(t, "getLocaleCurrencySymbol", function () {
        return W;
      }),
      n.d(t, "getLocaleDateFormat", function () {
        return B;
      }),
      n.d(t, "getLocaleDateTimeFormat", function () {
        return $;
      }),
      n.d(t, "getLocaleDayNames", function () {
        return N;
      }),
      n.d(t, "getLocaleDayPeriods", function () {
        return P;
      }),
      n.d(t, "getLocaleDirection", function () {
        return X;
      }),
      n.d(t, "getLocaleEraNames", function () {
        return L;
      }),
      n.d(t, "getLocaleExtraDayPeriodRules", function () {
        return Y;
      }),
      n.d(t, "getLocaleExtraDayPeriods", function () {
        return J;
      }),
      n.d(t, "getLocaleFirstDayOfWeek", function () {
        return V;
      }),
      n.d(t, "getLocaleId", function () {
        return F;
      }),
      n.d(t, "getLocaleMonthNames", function () {
        return M;
      }),
      n.d(t, "getLocaleNumberFormat", function () {
        return q;
      }),
      n.d(t, "getLocaleNumberSymbol", function () {
        return z;
      }),
      n.d(t, "getLocalePluralCase", function () {
        return Z;
      }),
      n.d(t, "getLocaleTimeFormat", function () {
        return H;
      }),
      n.d(t, "getLocaleWeekEndRange", function () {
        return U;
      }),
      n.d(t, "getNumberOfCurrencyDigits", function () {
        return re;
      }),
      n.d(t, "isPlatformBrowser", function () {
        return xt;
      }),
      n.d(t, "isPlatformServer", function () {
        return It;
      }),
      n.d(t, "isPlatformWorkerApp", function () {
        return At;
      }),
      n.d(t, "isPlatformWorkerUi", function () {
        return jt;
      }),
      n.d(t, "registerLocaleData", function () {
        return Re;
      }),
      n.d(t, "\u0275BrowserPlatformLocation", function () {
        return f;
      }),
      n.d(t, "\u0275DomAdapter", function () {
        return u;
      }),
      n.d(t, "\u0275NullViewportScroller", function () {
        return Pt;
      }),
      n.d(t, "\u0275PLATFORM_BROWSER_ID", function () {
        return Dt;
      }),
      n.d(t, "\u0275PLATFORM_SERVER_ID", function () {
        return Et;
      }),
      n.d(t, "\u0275PLATFORM_WORKER_APP_ID", function () {
        return St;
      }),
      n.d(t, "\u0275PLATFORM_WORKER_UI_ID", function () {
        return Ot;
      }),
      n.d(t, "\u0275angular_packages_common_common_a", function () {
        return l;
      }),
      n.d(t, "\u0275angular_packages_common_common_b", function () {
        return p;
      }),
      n.d(t, "\u0275angular_packages_common_common_c", function () {
        return E;
      }),
      n.d(t, "\u0275angular_packages_common_common_d", function () {
        return v;
      }),
      n.d(t, "\u0275angular_packages_common_common_e", function () {
        return Ye;
      }),
      n.d(t, "\u0275angular_packages_common_common_f", function () {
        return wt;
      }),
      n.d(t, "\u0275getDOM", function () {
        return i;
      }),
      n.d(t, "\u0275parseCookieValue", function () {
        return Fe;
      }),
      n.d(t, "\u0275setRootDomAdapter", function () {
        return s;
      });
    var r = n("fXoL");
    let o = null;
    function i() {
      return o;
    }
    function s(e) {
      o || (o = e);
    }
    class u {}
    const a = new r.InjectionToken("DocumentToken");
    let c = (() => {
      class e {}
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵprov = Object(r["\u0275\u0275defineInjectable"])({
          factory: l,
          token: e,
          providedIn: "platform",
        })),
        e
      );
    })();
    function l() {
      return Object(r["\u0275\u0275inject"])(f);
    }
    const d = new r.InjectionToken("Location Initialized");
    let f = (() => {
      class e extends c {
        constructor(e) {
          super(), (this._doc = e), this._init();
        }
        _init() {
          (this.location = i().getLocation()),
            (this._history = i().getHistory());
        }
        getBaseHrefFromDOM() {
          return i().getBaseHref(this._doc);
        }
        onPopState(e) {
          i()
            .getGlobalEventTarget(this._doc, "window")
            .addEventListener("popstate", e, !1);
        }
        onHashChange(e) {
          i()
            .getGlobalEventTarget(this._doc, "window")
            .addEventListener("hashchange", e, !1);
        }
        get href() {
          return this.location.href;
        }
        get protocol() {
          return this.location.protocol;
        }
        get hostname() {
          return this.location.hostname;
        }
        get port() {
          return this.location.port;
        }
        get pathname() {
          return this.location.pathname;
        }
        get search() {
          return this.location.search;
        }
        get hash() {
          return this.location.hash;
        }
        set pathname(e) {
          this.location.pathname = e;
        }
        pushState(e, t, n) {
          h() ? this._history.pushState(e, t, n) : (this.location.hash = n);
        }
        replaceState(e, t, n) {
          h() ? this._history.replaceState(e, t, n) : (this.location.hash = n);
        }
        forward() {
          this._history.forward();
        }
        back() {
          this._history.back();
        }
        getState() {
          return this._history.state;
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(r["\u0275\u0275inject"](a));
        }),
        (e.ɵprov = Object(r["\u0275\u0275defineInjectable"])({
          factory: p,
          token: e,
          providedIn: "platform",
        })),
        e
      );
    })();
    function h() {
      return !!window.history.pushState;
    }
    function p() {
      return new f(Object(r["\u0275\u0275inject"])(a));
    }
    function g(e, t) {
      if (0 == e.length) return t;
      if (0 == t.length) return e;
      let n = 0;
      return (
        e.endsWith("/") && n++,
        t.startsWith("/") && n++,
        2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
      );
    }
    function m(e) {
      const t = e.match(/#|\?|$/),
        n = (t && t.index) || e.length;
      return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
    }
    function y(e) {
      return e && "?" !== e[0] ? "?" + e : e;
    }
    let b = (() => {
      class e {}
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵprov = Object(r["\u0275\u0275defineInjectable"])({
          factory: v,
          token: e,
          providedIn: "root",
        })),
        e
      );
    })();
    function v(e) {
      const t = Object(r["\u0275\u0275inject"])(a).location;
      return new w(Object(r["\u0275\u0275inject"])(c), (t && t.origin) || "");
    }
    const _ = new r.InjectionToken("appBaseHref");
    let w = (() => {
        class e extends b {
          constructor(e, t) {
            if (
              (super(),
              (this._platformLocation = e),
              null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
              null == t)
            )
              throw new Error(
                "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
              );
            this._baseHref = t;
          }
          onPopState(e) {
            this._platformLocation.onPopState(e),
              this._platformLocation.onHashChange(e);
          }
          getBaseHref() {
            return this._baseHref;
          }
          prepareExternalUrl(e) {
            return g(this._baseHref, e);
          }
          path(e = !1) {
            const t =
                this._platformLocation.pathname +
                y(this._platformLocation.search),
              n = this._platformLocation.hash;
            return n && e ? `${t}${n}` : t;
          }
          pushState(e, t, n, r) {
            const o = this.prepareExternalUrl(n + y(r));
            this._platformLocation.pushState(e, t, o);
          }
          replaceState(e, t, n, r) {
            const o = this.prepareExternalUrl(n + y(r));
            this._platformLocation.replaceState(e, t, o);
          }
          forward() {
            this._platformLocation.forward();
          }
          back() {
            this._platformLocation.back();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275inject"](c),
              r["\u0275\u0275inject"](_, 8)
            );
          }),
          (e.ɵprov = r["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      C = (() => {
        class e extends b {
          constructor(e, t) {
            super(),
              (this._platformLocation = e),
              (this._baseHref = ""),
              null != t && (this._baseHref = t);
          }
          onPopState(e) {
            this._platformLocation.onPopState(e),
              this._platformLocation.onHashChange(e);
          }
          getBaseHref() {
            return this._baseHref;
          }
          path(e = !1) {
            let t = this._platformLocation.hash;
            return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t;
          }
          prepareExternalUrl(e) {
            const t = g(this._baseHref, e);
            return t.length > 0 ? "#" + t : t;
          }
          pushState(e, t, n, r) {
            let o = this.prepareExternalUrl(n + y(r));
            0 == o.length && (o = this._platformLocation.pathname),
              this._platformLocation.pushState(e, t, o);
          }
          replaceState(e, t, n, r) {
            let o = this.prepareExternalUrl(n + y(r));
            0 == o.length && (o = this._platformLocation.pathname),
              this._platformLocation.replaceState(e, t, o);
          }
          forward() {
            this._platformLocation.forward();
          }
          back() {
            this._platformLocation.back();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275inject"](c),
              r["\u0275\u0275inject"](_, 8)
            );
          }),
          (e.ɵprov = r["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      D = (() => {
        class e {
          constructor(e, t) {
            (this._subject = new r.EventEmitter()),
              (this._urlChangeListeners = []),
              (this._platformStrategy = e);
            const n = this._platformStrategy.getBaseHref();
            (this._platformLocation = t),
              (this._baseHref = m(S(n))),
              this._platformStrategy.onPopState((e) => {
                this._subject.emit({
                  url: this.path(!0),
                  pop: !0,
                  state: e.state,
                  type: e.type,
                });
              });
          }
          path(e = !1) {
            return this.normalize(this._platformStrategy.path(e));
          }
          getState() {
            return this._platformLocation.getState();
          }
          isCurrentPathEqualTo(e, t = "") {
            return this.path() == this.normalize(e + y(t));
          }
          normalize(t) {
            return e.stripTrailingSlash(
              (function (e, t) {
                return e && t.startsWith(e) ? t.substring(e.length) : t;
              })(this._baseHref, S(t))
            );
          }
          prepareExternalUrl(e) {
            return (
              e && "/" !== e[0] && (e = "/" + e),
              this._platformStrategy.prepareExternalUrl(e)
            );
          }
          go(e, t = "", n = null) {
            this._platformStrategy.pushState(n, "", e, t),
              this._notifyUrlChangeListeners(
                this.prepareExternalUrl(e + y(t)),
                n
              );
          }
          replaceState(e, t = "", n = null) {
            this._platformStrategy.replaceState(n, "", e, t),
              this._notifyUrlChangeListeners(
                this.prepareExternalUrl(e + y(t)),
                n
              );
          }
          forward() {
            this._platformStrategy.forward();
          }
          back() {
            this._platformStrategy.back();
          }
          onUrlChange(e) {
            this._urlChangeListeners.push(e),
              this._urlChangeSubscription ||
                (this._urlChangeSubscription = this.subscribe((e) => {
                  this._notifyUrlChangeListeners(e.url, e.state);
                }));
          }
          _notifyUrlChangeListeners(e = "", t) {
            this._urlChangeListeners.forEach((n) => n(e, t));
          }
          subscribe(e, t, n) {
            return this._subject.subscribe({ next: e, error: t, complete: n });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275inject"](b),
              r["\u0275\u0275inject"](c)
            );
          }),
          (e.normalizeQueryParams = y),
          (e.joinWithSlash = g),
          (e.stripTrailingSlash = m),
          (e.ɵprov = Object(r["\u0275\u0275defineInjectable"])({
            factory: E,
            token: e,
            providedIn: "root",
          })),
          e
        );
      })();
    function E() {
      return new D(
        Object(r["\u0275\u0275inject"])(b),
        Object(r["\u0275\u0275inject"])(c)
      );
    }
    function S(e) {
      return e.replace(/\/index.html$/, "");
    }
    const O = {
      ADP: [void 0, void 0, 0],
      AFN: [void 0, void 0, 0],
      ALL: [void 0, void 0, 0],
      AMD: [void 0, void 0, 2],
      AOA: [void 0, "Kz"],
      ARS: [void 0, "$"],
      AUD: ["A$", "$"],
      BAM: [void 0, "KM"],
      BBD: [void 0, "$"],
      BDT: [void 0, "\u09f3"],
      BHD: [void 0, void 0, 3],
      BIF: [void 0, void 0, 0],
      BMD: [void 0, "$"],
      BND: [void 0, "$"],
      BOB: [void 0, "Bs"],
      BRL: ["R$"],
      BSD: [void 0, "$"],
      BWP: [void 0, "P"],
      BYN: [void 0, "\u0440.", 2],
      BYR: [void 0, void 0, 0],
      BZD: [void 0, "$"],
      CAD: ["CA$", "$", 2],
      CHF: [void 0, void 0, 2],
      CLF: [void 0, void 0, 4],
      CLP: [void 0, "$", 0],
      CNY: ["CN\xa5", "\xa5"],
      COP: [void 0, "$", 2],
      CRC: [void 0, "\u20a1", 2],
      CUC: [void 0, "$"],
      CUP: [void 0, "$"],
      CZK: [void 0, "K\u010d", 2],
      DJF: [void 0, void 0, 0],
      DKK: [void 0, "kr", 2],
      DOP: [void 0, "$"],
      EGP: [void 0, "E\xa3"],
      ESP: [void 0, "\u20a7", 0],
      EUR: ["\u20ac"],
      FJD: [void 0, "$"],
      FKP: [void 0, "\xa3"],
      GBP: ["\xa3"],
      GEL: [void 0, "\u20be"],
      GIP: [void 0, "\xa3"],
      GNF: [void 0, "FG", 0],
      GTQ: [void 0, "Q"],
      GYD: [void 0, "$", 2],
      HKD: ["HK$", "$"],
      HNL: [void 0, "L"],
      HRK: [void 0, "kn"],
      HUF: [void 0, "Ft", 2],
      IDR: [void 0, "Rp", 2],
      ILS: ["\u20aa"],
      INR: ["\u20b9"],
      IQD: [void 0, void 0, 0],
      IRR: [void 0, void 0, 0],
      ISK: [void 0, "kr", 0],
      ITL: [void 0, void 0, 0],
      JMD: [void 0, "$"],
      JOD: [void 0, void 0, 3],
      JPY: ["\xa5", void 0, 0],
      KHR: [void 0, "\u17db"],
      KMF: [void 0, "CF", 0],
      KPW: [void 0, "\u20a9", 0],
      KRW: ["\u20a9", void 0, 0],
      KWD: [void 0, void 0, 3],
      KYD: [void 0, "$"],
      KZT: [void 0, "\u20b8"],
      LAK: [void 0, "\u20ad", 0],
      LBP: [void 0, "L\xa3", 0],
      LKR: [void 0, "Rs"],
      LRD: [void 0, "$"],
      LTL: [void 0, "Lt"],
      LUF: [void 0, void 0, 0],
      LVL: [void 0, "Ls"],
      LYD: [void 0, void 0, 3],
      MGA: [void 0, "Ar", 0],
      MGF: [void 0, void 0, 0],
      MMK: [void 0, "K", 0],
      MNT: [void 0, "\u20ae", 2],
      MRO: [void 0, void 0, 0],
      MUR: [void 0, "Rs", 2],
      MXN: ["MX$", "$"],
      MYR: [void 0, "RM"],
      NAD: [void 0, "$"],
      NGN: [void 0, "\u20a6"],
      NIO: [void 0, "C$"],
      NOK: [void 0, "kr", 2],
      NPR: [void 0, "Rs"],
      NZD: ["NZ$", "$"],
      OMR: [void 0, void 0, 3],
      PHP: [void 0, "\u20b1"],
      PKR: [void 0, "Rs", 2],
      PLN: [void 0, "z\u0142"],
      PYG: [void 0, "\u20b2", 0],
      RON: [void 0, "lei"],
      RSD: [void 0, void 0, 0],
      RUB: [void 0, "\u20bd"],
      RUR: [void 0, "\u0440."],
      RWF: [void 0, "RF", 0],
      SBD: [void 0, "$"],
      SEK: [void 0, "kr", 2],
      SGD: [void 0, "$"],
      SHP: [void 0, "\xa3"],
      SLL: [void 0, void 0, 0],
      SOS: [void 0, void 0, 0],
      SRD: [void 0, "$"],
      SSP: [void 0, "\xa3"],
      STD: [void 0, void 0, 0],
      STN: [void 0, "Db"],
      SYP: [void 0, "\xa3", 0],
      THB: [void 0, "\u0e3f"],
      TMM: [void 0, void 0, 0],
      TND: [void 0, void 0, 3],
      TOP: [void 0, "T$"],
      TRL: [void 0, void 0, 0],
      TRY: [void 0, "\u20ba"],
      TTD: [void 0, "$"],
      TWD: ["NT$", "$", 2],
      TZS: [void 0, void 0, 2],
      UAH: [void 0, "\u20b4"],
      UGX: [void 0, void 0, 0],
      USD: ["$"],
      UYI: [void 0, void 0, 0],
      UYU: [void 0, "$"],
      UYW: [void 0, void 0, 4],
      UZS: [void 0, void 0, 2],
      VEF: [void 0, "Bs", 2],
      VND: ["\u20ab", void 0, 0],
      VUV: [void 0, void 0, 0],
      XAF: ["FCFA", void 0, 0],
      XCD: ["EC$", "$"],
      XOF: ["CFA", void 0, 0],
      XPF: ["CFPF", void 0, 0],
      XXX: ["\xa4"],
      YER: [void 0, void 0, 0],
      ZAR: [void 0, "R"],
      ZMK: [void 0, void 0, 0],
      ZMW: [void 0, "ZK"],
      ZWD: [void 0, void 0, 0],
    };
    var x = (function (e) {
        return (
          (e[(e.Decimal = 0)] = "Decimal"),
          (e[(e.Percent = 1)] = "Percent"),
          (e[(e.Currency = 2)] = "Currency"),
          (e[(e.Scientific = 3)] = "Scientific"),
          e
        );
      })({}),
      I = (function (e) {
        return (
          (e[(e.Zero = 0)] = "Zero"),
          (e[(e.One = 1)] = "One"),
          (e[(e.Two = 2)] = "Two"),
          (e[(e.Few = 3)] = "Few"),
          (e[(e.Many = 4)] = "Many"),
          (e[(e.Other = 5)] = "Other"),
          e
        );
      })({}),
      A = (function (e) {
        return (
          (e[(e.Format = 0)] = "Format"),
          (e[(e.Standalone = 1)] = "Standalone"),
          e
        );
      })({}),
      j = (function (e) {
        return (
          (e[(e.Narrow = 0)] = "Narrow"),
          (e[(e.Abbreviated = 1)] = "Abbreviated"),
          (e[(e.Wide = 2)] = "Wide"),
          (e[(e.Short = 3)] = "Short"),
          e
        );
      })({}),
      k = (function (e) {
        return (
          (e[(e.Short = 0)] = "Short"),
          (e[(e.Medium = 1)] = "Medium"),
          (e[(e.Long = 2)] = "Long"),
          (e[(e.Full = 3)] = "Full"),
          e
        );
      })({}),
      T = (function (e) {
        return (
          (e[(e.Decimal = 0)] = "Decimal"),
          (e[(e.Group = 1)] = "Group"),
          (e[(e.List = 2)] = "List"),
          (e[(e.PercentSign = 3)] = "PercentSign"),
          (e[(e.PlusSign = 4)] = "PlusSign"),
          (e[(e.MinusSign = 5)] = "MinusSign"),
          (e[(e.Exponential = 6)] = "Exponential"),
          (e[(e.SuperscriptingExponent = 7)] = "SuperscriptingExponent"),
          (e[(e.PerMille = 8)] = "PerMille"),
          (e[(e[1 / 0] = 9)] = "Infinity"),
          (e[(e.NaN = 10)] = "NaN"),
          (e[(e.TimeSeparator = 11)] = "TimeSeparator"),
          (e[(e.CurrencyDecimal = 12)] = "CurrencyDecimal"),
          (e[(e.CurrencyGroup = 13)] = "CurrencyGroup"),
          e
        );
      })({}),
      R = (function (e) {
        return (
          (e[(e.Sunday = 0)] = "Sunday"),
          (e[(e.Monday = 1)] = "Monday"),
          (e[(e.Tuesday = 2)] = "Tuesday"),
          (e[(e.Wednesday = 3)] = "Wednesday"),
          (e[(e.Thursday = 4)] = "Thursday"),
          (e[(e.Friday = 5)] = "Friday"),
          (e[(e.Saturday = 6)] = "Saturday"),
          e
        );
      })({});
    function F(e) {
      return Object(r["\u0275findLocaleData"])(e)[
        r["\u0275LocaleDataIndex"].LocaleId
      ];
    }
    function P(e, t, n) {
      const o = Object(r["\u0275findLocaleData"])(e),
        i = ee(
          [
            o[r["\u0275LocaleDataIndex"].DayPeriodsFormat],
            o[r["\u0275LocaleDataIndex"].DayPeriodsStandalone],
          ],
          t
        );
      return ee(i, n);
    }
    function N(e, t, n) {
      const o = Object(r["\u0275findLocaleData"])(e),
        i = ee(
          [
            o[r["\u0275LocaleDataIndex"].DaysFormat],
            o[r["\u0275LocaleDataIndex"].DaysStandalone],
          ],
          t
        );
      return ee(i, n);
    }
    function M(e, t, n) {
      const o = Object(r["\u0275findLocaleData"])(e),
        i = ee(
          [
            o[r["\u0275LocaleDataIndex"].MonthsFormat],
            o[r["\u0275LocaleDataIndex"].MonthsStandalone],
          ],
          t
        );
      return ee(i, n);
    }
    function L(e, t) {
      return ee(
        Object(r["\u0275findLocaleData"])(e)[r["\u0275LocaleDataIndex"].Eras],
        t
      );
    }
    function V(e) {
      return Object(r["\u0275findLocaleData"])(e)[
        r["\u0275LocaleDataIndex"].FirstDayOfWeek
      ];
    }
    function U(e) {
      return Object(r["\u0275findLocaleData"])(e)[
        r["\u0275LocaleDataIndex"].WeekendRange
      ];
    }
    function B(e, t) {
      return ee(
        Object(r["\u0275findLocaleData"])(e)[
          r["\u0275LocaleDataIndex"].DateFormat
        ],
        t
      );
    }
    function H(e, t) {
      return ee(
        Object(r["\u0275findLocaleData"])(e)[
          r["\u0275LocaleDataIndex"].TimeFormat
        ],
        t
      );
    }
    function $(e, t) {
      return ee(
        Object(r["\u0275findLocaleData"])(e)[
          r["\u0275LocaleDataIndex"].DateTimeFormat
        ],
        t
      );
    }
    function z(e, t) {
      const n = Object(r["\u0275findLocaleData"])(e),
        o = n[r["\u0275LocaleDataIndex"].NumberSymbols][t];
      if (void 0 === o) {
        if (t === T.CurrencyDecimal)
          return n[r["\u0275LocaleDataIndex"].NumberSymbols][T.Decimal];
        if (t === T.CurrencyGroup)
          return n[r["\u0275LocaleDataIndex"].NumberSymbols][T.Group];
      }
      return o;
    }
    function q(e, t) {
      return Object(r["\u0275findLocaleData"])(e)[
        r["\u0275LocaleDataIndex"].NumberFormats
      ][t];
    }
    function W(e) {
      return (
        Object(r["\u0275findLocaleData"])(e)[
          r["\u0275LocaleDataIndex"].CurrencySymbol
        ] || null
      );
    }
    function Q(e) {
      return (
        Object(r["\u0275findLocaleData"])(e)[
          r["\u0275LocaleDataIndex"].CurrencyName
        ] || null
      );
    }
    function G(e) {
      return Object(r["\u0275getLocaleCurrencyCode"])(e);
    }
    const Z = r["\u0275getLocalePluralCase"];
    function K(e) {
      if (!e[r["\u0275LocaleDataIndex"].ExtraData])
        throw new Error(
          `Missing extra locale data for the locale "${
            e[r["\u0275LocaleDataIndex"].LocaleId]
          }". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`
        );
    }
    function Y(e) {
      const t = Object(r["\u0275findLocaleData"])(e);
      return (
        K(t),
        (t[r["\u0275LocaleDataIndex"].ExtraData][2] || []).map((e) =>
          "string" == typeof e ? te(e) : [te(e[0]), te(e[1])]
        )
      );
    }
    function J(e, t, n) {
      const o = Object(r["\u0275findLocaleData"])(e);
      K(o);
      const i =
        ee(
          [
            o[r["\u0275LocaleDataIndex"].ExtraData][0],
            o[r["\u0275LocaleDataIndex"].ExtraData][1],
          ],
          t
        ) || [];
      return ee(i, n) || [];
    }
    function X(e) {
      return Object(r["\u0275findLocaleData"])(e)[
        r["\u0275LocaleDataIndex"].Directionality
      ];
    }
    function ee(e, t) {
      for (let n = t; n > -1; n--) if (void 0 !== e[n]) return e[n];
      throw new Error("Locale data API: locale data undefined");
    }
    function te(e) {
      const [t, n] = e.split(":");
      return { hours: +t, minutes: +n };
    }
    function ne(e, t, n = "en") {
      const o =
          (function (e) {
            return Object(r["\u0275findLocaleData"])(e)[
              r["\u0275LocaleDataIndex"].Currencies
            ];
          })(n)[e] ||
          O[e] ||
          [],
        i = o[1];
      return "narrow" === t && "string" == typeof i ? i : o[0] || e;
    }
    function re(e) {
      let t;
      const n = O[e];
      return n && (t = n[2]), "number" == typeof t ? t : 2;
    }
    const oe = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
      ie = {},
      se = /((?:[^GyMLwWdEabBhHmsSzZO']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
    var ue = (function (e) {
        return (
          (e[(e.Short = 0)] = "Short"),
          (e[(e.ShortGMT = 1)] = "ShortGMT"),
          (e[(e.Long = 2)] = "Long"),
          (e[(e.Extended = 3)] = "Extended"),
          e
        );
      })({}),
      ae = (function (e) {
        return (
          (e[(e.FullYear = 0)] = "FullYear"),
          (e[(e.Month = 1)] = "Month"),
          (e[(e.Date = 2)] = "Date"),
          (e[(e.Hours = 3)] = "Hours"),
          (e[(e.Minutes = 4)] = "Minutes"),
          (e[(e.Seconds = 5)] = "Seconds"),
          (e[(e.FractionalSeconds = 6)] = "FractionalSeconds"),
          (e[(e.Day = 7)] = "Day"),
          e
        );
      })({}),
      ce = (function (e) {
        return (
          (e[(e.DayPeriods = 0)] = "DayPeriods"),
          (e[(e.Days = 1)] = "Days"),
          (e[(e.Months = 2)] = "Months"),
          (e[(e.Eras = 3)] = "Eras"),
          e
        );
      })({});
    function le(e, t, n, r) {
      let o = (function (e) {
        if (_e(e)) return e;
        if ("number" == typeof e && !isNaN(e)) return new Date(e);
        if ("string" == typeof e) {
          e = e.trim();
          const t = parseFloat(e);
          if (!isNaN(e - t)) return new Date(t);
          if (/^(\d{4}-\d{1,2}-\d{1,2})$/.test(e)) {
            const [t, n, r] = e.split("-").map((e) => +e);
            return new Date(t, n - 1, r);
          }
          let n;
          if ((n = e.match(oe)))
            return (function (e) {
              const t = new Date(0);
              let n = 0,
                r = 0;
              const o = e[8] ? t.setUTCFullYear : t.setFullYear,
                i = e[8] ? t.setUTCHours : t.setHours;
              e[9] && ((n = Number(e[9] + e[10])), (r = Number(e[9] + e[11]))),
                o.call(t, Number(e[1]), Number(e[2]) - 1, Number(e[3]));
              const s = Number(e[4] || 0) - n,
                u = Number(e[5] || 0) - r,
                a = Number(e[6] || 0),
                c = Math.round(1e3 * parseFloat("0." + (e[7] || 0)));
              return i.call(t, s, u, a, c), t;
            })(n);
        }
        const t = new Date(e);
        if (!_e(t)) throw new Error(`Unable to convert "${e}" into a date`);
        return t;
      })(e);
      t = de(n, t) || t;
      let i,
        s = [];
      for (; t; ) {
        if (((i = se.exec(t)), !i)) {
          s.push(t);
          break;
        }
        {
          s = s.concat(i.slice(1));
          const e = s.pop();
          if (!e) break;
          t = e;
        }
      }
      let u = o.getTimezoneOffset();
      r &&
        ((u = ve(r, u)),
        (o = (function (e, t, n) {
          const r = e.getTimezoneOffset();
          return (function (e, t) {
            return (
              (e = new Date(e.getTime())).setMinutes(e.getMinutes() + t), e
            );
          })(e, -1 * (ve(t, r) - r));
        })(o, r)));
      let a = "";
      return (
        s.forEach((e) => {
          const t = (function (e) {
            if (be[e]) return be[e];
            let t;
            switch (e) {
              case "G":
              case "GG":
              case "GGG":
                t = ge(ce.Eras, j.Abbreviated);
                break;
              case "GGGG":
                t = ge(ce.Eras, j.Wide);
                break;
              case "GGGGG":
                t = ge(ce.Eras, j.Narrow);
                break;
              case "y":
                t = pe(ae.FullYear, 1, 0, !1, !0);
                break;
              case "yy":
                t = pe(ae.FullYear, 2, 0, !0, !0);
                break;
              case "yyy":
                t = pe(ae.FullYear, 3, 0, !1, !0);
                break;
              case "yyyy":
                t = pe(ae.FullYear, 4, 0, !1, !0);
                break;
              case "M":
              case "L":
                t = pe(ae.Month, 1, 1);
                break;
              case "MM":
              case "LL":
                t = pe(ae.Month, 2, 1);
                break;
              case "MMM":
                t = ge(ce.Months, j.Abbreviated);
                break;
              case "MMMM":
                t = ge(ce.Months, j.Wide);
                break;
              case "MMMMM":
                t = ge(ce.Months, j.Narrow);
                break;
              case "LLL":
                t = ge(ce.Months, j.Abbreviated, A.Standalone);
                break;
              case "LLLL":
                t = ge(ce.Months, j.Wide, A.Standalone);
                break;
              case "LLLLL":
                t = ge(ce.Months, j.Narrow, A.Standalone);
                break;
              case "w":
                t = ye(1);
                break;
              case "ww":
                t = ye(2);
                break;
              case "W":
                t = ye(1, !0);
                break;
              case "d":
                t = pe(ae.Date, 1);
                break;
              case "dd":
                t = pe(ae.Date, 2);
                break;
              case "E":
              case "EE":
              case "EEE":
                t = ge(ce.Days, j.Abbreviated);
                break;
              case "EEEE":
                t = ge(ce.Days, j.Wide);
                break;
              case "EEEEE":
                t = ge(ce.Days, j.Narrow);
                break;
              case "EEEEEE":
                t = ge(ce.Days, j.Short);
                break;
              case "a":
              case "aa":
              case "aaa":
                t = ge(ce.DayPeriods, j.Abbreviated);
                break;
              case "aaaa":
                t = ge(ce.DayPeriods, j.Wide);
                break;
              case "aaaaa":
                t = ge(ce.DayPeriods, j.Narrow);
                break;
              case "b":
              case "bb":
              case "bbb":
                t = ge(ce.DayPeriods, j.Abbreviated, A.Standalone, !0);
                break;
              case "bbbb":
                t = ge(ce.DayPeriods, j.Wide, A.Standalone, !0);
                break;
              case "bbbbb":
                t = ge(ce.DayPeriods, j.Narrow, A.Standalone, !0);
                break;
              case "B":
              case "BB":
              case "BBB":
                t = ge(ce.DayPeriods, j.Abbreviated, A.Format, !0);
                break;
              case "BBBB":
                t = ge(ce.DayPeriods, j.Wide, A.Format, !0);
                break;
              case "BBBBB":
                t = ge(ce.DayPeriods, j.Narrow, A.Format, !0);
                break;
              case "h":
                t = pe(ae.Hours, 1, -12);
                break;
              case "hh":
                t = pe(ae.Hours, 2, -12);
                break;
              case "H":
                t = pe(ae.Hours, 1);
                break;
              case "HH":
                t = pe(ae.Hours, 2);
                break;
              case "m":
                t = pe(ae.Minutes, 1);
                break;
              case "mm":
                t = pe(ae.Minutes, 2);
                break;
              case "s":
                t = pe(ae.Seconds, 1);
                break;
              case "ss":
                t = pe(ae.Seconds, 2);
                break;
              case "S":
                t = pe(ae.FractionalSeconds, 1);
                break;
              case "SS":
                t = pe(ae.FractionalSeconds, 2);
                break;
              case "SSS":
                t = pe(ae.FractionalSeconds, 3);
                break;
              case "Z":
              case "ZZ":
              case "ZZZ":
                t = me(ue.Short);
                break;
              case "ZZZZZ":
                t = me(ue.Extended);
                break;
              case "O":
              case "OO":
              case "OOO":
              case "z":
              case "zz":
              case "zzz":
                t = me(ue.ShortGMT);
                break;
              case "OOOO":
              case "ZZZZ":
              case "zzzz":
                t = me(ue.Long);
                break;
              default:
                return null;
            }
            return (be[e] = t), t;
          })(e);
          a += t
            ? t(o, n, u)
            : "''" === e
            ? "'"
            : e.replace(/(^'|'$)/g, "").replace(/''/g, "'");
        }),
        a
      );
    }
    function de(e, t) {
      const n = F(e);
      if (((ie[n] = ie[n] || {}), ie[n][t])) return ie[n][t];
      let r = "";
      switch (t) {
        case "shortDate":
          r = B(e, k.Short);
          break;
        case "mediumDate":
          r = B(e, k.Medium);
          break;
        case "longDate":
          r = B(e, k.Long);
          break;
        case "fullDate":
          r = B(e, k.Full);
          break;
        case "shortTime":
          r = H(e, k.Short);
          break;
        case "mediumTime":
          r = H(e, k.Medium);
          break;
        case "longTime":
          r = H(e, k.Long);
          break;
        case "fullTime":
          r = H(e, k.Full);
          break;
        case "short":
          const t = de(e, "shortTime"),
            n = de(e, "shortDate");
          r = fe($(e, k.Short), [t, n]);
          break;
        case "medium":
          const o = de(e, "mediumTime"),
            i = de(e, "mediumDate");
          r = fe($(e, k.Medium), [o, i]);
          break;
        case "long":
          const s = de(e, "longTime"),
            u = de(e, "longDate");
          r = fe($(e, k.Long), [s, u]);
          break;
        case "full":
          const a = de(e, "fullTime"),
            c = de(e, "fullDate");
          r = fe($(e, k.Full), [a, c]);
      }
      return r && (ie[n][t] = r), r;
    }
    function fe(e, t) {
      return (
        t &&
          (e = e.replace(/\{([^}]+)}/g, function (e, n) {
            return null != t && n in t ? t[n] : e;
          })),
        e
      );
    }
    function he(e, t, n = "-", r, o) {
      let i = "";
      (e < 0 || (o && e <= 0)) && (o ? (e = 1 - e) : ((e = -e), (i = n)));
      let s = String(e);
      for (; s.length < t; ) s = "0" + s;
      return r && (s = s.substr(s.length - t)), i + s;
    }
    function pe(e, t, n = 0, r = !1, o = !1) {
      return function (i, s) {
        let u = (function (e, t) {
          switch (e) {
            case ae.FullYear:
              return t.getFullYear();
            case ae.Month:
              return t.getMonth();
            case ae.Date:
              return t.getDate();
            case ae.Hours:
              return t.getHours();
            case ae.Minutes:
              return t.getMinutes();
            case ae.Seconds:
              return t.getSeconds();
            case ae.FractionalSeconds:
              return t.getMilliseconds();
            case ae.Day:
              return t.getDay();
            default:
              throw new Error(`Unknown DateType value "${e}".`);
          }
        })(e, i);
        if (((n > 0 || u > -n) && (u += n), e === ae.Hours))
          0 === u && -12 === n && (u = 12);
        else if (e === ae.FractionalSeconds)
          return (a = t), he(u, 3).substr(0, a);
        var a;
        const c = z(s, T.MinusSign);
        return he(u, t, c, r, o);
      };
    }
    function ge(e, t, n = A.Format, r = !1) {
      return function (o, i) {
        return (function (e, t, n, r, o, i) {
          switch (n) {
            case ce.Months:
              return M(t, o, r)[e.getMonth()];
            case ce.Days:
              return N(t, o, r)[e.getDay()];
            case ce.DayPeriods:
              const s = e.getHours(),
                u = e.getMinutes();
              if (i) {
                const e = Y(t),
                  n = J(t, o, r),
                  i = e.findIndex((e) => {
                    if (Array.isArray(e)) {
                      const [t, n] = e,
                        r = s >= t.hours && u >= t.minutes,
                        o = s < n.hours || (s === n.hours && u < n.minutes);
                      if (t.hours < n.hours) {
                        if (r && o) return !0;
                      } else if (r || o) return !0;
                    } else if (e.hours === s && e.minutes === u) return !0;
                    return !1;
                  });
                if (-1 !== i) return n[i];
              }
              return P(t, o, r)[s < 12 ? 0 : 1];
            case ce.Eras:
              return L(t, r)[e.getFullYear() <= 0 ? 0 : 1];
            default:
              throw new Error("unexpected translation type " + n);
          }
        })(o, i, e, t, n, r);
      };
    }
    function me(e) {
      return function (t, n, r) {
        const o = -1 * r,
          i = z(n, T.MinusSign),
          s = o > 0 ? Math.floor(o / 60) : Math.ceil(o / 60);
        switch (e) {
          case ue.Short:
            return (
              (o >= 0 ? "+" : "") + he(s, 2, i) + he(Math.abs(o % 60), 2, i)
            );
          case ue.ShortGMT:
            return "GMT" + (o >= 0 ? "+" : "") + he(s, 1, i);
          case ue.Long:
            return (
              "GMT" +
              (o >= 0 ? "+" : "") +
              he(s, 2, i) +
              ":" +
              he(Math.abs(o % 60), 2, i)
            );
          case ue.Extended:
            return 0 === r
              ? "Z"
              : (o >= 0 ? "+" : "") +
                  he(s, 2, i) +
                  ":" +
                  he(Math.abs(o % 60), 2, i);
          default:
            throw new Error(`Unknown zone width "${e}"`);
        }
      };
    }
    function ye(e, t = !1) {
      return function (n, r) {
        let o;
        if (t) {
          const e = new Date(n.getFullYear(), n.getMonth(), 1).getDay() - 1,
            t = n.getDate();
          o = 1 + Math.floor((t + e) / 7);
        } else {
          const e =
              ((i = n),
              new Date(
                i.getFullYear(),
                i.getMonth(),
                i.getDate() + (4 - i.getDay())
              )),
            t = (function (e) {
              const t = new Date(e, 0, 1).getDay();
              return new Date(e, 0, 1 + (t <= 4 ? 4 : 11) - t);
            })(e.getFullYear()),
            r = e.getTime() - t.getTime();
          o = 1 + Math.round(r / 6048e5);
        }
        var i;
        return he(o, e, z(r, T.MinusSign));
      };
    }
    const be = {};
    function ve(e, t) {
      e = e.replace(/:/g, "");
      const n = Date.parse("Jan 01, 1970 00:00:00 " + e) / 6e4;
      return isNaN(n) ? t : n;
    }
    function _e(e) {
      return e instanceof Date && !isNaN(e.valueOf());
    }
    const we = /^(\d+)?\.((\d+)(-(\d+))?)?$/,
      Ce = ".",
      De = "0";
    function Ee(e, t, n, r, o, i, s = !1) {
      let u = "",
        a = !1;
      if (isFinite(e)) {
        let c = (function (e) {
          let t,
            n,
            r,
            o,
            i,
            s = Math.abs(e) + "",
            u = 0;
          for (
            (n = s.indexOf(Ce)) > -1 && (s = s.replace(Ce, "")),
              (r = s.search(/e/i)) > 0
                ? (n < 0 && (n = r),
                  (n += +s.slice(r + 1)),
                  (s = s.substring(0, r)))
                : n < 0 && (n = s.length),
              r = 0;
            s.charAt(r) === De;
            r++
          );
          if (r === (i = s.length)) (t = [0]), (n = 1);
          else {
            for (i--; s.charAt(i) === De; ) i--;
            for (n -= r, t = [], o = 0; r <= i; r++, o++)
              t[o] = Number(s.charAt(r));
          }
          return (
            n > 22 && ((t = t.splice(0, 21)), (u = n - 1), (n = 1)),
            { digits: t, exponent: u, integerLen: n }
          );
        })(e);
        s &&
          (c = (function (e) {
            if (0 === e.digits[0]) return e;
            const t = e.digits.length - e.integerLen;
            return (
              e.exponent
                ? (e.exponent += 2)
                : (0 === t ? e.digits.push(0, 0) : 1 === t && e.digits.push(0),
                  (e.integerLen += 2)),
              e
            );
          })(c));
        let l = t.minInt,
          d = t.minFrac,
          f = t.maxFrac;
        if (i) {
          const e = i.match(we);
          if (null === e) throw new Error(i + " is not a valid digit info");
          const t = e[1],
            n = e[3],
            r = e[5];
          null != t && (l = Ae(t)),
            null != n && (d = Ae(n)),
            null != r ? (f = Ae(r)) : null != n && d > f && (f = d);
        }
        !(function (e, t, n) {
          if (t > n)
            throw new Error(
              `The minimum number of digits after fraction (${t}) is higher than the maximum (${n}).`
            );
          let r = e.digits,
            o = r.length - e.integerLen;
          const i = Math.min(Math.max(t, o), n);
          let s = i + e.integerLen,
            u = r[s];
          if (s > 0) {
            r.splice(Math.max(e.integerLen, s));
            for (let e = s; e < r.length; e++) r[e] = 0;
          } else {
            (o = Math.max(0, o)),
              (e.integerLen = 1),
              (r.length = Math.max(1, (s = i + 1))),
              (r[0] = 0);
            for (let e = 1; e < s; e++) r[e] = 0;
          }
          if (u >= 5)
            if (s - 1 < 0) {
              for (let t = 0; t > s; t--) r.unshift(0), e.integerLen++;
              r.unshift(1), e.integerLen++;
            } else r[s - 1]++;
          for (; o < Math.max(0, i); o++) r.push(0);
          let a = 0 !== i;
          const c = t + e.integerLen,
            l = r.reduceRight(function (e, t, n, r) {
              return (
                (r[n] = (t += e) < 10 ? t : t - 10),
                a && (0 === r[n] && n >= c ? r.pop() : (a = !1)),
                t >= 10 ? 1 : 0
              );
            }, 0);
          l && (r.unshift(l), e.integerLen++);
        })(c, d, f);
        let h = c.digits,
          p = c.integerLen;
        const g = c.exponent;
        let m = [];
        for (a = h.every((e) => !e); p < l; p++) h.unshift(0);
        for (; p < 0; p++) h.unshift(0);
        p > 0 ? (m = h.splice(p, h.length)) : ((m = h), (h = [0]));
        const y = [];
        for (
          h.length >= t.lgSize &&
          y.unshift(h.splice(-t.lgSize, h.length).join(""));
          h.length > t.gSize;

        )
          y.unshift(h.splice(-t.gSize, h.length).join(""));
        h.length && y.unshift(h.join("")),
          (u = y.join(z(n, r))),
          m.length && (u += z(n, o) + m.join("")),
          g && (u += z(n, T.Exponential) + "+" + g);
      } else u = z(n, T.Infinity);
      return (
        (u = e < 0 && !a ? t.negPre + u + t.negSuf : t.posPre + u + t.posSuf), u
      );
    }
    function Se(e, t, n, r, o) {
      const i = Ie(q(t, x.Currency), z(t, T.MinusSign));
      return (
        (i.minFrac = re(r)),
        (i.maxFrac = i.minFrac),
        Ee(e, i, t, T.CurrencyGroup, T.CurrencyDecimal, o)
          .replace("\xa4", n)
          .replace("\xa4", "")
          .trim()
      );
    }
    function Oe(e, t, n) {
      return Ee(
        e,
        Ie(q(t, x.Percent), z(t, T.MinusSign)),
        t,
        T.Group,
        T.Decimal,
        n,
        !0
      ).replace(new RegExp("%", "g"), z(t, T.PercentSign));
    }
    function xe(e, t, n) {
      return Ee(
        e,
        Ie(q(t, x.Decimal), z(t, T.MinusSign)),
        t,
        T.Group,
        T.Decimal,
        n
      );
    }
    function Ie(e, t = "-") {
      const n = {
          minInt: 1,
          minFrac: 0,
          maxFrac: 0,
          posPre: "",
          posSuf: "",
          negPre: "",
          negSuf: "",
          gSize: 0,
          lgSize: 0,
        },
        r = e.split(";"),
        o = r[0],
        i = r[1],
        s =
          -1 !== o.indexOf(Ce)
            ? o.split(Ce)
            : [
                o.substring(0, o.lastIndexOf(De) + 1),
                o.substring(o.lastIndexOf(De) + 1),
              ],
        u = s[0],
        a = s[1] || "";
      n.posPre = u.substr(0, u.indexOf("#"));
      for (let l = 0; l < a.length; l++) {
        const e = a.charAt(l);
        e === De
          ? (n.minFrac = n.maxFrac = l + 1)
          : "#" === e
          ? (n.maxFrac = l + 1)
          : (n.posSuf += e);
      }
      const c = u.split(",");
      if (
        ((n.gSize = c[1] ? c[1].length : 0),
        (n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0),
        i)
      ) {
        const e = o.length - n.posPre.length - n.posSuf.length,
          t = i.indexOf("#");
        (n.negPre = i.substr(0, t).replace(/'/g, "")),
          (n.negSuf = i.substr(t + e).replace(/'/g, ""));
      } else (n.negPre = t + n.posPre), (n.negSuf = n.posSuf);
      return n;
    }
    function Ae(e) {
      const t = parseInt(e);
      if (isNaN(t))
        throw new Error("Invalid integer literal when parsing " + e);
      return t;
    }
    class je {}
    function ke(e, t, n, r) {
      let o = "=" + e;
      if (t.indexOf(o) > -1) return o;
      if (((o = n.getPluralCategory(e, r)), t.indexOf(o) > -1)) return o;
      if (t.indexOf("other") > -1) return "other";
      throw new Error(`No plural message found for value "${e}"`);
    }
    let Te = (() => {
      class e extends je {
        constructor(e) {
          super(), (this.locale = e);
        }
        getPluralCategory(e, t) {
          switch (Z(t || this.locale)(e)) {
            case I.Zero:
              return "zero";
            case I.One:
              return "one";
            case I.Two:
              return "two";
            case I.Few:
              return "few";
            case I.Many:
              return "many";
            default:
              return "other";
          }
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(r["\u0275\u0275inject"](r.LOCALE_ID));
        }),
        (e.ɵprov = r["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    function Re(e, t, n) {
      return Object(r["\u0275registerLocaleData"])(e, t, n);
    }
    function Fe(e, t) {
      t = encodeURIComponent(t);
      for (const n of e.split(";")) {
        const e = n.indexOf("="),
          [r, o] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
        if (r.trim() === t) return decodeURIComponent(o);
      }
      return null;
    }
    let Pe = (() => {
        class e {
          constructor(e, t, n, r) {
            (this._iterableDiffers = e),
              (this._keyValueDiffers = t),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(e) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof e ? e.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(e) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof e ? e.split(/\s+/) : e),
              this._rawClass &&
                (Object(r["\u0275isListLikeIterable"])(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const e = this._iterableDiffer.diff(this._rawClass);
              e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
              const e = this._keyValueDiffer.diff(this._rawClass);
              e && this._applyKeyValueChanges(e);
            }
          }
          _applyKeyValueChanges(e) {
            e.forEachAddedItem((e) => this._toggleClass(e.key, e.currentValue)),
              e.forEachChangedItem((e) =>
                this._toggleClass(e.key, e.currentValue)
              ),
              e.forEachRemovedItem((e) => {
                e.previousValue && this._toggleClass(e.key, !1);
              });
          }
          _applyIterableChanges(e) {
            e.forEachAddedItem((e) => {
              if ("string" != typeof e.item)
                throw new Error(
                  "NgClass can only toggle CSS classes expressed as strings, got " +
                    Object(r["\u0275stringify"])(e.item)
                );
              this._toggleClass(e.item, !0);
            }),
              e.forEachRemovedItem((e) => this._toggleClass(e.item, !1));
          }
          _applyClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !0))
                : Object.keys(e).forEach((t) => this._toggleClass(t, !!e[t])));
          }
          _removeClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !1))
                : Object.keys(e).forEach((e) => this._toggleClass(e, !1)));
          }
          _toggleClass(e, t) {
            (e = e.trim()) &&
              e.split(/\s+/g).forEach((e) => {
                t
                  ? this._renderer.addClass(this._ngEl.nativeElement, e)
                  : this._renderer.removeClass(this._ngEl.nativeElement, e);
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.IterableDiffers),
              r["\u0275\u0275directiveInject"](r.KeyValueDiffers),
              r["\u0275\u0275directiveInject"](r.ElementRef),
              r["\u0275\u0275directiveInject"](r.Renderer2)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          e
        );
      })(),
      Ne = (() => {
        class e {
          constructor(e) {
            (this._viewContainerRef = e),
              (this._componentRef = null),
              (this._moduleRef = null);
          }
          ngOnChanges(e) {
            if (
              (this._viewContainerRef.clear(),
              (this._componentRef = null),
              this.ngComponentOutlet)
            ) {
              const t =
                this.ngComponentOutletInjector ||
                this._viewContainerRef.parentInjector;
              if (e.ngComponentOutletNgModuleFactory)
                if (
                  (this._moduleRef && this._moduleRef.destroy(),
                  this.ngComponentOutletNgModuleFactory)
                ) {
                  const e = t.get(r.NgModuleRef);
                  this._moduleRef = this.ngComponentOutletNgModuleFactory.create(
                    e.injector
                  );
                } else this._moduleRef = null;
              const n = (this._moduleRef
                ? this._moduleRef.componentFactoryResolver
                : t.get(r.ComponentFactoryResolver)
              ).resolveComponentFactory(this.ngComponentOutlet);
              this._componentRef = this._viewContainerRef.createComponent(
                n,
                this._viewContainerRef.length,
                t,
                this.ngComponentOutletContent
              );
            }
          }
          ngOnDestroy() {
            this._moduleRef && this._moduleRef.destroy();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.ViewContainerRef)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngComponentOutlet", ""]],
            inputs: {
              ngComponentOutlet: "ngComponentOutlet",
              ngComponentOutletInjector: "ngComponentOutletInjector",
              ngComponentOutletContent: "ngComponentOutletContent",
              ngComponentOutletNgModuleFactory:
                "ngComponentOutletNgModuleFactory",
            },
            features: [r["\u0275\u0275NgOnChangesFeature"]],
          })),
          e
        );
      })();
    class Me {
      constructor(e, t, n, r) {
        (this.$implicit = e),
          (this.ngForOf = t),
          (this.index = n),
          (this.count = r);
      }
      get first() {
        return 0 === this.index;
      }
      get last() {
        return this.index === this.count - 1;
      }
      get even() {
        return this.index % 2 == 0;
      }
      get odd() {
        return !this.even;
      }
    }
    let Le = (() => {
      class e {
        constructor(e, t, n) {
          (this._viewContainer = e),
            (this._template = t),
            (this._differs = n),
            (this._ngForOf = null),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(e) {
          (this._ngForOf = e), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(e) {
          Object(r.isDevMode)() &&
            null != e &&
            "function" != typeof e &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(
                e
              )}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`
            ),
            (this._trackByFn = e);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(e) {
          e && (this._template = e);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (t) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((e = n), e.name || typeof e)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var e;
          if (this._differ) {
            const e = this._differ.diff(this._ngForOf);
            e && this._applyChanges(e);
          }
        }
        _applyChanges(e) {
          const t = [];
          e.forEachOperation((e, n, r) => {
            if (null == e.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new Me(null, this._ngForOf, -1, -1),
                  null === r ? void 0 : r
                ),
                o = new Ve(e, n);
              t.push(o);
            } else if (null == r)
              this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const o = this._viewContainer.get(n);
              this._viewContainer.move(o, r);
              const i = new Ve(e, o);
              t.push(i);
            }
          });
          for (let n = 0; n < t.length; n++)
            this._perViewChange(t[n].view, t[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const e = this._viewContainer.get(n);
            (e.context.index = n),
              (e.context.count = r),
              (e.context.ngForOf = this._ngForOf);
          }
          e.forEachIdentityChange((e) => {
            this._viewContainer.get(e.currentIndex).context.$implicit = e.item;
          });
        }
        _perViewChange(e, t) {
          e.context.$implicit = t.item;
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(
            r["\u0275\u0275directiveInject"](r.ViewContainerRef),
            r["\u0275\u0275directiveInject"](r.TemplateRef),
            r["\u0275\u0275directiveInject"](r.IterableDiffers)
          );
        }),
        (e.ɵdir = r["\u0275\u0275defineDirective"]({
          type: e,
          selectors: [["", "ngFor", "", "ngForOf", ""]],
          inputs: {
            ngForOf: "ngForOf",
            ngForTrackBy: "ngForTrackBy",
            ngForTemplate: "ngForTemplate",
          },
        })),
        e
      );
    })();
    class Ve {
      constructor(e, t) {
        (this.record = e), (this.view = t);
      }
    }
    let Ue = (() => {
      class e {
        constructor(e, t) {
          (this._viewContainer = e),
            (this._context = new Be()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = t);
        }
        set ngIf(e) {
          (this._context.$implicit = this._context.ngIf = e),
            this._updateView();
        }
        set ngIfThen(e) {
          He("ngIfThen", e),
            (this._thenTemplateRef = e),
            (this._thenViewRef = null),
            this._updateView();
        }
        set ngIfElse(e) {
          He("ngIfElse", e),
            (this._elseTemplateRef = e),
            (this._elseViewRef = null),
            this._updateView();
        }
        _updateView() {
          this._context.$implicit
            ? this._thenViewRef ||
              (this._viewContainer.clear(),
              (this._elseViewRef = null),
              this._thenTemplateRef &&
                (this._thenViewRef = this._viewContainer.createEmbeddedView(
                  this._thenTemplateRef,
                  this._context
                )))
            : this._elseViewRef ||
              (this._viewContainer.clear(),
              (this._thenViewRef = null),
              this._elseTemplateRef &&
                (this._elseViewRef = this._viewContainer.createEmbeddedView(
                  this._elseTemplateRef,
                  this._context
                )));
        }
        static ngTemplateContextGuard(e, t) {
          return !0;
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(
            r["\u0275\u0275directiveInject"](r.ViewContainerRef),
            r["\u0275\u0275directiveInject"](r.TemplateRef)
          );
        }),
        (e.ɵdir = r["\u0275\u0275defineDirective"]({
          type: e,
          selectors: [["", "ngIf", ""]],
          inputs: { ngIf: "ngIf", ngIfThen: "ngIfThen", ngIfElse: "ngIfElse" },
        })),
        e
      );
    })();
    class Be {
      constructor() {
        (this.$implicit = null), (this.ngIf = null);
      }
    }
    function He(e, t) {
      if (t && !t.createEmbeddedView)
        throw new Error(
          `${e} must be a TemplateRef, but received '${Object(
            r["\u0275stringify"]
          )(t)}'.`
        );
    }
    class $e {
      constructor(e, t) {
        (this._viewContainerRef = e),
          (this._templateRef = t),
          (this._created = !1);
      }
      create() {
        (this._created = !0),
          this._viewContainerRef.createEmbeddedView(this._templateRef);
      }
      destroy() {
        (this._created = !1), this._viewContainerRef.clear();
      }
      enforceState(e) {
        e && !this._created
          ? this.create()
          : !e && this._created && this.destroy();
      }
    }
    let ze = (() => {
        class e {
          constructor() {
            (this._defaultUsed = !1),
              (this._caseCount = 0),
              (this._lastCaseCheckIndex = 0),
              (this._lastCasesMatched = !1);
          }
          set ngSwitch(e) {
            (this._ngSwitch = e),
              0 === this._caseCount && this._updateDefaultCases(!0);
          }
          _addCase() {
            return this._caseCount++;
          }
          _addDefault(e) {
            this._defaultViews || (this._defaultViews = []),
              this._defaultViews.push(e);
          }
          _matchCase(e) {
            const t = e == this._ngSwitch;
            return (
              (this._lastCasesMatched = this._lastCasesMatched || t),
              this._lastCaseCheckIndex++,
              this._lastCaseCheckIndex === this._caseCount &&
                (this._updateDefaultCases(!this._lastCasesMatched),
                (this._lastCaseCheckIndex = 0),
                (this._lastCasesMatched = !1)),
              t
            );
          }
          _updateDefaultCases(e) {
            if (this._defaultViews && e !== this._defaultUsed) {
              this._defaultUsed = e;
              for (let t = 0; t < this._defaultViews.length; t++)
                this._defaultViews[t].enforceState(e);
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngSwitch", ""]],
            inputs: { ngSwitch: "ngSwitch" },
          })),
          e
        );
      })(),
      qe = (() => {
        class e {
          constructor(e, t, n) {
            (this.ngSwitch = n), n._addCase(), (this._view = new $e(e, t));
          }
          ngDoCheck() {
            this._view.enforceState(
              this.ngSwitch._matchCase(this.ngSwitchCase)
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.ViewContainerRef),
              r["\u0275\u0275directiveInject"](r.TemplateRef),
              r["\u0275\u0275directiveInject"](ze, 1)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngSwitchCase", ""]],
            inputs: { ngSwitchCase: "ngSwitchCase" },
          })),
          e
        );
      })(),
      We = (() => {
        class e {
          constructor(e, t, n) {
            n._addDefault(new $e(e, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.ViewContainerRef),
              r["\u0275\u0275directiveInject"](r.TemplateRef),
              r["\u0275\u0275directiveInject"](ze, 1)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngSwitchDefault", ""]],
          })),
          e
        );
      })(),
      Qe = (() => {
        class e {
          constructor(e) {
            (this._localization = e), (this._caseViews = {});
          }
          set ngPlural(e) {
            (this._switchValue = e), this._updateView();
          }
          addCase(e, t) {
            this._caseViews[e] = t;
          }
          _updateView() {
            this._clearViews();
            const e = Object.keys(this._caseViews),
              t = ke(this._switchValue, e, this._localization);
            this._activateView(this._caseViews[t]);
          }
          _clearViews() {
            this._activeView && this._activeView.destroy();
          }
          _activateView(e) {
            e && ((this._activeView = e), this._activeView.create());
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275directiveInject"](je));
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngPlural", ""]],
            inputs: { ngPlural: "ngPlural" },
          })),
          e
        );
      })(),
      Ge = (() => {
        class e {
          constructor(e, t, n, r) {
            this.value = e;
            const o = !isNaN(Number(e));
            r.addCase(o ? "=" + e : e, new $e(n, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275injectAttribute"]("ngPluralCase"),
              r["\u0275\u0275directiveInject"](r.TemplateRef),
              r["\u0275\u0275directiveInject"](r.ViewContainerRef),
              r["\u0275\u0275directiveInject"](Qe, 1)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngPluralCase", ""]],
          })),
          e
        );
      })(),
      Ze = (() => {
        class e {
          constructor(e, t, n) {
            (this._ngEl = e),
              (this._differs = t),
              (this._renderer = n),
              (this._ngStyle = null),
              (this._differ = null);
          }
          set ngStyle(e) {
            (this._ngStyle = e),
              !this._differ &&
                e &&
                (this._differ = this._differs.find(e).create());
          }
          ngDoCheck() {
            if (this._differ) {
              const e = this._differ.diff(this._ngStyle);
              e && this._applyChanges(e);
            }
          }
          _setStyle(e, t) {
            const [n, r] = e.split(".");
            null != (t = null != t && r ? `${t}${r}` : t)
              ? this._renderer.setStyle(this._ngEl.nativeElement, n, t)
              : this._renderer.removeStyle(this._ngEl.nativeElement, n);
          }
          _applyChanges(e) {
            e.forEachRemovedItem((e) => this._setStyle(e.key, null)),
              e.forEachAddedItem((e) => this._setStyle(e.key, e.currentValue)),
              e.forEachChangedItem((e) =>
                this._setStyle(e.key, e.currentValue)
              );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.ElementRef),
              r["\u0275\u0275directiveInject"](r.KeyValueDiffers),
              r["\u0275\u0275directiveInject"](r.Renderer2)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngStyle", ""]],
            inputs: { ngStyle: "ngStyle" },
          })),
          e
        );
      })(),
      Ke = (() => {
        class e {
          constructor(e) {
            (this._viewContainerRef = e),
              (this._viewRef = null),
              (this.ngTemplateOutletContext = null),
              (this.ngTemplateOutlet = null);
          }
          ngOnChanges(e) {
            if (this._shouldRecreateView(e)) {
              const e = this._viewContainerRef;
              this._viewRef && e.remove(e.indexOf(this._viewRef)),
                (this._viewRef = this.ngTemplateOutlet
                  ? e.createEmbeddedView(
                      this.ngTemplateOutlet,
                      this.ngTemplateOutletContext
                    )
                  : null);
            } else
              this._viewRef &&
                this.ngTemplateOutletContext &&
                this._updateExistingContext(this.ngTemplateOutletContext);
          }
          _shouldRecreateView(e) {
            const t = e.ngTemplateOutletContext;
            return (
              !!e.ngTemplateOutlet || (t && this._hasContextShapeChanged(t))
            );
          }
          _hasContextShapeChanged(e) {
            const t = Object.keys(e.previousValue || {}),
              n = Object.keys(e.currentValue || {});
            if (t.length === n.length) {
              for (let e of n) if (-1 === t.indexOf(e)) return !0;
              return !1;
            }
            return !0;
          }
          _updateExistingContext(e) {
            for (let t of Object.keys(e))
              this._viewRef.context[t] = this.ngTemplateOutletContext[t];
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.ViewContainerRef)
            );
          }),
          (e.ɵdir = r["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "ngTemplateOutlet", ""]],
            inputs: {
              ngTemplateOutletContext: "ngTemplateOutletContext",
              ngTemplateOutlet: "ngTemplateOutlet",
            },
            features: [r["\u0275\u0275NgOnChangesFeature"]],
          })),
          e
        );
      })();
    const Ye = [Pe, Ne, Le, Ue, Ke, Ze, ze, qe, We, Qe, Ge];
    function Je(e, t) {
      return Error(
        `InvalidPipeArgument: '${t}' for pipe '${Object(r["\u0275stringify"])(
          e
        )}'`
      );
    }
    class Xe {
      createSubscription(e, t) {
        return e.subscribe({
          next: t,
          error: (e) => {
            throw e;
          },
        });
      }
      dispose(e) {
        e.unsubscribe();
      }
      onDestroy(e) {
        e.unsubscribe();
      }
    }
    class et {
      createSubscription(e, t) {
        return e.then(t, (e) => {
          throw e;
        });
      }
      dispose(e) {}
      onDestroy(e) {}
    }
    const tt = new et(),
      nt = new Xe();
    let rt = (() => {
        class e {
          constructor(e) {
            (this._ref = e),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null),
              (this._strategy = null);
          }
          ngOnDestroy() {
            this._subscription && this._dispose();
          }
          transform(e) {
            return this._obj
              ? e !== this._obj
                ? (this._dispose(), this.transform(e))
                : this._latestValue
              : (e && this._subscribe(e), this._latestValue);
          }
          _subscribe(e) {
            (this._obj = e),
              (this._strategy = this._selectStrategy(e)),
              (this._subscription = this._strategy.createSubscription(e, (t) =>
                this._updateLatestValue(e, t)
              ));
          }
          _selectStrategy(t) {
            if (Object(r["\u0275isPromise"])(t)) return tt;
            if (Object(r["\u0275isObservable"])(t)) return nt;
            throw Je(e, t);
          }
          _dispose() {
            this._strategy.dispose(this._subscription),
              (this._latestValue = null),
              (this._subscription = null),
              (this._obj = null);
          }
          _updateLatestValue(e, t) {
            e === this._obj &&
              ((this._latestValue = t), this._ref.markForCheck());
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275injectPipeChangeDetectorRef"]());
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "async",
            type: e,
            pure: !1,
          })),
          e
        );
      })(),
      ot = (() => {
        class e {
          transform(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Je(e, t);
            return t.toLowerCase();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "lowercase",
            type: e,
            pure: !0,
          })),
          e
        );
      })();
    const it = /(?:[A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF40\uDF42-\uDF49\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D])\S*/g;
    let st = (() => {
        class e {
          transform(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Je(e, t);
            return t.replace(
              it,
              (e) => e[0].toUpperCase() + e.substr(1).toLowerCase()
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "titlecase",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      ut = (() => {
        class e {
          transform(t) {
            if (!t) return t;
            if ("string" != typeof t) throw Je(e, t);
            return t.toUpperCase();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "uppercase",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      at = (() => {
        class e {
          constructor(e) {
            this.locale = e;
          }
          transform(t, n = "mediumDate", r, o) {
            if (null == t || "" === t || t != t) return null;
            try {
              return le(t, n, o || this.locale, r);
            } catch (i) {
              throw Je(e, i.message);
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID));
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "date",
            type: e,
            pure: !0,
          })),
          e
        );
      })();
    const ct = /#/g;
    let lt = (() => {
        class e {
          constructor(e) {
            this._localization = e;
          }
          transform(t, n, r) {
            if (null == t) return "";
            if ("object" != typeof n || null === n) throw Je(e, n);
            return n[ke(t, Object.keys(n), this._localization, r)].replace(
              ct,
              t.toString()
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275directiveInject"](je));
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "i18nPlural",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      dt = (() => {
        class e {
          transform(t, n) {
            if (null == t) return "";
            if ("object" != typeof n || "string" != typeof t) throw Je(e, n);
            return n.hasOwnProperty(t)
              ? n[t]
              : n.hasOwnProperty("other")
              ? n.other
              : "";
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "i18nSelect",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      ft = (() => {
        class e {
          transform(e) {
            return JSON.stringify(e, null, 2);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "json",
            type: e,
            pure: !1,
          })),
          e
        );
      })(),
      ht = (() => {
        class e {
          constructor(e) {
            (this.differs = e), (this.keyValues = []);
          }
          transform(e, t = pt) {
            if (!e || (!(e instanceof Map) && "object" != typeof e))
              return null;
            this.differ || (this.differ = this.differs.find(e).create());
            const n = this.differ.diff(e);
            return (
              n &&
                ((this.keyValues = []),
                n.forEachItem((e) => {
                  this.keyValues.push({ key: e.key, value: e.currentValue });
                }),
                this.keyValues.sort(t)),
              this.keyValues
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.KeyValueDiffers)
            );
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "keyvalue",
            type: e,
            pure: !1,
          })),
          e
        );
      })();
    function pt(e, t) {
      const n = e.key,
        r = t.key;
      if (n === r) return 0;
      if (void 0 === n) return 1;
      if (void 0 === r) return -1;
      if (null === n) return 1;
      if (null === r) return -1;
      if ("string" == typeof n && "string" == typeof r) return n < r ? -1 : 1;
      if ("number" == typeof n && "number" == typeof r) return n - r;
      if ("boolean" == typeof n && "boolean" == typeof r) return n < r ? -1 : 1;
      const o = String(n),
        i = String(r);
      return o == i ? 0 : o < i ? -1 : 1;
    }
    let gt = (() => {
        class e {
          constructor(e) {
            this._locale = e;
          }
          transform(t, n, r) {
            if (bt(t)) return null;
            r = r || this._locale;
            try {
              return xe(vt(t), r, n);
            } catch (o) {
              throw Je(e, o.message);
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID));
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "number",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      mt = (() => {
        class e {
          constructor(e) {
            this._locale = e;
          }
          transform(t, n, r) {
            if (bt(t)) return null;
            r = r || this._locale;
            try {
              return Oe(vt(t), r, n);
            } catch (o) {
              throw Je(e, o.message);
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(r["\u0275\u0275directiveInject"](r.LOCALE_ID));
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "percent",
            type: e,
            pure: !0,
          })),
          e
        );
      })(),
      yt = (() => {
        class e {
          constructor(e, t = "USD") {
            (this._locale = e), (this._defaultCurrencyCode = t);
          }
          transform(t, n, r = "symbol", o, i) {
            if (bt(t)) return null;
            (i = i || this._locale),
              "boolean" == typeof r &&
                (console &&
                  console.warn &&
                  console.warn(
                    'Warning: the currency pipe has been changed in Angular v5. The symbolDisplay option (third parameter) is now a string instead of a boolean. The accepted values are "code", "symbol" or "symbol-narrow".'
                  ),
                (r = r ? "symbol" : "code"));
            let s = n || this._defaultCurrencyCode;
            "code" !== r &&
              (s =
                "symbol" === r || "symbol-narrow" === r
                  ? ne(s, "symbol" === r ? "wide" : "narrow", i)
                  : r);
            try {
              return Se(vt(t), i, s, n, o);
            } catch (u) {
              throw Je(e, u.message);
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              r["\u0275\u0275directiveInject"](r.LOCALE_ID),
              r["\u0275\u0275directiveInject"](r.DEFAULT_CURRENCY_CODE)
            );
          }),
          (e.ɵpipe = r["\u0275\u0275definePipe"]({
            name: "currency",
            type: e,
            pure: !0,
          })),
          e
        );
      })();
    function bt(e) {
      return null == e || "" === e || e != e;
    }
    function vt(e) {
      if ("string" == typeof e && !isNaN(Number(e) - parseFloat(e)))
        return Number(e);
      if ("number" != typeof e) throw new Error(e + " is not a number");
      return e;
    }
    let _t = (() => {
      class e {
        transform(t, n, r) {
          if (null == t) return t;
          if (!this.supports(t)) throw Je(e, t);
          return t.slice(n, r);
        }
        supports(e) {
          return "string" == typeof e || Array.isArray(e);
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵpipe = r["\u0275\u0275definePipe"]({
          name: "slice",
          type: e,
          pure: !1,
        })),
        e
      );
    })();
    const wt = [rt, ut, ot, ft, _t, gt, mt, st, yt, at, lt, dt, ht];
    let Ct = (() => {
      class e {}
      return (
        (e.ɵmod = r["\u0275\u0275defineNgModule"]({ type: e })),
        (e.ɵinj = r["\u0275\u0275defineInjector"]({
          factory: function (t) {
            return new (t || e)();
          },
          providers: [{ provide: je, useClass: Te }],
        })),
        e
      );
    })();
    const Dt = "browser",
      Et = "server",
      St = "browserWorkerApp",
      Ot = "browserWorkerUi";
    function xt(e) {
      return e === Dt;
    }
    function It(e) {
      return e === Et;
    }
    function At(e) {
      return e === St;
    }
    function jt(e) {
      return e === Ot;
    }
    const kt = new r.Version("10.1.4");
    let Tt = (() => {
      class e {}
      return (
        (e.ɵprov = Object(r["\u0275\u0275defineInjectable"])({
          token: e,
          providedIn: "root",
          factory: () =>
            new Rt(
              Object(r["\u0275\u0275inject"])(a),
              window,
              Object(r["\u0275\u0275inject"])(r.ErrorHandler)
            ),
        })),
        e
      );
    })();
    class Rt {
      constructor(e, t, n) {
        (this.document = e),
          (this.window = t),
          (this.errorHandler = n),
          (this.offset = () => [0, 0]);
      }
      setOffset(e) {
        this.offset = Array.isArray(e) ? () => e : e;
      }
      getScrollPosition() {
        return this.supportsScrolling()
          ? [this.window.scrollX, this.window.scrollY]
          : [0, 0];
      }
      scrollToPosition(e) {
        this.supportsScrolling() && this.window.scrollTo(e[0], e[1]);
      }
      scrollToAnchor(e) {
        if (this.supportsScrolling()) {
          const t =
            this.document.getElementById(e) ||
            this.document.getElementsByName(e)[0];
          t && this.scrollToElement(t);
        }
      }
      setHistoryScrollRestoration(e) {
        if (this.supportScrollRestoration()) {
          const t = this.window.history;
          t && t.scrollRestoration && (t.scrollRestoration = e);
        }
      }
      scrollToElement(e) {
        const t = e.getBoundingClientRect(),
          n = t.left + this.window.pageXOffset,
          r = t.top + this.window.pageYOffset,
          o = this.offset();
        this.window.scrollTo(n - o[0], r - o[1]);
      }
      supportScrollRestoration() {
        try {
          if (!this.window || !this.window.scrollTo) return !1;
          const e =
            Ft(this.window.history) ||
            Ft(Object.getPrototypeOf(this.window.history));
          return !(!e || (!e.writable && !e.set));
        } catch (e) {
          return !1;
        }
      }
      supportsScrolling() {
        try {
          return !!this.window.scrollTo;
        } catch (e) {
          return !1;
        }
      }
    }
    function Ft(e) {
      return Object.getOwnPropertyDescriptor(e, "scrollRestoration");
    }
    class Pt {
      setOffset(e) {}
      getScrollPosition() {
        return [0, 0];
      }
      scrollToPosition(e) {}
      scrollToAnchor(e) {}
      setHistoryScrollRestoration(e) {}
    }
  },
  pLZG: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "filter", function () {
        return o;
      });
    var r = n("7o/Q");
    function o(e, t) {
      return function (n) {
        return n.lift(new i(e, t));
      };
    }
    class i {
      constructor(e, t) {
        (this.predicate = e), (this.thisArg = t);
      }
      call(e, t) {
        return t.subscribe(new s(e, this.predicate, this.thisArg));
      }
    }
    class s extends r.Subscriber {
      constructor(e, t, n) {
        super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
      }
      _next(e) {
        let t;
        try {
          t = this.predicate.call(this.thisArg, e, this.count++);
        } catch (n) {
          return void this.destination.error(n);
        }
        t && this.destination.next(e);
      }
    }
  },
  pLzU: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "subscribeToIterable", function () {
        return o;
      });
    var r = n("Lhse");
    const o = (e) => (t) => {
      const n = e[r.iterator]();
      for (;;) {
        let e;
        try {
          e = n.next();
        } catch (o) {
          return t.error(o), t;
        }
        if (e.done) {
          t.complete();
          break;
        }
        if ((t.next(e.value), t.closed)) break;
      }
      return (
        "function" == typeof n.return &&
          t.add(() => {
            n.return && n.return();
          }),
        t
      );
    };
  },
  pjAE: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "UnsubscriptionError", function () {
        return r;
      });
    const r = (() => {
      function e(e) {
        return (
          Error.call(this),
          (this.message = e
            ? `${e.length} errors occurred during unsubscription:\n${e
                .map((e, t) => `${t + 1}) ${e.toString()}`)
                .join("\n  ")}`
            : ""),
          (this.name = "UnsubscriptionError"),
          (this.errors = e),
          this
        );
      }
      return (e.prototype = Object.create(Error.prototype)), e;
    })();
  },
  quSY: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "Subscription", function () {
        return u;
      });
    var r = n("DH7j"),
      o = n("XoHu"),
      i = n("n6bG"),
      s = n("pjAE");
    let u = (() => {
      class e {
        constructor(e) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
        }
        unsubscribe() {
          let t;
          if (this.closed) return;
          let {
            _parentOrParents: n,
            _ctorUnsubscribe: u,
            _unsubscribe: c,
            _subscriptions: l,
          } = this;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            n instanceof e)
          )
            n.remove(this);
          else if (null !== n)
            for (let e = 0; e < n.length; ++e) n[e].remove(this);
          if (Object(i.isFunction)(c)) {
            u && (this._unsubscribe = void 0);
            try {
              c.call(this);
            } catch (d) {
              t = d instanceof s.UnsubscriptionError ? a(d.errors) : [d];
            }
          }
          if (Object(r.isArray)(l)) {
            let e = -1,
              n = l.length;
            for (; ++e < n; ) {
              const n = l[e];
              if (Object(o.isObject)(n))
                try {
                  n.unsubscribe();
                } catch (d) {
                  (t = t || []),
                    d instanceof s.UnsubscriptionError
                      ? (t = t.concat(a(d.errors)))
                      : t.push(d);
                }
            }
          }
          if (t) throw new s.UnsubscriptionError(t);
        }
        add(t) {
          let n = t;
          if (!t) return e.EMPTY;
          switch (typeof t) {
            case "function":
              n = new e(t);
            case "object":
              if (n === this || n.closed || "function" != typeof n.unsubscribe)
                return n;
              if (this.closed) return n.unsubscribe(), n;
              if (!(n instanceof e)) {
                const t = n;
                (n = new e()), (n._subscriptions = [t]);
              }
              break;
            default:
              throw new Error(
                "unrecognized teardown " + t + " added to Subscription."
              );
          }
          let { _parentOrParents: r } = n;
          if (null === r) n._parentOrParents = this;
          else if (r instanceof e) {
            if (r === this) return n;
            n._parentOrParents = [r, this];
          } else {
            if (-1 !== r.indexOf(this)) return n;
            r.push(this);
          }
          const o = this._subscriptions;
          return null === o ? (this._subscriptions = [n]) : o.push(n), n;
        }
        remove(e) {
          const t = this._subscriptions;
          if (t) {
            const n = t.indexOf(e);
            -1 !== n && t.splice(n, 1);
          }
        }
      }
      var t;
      return (e.EMPTY = (((t = new e()).closed = !0), t)), e;
    })();
    function a(e) {
      return e.reduce(
        (e, t) => e.concat(t instanceof s.UnsubscriptionError ? t.errors : t),
        []
      );
    }
  },
  sVev: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "EmptyError", function () {
        return r;
      });
    const r = (() => {
      function e() {
        return (
          Error.call(this),
          (this.message = "no elements in sequence"),
          (this.name = "EmptyError"),
          this
        );
      }
      return (e.prototype = Object.create(Error.prototype)), e;
    })();
  },
  tyNb: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "ActivatedRoute", function () {
        return Ne;
      }),
      n.d(t, "ActivatedRouteSnapshot", function () {
        return Le;
      }),
      n.d(t, "ActivationEnd", function () {
        return q;
      }),
      n.d(t, "ActivationStart", function () {
        return z;
      }),
      n.d(t, "BaseRouteReuseStrategy", function () {
        return Ht;
      }),
      n.d(t, "ChildActivationEnd", function () {
        return $;
      }),
      n.d(t, "ChildActivationStart", function () {
        return H;
      }),
      n.d(t, "ChildrenOutletContexts", function () {
        return Jt;
      }),
      n.d(t, "DefaultUrlSerializer", function () {
        return pe;
      }),
      n.d(t, "GuardsCheckEnd", function () {
        return M;
      }),
      n.d(t, "GuardsCheckStart", function () {
        return N;
      }),
      n.d(t, "NavigationCancel", function () {
        return R;
      }),
      n.d(t, "NavigationEnd", function () {
        return T;
      }),
      n.d(t, "NavigationError", function () {
        return F;
      }),
      n.d(t, "NavigationStart", function () {
        return k;
      }),
      n.d(t, "NoPreloading", function () {
        return pn;
      }),
      n.d(t, "OutletContext", function () {
        return Yt;
      }),
      n.d(t, "PRIMARY_OUTLET", function () {
        return Q;
      }),
      n.d(t, "PreloadAllModules", function () {
        return hn;
      }),
      n.d(t, "PreloadingStrategy", function () {
        return fn;
      }),
      n.d(t, "ROUTER_CONFIGURATION", function () {
        return yn;
      }),
      n.d(t, "ROUTER_INITIALIZER", function () {
        return kn;
      }),
      n.d(t, "ROUTES", function () {
        return Zt;
      }),
      n.d(t, "ResolveEnd", function () {
        return V;
      }),
      n.d(t, "ResolveStart", function () {
        return L;
      }),
      n.d(t, "RouteConfigLoadEnd", function () {
        return B;
      }),
      n.d(t, "RouteConfigLoadStart", function () {
        return U;
      }),
      n.d(t, "RouteReuseStrategy", function () {
        return Bt;
      }),
      n.d(t, "Router", function () {
        return on;
      }),
      n.d(t, "RouterEvent", function () {
        return j;
      }),
      n.d(t, "RouterLink", function () {
        return sn;
      }),
      n.d(t, "RouterLinkActive", function () {
        return cn;
      }),
      n.d(t, "RouterLinkWithHref", function () {
        return un;
      }),
      n.d(t, "RouterModule", function () {
        return wn;
      }),
      n.d(t, "RouterOutlet", function () {
        return ln;
      }),
      n.d(t, "RouterPreloader", function () {
        return gn;
      }),
      n.d(t, "RouterState", function () {
        return Fe;
      }),
      n.d(t, "RouterStateSnapshot", function () {
        return Ve;
      }),
      n.d(t, "RoutesRecognized", function () {
        return P;
      }),
      n.d(t, "Scroll", function () {
        return W;
      }),
      n.d(t, "UrlHandlingStrategy", function () {
        return Xt;
      }),
      n.d(t, "UrlSegment", function () {
        return le;
      }),
      n.d(t, "UrlSegmentGroup", function () {
        return ce;
      }),
      n.d(t, "UrlSerializer", function () {
        return he;
      }),
      n.d(t, "UrlTree", function () {
        return ae;
      }),
      n.d(t, "VERSION", function () {
        return Rn;
      }),
      n.d(t, "convertToParamMap", function () {
        return Z;
      }),
      n.d(t, "provideRoutes", function () {
        return Sn;
      }),
      n.d(t, "\u0275EmptyOutletComponent", function () {
        return zt;
      }),
      n.d(t, "\u0275ROUTER_PROVIDERS", function () {
        return vn;
      }),
      n.d(t, "\u0275angular_packages_router_router_a", function () {
        return bn;
      }),
      n.d(t, "\u0275angular_packages_router_router_b", function () {
        return _n;
      }),
      n.d(t, "\u0275angular_packages_router_router_c", function () {
        return Cn;
      }),
      n.d(t, "\u0275angular_packages_router_router_d", function () {
        return Dn;
      }),
      n.d(t, "\u0275angular_packages_router_router_e", function () {
        return En;
      }),
      n.d(t, "\u0275angular_packages_router_router_f", function () {
        return On;
      }),
      n.d(t, "\u0275angular_packages_router_router_g", function () {
        return xn;
      }),
      n.d(t, "\u0275angular_packages_router_router_h", function () {
        return In;
      }),
      n.d(t, "\u0275angular_packages_router_router_i", function () {
        return An;
      }),
      n.d(t, "\u0275angular_packages_router_router_j", function () {
        return jn;
      }),
      n.d(t, "\u0275angular_packages_router_router_k", function () {
        return Tn;
      }),
      n.d(t, "\u0275angular_packages_router_router_l", function () {
        return zt;
      }),
      n.d(t, "\u0275angular_packages_router_router_m", function () {
        return Ae;
      }),
      n.d(t, "\u0275angular_packages_router_router_n", function () {
        return Te;
      }),
      n.d(t, "\u0275angular_packages_router_router_o", function () {
        return mn;
      }),
      n.d(t, "\u0275flatten", function () {
        return ee;
      });
    var r = n("ofXK"),
      o = n("fXoL"),
      i = n("LRne"),
      s = n("Cfvw"),
      u = n("2Vo4"),
      a = n("itXk"),
      c = n("HDdC"),
      l = n("sVev"),
      d = n("NXyV"),
      f = n("EY2u"),
      h = n("XNiG"),
      p = n("lJxs"),
      g = n("0EUg"),
      m = n("NJ9Y"),
      y = n("eIep"),
      b = n("IzEk"),
      v = n("JX91"),
      _ = n("Kqap"),
      w = n("pLZG"),
      C = n("JIr8"),
      D = n("bOdf"),
      E = n("SxV6"),
      S = n("5+tZ"),
      O = n("vkgz"),
      x = n("BFxc"),
      I = n("nYR2"),
      A = n("bHdf");
    class j {
      constructor(e, t) {
        (this.id = e), (this.url = t);
      }
    }
    class k extends j {
      constructor(e, t, n = "imperative", r = null) {
        super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
      }
      toString() {
        return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
      }
    }
    class T extends j {
      constructor(e, t, n) {
        super(e, t), (this.urlAfterRedirects = n);
      }
      toString() {
        return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
      }
    }
    class R extends j {
      constructor(e, t, n) {
        super(e, t), (this.reason = n);
      }
      toString() {
        return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
      }
    }
    class F extends j {
      constructor(e, t, n) {
        super(e, t), (this.error = n);
      }
      toString() {
        return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
      }
    }
    class P extends j {
      constructor(e, t, n, r) {
        super(e, t), (this.urlAfterRedirects = n), (this.state = r);
      }
      toString() {
        return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    }
    class N extends j {
      constructor(e, t, n, r) {
        super(e, t), (this.urlAfterRedirects = n), (this.state = r);
      }
      toString() {
        return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    }
    class M extends j {
      constructor(e, t, n, r, o) {
        super(e, t),
          (this.urlAfterRedirects = n),
          (this.state = r),
          (this.shouldActivate = o);
      }
      toString() {
        return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
      }
    }
    class L extends j {
      constructor(e, t, n, r) {
        super(e, t), (this.urlAfterRedirects = n), (this.state = r);
      }
      toString() {
        return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    }
    class V extends j {
      constructor(e, t, n, r) {
        super(e, t), (this.urlAfterRedirects = n), (this.state = r);
      }
      toString() {
        return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
      }
    }
    class U {
      constructor(e) {
        this.route = e;
      }
      toString() {
        return `RouteConfigLoadStart(path: ${this.route.path})`;
      }
    }
    class B {
      constructor(e) {
        this.route = e;
      }
      toString() {
        return `RouteConfigLoadEnd(path: ${this.route.path})`;
      }
    }
    class H {
      constructor(e) {
        this.snapshot = e;
      }
      toString() {
        return `ChildActivationStart(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    }
    class $ {
      constructor(e) {
        this.snapshot = e;
      }
      toString() {
        return `ChildActivationEnd(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    }
    class z {
      constructor(e) {
        this.snapshot = e;
      }
      toString() {
        return `ActivationStart(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    }
    class q {
      constructor(e) {
        this.snapshot = e;
      }
      toString() {
        return `ActivationEnd(path: '${
          (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
        }')`;
      }
    }
    class W {
      constructor(e, t, n) {
        (this.routerEvent = e), (this.position = t), (this.anchor = n);
      }
      toString() {
        return `Scroll(anchor: '${this.anchor}', position: '${
          this.position ? `${this.position[0]}, ${this.position[1]}` : null
        }')`;
      }
    }
    const Q = "primary";
    class G {
      constructor(e) {
        this.params = e || {};
      }
      has(e) {
        return Object.prototype.hasOwnProperty.call(this.params, e);
      }
      get(e) {
        if (this.has(e)) {
          const t = this.params[e];
          return Array.isArray(t) ? t[0] : t;
        }
        return null;
      }
      getAll(e) {
        if (this.has(e)) {
          const t = this.params[e];
          return Array.isArray(t) ? t : [t];
        }
        return [];
      }
      get keys() {
        return Object.keys(this.params);
      }
    }
    function Z(e) {
      return new G(e);
    }
    function K(e) {
      const t = Error("NavigationCancelingError: " + e);
      return (t.ngNavigationCancelingError = !0), t;
    }
    function Y(e, t, n) {
      const r = n.path.split("/");
      if (r.length > e.length) return null;
      if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
        return null;
      const o = {};
      for (let i = 0; i < r.length; i++) {
        const t = r[i],
          n = e[i];
        if (t.startsWith(":")) o[t.substring(1)] = n;
        else if (t !== n.path) return null;
      }
      return { consumed: e.slice(0, r.length), posParams: o };
    }
    function J(e, t) {
      const n = Object.keys(e),
        r = Object.keys(t);
      if (!n || !r || n.length != r.length) return !1;
      let o;
      for (let i = 0; i < n.length; i++)
        if (((o = n[i]), !X(e[o], t[o]))) return !1;
      return !0;
    }
    function X(e, t) {
      if (Array.isArray(e) && Array.isArray(t)) {
        if (e.length !== t.length) return !1;
        const n = [...e].sort(),
          r = [...t].sort();
        return n.every((e, t) => r[t] === e);
      }
      return e === t;
    }
    function ee(e) {
      return Array.prototype.concat.apply([], e);
    }
    function te(e) {
      return e.length > 0 ? e[e.length - 1] : null;
    }
    function ne(e, t) {
      for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
    }
    function re(e) {
      return Object(o["\u0275isObservable"])(e)
        ? e
        : Object(o["\u0275isPromise"])(e)
        ? Object(s.from)(Promise.resolve(e))
        : Object(i.of)(e);
    }
    function oe(e, t, n) {
      return n
        ? (function (e, t) {
            return J(e, t);
          })(e.queryParams, t.queryParams) && ie(e.root, t.root)
        : (function (e, t) {
            return (
              Object.keys(t).length <= Object.keys(e).length &&
              Object.keys(t).every((n) => X(e[n], t[n]))
            );
          })(e.queryParams, t.queryParams) && se(e.root, t.root);
    }
    function ie(e, t) {
      if (!de(e.segments, t.segments)) return !1;
      if (e.numberOfChildren !== t.numberOfChildren) return !1;
      for (const n in t.children) {
        if (!e.children[n]) return !1;
        if (!ie(e.children[n], t.children[n])) return !1;
      }
      return !0;
    }
    function se(e, t) {
      return ue(e, t, t.segments);
    }
    function ue(e, t, n) {
      if (e.segments.length > n.length)
        return !!de(e.segments.slice(0, n.length), n) && !t.hasChildren();
      if (e.segments.length === n.length) {
        if (!de(e.segments, n)) return !1;
        for (const n in t.children) {
          if (!e.children[n]) return !1;
          if (!se(e.children[n], t.children[n])) return !1;
        }
        return !0;
      }
      {
        const r = n.slice(0, e.segments.length),
          o = n.slice(e.segments.length);
        return (
          !!de(e.segments, r) && !!e.children[Q] && ue(e.children[Q], t, o)
        );
      }
    }
    class ae {
      constructor(e, t, n) {
        (this.root = e), (this.queryParams = t), (this.fragment = n);
      }
      get queryParamMap() {
        return (
          this._queryParamMap || (this._queryParamMap = Z(this.queryParams)),
          this._queryParamMap
        );
      }
      toString() {
        return ge.serialize(this);
      }
    }
    class ce {
      constructor(e, t) {
        (this.segments = e),
          (this.children = t),
          (this.parent = null),
          ne(t, (e, t) => (e.parent = this));
      }
      hasChildren() {
        return this.numberOfChildren > 0;
      }
      get numberOfChildren() {
        return Object.keys(this.children).length;
      }
      toString() {
        return me(this);
      }
    }
    class le {
      constructor(e, t) {
        (this.path = e), (this.parameters = t);
      }
      get parameterMap() {
        return (
          this._parameterMap || (this._parameterMap = Z(this.parameters)),
          this._parameterMap
        );
      }
      toString() {
        return De(this);
      }
    }
    function de(e, t) {
      return e.length === t.length && e.every((e, n) => e.path === t[n].path);
    }
    function fe(e, t) {
      let n = [];
      return (
        ne(e.children, (e, r) => {
          r === Q && (n = n.concat(t(e, r)));
        }),
        ne(e.children, (e, r) => {
          r !== Q && (n = n.concat(t(e, r)));
        }),
        n
      );
    }
    class he {}
    class pe {
      parse(e) {
        const t = new Ie(e);
        return new ae(
          t.parseRootSegment(),
          t.parseQueryParams(),
          t.parseFragment()
        );
      }
      serialize(e) {
        return `${"/" + ye(e.root, !0)}${(function (e) {
          const t = Object.keys(e).map((t) => {
            const n = e[t];
            return Array.isArray(n)
              ? n.map((e) => `${ve(t)}=${ve(e)}`).join("&")
              : `${ve(t)}=${ve(n)}`;
          });
          return t.length ? "?" + t.join("&") : "";
        })(e.queryParams)}${
          "string" == typeof e.fragment ? "#" + encodeURI(e.fragment) : ""
        }`;
      }
    }
    const ge = new pe();
    function me(e) {
      return e.segments.map((e) => De(e)).join("/");
    }
    function ye(e, t) {
      if (!e.hasChildren()) return me(e);
      if (t) {
        const t = e.children[Q] ? ye(e.children[Q], !1) : "",
          n = [];
        return (
          ne(e.children, (e, t) => {
            t !== Q && n.push(`${t}:${ye(e, !1)}`);
          }),
          n.length > 0 ? `${t}(${n.join("//")})` : t
        );
      }
      {
        const t = fe(e, (t, n) =>
          n === Q ? [ye(e.children[Q], !1)] : [`${n}:${ye(t, !1)}`]
        );
        return 1 === Object.keys(e.children).length && null != e.children[Q]
          ? `${me(e)}/${t[0]}`
          : `${me(e)}/(${t.join("//")})`;
      }
    }
    function be(e) {
      return encodeURIComponent(e)
        .replace(/%40/g, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",");
    }
    function ve(e) {
      return be(e).replace(/%3B/gi, ";");
    }
    function _e(e) {
      return be(e)
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/%26/gi, "&");
    }
    function we(e) {
      return decodeURIComponent(e);
    }
    function Ce(e) {
      return we(e.replace(/\+/g, "%20"));
    }
    function De(e) {
      return `${_e(e.path)}${
        ((t = e.parameters),
        Object.keys(t)
          .map((e) => `;${_e(e)}=${_e(t[e])}`)
          .join(""))
      }`;
      var t;
    }
    const Ee = /^[^\/()?;=#]+/;
    function Se(e) {
      const t = e.match(Ee);
      return t ? t[0] : "";
    }
    const Oe = /^[^=?&#]+/,
      xe = /^[^?&#]+/;
    class Ie {
      constructor(e) {
        (this.url = e), (this.remaining = e);
      }
      parseRootSegment() {
        return (
          this.consumeOptional("/"),
          "" === this.remaining ||
          this.peekStartsWith("?") ||
          this.peekStartsWith("#")
            ? new ce([], {})
            : new ce([], this.parseChildren())
        );
      }
      parseQueryParams() {
        const e = {};
        if (this.consumeOptional("?"))
          do {
            this.parseQueryParam(e);
          } while (this.consumeOptional("&"));
        return e;
      }
      parseFragment() {
        return this.consumeOptional("#")
          ? decodeURIComponent(this.remaining)
          : null;
      }
      parseChildren() {
        if ("" === this.remaining) return {};
        this.consumeOptional("/");
        const e = [];
        for (
          this.peekStartsWith("(") || e.push(this.parseSegment());
          this.peekStartsWith("/") &&
          !this.peekStartsWith("//") &&
          !this.peekStartsWith("/(");

        )
          this.capture("/"), e.push(this.parseSegment());
        let t = {};
        this.peekStartsWith("/(") &&
          (this.capture("/"), (t = this.parseParens(!0)));
        let n = {};
        return (
          this.peekStartsWith("(") && (n = this.parseParens(!1)),
          (e.length > 0 || Object.keys(t).length > 0) && (n[Q] = new ce(e, t)),
          n
        );
      }
      parseSegment() {
        const e = Se(this.remaining);
        if ("" === e && this.peekStartsWith(";"))
          throw new Error(
            `Empty path url segment cannot have parameters: '${this.remaining}'.`
          );
        return this.capture(e), new le(we(e), this.parseMatrixParams());
      }
      parseMatrixParams() {
        const e = {};
        for (; this.consumeOptional(";"); ) this.parseParam(e);
        return e;
      }
      parseParam(e) {
        const t = Se(this.remaining);
        if (!t) return;
        this.capture(t);
        let n = "";
        if (this.consumeOptional("=")) {
          const e = Se(this.remaining);
          e && ((n = e), this.capture(n));
        }
        e[we(t)] = we(n);
      }
      parseQueryParam(e) {
        const t = (function (e) {
          const t = e.match(Oe);
          return t ? t[0] : "";
        })(this.remaining);
        if (!t) return;
        this.capture(t);
        let n = "";
        if (this.consumeOptional("=")) {
          const e = (function (e) {
            const t = e.match(xe);
            return t ? t[0] : "";
          })(this.remaining);
          e && ((n = e), this.capture(n));
        }
        const r = Ce(t),
          o = Ce(n);
        if (e.hasOwnProperty(r)) {
          let t = e[r];
          Array.isArray(t) || ((t = [t]), (e[r] = t)), t.push(o);
        } else e[r] = o;
      }
      parseParens(e) {
        const t = {};
        for (
          this.capture("(");
          !this.consumeOptional(")") && this.remaining.length > 0;

        ) {
          const n = Se(this.remaining),
            r = this.remaining[n.length];
          if ("/" !== r && ")" !== r && ";" !== r)
            throw new Error(`Cannot parse url '${this.url}'`);
          let o = void 0;
          n.indexOf(":") > -1
            ? ((o = n.substr(0, n.indexOf(":"))),
              this.capture(o),
              this.capture(":"))
            : e && (o = Q);
          const i = this.parseChildren();
          (t[o] = 1 === Object.keys(i).length ? i[Q] : new ce([], i)),
            this.consumeOptional("//");
        }
        return t;
      }
      peekStartsWith(e) {
        return this.remaining.startsWith(e);
      }
      consumeOptional(e) {
        return (
          !!this.peekStartsWith(e) &&
          ((this.remaining = this.remaining.substring(e.length)), !0)
        );
      }
      capture(e) {
        if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
      }
    }
    class Ae {
      constructor(e) {
        this._root = e;
      }
      get root() {
        return this._root.value;
      }
      parent(e) {
        const t = this.pathFromRoot(e);
        return t.length > 1 ? t[t.length - 2] : null;
      }
      children(e) {
        const t = je(e, this._root);
        return t ? t.children.map((e) => e.value) : [];
      }
      firstChild(e) {
        const t = je(e, this._root);
        return t && t.children.length > 0 ? t.children[0].value : null;
      }
      siblings(e) {
        const t = ke(e, this._root);
        return t.length < 2
          ? []
          : t[t.length - 2].children.map((e) => e.value).filter((t) => t !== e);
      }
      pathFromRoot(e) {
        return ke(e, this._root).map((e) => e.value);
      }
    }
    function je(e, t) {
      if (e === t.value) return t;
      for (const n of t.children) {
        const t = je(e, n);
        if (t) return t;
      }
      return null;
    }
    function ke(e, t) {
      if (e === t.value) return [t];
      for (const n of t.children) {
        const r = ke(e, n);
        if (r.length) return r.unshift(t), r;
      }
      return [];
    }
    class Te {
      constructor(e, t) {
        (this.value = e), (this.children = t);
      }
      toString() {
        return `TreeNode(${this.value})`;
      }
    }
    function Re(e) {
      const t = {};
      return e && e.children.forEach((e) => (t[e.value.outlet] = e)), t;
    }
    class Fe extends Ae {
      constructor(e, t) {
        super(e), (this.snapshot = t), Ue(this, e);
      }
      toString() {
        return this.snapshot.toString();
      }
    }
    function Pe(e, t) {
      const n = (function (e, t) {
          const n = new Le([], {}, {}, "", {}, Q, t, null, e.root, -1, {});
          return new Ve("", new Te(n, []));
        })(e, t),
        r = new u.BehaviorSubject([new le("", {})]),
        o = new u.BehaviorSubject({}),
        i = new u.BehaviorSubject({}),
        s = new u.BehaviorSubject({}),
        a = new u.BehaviorSubject(""),
        c = new Ne(r, o, s, a, i, Q, t, n.root);
      return (c.snapshot = n.root), new Fe(new Te(c, []), n);
    }
    class Ne {
      constructor(e, t, n, r, o, i, s, u) {
        (this.url = e),
          (this.params = t),
          (this.queryParams = n),
          (this.fragment = r),
          (this.data = o),
          (this.outlet = i),
          (this.component = s),
          (this._futureSnapshot = u);
      }
      get routeConfig() {
        return this._futureSnapshot.routeConfig;
      }
      get root() {
        return this._routerState.root;
      }
      get parent() {
        return this._routerState.parent(this);
      }
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      get children() {
        return this._routerState.children(this);
      }
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      get paramMap() {
        return (
          this._paramMap ||
            (this._paramMap = this.params.pipe(Object(p.map)((e) => Z(e)))),
          this._paramMap
        );
      }
      get queryParamMap() {
        return (
          this._queryParamMap ||
            (this._queryParamMap = this.queryParams.pipe(
              Object(p.map)((e) => Z(e))
            )),
          this._queryParamMap
        );
      }
      toString() {
        return this.snapshot
          ? this.snapshot.toString()
          : `Future(${this._futureSnapshot})`;
      }
    }
    function Me(e, t = "emptyOnly") {
      const n = e.pathFromRoot;
      let r = 0;
      if ("always" !== t)
        for (r = n.length - 1; r >= 1; ) {
          const e = n[r],
            t = n[r - 1];
          if (e.routeConfig && "" === e.routeConfig.path) r--;
          else {
            if (t.component) break;
            r--;
          }
        }
      return (function (e) {
        return e.reduce(
          (e, t) => ({
            params: Object.assign(Object.assign({}, e.params), t.params),
            data: Object.assign(Object.assign({}, e.data), t.data),
            resolve: Object.assign(
              Object.assign({}, e.resolve),
              t._resolvedData
            ),
          }),
          { params: {}, data: {}, resolve: {} }
        );
      })(n.slice(r));
    }
    class Le {
      constructor(e, t, n, r, o, i, s, u, a, c, l) {
        (this.url = e),
          (this.params = t),
          (this.queryParams = n),
          (this.fragment = r),
          (this.data = o),
          (this.outlet = i),
          (this.component = s),
          (this.routeConfig = u),
          (this._urlSegment = a),
          (this._lastPathIndex = c),
          (this._resolve = l);
      }
      get root() {
        return this._routerState.root;
      }
      get parent() {
        return this._routerState.parent(this);
      }
      get firstChild() {
        return this._routerState.firstChild(this);
      }
      get children() {
        return this._routerState.children(this);
      }
      get pathFromRoot() {
        return this._routerState.pathFromRoot(this);
      }
      get paramMap() {
        return (
          this._paramMap || (this._paramMap = Z(this.params)), this._paramMap
        );
      }
      get queryParamMap() {
        return (
          this._queryParamMap || (this._queryParamMap = Z(this.queryParams)),
          this._queryParamMap
        );
      }
      toString() {
        return `Route(url:'${this.url
          .map((e) => e.toString())
          .join("/")}', path:'${
          this.routeConfig ? this.routeConfig.path : ""
        }')`;
      }
    }
    class Ve extends Ae {
      constructor(e, t) {
        super(t), (this.url = e), Ue(this, t);
      }
      toString() {
        return Be(this._root);
      }
    }
    function Ue(e, t) {
      (t.value._routerState = e), t.children.forEach((t) => Ue(e, t));
    }
    function Be(e) {
      const t =
        e.children.length > 0 ? ` { ${e.children.map(Be).join(", ")} } ` : "";
      return `${e.value}${t}`;
    }
    function He(e) {
      if (e.snapshot) {
        const t = e.snapshot,
          n = e._futureSnapshot;
        (e.snapshot = n),
          J(t.queryParams, n.queryParams) || e.queryParams.next(n.queryParams),
          t.fragment !== n.fragment && e.fragment.next(n.fragment),
          J(t.params, n.params) || e.params.next(n.params),
          (function (e, t) {
            if (e.length !== t.length) return !1;
            for (let n = 0; n < e.length; ++n) if (!J(e[n], t[n])) return !1;
            return !0;
          })(t.url, n.url) || e.url.next(n.url),
          J(t.data, n.data) || e.data.next(n.data);
      } else
        (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
    }
    function $e(e, t) {
      var n, r;
      return (
        J(e.params, t.params) &&
        de((n = e.url), (r = t.url)) &&
        n.every((e, t) => J(e.parameters, r[t].parameters)) &&
        !(!e.parent != !t.parent) &&
        (!e.parent || $e(e.parent, t.parent))
      );
    }
    function ze(e, t, n) {
      if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
        const r = n.value;
        r._futureSnapshot = t.value;
        const o = (function (e, t, n) {
          return t.children.map((t) => {
            for (const r of n.children)
              if (e.shouldReuseRoute(r.value.snapshot, t.value))
                return ze(e, t, r);
            return ze(e, t);
          });
        })(e, t, n);
        return new Te(r, o);
      }
      {
        const n = e.retrieve(t.value);
        if (n) {
          const e = n.route;
          return qe(t, e), e;
        }
        {
          const n = new Ne(
              new u.BehaviorSubject((r = t.value).url),
              new u.BehaviorSubject(r.params),
              new u.BehaviorSubject(r.queryParams),
              new u.BehaviorSubject(r.fragment),
              new u.BehaviorSubject(r.data),
              r.outlet,
              r.component,
              r
            ),
            o = t.children.map((t) => ze(e, t));
          return new Te(n, o);
        }
      }
      var r;
    }
    function qe(e, t) {
      if (e.value.routeConfig !== t.value.routeConfig)
        throw new Error(
          "Cannot reattach ActivatedRouteSnapshot created from a different route"
        );
      if (e.children.length !== t.children.length)
        throw new Error(
          "Cannot reattach ActivatedRouteSnapshot with a different number of children"
        );
      t.value._futureSnapshot = e.value;
      for (let n = 0; n < e.children.length; ++n)
        qe(e.children[n], t.children[n]);
    }
    function We(e) {
      return "object" == typeof e && null != e && !e.outlets && !e.segmentPath;
    }
    function Qe(e, t, n, r, o) {
      let i = {};
      return (
        r &&
          ne(r, (e, t) => {
            i[t] = Array.isArray(e) ? e.map((e) => "" + e) : "" + e;
          }),
        new ae(n.root === e ? t : Ge(n.root, e, t), i, o)
      );
    }
    function Ge(e, t, n) {
      const r = {};
      return (
        ne(e.children, (e, o) => {
          r[o] = e === t ? n : Ge(e, t, n);
        }),
        new ce(e.segments, r)
      );
    }
    class Ze {
      constructor(e, t, n) {
        if (
          ((this.isAbsolute = e),
          (this.numberOfDoubleDots = t),
          (this.commands = n),
          e && n.length > 0 && We(n[0]))
        )
          throw new Error("Root segment cannot have matrix parameters");
        const r = n.find((e) => "object" == typeof e && null != e && e.outlets);
        if (r && r !== te(n))
          throw new Error("{outlets:{}} has to be the last command");
      }
      toRoot() {
        return (
          this.isAbsolute &&
          1 === this.commands.length &&
          "/" == this.commands[0]
        );
      }
    }
    class Ke {
      constructor(e, t, n) {
        (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
      }
    }
    function Ye(e) {
      return "object" == typeof e && null != e && e.outlets
        ? e.outlets[Q]
        : "" + e;
    }
    function Je(e, t, n) {
      if (
        (e || (e = new ce([], {})), 0 === e.segments.length && e.hasChildren())
      )
        return Xe(e, t, n);
      const r = (function (e, t, n) {
          let r = 0,
            o = t;
          const i = { match: !1, pathIndex: 0, commandIndex: 0 };
          for (; o < e.segments.length; ) {
            if (r >= n.length) return i;
            const t = e.segments[o],
              s = Ye(n[r]),
              u = r < n.length - 1 ? n[r + 1] : null;
            if (o > 0 && void 0 === s) break;
            if (s && u && "object" == typeof u && void 0 === u.outlets) {
              if (!rt(s, u, t)) return i;
              r += 2;
            } else {
              if (!rt(s, {}, t)) return i;
              r++;
            }
            o++;
          }
          return { match: !0, pathIndex: o, commandIndex: r };
        })(e, t, n),
        o = n.slice(r.commandIndex);
      if (r.match && r.pathIndex < e.segments.length) {
        const t = new ce(e.segments.slice(0, r.pathIndex), {});
        return (
          (t.children[Q] = new ce(e.segments.slice(r.pathIndex), e.children)),
          Xe(t, 0, o)
        );
      }
      return r.match && 0 === o.length
        ? new ce(e.segments, {})
        : r.match && !e.hasChildren()
        ? et(e, t, n)
        : r.match
        ? Xe(e, 0, o)
        : et(e, t, n);
    }
    function Xe(e, t, n) {
      if (0 === n.length) return new ce(e.segments, {});
      {
        const r = (function (e) {
            return "object" == typeof e[0] && null !== e[0] && e[0].outlets
              ? e[0].outlets
              : { [Q]: e };
          })(n),
          o = {};
        return (
          ne(r, (n, r) => {
            null !== n && (o[r] = Je(e.children[r], t, n));
          }),
          ne(e.children, (e, t) => {
            void 0 === r[t] && (o[t] = e);
          }),
          new ce(e.segments, o)
        );
      }
    }
    function et(e, t, n) {
      const r = e.segments.slice(0, t);
      let o = 0;
      for (; o < n.length; ) {
        if (
          "object" == typeof n[o] &&
          null !== n[o] &&
          void 0 !== n[o].outlets
        ) {
          const e = tt(n[o].outlets);
          return new ce(r, e);
        }
        if (0 === o && We(n[0])) {
          r.push(new le(e.segments[t].path, n[0])), o++;
          continue;
        }
        const i = Ye(n[o]),
          s = o < n.length - 1 ? n[o + 1] : null;
        i && s && We(s)
          ? (r.push(new le(i, nt(s))), (o += 2))
          : (r.push(new le(i, {})), o++);
      }
      return new ce(r, {});
    }
    function tt(e) {
      const t = {};
      return (
        ne(e, (e, n) => {
          null !== e && (t[n] = et(new ce([], {}), 0, e));
        }),
        t
      );
    }
    function nt(e) {
      const t = {};
      return ne(e, (e, n) => (t[n] = "" + e)), t;
    }
    function rt(e, t, n) {
      return e == n.path && J(t, n.parameters);
    }
    class ot {
      constructor(e, t, n, r) {
        (this.routeReuseStrategy = e),
          (this.futureState = t),
          (this.currState = n),
          (this.forwardEvent = r);
      }
      activate(e) {
        const t = this.futureState._root,
          n = this.currState ? this.currState._root : null;
        this.deactivateChildRoutes(t, n, e),
          He(this.futureState.root),
          this.activateChildRoutes(t, n, e);
      }
      deactivateChildRoutes(e, t, n) {
        const r = Re(t);
        e.children.forEach((e) => {
          const t = e.value.outlet;
          this.deactivateRoutes(e, r[t], n), delete r[t];
        }),
          ne(r, (e, t) => {
            this.deactivateRouteAndItsChildren(e, n);
          });
      }
      deactivateRoutes(e, t, n) {
        const r = e.value,
          o = t ? t.value : null;
        if (r === o)
          if (r.component) {
            const o = n.getContext(r.outlet);
            o && this.deactivateChildRoutes(e, t, o.children);
          } else this.deactivateChildRoutes(e, t, n);
        else o && this.deactivateRouteAndItsChildren(t, n);
      }
      deactivateRouteAndItsChildren(e, t) {
        this.routeReuseStrategy.shouldDetach(e.value.snapshot)
          ? this.detachAndStoreRouteSubtree(e, t)
          : this.deactivateRouteAndOutlet(e, t);
      }
      detachAndStoreRouteSubtree(e, t) {
        const n = t.getContext(e.value.outlet);
        if (n && n.outlet) {
          const t = n.outlet.detach(),
            r = n.children.onOutletDeactivated();
          this.routeReuseStrategy.store(e.value.snapshot, {
            componentRef: t,
            route: e,
            contexts: r,
          });
        }
      }
      deactivateRouteAndOutlet(e, t) {
        const n = t.getContext(e.value.outlet);
        if (n) {
          const r = Re(e),
            o = e.value.component ? n.children : t;
          ne(r, (e, t) => this.deactivateRouteAndItsChildren(e, o)),
            n.outlet &&
              (n.outlet.deactivate(), n.children.onOutletDeactivated());
        }
      }
      activateChildRoutes(e, t, n) {
        const r = Re(t);
        e.children.forEach((e) => {
          this.activateRoutes(e, r[e.value.outlet], n),
            this.forwardEvent(new q(e.value.snapshot));
        }),
          e.children.length && this.forwardEvent(new $(e.value.snapshot));
      }
      activateRoutes(e, t, n) {
        const r = e.value,
          o = t ? t.value : null;
        if ((He(r), r === o))
          if (r.component) {
            const o = n.getOrCreateContext(r.outlet);
            this.activateChildRoutes(e, t, o.children);
          } else this.activateChildRoutes(e, t, n);
        else if (r.component) {
          const t = n.getOrCreateContext(r.outlet);
          if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
            const e = this.routeReuseStrategy.retrieve(r.snapshot);
            this.routeReuseStrategy.store(r.snapshot, null),
              t.children.onOutletReAttached(e.contexts),
              (t.attachRef = e.componentRef),
              (t.route = e.route.value),
              t.outlet && t.outlet.attach(e.componentRef, e.route.value),
              it(e.route);
          } else {
            const n = (function (e) {
                for (let t = e.parent; t; t = t.parent) {
                  const e = t.routeConfig;
                  if (e && e._loadedConfig) return e._loadedConfig;
                  if (e && e.component) return null;
                }
                return null;
              })(r.snapshot),
              o = n ? n.module.componentFactoryResolver : null;
            (t.attachRef = null),
              (t.route = r),
              (t.resolver = o),
              t.outlet && t.outlet.activateWith(r, o),
              this.activateChildRoutes(e, null, t.children);
          }
        } else this.activateChildRoutes(e, null, n);
      }
    }
    function it(e) {
      He(e.value), e.children.forEach(it);
    }
    class st {
      constructor(e, t) {
        (this.routes = e), (this.module = t);
      }
    }
    function ut(e) {
      return "function" == typeof e;
    }
    function at(e) {
      return e instanceof ae;
    }
    const ct = Symbol("INITIAL_VALUE");
    function lt() {
      return Object(y.switchMap)((e) =>
        Object(a.combineLatest)(
          ...e.map((e) => e.pipe(Object(b.take)(1), Object(v.startWith)(ct)))
        ).pipe(
          Object(_.scan)((e, t) => {
            let n = !1;
            return t.reduce((e, r, o) => {
              if (e !== ct) return e;
              if ((r === ct && (n = !0), !n)) {
                if (!1 === r) return r;
                if (o === t.length - 1 || at(r)) return r;
              }
              return e;
            }, e);
          }, ct),
          Object(w.filter)((e) => e !== ct),
          Object(p.map)((e) => (at(e) ? e : !0 === e)),
          Object(b.take)(1)
        )
      );
    }
    class dt {
      constructor(e) {
        this.segmentGroup = e || null;
      }
    }
    class ft {
      constructor(e) {
        this.urlTree = e;
      }
    }
    function ht(e) {
      return new c.Observable((t) => t.error(new dt(e)));
    }
    function pt(e) {
      return new c.Observable((t) => t.error(new ft(e)));
    }
    function gt(e) {
      return new c.Observable((t) =>
        t.error(
          new Error(
            `Only absolute redirects can have named outlets. redirectTo: '${e}'`
          )
        )
      );
    }
    class mt {
      constructor(e, t, n, r, i) {
        (this.configLoader = t),
          (this.urlSerializer = n),
          (this.urlTree = r),
          (this.config = i),
          (this.allowRedirects = !0),
          (this.ngModule = e.get(o.NgModuleRef));
      }
      apply() {
        return this.expandSegmentGroup(
          this.ngModule,
          this.config,
          this.urlTree.root,
          Q
        )
          .pipe(
            Object(p.map)((e) =>
              this.createUrlTree(
                e,
                this.urlTree.queryParams,
                this.urlTree.fragment
              )
            )
          )
          .pipe(
            Object(C.catchError)((e) => {
              if (e instanceof ft)
                return (this.allowRedirects = !1), this.match(e.urlTree);
              if (e instanceof dt) throw this.noMatchError(e);
              throw e;
            })
          );
      }
      match(e) {
        return this.expandSegmentGroup(this.ngModule, this.config, e.root, Q)
          .pipe(
            Object(p.map)((t) =>
              this.createUrlTree(t, e.queryParams, e.fragment)
            )
          )
          .pipe(
            Object(C.catchError)((e) => {
              if (e instanceof dt) throw this.noMatchError(e);
              throw e;
            })
          );
      }
      noMatchError(e) {
        return new Error(
          `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
        );
      }
      createUrlTree(e, t, n) {
        const r = e.segments.length > 0 ? new ce([], { [Q]: e }) : e;
        return new ae(r, t, n);
      }
      expandSegmentGroup(e, t, n, r) {
        return 0 === n.segments.length && n.hasChildren()
          ? this.expandChildren(e, t, n).pipe(
              Object(p.map)((e) => new ce([], e))
            )
          : this.expandSegment(e, n, t, n.segments, r, !0);
      }
      expandChildren(e, t, n) {
        return (function (e, t) {
          if (0 === Object.keys(e).length) return Object(i.of)({});
          const n = [],
            r = [],
            o = {};
          return (
            ne(e, (e, i) => {
              const s = t(i, e).pipe(Object(p.map)((e) => (o[i] = e)));
              i === Q ? n.push(s) : r.push(s);
            }),
            i.of.apply(null, n.concat(r)).pipe(
              Object(g.concatAll)(),
              Object(m.last)(),
              Object(p.map)(() => o)
            )
          );
        })(n.children, (n, r) => this.expandSegmentGroup(e, t, r, n));
      }
      expandSegment(e, t, n, r, o, s) {
        return Object(i.of)(...n).pipe(
          Object(D.concatMap)((u) =>
            this.expandSegmentAgainstRoute(e, t, n, u, r, o, s).pipe(
              Object(C.catchError)((e) => {
                if (e instanceof dt) return Object(i.of)(null);
                throw e;
              })
            )
          ),
          Object(E.first)((e) => !!e),
          Object(C.catchError)((e, n) => {
            if (e instanceof l.EmptyError || "EmptyError" === e.name) {
              if (this.noLeftoversInUrl(t, r, o))
                return Object(i.of)(new ce([], {}));
              throw new dt(t);
            }
            throw e;
          })
        );
      }
      noLeftoversInUrl(e, t, n) {
        return 0 === t.length && !e.children[n];
      }
      expandSegmentAgainstRoute(e, t, n, r, o, i, s) {
        return _t(r) !== i
          ? ht(t)
          : void 0 === r.redirectTo
          ? this.matchSegmentAgainstRoute(e, t, r, o)
          : s && this.allowRedirects
          ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i)
          : ht(t);
      }
      expandSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i) {
        return "**" === r.path
          ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
          : this.expandRegularSegmentAgainstRouteUsingRedirect(
              e,
              t,
              n,
              r,
              o,
              i
            );
      }
      expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
        const o = this.applyRedirectCommands([], n.redirectTo, {});
        return n.redirectTo.startsWith("/")
          ? pt(o)
          : this.lineralizeSegments(n, o).pipe(
              Object(S.mergeMap)((n) => {
                const o = new ce(n, {});
                return this.expandSegment(e, o, t, n, r, !1);
              })
            );
      }
      expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, o, i) {
        const {
          matched: s,
          consumedSegments: u,
          lastChild: a,
          positionalParamSegments: c,
        } = yt(t, r, o);
        if (!s) return ht(t);
        const l = this.applyRedirectCommands(u, r.redirectTo, c);
        return r.redirectTo.startsWith("/")
          ? pt(l)
          : this.lineralizeSegments(r, l).pipe(
              Object(S.mergeMap)((r) =>
                this.expandSegment(e, t, n, r.concat(o.slice(a)), i, !1)
              )
            );
      }
      matchSegmentAgainstRoute(e, t, n, r) {
        if ("**" === n.path)
          return n.loadChildren
            ? this.configLoader
                .load(e.injector, n)
                .pipe(
                  Object(p.map)((e) => ((n._loadedConfig = e), new ce(r, {})))
                )
            : Object(i.of)(new ce(r, {}));
        const { matched: o, consumedSegments: s, lastChild: u } = yt(t, n, r);
        if (!o) return ht(t);
        const a = r.slice(u);
        return this.getChildConfig(e, n, r).pipe(
          Object(S.mergeMap)((e) => {
            const n = e.module,
              r = e.routes,
              { segmentGroup: o, slicedSegments: u } = (function (e, t, n, r) {
                return n.length > 0 &&
                  (function (e, t, n) {
                    return n.some((n) => vt(e, t, n) && _t(n) !== Q);
                  })(e, n, r)
                  ? {
                      segmentGroup: bt(
                        new ce(
                          t,
                          (function (e, t) {
                            const n = {};
                            n[Q] = t;
                            for (const r of e)
                              "" === r.path &&
                                _t(r) !== Q &&
                                (n[_t(r)] = new ce([], {}));
                            return n;
                          })(r, new ce(n, e.children))
                        )
                      ),
                      slicedSegments: [],
                    }
                  : 0 === n.length &&
                    (function (e, t, n) {
                      return n.some((n) => vt(e, t, n));
                    })(e, n, r)
                  ? {
                      segmentGroup: bt(
                        new ce(
                          e.segments,
                          (function (e, t, n, r) {
                            const o = {};
                            for (const i of n)
                              vt(e, t, i) &&
                                !r[_t(i)] &&
                                (o[_t(i)] = new ce([], {}));
                            return Object.assign(Object.assign({}, r), o);
                          })(e, n, r, e.children)
                        )
                      ),
                      slicedSegments: n,
                    }
                  : { segmentGroup: e, slicedSegments: n };
              })(t, s, a, r);
            return 0 === u.length && o.hasChildren()
              ? this.expandChildren(n, r, o).pipe(
                  Object(p.map)((e) => new ce(s, e))
                )
              : 0 === r.length && 0 === u.length
              ? Object(i.of)(new ce(s, {}))
              : this.expandSegment(n, o, r, u, Q, !0).pipe(
                  Object(p.map)((e) => new ce(s.concat(e.segments), e.children))
                );
          })
        );
      }
      getChildConfig(e, t, n) {
        return t.children
          ? Object(i.of)(new st(t.children, e))
          : t.loadChildren
          ? void 0 !== t._loadedConfig
            ? Object(i.of)(t._loadedConfig)
            : this.runCanLoadGuards(e.injector, t, n).pipe(
                Object(S.mergeMap)((n) =>
                  n
                    ? this.configLoader
                        .load(e.injector, t)
                        .pipe(Object(p.map)((e) => ((t._loadedConfig = e), e)))
                    : (function (e) {
                        return new c.Observable((t) =>
                          t.error(
                            K(
                              `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                            )
                          )
                        );
                      })(t)
                )
              )
          : Object(i.of)(new st([], e));
      }
      runCanLoadGuards(e, t, n) {
        const r = t.canLoad;
        if (!r || 0 === r.length) return Object(i.of)(!0);
        const o = r.map((r) => {
          const o = e.get(r);
          let i;
          if (
            (function (e) {
              return e && ut(e.canLoad);
            })(o)
          )
            i = o.canLoad(t, n);
          else {
            if (!ut(o)) throw new Error("Invalid CanLoad guard");
            i = o(t, n);
          }
          return re(i);
        });
        return Object(i.of)(o).pipe(
          lt(),
          Object(O.tap)((e) => {
            if (!at(e)) return;
            const t = K(`Redirecting to "${this.urlSerializer.serialize(e)}"`);
            throw ((t.url = e), t);
          }),
          Object(p.map)((e) => !0 === e)
        );
      }
      lineralizeSegments(e, t) {
        let n = [],
          r = t.root;
        for (;;) {
          if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
            return Object(i.of)(n);
          if (r.numberOfChildren > 1 || !r.children[Q]) return gt(e.redirectTo);
          r = r.children[Q];
        }
      }
      applyRedirectCommands(e, t, n) {
        return this.applyRedirectCreatreUrlTree(
          t,
          this.urlSerializer.parse(t),
          e,
          n
        );
      }
      applyRedirectCreatreUrlTree(e, t, n, r) {
        const o = this.createSegmentGroup(e, t.root, n, r);
        return new ae(
          o,
          this.createQueryParams(t.queryParams, this.urlTree.queryParams),
          t.fragment
        );
      }
      createQueryParams(e, t) {
        const n = {};
        return (
          ne(e, (e, r) => {
            if ("string" == typeof e && e.startsWith(":")) {
              const o = e.substring(1);
              n[r] = t[o];
            } else n[r] = e;
          }),
          n
        );
      }
      createSegmentGroup(e, t, n, r) {
        const o = this.createSegments(e, t.segments, n, r);
        let i = {};
        return (
          ne(t.children, (t, o) => {
            i[o] = this.createSegmentGroup(e, t, n, r);
          }),
          new ce(o, i)
        );
      }
      createSegments(e, t, n, r) {
        return t.map((t) =>
          t.path.startsWith(":")
            ? this.findPosParam(e, t, r)
            : this.findOrReturn(t, n)
        );
      }
      findPosParam(e, t, n) {
        const r = n[t.path.substring(1)];
        if (!r)
          throw new Error(
            `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
          );
        return r;
      }
      findOrReturn(e, t) {
        let n = 0;
        for (const r of t) {
          if (r.path === e.path) return t.splice(n), r;
          n++;
        }
        return e;
      }
    }
    function yt(e, t, n) {
      if ("" === t.path)
        return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
          ? {
              matched: !1,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            }
          : {
              matched: !0,
              consumedSegments: [],
              lastChild: 0,
              positionalParamSegments: {},
            };
      const r = (t.matcher || Y)(n, e, t);
      return r
        ? {
            matched: !0,
            consumedSegments: r.consumed,
            lastChild: r.consumed.length,
            positionalParamSegments: r.posParams,
          }
        : {
            matched: !1,
            consumedSegments: [],
            lastChild: 0,
            positionalParamSegments: {},
          };
    }
    function bt(e) {
      if (1 === e.numberOfChildren && e.children[Q]) {
        const t = e.children[Q];
        return new ce(e.segments.concat(t.segments), t.children);
      }
      return e;
    }
    function vt(e, t, n) {
      return (
        (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
        "" === n.path &&
        void 0 !== n.redirectTo
      );
    }
    function _t(e) {
      return e.outlet || Q;
    }
    class wt {
      constructor(e) {
        (this.path = e), (this.route = this.path[this.path.length - 1]);
      }
    }
    class Ct {
      constructor(e, t) {
        (this.component = e), (this.route = t);
      }
    }
    function Dt(e, t, n) {
      const r = e._root;
      return St(r, t ? t._root : null, n, [r.value]);
    }
    function Et(e, t, n) {
      const r = (function (e) {
        if (!e) return null;
        for (let t = e.parent; t; t = t.parent) {
          const e = t.routeConfig;
          if (e && e._loadedConfig) return e._loadedConfig;
        }
        return null;
      })(t);
      return (r ? r.module.injector : n).get(e);
    }
    function St(
      e,
      t,
      n,
      r,
      o = { canDeactivateChecks: [], canActivateChecks: [] }
    ) {
      const i = Re(t);
      return (
        e.children.forEach((e) => {
          !(function (
            e,
            t,
            n,
            r,
            o = { canDeactivateChecks: [], canActivateChecks: [] }
          ) {
            const i = e.value,
              s = t ? t.value : null,
              u = n ? n.getContext(e.value.outlet) : null;
            if (s && i.routeConfig === s.routeConfig) {
              const a = (function (e, t, n) {
                if ("function" == typeof n) return n(e, t);
                switch (n) {
                  case "pathParamsChange":
                    return !de(e.url, t.url);
                  case "pathParamsOrQueryParamsChange":
                    return (
                      !de(e.url, t.url) || !J(e.queryParams, t.queryParams)
                    );
                  case "always":
                    return !0;
                  case "paramsOrQueryParamsChange":
                    return !$e(e, t) || !J(e.queryParams, t.queryParams);
                  case "paramsChange":
                  default:
                    return !$e(e, t);
                }
              })(s, i, i.routeConfig.runGuardsAndResolvers);
              a
                ? o.canActivateChecks.push(new wt(r))
                : ((i.data = s.data), (i._resolvedData = s._resolvedData)),
                St(e, t, i.component ? (u ? u.children : null) : n, r, o),
                a &&
                  o.canDeactivateChecks.push(
                    new Ct((u && u.outlet && u.outlet.component) || null, s)
                  );
            } else
              s && Ot(t, u, o),
                o.canActivateChecks.push(new wt(r)),
                St(e, null, i.component ? (u ? u.children : null) : n, r, o);
          })(e, i[e.value.outlet], n, r.concat([e.value]), o),
            delete i[e.value.outlet];
        }),
        ne(i, (e, t) => Ot(e, n.getContext(t), o)),
        o
      );
    }
    function Ot(e, t, n) {
      const r = Re(e),
        o = e.value;
      ne(r, (e, r) => {
        Ot(e, o.component ? (t ? t.children.getContext(r) : null) : t, n);
      }),
        n.canDeactivateChecks.push(
          new Ct(
            o.component && t && t.outlet && t.outlet.isActivated
              ? t.outlet.component
              : null,
            o
          )
        );
    }
    function xt(e, t) {
      return null !== e && t && t(new z(e)), Object(i.of)(!0);
    }
    function It(e, t) {
      return null !== e && t && t(new H(e)), Object(i.of)(!0);
    }
    function At(e, t, n) {
      const r = t.routeConfig ? t.routeConfig.canActivate : null;
      if (!r || 0 === r.length) return Object(i.of)(!0);
      const o = r.map((r) =>
        Object(d.defer)(() => {
          const o = Et(r, t, n);
          let i;
          if (
            (function (e) {
              return e && ut(e.canActivate);
            })(o)
          )
            i = re(o.canActivate(t, e));
          else {
            if (!ut(o)) throw new Error("Invalid CanActivate guard");
            i = re(o(t, e));
          }
          return i.pipe(Object(E.first)());
        })
      );
      return Object(i.of)(o).pipe(lt());
    }
    function jt(e, t, n) {
      const r = t[t.length - 1],
        o = t
          .slice(0, t.length - 1)
          .reverse()
          .map((e) =>
            (function (e) {
              const t = e.routeConfig ? e.routeConfig.canActivateChild : null;
              return t && 0 !== t.length ? { node: e, guards: t } : null;
            })(e)
          )
          .filter((e) => null !== e)
          .map((t) =>
            Object(d.defer)(() => {
              const o = t.guards.map((o) => {
                const i = Et(o, t.node, n);
                let s;
                if (
                  (function (e) {
                    return e && ut(e.canActivateChild);
                  })(i)
                )
                  s = re(i.canActivateChild(r, e));
                else {
                  if (!ut(i)) throw new Error("Invalid CanActivateChild guard");
                  s = re(i(r, e));
                }
                return s.pipe(Object(E.first)());
              });
              return Object(i.of)(o).pipe(lt());
            })
          );
      return Object(i.of)(o).pipe(lt());
    }
    class kt {}
    class Tt {
      constructor(e, t, n, r, o, i) {
        (this.rootComponentType = e),
          (this.config = t),
          (this.urlTree = n),
          (this.url = r),
          (this.paramsInheritanceStrategy = o),
          (this.relativeLinkResolution = i);
      }
      recognize() {
        try {
          const e = Pt(
              this.urlTree.root,
              [],
              [],
              this.config,
              this.relativeLinkResolution
            ).segmentGroup,
            t = this.processSegmentGroup(this.config, e, Q),
            n = new Le(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              Q,
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new Te(n, t),
            o = new Ve(this.url, r);
          return this.inheritParamsAndData(o._root), Object(i.of)(o);
        } catch (e) {
          return new c.Observable((t) => t.error(e));
        }
      }
      inheritParamsAndData(e) {
        const t = e.value,
          n = Me(t, this.paramsInheritanceStrategy);
        (t.params = Object.freeze(n.params)),
          (t.data = Object.freeze(n.data)),
          e.children.forEach((e) => this.inheritParamsAndData(e));
      }
      processSegmentGroup(e, t, n) {
        return 0 === t.segments.length && t.hasChildren()
          ? this.processChildren(e, t)
          : this.processSegment(e, t, t.segments, n);
      }
      processChildren(e, t) {
        const n = fe(t, (t, n) => this.processSegmentGroup(e, t, n));
        return (
          (function (e) {
            const t = {};
            e.forEach((e) => {
              const n = t[e.value.outlet];
              if (n) {
                const t = n.url.map((e) => e.toString()).join("/"),
                  r = e.value.url.map((e) => e.toString()).join("/");
                throw new Error(
                  `Two segments cannot have the same outlet name: '${t}' and '${r}'.`
                );
              }
              t[e.value.outlet] = e.value;
            });
          })(n),
          n.sort((e, t) =>
            e.value.outlet === Q
              ? -1
              : t.value.outlet === Q
              ? 1
              : e.value.outlet.localeCompare(t.value.outlet)
          ),
          n
        );
      }
      processSegment(e, t, n, r) {
        for (const i of e)
          try {
            return this.processSegmentAgainstRoute(i, t, n, r);
          } catch (o) {
            if (!(o instanceof kt)) throw o;
          }
        if (this.noLeftoversInUrl(t, n, r)) return [];
        throw new kt();
      }
      noLeftoversInUrl(e, t, n) {
        return 0 === t.length && !e.children[n];
      }
      processSegmentAgainstRoute(e, t, n, r) {
        if (e.redirectTo) throw new kt();
        if ((e.outlet || Q) !== r) throw new kt();
        let o,
          i = [],
          s = [];
        if ("**" === e.path) {
          const i = n.length > 0 ? te(n).parameters : {};
          o = new Le(
            n,
            i,
            Object.freeze(Object.assign({}, this.urlTree.queryParams)),
            this.urlTree.fragment,
            Lt(e),
            r,
            e.component,
            e,
            Rt(t),
            Ft(t) + n.length,
            Vt(e)
          );
        } else {
          const u = (function (e, t, n) {
            if ("" === t.path) {
              if ("full" === t.pathMatch && (e.hasChildren() || n.length > 0))
                throw new kt();
              return { consumedSegments: [], lastChild: 0, parameters: {} };
            }
            const r = (t.matcher || Y)(n, e, t);
            if (!r) throw new kt();
            const o = {};
            ne(r.posParams, (e, t) => {
              o[t] = e.path;
            });
            const i =
              r.consumed.length > 0
                ? Object.assign(
                    Object.assign({}, o),
                    r.consumed[r.consumed.length - 1].parameters
                  )
                : o;
            return {
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              parameters: i,
            };
          })(t, e, n);
          (i = u.consumedSegments),
            (s = n.slice(u.lastChild)),
            (o = new Le(
              i,
              u.parameters,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              Lt(e),
              r,
              e.component,
              e,
              Rt(t),
              Ft(t) + i.length,
              Vt(e)
            ));
        }
        const u = (function (e) {
            return e.children
              ? e.children
              : e.loadChildren
              ? e._loadedConfig.routes
              : [];
          })(e),
          { segmentGroup: a, slicedSegments: c } = Pt(
            t,
            i,
            s,
            u,
            this.relativeLinkResolution
          );
        if (0 === c.length && a.hasChildren()) {
          const e = this.processChildren(u, a);
          return [new Te(o, e)];
        }
        if (0 === u.length && 0 === c.length) return [new Te(o, [])];
        const l = this.processSegment(u, a, c, Q);
        return [new Te(o, l)];
      }
    }
    function Rt(e) {
      let t = e;
      for (; t._sourceSegment; ) t = t._sourceSegment;
      return t;
    }
    function Ft(e) {
      let t = e,
        n = t._segmentIndexShift ? t._segmentIndexShift : 0;
      for (; t._sourceSegment; )
        (t = t._sourceSegment),
          (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
      return n - 1;
    }
    function Pt(e, t, n, r, o) {
      if (
        n.length > 0 &&
        (function (e, t, n) {
          return n.some((n) => Nt(e, t, n) && Mt(n) !== Q);
        })(e, n, r)
      ) {
        const o = new ce(
          t,
          (function (e, t, n, r) {
            const o = {};
            (o[Q] = r),
              (r._sourceSegment = e),
              (r._segmentIndexShift = t.length);
            for (const i of n)
              if ("" === i.path && Mt(i) !== Q) {
                const n = new ce([], {});
                (n._sourceSegment = e),
                  (n._segmentIndexShift = t.length),
                  (o[Mt(i)] = n);
              }
            return o;
          })(e, t, r, new ce(n, e.children))
        );
        return (
          (o._sourceSegment = e),
          (o._segmentIndexShift = t.length),
          { segmentGroup: o, slicedSegments: [] }
        );
      }
      if (
        0 === n.length &&
        (function (e, t, n) {
          return n.some((n) => Nt(e, t, n));
        })(e, n, r)
      ) {
        const i = new ce(
          e.segments,
          (function (e, t, n, r, o, i) {
            const s = {};
            for (const u of r)
              if (Nt(e, n, u) && !o[Mt(u)]) {
                const n = new ce([], {});
                (n._sourceSegment = e),
                  (n._segmentIndexShift =
                    "legacy" === i ? e.segments.length : t.length),
                  (s[Mt(u)] = n);
              }
            return Object.assign(Object.assign({}, o), s);
          })(e, t, n, r, e.children, o)
        );
        return (
          (i._sourceSegment = e),
          (i._segmentIndexShift = t.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      const i = new ce(e.segments, e.children);
      return (
        (i._sourceSegment = e),
        (i._segmentIndexShift = t.length),
        { segmentGroup: i, slicedSegments: n }
      );
    }
    function Nt(e, t, n) {
      return (
        (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
        "" === n.path &&
        void 0 === n.redirectTo
      );
    }
    function Mt(e) {
      return e.outlet || Q;
    }
    function Lt(e) {
      return e.data || {};
    }
    function Vt(e) {
      return e.resolve || {};
    }
    function Ut(e) {
      return function (t) {
        return t.pipe(
          Object(y.switchMap)((t) => {
            const n = e(t);
            return n
              ? Object(s.from)(n).pipe(Object(p.map)(() => t))
              : Object(s.from)([t]);
          })
        );
      };
    }
    class Bt {}
    class Ht {
      shouldDetach(e) {
        return !1;
      }
      store(e, t) {}
      shouldAttach(e) {
        return !1;
      }
      retrieve(e) {
        return null;
      }
      shouldReuseRoute(e, t) {
        return e.routeConfig === t.routeConfig;
      }
    }
    class $t extends Ht {}
    let zt = (() => {
      class e {}
      return (
        (e.ɵfac = function (t) {
          return new (t || e)();
        }),
        (e.ɵcmp = o["\u0275\u0275defineComponent"]({
          type: e,
          selectors: [["ng-component"]],
          decls: 1,
          vars: 0,
          template: function (e, t) {
            1 & e && o["\u0275\u0275element"](0, "router-outlet");
          },
          directives: function () {
            return [ln];
          },
          encapsulation: 2,
        })),
        e
      );
    })();
    function qt(e, t = "") {
      for (let n = 0; n < e.length; n++) {
        const r = e[n];
        Wt(r, Qt(t, r));
      }
    }
    function Wt(e, t) {
      if (!e)
        throw new Error(
          `\n      Invalid configuration of route '${t}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
        );
      if (Array.isArray(e))
        throw new Error(
          `Invalid configuration of route '${t}': Array cannot be specified`
        );
      if (
        !e.component &&
        !e.children &&
        !e.loadChildren &&
        e.outlet &&
        e.outlet !== Q
      )
        throw new Error(
          `Invalid configuration of route '${t}': a componentless route without children or loadChildren cannot have a named outlet set`
        );
      if (e.redirectTo && e.children)
        throw new Error(
          `Invalid configuration of route '${t}': redirectTo and children cannot be used together`
        );
      if (e.redirectTo && e.loadChildren)
        throw new Error(
          `Invalid configuration of route '${t}': redirectTo and loadChildren cannot be used together`
        );
      if (e.children && e.loadChildren)
        throw new Error(
          `Invalid configuration of route '${t}': children and loadChildren cannot be used together`
        );
      if (e.redirectTo && e.component)
        throw new Error(
          `Invalid configuration of route '${t}': redirectTo and component cannot be used together`
        );
      if (e.path && e.matcher)
        throw new Error(
          `Invalid configuration of route '${t}': path and matcher cannot be used together`
        );
      if (
        void 0 === e.redirectTo &&
        !e.component &&
        !e.children &&
        !e.loadChildren
      )
        throw new Error(
          `Invalid configuration of route '${t}'. One of the following must be provided: component, redirectTo, children or loadChildren`
        );
      if (void 0 === e.path && void 0 === e.matcher)
        throw new Error(
          `Invalid configuration of route '${t}': routes must have either a path or a matcher specified`
        );
      if ("string" == typeof e.path && "/" === e.path.charAt(0))
        throw new Error(
          `Invalid configuration of route '${t}': path cannot start with a slash`
        );
      if ("" === e.path && void 0 !== e.redirectTo && void 0 === e.pathMatch)
        throw new Error(
          `Invalid configuration of route '{path: "${t}", redirectTo: "${e.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
        );
      if (
        void 0 !== e.pathMatch &&
        "full" !== e.pathMatch &&
        "prefix" !== e.pathMatch
      )
        throw new Error(
          `Invalid configuration of route '${t}': pathMatch can only be set to 'prefix' or 'full'`
        );
      e.children && qt(e.children, t);
    }
    function Qt(e, t) {
      return t
        ? e || t.path
          ? e && !t.path
            ? e + "/"
            : !e && t.path
            ? t.path
            : `${e}/${t.path}`
          : ""
        : e;
    }
    function Gt(e) {
      const t = e.children && e.children.map(Gt),
        n = t
          ? Object.assign(Object.assign({}, e), { children: t })
          : Object.assign({}, e);
      return (
        !n.component &&
          (t || n.loadChildren) &&
          n.outlet &&
          n.outlet !== Q &&
          (n.component = zt),
        n
      );
    }
    const Zt = new o.InjectionToken("ROUTES");
    class Kt {
      constructor(e, t, n, r) {
        (this.loader = e),
          (this.compiler = t),
          (this.onLoadStartListener = n),
          (this.onLoadEndListener = r);
      }
      load(e, t) {
        return (
          this.onLoadStartListener && this.onLoadStartListener(t),
          this.loadModuleFactory(t.loadChildren).pipe(
            Object(p.map)((n) => {
              this.onLoadEndListener && this.onLoadEndListener(t);
              const r = n.create(e);
              return new st(ee(r.injector.get(Zt)).map(Gt), r);
            })
          )
        );
      }
      loadModuleFactory(e) {
        return "string" == typeof e
          ? Object(s.from)(this.loader.load(e))
          : re(e()).pipe(
              Object(S.mergeMap)((e) =>
                e instanceof o.NgModuleFactory
                  ? Object(i.of)(e)
                  : Object(s.from)(this.compiler.compileModuleAsync(e))
              )
            );
      }
    }
    class Yt {
      constructor() {
        (this.outlet = null),
          (this.route = null),
          (this.resolver = null),
          (this.children = new Jt()),
          (this.attachRef = null);
      }
    }
    class Jt {
      constructor() {
        this.contexts = new Map();
      }
      onChildOutletCreated(e, t) {
        const n = this.getOrCreateContext(e);
        (n.outlet = t), this.contexts.set(e, n);
      }
      onChildOutletDestroyed(e) {
        const t = this.getContext(e);
        t && (t.outlet = null);
      }
      onOutletDeactivated() {
        const e = this.contexts;
        return (this.contexts = new Map()), e;
      }
      onOutletReAttached(e) {
        this.contexts = e;
      }
      getOrCreateContext(e) {
        let t = this.getContext(e);
        return t || ((t = new Yt()), this.contexts.set(e, t)), t;
      }
      getContext(e) {
        return this.contexts.get(e) || null;
      }
    }
    class Xt {}
    class en {
      shouldProcessUrl(e) {
        return !0;
      }
      extract(e) {
        return e;
      }
      merge(e, t) {
        return e;
      }
    }
    function tn(e) {
      throw e;
    }
    function nn(e, t, n) {
      return t.parse("/");
    }
    function rn(e, t) {
      return Object(i.of)(null);
    }
    let on = (() => {
        class e {
          constructor(e, t, n, r, i, s, a, c) {
            (this.rootComponentType = e),
              (this.urlSerializer = t),
              (this.rootContexts = n),
              (this.location = r),
              (this.config = c),
              (this.lastSuccessfulNavigation = null),
              (this.currentNavigation = null),
              (this.lastLocationChangeInfo = null),
              (this.navigationId = 0),
              (this.isNgZoneEnabled = !1),
              (this.events = new h.Subject()),
              (this.errorHandler = tn),
              (this.malformedUriErrorHandler = nn),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1),
              (this.hooks = {
                beforePreactivation: rn,
                afterPreactivation: rn,
              }),
              (this.urlHandlingStrategy = new en()),
              (this.routeReuseStrategy = new $t()),
              (this.onSameUrlNavigation = "ignore"),
              (this.paramsInheritanceStrategy = "emptyOnly"),
              (this.urlUpdateStrategy = "deferred"),
              (this.relativeLinkResolution = "legacy"),
              (this.ngModule = i.get(o.NgModuleRef)),
              (this.console = i.get(o["\u0275Console"]));
            const l = i.get(o.NgZone);
            (this.isNgZoneEnabled = l instanceof o.NgZone),
              this.resetConfig(c),
              (this.currentUrlTree = new ae(new ce([], {}), {}, null)),
              (this.rawUrlTree = this.currentUrlTree),
              (this.browserUrlTree = this.currentUrlTree),
              (this.configLoader = new Kt(
                s,
                a,
                (e) => this.triggerEvent(new U(e)),
                (e) => this.triggerEvent(new B(e))
              )),
              (this.routerState = Pe(
                this.currentUrlTree,
                this.rootComponentType
              )),
              (this.transitions = new u.BehaviorSubject({
                id: 0,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.currentUrlTree,
                extractedUrl: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                urlAfterRedirects: this.urlHandlingStrategy.extract(
                  this.currentUrlTree
                ),
                rawUrl: this.currentUrlTree,
                extras: {},
                resolve: null,
                reject: null,
                promise: Promise.resolve(!0),
                source: "imperative",
                restoredState: null,
                currentSnapshot: this.routerState.snapshot,
                targetSnapshot: null,
                currentRouterState: this.routerState,
                targetRouterState: null,
                guards: { canActivateChecks: [], canDeactivateChecks: [] },
                guardsResult: null,
              })),
              (this.navigations = this.setupNavigations(this.transitions)),
              this.processNavigations();
          }
          setupNavigations(e) {
            const t = this.events;
            return e.pipe(
              Object(w.filter)((e) => 0 !== e.id),
              Object(p.map)((e) =>
                Object.assign(Object.assign({}, e), {
                  extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
                })
              ),
              Object(y.switchMap)((e) => {
                let n = !1,
                  r = !1;
                return Object(i.of)(e).pipe(
                  Object(O.tap)((e) => {
                    this.currentNavigation = {
                      id: e.id,
                      initialUrl: e.currentRawUrl,
                      extractedUrl: e.extractedUrl,
                      trigger: e.source,
                      extras: e.extras,
                      previousNavigation: this.lastSuccessfulNavigation
                        ? Object.assign(
                            Object.assign({}, this.lastSuccessfulNavigation),
                            { previousNavigation: null }
                          )
                        : null,
                    };
                  }),
                  Object(y.switchMap)((e) => {
                    const n =
                      !this.navigated ||
                      e.extractedUrl.toString() !==
                        this.browserUrlTree.toString();
                    if (
                      ("reload" === this.onSameUrlNavigation || n) &&
                      this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                    )
                      return Object(i.of)(e).pipe(
                        Object(y.switchMap)((e) => {
                          const n = this.transitions.getValue();
                          return (
                            t.next(
                              new k(
                                e.id,
                                this.serializeUrl(e.extractedUrl),
                                e.source,
                                e.restoredState
                              )
                            ),
                            n !== this.transitions.getValue() ? f.EMPTY : [e]
                          );
                        }),
                        Object(y.switchMap)((e) => Promise.resolve(e)),
                        ((r = this.ngModule.injector),
                        (o = this.configLoader),
                        (s = this.urlSerializer),
                        (u = this.config),
                        function (e) {
                          return e.pipe(
                            Object(y.switchMap)((e) =>
                              (function (e, t, n, r, o) {
                                return new mt(e, t, n, r, o).apply();
                              })(r, o, s, e.extractedUrl, u).pipe(
                                Object(p.map)((t) =>
                                  Object.assign(Object.assign({}, e), {
                                    urlAfterRedirects: t,
                                  })
                                )
                              )
                            )
                          );
                        }),
                        Object(O.tap)((e) => {
                          this.currentNavigation = Object.assign(
                            Object.assign({}, this.currentNavigation),
                            { finalUrl: e.urlAfterRedirects }
                          );
                        }),
                        (function (e, t, n, r, o) {
                          return function (i) {
                            return i.pipe(
                              Object(S.mergeMap)((i) =>
                                (function (
                                  e,
                                  t,
                                  n,
                                  r,
                                  o = "emptyOnly",
                                  i = "legacy"
                                ) {
                                  return new Tt(e, t, n, r, o, i).recognize();
                                })(
                                  e,
                                  t,
                                  i.urlAfterRedirects,
                                  n(i.urlAfterRedirects),
                                  r,
                                  o
                                ).pipe(
                                  Object(p.map)((e) =>
                                    Object.assign(Object.assign({}, i), {
                                      targetSnapshot: e,
                                    })
                                  )
                                )
                              )
                            );
                          };
                        })(
                          this.rootComponentType,
                          this.config,
                          (e) => this.serializeUrl(e),
                          this.paramsInheritanceStrategy,
                          this.relativeLinkResolution
                        ),
                        Object(O.tap)((e) => {
                          "eager" === this.urlUpdateStrategy &&
                            (e.extras.skipLocationChange ||
                              this.setBrowserUrl(
                                e.urlAfterRedirects,
                                !!e.extras.replaceUrl,
                                e.id,
                                e.extras.state
                              ),
                            (this.browserUrlTree = e.urlAfterRedirects));
                        }),
                        Object(O.tap)((e) => {
                          const n = new P(
                            e.id,
                            this.serializeUrl(e.extractedUrl),
                            this.serializeUrl(e.urlAfterRedirects),
                            e.targetSnapshot
                          );
                          t.next(n);
                        })
                      );
                    var r, o, s, u;
                    if (
                      n &&
                      this.rawUrlTree &&
                      this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)
                    ) {
                      const {
                          id: n,
                          extractedUrl: r,
                          source: o,
                          restoredState: s,
                          extras: u,
                        } = e,
                        a = new k(n, this.serializeUrl(r), o, s);
                      t.next(a);
                      const c = Pe(r, this.rootComponentType).snapshot;
                      return Object(i.of)(
                        Object.assign(Object.assign({}, e), {
                          targetSnapshot: c,
                          urlAfterRedirects: r,
                          extras: Object.assign(Object.assign({}, u), {
                            skipLocationChange: !1,
                            replaceUrl: !1,
                          }),
                        })
                      );
                    }
                    return (
                      (this.rawUrlTree = e.rawUrl),
                      (this.browserUrlTree = e.urlAfterRedirects),
                      e.resolve(null),
                      f.EMPTY
                    );
                  }),
                  Ut((e) => {
                    const {
                      targetSnapshot: t,
                      id: n,
                      extractedUrl: r,
                      rawUrl: o,
                      extras: { skipLocationChange: i, replaceUrl: s },
                    } = e;
                    return this.hooks.beforePreactivation(t, {
                      navigationId: n,
                      appliedUrlTree: r,
                      rawUrlTree: o,
                      skipLocationChange: !!i,
                      replaceUrl: !!s,
                    });
                  }),
                  Object(O.tap)((e) => {
                    const t = new N(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      this.serializeUrl(e.urlAfterRedirects),
                      e.targetSnapshot
                    );
                    this.triggerEvent(t);
                  }),
                  Object(p.map)((e) =>
                    Object.assign(Object.assign({}, e), {
                      guards: Dt(
                        e.targetSnapshot,
                        e.currentSnapshot,
                        this.rootContexts
                      ),
                    })
                  ),
                  (function (e, t) {
                    return function (n) {
                      return n.pipe(
                        Object(S.mergeMap)((n) => {
                          const {
                            targetSnapshot: r,
                            currentSnapshot: o,
                            guards: {
                              canActivateChecks: u,
                              canDeactivateChecks: a,
                            },
                          } = n;
                          return 0 === a.length && 0 === u.length
                            ? Object(i.of)(
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: !0,
                                })
                              )
                            : (function (e, t, n, r) {
                                return Object(s.from)(e).pipe(
                                  Object(S.mergeMap)((e) =>
                                    (function (e, t, n, r, o) {
                                      const s =
                                        t && t.routeConfig
                                          ? t.routeConfig.canDeactivate
                                          : null;
                                      if (!s || 0 === s.length)
                                        return Object(i.of)(!0);
                                      const u = s.map((i) => {
                                        const s = Et(i, t, o);
                                        let u;
                                        if (
                                          (function (e) {
                                            return e && ut(e.canDeactivate);
                                          })(s)
                                        )
                                          u = re(s.canDeactivate(e, t, n, r));
                                        else {
                                          if (!ut(s))
                                            throw new Error(
                                              "Invalid CanDeactivate guard"
                                            );
                                          u = re(s(e, t, n, r));
                                        }
                                        return u.pipe(Object(E.first)());
                                      });
                                      return Object(i.of)(u).pipe(lt());
                                    })(e.component, e.route, n, t, r)
                                  ),
                                  Object(E.first)((e) => !0 !== e, !0)
                                );
                              })(a, r, o, e).pipe(
                                Object(S.mergeMap)((n) =>
                                  n && "boolean" == typeof n
                                    ? (function (e, t, n, r) {
                                        return Object(s.from)(t).pipe(
                                          Object(D.concatMap)((t) =>
                                            Object(s.from)([
                                              It(t.route.parent, r),
                                              xt(t.route, r),
                                              jt(e, t.path, n),
                                              At(e, t.route, n),
                                            ]).pipe(
                                              Object(g.concatAll)(),
                                              Object(E.first)(
                                                (e) => !0 !== e,
                                                !0
                                              )
                                            )
                                          ),
                                          Object(E.first)((e) => !0 !== e, !0)
                                        );
                                      })(r, u, e, t)
                                    : Object(i.of)(n)
                                ),
                                Object(p.map)((e) =>
                                  Object.assign(Object.assign({}, n), {
                                    guardsResult: e,
                                  })
                                )
                              );
                        })
                      );
                    };
                  })(this.ngModule.injector, (e) => this.triggerEvent(e)),
                  Object(O.tap)((e) => {
                    if (at(e.guardsResult)) {
                      const t = K(
                        `Redirecting to "${this.serializeUrl(e.guardsResult)}"`
                      );
                      throw ((t.url = e.guardsResult), t);
                    }
                  }),
                  Object(O.tap)((e) => {
                    const t = new M(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      this.serializeUrl(e.urlAfterRedirects),
                      e.targetSnapshot,
                      !!e.guardsResult
                    );
                    this.triggerEvent(t);
                  }),
                  Object(w.filter)((e) => {
                    if (!e.guardsResult) {
                      this.resetUrlToCurrentUrlTree();
                      const n = new R(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        ""
                      );
                      return t.next(n), e.resolve(!1), !1;
                    }
                    return !0;
                  }),
                  Ut((e) => {
                    if (e.guards.canActivateChecks.length)
                      return Object(i.of)(e).pipe(
                        Object(O.tap)((e) => {
                          const t = new L(
                            e.id,
                            this.serializeUrl(e.extractedUrl),
                            this.serializeUrl(e.urlAfterRedirects),
                            e.targetSnapshot
                          );
                          this.triggerEvent(t);
                        }),
                        Object(y.switchMap)((e) => {
                          let n = !1;
                          return Object(i.of)(e).pipe(
                            ((r = this.paramsInheritanceStrategy),
                            (o = this.ngModule.injector),
                            function (e) {
                              return e.pipe(
                                Object(S.mergeMap)((e) => {
                                  const {
                                    targetSnapshot: t,
                                    guards: { canActivateChecks: n },
                                  } = e;
                                  if (!n.length) return Object(i.of)(e);
                                  let u = 0;
                                  return Object(s.from)(n).pipe(
                                    Object(D.concatMap)((e) =>
                                      (function (e, t, n, r) {
                                        return (function (e, t, n, r) {
                                          const o = Object.keys(e);
                                          if (0 === o.length)
                                            return Object(i.of)({});
                                          const u = {};
                                          return Object(s.from)(o).pipe(
                                            Object(S.mergeMap)((o) =>
                                              (function (e, t, n, r) {
                                                const o = Et(e, t, r);
                                                return re(
                                                  o.resolve
                                                    ? o.resolve(t, n)
                                                    : o(t, n)
                                                );
                                              })(e[o], t, n, r).pipe(
                                                Object(O.tap)((e) => {
                                                  u[o] = e;
                                                })
                                              )
                                            ),
                                            Object(x.takeLast)(1),
                                            Object(S.mergeMap)(() =>
                                              Object.keys(u).length === o.length
                                                ? Object(i.of)(u)
                                                : f.EMPTY
                                            )
                                          );
                                        })(e._resolve, e, t, r).pipe(
                                          Object(p.map)(
                                            (t) => (
                                              (e._resolvedData = t),
                                              (e.data = Object.assign(
                                                Object.assign({}, e.data),
                                                Me(e, n).resolve
                                              )),
                                              null
                                            )
                                          )
                                        );
                                      })(e.route, t, r, o)
                                    ),
                                    Object(O.tap)(() => u++),
                                    Object(x.takeLast)(1),
                                    Object(S.mergeMap)((t) =>
                                      u === n.length ? Object(i.of)(e) : f.EMPTY
                                    )
                                  );
                                })
                              );
                            }),
                            Object(O.tap)({
                              next: () => (n = !0),
                              complete: () => {
                                if (!n) {
                                  const n = new R(
                                    e.id,
                                    this.serializeUrl(e.extractedUrl),
                                    "At least one route resolver didn't emit any value."
                                  );
                                  t.next(n), e.resolve(!1);
                                }
                              },
                            })
                          );
                          var r, o;
                        }),
                        Object(O.tap)((e) => {
                          const t = new V(
                            e.id,
                            this.serializeUrl(e.extractedUrl),
                            this.serializeUrl(e.urlAfterRedirects),
                            e.targetSnapshot
                          );
                          this.triggerEvent(t);
                        })
                      );
                  }),
                  Ut((e) => {
                    const {
                      targetSnapshot: t,
                      id: n,
                      extractedUrl: r,
                      rawUrl: o,
                      extras: { skipLocationChange: i, replaceUrl: s },
                    } = e;
                    return this.hooks.afterPreactivation(t, {
                      navigationId: n,
                      appliedUrlTree: r,
                      rawUrlTree: o,
                      skipLocationChange: !!i,
                      replaceUrl: !!s,
                    });
                  }),
                  Object(p.map)((e) => {
                    const t = (function (e, t, n) {
                      const r = ze(e, t._root, n ? n._root : void 0);
                      return new Fe(r, t);
                    })(
                      this.routeReuseStrategy,
                      e.targetSnapshot,
                      e.currentRouterState
                    );
                    return Object.assign(Object.assign({}, e), {
                      targetRouterState: t,
                    });
                  }),
                  Object(O.tap)((e) => {
                    (this.currentUrlTree = e.urlAfterRedirects),
                      (this.rawUrlTree = this.urlHandlingStrategy.merge(
                        this.currentUrlTree,
                        e.rawUrl
                      )),
                      (this.routerState = e.targetRouterState),
                      "deferred" === this.urlUpdateStrategy &&
                        (e.extras.skipLocationChange ||
                          this.setBrowserUrl(
                            this.rawUrlTree,
                            !!e.extras.replaceUrl,
                            e.id,
                            e.extras.state
                          ),
                        (this.browserUrlTree = e.urlAfterRedirects));
                  }),
                  ((o = this.rootContexts),
                  (u = this.routeReuseStrategy),
                  (a = (e) => this.triggerEvent(e)),
                  Object(p.map)(
                    (e) => (
                      new ot(
                        u,
                        e.targetRouterState,
                        e.currentRouterState,
                        a
                      ).activate(o),
                      e
                    )
                  )),
                  Object(O.tap)({
                    next() {
                      n = !0;
                    },
                    complete() {
                      n = !0;
                    },
                  }),
                  Object(I.finalize)(() => {
                    if (!n && !r) {
                      this.resetUrlToCurrentUrlTree();
                      const n = new R(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                      );
                      t.next(n), e.resolve(!1);
                    }
                    this.currentNavigation = null;
                  }),
                  Object(C.catchError)((n) => {
                    if (((r = !0), (o = n) && o.ngNavigationCancelingError)) {
                      const r = at(n.url);
                      r ||
                        ((this.navigated = !0),
                        this.resetStateAndUrl(
                          e.currentRouterState,
                          e.currentUrlTree,
                          e.rawUrl
                        ));
                      const o = new R(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        n.message
                      );
                      t.next(o),
                        r
                          ? setTimeout(() => {
                              const t = this.urlHandlingStrategy.merge(
                                n.url,
                                this.rawUrlTree
                              );
                              return this.scheduleNavigation(
                                t,
                                "imperative",
                                null,
                                {
                                  skipLocationChange:
                                    e.extras.skipLocationChange,
                                  replaceUrl:
                                    "eager" === this.urlUpdateStrategy,
                                },
                                {
                                  resolve: e.resolve,
                                  reject: e.reject,
                                  promise: e.promise,
                                }
                              );
                            }, 0)
                          : e.resolve(!1);
                    } else {
                      this.resetStateAndUrl(
                        e.currentRouterState,
                        e.currentUrlTree,
                        e.rawUrl
                      );
                      const r = new F(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        n
                      );
                      t.next(r);
                      try {
                        e.resolve(this.errorHandler(n));
                      } catch (i) {
                        e.reject(i);
                      }
                    }
                    var o;
                    return f.EMPTY;
                  })
                );
                var o, u, a;
              })
            );
          }
          resetRootComponentType(e) {
            (this.rootComponentType = e),
              (this.routerState.root.component = this.rootComponentType);
          }
          getTransition() {
            const e = this.transitions.value;
            return (e.urlAfterRedirects = this.browserUrlTree), e;
          }
          setTransition(e) {
            this.transitions.next(
              Object.assign(Object.assign({}, this.getTransition()), e)
            );
          }
          initialNavigation() {
            this.setUpLocationChangeListener(),
              0 === this.navigationId &&
                this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
          }
          setUpLocationChangeListener() {
            this.locationSubscription ||
              (this.locationSubscription = this.location.subscribe((e) => {
                const t = this.extractLocationChangeInfoFromEvent(e);
                this.shouldScheduleNavigation(this.lastLocationChangeInfo, t) &&
                  setTimeout(() => {
                    const { source: e, state: n, urlTree: r } = t,
                      o = { replaceUrl: !0 };
                    if (n) {
                      const e = Object.assign({}, n);
                      delete e.navigationId,
                        0 !== Object.keys(e).length && (o.state = e);
                    }
                    this.scheduleNavigation(r, e, n, o);
                  }, 0),
                  (this.lastLocationChangeInfo = t);
              }));
          }
          extractLocationChangeInfoFromEvent(e) {
            var t;
            return {
              source: "popstate" === e.type ? "popstate" : "hashchange",
              urlTree: this.parseUrl(e.url),
              state: (
                null === (t = e.state) || void 0 === t ? void 0 : t.navigationId
              )
                ? e.state
                : null,
              transitionId: this.getTransition().id,
            };
          }
          shouldScheduleNavigation(e, t) {
            if (!e) return !0;
            const n = t.urlTree.toString() === e.urlTree.toString();
            return !(
              t.transitionId === e.transitionId &&
              n &&
              (("hashchange" === t.source && "popstate" === e.source) ||
                ("popstate" === t.source && "hashchange" === e.source))
            );
          }
          get url() {
            return this.serializeUrl(this.currentUrlTree);
          }
          getCurrentNavigation() {
            return this.currentNavigation;
          }
          triggerEvent(e) {
            this.events.next(e);
          }
          resetConfig(e) {
            qt(e),
              (this.config = e.map(Gt)),
              (this.navigated = !1),
              (this.lastSuccessfulId = -1);
          }
          ngOnDestroy() {
            this.dispose();
          }
          dispose() {
            this.locationSubscription &&
              (this.locationSubscription.unsubscribe(),
              (this.locationSubscription = void 0));
          }
          createUrlTree(e, t = {}) {
            const {
              relativeTo: n,
              queryParams: r,
              fragment: i,
              preserveQueryParams: s,
              queryParamsHandling: u,
              preserveFragment: a,
            } = t;
            Object(o.isDevMode)() &&
              s &&
              console &&
              console.warn &&
              console.warn(
                "preserveQueryParams is deprecated, use queryParamsHandling instead."
              );
            const c = n || this.routerState.root,
              l = a ? this.currentUrlTree.fragment : i;
            let d = null;
            if (u)
              switch (u) {
                case "merge":
                  d = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case "preserve":
                  d = this.currentUrlTree.queryParams;
                  break;
                default:
                  d = r || null;
              }
            else d = s ? this.currentUrlTree.queryParams : r || null;
            return (
              null !== d && (d = this.removeEmptyProps(d)),
              (function (e, t, n, r, o) {
                if (0 === n.length) return Qe(t.root, t.root, t, r, o);
                const i = (function (e) {
                  if ("string" == typeof e[0] && 1 === e.length && "/" === e[0])
                    return new Ze(!0, 0, e);
                  let t = 0,
                    n = !1;
                  const r = e.reduce((e, r, o) => {
                    if ("object" == typeof r && null != r) {
                      if (r.outlets) {
                        const t = {};
                        return (
                          ne(r.outlets, (e, n) => {
                            t[n] = "string" == typeof e ? e.split("/") : e;
                          }),
                          [...e, { outlets: t }]
                        );
                      }
                      if (r.segmentPath) return [...e, r.segmentPath];
                    }
                    return "string" != typeof r
                      ? [...e, r]
                      : 0 === o
                      ? (r.split("/").forEach((r, o) => {
                          (0 == o && "." === r) ||
                            (0 == o && "" === r
                              ? (n = !0)
                              : ".." === r
                              ? t++
                              : "" != r && e.push(r));
                        }),
                        e)
                      : [...e, r];
                  }, []);
                  return new Ze(n, t, r);
                })(n);
                if (i.toRoot()) return Qe(t.root, new ce([], {}), t, r, o);
                const s = (function (e, t, n) {
                    if (e.isAbsolute) return new Ke(t.root, !0, 0);
                    if (-1 === n.snapshot._lastPathIndex) {
                      const e = n.snapshot._urlSegment;
                      return new Ke(e, e === t.root, 0);
                    }
                    const r = We(e.commands[0]) ? 0 : 1;
                    return (function (e, t, n) {
                      let r = e,
                        o = t,
                        i = n;
                      for (; i > o; ) {
                        if (((i -= o), (r = r.parent), !r))
                          throw new Error("Invalid number of '../'");
                        o = r.segments.length;
                      }
                      return new Ke(r, !1, o - i);
                    })(
                      n.snapshot._urlSegment,
                      n.snapshot._lastPathIndex + r,
                      e.numberOfDoubleDots
                    );
                  })(i, t, e),
                  u = s.processChildren
                    ? Xe(s.segmentGroup, s.index, i.commands)
                    : Je(s.segmentGroup, s.index, i.commands);
                return Qe(s.segmentGroup, u, t, r, o);
              })(c, this.currentUrlTree, e, d, l)
            );
          }
          navigateByUrl(e, t = { skipLocationChange: !1 }) {
            Object(o.isDevMode)() &&
              this.isNgZoneEnabled &&
              !o.NgZone.isInAngularZone() &&
              this.console.warn(
                "Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?"
              );
            const n = at(e) ? e : this.parseUrl(e),
              r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
            return this.scheduleNavigation(r, "imperative", null, t);
          }
          navigate(e, t = { skipLocationChange: !1 }) {
            return (
              (function (e) {
                for (let t = 0; t < e.length; t++) {
                  const n = e[t];
                  if (null == n)
                    throw new Error(
                      `The requested path contains ${n} segment at index ${t}`
                    );
                }
              })(e),
              this.navigateByUrl(this.createUrlTree(e, t), t)
            );
          }
          serializeUrl(e) {
            return this.urlSerializer.serialize(e);
          }
          parseUrl(e) {
            let t;
            try {
              t = this.urlSerializer.parse(e);
            } catch (n) {
              t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
            }
            return t;
          }
          isActive(e, t) {
            if (at(e)) return oe(this.currentUrlTree, e, t);
            const n = this.parseUrl(e);
            return oe(this.currentUrlTree, n, t);
          }
          removeEmptyProps(e) {
            return Object.keys(e).reduce((t, n) => {
              const r = e[n];
              return null != r && (t[n] = r), t;
            }, {});
          }
          processNavigations() {
            this.navigations.subscribe(
              (e) => {
                (this.navigated = !0),
                  (this.lastSuccessfulId = e.id),
                  this.events.next(
                    new T(
                      e.id,
                      this.serializeUrl(e.extractedUrl),
                      this.serializeUrl(this.currentUrlTree)
                    )
                  ),
                  (this.lastSuccessfulNavigation = this.currentNavigation),
                  (this.currentNavigation = null),
                  e.resolve(!0);
              },
              (e) => {
                this.console.warn("Unhandled Navigation Error: ");
              }
            );
          }
          scheduleNavigation(e, t, n, r, o) {
            const i = this.getTransition(),
              s =
                "imperative" !== t &&
                "imperative" === (null == i ? void 0 : i.source),
              u =
                (this.lastSuccessfulId === i.id || this.currentNavigation
                  ? i.rawUrl
                  : i.urlAfterRedirects
                ).toString() === e.toString();
            if (s && u) return Promise.resolve(!0);
            let a, c, l;
            o
              ? ((a = o.resolve), (c = o.reject), (l = o.promise))
              : (l = new Promise((e, t) => {
                  (a = e), (c = t);
                }));
            const d = ++this.navigationId;
            return (
              this.setTransition({
                id: d,
                source: t,
                restoredState: n,
                currentUrlTree: this.currentUrlTree,
                currentRawUrl: this.rawUrlTree,
                rawUrl: e,
                extras: r,
                resolve: a,
                reject: c,
                promise: l,
                currentSnapshot: this.routerState.snapshot,
                currentRouterState: this.routerState,
              }),
              l.catch((e) => Promise.reject(e))
            );
          }
          setBrowserUrl(e, t, n, r) {
            const o = this.urlSerializer.serialize(e);
            (r = r || {}),
              this.location.isCurrentPathEqualTo(o) || t
                ? this.location.replaceState(
                    o,
                    "",
                    Object.assign(Object.assign({}, r), { navigationId: n })
                  )
                : this.location.go(
                    o,
                    "",
                    Object.assign(Object.assign({}, r), { navigationId: n })
                  );
          }
          resetStateAndUrl(e, t, n) {
            (this.routerState = e),
              (this.currentUrlTree = t),
              (this.rawUrlTree = this.urlHandlingStrategy.merge(
                this.currentUrlTree,
                n
              )),
              this.resetUrlToCurrentUrlTree();
          }
          resetUrlToCurrentUrlTree() {
            this.location.replaceState(
              this.urlSerializer.serialize(this.rawUrlTree),
              "",
              { navigationId: this.lastSuccessfulId }
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275inject"](o.Type),
              o["\u0275\u0275inject"](he),
              o["\u0275\u0275inject"](Jt),
              o["\u0275\u0275inject"](r.Location),
              o["\u0275\u0275inject"](o.Injector),
              o["\u0275\u0275inject"](o.NgModuleFactoryLoader),
              o["\u0275\u0275inject"](o.Compiler),
              o["\u0275\u0275inject"](void 0)
            );
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      sn = (() => {
        class e {
          constructor(e, t, n, r, o) {
            (this.router = e),
              (this.route = t),
              (this.commands = []),
              (this.onChanges = new h.Subject()),
              null == n && r.setAttribute(o.nativeElement, "tabindex", "0");
          }
          ngOnChanges(e) {
            this.onChanges.next(this);
          }
          set routerLink(e) {
            this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
          }
          set preserveQueryParams(e) {
            Object(o.isDevMode)() &&
              console &&
              console.warn &&
              console.warn(
                "preserveQueryParams is deprecated!, use queryParamsHandling instead."
              ),
              (this.preserve = e);
          }
          onClick() {
            const e = {
              skipLocationChange: an(this.skipLocationChange),
              replaceUrl: an(this.replaceUrl),
              state: this.state,
            };
            return this.router.navigateByUrl(this.urlTree, e), !0;
          }
          get urlTree() {
            return this.router.createUrlTree(this.commands, {
              relativeTo: this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              preserveQueryParams: an(this.preserve),
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: an(this.preserveFragment),
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](on),
              o["\u0275\u0275directiveInject"](Ne),
              o["\u0275\u0275injectAttribute"]("tabindex"),
              o["\u0275\u0275directiveInject"](o.Renderer2),
              o["\u0275\u0275directiveInject"](o.ElementRef)
            );
          }),
          (e.ɵdir = o["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
            hostBindings: function (e, t) {
              1 & e &&
                o["\u0275\u0275listener"]("click", function () {
                  return t.onClick();
                });
            },
            inputs: {
              routerLink: "routerLink",
              preserveQueryParams: "preserveQueryParams",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
            },
            features: [o["\u0275\u0275NgOnChangesFeature"]],
          })),
          e
        );
      })(),
      un = (() => {
        class e {
          constructor(e, t, n) {
            (this.router = e),
              (this.route = t),
              (this.locationStrategy = n),
              (this.commands = []),
              (this.onChanges = new h.Subject()),
              (this.subscription = e.events.subscribe((e) => {
                e instanceof T && this.updateTargetUrlAndHref();
              }));
          }
          set routerLink(e) {
            this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
          }
          set preserveQueryParams(e) {
            Object(o.isDevMode)() &&
              console &&
              console.warn &&
              console.warn(
                "preserveQueryParams is deprecated, use queryParamsHandling instead."
              ),
              (this.preserve = e);
          }
          ngOnChanges(e) {
            this.updateTargetUrlAndHref(), this.onChanges.next(this);
          }
          ngOnDestroy() {
            this.subscription.unsubscribe();
          }
          onClick(e, t, n, r, o) {
            if (0 !== e || t || n || r || o) return !0;
            if ("string" == typeof this.target && "_self" != this.target)
              return !0;
            const i = {
              skipLocationChange: an(this.skipLocationChange),
              replaceUrl: an(this.replaceUrl),
              state: this.state,
            };
            return this.router.navigateByUrl(this.urlTree, i), !1;
          }
          updateTargetUrlAndHref() {
            this.href = this.locationStrategy.prepareExternalUrl(
              this.router.serializeUrl(this.urlTree)
            );
          }
          get urlTree() {
            return this.router.createUrlTree(this.commands, {
              relativeTo: this.route,
              queryParams: this.queryParams,
              fragment: this.fragment,
              preserveQueryParams: an(this.preserve),
              queryParamsHandling: this.queryParamsHandling,
              preserveFragment: an(this.preserveFragment),
            });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](on),
              o["\u0275\u0275directiveInject"](Ne),
              o["\u0275\u0275directiveInject"](r.LocationStrategy)
            );
          }),
          (e.ɵdir = o["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [
              ["a", "routerLink", ""],
              ["area", "routerLink", ""],
            ],
            hostVars: 2,
            hostBindings: function (e, t) {
              1 & e &&
                o["\u0275\u0275listener"]("click", function (e) {
                  return t.onClick(
                    e.button,
                    e.ctrlKey,
                    e.shiftKey,
                    e.altKey,
                    e.metaKey
                  );
                }),
                2 & e &&
                  (o["\u0275\u0275hostProperty"](
                    "href",
                    t.href,
                    o["\u0275\u0275sanitizeUrl"]
                  ),
                  o["\u0275\u0275attribute"]("target", t.target));
            },
            inputs: {
              routerLink: "routerLink",
              preserveQueryParams: "preserveQueryParams",
              target: "target",
              queryParams: "queryParams",
              fragment: "fragment",
              queryParamsHandling: "queryParamsHandling",
              preserveFragment: "preserveFragment",
              skipLocationChange: "skipLocationChange",
              replaceUrl: "replaceUrl",
              state: "state",
            },
            features: [o["\u0275\u0275NgOnChangesFeature"]],
          })),
          e
        );
      })();
    function an(e) {
      return "" === e || !!e;
    }
    let cn = (() => {
        class e {
          constructor(e, t, n, r, o, i) {
            (this.router = e),
              (this.element = t),
              (this.renderer = n),
              (this.cdr = r),
              (this.link = o),
              (this.linkWithHref = i),
              (this.classes = []),
              (this.isActive = !1),
              (this.routerLinkActiveOptions = { exact: !1 }),
              (this.routerEventsSubscription = e.events.subscribe((e) => {
                e instanceof T && this.update();
              }));
          }
          ngAfterContentInit() {
            Object(s.from)([
              this.links.changes,
              this.linksWithHrefs.changes,
              Object(i.of)(null),
            ])
              .pipe(Object(A.mergeAll)())
              .subscribe((e) => {
                this.update(), this.subscribeToEachLinkOnChanges();
              });
          }
          subscribeToEachLinkOnChanges() {
            var e;
            null === (e = this.linkInputChangesSubscription) ||
              void 0 === e ||
              e.unsubscribe();
            const t = [
              ...this.links.toArray(),
              ...this.linksWithHrefs.toArray(),
              this.link,
              this.linkWithHref,
            ]
              .filter((e) => !!e)
              .map((e) => e.onChanges);
            this.linkInputChangesSubscription = Object(s.from)(t)
              .pipe(Object(A.mergeAll)())
              .subscribe((e) => {
                this.isActive !== this.isLinkActive(this.router)(e) &&
                  this.update();
              });
          }
          set routerLinkActive(e) {
            const t = Array.isArray(e) ? e : e.split(" ");
            this.classes = t.filter((e) => !!e);
          }
          ngOnChanges(e) {
            this.update();
          }
          ngOnDestroy() {
            var e;
            this.routerEventsSubscription.unsubscribe(),
              null === (e = this.linkInputChangesSubscription) ||
                void 0 === e ||
                e.unsubscribe();
          }
          update() {
            this.links &&
              this.linksWithHrefs &&
              this.router.navigated &&
              Promise.resolve().then(() => {
                const e = this.hasActiveLinks();
                this.isActive !== e &&
                  ((this.isActive = e),
                  this.cdr.markForCheck(),
                  this.classes.forEach((t) => {
                    e
                      ? this.renderer.addClass(this.element.nativeElement, t)
                      : this.renderer.removeClass(
                          this.element.nativeElement,
                          t
                        );
                  }));
              });
          }
          isLinkActive(e) {
            return (t) =>
              e.isActive(t.urlTree, this.routerLinkActiveOptions.exact);
          }
          hasActiveLinks() {
            const e = this.isLinkActive(this.router);
            return (
              (this.link && e(this.link)) ||
              (this.linkWithHref && e(this.linkWithHref)) ||
              this.links.some(e) ||
              this.linksWithHrefs.some(e)
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](on),
              o["\u0275\u0275directiveInject"](o.ElementRef),
              o["\u0275\u0275directiveInject"](o.Renderer2),
              o["\u0275\u0275directiveInject"](o.ChangeDetectorRef),
              o["\u0275\u0275directiveInject"](sn, 8),
              o["\u0275\u0275directiveInject"](un, 8)
            );
          }),
          (e.ɵdir = o["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["", "routerLinkActive", ""]],
            contentQueries: function (e, t, n) {
              var r;
              1 & e &&
                (o["\u0275\u0275contentQuery"](n, sn, !0),
                o["\u0275\u0275contentQuery"](n, un, !0)),
                2 & e &&
                  (o["\u0275\u0275queryRefresh"](
                    (r = o["\u0275\u0275loadQuery"]())
                  ) && (t.links = r),
                  o["\u0275\u0275queryRefresh"](
                    (r = o["\u0275\u0275loadQuery"]())
                  ) && (t.linksWithHrefs = r));
            },
            inputs: {
              routerLinkActiveOptions: "routerLinkActiveOptions",
              routerLinkActive: "routerLinkActive",
            },
            exportAs: ["routerLinkActive"],
            features: [o["\u0275\u0275NgOnChangesFeature"]],
          })),
          e
        );
      })(),
      ln = (() => {
        class e {
          constructor(e, t, n, r, i) {
            (this.parentContexts = e),
              (this.location = t),
              (this.resolver = n),
              (this.changeDetector = i),
              (this.activated = null),
              (this._activatedRoute = null),
              (this.activateEvents = new o.EventEmitter()),
              (this.deactivateEvents = new o.EventEmitter()),
              (this.name = r || Q),
              e.onChildOutletCreated(this.name, this);
          }
          ngOnDestroy() {
            this.parentContexts.onChildOutletDestroyed(this.name);
          }
          ngOnInit() {
            if (!this.activated) {
              const e = this.parentContexts.getContext(this.name);
              e &&
                e.route &&
                (e.attachRef
                  ? this.attach(e.attachRef, e.route)
                  : this.activateWith(e.route, e.resolver || null));
            }
          }
          get isActivated() {
            return !!this.activated;
          }
          get component() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this.activated.instance;
          }
          get activatedRoute() {
            if (!this.activated) throw new Error("Outlet is not activated");
            return this._activatedRoute;
          }
          get activatedRouteData() {
            return this._activatedRoute
              ? this._activatedRoute.snapshot.data
              : {};
          }
          detach() {
            if (!this.activated) throw new Error("Outlet is not activated");
            this.location.detach();
            const e = this.activated;
            return (this.activated = null), (this._activatedRoute = null), e;
          }
          attach(e, t) {
            (this.activated = e),
              (this._activatedRoute = t),
              this.location.insert(e.hostView);
          }
          deactivate() {
            if (this.activated) {
              const e = this.component;
              this.activated.destroy(),
                (this.activated = null),
                (this._activatedRoute = null),
                this.deactivateEvents.emit(e);
            }
          }
          activateWith(e, t) {
            if (this.isActivated)
              throw new Error("Cannot activate an already activated outlet");
            this._activatedRoute = e;
            const n = (t = t || this.resolver).resolveComponentFactory(
                e._futureSnapshot.routeConfig.component
              ),
              r = this.parentContexts.getOrCreateContext(this.name).children,
              o = new dn(e, r, this.location.injector);
            (this.activated = this.location.createComponent(
              n,
              this.location.length,
              o
            )),
              this.changeDetector.markForCheck(),
              this.activateEvents.emit(this.activated.instance);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275directiveInject"](Jt),
              o["\u0275\u0275directiveInject"](o.ViewContainerRef),
              o["\u0275\u0275directiveInject"](o.ComponentFactoryResolver),
              o["\u0275\u0275injectAttribute"]("name"),
              o["\u0275\u0275directiveInject"](o.ChangeDetectorRef)
            );
          }),
          (e.ɵdir = o["\u0275\u0275defineDirective"]({
            type: e,
            selectors: [["router-outlet"]],
            outputs: {
              activateEvents: "activate",
              deactivateEvents: "deactivate",
            },
            exportAs: ["outlet"],
          })),
          e
        );
      })();
    class dn {
      constructor(e, t, n) {
        (this.route = e), (this.childContexts = t), (this.parent = n);
      }
      get(e, t) {
        return e === Ne
          ? this.route
          : e === Jt
          ? this.childContexts
          : this.parent.get(e, t);
      }
    }
    class fn {}
    class hn {
      preload(e, t) {
        return t().pipe(Object(C.catchError)(() => Object(i.of)(null)));
      }
    }
    class pn {
      preload(e, t) {
        return Object(i.of)(null);
      }
    }
    let gn = (() => {
        class e {
          constructor(e, t, n, r, o) {
            (this.router = e),
              (this.injector = r),
              (this.preloadingStrategy = o),
              (this.loader = new Kt(
                t,
                n,
                (t) => e.triggerEvent(new U(t)),
                (t) => e.triggerEvent(new B(t))
              ));
          }
          setUpPreloading() {
            this.subscription = this.router.events
              .pipe(
                Object(w.filter)((e) => e instanceof T),
                Object(D.concatMap)(() => this.preload())
              )
              .subscribe(() => {});
          }
          preload() {
            const e = this.injector.get(o.NgModuleRef);
            return this.processRoutes(e, this.router.config);
          }
          ngOnDestroy() {
            this.subscription && this.subscription.unsubscribe();
          }
          processRoutes(e, t) {
            const n = [];
            for (const r of t)
              if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                const e = r._loadedConfig;
                n.push(this.processRoutes(e.module, e.routes));
              } else
                r.loadChildren && !r.canLoad
                  ? n.push(this.preloadConfig(e, r))
                  : r.children && n.push(this.processRoutes(e, r.children));
            return Object(s.from)(n).pipe(
              Object(A.mergeAll)(),
              Object(p.map)((e) => {})
            );
          }
          preloadConfig(e, t) {
            return this.preloadingStrategy.preload(t, () =>
              this.loader
                .load(e.injector, t)
                .pipe(
                  Object(S.mergeMap)(
                    (e) => (
                      (t._loadedConfig = e),
                      this.processRoutes(e.module, e.routes)
                    )
                  )
                )
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275inject"](on),
              o["\u0275\u0275inject"](o.NgModuleFactoryLoader),
              o["\u0275\u0275inject"](o.Compiler),
              o["\u0275\u0275inject"](o.Injector),
              o["\u0275\u0275inject"](fn)
            );
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })(),
      mn = (() => {
        class e {
          constructor(e, t, n = {}) {
            (this.router = e),
              (this.viewportScroller = t),
              (this.options = n),
              (this.lastId = 0),
              (this.lastSource = "imperative"),
              (this.restoredId = 0),
              (this.store = {}),
              (n.scrollPositionRestoration =
                n.scrollPositionRestoration || "disabled"),
              (n.anchorScrolling = n.anchorScrolling || "disabled");
          }
          init() {
            "disabled" !== this.options.scrollPositionRestoration &&
              this.viewportScroller.setHistoryScrollRestoration("manual"),
              (this.routerEventsSubscription = this.createScrollEvents()),
              (this.scrollEventsSubscription = this.consumeScrollEvents());
          }
          createScrollEvents() {
            return this.router.events.subscribe((e) => {
              e instanceof k
                ? ((this.store[
                    this.lastId
                  ] = this.viewportScroller.getScrollPosition()),
                  (this.lastSource = e.navigationTrigger),
                  (this.restoredId = e.restoredState
                    ? e.restoredState.navigationId
                    : 0))
                : e instanceof T &&
                  ((this.lastId = e.id),
                  this.scheduleScrollEvent(
                    e,
                    this.router.parseUrl(e.urlAfterRedirects).fragment
                  ));
            });
          }
          consumeScrollEvents() {
            return this.router.events.subscribe((e) => {
              e instanceof W &&
                (e.position
                  ? "top" === this.options.scrollPositionRestoration
                    ? this.viewportScroller.scrollToPosition([0, 0])
                    : "enabled" === this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition(e.position)
                  : e.anchor && "enabled" === this.options.anchorScrolling
                  ? this.viewportScroller.scrollToAnchor(e.anchor)
                  : "disabled" !== this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition([0, 0]));
            });
          }
          scheduleScrollEvent(e, t) {
            this.router.triggerEvent(
              new W(
                e,
                "popstate" === this.lastSource
                  ? this.store[this.restoredId]
                  : null,
                t
              )
            );
          }
          ngOnDestroy() {
            this.routerEventsSubscription &&
              this.routerEventsSubscription.unsubscribe(),
              this.scrollEventsSubscription &&
                this.scrollEventsSubscription.unsubscribe();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(
              o["\u0275\u0275inject"](on),
              o["\u0275\u0275inject"](r.ViewportScroller),
              o["\u0275\u0275inject"](void 0)
            );
          }),
          (e.ɵprov = o["\u0275\u0275defineInjectable"]({
            token: e,
            factory: e.ɵfac,
          })),
          e
        );
      })();
    const yn = new o.InjectionToken("ROUTER_CONFIGURATION"),
      bn = new o.InjectionToken("ROUTER_FORROOT_GUARD"),
      vn = [
        r.Location,
        { provide: he, useClass: pe },
        {
          provide: on,
          useFactory: On,
          deps: [
            he,
            Jt,
            r.Location,
            o.Injector,
            o.NgModuleFactoryLoader,
            o.Compiler,
            Zt,
            yn,
            [Xt, new o.Optional()],
            [Bt, new o.Optional()],
          ],
        },
        Jt,
        { provide: Ne, useFactory: xn, deps: [on] },
        {
          provide: o.NgModuleFactoryLoader,
          useClass: o.SystemJsNgModuleLoader,
        },
        gn,
        pn,
        hn,
        { provide: yn, useValue: { enableTracing: !1 } },
      ];
    function _n() {
      return new o.NgProbeToken("Router", on);
    }
    let wn = (() => {
      class e {
        constructor(e, t) {}
        static forRoot(t, n) {
          return {
            ngModule: e,
            providers: [
              vn,
              Sn(t),
              {
                provide: bn,
                useFactory: En,
                deps: [[on, new o.Optional(), new o.SkipSelf()]],
              },
              { provide: yn, useValue: n || {} },
              {
                provide: r.LocationStrategy,
                useFactory: Dn,
                deps: [
                  r.PlatformLocation,
                  [new o.Inject(r.APP_BASE_HREF), new o.Optional()],
                  yn,
                ],
              },
              {
                provide: mn,
                useFactory: Cn,
                deps: [on, r.ViewportScroller, yn],
              },
              {
                provide: fn,
                useExisting:
                  n && n.preloadingStrategy ? n.preloadingStrategy : pn,
              },
              { provide: o.NgProbeToken, multi: !0, useFactory: _n },
              Tn(),
            ],
          };
        }
        static forChild(t) {
          return { ngModule: e, providers: [Sn(t)] };
        }
      }
      return (
        (e.ɵmod = o["\u0275\u0275defineNgModule"]({ type: e })),
        (e.ɵinj = o["\u0275\u0275defineInjector"]({
          factory: function (t) {
            return new (t || e)(
              o["\u0275\u0275inject"](bn, 8),
              o["\u0275\u0275inject"](on, 8)
            );
          },
        })),
        e
      );
    })();
    function Cn(e, t, n) {
      return n.scrollOffset && t.setOffset(n.scrollOffset), new mn(e, t, n);
    }
    function Dn(e, t, n = {}) {
      return n.useHash
        ? new r.HashLocationStrategy(e, t)
        : new r.PathLocationStrategy(e, t);
    }
    function En(e) {
      if (e)
        throw new Error(
          "RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead."
        );
      return "guarded";
    }
    function Sn(e) {
      return [
        { provide: o.ANALYZE_FOR_ENTRY_COMPONENTS, multi: !0, useValue: e },
        { provide: Zt, multi: !0, useValue: e },
      ];
    }
    function On(e, t, n, o, i, s, u, a = {}, c, l) {
      const d = new on(null, e, t, n, o, i, s, ee(u));
      if (
        (c && (d.urlHandlingStrategy = c),
        l && (d.routeReuseStrategy = l),
        a.errorHandler && (d.errorHandler = a.errorHandler),
        a.malformedUriErrorHandler &&
          (d.malformedUriErrorHandler = a.malformedUriErrorHandler),
        a.enableTracing)
      ) {
        const e = Object(r["\u0275getDOM"])();
        d.events.subscribe((t) => {
          e.logGroup("Router Event: " + t.constructor.name),
            e.log(t.toString()),
            e.log(t),
            e.logGroupEnd();
        });
      }
      return (
        a.onSameUrlNavigation &&
          (d.onSameUrlNavigation = a.onSameUrlNavigation),
        a.paramsInheritanceStrategy &&
          (d.paramsInheritanceStrategy = a.paramsInheritanceStrategy),
        a.urlUpdateStrategy && (d.urlUpdateStrategy = a.urlUpdateStrategy),
        a.relativeLinkResolution &&
          (d.relativeLinkResolution = a.relativeLinkResolution),
        d
      );
    }
    function xn(e) {
      return e.routerState.root;
    }
    let In = (() => {
      class e {
        constructor(e) {
          (this.injector = e),
            (this.initNavigation = !1),
            (this.resultOfPreactivationDone = new h.Subject());
        }
        appInitializer() {
          return this.injector
            .get(r.LOCATION_INITIALIZED, Promise.resolve(null))
            .then(() => {
              let e = null;
              const t = new Promise((t) => (e = t)),
                n = this.injector.get(on),
                r = this.injector.get(yn);
              if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) e(!0);
              else if ("disabled" === r.initialNavigation)
                n.setUpLocationChangeListener(), e(!0);
              else {
                if ("enabled" !== r.initialNavigation)
                  throw new Error(
                    `Invalid initialNavigation options: '${r.initialNavigation}'`
                  );
                (n.hooks.afterPreactivation = () =>
                  this.initNavigation
                    ? Object(i.of)(null)
                    : ((this.initNavigation = !0),
                      e(!0),
                      this.resultOfPreactivationDone)),
                  n.initialNavigation();
              }
              return t;
            });
        }
        bootstrapListener(e) {
          const t = this.injector.get(yn),
            n = this.injector.get(gn),
            r = this.injector.get(mn),
            i = this.injector.get(on),
            s = this.injector.get(o.ApplicationRef);
          e === s.components[0] &&
            (this.isLegacyEnabled(t)
              ? i.initialNavigation()
              : this.isLegacyDisabled(t) && i.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            i.resetRootComponentType(s.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(e) {
          return (
            "legacy_enabled" === e.initialNavigation ||
            !0 === e.initialNavigation ||
            void 0 === e.initialNavigation
          );
        }
        isLegacyDisabled(e) {
          return (
            "legacy_disabled" === e.initialNavigation ||
            !1 === e.initialNavigation
          );
        }
      }
      return (
        (e.ɵfac = function (t) {
          return new (t || e)(o["\u0275\u0275inject"](o.Injector));
        }),
        (e.ɵprov = o["\u0275\u0275defineInjectable"]({
          token: e,
          factory: e.ɵfac,
        })),
        e
      );
    })();
    function An(e) {
      return e.appInitializer.bind(e);
    }
    function jn(e) {
      return e.bootstrapListener.bind(e);
    }
    const kn = new o.InjectionToken("Router Initializer");
    function Tn() {
      return [
        In,
        { provide: o.APP_INITIALIZER, multi: !0, useFactory: An, deps: [In] },
        { provide: kn, useFactory: jn, deps: [In] },
        { provide: o.APP_BOOTSTRAP_LISTENER, multi: !0, useExisting: kn },
      ];
    }
    const Rn = new o.Version("10.1.4");
  },
  vkgz: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "tap", function () {
        return s;
      });
    var r = n("7o/Q"),
      o = n("KqfI"),
      i = n("n6bG");
    function s(e, t, n) {
      return function (r) {
        return r.lift(new u(e, t, n));
      };
    }
    class u {
      constructor(e, t, n) {
        (this.nextOrObserver = e), (this.error = t), (this.complete = n);
      }
      call(e, t) {
        return t.subscribe(
          new a(e, this.nextOrObserver, this.error, this.complete)
        );
      }
    }
    class a extends r.Subscriber {
      constructor(e, t, n, r) {
        super(e),
          (this._tapNext = o.noop),
          (this._tapError = o.noop),
          (this._tapComplete = o.noop),
          (this._tapError = n || o.noop),
          (this._tapComplete = r || o.noop),
          Object(i.isFunction)(t)
            ? ((this._context = this), (this._tapNext = t))
            : t &&
              ((this._context = t),
              (this._tapNext = t.next || o.noop),
              (this._tapError = t.error || o.noop),
              (this._tapComplete = t.complete || o.noop));
      }
      _next(e) {
        try {
          this._tapNext.call(this._context, e);
        } catch (t) {
          return void this.destination.error(t);
        }
        this.destination.next(e);
      }
      _error(e) {
        try {
          this._tapError.call(this._context, e);
        } catch (e) {
          return void this.destination.error(e);
        }
        this.destination.error(e);
      }
      _complete() {
        try {
          this._tapComplete.call(this._context);
        } catch (e) {
          return void this.destination.error(e);
        }
        return this.destination.complete();
      }
    }
  },
  w1tV: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "share", function () {
        return u;
      });
    var r = n("oB13"),
      o = n("x+ZX"),
      i = n("XNiG");
    function s() {
      return new i.Subject();
    }
    function u() {
      return (e) => Object(o.refCount)()(Object(r.multicast)(s)(e));
    }
  },
  "x+ZX": function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "refCount", function () {
        return o;
      });
    var r = n("7o/Q");
    function o() {
      return function (e) {
        return e.lift(new i(e));
      };
    }
    class i {
      constructor(e) {
        this.connectable = e;
      }
      call(e, t) {
        const { connectable: n } = this;
        n._refCount++;
        const r = new s(e, n),
          o = t.subscribe(r);
        return r.closed || (r.connection = n.connect()), o;
      }
    }
    class s extends r.Subscriber {
      constructor(e, t) {
        super(e), (this.connectable = t);
      }
      _unsubscribe() {
        const { connectable: e } = this;
        if (!e) return void (this.connection = null);
        this.connectable = null;
        const t = e._refCount;
        if (t <= 0) return void (this.connection = null);
        if (((e._refCount = t - 1), t > 1))
          return void (this.connection = null);
        const { connection: n } = this,
          r = e._connection;
        (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
      }
    }
  },
  xbPD: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "defaultIfEmpty", function () {
        return o;
      });
    var r = n("7o/Q");
    function o(e = null) {
      return (t) => t.lift(new i(e));
    }
    class i {
      constructor(e) {
        this.defaultValue = e;
      }
      call(e, t) {
        return t.subscribe(new s(e, this.defaultValue));
      }
    }
    class s extends r.Subscriber {
      constructor(e, t) {
        super(e), (this.defaultValue = t), (this.isEmpty = !0);
      }
      _next(e) {
        (this.isEmpty = !1), this.destination.next(e);
      }
      _complete() {
        this.isEmpty && this.destination.next(this.defaultValue),
          this.destination.complete();
      }
    }
  },
  yCtX: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "fromArray", function () {
        return s;
      });
    var r = n("HDdC"),
      o = n("ngJS"),
      i = n("jZKg");
    function s(e, t) {
      return t
        ? Object(i.scheduleArray)(e, t)
        : new r.Observable(Object(o.subscribeToArray)(e));
    }
  },
  "z+Ro": function (e, t, n) {
    "use strict";
    function r(e) {
      return e && "function" == typeof e.schedule;
    }
    n.r(t),
      n.d(t, "isScheduler", function () {
        return r;
      });
  },
  zx2A: function (e, t, n) {
    "use strict";
    n.r(t),
      n.d(t, "SimpleInnerSubscriber", function () {
        return s;
      }),
      n.d(t, "ComplexInnerSubscriber", function () {
        return u;
      }),
      n.d(t, "SimpleOuterSubscriber", function () {
        return a;
      }),
      n.d(t, "ComplexOuterSubscriber", function () {
        return c;
      }),
      n.d(t, "innerSubscribe", function () {
        return l;
      });
    var r = n("7o/Q"),
      o = n("HDdC"),
      i = n("SeVD");
    class s extends r.Subscriber {
      constructor(e) {
        super(), (this.parent = e);
      }
      _next(e) {
        this.parent.notifyNext(e);
      }
      _error(e) {
        this.parent.notifyError(e), this.unsubscribe();
      }
      _complete() {
        this.parent.notifyComplete(), this.unsubscribe();
      }
    }
    class u extends r.Subscriber {
      constructor(e, t, n) {
        super(),
          (this.parent = e),
          (this.outerValue = t),
          (this.outerIndex = n);
      }
      _next(e) {
        this.parent.notifyNext(this.outerValue, e, this.outerIndex, this);
      }
      _error(e) {
        this.parent.notifyError(e), this.unsubscribe();
      }
      _complete() {
        this.parent.notifyComplete(this), this.unsubscribe();
      }
    }
    class a extends r.Subscriber {
      notifyNext(e) {
        this.destination.next(e);
      }
      notifyError(e) {
        this.destination.error(e);
      }
      notifyComplete() {
        this.destination.complete();
      }
    }
    class c extends r.Subscriber {
      notifyNext(e, t, n, r) {
        this.destination.next(t);
      }
      notifyError(e) {
        this.destination.error(e);
      }
      notifyComplete(e) {
        this.destination.complete();
      }
    }
    function l(e, t) {
      if (!t.closed)
        return e instanceof o.Observable
          ? e.subscribe(t)
          : Object(i.subscribeTo)(e)(t);
    }
  },
});
