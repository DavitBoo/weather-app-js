/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --aero-blue: #D7FFF1;\r\n    --green-1: #AAFCB8;\r\n    --green-2: #8CD790;\r\n    --green-3: #77AF9C;\r\n    --green-4: #285943;\r\n}\r\n\r\n\r\nbody{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-size: cover;\r\n    transition: all .3s;\r\n\r\n}\r\n\r\np{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput{\r\n    border-radius: 4px;\r\n    border: none;\r\n    margin: 0;\r\n    padding: .5rem;\r\n    font-size: 1rem;\r\n}\r\n\r\nbutton{\r\n    margin: 0;\r\n    border: none;\r\n    font-size: 1rem;\r\n\r\n}\r\n\r\n.fw600{\r\n    font-weight: 600;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n}\r\n\r\n.d-flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n/* navbar menu */\r\nnav {\r\n    background-color: var(--green-4);\r\n    align-items: center;\r\n    padding: 1rem 5%;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n}\r\n\r\nnav .logo {\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\nnav .logo svg{\r\n    color: var(--green-1);\r\n}\r\n\r\nnav .logo p{\r\n    color: var(--green-1);\r\n}\r\n\r\nnav .search {\r\n    flex: 3;\r\n}\r\n\r\nnav .search > button {\r\n    margin-left: -6px;\r\n    border-radius: 0 4px 4px 0;\r\n    padding: .5rem;\r\n    cursor: pointer;\r\n    background-color: var(--green-3);\r\n    color: #fff;\r\n}\r\n\r\nnav .temp-btn{\r\n    flex: 3;\r\n    justify-content: flex-end;\r\n}\r\n\r\nnav .temp-btn button {\r\n    padding: .5rem 2rem;\r\n    border-radius: 4px;\r\n    background-color: var(--aero-blue);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\nnav .temp-btn button:hover{\r\n    background-color: var(--green-1);\r\n}\r\n\r\n\r\n/* today's forecast container - first section  */\r\n.day-forecast{\r\n    padding: 6rem 4rem;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.day-forecast .general-info{\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    flex-wrap: wrap;\r\n    gap: 3rem;\r\n    \r\n \r\n}\r\n\r\n.day-forecast .general-info .main-info{\r\n    align-items: center;\r\n    flex: 1;\r\n    background: #ffffff62;\r\n    border-radius: 2rem;\r\n    padding: 1rem 0;\r\n    flex-basis: 220px;\r\n}\r\n\r\n.day-forecast .general-info .main-info .city-text{\r\n    font-size: 2rem;\r\n}\r\n\r\n.day-forecast .general-info .main-info .weather-text{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.day-forecast .general-info .main-info .temperature-text{\r\n    font-size: 3.5rem;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.day-forecast .weather-per-hours{\r\n    overflow-x: scroll;\r\n    flex: 2;\r\n    flex-basis: 350px;\r\n    gap: 3.5rem;\r\n    background: #ffffff62;\r\n    border-radius: 2rem 2rem 0 0;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.day-forecast .weather-per-hours > div {\r\n    gap: 2rem;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n/* scroll bar */\r\n\r\n.weather-per-hours::-webkit-scrollbar {\r\n    height: 7px;\r\n}\r\n\r\n/* Track */\r\n.weather-per-hours::-webkit-scrollbar-track {\r\n    background: #f1f1f11f; \r\n    \r\n  }\r\n   \r\n/* Handle */\r\n.weather-per-hours::-webkit-scrollbar-thumb {\r\n    background: var(--green-4); \r\n\r\n  }\r\n  \r\n/* Handle on hover */\r\n.weather-per-hours::-webkit-scrollbar-thumb:hover {\r\n    background: var(--green-3); \r\n    \r\n  }\r\n\r\n\r\n/* today's weather data - 2nd section  */\r\n\r\n.day-data {\r\n    background: var(--green-4);\r\n    padding: 3rem;\r\n}\r\n\r\n.day-data .d-flex{\r\n    padding: 3rem;\r\n    flex-wrap: wrap;\r\n    gap: 3rem;\r\n}\r\n\r\n.day-data .d-flex > div{\r\n    text-align: center;\r\n    flex: 1;\r\n    flex-basis: 200px;\r\n}\r\n\r\n.day-data .d-flex > div > p:first-child{\r\n    color: var(--green-3);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.day-data .d-flex > div > p:last-child{\r\n    color: #fff;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,UAAU;IACV,SAAS;IACT,sEAAsE;IACtE,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,cAAc;IACd,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;AAGA,gBAAgB;AAChB;IACI,gCAAgC;IAChC,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,mBAAmB;IACnB,OAAO;AACX;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,iBAAiB;IACjB,0BAA0B;IAC1B,cAAc;IACd,eAAe;IACf,gCAAgC;IAChC,WAAW;AACf;;AAEA;IACI,OAAO;IACP,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,kCAAkC;IAClC,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,gCAAgC;AACpC;;;AAGA,gDAAgD;AAChD;IACI,kBAAkB;IAClB,kBAAkB;;AAEtB;;AAEA;IACI,6BAA6B;IAC7B,mBAAmB;IACnB,mBAAmB;IACnB,eAAe;IACf,SAAS;;;AAGb;;AAEA;IACI,mBAAmB;IACnB,OAAO;IACP,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,iBAAiB;IACjB,WAAW;IACX,qBAAqB;IACrB,4BAA4B;IAC5B,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,mBAAmB;AACvB;;;;AAIA,eAAe;;AAEf;IACI,WAAW;AACf;;AAEA,UAAU;AACV;IACI,qBAAqB;;EAEvB;;AAEF,WAAW;AACX;IACI,0BAA0B;;EAE5B;;AAEF,oBAAoB;AACpB;IACI,0BAA0B;;EAE5B;;;AAGF,wCAAwC;;AAExC;IACI,0BAA0B;IAC1B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,iBAAiB;AACrB","sourcesContent":[":root {\r\n    --aero-blue: #D7FFF1;\r\n    --green-1: #AAFCB8;\r\n    --green-2: #8CD790;\r\n    --green-3: #77AF9C;\r\n    --green-4: #285943;\r\n}\r\n\r\n\r\nbody{\r\n    padding: 0;\r\n    margin: 0;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-size: cover;\r\n    transition: all .3s;\r\n\r\n}\r\n\r\np{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\ninput{\r\n    border-radius: 4px;\r\n    border: none;\r\n    margin: 0;\r\n    padding: .5rem;\r\n    font-size: 1rem;\r\n}\r\n\r\nbutton{\r\n    margin: 0;\r\n    border: none;\r\n    font-size: 1rem;\r\n\r\n}\r\n\r\n.fw600{\r\n    font-weight: 600;\r\n}\r\n\r\n.d-flex{\r\n    display: flex;\r\n}\r\n\r\n.d-flex-col{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n/* navbar menu */\r\nnav {\r\n    background-color: var(--green-4);\r\n    align-items: center;\r\n    padding: 1rem 5%;\r\n    flex-wrap: wrap;\r\n    gap: 2rem;\r\n}\r\n\r\nnav .logo {\r\n    align-items: center;\r\n    flex: 1;\r\n}\r\n\r\nnav .logo svg{\r\n    color: var(--green-1);\r\n}\r\n\r\nnav .logo p{\r\n    color: var(--green-1);\r\n}\r\n\r\nnav .search {\r\n    flex: 3;\r\n}\r\n\r\nnav .search > button {\r\n    margin-left: -6px;\r\n    border-radius: 0 4px 4px 0;\r\n    padding: .5rem;\r\n    cursor: pointer;\r\n    background-color: var(--green-3);\r\n    color: #fff;\r\n}\r\n\r\nnav .temp-btn{\r\n    flex: 3;\r\n    justify-content: flex-end;\r\n}\r\n\r\nnav .temp-btn button {\r\n    padding: .5rem 2rem;\r\n    border-radius: 4px;\r\n    background-color: var(--aero-blue);\r\n    cursor: pointer;\r\n    transition: all .2s;\r\n}\r\n\r\nnav .temp-btn button:hover{\r\n    background-color: var(--green-1);\r\n}\r\n\r\n\r\n/* today's forecast container - first section  */\r\n.day-forecast{\r\n    padding: 6rem 4rem;\r\n    position: relative;\r\n    \r\n}\r\n\r\n.day-forecast .general-info{\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin-bottom: 2rem;\r\n    flex-wrap: wrap;\r\n    gap: 3rem;\r\n    \r\n \r\n}\r\n\r\n.day-forecast .general-info .main-info{\r\n    align-items: center;\r\n    flex: 1;\r\n    background: #ffffff62;\r\n    border-radius: 2rem;\r\n    padding: 1rem 0;\r\n    flex-basis: 220px;\r\n}\r\n\r\n.day-forecast .general-info .main-info .city-text{\r\n    font-size: 2rem;\r\n}\r\n\r\n.day-forecast .general-info .main-info .weather-text{\r\n    font-size: 1.5rem;\r\n}\r\n\r\n.day-forecast .general-info .main-info .temperature-text{\r\n    font-size: 3.5rem;\r\n    margin: 1rem auto;\r\n}\r\n\r\n.day-forecast .weather-per-hours{\r\n    overflow-x: scroll;\r\n    flex: 2;\r\n    flex-basis: 350px;\r\n    gap: 3.5rem;\r\n    background: #ffffff62;\r\n    border-radius: 2rem 2rem 0 0;\r\n    padding: 1rem 0;\r\n}\r\n\r\n.day-forecast .weather-per-hours > div {\r\n    gap: 2rem;\r\n    align-items: center;\r\n}\r\n\r\n\r\n\r\n/* scroll bar */\r\n\r\n.weather-per-hours::-webkit-scrollbar {\r\n    height: 7px;\r\n}\r\n\r\n/* Track */\r\n.weather-per-hours::-webkit-scrollbar-track {\r\n    background: #f1f1f11f; \r\n    \r\n  }\r\n   \r\n/* Handle */\r\n.weather-per-hours::-webkit-scrollbar-thumb {\r\n    background: var(--green-4); \r\n\r\n  }\r\n  \r\n/* Handle on hover */\r\n.weather-per-hours::-webkit-scrollbar-thumb:hover {\r\n    background: var(--green-3); \r\n    \r\n  }\r\n\r\n\r\n/* today's weather data - 2nd section  */\r\n\r\n.day-data {\r\n    background: var(--green-4);\r\n    padding: 3rem;\r\n}\r\n\r\n.day-data .d-flex{\r\n    padding: 3rem;\r\n    flex-wrap: wrap;\r\n    gap: 3rem;\r\n}\r\n\r\n.day-data .d-flex > div{\r\n    text-align: center;\r\n    flex: 1;\r\n    flex-basis: 200px;\r\n}\r\n\r\n.day-data .d-flex > div > p:first-child{\r\n    color: var(--green-3);\r\n    text-transform: uppercase;\r\n}\r\n\r\n.day-data .d-flex > div > p:last-child{\r\n    color: #fff;\r\n    font-size: 1.6rem;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/auxFunctions.js":
/*!*****************************!*\
  !*** ./src/auxFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "kelvinToCelsius": () => (/* binding */ kelvinToCelsius),
