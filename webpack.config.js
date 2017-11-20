const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: 
  './frontend/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'frontend/public/assets/'),
    publicPath: '/frontend/public/assets/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'env']
          }
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
    new ExtractTextPlugin('styles.css')
  ],
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    port: 9001,
    compress: true,
    watchContentBase: true,
    hot: true,
  }
}


