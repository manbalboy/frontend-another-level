const path = require('path');

module.exports = {
  mode : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist_'),
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