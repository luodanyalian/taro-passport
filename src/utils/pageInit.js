/**
 * putao
 * 2019-09-18
 * webclient@putao.com
 */
import Taro from '@tarojs/taro'

function pageInit() {
  return function Component(Component) {
    return class extends Component {
      constructor(props) {
        super(props)
      }

      //onLoad
      componentWillMount(){
        //初始分享信息
      }

      //阻塞 didMount ， 鉴权
      async componentDidMount() {
        let result = true;
        //授权成功
        if( result ){
          console.log('走到这里了')
          //调用父组件的函数
          super.componentDidMount && super.componentDidMount();
        }else{
          //授权失败
          Taro.showToast({
            title : '授权失败' ,
            icon : 'none' ,
            mask : true
          })
        }
      }
    }
  }
}

export default pageInit;
