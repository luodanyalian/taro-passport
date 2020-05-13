(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/login/index"],{

/***/ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/login/index.js?taro&type=script&parse=COMPONENT&":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/login?taro&type=script&parse=COMPONENT& ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./index.scss */ "./src/components/login/index.scss");

var _tips = __webpack_require__(/*! ../../utils/tips */ "./src/utils/tips.js");

var _tips2 = _interopRequireDefault(_tips);

var _authorApi = __webpack_require__(/*! ../../http/userApis/authorApi */ "./src/http/userApis/authorApi.js");

var _authorApi2 = _interopRequireDefault(_authorApi);

var _userAuth = __webpack_require__(/*! ../../http/userAuth */ "./src/http/userAuth.jsx");

var _userAuth2 = _interopRequireDefault(_userAuth);

var _btn_32_ghost_close3x = __webpack_require__(/*! ../../static/btn/btn_32_ghost_close@3x.png */ "./src/static/btn/btn_32_ghost_close@3x.png");

var _btn_32_ghost_close3x2 = _interopRequireDefault(_btn_32_ghost_close3x);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * putao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 2019-09-18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * webclient@putao.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Login = function (_BaseComponent) {
  _inherits(Login, _BaseComponent);

  function Login() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this2), _this2.$usedState = ["anonymousState__temp", "anonymousState__temp2", "anonymousState__temp3", "anonymousState__temp4", "anonymousState__temp5", "anonymousState__temp6", "showLogin", "BtnClose", "codeBtnText", "timer", "countdown", "phoneNumber", "codeNum", "getCodeLock", "nextBtnLock", "codePlaceHolder", "checkedType", "config", "enablePanel"], _this2.componentDidMount = function () {
      // this.props.onLoginInit && this.props.onLoginInit(this)
      // if (this.props.loginInitType) {
      //   this.checkLogin()
      // }
    }, _this2.componentWillReceiveProps = function (nextProps) {}, _this2.onClickLogin = function () {
      if (_this2.state.nextBtnLock) {
        return;
      }
      _this2.setState({
        nextBtnLock: true
      });
      var self = _this2;
      // self.setState({
      //   toastStatus: 'loading',
      //   toastText: '登录中...',
      //   toastOpen: true
      // })
      _userAuth2.default.mobileCodeLogin('86-' + _this2.state.phoneNumber, _this2.state.codeNum, _this2.props.config).then(function (result) {
        if (result.code == 0) {
          console.log('手机号登录成功');
          self.bindUser();
        } else if (result.code === 21006) {
          _tips2.default.toast('验证码无效' + result.code, 'none');
        } else {
          _tips2.default.toast('手机号登录失败' + result.code, 'none');
        }
      });
    }, _this2.bindPhoneInput = function (e) {
      var _this = _this2;
      _this.setState({
        phoneNumber: e.detail.value
      }, function () {
        _this.clearTime();
        _this.checkGetCodeBtn();
        _this.checkNextBtn();
      });
    }, _this2.bindCodeInput = function (e) {
      var _this = _this2;
      _this.setState({
        codeNum: e.detail.value
      }, function () {
        _this.checkNextBtn();
      });
    }, _this2.customComponents = [], _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Login, [{
    key: '_constructor',
    value: function _constructor(props) {
      var _state;

      _get(Login.prototype.__proto__ || Object.getPrototypeOf(Login.prototype), '_constructor', this).call(this, props);
      var headerHeight = _taroWeapp2.default.getStorageSync('headerHeight');
      var containerMinHeight = "calc(100vh - " + (headerHeight + 44) + "px)!important";
      // let allWindowHeight = `calc(100vh - ` + headerHeight + `px)!important`
      this.state = (_state = {
        codeBtnText: '获取验证码',
        showLogin: false,
        timer: '', // 倒计时
        countdown: '', //倒计时时间
        phoneNumber: '', //用户输入的手机号
        codeNum: '', //用户输入的验证码
        getCodeLock: true, //获取验证码的锁
        nextBtnLock: true, //下一步的锁
        codePlaceHolder: '收到的验证码'
      }, _defineProperty(_state, 'codeBtnText', '获取验证码'), _defineProperty(_state, 'checkedType', ''), _state);
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: 'checkLogin',

    //检测是否登录成功
    value: function checkLogin(callback) {
      var self = this;
      _userAuth2.default.checkUserAuth(function (resultstatus, resultcode) {
        if (resultstatus == _userAuth.STATUS_WXLOGIN_SCCESS) {
          console.log('微信授权登录成功');
          if (resultcode == _userAuth.CODE_BINDED) {
            //已绑定的用户
            self.setState({
              showLogin: false
            });
            callback && callback(true);
            // this.props.onLoginRefresh && this.props.onLoginRefresh()
            console.log('这是一个绑定过的账户');
          } else {
            console.log('未绑定账户');
            self.setState({
              showLogin: true
            });
            callback && callback(false);
          }
        } else {
          console.log('微信授权登录失败');
          _tips2.default.onlyConfirm('微信授权登录失败' + resultcode);
          self.setState({
            showLogin: false
          });
          callback && callback(false);
        }
      }, this.props.config);
    }

    // 手机号登录

  }, {
    key: 'bindUser',

    //新手机号绑定
    value: function bindUser() {
      var _this3 = this;

      var _this = this;
      _userAuth2.default.bindWinxin(this.props.config).then(function (res) {
        if (res.code === 0) {
          console.log('微信绑定成功---》》》》');
          _this.setState({
            showLogin: false
          }, function () {
            _tips2.default.toast('登录成功', 'none');
          });
          _this.props.onLoginRefresh && _this3.props.onLoginRefresh();
        } else if (res.code === 21012) {
          _this.setState({
            showLogin: true
          }, function () {
            _tips2.default.toast('该手机号已绑定其他微信账户，请使用其他手机号登录', 'none');
          });
        } else {
          _this.setState({
            showLogin: true
          }, function () {
            _tips2.default.toast('登录失败，请重新登录' + res.code, 'none');
          });
          console.log('微信绑定失败---》》》》');
        }
      });
    }

    // 清除倒计时

  }, {
    key: 'clearTime',
    value: function clearTime() {
      if (this.timer) {
        clearInterval(this.timer);
      }
    }
    //手机输入框

    // 验证码输入

  }, {
    key: 'setTime',


    // 设置倒计时
    value: function setTime() {
      var timelimit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;

      var _this = this;
      this.setState({
        countdown: timelimit
      });
      // _this.countdown = timelimit;
      _this.timer = setInterval(function () {
        _this.setState({
          countdown: _this.state.countdown - 1,
          codeBtnText: _this.state.countdown + '秒后重新获取'
        });
        if (_this.state.countdown === 0) {
          _this.clearTime();
          _this.setState({
            countdown: 60,
            getCodeLock: false,
            codeBtnText: '重新获取'
          });
        }
      }, 1000);
    }

    // 获取焦点

  }, {
    key: 'getFocus',
    value: function getFocus(type) {
      //获取焦点
      this.setState({
        checkedType: type
      });
      if (type === 'code') {
        this.setState({
          codePlaceHolder: '_ _ _ _'
        });
      }
    }
    // 失去焦点

  }, {
    key: 'outFocus',
    value: function outFocus(type) {
      this.setState({
        checkedType: ''
      });
      if (type === 'code') {
        this.setState({
          codePlaceHolder: '收到的验证码'
        });
      }
    }

    // 获取验证码的

  }, {
    key: 'getPhoneCode',
    value: function getPhoneCode() {
      var _this4 = this;

      if (!this.state.getCodeLock) {
        // 如果未被锁
        this.setState({
          getCodeLock: true
        });
        console.log('点击了');

        var data = {
          fullmobile: '86-' + this.state.phoneNumber,
          action: '2'
        };
        _authorApi2.default.sendMobileCode(data, this.props.config).then(function (res) {
          if (res && res.code === 0) {
            _this4.setTime();
          } else {
            _tips2.default.toast('error验证码发送失败' + res.code, 'none');
          }
        });
      }
    }

    // 检测手机号

  }, {
    key: 'testPhone',
    value: function testPhone() {
      var phoneCheck = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
      if (this.state.phoneNumber !== '' && phoneCheck.test(this.state.phoneNumber)) {
        return true;
      } else {
        clearInterval(this.state.timer);
        this.setState({
          codeBtnText: '获取验证码'
        });
        return false;
      }
    }
    //检测验证码的正确性

  }, {
    key: 'testCode',
    value: function testCode() {
      var codeCheck = /^\d{4}$/;
      if (this.state.codeNum !== '' && codeCheck.test(this.state.codeNum)) {
        return true;
      } else {
        return false;
      }
    }
    // 检测获取验证码按钮

  }, {
    key: 'checkGetCodeBtn',
    value: function checkGetCodeBtn() {
      var phoneCheckResult = this.testPhone();
      if (phoneCheckResult) {
        this.setState({
          getCodeLock: false
        });
      } else {
        this.setState({
          getCodeLock: true
        });
      }
    }
    // 检测下一步按钮

  }, {
    key: 'checkNextBtn',
    value: function checkNextBtn() {
      var phoneCheckResult = this.testPhone();
      var codeCheckResult = this.testCode();
      if (phoneCheckResult && codeCheckResult) {
        this.setState({
          nextBtnLock: false
        });
      } else {
        this.setState({
          nextBtnLock: true
        });
      }
    }
  }, {
    key: 'onCancleClick',
    value: function onCancleClick() {
      this.setState({
        showLogin: false
      });
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var showLogin = this.__state.showLogin;

      var anonymousState__temp = showLogin && this.__props.enablePanel ? __webpack_require__(/*! ../../static/icon/icon_32_phone_red@3x.png */ "./src/static/icon/icon_32_phone_red@3x.png") : null;
      var anonymousState__temp2 = this.__state.getCodeLock ? __webpack_require__(/*! ../../static/icon/icon_16_again_g@3x.png */ "./src/static/icon/icon_16_again_g@3x.png") : null;

      var anonymousState__temp3 = __webpack_require__(/*! ../../static/icon/icon_16_again_r@3x.png */ "./src/static/icon/icon_16_again_r@3x.png");

      var anonymousState__temp4 = showLogin && this.__props.enablePanel ? __webpack_require__(/*! ../../static/icon/icon_32_message_red@3x.png */ "./src/static/icon/icon_32_message_red@3x.png") : null;
      var anonymousState__temp5 = this.__state.nextBtnLock ? __webpack_require__(/*! ../../static/icon/icon_16_tick_w@3x.png */ "./src/static/icon/icon_16_tick_w@3x.png") : null;

      var anonymousState__temp6 = __webpack_require__(/*! ../../static/icon/icon_16_arrow_r_w@3x.png */ "./src/static/icon/icon_16_arrow_r_w@3x.png");

      Object.assign(this.__state, {
        anonymousState__temp: anonymousState__temp,
        anonymousState__temp2: anonymousState__temp2,
        anonymousState__temp3: anonymousState__temp3,
        anonymousState__temp4: anonymousState__temp4,
        anonymousState__temp5: anonymousState__temp5,
        anonymousState__temp6: anonymousState__temp6,
        BtnClose: _btn_32_ghost_close3x2.default
      });
      return this.__state;
    }
  }]);

  return Login;
}(_taroWeapp.Component);

