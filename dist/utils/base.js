/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
import Taro from '@tarojs/taro'

export default class Base {
  constructor () {
  }
  static setStorage (key, value) {
    Taro.setStorageSync(key, value)
  }
  static getStorage (key) {
    return Taro.getStorageSync(key)
  }
  static removeStorage(key){
    try {
      Taro.removeStorageSync(key)
    } catch (e) {
      // Do something when catch error
    }
  }

}
