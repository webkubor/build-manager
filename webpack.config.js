// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/time.webpack.js',
  output: {
    filename: 'time.js',
    path: path.resolve(__dirname, 'out'),
    library: 'time',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  target: 'web',
  mode: 'development'
};