Login.$$events = ["onCancleClick", "bindPhoneInput", "getFocus", "outFocus", "getPhoneCode", "bindCodeInput", "onClickLogin"];
Login.propTypes = {
  config: _propTypes2.default.object,
  enablePanel: _propTypes2.default.bool
};
Login.defaultProps = {
  config: {},
  enablePanel: true
};
Login.$$componentPath = "components/login/index";
exports.default = Login;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js").default.createComponent(Login));

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/chengxiaodan/Documents/workSpace/npmpackages/taro-ptpassport/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/login/index.js?taro&type=template&parse=COMPONENT&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/chengxiaodan/Documents/workSpace/npmpackages/taro-ptpassport/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/components/login?taro&type=template&parse=COMPONENT& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "components/login/index.wxml";

/***/ }),

/***/ "./node_modules/js-md5/src/md5.js":
/*!****************************************!*\
  !*** ./node_modules/js-md5/src/md5.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
(function () {
  'use strict';

  var ERROR = 'input is invalid type';
  var WINDOW = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object';
  var root = WINDOW ? window : {};
  if (root.JS_MD5_NO_WINDOW) {
    WINDOW = false;
  }
  var WEB_WORKER = !WINDOW && (typeof self === 'undefined' ? 'undefined' : _typeof(self)) === 'object';
  var NODE_JS = !root.JS_MD5_NO_NODE_JS && (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  } else if (WEB_WORKER) {
    root = self;
  }
  var COMMON_JS = !root.JS_MD5_NO_COMMON_JS && ( false ? undefined : _typeof(module)) === 'object' && module.exports;
  var AMD =  true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js");
  var ARRAY_BUFFER = !root.JS_MD5_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [128, 32768, 8388608, -2147483648];
  var SHIFT = [0, 8, 16, 24];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64'];
  var BASE64_ENCODE_CHAR = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

  var blocks = [],
      buffer8;
  if (ARRAY_BUFFER) {
    var buffer = new ArrayBuffer(68);
    buffer8 = new Uint8Array(buffer);
    blocks = new Uint32Array(buffer);
  }

  if (root.JS_MD5_NO_NODE_JS || !Array.isArray) {
    Array.isArray = function (obj) {
      return Object.prototype.toString.call(obj) === '[object Array]';
    };
  }

  if (ARRAY_BUFFER && (root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) {
    ArrayBuffer.isView = function (obj) {
      return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
  }

  /**
   * @method hex
   * @memberof md5
   * @description Output hash as hex string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} Hex string
   * @example
   * md5.hex('The quick brown fox jumps over the lazy dog');
   * // equal to
   * md5('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method digest
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.digest('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method array
   * @memberof md5
   * @description Output hash as bytes array
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Array} Bytes array
   * @example
   * md5.array('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method arrayBuffer
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.arrayBuffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof md5
   * @description Output hash as ArrayBuffer
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {ArrayBuffer} ArrayBuffer
   * @example
   * md5.buffer('The quick brown fox jumps over the lazy dog');
   */
  /**
   * @method base64
   * @memberof md5
   * @description Output hash as base64 string
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {String} base64 string
   * @example
   * md5.base64('The quick brown fox jumps over the lazy dog');
   */
  var createOutputMethod = function createOutputMethod(outputType) {
    return function (message) {
      return new Md5(true).update(message)[outputType]();
    };
  };

  /**
   * @method create
   * @memberof md5
   * @description Create Md5 object
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.create();
   */
  /**
   * @method update
   * @memberof md5
   * @description Create and update Md5 object
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @example
   * var hash = md5.update('The quick brown fox jumps over the lazy dog');
   * // equal to
   * var hash = md5.create();
   * hash.update('The quick brown fox jumps over the lazy dog');
   */
  var createMethod = function createMethod() {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Md5();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function nodeWrap(method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function nodeMethod(message) {
      if (typeof message === 'string') {
        return crypto.createHash('md5').update(message, 'utf8').digest('hex');
      } else {
        if (message === null || message === undefined) {
          throw ERROR;
        } else if (message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        }
      }
      if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) {
        return crypto.createHash('md5').update(new Buffer(message)).digest('hex');
      } else {
        return method(message);
      }
    };
    return nodeMethod;
  };

  /**
   * Md5 class
   * @class Md5
   * @description This is internal class.
   * @see {@link md5.create}
   */
  function Md5(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
      this.buffer8 = buffer8;
    } else {
      if (ARRAY_BUFFER) {
        var buffer = new ArrayBuffer(68);
        this.buffer8 = new Uint8Array(buffer);
        this.blocks = new Uint32Array(buffer);
      } else {
        this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      }
    }
    this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  /**
   * @method update
   * @memberof Md5
   * @instance
   * @description Update hash
   * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
   * @returns {Md5} Md5 object.
   * @see {@link md5.update}
   */
  Md5.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }

    var notString,
        type = typeof message === 'undefined' ? 'undefined' : _typeof(message);
    if (type !== 'string') {
      if (type === 'object') {
        if (message === null) {
          throw ERROR;
        } else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) {
          message = new Uint8Array(message);
        } else if (!Array.isArray(message)) {
          if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) {
            throw ERROR;
          }
        }
      } else {
        throw ERROR;
      }
      notString = true;
    }
    var code,
        index = 0,
        i,
        length = message.length,
        blocks = this.blocks;
    var buffer8 = this.buffer8;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = blocks[16];
        blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if (notString) {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            buffer8[i++] = message[index];
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
          }
        }
      } else {
        if (ARRAY_BUFFER) {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              buffer8[i++] = code;
            } else if (code < 0x800) {
              buffer8[i++] = 0xc0 | code >> 6;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else if (code < 0xd800 || code >= 0xe000) {
              buffer8[i++] = 0xe0 | code >> 12;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              buffer8[i++] = 0xf0 | code >> 18;
              buffer8[i++] = 0x80 | code >> 12 & 0x3f;
              buffer8[i++] = 0x80 | code >> 6 & 0x3f;
              buffer8[i++] = 0x80 | code & 0x3f;
            }
          }
        } else {
          for (i = this.start; index < length && i < 64; ++index) {
            code = message.charCodeAt(index);
            if (code < 0x80) {
              blocks[i >> 2] |= code << SHIFT[i++ & 3];
            } else if (code < 0x800) {
              blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else if (code < 0xd800 || code >= 0xe000) {
              blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            } else {
              code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
              blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[i++ & 3];
              blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[i++ & 3];
            }
          }
        }
      }
      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Md5.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks,
        i = this.lastByteIndex;
    blocks[i >> 2] |= EXTRA[i & 3];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = blocks[16];
      blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.bytes << 3;
    blocks[15] = this.hBytes << 3 | this.bytes >>> 29;
    this.hash();
  };

  Md5.prototype.hash = function () {
    var a,
        b,
        c,
        d,
        bc,
        da,
        blocks = this.blocks;

    if (this.first) {
      a = blocks[0] - 680876937;
      a = (a << 7 | a >>> 25) - 271733879 << 0;
      d = (-1732584194 ^ a & 2004318071) + blocks[1] - 117830708;
      d = (d << 12 | d >>> 20) + a << 0;
      c = (-271733879 ^ d & (a ^ -271733879)) + blocks[2] - 1126478375;
      c = (c << 17 | c >>> 15) + d << 0;
      b = (a ^ c & (d ^ a)) + blocks[3] - 1316259209;
      b = (b << 22 | b >>> 10) + c << 0;
    } else {
      a = this.h0;
      b = this.h1;
      c = this.h2;
      d = this.h3;
      a += (d ^ b & (c ^ d)) + blocks[0] - 680876936;
      a = (a << 7 | a >>> 25) + b << 0;
      d += (c ^ a & (b ^ c)) + blocks[1] - 389564586;
      d = (d << 12 | d >>> 20) + a << 0;
      c += (b ^ d & (a ^ b)) + blocks[2] + 606105819;
      c = (c << 17 | c >>> 15) + d << 0;
      b += (a ^ c & (d ^ a)) + blocks[3] - 1044525330;
      b = (b << 22 | b >>> 10) + c << 0;
    }

    a += (d ^ b & (c ^ d)) + blocks[4] - 176418897;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[5] + 1200080426;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[6] - 1473231341;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[7] - 45705983;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[8] + 1770035416;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[9] - 1958414417;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[10] - 42063;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[11] - 1990404162;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (d ^ b & (c ^ d)) + blocks[12] + 1804603682;
    a = (a << 7 | a >>> 25) + b << 0;
    d += (c ^ a & (b ^ c)) + blocks[13] - 40341101;
    d = (d << 12 | d >>> 20) + a << 0;
    c += (b ^ d & (a ^ b)) + blocks[14] - 1502002290;
    c = (c << 17 | c >>> 15) + d << 0;
    b += (a ^ c & (d ^ a)) + blocks[15] + 1236535329;
    b = (b << 22 | b >>> 10) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[1] - 165796510;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[6] - 1069501632;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[11] + 643717713;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[0] - 373897302;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[5] - 701558691;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[10] + 38016083;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[15] - 660478335;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[4] - 405537848;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[9] + 568446438;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[14] - 1019803690;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[3] - 187363961;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[8] + 1163531501;
    b = (b << 20 | b >>> 12) + c << 0;
    a += (c ^ d & (b ^ c)) + blocks[13] - 1444681467;
    a = (a << 5 | a >>> 27) + b << 0;
    d += (b ^ c & (a ^ b)) + blocks[2] - 51403784;
    d = (d << 9 | d >>> 23) + a << 0;
    c += (a ^ b & (d ^ a)) + blocks[7] + 1735328473;
    c = (c << 14 | c >>> 18) + d << 0;
    b += (d ^ a & (c ^ d)) + blocks[12] - 1926607734;
    b = (b << 20 | b >>> 12) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[5] - 378558;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[8] - 2022574463;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[11] + 1839030562;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[14] - 35309556;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[1] - 1530992060;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[4] + 1272893353;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[7] - 155497632;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[10] - 1094730640;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[13] + 681279174;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[0] - 358537222;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[3] - 722521979;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[6] + 76029189;
    b = (b << 23 | b >>> 9) + c << 0;
    bc = b ^ c;
    a += (bc ^ d) + blocks[9] - 640364487;
    a = (a << 4 | a >>> 28) + b << 0;
    d += (bc ^ a) + blocks[12] - 421815835;
    d = (d << 11 | d >>> 21) + a << 0;
    da = d ^ a;
    c += (da ^ b) + blocks[15] + 530742520;
    c = (c << 16 | c >>> 16) + d << 0;
    b += (da ^ c) + blocks[2] - 995338651;
    b = (b << 23 | b >>> 9) + c << 0;
    a += (c ^ (b | ~d)) + blocks[0] - 198630844;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[7] + 1126891415;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[14] - 1416354905;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[5] - 57434055;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[12] + 1700485571;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[3] - 1894986606;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[10] - 1051523;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[1] - 2054922799;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[8] + 1873313359;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[15] - 30611744;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[6] - 1560198380;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[13] + 1309151649;
    b = (b << 21 | b >>> 11) + c << 0;
    a += (c ^ (b | ~d)) + blocks[4] - 145523070;
    a = (a << 6 | a >>> 26) + b << 0;
    d += (b ^ (a | ~c)) + blocks[11] - 1120210379;
    d = (d << 10 | d >>> 22) + a << 0;
    c += (a ^ (d | ~b)) + blocks[2] + 718787259;
    c = (c << 15 | c >>> 17) + d << 0;
    b += (d ^ (c | ~a)) + blocks[9] - 343485551;
    b = (b << 21 | b >>> 11) + c << 0;

    if (this.first) {
      this.h0 = a + 1732584193 << 0;
      this.h1 = b - 271733879 << 0;
      this.h2 = c - 1732584194 << 0;
      this.h3 = d + 271733878 << 0;
      this.first = false;
    } else {
      this.h0 = this.h0 + a << 0;
      this.h1 = this.h1 + b << 0;
      this.h2 = this.h2 + c << 0;
      this.h3 = this.h3 + d << 0;
    }
  };

  /**
   * @method hex
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.hex();
   */
  Md5.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;

    return HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F];
  };

  /**
   * @method toString
   * @memberof Md5
   * @instance
   * @description Output hash as hex string
   * @returns {String} Hex string
   * @see {@link md5.hex}
   * @example
   * hash.toString();
   */
  Md5.prototype.toString = Md5.prototype.hex;

  /**
   * @method digest
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.digest}
   * @example
   * hash.digest();
   */
  Md5.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0,
        h1 = this.h1,
        h2 = this.h2,
        h3 = this.h3;
    return [h0 & 0xFF, h0 >> 8 & 0xFF, h0 >> 16 & 0xFF, h0 >> 24 & 0xFF, h1 & 0xFF, h1 >> 8 & 0xFF, h1 >> 16 & 0xFF, h1 >> 24 & 0xFF, h2 & 0xFF, h2 >> 8 & 0xFF, h2 >> 16 & 0xFF, h2 >> 24 & 0xFF, h3 & 0xFF, h3 >> 8 & 0xFF, h3 >> 16 & 0xFF, h3 >> 24 & 0xFF];
  };

  /**
   * @method array
   * @memberof Md5
   * @instance
   * @description Output hash as bytes array
   * @returns {Array} Bytes array
   * @see {@link md5.array}
   * @example
   * hash.array();
   */
  Md5.prototype.array = Md5.prototype.digest;

  /**
   * @method arrayBuffer
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.arrayBuffer}
   * @example
   * hash.arrayBuffer();
   */
  Md5.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(16);
    var blocks = new Uint32Array(buffer);
    blocks[0] = this.h0;
    blocks[1] = this.h1;
    blocks[2] = this.h2;
    blocks[3] = this.h3;
    return buffer;
  };

  /**
   * @method buffer
   * @deprecated This maybe confuse with Buffer in node.js. Please use arrayBuffer instead.
   * @memberof Md5
   * @instance
   * @description Output hash as ArrayBuffer
   * @returns {ArrayBuffer} ArrayBuffer
   * @see {@link md5.buffer}
   * @example
   * hash.buffer();
   */
  Md5.prototype.buffer = Md5.prototype.arrayBuffer;

  /**
   * @method base64
   * @memberof Md5
   * @instance
   * @description Output hash as base64 string
   * @returns {String} base64 string
   * @see {@link md5.base64}
   * @example
   * hash.base64();
   */
  Md5.prototype.base64 = function () {
    var v1,
        v2,
        v3,
        base64Str = '',
        bytes = this.array();
    for (var i = 0; i < 15;) {
      v1 = bytes[i++];
      v2 = bytes[i++];
      v3 = bytes[i++];
      base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[(v1 << 4 | v2 >>> 4) & 63] + BASE64_ENCODE_CHAR[(v2 << 2 | v3 >>> 6) & 63] + BASE64_ENCODE_CHAR[v3 & 63];
    }
    v1 = bytes[i];
    base64Str += BASE64_ENCODE_CHAR[v1 >>> 2] + BASE64_ENCODE_CHAR[v1 << 4 & 63] + '==';
    return base64Str;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    /**
     * @method md5
     * @description Md5 hash function, export to global in browsers.
     * @param {String|Array|Uint8Array|ArrayBuffer} message message to hash
     * @returns {String} md5 hashes
     * @example
     * md5(''); // d41d8cd98f00b204e9800998ecf8427e
     * md5('The quick brown fox jumps over the lazy dog'); // 9e107d9d372bb6826bd81d3542a419d6
     * md5('The quick brown fox jumps over the lazy dog.'); // e4d909c290d0fb1ca068ffaddf22cbd0
     *
     * // It also supports UTF-8 encoding
     * md5('中文'); // a7bac2239fcdcb3a067903d8077c4a07
     *
     * // It also supports byte `Array`, `Uint8Array`, `ArrayBuffer`
     * md5([]); // d41d8cd98f00b204e9800998ecf8427e
     * md5(new Uint8Array([])); // d41d8cd98f00b204e9800998ecf8427e
     */
    root.md5 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }

    // Detect buggy property enumeration order in older V8 versions.

    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
    test1[5] = 'de';
    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });
    if (order2.join('') !== '0123456789') {
      return false;
    }

    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var printWarning = function printWarning() {};

