import Taro, { Component } from '@tarojs/taro'
import { Provider, connect } from '@tarojs/redux'
import Login from './pages/login/main'
import Base from './utils/base'
import config from './config'
import configStore from './store'
import './app.scss'

if (process.env.TARO_ENV !== 'alipay') {
  require('@tarojs/async-await')
}

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5') {
  require('nerv-devtools')
}

const store = configStore()

Taro.$base = Base
Taro.$config = config

@connect(({ userAuth, counter, lineFlag }) => ({
  userAuth,
  counter,
  lineFlag
}))
class App extends Component {
  componentWillMount() {}
  componentDidMount() {}
  config = {
    pages: ['pages/login/main'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarTextStyle: 'white',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat'
    }
  }
  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
