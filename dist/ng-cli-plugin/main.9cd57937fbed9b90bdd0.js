(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chen/my-project/ng-cli-plugin-demo/src/main.ts */"zUnb");


/***/ }),

/***/ "3Pt+":
/*!******************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js from dll-reference TLIB ***!
  \******************************************************************************************************/
/*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_bf, ɵangular_packages_forms_forms_bg, ɵangular_packages_forms_forms_bh, ɵangular_packages_forms_forms_bi, ɵangular_packages_forms_forms_bj, ɵangular_packages_forms_forms_bk, ɵangular_packages_forms_forms_bl, ɵangular_packages_forms_forms_bm, ɵangular_packages_forms_forms_bn, ɵangular_packages_forms_forms_bo, ɵangular_packages_forms_forms_bp, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("3Pt+");

/***/ }),

/***/ "AGyb":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class MainService {
    constructor() { }
    run() {
        console.log('main!!!!主模块');
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
;;

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: true
};
;;

/***/ }),

/***/ "OUZ/":
/*!********************************************************!*\
  !*** ./src/app/show-in-main/show-in-main.component.ts ***!
  \********************************************************/
/*! exports provided: ShowInMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInMainComponent", function() { return ShowInMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ShowInMainComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowInMainComponent.ɵfac = function ShowInMainComponent_Factory(t) { return new (t || ShowInMainComponent)(); };
ShowInMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowInMainComponent, selectors: [["app-show-in-main"]], decls: 2, vars: 0, template: function ShowInMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u8FD9\u4E2A\u6A21\u5757\u662F\u5728\u4E3B\u9879\u76EE\u4E2D\u58F0\u660E\u7684,\u53EF\u4EE5\u88AB\u5B50\u9879\u76EE\u4E2D\u8C03\u7528\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWluLW1haW4uY29tcG9uZW50LnNjc3MifQ== */"] });
;;

/***/ }),

/***/ "SH3Y":
/*!***************************************!*\
  !*** ./src/app/show-in-main/index.ts ***!
  \***************************************/
/*! exports provided: ShowInMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _show_in_main_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-in-main.module */ "tG5n");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowInMainModule", function() { return _show_in_main_module__WEBPACK_IMPORTED_MODULE_0__["ShowInMainModule"]; });


;;

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = function (a0) { return [a0]; };
class AppComponent {
    constructor(injector, cfr, viewContainerRef, router) {
        this.injector = injector;
        this.cfr = cfr;
        this.viewContainerRef = viewContainerRef;
        this.router = router;
        this.title = 'ng-cli-plugin';
        this.routerUrl = '';
        this.routerPath = '';
    }
    ngOnInit() { }
    reset() {
        this.router.resetConfig([
            {
                path: this.routerPath,
                loadChildren: () => loadRemoteModule(this.routerUrl).then((e) => e.module),
            },
        ]);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 18, vars: 5, consts: [[3, "routerLink"], ["action", ""], ["for", ""], ["type", "text", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u4E3B\u9879\u76EE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u70B9\u51FB\u8DF3\u8F6C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u8DEF\u7531\u8DEF\u5F84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_8_listener($event) { return ctx.routerPath = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u8DEF\u7531\u6A21\u5757\u5730\u5740");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_12_listener($event) { return ctx.routerUrl = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u8BBE\u7F6E\u8DEF\u7531");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u51FA\u53E3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.routerPath));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.routerPath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.routerUrl);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
;;

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main.service */ "AGyb");
/* harmony import */ var _show_in_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-in-main */ "SH3Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
            // {
            //   path: 'remote',
            //   loadChildren: () => {
            //     return (window as any).loadRemoteModule('./Remote.js').then((e) => {
            //       console.log(e);
            //       return e.RemoteModule;
            //     });
            //   },
            // },
            ], { relativeLinkResolution: 'legacy' }),
            _show_in_main__WEBPACK_IMPORTED_MODULE_6__["ShowInMainModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _show_in_main__WEBPACK_IMPORTED_MODULE_6__["ShowInMainModule"]] }); })();
;window.exportNgNamed('MainService',_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]);window.exportNgNamed('AppComponent',_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]);window.exportNgNamed('AppRoutingModule',_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]);window.exportNgNamed('ShowInMainModule',_show_in_main__WEBPACK_IMPORTED_MODULE_6__["ShowInMainModule"]);

