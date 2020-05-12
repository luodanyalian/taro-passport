/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
import Taro from '@tarojs/taro'
import {SET_USERAUTH} from '../constants/userAuth'

const defaultValue = {
  avatar: '',
  nickname: '',
  time: '',
  refresh_token: '', // 访问凭证的刷新凭证，默认未绑定为空
  token: '', // 访问凭证或绑定凭证
  expire_in: '', // 访问凭证的过期秒
  uid: '', // 账号ID，默认未绑定为空
}

const userAuth = (state = defaultValue, action) => {
    switch (action.type) {
      case SET_USERAUTH: // 保存授权信息
        let newState = {
          ...state,
          refresh_token: action.data.refresh_token||'',
          token: action.data.token||'',
          uid: action.data.uid||'',
          avatar: action.data.avatar || '',
          nickname: action.data.nickname || '',
          time: action.data.time || 0
        }
        Taro.setStorageSync('userAuth', newState)
        // 将信息存储本地
        return newState
      default:
        return state
    }
}

export default userAuth
