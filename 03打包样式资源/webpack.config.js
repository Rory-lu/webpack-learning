// resolve 用来拼接绝对路径的方法
const { resolve } = require('path');

module.exports = {
  // webpack 打包的入口文件
  entry: './src/index.js',
  
  // webpack输出的资源文件
  output: {
    // 文件名
    filename: 'built.js',
    // 文件路径
    // 引用绝对路径
    // __dirname: nodeJS的一个变量，代表当前文件的目录的绝对路径
    path: resolve(__dirname, 'build')
  },

  // loader 配置
  module: {
    rules: [
      // 详细loader配置
      // 处理css 文件
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      // 处理less文件
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },

  // plugins的配置
  plugins: [
    // 详细plugins的配置
  ],

  // 模式
  mode: 'development'
}
