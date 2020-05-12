const outputRootStrtegy = {
  h5: 'dist_h5',
  weapp: 'dist_weapp',
  alipay: 'dist_alipay',
  swan: 'dist_swan',
  undefined: 'dist'
}
const env = JSON.parse(process.env.npm_config_argv)['cooked'][1].split(':')[1]
const outputRoot = outputRootStrtegy[env]

const config = {
  projectName: 'mini_cityshop',
  date: '2020-3-20',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'dist',
  outputRoot: outputRoot,
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {},
  copy: {
    // 如果你遇到了编译后，资源文件（如图片）没有被编译到 dist 目录中导致找不到，可以令其直接被复制过来
    patterns: [
      // {
      //   from: 'src/components/wxParse/wxParse.wxss',
      //   to: outputRoot + '/components/wxParse/wxParse.wxss'
      // },
      // {
      //   from: 'src/components/wxParse/wxParse.wxml',
      //   to: outputRoot + '/components/wxParse/wxParse.wxml'
      // }
    ],
    options: {}
  },
  weapp: {
    // 如果你遇到了编译时，压缩过的 js 文件过编译器报错，可以将其排除编译：
    compile: {
      exclude: [
        // 'src/utils/qqmap-wx-jssdk.js',
        // 'src/components/third-party/wemark/remarkable.js',
      ]
    },
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
          }
        },
        pxtransform: {
          enable: true,
          config: {}
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8']
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
