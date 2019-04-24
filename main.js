(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'portfolio';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/about/about.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"about-andesenv\" id=\"inicio\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        SOBRE MIM\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"box-info col-sm-6\">\r\n        <div class=\"code\">\r\n          <h3>\r\n            <span style=\"color: #97C774\">H</span>\r\n            <span style=\"color: #B63E98\">e</span>\r\n            <span style=\"color: #D18E62\">l</span>\r\n            <span style=\"color: #DB3E41\">l</span>\r\n            <span style=\"color: #1BABA5\">o</span>,\r\n            I speak code\r\n          </h3>\r\n        </div>\r\n        <p>\r\n          Olá, eu sou Lucas Anderson. Atualmente trabalho na empresa Wooza, onde ajudo a criar novas features, realizo manutenção e contribuo na integração de serviços com a API usando os framework AngularJS e React;\r\n        </p>\r\n        <div class=\"group-button\">\r\n          <a download=\"LucasLima-Curriculo\" href=\"./assets/LLima-Currículo.pdf\">\r\n            <button class=\"btn btn-outline-secondary cv\" type=\"button\">\r\n              <i class=\"fa fa-download\"></i> Baixar Currículo\r\n            </button>\r\n          </a>\r\n          <button class=\"btn btn-outline-secondary info\" type=\"button\">\r\n            Mais Informações\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"box-skill col-sm-6\">\r\n        <div class=\"bar expert\">\r\n          <p>\r\n            HTML 5\r\n          </p>\r\n        </div>\r\n        <div class=\"bar expert\">\r\n          <p>\r\n            CSS 3 (LESS - SASS)\r\n          </p>\r\n        </div>\r\n        <div class=\"bar advanced\">\r\n          <p>\r\n            JavaScript (ES6)\r\n          </p>\r\n        </div>\r\n        <div class=\"bar advanced\">\r\n          <p>\r\n            Git (GITHUB)\r\n          </p>\r\n        </div>\r\n        <div class=\"bar intermediate\">\r\n          <p>\r\n            Angular 2+\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/about/about.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/about/about.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".about-andesenv {\n  color: #bbbbbb;\n  background: #151515;\n  padding: 100px 0; }\n  .about-andesenv .sobre {\n    margin-bottom: 80px; }\n  .about-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .about-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .about-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .about-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .about-andesenv .box-info h3 {\n    font: 100 1.2em 'Droid Sans Mono';\n    margin-bottom: 15px; }\n  .about-andesenv .box-info h3:after {\n      content: '';\n      border-right: .125em  solid white;\n      -webkit-animation: typing 2s steps(21, end), blink 0.5s step-end infinite alternate;\n              animation: typing 2s steps(21, end), blink 0.5s step-end infinite alternate; }\n  @-webkit-keyframes blink {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: .5; }\n  100% {\n    opacity: 1; } }\n  @keyframes blink {\n  0% {\n    opacity: 0; }\n  50% {\n    opacity: .5; }\n  100% {\n    opacity: 1; } }\n  .about-andesenv .box-info p {\n    font: 100 1em 'Droid Sans Mono';\n    margin: 0 40px 50px 0; }\n  .about-andesenv .box-info .group-button {\n    text-align: center; }\n  .about-andesenv .box-info .group-button button {\n      text-transform: uppercase;\n      font: 700 1.1em monospace;\n      padding: 10px; }\n  .about-andesenv .box-info .group-button button.cv {\n        color: #5383d3;\n        border-color: #5383d3;\n        margin-right: 5%; }\n  .about-andesenv .box-info .group-button button.cv:hover {\n          color: #ffffff;\n          border-color: #202020; }\n  .about-andesenv .box-info .group-button button.info {\n        cursor: no-drop; }\n  .about-andesenv .box-skill {\n    font-family: Roboto Slab; }\n  .about-andesenv .box-skill .bar {\n      padding: 2px;\n      margin: 0 0 10px 40px;\n      font-weight: bold; }\n  .about-andesenv .box-skill .bar:after {\n        content: \"\";\n        display: inline-block;\n        padding: 5px 0 5px 0px;\n        border-radius: 15px;\n        background-color: #5383d3; }\n  .about-andesenv .box-skill .bar:nth-last-child(1) {\n        margin-bottom: 0px; }\n  .about-andesenv .box-skill .bar.intermediate::after {\n      width: calc(60% - 10px); }\n  .about-andesenv .box-skill .bar.advanced::after {\n      width: calc(80% - 10px); }\n  .about-andesenv .box-skill .bar.expert::after {\n      width: calc(90% - 10px); }\n  @media (max-width: 880px) {\n  .about-andesenv .group-button {\n    margin-bottom: 60px; }\n  .about-andesenv .box-skill .bar {\n    margin: 0 0 10px 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9hYm91dC9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZVxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Fib3V0L0M6XFxVc2Vyc1xcbHVjYXNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcUG9ydGZvbGlvL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQ0lrQjtFREhsQixtQkNIa0I7RURJbEIsZ0JBQWdCLEVBQUE7RUFIcEI7SUFNUSxtQkFBbUIsRUFBQTtFQU4zQjtNQVNZLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFFekIsWUFBWSxFQUFBO0VBWnhCO1FBZWdCLGdCQUFnQixFQUFBO0VBZmhDO1VBa0JvQixtQkNmQztVRGdCRCxXQUFXO1VBQ1gsY0FBYztVQUNkLFdBQVcsRUFBQTtFQXJCL0I7WUF1QndCLGtCQUFrQjtZQUNsQixXQUFXLEVBQUE7RUF4Qm5DO0lBaUNZLGlDQUFpQztJQUNqQyxtQkFBbUIsRUFBQTtFQWxDL0I7TUFxQ2dCLFdBQVc7TUFDWCxpQ0FBaUM7TUFDakMsbUZBQTBFO2NBQTFFLDJFQUEwRSxFQUFBO0VBRTFFO0VBQ0k7SUFBRyxVQUFVLEVBQUE7RUFDYjtJQUFJLFdBQVcsRUFBQTtFQUNmO0lBQUssVUFBVSxFQUFBLEVBQUE7RUFIbkI7RUFDSTtJQUFHLFVBQVUsRUFBQTtFQUNiO0lBQUksV0FBVyxFQUFBO0VBQ2Y7SUFBSyxVQUFVLEVBQUEsRUFBQTtFQTVDbkM7SUFrRFksK0JBQStCO0lBQy9CLHFCQUFxQixFQUFBO0VBbkRqQztJQXVEWSxrQkFBa0IsRUFBQTtFQXZEOUI7TUF5RGdCLHlCQUF5QjtNQUN6Qix5QkFBeUI7TUFDekIsYUFBYSxFQUFBO0VBM0Q3QjtRQThEb0IsY0MzREM7UUQ0REQscUJDNURDO1FENkRELGdCQUFnQixFQUFBO0VBaEVwQztVQW1Fd0IsY0M3REg7VUQ4REcscUJDcEVILEVBQUE7RURBckI7UUF5RW9CLGVBQWUsRUFBQTtFQXpFbkM7SUFnRlEsd0JBQXdCLEVBQUE7RUFoRmhDO01BbUZZLFlBQVk7TUFDWixxQkFBcUI7TUFDckIsaUJBQWlCLEVBQUE7RUFyRjdCO1FBd0ZnQixXQUFZO1FBQ1oscUJBQXFCO1FBQ3JCLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIseUJDekZLLEVBQUE7RURIckI7UUFnR2dCLGtCQUFrQixFQUFBO0VBaEdsQztNQXFHWSx1QkFBdUIsRUFBQTtFQXJHbkM7TUF3R1ksdUJBQXVCLEVBQUE7RUF4R25DO01BMkdZLHVCQUF1QixFQUFBO0VBS25DO0VBQ0k7SUFFUSxtQkFBbUIsRUFBQTtFQUYzQjtJQU1RLG9CQUFvQixFQUFBLEVBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmFib3V0LWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICRvY3RhdmUtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkc2Vjb25kLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuc29icmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi50b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94LWluZm97XHJcbiAgICAgICAgaDN7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAxLjJlbSAnRHJvaWQgU2FucyBNb25vJztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDsgICBcclxuXHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IC4xMjVlbSAgc29saWQgd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHR5cGluZyAycyBzdGVwcygyMSwgZW5kKSwgYmxpbmsgLjVzIHN0ZXAtZW5kIGluZmluaXRlIGFsdGVybmF0ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGJsaW5re1xyXG4gICAgICAgICAgICAgICAgICAgIDAle29wYWNpdHk6IDA7fVxyXG4gICAgICAgICAgICAgICAgICAgIDUwJXtvcGFjaXR5OiAuNTt9XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwJXtvcGFjaXR5OiAxO31cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMWVtICdEcm9pZCBTYW5zIE1vbm8nO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNDBweCA1MHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLmdyb3VwLWJ1dHRvbntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udDogNzAwIDEuMWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICYuY3Z7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJG5pbnRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICR0aGlyZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJi5pbmZve1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm94LXNraWxse1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8gU2xhYjtcclxuXHJcbiAgICAgICAgLmJhcntcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICBcIlwiO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDAgNXB4IDBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7ICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaXh0aC1jb2xvcjsgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFyLmludGVybWVkaWF0ZTo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDYwJSAtIDEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFyLmFkdmFuY2VkOjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoODAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYXIuZXhwZXJ0OjphZnRlcntcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAgIC5hYm91dC1hbmRlc2VudntcclxuICAgICAgICAuZ3JvdXAtYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJveC1za2lsbCAuYmFye1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcclxuJHNlY29uZC1jb2xvcjogIzE1MTUxNTtcclxuJHRoaXJkLWNvbG9yOiAjMjAyMDIwO1xyXG4kZm91cnRoLWNvbG9yOiAjMjkyOTI5O1xyXG4kZmlmdGgtY29sb3I6ICMzMzM4M2I7XHJcbiRzaXh0aC1jb2xvcjogIzUzODNkMztcclxuJHRoaXJ0eS1jb2xvcjogIzhmOTI5NjtcclxuJG9jdGF2ZS1jb2xvcjogI2JiYmJiYjtcclxuJG5pbnRoLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjogIzMwM2EzYjtcclxuJGVzcGVjaWFsLWNvbG9yLWZvbnQ6ICM0ZDVkNWY7Il19 */"

/***/ }),