/* harmony export */   "kelvinToFahrenheit": () => (/* binding */ kelvinToFahrenheit),
/* harmony export */   "tempWriter": () => (/* binding */ tempWriter)
/* harmony export */ });
const getTime = dateTime => {
    let readable_date = new Date(dateTime*1000);
    let hour = readable_date.getHours()
    let minutes = readable_date.getMinutes()
    return `${hour}:${minutes <= 9 ? '0' + minutes : minutes}`
}

const getDate = date => {
    let readable_date = new Date(date*1000);
    let hour = readable_date.getHours()
    let day = readable_date.getDate()
    let month = readable_date.getMonth() + 1
    return `${day}/${month} ${hour}:00`
}


const kelvinToCelsius = t => {
    return `${(t - 273.15).toFixed(1)} ºC`
}

const kelvinToFahrenheit = t => {
    return `${((t - 273.15) * 9 / 5 + 32).toFixed(1)} ºF`
}

const tempWriter = (t, tempUnits) => {
    return `${tempUnits === 'C' ? kelvinToCelsius(t) : kelvinToFahrenheit(t) } `
}



/***/ }),

/***/ "./src/domContent.js":
/*!***************************!*\
  !*** ./src/domContent.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "searchCity": () => (/* binding */ searchCity)
/* harmony export */ });
/* harmony import */ var _auxFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auxFunctions */ "./src/auxFunctions.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _weatherIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherIcons */ "./src/weatherIcons.js");




