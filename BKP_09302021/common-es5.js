function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/utilities/forbidden-name.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/utilities/forbidden-name.directive.ts ***!
    \*******************************************************/

  /*! exports provided: forbiddenNameValidator, ForbiddenValidatorDirective */

  /***/
  function srcAppUtilitiesForbiddenNameDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function () {
      return forbiddenNameValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function () {
      return ForbiddenValidatorDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /** A hero's name can't match the given regular expression */


    function forbiddenNameValidator(nameRe) {
      return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? {
          forbiddenName: {
            value: control.value
          }
        } : null;
      };
    }

    var ForbiddenValidatorDirective = /*#__PURE__*/function () {
      function ForbiddenValidatorDirective() {
        _classCallCheck(this, ForbiddenValidatorDirective);
      }

      _createClass(ForbiddenValidatorDirective, [{
        key: "validate",
        value: function validate(control) {
          return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
        }
      }]);

      return ForbiddenValidatorDirective;
    }();

    ForbiddenValidatorDirective.ɵfac = function ForbiddenValidatorDirective_Factory(t) {
      return new (t || ForbiddenValidatorDirective)();
    };

    ForbiddenValidatorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ForbiddenValidatorDirective,
      selectors: [["", "appForbiddenName", ""]],
      inputs: {
        forbiddenName: ["appForbiddenName", "forbiddenName"]
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
        useExisting: ForbiddenValidatorDirective,
        multi: true
      }])]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForbiddenValidatorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[appForbiddenName]',
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
            useExisting: ForbiddenValidatorDirective,
            multi: true
          }]
        }]
      }], null, {
        forbiddenName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
          args: ['appForbiddenName']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map