/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/style/main.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/style/main.scss ***!
  \**************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n#form-section {\\n  width: 100%;\\n  height: 100%;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n#form-section form {\\n  background-color: #ffffff;\\n  border-radius: 2px;\\n  width: 30%;\\n  font-size: 1.2rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-around;\\n  padding: 1% 0;\\n  color: #000;\\n}\\n#form-section form h3 {\\n  color: #f37232;\\n  margin: 0;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n  font-size: 3rem;\\n}\\n#form-section form > div {\\n  width: 90%;\\n}\\n#form-section form > div label {\\n  font-weight: 600;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n  font-size: 1.5rem;\\n}\\n#form-section form > div input,\\n#form-section form > div select {\\n  font-size: 2rem;\\n  padding: 0;\\n  width: 100%;\\n  margin: 5px 0 10px 0;\\n  background-color: #f3f3f3;\\n  border: none;\\n  border-radius: 3px;\\n  padding: 5px 0;\\n  color: #828282;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n}\\n#form-section form select {\\n  color: black !important;\\n}\\n#form-section form input[type=submit] {\\n  margin: 20px 0 20px 0;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n  background-color: #f37232;\\n  border: none;\\n  font-size: 3rem;\\n  padding: 0 20px;\\n}\\n\\n#metrics {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#metrics div {\\n  width: 45%;\\n}\\n#metrics div input {\\n  width: 100%;\\n}\\n\\n#results-section {\\n  font-family: \\\"Amatic SC\\\", cursive;\\n  padding-bottom: 2%;\\n  flex-direction: column;\\n  align-items: center;\\n  margin: 0;\\n}\\n#results-section #results-container {\\n  display: grid;\\n  grid-template-rows: repeat(3, auto);\\n  grid-template-columns: repeat(3, 20%);\\n  grid-gap: 2rem;\\n  justify-content: center;\\n}\\n#results-section #results-container .result-card {\\n  background-color: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n}\\n#results-section #results-container .result-card h3 {\\n  text-align: center;\\n  font-size: 3rem;\\n  justify-self: flex-start;\\n  margin: 0;\\n  margin-top: 1rem;\\n}\\n#results-section #results-container .result-card .image-container {\\n  width: 100%;\\n  height: auto;\\n  margin: 0 auto;\\n}\\n#results-section #results-container .result-card .text-container {\\n  padding: 0 5%;\\n  font-size: 1.5rem;\\n  margin-bottom: 1rem;\\n  text-align: center;\\n}\\n#results-section button {\\n  margin: 20px 0 20px 0;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n  background-color: #f37232;\\n  border: none;\\n  font-size: 3rem;\\n  padding: 0 20px;\\n  width: auto;\\n  margin-top: 2%;\\n}\\n\\nbody {\\n  background: #0f7909;\\n  background: linear-gradient(33deg, #0f7909 2%, #00f9ff 94%);\\n  color: black;\\n  overflow-x: hidden;\\n}\\n\\nmain {\\n  width: 100vw;\\n  min-height: 100vh;\\n}\\n\\n.shadow {\\n  -webkit-box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.3);\\n  box-shadow: 2px 3px 6px 2px rgba(0, 0, 0, 0.3);\\n}\\n\\n.display-hide {\\n  display: none;\\n}\\n\\n.display-show {\\n  display: flex;\\n}\\n\\n#title-section {\\n  display: flex;\\n  justify-content: center;\\n}\\n#title-section h1 {\\n  text-align: center;\\n  font-size: 13rem;\\n  margin: 0;\\n  font-weight: 700;\\n  margin: 10px;\\n  font-family: \\\"Amatic SC\\\", cursive;\\n}\\n#title-section img {\\n  height: 13rem;\\n  width: auto;\\n  margin: auto 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://dino/./src/style/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet%5B1%5D.rules%5B4%5D.use%5B2%5D");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://dino/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[4].use[2]!./src/style/main.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_4_use_2_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://dino/./src/style/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://dino/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ \"./src/style/main.scss\");\n/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app.js */ \"./src/js/app.js\");\n/* harmony import */ var _static_data_dino_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static/data/dino.json */ \"./src/static/data/dino.json\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dino/./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_data_dino_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/data/dino.json */ \"./src/static/data/dino.json\");\n/* harmony import */ var _static_images_brachiosaurus_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/images/brachiosaurus.png */ \"./src/static/images/brachiosaurus.png\");\n/* harmony import */ var _static_images_anklyosaurus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/images/anklyosaurus.png */ \"./src/static/images/anklyosaurus.png\");\n/* harmony import */ var _static_images_elasmosaurus_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/elasmosaurus.png */ \"./src/static/images/elasmosaurus.png\");\n/* harmony import */ var _static_images_human_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/human.png */ \"./src/static/images/human.png\");\n/* harmony import */ var _static_images_pigeon_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/images/pigeon.png */ \"./src/static/images/pigeon.png\");\n/* harmony import */ var _static_images_pteranodon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/pteranodon.png */ \"./src/static/images/pteranodon.png\");\n/* harmony import */ var _static_images_stegosaurus_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/images/stegosaurus.png */ \"./src/static/images/stegosaurus.png\");\n/* harmony import */ var _static_images_tracks_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/images/tracks.png */ \"./src/static/images/tracks.png\");\n/* harmony import */ var _static_images_tyrannosaurus_rex_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/images/tyrannosaurus-rex.png */ \"./src/static/images/tyrannosaurus-rex.png\");\n/* harmony import */ var _static_images_triceratops_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/images/triceratops.png */ \"./src/static/images/triceratops.png\");\n//import the json file with Dinosaur facts\r\n\r\n\r\n//import all the images\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//create an image object for easy access to the images\r\nconst imageObject = {\r\n    brachiosaurus: _static_images_brachiosaurus_png__WEBPACK_IMPORTED_MODULE_1__,\r\n    anklyosaurus: _static_images_anklyosaurus_png__WEBPACK_IMPORTED_MODULE_2__,\r\n    elasmosaurus: _static_images_elasmosaurus_png__WEBPACK_IMPORTED_MODULE_3__,\r\n    human: _static_images_human_png__WEBPACK_IMPORTED_MODULE_4__,\r\n    pigeon: _static_images_pigeon_png__WEBPACK_IMPORTED_MODULE_5__,\r\n    pteranodon: _static_images_pteranodon_png__WEBPACK_IMPORTED_MODULE_6__,\r\n    stegosaurus: _static_images_stegosaurus_png__WEBPACK_IMPORTED_MODULE_7__,\r\n    tracks: _static_images_tracks_png__WEBPACK_IMPORTED_MODULE_8__,\r\n    anklyosaurus: _static_images_anklyosaurus_png__WEBPACK_IMPORTED_MODULE_2__,\r\n    'tyrannosaurus rex': _static_images_tyrannosaurus_rex_png__WEBPACK_IMPORTED_MODULE_9__,\r\n    triceratops: _static_images_triceratops_png__WEBPACK_IMPORTED_MODULE_10__, \r\n}\r\n\r\n/**\r\n * On page load run the main code of the application \r\n * @param {} event \r\n */\r\n\r\nwindow.onload = (event) => {\r\n\r\n            //convert the dino json to Dino Objects\r\n        //map the json dino array to an array of Dino objects\r\n        const dinoArray = _static_data_dino_json__WEBPACK_IMPORTED_MODULE_0__.Dinos.map(value => new Dino(\r\n            value.species,\r\n            value.weight,\r\n            value.height,\r\n            value.diet,\r\n            value.where,\r\n            value.when,\r\n            value.fact\r\n        ));\r\n\r\n        \r\n\r\n        //add an event listener to the submit button\r\n        const submitButton = document.querySelector('#compareMe');\r\n        submitButton.addEventListener('click', (event) => {\r\n\r\n            event.preventDefault();\r\n            \r\n            /**\r\n             * Revealing pattern to store the data from the form\r\n             * Uses an IIFE to immediately return a object that has\r\n             * access to the form data\r\n             */\r\n            const formData = (function(){\r\n\r\n                //get form elements\r\n                const nameInput = document.querySelector('#name');\r\n                const heightInput = document.querySelector('#height');\r\n                const weightInput = document.querySelector('#weight');\r\n                const dietInput = document.querySelector('#diet');\r\n\r\n                //get form data\r\n                const name = nameInput.value;\r\n                const heightInCm = parseInt(heightInput.value);\r\n                const weightInKg = parseInt(weightInput.value);\r\n                const diet = dietInput.value;\r\n\r\n                //convert from metric (user input) to imperial (json Data)\r\n                const height = cmToInches(heightInCm);\r\n                const weight = kgToPounds(weightInKg);\r\n\r\n                return {\r\n                    name: name,\r\n                    height: height,\r\n                    weight: weight,\r\n                    diet: diet\r\n                }\r\n\r\n            })();\r\n\r\n            //using closure and an IIFE to maintain private scope of the variables in the generateBackgroundColor function\r\n            const color = (generateBackgroundColor)();\r\n\r\n            //generate human object and human tile object\r\n            const human = new Human(formData.name, formData.height, formData.weight, formData.diet, imageObject.human);\r\n            const humanTile = new Tile(human.name, human.image, \"\", color());\r\n\r\n            //Create tiles to display on webpage using the dinosaur objects in the dinoArray\r\n            const tileArray = dinoArray.map((dino) => {\r\n                const randomFact = generateRandomFact(dino, human);\r\n                return new Tile(dino.species, dino.image, randomFact, color());\r\n            });\r\n\r\n            //randomise the array and insert the human tile\r\n            const randomisedTileArray = randomiseArray(tileArray);\r\n            const finalArray = [...randomisedTileArray.slice(0,4), humanTile, ...randomisedTileArray.slice(4,8)];\r\n\r\n            //Add tiles to the resultsSection of the webpage\r\n            const resultSection = document.querySelector('#results-container');\r\n            finalArray.forEach( (card) => {\r\n                resultSection.insertAdjacentHTML('beforeend', card.generateHTML());\r\n            });\r\n\r\n            //display the results and hide the form\r\n            toggleFormResults();           \r\n        });\r\n\r\n    }\r\n\r\n\r\n/*\r\n * Generates a fact to be displayed on the tile for the dinosaur in the passed dinoObject.\r\n * Selects one fact randomly from an option of six facts. Three of these facts are already\r\n * stored in the dinoObject. The other three are generated by comparing the human Object \r\n * data to the dinosaur data\r\n * @param {*} dinoObject - dinosaur object of which the facts are generated\r\n * @param {*} humanObject - used to create three of the six facts\r\n * @returns - The generated fact as a string\r\n */\r\nfunction generateRandomFact(dinoObject, humanObject){\r\n\r\n    //If the dinObject is representing a Pigeon than the specification states that only the defined\r\n    //fact is to be returned\r\n    if (dinoObject.species === 'Pigeon'){\r\n        return dinoObject.fact;\r\n    }\r\n\r\n    //generate all facts strings and add them to the factArray\r\n    //The first three facts are solely from the data in the dinoObject\r\n    //The next three facts are calculated by comparing the human object data\r\n    //to the dino object data\r\n    const factArray = [\r\n        `The ${dinoObject.species} lived in the ${dinoObject.when} period`,\r\n        `The ${dinoObject.species} lived in the ${dinoObject.where} region`,\r\n        `${dinoObject.fact}`,\r\n        dinoObject.compareHeight(humanObject.height),\r\n        dinoObject.compareWeight(humanObject.weight),\r\n        dinoObject.compareDiet(humanObject.diet)\r\n    ];\r\n\r\n    //then pick a fact from that array at random\r\n    //generate random number\r\n    let randomNum = randonNumber(5); \r\n\r\n    //pick a random fact\r\n    return factArray[randomNum];\r\n}\r\n\r\n/***\r\n * Constructor Function for Animal that both Dino and Human will inherit from \r\n * @param {*} species - \r\n * @param {*} height - in inches\r\n * @param {*} weight - in pounds\r\n * @param {*} diet - Herbavor or Carnivor\r\n */\r\n\r\nfunction Animal(species, height, weight, diet){\r\n    this.species = species;\r\n    this.weight = weight;\r\n    this.height = height;\r\n    this.diet = diet;\r\n    this.image = imageObject[species.toLowerCase()]; \r\n}\r\n\r\n/***\r\n * Human constructor function that inherits from the Animal constructor functions\r\n * it sets species to Human and set its own name \r\n */\r\nfunction Human(name, height, weight, diet){\r\n    Animal.call(this, \"human\", height, weight, diet);\r\n    this.name = name;\r\n}\r\n\r\n//link Human into the prototype chain all of Animals methods are available to Human\r\nHuman.prototype = Object.create(Animal.prototype);\r\n\r\n/***\r\n * Constructor function for the Dino object. It inherits from the Animal constructor function\r\n * and defines its own properties of where, when and fact\r\n */\r\n\r\nfunction Dino(species, weight, height, diet, where, when, fact){\r\n    Animal.call(this, species, height, weight, diet);\r\n    this.where = where;\r\n    this.when = when;\r\n    this.fact = fact;\r\n}\r\n\r\n//link Dino prototype to animal prototype to inherit its methods\r\nDino.prototype = Object.create(Animal.prototype);\r\n\r\n/**\r\n * Three methods to compare the dinosaur data of this object to the human objects data\r\n */\r\n\r\n/*\r\n    * Compare the height of the human in the human object to the dinosaur in the \r\n    * dinosaur object \r\n    * @param {*} humanHeight - in inches\r\n    * @returns - A string that states the results of the comparsion between the human and \r\n    * dinosaurs height\r\n    */\r\nconst compareHeight = function(humanHeight){\r\n\r\n    const sizeDifference = this.height / humanHeight;\r\n    let value = numberFormat(sizeDifference);\r\n\r\n    //choose the sentence content based on the size difference\r\n    if (sizeDifference > 1){\r\n        return `${this.species} is ${value} times taller than you`;\r\n    } else {\r\n        return `${this.species} is ${(1/value).toFixed(1)} times smaller than you`;\r\n    }\r\n}\r\n\r\n/*\r\n    * Compare the weight of the human in the human object to the dinosaur in the \r\n    * dinosaur object \r\n    * @param {*} humanWeight - in pounds\r\n    * @returns - A string that states the results of the comparsion between the human and \r\n    * dinosaurs weight\r\n    */\r\nconst compareWeight = function(humanWeight){\r\n\r\n    const sizeDifference = this.weight / humanWeight;\r\n    let value = numberFormat(sizeDifference);\r\n\r\n    //choose the sentence content based on the size difference\r\n    if (sizeDifference > 1){\r\n        return `${this.species} is ${value} times heavier than you`;\r\n    } else {\r\n        return `${this.species} is ${(1/value).toFixed(1)} times lighter than you`;\r\n    }\r\n}\r\n\r\n/***\r\n * Compares the dinosaurs diet to the diet of the data in the human object\r\n */\r\nconst compareDiet = function(HumanDiet){\r\n    if (HumanDiet == this.diet){\r\n        return `${this.species} was a ${this.diet} like you!`\r\n    } else {\r\n        return `${this.species} has a different diet to you!`\r\n    }\r\n}\r\n\r\n//add all three above methods to the prototype of Dino, so when a new instance of Dino is\r\n//created it will have access to these methods\r\nDino.prototype.compareHeight = compareHeight;\r\nDino.prototype.compareWeight = compareWeight;\r\nDino.prototype.compareDiet = compareDiet; \r\n\r\n\r\n/*\r\n * Formats the passed number, if it is less than 5 then show it to one decimal place\r\n * if it is more than 5 then round to nearest integer \r\n * @param {*} number \r\n * @returns \r\n */\r\nfunction numberFormat(number){\r\n    if (number > 5){\r\n        return Math.round(number);\r\n    } else {\r\n        return number.toFixed(1);\r\n    }\r\n}\r\n\r\n/***\r\n * Function constructor for a Tile. The Tile object will contain information in order to create\r\n * the display tile for a dinosaur or human\r\n */\r\nfunction Tile(name, image, fact, backgroundColor){\r\n    this.name = name;\r\n    this.image = image;\r\n    this.fact = fact;\r\n    this.backgroundColor = backgroundColor;\r\n}\r\n\r\n//Add a method to the tile prototype to be available for all tile instances\r\nTile.prototype.generateHTML = function(){\r\n        return `<div class=\"result-card shadow\">\r\n        <img src=${this.image} style=\"background-color: ${this.backgroundColor}\" class=\"image-container\"></img>\r\n        <h3>${this.name}</h3>\r\n        <div class=\"text-container\">${this.fact}</div>\r\n        </div>`;\r\n    }\r\n\r\n/***\r\n * Generate random Number\r\n */\r\nfunction randonNumber(maxIndex){\r\n    return Math.floor(Math.random() * (maxIndex)); \r\n}\r\n\r\n/***\r\n * Randomise the order of an array and return a new randomised array\r\n */\r\nfunction randomiseArray(anArray){\r\n    console.log('randomise Array function');\r\n    \r\n    const tempArray = [];\r\n    let tempIndex = 0;\r\n\r\n    while (anArray.length > 0){\r\n        let i = randonNumber(anArray.length)\r\n        tempArray[tempIndex] = anArray[i];\r\n        anArray.splice(i, 1);\r\n        tempIndex ++;\r\n    }\r\n\r\n    return tempArray;\r\n}\r\n\r\n/***\r\n * Returns a function that uses closure and scope to have access to the colorArray and index \r\n * values. The generateBackgroundColor is invoked in an IIFE in code above this means that \r\n * the index and colorArray will keep their state everytime they are invoked through the returned \r\n * function\r\n */\r\nfunction generateBackgroundColor(){\r\n\r\n    const colorArray = ['#0A9A8C', '#DD7B5E', '#4FB4C2', '#F4BB67', '#BA456C','#8265B4', '#A1C479', '#6579C7', '#6BAA6A'];\r\n    let index = 0;\r\n\r\n    return function(){\r\n\r\n        let colorReturn = colorArray[index];\r\n\r\n        if (index === 8){\r\n            index = 0\r\n        } else {\r\n            index ++;\r\n        }\r\n\r\n        return colorReturn;\r\n    }\r\n}\r\n\r\n\r\n/***\r\n * Sets up an event listener for the rest button, when clicked the\r\n * html in the result section is removed and the form is displayed\r\n * and the results section is hidden\r\n */\r\ndocument.querySelector('#reset').addEventListener('click', (event) => {\r\n    //remove elements from the tiles from the previous results grid\r\n    document.querySelector('#results-container').innerHTML = '';\r\n    toggleFormResults();\r\n});\r\n\r\n/***\r\n * Toggle between displaying the results and not show the form, or display the form\r\n * and not showing the results\r\n */\r\nfunction toggleFormResults(){\r\n    //hide the form\r\n    document.querySelector('#form-section').classList.toggle('display-hide');\r\n    document.querySelector('#form-section').classList.toggle('display-show');\r\n    \r\n    //display the results section\r\n    document.querySelector('#results-section').classList.toggle('display-hide');\r\n    document.querySelector('#results-section').classList.toggle('display-show');\r\n}\r\n\r\n//helper functions\r\n\r\nfunction cmToInches(size){\r\n    return size / 2.54; \r\n}\r\n\r\nfunction kgToPounds(size){\r\n    return size * 2.205; \r\n}\n\n//# sourceURL=webpack://dino/./src/js/app.js?");

