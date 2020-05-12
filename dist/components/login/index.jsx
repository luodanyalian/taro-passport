/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
import Taro, { Component } from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, Image, Text, Input } from '@tarojs/components'
import './index.scss'
import Tips from '../../utils/tips'
import AuthorApi from '../../http/userApis/authorApi'
import userAuthFun, {
  CODE_BINDED,
  STATUS_WXLOGIN_SCCESS
} from '../../http/userAuth'

import BtnClose from '../../static/btn/btn_32_ghost_close@3x.png'

class Login extends Component {
  static propTypes = {
    config: PropTypes.object,
    enablePanel: PropTypes.bool
  }

  static defaultProps = {
    config: {},
    enablePanel: true
  }
  constructor(props) {
    super(props)
    let headerHeight = Taro.getStorageSync('headerHeight')
    let containerMinHeight =
      `calc(100vh - ` + (headerHeight + 44) + `px)!important`
    // let allWindowHeight = `calc(100vh - ` + headerHeight + `px)!important`
    this.state = {
      codeBtnText: '获取验证码',
      showLogin: false,
      timer: '', // 倒计时
      countdown: '', //倒计时时间
      phoneNumber: '', //用户输入的手机号
      codeNum: '', //用户输入的验证码
      getCodeLock: true, //获取验证码的锁
      nextBtnLock: true, //下一步的锁
      codePlaceHolder: '收到的验证码',
      codeBtnText: '获取验证码',
      checkedType: '' //当前获取焦点的input
    }
  }

  componentDidMount = () => {
    // this.props.onLoginInit && this.props.onLoginInit(this)
    // if (this.props.loginInitType) {
    //   this.checkLogin()
    // }
  }
  componentWillReceiveProps = nextProps => {}
  //检测是否登录成功
  checkLogin(callback) {
    let self = this
    userAuthFun.checkUserAuth((resultstatus, resultcode) => {
      if (resultstatus == STATUS_WXLOGIN_SCCESS) {
        console.log('微信授权登录成功')
        if (resultcode == CODE_BINDED) {
          //已绑定的用户
          self.setState({
            showLogin: false
          })
          callback && callback(true)
          // this.props.onLoginRefresh && this.props.onLoginRefresh()
          console.log('这是一个绑定过的账户')
        } else {
          console.log('未绑定账户')
          self.setState({
            showLogin: true
          })
          callback && callback(false)
        }
      } else {
        console.log('微信授权登录失败')
        Tips.onlyConfirm('微信授权登录失败' + resultcode)
        self.setState({
          showLogin: false
        })
        callback && callback(false)
      }
    }, this.props.config)
  }

  // 手机号登录
  onClickLogin = () => {
    if (this.state.nextBtnLock) {
      return
    }
    this.setState({
      nextBtnLock: true
    })
    let self = this
    // self.setState({
    //   toastStatus: 'loading',
    //   toastText: '登录中...',
    //   toastOpen: true
    // })
    userAuthFun
      .mobileCodeLogin(
        '86-' + this.state.phoneNumber,
        this.state.codeNum,
        this.props.config
      )
      .then(result => {
        if (result.code == 0) {
          console.log('手机号登录成功')
          self.bindUser()
        } else if (result.code === 21006) {
          Tips.toast('验证码无效' + result.code, 'none')
        } else {
          Tips.toast('手机号登录失败' + result.code, 'none')
        }
      })
  }
  //新手机号绑定
  bindUser() {
    let _this = this
    userAuthFun.bindWinxin(this.props.config).then(res => {
      if (res.code === 0) {
        console.log('微信绑定成功---》》》》')
        _this.setState(
          {
            showLogin: false
          },
          () => {
            Tips.toast('登录成功', 'none')
          }
        )
        _this.props.onLoginRefresh && this.props.onLoginRefresh()
      } else if (res.code === 21012) {
        _this.setState(
          {
            showLogin: true
          },
          () => {
            Tips.toast('该手机号已绑定其他微信账户，请使用其他手机号登录', 'none')
          }
        )
      } else {
        _this.setState(
          {
            showLogin: true
          },
          () => {
            Tips.toast('登录失败，请重新登录' + res.code, 'none')
          }
        )
        console.log('微信绑定失败---》》》》')
      }
    })
  }

  // 清除倒计时
  clearTime() {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }
  //手机输入框
  bindPhoneInput = e => {
    let _this = this
    _this.setState(
      {
        phoneNumber: e.detail.value
      },
      function() {
        _this.clearTime()
        _this.checkGetCodeBtn()
        _this.checkNextBtn()
      }
    )
  }
  // 验证码输入
  bindCodeInput = e => {
    let _this = this
    _this.setState(
      {
        codeNum: e.detail.value
      },
      function() {
        _this.checkNextBtn()
      }
    )
  }

  // 设置倒计时
  setTime(timelimit = 60) {
    let _this = this
    this.setState({
      countdown: timelimit
    })
    // _this.countdown = timelimit;
    _this.timer = setInterval(() => {
      _this.setState({
        countdown: _this.state.countdown - 1,
        codeBtnText: _this.state.countdown + '秒后重新获取'
      })
      if (_this.state.countdown === 0) {
        _this.clearTime()
        _this.setState({
          countdown: 60,
          getCodeLock: false,
          codeBtnText: '重新获取'
        })
      }
    }, 1000)
  }

  // 获取焦点
  getFocus(type) {
    //获取焦点
    this.setState({
      checkedType: type
    })
    if (type === 'code') {
      this.setState({
        codePlaceHolder: '_ _ _ _'
      })
    }
  }
  // 失去焦点
  outFocus(type) {
    this.setState({
      checkedType: ''
    })
    if (type === 'code') {
      this.setState({
        codePlaceHolder: '收到的验证码'
      })
    }
  }

