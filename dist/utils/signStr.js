import Taro from '@tarojs/taro'
import MD5 from 'js-md5'
import config from '../config'

export function jsonInteger (oldJson, type = 'base', currentStr) {
  if (type === 'none') {
    return oldJson
  } else if (type === 'user') {
    return getUserSign(oldJson, currentStr)
  } else {
    oldJson.rnd = randomString()
    oldJson.timestamp = timeStamp()
    // 并且将获取cookie的时间戳
    let signature = getSignature(oldJson, type)
    if (type == 'base' || type == 'form') {
      // type 表示 sign 的类型
      oldJson.signature = signature.trim()
    } else {
      oldJson.sign = signature.trim()
    }
    return oldJson
  }
}

// 获取 用户通行证的 sign
export function getUserSign (params, currentStr) {
  let currentStrResult = currentStr || 'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI'
  let keyArray = []
  for (var key in params) {
    keyArray.push(key.trim())
  }
  // 将键值组成的数组排序
  keyArray.sort((a, b) => a.localeCompare(b))
  let signature = ''
  keyArray.forEach(function (keyItem) {
    signature +=
      keyItem.trim() + '=' + encodeURIComponent(params[keyItem]) + '&'
  })
  // 秘钥拼接
  // console.log(signature);

  signature = iGetInnerText(signature)
  // console.log(signature);
  const NewSignature =
    signature.substr(0, signature.length - 1).trim() + currentStrResult
  // console.log(NewSignature.trim())
  let sign = MD5(NewSignature.trim())
  params.sign = sign
  return params
}

// 获取 signature
function getSignature (params, type) {
  let keyArray = []
  for (var key in params) {
    keyArray.push(key.trim())
  }
  // 将键值组成的数组排序
  keyArray.sort((a, b) => a.localeCompare(b))
  let signature = ''
  keyArray.forEach(function (keyItem) {
    signature += keyItem.trim() + '=' + params[keyItem] + '&'
  })
  // 秘钥拼接
  if (type == 'user') {
    signature = iGetInnerText(signature)
  }
  let NewSignature = ''
  if (type == 'base' || type == 'user') {
    NewSignature =
      'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI' +
      signature.substr(0, signature.length - 1).trim() +
      'V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI'
  } else {
    NewSignature =
      signature.substr(0, signature.length - 1).trim() +
      'Q2nxjKVKN5W0djIQ21QjCl538Dwfqc0x'
  }
  // const NewSignature = signature.substr(0, signature.length - 1).trim() + "V0j7lEImJmCQTr7xEfPUhr7yfveJeSMI";
  return MD5(NewSignature.trim())
}

// 获取视频的signature
export function jsonVideoInteger (oldJson) {
  oldJson.rnd = randomString()
  oldJson.timestamp = timeStamp()
  // 并且将获取cookie的时间戳
  let signature = getVideoSignature(oldJson)
  oldJson.signature = signature.trim()
  return oldJson
}
// 获取视频的signature
function getVideoSignature (params) {
  console.log('签名参数', params)
  let keyArray = []
  for (var key in params) {
    keyArray.push(key.trim())
  }
  // 将键值组成的数组排序
  keyArray.sort((a, b) => a.localeCompare(b))
  let signature = ''
  keyArray.forEach(function (keyItem) {
    signature += keyItem.trim() + '=' + params[keyItem] + '&'
  })
  let NewSignature = ''
  NewSignature =
    signature.substr(0, signature.length - 1).trim() +
    'lwJI6lbehhhQLZWOLbEgqcdxuGpyi4WZ'
  return MD5(NewSignature.trim())
}

// 获取10位随机字符串
function randomString (length) {
  let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
  var maxPos = chars.length
  var pwd = ''
  let lengthNum = length || '8'
  for (var i = 0; i < lengthNum; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd.trim()
}

// 获取时间戳
function timeStamp () {
  let ts = Math.round(new Date().getTime() / 1000)
  return ts
}

function iGetInnerText (testStr) {
  let resultStr = testStr.replace(/\ +/g, '') // 去掉空格
  resultStr = testStr.replace(/[ ]/g, '') // 去掉空格
  resultStr = testStr.replace(/[\r\n]/g, '') // 去掉回车换行
  return resultStr
}
