/**
 * putao
 * 2020-03-21
 * webclient@putao.com
 */
import Taro from '@tarojs/taro'
import userAuthFun, {
  KEY_STORAGE_USERAUTH,
  STATUS_WXLOGIN_SCCESS,
  CODE_BINDED
} from './userAuth'
import { jsonInteger } from '../utils/signStr'
import Tips from '../utils/tips'
import storage from '../utils/base'

export default class httpRequestUser {
  constructor () {}

  static request (
    url,
    data = {},
    method = 'GET',
    interfaceCode = 0,
    config = Taro.$config,
    toast = 'center',
    signType = 'none',
    retryTimes = 3
  ) {
    return new Promise((resolve, reject) => {
      this._requestFun(
        url,
        resolve,
        reject,
        data,
        method,
        interfaceCode,
        config,
        toast,
        signType,
        retryTimes
      )
    })
  }

  static _requestFun (
    url,
    resolve,
    reject,
    data = {},
    method = 'GET',
    interfaceCode,
    config = Taro.$config,
    toast,
    signType,
    retryTimes
  ) {
    let userAuth = storage.getStorage(KEY_STORAGE_USERAUTH)
    let tokenStr = ''
    if (userAuth && userAuth.token && userAuth.token != '') {
      tokenStr = 'Bearer ' + userAuth.token
    }
    let oldData = data
    console.log(url + '请求参数', data)
    Taro.request({
      url: url,
      method: method,
      data: jsonInteger(data, signType, config.currentStr),
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        appkey: config.appkey,
        Authorization: tokenStr // access  token
      },
      success: res => {
        console.log(url + '返回数据', res.data)
        const statusCode = res.statusCode.toString()
        if (statusCode.startsWith('2')) {
          if (res.data.code == 0) {
            resolve(res.data)
          } else if (res.data.code == 21001) {
            if (retryTimes <= 0) {
              reject(statusCode + '-重试3次失败')
            } else {
              retryTimes = retryTimes - 1
              this.refreshToken(
                url,
                resolve,
                reject,
                oldData,
                method,
                interfaceCode,
                config,
                toast,
                signType,
                retryTimes
              )
            }
          } else if (
            res.data.code == 21000 ||
            res.data.code === 5003 ||
            res.data.code === 5005 ||
            res.data.code === 5000 ||
            res.data.code === 5004
          ) {
            if (retryTimes <= 0) {
              reject(statusCode + '-重试3次失败')
            } else {
              retryTimes = retryTimes - 1
              this._refetch(
                url,
                resolve,
                reject,
                oldData,
                method,
                interfaceCode,
                config,
                toast,
                signType,
                retryTimes
              )
            }
          } else {
            Tips.loaded()
            resolve(res.data)
          }
        } else if (statusCode == '404') {
          Tips.loaded()
          Tips.toast('服务器请求错误' + interfaceCode + '-' + statusCode, 'none')
          reject(statusCode)
        } else {
          let msg =
            '服务器请求错误' +
            interfaceCode +
            '-' +
            statusCode +
            '' +
            (res.data.msg || res.data.message)
          console.log(msg)
          Tips.toast(msg, 'none')
          resolve(msg)
        }
      },
      fail: err => {
        // 失败了。也需要跳转到无网页面
        let msg = '服务器请求错误' + interfaceCode + '-' + JSON.stringify(err)
        console.log(msg)
        Tips.loaded()
        Tips.toast(msg, 'none')
        reject(err)
      }
    })
  }

  static refreshToken (...param) {
    let _this = this
    userAuthFun
      .refreshToken()
      .then(res => {
        _this._requestFun(...param)
        if (res.code != 0) {
          Tips.toast('刷新token失败' + param[5] + '-' + res.code, 'none')
        }
      })
      .catch(error => {
        _this._requestFun(...param)
        let msg = '刷新token失败' + param[5] + '-' + error
        Tips.toast(msg, 'none')
        console.log(msg)
      })
  }

  static _refetch (...param) {
    let _this = this
    userAuthFun.clearAuthInfo()
    userAuthFun.checkUserAuth((result, code) => {
      if (result == STATUS_WXLOGIN_SCCESS && code == CODE_BINDED) {
        _this._requestFun(...param)
      } else {
        _this._requestFun(...param)
        let msg = '重新授权失败-' + param[5] + '-' + code
        Tips.toast(msg, 'none')
        console.log(msg + '重新授权失败，不应该执行到这里')
      }
    })
  }
}
