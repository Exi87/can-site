webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header */ "./components/header.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\CAN116\\Desktop\\hello-next\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 //import Menu from "./menu";

var Layout = function Layout(_ref) {
  var children = _ref.children,
      mainTitle = _ref.mainTitle,
      canSigle = _ref.canSigle,
      footer = _ref.footer;
  return __jsx("body", {
    id: "top",
    "data-spy": "scroll",
    "data-target": ".navbar-collapse",
    "data-offset": "50",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 3
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    canInfo: {
      canSigle: "Welcome to Centre Ambulancier National(CAN)",
      canTel: "3711-01-10",
      canHoraire: "6:00 AM - 6:00 PM (Mon-Fri)",
      canMail: "cann116@mspp.gouv.ht"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }), children, __jsx("section", {
    "class": "navbar navbar-default navbar-static-top",
    role: "navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "navbar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 16
    }
  }, __jsx("button", {
    "class": "navbar-toggle",
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }, __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 26
    }
  }), __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 26
    }
  }), __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 26
    }
  })), __jsx("a", {
    href: "index.html",
    "class": "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("i", {
    "class": "fa fa-h-square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 63
    }
  }), "ealth Center")), __jsx("div", {
    "class": "collapse navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 16
    }
  }, __jsx("ul", {
    "class": "nav navbar-nav navbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#home",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 30
    }
  }, "Home")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#about",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 30
    }
  }, "About Us")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#team",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 30
    }
  }, "Doctors")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#news",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 30
    }
  }, "News")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#google-map",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 30
    }
  }, "Contact")), __jsx("li", {
    "class": "appointment-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 26
    }
  }, __jsx("a", {
    href: "#appointment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 54
    }
  }, "Make an appointment")))))), __jsx("section", {
    id: "home",
    "class": "slider",
    "data-stellar-background-ratio": "0.5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 6
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 16
    }
  }, __jsx("div", {
    "class": "owl-carousel owl-theme",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 26
    }
  }, __jsx("div", {
    "class": "item item-first",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 31
    }
  }, __jsx("div", {
    "class": "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 36
    }
  }, __jsx("div", {
    "class": "col-md-offset-1 col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 41
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 46
    }
  }, "Let's make your life happier"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 46
    }
  }, "Healthy Living"), __jsx("a", {
    href: "#team",
    "class": "section-btn btn btn-default smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 46
    }
  }, "Meet Our Doctors")))), __jsx("div", {
    "class": "item item-second",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 31
    }
  }, __jsx("div", {
    "class": "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 36
    }
  }, __jsx("div", {
    "class": "col-md-offset-1 col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 41
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 46
    }
  }, "Aenean luctus lobortis tellus"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 46
    }
  }, "New Lifestyle"), __jsx("a", {
    href: "#about",
    "class": "section-btn btn btn-default btn-gray smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 46
    }
  }, "More About Us")))), __jsx("div", {
    "class": "item item-third",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 31
    }
  }, __jsx("div", {
    "class": "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 36
    }
  }, __jsx("div", {
    "class": "col-md-offset-1 col-md-10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 41
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 46
    }
  }, "Pellentesque nec libero nisi"), __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 46
    }
  }, "Your Health Benefits"), __jsx("a", {
    href: "#news",
    "class": "section-btn btn btn-default btn-blue smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 46
    }
  }, "Read Stories")))))))), __jsx("section", {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 6
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 16
    }
  }, __jsx("div", {
    "class": "col-md-6 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("div", {
    "class": "about-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 26
    }
  }, __jsx("h2", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.6s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 31
    }
  }, "Welcome to Your ", __jsx("i", {
    "class": "fa fa-h-square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 94
    }
  }), "ealth Center"), __jsx("div", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.8s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 31
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 36
    }
  }, "Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 36
    }
  }, "Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.")), __jsx("figure", {
    "class": "profile wow fadeInUp",
    "data-wow-delay": "1s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 31
    }
  }, __jsx("img", {
    src: "images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 36
    }
  }), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 36
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 41
    }
  }, "Dr. Neil Jackson"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 41
    }
  }, "General Principal")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=about.js.ae33e2db94dba04210fe.hot-update.js.map