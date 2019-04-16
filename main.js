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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-loading {\n  position: fixed;\n  top: 40%;\n  left: 48%;\n  width: 100px;\n  z-index: 9999;\n  font-size: 2em;\n  font-weight: bold;\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixRQUFRO0VBQ1IsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90ZWwtbG9hZGluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDQ4JTtcbiAgd2lkdGg6IDEwMHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBmb250LXNpemU6IDJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbiJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(toastr, authService) {
        this.toastr = toastr;
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_hotels_hotels_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/hotels/hotels.module */ "./src/app/components/hotels/hotels.module.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _services_hotels_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/hotels.service */ "./src/app/services/hotels.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_navbar_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/navbar/favorites/favorites.component */ "./src/app/components/navbar/favorites/favorites.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
/* harmony import */ var _interceprors_token_interceptor__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./interceprors/token.interceptor */ "./src/app/interceprors/token.interceptor.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            entryComponents: [_components_navbar_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__["FavoritesComponent"]],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_21__["MenuComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SearchPipe"],
                _components_navbar_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_20__["FavoritesComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_19__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _components_main_main_component__WEBPACK_IMPORTED_MODULE_23__["MainComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _components_hotels_hotels_module__WEBPACK_IMPORTED_MODULE_13__["HotelsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    positionClass: 'toast-bottom-right'
                }),
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                    useClass: _interceprors_token_interceptor__WEBPACK_IMPORTED_MODULE_24__["TokenInterceptor"],
                    multi: true,
                },
                _services_hotels_service__WEBPACK_IMPORTED_MODULE_16__["HotelsService"],
                _services_favorites_service__WEBPACK_IMPORTED_MODULE_15__["FavoritesService"],
                { provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], useValue: {} }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_17__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"center\">\n    © 2019 Hotels. All rights reserved | Design by Iaroslav Zhbankov\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  position: absolute;\n  bottom: 10px;\n  width: 99%; }\n  .footer .center {\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVSxFQUFBO0VBSFo7SUFNSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDk5JTtcblxuICAuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/details/details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/details/details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-details\" *ngIf=\"hotel; else elseBlock\">\n  <div *ngFor=\"let imgPath of hotel.photos\" class=\"hotels-pictures\">\n    <img src=\"{{imgPath}}\">\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-4\">\n      <app-profile [profile]=\"hotel.profile\"></app-profile>\n    </div>\n    <div class=\"col-md-4\">\n      <app-weather [weather]=\"hotel.weather\"></app-weather>\n    </div>\n    <div class=\"col-md-2\"></div>\n  </div>\n</div>\n\n<ng-template #elseBlock>\n  <div class=\"hotel-details\"></div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/components/hotels/details/details.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/details/details.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-details {\n  width: 50%;\n  text-align: center;\n  margin: 0 auto;\n  margin-bottom: 30px;\n  min-height: 300px; }\n\n.hotels-pictures {\n  display: inline-block;\n  margin: 10px;\n  width: 400px; }\n\n.hotels-pictures img {\n    position: relative;\n    float: left;\n    width: 400px;\n    height: 200px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover; }\n\n.hotels-pictures img:hover {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFIZDtJQU1JLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLHNCQUFzQixFQUFBOztBQVoxQjtJQWdCSSw0RUFBNEUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob3RlbC1kZXRhaWxzIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbWluLWhlaWdodDogMzAwcHg7XG59XG5cbi5ob3RlbHMtcGljdHVyZXMge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDQwMHB4O1xuXG4gIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB9XG5cbiAgaW1nOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/hotels/details/details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/hotels/details/details.component.ts ***!
  \****************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DetailsComponent.prototype, "hotel", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/components/hotels/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/components/hotels/details/details.component.scss")]
        })
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/hotel/hotel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/hotels/hotel/hotel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-list-item row\" [ngStyle]=\"{'background-color': index  % 2 === 0 ? '#18a3ed':'#1891D9'}\">\n  <div class=\"col-md-9\">\n    <h5>{{hotel.title}}</h5>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">Address:</div>\n      <div class=\"col-md-6\">{{hotel.address}}</div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-6\">Phone:</div>\n      <div class=\"col-md-6\">{{hotel.phone}}</div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">{{hotel.description}}</div>\n    </div>\n  </div>\n\n  <div class=\"col-md-3\">\n    <div class=\"hotel-picture\"><img src=\"{{hotel.picture}}\"></div>\n    <div class=\"hotel-favorites-btn\">\n      <div *ngIf=\"!favoriteService.hotelInFavorites(hotel); else elseBlock\">\n        <button (click)=\"addHotel(hotel, $event)\">Add</button>\n      </div>\n      <ng-template #elseBlock>\n        <button (click)=\"removeHotel(hotel, $event)\">Remove</button>\n      </ng-template>\n    </div>\n  </div>\n\n  <hr/>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/hotel/hotel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/hotels/hotel/hotel.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-list-item {\n  padding-top: 10px;\n  width: 100%;\n  margin: 0 auto; }\n\n.hotel-list-item:hover {\n  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2); }\n\n.hotel-picture {\n  width: 100px; }\n\n.hotel-picture img {\n    height: auto;\n    width: 100%; }\n\n.hotel-favorites-btn {\n  text-align: center;\n  margin-top: 10px; }\n\n.hotel-favorites-btn button {\n    border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2hvdGVsL2hvdGVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsMENBQXNDLEVBQUE7O0FBR3hDO0VBQ0UsWUFBWSxFQUFBOztBQURkO0lBSUksWUFBWTtJQUNaLFdBQ0YsRUFBQTs7QUFHRjtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFGbEI7SUFLSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2hvdGVsL2hvdGVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdGVsLWxpc3QtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ob3RlbC1saXN0LWl0ZW06aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDAgMTFweCByZ2JhKDMzLDMzLDMzLC4yKTtcbn1cblxuLmhvdGVsLXBpY3R1cmUge1xuICB3aWR0aDogMTAwcHg7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCVcbiAgfVxufVxuXG4uaG90ZWwtZmF2b3JpdGVzLWJ0biB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcblxuICBidXR0b24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/hotels/hotel/hotel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/hotels/hotel/hotel.component.ts ***!
  \************************************************************/
