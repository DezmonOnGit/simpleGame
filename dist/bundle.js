/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_default_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/default.sass */ \"./src/sass/default.sass\");\n/* harmony import */ var _sass_default_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sass_default_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_game_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/game.sass */ \"./src/sass/game.sass\");\n/* harmony import */ var _sass_game_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_game_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/game */ \"./src/components/game.js\");\n\r\n\r\n\r\n\r\n\r\nconst mainGame = new _components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\nmainGame.createGame(300, 300);\r\nmainGame.start();\r\nmainGame.addBar();\r\n\r\n\r\nconsole.log(mainGame);\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/components/abstractClass.js":
/*!*****************************************!*\
  !*** ./src/components/abstractClass.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Abstract; });\nclass Abstract {\r\n    constructor() {\r\n\r\n    };\r\n\r\n    getRandom(min, max) {\r\n        if(typeof min === 'string') {\r\n            min = parseFloat(min);\r\n        }\r\n\r\n        if(typeof max === 'string') {\r\n            max = parseFloat(max);\r\n        }\r\n\r\n        let rand = min - 0.5 + Math.random() * (max - min + 1);\r\n        return Math.round(rand);\r\n    };\r\n\r\n    renderHTML(parent, child, position) {\r\n        parent.insertAdjacentHTML(position, child);\r\n\r\n        return {\r\n            parent: parent,\r\n            child: child,\r\n        };\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/abstractClass.js?");

/***/ }),

/***/ "./src/components/game.js":
/*!********************************!*\
  !*** ./src/components/game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _abstractClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstractClass */ \"./src/components/abstractClass.js\");\n/* harmony import */ var _gameBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameBar */ \"./src/components/gameBar.js\");\n\r\n\r\n\r\nclass Game extends _abstractClass__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\r\n    constructor () {\r\n        super();\r\n\r\n        this.workarea = document.getElementById('workarea');\r\n    }\r\n\r\n    createGame(fieldWidth, fieldHeight) {\r\n        let wrapper = `<div class=\"game\">${this.makeField(fieldWidth, fieldHeight)}</div>`;\r\n\r\n        this.renderHTML(this.workarea, wrapper, 'afterbegin');\r\n\r\n        this.wrapper = document.querySelector('.game');\r\n        this.field.node = document.querySelector('.game__field');\r\n    }\r\n\r\n    makeField(width, height) {\r\n        if(typeof width === 'number') {\r\n            width += 'px';\r\n        }\r\n\r\n        if(typeof height === 'number') {\r\n            height += 'px';\r\n        }\r\n\r\n        this.field = {\r\n            width: width || '500px',\r\n            height: height || '500px',\r\n        };\r\n\r\n        return `<div class=\"game__field\" style=\"width:${this.field.width}; height:${this.field.height};\"></div>`;\r\n    }\r\n\r\n    createGameItem(width, height, color) {\r\n        this.item = {\r\n            width: width || this.getRandom(20, 50) + 'px',\r\n            height: height || this.getRandom(20, 50) + 'px',\r\n            color: color || 'white',\r\n        };\r\n\r\n        this.item.offsetX = this.getRandom(0, (parseInt(this.field.width) - parseInt(this.item.width))) + 'px';\r\n        this.item.offsetY = this.getRandom(0, (parseInt(this.field.height) - parseInt(this.item.height))) + 'px';\r\n\r\n        let item = `<div class=\"game__item\" style=\"width:${this.item.width}; height:${this.item.height}; top:${this.item.offsetY}; left:${this.item.offsetX}; background-color:${this.item.color}\"></div>`\r\n\r\n        this.renderHTML(this.field.node, item, 'afterbegin');\r\n        this.item.node = document.querySelector('.game__item');\r\n    }\r\n\r\n    start() {\r\n        this.createGameItem();\r\n        this.itemOnClick();\r\n    }\r\n\r\n    itemOnClick() {\r\n        this.field.node.addEventListener('click', (evt) => {\r\n            if(evt.target.classList.contains('game__item')) {\r\n                this.item.node.remove();\r\n                this.item = {};\r\n\r\n                this.createGameItem();\r\n\r\n                if(typeof this.bar !== 'undefined') {\r\n                    this.bar.increaseCounter();\r\n                }\r\n            }\r\n        });\r\n    }\r\n\r\n    addBar() {\r\n        this.bar = new _gameBar__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n        this.bar.addGameBar();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/components/game.js?");

/***/ }),

/***/ "./src/components/gameBar.js":
/*!***********************************!*\
  !*** ./src/components/gameBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bar; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/components/game.js\");\n/* harmony import */ var _abstractClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstractClass */ \"./src/components/abstractClass.js\");\n\r\n\r\n\r\nclass Bar extends _abstractClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"]{\r\n\r\n    constructor (gameNode){\r\n        super();\r\n\r\n        if(typeof gameNode === 'undefined') {\r\n            gameNode = document.querySelector('.game');\r\n        }\r\n\r\n        this.gameNode = gameNode;\r\n    }\r\n\r\n    addGameBar() {\r\n        this.createWrapper();\r\n        this.createCounter();\r\n    }\r\n\r\n    createWrapper() {\r\n        let wrapper = `<div class=\"game__bar\"></div>`;\r\n\r\n        this.renderHTML(this.gameNode, wrapper, 'afterbegin');\r\n        this.node = document.querySelector('.game__bar');\r\n    }\r\n\r\n    createCounter(counter = 0) {\r\n\r\n        let points = `<div class=\"game__points\">${counter}</div>`;\r\n\r\n        this.renderHTML(this.node, points, 'afterbegin');\r\n\r\n        this.pointsNode = this.node.querySelector('.game__points');\r\n        this.points = counter;\r\n    }\r\n\r\n    resetCounter() {\r\n        this.pointsNode.innerHTML = 0;\r\n        this.points = 0;\r\n    }\r\n\r\n    increaseCounter(growth) {\r\n        if(typeof growth === 'undefined') {\r\n            growth = 1;\r\n        }\r\n\r\n        console.log(growth, this.points);\r\n        this.points += growth;\r\n\r\n        this.pointsNode.innerHTML = this.points;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/components/gameBar.js?");

/***/ }),

/***/ "./src/sass/default.sass":
/*!*******************************!*\
  !*** ./src/sass/default.sass ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/default.sass?");

/***/ }),

/***/ "./src/sass/game.sass":
/*!****************************!*\
  !*** ./src/sass/game.sass ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/sass/game.sass?");

/***/ })

/******/ });