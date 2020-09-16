/** .next/static/chunks/pages/sub.js内、SubBody.module.css部分 */

// /***/ "./components/subBody.module.css":
// /*!***************************************!*\
//   !*** ./components/subBody.module.css ***!
//   \***************************************/
// /*! no static exports found */
// /***/ (function(module, exports, __webpack_require__) {


var api = __webpack_require__(
  /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
);

var content = __webpack_require__(
  /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./subBody.module.css */
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subBody.module.css"
);

content = content.__esModule ? content.default : content;

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {};

options.insert = function(element){
  // These elements should always exist. If they do not,
  // this code should fail.
  var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');
  var parentNode=anchorElement.parentNode;

  // Normally <head>
  // Each style tag should be placed right before our
  // anchor. By inserting before and not after, we do not
  // need to track the last inserted element.
  parentNode.insertBefore(
    element,anchorElement);
  };

  options.singleton = false;

  var update = api(content, options);

  if (true) {
    if (!content.locals || module.hot.invalidate) {
      var isEqualLocals = function isEqualLocals(a, b) {
        if (!a && b || a && !b) {
          return false;
        }
        var p;
        for (p in a) {
          if (a[p] !== b[p]) {
            return false;
          }
        }
        for (p in b) {
          if (!a[p]) {
            return false;
          }
        }
        return true;
      };
      var oldLocals = content.locals;

      module.hot.accept(
        /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./subBody.module.css */
        "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subBody.module.css",
        function () {
          content = __webpack_require__(
            /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./subBody.module.css */
            "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subBody.module.css"
          );

          content = content.__esModule ? content.default : content;

          if (typeof content === 'string') {
            content = [[module.i, content, '']];
          }

          if (!isEqualLocals(oldLocals, content.locals)) {
            module.hot.invalidate();
            return;
          }

          oldLocals = content.locals;
          update(content);
        }
      )
    }

    module.hot.dispose(function() {
      update();
    }
  );
}

module.exports = content.locals || {};


// /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subBody.module.css":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-2-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./components/subBody.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
// /***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
  /*! ../node_modules/css-loader/dist/runtime/api.js */
  "./node_modules/css-loader/dist/runtime/api.js"
);

exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push(
  [
    module.i,
    `
      .subBody_container__1XnWD {
        background-color: green;
      }
    `,
    {
      "version":3,
      "sources": [
        "/Users/200505/ws/nextsample/components/subBody.module.css"
      ],
      "names": [],
      "mappings": "AAAA;EACE,uBAAuB;AACzB",
      "file":"subBody.module.css",
      "sourcesContent": [
        `
          .container {
            background-color: green;
          }
        `
      ]
    }
  ]
);

// Exports
exports.locals = {
  "container": "subBody_container__1XnWD"
};

module.exports = exports;
//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdWJCb2R5Lm1vZHVsZS5jc3M/YmE4ZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHFHQUFnRDtBQUMxRjtBQUNBO0FBQ0EsY0FBYyxRQUFTLDhCQUE4Qiw0QkFBNEIsR0FBRyxXQUFXLGdIQUFnSCxZQUFZLGtFQUFrRSw0QkFBNEIsR0FBRyxPQUFPO0FBQ25VO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL2NvbXBvbmVudHMvc3ViQm9keS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN1YkJvZHlfY29udGFpbmVyX18xWG5XRCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzLzIwMDUwNS93cy9uZXh0c2FtcGxlL2NvbXBvbmVudHMvc3ViQm9keS5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJmaWxlXCI6XCJzdWJCb2R5Lm1vZHVsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwic3ViQm9keV9jb250YWluZXJfXzFYbldEXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./components/subBody.module.css\n");

// /***/ })
