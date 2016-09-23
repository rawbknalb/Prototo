/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function () {
	    Vue.use(__webpack_require__(1).default);
	    Vue.use(__webpack_require__(2));

	    var VueRouter = __webpack_require__(43);
	    Vue.use(VueRouter);

	    var settings = {}; //{history: true};
	    var router = new VueRouter(settings);

	    router.map({
	        '/': {
	            component: __webpack_require__(44)
	        },
	        '/:id': {
	            component: __webpack_require__(47)
	        }//,
	        // '*': {
	        //     component: require('./components/public/Assessments.vue')
	        // }
	    });

	    router.start({}, '#public');

	};
	Vue.ready(module.exports);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("VueMdl", [], factory);
		else if(typeof exports === 'object')
			exports["VueMdl"] = factory();
		else
			root["VueMdl"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.MdlDialog = exports.MdlSelect = exports.MdlSnackbar = exports.MdlCard = exports.MdlMenuItem = exports.MdlMenu = exports.MdlTooltip = exports.MdlTextfield = exports.MdlSlider = exports.MdlSpinner = exports.MdlProgress = exports.MdlAnchorButton = exports.MdlButton = exports.MdlIconToggle = exports.MdlRadio = exports.MdlSwitch = exports.MdlCheckbox = exports.MdlRippleEffect = exports.MdlBadge = exports.Mdl = exports.directives = exports.components = undefined;
		
		var _keys = __webpack_require__(1);
		
		var _keys2 = _interopRequireDefault(_keys);
		
		var _badge = __webpack_require__(36);
		
		var _badge2 = _interopRequireDefault(_badge);
		
		var _mdl = __webpack_require__(37);
		
		var _mdl2 = _interopRequireDefault(_mdl);
		
		var _rippleEffect = __webpack_require__(38);
		
		var _rippleEffect2 = _interopRequireDefault(_rippleEffect);
		
		var _checkbox = __webpack_require__(39);
		
		var _checkbox2 = _interopRequireDefault(_checkbox);
		
		var _radio = __webpack_require__(43);
		
		var _radio2 = _interopRequireDefault(_radio);
		
		var _button = __webpack_require__(69);
		
		var _button2 = _interopRequireDefault(_button);
		
		var _anchorButton = __webpack_require__(73);
		
		var _anchorButton2 = _interopRequireDefault(_anchorButton);
		
		var _progress = __webpack_require__(76);
		
		var _progress2 = _interopRequireDefault(_progress);
		
		var _spinner = __webpack_require__(79);
		
		var _spinner2 = _interopRequireDefault(_spinner);
		
		var _iconToggle = __webpack_require__(82);
		
		var _iconToggle2 = _interopRequireDefault(_iconToggle);
		
		var _slider = __webpack_require__(85);
		
		var _slider2 = _interopRequireDefault(_slider);
		
		var _switch = __webpack_require__(88);
		
		var _switch2 = _interopRequireDefault(_switch);
		
		var _textfield = __webpack_require__(91);
		
		var _textfield2 = _interopRequireDefault(_textfield);
		
		var _tooltip = __webpack_require__(94);
		
		var _tooltip2 = _interopRequireDefault(_tooltip);
		
		var _menu = __webpack_require__(97);
		
		var _menu2 = _interopRequireDefault(_menu);
		
		var _menuItem = __webpack_require__(100);
		
		var _menuItem2 = _interopRequireDefault(_menuItem);
		
		var _card = __webpack_require__(103);
		
		var _card2 = _interopRequireDefault(_card);
		
		var _snackbar = __webpack_require__(106);
		
		var _snackbar2 = _interopRequireDefault(_snackbar);
		
		var _select = __webpack_require__(109);
		
		var _select2 = _interopRequireDefault(_select);
		
		var _dialog = __webpack_require__(116);
		
		var _dialog2 = _interopRequireDefault(_dialog);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var components = exports.components = {
		  MdlCheckbox: _checkbox2.default,
		  MdlSwitch: _switch2.default,
		  MdlIconToggle: _iconToggle2.default,
		  MdlRadio: _radio2.default,
		  MdlProgress: _progress2.default,
		  MdlButton: _button2.default,
		  MdlAnchorButton: _anchorButton2.default,
		  MdlSpinner: _spinner2.default,
		  MdlSlider: _slider2.default,
		  MdlTextfield: _textfield2.default,
		  MdlTooltip: _tooltip2.default,
		  MdlMenu: _menu2.default,
		  MdlMenuItem: _menuItem2.default,
		  MdlCard: _card2.default,
		  MdlSnackbar: _snackbar2.default,
		  MdlSelect: _select2.default,
		  MdlDialog: _dialog2.default
		};
		
		var directives = exports.directives = {
		  Mdl: _mdl2.default,
		  MdlBadge: _badge2.default,
		  MdlRippleEffect: _rippleEffect2.default
		};
		
		exports.default = {
		  install: function install(Vue) {
		    (0, _keys2.default)(components).forEach(function (name) {
		      Vue.component(name, components[name]);
		    });
		    (0, _keys2.default)(directives).forEach(function (name) {
		      Vue.directive(name, directives[name]);
		    });
		  }
		};
		exports.Mdl = _mdl2.default;
		exports.MdlBadge = _badge2.default;
		exports.MdlRippleEffect = _rippleEffect2.default;
		exports.MdlCheckbox = _checkbox2.default;
		exports.MdlSwitch = _switch2.default;
		exports.MdlRadio = _radio2.default;
		exports.MdlIconToggle = _iconToggle2.default;
		exports.MdlButton = _button2.default;
		exports.MdlAnchorButton = _anchorButton2.default;
		exports.MdlProgress = _progress2.default;
		exports.MdlSpinner = _spinner2.default;
		exports.MdlSlider = _slider2.default;
		exports.MdlTextfield = _textfield2.default;
		exports.MdlTooltip = _tooltip2.default;
		exports.MdlMenu = _menu2.default;
		exports.MdlMenuItem = _menuItem2.default;
		exports.MdlCard = _card2.default;
		exports.MdlSnackbar = _snackbar2.default;
		exports.MdlSelect = _select2.default;
		exports.MdlDialog = _dialog2.default;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(2), __esModule: true };

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(3);
		module.exports = __webpack_require__(23).Object.keys;

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 Object.keys(O)
		var toObject = __webpack_require__(4)
		  , $keys    = __webpack_require__(6);
		
		__webpack_require__(21)('keys', function(){
		  return function keys(it){
		    return $keys(toObject(it));
		  };
		});

	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.13 ToObject(argument)
		var defined = __webpack_require__(5);
		module.exports = function(it){
		  return Object(defined(it));
		};

	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.14 / 15.2.3.14 Object.keys(O)
		var $keys       = __webpack_require__(7)
		  , enumBugKeys = __webpack_require__(20);
		
		module.exports = Object.keys || function keys(O){
		  return $keys(O, enumBugKeys);
		};

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var has          = __webpack_require__(8)
		  , toIObject    = __webpack_require__(9)
		  , arrayIndexOf = __webpack_require__(12)(false)
		  , IE_PROTO     = __webpack_require__(16)('IE_PROTO');
		
		module.exports = function(object, names){
		  var O      = toIObject(object)
		    , i      = 0
		    , result = []
		    , key;
		  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
		  // Don't enum bug & hidden keys
		  while(names.length > i)if(has(O, key = names[i++])){
		    ~arrayIndexOf(result, key) || result.push(key);
		  }
		  return result;
		};

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(10)
		  , defined = __webpack_require__(5);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(11);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		var toString = {}.toString;
		
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		// false -> Array#indexOf
		// true  -> Array#includes
		var toIObject = __webpack_require__(9)
		  , toLength  = __webpack_require__(13)
		  , toIndex   = __webpack_require__(15);
		module.exports = function(IS_INCLUDES){
		  return function($this, el, fromIndex){
		    var O      = toIObject($this)
		      , length = toLength(O.length)
		      , index  = toIndex(fromIndex, length)
		      , value;
		    // Array#includes uses SameValueZero equality algorithm
		    if(IS_INCLUDES && el != el)while(length > index){
		      value = O[index++];
		      if(value != value)return true;
		    // Array#toIndex ignores holes, Array#includes - not
		    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
		      if(O[index] === el)return IS_INCLUDES || index || 0;
		    } return !IS_INCLUDES && -1;
		  };
		};

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.15 ToLength
		var toInteger = __webpack_require__(14)
		  , min       = Math.min;
		module.exports = function(it){
		  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
		};

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		// 7.1.4 ToInteger
		var ceil  = Math.ceil
		  , floor = Math.floor;
		module.exports = function(it){
		  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
		};

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(14)
		  , max       = Math.max
		  , min       = Math.min;
		module.exports = function(index, length){
		  index = toInteger(index);
		  return index < 0 ? max(index + length, 0) : min(index, length);
		};

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var shared = __webpack_require__(17)('keys')
		  , uid    = __webpack_require__(19);
		module.exports = function(key){
		  return shared[key] || (shared[key] = uid(key));
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(18)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 18 */
	/***/ function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 19 */
	/***/ function(module, exports) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 20 */
	/***/ function(module, exports) {

		// IE 8- don't enum bug keys
		module.exports = (
		  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
		).split(',');

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		// most Object methods by ES6 should accept primitives
		var $export = __webpack_require__(22)
		  , core    = __webpack_require__(23)
		  , fails   = __webpack_require__(32);
		module.exports = function(KEY, exec){
		  var fn  = (core.Object || {})[KEY] || Object[KEY]
		    , exp = {};
		  exp[KEY] = exec(fn);
		  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
		};

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(18)
		  , core      = __webpack_require__(23)
		  , ctx       = __webpack_require__(24)
		  , hide      = __webpack_require__(26)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , expProto  = exports[PROTOTYPE]
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && target[key] !== undefined;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(a, b, c){
		        if(this instanceof C){
		          switch(arguments.length){
		            case 0: return new C;
		            case 1: return new C(a);
		            case 2: return new C(a, b);
		          } return new C(a, b, c);
		        } return C.apply(this, arguments);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
		    if(IS_PROTO){
		      (exports.virtual || (exports.virtual = {}))[key] = out;
		      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
		      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
		    }
		  }
		};
		// type bitmap
		$export.F = 1;   // forced
		$export.G = 2;   // global
		$export.S = 4;   // static
		$export.P = 8;   // proto
		$export.B = 16;  // bind
		$export.W = 32;  // wrap
		$export.U = 64;  // safe
		$export.R = 128; // real proto method for `library` 
		module.exports = $export;

	/***/ },
	/* 23 */
	/***/ function(module, exports) {

		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(25);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 25 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var dP         = __webpack_require__(27)
		  , createDesc = __webpack_require__(35);
		module.exports = __webpack_require__(31) ? function(object, key, value){
		  return dP.f(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject       = __webpack_require__(28)
		  , IE8_DOM_DEFINE = __webpack_require__(30)
		  , toPrimitive    = __webpack_require__(34)
		  , dP             = Object.defineProperty;
		
		exports.f = __webpack_require__(31) ? Object.defineProperty : function defineProperty(O, P, Attributes){
		  anObject(O);
		  P = toPrimitive(P, true);
		  anObject(Attributes);
		  if(IE8_DOM_DEFINE)try {
		    return dP(O, P, Attributes);
		  } catch(e){ /* empty */ }
		  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
		  if('value' in Attributes)O[P] = Attributes.value;
		  return O;
		};

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(29);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = !__webpack_require__(31) && !__webpack_require__(32)(function(){
		  return Object.defineProperty(__webpack_require__(33)('div'), 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(32)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(29)
		  , document = __webpack_require__(18).document
		  // in old IE typeof document.createElement is 'object'
		  , is = isObject(document) && isObject(document.createElement);
		module.exports = function(it){
		  return is ? document.createElement(it) : {};
		};

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.1.1 ToPrimitive(input [, PreferredType])
		var isObject = __webpack_require__(29);
		// instead of the ES6 spec version, we didn't implement @@toPrimitive case
		// and the second argument - flag - preferred type is a string
		module.exports = function(it, S){
		  if(!isObject(it))return it;
		  var fn, val;
		  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
		  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
		  throw TypeError("Can't convert object to primitive value");
		};

	/***/ },
	/* 35 */
	/***/ function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		var checkNumber = function checkNumber(num) {
		  num = parseInt(num, 10);
		  return num > 0;
		};
		
		var dataBadgeSetter = function dataBadgeSetter(hide, value) {
		  if (hide) {
		    this.el.removeAttribute('data-badge');
		  } else if (!this.isNumber || checkNumber(value)) {
		    this.el.setAttribute('data-badge', value);
		  } else {
		    this.el.removeAttribute('data-badge');
		  }
		};
		
		exports.default = {
		  bind: function bind() {
		    this.el.classList.add('mdl-badge');
		    if ('overlap' in this.modifiers) {
		      this.el.classList.add('mdl-badge--overlap');
		    }
		    if ('no-background' in this.modifiers) {
		      this.el.classList.add('mdl-badge--no-background');
		    }
		    this.isNumber = 'number' in this.modifiers;
		  },
		
		  params: ['hide-badge'],
		  paramWatchers: {
		    hideBadge: function hideBadge(hide) {
		      dataBadgeSetter.call(this, hide, this.value);
		    }
		  },
		  update: function update(value) {
		    this.value = value;
		    dataBadgeSetter.call(this, this.params.hideBadge, value);
		  }
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  bind: function bind() {
		    componentHandler.upgradeElements(this.el);
		  }
		};

	/***/ },
	/* 38 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  bind: function bind() {
		    this.el.classList.add('mdl-js-ripple-effect');
		  }
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(40)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/toggles/checkbox.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(42)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./checkbox.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _toggle = __webpack_require__(41);
		
		var _toggle2 = _interopRequireDefault(_toggle);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  ready: function ready() {
		    componentHandler.upgradeElements(this.$el);
		  },
		
		  mixins: [_toggle2.default]
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  props: {
		    checked: {
		      type: [Array, Boolean, Number],
		      required: true,
		      twoWay: true
		    },
		    disabled: {
		      required: false
		    },
		    id: String,
		    value: {
		      required: false
		    }
		  },
		  computed: {
		    isChecked: function isChecked() {
		      if (this.checked instanceof Array) {
		        return this.checked.indexOf(this.value) >= 0;
		      } else {
		        return this.checked;
		      }
		    }
		  }
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports) {

		module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-checkbox mdl-js-checkbox\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-checkbox__input\"/><span class=\"mdl-checkbox__label\"><slot></slot></span></label>";

	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(44)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/toggles/radio.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(68)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./radio.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    id: String,
		    name: String,
		    value: {
		      required: true
		    },
		    checked: {
		      required: true,
		      twoWay: true
		    },
		    disabled: {
		      fill: true
		    }
		  },
		  computed: {
		    isChecked: function isChecked() {
		      return this.checked === this.value;
		    }
		  },
		  ready: function ready() {
		    componentHandler.upgradeElements(this.$el);
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _keys = __webpack_require__(1);
		
		var _keys2 = _interopRequireDefault(_keys);
		
		var _getIterator2 = __webpack_require__(46);
		
		var _getIterator3 = _interopRequireDefault(_getIterator2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  beforeCompile: function beforeCompile() {
		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;
		
		    try {
		      for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this._props)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		        var prop = _step.value;
		
		        var data = this._props[prop];
		        if (data.options.fill && data.raw === '') {
		          this[prop] = prop;
		        }
		      }
		    } catch (err) {
		      _didIteratorError = true;
		      _iteratorError = err;
		    } finally {
		      try {
		        if (!_iteratorNormalCompletion && _iterator.return) {
		          _iterator.return();
		        }
		      } finally {
		        if (_didIteratorError) {
		          throw _iteratorError;
		        }
		      }
		    }
		  }
		};

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(47), __esModule: true };

	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(48);
		__webpack_require__(63);
		module.exports = __webpack_require__(65);

	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(49);
		var global        = __webpack_require__(18)
		  , hide          = __webpack_require__(26)
		  , Iterators     = __webpack_require__(52)
		  , TO_STRING_TAG = __webpack_require__(61)('toStringTag');
		
		for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
		  var NAME       = collections[i]
		    , Collection = global[NAME]
		    , proto      = Collection && Collection.prototype;
		  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
		  Iterators[NAME] = Iterators.Array;
		}

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var addToUnscopables = __webpack_require__(50)
		  , step             = __webpack_require__(51)
		  , Iterators        = __webpack_require__(52)
		  , toIObject        = __webpack_require__(9);
		
		// 22.1.3.4 Array.prototype.entries()
		// 22.1.3.13 Array.prototype.keys()
		// 22.1.3.29 Array.prototype.values()
		// 22.1.3.30 Array.prototype[@@iterator]()
		module.exports = __webpack_require__(53)(Array, 'Array', function(iterated, kind){
		  this._t = toIObject(iterated); // target
		  this._i = 0;                   // next index
		  this._k = kind;                // kind
		// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , kind  = this._k
		    , index = this._i++;
		  if(!O || index >= O.length){
		    this._t = undefined;
		    return step(1);
		  }
		  if(kind == 'keys'  )return step(0, index);
		  if(kind == 'values')return step(0, O[index]);
		  return step(0, [index, O[index]]);
		}, 'values');
		
		// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
		Iterators.Arguments = Iterators.Array;
		
		addToUnscopables('keys');
		addToUnscopables('values');
		addToUnscopables('entries');

	/***/ },
	/* 50 */
	/***/ function(module, exports) {

		module.exports = function(){ /* empty */ };

	/***/ },
	/* 51 */
	/***/ function(module, exports) {

		module.exports = function(done, value){
		  return {value: value, done: !!done};
		};

	/***/ },
	/* 52 */
	/***/ function(module, exports) {

		module.exports = {};

	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var LIBRARY        = __webpack_require__(54)
		  , $export        = __webpack_require__(22)
		  , redefine       = __webpack_require__(55)
		  , hide           = __webpack_require__(26)
		  , has            = __webpack_require__(8)
		  , Iterators      = __webpack_require__(52)
		  , $iterCreate    = __webpack_require__(56)
		  , setToStringTag = __webpack_require__(60)
		  , getPrototypeOf = __webpack_require__(62)
		  , ITERATOR       = __webpack_require__(61)('iterator')
		  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
		  , FF_ITERATOR    = '@@iterator'
		  , KEYS           = 'keys'
		  , VALUES         = 'values';
		
		var returnThis = function(){ return this; };
		
		module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
		  $iterCreate(Constructor, NAME, next);
		  var getMethod = function(kind){
		    if(!BUGGY && kind in proto)return proto[kind];
		    switch(kind){
		      case KEYS: return function keys(){ return new Constructor(this, kind); };
		      case VALUES: return function values(){ return new Constructor(this, kind); };
		    } return function entries(){ return new Constructor(this, kind); };
		  };
		  var TAG        = NAME + ' Iterator'
		    , DEF_VALUES = DEFAULT == VALUES
		    , VALUES_BUG = false
		    , proto      = Base.prototype
		    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
		    , $default   = $native || getMethod(DEFAULT)
		    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
		    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
		    , methods, key, IteratorPrototype;
		  // Fix native
		  if($anyNative){
		    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
		    if(IteratorPrototype !== Object.prototype){
		      // Set @@toStringTag to native iterators
		      setToStringTag(IteratorPrototype, TAG, true);
		      // fix for some old engines
		      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
		    }
		  }
		  // fix Array#{values, @@iterator}.name in V8 / FF
		  if(DEF_VALUES && $native && $native.name !== VALUES){
		    VALUES_BUG = true;
		    $default = function values(){ return $native.call(this); };
		  }
		  // Define iterator
		  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
		    hide(proto, ITERATOR, $default);
		  }
		  // Plug for library
		  Iterators[NAME] = $default;
		  Iterators[TAG]  = returnThis;
		  if(DEFAULT){
		    methods = {
		      values:  DEF_VALUES ? $default : getMethod(VALUES),
		      keys:    IS_SET     ? $default : getMethod(KEYS),
		      entries: $entries
		    };
		    if(FORCED)for(key in methods){
		      if(!(key in proto))redefine(proto, key, methods[key]);
		    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
		  }
		  return methods;
		};

	/***/ },
	/* 54 */
	/***/ function(module, exports) {

		module.exports = true;

	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(26);

	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var create         = __webpack_require__(57)
		  , descriptor     = __webpack_require__(35)
		  , setToStringTag = __webpack_require__(60)
		  , IteratorPrototype = {};
		
		// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
		__webpack_require__(26)(IteratorPrototype, __webpack_require__(61)('iterator'), function(){ return this; });
		
		module.exports = function(Constructor, NAME, next){
		  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
		  setToStringTag(Constructor, NAME + ' Iterator');
		};

	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
		var anObject    = __webpack_require__(28)
		  , dPs         = __webpack_require__(58)
		  , enumBugKeys = __webpack_require__(20)
		  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
		  , Empty       = function(){ /* empty */ }
		  , PROTOTYPE   = 'prototype';
		
		// Create object with fake `null` prototype: use iframe Object with cleared prototype
		var createDict = function(){
		  // Thrash, waste and sodomy: IE GC bug
		  var iframe = __webpack_require__(33)('iframe')
		    , i      = enumBugKeys.length
		    , gt     = '>'
		    , iframeDocument;
		  iframe.style.display = 'none';
		  __webpack_require__(59).appendChild(iframe);
		  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
		  // createDict = iframe.contentWindow.Object;
		  // html.removeChild(iframe);
		  iframeDocument = iframe.contentWindow.document;
		  iframeDocument.open();
		  iframeDocument.write('<script>document.F=Object</script' + gt);
		  iframeDocument.close();
		  createDict = iframeDocument.F;
		  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
		  return createDict();
		};
		
		module.exports = Object.create || function create(O, Properties){
		  var result;
		  if(O !== null){
		    Empty[PROTOTYPE] = anObject(O);
		    result = new Empty;
		    Empty[PROTOTYPE] = null;
		    // add "__proto__" for Object.getPrototypeOf polyfill
		    result[IE_PROTO] = O;
		  } else result = createDict();
		  return Properties === undefined ? result : dPs(result, Properties);
		};

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var dP       = __webpack_require__(27)
		  , anObject = __webpack_require__(28)
		  , getKeys  = __webpack_require__(6);
		
		module.exports = __webpack_require__(31) ? Object.defineProperties : function defineProperties(O, Properties){
		  anObject(O);
		  var keys   = getKeys(Properties)
		    , length = keys.length
		    , i = 0
		    , P;
		  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
		  return O;
		};

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(18).document && document.documentElement;

	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(27).f
		  , has = __webpack_require__(8)
		  , TAG = __webpack_require__(61)('toStringTag');
		
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var store      = __webpack_require__(17)('wks')
		  , uid        = __webpack_require__(19)
		  , Symbol     = __webpack_require__(18).Symbol
		  , USE_SYMBOL = typeof Symbol == 'function';
		
		var $exports = module.exports = function(name){
		  return store[name] || (store[name] =
		    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
		};
		
		$exports.store = store;

	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
		var has         = __webpack_require__(8)
		  , toObject    = __webpack_require__(4)
		  , IE_PROTO    = __webpack_require__(16)('IE_PROTO')
		  , ObjectProto = Object.prototype;
		
		module.exports = Object.getPrototypeOf || function(O){
		  O = toObject(O);
		  if(has(O, IE_PROTO))return O[IE_PROTO];
		  if(typeof O.constructor == 'function' && O instanceof O.constructor){
		    return O.constructor.prototype;
		  } return O instanceof Object ? ObjectProto : null;
		};

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var $at  = __webpack_require__(64)(true);
		
		// 21.1.3.27 String.prototype[@@iterator]()
		__webpack_require__(53)(String, 'String', function(iterated){
		  this._t = String(iterated); // target
		  this._i = 0;                // next index
		// 21.1.5.2.1 %StringIteratorPrototype%.next()
		}, function(){
		  var O     = this._t
		    , index = this._i
		    , point;
		  if(index >= O.length)return {value: undefined, done: true};
		  point = $at(O, index);
		  this._i += point.length;
		  return {value: point, done: false};
		});

	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var toInteger = __webpack_require__(14)
		  , defined   = __webpack_require__(5);
		// true  -> String#at
		// false -> String#codePointAt
		module.exports = function(TO_STRING){
		  return function(that, pos){
		    var s = String(defined(that))
		      , i = toInteger(pos)
		      , l = s.length
		      , a, b;
		    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
		    a = s.charCodeAt(i);
		    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
		      ? TO_STRING ? s.charAt(i) : a
		      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
		  };
		};

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		var anObject = __webpack_require__(28)
		  , get      = __webpack_require__(66);
		module.exports = __webpack_require__(23).getIterator = function(it){
		  var iterFn = get(it);
		  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
		  return anObject(iterFn.call(it));
		};

	/***/ },
	/* 66 */
	/***/ function(module, exports, __webpack_require__) {

		var classof   = __webpack_require__(67)
		  , ITERATOR  = __webpack_require__(61)('iterator')
		  , Iterators = __webpack_require__(52);
		module.exports = __webpack_require__(23).getIteratorMethod = function(it){
		  if(it != undefined)return it[ITERATOR]
		    || it['@@iterator']
		    || Iterators[classof(it)];
		};

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		// getting tag from 19.1.3.6 Object.prototype.toString()
		var cof = __webpack_require__(11)
		  , TAG = __webpack_require__(61)('toStringTag')
		  // ES3 wrong here
		  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
		
		// fallback for IE11 Script Access Denied error
		var tryGet = function(it, key){
		  try {
		    return it[key];
		  } catch(e){ /* empty */ }
		};
		
		module.exports = function(it){
		  var O, T, B;
		  return it === undefined ? 'Undefined' : it === null ? 'Null'
		    // @@toStringTag case
		    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
		    // builtinTag case
		    : ARG ? cof(O)
		    // ES3 arguments fallback
		    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
		};

	/***/ },
	/* 68 */
	/***/ function(module, exports) {

		module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-radio mdl-js-radio\"><input v-bind:id.once=\"id\" type=\"radio\" v-bind:name.once=\"name\" v-bind:value=\"value\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-radio__button\"/><span class=\"mdl-radio__label\"><slot></slot></span></label>";

	/***/ },
	/* 69 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(70)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/button.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(72)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./button.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 70 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _button = __webpack_require__(71);
		
		var _button2 = _interopRequireDefault(_button);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  mixins: [_button2.default]
		};

	/***/ },
	/* 71 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  computed: {
		    cssClasses: function cssClasses() {
		      return {
		        'mdl-button--icon': this.icon,
		        'mdl-button--accent': this.accent,
		        'mdl-button--primary': this.primary,
		        'mdl-button--mini-fab': this.miniFab,
		        'mdl-button--fab': this.fab || this.miniFab,
		        'mdl-button--raised': this.raised,
		        'mdl-button--colored': this.colored
		      };
		    }
		  },
		  props: {
		    disabled: {
		      fill: true
		    },
		    icon: {
		      required: false
		    },
		    accent: {
		      fill: true
		    },
		    primary: {
		      fill: true
		    },
		    miniFab: {
		      fill: true
		    },
		    fab: {
		      fill: true
		    },
		    raised: {
		      fill: true
		    },
		    colored: {
		      fill: true
		    }
		  },
		  mixins: [_propFill2.default],
		  ready: function ready() {
		    componentHandler.upgradeElement(this.$el);
		  }
		};

	/***/ },
	/* 72 */
	/***/ function(module, exports) {

		module.exports = "<button v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icons\">{{icon}}</i></slot></button>";

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(74)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/anchor-button.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(75)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./anchor-button.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _button = __webpack_require__(71);
		
		var _button2 = _interopRequireDefault(_button);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  mixins: [_button2.default]
		};

	/***/ },
	/* 75 */
	/***/ function(module, exports) {

		module.exports = "<a v-bind:disabled=\"disabled\" v-bind:class=\"cssClasses\" class=\"mdl-button mdl-js-button\"><slot><i v-if=\"icon\" class=\"material-icons\">{{icon}}</i></slot></a>";

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(77)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/progress.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(78)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./progress.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    progress: {
		      required: false
		    },
		    buffer: {
		      required: false
		    },
		    indeterminate: {
		      fill: true
		    }
		  },
		  ready: function ready() {
		    var _this = this;
		
		    componentHandler.upgradeElement(this.$el, 'MaterialProgress');
		
		    if (this.progress != null) {
		      this.$el.MaterialProgress.setProgress(this.progress);
		      this.$watch('progress', function (val) {
		        return _this.$el.MaterialProgress.setProgress(val);
		      });
		    }
		
		    if (this.buffer != null) {
		      this.$el.MaterialProgress.setBuffer(this.buffer);
		      this.$watch('buffer', function (val) {
		        return _this.$el.MaterialProgress.setBuffer(val);
		      });
		    }
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		module.exports = "<div v-bind:class=\"{ &quot;mdl-progress__indeterminate&quot;: indeterminate }\" class=\"mdl-progress mdl-js-progress\"></div>";

	/***/ },
	/* 79 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(80)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/spinner.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(81)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./spinner.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 80 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    active: {
		      default: true,
		      type: Boolean
		    },
		    singleColor: {
		      fill: true
		    }
		  },
		  ready: function ready() {
		    componentHandler.upgradeElement(this.$el, 'MaterialSpinner');
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 81 */
	/***/ function(module, exports) {

		module.exports = "<div v-bind:class=\"{ &quot;mdl-spinner--single-color&quot;: singleColor, &quot;is-active&quot;: active }\" class=\"mdl-spinner mdl-js-spinner\"></div>";

	/***/ },
	/* 82 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(83)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/toggles/icon-toggle.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(84)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./icon-toggle.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _toggle = __webpack_require__(41);
		
		var _toggle2 = _interopRequireDefault(_toggle);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    icon: {
		      required: true,
		      type: String
		    }
		  },
		  mixins: [_toggle2.default],
		  ready: function ready() {
		    componentHandler.upgradeElements(this.$el);
		  }
		};

	/***/ },
	/* 84 */
	/***/ function(module, exports) {

		module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-icon-toggle mdl-js-icon-toggle\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-icon-toggle__input\"/><i class=\"mdl-icon-toggle__label material-icons\">{{icon}}</i></label>";

	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(86)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/slider.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(87)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./slider.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 86 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    value: {
		      required: true,
		      twoWay: true
		    },
		    step: {
		      required: false
		    },
		    min: {
		      required: true
		    },
		    max: {
		      required: true
		    },
		    disabled: {
		      fill: true
		    }
		  },
		  ready: function ready() {
		    var _this = this;
		
		    componentHandler.upgradeElement(this.$el, 'MaterialSlider');
		
		    this.$el.MaterialSlider.change(this.value);
		    this.$watch('value', function (val) {
		      return _this.$el.MaterialSlider.change(val);
		    });
		
		    this.$watch('min', function (val) {
		      if (val > _this.value) {
		        _this.$el.MaterialSlider.change(val);
		      }
		    });
		
		    this.$watch('max', function (val) {
		      if (val < _this.value) {
		        _this.$el.MaterialSlider.change(val);
		      }
		    });
		
		    this.$watch('step', function (val) {
		      return _this.$el.MaterialSlider.change(val * Math.round(_this.value / val));
		    });
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 87 */
	/***/ function(module, exports) {

		module.exports = "<input type=\"range\" v-model=\"value\" v-bind:min=\"min\" v-bind:max=\"max\" v-bind:step=\"step\" v-bind:disabled=\"disabled\" class=\"mdl-slider mdl-js-slider\"/>";

	/***/ },
	/* 88 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(89)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/toggles/switch.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(90)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./switch.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 89 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _toggle = __webpack_require__(41);
		
		var _toggle2 = _interopRequireDefault(_toggle);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  mixins: [_toggle2.default],
		  ready: function ready() {
		    componentHandler.upgradeElements(this.$el);
		  }
		};

	/***/ },
	/* 90 */
	/***/ function(module, exports) {

		module.exports = "<label v-bind:for.once=\"id\" v-bind:class=\"{ &quot;is-disabled&quot;: disabled, &quot;is-checked&quot;: isChecked }\" class=\"mdl-switch mdl-js-switch\"><input v-bind:value=\"value\" type=\"checkbox\" v-bind:id.once=\"id\" v-model=\"checked\" v-bind:disabled=\"disabled\" class=\"mdl-switch__input\"/><span class=\"mdl-switch__label\"><slot></slot></span></label>";

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(92)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/textfield.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(93)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./textfield.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    maxlength: {
		      required: false
		    },
		    expandable: String,
		    type: {
		      type: String,
		      default: 'text'
		    },
		    rows: {
		      required: false
		    },
		    id: String,
		    value: {
		      required: false
		    },
		    disabled: {
		      type: [Boolean, String],
		      fill: true,
		      required: false,
		      default: false
		    },
		    required: {
		      type: [Boolean, String],
		      fill: true,
		      required: false,
		      default: false
		    },
		    readonly: {
		      type: [Boolean, String],
		      fill: true,
		      required: false,
		      default: false
		    },
		    label: String,
		    pattern: String,
		    error: String,
		    textarea: {
		      fill: true
		    },
		    floatingLabel: {
		      required: false
		    }
		  },
		  computed: {
		    isDirty: function isDirty() {
		      return '' + this.value;
		    }
		  },
		  ready: function ready() {
		    var _this = this;
		
		    componentHandler.upgradeElement(this.$el);
		    if (this.floatingLabel && this.label == null) {
		      this.label = this.floatingLabel;
		      this.$watch('floatingLabel', function (val) {
		        return _this.label = val;
		      });
		    }
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 93 */
	/***/ function(module, exports) {

		module.exports = "<div v-bind:class=\"{&quot;mdl-textfield--floating-label&quot;: floatingLabel, &quot;mdl-textfield--expandable&quot;: expandable, &quot;is-dirty&quot;: isDirty, &quot;is-disabled&quot;: disabled}\" class=\"mdl-textfield mdl-js-textfield\"><slot v-if=\"expandable\" name=\"expandable-button\"><label v-bind:for.once=\"id\" class=\"mdl-button mdl-js-button mdl-button--icon\"><i class=\"material-icons\">{{expandable}}</i></label></slot><div v-bind:class=\"{&quot;mdl-textfield__expandable-holder&quot;: expandable}\"><slot v-if=\"textarea\" name=\"textarea\"><textarea type=\"text\" v-model=\"value\" v-bind:required=\"required\" v-bind:id.once=\"id\" v-bind:rows=\"rows\" v-bind:maxlength=\"maxlength\" class=\"mdl-textfield__input\"></textarea></slot><slot v-else=\"v-else\" name=\"input\"><input v-bind:type=\"type\" v-model=\"value\" v-bind:id.once=\"id\" v-bind:pattern=\"pattern\" v-bind:disabled=\"disabled\" v-bind:required=\"required\" v-bind:readonly=\"readonly\" v-bind:maxlength=\"maxlength\" class=\"mdl-textfield__input\"/></slot><slot name=\"label\"><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label></slot><slot name=\"error\"><label v-if=\"error\" class=\"mdl-textfield__error\">{{error}}</label></slot></div></div>";

	/***/ },
	/* 94 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(95)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/tooltip.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(96)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./tooltip.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  props: {
		    for: {
		      required: true,
		      type: String
		    },
		    large: {
		      fill: true
		    }
		  },
		  ready: function ready() {
		    componentHandler.upgradeElement(this.$el, 'MaterialTooltip');
		  },
		
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 96 */
	/***/ function(module, exports) {

		module.exports = "<div v-bind:for=\"for\" v-bind:class=\"{&quot;mdl-tooltip--large&quot;: large}\" class=\"mdl-tooltip\"><slot></slot></div>";

	/***/ },
	/* 97 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(98)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/menu/menu.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(99)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./menu.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 98 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  props: ['for'],
		  ready: function ready() {
		    componentHandler.upgradeElement(this.$el, 'MaterialMenu');
		  }
		};

	/***/ },
	/* 99 */
	/***/ function(module, exports) {

		module.exports = "<ul v-bind:for.once=\"for\" class=\"mdl-menu mdl-js-menu\"><slot></slot></ul>";

	/***/ },
	/* 100 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(101)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/menu/menu-item.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(102)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./menu-item.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 101 */
	/***/ function(module, exports) {

		"use strict";

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {};

	/***/ },
	/* 102 */
	/***/ function(module, exports) {

		module.exports = "<li class=\"mdl-menu__item\"><slot></slot></li>";

	/***/ },
	/* 103 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(104)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/card.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(105)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./card.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 104 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _button = __webpack_require__(69);
		
		var _button2 = _interopRequireDefault(_button);
		
		var _anchorButton = __webpack_require__(73);
		
		var _anchorButton2 = _interopRequireDefault(_anchorButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var slots = ['title', 'subtitle', 'supportingText', 'media', 'actions', 'menu'];
		
		exports.default = {
		  computed: {
		    isActionsURL: function isActionsURL() {
		      if (typeof this.actions === 'string') {
		        return this.actions.match(/^(https?:)?\/\//) != null;
		      } else {
		        return false;
		      }
		    }
		  },
		  props: {
		    title: {
		      type: String,
		      default: true
		    },
		    menu: {
		      default: true
		    },
		    actions: {
		      type: String,
		      default: true
		    },
		    actionsTarget: {
		      default: '_self',
		      type: String
		    },
		    actionsText: String,
		    media: {
		      default: true,
		      type: String
		    },
		    subtitle: {
		      default: true,
		      type: String
		    },
		    supportingText: {
		      default: true,
		      type: String
		    }
		  },
		  compiled: function compiled() {
		    var _this = this;
		
		    slots.forEach(function (slot, pos) {
		      if (_this[slot] === true) {
		        var el = _this.$el.children[pos];
		        if (!el.attributes.getNamedItem('slot')) {
		          _this[slot] = '';
		        }
		      }
		    });
		  },
		
		  methods: {
		    triggerMenuEvent: function triggerMenuEvent() {
		      this.$dispatch(this.menu);
		    },
		    triggerActionsEvent: function triggerActionsEvent() {
		      this.$dispatch(this.actions);
		    }
		  },
		  components: {
		    mdlButton: _button2.default,
		    mdlAnchorButton: _anchorButton2.default
		  }
		};

	/***/ },
	/* 105 */
	/***/ function(module, exports) {

		module.exports = "<div class=\"mdl-card mdl-shadow--2dp\"><slot name=\"title\" v-if=\"title\"><div class=\"mdl-card__title\"><h2 class=\"mdl-card__title-text\">{{title}}</h2></div></slot><slot name=\"subtitle\" v-if=\"subtitle\"><div class=\"mdl-card__subtitle-text\">{{subtitle}}</div></slot><slot name=\"supporting-text\" v-if=\"supportingText\"><div class=\"mdl-card__supporting-text\">{{supportingText}}</div></slot><slot name=\"media\" v-if=\"media\"><div class=\"mdl-card__media\"><img :src=\"media\"/></div></slot><!-- TODO this was an anchor--><slot name=\"actions\" v-if=\"actions\"><div class=\"mdl-card__actions mdl-card--border\"><mdl-anchor-button colored=\"colored\" v-if=\"isActionsURL\" v-bind:href=\"actions\" v-bind:target=\"actionsTarget\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-anchor-button><mdl-button colored=\"colored\" v-else=\"v-else\" class=\"mdl-js-ripple-effect\">{{actionsText}}</mdl-button></div></slot><!-- TODO some way of creating a menu or action--><slot name=\"menu\" v-if=\"menu\"><div class=\"mdl-card__menu\"><mdl-button icon=\"icon\" @click=\"triggerMenuEvent\" class=\"mdl-js-ripple-effect\"><i class=\"material-icons\">share</i></mdl-button></div></slot></div>";

	/***/ },
	/* 106 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__vue_script__ = __webpack_require__(107)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/snackbar.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(108)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./snackbar.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 107 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  props: ['displayOn'],
		  ready: function ready() {
		    var _this = this;
		
		    componentHandler.upgradeElement(this.$el, 'MaterialSnackbar');
		    this.$on(this.displayOn, function (snackarConfig) {
		      _this.$el.MaterialSnackbar.showSnackbar(snackarConfig);
		    });
		  }
		};

	/***/ },
	/* 108 */
	/***/ function(module, exports) {

		module.exports = "<div aria-live=\"assertive\" aria-atomic=\"true\" aria-relevant=\"text\" class=\"mdl-snackbar mdl-js-snackbar\"><div class=\"mdl-snackbar__text\"></div><button type=\"button\" class=\"mdl-snackbar__action\"></button></div>";

	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(110)
		__vue_script__ = __webpack_require__(114)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/select.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(115)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./select.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 110 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(111);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(113)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./select.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(112)();
		// imports
		
		
		// module
		exports.push([module.id, "\n.getmdl-select .mdl-icon-toggle__label {\n  float:right;\n  margin-top:-30px;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.getmdl-select.is-focused .mdl-icon-toggle__label {\n  color: #3f51b5;\n}\n\n.getmdl-select .mdl-menu__container {\n  width: 100% !important;\n}\n.getmdl-select .mdl-menu__container .mdl-menu {\n  width: 100%;\n}\n", ""]);
		
		// exports


	/***/ },
	/* 112 */
	/***/ function(module, exports) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		// css base code, injected by the css-loader
		module.exports = function() {
			var list = [];
		
			// return the list of modules as css string
			list.toString = function toString() {
				var result = [];
				for(var i = 0; i < this.length; i++) {
					var item = this[i];
					if(item[2]) {
						result.push("@media " + item[2] + "{" + item[1] + "}");
					} else {
						result.push(item[1]);
					}
				}
				return result.join("");
			};
		
			// import a list of modules into the list
			list.i = function(modules, mediaQuery) {
				if(typeof modules === "string")
					modules = [[null, modules, ""]];
				var alreadyImportedModules = {};
				for(var i = 0; i < this.length; i++) {
					var id = this[i][0];
					if(typeof id === "number")
						alreadyImportedModules[id] = true;
				}
				for(i = 0; i < modules.length; i++) {
					var item = modules[i];
					// skip already imported module
					// this implementation is not 100% perfect for weird media query combinations
					//  when a module is imported multiple times with different media queries.
					//  I hope this will never occur (Hey this way we have smaller bundles)
					if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
						if(mediaQuery && !item[2]) {
							item[2] = mediaQuery;
						} else if(mediaQuery) {
							item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
						}
						list.push(item);
					}
				}
			};
			return list;
		};


	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {

		/*
			MIT License http://www.opensource.org/licenses/mit-license.php
			Author Tobias Koppers @sokra
		*/
		var stylesInDom = {},
			memoize = function(fn) {
				var memo;
				return function () {
					if (typeof memo === "undefined") memo = fn.apply(this, arguments);
					return memo;
				};
			},
			isOldIE = memoize(function() {
				return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
			}),
			getHeadElement = memoize(function () {
				return document.head || document.getElementsByTagName("head")[0];
			}),
			singletonElement = null,
			singletonCounter = 0,
			styleElementsInsertedAtTop = [];
		
		module.exports = function(list, options) {
			if(false) {
				if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
			}
		
			options = options || {};
			// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
			// tags it will allow on a page
			if (typeof options.singleton === "undefined") options.singleton = isOldIE();
		
			// By default, add <style> tags to the bottom of <head>.
			if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
		
			var styles = listToStyles(list);
			addStylesToDom(styles, options);
		
			return function update(newList) {
				var mayRemove = [];
				for(var i = 0; i < styles.length; i++) {
					var item = styles[i];
					var domStyle = stylesInDom[item.id];
					domStyle.refs--;
					mayRemove.push(domStyle);
				}
				if(newList) {
					var newStyles = listToStyles(newList);
					addStylesToDom(newStyles, options);
				}
				for(var i = 0; i < mayRemove.length; i++) {
					var domStyle = mayRemove[i];
					if(domStyle.refs === 0) {
						for(var j = 0; j < domStyle.parts.length; j++)
							domStyle.parts[j]();
						delete stylesInDom[domStyle.id];
					}
				}
			};
		}
		
		function addStylesToDom(styles, options) {
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				if(domStyle) {
					domStyle.refs++;
					for(var j = 0; j < domStyle.parts.length; j++) {
						domStyle.parts[j](item.parts[j]);
					}
					for(; j < item.parts.length; j++) {
						domStyle.parts.push(addStyle(item.parts[j], options));
					}
				} else {
					var parts = [];
					for(var j = 0; j < item.parts.length; j++) {
						parts.push(addStyle(item.parts[j], options));
					}
					stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
				}
			}
		}
		
		function listToStyles(list) {
			var styles = [];
			var newStyles = {};
			for(var i = 0; i < list.length; i++) {
				var item = list[i];
				var id = item[0];
				var css = item[1];
				var media = item[2];
				var sourceMap = item[3];
				var part = {css: css, media: media, sourceMap: sourceMap};
				if(!newStyles[id])
					styles.push(newStyles[id] = {id: id, parts: [part]});
				else
					newStyles[id].parts.push(part);
			}
			return styles;
		}
		
		function insertStyleElement(options, styleElement) {
			var head = getHeadElement();
			var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
			if (options.insertAt === "top") {
				if(!lastStyleElementInsertedAtTop) {
					head.insertBefore(styleElement, head.firstChild);
				} else if(lastStyleElementInsertedAtTop.nextSibling) {
					head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
				} else {
					head.appendChild(styleElement);
				}
				styleElementsInsertedAtTop.push(styleElement);
			} else if (options.insertAt === "bottom") {
				head.appendChild(styleElement);
			} else {
				throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
			}
		}
		
		function removeStyleElement(styleElement) {
			styleElement.parentNode.removeChild(styleElement);
			var idx = styleElementsInsertedAtTop.indexOf(styleElement);
			if(idx >= 0) {
				styleElementsInsertedAtTop.splice(idx, 1);
			}
		}
		
		function createStyleElement(options) {
			var styleElement = document.createElement("style");
			styleElement.type = "text/css";
			insertStyleElement(options, styleElement);
			return styleElement;
		}
		
		function addStyle(obj, options) {
			var styleElement, update, remove;
		
			if (options.singleton) {
				var styleIndex = singletonCounter++;
				styleElement = singletonElement || (singletonElement = createStyleElement(options));
				update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
				remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
			} else {
				styleElement = createStyleElement(options);
				update = applyToTag.bind(null, styleElement);
				remove = function() {
					removeStyleElement(styleElement);
				};
			}
		
			update(obj);
		
			return function updateStyle(newObj) {
				if(newObj) {
					if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
						return;
					update(obj = newObj);
				} else {
					remove();
				}
			};
		}
		
		var replaceText = (function () {
			var textStore = [];
		
			return function (index, replacement) {
				textStore[index] = replacement;
				return textStore.filter(Boolean).join('\n');
			};
		})();
		
		function applyToSingletonTag(styleElement, index, remove, obj) {
			var css = remove ? "" : obj.css;
		
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = replaceText(index, css);
			} else {
				var cssNode = document.createTextNode(css);
				var childNodes = styleElement.childNodes;
				if (childNodes[index]) styleElement.removeChild(childNodes[index]);
				if (childNodes.length) {
					styleElement.insertBefore(cssNode, childNodes[index]);
				} else {
					styleElement.appendChild(cssNode);
				}
			}
		}
		
		function applyToTag(styleElement, obj) {
			var css = obj.css;
			var media = obj.media;
			var sourceMap = obj.sourceMap;
		
			if (media) {
				styleElement.setAttribute("media", media);
			}
		
			if (sourceMap) {
				// https://developer.chrome.com/devtools/docs/javascript-debugging
				// this makes source maps inside style tags work properly in Chrome
				css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
				// http://stackoverflow.com/a/26603875
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
			}
		
			if (styleElement.styleSheet) {
				styleElement.styleSheet.cssText = css;
			} else {
				while(styleElement.firstChild) {
					styleElement.removeChild(styleElement.firstChild);
				}
				styleElement.appendChild(document.createTextNode(css));
			}
		}


	/***/ },
	/* 114 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		exports.default = {
		  data: function data() {
		    return {
		      name: ''
		    };
		  },
		
		  methods: {
		    selectValue: function selectValue(option) {
		      this.value = option.value;
		      this.name = option.name;
		      var event = new Event('change');
		      this.$el.dispatchEvent(event);
		    },
		    setName: function setName() {
		      var oldName = this.name;
		      for (var i = 0; i < this.optionsObject.length; ++i) {
		        var option = this.optionsObject[i];
		        if (this.value === option.value) this.name = option.name;
		      }
		      if (this.name === oldName) this.name = this.value;
		      this.$els.textfield.MaterialTextfield.change(this.name);
		      this.$els.textfield.MaterialTextfield.boundBlurHandler();
		    }
		  },
		  computed: {
		    optionsObject: function optionsObject() {
		      if (this.options && this.options.length !== undefined) {
		        return this.options.map(function (option) {
		          if (typeof option === 'string') {
		            return {
		              name: option,
		              value: option
		            };
		          } else {
		            return option;
		          }
		        });
		      } else {
		        return [];
		      }
		    }
		  },
		  props: {
		    label: String,
		    id: {
		      required: true
		    },
		    value: {
		      required: false
		    },
		    options: {
		      required: true
		    }
		  },
		  ready: function ready() {
		    componentHandler.upgradeElements(this.$el);
		    this.setName();
		  },
		
		  watch: {
		    value: function value(val, oldVal) {
		      this.setName();
		    }
		  }
		};

	/***/ },
	/* 115 */
	/***/ function(module, exports) {

		module.exports = "<div v-el:textfield=\"v-el:textfield\" class=\"mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select\"><input v-bind:id.once=\"id\" v-el:input=\"v-el:input\" v-model=\"name\" type=\"text\" readonly=\"\" tabindex=\"-1\" class=\"mdl-textfield__input\"/><label v-bind:for.once=\"id\"><i class=\"mdl-icon-toggle__label material-icons\">keyboard_arrow_down</i></label><label v-bind:for.once=\"id\" class=\"mdl-textfield__label\">{{label}}</label><ul v-bind:for.once=\"id\" class=\"mdl-menu mdl-menu--bottom-left mdl-js-menu\"><li v-for=\"option in optionsObject\" v-on:click=\"selectValue(option)\" class=\"mdl-menu__item\">{{option.name}}</li></ul></div>";

	/***/ },
	/* 116 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(117)
		__vue_script__ = __webpack_require__(119)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src/dialog.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(120)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), false)
		  if (!hotAPI.compatible) return
		  var id = "./dialog.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {

		// style-loader: Adds some css to the DOM by adding a <style> tag
		
		// load the styles
		var content = __webpack_require__(118);
		if(typeof content === 'string') content = [[module.id, content, '']];
		// add the styles to the DOM
		var update = __webpack_require__(113)(content, {});
		if(content.locals) module.exports = content.locals;
		// Hot Module Replacement
		if(false) {
			// When the styles change, update the <style> tags
			if(!content.locals) {
				module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue", function() {
					var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dialog.vue");
					if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
					update(newContent);
				});
			}
			// When the module is disposed, remove the <style> tags
			module.hot.dispose(function() { update(); });
		}

	/***/ },
	/* 118 */
	/***/ function(module, exports, __webpack_require__) {

		exports = module.exports = __webpack_require__(112)();
		// imports
		
		
		// module
		exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.mdl-dialog-container {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -webkit-box-pack:center;\n  -webkit-justify-content:center;\n      -ms-flex-pack:center;\n          justify-content:center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  top:0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0,0,0,0.3);\n}\n.mdl-dialog-container .mdl-dialog {\n  background-color:white;\n  padding: 1em;\n  color: black;\n  width: initial;\n  min-width: 280px;\n}\n", ""]);
		
		// exports


	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		  value: true
		});
		
		var _propFill = __webpack_require__(45);
		
		var _propFill2 = _interopRequireDefault(_propFill);
		
		var _button = __webpack_require__(69);
		
		var _button2 = _interopRequireDefault(_button);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		  components: {
		    mdlButton: _button2.default
		  },
		  data: function data() {
		    return {
		      show: false
		    };
		  },
		
		  props: {
		    title: {
		      type: String
		    },
		    fullWidth: {
		      fill: true,
		      default: false
		    }
		  },
		  methods: {
		    open: function open() {
		      this.show = true;
		      this.$emit('open');
		    },
		    close: function close() {
		      this.show = false;
		      this.$emit('close');
		    }
		  },
		  mixins: [_propFill2.default]
		};

	/***/ },
	/* 120 */
	/***/ function(module, exports) {

		module.exports = "<div v-show=\"show\" class=\"mdl-dialog-container\"><div class=\"mdl-dialog\"><div class=\"mdl-dialog__title\">{{title}}</div><div class=\"mdl-dialog__content\"><slot></slot></div><div v-bind:class=\"{ &quot;mdl-dialog__actions--full-width&quot;: fullWidth }\" class=\"mdl-dialog__actions\"><slot name=\"actions\"><mdl-button v-on:click.stop=\"close\" class=\"mdl-js-ripple-effect\">Close</mdl-button></slot></div></div></div>";

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=vue-mdl.js.map

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Keen UI v0.8.9 (https://github.com/JosephusPaye/keen-ui)
	 * (c) 2016 Josephus Paye II
	 * Released under the MIT License.
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Keen"] = factory();
		else
			root["Keen"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
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
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		__webpack_require__(1);
		
		var _UiAlert = __webpack_require__(2);
		
		var _UiAlert2 = _interopRequireDefault(_UiAlert);
		
		var _UiAutocomplete = __webpack_require__(81);
		
		var _UiAutocomplete2 = _interopRequireDefault(_UiAutocomplete);
		
		var _UiButton = __webpack_require__(109);
		
		var _UiButton2 = _interopRequireDefault(_UiButton);
		
		var _UiCheckbox = __webpack_require__(113);
		
		var _UiCheckbox2 = _interopRequireDefault(_UiCheckbox);
		
		var _UiCollapsible = __webpack_require__(117);
		
		var _UiCollapsible2 = _interopRequireDefault(_UiCollapsible);
		
		var _UiConfirm = __webpack_require__(121);
		
		var _UiConfirm2 = _interopRequireDefault(_UiConfirm);
		
		var _UiFab = __webpack_require__(129);
		
		var _UiFab2 = _interopRequireDefault(_UiFab);
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiIconButton = __webpack_require__(10);
		
		var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
		
		var _UiMenu = __webpack_require__(13);
		
		var _UiMenu2 = _interopRequireDefault(_UiMenu);
		
		var _UiMenuOption = __webpack_require__(16);
		
		var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);
		
		var _UiModal = __webpack_require__(124);
		
		var _UiModal2 = _interopRequireDefault(_UiModal);
		
		var _UiPopover = __webpack_require__(63);
		
		var _UiPopover2 = _interopRequireDefault(_UiPopover);
		
		var _UiPreloader = __webpack_require__(133);
		
		var _UiPreloader2 = _interopRequireDefault(_UiPreloader);
		
		var _UiProgressCircular = __webpack_require__(67);
		
		var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
		
		var _UiProgressLinear = __webpack_require__(137);
		
		var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
		
		var _UiRadio = __webpack_require__(141);
		
		var _UiRadio2 = _interopRequireDefault(_UiRadio);
		
		var _UiRadioGroup = __webpack_require__(145);
		
		var _UiRadioGroup2 = _interopRequireDefault(_UiRadioGroup);
		
		var _UiRating = __webpack_require__(149);
		
		var _UiRating2 = _interopRequireDefault(_UiRating);
		
		var _UiRatingIcon = __webpack_require__(152);
		
		var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
		
		var _UiRatingPreview = __webpack_require__(157);
		
		var _UiRatingPreview2 = _interopRequireDefault(_UiRatingPreview);
		
		var _UiRippleInk = __webpack_require__(20);
		
		var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
		
		var _UiSelect = __webpack_require__(161);
		
		var _UiSelect2 = _interopRequireDefault(_UiSelect);
		
		var _UiSlider = __webpack_require__(172);
		
		var _UiSlider2 = _interopRequireDefault(_UiSlider);
		
		var _UiSnackbar = __webpack_require__(184);
		
		var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
		
		var _UiSnackbarContainer = __webpack_require__(188);
		
		var _UiSnackbarContainer2 = _interopRequireDefault(_UiSnackbarContainer);
		
		var _UiSwitch = __webpack_require__(192);
		
		var _UiSwitch2 = _interopRequireDefault(_UiSwitch);
		
		var _UiTab = __webpack_require__(196);
		
		var _UiTab2 = _interopRequireDefault(_UiTab);
		
		var _UiTabs = __webpack_require__(200);
		
		var _UiTabs2 = _interopRequireDefault(_UiTabs);
		
		var _UiTextbox = __webpack_require__(208);
		
		var _UiTextbox2 = _interopRequireDefault(_UiTextbox);
		
		var _UiToolbar = __webpack_require__(212);
		
		var _UiToolbar2 = _interopRequireDefault(_UiToolbar);
		
		var _UiTooltip = __webpack_require__(74);
		
		var _UiTooltip2 = _interopRequireDefault(_UiTooltip);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var Keen = {
		    UiAlert: _UiAlert2.default,
		    UiAutocomplete: _UiAutocomplete2.default,
		    UiButton: _UiButton2.default,
		    UiCheckbox: _UiCheckbox2.default,
		    UiCollapsible: _UiCollapsible2.default,
		    UiConfirm: _UiConfirm2.default,
		    UiFab: _UiFab2.default,
		    UiIcon: _UiIcon2.default,
		    UiIconButton: _UiIconButton2.default,
		    UiMenu: _UiMenu2.default,
		    UiMenuOption: _UiMenuOption2.default,
		    UiModal: _UiModal2.default,
		    UiPopover: _UiPopover2.default,
		    UiPreloader: _UiPreloader2.default,
		    UiProgressCircular: _UiProgressCircular2.default,
		    UiProgressLinear: _UiProgressLinear2.default,
		    UiRadio: _UiRadio2.default,
		    UiRadioGroup: _UiRadioGroup2.default,
		    UiRating: _UiRating2.default,
		    UiRatingIcon: _UiRatingIcon2.default,
		    UiRatingPreview: _UiRatingPreview2.default,
		    UiRippleInk: _UiRippleInk2.default,
		    UiSelect: _UiSelect2.default,
		    UiSlider: _UiSlider2.default,
		    UiSnackbar: _UiSnackbar2.default,
		    UiSnackbarContainer: _UiSnackbarContainer2.default,
		    UiSwitch: _UiSwitch2.default,
		    UiTab: _UiTab2.default,
		    UiTabs: _UiTabs2.default,
		    UiTextbox: _UiTextbox2.default,
		    UiToolbar: _UiToolbar2.default,
		    UiTooltip: _UiTooltip2.default,
		
		    install: function install(Vue) {
		        Vue.component('ui-alert', _UiAlert2.default);
		        Vue.component('ui-autocomplete', _UiAutocomplete2.default);
		        Vue.component('ui-button', _UiButton2.default);
		        Vue.component('ui-checkbox', _UiCheckbox2.default);
		        Vue.component('ui-collapsible', _UiCollapsible2.default);
		        Vue.component('ui-confirm', _UiConfirm2.default);
		        Vue.component('ui-fab', _UiFab2.default);
		        Vue.component('ui-icon', _UiIcon2.default);
		        Vue.component('ui-icon-button', _UiIconButton2.default);
		        Vue.component('ui-menu', _UiMenu2.default);
		        Vue.component('ui-menu-option', _UiMenuOption2.default);
		        Vue.component('ui-modal', _UiModal2.default);
		        Vue.component('ui-popover', _UiPopover2.default);
		        Vue.component('ui-preloader', _UiPreloader2.default);
		        Vue.component('ui-progress-circular', _UiProgressCircular2.default);
		        Vue.component('ui-progress-linear', _UiProgressLinear2.default);
		        Vue.component('ui-radio', _UiRadio2.default);
		        Vue.component('ui-radio-group', _UiRadioGroup2.default);
		        Vue.component('ui-rating', _UiRating2.default);
		        Vue.component('ui-rating-icon', _UiRatingIcon2.default);
		        Vue.component('ui-rating-preview', _UiRatingPreview2.default);
		        Vue.component('ui-ripple-ink', _UiRippleInk2.default);
		        Vue.component('ui-select', _UiSelect2.default);
		        Vue.component('ui-slider', _UiSlider2.default);
		        Vue.component('ui-snackbar', _UiSnackbar2.default);
		        Vue.component('ui-snackbar-container', _UiSnackbarContainer2.default);
		        Vue.component('ui-switch', _UiSwitch2.default);
		        Vue.component('ui-tab', _UiTab2.default);
		        Vue.component('ui-tabs', _UiTabs2.default);
		        Vue.component('ui-textbox', _UiTextbox2.default);
		        Vue.component('ui-toolbar', _UiToolbar2.default);
		        Vue.component('ui-tooltip', _UiTooltip2.default);
		    }
		};
		
		module.exports = Keen;

	/***/ },
	/* 1 */
	/***/ function(module, exports) {

		'use strict';
		
		document.addEventListener('DOMContentLoaded', function () {
		    var hadKeyboardEvent = false;
		    var keyboardModalityWhitelist = ['input:not([type])', 'input[type=text]', 'input[type=number]', 'input[type=date]', 'input[type=time]', 'input[type=datetime]', 'textarea', '[role=textbox]', '[supports-modality=keyboard]'].join(',');
		
		    var isHandlingKeyboardThrottle;
		
		    var matcher = function () {
		        var el = document.body;
		
		        if (el.matchesSelector) {
		            return el.matchesSelector;
		        }
		
		        if (el.webkitMatchesSelector) {
		            return el.webkitMatchesSelector;
		        }
		
		        if (el.mozMatchesSelector) {
		            return el.mozMatchesSelector;
		        }
		
		        if (el.msMatchesSelector) {
		            return el.msMatchesSelector;
		        }
		
		        console.error('Couldn\'t find any matchesSelector method on document.body.');
		    }();
		
		    var disableFocusRingByDefault = function disableFocusRingByDefault() {
		        var css = 'body:not([modality=keyboard]) :focus { outline: none; }';
		        var head = document.head || document.getElementsByTagName('head')[0];
		        var style = document.createElement('style');
		
		        style.type = 'text/css';
		        style.id = 'disable-focus-ring';
		
		        if (style.styleSheet) {
		            style.styleSheet.cssText = css;
		        } else {
		            style.appendChild(document.createTextNode(css));
		        }
		
		        head.insertBefore(style, head.firstChild);
		    };
		
		    var focusTriggersKeyboardModality = function focusTriggersKeyboardModality(el) {
		        var triggers = false;
		
		        if (matcher) {
		            triggers = matcher.call(el, keyboardModalityWhitelist) && matcher.call(el, ':not([readonly])');
		        }
		
		        return triggers;
		    };
		
		    disableFocusRingByDefault();
		
		    document.body.addEventListener('keydown', function () {
		        hadKeyboardEvent = true;
		
		        if (isHandlingKeyboardThrottle) {
		            clearTimeout(isHandlingKeyboardThrottle);
		        }
		
		        isHandlingKeyboardThrottle = setTimeout(function () {
		            hadKeyboardEvent = false;
		        }, 100);
		    }, true);
		
		    document.body.addEventListener('focus', function (e) {
		        if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
		            document.body.setAttribute('modality', 'keyboard');
		        }
		    }, true);
		
		    document.body.addEventListener('blur', function () {
		        document.body.removeAttribute('modality');
		    }, true);
		});

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(3)
		__vue_script__ = __webpack_require__(5)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiAlert.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(80)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiAlert.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 3 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 4 */,
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiIconButton = __webpack_require__(10);
		
		var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-alert',
		
		    props: {
		        show: {
		            type: Boolean,
		            default: true
		        },
		        type: {
		            type: String,
		            default: 'info' },
		        text: String,
		        icon: String,
		        hideIcon: {
		            type: Boolean,
		            default: false
		        },
		        dismissible: {
		            type: Boolean,
		            default: true
		        }
		    },
		
		    computed: {
		        iconName: function iconName() {
		            if (this.icon) {
		                return this.icon;
		            }
		
		            var icon = this.type;
		
		            if (icon === 'success') {
		                icon = 'check_circle';
		            }
		
		            return icon;
		        }
		    },
		
		    methods: {
		        close: function close() {
		            this.show = false;
		            this.$dispatch('dismissed');
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default,
		        UiIconButton: _UiIconButton2.default
		    }
		};

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(7)
		__vue_script__ = __webpack_require__(8)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiIcon.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(9)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiIcon.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    name: 'ui-icon',
		
		    props: {
		        icon: {
		            type: String,
		            required: true
		        },
		        removeText: {
		            type: Boolean,
		            default: false
		        }
		    }
		};

	/***/ },
	/* 9 */
	/***/ function(module, exports) {

		module.exports = "\n<i\n    class=\"ui-icon material-icons\" :class=\"[icon]\" v-text=\"removeText ? null : icon\"\n    aria-hidden=\"true\"\n></i>\n";

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(11)
		__vue_script__ = __webpack_require__(12)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiIconButton.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(79)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiIconButton.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiMenu = __webpack_require__(13);
		
		var _UiMenu2 = _interopRequireDefault(_UiMenu);
		
		var _UiPopover = __webpack_require__(63);
		
		var _UiPopover2 = _interopRequireDefault(_UiPopover);
		
		var _UiProgressCircular = __webpack_require__(67);
		
		var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _HasDropdown = __webpack_require__(72);
		
		var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
		
		var _ShowsTooltip = __webpack_require__(73);
		
		var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-icon-button',
		
		    props: {
		        type: {
		            type: String,
		            default: 'normal', coerce: function coerce(type) {
		                return 'ui-icon-button-' + type;
		            }
		        },
		        buttonType: {
		            type: String,
		            default: 'button'
		        },
		        color: {
		            type: String,
		            default: 'default', coerce: function coerce(color) {
		                return 'color-' + color;
		            }
		        },
		        icon: {
		            type: String,
		            required: true
		        },
		        ariaLabel: String,
		        loading: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        styleClasses: function styleClasses() {
		            var classes = [this.type, this.color];
		
		            if (this.hasDropdown) {
		                classes.push('ui-dropdown');
		            }
		
		            return classes;
		        },
		        spinnerColor: function spinnerColor() {
		            if (this.color === 'color-default' || this.color === 'color-black') {
		                return 'black';
		            }
		
		            return 'white';
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default,
		        UiMenu: _UiMenu2.default,
		        UiPopover: _UiPopover2.default,
		        UiProgressCircular: _UiProgressCircular2.default
		    },
		
		    mixins: [_HasDropdown2.default, _ShowsTooltip2.default, _ShowsRippleInk2.default],
		
		    directives: {
		        disabled: _disabled2.default
		    }
		};

	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(14)
		__vue_script__ = __webpack_require__(15)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiMenu.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(62)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiMenu.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 14 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiMenuOption = __webpack_require__(16);
		
		var _UiMenuOption2 = _interopRequireDefault(_UiMenuOption);
		
		var _ShowsDropdown = __webpack_require__(58);
		
		var _ShowsDropdown2 = _interopRequireDefault(_ShowsDropdown);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-menu',
		
		    props: {
		        options: {
		            type: Array,
		            required: true,
		            default: function _default() {
		                return [];
		            }
		        },
		        showIcons: {
		            type: Boolean,
		            default: false
		        },
		        showSecondaryText: {
		            type: Boolean,
		            default: false
		        },
		        hideRippleInk: {
		            type: Boolean,
		            default: false
		        },
		        closeOnSelect: {
		            type: Boolean,
		            default: true
		        },
		        partial: {
		            type: String,
		            default: 'ui-menu-default'
		        }
		    },
		
		    events: {
		        'dropdown-opened': function dropdownOpened() {
		            if (this.containFocus) {
		                document.addEventListener('focus', this.restrictFocus, true);
		            }
		
		            this.$dispatch('opened');
		
		            return true;
		        },
		
		        'dropdown-closed': function dropdownClosed() {
		            if (this.containFocus) {
		                document.removeEventListener('focus', this.restrictFocus, true);
		            }
		
		            this.$dispatch('closed');
		
		            return true;
		        }
		    },
		
		    methods: {
		        optionSelect: function optionSelect(option) {
		            if (!(option.disabled || option.type === 'divider')) {
		                this.$dispatch('option-selected', option);
		
		                if (this.closeOnSelect) {
		                    this.closeDropdown();
		                }
		            }
		        },
		        restrictFocus: function restrictFocus(e) {
		            if (!this.$els.dropdown.contains(e.target)) {
		                e.stopPropagation();
		
		                this.$els.dropdown.querySelector('.ui-menu-option').focus();
		            }
		        },
		        redirectFocus: function redirectFocus(e) {
		            e.stopPropagation();
		
		            this.$els.dropdown.querySelector('.ui-menu-option').focus();
		        }
		    },
		
		    components: {
		        UiMenuOption: _UiMenuOption2.default
		    },
		
		    mixins: [_ShowsDropdown2.default]
		};

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(17)
		__vue_script__ = __webpack_require__(18)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiMenuOption.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(57)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiMenuOption.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-menu-option',
		
		    props: {
		        type: String,
		        text: String,
		        icon: String,
		        showIcon: {
		            type: Boolean,
		            default: false
		        },
		        secondaryText: String,
		        showSecondaryText: {
		            type: Boolean,
		            default: false
		        },
		        partial: {
		            type: String,
		            default: 'ui-menu-default'
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        },
		        option: Object
		    },
		
		    computed: {
		        isDivider: function isDivider() {
		            return this.type === 'divider';
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    partials: {
		        'ui-menu-default': '\n            <ui-icon\n                class="ui-menu-option-icon" :icon="icon" v-if="showIcon && !isDivider && icon"\n            ></ui-icon>\n\n            <div class="ui-menu-option-text" v-text="text" v-if="!isDivider"></div>\n\n            <div\n                class="ui-menu-option-secondary-text" v-text="secondaryText"\n                v-if="showSecondaryText && !isDivider && secondaryText"\n            ></div>\n        '
		    },
		
		    mixins: [_ShowsRippleInk2.default]
		};

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiRippleInk = __webpack_require__(20);
		
		var _UiRippleInk2 = _interopRequireDefault(_UiRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    props: {
		        hideRippleInk: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    components: {
		        UiRippleInk: _UiRippleInk2.default
		    }
		};

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(21)
		__vue_script__ = __webpack_require__(22)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRippleInk.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(56)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRippleInk.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 21 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _classlist = __webpack_require__(23);
		
		var _classlist2 = _interopRequireDefault(_classlist);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var startRipple = function startRipple(eventType, event) {
		    var holder = event.currentTarget;
		
		    if (!_classlist2.default.has(holder, 'ui-ripple-ink')) {
		        holder = holder.querySelector('.ui-ripple-ink');
		
		        if (!holder) {
		            return;
		        }
		    }
		
		    var prev = holder.getAttribute('data-ui-event');
		
		    if (prev && prev !== eventType) {
		        return;
		    }
		
		    holder.setAttribute('data-ui-event', eventType);
		
		    var rect = holder.getBoundingClientRect();
		    var x = event.offsetX;
		    var y;
		
		    if (x !== undefined) {
		        y = event.offsetY;
		    } else {
		        x = event.clientX - rect.left;
		        y = event.clientY - rect.top;
		    }
		
		    var ripple = document.createElement('div');
		    var max;
		
		    if (rect.width === rect.height) {
		        max = rect.width * 1.412;
		    } else {
		        max = Math.sqrt(rect.width * rect.width + rect.height * rect.height);
		    }
		
		    var dim = max * 2 + 'px';
		
		    ripple.style.width = dim;
		    ripple.style.height = dim;
		    ripple.style.marginLeft = -max + x + 'px';
		    ripple.style.marginTop = -max + y + 'px';
		
		    ripple.className = 'ripple';
		    holder.appendChild(ripple);
		
		    setTimeout(function () {
		        _classlist2.default.add(ripple, 'held');
		    }, 0);
		
		    var releaseEvent = eventType === 'mousedown' ? 'mouseup' : 'touchend';
		
		    var release = function release() {
		        document.removeEventListener(releaseEvent, release);
		
		        _classlist2.default.add(ripple, 'done');
		
		        setTimeout(function () {
		            holder.removeChild(ripple);
		
		            if (!holder.children.length) {
		                _classlist2.default.remove(holder, 'active');
		                holder.removeAttribute('data-ui-event');
		            }
		        }, 450);
		    };
		
		    document.addEventListener(releaseEvent, release);
		};
		
		var handleMouseDown = function handleMouseDown(e) {
		    if (e.button === 0) {
		        startRipple(e.type, e);
		    }
		};
		
		var handleTouchStart = function handleTouchStart(e) {
		    if (e.changedTouches) {
		        for (var i = 0; i < e.changedTouches.length; ++i) {
		            startRipple(e.type, e.changedTouches[i]);
		        }
		    }
		};
		
		exports.default = {
		    name: 'ui-ripple-ink',
		
		    props: {
		        trigger: {
		            type: Element,
		            required: true
		        }
		    },
		
		    watch: {
		        trigger: function trigger() {
		            this.initialize();
		        }
		    },
		
		    ready: function ready() {
		        this.initialize();
		    },
		    beforeDestory: function beforeDestory() {
		        if (this.trigger) {
		            this.trigger.removeEventListener('mousedown', handleMouseDown);
		            this.trigger.removeEventListener('touchstart', handleTouchStart);
		        }
		    },
		
		
		    methods: {
		        initialize: function initialize() {
		            if (this.trigger) {
		                this.trigger.addEventListener('touchstart', handleTouchStart);
		                this.trigger.addEventListener('mousedown', handleMouseDown);
		            }
		        }
		    }
		};

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _typeof2 = __webpack_require__(24);
		
		var _typeof3 = _interopRequireDefault(_typeof2);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		var trim = /^\s+|\s+$/g;
		var whitespace = /\s+/g;
		
		function interpret(input) {
		    return typeof input === 'string' ? input.replace(trim, '').split(whitespace) : input;
		}
		
		function classes(el) {
		    if (isElement(el)) {
		        return el.className.replace(trim, '').split(whitespace);
		    }
		
		    return [];
		}
		
		function set(el, input) {
		    if (isElement(el)) {
		        el.className = interpret(input).join(' ');
		    }
		}
		
		function add(el, input) {
		    var current = remove(el, input);
		    var values = interpret(input);
		
		    current.push.apply(current, values);
		    set(el, current);
		
		    return current;
		}
		
		function remove(el, input) {
		    var current = classes(el);
		    var values = interpret(input);
		
		    values.forEach(function (value) {
		        var i = current.indexOf(value);
		        if (i !== -1) {
		            current.splice(i, 1);
		        }
		    });
		
		    set(el, current);
		
		    return current;
		}
		
		function contains(el, input) {
		    var current = classes(el);
		    var values = interpret(input);
		
		    return values.every(function (value) {
		        return current.indexOf(value) !== -1;
		    });
		}
		
		function isElement(o) {
		    var elementObjects = (typeof HTMLElement === 'undefined' ? 'undefined' : (0, _typeof3.default)(HTMLElement)) === 'object';
		
		    return elementObjects ? o instanceof HTMLElement : isElementObject(o);
		}
		
		function isElementObject(o) {
		    return o && (typeof o === 'undefined' ? 'undefined' : (0, _typeof3.default)(o)) === 'object' && typeof o.nodeName === 'string' && o.nodeType === 1;
		}
		
		exports.default = {
		    add: add,
		    remove: remove,
		    contains: contains,
		    has: contains,
		    set: set,
		    get: classes
		};

	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		"use strict";
		
		var _Symbol = __webpack_require__(25)["default"];
		
		exports["default"] = function (obj) {
		  return obj && obj.constructor === _Symbol ? "symbol" : typeof obj;
		};
		
		exports.__esModule = true;

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = { "default": __webpack_require__(26), __esModule: true };

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		__webpack_require__(27);
		__webpack_require__(55);
		module.exports = __webpack_require__(34).Symbol;

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		// ECMAScript 6 symbols shim
		var $              = __webpack_require__(28)
		  , global         = __webpack_require__(29)
		  , has            = __webpack_require__(30)
		  , DESCRIPTORS    = __webpack_require__(31)
		  , $export        = __webpack_require__(33)
		  , redefine       = __webpack_require__(37)
		  , $fails         = __webpack_require__(32)
		  , shared         = __webpack_require__(40)
		  , setToStringTag = __webpack_require__(41)
		  , uid            = __webpack_require__(43)
		  , wks            = __webpack_require__(42)
		  , keyOf          = __webpack_require__(44)
		  , $names         = __webpack_require__(49)
		  , enumKeys       = __webpack_require__(50)
		  , isArray        = __webpack_require__(51)
		  , anObject       = __webpack_require__(52)
		  , toIObject      = __webpack_require__(45)
		  , createDesc     = __webpack_require__(39)
		  , getDesc        = $.getDesc
		  , setDesc        = $.setDesc
		  , _create        = $.create
		  , getNames       = $names.get
		  , $Symbol        = global.Symbol
		  , $JSON          = global.JSON
		  , _stringify     = $JSON && $JSON.stringify
		  , setter         = false
		  , HIDDEN         = wks('_hidden')
		  , isEnum         = $.isEnum
		  , SymbolRegistry = shared('symbol-registry')
		  , AllSymbols     = shared('symbols')
		  , useNative      = typeof $Symbol == 'function'
		  , ObjectProto    = Object.prototype;
		
		// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
		var setSymbolDesc = DESCRIPTORS && $fails(function(){
		  return _create(setDesc({}, 'a', {
		    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
		  })).a != 7;
		}) ? function(it, key, D){
		  var protoDesc = getDesc(ObjectProto, key);
		  if(protoDesc)delete ObjectProto[key];
		  setDesc(it, key, D);
		  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
		} : setDesc;
		
		var wrap = function(tag){
		  var sym = AllSymbols[tag] = _create($Symbol.prototype);
		  sym._k = tag;
		  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
		    configurable: true,
		    set: function(value){
		      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
		      setSymbolDesc(this, tag, createDesc(1, value));
		    }
		  });
		  return sym;
		};
		
		var isSymbol = function(it){
		  return typeof it == 'symbol';
		};
		
		var $defineProperty = function defineProperty(it, key, D){
		  if(D && has(AllSymbols, key)){
		    if(!D.enumerable){
		      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
		      it[HIDDEN][key] = true;
		    } else {
		      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
		      D = _create(D, {enumerable: createDesc(0, false)});
		    } return setSymbolDesc(it, key, D);
		  } return setDesc(it, key, D);
		};
		var $defineProperties = function defineProperties(it, P){
		  anObject(it);
		  var keys = enumKeys(P = toIObject(P))
		    , i    = 0
		    , l = keys.length
		    , key;
		  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
		  return it;
		};
		var $create = function create(it, P){
		  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
		};
		var $propertyIsEnumerable = function propertyIsEnumerable(key){
		  var E = isEnum.call(this, key);
		  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
		    ? E : true;
		};
		var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
		  var D = getDesc(it = toIObject(it), key);
		  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
		  return D;
		};
		var $getOwnPropertyNames = function getOwnPropertyNames(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
		  return result;
		};
		var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
		  var names  = getNames(toIObject(it))
		    , result = []
		    , i      = 0
		    , key;
		  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
		  return result;
		};
		var $stringify = function stringify(it){
		  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
		  var args = [it]
		    , i    = 1
		    , $$   = arguments
		    , replacer, $replacer;
		  while($$.length > i)args.push($$[i++]);
		  replacer = args[1];
		  if(typeof replacer == 'function')$replacer = replacer;
		  if($replacer || !isArray(replacer))replacer = function(key, value){
		    if($replacer)value = $replacer.call(this, key, value);
		    if(!isSymbol(value))return value;
		  };
		  args[1] = replacer;
		  return _stringify.apply($JSON, args);
		};
		var buggyJSON = $fails(function(){
		  var S = $Symbol();
		  // MS Edge converts symbol values to JSON as {}
		  // WebKit converts symbol values to JSON as null
		  // V8 throws on boxed symbols
		  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
		});
		
		// 19.4.1.1 Symbol([description])
		if(!useNative){
		  $Symbol = function Symbol(){
		    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
		    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
		  };
		  redefine($Symbol.prototype, 'toString', function toString(){
		    return this._k;
		  });
		
		  isSymbol = function(it){
		    return it instanceof $Symbol;
		  };
		
		  $.create     = $create;
		  $.isEnum     = $propertyIsEnumerable;
		  $.getDesc    = $getOwnPropertyDescriptor;
		  $.setDesc    = $defineProperty;
		  $.setDescs   = $defineProperties;
		  $.getNames   = $names.get = $getOwnPropertyNames;
		  $.getSymbols = $getOwnPropertySymbols;
		
		  if(DESCRIPTORS && !__webpack_require__(54)){
		    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
		  }
		}
		
		var symbolStatics = {
		  // 19.4.2.1 Symbol.for(key)
		  'for': function(key){
		    return has(SymbolRegistry, key += '')
		      ? SymbolRegistry[key]
		      : SymbolRegistry[key] = $Symbol(key);
		  },
		  // 19.4.2.5 Symbol.keyFor(sym)
		  keyFor: function keyFor(key){
		    return keyOf(SymbolRegistry, key);
		  },
		  useSetter: function(){ setter = true; },
		  useSimple: function(){ setter = false; }
		};
		// 19.4.2.2 Symbol.hasInstance
		// 19.4.2.3 Symbol.isConcatSpreadable
		// 19.4.2.4 Symbol.iterator
		// 19.4.2.6 Symbol.match
		// 19.4.2.8 Symbol.replace
		// 19.4.2.9 Symbol.search
		// 19.4.2.10 Symbol.species
		// 19.4.2.11 Symbol.split
		// 19.4.2.12 Symbol.toPrimitive
		// 19.4.2.13 Symbol.toStringTag
		// 19.4.2.14 Symbol.unscopables
		$.each.call((
		  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
		  'species,split,toPrimitive,toStringTag,unscopables'
		).split(','), function(it){
		  var sym = wks(it);
		  symbolStatics[it] = useNative ? sym : wrap(sym);
		});
		
		setter = true;
		
		$export($export.G + $export.W, {Symbol: $Symbol});
		
		$export($export.S, 'Symbol', symbolStatics);
		
		$export($export.S + $export.F * !useNative, 'Object', {
		  // 19.1.2.2 Object.create(O [, Properties])
		  create: $create,
		  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
		  defineProperty: $defineProperty,
		  // 19.1.2.3 Object.defineProperties(O, Properties)
		  defineProperties: $defineProperties,
		  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
		  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
		  // 19.1.2.7 Object.getOwnPropertyNames(O)
		  getOwnPropertyNames: $getOwnPropertyNames,
		  // 19.1.2.8 Object.getOwnPropertySymbols(O)
		  getOwnPropertySymbols: $getOwnPropertySymbols
		});
		
		// 24.3.2 JSON.stringify(value [, replacer [, space]])
		$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
		
		// 19.4.3.5 Symbol.prototype[@@toStringTag]
		setToStringTag($Symbol, 'Symbol');
		// 20.2.1.9 Math[@@toStringTag]
		setToStringTag(Math, 'Math', true);
		// 24.3.3 JSON[@@toStringTag]
		setToStringTag(global.JSON, 'JSON', true);

	/***/ },
	/* 28 */
	/***/ function(module, exports) {

		var $Object = Object;
		module.exports = {
		  create:     $Object.create,
		  getProto:   $Object.getPrototypeOf,
		  isEnum:     {}.propertyIsEnumerable,
		  getDesc:    $Object.getOwnPropertyDescriptor,
		  setDesc:    $Object.defineProperty,
		  setDescs:   $Object.defineProperties,
		  getKeys:    $Object.keys,
		  getNames:   $Object.getOwnPropertyNames,
		  getSymbols: $Object.getOwnPropertySymbols,
		  each:       [].forEach
		};

	/***/ },
	/* 29 */
	/***/ function(module, exports) {

		// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
		var global = module.exports = typeof window != 'undefined' && window.Math == Math
		  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
		if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

	/***/ },
	/* 30 */
	/***/ function(module, exports) {

		var hasOwnProperty = {}.hasOwnProperty;
		module.exports = function(it, key){
		  return hasOwnProperty.call(it, key);
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		// Thank's IE8 for his funny defineProperty
		module.exports = !__webpack_require__(32)(function(){
		  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
		});

	/***/ },
	/* 32 */
	/***/ function(module, exports) {

		module.exports = function(exec){
		  try {
		    return !!exec();
		  } catch(e){
		    return true;
		  }
		};

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var global    = __webpack_require__(29)
		  , core      = __webpack_require__(34)
		  , ctx       = __webpack_require__(35)
		  , PROTOTYPE = 'prototype';
		
		var $export = function(type, name, source){
		  var IS_FORCED = type & $export.F
		    , IS_GLOBAL = type & $export.G
		    , IS_STATIC = type & $export.S
		    , IS_PROTO  = type & $export.P
		    , IS_BIND   = type & $export.B
		    , IS_WRAP   = type & $export.W
		    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
		    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
		    , key, own, out;
		  if(IS_GLOBAL)source = name;
		  for(key in source){
		    // contains in native
		    own = !IS_FORCED && target && key in target;
		    if(own && key in exports)continue;
		    // export native or passed
		    out = own ? target[key] : source[key];
		    // prevent global pollution for namespaces
		    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
		    // bind timers to global for call from export context
		    : IS_BIND && own ? ctx(out, global)
		    // wrap global constructors for prevent change them in library
		    : IS_WRAP && target[key] == out ? (function(C){
		      var F = function(param){
		        return this instanceof C ? new C(param) : C(param);
		      };
		      F[PROTOTYPE] = C[PROTOTYPE];
		      return F;
		    // make static versions for prototype methods
		    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
		    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
		  }
		};
		// type bitmap
		$export.F = 1;  // forced
		$export.G = 2;  // global
		$export.S = 4;  // static
		$export.P = 8;  // proto
		$export.B = 16; // bind
		$export.W = 32; // wrap
		module.exports = $export;

	/***/ },
	/* 34 */
	/***/ function(module, exports) {

		var core = module.exports = {version: '1.2.6'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		// optional / simple context binding
		var aFunction = __webpack_require__(36);
		module.exports = function(fn, that, length){
		  aFunction(fn);
		  if(that === undefined)return fn;
		  switch(length){
		    case 1: return function(a){
		      return fn.call(that, a);
		    };
		    case 2: return function(a, b){
		      return fn.call(that, a, b);
		    };
		    case 3: return function(a, b, c){
		      return fn.call(that, a, b, c);
		    };
		  }
		  return function(/* ...args */){
		    return fn.apply(that, arguments);
		  };
		};

	/***/ },
	/* 36 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
		  return it;
		};

	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = __webpack_require__(38);

	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		var $          = __webpack_require__(28)
		  , createDesc = __webpack_require__(39);
		module.exports = __webpack_require__(31) ? function(object, key, value){
		  return $.setDesc(object, key, createDesc(1, value));
		} : function(object, key, value){
		  object[key] = value;
		  return object;
		};

	/***/ },
	/* 39 */
	/***/ function(module, exports) {

		module.exports = function(bitmap, value){
		  return {
		    enumerable  : !(bitmap & 1),
		    configurable: !(bitmap & 2),
		    writable    : !(bitmap & 4),
		    value       : value
		  };
		};

	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var global = __webpack_require__(29)
		  , SHARED = '__core-js_shared__'
		  , store  = global[SHARED] || (global[SHARED] = {});
		module.exports = function(key){
		  return store[key] || (store[key] = {});
		};

	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var def = __webpack_require__(28).setDesc
		  , has = __webpack_require__(30)
		  , TAG = __webpack_require__(42)('toStringTag');
		
		module.exports = function(it, tag, stat){
		  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
		};

	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var store  = __webpack_require__(40)('wks')
		  , uid    = __webpack_require__(43)
		  , Symbol = __webpack_require__(29).Symbol;
		module.exports = function(name){
		  return store[name] || (store[name] =
		    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
		};

	/***/ },
	/* 43 */
	/***/ function(module, exports) {

		var id = 0
		  , px = Math.random();
		module.exports = function(key){
		  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
		};

	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var $         = __webpack_require__(28)
		  , toIObject = __webpack_require__(45);
		module.exports = function(object, el){
		  var O      = toIObject(object)
		    , keys   = $.getKeys(O)
		    , length = keys.length
		    , index  = 0
		    , key;
		  while(length > index)if(O[key = keys[index++]] === el)return key;
		};

	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		// to indexed object, toObject with fallback for non-array-like ES3 strings
		var IObject = __webpack_require__(46)
		  , defined = __webpack_require__(48);
		module.exports = function(it){
		  return IObject(defined(it));
		};

	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for non-array-like ES3 and non-enumerable old V8 strings
		var cof = __webpack_require__(47);
		module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
		  return cof(it) == 'String' ? it.split('') : Object(it);
		};

	/***/ },
	/* 47 */
	/***/ function(module, exports) {

		var toString = {}.toString;
		
		module.exports = function(it){
		  return toString.call(it).slice(8, -1);
		};

	/***/ },
	/* 48 */
	/***/ function(module, exports) {

		// 7.2.1 RequireObjectCoercible(argument)
		module.exports = function(it){
		  if(it == undefined)throw TypeError("Can't call method on  " + it);
		  return it;
		};

	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
		var toIObject = __webpack_require__(45)
		  , getNames  = __webpack_require__(28).getNames
		  , toString  = {}.toString;
		
		var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
		  ? Object.getOwnPropertyNames(window) : [];
		
		var getWindowNames = function(it){
		  try {
		    return getNames(it);
		  } catch(e){
		    return windowNames.slice();
		  }
		};
		
		module.exports.get = function getOwnPropertyNames(it){
		  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
		  return getNames(toIObject(it));
		};

	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		// all enumerable object keys, includes symbols
		var $ = __webpack_require__(28);
		module.exports = function(it){
		  var keys       = $.getKeys(it)
		    , getSymbols = $.getSymbols;
		  if(getSymbols){
		    var symbols = getSymbols(it)
		      , isEnum  = $.isEnum
		      , i       = 0
		      , key;
		    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
		  }
		  return keys;
		};

	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		// 7.2.2 IsArray(argument)
		var cof = __webpack_require__(47);
		module.exports = Array.isArray || function(arg){
		  return cof(arg) == 'Array';
		};

	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		var isObject = __webpack_require__(53);
		module.exports = function(it){
		  if(!isObject(it))throw TypeError(it + ' is not an object!');
		  return it;
		};

	/***/ },
	/* 53 */
	/***/ function(module, exports) {

		module.exports = function(it){
		  return typeof it === 'object' ? it !== null : typeof it === 'function';
		};

	/***/ },
	/* 54 */
	/***/ function(module, exports) {

		module.exports = true;

	/***/ },
	/* 55 */
	/***/ function(module, exports) {



	/***/ },
	/* 56 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-ripple-ink\"></div>\n";

	/***/ },
	/* 57 */
	/***/ function(module, exports) {

		module.exports = "\n<a\n    class=\"ui-menu-option\" role=\"menu-item\" :tabindex=\"(isDivider || disabled) ? null : '0'\"\n    :class=\"{ 'divider': isDivider, 'disabled' : disabled }\"\n>\n    <div class=\"ui-menu-option-content\" :class=\"[partial]\">\n        <partial :name=\"partial\"></partial>\n    </div>\n\n    <ui-ripple-ink\n        :trigger=\"$el\" v-if=\"!hideRippleInk && !disabled && !isDivider\"\n    ></ui-ripple-ink>\n</a>\n";

	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _tetherDrop = __webpack_require__(59);
		
		var _tetherDrop2 = _interopRequireDefault(_tetherDrop);
		
		var _classlist = __webpack_require__(23);
		
		var _classlist2 = _interopRequireDefault(_classlist);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    props: {
		        id: String,
		        trigger: Element,
		        containFocus: {
		            type: Boolean,
		            default: true
		        },
		        dropdownPosition: {
		            type: String,
		            default: 'bottom left'
		        },
		        openOn: {
		            type: String,
		            default: 'click' }
		    },
		
		    data: function data() {
		        return {
		            drop: null,
		            lastFocussedElement: null
		        };
		    },
		    ready: function ready() {
		        if (this.trigger) {
		            this.initializeDropdown();
		        }
		    },
		    beforeDestroy: function beforeDestroy() {
		        if (this.drop) {
		            this.drop.remove();
		            this.drop.destroy();
		        }
		    },
		
		
		    events: {
		        'ui-dropdown::open': function uiDropdownOpen(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.openDropdown();
		        },
		
		        'ui-dropdown::close': function uiDropdownClose(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.closeDropdown();
		        },
		
		        'ui-dropdown::toggle': function uiDropdownToggle(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.toggleDropdown();
		        }
		    },
		
		    methods: {
		        initializeDropdown: function initializeDropdown() {
		            this.drop = new _tetherDrop2.default({
		                target: this.trigger,
		                content: this.$els.dropdown,
		                position: this.dropdownPosition,
		                constrainToWindow: true,
		                openOn: this.openOn
		            });
		
		            if (this.dropdownPosition !== 'bottom left') {
		                this.drop.open();
		                this.drop.close();
		                this.drop.open();
		                this.drop.close();
		            }
		
		            this.drop.on('open', this.positionDrop);
		            this.drop.on('open', this.dropdownOpened);
		            this.drop.on('close', this.dropdownClosed);
		        },
		        openDropdown: function openDropdown() {
		            if (this.drop) {
		                this.drop.open();
		            }
		        },
		        positionDrop: function positionDrop() {
		            var drop = this.drop;
		            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
		
		            var dropWidth = drop.drop.getBoundingClientRect().width;
		            var left = drop.target.getBoundingClientRect().left;
		            var availableSpace = windowWidth - left;
		
		            if (dropWidth > availableSpace) {
		                var direction = dropWidth > availableSpace ? 'right' : 'left';
		
		                drop.tether.attachment.left = direction;
		                drop.tether.targetAttachment.left = direction;
		
		                drop.position();
		            }
		        },
		        closeDropdown: function closeDropdown() {
		            if (this.drop) {
		                this.drop.close();
		            }
		        },
		        toggleDropdown: function toggleDropdown(e) {
		            if (this.drop) {
		                this.drop.toggle(e);
		            }
		        },
		        dropdownOpened: function dropdownOpened() {
		            _classlist2.default.add(this.trigger, 'dropdown-open');
		
		            this.lastFocussedElement = document.activeElement;
		            this.$els.dropdown.focus();
		
		            this.$dispatch('dropdown-opened');
		        },
		        dropdownClosed: function dropdownClosed() {
		            _classlist2.default.remove(this.trigger, 'dropdown-open');
		
		            if (this.lastFocussedElement) {
		                this.lastFocussedElement.focus();
		            }
		
		            this.$dispatch('dropdown-closed');
		        }
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-drop 1.4.1 */
		
		(function(root, factory) {
		  if (true) {
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if (typeof exports === 'object') {
		    module.exports = factory(require('tether'));
		  } else {
		    root.Drop = factory(root.Tether);
		  }
		}(this, function(Tether) {
		
		/* global Tether */
		'use strict';
		
		var _bind = Function.prototype.bind;
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
		
		var _Tether$Utils = Tether.Utils;
		var extend = _Tether$Utils.extend;
		var addClass = _Tether$Utils.addClass;
		var removeClass = _Tether$Utils.removeClass;
		var hasClass = _Tether$Utils.hasClass;
		var Evented = _Tether$Utils.Evented;
		
		function sortAttach(str) {
		  var _str$split = str.split(' ');
		
		  var _str$split2 = _slicedToArray(_str$split, 2);
		
		  var first = _str$split2[0];
		  var second = _str$split2[1];
		
		  if (['left', 'right'].indexOf(first) >= 0) {
		    var _ref = [second, first];
		    first = _ref[0];
		    second = _ref[1];
		  }
		  return [first, second].join(' ');
		}
		
		function removeFromArray(arr, item) {
		  var index = undefined;
		  var results = [];
		  while ((index = arr.indexOf(item)) !== -1) {
		    results.push(arr.splice(index, 1));
		  }
		  return results;
		}
		
		var clickEvents = ['click'];
		if ('ontouchstart' in document.documentElement) {
		  clickEvents.push('touchstart');
		}
		
		var transitionEndEvents = {
		  'WebkitTransition': 'webkitTransitionEnd',
		  'MozTransition': 'transitionend',
		  'OTransition': 'otransitionend',
		  'transition': 'transitionend'
		};
		
		var transitionEndEvent = '';
		for (var _name in transitionEndEvents) {
		  if (({}).hasOwnProperty.call(transitionEndEvents, _name)) {
		    var tempEl = document.createElement('p');
		    if (typeof tempEl.style[_name] !== 'undefined') {
		      transitionEndEvent = transitionEndEvents[_name];
		    }
		  }
		}
		
		var MIRROR_ATTACH = {
		  left: 'right',
		  right: 'left',
		  top: 'bottom',
		  bottom: 'top',
		  middle: 'middle',
		  center: 'center'
		};
		
		var allDrops = {};
		
		// Drop can be included in external libraries.  Calling createContext gives you a fresh
		// copy of drop which won't interact with other copies on the page (beyond calling the document events).
		
		function createContext() {
		  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  var drop = function drop() {
		    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		      args[_key] = arguments[_key];
		    }
		
		    return new (_bind.apply(DropInstance, [null].concat(args)))();
		  };
		
		  extend(drop, {
		    createContext: createContext,
		    drops: [],
		    defaults: {}
		  });
		
		  var defaultOptions = {
		    classPrefix: 'drop',
		    defaults: {
		      position: 'bottom left',
		      openOn: 'click',
		      beforeClose: null,
		      constrainToScrollParent: true,
		      constrainToWindow: true,
		      classes: '',
		      remove: false,
		      openDelay: 0,
		      closeDelay: 50,
		      // inherited from openDelay and closeDelay if not explicitly defined
		      focusDelay: null,
		      blurDelay: null,
		      hoverOpenDelay: null,
		      hoverCloseDelay: null,
		      tetherOptions: {}
		    }
		  };
		
		  extend(drop, defaultOptions, options);
		  extend(drop.defaults, defaultOptions.defaults, options.defaults);
		
		  if (typeof allDrops[drop.classPrefix] === 'undefined') {
		    allDrops[drop.classPrefix] = [];
		  }
		
		  drop.updateBodyClasses = function () {
		    // There is only one body, so despite the context concept, we still iterate through all
		    // drops which share our classPrefix.
		
		    var anyOpen = false;
		    var drops = allDrops[drop.classPrefix];
		    var len = drops.length;
		    for (var i = 0; i < len; ++i) {
		      if (drops[i].isOpened()) {
		        anyOpen = true;
		        break;
		      }
		    }
		
		    if (anyOpen) {
		      addClass(document.body, drop.classPrefix + '-open');
		    } else {
		      removeClass(document.body, drop.classPrefix + '-open');
		    }
		  };
		
		  var DropInstance = (function (_Evented) {
		    _inherits(DropInstance, _Evented);
		
		    function DropInstance(opts) {
		      _classCallCheck(this, DropInstance);
		
		      _get(Object.getPrototypeOf(DropInstance.prototype), 'constructor', this).call(this);
		      this.options = extend({}, drop.defaults, opts);
		      this.target = this.options.target;
		
		      if (typeof this.target === 'undefined') {
		        throw new Error('Drop Error: You must provide a target.');
		      }
		
		      var dataPrefix = 'data-' + drop.classPrefix;
		
		      var contentAttr = this.target.getAttribute(dataPrefix);
		      if (contentAttr && this.options.content == null) {
		        this.options.content = contentAttr;
		      }
		
		      var attrsOverride = ['position', 'openOn'];
		      for (var i = 0; i < attrsOverride.length; ++i) {
		
		        var override = this.target.getAttribute(dataPrefix + '-' + attrsOverride[i]);
		        if (override && this.options[attrsOverride[i]] == null) {
		          this.options[attrsOverride[i]] = override;
		        }
		      }
		
		      if (this.options.classes && this.options.addTargetClasses !== false) {
		        addClass(this.target, this.options.classes);
		      }
		
		      drop.drops.push(this);
		      allDrops[drop.classPrefix].push(this);
		
		      this._boundEvents = [];
		      this.bindMethods();
		      this.setupElements();
		      this.setupEvents();
		      this.setupTether();
		    }
		
		    _createClass(DropInstance, [{
		      key: '_on',
		      value: function _on(element, event, handler) {
		        this._boundEvents.push({ element: element, event: event, handler: handler });
		        element.addEventListener(event, handler);
		      }
		    }, {
		      key: 'bindMethods',
		      value: function bindMethods() {
		        this.transitionEndHandler = this._transitionEndHandler.bind(this);
		      }
		    }, {
		      key: 'setupElements',
		      value: function setupElements() {
		        var _this = this;
		
		        this.drop = document.createElement('div');
		        addClass(this.drop, drop.classPrefix);
		
		        if (this.options.classes) {
		          addClass(this.drop, this.options.classes);
		        }
		
		        this.content = document.createElement('div');
		        addClass(this.content, drop.classPrefix + '-content');
		
		        if (typeof this.options.content === 'function') {
		          var generateAndSetContent = function generateAndSetContent() {
		            // content function might return a string or an element
		            var contentElementOrHTML = _this.options.content.call(_this, _this);
		
		            if (typeof contentElementOrHTML === 'string') {
		              _this.content.innerHTML = contentElementOrHTML;
		            } else if (typeof contentElementOrHTML === 'object') {
		              _this.content.innerHTML = '';
		              _this.content.appendChild(contentElementOrHTML);
		            } else {
		              throw new Error('Drop Error: Content function should return a string or HTMLElement.');
		            }
		          };
		
		          generateAndSetContent();
		          this.on('open', generateAndSetContent.bind(this));
		        } else if (typeof this.options.content === 'object') {
		          this.content.appendChild(this.options.content);
		        } else {
		          this.content.innerHTML = this.options.content;
		        }
		
		        this.drop.appendChild(this.content);
		      }
		    }, {
		      key: 'setupTether',
		      value: function setupTether() {
		        // Tether expects two attachment points, one in the target element, one in the
		        // drop.  We use a single one, and use the order as well, to allow us to put
		        // the drop on either side of any of the four corners.  This magic converts between
		        // the two:
		        var dropAttach = this.options.position.split(' ');
		        dropAttach[0] = MIRROR_ATTACH[dropAttach[0]];
		        dropAttach = dropAttach.join(' ');
		
		        var constraints = [];
		        if (this.options.constrainToScrollParent) {
		          constraints.push({
		            to: 'scrollParent',
		            pin: 'top, bottom',
		            attachment: 'together none'
		          });
		        } else {
		          // To get 'out of bounds' classes
		          constraints.push({
		            to: 'scrollParent'
		          });
		        }
		
		        if (this.options.constrainToWindow !== false) {
		          constraints.push({
		            to: 'window',
		            attachment: 'together'
		          });
		        } else {
		          // To get 'out of bounds' classes
		          constraints.push({
		            to: 'window'
		          });
		        }
		
		        var opts = {
		          element: this.drop,
		          target: this.target,
		          attachment: sortAttach(dropAttach),
		          targetAttachment: sortAttach(this.options.position),
		          classPrefix: drop.classPrefix,
		          offset: '0 0',
		          targetOffset: '0 0',
		          enabled: false,
		          constraints: constraints,
		          addTargetClasses: this.options.addTargetClasses
		        };
		
		        if (this.options.tetherOptions !== false) {
		          this.tether = new Tether(extend({}, opts, this.options.tetherOptions));
		        }
		      }
		    }, {
		      key: 'setupEvents',
		      value: function setupEvents() {
		        var _this2 = this;
		
		        if (!this.options.openOn) {
		          return;
		        }
		
		        if (this.options.openOn === 'always') {
		          setTimeout(this.open.bind(this));
		          return;
		        }
		
		        var events = this.options.openOn.split(' ');
		
		        if (events.indexOf('click') >= 0) {
		          var openHandler = function openHandler(event) {
		            _this2.toggle(event);
		            event.preventDefault();
		          };
		
		          var closeHandler = function closeHandler(event) {
		            if (!_this2.isOpened()) {
		              return;
		            }
		
		            // Clicking inside dropdown
		            if (event.target === _this2.drop || _this2.drop.contains(event.target)) {
		              return;
		            }
		
		            // Clicking target
		            if (event.target === _this2.target || _this2.target.contains(event.target)) {
		              return;
		            }
		
		            _this2.close(event);
		          };
		
		          for (var i = 0; i < clickEvents.length; ++i) {
		            var clickEvent = clickEvents[i];
		            this._on(this.target, clickEvent, openHandler);
		            this._on(document, clickEvent, closeHandler);
		          }
		        }
		
		        var inTimeout = null;
		        var outTimeout = null;
		
		        var inHandler = function inHandler(event) {
		          if (outTimeout !== null) {
		            clearTimeout(outTimeout);
		          } else {
		            inTimeout = setTimeout(function () {
		              _this2.open(event);
		              inTimeout = null;
		            }, (event.type === 'focus' ? _this2.options.focusDelay : _this2.options.hoverOpenDelay) || _this2.options.openDelay);
		          }
		        };
		
		        var outHandler = function outHandler(event) {
		          if (inTimeout !== null) {
		            clearTimeout(inTimeout);
		          } else {
		            outTimeout = setTimeout(function () {
		              _this2.close(event);
		              outTimeout = null;
		            }, (event.type === 'blur' ? _this2.options.blurDelay : _this2.options.hoverCloseDelay) || _this2.options.closeDelay);
		          }
		        };
		
		        if (events.indexOf('hover') >= 0) {
		          this._on(this.target, 'mouseover', inHandler);
		          this._on(this.drop, 'mouseover', inHandler);
		          this._on(this.target, 'mouseout', outHandler);
		          this._on(this.drop, 'mouseout', outHandler);
		        }
		
		        if (events.indexOf('focus') >= 0) {
		          this._on(this.target, 'focus', inHandler);
		          this._on(this.drop, 'focus', inHandler);
		          this._on(this.target, 'blur', outHandler);
		          this._on(this.drop, 'blur', outHandler);
		        }
		      }
		    }, {
		      key: 'isOpened',
		      value: function isOpened() {
		        if (this.drop) {
		          return hasClass(this.drop, drop.classPrefix + '-open');
		        }
		      }
		    }, {
		      key: 'toggle',
		      value: function toggle(event) {
		        if (this.isOpened()) {
		          this.close(event);
		        } else {
		          this.open(event);
		        }
		      }
		    }, {
		      key: 'open',
		      value: function open(event) {
		        var _this3 = this;
		
		        /* eslint no-unused-vars: 0 */
		        if (this.isOpened()) {
		          return;
		        }
		
		        if (!this.drop.parentNode) {
		          document.body.appendChild(this.drop);
		        }
		
		        if (typeof this.tether !== 'undefined') {
		          this.tether.enable();
		        }
		
		        addClass(this.drop, drop.classPrefix + '-open');
		        addClass(this.drop, drop.classPrefix + '-open-transitionend');
		
		        setTimeout(function () {
		          if (_this3.drop) {
		            addClass(_this3.drop, drop.classPrefix + '-after-open');
		          }
		        });
		
		        if (typeof this.tether !== 'undefined') {
		          this.tether.position();
		        }
		
		        this.trigger('open');
		
		        drop.updateBodyClasses();
		      }
		    }, {
		      key: '_transitionEndHandler',
		      value: function _transitionEndHandler(e) {
		        if (e.target !== e.currentTarget) {
		          return;
		        }
		
		        if (!hasClass(this.drop, drop.classPrefix + '-open')) {
		          removeClass(this.drop, drop.classPrefix + '-open-transitionend');
		        }
		        this.drop.removeEventListener(transitionEndEvent, this.transitionEndHandler);
		      }
		    }, {
		      key: 'beforeCloseHandler',
		      value: function beforeCloseHandler(event) {
		        var shouldClose = true;
		
		        if (!this.isClosing && typeof this.options.beforeClose === 'function') {
		          this.isClosing = true;
		          shouldClose = this.options.beforeClose(event, this) !== false;
		        }
		
		        this.isClosing = false;
		
		        return shouldClose;
		      }
		    }, {
		      key: 'close',
		      value: function close(event) {
		        if (!this.isOpened()) {
		          return;
		        }
		
		        if (!this.beforeCloseHandler(event)) {
		          return;
		        }
		
		        removeClass(this.drop, drop.classPrefix + '-open');
		        removeClass(this.drop, drop.classPrefix + '-after-open');
		
		        this.drop.addEventListener(transitionEndEvent, this.transitionEndHandler);
		
		        this.trigger('close');
		
		        if (typeof this.tether !== 'undefined') {
		          this.tether.disable();
		        }
		
		        drop.updateBodyClasses();
		
		        if (this.options.remove) {
		          this.remove(event);
		        }
		      }
		    }, {
		      key: 'remove',
		      value: function remove(event) {
		        this.close(event);
		        if (this.drop.parentNode) {
		          this.drop.parentNode.removeChild(this.drop);
		        }
		      }
		    }, {
		      key: 'position',
		      value: function position() {
		        if (this.isOpened() && typeof this.tether !== 'undefined') {
		          this.tether.position();
		        }
		      }
		    }, {
		      key: 'destroy',
		      value: function destroy() {
		        this.remove();
		
		        if (typeof this.tether !== 'undefined') {
		          this.tether.destroy();
		        }
		
		        for (var i = 0; i < this._boundEvents.length; ++i) {
		          var _boundEvents$i = this._boundEvents[i];
		          var element = _boundEvents$i.element;
		          var _event = _boundEvents$i.event;
		          var handler = _boundEvents$i.handler;
		
		          element.removeEventListener(_event, handler);
		        }
		
		        this._boundEvents = [];
		
		        this.tether = null;
		        this.drop = null;
		        this.content = null;
		        this.target = null;
		
		        removeFromArray(allDrops[drop.classPrefix], this);
		        removeFromArray(drop.drops, this);
		      }
		    }]);
		
		    return DropInstance;
		  })(Evented);
		
		  return drop;
		}
		
		var Drop = createContext();
		
		document.addEventListener('DOMContentLoaded', function () {
		  Drop.updateBodyClasses();
		});
		return Drop;
		
		}));


	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.2.0 */
		
		(function(root, factory) {
		  if (true) {
		    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if (typeof exports === 'object') {
		    module.exports = factory(require, exports, module);
		  } else {
		    root.Tether = factory();
		  }
		}(this, function(require, exports, module) {
		
		'use strict';
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		var TetherBase = undefined;
		if (typeof TetherBase === 'undefined') {
		  TetherBase = { modules: [] };
		}
		
		function getScrollParent(el) {
		  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
		  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
		  var computedStyle = getComputedStyle(el) || {};
		  var position = computedStyle.position;
		
		  if (position === 'fixed') {
		    return el;
		  }
		
		  var parent = el;
		  while (parent = parent.parentNode) {
		    var style = undefined;
		    try {
		      style = getComputedStyle(parent);
		    } catch (err) {}
		
		    if (typeof style === 'undefined' || style === null) {
		      return parent;
		    }
		
		    var _style = style;
		    var overflow = _style.overflow;
		    var overflowX = _style.overflowX;
		    var overflowY = _style.overflowY;
		
		    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
		      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
		        return parent;
		      }
		    }
		  }
		
		  return document.body;
		}
		
		var uniqueId = (function () {
		  var id = 0;
		  return function () {
		    return ++id;
		  };
		})();
		
		var zeroPosCache = {};
		var getOrigin = function getOrigin(doc) {
		  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
		  // jitter as the user scrolls that messes with our ability to detect if two positions
		  // are equivilant or not.  We place an element at the top left of the page that will
		  // get the same jitter, so we can cancel the two out.
		  var node = doc._tetherZeroElement;
		  if (typeof node === 'undefined') {
		    node = doc.createElement('div');
		    node.setAttribute('data-tether-id', uniqueId());
		    extend(node.style, {
		      top: 0,
		      left: 0,
		      position: 'absolute'
		    });
		
		    doc.body.appendChild(node);
		
		    doc._tetherZeroElement = node;
		  }
		
		  var id = node.getAttribute('data-tether-id');
		  if (typeof zeroPosCache[id] === 'undefined') {
		    zeroPosCache[id] = {};
		
		    var rect = node.getBoundingClientRect();
		    for (var k in rect) {
		      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
		      zeroPosCache[id][k] = rect[k];
		    }
		
		    // Clear the cache when this position call is done
		    defer(function () {
		      delete zeroPosCache[id];
		    });
		  }
		
		  return zeroPosCache[id];
		};
		
		function getBounds(el) {
		  var doc = undefined;
		  if (el === document) {
		    doc = document;
		    el = document.documentElement;
		  } else {
		    doc = el.ownerDocument;
		  }
		
		  var docEl = doc.documentElement;
		
		  var box = {};
		  // The original object returned by getBoundingClientRect is immutable, so we clone it
		  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
		  var rect = el.getBoundingClientRect();
		  for (var k in rect) {
		    box[k] = rect[k];
		  }
		
		  var origin = getOrigin(doc);
		
		  box.top -= origin.top;
		  box.left -= origin.left;
		
		  if (typeof box.width === 'undefined') {
		    box.width = document.body.scrollWidth - box.left - box.right;
		  }
		  if (typeof box.height === 'undefined') {
		    box.height = document.body.scrollHeight - box.top - box.bottom;
		  }
		
		  box.top = box.top - docEl.clientTop;
		  box.left = box.left - docEl.clientLeft;
		  box.right = doc.body.clientWidth - box.width - box.left;
		  box.bottom = doc.body.clientHeight - box.height - box.top;
		
		  return box;
		}
		
		function getOffsetParent(el) {
		  return el.offsetParent || document.documentElement;
		}
		
		function getScrollBarSize() {
		  var inner = document.createElement('div');
		  inner.style.width = '100%';
		  inner.style.height = '200px';
		
		  var outer = document.createElement('div');
		  extend(outer.style, {
		    position: 'absolute',
		    top: 0,
		    left: 0,
		    pointerEvents: 'none',
		    visibility: 'hidden',
		    width: '200px',
		    height: '150px',
		    overflow: 'hidden'
		  });
		
		  outer.appendChild(inner);
		
		  document.body.appendChild(outer);
		
		  var widthContained = inner.offsetWidth;
		  outer.style.overflow = 'scroll';
		  var widthScroll = inner.offsetWidth;
		
		  if (widthContained === widthScroll) {
		    widthScroll = outer.clientWidth;
		  }
		
		  document.body.removeChild(outer);
		
		  var width = widthContained - widthScroll;
		
		  return { width: width, height: width };
		}
		
		function extend() {
		  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  var args = [];
		
		  Array.prototype.push.apply(args, arguments);
		
		  args.slice(1).forEach(function (obj) {
		    if (obj) {
		      for (var key in obj) {
		        if (({}).hasOwnProperty.call(obj, key)) {
		          out[key] = obj[key];
		        }
		      }
		    }
		  });
		
		  return out;
		}
		
		function removeClass(el, name) {
		  if (typeof el.classList !== 'undefined') {
		    name.split(' ').forEach(function (cls) {
		      if (cls.trim()) {
		        el.classList.remove(cls);
		      }
		    });
		  } else {
		    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
		    var className = getClassName(el).replace(regex, ' ');
		    setClassName(el, className);
		  }
		}
		
		function addClass(el, name) {
		  if (typeof el.classList !== 'undefined') {
		    name.split(' ').forEach(function (cls) {
		      if (cls.trim()) {
		        el.classList.add(cls);
		      }
		    });
		  } else {
		    removeClass(el, name);
		    var cls = getClassName(el) + (' ' + name);
		    setClassName(el, cls);
		  }
		}
		
		function hasClass(el, name) {
		  if (typeof el.classList !== 'undefined') {
		    return el.classList.contains(name);
		  }
		  var className = getClassName(el);
		  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
		}
		
		function getClassName(el) {
		  if (el.className instanceof SVGAnimatedString) {
		    return el.className.baseVal;
		  }
		  return el.className;
		}
		
		function setClassName(el, className) {
		  el.setAttribute('class', className);
		}
		
		function updateClasses(el, add, all) {
		  // Of the set of 'all' classes, we need the 'add' classes, and only the
		  // 'add' classes to be set.
		  all.forEach(function (cls) {
		    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
		      removeClass(el, cls);
		    }
		  });
		
		  add.forEach(function (cls) {
		    if (!hasClass(el, cls)) {
		      addClass(el, cls);
		    }
		  });
		}
		
		var deferred = [];
		
		var defer = function defer(fn) {
		  deferred.push(fn);
		};
		
		var flush = function flush() {
		  var fn = undefined;
		  while (fn = deferred.pop()) {
		    fn();
		  }
		};
		
		var Evented = (function () {
		  function Evented() {
		    _classCallCheck(this, Evented);
		  }
		
		  _createClass(Evented, [{
		    key: 'on',
		    value: function on(event, handler, ctx) {
		      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];
		
		      if (typeof this.bindings === 'undefined') {
		        this.bindings = {};
		      }
		      if (typeof this.bindings[event] === 'undefined') {
		        this.bindings[event] = [];
		      }
		      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
		    }
		  }, {
		    key: 'once',
		    value: function once(event, handler, ctx) {
		      this.on(event, handler, ctx, true);
		    }
		  }, {
		    key: 'off',
		    value: function off(event, handler) {
		      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
		        return;
		      }
		
		      if (typeof handler === 'undefined') {
		        delete this.bindings[event];
		      } else {
		        var i = 0;
		        while (i < this.bindings[event].length) {
		          if (this.bindings[event][i].handler === handler) {
		            this.bindings[event].splice(i, 1);
		          } else {
		            ++i;
		          }
		        }
		      }
		    }
		  }, {
		    key: 'trigger',
		    value: function trigger(event) {
		      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
		        var i = 0;
		
		        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		          args[_key - 1] = arguments[_key];
		        }
		
		        while (i < this.bindings[event].length) {
		          var _bindings$event$i = this.bindings[event][i];
		          var handler = _bindings$event$i.handler;
		          var ctx = _bindings$event$i.ctx;
		          var once = _bindings$event$i.once;
		
		          var context = ctx;
		          if (typeof context === 'undefined') {
		            context = this;
		          }
		
		          handler.apply(context, args);
		
		          if (once) {
		            this.bindings[event].splice(i, 1);
		          } else {
		            ++i;
		          }
		        }
		      }
		    }
		  }]);
		
		  return Evented;
		})();
		
		TetherBase.Utils = {
		  getScrollParent: getScrollParent,
		  getBounds: getBounds,
		  getOffsetParent: getOffsetParent,
		  extend: extend,
		  addClass: addClass,
		  removeClass: removeClass,
		  hasClass: hasClass,
		  updateClasses: updateClasses,
		  defer: defer,
		  flush: flush,
		  uniqueId: uniqueId,
		  Evented: Evented,
		  getScrollBarSize: getScrollBarSize
		};
		/* globals TetherBase, performance */
		
		'use strict';
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		if (typeof TetherBase === 'undefined') {
		  throw new Error('You must include the utils.js file before tether.js');
		}
		
		var _TetherBase$Utils = TetherBase.Utils;
		var getScrollParent = _TetherBase$Utils.getScrollParent;
		var getBounds = _TetherBase$Utils.getBounds;
		var getOffsetParent = _TetherBase$Utils.getOffsetParent;
		var extend = _TetherBase$Utils.extend;
		var addClass = _TetherBase$Utils.addClass;
		var removeClass = _TetherBase$Utils.removeClass;
		var updateClasses = _TetherBase$Utils.updateClasses;
		var defer = _TetherBase$Utils.defer;
		var flush = _TetherBase$Utils.flush;
		var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
		
		function within(a, b) {
		  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
		
		  return a + diff >= b && b >= a - diff;
		}
		
		var transformKey = (function () {
		  if (typeof document === 'undefined') {
		    return '';
		  }
		  var el = document.createElement('div');
		
		  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
		  for (var i = 0; i < transforms.length; ++i) {
		    var key = transforms[i];
		    if (el.style[key] !== undefined) {
		      return key;
		    }
		  }
		})();
		
		var tethers = [];
		
		var position = function position() {
		  tethers.forEach(function (tether) {
		    tether.position(false);
		  });
		  flush();
		};
		
		function now() {
		  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
		    return performance.now();
		  }
		  return +new Date();
		}
		
		(function () {
		  var lastCall = null;
		  var lastDuration = null;
		  var pendingTimeout = null;
		
		  var tick = function tick() {
		    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
		      // We voluntarily throttle ourselves if we can't manage 60fps
		      lastDuration = Math.min(lastDuration - 16, 250);
		
		      // Just in case this is the last event, remember to position just once more
		      pendingTimeout = setTimeout(tick, 250);
		      return;
		    }
		
		    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
		      // Some browsers call events a little too frequently, refuse to run more than is reasonable
		      return;
		    }
		
		    if (typeof pendingTimeout !== 'undefined') {
		      clearTimeout(pendingTimeout);
		      pendingTimeout = null;
		    }
		
		    lastCall = now();
		    position();
		    lastDuration = now() - lastCall;
		  };
		
		  if (typeof window !== 'undefined') {
		    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
		      window.addEventListener(event, tick);
		    });
		  }
		})();
		
		var MIRROR_LR = {
		  center: 'center',
		  left: 'right',
		  right: 'left'
		};
		
		var MIRROR_TB = {
		  middle: 'middle',
		  top: 'bottom',
		  bottom: 'top'
		};
		
		var OFFSET_MAP = {
		  top: 0,
		  left: 0,
		  middle: '50%',
		  center: '50%',
		  bottom: '100%',
		  right: '100%'
		};
		
		var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
		  var left = attachment.left;
		  var top = attachment.top;
		
		  if (left === 'auto') {
		    left = MIRROR_LR[relativeToAttachment.left];
		  }
		
		  if (top === 'auto') {
		    top = MIRROR_TB[relativeToAttachment.top];
		  }
		
		  return { left: left, top: top };
		};
		
		var attachmentToOffset = function attachmentToOffset(attachment) {
		  var left = attachment.left;
		  var top = attachment.top;
		
		  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
		    left = OFFSET_MAP[attachment.left];
		  }
		
		  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
		    top = OFFSET_MAP[attachment.top];
		  }
		
		  return { left: left, top: top };
		};
		
		function addOffset() {
		  var out = { top: 0, left: 0 };
		
		  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
		    offsets[_key] = arguments[_key];
		  }
		
		  offsets.forEach(function (_ref) {
		    var top = _ref.top;
		    var left = _ref.left;
		
		    if (typeof top === 'string') {
		      top = parseFloat(top, 10);
		    }
		    if (typeof left === 'string') {
		      left = parseFloat(left, 10);
		    }
		
		    out.top += top;
		    out.left += left;
		  });
		
		  return out;
		}
		
		function offsetToPx(offset, size) {
		  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
		    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
		  }
		  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
		    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
		  }
		
		  return offset;
		}
		
		var parseOffset = function parseOffset(value) {
		  var _value$split = value.split(' ');
		
		  var _value$split2 = _slicedToArray(_value$split, 2);
		
		  var top = _value$split2[0];
		  var left = _value$split2[1];
		
		  return { top: top, left: left };
		};
		var parseAttachment = parseOffset;
		
		var TetherClass = (function () {
		  function TetherClass(options) {
		    var _this = this;
		
		    _classCallCheck(this, TetherClass);
		
		    this.position = this.position.bind(this);
		
		    tethers.push(this);
		
		    this.history = [];
		
		    this.setOptions(options, false);
		
		    TetherBase.modules.forEach(function (module) {
		      if (typeof module.initialize !== 'undefined') {
		        module.initialize.call(_this);
		      }
		    });
		
		    this.position();
		  }
		
		  _createClass(TetherClass, [{
		    key: 'getClass',
		    value: function getClass() {
		      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		      var classes = this.options.classes;
		
		      if (typeof classes !== 'undefined' && classes[key]) {
		        return this.options.classes[key];
		      } else if (this.options.classPrefix) {
		        return this.options.classPrefix + '-' + key;
		      } else {
		        return key;
		      }
		    }
		  }, {
		    key: 'setOptions',
		    value: function setOptions(options) {
		      var _this2 = this;
		
		      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];
		
		      var defaults = {
		        offset: '0 0',
		        targetOffset: '0 0',
		        targetAttachment: 'auto auto',
		        classPrefix: 'tether'
		      };
		
		      this.options = extend(defaults, options);
		
		      var _options = this.options;
		      var element = _options.element;
		      var target = _options.target;
		      var targetModifier = _options.targetModifier;
		
		      this.element = element;
		      this.target = target;
		      this.targetModifier = targetModifier;
		
		      if (this.target === 'viewport') {
		        this.target = document.body;
		        this.targetModifier = 'visible';
		      } else if (this.target === 'scroll-handle') {
		        this.target = document.body;
		        this.targetModifier = 'scroll-handle';
		      }
		
		      ['element', 'target'].forEach(function (key) {
		        if (typeof _this2[key] === 'undefined') {
		          throw new Error('Tether Error: Both element and target must be defined');
		        }
		
		        if (typeof _this2[key].jquery !== 'undefined') {
		          _this2[key] = _this2[key][0];
		        } else if (typeof _this2[key] === 'string') {
		          _this2[key] = document.querySelector(_this2[key]);
		        }
		      });
		
		      addClass(this.element, this.getClass('element'));
		      if (!(this.options.addTargetClasses === false)) {
		        addClass(this.target, this.getClass('target'));
		      }
		
		      if (!this.options.attachment) {
		        throw new Error('Tether Error: You must provide an attachment');
		      }
		
		      this.targetAttachment = parseAttachment(this.options.targetAttachment);
		      this.attachment = parseAttachment(this.options.attachment);
		      this.offset = parseOffset(this.options.offset);
		      this.targetOffset = parseOffset(this.options.targetOffset);
		
		      if (typeof this.scrollParent !== 'undefined') {
		        this.disable();
		      }
		
		      if (this.targetModifier === 'scroll-handle') {
		        this.scrollParent = this.target;
		      } else {
		        this.scrollParent = getScrollParent(this.target);
		      }
		
		      if (!(this.options.enabled === false)) {
		        this.enable(pos);
		      }
		    }
		  }, {
		    key: 'getTargetBounds',
		    value: function getTargetBounds() {
		      if (typeof this.targetModifier !== 'undefined') {
		        if (this.targetModifier === 'visible') {
		          if (this.target === document.body) {
		            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
		          } else {
		            var bounds = getBounds(this.target);
		
		            var out = {
		              height: bounds.height,
		              width: bounds.width,
		              top: bounds.top,
		              left: bounds.left
		            };
		
		            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
		            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
		            out.height = Math.min(innerHeight, out.height);
		            out.height -= 2;
		
		            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
		            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
		            out.width = Math.min(innerWidth, out.width);
		            out.width -= 2;
		
		            if (out.top < pageYOffset) {
		              out.top = pageYOffset;
		            }
		            if (out.left < pageXOffset) {
		              out.left = pageXOffset;
		            }
		
		            return out;
		          }
		        } else if (this.targetModifier === 'scroll-handle') {
		          var bounds = undefined;
		          var target = this.target;
		          if (target === document.body) {
		            target = document.documentElement;
		
		            bounds = {
		              left: pageXOffset,
		              top: pageYOffset,
		              height: innerHeight,
		              width: innerWidth
		            };
		          } else {
		            bounds = getBounds(target);
		          }
		
		          var style = getComputedStyle(target);
		
		          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;
		
		          var scrollBottom = 0;
		          if (hasBottomScroll) {
		            scrollBottom = 15;
		          }
		
		          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;
		
		          var out = {
		            width: 15,
		            height: height * 0.975 * (height / target.scrollHeight),
		            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
		          };
		
		          var fitAdj = 0;
		          if (height < 408 && this.target === document.body) {
		            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
		          }
		
		          if (this.target !== document.body) {
		            out.height = Math.max(out.height, 24);
		          }
		
		          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
		          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);
		
		          if (this.target === document.body) {
		            out.height = Math.max(out.height, 24);
		          }
		
		          return out;
		        }
		      } else {
		        return getBounds(this.target);
		      }
		    }
		  }, {
		    key: 'clearCache',
		    value: function clearCache() {
		      this._cache = {};
		    }
		  }, {
		    key: 'cache',
		    value: function cache(k, getter) {
		      // More than one module will often need the same DOM info, so
		      // we keep a cache which is cleared on each position call
		      if (typeof this._cache === 'undefined') {
		        this._cache = {};
		      }
		
		      if (typeof this._cache[k] === 'undefined') {
		        this._cache[k] = getter.call(this);
		      }
		
		      return this._cache[k];
		    }
		  }, {
		    key: 'enable',
		    value: function enable() {
		      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
		
		      if (!(this.options.addTargetClasses === false)) {
		        addClass(this.target, this.getClass('enabled'));
		      }
		      addClass(this.element, this.getClass('enabled'));
		      this.enabled = true;
		
		      if (this.scrollParent !== document) {
		        this.scrollParent.addEventListener('scroll', this.position);
		      }
		
		      if (pos) {
		        this.position();
		      }
		    }
		  }, {
		    key: 'disable',
		    value: function disable() {
		      removeClass(this.target, this.getClass('enabled'));
		      removeClass(this.element, this.getClass('enabled'));
		      this.enabled = false;
		
		      if (typeof this.scrollParent !== 'undefined') {
		        this.scrollParent.removeEventListener('scroll', this.position);
		      }
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy() {
		      var _this3 = this;
		
		      this.disable();
		
		      tethers.forEach(function (tether, i) {
		        if (tether === _this3) {
		          tethers.splice(i, 1);
		          return;
		        }
		      });
		    }
		  }, {
		    key: 'updateAttachClasses',
		    value: function updateAttachClasses(elementAttach, targetAttach) {
		      var _this4 = this;
		
		      elementAttach = elementAttach || this.attachment;
		      targetAttach = targetAttach || this.targetAttachment;
		      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];
		
		      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
		        // updateAttachClasses can be called more than once in a position call, so
		        // we need to clean up after ourselves such that when the last defer gets
		        // ran it doesn't add any extra classes from previous calls.
		        this._addAttachClasses.splice(0, this._addAttachClasses.length);
		      }
		
		      if (typeof this._addAttachClasses === 'undefined') {
		        this._addAttachClasses = [];
		      }
		      var add = this._addAttachClasses;
		
		      if (elementAttach.top) {
		        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
		      }
		      if (elementAttach.left) {
		        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
		      }
		      if (targetAttach.top) {
		        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
		      }
		      if (targetAttach.left) {
		        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
		      }
		
		      var all = [];
		      sides.forEach(function (side) {
		        all.push(_this4.getClass('element-attached') + '-' + side);
		        all.push(_this4.getClass('target-attached') + '-' + side);
		      });
		
		      defer(function () {
		        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
		          return;
		        }
		
		        updateClasses(_this4.element, _this4._addAttachClasses, all);
		        if (!(_this4.options.addTargetClasses === false)) {
		          updateClasses(_this4.target, _this4._addAttachClasses, all);
		        }
		
		        delete _this4._addAttachClasses;
		      });
		    }
		  }, {
		    key: 'position',
		    value: function position() {
		      var _this5 = this;
		
		      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
		
		      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
		      // tethers (in which case call Tether.Utils.flush yourself when you're done)
		
		      if (!this.enabled) {
		        return;
		      }
		
		      this.clearCache();
		
		      // Turn 'auto' attachments into the appropriate corner or edge
		      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);
		
		      this.updateAttachClasses(this.attachment, targetAttachment);
		
		      var elementPos = this.cache('element-bounds', function () {
		        return getBounds(_this5.element);
		      });
		
		      var width = elementPos.width;
		      var height = elementPos.height;
		
		      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
		        var _lastSize = this.lastSize;
		
		        // We cache the height and width to make it possible to position elements that are
		        // getting hidden.
		        width = _lastSize.width;
		        height = _lastSize.height;
		      } else {
		        this.lastSize = { width: width, height: height };
		      }
		
		      var targetPos = this.cache('target-bounds', function () {
		        return _this5.getTargetBounds();
		      });
		      var targetSize = targetPos;
		
		      // Get an actual px offset from the attachment
		      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
		      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);
		
		      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
		      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);
		
		      // Add the manually provided offset
		      offset = addOffset(offset, manualOffset);
		      targetOffset = addOffset(targetOffset, manualTargetOffset);
		
		      // It's now our goal to make (element position + offset) == (target position + target offset)
		      var left = targetPos.left + targetOffset.left - offset.left;
		      var top = targetPos.top + targetOffset.top - offset.top;
		
		      for (var i = 0; i < TetherBase.modules.length; ++i) {
		        var _module2 = TetherBase.modules[i];
		        var ret = _module2.position.call(this, {
		          left: left,
		          top: top,
		          targetAttachment: targetAttachment,
		          targetPos: targetPos,
		          elementPos: elementPos,
		          offset: offset,
		          targetOffset: targetOffset,
		          manualOffset: manualOffset,
		          manualTargetOffset: manualTargetOffset,
		          scrollbarSize: scrollbarSize,
		          attachment: this.attachment
		        });
		
		        if (ret === false) {
		          return false;
		        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
		          continue;
		        } else {
		          top = ret.top;
		          left = ret.left;
		        }
		      }
		
		      // We describe the position three different ways to give the optimizer
		      // a chance to decide the best possible way to position the element
		      // with the fewest repaints.
		      var next = {
		        // It's position relative to the page (absolute positioning when
		        // the element is a child of the body)
		        page: {
		          top: top,
		          left: left
		        },
		
		        // It's position relative to the viewport (fixed positioning)
		        viewport: {
		          top: top - pageYOffset,
		          bottom: pageYOffset - top - height + innerHeight,
		          left: left - pageXOffset,
		          right: pageXOffset - left - width + innerWidth
		        }
		      };
		
		      var scrollbarSize = undefined;
		      if (document.body.scrollWidth > window.innerWidth) {
		        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
		        next.viewport.bottom -= scrollbarSize.height;
		      }
		
		      if (document.body.scrollHeight > window.innerHeight) {
		        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
		        next.viewport.right -= scrollbarSize.width;
		      }
		
		      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
		        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
		        next.page.bottom = document.body.scrollHeight - top - height;
		        next.page.right = document.body.scrollWidth - left - width;
		      }
		
		      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
		        (function () {
		          var offsetParent = _this5.cache('target-offsetparent', function () {
		            return getOffsetParent(_this5.target);
		          });
		          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
		            return getBounds(offsetParent);
		          });
		          var offsetParentStyle = getComputedStyle(offsetParent);
		          var offsetParentSize = offsetPosition;
		
		          var offsetBorder = {};
		          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
		            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
		          });
		
		          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
		          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;
		
		          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
		            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
		              // We're within the visible part of the target's scroll parent
		              var scrollTop = offsetParent.scrollTop;
		              var scrollLeft = offsetParent.scrollLeft;
		
		              // It's position relative to the target's offset parent (absolute positioning when
		              // the element is moved to be a child of the target's offset parent).
		              next.offset = {
		                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
		                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
		              };
		            }
		          }
		        })();
		      }
		
		      // We could also travel up the DOM and try each containing context, rather than only
		      // looking at the body, but we're gonna get diminishing returns.
		
		      this.move(next);
		
		      this.history.unshift(next);
		
		      if (this.history.length > 3) {
		        this.history.pop();
		      }
		
		      if (flushChanges) {
		        flush();
		      }
		
		      return true;
		    }
		
		    // THE ISSUE
		  }, {
		    key: 'move',
		    value: function move(pos) {
		      var _this6 = this;
		
		      if (!(typeof this.element.parentNode !== 'undefined')) {
		        return;
		      }
		
		      var same = {};
		
		      for (var type in pos) {
		        same[type] = {};
		
		        for (var key in pos[type]) {
		          var found = false;
		
		          for (var i = 0; i < this.history.length; ++i) {
		            var point = this.history[i];
		            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
		              found = true;
		              break;
		            }
		          }
		
		          if (!found) {
		            same[type][key] = true;
		          }
		        }
		      }
		
		      var css = { top: '', left: '', right: '', bottom: '' };
		
		      var transcribe = function transcribe(_same, _pos) {
		        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
		        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
		        if (gpu !== false) {
		          var yPos = undefined,
		              xPos = undefined;
		          if (_same.top) {
		            css.top = 0;
		            yPos = _pos.top;
		          } else {
		            css.bottom = 0;
		            yPos = -_pos.bottom;
		          }
		
		          if (_same.left) {
		            css.left = 0;
		            xPos = _pos.left;
		          } else {
		            css.right = 0;
		            xPos = -_pos.right;
		          }
		
		          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';
		
		          if (transformKey !== 'msTransform') {
		            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
		            // but IE9 doesn't support 3d transforms and will choke.
		            css[transformKey] += " translateZ(0)";
		          }
		        } else {
		          if (_same.top) {
		            css.top = _pos.top + 'px';
		          } else {
		            css.bottom = _pos.bottom + 'px';
		          }
		
		          if (_same.left) {
		            css.left = _pos.left + 'px';
		          } else {
		            css.right = _pos.right + 'px';
		          }
		        }
		      };
		
		      var moved = false;
		      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
		        css.position = 'absolute';
		        transcribe(same.page, pos.page);
		      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
		        css.position = 'fixed';
		        transcribe(same.viewport, pos.viewport);
		      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
		        (function () {
		          css.position = 'absolute';
		          var offsetParent = _this6.cache('target-offsetparent', function () {
		            return getOffsetParent(_this6.target);
		          });
		
		          if (getOffsetParent(_this6.element) !== offsetParent) {
		            defer(function () {
		              _this6.element.parentNode.removeChild(_this6.element);
		              offsetParent.appendChild(_this6.element);
		            });
		          }
		
		          transcribe(same.offset, pos.offset);
		          moved = true;
		        })();
		      } else {
		        css.position = 'absolute';
		        transcribe({ top: true, left: true }, pos.page);
		      }
		
		      if (!moved) {
		        var offsetParentIsBody = true;
		        var currentNode = this.element.parentNode;
		        while (currentNode && currentNode.tagName !== 'BODY') {
		          if (getComputedStyle(currentNode).position !== 'static') {
		            offsetParentIsBody = false;
		            break;
		          }
		
		          currentNode = currentNode.parentNode;
		        }
		
		        if (!offsetParentIsBody) {
		          this.element.parentNode.removeChild(this.element);
		          document.body.appendChild(this.element);
		        }
		      }
		
		      // Any css change will trigger a repaint, so let's avoid one if nothing changed
		      var writeCSS = {};
		      var write = false;
		      for (var key in css) {
		        var val = css[key];
		        var elVal = this.element.style[key];
		
		        if (elVal !== '' && val !== '' && ['top', 'left', 'bottom', 'right'].indexOf(key) >= 0) {
		          elVal = parseFloat(elVal);
		          val = parseFloat(val);
		        }
		
		        if (elVal !== val) {
		          write = true;
		          writeCSS[key] = val;
		        }
		      }
		
		      if (write) {
		        defer(function () {
		          extend(_this6.element.style, writeCSS);
		        });
		      }
		    }
		  }]);
		
		  return TetherClass;
		})();
		
		TetherClass.modules = [];
		
		TetherBase.position = position;
		
		var Tether = extend(TetherClass, TetherBase);
		/* globals TetherBase */
		
		'use strict';
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		var _TetherBase$Utils = TetherBase.Utils;
		var getBounds = _TetherBase$Utils.getBounds;
		var extend = _TetherBase$Utils.extend;
		var updateClasses = _TetherBase$Utils.updateClasses;
		var defer = _TetherBase$Utils.defer;
		
		var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];
		
		function getBoundingRect(tether, to) {
		  if (to === 'scrollParent') {
		    to = tether.scrollParent;
		  } else if (to === 'window') {
		    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
		  }
		
		  if (to === document) {
		    to = to.documentElement;
		  }
		
		  if (typeof to.nodeType !== 'undefined') {
		    (function () {
		      var size = getBounds(to);
		      var pos = size;
		      var style = getComputedStyle(to);
		
		      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];
		
		      BOUNDS_FORMAT.forEach(function (side, i) {
		        side = side[0].toUpperCase() + side.substr(1);
		        if (side === 'Top' || side === 'Left') {
		          to[i] += parseFloat(style['border' + side + 'Width']);
		        } else {
		          to[i] -= parseFloat(style['border' + side + 'Width']);
		        }
		      });
		    })();
		  }
		
		  return to;
		}
		
		TetherBase.modules.push({
		  position: function position(_ref) {
		    var _this = this;
		
		    var top = _ref.top;
		    var left = _ref.left;
		    var targetAttachment = _ref.targetAttachment;
		
		    if (!this.options.constraints) {
		      return true;
		    }
		
		    var _cache = this.cache('element-bounds', function () {
		      return getBounds(_this.element);
		    });
		
		    var height = _cache.height;
		    var width = _cache.width;
		
		    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
		      var _lastSize = this.lastSize;
		
		      // Handle the item getting hidden as a result of our positioning without glitching
		      // the classes in and out
		      width = _lastSize.width;
		      height = _lastSize.height;
		    }
		
		    var targetSize = this.cache('target-bounds', function () {
		      return _this.getTargetBounds();
		    });
		
		    var targetHeight = targetSize.height;
		    var targetWidth = targetSize.width;
		
		    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];
		
		    this.options.constraints.forEach(function (constraint) {
		      var outOfBoundsClass = constraint.outOfBoundsClass;
		      var pinnedClass = constraint.pinnedClass;
		
		      if (outOfBoundsClass) {
		        allClasses.push(outOfBoundsClass);
		      }
		      if (pinnedClass) {
		        allClasses.push(pinnedClass);
		      }
		    });
		
		    allClasses.forEach(function (cls) {
		      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
		        allClasses.push(cls + '-' + side);
		      });
		    });
		
		    var addClasses = [];
		
		    var tAttachment = extend({}, targetAttachment);
		    var eAttachment = extend({}, this.attachment);
		
		    this.options.constraints.forEach(function (constraint) {
		      var to = constraint.to;
		      var attachment = constraint.attachment;
		      var pin = constraint.pin;
		
		      if (typeof attachment === 'undefined') {
		        attachment = '';
		      }
		
		      var changeAttachX = undefined,
		          changeAttachY = undefined;
		      if (attachment.indexOf(' ') >= 0) {
		        var _attachment$split = attachment.split(' ');
		
		        var _attachment$split2 = _slicedToArray(_attachment$split, 2);
		
		        changeAttachY = _attachment$split2[0];
		        changeAttachX = _attachment$split2[1];
		      } else {
		        changeAttachX = changeAttachY = attachment;
		      }
		
		      var bounds = getBoundingRect(_this, to);
		
		      if (changeAttachY === 'target' || changeAttachY === 'both') {
		        if (top < bounds[1] && tAttachment.top === 'top') {
		          top += targetHeight;
		          tAttachment.top = 'bottom';
		        }
		
		        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
		          top -= targetHeight;
		          tAttachment.top = 'top';
		        }
		      }
		
		      if (changeAttachY === 'together') {
		        if (top < bounds[1] && tAttachment.top === 'top') {
		          if (eAttachment.top === 'bottom') {
		            top += targetHeight;
		            tAttachment.top = 'bottom';
		
		            top += height;
		            eAttachment.top = 'top';
		          } else if (eAttachment.top === 'top') {
		            top += targetHeight;
		            tAttachment.top = 'bottom';
		
		            top -= height;
		            eAttachment.top = 'bottom';
		          }
		        }
		
		        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
		          if (eAttachment.top === 'top') {
		            top -= targetHeight;
		            tAttachment.top = 'top';
		
		            top -= height;
		            eAttachment.top = 'bottom';
		          } else if (eAttachment.top === 'bottom') {
		            top -= targetHeight;
		            tAttachment.top = 'top';
		
		            top += height;
		            eAttachment.top = 'top';
		          }
		        }
		
		        if (tAttachment.top === 'middle') {
		          if (top + height > bounds[3] && eAttachment.top === 'top') {
		            top -= height;
		            eAttachment.top = 'bottom';
		          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
		            top += height;
		            eAttachment.top = 'top';
		          }
		        }
		      }
		
		      if (changeAttachX === 'target' || changeAttachX === 'both') {
		        if (left < bounds[0] && tAttachment.left === 'left') {
		          left += targetWidth;
		          tAttachment.left = 'right';
		        }
		
		        if (left + width > bounds[2] && tAttachment.left === 'right') {
		          left -= targetWidth;
		          tAttachment.left = 'left';
		        }
		      }
		
		      if (changeAttachX === 'together') {
		        if (left < bounds[0] && tAttachment.left === 'left') {
		          if (eAttachment.left === 'right') {
		            left += targetWidth;
		            tAttachment.left = 'right';
		
		            left += width;
		            eAttachment.left = 'left';
		          } else if (eAttachment.left === 'left') {
		            left += targetWidth;
		            tAttachment.left = 'right';
		
		            left -= width;
		            eAttachment.left = 'right';
		          }
		        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
		          if (eAttachment.left === 'left') {
		            left -= targetWidth;
		            tAttachment.left = 'left';
		
		            left -= width;
		            eAttachment.left = 'right';
		          } else if (eAttachment.left === 'right') {
		            left -= targetWidth;
		            tAttachment.left = 'left';
		
		            left += width;
		            eAttachment.left = 'left';
		          }
		        } else if (tAttachment.left === 'center') {
		          if (left + width > bounds[2] && eAttachment.left === 'left') {
		            left -= width;
		            eAttachment.left = 'right';
		          } else if (left < bounds[0] && eAttachment.left === 'right') {
		            left += width;
		            eAttachment.left = 'left';
		          }
		        }
		      }
		
		      if (changeAttachY === 'element' || changeAttachY === 'both') {
		        if (top < bounds[1] && eAttachment.top === 'bottom') {
		          top += height;
		          eAttachment.top = 'top';
		        }
		
		        if (top + height > bounds[3] && eAttachment.top === 'top') {
		          top -= height;
		          eAttachment.top = 'bottom';
		        }
		      }
		
		      if (changeAttachX === 'element' || changeAttachX === 'both') {
		        if (left < bounds[0]) {
		          if (eAttachment.left === 'right') {
		            left += width;
		            eAttachment.left = 'left';
		          } else if (eAttachment.left === 'center') {
		            left += width / 2;
		            eAttachment.left = 'left';
		          }
		        }
		
		        if (left + width > bounds[2]) {
		          if (eAttachment.left === 'left') {
		            left -= width;
		            eAttachment.left = 'right';
		          } else if (eAttachment.left === 'center') {
		            left -= width / 2;
		            eAttachment.left = 'right';
		          }
		        }
		      }
		
		      if (typeof pin === 'string') {
		        pin = pin.split(',').map(function (p) {
		          return p.trim();
		        });
		      } else if (pin === true) {
		        pin = ['top', 'left', 'right', 'bottom'];
		      }
		
		      pin = pin || [];
		
		      var pinned = [];
		      var oob = [];
		
		      if (top < bounds[1]) {
		        if (pin.indexOf('top') >= 0) {
		          top = bounds[1];
		          pinned.push('top');
		        } else {
		          oob.push('top');
		        }
		      }
		
		      if (top + height > bounds[3]) {
		        if (pin.indexOf('bottom') >= 0) {
		          top = bounds[3] - height;
		          pinned.push('bottom');
		        } else {
		          oob.push('bottom');
		        }
		      }
		
		      if (left < bounds[0]) {
		        if (pin.indexOf('left') >= 0) {
		          left = bounds[0];
		          pinned.push('left');
		        } else {
		          oob.push('left');
		        }
		      }
		
		      if (left + width > bounds[2]) {
		        if (pin.indexOf('right') >= 0) {
		          left = bounds[2] - width;
		          pinned.push('right');
		        } else {
		          oob.push('right');
		        }
		      }
		
		      if (pinned.length) {
		        (function () {
		          var pinnedClass = undefined;
		          if (typeof _this.options.pinnedClass !== 'undefined') {
		            pinnedClass = _this.options.pinnedClass;
		          } else {
		            pinnedClass = _this.getClass('pinned');
		          }
		
		          addClasses.push(pinnedClass);
		          pinned.forEach(function (side) {
		            addClasses.push(pinnedClass + '-' + side);
		          });
		        })();
		      }
		
		      if (oob.length) {
		        (function () {
		          var oobClass = undefined;
		          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
		            oobClass = _this.options.outOfBoundsClass;
		          } else {
		            oobClass = _this.getClass('out-of-bounds');
		          }
		
		          addClasses.push(oobClass);
		          oob.forEach(function (side) {
		            addClasses.push(oobClass + '-' + side);
		          });
		        })();
		      }
		
		      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
		        eAttachment.left = tAttachment.left = false;
		      }
		      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
		        eAttachment.top = tAttachment.top = false;
		      }
		
		      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
		        _this.updateAttachClasses(eAttachment, tAttachment);
		      }
		    });
		
		    defer(function () {
		      if (!(_this.options.addTargetClasses === false)) {
		        updateClasses(_this.target, addClasses, allClasses);
		      }
		      updateClasses(_this.element, addClasses, allClasses);
		    });
		
		    return { top: top, left: left };
		  }
		});
		/* globals TetherBase */
		
		'use strict';
		
		var _TetherBase$Utils = TetherBase.Utils;
		var getBounds = _TetherBase$Utils.getBounds;
		var updateClasses = _TetherBase$Utils.updateClasses;
		var defer = _TetherBase$Utils.defer;
		
		TetherBase.modules.push({
		  position: function position(_ref) {
		    var _this = this;
		
		    var top = _ref.top;
		    var left = _ref.left;
		
		    var _cache = this.cache('element-bounds', function () {
		      return getBounds(_this.element);
		    });
		
		    var height = _cache.height;
		    var width = _cache.width;
		
		    var targetPos = this.getTargetBounds();
		
		    var bottom = top + height;
		    var right = left + width;
		
		    var abutted = [];
		    if (top <= targetPos.bottom && bottom >= targetPos.top) {
		      ['left', 'right'].forEach(function (side) {
		        var targetPosSide = targetPos[side];
		        if (targetPosSide === left || targetPosSide === right) {
		          abutted.push(side);
		        }
		      });
		    }
		
		    if (left <= targetPos.right && right >= targetPos.left) {
		      ['top', 'bottom'].forEach(function (side) {
		        var targetPosSide = targetPos[side];
		        if (targetPosSide === top || targetPosSide === bottom) {
		          abutted.push(side);
		        }
		      });
		    }
		
		    var allClasses = [];
		    var addClasses = [];
		
		    var sides = ['left', 'top', 'right', 'bottom'];
		    allClasses.push(this.getClass('abutted'));
		    sides.forEach(function (side) {
		      allClasses.push(_this.getClass('abutted') + '-' + side);
		    });
		
		    if (abutted.length) {
		      addClasses.push(this.getClass('abutted'));
		    }
		
		    abutted.forEach(function (side) {
		      addClasses.push(_this.getClass('abutted') + '-' + side);
		    });
		
		    defer(function () {
		      if (!(_this.options.addTargetClasses === false)) {
		        updateClasses(_this.target, addClasses, allClasses);
		      }
		      updateClasses(_this.element, addClasses, allClasses);
		    });
		
		    return true;
		  }
		});
		/* globals TetherBase */
		
		'use strict';
		
		var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
		
		TetherBase.modules.push({
		  position: function position(_ref) {
		    var top = _ref.top;
		    var left = _ref.left;
		
		    if (!this.options.shift) {
		      return;
		    }
		
		    var shift = this.options.shift;
		    if (typeof this.options.shift === 'function') {
		      shift = this.options.shift.call(this, { top: top, left: left });
		    }
		
		    var shiftTop = undefined,
		        shiftLeft = undefined;
		    if (typeof shift === 'string') {
		      shift = shift.split(' ');
		      shift[1] = shift[1] || shift[0];
		
		      var _shift = shift;
		
		      var _shift2 = _slicedToArray(_shift, 2);
		
		      shiftTop = _shift2[0];
		      shiftLeft = _shift2[1];
		
		      shiftTop = parseFloat(shiftTop, 10);
		      shiftLeft = parseFloat(shiftLeft, 10);
		    } else {
		      shiftTop = shift.top;
		      shiftLeft = shift.left;
		    }
		
		    top += shiftTop;
		    left += shiftLeft;
		
		    return { top: top, left: left };
		  }
		});
		return Tether;
		
		}));


	/***/ },
	/* 61 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    props: {
		        id: String
		    },
		
		    methods: {
		        eventTargetsComponent: function eventTargetsComponent(eventTarget) {
		            if (eventTarget === undefined || this.id === eventTarget) {
		                return true;
		            }
		
		            return false;
		        }
		    }
		};

	/***/ },
	/* 62 */
	/***/ function(module, exports) {

		module.exports = "\n<ul\n    class=\"ui-menu\" role=\"menu\" tabindex=\"-1\" @keydown.esc=\"closeDropdown\" v-el:dropdown\n    :class=\"{ 'has-icons': showIcons, 'has-secondary-text': showSecondaryText }\"\n>\n    <ui-menu-option\n        :type=\"option.type\" :icon=\"option.icon\" :text=\"option.text\" :disabled=\"option.disabled\"\n        :secondary-text=\"option.secondaryText\" :option=\"option\" :show-icon=\"showIcons\"\n        :show-secondary-text=\"showSecondaryText\" :hide-ripple-ink=\"hideRippleInk\"\n        :partial=\"option.partial || partial\"\n\n        @keydown.enter.prevent=\"optionSelect(option)\" @click=\"optionSelect(option)\"\n\n        v-for=\"option in options\"\n    ></ui-menu-option>\n\n    <div\n        class=\"ui-menu-focus-redirector\" @focus=\"redirectFocus\" tabindex=\"0\"\n    ></div>\n</ul>\n";

	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(64)
		__vue_script__ = __webpack_require__(65)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiPopover.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(66)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiPopover.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 64 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 65 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _ShowsDropdown = __webpack_require__(58);
		
		var _ShowsDropdown2 = _interopRequireDefault(_ShowsDropdown);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-popover',
		
		    events: {
		        'dropdown-opened': function dropdownOpened() {
		            if (this.containFocus) {
		                document.addEventListener('focus', this.restrictFocus, true);
		            }
		
		            this.$dispatch('opened');
		
		            return true;
		        },
		
		        'dropdown-closed': function dropdownClosed() {
		            if (this.containFocus) {
		                document.removeEventListener('focus', this.restrictFocus, true);
		            }
		
		            this.$dispatch('closed');
		
		            return true;
		        }
		    },
		
		    methods: {
		        restrictFocus: function restrictFocus(e) {
		            if (!this.$els.dropdown.contains(e.target)) {
		                e.stopPropagation();
		
		                this.$els.dropdown.focus();
		            }
		        }
		    },
		
		    mixins: [_ShowsDropdown2.default]
		};

	/***/ },
	/* 66 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-popover\" role=\"dialog\" tabindex=\"-1\" @keydown.esc=\"closeDropdown\" v-el:dropdown\n>\n    <slot></slot>\n</div>\n";

	/***/ },
	/* 67 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(68)
		__vue_script__ = __webpack_require__(69)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiProgressCircular.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(70)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiProgressCircular.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 68 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 69 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    name: 'ui-progress-circular',
		
		    props: {
		        show: {
		            type: Boolean,
		            default: false
		        },
		        type: {
		            type: String,
		            default: 'indeterminate' },
		        color: {
		            type: String,
		            default: 'primary' },
		        value: {
		            type: Number,
		            default: 0
		        },
		        size: {
		            type: Number,
		            default: 32
		        },
		        stroke: Number,
		        autoStroke: {
		            type: Boolean,
		            default: true
		        },
		        disableTransition: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        strokeDashArray: function strokeDashArray() {
		            var circumference = 2 * Math.PI * this.radius;
		
		            return Math.round(circumference * 1000) / 1000;
		        },
		        strokeDashOffset: function strokeDashOffset() {
		            var value = this.moderateValue(this.value);
		            var circumference = 2 * Math.PI * this.radius;
		
		            return (100 - value) / 100 * circumference;
		        },
		        radius: function radius() {
		            return (this.size - this.stroke) / 2;
		        }
		    },
		
		    created: function created() {
		        if (!this.stroke) {
		            if (this.autoStroke) {
		                this.stroke = parseInt(this.size / 8, 10);
		            } else {
		                this.stroke = 4;
		            }
		        }
		    },
		
		
		    methods: {
		        moderateValue: function moderateValue(value) {
		            if (isNaN(value) || value < 0) {
		                return 0;
		            }
		
		            if (value > 100) {
		                return 100;
		            }
		
		            return value;
		        }
		    }
		};

	/***/ },
	/* 70 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-progress-circular\" :style=\"{ 'width': size + 'px', 'height': size + 'px' }\"\n    v-show=\"show\" :transition=\"disableTransition ? null : 'ui-progress-circular-toggle'\"\n>\n    <svg\n        class=\"ui-progress-circular-determinate\" :width=\"size\" :height=\"size\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" :aria-valuenow=\"value\"\n        v-if=\"type === 'determinate'\"\n    >\n        <circle\n            class=\"ui-progress-circular-determinate-path\" :class=\"[color]\" :r=\"radius\"\n            :cx=\"size / 2\" :cy=\"size / 2\" fill=\"transparent\" :stroke-dasharray=\"strokeDashArray\"\n            stroke-dashoffset=\"0\"\n\n            :style=\"{ 'stroke-dashoffset': strokeDashOffset, 'stroke-width': stroke }\"\n        ></circle>\n    </svg>\n\n    <svg\n        class=\"ui-progress-circular-indeterminate\" viewBox=\"25 25 50 50\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" v-else\n    >\n        <circle\n            class=\"ui-progress-circular-indeterminate-path\" :class=\"[color]\" cx=\"50\" cy=\"50\"\n            r=\"20\" fill=\"none\" stroke-miterlimit=\"10\" :stroke-width=\"stroke\"\n        >\n    </svg>\n</div>\n";

	/***/ },
	/* 71 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		exports.default = function (value) {
		    this.el.disabled = Boolean(value);
		};

	/***/ },
	/* 72 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    props: {
		        openDropdownOn: String,
		        dropdownPosition: String,
		        hasPopover: {
		            type: Boolean,
		            default: false
		        },
		        hasDropdownMenu: {
		            type: Boolean,
		            default: false
		        },
		        menuOptions: {
		            type: Array,
		            default: function _default() {
		                return [];
		            }
		        },
		        showMenuIcons: {
		            type: Boolean,
		            default: false
		        },
		        showMenuSecondaryText: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    methods: {
		        menuOptionSelect: function menuOptionSelect(option) {
		            this.$dispatch('menu-option-selected', option);
		        }
		    }
		};

	/***/ },
	/* 73 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiTooltip = __webpack_require__(74);
		
		var _UiTooltip2 = _interopRequireDefault(_UiTooltip);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    props: {
		        tooltip: String,
		        openTooltipOn: String,
		        tooltipPosition: String
		    },
		
		    components: {
		        UiTooltip: _UiTooltip2.default
		    }
		};

	/***/ },
	/* 74 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(75)
		__vue_script__ = __webpack_require__(76)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiTooltip.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(78)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiTooltip.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 75 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 76 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _tetherTooltip = __webpack_require__(77);
		
		var _tetherTooltip2 = _interopRequireDefault(_tetherTooltip);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-tooltip',
		
		    props: {
		        content: String,
		        trigger: {
		            type: Element,
		            required: true
		        },
		        position: {
		            type: String,
		            default: 'bottom center'
		        },
		        openOn: {
		            type: String,
		            default: 'hover focus'
		        }
		    },
		
		    data: function data() {
		        return {
		            tooltip: null
		        };
		    },
		
		
		    watch: {
		        trigger: function trigger() {
		            if (!this.tooltip) {
		                this.initialize();
		            }
		        }
		    },
		
		    ready: function ready() {
		        this.initialize();
		    },
		    beforeDestory: function beforeDestory() {
		        if (this.tooltip) {
		            this.tooltip.remove();
		            this.tooltip.destroy();
		        }
		    },
		
		
		    methods: {
		        initialize: function initialize() {
		            if (this.trigger) {
		                this.tooltip = new _tetherTooltip2.default({
		                    target: this.trigger,
		                    content: this.$els.tooltip,
		                    classes: 'ui-tooltip-theme',
		                    position: this.position,
		                    openOn: 'hover focus'
		                });
		            }
		        }
		    }
		};

	/***/ },
	/* 77 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether-tooltip 1.1.0 */
		
		(function(root, factory) {
		  if (true) {
		    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(59),__webpack_require__(60)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		  } else if (typeof exports === 'object') {
		    module.exports = factory(require('tether-drop'), require('tether'));
		  } else {
		    root.Tooltip = factory(root.Drop, root.Tether);
		  }
		}(this, function(Drop, Tether) {
		
		/* global Tether Drop */
		
		'use strict';
		
		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
		
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
		
		var extend = Tether.Utils.extend;
		
		var _Drop = Drop.createContext({
		  classPrefix: 'tooltip'
		});
		
		var defaults = {
		  position: 'top center',
		  openOn: 'hover',
		  classes: 'tooltip-theme-arrows',
		  constrainToWindow: true,
		  constrainToScrollParent: false
		};
		
		var tooltipCount = 0;
		
		var Tooltip = (function () {
		  function Tooltip(options) {
		    _classCallCheck(this, Tooltip);
		
		    this.options = options;
		
		    if (!this.options.target) {
		      throw new Error('Tooltip Error: You must provide a target for Tooltip to attach to');
		    }
		
		    var position = this.options.target.getAttribute('data-tooltip-position');
		    if (position) {
		      if (typeof this.options.position === 'undefined') {
		        this.options.position = position;
		      }
		    }
		
		    var content = this.options.target.getAttribute('data-tooltip');
		
		    if (content) {
		      if (typeof this.options.content === 'undefined') {
		        var contentEl = document.createElement('div');
		        contentEl.innerHTML = content;
		
		        // Add ARIA attributes (see #50)
		        contentEl.setAttribute('role', 'tooltip');
		        contentEl.id = 'drop-tooltip-' + tooltipCount;
		        this.options.target.setAttribute('aria-describedby', contentEl.id);
		        tooltipCount += 1;
		
		        this.options.content = contentEl;
		      }
		    }
		
		    if (!this.options.content) {
		      throw new Error('Tooltip Error: You must provide content for Tooltip to display');
		    }
		
		    this.options = extend({}, defaults, this.options);
		
		    this.drop = new _Drop(this.options);
		  }
		
		  _createClass(Tooltip, [{
		    key: 'close',
		    value: function close() {
		      this.drop.close();
		    }
		  }, {
		    key: 'open',
		    value: function open() {
		      this.drop.open();
		    }
		  }, {
		    key: 'toggle',
		    value: function toggle() {
		      this.drop.toggle();
		    }
		  }, {
		    key: 'remove',
		    value: function remove() {
		      this.drop.remove();
		    }
		  }, {
		    key: 'destroy',
		    value: function destroy() {
		      this.drop.destroy();
		    }
		  }, {
		    key: 'position',
		    value: function position() {
		      this.drop.position();
		    }
		  }]);
		
		  return Tooltip;
		})();
		
		var initialized = [];
		
		Tooltip.init = function () {
		  var tooltipElements = document.querySelectorAll('[data-tooltip]');
		  var len = tooltipElements.length;
		  for (var i = 0; i < len; ++i) {
		    var el = tooltipElements[i];
		    if (initialized.indexOf(el) === -1) {
		      new Tooltip({
		        target: el
		      });
		      initialized.push(el);
		    }
		  }
		};
		
		document.addEventListener('DOMContentLoaded', function () {
		  if (Tooltip.autoinit !== false) {
		    Tooltip.init();
		  }
		});
		return Tooltip;
		
		}));


	/***/ },
	/* 78 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-tooltip\" v-text=\"content\" v-el:tooltip></div>\n";

	/***/ },
	/* 79 */
	/***/ function(module, exports) {

		module.exports = "\n<button\n    class=\"ui-icon-button\" :class=\"styleClasses\" :aria-label=\"ariaLabel || tooltip\"\n    :type=\"buttonType\" v-disabled=\"disabled || loading\" v-el:button\n>\n    <ui-icon\n        class=\"ui-icon-button-icon\" :icon=\"icon\" v-show=\"!loading\"\n    ></ui-icon>\n\n    <ui-progress-circular\n        class=\"ui-icon-button-spinner\" :color=\"spinnerColor\" :size=\"24\" :stroke=\"4.5\"\n        disable-transition v-show=\"loading\"\n    ></ui-progress-circular>\n\n    <ui-ripple-ink v-if=\"!hideRippleInk && !disabled\" :trigger=\"$els.button\"></ui-ripple-ink>\n\n    <ui-tooltip\n        :trigger=\"$els.button\" :content=\"tooltip\" :position=\"tooltipPosition\" v-if=\"tooltip\"\n        :open-on=\"openTooltipOn\"\n    ></ui-tooltip>\n\n    <ui-menu\n        class=\"ui-button-dropdown-menu\" :trigger=\"$els.button\" :options=\"menuOptions\"\n        :show-icons=\"showMenuIcons\" :show-secondary-text=\"showMenuSecondaryText\"\n        :open-on=\"openDropdownOn\" @option-selected=\"menuOptionSelect\"\n        :dropdown-position=\"dropdownPosition\" v-if=\"hasDropdownMenu\"\n    ></ui-menu>\n\n    <ui-popover\n        :trigger=\"$els.button\" :open-on=\"openDropdownOn\" :dropdown-position=\"dropdownPosition\"\n        v-if=\"hasPopover\"\n    >\n        <slot name=\"popover\"></slot>\n    </ui-popover>\n</button>\n";

	/***/ },
	/* 80 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-alert\">\n    <div\n        class=\"ui-alert-body\" :class=\"[type]\" role=\"alert\" v-show=\"show\"\n        transition=\"ui-alert-toggle\"\n    >\n        <ui-icon class=\"ui-alert-icon\" :icon=\"iconName\" v-if=\"!hideIcon\"></ui-icon>\n\n        <div class=\"ui-alert-text\">\n            <slot>\n                <span v-text=\"text\"></span>\n            </slot>\n        </div>\n\n        <ui-icon-button\n            class=\"ui-alert-close-button\" type=\"clear\" icon=\"&#xE5CD\" aria-label=\"Close\"\n            @click=\"close\" v-if=\"dismissible\"\n        ></ui-icon-button>\n    </div>\n</div>\n";

	/***/ },
	/* 81 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(82)
		__vue_script__ = __webpack_require__(83)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiAutocomplete.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(108)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiAutocomplete.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 82 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 83 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _fuzzysearch = __webpack_require__(84);
		
		var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiAutocompleteSuggestion = __webpack_require__(85);
		
		var _UiAutocompleteSuggestion2 = _interopRequireDefault(_UiAutocompleteSuggestion);
		
		var _autofocus = __webpack_require__(90);
		
		var _autofocus2 = _interopRequireDefault(_autofocus);
		
		var _HasTextInput = __webpack_require__(91);
		
		var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
		
		var _ValidatesInput = __webpack_require__(92);
		
		var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-autocomplete',
		
		    props: {
		        suggestions: {
		            type: Array,
		            default: []
		        },
		        limit: {
		            type: Number,
		            default: 8
		        },
		        partial: String,
		        append: {
		            type: Boolean,
		            default: false
		        },
		        appendDelimiter: {
		            type: String,
		            default: ', '
		        },
		        minChars: {
		            type: Number,
		            default: 2
		        },
		        showOnUpDown: {
		            type: Boolean,
		            default: true
		        },
		        autofocus: {
		            type: Boolean,
		            default: false
		        },
		        filter: Function,
		        autoHighlightFirstMatch: {
		            type: Boolean,
		            default: true
		        },
		        cycleHighlight: {
		            type: Boolean,
		            default: true
		        },
		        keys: {
		            type: Object,
		            default: function _default() {
		                return {
		                    text: 'text',
		                    value: 'value',
		                    image: 'image'
		                };
		            }
		        }
		    },
		
		    data: function data() {
		        return {
		            showDropdown: false,
		            highlightedItem: -1,
		            ignoreValueChange: false
		        };
		    },
		
		
		    computed: {
		        showIcon: function showIcon() {
		            return Boolean(this.icon);
		        }
		    },
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            if (document.activeElement === this.$els.input) {
		                document.activeElement.blur();
		            }
		
		            this.value = this.initialValue;
		            this.dirty = false;
		            this.valid = true;
		        }
		    },
		
		    watch: {
		        value: function value() {
		            if (!this.ignoreValueChange && this.value.length >= this.minChars) {
		                this.open();
		            }
		
		            this.highlightedItem = this.autoHighlightFirstMatch ? 0 : -1;
		        }
		    },
		
		    ready: function ready() {
		        document.addEventListener('click', this.closeOnExternalClick);
		    },
		    beforeDestroy: function beforeDestroy() {
		        document.removeEventListener('click', this.closeOnExternalClick);
		    },
		
		
		    methods: {
		        search: function search(item) {
		            if (this.filter) {
		                return this.filter(item, this.value);
		            }
		
		            var text = item[this.keys.text] || item;
		            var query = this.value;
		
		            if (typeof query === 'string') {
		                query = query.toLowerCase();
		            }
		
		            return (0, _fuzzysearch2.default)(query, text.toLowerCase());
		        },
		        select: function select(item) {
		            var _this = this;
		
		            if (this.append) {
		                this.value += this.appendDelimiter + (item[this.keys.value] || item);
		            } else {
		                this.value = item[this.keys.value] || item;
		            }
		
		            this.$dispatch('selected', item);
		
		            this.validate();
		
		            this.$nextTick(function () {
		                _this.close();
		                _this.$els.input.focus();
		            });
		        },
		        highlight: function highlight(index) {
		            var firstIndex = 0;
		            var lastIndex = this.$refs.items.length - 1;
		
		            if (index === -2) {
		                index = lastIndex;
		            } else if (index < firstIndex) {
		                index = this.cycleHighlight ? lastIndex : index;
		            } else if (index > lastIndex) {
		                index = this.cycleHighlight ? firstIndex : -1;
		            }
		
		            this.highlightedItem = index;
		
		            if (this.showOnUpDown) {
		                this.open();
		            }
		
		            if (index < firstIndex || index > lastIndex) {
		                this.$dispatch('highlight-overflow', index);
		            } else {
		                this.$dispatch('highlighted', this.$refs.items[index].item, index);
		            }
		        },
		        selectHighlighted: function selectHighlighted(index, e) {
		            if (this.showDropdown && this.$refs.items.length) {
		                e.preventDefault();
		                this.select(this.$refs.items[index].item);
		            }
		        },
		        clearSearch: function clearSearch() {
		            this.value = '';
		        },
		        open: function open() {
		            if (!this.showDropdown) {
		                this.showDropdown = true;
		                this.$dispatch('opened');
		            }
		        },
		        close: function close() {
		            if (this.showDropdown) {
		                this.showDropdown = false;
		                this.highlightedItem = -1;
		
		                this.$dispatch('closed');
		                this.validate();
		            }
		        },
		        closeOnExternalClick: function closeOnExternalClick(e) {
		            if (!this.$els.autocomplete.contains(e.target) && this.showDropdown) {
		                this.close();
		            }
		        },
		        focus: function focus() {
		            this.active = true;
		        },
		        blur: function blur() {
		            this.active = false;
		
		            if (!this.dirty) {
		                this.dirty = true;
		            }
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default,
		        UiAutocompleteSuggestion: _UiAutocompleteSuggestion2.default
		    },
		
		    directives: {
		        autofocus: _autofocus2.default
		    },
		
		    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
		};

	/***/ },
	/* 84 */
	/***/ function(module, exports) {

		'use strict';
		
		function fuzzysearch (needle, haystack) {
		  var tlen = haystack.length;
		  var qlen = needle.length;
		  if (qlen > tlen) {
		    return false;
		  }
		  if (qlen === tlen) {
		    return needle === haystack;
		  }
		  outer: for (var i = 0, j = 0; i < qlen; i++) {
		    var nch = needle.charCodeAt(i);
		    while (j < tlen) {
		      if (haystack.charCodeAt(j++) === nch) {
		        continue outer;
		      }
		    }
		    return false;
		  }
		  return true;
		}
		
		module.exports = fuzzysearch;


	/***/ },
	/* 85 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(86)
		__vue_script__ = __webpack_require__(87)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiAutocompleteSuggestion.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(89)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiAutocompleteSuggestion.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 86 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 87 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _uuid = __webpack_require__(88);
		
		var _uuid2 = _interopRequireDefault(_uuid);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-autocomplete-suggestion',
		
		    props: {
		        id: {
		            type: String,
		            default: function _default() {
		                return _uuid2.default.short();
		            }
		        },
		        item: {
		            type: [String, Object],
		            required: true
		        },
		        partial: {
		            type: String,
		            default: 'ui-autocomplete-simple' },
		        highlighted: {
		            type: Boolean,
		            default: false
		        },
		        keys: {
		            type: Object,
		            default: function _default() {
		                return {
		                    text: 'text',
		                    value: 'value',
		                    image: 'image'
		                };
		            }
		        }
		    },
		
		    partials: {
		        'ui-autocomplete-simple': '\n            <li class="ui-autocomplete-suggestion-item" v-text="item[keys.text] || item"></li>\n        ',
		
		        'ui-autocomplete-image': '\n            <div\n                class="image" :style="{ \'background-image\': \'url(\' + item[keys.image] + \')\' }"\n            ></div>\n            <div class="text" v-text="item[keys.text]"></div>\n        '
		    }
		};

	/***/ },
	/* 88 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		/**
		 * Fast UUID generator, RFC4122 version 4 compliant.
		 * @author Jeff Ward (jcward.com).
		 * @license MIT license
		 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
		 **/
		
		var lut = [];
		
		for (var i = 0; i < 256; i++) {
		    lut[i] = (i < 16 ? '0' : '') + i.toString(16);
		}
		
		var generate = function generate() {
		    var d0 = Math.random() * 0xffffffff | 0;
		    var d1 = Math.random() * 0xffffffff | 0;
		    var d2 = Math.random() * 0xffffffff | 0;
		    var d3 = Math.random() * 0xffffffff | 0;
		
		    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' + lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' + lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] + lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
		};
		
		var short = function short(prefix) {
		    prefix = prefix || '';
		
		    var uuid = generate();
		
		    return prefix + uuid.split('-')[0];
		};
		
		exports.default = {
		    generate: generate,
		    short: short
		};

	/***/ },
	/* 89 */
	/***/ function(module, exports) {

		module.exports = "\n<li\n    class=\"ui-autocomplete-suggestion\" :class=\"[partial, { 'highlighted': highlighted }]\"\n    :id=\"id\"\n>\n    <partial :name=\"partial\"></partial>\n</li>\n";

	/***/ },
	/* 90 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		exports.default = function (value) {
		    this.el.autofocus = Boolean(value);
		};

	/***/ },
	/* 91 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    props: {
		        id: String,
		        name: {
		            type: String,
		            required: true
		        },
		        placeholder: String,
		        value: {
		            type: [String, Number],
		            default: '',
		            twoWay: true
		        },
		        icon: String,
		        iconRight: {
		            type: Boolean,
		            default: false
		        },
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        helpText: String,
		        disabled: {
		            type: Boolean,
		            default: false
		        },
		        debounce: {
		            type: Number,
		            default: null
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false,
		            initialValue: ''
		        };
		    },
		
		
		    computed: {
		        showFeedback: function showFeedback() {
		            var canBeValidated = Boolean(this.validationRules);
		            var hasHelpText = Boolean(this.helpText);
		
		            return canBeValidated || hasHelpText;
		        }
		    },
		
		    created: function created() {
		        this.initialValue = this.value;
		    },
		
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 92 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _validatorjs = __webpack_require__(93);
		
		var _validatorjs2 = _interopRequireDefault(_validatorjs);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    props: {
		        valid: {
		            type: Boolean,
		            default: true,
		            twoWay: true
		        },
		        dirty: {
		            type: Boolean,
		            default: false,
		            twoWay: true
		        },
		        hideValidationErrors: {
		            type: Boolean,
		            default: false
		        },
		        validationRules: [String, Array],
		        validationMessages: Object
		    },
		
		    data: function data() {
		        return {
		            validationError: ''
		        };
		    },
		
		
		    events: {
		        'ui-input::set-validity': function uiInputSetValidity(valid, error, id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.setValidity(valid, error);
		        }
		    },
		
		    methods: {
		        validate: function validate() {
		            if (!this.validationRules || !this.dirty) {
		                return;
		            }
		
		            var data = {
		                value: this.value
		            };
		
		            var rules = {
		                value: this.validationRules
		            };
		
		            var validation = new _validatorjs2.default(data, rules, this.validationMessages);
		
		            validation.setAttributeNames({ value: this.name.replace(/_/g, ' ') });
		
		            this.setValidity(validation.passes(), validation.errors.first('value'));
		        },
		        setValidity: function setValidity(valid, error) {
		            this.valid = valid;
		
		            if (!valid && error && error.length) {
		                this.validationError = error;
		            }
		        }
		    }
		};

	/***/ },
	/* 93 */
	/***/ function(module, exports, __webpack_require__) {

		var Rules = __webpack_require__(94);
		var Lang = __webpack_require__(95);
		var Errors = __webpack_require__(106);
		var Attributes = __webpack_require__(97);
		var AsyncResolvers = __webpack_require__(107);
		
		var Validator = function(input, rules, customMessages) {
		  var lang = Validator.getDefaultLang();
		  this.input = input;
		  this.messages = Lang._make(lang);
		  this.messages._setCustom(customMessages);
		  this.setAttributeFormatter(Validator.prototype.attributeFormatter);
		
		  this.errors = new Errors();
		  this.errorCount = 0;
		
		  this.hasAsync = false;
		  this.rules = this._parseRules(rules);
		};
		
		Validator.prototype = {
		
		  constructor: Validator,
		
		  /**
		   * Default language
		   *
		   * @type {string}
		   */
		  lang: 'en',
		
		  /**
		   * Numeric based rules
		   *
		   * @type {array}
		   */
		  numericRules: ['integer', 'numeric'],
		
		  /**
		   * Attribute formatter.
		   *
		   * @type {function}
		   */
		  attributeFormatter: Attributes.formatter,
		
		  /**
		   * Run validator
		   *
		   * @return {boolean} Whether it passes; true = passes, false = fails
		   */
		  check: function() {
		    var self = this;
		
		    for (var attribute in this.rules) {
		      var attributeRules = this.rules[attribute];
		      var inputValue = this.input[attribute]; // if it doesnt exist in input, it will be undefined
		
		      for (var i = 0, len = attributeRules.length, rule, ruleOptions, rulePassed; i < len; i++) {
		        ruleOptions = attributeRules[i];
		        rule = this.getRule(ruleOptions.name);
		
		        if (!this._isValidatable(rule, inputValue)) {
		          continue;
		        }
		
		        rulePassed = rule.validate(inputValue, ruleOptions.value, attribute);
		        if (!rulePassed) {
		          this._addFailure(rule);
		        }
		
		        if (this._shouldStopValidating(attribute, rulePassed)) {
		          break;
		        }
		      }
		    }
		
		    return this.errorCount === 0;
		  },
		
		  /**
		   * Run async validator
		   *
		   * @param {function} passes
		   * @param {function} fails
		   * @return {void}
		   */
		  checkAsync: function(passes, fails) {
		    var _this = this;
		    passes = passes || function() {};
		    fails = fails || function() {};
		
		    var failsOne = function(rule, message) {
		      _this._addFailure(rule, message);
		    };
		
		    var resolvedAll = function(allPassed) {
		      if (allPassed) {
		        passes();
		      } else {
		        fails();
		      }
		    };
		
		    var validateRule = function(inputValue, ruleOptions, attribute, rule) {
		      return function() {
		        var resolverIndex = asyncResolvers.add(rule);
		        rule.validate(inputValue, ruleOptions.value, attribute, function() {
		          asyncResolvers.resolve(resolverIndex);
		        });
		      };
		    };
		
		    var asyncResolvers = new AsyncResolvers(failsOne, resolvedAll);
		
		    for (var attribute in this.rules) {
		      var attributeRules = this.rules[attribute];
		      var inputValue = this.input[attribute]; // if it doesnt exist in input, it will be undefined
		
		      for (var i = 0, len = attributeRules.length, rule, ruleOptions; i < len; i++) {
		        ruleOptions = attributeRules[i];
		
		        rule = this.getRule(ruleOptions.name);
		
		        if (!this._isValidatable(rule, inputValue)) {
		          continue;
		        }
		
		        validateRule(inputValue, ruleOptions, attribute, rule)();
		      }
		    }
		
		    asyncResolvers.enableFiring();
		    asyncResolvers.fire();
		  },
		
		  /**
		   * Add failure and error message for given rule
		   *
		   * @param {Rule} rule
		   */
		  _addFailure: function(rule) {
		    var msg = this.messages.render(rule);
		    this.errors.add(rule.attribute, msg);
		    this.errorCount++;
		  },
		
		  /**
		   * Parse rules, normalizing format into: { attribute: [{ name: 'age', value: 3 }] }
		   *
		   * @param  {object} rules
		   * @return {object}
		   */
		  _parseRules: function(rules) {
		    var parsedRules = {};
		    for (var attribute in rules) {
		      var rulesArray = rules[attribute];
		      var attributeRules = [];
		
		      if (typeof rulesArray === 'string') {
		        rulesArray = rulesArray.split('|');
		      }
		
		      for (var i = 0, len = rulesArray.length, rule; i < len; i++) {
		        rule = this._extractRuleAndRuleValue(rulesArray[i]);
		        if (Rules.isAsync(rule.name)) {
		          this.hasAsync = true;
		        }
		        attributeRules.push(rule);
		      }
		
		      parsedRules[attribute] = attributeRules;
		    }
		    return parsedRules;
		  },
		
		  /**
		   * Extract a rule and a value from a ruleString (i.e. min:3), rule = min, value = 3
		   *
		   * @param  {string} ruleString min:3
		   * @return {object} object containing the name of the rule and value
		   */
		  _extractRuleAndRuleValue: function(ruleString) {
		    var rule = {},
		      ruleArray;
		
		    rule.name = ruleString;
		
		    if (ruleString.indexOf(':') >= 0) {
		      ruleArray = ruleString.split(':');
		      rule.name = ruleArray[0];
		      rule.value = ruleArray.slice(1).join(":");
		    }
		
		    return rule;
		  },
		
		  /**
		   * Determine if attribute has any of the given rules
		   *
		   * @param  {string}  attribute
		   * @param  {array}   findRules
		   * @return {boolean}
		   */
		  _hasRule: function(attribute, findRules) {
		    var rules = this.rules[attribute] || [];
		    for (var i = 0, len = rules.length; i < len; i++) {
		      if (findRules.indexOf(rules[i].name) > -1) {
		        return true;
		      }
		    }
		    return false;
		  },
		
		  /**
		   * Determine if attribute has any numeric-based rules.
		   *
		   * @param  {string}  attribute
		   * @return {Boolean}
		   */
		  _hasNumericRule: function(attribute) {
		    return this._hasRule(attribute, this.numericRules);
		  },
		
		  /**
		   * Determine if rule is validatable
		   *
		   * @param  {Rule}   rule
		   * @param  {mixed}  value
		   * @return {boolean}
		   */
		  _isValidatable: function(rule, value) {
		    if (Rules.isImplicit(rule.name)) {
		      return true;
		    }
		
		    return this.getRule('required').validate(value);
		  },
		
		
		  /**
		   * Determine if we should stop validating.
		   *
		   * @param  {string} attribute
		   * @param  {boolean} rulePassed
		   * @return {boolean}
		   */
		  _shouldStopValidating: function(attribute, rulePassed) {
		
		    var stopOnAttributes = this.stopOnAttributes;
		    if (stopOnAttributes === false || rulePassed === true) {
		      return false;
		    }
		
		    if (stopOnAttributes instanceof Array) {
		      return stopOnAttributes.indexOf(attribute) > -1;
		    }
		
		    return true;
		  },
		
		  /**
		   * Set custom attribute names.
		   *
		   * @param {object} attributes
		   * @return {void}
		   */
		  setAttributeNames: function(attributes) {
		    this.messages._setAttributeNames(attributes);
		  },
		
		  /**
		   * Set the attribute formatter.
		   *
		   * @param {fuction} func
		   * @return {void}
		   */
		  setAttributeFormatter: function(func) {
		    this.messages._setAttributeFormatter(func);
		  },
		
		  /**
		   * Get validation rule
		   *
		   * @param  {string} name
		   * @return {Rule}
		   */
		  getRule: function(name) {
		    return Rules.make(name, this);
		  },
		
		  /**
		   * Stop on first error.
		   *
		   * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
		   * @return {void}
		   */
		  stopOnError: function(attributes) {
		    this.stopOnAttributes = attributes;
		  },
		
		  /**
		   * Determine if validation passes
		   *
		   * @param {function} passes
		   * @return {boolean|undefined}
		   */
		  passes: function(passes) {
		    var async = this._checkAsync('passes', passes);
		    if (async) {
		      return this.checkAsync(passes);
		    }
		    return this.check();
		  },
		
		  /**
		   * Determine if validation fails
		   *
		   * @param {function} fails
		   * @return {boolean|undefined}
		   */
		  fails: function(fails) {
		    var async = this._checkAsync('fails', fails);
		    if (async) {
		      return this.checkAsync(function() {}, fails);
		    }
		    return !this.check();
		  },
		
		  /**
		   * Check if validation should be called asynchronously
		   *
		   * @param  {string}   funcName Name of the caller
		   * @param  {function} callback
		   * @return {boolean}
		   */
		  _checkAsync: function(funcName, callback) {
		    var hasCallback = typeof callback === 'function';
		    if (this.hasAsync && !hasCallback) {
		      throw funcName + ' expects a callback when async rules are being tested.';
		    }
		
		    return this.hasAsync || hasCallback;
		  }
		
		};
		
		/**
		 * Set messages for language
		 *
		 * @param {string} lang
		 * @param {object} messages
		 * @return {this}
		 */
		Validator.setMessages = function(lang, messages) {
		  Lang._set(lang, messages);
		  return this;
		};
		
		/**
		 * Get messages for given language
		 *
		 * @param  {string} lang
		 * @return {Messages}
		 */
		Validator.getMessages = function(lang) {
		  return Lang._get(lang);
		};
		
		/**
		 * Set default language to use
		 *
		 * @param {string} lang
		 * @return {void}
		 */
		Validator.useLang = function(lang) {
		  this.prototype.lang = lang;
		};
		
		/**
		 * Get default language
		 *
		 * @return {string}
		 */
		Validator.getDefaultLang = function() {
		  return this.prototype.lang;
		};
		
		/**
		 * Set the attribute formatter.
		 *
		 * @param {fuction} func
		 * @return {void}
		 */
		Validator.setAttributeFormatter = function(func) {
		  this.prototype.attributeFormatter = func;
		};
		
		/**
		 * Stop on first error.
		 *
		 * @param  {boolean|array} An array of attributes or boolean true/false for all attributes.
		 * @return {void}
		 */
		Validator.stopOnError = function(attributes) {
		  this.prototype.stopOnAttributes = attributes;
		};
		
		/**
		 * Register custom validation rule
		 *
		 * @param  {string}   name
		 * @param  {function} fn
		 * @param  {string}   message
		 * @return {void}
		 */
		Validator.register = function(name, fn, message) {
		  var lang = Validator.getDefaultLang();
		  Rules.register(name, fn);
		  Lang._setRuleMessage(lang, name, message);
		};
		
		/**
		 * Register asynchronous validation rule
		 *
		 * @param  {string}   name
		 * @param  {function} fn
		 * @param  {string}   message
		 * @return {void}
		 */
		Validator.registerAsync = function(name, fn, message) {
		  var lang = Validator.getDefaultLang();
		  Rules.registerAsync(name, fn);
		  Lang._setRuleMessage(lang, name, message);
		};
		
		module.exports = Validator;


	/***/ },
	/* 94 */
	/***/ function(module, exports) {

		var rules = {
		
		  required: function(val) {
		    var str;
		
		    if (val === undefined || val === null) {
		      return false;
		    }
		
		    str = String(val).replace(/\s/g, "");
		    return str.length > 0 ? true : false;
		  },
		
		  required_if: function(val, req, attribute) {
		    req = this.getParameters();
		    if (this.validator.input[req[0]] === req[1]) {
		      return this.validator.getRule('required').validate(val);
		    }
		
		    return true;
		  },
		
		  // compares the size of strings
		  // with numbers, compares the value
		  size: function(val, req, attribute) {
		    if (val) {
		      req = parseFloat(req);
		
		      var size = this.getSize();
		
		      return size === req;
		    }
		
		    return true;
		  },
		
		  string: function(val, req, attribute) {
		    return typeof val === 'string';
		  },
		
		  /**
		   * Compares the size of strings or the value of numbers if there is a truthy value
		   */
		  min: function(val, req, attribute) {
		    var size = this.getSize();
		    return size >= req;
		  },
		
		  /**
		   * Compares the size of strings or the value of numbers if there is a truthy value
		   */
		  max: function(val, req, attribute) {
		    var size = this.getSize();
		    return size <= req;
		  },
		
		  between: function(val, req, attribute) {
		    req = this.getParameters();
		    var size = this.getSize();
		    var min = parseFloat(req[0], 10);
		    var max = parseFloat(req[1], 10);
		    return size >= min && size <= max;
		  },
		
		  email: function(val) {
		    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		    return re.test(val);
		  },
		
		  numeric: function(val) {
		    var num;
		
		    num = Number(val); // tries to convert value to a number. useful if value is coming from form element
		
		    if (typeof num === 'number' && !isNaN(num) && typeof val !== 'boolean') {
		      return true;
		    } else {
		      return false;
		    }
		  },
		
		  array: function(val) {
		    return val instanceof Array;
		  },
		
		  url: function(url) {
		    return (/^https?:\/\/\S+/).test(url);
		  },
		
		  alpha: function(val) {
		    return (/^[a-zA-Z]+$/).test(val);
		  },
		
		  alpha_dash: function(val) {
		    return (/^[a-zA-Z0-9_\-]+$/).test(val);
		  },
		
		  alpha_num: function(val) {
		    return (/^[a-zA-Z0-9]+$/).test(val);
		  },
		
		  same: function(val, req) {
		    var val1 = this.validator.input[req];
		    var val2 = val;
		
		    if (val1 === val2) {
		      return true;
		    }
		
		    return false;
		  },
		
		  different: function(val, req) {
		    var val1 = this.validator.input[req];
		    var val2 = val;
		
		    if (val1 !== val2) {
		      return true;
		    }
		
		    return false;
		  },
		
		  "in": function(val, req) {
		    var list, i;
		
		    if (val) {
		      list = req.split(',');
		    }
		
		    if (val && !(val instanceof Array)) {
		      val = String(val); // if it is a number
		
		      for (i = 0; i < list.length; i++) {
		        if (val === list[i]) {
		          return true;
		        }
		      }
		
		      return false;
		    }
		
		    if (val && val instanceof Array) {
		      for (i = 0; i < val.length; i++) {
		        if (list.indexOf(val[i]) < 0) {
		          return false;
		        }
		      }
		    }
		
		    return true;
		  },
		
		  not_in: function(val, req) {
		    var list = req.split(',');
		    var len = list.length;
		    var returnVal = true;
		
		    val = String(val); // convert val to a string if it is a number
		
		    for (var i = 0; i < len; i++) {
		      if (val === list[i]) {
		        returnVal = false;
		        break;
		      }
		    }
		
		    return returnVal;
		  },
		
		  accepted: function(val) {
		    if (val === 'on' || val === 'yes' || val === 1 || val === '1' || val === true) {
		      return true;
		    }
		
		    return false;
		  },
		
		  confirmed: function(val, req, key) {
		    var confirmedKey = key + '_confirmation';
		
		    if (this.validator.input[confirmedKey] === val) {
		      return true;
		    }
		
		    return false;
		  },
		
		  integer: function(val) {
		    return String(parseInt(val, 10)) === String(val);
		  },
		
		  digits: function(val, req) {
		    var numericRule = this.validator.getRule('numeric');
		    if (numericRule.validate(val) && String(val).length === parseInt(req)) {
		      return true;
		    }
		
		    return false;
		  },
		
		  regex: function(val, req) {
		    var mod = /[g|i|m]{1,3}$/;
		    var flag = req.match(mod);
		    flag = flag ? flag[0] : "i";
		    req = req.replace(mod, "").slice(1, -1);
		    req = new RegExp(req, flag);
		    return !!val.match(req);
		  }
		
		};
		
		function Rule(name, fn, async) {
		  this.name = name;
		  this.fn = fn;
		  this.passes = null;
		  this.customMessage = undefined;
		  this.async = async;
		}
		
		Rule.prototype = {
		
		  /**
		   * Validate rule
		   *
		   * @param  {mixed} inputValue
		   * @param  {mixed} ruleValue
		   * @param  {string} attribute
		   * @param  {function} callback
		   * @return {boolean|undefined}
		   */
		  validate: function(inputValue, ruleValue, attribute, callback) {
		    var _this = this;
		    this._setValidatingData(attribute, inputValue, ruleValue);
		    if (typeof callback === 'function') {
		      this.callback = callback;
		      var handleResponse = function(passes, message) {
		        _this.response(passes, message);
		      };
		
		      if (this.async) {
		        return this.fn.apply(this, [inputValue, ruleValue, attribute, handleResponse]);
		      } else {
		        return handleResponse(this.fn.apply(this, [inputValue, ruleValue, attribute]));
		      }
		    }
		    return this.fn.apply(this, [inputValue, ruleValue, attribute]);
		  },
		
		  /**
		   * Set validating data
		   *
		   * @param {string} attribute
		   * @param {mixed} inputValue
		   * @param {mixed} ruleValue
		   * @return {void}
		   */
		  _setValidatingData: function(attribute, inputValue, ruleValue) {
		    this.attribute = attribute;
		    this.inputValue = inputValue;
		    this.ruleValue = ruleValue;
		  },
		
		  /**
		   * Get parameters
		   *
		   * @return {array}
		   */
		  getParameters: function() {
		    return this.ruleValue ? this.ruleValue.split(',') : [];
		  },
		
		  /**
		   * Get true size of value
		   *
		   * @return {integer|float}
		   */
		  getSize: function() {
		    var value = this.inputValue;
		
		    if (value instanceof Array) {
		      return value.length;
		    }
		
		    if (typeof value === 'number') {
		      return value;
		    }
		
		    if (this.validator._hasNumericRule(this.attribute)) {
		      return parseFloat(value, 10);
		    }
		
		    return value.length;
		  },
		
		  /**
		   * Get the type of value being checked; numeric or string.
		   *
		   * @return {string}
		   */
		  _getValueType: function() {
		
		    if (typeof this.inputValue === 'number' || this.validator._hasNumericRule(this.attribute)) {
		      return 'numeric';
		    }
		
		    return 'string';
		  },
		
		  /**
		   * Set the async callback response
		   *
		   * @param  {boolean|undefined} passes  Whether validation passed
		   * @param  {string|undefined} message Custom error message
		   * @return {void}
		   */
		  response: function(passes, message) {
		    this.passes = (passes === undefined || passes === true);
		    this.customMessage = message;
		    this.callback(this.passes, message);
		  },
		
		  /**
		   * Set validator instance
		   *
		   * @param {Validator} validator
		   * @return {void}
		   */
		  setValidator: function(validator) {
		    this.validator = validator;
		  }
		
		};
		
		var manager = {
		
		  /**
		   * List of async rule names
		   *
		   * @type {Array}
		   */
		  asyncRules: [],
		
		  /**
		   * Implicit rules (rules to always validate)
		   *
		   * @type {Array}
		   */
		  implicitRules: ['required', 'required_if', 'accepted'],
		
		  /**
		   * Get rule by name
		   *
		   * @param  {string} name
		   * @param {Validator}
		   * @return {Rule}
		   */
		  make: function(name, validator) {
		    var async = this.isAsync(name);
		    var rule = new Rule(name, rules[name], async);
		    rule.setValidator(validator);
		    return rule;
		  },
		
		  /**
		   * Determine if given rule is async
		   *
		   * @param  {string}  name
		   * @return {boolean}
		   */
		  isAsync: function(name) {
		    for (var i = 0, len = this.asyncRules.length; i < len; i++) {
		      if (this.asyncRules[i] === name) {
		        return true;
		      }
		    }
		    return false;
		  },
		
		  /**
		   * Determine if rule is implicit (should always validate)
		   *
		   * @param {string} name
		   * @return {boolean}
		   */
		  isImplicit: function(name) {
		    return this.implicitRules.indexOf(name) > -1;
		  },
		
		  /**
		   * Register new rule
		   *
		   * @param  {string}   name
		   * @param  {function} fn
		   * @return {void}
		   */
		  register: function(name, fn) {
		    rules[name] = fn;
		  },
		
		  /**
		   * Register async rule
		   *
		   * @param  {string}   name
		   * @param  {function} fn
		   * @return {void}
		   */
		  registerAsync: function(name, fn) {
		    this.register(name, fn);
		    this.asyncRules.push(name);
		  }
		
		};
		
		
		module.exports = manager;


	/***/ },
	/* 95 */
	/***/ function(module, exports, __webpack_require__) {

		var Messages = __webpack_require__(96);
		
		__webpack_require__(98);
		
		var container = {
		
		  messages: {},
		
		  /**
		   * Set messages for language
		   *
		   * @param {string} lang
		   * @param {object} rawMessages
		   * @return {void}
		   */
		  _set: function(lang, rawMessages) {
		    this.messages[lang] = rawMessages;
		  },
		
		  /**
		   * Set message for given language's rule.
		   *
		   * @param {string} lang
		   * @param {string} attribute
		   * @param {string|object} message
		   * @return {void}
		   */
		  _setRuleMessage: function(lang, attribute, message) {
		    this._load(lang);
		    if (message === undefined) {
		      message = this.messages[lang].def;
		    }
		
		    this.messages[lang][attribute] = message;
		  },
		
		  /**
		   * Load messages (if not already loaded)
		   *
		   * @param  {string} lang
		   * @return {void}
		   */
		  _load: function(lang) {
		    if (!this.messages[lang]) {
		      var rawMessages = __webpack_require__(99)("./" + lang);
		      this._set(lang, rawMessages);
		    }
		  },
		
		  /**
		   * Get raw messages for language
		   *
		   * @param  {string} lang
		   * @return {object}
		   */
		  _get: function(lang) {
		    this._load(lang);
		    return this.messages[lang];
		  },
		
		  /**
		   * Make messages for given language
		   *
		   * @param  {string} lang
		   * @return {Messages}
		   */
		  _make: function(lang) {
		    this._load(lang);
		    return new Messages(lang, this.messages[lang]);
		  }
		
		};
		
		module.exports = container;


	/***/ },
	/* 96 */
	/***/ function(module, exports, __webpack_require__) {

		var Attributes = __webpack_require__(97);
		
		var Messages = function(lang, messages) {
		  this.lang = lang;
		  this.messages = messages;
		  this.customMessages = {};
		  this.attributeNames = {};
		};
		
		Messages.prototype = {
		  constructor: Messages,
		
		  /**
		   * Set custom messages
		   *
		   * @param {object} customMessages
		   * @return {void}
		   */
		  _setCustom: function(customMessages) {
		    this.customMessages = customMessages || {};
		  },
		
		  /**
		   * Set custom attribute names.
		   *
		   * @param {object} attributes
		   */
		  _setAttributeNames: function(attributes) {
		    this.attributeNames = attributes;
		  },
		
		  /**
		   * Set the attribute formatter.
		   *
		   * @param {fuction} func
		   * @return {void}
		   */
		  _setAttributeFormatter: function(func) {
		    this.attributeFormatter = func;
		  },
		
		  /**
		   * Get attribute name to display.
		   *
		   * @param  {string} attribute
		   * @return {string}
		   */
		  _getAttributeName: function(attribute) {
		    var name = attribute;
		    if (this.attributeNames.hasOwnProperty(attribute)) {
		      return this.attributeNames[attribute];
		    } else if (this.messages.attributes.hasOwnProperty(attribute)) {
		      name = this.messages.attributes[attribute];
		    }
		
		    if (this.attributeFormatter) {
		      name = this.attributeFormatter(name);
		    }
		
		    return name;
		  },
		
		  /**
		   * Get all messages
		   *
		   * @return {object}
		   */
		  all: function() {
		    return this.messages;
		  },
		
		  /**
		   * Render message
		   *
		   * @param  {Rule} rule
		   * @return {string}
		   */
		  render: function(rule) {
		    if (rule.customMessage) {
		      return rule.customMessage;
		    }
		    var template = this._getTemplate(rule);
		
		    var message;
		    if (Attributes.replacements[rule.name]) {
		      message = Attributes.replacements[rule.name].apply(this, [template, rule]);
		    } else {
		      message = this._replacePlaceholders(rule, template, {});
		    }
		
		    return message;
		  },
		
		  /**
		   * Get the template to use for given rule
		   *
		   * @param  {Rule} rule
		   * @return {string}
		   */
		  _getTemplate: function(rule) {
		
		    var messages = this.messages;
		    var template = messages.def;
		    var customMessages = this.customMessages;
		    var formats = [rule.name + '.' + rule.attribute, rule.name];
		
		    for (var i = 0, format; i < formats.length; i++) {
		      format = formats[i];
		      if (customMessages.hasOwnProperty(format)) {
		        template = customMessages[format];
		        break;
		      } else if (messages.hasOwnProperty(format)) {
		        template = messages[format];
		        break;
		      }
		    }
		
		    if (typeof template === 'object') {
		      template = template[rule._getValueType()];
		    }
		
		    return template;
		  },
		
		  /**
		   * Replace placeholders in the template using the data object
		   *
		   * @param  {Rule} rule
		   * @param  {string} template
		   * @param  {object} data
		   * @return {string}
		   */
		  _replacePlaceholders: function(rule, template, data) {
		    var message, attribute;
		
		    data.attribute = this._getAttributeName(rule.attribute);
		    data[rule.name] = rule.getParameters().join(',');
		
		    if (typeof template === 'string' && typeof data === 'object') {
		      message = template;
		
		      for (attribute in data) {
		        message = message.replace(new RegExp(':' + attribute, 'g'), data[attribute]);
		      }
		    }
		
		    return message;
		  }
		
		};
		
		module.exports = Messages;


	/***/ },
	/* 97 */
	/***/ function(module, exports) {

		var replacements = {
		
		  /**
		   * Between replacement (replaces :min and :max)
		   *
		   * @param  {string} template
		   * @param  {Rule} rule
		   * @return {string}
		   */
		  between: function(template, rule) {
		    var parameters = rule.getParameters();
		    return this._replacePlaceholders(rule, template, {
		      min: parameters[0],
		      max: parameters[1]
		    });
		  },
		
		  /**
		   * Required_if replacement.
		   *
		   * @param  {string} template
		   * @param  {Rule} rule
		   * @return {string}
		   */
		  required_if: function(template, rule) {
		    var parameters = rule.getParameters();
		    return this._replacePlaceholders(rule, template, {
		      other: parameters[0],
		      value: parameters[1]
		    });
		  }
		};
		
		function formatter(attribute) {
		  return attribute.replace(/[_\[]/g, ' ').replace(/]/g, '');
		}
		
		module.exports = {
		  replacements: replacements,
		  formatter: formatter
		};


	/***/ },
	/* 98 */
	/***/ function(module, exports) {

		module.exports = {
		  accepted: 'The :attribute must be accepted.',
		  alpha: 'The :attribute field must contain only alphabetic characters.',
		  alpha_dash: 'The :attribute field may only contain alpha-numeric characters, as well as dashes and underscores.',
		  alpha_num: 'The :attribute field must be alphanumeric.',
		  between: 'The :attribute field must be between :min and :max.',
		  confirmed: 'The :attribute confirmation does not match.',
		  email: 'The :attribute format is invalid.',
		  def: 'The :attribute attribute has errors.',
		  digits: 'The :attribute must be :digits digits.',
		  different: 'The :attribute and :different must be different.',
		  'in': 'The selected :attribute is invalid.',
		  integer: 'The :attribute must be an integer.',
		  min: {
		    numeric: 'The :attribute must be at least :min.',
		    string: 'The :attribute must be at least :min characters.'
		  },
		  max: {
		    numeric: 'The :attribute may not be greater than :max.',
		    string: 'The :attribute may not be greater than :max characters.'
		  },
		  not_in: 'The selected :attribute is invalid.',
		  numeric: 'The :attribute must be a number.',
		  required: 'The :attribute field is required.',
		  required_if: 'The :attribute field is required when :other is :value.',
		  same: 'The :attribute and :same fields must match.',
		  size: {
		    numeric: 'The :attribute must be :size.',
		    string: 'The :attribute must be :size characters.'
		  },
		  string: 'The :attribute must be a string.',
		  url: 'The :attribute format is invalid.',
		  regex: 'The :attribute format is invalid',
		  attributes: {}
		};


	/***/ },
	/* 99 */
	/***/ function(module, exports, __webpack_require__) {

		var map = {
			"./en": 98,
			"./en.js": 98,
			"./es": 100,
			"./es.js": 100,
			"./fr": 101,
			"./fr.js": 101,
			"./it": 102,
			"./it.js": 102,
			"./ja": 103,
			"./ja.js": 103,
			"./pl": 104,
			"./pl.js": 104,
			"./ru": 105,
			"./ru.js": 105
		};
		function webpackContext(req) {
			return __webpack_require__(webpackContextResolve(req));
		};
		function webpackContextResolve(req) {
			return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
		};
		webpackContext.keys = function webpackContextKeys() {
			return Object.keys(map);
		};
		webpackContext.resolve = webpackContextResolve;
		module.exports = webpackContext;
		webpackContext.id = 99;


	/***/ },
	/* 100 */
	/***/ function(module, exports) {

		module.exports = {
		  accepted: 'El campo :attribute debe ser aceptado.',
		  alpha: 'El campo :attribute solo debe contener letras.',
		  alpha_dash: 'El campo :attribute solo debe contener letras, números y guiones.',
		  alpha_num: 'El campo :attribute solo debe contener letras y números.',
		  attributes: {},
		  between: 'El campo :attribute tiene que estar entre :min - :max.',
		  confirmed: 'La confirmación de :attribute no coincide.',
		  different: 'El campo :attribute y :other deben ser diferentes.',
		  digits: 'El campo :attribute debe tener :digits dígitos.',
		  email: 'El campo :attribute no es un correo válido',
		  'in': 'El campo :attribute es inválido.',
		  integer: 'El campo :attribute debe ser un número entero.',
		  max: {
		    numeric: 'El campo :attribute no debe ser mayor a :max.',
		    string: 'El campo :attribute no debe ser mayor que :max caracteres.'
		  },
		  min: {
		    numeric: 'El tamaño del campo :attribute debe ser de al menos :min.',
		    string: 'El campo :attribute debe contener al menos :min caracteres.'
		  },
		  not_in: 'El campo :attribute es inválido.',
		  numeric: 'El campo :attribute debe ser numérico.',
		  regex: 'El formato del campo :attribute es inválido.',
		  required: 'El campo :attribute es obligatorio.',
		  required_if: 'El campo :attribute es obligatorio cuando :other es :value.',
		  same: 'El campo :attribute y :other deben coincidir.',
		  size: {
		    numeric: 'El tamaño del campo :attribute debe ser :size.',
		    string: 'El campo :attribute debe contener :size caracteres.'
		  },
		  url: 'El formato de :attribute es inválido.'
		};


	/***/ },
	/* 101 */
	/***/ function(module, exports) {

		module.exports = {
		  accepted: 'Le champs :attribute doit être accepté.',
		  alpha: 'Le champs :attribute ne peut contenir que des caractères alphabétiques.',
		  alpha_dash: 'Le champs :attribute ne peut contenir que des caractères alphanumériques, des tirets et underscores.',
		  alpha_num: 'Le champs :attribute doit être alphanumérique.',
		  between: 'Le champs :attribute doit être compris entre :min and :max.',
		  confirmed: 'Le champs :attribute ne correspond pas.',
		  email: 'Le champs :attribute contient un format invalide.',
		  def: 'Le champs :attribute contient un attribut erroné.',
		  digits: 'Le champs :attribute doit être de :digits chiffres.',
		  different: 'Le champs :attribute et :different doivent être differents.',
		  'in': 'Le champs :attribute est invalide.',
		  integer: 'Le champs :attribute doit être un entier.',
		  min: {
		    numeric: 'Le champs :attribute doit être contenir au moins :min.',
		    string: 'Le champs :attribute doit être contenir au moins :min caractères.'
		  },
		  max: {
		    numeric: 'Le champs :attribute ne doit être supérieur à :max.',
		    string: 'Le champs :attribute ne doit être plus de :max characters.'
		  },
		  not_in: 'Le champs :attribute est invalide.',
		  numeric: 'Le champs :attribute doit être un numéro.',
		  required: 'Le champs :attribute est obligatoire.',
		  required_if: 'Le champs :attribute est obligatoire quand :other est :value.',
		  same: 'Le champs :attribute et :same doivent correspondre.',
		  size: {
		    numeric: 'La taille du champs :attribute doit être :size.',
		    string: 'La taille du champs :attribute doit être de :size caractères.'
		  },
		  url: 'Le format du champs :attribute est invalide.',
		  regex: 'Le format du champs :attribute est invalide.',
		  attributes: {}
		};


	/***/ },
	/* 102 */
	/***/ function(module, exports) {

		module.exports = {
		  accepted: 'Il campo :attribute deve essere accettato.',
		  alpha: 'Il campo :attribute deve contenere sono caratteri alfabetici.',
		  alpha_dash: 'Il campo :attribute può contenere solo caratteri alfanumerici oltre a trattini e trattini bassi.',
		  alpha_num: 'Il campo :attribute deve essere alfanumerico.',
		  between: 'Il campo :attribute deve essere compreso tra :min e :max.',
		  confirmed: 'Il campo conferma :attribute non è uguale.',
		  email: 'Il formato dell\'attributo :attribute non è valido.',
		  def: 'Gli attributi del campo :attribute contengono degli errori.',
		  digits: 'Il campo :attribute deve essere di :digits cifre.',
		  different: 'Il campo :attribute e :different devo essere diversi.',
		  'in': 'Il valore del campo :attribute non è valido.',
		  integer: 'Il campo :attribute deve essere un valore intero.',
		  min: {
		    numeric: 'Il campo :attribute deve essere maggiore o uguale di :min.',
		    string: 'Il campo :attribute deve essere composto da almeno :min caratteri.'
		  },
		  max: {
		    numeric: 'Il campo :attribute deve essere minore o uguale di :max.',
		    string: 'Il campo :attribute deve essere composto da massimo :max caratteri.'
		  },
		  not_in: 'Il campo :attribute non è valido.',
		  numeric: 'Il campo :attribute deve essere un numero.',
		  required: 'Il campo :attribute è richiesto.',
		  required_if: 'Il campo :attribute è richiesto quando il campo :other è uguale a :value.',
		  same: 'I campi :attribute e :same devono essere uguali.',
		  size: {
		    numeric: 'La dimensione del campo :attribute deve essere uguale a :size.',
		    string: 'Il campo :attribute deve essere di :size caratteri.'
		  },
		  string: 'Il campo :attribute deve essere una stringa.',
		  url: 'Il formato del campo :attribute non è valido.',
		  regex: 'Il formato del campo :attribute non è valido.',
		  attributes: {}
		};


	/***/ },
	/* 103 */
	/***/ function(module, exports) {

		module.exports = {
		    accepted: ':attributeを確認してください。',
		    alpha: ':attributeは英字のみで入力してください。',
		    alpha_dash: ':attributeは英字とダッシュと下線のみで入力してください。',
		    alpha_num: ':attributeは英数字のみで入力してください。',
		    between: ':attributeは:min〜:max文字で入力してください。',
		    confirmed: ':attributeは確認が一致しません。',
		    email: ':attributeは正しいメールアドレスを入力してください。',
		    def: ':attributeは検証エラーが含まれています。',
		    digits: ':attributeは:digitsの数字のみで入力してください。',
		    different: ':attributeと:differentは同じであってはなりません。',
		    'in': '選択された:attributeは無効です。',
		    integer: ':attributeは整数で入力してください。',
		    min        : {
		        numeric : ":attributeは:min以上を入力してください。",
		        string  : ":attributeは:min文字以上で入力してください。"
		    },
		    max : {
		        numeric : ":attributeは:max以下を入力してください。",
		        string  : ":attributeは:max文字以上で入力してください。"
		    },
		    not_in      : "選択された:attributeは無効です。",
		    numeric     : ":attributeは数値で入力してください。",
		    required    : ":attributeは必須です。",
		    required_if : ":otherは:valueになったら:attributeは必須です。",
		    same        : ":attributeと:sameは同じでなければなりません。",
		    size        : {
		        numeric : ":attributeは:sizeを入力してください。",
		        string  : ":attributeは:size文字で入力してください。"
		    },
		    url        : ":attributeはURIを入力してください。",
		    regex      : ":attributeの値 \":value\" はパターンにマッチする必要があります。",
		    attributes : {}
		};


	/***/ },
	/* 104 */
	/***/ function(module, exports) {

		module.exports = {
		    accepted: 'Pole :attribute musi być zaakceptowane.',
		    alpha: 'Pole :attribute może zawierać tylko litery.',
		    alpha_dash: 'Pole :attribute moze zawierać tylko litery, myślnik i podrkeślenie.',
		    alpha_num: 'Pole :attribute moze zawierac tylko znaki alfanumeryczne.',
		    between: 'Pole :attribute musi mieć długość od :min do :max.',
		    confirmed: 'Pole :attribute nie spełnia warunku potwierdzenia.',
		    email: 'Pole :attribute ma niepoprawny format adresu email.',
		    def: 'Pole :attribute zawiera błędy.',
		    digits: 'Pole :attribute może zawierać tylko cyfry ze zbioru :digits.',
		    different: 'Pola :attribute i :different muszą się różnić.',
		    'in': 'Pole :attribute musi należeć do zbioru :in.',
		    integer: 'Pole :attribute musi być liczbą całkowitą.',
		    min: {
		        numeric: 'Pole :attribute musi być równe conajmniej :min.',
		        string: 'Pole :attribute musi zawierać conajmniej :min znaków.'
		    },
		    max: {
		        numeric: 'Pole :attribute nie moze być większe :max.',
		        string: 'Pole :attribute nie moze być dłuższe niż :max znaków.'
		    },
		    not_in: 'Pole :attribute nie może należeć do zbioru :not_in.',
		    numeric: 'Pole :attribute musi być liczbą.',
		    required: 'Pole :attribute jest wymagane.',
		    required_if: 'Pole :attribute jest wymagane jeśli pole :other jest równe :value.',
		    same: 'Pola :attribute i :same muszą być takie same.',
		    size: {
		        numeric: 'Pole :attribute musi być równe :size.',
		        string: 'Pole :attribute musi zawierać :size znaków.'
		    },
		    string: 'Pole :attribute musi być ciągiem znaków.',
		    url: 'Pole :attribute musi być poprawnym adresem URL.',
		    regex: 'Pole :attribute nie spełnia warunku.',
		    attributes: {}
		};


	/***/ },
	/* 105 */
	/***/ function(module, exports) {

		module.exports = {
		  accepted: 'Вы должны принять :attribute.',
		  alpha: 'Поле :attribute может содержать только буквы.',
		  alpha_dash: 'Поле :attribute может содержать только буквы, цифры, дефисы и символы подчёркивания.',
		  alpha_num: 'Поле :attribute может содержать только буквы и цифры.',
		  between: 'Поле :attribute должно быть между :min и :max.',
		  confirmed: 'Поле :attribute не совпадает с подтверждением.',
		  email: 'Поле :attribute должно быть действительным электронным адресом.',
		  def: 'Поле :attribute содержит ошибки.',
		  digits: 'Длина цифрового поля :attribute должна быть :digits.',
		  different: 'Поля :attribute и :different должны различаться.',
		  'in': 'Выбранное значение для :attribute ошибочно.',
		  integer: 'Поле :attribute должно быть целым числом.',
		  min: {
		    numeric: 'Значение поля :attribute должно быть больше или равно :min.',
		    string: 'Количество символов в поле :attribute должно быть не менее :min.'
		  },
		  max: {
		    numeric: 'Значение поля :attribute должно быть меньше или равно :max.',
		    string: 'Количество символов в поле :attribute не может превышать :max.'
		  },
		  not_in: 'Выбранное значение для :attribute ошибочно.',
		  numeric: 'Поле :attribute должно быть числом.',
		  required: 'Поле :attribute обязательно для заполнения.',
		  required_if: 'Поле :attribute требуется когда значения поля :other равно :value.',
		  same: 'Значение :attribute должно совпадать с :same.',
		  size: {
		    numeric: 'Значение поля :attribute должно быть равным :size.',
		    string: 'Количество символов в поле :attribute должно быть равно :size.'
		  },
		  url: 'Поле :attribute должно содержать валидный URL.',
		  regex: 'Неверный формат поля :attribute.',
		  attributes: {}
		};


	/***/ },
	/* 106 */
	/***/ function(module, exports) {

		var Errors = function() {
		  this.errors = {};
		};
		
		Errors.prototype = {
		  constructor: Errors,
		
		  /**
		   * Add new error message for given attribute
		   *
		   * @param  {string} attribute
		   * @param  {string} message
		   * @return {void}
		   */
		  add: function(attribute, message) {
		    if (!this.has(attribute)) {
		      this.errors[attribute] = [];
		    }
		
		    if (this.errors[attribute].indexOf(message) === -1) {
		      this.errors[attribute].push(message);
		    }
		  },
		
		  /**
		   * Returns an array of error messages for an attribute, or an empty array
		   *
		   * @param  {string} attribute A key in the data object being validated
		   * @return {array} An array of error messages
		   */
		  get: function(attribute) {
		    if (this.has(attribute)) {
		      return this.errors[attribute];
		    }
		
		    return [];
		  },
		
		  /**
		   * Returns the first error message for an attribute, false otherwise
		   *
		   * @param  {string} attribute A key in the data object being validated
		   * @return {string|false} First error message or false
		   */
		  first: function(attribute) {
		    if (this.has(attribute)) {
		      return this.errors[attribute][0];
		    }
		
		    return false;
		  },
		
		  /**
		   * Get all error messages from all failing attributes
		   *
		   * @return {Object} Failed attribute names for keys and an array of messages for values
		   */
		  all: function() {
		    return this.errors;
		  },
		
		  /**
		   * Determine if there are any error messages for an attribute
		   *
		   * @param  {string}  attribute A key in the data object being validated
		   * @return {boolean}
		   */
		  has: function(attribute) {
		    if (this.errors.hasOwnProperty(attribute)) {
		      return true;
		    }
		
		    return false;
		  }
		};
		
		module.exports = Errors;


	/***/ },
	/* 107 */
	/***/ function(module, exports) {

		function AsyncResolvers(onFailedOne, onResolvedAll) {
		  this.onResolvedAll = onResolvedAll;
		  this.onFailedOne = onFailedOne;
		  this.resolvers = {};
		  this.resolversCount = 0;
		  this.passed = [];
		  this.failed = [];
		  this.firing = false;
		}
		
		AsyncResolvers.prototype = {
		
		  /**
		   * Add resolver
		   *
		   * @param {Rule} rule
		   * @return {integer}
		   */
		  add: function(rule) {
		    var index = this.resolversCount;
		    this.resolvers[index] = rule;
		    this.resolversCount++;
		    return index;
		  },
		
		  /**
		   * Resolve given index
		   *
		   * @param  {integer} index
		   * @return {void}
		   */
		  resolve: function(index) {
		    var rule = this.resolvers[index];
		    if (rule.passes === true) {
		      this.passed.push(rule);
		    } else if (rule.passes === false) {
		      this.failed.push(rule);
		      this.onFailedOne(rule);
		    }
		
		    this.fire();
		  },
		
		  /**
		   * Determine if all have been resolved
		   *
		   * @return {boolean}
		   */
		  isAllResolved: function() {
		    return (this.passed.length + this.failed.length) === this.resolversCount;
		  },
		
		  /**
		   * Attempt to fire final all resolved callback if completed
		   *
		   * @return {void}
		   */
		  fire: function() {
		
		    if (!this.firing) {
		      return;
		    }
		
		    if (this.isAllResolved()) {
		      this.onResolvedAll(this.failed.length === 0);
		    }
		
		  },
		
		  /**
		   * Enable firing
		   *
		   * @return {void}
		   */
		  enableFiring: function() {
		    this.firing = true;
		  }
		
		};
		
		module.exports = AsyncResolvers;


	/***/ },
	/* 108 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-autocomplete\" v-el:autocomplete\n    :class=\"{\n        'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,\n        'has-label': !hideLabel, 'icon-right': iconRight\n    }\"\n>\n    <div class=\"ui-autocomplete-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-autocomplete-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-autocomplete-content\">\n        <label class=\"ui-autocomplete-label\">\n            <div class=\"ui-autocomplete-label-text\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n            <ui-icon\n                class=\"ui-autocomplete-clear-button\" icon=\"&#xE5CD\" title=\"Clear\"\n                @click=\"clearSearch\" v-show=\"!disabled && value.length\"\n            ></ui-icon>\n\n            <input\n                class=\"ui-autocomplete-input\" :placeholder=\"placeholder\" :name=\"name\"\n                :id=\"id\" autocomplete=\"off\" v-autofocus=\"autofocus\" :debounce=\"debounce\"\n\n                @focus=\"focus\" @blur=\"blur\" @keydown.up.prevent=\"highlight(highlightedItem - 1)\"\n                @keydown.down.prevent=\"highlight(highlightedItem + 1)\" @keydown.tab=\"close\"\n                @keydown.enter=\"selectHighlighted(highlightedItem, $event)\"\n\n                v-model=\"value\" v-disabled=\"disabled\" v-el:input\n            >\n\n            <ul class=\"ui-autocomplete-suggestions\" v-show=\"showDropdown\">\n                <ui-autocomplete-suggestion\n                    :highlighted=\"highlightedItem === index\" :item=\"item\" :partial=\"partial\"\n                    :keys=\"keys\"\n\n                    v-for=\"(index, item) in suggestions | filterBy search | limitBy limit\"\n                    v-ref:items @click=\"select(item)\"\n                ></ui-autocomplete-suggestion>\n            </ul>\n        </label>\n\n        <div class=\"ui-autocomplete-feedback\" v-if=\"showFeedback\">\n            <div\n                class=\"ui-autocomplete-error-text\" v-text=\"validationError\"\n                transition=\"ui-autocomplete-feedback-toggle\"\n                v-show=\"!hideValidationErrors && !valid\"\n            ></div>\n\n            <div\n                class=\"ui-autocomplete-help-text\" transition=\"ui-autocomplete-feedback-toggle\"\n                v-text=\"helpText\" v-else\n            ></div>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 109 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(110)
		__vue_script__ = __webpack_require__(111)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiButton.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(112)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiButton.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 110 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 111 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiMenu = __webpack_require__(13);
		
		var _UiMenu2 = _interopRequireDefault(_UiMenu);
		
		var _UiPopover = __webpack_require__(63);
		
		var _UiPopover2 = _interopRequireDefault(_UiPopover);
		
		var _UiProgressCircular = __webpack_require__(67);
		
		var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _HasDropdown = __webpack_require__(72);
		
		var _HasDropdown2 = _interopRequireDefault(_HasDropdown);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-button',
		
		    props: {
		        type: {
		            type: String,
		            default: 'normal', coerce: function coerce(type) {
		                return 'ui-button-' + type;
		            }
		        },
		        buttonType: {
		            type: String,
		            default: 'submit' },
		        color: {
		            type: String,
		            default: 'default', coerce: function coerce(color) {
		                return 'color-' + color;
		            }
		        },
		        raised: {
		            type: Boolean,
		            default: false
		        },
		        text: String,
		        icon: String,
		        iconRight: {
		            type: Boolean,
		            default: false
		        },
		        loading: {
		            type: Boolean,
		            default: false
		        },
		        showDropdownIcon: {
		            type: Boolean,
		            default: true
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        styleClasses: function styleClasses() {
		            var classes = [this.type, this.color];
		
		            if (this.raised) {
		                classes.push('ui-button-raised');
		            }
		
		            if (this.hasDropdownMenu || this.hasPopover) {
		                classes.push('has-dropdown');
		            }
		
		            return classes;
		        },
		        spinnerColor: function spinnerColor() {
		            if (this.color === 'color-default' || this.type === 'ui-button-flat') {
		                return 'black';
		            }
		
		            return 'white';
		        },
		        showIcon: function showIcon() {
		            return Boolean(this.icon);
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default,
		        UiMenu: _UiMenu2.default,
		        UiPopover: _UiPopover2.default,
		        UiProgressCircular: _UiProgressCircular2.default
		    },
		
		    mixins: [_HasDropdown2.default, _ShowsRippleInk2.default],
		
		    directives: {
		        disabled: _disabled2.default
		    }
		};

	/***/ },
	/* 112 */
	/***/ function(module, exports) {

		module.exports = "\n<button\n    class=\"ui-button\" :class=\"styleClasses\" :type=\"buttonType\" v-disabled=\"disabled || loading\"\n    v-el:button\n>\n    <div class=\"ui-button-content\" :class=\"{ 'invisible': loading }\">\n        <ui-icon\n            class=\"ui-button-icon\" :class=\"{ 'position-right': iconRight }\" :icon=\"icon\"\n            v-if=\"showIcon\"\n        ></ui-icon>\n\n        <div class=\"ui-button-text\">\n            <slot>\n                <span v-text=\"text\"></span>\n            </slot>\n        </div>\n\n        <ui-icon\n            class=\"ui-button-dropdown-icon\" icon=\"&#xE5C5;\"\n            v-if=\"!iconRight && showDropdownIcon && (hasDropdownMenu || hasPopover)\"\n        ></ui-icon>\n    </div>\n\n    <ui-progress-circular\n        class=\"ui-button-spinner\" :color=\"spinnerColor\" :size=\"18\" :stroke=\"4.5\"\n        disable-transition v-show=\"loading\"\n    ></ui-progress-circular>\n\n    <ui-ripple-ink v-if=\"!hideRippleInk && !disabled\" :trigger=\"$els.button\"></ui-ripple-ink>\n\n    <ui-menu\n        class=\"ui-button-dropdown-menu\" :trigger=\"$els.button\" :options=\"menuOptions\"\n        :show-icons=\"showMenuIcons\" :show-secondary-text=\"showMenuSecondaryText\"\n        :open-on=\"openDropdownOn\" @option-selected=\"menuOptionSelect\"\n        :dropdown-position=\"dropdownPosition\" v-if=\"hasDropdownMenu\"\n    ></ui-menu>\n\n    <ui-popover\n        :trigger=\"$els.button\" :open-on=\"openDropdownOn\" :dropdown-position=\"dropdownPosition\"\n        v-if=\"hasPopover\"\n    >\n        <slot name=\"popover\"></slot>\n    </ui-popover>\n</button>\n";

	/***/ },
	/* 113 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(114)
		__vue_script__ = __webpack_require__(115)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiCheckbox.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(116)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiCheckbox.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 114 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 115 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-checkbox',
		
		    props: {
		        name: String,
		        model: {
		            type: [Array, String, Boolean],
		            required: true,
		            twoWay: true
		        },
		        value: String,
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        labelLeft: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false,
		            initialValue: false
		        };
		    },
		
		
		    computed: {
		        isChecked: function isChecked() {
		            if (this.value) {
		                return this.model.indexOf(this.value) > -1;
		            }
		
		            return this.model;
		        }
		    },
		
		    created: function created() {
		        this.initialValue = this.model;
		    },
		
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.model = this.initialValue;
		        }
		    },
		
		    methods: {
		        focus: function focus() {
		            this.active = true;
		        },
		        blur: function blur() {
		            this.active = false;
		        }
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 116 */
	/***/ function(module, exports) {

		module.exports = "\n<label\n    class=\"ui-checkbox\"\n    :class=\"{\n        'disabled': disabled, 'checked': isChecked, 'active': active, 'label-left': labelLeft\n    }\"\n>\n    <input\n        class=\"ui-checkbox-input\" type=\"checkbox\" :name=\"name\" @focus=\"focus\" @blur=\"blur\"\n        :value=\"value ? value : null\" v-model=\"model\" v-disabled=\"disabled\"\n    >\n\n    <div class=\"ui-checkbox-checkmark\">\n        <div class=\"ui-checkbox-focus-ring\"></div>\n    </div>\n\n    <div class=\"ui-checkbox-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

	/***/ },
	/* 117 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(118)
		__vue_script__ = __webpack_require__(119)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiCollapsible.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(120)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiCollapsible.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 118 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 119 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _uuid = __webpack_require__(88);
		
		var _uuid2 = _interopRequireDefault(_uuid);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-collapsible',
		
		    props: {
		        id: String,
		        open: {
		            type: Boolean,
		            default: false
		        },
		        header: String,
		        transition: {
		            type: String,
		            default: 'ui-collapsible-toggle'
		        },
		        hideIcon: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            height: 0,
		            isReady: false
		        };
		    },
		
		
		    computed: {
		        icon: function icon() {
		            return this.open ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
		        },
		        calculatedHeight: function calculatedHeight() {
		            if (this.height === 0) {
		                return 'initial';
		            }
		
		            return this.height + 'px';
		        }
		    },
		
		    created: function created() {
		        this.id = this.id || _uuid2.default.short('ui-collapsible-');
		    },
		    ready: function ready() {
		        this.isReady = true;
		        this.setHeight();
		    },
		
		
		    events: {
		        'ui-collapsible::refresh-height': function uiCollapsibleRefreshHeight(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.$nextTick(this.setHeight);
		        }
		    },
		
		    methods: {
		        toggleMenu: function toggleMenu() {
		            if (this.disabled) {
		                return;
		            }
		
		            this.open = !this.open;
		        },
		        setHeight: function setHeight() {
		            var body = this.$els.body;
		
		            body.style.display = 'block';
		            this.height = body.scrollHeight;
		
		            if (!this.open) {
		                body.style.display = 'none';
		            }
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ShowsRippleInk2.default, _ReceivesTargetedEvent2.default],
		
		    transitions: {
		        'ui-collapsible-toggle': {
		            afterEnter: function afterEnter() {
		                this.$dispatch('opened');
		                this.setHeight();
		            },
		            afterLeave: function afterLeave() {
		                this.$dispatch('closed');
		            }
		        }
		    }
		};

	/***/ },
	/* 120 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-collapsible\">\n    <button\n        class=\"ui-collapsible-header\" :class=\"{ 'disabled': disabled }\" :aria-controls=\"id\"\n        :aria-expanded=\"open ? 'true' : 'false'\" @click=\"toggleMenu\" v-disabled=\"disabled\"\n        v-el:button\n    >\n        <div class=\"ui-collapsible-header-content\">\n            <slot name=\"header\">\n                <div v-text=\"header\"></div>\n            </slot>\n        </div>\n\n        <ui-icon class=\"ui-collapsible-header-icon\" :icon=\"icon\" v-if=\"!hideIcon\"></ui-icon>\n\n        <ui-ripple-ink\n            v-if=\"!hideRippleInk && !disabled && isReady\" :trigger=\"$els.button\"\n        ></ui-ripple-ink>\n    </button>\n\n    <div\n        class=\"ui-collapsible-body-wrapper\" :transition=\"transition\"\n        :style=\"{ 'height': calculatedHeight }\" v-show=\"open\"v-el:body\n    >\n        <div class=\"ui-collapsible-body\" :id=\"id\" :aria-hidden=\"open ? null : 'true'\">\n            <slot></slot>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 121 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(122)
		__vue_script__ = __webpack_require__(123)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiConfirm.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(128)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiConfirm.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 122 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 123 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _classlist = __webpack_require__(23);
		
		var _classlist2 = _interopRequireDefault(_classlist);
		
		var _UiModal = __webpack_require__(124);
		
		var _UiModal2 = _interopRequireDefault(_UiModal);
		
		var _UiButton = __webpack_require__(109);
		
		var _UiButton2 = _interopRequireDefault(_UiButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-confirm',
		
		    props: {
		        show: {
		            type: Boolean,
		            required: true,
		            twoWay: true
		        },
		        type: {
		            type: String,
		            default: 'primary' },
		        header: {
		            type: String,
		            default: 'UiConfirm'
		        },
		        confirmButtonText: {
		            type: String,
		            default: 'OK'
		        },
		        confirmButtonIcon: String,
		        denyButtonText: {
		            type: String,
		            default: 'Cancel'
		        },
		        denyButtonIcon: String,
		        autofocus: {
		            type: String,
		            default: 'deny-button' },
		        closeOnConfirm: {
		            type: Boolean,
		            default: false
		        },
		        backdropDismissible: {
		            type: Boolean,
		            default: true
		        },
		        loading: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    methods: {
		        confirm: function confirm() {
		            this.$dispatch('confirmed');
		
		            if (this.closeOnConfirm) {
		                this.show = false;
		            }
		        },
		        deny: function deny() {
		            this.show = false;
		            this.$dispatch('denied');
		        },
		        opened: function opened() {
		            var button = void 0;
		
		            if (this.autofocus === 'confirm-button') {
		                button = this.$els.confirmButton;
		            } else if (this.autofocus === 'deny-button') {
		                button = this.$els.denyButton;
		            }
		
		            if (button) {
		                _classlist2.default.add(button, 'autofocus');
		                button.addEventListener('blur', this.removeAutoFocus);
		
		                button.focus();
		            }
		
		            return true;
		        },
		        removeAutoFocus: function removeAutoFocus() {
		            var button = void 0;
		
		            if (this.autofocus === 'confirm-button') {
		                button = this.$els.confirmButton;
		            } else if (this.autofocus === 'deny-button') {
		                button = this.$els.denyButton;
		            }
		
		            if (button) {
		                button.removeEventListener('blur', this.removeAutoFocus);
		
		                _classlist2.default.remove(button, 'autofocus');
		            }
		        }
		    },
		
		    components: {
		        UiModal: _UiModal2.default,
		        UiButton: _UiButton2.default
		    }
		};

	/***/ },
	/* 124 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(125)
		__vue_script__ = __webpack_require__(126)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiModal.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(127)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiModal.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 125 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 126 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _classlist = __webpack_require__(23);
		
		var _classlist2 = _interopRequireDefault(_classlist);
		
		var _UiIconButton = __webpack_require__(10);
		
		var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
		
		var _UiButton = __webpack_require__(109);
		
		var _UiButton2 = _interopRequireDefault(_UiButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-modal',
		
		    props: {
		        show: {
		            type: Boolean,
		            required: true,
		            twoWay: true
		        },
		        type: {
		            type: String,
		            default: 'normal', coerce: function coerce(type) {
		                return 'ui-modal-' + type;
		            }
		        },
		        header: {
		            type: String,
		            default: 'UiModal Header'
		        },
		        body: {
		            type: String,
		            default: 'UiModal body'
		        },
		        role: {
		            type: String,
		            default: 'dialog' },
		        transition: {
		            type: String,
		            default: 'ui-modal-scale' },
		        showCloseButton: {
		            type: Boolean,
		            default: true
		        },
		        hideFooter: {
		            type: Boolean,
		            default: false
		        },
		        dismissible: {
		            type: Boolean,
		            default: true
		        },
		        backdropDismissible: {
		            type: Boolean,
		            default: true
		        }
		    },
		
		    data: function data() {
		        return {
		            lastFocussedElement: null
		        };
		    },
		
		
		    watch: {
		        show: function show() {
		            var _this = this;
		
		            this.$nextTick(function () {
		                if (_this.show) {
		                    _this.opened();
		                } else {
		                    _this.closed();
		                }
		            });
		        }
		    },
		
		    beforeDestroy: function beforeDestroy() {
		        if (this.show) {
		            this.tearDown();
		        }
		    },
		
		
		    methods: {
		        close: function close(e) {
		            if (!this.dismissible) {
		                return;
		            }
		
		            if (e.currentTarget === this.$els.modalMask && e.target !== e.currentTarget) {
		                return;
		            }
		
		            if (e.currentTarget === this.$els.modalMask && !this.backdropDismissible) {
		                return;
		            }
		
		            this.show = false;
		        },
		        opened: function opened() {
		            this.lastFocussedElement = document.activeElement;
		            this.$els.modalContainer.focus();
		
		            _classlist2.default.add(document.body, 'ui-modal-open');
		
		            document.addEventListener('focus', this.restrictFocus, true);
		
		            this.$dispatch('opened');
		        },
		        closed: function closed() {
		            this.tearDown();
		            this.$dispatch('closed');
		        },
		        redirectFocus: function redirectFocus(e) {
		            e.stopPropagation();
		
		            this.$els.modalContainer.focus();
		        },
		        restrictFocus: function restrictFocus(e) {
		            if (!this.$els.modalContainer.contains(e.target)) {
		                e.stopPropagation();
		                this.$els.modalContainer.focus();
		            }
		        },
		        tearDown: function tearDown() {
		            _classlist2.default.remove(document.body, 'ui-modal-open');
		
		            document.removeEventListener('focus', this.restrictFocus, true);
		
		            if (this.lastFocussedElement) {
		                this.lastFocussedElement.focus();
		            }
		        },
		        transitionEnd: function transitionEnd() {
		            if (this.show) {
		                this.$dispatch('revealed');
		            } else {
		                this.$dispatch('hidden');
		            }
		        }
		    },
		
		    components: {
		        UiIconButton: _UiIconButton2.default,
		        UiButton: _UiButton2.default
		    }
		};

	/***/ },
	/* 127 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-modal ui-modal-mask\" v-show=\"show\" :transition=\"transition\" :class=\"[type]\"\n    :role=\"role\" @transitionend=\"transitionEnd | debounce 100\"\n>\n    <div class=\"ui-modal-wrapper\" @click=\"close\" v-el:modal-mask>\n        <div\n            class=\"ui-modal-container\" tabindex=\"-1\" @keydown.esc=\"close\"\n            v-el:modal-container\n        >\n            <div class=\"ui-modal-header\">\n                <slot name=\"header\">\n                    <h1 v-text=\"header\" class=\"ui-modal-header-text\"></h1>\n                </slot>\n\n                <ui-icon-button\n                    type=\"clear\" icon=\"&#xE5CD\" class=\"ui-modal-close-button\" @click=\"close\"\n                    :disabled=\"!dismissible\" v-if=\"showCloseButton\" v-el:close-button\n                ></ui-icon-button>\n            </div>\n\n            <div class=\"ui-modal-body\">\n                <slot>\n                    <div v-text=\"body\"></div>\n                </slot>\n            </div>\n\n            <div class=\"ui-modal-footer\" v-if=\"!hideFooter\">\n                <slot name=\"footer\">\n                    <ui-button @click=\"close\" v-if=\"dismissible\">Close</ui-button>\n                </slot>\n            </div>\n\n            <div class=\"focus-redirector\" @focus=\"redirectFocus\" tabindex=\"0\"></div>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 128 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-confirm\">\n    <ui-modal\n        :show.sync=\"show\" role=\"alertdialog\" :header=\"header\" @opened=\"opened\" show-close-button\n        :dismissible=\"!loading\" :backdrop-dismissible=\"backdropDismissible\"\n    >\n        <div class=\"ui-confirm-message\">\n            <slot></slot>\n        </div>\n\n        <div slot=\"footer\">\n            <ui-button\n                :color=\"type\" :text=\"confirmButtonText\" :icon=\"confirmButtonIcon\"\n                @click=\"confirm\" :loading=\"loading\" v-el:confirm-button\n            ></ui-button>\n\n            <ui-button\n                :text=\"denyButtonText\" :icon=\"denyButtonIcon\" @click=\"deny\"\n                :disabled=\"loading\" v-el:deny-button\n            ></ui-button>\n        </div>\n    </ui-modal>\n</div>\n";

	/***/ },
	/* 129 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(130)
		__vue_script__ = __webpack_require__(131)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiFab.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(132)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiFab.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 130 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 131 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ShowsTooltip = __webpack_require__(73);
		
		var _ShowsTooltip2 = _interopRequireDefault(_ShowsTooltip);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-fab',
		
		    props: {
		        type: {
		            type: String,
		            default: 'normal',
		            coerce: function coerce(type) {
		                return 'ui-fab-' + type;
		            }
		        },
		        color: {
		            type: String,
		            default: 'default', coerce: function coerce(color) {
		                return 'color-' + color;
		            }
		        },
		        icon: {
		            type: String,
		            required: true
		        },
		        ariaLabel: String,
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    mixins: [_ShowsTooltip2.default, _ShowsRippleInk2.default],
		
		    directives: {
		        disabled: _disabled2.default
		    }
		};

	/***/ },
	/* 132 */
	/***/ function(module, exports) {

		module.exports = "\n<button\n    class=\"ui-fab\" :class=\"[this.type, this.color]\" :aria-label=\"ariaLabel || tooltip\"\n    v-disabled=\"disabled\" v-el:button\n>\n    <ui-icon class=\"ui-fab-icon\" :icon=\"icon\"></ui-icon>\n\n    <ui-ripple-ink :trigger=\"$els.button\" v-if=\"!hideRippleInk && !disabled\"></ui-ripple-ink>\n\n    <ui-tooltip\n        :trigger=\"$els.button\" :content=\"tooltip\" :position=\"tooltipPosition\" v-if=\"tooltip\"\n        :open-on=\"openTooltipOn\"\n    ></ui-tooltip>\n</button>\n";

	/***/ },
	/* 133 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(134)
		__vue_script__ = __webpack_require__(135)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiPreloader.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(136)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiPreloader.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 134 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 135 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    name: 'ui-preloader',
		
		    props: {
		        show: {
		            type: Boolean,
		            required: true
		        }
		    }
		};

	/***/ },
	/* 136 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-preloader\">\n    <div\n        class=\"ui-preloader-progressbar\" :class=\"{ 'loading' : show }\"\n        :aria-busy=\"show ? 'true' : false\" role=\"progressbar\"\n    ></div>\n</div>\n";

	/***/ },
	/* 137 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(138)
		__vue_script__ = __webpack_require__(139)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiProgressLinear.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(140)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiProgressLinear.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 138 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 139 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    name: 'ui-progress-linear',
		
		    props: {
		        show: {
		            type: Boolean,
		            default: false
		        },
		        type: {
		            type: String,
		            default: 'indeterminate' },
		        color: {
		            type: String,
		            default: 'primary', coerce: function coerce(color) {
		                return 'color-' + color;
		            }
		        },
		        value: {
		            type: Number,
		            coerce: Number,
		            default: 0
		        }
		    },
		
		    computed: {
		        progress: function progress() {
		            if (this.value < 0) {
		                return 0;
		            }
		
		            if (this.value > 100) {
		                return 100;
		            }
		
		            return this.value;
		        }
		    }
		};

	/***/ },
	/* 140 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-progress-linear\" :class=\"[color]\" v-show=\"show\"\n    transition=\"ui-progress-linear-toggle\"\n>\n    <div\n        class=\"ui-progress-linear-determinate\" :style=\"{ 'width': progress + '%' }\"\n        role=\"progressbar\" :aria-valuemin=\"0\" :aria-valuemax=\"100\" :aria-valuenow=\"value\"\n        v-if=\"type === 'determinate'\"\n    ></div>\n\n    <div\n        class=\"ui-progress-linear-indeterminate\" role=\"progressbar\" :aria-valuemin=\"0\"\n        :aria-valuemax=\"100\" v-else\n    ></div>\n</div>\n";

	/***/ },
	/* 141 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(142)
		__vue_script__ = __webpack_require__(143)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRadio.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(144)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRadio.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 142 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 143 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-radio',
		
		    props: {
		        id: String,
		        name: String,
		        model: {
		            type: String,
		            default: '',
		            twoWay: true
		        },
		        checked: {
		            type: Boolean,
		            default: false
		        },
		        value: String,
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        labelLeft: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false
		        };
		    },
		
		
		    methods: {
		        focus: function focus() {
		            this.active = true;
		
		            this.$dispatch('focussed');
		        },
		        blur: function blur() {
		            this.active = false;
		
		            this.$dispatch('blurred');
		        }
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    }
		};

	/***/ },
	/* 144 */
	/***/ function(module, exports) {

		module.exports = "\n<label\n    class=\"ui-radio\"\n    :class=\"{ 'disabled': disabled, 'checked': active, 'label-left': labelLeft }\"\n>\n    <div class=\"ui-radio-input-wrapper\">\n        <input\n            class=\"ui-radio-input\" type=\"radio\" :id=\"id\" :name=\"name\" :value=\"value\"\n            :checked=\"checked\" @focus=\"focus\" @blur=\"blur\" v-model=\"model\" v-disabled=\"disabled\"\n        >\n\n        <span class=\"ui-radio-border\"></span>\n        <span class=\"ui-radio-inner-dot\"></span>\n    </div>\n\n    <div class=\"ui-radio-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

	/***/ },
	/* 145 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(146)
		__vue_script__ = __webpack_require__(147)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRadioGroup.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(148)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRadioGroup.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 146 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 147 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _UiRadio = __webpack_require__(141);
		
		var _UiRadio2 = _interopRequireDefault(_UiRadio);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-radio-group',
		
		    props: {
		        name: {
		            type: String,
		            required: true
		        },
		        value: {
		            type: String,
		            default: '',
		            twoWay: true
		        },
		        options: {
		            type: Array,
		            required: true
		        },
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        helpText: String,
		        vertical: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false,
		            initialValue: ''
		        };
		    },
		    created: function created() {
		        this.initialValue = this.value;
		    },
		
		
		    computed: {
		        showFeedback: function showFeedback() {
		            return Boolean(this.helpText);
		        }
		    },
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.value = this.initialValue;
		        }
		    },
		
		    methods: {
		        focus: function focus() {
		            this.active = true;
		        },
		        blur: function blur() {
		            this.active = false;
		        }
		    },
		
		    components: {
		        UiRadio: _UiRadio2.default
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 148 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-radio-group\" :id=\"id\"\n    :class=\"{ 'disabled': disabled, 'active': active, 'vertical': vertical }\"\n>\n    <div class=\"ui-radio-group-label\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n    <div class=\"ui-radio-group-options-wrapper\">\n        <ui-radio\n            class=\"ui-radio-group-radio\" v-for=\"option in options\" :model.sync=\"value\"\n            :name=\"name\" :label=\"option.text || option\" :value=\"option.value || option\"\n            :disabled=\"disabled || option.disabled\" @focussed=\"focus\" @blurred=\"blur\"\n        ></ui-radio>\n    </div>\n\n    <div\n        class=\"ui-radio-group-feedback\" v-if=\"showFeedback\"\n        transition=\"ui-radio-group-feedback-toggle\"\n    >\n        <div class=\"ui-radio-group-help-text\" v-text=\"helpText\"></div>\n    </div>\n</div>\n";

	/***/ },
	/* 149 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(150)
		__vue_script__ = __webpack_require__(151)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRating.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(156)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRating.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 150 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 151 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiRatingIcon = __webpack_require__(152);
		
		var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-rating',
		
		    props: {
		        type: {
		            type: String,
		            default: 'star' },
		        value: {
		            type: Number,
		            coerce: Number,
		            required: true,
		            twoWay: true
		        },
		        total: {
		            type: Number,
		            coerce: Number,
		            required: true
		        },
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        helpText: String,
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false,
		            initialValue: 0,
		            previewValue: 0,
		            previewing: false
		        };
		    },
		
		
		    computed: {
		        showFeedback: function showFeedback() {
		            return Boolean(this.helpText);
		        }
		    },
		
		    watch: {
		        value: function value() {
		            this.previewValue = this.value;
		        },
		        previewValue: function previewValue() {
		            this.$dispatch('preview-value-changed', this.previewValue);
		        }
		    },
		
		    created: function created() {
		        this.initialValue = this.value;
		
		        this.previewValue = this.value;
		    },
		
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.value = this.initialValue;
		        }
		    },
		
		    methods: {
		        startPreview: function startPreview() {
		            if (this.disabled) {
		                return;
		            }
		
		            this.previewing = true;
		        },
		        endPreview: function endPreview() {
		            if (this.disabled) {
		                return;
		            }
		
		            this.previewing = false;
		            this.previewValue = this.value;
		        },
		        preview: function preview(n) {
		            if (this.disabled) {
		                return;
		            }
		
		            this.previewValue = n + 1;
		        },
		        commitValue: function commitValue(value) {
		            if (this.disabled) {
		                return;
		            }
		
		            if (value > 0 && value <= this.total) {
		                this.value = value;
		            }
		        },
		        incrementPreviewValue: function incrementPreviewValue() {
		            if (this.disabled) {
		                return;
		            }
		
		            var proposedValue = this.previewValue + 1;
		
		            if (proposedValue <= this.total) {
		                this.previewValue = proposedValue;
		            }
		        },
		        decrementPreviewValue: function decrementPreviewValue() {
		            if (this.disabled) {
		                return;
		            }
		
		            var proposedValue = this.previewValue - 1;
		
		            if (proposedValue > 0) {
		                this.previewValue = proposedValue;
		            }
		        },
		        focus: function focus() {
		            this.active = true;
		            this.startPreview();
		        },
		        blur: function blur() {
		            this.active = false;
		
		            this.commitValue(this.previewValue);
		            this.endPreview();
		        }
		    },
		
		    components: {
		        UiRatingIcon: _UiRatingIcon2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 152 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(153)
		__vue_script__ = __webpack_require__(154)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRatingIcon.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(155)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRatingIcon.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 153 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 154 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-rating-icon',
		
		    props: {
		        type: {
		            type: String,
		            default: 'star' },
		        selected: {
		            type: Boolean,
		            required: true
		        },
		        filled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        icon: function icon() {
		            if (this.filled || this.selected) {
		                return this.type === 'star' ? 'star' : 'favorite';
		            }
		
		            return this.type === 'star' ? 'star_border' : 'favorite_border';
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    }
		};

	/***/ },
	/* 155 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-rating-icon\">\n    <ui-icon\n        class=\"ui-rating-icon-icon\" :icon=\"icon\"\n        :class=\"{ 'selected': selected, 'filled' : filled }\"\n    ></ui-icon>\n</div>\n";

	/***/ },
	/* 156 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-rating\" :class=\"{ 'disabled': disabled, 'preview': previewing, 'active': active }\"\n\n    :tabindex=\"disabled ? null : 0\" role=\"slider\" :aria-valuemin=\"0\" :aria-valuemax=\"total\"\n    :aria-valuenow=\"previewValue\"\n\n    @keydown.up.prevent=\"incrementPreviewValue\" @keydown.down.prevent=\"decrementPreviewValue\"\n    @keydown.right.prevent=\"incrementPreviewValue\" @keydown.left.prevent=\"decrementPreviewValue\"\n    @keydown.enter.prevent=\"commitValue(previewValue)\" @focus=\"focus\" @blur=\"blur\"\n>\n    <div class=\"ui-rating-label\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n    <div\n        class=\"ui-rating-icons-wrapper\" @mouseenter=\"startPreview\" @mouseleave=\"endPreview\"\n    >\n        <ui-rating-icon\n            :type=\"type\" v-for=\"n in total\" :selected=\"(n + 1) <= value\" @mouseover=\"preview(n)\"\n            :filled=\"(n + 1) <= previewValue\" @click=\"commitValue(n + 1)\"\n        ></ui-rating-icon>\n    </div>\n\n    <div\n        class=\"ui-rating-feedback\" v-if=\"showFeedback\" transition=\"ui-rating-feedback-toggle\"\n    >\n        <div class=\"ui-rating-help-text\" v-text=\"helpText\"></div>\n    </div>\n</div>\n";

	/***/ },
	/* 157 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(158)
		__vue_script__ = __webpack_require__(159)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiRatingPreview.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(160)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiRatingPreview.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 158 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 159 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiRatingIcon = __webpack_require__(152);
		
		var _UiRatingIcon2 = _interopRequireDefault(_UiRatingIcon);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-rating-preview',
		
		    props: {
		        type: {
		            type: String,
		            default: 'star' },
		        value: {
		            type: Number,
		            coerce: Number,
		            required: true
		        },
		        total: {
		            type: Number,
		            coerce: Number,
		            required: true
		        }
		    },
		
		    components: {
		        UiRatingIcon: _UiRatingIcon2.default
		    }
		};

	/***/ },
	/* 160 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-rating-preview\" role=\"slider\" :aria-valuemin=\"0\" :aria-valuemax=\"total\"\n    :aria-valuenow=\"value\"\n>\n    <ui-rating-icon\n        :type=\"type\" v-for=\"n in total\" :selected=\"(n + 1) <= value\"\n    ></ui-rating-icon>\n</div>\n";

	/***/ },
	/* 161 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(162)
		__vue_script__ = __webpack_require__(163)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSelect.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(171)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSelect.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 162 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 163 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _mergeOptions = __webpack_require__(164);
		
		var _mergeOptions2 = _interopRequireDefault(_mergeOptions);
		
		var _fuzzysearch = __webpack_require__(84);
		
		var _fuzzysearch2 = _interopRequireDefault(_fuzzysearch);
		
		var _elementScroll = __webpack_require__(166);
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _UiSelectOption = __webpack_require__(167);
		
		var _UiSelectOption2 = _interopRequireDefault(_UiSelectOption);
		
		var _UiProgressCircular = __webpack_require__(67);
		
		var _UiProgressCircular2 = _interopRequireDefault(_UiProgressCircular);
		
		var _HasTextInput = __webpack_require__(91);
		
		var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
		
		var _ValidatesInput = __webpack_require__(92);
		
		var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-select',
		
		    props: {
		        value: {
		            type: [Object, Array, String, Number],
		            default: null,
		            twoWay: true
		        },
		        default: {
		            type: [Object, Array, String, Number],
		            default: null
		        },
		        options: {
		            type: Array,
		            default: []
		        },
		        partial: String,
		        showSearch: {
		            type: Boolean,
		            default: false
		        },
		        searchPlaceholder: {
		            type: String,
		            default: 'Search'
		        },
		        multiple: {
		            type: Boolean,
		            default: false
		        },
		        multipleDelimiter: {
		            type: String,
		            default: ', '
		        },
		        optionsDynamic: {
		            type: Boolean,
		            default: false
		        },
		        optionsLoaded: {
		            type: Boolean,
		            default: true
		        },
		        loading: {
		            type: Boolean,
		            default: false
		        },
		        keys: {
		            type: Object,
		            default: function _default() {
		                return {
		                    text: 'text',
		                    value: 'value',
		                    image: 'image'
		                };
		            }
		        },
		        filter: Function
		    },
		
		    data: function data() {
		        return {
		            query: '',
		            selectedIndex: -1,
		            highlightedIndex: -1,
		            showDropdown: false,
		            ignoreQueryChange: false
		        };
		    },
		
		
		    computed: {
		        filteredOptions: function filteredOptions() {
		            if (this.optionsDynamic) {
		                return this.options;
		            }
		
		            return this.options.filter(this.search);
		        },
		        displayText: function displayText() {
		            var _this = this;
		
		            if (this.multiple && this.value.length) {
		                var labels = this.value.map(function (value) {
		                    return value[_this.keys.text] || value;
		                });
		
		                return labels.join(this.multipleDelimiter);
		            }
		
		            return this.value ? this.value[this.keys.text] || this.value : '';
		        },
		        hasDisplayText: function hasDisplayText() {
		            return this.displayText && Boolean(this.displayText.length);
		        },
		        showIcon: function showIcon() {
		            return Boolean(this.icon);
		        },
		        nothingFound: function nothingFound() {
		            if (this.optionsDynamic && !this.optionsLoaded) {
		                return false;
		            }
		
		            if (this.query.length && !this.loading) {
		                return !Boolean(this.filteredOptions.length);
		            }
		
		            return false;
		        }
		    },
		
		    watch: {
		        filteredOptions: function filteredOptions() {
		            this.highlightedIndex = 0;
		            (0, _elementScroll.resetScroll)(this.$els.optionsList);
		        },
		        showDropdown: function showDropdown() {
		            if (this.showDropdown) {
		                this.opened();
		                this.$dispatch('opened');
		            } else {
		                this.closed();
		                this.$dispatch('closed');
		            }
		        },
		        query: function query() {
		            if (!this.ignoreQueryChange) {
		                this.$dispatch('query-changed', this.query);
		            }
		        }
		    },
		
		    created: function created() {
		        this.initValue();
		
		        var errorMessages = {
		            min: 'You must select at least :min options.',
		            max: 'You must select no more than :max options.',
		            between: 'You must select at least :min but no more than :max options.'
		        };
		
		        if (this.validationRules) {
		            this.validationMessages = (0, _mergeOptions2.default)(errorMessages, this.validationMessages);
		        }
		    },
		    ready: function ready() {
		        document.addEventListener('click', this.closeOnExternalClick);
		    },
		    beforeDestroy: function beforeDestroy() {
		        document.removeEventListener('click', this.closeOnExternalClick);
		    },
		
		
		    events: {
		        'ui-select::set-selected': function uiSelectSetSelected(value, id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.default = value;
		            this.initValue();
		        },
		
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.initValue();
		            this.dirty = false;
		            this.valid = true;
		
		            this.clearQuery();
		            this.selectedIndex = -1;
		            this.highlightedIndex = -1;
		        }
		    },
		
		    methods: {
		        initValue: function initValue() {
		            this.value = this.multiple ? [] : null;
		
		            if (this.default) {
		                var defaults = Array.isArray(this.default) ? this.default : [this.default];
		
		                if (defaults.length) {
		                    this.setDefaultValue(defaults);
		                }
		            }
		        },
		        search: function search(option) {
		            if (this.filter) {
		                return this.filter(option, this.query);
		            }
		
		            var query = this.query.toLowerCase();
		            var text = option[this.keys.text] || option;
		
		            if (typeof text === 'string') {
		                text = text.toLowerCase();
		            }
		
		            return (0, _fuzzysearch2.default)(query, text);
		        },
		        clearQuery: function clearQuery() {
		            var _this2 = this;
		
		            this.ignoreQueryChange = true;
		
		            this.$nextTick(function () {
		                _this2.query = '';
		
		                _this2.$nextTick(function () {
		                    _this2.ignoreQueryChange = false;
		                });
		            });
		        },
		        select: function select(option, index) {
		            var close = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];
		
		            if (this.multiple) {
		                if (this.isSelected(option)) {
		                    this.deselect(option);
		                } else {
		                    this.value.push(option);
		                }
		            } else {
		                this.value = option;
		                this.selectedIndex = index;
		            }
		
		            this.$dispatch('selected', option);
		
		            this.highlightedIndex = index;
		            this.clearQuery();
		            this.validate();
		
		            if (!this.multiple && close) {
		                this.close();
		            }
		        },
		        deselect: function deselect(option) {
		            this.value.$remove(option);
		        },
		        isSelected: function isSelected(option) {
		            if (this.multiple) {
		                return this.value.indexOf(option) > -1;
		            }
		
		            return this.value === option;
		        },
		        selectHighlighted: function selectHighlighted(index, e) {
		            if (this.$refs.options.length) {
		                e.preventDefault();
		                this.select(this.$refs.options[index].option, index);
		            }
		        },
		        highlight: function highlight(index, preventScroll) {
		            if (this.highlightedIndex === index || this.$refs.options.length === 0) {
		                return;
		            }
		
		            var firstIndex = 0;
		            var lastIndex = this.$refs.options.length - 1;
		
		            if (index < firstIndex) {
		                index = lastIndex;
		            } else if (index > lastIndex) {
		                index = firstIndex;
		            }
		
		            this.highlightedIndex = index;
		
		            if (!preventScroll) {
		                this.scrollOptionIntoView(this.$refs.options[index].$el);
		            }
		        },
		        focus: function focus() {
		            this.active = true;
		        },
		        blur: function blur() {
		            this.active = false;
		
		            if (this.showDropdown) {
		                this.close();
		            }
		        },
		        toggle: function toggle() {
		            if (this.showDropdown) {
		                this.close();
		            } else {
		                this.open();
		            }
		        },
		        open: function open() {
		            if (this.disabled) {
		                return;
		            }
		
		            this.showDropdown = true;
		        },
		        opened: function opened() {
		            var _this3 = this;
		
		            this.$nextTick(function () {
		                if (_this3.showSearch) {
		                    _this3.$els.searchInput.focus();
		                } else {
		                    _this3.$els.dropdown.focus();
		                }
		
		                _this3.scrollOptionIntoView(_this3.$els.optionsList.querySelector('.selected'));
		            });
		        },
		        close: function close(deactivate) {
		            this.showDropdown = false;
		
		            if (!this.dirty) {
		                this.dirty = true;
		            }
		
		            if (deactivate) {
		                this.active = false;
		            } else {
		                this.$els.label.focus();
		            }
		        },
		        closeOnExternalClick: function closeOnExternalClick(e) {
		            if (!this.$el.contains(e.target) && (this.showDropdown || this.active)) {
		                this.close(true);
		            }
		        },
		        closed: function closed() {
		            this.validate();
		
		            if (this.multiple) {
		                this.highlightedIndex = -1;
		            } else {
		                this.highlightedIndex = this.selectedIndex;
		            }
		        },
		        setDefaultValue: function setDefaultValue(defaults) {
		            var optionValue = void 0;
		            var defaultOptionValue = void 0;
		
		            for (var i = 0; i < defaults.length; i++) {
		                defaultOptionValue = defaults[i][this.keys.value] || defaults[i];
		
		                for (var j = 0; j < this.options.length; j++) {
		                    optionValue = this.options[j][this.keys.value] || this.options[j];
		
		                    if (optionValue === defaultOptionValue) {
		                        this.select(this.options[j], j, false);
		                        break;
		                    }
		                }
		            }
		        },
		        scrollOptionIntoView: function scrollOptionIntoView(optionEl) {
		            (0, _elementScroll.scrollIntoView)(optionEl, this.$els.optionsList, 80);
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default,
		        UiSelectOption: _UiSelectOption2.default,
		        UiProgressCircular: _UiProgressCircular2.default
		    },
		
		    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
		};

	/***/ },
	/* 164 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		var isOptionObject = __webpack_require__(165);
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		var propIsEnumerable = Object.propertyIsEnumerable;
		var globalThis = this;
		var defaultMergeOpts = {
			concatArrays: false
		};
		
		function getEnumerableOwnPropertyKeys(value) {
			var keys = [];
		
			for (var key in value) {
				if (hasOwnProperty.call(value, key)) {
					keys.push(key);
				}
			}
		
			if (Object.getOwnPropertySymbols) {
				var symbols = Object.getOwnPropertySymbols(value);
		
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(value, symbols[i])) {
						keys.push(symbols[i]);
					}
				}
			}
		
			return keys;
		}
		
		function clone(value) {
			if (Array.isArray(value)) {
				return cloneArray(value);
			}
		
			if (isOptionObject(value)) {
				return cloneOptionObject(value);
			}
		
			return value;
		}
		
		function cloneArray(array) {
			var result = array.slice(0, 0);
		
			getEnumerableOwnPropertyKeys(array).forEach(function (key) {
				result[key] = clone(array[key]);
			});
		
			return result;
		}
		
		function cloneOptionObject(obj) {
			var result = Object.getPrototypeOf(obj) === null ? Object.create(null) : {};
		
			getEnumerableOwnPropertyKeys(obj).forEach(function (key) {
				result[key] = clone(obj[key]);
			});
		
			return result;
		}
		
		/**
		 * @param merged {already cloned}
		 * @return {cloned Object}
		 */
		function mergeKeys(merged, source, keys, mergeOpts) {
			keys.forEach(function (key) {
				if (key in merged) {
					merged[key] = merge(merged[key], source[key], mergeOpts);
				} else {
					merged[key] = clone(source[key]);
				}
			});
		
			return merged;
		}
		
		/**
		 * @param merged {already cloned}
		 * @return {cloned Object}
		 *
		 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
		 */
		function concatArrays(merged, source, mergeOpts) {
			var result = merged.slice(0, 0);
			var resultIndex = 0;
		
			[merged, source].forEach(function (array) {
				var indices = [];
		
				// result.concat(array) with cloning
				for (var k = 0; k < array.length; k++) {
					if (!hasOwnProperty.call(array, k)) {
						continue;
					}
		
					indices.push(String(k));
		
					if (array === merged) {
						// already cloned
						result[resultIndex++] = array[k];
					} else {
						result[resultIndex++] = clone(array[k]);
					}
				}
		
				// merge non-index keys
				result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(function (key) {
					return indices.indexOf(key) === -1;
				}), mergeOpts);
			});
		
			return result;
		}
		
		/**
		 * @param merged {already cloned}
		 * @return {cloned Object}
		 */
		function merge(merged, source, mergeOpts) {
			if (mergeOpts.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
				return concatArrays(merged, source, mergeOpts);
			}
		
			if (!isOptionObject(source) || !isOptionObject(merged)) {
				return clone(source);
			}
		
			return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), mergeOpts);
		}
		
		module.exports = function () {
			var mergeOpts = merge(clone(defaultMergeOpts), (this !== globalThis && this) || {}, defaultMergeOpts);
			var merged = {};
		
			for (var i = 0; i < arguments.length; i++) {
				var option = arguments[i];
		
				if (option === undefined) {
					continue;
				}
		
				if (!isOptionObject(option)) {
					throw new TypeError('`' + option + '` is not an Option Object');
				}
		
				merged = merge(merged, option, mergeOpts);
			}
		
			return merged;
		};


	/***/ },
	/* 165 */
	/***/ function(module, exports) {

		'use strict';
		var toString = Object.prototype.toString;
		
		module.exports = function (x) {
			var prototype;
			return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
		};


	/***/ },
	/* 166 */
	/***/ function(module, exports) {

		"use strict";
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.inView = inView;
		exports.scrollIntoView = scrollIntoView;
		exports.resetScroll = resetScroll;
		function inView(element, container) {
		    if (!element) {
		        return;
		    }
		
		    container = container || element.parentElement;
		
		    var top = element.offsetTop;
		    var parentTop = container.scrollTop;
		    var bottom = top + element.offsetHeight;
		    var parentBottom = container.offsetHeight;
		
		    return top >= parentTop && bottom <= parentBottom;
		}
		
		function scrollIntoView(element, container) {
		    var marginTop = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
		
		    if (!element || inView(element, container)) {
		        return;
		    }
		
		    container = container || element.parentElement;
		
		    container.scrollTop = element.offsetTop - marginTop;
		}
		
		function resetScroll(element) {
		    if (!element) {
		        return;
		    }
		
		    element.scrollTop = 0;
		}
		
		exports.default = {
		    inView: inView,
		    scrollIntoView: scrollIntoView,
		    resetScroll: resetScroll
		};

	/***/ },
	/* 167 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(168)
		__vue_script__ = __webpack_require__(169)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSelectOption.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(170)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSelectOption.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 168 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 169 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-select-option',
		
		    props: {
		        option: {
		            type: [String, Object],
		            required: true
		        },
		        partial: {
		            type: String,
		            default: 'ui-select-simple' },
		        showCheckbox: {
		            type: Boolean,
		            default: false
		        },
		        highlighted: {
		            type: Boolean,
		            default: false
		        },
		        selected: {
		            type: Boolean,
		            default: false
		        },
		        keys: {
		            type: Object,
		            default: function _default() {
		                return {
		                    text: 'text',
		                    value: 'value',
		                    image: 'image'
		                };
		            }
		        }
		    },
		
		    computed: {
		        icon: function icon() {
		            return this.selected ? 'check_box' : 'check_box_outline_blank';
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    partials: {
		        'ui-select-simple': '\n            <li class="ui-select-item-text" v-text="option[keys.text] || option"></li>\n        ',
		
		        'ui-select-image': '\n            <div\n                class="ui-select-item-image"\n                :style="{ \'background-image\': \'url(\' + option[keys.image] + \')\' }"\n            ></div>\n\n            <div class="ui-select-item-text" v-text="option[keys.text]"></div>\n        '
		    }
		};

	/***/ },
	/* 170 */
	/***/ function(module, exports) {

		module.exports = "\n<li\n    class=\"ui-select-option\" :class=\"{ highlighted: highlighted, selected: selected }\"\n>\n    <div class=\"ui-select-option-content\" :class=\"[partial]\">\n        <partial :name=\"partial\"></partial>\n    </div>\n\n    <ui-icon\n        class=\"ui-select-option-checkbox\" :icon=\"icon\" v-if=\"showCheckbox\"\n    ></ui-icon>\n</li>\n";

	/***/ },
	/* 171 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-select\" :id=\"id\" :class=\"{\n        'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,\n        'has-label': !hideLabel, 'icon-right': iconRight\n    }\"\n>\n    <div class=\"ui-select-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-select-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-select-content\">\n        <div\n            class=\"ui-select-label\" :tabindex=\"disabled ? null : '0'\" v-el:label\n            @focus=\"focus\" @keydown.tab=\"blur\" @click=\"toggle\" @keydown.space.prevent=\"open\"\n            @keydown.enter.prevent=\"open\"\n        >\n            <div class=\"ui-select-label-text\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n            <div class=\"ui-select-display\">\n                <div\n                    class=\"ui-select-value\" :class=\"{ placeholder: !hasDisplayText }\"\n                    v-text=\"hasDisplayText ? displayText : placeholder\"\n                ></div>\n\n                <ui-icon icon=\"arrow_drop_down\" class=\"ui-select-dropdown-icon\"></ui-icon>\n            </div>\n\n            <div\n                class=\"ui-select-dropdown\" tabindex=\"-1\" v-show=\"showDropdown\" v-el:dropdown\n                @keydown.esc.prevent=\"close()\" @keydown.tab=\"close()\"\n                @keydown.up.prevent=\"highlight(highlightedIndex - 1)\"\n                @keydown.down.prevent=\"highlight(highlightedIndex + 1)\"\n                @keydown.enter.prevent.stop=\"selectHighlighted(highlightedIndex, $event)\"\n            >\n                <div class=\"ui-select-search\" v-if=\"showSearch\" @click.stop @keydown.space.stop>\n                    <input\n                        class=\"ui-select-search-input\" type=\"text\" v-el:search-input\n                        :placeholder=\"searchPlaceholder\" v-model=\"query\" autocomplete=\"off\"\n                    >\n\n                    <ui-progress-circular\n                        class=\"ui-select-search-spinner\" :size=\"24\" :stroke=\"4\" :show=\"loading\"\n                    ></ui-progress-circular>\n                </div>\n\n                <ul class=\"ui-select-options\" v-el:options-list>\n                    <ui-select-option\n                        :option=\"option\" :partial=\"partial\" :show-checkbox=\"multiple\" :\n                        :keys=\"keys\" @click.stop.prevent=\"select(option, index)\"\n                        @mouseover.stop=\"highlight(index, true)\"\n\n                        :highlighted=\"highlightedIndex === index\"\n                        :selected=\"isSelected(option)\"\n\n                        v-for=\"(index, option) in filteredOptions\" v-ref:options\n                    ></ui-select-option>\n\n                    <li class=\"ui-select-no-results\" v-if=\"nothingFound\">No results found</li>\n                </ul>\n            </div>\n        </div>\n\n        <div class=\"ui-select-feedback\" v-if=\"showFeedback\">\n            <div\n                class=\"ui-select-error-text\" transition=\"ui-select-feedback-toggle\"\n                v-text=\"validationError\" v-show=\"!hideValidationErrors && !valid\"\n            ></div>\n\n            <div\n                class=\"ui-select-help-text\" transition=\"ui-select-feedback-toggle\"\n                v-text=\"helpText\" v-else\n            ></div>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 172 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(173)
		__vue_script__ = __webpack_require__(174)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSlider.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(183)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSlider.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 173 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 174 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _draggabilly = __webpack_require__(175);
		
		var _draggabilly2 = _interopRequireDefault(_draggabilly);
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-slider',
		
		    props: {
		        name: String,
		        value: {
		            type: Number,
		            required: true,
		            twoWay: true
		        },
		        step: {
		            type: Number,
		            default: 5
		        },
		        icon: String,
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            active: false,
		            initialValue: 0,
		            dragging: false,
		            draggable: null
		        };
		    },
		
		
		    computed: {
		        showIcon: function showIcon() {
		            return Boolean(this.icon);
		        },
		        hasLabel: function hasLabel() {
		            if (this.hideLabel) {
		                return true;
		            }
		
		            return Boolean(this.label);
		        }
		    },
		
		    watch: {
		        value: function value() {
		            if (!this.dragging) {
		                this.$els.thumb.style.left = this.value + '%';
		            }
		        },
		        disabled: function disabled() {
		            if (this.disabled) {
		                this.draggable.disable();
		            } else {
		                this.draggable.enable();
		            }
		        }
		    },
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.value = this.initialValue;
		        }
		    },
		
		    ready: function ready() {
		        this.initialValue = this.value;
		
		        this.$els.thumb.style.left = this.value + '%';
		
		        this.draggable = new _draggabilly2.default(this.$els.thumb, {
		            containment: this.$els.containment,
		            axis: 'x'
		        });
		
		        this.draggable.on('dragStart', this.dragStart);
		        this.draggable.on('dragMove', this.dragMove);
		        this.draggable.on('dragEnd', this.dragEnd);
		
		        if (this.disabled) {
		            this.draggable.disable();
		        }
		    },
		    beforeDestroy: function beforeDestroy() {
		        if (this.draggable) {
		            this.draggable.destroy();
		        }
		    },
		
		
		    methods: {
		        focus: function focus() {
		            this.active = true;
		        },
		        blur: function blur() {
		            this.active = false;
		        },
		        sliderClick: function sliderClick(e) {
		            if (this.disabled) {
		                return;
		            }
		
		            var sliderPosition = this.$els.slider.getBoundingClientRect();
		
		            var newValue = (e.clientX - sliderPosition.left) / sliderPosition.width * 100;
		
		            this.setValue(newValue);
		
		            if (e.target !== this.$els.thumb) {
		                this.draggable._pointerDown(e, e);
		            }
		
		            this.$el.focus();
		        },
		        dragStart: function dragStart() {
		            this.dragging = true;
		            this.$el.focus();
		        },
		        dragMove: function dragMove() {
		            var x = this.draggable.position.x;
		            var newValue = x / this.$els.slider.getBoundingClientRect().width * 100;
		
		            this.setValue(newValue);
		        },
		        dragEnd: function dragEnd() {
		            this.dragging = false;
		        },
		        increment: function increment() {
		            if (this.value === 100) {
		                return;
		            }
		
		            this.setValue(this.value + this.step);
		        },
		        decrement: function decrement() {
		            if (this.value === 0) {
		                return;
		            }
		
		            this.setValue(this.value - this.step);
		        },
		        setValue: function setValue(value) {
		            if (value === this.value) {
		                return;
		            }
		
		            var moderatedValue = Math.round(value);
		
		            if (moderatedValue >= 100) {
		                moderatedValue = 100;
		            }
		
		            if (moderatedValue <= 0) {
		                moderatedValue = 0;
		            }
		
		            this.value = moderatedValue;
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 175 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * Draggabilly v1.2.4
		 * Make that shiz draggable
		 * http://draggabilly.desandro.com
		 * MIT license
		 */
		
		( function( window, factory ) {
		  'use strict';
		
		  if ( typeof define == 'function' && define.amd ) {
		    // AMD
		    define( [
		        'classie/classie',
		        'get-style-property/get-style-property',
		        'get-size/get-size',
		        'unidragger/unidragger'
		      ],
		      function( classie, getStyleProperty, getSize, Unidragger ) {
		        return factory( window, classie, getStyleProperty, getSize, Unidragger );
		      });
		  } else if ( true ) {
		    // CommonJS
		    module.exports = factory(
		      window,
		      __webpack_require__(176),
		      __webpack_require__(177),
		      __webpack_require__(178),
		      __webpack_require__(179)
		    );
		  } else {
		    // browser global
		    window.Draggabilly = factory(
		      window,
		      window.classie,
		      window.getStyleProperty,
		      window.getSize,
		      window.Unidragger
		    );
		  }
		
		}( window, function factory( window, classie, getStyleProperty, getSize, Unidragger ) {
		
		'use strict';
		
		// vars
		var document = window.document;
		
		function noop() {}
		
		// -------------------------- helpers -------------------------- //
		
		// extend objects
		function extend( a, b ) {
		  for ( var prop in b ) {
		    a[ prop ] = b[ prop ];
		  }
		  return a;
		}
		
		// ----- get style ----- //
		
		var defView = document.defaultView;
		
		var getStyle = defView && defView.getComputedStyle ?
		  function( elem ) {
		    return defView.getComputedStyle( elem, null );
		  } :
		  function( elem ) {
		    return elem.currentStyle;
		  };
		
		
		// http://stackoverflow.com/a/384380/182183
		var isElement = ( typeof HTMLElement == 'object' ) ?
		  function isElementDOM2( obj ) {
		    return obj instanceof HTMLElement;
		  } :
		  function isElementQuirky( obj ) {
		    return obj && typeof obj == 'object' &&
		      obj.nodeType == 1 && typeof obj.nodeName == 'string';
		  };
		
		// -------------------------- requestAnimationFrame -------------------------- //
		
		// https://gist.github.com/1866474
		
		var lastTime = 0;
		var prefixes = 'webkit moz ms o'.split(' ');
		// get unprefixed rAF and cAF, if present
		var requestAnimationFrame = window.requestAnimationFrame;
		var cancelAnimationFrame = window.cancelAnimationFrame;
		// loop through vendor prefixes and get prefixed rAF and cAF
		var prefix;
		for( var i = 0; i < prefixes.length; i++ ) {
		  if ( requestAnimationFrame && cancelAnimationFrame ) {
		    break;
		  }
		  prefix = prefixes[i];
		  requestAnimationFrame = requestAnimationFrame || window[ prefix + 'RequestAnimationFrame' ];
		  cancelAnimationFrame  = cancelAnimationFrame  || window[ prefix + 'CancelAnimationFrame' ] ||
		                            window[ prefix + 'CancelRequestAnimationFrame' ];
		}
		
		// fallback to setTimeout and clearTimeout if either request/cancel is not supported
		if ( !requestAnimationFrame || !cancelAnimationFrame )  {
		  requestAnimationFrame = function( callback ) {
		    var currTime = new Date().getTime();
		    var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
		    var id = window.setTimeout( function() {
		      callback( currTime + timeToCall );
		    }, timeToCall );
		    lastTime = currTime + timeToCall;
		    return id;
		  };
		
		  cancelAnimationFrame = function( id ) {
		    window.clearTimeout( id );
		  };
		}
		
		// -------------------------- support -------------------------- //
		
		var transformProperty = getStyleProperty('transform');
		// TODO fix quick & dirty check for 3D support
		var is3d = !!getStyleProperty('perspective');
		
		var jQuery = window.jQuery;
		
		// --------------------------  -------------------------- //
		
		function Draggabilly( element, options ) {
		  // querySelector if string
		  this.element = typeof element == 'string' ?
		    document.querySelector( element ) : element;
		
		  if ( jQuery ) {
		    this.$element = jQuery( this.element );
		  }
		
		  // options
		  this.options = extend( {}, this.constructor.defaults );
		  this.option( options );
		
		  this._create();
		}
		
		// inherit Unidragger methods
		extend( Draggabilly.prototype, Unidragger.prototype );
		
		Draggabilly.defaults = {
		};
		
		/**
		 * set options
		 * @param {Object} opts
		 */
		Draggabilly.prototype.option = function( opts ) {
		  extend( this.options, opts );
		};
		
		Draggabilly.prototype._create = function() {
		
		  // properties
		  this.position = {};
		  this._getPosition();
		
		  this.startPoint = { x: 0, y: 0 };
		  this.dragPoint = { x: 0, y: 0 };
		
		  this.startPosition = extend( {}, this.position );
		
		  // set relative positioning
		  var style = getStyle( this.element );
		  if ( style.position != 'relative' && style.position != 'absolute' ) {
		    this.element.style.position = 'relative';
		  }
		
		  this.enable();
		  this.setHandles();
		
		};
		
		/**
		 * set this.handles and bind start events to 'em
		 */
		Draggabilly.prototype.setHandles = function() {
		  this.handles = this.options.handle ?
		    this.element.querySelectorAll( this.options.handle ) : [ this.element ];
		
		  this.bindHandles();
		};
		
		/**
		 * emits events via eventEmitter and jQuery events
		 * @param {String} type - name of event
		 * @param {Event} event - original event
		 * @param {Array} args - extra arguments
		 */
		Draggabilly.prototype.dispatchEvent = function( type, event, args ) {
		  var emitArgs = [ event ].concat( args );
		  this.emitEvent( type, emitArgs );
		  var jQuery = window.jQuery;
		  // trigger jQuery event
		  if ( jQuery && this.$element ) {
		    if ( event ) {
		      // create jQuery event
		      var $event = jQuery.Event( event );
		      $event.type = type;
		      this.$element.trigger( $event, args );
		    } else {
		      // just trigger with type if no event available
		      this.$element.trigger( type, args );
		    }
		  }
		};
		
		// -------------------------- position -------------------------- //
		
		// get left/top position from style
		Draggabilly.prototype._getPosition = function() {
		  // properties
		  var style = getStyle( this.element );
		
		  var x = parseInt( style.left, 10 );
		  var y = parseInt( style.top, 10 );
		
		  // clean up 'auto' or other non-integer values
		  this.position.x = isNaN( x ) ? 0 : x;
		  this.position.y = isNaN( y ) ? 0 : y;
		
		  this._addTransformPosition( style );
		};
		
		// add transform: translate( x, y ) to position
		Draggabilly.prototype._addTransformPosition = function( style ) {
		  if ( !transformProperty ) {
		    return;
		  }
		  var transform = style[ transformProperty ];
		  // bail out if value is 'none'
		  if ( transform.indexOf('matrix') !== 0 ) {
		    return;
		  }
		  // split matrix(1, 0, 0, 1, x, y)
		  var matrixValues = transform.split(',');
		  // translate X value is in 12th or 4th position
		  var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
		  var translateX = parseInt( matrixValues[ xIndex ], 10 );
		  // translate Y value is in 13th or 5th position
		  var translateY = parseInt( matrixValues[ xIndex + 1 ], 10 );
		  this.position.x += translateX;
		  this.position.y += translateY;
		};
		
		// -------------------------- events -------------------------- //
		
		/**
		 * pointer start
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.pointerDown = function( event, pointer ) {
		  this._dragPointerDown( event, pointer );
		  // kludge to blur focused inputs in dragger
		  var focused = document.activeElement;
		  if ( focused && focused.blur ) {
		    focused.blur();
		  }
		  // bind move and end events
		  this._bindPostStartEvents( event );
		  classie.add( this.element, 'is-pointer-down' );
		  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
		};
		
		/**
		 * drag move
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.pointerMove = function( event, pointer ) {
		  var moveVector = this._dragPointerMove( event, pointer );
		  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
		  this._dragMove( event, pointer, moveVector );
		};
		
		/**
		 * drag start
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.dragStart = function( event, pointer ) {
		  if ( !this.isEnabled ) {
		    return;
		  }
		  this._getPosition();
		  this.measureContainment();
		  // position _when_ drag began
		  this.startPosition.x = this.position.x;
		  this.startPosition.y = this.position.y;
		  // reset left/top style
		  this.setLeftTop();
		
		  this.dragPoint.x = 0;
		  this.dragPoint.y = 0;
		
		  // reset isDragging flag
		  this.isDragging = true;
		  classie.add( this.element, 'is-dragging' );
		  this.dispatchEvent( 'dragStart', event, [ pointer ] );
		  // start animation
		  this.animate();
		};
		
		Draggabilly.prototype.measureContainment = function() {
		  var containment = this.options.containment;
		  if ( !containment ) {
		    return;
		  }
		
		  this.size = getSize( this.element );
		  var elemRect = this.element.getBoundingClientRect();
		
		  // use element if element
		  var container = isElement( containment ) ? containment :
		    // fallback to querySelector if string
		    typeof containment == 'string' ? document.querySelector( containment ) :
		    // otherwise just `true`, use the parent
		    this.element.parentNode;
		
		  this.containerSize = getSize( container );
		  var containerRect = container.getBoundingClientRect();
		
		  this.relativeStartPosition = {
		    x: elemRect.left - containerRect.left,
		    y: elemRect.top  - containerRect.top
		  };
		};
		
		// ----- move event ----- //
		
		/**
		 * drag move
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.dragMove = function( event, pointer, moveVector ) {
		  if ( !this.isEnabled ) {
		    return;
		  }
		  var dragX = moveVector.x;
		  var dragY = moveVector.y;
		
		  var grid = this.options.grid;
		  var gridX = grid && grid[0];
		  var gridY = grid && grid[1];
		
		  dragX = applyGrid( dragX, gridX );
		  dragY = applyGrid( dragY, gridY );
		
		  dragX = this.containDrag( 'x', dragX, gridX );
		  dragY = this.containDrag( 'y', dragY, gridY );
		
		  // constrain to axis
		  dragX = this.options.axis == 'y' ? 0 : dragX;
		  dragY = this.options.axis == 'x' ? 0 : dragY;
		
		  this.position.x = this.startPosition.x + dragX;
		  this.position.y = this.startPosition.y + dragY;
		  // set dragPoint properties
		  this.dragPoint.x = dragX;
		  this.dragPoint.y = dragY;
		
		  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
		};
		
		function applyGrid( value, grid, method ) {
		  method = method || 'round';
		  return grid ? Math[ method ]( value / grid ) * grid : value;
		}
		
		Draggabilly.prototype.containDrag = function( axis, drag, grid ) {
		  if ( !this.options.containment ) {
		    return drag;
		  }
		  var measure = axis == 'x' ? 'width' : 'height';
		
		  var rel = this.relativeStartPosition[ axis ];
		  var min = applyGrid( -rel, grid, 'ceil' );
		  var max = this.containerSize[ measure ] - rel - this.size[ measure ];
		  max = applyGrid( max, grid, 'floor' );
		  return  Math.min( max, Math.max( min, drag ) );
		};
		
		// ----- end event ----- //
		
		/**
		 * pointer up
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.pointerUp = function( event, pointer ) {
		  classie.remove( this.element, 'is-pointer-down' );
		  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
		  this._dragPointerUp( event, pointer );
		};
		
		/**
		 * drag end
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Draggabilly.prototype.dragEnd = function( event, pointer ) {
		  if ( !this.isEnabled ) {
		    return;
		  }
		  this.isDragging = false;
		  // use top left position when complete
		  if ( transformProperty ) {
		    this.element.style[ transformProperty ] = '';
		    this.setLeftTop();
		  }
		  classie.remove( this.element, 'is-dragging' );
		  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
		};
		
		// -------------------------- animation -------------------------- //
		
		Draggabilly.prototype.animate = function() {
		  // only render and animate if dragging
		  if ( !this.isDragging ) {
		    return;
		  }
		
		  this.positionDrag();
		
		  var _this = this;
		  requestAnimationFrame( function animateFrame() {
		    _this.animate();
		  });
		
		};
		
		// transform translate function
		var translate = is3d ?
		  function( x, y ) {
		    return 'translate3d( ' + x + 'px, ' + y + 'px, 0)';
		  } :
		  function( x, y ) {
		    return 'translate( ' + x + 'px, ' + y + 'px)';
		  };
		
		// left/top positioning
		Draggabilly.prototype.setLeftTop = function() {
		  this.element.style.left = this.position.x + 'px';
		  this.element.style.top  = this.position.y + 'px';
		};
		
		Draggabilly.prototype.positionDrag = transformProperty ?
		  function() {
		    // position with transform
		    this.element.style[ transformProperty ] = translate( this.dragPoint.x, this.dragPoint.y );
		  } : Draggabilly.prototype.setLeftTop;
		
		// ----- staticClick ----- //
		
		Draggabilly.prototype.staticClick = function( event, pointer ) {
		  this.dispatchEvent( 'staticClick', event, [ pointer ] );
		};
		
		// ----- methods ----- //
		
		Draggabilly.prototype.enable = function() {
		  this.isEnabled = true;
		};
		
		Draggabilly.prototype.disable = function() {
		  this.isEnabled = false;
		  if ( this.isDragging ) {
		    this.dragEnd();
		  }
		};
		
		Draggabilly.prototype.destroy = function() {
		  this.disable();
		  // reset styles
		  if ( transformProperty ) {
		    this.element.style[ transformProperty ] = '';
		  }
		  this.element.style.left = '';
		  this.element.style.top = '';
		  this.element.style.position = '';
		  // unbind handles
		  this.unbindHandles();
		  // remove jQuery data
		  if ( this.$element ) {
		    this.$element.removeData('draggabilly');
		  }
		};
		
		// ----- jQuery bridget ----- //
		
		// required for jQuery bridget
		Draggabilly.prototype._init = noop;
		
		if ( jQuery && jQuery.bridget ) {
		  jQuery.bridget( 'draggabilly', Draggabilly );
		}
		
		// -----  ----- //
		
		return Draggabilly;
		
		}));
		
		}.call(window));

	/***/ },
	/* 176 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * classie v1.0.1
		 * class helper functions
		 * from bonzo https://github.com/ded/bonzo
		 * MIT license
		 * 
		 * classie.has( elem, 'my-class' ) -> true/false
		 * classie.add( elem, 'my-new-class' )
		 * classie.remove( elem, 'my-unwanted-class' )
		 * classie.toggle( elem, 'my-class' )
		 */
		
		/*jshint browser: true, strict: true, undef: true, unused: true */
		/*global define: false, module: false */
		
		( function( window ) {
		
		'use strict';
		
		// class helper functions from bonzo https://github.com/ded/bonzo
		
		function classReg( className ) {
		  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}
		
		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once
		var hasClass, addClass, removeClass;
		
		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}
		
		function toggleClass( elem, c ) {
		  var fn = hasClass( elem, c ) ? removeClass : addClass;
		  fn( elem, c );
		}
		
		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};
		
		// transport
		if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( classie );
		} else if ( true ) {
		  // CommonJS
		  module.exports = classie;
		} else {
		  // browser global
		  window.classie = classie;
		}
		
		})( window );
		
		}.call(window));

	/***/ },
	/* 177 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * getStyleProperty v1.0.4
		 * original by kangax
		 * http://perfectionkills.com/feature-testing-css-properties/
		 * MIT license
		 */
		
		/*jshint browser: true, strict: true, undef: true */
		/*global define: false, exports: false, module: false */
		
		( function( window ) {
		
		'use strict';
		
		var prefixes = 'Webkit Moz ms Ms O'.split(' ');
		var docElemStyle = document.documentElement.style;
		
		function getStyleProperty( propName ) {
		  if ( !propName ) {
		    return;
		  }
		
		  // test standard property first
		  if ( typeof docElemStyle[ propName ] === 'string' ) {
		    return propName;
		  }
		
		  // capitalize
		  propName = propName.charAt(0).toUpperCase() + propName.slice(1);
		
		  // test vendor specific properties
		  var prefixed;
		  for ( var i=0, len = prefixes.length; i < len; i++ ) {
		    prefixed = prefixes[i] + propName;
		    if ( typeof docElemStyle[ prefixed ] === 'string' ) {
		      return prefixed;
		    }
		  }
		}
		
		// transport
		if ( typeof define === 'function' && define.amd ) {
		  // AMD
		  define( function() {
		    return getStyleProperty;
		  });
		} else if ( true ) {
		  // CommonJS for Component
		  module.exports = getStyleProperty;
		} else {
		  // browser global
		  window.getStyleProperty = getStyleProperty;
		}
		
		})( window );
		
		}.call(window));

	/***/ },
	/* 178 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * getSize v1.2.2
		 * measure size of elements
		 * MIT license
		 */
		
		/*jshint browser: true, strict: true, undef: true, unused: true */
		/*global define: false, exports: false, require: false, module: false, console: false */
		
		( function( window, undefined ) {
		
		'use strict';
		
		// -------------------------- helpers -------------------------- //
		
		// get a number from a string, not a percentage
		function getStyleSize( value ) {
		  var num = parseFloat( value );
		  // not a percent like '100%', and a number
		  var isValid = value.indexOf('%') === -1 && !isNaN( num );
		  return isValid && num;
		}
		
		function noop() {}
		
		var logError = typeof console === 'undefined' ? noop :
		  function( message ) {
		    console.error( message );
		  };
		
		// -------------------------- measurements -------------------------- //
		
		var measurements = [
		  'paddingLeft',
		  'paddingRight',
		  'paddingTop',
		  'paddingBottom',
		  'marginLeft',
		  'marginRight',
		  'marginTop',
		  'marginBottom',
		  'borderLeftWidth',
		  'borderRightWidth',
		  'borderTopWidth',
		  'borderBottomWidth'
		];
		
		function getZeroSize() {
		  var size = {
		    width: 0,
		    height: 0,
		    innerWidth: 0,
		    innerHeight: 0,
		    outerWidth: 0,
		    outerHeight: 0
		  };
		  for ( var i=0, len = measurements.length; i < len; i++ ) {
		    var measurement = measurements[i];
		    size[ measurement ] = 0;
		  }
		  return size;
		}
		
		
		
		function defineGetSize( getStyleProperty ) {
		
		// -------------------------- setup -------------------------- //
		
		var isSetup = false;
		
		var getStyle, boxSizingProp, isBoxSizeOuter;
		
		/**
		 * setup vars and functions
		 * do it on initial getSize(), rather than on script load
		 * For Firefox bug https://bugzilla.mozilla.org/show_bug.cgi?id=548397
		 */
		function setup() {
		  // setup once
		  if ( isSetup ) {
		    return;
		  }
		  isSetup = true;
		
		  var getComputedStyle = window.getComputedStyle;
		  getStyle = ( function() {
		    var getStyleFn = getComputedStyle ?
		      function( elem ) {
		        return getComputedStyle( elem, null );
		      } :
		      function( elem ) {
		        return elem.currentStyle;
		      };
		
		      return function getStyle( elem ) {
		        var style = getStyleFn( elem );
		        if ( !style ) {
		          logError( 'Style returned ' + style +
		            '. Are you running this code in a hidden iframe on Firefox? ' +
		            'See http://bit.ly/getsizebug1' );
		        }
		        return style;
		      };
		  })();
		
		  // -------------------------- box sizing -------------------------- //
		
		  boxSizingProp = getStyleProperty('boxSizing');
		
		  /**
		   * WebKit measures the outer-width on style.width on border-box elems
		   * IE & Firefox measures the inner-width
		   */
		  if ( boxSizingProp ) {
		    var div = document.createElement('div');
		    div.style.width = '200px';
		    div.style.padding = '1px 2px 3px 4px';
		    div.style.borderStyle = 'solid';
		    div.style.borderWidth = '1px 2px 3px 4px';
		    div.style[ boxSizingProp ] = 'border-box';
		
		    var body = document.body || document.documentElement;
		    body.appendChild( div );
		    var style = getStyle( div );
		
		    isBoxSizeOuter = getStyleSize( style.width ) === 200;
		    body.removeChild( div );
		  }
		
		}
		
		// -------------------------- getSize -------------------------- //
		
		function getSize( elem ) {
		  setup();
		
		  // use querySeletor if elem is string
		  if ( typeof elem === 'string' ) {
		    elem = document.querySelector( elem );
		  }
		
		  // do not proceed on non-objects
		  if ( !elem || typeof elem !== 'object' || !elem.nodeType ) {
		    return;
		  }
		
		  var style = getStyle( elem );
		
		  // if hidden, everything is 0
		  if ( style.display === 'none' ) {
		    return getZeroSize();
		  }
		
		  var size = {};
		  size.width = elem.offsetWidth;
		  size.height = elem.offsetHeight;
		
		  var isBorderBox = size.isBorderBox = !!( boxSizingProp &&
		    style[ boxSizingProp ] && style[ boxSizingProp ] === 'border-box' );
		
		  // get all measurements
		  for ( var i=0, len = measurements.length; i < len; i++ ) {
		    var measurement = measurements[i];
		    var value = style[ measurement ];
		    value = mungeNonPixel( elem, value );
		    var num = parseFloat( value );
		    // any 'auto', 'medium' value will be 0
		    size[ measurement ] = !isNaN( num ) ? num : 0;
		  }
		
		  var paddingWidth = size.paddingLeft + size.paddingRight;
		  var paddingHeight = size.paddingTop + size.paddingBottom;
		  var marginWidth = size.marginLeft + size.marginRight;
		  var marginHeight = size.marginTop + size.marginBottom;
		  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
		  var borderHeight = size.borderTopWidth + size.borderBottomWidth;
		
		  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
		
		  // overwrite width and height if we can get it from style
		  var styleWidth = getStyleSize( style.width );
		  if ( styleWidth !== false ) {
		    size.width = styleWidth +
		      // add padding and border unless it's already including it
		      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
		  }
		
		  var styleHeight = getStyleSize( style.height );
		  if ( styleHeight !== false ) {
		    size.height = styleHeight +
		      // add padding and border unless it's already including it
		      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
		  }
		
		  size.innerWidth = size.width - ( paddingWidth + borderWidth );
		  size.innerHeight = size.height - ( paddingHeight + borderHeight );
		
		  size.outerWidth = size.width + marginWidth;
		  size.outerHeight = size.height + marginHeight;
		
		  return size;
		}
		
		// IE8 returns percent values, not pixels
		// taken from jQuery's curCSS
		function mungeNonPixel( elem, value ) {
		  // IE8 and has percent value
		  if ( window.getComputedStyle || value.indexOf('%') === -1 ) {
		    return value;
		  }
		  var style = elem.style;
		  // Remember the original values
		  var left = style.left;
		  var rs = elem.runtimeStyle;
		  var rsLeft = rs && rs.left;
		
		  // Put in the new values to get a computed value out
		  if ( rsLeft ) {
		    rs.left = elem.currentStyle.left;
		  }
		  style.left = value;
		  value = style.pixelLeft;
		
		  // Revert the changed values
		  style.left = left;
		  if ( rsLeft ) {
		    rs.left = rsLeft;
		  }
		
		  return value;
		}
		
		return getSize;
		
		}
		
		// transport
		if ( typeof define === 'function' && define.amd ) {
		  // AMD for RequireJS
		  define( [ 'get-style-property/get-style-property' ], defineGetSize );
		} else if ( true ) {
		  // CommonJS for Component
		  module.exports = defineGetSize( __webpack_require__(177) );
		} else {
		  // browser global
		  window.getSize = defineGetSize( window.getStyleProperty );
		}
		
		})( window );
		
		}.call(window));

	/***/ },
	/* 179 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * Unidragger v1.1.5
		 * Draggable base class
		 * MIT license
		 */
		
		/*jshint browser: true, unused: true, undef: true, strict: true */
		
		( function( window, factory ) {
		  /*global define: false, module: false, require: false */
		  'use strict';
		  // universal module definition
		
		  if ( typeof define == 'function' && define.amd ) {
		    // AMD
		    define( [
		      'eventie/eventie',
		      'unipointer/unipointer'
		    ], function( eventie, Unipointer ) {
		      return factory( window, eventie, Unipointer );
		    });
		  } else if ( true ) {
		    // CommonJS
		    module.exports = factory(
		      window,
		      __webpack_require__(180),
		      __webpack_require__(181)
		    );
		  } else {
		    // browser global
		    window.Unidragger = factory(
		      window,
		      window.eventie,
		      window.Unipointer
		    );
		  }
		
		}( window, function factory( window, eventie, Unipointer ) {
		
		'use strict';
		
		// -----  ----- //
		
		function noop() {}
		
		// handle IE8 prevent default
		function preventDefaultEvent( event ) {
		  if ( event.preventDefault ) {
		    event.preventDefault();
		  } else {
		    event.returnValue = false;
		  }
		}
		
		// -------------------------- Unidragger -------------------------- //
		
		function Unidragger() {}
		
		// inherit Unipointer & EventEmitter
		Unidragger.prototype = new Unipointer();
		
		// ----- bind start ----- //
		
		Unidragger.prototype.bindHandles = function() {
		  this._bindHandles( true );
		};
		
		Unidragger.prototype.unbindHandles = function() {
		  this._bindHandles( false );
		};
		
		var navigator = window.navigator;
		/**
		 * works as unbinder, as you can .bindHandles( false ) to unbind
		 * @param {Boolean} isBind - will unbind if falsey
		 */
		Unidragger.prototype._bindHandles = function( isBind ) {
		  // munge isBind, default to true
		  isBind = isBind === undefined ? true : !!isBind;
		  // extra bind logic
		  var binderExtra;
		  if ( navigator.pointerEnabled ) {
		    binderExtra = function( handle ) {
		      // disable scrolling on the element
		      handle.style.touchAction = isBind ? 'none' : '';
		    };
		  } else if ( navigator.msPointerEnabled ) {
		    binderExtra = function( handle ) {
		      // disable scrolling on the element
		      handle.style.msTouchAction = isBind ? 'none' : '';
		    };
		  } else {
		    binderExtra = function() {
		      // TODO re-enable img.ondragstart when unbinding
		      if ( isBind ) {
		        disableImgOndragstart( handle );
		      }
		    };
		  }
		  // bind each handle
		  var bindMethod = isBind ? 'bind' : 'unbind';
		  for ( var i=0, len = this.handles.length; i < len; i++ ) {
		    var handle = this.handles[i];
		    this._bindStartEvent( handle, isBind );
		    binderExtra( handle );
		    eventie[ bindMethod ]( handle, 'click', this );
		  }
		};
		
		// remove default dragging interaction on all images in IE8
		// IE8 does its own drag thing on images, which messes stuff up
		
		function noDragStart() {
		  return false;
		}
		
		// TODO replace this with a IE8 test
		var isIE8 = 'attachEvent' in document.documentElement;
		
		// IE8 only
		var disableImgOndragstart = !isIE8 ? noop : function( handle ) {
		
		  if ( handle.nodeName == 'IMG' ) {
		    handle.ondragstart = noDragStart;
		  }
		
		  var images = handle.querySelectorAll('img');
		  for ( var i=0, len = images.length; i < len; i++ ) {
		    var img = images[i];
		    img.ondragstart = noDragStart;
		  }
		};
		
		// ----- start event ----- //
		
		/**
		 * pointer start
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Unidragger.prototype.pointerDown = function( event, pointer ) {
		  // dismiss range sliders
		  if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
		    // reset pointerDown logic
		    this.isPointerDown = false;
		    delete this.pointerIdentifier;
		    return;
		  }
		
		  this._dragPointerDown( event, pointer );
		  // kludge to blur focused inputs in dragger
		  var focused = document.activeElement;
		  if ( focused && focused.blur ) {
		    focused.blur();
		  }
		  // bind move and end events
		  this._bindPostStartEvents( event );
		  // track scrolling
		  this.pointerDownScroll = Unidragger.getScrollPosition();
		  eventie.bind( window, 'scroll', this );
		
		  this.emitEvent( 'pointerDown', [ event, pointer ] );
		};
		
		// base pointer down logic
		Unidragger.prototype._dragPointerDown = function( event, pointer ) {
		  // track to see when dragging starts
		  this.pointerDownPoint = Unipointer.getPointerPoint( pointer );
		
		  // prevent default, unless touchstart or <select>
		  var isTouchstart = event.type == 'touchstart';
		  var targetNodeName = event.target.nodeName;
		  if ( !isTouchstart && targetNodeName != 'SELECT' ) {
		    preventDefaultEvent( event );
		  }
		};
		
		// ----- move event ----- //
		
		/**
		 * drag move
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Unidragger.prototype.pointerMove = function( event, pointer ) {
		  var moveVector = this._dragPointerMove( event, pointer );
		  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
		  this._dragMove( event, pointer, moveVector );
		};
		
		// base pointer move logic
		Unidragger.prototype._dragPointerMove = function( event, pointer ) {
		  var movePoint = Unipointer.getPointerPoint( pointer );
		  var moveVector = {
		    x: movePoint.x - this.pointerDownPoint.x,
		    y: movePoint.y - this.pointerDownPoint.y
		  };
		  // start drag if pointer has moved far enough to start drag
		  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
		    this._dragStart( event, pointer );
		  }
		  return moveVector;
		};
		
		// condition if pointer has moved far enough to start drag
		Unidragger.prototype.hasDragStarted = function( moveVector ) {
		  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
		};
		
		
		// ----- end event ----- //
		
		/**
		 * pointer up
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Unidragger.prototype.pointerUp = function( event, pointer ) {
		  this.emitEvent( 'pointerUp', [ event, pointer ] );
		  this._dragPointerUp( event, pointer );
		};
		
		Unidragger.prototype._dragPointerUp = function( event, pointer ) {
		  if ( this.isDragging ) {
		    this._dragEnd( event, pointer );
		  } else {
		    // pointer didn't move enough for drag to start
		    this._staticClick( event, pointer );
		  }
		};
		
		Unipointer.prototype.pointerDone = function() {
		  eventie.unbind( window, 'scroll', this );
		};
		
		// -------------------------- drag -------------------------- //
		
		// dragStart
		Unidragger.prototype._dragStart = function( event, pointer ) {
		  this.isDragging = true;
		  this.dragStartPoint = Unidragger.getPointerPoint( pointer );
		  // prevent clicks
		  this.isPreventingClicks = true;
		
		  this.dragStart( event, pointer );
		};
		
		Unidragger.prototype.dragStart = function( event, pointer ) {
		  this.emitEvent( 'dragStart', [ event, pointer ] );
		};
		
		// dragMove
		Unidragger.prototype._dragMove = function( event, pointer, moveVector ) {
		  // do not drag if not dragging yet
		  if ( !this.isDragging ) {
		    return;
		  }
		
		  this.dragMove( event, pointer, moveVector );
		};
		
		Unidragger.prototype.dragMove = function( event, pointer, moveVector ) {
		  preventDefaultEvent( event );
		  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
		};
		
		// dragEnd
		Unidragger.prototype._dragEnd = function( event, pointer ) {
		  // set flags
		  this.isDragging = false;
		  // re-enable clicking async
		  var _this = this;
		  setTimeout( function() {
		    delete _this.isPreventingClicks;
		  });
		
		  this.dragEnd( event, pointer );
		};
		
		Unidragger.prototype.dragEnd = function( event, pointer ) {
		  this.emitEvent( 'dragEnd', [ event, pointer ] );
		};
		
		Unidragger.prototype.pointerDone = function() {
		  eventie.unbind( window, 'scroll', this );
		  delete this.pointerDownScroll;
		};
		
		// ----- onclick ----- //
		
		// handle all clicks and prevent clicks when dragging
		Unidragger.prototype.onclick = function( event ) {
		  if ( this.isPreventingClicks ) {
		    preventDefaultEvent( event );
		  }
		};
		
		// ----- staticClick ----- //
		
		// triggered after pointer down & up with no/tiny movement
		Unidragger.prototype._staticClick = function( event, pointer ) {
		  // ignore emulated mouse up clicks
		  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
		    return;
		  }
		
		  // allow click in <input>s and <textarea>s
		  var nodeName = event.target.nodeName;
		  if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
		    event.target.focus();
		  }
		  this.staticClick( event, pointer );
		
		  // set flag for emulated clicks 300ms after touchend
		  if ( event.type != 'mouseup' ) {
		    this.isIgnoringMouseUp = true;
		    var _this = this;
		    // reset flag after 300ms
		    setTimeout( function() {
		      delete _this.isIgnoringMouseUp;
		    }, 400 );
		  }
		};
		
		Unidragger.prototype.staticClick = function( event, pointer ) {
		  this.emitEvent( 'staticClick', [ event, pointer ] );
		};
		
		// ----- scroll ----- //
		
		Unidragger.prototype.onscroll = function() {
		  var scroll = Unidragger.getScrollPosition();
		  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
		  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
		  // cancel click/tap if scroll is too much
		  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
		    this._pointerDone();
		  }
		};
		
		// ----- utils ----- //
		
		Unidragger.getPointerPoint = function( pointer ) {
		  return {
		    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
		    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
		  };
		};
		
		var isPageOffset = window.pageYOffset !== undefined;
		
		// get scroll in { x, y }
		Unidragger.getScrollPosition = function() {
		  return {
		    x: isPageOffset ? window.pageXOffset : document.body.scrollLeft,
		    y: isPageOffset ? window.pageYOffset : document.body.scrollTop
		  };
		};
		
		// -----  ----- //
		
		Unidragger.getPointerPoint = Unipointer.getPointerPoint;
		
		return Unidragger;
		
		}));
		
		}.call(window));

	/***/ },
	/* 180 */
	/***/ function(module, exports, __webpack_require__) {

		var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
		 * eventie v1.0.6
		 * event binding helper
		 *   eventie.bind( elem, 'click', myFn )
		 *   eventie.unbind( elem, 'click', myFn )
		 * MIT license
		 */
		
		/*jshint browser: true, undef: true, unused: true */
		/*global define: false, module: false */
		
		( function( window ) {
		
		'use strict';
		
		var docElem = document.documentElement;
		
		var bind = function() {};
		
		function getIEEvent( obj ) {
		  var event = window.event;
		  // add event.target
		  event.target = event.target || event.srcElement || obj;
		  return event;
		}
		
		if ( docElem.addEventListener ) {
		  bind = function( obj, type, fn ) {
		    obj.addEventListener( type, fn, false );
		  };
		} else if ( docElem.attachEvent ) {
		  bind = function( obj, type, fn ) {
		    obj[ type + fn ] = fn.handleEvent ?
		      function() {
		        var event = getIEEvent( obj );
		        fn.handleEvent.call( fn, event );
		      } :
		      function() {
		        var event = getIEEvent( obj );
		        fn.call( obj, event );
		      };
		    obj.attachEvent( "on" + type, obj[ type + fn ] );
		  };
		}
		
		var unbind = function() {};
		
		if ( docElem.removeEventListener ) {
		  unbind = function( obj, type, fn ) {
		    obj.removeEventListener( type, fn, false );
		  };
		} else if ( docElem.detachEvent ) {
		  unbind = function( obj, type, fn ) {
		    obj.detachEvent( "on" + type, obj[ type + fn ] );
		    try {
		      delete obj[ type + fn ];
		    } catch ( err ) {
		      // can't delete window object properties
		      obj[ type + fn ] = undefined;
		    }
		  };
		}
		
		var eventie = {
		  bind: bind,
		  unbind: unbind
		};
		
		// ----- module definition ----- //
		
		if ( true ) {
		  // AMD
		  !(__WEBPACK_AMD_DEFINE_FACTORY__ = (eventie), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if ( typeof exports === 'object' ) {
		  // CommonJS
		  module.exports = eventie;
		} else {
		  // browser global
		  window.eventie = eventie;
		}
		
		})( window );


	/***/ },
	/* 181 */
	/***/ function(module, exports, __webpack_require__) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * Unipointer v1.1.0
		 * base class for doing one thing with pointer event
		 * MIT license
		 */
		
		/*jshint browser: true, undef: true, unused: true, strict: true */
		/*global define: false, module: false, require: false */
		
		( function( window, factory ) {
		  'use strict';
		  // universal module definition
		
		  if ( typeof define == 'function' && define.amd ) {
		    // AMD
		    define( [
		      'eventEmitter/EventEmitter',
		      'eventie/eventie'
		    ], function( EventEmitter, eventie ) {
		      return factory( window, EventEmitter, eventie );
		    });
		  } else if ( true ) {
		    // CommonJS
		    module.exports = factory(
		      window,
		      __webpack_require__(182),
		      __webpack_require__(180)
		    );
		  } else {
		    // browser global
		    window.Unipointer = factory(
		      window,
		      window.EventEmitter,
		      window.eventie
		    );
		  }
		
		}( window, function factory( window, EventEmitter, eventie ) {
		
		'use strict';
		
		function noop() {}
		
		function Unipointer() {}
		
		// inherit EventEmitter
		Unipointer.prototype = new EventEmitter();
		
		Unipointer.prototype.bindStartEvent = function( elem ) {
		  this._bindStartEvent( elem, true );
		};
		
		Unipointer.prototype.unbindStartEvent = function( elem ) {
		  this._bindStartEvent( elem, false );
		};
		
		/**
		 * works as unbinder, as you can ._bindStart( false ) to unbind
		 * @param {Boolean} isBind - will unbind if falsey
		 */
		Unipointer.prototype._bindStartEvent = function( elem, isBind ) {
		  // munge isBind, default to true
		  isBind = isBind === undefined ? true : !!isBind;
		  var bindMethod = isBind ? 'bind' : 'unbind';
		
		  if ( window.navigator.pointerEnabled ) {
		    // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
		    eventie[ bindMethod ]( elem, 'pointerdown', this );
		  } else if ( window.navigator.msPointerEnabled ) {
		    // IE10 Pointer Events
		    eventie[ bindMethod ]( elem, 'MSPointerDown', this );
		  } else {
		    // listen for both, for devices like Chrome Pixel
		    eventie[ bindMethod ]( elem, 'mousedown', this );
		    eventie[ bindMethod ]( elem, 'touchstart', this );
		  }
		};
		
		// trigger handler methods for events
		Unipointer.prototype.handleEvent = function( event ) {
		  var method = 'on' + event.type;
		  if ( this[ method ] ) {
		    this[ method ]( event );
		  }
		};
		
		// returns the touch that we're keeping track of
		Unipointer.prototype.getTouch = function( touches ) {
		  for ( var i=0, len = touches.length; i < len; i++ ) {
		    var touch = touches[i];
		    if ( touch.identifier == this.pointerIdentifier ) {
		      return touch;
		    }
		  }
		};
		
		// ----- start event ----- //
		
		Unipointer.prototype.onmousedown = function( event ) {
		  // dismiss clicks from right or middle buttons
		  var button = event.button;
		  if ( button && ( button !== 0 && button !== 1 ) ) {
		    return;
		  }
		  this._pointerDown( event, event );
		};
		
		Unipointer.prototype.ontouchstart = function( event ) {
		  this._pointerDown( event, event.changedTouches[0] );
		};
		
		Unipointer.prototype.onMSPointerDown =
		Unipointer.prototype.onpointerdown = function( event ) {
		  this._pointerDown( event, event );
		};
		
		/**
		 * pointer start
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 */
		Unipointer.prototype._pointerDown = function( event, pointer ) {
		  // dismiss other pointers
		  if ( this.isPointerDown ) {
		    return;
		  }
		
		  this.isPointerDown = true;
		  // save pointer identifier to match up touch events
		  this.pointerIdentifier = pointer.pointerId !== undefined ?
		    // pointerId for pointer events, touch.indentifier for touch events
		    pointer.pointerId : pointer.identifier;
		
		  this.pointerDown( event, pointer );
		};
		
		Unipointer.prototype.pointerDown = function( event, pointer ) {
		  this._bindPostStartEvents( event );
		  this.emitEvent( 'pointerDown', [ event, pointer ] );
		};
		
		// hash of events to be bound after start event
		var postStartEvents = {
		  mousedown: [ 'mousemove', 'mouseup' ],
		  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
		  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
		  MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
		};
		
		Unipointer.prototype._bindPostStartEvents = function( event ) {
		  if ( !event ) {
		    return;
		  }
		  // get proper events to match start event
		  var events = postStartEvents[ event.type ];
		  // IE8 needs to be bound to document
		  var node = event.preventDefault ? window : document;
		  // bind events to node
		  for ( var i=0, len = events.length; i < len; i++ ) {
		    var evnt = events[i];
		    eventie.bind( node, evnt, this );
		  }
		  // save these arguments
		  this._boundPointerEvents = {
		    events: events,
		    node: node
		  };
		};
		
		Unipointer.prototype._unbindPostStartEvents = function() {
		  var args = this._boundPointerEvents;
		  // IE8 can trigger dragEnd twice, check for _boundEvents
		  if ( !args || !args.events ) {
		    return;
		  }
		
		  for ( var i=0, len = args.events.length; i < len; i++ ) {
		    var event = args.events[i];
		    eventie.unbind( args.node, event, this );
		  }
		  delete this._boundPointerEvents;
		};
		
		// ----- move event ----- //
		
		Unipointer.prototype.onmousemove = function( event ) {
		  this._pointerMove( event, event );
		};
		
		Unipointer.prototype.onMSPointerMove =
		Unipointer.prototype.onpointermove = function( event ) {
		  if ( event.pointerId == this.pointerIdentifier ) {
		    this._pointerMove( event, event );
		  }
		};
		
		Unipointer.prototype.ontouchmove = function( event ) {
		  var touch = this.getTouch( event.changedTouches );
		  if ( touch ) {
		    this._pointerMove( event, touch );
		  }
		};
		
		/**
		 * pointer move
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 * @private
		 */
		Unipointer.prototype._pointerMove = function( event, pointer ) {
		  this.pointerMove( event, pointer );
		};
		
		// public
		Unipointer.prototype.pointerMove = function( event, pointer ) {
		  this.emitEvent( 'pointerMove', [ event, pointer ] );
		};
		
		// ----- end event ----- //
		
		
		Unipointer.prototype.onmouseup = function( event ) {
		  this._pointerUp( event, event );
		};
		
		Unipointer.prototype.onMSPointerUp =
		Unipointer.prototype.onpointerup = function( event ) {
		  if ( event.pointerId == this.pointerIdentifier ) {
		    this._pointerUp( event, event );
		  }
		};
		
		Unipointer.prototype.ontouchend = function( event ) {
		  var touch = this.getTouch( event.changedTouches );
		  if ( touch ) {
		    this._pointerUp( event, touch );
		  }
		};
		
		/**
		 * pointer up
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 * @private
		 */
		Unipointer.prototype._pointerUp = function( event, pointer ) {
		  this._pointerDone();
		  this.pointerUp( event, pointer );
		};
		
		// public
		Unipointer.prototype.pointerUp = function( event, pointer ) {
		  this.emitEvent( 'pointerUp', [ event, pointer ] );
		};
		
		// ----- pointer done ----- //
		
		// triggered on pointer up & pointer cancel
		Unipointer.prototype._pointerDone = function() {
		  // reset properties
		  this.isPointerDown = false;
		  delete this.pointerIdentifier;
		  // remove events
		  this._unbindPostStartEvents();
		  this.pointerDone();
		};
		
		Unipointer.prototype.pointerDone = noop;
		
		// ----- pointer cancel ----- //
		
		Unipointer.prototype.onMSPointerCancel =
		Unipointer.prototype.onpointercancel = function( event ) {
		  if ( event.pointerId == this.pointerIdentifier ) {
		    this._pointerCancel( event, event );
		  }
		};
		
		Unipointer.prototype.ontouchcancel = function( event ) {
		  var touch = this.getTouch( event.changedTouches );
		  if ( touch ) {
		    this._pointerCancel( event, touch );
		  }
		};
		
		/**
		 * pointer cancel
		 * @param {Event} event
		 * @param {Event or Touch} pointer
		 * @private
		 */
		Unipointer.prototype._pointerCancel = function( event, pointer ) {
		  this._pointerDone();
		  this.pointerCancel( event, pointer );
		};
		
		// public
		Unipointer.prototype.pointerCancel = function( event, pointer ) {
		  this.emitEvent( 'pointerCancel', [ event, pointer ] );
		};
		
		// -----  ----- //
		
		// utility function for getting x/y cooridinates from event, because IE8
		Unipointer.getPointerPoint = function( pointer ) {
		  return {
		    x: pointer.pageX !== undefined ? pointer.pageX : pointer.clientX,
		    y: pointer.pageY !== undefined ? pointer.pageY : pointer.clientY
		  };
		};
		
		// -----  ----- //
		
		return Unipointer;
		
		}));
		
		}.call(window));

	/***/ },
	/* 182 */
	/***/ function(module, exports) {

		/*** IMPORTS FROM imports-loader ***/
		var define = false;
		(function() {
		
		/*!
		 * EventEmitter v4.2.11 - git.io/ee
		 * Unlicense - http://unlicense.org/
		 * Oliver Caldwell - http://oli.me.uk/
		 * @preserve
		 */
		
		;(function () {
		    'use strict';
		
		    /**
		     * Class for managing events.
		     * Can be extended to provide event functionality in other classes.
		     *
		     * @class EventEmitter Manages event registering and emitting.
		     */
		    function EventEmitter() {}
		
		    // Shortcuts to improve speed and size
		    var proto = EventEmitter.prototype;
		    var exports = this;
		    var originalGlobalValue = exports.EventEmitter;
		
		    /**
		     * Finds the index of the listener for the event in its storage array.
		     *
		     * @param {Function[]} listeners Array of listeners to search through.
		     * @param {Function} listener Method to look for.
		     * @return {Number} Index of the specified listener, -1 if not found
		     * @api private
		     */
		    function indexOfListener(listeners, listener) {
		        var i = listeners.length;
		        while (i--) {
		            if (listeners[i].listener === listener) {
		                return i;
		            }
		        }
		
		        return -1;
		    }
		
		    /**
		     * Alias a method while keeping the context correct, to allow for overwriting of target method.
		     *
		     * @param {String} name The name of the target method.
		     * @return {Function} The aliased method
		     * @api private
		     */
		    function alias(name) {
		        return function aliasClosure() {
		            return this[name].apply(this, arguments);
		        };
		    }
		
		    /**
		     * Returns the listener array for the specified event.
		     * Will initialise the event object and listener arrays if required.
		     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
		     * Each property in the object response is an array of listener functions.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Function[]|Object} All listener functions for the event.
		     */
		    proto.getListeners = function getListeners(evt) {
		        var events = this._getEvents();
		        var response;
		        var key;
		
		        // Return a concatenated array of all matching events if
		        // the selector is a regular expression.
		        if (evt instanceof RegExp) {
		            response = {};
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    response[key] = events[key];
		                }
		            }
		        }
		        else {
		            response = events[evt] || (events[evt] = []);
		        }
		
		        return response;
		    };
		
		    /**
		     * Takes a list of listener objects and flattens it into a list of listener functions.
		     *
		     * @param {Object[]} listeners Raw listener objects.
		     * @return {Function[]} Just the listener functions.
		     */
		    proto.flattenListeners = function flattenListeners(listeners) {
		        var flatListeners = [];
		        var i;
		
		        for (i = 0; i < listeners.length; i += 1) {
		            flatListeners.push(listeners[i].listener);
		        }
		
		        return flatListeners;
		    };
		
		    /**
		     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
		     *
		     * @param {String|RegExp} evt Name of the event to return the listeners from.
		     * @return {Object} All listener functions for an event in an object.
		     */
		    proto.getListenersAsObject = function getListenersAsObject(evt) {
		        var listeners = this.getListeners(evt);
		        var response;
		
		        if (listeners instanceof Array) {
		            response = {};
		            response[evt] = listeners;
		        }
		
		        return response || listeners;
		    };
		
		    /**
		     * Adds a listener function to the specified event.
		     * The listener will not be added if it is a duplicate.
		     * If the listener returns true then it will be removed after it is called.
		     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListener = function addListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var listenerIsWrapped = typeof listener === 'object';
		        var key;
		
		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
		                listeners[key].push(listenerIsWrapped ? listener : {
		                    listener: listener,
		                    once: false
		                });
		            }
		        }
		
		        return this;
		    };
		
		    /**
		     * Alias of addListener
		     */
		    proto.on = alias('addListener');
		
		    /**
		     * Semi-alias of addListener. It will add a listener that will be
		     * automatically removed after its first execution.
		     *
		     * @param {String|RegExp} evt Name of the event to attach the listener to.
		     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addOnceListener = function addOnceListener(evt, listener) {
		        return this.addListener(evt, {
		            listener: listener,
		            once: true
		        });
		    };
		
		    /**
		     * Alias of addOnceListener.
		     */
		    proto.once = alias('addOnceListener');
		
		    /**
		     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
		     * You need to tell it what event names should be matched by a regex.
		     *
		     * @param {String} evt Name of the event to create.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvent = function defineEvent(evt) {
		        this.getListeners(evt);
		        return this;
		    };
		
		    /**
		     * Uses defineEvent to define multiple events.
		     *
		     * @param {String[]} evts An array of event names to define.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.defineEvents = function defineEvents(evts) {
		        for (var i = 0; i < evts.length; i += 1) {
		            this.defineEvent(evts[i]);
		        }
		        return this;
		    };
		
		    /**
		     * Removes a listener function from the specified event.
		     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to remove the listener from.
		     * @param {Function} listener Method to remove from the event.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListener = function removeListener(evt, listener) {
		        var listeners = this.getListenersAsObject(evt);
		        var index;
		        var key;
		
		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key)) {
		                index = indexOfListener(listeners[key], listener);
		
		                if (index !== -1) {
		                    listeners[key].splice(index, 1);
		                }
		            }
		        }
		
		        return this;
		    };
		
		    /**
		     * Alias of removeListener
		     */
		    proto.off = alias('removeListener');
		
		    /**
		     * Adds listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
		     * You can also pass it a regular expression to add the array of listeners to all events that match it.
		     * Yeah, this function does quite a bit. That's probably a bad thing.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.addListeners = function addListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(false, evt, listeners);
		    };
		
		    /**
		     * Removes listeners in bulk using the manipulateListeners method.
		     * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be removed.
		     * You can also pass it a regular expression to remove the listeners from all events that match it.
		     *
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeListeners = function removeListeners(evt, listeners) {
		        // Pass through to manipulateListeners
		        return this.manipulateListeners(true, evt, listeners);
		    };
		
		    /**
		     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
		     * The first argument will determine if the listeners are removed (true) or added (false).
		     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
		     * You can also pass it an event name and an array of listeners to be added/removed.
		     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
		     *
		     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
		     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
		     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
		        var i;
		        var value;
		        var single = remove ? this.removeListener : this.addListener;
		        var multiple = remove ? this.removeListeners : this.addListeners;
		
		        // If evt is an object then pass each of its properties to this method
		        if (typeof evt === 'object' && !(evt instanceof RegExp)) {
		            for (i in evt) {
		                if (evt.hasOwnProperty(i) && (value = evt[i])) {
		                    // Pass the single listener straight through to the singular method
		                    if (typeof value === 'function') {
		                        single.call(this, i, value);
		                    }
		                    else {
		                        // Otherwise pass back to the multiple function
		                        multiple.call(this, i, value);
		                    }
		                }
		            }
		        }
		        else {
		            // So evt must be a string
		            // And listeners must be an array of listeners
		            // Loop over it and pass each one to the multiple method
		            i = listeners.length;
		            while (i--) {
		                single.call(this, evt, listeners[i]);
		            }
		        }
		
		        return this;
		    };
		
		    /**
		     * Removes all listeners from a specified event.
		     * If you do not specify an event then all listeners will be removed.
		     * That means every event will be emptied.
		     * You can also pass a regex to remove all events that match it.
		     *
		     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.removeEvent = function removeEvent(evt) {
		        var type = typeof evt;
		        var events = this._getEvents();
		        var key;
		
		        // Remove different things depending on the state of evt
		        if (type === 'string') {
		            // Remove all listeners for the specified event
		            delete events[evt];
		        }
		        else if (evt instanceof RegExp) {
		            // Remove all events matching the regex.
		            for (key in events) {
		                if (events.hasOwnProperty(key) && evt.test(key)) {
		                    delete events[key];
		                }
		            }
		        }
		        else {
		            // Remove all listeners in all events
		            delete this._events;
		        }
		
		        return this;
		    };
		
		    /**
		     * Alias of removeEvent.
		     *
		     * Added to mirror the node API.
		     */
		    proto.removeAllListeners = alias('removeEvent');
		
		    /**
		     * Emits an event of your choice.
		     * When emitted, every listener attached to that event will be executed.
		     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
		     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
		     * So they will not arrive within the array on the other side, they will be separate.
		     * You can also pass a regular expression to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {Array} [args] Optional array of arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emitEvent = function emitEvent(evt, args) {
		        var listeners = this.getListenersAsObject(evt);
		        var listener;
		        var i;
		        var key;
		        var response;
		
		        for (key in listeners) {
		            if (listeners.hasOwnProperty(key)) {
		                i = listeners[key].length;
		
		                while (i--) {
		                    // If the listener returns true then it shall be removed from the event
		                    // The function is executed either with a basic call or an apply if there is an args array
		                    listener = listeners[key][i];
		
		                    if (listener.once === true) {
		                        this.removeListener(evt, listener.listener);
		                    }
		
		                    response = listener.listener.apply(this, args || []);
		
		                    if (response === this._getOnceReturnValue()) {
		                        this.removeListener(evt, listener.listener);
		                    }
		                }
		            }
		        }
		
		        return this;
		    };
		
		    /**
		     * Alias of emitEvent
		     */
		    proto.trigger = alias('emitEvent');
		
		    /**
		     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
		     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
		     *
		     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
		     * @param {...*} Optional additional arguments to be passed to each listener.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.emit = function emit(evt) {
		        var args = Array.prototype.slice.call(arguments, 1);
		        return this.emitEvent(evt, args);
		    };
		
		    /**
		     * Sets the current value to check against when executing listeners. If a
		     * listeners return value matches the one set here then it will be removed
		     * after execution. This value defaults to true.
		     *
		     * @param {*} value The new value to check for when executing listeners.
		     * @return {Object} Current instance of EventEmitter for chaining.
		     */
		    proto.setOnceReturnValue = function setOnceReturnValue(value) {
		        this._onceReturnValue = value;
		        return this;
		    };
		
		    /**
		     * Fetches the current value to check against when executing listeners. If
		     * the listeners return value matches this one then it should be removed
		     * automatically. It will return true by default.
		     *
		     * @return {*|Boolean} The current value to check for or the default, true.
		     * @api private
		     */
		    proto._getOnceReturnValue = function _getOnceReturnValue() {
		        if (this.hasOwnProperty('_onceReturnValue')) {
		            return this._onceReturnValue;
		        }
		        else {
		            return true;
		        }
		    };
		
		    /**
		     * Fetches the events object and creates one if required.
		     *
		     * @return {Object} The events storage object.
		     * @api private
		     */
		    proto._getEvents = function _getEvents() {
		        return this._events || (this._events = {});
		    };
		
		    /**
		     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
		     *
		     * @return {Function} Non conflicting EventEmitter class.
		     */
		    EventEmitter.noConflict = function noConflict() {
		        exports.EventEmitter = originalGlobalValue;
		        return EventEmitter;
		    };
		
		    // Expose the class either via AMD, CommonJS or the global object
		    if (typeof define === 'function' && define.amd) {
		        define(function () {
		            return EventEmitter;
		        });
		    }
		    else if (typeof module === 'object' && module.exports){
		        module.exports = EventEmitter;
		    }
		    else {
		        exports.EventEmitter = EventEmitter;
		    }
		}.call(this));
		
		}.call(window));

	/***/ },
	/* 183 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-slider\" :id=\"id\"\n    :class=\"{\n        min: value === 0, max: value === 100, dragging: dragging, disabled: disabled,\n        active: active, 'has-label': hasLabel\n    }\"\n\n    :tabindex=\"disabled ? null : 0\" role=\"slider\" :aria-valuemin=\"0\" :aria-valuemax=\"100\"\n    :aria-valuenow=\"value\"\n\n    @keydown.left.prevent=\"decrement\" @keydown.right.prevent=\"increment\"\n    @keydown.down.prevent=\"decrement\" @keydown.up.prevent=\"increment\"\n    @focus=\"focus\" @blur=\"blur\"\n>\n    <input type=\"hidden\" :value=\"value\" :name=\"name\">\n\n    <div class=\"ui-slider-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-slider-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-slider-content\">\n        <div class=\"ui-slider-label\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n        <div class=\"ui-slider-wrapper\" v-el:slider @mousedown=\"sliderClick\">\n            <div class=\"ui-slider-containment\" v-el:containment></div>\n\n            <div class=\"ui-slider-track\">\n                <div class=\"ui-slider-track-fill\" :style=\"{ width: value + '%'}\"></div>\n            </div>\n\n            <div class=\"ui-slider-thumb-container\" v-el:thumb>\n                <div class=\"ui-slider-focus-ring\"></div>\n                <div class=\"ui-slider-thumb\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 184 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(185)
		__vue_script__ = __webpack_require__(186)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSnackbar.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(187)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSnackbar.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 185 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 186 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiButton = __webpack_require__(109);
		
		var _UiButton2 = _interopRequireDefault(_UiButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-snackbar',
		
		    props: {
		        id: String,
		        show: {
		            type: Boolean,
		            default: false,
		            twoWay: true
		        },
		        message: String,
		        action: String,
		        actionColor: {
		            type: String,
		            default: 'accent' },
		        persistent: {
		            type: Boolean,
		            default: false
		        },
		        duration: {
		            type: Number,
		            default: 5000
		        },
		        autoHide: {
		            type: Boolean,
		            default: true
		        }
		    },
		
		    data: function data() {
		        return {
		            height: 0,
		            timeout: null
		        };
		    },
		    beforeDestroy: function beforeDestroy() {
		        if (this.timeout) {
		            clearTimeout(this.timeout);
		        }
		    },
		
		
		    methods: {
		        click: function click() {
		            this.$dispatch('clicked');
		            this.hide();
		        },
		        actionClick: function actionClick() {
		            this.$dispatch('action-clicked');
		            this.hide();
		        },
		        hide: function hide() {
		            if (!this.persistent) {
		                this.show = false;
		            }
		        }
		    },
		
		    components: {
		        UiButton: _UiButton2.default
		    },
		
		    transitions: {
		        'ui-snackbar-toggle': {
		            afterEnter: function afterEnter() {
		                this.$dispatch('shown');
		
		                if (this.autoHide) {
		                    this.timeout = setTimeout(this.hide, this.duration);
		                }
		            },
		            afterLeave: function afterLeave() {
		                this.$dispatch('hidden');
		
		                if (this.timeout) {
		                    clearTimeout(this.timeout);
		                    this.timeout = null;
		                }
		            }
		        }
		    }
		};

	/***/ },
	/* 187 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-snackbar\" :id=\"id\" transition=\"ui-snackbar-toggle\" @click=\"click\" v-show=\"show\"\n>\n    <div class=\"ui-snackbar-text\">\n        <slot>\n            <span v-text=\"message\"></span>\n        </slot>\n    </div>\n\n    <div class=\"ui-snackbar-action\">\n        <ui-button\n            class=\"ui-snackbar-action-button\" type=\"flat\" :color=\"actionColor\"\n            :text=\"action\" @click.stop=\"actionClick\" v-if=\"action\"\n        ></ui-button>\n    </div>\n</div>\n";

	/***/ },
	/* 188 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(189)
		__vue_script__ = __webpack_require__(190)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSnackbarContainer.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(191)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSnackbarContainer.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 189 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 190 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _uuid = __webpack_require__(88);
		
		var _uuid2 = _interopRequireDefault(_uuid);
		
		var _UiSnackbar = __webpack_require__(184);
		
		var _UiSnackbar2 = _interopRequireDefault(_UiSnackbar);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-snackbar-container',
		
		    props: {
		        queueSnackbars: {
		            type: Boolean,
		            default: false
		        },
		        defaultDuration: {
		            type: Number,
		            default: 5000
		        },
		        position: {
		            type: String,
		            default: 'left', coerce: function coerce(position) {
		                return 'position-' + position;
		            }
		        }
		    },
		
		    events: {
		        'ui-snackbar::create': function uiSnackbarCreate(snackbar) {
		            snackbar.show = false;
		            snackbar.id = snackbar.id || _uuid2.default.short('ui-snackbar-');
		            snackbar.duration = snackbar.duration || this.defaultDuration;
		
		            this.queue.push(snackbar);
		
		            if (this.queue.length === 1) {
		                this.showNext();
		            } else {
		                if (!this.queueSnackbars) {
		                    this.queue[0].show = false;
		                }
		            }
		        }
		    },
		
		    data: function data() {
		        return {
		            queue: [] };
		    },
		
		
		    methods: {
		        showNext: function showNext() {
		            if (!this.queue.length) {
		                return;
		            }
		
		            this.queue[0].show = true;
		        },
		        shown: function shown(snackbar) {
		            this.$dispatch('snackbar-shown', snackbar);
		            this.callHook('onShow', snackbar);
		        },
		        hidden: function hidden(snackbar) {
		            this.$dispatch('snackbar-hidden', snackbar);
		            this.callHook('onHide', snackbar);
		
		            this.queue.$remove(snackbar);
		            this.showNext();
		        },
		        clicked: function clicked(snackbar) {
		            this.callHook('onClick', snackbar);
		        },
		        actionClicked: function actionClicked(snackbar) {
		            this.callHook('onActionClick', snackbar);
		        },
		        callHook: function callHook(hook, snackbar) {
		            if (typeof snackbar[hook] === 'function') {
		                snackbar[hook].call(undefined, snackbar);
		            }
		        }
		    },
		
		    components: {
		        UiSnackbar: _UiSnackbar2.default
		    }
		};

	/***/ },
	/* 191 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-snackbar-container\" :class=\"[position]\">\n    <ui-snackbar\n        :duration=\"s.duration\" :show.sync=\"s.show\" :action=\"s.action\"\n        :action-color=\"s.actionColor\" :persistent=\"s.persistent\" :id=\"s.id\" auto-hide\n\n        @shown=\"shown(s)\" @hidden=\"hidden(s)\" @clicked=\"clicked(s)\"\n        @action-clicked=\"actionClicked(s)\"\n\n        v-for=\"s in queue\"\n    >\n        <div v-html=\"s.message\" v-if=\"s.allowHtml\"></div>\n        <span v-text=\"s.message\" v-else></span>\n    </ui-snackbar>\n</div>\n";

	/***/ },
	/* 192 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(193)
		__vue_script__ = __webpack_require__(194)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiSwitch.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(195)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiSwitch.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 193 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 194 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-switch',
		
		    props: {
		        name: String,
		        value: {
		            type: Boolean,
		            required: true,
		            twoWay: true
		        },
		        label: String,
		        hideLabel: {
		            type: Boolean,
		            default: false
		        },
		        labelLeft: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            initialValue: false
		        };
		    },
		    created: function created() {
		        this.initialValue = this.value;
		    },
		
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.value = this.initialValue;
		        }
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 195 */
	/***/ function(module, exports) {

		module.exports = "\n<label\n    class=\"ui-switch\"\n    :class=\"{ 'checked': value, 'disabled': disabled, 'label-left': labelLeft }\"\n>\n    <div class=\"ui-switch-container\">\n        <input\n            class=\"ui-switch-input\" type=\"checkbox\" :name=\"name\" :id=\"id\" v-model=\"value\"\n            v-disabled=\"disabled\"\n        >\n\n        <div class=\"ui-switch-track\"></div>\n        <div class=\"ui-switch-thumb\"></div>\n\n        <div class=\"ui-switch-focus-ring\"></div>\n    </div>\n\n    <div class=\"ui-switch-label-text\" v-if=\"!hideLabel\">\n        <slot>\n            <span v-text=\"label\"></span>\n        </slot>\n    </div>\n</label>\n";

	/***/ },
	/* 196 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(197)
		__vue_script__ = __webpack_require__(198)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiTab.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(199)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiTab.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 197 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 198 */
	/***/ function(module, exports) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.default = {
		    name: 'ui-tab',
		
		    props: {
		        id: String,
		        header: String,
		        icon: String,
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        active: function active() {
		            return this.$parent.activeTab === this.id;
		        }
		    },
		
		    watch: {
		        active: function active() {
		            if (this.active) {
		                this.$dispatch('selected', this.id);
		            } else {
		                this.$dispatch('deselected', this.id);
		            }
		        }
		    }
		};

	/***/ },
	/* 199 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-tab\" :id=\"id\" role=\"tabpanel\" :tabindex=\"active ? '0' : null\"\n    :aria-hidden=\"!active ? 'true' : null\" v-show=\"active\"\n>\n    <slot></slot>\n</div>\n";

	/***/ },
	/* 200 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(201)
		__vue_script__ = __webpack_require__(202)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiTabs.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(207)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiTabs.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 201 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 202 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _uuid = __webpack_require__(88);
		
		var _uuid2 = _interopRequireDefault(_uuid);
		
		var _UiTabHeaderItem = __webpack_require__(203);
		
		var _UiTabHeaderItem2 = _interopRequireDefault(_UiTabHeaderItem);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ReceivesTargetedEvent = __webpack_require__(61);
		
		var _ReceivesTargetedEvent2 = _interopRequireDefault(_ReceivesTargetedEvent);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-tabs',
		
		    props: {
		        type: {
		            type: String,
		            default: 'text' },
		        activeTab: String,
		        backgroundColor: {
		            type: String,
		            default: 'default', coerce: function coerce(color) {
		                return 'background-color-' + color;
		            }
		        },
		        textColor: {
		            type: String,
		            default: 'black', coerce: function coerce(color) {
		                return 'text-color-' + color;
		            }
		        },
		        textColorActive: {
		            type: String,
		            default: 'primary', coerce: function coerce(color) {
		                return 'text-color-active-' + color;
		            }
		        },
		        indicatorColor: {
		            type: String,
		            default: 'primary', coerce: function coerce(color) {
		                return 'color-' + color;
		            }
		        },
		        fullwidth: {
		            type: Boolean,
		            default: false
		        },
		        raised: {
		            type: Boolean,
		            default: false
		        },
		        hideRippleInk: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    data: function data() {
		        return {
		            activeTabElement: null
		        };
		    },
		
		
		    computed: {
		        styleClasses: function styleClasses() {
		            var classes = ['ui-tabs-type-' + this.type];
		
		            if (this.raised) {
		                classes.push('raised');
		            }
		
		            if (this.fullwidth) {
		                classes.push('fullwidth');
		            }
		
		            return classes;
		        },
		        indicatorLeft: function indicatorLeft() {
		            if (this.activeTabElement) {
		                return this.activeTabElement.offsetLeft + 'px';
		            }
		
		            return 0;
		        },
		        indicatorRight: function indicatorRight() {
		            if (this.activeTabElement) {
		                var left = this.activeTabElement.offsetLeft;
		                var width = this.activeTabElement.offsetWidth;
		                var tabContainerWidth = this.$els.tabsContainer.offsetWidth;
		
		                return tabContainerWidth - (left + width) + 'px';
		            }
		        }
		    },
		
		    ready: function ready() {
		        var _this = this;
		
		        for (var i = 0; i < this.$children.length; i++) {
		            this.$children[i].id = this.$children[i].id || _uuid2.default.short('ui-tab-');
		        }
		
		        this.activeTab = this.activeTab || this.$children[0].id;
		
		        this.$nextTick(function () {
		            if (_this.$els.tabsContainer) {
		                _this.activeTabElement = _this.$els.tabsContainer.querySelector('.active');
		            }
		        });
		    },
		
		
		    events: {
		        'ui-tabs::select': function uiTabsSelect(tabId, id) {
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            var tab = this.findTabById(tabId);
		
		            if (tab) {
		                this.select(tab.$el, tab);
		            }
		        }
		    },
		
		    methods: {
		        select: function select(e, tab) {
		            var newTabElement = e.currentTarget ? e.currentTarget : e;
		
		            if (tab.disabled || this.activeTabElement === newTabElement) {
		                return;
		            }
		
		            this.activeTabElement = newTabElement;
		            this.activeTab = tab.id;
		
		            this.$dispatch('active-tab-changed', tab.id);
		        },
		        selectPrev: function selectPrev(currentTabIndex) {
		            if (currentTabIndex === 0) {
		                return;
		            }
		
		            var prevTab = this.findTab(currentTabIndex);
		            this.select(prevTab.$el, prevTab);
		
		            this.activeTabElement.focus();
		        },
		        selectNext: function selectNext(currentTabIndex) {
		            if (currentTabIndex === this.$refs.tabElements.length - 1) {
		                return;
		            }
		
		            var nextTab = this.findTab(currentTabIndex, true);
		            this.select(nextTab.$el, nextTab);
		
		            this.activeTabElement.focus();
		        },
		        findTab: function findTab(currentTabIndex, next) {
		            var tab = void 0;
		
		            if (next) {
		                for (var i = currentTabIndex + 1; i < this.$refs.tabElements.length; i++) {
		                    if (!this.$refs.tabElements[i].disabled) {
		                        tab = this.$refs.tabElements[i];
		                        break;
		                    }
		                }
		            } else {
		                for (var _i = currentTabIndex - 1; _i >= 0; _i--) {
		                    if (!this.$refs.tabElements[_i].disabled) {
		                        tab = this.$refs.tabElements[_i];
		                        break;
		                    }
		                }
		            }
		
		            tab = tab || this.$refs.tabElements[currentTabIndex];
		
		            return tab;
		        },
		        findTabById: function findTabById(id) {
		            var tab = null;
		
		            var numOfTabs = this.$refs.tabElements.length;
		
		            for (var i = 0; i <= numOfTabs; i++) {
		                if (id === this.$refs.tabElements[i].id) {
		                    tab = this.$refs.tabElements[i];
		                    break;
		                }
		            }
		
		            return tab;
		        }
		    },
		
		    components: {
		        UiTabHeaderItem: _UiTabHeaderItem2.default
		    },
		
		    directives: {
		        disabled: _disabled2.default
		    },
		
		    mixins: [_ReceivesTargetedEvent2.default]
		};

	/***/ },
	/* 203 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(204)
		__vue_script__ = __webpack_require__(205)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiTabHeaderItem.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(206)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiTabHeaderItem.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 204 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 205 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _disabled = __webpack_require__(71);
		
		var _disabled2 = _interopRequireDefault(_disabled);
		
		var _ShowsRippleInk = __webpack_require__(19);
		
		var _ShowsRippleInk2 = _interopRequireDefault(_ShowsRippleInk);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-tab-header-item',
		
		    props: {
		        id: String,
		        type: {
		            type: String,
		            default: 'text' },
		        text: String,
		        icon: String,
		        active: {
		            type: Boolean,
		            default: false
		        },
		        disabled: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    mixins: [_ShowsRippleInk2.default],
		
		    directives: {
		        disabled: _disabled2.default
		    }
		};

	/***/ },
	/* 206 */
	/***/ function(module, exports) {

		module.exports = "\n<li\n    class=\"ui-tab-header-item\" role=\"tab\"\n    :class=\"['type-' + type, { 'active': active, 'disabled': disabled }]\"\n\n    :tabindex=\"active ? 0 : -1\" :aria-controls=\"id\" :aria-selected=\"active ? 'true' : null\"\n    v-disabled=\"disabled\" v-el:item\n>\n    <div\n        class=\"ui-tab-header-item-icon\" v-if=\"type === 'icon' || type === 'icon-and-text'\"\n    >\n        <ui-icon :icon=\"icon\"></ui-icon>\n    </div>\n\n    <div\n        class=\"ui-tab-header-item-text\" v-text=\"text\"\n        v-if=\"type === 'text' || type === 'icon-and-text'\"\n    ></div>\n\n    <ui-ripple-ink :trigger=\"$els.item\" v-if=\"!hideRippleInk && !disabled\"></ui-ripple-ink>\n</li>\n";

	/***/ },
	/* 207 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-tabs\" :class=\"styleClasses\">\n    <div class=\"ui-tabs-header\" :class=\"[backgroundColor]\">\n        <ul\n            class=\"ui-tabs-header-items\" :class=\"[textColor, textColorActive]\" role=\"tablist\"\n            v-el:tabs-container\n        >\n            <ui-tab-header-item\n                :type=\"type\" :id=\"tab.id\" :icon=\"tab.icon\" :text=\"tab.header\"\n                :active=\"activeTab === tab.id\" :disabled=\"tab.disabled\"\n                :hide-ripple-ink=\"hideRippleInk\"\n\n                @click=\"select($event, tab)\" @keydown.left=\"selectPrev(index)\"\n                @keydown.right=\"selectNext($index)\"\n\n                v-for=\"(index, tab) in $children\" v-ref:tab-elements\n            ></ui-tab-header-item>\n        </ul>\n\n        <div\n            class=\"ui-tabs-active-tab-indicator\" :class=\"[indicatorColor]\"\n            :style=\"{ 'left': indicatorLeft, 'right': indicatorRight }\"\n        ></div>\n    </div>\n\n    <div class=\"ui-tabs-body\">\n        <slot></slot>\n    </div>\n</div>\n";

	/***/ },
	/* 208 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(209)
		__vue_script__ = __webpack_require__(210)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiTextbox.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(211)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiTextbox.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 209 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 210 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiIcon = __webpack_require__(6);
		
		var _UiIcon2 = _interopRequireDefault(_UiIcon);
		
		var _autofocus = __webpack_require__(90);
		
		var _autofocus2 = _interopRequireDefault(_autofocus);
		
		var _HasTextInput = __webpack_require__(91);
		
		var _HasTextInput2 = _interopRequireDefault(_HasTextInput);
		
		var _ValidatesInput = __webpack_require__(92);
		
		var _ValidatesInput2 = _interopRequireDefault(_ValidatesInput);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-textbox',
		
		    props: {
		        type: {
		            type: String,
		            default: 'text'
		        },
		        multiLine: {
		            type: Boolean,
		            default: false
		        },
		        rows: {
		            type: Number,
		            default: 2
		        },
		        maxLength: Number,
		        trimValue: {
		            type: Boolean,
		            default: true
		        },
		        validateOnBlur: {
		            type: Boolean,
		            default: false
		        },
		        autocomplete: String,
		        autofocus: {
		            type: Boolean,
		            default: false
		        },
		        min: Number,
		        max: Number,
		        step: {
		            type: String,
		            default: 'any',
		            coerce: String
		        }
		    },
		
		    watch: {
		        value: function value() {
		            if (this.ignoreValueChange) {
		                return;
		            }
		
		            if (!this.dirty) {
		                this.dirty = true;
		            }
		
		            if (!this.validateOnBlur) {
		                this.validate();
		            }
		        }
		    },
		
		    data: function data() {
		        return {
		            ignoreValueChange: false
		        };
		    },
		
		
		    computed: {
		        showIcon: function showIcon() {
		            return Boolean(this.icon);
		        },
		        minValue: function minValue() {
		            if (this.type !== 'number') {
		                return null;
		            }
		
		            if (this.min || this.min === 0) {
		                return this.min;
		            }
		
		            return null;
		        },
		        maxValue: function maxValue() {
		            if (this.type !== 'number') {
		                return null;
		            }
		
		            if (this.max || this.max === 0) {
		                return this.max;
		            }
		
		            return null;
		        },
		        stepValue: function stepValue() {
		            if (this.type === 'number') {
		                return this.step;
		            }
		
		            return null;
		        }
		    },
		
		    events: {
		        'ui-input::reset': function uiInputReset(id) {
		            var _this = this;
		
		            if (!this.eventTargetsComponent(id)) {
		                return;
		            }
		
		            this.ignoreValueChange = true;
		
		            if (document.activeElement === this.$el.querySelector('input') || document.activeElement === this.$el.querySelector('textarea')) {
		                document.activeElement.blur();
		            }
		
		            this.validationError = '';
		            this.value = this.initialValue;
		            this.valid = true;
		            this.dirty = false;
		
		            this.$nextTick(function () {
		                _this.ignoreValueChange = false;
		            });
		        }
		    },
		
		    methods: {
		        focussed: function focussed() {
		            this.active = true;
		            this.$dispatch('focussed');
		        },
		        blurred: function blurred() {
		            this.active = false;
		
		            if (!this.dirty) {
		                this.dirty = true;
		            }
		
		            this.$dispatch('blurred');
		            this.validate();
		        },
		        changed: function changed() {
		            this.$dispatch('changed');
		        },
		        keydown: function keydown(e) {
		            this.$dispatch('keydown', e);
		        },
		        keydownEnter: function keydownEnter(e) {
		            this.$dispatch('keydown-enter', e);
		        }
		    },
		
		    filters: {
		        trim: {
		            write: function write(value) {
		                if (this.type !== 'number' && this.trimValue) {
		                    return value.trim();
		                }
		
		                return value;
		            }
		        }
		    },
		
		    components: {
		        UiIcon: _UiIcon2.default
		    },
		
		    directives: {
		        autofocus: _autofocus2.default
		    },
		
		    mixins: [_HasTextInput2.default, _ValidatesInput2.default]
		};

	/***/ },
	/* 211 */
	/***/ function(module, exports) {

		module.exports = "\n<div\n    class=\"ui-textbox\"\n    :class=\"{\n        'disabled': disabled, 'invalid': !valid, 'dirty': dirty, 'active': active,\n        'has-label': !hideLabel, 'is-multi-line': multiLine, 'icon-right': iconRight,\n        'has-counter': maxLength\n    }\"\n>\n    <div class=\"ui-textbox-icon-wrapper\" v-if=\"showIcon\">\n        <ui-icon :icon=\"icon\" class=\"ui-textbox-icon\"></ui-icon>\n    </div>\n\n    <div class=\"ui-textbox-content\">\n        <label class=\"ui-textbox-label\">\n            <div class=\"ui-textbox-label-text\" v-text=\"label\" v-if=\"!hideLabel\"></div>\n\n            <input\n                class=\"ui-textbox-input\" :type=\"type\" :placeholder=\"placeholder\" :name=\"name\"\n                :id=\"id\" :number=\"type === 'number' ? true : null\" :min=\"minValue\"\n                :max=\"maxValue\" :step=\"stepValue\"\n                :autocomplete=\"autocomplete ? autocomplete : null\"\n\n                @focus=\"focussed\" @blur=\"blurred\" @change=\"changed\" @keydown=\"keydown\"\n                @keydown.enter=\"keydownEnter\" :debounce=\"debounce\"\n\n                v-model=\"value | trim\" v-disabled=\"disabled\" v-if=\"!multiLine\"\n                v-autofocus=\"autofocus\"\n            >\n\n            <textarea\n                class=\"ui-textbox-textarea\" :placeholder=\"placeholder\" :name=\"name\" :id=\"id\"\n                :rows=\"rows\"\n\n                @focus=\"focussed\" @blur=\"blurred\" @change=\"changed\" @keydown=\"keydown\"\n                @keydown.enter=\"keydownEnter\" :debounce=\"debounce\"\n\n                v-model=\"value | trim\" v-disabled=\"disabled\" v-else\n            ></textarea>\n        </label>\n\n        <div class=\"ui-textbox-feedback\" v-if=\"showFeedback || maxLength\">\n            <div\n                class=\"ui-textbox-error-text\" transition=\"ui-textbox-feedback-toggle\"\n                v-text=\"validationError\" v-show=\"!hideValidationErrors && !valid\"\n            ></div>\n\n            <div\n                class=\"ui-textbox-help-text\" transition=\"ui-textbox-feedback-toggle\"\n                v-text=\"helpText\" v-else\n            ></div>\n\n            <div\n                class=\"ui-textbox-counter\" v-text=\"value.length + '/' + maxLength\"\n                v-if=\"maxLength\"\n            ></div>\n        </div>\n    </div>\n</div>\n";

	/***/ },
	/* 212 */
	/***/ function(module, exports, __webpack_require__) {

		var __vue_script__, __vue_template__
		__webpack_require__(213)
		__vue_script__ = __webpack_require__(214)
		if (__vue_script__ &&
		    __vue_script__.__esModule &&
		    Object.keys(__vue_script__).length > 1) {
		  console.warn("[vue-loader] src\\UiToolbar.vue: named exports in *.vue files are ignored.")}
		__vue_template__ = __webpack_require__(215)
		module.exports = __vue_script__ || {}
		if (module.exports.__esModule) module.exports = module.exports.default
		if (__vue_template__) {
		(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
		}
		if (false) {(function () {  module.hot.accept()
		  var hotAPI = require("vue-hot-reload-api")
		  hotAPI.install(require("vue"), true)
		  if (!hotAPI.compatible) return
		  var id = "C:\\code\\packages\\keen-ui\\src\\UiToolbar.vue"
		  if (!module.hot.data) {
		    hotAPI.createRecord(id, module.exports)
		  } else {
		    hotAPI.update(id, module.exports, __vue_template__)
		  }
		})()}

	/***/ },
	/* 213 */
	/***/ function(module, exports) {

		// removed by extract-text-webpack-plugin

	/***/ },
	/* 214 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';
		
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		
		var _UiProgressLinear = __webpack_require__(137);
		
		var _UiProgressLinear2 = _interopRequireDefault(_UiProgressLinear);
		
		var _UiIconButton = __webpack_require__(10);
		
		var _UiIconButton2 = _interopRequireDefault(_UiIconButton);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
		
		exports.default = {
		    name: 'ui-toolbar',
		
		    props: {
		        type: {
		            type: String,
		            default: 'default', coerce: function coerce(type) {
		                return 'ui-toolbar-' + type;
		            }
		        },
		        textColor: {
		            type: String,
		            default: 'black', coerce: function coerce(color) {
		                return 'text-color-' + color;
		            }
		        },
		        title: String,
		        brand: String,
		        showBrand: {
		            type: Boolean,
		            default: false
		        },
		        showBrandDivider: {
		            type: Boolean,
		            default: null
		        },
		        navIcon: {
		            type: String,
		            default: 'menu'
		        },
		        hideNavIcon: {
		            type: Boolean,
		            default: false
		        },
		        flat: {
		            type: Boolean,
		            default: false
		        },
		        preloaderTop: {
		            type: Boolean,
		            default: false
		        },
		        loading: {
		            type: Boolean,
		            default: false
		        }
		    },
		
		    computed: {
		        styleClasses: function styleClasses() {
		            var classes = [this.type, this.textColor];
		
		            if (!this.flat) {
		                classes.push('ui-toolbar-raised');
		            }
		
		            return classes;
		        },
		        iconColor: function iconColor() {
		            if (this.textColor === 'text-color-black') {
		                return 'black';
		            }
		
		            return 'white';
		        },
		        preloaderColor: function preloaderColor() {
		            if (this.textColor === 'text-color-black') {
		                return 'primary';
		            }
		
		            return 'white';
		        },
		        brandDividerVisible: function brandDividerVisible() {
		            if (this.showBrandDivider !== null) {
		                return this.showBrandDivider;
		            }
		
		            if (!this.showBrand) {
		                return false;
		            }
		
		            return true;
		        }
		    },
		
		    methods: {
		        navIconClick: function navIconClick() {
		            this.$dispatch('nav-icon-clicked');
		        }
		    },
		
		    components: {
		        UiProgressLinear: _UiProgressLinear2.default,
		        UiIconButton: _UiIconButton2.default
		    }
		};

	/***/ },
	/* 215 */
	/***/ function(module, exports) {

		module.exports = "\n<div class=\"ui-toolbar\" :class=\"styleClasses\">\n    <div class=\"ui-toolbar-left\">\n        <ui-icon-button\n            class=\"ui-toolbar-nav-icon\" type=\"clear\" :color=\"iconColor\" :icon=\"navIcon\"\n            @click=\"navIconClick\" v-if=\"!hideNavIcon\"\n        ></ui-icon-button>\n\n        <div class=\"ui-toolbar-brand\" v-if=\"showBrand\">\n            <slot name=\"brand\">\n                <div class=\"ui-toolbar-brand-text\" v-text=\"brand\"></div>\n            </slot>\n        </div>\n    </div>\n\n    <div class=\"ui-toolbar-center\">\n        <div class=\"ui-toolbar-divider\" v-if=\"brandDividerVisible\"></div>\n\n        <slot>\n            <div class=\"ui-toolbar-title\" v-text=\"title\"></div>\n        </slot>\n    </div>\n\n    <div class=\"ui-toolbar-right\">\n        <slot name=\"actions\"></slot>\n    </div>\n\n    <ui-progress-linear\n        :show=\"loading\" class=\"ui-toolbar-preloader\" :class=\"{ 'position-top' : preloaderTop }\"\n        :color=\"preloaderColor\"\n    ></ui-progress-linear>\n</div>\n";

	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=keen-ui.js.map

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * vue-router v0.7.13
	 * (c) 2016 Evan You
	 * Released under the MIT License.
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  global.VueRouter = factory();
	}(this, function () { 'use strict';

	  var babelHelpers = {};

	  babelHelpers.classCallCheck = function (instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  };
	  function Target(path, matcher, delegate) {
	    this.path = path;
	    this.matcher = matcher;
	    this.delegate = delegate;
	  }

	  Target.prototype = {
	    to: function to(target, callback) {
	      var delegate = this.delegate;

	      if (delegate && delegate.willAddRoute) {
	        target = delegate.willAddRoute(this.matcher.target, target);
	      }

	      this.matcher.add(this.path, target);

	      if (callback) {
	        if (callback.length === 0) {
	          throw new Error("You must have an argument in the function passed to `to`");
	        }
	        this.matcher.addChild(this.path, target, callback, this.delegate);
	      }
	      return this;
	    }
	  };

	  function Matcher(target) {
	    this.routes = {};
	    this.children = {};
	    this.target = target;
	  }

	  Matcher.prototype = {
	    add: function add(path, handler) {
	      this.routes[path] = handler;
	    },

	    addChild: function addChild(path, target, callback, delegate) {
	      var matcher = new Matcher(target);
	      this.children[path] = matcher;

	      var match = generateMatch(path, matcher, delegate);

	      if (delegate && delegate.contextEntered) {
	        delegate.contextEntered(target, match);
	      }

	      callback(match);
	    }
	  };

	  function generateMatch(startingPath, matcher, delegate) {
	    return function (path, nestedCallback) {
	      var fullPath = startingPath + path;

	      if (nestedCallback) {
	        nestedCallback(generateMatch(fullPath, matcher, delegate));
	      } else {
	        return new Target(startingPath + path, matcher, delegate);
	      }
	    };
	  }

	  function addRoute(routeArray, path, handler) {
	    var len = 0;
	    for (var i = 0, l = routeArray.length; i < l; i++) {
	      len += routeArray[i].path.length;
	    }

	    path = path.substr(len);
	    var route = { path: path, handler: handler };
	    routeArray.push(route);
	  }

	  function eachRoute(baseRoute, matcher, callback, binding) {
	    var routes = matcher.routes;

	    for (var path in routes) {
	      if (routes.hasOwnProperty(path)) {
	        var routeArray = baseRoute.slice();
	        addRoute(routeArray, path, routes[path]);

	        if (matcher.children[path]) {
	          eachRoute(routeArray, matcher.children[path], callback, binding);
	        } else {
	          callback.call(binding, routeArray);
	        }
	      }
	    }
	  }

	  function map (callback, addRouteCallback) {
	    var matcher = new Matcher();

	    callback(generateMatch("", matcher, this.delegate));

	    eachRoute([], matcher, function (route) {
	      if (addRouteCallback) {
	        addRouteCallback(this, route);
	      } else {
	        this.add(route);
	      }
	    }, this);
	  }

	  var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

	  var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

	  var noWarning = false;
	  function warn(msg) {
	    if (!noWarning && typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  function tryDecode(uri, asComponent) {
	    try {
	      return asComponent ? decodeURIComponent(uri) : decodeURI(uri);
	    } catch (e) {
	      warn('malformed URI' + (asComponent ? ' component: ' : ': ') + uri);
	    }
	  }

	  function isArray(test) {
	    return Object.prototype.toString.call(test) === "[object Array]";
	  }

	  // A Segment represents a segment in the original route description.
	  // Each Segment type provides an `eachChar` and `regex` method.
	  //
	  // The `eachChar` method invokes the callback with one or more character
	  // specifications. A character specification consumes one or more input
	  // characters.
	  //
	  // The `regex` method returns a regex fragment for the segment. If the
	  // segment is a dynamic of star segment, the regex fragment also includes
	  // a capture.
	  //
	  // A character specification contains:
	  //
	  // * `validChars`: a String with a list of all valid characters, or
	  // * `invalidChars`: a String with a list of all invalid characters
	  // * `repeat`: true if the character specification can repeat

	  function StaticSegment(string) {
	    this.string = string;
	  }
	  StaticSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      var string = this.string,
	          ch;

	      for (var i = 0, l = string.length; i < l; i++) {
	        ch = string.charAt(i);
	        callback({ validChars: ch });
	      }
	    },

	    regex: function regex() {
	      return this.string.replace(escapeRegex, '\\$1');
	    },

	    generate: function generate() {
	      return this.string;
	    }
	  };

	  function DynamicSegment(name) {
	    this.name = name;
	  }
	  DynamicSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "/", repeat: true });
	    },

	    regex: function regex() {
	      return "([^/]+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function StarSegment(name) {
	    this.name = name;
	  }
	  StarSegment.prototype = {
	    eachChar: function eachChar(callback) {
	      callback({ invalidChars: "", repeat: true });
	    },

	    regex: function regex() {
	      return "(.+)";
	    },

	    generate: function generate(params) {
	      var val = params[this.name];
	      return val == null ? ":" + this.name : val;
	    }
	  };

	  function EpsilonSegment() {}
	  EpsilonSegment.prototype = {
	    eachChar: function eachChar() {},
	    regex: function regex() {
	      return "";
	    },
	    generate: function generate() {
	      return "";
	    }
	  };

	  function parse(route, names, specificity) {
	    // normalize route as not starting with a "/". Recognition will
	    // also normalize.
	    if (route.charAt(0) === "/") {
	      route = route.substr(1);
	    }

	    var segments = route.split("/"),
	        results = [];

	    // A routes has specificity determined by the order that its different segments
	    // appear in. This system mirrors how the magnitude of numbers written as strings
	    // works.
	    // Consider a number written as: "abc". An example would be "200". Any other number written
	    // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
	    // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
	    // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
	    // leading symbol, "1".
	    // The rule is that symbols to the left carry more weight than symbols to the right
	    // when a number is written out as a string. In the above strings, the leading digit
	    // represents how many 100's are in the number, and it carries more weight than the middle
	    // number which represents how many 10's are in the number.
	    // This system of number magnitude works well for route specificity, too. A route written as
	    // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
	    // `x`, irrespective of the other parts.
	    // Because of this similarity, we assign each type of segment a number value written as a
	    // string. We can find the specificity of compound routes by concatenating these strings
	    // together, from left to right. After we have looped through all of the segments,
	    // we convert the string to a number.
	    specificity.val = '';

	    for (var i = 0, l = segments.length; i < l; i++) {
	      var segment = segments[i],
	          match;

	      if (match = segment.match(/^:([^\/]+)$/)) {
	        results.push(new DynamicSegment(match[1]));
	        names.push(match[1]);
	        specificity.val += '3';
	      } else if (match = segment.match(/^\*([^\/]+)$/)) {
	        results.push(new StarSegment(match[1]));
	        specificity.val += '2';
	        names.push(match[1]);
	      } else if (segment === "") {
	        results.push(new EpsilonSegment());
	        specificity.val += '1';
	      } else {
	        results.push(new StaticSegment(segment));
	        specificity.val += '4';
	      }
	    }

	    specificity.val = +specificity.val;

	    return results;
	  }

	  // A State has a character specification and (`charSpec`) and a list of possible
	  // subsequent states (`nextStates`).
	  //
	  // If a State is an accepting state, it will also have several additional
	  // properties:
	  //
	  // * `regex`: A regular expression that is used to extract parameters from paths
	  //   that reached this accepting state.
	  // * `handlers`: Information on how to convert the list of captures into calls
	  //   to registered handlers with the specified parameters
	  // * `types`: How many static, dynamic or star segments in this route. Used to
	  //   decide which route to use if multiple registered routes match a path.
	  //
	  // Currently, State is implemented naively by looping over `nextStates` and
	  // comparing a character specification against a character. A more efficient
	  // implementation would use a hash of keys pointing at one or more next states.

	  function State(charSpec) {
	    this.charSpec = charSpec;
	    this.nextStates = [];
	  }

	  State.prototype = {
	    get: function get(charSpec) {
	      var nextStates = this.nextStates;

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        var child = nextStates[i];

	        var isEqual = child.charSpec.validChars === charSpec.validChars;
	        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

	        if (isEqual) {
	          return child;
	        }
	      }
	    },

	    put: function put(charSpec) {
	      var state;

	      // If the character specification already exists in a child of the current
	      // state, just return that state.
	      if (state = this.get(charSpec)) {
	        return state;
	      }

	      // Make a new state for the character spec
	      state = new State(charSpec);

	      // Insert the new state as a child of the current state
	      this.nextStates.push(state);

	      // If this character specification repeats, insert the new state as a child
	      // of itself. Note that this will not trigger an infinite loop because each
	      // transition during recognition consumes a character.
	      if (charSpec.repeat) {
	        state.nextStates.push(state);
	      }

	      // Return the new state
	      return state;
	    },

	    // Find a list of child states matching the next character
	    match: function match(ch) {
	      // DEBUG "Processing `" + ch + "`:"
	      var nextStates = this.nextStates,
	          child,
	          charSpec,
	          chars;

	      // DEBUG "  " + debugState(this)
	      var returned = [];

	      for (var i = 0, l = nextStates.length; i < l; i++) {
	        child = nextStates[i];

	        charSpec = child.charSpec;

	        if (typeof (chars = charSpec.validChars) !== 'undefined') {
	          if (chars.indexOf(ch) !== -1) {
	            returned.push(child);
	          }
	        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
	          if (chars.indexOf(ch) === -1) {
	            returned.push(child);
	          }
	        }
	      }

	      return returned;
	    }

	    /** IF DEBUG
	    , debug: function() {
	      var charSpec = this.charSpec,
	          debug = "[",
	          chars = charSpec.validChars || charSpec.invalidChars;
	       if (charSpec.invalidChars) { debug += "^"; }
	      debug += chars;
	      debug += "]";
	       if (charSpec.repeat) { debug += "+"; }
	       return debug;
	    }
	    END IF **/
	  };

	  /** IF DEBUG
	  function debug(log) {
	    console.log(log);
	  }

	  function debugState(state) {
	    return state.nextStates.map(function(n) {
	      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
	      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
	    }).join(", ")
	  }
	  END IF **/

	  // Sort the routes by specificity
	  function sortSolutions(states) {
	    return states.sort(function (a, b) {
	      return b.specificity.val - a.specificity.val;
	    });
	  }

	  function recognizeChar(states, ch) {
	    var nextStates = [];

	    for (var i = 0, l = states.length; i < l; i++) {
	      var state = states[i];

	      nextStates = nextStates.concat(state.match(ch));
	    }

	    return nextStates;
	  }

	  var oCreate = Object.create || function (proto) {
	    function F() {}
	    F.prototype = proto;
	    return new F();
	  };

	  function RecognizeResults(queryParams) {
	    this.queryParams = queryParams || {};
	  }
	  RecognizeResults.prototype = oCreate({
	    splice: Array.prototype.splice,
	    slice: Array.prototype.slice,
	    push: Array.prototype.push,
	    length: 0,
	    queryParams: null
	  });

	  function findHandler(state, path, queryParams) {
	    var handlers = state.handlers,
	        regex = state.regex;
	    var captures = path.match(regex),
	        currentCapture = 1;
	    var result = new RecognizeResults(queryParams);

	    for (var i = 0, l = handlers.length; i < l; i++) {
	      var handler = handlers[i],
	          names = handler.names,
	          params = {};

	      for (var j = 0, m = names.length; j < m; j++) {
	        params[names[j]] = captures[currentCapture++];
	      }

	      result.push({ handler: handler.handler, params: params, isDynamic: !!names.length });
	    }

	    return result;
	  }

	  function addSegment(currentState, segment) {
	    segment.eachChar(function (ch) {
	      var state;

	      currentState = currentState.put(ch);
	    });

	    return currentState;
	  }

	  function decodeQueryParamPart(part) {
	    // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
	    part = part.replace(/\+/gm, '%20');
	    return tryDecode(part, true);
	  }

	  // The main interface

	  var RouteRecognizer = function RouteRecognizer() {
	    this.rootState = new State();
	    this.names = {};
	  };

	  RouteRecognizer.prototype = {
	    add: function add(routes, options) {
	      var currentState = this.rootState,
	          regex = "^",
	          specificity = {},
	          handlers = [],
	          allSegments = [],
	          name;

	      var isEmpty = true;

	      for (var i = 0, l = routes.length; i < l; i++) {
	        var route = routes[i],
	            names = [];

	        var segments = parse(route.path, names, specificity);

	        allSegments = allSegments.concat(segments);

	        for (var j = 0, m = segments.length; j < m; j++) {
	          var segment = segments[j];

	          if (segment instanceof EpsilonSegment) {
	            continue;
	          }

	          isEmpty = false;

	          // Add a "/" for the new segment
	          currentState = currentState.put({ validChars: "/" });
	          regex += "/";

	          // Add a representation of the segment to the NFA and regex
	          currentState = addSegment(currentState, segment);
	          regex += segment.regex();
	        }

	        var handler = { handler: route.handler, names: names };
	        handlers.push(handler);
	      }

	      if (isEmpty) {
	        currentState = currentState.put({ validChars: "/" });
	        regex += "/";
	      }

	      currentState.handlers = handlers;
	      currentState.regex = new RegExp(regex + "$");
	      currentState.specificity = specificity;

	      if (name = options && options.as) {
	        this.names[name] = {
	          segments: allSegments,
	          handlers: handlers
	        };
	      }
	    },

	    handlersFor: function handlersFor(name) {
	      var route = this.names[name],
	          result = [];
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      for (var i = 0, l = route.handlers.length; i < l; i++) {
	        result.push(route.handlers[i]);
	      }

	      return result;
	    },

	    hasRoute: function hasRoute(name) {
	      return !!this.names[name];
	    },

	    generate: function generate(name, params) {
	      var route = this.names[name],
	          output = "";
	      if (!route) {
	        throw new Error("There is no route named " + name);
	      }

	      var segments = route.segments;

	      for (var i = 0, l = segments.length; i < l; i++) {
	        var segment = segments[i];

	        if (segment instanceof EpsilonSegment) {
	          continue;
	        }

	        output += "/";
	        output += segment.generate(params);
	      }

	      if (output.charAt(0) !== '/') {
	        output = '/' + output;
	      }

	      if (params && params.queryParams) {
	        output += this.generateQueryString(params.queryParams);
	      }

	      return output;
	    },

	    generateQueryString: function generateQueryString(params) {
	      var pairs = [];
	      var keys = [];
	      for (var key in params) {
	        if (params.hasOwnProperty(key)) {
	          keys.push(key);
	        }
	      }
	      keys.sort();
	      for (var i = 0, len = keys.length; i < len; i++) {
	        key = keys[i];
	        var value = params[key];
	        if (value == null) {
	          continue;
	        }
	        var pair = encodeURIComponent(key);
	        if (isArray(value)) {
	          for (var j = 0, l = value.length; j < l; j++) {
	            var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
	            pairs.push(arrayPair);
	          }
	        } else {
	          pair += "=" + encodeURIComponent(value);
	          pairs.push(pair);
	        }
	      }

	      if (pairs.length === 0) {
	        return '';
	      }

	      return "?" + pairs.join("&");
	    },

	    parseQueryString: function parseQueryString(queryString) {
	      var pairs = queryString.split("&"),
	          queryParams = {};
	      for (var i = 0; i < pairs.length; i++) {
	        var pair = pairs[i].split('='),
	            key = decodeQueryParamPart(pair[0]),
	            keyLength = key.length,
	            isArray = false,
	            value;
	        if (pair.length === 1) {
	          value = 'true';
	        } else {
	          //Handle arrays
	          if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
	            isArray = true;
	            key = key.slice(0, keyLength - 2);
	            if (!queryParams[key]) {
	              queryParams[key] = [];
	            }
	          }
	          value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
	        }
	        if (isArray) {
	          queryParams[key].push(value);
	        } else {
	          queryParams[key] = value;
	        }
	      }
	      return queryParams;
	    },

	    recognize: function recognize(path, silent) {
	      noWarning = silent;
	      var states = [this.rootState],
	          pathLen,
	          i,
	          l,
	          queryStart,
	          queryParams = {},
	          isSlashDropped = false;

	      queryStart = path.indexOf('?');
	      if (queryStart !== -1) {
	        var queryString = path.substr(queryStart + 1, path.length);
	        path = path.substr(0, queryStart);
	        if (queryString) {
	          queryParams = this.parseQueryString(queryString);
	        }
	      }

	      path = tryDecode(path);
	      if (!path) return;

	      // DEBUG GROUP path

	      if (path.charAt(0) !== "/") {
	        path = "/" + path;
	      }

	      pathLen = path.length;
	      if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
	        path = path.substr(0, pathLen - 1);
	        isSlashDropped = true;
	      }

	      for (i = 0, l = path.length; i < l; i++) {
	        states = recognizeChar(states, path.charAt(i));
	        if (!states.length) {
	          break;
	        }
	      }

	      // END DEBUG GROUP

	      var solutions = [];
	      for (i = 0, l = states.length; i < l; i++) {
	        if (states[i].handlers) {
	          solutions.push(states[i]);
	        }
	      }

	      states = sortSolutions(solutions);

	      var state = solutions[0];

	      if (state && state.handlers) {
	        // if a trailing slash was dropped and a star segment is the last segment
	        // specified, put the trailing slash back
	        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
	          path = path + "/";
	        }
	        return findHandler(state, path, queryParams);
	      }
	    }
	  };

	  RouteRecognizer.prototype.map = map;

	  var genQuery = RouteRecognizer.prototype.generateQueryString;

	  // export default for holding the Vue reference
	  var exports$1 = {};
	  /**
	   * Warn stuff.
	   *
	   * @param {String} msg
	   */

	  function warn$1(msg) {
	    /* istanbul ignore next */
	    if (typeof console !== 'undefined') {
	      console.error('[vue-router] ' + msg);
	    }
	  }

	  /**
	   * Resolve a relative path.
	   *
	   * @param {String} base
	   * @param {String} relative
	   * @param {Boolean} append
	   * @return {String}
	   */

	  function resolvePath(base, relative, append) {
	    var query = base.match(/(\?.*)$/);
	    if (query) {
	      query = query[1];
	      base = base.slice(0, -query.length);
	    }
	    // a query!
	    if (relative.charAt(0) === '?') {
	      return base + relative;
	    }
	    var stack = base.split('/');
	    // remove trailing segment if:
	    // - not appending
	    // - appending to trailing slash (last segment is empty)
	    if (!append || !stack[stack.length - 1]) {
	      stack.pop();
	    }
	    // resolve relative path
	    var segments = relative.replace(/^\//, '').split('/');
	    for (var i = 0; i < segments.length; i++) {
	      var segment = segments[i];
	      if (segment === '.') {
	        continue;
	      } else if (segment === '..') {
	        stack.pop();
	      } else {
	        stack.push(segment);
	      }
	    }
	    // ensure leading slash
	    if (stack[0] !== '') {
	      stack.unshift('');
	    }
	    return stack.join('/');
	  }

	  /**
	   * Forgiving check for a promise
	   *
	   * @param {Object} p
	   * @return {Boolean}
	   */

	  function isPromise(p) {
	    return p && typeof p.then === 'function';
	  }

	  /**
	   * Retrive a route config field from a component instance
	   * OR a component contructor.
	   *
	   * @param {Function|Vue} component
	   * @param {String} name
	   * @return {*}
	   */

	  function getRouteConfig(component, name) {
	    var options = component && (component.$options || component.options);
	    return options && options.route && options.route[name];
	  }

	  /**
	   * Resolve an async component factory. Have to do a dirty
	   * mock here because of Vue core's internal API depends on
	   * an ID check.
	   *
	   * @param {Object} handler
	   * @param {Function} cb
	   */

	  var resolver = undefined;

	  function resolveAsyncComponent(handler, cb) {
	    if (!resolver) {
	      resolver = {
	        resolve: exports$1.Vue.prototype._resolveComponent,
	        $options: {
	          components: {
	            _: handler.component
	          }
	        }
	      };
	    } else {
	      resolver.$options.components._ = handler.component;
	    }
	    resolver.resolve('_', function (Component) {
	      handler.component = Component;
	      cb(Component);
	    });
	  }

	  /**
	   * Map the dynamic segments in a path to params.
	   *
	   * @param {String} path
	   * @param {Object} params
	   * @param {Object} query
	   */

	  function mapParams(path, params, query) {
	    if (params === undefined) params = {};

	    path = path.replace(/:([^\/]+)/g, function (_, key) {
	      var val = params[key];
	      /* istanbul ignore if */
	      if (!val) {
	        warn$1('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
	      }
	      return val || '';
	    });
	    if (query) {
	      path += genQuery(query);
	    }
	    return path;
	  }

	  var hashRE = /#.*$/;

	  var HTML5History = (function () {
	    function HTML5History(_ref) {
	      var root = _ref.root;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HTML5History);

	      if (root && root !== '/') {
	        // make sure there's the starting slash
	        if (root.charAt(0) !== '/') {
	          root = '/' + root;
	        }
	        // remove trailing slash
	        this.root = root.replace(/\/$/, '');
	        this.rootRE = new RegExp('^\\' + this.root);
	      } else {
	        this.root = null;
	      }
	      this.onChange = onChange;
	      // check base tag
	      var baseEl = document.querySelector('base');
	      this.base = baseEl && baseEl.getAttribute('href');
	    }

	    HTML5History.prototype.start = function start() {
	      var _this = this;

	      this.listener = function (e) {
	        var url = location.pathname + location.search;
	        if (_this.root) {
	          url = url.replace(_this.rootRE, '');
	        }
	        _this.onChange(url, e && e.state, location.hash);
	      };
	      window.addEventListener('popstate', this.listener);
	      this.listener();
	    };

	    HTML5History.prototype.stop = function stop() {
	      window.removeEventListener('popstate', this.listener);
	    };

	    HTML5History.prototype.go = function go(path, replace, append) {
	      var url = this.formatPath(path, append);
	      if (replace) {
	        history.replaceState({}, '', url);
	      } else {
	        // record scroll position by replacing current state
	        history.replaceState({
	          pos: {
	            x: window.pageXOffset,
	            y: window.pageYOffset
	          }
	        }, '', location.href);
	        // then push new state
	        history.pushState({}, '', url);
	      }
	      var hashMatch = path.match(hashRE);
	      var hash = hashMatch && hashMatch[0];
	      path = url
	      // strip hash so it doesn't mess up params
	      .replace(hashRE, '')
	      // remove root before matching
	      .replace(this.rootRE, '');
	      this.onChange(path, null, hash);
	    };

	    HTML5History.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/'
	      // absolute path
	      ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
	    };

	    return HTML5History;
	  })();

	  var HashHistory = (function () {
	    function HashHistory(_ref) {
	      var hashbang = _ref.hashbang;
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, HashHistory);

	      this.hashbang = hashbang;
	      this.onChange = onChange;
	    }

	    HashHistory.prototype.start = function start() {
	      var self = this;
	      this.listener = function () {
	        var path = location.hash;
	        var raw = path.replace(/^#!?/, '');
	        // always
	        if (raw.charAt(0) !== '/') {
	          raw = '/' + raw;
	        }
	        var formattedPath = self.formatPath(raw);
	        if (formattedPath !== path) {
	          location.replace(formattedPath);
	          return;
	        }
	        // determine query
	        // note it's possible to have queries in both the actual URL
	        // and the hash fragment itself.
	        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
	        self.onChange(path.replace(/^#!?/, '') + query);
	      };
	      window.addEventListener('hashchange', this.listener);
	      this.listener();
	    };

	    HashHistory.prototype.stop = function stop() {
	      window.removeEventListener('hashchange', this.listener);
	    };

	    HashHistory.prototype.go = function go(path, replace, append) {
	      path = this.formatPath(path, append);
	      if (replace) {
	        location.replace(path);
	      } else {
	        location.hash = path;
	      }
	    };

	    HashHistory.prototype.formatPath = function formatPath(path, append) {
	      var isAbsoloute = path.charAt(0) === '/';
	      var prefix = '#' + (this.hashbang ? '!' : '');
	      return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
	    };

	    return HashHistory;
	  })();

	  var AbstractHistory = (function () {
	    function AbstractHistory(_ref) {
	      var onChange = _ref.onChange;
	      babelHelpers.classCallCheck(this, AbstractHistory);

	      this.onChange = onChange;
	      this.currentPath = '/';
	    }

	    AbstractHistory.prototype.start = function start() {
	      this.onChange('/');
	    };

	    AbstractHistory.prototype.stop = function stop() {
	      // noop
	    };

	    AbstractHistory.prototype.go = function go(path, replace, append) {
	      path = this.currentPath = this.formatPath(path, append);
	      this.onChange(path);
	    };

	    AbstractHistory.prototype.formatPath = function formatPath(path, append) {
	      return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
	    };

	    return AbstractHistory;
	  })();

	  /**
	   * Determine the reusability of an existing router view.
	   *
	   * @param {Directive} view
	   * @param {Object} handler
	   * @param {Transition} transition
	   */

	  function canReuse(view, handler, transition) {
	    var component = view.childVM;
	    if (!component || !handler) {
	      return false;
	    }
	    // important: check view.Component here because it may
	    // have been changed in activate hook
	    if (view.Component !== handler.component) {
	      return false;
	    }
	    var canReuseFn = getRouteConfig(component, 'canReuse');
	    return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
	      to: transition.to,
	      from: transition.from
	    }) : true; // defaults to true
	  }

	  /**
	   * Check if a component can deactivate.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canDeactivate(view, transition, next) {
	    var fromComponent = view.childVM;
	    var hook = getRouteConfig(fromComponent, 'canDeactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHook(hook, fromComponent, next, {
	        expectBoolean: true
	      });
	    }
	  }

	  /**
	   * Check if a component can activate.
	   *
	   * @param {Object} handler
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function canActivate(handler, transition, next) {
	    resolveAsyncComponent(handler, function (Component) {
	      // have to check due to async-ness
	      if (transition.aborted) {
	        return;
	      }
	      // determine if this component can be activated
	      var hook = getRouteConfig(Component, 'canActivate');
	      if (!hook) {
	        next();
	      } else {
	        transition.callHook(hook, null, next, {
	          expectBoolean: true
	        });
	      }
	    });
	  }

	  /**
	   * Call deactivate hooks for existing router-views.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Function} next
	   */

	  function deactivate(view, transition, next) {
	    var component = view.childVM;
	    var hook = getRouteConfig(component, 'deactivate');
	    if (!hook) {
	      next();
	    } else {
	      transition.callHooks(hook, component, next);
	    }
	  }

	  /**
	   * Activate / switch component for a router-view.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   * @param {Number} depth
	   * @param {Function} [cb]
	   */

	  function activate(view, transition, depth, cb, reuse) {
	    var handler = transition.activateQueue[depth];
	    if (!handler) {
	      saveChildView(view);
	      if (view._bound) {
	        view.setComponent(null);
	      }
	      cb && cb();
	      return;
	    }

	    var Component = view.Component = handler.component;
	    var activateHook = getRouteConfig(Component, 'activate');
	    var dataHook = getRouteConfig(Component, 'data');
	    var waitForData = getRouteConfig(Component, 'waitForData');

	    view.depth = depth;
	    view.activated = false;

	    var component = undefined;
	    var loading = !!(dataHook && !waitForData);

	    // "reuse" is a flag passed down when the parent view is
	    // either reused via keep-alive or as a child of a kept-alive view.
	    // of course we can only reuse if the current kept-alive instance
	    // is of the correct type.
	    reuse = reuse && view.childVM && view.childVM.constructor === Component;

	    if (reuse) {
	      // just reuse
	      component = view.childVM;
	      component.$loadingRouteData = loading;
	    } else {
	      saveChildView(view);

	      // unbuild current component. this step also destroys
	      // and removes all nested child views.
	      view.unbuild(true);

	      // build the new component. this will also create the
	      // direct child view of the current one. it will register
	      // itself as view.childView.
	      component = view.build({
	        _meta: {
	          $loadingRouteData: loading
	        },
	        created: function created() {
	          this._routerView = view;
	        }
	      });

	      // handle keep-alive.
	      // when a kept-alive child vm is restored, we need to
	      // add its cached child views into the router's view list,
	      // and also properly update current view's child view.
	      if (view.keepAlive) {
	        component.$loadingRouteData = loading;
	        var cachedChildView = component._keepAliveRouterView;
	        if (cachedChildView) {
	          view.childView = cachedChildView;
	          component._keepAliveRouterView = null;
	        }
	      }
	    }

	    // cleanup the component in case the transition is aborted
	    // before the component is ever inserted.
	    var cleanup = function cleanup() {
	      component.$destroy();
	    };

	    // actually insert the component and trigger transition
	    var insert = function insert() {
	      if (reuse) {
	        cb && cb();
	        return;
	      }
	      var router = transition.router;
	      if (router._rendered || router._transitionOnLoad) {
	        view.transition(component);
	      } else {
	        // no transition on first render, manual transition
	        /* istanbul ignore if */
	        if (view.setCurrent) {
	          // 0.12 compat
	          view.setCurrent(component);
	        } else {
	          // 1.0
	          view.childVM = component;
	        }
	        component.$before(view.anchor, null, false);
	      }
	      cb && cb();
	    };

	    var afterData = function afterData() {
	      // activate the child view
	      if (view.childView) {
	        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
	      }
	      insert();
	    };

	    // called after activation hook is resolved
	    var afterActivate = function afterActivate() {
	      view.activated = true;
	      if (dataHook && waitForData) {
	        // wait until data loaded to insert
	        loadData(component, transition, dataHook, afterData, cleanup);
	      } else {
	        // load data and insert at the same time
	        if (dataHook) {
	          loadData(component, transition, dataHook);
	        }
	        afterData();
	      }
	    };

	    if (activateHook) {
	      transition.callHooks(activateHook, component, afterActivate, {
	        cleanup: cleanup,
	        postActivate: true
	      });
	    } else {
	      afterActivate();
	    }
	  }

	  /**
	   * Reuse a view, just reload data if necessary.
	   *
	   * @param {Directive} view
	   * @param {Transition} transition
	   */

	  function reuse(view, transition) {
	    var component = view.childVM;
	    var dataHook = getRouteConfig(component, 'data');
	    if (dataHook) {
	      loadData(component, transition, dataHook);
	    }
	  }

	  /**
	   * Asynchronously load and apply data to component.
	   *
	   * @param {Vue} component
	   * @param {Transition} transition
	   * @param {Function} hook
	   * @param {Function} cb
	   * @param {Function} cleanup
	   */

	  function loadData(component, transition, hook, cb, cleanup) {
	    component.$loadingRouteData = true;
	    transition.callHooks(hook, component, function () {
	      component.$loadingRouteData = false;
	      component.$emit('route-data-loaded', component);
	      cb && cb();
	    }, {
	      cleanup: cleanup,
	      postActivate: true,
	      processData: function processData(data) {
	        // handle promise sugar syntax
	        var promises = [];
	        if (isPlainObject(data)) {
	          Object.keys(data).forEach(function (key) {
	            var val = data[key];
	            if (isPromise(val)) {
	              promises.push(val.then(function (resolvedVal) {
	                component.$set(key, resolvedVal);
	              }));
	            } else {
	              component.$set(key, val);
	            }
	          });
	        }
	        if (promises.length) {
	          return promises[0].constructor.all(promises);
	        }
	      }
	    });
	  }

	  /**
	   * Save the child view for a kept-alive view so that
	   * we can restore it when it is switched back to.
	   *
	   * @param {Directive} view
	   */

	  function saveChildView(view) {
	    if (view.keepAlive && view.childVM && view.childView) {
	      view.childVM._keepAliveRouterView = view.childView;
	    }
	    view.childView = null;
	  }

	  /**
	   * Check plain object.
	   *
	   * @param {*} val
	   */

	  function isPlainObject(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  /**
	   * A RouteTransition object manages the pipeline of a
	   * router-view switching process. This is also the object
	   * passed into user route hooks.
	   *
	   * @param {Router} router
	   * @param {Route} to
	   * @param {Route} from
	   */

	  var RouteTransition = (function () {
	    function RouteTransition(router, to, from) {
	      babelHelpers.classCallCheck(this, RouteTransition);

	      this.router = router;
	      this.to = to;
	      this.from = from;
	      this.next = null;
	      this.aborted = false;
	      this.done = false;
	    }

	    /**
	     * Abort current transition and return to previous location.
	     */

	    RouteTransition.prototype.abort = function abort() {
	      if (!this.aborted) {
	        this.aborted = true;
	        // if the root path throws an error during validation
	        // on initial load, it gets caught in an infinite loop.
	        var abortingOnLoad = !this.from.path && this.to.path === '/';
	        if (!abortingOnLoad) {
	          this.router.replace(this.from.path || '/');
	        }
	      }
	    };

	    /**
	     * Abort current transition and redirect to a new location.
	     *
	     * @param {String} path
	     */

	    RouteTransition.prototype.redirect = function redirect(path) {
	      if (!this.aborted) {
	        this.aborted = true;
	        if (typeof path === 'string') {
	          path = mapParams(path, this.to.params, this.to.query);
	        } else {
	          path.params = path.params || this.to.params;
	          path.query = path.query || this.to.query;
	        }
	        this.router.replace(path);
	      }
	    };

	    /**
	     * A router view transition's pipeline can be described as
	     * follows, assuming we are transitioning from an existing
	     * <router-view> chain [Component A, Component B] to a new
	     * chain [Component A, Component C]:
	     *
	     *  A    A
	     *  | => |
	     *  B    C
	     *
	     * 1. Reusablity phase:
	     *   -> canReuse(A, A)
	     *   -> canReuse(B, C)
	     *   -> determine new queues:
	     *      - deactivation: [B]
	     *      - activation: [C]
	     *
	     * 2. Validation phase:
	     *   -> canDeactivate(B)
	     *   -> canActivate(C)
	     *
	     * 3. Activation phase:
	     *   -> deactivate(B)
	     *   -> activate(C)
	     *
	     * Each of these steps can be asynchronous, and any
	     * step can potentially abort the transition.
	     *
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.start = function start(cb) {
	      var transition = this;

	      // determine the queue of views to deactivate
	      var deactivateQueue = [];
	      var view = this.router._rootView;
	      while (view) {
	        deactivateQueue.unshift(view);
	        view = view.childView;
	      }
	      var reverseDeactivateQueue = deactivateQueue.slice().reverse();

	      // determine the queue of route handlers to activate
	      var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
	        return match.handler;
	      });

	      // 1. Reusability phase
	      var i = undefined,
	          reuseQueue = undefined;
	      for (i = 0; i < reverseDeactivateQueue.length; i++) {
	        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
	          break;
	        }
	      }
	      if (i > 0) {
	        reuseQueue = reverseDeactivateQueue.slice(0, i);
	        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
	        activateQueue = activateQueue.slice(i);
	      }

	      // 2. Validation phase
	      transition.runQueue(deactivateQueue, canDeactivate, function () {
	        transition.runQueue(activateQueue, canActivate, function () {
	          transition.runQueue(deactivateQueue, deactivate, function () {
	            // 3. Activation phase

	            // Update router current route
	            transition.router._onTransitionValidated(transition);

	            // trigger reuse for all reused views
	            reuseQueue && reuseQueue.forEach(function (view) {
	              return reuse(view, transition);
	            });

	            // the root of the chain that needs to be replaced
	            // is the top-most non-reusable view.
	            if (deactivateQueue.length) {
	              var _view = deactivateQueue[deactivateQueue.length - 1];
	              var depth = reuseQueue ? reuseQueue.length : 0;
	              activate(_view, transition, depth, cb);
	            } else {
	              cb();
	            }
	          });
	        });
	      });
	    };

	    /**
	     * Asynchronously and sequentially apply a function to a
	     * queue.
	     *
	     * @param {Array} queue
	     * @param {Function} fn
	     * @param {Function} cb
	     */

	    RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
	      var transition = this;
	      step(0);
	      function step(index) {
	        if (index >= queue.length) {
	          cb();
	        } else {
	          fn(queue[index], transition, function () {
	            step(index + 1);
	          });
	        }
	      }
	    };

	    /**
	     * Call a user provided route transition hook and handle
	     * the response (e.g. if the user returns a promise).
	     *
	     * If the user neither expects an argument nor returns a
	     * promise, the hook is assumed to be synchronous.
	     *
	     * @param {Function} hook
	     * @param {*} [context]
	     * @param {Function} [cb]
	     * @param {Object} [options]
	     *                 - {Boolean} expectBoolean
	     *                 - {Boolean} postActive
	     *                 - {Function} processData
	     *                 - {Function} cleanup
	     */

	    RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
	      var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

	      var _ref$expectBoolean = _ref.expectBoolean;
	      var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
	      var _ref$postActivate = _ref.postActivate;
	      var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
	      var processData = _ref.processData;
	      var cleanup = _ref.cleanup;

	      var transition = this;
	      var nextCalled = false;

	      // abort the transition
	      var abort = function abort() {
	        cleanup && cleanup();
	        transition.abort();
	      };

	      // handle errors
	      var onError = function onError(err) {
	        postActivate ? next() : abort();
	        if (err && !transition.router._suppress) {
	          warn$1('Uncaught error during transition: ');
	          throw err instanceof Error ? err : new Error(err);
	        }
	      };

	      // since promise swallows errors, we have to
	      // throw it in the next tick...
	      var onPromiseError = function onPromiseError(err) {
	        try {
	          onError(err);
	        } catch (e) {
	          setTimeout(function () {
	            throw e;
	          }, 0);
	        }
	      };

	      // advance the transition to the next step
	      var next = function next() {
	        if (nextCalled) {
	          warn$1('transition.next() should be called only once.');
	          return;
	        }
	        nextCalled = true;
	        if (transition.aborted) {
	          cleanup && cleanup();
	          return;
	        }
	        cb && cb();
	      };

	      var nextWithBoolean = function nextWithBoolean(res) {
	        if (typeof res === 'boolean') {
	          res ? next() : abort();
	        } else if (isPromise(res)) {
	          res.then(function (ok) {
	            ok ? next() : abort();
	          }, onPromiseError);
	        } else if (!hook.length) {
	          next();
	        }
	      };

	      var nextWithData = function nextWithData(data) {
	        var res = undefined;
	        try {
	          res = processData(data);
	        } catch (err) {
	          return onError(err);
	        }
	        if (isPromise(res)) {
	          res.then(next, onPromiseError);
	        } else {
	          next();
	        }
	      };

	      // expose a clone of the transition object, so that each
	      // hook gets a clean copy and prevent the user from
	      // messing with the internals.
	      var exposed = {
	        to: transition.to,
	        from: transition.from,
	        abort: abort,
	        next: processData ? nextWithData : next,
	        redirect: function redirect() {
	          transition.redirect.apply(transition, arguments);
	        }
	      };

	      // actually call the hook
	      var res = undefined;
	      try {
	        res = hook.call(context, exposed);
	      } catch (err) {
	        return onError(err);
	      }

	      if (expectBoolean) {
	        // boolean hooks
	        nextWithBoolean(res);
	      } else if (isPromise(res)) {
	        // promise
	        if (processData) {
	          res.then(nextWithData, onPromiseError);
	        } else {
	          res.then(next, onPromiseError);
	        }
	      } else if (processData && isPlainOjbect(res)) {
	        // data promise sugar
	        nextWithData(res);
	      } else if (!hook.length) {
	        next();
	      }
	    };

	    /**
	     * Call a single hook or an array of async hooks in series.
	     *
	     * @param {Array} hooks
	     * @param {*} context
	     * @param {Function} cb
	     * @param {Object} [options]
	     */

	    RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
	      var _this = this;

	      if (Array.isArray(hooks)) {
	        this.runQueue(hooks, function (hook, _, next) {
	          if (!_this.aborted) {
	            _this.callHook(hook, context, next, options);
	          }
	        }, cb);
	      } else {
	        this.callHook(hooks, context, cb, options);
	      }
	    };

	    return RouteTransition;
	  })();

	  function isPlainOjbect(val) {
	    return Object.prototype.toString.call(val) === '[object Object]';
	  }

	  function toArray(val) {
	    return val ? Array.prototype.slice.call(val) : [];
	  }

	  var internalKeysRE = /^(component|subRoutes|fullPath)$/;

	  /**
	   * Route Context Object
	   *
	   * @param {String} path
	   * @param {Router} router
	   */

	  var Route = function Route(path, router) {
	    var _this = this;

	    babelHelpers.classCallCheck(this, Route);

	    var matched = router._recognizer.recognize(path);
	    if (matched) {
	      // copy all custom fields from route configs
	      [].forEach.call(matched, function (match) {
	        for (var key in match.handler) {
	          if (!internalKeysRE.test(key)) {
	            _this[key] = match.handler[key];
	          }
	        }
	      });
	      // set query and params
	      this.query = matched.queryParams;
	      this.params = [].reduce.call(matched, function (prev, cur) {
	        if (cur.params) {
	          for (var key in cur.params) {
	            prev[key] = cur.params[key];
	          }
	        }
	        return prev;
	      }, {});
	    }
	    // expose path and router
	    this.path = path;
	    // for internal use
	    this.matched = matched || router._notFoundHandler;
	    // internal reference to router
	    Object.defineProperty(this, 'router', {
	      enumerable: false,
	      value: router
	    });
	    // Important: freeze self to prevent observation
	    Object.freeze(this);
	  };

	  function applyOverride (Vue) {
	    var _Vue$util = Vue.util;
	    var extend = _Vue$util.extend;
	    var isArray = _Vue$util.isArray;
	    var defineReactive = _Vue$util.defineReactive;

	    // override Vue's init and destroy process to keep track of router instances
	    var init = Vue.prototype._init;
	    Vue.prototype._init = function (options) {
	      options = options || {};
	      var root = options._parent || options.parent || this;
	      var router = root.$router;
	      var route = root.$route;
	      if (router) {
	        // expose router
	        this.$router = router;
	        router._children.push(this);
	        /* istanbul ignore if */
	        if (this._defineMeta) {
	          // 0.12
	          this._defineMeta('$route', route);
	        } else {
	          // 1.0
	          defineReactive(this, '$route', route);
	        }
	      }
	      init.call(this, options);
	    };

	    var destroy = Vue.prototype._destroy;
	    Vue.prototype._destroy = function () {
	      if (!this._isBeingDestroyed && this.$router) {
	        this.$router._children.$remove(this);
	      }
	      destroy.apply(this, arguments);
	    };

	    // 1.0 only: enable route mixins
	    var strats = Vue.config.optionMergeStrategies;
	    var hooksToMergeRE = /^(data|activate|deactivate)$/;

	    if (strats) {
	      strats.route = function (parentVal, childVal) {
	        if (!childVal) return parentVal;
	        if (!parentVal) return childVal;
	        var ret = {};
	        extend(ret, parentVal);
	        for (var key in childVal) {
	          var a = ret[key];
	          var b = childVal[key];
	          // for data, activate and deactivate, we need to merge them into
	          // arrays similar to lifecycle hooks.
	          if (a && hooksToMergeRE.test(key)) {
	            ret[key] = (isArray(a) ? a : [a]).concat(b);
	          } else {
	            ret[key] = b;
	          }
	        }
	        return ret;
	      };
	    }
	  }

	  function View (Vue) {

	    var _ = Vue.util;
	    var componentDef =
	    // 0.12
	    Vue.directive('_component') ||
	    // 1.0
	    Vue.internalDirectives.component;
	    // <router-view> extends the internal component directive
	    var viewDef = _.extend({}, componentDef);

	    // with some overrides
	    _.extend(viewDef, {

	      _isRouterView: true,

	      bind: function bind() {
	        var route = this.vm.$route;
	        /* istanbul ignore if */
	        if (!route) {
	          warn$1('<router-view> can only be used inside a ' + 'router-enabled app.');
	          return;
	        }
	        // force dynamic directive so v-component doesn't
	        // attempt to build right now
	        this._isDynamicLiteral = true;
	        // finally, init by delegating to v-component
	        componentDef.bind.call(this);

	        // locate the parent view
	        var parentView = undefined;
	        var parent = this.vm;
	        while (parent) {
	          if (parent._routerView) {
	            parentView = parent._routerView;
	            break;
	          }
	          parent = parent.$parent;
	        }
	        if (parentView) {
	          // register self as a child of the parent view,
	          // instead of activating now. This is so that the
	          // child's activate hook is called after the
	          // parent's has resolved.
	          this.parentView = parentView;
	          parentView.childView = this;
	        } else {
	          // this is the root view!
	          var router = route.router;
	          router._rootView = this;
	        }

	        // handle late-rendered view
	        // two possibilities:
	        // 1. root view rendered after transition has been
	        //    validated;
	        // 2. child view rendered after parent view has been
	        //    activated.
	        var transition = route.router._currentTransition;
	        if (!parentView && transition.done || parentView && parentView.activated) {
	          var depth = parentView ? parentView.depth + 1 : 0;
	          activate(this, transition, depth);
	        }
	      },

	      unbind: function unbind() {
	        if (this.parentView) {
	          this.parentView.childView = null;
	        }
	        componentDef.unbind.call(this);
	      }
	    });

	    Vue.elementDirective('router-view', viewDef);
	  }

	  var trailingSlashRE = /\/$/;
	  var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
	  var queryStringRE = /\?.*$/;

	  // install v-link, which provides navigation support for
	  // HTML5 history mode
	  function Link (Vue) {
	    var _Vue$util = Vue.util;
	    var _bind = _Vue$util.bind;
	    var isObject = _Vue$util.isObject;
	    var addClass = _Vue$util.addClass;
	    var removeClass = _Vue$util.removeClass;

	    var onPriority = Vue.directive('on').priority;
	    var LINK_UPDATE = '__vue-router-link-update__';

	    var activeId = 0;

	    Vue.directive('link-active', {
	      priority: 9999,
	      bind: function bind() {
	        var _this = this;

	        var id = String(activeId++);
	        // collect v-links contained within this element.
	        // we need do this here before the parent-child relationship
	        // gets messed up by terminal directives (if, for, components)
	        var childLinks = this.el.querySelectorAll('[v-link]');
	        for (var i = 0, l = childLinks.length; i < l; i++) {
	          var link = childLinks[i];
	          var existingId = link.getAttribute(LINK_UPDATE);
	          var value = existingId ? existingId + ',' + id : id;
	          // leave a mark on the link element which can be persisted
	          // through fragment clones.
	          link.setAttribute(LINK_UPDATE, value);
	        }
	        this.vm.$on(LINK_UPDATE, this.cb = function (link, path) {
	          if (link.activeIds.indexOf(id) > -1) {
	            link.updateClasses(path, _this.el);
	          }
	        });
	      },
	      unbind: function unbind() {
	        this.vm.$off(LINK_UPDATE, this.cb);
	      }
	    });

	    Vue.directive('link', {
	      priority: onPriority - 2,

	      bind: function bind() {
	        var vm = this.vm;
	        /* istanbul ignore if */
	        if (!vm.$route) {
	          warn$1('v-link can only be used inside a router-enabled app.');
	          return;
	        }
	        this.router = vm.$route.router;
	        // update things when the route changes
	        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
	        // check v-link-active ids
	        var activeIds = this.el.getAttribute(LINK_UPDATE);
	        if (activeIds) {
	          this.el.removeAttribute(LINK_UPDATE);
	          this.activeIds = activeIds.split(',');
	        }
	        // no need to handle click if link expects to be opened
	        // in a new window/tab.
	        /* istanbul ignore if */
	        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
	          return;
	        }
	        // handle click
	        this.handler = _bind(this.onClick, this);
	        this.el.addEventListener('click', this.handler);
	      },

	      update: function update(target) {
	        this.target = target;
	        if (isObject(target)) {
	          this.append = target.append;
	          this.exact = target.exact;
	          this.prevActiveClass = this.activeClass;
	          this.activeClass = target.activeClass;
	        }
	        this.onRouteUpdate(this.vm.$route);
	      },

	      onClick: function onClick(e) {
	        // don't redirect with control keys
	        /* istanbul ignore if */
	        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
	        // don't redirect when preventDefault called
	        /* istanbul ignore if */
	        if (e.defaultPrevented) return;
	        // don't redirect on right click
	        /* istanbul ignore if */
	        if (e.button !== 0) return;

	        var target = this.target;
	        if (target) {
	          // v-link with expression, just go
	          e.preventDefault();
	          this.router.go(target);
	        } else {
	          // no expression, delegate for an <a> inside
	          var el = e.target;
	          while (el.tagName !== 'A' && el !== this.el) {
	            el = el.parentNode;
	          }
	          if (el.tagName === 'A' && sameOrigin(el)) {
	            e.preventDefault();
	            var path = el.pathname;
	            if (this.router.history.root) {
	              path = path.replace(this.router.history.rootRE, '');
	            }
	            this.router.go({
	              path: path,
	              replace: target && target.replace,
	              append: target && target.append
	            });
	          }
	        }
	      },

	      onRouteUpdate: function onRouteUpdate(route) {
	        // router.stringifyPath is dependent on current route
	        // and needs to be called again whenver route changes.
	        var newPath = this.router.stringifyPath(this.target);
	        if (this.path !== newPath) {
	          this.path = newPath;
	          this.updateActiveMatch();
	          this.updateHref();
	        }
	        if (this.activeIds) {
	          this.vm.$emit(LINK_UPDATE, this, route.path);
	        } else {
	          this.updateClasses(route.path, this.el);
	        }
	      },

	      updateActiveMatch: function updateActiveMatch() {
	        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
	      },

	      updateHref: function updateHref() {
	        if (this.el.tagName !== 'A') {
	          return;
	        }
	        var path = this.path;
	        var router = this.router;
	        var isAbsolute = path.charAt(0) === '/';
	        // do not format non-hash relative paths
	        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
	        if (href) {
	          this.el.href = href;
	        } else {
	          this.el.removeAttribute('href');
	        }
	      },

	      updateClasses: function updateClasses(path, el) {
	        var activeClass = this.activeClass || this.router._linkActiveClass;
	        // clear old class
	        if (this.prevActiveClass && this.prevActiveClass !== activeClass) {
	          toggleClasses(el, this.prevActiveClass, removeClass);
	        }
	        // remove query string before matching
	        var dest = this.path.replace(queryStringRE, '');
	        path = path.replace(queryStringRE, '');
	        // add new class
	        if (this.exact) {
	          if (dest === path ||
	          // also allow additional trailing slash
	          dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        } else {
	          if (this.activeRE && this.activeRE.test(path)) {
	            toggleClasses(el, activeClass, addClass);
	          } else {
	            toggleClasses(el, activeClass, removeClass);
	          }
	        }
	      },

	      unbind: function unbind() {
	        this.el.removeEventListener('click', this.handler);
	        this.unwatch && this.unwatch();
	      }
	    });

	    function sameOrigin(link) {
	      return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
	    }

	    // this function is copied from v-bind:class implementation until
	    // we properly expose it...
	    function toggleClasses(el, key, fn) {
	      key = key.trim();
	      if (key.indexOf(' ') === -1) {
	        fn(el, key);
	        return;
	      }
	      var keys = key.split(/\s+/);
	      for (var i = 0, l = keys.length; i < l; i++) {
	        fn(el, keys[i]);
	      }
	    }
	  }

	  var historyBackends = {
	    abstract: AbstractHistory,
	    hash: HashHistory,
	    html5: HTML5History
	  };

	  // late bind during install
	  var Vue = undefined;

	  /**
	   * Router constructor
	   *
	   * @param {Object} [options]
	   */

	  var Router = (function () {
	    function Router() {
	      var _this = this;

	      var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	      var _ref$hashbang = _ref.hashbang;
	      var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
	      var _ref$abstract = _ref.abstract;
	      var abstract = _ref$abstract === undefined ? false : _ref$abstract;
	      var _ref$history = _ref.history;
	      var history = _ref$history === undefined ? false : _ref$history;
	      var _ref$saveScrollPosition = _ref.saveScrollPosition;
	      var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
	      var _ref$transitionOnLoad = _ref.transitionOnLoad;
	      var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
	      var _ref$suppressTransitionError = _ref.suppressTransitionError;
	      var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
	      var _ref$root = _ref.root;
	      var root = _ref$root === undefined ? null : _ref$root;
	      var _ref$linkActiveClass = _ref.linkActiveClass;
	      var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
	      babelHelpers.classCallCheck(this, Router);

	      /* istanbul ignore if */
	      if (!Router.installed) {
	        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
	      }

	      // Vue instances
	      this.app = null;
	      this._children = [];

	      // route recognizer
	      this._recognizer = new RouteRecognizer();
	      this._guardRecognizer = new RouteRecognizer();

	      // state
	      this._started = false;
	      this._startCb = null;
	      this._currentRoute = {};
	      this._currentTransition = null;
	      this._previousTransition = null;
	      this._notFoundHandler = null;
	      this._notFoundRedirect = null;
	      this._beforeEachHooks = [];
	      this._afterEachHooks = [];

	      // trigger transition on initial render?
	      this._rendered = false;
	      this._transitionOnLoad = transitionOnLoad;

	      // history mode
	      this._root = root;
	      this._abstract = abstract;
	      this._hashbang = hashbang;

	      // check if HTML5 history is available
	      var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
	      this._history = history && hasPushState;
	      this._historyFallback = history && !hasPushState;

	      // create history object
	      var inBrowser = Vue.util.inBrowser;
	      this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

	      var History = historyBackends[this.mode];
	      this.history = new History({
	        root: root,
	        hashbang: this._hashbang,
	        onChange: function onChange(path, state, anchor) {
	          _this._match(path, state, anchor);
	        }
	      });

	      // other options
	      this._saveScrollPosition = saveScrollPosition;
	      this._linkActiveClass = linkActiveClass;
	      this._suppress = suppressTransitionError;
	    }

	    /**
	     * Allow directly passing components to a route
	     * definition.
	     *
	     * @param {String} path
	     * @param {Object} handler
	     */

	    // API ===================================================

	    /**
	    * Register a map of top-level paths.
	    *
	    * @param {Object} map
	    */

	    Router.prototype.map = function map(_map) {
	      for (var route in _map) {
	        this.on(route, _map[route]);
	      }
	      return this;
	    };

	    /**
	     * Register a single root-level path
	     *
	     * @param {String} rootPath
	     * @param {Object} handler
	     *                 - {String} component
	     *                 - {Object} [subRoutes]
	     *                 - {Boolean} [forceRefresh]
	     *                 - {Function} [before]
	     *                 - {Function} [after]
	     */

	    Router.prototype.on = function on(rootPath, handler) {
	      if (rootPath === '*') {
	        this._notFound(handler);
	      } else {
	        this._addRoute(rootPath, handler, []);
	      }
	      return this;
	    };

	    /**
	     * Set redirects.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.redirect = function redirect(map) {
	      for (var path in map) {
	        this._addRedirect(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set aliases.
	     *
	     * @param {Object} map
	     */

	    Router.prototype.alias = function alias(map) {
	      for (var path in map) {
	        this._addAlias(path, map[path]);
	      }
	      return this;
	    };

	    /**
	     * Set global before hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.beforeEach = function beforeEach(fn) {
	      this._beforeEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Set global after hook.
	     *
	     * @param {Function} fn
	     */

	    Router.prototype.afterEach = function afterEach(fn) {
	      this._afterEachHooks.push(fn);
	      return this;
	    };

	    /**
	     * Navigate to a given path.
	     * The path can be an object describing a named path in
	     * the format of { name: '...', params: {}, query: {}}
	     * The path is assumed to be already decoded, and will
	     * be resolved against root (if provided)
	     *
	     * @param {String|Object} path
	     * @param {Boolean} [replace]
	     */

	    Router.prototype.go = function go(path) {
	      var replace = false;
	      var append = false;
	      if (Vue.util.isObject(path)) {
	        replace = path.replace;
	        append = path.append;
	      }
	      path = this.stringifyPath(path);
	      if (path) {
	        this.history.go(path, replace, append);
	      }
	    };

	    /**
	     * Short hand for replacing current path
	     *
	     * @param {String} path
	     */

	    Router.prototype.replace = function replace(path) {
	      if (typeof path === 'string') {
	        path = { path: path };
	      }
	      path.replace = true;
	      this.go(path);
	    };

	    /**
	     * Start the router.
	     *
	     * @param {VueConstructor} App
	     * @param {String|Element} container
	     * @param {Function} [cb]
	     */

	    Router.prototype.start = function start(App, container, cb) {
	      /* istanbul ignore if */
	      if (this._started) {
	        warn$1('already started.');
	        return;
	      }
	      this._started = true;
	      this._startCb = cb;
	      if (!this.app) {
	        /* istanbul ignore if */
	        if (!App || !container) {
	          throw new Error('Must start vue-router with a component and a ' + 'root container.');
	        }
	        /* istanbul ignore if */
	        if (App instanceof Vue) {
	          throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
	        }
	        this._appContainer = container;
	        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
	        // give it a name for better debugging
	        Ctor.options.name = Ctor.options.name || 'RouterApp';
	      }

	      // handle history fallback in browsers that do not
	      // support HTML5 history API
	      if (this._historyFallback) {
	        var _location = window.location;
	        var _history = new HTML5History({ root: this._root });
	        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
	        if (path && path !== '/') {
	          _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
	          return;
	        }
	      }

	      this.history.start();
	    };

	    /**
	     * Stop listening to route changes.
	     */

	    Router.prototype.stop = function stop() {
	      this.history.stop();
	      this._started = false;
	    };

	    /**
	     * Normalize named route object / string paths into
	     * a string.
	     *
	     * @param {Object|String|Number} path
	     * @return {String}
	     */

	    Router.prototype.stringifyPath = function stringifyPath(path) {
	      var generatedPath = '';
	      if (path && typeof path === 'object') {
	        if (path.name) {
	          var extend = Vue.util.extend;
	          var currentParams = this._currentTransition && this._currentTransition.to.params;
	          var targetParams = path.params || {};
	          var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
	          generatedPath = encodeURI(this._recognizer.generate(path.name, params));
	        } else if (path.path) {
	          generatedPath = encodeURI(path.path);
	        }
	        if (path.query) {
	          // note: the generated query string is pre-URL-encoded by the recognizer
	          var query = this._recognizer.generateQueryString(path.query);
	          if (generatedPath.indexOf('?') > -1) {
	            generatedPath += '&' + query.slice(1);
	          } else {
	            generatedPath += query;
	          }
	        }
	      } else {
	        generatedPath = encodeURI(path ? path + '' : '');
	      }
	      return generatedPath;
	    };

	    // Internal methods ======================================

	    /**
	    * Add a route containing a list of segments to the internal
	    * route recognizer. Will be called recursively to add all
	    * possible sub-routes.
	    *
	    * @param {String} path
	    * @param {Object} handler
	    * @param {Array} segments
	    */

	    Router.prototype._addRoute = function _addRoute(path, handler, segments) {
	      guardComponent(path, handler);
	      handler.path = path;
	      handler.fullPath = (segments.reduce(function (path, segment) {
	        return path + segment.path;
	      }, '') + path).replace('//', '/');
	      segments.push({
	        path: path,
	        handler: handler
	      });
	      this._recognizer.add(segments, {
	        as: handler.name
	      });
	      // add sub routes
	      if (handler.subRoutes) {
	        for (var subPath in handler.subRoutes) {
	          // recursively walk all sub routes
	          this._addRoute(subPath, handler.subRoutes[subPath],
	          // pass a copy in recursion to avoid mutating
	          // across branches
	          segments.slice());
	        }
	      }
	    };

	    /**
	     * Set the notFound route handler.
	     *
	     * @param {Object} handler
	     */

	    Router.prototype._notFound = function _notFound(handler) {
	      guardComponent('*', handler);
	      this._notFoundHandler = [{ handler: handler }];
	    };

	    /**
	     * Add a redirect record.
	     *
	     * @param {String} path
	     * @param {String} redirectPath
	     */

	    Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
	      if (path === '*') {
	        this._notFoundRedirect = redirectPath;
	      } else {
	        this._addGuard(path, redirectPath, this.replace);
	      }
	    };

	    /**
	     * Add an alias record.
	     *
	     * @param {String} path
	     * @param {String} aliasPath
	     */

	    Router.prototype._addAlias = function _addAlias(path, aliasPath) {
	      this._addGuard(path, aliasPath, this._match);
	    };

	    /**
	     * Add a path guard.
	     *
	     * @param {String} path
	     * @param {String} mappedPath
	     * @param {Function} handler
	     */

	    Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
	      var _this2 = this;

	      this._guardRecognizer.add([{
	        path: path,
	        handler: function handler(match, query) {
	          var realPath = mapParams(mappedPath, match.params, query);
	          _handler.call(_this2, realPath);
	        }
	      }]);
	    };

	    /**
	     * Check if a path matches any redirect records.
	     *
	     * @param {String} path
	     * @return {Boolean} - if true, will skip normal match.
	     */

	    Router.prototype._checkGuard = function _checkGuard(path) {
	      var matched = this._guardRecognizer.recognize(path, true);
	      if (matched) {
	        matched[0].handler(matched[0], matched.queryParams);
	        return true;
	      } else if (this._notFoundRedirect) {
	        matched = this._recognizer.recognize(path);
	        if (!matched) {
	          this.replace(this._notFoundRedirect);
	          return true;
	        }
	      }
	    };

	    /**
	     * Match a URL path and set the route context on vm,
	     * triggering view updates.
	     *
	     * @param {String} path
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._match = function _match(path, state, anchor) {
	      var _this3 = this;

	      if (this._checkGuard(path)) {
	        return;
	      }

	      var currentRoute = this._currentRoute;
	      var currentTransition = this._currentTransition;

	      if (currentTransition) {
	        if (currentTransition.to.path === path) {
	          // do nothing if we have an active transition going to the same path
	          return;
	        } else if (currentRoute.path === path) {
	          // We are going to the same path, but we also have an ongoing but
	          // not-yet-validated transition. Abort that transition and reset to
	          // prev transition.
	          currentTransition.aborted = true;
	          this._currentTransition = this._prevTransition;
	          return;
	        } else {
	          // going to a totally different path. abort ongoing transition.
	          currentTransition.aborted = true;
	        }
	      }

	      // construct new route and transition context
	      var route = new Route(path, this);
	      var transition = new RouteTransition(this, route, currentRoute);

	      // current transition is updated right now.
	      // however, current route will only be updated after the transition has
	      // been validated.
	      this._prevTransition = currentTransition;
	      this._currentTransition = transition;

	      if (!this.app) {
	        (function () {
	          // initial render
	          var router = _this3;
	          _this3.app = new _this3._appConstructor({
	            el: _this3._appContainer,
	            created: function created() {
	              this.$router = router;
	            },
	            _meta: {
	              $route: route
	            }
	          });
	        })();
	      }

	      // check global before hook
	      var beforeHooks = this._beforeEachHooks;
	      var startTransition = function startTransition() {
	        transition.start(function () {
	          _this3._postTransition(route, state, anchor);
	        });
	      };

	      if (beforeHooks.length) {
	        transition.runQueue(beforeHooks, function (hook, _, next) {
	          if (transition === _this3._currentTransition) {
	            transition.callHook(hook, null, next, {
	              expectBoolean: true
	            });
	          }
	        }, startTransition);
	      } else {
	        startTransition();
	      }

	      if (!this._rendered && this._startCb) {
	        this._startCb.call(null);
	      }

	      // HACK:
	      // set rendered to true after the transition start, so
	      // that components that are acitvated synchronously know
	      // whether it is the initial render.
	      this._rendered = true;
	    };

	    /**
	     * Set current to the new transition.
	     * This is called by the transition object when the
	     * validation of a route has succeeded.
	     *
	     * @param {Transition} transition
	     */

	    Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
	      // set current route
	      var route = this._currentRoute = transition.to;
	      // update route context for all children
	      if (this.app.$route !== route) {
	        this.app.$route = route;
	        this._children.forEach(function (child) {
	          child.$route = route;
	        });
	      }
	      // call global after hook
	      if (this._afterEachHooks.length) {
	        this._afterEachHooks.forEach(function (hook) {
	          return hook.call(null, {
	            to: transition.to,
	            from: transition.from
	          });
	        });
	      }
	      this._currentTransition.done = true;
	    };

	    /**
	     * Handle stuff after the transition.
	     *
	     * @param {Route} route
	     * @param {Object} [state]
	     * @param {String} [anchor]
	     */

	    Router.prototype._postTransition = function _postTransition(route, state, anchor) {
	      // handle scroll positions
	      // saved scroll positions take priority
	      // then we check if the path has an anchor
	      var pos = state && state.pos;
	      if (pos && this._saveScrollPosition) {
	        Vue.nextTick(function () {
	          window.scrollTo(pos.x, pos.y);
	        });
	      } else if (anchor) {
	        Vue.nextTick(function () {
	          var el = document.getElementById(anchor.slice(1));
	          if (el) {
	            window.scrollTo(window.scrollX, el.offsetTop);
	          }
	        });
	      }
	    };

	    return Router;
	  })();

	  function guardComponent(path, handler) {
	    var comp = handler.component;
	    if (Vue.util.isPlainObject(comp)) {
	      comp = handler.component = Vue.extend(comp);
	    }
	    /* istanbul ignore if */
	    if (typeof comp !== 'function') {
	      handler.component = null;
	      warn$1('invalid component for route "' + path + '".');
	    }
	  }

	  /* Installation */

	  Router.installed = false;

	  /**
	   * Installation interface.
	   * Install the necessary directives.
	   */

	  Router.install = function (externalVue) {
	    /* istanbul ignore if */
	    if (Router.installed) {
	      warn$1('already installed.');
	      return;
	    }
	    Vue = externalVue;
	    applyOverride(Vue);
	    View(Vue);
	    Link(Vue);
	    exports$1.Vue = Vue;
	    Router.installed = true;
	  };

	  // auto install
	  /* istanbul ignore if */
	  if (typeof window !== 'undefined' && window.Vue) {
	    window.Vue.use(Router);
	  }

	  return Router;

	}));

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(45)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Assessments.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(46)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-6421e585/Assessments.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 45 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    data: function data() {
	        return {
	            assessments: {}
	        };
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        },

	        getAssessments: function getAssessments() {
	            this.$http.get('assessments/getassessments').then(function (response) {
	                this.$set('assessments', response.data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },

	        getItems: function getItems() {
	            this.$http.get('admin/osamaker/api/item/get').then(function (data) {
	                this.$set('items', data.data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },

	        save: function save() {

	            var data = { module: this.module };

	            this.$http.post('admin/osamaker/api/module/save', data).then(function () {
	                this.getModules();
	                UIkit.notify('Saved');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });

	            this.module = {
	                id: '',
	                title: '',
	                roles: ''
	            };
	        },

	        deleteItem: function deleteItem(item, items, id) {
	            items.$remove(item);
	        },

	        remove: function remove(module, modules) {

	            this.$http.post('admin/osamaker/api/module/delete', module).then(function () {
	                modules.$remove(module);
	                UIkit.notify('Module removed');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });
	        },

	        update: function update(module) {
	            var data = { module: module };
	            this.$http.post('admin/osamaker/api/module/edit', data).then(function () {
	                UIkit.notify('Saved');
	            }).catch(function () {
	                UIkit.notify('Something went wrong');
	            });
	        }

	    },

	    computed: {
	        isDisplayLoading: function isDisplayLoading() {
	            return !_.size(this.assessments);
	        }
	    },

	    ready: function ready() {
	        this.getAssessments();
	    }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = "\n<!--<pre>-->\n<!--{{ $data | json }}-->\n<!--</pre>-->\n\n\n<ul>\n    <li v-for=\"assessment in assessments\">\n        <a v-link=\"{ path: '/' + assessment.id }\">{{ assessment.title }}</a>\n    </li>\n</ul>\n\n<div v-if=\"isDisplayLoading\">\n    loading ...\n</div>\n\n";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(48)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Assessment.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(67)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-0b5ea75e/Assessment.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    components: {
	        Module: __webpack_require__(49)
	    },

	    data: function data() {
	        return {
	            assessment: {}
	        };
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        },

	        getModules: function getModules(assessmentId) {

	            this.$http.get('assessments/getmodules/' + assessmentId).then(function (modules) {

	                this.$set('assessment', modules.data);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        }

	    },

	    computed: {},

	    ready: function ready() {
	        this.getModules(this.$route.params.id);
	    }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(50)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Module.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(66)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-47c957f0/Module.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    components: {
	        Item: __webpack_require__(51)
	    },

	    props: ['module'],

	    data: function data() {
	        return {
	            results: {}
	        };
	    },

	    methods: {

	        save: function save() {

	            var data = { results: this.results, module: this.module.id };
	            this.$http.post('assessments/save', data).then(function (response) {
	                console.log(response);
	            }).catch(function (err) {
	                console.log(err);
	            });
	        },

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(52)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Item/Item.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(65)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-17b79c43/Item.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {

	    components: {
	        Single: __webpack_require__(53),
	        Multiple: __webpack_require__(56),
	        Slider: __webpack_require__(59),
	        Scale: __webpack_require__(62)
	    },

	    props: ['item', 'results'],

	    data: function data() {
	        return {};
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(54)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Item/Single.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(55)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-06715cf8/Single.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 54 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    props: ['item', 'checked'],

	    data: function data() {
	        return {};
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "\n<span v-for=\"option in item.data.options\">\n    <!--<label for=\"hans_{{ $index }}\">{{ option.text }}</label>-->\n    <!--<input id=\"hans__{{ $index }}\" name=\"supertol\" type=\"radio\" value=\"{{ option.value }}\"/>-->\n\n    <mdl-radio :checked.sync=\"checked\" class=\"mdl-js-ripple-effect\" :value=\"option.value\">\n        {{option.text}}\n    </mdl-radio>\n</span>\n\n<!--<mdl-button class=\"card_save_button mdl-button&#45;&#45;icon\" fab primary>-->\n<!--<i class=\"material-icons\">save</i>-->\n<!--</mdl-button>-->\n\n";

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(57)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Item/Multiple.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(58)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-120134c0/Multiple.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 57 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    props: ['item'],

	    data: function data() {
	        return {};
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = "\nmappel\n";

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(60)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Item/Slider.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(61)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-11eb5d11/Slider.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 60 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    props: ['item'],

	    data: function data() {
	        return {};
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = "\nslanden\n";

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(63)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] app/components/public/Item/Scale.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(64)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  var id = "_v-1ce64c6c/Scale.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 63 */
/***/ function(module, exports) {

	'use strict';

	module.exports = {

	    components: {},

	    props: ['item'],

	    data: function data() {
	        return {};
	    },
	    methods: {

	        stuff: function stuff() {
	            console.log('stuff');
	        }

	    },

	    computed: {},

	    ready: function ready() {}
	};

/***/ },
/* 64 */
/***/ function(module, exports) {

	module.exports = "\nsky\n";

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = "\n<div style=\"border: 1px solid #ddd\">\n    <h2>{{ item.text }}</h2>\n\n    <single v-if=\"item.data.type == 'single'\" :item=\"item\" :checked.sync=\"results[item.id]\"></single>\n    <multiple v-if=\"item.data.type == 'multiple'\" :item=\"item\"></multiple>\n    <slider v-if=\"item.data.type == 'slider'\" :item=\"item\"></slider>\n    <scale v-if=\"item.data.type == 'scale'\" :item=\"item\"></scale>\n\n</div>\n\n\n";

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = "\n<div>{{ module.title }}</div>\n<ul>\n    <li v-for=\"item in module.items\">\n        <item :item=\"item\" :results.sync=\"results\"></item>\n    </li>\n</ul>\n\n<ui-button color=\"primary\" @click=\"save\">Save</ui-button>\n\n";

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports = "\n<!--{{ assessment | json }}-->\n\n<ul>\n    <li v-for=\"module in assessment\">\n        <module :module.sync=\"module\"></module>\n    </li>\n</ul>\n\n";

/***/ }
/******/ ]);