/*! exports provided: HotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelComponent", function() { return HotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/favorites.service */ "./src/app/services/favorites.service.ts");



var HotelComponent = /** @class */ (function () {
    function HotelComponent(favoriteService) {
        this.favoriteService = favoriteService;
    }
    HotelComponent.prototype.addHotel = function (hotel, event) {
        event.stopPropagation();
        this.favoriteService.addFavorites(hotel);
    };
    HotelComponent.prototype.removeHotel = function (hotel, event) {
        event.stopPropagation();
        this.favoriteService.removeFromFavorites(hotel);
    };
    HotelComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HotelComponent.prototype, "hotel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], HotelComponent.prototype, "index", void 0);
    HotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hotel',
            template: __webpack_require__(/*! ./hotel.component.html */ "./src/app/components/hotels/hotel/hotel.component.html"),
            styles: [__webpack_require__(/*! ./hotel.component.scss */ "./src/app/components/hotels/hotel/hotel.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]])
    ], HotelComponent);
    return HotelComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/hotels.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/hotels/hotels.module.ts ***!
  \****************************************************/
/*! exports provided: HotelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsModule", function() { return HotelsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/components/hotels/weather/weather.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/components/hotels/profile/profile.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list/list.component */ "./src/app/components/hotels/list/list.component.ts");
/* harmony import */ var _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hotel/hotel.component */ "./src/app/components/hotels/hotel/hotel.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./details/details.component */ "./src/app/components/hotels/details/details.component.ts");









var HotelsModule = /** @class */ (function () {
    function HotelsModule() {
    }
    HotelsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_7__["HotelComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            ],
            exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_6__["ListComponent"], _details_details_component__WEBPACK_IMPORTED_MODULE_8__["DetailsComponent"], _hotel_hotel_component__WEBPACK_IMPORTED_MODULE_7__["HotelComponent"]]
        })
    ], HotelsModule);
    return HotelsModule;
}());



/***/ }),