{
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + _typeof(typeSpecs[typeSpecName]) + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : _typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function () {
  {
    loggedTypeFailures = {};
  }
};

module.exports = checkPropTypes;

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function printWarning() {};

{
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
          err.name = 'Invariant Violation';
          throw err;
        } else if (typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.');
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
}

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.9.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

{
  (function () {
    'use strict';

    Object.defineProperty(exports, '__esModule', { value: true });

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol.for;

    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
    // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?
    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || (typeof type === 'undefined' ? 'undefined' : _typeof(type)) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }

    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */

    var lowPriorityWarning = function lowPriorityWarning() {};

    {
      var printWarning = function printWarning(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.warn(message);
        }
        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function lowPriorityWarning(condition, format) {
        if (format === undefined) {
          throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }

    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    }

    // AsyncMode is deprecated along with isAsyncMode
    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;

    var hasWarnedAboutDeprecatedIsAsyncMode = false;

    // AsyncMode should be deprecated
    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, "The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


{
  module.exports = __webpack_require__(/*! ./cjs/react-is.development */ "./node_modules/react-is/cjs/react-is.development.js");
}

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/actions/userAuth.js":
/*!*********************************!*\
  !*** ./src/actions/userAuth.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserAuth = undefined;

var _userAuth = __webpack_require__(/*! ../constants/userAuth */ "./src/constants/userAuth.js");

var setUserAuth = exports.setUserAuth = function setUserAuth(data) {
  // 缓存 login 的信息
  return {
    type: _userAuth.SET_USERAUTH,
    data: data
  };
}; /**
    * captern
    * 2019-09-18
    * https://gitee.com/captern
    * captern@icloud.com
    */

/***/ }),

/***/ "./src/components/login/index.js":
/*!***************************************!*\
  !*** ./src/components/login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .?taro&type=template&parse=COMPONENT& */ "./src/components/login/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .?taro&type=script&parse=COMPONENT& */ "./src/components/login/index.js?taro&type=script&parse=COMPONENT&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/components/login/index.js?taro&type=script&parse=COMPONENT&":
/*!****************************************************************!*\
  !*** ./src/components/login?taro&type=script&parse=COMPONENT& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=script&parse=COMPONENT& */ "./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/login/index.js?taro&type=script&parse=COMPONENT&");