/***/ }),

/***/ "./src/static/data/dino.json":
/*!***********************************!*\
  !*** ./src/static/data/dino.json ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Dinos\":[{\"species\":\"Triceratops\",\"weight\":13000,\"height\":114,\"diet\":\"herbavor\",\"where\":\"North America\",\"when\":\"Late Cretaceous\",\"fact\":\"First discovered in 1889 by Othniel Charles Marsh\"},{\"species\":\"Tyrannosaurus Rex\",\"weight\":11905,\"height\":144,\"diet\":\"carnivor\",\"where\":\"North America\",\"when\":\"Late Cretaceous\",\"fact\":\"The largest known skull measures in at 5 feet long.\"},{\"species\":\"Anklyosaurus\",\"weight\":10500,\"height\":55,\"diet\":\"herbavor\",\"where\":\"North America\",\"when\":\"Late Cretaceous\",\"fact\":\"Anklyosaurus survived for approximately 135 million years.\"},{\"species\":\"Brachiosaurus\",\"weight\":70000,\"height\":\"372\",\"diet\":\"herbavor\",\"where\":\"North America\",\"when\":\"Late Jurasic\",\"fact\":\"An asteroid was named 9954 Brachiosaurus in 1991.\"},{\"species\":\"Stegosaurus\",\"weight\":11600,\"height\":79,\"diet\":\"herbavor\",\"where\":\"North America, Europe, Asia\",\"when\":\"Late Jurasic to Early Cretaceous\",\"fact\":\"The Stegosaurus had between 17 and 22 seperate places and flat spines.\"},{\"species\":\"Elasmosaurus\",\"weight\":16000,\"height\":59,\"diet\":\"carnivor\",\"where\":\"North America\",\"when\":\"Late Cretaceous\",\"fact\":\"Elasmosaurus was a marine reptile first discovered in Kansas.\"},{\"species\":\"Pteranodon\",\"weight\":44,\"height\":20,\"diet\":\"carnivor\",\"where\":\"North America\",\"when\":\"Late Cretaceous\",\"fact\":\"Actually a flying reptile, the Pteranodon is not a dinosaur.\"},{\"species\":\"Pigeon\",\"weight\":0.5,\"height\":9,\"diet\":\"herbavor\",\"where\":\"World Wide\",\"when\":\"Holocene\",\"fact\":\"All birds are living dinosaurs.\"}]}');\n\n//# sourceURL=webpack://dino/./src/static/data/dino.json?");

/***/ }),

