exports.id = "components_ContainerBlock_js";
exports.ids = ["components_ContainerBlock_js"];
exports.modules = {

/***/ "./components/ContainerBlock.js":
/*!**************************************!*\
  !*** ./components/ContainerBlock.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ContainerBlock; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");

var _jsxFileName = "C:\\Users\\faysoil.bacari\\Desktop\\code du port\\components\\ContainerBlock.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function ContainerBlock(_ref) {
  let {
    children
  } = _ref,
      customMeta = _objectWithoutProperties(_ref, ["children"]);

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const meta = _objectSpread({
    title: "Faysoil Bacari - Developpeur, étudiant, Programmeur et Monteur",
    description: `Je suis un étudiant actuellement en BTS SIO dans le lycée Jacques Brel..`,
    image: "/avatar.png",
    type: "website"
  }, customMeta);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "robots",
        content: "follow, index"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        content: meta.description,
        name: "description"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:url",
        content: `https://yourwebsite.com${router.asPath}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "canonical",
        href: `https://yourwebsite.com${router.asPath}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:type",
        content: meta.type
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:site_name",
        content: "Faysoil Bacari"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:title",
        content: meta.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:description",
        content: meta.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:image",
        content: meta.image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), meta.date && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "article:published_time",
        content: meta.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "dark:bg-gray-800 w-full",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\faysoil.bacari\\Desktop\\code du port\\components\\Footer.js";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-[#F1F1F1] dark:bg-gray-900",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "h-0.5 w-full bg-white dark:bg-gray-700"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "\xA9 Faysoil Bacari. All Rights Reserved."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: ["D\xE9velopp\xE9 par", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "inline-block transform hover:scale-110 hover:-rotate-3 transition duration-300",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "hover:bg-red-500 rounded-md px-2 py-1  hover:text-gray-50",
                href: "https://www.linkedin.com/in/faysoil-bacari-345b58207/",
                children: "Faysoil Bacari"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 18,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "space-x-4 flex flex-row items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.instagram,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-instagram h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.twitter,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-twitter h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: _constants_data__WEBPACK_IMPORTED_MODULE_2__.default.socialLinks.linkedin,
            className: "text-base font-normal text-gray-600 dark:text-gray-300",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-linkedin h-5 w-5",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Navbar; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-themes */ "next-themes");
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @constants/data */ "./constants/data.js");

var _jsxFileName = "C:\\Users\\faysoil.bacari\\Desktop\\code du port\\components\\Navbar.js";