/***/ }),

/***/ "e+ej":
/*!***********************!*\
  !*** external "TLIB" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = TLIB;

/***/ }),

/***/ "fXoL":
/*!****************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js from dll-reference TLIB ***!
  \****************************************************************************************************/
/*! exports provided: ANALYZE_FOR_ENTRY_COMPONENTS, APP_BOOTSTRAP_LISTENER, APP_ID, APP_INITIALIZER, ApplicationInitStatus, ApplicationModule, ApplicationRef, Attribute, COMPILER_OPTIONS, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectionStrategy, ChangeDetectorRef, Compiler, CompilerFactory, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ContentChild, ContentChildren, DEFAULT_CURRENCY_CODE, DebugElement, DebugEventListener, DebugNode, DefaultIterableDiffer, Directive, ElementRef, EmbeddedViewRef, ErrorHandler, EventEmitter, Host, HostBinding, HostListener, INJECTOR, Inject, InjectFlags, Injectable, InjectionToken, Injector, Input, IterableDiffers, KeyValueDiffers, LOCALE_ID, MissingTranslationStrategy, ModuleWithComponentFactories, NO_ERRORS_SCHEMA, NgModule, NgModuleFactory, NgModuleFactoryLoader, NgModuleRef, NgProbeToken, NgZone, Optional, Output, PACKAGE_ROOT_URL, PLATFORM_ID, PLATFORM_INITIALIZER, Pipe, PlatformRef, Query, QueryList, ReflectiveInjector, ReflectiveKey, Renderer2, RendererFactory2, RendererStyleFlags2, ResolvedReflectiveFactory, Sanitizer, SecurityContext, Self, SimpleChange, SkipSelf, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TRANSLATIONS, TRANSLATIONS_FORMAT, TemplateRef, Testability, TestabilityRegistry, Type, VERSION, Version, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation, ViewRef, WrappedValue, asNativeElements, assertPlatform, createPlatform, createPlatformFactory, defineInjectable, destroyPlatform, enableProdMode, forwardRef, getDebugNode, getModuleFactory, getPlatform, inject, isDevMode, platformCore, resolveForwardRef, setTestabilityGetter, ɵ0, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵCREATE_ATTRIBUTE_DECORATOR__POST_R3__, ɵChangeDetectorStatus, ɵCodegenComponentFactoryResolver, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__, ɵCompiler_compileModuleAndAllComponentsSync__POST_R3__, ɵCompiler_compileModuleAsync__POST_R3__, ɵCompiler_compileModuleSync__POST_R3__, ɵComponentFactory, ɵConsole, ɵDEFAULT_LOCALE_ID, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵINJECTOR_IMPL__POST_R3__, ɵINJECTOR_SCOPE, ɵLifecycleHooksFeature, ɵLocaleDataIndex, ɵNG_COMP_DEF, ɵNG_DIR_DEF, ɵNG_ELEMENT_ID, ɵNG_INJ_DEF, ɵNG_MOD_DEF, ɵNG_PIPE_DEF, ɵNG_PROV_DEF, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵNO_CHANGE, ɵNgModuleFactory, ɵNoopNgZone, ɵReflectionCapabilities, ɵRender3ComponentFactory, ɵRender3ComponentRef, ɵRender3NgModuleRef, ɵSWITCH_CHANGE_DETECTOR_REF_FACTORY__POST_R3__, ɵSWITCH_COMPILE_COMPONENT__POST_R3__, ɵSWITCH_COMPILE_DIRECTIVE__POST_R3__, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__, ɵSWITCH_COMPILE_NGMODULE__POST_R3__, ɵSWITCH_COMPILE_PIPE__POST_R3__, ɵSWITCH_ELEMENT_REF_FACTORY__POST_R3__, ɵSWITCH_IVY_ENABLED__POST_R3__, ɵSWITCH_RENDERER2_FACTORY__POST_R3__, ɵSWITCH_TEMPLATE_REF_FACTORY__POST_R3__, ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__, ɵ_sanitizeHtml, ɵ_sanitizeUrl, ɵallowSanitizationBypassAndThrow, ɵand, ɵangular_packages_core_core_a, ɵangular_packages_core_core_b, ɵangular_packages_core_core_ba, ɵangular_packages_core_core_bb, ɵangular_packages_core_core_bc, ɵangular_packages_core_core_bd, ɵangular_packages_core_core_be, ɵangular_packages_core_core_bf, ɵangular_packages_core_core_bg, ɵangular_packages_core_core_bh, ɵangular_packages_core_core_bi, ɵangular_packages_core_core_bj, ɵangular_packages_core_core_bl, ɵangular_packages_core_core_bm, ɵangular_packages_core_core_bn, ɵangular_packages_core_core_bo, ɵangular_packages_core_core_bp, ɵangular_packages_core_core_bq, ɵangular_packages_core_core_br, ɵangular_packages_core_core_bs, ɵangular_packages_core_core_bv, ɵangular_packages_core_core_bw, ɵangular_packages_core_core_bx, ɵangular_packages_core_core_bz, ɵangular_packages_core_core_c, ɵangular_packages_core_core_cb, ɵangular_packages_core_core_cc, ɵangular_packages_core_core_d, ɵangular_packages_core_core_e, ɵangular_packages_core_core_f, ɵangular_packages_core_core_g, ɵangular_packages_core_core_h, ɵangular_packages_core_core_i, ɵangular_packages_core_core_j, ɵangular_packages_core_core_k, ɵangular_packages_core_core_l, ɵangular_packages_core_core_m, ɵangular_packages_core_core_n, ɵangular_packages_core_core_o, ɵangular_packages_core_core_p, ɵangular_packages_core_core_q, ɵangular_packages_core_core_r, ɵangular_packages_core_core_s, ɵangular_packages_core_core_t, ɵangular_packages_core_core_u, ɵangular_packages_core_core_v, ɵangular_packages_core_core_w, ɵangular_packages_core_core_x, ɵangular_packages_core_core_y, ɵangular_packages_core_core_z, ɵbypassSanitizationTrustHtml, ɵbypassSanitizationTrustResourceUrl, ɵbypassSanitizationTrustScript, ɵbypassSanitizationTrustStyle, ɵbypassSanitizationTrustUrl, ɵccf, ɵclearOverrides, ɵclearResolutionOfComponentResourcesQueue, ɵcmf, ɵcompileComponent, ɵcompileDirective, ɵcompileNgModule, ɵcompileNgModuleDefs, ɵcompileNgModuleFactory__POST_R3__, ɵcompilePipe, ɵcreateInjector, ɵcrt, ɵdefaultIterableDiffers, ɵdefaultKeyValueDiffers, ɵdetectChanges, ɵdevModeEqual, ɵdid, ɵeld, ɵfindLocaleData, ɵflushModuleScopingQueueAsMuchAsPossible, ɵgetComponentViewDefinitionFactory, ɵgetDebugNodeR2, ɵgetDebugNode__POST_R3__, ɵgetDirectives, ɵgetHostElement, ɵgetInjectableDef, ɵgetLContext, ɵgetLocaleCurrencyCode, ɵgetLocalePluralCase, ɵgetModuleFactory__POST_R3__, ɵgetSanitizationBypassType, ɵglobal, ɵinitServicesIfNeeded, ɵinlineInterpolate, ɵinterpolate, ɵisBoundToModule__POST_R3__, ɵisDefaultChangeDetectionStrategy, ɵisListLikeIterable, ɵisObservable, ɵisPromise, ɵisSubscribable, ɵivyEnabled, ɵmakeDecorator, ɵmarkDirty, ɵmod, ɵmpd, ɵncd, ɵnoSideEffects, ɵnov, ɵoverrideComponentView, ɵoverrideProvider, ɵpad, ɵpatchComponentDefWithScope, ɵpid, ɵpod, ɵppd, ɵprd, ɵpublishDefaultGlobalUtils, ɵpublishGlobalUtil, ɵqud, ɵregisterLocaleData, ɵregisterModuleFactory, ɵregisterNgModuleType, ɵrenderComponent, ɵresetCompiledComponents, ɵresetJitOptions, ɵresolveComponentResources, ɵsetClassMetadata, ɵsetCurrentInjector, ɵsetDocument, ɵsetLocaleId, ɵstore, ɵstringify, ɵted, ɵtransitiveScopesFor, ɵunregisterLocaleData, ɵunv, ɵunwrapSafeValue, ɵvid, ɵwhenRendered, ɵɵCopyDefinitionFeature, ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵProvidersFeature, ɵɵadvance, ɵɵattribute, ɵɵattributeInterpolate1, ɵɵattributeInterpolate2, ɵɵattributeInterpolate3, ɵɵattributeInterpolate4, ɵɵattributeInterpolate5, ɵɵattributeInterpolate6, ɵɵattributeInterpolate7, ɵɵattributeInterpolate8, ɵɵattributeInterpolateV, ɵɵclassMap, ɵɵclassMapInterpolate1, ɵɵclassMapInterpolate2, ɵɵclassMapInterpolate3, ɵɵclassMapInterpolate4, ɵɵclassMapInterpolate5, ɵɵclassMapInterpolate6, ɵɵclassMapInterpolate7, ɵɵclassMapInterpolate8, ɵɵclassMapInterpolateV, ɵɵclassProp, ɵɵcontentQuery, ɵɵdefineComponent, ɵɵdefineDirective, ɵɵdefineInjectable, ɵɵdefineInjector, ɵɵdefineNgModule, ɵɵdefinePipe, ɵɵdirectiveInject, ɵɵdisableBindings, ɵɵelement, ɵɵelementContainer, ɵɵelementContainerEnd, ɵɵelementContainerStart, ɵɵelementEnd, ɵɵelementStart, ɵɵenableBindings, ɵɵgetCurrentView, ɵɵgetInheritedFactory, ɵɵhostProperty, ɵɵi18n, ɵɵi18nApply, ɵɵi18nAttributes, ɵɵi18nEnd, ɵɵi18nExp, ɵɵi18nPostprocess, ɵɵi18nStart, ɵɵinject, ɵɵinjectAttribute, ɵɵinjectPipeChangeDetectorRef, ɵɵinvalidFactory, ɵɵinvalidFactoryDep, ɵɵlistener, ɵɵloadQuery, ɵɵnamespaceHTML, ɵɵnamespaceMathML, ɵɵnamespaceSVG, ɵɵnextContext, ɵɵngDeclareComponent, ɵɵngDeclareDirective, ɵɵngDeclarePipe, ɵɵpipe, ɵɵpipeBind1, ɵɵpipeBind2, ɵɵpipeBind3, ɵɵpipeBind4, ɵɵpipeBindV, ɵɵprojection, ɵɵprojectionDef, ɵɵproperty, ɵɵpropertyInterpolate, ɵɵpropertyInterpolate1, ɵɵpropertyInterpolate2, ɵɵpropertyInterpolate3, ɵɵpropertyInterpolate4, ɵɵpropertyInterpolate5, ɵɵpropertyInterpolate6, ɵɵpropertyInterpolate7, ɵɵpropertyInterpolate8, ɵɵpropertyInterpolateV, ɵɵpureFunction0, ɵɵpureFunction1, ɵɵpureFunction2, ɵɵpureFunction3, ɵɵpureFunction4, ɵɵpureFunction5, ɵɵpureFunction6, ɵɵpureFunction7, ɵɵpureFunction8, ɵɵpureFunctionV, ɵɵqueryRefresh, ɵɵreference, ɵɵresolveBody, ɵɵresolveDocument, ɵɵresolveWindow, ɵɵrestoreView, ɵɵsanitizeHtml, ɵɵsanitizeResourceUrl, ɵɵsanitizeScript, ɵɵsanitizeStyle, ɵɵsanitizeUrl, ɵɵsanitizeUrlOrResourceUrl, ɵɵsetComponentScope, ɵɵsetNgModuleScope, ɵɵstyleMap, ɵɵstyleMapInterpolate1, ɵɵstyleMapInterpolate2, ɵɵstyleMapInterpolate3, ɵɵstyleMapInterpolate4, ɵɵstyleMapInterpolate5, ɵɵstyleMapInterpolate6, ɵɵstyleMapInterpolate7, ɵɵstyleMapInterpolate8, ɵɵstyleMapInterpolateV, ɵɵstyleProp, ɵɵstylePropInterpolate1, ɵɵstylePropInterpolate2, ɵɵstylePropInterpolate3, ɵɵstylePropInterpolate4, ɵɵstylePropInterpolate5, ɵɵstylePropInterpolate6, ɵɵstylePropInterpolate7, ɵɵstylePropInterpolate8, ɵɵstylePropInterpolateV, ɵɵsyntheticHostListener, ɵɵsyntheticHostProperty, ɵɵtemplate, ɵɵtemplateRefExtractor, ɵɵtext, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵtextInterpolate2, ɵɵtextInterpolate3, ɵɵtextInterpolate4, ɵɵtextInterpolate5, ɵɵtextInterpolate6, ɵɵtextInterpolate7, ɵɵtextInterpolate8, ɵɵtextInterpolateV, ɵɵtrustConstantHtml, ɵɵtrustConstantResourceUrl, ɵɵviewQuery */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("fXoL");