/***/ "./src/static/images/anklyosaurus.png":
/*!********************************************!*\
  !*** ./src/static/images/anklyosaurus.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccebdf9f14200b74a0e0.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/anklyosaurus.png?");

/***/ }),

/***/ "./src/static/images/brachiosaurus.png":
/*!*********************************************!*\
  !*** ./src/static/images/brachiosaurus.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9b4cb861371f4f8e36b5.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/brachiosaurus.png?");

/***/ }),

/***/ "./src/static/images/elasmosaurus.png":
/*!********************************************!*\
  !*** ./src/static/images/elasmosaurus.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e66447f91243d912e71.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/elasmosaurus.png?");

/***/ }),

/***/ "./src/static/images/human.png":
/*!*************************************!*\
  !*** ./src/static/images/human.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"26a24a4bfe14c2480f41.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/human.png?");

/***/ }),

/***/ "./src/static/images/pigeon.png":
/*!**************************************!*\
  !*** ./src/static/images/pigeon.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a6dbed90e01103b8629.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/pigeon.png?");

/***/ }),

/***/ "./src/static/images/pteranodon.png":
/*!******************************************!*\
  !*** ./src/static/images/pteranodon.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6f43897ba003fdae6ad1.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/pteranodon.png?");

/***/ }),

/***/ "./src/static/images/stegosaurus.png":
/*!*******************************************!*\
  !*** ./src/static/images/stegosaurus.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"552846c4ddcf71a22f77.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/stegosaurus.png?");

/***/ }),

/***/ "./src/static/images/tracks.png":
/*!**************************************!*\
  !*** ./src/static/images/tracks.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e5def92b715763acc0d.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/tracks.png?");

/***/ }),

/***/ "./src/static/images/triceratops.png":
/*!*******************************************!*\
  !*** ./src/static/images/triceratops.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"058d208d48ca28630433.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/triceratops.png?");

/***/ }),

/***/ "./src/static/images/tyrannosaurus-rex.png":
/*!*************************************************!*\
  !*** ./src/static/images/tyrannosaurus-rex.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"233513415b3a443450de.png\";\n\n//# sourceURL=webpack://dino/./src/static/images/tyrannosaurus-rex.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;