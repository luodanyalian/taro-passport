import Taro from '@tarojs/taro';

export default {
  namespace: 'common',
  state: {
    access_token: Taro.getStorageSync('accessToken'),
    token: Taro.getStorageSync('token'),
    openId: Taro.getStorageSync('openId'),
    uId: Taro.getStorageSync('uId')
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
