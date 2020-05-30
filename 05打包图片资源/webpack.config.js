const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 处理 css 样式资源
      {
        test: /\.css$/,
        // 使用多个loader的写法
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理 图片资源, 这种不能处理html中的图片资源
      {
        test: /\.(png|jpg|gif)$/,
        // 使用url-loader来处理图片资源， 如果单个loader的话可以以下这样写：
        // 单独的url-loader 是可以处理图片资源的，但是默认会把你的图片资源转换成base64来处理
        loader: 'url-loader',
        // 如果需要特殊配置，比如限制 8kb以下的图片才让它转换成base 64来处理的话 则需要 options
        // 而且此时就需要 file-loader 了
        options: {
          // 这个意思是 8kb以上的图片就不允许转换成base 64来处理了
          // 优点： 减少服务器资源请求次数，减轻服务器压力
          // 缺点： 转成base 64之后，图片体积就变大了，文件的请求速度就会变慢了
          limit: 8 * 1023,
          // url-loader 默认是使用es6模块化解析的，而html-loader引入图片是commonJS模块化解析的。所以会不兼容
          // 所以需要的话可以关闭es6模块化解析, 如下:
          esModule: false,
          // 给图片进行重命名
          // hash：10代码取hash值的前10位
          // ext: 代表图片的源扩展名
          name: '[hash:10].[ext]'
        }
      },
      // html-loader用来处理html文件中的img图片（负责引入img图片，从而能被url-loader进行处理）
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
}
