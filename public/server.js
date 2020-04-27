/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/apolloServer.js":
/*!*****************************!*\
  !*** ./api/apolloServer.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ \"./api/schema/index.js\");\nfunction _templateObject() {\n  var data = _taggedTemplateLiteral([\"\\n  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.\\n\\n  # This \\\"Book\\\" type defines the queryable fields for every book in our data source.\\n  type Book {\\n    title: String\\n    author: String\\n  }\\n\\n  # The \\\"Query\\\" type is special: it lists all of the available queries that\\n  # clients can execute, along with the return type for each. In this\\n  # case, the \\\"books\\\" query returns an array of zero or more Books (defined above).\\n  type Query {\\n    books: [Book]\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"api:graphql\");\ndebug(\"setting up apollo configuration\");\n\nvar ProtectedApolloServer =\n/*#__PURE__*/\nfunction (_ApolloServer) {\n  _inherits(ProtectedApolloServer, _ApolloServer);\n\n  function ProtectedApolloServer() {\n    _classCallCheck(this, ProtectedApolloServer);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(ProtectedApolloServer).apply(this, arguments));\n  }\n\n  return ProtectedApolloServer;\n}(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"ApolloServer\"]);\n\nvar typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"gql\"])(_templateObject());\nvar _books = [{\n  title: \"Harry Potter and the Chamber of Secrets\",\n  author: \"J.K. Rowling\"\n}, {\n  title: \"Jurassic Park\",\n  author: \"Michael Crichton\"\n}]; // Resolvers define the technique for fetching the types defined in the\n// schema. This resolver retrieves books from the \"books\" array above.\n\nvar resolvers = {\n  Query: {\n    books: function books() {\n      return _books;\n    }\n  }\n};\nvar apolloServer = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__[\"ApolloServer\"]({\n  schema: _schema__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  context: function context(_ref) {\n    var req = _ref.req,\n        res = _ref.res;\n    return {\n      req: req\n    };\n  },\n  playground:  true && {\n    settings: {\n      \"editor.theme\": \"light\"\n    },\n    tabs: [{\n      // endpoint: \"https://e-toy-server.herokuapp.com/api\",\n      endpoint: \"http://localhost:4000/api\"\n    }]\n  },\n  introspection: \"development\" !== \"production\"\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (apolloServer);\n\n//# sourceURL=webpack:///./api/apolloServer.js?");

/***/ }),

/***/ "./api/index.js":
/*!**********************!*\
  !*** ./api/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../webpack.config.js */ \"./webpack.config.js\");\n/* harmony import */ var _webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apolloServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apolloServer */ \"./api/apolloServer.js\");\n/* harmony import */ var _shared_db_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/db/db */ \"./shared/db/db.js\");\n\n\n\n\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_2___default()(\"api\");\ndebug(\"logging with debug enabled :-)\");\ndebug(\"Starting Server <-->\");\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nvar port = process.env.PORT ? parseInt(process.env.PORT, 10) : 4000;\nvar compiler = webpack__WEBPACK_IMPORTED_MODULE_3___default()(_webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default.a);\napp.use(compression__WEBPACK_IMPORTED_MODULE_1___default()());\napp.use(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_4___default()(compiler, {\n  publicPath: _webpack_config_js__WEBPACK_IMPORTED_MODULE_5___default.a.output.publicPath\n}));\nObject(_shared_db_db__WEBPACK_IMPORTED_MODULE_7__[\"connectMongoDB\"])().then(function (db) {\n  debug(\"connection db object \".concat(db));\n  _apolloServer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].applyMiddleware({\n    app: app,\n    path: \"/api\"\n  });\n  _apolloServer__WEBPACK_IMPORTED_MODULE_6__[\"default\"].context = function (_ref) {\n    var req = _ref.req,\n        res = _ref.res;\n    return {\n      req: req,\n      db: db\n    };\n  }, app.listen(port, function () {\n    return debug(\"GraphQL Server running on port \".concat(port, \"/api\"));\n  });\n});\n\n//# sourceURL=webpack:///./api/index.js?");

/***/ }),

/***/ "./api/queries/product/all-products.js":
/*!*********************************************!*\
  !*** ./api/queries/product/all-products.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_db_queries_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/db/queries/product */ \"./shared/db/queries/product.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_, __, _ref) {\n  var db = _ref.db;\n  return Object(_shared_db_queries_product__WEBPACK_IMPORTED_MODULE_0__[\"getAllProducts\"])(db)();\n});\n\n//# sourceURL=webpack:///./api/queries/product/all-products.js?");

/***/ }),

/***/ "./api/queries/product/collections.js":
/*!********************************************!*\
  !*** ./api/queries/product/collections.js ***!
  \********************************************/
