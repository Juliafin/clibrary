const path = require('path');
const webpack = require('webpack');
module.exports = {

  entry: 
  ['./frontend/src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/frontend/public/assets/js/'),
    publicPath: '/frontend/public/assets/js'
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
        use : [{
          loader: 'style-loader',
          options: {
            sourcemap: true
          }
        },
        {  
          loader: 'css-loader'
        }]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'source-map',
  devServer: {
    watchOptions: {
      ignored: /node_modules/
    },
    port: 9001,
    compress: true,
    watchContentBase: true,
    hot: true
  }
}