/* harmony import */ var _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_script_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/login/index.js?taro&type=template&parse=COMPONENT&":
/*!******************************************************************!*\
  !*** ./src/components/login?taro&type=template&parse=COMPONENT& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_chengxiaodan_Documents_workSpace_npmpackages_taro_ptpassport_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=/Users/chengxiaodan/Documents/workSpace/npmpackages/taro-ptpassport/src!../../../node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!.?taro&type=template&parse=COMPONENT& */ "./node_modules/file-loader/dist/cjs.js?name=[path][name].wxml&context=/Users/chengxiaodan/Documents/workSpace/npmpackages/taro-ptpassport/src!./node_modules/@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/components/login/index.js?taro&type=template&parse=COMPONENT&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_Users_chengxiaodan_Documents_workSpace_npmpackages_taro_ptpassport_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_Users_chengxiaodan_Documents_workSpace_npmpackages_taro_ptpassport_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_Users_chengxiaodan_Documents_workSpace_npmpackages_taro_ptpassport_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_Users_chengxiaodan_Documents_workSpace_npmpackages_taro_ptpassport_src_node_modules_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_js_taro_type_template_parse_COMPONENT___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/login/index.scss":
/*!*****************************************!*\
  !*** ./src/components/login/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/http/requestuser.jsx":
/*!**********************************!*\
  !*** ./src/http/requestuser.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * putao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2020-03-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * webclient@putao.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _userAuth = __webpack_require__(/*! ./userAuth */ "./src/http/userAuth.jsx");

var _userAuth2 = _interopRequireDefault(_userAuth);

var _signStr = __webpack_require__(/*! ../utils/signStr */ "./src/utils/signStr.js");

var _tips = __webpack_require__(/*! ../utils/tips */ "./src/utils/tips.js");

var _tips2 = _interopRequireDefault(_tips);

