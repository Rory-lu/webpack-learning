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
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // 配置 webpack-dev-server
  // 需要安装webpack-dev-server -D 
  // 开发服务器devServer作用: 用来自动化（自动编译，自动打开浏览器，自动刷新等）
  // 特点!!!:只会在内存中编译打包，不会有任何输出
  // webpack-dev-server不是全局安装的,所以只能通过npx 启动
  // 或者 scripts: {start: 'webpack-dev-server'}, 得在当前目录下的package.json
  devServer: {
    // 项目构建后路径
    contentBase: resolve(__dirname, 'build'),
    // 启动GZIP压缩
    compress: true,
    // 端口号
    port: 3000,
    // 自动打开电脑的默认浏览器
    open: true
  }
}