/***/ "./src/app/home/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/home/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/home/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/home/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-andesenv\" id=\"contato\">\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <h3>Lucas<span>AnDesenv</span>Lima</h3>\r\n\r\n    <p class=\"footer-links\">\r\n      <a href=\"#inicio\">INICIO</a>\r\n      ·\r\n      <a href=\"#portfolio\">PORTFÓLIO</a>\r\n      ·\r\n      <a href=\"#trainning\">TRAINNING</a>\r\n      ·\r\n      <a href=\"#library\">BIBLIOTECA</a>\r\n      ·\r\n      <a href=\"#smartphone\">APLICATIVO</a>\r\n    </p>\r\n\r\n    <p class=\"footer-my-name\">Copyright 2019 &copy; Lucas Anderson S. Lima</p>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-center\">\r\n\r\n    <div>\r\n      <i class=\"fa fa-map-marker\"></i>\r\n      <p><span>Barra da Tijuca</span> Rio de Janeiro, Brasil</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-phone\"></i>\r\n      <p>21 96700 1399</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <p><a href=\"mailto:lucasand96@gmail.com\">lucasand96@gmail.com</a></p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-right\">\r\n\r\n    <p class=\"footer-company-about\">\r\n      <span>\r\n        Redes Sociais:\r\n      </span>\r\n    </p>\r\n\r\n    <div class=\"footer-icons\">\r\n      <a data-tooltip=\"Behance\" href=\"https://www.behance.net/lucasand96e131\" target=\"_blank\">\r\n        <i class=\"fab fa-behance\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Bitbucket\" href=\"https://bitbucket.org/AndLucas/\" target=\"_blank\">\r\n        <i class=\"fab fa-gitlab\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Codepen\" href=\"https://codepen.io/LucasAnd/\" target=\"_blank\">\r\n        <i class=\"fab fa-codepen\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Discord\" href=\"discord:LucasAnderson#2418\" target=\"_blank\">\r\n        <i class=\"fab fa-discord\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Email\" href=\"mailto:lucasand96@gmail.com\" target=\"_blank\">\r\n        <i class=\"fa fa-envelope-square\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Github\" href=\"https://github.com/LuAnderson\" target=\"_blank\">\r\n        <i class=\"fab fa-github\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Gitlab\" href=\"https://gitlab.com/LuAnderson\" target=\"_blank\">\r\n        <i class=\"fab fa-bitbucket\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Instagram\" href=\"https://www.instagram.com/and_luc/\" target=\"_blank\">\r\n        <i class=\"fab fa-instagram\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Linkedin\" href=\"https://linkedin.com/in/lucas-anderson-b7a035a7/\" target=\"_blank\">\r\n        <i class=\"fab fa-linkedin\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Medium\" href=\"https://medium.com/@lucasand96\" target=\"_blank\">\r\n        <i class=\"fab fa-medium\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Skype\" href=\"skype:luccas.and\" target=\"_blank\">\r\n        <i class=\"fab fa-skype\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Stackoverflow\" href=\"https://pt.stackoverflow.com/users/76967/lucas-anderson\" target=\"_blank\">\r\n        <i class=\"fab fa-stack-overflow\"></i>\r\n      </a>\r\n      <a data-tooltip=\"Twitter\" href=\"https://twitter.com/_LucAnd\" target=\"_blank\">\r\n        <i class=\"fab fa-twitter\"></i>\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/home/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-andesenv {\n  background-color: #000000;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n  width: 100%;\n  text-align: left;\n  font: bold 16px sans-serif;\n  padding: 55px 50px; }\n  .footer-andesenv .footer-left,\n  .footer-andesenv .footer-center,\n  .footer-andesenv .footer-right {\n    display: inline-block;\n    vertical-align: top; }\n  .footer-andesenv .footer-left {\n    width: 40%; }\n  .footer-andesenv .footer-left h3 {\n      color: #ffffff;\n      font: normal 2em 'Cookie', cursive;\n      margin: 0; }\n  .footer-andesenv .footer-left h3 span {\n        color: #5383d3; }\n  .footer-andesenv .footer-left .footer-links {\n      color: #ffffff;\n      margin: 20px 0 12px;\n      padding: 0;\n      font-size: 18px; }\n  .footer-andesenv .footer-left .footer-links a {\n        display: inline-block;\n        line-height: 1.8;\n        text-decoration: none;\n        color: inherit; }\n  .footer-andesenv .footer-left .footer-links a:hover {\n          color: #5383d3; }\n  .footer-andesenv .footer-my-name {\n    color: #8f9296;\n    font: 100 14px Roboto Slab;\n    margin: 2.5rem 0; }\n  .footer-andesenv .footer-center {\n    width: 35%; }\n  .footer-andesenv .footer-center p {\n      display: inline-block;\n      color: #ffffff;\n      vertical-align: middle;\n      margin: 0; }\n  .footer-andesenv .footer-center p span {\n        display: block;\n        font-weight: normal;\n        font-size: 14px;\n        line-height: 2; }\n  .footer-andesenv .footer-center p a {\n        color: #5383d3;\n        text-decoration: none; }\n  .footer-andesenv i {\n    background-color: #292929;\n    color: #ffffff;\n    font-size: 25px;\n    width: 38px;\n    height: 38px;\n    border-radius: 50%;\n    text-align: center;\n    line-height: 42px;\n    margin: 10px 15px;\n    vertical-align: middle; }\n  .footer-andesenv i.fa-envelope {\n      font-size: 17px;\n      line-height: 38px; }\n  .footer-andesenv .footer-right {\n    width: 20%; }\n  .footer-andesenv .footer-company-about {\n    line-height: 20px;\n    font-size: 13px;\n    font-weight: normal;\n    margin: 0; }\n  .footer-andesenv .footer-company-about span {\n      display: block;\n      color: #5383d3;\n      font-size: 1rem;\n      font-weight: bold;\n      margin-bottom: 20px; }\n  .footer-andesenv .footer-icons {\n    margin-top: 25px; }\n  .footer-andesenv .footer-icons a[data-tooltip] {\n      position: relative;\n      z-index: 2;\n      cursor: pointer; }\n  .footer-andesenv .footer-icons a[data-tooltip]:before, .footer-andesenv .footer-icons a[data-tooltip]:after {\n      visibility: hidden;\n      opacity: 0;\n      pointer-events: none; }\n  .footer-andesenv .footer-icons a[data-tooltip]:before {\n      position: absolute;\n      bottom: 150%;\n      left: 50%;\n      margin-bottom: 5px;\n      margin-left: -80px;\n      padding: 7px;\n      width: 160px;\n      border-radius: 3px;\n      background-color: #000;\n      background-color: rgba(51, 51, 51, 0.9);\n      color: #fff;\n      content: attr(data-tooltip);\n      text-align: center;\n      font-size: 14px;\n      line-height: 1.2; }\n  .footer-andesenv .footer-icons a[data-tooltip]:after {\n      position: absolute;\n      bottom: 150%;\n      left: 50%;\n      margin-left: -5px;\n      width: 0;\n      border-top: 5px solid #000;\n      border-top: 5px solid rgba(51, 51, 51, 0.9);\n      border-right: 5px solid transparent;\n      border-left: 5px solid transparent;\n      content: \" \";\n      font-size: 0;\n      line-height: 0; }\n  .footer-andesenv .footer-icons a[data-tooltip]:hover:before, .footer-andesenv .footer-icons a[data-tooltip]:hover:after {\n      visibility: visible;\n      opacity: 1; }\n  .footer-andesenv .footer-icons a i:hover {\n      color: #5383d3; }\n  @media (max-width: 880px) {\n  .footer-andesenv {\n    font: bold 14px sans-serif; }\n    .footer-andesenv .footer-left,\n    .footer-andesenv .footer-center,\n    .footer-andesenv .footer-right {\n      display: block;\n      margin-bottom: 40px;\n      text-align: center;\n      width: 100%; }\n    .footer-andesenv .footer-center i {\n      margin-left: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mb290ZXIvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Zvb3Rlci9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0MseUJDSHNCO0VESXRCLDJDQUEyQztFQUMzQyxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFFMUIsa0JBQWtCLEVBQUE7RUFSbkI7OztJQWFRLHFCQUFxQjtJQUNyQixtQkFBbUIsRUFBQTtFQWQzQjtJQWtCUSxVQUFVLEVBQUE7RUFsQmxCO01BcUJZLGNDZlM7TURnQlQsa0NBQWtDO01BRWxDLFNBQVMsRUFBQTtFQXhCckI7UUEyQmdCLGNDeEJLLEVBQUE7RURIckI7TUFnQ1ksY0MxQlM7TUQyQlQsbUJBQW1CO01BQ25CLFVBQVU7TUFFVixlQUFlLEVBQUE7RUFwQzNCO1FBdUNnQixxQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixjQUFlLEVBQUE7RUExQy9CO1VBNkNvQixjQzFDQyxFQUFBO0VESHJCO0lBb0RRLGNDaERjO0lEaURkLDBCQUEwQjtJQUUxQixnQkFBZ0IsRUFBQTtFQXZEeEI7SUEyRFEsVUFBVSxFQUFBO0VBM0RsQjtNQThEWSxxQkFBcUI7TUFDckIsY0N6RFM7TUQwRFQsc0JBQXNCO01BQ3RCLFNBQVEsRUFBQTtFQWpFcEI7UUFvRWdCLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZUFBYztRQUNkLGNBQWEsRUFBQTtFQXZFN0I7UUEyRWdCLGNDeEVLO1FEeUVMLHFCQUFxQixFQUFBO0VBNUVyQztJQWtGUSx5QkNqRmM7SURrRmQsY0M3RWE7SUQ4RWIsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHNCQUFzQixFQUFBO0VBM0Y5QjtNQThGWSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUEvRjdCO0lBb0dRLFVBQVUsRUFBQTtFQXBHbEI7SUF3R1EsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsU0FBUyxFQUFBO0VBM0dqQjtNQThHWSxjQUFjO01BQ2QsY0M1R1M7TUQ2R1QsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixtQkFBbUIsRUFBQTtFQWxIL0I7SUF1SFEsZ0JBQWdCLEVBQUE7RUF2SHhCO01BMkhnQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLGVBQWUsRUFBQTtFQTdIL0I7TUFrSWdCLGtCQUFrQjtNQUNsQixVQUFVO01BQ1Ysb0JBQW9CLEVBQUE7RUFwSXBDO01Bd0lnQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixZQUFZO01BR1osa0JBQWtCO01BQ2xCLHNCQUFzQjtNQUN0Qix1Q0FBdUM7TUFDdkMsV0FBVztNQUNYLDJCQUEyQjtNQUMzQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBeEpoQztNQTRKZ0Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixTQUFTO01BQ1QsaUJBQWlCO01BQ2pCLFFBQVE7TUFDUiwwQkFBMEI7TUFDMUIsMkNBQTJDO01BQzNDLG1DQUFtQztNQUNuQyxrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLFlBQVk7TUFDWixjQUFjLEVBQUE7RUF2SzlCO01BNEtnQixtQkFBbUI7TUFDbkIsVUFBVSxFQUFBO0VBN0sxQjtNQWtMb0IsY0MvS0MsRUFBQTtFRHVMckI7RUFFQztJQUNPLDBCQUEwQixFQUFBO0lBRGpDOzs7TUFNVyxjQUFjO01BQ2QsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7SUFUdEI7TUFhVyxjQUFjLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5mb290ZXItYW5kZXNlbnZ7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcblx0Ym94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdHRleHQtYWxpZ246IGxlZnQ7XHJcblx0Zm9udDogYm9sZCAxNnB4IHNhbnMtc2VyaWY7XHJcblxyXG5cdHBhZGRpbmc6IDU1cHggNTBweDtcclxuICAgIFxyXG4gICAgLmZvb3Rlci1sZWZ0LFxyXG4gICAgLmZvb3Rlci1jZW50ZXIsXHJcbiAgICAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGVmdHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgY29sb3I6ICAkbmludGgtY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQ6IG5vcm1hbCAyZW0gJ0Nvb2tpZScsIGN1cnNpdmU7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAgJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9vdGVyLWxpbmtze1xyXG4gICAgICAgICAgICBjb2xvcjogICRuaW50aC1jb2xvcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDAgMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAgaW5oZXJpdDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3Rlci1teS1uYW1le1xyXG4gICAgICAgIGNvbG9yOiAgJHRoaXJ0eS1jb2xvcjtcclxuICAgICAgICBmb250OiAxMDAgMTRweCBSb2JvdG8gU2xhYjtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAyLjVyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWNlbnRlcntcclxuICAgICAgICB3aWR0aDogMzUlO1xyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbmludGgtY29sb3I7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAgJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpe1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICAkZm91cnRoLWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiAkbmludGgtY29sb3I7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzOHB4O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcblxyXG4gICAgICAgICYuZmEtZW52ZWxvcGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItcmlnaHR7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWNvbXBhbnktYWJvdXR7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItaWNvbnN7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgJltkYXRhLXRvb2x0aXBdIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgJltkYXRhLXRvb2x0aXBdOmJlZm9yZSxcclxuICAgICAgICAgICAgJltkYXRhLXRvb2x0aXBdOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmW2RhdGEtdG9vbHRpcF06YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMTUwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtODBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgwLCAwJSwgMjAlLCAwLjkpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBhdHRyKGRhdGEtdG9vbHRpcCk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmW2RhdGEtdG9vbHRpcF06YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAxNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIGhzbGEoMCwgMCUsIDIwJSwgMC45KTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICZbZGF0YS10b29sdGlwXTpob3ZlcjpiZWZvcmUsXHJcbiAgICAgICAgICAgICZbZGF0YS10b29sdGlwXTpob3ZlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXtcclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG5cclxuXHQuZm9vdGVyLWFuZGVzZW52e1xyXG4gICAgICAgIGZvbnQ6IGJvbGQgMTRweCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5mb290ZXItbGVmdCxcclxuICAgICAgICAuZm9vdGVyLWNlbnRlcixcclxuICAgICAgICAuZm9vdGVyLXJpZ2h0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXItY2VudGVyIGl7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHR9XHJcbn1cclxuIiwiJHByaW1hcnktY29sb3I6ICMwMDAwMDA7XHJcbiRzZWNvbmQtY29sb3I6ICMxNTE1MTU7XHJcbiR0aGlyZC1jb2xvcjogIzIwMjAyMDtcclxuJGZvdXJ0aC1jb2xvcjogIzI5MjkyOTtcclxuJGZpZnRoLWNvbG9yOiAjMzMzODNiO1xyXG4kc2l4dGgtY29sb3I6ICM1MzgzZDM7XHJcbiR0aGlydHktY29sb3I6ICM4ZjkyOTY7XHJcbiRvY3RhdmUtY29sb3I6ICNiYmJiYmI7XHJcbiRuaW50aC1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbiRlc3BlY2lhbC1jb2xvci1ib3JkZXI6ICMzMDNhM2I7XHJcbiRlc3BlY2lhbC1jb2xvci1mb250OiAjNGQ1ZDVmOyJdfQ== */"