var _base = __webpack_require__(/*! ../utils/base */ "./src/utils/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var httpRequestUser = function () {
  function httpRequestUser() {
    _classCallCheck(this, httpRequestUser);
  }

  _createClass(httpRequestUser, null, [{
    key: 'request',
    value: function request(url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
      var interfaceCode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var config = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _taroWeapp2.default.$config;
      var toast = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'center';

      var _this2 = this;

      var signType = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'none';
      var retryTimes = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 3;

      return new Promise(function (resolve, reject) {
        _this2._requestFun(url, resolve, reject, data, method, interfaceCode, config, toast, signType, retryTimes);
      });
    }
  }, {
    key: '_requestFun',
    value: function _requestFun(url, resolve, reject) {
      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var method = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'GET';
      var interfaceCode = arguments[5];
      var config = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _taroWeapp2.default.$config;
      var toast = arguments[7];

      var _this3 = this;

      var signType = arguments[8];
      var retryTimes = arguments[9];

      var userAuth = _base2.default.getStorage(_userAuth.KEY_STORAGE_USERAUTH);
      var tokenStr = '';
      if (userAuth && userAuth.token && userAuth.token != '') {
        tokenStr = 'Bearer ' + userAuth.token;
      }
      var oldData = data;
      console.log(url + '请求参数', data);
      _taroWeapp2.default.request({
        url: url,
        method: method,
        data: (0, _signStr.jsonInteger)(data, signType, config.currentStr),
        header: {
          'content-type': 'application/x-www-form-urlencoded',
          appkey: config.appkey,
          Authorization: tokenStr // access  token
        },
        success: function success(res) {
          console.log(url + '返回数据', res.data);
          var statusCode = res.statusCode.toString();
          if (statusCode.startsWith('2')) {
            if (res.data.code == 0) {
              resolve(res.data);
            } else if (res.data.code == 21001) {
              if (retryTimes <= 0) {
                reject(statusCode + '-重试3次失败');
              } else {
                retryTimes = retryTimes - 1;
                _this3.refreshToken(url, resolve, reject, oldData, method, interfaceCode, config, toast, signType, retryTimes);
              }
            } else if (res.data.code == 21000 || res.data.code === 5003 || res.data.code === 5005 || res.data.code === 5000 || res.data.code === 5004) {
              if (retryTimes <= 0) {
                reject(statusCode + '-重试3次失败');
              } else {
                retryTimes = retryTimes - 1;
                _this3._refetch(url, resolve, reject, oldData, method, interfaceCode, config, toast, signType, retryTimes);
              }
            } else {
              _tips2.default.loaded();
              resolve(res.data);
            }
          } else if (statusCode == '404') {
            _tips2.default.loaded();
            _tips2.default.toast('服务器请求错误' + interfaceCode + '-' + statusCode, 'none');
            reject(statusCode);
          } else {
            var msg = '服务器请求错误' + interfaceCode + '-' + statusCode + '' + (res.data.msg || res.data.message);
            console.log(msg);
            _tips2.default.toast(msg, 'none');
            resolve(msg);
          }
        },
        fail: function fail(err) {
          // 失败了。也需要跳转到无网页面
          var msg = '服务器请求错误' + interfaceCode + '-' + JSON.stringify(err);
          console.log(msg);
          _tips2.default.loaded();
          _tips2.default.toast(msg, 'none');
          reject(err);
        }
      });
    }
  }, {
    key: 'refreshToken',
    value: function refreshToken() {
      for (var _len = arguments.length, param = Array(_len), _key = 0; _key < _len; _key++) {
        param[_key] = arguments[_key];
      }

      var _this = this;
      _userAuth2.default.refreshToken().then(function (res) {
        _this._requestFun.apply(_this, param);
        if (res.code != 0) {
          _tips2.default.toast('刷新token失败' + param[5] + '-' + res.code, 'none');
        }
      }).catch(function (error) {
        _this._requestFun.apply(_this, param);
        var msg = '刷新token失败' + param[5] + '-' + error;
        _tips2.default.toast(msg, 'none');
        console.log(msg);
      });
    }
  }, {
    key: '_refetch',
    value: function _refetch() {
      for (var _len2 = arguments.length, param = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        param[_key2] = arguments[_key2];
      }

      var _this = this;
      _userAuth2.default.clearAuthInfo();
      _userAuth2.default.checkUserAuth(function (result, code) {
        if (result == _userAuth.STATUS_WXLOGIN_SCCESS && code == _userAuth.CODE_BINDED) {
          _this._requestFun.apply(_this, param);
        } else {
          _this._requestFun.apply(_this, param);
          var msg = '重新授权失败-' + param[5] + '-' + code;
          _tips2.default.toast(msg, 'none');
          console.log(msg + '重新授权失败，不应该执行到这里');
        }
      });
    }
  }]);

  return httpRequestUser;
}();

exports.default = httpRequestUser;

/***/ }),

/***/ "./src/http/userApis/authorApi.js":
/*!****************************************!*\
  !*** ./src/http/userApis/authorApi.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * putao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 20120-03-20
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * webclient@putao.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _requestuser = __webpack_require__(/*! ../requestuser */ "./src/http/requestuser.jsx");

var _requestuser2 = _interopRequireDefault(_requestuser);

var _config = __webpack_require__(/*! ../../config */ "./src/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthorApi = function () {
  function AuthorApi() {
    _classCallCheck(this, AuthorApi);
  }

  // 刷新token


  _createClass(AuthorApi, null, [{
    key: 'refreshToken',
    value: function refreshToken(data, config) {
      return _requestuser2.default.request(config.authHost + '/refresh/token', data, 'POST', _config.interfaceCode.refreshToken, config);
    }
    // 账户绑定微信

  }, {
    key: 'bindWeixin',
    value: function bindWeixin(data, config) {
      return _requestuser2.default.request(config.authHost + '/oauth2/bind/weixin', data, 'POST', _config.interfaceCode.bindWeixin, config);
    }

    //  微信登录

  }, {
    key: 'wxLogin',
    value: function wxLogin(data, config) {
      return _requestuser2.default.request(config.authHost + '/oauth2/wechat-miniapp', data, 'POST', _config.interfaceCode.wxLogin, config);
    }
    // 手机验证码登录

  }, {
    key: 'mobileCodeLogin',
    value: function mobileCodeLogin(data, config) {
      return _requestuser2.default.request(config.authHost + '/login/mobile/code', data, 'POST', _config.interfaceCode.mobileCodeLogin, config);
    }

    // 发送短信验证码

  }, {
    key: 'sendMobileCode',
    value: function sendMobileCode(data, config) {
      return _requestuser2.default.request(config.authHost + '/validation/mobile/send', data, 'POST', _config.interfaceCode.sendMobileCode, config);
    }
    // 获取用户信息

  }, {
    key: 'getUserInfo',
    value: function getUserInfo(config) {
      return _requestuser2.default.request(config.authHost + '/account/info', {}, 'GET', _config.interfaceCode.getUserInfo, config);
    }
  }]);

  return AuthorApi;
}();

exports.default = AuthorApi;

/***/ }),

/***/ "./src/http/userAuth.jsx":
/*!*******************************!*\
  !*** ./src/http/userAuth.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.KEY_STORAGE_HASLOGIN = exports.KEY_STORAGE_TOCKEN_NOACCOUNT = exports.KEY_STORAGE_WXUSERAUTH = exports.KEY_STORAGE_USERAUTH = exports.CODE_NOBIND = exports.CODE_BINDED = exports.STATUS_WXLOGIN_FAILED = exports.STATUS_WXLOGIN_SCCESS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * putao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2019-03-21
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * webclient@putao.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 微信授权成功和绑定作为不可拆封的单元，避免微信授权成功后过了很久才绑定，导致token失效而绑定失败
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _userAuth = __webpack_require__(/*! ../actions/userAuth */ "./src/actions/userAuth.js");

var _authorApi = __webpack_require__(/*! ./userApis/authorApi */ "./src/http/userApis/authorApi.js");

var _authorApi2 = _interopRequireDefault(_authorApi);

var _base = __webpack_require__(/*! ../utils/base */ "./src/utils/base.js");

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var STATUS_WXLOGIN_SCCESS = exports.STATUS_WXLOGIN_SCCESS = 1; //微信登录成功
var STATUS_WXLOGIN_FAILED = exports.STATUS_WXLOGIN_FAILED = 3; //微信登录失败
var CODE_BINDED = exports.CODE_BINDED = 2; //绑定成功
var CODE_NOBIND = exports.CODE_NOBIND = 5; //没有绑定

var KEY_STORAGE_USERAUTH = exports.KEY_STORAGE_USERAUTH = 'user_auth'; // 用户账户信息相关
var KEY_STORAGE_WXUSERAUTH = exports.KEY_STORAGE_WXUSERAUTH = 'wx_userinfo'; // 用户微信信息
var KEY_STORAGE_TOCKEN_NOACCOUNT = exports.KEY_STORAGE_TOCKEN_NOACCOUNT = 'token_noaccount'; // 未绑定账户的微信收取登录返回的token
var KEY_STORAGE_HASLOGIN = exports.KEY_STORAGE_HASLOGIN = 'hasBind'; //有无登录成功，微信登录成功，并且绑定成功

