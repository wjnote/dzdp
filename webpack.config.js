var path = require('path');

module.exports = {
  context: __dirname + '/app', //源文件目录
  entry: {
    app: './index.js' //在源文件目录下找 index文件，作为打包的入口文件
  },
  output: {
    path: __dirname + '/build/', //打包生成文件
    filename: '[name].bundle.js', //文件名字
  },

  devServer: { // 配置webpack-dev-server
    port: 8090,
    inline: true,
    contentBase: "./build", 
    historyApiFallback: true
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
    }, { //这里的内容是新增加的对样式的支持
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    }, {
      test: /\.less$/,
      use: ["style-loader", "css-loader", "less-loader"],
    }]
  },
};