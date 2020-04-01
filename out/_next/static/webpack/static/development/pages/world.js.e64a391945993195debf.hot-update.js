webpackHotUpdate("static/development/pages/world.js",{

/***/ "./components/Component.CountryPopulation.jsx":
/*!****************************************************!*\
  !*** ./components/Component.CountryPopulation.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
var _jsxFileName = "/Users/stevesanchez/Documents/Code/next-world-data/components/Component.CountryPopulation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function showData(selectedCountry) {
  if (selectedCountry) {
    var normPopData = [];
    Object.keys(selectedCountry.population).map(function (element) {
      if (+element) {
        normPopData.push({
          "year": element,
          "population": Number(selectedCountry.population[element].replace(/,/g, ''))
        });
      }
    }); // console.log(normPopData)

    var body = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#country-population-body");
    var xAxisBody = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#country-population-xAxis");
    var yAxisBody = d3__WEBPACK_IMPORTED_MODULE_1__["select"]("#country-population-yAxis");
    var max = d3__WEBPACK_IMPORTED_MODULE_1__["max"](normPopData, function (d) {
      return d.population;
    }); // console.log(max)

    var widthScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"]().range([0, 450]).domain([0, max]);
    var domain = normPopData.map(function (d) {
      return d.year;
    }); // console.log(domain)

    var positionScale = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().range([0, 200]).domain(domain).padding(0.3);
    var join = body.selectAll("rect").data(normPopData);
    var newElements = join.enter().append("rect").attr("fill", "#6A5ACD").attr("width", function (d) {
      return widthScale(d.population);
    }).attr("height", positionScale.bandwidth()).attr("y", function (d) {
      return positionScale(d.year);
    }).style("transform", "translate(20px, 0px)");
    join.merge(newElements).transition().attr("fill", "#6A5ACD").attr("width", function (d) {
      return widthScale(d.population);
    }).attr("height", positionScale.bandwidth()).attr("y", function (d) {
      return positionScale(d.year);
    }).style("transform", "translate(45px, 0px)");
    join.exit().remove();
    var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"]().scale(widthScale).ticks(7);
    var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"]().scale(positionScale);
    xAxisBody.transition().call(xAxis).style("transform", "translate(45px, 200px)");
    yAxisBody.transition().call(yAxis).style("transform", "translate(40px, 0px)");
  }
}

function ComponentCountryPopulation(_ref) {
  var selectedCountry = _ref.selectedCountry;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    showData(selectedCountry);
  }, [selectedCountry]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("svg", {
    id: "country-population-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }, __jsx("g", {
    id: "country-population-xAxis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }), __jsx("g", {
    id: "country-population-yAxis",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ComponentCountryPopulation);

/***/ })

})
//# sourceMappingURL=world.js.e64a391945993195debf.hot-update.js.map