/***/ }),

/***/ "jhN1":
/*!****************************************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js from dll-reference TLIB ***!
  \****************************************************************************************************************************/
/*! exports provided: ɵgetDOM, BrowserModule, BrowserTransferStateModule, By, DomSanitizer, EVENT_MANAGER_PLUGINS, EventManager, HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerModule, Meta, Title, TransferState, VERSION, disableDebugTools, enableDebugTools, makeStateKey, platformBrowser, ɵBROWSER_SANITIZATION_PROVIDERS, ɵBROWSER_SANITIZATION_PROVIDERS__POST_R3__, ɵBrowserDomAdapter, ɵBrowserGetTestability, ɵDomEventsPlugin, ɵDomRendererFactory2, ɵDomSanitizerImpl, ɵDomSharedStylesHost, ɵELEMENT_PROBE_PROVIDERS, ɵELEMENT_PROBE_PROVIDERS__POST_R3__, ɵHAMMER_PROVIDERS__POST_R3__, ɵHammerGesturesPlugin, ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS, ɵKeyEventsPlugin, ɵNAMESPACE_URIS, ɵSharedStylesHost, ɵTRANSITION_ID, ɵangular_packages_platform_browser_platform_browser_a, ɵangular_packages_platform_browser_platform_browser_b, ɵangular_packages_platform_browser_platform_browser_c, ɵangular_packages_platform_browser_platform_browser_d, ɵangular_packages_platform_browser_platform_browser_e, ɵangular_packages_platform_browser_platform_browser_f, ɵangular_packages_platform_browser_platform_browser_g, ɵangular_packages_platform_browser_platform_browser_h, ɵangular_packages_platform_browser_platform_browser_i, ɵangular_packages_platform_browser_platform_browser_j, ɵangular_packages_platform_browser_platform_browser_k, ɵangular_packages_platform_browser_platform_browser_l, ɵangular_packages_platform_browser_platform_browser_m, ɵangular_packages_platform_browser_platform_browser_n, ɵangular_packages_platform_browser_platform_browser_o, ɵescapeHtml, ɵflattenStyles, ɵinitDomAdapter, ɵshimContentAttribute, ɵshimHostAttribute */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("jhN1");