var userAuthFun = function () {
  function userAuthFun() {
    _classCallCheck(this, userAuthFun);
  }

  _createClass(userAuthFun, null, [{
    key: 'checkUserAuth',
    value: function checkUserAuth(callback) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _taroWeapp2.default.$config;

      if (this.hasLogin()) {
        callback && callback(STATUS_WXLOGIN_SCCESS, CODE_BINDED);
        return;
      }
      _taroWeapp2.default.login({
        complete: function complete(res) {
          if (res.code) {
            //发起网络请求
            console.log(res.code + ' van wx login code');
            userAuthFun.wxLogin(res.code, config).then(function (res) {
              console.log('微信授权登录成功>>>>>' + res.status);
              callback && callback(res.status, res.code);
            }).catch(function (error) {
              console.log('微信授权登录失败' + error);
              callback && callback(STATUS_WXLOGIN_FAILED, error);
            });
          } else {
            console.log('登录失败！' + res.errMsg);
            callback && callback(STATUS_WXLOGIN_FAILED, res.errMsg);
          }
        }
      });
    }

    //是否登录成功：包含微信授权成功，并且绑定成功

  }, {
    key: 'hasLogin',
    value: function hasLogin() {
      var result = _base2.default.getStorage(KEY_STORAGE_HASLOGIN);
      return result == true;
    }
    //清楚通行证相关信息，重新授权登录

  }, {
    key: 'clearAuthInfo',
    value: function clearAuthInfo() {
      _base2.default.removeStorage(KEY_STORAGE_USERAUTH);
      _base2.default.removeStorage(KEY_STORAGE_WXUSERAUTH);
      _base2.default.removeStorage(KEY_STORAGE_TOCKEN_NOACCOUNT);
      _base2.default.removeStorage(KEY_STORAGE_HASLOGIN);
    }
  }, {
    key: 'wxLogin',
    value: function wxLogin(code, config) {
      var _this = this;
      return new Promise(function (resolve, reject) {
        var postData = {
          client_id: config.appid,
          code: code
        };
        _authorApi2.default.wxLogin(postData, config).then(function (res) {
          console.log(res);
          if (res.code === 0) {
            if (res.data.uid == '') {
              console.log('此用户未进行过账号绑定----需要进行手机登录' + JSON.stringify(res.data));
              _base2.default.setStorage(KEY_STORAGE_USERAUTH, res.data);
              _taroWeapp2.default.$store.dispatch((0, _userAuth.setUserAuth)(res.data));
              _base2.default.setStorage(KEY_STORAGE_TOCKEN_NOACCOUNT, res.data.token);
              resolve({ status: STATUS_WXLOGIN_SCCESS, code: CODE_NOBIND });
            } else {
              _base2.default.setStorage(KEY_STORAGE_USERAUTH, res.data);
              _taroWeapp2.default.$store.dispatch((0, _userAuth.setUserAuth)(res.data));
              console.log('此用户绑定过');
              _base2.default.setStorage(KEY_STORAGE_HASLOGIN, true);
              resolve({ status: STATUS_WXLOGIN_SCCESS, code: CODE_BINDED });
            }
          } else {
            resolve({ status: STATUS_WXLOGIN_FAILED, code: res.code });
            console.log(' error >>>' + res.code);
          }
        }).catch(function (error) {
          console.log('>>>>errorbbbbbb ' + error);
          reject(error);
        });
      });
    }

    //手机验证码登录


    //绑定微信账号

  }, {
    key: 'refreshToken',


    //刷新token
    value: function refreshToken(config) {
      return new Promise(function (resolve, reject) {
        var userAuth = _base2.default.getStorage(KEY_STORAGE_USERAUTH);
        if (userAuth) {
          _authorApi2.default.refreshToken({
            refresh_token: userAuth.refresh_token
          }, config).then(function (res) {
            if (res.code === 0) {
              _base2.default.setStorage(KEY_STORAGE_USERAUTH, res.data);
              _taroWeapp2.default.$store.dispatch((0, _userAuth.setUserAuth)(res.data));
            }
            resolve(res);
          }).catch(function (error) {
            reject(error);
          });
        } else {
          reject('没有微信授权数据');
        }
      });
    }
  }, {
    key: 'getChildMsg',
    value: function getChildMsg() {}
  }]);

  return userAuthFun;
}();

userAuthFun.mobileCodeLogin = function (mobile, code, config) {
  return new Promise(function (resolve, reject) {
    var data = {
      fullmobile: mobile,
      code: code
    };
    _authorApi2.default.mobileCodeLogin(data, config).then(function (res) {
      console.log('手机验证码登录返回：' + res);
      if (res.code === 0) {
        _base2.default.setStorage(KEY_STORAGE_USERAUTH, res.data);
        _taroWeapp2.default.$store.dispatch((0, _userAuth.setUserAuth)(res.data));
      }
      resolve(res);
    }).catch(function (error) {
      reject(error);
      console.log('这里不会执行到，http里面已经捕获异常----');
    });
  });
};

userAuthFun.bindWinxin = function (config) {
  return new Promise(function (resolve, reject) {
    var token_noaccount = _base2.default.getStorage(KEY_STORAGE_TOCKEN_NOACCOUNT);
    var userAuth = _base2.default.getStorage(KEY_STORAGE_USERAUTH);
    var data = {
      bind_token: token_noaccount || userAuth.token
    };
    _authorApi2.default.bindWeixin(data, config).then(function (res) {
      console.log('绑定账户微信返回' + res);
      if (res.code == 0) {
        _base2.default.setStorage(KEY_STORAGE_HASLOGIN, true);
        resolve(res);
      } else {
        resolve(res);
      }
    }).catch(function (error) {
      reject(error);
    });
  });
};

exports.default = userAuthFun;

/***/ }),

