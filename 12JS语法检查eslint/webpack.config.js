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
      // 1.使用eslint-loader, eslint-loader依赖于eslint
      // 2.设置eslint的检查规则， 推荐使用airbnb规则，可以自行在github上搜索一下
      //   airbnb具体针对eslint又有很多规则，然后推荐使用eslint-config-airbnb-base (自行在npmjs.com上搜索)
      //   eslint-config-airbnb-base 又得依赖于 eslint 和 eslint-plugin-import
      // 3.在package.json里面设置
      // {
      //   "eslintConfig": {
      //    "extends": "airbnb-base"
      //   }
      //    "eslintConfig": {
      //      "extends": "airbnb-base"
      //    }
      // }
      // 4.如何自动修复: eslint-loader, options - fix: true
      // 5.忽略检查，下一行不进行eslint检查 注释 // eslint-disable-next-line
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],

  mode: 'development',
};
