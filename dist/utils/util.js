/*
 ** randomWord 产生任意长度随机字母数字组合
 ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
 */
import Taro from '@tarojs/taro'

export const changeMoney = function changeMoney (num) {
  var regexp = /(?:\.0*|(\.\d+?)0+)$/
  if (num > 1000000) {
    num = JSON.stringify(num).slice(0, JSON.stringify(num).length - 4) / 100
    return num + '万'
  } else {
    num = (num / 100).toFixed(2)
    num = num.replace(regexp, '$1')
    return num
  }
}
export const clearActivityData = function (isClearActivityId) {
  if (isClearActivityId) {
    Taro.removeStorageSync('activityId')
    Taro.removeStorageSync('tabName')
    Taro.removeStorageSync('activityInfo')
  }
  Taro.removeStorageSync('allWorksList')
  Taro.removeStorageSync('allWorkLoad')
  Taro.removeStorageSync('awardWorksList')
  Taro.removeStorageSync('awardWorkLoad')
  Taro.removeStorageSync('isReachBottom')
  Taro.removeStorageSync('isRefresh')
}
// iphone x兼容处理
export const isIpx = () => {
  let flag = false
  let model = Taro.getSystemInfoSync().model
  console.log('机型', model)
  var data = model.substring(0, model.lastIndexOf('X')) + 'X'
  if (data == 'iPhone X') {
    flag = true
  }
  return flag
}
export const randomWord = function (randomFlag, min, max) {
  var str = '',
    range = min,
    arr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]

  // 随机产生
  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min
  }
  for (var i = 0; i < range; i++) {
    let pos = Math.round(Math.random() * (arr.length - 1))
    str += arr[pos]
  }
  return str
}
// 获取现在的年龄
export function getAge (birthDayTime) {
  if (birthDayTime == 0) {
    return '生日未设置'
  }
  let nowTime = new Date().getTime()
  // 一年毫秒数(365 * 86400000 = 31536000000)
  // let age = Math.ceil((nowTime - birthDayTime) / 31536000000)
  let age = Math.floor((nowTime - birthDayTime) / 31536000000)
  // console.log(age)
  // if (age == 0) {
  //   age = 1
  // } else if (age < 0) {
  //   age = '未知'
  // } else {
  //   age = age + '岁'
  // }
  if (age < 0) {
    age = '0岁'
  } else {
    age = age + '岁'
  }
  return age
}

// 获取连接里面的参数
export function getQuery () {
  /* 获取当前路由栈数组 */
  const pages = Taro.getCurrentPages()
  const currentPage = pages[pages.length - 1]
  const options = currentPage.options
  return options
}
export const getQueryRequest = function (key, url) {
  var reg = new RegExp('(^|&|/?)' + key + '=([^&|/?]*)(&|/?|$)', 'i')
  var r = url.substr(1).match(reg)
  console.log(r)
  if (r != null) {
    return r[2]
  }
  return null
}

// 获取用户授权信息
export const wxauth = function (scope, callback) {
  Taro.authorize({
    scope,
    success (res) {
      // 用户已经同意
      callback(res)
    },
    fail (res) {
      callback(res)
    }
  })
}

