const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry:[
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './frontend/src/index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'frontend/public/dist/'),
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use : ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /(?=\.jpe?g$)|(?=\.png$)|(?=\.gif$)|(?=\.svg$)/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('styles.css'),
    new webpack.NamedModulesPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    port: 9001,
    contentBase: path.join(__dirname, 'frontend/public/'),
    historyApiFallback: true,
    compress: true,
    hot: true,
    publicPath: '/dist/'
  }
}