/***/ }),

/***/ "./src/app/home/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/home/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\r\n    \r\n<app-intro></app-intro>\r\n\r\n<app-about></app-about>\r\n\r\n<app-professional></app-professional>\r\n\r\n<app-portfolio></app-portfolio>\r\n\r\n<app-trainning></app-trainning>\r\n\r\n<app-library></app-library>\r\n\r\n<!-- <app-smartphone></app-smartphone> -->\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/home/menu/menu.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/home/footer/footer.component.ts");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/home/intro/intro.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/home/about/about.component.ts");
/* harmony import */ var _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./professional/professional.component */ "./src/app/home/professional/professional.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/home/portfolio/portfolio.component.ts");
/* harmony import */ var _trainning_trainning_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trainning/trainning.component */ "./src/app/home/trainning/trainning.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./library/library.component */ "./src/app/home/library/library.component.ts");
/* harmony import */ var _smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./smartphone/smartphone.component */ "./src/app/home/smartphone/smartphone.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _intro_intro_component__WEBPACK_IMPORTED_MODULE_5__["IntroComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _professional_professional_component__WEBPACK_IMPORTED_MODULE_7__["ProfessionalComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_8__["PortfolioComponent"],
                _trainning_trainning_component__WEBPACK_IMPORTED_MODULE_9__["TrainningComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_11__["LibraryComponent"],
                _smartphone_smartphone_component__WEBPACK_IMPORTED_MODULE_12__["SmartphoneComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_10__["SwiperModule"]
            ],
            exports: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/intro/intro.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-andesenv\">\r\n  <h1 class=\"name-andesenv\">Lucas <span>Anderson</span> Lima</h1>\r\n  <h3 class=\"profission-andesenv\">Desenvolvedor Front End</h3>\r\n  <hr class=\"intro-divider\">\r\n  <div class=\"social-andesenv\">\r\n    <a href=\"https://github.com/LuAnderson\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-github\"></i> GITHUB</a>\r\n    <a href=\"https://linkedin.com/in/lucas-anderson-b7a035a7/\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-linkedin\"></i> Linkedin</a>\r\n    <a href=\"https://twitter.com/_LucAnd\" target=\"_blank\" class=\"btn btn-default btn-lg\"><i class=\"fab fa-twitter\"></i> Twitter</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/intro/intro.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/intro/intro.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-andesenv {\n  height: 95vh;\n  width: 100%;\n  background-image: url('showcase_bg.jpg');\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  color: #ffffff;\n  text-align: center;\n  padding: 20% 0; }\n  .intro-andesenv .name-andesenv {\n    font: 100 4em cursive;\n    margin: 0 0 15px 0; }\n  .intro-andesenv .name-andesenv span {\n      color: #5383d3; }\n  .intro-andesenv .intro-divider {\n    width: 20vw;\n    border: 1px solid #5383d3; }\n  .intro-andesenv .profission-andesenv {\n    font: 100 2em Roboto Slab;\n    text-shadow: 2px 2px 3px black; }\n  .intro-andesenv .social-andesenv a {\n    text-decoration: none;\n    color: #ffffff;\n    text-transform: uppercase;\n    margin: 0 5px;\n    font-family: monospace;\n    background: #33383b;\n    border: 1px solid #33383b; }\n  .intro-andesenv .social-andesenv a:hover {\n      background: #5383d3;\n      border: 1px solid; }\n  @media (max-width: 880px) {\n  .intro-andesenv {\n    padding-top: 40% 0 0 0; } }\n  @media (min-width: 890px) and (max-width: 1240px) {\n  .intro-andesenv {\n    padding: 50% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9pbnRyby9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXGFwcFxcaG9tZVxcaW50cm9cXGludHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2ludHJvL0M6XFxVc2Vyc1xcbHVjYXNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcUG9ydGZvbGlvL3NyY1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUVYLHdDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFFdEIsY0NKaUI7RURLakIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQVpsQjtJQWVRLHFCQUFxQjtJQUVyQixrQkFBa0IsRUFBQTtFQWpCMUI7TUFvQlksY0NqQlMsRUFBQTtFREhyQjtJQXlCUSxXQUFXO0lBQ1gseUJDdkJhLEVBQUE7RURIckI7SUE4QlEseUJBQXlCO0lBQ3pCLDhCQUFzQyxFQUFBO0VBL0I5QztJQW9DWSxxQkFBcUI7SUFDckIsY0MvQlM7SURnQ1QseUJBQXlCO0lBQ3pCLGFBQWE7SUFFYixzQkFBc0I7SUFFdEIsbUJDekNTO0lEMENULHlCQzFDUyxFQUFBO0VERnJCO01BK0NnQixtQkM1Q0s7TUQ2Q0wsaUJBQWlCLEVBQUE7RUFPakM7RUFDSTtJQUNJLHNCQUFzQixFQUFBLEVBQ3pCO0VBR0w7RUFDSTtJQUNJLGtCQUFrQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9pbnRyby9pbnRyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmludHJvLWFuZGVzZW52IHtcclxuICAgIGhlaWdodDogOTV2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zaG93Y2FzZV9iZy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gICAgY29sb3I6ICRuaW50aC1jb2xvcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwJSAwO1xyXG5cclxuICAgIC5uYW1lLWFuZGVzZW52e1xyXG4gICAgICAgIGZvbnQ6IDEwMCA0ZW0gY3Vyc2l2ZTtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG5cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuaW50cm8tZGl2aWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDIwdnc7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNpeHRoLWNvbG9yO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maXNzaW9uLWFuZGVzZW52e1xyXG4gICAgICAgIGZvbnQ6IDEwMCAyZW0gUm9ib3RvIFNsYWI7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1hbmRlc2VudntcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbmludGgtY29sb3I7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGZpZnRoLWNvbG9yO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZmlmdGgtY29sb3I7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODgwcHgpIHtcclxuICAgIC5pbnRyby1hbmRlc2VudntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDAlIDAgMCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogODkwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjQwcHgpIHtcclxuICAgIC5pbnRyby1hbmRlc2VudntcclxuICAgICAgICBwYWRkaW5nOiA1MCUgMCAwIDA7XHJcbiAgICB9XHJcbn0gICAiLCIkcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcclxuJHNlY29uZC1jb2xvcjogIzE1MTUxNTtcclxuJHRoaXJkLWNvbG9yOiAjMjAyMDIwO1xyXG4kZm91cnRoLWNvbG9yOiAjMjkyOTI5O1xyXG4kZmlmdGgtY29sb3I6ICMzMzM4M2I7XHJcbiRzaXh0aC1jb2xvcjogIzUzODNkMztcclxuJHRoaXJ0eS1jb2xvcjogIzhmOTI5NjtcclxuJG9jdGF2ZS1jb2xvcjogI2JiYmJiYjtcclxuJG5pbnRoLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjogIzMwM2EzYjtcclxuJGVzcGVjaWFsLWNvbG9yLWZvbnQ6ICM0ZDVkNWY7Il19 */"

/***/ }),

