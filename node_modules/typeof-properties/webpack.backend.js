const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index:'./src/typeof-properties.js'
  },
  output: {
    filename: 'typeof-properties.node.js',
    path: path.resolve(__dirname, 'dist'),
    library:'typeofProperties',
    libraryTarget: 'commonjs2',
    libraryExport:'default',
    globalObject: 'this'
  },
  target:'node',
  externals: [nodeExternals()]
};