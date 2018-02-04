const resolve = require('path').resolve
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },

      // necessary due to a TS issue with a package used by Apollo Link
      // https://github.com/apollographql/apollo-link/issues/248
      {
        test: /node_modules\/apollo-link.*?\/lib\/.*?.js/,
        loader: 'string-replace-loader',
        options: {
          search: 'exports.Observable = Observable',
          replace: 'exports.Observable = Observable.default',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
}
