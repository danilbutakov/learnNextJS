"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_MainContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/MainContainer */ \"./components/MainContainer.js\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar __N_SSP = true;\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(param) {\n    let { user  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        keywords: \"id\",\n        headTitle: `Пользователь: ${user.id}`,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_3___default().user),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: `ID пользователя: ${user.id}`\n                }, void 0, false, {\n                    fileName: \"C:\\\\MyProjects\\\\first-nextjs-project\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 9,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: `Имя пользователя: ${user.name}`\n                }, void 0, false, {\n                    fileName: \"C:\\\\MyProjects\\\\first-nextjs-project\\\\pages\\\\users\\\\[id].js\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\MyProjects\\\\first-nextjs-project\\\\pages\\\\users\\\\[id].js\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\MyProjects\\\\first-nextjs-project\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, this);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0M7QUFDbUI7QUFDUjs7QUFFbkQsNkJBQWUsb0NBQVUsS0FBUSxFQUFFO1FBQVYsRUFBRUcsS0FBSSxFQUFFLEdBQVI7SUFDeEIscUJBQ0MsOERBQUNGLGlFQUFhQTtRQUFDRyxVQUFVO1FBQU1DLFdBQVcsQ0FBQyxjQUFjLEVBQUVGLEtBQUtHLEVBQUUsQ0FBQyxDQUFDO2tCQUNuRSw0RUFBQ0M7WUFBSUMsV0FBV04sc0VBQVc7OzhCQUMxQiw4REFBQ087OEJBQUksQ0FBQyxpQkFBaUIsRUFBRU4sS0FBS0csRUFBRSxDQUFDLENBQUM7Ozs7Ozs4QkFDbEMsOERBQUNJOzhCQUFJLENBQUMsa0JBQWtCLEVBQUVQLEtBQUtRLElBQUksQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNYWluQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbkNvbnRhaW5lcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgdXNlciB9KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxNYWluQ29udGFpbmVyIGtleXdvcmRzPXsnaWQnfSBoZWFkVGl0bGU9e2DQn9C+0LvRjNC30L7QstCw0YLQtdC70Yw6ICR7dXNlci5pZH1gfT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuXHRcdFx0XHQ8aDE+e2BJRCDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y86ICR7dXNlci5pZH1gfTwvaDE+XHJcblx0XHRcdFx0PGgyPntg0JjQvNGPINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjzogJHt1c2VyLm5hbWV9YH08L2gyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvTWFpbkNvbnRhaW5lcj5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG5cdFx0YGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy8ke3BhcmFtcy5pZH1gXHJcblx0KTtcclxuXHRjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cdHJldHVybiB7XHJcblx0XHRwcm9wczogeyB1c2VyIH1cclxuXHR9O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJNYWluQ29udGFpbmVyIiwic3R5bGVzIiwidXNlciIsImtleXdvcmRzIiwiaGVhZFRpdGxlIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});