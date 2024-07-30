function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./src/app/events/events-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: EventsRoutingModule */

  /***/
  function srcAppEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsRoutingModule", function () {
      return EventsRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events/events.component.ts");

    var routes = [{
      path: '',
      component: _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"],
      children: [{
        path: '',
        component: _events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"] // canActivate: [AuthGuard]

      }]
    }];

    var EventsRoutingModule = function EventsRoutingModule() {
      _classCallCheck(this, EventsRoutingModule);
    };

    EventsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EventsRoutingModule
    });
    EventsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EventsRoutingModule_Factory(t) {
        return new (t || EventsRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventsRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/events/events.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/events.module.ts ***!
    \*****************************************/

  /*! exports provided: EventsModule */

  /***/
  function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsModule", function () {
      return EventsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _events_events_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./events/events.component */
    "./src/app/events/events/events.component.ts");
    /* harmony import */


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/events/events-routing.module.ts");

    var EventsModule = function EventsModule() {
      _classCallCheck(this, EventsModule);
    };

    EventsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EventsModule
    });
    EventsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EventsModule_Factory(t) {
        return new (t || EventsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventsRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EventsModule, {
        declarations: [_events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventsRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_events_events_component__WEBPACK_IMPORTED_MODULE_2__["EventsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_3__["EventsRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/events/events/events.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/events/events/events.component.ts ***!
    \***************************************************/

  /*! exports provided: EventsComponent */

  /***/
  function srcAppEventsEventsEventsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsComponent", function () {
      return EventsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var EventsComponent = /*#__PURE__*/function () {
      function EventsComponent(sanitizer) {
        _classCallCheck(this, EventsComponent);

        this.sanitizer = sanitizer;
        document.getElementById('lp-bootstrap-style').setAttribute('href', './assets/events-assets/css/bootstrap.css');
        document.getElementById('lp-app-style').setAttribute('href', './assets/events-assets/css/main.css');
        var node1 = document.createElement('script');
        node1.innerText = 'feather.replace()';
        node1.type = 'text/javascript';
        node1.async = false;
        node1.charset = 'utf-8';
        node1.src = './assets/events-assets/js/jquery-1.11.1.min.js';
        document.getElementsByTagName('body')[0].appendChild(node1);
        var node2 = document.createElement('script');
        node2.innerText = 'feather.replace()';
        node2.type = 'text/javascript';
        node2.async = false;
        node2.charset = 'utf-8';
        node2.src = './assets/events-assets/js/jquery.themepunch.tools.min.js';
        document.getElementsByTagName('body')[0].appendChild(node2);
        var node3 = document.createElement('script');
        node3.innerText = 'feather.replace()';
        node3.type = 'text/javascript';
        node3.async = false;
        node3.charset = 'utf-8';
        node3.src = './assets/events-assets/js/jquery.themepunch.revolution.min.js';
        document.getElementsByTagName('body')[0].appendChild(node3);
        var node4 = document.createElement('script');
        node4.innerText = 'feather.replace()';
        node4.type = 'text/javascript';
        node4.async = false;
        node4.charset = 'utf-8';
        node4.src = './assets/events-assets/js/bootstrap.min.js';
        document.getElementsByTagName('body')[0].appendChild(node4);
        var node5 = document.createElement('script');
        node5.innerText = 'feather.replace()';
        node5.type = 'text/javascript';
        node5.async = false;
        node5.charset = 'utf-8';
        node5.src = './assets/events-assets/js/jquery.sticky.js';
        document.getElementsByTagName('body')[0].appendChild(node5);
        var node6 = document.createElement('script');
        node6.innerText = 'feather.replace()';
        node6.type = 'text/javascript';
        node6.async = false;
        node6.charset = 'utf-8';
        node6.src = './assets/events-assets/js/jquery.magnific-popup.min.js';
        document.getElementsByTagName('body')[0].appendChild(node6);
        var node7 = document.createElement('script');
        node7.innerText = 'feather.replace()';
        node7.type = 'text/javascript';
        node7.async = false;
        node7.charset = 'utf-8';
        node7.src = './assets/events-assets/js/salvattore.js';
        document.getElementsByTagName('body')[0].appendChild(node7);
        var node8 = document.createElement('script');
        node8.innerText = 'feather.replace()';
        node8.type = 'text/javascript';
        node8.async = false;
        node8.charset = 'utf-8';
        node8.src = './assets/events-assets/js/jquery.countdown.js';
        document.getElementsByTagName('body')[0].appendChild(node8);
        var node9 = document.createElement('script');
        node9.innerText = 'feather.replace()';
        node9.type = 'text/javascript';
        node9.async = false;
        node9.charset = 'utf-8';
        node9.src = './assets/events-assets/js/jquery.mCustomScrollbar.concat.min.js';
        document.getElementsByTagName('body')[0].appendChild(node9);
        var node10 = document.createElement('script');
        node10.innerText = 'feather.replace()';
        node10.type = 'text/javascript';
        node10.async = false;
        node10.charset = 'utf-8';
        node10.src = './assets/events-assets/js/waypoints.min.js';
        document.getElementsByTagName('body')[0].appendChild(node10);
        var node11 = document.createElement('script');
        node11.innerText = 'feather.replace()';
        node11.type = 'text/javascript';
        node11.async = false;
        node11.charset = 'utf-8';
        node11.src = './assets/events-assets/js/jquery.counterup.min.js';
        document.getElementsByTagName('body')[0].appendChild(node11);
        var node12 = document.createElement('script');
        node12.innerText = 'feather.replace()';
        node12.type = 'text/javascript';
        node12.async = false;
        node12.charset = 'utf-8';
        node12.src = './assets/events-assets/js/owl.carousel.min.js';
        document.getElementsByTagName('body')[0].appendChild(node12);
        var node13 = document.createElement('script');
        node13.innerText = 'feather.replace()';
        node13.type = 'text/javascript';
        node13.async = false;
        node13.charset = 'utf-8';
        node13.src = './assets/events-assets/js/retina.js';
        document.getElementsByTagName('body')[0].appendChild(node13);
        var node = document.createElement('script');
        node.innerText = 'feather.replace()';
        node.type = 'text/javascript';
        node.async = false;
        node.charset = 'utf-8';
        node.src = './assets/events-assets/js/events-main.js';
        document.getElementsByTagName('body')[0].appendChild(node);
      }

      _createClass(EventsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("test events"); //PRELOADER for events page

          $('#preload').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        }
      }]);

      return EventsComponent;
    }();

    EventsComponent.ɵfac = function EventsComponent_Factory(t) {
      return new (t || EventsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventsComponent,
      selectors: [["app-events"]],
      decls: 1531,
      vars: 0,
      consts: [["id", "preload"], [1, "preload"], [1, "spinner"], ["id", "nav-primary", "role", "navigation", 1, "navbar", "navbar-custom"], [1, "container"], [1, "navbar-header"], ["type", "button", "data-toggle", "collapse", "data-target", "#nav", 1, "navbar-toggle"], [1, "sr-only"], [1, "icon-bar"], ["href", ""], ["src", "./assets/events-assets/img/logo-light.png", "alt", "logo", 1, "events-logo"], ["id", "nav", 1, "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "navbar-right", "uppercase"], [1, "nav-item"], ["data-toggle", "elementscroll", "href", ""], ["data-toggle", "elementscroll", "href", "#info"], ["data-toggle", "elementscroll", "href", "#speakers"], [1, "dropdown", "nav-item", "hidden"], ["data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "true", 1, "dropdown-toggle"], [1, "nav-label"], [1, "caret"], ["id", "event-dropdown", 1, "dropdown-menu"], ["data-toggle", "elementscroll", "href", "#events-schedule", 1, "dropdown-item"], [1, "nav-item", "hidden"], ["data-toggle", "elementscroll", "href", "#venue"], ["data-toggle", "elementscroll", "href", "#register"], ["data-toggle", "elementscroll", "href", "#gallery"], ["data-toggle", "elementscroll", "href", "#sponsors"], ["data-toggle", "elementscroll", "href", "#footer"], [1, "tp-banner-container"], [1, "tp-banner"], ["data-transition", "slidevertical", "data-slotamount", "1", "data-masterspeed", "1000", "data-thumb", "./assets/events-assets/img/slide_thumb_3.jpg", "data-saveperformance", "off", "data-title", "Slide"], ["src", "./assets/events-assets/img/slide3.jpg", "alt", "fullslide6", "data-bgposition", "center top", "data-bgfit", "cover", "data-bgrepeat", "no-repeat"], ["data-x", "center", "data-hoffset", "250", "data-y", "center", "data-voffset", "-70", "data-speed", "600", "data-start", "800", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_heavy_70_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "2", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], ["data-x", "center", "data-hoffset", "250", "data-y", "center", "data-voffset", "-10", "data-speed", "600", "data-start", "900", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_medium_30_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "3", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], ["data-x", "center", "data-hoffset", "250", "data-y", "center", "data-voffset", "30", "data-speed", "600", "data-start", "900", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_medium_30_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "3", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], ["data-transition", "slidevertical", "data-slotamount", "1", "data-masterspeed", "1000", "data-thumb", "./assets/events-assets/img/slide_thumb_1.jpg", "data-saveperformance", "off", "data-title", "Slide"], ["src", "./assets/events-assets/img/slide1.jpg", "alt", "fullslide1", "data-bgposition", "center top", "data-bgfit", "cover", "data-bgrepeat", "no-repeat"], ["data-transition", "slidevertical", "data-slotamount", "1", "data-masterspeed", "1000", "data-thumb", "./assets/events-assets/img/slide_thumb_2.jpg", "data-saveperformance", "off", "data-title", "Slide"], ["src", "./assets/events-assets/img/slide2.jpg", "alt", "fullslide2", "data-bgposition", "center top", "data-bgfit", "cover", "data-bgrepeat", "no-repeat"], ["data-x", "center", "data-hoffset", "270", "data-y", "center", "data-voffset", "-70", "data-speed", "600", "data-start", "800", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_heavy_70_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "2", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], ["data-x", "center", "data-hoffset", "230", "data-y", "center", "data-voffset", "0", "data-speed", "600", "data-start", "900", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_medium_30_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "3", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], ["data-transition", "slidevertical", "data-slotamount", "1", "data-masterspeed", "1000", "data-thumb", "./assets/events-assets/img/slide_thumb_4.jpg", "data-saveperformance", "off", "data-title", "Slide"], ["src", "./assets/events-assets/img/slide4.jpg", "alt", "fullslide7", "data-bgposition", "center top", "data-bgfit", "cover", "data-bgrepeat", "no-repeat"], ["data-x", "center", "data-hoffset", "290", "data-y", "center", "data-voffset", "0", "data-speed", "600", "data-start", "900", "data-easing", "Power4.easeOut", "data-splitin", "none", "data-splitout", "none", "data-elementdelay", "0.01", "data-endelementdelay", "0.1", "data-endspeed", "500", "data-endeasing", "Power4.easeIn", 1, "tp-caption", "light_medium_30_shadowed", "lfb", "ltt", "tp-resizeme", 2, "z-index", "3", "max-width", "auto", "max-height", "auto", "white-space", "nowrap"], [1, "tp-bannertimer"], ["id", "highlight"], [1, "container-fluid"], [1, "row"], ["id", "left", 1, "left", "col-lg-9", "col-md-8", "text-right"], ["id", "right", 1, "col-lg-3", "col-md-4", "text-left"], ["id", "countdown"], ["id", "info"], [1, "col-lg-12", "text-center"], [1, "lead"], ["href", "url"], [1, "col-lg-10", "col-lg-offset-1", "col-md-12", "text-center"], [1, "feature", "col-lg-4", "col-md-4", "col-sm-4"], [1, "pe-4x", "pe-7s-mouse"], [1, "text-justify"], [1, "pe-4x", "pe-7s-micro"], [1, "pe-4x", "pe-7s-users"], [1, "pe-4x", "pe-7s-id"], [1, "pe-4x", "pe-7s-video"], [1, "pe-4x", "pe-7s-add-user"], ["id", "speakers"], [1, "col-lg-12"], [1, "uppercase"], ["id", "list-speaker", 1, "list-unstyled", "speakers-list"], [1, "col-lg-3", "col-md-3", "col-sm-4"], [1, "speaker"], [1, "effect-ming"], ["src", "./assets/events-assets/img/speaker1.jpg", "alt", "", 1, "img-responsive"], [1, "caption", "text-center"], [1, "company"], ["src", "./assets/events-assets/img/speaker3.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/Rajasekhar.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker2.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker4.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker5.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker7.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker8.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/Raghavendra.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker10.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker9.jpg", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/speaker12.jpg", "alt", "", 1, "img-responsive"], ["id", "program ", "hidden", ""], ["id", "events-schedule", 1, "container"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["role", "presentation", 1, "active"], ["href", "#day1", "id", "day1-tab", "role", "tab", "data-toggle", "tab", "aria-controls", "day1", "aria-expanded", "true"], ["role", "presentation", 1, ""], ["href", "#day2", "role", "tab", "id", "day2-tab", "data-toggle", "tab", "aria-controls", "day2", "aria-expanded", "false"], ["href", "#day3", "role", "tab", "id", "day3-tab", "data-toggle", "tab", "aria-controls", "day3", "aria-expanded", "false"], ["href", "#day3", "role", "tab", "id", "day4-tab", "data-toggle", "tab", "aria-controls", "day3", "aria-expanded", "false"], ["href", "#day3", "role", "tab", "id", "day5-tab", "data-toggle", "tab", "aria-controls", "day3", "aria-expanded", "false"], ["href", "#day3", "role", "tab", "id", "day6-tab", "data-toggle", "tab", "aria-controls", "day3", "aria-expanded", "false"], ["id", "myTabContent", 1, "tab-content"], ["role", "tabpanel", "id", "day1", "aria-labelledby", "day1-tab", 1, "tab-pane", "fade", "active", "in"], ["id", "accordion1", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], [1, "panel", "panel-default"], ["role", "tab", "id", "heading1", 1, "panel-heading"], [1, "col-lg-1", "col-md-1", "col-sm-1"], [1, "date"], [1, "col-lg-11", "col-md-11", "col-sm-11"], [1, "panel-title"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program1", "aria-expanded", "true", "aria-controls", "Program1"], ["id", "Program1", "role", "tabpanel", "aria-labelledby", "heading1", 1, "panel-collapse", "collapse"], [1, "panel-body"], [1, "col-lg-2", "col-md-2", "col-sm-2"], ["src", "./assets/events-assets/img/speaker1.png", "alt", "", 1, "img-responsive", "img-circle"], [1, "col-lg-7", "col-md-7", "col-sm-10"], [1, "speaker-name", "uppercase"], [1, "fa", "fa-lg", "fa-clock-o"], [1, "small"], [1, "fa", "fa-lg", "fa-map-marker"], [1, "fa", "fa-lg", "fa-signal"], [1, "col-lg-3", "col-md-3", "col-sm-10"], [1, "about-speaker"], [1, "fa", "fa-lg", "fa-globe"], ["href", "#", 1, "small"], ["role", "tab", "id", "heading2", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program2", "aria-expanded", "true", "aria-controls", "Program2"], ["id", "Program2", "role", "tabpanel", "aria-labelledby", "heading2", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker2.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading3", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program3", "aria-expanded", "true", "aria-controls", "Program3"], ["id", "Program3", "role", "tabpanel", "aria-labelledby", "heading3", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker3.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading4", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program4", "aria-expanded", "true", "aria-controls", "Program4"], ["id", "Program4", "role", "tabpanel", "aria-labelledby", "heading4", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker4.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading5", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program5", "aria-expanded", "true", "aria-controls", "Program5"], ["id", "Program5", "role", "tabpanel", "aria-labelledby", "heading5", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker5.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tabpanel", "id", "day2", "aria-labelledby", "day2-tab", 1, "tab-pane", "fade", "in"], ["id", "accordion2", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], ["role", "tab", "id", "heading6", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program6", "aria-expanded", "true", "aria-controls", "Program6"], ["id", "Program6", "role", "tabpanel", "aria-labelledby", "heading6", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker6.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading7", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program7", "aria-expanded", "true", "aria-controls", "Program7"], ["id", "Program7", "role", "tabpanel", "aria-labelledby", "heading7", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker7.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading8", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program8", "aria-expanded", "true", "aria-controls", "Program8"], ["id", "Program8", "role", "tabpanel", "aria-labelledby", "heading8", 1, "panel-collapse", "collapse"], ["src", "./assets/events-assets/img/speaker8.png", "alt", "", 1, "img-responsive", "img-circle"], ["role", "tab", "id", "heading9", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program9", "aria-expanded", "true", "aria-controls", "Program9"], ["id", "Program9", "role", "tabpanel", "aria-labelledby", "heading9", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "heading10", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program10", "aria-expanded", "true", "aria-controls", "Program10"], ["id", "Program10", "role", "tabpanel", "aria-labelledby", "heading10", 1, "panel-collapse", "collapse"], ["role", "tabpanel", "id", "day3", "aria-labelledby", "day3-tab", 1, "tab-pane", "fade", "in"], ["id", "accordion3", "role", "tablist", "aria-multiselectable", "true", 1, "panel-group"], ["role", "tab", "id", "heading11", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program11", "aria-expanded", "true", "aria-controls", "Program11"], ["id", "Program11", "role", "tabpanel", "aria-labelledby", "heading11", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "heading12", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program12", "aria-expanded", "true", "aria-controls", "Program12"], ["id", "Program12", "role", "tabpanel", "aria-labelledby", "heading12", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "heading13", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program13", "aria-expanded", "true", "aria-controls", "Program13"], ["id", "Program13", "role", "tabpanel", "aria-labelledby", "heading13", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "heading14", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program14", "aria-expanded", "true", "aria-controls", "Program14"], ["id", "Program14", "role", "tabpanel", "aria-labelledby", "heading14", 1, "panel-collapse", "collapse"], ["role", "tab", "id", "heading15", 1, "panel-heading"], ["data-toggle", "collapse", "data-parent", "#accordion", "href", "#Program15", "aria-expanded", "true", "aria-controls", "Program15"], ["id", "Program15", "role", "tabpanel", "aria-labelledby", "heading15", 1, "panel-collapse", "collapse"], ["id", "register", "hidden", ""], [1, "uppercase", "text-center"], [1, "lead", "text-center"], ["id", "price-carousel"], [1, "price-table", "early-bird"], [1, "icon"], [1, "pe-5x", "pe-7s-wristwatch"], [1, "table-header"], [1, "price"], [1, "desc", "list-unstyled"], [1, "price-table", "standart"], [1, "pe-5x", "pe-va", "pe-7s-ribbon"], [1, "price-table", "vip"], [1, "pe-5x", "pe-va", "pe-7s-diamond"], ["href", "register.html", 1, "button", "button-small", "button-line-dark", "html-popup"], ["id", "download"], [1, "col-lg-2"], ["src", "./assets/events-assets/img/download.png", "alt", "", 1, "img-responsive"], [1, "col-lg-4", "col-md-8", "col-sm-9"], ["href", "https://partner.signulu.com/assets/documents/MITI_Brochure.pdf", "target", "_blank", 1, "button", "button-small", "button-line-dark"], ["id", "venue"], [1, "venue", "hidden"], [1, "venue-inner"], [1, "col-lg-8", "col-md-8", "col-sm-8"], ["src", "./assets/events-assets/img/hotel-logo.png", "alt", "hotel", 1, "img-responsive"], [1, "col-lg-4", "col-md-4", "col-sm-4"], [1, "pe-4x", "pe-7s-map-2"], ["href", "", 1, "button", "button-xsmall", "button-line-light"], [1, "col-lg-3", "col-md-3"], [1, "col-lg-9", "col-md-9"], ["id", "hotel-carousel"], [1, "item"], [1, "hotel"], ["src", "./assets/events-assets/img/hyderabad.png", "alt", "", 1, "img-responsive"], [1, "caption"], [1, "rating"], [1, "fa", "fa-star"], ["href", "#", 1, "button", "button-xsmall", "button-line-dark"], ["src", "./assets/events-assets/img/bangalore.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/chennai.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/delhi.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/mumbai.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/cochin.png", "alt", "", 1, "img-responsive"], [1, "col-lg-9", "col-md-9", "road-show"], ["id", "hotel-carousel-usa"], ["src", "./assets/events-assets/img/newyork.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/princeton.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/losangeles.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/chicago.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/houston.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/seattle.png", "alt", "", 1, "img-responsive"], ["id", "gallery"], ["id", "timelines", "data-columns", ""], [1, "item", "wrap"], ["src", "./assets/events-assets/img/thumb1.png", "alt", "", 1, "img-responsive"], [1, "overlay"], ["href", "./assets/events-assets/img/gallery-img-1.jpg", 1, "image-popup"], [1, "pe-3x", "pe-7s-plus"], ["src", "./assets/events-assets/img/thumb2.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-2.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb3.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-3.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb4.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-4.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb5.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-5.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb6.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-6.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb7.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-7.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb8.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-8.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb9.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-9.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb10.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-10.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb11.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-11.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb12.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img.-12jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb13.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-13.jpg", 1, "image-popup"], ["src", "./assets/events-assets/img/thumb14.png", "alt", "", 1, "img-responsive"], ["href", "./assets/events-assets/img/gallery-img-14.jpg", 1, "image-popup"], ["id", "funfacts"], [1, "funfacts-inner"], [1, "hidden"], [1, "col-lg-10", "col-lg-offset-1"], ["id", "funfacts-carousel"], [1, "pe", "pe-4x", "pe-7s-world"], [1, "desc"], [1, "number"], [1, "description"], [1, "pe", "pe-4x", "pe-7s-micro"], [1, "pe", "pe-4x", "pe-7s-display2"], [1, "pe", "pe-va", "pe-4x", "pe-7s-id"], ["id", "testimonial", "hidden", ""], [1, "col-lg-6", "col-lg-offset-6", "col-md-6", "col-md-offset-6", "no-padding"], [1, "testimonial-inner"], ["id", "testimonial-carousel"], ["src", "./assets/events-assets/img/testimonial1.png", "alt", "", 1, "img-circle"], [1, "name"], ["src", "./assets/events-assets/img/testimonial2.png", "alt", "", 1, "img-circle"], ["src", "./assets/events-assets/img/testimonial3.png", "alt", "", 1, "img-circle"], ["id", "sponsors", "hidden", ""], ["id", "sponsors-carousel"], [1, "sponsor"], ["src", "./assets/events-assets/img/sponsor1.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/sponsor2.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/sponsor3.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/sponsor4.png", "alt", "", 1, "img-responsive"], ["src", "./assets/events-assets/img/sponsor5.png", "alt", "", 1, "img-responsive"], ["id", "footer"], [1, "col-lg-3", "col-md-3", "col-sm-6"], [1, "list-unstyled", "list-inline", "uppercase"], ["href", "https://www.facebook.com/signulu/"], [1, "fa", "fa-lg", "fa-facebook"], ["href", "https://twitter.com/signulu"], [1, "fa", "fa-lg", "fa-twitter"], ["href", "https://www.instagram.com/signulu/"], [1, "fa", "fa-lg", "fa-instagram"], ["href", "https://www.linkedin.com/company/14636333/admin/"], [1, "fa", "fa-lg", "fa-linkedin"], ["href", "https://www.youtube.com/channel/UCpYSuQ3xctOH7thHTHMmqQA?view_as=subscriber"], [1, "fa", "fa-lg", "fa-youtube"], ["hidden", "", 1, "faqs"], [1, "col-lg-6", "col-md-6", "col-sm-12"], [1, "col-lg-8"], ["type", "email", "id", "newsletter_email"], [1, "col-lg-4"], [1, "button", "button-big", "button-line-light"], [1, "subfooter"], [1, "list-unstyled", "list-inline", "pull-right", "uppercase"], ["href", "https://www.signulu.com/index.php/terms"], ["href", "https://www.signulu.com/index.php/policy"], ["href", "https://www.signulu.com/index.php/contact"]],
      template: function EventsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Toggle navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Speakers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Webinars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Partner Conferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Customer Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Executive Briefings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Virtual Summit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Signulu ENGAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Venue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sponsors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Global Ignite ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Accelerating Digital Transformation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "India - September 2021.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "One Signulu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "India - November 2021. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Signulu Engage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "America \u2013 February 2022. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Xperience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "New Jersey \u2013 January 2022. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "section", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Join the Event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Signulu Global Ignite - Accelerating Digital Transformation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "section", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Signulu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Accelerating Digital Transformation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Singulu & Millennium hosts various events to collaborate with partners and customers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " in person and virtually, Explore all events and Join us explore the innovation and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Real Digital Tranformation capabilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Join the Event");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "#SignuluEvents ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Singulu & Millennium hosts various events to collaborate with partners and customers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " in person and virtually, Explore all events and Join us explore the innovation and ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Real Digital Tranformation capabilities.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Webinars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "At a product and solution level, these smart talks will enlighten all you need to know about our roadmaps, new features and coming revolutions that will enable you to have a competitive edge in the market.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "Partner Conferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "As a Signulu partner or distributor, get to market faster with new technology. Learn how we can promote your solutions and offerings Collaborate with other partners and problem-solve using our Innovative solutions.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Customer Connect");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Innovation for longevity and adaptability involves a deep thoughtfulness of both today\u2019s realities and tomorrow\u2019s possibilities. Discover the what is new and experience the power of Digital Transformation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "i", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Executive Briefings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Trends evolve in unexpected ways. And often, the most interesting opportunities happen at the places where they intersect the insights and inspiration you will need for the digital journey ahead. Join us to get Inspired.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Virtual Summit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "There\u2019s mounting interest among businesses in looking beyond what\u2019s new to what\u2019s next In a world of infinite unknowns, Connect with us for a meaningful conversations of known technologies which can explore you chart a path to next horizon ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "i", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Signulu ENGAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Join Millennium Executive Leaders to learn more about our company strategy focused on an inclusive future and learn how we are shaping our business to drive customer and partner success.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "section", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "speakers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "Our Valued Partners and Clients will be enlighten by our Industry expert Speakers from Across the Globe.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "ul", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "img", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "Ramana Krosuri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Benjamin Joseph");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Vice President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Raja Sekhar Reddy G");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "COO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](206, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "Victor Mitra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](211, "S.Vice President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "img", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, "Ashok Kamath");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Director");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "Bheem Bagewadi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "A.Vice President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Steven Bellis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Director");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Sundaram Ramaswamy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "Director");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](251, "img", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "Raghavendra Alse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "CTO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](260, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Michel Patrick");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, "A.Vice President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "img", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Dominic Savio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "A.Vice President");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "li", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "figure", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, "Ann Jose");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "p", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "Business Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "section", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "EVENTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "ul", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "li", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Webinars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](297, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Partner Conferences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "a", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Customer Events");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Executive Briefings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "a", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Virtual Summit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "li", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "a", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Signulu ENGAGE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](319, "08.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](322, "a", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, " Mauris rhoncus scelerisque lacus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](328, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](333, "Mauris rhoncus scelerisque lacus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](334, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](335, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](337, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](341, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](348, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "About Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](352, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](354, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](355, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, "08.45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](364, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "a", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, " Sed porta ex purus ut commodo est facilisis sit amet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "img", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Sed porta ex purus, ut commodo est facilisis sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](380, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](388, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](392, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "About Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "div", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](403, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](405, "09.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "a", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](409, " Phasellus tellus libero placerat quis amet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](412, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](416, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](417, "Martin Pearson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Phasellus tellus libero, placerat quis amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](422, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](423, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](427, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](431, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](432, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](433, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "About Martin Pearson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](438, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](440, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](445, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "10.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](450, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "a", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](452, " Proin et augue massa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](453, "div", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](455, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](457, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](459, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Jessica Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "Proin et augue massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](463, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](464, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](465, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](466, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "120mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](470, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](472, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](473, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](474, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](475, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](476, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](477, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](479, "About Jessica Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](480, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](481, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](482, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](483, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](484, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](487, "div", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](489, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](491, "12.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](492, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](494, "a", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](495, " Maecenas efficitur justo sed accumsan rhoncus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](496, "div", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](498, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](499, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](500, "img", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](501, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "Herman Russell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](505, "Maecenas efficitur justo sed accumsan rhoncus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](506, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](507, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](508, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](509, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](510, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](511, "60mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](512, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](513, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](517, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](519, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](520, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](521, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](522, "About Herman Russell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](523, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](524, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](525, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](526, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](527, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](528, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](529, "div", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](531, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](532, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](533, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](535, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](536, "09.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](537, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](538, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](539, "a", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](540, " Cum sociis natoque penatibus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](541, "div", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](542, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](543, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](544, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](545, "img", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](546, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](547, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](548, "Joan Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](549, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](550, "Cum sociis natoque penatibus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](551, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](552, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](553, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](554, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](555, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](556, "60mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](557, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](558, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](559, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](560, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](561, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](562, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](563, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](564, "Expert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](565, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](566, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](567, "About Joan Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](568, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](569, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](570, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](571, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](572, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](573, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](574, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](575, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](576, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](577, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](578, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](579, "10.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](580, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](581, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](582, "a", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](583, " Maecenas ut iaculis lorem eu suscipit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](584, "div", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](585, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](586, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](587, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](588, "img", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](589, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](590, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](591, "Peter Reid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](592, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](593, "Maecenas ut iaculis lorem eu suscipit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](594, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](595, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](596, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](597, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](598, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](599, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](600, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](601, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](602, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](603, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](604, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](605, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](606, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](607, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](608, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](609, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](610, "About Peter Reid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](611, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](612, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](613, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](614, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](615, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](616, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](617, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](618, "div", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](619, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](620, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](621, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](622, "10.45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](623, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](624, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](625, "a", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](626, " Sed et molestie nulla bibendum ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](627, "div", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](628, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](629, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](630, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](631, "img", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](632, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](633, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](634, "Tracey Curtis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](635, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](636, "Sed et molestie nulla bibendum");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](637, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](638, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](639, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](640, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](641, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](642, "60mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](643, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](644, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](645, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](646, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](647, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](648, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](649, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](650, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](651, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](652, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](653, "About Tracey Curtis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](654, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](655, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](656, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](657, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](658, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](659, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](660, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](661, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](662, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](663, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](664, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](665, "11.45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](666, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](667, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](668, "a", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](669, " Praesent dapibus semper nisi sit amet hendrerit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](670, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](671, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](672, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](673, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](674, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](675, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](676, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](677, "Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](678, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](679, "Praesent dapibus semper nisi sit amet hendrerit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](680, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](681, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](682, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](683, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](684, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](685, "120mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](686, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](687, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](688, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](689, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](690, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](691, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](692, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](693, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](694, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](695, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](696, "About Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](697, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](698, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](699, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](700, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](701, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](702, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](703, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](704, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](705, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](706, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](707, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](708, "13.45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](709, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](710, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](711, "a", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](712, " Ut posuere ipsum a laoreet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](713, "div", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](714, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](715, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](716, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](717, "img", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](718, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](719, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](720, "Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](721, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](722, "Ut posuere ipsum a laoreet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](723, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](724, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](725, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](726, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](727, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](728, "60mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](729, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](730, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](731, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](732, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](733, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](734, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](735, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](736, "Beinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](737, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](738, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](739, "About Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](740, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](741, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](742, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](743, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](744, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](745, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](746, "div", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](747, "div", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](748, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](749, "div", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](750, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](751, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](752, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](753, "08.00");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](754, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](755, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](756, "a", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](757, " Mauris rhoncus scelerisque lacus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](758, "div", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](759, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](760, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](761, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](762, "img", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](763, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](764, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](765, "Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](766, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](767, "Mauris rhoncus scelerisque lacus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](768, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](769, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](770, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](771, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](772, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](773, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](774, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](775, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](776, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](777, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](778, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](779, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](780, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](781, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](782, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](783, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](784, "About Stanley Willis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](785, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](786, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](787, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](788, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](789, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](790, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](791, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](792, "div", 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](793, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](794, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](795, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](796, "08.45");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](797, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](798, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](799, "a", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](800, " Sed porta ex purus ut commodo est facilisis sit amet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](801, "div", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](802, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](803, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](804, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](805, "img", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](806, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](807, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](808, "Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](809, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](810, "Sed porta ex purus, ut commodo est facilisis sit amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](811, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](812, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](813, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](814, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](815, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](816, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](817, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](818, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](819, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](820, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](821, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](822, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](823, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](824, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](825, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](826, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](827, "About Jane Richards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](828, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](829, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](830, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](831, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](832, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](833, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](834, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](835, "div", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](836, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](837, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](838, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](839, "09.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](840, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](841, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](842, "a", 166);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](843, " Phasellus tellus libero placerat quis amet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](844, "div", 167);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](845, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](846, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](847, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](848, "img", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](849, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](850, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](851, "Martin Pearson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](852, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](853, "Phasellus tellus libero, placerat quis amet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](854, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](855, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](856, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](857, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](858, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](859, "45mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](860, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](861, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](862, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](863, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](864, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](865, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](866, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](867, "Beginner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](868, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](869, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](870, "About Martin Pearson");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](871, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](872, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](873, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](874, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](875, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](876, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](877, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](878, "div", 168);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](879, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](880, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](881, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](882, "10.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](883, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](884, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](885, "a", 169);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](886, " Proin et augue massa ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](887, "div", 170);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](888, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](889, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](890, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](891, "img", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](892, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](893, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](894, "Jessica Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](895, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](896, "Proin et augue massa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](897, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](898, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](899, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](900, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](901, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](902, "120mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](903, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](904, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](905, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](906, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](907, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](908, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](909, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](910, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](911, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](912, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](913, "About Jessica Green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](914, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](915, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](916, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](917, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](918, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](919, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](920, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](921, "div", 171);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](922, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](923, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](924, "p", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](925, "12.30");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](926, "div", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](927, "h4", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](928, "a", 172);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](929, " Maecenas efficitur justo sed accumsan rhoncus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](930, "div", 173);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](931, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](932, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](933, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](934, "img", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](935, "div", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](936, "p", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](937, "Herman Russell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](938, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](939, "Maecenas efficitur justo sed accumsan rhoncus");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](940, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](941, "Sed facilisis justo vitae risus viverra vulputate. Mauris vel ipsum dignissim diam viverra condimentum. Donec sodales, diam eget mattis condimentum, quam neque tempus purus, dictum viverra risus nisl quis metus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](942, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](943, "i", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](944, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](945, "60mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](946, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](947, "i", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](948, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](949, "Saloon A");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](950, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](951, "i", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](952, "span", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](953, "Intermediate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](954, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](955, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](956, "About Herman Russell");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](957, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](958, "Sed non congue nunc. Fusce pulvinar elementum rhoncus. Duis sit amet metus erat. Sed et ligula mattis, dictum nisl et, vestibulum urna.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](959, "span", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](960, "i", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](961, "a", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](962, "themecube.net");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](963, "section", 174);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](964, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](965, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](966, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](967, "h2", 175);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](968, "register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](969, "p", 176);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](970, "Nam pellentesque fringilla faucibus. Aliquam tortor ex, egestas porta eget, pretium at lorem.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](971, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](972, "div", 177);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](973, "div", 178);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](974, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](975, "i", 180);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](976, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](977, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](978, "Early Bird");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](979, "p", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](980, "$150");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](981, "ul", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](982, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](983, "Conference Kit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](984, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](985, "Coffee break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](986, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](987, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](988, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](989, "All seasons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](990, "div", 184);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](991, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](992, "i", 185);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](993, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](994, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](995, "Standart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](996, "p", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](997, "$175");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](998, "ul", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](999, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1000, "Conference Kit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1001, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1002, "Coffee break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1003, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1004, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1005, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1006, "All seasons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1007, "div", 186);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1008, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1009, "i", 187);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1010, "div", 181);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1011, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1012, "Exclusive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1013, "p", 182);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1014, "$250");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1015, "ul", 183);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1016, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1017, "Conference Kit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1018, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1019, "Coffee break");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1020, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1021, "Lunch");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1022, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1023, "All seasons");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1024, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1025, "a", 188);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1026, "register now");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1027, "section", 189);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1028, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1029, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1030, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1031, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1032, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1033, "div", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1034, "img", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1035, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1036, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1037, "Signulu Brochure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1038, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1039, "Explore the Key Features ,Funtionalities of Singulu Here.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1040, "a", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1041, "download pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1042, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1043, "div", 190);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1044, "img", 191);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1045, "div", 192);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1046, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1047, "Millennium Brochure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1048, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1049, "Explore the Services offerings of Millennium Here. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1050, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1051, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1052, "a", 193);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1053, "download pdf");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1054, "section", 194);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1055, "div", 195);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1056, "div", 196);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1057, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1058, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1059, "div", 197);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1060, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1061, "venue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1062, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1063, "Donec finibus porta ultricies.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1064, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1065, "Interdum et malesuada fames ac ante ipsum primis in faucibus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1066, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1067, "Recrea Hotel on Broadway");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1068, "img", 198);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1069, "div", 199);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1070, "i", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1071, "h4", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1072, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1073, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1074, "49 West 32nd Street, New York, NY 10001");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1075, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1076, " 1 212 736-3800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1077, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1078, " 4.9 mi / 7.9 km from Downtown");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1079, "a", 201);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1080, "more information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1081, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1082, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1083, "div", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1084, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1085, "Signulu X- Perience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1086, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1087, "The Future is Here with Signulu & Millennium.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1088, "div", 203);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1089, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1090, "India");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1091, "div", 204);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1092, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1093, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1094, "img", 207);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1095, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1096, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1097, "Hyderabad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1098, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1099, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1100, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1101, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1102, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1103, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1104, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Hyderabad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1105, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1106, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1107, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1108, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1109, "img", 212);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1110, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1111, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1112, "Bangalore");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1113, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1114, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1115, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1116, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1117, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1118, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1119, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1120, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Bangalore.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1121, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1122, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1123, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1124, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1125, "img", 213);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1126, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1127, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1128, "Chennai");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1129, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1130, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1131, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1132, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1133, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1134, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1135, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1136, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Chennai.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1137, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1138, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1139, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1140, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1141, "img", 214);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1142, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1143, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1144, "Delhi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1145, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1146, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1147, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1148, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1149, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1150, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1151, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Delhi.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1152, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1153, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1154, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1155, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1156, "img", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1157, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1158, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1159, "Mumbai");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1160, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1161, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1162, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1163, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1164, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1165, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1166, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1167, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Mumbai.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1168, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1169, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1170, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1171, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1172, "img", 216);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1173, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1174, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1175, "Cochin");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1176, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1177, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1178, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1179, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1180, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1181, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1182, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1183, "Xperience enables you to uncover endless opportunities to partner with Signulu ecosystem @Cochin.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1184, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1185, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1186, "div", 202);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1187, "div", 217);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1188, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1189, "USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1190, "div", 218);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1191, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1192, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1193, "img", 219);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1194, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1195, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1196, "Newyork");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1197, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1198, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1199, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1200, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1201, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1202, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1203, "Xperience Offers endless opportunities to build new connections and expand your technology network @Newyork.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1204, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1205, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1206, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1207, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1208, "img", 220);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1209, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1210, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1211, "Princeton");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1212, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1213, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1214, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1215, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1216, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1217, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1218, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1219, "Xperience Offers endless opportunities to build new connections and expand your technology network @Princeton.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1220, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1221, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1222, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1223, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1224, "img", 221);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1225, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1226, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1227, "Los Angeles");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1228, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1229, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1230, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1231, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1232, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1233, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1234, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1235, "Xperience Offers endless opportunities to build new connections and expand your technology network @Los Angeles.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1236, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1237, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1238, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1239, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1240, "img", 222);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1241, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1242, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1243, "Chicago");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1244, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1245, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1246, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1247, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1248, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1249, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1250, "Xperience Offers endless opportunities to build new connections and expand your technology network @Chicago.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1251, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1252, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1253, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1254, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1255, "img", 223);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1256, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1257, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1258, "Houston");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1259, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1260, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1261, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1262, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1263, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1264, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1265, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1266, "Xperience Offers endless opportunities to build new connections and expand your technology network @Houston.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1267, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1268, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1269, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1270, "div", 206);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1271, "img", 224);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1272, "div", 208);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1273, "h5", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1274, "Seattle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1275, "span", 209);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1276, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1277, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1278, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1279, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1280, "i", 210);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1281, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1282, "Xperience Offers endless opportunities to build new connections and expand your technology network @Seattle.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1283, "a", 211);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1284, "details");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1285, "section", 225);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1286, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1287, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1288, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1289, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1290, "gallery");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1291, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1292, "Life @ Signulu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1293, "div", 226);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1294, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1295, "img", 228);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1296, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1297, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1298, "a", 230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1299, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1300, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1301, "img", 232);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1302, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1303, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1304, "a", 233);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1305, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1306, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1307, "img", 234);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1308, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1309, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1310, "a", 235);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1311, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1312, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1313, "img", 236);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1314, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1315, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1316, "a", 237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1317, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1318, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1319, "img", 238);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1320, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1321, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1322, "a", 239);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1323, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1324, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1325, "img", 240);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1326, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1327, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1328, "a", 241);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1329, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1330, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1331, "img", 242);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1332, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1333, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1334, "a", 243);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1335, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1336, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1337, "img", 244);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1338, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1339, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1340, "a", 245);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1341, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1342, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1343, "img", 246);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1344, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1345, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1346, "a", 247);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1347, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1348, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1349, "img", 248);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1350, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1351, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1352, "a", 249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1353, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1354, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1355, "img", 250);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1356, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1357, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1358, "a", 251);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1359, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1360, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1361, "img", 252);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1362, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1363, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1364, "a", 253);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1365, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1366, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1367, "img", 254);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1368, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1369, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1370, "a", 255);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1371, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1372, "div", 227);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1373, "img", 256);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1374, "div", 229);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1375, "div", 179);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1376, "a", 257);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1377, "i", 231);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1378, "section", 258);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1379, "div", 259);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1380, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1381, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1382, "h2", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1383, "funfacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1384, "div", 261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1385, "div", 262);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1386, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1387, "i", 263);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1388, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1389, "p", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1390, "72");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1391, "p", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1392, "countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1393, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1394, "i", 267);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1395, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1396, "p", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1397, "38");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1398, "p", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1399, "speakers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1400, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1401, "i", 268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1402, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1403, "p", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1404, "126");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1405, "p", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1406, "programs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1407, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1408, "i", 269);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1409, "div", 264);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1410, "p", 265);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1411, "495");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1412, "p", 266);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1413, "attenders");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1414, "section", 270);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1415, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1416, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1417, "div", 271);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1418, "div", 272);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1419, "h2", 260);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1420, "testimonial");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1421, "div", 273);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1422, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1423, "img", 274);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1424, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1425, "Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies.Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1426, "p", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1427, "Todd Stone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1428, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1429, "img", 276);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1430, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1431, "Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies. Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1432, "p", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1433, "Minnie Pierce");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1434, "div", 205);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1435, "img", 277);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1436, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1437, "Nulla euismod sit amet ligula in vehicula. Vestibulum cursus ex non ante dignissim ultricies. Sed egestas hendrerit neque tincidunt mattis. Duis euismod porta tempus.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1438, "p", 275);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1439, "Lena Kim");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1440, "section", 278);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1441, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1442, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1443, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1444, "h2", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1445, "Event partners");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1446, "p", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1447, "Duis ut quam sed ex consectetur euismod. Aliquam et condimentum eros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1448, "div", 279);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1449, "div", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1450, "img", 281);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1451, "div", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1452, "img", 282);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1453, "div", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1454, "img", 283);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1455, "div", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1456, "img", 284);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1457, "div", 280);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1458, "img", 285);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1459, "footer", 286);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1460, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1461, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1462, "div", 287);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1463, "h4", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1464, "Signulu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1465, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1466, "All-in-one access point for delivering a better customer experience. Explore all the key information in the Signulu Partner Portal for product-specific information and discussions on the public site, or log in with your single sign-on credentials for a full, personalised experience.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1467, "ul", 288);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1468, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1469, "a", 289);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1470, "i", 290);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1471, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1472, "a", 291);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1473, "i", 292);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1474, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1475, "a", 293);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1476, "i", 294);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1477, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1478, "a", 295);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1479, "i", 296);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1480, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1481, "a", 297);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1482, "i", 298);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1483, "div", 287);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1484, "h4", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1485, "FAQ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1486, "dl", 299);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1487, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1488, "Is this the first question?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1489, "dd", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1490, "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1491, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1492, "Mauris ac metus in justo rhoncus?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1493, "dd", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1494, "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1495, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1496, "Praesent eleifend lacinia?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1497, "dd", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1498, "Nam eget dui. Etiam rhoncus. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1499, "dt");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1500, " Cras id metus vitae?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1501, "dd", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1502, "Vivamus dignissim urna id condimentum lacinia. Fusce tristique ultrices est, at semper turpis ullamcorper eu.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1503, "div", 300);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1504, "h4", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1505, "newsletter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1506, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1507, "div", 301);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1508, "input", 302);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1509, "div", 303);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1510, "button", 304);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1511, "subscribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1512, "p", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1513, "SIGNULU PARTNER NETWORK PROGRAM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1514, "div", 305);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1515, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1516, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1517, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1518, "ul", 306);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1519, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1520, "a", 307);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1521, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1522, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1523, "a", 308);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1524, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1525, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1526, "a", 309);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1527, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1528, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1529, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1530, "\xA9 2024 SIGNULU. All Rights Reserved");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".events-logo[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n    padding: 5px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media all and (min-width: 992px) {\r\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%] {\r\n        color: #fff;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:hover   .dropdown-menu[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\r\n        margin-top: 0;\r\n    }\r\n}\r\n\r\n\r\n.road-show[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFHQSwyQ0FBMkM7OztBQUUzQztJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZXZlbnRzL2V2ZW50cy9ldmVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ldmVudHMtbG9nbyB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT0gZGVza3RvcCB2aWV3ID09PT09PT09PT09PSAqL1xyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAubmF2LWl0ZW06aG92ZXIgLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdi1pdGVtOmhvdmVyIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5uYXZiYXIgLm5hdi1pdGVtIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucm9hZC1zaG93IHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-events',
          templateUrl: './events.component.html',
          styleUrls: ['./events.component.css']
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map