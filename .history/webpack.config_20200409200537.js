const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    poll: 1000, // 每秒询问多少次
    aggregateTimeout: 500,  //防抖 多少毫秒后再次触发
    ignored: /node_modules/ //忽略时时监听
  },
  devServer: {
    // 端口，默认8080
    port: '8099',
    // 进度条
    progress: true,
    // 启动后访问目录，默认是项目根目录，这个设置到打包后目录
    contentBase: './public',
    // 启动压缩
    compress: true
  },
  // 模式，2种：生产模式(production)和开发模式(development)
  // 开发模式不压缩打包后代码，生产模式压缩打包后代码
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
      }
    ],

  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'busiui.js',
    path: path.resolve(__dirname, 'dist')
  }
};
