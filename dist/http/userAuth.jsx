/**
/**
 * putao
 * 2019-03-21
 * webclient@putao.com
 * 
 * 微信授权成功和绑定作为不可拆封的单元，避免微信授权成功后过了很久才绑定，导致token失效而绑定失败
 */
import Taro from '@tarojs/taro'
import { jsonInteger } from '../utils/signStr'
import { setUserAuth } from '../actions/userAuth'
import AuthorApi from './userApis/authorApi'
import storage from '../utils/base'

export const STATUS_WXLOGIN_SCCESS = 1 //微信登录成功
export const STATUS_WXLOGIN_FAILED = 3 //微信登录失败
export const CODE_BINDED = 2 //绑定成功
export const CODE_NOBIND = 5 //没有绑定

export const KEY_STORAGE_USERAUTH = 'user_auth' // 用户账户信息相关
export const KEY_STORAGE_WXUSERAUTH = 'wx_userinfo' // 用户微信信息
export const KEY_STORAGE_TOCKEN_NOACCOUNT = 'token_noaccount' // 未绑定账户的微信收取登录返回的token
export const KEY_STORAGE_HASLOGIN = 'hasBind' //有无登录成功，微信登录成功，并且绑定成功

export default class userAuthFun {
  constructor() {}

  static checkUserAuth(callback, config = Taro.$config) {
    if (this.hasLogin()) {
      callback && callback(STATUS_WXLOGIN_SCCESS, CODE_BINDED)
      return
    }
    Taro.login({
      complete: function(res) {
        if (res.code) {
          //发起网络请求
          console.log(res.code + ' van wx login code')
          userAuthFun
            .wxLogin(res.code, config)
            .then(res => {
              console.log('微信授权登录成功>>>>>' + res.status)
              callback && callback(res.status, res.code)
            })
            .catch(error => {
              console.log('微信授权登录失败' + error)
              callback && callback(STATUS_WXLOGIN_FAILED, error)
            })
        } else {
          console.log('登录失败！' + res.errMsg)
          callback && callback(STATUS_WXLOGIN_FAILED, res.errMsg)
        }
      }
    })
  }

  //是否登录成功：包含微信授权成功，并且绑定成功
  static hasLogin() {
    let result = storage.getStorage(KEY_STORAGE_HASLOGIN)
    return result == true
  }
  //清楚通行证相关信息，重新授权登录
  static clearAuthInfo() {
    storage.removeStorage(KEY_STORAGE_USERAUTH)
    storage.removeStorage(KEY_STORAGE_WXUSERAUTH)
    storage.removeStorage(KEY_STORAGE_TOCKEN_NOACCOUNT)
    storage.removeStorage(KEY_STORAGE_HASLOGIN)
  }
  static wxLogin(code, config) {
    let _this = this
    return new Promise((resolve, reject) => {
      let postData = {
        client_id: config.appid,
        code: code
      }
      AuthorApi.wxLogin(postData, config)
        .then(res => {
          console.log(res)
          if (res.code === 0) {
            if (res.data.uid == '') {
              console.log('此用户未进行过账号绑定----需要进行手机登录' + JSON.stringify(res.data))
              storage.setStorage(KEY_STORAGE_USERAUTH, res.data)
              Taro.$store.dispatch(setUserAuth(res.data))
              storage.setStorage(KEY_STORAGE_TOCKEN_NOACCOUNT, res.data.token)
              resolve({ status: STATUS_WXLOGIN_SCCESS, code: CODE_NOBIND })
            } else {
              storage.setStorage(KEY_STORAGE_USERAUTH, res.data)
              Taro.$store.dispatch(setUserAuth(res.data))
              console.log('此用户绑定过')
              storage.setStorage(KEY_STORAGE_HASLOGIN, true)
              resolve({ status: STATUS_WXLOGIN_SCCESS, code: CODE_BINDED })
            }
          } else {
            resolve({ status: STATUS_WXLOGIN_FAILED, code: res.code })
            console.log(' error >>>' + res.code)
          }
        })
        .catch(error => {
          console.log('>>>>errorbbbbbb ' + error)
          reject(error)
        })
    })
  }

  //手机验证码登录
  static mobileCodeLogin = (mobile, code, config) => {
    return new Promise((resolve, reject) => {
      let data = {
        fullmobile: mobile,
        code: code
      }
      AuthorApi.mobileCodeLogin(data, config)
        .then(res => {
          console.log('手机验证码登录返回：' + res)
          if (res.code === 0) {
            storage.setStorage(KEY_STORAGE_USERAUTH, res.data)
            Taro.$store.dispatch(setUserAuth(res.data))
          }
          resolve(res)
        })
        .catch(error => {
          reject(error)
          console.log('这里不会执行到，http里面已经捕获异常----')
        })
    })
  }

  //绑定微信账号
  static bindWinxin = config => {
    return new Promise((resolve, reject) => {
      let token_noaccount = storage.getStorage(KEY_STORAGE_TOCKEN_NOACCOUNT)
      let userAuth = storage.getStorage(KEY_STORAGE_USERAUTH)
      let data = {
        bind_token: token_noaccount || userAuth.token
      }
      AuthorApi.bindWeixin(data, config)
        .then(res => {
          console.log('绑定账户微信返回' + res)
          if (res.code == 0) {
            storage.setStorage(KEY_STORAGE_HASLOGIN, true)
            resolve(res)
          } else {
            resolve(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  //刷新token
  static refreshToken(config) {
    return new Promise((resolve, reject) => {
      const userAuth = storage.getStorage(KEY_STORAGE_USERAUTH)
      if (userAuth) {
        AuthorApi.refreshToken(
          {
            refresh_token: userAuth.refresh_token
          },
          config
        )
          .then(res => {
            if (res.code === 0) {
              storage.setStorage(KEY_STORAGE_USERAUTH, res.data)
              Taro.$store.dispatch(setUserAuth(res.data))
            }
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
      } else {
        reject('没有微信授权数据')
      }
    })
  }

  static getChildMsg() {}
}