/***/ "./src/static/btn/btn_32_ghost_close@3x.png":
/*!**************************************************!*\
  !*** ./src/static/btn/btn_32_ghost_close@3x.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/icon/icon_16_again_g@3x.png":
/*!************************************************!*\
  !*** ./src/static/icon/icon_16_again_g@3x.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAY9QTFRFpqamqKiopqamqamppqampaWlpaWlpaWlpaWlpqamrq6up6enpaWlpqamqKiopaWlpaWlp6enpqamp6enpaWlpqamqqqqpqampaWlpqampqams7Ozpqampqampqamp6enp6enpqampqampaWlpqampqampqampqamtra2paWlpqampqampqampqampqamqqqqp6enpqamp6enpqampqamtra2////pqampaWlqKiopqampqampqampaWlpqampaWlqqqqpaWlpaWlqqqqpaWlpaWlpaWlp6enpaWlpqampqamsbGxpqampaWlpqampaWlpaWlp6enp6enqKiopqampqampqampqamp6enpqampqampaWlpaWlpqampqamp6enpqamqqqqpaWlqKioqqqqpqampaWlra2tpaWlpaWlzMzMqqqqubm5pqamqqqqpaWlpqampqampaWlpqam////p6enpqamp6env7+/qamppaWlp6enr6+vpqampqampqamqqqqpqampaWlAAAApaWlXfpqIgAAAIR0Uk5TmEbRPsVKM5n10xZl/XIm3u4x0IVvdhgul1PUCvBFlUs3w7I2/PNkwA59p2q9Vv4SYpCCxnkHAV+LSY2k6+F1zAYlIgzN+rw9WOS0DdzVzuO+YFdP14Tn+Gjtpo70OboggQ/dOBuP8RylxwUkC1wJ5tq3EbECcShOCEH3HRCbo/sDy2kANmyGDAAAAh5JREFUSMe1ludb2zAQxgNlFMooZZVNSwd7tey9Shr23nskgQQI2cOOE+kPx2DL1sl24nzg/ZI8997vkWSdTrKgDGWRfgrzC7x5GQDTUxjjjzNSqHXkV1sjPzrpPhEMgU/4VQ7x36y/cwETHYxZl3QBYfnNj9tn+SIMdVD5oAO4ZXd+AWv1uO9jgcEVnFLflxigBqfRyj0E5tMB+HMzDeTi9Nq9poAcEwBOhBTgg8aMePo73MVHX0CQVwCOSZ/orZO96FGEiocJMAXSu/sGqG8Y/a06TgJkwwGGwb7efVWdoAxYIFA/B0vBoa5bBrKYNVRA4GFVcaIS4PNCoNQHiUXF2Zf3YS4BiSamoD3EsJHSEIaWaWCHATaJcUwd0eq/336QeJIBYnHixFRA1LOVH3+NPrnYQ7ZNgAAARPmuztvPLzTHeJ3ebIuJRuGlt84M4CTAlUlgjQBn5oB75YOHzAF+kv8fmQLuLgnAmQOSyoy2IDDd4O+q0uYHbkn+ngsAZbVi7CdbFqjnSRngkG736PlRijpgKw2o+fEZAOyQ+Ooitd7krVrEHLhQ0D/V8WzGpO/vv6R7j90QEEffXvf+WYPHagNeWag8Tee7Ye44ZdEGOhVYALXspsq/QBoAXSeM5yMgHQCFeP30yIbOPS0p7NSmxzk7MgQQCjLz2jss0X8JUA07aTsm9c9tuYyeDkwnCoSDJ2ehVG+NjB8n7wi8AI6KcUWTmxIbAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/static/icon/icon_16_again_r@3x.png":
/*!************************************************!*\
  !*** ./src/static/icon/icon_16_again_r@3x.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAY9QTFRF+yVK+idK+yhN+iZJ+iZK/CZM+iZJ+ihL+iVK+iVK/y5R+iZJ+iVK+iZL+iZK+iVK/ytK+iZM+ipO////+iVJ+iVK+ylK/CZJ/zNN/zdb+SZL+iVJ+iZK+iVJ+iZJ+idK/ytV+ydJ+SVK+iZL+yZK+iVJ+iVK+SZK/CVL+iZK+iZK/yhK+iVJ+iZJ+iZK+iVK+SVL+iZK+yZK+iVJ/0lt/ChK+yVK+SVJ+SdK+ydJ+idL+SdJ+iZJ+SdO+iZK+iZK/ytV/ylM/yZL/ytV+iZJ+iVJ+SVJ/ydO+iZK+iZJ+iZJ+iVK+SZK+idK/CdK+iZK+iZJ+SZK+SZJ+SZK+iVJ+SVJ+SZK+ilN+SdJ+iZK+SVJ+SZJ+SZL+yhM+yZL/zNV/yZM+SZK+iVK/yhQ+iVJ+iVJ+iVJ+iVK/y5S+SVK/y1L/zlV+SdL/zNm+iVJ/y5d/ytO+SZJ+SZK+SVJ/4CA+iZK/zBQ/yxP/yZN+ydL/CdL+iVJ/0Bg+iZK+iZK+iZJ+idL+iZK/1VVAAAA+SVJD6Q4TAAAAIR0Uk5TPphG0cVKmTP10xZl/V+9Nxg2MQHU/EVJCg6F/uvGp28SfeFqcvCQ3kvulSbA89CXgmR5pAdTdbJWdmKLwy6NzAYlIgz6zeMNvvTtuuRoT6a8tIHX8dXdOISO3FdYOT0PG+dgIM74j6Uc2hEJXAXHCyTmt7ECcRAdKEFO9wibo/tpywMAPmmf7AAAAiJJREFUSMe1ludb2zAQxgOltIUCbSmrpUAHLXt3QFsS9iijJOydMBIgi+xlJ7H0h2OwZetkO3E+8H5Jnnvv90iyTidZUImySD9VlS/Cz0oAbFaM8fMpKdTSNPyxh5/84T0SDIFqfC+3+G86WjuLiZZHDxd0AWH/wc96pvmXGGp5/EYH8Mru3CzW6nY1wgL1W7igfi4wwHdcRFtBCMwVA3B3HQ08xcXlPKWAChMAzmcUwKIx06Ghz94vewMgyCsAx6R/mmiWvfhemoonCWAF6e+/jlHfMN6nOn4CPIED/Ab76htUnZQMlEGgcwaWgltdtwyUM2toh8DNueLEJSAShsC3CCSOFWdV3oeZPCS6mIIOEWODlIZQs08DuwxwQIwl6oj+HfnTQOI5BohliRNTAVHXh3zrffQqwB4yBwESABAV2bG32U80x3iR3myLiUYRprfODOAnwI5JYJ4AZ+aAoPLBM+aAKMlfQaYA3zYBOHNATpnRGgRsjdFfr7T5iU2SfxEAwJu3YqyfLQvUcaUMsE63e3R9K0XdsJUm1PzsFAB2Sfz8mFpvblMtYg5cKOi/6oQOYtL3j27TvcdjCIijOxbDH+bhsXLBKwu9K9L5Lpk7Tlm0gf4JLIBeOwvlnyANgE7zxvMRkA6AMrx+etqlc09LSvq16VnOgwwBhFLMvC7We/VfAlTDzm0skfrn1gJGTwemEyWSqaOzTKG3RsmPk0cE7gC7sHFFcoNd8AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/static/icon/icon_16_arrow_r_w@3x.png":
/*!**************************************************!*\
  !*** ./src/static/icon/icon_16_arrow_r_w@3x.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAAQ5QTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA////Howx5wAAAFl0Uk5T6Swp69SG4KHhnZ6igH+aHCOTmfe0SPY1y/PFi79Gc7wk5yfy5eMi3okUHbVdaqXVYZVtyWUZhBuN/dLZ5GmRiNwge9YIxJByA/tsH0xVdtf+9AEC/HBLzACtv0Y4AAABQElEQVRIx7XW1VYDMRAG4MXd3aW4u0OR0pbdtrBJIZn3fxHgBNqdkjAZ5L/czXdOdJJA2xIVS4VV6x8dWL5lVsoAEG8KX7AOJlvSD2zAZzqkFxivAGgXHkDGVQDdggb54QSAXY8u7ScBXNEgRABOSCDvsUiT63B4jsURBfTxNRadFNBry1jcUkBHzViUKKCXFrHIUUDPLmCxRwE9P4fFJQI9Q+FzbZpSCDwdVEEmN6osaXzAYqcCssqebSxOix+goJSfiG8M6HMCdVdGImvAjBuoRyTODBhUvuLCgAkuGOF2SU8zB/02sZOO9vZpfS8VvVMvXxOm7AvnSl2Da2vYUx84N98PtvfvDxD3iEatvCLALTO1hazrj0ul4BZjdrnnXij5AeaVJccS7fs9LkWdGHOb4F3sLfJ/ng78x8m3z59X+qsCAfoMDk4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/static/icon/icon_16_tick_w@3x.png":
/*!***********************************************!*\
  !*** ./src/static/icon/icon_16_tick_w@3x.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAABGdBTUEAALGPC/xhBQAAALdQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAA////83i7wAAAADx0Uk5T4lf81+jEQGjggYvUIsiJJ2EEjMp+BjqTxbbc6mIxPs6roJqyCX0r5fEBjmzjSKQOEmT40jjGBZAe3swAm5DXyAAAARJJREFUSMft1ddWwkAQgOER7CgWLIgKWOkpRkiY3fd/LlI2kroze8ONzPX3n5yTbGZBGA78p6D/NXx8sdmBY8lo5gtmEKylmgWYeTkHMy8lGHpGkPd0UPBkUPRUUPIWmPm1A2Y+SL/0hOvj4GH61H2bfbJ8GNzfYTwfrxwfBjNUs/xleAFXHawq6rwAF7GiqPUCbrGiqPcC2lguNF7ANZYKnRdwcVkstD58rS4WZqTzYXDj57j3o/XR0Vj5Bj4+S5liQPnktG6LZ8qr450WLdKn/4MqTkn/tyqT4pD0290aF0D6zDKOiibps9s7KsaUz6371RS9hvK9gHMDTQ6OvOQZ7zbzynKOT87Offd7f0/vONgAS6ELBYuO89kAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/static/icon/icon_32_message_red@3x.png":
/*!****************************************************!*\
  !*** ./src/static/icon/icon_32_message_red@3x.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/static/icon/icon_32_phone_red@3x.png":
/*!**************************************************!*\
  !*** ./src/static/icon/icon_32_phone_red@3x.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/utils/signStr.js":
/*!******************************!*\
  !*** ./src/utils/signStr.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jsonInteger = jsonInteger;
exports.getUserSign = getUserSign;
exports.jsonVideoInteger = jsonVideoInteger;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _jsMd = __webpack_require__(/*! js-md5 */ "./node_modules/js-md5/src/md5.js");