/***/ }),

/***/ "ofXK":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js from dll-reference TLIB ***!
  \********************************************************************************************************/
/*! exports provided: APP_BASE_HREF, AsyncPipe, CommonModule, CurrencyPipe, DOCUMENT, DatePipe, DecimalPipe, FormStyle, FormatWidth, HashLocationStrategy, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LOCATION_INITIALIZED, Location, LocationStrategy, LowerCasePipe, NgClass, NgComponentOutlet, NgForOf, NgForOfContext, NgIf, NgIfContext, NgLocaleLocalization, NgLocalization, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NumberFormatStyle, NumberSymbol, PathLocationStrategy, PercentPipe, PlatformLocation, Plural, SlicePipe, TitleCasePipe, TranslationWidth, UpperCasePipe, VERSION, ViewportScroller, WeekDay, formatCurrency, formatDate, formatNumber, formatPercent, getCurrencySymbol, getLocaleCurrencyCode, getLocaleCurrencyName, getLocaleCurrencySymbol, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleDayNames, getLocaleDayPeriods, getLocaleDirection, getLocaleEraNames, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocaleFirstDayOfWeek, getLocaleId, getLocaleMonthNames, getLocaleNumberFormat, getLocaleNumberSymbol, getLocalePluralCase, getLocaleTimeFormat, getLocaleWeekEndRange, getNumberOfCurrencyDigits, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi, registerLocaleData, ɵBrowserPlatformLocation, ɵDomAdapter, ɵNullViewportScroller, ɵPLATFORM_BROWSER_ID, ɵPLATFORM_SERVER_ID, ɵPLATFORM_WORKER_APP_ID, ɵPLATFORM_WORKER_UI_ID, ɵangular_packages_common_common_a, ɵangular_packages_common_common_b, ɵangular_packages_common_common_c, ɵangular_packages_common_common_d, ɵangular_packages_common_common_e, ɵangular_packages_common_common_f, ɵgetDOM, ɵparseCookieValue, ɵsetRootDomAdapter */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("ofXK");

