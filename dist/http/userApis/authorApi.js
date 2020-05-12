/**
 * putao
 * 20120-03-20
 * webclient@putao.com
 */
import Taro from '@tarojs/taro'
import UserHttpRequest from '../requestuser'
import { interfaceCode } from '../../config'

export default class AuthorApi {
  constructor () {}

  // 刷新token
  static refreshToken (data, config) {
    return UserHttpRequest.request(
      `${config.authHost}/refresh/token`,
      data,
      'POST',
      interfaceCode.refreshToken,
      config
    )
  }
  // 账户绑定微信
  static bindWeixin (data, config) {
    return UserHttpRequest.request(
      `${config.authHost}/oauth2/bind/weixin`,
      data,
      'POST',
      interfaceCode.bindWeixin,
      config
    )
  }

  //  微信登录
  static wxLogin (data, config) {
    return UserHttpRequest.request(
      `${config.authHost}/oauth2/wechat-miniapp`,
      data,
      'POST',
      interfaceCode.wxLogin,
      config
    )
  }
  // 手机验证码登录
  static mobileCodeLogin (data, config) {
    return UserHttpRequest.request(
      `${config.authHost}/login/mobile/code`,
      data,
      'POST',
      interfaceCode.mobileCodeLogin,
      config
    )
  }

  // 发送短信验证码
  static sendMobileCode (data, config) {
    return UserHttpRequest.request(
      `${config.authHost}/validation/mobile/send`,
      data,
      'POST',
      interfaceCode.sendMobileCode,
      config
    )
  }
  // 获取用户信息
  static getUserInfo (config) {
    return UserHttpRequest.request(
      `${config.authHost}/account/info`,
      {},
      'GET',
      interfaceCode.getUserInfo,
      config
    )
  }
}