const body = document.querySelector('body')

const cityText = document.querySelector('.city-text')
const weatherText = document.querySelector('.weather-text')
const temperatureText = document.querySelector('.temperature-text')
const hightTemp = document.querySelector('.high-temp')
const lowTemp = document.querySelector('.low-temp')

const hourlyWeatherContainer = document.querySelector('.weather-per-hours')

const sunriseTime = document.querySelector('.sunriseTime')
const sunsetTime = document.querySelector('.sunsetTime')
const chanceOfRain = document.querySelector('.chance-of-rain')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const feelLike = document.querySelector('.feels-like')
const precipitation = document.querySelector('.precipitation')
const pressure = document.querySelector('.pressure')
const visibility = document.querySelector('.visibility')
const cloudy = document.querySelector('.cloudy')

const tempUnitsBtn = document.getElementById('temp-units-btn')
let tempUnits = "C"

const cel = document.getElementById('cel')
const fah = document.getElementById('fah')
let lastSearchedTown

tempUnitsBtn.addEventListener('click', async () => {
    if(tempUnits === "C") tempUnits = 'F'
    else tempUnits = 'C'
    cel.classList.toggle('fw600')
    fah.classList.toggle('fw600')
    searchCity(lastSearchedTown)
})



async function searchCity (valueToSearch) {
    lastSearchedTown = valueToSearch;
    const data = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(valueToSearch)

    const currentData = data.list[0]

    cityText.innerHTML = data.city
    weatherText.innerHTML = currentData.weather[0].main
    temperatureText.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.tempWriter)(currentData.main.temp, tempUnits)
    hightTemp.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.tempWriter)(currentData.main.temp_max, tempUnits)
    lowTemp.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.tempWriter)(currentData.main.temp_min, tempUnits)

    hourlyWeatherContainer.innerHTML = ''

    data.list.forEach((time, i) => {
        hourlyWeatherContainer.innerHTML += `
            <div class="each-hour d-flex-col">
                <div class="time-text">${(0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.getDate)(time.dt)}</div>
                <div class="weather-icon"><img src="http://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png"></img></div>
                <div class="temp-at-time">${(0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.tempWriter)(time.main.temp, tempUnits)} </div>
            </div>
        `
    });

    sunriseTime.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.getTime)(data.sunrise)
    sunsetTime.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.getTime)(data.sunset)
    chanceOfRain.innerHTML = currentData.pop * 100 + '%'
    humidity.innerHTML =  currentData.main.humidity + '%'
    wind.innerHTML = `${(0,_weatherIcons__WEBPACK_IMPORTED_MODULE_2__.arrowI)(currentData.wind.deg)} ${currentData.wind.speed} km/h`
    feelLike.innerHTML = (0,_auxFunctions__WEBPACK_IMPORTED_MODULE_0__.tempWriter)(currentData.main.feels_like, tempUnits);
    precipitation.innerHTML = `${currentData.rain ? currentData.rain['3h'] : (currentData.snow ? currentData.snow['3h'] : '0') } m<sup>3</sup>`
    pressure.innerHTML = currentData.main.pressure + 'hPa' 
    visibility.innerHTML = `${currentData.visibility > 9999 ? 'max.' : currentData.visibility / 1000 + 'km'}  `
    cloudy.innerHTML =  currentData.clouds.all + '%'

    const imgUrl = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getBackground)(currentData.weather[0].main)
    body.style.backgroundImage = `linear-gradient(0deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.25)), url(${imgUrl.hits[0].largeImageURL})`
}