/*! exports provided: collections, collectionByTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collections\", function() { return collections; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"collectionByTitle\", function() { return collectionByTitle; });\n/* harmony import */ var _shared_db_queries_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/db/queries/product */ \"./shared/db/queries/product.js\");\n\nvar collections = function collections(_, __, _ref) {\n  var db = _ref.db;\n  return Object(_shared_db_queries_product__WEBPACK_IMPORTED_MODULE_0__[\"getAllCollections\"])(db)();\n};\nvar collectionByTitle = function collectionByTitle(_, _ref2, _ref3) {\n  var title = _ref2.title;\n  var db = _ref3.db;\n  return Object(_shared_db_queries_product__WEBPACK_IMPORTED_MODULE_0__[\"getCollectionByTitle\"])(title, db)();\n};\n\n//# sourceURL=webpack:///./api/queries/product/collections.js?");

/***/ }),

/***/ "./api/queries/product/index.js":
/*!**************************************!*\
  !*** ./api/queries/product/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _all_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-products */ \"./api/queries/product/all-products.js\");\n/* harmony import */ var _collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./collections */ \"./api/queries/product/collections.js\");\n\n\nvar ProductQueries = {\n  Query: {\n    getAllProducts: _all_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    collections: _collections__WEBPACK_IMPORTED_MODULE_1__[\"collections\"],\n    collectionByTitle: _collections__WEBPACK_IMPORTED_MODULE_1__[\"collectionByTitle\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductQueries);\n\n//# sourceURL=webpack:///./api/queries/product/index.js?");

/***/ }),

/***/ "./api/queries/user/all-users.js":
/*!***************************************!*\
  !*** ./api/queries/user/all-users.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared_db_queries_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/db/queries/user */ \"./shared/db/queries/user.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (_, __, _ref) {\n  var db = _ref.db;\n  return Object(_shared_db_queries_user__WEBPACK_IMPORTED_MODULE_0__[\"getAllUsers\"])(db)();\n});\n\n//# sourceURL=webpack:///./api/queries/user/all-users.js?");

/***/ }),

/***/ "./api/queries/user/current-user.js":
/*!******************************************!*\
  !*** ./api/queries/user/current-user.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (args) {\n  if (args.id) return args.loaders.user.load(args.id);\n  if (args.username) return loaders.userByUsername.load(args.username);\n  return null;\n});\n\n//# sourceURL=webpack:///./api/queries/user/current-user.js?");

/***/ }),

/***/ "./api/queries/user/index.js":
/*!***********************************!*\
  !*** ./api/queries/user/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _current_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-user */ \"./api/queries/user/current-user.js\");\n/* harmony import */ var _all_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-users */ \"./api/queries/user/all-users.js\");\n\n\nvar UserQueries = {\n  Query: {\n    currentUser: _current_user__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    getAllUsers: _all_users__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserQueries);\n\n//# sourceURL=webpack:///./api/queries/user/index.js?");

/***/ }),

/***/ "./api/schema/index.js":
/*!*****************************!*\
  !*** ./api/schema/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tools */ \"graphql-tools\");\n/* harmony import */ var graphql_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tools__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types */ \"./api/types/index.js\");\n/* harmony import */ var _queries_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queries/user */ \"./api/queries/user/index.js\");\n/* harmony import */ var _queries_product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/product */ \"./api/queries/product/index.js\");\n\n\n\n\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_0___default()(\"api:schema\");\ndebug(\"creating schema for graphql\");\nvar IS_PROD = \"development\" === \"production\";\nvar ROOT = \"\\ntype Query{\\n    dummy:String\\n}\\ntype Mutation{\\n    dummy:String\\n}\\nschema{\\n    query:Query\\n    mutation:Mutation\\n}\\n\";\nvar resolvers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"merge\"])({}, _queries_user__WEBPACK_IMPORTED_MODULE_4__[\"default\"], _queries_product__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar schema = Object(graphql_tools__WEBPACK_IMPORTED_MODULE_1__[\"makeExecutableSchema\"])({\n  typeDefs: [ROOT, _types__WEBPACK_IMPORTED_MODULE_3__[\"User\"], _types__WEBPACK_IMPORTED_MODULE_3__[\"Product\"], _types__WEBPACK_IMPORTED_MODULE_3__[\"Collection\"], _types__WEBPACK_IMPORTED_MODULE_3__[\"Vendor\"]],\n  resolvers: resolvers\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (schema);\n\n//# sourceURL=webpack:///./api/schema/index.js?");

/***/ }),

/***/ "./api/types/collection.js":
/*!*********************************!*\
  !*** ./api/types/collection.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Collection = \"\\n    type Collection{\\n        _id:ID!\\n        title:String!\\n        subCategory:[String]\\n        imageUrl:String\\n    }\\n\\n    extend type Query{\\n        collections:[Collection]\\n        collectionByTitle(title:String):Collection\\n    }\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Collection);\n\n//# sourceURL=webpack:///./api/types/collection.js?");

/***/ }),

