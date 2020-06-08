const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 设置node的环境变量
// process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/js/index.js',

  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          
          'css-loader',

          /**
           * css 兼容性处理： 得用到postcss
           * 1.要用postcss的话 得装一个loader: postcss-loader 以及 一个插件: postcss-preset-env
           * postcss-preset-env的作用：帮postcss 找到package.json中的browserslist里面的配置，通过配置加载指定的css兼容性样式
           * 2.配置如下
           * 3.package.json里面配置 browerslist
           * 设置环境node的环境变量 process.env.NODE_ENV = 'development'
           * "browserslist": {
           *     // 开发环境
                "development": [
                  "last 1 chrome version", // 兼容最近的chrome的一个版本浏览器
                  "last 1 firefox version", // 同理
                  "last 1 safari version" // ..
                ],
                // 生产环境 （默认是看生产环境）
                "production": [
                  ">0.2%", // 兼容99.8%的浏览器
                  "not dead", // 死了的浏览器不要
                  "not op_mini all" // op_mini 浏览器不要
                ]
              }
           */
          // 使用postcss-loader的默认配置，可以这样写
          // 'postcss-loader'
          // 但是想要更改配置的话，就得下面这样写：
          {
            loader: 'postcss-loader',
            options: {
              // 固定写法
              ident: 'postcss',
              plugins: () => [
                // 要引入postcss-preset-env插件
                require('postcss-preset-env')()
              ]
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],

  mode: 'development'
}
