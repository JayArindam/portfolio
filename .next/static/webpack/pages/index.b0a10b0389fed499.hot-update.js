"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/sections/Hero.tsx":
/*!*******************************!*\
  !*** ./src/sections/Hero.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n// import Button from \"@/components/Button\";\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst TypingEffect = (param)=>{\n    let { strings, initial, animate, transition } = param;\n    _s();\n    const [currentStringIndex, setCurrentStringIndex] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [typedText, setTypedText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setTypedText((prevText)=>{\n                const currentString = strings[currentStringIndex];\n                const nextChar = currentString[prevText.length];\n                if (nextChar !== undefined) {\n                    return prevText + nextChar;\n                } else {\n                    setCurrentStringIndex((prevIndex)=>(prevIndex + 1) % strings.length);\n                    return \"\";\n                }\n            });\n        }, 250);\n        return ()=>clearInterval(interval);\n    }, [\n        strings,\n        currentStringIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {\n        className: \"hero-title-large\",\n        style: {\n            height: \"6rem\",\n            overflow: \"hidden\"\n        },\n        initial: initial,\n        animate: animate,\n        transition: transition,\n        children: typedText\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TypingEffect, \"5LaUMB43bWpUPZnJk9zKFpT0qck=\");\n_c = TypingEffect;\n// -------------------------------------------------------------------------------\nfunction Hero() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"hero\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                className: \"hero-title\",\n                initial: {\n                    opacity: 0,\n                    y: 5\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    ease: \"easeInOut\",\n                    delay: 0.6\n                },\n                children: \"Hi I am\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TypingEffect, {\n                strings: [\n                    \"Jay Arindam Maity...\",\n                    \"Data \"\n                ],\n                initial: {\n                    opacity: 0,\n                    y: 5\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    ease: \"easeInOut\",\n                    delay: 0.75\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h3, {\n                className: \"hero-title-large hero-title-sub\",\n                initial: {\n                    opacity: 0,\n                    y: 5\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    ease: \"easeInOut\",\n                    delay: 1.05\n                },\n                children: \"I love coding.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p, {\n                className: \"hero-text\",\n                initial: {\n                    opacity: 0,\n                    y: 5\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    ease: \"easeInOut\",\n                    delay: 1.35\n                },\n                children: [\n                    \"I'm a student and a computer science enthusiast who loves to spend his time learning about computer. Apart from the learning part I also take interest in organising various events and also helping out various communities. As of now I'm working with\\xa0\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"https://github.com/Open-Source-Chandigarh\",\n                        target: \"_blank\",\n                        className: \"link\",\n                        children: \"Open Source Chandigarh.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                className: \"hero-button\",\n                initial: {\n                    opacity: 0,\n                    y: 5\n                },\n                animate: {\n                    opacity: 1,\n                    y: 0\n                },\n                transition: {\n                    duration: 0.3,\n                    ease: \"easeInOut\",\n                    delay: 1.65\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jay\\\\Desktop\\\\All Stuff\\\\Jay Arindam Maity\\\\portfolio\\\\src\\\\sections\\\\Hero.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c, _c1;\n$RefreshReg$(_c, \"TypingEffect\");\n$RefreshReg$(_c1, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7b0JBQUdDLEdBQUc7Z0JBQUU7Z0JBQzVCdkIsWUFBWTtvQkFDVndCLFVBQVU7b0JBQ1ZDLE1BQU07b0JBQ05DLE9BQU87Z0JBQ1Q7Ozs7Ozs7Ozs7OztBQUtSO01BckZTUDtBQXVGVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvSGVyby50c3g/Njg5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQnV0dG9uIGZyb20gXCJAL2NvbXBvbmVudHMvQnV0dG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5pbnRlcmZhY2UgVHlwaW5nRWZmZWN0UHJvcHMge1xyXG4gIHN0cmluZ3M6IHN0cmluZ1tdO1xyXG4gIGluaXRpYWw6IHsgW2tleTogc3RyaW5nXTogYW55IH07XHJcbiAgYW5pbWF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcclxuICB0cmFuc2l0aW9uOiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xyXG59XHJcblxyXG5jb25zdCBUeXBpbmdFZmZlY3Q6IFJlYWN0LkZDPFR5cGluZ0VmZmVjdFByb3BzPiA9ICh7XHJcbiAgc3RyaW5ncyxcclxuICBpbml0aWFsLFxyXG4gIGFuaW1hdGUsXHJcbiAgdHJhbnNpdGlvbixcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtjdXJyZW50U3RyaW5nSW5kZXgsIHNldEN1cnJlbnRTdHJpbmdJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbdHlwZWRUZXh0LCBzZXRUeXBlZFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VHlwZWRUZXh0KChwcmV2VGV4dCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRTdHJpbmcgPSBzdHJpbmdzW2N1cnJlbnRTdHJpbmdJbmRleF07XHJcbiAgICAgICAgY29uc3QgbmV4dENoYXIgPSBjdXJyZW50U3RyaW5nW3ByZXZUZXh0Lmxlbmd0aF07XHJcblxyXG4gICAgICAgIGlmIChuZXh0Q2hhciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm4gcHJldlRleHQgKyBuZXh0Q2hhcjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0Q3VycmVudFN0cmluZ0luZGV4KChwcmV2SW5kZXgpID0+XHJcbiAgICAgICAgICAgIChwcmV2SW5kZXggKyAxKSAlIHN0cmluZ3MubGVuZ3RoXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sIDI1MCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gIH0sIFtzdHJpbmdzLCBjdXJyZW50U3RyaW5nSW5kZXhdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uaDJcclxuICAgICAgY2xhc3NOYW1lPVwiaGVyby10aXRsZS1sYXJnZVwiXHJcbiAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI2cmVtXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19IC8vIFNldCBhIGZpeGVkIGhlaWdodCBhbmQgaGlkZSBvdmVyZmxvd1xyXG4gICAgICBpbml0aWFsPXtpbml0aWFsfVxyXG4gICAgICBhbmltYXRlPXthbmltYXRlfVxyXG4gICAgICB0cmFuc2l0aW9uPXt0cmFuc2l0aW9ufVxyXG4gICAgPlxyXG4gICAgICB7dHlwZWRUZXh0fVxyXG4gICAgPC9tb3Rpb24uaDI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIEhlcm8oKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxyXG4gICAgICA8bW90aW9uLmgxXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVyby10aXRsZVwiXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1IH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgICAgICBkZWxheTogMC42LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBIaSBJIGFtXHJcbiAgICAgIDwvbW90aW9uLmgxPlxyXG5cclxuICAgICAgey8qIDxtb3Rpb24uaDJcclxuICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXRpdGxlLWxhcmdlXCJcclxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgICAgIGRlbGF5OiAwLjc1LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBKYXkgQXJpbmRhbSBNYWl0eS5cclxuICAgICAgPC9tb3Rpb24uaDI+ICovfVxyXG5cclxuICAgICAgPFR5cGluZ0VmZmVjdFxyXG4gICAgICAgIHN0cmluZ3M9e1tcclxuICAgICAgICAgIFwiSmF5IEFyaW5kYW0gTWFpdHkuLi5cIixcclxuICAgICAgICAgIFwiRGF0YSBcIixcclxuICAgICAgICBdfVxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNSB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXHJcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgZGVsYXk6IDAuNzUsXHJcbiAgICAgICAgfX1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxtb3Rpb24uaDNcclxuICAgICAgICBjbGFzc05hbWU9XCJoZXJvLXRpdGxlLWxhcmdlIGhlcm8tdGl0bGUtc3ViXCJcclxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAsIHk6IDUgfX1cclxuICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHk6IDAgfX1cclxuICAgICAgICB0cmFuc2l0aW9uPXt7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMC4zLFxyXG4gICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcclxuICAgICAgICAgIGRlbGF5OiAxLjA1LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICBJIGxvdmUgY29kaW5nLlxyXG4gICAgICA8L21vdGlvbi5oMz5cclxuXHJcbiAgICAgIDxtb3Rpb24ucFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiXHJcbiAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1IH19XHJcbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICAgICAgdHJhbnNpdGlvbj17e1xyXG4gICAgICAgICAgZHVyYXRpb246IDAuMyxcclxuICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCIsXHJcbiAgICAgICAgICBkZWxheTogMS4zNSxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgSSZhcG9zO20gYSBzdHVkZW50IGFuZCBhIGNvbXB1dGVyIHNjaWVuY2UgZW50aHVzaWFzdCB3aG8gbG92ZXMgdG8gc3BlbmQgaGlzIHRpbWUgbGVhcm5pbmcgYWJvdXQgY29tcHV0ZXIuIEFwYXJ0IGZyb20gdGhlXHJcbiAgICAgICAgbGVhcm5pbmcgcGFydCBJIGFsc28gdGFrZSBpbnRlcmVzdCBpbiBvcmdhbmlzaW5nIHZhcmlvdXMgZXZlbnRzIGFuZCBhbHNvIGhlbHBpbmcgb3V0IHZhcmlvdXMgY29tbXVuaXRpZXMuIEFzIG9mIG5vdyBJJ20gd29ya2luZyB3aXRoJm5ic3A7XHJcbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9PcGVuLVNvdXJjZS1DaGFuZGlnYXJoXCIgdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgT3BlbiBTb3VyY2UgQ2hhbmRpZ2FyaC5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbW90aW9uLnA+XHJcbiAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaGVyby1idXR0b25cIlxyXG4gICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeTogNSB9fVxyXG4gICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxyXG4gICAgICAgIHRyYW5zaXRpb249e3tcclxuICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXHJcbiAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxyXG4gICAgICAgICAgZGVsYXk6IDEuNjUsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvO1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwibW90aW9uIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJUeXBpbmdFZmZlY3QiLCJzdHJpbmdzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiY3VycmVudFN0cmluZ0luZGV4Iiwic2V0Q3VycmVudFN0cmluZ0luZGV4IiwidHlwZWRUZXh0Iiwic2V0VHlwZWRUZXh0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInByZXZUZXh0IiwiY3VycmVudFN0cmluZyIsIm5leHRDaGFyIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicHJldkluZGV4IiwiY2xlYXJJbnRlcnZhbCIsImgyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvdyIsIkhlcm8iLCJkaXYiLCJoMSIsIm9wYWNpdHkiLCJ5IiwiZHVyYXRpb24iLCJlYXNlIiwiZGVsYXkiLCJoMyIsInAiLCJocmVmIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/Hero.tsx\n"));

/***/ })

});