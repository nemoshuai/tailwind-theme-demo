/*
 * @Author: nemo
 * @Date: 2022-02-13 18:38:35
 * @LastEditTime: 2022-02-19 18:24:50
 * @LastEditors: nemo
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /tailwind-theme-demo/webpack.config.js
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        use: [
        //  'babel-loader', 可做其他js解析的配置
          'ts-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'less-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // webpack 指定模版
    }),
  ],
  resolve: {
    // 解析扩展
    extensions: ['.tsx', '.js', '.ts', '.jsx'],
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/component/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
    },
  },
  devServer: {
    host: 'localhost',
    historyApiFallback: true, // 找不到则默认回到首页
    port: 3000,
    hot: true,
    open: true,
  },
}
