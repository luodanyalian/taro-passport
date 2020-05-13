/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
// 弹框提示类信息
import Taro from '@tarojs/taro'

export default class Tips {
  constructor () {
    this.isLoading = false
  }
  /**
   * 成功提示框
   */
  static success (title, duration = 500) {
    setTimeout(() => {
      Taro.showToast({
        title: title,
        icon: 'success',
        mask: true,
        duration: duration
      })
    }, 300)
  }

  /**
   * 弹出确认窗口
   */
  static confirm (
    text,
    title = '提示',
    cancelText = '取消',
    confirmText = '确定',
    payload = {}
  ) {
    return new Promise((resolve, reject) => {
      Taro.showModal({
        title: title,
        content: text,
        cancelText,
        showCancel: true,
        confirmText
      }).then(res => {
        if (res.confirm) {
          resolve(true)
        } else {
          resolve(false)
        }
      })
    }).catch(e => {})
  }

  /**
   * 弹出单独确认确认窗口
   */
  static onlyConfirm (text, title = '提示', confirmText = '确定', payload = {}) {
    return new Promise((resolve, reject) => {
      Taro.showModal({
        title: title,
        content: text,
        showCancel: false,
        confirmText,
        success: res => {
          if (res.confirm) {
            resolve(true)
          } else if (res.cancel) {
            resolve(false)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    }).catch(e => {})
  }

  /**
   * 普通提示窗口
   * icon有效值：success / loading / none
   */
  static toast (title, icon = 'success') {
    setTimeout(() => {
      Taro.showToast({
        title: title || '',
        icon: icon,
        mask: true,
        duration: 3000
      })
    }, 300)
  }

  static toastFast (title, icon = 'none') {
    setTimeout(() => {
      Taro.showToast({
        title: title || '',
        icon: icon,
        mask: true,
        duration: 1000
      })
    }, 20)
  }

  /**
   * 弹出加载提示
   */
  static loading (title = '加载中') {
    if (Tips.isLoading) {
      return
    }
    Tips.isLoading = true
    Taro.showLoading({
      title: title,
      mask: true
    })
  }

  /**
   * 加载完毕
   */
  static loaded () {
    if (Tips.isLoading) {
      Tips.isLoading = false
      Taro.hideLoading()
    }
  }

  /**
   * 弹框
   */
  static alert (text, title = '提示', confirmText = '确定', payload = {}) {
    return new Promise((resolve, reject) => {
      Taro.showModal({
        title: title,
        content: text,
        showCancel: false,
        confirmText: confirmText,
        success: res => {
          if (res.confirm) {
            resolve(payload)
          }
        },
        fail: res => {
          reject(payload)
        }
      })
    }).catch(e => {
      this.loaded()
    })
  }

  /**
   * 兼容性错误提示
   */
  static compatible () {
    Taro.showModal({
      title: '提示',
      mask: true,
      content: '当前微信版本过低，无法使用，请升级到最新微信版本后重试。'
    })
  }
}

/**
 * 静态变量，是否加载中
 */
Tips.isLoading = false
