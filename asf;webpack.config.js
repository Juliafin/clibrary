const webpack = require('webpack')
const path = require('path')

/*
 * We've enabled UglifyJSPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/uglifyjs-webpack-plugin
 *
 */

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');




module.exports = {
  entry: "./frontend/src/index.js",

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'frontend/public/assets/js/')
  },

  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'env']
      }
    }, 
    {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
        options: {
          sourceMap: true
        }
      }, 
      {
        loader: 'css-loader'
      }]
    }]
  },
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, '/frontend/public'),
    port: 9001,
    compress: true,
    open:true,
    hot: true
  },
  plugins: [new UglifyJSPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()]
}