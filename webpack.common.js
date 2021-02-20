const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

const rules = [
  {
    test: [/\.js$/, /\.jsx?$/],
    exclude: /node_modules/,
    use: ['babel-loader'],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
  },
  {
    test: [/\.less$/, /\.css$/],
    use: [{
      loader: 'style-loader',
    }, {
      loader: 'css-loader',
    }, {
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    }],
  },
  { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
];

const getEnv = () => {
  const fileEnv = dotenv.config({ path: '.env' }).parsed;

  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});
  return new webpack.DefinePlugin(envKeys);
};

module.exports = {
  node: {
    fs: 'empty',
  },
  externals: [
    { './cptable': 'var cptable' },
    { './jszip': 'jszip' },
  ],
  entry: {
    index: path.join(__dirname, '/src/index.js'),
  },
  output: {
    path: path.join(__dirname, '/build'),
    filename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules,
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@locales': path.resolve(__dirname, './src/locales'),
      '@pages': path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '/src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      favicon: path.join(__dirname, '/public/favicon.ico'),
    }),
    getEnv(),
  ],
  devServer: {
    historyApiFallback: true,
  },
};
