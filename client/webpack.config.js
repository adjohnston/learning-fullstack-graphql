const resolve = require('path').resolve

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }],
  },
}
