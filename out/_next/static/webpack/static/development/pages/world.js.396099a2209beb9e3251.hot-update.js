webpackHotUpdate("static/development/pages/world.js",{

/***/ "./components/Component.CountryList.jsx":
/*!**********************************************!*\
  !*** ./components/Component.CountryList.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/stevesanchez/Documents/Code/next-world-data/components/Component.CountryList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function ComponentCountryList(_ref) {
  var _this = this;

  var countryData = _ref.countryData,
      setSelectedCountry = _ref.setSelectedCountry,
      selectedCountry = _ref.selectedCountry;
  var selectedFlag = selectedCountry ? selectedCountry.name : '';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, Object.values(countryData.data).map(function (element) {
    return __jsx("img", {
      src: element.flag.url,
      key: element.name + 'flag',
      className: "world-flag ".concat(selectedFlag),
      onClick: function onClick() {
        setSelectedCountry(element);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ComponentCountryList);

/***/ })

})
//# sourceMappingURL=world.js.396099a2209beb9e3251.hot-update.js.map