/***/ }),

/***/ "tG5n":
/*!*****************************************************!*\
  !*** ./src/app/show-in-main/show-in-main.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowInMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInMainModule", function() { return ShowInMainModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_in_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-in-main.component */ "OUZ/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ShowInMainModule {
}
ShowInMainModule.ɵfac = function ShowInMainModule_Factory(t) { return new (t || ShowInMainModule)(); };
ShowInMainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShowInMainModule });
ShowInMainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShowInMainModule, { declarations: [_show_in_main_component__WEBPACK_IMPORTED_MODULE_1__["ShowInMainComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_show_in_main_component__WEBPACK_IMPORTED_MODULE_1__["ShowInMainComponent"]] }); })();
;window.exportNgNamed('ShowInMainComponent',_show_in_main_component__WEBPACK_IMPORTED_MODULE_1__["ShowInMainComponent"]);

/***/ }),

/***/ "tyNb":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js from dll-reference TLIB ***!
  \********************************************************************************************************/
/*! exports provided: ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, ActivationStart, BaseRouteReuseStrategy, ChildActivationEnd, ChildActivationStart, ChildrenOutletContexts, DefaultUrlSerializer, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, NoPreloading, OutletContext, PRIMARY_OUTLET, PreloadAllModules, PreloadingStrategy, ROUTER_CONFIGURATION, ROUTER_INITIALIZER, ROUTES, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, RouteReuseStrategy, Router, RouterEvent, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule, RouterOutlet, RouterPreloader, RouterState, RouterStateSnapshot, RoutesRecognized, Scroll, UrlHandlingStrategy, UrlSegment, UrlSegmentGroup, UrlSerializer, UrlTree, VERSION, convertToParamMap, provideRoutes, ɵEmptyOutletComponent, ɵROUTER_PROVIDERS, ɵangular_packages_router_router_a, ɵangular_packages_router_router_b, ɵangular_packages_router_router_c, ɵangular_packages_router_router_d, ɵangular_packages_router_router_e, ɵangular_packages_router_router_f, ɵangular_packages_router_router_g, ɵangular_packages_router_router_h, ɵangular_packages_router_router_i, ɵangular_packages_router_router_j, ɵangular_packages_router_router_k, ɵangular_packages_router_router_l, ɵangular_packages_router_router_m, ɵangular_packages_router_router_n, ɵangular_packages_router_router_o, ɵassignExtraOptionsToRouter, ɵflatten */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("tyNb");

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();
;;

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));
;window.exportNgNamed('AppModule',_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);window.exportNgNamed('environment',_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"]);

/***/ })

},[[0,"runtime"]]]);
//# sourceMappingURL=main.9cd57937fbed9b90bdd0.js.map