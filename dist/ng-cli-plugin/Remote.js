loadRemoteModuleJsonpCallback('Remote.js',/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/*!*******************************************!*\
  !*** multi ./projects/module/src/main.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chen/my-project/ng-cli-plugin-demo/projects/module/src/main.ts */"AH6B");


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
const MainService = window.importNgNamed('MainService');

/***/ }),

/***/ "AH6B":
/*!*************************************!*\
  !*** ./projects/module/src/main.ts ***!
  \*************************************/
/*! exports provided: component, module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remote_remote_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote/remote.component */ "IBdX");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _remote_remote_component__WEBPACK_IMPORTED_MODULE_0__["RemoteComponent"]; });

/* harmony import */ var _remote_remote_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote/remote.module */ "nIPg");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "module", function() { return _remote_remote_module__WEBPACK_IMPORTED_MODULE_1__["RemoteModule"]; });

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
// if (environment.production) {
// enableProdMode();
// }
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));




/***/ }),

/***/ "IBdX":
/*!********************************************************!*\
  !*** ./projects/module/src/remote/remote.component.ts ***!
  \********************************************************/
/*! exports provided: RemoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteComponent", function() { return RemoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @main/main.service */ "AGyb");
/* harmony import */ var _src_app_show_in_main_show_in_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/app/show-in-main/show-in-main.component */ "OUZ/");



class RemoteComponent {
    constructor(main) {
        this.main = main;
    }
    ngOnInit() { }
    run() {
        console.log('准备执行主模块服务');
        this.main.run();
    }
}
RemoteComponent.ɵfac = function RemoteComponent_Factory(t) { return new (t || RemoteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_main_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
RemoteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteComponent, selectors: [["app-remote"]], decls: 5, vars: 0, consts: [[3, "click"]], template: function RemoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remote works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-show-in-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteComponent_Template_button_click_3_listener() { return ctx.run(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u70B9\u51FB\u6267\u884C\u4E3B\u6A21\u5757\u670D\u52A1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_src_app_show_in_main_show_in_main_component__WEBPACK_IMPORTED_MODULE_2__["ShowInMainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZW1vdGUuY29tcG9uZW50LnNjc3MifQ== */"] });


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
const ShowInMainComponent = window.importNgNamed('ShowInMainComponent');

/***/ }),

/***/ "SH3Y":
/*!***************************************!*\
  !*** ./src/app/show-in-main/index.ts ***!
  \***************************************/
/*! exports provided: ShowInMainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowInMainModule", function() { return ShowInMainModule; });
const ShowInMainModule = window.importNgNamed('ShowInMainModule');

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

/***/ "nIPg":
/*!*****************************************************!*\
  !*** ./projects/module/src/remote/remote.module.ts ***!
  \*****************************************************/
/*! exports provided: RemoteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteModule", function() { return RemoteModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _remote_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote.component */ "IBdX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_show_in_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @main/show-in-main */ "SH3Y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






class RemoteModule {
}
RemoteModule.ɵfac = function RemoteModule_Factory(t) { return new (t || RemoteModule)(); };
RemoteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: RemoteModule });
RemoteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                { path: '', pathMatch: 'full', component: _remote_component__WEBPACK_IMPORTED_MODULE_1__["RemoteComponent"] },
            ]),
            _main_show_in_main__WEBPACK_IMPORTED_MODULE_3__["ShowInMainModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RemoteModule, { declarations: [_remote_component__WEBPACK_IMPORTED_MODULE_1__["RemoteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _main_show_in_main__WEBPACK_IMPORTED_MODULE_3__["ShowInMainModule"]] }); })();


/***/ }),

/***/ "ofXK":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js from dll-reference TLIB ***!
  \********************************************************************************************************/
/*! exports provided: APP_BASE_HREF, AsyncPipe, CommonModule, CurrencyPipe, DOCUMENT, DatePipe, DecimalPipe, FormStyle, FormatWidth, HashLocationStrategy, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, LOCATION_INITIALIZED, Location, LocationStrategy, LowerCasePipe, NgClass, NgComponentOutlet, NgForOf, NgForOfContext, NgIf, NgIfContext, NgLocaleLocalization, NgLocalization, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NumberFormatStyle, NumberSymbol, PathLocationStrategy, PercentPipe, PlatformLocation, Plural, SlicePipe, TitleCasePipe, TranslationWidth, UpperCasePipe, VERSION, ViewportScroller, WeekDay, formatCurrency, formatDate, formatNumber, formatPercent, getCurrencySymbol, getLocaleCurrencyCode, getLocaleCurrencyName, getLocaleCurrencySymbol, getLocaleDateFormat, getLocaleDateTimeFormat, getLocaleDayNames, getLocaleDayPeriods, getLocaleDirection, getLocaleEraNames, getLocaleExtraDayPeriodRules, getLocaleExtraDayPeriods, getLocaleFirstDayOfWeek, getLocaleId, getLocaleMonthNames, getLocaleNumberFormat, getLocaleNumberSymbol, getLocalePluralCase, getLocaleTimeFormat, getLocaleWeekEndRange, getNumberOfCurrencyDigits, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi, registerLocaleData, ɵBrowserPlatformLocation, ɵDomAdapter, ɵNullViewportScroller, ɵPLATFORM_BROWSER_ID, ɵPLATFORM_SERVER_ID, ɵPLATFORM_WORKER_APP_ID, ɵPLATFORM_WORKER_UI_ID, ɵangular_packages_common_common_a, ɵangular_packages_common_common_b, ɵangular_packages_common_common_c, ɵangular_packages_common_common_d, ɵangular_packages_common_common_e, ɵangular_packages_common_common_f, ɵgetDOM, ɵparseCookieValue, ɵsetRootDomAdapter */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("ofXK");

/***/ }),

/***/ "tyNb":
/*!********************************************************************************************************!*\
  !*** delegated ./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js from dll-reference TLIB ***!
  \********************************************************************************************************/
/*! exports provided: ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, ActivationStart, BaseRouteReuseStrategy, ChildActivationEnd, ChildActivationStart, ChildrenOutletContexts, DefaultUrlSerializer, GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, NoPreloading, OutletContext, PRIMARY_OUTLET, PreloadAllModules, PreloadingStrategy, ROUTER_CONFIGURATION, ROUTER_INITIALIZER, ROUTES, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, RouteReuseStrategy, Router, RouterEvent, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterModule, RouterOutlet, RouterPreloader, RouterState, RouterStateSnapshot, RoutesRecognized, Scroll, UrlHandlingStrategy, UrlSegment, UrlSegmentGroup, UrlSerializer, UrlTree, VERSION, convertToParamMap, provideRoutes, ɵEmptyOutletComponent, ɵROUTER_PROVIDERS, ɵangular_packages_router_router_a, ɵangular_packages_router_router_b, ɵangular_packages_router_router_c, ɵangular_packages_router_router_d, ɵangular_packages_router_router_e, ɵangular_packages_router_router_f, ɵangular_packages_router_router_g, ɵangular_packages_router_router_h, ɵangular_packages_router_router_i, ɵangular_packages_router_router_j, ɵangular_packages_router_router_k, ɵangular_packages_router_router_l, ɵangular_packages_router_router_m, ɵangular_packages_router_router_n, ɵangular_packages_router_router_o, ɵassignExtraOptionsToRouter, ɵflatten */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference TLIB */ "e+ej"))("tyNb");

/***/ })

/******/ }));
//# sourceMappingURL=Remote.js.map