const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: {
    home: './assets/javascript/product.js',
    cart: './assets/javascript/cart.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      filename: 'cart.html',
      template: 'cart.html',
      chunks: ['cart']
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9000,
  },
  mode: 'development'
};
