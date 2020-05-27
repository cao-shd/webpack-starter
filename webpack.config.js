// 配置使用 Node 语法

// 默认输入路径 src/index.js
// 默认输出路径 dist/main.js

const path = require('path');

// 在内存中生成首页 html 的插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 定义 html 插件
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  // 源文件路径为 /src/index.html
  template: path.join(__dirname, './src/index.html'),
  // 生成内存首页文件 名为 index.html
  filename: 'index.html'
});

module.exports = {
  // 必须配置项 定义当前开发环境
  // 可选值: [ 'development' | 'production' ]
  // development 编译后的文件不会被压缩
  // production 编译后的文件会被压缩
  mode: 'development',
  // 使用插件
  plugins: [
    htmlWebpackPlugin
  ]
}