/***/ "./src/app/home/intro/intro.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/intro/intro.component.ts ***!
  \***********************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = /** @class */ (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    IntroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro.component.html */ "./src/app/home/intro/intro.component.html"),
            styles: [__webpack_require__(/*! ./intro.component.scss */ "./src/app/home/intro/intro.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "./src/app/home/library/library.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/library/library.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"library-andesenv\" id=\"library\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        BIBLIOTECA\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n\r\n    <h5 class=\"category\">Códigos | Componentes | Funcionalidades</h5>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-slideshare\"></i></div>\r\n        <p class=\"title\">Componente de Slide</p>\r\n        <p class=\"text\">Código simples para funcionalidade de slide</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fas fa-scroll\"></i></div>\r\n        <p class=\"title\">Scroll Vertical</p>\r\n        <p class=\"text\">Código para funcionalidade de Scroll</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fas fa-medal\"></i></div>\r\n        <p class=\"title\">Social Media</p>\r\n        <p class=\"text\">Estilização das midias sociais apenas com CSS</p>\r\n      </div>\r\n    </div>\r\n\r\n    <h6>Acessar Biblioteca</h6>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/library/library.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/home/library/library.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".library-andesenv {\n  color: #bbbbbb;\n  background: #151515;\n  padding: 100px 0; }\n  .library-andesenv .sobre {\n    margin-bottom: 80px; }\n  .library-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .library-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .library-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .library-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .library-andesenv h6,\n  .library-andesenv .category {\n    text-align: center;\n    cursor: pointer; }\n  .library-andesenv .category {\n    font: 700 1.75em monospace;\n    color: #5383d3;\n    margin: 0 0 15px 0; }\n  .library-andesenv .content {\n    padding: 0 4%;\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .library-andesenv .content .card {\n      font-size: 16px;\n      background-color: #292929;\n      width: 100%;\n      max-width: 300px;\n      min-width: 200px;\n      height: 250px;\n      margin: 0px 15px;\n      border-radius: 10px;\n      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n      border: 2px solid rgba(7, 7, 7, 0.12);\n      justify-content: center;\n      cursor: no-drop; }\n  .library-andesenv .content .card:hover {\n        background: #202020; }\n  .library-andesenv .content .card:hover .text {\n          transition: all 0.5s ease;\n          opacity: 1;\n          max-height: 40px; }\n  .library-andesenv .content .card .title {\n        font: 600 1em monospace;\n        color: #ffffff;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        width: 100%;\n        margin: 0;\n        margin-top: 10%; }\n  .library-andesenv .content .card .text {\n        color: #bbbbbb;\n        font-weight: 200;\n        font-size: 13px;\n        letter-spacing: 2px;\n        text-align: center;\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 20px;\n        opacity: 0;\n        max-height: 0;\n        transition: all .7s ease; }\n  .library-andesenv .content .card .icon {\n        color: #ffffff;\n        font-size: 3em;\n        background: #5383d3;\n        margin: 0 auto;\n        width: 100%;\n        height: 80px;\n        max-width: 80px;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .library-andesenv h6 {\n    font: 700 1.3em Roboto Slab;\n    margin: 7.5% 0 0 0; }\n  .library-andesenv h6:hover {\n      color: #5383d3; }\n  @media screen and (max-width: 767px) {\n    .library-andesenv .content {\n      flex-direction: column; }\n    .library-andesenv .content .card {\n      margin: 15px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9saWJyYXJ5L0M6XFxVc2Vyc1xcbHVjYXNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxsaWJyYXJ5XFxsaWJyYXJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2xpYnJhcnkvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDSWtCO0VESGxCLG1CQ0hrQjtFRElsQixnQkFBZ0IsRUFBQTtFQUhwQjtJQU1RLG1CQUFtQixFQUFBO0VBTjNCO01BU1kseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUV6QixZQUFZLEVBQUE7RUFaeEI7UUFlZ0IsZ0JBQWdCLEVBQUE7RUFmaEM7VUFrQm9CLG1CQ2ZDO1VEZ0JELFdBQVc7VUFDWCxjQUFjO1VBQ2QsV0FBVyxFQUFBO0VBckIvQjtZQXVCd0Isa0JBQWtCO1lBQ2xCLFdBQVcsRUFBQTtFQXhCbkM7O0lBaUNRLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUFsQ3ZCO0lBc0NRLDBCQUEwQjtJQUMxQixjQ3BDYTtJRHNDYixrQkFBa0IsRUFBQTtFQXpDMUI7SUE2Q1EsYUFBYTtJQUViLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBRWpCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CLEVBQUE7RUFyRDNCO01Bd0RZLGVBQWU7TUFDZix5QkN4RFU7TUQwRFYsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLGdCQUFnQjtNQUVoQixtQkFBbUI7TUFDbkIsNENBQTRDO01BQzVDLHFDQUFxQztNQUNyQyx1QkFBdUI7TUFFdkIsZUFBZSxFQUFBO0VBdEUzQjtRQXlFZ0IsbUJDekVLLEVBQUE7RURBckI7VUE0RW9CLHlCQUF5QjtVQUN6QixVQUFVO1VBQ1YsZ0JBQWUsRUFBQTtFQTlFbkM7UUFtRmdCLHVCQUF1QjtRQUN2QixjQzlFSztRRCtFTCxrQkFBa0I7UUFDbEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUVuQixXQUFXO1FBQ1gsU0FBUztRQUNULGVBQWUsRUFBQTtFQTNGL0I7UUErRmdCLGNDMUZNO1FEMkZOLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUVsQixVQUFVO1FBQ1YsY0FBYztRQUNkLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1YsYUFBWTtRQUNaLHdCQUF3QixFQUFBO0VBMUd4QztRQThHZ0IsY0N4R0s7UUR5R0wsY0FBYztRQUVkLG1CQzlHSztRRCtHTCxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7RUF6SG5DO0lBK0hRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQWhJMUI7TUFtSVksY0NoSVMsRUFBQTtFRG9JakI7SUF2SUo7TUF5SVksc0JBQXNCLEVBQUE7SUF6SWxDO01BNklZLGNBQWMsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGlicmFyeS9saWJyYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubGlicmFyeS1hbmRlc2VudntcclxuICAgIGNvbG9yOiAkb2N0YXZlLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcblxyXG4gICAgLnNvYnJle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMi41ZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaDYsXHJcbiAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuY2F0ZWdvcnl7XHJcbiAgICAgICAgZm9udDogNzAwIDEuNzVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDQlO1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMjRweDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3VydGgtY29sb3I7XHJcblxyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDcsIDcsIDcsIDAuMTIpO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHRoaXJkLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udDogNjAwIDFlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJG5pbnRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkb2N0YXZlLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjdzIGVhc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pY29uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbmludGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuXHJcbiAgICBoNntcclxuICAgICAgICBmb250OiA3MDAgMS4zZW0gUm9ib3RvIFNsYWI7XHJcbiAgICAgICAgbWFyZ2luOiA3LjUlIDAgMCAwO1xyXG5cclxuICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQgLmNhcmR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwMDAwO1xyXG4kc2Vjb25kLWNvbG9yOiAjMTUxNTE1O1xyXG4kdGhpcmQtY29sb3I6ICMyMDIwMjA7XHJcbiRmb3VydGgtY29sb3I6ICMyOTI5Mjk7XHJcbiRmaWZ0aC1jb2xvcjogIzMzMzgzYjtcclxuJHNpeHRoLWNvbG9yOiAjNTM4M2QzO1xyXG4kdGhpcnR5LWNvbG9yOiAjOGY5Mjk2O1xyXG4kb2N0YXZlLWNvbG9yOiAjYmJiYmJiO1xyXG4kbmludGgtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4kZXNwZWNpYWwtY29sb3ItYm9yZGVyOiAjMzAzYTNiO1xyXG4kZXNwZWNpYWwtY29sb3ItZm9udDogIzRkNWQ1ZjsiXX0= */"

/***/ }),

/***/ "./src/app/home/library/library.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/library/library.component.ts ***!
  \***************************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! ./library.component.html */ "./src/app/home/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.scss */ "./src/app/home/library/library.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/home/menu/menu.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/menu/menu.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-andesenv\" id=\"navbar\">\r\n  <span href=\"#\" class=\"logo-andesenv\">\r\n    AnDesenv\r\n  </span>\r\n  <a href=\"#inicio\">Inicio</a>\r\n  <a href=\"#profissional\">Profissional</a>\r\n  <a href=\"#portfolio\">Portfólio</a>\r\n  <a href=\"#trainning\">Trainning</a>\r\n  <a href=\"#library\">Biblioteca</a>\r\n  <a href=\"#smartphone\">Aplicativos</a>\r\n  <a href=\"#contato\">Contato</a>\r\n  <a href=\"javascript:void(0);\" class=\"icon\" (click)=\"showMobileMenu()\">\r\n    <i class=\"fa fa-bars\"></i>\r\n  </a>  \r\n</div>"

/***/ }),

/***/ "./src/app/home/menu/menu.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/menu/menu.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-andesenv {\n  background: #000000;\n  display: block;\n  position: fixed;\n  right: 0;\n  text-align: center;\n  top: 0;\n  width: -webkit-fill-available;\n  z-index: 3; }\n  .menu-andesenv.active {\n    display: grid !important;\n    padding: 30px; }\n  .menu-andesenv.active a {\n      display: inline-block !important; }\n  .menu-andesenv a.icon,\n  .menu-andesenv .logo-andesenv {\n    display: none; }\n  .menu-andesenv a {\n    display: inline-block;\n    margin: 0 1rem;\n    padding: 15px 16px;\n    color: #ffffff;\n    font: bold 1.1em Roboto Slab;\n    text-transform: uppercase;\n    text-decoration: none; }\n  .menu-andesenv a.active, .menu-andesenv a:hover {\n      border-radius: 1em 2em; }\n  .menu-andesenv a:hover {\n      background: #5383d3; }\n  .menu-andesenv a.active {\n      background-color: #5383d3;\n      color: #ffffff; }\n  @media screen and (max-width: 768px) {\n    .menu-andesenv {\n      display: inline-flex; }\n      .menu-andesenv a {\n        display: block;\n        text-align: left;\n        padding: 12px 16px; }\n        .menu-andesenv a:not(:first-child) {\n          display: none; }\n        .menu-andesenv a.icon {\n          position: absolute;\n          right: 0;\n          top: 0;\n          float: right;\n          display: block; }\n        .menu-andesenv a.active {\n          border-radius: 1em 2em; }\n      .menu-andesenv .logo-andesenv {\n        color: #ffffff;\n        font: bold 3em monospace;\n        display: block;\n        margin: 0 1rem;\n        padding: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9tZW51L0M6XFxVc2Vyc1xcbHVjYXNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL21lbnUvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLG1CQ0htQjtFREluQixjQUFjO0VBQ2QsZUFBZTtFQUNmLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLDZCQUE2QjtFQUM3QixVQUFVLEVBQUE7RUFSZDtJQVdRLHdCQUF3QjtJQUN4QixhQUFhLEVBQUE7RUFackI7TUFlWSxnQ0FBZ0MsRUFBQTtFQWY1Qzs7SUFxQlEsYUFBYSxFQUFBO0VBckJyQjtJQXlCUSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGtCQUFrQjtJQUVsQixjQ3ZCYTtJRHlCYiw0QkFBNEI7SUFDNUIseUJBQXlCO0lBQ3pCLHFCQUFxQixFQUFBO0VBakM3QjtNQXFDWSxzQkFBc0IsRUFBQTtFQXJDbEM7TUF5Q1ksbUJDdENTLEVBQUE7RURIckI7TUE2Q1kseUJDMUNTO01EMkNULGNDeENTLEVBQUE7RUQ0Q2pCO0lBbERKO01BbURRLG9CQUFvQixFQUFBO01BbkQ1QjtRQXNEWSxjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGtCQUFrQixFQUFBO1FBeEQ5QjtVQTJEZ0IsYUFBYSxFQUFBO1FBM0Q3QjtVQStEZ0Isa0JBQWtCO1VBQ2xCLFFBQVE7VUFDUixNQUFNO1VBQ04sWUFBWTtVQUNaLGNBQWMsRUFBQTtRQW5FOUI7VUF1RWdCLHNCQUFzQixFQUFBO01BdkV0QztRQTRFWSxjQ3RFUztRRHVFVCx3QkFBd0I7UUFFeEIsY0FBYztRQUNkLGNBQWM7UUFDZCxZQUFZLEVBQUEsRUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ubWVudS1hbmRlc2VudntcclxuICAgIGJhY2tncm91bmQ6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgei1pbmRleDogMztcclxuXHJcbiAgICAmLmFjdGl2ZXtcclxuICAgICAgICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGEuaWNvbixcclxuICAgIC5sb2dvLWFuZGVzZW52e1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTZweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICRuaW50aC1jb2xvcjtcclxuXHJcbiAgICAgICAgZm9udDogYm9sZCAxLjFlbSBSb2JvdG8gU2xhYjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgJi5hY3RpdmUsXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMWVtIDJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICBjb2xvcjogJG5pbnRoLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xyXG5cclxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLmljb24ge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxZW0gMmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nby1hbmRlc2VudntcclxuICAgICAgICAgICAgY29sb3I6ICRuaW50aC1jb2xvcjtcclxuICAgICAgICAgICAgZm9udDogYm9sZCAzZW0gbW9ub3NwYWNlO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwMDAwO1xyXG4kc2Vjb25kLWNvbG9yOiAjMTUxNTE1O1xyXG4kdGhpcmQtY29sb3I6ICMyMDIwMjA7XHJcbiRmb3VydGgtY29sb3I6ICMyOTI5Mjk7XHJcbiRmaWZ0aC1jb2xvcjogIzMzMzgzYjtcclxuJHNpeHRoLWNvbG9yOiAjNTM4M2QzO1xyXG4kdGhpcnR5LWNvbG9yOiAjOGY5Mjk2O1xyXG4kb2N0YXZlLWNvbG9yOiAjYmJiYmJiO1xyXG4kbmludGgtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4kZXNwZWNpYWwtY29sb3ItYm9yZGVyOiAjMzAzYTNiO1xyXG4kZXNwZWNpYWwtY29sb3ItZm9udDogIzRkNWQ1ZjsiXX0= */"

