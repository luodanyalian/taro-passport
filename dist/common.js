(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interfaceCode = exports.online = exports.test = undefined;

var _ptutils = __webpack_require__(/*! ./utils/ptutils */ "./src/utils/ptutils.js");

var _ptutils2 = _interopRequireDefault(_ptutils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appid = 'wx442772192e3fff00'; // 成长中心
// 配置  必备参数
var config = null;

var test = exports.test = {
  currentStr: '123456',
  imgUrl: 'https://h5.putao.com/mini_cityshop',
  authHost: 'http://api-uas.test.ptevent.cn',
  baseUrl: 'http://api-nearby-store.test.ptevent.cn',
  addressHost: 'http://api-member.test.ptevent.cn',
  appkey: 'TlosAqtQu8ZdCF6N',
  appsecret: 'zoqMRD9GdJh4Hsej8k4PXTZBgq8Me0fh',
  appid: appid
};

var online = exports.online = {
  imgUrl: 'https://h5.putao.com/mini_cityshop',
  authHost: 'https://api-uas.putao.com',
  baseUrl: 'https://api-nearby-store.putao.com',
  addressHost: 'https://api-member.putao.com',
  appkey: 'noOzEcqs5tfqnfJH',
  appsecret: 'tHuWPjeVLXk9qrNJ9vyjmBT1eDwUiqLR',
  appid: appid
};

{
  config = test;
  _ptutils2.default.SetTestEnv(true);
  // config = online
  // PTUtils.SetTestEnv(false)
}
exports.default = config;
var interfaceCode = exports.interfaceCode = {
  setVisitRecord: 6004,
  getHomeStoreList: 6002,
  getHomeBanner: 6001,
  getAddressList: 8000,
  getRegionList: 8001,
  addAddress: 8002,
  updateAddress: 8003,
  deleteAddress: 8004,
  getHomeMapStoreList: 8005,
  getUserInfo: 8006,
  getBaseInfo: 8007,
  getProductDetail: 8008,

  getStoreTrans: 1011,
  cancleOrder: 1002,
  getOrderList: 1004,
  cartList: 2002,
  deleteCart: 2003,
  addCart: 2001,
  toPay: 1005,
  payQuery: 1006,
  storeDetail: 6003,
  getCategorys: 1002,
  getProductList: 1001,

  createOrder: 1002,

  getSkuList: 3003,
  getOrderDetail: 1003,
  getConfirmOrder: 1001,
  getOrderExpress: 1010,

  refreshToken: 5012,
  bindWeixin: 5013,
  wxLogin: 5014,
  mobileCodeLogin: 5015,
  sendMobileCode: 5016,
  accountInfo: 5017
};

/***/ }),

/***/ "./src/constants/userAuth.js":
/*!***********************************!*\
  !*** ./src/constants/userAuth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
var SET_USERAUTH = exports.SET_USERAUTH = "SET_USERAUTH";

// export const SETNEWUSERFLAG = 'SETNEWUSERFLAG' // 是不是新用户
// export const SAVEUSERAUTHMSG = 'SAVEUSERAUTHMSG' // 保存用户授权信息
// // 更新鉴权字符串
// export const UPDATEAUTHSTRING = 'UPDATEAUTHSTRING'
// // 单独更新用户 uid
// export const UPDATEUID = 'UPDATEUID'
// // 单独更新 cid
// export const UPDATECID = 'UPDATECID'
// // 绑定手机号之后更新数据
// export const BINDPHONEUPDATEAUTHDATA = 'BINDPHONEUPDATEAUTHDATA'
// // 解绑之后的数据
// export const UNBINDAUTHDATA = 'UNBINDAUTHDATA'

// // 是否需要重新走授权逻辑
// export const NEEDUPDATEAUTHFLAG = 'NEEDUPDATEAUTHFLAG'

// export const AUTOCHANGEUID = 'AUTOCHANGEUID' // 自动切换 Uid

/***/ }),

/***/ "./src/utils/base.js":
/*!***************************!*\
  !*** ./src/utils/base.js ***!
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


var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  _createClass(Base, null, [{
    key: "setStorage",
    value: function setStorage(key, value) {
      _taroWeapp2.default.setStorageSync(key, value);
    }
  }, {
    key: "getStorage",
    value: function getStorage(key) {
      return _taroWeapp2.default.getStorageSync(key);
    }
  }, {
    key: "removeStorage",
    value: function removeStorage(key) {
      try {
        _taroWeapp2.default.removeStorageSync(key);
      } catch (e) {
        // Do something when catch error
      }
    }
  }]);

  return Base;
}();

exports.default = Base;

/***/ }),

/***/ "./src/utils/ptutils.js":
/*!******************************!*\
  !*** ./src/utils/ptutils.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

var _config = __webpack_require__(/*! ../config */ "./src/config.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var KEY_DEBUG_RUNTIME = "KEY_DEBUG_RUNTIME";

var PTUtils = function () {
  function PTUtils() {
    _classCallCheck(this, PTUtils);
  }

  _createClass(PTUtils, null, [{
    key: "SetTestEnv",
    value: function SetTestEnv(t) {
      _taroWeapp2.default.setStorageSync(KEY_DEBUG_RUNTIME, t);
    }
  }, {
    key: "IsTestEnv",
    value: function IsTestEnv() {
      return _taroWeapp2.default.getStorageSync(KEY_DEBUG_RUNTIME, false);
    }
  }, {
    key: "changeRuntime",
    value: function changeRuntime() {
      if (!this.runtimeCounter) {
        this.runtimeCounter = 0;
        this.isTest = _taroWeapp2.default.getStorageSync(KEY_DEBUG_RUNTIME, false);
      }

      console.log(this.runtimeCounter + " >>>>>  this.runtimeCounter");
      this.runtimeCounter += 1;
      if (this.runtimeCounter >= 6) {
        this.runtimeCounter = 0;
        _taroWeapp2.default.setStorageSync(KEY_DEBUG_RUNTIME, !this.isTest);
        this.isTest = _taroWeapp2.default.getStorageSync(KEY_DEBUG_RUNTIME, false);

        if (this.isTest) {
          // config = test;
          _taroWeapp2.default.$config = _config.test;
          _taroWeapp2.default.showModal({ title: '提示', content: '已成功切换为测试环境，继续虐吧！', showCancel: false }).then(function (res) {
            if (res.confirm) {
              _taroWeapp2.default.switchTab({ url: '../../pages/index/main' });
            }
          });
        } else {
          // config = online;
          _taroWeapp2.default.$config = _config.online;
          _taroWeapp2.default.showModal({ title: '提示', content: '已成功切换为线上环境！-_-', showCancel: false }).then(function (res) {
            if (res.confirm) {
              _taroWeapp2.default.switchTab({ url: '../../pages/index/main' });
            }
          });
        }
      }
    }
  }]);

  return PTUtils;
}();

exports.default = PTUtils;

/***/ })

}]);