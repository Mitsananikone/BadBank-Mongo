/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ (() => {

eval("function Spa() {\n  return /*#__PURE__*/React.createElement(HashRouter, null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(UserContext.Provider, {\n    value: {\n      users: [{\n        name: 'Mit',\n        email: 'Mitsananikone@gmail.com',\n        password: 'secret',\n        balance: 0\n      }]\n    }\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"container\",\n    style: {\n      padding: \"20px\"\n    }\n  }, /*#__PURE__*/React.createElement(Route, {\n    path: \"/\",\n    exact: true,\n    component: Home\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/CreateAccount/\",\n    component: CreateAccount\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/login/\",\n    component: Login\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/deposit/\",\n    component: Deposit\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/withdraw/\",\n    component: Withdraw\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/balance/\",\n    component: Balance\n  }), /*#__PURE__*/React.createElement(Route, {\n    path: \"/alldata/\",\n    component: AllData\n  }))));\n}\nReactDOM.render( /*#__PURE__*/React.createElement(Spa, null), document.getElementById('root'));\n\n//# sourceURL=webpack://BadBank-Mongo/./public/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/index.js"]();
/******/ 	
/******/ })()
;