/***/ }),

/***/ "./src/app/home/menu/menu.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.showMobileMenu = function () {
        var navbar = document.getElementById('navbar');
        navbar.classList.toggle('active');
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/home/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/home/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"portfolio-andesenv\" id=\"portfolio\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        PORTFÓLIO\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <swiper [config]=\"config\" [(index)]=\"index\">\r\n      <div class=\"big swiper-slide\" data-swiper-autoplay=\"200\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"./assets/login.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n      <div class=\"big swiper-slide\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"./assets/cursos-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n      <div class=\"big swiper-slide\">\r\n        <div class=\"swiper-zoom-container\">\r\n          <img src=\"./assets/criar-curso-mobile.png\" alt=\"\" srcset=\"\" class=\"mobile\">\r\n        </div>\r\n      </div>\r\n    </swiper>\r\n\r\n    <h6>Ver Mais Projetos</h6>\r\n  </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-andesenv {\n  color: #bbbbbb;\n  background: #151515;\n  padding: 100px 0; }\n  .portfolio-andesenv .sobre {\n    margin-bottom: 80px; }\n  .portfolio-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .portfolio-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .portfolio-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .portfolio-andesenv .swiper-slide-active,\n  .portfolio-andesenv .swiper-slide,\n  .portfolio-andesenv h6 {\n    text-align: center; }\n  .portfolio-andesenv img.mobile {\n    max-width: 75%; }\n  .portfolio-andesenv h6 {\n    font: 700 1.3em Roboto Slab;\n    cursor: pointer;\n    margin: 5% 0 0 0; }\n  .portfolio-andesenv h6:hover {\n      color: #5383d3; }\n  @media (max-width: 880px) {\n  .portfolio-andesenv img.mobile {\n    max-width: 100%; }\n  .portfolio-andesenv h6 {\n    margin: 10% 0 0 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wb3J0Zm9saW8vQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3BvcnRmb2xpby9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NJa0I7RURIbEIsbUJDSGtCO0VESWxCLGdCQUFnQixFQUFBO0VBSHBCO0lBTVEsbUJBQW1CLEVBQUE7RUFOM0I7TUFTWSx5QkFBeUI7TUFDekIseUJBQXlCO01BRXpCLFlBQVksRUFBQTtFQVp4QjtRQWVnQixnQkFBZ0IsRUFBQTtFQWZoQztVQWtCb0IsbUJDZkM7VURnQkQsV0FBVztVQUNYLGNBQWM7VUFDZCxXQUFXLEVBQUE7RUFyQi9CO1lBdUJ3QixrQkFBa0I7WUFDbEIsV0FBVyxFQUFBO0VBeEJuQzs7O0lBa0NRLGtCQUFrQixFQUFBO0VBbEMxQjtJQXNDUSxjQUFjLEVBQUE7RUF0Q3RCO0lBMENRLDJCQUEyQjtJQUMzQixlQUFlO0lBQ2YsZ0JBQWdCLEVBQUE7RUE1Q3hCO01BK0NZLGNDNUNTLEVBQUE7RURpRHJCO0VBQ0k7SUFFUSxlQUFlLEVBQUE7RUFGdkI7SUFNUSxpQkFBaUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnBvcnRmb2xpby1hbmRlc2VudntcclxuICAgIGNvbG9yOiAkb2N0YXZlLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZC1jb2xvcjtcclxuICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcblxyXG4gICAgLnNvYnJle1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblxyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250OiAxMDAgMi41ZW0gbW9ub3NwYWNlO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICYudG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxyXG4gICAgLnN3aXBlci1zbGlkZSxcclxuICAgIGg2IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGltZy5tb2JpbGV7IFxyXG4gICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgfVxyXG5cclxuICAgIGg2e1xyXG4gICAgICAgIGZvbnQ6IDcwMCAxLjNlbSBSb2JvdG8gU2xhYjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA1JSAwIDAgMDtcclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4ODBweCkge1xyXG4gICAgLnBvcnRmb2xpby1hbmRlc2VudntcclxuICAgICAgICBpbWcubW9iaWxleyBcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTAlIDAgMCAwO1xyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDAwMDAwO1xyXG4kc2Vjb25kLWNvbG9yOiAjMTUxNTE1O1xyXG4kdGhpcmQtY29sb3I6ICMyMDIwMjA7XHJcbiRmb3VydGgtY29sb3I6ICMyOTI5Mjk7XHJcbiRmaWZ0aC1jb2xvcjogIzMzMzgzYjtcclxuJHNpeHRoLWNvbG9yOiAjNTM4M2QzO1xyXG4kdGhpcnR5LWNvbG9yOiAjOGY5Mjk2O1xyXG4kb2N0YXZlLWNvbG9yOiAjYmJiYmJiO1xyXG4kbmludGgtY29sb3I6ICNmZmZmZmY7XHJcblxyXG4kZXNwZWNpYWwtY29sb3ItYm9yZGVyOiAjMzAzYTNiO1xyXG4kZXNwZWNpYWwtY29sb3ItZm9udDogIzRkNWQ1ZjsiXX0= */"

/***/ }),

