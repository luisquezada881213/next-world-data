webpackHotUpdate("static/development/pages/world.js",{

/***/ "./containers/Container.Main.jsx":
/*!***************************************!*\
  !*** ./containers/Container.Main.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _components_Component_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Component.Loading */ "./components/Component.Loading.jsx");
/* harmony import */ var _components_Component_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Component.Error */ "./components/Component.Error.jsx");
/* harmony import */ var _components_Component_CountryList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Component.CountryList */ "./components/Component.CountryList.jsx");
/* harmony import */ var _components_Component_Map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Component.Map */ "./components/Component.Map.jsx");
/* harmony import */ var _components_Component_CountryInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Component.CountryInformation */ "./components/Component.CountryInformation.jsx");
/* harmony import */ var _components_Component_CountryPopulation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Component.CountryPopulation */ "./components/Component.CountryPopulation.jsx");
/* harmony import */ var _clients_client_countries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../clients/client.countries */ "./clients/client.countries.js");

var _jsxFileName = "/Users/stevesanchez/Documents/Code/next-world-data/containers/Container.Main.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // import material ui components

 // import components






 // import clients



function ContainerMain() {
  var _jsx;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    data: {},
    status: 'loading'
  }),
      countryData = _useState[0],
      setCountryData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      selectedCountry = _useState2[0],
      setSelectedCountry = _useState2[1];
  /* ComponentDidMount */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    Object(_clients_client_countries__WEBPACK_IMPORTED_MODULE_9__["fetchCountryData"])().then(function (response) {
      setCountryData({
        data: response.data,
        status: 'success'
      });
    })["catch"](function (error) {
      setCountryData({
        data: null,
        status: 'error'
      });
    });
  }, []);

  switch (countryData.status) {
    case 'loading':
      return __jsx(_components_Component_Loading__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 20
        }
      });

    case 'success':
      return __jsx("div", {
        className: "world-main-container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        container: true,
        direction: "row",
        justify: "flex-start",
        alignItems: "stretch",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: true,
        container: true,
        direction: "column",
        justify: "space-evenly",
        alignItems: "center",
        xs: 1,
        className: "world-main-container-flags",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, __jsx(_components_Component_CountryList__WEBPACK_IMPORTED_MODULE_5__["default"], {
        countryData: countryData,
        setSelectedCountry: setSelectedCountry,
        selectedCountry: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 29
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], (_jsx = {
        item: true,
        container: true,
        direction: "column",
        justify: "space-evenly",
        alignItems: "center",
        xs: 1,
        className: "world-main-container-map"
      }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "item", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "xs", 5), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }), _jsx), __jsx(_components_Component_Map__WEBPACK_IMPORTED_MODULE_6__["default"], {
        selectedCountry: selectedCountry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 29
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        item: true,
        xs: 6,
        className: "world-main-container-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 25
        }
      }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, __jsx(_components_Component_CountryInformation__WEBPACK_IMPORTED_MODULE_7__["default"], {
        selectedCountry: selectedCountry,
        countryData: countryData,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 29
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }
      }, "Population projection"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 33
        }
      }, __jsx(_components_Component_CountryPopulation__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectedCountry: selectedCountry,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 37
        }
      }))))));

    case 'error':
      return __jsx(_components_Component_Error__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 20
        }
      });

    default:
      return __jsx(_components_Component_Error__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 20
        }
      });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ContainerMain);

/***/ })

})
//# sourceMappingURL=world.js.530e27d86f0ec5b893a6.hot-update.js.map