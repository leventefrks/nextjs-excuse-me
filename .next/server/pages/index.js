module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ \"react-icons/hi\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/im */ \"react-icons/im\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/project/nextjs-excuse-me/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\nconst url = \"https://excuser.herokuapp.com/v1/excuse/office/\";\nconst twitterUrl = \"https://twitter.com/twevente_wolf\";\nconst githubUrl = \"https://github.com/leventefrks\";\n\nconst Home = () => {\n  const {\n    0: excuse,\n    1: setExcuse\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])();\n\n  const copyToClipboard = () => navigator.clipboard.writeText(excuse);\n\n  const fetchExcuse = async () => {\n    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default()(url);\n    setExcuse(response.data[0].excuse);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    fetchExcuse();\n  }, []);\n  return __jsx(\"div\", {\n    className: \"relative flex flex-col items-center justify-center sm:px-6 w-full min-h-screen bg-yellow-200 overscroll-y-none font-sans\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Excuse me Boss!\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })), __jsx(\"h1\", {\n    className: \"absolute top-0 inset-x-1/2 mt-4 font-bold tracking-tight text-2xl text-indigo-800\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, \"Idont\"), __jsx(\"span\", {\n    className: \"font-medium\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"FeelLike\"), __jsx(\"strong\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, \"working\")), __jsx(\"div\", {\n    className: \"text-center flex flex-col justify-center items-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: \"h-10 z-10 relative mb-16 mx-6 leading-none font-bold text-xl md:text-3xl text-indigo-800\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, excuse), __jsx(\"p\", {\n    style: {\n      opacity: \"0.15\",\n      fontSize: \"100px\"\n    },\n    className: \"z-0 absolute max-w-md leading-none font-black text-red-300 tracking-tight\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 9\n    }\n  }, \"I don't want to work\"), __jsx(\"div\", {\n    className: \"relative z-10 flex flex-col sm:flex-row gap-4 items-center\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"button\", {\n    className: \"flex items-center gap-1\",\n    onClick: copyToClipboard,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__[\"HiClipboardCopy\"], {\n    className: \"h-6 w-6 text-indigo-800 cursor-pointer\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    className: \"text-indigo-800 text-sm\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, \"Copy to clipboard\")), __jsx(\"button\", {\n    type: \"button\",\n    onClick: fetchExcuse,\n    className: \"items-start text-sm py-1 px-4 uppercase bg-indigo-800 text-white rounded-md hover:bg-indigo-900\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, \"show me another excuse\"))), __jsx(\"div\", {\n    className: \"absolute bottom-0 mb-4 left-0 ml-4 flex gap-6 text-gray-700\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    href: twitterUrl,\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_im__WEBPACK_IMPORTED_MODULE_4__[\"ImTwitter\"], {\n    className: \"h-6 w-6\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  })), __jsx(\"a\", {\n    href: githubUrl,\n    rel: \"noopener noreferrer\",\n    target: \"_blank\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__[\"FaGithub\"], {\n    className: \"h-6 w-6\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInVybCIsInR3aXR0ZXJVcmwiLCJnaXRodWJVcmwiLCJIb21lIiwiZXhjdXNlIiwic2V0RXhjdXNlIiwidXNlU3RhdGUiLCJjb3B5VG9DbGlwYm9hcmQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJmZXRjaEV4Y3VzZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJkYXRhIiwidXNlRWZmZWN0Iiwib3BhY2l0eSIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsaURBQVo7QUFDQSxNQUFNQyxVQUFVLEdBQUcsbUNBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLGdDQUFsQjs7QUFFQSxNQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNqQixRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLEVBQXBDOztBQUVBLFFBQU1DLGVBQWUsR0FBRyxNQUFNQyxTQUFTLENBQUNDLFNBQVYsQ0FBb0JDLFNBQXBCLENBQThCTixNQUE5QixDQUE5Qjs7QUFFQSxRQUFNTyxXQUFXLEdBQUcsWUFBWTtBQUM5QixVQUFNQyxRQUFRLEdBQUcsTUFBTUMsNENBQUssQ0FBQ2IsR0FBRCxDQUE1QjtBQUNBSyxhQUFTLENBQUNPLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLENBQWQsRUFBaUJWLE1BQWxCLENBQVQ7QUFDRCxHQUhEOztBQUtBVyx5REFBUyxDQUFDLE1BQU07QUFDZEosZUFBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxTQUNFO0FBQUssYUFBUyxFQUFDLDBIQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFJLGFBQVMsRUFBQyxtRkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixDQU5GLEVBV0U7QUFBSyxhQUFTLEVBQUMsdURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsYUFBUyxFQUFDLDBGQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1AsTUFESCxDQURGLEVBSUU7QUFDRSxTQUFLLEVBQUU7QUFBRVksYUFBTyxFQUFFLE1BQVg7QUFBbUJDLGNBQVEsRUFBRTtBQUE3QixLQURUO0FBRUUsYUFBUyxFQUFDLDJFQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBSkYsRUFVRTtBQUFLLGFBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMseUJBQWxCO0FBQTRDLFdBQU8sRUFBRVYsZUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOERBQUQ7QUFBaUIsYUFBUyxFQUFDLHdDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFNLGFBQVMsRUFBQyx5QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRixDQURGLEVBS0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFdBQU8sRUFBRUksV0FGWDtBQUdFLGFBQVMsRUFBQyxpR0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUxGLENBVkYsQ0FYRixFQW9DRTtBQUFLLGFBQVMsRUFBQyw2REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUVWLFVBQVQ7QUFBcUIsT0FBRyxFQUFDLHFCQUF6QjtBQUErQyxVQUFNLEVBQUMsUUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVyxhQUFTLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFHLFFBQUksRUFBRUMsU0FBVDtBQUFvQixPQUFHLEVBQUMscUJBQXhCO0FBQThDLFVBQU0sRUFBQyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx1REFBRDtBQUFVLGFBQVMsRUFBQyxTQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQXBDRixDQURGO0FBK0NELENBN0REOztBQStEZUMsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIaUNsaXBib2FyZENvcHkgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmltcG9ydCB7IEltVHdpdHRlciB9IGZyb20gXCJyZWFjdC1pY29ucy9pbVwiO1xuaW1wb3J0IHsgRmFHaXRodWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuY29uc3QgdXJsID0gXCJodHRwczovL2V4Y3VzZXIuaGVyb2t1YXBwLmNvbS92MS9leGN1c2Uvb2ZmaWNlL1wiO1xuY29uc3QgdHdpdHRlclVybCA9IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS90d2V2ZW50ZV93b2xmXCI7XG5jb25zdCBnaXRodWJVcmwgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9sZXZlbnRlZnJrc1wiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbZXhjdXNlLCBzZXRFeGN1c2VdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChleGN1c2UpO1xuXG4gIGNvbnN0IGZldGNoRXhjdXNlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3ModXJsKTtcbiAgICBzZXRFeGN1c2UocmVzcG9uc2UuZGF0YVswXS5leGN1c2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hFeGN1c2UoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBzbTpweC02IHctZnVsbCBtaW4taC1zY3JlZW4gYmcteWVsbG93LTIwMCBvdmVyc2Nyb2xsLXktbm9uZSBmb250LXNhbnNcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RXhjdXNlIG1lIEJvc3MhPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aDEgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgaW5zZXQteC0xLzIgbXQtNCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC0yeGwgdGV4dC1pbmRpZ28tODAwXCI+XG4gICAgICAgIDxzdHJvbmc+SWRvbnQ8L3N0cm9uZz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1tZWRpdW1cIj5GZWVsTGlrZTwvc3Bhbj5cbiAgICAgICAgPHN0cm9uZz53b3JraW5nPC9zdHJvbmc+XG4gICAgICA8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJoLTEwIHotMTAgcmVsYXRpdmUgbWItMTYgbXgtNiBsZWFkaW5nLW5vbmUgZm9udC1ib2xkIHRleHQteGwgbWQ6dGV4dC0zeGwgdGV4dC1pbmRpZ28tODAwXCI+XG4gICAgICAgICAge2V4Y3VzZX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cFxuICAgICAgICAgIHN0eWxlPXt7IG9wYWNpdHk6IFwiMC4xNVwiLCBmb250U2l6ZTogXCIxMDBweFwiIH19XG4gICAgICAgICAgY2xhc3NOYW1lPVwiei0wIGFic29sdXRlIG1heC13LW1kIGxlYWRpbmctbm9uZSBmb250LWJsYWNrIHRleHQtcmVkLTMwMCB0cmFja2luZy10aWdodFwiXG4gICAgICAgID5cbiAgICAgICAgICBJIGRvbid0IHdhbnQgdG8gd29ya1xuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTFcIiBvbkNsaWNrPXtjb3B5VG9DbGlwYm9hcmR9PlxuICAgICAgICAgICAgPEhpQ2xpcGJvYXJkQ29weSBjbGFzc05hbWU9XCJoLTYgdy02IHRleHQtaW5kaWdvLTgwMCBjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby04MDAgdGV4dC1zbVwiPkNvcHkgdG8gY2xpcGJvYXJkPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17ZmV0Y2hFeGN1c2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtcy1zdGFydCB0ZXh0LXNtIHB5LTEgcHgtNCB1cHBlcmNhc2UgYmctaW5kaWdvLTgwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbWQgaG92ZXI6YmctaW5kaWdvLTkwMFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgc2hvdyBtZSBhbm90aGVyIGV4Y3VzZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG1iLTQgbGVmdC0wIG1sLTQgZmxleCBnYXAtNiB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgIDxhIGhyZWY9e3R3aXR0ZXJVcmx9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8SW1Ud2l0dGVyIGNsYXNzTmFtZT1cImgtNiB3LTZcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9e2dpdGh1YlVybH0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxGYUdpdGh1YiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-icons/hi":
/*!*********************************!*\
  !*** external "react-icons/hi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/hi\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9oaVwiPzc2NzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvaGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9oaVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/hi\n");

/***/ }),

/***/ "react-icons/im":
/*!*********************************!*\
  !*** external "react-icons/im" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/im\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pbVwiP2NmNmQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvaW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/im\n");

/***/ })

/******/ });