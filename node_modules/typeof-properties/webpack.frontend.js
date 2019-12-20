const path = require('path');

module.exports = {
  entry: {
    index: './src/typeof-properties.js'
  },
  output: {
    filename: 'typeof-properties.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'typeofProperties',
    libraryTarget: 'var',
    libraryExport: 'default',
    globalObject: 'this'
  },
  target: 'web'
};