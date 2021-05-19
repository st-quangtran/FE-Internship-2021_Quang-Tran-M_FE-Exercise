var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js(x?))$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    }
  },
  devServer: {
    contentBase: path.join(__dirname),
    compress: true,
    port: 9009,
  },
  mode: 'development',
  devtool: 'eval',
}