/***/ "./src/app/components/hotels/list/list.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/hotels/list/list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-list\">\n  <mat-list [className]=\"'items-list'\">\n    <mat-list-item *ngFor=\"let hotel of hotels; let i = index;\">\n      <app-hotel\n        [index]=\"i\"\n        [hotel]=\"hotel\"\n        (click)=\"selectHotel(hotel)\"\n      ></app-hotel>\n      <hr/>\n    </mat-list-item>\n  </mat-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/list/list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/hotels/list/list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".items-list {\n  height: auto; }\n\n.hotel-list {\n  border-radius: 10px;\n  padding: 5px;\n  width: 600px;\n  height: 400px;\n  margin: 0 auto;\n  overflow-y: auto;\n  background-color: #1891D9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTs7QUFPZDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob3RlbHMvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW1zLWxpc3Qge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5hcHAtbGlzdCB7XG4gIC8vbWF4LXdpZHRoOiA0MDBweDtcbn1cblxuLmhvdGVsLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkxRDk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/hotels/list/list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/hotels/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.hotel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ListComponent.prototype.selectHotel = function (hotel) {
        this.hotel.emit(hotel);
    };
    ListComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ListComponent.prototype, "hotels", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ListComponent.prototype, "isDataLoading", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ListComponent.prototype, "hotel", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/components/hotels/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.scss */ "./src/app/components/hotels/list/list.component.scss")]
        })
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/profile/profile.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/profile/profile.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-profile container\">\n  <h3>Hotel profile</h3>\n  <hr />\n\n  <div class=\"row\">\n\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">Followers:</div>\n        <div class=\"col-md-6\">{{profile.followers}}</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">Following:</div>\n        <div class=\"col-md-6\">{{profile.following}}</div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <img src=\"{{profile.photo}}\"/>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/profile/profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/profile/profile.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-profile {\n  background-color: #ffeee9;\n  color: black;\n  border-radius: 10px; }\n  .hotel-profile img {\n    position: relative;\n    float: left;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7RUFIckI7SUFNSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDRFQUE0RSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob3RlbHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvdGVsLXByb2ZpbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZWU5O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICB9XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/hotels/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/hotels/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ProfileComponent.prototype, "profile", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/hotels/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/hotels/profile/profile.component.scss")]
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/weather/weather.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/weather/weather.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hotel-weather container\">\n  <h3>The weather</h3>\n  <hr />\n  <div class=\"row\">\n\n    <div class=\"col-md-9\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">Temperature:</div>\n        <div class=\"col-md-6\">{{weather.temperature}}\t&#176;</div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">Wind:</div>\n        <div class=\"col-md-6\">{{weather.wind}} m/sec</div>\n      </div>\n    </div>\n\n    <div class=\"col-md-3\">\n      <span class=\"weather.icon\"></span>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/hotels/weather/weather.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/hotels/weather/weather.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hotel-weather {\n  background-color: #ffeee9;\n  color: black;\n  border-radius: 10px; }\n\n.rain {\n  background: url('rain.png') no-repeat top left;\n  height: 50px;\n  width: 50px;\n  display: inline-block;\n  background-size: 50px 50px; }\n\n.sun {\n  background: url('sun.png') no-repeat top left;\n  height: 50px;\n  width: 50px;\n  display: inline-block;\n  background-size: 50px 50px; }\n\n.cloud {\n  background: url('cloudy.png') no-repeat top left;\n  height: 50px;\n  width: 50px;\n  display: inline-block;\n  background-size: 50px 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL3dlYXRoZXIvd2VhdGhlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsOENBQXdFO0VBQ3hFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLDBCQUEwQixFQUFBOztBQUk1QjtFQUNFLDZDQUF1RTtFQUN2RSxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTs7QUFJNUI7RUFDRSxnREFBMEU7RUFDMUUsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvdGVscy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG90ZWwtd2VhdGhlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVlZTk7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnJhaW4ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmFpbi5wbmcnKSBuby1yZXBlYXQgdG9wIGxlZnQ7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDUwcHg7XG5cbn1cblxuLnN1biB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9zdW4ucG5nJykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xuXG59XG5cbi5jbG91ZCB7XG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jbG91ZHkucG5nJykgbm8tcmVwZWF0IHRvcCBsZWZ0O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/hotels/weather/weather.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/hotels/weather/weather.component.ts ***!
  \****************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WeatherComponent.prototype, "weather", void 0);
    WeatherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/components/hotels/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/components/hotels/weather/weather.component.scss")]
        })
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"text-center\">\n      <label for=\"email\">Email</label>\n    </div>\n    <div class=\"text-center\">\n      <input type=\"text\" id='email' formControlName=\"email\">\n    </div>\n\n    <div class=\"text-center\">\n      <label for=\"password\">Password</label>\n    </div>\n    <div class=\"text-center\">\n      <input type=\"password\" id='password' formControlName=\"password\">\n    </div>\n\n    <div class=\"text-center\">\n      <button type=\"submit\">Login</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  top: 40%;\n  left: 40%;\n  position: absolute;\n  background-color: #84b0deed;\n  width: 300px;\n  height: 250px;\n  padding: 20px; }\n  .login button {\n    margin-top: 20px;\n    width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsWUFBYTtFQUNiLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFQZjtJQVVJLGdCQUFnQjtJQUNoQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luIHtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDQwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRiMGRlZWQ7XG4gIHdpZHRoOiAgMzAwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgYnV0dG9uICB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB3aWR0aDogOTAlO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        this.authService.logIn(this.loginForm.value);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/main/main.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isDataLoading;\">\n  <div class=\"hotel-loading\">\n    <div class=\"loader\"></div>\n    <div>Loading...</div>\n  </div>\n</div>\n\n<app-details [hotel]=\"selectedHotel\"></app-details>\n\n<app-menu\n  [selectedFilter]=\"activeFilter\"\n  (activeFilter)=\"setActiveFilter($event)\"\n  (searchValue)=\"setSearchValue($event)\"\n></app-menu>\n\n<app-list\n  [hotels]=\"hotels | filter: activeFilter | search: searchValue\"\n  [isDataLoading]=\"isDataLoading\"\n  (hotel)=\"displaySelectedHotel($event)\"\n></app-list>\n"

