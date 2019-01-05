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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
        this.title = 'matlab-juegos';
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
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"container\">\n    <div class=\"footer-grids\">\n      <div class=\"col-md-6 footer-text\">\n        <h3>Sobre Nosotros</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          Et quis fuga aliquid omnis eum doloremque, aspernatur facilis ad voluptatibus\n          vero deserunt sequi eius obcaecati excepturi reiciendis sunt magnam corrupti hic.</p>\n        <a href=\"\" class=\"read\">Leer Más</a>\n      </div>\n      <div class=\"col-md-6 footer-info\">\n        <h3>Contacto</h3>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.\n          Et quis fuga aliquid omnis eum doloremque, aspernatur facilis ad voluptatibus\n          vero deserunt sequi eius obcaecati excepturi reiciendis sunt magnam corrupti hic.</p>\n        <div class=\"contact-links\">\n          <a href=\"https://www.facebook.com/TCU.LABMATE/\">\n            <fa name=\"facebook-square\" class=\"icon\"></fa>\n          </a>\n          <fa name=\"envelope\" class=\"icon\"></fa>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n    <div class=\"copy\">\n      <p> © 2019. Propiedad del <a href=\"https://www.facebook.com/TCU.LABMATE/\"> Laboratorio de Matemática, UCRSO </a></p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #29292A;\n  padding: 2em 0 1em;\n  text-align: left; }\n  .footer .footer-grids .footer-text {\n    float: left; }\n  .footer .footer-grids .footer-text h3 {\n      color: #fec63f;\n      font-size: 1.4em;\n      font-weight: 400;\n      text-decoration: none;\n      line-height: 1.4em;\n      font-family: 'Fugaz One', cursive;\n      margin: 0.6em 0; }\n  .footer .footer-grids .footer-text p {\n      font-size: 0.9em;\n      color: #fff;\n      line-height: 1.8em; }\n  .footer .footer-grids .footer-text a.read {\n      color: #fff;\n      font-size: 1em;\n      padding: 0.8em 2em;\n      background: #5bb2fc;\n      margin: 1em 0;\n      display: inline-block;\n      -webkit-appearance: none; }\n  .footer .footer-grids .footer-info {\n    float: right; }\n  .footer .footer-grids .footer-info h3 {\n      color: #fec63f;\n      font-size: 1.4em;\n      font-weight: 400;\n      text-decoration: none;\n      line-height: 1.4em;\n      font-family: 'Fugaz One', cursive;\n      margin: 0.6em 0; }\n  .footer .footer-grids .footer-info p {\n      font-size: 0.9em;\n      color: #fff;\n      line-height: 1.8em; }\n  .footer .footer-grids .footer-info .contact-links {\n      border-top: 1px ridge rgba(50, 50, 50, 0.92);\n      color: #fff;\n      font-size: 2em; }\n  .footer .footer-grids .footer-info .contact-links a {\n        color: #fff; }\n  .footer .footer-grids .footer-info .contact-links .icon {\n        padding: 0px 10px 0px 10px; }\n  .footer .copy {\n    text-align: center;\n    border-top: 1px ridge rgba(50, 50, 50, 0.92);\n    padding-top: 1em; }\n  .footer .copy p {\n      color: #fff;\n      font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc3VlL0RvY3VtZW50b3MvVENVL21hdGxhYi1qdWVnb3Mvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQW1CO0VBQ25CLG1CQUFrQjtFQUNsQixpQkFBZ0IsRUFzRW5CO0VBekVEO0lBUVksWUFBVyxFQXdCZDtFQWhDVDtNQVVnQixlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLGtDQUFpQztNQUNqQyxnQkFBZSxFQUNsQjtFQWpCYjtNQW1CZ0IsaUJBQWdCO01BQ2hCLFlBQVc7TUFDWCxtQkFBa0IsRUFDckI7RUF0QmI7TUF3QmdCLFlBQVc7TUFDWCxlQUFjO01BQ2QsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixjQUFhO01BQ2Isc0JBQXFCO01BQ3JCLHlCQUF3QixFQUMzQjtFQS9CYjtJQW1DWSxhQUFZLEVBMEJmO0VBN0RUO01BcUNnQixlQUFjO01BQ2QsaUJBQWdCO01BQ2hCLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsbUJBQWtCO01BQ2xCLGtDQUFpQztNQUNqQyxnQkFBZSxFQUNsQjtFQTVDYjtNQThDZ0IsaUJBQWdCO01BQ2hCLFlBQVc7TUFDWCxtQkFBa0IsRUFDckI7RUFqRGI7TUFtRGdCLDZDQUE0QztNQUM1QyxZQUFXO01BQ1gsZUFBYyxFQU9qQjtFQTVEYjtRQXVEb0IsWUFBVyxFQUNkO0VBeERqQjtRQTBEb0IsMkJBQTBCLEVBQzdCO0VBM0RqQjtJQWlFUSxtQkFBa0I7SUFDbEIsNkNBQTRDO0lBQzVDLGlCQUFnQixFQUtuQjtFQXhFTDtNQXFFWSxZQUFXO01BQ1gsZUFBYyxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICAgIGJhY2tncm91bmQ6ICMyOTI5MkE7XG4gICAgcGFkZGluZzogMmVtIDAgMWVtO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAuZm9vdGVyLWdyaWRze1xuXG4gICAgICAgIC5mb290ZXItdGV4dCB7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZlYzYzZjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0Z1Z2F6IE9uZScsIGN1cnNpdmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjZlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhLnJlYWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOGVtIDJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNWJiMmZjO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mb290ZXItaW5mbyB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZWM2M2Y7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdGdWdheiBPbmUnLCBjdXJzaXZlO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC42ZW0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3QtbGlua3Mge1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCByaWRnZSByZ2JhKDUwLCA1MCwgNTAsIDAuOTIpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb3B5IHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggcmlkZ2UgcmdiYSg1MCwgNTAsIDUwLCAwLjkyKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-top\">\n  <div class=\"container\">\n    <div class=\"head-nav\">\n      <div class=\"logo\">\n        <h1 class=\"title\">LabMat <span>Juegos</span></h1>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"top-menu\">\n        <ul>\n          <li class=\"li-header color1\">Inicio</li>\n          <li class=\"li-header color2\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n             Juegos\n            <ul class=\"dropdown-menu\" role=\"menu\">\n              <li><p>Juego 1</p> </li>\n              <li><p>Juego 2</p></li>\n              <li><p>Juego 3</p></li>\n            </ul>\n          </li>\n\n          <li class=\"li-header color3\">Información</li>\n          <div class=\"clearfix\"></div>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-top {\n  background: #fff; }\n  .header-top .head-nav {\n    padding: 2em 0;\n    position: relative; }\n  .header-top .head-nav .logo {\n      text-align: center;\n      padding-bottom: 1em; }\n  .header-top .head-nav .logo .title {\n        color: #5bb2fc;\n        font-size: 3em;\n        font-weight: 400;\n        font-family: 'Fugaz One', cursive;\n        cursor: pointer; }\n  .header-top .head-nav .logo .title span {\n          color: #fec63f; }\n  .header-top .head-nav .top-menu {\n      display: flex;\n      justify-content: center; }\n  .header-top .head-nav .top-menu ul {\n        margin: 0;\n        padding: 0; }\n  .header-top .head-nav .top-menu ul .li-header {\n          display: inline-block;\n          margin: 0;\n          color: #fff;\n          float: left;\n          vertical-align: top;\n          display: inline-block;\n          color: #fff;\n          text-decoration: none;\n          font-size: 1em;\n          padding: 1.2em 4.38em 1em 4.3em;\n          font-weight: 400;\n          cursor: pointer; }\n  .header-top .head-nav .top-menu ul .color1 {\n          background: #5bb2fc; }\n  .header-top .head-nav .top-menu ul .color2 {\n          background: #ffa659; }\n  .header-top .head-nav .top-menu ul .color2 ul {\n            background: #ffa659; }\n  .header-top .head-nav .top-menu ul .color2 ul li {\n              color: #fff;\n              padding: 2px; }\n  .header-top .head-nav .top-menu ul .color2 ul li :hover {\n                color: black; }\n  .header-top .head-nav .top-menu ul .color3 {\n          background: #B881CF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2pvc3VlL0RvY3VtZW50b3MvVENVL21hdGxhYi1qdWVnb3Mvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCLEVBNkRuQjtFQTlERDtJQUdRLGVBQWM7SUFDZCxtQkFBa0IsRUF5RHJCO0VBN0RMO01BTVksbUJBQWtCO01BQ2xCLG9CQUFtQixFQVd0QjtFQWxCVDtRQVNnQixlQUFjO1FBQ2QsZUFBYztRQUNkLGlCQUFnQjtRQUNoQixrQ0FBaUM7UUFDakMsZ0JBQWUsRUFJbEI7RUFqQmI7VUFlb0IsZUFBYyxFQUNqQjtFQWhCakI7TUFxQlksY0FBYTtNQUNiLHdCQUF1QixFQXNDMUI7RUE1RFQ7UUF3QmdCLFVBQVM7UUFDVCxXQUFVLEVBa0NiO0VBM0RiO1VBMkJvQixzQkFBcUI7VUFDckIsVUFBUztVQUNULFlBQVc7VUFDWCxZQUFXO1VBQ1gsb0JBQW1CO1VBQ25CLHNCQUFxQjtVQUNyQixZQUFXO1VBQ1gsc0JBQXFCO1VBQ3JCLGVBQWM7VUFDZCxnQ0FBK0I7VUFDL0IsaUJBQWdCO1VBQ2hCLGdCQUFlLEVBQ2xCO0VBdkNqQjtVQXlDb0Isb0JBQW1CLEVBQ3RCO0VBMUNqQjtVQTRDb0Isb0JBQW1CLEVBV3RCO0VBdkRqQjtZQThDd0Isb0JBQW1CLEVBUXRCO0VBdERyQjtjQWdENEIsWUFBVztjQUNYLGFBQVksRUFJZjtFQXJEekI7Z0JBbURnQyxhQUFZLEVBQ2Y7RUFwRDdCO1VBeURvQixvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci10b3Age1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLmhlYWQtbmF2IHtcbiAgICAgICAgcGFkZGluZzogMmVtIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTsgICAgIFxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzViYjJmYztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnRnVnYXogT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmVjNjNmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50b3AtbWVudXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAubGktaGVhZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS4yZW0gNC4zOGVtIDFlbSA0LjNlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY29sb3IxIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzViYjJmYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbG9yMiB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmE2NTk7XG4gICAgICAgICAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmE2NTk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNvbG9yMyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNCODgxQ0Y7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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

module.exports = __webpack_require__(/*! /home/josue/Documentos/TCU/matlab-juegos/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map