const path = require('path');

const config = {
  entry: 'src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  target: 'node',
  resolve: {
    extensions: ['.ts', '.mjs', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  }
};

module.exports = config;
