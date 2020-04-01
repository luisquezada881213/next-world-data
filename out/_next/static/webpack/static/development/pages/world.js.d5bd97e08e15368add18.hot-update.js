webpackHotUpdate("static/development/pages/world.js",{

/***/ "./components/Component.Map.jsx":
/*!**************************************!*\
  !*** ./components/Component.Map.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _data_data_countries_geo_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.countries.geo.json */ "./data/data.countries.geo.json");
var _data_data_countries_geo_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.countries.geo.json */ "./data/data.countries.geo.json", 1);
/* harmony import */ var _data_data_countries_latlng_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/data.countries.latlng.json */ "./data/data.countries.latlng.json");
var _data_data_countries_latlng_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.countries.latlng.json */ "./data/data.countries.latlng.json", 1);
var _jsxFileName = "/Users/stevesanchez/Documents/Code/next-world-data/components/Component.Map.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import geo json




function showData(selectedCountry) {
  var body = d3__WEBPACK_IMPORTED_MODULE_1__["select"](".map-body");
  var projection = d3__WEBPACK_IMPORTED_MODULE_1__["geoOrthographic"]().rotate([0, 0]).scale(230).translate([235, 290]);
  var path = d3__WEBPACK_IMPORTED_MODULE_1__["geoPath"]().projection(projection);
  body.selectAll("path").data(_data_data_countries_geo_json__WEBPACK_IMPORTED_MODULE_2__.features).enter().append("path").attr("d", function (d) {
    return path(d);
  }).attr("stroke", "black").attr("className", "map-country").attr("id", function (d) {
    return 'map-country-' + d.properties.name.split(' ').join('');
  }).attr('fill', 'white');

  if (selectedCountry) {
    var country = _data_data_countries_latlng_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (element) {
      return element.name === selectedCountry.name;
    });
    var longitude = country[0].longitude;
    var latitude = country[0].latitude;
    console.log(latitude);
    longitude = +longitude.substring(0, longitude.indexOf('.'));
    latitude = +latitude.substring(0, latitude.indexOf('.'));
    var feature = body.selectAll("path");
    projection.rotate([longitude * -1, latitude * -1]);
    feature.attr("d", path).attr('fill', 'white');
    d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#map-country-".concat(selectedCountry.name.split(' ').join(''))).attr('fill', 'red');
  }
}

function ComponentMap(_ref) {
  var selectedCountry = _ref.selectedCountry;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    showData(selectedCountry);
  }, [selectedCountry]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, __jsx("svg", {
    id: "map-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("g", {
    className: "map-body",
    transform: "translate(0,0)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ComponentMap);

/***/ })

})
//# sourceMappingURL=world.js.d5bd97e08e15368add18.hot-update.js.map