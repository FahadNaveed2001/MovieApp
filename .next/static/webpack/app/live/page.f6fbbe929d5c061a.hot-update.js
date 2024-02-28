"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/live/page",{

/***/ "(app-pages-browser)/./src/app/live/page.jsx":
/*!*******************************!*\
  !*** ./src/app/live/page.jsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Live; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Live() {\n    _s();\n    const [news, setNews] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchNews = async ()=>{\n            try {\n                const response = await fetch(\"https://newsapi.org/v2/top-headlines?q=movie&apiKey=0332fe66050b4ef3a92f27445220515e\");\n                const data = await response.json();\n                setNews(data.articles);\n            } catch (error) {\n                console.error(\"Error fetching news:\", error);\n            }\n        };\n        fetchNews();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"bg-transparent text-white min-h-[100vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-20\"\n            }, void 0, false, {\n                fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-lg text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-3xl font-bold sm:text-4xl\",\n                                children: \"Kickstart your marketing\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 text-gray-300\",\n                                children: \"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3\",\n                        children: news.map((article, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: article.url,\n                                target: \"_blank\",\n                                rel: \"noopener noreferrer\",\n                                className: \"block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/40\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: article.urlToImage,\n                                        alt: article.title,\n                                        className: \"w-full h-auto mb-4 rounded-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold text-white\",\n                                        children: article.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mt-1 text-sm text-gray-300\",\n                                        children: article.description\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder (7)\\\\helloapp\\\\src\\\\app\\\\live\\\\page.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Live, \"z/85X+TkTtxCb0PBzmDGtQlYstQ=\");\n_c = Live;\nvar _c;\n$RefreshReg$(_c, \"Live\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGl2ZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFbUQ7QUFFcEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRW5DQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1JLFlBQVk7WUFDaEIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1DLE1BQ3JCO2dCQUVGLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0csSUFBSTtnQkFDaENMLFFBQVFJLEtBQUtFLFFBQVE7WUFDdkIsRUFBRSxPQUFPQyxPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsd0JBQXdCQTtZQUN4QztRQUNGO1FBRUFOO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNRO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7Ozs7OzswQkFDZiw4REFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUFpQzs7Ozs7OzBDQUcvQyw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQXFCOzs7Ozs7Ozs7Ozs7a0NBT3BDLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWlgsS0FBS2UsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUNsQiw4REFBQ0M7Z0NBRUNDLE1BQU1ILFFBQVFJLEdBQUc7Z0NBQ2pCQyxRQUFPO2dDQUNQQyxLQUFJO2dDQUNKWCxXQUFVOztrREFFViw4REFBQ1k7d0NBQ0NDLEtBQUtSLFFBQVFTLFVBQVU7d0NBQ3ZCQyxLQUFLVixRQUFRVyxLQUFLO3dDQUNsQmhCLFdBQVU7Ozs7OztrREFFWiw4REFBQ0U7d0NBQUdGLFdBQVU7a0RBQWdDSyxRQUFRVyxLQUFLOzs7Ozs7a0RBQzNELDhEQUFDYjt3Q0FBRUgsV0FBVTtrREFBOEJLLFFBQVFZLFdBQVc7Ozs7Ozs7K0JBWnpEWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCbkI7R0ExRHdCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saXZlL3BhZ2UuanN4PzkyNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGl2ZSgpIHtcclxuICBjb25zdCBbbmV3cywgc2V0TmV3c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaE5ld3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIFwiaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP3E9bW92aWUmYXBpS2V5PTAzMzJmZTY2MDUwYjRlZjNhOTJmMjc0NDUyMjA1MTVlXCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgc2V0TmV3cyhkYXRhLmFydGljbGVzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgbmV3czpcIiwgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZldGNoTmV3cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtd2hpdGUgbWluLWgtWzEwMHZoXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMjBcIj48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi14bCBweC00IHB5LTggc206cHgtNiBzbTpweS0xMiBsZzpweC04IGxnOnB5LTE2XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LWxnIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHNtOnRleHQtNHhsXCI+XHJcbiAgICAgICAgICAgIEtpY2tzdGFydCB5b3VyIG1hcmtldGluZ1xyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgdGV4dC1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSwgZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgQ29uc2VxdXVudHVyIGFsaXF1YW0gZG9sb3JpYnVzIG5lc2NpdW50IGVvcyBmdWdpYXQuIFZpdGFlIGFwZXJpYW1cclxuICAgICAgICAgICAgZnVnaXQgY29uc2VxdXVudHVyIHNhZXBlIGxhYm9ydW0uXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy0xIGdhcC04IG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zXCI+XHJcbiAgICAgICAgICB7bmV3cy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBocmVmPXthcnRpY2xlLnVybH1cclxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHJvdW5kZWQteGwgYm9yZGVyIGJvcmRlci1ncmF5LTgwMCBwLTggc2hhZG93LXhsIHRyYW5zaXRpb24gaG92ZXI6Ym9yZGVyLXBpbmstNTAwLzEwIGhvdmVyOnNoYWRvdy1waW5rLTUwMC80MFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBzcmM9e2FydGljbGUudXJsVG9JbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gbWItNCByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCI+e2FydGljbGUudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0xIHRleHQtc20gdGV4dC1ncmF5LTMwMFwiPnthcnRpY2xlLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpdmUiLCJuZXdzIiwic2V0TmV3cyIsImZldGNoTmV3cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImFydGljbGVzIiwiZXJyb3IiLCJjb25zb2xlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIm1hcCIsImFydGljbGUiLCJpbmRleCIsImEiLCJocmVmIiwidXJsIiwidGFyZ2V0IiwicmVsIiwiaW1nIiwic3JjIiwidXJsVG9JbWFnZSIsImFsdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/live/page.jsx\n"));

/***/ })

});