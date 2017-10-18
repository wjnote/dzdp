var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: __dirname + '/app', //源文件目录
  entry: {
    app: './index.js', //在源文件目录下找 index文件，作为打包的入口文件
    vendor: ['react', 'react-dom']
  },
  output: {
    path: __dirname + '/build/', //打包生成文件
    filename: '[name].bundle.js', //文件名字
  },

  devServer: { // 配置webpack-dev-server
    port: 9000,
    inline: true,
    contentBase: "./build",
    historyApiFallback: true,
    // 代理的转发， 凡事 '/api' 开头的http请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据
    // koa 代码在 ./mock 目录中，启动的命令为 npm run mock, 项目开发中mock的数据也会分模块
    proxy:{
      '/api':{
        target: "http://localhost:3000",
        secure: false
      }
    }
  },
  resolve: {
    // order matters, resolves left to right
    extensions: ['*', '.js', '.jsx', '.less']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          presets: ["react", "es2015"]
        }
      }],
    }, 
    { test: /\.css$/, use: ["style-loader", "css-loader"], }, 
    { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"],}]
  },
  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/index.tmpl.html'
    })
  ]
};