function Navbar() {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  console.log(router.asPath);
  const {
    theme,
    setTheme
  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
  const {
    0: mounted,
    1: setMounted
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setMounted(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex  md:flex-row justify-between items-center",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-col",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "font-semibold text-xl dark:text-gray-100",
              children: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              className: "text-base font-light text-gray-500 dark:text-gray-300",
              children: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.designation
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-x-8 hidden md:block",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/about",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["A propos", " ", router.asPath === "/about" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/certifications",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/certifications" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Certifications", router.asPath === "/certifications" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/projects",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/projects" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Projets", router.asPath === "/projects" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/experience",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Experiences", " ", router.asPath === "/experience" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
          href: "/contact",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            className: `text-base  ${router.asPath === "/contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
            children: ["Contact", router.asPath === "/contact" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              className: "bi bi-arrow-down inline-block h-3 w-3",
              viewBox: "0 0 16 16",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                fillRule: "evenodd",
                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "space-x-4 flex flex-row items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.instagram,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-instagram h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 173,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.twitter,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-twitter h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: _constants_data__WEBPACK_IMPORTED_MODULE_5__.default.socialLinks.linkedin,
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            className: "bi bi-linkedin h-5 w-5",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          "aria-label": "Toggle Dark Mode",
          type: "button",
          className: "w-10 h-10 p-3 rounded focus:outline-none",
          onClick: () => setTheme(theme === "dark" ? "light" : "dark"),
          children: mounted && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            fill: "currentColor",
            stroke: "currentColor",
            className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
            children: theme === "dark" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 229,
              columnNumber: 19
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 236,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "space-x-8 block md:hidden mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/experience",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Experience"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/contact",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Contact"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: "/certifications",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          className: "text-base font-normal text-gray-600 dark:text-gray-300",
          children: "Certifications"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./constants/data.js":
/*!***************************!*\
  !*** ./constants/data.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userData = {
  githubUsername: "Faysoil",
  name: "Faysoil Bacari",
  designation: "Developpeur étudiant",
  avatarUrl: "/avatar.png",
  email: "bacari.faysoil@gmail.com",
  phone: "+33 636124315",
  address: "Lyon, France.",
  certif: [{}],
  projects: [{
    title: "GSB BDD",
    link: "/gsb",
    imgUrl: "/tmk.jpg"
  }, {
    title: "EatIt.",
    link: "/eatit",
    imgUrl: "/placeholdertech.png"
  }, {
    title: "Eventio",
    link: "/eventio",
    imgUrl: "/eventio.jpg"
  }],
  veilletechno: [],
  certifications: [
    /*
    {
    title: "Suivie du cours sur la cybersécurité",
    imgUrl: "/secnum.png",
    },
    {
    title: "HTML.",
    imgUrl: "/html.jpg",
    },
    {
    title: "Python pour débutant.",
    imgUrl: "/python.png",
    },
    {
    title: "SQL.",
    imgUrl: "/sql.png",
    },
    {
    title: "Suivie du cours sur la cybersécurité",
    imgUrl: "/secnum.png",
    },
    {
    title: "HTML.",
    imgUrl: "/html.jpg",
    },
    {
    title: "Python pour débutant.",
    imgUrl: "/python.png",
    },
    {
    title: "SQL.",
    imgUrl: "/sql.png",
    },
    */
  ],
  about: {
    title: "Je suis un étudiant en informatique voulant se specialisé dans la création de site web ou d'applications",
    currentProject: "BTS Services Informatique aux Organisations (SIO)",
    currentProjectUrl: "https://www.onisep.fr/Ressources/Univers-Formation/Formations/Post-bac/bts-services-informatiques-aux-organisations-option-b-solutions-logicielles-et-applications-metiers"
  },
  experience: [{
    title: "Initiation a Javascript et NextJS",
    company: "Eventio",
    year: "2022",
    companyLink: "https://www.linkedin.com/company/eventiofr/",
    desc: "Apprentissage du langage de programmation Javascrpit et de la technologie NextJS dans le cadre d'un stage d'apprentissage en entreprise."
  }, {
    title: "Apprentissage C# et SQL",
    company: "Lycée Jacques Brel, Vénissieux.",
    year: "2021",
    companyLink: "https://cas.ent.auvergnerhonealpes.fr/login?selection=LYON-ATS_parent_eleve&service=https%3A%2F%2Flyc-jacques-brel.ent.auvergnerhonealpes.fr%2Fsg.do%3FPROC%3DIDENTIFICATION_FRONT&submit=Valider",
    desc: "Continuité de l'apprentissage de langages de progrmmation dans le cadre de mon BTS."
  }, {
    title: "Certifications et initiation cybersecurité",
    company: "Lycée Jacques Brel, Vénissieux.",
    year: "2021",
    companyLink: "https://cas.ent.auvergnerhonealpes.fr/login?selection=LYON-ATS_parent_eleve&service=https%3A%2F%2Flyc-jacques-brel.ent.auvergnerhonealpes.fr%2Fsg.do%3FPROC%3DIDENTIFICATION_FRONT&submit=Valider",
    desc: "Nous avons été initié à la cybersécurité, passer une certificationet avons une epreuve de BTS sur cette matiere."
  }, {
    title: "Apprentissage Wordpress, C++ et PHP.",
    company: "Lycée Jacques Brel, Vénissieux.",
    year: "2020-2021",
    companyLink: "https://cas.ent.auvergnerhonealpes.fr/login?selection=LYON-ATS_parent_eleve&service=https%3A%2F%2Flyc-jacques-brel.ent.auvergnerhonealpes.fr%2Fsg.do%3FPROC%3DIDENTIFICATION_FRONT&submit=Valider",
    desc: "J'ai appris de nombreux langages lors de ma 1ere année de BTS."
  }, {
    title: "Baccalaureat STI2D",
    company: "Lycée Frederic Fays, Villeurbanne..",
    year: "2020",
    companyLink: "https://lyc-frederic-fays.ent.auvergnerhonealpes.fr/",
    desc: "J'ai obtenu mon baccalauréat STI2D (SCIENCES ET TECHNOLOGIES DE L'INDUSTRIE ET DU DÉVELOPPEMENT DURABLE) option SPECIALITÉ SYSTÈME D'INFORMATION ET NUMÉRIQUE (SIN)."
  }, {
    title: "Apprentissage HTMl et CSS",
    company: "Lycée Frederic Fays, Villeurbanne.",
    year: "2017-2018",
    companyLink: "https://lyc-frederic-fays.ent.auvergnerhonealpes.fr/"
  }],
  resumeUrl: "https://drive.google.com/file/d/13DhUYsF4BQwHPjybQnSadpNNuKJQ3N6i/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/soisoiact3",
    linkedin: "https://www.linkedin.com/in/faysoil-bacari-345b58207/",
    github: "https://github.com/Faysoil",
    facebook: "https://www.facebook.com/faysoil.bacari.33/"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userData);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMvLi9jb21wb25lbnRzL0NvbnRhaW5lckJsb2NrLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbXBvbmVudHMvTmF2YmFyLmpzIiwid2VicGFjazovL25leHRqcy8uL2NvbnN0YW50cy9kYXRhLmpzIiwid2VicGFjazovL25leHRqcy9pZ25vcmVkfEM6XFxVc2Vyc1xcZmF5c29pbC5iYWNhcmlcXERlc2t0b3BcXGNvZGUgZHUgcG9ydFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbnRhaW5lckJsb2NrIiwiY2hpbGRyZW4iLCJjdXN0b21NZXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibWV0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInR5cGUiLCJhc1BhdGgiLCJkYXRlIiwiRm9vdGVyIiwidXNlckRhdGEiLCJOYXZiYXIiLCJjb25zb2xlIiwibG9nIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZVRoZW1lIiwibW91bnRlZCIsInNldE1vdW50ZWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIm5hbWUiLCJkZXNpZ25hdGlvbiIsImdpdGh1YlVzZXJuYW1lIiwiYXZhdGFyVXJsIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJjZXJ0aWYiLCJwcm9qZWN0cyIsImxpbmsiLCJpbWdVcmwiLCJ2ZWlsbGV0ZWNobm8iLCJjZXJ0aWZpY2F0aW9ucyIsImFib3V0IiwiY3VycmVudFByb2plY3QiLCJjdXJyZW50UHJvamVjdFVybCIsImV4cGVyaWVuY2UiLCJjb21wYW55IiwieWVhciIsImNvbXBhbnlMaW5rIiwiZGVzYyIsInJlc3VtZVVybCIsInNvY2lhbExpbmtzIiwiaW5zdGFncmFtIiwibGlua2VkaW4iLCJnaXRodWIiLCJmYWNlYm9vayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsY0FBVCxPQUFxRDtBQUFBLE1BQTdCO0FBQUVDO0FBQUYsR0FBNkI7QUFBQSxNQUFkQyxVQUFjOztBQUNsRSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUVBLFFBQU1DLElBQUk7QUFDUkMsU0FBSyxFQUFFLGdFQURDO0FBRVJDLGVBQVcsRUFBRywwRUFGTjtBQUdSQyxTQUFLLEVBQUUsYUFIQztBQUlSQyxRQUFJLEVBQUU7QUFKRSxLQUtMUCxVQUxLLENBQVY7O0FBT0Esc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFHLElBQUksQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFNLGVBQU8sRUFBRUQsSUFBSSxDQUFDRSxXQUFwQjtBQUFpQyxZQUFJLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBSUU7QUFDRSxnQkFBUSxFQUFDLFFBRFg7QUFFRSxlQUFPLEVBQUcsMEJBQXlCSixNQUFNLENBQUNPLE1BQU87QUFGbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBUUU7QUFDRSxXQUFHLEVBQUMsV0FETjtBQUVFLFlBQUksRUFBRywwQkFBeUJQLE1BQU0sQ0FBQ08sTUFBTztBQUZoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkYsZUFZRTtBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUVMLElBQUksQ0FBQ0k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGLGVBYUU7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsZUFBTyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FiRixlQWNFO0FBQU0sZ0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxlQUFPLEVBQUVKLElBQUksQ0FBQ0U7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBZUU7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxFQUFFRixJQUFJLENBQUNDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixlQWdCRTtBQUFNLGdCQUFRLEVBQUMsVUFBZjtBQUEwQixlQUFPLEVBQUVELElBQUksQ0FBQ0c7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCRixlQWlCRTtBQUFNLFlBQUksRUFBQyxjQUFYO0FBQTBCLGVBQU8sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJGLGVBa0JFO0FBQU0sWUFBSSxFQUFDLGVBQVg7QUFBMkIsZUFBTyxFQUFFSCxJQUFJLENBQUNDO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQkYsZUFtQkU7QUFBTSxZQUFJLEVBQUMscUJBQVg7QUFBaUMsZUFBTyxFQUFFRCxJQUFJLENBQUNFO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FuQkYsZUFvQkU7QUFBTSxZQUFJLEVBQUMsZUFBWDtBQUEyQixlQUFPLEVBQUVGLElBQUksQ0FBQ0c7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixFQXFCR0gsSUFBSSxDQUFDTSxJQUFMLGlCQUNDO0FBQU0sZ0JBQVEsRUFBQyx3QkFBZjtBQUF3QyxlQUFPLEVBQUVOLElBQUksQ0FBQ007QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQTBCRTtBQUFNLGVBQVMsRUFBQyx5QkFBaEI7QUFBQSw4QkFDRSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGtCQUFNVjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xERDtBQUNBO0FBRWUsU0FBU1csTUFBVCxHQUFrQjtBQUMvQixzQkFDRTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLHdDQUFmO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHVGQUFmO0FBQUEsZ0NBQ0U7QUFBQSxpQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFBLGlDQUVFO0FBQUEsMkRBRUU7QUFBSyx1QkFBUyxFQUFDLGdGQUFmO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLDJEQURaO0FBRUUsb0JBQUksRUFBQyx1REFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRixlQWtCRTtBQUFLLG1CQUFTLEVBQUMsc0NBQWY7QUFBQSxrQ0FDRTtBQUNFLGdCQUFJLEVBQUVDLDBFQURSO0FBRUUscUJBQVMsRUFBQyx3REFGWjtBQUFBLG1DQUlFO0FBQ0UsbUJBQUssRUFBQyw0QkFEUjtBQUVFLG1CQUFLLEVBQUMsSUFGUjtBQUdFLG9CQUFNLEVBQUMsSUFIVDtBQUlFLGtCQUFJLEVBQUMsY0FKUDtBQUtFLHVCQUFTLEVBQUMseUJBTFo7QUFNRSxxQkFBTyxFQUFDLFdBTlY7QUFBQSxxQ0FRRTtBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFnQkU7QUFDRSxnQkFBSSxFQUFFQSx3RUFEUjtBQUVFLHFCQUFTLEVBQUMsd0RBRlo7QUFBQSxtQ0FJRTtBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBSyxFQUFDLElBRlI7QUFHRSxvQkFBTSxFQUFDLElBSFQ7QUFJRSxrQkFBSSxFQUFDLGNBSlA7QUFLRSx1QkFBUyxFQUFDLHVCQUxaO0FBTUUscUJBQU8sRUFBQyxXQU5WO0FBQUEscUNBUUU7QUFBTSxpQkFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWhCRixlQStCRTtBQUNFLGdCQUFJLEVBQUVBLHlFQURSO0FBRUUscUJBQVMsRUFBQyx3REFGWjtBQUFBLG1DQUlFO0FBQ0UsbUJBQUssRUFBQyw0QkFEUjtBQUVFLG1CQUFLLEVBQUMsSUFGUjtBQUdFLG9CQUFNLEVBQUMsSUFIVDtBQUlFLGtCQUFJLEVBQUMsY0FKUDtBQUtFLHVCQUFTLEVBQUMsd0JBTFo7QUFNRSxxQkFBTyxFQUFDLFdBTlY7QUFBQSxxQ0FRRTtBQUFNLGlCQUFDLEVBQUM7QUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUVELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLE1BQVQsR0FBa0I7QUFDL0IsUUFBTVgsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBTSxDQUFDTyxNQUFuQjtBQUNBLFFBQU07QUFBRU8sU0FBRjtBQUFTQztBQUFULE1BQXNCQyxxREFBUSxFQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkRixjQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHdDQUFmO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUMsZ0RBQWY7QUFBQSw4QkFHRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQywwQ0FBZDtBQUFBLHdCQUNHUix5REFBYVc7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUlFO0FBQUcsdUJBQVMsRUFBQyx1REFBYjtBQUFBLHdCQUNHWCxnRUFBb0JZO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQWdCRTtBQUFLLGlCQUFTLEVBQUMsMkJBQWY7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxRQUFYO0FBQUEsaUNBQ0U7QUFDRSxxQkFBUyxFQUFHLGNBQ1Z0QixNQUFNLENBQUNPLE1BQVAsS0FBa0IsUUFBbEIsR0FDSSw0Q0FESixHQUVJLCtDQUNMLEVBTEg7QUFBQSxtQ0FPVyxHQVBYLEVBUUdQLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixRQUFsQixpQkFDQztBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBSyxFQUFDLElBRlI7QUFHRSxvQkFBTSxFQUFDLElBSFQ7QUFJRSxrQkFBSSxFQUFDLGNBSlA7QUFLRSx1QkFBUyxFQUFDLHVDQUxaO0FBTUUscUJBQU8sRUFBQyxXQU5WO0FBQUEscUNBUUU7QUFDRSx3QkFBUSxFQUFDLFNBRFg7QUFFRSxpQkFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQTJCRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBQyxpQkFBWDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRyxjQUNWUCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsaUJBQWxCLEdBQ0ksNENBREosR0FFSSwrQ0FDTCxFQUxIO0FBQUEseUNBUUdQLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixpQkFBbEIsaUJBQ0M7QUFDRSxtQkFBSyxFQUFDLDRCQURSO0FBRUUsbUJBQUssRUFBQyxJQUZSO0FBR0Usb0JBQU0sRUFBQyxJQUhUO0FBSUUsa0JBQUksRUFBQyxjQUpQO0FBS0UsdUJBQVMsRUFBQyx1Q0FMWjtBQU1FLHFCQUFPLEVBQUMsV0FOVjtBQUFBLHFDQVFFO0FBQ0Usd0JBQVEsRUFBQyxTQURYO0FBRUUsaUJBQUMsRUFBQztBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBM0JGLGVBcURFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLFdBQVg7QUFBQSxpQ0FDRTtBQUNFLHFCQUFTLEVBQUcsY0FDVlAsTUFBTSxDQUFDTyxNQUFQLEtBQWtCLFdBQWxCLEdBQ0ksNENBREosR0FFSSwrQ0FDTCxFQUxIO0FBQUEsa0NBUUdQLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixXQUFsQixpQkFDQztBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBSyxFQUFDLElBRlI7QUFHRSxvQkFBTSxFQUFDLElBSFQ7QUFJRSxrQkFBSSxFQUFDLGNBSlA7QUFLRSx1QkFBUyxFQUFDLHVDQUxaO0FBTUUscUJBQU8sRUFBQyxXQU5WO0FBQUEscUNBUUU7QUFDRSx3QkFBUSxFQUFDLFNBRFg7QUFFRSxpQkFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyREYsZUErRUUsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsYUFBWDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRyxjQUNWUCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsYUFBbEIsR0FDSSw0Q0FESixHQUVJLCtDQUNMLEVBTEg7QUFBQSxzQ0FPYyxHQVBkLEVBUUdQLE1BQU0sQ0FBQ08sTUFBUCxLQUFrQixhQUFsQixpQkFDQztBQUNFLG1CQUFLLEVBQUMsNEJBRFI7QUFFRSxtQkFBSyxFQUFDLElBRlI7QUFHRSxvQkFBTSxFQUFDLElBSFQ7QUFJRSxrQkFBSSxFQUFDLGNBSlA7QUFLRSx1QkFBUyxFQUFDLHVDQUxaO0FBTUUscUJBQU8sRUFBQyxXQU5WO0FBQUEscUNBUUU7QUFDRSx3QkFBUSxFQUFDLFNBRFg7QUFFRSxpQkFBQyxFQUFDO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkEvRUYsZUF5R0UsOERBQUMsa0RBQUQ7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFBLGlDQUNFO0FBQ0UscUJBQVMsRUFBRyxjQUNWUCxNQUFNLENBQUNPLE1BQVAsS0FBa0IsVUFBbEIsR0FDSSw0Q0FESixHQUVJLCtDQUNMLEVBTEg7QUFBQSxrQ0FRR1AsTUFBTSxDQUFDTyxNQUFQLEtBQWtCLFVBQWxCLGlCQUNDO0FBQ0UsbUJBQUssRUFBQyw0QkFEUjtBQUVFLG1CQUFLLEVBQUMsSUFGUjtBQUdFLG9CQUFNLEVBQUMsSUFIVDtBQUlFLGtCQUFJLEVBQUMsY0FKUDtBQUtFLHVCQUFTLEVBQUMsdUNBTFo7QUFNRSxxQkFBTyxFQUFDLFdBTlY7QUFBQSxxQ0FRRTtBQUNFLHdCQUFRLEVBQUMsU0FEWDtBQUVFLGlCQUFDLEVBQUM7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUFxSkU7QUFBSyxpQkFBUyxFQUFDLHNDQUFmO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUVHLDBFQURSO0FBRUUsbUJBQVMsRUFBQyx3REFGWjtBQUFBLGlDQUlFO0FBQ0UsaUJBQUssRUFBQyw0QkFEUjtBQUVFLGlCQUFLLEVBQUMsSUFGUjtBQUdFLGtCQUFNLEVBQUMsSUFIVDtBQUlFLGdCQUFJLEVBQUMsY0FKUDtBQUtFLHFCQUFTLEVBQUMseUJBTFo7QUFNRSxtQkFBTyxFQUFDLFdBTlY7QUFBQSxtQ0FRRTtBQUFNLGVBQUMsRUFBQztBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWdCRTtBQUNFLGNBQUksRUFBRUEsd0VBRFI7QUFFRSxtQkFBUyxFQUFDLHdEQUZaO0FBQUEsaUNBSUU7QUFDRSxpQkFBSyxFQUFDLDRCQURSO0FBRUUsaUJBQUssRUFBQyxJQUZSO0FBR0Usa0JBQU0sRUFBQyxJQUhUO0FBSUUsZ0JBQUksRUFBQyxjQUpQO0FBS0UscUJBQVMsRUFBQyx1QkFMWjtBQU1FLG1CQUFPLEVBQUMsV0FOVjtBQUFBLG1DQVFFO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWhCRixlQStCRTtBQUNFLGNBQUksRUFBRUEseUVBRFI7QUFFRSxtQkFBUyxFQUFDLHdEQUZaO0FBQUEsaUNBSUU7QUFDRSxpQkFBSyxFQUFDLDRCQURSO0FBRUUsaUJBQUssRUFBQyxJQUZSO0FBR0Usa0JBQU0sRUFBQyxJQUhUO0FBSUUsZ0JBQUksRUFBQyxjQUpQO0FBS0UscUJBQVMsRUFBQyx3QkFMWjtBQU1FLG1CQUFPLEVBQUMsV0FOVjtBQUFBLG1DQVFFO0FBQU0sZUFBQyxFQUFDO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQS9CRixlQThDRTtBQUNFLHdCQUFXLGtCQURiO0FBRUUsY0FBSSxFQUFDLFFBRlA7QUFHRSxtQkFBUyxFQUFDLDBDQUhaO0FBSUUsaUJBQU8sRUFBRSxNQUFNSyxRQUFRLENBQUNELEtBQUssS0FBSyxNQUFWLEdBQW1CLE9BQW5CLEdBQTZCLE1BQTlCLENBSnpCO0FBQUEsb0JBTUdHLE9BQU8saUJBQ047QUFDRSxpQkFBSyxFQUFDLDRCQURSO0FBRUUsbUJBQU8sRUFBQyxXQUZWO0FBR0UsZ0JBQUksRUFBQyxjQUhQO0FBSUUsa0JBQU0sRUFBQyxjQUpUO0FBS0UscUJBQVMsRUFBQyw4Q0FMWjtBQUFBLHNCQU9HSCxLQUFLLEtBQUssTUFBVixnQkFDQztBQUNFLDJCQUFhLEVBQUMsT0FEaEI7QUFFRSw0QkFBYyxFQUFDLE9BRmpCO0FBR0UseUJBQVcsRUFBRSxDQUhmO0FBSUUsZUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERCxnQkFRQztBQUNFLDJCQUFhLEVBQUMsT0FEaEI7QUFFRSw0QkFBYyxFQUFDLE9BRmpCO0FBR0UseUJBQVcsRUFBRSxDQUhmO0FBSUUsZUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FySkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFzT0U7QUFBSyxlQUFTLEVBQUMsZ0NBQWY7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFDLHdEQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyx3REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORixlQVdFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsd0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEYsZUFnQkUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFBLCtCQUNFO0FBQUcsbUJBQVMsRUFBQyx3REFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQkYsZUFxQkUsOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUMsaUJBQVg7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsd0RBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRPRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9RRCxDOzs7Ozs7Ozs7Ozs7QUNwUkQsTUFBTUosUUFBUSxHQUFHO0FBQ2ZhLGdCQUFjLEVBQUUsU0FERDtBQUVmRixNQUFJLEVBQUUsZ0JBRlM7QUFHZkMsYUFBVyxFQUFFLHNCQUhFO0FBSWZFLFdBQVMsRUFBRSxhQUpJO0FBS2ZDLE9BQUssRUFBRSwwQkFMUTtBQU1mQyxPQUFLLEVBQUUsZUFOUTtBQU9mQyxTQUFPLEVBQUUsZUFQTTtBQVNmQyxRQUFNLEVBQUMsQ0FBQyxFQUFELENBVFE7QUFZZkMsVUFBUSxFQUFFLENBRVI7QUFFRTFCLFNBQUssRUFBRSxTQUZUO0FBR0UyQixRQUFJLEVBQUUsTUFIUjtBQUlFQyxVQUFNLEVBQUU7QUFKVixHQUZRLEVBVVI7QUFDRTVCLFNBQUssRUFBRSxRQURUO0FBRUUyQixRQUFJLEVBQUUsUUFGUjtBQUdFQyxVQUFNLEVBQUU7QUFIVixHQVZRLEVBZ0JSO0FBQ0U1QixTQUFLLEVBQUUsU0FEVDtBQUVFMkIsUUFBSSxFQUFFLFVBRlI7QUFHRUMsVUFBTSxFQUFFO0FBSFYsR0FoQlEsQ0FaSztBQW1DZkMsY0FBWSxFQUFHLEVBbkNBO0FBeUNmQyxnQkFBYyxFQUFFO0FBQUM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNrQixHQXpDRDtBQWdGZkMsT0FBSyxFQUFFO0FBQ0wvQixTQUFLLEVBQ0gsMEdBRkc7QUFNTGdDLGtCQUFjLEVBQUUsbURBTlg7QUFPTEMscUJBQWlCLEVBQUU7QUFQZCxHQWhGUTtBQXlGZkMsWUFBVSxFQUFFLENBQ1Y7QUFDRWxDLFNBQUssRUFBRSxtQ0FEVDtBQUVFbUMsV0FBTyxFQUFFLFNBRlg7QUFHRUMsUUFBSSxFQUFFLE1BSFI7QUFJRUMsZUFBVyxFQUFFLDZDQUpmO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBRFUsRUFTVjtBQUNFdEMsU0FBSyxFQUFFLHlCQURUO0FBRUVtQyxXQUFPLEVBQUUsaUNBRlg7QUFHRUMsUUFBSSxFQUFFLE1BSFI7QUFJRUMsZUFBVyxFQUFFLG1NQUpmO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBVFUsRUFnQlY7QUFDRXRDLFNBQUssRUFBRSw0Q0FEVDtBQUVFbUMsV0FBTyxFQUFFLGlDQUZYO0FBR0VDLFFBQUksRUFBRSxNQUhSO0FBSUVDLGVBQVcsRUFBRSxtTUFKZjtBQUtFQyxRQUFJLEVBQUU7QUFMUixHQWhCVSxFQXVCVjtBQUNFdEMsU0FBSyxFQUFFLHNDQURUO0FBRUVtQyxXQUFPLEVBQUUsaUNBRlg7QUFHRUMsUUFBSSxFQUFFLFdBSFI7QUFJRUMsZUFBVyxFQUFFLG1NQUpmO0FBS0VDLFFBQUksRUFBRTtBQUxSLEdBdkJVLEVBOEJWO0FBQ0V0QyxTQUFLLEVBQUUsb0JBRFQ7QUFFRW1DLFdBQU8sRUFBRSxxQ0FGWDtBQUdFQyxRQUFJLEVBQUUsTUFIUjtBQUlFQyxlQUFXLEVBQUUsc0RBSmY7QUFLRUMsUUFBSSxFQUFFO0FBTFIsR0E5QlUsRUFxQ1Y7QUFDRXRDLFNBQUssRUFBRSwyQkFEVDtBQUVFbUMsV0FBTyxFQUFFLG9DQUZYO0FBR0VDLFFBQUksRUFBRSxXQUhSO0FBSUVDLGVBQVcsRUFBRTtBQUpmLEdBckNVLENBekZHO0FBdUlmRSxXQUFTLEVBQ1Asb0ZBeElhO0FBeUlmQyxhQUFXLEVBQUU7QUFDWEMsYUFBUyxFQUFFLGtDQURBO0FBRVhDLFlBQVEsRUFBRSx1REFGQztBQUdYQyxVQUFNLEVBQUUsNEJBSEc7QUFJWEMsWUFBUSxFQUFFO0FBSkM7QUF6SUUsQ0FBakI7QUFpSkEsK0RBQWVyQyxRQUFmLEU7Ozs7Ozs7Ozs7QUNqSkEsZSIsImZpbGUiOiJjb21wb25lbnRzX0NvbnRhaW5lckJsb2NrX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFpbmVyQmxvY2soeyBjaGlsZHJlbiwgLi4uY3VzdG9tTWV0YSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IG1ldGEgPSB7XG4gICAgdGl0bGU6IFwiRmF5c29pbCBCYWNhcmkgLSBEZXZlbG9wcGV1ciwgw6l0dWRpYW50LCBQcm9ncmFtbWV1ciBldCBNb250ZXVyXCIsXG4gICAgZGVzY3JpcHRpb246IGBKZSBzdWlzIHVuIMOpdHVkaWFudCBhY3R1ZWxsZW1lbnQgZW4gQlRTIFNJTyBkYW5zIGxlIGx5Y8OpZSBKYWNxdWVzIEJyZWwuLmAsXG4gICAgaW1hZ2U6IFwiL2F2YXRhci5wbmdcIixcbiAgICB0eXBlOiBcIndlYnNpdGVcIixcbiAgICAuLi5jdXN0b21NZXRhLFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnttZXRhLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiZm9sbG93LCBpbmRleFwiIC8+XG4gICAgICAgIDxtZXRhIGNvbnRlbnQ9e21ldGEuZGVzY3JpcHRpb259IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL3lvdXJ3ZWJzaXRlLmNvbSR7cm91dGVyLmFzUGF0aH1gfVxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImNhbm9uaWNhbFwiXG4gICAgICAgICAgaHJlZj17YGh0dHBzOi8veW91cndlYnNpdGUuY29tJHtyb3V0ZXIuYXNQYXRofWB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9e21ldGEudHlwZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PVwiRmF5c29pbCBCYWNhcmlcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXttZXRhLmltYWdlfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e21ldGEudGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17bWV0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6aW1hZ2VcIiBjb250ZW50PXttZXRhLmltYWdlfSAvPlxuICAgICAgICB7bWV0YS5kYXRlICYmIChcbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cImFydGljbGU6cHVibGlzaGVkX3RpbWVcIiBjb250ZW50PXttZXRhLmRhdGV9IC8+XG4gICAgICAgICl9XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJkYXJrOmJnLWdyYXktODAwIHctZnVsbFwiPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlckRhdGEgZnJvbSBcIkBjb25zdGFudHMvZGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bI0YxRjFGMV0gZGFyazpiZy1ncmF5LTkwMFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgIG14LWF1dG8gcHgtNCBweS0xMCBtZDpweS0yMFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMC41IHctZnVsbCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktNzAwXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBzcGFjZS15LTQgbWQ6c3BhY2UteS0wIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtZDppdGVtcy1jZW50ZXIgbXQtOFwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD4mY29weTsgRmF5c29pbCBCYWNhcmkuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7LyogU3VwcG9ydCBtZSBieSBrZWVwaW5nIHRoaXMgaW4gdGhlIGZvb3RlciwgcGxlYXNlLiA6KSAqL31cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBEw6l2ZWxvcHDDqSBwYXJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2sgdHJhbnNmb3JtIGhvdmVyOnNjYWxlLTExMCBob3Zlcjotcm90YXRlLTMgdHJhbnNpdGlvbiBkdXJhdGlvbi0zMDBcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXI6YmctcmVkLTUwMCByb3VuZGVkLW1kIHB4LTIgcHktMSAgaG92ZXI6dGV4dC1ncmF5LTUwXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZmF5c29pbC1iYWNhcmktMzQ1YjU4MjA3L1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgRmF5c29pbCBCYWNhcmlcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy5pbnN0YWdyYW19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktaW5zdGFncmFtIGgtNSB3LTVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk04IDBDNS44MjkgMCA1LjU1Ni4wMSA0LjcwMy4wNDggMy44NS4wODggMy4yNjkuMjIyIDIuNzYuNDJhMy45MTcgMy45MTcgMCAwIDAtMS40MTcuOTIzQTMuOTI3IDMuOTI3IDAgMCAwIC40MiAyLjc2Qy4yMjIgMy4yNjguMDg3IDMuODUuMDQ4IDQuNy4wMSA1LjU1NSAwIDUuODI3IDAgOC4wMDFjMCAyLjE3Mi4wMSAyLjQ0NC4wNDggMy4yOTcuMDQuODUyLjE3NCAxLjQzMy4zNzIgMS45NDIuMjA1LjUyNi40NzguOTcyLjkyMyAxLjQxNy40NDQuNDQ1Ljg5LjcxOSAxLjQxNi45MjMuNTEuMTk4IDEuMDkuMzMzIDEuOTQyLjM3MkM1LjU1NSAxNS45OSA1LjgyNyAxNiA4IDE2czIuNDQ0LS4wMSAzLjI5OC0uMDQ4Yy44NTEtLjA0IDEuNDM0LS4xNzQgMS45NDMtLjM3MmEzLjkxNiAzLjkxNiAwIDAgMCAxLjQxNi0uOTIzYy40NDUtLjQ0NS43MTgtLjg5MS45MjMtMS40MTcuMTk3LS41MDkuMzMyLTEuMDkuMzcyLTEuOTQyQzE1Ljk5IDEwLjQ0NSAxNiAxMC4xNzMgMTYgOHMtLjAxLTIuNDQ1LS4wNDgtMy4yOTljLS4wNC0uODUxLS4xNzUtMS40MzMtLjM3Mi0xLjk0MWEzLjkyNiAzLjkyNiAwIDAgMC0uOTIzLTEuNDE3QTMuOTExIDMuOTExIDAgMCAwIDEzLjI0LjQyYy0uNTEtLjE5OC0xLjA5Mi0uMzMzLTEuOTQzLS4zNzJDMTAuNDQzLjAxIDEwLjE3MiAwIDcuOTk4IDBoLjAwM3ptLS43MTcgMS40NDJoLjcxOGMyLjEzNiAwIDIuMzg5LjAwNyAzLjIzMi4wNDYuNzguMDM1IDEuMjA0LjE2NiAxLjQ4Ni4yNzUuMzczLjE0NS42NC4zMTkuOTIuNTk5LjI4LjI4LjQ1My41NDYuNTk4LjkyLjExLjI4MS4yNC43MDUuMjc1IDEuNDg1LjAzOS44NDMuMDQ3IDEuMDk2LjA0NyAzLjIzMXMtLjAwOCAyLjM4OS0uMDQ3IDMuMjMyYy0uMDM1Ljc4LS4xNjYgMS4yMDMtLjI3NSAxLjQ4NWEyLjQ3IDIuNDcgMCAwIDEtLjU5OS45MTljLS4yOC4yOC0uNTQ2LjQ1My0uOTIuNTk4LS4yOC4xMS0uNzA0LjI0LTEuNDg1LjI3Ni0uODQzLjAzOC0xLjA5Ni4wNDctMy4yMzIuMDQ3cy0yLjM5LS4wMDktMy4yMzMtLjA0N2MtLjc4LS4wMzYtMS4yMDMtLjE2Ni0xLjQ4NS0uMjc2YTIuNDc4IDIuNDc4IDAgMCAxLS45Mi0uNTk4IDIuNDggMi40OCAwIDAgMS0uNi0uOTJjLS4xMDktLjI4MS0uMjQtLjcwNS0uMjc1LTEuNDg1LS4wMzgtLjg0My0uMDQ2LTEuMDk2LS4wNDYtMy4yMzMgMC0yLjEzNi4wMDgtMi4zODguMDQ2LTMuMjMxLjAzNi0uNzguMTY2LTEuMjA0LjI3Ni0xLjQ4Ni4xNDUtLjM3My4zMTktLjY0LjU5OS0uOTIuMjgtLjI4LjU0Ni0uNDUzLjkyLS41OTguMjgyLS4xMS43MDUtLjI0IDEuNDg1LS4yNzYuNzM4LS4wMzQgMS4wMjQtLjA0NCAyLjUxNS0uMDQ1di4wMDJ6bTQuOTg4IDEuMzI4YS45Ni45NiAwIDEgMCAwIDEuOTIuOTYuOTYgMCAwIDAgMC0xLjkyem0tNC4yNyAxLjEyMmE0LjEwOSA0LjEwOSAwIDEgMCAwIDguMjE3IDQuMTA5IDQuMTA5IDAgMCAwIDAtOC4yMTd6bTAgMS40NDFhMi42NjcgMi42NjcgMCAxIDEgMCA1LjMzNCAyLjY2NyAyLjY2NyAwIDAgMSAwLTUuMzM0elwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MudHdpdHRlcn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS10d2l0dGVyIGgtNSB3LTVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk01LjAyNiAxNWM2LjAzOCAwIDkuMzQxLTUuMDAzIDkuMzQxLTkuMzM0IDAtLjE0IDAtLjI4Mi0uMDA2LS40MjJBNi42ODUgNi42ODUgMCAwIDAgMTYgMy41NDJhNi42NTggNi42NTggMCAwIDEtMS44ODkuNTE4IDMuMzAxIDMuMzAxIDAgMCAwIDEuNDQ3LTEuODE3IDYuNTMzIDYuNTMzIDAgMCAxLTIuMDg3Ljc5M0EzLjI4NiAzLjI4NiAwIDAgMCA3Ljg3NSA2LjAzYTkuMzI1IDkuMzI1IDAgMCAxLTYuNzY3LTMuNDI5IDMuMjg5IDMuMjg5IDAgMCAwIDEuMDE4IDQuMzgyQTMuMzIzIDMuMzIzIDAgMCAxIC42NCA2LjU3NXYuMDQ1YTMuMjg4IDMuMjg4IDAgMCAwIDIuNjMyIDMuMjE4IDMuMjAzIDMuMjAzIDAgMCAxLS44NjUuMTE1IDMuMjMgMy4yMyAwIDAgMS0uNjE0LS4wNTcgMy4yODMgMy4yODMgMCAwIDAgMy4wNjcgMi4yNzdBNi41ODggNi41ODggMCAwIDEgLjc4IDEzLjU4YTYuMzIgNi4zMiAwIDAgMS0uNzgtLjA0NUE5LjM0NCA5LjM0NCAwIDAgMCA1LjAyNiAxNXpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmxpbmtlZGlufVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWxpbmtlZGluIGgtNSB3LTVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0wIDEuMTQ2QzAgLjUxMy41MjYgMCAxLjE3NSAwaDEzLjY1QzE1LjQ3NCAwIDE2IC41MTMgMTYgMS4xNDZ2MTMuNzA4YzAgLjYzMy0uNTI2IDEuMTQ2LTEuMTc1IDEuMTQ2SDEuMTc1Qy41MjYgMTYgMCAxNS40ODcgMCAxNC44NTRWMS4xNDZ6bTQuOTQzIDEyLjI0OFY2LjE2OUgyLjU0MnY3LjIyNWgyLjQwMXptLTEuMi04LjIxMmMuODM3IDAgMS4zNTgtLjU1NCAxLjM1OC0xLjI0OC0uMDE1LS43MDktLjUyLTEuMjQ4LTEuMzQyLTEuMjQ4LS44MjIgMC0xLjM1OS41NC0xLjM1OSAxLjI0OCAwIC42OTQuNTIxIDEuMjQ4IDEuMzI3IDEuMjQ4aC4wMTZ6bTQuOTA4IDguMjEyVjkuMzU5YzAtLjIxNi4wMTYtLjQzMi4wOC0uNTg2LjE3My0uNDMxLjU2OC0uODc4IDEuMjMyLS44NzguODY5IDAgMS4yMTYuNjYyIDEuMjE2IDEuNjM0djMuODY1aDIuNDAxVjkuMjVjMC0yLjIyLTEuMTg0LTMuMjUyLTIuNzY0LTMuMjUyLTEuMjc0IDAtMS44NDUuNy0yLjE2NSAxLjE5M3YuMDI1aC0uMDE2YTUuNTQgNS41NCAwIDAgMSAuMDE2LS4wMjVWNi4xNjloLTIuNGMuMDMuNjc4IDAgNy4yMjUgMCA3LjIyNWgyLjR6XCIgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwibmV4dC10aGVtZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZXJEYXRhIGZyb20gXCJAY29uc3RhbnRzL2RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc29sZS5sb2cocm91dGVyLmFzUGF0aCk7XG4gIGNvbnN0IHsgdGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbbW91bnRlZCwgc2V0TW91bnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNb3VudGVkKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTZ4bCAgbXgtYXV0byBweC00IHB5LTEwIG1kOnB5LTIwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIG1kOmZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgey8qIExvZ28gLyBIb21lIC8gVGV4dCAqL31cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgZGFyazp0ZXh0LWdyYXktMTAwXCI+XG4gICAgICAgICAgICAgICAge3VzZXJEYXRhLm5hbWV9XG4gICAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICAgICAge3VzZXJEYXRhLmRlc2lnbmF0aW9ufVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXgtOCBoaWRkZW4gbWQ6YmxvY2tcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvYWJvdXRcIlxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEEgcHJvcG9ze1wiIFwifVxuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvYWJvdXRcIiAmJiAoXG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NlcnRpZmljYXRpb25zXCI+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWJhc2UgICR7XG4gICAgICAgICAgICAgICAgcm91dGVyLmFzUGF0aCA9PT0gXCIvY2VydGlmaWNhdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgPyBcInRleHQtZ3JheS04MDAgZm9udC1ib2xkIGRhcms6dGV4dC1ncmF5LTQwMFwiXG4gICAgICAgICAgICAgICAgICA6IFwidGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDAgZm9udC1ub3JtYWwgXCJcbiAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENlcnRpZmljYXRpb25zXG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9jZXJ0aWZpY2F0aW9uc1wiICYmIChcbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1hcnJvdy1kb3duIGlubGluZS1ibG9jayBoLTMgdy0zXCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMTZcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNOCAxYS41LjUgMCAwIDEgLjUuNXYxMS43OTNsMy4xNDYtMy4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YxLjVBLjUuNSAwIDAgMSA4IDF6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9wcm9qZWN0c1wiXG4gICAgICAgICAgICAgICAgICA/IFwidGV4dC1ncmF5LTgwMCBmb250LWJvbGQgZGFyazp0ZXh0LWdyYXktNDAwXCJcbiAgICAgICAgICAgICAgICAgIDogXCJ0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMCBmb250LW5vcm1hbCBcIlxuICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUHJvamV0c1xuICAgICAgICAgICAgICB7cm91dGVyLmFzUGF0aCA9PT0gXCIvcHJvamVjdHNcIiAmJiAoXG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2V4cGVyaWVuY2VcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9leHBlcmllbmNlXCJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBFeHBlcmllbmNlc3tcIiBcIn1cbiAgICAgICAgICAgICAge3JvdXRlci5hc1BhdGggPT09IFwiL2V4cGVyaWVuY2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktYXJyb3ctZG93biBpbmxpbmUtYmxvY2sgaC0zIHctM1wiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE2IDE2XCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTggMWEuNS41IDAgMCAxIC41LjV2MTEuNzkzbDMuMTQ2LTMuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTQgNGEuNS41IDAgMCAxLS43MDggMGwtNC00YS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMy4yOTNWMS41QS41LjUgMCAwIDEgOCAxelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtYmFzZSAgJHtcbiAgICAgICAgICAgICAgICByb3V0ZXIuYXNQYXRoID09PSBcIi9jb250YWN0XCJcbiAgICAgICAgICAgICAgICAgID8gXCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZCBkYXJrOnRleHQtZ3JheS00MDBcIlxuICAgICAgICAgICAgICAgICAgOiBcInRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwIGZvbnQtbm9ybWFsIFwiXG4gICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIHtyb3V0ZXIuYXNQYXRoID09PSBcIi9jb250YWN0XCIgJiYgKFxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWFycm93LWRvd24gaW5saW5lLWJsb2NrIGgtMyB3LTNcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk04IDFhLjUuNSAwIDAgMSAuNS41djExLjc5M2wzLjE0Ni0zLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTMuMjkzVjEuNUEuNS41IDAgMCAxIDggMXpcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC00IGZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e3VzZXJEYXRhLnNvY2lhbExpbmtzLmluc3RhZ3JhbX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNlwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE2XCJcbiAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJpIGJpLWluc3RhZ3JhbSBoLTUgdy01XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNOCAwQzUuODI5IDAgNS41NTYuMDEgNC43MDMuMDQ4IDMuODUuMDg4IDMuMjY5LjIyMiAyLjc2LjQyYTMuOTE3IDMuOTE3IDAgMCAwLTEuNDE3LjkyM0EzLjkyNyAzLjkyNyAwIDAgMCAuNDIgMi43NkMuMjIyIDMuMjY4LjA4NyAzLjg1LjA0OCA0LjcuMDEgNS41NTUgMCA1LjgyNyAwIDguMDAxYzAgMi4xNzIuMDEgMi40NDQuMDQ4IDMuMjk3LjA0Ljg1Mi4xNzQgMS40MzMuMzcyIDEuOTQyLjIwNS41MjYuNDc4Ljk3Mi45MjMgMS40MTcuNDQ0LjQ0NS44OS43MTkgMS40MTYuOTIzLjUxLjE5OCAxLjA5LjMzMyAxLjk0Mi4zNzJDNS41NTUgMTUuOTkgNS44MjcgMTYgOCAxNnMyLjQ0NC0uMDEgMy4yOTgtLjA0OGMuODUxLS4wNCAxLjQzNC0uMTc0IDEuOTQzLS4zNzJhMy45MTYgMy45MTYgMCAwIDAgMS40MTYtLjkyM2MuNDQ1LS40NDUuNzE4LS44OTEuOTIzLTEuNDE3LjE5Ny0uNTA5LjMzMi0xLjA5LjM3Mi0xLjk0MkMxNS45OSAxMC40NDUgMTYgMTAuMTczIDE2IDhzLS4wMS0yLjQ0NS0uMDQ4LTMuMjk5Yy0uMDQtLjg1MS0uMTc1LTEuNDMzLS4zNzItMS45NDFhMy45MjYgMy45MjYgMCAwIDAtLjkyMy0xLjQxN0EzLjkxMSAzLjkxMSAwIDAgMCAxMy4yNC40MmMtLjUxLS4xOTgtMS4wOTItLjMzMy0xLjk0My0uMzcyQzEwLjQ0My4wMSAxMC4xNzIgMCA3Ljk5OCAwaC4wMDN6bS0uNzE3IDEuNDQyaC43MThjMi4xMzYgMCAyLjM4OS4wMDcgMy4yMzIuMDQ2Ljc4LjAzNSAxLjIwNC4xNjYgMS40ODYuMjc1LjM3My4xNDUuNjQuMzE5LjkyLjU5OS4yOC4yOC40NTMuNTQ2LjU5OC45Mi4xMS4yODEuMjQuNzA1LjI3NSAxLjQ4NS4wMzkuODQzLjA0NyAxLjA5Ni4wNDcgMy4yMzFzLS4wMDggMi4zODktLjA0NyAzLjIzMmMtLjAzNS43OC0uMTY2IDEuMjAzLS4yNzUgMS40ODVhMi40NyAyLjQ3IDAgMCAxLS41OTkuOTE5Yy0uMjguMjgtLjU0Ni40NTMtLjkyLjU5OC0uMjguMTEtLjcwNC4yNC0xLjQ4NS4yNzYtLjg0My4wMzgtMS4wOTYuMDQ3LTMuMjMyLjA0N3MtMi4zOS0uMDA5LTMuMjMzLS4wNDdjLS43OC0uMDM2LTEuMjAzLS4xNjYtMS40ODUtLjI3NmEyLjQ3OCAyLjQ3OCAwIDAgMS0uOTItLjU5OCAyLjQ4IDIuNDggMCAwIDEtLjYtLjkyYy0uMTA5LS4yODEtLjI0LS43MDUtLjI3NS0xLjQ4NS0uMDM4LS44NDMtLjA0Ni0xLjA5Ni0uMDQ2LTMuMjMzIDAtMi4xMzYuMDA4LTIuMzg4LjA0Ni0zLjIzMS4wMzYtLjc4LjE2Ni0xLjIwNC4yNzYtMS40ODYuMTQ1LS4zNzMuMzE5LS42NC41OTktLjkyLjI4LS4yOC41NDYtLjQ1My45Mi0uNTk4LjI4Mi0uMTEuNzA1LS4yNCAxLjQ4NS0uMjc2LjczOC0uMDM0IDEuMDI0LS4wNDQgMi41MTUtLjA0NXYuMDAyem00Ljk4OCAxLjMyOGEuOTYuOTYgMCAxIDAgMCAxLjkyLjk2Ljk2IDAgMCAwIDAtMS45MnptLTQuMjcgMS4xMjJhNC4xMDkgNC4xMDkgMCAxIDAgMCA4LjIxNyA0LjEwOSA0LjEwOSAwIDAgMCAwLTguMjE3em0wIDEuNDQxYTIuNjY3IDIuNjY3IDAgMSAxIDAgNS4zMzQgMi42NjcgMi42NjcgMCAwIDEgMC01LjMzNHpcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPXt1c2VyRGF0YS5zb2NpYWxMaW5rcy50d2l0dGVyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE2XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmkgYmktdHdpdHRlciBoLTUgdy01XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNS4wMjYgMTVjNi4wMzggMCA5LjM0MS01LjAwMyA5LjM0MS05LjMzNCAwLS4xNCAwLS4yODItLjAwNi0uNDIyQTYuNjg1IDYuNjg1IDAgMCAwIDE2IDMuNTQyYTYuNjU4IDYuNjU4IDAgMCAxLTEuODg5LjUxOCAzLjMwMSAzLjMwMSAwIDAgMCAxLjQ0Ny0xLjgxNyA2LjUzMyA2LjUzMyAwIDAgMS0yLjA4Ny43OTNBMy4yODYgMy4yODYgMCAwIDAgNy44NzUgNi4wM2E5LjMyNSA5LjMyNSAwIDAgMS02Ljc2Ny0zLjQyOSAzLjI4OSAzLjI4OSAwIDAgMCAxLjAxOCA0LjM4MkEzLjMyMyAzLjMyMyAwIDAgMSAuNjQgNi41NzV2LjA0NWEzLjI4OCAzLjI4OCAwIDAgMCAyLjYzMiAzLjIxOCAzLjIwMyAzLjIwMyAwIDAgMS0uODY1LjExNSAzLjIzIDMuMjMgMCAwIDEtLjYxNC0uMDU3IDMuMjgzIDMuMjgzIDAgMCAwIDMuMDY3IDIuMjc3QTYuNTg4IDYuNTg4IDAgMCAxIC43OCAxMy41OGE2LjMyIDYuMzIgMCAwIDEtLjc4LS4wNDVBOS4zNDQgOS4zNDQgMCAwIDAgNS4wMjYgMTV6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17dXNlckRhdGEuc29jaWFsTGlua3MubGlua2VkaW59XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1ub3JtYWwgdGV4dC1ncmF5LTYwMCBkYXJrOnRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTZcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNlwiXG4gICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiaSBiaS1saW5rZWRpbiBoLTUgdy01XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNiAxNlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMCAxLjE0NkMwIC41MTMuNTI2IDAgMS4xNzUgMGgxMy42NUMxNS40NzQgMCAxNiAuNTEzIDE2IDEuMTQ2djEzLjcwOGMwIC42MzMtLjUyNiAxLjE0Ni0xLjE3NSAxLjE0NkgxLjE3NUMuNTI2IDE2IDAgMTUuNDg3IDAgMTQuODU0VjEuMTQ2em00Ljk0MyAxMi4yNDhWNi4xNjlIMi41NDJ2Ny4yMjVoMi40MDF6bS0xLjItOC4yMTJjLjgzNyAwIDEuMzU4LS41NTQgMS4zNTgtMS4yNDgtLjAxNS0uNzA5LS41Mi0xLjI0OC0xLjM0Mi0xLjI0OC0uODIyIDAtMS4zNTkuNTQtMS4zNTkgMS4yNDggMCAuNjk0LjUyMSAxLjI0OCAxLjMyNyAxLjI0OGguMDE2em00LjkwOCA4LjIxMlY5LjM1OWMwLS4yMTYuMDE2LS40MzIuMDgtLjU4Ni4xNzMtLjQzMS41NjgtLjg3OCAxLjIzMi0uODc4Ljg2OSAwIDEuMjE2LjY2MiAxLjIxNiAxLjYzNHYzLjg2NWgyLjQwMVY5LjI1YzAtMi4yMi0xLjE4NC0zLjI1Mi0yLjc2NC0zLjI1Mi0xLjI3NCAwLTEuODQ1LjctMi4xNjUgMS4xOTN2LjAyNWgtLjAxNmE1LjU0IDUuNTQgMCAwIDEgLjAxNi0uMDI1VjYuMTY5aC0yLjRjLjAzLjY3OCAwIDcuMjI1IDAgNy4yMjVoMi40elwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBEYXJrIE1vZGVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwIGgtMTAgcC0zIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRoZW1lKHRoZW1lID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bW91bnRlZCAmJiAoXG4gICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNCBoLTQgdGV4dC15ZWxsb3ctNTAwIGRhcms6dGV4dC15ZWxsb3ctNTAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyAoXG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMTIgM3YxbTAgMTZ2MW05LTloLTFNNCAxMkgzbTE1LjM2NCA2LjM2NGwtLjcwNy0uNzA3TTYuMzQzIDYuMzQzbC0uNzA3LS43MDdtMTIuNzI4IDBsLS43MDcuNzA3TTYuMzQzIDE3LjY1N2wtLjcwNy43MDdNMTYgMTJhNCA0IDAgMTEtOCAwIDQgNCAwIDAxOCAwelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMjAuMzU0IDE1LjM1NEE5IDkgMCAwMTguNjQ2IDMuNjQ2IDkuMDAzIDkuMDAzIDAgMDAxMiAyMWE5LjAwMyA5LjAwMyAwIDAwOC4zNTQtNS42NDZ6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTggYmxvY2sgbWQ6aGlkZGVuIG10LTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9leHBlcmllbmNlXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICBFeHBlcmllbmNlXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LW5vcm1hbCB0ZXh0LWdyYXktNjAwIGRhcms6dGV4dC1ncmF5LTMwMFwiPlxuICAgICAgICAgICAgQ29udGFjdFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2NlcnRpZmljYXRpb25zXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGZvbnQtbm9ybWFsIHRleHQtZ3JheS02MDAgZGFyazp0ZXh0LWdyYXktMzAwXCI+XG4gICAgICAgICAgICBDZXJ0aWZpY2F0aW9uc1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJjb25zdCB1c2VyRGF0YSA9IHtcbiAgZ2l0aHViVXNlcm5hbWU6IFwiRmF5c29pbFwiLFxuICBuYW1lOiBcIkZheXNvaWwgQmFjYXJpXCIsXG4gIGRlc2lnbmF0aW9uOiBcIkRldmVsb3BwZXVyIMOpdHVkaWFudFwiLFxuICBhdmF0YXJVcmw6IFwiL2F2YXRhci5wbmdcIixcbiAgZW1haWw6IFwiYmFjYXJpLmZheXNvaWxAZ21haWwuY29tXCIsXG4gIHBob25lOiBcIiszMyA2MzYxMjQzMTVcIixcbiAgYWRkcmVzczogXCJMeW9uLCBGcmFuY2UuXCIsXG5cbiAgY2VydGlmOlt7XG5cbiAgfV0sXG4gIHByb2plY3RzOiBbXG4gICBcbiAgICB7XG4gICAgICBcbiAgICAgIHRpdGxlOiBcIkdTQiBCRERcIixcbiAgICAgIGxpbms6IFwiL2dzYlwiLFxuICAgICAgaW1nVXJsOiBcIi90bWsuanBnXCIsXG4gICAgICBcbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkVhdEl0LlwiLFxuICAgICAgbGluazogXCIvZWF0aXRcIixcbiAgICAgIGltZ1VybDogXCIvcGxhY2Vob2xkZXJ0ZWNoLnBuZ1wiLFxuICAgIH0sXG5cbiAgICB7XG4gICAgICB0aXRsZTogXCJFdmVudGlvXCIsXG4gICAgICBsaW5rOiBcIi9ldmVudGlvXCIsXG4gICAgICBpbWdVcmw6IFwiL2V2ZW50aW8uanBnXCIsXG4gICAgfSxcbiAgIFxuICBdLFxuICB2ZWlsbGV0ZWNobm8gOiBbXG4gICAgXG5cbiAgXSxcbiAgXG4gIFxuICBjZXJ0aWZpY2F0aW9uczogWy8qXG4gICBcbiAgICB7XG4gICAgICB0aXRsZTogXCJTdWl2aWUgZHUgY291cnMgc3VyIGxhIGN5YmVyc8OpY3VyaXTDqVwiLFxuICAgICAgaW1nVXJsOiBcIi9zZWNudW0ucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJIVE1MLlwiLFxuICAgICAgaW1nVXJsOiBcIi9odG1sLmpwZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiUHl0aG9uIHBvdXIgZMOpYnV0YW50LlwiLFxuICAgICAgaW1nVXJsOiBcIi9weXRob24ucG5nXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJTUUwuXCIsXG4gICAgICBpbWdVcmw6IFwiL3NxbC5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlN1aXZpZSBkdSBjb3VycyBzdXIgbGEgY3liZXJzw6ljdXJpdMOpXCIsXG4gICAgICBpbWdVcmw6IFwiL3NlY251bS5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhUTUwuXCIsXG4gICAgICBpbWdVcmw6IFwiL2h0bWwuanBnXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJQeXRob24gcG91ciBkw6lidXRhbnQuXCIsXG4gICAgICBpbWdVcmw6IFwiL3B5dGhvbi5wbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlNRTC5cIixcbiAgICAgIGltZ1VybDogXCIvc3FsLnBuZ1wiLFxuICAgIH0sXG4qL1xuICAgIFxuICAgIFxuXG4gIF0sXG4gIGFib3V0OiB7XG4gICAgdGl0bGU6XG4gICAgICBcIkplIHN1aXMgdW4gw6l0dWRpYW50IGVuIGluZm9ybWF0aXF1ZSB2b3VsYW50IHNlIHNwZWNpYWxpc8OpIGRhbnMgbGEgY3LDqWF0aW9uIGRlIHNpdGUgd2ViIG91IGQnYXBwbGljYXRpb25zXCIsXG5cbiAgIFxuICBcbiAgICBjdXJyZW50UHJvamVjdDogXCJCVFMgU2VydmljZXMgSW5mb3JtYXRpcXVlIGF1eCBPcmdhbmlzYXRpb25zIChTSU8pXCIsXG4gICAgY3VycmVudFByb2plY3RVcmw6IFwiaHR0cHM6Ly93d3cub25pc2VwLmZyL1Jlc3NvdXJjZXMvVW5pdmVycy1Gb3JtYXRpb24vRm9ybWF0aW9ucy9Qb3N0LWJhYy9idHMtc2VydmljZXMtaW5mb3JtYXRpcXVlcy1hdXgtb3JnYW5pc2F0aW9ucy1vcHRpb24tYi1zb2x1dGlvbnMtbG9naWNpZWxsZXMtZXQtYXBwbGljYXRpb25zLW1ldGllcnNcIixcbiAgfSxcbiAgZXhwZXJpZW5jZTogW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkluaXRpYXRpb24gYSBKYXZhc2NyaXB0IGV0IE5leHRKU1wiLFxuICAgICAgY29tcGFueTogXCJFdmVudGlvXCIsXG4gICAgICB5ZWFyOiBcIjIwMjJcIixcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L2V2ZW50aW9mci9cIixcbiAgICAgIGRlc2M6IFwiQXBwcmVudGlzc2FnZSBkdSBsYW5nYWdlIGRlIHByb2dyYW1tYXRpb24gSmF2YXNjcnBpdCBldCBkZSBsYSB0ZWNobm9sb2dpZSBOZXh0SlMgZGFucyBsZSBjYWRyZSBkJ3VuIHN0YWdlIGQnYXBwcmVudGlzc2FnZSBlbiBlbnRyZXByaXNlLlwiLFxuICAgICAgXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJBcHByZW50aXNzYWdlIEMjIGV0IFNRTFwiLFxuICAgICAgY29tcGFueTogXCJMeWPDqWUgSmFjcXVlcyBCcmVsLCBWw6luaXNzaWV1eC5cIixcbiAgICAgIHllYXI6IFwiMjAyMVwiLFxuICAgICAgY29tcGFueUxpbms6IFwiaHR0cHM6Ly9jYXMuZW50LmF1dmVyZ25lcmhvbmVhbHBlcy5mci9sb2dpbj9zZWxlY3Rpb249TFlPTi1BVFNfcGFyZW50X2VsZXZlJnNlcnZpY2U9aHR0cHMlM0ElMkYlMkZseWMtamFjcXVlcy1icmVsLmVudC5hdXZlcmduZXJob25lYWxwZXMuZnIlMkZzZy5kbyUzRlBST0MlM0RJREVOVElGSUNBVElPTl9GUk9OVCZzdWJtaXQ9VmFsaWRlclwiLFxuICAgICAgZGVzYzogXCJDb250aW51aXTDqSBkZSBsJ2FwcHJlbnRpc3NhZ2UgZGUgbGFuZ2FnZXMgZGUgcHJvZ3JtbWF0aW9uIGRhbnMgbGUgY2FkcmUgZGUgbW9uIEJUUy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIkNlcnRpZmljYXRpb25zIGV0IGluaXRpYXRpb24gY3liZXJzZWN1cml0w6lcIixcbiAgICAgIGNvbXBhbnk6IFwiTHljw6llIEphY3F1ZXMgQnJlbCwgVsOpbmlzc2lldXguXCIsXG4gICAgICB5ZWFyOiBcIjIwMjFcIixcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vY2FzLmVudC5hdXZlcmduZXJob25lYWxwZXMuZnIvbG9naW4/c2VsZWN0aW9uPUxZT04tQVRTX3BhcmVudF9lbGV2ZSZzZXJ2aWNlPWh0dHBzJTNBJTJGJTJGbHljLWphY3F1ZXMtYnJlbC5lbnQuYXV2ZXJnbmVyaG9uZWFscGVzLmZyJTJGc2cuZG8lM0ZQUk9DJTNESURFTlRJRklDQVRJT05fRlJPTlQmc3VibWl0PVZhbGlkZXJcIixcbiAgICAgIGRlc2M6IFwiTm91cyBhdm9ucyDDqXTDqSBpbml0acOpIMOgIGxhIGN5YmVyc8OpY3VyaXTDqSwgcGFzc2VyIHVuZSBjZXJ0aWZpY2F0aW9uZXQgYXZvbnMgdW5lIGVwcmV1dmUgZGUgQlRTIHN1ciBjZXR0ZSBtYXRpZXJlLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQXBwcmVudGlzc2FnZSBXb3JkcHJlc3MsIEMrKyBldCBQSFAuXCIsXG4gICAgICBjb21wYW55OiBcIkx5Y8OpZSBKYWNxdWVzIEJyZWwsIFbDqW5pc3NpZXV4LlwiLFxuICAgICAgeWVhcjogXCIyMDIwLTIwMjFcIixcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vY2FzLmVudC5hdXZlcmduZXJob25lYWxwZXMuZnIvbG9naW4/c2VsZWN0aW9uPUxZT04tQVRTX3BhcmVudF9lbGV2ZSZzZXJ2aWNlPWh0dHBzJTNBJTJGJTJGbHljLWphY3F1ZXMtYnJlbC5lbnQuYXV2ZXJnbmVyaG9uZWFscGVzLmZyJTJGc2cuZG8lM0ZQUk9DJTNESURFTlRJRklDQVRJT05fRlJPTlQmc3VibWl0PVZhbGlkZXJcIixcbiAgICAgIGRlc2M6IFwiSidhaSBhcHByaXMgZGUgbm9tYnJldXggbGFuZ2FnZXMgbG9ycyBkZSBtYSAxZXJlIGFubsOpZSBkZSBCVFMuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJCYWNjYWxhdXJlYXQgU1RJMkRcIixcbiAgICAgIGNvbXBhbnk6IFwiTHljw6llIEZyZWRlcmljIEZheXMsIFZpbGxldXJiYW5uZS4uXCIsXG4gICAgICB5ZWFyOiBcIjIwMjBcIixcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vbHljLWZyZWRlcmljLWZheXMuZW50LmF1dmVyZ25lcmhvbmVhbHBlcy5mci9cIixcbiAgICAgIGRlc2M6IFwiSidhaSBvYnRlbnUgbW9uIGJhY2NhbGF1csOpYXQgU1RJMkQgKFNDSUVOQ0VTIEVUIFRFQ0hOT0xPR0lFUyBERSBMJ0lORFVTVFJJRSBFVCBEVSBEw4lWRUxPUFBFTUVOVCBEVVJBQkxFKSBvcHRpb24gU1BFQ0lBTElUw4kgU1lTVMOITUUgRCdJTkZPUk1BVElPTiBFVCBOVU3DiVJJUVVFIChTSU4pLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiQXBwcmVudGlzc2FnZSBIVE1sIGV0IENTU1wiLFxuICAgICAgY29tcGFueTogXCJMeWPDqWUgRnJlZGVyaWMgRmF5cywgVmlsbGV1cmJhbm5lLlwiLFxuICAgICAgeWVhcjogXCIyMDE3LTIwMThcIixcbiAgICAgIGNvbXBhbnlMaW5rOiBcImh0dHBzOi8vbHljLWZyZWRlcmljLWZheXMuZW50LmF1dmVyZ25lcmhvbmVhbHBlcy5mci9cIixcblxuICAgIH0sXG5cbiAgXSxcbiAgcmVzdW1lVXJsOlxuICAgIFwiaHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xM0RoVVlzRjRCUXdIUGp5YlFuU2FkcE5OdUtKUTNONmkvdmlldz91c3A9c2hhcmluZ1wiLFxuICBzb2NpYWxMaW5rczoge1xuICAgIGluc3RhZ3JhbTogXCJodHRwczovL2luc3RhZ3JhbS5jb20vc29pc29pYWN0M1wiLFxuICAgIGxpbmtlZGluOiBcImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9mYXlzb2lsLWJhY2FyaS0zNDViNTgyMDcvXCIsXG4gICAgZ2l0aHViOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GYXlzb2lsXCIsXG4gICAgZmFjZWJvb2s6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2ZheXNvaWwuYmFjYXJpLjMzL1wiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlckRhdGE7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9