/***/ "./api/types/index.js":
/*!****************************!*\
  !*** ./api/types/index.js ***!
  \****************************/
/*! exports provided: User, Product, Collection, Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ \"./api/types/user.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"User\", function() { return _user__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product */ \"./api/types/product.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Product\", function() { return _product__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./collection */ \"./api/types/collection.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Collection\", function() { return _collection__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vendor */ \"./api/types/vendor.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Vendor\", function() { return _vendor__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./api/types/index.js?");

/***/ }),

/***/ "./api/types/product.js":
/*!******************************!*\
  !*** ./api/types/product.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ */ \"./api/types/index.js\");\n\nvar Product = \"\\n    type Product{\\n        id:ID!\\n        title:String!\\n        category:String\\n        subCategory:String\\n        price:Float!\\n        oldPrice:Float\\n        imageUrl:String!\\n        description:String\\n        _vendorID:Vendor\\n        rating:Float\\n        isOutOfStock:Boolean!\\n    }\\n\\n    extend type Query{\\n        getAllProducts:[Product]\\n        getProductsByCategory:[Product]\\n    }\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\n\n//# sourceURL=webpack:///./api/types/product.js?");

/***/ }),

/***/ "./api/types/user.js":
/*!***************************!*\
  !*** ./api/types/user.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar User = \"\\n    type User{\\n        id:ID!\\n        name:String\\n        firstName:String\\n        lastName:String\\n        userName:String\\n        email:String\\n        password:String\\n        profilePhoto:String\\n        coverPhoto:String,\\n        gender:String\\n        dob:String\\n        isOnline:Boolean\\n    }\\n\\n    extend type Query{\\n        user(id:ID,userName:String,firstName:String,lastName:String):User\\n        currentUser:User\\n        searchUsers(searchQry:String):[User]\\n        getAllUsers:[User]\\n    }\\n\\n    extend type Mutation{\\n        addUser(firstName:String,lastName:String,userName:String,email:String,password:String):User\\n    }\\n\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n\n//# sourceURL=webpack:///./api/types/user.js?");

/***/ }),

/***/ "./api/types/vendor.js":
/*!*****************************!*\
  !*** ./api/types/vendor.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Vendor = \"\\n    type Vendor{\\n        id:String!\\n        name:String!\\n        comapnyName:String!\\n        email:String!\\n        password:String!\\n        mobileNo:String!\\n        isApproved:Boolean!\\n    }\\n\\n\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vendor);\n\n//# sourceURL=webpack:///./api/types/vendor.js?");

/***/ }),

/***/ "./shared/db/create-query.js":
/*!***********************************!*\
  !*** ./shared/db/create-query.js ***!
  \***********************************/
/*! exports provided: createReadQuery, createWriteQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createReadQuery\", function() { return createReadQuery; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createWriteQuery\", function() { return createWriteQuery; });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar createReadQuery = function createReadQuery(callback) {\n  return (\n    /*#__PURE__*/\n    _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee() {\n      var input, result;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              input = callback();\n              _context.next = 4;\n              return input.query;\n\n            case 4:\n              result = _context.sent;\n              return _context.abrupt(\"return\", result);\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(\"Error\", _context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }))\n  );\n};\nvar createWriteQuery = function createWriteQuery(callback) {\n  return (\n    /*#__PURE__*/\n    _asyncToGenerator(\n    /*#__PURE__*/\n    regeneratorRuntime.mark(function _callee2() {\n      var input, result;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              input = callback();\n              _context2.next = 4;\n              return input.query;\n\n            case 4:\n              result = _context2.sent;\n\n              if (!(typeof result.run === \"function\")) {\n                _context2.next = 7;\n                break;\n              }\n\n              throw new Error(\"Error in write query\");\n\n            case 7:\n              return _context2.abrupt(\"return\", result);\n\n            case 10:\n              _context2.prev = 10;\n              _context2.t0 = _context2[\"catch\"](0);\n              console.log(\"Error\", _context2.t0);\n\n            case 13:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 10]]);\n    }))\n  );\n};\n\n//# sourceURL=webpack:///./shared/db/create-query.js?");

/***/ }),

/***/ "./shared/db/db.js":
/*!*************************!*\
  !*** ./shared/db/db.js ***!
  \*************************/