// 防止快速点击
export const throttle = function (fn, threshhold, scope) {
  threshhold || (threshhold = 500)
  let last, deferTimer
  return function () {
    let context = scope || this

    let now = +new Date()
    let args = arguments
    if (last && now < last + threshhold) {
      clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        fn.apply(context, args)
      }, threshhold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
// 距离现在的时间
export const distanceTime = function (valueTime) {
  if (valueTime) {
    var newData = Date.parse(new Date())
    var diffTime = Math.abs(newData - valueTime)
    if (diffTime > 7 * 24 * 3600 * 1000) {
      var date = new Date(valueTime)
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      var d = date.getDate()
      d = d < 10 ? '0' + d : d
      var h = date.getHours()
      h = h < 10 ? '0' + h : h
      var minute = date.getMinutes()
      var second = date.getSeconds()
      minute = minute < 10 ? '1' + minute : minute
      second = second < 10 ? '0' + second : second
      // return  m + '-' + d+' '+h+':'+minute;
      return m + '-' + d
    } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // } else if (diffTime < 7 * 24 * 3600 * 1000 && diffTime > 24 * 3600 * 1000) {
      // //注释("一周之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (24 * 60 * 60 * 1000))
      return dayNum + '天前'
    } else if (diffTime < 24 * 3600 * 1000 && diffTime > 3600 * 1000) {
      // //注释("一天之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 60 * 1000))
      return dayNum + '小时前'
    } else if (diffTime < 3600 * 1000 && diffTime >= 60 * 1000) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / (60 * 1000))
      return dayNum + '分钟前'
    } else if (diffTime < 60 * 1000) {
      // //注释("一小时之内");
      // var time = newData - diffTime;
      var dayNum = Math.floor(diffTime / 1000)
      return dayNum + '秒前'
    }
  }
}
// 订单倒计时
export const surplusTime = function (diffTime) {
  let hour = Math.floor(diffTime / 3600)
  let minute = Math.floor((diffTime - hour * 3600) / 60)
  if(hour == 0){
    return minute + '分钟'
  }else{
    return hour + '小时' + minute + '分钟'
  }
}
// 时间戳转日期
export const dateFormat = function (date, fmt = 'yyyy/MM/dd') {
  if (!(date instanceof Date)) {
    date = new Date(date)
  }
  let o = {
    'M+': date.getMonth() + 1, // 月份o
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt
}

export function getAddressNames (provinceId, cityId, areaId) {
  let mapData = Taro.getStorageSync('allAddressMapData')
  console.log(provinceId + '>>>kk' + cityId + '>>>>>' + areaId)
  let provinceIndex = mapData.provinceList.findIndex(item => {
    return item.id == provinceId
  })
  console.log(provinceIndex)
  let province = mapData.provinceList[provinceIndex]

  let cityList = mapData.cityList[provinceIndex]

  let city = cityList.find(item => {
    return item.id == cityId
  })

  let areaList = mapData.areaList[city.id]

  // console.log(JSON.stringify(areaList) + ' >>>>>>areaList>>>>')
  let area = areaList.find(item => {
    return item.id == areaId
  })

  console.log(
    province.name + '>>>>>province.name ' + city.name + ' >>>>>' + area.name
  )
  return {
    proviceName: province.name,
    cityName: city.name,
    areaName: area.name
  }
}
export function getAddressIds (provinceName, cityName, areaName) {
  let mapData = Taro.getStorageSync('allAddressMapData')
  let provinceIndex = mapData.provinceList.findIndex(item => {
    return item.name == provinceName
  })
  let province = mapData.provinceList[provinceIndex]
  let cityList = mapData.cityList[provinceIndex]

  let city = cityList.find(item => {
    return item.name == cityName
  })

  let areaList = mapData.areaList[city.id]

  // console.log(JSON.stringify(areaList) + ' >>>>>>areaList>>>>')
  let area = areaList.find(item => {
    return item.name == areaName
  })
  return {
    proviceId: province.id,
    cityId: city.id,
    areaId: area.id
  }
}

export function setAddress2 (addressData) {
  let returnAddressData = {} // 返回的总数据
  let provinceListData = [] // 省份的data
  let cityListData = [] // 城市的data
  let areaListData = {} // 地区的data

  addressData.forEach((provinceItem, provinceIndex) => {
    let provinceItemData = {
      id: provinceItem.id,
      name: provinceItem.name,
      zip_code: provinceItem.zip_code,
      key: provinceIndex
    }
    provinceListData.push(provinceItemData)
    let provinceCityDataList = []
    provinceItem.sub &&
      provinceItem.sub.forEach((provinceCityItem, provinceCityIndex) => {
        let provinceCityDataItem = {
          id: provinceCityItem.id,
          name: provinceCityItem.name,
          zip_code: provinceCityItem.zip_code,
          key: provinceCityIndex
        }
        provinceCityDataList.push(provinceCityDataItem)

        let provinceCityAreaDataList = []
        provinceCityItem &&
          provinceCityItem.sub.forEach(
            (provinceCityAreaItem, provinceCityAreaIndex) => {
              let provinceCityAreaDataItem = {
                id: provinceCityAreaItem.id,
                name: provinceCityAreaItem.name,
                key: provinceCityAreaIndex,
                zip_code: provinceCityAreaItem.zip_code
              }
              provinceCityAreaDataList.push(provinceCityAreaDataItem)
            }
          )
        areaListData[provinceCityItem.id] = provinceCityAreaDataList
      })
    cityListData.push(provinceCityDataList)
  })
  returnAddressData.provinceList = provinceListData
  returnAddressData.cityList = cityListData
  returnAddressData.areaList = areaListData
  return returnAddressData
}

// 格式化地址数据
export function setAddress (addressData) {
  let returnAddressData = {} // 返回的总数据
  let provinceListData = [] // 省份的data
  let cityListData = [] // 城市的data
  let areaListData = {} // 地区的data
  addressData['100000'].forEach((provinceItem, provinceIndex) => {
    // 省份的数据做转换
    let provinceItemData = {
      id: provinceItem.id,
      name: provinceItem.name,
      key: provinceIndex
    }
    provinceListData.push(provinceItemData)
    // 城市对象的转换
    let provinceCityDataList = []
    let provinceCityData = addressData[provinceItem.id]
    provinceCityData.forEach((provinceCityItem, provinceCityIndex) => {
      let provinceCityDataItem = {
        id: provinceCityItem.id,
        name: provinceCityItem.name,
        key: provinceCityIndex
      }
      provinceCityDataList.push(provinceCityDataItem)

      // 地区对象的转换
      let provinceCityAreaDataList = []
      let provinceCityAreaData = addressData[provinceCityItem.id]
      provinceCityAreaData.forEach(
        (provinceCityAreaItem, provinceCityAreaIndex) => {
          let provinceCityAreaDataItem = {
            id: provinceCityAreaItem.id,
            name: provinceCityAreaItem.name,
            key: provinceCityAreaIndex,
            zip: provinceCityAreaItem.zip_code
          }
          provinceCityAreaDataList.push(provinceCityAreaDataItem)
        }
      )
      let key = provinceCityItem.id
      let value = provinceCityAreaDataList
      areaListData[key] = value
    })
    let value = provinceCityDataList
    cityListData.push(value)
  })
  returnAddressData.provinceList = provinceListData
  returnAddressData.cityList = cityListData
  returnAddressData.areaList = areaListData
  return returnAddressData
}
// 判断对象内容是否相等
// eg
// var a = {
//   id: 1,
//   name: 2,
//   c: {
//     age: 3
//   }
// }
// var b = {
//   id: 1,
//   name: 2,
//   c: {
//     age: 3
//   }
// }
export function isObjectValueEqual (a, b) {
  var aProps = Object.getOwnPropertyNames(a)
  var bProps = Object.getOwnPropertyNames(b)
  if (aProps.length != bProps.length) {
    return false
  }
  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i]

    var propA = a[propName]
    var propB = b[propName]
    if (typeof propA === 'object') {
      if (this.isObjectValueEqual(propA, propB)) {
        return true
      } else {
        return false
      }
    } else if (propA !== propB) {
      return false
    } else {
    }
  }
  return true
}
