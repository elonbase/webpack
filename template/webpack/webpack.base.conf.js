'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

{{#multipleServer}}

var apiHost
var setupAPI = function() {
  console.log('process.env.NODE_ENV:' + process.env.NODE_ENV)
  switch (process.env.NODE_ENV) {
    case 'development':
      apiHost = "'http://g.d.dacube.cn:98/APP-MANAGE-SV-4J/'" //开发环境api地址
      break;
    case 'test':
      apiHost = "'https://g.t.dacube.cn/APP-MANAGE-SV-4J/'" //测试环境api地址
      break;
    case 'production':
      apiHost = "'https://g.dacube.cn/APP-MANAGE-SV-4J/'" //正式环境api地址
      break;  
    default:
      apiHost = "'http://g.d.dacube.cn:98/APP-MANAGE-SV-4J/'" //未指定NODE_ENV时的api地址
      break;
  }
}
setupAPI()

{{/multipleServer}}

{{#lint}}const createLintingRule = () => ({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  include: [resolve('src'), resolve('test')],
  options: {
    formatter: require('eslint-friendly-formatter'),
    emitWarning: !config.dev.showEslintErrorsInOverlay
  }
}){{/lint}}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: [
      './src/main.js',
      './src/static/css/shared.css',
      './src/static/css/normalize.min.css'
    ]
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      {{#if_eq build "standalone"}}
      'vue$': 'vue/dist/vue.esm.js',
      {{/if_eq}}
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {{#lint}}
      ...(config.dev.useEslint ? [createLintingRule()] : []),
      {{/lint}}
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }{{#multipleServer}},
  plugins:[
    new webpack.DefinePlugin({
      _API_:apiHost
    })
  ]{{/multipleServer}}
}
