/** .next/static/chunks/pages/sub.js内、SubBody.jsコンポーネント部分 */

__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */
(function(module) {
  /* harmony export (binding) */
  __webpack_require__.d(
    __webpack_exports__,
    "SubBody",
    function() { return SubBody; });

    /* harmony import */
    var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js");

    /* harmony import */
    var react__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/
      __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

    /* harmony import */
    var _subBody_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./subBody.module.css */
      "./components/subBody.module.css"
    );

    /* harmony import */
    var _subBody_module_css__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/
      __webpack_require__.n( _subBody_module_css__WEBPACK_IMPORTED_MODULE_1__ );

    /* harmony import */
    var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! next/link */
      "./node_modules/next/link.js"
    );

    /* harmony import */
    var next_link__WEBPACK_IMPORTED_MODULE_2___default =
      /*#__PURE__*/
      __webpack_require__.n( next_link__WEBPACK_IMPORTED_MODULE_2__ );

    /* harmony import */
    var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! next/dynamic */
      "./node_modules/next/dist/next-server/lib/dynamic.js"
    );

    /* harmony import */
    var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default =
      /*#__PURE__*/
      __webpack_require__.n( next_dynamic__WEBPACK_IMPORTED_MODULE_3__ );

    var _this = undefined,
        _jsxFileName = "/Users/200505/ws/nextsample/components/subBody.js";

    var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];


    var DynamicImported = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(
      _c = function _c() {
        return __webpack_require__.e( /*! import() */ 1)
                                  .then(
                                    __webpack_require__.bind(
                                      null,
                                      /*! ./dynamicImported */
                                      "./components/dynamicImported.js"
                                    )
                                  )
                                  .then(
                                    function (mod) {
                                      return mod.DynamicImported;
                                    }
                                  );
      },
      {
        loadableGenerated: {
          webpack: function webpack() {
            return [
              /*require.resolve*/
              (
                /*! ./dynamicImported */
                "./components/dynamicImported.js"
              )
            ];
          },
          modules: [ './dynamicImported' ]
        }
      }
    );

    _c2 = DynamicImported;
    var SubBody = function SubBody() {
      return __jsx(
        "div",
        {
          className: _subBody_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 3
          }
        },
        __jsx(
          "div",
          {
            className: _subBody_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.big,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 5
            }
          },
          "in big but not big"
        ),
        __jsx(
          "div",
          {
            className: _subBody_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.texts,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 5
            }
          },
          "text",
          __jsx(
            "div",
            {
              className: _subBody_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.big,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 15,
                columnNumber: 7
              }
            },
            "big text"
          )
        ),
        __jsx(
          "div",
          {
            id: 'id',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 5
            }
          },
          "subBodyText"
        ),
        __jsx(
          DynamicImported,
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 5
            }
          }
        ),
        __jsx(
          next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
          {
            href: "/",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 5
            }
          },
          __jsx(
            "a", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 22
              }
            },
            "link"
          )
        )
      );
    };

    _c3 = SubBody;
    var _c, _c2, _c3;
    $RefreshReg$(
      _c,
      "DynamicImported$dynamic"
    );

    $RefreshReg$(
      _c2,
      "DynamicImported"
    );

    $RefreshReg$(
      _c3,
      "SubBody"
    );

    var _a, _b;

    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.

    if (
      typeof self !== 'undefined' &&
      // AMP / No-JS mode does not inject these helpers:
      '$RefreshHelpers$' in self
    ) {
      var currentExports = module.__proto__.exports;
      var prevExports = (
        _b = (_a = module.hot.data) === null
        || _a === void 0 ? void 0 : _a.prevExports
      ) !== null
      && _b !== void 0 ? _b : null;

    // This cannot happen in MainTemplate because the exports mismatch between
    // templating and execution.

    self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);

    // A module can be accepted automatically based on its exports, e.g. when
    // it is a Refresh Boundary.

    if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
      // Save the previous exports on update so we can compare the boundary
      // signatures.
      module.hot.dispose(function (data) {
        data.prevExports = currentExports;
      });

      // Unconditionally accept an update to this module, we'll check if it's
      // still a Refresh Boundary later.
      module.hot.accept();

      // This field is set when the previous version of this module was a
      // Refresh Boundary, letting us know we need to check for invalidation or
      // enqueue an update.
      if (prevExports !== null) {
        // A boundary can become ineligible if its exports are incompatible
        // with the previous exports.
        //
        // For example, if you add/remove/change exports, we'll want to
        // re-execute the importing modules, and force those components to
        // re-render. Similarly, if you convert a class component to a
        // function, we want to invalidate the boundary.
        if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
          module.hot.invalidate();
        } else {
          self.$RefreshHelpers$.scheduleUpdate();
        }
      }
    } else {
      // Since we just executed the code for the module, it's possible that the
      // new exports made it ineligible for being a boundary.
      // We only care about the case when we were _previously_ a boundary,
      // because we already accepted this update (accidental side effect).
      var isNoLongerABoundary = prevExports !== null;
      if (isNoLongerABoundary) {
        module.hot.invalidate();
      }
    }
  }

  /* WEBPACK VAR INJECTION */
}.call(
  this,
  __webpack_require__(
    /*! ./../node_modules/webpack/buildin/harmony-module.js */
    "./node_modules/webpack/buildin/harmony-module.js"
  )(module)
))//# sourceURL=[module]\n//# ...
