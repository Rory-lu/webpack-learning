const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

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
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
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
    }),

    // OptimizeCssAssetsWebpackPlugin 本身的默认配置就足够压缩css了
    new OptimizeCssAssetsWebpackPlugin()
  ],

  mode: 'development'
}
