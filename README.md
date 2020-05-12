
# 基于Taro的通行证组件，简单易用（仅适用于小程序）
    安装：cnpm install @putao/taro-ptpassport --save

    引用 ：import Login from '@putao/taro-ptpassport'

    demo：/pages/Login/main.js

# 版本 
      node v12.14.0
      Taro v1.3.42

# 技术栈

React + Taro + Redux + Sass + ES6/ES7

## 项目运行

```

git clone gogs@code.putao.io:web_client/taro-ptpassport.git

cd taro-ptpassport

# 全局安装taro脚手架
npm install -g @tarojs/cli@1.3.42

# 项目依赖为1.3.42版本，如要升级，请同时升级项目依赖
# 如用1.3.42版本，请忽略这句
taro update project

# 安装项目依赖
cnpm install

# 微信小程序
yarn dev:weapp
yarn build:weapp

npm run dev:weapp
npm run build:weapp
# 仅限全局安装
taro build --type weapp --watch
taro build --type weapp
# npx 用户也可以使用
npx taro build --type weapp --watch
npx taro build --type weapp

# 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# H5
npm run dev:h5

# React Native
npm run dev:rn

# pages模版快速生成
npm run tep `文件名`

```
## 更新
Taro 提供了更新命令来更新 CLI 工具自身和项目中 Taro 相关的依赖
```
	更新 Taro CLI 工具
	# taro
	$ taro update self
	# npm
	npm i -g @tarojs/cli@latest
	# yarn
	yarn global add @tarojs/cli@latest
	更新项目中 Taro 相关的依赖
	$ taro update project
```
##Taro Doctor
Taro Doctor 就像一个医生一样，可以诊断项目的依赖、设置、结构，以及代码的规范是否存在问题，并尝试给出解决方案。
但和真正的医生不一样，Taro Doctor 不需要排队挂号，也不用花钱。你只需要在终端运行命令：taro doctor


# 业务介绍

目录结构

    ├── .temp                  // H5编译结果目录
    ├── .rn_temp               // RN编译结果目录
    ├── dist_weapp                   // 小程序编译结果目录
    ├── config                 // Taro配置目录
    │   ├── dev.js                 // 开发时配置
    │   ├── index.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── dist                    // 源码目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── static                 // 静态资源
    │   ├── pages                  // 主包页面文件目录
    │   │   └── index
    │   │       ├── index.js           // 页面逻辑
    │   │       ├── index.scss         // 页面样式页面api
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   ├── app.js             // 入口文件
    │   └── index.html
    ├── package.json
    └── template.js            // pages模版快速生成脚本,执行命令 npm run tep `文件名`


# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

### dva开发文档地址

> https://dvajs.com/

### 微信小程序官方文档

> https://mp.weixin.qq.com/debug/wxadoc/dev/

### 百度智能小程序官方文档

> https://smartprogram.baidu.com/docs/introduction/register/index.html

### 支付宝小程序官方文档

> https://docs.alipay.com/mini/developer/getting-started

### 字节跳动小程序官方文档

> https://microapp.bytedance.com/