/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_hotels_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/hotels.service */ "./src/app/services/hotels.service.ts");




var MainComponent = /** @class */ (function () {
    function MainComponent(toastr, hotelsService) {
        this.toastr = toastr;
        this.hotelsService = hotelsService;
        this.isDataLoading = true;
    }
    MainComponent.prototype.displaySelectedHotel = function (hotel) {
        this.selectedHotel = hotel;
    };
    MainComponent.prototype.setActiveFilter = function (filter) {
        this.activeFilter = filter;
    };
    MainComponent.prototype.setSearchValue = function (value) {
        this.searchValue = value;
    };
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelsService.loadAll()
            .subscribe(function (hotels) {
            _this.hotels = hotels;
            _this.selectedHotel = hotels[0];
        }, function () {
        }, function () {
            _this.isDataLoading = false;
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _services_hotels_service__WEBPACK_IMPORTED_MODULE_3__["HotelsService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <div class=\"row menu-content\">\n    <div class=\"col-md-4 menu-search\">\n      <input type=\"text\" placeholder=\"Search\" (change)=\"setSearchValue($event)\"/>\n    </div>\n    <div  class=\"col-md-1\"></div>\n    <div class=\"col-md-7 menu-filter-buttons\">\n      <div class=\"row text-center\">\n        <div class=\"menu-filter\" *ngFor=\"let filter of filters\">\n          <button [className]=\"selectedFilter === filter ? 'checked' : ''\" (click)=\"setActiveFilter(filter)\">{{filter}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  color: black;\n  border-radius: 10px;\n  padding: 5px;\n  width: 600px;\n  height: 50px;\n  margin: 0 auto;\n  background-color: #d4d9be; }\n\n.menu-content {\n  margin-top: 5px;\n  margin-left: 5px; }\n\n.menu-search input {\n  border-radius: 5px; }\n\n.menu-filter {\n  min-width: 40px;\n  margin-right: 10px;\n  margin-left: 10px;\n  text-align: center;\n  cursor: pointer; }\n\n.menu-filter .checked {\n    min-width: 40px;\n    border-radius: 5px;\n    background-color: #aeb39b; }\n\n.menu-filter button {\n    background-color: Transparent;\n    background-repeat: no-repeat;\n    border: none;\n    cursor: pointer;\n    overflow: hidden;\n    outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBTGpCO0lBUUksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUIsRUFBQTs7QUFWN0I7SUFjSSw2QkFBNkI7SUFDN0IsNEJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGFBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRkOWJlO1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWVudS1zZWFyY2ggaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tZW51LWZpbHRlciB7XG4gIG1pbi13aWR0aDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgLmNoZWNrZWQge1xuICAgIG1pbi13aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FlYjM5YjtcbiAgfVxuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogVHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG91dGxpbmU6bm9uZTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants */ "./src/common/constants/index.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.filters = Object.values(_common_constants__WEBPACK_IMPORTED_MODULE_2__["FILTERS"]);
        this.activeFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchValue = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.setActiveFilter = function (filter) {
        this.activeFilter.emit(filter);
    };
    MenuComponent.prototype.setSearchValue = function (event) {
        this.searchValue.emit(event.target.value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], MenuComponent.prototype, "selectedFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "activeFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MenuComponent.prototype, "searchValue", void 0);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/components/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/favorites/favorites.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/navbar/favorites/favorites.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Favorites:</h1>\n\n<span *ngIf=\"favorites.length > 0; else elseBlock\">\n<mat-list [className]=\"'items-list'\">\n  <mat-list-item *ngFor=\"let hotel of favorites; let i = index;\">\n    <app-hotel\n      [index]=\"i\"\n      [hotel]=\"hotel\"\n    ></app-hotel>\n    <hr/>\n  </mat-list-item>\n</mat-list>\n</span>\n\n<ng-template #elseBlock>\n  <div>The favorites is empty</div>\n</ng-template>\n\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onCloseClick()\">Close</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/favorites/favorites.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/navbar/favorites/favorites.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/navbar/favorites/favorites.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/navbar/favorites/favorites.component.ts ***!
  \********************************************************************/
/*! exports provided: FavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function() { return FavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/favorites.service */ "./src/app/services/favorites.service.ts");




var FavoritesComponent = /** @class */ (function () {
    function FavoritesComponent(dialogRef, favoriteService) {
        this.dialogRef = dialogRef;
        this.favoriteService = favoriteService;
        this.favorites = [];
    }
    FavoritesComponent.prototype.onCloseClick = function () {
        this.dialogRef.close();
    };
    FavoritesComponent.prototype.ngOnInit = function () {
        this.favorites = this.favoriteService.getFavorites();
    };
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorites',
            template: __webpack_require__(/*! ./favorites.component.html */ "./src/app/components/navbar/favorites/favorites.component.html"),
            styles: [__webpack_require__(/*! ./favorites.component.scss */ "./src/app/components/navbar/favorites/favorites.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_favorites_service__WEBPACK_IMPORTED_MODULE_3__["FavoritesService"]])
    ], FavoritesComponent);
    return FavoritesComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"blueGrey\">\n  <mat-toolbar-row>\n    <span>The Hotels Watcher</span>\n    <span class=\"example-spacer\"></span>\n    <span style=\"color:red\">{{getFavoritesCount() || ''}}</span>\n\n    <mat-icon\n      (click)=\"handleFavoriteClick()\"\n      class=\"favorites-icon\"\n      matTooltip=\"Favorites\">{{hasFavorites() ? 'favorite' : 'favorite_border'}}\n    </mat-icon>\n\n    <button (click)=\"logOut()\">Logout</button>\n\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".favorites-icon {\n  padding: 0;\n  cursor: pointer; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhcm9zbGF2L1dlYnN0b3JtUHJvamVjdHMvR0wtSG90ZWxzLUFwcC9zcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlcy1pY29uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhhbXBsZS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/favorites.service */ "./src/app/services/favorites.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favorites/favorites.component */ "./src/app/components/navbar/favorites/favorites.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(favoriteService, dialog, auth) {
        this.favoriteService = favoriteService;
        this.dialog = dialog;
        this.auth = auth;
    }
    NavbarComponent.prototype.getFavoritesCount = function () {
        return this.favoriteService.getFavoritesCount();
    };
    NavbarComponent.prototype.hasFavorites = function () {
        return this.favoriteService.getFavoritesCount() > 0;
    };
    NavbarComponent.prototype.logOut = function () {
        this.auth.logOut();
    };
    NavbarComponent.prototype.handleFavoriteClick = function () {
        var dialogRef = this.dialog.open(_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_4__["FavoritesComponent"], {
            width: '600px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/interceprors/token.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/interceprors/token.interceptor.ts ***!
  \***************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.auth.getToken(),
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe, SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils/index.ts");



var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (hotels, filter) {
        console.log('hotels ', hotels);
        var numericStars = Object(_common_utils__WEBPACK_IMPORTED_MODULE_2__["getNumberValueFromString"])(filter);
        if (!numericStars) {
            return hotels;
        }
        return hotels.filter(function (hotel) {
            return hotel.stars === numericStars;
        });
    };
    FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (hotels, searchValue) {
        if (!searchValue || searchValue.length === 0) {
            return hotels;
        }
        return hotels.filter(function (hotel) {
            return hotel.title.indexOf(searchValue) !== -1;
        });
    };
    SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
    }
    AuthService.prototype.logIn = function (loginBody) {
        var _this = this;
        var email = loginBody.email;
        var password = loginBody.password;
        this.http.post(this.baseUrl + "/auth/login", { password: password, email: email }, { headers: {} }).subscribe(function (response) {
            sessionStorage.clear();
            sessionStorage.setItem('EMAIL', response.user.email);
            sessionStorage.setItem('TOKEN', response.token);
            _this.router.navigate(['main']);
        }, Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(error);
        }));
    };
    AuthService.prototype.logOut = function () {
        sessionStorage.clear();
        this.router.navigate(['login']);
    };
    AuthService.prototype.getToken = function () {
        return sessionStorage.getItem('TOKEN');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/favorites.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/favorites.service.ts ***!
  \***********************************************/
/*! exports provided: FavoritesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesService", function() { return FavoritesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var FavoritesService = /** @class */ (function () {
    function FavoritesService(toastr) {
        this.toastr = toastr;
        this.favorites = [];
    }
    FavoritesService.prototype.addFavorites = function (hotel) {
        var hasInFavorites = this.favorites.some(function (favoriteHotel) { return favoriteHotel.title === hotel.title; });
        if (!hasInFavorites) {
            this.favorites.push(hotel);
        }
        this.toastr.info('', "Hotel \"" + hotel.title + "\" added to favorites!");
    };
    FavoritesService.prototype.getFavorites = function () {
        return this.favorites;
    };
    FavoritesService.prototype.getFavoritesCount = function () {
        return this.favorites.length;
    };
    FavoritesService.prototype.removeFromFavorites = function (hotel) {
        var itemIndex = this.favorites.findIndex(function (favoriteHotel) { return favoriteHotel.title === hotel.title; });
        this.favorites.splice(itemIndex, 1);
        this.toastr.info('', "Hotel \"" + hotel.title + "\" removed from favorites!");
    };
    FavoritesService.prototype.hotelInFavorites = function (hotel) {
        return this.favorites.some(function (favoriteHotel) { return favoriteHotel.title === hotel.title; });
    };
    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], FavoritesService);
    return FavoritesService;
}());



/***/ }),

/***/ "./src/app/services/hotels.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/hotels.service.ts ***!
  \********************************************/
/*! exports provided: HotelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotelsService", function() { return HotelsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var HotelsService = /** @class */ (function () {
    function HotelsService(http) {
        this.http = http;
        this.hotelsUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.dataStore = { hotels: [] };
    }
    HotelsService.prototype.loadAll = function () {
        var _this = this;
        return this.http
            .get(this.hotelsUrl + "/hotels")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            var hotels = response.map(function (_hotel) { return _hotel.hotel; });
            _this.dataStore.hotels = hotels;
            return hotels;
        }));
    };
    HotelsService.prototype.loadById = function (id) {
        return this.http
            .get(this.hotelsUrl + "/hotels/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.hotel;
        }));
    };
    HotelsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HotelsService);
    return HotelsService;
}());