/***/ "./src/app/home/portfolio/portfolio.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/portfolio/portfolio.component.ts ***!
  \*******************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
        this.config = {
            direction: 'horizontal',
            slidesPerView: 3,
            keyboard: true,
            mousewheel: false,
            navigation: true,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: true,
        };
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/home/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/home/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/home/professional/professional.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/professional.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"professional-andesenv\" id=\"profissional\">\r\n  <div class=\"container\">\r\n    <div class=\"row about\">\r\n      <h2>\r\n        CARREIRA PROFISSIONAL\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"main-timeline\">\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-user-tie\"></i></div>\r\n            <span class=\"year\">2019 - Atual</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Desenvolvedor Front End Junior - <span class=\"empresa\">Wooza</span> </h5>\r\n              <p class=\"description\">\r\n                <li>Desenvolvimento e Manutenção de projetos utilizando Angular 2+, AngularJS e React</li>\r\n                <li>Estilização, desenvolvimento e integração a API</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-graduation-cap\"></i></div>\r\n            <span class=\"year\">2019 - 2021</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Graduação - Analise e Desenvolvimento de Sistemas</h5>\r\n              <p class=\"description\">\r\n                <li>UVA - Universidade Veiga de Almeida</li>\r\n                <li>Preparo para atuar nas áreas de desenvolvimento de software</li>\r\n                <li>Cursando o primeiro semestre</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-user-tie\"></i></div>\r\n            <span class=\"year\">2019 - 2019</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Desenvolvedor Front End Angular - <span class=\"empresa\">BeeJobs</span> </h5>\r\n              <p class=\"description\">\r\n                <li>Desenvolvimento do wireframe</li>\r\n                <li>Coordenação e suporte aos programadores web/mobile</li>\r\n                <li>Estilização, desenvolvimento e integração a API</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-code\"></i></div>\r\n            <span class=\"year\">2017 - Atual</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Freelancer</h5>\r\n              <p class=\"description\">\r\n                <li>Desenvolvedor Front End</li>\r\n                <li>SEO | Web Mobile</li>\r\n                <li>Web Performance e PageSpeed Insights/Ninja</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-user-tie\"></i></div>\r\n            <span class=\"year\">2017 - 2019</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Desenvolvedor Front End - <span class=\"empresa\">MedGrupo</span> </h5>\r\n              <p class=\"description\">\r\n                <li>Líder Técnico | CodeOwner</li>\r\n                <li>Modelagem de interface web/mobile e Desenvolvimento de componentes responsivos</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-address-book\"></i></div>\r\n            <span class=\"year\">2015 - 2016</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Membro do Diretório Acadêmico</h5>\r\n              <p class=\"description\">\r\n                <li>Organização de atividades inclusivas para 'calouros'</li>\r\n                <li>Levantamento de ideias para melhor convívio entre os estudantes universitários</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"timeline\">\r\n            <div class=\"timeline-icon\"><i class=\"fas fa-graduation-cap\"></i></div>\r\n            <span class=\"year\">2014</span>\r\n            <div class=\"timeline-content\">\r\n              <h5 class=\"title\">Graduação - Engenharia da Computação</h5>\r\n              <p class=\"description\">\r\n                <li>UEFS - Universidade Estadual de Feira de Santana</li>\r\n                <li>Preparo para atuar nas áreas de desenvolvimento de hardware e software</li>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/professional/professional.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/professional/professional.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".professional-andesenv {\n  color: #bbbbbb;\n  background: #202020;\n  padding: 100px 0; }\n  .professional-andesenv .about {\n    margin-bottom: 80px; }\n  .professional-andesenv .about h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      text-align: center;\n      margin: auto; }\n  .professional-andesenv .about h2 .horizontal-line {\n        margin-top: 15px; }\n  .professional-andesenv .about h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .professional-andesenv .about h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .professional-andesenv .main-timeline {\n    overflow: hidden;\n    position: relative; }\n  .professional-andesenv .main-timeline .timeline {\n      width: 50%;\n      float: left;\n      position: relative; }\n  .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:after {\n        content: \"\";\n        display: block;\n        clear: both; }\n  .professional-andesenv .main-timeline .timeline:before {\n        position: absolute;\n        width: 10px;\n        height: 90%;\n        top: 10%;\n        right: -20px;\n        background: #bbbbbb; }\n  .professional-andesenv .main-timeline .timeline:last-child:before {\n        height: 0; }\n  .professional-andesenv .main-timeline .timeline-icon {\n      width: 80px;\n      height: 80px;\n      border-radius: 50%;\n      overflow: hidden;\n      background: #bbbbbb;\n      text-align: center;\n      position: absolute;\n      top: 0;\n      right: -40px;\n      z-index: 2; }\n  .professional-andesenv .main-timeline .timeline-icon i {\n        font-size: 35px;\n        color: #202020;\n        line-height: 80px;\n        z-index: 1;\n        position: relative; }\n  .professional-andesenv .main-timeline .year {\n      display: block;\n      padding: 0 60px 0 30px;\n      font: 700 2em monospace;\n      color: #4d5d5f;\n      text-align: right;\n      border-bottom: 2px solid #303a3b;\n      position: relative; }\n  .professional-andesenv .main-timeline .year:after {\n        content: \"\";\n        border-left: 10px solid #303a3b;\n        border-top: 10px solid transparent;\n        border-bottom: 10px solid transparent;\n        position: absolute;\n        bottom: -11px;\n        left: 0px; }\n  .professional-andesenv .main-timeline .timeline:last-child .timeline-content:after, .professional-andesenv .main-timeline .timeline:last-child .timeline-content:before {\n      width: 0;\n      height: 0; }\n  .professional-andesenv .main-timeline .timeline-content {\n      padding: 18px 60px 18px 40px;\n      text-align: right;\n      position: relative;\n      z-index: 1; }\n  .professional-andesenv .main-timeline .timeline-content .title {\n        font: 700 1.3em Roboto Slab;\n        color: #5383d3;\n        margin-top: 0; }\n  .professional-andesenv .main-timeline .timeline-content .title .empresa {\n          color: #8f9296; }\n  .professional-andesenv .main-timeline .timeline-content .description {\n        font: 300 1em monospace;\n        color: #8f9296;\n        line-height: 25px; }\n  .professional-andesenv .main-timeline .timeline-content .description li {\n          list-style-type: none; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2) {\n      margin-top: 140px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(even) {\n      margin-bottom: 80px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n      margin: -140px 0 0; }\n  .professional-andesenv .main-timeline .timeline:first-child, .professional-andesenv .main-timeline .timeline:last-child:nth-child(even) {\n      margin: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n      right: auto;\n      left: -20px;\n      background: #bbbbbb; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n      left: -40px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n      padding: 0 30px 0 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 3px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:after {\n        border-left: none;\n        border-right: 10px solid #303a3b;\n        right: 0px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n      padding: 18px 40px 18px 60px;\n      text-align: left; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:before {\n        left: -95px; }\n  .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content:after {\n        left: 15px; }\n  @media only screen and (max-width: 990px) {\n    .professional-andesenv .main-timeline .timeline {\n      width: 100%; }\n      .professional-andesenv .main-timeline .timeline:nth-child(even), .professional-andesenv .main-timeline .timeline:nth-child(odd) {\n        margin: 0; }\n      .professional-andesenv .main-timeline .timeline:before, .professional-andesenv .main-timeline .timeline:nth-child(2n):before {\n        width: 10px;\n        height: 100%;\n        left: 25px; }\n      .professional-andesenv .main-timeline .timeline .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n        .professional-andesenv .main-timeline .timeline .year:before {\n          left: auto;\n          right: 4px; }\n        .professional-andesenv .main-timeline .timeline .year:after {\n          left: auto;\n          right: 0px;\n          border-right: 10px solid #303a3b;\n          border-left: none; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-icon {\n        left: 0; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year {\n        text-align: left;\n        padding: 0 30px 0 100px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .year:before {\n        left: auto;\n        right: 4px; }\n      .professional-andesenv .main-timeline .timeline:nth-child(2n) .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n      .professional-andesenv .main-timeline .timeline .timeline-content {\n        text-align: left;\n        padding: 18px 40px 18px 100px; }\n        .professional-andesenv .main-timeline .timeline .timeline-content:after, .professional-andesenv .main-timeline .timeline .timeline-content:before {\n          width: 0;\n          height: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXHByb2Zlc3Npb25hbFxccHJvZmVzc2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3Byb2Zlc3Npb25hbC9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NJa0I7RURIbEIsbUJDRmlCO0VER2pCLGdCQUFnQixFQUFBO0VBSHBCO0lBTVEsbUJBQW1CLEVBQUE7RUFOM0I7TUFTWSx5QkFBeUI7TUFDekIseUJBQXlCO01BQ3pCLGtCQUFrQjtNQUVsQixZQUFZLEVBQUE7RUFieEI7UUFnQmdCLGdCQUFnQixFQUFBO0VBaEJoQztVQW1Cb0IsbUJDaEJDO1VEaUJELFdBQVc7VUFDWCxjQUFjO1VBQ2QsV0FBVyxFQUFBO0VBdEIvQjtZQXlCd0Isa0JBQWtCO1lBQ2xCLFdBQVcsRUFBQTtFQTFCbkM7SUFrQ1EsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFBO0VBbkMxQjtNQXNDWSxVQUFVO01BQ1YsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBeEM5QjtRQTRDZ0IsV0FBVztRQUNYLGNBQWM7UUFDZCxXQUFXLEVBQUE7RUE5QzNCO1FBa0RnQixrQkFBa0I7UUFDbEIsV0FBVztRQUNYLFdBQVc7UUFDWCxRQUFRO1FBQ1IsWUFBWTtRQUVaLG1CQ25ETSxFQUFBO0VETHRCO1FBNERnQixTQUFTLEVBQUE7RUE1RHpCO01BaUVZLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGdCQUFnQjtNQUVoQixtQkNqRVU7TURrRVYsa0JBQWtCO01BRWxCLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sWUFBWTtNQUNaLFVBQVUsRUFBQTtFQTVFdEI7UUErRWdCLGVBQWU7UUFDZixjQ2hGSztRRGlGTCxpQkFBaUI7UUFFakIsVUFBVTtRQUNWLGtCQUFrQixFQUFBO0VBcEZsQztNQXlGWSxjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUV2QixjQ3BGaUI7TURxRmpCLGlCQUFpQjtNQUNqQixnQ0N2Rm1CO01Ed0ZuQixrQkFBa0IsRUFBQTtFQWhHOUI7UUFtR2dCLFdBQVc7UUFDWCwrQkM1RmU7UUQ2RmYsa0NBQWtDO1FBQ2xDLHFDQUFxQztRQUNyQyxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFNBQVMsRUFBQTtFQXpHekI7TUErR2dCLFFBQVE7TUFDUixTQUFTLEVBQUE7RUFoSHpCO01BcUhZLDRCQUE0QjtNQUM1QixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTtFQXhIdEI7UUEySGdCLDJCQUEyQjtRQUMzQixjQ3pISztRRDBITCxhQUFhLEVBQUE7RUE3SDdCO1VBZ0lvQixjQzVIRSxFQUFBO0VESnRCO1FBcUlnQix1QkFBdUI7UUFDdkIsY0NsSU07UURtSU4saUJBQWlCLEVBQUE7RUF2SWpDO1VBMElvQixxQkFBcUIsRUFBQTtFQTFJekM7TUFpSmdCLGlCQUFpQixFQUFBO0VBakpqQztNQXFKZ0IsbUJBQW1CLEVBQUE7RUFySm5DO01BeUpnQixrQkFBa0IsRUFBQTtFQXpKbEM7TUE2SmdCLFdBQVcsRUFBQTtFQTdKM0I7TUFrS29CLFdBQVc7TUFDWCxXQUFXO01BQ1gsbUJDL0pFLEVBQUE7RURMdEI7TUF3S29CLFdBQVcsRUFBQTtFQXhLL0I7TUE0S29CLHNCQUFzQjtNQUN0QixnQkFBZ0IsRUFBQTtFQTdLcEM7UUFnTHdCLFVBQVU7UUFDVixVQUFVLEVBQUE7RUFqTGxDO1FBcUx3QixpQkFBaUI7UUFDakIsZ0NDOUtPO1FEK0tQLFVBQVUsRUFBQTtFQXZMbEM7TUE0TG9CLDRCQUE0QjtNQUM1QixnQkFBZ0IsRUFBQTtFQTdMcEM7UUFnTXdCLFdBQVcsRUFBQTtFQWhNbkM7UUFtTXdCLFVBQVUsRUFBQTtFQU81QjtJQTFNTjtNQTZNZ0IsV0FBVyxFQUFBO01BN00zQjtRQWdOb0IsU0FBUyxFQUFBO01BaE43QjtRQW9Ob0IsV0FBVztRQUNYLFlBQVk7UUFDWixVQUFVLEVBQUE7TUF0TjlCO1FBME5vQixPQUFPLEVBQUE7TUExTjNCO1FBOE5vQixnQkFBZ0I7UUFDaEIsdUJBQXVCLEVBQUE7UUEvTjNDO1VBa093QixVQUFVO1VBQ1YsVUFBVSxFQUFBO1FBbk9sQztVQXVPd0IsVUFBVTtVQUNWLFVBQVU7VUFDVixnQ0NqT087VURrT1AsaUJBQWlCLEVBQUE7TUExT3pDO1FBZ1B3QixPQUFPLEVBQUE7TUFoUC9CO1FBb1B3QixnQkFBZ0I7UUFDaEIsdUJBQXVCLEVBQUE7TUFyUC9DO1FBMFBvQixVQUFVO1FBQ1YsVUFBVSxFQUFBO01BM1A5QjtRQStQb0IsZ0JBQWdCO1FBQ2hCLDZCQUE2QixFQUFBO01BaFFqRDtRQW9Rb0IsZ0JBQWdCO1FBQ2hCLDZCQUE2QixFQUFBO1FBclFqRDtVQXdRd0IsUUFBUTtVQUNSLFNBQVMsRUFBQSxFQUNaIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9wcm9mZXNzaW9uYWwvcHJvZmVzc2lvbmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4ucHJvZmVzc2lvbmFsLWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICRvY3RhdmUtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhpcmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIC5hYm91dHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udDogMTAwIDIuNWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgLmhvcml6b250YWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3N3B4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYWluLXRpbWVsaW5lIHtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgICY6YmVmb3JlLFxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMCU7ICAgXHJcbiAgICAgICAgICAgICAgICByaWdodDogLTIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9jdGF2ZS1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG9jdGF2ZS1jb2xvcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtNDBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcmQtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuXHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDYwcHggMCAzMHB4O1xyXG4gICAgICAgICAgICBmb250OiA3MDAgMmVtIG1vbm9zcGFjZTtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAkZXNwZWNpYWwtY29sb3ItZm9udDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZXNwZWNpYWwtY29sb3ItYm9yZGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTFweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lOmxhc3QtY2hpbGQgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDYwcHggMThweCA0MHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDcwMCAxLjNlbSBSb2JvdG8gU2xhYjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgIC5lbXByZXNhe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiR0aGlydHktY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBmb250OiAzMDAgMWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhpcnR5LWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC50aW1lbGluZSB7XHJcbiAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogLTE0MHB4IDAgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCwgJjpsYXN0LWNoaWxkOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIHtcclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uLCAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJG9jdGF2ZS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGltZWxpbmUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogLTQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnllYXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpbWVsaW5lLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtOTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgICAgIC5tYWluLXRpbWVsaW5lIHtcclxuICAgICAgICAgICAgLnRpbWVsaW5lIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKGV2ZW4pLCAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUsICY6bnRoLWNoaWxkKDJuKTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC55ZWFyIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkICRlc3BlY2lhbC1jb2xvci1ib3JkZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgICAgICAgICAgICAgIC50aW1lbGluZS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAueWVhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAwIDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgybikgLnllYXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMm4pIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC50aW1lbGluZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggNDBweCAxOHB4IDEwMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlciwgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcclxuJHNlY29uZC1jb2xvcjogIzE1MTUxNTtcclxuJHRoaXJkLWNvbG9yOiAjMjAyMDIwO1xyXG4kZm91cnRoLWNvbG9yOiAjMjkyOTI5O1xyXG4kZmlmdGgtY29sb3I6ICMzMzM4M2I7XHJcbiRzaXh0aC1jb2xvcjogIzUzODNkMztcclxuJHRoaXJ0eS1jb2xvcjogIzhmOTI5NjtcclxuJG9jdGF2ZS1jb2xvcjogI2JiYmJiYjtcclxuJG5pbnRoLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjogIzMwM2EzYjtcclxuJGVzcGVjaWFsLWNvbG9yLWZvbnQ6ICM0ZDVkNWY7Il19 */"

/***/ }),