/*! exports provided: connectMongoDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"connectMongoDB\", function() { return connectMongoDB; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar debug = debug__WEBPACK_IMPORTED_MODULE_1___default()(\"shared:db\");\nvar url = \"mongodb+srv://Roshan:Roshan@kamastracluster-f52fh.mongodb.net\";\nvar db = null;\nvar connectMongoDB = function connectMongoDB() {\n  if (db) {\n    return db;\n  }\n\n  return mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect(url).then(function (client) {\n    debug(\"connected successfully to mongodb\", client);\n    return db = client.db(\"Kamastra\");\n  })[\"catch\"](function (error) {\n    return debug(\"Error connecting to mongodb \".concat(error));\n  });\n};\n\n//# sourceURL=webpack:///./shared/db/db.js?");

/***/ }),

/***/ "./shared/db/index.js":
/*!****************************!*\
  !*** ./shared/db/index.js ***!
  \****************************/
/*! exports provided: createReadQuery, createWriteQuery, connectMongoDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-query */ \"./shared/db/create-query.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createReadQuery\", function() { return _create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createWriteQuery\", function() { return _create_query__WEBPACK_IMPORTED_MODULE_0__[\"createWriteQuery\"]; });\n\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./db */ \"./shared/db/db.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"connectMongoDB\", function() { return _db__WEBPACK_IMPORTED_MODULE_1__[\"connectMongoDB\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./shared/db/index.js?");

/***/ }),

/***/ "./shared/db/queries/product.js":
/*!**************************************!*\
  !*** ./shared/db/queries/product.js ***!
  \**************************************/
/*! exports provided: getAllProducts, getAllCollections, getProductsByCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllProducts\", function() { return getAllProducts; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllCollections\", function() { return getAllCollections; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductsByCategory\", function() { return getProductsByCategory; });\n/* harmony import */ var _create_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../create-query */ \"./shared/db/create-query.js\");\n\nvar getAllProducts = function getAllProducts(db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"products\").find({}).toArray().then(function (res) {\n        return res;\n      })\n    };\n  });\n};\nvar getAllCollections = function getAllCollections(db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"categories\").find({}).toArray().then(function (res) {\n        return res;\n      })\n    };\n  });\n};\nvar getProductsByCategory = function getProductsByCategory(category, db) {\n  return Object(_create_query__WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"products\").find({\n        category: category\n      }).toArray().then(function (res) {\n        return res[0];\n      })\n    };\n  });\n};\n\n//# sourceURL=webpack:///./shared/db/queries/product.js?");

/***/ }),

/***/ "./shared/db/queries/user.js":
/*!***********************************!*\
  !*** ./shared/db/queries/user.js ***!
  \***********************************/
/*! exports provided: getUserByEmail, getAllUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUserByEmail\", function() { return getUserByEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllUsers\", function() { return getAllUsers; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ \"./shared/db/index.js\");\n\nvar getUserByEmail = Object(___WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function (userObj) {\n  if (userObj[0] === \"{\") {\n    var user = JSON.parse(userObj);\n\n    if (user.email) {\n      return {\n        query: Object(___WEBPACK_IMPORTED_MODULE_0__[\"connectMongoDB\"])().users.find({\n          email: user.email\n        })\n      };\n    }\n  }\n});\nvar getAllUsers = function getAllUsers(db) {\n  return Object(___WEBPACK_IMPORTED_MODULE_0__[\"createReadQuery\"])(function () {\n    return {\n      query: db.collection(\"users\").find({}).toArray().then(function (res) {\n        return res.map(function (user) {\n          return {\n            email: user.email\n          };\n        });\n      })\n    };\n  });\n};\n\n//# sourceURL=webpack:///./shared/db/queries/user.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__(/*! path */ \"path\");\n\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\"); // const htmlWebpackPlugin = require(\"html-webpack-plugin\");\n\n\nmodule.exports = {\n  entry: {\n    server: [\"@babel/polyfill\", \"./api/index.js\"]\n  },\n  output: {\n    path: path.resolve(__dirname, \"public\"),\n    publicPath: \"/\",\n    filename: \"[name].js\"\n  },\n  target: \"node\",\n  mode:  false ? undefined : \"development\",\n  module: {\n    rules: [{\n      test: /\\.(js|jsx)$/,\n      exclude: /node_nodules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }, {\n      test: /\\.html/,\n      loader: \"html-loader\"\n    }]\n  },\n  externals: [nodeExternals()],\n  plugins: [// new htmlWebpackPlugin({\n    //   template: \"./index.html\"\n    // })\n  ]\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.config.js?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi @babel/polyfill ./api/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"@babel/polyfill\");\nmodule.exports = __webpack_require__(/*! ./api/index.js */\"./api/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./api/index.js?");

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/polyfill\");\n\n//# sourceURL=webpack:///external_%22@babel/polyfill%22?");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-express\");\n\n//# sourceURL=webpack:///external_%22apollo-server-express%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "graphql-tools":
/*!********************************!*\
  !*** external "graphql-tools" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-tools\");\n\n//# sourceURL=webpack:///external_%22graphql-tools%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });