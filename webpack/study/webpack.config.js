const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'development',
  entry: {
    // index: {import :'./src/index.js', dependOn: 'shared'},
    // another: {import :'./src/another-module.js',dependOn: 'shared'},
    // shared: 'lodash',

    index: './src/index.js',
    another: './src/another-module.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './index.html'
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      // css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // 이미지
      {
        test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
        type: 'asset/resource',
      },
      // 글꼴
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};