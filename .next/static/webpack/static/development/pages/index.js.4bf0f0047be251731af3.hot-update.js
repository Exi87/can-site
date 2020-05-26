webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\CAN116\\Desktop\\hello-next\\components\\layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //import Spinner from "./spinner";
//import Menu from "./menu";

var homeImage = {};

var Layout = function Layout(_ref) {
  var children = _ref.children,
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
      lineNumber: 10,
      columnNumber: 3
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    canInfo: {
      canSigle: "Bienvenue au Centre Ambulancier National(CAN)",
      canTel: "116",
      canHoraire: "24 sur 24(Lun-Dim)",
      canMail: "cann116@mspp.gouv.ht"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), children, __jsx("section", {
    "class": "navbar navbar-default navbar-static-top ",
    role: "navigation",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "navbar-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("button", {
    "class": "navbar-toggle",
    "data-toggle": "collapse",
    "data-target": ".navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("span", {
    "class": "icon icon-bar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  })), __jsx("a", {
    href: "index.html",
    "class": "navbar-brand",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx("i", {
    "class": "fa ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }), "CAN")), __jsx("div", {
    "class": "collapse navbar-collapse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("ul", {
    "class": "nav navbar-nav navbar-right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#about",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, "A propos")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#news",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, "Nos Sections")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#google-map",
    "class": "smoothScroll",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Contact")), __jsx("li", {
    "class": "appointment-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "#appointment",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Make an appointment")))))), __jsx("section", {
    id: "about",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "col-md-6 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "about-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, __jsx("h2", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.6s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  }, "Bienvenue au Centre ", __jsx("i", {
    "class": "fa fa-a-square",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 37
    }
  }), "Ambulancier National"), __jsx("div", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.8s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  }, "Aenean luctus lobortis tellus, vel ornare enim molestie condimentum. Curabitur lacinia nisi vitae velit volutpat venenatis."), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }, "Sed a dignissim lacus. Quisque fermentum est non orci commodo, a luctus urna mattis. Ut placerat, diam a tempus vehicula.")), __jsx("figure", {
    "class": "profile wow fadeInUp",
    "data-wow-delay": "1s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }), __jsx("figcaption", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, "Dr. Herold Didie Louis"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 19
    }
  }, "Directeur Principal")))))))), __jsx("section", {
    id: "news",
    "data-stellar-background-ratio": "2.5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "col-md-12 col-sm-12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "section-title wow fadeInUp",
    "data-wow-delay": "0.1s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 15
    }
  }, "Sections"))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image1.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 19
    }
  }, " ", "Section flotte")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 21
    }
  }, "Exinord")))))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image1.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 19
    }
  }, " ", "Section flotte")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }, "Exinord")))))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image1.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }, " ", "Section flotte")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 21
    }
  }, "Exinord")))))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image1.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 19
    }
  }, " ", "Section flotte")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 21
    }
  }, "Exinord")))))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image1.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    style: {},
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 19
    }
  }, " ", "Section flotte")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 366,
      columnNumber: 21
    }
  }, "Exinord")))))), __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "news-thumb wow fadeInUp",
    "data-wow-delay": "0.6s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376,
      columnNumber: 15
    }
  }, __jsx("img", {
    src: "/static/images/news-image2.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377,
      columnNumber: 17
    }
  })), __jsx("div", {
    "class": "news-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 15
    }
  }, __jsx("h3", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 19
    }
  }, "Centre d'appel")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 17
    }
  }, "Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam et est ligula.", __jsx("a", {
    href: "news-detail.html",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
      columnNumber: 33
    }
  }, " Lire la suite")), __jsx("div", {
    "class": "author",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "/static/images/author-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 19
    }
  }), __jsx("div", {
    "class": "author-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 21
    }
  }, "Responsable"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400,
      columnNumber: 21
    }
  }, "Werley"))))))))), __jsx("section", {
    id: "google-map",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 5
    }
  }, __jsx("iframe", {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.679798714529!2d-72.30740108563094!3d18.543366473317583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb9e7963a3a5a41%3A0x4839bd0dc1e7944b!2sCentre%20Ambulancier%20National!5e0!3m2!1sfr!2sht!4v1590506454383!5m2!1sfr!2sht",
    style: {
      width: '600',
      height: "450",
      frameBorder: "0",
      allowFullScreen: "",
      ariaHidden: "false",
      tabindex: "0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 7
    }
  })), __jsx("footer", {
    "data-stellar-background-ratio": "5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 5
    }
  }, __jsx("div", {
    "class": "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 7
    }
  }, __jsx("div", {
    "class": "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439,
      columnNumber: 9
    }
  }, __jsx("div", {
    "class": "col-md-4 col-sm-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "footer-thumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441,
      columnNumber: 13
    }
  }, __jsx("h4", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 15
    }
  }, "Contact Info"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 15
    }
  }, "Fusce at libero iaculis, venenatis augue quis, pharetra lorem. Curabitur ut dolor eu elit consequat ultricies."), __jsx("div", {
    "class": "contact-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-phone",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452,
      columnNumber: 19
    }
  }), " 010-070-0170"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-envelope-o",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 455,
      columnNumber: 19
    }
  }), " ", __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 19
    }
  }, "info@company.com"))))), __jsx("div", {
    "class": "col-md-4 col-sm-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "footer-thumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 13
    }
  }, __jsx("h4", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 15
    }
  }, "Latest News"), __jsx("div", {
    "class": "latest-stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467,
      columnNumber: 15
    }
  }, __jsx("div", {
    "class": "stories-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 469,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/static/images/news-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470,
      columnNumber: 21
    }
  }))), __jsx("div", {
    "class": "stories-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479,
      columnNumber: 21
    }
  }, "Amazing Technology")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 481,
      columnNumber: 19
    }
  }, "March 08, 2018"))), __jsx("div", {
    "class": "latest-stories",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 485,
      columnNumber: 15
    }
  }, __jsx("div", {
    "class": "stories-image",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 486,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 487,
      columnNumber: 19
    }
  }, __jsx("img", {
    src: "/static/images/news-image.jpg",
    "class": "img-responsive",
    alt: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 488,
      columnNumber: 21
    }
  }))), __jsx("div", {
    "class": "stories-info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496,
      columnNumber: 19
    }
  }, __jsx("h5", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 497,
      columnNumber: 21
    }
  }, "New Healing Process")), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 499,
      columnNumber: 19
    }
  }, "February 20, 2018"))))), __jsx("div", {
    "class": "col-md-4 col-sm-4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 505,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "footer-thumb",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 506,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "opening-hours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 507,
      columnNumber: 15
    }
  }, __jsx("h4", {
    "class": "wow fadeInUp",
    "data-wow-delay": "0.4s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 17
    }
  }, "Opening Hours"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511,
      columnNumber: 17
    }
  }, "Monday - Friday ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 35
    }
  }, "06:00 AM - 10:00 PM")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514,
      columnNumber: 17
    }
  }, "Saturday ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 515,
      columnNumber: 28
    }
  }, "09:00 AM - 08:00 PM")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517,
      columnNumber: 17
    }
  }, "Sunday ", __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 518,
      columnNumber: 26
    }
  }, "Closed"))), __jsx("ul", {
    "class": "social-icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    "class": "fa fa-facebook-square",
    attr: "facebook icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    "class": "fa fa-twitter",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 531,
      columnNumber: 19
    }
  })), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "#",
    "class": "fa fa-instagram",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534,
      columnNumber: 19
    }
  }))))), __jsx("div", {
    "class": "col-md-12 col-sm-12 border-top",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 11
    }
  }, __jsx("div", {
    "class": "col-md-4 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "copyright-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 542,
      columnNumber: 15
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 543,
      columnNumber: 17
    }
  }, "Copyright \xA9 2020 Exi.solution | Designer: Ing Marc Erold"))), __jsx("div", {
    "class": "col-md-6 col-sm-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "footer-link",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 549,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 550,
      columnNumber: 17
    }
  }, "Twitter"), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551,
      columnNumber: 17
    }
  }, "Instagram"), __jsx("a", {
    href: "https://www.facebook.com/MSPPCAN116",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552,
      columnNumber: 17
    }
  }, "Facebook"), __jsx("a", {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 555,
      columnNumber: 17
    }
  }, "Careers"))), __jsx("div", {
    "class": "col-md-2 col-sm-2 text-align-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 13
    }
  }, __jsx("div", {
    "class": "angle-up-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "#top",
    "class": "smoothScroll wow fadeInUp",
    "data-wow-delay": "1.2s",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560,
      columnNumber: 17
    }
  }, __jsx("i", {
    "class": "fa fa-angle-up",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565,
      columnNumber: 19
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);
{
  /*
     <section id="team" data-stellar-background-ratio="1">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6">
            <div class="about-info">
              <h2 class="wow fadeInUp" data-wow-delay="0.1s">
                Nos Sections
              </h2>
            </div>
          </div>
            <div class="clearfix"></div>
            <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.2s">
              <img
                src="static/images/team-image1.jpg"
                class="img-responsive"
                alt=""
              />
                <div class="team-info">
                <h3>Flotte</h3>
                <p>General Principal</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-020-0120
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">general@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <h3>Flotte</h3>
                   <a href="#" class="fa fa-linkedin-square"></a> 
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.4s">
              <img
                src="static/images/team-image2.jpg"
                class="img-responsive"
                alt=""
              />
                <div class="team-info">
                <h3>Jason Stewart</h3>
                <p>Pregnancy</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-070-0170
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">pregnancy@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <a href="#" class="fa fa-facebook-square"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-flickr"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
            <div class="col-md-4 col-sm-6">
            <div class="team-thumb wow fadeInUp" data-wow-delay="0.6s">
              <img
                src="static/images/team-image3.jpg"
                class="img-responsive"
                alt=""
              />
                <div class="team-info">
                <h3>Miasha Nakahara</h3>
                <p>Cardiology</p>
                <div class="team-contact-info">
                  <p>
                    <i class="fa fa-phone"></i> 010-040-0140
                  </p>
                  <p>
                    <i class="fa fa-envelope-o"></i>{" "}
                    <a href="#">cardio@company.com</a>
                  </p>
                </div>
                <ul class="social-icon">
                  <li>
                    <a href="#" class="fa fa-twitter"></a>
                  </li>
                  <li>
                    <a href="#" class="fa fa-envelope-o"></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
  
  
  
  
         <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/garage.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Garage</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Logistique</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Saintyl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
            <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Information et Communication</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="news-thumb wow fadeInUp" data-wow-delay="0.8s">
              <a href="news-detail.html">
                <img
                  src="/static/images/news-image3.jpg"
                  class="img-responsive"
                  alt=""
                />
              </a>
              <div class="news-info">
                <span>January 27, 2018</span>
                <h3>
                  <a href="news-detail.html">Garage</a>
                </h3>
                <p>
                  Fusce vel sem finibus, rhoncus massa non, aliquam velit. Nam
                  et est ligula.<a href="news-detail.html"> Lire la suite</a>
                </p>
                <div class="author">
                  <img
                    src="/static/images/author-image.jpg"
                    class="img-responsive"
                    alt=""
                  />
                  <div class="author-info">
                    <h5>Responsable</h5>
                    <p>Cepler</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          
  */
  //section
}

/***/ })

})
//# sourceMappingURL=index.js.4bf0f0047be251731af3.hot-update.js.map