/***/ }),

/***/ "./src/common/constants/index.ts":
/*!***************************************!*\
  !*** ./src/common/constants/index.ts ***!
  \***************************************/
/*! exports provided: FILTERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTERS", function() { return FILTERS; });
var FILTERS = {
    SHOW_ALL: 'All',
    SHOW_THREE_STARS: '3*',
    SHOW_FOUR_STARS: '4*',
    SHOW_FIVE_STARS: '5*'
};


/***/ }),

/***/ "./src/common/utils/index.ts":
/*!***********************************!*\
  !*** ./src/common/utils/index.ts ***!
  \***********************************/
/*! exports provided: getNumberValueFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNumberValueFromString", function() { return getNumberValueFromString; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/common/constants/index.ts");

function getNumberValueFromString(filter) {
    switch (filter) {
        case _constants__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].SHOW_ALL: {
            return null;
        }
        case _constants__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].SHOW_THREE_STARS: {
            return 3;
        }
        case _constants__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].SHOW_FOUR_STARS: {
            return 4;
        }
        case _constants__WEBPACK_IMPORTED_MODULE_0__["FILTERS"].SHOW_FIVE_STARS: {
            return 5;
        }
        default: {
            return null;
        }
    }
}


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
    production: false,
    apiUrl: 'http://localhost:3000',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/iaroslav/WebstormProjects/GL-Hotels-App/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map