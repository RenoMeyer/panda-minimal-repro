// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

const resolve = require('path').resolve;

const slice = [].slice;
function inProject() {
  return resolve.apply(resolve, [resolve(__dirname)].concat(slice.apply(arguments)));
}

const TENANT = process.env.TENANT || 'jobs';

const SRC_DIRNAME = 'src';

module.exports = {
  mode: 'development',
  entry: ['webpack-hot-middleware/client', './src/index.tsx'],
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({ overlay: { sockIntegration: 'whm' } })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'panda': inProject('./panda'),
      common: inProject(`src/${process.env.TENANT || 'common'}`),
    },
},
};