var _jsMd2 = _interopRequireDefault(_jsMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function jsonInteger(oldJson) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'base';
  var currentStr = arguments[2];

  if (type === 'none') {
    return oldJson;
  } else if (type === 'user') {
    return getUserSign(oldJson, currentStr);
  } else {
    oldJson.rnd = randomString();
    oldJson.timestamp = timeStamp();
    // 并且将获取cookie的时间戳
    var signature = getSignature(oldJson, type);
    if (type == 'base' || type == 'form') {
      // type 表示 sign 的类型
      oldJson.signature = signature.trim();
    } else {
      oldJson.sign = signature.trim();
    }
    return oldJson;
  }
}

// 获取 用户通行证的 sign
function getUserSign(params, currentStr) {
  var currentStrResult = currentStr || 'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI';
  var keyArray = [];
  for (var key in params) {
    keyArray.push(key.trim());
  }
  // 将键值组成的数组排序
  keyArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  var signature = '';
  keyArray.forEach(function (keyItem) {
    signature += keyItem.trim() + '=' + encodeURIComponent(params[keyItem]) + '&';
  });
  // 秘钥拼接
  // console.log(signature);

  signature = iGetInnerText(signature);
  // console.log(signature);
  var NewSignature = signature.substr(0, signature.length - 1).trim() + currentStrResult;
  // console.log(NewSignature.trim())
  var sign = (0, _jsMd2.default)(NewSignature.trim());
  params.sign = sign;
  return params;
}

// 获取 signature
function getSignature(params, type) {
  var keyArray = [];
  for (var key in params) {
    keyArray.push(key.trim());
  }
  // 将键值组成的数组排序
  keyArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  var signature = '';
  keyArray.forEach(function (keyItem) {
    signature += keyItem.trim() + '=' + params[keyItem] + '&';
  });
  // 秘钥拼接
  if (type == 'user') {
    signature = iGetInnerText(signature);
  }
  var NewSignature = '';
  if (type == 'base' || type == 'user') {
    NewSignature = 'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI' + signature.substr(0, signature.length - 1).trim() + 'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI';
  } else {
    NewSignature = signature.substr(0, signature.length - 1).trim() + 'Q2nxjKVKN5W0djIQ21QjCl538Dwfqc0x';
  }
  // const NewSignature = signature.substr(0, signature.length - 1).trim() + "V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI";
  return (0, _jsMd2.default)(NewSignature.trim());
}

// 获取视频的signature
function jsonVideoInteger(oldJson) {
  oldJson.rnd = randomString();
  oldJson.timestamp = timeStamp();
  // 并且将获取cookie的时间戳
  var signature = getVideoSignature(oldJson);
  oldJson.signature = signature.trim();
  return oldJson;
}
// 获取视频的signature
function getVideoSignature(params) {
  console.log('签名参数', params);
  var keyArray = [];
  for (var key in params) {
    keyArray.push(key.trim());
  }
  // 将键值组成的数组排序
  keyArray.sort(function (a, b) {
    return a.localeCompare(b);
  });
  var signature = '';
  keyArray.forEach(function (keyItem) {
    signature += keyItem.trim() + '=' + params[keyItem] + '&';
  });
  var NewSignature = '';
  NewSignature = signature.substr(0, signature.length - 1).trim() + 'lwJI6lbehhhQLZWOLbEgqcdxuGpyi4WZ';
  return (0, _jsMd2.default)(NewSignature.trim());
}

// 获取10位随机字符串
function randomString(length) {
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  var maxPos = chars.length;
  var pwd = '';
  var lengthNum = length || '8';
  for (var i = 0; i < lengthNum; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd.trim();
}

// 获取时间戳
function timeStamp() {
  var ts = Math.round(new Date().getTime() / 1000);
  return ts;
}

function iGetInnerText(testStr) {
  var resultStr = testStr.replace(/\ +/g, ''); // 去掉空格
  resultStr = testStr.replace(/[ ]/g, ''); // 去掉空格
  resultStr = testStr.replace(/[\r\n]/g, ''); // 去掉回车换行
  return resultStr;
}

/***/ }),

/***/ "./src/utils/tips.js":
/*!***************************!*\
  !*** ./src/utils/tips.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * putao
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 2019-09-18
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * webclient@putao.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
// 弹框提示类信息


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }
  /**
   * 成功提示框
   */


  _createClass(Tips, null, [{
    key: 'success',
    value: function success(title) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;

      setTimeout(function () {
        _taroWeapp2.default.showToast({
          title: title,
          icon: 'success',
          mask: true,
          duration: duration
        });
      }, 300);
    }

    /**
     * 弹出确认窗口
     */

  }, {
    key: 'confirm',
    value: function confirm(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';
      var cancelText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '取消';
      var confirmText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '确定';
      var payload = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      return new Promise(function (resolve, reject) {
        _taroWeapp2.default.showModal({
          title: title,
          content: text,
          cancelText: cancelText,
          showCancel: true,
          confirmText: confirmText
        }).then(function (res) {
          if (res.confirm) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      }).catch(function (e) {});
    }

    /**
     * 弹出单独确认确认窗口
     */

  }, {
    key: 'onlyConfirm',
    value: function onlyConfirm(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';
      var confirmText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '确定';
      var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new Promise(function (resolve, reject) {
        _taroWeapp2.default.showModal({
          title: title,
          content: text,
          showCancel: false,
          confirmText: confirmText,
          success: function success(res) {
            if (res.confirm) {
              resolve(true);
            } else if (res.cancel) {
              resolve(false);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      }).catch(function (e) {});
    }

    /**
     * 普通提示窗口
     * icon有效值：success / loading / none
     */

  }, {
    key: 'toast',
    value: function toast(title) {
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';

      setTimeout(function () {
        _taroWeapp2.default.showToast({
          title: title || '',
          icon: icon,
          mask: true,
          duration: 3000
        });
      }, 300);
    }
  }, {
    key: 'toastFast',
    value: function toastFast(title) {
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';

      setTimeout(function () {
        _taroWeapp2.default.showToast({
          title: title || '',
          icon: icon,
          mask: true,
          duration: 1000
        });
      }, 20);
    }

    /**
     * 弹出加载提示
     */

  }, {
    key: 'loading',
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '加载中';

      if (Tips.isLoading) {
        return;
      }
      Tips.isLoading = true;
      _taroWeapp2.default.showLoading({
        title: title,
        mask: true
      });
    }

    /**
     * 加载完毕
     */

  }, {
    key: 'loaded',
    value: function loaded() {
      if (Tips.isLoading) {
        Tips.isLoading = false;
        _taroWeapp2.default.hideLoading();
      }
    }

    /**
     * 弹框
     */

  }, {
    key: 'alert',
    value: function alert(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '提示';

      var _this = this;

      var confirmText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '确定';
      var payload = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      return new Promise(function (resolve, reject) {
        _taroWeapp2.default.showModal({
          title: title,
          content: text,
          showCancel: false,
          confirmText: confirmText,
          success: function success(res) {
            if (res.confirm) {
              resolve(payload);
            }
          },
          fail: function fail(res) {
            reject(payload);
          }
        });
      }).catch(function (e) {
        _this.loaded();
      });
    }

    /**
     * 兼容性错误提示
     */

  }, {
    key: 'compatible',
    value: function compatible() {
      _taroWeapp2.default.showModal({
        title: '提示',
        mask: true,
        content: '当前微信版本过低，无法使用，请升级到最新微信版本后重试。'
      });
    }
  }]);

  return Tips;
}();

/**
 * 静态变量，是否加载中
 */


exports.default = Tips;
Tips.isLoading = false;

/***/ })

},[["./src/components/login/index.js","runtime","taro","vendors","common"]]]);