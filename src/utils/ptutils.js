import Taro from '@tarojs/taro'
import config,{test,online} from '../config'

const KEY_DEBUG_RUNTIME ="KEY_DEBUG_RUNTIME";
export default class PTUtils{

  constructor () {
  
  }

  static SetTestEnv(t){
    Taro.setStorageSync(KEY_DEBUG_RUNTIME,t)
  }

  static IsTestEnv(){
    return Taro.getStorageSync(KEY_DEBUG_RUNTIME,false)
  }

  static changeRuntime(){
    if(!this.runtimeCounter){
      this.runtimeCounter =0;
      this.isTest = Taro.getStorageSync(KEY_DEBUG_RUNTIME,false)
    }

    console.log(  this.runtimeCounter+" >>>>>  this.runtimeCounter")
    this.runtimeCounter +=1;
    if(this.runtimeCounter>=6){
      this.runtimeCounter = 0;
      Taro.setStorageSync(KEY_DEBUG_RUNTIME,!this.isTest);
      this.isTest = Taro.getStorageSync(KEY_DEBUG_RUNTIME,false)
  
      if(this.isTest){
        // config = test;
        Taro.$config = test;
        Taro.showModal({title:'提示',content:'已成功切换为测试环境，继续虐吧！',showCancel:false}).then((res)=>{
          if(res.confirm){
            Taro.switchTab({url: '../../pages/index/main'})
          }
        })
      }else{
        // config = online;
        Taro.$config = online;
        Taro.showModal({title:'提示',content:'已成功切换为线上环境！-_-',showCancel:false}).then((res)=>{
          if(res.confirm){
            Taro.switchTab({url: '../../pages/index/main'})
          }
        })
      }
    }
  }
}

