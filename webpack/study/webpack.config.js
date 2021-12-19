const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : 'production',
  // entry: './src/index.js',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist_'),
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
};