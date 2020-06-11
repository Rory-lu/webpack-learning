const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      /**
       * 1. 基本的js兼容性处理: babel-loader & @babel/preset-env (依赖于 babel & @babel/core)
       * options: {
          // 预设： 指示babel做怎样的兼容性处理
          presets: ['@babel/preset-env']
        }
       *    => 运行之后 你会发现 把es6的箭头函数 转换成了普通的function
       *    => 这种 只能转换基本的语法，基本的js兼容性处理， 高级的比如promise这种是处理不了的
       * 2. 全部的js兼容性处理 (比如兼容promise这种高级语法) 需要用到 @babel/polyfill, 然后直接在源代码中引入 import @babel/polyfill即可 440 KiB
       *    => 这种是会导致built之后的文件体积太大，因为它把所有的兼容性都处理好了，都提前定义在了built.js里面, 也不推荐使用
       * 3. 按需加载,需要做兼容性处理的就做  需要用到core-js
       *    3.1 不能和第二种同时使用了
       *    3.2 配置: 更改presets: [['@babel/preset-env', {// 按需加载}]]
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          // 预设： 指示babel做怎样的兼容性处理
          presets: [
            [
              '@babel/preset-env',
              {
                // 按需加载
                useBuiltIns: 'usage',
                corejs: {
                  version: 3
                },
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  mode: 'development'
};
