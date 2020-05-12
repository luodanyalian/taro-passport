module.exports = {
  env: {
    NODE_ENV: '"production"'
  },
  // 区分开发和线上环境的 API
  defineConstants: {},
  // 如果你在开发中遇到了开发环境时样式没有问题，但是编译打包后出现部分样式丢失，可能是因为 csso 的 restructure 特性
  csso: {
    enable: true,
    config: {
      restructure: false
    }
  },
  weapp: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  }
}
