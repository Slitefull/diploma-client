const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  node: {
    fs: 'empty',
  },
  externals: [
    { './cptable': 'var cptable' },
    { './jszip': 'jszip' },
  ],
  mode: 'development',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        secure: false,
      },
    },
    contentBase: './dist',
    watchOptions: {
      // poll: true,
    },
    hot: true,
    open: true,
    host: 'localhost',
    port: 3000,
  },
});