/***/ "./src/app/home/professional/professional.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/professional/professional.component.ts ***!
  \*************************************************************/
/*! exports provided: ProfessionalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfessionalComponent", function() { return ProfessionalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfessionalComponent = /** @class */ (function () {
    function ProfessionalComponent() {
    }
    ProfessionalComponent.prototype.ngOnInit = function () {
    };
    ProfessionalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-professional',
            template: __webpack_require__(/*! ./professional.component.html */ "./src/app/home/professional/professional.component.html"),
            styles: [__webpack_require__(/*! ./professional.component.scss */ "./src/app/home/professional/professional.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfessionalComponent);
    return ProfessionalComponent;
}());



/***/ }),

/***/ "./src/app/home/smartphone/smartphone.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/smartphone/smartphone.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"smartphone-andesenv\" id=\"smartphone\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        APLICATIVOS\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n\r\n    <div class=\"container col-md-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 frame\">\r\n          <div class=\"mobile-frame\">\r\n            <img src=\"https://io13-high-dpi.appspot.com/images/n4_large.png\">\r\n            <div class=\"frame-box\">\r\n              <iframe src=\"https://luanderson.github.io/AnDesenv/\" frameborder=\"0\" style=\"overflow:hidden\" width=\"310\"\r\n                height=\"520\"></iframe>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 aplicativo\">\r\n          <h3 class=\"name\">\r\n            Simple. Secure. <br>\r\n            Reliable messaging.\r\n          </h3>\r\n          <h5 class=\"descrition\">\r\n            With WhatsApp, you'll get fast, simple, secure messaging and calling for free*, available on phones all\r\n            over the world.\r\n          </h5>\r\n          <h6 class=\"about\">* Data charges may apply. Contact your provider for details.</h6>\r\n          <p class=\"info\">\r\n            Mussum Ipsum, cacilds vidis litro abertis. Quem num gosta di mé, boa gentis num é. Interessantiss quisso\r\n            pudia ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que vai caçá sua turmis! Tá\r\n            deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.\r\n          </p>\r\n          <div class=\"download\">\r\n            <ul>\r\n              <li>\r\n                <i class=\"fab fa-google-play\"></i>\r\n                Android\r\n              </li>\r\n              <li>\r\n                <i class=\"fab fa-apple\"></i>\r\n                iOS\r\n              </li>\r\n              <li>\r\n                <i class=\"fas fa-desktop\"></i>\r\n                Web\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/smartphone/smartphone.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/smartphone/smartphone.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".smartphone-andesenv {\n  color: #bbbbbb;\n  background: #202020;\n  padding: 100px 0; }\n  .smartphone-andesenv .sobre {\n    margin-bottom: 80px; }\n  .smartphone-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .smartphone-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .smartphone-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .smartphone-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .smartphone-andesenv .mobile-frame {\n    position: relative;\n    width: 400px;\n    margin-left: 60px; }\n  .smartphone-andesenv .mobile-frame img {\n      position: relative;\n      width: 400px;\n      margin: 0 auto;\n      z-index: 1; }\n  .smartphone-andesenv .mobile-frame .frame-box {\n      position: absolute;\n      top: 102px;\n      left: 47px;\n      z-index: 2;\n      overflow-y: hidden; }\n  .smartphone-andesenv .aplicativo .name,\n  .smartphone-andesenv .aplicativo .descrition,\n  .smartphone-andesenv .aplicativo .download,\n  .smartphone-andesenv .aplicativo .about,\n  .smartphone-andesenv .aplicativo .info {\n    font-family: Roboto Slab; }\n  .smartphone-andesenv .aplicativo .name {\n    font-size: 2em;\n    margin: 5vw 0 3vw 0; }\n  .smartphone-andesenv .aplicativo .descrition {\n    font-size: 1.25em;\n    margin: 20px 0 40px 0; }\n  .smartphone-andesenv .aplicativo .about {\n    font-size: .9em;\n    font-style: italic;\n    letter-spacing: 1.5px;\n    margin: 40px 0; }\n  .smartphone-andesenv .aplicativo .download {\n    color: #bbbbbb;\n    font-size: 1.5em;\n    text-align: center;\n    margin-top: 7vw; }\n  .smartphone-andesenv .aplicativo .download li {\n      display: inline-flex;\n      margin: 0 1vw;\n      cursor: pointer; }\n  .smartphone-andesenv .aplicativo .download li i {\n        margin: 0 .5vw; }\n  .smartphone-andesenv .aplicativo .download li:hover {\n        color: #5383d3; }\n  @media (max-width: 620px) {\n    .smartphone-andesenv .container .frame {\n      padding: 0px;\n      margin: 0px;\n      overflow: hidden; }\n      .smartphone-andesenv .container .frame .mobile-frame {\n        margin: 0px;\n        padding: 0px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zbWFydHBob25lL0M6XFxVc2Vyc1xcbHVjYXNcXE9uZURyaXZlXFxEb2N1bWVudG9zXFxQcm9qZXRvc1xcUG9ydGZvbGlvL3NyY1xcYXBwXFxob21lXFxzbWFydHBob25lXFxzbWFydHBob25lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3NtYXJ0cGhvbmUvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNDSWtCO0VESGxCLG1CQ0ZpQjtFREdqQixnQkFBZ0IsRUFBQTtFQUhwQjtJQU1RLG1CQUFtQixFQUFBO0VBTjNCO01BU1kseUJBQXlCO01BQ3pCLHlCQUF5QjtNQUV6QixZQUFZLEVBQUE7RUFaeEI7UUFlZ0IsZ0JBQWdCLEVBQUE7RUFmaEM7VUFrQm9CLG1CQ2ZDO1VEZ0JELFdBQVc7VUFDWCxjQUFjO1VBQ2QsV0FBVyxFQUFBO0VBckIvQjtZQXVCd0Isa0JBQWtCO1lBQ2xCLFdBQVcsRUFBQTtFQXhCbkM7SUFnQ1Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQWxDekI7TUFxQ1ksa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixjQUFjO01BQ2QsVUFBVSxFQUFBO0VBeEN0QjtNQTRDWSxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFVBQVU7TUFDVixVQUFVO01BQ1Ysa0JBQWtCLEVBQUE7RUFoRDlCOzs7OztJQTJEWSx3QkFBd0IsRUFBQTtFQTNEcEM7SUErRFksY0FBYztJQUVkLG1CQUFtQixFQUFBO0VBakUvQjtJQXFFWSxpQkFBaUI7SUFFakIscUJBQXFCLEVBQUE7RUF2RWpDO0lBMkVZLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0lBRXJCLGNBQWMsRUFBQTtFQS9FMUI7SUFtRlksY0M5RVU7SUQrRVYsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUF0RjNCO01BeUZnQixvQkFBb0I7TUFDcEIsYUFBYTtNQUViLGVBQWUsRUFBQTtFQTVGL0I7UUErRm9CLGNBQWMsRUFBQTtFQS9GbEM7UUFtR29CLGNDaEdDLEVBQUE7RURzR2pCO0lBekdKO01BNkdnQixZQUFZO01BQ1osV0FBVztNQUNYLGdCQUFnQixFQUFBO01BL0doQztRQWtIb0IsV0FBVztRQUNYLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zbWFydHBob25lL3NtYXJ0cGhvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5zbWFydHBob25lLWFuZGVzZW52e1xyXG4gICAgY29sb3I6ICRvY3RhdmUtY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGhpcmQtY29sb3I7XHJcbiAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG5cclxuICAgIC5zb2JyZXtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgZm9udDogMTAwIDIuNWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5ob3Jpem9udGFsLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzdweDtcclxuICAgICAgICAgICAgICAgICAgICAmLnRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9iaWxlLWZyYW1le1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcblxyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmZyYW1lLWJveHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDEwMnB4O1xyXG4gICAgICAgICAgICBsZWZ0OiA0N3B4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcGxpY2F0aXZve1xyXG5cclxuICAgICAgICAubmFtZSxcclxuICAgICAgICAuZGVzY3JpdGlvbixcclxuICAgICAgICAuZG93bmxvYWQsXHJcbiAgICAgICAgLmFib3V0LFxyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogUm9ib3RvIFNsYWI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiA1dncgMCAzdncgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcml0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMCA0MHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWJvdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiA0MHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZG93bmxvYWR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkb2N0YXZlLWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDd2dztcclxuXHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMXZ3O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAuNXZ3O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjIwcHgpe1xyXG4gICAgICAgIC5jb250YWluZXJ7XHJcblxyXG4gICAgICAgICAgICAuZnJhbWV7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vYmlsZS1mcmFtZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcclxuJHNlY29uZC1jb2xvcjogIzE1MTUxNTtcclxuJHRoaXJkLWNvbG9yOiAjMjAyMDIwO1xyXG4kZm91cnRoLWNvbG9yOiAjMjkyOTI5O1xyXG4kZmlmdGgtY29sb3I6ICMzMzM4M2I7XHJcbiRzaXh0aC1jb2xvcjogIzUzODNkMztcclxuJHRoaXJ0eS1jb2xvcjogIzhmOTI5NjtcclxuJG9jdGF2ZS1jb2xvcjogI2JiYmJiYjtcclxuJG5pbnRoLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjogIzMwM2EzYjtcclxuJGVzcGVjaWFsLWNvbG9yLWZvbnQ6ICM0ZDVkNWY7Il19 */"

/***/ }),

/***/ "./src/app/home/smartphone/smartphone.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/smartphone/smartphone.component.ts ***!
  \*********************************************************/
/*! exports provided: SmartphoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmartphoneComponent", function() { return SmartphoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SmartphoneComponent = /** @class */ (function () {
    function SmartphoneComponent() {
    }
    SmartphoneComponent.prototype.ngOnInit = function () {
    };
    SmartphoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-smartphone',
            template: __webpack_require__(/*! ./smartphone.component.html */ "./src/app/home/smartphone/smartphone.component.html"),
            styles: [__webpack_require__(/*! ./smartphone.component.scss */ "./src/app/home/smartphone/smartphone.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SmartphoneComponent);
    return SmartphoneComponent;
}());



/***/ }),

