var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  devtool: 'inline-source-map',
  entry: {
    polyfills: './app/polyfills.ts',
    vendor: './app/vendor.ts',
    app: './app/app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.ts', '.js', '.html', '.css', '.json'],
    descriptionFiles: ['package.json']
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html',
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        loader: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'raw-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]',
        exclude: /node_modules/
      },
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    // proxy: {
    //   '*': {
    //     target: 'http://localhost:3000',
    //     secure: false
    //   }
    // }
  }

};
