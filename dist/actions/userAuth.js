/**
 * captern
 * 2019-09-18
 * https://gitee.com/captern
 * captern@icloud.com
 */
import {
  SET_USERAUTH
} from '../constants/userAuth'

export const setUserAuth = data => {
  // 缓存 login 的信息
  return {
    type: SET_USERAUTH,
    data
  }
}