/***/ "./src/app/home/trainning/trainning.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"trainning-andesenv\" id=\"trainning\">\r\n  <div class=\"container\">\r\n    <div class=\"row sobre\">\r\n      <h2>\r\n        TRAINNING\r\n        <div class=\"horizontal-line\">\r\n          <div class=\"top\"></div>\r\n          <div class=\"bottom\"></div>\r\n        </div>\r\n      </h2>\r\n    </div>\r\n\r\n    <h5 class=\"category\">Cursos | Artigos | Manuais</h5>\r\n\r\n    <div class=\"content\">\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-github\"></i></div>\r\n        <p class=\"title\">GITHUB <br> (CURSO BÁSICO)</p>\r\n        <p class=\"text\">Aplicando na prática e utilizando Git Pages</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-css3-alt\"></i></div>\r\n        <p class=\"title\">CSS <br> (CURSO BÁSICO)</p>\r\n        <p class=\"text\">Dando cor e vida ao seu site</p>\r\n      </div>\r\n      <div class=\"card\">\r\n        <div class=\"icon\"><i class=\"fab fa-js-square\"></i></div>\r\n        <p class=\"title\">JAVASCRIPT <br> (Boas Práticas)</p>\r\n        <p class=\"text\">Melhorando a escrita e funcionamento do seu código</p>\r\n      </div>\r\n    </div>\r\n\r\n    <h6>Conteúdo Trainning Completo</h6>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/home/trainning/trainning.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trainning-andesenv {\n  color: #bbbbbb;\n  background: #202020;\n  padding: 100px 0; }\n  .trainning-andesenv .sobre {\n    margin-bottom: 80px; }\n  .trainning-andesenv .sobre h2 {\n      font: 100 2.5em monospace;\n      text-transform: uppercase;\n      margin: auto; }\n  .trainning-andesenv .sobre h2 .horizontal-line {\n        margin-top: 15px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div {\n          background: #5383d3;\n          height: 2px;\n          margin: 0 auto;\n          width: 77px; }\n  .trainning-andesenv .sobre h2 .horizontal-line div.top {\n            margin-bottom: 3px;\n            width: 44px; }\n  .trainning-andesenv h6,\n  .trainning-andesenv .category {\n    text-align: center;\n    cursor: pointer; }\n  .trainning-andesenv .category {\n    font: 700 1.75em monospace;\n    color: #5383d3;\n    margin: 0 0 15px 0; }\n  .trainning-andesenv .content {\n    padding: 0 4%;\n    margin: 0 auto;\n    width: 100%;\n    max-width: 1024px;\n    display: flex;\n    justify-content: center;\n    align-items: center; }\n  .trainning-andesenv .content .card {\n      font-size: 16px;\n      background-color: #292929;\n      width: 100%;\n      max-width: 300px;\n      min-width: 200px;\n      height: 250px;\n      margin: 0px 15px;\n      border-radius: 10px;\n      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);\n      border: 2px solid rgba(7, 7, 7, 0.12);\n      justify-content: center;\n      cursor: no-drop; }\n  .trainning-andesenv .content .card:hover {\n        background: #202020; }\n  .trainning-andesenv .content .card:hover .text {\n          transition: all 0.5s ease;\n          opacity: 1;\n          max-height: 40px; }\n  .trainning-andesenv .content .card .title {\n        font: 600 1em monospace;\n        color: #ffffff;\n        text-align: center;\n        text-transform: uppercase;\n        letter-spacing: 4px;\n        width: 100%;\n        margin: 0;\n        margin-top: 10%; }\n  .trainning-andesenv .content .card .text {\n        color: #bbbbbb;\n        font-weight: 200;\n        font-size: 13px;\n        letter-spacing: 2px;\n        text-align: center;\n        width: 80%;\n        margin: 0 auto;\n        margin-top: 20px;\n        opacity: 0;\n        max-height: 0;\n        transition: all .7s ease; }\n  .trainning-andesenv .content .card .icon {\n        color: white;\n        font-size: 3em;\n        background: #5383d3;\n        margin: 0 auto;\n        width: 100%;\n        height: 80px;\n        max-width: 80px;\n        border-radius: 100%;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n  .trainning-andesenv h6 {\n    font: 700 1.3em Roboto Slab;\n    margin: 7.5% 0 0 0; }\n  .trainning-andesenv h6:hover {\n      color: #5383d3; }\n  @media screen and (max-width: 767px) {\n    .trainning-andesenv .content {\n      flex-direction: column; }\n    .trainning-andesenv .content .card {\n      margin: 15px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90cmFpbm5pbmcvQzpcXFVzZXJzXFxsdWNhc1xcT25lRHJpdmVcXERvY3VtZW50b3NcXFByb2pldG9zXFxQb3J0Zm9saW8vc3JjXFxhcHBcXGhvbWVcXHRyYWlubmluZ1xcdHJhaW5uaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL3RyYWlubmluZy9DOlxcVXNlcnNcXGx1Y2FzXFxPbmVEcml2ZVxcRG9jdW1lbnRvc1xcUHJvamV0b3NcXFBvcnRmb2xpby9zcmNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0NJa0I7RURIbEIsbUJDRmlCO0VER2pCLGdCQUFnQixFQUFBO0VBSHBCO0lBTVEsbUJBQW1CLEVBQUE7RUFOM0I7TUFTWSx5QkFBeUI7TUFDekIseUJBQXlCO01BRXpCLFlBQVksRUFBQTtFQVp4QjtRQWVnQixnQkFBZ0IsRUFBQTtFQWZoQztVQWtCb0IsbUJDZkM7VURnQkQsV0FBVztVQUNYLGNBQWM7VUFDZCxXQUFXLEVBQUE7RUFyQi9CO1lBdUJ3QixrQkFBa0I7WUFDbEIsV0FBVyxFQUFBO0VBeEJuQzs7SUFpQ1Esa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQWxDdkI7SUFzQ1EsMEJBQTBCO0lBQzFCLGNDcENhO0lEc0NiLGtCQUFrQixFQUFBO0VBekMxQjtJQTZDUSxhQUFhO0lBRWIsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFFakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUIsRUFBQTtFQXJEM0I7TUF3RFksZUFBZTtNQUNmLHlCQ3hEVTtNRDBEVixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsZ0JBQWdCO01BRWhCLG1CQUFtQjtNQUNuQiw0Q0FBNEM7TUFDNUMscUNBQXFDO01BQ3JDLHVCQUF1QjtNQUV2QixlQUFlLEVBQUE7RUF0RTNCO1FBeUVnQixtQkN6RUssRUFBQTtFREFyQjtVQTRFb0IseUJBQXlCO1VBQ3pCLFVBQVU7VUFDVixnQkFBZSxFQUFBO0VBOUVuQztRQW1GZ0IsdUJBQXVCO1FBQ3ZCLGNDOUVLO1FEK0VMLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsbUJBQW1CO1FBRW5CLFdBQVc7UUFDWCxTQUFTO1FBQ1QsZUFBZSxFQUFBO0VBM0YvQjtRQStGZ0IsY0MxRk07UUQyRk4sZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsa0JBQWtCO1FBRWxCLFVBQVU7UUFDVixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixhQUFZO1FBQ1osd0JBQXdCLEVBQUE7RUExR3hDO1FBOEdnQixZQUFZO1FBQ1osY0FBYztRQUVkLG1CQzlHSztRRCtHTCxjQUFjO1FBQ2QsV0FBVztRQUNYLFlBQVk7UUFDWixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7RUF6SG5DO0lBK0hRLDJCQUEyQjtJQUMzQixrQkFBa0IsRUFBQTtFQWhJMUI7TUFtSVksY0NoSVMsRUFBQTtFRG9JakI7SUF2SUo7TUF5SVksc0JBQXNCLEVBQUE7SUF6SWxDO01BNklZLGNBQWMsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdHJhaW5uaW5nL3RyYWlubmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLnRyYWlubmluZy1hbmRlc2VudntcclxuICAgIGNvbG9yOiAkb2N0YXZlLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZDogJHRoaXJkLWNvbG9yO1xyXG4gICAgcGFkZGluZzogMTAwcHggMDtcclxuXHJcbiAgICAuc29icmV7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQ6IDEwMCAyLjVlbSBtb25vc3BhY2U7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaG9yaXpvbnRhbC1saW5lIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkc2l4dGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJi50b3Age1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoNixcclxuICAgIC5jYXRlZ29yeXtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeXtcclxuICAgICAgICBmb250OiA3MDAgMS43NWVtIG1vbm9zcGFjZTtcclxuICAgICAgICBjb2xvcjogJHNpeHRoLWNvbG9yO1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgMCAxNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNCU7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvdXJ0aC1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNXB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNywgNywgNywgMC4xMik7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgY3Vyc29yOiBuby1kcm9wO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGhpcmQtY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250OiA2MDAgMWVtIG1vbm9zcGFjZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbmludGgtY29sb3I7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRvY3RhdmUtY29sb3I7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAuN3MgZWFzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHNpeHRoLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcblxyXG4gICAgaDZ7XHJcbiAgICAgICAgZm9udDogNzAwIDEuM2VtIFJvYm90byBTbGFiO1xyXG4gICAgICAgIG1hcmdpbjogNy41JSAwIDAgMDtcclxuXHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgY29sb3I6ICRzaXh0aC1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IC5jYXJke1xyXG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzAwMDAwMDtcclxuJHNlY29uZC1jb2xvcjogIzE1MTUxNTtcclxuJHRoaXJkLWNvbG9yOiAjMjAyMDIwO1xyXG4kZm91cnRoLWNvbG9yOiAjMjkyOTI5O1xyXG4kZmlmdGgtY29sb3I6ICMzMzM4M2I7XHJcbiRzaXh0aC1jb2xvcjogIzUzODNkMztcclxuJHRoaXJ0eS1jb2xvcjogIzhmOTI5NjtcclxuJG9jdGF2ZS1jb2xvcjogI2JiYmJiYjtcclxuJG5pbnRoLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuJGVzcGVjaWFsLWNvbG9yLWJvcmRlcjogIzMwM2EzYjtcclxuJGVzcGVjaWFsLWNvbG9yLWZvbnQ6ICM0ZDVkNWY7Il19 */"

/***/ }),

/***/ "./src/app/home/trainning/trainning.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/trainning/trainning.component.ts ***!
  \*******************************************************/
/*! exports provided: TrainningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainningComponent", function() { return TrainningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrainningComponent = /** @class */ (function () {
    function TrainningComponent() {
    }
    TrainningComponent.prototype.ngOnInit = function () {
    };
    TrainningComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trainning',
            template: __webpack_require__(/*! ./trainning.component.html */ "./src/app/home/trainning/trainning.component.html"),
            styles: [__webpack_require__(/*! ./trainning.component.scss */ "./src/app/home/trainning/trainning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TrainningComponent);
    return TrainningComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lucas\OneDrive\Documentos\Projetos\Portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map