// 配置  必备参数
import PTUtils from './utils/ptutils'

const appid = 'wx442772192e3fff00' // 成长中心
let config = null

export const test = {
  currentStr: '123456',
  imgUrl: 'https://h5.putao.com/mini_cityshop',
  authHost: 'http://api-uas.test.ptevent.cn',
  baseUrl: 'http://api-nearby-store.test.ptevent.cn',
  addressHost: 'http://api-member.test.ptevent.cn',
  appkey: 'TlosAqtQu8ZdCF6N',
  appsecret: 'zoqMRD9GdJh4Hsej8k4PXTZBgq8Me0fh',
  appid
}

export const online = {
  imgUrl: 'https://h5.putao.com/mini_cityshop',
  authHost: 'https://api-uas.putao.com',
  baseUrl: 'https://api-nearby-store.putao.com',
  addressHost: 'https://api-member.putao.com',
  appkey: 'noOzEcqs5tfqnfJH',
  appsecret: 'tHuWPjeVLXk9qrNJ9vyjmBT1eDwUiqLR',
  appid
}

if (process.env.NODE_ENV == 'development') {
  config = test
  PTUtils.SetTestEnv(true)
  // config = online
  // PTUtils.SetTestEnv(false)
} else {
  config = online
  PTUtils.SetTestEnv(false)
  // config = test
  // PTUtils.SetTestEnv(true)
}
export default config

export const interfaceCode = {
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
}