  // 获取验证码的
  getPhoneCode() {
    if (!this.state.getCodeLock) {
      // 如果未被锁
      this.setState({
        getCodeLock: true
      })
      console.log('点击了')

      let data = {
        fullmobile: '86-' + this.state.phoneNumber,
        action: '2'
      }
      AuthorApi.sendMobileCode(data, this.props.config).then(res => {
        if (res && res.code === 0) {
          this.setTime()
        } else {
          Tips.toast('error验证码发送失败' + res.code, 'none')
        }
      })
    }
  }

  // 检测手机号
  testPhone() {
    let phoneCheck = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
    if (
      this.state.phoneNumber !== '' &&
      phoneCheck.test(this.state.phoneNumber)
    ) {
      return true
    } else {
      clearInterval(this.state.timer)
      this.setState({
        codeBtnText: '获取验证码'
      })
      return false
    }
  }
  //检测验证码的正确性
  testCode() {
    let codeCheck = /^\d{4}$/
    if (this.state.codeNum !== '' && codeCheck.test(this.state.codeNum)) {
      return true
    } else {
      return false
    }
  }
  // 检测获取验证码按钮
  checkGetCodeBtn() {
    let phoneCheckResult = this.testPhone()
    if (phoneCheckResult) {
      this.setState({
        getCodeLock: false
      })
    } else {
      this.setState({
        getCodeLock: true
      })
    }
  }
  // 检测下一步按钮
  checkNextBtn() {
    let phoneCheckResult = this.testPhone()
    let codeCheckResult = this.testCode()
    if (phoneCheckResult && codeCheckResult) {
      this.setState({
        nextBtnLock: false
      })
    } else {
      this.setState({
        nextBtnLock: true
      })
    }
  }

  onCancleClick() {
    this.setState({
      showLogin: false
    })
  }

  render() {
    const { showLogin } = this.state
    return (
      <View>
        {showLogin && this.props.enablePanel
          ? <View className='bind-phone-page'>
              <View className='mask-box' />
              <Image
                className='btn-close'
                mode='aspectFill'
                src={BtnClose}
                onClick={this.onCancleClick.bind(this)}
              />
              <View className='input-container'>
                <View className='inputs-area'>
                  {/*手机号输入区域*/}
                  {/*<View className='input phone checked'>*/}
                  <View
                    className={
                      this.state.checkedType === 'phone'
                        ? 'input phone checked'
                        : 'input phone'
                    }
                  >
                    <View className='input-icon-area'>
                      <Image
                        className='input-icon'
                        src={require('../../static/icon/icon_32_phone_red@3x.png')}
                      />
                    </View>
                    <Input
                      className='input-main'
                      disabled={
                        this.state.countdown > 0 && this.state.countdown < 60
                      }
                      value={this.state.phoneNumber}
                      onInput={this.bindPhoneInput.bind(this)}
                      onFocus={this.getFocus.bind(this, 'phone')}
                      onBlur={this.outFocus.bind(this, 'phone')}
                      type='number'
                      maxlength='11'
                      placeholder='输入手机号'
                      placeholderStyle='color:#959595; font-size:32rpx'
                    />
                  </View>
                  {/*获取验证码区域*/}
                  <View
                    className='get-code-area'
                    onClick={this.getPhoneCode.bind(this)}
                  >
                    <View className='left-empty' />
                    <View
                      className={
                        this.state.getCodeLock
                          ? 'get-code-btn lock'
                          : 'get-code-btn'
                      }
                    >
                      {this.state.getCodeLock
                        ? <Image
                          className='get-code-icon'
                          src={require('../../static/icon/icon_16_again_g@3x.png')}
                        />
                        : <Image
                          className='get-code-icon'
                          src={require('../../static/icon/icon_16_again_r@3x.png')}
                        />}
                      <Text className='get-code-text'>
                        {this.state.codeBtnText}
                      </Text>
                    </View>
                  </View>
                  {/*验证码输入区域*/}
                  <View
                    className={
                      this.state.checkedType === 'code'
                        ? 'input code checked'
                        : 'input code'
                    }
                  >
                    <View className='input-icon-area'>
                      <Image
                        className='input-icon'
                        src={require('../../static/icon/icon_32_message_red@3x.png')}
                      />
                    </View>
                    <Input
                      className='input-main'
                      onInput={this.bindCodeInput.bind(this)}
                      onFocus={this.getFocus.bind(this, 'code')}
                      onBlur={this.outFocus.bind(this, 'code')}
                      type='number'
                      maxlength='4'
                      placeholder={this.state.codePlaceHolder}
                      placeholderStyle='color:#959595; font-size:32rpx; height:48px; line-height:48px; letter-spacing:0'
                    />
                  </View>
                </View>
                {/*下一步按钮*/}
                <View
                  className={
                    this.state.nextBtnLock ? 'next-btn lock' : 'next-btn'
                  }
                  onClick={this.onClickLogin.bind(this)}
                >
                  <View className='btn-left'>
                    {this.state.nextBtnLock
                      ? <Image
                        className='icon-img'
                        src={require('../../static/icon/icon_16_tick_w@3x.png')}
                      />
                      : <Image
                        className='icon-img'
                        src={require('../../static/icon/icon_16_arrow_r_w@3x.png')}
                      />}
                  </View>
                  <Text className='btn-right'>登录</Text>
                </View>
              </View>
            </View>
          : ''}
      </View>
    )
  }
}
export default Login
