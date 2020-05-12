/**
 * @description  购物车
 * @author winne
 */
import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import Login from '../../components/login/index'
// import Login from '@putao/taro-ptpassport'
import './main.scss'

class LoginTest extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {}
  componentDidMount() {}

  componentWillUnmount() {}
  componentDidShow() {}
  //检测登录状态未绑定则显示登录框
  checkLogin() {
    // 注意第一遍 执行onshow的时候 childLogin是为空的,所以不会执行
    if (this.childLogin) {
      this.childLogin.checkLogin(result => {
        if (result) {
        }
      })
    }
  }
  //初始化login
  refLogin = node => {
    this.childLogin = node
  }
  render() {
    // 测试数据
    const config = {
      currentStr: '123456',
      authHost: 'http://api-uas.test.ptevent.cn',
      appkey: 'TlosAqtQu8ZdCF6N',
      appid: 'wx442772192e3fff00'
    }
    return (
      <View className='cart_container'>
        <Login config={config} enablePanel ref={this.refLogin} />
        {/* <Button
          className='kf-button'
          open-type='contact'
          session-from='weapp'
          send-message-title='布鲁可标题'
          show-message-card
        >
          领取积分
        </Button> */}
        <Button className='btnnn' onClick={this.checkLogin}>
          登录
        </Button>
      </View>
    )
  }
}
export default LoginTest