/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBackground": () => (/* binding */ getBackground),
/* harmony export */   "getData": () => (/* binding */ getData),
/* harmony export */   "getLocation": () => (/* binding */ getLocation)
/* harmony export */ });
async function getData(valueToSearch) {
    console.log(valueToSearch)
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${valueToSearch}&appid=d312249b4176a5f209ed873f062b0c7a`
    try {
        const response = await fetch( url , { mode: "cors" });
        const data = await response.json();
        console.log(data)
        const mainData = {
            city: data.city.name,
            sunrise: data.city.sunrise,
            sunset: data.city.sunset,
            list: data.list
        }
        console.log(mainData)
        return mainData

    } catch (error) {
        console.log(error)
    }
}

async function getLocation(lon, lat) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat.toFixed(4)}&lon=${lon.toFixed(4)}&appid=d312249b4176a5f209ed873f062b0c7a`

    try {
        const data = await fetch(url, { mode: "cors" });
        const response = data.json();
        return response
    } catch (error) {
        console.log(error)
    }
}

async function getBackground(q) {
    try {
        const url = `https://pixabay.com/api/?key=24426393-c3ed339720510506c1c2ff54e&q=${q}+landscape`
        const data = await fetch(url, { mode: "cors" });
        const response = await data.json();
        console.log(response)
        return response
    } 
    catch (error) {
        console.log(error)
    }

}




/***/ }),

/***/ "./src/weatherIcons.js":
/*!*****************************!*\
  !*** ./src/weatherIcons.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrowI": () => (/* binding */ arrowI)
/* harmony export */ });
const arrowI = rot => { 
        return `<svg style="width:24px;height:24px;transform:rotate(${rot}deg)" viewBox="0 0 24 24">
    <path fill="currentColor" d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" />
    </svg>`
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domContent */ "./src/domContent.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const searchBtn = document.getElementById('search-btn')
const cityInput = document.getElementById('city-inpuy')

;(0,_domContent__WEBPACK_IMPORTED_MODULE_0__.searchCity)('Sevilla')

const successCallback = async (position) => {
    const location = await (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getLocation)(position.coords.longitude, position.coords.latitude)
    ;(0,_domContent__WEBPACK_IMPORTED_MODULE_0__.searchCity)(location.name)
};

const errorCallback = (error) => {
    console.log(error)
    ;(0,_domContent__WEBPACK_IMPORTED_MODULE_0__.searchCity)(defaultLocation || 'Sevilla')
};

let defaultLocation = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);


searchBtn.addEventListener('click',  () => {
    let valueToSearch = cityInput.value
    ;(0,_domContent__WEBPACK_IMPORTED_MODULE_0__.searchCity)(valueToSearch);
})






})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2F1eEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9kb21Db250ZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckljb25zLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAtLWFlcm8tYmx1ZTogI0Q3RkZGMTtcXHJcXG4gICAgLS1ncmVlbi0xOiAjQUFGQ0I4O1xcclxcbiAgICAtLWdyZWVuLTI6ICM4Q0Q3OTA7XFxyXFxuICAgIC0tZ3JlZW4tMzogIzc3QUY5QztcXHJcXG4gICAgLS1ncmVlbi00OiAjMjg1OTQzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbnB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXR7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmZ3NjAwe1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZC1mbGV4LWNvbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogbmF2YmFyIG1lbnUgKi9cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi00KTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMXJlbSA1JTtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbm5hdiAubG9nbyB7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbm5hdiAubG9nbyBzdmd7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5sb2dvIHB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi0xKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zZWFyY2gge1xcclxcbiAgICBmbGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnNlYXJjaCA+IGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMyk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnRlbXAtYnRue1xcclxcbiAgICBmbGV4OiAzO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnRlbXAtYnRuIGJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWVyby1ibHVlKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLnRlbXAtYnRuIGJ1dHRvbjpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHRvZGF5J3MgZm9yZWNhc3QgY29udGFpbmVyIC0gZmlyc3Qgc2VjdGlvbiAgKi9cXHJcXG4uZGF5LWZvcmVjYXN0e1xcclxcbiAgICBwYWRkaW5nOiA2cmVtIDRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLmdlbmVyYWwtaW5mb3tcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBcXHJcXG4gXFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLmdlbmVyYWwtaW5mbyAubWFpbi1pbmZve1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmNjI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgZmxleC1iYXNpczogMjIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLmdlbmVyYWwtaW5mbyAubWFpbi1pbmZvIC5jaXR5LXRleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1mb3JlY2FzdCAuZ2VuZXJhbC1pbmZvIC5tYWluLWluZm8gLndlYXRoZXItdGV4dHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLmdlbmVyYWwtaW5mbyAubWFpbi1pbmZvIC50ZW1wZXJhdHVyZS10ZXh0e1xcclxcbiAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLndlYXRoZXItcGVyLWhvdXJze1xcclxcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxyXFxuICAgIGZsZXg6IDI7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDM1MHB4O1xcclxcbiAgICBnYXA6IDMuNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjYyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtIDJyZW0gMCAwO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLndlYXRoZXItcGVyLWhvdXJzID4gZGl2IHtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBzY3JvbGwgYmFyICovXFxyXFxuXFxyXFxuLndlYXRoZXItcGVyLWhvdXJzOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGhlaWdodDogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBUcmFjayAqL1xcclxcbi53ZWF0aGVyLXBlci1ob3Vyczo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxMWY7IFxcclxcbiAgICBcXHJcXG4gIH1cXHJcXG4gICBcXHJcXG4vKiBIYW5kbGUgKi9cXHJcXG4ud2VhdGhlci1wZXItaG91cnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tNCk7IFxcclxcblxcclxcbiAgfVxcclxcbiAgXFxyXFxuLyogSGFuZGxlIG9uIGhvdmVyICovXFxyXFxuLndlYXRoZXItcGVyLWhvdXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLTMpOyBcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuLyogdG9kYXkncyB3ZWF0aGVyIGRhdGEgLSAybmQgc2VjdGlvbiAgKi9cXHJcXG5cXHJcXG4uZGF5LWRhdGEge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi00KTtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kYXRhIC5kLWZsZXh7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWRhdGEgLmQtZmxleCA+IGRpdntcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBmbGV4LWJhc2lzOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kYXRhIC5kLWZsZXggPiBkaXYgPiBwOmZpcnN0LWNoaWxke1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tMyk7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5kYXktZGF0YSAuZC1mbGV4ID4gZGl2ID4gcDpsYXN0LWNoaWxke1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0VBQXNFO0lBQ3RFLHNCQUFzQjtJQUN0QixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULFlBQVk7SUFDWixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQSxnQkFBZ0I7QUFDaEI7SUFDSSxnQ0FBZ0M7SUFDaEMsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87QUFDWDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLGVBQWU7SUFDZixnQ0FBZ0M7SUFDaEMsV0FBVztBQUNmOztBQUVBO0lBQ0ksT0FBTztJQUNQLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7OztBQUdBLGdEQUFnRDtBQUNoRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFNBQVM7OztBQUdiOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsNEJBQTRCO0lBQzVCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOzs7O0FBSUEsZUFBZTs7QUFFZjtJQUNJLFdBQVc7QUFDZjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxxQkFBcUI7O0VBRXZCOztBQUVGLFdBQVc7QUFDWDtJQUNJLDBCQUEwQjs7RUFFNUI7O0FBRUYsb0JBQW9CO0FBQ3BCO0lBQ0ksMEJBQTBCOztFQUU1Qjs7O0FBR0Ysd0NBQXdDOztBQUV4QztJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS1hZXJvLWJsdWU6ICNEN0ZGRjE7XFxyXFxuICAgIC0tZ3JlZW4tMTogI0FBRkNCODtcXHJcXG4gICAgLS1ncmVlbi0yOiAjOENENzkwO1xcclxcbiAgICAtLWdyZWVuLTM6ICM3N0FGOUM7XFxyXFxuICAgIC0tZ3JlZW4tNDogIzI4NTk0MztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5we1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmlucHV0e1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5idXR0b257XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5mdzYwMHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmQtZmxleC1jb2x7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIG5hdmJhciBtZW51ICovXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tNCk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gNSU7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmxvZ28ge1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYgLmxvZ28gc3Zne1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbm5hdiAubG9nbyBwe1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tMSk7XFxyXFxufVxcclxcblxcclxcbm5hdiAuc2VhcmNoIHtcXHJcXG4gICAgZmxleDogMztcXHJcXG59XFxyXFxuXFxyXFxubmF2IC5zZWFyY2ggPiBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTMpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC50ZW1wLWJ0bntcXHJcXG4gICAgZmxleDogMztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IC50ZW1wLWJ0biBidXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFlcm8tYmx1ZSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycztcXHJcXG59XFxyXFxuXFxyXFxubmF2IC50ZW1wLWJ0biBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLTEpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiB0b2RheSdzIGZvcmVjYXN0IGNvbnRhaW5lciAtIGZpcnN0IHNlY3Rpb24gICovXFxyXFxuLmRheS1mb3JlY2FzdHtcXHJcXG4gICAgcGFkZGluZzogNnJlbSA0cmVtO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC5nZW5lcmFsLWluZm97XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgXFxyXFxuIFxcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC5nZW5lcmFsLWluZm8gLm1haW4taW5mb3tcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjYyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDIyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC5nZW5lcmFsLWluZm8gLm1haW4taW5mbyAuY2l0eS10ZXh0e1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXktZm9yZWNhc3QgLmdlbmVyYWwtaW5mbyAubWFpbi1pbmZvIC53ZWF0aGVyLXRleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC5nZW5lcmFsLWluZm8gLm1haW4taW5mbyAudGVtcGVyYXR1cmUtdGV4dHtcXHJcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC53ZWF0aGVyLXBlci1ob3Vyc3tcXHJcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcclxcbiAgICBmbGV4OiAyO1xcclxcbiAgICBmbGV4LWJhc2lzOiAzNTBweDtcXHJcXG4gICAgZ2FwOiAzLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY2MjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbSAycmVtIDAgMDtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWZvcmVjYXN0IC53ZWF0aGVyLXBlci1ob3VycyA+IGRpdiB7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogc2Nyb2xsIGJhciAqL1xcclxcblxcclxcbi53ZWF0aGVyLXBlci1ob3Vyczo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcbiAgICBoZWlnaHQ6IDdweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVHJhY2sgKi9cXHJcXG4ud2VhdGhlci1wZXItaG91cnM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogI2YxZjFmMTFmOyBcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAgXFxyXFxuLyogSGFuZGxlICovXFxyXFxuLndlYXRoZXItcGVyLWhvdXJzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLTQpOyBcXHJcXG5cXHJcXG4gIH1cXHJcXG4gIFxcclxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcclxcbi53ZWF0aGVyLXBlci1ob3Vyczo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi0zKTsgXFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcblxcclxcbi8qIHRvZGF5J3Mgd2VhdGhlciBkYXRhIC0gMm5kIHNlY3Rpb24gICovXFxyXFxuXFxyXFxuLmRheS1kYXRhIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tNCk7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5kYXktZGF0YSAuZC1mbGV4e1xcclxcbiAgICBwYWRkaW5nOiAzcmVtO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRheS1kYXRhIC5kLWZsZXggPiBkaXZ7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgZmxleC1iYXNpczogMjAwcHg7XFxyXFxufVxcclxcblxcclxcbi5kYXktZGF0YSAuZC1mbGV4ID4gZGl2ID4gcDpmaXJzdC1jaGlsZHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLTMpO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZGF5LWRhdGEgLmQtZmxleCA+IGRpdiA+IHA6bGFzdC1jaGlsZHtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZXRUaW1lID0gZGF0ZVRpbWUgPT4ge1xyXG4gICAgbGV0IHJlYWRhYmxlX2RhdGUgPSBuZXcgRGF0ZShkYXRlVGltZSoxMDAwKTtcclxuICAgIGxldCBob3VyID0gcmVhZGFibGVfZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgbWludXRlcyA9IHJlYWRhYmxlX2RhdGUuZ2V0TWludXRlcygpXHJcbiAgICByZXR1cm4gYCR7aG91cn06JHttaW51dGVzIDw9IDkgPyAnMCcgKyBtaW51dGVzIDogbWludXRlc31gXHJcbn1cclxuXHJcbmNvbnN0IGdldERhdGUgPSBkYXRlID0+IHtcclxuICAgIGxldCByZWFkYWJsZV9kYXRlID0gbmV3IERhdGUoZGF0ZSoxMDAwKTtcclxuICAgIGxldCBob3VyID0gcmVhZGFibGVfZGF0ZS5nZXRIb3VycygpXHJcbiAgICBsZXQgZGF5ID0gcmVhZGFibGVfZGF0ZS5nZXREYXRlKClcclxuICAgIGxldCBtb250aCA9IHJlYWRhYmxlX2RhdGUuZ2V0TW9udGgoKSArIDFcclxuICAgIHJldHVybiBgJHtkYXl9LyR7bW9udGh9ICR7aG91cn06MDBgXHJcbn1cclxuXHJcblxyXG5jb25zdCBrZWx2aW5Ub0NlbHNpdXMgPSB0ID0+IHtcclxuICAgIHJldHVybiBgJHsodCAtIDI3My4xNSkudG9GaXhlZCgxKX0gwrpDYFxyXG59XHJcblxyXG5jb25zdCBrZWx2aW5Ub0ZhaHJlbmhlaXQgPSB0ID0+IHtcclxuICAgIHJldHVybiBgJHsoKHQgLSAyNzMuMTUpICogOSAvIDUgKyAzMikudG9GaXhlZCgxKX0gwrpGYFxyXG59XHJcblxyXG5jb25zdCB0ZW1wV3JpdGVyID0gKHQsIHRlbXBVbml0cykgPT4ge1xyXG4gICAgcmV0dXJuIGAke3RlbXBVbml0cyA9PT0gJ0MnID8ga2VsdmluVG9DZWxzaXVzKHQpIDoga2VsdmluVG9GYWhyZW5oZWl0KHQpIH0gYFxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0VGltZSxcclxuICAgIGdldERhdGUsXHJcbiAgICBrZWx2aW5Ub0NlbHNpdXMsXHJcbiAgICBrZWx2aW5Ub0ZhaHJlbmhlaXQsXHJcbiAgICB0ZW1wV3JpdGVyXHJcbn0iLCJpbXBvcnQgeyBnZXREYXRlLCBnZXRUaW1lLCB0ZW1wV3JpdGVyIH0gZnJvbSBcIi4vYXV4RnVuY3Rpb25zXCJcclxuaW1wb3J0IHsgZ2V0QmFja2dyb3VuZCwgZ2V0RGF0YSB9IGZyb20gXCIuL2dldERhdGFcIlxyXG5pbXBvcnQgeyBhcnJvd0kgfSBmcm9tIFwiLi93ZWF0aGVySWNvbnNcIlxyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxyXG5cclxuY29uc3QgY2l0eVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2l0eS10ZXh0JylcclxuY29uc3Qgd2VhdGhlclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci10ZXh0JylcclxuY29uc3QgdGVtcGVyYXR1cmVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlLXRleHQnKVxyXG5jb25zdCBoaWdodFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC10ZW1wJylcclxuY29uc3QgbG93VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb3ctdGVtcCcpXHJcblxyXG5jb25zdCBob3VybHlXZWF0aGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItcGVyLWhvdXJzJylcclxuXHJcbmNvbnN0IHN1bnJpc2VUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2VUaW1lJylcclxuY29uc3Qgc3Vuc2V0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXRUaW1lJylcclxuY29uc3QgY2hhbmNlT2ZSYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5jZS1vZi1yYWluJylcclxuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxyXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKVxyXG5jb25zdCBmZWVsTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJylcclxuY29uc3QgcHJlY2lwaXRhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmVjaXBpdGF0aW9uJylcclxuY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKVxyXG5jb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKVxyXG5jb25zdCBjbG91ZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvdWR5JylcclxuXHJcbmNvbnN0IHRlbXBVbml0c0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZW1wLXVuaXRzLWJ0bicpXHJcbmxldCB0ZW1wVW5pdHMgPSBcIkNcIlxyXG5cclxuY29uc3QgY2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NlbCcpXHJcbmNvbnN0IGZhaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWgnKVxyXG5sZXQgbGFzdFNlYXJjaGVkVG93blxyXG5cclxudGVtcFVuaXRzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYodGVtcFVuaXRzID09PSBcIkNcIikgdGVtcFVuaXRzID0gJ0YnXHJcbiAgICBlbHNlIHRlbXBVbml0cyA9ICdDJ1xyXG4gICAgY2VsLmNsYXNzTGlzdC50b2dnbGUoJ2Z3NjAwJylcclxuICAgIGZhaC5jbGFzc0xpc3QudG9nZ2xlKCdmdzYwMCcpXHJcbiAgICBzZWFyY2hDaXR5KGxhc3RTZWFyY2hlZFRvd24pXHJcbn0pXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hDaXR5ICh2YWx1ZVRvU2VhcmNoKSB7XHJcbiAgICBsYXN0U2VhcmNoZWRUb3duID0gdmFsdWVUb1NlYXJjaDtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXREYXRhKHZhbHVlVG9TZWFyY2gpXHJcblxyXG4gICAgY29uc3QgY3VycmVudERhdGEgPSBkYXRhLmxpc3RbMF1cclxuXHJcbiAgICBjaXR5VGV4dC5pbm5lckhUTUwgPSBkYXRhLmNpdHlcclxuICAgIHdlYXRoZXJUZXh0LmlubmVySFRNTCA9IGN1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpblxyXG4gICAgdGVtcGVyYXR1cmVUZXh0LmlubmVySFRNTCA9IHRlbXBXcml0ZXIoY3VycmVudERhdGEubWFpbi50ZW1wLCB0ZW1wVW5pdHMpXHJcbiAgICBoaWdodFRlbXAuaW5uZXJIVE1MID0gdGVtcFdyaXRlcihjdXJyZW50RGF0YS5tYWluLnRlbXBfbWF4LCB0ZW1wVW5pdHMpXHJcbiAgICBsb3dUZW1wLmlubmVySFRNTCA9IHRlbXBXcml0ZXIoY3VycmVudERhdGEubWFpbi50ZW1wX21pbiwgdGVtcFVuaXRzKVxyXG5cclxuICAgIGhvdXJseVdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gJydcclxuXHJcbiAgICBkYXRhLmxpc3QuZm9yRWFjaCgodGltZSwgaSkgPT4ge1xyXG4gICAgICAgIGhvdXJseVdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVhY2gtaG91ciBkLWZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS10ZXh0XCI+JHtnZXREYXRlKHRpbWUuZHQpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndlYXRoZXItaWNvblwiPjxpbWcgc3JjPVwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt0aW1lLndlYXRoZXJbMF0uaWNvbn1AMngucG5nXCI+PC9pbWc+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcC1hdC10aW1lXCI+JHt0ZW1wV3JpdGVyKHRpbWUubWFpbi50ZW1wLCB0ZW1wVW5pdHMpfSA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfSk7XHJcblxyXG4gICAgc3VucmlzZVRpbWUuaW5uZXJIVE1MID0gZ2V0VGltZShkYXRhLnN1bnJpc2UpXHJcbiAgICBzdW5zZXRUaW1lLmlubmVySFRNTCA9IGdldFRpbWUoZGF0YS5zdW5zZXQpXHJcbiAgICBjaGFuY2VPZlJhaW4uaW5uZXJIVE1MID0gY3VycmVudERhdGEucG9wICogMTAwICsgJyUnXHJcbiAgICBodW1pZGl0eS5pbm5lckhUTUwgPSAgY3VycmVudERhdGEubWFpbi5odW1pZGl0eSArICclJ1xyXG4gICAgd2luZC5pbm5lckhUTUwgPSBgJHthcnJvd0koY3VycmVudERhdGEud2luZC5kZWcpfSAke2N1cnJlbnREYXRhLndpbmQuc3BlZWR9IGttL2hgXHJcbiAgICBmZWVsTGlrZS5pbm5lckhUTUwgPSB0ZW1wV3JpdGVyKGN1cnJlbnREYXRhLm1haW4uZmVlbHNfbGlrZSwgdGVtcFVuaXRzKTtcclxuICAgIHByZWNpcGl0YXRpb24uaW5uZXJIVE1MID0gYCR7Y3VycmVudERhdGEucmFpbiA/IGN1cnJlbnREYXRhLnJhaW5bJzNoJ10gOiAoY3VycmVudERhdGEuc25vdyA/IGN1cnJlbnREYXRhLnNub3dbJzNoJ10gOiAnMCcpIH0gbTxzdXA+Mzwvc3VwPmBcclxuICAgIHByZXNzdXJlLmlubmVySFRNTCA9IGN1cnJlbnREYXRhLm1haW4ucHJlc3N1cmUgKyAnaFBhJyBcclxuICAgIHZpc2liaWxpdHkuaW5uZXJIVE1MID0gYCR7Y3VycmVudERhdGEudmlzaWJpbGl0eSA+IDk5OTkgPyAnbWF4LicgOiBjdXJyZW50RGF0YS52aXNpYmlsaXR5IC8gMTAwMCArICdrbSd9ICBgXHJcbiAgICBjbG91ZHkuaW5uZXJIVE1MID0gIGN1cnJlbnREYXRhLmNsb3Vkcy5hbGwgKyAnJSdcclxuXHJcbiAgICBjb25zdCBpbWdVcmwgPSBhd2FpdCBnZXRCYWNrZ3JvdW5kKGN1cnJlbnREYXRhLndlYXRoZXJbMF0ubWFpbilcclxuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpKSwgdXJsKCR7aW1nVXJsLmhpdHNbMF0ubGFyZ2VJbWFnZVVSTH0pYFxyXG59XHJcblxyXG5cclxuXHJcbiIsImFzeW5jIGZ1bmN0aW9uIGdldERhdGEodmFsdWVUb1NlYXJjaCkge1xyXG4gICAgY29uc29sZS5sb2codmFsdWVUb1NlYXJjaClcclxuICAgIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke3ZhbHVlVG9TZWFyY2h9JmFwcGlkPWQzMTIyNDliNDE3NmE1ZjIwOWVkODczZjA2MmIwYzdhYFxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCB1cmwgLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICBjb25zdCBtYWluRGF0YSA9IHtcclxuICAgICAgICAgICAgY2l0eTogZGF0YS5jaXR5Lm5hbWUsXHJcbiAgICAgICAgICAgIHN1bnJpc2U6IGRhdGEuY2l0eS5zdW5yaXNlLFxyXG4gICAgICAgICAgICBzdW5zZXQ6IGRhdGEuY2l0eS5zdW5zZXQsXHJcbiAgICAgICAgICAgIGxpc3Q6IGRhdGEubGlzdFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhtYWluRGF0YSlcclxuICAgICAgICByZXR1cm4gbWFpbkRhdGFcclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbihsb24sIGxhdCkge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdC50b0ZpeGVkKDQpfSZsb249JHtsb24udG9GaXhlZCg0KX0mYXBwaWQ9ZDMxMjI0OWI0MTc2YTVmMjA5ZWQ4NzNmMDYyYjBjN2FgXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2godXJsLCB7IG1vZGU6IFwiY29yc1wiIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gZGF0YS5qc29uKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRCYWNrZ3JvdW5kKHEpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vcGl4YWJheS5jb20vYXBpLz9rZXk9MjQ0MjYzOTMtYzNlZDMzOTcyMDUxMDUwNmMxYzJmZjU0ZSZxPSR7cX0rbGFuZHNjYXBlYFxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCh1cmwsIHsgbW9kZTogXCJjb3JzXCIgfSk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkYXRhLmpzb24oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VcclxuICAgIH0gXHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0RGF0YSxcclxuICAgIGdldExvY2F0aW9uLFxyXG4gICAgZ2V0QmFja2dyb3VuZFxyXG59IiwiZXhwb3J0IGNvbnN0IGFycm93SSA9IHJvdCA9PiB7IFxyXG4gICAgICAgIHJldHVybiBgPHN2ZyBzdHlsZT1cIndpZHRoOjI0cHg7aGVpZ2h0OjI0cHg7dHJhbnNmb3JtOnJvdGF0ZSgke3JvdH1kZWcpXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxyXG4gICAgPHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNMTQgMTYuOTRWMTIuOTRINS4wOEw1LjA1IDEwLjkzSDE0VjYuOTRMMTkgMTEuOTRaXCIgLz5cclxuICAgIDwvc3ZnPmBcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHNlYXJjaENpdHkgfSBmcm9tICcuL2RvbUNvbnRlbnQnO1xyXG5pbXBvcnQgeyBnZXRMb2NhdGlvbiB9IGZyb20gJy4vZ2V0RGF0YSc7XHJcblxyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtYnRuJylcclxuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdHktaW5wdXknKVxyXG5cclxuc2VhcmNoQ2l0eSgnU2V2aWxsYScpXHJcblxyXG5jb25zdCBzdWNjZXNzQ2FsbGJhY2sgPSBhc3luYyAocG9zaXRpb24pID0+IHtcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gYXdhaXQgZ2V0TG9jYXRpb24ocG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZSwgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlKVxyXG4gICAgc2VhcmNoQ2l0eShsb2NhdGlvbi5uYW1lKVxyXG59O1xyXG5cclxuY29uc3QgZXJyb3JDYWxsYmFjayA9IChlcnJvcikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICBzZWFyY2hDaXR5KGRlZmF1bHRMb2NhdGlvbiB8fCAnU2V2aWxsYScpXHJcbn07XHJcblxyXG5sZXQgZGVmYXVsdExvY2F0aW9uID0gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihzdWNjZXNzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2spO1xyXG5cclxuXHJcbnNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKSA9PiB7XHJcbiAgICBsZXQgdmFsdWVUb1NlYXJjaCA9IGNpdHlJbnB1dC52YWx1ZVxyXG4gICAgc2VhcmNoQ2l0eSh2YWx1ZVRvU2VhcmNoKTtcclxufSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=